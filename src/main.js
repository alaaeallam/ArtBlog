import * as THREE from "three";
import { vertexShader, fragmentShader } from "./modules/shaders.js";
import { fetchProjects } from './modules/data.js';

let projects = [];

const config = {
  cellSize: 0.75,
  zoomLevel: 1.25,
  lerpFactor: 0.075,
  borderColor: "rgba(255, 255, 255, 0.15)",
  backgroundColor: "rgba(0, 0, 0, 1)",
  textColor: "rgba(128, 128, 128, 1)",
  hoverColor: "rgba(255, 255, 255, 0)",
};

let scene, camera, renderer, plane;
let isDragging = false, isClick = true, clickStartTime = 0;
let previousMouse = { x: 0, y: 0 }, offset = { x: 0, y: 0 }, targetOffset = { x: 0, y: 0 };
let zoomLevel = 1.0, targetZoom = 1.0;
let mousePosition = { x: -1, y: -1 };

const rgbaToArray = (rgba) => {
  const match = rgba.match(/rgba?\(([^)]+)\)/);
  if (!match) return [1, 1, 1, 1];
  return match[1].split(",").map((v, i) => i < 3 ? parseFloat(v.trim()) / 255 : parseFloat(v.trim() || 1));
};

const createTextTexture = (title, year) => {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 2048, 256);
  ctx.font = "80px IBM Plex Mono";
  ctx.fillStyle = config.textColor;
  ctx.textBaseline = "middle";
  ctx.imageSmoothingEnabled = false;
  ctx.textAlign = "left";
  ctx.fillText(title.toUpperCase(), 30, 128);
  ctx.textAlign = "right";
  ctx.fillText(year.toString().toUpperCase(), 2048 - 30, 128);
  const texture = new THREE.CanvasTexture(canvas);
  Object.assign(texture, {
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    flipY: false,
    generateMipmaps: false,
    format: THREE.RGBAFormat,
  });
  return texture;
};

const createTextureAtlas = (textures, isText = false) => {
  const atlasSize = Math.ceil(Math.sqrt(textures.length));
  const textureSize = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = atlasSize * textureSize;
  const ctx = canvas.getContext("2d");
  if (isText) ctx.clearRect(0, 0, canvas.width, canvas.height);
  else {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  textures.forEach((texture, index) => {
    const x = (index % atlasSize) * textureSize;
    const y = Math.floor(index / atlasSize) * textureSize;
    const image = isText ? texture.source?.data : texture.image;
    if (image?.complete || image instanceof HTMLCanvasElement) {
      ctx.drawImage(image, x, y, textureSize, textureSize);
    }
  });
  const atlasTexture = new THREE.CanvasTexture(canvas);
  Object.assign(atlasTexture, {
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    flipY: false,
  });
  return { atlasTexture, atlasSize };
};

const loadTextures = async (projectsInput) => {
  const textureLoader = new THREE.TextureLoader();

  // Sort projects by title for consistent order
  const sortedProjects = [...projectsInput].sort((a, b) => a.title.localeCompare(b.title));

  const imageTextures = [];
  const textTextures = [];

  for (const project of sortedProjects) {
    try {
      const texture = await new Promise((resolve, reject) => {
        textureLoader.load(
          project.image,
          resolve,
          undefined,
          reject
        );
      });
      Object.assign(texture, {
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
      });

      imageTextures.push(texture);
      textTextures.push(createTextTexture(project.title, project.year));
    } catch (err) {
      console.warn("Skipping image due to error:", project.image);
    }
  }

  return { imageTextures, textTextures, validProjects: sortedProjects };
};

const animate = () => {
  requestAnimationFrame(animate);
  offset.x += (targetOffset.x - offset.x) * config.lerpFactor;
  offset.y += (targetOffset.y - offset.y) * config.lerpFactor;
  zoomLevel += (targetZoom - zoomLevel) * config.lerpFactor;
  if (plane?.material.uniforms) {
    plane.material.uniforms.uOffset.value.set(offset.x, offset.y);
    plane.material.uniforms.uZoom.value = zoomLevel;
  }
  renderer.render(scene, camera);
};

const init = async () => {
  const container = document.getElementById("gallery");
  if (!container) return;

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  const bgColor = rgbaToArray(config.backgroundColor);
  renderer.setClearColor(new THREE.Color(bgColor[0], bgColor[1], bgColor[2]), bgColor[3]);
  projects = await fetchProjects();
  console.log("Initializing...");
  console.log("projects:", projects);
  const slug = window.location.pathname.replace(/^\//, "").toLowerCase();
  const matched = projects.find(p => p.slug && p.slug.toLowerCase() === slug)
  console.log("matched:", matched);
  if (matched) {
    document.body.innerHTML = `
      <style>
        body {
          margin: 0;
          background: #000;
          font-family: sans-serif;
          color: white;
          padding: 60px 20px;
        }
        .container {
          max-width: 1200px;
          margin: auto;
        }
        .back-link {
          color: #aaa;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 30px;
          display: inline-block;
        }
        .header {
          margin-bottom: 40px;
        }
        .header h1 {
          font-size: 36px;
          margin: 0;
        }
        .meta {
          color: #777;
          font-size: 16px;
        }
        .content {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .image-container {
          flex: 1 1 50%;
          max-width: 600px;
        }
        .image-container img {
          width: 100%;
          border: 1px solid #333;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.6s ease;
        }
        .image-container img.loaded {
          opacity: 1;
          transform: scale(1);
        }
        .desc {
          flex: 1 1 40%;
          font-size: 18px;
          line-height: 1.6;
          color: #ccc;
        }
        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }
          .desc {
            margin-top: 30px;
          }
        }
      </style>
      <div class="container">
        <a class="back-link" href="/">← Back to Gallery</a>
        <div class="header">
          <h1>${matched.title}</h1>
          <div class="meta">${matched.year}</div>
        </div>
        <div class="content">
          <div class="image-container">
            <img src="${matched.image}" alt="${matched.title}" onload="this.classList.add('loaded')" />
          </div>
          <div class="desc">
            ${matched.description || "No description available."}
          </div>
        </div>
      </div>
    `;
    return;
  }

const textureResults = await loadTextures(projects);
const { imageTextures, textTextures, validProjects } = textureResults;
console.log("Image-texture count:", imageTextures.length);
console.log("Valid projects count:", validProjects.length);
validProjects.forEach((p, i) => {
  console.log(`[${i}] ${p.title} -> ${p.image}`);
});
projects = validProjects;
  const { atlasTexture: imageAtlas, atlasSize } = createTextureAtlas(imageTextures, false);
  const { atlasTexture: textAtlas } = createTextureAtlas(textTextures, true);

  const uniforms = {
    uOffset: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(container.offsetWidth, container.offsetHeight) },
    uBorderColor: { value: new THREE.Vector4(...rgbaToArray(config.borderColor)) },
    uHoverColor: { value: new THREE.Vector4(...rgbaToArray(config.hoverColor)) },
    uBackgroundColor: { value: new THREE.Vector4(...rgbaToArray(config.backgroundColor)) },
    uMousePos: { value: new THREE.Vector2(-1, -1) },
    uZoom: { value: 1.0 },
    uCellSize: { value: config.cellSize },
    uTextureCount: { value: projects.length },
    uImageAtlas: { value: imageAtlas },
    uTextAtlas: { value: textAtlas },
    uColumns: { value: atlasSize }
  };

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });

  plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  setupEventListeners();
  animate();
};

