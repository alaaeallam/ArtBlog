var Vh=Object.defineProperty;var Po=n=>{throw TypeError(n)};var kh=(n,e,t)=>e in n?Vh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ve=(n,e,t)=>kh(n,typeof e!="symbol"?e+"":e,t),Lo=(n,e,t)=>e.has(n)||Po("Cannot "+t);var C=(n,e,t)=>(Lo(n,e,"read from private field"),t?t.call(n):e.get(n)),Ue=(n,e,t)=>e.has(n)?Po("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),Ce=(n,e,t,i)=>(Lo(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="160",Wh=0,Uo=1,Xh=2,Pl=1,qh=2,gn=3,Kn=0,Bt=1,Mn=2,$n=0,ki=1,Do=2,Io=3,No=4,$h=5,oi=100,jh=101,Yh=102,Fo=103,Oo=104,Kh=200,Zh=201,Jh=202,Qh=203,Fa=204,Oa=205,ef=206,tf=207,nf=208,rf=209,sf=210,af=211,of=212,cf=213,lf=214,uf=0,hf=1,ff=2,vs=3,df=4,pf=5,mf=6,gf=7,Ll=0,_f=1,vf=2,jn=0,xf=1,Sf=2,yf=3,Ef=4,Mf=5,bf=6,Ul=300,Ki=301,Zi=302,Ba=303,za=304,Is=306,Ha=1e3,xt=1001,Ga=1002,_t=1003,Bo=1004,Js=1005,bt=1006,Tf=1007,vr=1008,Yn=1009,Af=1010,wf=1011,Qa=1012,Dl=1013,Wn=1014,Xn=1015,xr=1016,Il=1017,Nl=1018,di=1020,Rf=1021,qt=1023,Cf=1024,Pf=1025,pi=1026,Ji=1027,Lf=1028,Fl=1029,Uf=1030,Ol=1031,Bl=1033,Qs=33776,ea=33777,ta=33778,na=33779,zo=35840,Ho=35841,Go=35842,Vo=35843,zl=36196,ko=37492,Wo=37496,Xo=37808,qo=37809,$o=37810,jo=37811,Yo=37812,Ko=37813,Zo=37814,Jo=37815,Qo=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,ia=36492,sc=36494,ac=36495,Df=36283,oc=36284,cc=36285,lc=36286,Hl=3e3,mi=3001,If=3200,Nf=3201,Ff=0,Of=1,$t="",vt="srgb",wn="srgb-linear",eo="display-p3",Ns="display-p3-linear",xs="linear",tt="srgb",Ss="rec709",ys="p3",bi=7680,uc=519,Bf=512,zf=513,Hf=514,Gl=515,Gf=516,Vf=517,kf=518,Wf=519,hc=35044,fc="300 es",Va=1035,Tn=2e3,Es=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ra=Math.PI/180,ka=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function Xf(n,e){return(n%e+e)%e}function sa(n,e,t){return(1-t)*n+t*e}function dc(n){return(n&n-1)===0&&n!==0}function Wa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],g=r[0],m=r[3],f=r[6],M=r[1],v=r[4],T=r[7],L=r[2],w=r[5],R=r[8];return s[0]=o*g+a*M+c*L,s[3]=o*m+a*v+c*w,s[6]=o*f+a*T+c*R,s[1]=l*g+u*M+h*L,s[4]=l*m+u*v+h*w,s[7]=l*f+u*T+h*R,s[2]=d*g+p*M+_*L,s[5]=d*m+p*v+_*w,s[8]=d*f+p*T+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,_=t*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*l-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Ge;function Vl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qf(){const n=Sr("canvas");return n.style.display="block",n}const pc={};function pr(n){n in pc||(pc[n]=!0,console.warn(n))}const mc=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gc=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[wn]:{transfer:xs,primaries:Ss,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:tt,primaries:Ss,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ns]:{transfer:xs,primaries:ys,toReference:n=>n.applyMatrix3(gc),fromReference:n=>n.applyMatrix3(mc)},[eo]:{transfer:tt,primaries:ys,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gc),fromReference:n=>n.applyMatrix3(mc).convertLinearToSRGB()}},$f=new Set([wn,Ns]),Ye={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$f.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Xr[e].toReference,r=Xr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Xr[n].primaries},getTransfer:function(n){return n===$t?xs:Xr[n].transfer}};function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ti;class kl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=Sr("canvas")),Ti.width=e.width,Ti.height=e.height;const i=Ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jf=0;class Wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ca(r[o].image)):s.push(ca(r[o]))}else s=ca(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yf=0;class Lt extends rr{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=xt,r=xt,s=bt,o=vr,a=qt,c=Yn,l=Lt.DEFAULT_ANISOTROPY,u=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ir(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===mi?vt:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case xt:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case xt:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?mi:Hl}set encoding(e){pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mi?vt:$t}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ul;Lt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,T=(p+1)/2,L=(f+1)/2,w=(u+d)/4,R=(h+g)/4,q=(_+m)/4;return v>T&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=R/i):T>L?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=w/r,s=q/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=q/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kf extends rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mi?vt:$t),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends Kf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xl extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zf extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==d||l!==p||u!==_){let m=1-a;const f=c*d+l*p+u*_+h*g,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const L=Math.sqrt(v),w=Math.atan2(L,f*M);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}const T=a*M;if(c=c*m+d*T,l=l*m+p*T,u=u*m+_*T,h=h*m+g*T,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*h+c*p-l*d,e[t+1]=c*_+u*d+l*h-a*p,e[t+2]=l*_+u*p+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new O,_c=new Nr;class Fr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),$r.subVectors(this.max,lr),Ai.subVectors(e.a,lr),wi.subVectors(e.b,lr),Ri.subVectors(e.c,lr),Ln.subVectors(wi,Ai),Un.subVectors(Ri,wi),ti.subVectors(Ai,Ri);let t=[0,-Ln.z,Ln.y,0,-Un.z,Un.y,0,-ti.z,ti.y,Ln.z,0,-Ln.x,Un.z,0,-Un.x,ti.z,0,-ti.x,-Ln.y,Ln.x,0,-Un.y,Un.x,0,-ti.y,ti.x,0];return!ua(t,Ai,wi,Ri,$r)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Ai,wi,Ri,$r))?!1:(jr.crossVectors(Ln,Un),t=[jr.x,jr.y,jr.z],ua(t,Ai,wi,Ri,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new O,new O,new O,new O,new O,new O,new O,new O],Kt=new O,qr=new Fr,Ai=new O,wi=new O,Ri=new O,Ln=new O,Un=new O,ti=new O,lr=new O,$r=new O,jr=new O,ni=new O;function ua(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ni.fromArray(n,s);const a=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),c=e.dot(ni),l=t.dot(ni),u=i.dot(ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Jf=new Fr,ur=new O,ha=new O;class to{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(ha)),this.expandByPoint(ur.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new O,fa=new O,Yr=new O,Dn=new O,da=new O,Kr=new O,pa=new O;class Qf{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fa.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(fa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=Dn.dot(this.direction),c=-Dn.dot(Yr),l=Dn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*c-a,d=o*a-c,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fa).addScaledVector(Yr,d),p}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const i=fn.dot(this.direction),r=fn.dot(fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,i,r,s){da.subVectors(t,e),Kr.subVectors(i,e),pa.crossVectors(da,Kr);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const c=a*this.direction.dot(Kr.crossVectors(Dn,Kr));if(c<0)return null;const l=a*this.direction.dot(da.cross(Dn));if(l<0||c+l>o)return null;const u=-a*Dn.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,i,r,s,o,a,c,l,u,h,d,p,_,g,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,d,p,_,g,m)}set(e,t,i,r,s,o,a,c,l,u,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),o=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,g=l*h;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,g=l*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ed,e,td)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),In.crossVectors(i,Ht),In.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),In.crossVectors(i,Ht)),In.normalize(),Zr.crossVectors(Ht,In),r[0]=In.x,r[4]=Zr.x,r[8]=Ht.x,r[1]=In.y,r[5]=Zr.y,r[9]=Ht.y,r[2]=In.z,r[6]=Zr.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],M=i[3],v=i[7],T=i[11],L=i[15],w=r[0],R=r[4],q=r[8],y=r[12],b=r[1],H=r[5],Y=r[9],ie=r[13],P=r[2],B=r[6],V=r[10],X=r[14],W=r[3],k=r[7],Z=r[11],ee=r[15];return s[0]=o*w+a*b+c*P+l*W,s[4]=o*R+a*H+c*B+l*k,s[8]=o*q+a*Y+c*V+l*Z,s[12]=o*y+a*ie+c*X+l*ee,s[1]=u*w+h*b+d*P+p*W,s[5]=u*R+h*H+d*B+p*k,s[9]=u*q+h*Y+d*V+p*Z,s[13]=u*y+h*ie+d*X+p*ee,s[2]=_*w+g*b+m*P+f*W,s[6]=_*R+g*H+m*B+f*k,s[10]=_*q+g*Y+m*V+f*Z,s[14]=_*y+g*ie+m*X+f*ee,s[3]=M*w+v*b+T*P+L*W,s[7]=M*R+v*H+T*B+L*k,s[11]=M*q+v*Y+T*V+L*Z,s[15]=M*y+v*ie+T*X+L*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*p-i*c*p)+g*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+t*l*h-t*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+f*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],M=h*m*l-g*d*l+g*c*p-a*m*p-h*c*f+a*d*f,v=_*d*l-u*m*l-_*c*p+o*m*p+u*c*f-o*d*f,T=u*g*l-_*h*l+_*a*p-o*g*p-u*a*f+o*h*f,L=_*h*c-u*g*c-_*a*d+o*g*d+u*a*m-o*h*m,w=t*M+i*v+r*T+s*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=M*R,e[1]=(g*d*s-h*m*s-g*r*p+i*m*p+h*r*f-i*d*f)*R,e[2]=(a*m*s-g*c*s+g*r*l-i*m*l-a*r*f+i*c*f)*R,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*p-i*c*p)*R,e[4]=v*R,e[5]=(u*m*s-_*d*s+_*r*p-t*m*p-u*r*f+t*d*f)*R,e[6]=(_*c*s-o*m*s-_*r*l+t*m*l+o*r*f-t*c*f)*R,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*p+t*c*p)*R,e[8]=T*R,e[9]=(_*h*s-u*g*s-_*i*p+t*g*p+u*i*f-t*h*f)*R,e[10]=(o*g*s-_*a*s+_*i*l-t*g*l-o*i*f+t*a*f)*R,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*p-t*a*p)*R,e[12]=L*R,e[13]=(u*g*r-_*h*r+_*i*d-t*g*d-u*i*m+t*h*m)*R,e[14]=(_*a*r-o*g*r-_*i*c+t*g*c+o*i*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,_=s*h,g=o*u,m=o*h,f=a*h,M=c*l,v=c*u,T=c*h,L=i.x,w=i.y,R=i.z;return r[0]=(1-(g+f))*L,r[1]=(p+T)*L,r[2]=(_-v)*L,r[3]=0,r[4]=(p-T)*w,r[5]=(1-(d+f))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(_+v)*R,r[9]=(m-M)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const o=Ci.set(r[4],r[5],r[6]).length(),a=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const l=1/s,u=1/o,h=1/a;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Tn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(a===Tn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Es)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*l,p=(i+r)*u;let _,g;if(a===Tn)_=(o+s)*h,g=-2*h;else if(a===Es)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ci=new O,Zt=new St,ed=new O(0,0,0),td=new O(1,1,1),In=new O,Zr=new O,Ht=new O,vc=new St,xc=new Nr;class Fs{constructor(e=0,t=0,i=0,r=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nd=0;const Sc=new O,Pi=new Nr,dn=new St,Jr=new O,hr=new O,id=new O,rd=new Nr,yc=new O(1,0,0),Ec=new O(0,1,0),Mc=new O(0,0,1),sd={type:"added"},ad={type:"removed"};class Vt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new O,t=new Fs,i=new Nr,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Ge}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(yc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Mc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(hr,Jr,this.up):dn.lookAt(Jr,hr,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(dn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new O(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new O,pn=new O,ma=new O,mn=new O,Li=new O,Ui=new O,bc=new O,ga=new O,_a=new O,va=new O;let Qr=!1;class Qt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),pn.subVectors(i,t),ma.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(pn),c=Jt.dot(ma),l=pn.dot(pn),u=pn.dot(ma),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,i,r,s,o,a,c){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),pn.subVectors(e,t),Jt.cross(pn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Jt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Li.subVectors(r,i),Ui.subVectors(s,i),ga.subVectors(e,i);const c=Li.dot(ga),l=Ui.dot(ga);if(c<=0&&l<=0)return t.copy(i);_a.subVectors(e,r);const u=Li.dot(_a),h=Ui.dot(_a);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Li,o);va.subVectors(e,s);const p=Li.dot(va),_=Ui.dot(va);if(_>=0&&p<=_)return t.copy(s);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector(Ui,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return bc.subVectors(s,r),a=(h-u)/(h-u+(p-_)),t.copy(r).addScaledVector(bc,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(i).addScaledVector(Li,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},es={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Xf(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=xa(o,s,e+1/3),this.g=xa(o,s,e),this.b=xa(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=$l[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ye.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Ot(Mt.r*255,0,255))*65536+Math.round(Ot(Mt.g*255,0,255))*256+Math.round(Ot(Mt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Mt.copy(this),t);const i=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=vt){Ye.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,i=Mt.g,r=Mt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(es);const i=sa(Nn.h,es.h,t),r=sa(Nn.s,es.s,t),s=sa(Nn.l,es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new $e;$e.NAMES=$l;let od=0;class Os extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=ki,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fa&&(i.blendSrc=this.blendSrc),this.blendDst!==Oa&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jl extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new O,ts=new Xe;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}}class Yl extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kl extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gi extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cd=0;const Wt=new St,Sa=new Vt,Di=new O,Gt=new Fr,fr=new Fr,gt=new O;class Si extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vl(e)?Kl:Yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Gt.min,fr.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,fr.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(fr.min),Gt.expandByPoint(fr.max))}Gt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gt.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(e,l),gt.add(Di)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new O,u[b]=new O;const h=new O,d=new O,p=new O,_=new Xe,g=new Xe,m=new Xe,f=new O,M=new O;function v(b,H,Y){h.fromArray(r,b*3),d.fromArray(r,H*3),p.fromArray(r,Y*3),_.fromArray(o,b*2),g.fromArray(o,H*2),m.fromArray(o,Y*2),d.sub(h),p.sub(h),g.sub(_),m.sub(_);const ie=1/(g.x*m.y-m.x*g.y);isFinite(ie)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(ie),M.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(ie),l[b].add(f),l[H].add(f),l[Y].add(f),u[b].add(M),u[H].add(M),u[Y].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let b=0,H=T.length;b<H;++b){const Y=T[b],ie=Y.start,P=Y.count;for(let B=ie,V=ie+P;B<V;B+=3)v(i[B+0],i[B+1],i[B+2])}const L=new O,w=new O,R=new O,q=new O;function y(b){R.fromArray(s,b*3),q.copy(R);const H=l[b];L.copy(H),L.sub(R.multiplyScalar(R.dot(H))).normalize(),w.crossVectors(q,H);const ie=w.dot(u[b])<0?-1:1;c[b*4]=L.x,c[b*4+1]=L.y,c[b*4+2]=L.z,c[b*4+3]=ie}for(let b=0,H=T.length;b<H;++b){const Y=T[b],ie=Y.start,P=Y.count;for(let B=ie,V=ie+P;B<V;B+=3)y(i[B+0]),y(i[B+1]),y(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new St,ii=new Qf,ns=new to,Ac=new O,Ii=new O,Ni=new O,Fi=new O,ya=new O,is=new O,rs=new Xe,ss=new Xe,as=new Xe,wc=new O,Rc=new O,Cc=new O,os=new O,cs=new O;class An extends Vt{constructor(e=new Si,t=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){is.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(ya.fromBufferAttribute(h,e),o?is.addScaledVector(ya,u):is.addScaledVector(ya.sub(t),u))}t.add(is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(ns.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ns,Ac)===null||ii.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(Tc.copy(s).invert(),ii.copy(e.ray).applyMatrix4(Tc),!(i.boundingBox!==null&&ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,L=v;T<L;T+=3){const w=a.getX(T),R=a.getX(T+1),q=a.getX(T+2);r=ls(this,f,e,i,l,u,h,w,R,q),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const M=a.getX(m),v=a.getX(m+1),T=a.getX(m+2);r=ls(this,o,e,i,l,u,h,M,v,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=M,L=v;T<L;T+=3){const w=T,R=T+1,q=T+2;r=ls(this,f,e,i,l,u,h,w,R,q),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const M=m,v=m+1,T=m+2;r=ls(this,o,e,i,l,u,h,M,v,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ld(n,e,t,i,r,s,o,a){let c;if(e.side===Bt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Kn,a),c===null)return null;cs.copy(a),cs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(cs);return l<t.near||l>t.far?null:{distance:l,point:cs.clone(),object:n}}function ls(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ii),n.getVertexPosition(c,Ni),n.getVertexPosition(l,Fi);const u=ld(n,e,t,i,Ii,Ni,Fi,os);if(u){r&&(rs.fromBufferAttribute(r,a),ss.fromBufferAttribute(r,c),as.fromBufferAttribute(r,l),u.uv=Qt.getInterpolation(os,Ii,Ni,Fi,rs,ss,as,new Xe)),s&&(rs.fromBufferAttribute(s,a),ss.fromBufferAttribute(s,c),as.fromBufferAttribute(s,l),u.uv1=Qt.getInterpolation(os,Ii,Ni,Fi,rs,ss,as,new Xe),u.uv2=u.uv1),o&&(wc.fromBufferAttribute(o,a),Rc.fromBufferAttribute(o,c),Cc.fromBufferAttribute(o,l),u.normal=Qt.getInterpolation(os,Ii,Ni,Fi,wc,Rc,Cc,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};Qt.getNormal(Ii,Ni,Fi,h.normal),u.face=h}return u}class Or extends Si{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new gi(l,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(h,2));function _(g,m,f,M,v,T,L,w,R,q,y){const b=T/R,H=L/q,Y=T/2,ie=L/2,P=w/2,B=R+1,V=q+1;let X=0,W=0;const k=new O;for(let Z=0;Z<V;Z++){const ee=Z*H-ie;for(let le=0;le<B;le++){const G=le*b-Y;k[g]=G*M,k[m]=ee*v,k[f]=P,l.push(k.x,k.y,k.z),k[g]=0,k[m]=0,k[f]=w>0?1:-1,u.push(k.x,k.y,k.z),h.push(le/R),h.push(1-Z/q),X+=1}}for(let Z=0;Z<q;Z++)for(let ee=0;ee<R;ee++){const le=d+ee+B*Z,G=d+ee+B*(Z+1),$=d+(ee+1)+B*(Z+1),oe=d+(ee+1)+B*Z;c.push(le,G,oe),c.push(G,$,oe),W+=6}a.addGroup(p,W,y),p+=W,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=Qi(n[t]);for(const r in i)e[r]=i[r]}return e}function ud(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zl(n){return n.getRenderTarget()===null?n.outputColorSpace:Ye.workingColorSpace}const hd={clone:Qi,merge:Pt};var fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fd,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=ud(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jl extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Jl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class pd extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const s=new en(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const o=new en(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new en(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const c=new en(Oi,Bi,e,t);c.layers=this.layers,this.add(c);const l=new en(Oi,Bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ql extends Lt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ki,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class md extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mi?vt:$t),this.texture=new Ql(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Or(5,5,5),s=new Zn({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:$n});s.uniforms.tEquirect.value=t;const o=new An(r,s),a=t.minFilter;return t.minFilter===vr&&(t.minFilter=bt),new pd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ea=new O,gd=new O,_d=new Ge;class si{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ea.subVectors(i,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ea),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_d.getNormalMatrix(e),r=this.coplanarPoint(Ea).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new to,us=new O;class eu{constructor(e=new si,t=new si,i=new si,r=new si,s=new si,o=new si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],f=r[12],M=r[13],v=r[14],T=r[15];if(i[0].setComponents(c-s,d-l,m-p,T-f).normalize(),i[1].setComponents(c+s,d+l,m+p,T+f).normalize(),i[2].setComponents(c+o,d+u,m+_,T+M).normalize(),i[3].setComponents(c-o,d-u,m-_,T-M).normalize(),i[4].setComponents(c-a,d-h,m-g,T-v).normalize(),t===Tn)i[5].setComponents(c+a,d+h,m+g,T+v).normalize();else if(t===Es)i[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(us.x=r.normal.x>0?e.max.x:e.min.x,us.y=r.normal.y>0?e.max.y:e.min.y,us.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vd(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,d=l.usage,p=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,u,h){const d=u.array,p=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,l),p.count===-1&&_.length===0&&n.bufferSubData(h,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);if(h===void 0)i.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class Bs extends Si{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const M=f*d-o;for(let v=0;v<l;v++){const T=v*h-s;_.push(T,-M,0),g.push(0,0,1),m.push(v/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const v=M+l*f,T=M+l*(f+1),L=M+1+l*(f+1),w=M+1+l*f;p.push(v,T,w),p.push(T,L,w)}this.setIndex(p),this.setAttribute("position",new gi(_,3)),this.setAttribute("normal",new gi(g,3)),this.setAttribute("uv",new gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ud=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,op=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:xd,alphahash_pars_fragment:Sd,alphamap_fragment:yd,alphamap_pars_fragment:Ed,alphatest_fragment:Md,alphatest_pars_fragment:bd,aomap_fragment:Td,aomap_pars_fragment:Ad,batching_pars_vertex:wd,batching_vertex:Rd,begin_vertex:Cd,beginnormal_vertex:Pd,bsdfs:Ld,iridescence_fragment:Ud,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Od,color_fragment:Bd,color_pars_fragment:zd,color_pars_vertex:Hd,color_vertex:Gd,common:Vd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:Xd,displacementmap_vertex:qd,emissivemap_fragment:$d,emissivemap_pars_fragment:jd,colorspace_fragment:Yd,colorspace_pars_fragment:Kd,envmap_fragment:Zd,envmap_common_pars_fragment:Jd,envmap_pars_fragment:Qd,envmap_pars_vertex:ep,envmap_physical_pars_fragment:fp,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:rp,fog_pars_fragment:sp,gradientmap_pars_fragment:ap,lightmap_fragment:op,lightmap_pars_fragment:cp,lights_lambert_fragment:lp,lights_lambert_pars_fragment:up,lights_pars_begin:hp,lights_toon_fragment:dp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:_p,lights_physical_pars_fragment:vp,lights_fragment_begin:xp,lights_fragment_maps:Sp,lights_fragment_end:yp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Tp,map_fragment:Ap,map_pars_fragment:wp,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Pp,metalnessmap_pars_fragment:Lp,morphcolor_vertex:Up,morphnormal_vertex:Dp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Np,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:zp,normal_vertex:Hp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:qp,packing:$p,premultiplied_alpha_fragment:jp,project_vertex:Yp,dithering_fragment:Kp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:rm,skinning_pars_vertex:sm,skinning_vertex:am,skinnormal_vertex:om,specularmap_fragment:cm,specularmap_pars_fragment:lm,tonemapping_fragment:um,tonemapping_pars_fragment:hm,transmission_fragment:fm,transmission_pars_fragment:dm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:vm,background_frag:xm,backgroundCube_vert:Sm,backgroundCube_frag:ym,cube_vert:Em,cube_frag:Mm,depth_vert:bm,depth_frag:Tm,distanceRGBA_vert:Am,distanceRGBA_frag:wm,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Pm,linedashed_frag:Lm,meshbasic_vert:Um,meshbasic_frag:Dm,meshlambert_vert:Im,meshlambert_frag:Nm,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:Hm,meshphong_frag:Gm,meshphysical_vert:Vm,meshphysical_frag:km,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:$m,shadow_vert:jm,shadow_frag:Ym,sprite_vert:Km,sprite_frag:Zm},ne={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},rn={basic:{uniforms:Pt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Pt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Pt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Pt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Pt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Pt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Pt([ne.points,ne.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Pt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Pt([ne.common,ne.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Pt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Pt([ne.sprite,ne.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Pt([ne.common,ne.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Pt([ne.lights,ne.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};rn.physical={uniforms:Pt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const hs={r:0,b:0,g:0};function Jm(n,e,t,i,r,s,o){const a=new $e(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function _(m,f){let M=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,c):v&&v.isColor&&(g(v,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Is)?(u===void 0&&(u=new An(new Or(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Qi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,(h!==v||d!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new An(new Bs(2,2),new Zn({name:"BackgroundMaterial",uniforms:Qi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){m.getRGB(hs,Zl(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function Qm(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function h(P,B,V,X,W){let k=!1;if(o){const Z=g(X,V,B);l!==Z&&(l=Z,p(l.object)),k=f(P,X,V,W),k&&M(P,X,V,W)}else{const Z=B.wireframe===!0;(l.geometry!==X.id||l.program!==V.id||l.wireframe!==Z)&&(l.geometry=X.id,l.program=V.id,l.wireframe=Z,k=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,q(P,B,V,X),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,B,V){const X=V.wireframe===!0;let W=a[P.id];W===void 0&&(W={},a[P.id]=W);let k=W[B.id];k===void 0&&(k={},W[B.id]=k);let Z=k[X];return Z===void 0&&(Z=m(d()),k[X]=Z),Z}function m(P){const B=[],V=[],X=[];for(let W=0;W<r;W++)B[W]=0,V[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:X,object:P,attributes:{},index:null}}function f(P,B,V,X){const W=l.attributes,k=B.attributes;let Z=0;const ee=V.getAttributes();for(const le in ee)if(ee[le].location>=0){const $=W[le];let oe=k[le];if(oe===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;Z++}return l.attributesNum!==Z||l.index!==X}function M(P,B,V,X){const W={},k=B.attributes;let Z=0;const ee=V.getAttributes();for(const le in ee)if(ee[le].location>=0){let $=k[le];$===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),W[le]=oe,Z++}l.attributes=W,l.attributesNum=Z,l.index=X}function v(){const P=l.newAttributes;for(let B=0,V=P.length;B<V;B++)P[B]=0}function T(P){L(P,0)}function L(P,B){const V=l.newAttributes,X=l.enabledAttributes,W=l.attributeDivisors;V[P]=1,X[P]===0&&(n.enableVertexAttribArray(P),X[P]=1),W[P]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),W[P]=B)}function w(){const P=l.newAttributes,B=l.enabledAttributes;for(let V=0,X=B.length;V<X;V++)B[V]!==P[V]&&(n.disableVertexAttribArray(V),B[V]=0)}function R(P,B,V,X,W,k,Z){Z===!0?n.vertexAttribIPointer(P,B,V,W,k):n.vertexAttribPointer(P,B,V,X,W,k)}function q(P,B,V,X){if(i.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=X.attributes,k=V.getAttributes(),Z=B.defaultAttributeValues;for(const ee in k){const le=k[ee];if(le.location>=0){let G=W[ee];if(G===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const $=G.normalized,oe=G.itemSize,ge=t.get(G);if(ge===void 0)continue;const me=ge.buffer,Pe=ge.type,De=ge.bytesPerElement,Me=i.isWebGL2===!0&&(Pe===n.INT||Pe===n.UNSIGNED_INT||G.gpuType===Dl);if(G.isInterleavedBufferAttribute){const We=G.data,D=We.stride,wt=G.offset;if(We.isInstancedInterleavedBuffer){for(let xe=0;xe<le.locationSize;xe++)L(le.location+xe,We.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let xe=0;xe<le.locationSize;xe++)T(le.location+xe);n.bindBuffer(n.ARRAY_BUFFER,me);for(let xe=0;xe<le.locationSize;xe++)R(le.location+xe,oe/le.locationSize,Pe,$,D*De,(wt+oe/le.locationSize*xe)*De,Me)}else{if(G.isInstancedBufferAttribute){for(let We=0;We<le.locationSize;We++)L(le.location+We,G.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let We=0;We<le.locationSize;We++)T(le.location+We);n.bindBuffer(n.ARRAY_BUFFER,me);for(let We=0;We<le.locationSize;We++)R(le.location+We,oe/le.locationSize,Pe,$,oe*De,oe/le.locationSize*We*De,Me)}}else if(Z!==void 0){const $=Z[ee];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(le.location,$);break;case 3:n.vertexAttrib3fv(le.location,$);break;case 4:n.vertexAttrib4fv(le.location,$);break;default:n.vertexAttrib1fv(le.location,$)}}}}w()}function y(){Y();for(const P in a){const B=a[P];for(const V in B){const X=B[V];for(const W in X)_(X[W].object),delete X[W];delete B[V]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const B=a[P.id];for(const V in B){const X=B[V];for(const W in X)_(X[W].object),delete X[W];delete B[V]}delete a[P.id]}function H(P){for(const B in a){const V=a[B];if(V[P.id]===void 0)continue;const X=V[P.id];for(const W in X)_(X[W].object),delete X[W];delete V[P.id]}}function Y(){ie(),u=!0,l!==c&&(l=c,p(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:ie,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:T,disableUnusedAttributes:w}}function eg(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,d){if(d===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,u,h,d),t.update(h,s,d)}function l(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{p.multiDrawArraysWEBGL(s,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function tg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,T=o||e.has("OES_texture_float"),L=v&&T,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:w}}function ng(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new si,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const M=s?0:i,v=M*4;let T=f.clippingState||null;c.value=T,T=u(_,d,v,p);for(let L=0;L!==v;++L)T[L]=t[L];f.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=p+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,T=p;v!==g;++v,T+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function ig(n){let e=new WeakMap;function t(o,a){return a===Ba?o.mapping=Ki:a===za&&(o.mapping=Zi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ba||a===za)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new md(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class nu extends Jl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,Pc=[.125,.215,.35,.446,.526,.582],ci=20,Ma=new nu,Lc=new $e;let ba=null,Ta=0,Aa=0;const ai=(1+Math.sqrt(5))/2,zi=1/ai,Uc=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ai,zi),new O(0,ai,-zi),new O(zi,0,ai),new O(-zi,0,ai),new O(ai,zi,0),new O(-ai,zi,0)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Ta,Aa),e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:xr,format:qt,colorSpace:wn,depthBuffer:!1},r=Ic(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(s)),this._blurMaterial=sg(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,i,r){const a=new en(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Lc),u.toneMapping=jn,u.autoClear=!1;const p=new jl({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new An(new Or,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Lc),g=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;fs(r,M*v,f>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ki||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;fs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ma)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uc[(r-1)%Uc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new An(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ci-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):ci;m>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const f=[];let M=0;for(let R=0;R<ci;++R){const q=R/g,y=Math.exp(-q*q/2);f.push(y),R===0?M+=y:R<m&&(M+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const T=this._sizeLods[r],L=3*T*(r>v-Hi?r-v+Hi:0),w=4*(this._cubeSize-T);fs(t,L,w,3*T,2*T),c.setRenderTarget(t),c.render(h,Ma)}}function rg(n){const e=[],t=[],i=[];let r=n;const s=n-Hi+1+Pc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Hi?c=Pc[o-n+Hi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,M=new Float32Array(g*_*p),v=new Float32Array(m*_*p),T=new Float32Array(f*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,q=w>2?0:-1,y=[R,q,0,R+2/3,q,0,R+2/3,q+1,0,R,q,0,R+2/3,q+1,0,R,q+1,0];M.set(y,g*_*w),v.set(d,m*_*w);const b=[w,w,w,w,w,w];T.set(b,f*_*w)}const L=new Si;L.setAttribute("position",new on(M,g)),L.setAttribute("uv",new on(v,m)),L.setAttribute("faceIndex",new on(T,f)),e.push(L),r>Hi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ic(n,e,t){const i=new xi(n,e,t);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sg(n,e,t){const i=new Float32Array(ci),r=new O(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Nc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Fc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ag(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ba||c===za,u=c===Ki||c===Zi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Dc(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Dc(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function og(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cg(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let v=0,T=M.length;v<T;v+=3){const L=M[v+0],w=M[v+1],R=M[v+2];d.push(L,w,w,R,R,L)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,T=M.length/3-1;v<T;v+=3){const L=v+0,w=v+1,R=v+2;d.push(L,w,w,R,R,L)}}else return;const m=new(Vl(d)?Kl:Yl)(d,1);m.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function lg(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,_){n.drawElements(s,_,a,p*c),t.update(_,s,1)}function h(p,_,g){if(g===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,_,a,p*c,g),t.update(_,s,g)}function d(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/c,_[f]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let f=0;for(let M=0;M<g;M++)f+=_[M];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function ug(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hg(n,e){return n[0]-e[0]}function fg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dg(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new ht,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let P=function(){Y.dispose(),s.delete(u),u.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let q=0;M===!0&&(q=1),v===!0&&(q=2),T===!0&&(q=3);let y=u.attributes.position.count*q,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const H=new Float32Array(y*b*4*_),Y=new Xl(H,y,b,_);Y.type=Xn,Y.needsUpdate=!0;const ie=q*4;for(let B=0;B<_;B++){const V=L[B],X=w[B],W=R[B],k=y*b*4*B;for(let Z=0;Z<V.count;Z++){const ee=Z*ie;M===!0&&(o.fromBufferAttribute(V,Z),H[k+ee+0]=o.x,H[k+ee+1]=o.y,H[k+ee+2]=o.z,H[k+ee+3]=0),v===!0&&(o.fromBufferAttribute(X,Z),H[k+ee+4]=o.x,H[k+ee+5]=o.y,H[k+ee+6]=o.z,H[k+ee+7]=0),T===!0&&(o.fromBufferAttribute(W,Z),H[k+ee+8]=o.x,H[k+ee+9]=o.y,H[k+ee+10]=o.z,H[k+ee+11]=W.itemSize===4?o.w:1)}}g={count:_,texture:Y,size:new Xe(y,b)},s.set(u,g),u.addEventListener("dispose",P)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",f),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const p=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==p){_=[];for(let v=0;v<p;v++)_[v]=[v,0];i[u.id]=_}for(let v=0;v<p;v++){const T=_[v];T[0]=v,T[1]=d[v]}_.sort(fg);for(let v=0;v<8;v++)v<p&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(hg);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const T=a[v],L=T[0],w=T[1];L!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+v)!==g[L]&&u.setAttribute("morphTarget"+v,g[L]),m&&u.getAttribute("morphNormal"+v)!==m[L]&&u.setAttribute("morphNormal"+v,m[L]),r[v]=w,f+=w):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const M=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function pg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class iu extends Lt{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:pi,u!==pi&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===pi&&(i=Wn),i===void 0&&u===Ji&&(i=di),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_t,this.minFilter=c!==void 0?c:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ru=new Lt,su=new iu(1,1);su.compareFunction=Gl;const au=new Xl,ou=new Zf,cu=new Ql,Oc=[],Bc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Oc[r];if(s===void 0&&(s=new Float32Array(r),Oc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zs(n,e){let t=Bc[e];t===void 0&&(t=new Int32Array(e),Bc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;Gc.set(i),n.uniformMatrix2fv(this.addr,!1,Gc),dt(t,i)}}function Sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;Hc.set(i),n.uniformMatrix3fv(this.addr,!1,Hc),dt(t,i)}}function yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,i))return;zc.set(i),n.uniformMatrix4fv(this.addr,!1,zc),dt(t,i)}}function Eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function Ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function Pg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?su:ru;t.setTexture2D(e||s,r)}function Lg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ou,r)}function Ug(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||cu,r)}function Dg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||au,r)}function Ig(n){switch(n){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return Sg;case 35676:return yg;case 5124:case 35670:return Eg;case 35667:case 35671:return Mg;case 35668:case 35672:return bg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return wg;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ng(n,e){n.uniform1fv(this.addr,e)}function Fg(n,e){const t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Og(n,e){const t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function Bg(n,e){const t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function zg(n,e){const t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hg(n,e){const t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gg(n,e){const t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vg(n,e){n.uniform1iv(this.addr,e)}function kg(n,e){n.uniform2iv(this.addr,e)}function Wg(n,e){n.uniform3iv(this.addr,e)}function Xg(n,e){n.uniform4iv(this.addr,e)}function qg(n,e){n.uniform1uiv(this.addr,e)}function $g(n,e){n.uniform2uiv(this.addr,e)}function jg(n,e){n.uniform3uiv(this.addr,e)}function Yg(n,e){n.uniform4uiv(this.addr,e)}function Kg(n,e,t){const i=this.cache,r=e.length,s=zs(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ru,s[o])}function Zg(n,e,t){const i=this.cache,r=e.length,s=zs(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ou,s[o])}function Jg(n,e,t){const i=this.cache,r=e.length,s=zs(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cu,s[o])}function Qg(n,e,t){const i=this.cache,r=e.length,s=zs(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||au,s[o])}function e_(n){switch(n){case 5126:return Ng;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return Gg;case 5124:case 35670:return Vg;case 35667:case 35671:return kg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return $g;case 36295:return jg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return Qg}}class t_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ig(t.type)}}class n_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e_(t.type)}}class i_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Vc(n,e){n.seq.push(e),n.map[e.id]=e}function r_(n,e,t){const i=n.name,r=i.length;for(wa.lastIndex=0;;){const s=wa.exec(i),o=wa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Vc(t,l===void 0?new t_(a,n,e):new n_(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new i_(a),Vc(t,h)),t=h}}}class gs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);r_(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function kc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const s_=37297;let a_=0;function o_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function c_(n){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(n);let i;switch(e===t?i="":e===ys&&t===Ss?i="LinearDisplayP3ToLinearSRGB":e===Ss&&t===ys&&(i="LinearSRGBToLinearDisplayP3"),n){case wn:case Ns:return[i,"LinearTransferOETF"];case vt:case eo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+o_(n.getShaderSource(e),o)}else return r}function l_(n,e){const t=c_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function u_(n,e){let t;switch(e){case xf:t="Linear";break;case Sf:t="Reinhard";break;case yf:t="OptimizedCineon";break;case Ef:t="ACESFilmic";break;case bf:t="AgX";break;case Mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function h_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gi).join(`
`)}function f_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Gi).join(`
`)}function d_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gi(n){return n!==""}function Xc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(n){return n.replace(m_,__)}const g_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function __(n,e){let t=Ne[e];if(t===void 0){const i=g_.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xa(t)}const v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(n){return n.replace(v_,x_)}function x_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function y_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case Zi:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function M_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ll:e="ENVMAP_BLENDING_MULTIPLY";break;case _f:e="ENVMAP_BLENDING_MIX";break;case vf:e="ENVMAP_BLENDING_ADD";break}return e}function b_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function T_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=S_(t),l=y_(t),u=E_(t),h=M_(t),d=b_(t),p=t.isWebGL2?"":h_(t),_=f_(t),g=d_(s),m=r.createProgram();let f,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gi).join(`
`),M.length>0&&(M+=`
`)):(f=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),M=[p,jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==jn?u_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,l_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),o=Xa(o),o=Xc(o,t),o=qc(o,t),a=Xa(a),a=Xc(a,t),a=qc(a,t),o=$c(o),a=$c(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const T=v+f+o,L=v+M+a,w=kc(r,r.VERTEX_SHADER,T),R=kc(r,r.FRAGMENT_SHADER,L);r.attachShader(m,w),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function q(Y){if(n.debug.checkShaderErrors){const ie=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(w).trim(),B=r.getShaderInfoLog(R).trim();let V=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,R);else{const W=Wc(r,w,"vertex"),k=Wc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+W+`
`+k)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(P===""||B==="")&&(X=!1);X&&(Y.diagnostics={runnable:V,programLog:ie,vertexShader:{log:P,prefix:f},fragmentShader:{log:B,prefix:M}})}r.deleteShader(w),r.deleteShader(R),y=new gs(r,m),b=p_(r,m)}let y;this.getUniforms=function(){return y===void 0&&q(this),y};let b;this.getAttributes=function(){return b===void 0&&q(this),b};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(m,s_)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=R,this}let A_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new R_(e),t.set(e,i)),i}}class R_{constructor(e){this.id=A_++,this.code=e,this.usedTimes=0}}function C_(n,e,t,i,r,s,o){const a=new ql,c=new w_,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,b,H,Y,ie){const P=Y.fog,B=ie.geometry,V=y.isMeshStandardMaterial?Y.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),W=X&&X.mapping===Is?X.image.height:null,k=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=Z!==void 0?Z.length:0;let le=0;B.morphAttributes.position!==void 0&&(le=1),B.morphAttributes.normal!==void 0&&(le=2),B.morphAttributes.color!==void 0&&(le=3);let G,$,oe,ge;if(k){const Rt=rn[k];G=Rt.vertexShader,$=Rt.fragmentShader}else G=y.vertexShader,$=y.fragmentShader,c.update(y),oe=c.getVertexShaderID(y),ge=c.getFragmentShaderID(y);const me=n.getRenderTarget(),Pe=ie.isInstancedMesh===!0,De=ie.isBatchedMesh===!0,Me=!!y.map,We=!!y.matcap,D=!!X,wt=!!y.aoMap,xe=!!y.lightMap,we=!!y.bumpMap,fe=!!y.normalMap,it=!!y.displacementMap,Fe=!!y.emissiveMap,E=!!y.metalnessMap,x=!!y.roughnessMap,N=y.anisotropy>0,J=y.clearcoat>0,K=y.iridescence>0,Q=y.sheen>0,de=y.transmission>0,ae=N&&!!y.anisotropyMap,ue=J&&!!y.clearcoatMap,Ee=J&&!!y.clearcoatNormalMap,Oe=J&&!!y.clearcoatRoughnessMap,j=K&&!!y.iridescenceMap,je=K&&!!y.iridescenceThicknessMap,Ve=Q&&!!y.sheenColorMap,Ae=Q&&!!y.sheenRoughnessMap,_e=!!y.specularMap,he=!!y.specularColorMap,Ie=!!y.specularIntensityMap,qe=de&&!!y.transmissionMap,st=de&&!!y.thicknessMap,ze=!!y.gradientMap,te=!!y.alphaMap,A=y.alphaTest>0,re=!!y.alphaHash,se=!!y.extensions,be=!!B.attributes.uv1,Se=!!B.attributes.uv2,Ze=!!B.attributes.uv3;let Je=jn;return y.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Je=n.toneMapping),{isWebGL2:u,shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:$,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:De,instancing:Pe,instancingColor:Pe&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:wn,map:Me,matcap:We,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:W,aoMap:wt,lightMap:xe,bumpMap:we,normalMap:fe,displacementMap:d&&it,emissiveMap:Fe,normalMapObjectSpace:fe&&y.normalMapType===Of,normalMapTangentSpace:fe&&y.normalMapType===Ff,metalnessMap:E,roughnessMap:x,anisotropy:N,anisotropyMap:ae,clearcoat:J,clearcoatMap:ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Oe,iridescence:K,iridescenceMap:j,iridescenceThicknessMap:je,sheen:Q,sheenColorMap:Ve,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:he,specularIntensityMap:Ie,transmission:de,transmissionMap:qe,thicknessMap:st,gradientMap:ze,opaque:y.transparent===!1&&y.blending===ki,alphaMap:te,alphaTest:A,alphaHash:re,combine:y.combine,mapUv:Me&&g(y.map.channel),aoMapUv:wt&&g(y.aoMap.channel),lightMapUv:xe&&g(y.lightMap.channel),bumpMapUv:we&&g(y.bumpMap.channel),normalMapUv:fe&&g(y.normalMap.channel),displacementMapUv:it&&g(y.displacementMap.channel),emissiveMapUv:Fe&&g(y.emissiveMap.channel),metalnessMapUv:E&&g(y.metalnessMap.channel),roughnessMapUv:x&&g(y.roughnessMap.channel),anisotropyMapUv:ae&&g(y.anisotropyMap.channel),clearcoatMapUv:ue&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(y.sheenRoughnessMap.channel),specularMapUv:_e&&g(y.specularMap.channel),specularColorMapUv:he&&g(y.specularColorMap.channel),specularIntensityMapUv:Ie&&g(y.specularIntensityMap.channel),transmissionMapUv:qe&&g(y.transmissionMap.channel),thicknessMapUv:st&&g(y.thicknessMap.channel),alphaMapUv:te&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(fe||N),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Se,vertexUv3s:Ze,pointsUvs:ie.isPoints===!0&&!!B.attributes.uv&&(Me||te),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mn,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:se&&y.extensions.derivatives===!0,extensionFragDepth:se&&y.extensions.fragDepth===!0,extensionDrawBuffers:se&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)b.push(H),b.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(M(b,y),v(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function T(y){const b=_[y.type];let H;if(b){const Y=rn[b];H=hd.clone(Y.uniforms)}else H=y.uniforms;return H}function L(y,b){let H;for(let Y=0,ie=l.length;Y<ie;Y++){const P=l[Y];if(P.cacheKey===b){H=P,++H.usedTimes;break}}return H===void 0&&(H=new T_(n,b,y,s),l.push(H)),H}function w(y){if(--y.usedTimes===0){const b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),y.destroy()}}function R(y){c.remove(y)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:L,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:q}}function P_(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function L_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,_,g,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function a(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||L_),i.length>1&&i.sort(d||Yc),r.length>1&&r.sort(d||Yc)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function U_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Kc,n.set(i,[o])):r>=s.length?(o=new Kc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function D_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function I_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let N_=0;function F_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O_(n,e){const t=new D_,i=I_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new St,a=new St;function c(u,h){let d=0,p=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let g=0,m=0,f=0,M=0,v=0,T=0,L=0,w=0,R=0,q=0,y=0;u.sort(F_);const b=h===!0?Math.PI:1;for(let Y=0,ie=u.length;Y<ie;Y++){const P=u[Y],B=P.color,V=P.intensity,X=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=B.r*V*b,p+=B.g*V*b,_+=B.b*V*b;else if(P.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(P.sh.coefficients[k],V);y++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const Z=P.shadow,ee=i.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,r.directionalShadow[g]=ee,r.directionalShadowMap[g]=W,r.directionalShadowMatrix[g]=P.shadow.matrix,T++}r.directional[g]=k,g++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(B).multiplyScalar(V*b),k.distance=X,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,r.spot[f]=k;const Z=P.shadow;if(P.map&&(r.spotLightMap[R]=P.map,R++,Z.updateMatrices(P),P.castShadow&&q++),r.spotLightMatrix[f]=Z.matrix,P.castShadow){const ee=i.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,r.spotShadow[f]=ee,r.spotShadowMap[f]=W,w++}f++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(B).multiplyScalar(V),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),r.rectArea[M]=k,M++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*b),k.distance=P.distance,k.decay=P.decay,P.castShadow){const Z=P.shadow,ee=i.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=P.shadow.matrix,L++}r.point[m]=k,m++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(V*b),k.groundColor.copy(P.groundColor).multiplyScalar(V*b),r.hemi[v]=k,v++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const H=r.hash;(H.directionalLength!==g||H.pointLength!==m||H.spotLength!==f||H.rectAreaLength!==M||H.hemiLength!==v||H.numDirectionalShadows!==T||H.numPointShadows!==L||H.numSpotShadows!==w||H.numSpotMaps!==R||H.numLightProbes!==y)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+R-q,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=y,H.directionalLength=g,H.pointLength=m,H.spotLength=f,H.rectAreaLength=M,H.hemiLength=v,H.numDirectionalShadows=T,H.numPointShadows=L,H.numSpotShadows=w,H.numSpotMaps=R,H.numLightProbes=y,r.version=N_++)}function l(u,h){let d=0,p=0,_=0,g=0,m=0;const f=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const T=u[M];if(T.isDirectionalLight){const L=r.directional[d];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),d++}else if(T.isSpotLight){const L=r.spot[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),_++}else if(T.isRectAreaLight){const L=r.rectArea[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(f),a.identity(),o.copy(T.matrixWorld),o.premultiply(f),a.extractRotation(o),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const L=r.point[p];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const L=r.hemi[m];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:r}}function Zc(n,e){const t=new O_(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function B_(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Zc(n,e),t.set(s,[c])):o>=a.length?(c=new Zc(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class z_ extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H_ extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k_(n,e,t){let i=new eu;const r=new Xe,s=new Xe,o=new ht,a=new z_({depthPacking:Nf}),c=new H_,l={},u=t.maxTextureSize,h={[Kn]:Bt,[Bt]:Kn,[Mn]:Mn},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:G_,fragmentShader:V_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Si;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new An(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let f=this.type;this.render=function(w,R,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),b=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending($n),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ie=f!==gn&&this.type===gn,P=f===gn&&this.type!==gn;for(let B=0,V=w.length;B<V;B++){const X=w[B],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const k=W.getFrameExtents();if(r.multiply(k),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,W.mapSize.y=s.y)),W.map===null||ie===!0||P===!0){const ee=this.type!==gn?{minFilter:_t,magFilter:_t}:{};W.map!==null&&W.map.dispose(),W.map=new xi(r.x,r.y,ee),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Z=W.getViewportCount();for(let ee=0;ee<Z;ee++){const le=W.getViewport(ee);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),Y.viewport(o),W.updateMatrices(X,ee),i=W.getFrustum(),T(R,q,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===gn&&M(W,q),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,H)};function M(w,R){const q=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,q,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,q,p,g,null)}function v(w,R,q,y){let b=null;const H=q.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(H!==void 0)b=H;else if(b=q.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=b.uuid,ie=R.uuid;let P=l[Y];P===void 0&&(P={},l[Y]=P);let B=P[ie];B===void 0&&(B=b.clone(),P[ie]=B,R.addEventListener("dispose",L)),b=B}if(b.visible=R.visible,b.wireframe=R.wireframe,y===gn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=n.properties.get(b);Y.light=q}return b}function T(w,R,q,y,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===gn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld);const ie=e.update(w),P=w.material;if(Array.isArray(P)){const B=ie.groups;for(let V=0,X=B.length;V<X;V++){const W=B[V],k=P[W.materialIndex];if(k&&k.visible){const Z=v(w,k,y,b);w.onBeforeShadow(n,w,R,q,ie,Z,W),n.renderBufferDirect(q,null,ie,Z,w,W),w.onAfterShadow(n,w,R,q,ie,Z,W)}}}else if(P.visible){const B=v(w,P,y,b);w.onBeforeShadow(n,w,R,q,ie,B,null),n.renderBufferDirect(q,null,ie,B,w,null),w.onAfterShadow(n,w,R,q,ie,B,null)}}const Y=w.children;for(let ie=0,P=Y.length;ie<P;ie++)T(Y[ie],R,q,y,b)}function L(w){w.target.removeEventListener("dispose",L);for(const q in l){const y=l[q],b=w.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function W_(n,e,t){const i=t.isWebGL2;function r(){let A=!1;const re=new ht;let se=null;const be=new ht(0,0,0,0);return{setMask:function(Se){se!==Se&&!A&&(n.colorMask(Se,Se,Se,Se),se=Se)},setLocked:function(Se){A=Se},setClear:function(Se,Ze,Je,pt,Rt){Rt===!0&&(Se*=pt,Ze*=pt,Je*=pt),re.set(Se,Ze,Je,pt),be.equals(re)===!1&&(n.clearColor(Se,Ze,Je,pt),be.copy(re))},reset:function(){A=!1,se=null,be.set(-1,0,0,0)}}}function s(){let A=!1,re=null,se=null,be=null;return{setTest:function(Se){Se?De(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(Se){re!==Se&&!A&&(n.depthMask(Se),re=Se)},setFunc:function(Se){if(se!==Se){switch(Se){case uf:n.depthFunc(n.NEVER);break;case hf:n.depthFunc(n.ALWAYS);break;case ff:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case df:n.depthFunc(n.EQUAL);break;case pf:n.depthFunc(n.GEQUAL);break;case mf:n.depthFunc(n.GREATER);break;case gf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Se}},setLocked:function(Se){A=Se},setClear:function(Se){be!==Se&&(n.clearDepth(Se),be=Se)},reset:function(){A=!1,re=null,se=null,be=null}}}function o(){let A=!1,re=null,se=null,be=null,Se=null,Ze=null,Je=null,pt=null,Rt=null;return{setTest:function(Qe){A||(Qe?De(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(Qe){re!==Qe&&!A&&(n.stencilMask(Qe),re=Qe)},setFunc:function(Qe,Ct,nn){(se!==Qe||be!==Ct||Se!==nn)&&(n.stencilFunc(Qe,Ct,nn),se=Qe,be=Ct,Se=nn)},setOp:function(Qe,Ct,nn){(Ze!==Qe||Je!==Ct||pt!==nn)&&(n.stencilOp(Qe,Ct,nn),Ze=Qe,Je=Ct,pt=nn)},setLocked:function(Qe){A=Qe},setClear:function(Qe){Rt!==Qe&&(n.clearStencil(Qe),Rt=Qe)},reset:function(){A=!1,re=null,se=null,be=null,Se=null,Ze=null,Je=null,pt=null,Rt=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,M=null,v=null,T=null,L=null,w=null,R=null,q=null,y=new $e(0,0,0),b=0,H=!1,Y=null,ie=null,P=null,B=null,V=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=k>=2);let ee=null,le={};const G=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),oe=new ht().fromArray(G),ge=new ht().fromArray($);function me(A,re,se,be){const Se=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(A,Ze),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<se;Je++)i&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(re,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(re+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Ze}const Pe={};Pe[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(n.DEPTH_TEST),c.setFunc(vs),Fe(!1),E(Uo),De(n.CULL_FACE),fe($n);function De(A){d[A]!==!0&&(n.enable(A),d[A]=!0)}function Me(A){d[A]!==!1&&(n.disable(A),d[A]=!1)}function We(A,re){return p[A]!==re?(n.bindFramebuffer(A,re),p[A]=re,i&&(A===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=re),A===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=re)),!0):!1}function D(A,re){let se=g,be=!1;if(A)if(se=_.get(re),se===void 0&&(se=[],_.set(re,se)),A.isWebGLMultipleRenderTargets){const Se=A.texture;if(se.length!==Se.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,Je=Se.length;Ze<Je;Ze++)se[Ze]=n.COLOR_ATTACHMENT0+Ze;se.length=Se.length,be=!0}}else se[0]!==n.COLOR_ATTACHMENT0&&(se[0]=n.COLOR_ATTACHMENT0,be=!0);else se[0]!==n.BACK&&(se[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function wt(A){return m!==A?(n.useProgram(A),m=A,!0):!1}const xe={[oi]:n.FUNC_ADD,[jh]:n.FUNC_SUBTRACT,[Yh]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[Fo]=n.MIN,xe[Oo]=n.MAX;else{const A=e.get("EXT_blend_minmax");A!==null&&(xe[Fo]=A.MIN_EXT,xe[Oo]=A.MAX_EXT)}const we={[Kh]:n.ZERO,[Zh]:n.ONE,[Jh]:n.SRC_COLOR,[Fa]:n.SRC_ALPHA,[sf]:n.SRC_ALPHA_SATURATE,[nf]:n.DST_COLOR,[ef]:n.DST_ALPHA,[Qh]:n.ONE_MINUS_SRC_COLOR,[Oa]:n.ONE_MINUS_SRC_ALPHA,[rf]:n.ONE_MINUS_DST_COLOR,[tf]:n.ONE_MINUS_DST_ALPHA,[af]:n.CONSTANT_COLOR,[of]:n.ONE_MINUS_CONSTANT_COLOR,[cf]:n.CONSTANT_ALPHA,[lf]:n.ONE_MINUS_CONSTANT_ALPHA};function fe(A,re,se,be,Se,Ze,Je,pt,Rt,Qe){if(A===$n){f===!0&&(Me(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),A!==$h){if(A!==M||Qe!==H){if((v!==oi||w!==oi)&&(n.blendEquation(n.FUNC_ADD),v=oi,w=oi),Qe)switch(A){case ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Do:n.blendFunc(n.ONE,n.ONE);break;case Io:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case No:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Do:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Io:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case No:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}T=null,L=null,R=null,q=null,y.set(0,0,0),b=0,M=A,H=Qe}return}Se=Se||re,Ze=Ze||se,Je=Je||be,(re!==v||Se!==w)&&(n.blendEquationSeparate(xe[re],xe[Se]),v=re,w=Se),(se!==T||be!==L||Ze!==R||Je!==q)&&(n.blendFuncSeparate(we[se],we[be],we[Ze],we[Je]),T=se,L=be,R=Ze,q=Je),(pt.equals(y)===!1||Rt!==b)&&(n.blendColor(pt.r,pt.g,pt.b,Rt),y.copy(pt),b=Rt),M=A,H=!1}function it(A,re){A.side===Mn?Me(n.CULL_FACE):De(n.CULL_FACE);let se=A.side===Bt;re&&(se=!se),Fe(se),A.blending===ki&&A.transparent===!1?fe($n):fe(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);const be=A.stencilWrite;l.setTest(be),be&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),N(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(A){Y!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),Y=A)}function E(A){A!==Wh?(De(n.CULL_FACE),A!==ie&&(A===Uo?n.cullFace(n.BACK):A===Xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),ie=A}function x(A){A!==P&&(W&&n.lineWidth(A),P=A)}function N(A,re,se){A?(De(n.POLYGON_OFFSET_FILL),(B!==re||V!==se)&&(n.polygonOffset(re,se),B=re,V=se)):Me(n.POLYGON_OFFSET_FILL)}function J(A){A?De(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function K(A){A===void 0&&(A=n.TEXTURE0+X-1),ee!==A&&(n.activeTexture(A),ee=A)}function Q(A,re,se){se===void 0&&(ee===null?se=n.TEXTURE0+X-1:se=ee);let be=le[se];be===void 0&&(be={type:void 0,texture:void 0},le[se]=be),(be.type!==A||be.texture!==re)&&(ee!==se&&(n.activeTexture(se),ee=se),n.bindTexture(A,re||Pe[A]),be.type=A,be.texture=re)}function de(){const A=le[ee];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ie(A){oe.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),oe.copy(A))}function qe(A){ge.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ge.copy(A))}function st(A,re){let se=h.get(re);se===void 0&&(se=new WeakMap,h.set(re,se));let be=se.get(A);be===void 0&&(be=n.getUniformBlockIndex(re,A.name),se.set(A,be))}function ze(A,re){const be=h.get(re).get(A);u.get(re)!==be&&(n.uniformBlockBinding(re,be,A.__bindingPointIndex),u.set(re,be))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,le={},p={},_=new WeakMap,g=[],m=null,f=!1,M=null,v=null,T=null,L=null,w=null,R=null,q=null,y=new $e(0,0,0),b=0,H=!1,Y=null,ie=null,P=null,B=null,V=null,oe.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:Me,bindFramebuffer:We,drawBuffers:D,useProgram:wt,setBlending:fe,setMaterial:it,setFlipSided:Fe,setCullFace:E,setLineWidth:x,setPolygonOffset:N,setScissorTest:J,activeTexture:K,bindTexture:Q,unbindTexture:de,compressedTexImage2D:ae,compressedTexImage3D:ue,texImage2D:_e,texImage3D:he,updateUBOMapping:st,uniformBlockBinding:ze,texStorage2D:Ve,texStorage3D:Ae,texSubImage2D:Ee,texSubImage3D:Oe,compressedTexSubImage2D:j,compressedTexSubImage3D:je,scissor:Ie,viewport:qe,reset:te}}function X_(n,e,t,i,r,s,o){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return p?new OffscreenCanvas(E,x):Sr("canvas")}function g(E,x,N,J){let K=1;if((E.width>J||E.height>J)&&(K=J/Math.max(E.width,E.height)),K<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const Q=x?Wa:Math.floor,de=Q(K*E.width),ae=Q(K*E.height);h===void 0&&(h=_(de,ae));const ue=N?_(de,ae):h;return ue.width=de,ue.height=ae,ue.getContext("2d").drawImage(E,0,0,de,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+de+"x"+ae+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return dc(E.width)&&dc(E.height)}function f(E){return a?!1:E.wrapS!==xt||E.wrapT!==xt||E.minFilter!==_t&&E.minFilter!==bt}function M(E,x){return E.generateMipmaps&&x&&E.minFilter!==_t&&E.minFilter!==bt}function v(E){n.generateMipmap(E)}function T(E,x,N,J,K=!1){if(a===!1)return x;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=x;if(x===n.RED&&(N===n.FLOAT&&(Q=n.R32F),N===n.HALF_FLOAT&&(Q=n.R16F),N===n.UNSIGNED_BYTE&&(Q=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Q=n.R8UI),N===n.UNSIGNED_SHORT&&(Q=n.R16UI),N===n.UNSIGNED_INT&&(Q=n.R32UI),N===n.BYTE&&(Q=n.R8I),N===n.SHORT&&(Q=n.R16I),N===n.INT&&(Q=n.R32I)),x===n.RG&&(N===n.FLOAT&&(Q=n.RG32F),N===n.HALF_FLOAT&&(Q=n.RG16F),N===n.UNSIGNED_BYTE&&(Q=n.RG8)),x===n.RGBA){const de=K?xs:Ye.getTransfer(J);N===n.FLOAT&&(Q=n.RGBA32F),N===n.HALF_FLOAT&&(Q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Q=de===tt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function L(E,x,N){return M(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==_t&&E.minFilter!==bt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){return E===_t||E===Bo||E===Js?n.NEAREST:n.LINEAR}function R(E){const x=E.target;x.removeEventListener("dispose",R),y(x),x.isVideoTexture&&u.delete(x)}function q(E){const x=E.target;x.removeEventListener("dispose",q),H(x)}function y(E){const x=i.get(E);if(x.__webglInit===void 0)return;const N=E.source,J=d.get(N);if(J){const K=J[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(E),Object.keys(J).length===0&&d.delete(N)}i.remove(E)}function b(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const N=E.source,J=d.get(N);delete J[x.__cacheKey],o.memory.textures--}function H(E){const x=E.texture,N=i.get(E),J=i.get(x);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(N.__webglFramebuffer[K]))for(let Q=0;Q<N.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(N.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(N.__webglFramebuffer[K]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[K])}else{if(Array.isArray(N.__webglFramebuffer))for(let K=0;K<N.__webglFramebuffer.length;K++)n.deleteFramebuffer(N.__webglFramebuffer[K]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let K=0;K<N.__webglColorRenderbuffer.length;K++)N.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let K=0,Q=x.length;K<Q;K++){const de=i.get(x[K]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(x[K])}i.remove(x),i.remove(E)}let Y=0;function ie(){Y=0}function P(){const E=Y;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),Y+=1,E}function B(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function V(E,x){const N=i.get(E);if(E.isVideoTexture&&it(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(N,E,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function X(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){oe(N,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function W(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){oe(N,E,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function k(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){ge(N,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const Z={[Ha]:n.REPEAT,[xt]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},ee={[_t]:n.NEAREST,[Bo]:n.NEAREST_MIPMAP_NEAREST,[Js]:n.NEAREST_MIPMAP_LINEAR,[bt]:n.LINEAR,[Tf]:n.LINEAR_MIPMAP_NEAREST,[vr]:n.LINEAR_MIPMAP_LINEAR},le={[Bf]:n.NEVER,[Wf]:n.ALWAYS,[zf]:n.LESS,[Gl]:n.LEQUAL,[Hf]:n.EQUAL,[kf]:n.GEQUAL,[Gf]:n.GREATER,[Vf]:n.NOTEQUAL};function G(E,x,N){if(N?(n.texParameteri(E,n.TEXTURE_WRAP_S,Z[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Z[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Z[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ee[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ee[x.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==xt||x.wrapT!==xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(x.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==_t&&x.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===_t||x.minFilter!==Js&&x.minFilter!==vr||x.type===Xn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(E,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function $(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));const J=x.source;let K=d.get(J);K===void 0&&(K={},d.set(J,K));const Q=B(x);if(Q!==E.__cacheKey){K[Q]===void 0&&(K[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[Q].usedTimes++;const de=K[E.__cacheKey];de!==void 0&&(K[E.__cacheKey].usedTimes--,de.usedTimes===0&&b(x)),E.__cacheKey=Q,E.__webglTexture=K[Q].texture}return N}function oe(E,x,N){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);const K=$(E,x),Q=x.source;t.bindTexture(J,E.__webglTexture,n.TEXTURE0+N);const de=i.get(Q);if(Q.version!==de.__version||K===!0){t.activeTexture(n.TEXTURE0+N);const ae=Ye.getPrimaries(Ye.workingColorSpace),ue=x.colorSpace===$t?null:Ye.getPrimaries(x.colorSpace),Ee=x.colorSpace===$t||ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=f(x)&&m(x.image)===!1;let j=g(x.image,Oe,!1,r.maxTextureSize);j=Fe(x,j);const je=m(j)||a,Ve=s.convert(x.format,x.colorSpace);let Ae=s.convert(x.type),_e=T(x.internalFormat,Ve,Ae,x.colorSpace,x.isVideoTexture);G(J,x,je);let he;const Ie=x.mipmaps,qe=a&&x.isVideoTexture!==!0&&_e!==zl,st=de.__version===void 0||K===!0,ze=L(x,j,je);if(x.isDepthTexture)_e=n.DEPTH_COMPONENT,a?x.type===Xn?_e=n.DEPTH_COMPONENT32F:x.type===Wn?_e=n.DEPTH_COMPONENT24:x.type===di?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:x.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===pi&&_e===n.DEPTH_COMPONENT&&x.type!==Qa&&x.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Wn,Ae=s.convert(x.type)),x.format===Ji&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,x.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=di,Ae=s.convert(x.type))),st&&(qe?t.texStorage2D(n.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,_e,j.width,j.height,0,Ve,Ae,null));else if(x.isDataTexture)if(Ie.length>0&&je){qe&&st&&t.texStorage2D(n.TEXTURE_2D,ze,_e,Ie[0].width,Ie[0].height);for(let te=0,A=Ie.length;te<A;te++)he=Ie[te],qe?t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,Ve,Ae,he.data):t.texImage2D(n.TEXTURE_2D,te,_e,he.width,he.height,0,Ve,Ae,he.data);x.generateMipmaps=!1}else qe?(st&&t.texStorage2D(n.TEXTURE_2D,ze,_e,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,Ve,Ae,j.data)):t.texImage2D(n.TEXTURE_2D,0,_e,j.width,j.height,0,Ve,Ae,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qe&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,_e,Ie[0].width,Ie[0].height,j.depth);for(let te=0,A=Ie.length;te<A;te++)he=Ie[te],x.format!==qt?Ve!==null?qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,j.depth,Ve,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,_e,he.width,he.height,j.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,j.depth,Ve,Ae,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,_e,he.width,he.height,j.depth,0,Ve,Ae,he.data)}else{qe&&st&&t.texStorage2D(n.TEXTURE_2D,ze,_e,Ie[0].width,Ie[0].height);for(let te=0,A=Ie.length;te<A;te++)he=Ie[te],x.format!==qt?Ve!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,Ve,he.data):t.compressedTexImage2D(n.TEXTURE_2D,te,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(n.TEXTURE_2D,te,0,0,he.width,he.height,Ve,Ae,he.data):t.texImage2D(n.TEXTURE_2D,te,_e,he.width,he.height,0,Ve,Ae,he.data)}else if(x.isDataArrayTexture)qe?(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,_e,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ve,Ae,j.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,Ve,Ae,j.data);else if(x.isData3DTexture)qe?(st&&t.texStorage3D(n.TEXTURE_3D,ze,_e,j.width,j.height,j.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ve,Ae,j.data)):t.texImage3D(n.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,Ve,Ae,j.data);else if(x.isFramebufferTexture){if(st)if(qe)t.texStorage2D(n.TEXTURE_2D,ze,_e,j.width,j.height);else{let te=j.width,A=j.height;for(let re=0;re<ze;re++)t.texImage2D(n.TEXTURE_2D,re,_e,te,A,0,Ve,Ae,null),te>>=1,A>>=1}}else if(Ie.length>0&&je){qe&&st&&t.texStorage2D(n.TEXTURE_2D,ze,_e,Ie[0].width,Ie[0].height);for(let te=0,A=Ie.length;te<A;te++)he=Ie[te],qe?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ve,Ae,he):t.texImage2D(n.TEXTURE_2D,te,_e,Ve,Ae,he);x.generateMipmaps=!1}else qe?(st&&t.texStorage2D(n.TEXTURE_2D,ze,_e,j.width,j.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ve,Ae,j)):t.texImage2D(n.TEXTURE_2D,0,_e,Ve,Ae,j);M(x,je)&&v(J),de.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ge(E,x,N){if(x.image.length!==6)return;const J=$(E,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const Q=i.get(K);if(K.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+N);const de=Ye.getPrimaries(Ye.workingColorSpace),ae=x.colorSpace===$t?null:Ye.getPrimaries(x.colorSpace),ue=x.colorSpace===$t||de===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,Oe=x.image[0]&&x.image[0].isDataTexture,j=[];for(let te=0;te<6;te++)!Ee&&!Oe?j[te]=g(x.image[te],!1,!0,r.maxCubemapSize):j[te]=Oe?x.image[te].image:x.image[te],j[te]=Fe(x,j[te]);const je=j[0],Ve=m(je)||a,Ae=s.convert(x.format,x.colorSpace),_e=s.convert(x.type),he=T(x.internalFormat,Ae,_e,x.colorSpace),Ie=a&&x.isVideoTexture!==!0,qe=Q.__version===void 0||J===!0;let st=L(x,je,Ve);G(n.TEXTURE_CUBE_MAP,x,Ve);let ze;if(Ee){Ie&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,st,he,je.width,je.height);for(let te=0;te<6;te++){ze=j[te].mipmaps;for(let A=0;A<ze.length;A++){const re=ze[A];x.format!==qt?Ae!==null?Ie?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,0,0,re.width,re.height,Ae,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,he,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,0,0,re.width,re.height,Ae,_e,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A,he,re.width,re.height,0,Ae,_e,re.data)}}}else{ze=x.mipmaps,Ie&&qe&&(ze.length>0&&st++,t.texStorage2D(n.TEXTURE_CUBE_MAP,st,he,j[0].width,j[0].height));for(let te=0;te<6;te++)if(Oe){Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,j[te].width,j[te].height,Ae,_e,j[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,he,j[te].width,j[te].height,0,Ae,_e,j[te].data);for(let A=0;A<ze.length;A++){const se=ze[A].image[te].image;Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,0,0,se.width,se.height,Ae,_e,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,he,se.width,se.height,0,Ae,_e,se.data)}}else{Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ae,_e,j[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,he,Ae,_e,j[te]);for(let A=0;A<ze.length;A++){const re=ze[A];Ie?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,0,0,Ae,_e,re.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,A+1,he,Ae,_e,re.image[te])}}}M(x,Ve)&&v(n.TEXTURE_CUBE_MAP),Q.__version=K.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function me(E,x,N,J,K,Q){const de=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),ue=T(N.internalFormat,de,ae,N.colorSpace);if(!i.get(x).__hasExternalTextures){const Oe=Math.max(1,x.width>>Q),j=Math.max(1,x.height>>Q);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,Q,ue,Oe,j,x.depth,0,de,ae,null):t.texImage2D(K,Q,ue,Oe,j,0,de,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),fe(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,i.get(N).__webglTexture,0,we(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,K,i.get(N).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(E,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||fe(x)){const K=x.depthTexture;K&&K.isDepthTexture&&(K.type===Xn?J=n.DEPTH_COMPONENT32F:K.type===Wn&&(J=n.DEPTH_COMPONENT24));const Q=we(x);fe(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,J,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,J,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const J=we(x);N&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,x.width,x.height):fe(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const J=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<J.length;K++){const Q=J[K],de=s.convert(Q.format,Q.colorSpace),ae=s.convert(Q.type),ue=T(Q.internalFormat,de,ae,Q.colorSpace),Ee=we(x);N&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ue,x.width,x.height):fe(x)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ue,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ue,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const J=i.get(x.depthTexture).__webglTexture,K=we(x);if(x.depthTexture.format===pi)fe(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===Ji)fe(x)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Me(E){const x=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");De(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=n.createRenderbuffer(),Pe(x.__webglDepthbuffer[J],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Pe(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(E,x,N){const J=i.get(E);x!==void 0&&me(J.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Me(E)}function D(E){const x=E.texture,N=i.get(E),J=i.get(x);E.addEventListener("dispose",q),E.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,o.memory.textures++);const K=E.isWebGLCubeRenderTarget===!0,Q=E.isWebGLMultipleRenderTargets===!0,de=m(E)||a;if(K){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let ue=0;ue<x.mipmaps.length;ue++)N.__webglFramebuffer[ae][ue]=n.createFramebuffer()}else N.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)N.__webglFramebuffer[ae]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Q)if(r.drawBuffers){const ae=E.texture;for(let ue=0,Ee=ae.length;ue<Ee;ue++){const Oe=i.get(ae[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&fe(E)===!1){const ae=Q?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){const Ee=ae[ue];N.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Oe=s.convert(Ee.format,Ee.colorSpace),j=s.convert(Ee.type),je=T(Ee.internalFormat,Oe,j,Ee.colorSpace,E.isXRRenderTarget===!0),Ve=we(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,je,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),G(n.TEXTURE_CUBE_MAP,x,de);for(let ae=0;ae<6;ae++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)me(N.__webglFramebuffer[ae][ue],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else me(N.__webglFramebuffer[ae],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);M(x,de)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ae=E.texture;for(let ue=0,Ee=ae.length;ue<Ee;ue++){const Oe=ae[ue],j=i.get(Oe);t.bindTexture(n.TEXTURE_2D,j.__webglTexture),G(n.TEXTURE_2D,Oe,de),me(N.__webglFramebuffer,E,Oe,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),M(Oe,de)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,J.__webglTexture),G(ae,x,de),a&&x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)me(N.__webglFramebuffer[ue],E,x,n.COLOR_ATTACHMENT0,ae,ue);else me(N.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,ae,0);M(x,de)&&v(ae),t.unbindTexture()}E.depthBuffer&&Me(E)}function wt(E){const x=m(E)||a,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0,K=N.length;J<K;J++){const Q=N[J];if(M(Q,x)){const de=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ae=i.get(Q).__webglTexture;t.bindTexture(de,ae),v(de),t.unbindTexture()}}}function xe(E){if(a&&E.samples>0&&fe(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,J=E.height;let K=n.COLOR_BUFFER_BIT;const Q=[],de=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(E),ue=E.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){Q.push(n.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&Q.push(de);const Oe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Oe===!1&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ee]),Oe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[de]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[de])),ue){const j=i.get(x[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,N,J,0,0,N,J,K,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ae.__webglColorRenderbuffer[Ee]);const Oe=i.get(x[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function we(E){return Math.min(r.maxSamples,E.samples)}function fe(E){const x=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function it(E){const x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function Fe(E,x){const N=E.colorSpace,J=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Va||N!==wn&&N!==$t&&(Ye.getTransfer(N)===tt?a===!1?e.has("EXT_sRGB")===!0&&J===qt?(E.format=Va,E.minFilter=bt,E.generateMipmaps=!1):x=kl.sRGBToLinear(x):(J!==qt||K!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=P,this.resetTextureUnits=ie,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=We,this.setupRenderTarget=D,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=me,this.useMultisampledRTT=fe}function q_(n,e,t){const i=t.isWebGL2;function r(s,o=$t){let a;const c=Ye.getTransfer(o);if(s===Yn)return n.UNSIGNED_BYTE;if(s===Il)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Nl)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Af)return n.BYTE;if(s===wf)return n.SHORT;if(s===Qa)return n.UNSIGNED_SHORT;if(s===Dl)return n.INT;if(s===Wn)return n.UNSIGNED_INT;if(s===Xn)return n.FLOAT;if(s===xr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Rf)return n.ALPHA;if(s===qt)return n.RGBA;if(s===Cf)return n.LUMINANCE;if(s===Pf)return n.LUMINANCE_ALPHA;if(s===pi)return n.DEPTH_COMPONENT;if(s===Ji)return n.DEPTH_STENCIL;if(s===Va)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Lf)return n.RED;if(s===Fl)return n.RED_INTEGER;if(s===Uf)return n.RG;if(s===Ol)return n.RG_INTEGER;if(s===Bl)return n.RGBA_INTEGER;if(s===Qs||s===ea||s===ta||s===na)if(c===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===na)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zo||s===Ho||s===Go||s===Vo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Go)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ko||s===Wo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ko)return c===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xo||s===qo||s===$o||s===jo||s===Yo||s===Ko||s===Zo||s===Jo||s===Qo||s===ec||s===tc||s===nc||s===ic||s===rc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$o)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ko)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qo)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ec)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tc)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nc)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ic)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rc)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ia||s===sc||s===ac)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ia)return c===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ac)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Df||s===oc||s===cc||s===lc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ia)return a.COMPRESSED_RED_RGTC1_EXT;if(s===oc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===di?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class $_ extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Y_ extends rr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const M=[],v=[],T=new Xe;let L=null;const w=new en;w.layers.enable(1),w.viewport=new ht;const R=new en;R.layers.enable(2),R.viewport=new ht;const q=[w,R],y=new $_;y.layers.enable(1),y.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=M[G];return $===void 0&&($=new Ra,M[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=M[G];return $===void 0&&($=new Ra,M[G]=$),$.getGripSpace()},this.getHand=function(G){let $=M[G];return $===void 0&&($=new Ra,M[G]=$),$.getHandSpace()};function Y(G){const $=v.indexOf(G.inputSource);if($===-1)return;const oe=M[$];oe!==void 0&&(oe.update(G.inputSource,G.frame,l||o),oe.dispatchEvent({type:G.type,data:G.inputSource}))}function ie(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",P);for(let G=0;G<M.length;G++){const $=v[G];$!==null&&(v[G]=null,M[G].disconnect($))}b=null,H=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new xi(p.framebufferWidth,p.framebufferHeight,{format:qt,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,oe=null,ge=null;g.depth&&(ge=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?Ji:pi,oe=g.stencil?di:Wn);const me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new xi(d.textureWidth,d.textureHeight,{format:qt,type:Yn,depthTexture:new iu(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Pe=e.properties.get(f);Pe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(G){for(let $=0;$<G.removed.length;$++){const oe=G.removed[$],ge=v.indexOf(oe);ge>=0&&(v[ge]=null,M[ge].disconnect(oe))}for(let $=0;$<G.added.length;$++){const oe=G.added[$];let ge=v.indexOf(oe);if(ge===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=v.length){v.push(oe),ge=Pe;break}else if(v[Pe]===null){v[Pe]=oe,ge=Pe;break}if(ge===-1)break}const me=M[ge];me&&me.connect(oe)}}const B=new O,V=new O;function X(G,$,oe){B.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(oe.matrixWorld);const ge=B.distanceTo(V),me=$.projectionMatrix.elements,Pe=oe.projectionMatrix.elements,De=me[14]/(me[10]-1),Me=me[14]/(me[10]+1),We=(me[9]+1)/me[5],D=(me[9]-1)/me[5],wt=(me[8]-1)/me[0],xe=(Pe[8]+1)/Pe[0],we=De*wt,fe=De*xe,it=ge/(-wt+xe),Fe=it*-wt;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(it),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const E=De+it,x=Me+it,N=we-Fe,J=fe+(ge-Fe),K=We*Me/x*E,Q=D*Me/x*E;G.projectionMatrix.makePerspective(N,J,K,Q,E,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;y.near=R.near=w.near=G.near,y.far=R.far=w.far=G.far,(b!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,H=y.far);const $=G.parent,oe=y.cameras;W(y,$);for(let ge=0;ge<oe.length;ge++)W(oe[ge],$);oe.length===2?X(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),k(G,y,$)};function k(G,$,oe){oe===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ka*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let Z=null;function ee(G,$){if(u=$.getViewerPose(l||o),_=$,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ge=!1;oe.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let me=0;me<oe.length;me++){const Pe=oe[me];let De=null;if(p!==null)De=p.getViewport(Pe);else{const We=h.getViewSubImage(d,Pe);De=We.viewport,me===0&&(e.setRenderTargetTextures(f,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Me=q[me];Me===void 0&&(Me=new en,Me.layers.enable(me),Me.viewport=new ht,q[me]=Me),Me.matrix.fromArray(Pe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Pe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(De.x,De.y,De.width,De.height),me===0&&(y.matrix.copy(Me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(Me)}}for(let oe=0;oe<M.length;oe++){const ge=v[oe],me=M[oe];ge!==null&&me!==void 0&&me.update(ge,$,l||o)}Z&&Z(G,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}const le=new tu;le.setAnimationLoop(ee),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function K_(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zl(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,M,v,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Z_(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){const T=v.program;i.uniformBlockBinding(M,T)}function l(M,v){let T=r[M.id];T===void 0&&(_(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",m));const L=v.program;i.updateUBOMapping(M,L);const w=e.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function u(M){const v=h();M.__bindingPointIndex=v;const T=n.createBuffer(),L=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,T),T}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=r[M.id],T=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,R=T.length;w<R;w++){const q=Array.isArray(T[w])?T[w]:[T[w]];for(let y=0,b=q.length;y<b;y++){const H=q[y];if(p(H,w,y,L)===!0){const Y=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let P=0;for(let B=0;B<ie.length;B++){const V=ie[B],X=g(V);typeof V=="number"||typeof V=="boolean"?(H.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,Y+P,H.__data)):V.isMatrix3?(H.__data[0]=V.elements[0],H.__data[1]=V.elements[1],H.__data[2]=V.elements[2],H.__data[3]=0,H.__data[4]=V.elements[3],H.__data[5]=V.elements[4],H.__data[6]=V.elements[5],H.__data[7]=0,H.__data[8]=V.elements[6],H.__data[9]=V.elements[7],H.__data[10]=V.elements[8],H.__data[11]=0):(V.toArray(H.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,v,T,L){const w=M.value,R=v+"_"+T;if(L[R]===void 0)return typeof w=="number"||typeof w=="boolean"?L[R]=w:L[R]=w.clone(),!0;{const q=L[R];if(typeof w=="number"||typeof w=="boolean"){if(q!==w)return L[R]=w,!0}else if(q.equals(w)===!1)return q.copy(w),!0}return!1}function _(M){const v=M.uniforms;let T=0;const L=16;for(let R=0,q=v.length;R<q;R++){const y=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,H=y.length;b<H;b++){const Y=y[b],ie=Array.isArray(Y.value)?Y.value:[Y.value];for(let P=0,B=ie.length;P<B;P++){const V=ie[P],X=g(V),W=T%L;W!==0&&L-W<X.boundary&&(T+=L-W),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=X.storage}}}const w=T%L;return w>0&&(T+=L-w),M.__size=T,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}class lu{constructor(e={}){const{canvas:t=qf(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;const v=this;let T=!1,L=0,w=0,R=null,q=-1,y=null;const b=new ht,H=new ht;let Y=null;const ie=new $e(0);let P=0,B=t.width,V=t.height,X=1,W=null,k=null;const Z=new ht(0,0,B,V),ee=new ht(0,0,B,V);let le=!1;const G=new eu;let $=!1,oe=!1,ge=null;const me=new St,Pe=new Xe,De=new O,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return R===null?X:1}let D=i;function wt(S,U){for(let F=0;F<S.length;F++){const z=S[F],I=t.getContext(z,U);if(I!==null)return I}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",re,!1),D===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),D=wt(U,S),D===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xe,we,fe,it,Fe,E,x,N,J,K,Q,de,ae,ue,Ee,Oe,j,je,Ve,Ae,_e,he,Ie,qe;function st(){xe=new og(D),we=new tg(D,xe,e),xe.init(we),he=new q_(D,xe,we),fe=new W_(D,xe,we),it=new ug(D),Fe=new P_,E=new X_(D,xe,fe,Fe,we,he,it),x=new ig(v),N=new ag(v),J=new vd(D,we),Ie=new Qm(D,xe,J,we),K=new cg(D,J,it,Ie),Q=new pg(D,K,J,it),Ve=new dg(D,we,E),Oe=new ng(Fe),de=new C_(v,x,N,xe,we,Ie,Oe),ae=new K_(v,Fe),ue=new U_,Ee=new B_(xe,we),je=new Jm(v,x,N,fe,Q,d,c),j=new k_(v,Q,we),qe=new Z_(D,it,we,fe),Ae=new eg(D,xe,it,we),_e=new lg(D,xe,it,we),it.programs=de.programs,v.capabilities=we,v.extensions=xe,v.properties=Fe,v.renderLists=ue,v.shadowMap=j,v.state=fe,v.info=it}st();const ze=new Y_(v,D);this.xr=ze,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(B,V,!1))},this.getSize=function(S){return S.set(B,V)},this.setSize=function(S,U,F=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,V=U,t.width=Math.floor(S*X),t.height=Math.floor(U*X),F===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(B*X,V*X).floor()},this.setDrawingBufferSize=function(S,U,F){B=S,V=U,X=F,t.width=Math.floor(S*F),t.height=Math.floor(U*F),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(Z)},this.setViewport=function(S,U,F,z){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,U,F,z),fe.viewport(b.copy(Z).multiplyScalar(X).floor())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,U,F,z){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,U,F,z),fe.scissor(H.copy(ee).multiplyScalar(X).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){fe.setScissorTest(le=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){k=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(S=!0,U=!0,F=!0){let z=0;if(S){let I=!1;if(R!==null){const ce=R.texture.format;I=ce===Bl||ce===Ol||ce===Fl}if(I){const ce=R.texture.type,pe=ce===Yn||ce===Wn||ce===Qa||ce===di||ce===Il||ce===Nl,ye=je.getClearColor(),Te=je.getClearAlpha(),Be=ye.r,Re=ye.g,Le=ye.b;pe?(p[0]=Be,p[1]=Re,p[2]=Le,p[3]=Te,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Be,_[1]=Re,_[2]=Le,_[3]=Te,D.clearBufferiv(D.COLOR,0,_))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT),F&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ue.dispose(),Ee.dispose(),Fe.dispose(),x.dispose(),N.dispose(),Q.dispose(),Ie.dispose(),qe.dispose(),de.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Rt),ze.removeEventListener("sessionend",Qe),ge&&(ge.dispose(),ge=null),Ct.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=it.autoReset,U=j.enabled,F=j.autoUpdate,z=j.needsUpdate,I=j.type;st(),it.autoReset=S,j.enabled=U,j.autoUpdate=F,j.needsUpdate=z,j.type=I}function re(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function se(S){const U=S.target;U.removeEventListener("dispose",se),be(U)}function be(S){Se(S),Fe.remove(S)}function Se(S){const U=Fe.get(S).programs;U!==void 0&&(U.forEach(function(F){de.releaseProgram(F)}),S.isShaderMaterial&&de.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,F,z,I,ce){U===null&&(U=Me);const pe=I.isMesh&&I.matrixWorld.determinant()<0,ye=Bh(S,U,F,z,I);fe.setMaterial(z,pe);let Te=F.index,Be=1;if(z.wireframe===!0){if(Te=K.getWireframeAttribute(F),Te===void 0)return;Be=2}const Re=F.drawRange,Le=F.attributes.position;let lt=Re.start*Be,zt=(Re.start+Re.count)*Be;ce!==null&&(lt=Math.max(lt,ce.start*Be),zt=Math.min(zt,(ce.start+ce.count)*Be)),Te!==null?(lt=Math.max(lt,0),zt=Math.min(zt,Te.count)):Le!=null&&(lt=Math.max(lt,0),zt=Math.min(zt,Le.count));const mt=zt-lt;if(mt<0||mt===1/0)return;Ie.setup(I,z,ye,F,Te);let un,rt=Ae;if(Te!==null&&(un=J.get(Te),rt=_e,rt.setIndex(un)),I.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*We()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(I.isLine){let He=z.linewidth;He===void 0&&(He=1),fe.setLineWidth(He*We()),I.isLineSegments?rt.setMode(D.LINES):I.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else I.isPoints?rt.setMode(D.POINTS):I.isSprite&&rt.setMode(D.TRIANGLES);if(I.isBatchedMesh)rt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)rt.renderInstances(lt,mt,I.count);else if(F.isInstancedBufferGeometry){const He=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,js=Math.min(F.instanceCount,He);rt.renderInstances(lt,mt,js)}else rt.render(lt,mt)};function Ze(S,U,F){S.transparent===!0&&S.side===Mn&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,Wr(S,U,F),S.side=Kn,S.needsUpdate=!0,Wr(S,U,F),S.side=Mn):Wr(S,U,F)}this.compile=function(S,U,F=null){F===null&&(F=S),m=Ee.get(F),m.init(),M.push(m),F.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),S!==F&&S.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(v._useLegacyLights);const z=new Set;return S.traverse(function(I){const ce=I.material;if(ce)if(Array.isArray(ce))for(let pe=0;pe<ce.length;pe++){const ye=ce[pe];Ze(ye,F,I),z.add(ye)}else Ze(ce,F,I),z.add(ce)}),M.pop(),m=null,z},this.compileAsync=function(S,U,F=null){const z=this.compile(S,U,F);return new Promise(I=>{function ce(){if(z.forEach(function(pe){Fe.get(pe).currentProgram.isReady()&&z.delete(pe)}),z.size===0){I(S);return}setTimeout(ce,10)}xe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Je=null;function pt(S){Je&&Je(S)}function Rt(){Ct.stop()}function Qe(){Ct.start()}const Ct=new tu;Ct.setAnimationLoop(pt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(S){Je=S,ze.setAnimationLoop(S),S===null?Ct.stop():Ct.start()},ze.addEventListener("sessionstart",Rt),ze.addEventListener("sessionend",Qe),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(U),U=ze.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,R),m=Ee.get(S,M.length),m.init(),M.push(m),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(me),oe=this.localClippingEnabled,$=Oe.init(this.clippingPlanes,oe),g=ue.get(S,f.length),g.init(),f.push(g),nn(S,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(W,k),this.info.render.frame++,$===!0&&Oe.beginShadows();const F=m.state.shadowsArray;if(j.render(F,S,U),$===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(g,S),m.setupLights(v._useLegacyLights),U.isArrayCamera){const z=U.cameras;for(let I=0,ce=z.length;I<ce;I++){const pe=z[I];bo(g,S,pe,pe.viewport)}}else bo(g,S,U);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(v,S,U),Ie.resetDefaultState(),q=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function nn(S,U,F,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){z&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const pe=Q.update(S),ye=S.material;ye.visible&&g.push(S,pe,ye,F,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){const pe=Q.update(S),ye=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){const Te=pe.groups;for(let Be=0,Re=Te.length;Be<Re;Be++){const Le=Te[Be],lt=ye[Le.materialIndex];lt&&lt.visible&&g.push(S,pe,lt,F,De.z,Le)}}else ye.visible&&g.push(S,pe,ye,F,De.z,null)}}const ce=S.children;for(let pe=0,ye=ce.length;pe<ye;pe++)nn(ce[pe],U,F,z)}function bo(S,U,F,z){const I=S.opaque,ce=S.transmissive,pe=S.transparent;m.setupLightsView(F),$===!0&&Oe.setGlobalState(v.clippingPlanes,F),ce.length>0&&Oh(I,ce,U,F),z&&fe.viewport(b.copy(z)),I.length>0&&kr(I,U,F),ce.length>0&&kr(ce,U,F),pe.length>0&&kr(pe,U,F),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Oh(S,U,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ce=we.isWebGL2;ge===null&&(ge=new xi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?xr:Yn,minFilter:vr,samples:ce?4:0})),v.getDrawingBufferSize(Pe),ce?ge.setSize(Pe.x,Pe.y):ge.setSize(Wa(Pe.x),Wa(Pe.y));const pe=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(ie),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const ye=v.toneMapping;v.toneMapping=jn,kr(S,F,z),E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge);let Te=!1;for(let Be=0,Re=U.length;Be<Re;Be++){const Le=U[Be],lt=Le.object,zt=Le.geometry,mt=Le.material,un=Le.group;if(mt.side===Mn&&lt.layers.test(z.layers)){const rt=mt.side;mt.side=Bt,mt.needsUpdate=!0,To(lt,F,z,zt,mt,un),mt.side=rt,mt.needsUpdate=!0,Te=!0}}Te===!0&&(E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge)),v.setRenderTarget(pe),v.setClearColor(ie,P),v.toneMapping=ye}function kr(S,U,F){const z=U.isScene===!0?U.overrideMaterial:null;for(let I=0,ce=S.length;I<ce;I++){const pe=S[I],ye=pe.object,Te=pe.geometry,Be=z===null?pe.material:z,Re=pe.group;ye.layers.test(F.layers)&&To(ye,U,F,Te,Be,Re)}}function To(S,U,F,z,I,ce){S.onBeforeRender(v,U,F,z,I,ce),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(v,U,F,z,S,ce),I.transparent===!0&&I.side===Mn&&I.forceSinglePass===!1?(I.side=Bt,I.needsUpdate=!0,v.renderBufferDirect(F,U,z,I,S,ce),I.side=Kn,I.needsUpdate=!0,v.renderBufferDirect(F,U,z,I,S,ce),I.side=Mn):v.renderBufferDirect(F,U,z,I,S,ce),S.onAfterRender(v,U,F,z,I,ce)}function Wr(S,U,F){U.isScene!==!0&&(U=Me);const z=Fe.get(S),I=m.state.lights,ce=m.state.shadowsArray,pe=I.state.version,ye=de.getParameters(S,I.state,ce,U,F),Te=de.getProgramCacheKey(ye);let Be=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?N:x).get(S.envMap||z.environment),Be===void 0&&(S.addEventListener("dispose",se),Be=new Map,z.programs=Be);let Re=Be.get(Te);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===pe)return wo(S,ye),Re}else ye.uniforms=de.getUniforms(S),S.onBuild(F,ye,v),S.onBeforeCompile(ye,v),Re=de.acquireProgram(ye,Te),Be.set(Te,Re),z.uniforms=ye.uniforms;const Le=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),wo(S,ye),z.needsLights=Hh(S),z.lightsStateVersion=pe,z.needsLights&&(Le.ambientLightColor.value=I.state.ambient,Le.lightProbe.value=I.state.probe,Le.directionalLights.value=I.state.directional,Le.directionalLightShadows.value=I.state.directionalShadow,Le.spotLights.value=I.state.spot,Le.spotLightShadows.value=I.state.spotShadow,Le.rectAreaLights.value=I.state.rectArea,Le.ltc_1.value=I.state.rectAreaLTC1,Le.ltc_2.value=I.state.rectAreaLTC2,Le.pointLights.value=I.state.point,Le.pointLightShadows.value=I.state.pointShadow,Le.hemisphereLights.value=I.state.hemi,Le.directionalShadowMap.value=I.state.directionalShadowMap,Le.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Le.spotShadowMap.value=I.state.spotShadowMap,Le.spotLightMatrix.value=I.state.spotLightMatrix,Le.spotLightMap.value=I.state.spotLightMap,Le.pointShadowMap.value=I.state.pointShadowMap,Le.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function Ao(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=gs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function wo(S,U){const F=Fe.get(S);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function Bh(S,U,F,z,I){U.isScene!==!0&&(U=Me),E.resetTextureUnits();const ce=U.fog,pe=z.isMeshStandardMaterial?U.environment:null,ye=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wn,Te=(z.isMeshStandardMaterial?N:x).get(z.envMap||pe),Be=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Le=!!F.morphAttributes.position,lt=!!F.morphAttributes.normal,zt=!!F.morphAttributes.color;let mt=jn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=v.toneMapping);const un=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=un!==void 0?un.length:0,He=Fe.get(z),js=m.state.lights;if($===!0&&(oe===!0||S!==y)){const kt=S===y&&z.id===q;Oe.setState(z,S,kt)}let at=!1;z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==js.state.version||He.outputColorSpace!==ye||I.isBatchedMesh&&He.batching===!1||!I.isBatchedMesh&&He.batching===!0||I.isInstancedMesh&&He.instancing===!1||!I.isInstancedMesh&&He.instancing===!0||I.isSkinnedMesh&&He.skinning===!1||!I.isSkinnedMesh&&He.skinning===!0||I.isInstancedMesh&&He.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&He.instancingColor===!1&&I.instanceColor!==null||He.envMap!==Te||z.fog===!0&&He.fog!==ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Oe.numPlanes||He.numIntersection!==Oe.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==Re||He.morphTargets!==Le||He.morphNormals!==lt||He.morphColors!==zt||He.toneMapping!==mt||we.isWebGL2===!0&&He.morphTargetsCount!==rt)&&(at=!0):(at=!0,He.__version=z.version);let Qn=He.currentProgram;at===!0&&(Qn=Wr(z,U,I));let Ro=!1,or=!1,Ys=!1;const yt=Qn.getUniforms(),ei=He.uniforms;if(fe.useProgram(Qn.program)&&(Ro=!0,or=!0,Ys=!0),z.id!==q&&(q=z.id,or=!0),Ro||y!==S){yt.setValue(D,"projectionMatrix",S.projectionMatrix),yt.setValue(D,"viewMatrix",S.matrixWorldInverse);const kt=yt.map.cameraPosition;kt!==void 0&&kt.setValue(D,De.setFromMatrixPosition(S.matrixWorld)),we.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&yt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,or=!0,Ys=!0)}if(I.isSkinnedMesh){yt.setOptional(D,I,"bindMatrix"),yt.setOptional(D,I,"bindMatrixInverse");const kt=I.skeleton;kt&&(we.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),yt.setValue(D,"boneTexture",kt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(yt.setOptional(D,I,"batchingTexture"),yt.setValue(D,"batchingTexture",I._matricesTexture,E));const Ks=F.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0&&we.isWebGL2===!0)&&Ve.update(I,F,Qn),(or||He.receiveShadow!==I.receiveShadow)&&(He.receiveShadow=I.receiveShadow,yt.setValue(D,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ei.envMap.value=Te,ei.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),or&&(yt.setValue(D,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&zh(ei,Ys),ce&&z.fog===!0&&ae.refreshFogUniforms(ei,ce),ae.refreshMaterialUniforms(ei,z,X,V,ge),gs.upload(D,Ao(He),ei,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(gs.upload(D,Ao(He),ei,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&yt.setValue(D,"center",I.center),yt.setValue(D,"modelViewMatrix",I.modelViewMatrix),yt.setValue(D,"normalMatrix",I.normalMatrix),yt.setValue(D,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let Zs=0,Gh=kt.length;Zs<Gh;Zs++)if(we.isWebGL2){const Co=kt[Zs];qe.update(Co,Qn),qe.bind(Co,Qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qn}function zh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Hh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,F){Fe.get(S.texture).__webglTexture=U,Fe.get(S.depthTexture).__webglTexture=F;const z=Fe.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const F=Fe.get(S);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,F=0){R=S,L=U,w=F;let z=!0,I=null,ce=!1,pe=!1;if(S){const Te=Fe.get(S);Te.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(D.FRAMEBUFFER,null),z=!1):Te.__webglFramebuffer===void 0?E.setupRenderTarget(S):Te.__hasExternalTextures&&E.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(pe=!0);const Re=Fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?I=Re[U][F]:I=Re[U],ce=!0):we.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?I=Fe.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?I=Re[F]:I=Re,b.copy(S.viewport),H.copy(S.scissor),Y=S.scissorTest}else b.copy(Z).multiplyScalar(X).floor(),H.copy(ee).multiplyScalar(X).floor(),Y=le;if(fe.bindFramebuffer(D.FRAMEBUFFER,I)&&we.drawBuffers&&z&&fe.drawBuffers(S,I),fe.viewport(b),fe.scissor(H),fe.setScissorTest(Y),ce){const Te=Fe.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,F)}else if(pe){const Te=Fe.get(S.texture),Be=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,F||0,Be)}q=-1},this.readRenderTargetPixels=function(S,U,F,z,I,ce,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){fe.bindFramebuffer(D.FRAMEBUFFER,ye);try{const Te=S.texture,Be=Te.format,Re=Te.type;if(Be!==qt&&he.convert(Be)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===xr&&(xe.has("EXT_color_buffer_half_float")||we.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Re!==Yn&&he.convert(Re)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Xn&&(we.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&F>=0&&F<=S.height-I&&D.readPixels(U,F,z,I,he.convert(Be),he.convert(Re),ce)}finally{const Te=R!==null?Fe.get(R).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(S,U,F=0){const z=Math.pow(2,-F),I=Math.floor(U.image.width*z),ce=Math.floor(U.image.height*z);E.setTexture2D(U,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,S.x,S.y,I,ce),fe.unbindTexture()},this.copyTextureToTexture=function(S,U,F,z=0){const I=U.image.width,ce=U.image.height,pe=he.convert(F.format),ye=he.convert(F.type);E.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),U.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,S.x,S.y,I,ce,pe,ye,U.image.data):U.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,pe,U.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,z,S.x,S.y,pe,ye,U.image),z===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,U,F,z,I=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=S.max.x-S.min.x+1,pe=S.max.y-S.min.y+1,ye=S.max.z-S.min.z+1,Te=he.convert(z.format),Be=he.convert(z.type);let Re;if(z.isData3DTexture)E.setTexture3D(z,0),Re=D.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)E.setTexture2DArray(z,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const Le=D.getParameter(D.UNPACK_ROW_LENGTH),lt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),zt=D.getParameter(D.UNPACK_SKIP_PIXELS),mt=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES),rt=F.isCompressedTexture?F.mipmaps[I]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(Re,I,U.x,U.y,U.z,ce,pe,ye,Te,Be,rt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Re,I,U.x,U.y,U.z,ce,pe,ye,Te,rt.data)):D.texSubImage3D(Re,I,U.x,U.y,U.z,ce,pe,ye,Te,Be,rt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,mt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),I===0&&z.generateMipmaps&&D.generateMipmap(Re),fe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){L=0,w=0,R=null,fe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eo?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?mi:Hl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mi?vt:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class J_ extends lu{}J_.prototype.isWebGL1Renderer=!0;class Q_ extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class uu extends Lt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Jc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ev{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const tv=new ev;class io{constructor(e){this.manager=e!==void 0?e:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";class nv extends io{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Sr("img");function c(){u(),Jc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class iv extends io{constructor(e){super(e)}load(e,t,i,r){const s=new Lt,o=new nv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);const rv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sv=`
  uniform float uColumns;
  uniform vec2 uOffset;
  uniform vec2 uResolution;
  uniform vec4 uBorderColor;
  uniform vec4 uHoverColor;
  uniform vec4 uBackgroundColor;
  uniform vec2 uMousePos;
  uniform float uZoom;
  uniform float uCellSize;
  uniform float uTextureCount;
  uniform sampler2D uImageAtlas;
  uniform sampler2D uTextAtlas;
  varying vec2 vUv;
  
  void main() {
    vec2 screenUV = (vUv - 0.5) * 2.0;
    
    float radius = length(screenUV);
    float distortion = 1.0 - 0.08 * radius * radius;
    vec2 distortedUV = screenUV * distortion;
    
    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 worldCoord = distortedUV * aspectRatio;
    
    worldCoord *= uZoom;
    worldCoord += uOffset;
    
    vec2 cellPos = worldCoord / uCellSize;
    vec2 cellId = floor(cellPos);
    vec2 cellUV = fract(cellPos);
    
    vec2 mouseScreenUV = (uMousePos / uResolution) * 2.0 - 1.0;
    mouseScreenUV.y = -mouseScreenUV.y;
    
    float mouseRadius = length(mouseScreenUV);
    float mouseDistortion = 1.0 - 0.08 * mouseRadius * mouseRadius;
    vec2 mouseDistortedUV = mouseScreenUV * mouseDistortion;
    vec2 mouseWorldCoord = mouseDistortedUV * aspectRatio;
    
    mouseWorldCoord *= uZoom;
    mouseWorldCoord += uOffset;
    
    vec2 mouseCellPos = mouseWorldCoord / uCellSize;
    vec2 mouseCellId = floor(mouseCellPos);
    
    vec2 cellCenter = cellId + 0.5;
    vec2 mouseCellCenter = mouseCellId + 0.5;
    float cellDistance = length(cellCenter - mouseCellCenter);
    float hoverIntensity = 1.0 - smoothstep(0.4, 0.7, cellDistance);
    bool isHovered = hoverIntensity > 0.0 && uMousePos.x >= 0.0;
    
    vec3 backgroundColor = uBackgroundColor.rgb;
    if (isHovered) {
      backgroundColor = mix(uBackgroundColor.rgb, uHoverColor.rgb, hoverIntensity * uHoverColor.a);
    }
    
    float lineWidth = 0.005;
    float gridX = smoothstep(0.0, lineWidth, cellUV.x) * smoothstep(0.0, lineWidth, 1.0 - cellUV.x);
    float gridY = smoothstep(0.0, lineWidth, cellUV.y) * smoothstep(0.0, lineWidth, 1.0 - cellUV.y);
    float gridMask = gridX * gridY;
    
    float imageSize = 0.6;
    float imageBorder = (1.0 - imageSize) * 0.5;
    
    vec2 imageUV = (cellUV - imageBorder) / imageSize;
    
    float edgeSmooth = 0.01;
    vec2 imageMask = smoothstep(-edgeSmooth, edgeSmooth, imageUV) * 
                    smoothstep(-edgeSmooth, edgeSmooth, 1.0 - imageUV);
    float imageAlpha = imageMask.x * imageMask.y;
    
    bool inImageArea = imageUV.x >= 0.0 && imageUV.x <= 1.0 && imageUV.y >= 0.0 && imageUV.y <= 1.0;
    
    float textHeight = 0.08;
    float textY = 0.88;
    
    bool inTextArea = cellUV.x >= 0.05 && cellUV.x <= 0.95 && cellUV.y >= textY && cellUV.y <= (textY + textHeight);
    
    float linearIndex = floor(cellId.x + cellId.y * uColumns);
    float texIndex = clamp(mod(linearIndex, uTextureCount), 0.0, uTextureCount - 1.0);
    
    vec3 color = backgroundColor;

    // Only render if texIndex is within range
    if (texIndex < uTextureCount) {
      if (inImageArea && imageAlpha > 0.0) {
        float atlasSize = ceil(sqrt(uTextureCount));
        vec2 atlasPos = vec2(mod(texIndex, atlasSize), floor(texIndex / atlasSize));
        vec2 atlasUV = (atlasPos + imageUV) / atlasSize;
        atlasUV.y = 1.0 - atlasUV.y;

        vec3 imageColor = texture2D(uImageAtlas, atlasUV).rgb;
        color = mix(color, imageColor, imageAlpha);
      }

      if (inTextArea) {
        vec2 textCoord = vec2((cellUV.x - 0.05) / 0.9, (cellUV.y - textY) / textHeight);
        textCoord.y = 1.0 - textCoord.y;

        float atlasSize = ceil(sqrt(uTextureCount));
        vec2 atlasPos = vec2(mod(texIndex, atlasSize), floor(texIndex / atlasSize));
        vec2 atlasUV = (atlasPos + textCoord) / atlasSize;

        vec4 textColor = texture2D(uTextAtlas, atlasUV);

        vec3 textBgColor = backgroundColor;
        color = mix(textBgColor, textColor.rgb, textColor.a);
      }
    }
    
    vec3 borderRGB = uBorderColor.rgb;
    float borderAlpha = uBorderColor.a;
    color = mix(color, borderRGB, (1.0 - gridMask) * borderAlpha);
    
    float fade = 1.0 - smoothstep(1.2, 1.8, radius);
    
    gl_FragColor = vec4(color * fade, 1.0);
  }
`,av="modulepreload",ov=function(n,e){return new URL(n,e).href},Qc={},hu=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=ov(l,i),l in Qc)return;Qc[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const g=o[_];if(g.href===l&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":av,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((_,g)=>{p.addEventListener("load",_),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},fu=!(typeof navigator>"u")&&navigator.product==="ReactNative",du={timeout:fu?6e4:12e4},cv=function(n){const e={...du,...typeof n=="string"?{url:n}:n};if(e.timeout=pu(e.timeout),e.query){const{url:t,searchParams:i}=function(r){const s=r.indexOf("?");if(s===-1)return{url:r,searchParams:new URLSearchParams};const o=r.slice(0,s),a=r.slice(s+1);if(!fu)return{url:o,searchParams:new URLSearchParams(a)};if(typeof decodeURIComponent!="function")throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");const c=new URLSearchParams;for(const l of a.split("&")){const[u,h]=l.split("=");u&&c.append(el(u),el(h||""))}return{url:o,searchParams:c}}(e.url);for(const[r,s]of Object.entries(e.query)){if(s!==void 0)if(Array.isArray(s))for(const a of s)i.append(r,a);else i.append(r,s);const o=i.toString();o&&(e.url=`${t}?${o}`)}}return e.method=e.body&&!e.method?"POST":(e.method||"GET").toUpperCase(),e};function el(n){return decodeURIComponent(n.replace(/\+/g," "))}function pu(n){if(n===!1||n===0)return!1;if(n.connect||n.socket)return n;const e=Number(n);return isNaN(e)?pu(du.timeout):{connect:e,socket:e}}const lv=/^https?:\/\//i,uv=function(n){if(!lv.test(n.url))throw new Error(`"${n.url}" is not a valid URL`)};function mu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}const hv=["request","response","progress","error","abort"],tl=["processOptions","validateOptions","interceptRequest","finalizeOptions","onRequest","onResponse","onError","onReturn","onHeaders"];function gu(n,e){const t=[],i=tl.reduce((s,o)=>(s[o]=s[o]||[],s),{processOptions:[cv],validateOptions:[uv]});function r(s){const o=hv.reduce((p,_)=>(p[_]=function(){const g=Object.create(null);let m=0;return{publish:function(f){for(const M in g)g[M](f)},subscribe:function(f){const M=m++;return g[M]=f,function(){delete g[M]}}}}(),p),{}),a=(p=>function(_,g,...m){const f=_==="onError";let M=g;for(let v=0;v<p[_].length&&(M=(0,p[_][v])(M,...m),!f||M);v++);return M})(i),c=a("processOptions",s);a("validateOptions",c);const l={options:c,channels:o,applyMiddleware:a};let u;const h=o.request.subscribe(p=>{u=e(p,(_,g)=>((m,f,M)=>{let v=m,T=f;if(!v)try{T=a("onResponse",f,M)}catch(L){T=null,v=L}v=v&&a("onError",v,M),v?o.error.publish(v):T&&o.response.publish(T)})(_,g,p))});o.abort.subscribe(()=>{h(),u&&u.abort()});const d=a("onReturn",o,l);return d===o&&o.request.publish(l),d}return r.use=function(s){if(!s)throw new Error("Tried to add middleware that resolved to falsey value");if(typeof s=="function")throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");if(s.onReturn&&i.onReturn.length>0)throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");return tl.forEach(o=>{s[o]&&i[o].push(s[o])}),t.push(s),r},r.clone=()=>gu(t,e),n.forEach(r.use),r}var nl,il,fv=mu(function(){if(il)return nl;il=1;var n=function(e){return e.replace(/^\s+|\s+$/g,"")};return nl=function(e){if(!e)return{};for(var t={},i=n(e).split(`
`),r=0;r<i.length;r++){var s=i[r],o=s.indexOf(":"),a=n(s.slice(0,o)).toLowerCase(),c=n(s.slice(o+1));typeof t[a]>"u"?t[a]=c:(l=t[a],Object.prototype.toString.call(l)==="[object Array]"?t[a].push(c):t[a]=[t[a],c])}var l;return t}}()),yr,Er,$i,Mr,_n,br,Tr,Cl;let qa=(Cl=class{constructor(){ve(this,"onabort");ve(this,"onerror");ve(this,"onreadystatechange");ve(this,"ontimeout");ve(this,"readyState",0);ve(this,"response");ve(this,"responseText","");ve(this,"responseType","");ve(this,"status");ve(this,"statusText");ve(this,"withCredentials");Ue(this,yr);Ue(this,Er);Ue(this,$i);Ue(this,Mr,{});Ue(this,_n);Ue(this,br,{});Ue(this,Tr)}open(e,t,i){var r;Ce(this,yr,e),Ce(this,Er,t),Ce(this,$i,""),this.readyState=1,(r=this.onreadystatechange)==null||r.call(this),Ce(this,_n,void 0)}abort(){C(this,_n)&&C(this,_n).abort()}getAllResponseHeaders(){return C(this,$i)}setRequestHeader(e,t){C(this,Mr)[e]=t}setInit(e,t=!0){Ce(this,br,e),Ce(this,Tr,t)}send(e){const t=this.responseType!=="arraybuffer",i={...C(this,br),method:C(this,yr),headers:C(this,Mr),body:e};typeof AbortController=="function"&&C(this,Tr)&&(Ce(this,_n,new AbortController),typeof EventTarget<"u"&&C(this,_n).signal instanceof EventTarget&&(i.signal=C(this,_n).signal)),typeof document<"u"&&(i.credentials=this.withCredentials?"include":"omit"),fetch(C(this,Er),i).then(r=>{var s;return r.headers.forEach((o,a)=>{Ce(this,$i,C(this,$i)+`${a}: ${o}\r
`)}),this.status=r.status,this.statusText=r.statusText,this.readyState=3,(s=this.onreadystatechange)==null||s.call(this),t?r.text():r.arrayBuffer()}).then(r=>{var s;typeof r=="string"?this.responseText=r:this.response=r,this.readyState=4,(s=this.onreadystatechange)==null||s.call(this)}).catch(r=>{var s,o;r.name!=="AbortError"?(s=this.onerror)==null||s.call(this,r):(o=this.onabort)==null||o.call(this)})}},yr=new WeakMap,Er=new WeakMap,$i=new WeakMap,Mr=new WeakMap,_n=new WeakMap,br=new WeakMap,Tr=new WeakMap,Cl);const $a=typeof XMLHttpRequest=="function"?"xhr":"fetch",dv=$a==="xhr"?XMLHttpRequest:qa,pv=(n,e)=>{const t=n.options,i=n.applyMiddleware("finalizeOptions",t),r={},s=n.applyMiddleware("interceptRequest",void 0,{adapter:$a,context:n});if(s){const g=setTimeout(e,0,null,s);return{abort:()=>clearTimeout(g)}}let o=new dv;o instanceof qa&&typeof i.fetch=="object"&&o.setInit(i.fetch,i.useAbortSignal??!0);const a=i.headers,c=i.timeout;let l=!1,u=!1,h=!1;if(o.onerror=g=>{_(o instanceof qa?g instanceof Error?g:new Error(`Request error while attempting to reach is ${i.url}`,{cause:g}):new Error(`Request error while attempting to reach is ${i.url}${g.lengthComputable?`(${g.loaded} of ${g.total} bytes transferred)`:""}`))},o.ontimeout=g=>{_(new Error(`Request timeout while attempting to reach ${i.url}${g.lengthComputable?`(${g.loaded} of ${g.total} bytes transferred)`:""}`))},o.onabort=()=>{p(!0),l=!0},o.onreadystatechange=function(){c&&(p(),r.socket=setTimeout(()=>d("ESOCKETTIMEDOUT"),c.socket)),!l&&o&&o.readyState===4&&o.status!==0&&function(){if(!(l||u||h)){if(o.status===0)return void _(new Error("Unknown XHR error"));p(),u=!0,e(null,{body:o.response||(o.responseType===""||o.responseType==="text"?o.responseText:""),url:i.url,method:i.method,headers:fv(o.getAllResponseHeaders()),statusCode:o.status,statusMessage:o.statusText})}}()},o.open(i.method,i.url,!0),o.withCredentials=!!i.withCredentials,a&&o.setRequestHeader)for(const g in a)a.hasOwnProperty(g)&&o.setRequestHeader(g,a[g]);return i.rawBody&&(o.responseType="arraybuffer"),n.applyMiddleware("onRequest",{options:i,adapter:$a,request:o,context:n}),o.send(i.body||null),c&&(r.connect=setTimeout(()=>d("ETIMEDOUT"),c.connect)),{abort:function(){l=!0,o&&o.abort()}};function d(g){h=!0,o.abort();const m=new Error(g==="ESOCKETTIMEDOUT"?`Socket timed out on request to ${i.url}`:`Connection timed out on request to ${i.url}`);m.code=g,n.channels.error.publish(m)}function p(g){(g||l||o&&o.readyState>=2&&r.connect)&&clearTimeout(r.connect),r.socket&&clearTimeout(r.socket)}function _(g){if(u)return;p(!0),u=!0,o=null;const m=g||new Error(`Network error while attempting to reach ${i.url}`);m.isNetworkError=!0,m.request=i,e(m)}},mv=(n=[],e=pv)=>gu(n,e);var gv={},rl,sl,al,ol,cl,Ca={exports:{}};cl||(cl=1,function(n,e){e.formatArgs=function(i){if(i[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+i[0]+(this.useColors?"%c ":" ")+"+"+n.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;i.splice(1,0,r,"color: inherit");let s=0,o=0;i[0].replace(/%[a-zA-Z%]/g,a=>{a!=="%%"&&(s++,a==="%c"&&(o=s))}),i.splice(o,0,r)},e.save=function(i){try{i?e.storage.setItem("debug",i):e.storage.removeItem("debug")}catch{}},e.load=function(){let i;try{i=e.storage.getItem("debug")}catch{}return!i&&typeof process<"u"&&"env"in process&&(i=gv.DEBUG),i},e.useColors=function(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let i;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(i=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(i[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch{}}(),e.destroy=(()=>{let i=!1;return()=>{i||(i=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),n.exports=(ol?al:(ol=1,al=function(i){function r(a){let c,l,u,h=null;function d(...p){if(!d.enabled)return;const _=d,g=Number(new Date),m=g-(c||g);_.diff=m,_.prev=c,_.curr=g,c=g,p[0]=r.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");let f=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,(M,v)=>{if(M==="%%")return"%";f++;const T=r.formatters[v];if(typeof T=="function"){const L=p[f];M=T.call(_,L),p.splice(f,1),f--}return M}),r.formatArgs.call(_,p),(_.log||r.log).apply(_,p)}return d.namespace=a,d.useColors=r.useColors(),d.color=r.selectColor(a),d.extend=s,d.destroy=r.destroy,Object.defineProperty(d,"enabled",{enumerable:!0,configurable:!1,get:()=>h!==null?h:(l!==r.namespaces&&(l=r.namespaces,u=r.enabled(a)),u),set:p=>{h=p}}),typeof r.init=="function"&&r.init(d),d}function s(a,c){const l=r(this.namespace+(typeof c>"u"?":":c)+a);return l.log=this.log,l}function o(a,c){let l=0,u=0,h=-1,d=0;for(;l<a.length;)if(u<c.length&&(c[u]===a[l]||c[u]==="*"))c[u]==="*"?(h=u,d=l,u++):(l++,u++);else{if(h===-1)return!1;u=h+1,d++,l=d}for(;u<c.length&&c[u]==="*";)u++;return u===c.length}return r.debug=r,r.default=r,r.coerce=function(a){return a instanceof Error?a.stack||a.message:a},r.disable=function(){const a=[...r.names,...r.skips.map(c=>"-"+c)].join(",");return r.enable(""),a},r.enable=function(a){r.save(a),r.namespaces=a,r.names=[],r.skips=[];const c=(typeof a=="string"?a:"").trim().replace(" ",",").split(",").filter(Boolean);for(const l of c)l[0]==="-"?r.skips.push(l.slice(1)):r.names.push(l)},r.enabled=function(a){for(const c of r.skips)if(o(a,c))return!1;for(const c of r.names)if(o(a,c))return!0;return!1},r.humanize=function(){if(sl)return rl;sl=1;var a=1e3,c=60*a,l=60*c,u=24*l,h=7*u;function d(p,_,g,m){var f=_>=1.5*g;return Math.round(p/g)+" "+m+(f?"s":"")}return rl=function(p,_){_=_||{};var g,m,f=typeof p;if(f==="string"&&p.length>0)return function(M){if(!((M=String(M)).length>100)){var v=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(M);if(v){var T=parseFloat(v[1]);switch((v[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*T;case"weeks":case"week":case"w":return T*h;case"days":case"day":case"d":return T*u;case"hours":case"hour":case"hrs":case"hr":case"h":return T*l;case"minutes":case"minute":case"mins":case"min":case"m":return T*c;case"seconds":case"second":case"secs":case"sec":case"s":return T*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return T;default:return}}}}(p);if(f==="number"&&isFinite(p))return _.long?(g=p,(m=Math.abs(g))>=u?d(g,m,u,"day"):m>=l?d(g,m,l,"hour"):m>=c?d(g,m,c,"minute"):m>=a?d(g,m,a,"second"):g+" ms"):function(M){var v=Math.abs(M);return v>=u?Math.round(M/u)+"d":v>=l?Math.round(M/l)+"h":v>=c?Math.round(M/c)+"m":v>=a?Math.round(M/a)+"s":M+"ms"}(p);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(p))}}(),r.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(i).forEach(a=>{r[a]=i[a]}),r.names=[],r.skips=[],r.formatters={},r.selectColor=function(a){let c=0;for(let l=0;l<a.length;l++)c=(c<<5)-c+a.charCodeAt(l),c|=0;return r.colors[Math.abs(c)%r.colors.length]},r.enable(r.load()),r}))(e);const{formatters:t}=n.exports;t.j=function(i){try{return JSON.stringify(i)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}}}(Ca,Ca.exports)),Ca.exports;const _v=typeof Buffer>"u"?()=>!1:n=>Buffer.isBuffer(n);function ll(n){return Object.prototype.toString.call(n)==="[object Object]"}function vv(n){if(ll(n)===!1)return!1;const e=n.constructor;if(e===void 0)return!0;const t=e.prototype;return!(ll(t)===!1||t.hasOwnProperty("isPrototypeOf")===!1)}const xv=["boolean","string","number"];function Sv(){return{processOptions:n=>{const e=n.body;return!e||typeof e.pipe=="function"||_v(e)||xv.indexOf(typeof e)===-1&&!Array.isArray(e)&&!vv(e)?n:Object.assign({},n,{body:JSON.stringify(n.body),headers:Object.assign({},n.headers,{"Content-Type":"application/json"})})}}}function yv(n){return{onResponse:t=>{const i=t.headers["content-type"]||"",r=n&&n.force||i.indexOf("application/json")!==-1;return t.body&&i&&r?Object.assign({},t,{body:e(t.body)}):t},processOptions:t=>Object.assign({},t,{headers:Object.assign({Accept:"application/json"},t.headers)})};function e(t){try{return JSON.parse(t)}catch(i){throw i.message=`Failed to parsed response body as JSON: ${i.message}`,i}}}let dr={};typeof globalThis<"u"?dr=globalThis:typeof window<"u"?dr=window:typeof global<"u"?dr=global:typeof self<"u"&&(dr=self);var Ev=dr;function Mv(n={}){const e=n.implementation||Ev.Observable;if(!e)throw new Error("`Observable` is not available in global scope, and no implementation was passed");return{onReturn:(t,i)=>new e(r=>(t.error.subscribe(s=>r.error(s)),t.progress.subscribe(s=>r.next(Object.assign({type:"progress"},s))),t.response.subscribe(s=>{r.next(Object.assign({type:"response"},s)),r.complete()}),t.request.publish(i),()=>t.abort.publish()))}}function bv(){return{onRequest:n=>{if(n.adapter!=="xhr")return;const e=n.request,t=n.context;function i(r){return s=>{const o=s.lengthComputable?s.loaded/s.total*100:-1;t.channels.progress.publish({stage:r,percent:o,total:s.total,loaded:s.loaded,lengthComputable:s.lengthComputable})}}"upload"in e&&"onprogress"in e.upload&&(e.upload.onprogress=i("upload")),"onprogress"in e&&(e.onprogress=i("download"))}}}var _u=(n,e,t)=>(t.method==="GET"||t.method==="HEAD")&&(n.isNetworkError||!1);function Tv(n){return 100*Math.pow(2,n)+100*Math.random()}const ro=(n={})=>(e=>{const t=e.maxRetries||5,i=e.retryDelay||Tv,r=e.shouldRetry;return{onError:(s,o)=>{const a=o.options,c=a.maxRetries||t,l=a.retryDelay||i,u=a.shouldRetry||r,h=a.attemptNumber||0;if((d=a.body)!==null&&typeof d=="object"&&typeof d.pipe=="function"||!u(s,h,a)||h>=c)return s;var d;const p=Object.assign({},o,{options:Object.assign({},a,{attemptNumber:h+1})});return setTimeout(()=>o.channels.request.publish(p),l(h)),null}}})({shouldRetry:_u,...n});ro.shouldRetry=_u;var ja=function(n,e){return ja=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},ja(n,e)};function Pn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ja(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Av(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(h){o(h)}}function c(u){try{l(i.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function vu(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(u){l=[6,u],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function er(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Rn(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function Cn(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function Xi(n){return this instanceof Xi?(this.v=n,this):new Xi(n)}function wv(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(_){return Promise.resolve(_).then(p,h)}}function a(p,_){i[p]&&(r[p]=function(g){return new Promise(function(m,f){s.push([p,g,m,f])>1||c(p,g)})},_&&(r[p]=_(r[p])))}function c(p,_){try{l(i[p](_))}catch(g){d(s[0][3],g)}}function l(p){p.value instanceof Xi?Promise.resolve(p.value.v).then(u,h):d(s[0][2],p)}function u(p){c("next",p)}function h(p){c("throw",p)}function d(p,_){p(_),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Rv(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof er=="function"?er(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}function nt(n){return typeof n=="function"}function so(n){var e=function(i){Error.call(i),i.stack=new Error().stack},t=n(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Pa=so(function(n){return function(t){n(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,r){return r+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Ms(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Br=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,t,i,r,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=er(o),c=a.next();!c.done;c=a.next()){var l=c.value;l.remove(this)}}catch(g){e={error:g}}finally{try{c&&!c.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else o.remove(this);var u=this.initialTeardown;if(nt(u))try{u()}catch(g){s=g instanceof Pa?g.errors:[g]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=er(h),p=d.next();!p.done;p=d.next()){var _=p.value;try{ul(_)}catch(g){s=s??[],g instanceof Pa?s=Cn(Cn([],Rn(s)),Rn(g.errors)):s.push(g)}}}catch(g){i={error:g}}finally{try{p&&!p.done&&(r=d.return)&&r.call(d)}finally{if(i)throw i.error}}}if(s)throw new Pa(s)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)ul(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},n.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},n.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},n.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Ms(t,e)},n.prototype.remove=function(e){var t=this._finalizers;t&&Ms(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),xu=Br.EMPTY;function Su(n){return n instanceof Br||n&&"closed"in n&&nt(n.remove)&&nt(n.add)&&nt(n.unsubscribe)}function ul(n){nt(n)?n():n.unsubscribe()}var Cv={Promise:void 0},Pv={setTimeout:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,Cn([n,e],Rn(t)))},clearTimeout:function(n){return clearTimeout(n)},delegate:void 0};function yu(n){Pv.setTimeout(function(){throw n})}function hl(){}function _s(n){n()}var ao=function(n){Pn(e,n);function e(t){var i=n.call(this)||this;return i.isStopped=!1,t?(i.destination=t,Su(t)&&t.add(i)):i.destination=Dv,i}return e.create=function(t,i,r){return new tr(t,i,r)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Br),Lv=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){ps(i)}},n.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){ps(i)}else ps(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){ps(t)}},n}(),tr=function(n){Pn(e,n);function e(t,i,r){var s=n.call(this)||this,o;return nt(t)||!t?o={next:t??void 0,error:i??void 0,complete:r??void 0}:o=t,s.destination=new Lv(o),s}return e}(ao);function ps(n){yu(n)}function Uv(n){throw n}var Dv={closed:!0,next:hl,error:Uv,complete:hl},oo=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Hs(n){return n}function Iv(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Eu(n)}function Eu(n){return n.length===0?Hs:n.length===1?n[0]:function(t){return n.reduce(function(i,r){return r(i)},t)}}var ct=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(e,t,i){var r=this,s=Fv(e)?e:new tr(e,t,i);return _s(function(){var o=r,a=o.operator,c=o.source;s.add(a?a.call(s,c):c?r._subscribe(s):r._trySubscribe(s))}),s},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},n.prototype.forEach=function(e,t){var i=this;return t=fl(t),new t(function(r,s){var o=new tr({next:function(a){try{e(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});i.subscribe(o)})},n.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},n.prototype[oo]=function(){return this},n.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Eu(e)(this)},n.prototype.toPromise=function(e){var t=this;return e=fl(e),new e(function(i,r){var s;t.subscribe(function(o){return s=o},function(o){return r(o)},function(){return i(s)})})},n.create=function(e){return new n(e)},n}();function fl(n){var e;return(e=n??Cv.Promise)!==null&&e!==void 0?e:Promise}function Nv(n){return n&&nt(n.next)&&nt(n.error)&&nt(n.complete)}function Fv(n){return n&&n instanceof ao||Nv(n)&&Su(n)}function Ov(n){return nt(n==null?void 0:n.lift)}function cn(n){return function(e){if(Ov(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Jn(n,e,t,i,r){return new Bv(n,e,t,i,r)}var Bv=function(n){Pn(e,n);function e(t,i,r,s,o,a){var c=n.call(this,t)||this;return c.onFinalize=o,c.shouldUnsubscribe=a,c._next=i?function(l){try{i(l)}catch(u){t.error(u)}}:n.prototype._next,c._error=s?function(l){try{s(l)}catch(u){t.error(u)}finally{this.unsubscribe()}}:n.prototype._error,c._complete=r?function(){try{r()}catch(l){t.error(l)}finally{this.unsubscribe()}}:n.prototype._complete,c}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;n.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(ao),zv=so(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),co=function(n){Pn(e,n);function e(){var t=n.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new dl(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new zv},e.prototype.next=function(t){var i=this;_s(function(){var r,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var o=er(i.currentObservers),a=o.next();!a.done;a=o.next()){var c=a.value;c.next(t)}}catch(l){r={error:l}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}}})},e.prototype.error=function(t){var i=this;_s(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var r=i.observers;r.length;)r.shift().error(t)}})},e.prototype.complete=function(){var t=this;_s(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,r=this,s=r.hasError,o=r.isStopped,a=r.observers;return s||o?xu:(this.currentObservers=null,a.push(t),new Br(function(){i.currentObservers=null,Ms(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,r=i.hasError,s=i.thrownError,o=i.isStopped;r?t.error(s):o&&t.complete()},e.prototype.asObservable=function(){var t=new ct;return t.source=this,t},e.create=function(t,i){return new dl(t,i)},e}(ct),dl=function(n){Pn(e,n);function e(t,i){var r=n.call(this)||this;return r.destination=t,r.source=i,r}return e.prototype.next=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.next)===null||r===void 0||r.call(i,t)},e.prototype.error=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.error)===null||r===void 0||r.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,r;return(r=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&r!==void 0?r:xu},e}(co),lo={now:function(){return(lo.delegate||Date).now()},delegate:void 0},Hv=function(n){Pn(e,n);function e(t,i,r){t===void 0&&(t=1/0),i===void 0&&(i=1/0),r===void 0&&(r=lo);var s=n.call(this)||this;return s._bufferSize=t,s._windowTime=i,s._timestampProvider=r,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=i===1/0,s._bufferSize=Math.max(1,t),s._windowTime=Math.max(1,i),s}return e.prototype.next=function(t){var i=this,r=i.isStopped,s=i._buffer,o=i._infiniteTimeWindow,a=i._timestampProvider,c=i._windowTime;r||(s.push(t),!o&&s.push(a.now()+c)),this._trimBuffer(),n.prototype.next.call(this,t)},e.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var i=this._innerSubscribe(t),r=this,s=r._infiniteTimeWindow,o=r._buffer,a=o.slice(),c=0;c<a.length&&!t.closed;c+=s?1:2)t.next(a[c]);return this._checkFinalizedStatuses(t),i},e.prototype._trimBuffer=function(){var t=this,i=t._bufferSize,r=t._timestampProvider,s=t._buffer,o=t._infiniteTimeWindow,a=(o?1:2)*i;if(i<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var c=r.now(),l=0,u=1;u<s.length&&s[u]<=c;u+=2)l=u;l&&s.splice(0,l+1)}},e}(co),Gv=function(n){Pn(e,n);function e(t,i){return n.call(this)||this}return e.prototype.schedule=function(t,i){return this},e}(Br),pl={setInterval:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setInterval.apply(void 0,Cn([n,e],Rn(t)))},clearInterval:function(n){return clearInterval(n)},delegate:void 0},Vv=function(n){Pn(e,n);function e(t,i){var r=n.call(this,t,i)||this;return r.scheduler=t,r.work=i,r.pending=!1,r}return e.prototype.schedule=function(t,i){var r;if(i===void 0&&(i=0),this.closed)return this;this.state=t;var s=this.id,o=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(o,s,i)),this.pending=!0,this.delay=i,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,i),this},e.prototype.requestAsyncId=function(t,i,r){return r===void 0&&(r=0),pl.setInterval(t.flush.bind(t,this),r)},e.prototype.recycleAsyncId=function(t,i,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return i;i!=null&&pl.clearInterval(i)},e.prototype.execute=function(t,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,i);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,i){var r=!1,s;try{this.work(t)}catch(o){r=!0,s=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var t=this,i=t.id,r=t.scheduler,s=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Ms(s,this),i!=null&&(this.id=this.recycleAsyncId(r,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},e}(Gv),ml=function(){function n(e,t){t===void 0&&(t=n.now),this.schedulerActionCtor=e,this.now=t}return n.prototype.schedule=function(e,t,i){return t===void 0&&(t=0),new this.schedulerActionCtor(this,e).schedule(i,t)},n.now=lo.now,n}(),kv=function(n){Pn(e,n);function e(t,i){i===void 0&&(i=ml.now);var r=n.call(this,t,i)||this;return r.actions=[],r._active=!1,r}return e.prototype.flush=function(t){var i=this.actions;if(this._active){i.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=i.shift());if(this._active=!1,r){for(;t=i.shift();)t.unsubscribe();throw r}},e}(ml),Wv=new kv(Vv),Xv=Wv,Mu=new ct(function(n){return n.complete()});function qv(n){return n&&nt(n.schedule)}function uo(n){return n[n.length-1]}function $v(n){return nt(uo(n))?n.pop():void 0}function ho(n){return qv(uo(n))?n.pop():void 0}function jv(n,e){return typeof uo(n)=="number"?n.pop():e}var bu=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function Tu(n){return nt(n==null?void 0:n.then)}function Au(n){return nt(n[oo])}function wu(n){return Symbol.asyncIterator&&nt(n==null?void 0:n[Symbol.asyncIterator])}function Ru(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Yv(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Cu=Yv();function Pu(n){return nt(n==null?void 0:n[Cu])}function Lu(n){return wv(this,arguments,function(){var t,i,r,s;return vu(this,function(o){switch(o.label){case 0:t=n.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,Xi(t.read())];case 3:return i=o.sent(),r=i.value,s=i.done,s?[4,Xi(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,Xi(r)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function Uu(n){return nt(n==null?void 0:n.getReader)}function ln(n){if(n instanceof ct)return n;if(n!=null){if(Au(n))return Kv(n);if(bu(n))return Zv(n);if(Tu(n))return Jv(n);if(wu(n))return Du(n);if(Pu(n))return Qv(n);if(Uu(n))return e0(n)}throw Ru(n)}function Kv(n){return new ct(function(e){var t=n[oo]();if(nt(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Zv(n){return new ct(function(e){for(var t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Jv(n){return new ct(function(e){n.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,yu)})}function Qv(n){return new ct(function(e){var t,i;try{for(var r=er(n),s=r.next();!s.done;s=r.next()){var o=s.value;if(e.next(o),e.closed)return}}catch(a){t={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}e.complete()})}function Du(n){return new ct(function(e){t0(n,e).catch(function(t){return e.error(t)})})}function e0(n){return Du(Lu(n))}function t0(n,e){var t,i,r,s;return Av(this,void 0,void 0,function(){var o,a;return vu(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),t=Rv(n),c.label=1;case 1:return[4,t.next()];case 2:if(i=c.sent(),!!i.done)return[3,4];if(o=i.value,e.next(o),e.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),r={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),i&&!i.done&&(s=t.return)?[4,s.call(t)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function _i(n,e,t,i,r){i===void 0&&(i=0),r===void 0&&(r=!1);var s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Iu(n,e){return e===void 0&&(e=0),cn(function(t,i){t.subscribe(Jn(i,function(r){return _i(i,n,function(){return i.next(r)},e)},function(){return _i(i,n,function(){return i.complete()},e)},function(r){return _i(i,n,function(){return i.error(r)},e)}))})}function Nu(n,e){return e===void 0&&(e=0),cn(function(t,i){i.add(n.schedule(function(){return t.subscribe(i)},e))})}function n0(n,e){return ln(n).pipe(Nu(e),Iu(e))}function i0(n,e){return ln(n).pipe(Nu(e),Iu(e))}function r0(n,e){return new ct(function(t){var i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function s0(n,e){return new ct(function(t){var i;return _i(t,e,function(){i=n[Cu](),_i(t,e,function(){var r,s,o;try{r=i.next(),s=r.value,o=r.done}catch(a){t.error(a);return}o?t.complete():t.next(s)},0,!0)}),function(){return nt(i==null?void 0:i.return)&&i.return()}})}function Fu(n,e){if(!n)throw new Error("Iterable cannot be null");return new ct(function(t){_i(t,e,function(){var i=n[Symbol.asyncIterator]();_i(t,e,function(){i.next().then(function(r){r.done?t.complete():t.next(r.value)})},0,!0)})})}function a0(n,e){return Fu(Lu(n),e)}function o0(n,e){if(n!=null){if(Au(n))return n0(n,e);if(bu(n))return r0(n,e);if(Tu(n))return i0(n,e);if(wu(n))return Fu(n,e);if(Pu(n))return s0(n,e);if(Uu(n))return a0(n,e)}throw Ru(n)}function zr(n,e){return e?o0(n,e):ln(n)}function Gs(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=ho(n);return zr(n,t)}function Ou(n,e){var t=nt(n)?n:function(){return n},i=function(r){return r.error(t())};return new ct(i)}function c0(n){return!!n&&(n instanceof ct||nt(n.lift)&&nt(n.subscribe))}var Bu=so(function(n){return function(){n(this),this.name="EmptyError",this.message="no elements in sequence"}});function ke(n,e){return new Promise(function(t,i){var r=!1,s;n.subscribe({next:function(o){s=o,r=!0},error:i,complete:function(){r?t(s):i(new Bu)}})})}function gl(n,e){return new Promise(function(t,i){var r=new tr({next:function(s){t(s),r.unsubscribe()},error:i,complete:function(){i(new Bu)}});n.subscribe(r)})}function l0(n){return n instanceof Date&&!isNaN(n)}function Tt(n,e){return cn(function(t,i){var r=0;t.subscribe(Jn(i,function(s){i.next(n.call(e,s,r++))}))})}var u0=Array.isArray;function h0(n,e){return u0(e)?n.apply(void 0,Cn([],Rn(e))):n(e)}function f0(n){return Tt(function(e){return h0(n,e)})}function d0(n,e,t){return t===void 0&&(t=Hs),function(i){_l(e,function(){for(var r=n.length,s=new Array(r),o=r,a=r,c=function(u){_l(e,function(){var h=zr(n[u],e),d=!1;h.subscribe(Jn(i,function(p){s[u]=p,d||(d=!0,a--),a||i.next(t(s.slice()))},function(){--o||i.complete()}))},i)},l=0;l<r;l++)c(l)})}}function _l(n,e,t){e()}function p0(n,e,t,i,r,s,o,a){var c=[],l=0,u=0,h=!1,d=function(){h&&!c.length&&!l&&e.complete()},p=function(g){return l<i?_(g):c.push(g)},_=function(g){l++;var m=!1;ln(t(g,u++)).subscribe(Jn(e,function(f){e.next(f)},function(){m=!0},void 0,function(){if(m)try{l--;for(var f=function(){var M=c.shift();o||_(M)};c.length&&l<i;)f();d()}catch(M){e.error(M)}}))};return n.subscribe(Jn(e,p,function(){h=!0,d()})),function(){}}function Hr(n,e,t){return t===void 0&&(t=1/0),nt(e)?Hr(function(i,r){return Tt(function(s,o){return e(i,s,r,o)})(ln(n(i,r)))},t):(typeof e=="number"&&(t=e),cn(function(i,r){return p0(i,r,n,t)}))}function zu(n){return n===void 0&&(n=1/0),Hr(Hs,n)}function m0(){return zu(1)}function Hu(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return m0()(zr(n,ho(n)))}function Gu(n){return new ct(function(e){ln(n()).subscribe(e)})}function g0(n,e,t){return t===void 0&&(t=Xv),new ct(function(i){var r=l0(n)?+n-t.now():n;r<0&&(r=0);var s=0;return t.schedule(function(){i.closed||(i.next(s++),i.complete())},r)})}function _0(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=ho(n),i=jv(n,1/0),r=n;return r.length?r.length===1?ln(r[0]):zu(i)(zr(r,t)):Mu}var v0=Array.isArray;function x0(n){return n.length===1&&v0(n[0])?n[0]:n}function ar(n,e){return cn(function(t,i){var r=0;t.subscribe(Jn(i,function(s){return n.call(e,s,r++)&&i.next(s)}))})}function fo(n){return cn(function(e,t){var i=null,r=!1,s;i=e.subscribe(Jn(t,void 0,void 0,function(o){s=ln(n(o,fo(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Vu(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=$v(n);return t?Iv(Vu.apply(void 0,Cn([],Rn(n))),f0(t)):cn(function(i,r){d0(Cn([i],Rn(x0(n))))(r)})}function S0(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Vu.apply(void 0,Cn([],Rn(n)))}function ku(n){return cn(function(e,t){try{e.subscribe(t)}finally{t.add(n)}})}function Wu(n){n===void 0&&(n={});var e=n.connector,t=e===void 0?function(){return new co}:e,i=n.resetOnError,r=i===void 0?!0:i,s=n.resetOnComplete,o=s===void 0?!0:s,a=n.resetOnRefCountZero,c=a===void 0?!0:a;return function(l){var u,h,d,p=0,_=!1,g=!1,m=function(){h==null||h.unsubscribe(),h=void 0},f=function(){m(),u=d=void 0,_=g=!1},M=function(){var v=u;f(),v==null||v.unsubscribe()};return cn(function(v,T){p++,!g&&!_&&m();var L=d=d??t();T.add(function(){p--,p===0&&!g&&!_&&(h=La(M,c))}),L.subscribe(T),!u&&p>0&&(u=new tr({next:function(w){return L.next(w)},error:function(w){g=!0,m(),h=La(f,r,w),L.error(w)},complete:function(){_=!0,m(),h=La(f,o),L.complete()}}),ln(v).subscribe(u))})(l)}}function La(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];if(e===!0){n();return}if(e!==!1){var r=new tr({next:function(){r.unsubscribe(),n()}});return ln(e.apply(void 0,Cn([],Rn(t)))).subscribe(r)}}function y0(n,e,t){var i,r=!1;return i=n,Wu({connector:function(){return new Hv(i,e,t)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function E0(n,e,t){var i=nt(n)||e||t?{next:n,error:e,complete:t}:n;return i?cn(function(r,s){var o;(o=i.subscribe)===null||o===void 0||o.call(i);var a=!0;r.subscribe(Jn(s,function(c){var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},function(){var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},function(c){var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},function(){var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Hs}function Xu(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}var qu={0:8203,1:8204,2:8205,3:8290,4:8291,5:8288,6:65279,7:8289,8:119155,9:119156,a:119157,b:119158,c:119159,d:119160,e:119161,f:119162},po={0:8203,1:8204,2:8205,3:65279},M0=new Array(4).fill(String.fromCodePoint(po[0])).join("");function b0(n){let e=JSON.stringify(n);return`${M0}${Array.from(e).map(t=>{let i=t.charCodeAt(0);if(i>255)throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${t} (${i})`);return Array.from(i.toString(4).padStart(4,"0")).map(r=>String.fromCodePoint(po[r])).join("")}).join("")}`}function T0(n){return!Number.isNaN(Number(n))||/[a-z]/i.test(n)&&!/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(n)?!1:!!Date.parse(n)}function A0(n){try{new URL(n,n.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}function bS(n,e,t="auto"){return t===!0||t==="auto"&&(T0(n)||A0(n))?n:`${n}${b0(e)}`}Object.fromEntries(Object.entries(po).map(n=>n.reverse()));Object.fromEntries(Object.entries(qu).map(n=>n.reverse()));var w0=`${Object.values(qu).map(n=>`\\u{${n.toString(16)}}`).join("")}`,vl=new RegExp(`[${w0}]{4,}`,"gu");function R0(n){var e;return{cleaned:n.replace(vl,""),encoded:((e=n.match(vl))==null?void 0:e[0])||""}}function C0(n){return n&&JSON.parse(R0(JSON.stringify(n)).cleaned)}function P0(n){return C0(n)}const L0="drafts",U0="versions",nr=".",bs=`${L0}${nr}`,$u=`${U0}${nr}`;function Vs(n){return n.startsWith(bs)}function ks(n){return n.startsWith($u)}function D0(n){if(ks(n)){const e=Xs(n);return bs+e}return Vs(n)?n:bs+n}function Ws(n,e){if(e==="drafts"||e==="published")throw new Error('Version can not be "published" or "drafts"');return`${$u}${e}${nr}${Xs(n)}`}function ju(n){if(!ks(n))return;const[e,t,...i]=n.split(nr);return t}function Xs(n){return ks(n)?n.split(nr).slice(2).join(nr):Vs(n)?n.slice(bs.length):n}let I0=n=>crypto.getRandomValues(new Uint8Array(n)),N0=(n,e,t)=>{let i=(2<<Math.log(n.length-1)/Math.LN2)-1,r=-~(1.6*i*e/n.length);return(s=e)=>{let o="";for(;;){let a=t(r),c=r|0;for(;c--;)if(o+=n[a[c]&i]||"",o.length===s)return o}}},F0=(n,e=21)=>N0(n,e,I0);const xl=/\r\n|[\n\r\u2028\u2029]/;function O0(n,e,t){const i=n.split(xl),r={start:Sl(e.start,i),end:e.end?Sl(e.end,i):void 0},{start:s,end:o,markerLines:a}=B0(r,i),c=`${o}`.length;return n.split(xl,o).slice(s,o).map((l,u)=>{const h=s+1+u,d=` ${` ${h}`.slice(-c)} |`,p=a[h],_=!a[h+1];if(!p)return` ${d}${l.length>0?` ${l}`:""}`;let g="";if(Array.isArray(p)){const m=l.slice(0,Math.max(p[0]-1,0)).replace(/[^\t]/g," "),f=p[1]||1;g=[`
 `,d.replace(/\d/g," ")," ",m,"^".repeat(f)].join(""),_&&t&&(g+=" "+t)}return[">",d,l.length>0?` ${l}`:"",g].join("")}).join(`
`)}function B0(n,e){const t={...n.start},i={...t,...n.end},r=2,s=3,o=t.line??-1,a=t.column??0,c=i.line,l=i.column;let u=Math.max(o-(r+1),0),h=Math.min(e.length,c+s);o===-1&&(u=0),c===-1&&(h=e.length);const d=c-o,p={};if(d)for(let _=0;_<=d;_++){const g=_+o;if(!a)p[g]=!0;else if(_===0){const m=e[g-1].length;p[g]=[a,m-a+1]}else if(_===d)p[g]=[0,l];else{const m=e[g-_].length;p[g]=[0,m]}}else a===l?a?p[o]=[a,0]:p[o]=!0:p[o]=[a,l-a];return{start:u,end:h,markerLines:p}}function Sl(n,e){var i;let t=0;for(let r=0;r<e.length;r++){const s=e[r].length+1;if(t+s>n)return{line:r+1,column:n-t};t+=s}return{line:e.length,column:((i=e[e.length-1])==null?void 0:i.length)??0}}const Ua=5;class z0 extends Error{constructor(t,i){const r=Yu(t,i);super(r.message);ve(this,"response");ve(this,"statusCode",400);ve(this,"responseBody");ve(this,"details");Object.assign(this,r)}}class H0 extends Error{constructor(t){const i=Yu(t);super(i.message);ve(this,"response");ve(this,"statusCode",500);ve(this,"responseBody");ve(this,"details");Object.assign(this,i)}}function Yu(n,e){var s,o;const t=n.body,i={response:n,statusCode:n.statusCode,responseBody:k0(t,n),message:"",details:void 0};if(!Xu(t))return i.message=Da(n,t),i;const r=t.error;if(typeof r=="string"&&typeof t.message=="string")return i.message=`${r} - ${t.message}`,i;if(typeof r!="object"||r===null)return typeof r=="string"?i.message=r:typeof t.message=="string"?i.message=t.message:i.message=Da(n,t),i;if(G0(r)||V0(r)){const a=r.items||[],c=a.slice(0,Ua).map(u=>{var h;return(h=u.error)==null?void 0:h.description}).filter(Boolean);let l=c.length?`:
- ${c.join(`
- `)}`:"";return a.length>Ua&&(l+=`
...and ${a.length-Ua} more`),i.message=`${r.description}${l}`,i.details=t.error,i}if(Ku(r)){const a=(o=(s=e==null?void 0:e.options)==null?void 0:s.query)==null?void 0:o.tag;return i.message=Zu(r,a),i.details=t.error,i}return"description"in r&&typeof r.description=="string"?(i.message=r.description,i.details=r,i):(i.message=Da(n,t),i)}function G0(n){return"type"in n&&n.type==="mutationError"&&"description"in n&&typeof n.description=="string"}function V0(n){return"type"in n&&n.type==="actionError"&&"description"in n&&typeof n.description=="string"}function Ku(n){return Xu(n)&&n.type==="queryParseError"&&typeof n.query=="string"&&typeof n.start=="number"&&typeof n.end=="number"}function Zu(n,e){const{query:t,start:i,end:r,description:s}=n;if(!t||typeof i>"u")return`GROQ query parse error: ${s}`;const o=e?`

Tag: ${e}`:"";return`GROQ query parse error:
${O0(t,{start:i,end:r},s)}${o}`}function Da(n,e){const t=typeof e=="string"?` (${W0(e,100)})`:"",i=n.statusMessage?` ${n.statusMessage}`:"";return`${n.method}-request to ${n.url} resulted in HTTP ${n.statusCode}${i}${t}`}function k0(n,e){return(e.headers["content-type"]||"").toLowerCase().indexOf("application/json")!==-1?JSON.stringify(n,null,2):n}function W0(n,e){return n.length>e?`${n.slice(0,e)}…`:n}class X0 extends Error{constructor({projectId:t}){super("CorsOriginError");ve(this,"projectId");ve(this,"addOriginUrl");this.name="CorsOriginError",this.projectId=t;const i=new URL(`https://sanity.io/manage/project/${t}/api`);if(typeof location<"u"){const{origin:r}=location;i.searchParams.set("cors","add"),i.searchParams.set("origin",r),this.addOriginUrl=i,this.message=`The current origin is not allowed to connect to the Live Content API. Add it here: ${i}`}else this.message=`The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${i}`}}const q0={onResponse:(n,e)=>{if(n.statusCode>=500)throw new H0(n);if(n.statusCode>=400)throw new z0(n,e);return n}};function $0(){const n={};return{onResponse:e=>{const t=e.headers["x-sanity-warning"],i=Array.isArray(t)?t:[t];for(const r of i)!r||n[r]||(n[r]=!0,console.warn(r));return e}}}function yl(n){return mv([ro({shouldRetry:j0}),...n,$0(),Sv(),yv(),bv(),q0,Mv({implementation:ct})])}function j0(n,e,t){if(t.maxRetries===0)return!1;const i=t.method==="GET"||t.method==="HEAD",r=(t.uri||t.url).startsWith("/data/query"),s=n.response&&(n.response.statusCode===429||n.response.statusCode===502||n.response.statusCode===503);return(i||r)&&s?!0:ro.shouldRetry(n,e,t)}const Y0="https://www.sanity.io/help/";function mo(n){return Y0+n}const El=["image","file"],Ml=["before","after","replace"],Ju=n=>{if(!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(n))throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")},K0=n=>{if(!/^[-a-z0-9]+$/i.test(n))throw new Error("`projectId` can only contain only a-z, 0-9 and dashes")},Z0=n=>{if(El.indexOf(n)===-1)throw new Error(`Invalid asset type: ${n}. Must be one of ${El.join(", ")}`)},mr=(n,e)=>{if(e===null||typeof e!="object"||Array.isArray(e))throw new Error(`${n}() takes an object of properties`)},Qu=(n,e)=>{if(typeof e!="string"||!/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e)||e.includes(".."))throw new Error(`${n}(): "${e}" is not a valid document ID`)},ir=(n,e)=>{if(!e._id)throw new Error(`${n}() requires that the document contains an ID ("_id" property)`);Qu(n,e._id)},J0=(n,e)=>{if(typeof e!="string")throw new Error(`\`${n}()\`: \`${e}\` is not a valid document type`)},eh=(n,e)=>{if(!e._type)throw new Error(`\`${n}()\` requires that the document contains a type (\`_type\` property)`);J0(n,e._type)},Q0=(n,e)=>{if(e._id&&e._id!==n)throw new Error(`The provided document ID (\`${e._id}\`) does not match the generated version ID (\`${n}\`)`)},ex=(n,e,t)=>{const i="insert(at, selector, items)";if(Ml.indexOf(n)===-1){const r=Ml.map(s=>`"${s}"`).join(", ");throw new Error(`${i} takes an "at"-argument which is one of: ${r}`)}if(typeof e!="string")throw new Error(`${i} takes a "selector"-argument which must be a string`);if(!Array.isArray(t))throw new Error(`${i} takes an "items"-argument which must be an array`)},yi=n=>{if(!n.dataset)throw new Error("`dataset` must be provided to perform queries");return n.dataset||""},th=n=>{if(typeof n!="string"||!/^[a-z0-9._-]{1,75}$/i.test(n))throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");return n},nh=n=>{if(!n["~experimental_resource"])throw new Error("`resource` must be provided to perform resource queries");const{type:e,id:t}=n["~experimental_resource"];switch(e){case"dataset":{if(t.split(".").length!==2)throw new Error('Dataset resource ID must be in the format "project.dataset"');return}case"dashboard":case"media-library":case"canvas":return;default:throw new Error(`Unsupported resource type: ${e.toString()}`)}},an=(n,e)=>{if(e["~experimental_resource"])throw new Error(`\`${n}\` does not support resource-based operations`)};function tx(n){let e=!1,t;return(...i)=>(e||(t=n(...i),e=!0),t)}const Ei=n=>tx((...e)=>console.warn(n.join(" "),...e)),nx=Ei(["Because you set `withCredentials` to true, we will override your `useCdn`","setting to be false since (cookie-based) credentials are never set on the CDN"]),ix=Ei(["Since you haven't set a value for `useCdn`, we will deliver content using our","global, edge-cached API-CDN. If you wish to have content delivered faster, set","`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),rx=Ei(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.","The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),sx=Ei(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]),ax=Ei(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",`See ${mo("js-client-browser-token")} for more information and how to hide this warning.`]),ox=Ei(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.","This is no longer supported - only token will be used - remove `withCredentials: true`."]),cx=Ei(["Using the Sanity client without specifying an API version is deprecated.",`See ${mo("js-client-api-version")}`]),lx="apicdn.sanity.io",gr={apiHost:"https://api.sanity.io",apiVersion:"1",useProjectHostname:!0,stega:{enabled:!1}},ux=["localhost","127.0.0.1","0.0.0.0"],hx=n=>ux.indexOf(n)!==-1;function fx(n){if(n==="1"||n==="X")return;const e=new Date(n);if(!(/^\d{4}-\d{2}-\d{2}$/.test(n)&&e instanceof Date&&e.getTime()>0))throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")}function ih(n){if(Array.isArray(n)&&n.length>1&&n.includes("raw"))throw new TypeError('Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives')}const rh=(n,e)=>{const t={...e,...n,stega:{...typeof e.stega=="boolean"?{enabled:e.stega}:e.stega||gr.stega,...typeof n.stega=="boolean"?{enabled:n.stega}:n.stega||{}}};t.apiVersion||cx();const i={...gr,...t},r=i.useProjectHostname&&!i["~experimental_resource"];if(typeof Promise>"u"){const d=mo("js-client-promise-polyfill");throw new Error(`No native Promise-implementation found, polyfill needed - see ${d}`)}if(r&&!i.projectId)throw new Error("Configuration must contain `projectId`");if(i["~experimental_resource"]&&nh(i),typeof i.perspective<"u"&&ih(i.perspective),"encodeSourceMap"in i)throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");if("encodeSourceMapAtPath"in i)throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");if(typeof i.stega.enabled!="boolean")throw new Error(`stega.enabled must be a boolean, received ${i.stega.enabled}`);if(i.stega.enabled&&i.stega.studioUrl===void 0)throw new Error("stega.studioUrl must be defined when stega.enabled is true");if(i.stega.enabled&&typeof i.stega.studioUrl!="string"&&typeof i.stega.studioUrl!="function")throw new Error(`stega.studioUrl must be a string or a function, received ${i.stega.studioUrl}`);const s=typeof window<"u"&&window.location&&window.location.hostname,o=s&&hx(window.location.hostname),a=!!i.token;i.withCredentials&&a&&(ox(),i.withCredentials=!1),s&&o&&a&&i.ignoreBrowserTokenWarning!==!0?ax():typeof i.useCdn>"u"&&ix(),r&&K0(i.projectId),i.dataset&&Ju(i.dataset),"requestTagPrefix"in i&&(i.requestTagPrefix=i.requestTagPrefix?th(i.requestTagPrefix).replace(/\.+$/,""):void 0),i.apiVersion=`${i.apiVersion}`.replace(/^v/,""),i.isDefaultApi=i.apiHost===gr.apiHost,i.useCdn===!0&&i.withCredentials&&nx(),i.useCdn=i.useCdn!==!1&&!i.withCredentials,fx(i.apiVersion);const c=i.apiHost.split("://",2),l=c[0],u=c[1],h=i.isDefaultApi?lx:u;return r?(i.url=`${l}://${i.projectId}.${u}/v${i.apiVersion}`,i.cdnUrl=`${l}://${i.projectId}.${h}/v${i.apiVersion}`):(i.url=`${i.apiHost}/v${i.apiVersion}`,i.cdnUrl=i.url),i};class sh extends Error{constructor(){super(...arguments);ve(this,"name","ConnectionFailedError")}}class dx extends Error{constructor(t,i,r={}){super(t,r);ve(this,"name","DisconnectError");ve(this,"reason");this.reason=i}}class px extends Error{constructor(t,i){super(t);ve(this,"name","ChannelError");ve(this,"data");this.data=i}}class mx extends Error{constructor(t,i,r={}){super(t,r);ve(this,"name","MessageError");ve(this,"data");this.data=i}}class bl extends Error{constructor(){super(...arguments);ve(this,"name","MessageParseError")}}const gx=["channelError","disconnect"];function ah(n,e){return Gu(()=>{const t=n();return c0(t)?t:Gs(t)}).pipe(Hr(t=>_x(t,e)))}function _x(n,e){return new ct(t=>{const i=e.includes("open"),r=e.includes("reconnect");function s(l){if("data"in l){const[u,h]=Tl(l);t.error(u?new bl("Unable to parse EventSource error message",{cause:h}):new mx((h==null?void 0:h.data).message,h));return}n.readyState===n.CLOSED?t.error(new sh("EventSource connection failed")):r&&t.next({type:"reconnect"})}function o(){t.next({type:"open"})}function a(l){var d;const[u,h]=Tl(l);if(u){t.error(new bl("Unable to parse EventSource message",{cause:u}));return}if(l.type==="channelError"){const p=new URL(n.url).searchParams.get("tag");t.error(new px(vx(h==null?void 0:h.data,p),h.data));return}if(l.type==="disconnect"){t.error(new dx(`Server disconnected client: ${((d=h.data)==null?void 0:d.reason)||"unknown error"}`));return}t.next({type:l.type,id:l.lastEventId,...h.data?{data:h.data}:{}})}n.addEventListener("error",s),i&&n.addEventListener("open",o);const c=[...new Set([...gx,...e])].filter(l=>l!=="error"&&l!=="open"&&l!=="reconnect");return c.forEach(l=>n.addEventListener(l,a)),()=>{n.removeEventListener("error",s),i&&n.removeEventListener("open",o),c.forEach(l=>n.removeEventListener(l,a)),n.close()}})}function Tl(n){try{const e=typeof n.data=="string"&&JSON.parse(n.data);return[null,{type:n.type,id:n.lastEventId,...xx(e)?{}:{data:e}}]}catch(e){return[e,null]}}function vx(n,e){const t=n.error;return t?Ku(t)?Zu(t,e):t.description?t.description:typeof t=="string"?t:JSON.stringify(t,null,2):n.message||"Unknown listener error"}function xx(n){for(const e in n)return!1;return!0}function oh(n){if(typeof n=="string")return{id:n};if(Array.isArray(n))return{query:"*[_id in $ids]",params:{ids:n}};if(typeof n=="object"&&n!==null&&"query"in n&&typeof n.query=="string")return"params"in n&&typeof n.params=="object"&&n.params!==null?{query:n.query,params:n.params}:{query:n.query};const e=["* Document ID (<docId>)","* Array of document IDs","* Object containing `query`"].join(`
`);throw new Error(`Unknown selection - must be one of:

${e}`)}class ch{constructor(e,t={}){ve(this,"selection");ve(this,"operations");this.selection=e,this.operations=t}set(e){return this._assign("set",e)}setIfMissing(e){return this._assign("setIfMissing",e)}diffMatchPatch(e){return mr("diffMatchPatch",e),this._assign("diffMatchPatch",e)}unset(e){if(!Array.isArray(e))throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");return this.operations=Object.assign({},this.operations,{unset:e}),this}inc(e){return this._assign("inc",e)}dec(e){return this._assign("dec",e)}insert(e,t,i){return ex(e,t,i),this._assign("insert",{[e]:t,items:i})}append(e,t){return this.insert("after",`${e}[-1]`,t)}prepend(e,t){return this.insert("before",`${e}[0]`,t)}splice(e,t,i,r){const s=typeof i>"u"||i===-1,o=t<0?t-1:t,a=s?-1:Math.max(0,t+i),c=o<0&&a>=0?"":a,l=`${e}[${o}:${c}]`;return this.insert("replace",l,r||[])}ifRevisionId(e){return this.operations.ifRevisionID=e,this}serialize(){return{...oh(this.selection),...this.operations}}toJSON(){return this.serialize()}reset(){return this.operations={},this}_assign(e,t,i=!0){return mr(e,t),this.operations=Object.assign({},this.operations,{[e]:Object.assign({},i&&this.operations[e]||{},t)}),this}_set(e,t){return this._assign(e,t,!1)}}var li;const So=class So extends ch{constructor(t,i,r){super(t,i);Ue(this,li);Ce(this,li,r)}clone(){return new So(this.selection,{...this.operations},C(this,li))}commit(t){if(!C(this,li))throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");const i=typeof this.selection=="string",r=Object.assign({returnFirst:i,returnDocuments:!0},t);return C(this,li).mutate({patch:this.serialize()},r)}};li=new WeakMap;let vi=So;var ui;const yo=class yo extends ch{constructor(t,i,r){super(t,i);Ue(this,ui);Ce(this,ui,r)}clone(){return new yo(this.selection,{...this.operations},C(this,ui))}commit(t){if(!C(this,ui))throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");const i=typeof this.selection=="string",r=Object.assign({returnFirst:i,returnDocuments:!0},t);return C(this,ui).mutate({patch:this.serialize()},r)}};ui=new WeakMap;let qn=yo;const lh={returnDocuments:!1};class uh{constructor(e=[],t){ve(this,"operations");ve(this,"trxId");this.operations=e,this.trxId=t}create(e){return mr("create",e),this._add({create:e})}createIfNotExists(e){const t="createIfNotExists";return mr(t,e),ir(t,e),this._add({[t]:e})}createOrReplace(e){const t="createOrReplace";return mr(t,e),ir(t,e),this._add({[t]:e})}delete(e){return Qu("delete",e),this._add({delete:{id:e}})}transactionId(e){return e?(this.trxId=e,this):this.trxId}serialize(){return[...this.operations]}toJSON(){return this.serialize()}reset(){return this.operations=[],this}_add(e){return this.operations.push(e),this}}var vn;const Eo=class Eo extends uh{constructor(t,i,r){super(t,r);Ue(this,vn);Ce(this,vn,i)}clone(){return new Eo([...this.operations],C(this,vn),this.trxId)}commit(t){if(!C(this,vn))throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");return C(this,vn).mutate(this.serialize(),Object.assign({transactionId:this.trxId},lh,t||{}))}patch(t,i){const r=typeof i=="function",s=typeof t!="string"&&t instanceof qn,o=typeof t=="object"&&("query"in t||"id"in t);if(s)return this._add({patch:t.serialize()});if(r){const a=i(new qn(t,{},C(this,vn)));if(!(a instanceof qn))throw new Error("function passed to `patch()` must return the patch");return this._add({patch:a.serialize()})}if(o){const a=new qn(t,i||{},C(this,vn));return this._add({patch:a.serialize()})}return this._add({patch:{id:t,...i}})}};vn=new WeakMap;let Ts=Eo;var On;const Mo=class Mo extends uh{constructor(t,i,r){super(t,r);Ue(this,On);Ce(this,On,i)}clone(){return new Mo([...this.operations],C(this,On),this.trxId)}commit(t){if(!C(this,On))throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");return C(this,On).mutate(this.serialize(),Object.assign({transactionId:this.trxId},lh,t||{}))}patch(t,i){const r=typeof i=="function";if(typeof t!="string"&&t instanceof vi)return this._add({patch:t.serialize()});if(r){const s=i(new vi(t,{},C(this,On)));if(!(s instanceof vi))throw new Error("function passed to `patch()` must return the patch");return this._add({patch:s.serialize()})}return this._add({patch:{id:t,...i}})}};On=new WeakMap;let As=Mo;const Sx="X-Sanity-Project-ID";function yx(n,e={}){const t={};n.headers&&Object.assign(t,n.headers);const i=e.token||n.token;i&&(t.Authorization=`Bearer ${i}`),!e.useGlobalApi&&!n.useProjectHostname&&n.projectId&&(t[Sx]=n.projectId);const r=!!(typeof e.withCredentials>"u"?n.withCredentials:e.withCredentials),s=typeof e.timeout>"u"?n.timeout:e.timeout;return Object.assign({},e,{headers:Object.assign({},t,e.headers||{}),timeout:typeof s>"u"?5*60*1e3:s,proxy:e.proxy||n.proxy,json:!0,withCredentials:r,fetch:typeof e.fetch=="object"&&typeof n.fetch=="object"?{...n.fetch,...e.fetch}:e.fetch||n.fetch})}const hh=({query:n,params:e={},options:t={}})=>{const i=new URLSearchParams,{tag:r,includeMutations:s,returnQuery:o,...a}=t;r&&i.append("tag",r),i.append("query",n);for(const[c,l]of Object.entries(e))l!==void 0&&i.append(`$${c}`,JSON.stringify(l));for(const[c,l]of Object.entries(a))l&&i.append(c,`${l}`);return o===!1&&i.append("returnQuery","false"),s===!1&&i.append("includeMutations","false"),`?${i}`},Ex=(n,e)=>n===!1?void 0:typeof n>"u"?e:n,Mx=(n={})=>({dryRun:n.dryRun,returnIds:!0,returnDocuments:Ex(n.returnDocuments,!0),visibility:n.visibility||"sync",autoGenerateArrayKeys:n.autoGenerateArrayKeys,skipCrossDatasetReferenceValidation:n.skipCrossDatasetReferenceValidation}),go=n=>n.type==="response",bx=n=>n.body,Tx=(n,e)=>n.reduce((t,i)=>(t[e(i)]=i,t),Object.create(null)),Ax=11264;function fh(n,e,t,i,r={},s={}){const o="stega"in s?{...t||{},...typeof s.stega=="boolean"?{enabled:s.stega}:s.stega||{}}:t,a=o.enabled?P0(r):r,c=s.filterResponse===!1?_=>_:_=>_.result,{cache:l,next:u,...h}={useAbortSignal:typeof s.signal<"u",resultSourceMap:o.enabled?"withKeyArraySelector":s.resultSourceMap,...s,returnQuery:s.filterResponse===!1&&s.returnQuery!==!1},d=typeof l<"u"||typeof u<"u"?{...h,fetch:{cache:l,next:u}}:h,p=Mi(n,e,"query",{query:i,params:a},d);return o.enabled?p.pipe(S0(zr(hu(()=>import("./stegaEncodeSourceMap-BFFpraC8.js"),[],import.meta.url).then(function(_){return _.stegaEncodeSourceMap$1}).then(({stegaEncodeSourceMap:_})=>_))),Tt(([_,g])=>{const m=g(_.result,_.resultSourceMap,o);return c({..._,result:m})})):p.pipe(Tt(c))}function qs(n,e,t,i={}){const r=(()=>{if(!i.releaseId)return t;const o=ju(t);if(!o){if(Vs(t))throw new Error(`The document ID (\`${t}\`) is a draft, but \`options.releaseId\` is set as \`${i.releaseId}\``);return Ws(t,i.releaseId)}if(o!==i.releaseId)throw new Error(`The document ID (\`${t}\`) is already a version of \`${o}\` release, but this does not match the provided \`options.releaseId\` (\`${i.releaseId}\`)`);return t})(),s={uri:Yt(n,"doc",r),json:!0,tag:i.tag,signal:i.signal};return Vr(n,e,s).pipe(ar(go),Tt(o=>o.body.documents&&o.body.documents[0]))}function dh(n,e,t,i={}){const r={uri:Yt(n,"doc",t.join(",")),json:!0,tag:i.tag,signal:i.signal};return Vr(n,e,r).pipe(ar(go),Tt(s=>{const o=Tx(s.body.documents||[],a=>a._id);return t.map(a=>o[a]||null)}))}function ph(n,e,t,i={}){return Mi(n,e,"query",{query:"*[sanity::partOfRelease($releaseId)]",params:{releaseId:t}},i)}function mh(n,e,t,i){return ir("createIfNotExists",t),$s(n,e,t,"createIfNotExists",i)}function gh(n,e,t,i){return ir("createOrReplace",t),$s(n,e,t,"createOrReplace",i)}function _h(n,e,t,i,r){return ir("createVersion",t),eh("createVersion",t),ot(n,e,{actionType:"sanity.action.document.version.create",publishedId:i,document:t},r)}function vh(n,e,t,i){return Mi(n,e,"mutate",{mutations:[{delete:oh(t)}]},i)}function xh(n,e,t,i=!1,r){return ot(n,e,{actionType:"sanity.action.document.version.discard",versionId:t,purge:i},r)}function Sh(n,e,t,i){return ir("replaceVersion",t),eh("replaceVersion",t),ot(n,e,{actionType:"sanity.action.document.version.replace",document:t},i)}function yh(n,e,t,i,r){return ot(n,e,{actionType:"sanity.action.document.version.unpublish",versionId:t,publishedId:i},r)}function Eh(n,e,t,i){let r;t instanceof qn||t instanceof vi?r={patch:t.serialize()}:t instanceof Ts||t instanceof As?r=t.serialize():r=t;const s=Array.isArray(r)?r:[r],o=i&&i.transactionId||void 0;return Mi(n,e,"mutate",{mutations:s,transactionId:o},i)}function ot(n,e,t,i){const r=Array.isArray(t)?t:[t],s=i&&i.transactionId||void 0,o=i&&i.skipCrossDatasetReferenceValidation||void 0,a=i&&i.dryRun||void 0;return Mi(n,e,"actions",{actions:r,transactionId:s,skipCrossDatasetReferenceValidation:o,dryRun:a},i)}function Mi(n,e,t,i,r={}){const s=t==="mutate",o=t==="actions",a=t==="query",c=s||o?"":hh(i),l=!s&&!o&&c.length<Ax,u=l?c:"",h=r.returnFirst,{timeout:d,token:p,tag:_,headers:g,returnQuery:m,lastLiveEventId:f,cacheMode:M}=r,v=Yt(n,t,u),T={method:l?"GET":"POST",uri:v,json:!0,body:l?void 0:i,query:s&&Mx(r),timeout:d,headers:g,token:p,tag:_,returnQuery:m,perspective:r.perspective,resultSourceMap:r.resultSourceMap,lastLiveEventId:Array.isArray(f)?f[0]:f,cacheMode:M,canUseCdn:a,signal:r.signal,fetch:r.fetch,useAbortSignal:r.useAbortSignal,useCdn:r.useCdn};return Vr(n,e,T).pipe(ar(go),Tt(bx),Tt(L=>{if(!s)return L;const w=L.results||[];if(r.returnDocuments)return h?w[0]&&w[0].document:w.map(y=>y.document);const R=h?"documentId":"documentIds",q=h?w[0]&&w[0].id:w.map(y=>y.id);return{transactionId:L.transactionId,results:w,[R]:q}}))}function $s(n,e,t,i,r={}){const s={[i]:t},o=Object.assign({returnFirst:!0,returnDocuments:!0},r);return Mi(n,e,"mutate",{mutations:[s]},o)}const Gr=n=>n.config().dataset!==void 0&&n.config().projectId!==void 0||n.config()["~experimental_resource"]!==void 0,Mh=(n,e)=>Gr(n)&&e.startsWith(Yt(n,"query")),wx=(n,e)=>Gr(n)&&e.startsWith(Yt(n,"mutate")),Rx=(n,e)=>Gr(n)&&e.startsWith(Yt(n,"doc","")),Cx=(n,e)=>Gr(n)&&e.startsWith(Yt(n,"listen")),Px=(n,e)=>Gr(n)&&e.startsWith(Yt(n,"history","")),Lx=(n,e)=>e.startsWith("/data/")||Mh(n,e)||wx(n,e)||Rx(n,e)||Cx(n,e)||Px(n,e);function Vr(n,e,t){const i=t.url||t.uri,r=n.config(),s=typeof t.canUseCdn>"u"?["GET","HEAD"].indexOf(t.method||"GET")>=0&&Lx(n,i):t.canUseCdn;let o=(t.useCdn??r.useCdn)&&s;const a=t.tag&&r.requestTagPrefix?[r.requestTagPrefix,t.tag].join("."):t.tag||r.requestTagPrefix;if(a&&t.tag!==null&&(t.query={tag:th(a),...t.query}),["GET","HEAD","POST"].indexOf(t.method||"GET")>=0&&Mh(n,i)){const u=t.resultSourceMap??r.resultSourceMap;u!==void 0&&u!==!1&&(t.query={resultSourceMap:u,...t.query});const h=t.perspective||r.perspective;typeof h<"u"&&(h==="previewDrafts"&&sx(),ih(h),t.query={perspective:Array.isArray(h)?h.join(","):h,...t.query},(Array.isArray(h)&&h.length>0||h==="previewDrafts"||h==="drafts")&&o&&(o=!1,rx())),t.lastLiveEventId&&(t.query={...t.query,lastLiveEventId:t.lastLiveEventId}),t.returnQuery===!1&&(t.query={returnQuery:"false",...t.query}),o&&t.cacheMode=="noStale"&&(t.query={cacheMode:"noStale",...t.query})}const c=yx(r,Object.assign({},t,{url:_o(n,i,o)})),l=new ct(u=>e(c,r.requester).subscribe(u));return t.signal?l.pipe(Ux(t.signal)):l}function At(n,e,t){return Vr(n,e,t).pipe(ar(i=>i.type==="response"),Tt(i=>i.body))}function Yt(n,e,t){const i=n.config();if(i["~experimental_resource"]){nh(i);const o=Nx(i),a=t!==void 0?`${e}/${t}`:e;return`${o}/${a}`.replace(/\/($|\?)/,"$1")}const r=yi(i),s=`/${e}/${r}`;return`/data${t!==void 0?`${s}/${t}`:s}`.replace(/\/($|\?)/,"$1")}function _o(n,e,t=!1){const{url:i,cdnUrl:r}=n.config();return`${t?r:i}/${e.replace(/^\//,"")}`}function Ux(n){return e=>new ct(t=>{const i=()=>t.error(Ix(n));if(n&&n.aborted){i();return}const r=e.subscribe(t);return n.addEventListener("abort",i),()=>{n.removeEventListener("abort",i),r.unsubscribe()}})}const Dx=!!globalThis.DOMException;function Ix(n){if(Dx)return new DOMException((n==null?void 0:n.reason)??"The operation was aborted.","AbortError");const e=new Error((n==null?void 0:n.reason)??"The operation was aborted.");return e.name="AbortError",e}const Nx=n=>{if(!n["~experimental_resource"])throw new Error("`resource` must be provided to perform resource queries");const{type:e,id:t}=n["~experimental_resource"];switch(e){case"dataset":{const i=t.split(".");if(i.length!==2)throw new Error('Dataset ID must be in the format "project.dataset"');return`/projects/${i[0]}/datasets/${i[1]}`}case"canvas":return`/canvases/${t}`;case"media-library":return`/media-libraries/${t}`;case"dashboard":return`/dashboards/${t}`;default:throw new Error(`Unsupported resource type: ${e.toString()}`)}};function bh(n,e,t){const i=yi(n.config());return At(n,e,{method:"POST",uri:`/agent/action/generate/${i}`,body:t})}function Fx(n,e,t){const i=yi(n.config());return At(n,e,{method:"POST",uri:`/agent/action/patch/${i}`,body:t})}function Ox(n,e,t){const i=yi(n.config());return At(n,e,{method:"POST",uri:`/agent/action/prompt/${i}`,body:t})}function Th(n,e,t){const i=yi(n.config());return At(n,e,{method:"POST",uri:`/agent/action/transform/${i}`,body:t})}function Ah(n,e,t){const i=yi(n.config());return At(n,e,{method:"POST",uri:`/agent/action/translate/${i}`,body:t})}var hi,fi;class Bx{constructor(e,t){Ue(this,hi);Ue(this,fi);Ce(this,hi,e),Ce(this,fi,t)}generate(e){return bh(C(this,hi),C(this,fi),e)}transform(e){return Th(C(this,hi),C(this,fi),e)}translate(e){return Ah(C(this,hi),C(this,fi),e)}}hi=new WeakMap,fi=new WeakMap;var xn,Sn;class zx{constructor(e,t){Ue(this,xn);Ue(this,Sn);Ce(this,xn,e),Ce(this,Sn,t)}generate(e){return ke(bh(C(this,xn),C(this,Sn),e))}transform(e){return ke(Th(C(this,xn),C(this,Sn),e))}translate(e){return ke(Ah(C(this,xn),C(this,Sn),e))}prompt(e){return ke(Ox(C(this,xn),C(this,Sn),e))}patch(e){return ke(Fx(C(this,xn),C(this,Sn),e))}}xn=new WeakMap,Sn=new WeakMap;var Ar,wr;class Hx{constructor(e,t){Ue(this,Ar);Ue(this,wr);Ce(this,Ar,e),Ce(this,wr,t)}upload(e,t,i){return wh(C(this,Ar),C(this,wr),e,t,i)}}Ar=new WeakMap,wr=new WeakMap;var Rr,Cr;class Gx{constructor(e,t){Ue(this,Rr);Ue(this,Cr);Ce(this,Rr,e),Ce(this,Cr,t)}upload(e,t,i){const r=wh(C(this,Rr),C(this,Cr),e,t,i);return ke(r.pipe(ar(s=>s.type==="response"),Tt(s=>s.body.document)))}}Rr=new WeakMap,Cr=new WeakMap;function wh(n,e,t,i,r={}){Z0(t);let s=r.extract||void 0;s&&!s.length&&(s=["none"]);const o=n.config(),a=kx(r,i),{tag:c,label:l,title:u,description:h,creditLine:d,filename:p,source:_}=a,g={label:l,title:u,description:h,filename:p,meta:s,creditLine:d};return _&&(g.sourceId=_.id,g.sourceName=_.name,g.sourceUrl=_.url),Vr(n,e,{tag:c,method:"POST",timeout:a.timeout||0,uri:Vx(o,t),headers:a.contentType?{"Content-Type":a.contentType}:{},query:g,body:i})}function Vx(n,e){const t=e==="image"?"images":"files";if(n["~experimental_resource"]){const{type:r,id:s}=n["~experimental_resource"];switch(r){case"dataset":throw new Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");case"canvas":return`/canvases/${s}/assets/${t}`;case"media-library":return`/media-libraries/${s}/upload`;case"dashboard":return`/dashboards/${s}/assets/${t}`;default:throw new Error(`Unsupported resource type: ${r.toString()}`)}}const i=yi(n);return`assets/${t}/${i}`}function kx(n,e){return typeof File>"u"||!(e instanceof File)?n:Object.assign({filename:n.preserveFilename===!1?void 0:e.name,contentType:e.type},n)}var Wx=(n,e)=>Object.keys(e).concat(Object.keys(n)).reduce((t,i)=>(t[i]=typeof n[i]>"u"?e[i]:n[i],t),{});const Xx=(n,e)=>e.reduce((t,i)=>(typeof n[i]>"u"||(t[i]=n[i]),t),{}),Rh=Gu(()=>hu(()=>import("./browser-BNE2vVB_.js").then(n=>n.b),[],import.meta.url)).pipe(Tt(({default:n})=>n),y0(1));function Ch(){return function(n){return n.pipe(fo((e,t)=>e instanceof sh?Hu(Gs({type:"reconnect"}),g0(1e3).pipe(Hr(()=>t))):Ou(()=>e)))}}const qx=14800,$x=["includePreviousRevision","includeResult","includeMutations","includeAllVersions","visibility","effectFormat","tag"],jx={includeResult:!0};function Ph(n,e,t={}){const{url:i,token:r,withCredentials:s,requestTagPrefix:o,headers:a}=this.config(),c=t.tag&&o?[o,t.tag].join("."):t.tag,l={...Wx(t,jx),tag:c},u=Xx(l,$x),h=hh({query:n,params:e,options:{tag:c,...u}}),d=`${i}${Yt(this,"listen",h)}`;if(d.length>qx)return Ou(()=>new Error("Query too large for listener"));const p=l.events?l.events:["mutation"],_={};return s&&(_.withCredentials=!0),(r||a)&&(_.headers={},r&&(_.headers.Authorization=`Bearer ${r}`),a&&Object.assign(_.headers,a)),ah(()=>(typeof EventSource>"u"||_.headers?Rh:Gs(EventSource)).pipe(Tt(g=>new g(d,_))),p).pipe(Ch(),ar(g=>p.includes(g.type)),Tt(g=>({type:g.type,..."data"in g?g.data:{}})))}function Yx(n,e){return Kx(typeof n=="function"?{predicate:n,...e}:n)}function Kx(n){return e=>{let t,i=!1;const{predicate:r,...s}=n,o=e.pipe(E0(c=>{n.predicate(c)&&(i=!0,t=c)}),ku(()=>{i=!1,t=void 0}),Wu(s)),a=new ct(c=>{i&&c.next(t),c.complete()});return _0(o,a)}}const Al="2021-03-25";var Bn;class Lh{constructor(e){Ue(this,Bn);Ce(this,Bn,e)}events({includeDrafts:e=!1,tag:t}={}){an("live",C(this,Bn).config());const{projectId:i,apiVersion:r,token:s,withCredentials:o,requestTagPrefix:a,headers:c}=C(this,Bn).config(),l=r.replace(/^v/,"");if(l!=="X"&&l<Al)throw new Error(`The live events API requires API version ${Al} or later. The current API version is ${l}. Please update your API version to use this feature.`);if(e&&!s&&!o)throw new Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");const u=Yt(C(this,Bn),"live/events"),h=new URL(C(this,Bn).getUrl(u,!1)),d=t&&a?[a,t].join("."):t;d&&h.searchParams.set("tag",d),e&&h.searchParams.set("includeDrafts","true");const p={};e&&o&&(p.withCredentials=!0),(e&&s||c)&&(p.headers={},e&&s&&(p.headers.Authorization=`Bearer ${s}`),c&&Object.assign(p.headers,c));const _=`${h.href}::${JSON.stringify(p)}`,g=Ia.get(_);if(g)return g;const m=ah(()=>(typeof EventSource>"u"||p.headers?Rh:Gs(EventSource)).pipe(Tt(v=>new v(h.href,p))),["message","restart","welcome","reconnect","goaway"]).pipe(Ch(),Tt(v=>{if(v.type==="message"){const{data:T,...L}=v;return{...L,tags:T.tags}}return v})),f=Zx(h,{method:"OPTIONS",mode:"cors",credentials:p.withCredentials?"include":"omit",headers:p.headers}).pipe(Hr(()=>Mu),fo(()=>{throw new X0({projectId:i})})),M=Hu(f,m).pipe(ku(()=>Ia.delete(_)),Yx({predicate:v=>v.type==="welcome"}));return Ia.set(_,M),M}}Bn=new WeakMap;function Zx(n,e){return new ct(t=>{const i=new AbortController,r=i.signal;return fetch(n,{...e,signal:i.signal}).then(s=>{t.next(s),t.complete()},s=>{r.aborted||t.error(s)}),()=>i.abort()})}const Ia=new Map;var zn,Hn;class Jx{constructor(e,t){Ue(this,zn);Ue(this,Hn);Ce(this,zn,e),Ce(this,Hn,t)}create(e,t){return qi(C(this,zn),C(this,Hn),"PUT",e,t)}edit(e,t){return qi(C(this,zn),C(this,Hn),"PATCH",e,t)}delete(e){return qi(C(this,zn),C(this,Hn),"DELETE",e)}list(){return At(C(this,zn),C(this,Hn),{uri:"/datasets",tag:null})}}zn=new WeakMap,Hn=new WeakMap;var Xt,Gn;class Qx{constructor(e,t){Ue(this,Xt);Ue(this,Gn);Ce(this,Xt,e),Ce(this,Gn,t)}create(e,t){return an("dataset",C(this,Xt).config()),ke(qi(C(this,Xt),C(this,Gn),"PUT",e,t))}edit(e,t){return an("dataset",C(this,Xt).config()),ke(qi(C(this,Xt),C(this,Gn),"PATCH",e,t))}delete(e){return an("dataset",C(this,Xt).config()),ke(qi(C(this,Xt),C(this,Gn),"DELETE",e))}list(){return an("dataset",C(this,Xt).config()),ke(At(C(this,Xt),C(this,Gn),{uri:"/datasets",tag:null}))}}Xt=new WeakMap,Gn=new WeakMap;function qi(n,e,t,i,r){return an("dataset",n.config()),Ju(i),At(n,e,{method:t,uri:`/datasets/${i}`,body:r,tag:null})}var Vn,ji;class eS{constructor(e,t){Ue(this,Vn);Ue(this,ji);Ce(this,Vn,e),Ce(this,ji,t)}list(e){an("projects",C(this,Vn).config());const t=(e==null?void 0:e.includeMembers)===!1?"/projects?includeMembers=false":"/projects";return At(C(this,Vn),C(this,ji),{uri:t})}getById(e){return an("projects",C(this,Vn).config()),At(C(this,Vn),C(this,ji),{uri:`/projects/${e}`})}}Vn=new WeakMap,ji=new WeakMap;var kn,Yi;class tS{constructor(e,t){Ue(this,kn);Ue(this,Yi);Ce(this,kn,e),Ce(this,Yi,t)}list(e){an("projects",C(this,kn).config());const t=(e==null?void 0:e.includeMembers)===!1?"/projects?includeMembers=false":"/projects";return ke(At(C(this,kn),C(this,Yi),{uri:t}))}getById(e){return an("projects",C(this,kn).config()),ke(At(C(this,kn),C(this,Yi),{uri:`/projects/${e}`}))}}kn=new WeakMap,Yi=new WeakMap;const wl=F0("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",8),ws=(n,e)=>e?Ws(n,e):D0(n);function Rs(n,{releaseId:e,publishedId:t,document:i}){if(t&&i._id){const r=ws(t,e);return Q0(r,i),r}if(i._id){const r=Vs(i._id),s=ks(i._id);if(!r&&!s)throw new Error(`\`${n}()\` requires a document with an \`_id\` that is a version or draft ID`);if(e){if(r)throw new Error(`\`${n}()\` was called with a document ID (\`${i._id}\`) that is a draft ID, but a release ID (\`${e}\`) was also provided.`);const o=ju(i._id);if(o!==e)throw new Error(`\`${n}()\` was called with a document ID (\`${i._id}\`) that is a version ID, but the release ID (\`${e}\`) does not match the document's version ID (\`${o}\`).`)}return i._id}if(t)return ws(t,e);throw new Error(`\`${n}()\` requires either a publishedId or a document with an \`_id\``)}const nS=(n,e)=>{if(typeof n=="object"&&n!==null&&("releaseId"in n||"metadata"in n)){const{releaseId:t=wl(),metadata:i={}}=n;return[t,i,e]}return[wl(),{},n]},Uh=(n,e)=>{const[t,i,r]=nS(n,e),s={...i,releaseType:i.releaseType||"undecided"};return{action:{actionType:"sanity.action.release.create",releaseId:t,metadata:s},options:r}};var Dt,It;class iS{constructor(e,t){Ue(this,Dt);Ue(this,It);Ce(this,Dt,e),Ce(this,It,t)}get({releaseId:e},t){return qs(C(this,Dt),C(this,It),`_.releases.${e}`,t)}create(e,t){const{action:i,options:r}=Uh(e,t),{releaseId:s,metadata:o}=i;return ot(C(this,Dt),C(this,It),i,r).pipe(Tt(a=>({...a,releaseId:s,metadata:o})))}edit({releaseId:e,patch:t},i){const r={actionType:"sanity.action.release.edit",releaseId:e,patch:t};return ot(C(this,Dt),C(this,It),r,i)}publish({releaseId:e},t){const i={actionType:"sanity.action.release.publish",releaseId:e};return ot(C(this,Dt),C(this,It),i,t)}archive({releaseId:e},t){const i={actionType:"sanity.action.release.archive",releaseId:e};return ot(C(this,Dt),C(this,It),i,t)}unarchive({releaseId:e},t){const i={actionType:"sanity.action.release.unarchive",releaseId:e};return ot(C(this,Dt),C(this,It),i,t)}schedule({releaseId:e,publishAt:t},i){const r={actionType:"sanity.action.release.schedule",releaseId:e,publishAt:t};return ot(C(this,Dt),C(this,It),r,i)}unschedule({releaseId:e},t){const i={actionType:"sanity.action.release.unschedule",releaseId:e};return ot(C(this,Dt),C(this,It),i,t)}delete({releaseId:e},t){const i={actionType:"sanity.action.release.delete",releaseId:e};return ot(C(this,Dt),C(this,It),i,t)}fetchDocuments({releaseId:e},t){return ph(C(this,Dt),C(this,It),e,t)}}Dt=new WeakMap,It=new WeakMap;var Nt,Ft;class rS{constructor(e,t){Ue(this,Nt);Ue(this,Ft);Ce(this,Nt,e),Ce(this,Ft,t)}get({releaseId:e},t){return ke(qs(C(this,Nt),C(this,Ft),`_.releases.${e}`,t))}async create(e,t){const{action:i,options:r}=Uh(e,t),{releaseId:s,metadata:o}=i;return{...await ke(ot(C(this,Nt),C(this,Ft),i,r)),releaseId:s,metadata:o}}edit({releaseId:e,patch:t},i){const r={actionType:"sanity.action.release.edit",releaseId:e,patch:t};return ke(ot(C(this,Nt),C(this,Ft),r,i))}publish({releaseId:e},t){const i={actionType:"sanity.action.release.publish",releaseId:e};return ke(ot(C(this,Nt),C(this,Ft),i,t))}archive({releaseId:e},t){const i={actionType:"sanity.action.release.archive",releaseId:e};return ke(ot(C(this,Nt),C(this,Ft),i,t))}unarchive({releaseId:e},t){const i={actionType:"sanity.action.release.unarchive",releaseId:e};return ke(ot(C(this,Nt),C(this,Ft),i,t))}schedule({releaseId:e,publishAt:t},i){const r={actionType:"sanity.action.release.schedule",releaseId:e,publishAt:t};return ke(ot(C(this,Nt),C(this,Ft),r,i))}unschedule({releaseId:e},t){const i={actionType:"sanity.action.release.unschedule",releaseId:e};return ke(ot(C(this,Nt),C(this,Ft),i,t))}delete({releaseId:e},t){const i={actionType:"sanity.action.release.delete",releaseId:e};return ke(ot(C(this,Nt),C(this,Ft),i,t))}fetchDocuments({releaseId:e},t){return ke(ph(C(this,Nt),C(this,Ft),e,t))}}Nt=new WeakMap,Ft=new WeakMap;var Pr,Lr;class sS{constructor(e,t){Ue(this,Pr);Ue(this,Lr);Ce(this,Pr,e),Ce(this,Lr,t)}getById(e){return At(C(this,Pr),C(this,Lr),{uri:`/users/${e}`})}}Pr=new WeakMap,Lr=new WeakMap;var Ur,Dr;class aS{constructor(e,t){Ue(this,Ur);Ue(this,Dr);Ce(this,Ur,e),Ce(this,Dr,t)}getById(e){return ke(At(C(this,Ur),C(this,Dr),{uri:`/users/${e}`}))}}Ur=new WeakMap,Dr=new WeakMap;var yn,et;const Us=class Us{constructor(e,t=gr){ve(this,"assets");ve(this,"datasets");ve(this,"live");ve(this,"projects");ve(this,"users");ve(this,"agent");ve(this,"releases");Ue(this,yn);Ue(this,et);ve(this,"listen",Ph);this.config(t),Ce(this,et,e),this.assets=new Hx(this,C(this,et)),this.datasets=new Jx(this,C(this,et)),this.live=new Lh(this),this.projects=new eS(this,C(this,et)),this.users=new sS(this,C(this,et)),this.agent={action:new Bx(this,C(this,et))},this.releases=new iS(this,C(this,et))}clone(){return new Us(C(this,et),this.config())}config(e){if(e===void 0)return{...C(this,yn)};if(C(this,yn)&&C(this,yn).allowReconfigure===!1)throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");return Ce(this,yn,rh(e,C(this,yn)||{})),this}withConfig(e){const t=this.config();return new Us(C(this,et),{...t,...e,stega:{...t.stega||{},...typeof(e==null?void 0:e.stega)=="boolean"?{enabled:e.stega}:(e==null?void 0:e.stega)||{}}})}fetch(e,t,i){return fh(this,C(this,et),C(this,yn).stega,e,t,i)}getDocument(e,t){return qs(this,C(this,et),e,t)}getDocuments(e,t){return dh(this,C(this,et),e,t)}create(e,t){return $s(this,C(this,et),e,"create",t)}createIfNotExists(e,t){return mh(this,C(this,et),e,t)}createOrReplace(e,t){return gh(this,C(this,et),e,t)}createVersion({document:e,publishedId:t,releaseId:i},r){const s=Rs("createVersion",{document:e,publishedId:t,releaseId:i}),o={...e,_id:s},a=t||Xs(e._id);return _h(this,C(this,et),o,a,r)}delete(e,t){return vh(this,C(this,et),e,t)}discardVersion({releaseId:e,publishedId:t},i,r){const s=ws(t,e);return xh(this,C(this,et),s,i,r)}replaceVersion({document:e,publishedId:t,releaseId:i},r){const s=Rs("replaceVersion",{document:e,publishedId:t,releaseId:i}),o={...e,_id:s};return Sh(this,C(this,et),o,r)}unpublishVersion({releaseId:e,publishedId:t},i){const r=Ws(t,e);return yh(this,C(this,et),r,t,i)}mutate(e,t){return Eh(this,C(this,et),e,t)}patch(e,t){return new vi(e,t,this)}transaction(e){return new As(e,this)}action(e,t){return ot(this,C(this,et),e,t)}request(e){return At(this,C(this,et),e)}getUrl(e,t){return _o(this,e,t)}getDataUrl(e,t){return Yt(this,e,t)}};yn=new WeakMap,et=new WeakMap;let Ya=Us;var En,Ke;const Ds=class Ds{constructor(e,t=gr){ve(this,"assets");ve(this,"datasets");ve(this,"live");ve(this,"projects");ve(this,"users");ve(this,"agent");ve(this,"releases");ve(this,"observable");Ue(this,En);Ue(this,Ke);ve(this,"listen",Ph);this.config(t),Ce(this,Ke,e),this.assets=new Gx(this,C(this,Ke)),this.datasets=new Qx(this,C(this,Ke)),this.live=new Lh(this),this.projects=new tS(this,C(this,Ke)),this.users=new aS(this,C(this,Ke)),this.agent={action:new zx(this,C(this,Ke))},this.releases=new rS(this,C(this,Ke)),this.observable=new Ya(e,t)}clone(){return new Ds(C(this,Ke),this.config())}config(e){if(e===void 0)return{...C(this,En)};if(C(this,En)&&C(this,En).allowReconfigure===!1)throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");return this.observable&&this.observable.config(e),Ce(this,En,rh(e,C(this,En)||{})),this}withConfig(e){const t=this.config();return new Ds(C(this,Ke),{...t,...e,stega:{...t.stega||{},...typeof(e==null?void 0:e.stega)=="boolean"?{enabled:e.stega}:(e==null?void 0:e.stega)||{}}})}fetch(e,t,i){return ke(fh(this,C(this,Ke),C(this,En).stega,e,t,i))}getDocument(e,t){return ke(qs(this,C(this,Ke),e,t))}getDocuments(e,t){return ke(dh(this,C(this,Ke),e,t))}create(e,t){return ke($s(this,C(this,Ke),e,"create",t))}createIfNotExists(e,t){return ke(mh(this,C(this,Ke),e,t))}createOrReplace(e,t){return ke(gh(this,C(this,Ke),e,t))}createVersion({document:e,publishedId:t,releaseId:i},r){const s=Rs("createVersion",{document:e,publishedId:t,releaseId:i}),o={...e,_id:s},a=t||Xs(e._id);return gl(_h(this,C(this,Ke),o,a,r))}delete(e,t){return ke(vh(this,C(this,Ke),e,t))}discardVersion({releaseId:e,publishedId:t},i,r){const s=ws(t,e);return ke(xh(this,C(this,Ke),s,i,r))}replaceVersion({document:e,publishedId:t,releaseId:i},r){const s=Rs("replaceVersion",{document:e,publishedId:t,releaseId:i}),o={...e,_id:s};return gl(Sh(this,C(this,Ke),o,r))}unpublishVersion({releaseId:e,publishedId:t},i){const r=Ws(t,e);return ke(yh(this,C(this,Ke),r,t,i))}mutate(e,t){return ke(Eh(this,C(this,Ke),e,t))}patch(e,t){return new qn(e,t,this)}transaction(e){return new Ts(e,this)}action(e,t){return ke(ot(this,C(this,Ke),e,t))}request(e){return ke(At(this,C(this,Ke),e))}dataRequest(e,t,i){return ke(Mi(this,C(this,Ke),e,t,i))}getUrl(e,t){return _o(this,e,t)}getDataUrl(e,t){return Yt(this,e,t)}};En=new WeakMap,Ke=new WeakMap;let Ka=Ds;function oS(n,e){return{requester:yl(n),createClient:t=>{const i=yl(n);return new e((r,s)=>(s||i)({maxRedirects:0,maxRetries:t.maxRetries,retryDelay:t.retryDelay,...r}),t)}}}var cS=[];const lS=oS(cS,Ka),uS=lS.createClient,hS=uS({projectId:"1d9ojoh4",dataset:"rm",apiVersion:"2023-01-01",token:"skEUmKsIYhqVeyaSsHrma2DDAEwUatjCnOvKnrHQ69LywyQk0YPi4zLpTCYqUqBFWc9ca7hA5sFZFIHkR3Jdmur7bBVEzN4OhazzIJ7rMejIEzwJqrF3iDCPdj7cCW44ggcARvE14Z5r3pk2TOCzw9IZ5MKJL4ok1nWoMw6kftJ44QnPvi37",useCdn:!0}),fS=async()=>{const e=await hS.fetch(`*[_type == "project"]{
    title,
    "slug": slug.current,
    year,
    description,
    "image": image.asset->url
  }`);return console.log("Fetched projects from Sanity:",e),e};let tn=[];const jt={cellSize:.75,zoomLevel:1.25,lerpFactor:.075,borderColor:"rgba(255, 255, 255, 0.15)",backgroundColor:"rgba(0, 0, 0, 1)",textColor:"rgba(128, 128, 128, 1)",hoverColor:"rgba(255, 255, 255, 0)"};let Za,Cs,bn,sn,Ps=!1,vo=!0,Dh=0,Vi={x:0,y:0},Fn={x:0,y:0},Ls={x:0,y:0},_r=1,xo=1;const ms=n=>{const e=n.match(/rgba?\(([^)]+)\)/);return e?e[1].split(",").map((t,i)=>i<3?parseFloat(t.trim())/255:parseFloat(t.trim()||1)):[1,1,1,1]},dS=(n,e)=>{const t=document.createElement("canvas");t.width=2048,t.height=256;const i=t.getContext("2d");i.clearRect(0,0,2048,256),i.font="80px IBM Plex Mono",i.fillStyle=jt.textColor,i.textBaseline="middle",i.imageSmoothingEnabled=!1,i.textAlign="left",i.fillText(n.toUpperCase(),30,128),i.textAlign="right",i.fillText(e.toString().toUpperCase(),2018,128);const r=new uu(t);return Object.assign(r,{wrapS:xt,wrapT:xt,minFilter:_t,magFilter:_t,flipY:!1,generateMipmaps:!1,format:qt}),r},Rl=(n,e=!1)=>{const t=Math.ceil(Math.sqrt(n.length)),i=512,r=document.createElement("canvas");r.width=r.height=t*i;const s=r.getContext("2d");e?s.clearRect(0,0,r.width,r.height):(s.fillStyle="black",s.fillRect(0,0,r.width,r.height)),n.forEach((a,c)=>{var d;const l=c%t*i,u=Math.floor(c/t)*i,h=e?(d=a.source)==null?void 0:d.data:a.image;(h!=null&&h.complete||h instanceof HTMLCanvasElement)&&s.drawImage(h,l,u,i,i)});const o=new uu(r);return Object.assign(o,{wrapS:xt,wrapT:xt,minFilter:bt,magFilter:bt,flipY:!1}),{atlasTexture:o,atlasSize:t}},pS=async n=>{const e=new iv,t=[...n].sort((s,o)=>s.title.localeCompare(o.title)),i=[],r=[];for(const s of t)try{const o=await new Promise((a,c)=>{e.load(s.image,a,void 0,c)});Object.assign(o,{wrapS:xt,wrapT:xt,minFilter:bt,magFilter:bt}),i.push(o),r.push(dS(s.title,s.year))}catch{console.warn("Skipping image due to error:",s.image)}return{imageTextures:i,textTextures:r,validProjects:t}},Ih=()=>{requestAnimationFrame(Ih),Fn.x+=(Ls.x-Fn.x)*jt.lerpFactor,Fn.y+=(Ls.y-Fn.y)*jt.lerpFactor,_r+=(xo-_r)*jt.lerpFactor,sn!=null&&sn.material.uniforms&&(sn.material.uniforms.uOffset.value.set(Fn.x,Fn.y),sn.material.uniforms.uZoom.value=_r),bn.render(Za,Cs)},mS=async()=>{const n=document.getElementById("gallery");if(!n)return;Za=new Q_,Cs=new nu(-1,1,1,-1,.1,10),Cs.position.z=1,bn=new lu({antialias:!0,alpha:!1}),bn.setSize(n.offsetWidth,n.offsetHeight),bn.setPixelRatio(window.devicePixelRatio),n.appendChild(bn.domElement);const e=ms(jt.backgroundColor);bn.setClearColor(new $e(e[0],e[1],e[2]),e[3]),tn=await fS(),console.log("Initializing..."),console.log("projects:",tn);const t=window.location.pathname.replace(/^\//,"").toLowerCase(),i=tn.find(_=>_.slug&&_.slug.toLowerCase()===t);if(console.log("matched:",i),i){document.body.innerHTML=`
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
          <h1>${i.title}</h1>
          <div class="meta">${i.year}</div>
        </div>
        <div class="content">
          <div class="image-container">
            <img src="${i.image}" alt="${i.title}" onload="this.classList.add('loaded')" />
          </div>
          <div class="desc">
            ${i.description||"No description available."}
          </div>
        </div>
      </div>
    `;return}const r=await pS(tn),{imageTextures:s,textTextures:o,validProjects:a}=r;console.log("Image-texture count:",s.length),console.log("Valid projects count:",a.length),a.forEach((_,g)=>{console.log(`[${g}] ${_.title} -> ${_.image}`)}),tn=a;const{atlasTexture:c,atlasSize:l}=Rl(s,!1),{atlasTexture:u}=Rl(o,!0),h={uOffset:{value:new Xe(0,0)},uResolution:{value:new Xe(n.offsetWidth,n.offsetHeight)},uBorderColor:{value:new ht(...ms(jt.borderColor))},uHoverColor:{value:new ht(...ms(jt.hoverColor))},uBackgroundColor:{value:new ht(...ms(jt.backgroundColor))},uMousePos:{value:new Xe(-1,-1)},uZoom:{value:1},uCellSize:{value:jt.cellSize},uTextureCount:{value:tn.length},uImageAtlas:{value:c},uTextAtlas:{value:u},uColumns:{value:l}},d=new Bs(2,2),p=new Zn({vertexShader:rv,fragmentShader:sv,uniforms:h});sn=new An(d,p),Za.add(sn),gS(),Ih()},gS=()=>{document.addEventListener("mousedown",vS),document.addEventListener("mousemove",SS),document.addEventListener("mouseup",Na),document.addEventListener("mouseleave",Na),window.addEventListener("resize",_S),document.addEventListener("contextmenu",e=>e.preventDefault());const n={passive:!1};document.addEventListener("touchstart",xS,n),document.addEventListener("touchmove",yS,n),document.addEventListener("touchend",Na,n)},_S=()=>{const n=document.getElementById("gallery");if(!n||!sn)return;const{offsetWidth:e,offsetHeight:t}=n;Cs.updateProjectionMatrix(),bn.setSize(e,t),bn.setPixelRatio(window.devicePixelRatio),sn.material.uniforms.uResolution.value.set(e,t)},vS=n=>Nh(n.clientX,n.clientY),xS=n=>{n.preventDefault(),Nh(n.touches[0].clientX,n.touches[0].clientY)},SS=n=>Fh(n.clientX,n.clientY),yS=n=>{n.preventDefault(),Fh(n.touches[0].clientX,n.touches[0].clientY)},Nh=(n,e)=>{Ps=!0,vo=!0,Dh=Date.now(),document.body.classList.add("dragging"),Vi.x=n,Vi.y=e,setTimeout(()=>Ps&&(xo=jt.zoomLevel),150)},Fh=(n,e)=>{if(!Ps)return;const t=n-Vi.x,i=e-Vi.y;(Math.abs(t)>2||Math.abs(i)>2)&&(vo=!1),Ls.x-=t*.003,Ls.y+=i*.003,Vi.x=n,Vi.y=e},Na=n=>{var m,f,M,v,T,L;if(Ps=!1,document.body.classList.remove("dragging"),xo=1,!vo||Date.now()-Dh>200)return;const e=n.clientX||((f=(m=n.changedTouches)==null?void 0:m[0])==null?void 0:f.clientX),t=n.clientY||((v=(M=n.changedTouches)==null?void 0:M[0])==null?void 0:v.clientY);if(e===void 0||t===void 0)return;const i=bn.domElement.getBoundingClientRect(),r=(e-i.left)/i.width*2-1,s=-((t-i.top)/i.height*2-1),o=Math.sqrt(r*r+s*s),a=1-.08*o*o,c=r*a*(i.width/i.height)*_r+Fn.x,l=s*a*_r+Fn.y,u=Math.floor(c/jt.cellSize),h=Math.floor(l/jt.cellSize),d=sn.material.uniforms.uColumns.value,_=(Math.floor(u+h*d)%tn.length+tn.length)%tn.length;console.log("Clicked texIndex:",_,"Slug:",(T=tn[_])==null?void 0:T.slug);const g=(L=tn[_])==null?void 0:L.slug;g&&(window.location.href=`/${g}`)};mS();export{bS as C,Xu as i};