const setupEventListeners = () => {
  document.addEventListener("mousedown", onPointerDown);
  document.addEventListener("mousemove", onPointerMove);
  document.addEventListener("mouseup", onPointerUp);
  document.addEventListener("mouseleave", onPointerUp);
  window.addEventListener("resize", onWindowResize);
  document.addEventListener("contextmenu", e => e.preventDefault());
  const passive = { passive: false };
  document.addEventListener("touchstart", onTouchStart, passive);
  document.addEventListener("touchmove", onTouchMove, passive);
  document.addEventListener("touchend", onPointerUp, passive);
};

const onWindowResize = () => {
  const container = document.getElementById("gallery");
  if (!container || !plane) return;
  const { offsetWidth: width, offsetHeight: height } = container;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  plane.material.uniforms.uResolution.value.set(width, height);
};

const onPointerDown = e => startDrag(e.clientX, e.clientY);
const onTouchStart = e => { e.preventDefault(); startDrag(e.touches[0].clientX, e.touches[0].clientY); };
const onPointerMove = e => handleMove(e.clientX, e.clientY);
const onTouchMove = e => { e.preventDefault(); handleMove(e.touches[0].clientX, e.touches[0].clientY); };

const startDrag = (x, y) => {
  isDragging = true;
  isClick = true;
  clickStartTime = Date.now();
  document.body.classList.add("dragging");
  previousMouse.x = x;
  previousMouse.y = y;
  setTimeout(() => isDragging && (targetZoom = config.zoomLevel), 150);
};

const handleMove = (x, y) => {
  if (!isDragging) return;
  const deltaX = x - previousMouse.x;
  const deltaY = y - previousMouse.y;
  if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) isClick = false;
  targetOffset.x -= deltaX * 0.003;
  targetOffset.y += deltaY * 0.003;
  previousMouse.x = x;
  previousMouse.y = y;
};

const onPointerUp = e => {
  isDragging = false;
  document.body.classList.remove("dragging");
  targetZoom = 1.0;
  if (!isClick || Date.now() - clickStartTime > 200) return;

  const x = e.clientX || e.changedTouches?.[0]?.clientX;
  const y = e.clientY || e.changedTouches?.[0]?.clientY;
  if (x === undefined || y === undefined) return;

  const rect = renderer.domElement.getBoundingClientRect();
  const sx = ((x - rect.left) / rect.width) * 2 - 1;
  const sy = -(((y - rect.top) / rect.height) * 2 - 1);
  const radius = Math.sqrt(sx * sx + sy * sy);
  const distortion = 1.0 - 0.08 * radius * radius;
  const worldX = sx * distortion * (rect.width / rect.height) * zoomLevel + offset.x;
  const worldY = sy * distortion * zoomLevel + offset.y;

  const cellX = Math.floor(worldX / config.cellSize);
  const cellY = Math.floor(worldY / config.cellSize);
  const cols = plane.material.uniforms.uColumns.value;
  const linearIndex = Math.floor(cellX + cellY * cols);
  const texIndex = ((linearIndex % projects.length) + projects.length) % projects.length;

  // ✅ Place it right here
  console.log("Clicked texIndex:", texIndex, "Slug:", projects[texIndex]?.slug);

  const targetSlug = projects[texIndex]?.slug;
  if (targetSlug) window.location.href = `/${targetSlug}`;
};

init();