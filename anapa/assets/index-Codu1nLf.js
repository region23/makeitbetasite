(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const ec="186",Ti={ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gu=0,ul=1,_u=2,Bo=1,xu=2,Ws=3,Xn=0,fn=1,ln=2,ai=0,qs=1,fl=2,dl=3,pl=4,vu=5,as=100,Mu=101,Su=102,bu=103,yu=104,wu=200,Eu=201,Tu=202,Au=203,Ul=204,Nl=205,Ru=206,Cu=207,Pu=208,Lu=209,Du=210,Iu=211,Uu=212,Nu=213,Fu=214,ua=0,fa=1,da=2,to=3,pa=4,ma=5,ga=6,_a=7,mr=0,Ou=1,Bu=2,qn=0,Fl=1,Ol=2,Bl=3,zl=4,kl=5,Hl=6,Gl=7,Vl=300,Ki=301,ds=302,zo=303,ea=304,gr=306,tr=1e3,ri=1001,eo=1002,Ve=1003,zu=1004,To=1005,qe=1006,na=1007,Xi=1008,_n=1009,Wl=1010,Xl=1011,no=1012,nc=1013,Zn=1014,In=1015,$n=1016,ic=1017,sc=1018,io=1020,ql=35902,Yl=35899,Zl=1021,$l=1022,Un=1023,hi=1026,qi=1027,oc=1028,rc=1029,Ji=1030,ac=1031,cc=1033,ko=33776,Ho=33777,Go=33778,Vo=33779,xa=35840,va=35841,Ma=35842,Sa=35843,ba=36196,ya=37492,wa=37496,Ea=37488,Ta=37489,er=37490,Aa=37491,Ra=37808,Ca=37809,Pa=37810,La=37811,Da=37812,Ia=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,ka=37820,Ha=37821,Ga=36492,Va=36494,Wa=36495,Xa=36283,qa=36284,nr=36285,Ya=36286,ku=3200,ir=0,Hu=1,Si="",Qe="srgb",sr="srgb-linear",or="linear",fe="srgb",ia=7680,Gu=519,Vu=512,Wu=513,Xu=514,lc=515,qu=516,Yu=517,hc=518,Zu=519,$u=35044,ml="300 es",Wn=2e3,so=2001;function ld(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ku(){const i=rr("canvas");return i.style.display="block",i}const P0={};function gl(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ju(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=Ju(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=Ju(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function hs(...i){const t=i.join(" ");t in P0||(P0[t]=!0,Zt(...i))}function hd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const ud={[ua]:fa,[da]:ga,[pa]:_a,[to]:ma,[fa]:ua,[ga]:da,[_a]:pa,[ma]:to};class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let L0=1234567;const Wo=Math.PI/180,ar=180/Math.PI;function ms(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Kl(i,t){return(i%t+t)%t}function fd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dd(i,t,e){return i!==t?(e-i)/(t-i):0}function Xo(i,t,e){return(1-e)*i+e*t}function pd(i,t,e,n){return Xo(i,t,1-Math.exp(-e*n))}function md(i,t=1){return t-Math.abs(Kl(i,t*2)-t)}function gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vd(i,t){return i+Math.random()*(t-i)}function Md(i){return i*(.5-Math.random())}function Sd(i){i!==void 0&&(L0=i);let t=L0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bd(i){return i*Wo}function yd(i){return i*ar}function wd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ed(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ae={DEG2RAD:Wo,RAD2DEG:ar,generateUUID:ms,clamp:te,euclideanModulo:Kl,mapLinear:fd,inverseLerp:dd,lerp:Xo,damp:pd,pingpong:md,smoothstep:gd,smootherstep:_d,randInt:xd,randFloat:vd,randFloatSpread:Md,seededRandom:Sd,degToRad:bd,radToDeg:yd,isPowerOfTwo:wd,ceilPowerOfTwo:Ed,floorPowerOfTwo:Td,setQuaternionFromProperEuler:Ad,normalize:on,denormalize:Hs};var Qs;let St=(Qs=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qs.prototype.isVector2=!0,Qs);class Ri{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=o[r+0],d=o[r+1],g=o[r+2],_=o[r+3];if(f!==_||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*_;p<0&&(u=-u,d=-d,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const v=Math.acos(p),S=Math.sin(v);m=Math.sin(m*v)/S,a=Math.sin(a*v)/S,l=l*m+u*a,c=c*m+d*a,h=h*m+g*a,f=f*m+_*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+g*a,f=f*m+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-a*d,t[e+2]=c*g+h*d+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),u=l(n/2),d=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}var js;let z=(js=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(D0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(D0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},js.prototype.isVector3=!0,js);const Ec=new z,D0=new Ri,y0=class y0{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],S=s[4],x=s[7],b=s[2],y=s[5],w=s[8];return o[0]=r*_+a*v+l*b,o[3]=r*p+a*S+l*y,o[6]=r*m+a*x+l*w,o[1]=c*_+h*v+f*b,o[4]=c*p+h*S+f*y,o[7]=c*m+h*x+f*w,o[2]=u*_+d*v+g*b,o[5]=u*p+d*S+g*y,o[8]=u*m+d*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*o,d=c*o-r*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};y0.prototype.isMatrix3=!0;let Jt=y0;const Tc=new Jt,I0=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U0=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){const i={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===fe&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===fe&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sr]:{primaries:t,whitePoint:n,transfer:or,toXYZ:I0,fromXYZ:U0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:I0,fromXYZ:U0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}const re=Rd();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ss;class Qu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ss===void 0&&(Ss=rr("canvas")),Ss.width=t.width,Ss.height=t.height;const s=Ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ai(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cd=0;class uc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=ms(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ac(s[r].image)):o.push(Ac(s[r]))}else o=Ac(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let Pd=0;const Rc=new z;class We extends Pi{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=ri,s=ri,o=qe,r=Xi,a=Un,l=_n,c=We.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ms(),this.name="",this.source=new uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Vl;We.DEFAULT_ANISOTROPY=1;const w0=class w0{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(d+1)/2,b=(m+1)/2,y=(h+u)/4,w=(f+_)/4,M=(g+p)/4;return S>x&&S>b?S<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(S),s=y/n,o=w/n):x>b?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=y/s,o=M/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=w/o,s=M/o),this.set(n,s,o,e),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};w0.prototype.isVector4=!0;let Te=w0;class ju extends Pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new We(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new uc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends ju{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jl extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tf extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const tc=class tc{constructor(t,e,n,s,o,r,a,l,c,h,f,u,d,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,u,d,g,_,p)}set(t,e,n,s,o,r,a,l,c,h,f,u,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),o=1/bs.setFromMatrixColumn(t,1).length(),r=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,g=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,_=c*f;e[0]=u-_*a,e[4]=-r*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,g=a*h,_=a*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*l,d=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Dd)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Fi.crossVectors(n,Sn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Fi.crossVectors(n,Sn)),Fi.normalize(),Mr.crossVectors(Sn,Fi),s[0]=Fi.x,s[4]=Mr.x,s[8]=Sn.x,s[1]=Fi.y,s[5]=Mr.y,s[9]=Sn.y,s[2]=Fi.z,s[6]=Mr.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],S=n[7],x=n[11],b=n[15],y=s[0],w=s[4],M=s[8],E=s[12],A=s[1],C=s[5],D=s[9],P=s[13],L=s[2],U=s[6],k=s[10],H=s[14],q=s[3],Y=s[7],J=s[11],it=s[15];return o[0]=r*y+a*A+l*L+c*q,o[4]=r*w+a*C+l*U+c*Y,o[8]=r*M+a*D+l*k+c*J,o[12]=r*E+a*P+l*H+c*it,o[1]=h*y+f*A+u*L+d*q,o[5]=h*w+f*C+u*U+d*Y,o[9]=h*M+f*D+u*k+d*J,o[13]=h*E+f*P+u*H+d*it,o[2]=g*y+_*A+p*L+m*q,o[6]=g*w+_*C+p*U+m*Y,o[10]=g*M+_*D+p*k+m*J,o[14]=g*E+_*P+p*H+m*it,o[3]=v*y+S*A+x*L+b*q,o[7]=v*w+S*C+x*U+b*Y,o[11]=v*M+S*D+x*k+b*J,o[15]=v*E+S*P+x*H+b*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15],v=l*d-c*u,S=a*d-c*f,x=a*u-l*f,b=r*d-c*h,y=r*u-l*h,w=r*f-a*h;return e*(_*v-p*S+m*x)-n*(g*v-p*b+m*y)+s*(g*S-_*b+m*w)-o*(g*x-_*y+p*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-a*c)-n*(o*h-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=e*a-n*r,S=e*l-s*r,x=e*c-o*r,b=n*l-s*a,y=n*c-o*a,w=s*c-o*l,M=h*_-f*g,E=h*p-u*g,A=h*m-d*g,C=f*p-u*_,D=f*m-d*_,P=u*m-d*p,L=v*P-S*D+x*C+b*A-y*E+w*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return t[0]=(a*P-l*D+c*C)*U,t[1]=(s*D-n*P-o*C)*U,t[2]=(_*w-p*y+m*b)*U,t[3]=(u*y-f*w-d*b)*U,t[4]=(l*A-r*P-c*E)*U,t[5]=(e*P-s*A+o*E)*U,t[6]=(p*x-g*w-m*S)*U,t[7]=(h*w-u*x+d*S)*U,t[8]=(r*D-a*A+c*M)*U,t[9]=(n*A-e*D-o*M)*U,t[10]=(g*y-_*x+m*v)*U,t[11]=(f*x-h*y-d*v)*U,t[12]=(a*E-r*C-l*M)*U,t[13]=(e*C-n*E+s*M)*U,t[14]=(_*S-g*b-p*v)*U,t[15]=(h*b-f*S+u*v)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,u=o*c,d=o*h,g=o*f,_=r*h,p=r*f,m=a*f,v=l*c,S=l*h,x=l*f,b=n.x,y=n.y,w=n.z;return s[0]=(1-(_+m))*b,s[1]=(d+x)*b,s[2]=(g-S)*b,s[3]=0,s[4]=(d-x)*y,s[5]=(1-(u+m))*y,s[6]=(p+v)*y,s[7]=0,s[8]=(g+S)*w,s[9]=(p-v)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=bs.set(s[0],s[1],s[2]).length();const a=bs.set(s[4],s[5],s[6]).length(),l=bs.set(s[8],s[9],s[10]).length();o<0&&(r=-r),zn.copy(this);const c=1/r,h=1/a,f=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,e.setFromRotationMatrix(zn),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=Wn,l=!1){const c=this.elements,h=2*o/(e-t),f=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let g,_;if(l)g=o/(r-o),_=r*o/(r-o);else if(a===Wn)g=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===so)g=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Wn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,_;if(l)g=1/(r-o),_=r/(r-o);else if(a===Wn)g=-2/(r-o),_=-(r+o)/(r-o);else if(a===so)g=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};tc.prototype.isMatrix4=!0;let Me=tc;const bs=new z,zn=new Me,Ld=new z(0,0,0),Dd=new z(1,1,1),Fi=new z,Mr=new z,Sn=new z,N0=new Me,F0=new Ri;class ui{constructor(t=0,e=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return N0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(N0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return F0.setFromEuler(this),this.setFromQuaternion(F0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Id=0;const O0=new z,ys=new Ri,gi=new Me,Sr=new z,mo=new z,Ud=new z,Nd=new Ri,B0=new z(1,0,0),z0=new z(0,1,0),k0=new z(0,0,1),H0={type:"added"},Fd={type:"removed"},ws={type:"childadded",child:null},Cc={type:"childremoved",child:null};class Ae extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new z,e=new ui,n=new Ri,s=new z(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new Jt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(B0,t)}rotateY(t){return this.rotateOnAxis(z0,t)}rotateZ(t){return this.rotateOnAxis(k0,t)}translateOnAxis(t,e){return O0.copy(t).applyQuaternion(this.quaternion),this.position.add(O0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(B0,t)}translateY(t){return this.translateOnAxis(z0,t)}translateZ(t){return this.translateOnAxis(k0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(mo,Sr,this.up):gi.lookAt(Sr,mo,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(gi),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H0),ws.child=t,this.dispatchEvent(ws),ws.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),Cc.child=t,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H0),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ae.DEFAULT_UP=new z(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _e extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Od={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},br={h:0,s:0,l:0};function Pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Kl(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Pc(r,o,t+1/3),this.g=Pc(r,o,t),this.b=Pc(r,o,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(o){o!==void 0&&parseFloat(o)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return re.workingToColorSpace($e.copy(this),t),Math.round(te($e.r*255,0,255))*65536+Math.round(te($e.g*255,0,255))*256+Math.round(te($e.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,o=$e.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Qe){re.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(br);const n=Xo(Oi.h,br.h,e),s=Xo(Oi.s,br.s,e),o=Xo(Oi.l,br.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const $e=new Yt;Yt.NAMES=ef;class fc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new fc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jl extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const kn=new z,_i=new z,Lc=new z,xi=new z,Es=new z,Ts=new z,G0=new z,Dc=new z,Ic=new z,Uc=new z,Nc=new Te,Fc=new Te,Oc=new Te;class Dn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){kn.subVectors(s,e),_i.subVectors(n,e),Lc.subVectors(t,e);const r=kn.dot(kn),a=kn.dot(_i),l=kn.dot(Lc),c=_i.dot(_i),h=_i.dot(Lc),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,xi.x),l.addScaledVector(r,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Nc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Nc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Nc,o.x),r.addScaledVector(Fc,o.y),r.addScaledVector(Oc,o.z),r}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),_i.subVectors(t,e),kn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),kn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Es.subVectors(s,n),Ts.subVectors(o,n),Dc.subVectors(t,n);const l=Es.dot(Dc),c=Ts.dot(Dc);if(l<=0&&c<=0)return e.copy(n);Ic.subVectors(t,s);const h=Es.dot(Ic),f=Ts.dot(Ic);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Es,r);Uc.subVectors(t,o);const d=Es.dot(Uc),g=Ts.dot(Uc);if(g>=0&&d<=g)return e.copy(o);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ts,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return G0.subVectors(o,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(G0,a);const m=1/(p+_+u);return r=_*m,a=u*m,e.copy(n).addScaledVector(Es,r).addScaledVector(Ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Qi{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Hn):Hn.fromBufferAttribute(o,r),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),wr.subVectors(this.max,go),As.subVectors(t.a,go),Rs.subVectors(t.b,go),Cs.subVectors(t.c,go),Bi.subVectors(Rs,As),zi.subVectors(Cs,Rs),es.subVectors(As,Cs);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-es.z,es.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,es.z,0,-es.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-es.y,es.x,0];return!Bc(e,As,Rs,Cs,wr)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,As,Rs,Cs,wr))?!1:(Er.crossVectors(Bi,zi),e=[Er.x,Er.y,Er.z],Bc(e,As,Rs,Cs,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vi=[new z,new z,new z,new z,new z,new z,new z,new z],Hn=new z,yr=new Qi,As=new z,Rs=new z,Cs=new z,Bi=new z,zi=new z,es=new z,go=new z,wr=new z,Er=new z,ns=new z;function Bc(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ns.fromArray(i,o);const a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ne=new z,Tr=new St;let Bd=0;class On extends Pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),o=on(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class t0 extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class e0 extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}}const zd=new Qi,_o=new z,zc=new z;class co{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);const e=_o.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_o,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(zc)),this.expandByPoint(_o.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let kd=0;const An=new Me,kc=new Ae,Ps=new z,bn=new Qi,xo=new Qi,He=new z;class Pe extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ld(t)?e0:t0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];bn.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(bn.min,xo.min),bn.expandByPoint(He),He.addVectors(bn.max,xo.max),bn.expandByPoint(He)):(bn.expandByPoint(xo.min),bn.expandByPoint(xo.max))}bn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)He.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(He));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(t,c),He.add(Ps)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new z,l[M]=new z;const c=new z,h=new z,f=new z,u=new St,d=new St,g=new St,_=new z,p=new z;function m(M,E,A){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,A),u.fromBufferAttribute(o,M),d.fromBufferAttribute(o,E),g.fromBufferAttribute(o,A),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(C),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[M].add(_),a[E].add(_),a[A].add(_),l[M].add(p),l[E].add(p),l[A].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let M=0,E=v.length;M<E;++M){const A=v[M],C=A.start,D=A.count;for(let P=C,L=C+D;P<L;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const S=new z,x=new z,b=new z,y=new z;function w(M){b.fromBufferAttribute(s,M),y.copy(b);const E=a[M];S.copy(E),S.sub(b.multiplyScalar(b.dot(E))).normalize(),x.crossVectors(y,E);const C=x.dot(l[M])<0?-1:1;r.setXYZW(M,S.x,S.y,S.z,C)}for(let M=0,E=v.length;M<E;++M){const A=v[M],C=A.start,D=A.count;for(let P=C,L=C+D;P<L;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new z,o=new z,r=new z,a=new z,l=new z,c=new z,h=new z,f=new z;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new On(u,h,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new z,Hd=new z,Gd=new Jt;class ii{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Hc.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Hc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(Hc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Vd=0;class gs extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=qs,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new St().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Mi=new z,Gc=new z,Ar=new z,Rr=new z;class n0{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gc.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),Rr.copy(this.origin).sub(Gc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ar),a=Rr.dot(this.direction),l=-Rr.dot(Ar),c=Rr.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*l-a,u=r*a-l,g=o*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Gc).addScaledVector(Ar,u),d}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);const n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-r.x,u=t.y-r.y,d=t.z-r.z,g=e.x-r.x,_=e.y-r.y,p=e.z-r.z,m=n.x-r.x,v=n.y-r.y,S=n.z-r.z,x=Math.abs(l),b=Math.abs(c),y=Math.abs(h);let w,M,E,A,C,D,P,L,U,k,H,q;if(x>=b&&x>=y?(E=l,D=f,U=g,q=m,l>=0?(w=c,M=h,A=u,C=d,P=_,L=p,k=v,H=S):(w=h,M=c,A=d,C=u,P=p,L=_,k=S,H=v)):b>=y?(E=c,D=u,U=_,q=v,c>=0?(w=h,M=l,A=d,C=f,P=p,L=g,k=S,H=m):(w=l,M=h,A=f,C=d,P=g,L=p,k=m,H=S)):(E=h,D=d,U=p,q=S,h>=0?(w=l,M=c,A=f,C=u,P=g,L=_,k=m,H=v):(w=c,M=l,A=u,C=f,P=_,L=g,k=v,H=m)),E===0)return null;const Y=w/E,J=M/E,it=1/E,yt=A-Y*D,vt=C-J*D,Wt=P-Y*U,gt=L-J*U,mt=k-Y*q,V=H-J*q,N=mt*gt-V*Wt,Z=yt*V-vt*mt,dt=Wt*vt-gt*yt;if(s){if(N<0||Z<0||dt<0)return null}else if((N<0||Z<0||dt<0)&&(N>0||Z>0||dt>0))return null;const st=N+Z+dt;if(st===0)return null;const ut=it*(N*D+Z*U+dt*q);return(st>0?ut<0:ut>0)?null:this.at(ut/st,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ji extends gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=mr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const V0=new Me,is=new n0,Cr=new co,W0=new z,Pr=new z,Lr=new z,Dr=new z,Vc=new z,Ir=new z,X0=new z,Ur=new z;class xe extends Ae{constructor(t=new Pe,e=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ir.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(Vc.fromBufferAttribute(f,t),r?Ir.addScaledVector(Vc,h):Ir.addScaledVector(Vc.sub(e),h))}e.add(Ir)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(o),is.copy(t.ray).recast(t.near),!(Cr.containsPoint(is.origin)===!1&&(is.intersectSphere(Cr,W0)===null||is.origin.distanceToSquared(W0)>(t.far-t.near)**2))&&(V0.copy(o).invert(),is.copy(t.ray).applyMatrix4(V0),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=v,b=S;x<b;x+=3){const y=a.getX(x),w=a.getX(x+1),M=a.getX(x+2);s=Nr(this,m,t,n,c,h,f,y,w,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);s=Nr(this,r,t,n,c,h,f,v,S,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],v=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=v,b=S;x<b;x+=3){const y=x,w=x+1,M=x+2;s=Nr(this,m,t,n,c,h,f,y,w,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const v=p,S=p+1,x=p+2;s=Nr(this,r,t,n,c,h,f,v,S,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Wd(i,t,e,n,s,o,r,a){let l;if(t.side===fn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Xn,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:i}}function Nr(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Dr);const h=Wd(i,t,e,n,Pr,Lr,Dr,X0);if(h){const f=new z;Dn.getBarycoord(X0,Pr,Lr,Dr,f),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,l,c,f,new St)),o&&(h.uv1=Dn.getInterpolatedAttribute(o,a,l,c,f,new St)),r&&(h.normal=Dn.getInterpolatedAttribute(r,a,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new z,materialIndex:0};Dn.getNormal(Pr,Lr,Dr,u.normal),h.face=u,h.barycoord=f}return h}class dc extends We{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Ve,h=Ve,f,u){super(null,r,a,l,c,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends On{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ls=new Me,q0=new Me,Fr=[],Y0=new Qi,Xd=new Me,vo=new xe,Mo=new co;class Ci extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),Y0.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Y0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new co),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),Mo.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Mo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),t.ray.intersectsSphere(Mo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ls),q0.multiplyMatrices(n,Ls),vo.matrixWorld=q0,vo.raycast(t,Fr);for(let r=0,a=Fr.length;r<a;r++){const l=Fr[r];l.instanceId=o,l.object=this,e.push(l)}Fr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dc(new Float32Array(s*this.count),s,this.count,oc,In));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ss=new co,qd=new St(.5,.5),Or=new z;class pc{constructor(t=new ii,e=new ii,n=new ii,s=new ii,o=new ii,r=new ii){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],f=o[5],u=o[6],d=o[7],g=o[8],_=o[9],p=o[10],m=o[11],v=o[12],S=o[13],x=o[14],b=o[15];if(s[0].setComponents(c-r,d-h,m-g,b-v).normalize(),s[1].setComponents(c+r,d+h,m+g,b+v).normalize(),s[2].setComponents(c+a,d+f,m+_,b+S).normalize(),s[3].setComponents(c-a,d-f,m-_,b-S).normalize(),n)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(c-l,d-u,m-p,b-x).normalize();else if(s[4].setComponents(c-l,d-u,m-p,b-x).normalize(),e===Wn)s[5].setComponents(c+l,d+u,m+p,b+x).normalize();else if(e===so)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);const e=qd.distanceTo(t.center);return ss.radius=.7071067811865476+e,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i0 extends We{constructor(t=[],e=Ki,n,s,o,r,a,l,c,h){super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nf extends We{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends We{constructor(t,e,n=Zn,s,o,r,a=Ve,l=Ve,c,h=hi,f=1){if(h!==hi&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class sf extends oo{constructor(t,e=Zn,n=Ki,s,o,r=Ve,a=Ve,l,c=hi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,o,r,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class s0 extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class we extends Pe{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function g(_,p,m,v,S,x,b,y,w,M,E){const A=x/w,C=b/M,D=x/2,P=b/2,L=y/2,U=w+1,k=M+1;let H=0,q=0;const Y=new z;for(let J=0;J<k;J++){const it=J*C-P;for(let yt=0;yt<U;yt++){const vt=yt*A-D;Y[_]=vt*v,Y[p]=it*S,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=y>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(yt/w),f.push(1-J/M),H+=1}}for(let J=0;J<M;J++)for(let it=0;it<w;it++){const yt=u+it+U*J,vt=u+it+U*(J+1),Wt=u+(it+1)+U*(J+1),gt=u+(it+1)+U*J;l.push(yt,vt,gt),l.push(vt,Wt,gt),q+=6}a.addGroup(d,q,E),d+=q,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class lo extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new z,h=new St;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class En extends Pe{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let g=0;const _=[],p=n/2;let m=0;v(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function v(){const x=new z,b=new z;let y=0;const w=(e-t)/n;for(let M=0;M<=o;M++){const E=[],A=M/o,C=A*(e-t)+t;for(let D=0;D<=s;D++){const P=D/s,L=P*l+a,U=Math.sin(L),k=Math.cos(L);b.x=C*U,b.y=-A*n+p,b.z=C*k,f.push(b.x,b.y,b.z),x.set(U,w,k).normalize(),u.push(x.x,x.y,x.z),d.push(P,1-A),E.push(g++)}_.push(E)}for(let M=0;M<s;M++)for(let E=0;E<o;E++){const A=_[E][M],C=_[E+1][M],D=_[E+1][M+1],P=_[E][M+1];(t>0||E!==0)&&(h.push(A,C,P),y+=3),(e>0||E!==o-1)&&(h.push(C,D,P),y+=3)}c.addGroup(m,y,0),m+=y}function S(x){const b=g,y=new St,w=new z;let M=0;const E=x===!0?t:e,A=x===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,p*A,0),u.push(0,A,0),d.push(.5,.5),g++;const C=g;for(let D=0;D<=s;D++){const L=D/s*l+a,U=Math.cos(L),k=Math.sin(L);w.x=E*k,w.y=p*A,w.z=E*U,f.push(w.x,w.y,w.z),u.push(0,A,0),y.x=U*.5+.5,y.y=k*.5*A+.5,d.push(y.x,y.y),g++}for(let D=0;D<s;D++){const P=b+D,L=C+D;x===!0?h.push(L,L+1,P):h.push(L+1,L,P),M+=3}c.addGroup(m,M,x===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mc extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(o.slice(),3)),this.setAttribute("uv",new oe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new z,x=new z,b=new z;for(let y=0;y<e.length;y+=3)d(e[y+0],S),d(e[y+1],x),d(e[y+2],b),l(S,x,b,v)}function l(v,S,x,b){const y=b+1,w=[];for(let M=0;M<=y;M++){w[M]=[];const E=v.clone().lerp(x,M/y),A=S.clone().lerp(x,M/y),C=y-M;for(let D=0;D<=C;D++)D===0&&M===y?w[M][D]=E:w[M][D]=E.clone().lerp(A,D/C)}for(let M=0;M<y;M++)for(let E=0;E<2*(y-M)-1;E++){const A=Math.floor(E/2);E%2===0?(u(w[M][A+1]),u(w[M+1][A]),u(w[M][A])):(u(w[M][A+1]),u(w[M+1][A+1]),u(w[M+1][A]))}}function c(v){const S=new z;for(let x=0;x<o.length;x+=3)S.x=o[x+0],S.y=o[x+1],S.z=o[x+2],S.normalize().multiplyScalar(v),o[x+0]=S.x,o[x+1]=S.y,o[x+2]=S.z}function h(){const v=new z;for(let S=0;S<o.length;S+=3){v.x=o[S+0],v.y=o[S+1],v.z=o[S+2];const x=p(v)/2/Math.PI+.5,b=m(v)/Math.PI+.5;r.push(x,1-b)}g(),f()}function f(){for(let v=0;v<r.length;v+=6){const S=r[v+0],x=r[v+2],b=r[v+4],y=Math.max(S,x,b),w=Math.min(S,x,b);y>.9&&w<.1&&(S<.2&&(r[v+0]+=1),x<.2&&(r[v+2]+=1),b<.2&&(r[v+4]+=1))}}function u(v){o.push(v.x,v.y,v.z)}function d(v,S){const x=v*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const v=new z,S=new z,x=new z,b=new z,y=new St,w=new St,M=new St;for(let E=0,A=0;E<o.length;E+=9,A+=6){v.set(o[E+0],o[E+1],o[E+2]),S.set(o[E+3],o[E+4],o[E+5]),x.set(o[E+6],o[E+7],o[E+8]),y.set(r[A+0],r[A+1]),w.set(r[A+2],r[A+3]),M.set(r[A+4],r[A+5]),b.copy(v).add(S).add(x).divideScalar(3);const C=p(b);_(y,A+0,v,C),_(w,A+2,S,C),_(M,A+4,x,C)}}function _(v,S,x,b){b<0&&v.x===1&&(r[S]=v.x-1),x.x===0&&x.z===0&&(r[S]=b/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.vertices,t.indices,t.radius,t.detail)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new St:new z);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new z,s=[],o=[],r=[],a=new z,l=new Me;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new z)}o[0]=new z,r[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(te(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(te(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gc extends Kn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class of extends gc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function o0(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Z0=new z,$0=new z,Wc=new o0,Xc=new o0,qc=new o0;class r0 extends Kn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:($0.subVectors(s[0],s[1]).add(s[0]),c=$0);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Z0.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Z0),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Wc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,p),Xc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,p),qc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Xc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),qc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Wc.calc(l),Xc.calc(l),qc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function K0(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Yd(i,t){const e=1-i;return e*e*t}function Zd(i,t){return 2*(1-i)*i*t}function $d(i,t){return i*i*t}function qo(i,t,e,n){return Yd(i,t)+Zd(i,e)+$d(i,n)}function Kd(i,t){const e=1-i;return e*e*e*t}function Jd(i,t){const e=1-i;return 3*e*e*i*t}function Qd(i,t){return 3*(1-i)*i*i*t}function jd(i,t){return i*i*i*t}function Yo(i,t,e,n,s){return Kd(i,t)+Jd(i,e)+Qd(i,n)+jd(i,s)}class a0 extends Kn{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Yo(t,s.x,o.x,r.x,a.x),Yo(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rf extends Kn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Yo(t,s.x,o.x,r.x,a.x),Yo(t,s.y,o.y,r.y,a.y),Yo(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class c0 extends Kn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends Kn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class l0 extends Kn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(qo(t,s.x,o.x,r.x),qo(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h0 extends Kn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(qo(t,s.x,o.x,r.x),qo(t,s.y,o.y,r.y),qo(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class u0 extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(K0(a,l.x,c.x,h.x,f.x),K0(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:of,CatmullRomCurve3:r0,CubicBezierCurve:a0,CubicBezierCurve3:rf,EllipseCurve:gc,LineCurve:c0,LineCurve3:af,QuadraticBezierCurve:l0,QuadraticBezierCurve3:h0,SplineCurve:u0});class cf extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Za[s.type]().fromJSON(s))}return this}}class xl extends cf{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new c0(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new l0(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new a0(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new u0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new gc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _c extends xl{constructor(t){super(t),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new xl().fromJSON(s))}return this}}function tp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=lf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=op(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){const d=i[u],g=i[u+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return cr(o,r,e,a,l,c,0),r}function lf(i,t,e,n,s){let o;if(s===gp(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=J0(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=J0(r/n|0,i[r],i[r+1],o);return o&&ro(o,o.next)&&(hr(o),o=o.next),o}function ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ro(e,e.next)||Ce(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&hp(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?np(i,n,s,o):ep(i)){t.push(l.i,i.i,c.i),hr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=ip(ps(i),t),cr(i,t,e,n,s,o,2)):r===2&&sp(i,t,e,n,s,o):cr(ps(i),t,e,n,s,o,1);break}}}function ep(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,o,r),f=Math.min(a,l,c),u=Math.max(s,o,r),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ao(s,a,o,l,r,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function np(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ce(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,u=r.y,d=Math.min(a,l,c),g=Math.min(h,f,u),_=Math.max(a,l,c),p=Math.max(h,f,u),m=vl(d,g,t,e,n),v=vl(_,p,t,e,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=m&&x&&x.z<=v;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==r&&Ao(a,h,l,f,c,u,S.x,S.y)&&Ce(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==r&&Ao(a,h,l,f,c,u,x.x,x.y)&&Ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==r&&Ao(a,h,l,f,c,u,S.x,S.y)&&Ce(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==r&&Ao(a,h,l,f,c,u,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ip(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ro(n,s)&&uf(n,e,e.next,s)&&lr(n,s)&&lr(s,n)&&(t.push(n.i,e.i,s.i),hr(e),hr(e.next),e=i=s),e=e.next}while(e!==i);return ps(e)}function sp(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&dp(r,a)){let l=ff(r,a);r=ps(r,r.next),l=ps(l,l.next),cr(r,t,e,n,s,o,0),cr(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function op(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=lf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(fp(c))}s.sort(rp);for(let o=0;o<s.length;o++)e=ap(s[o],e);return e}function rp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ap(i,t){const e=cp(i,t);if(!e)return t;const n=ff(e,i);return ps(n,n.next),ps(e,e.next)}function cp(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(ro(i,e))return e;do{if(ro(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&hf(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);lr(e,i)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&lp(r,e)))&&(r=e,h=f)}e=e.next}while(e!==a);return r}function lp(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function hp(i,t,e,n){let s=i;do s.z===0&&(s.z=vl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,up(s)}function up(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function vl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function fp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hf(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Ao(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&hf(i,t,e,n,s,o,r,a)}function dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!pp(i,t)&&(lr(i,t)&&lr(t,i)&&mp(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||ro(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ro(i,t){return i.x===t.x&&i.y===t.y}function uf(i,t,e,n){const s=zr(Ce(i,t,e)),o=zr(Ce(i,t,n)),r=zr(Ce(e,n,i)),a=zr(Ce(e,n,t));return!!(s!==o&&r!==a||s===0&&Br(i,e,t)||o===0&&Br(i,n,t)||r===0&&Br(e,i,n)||a===0&&Br(e,t,n))}function Br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zr(i){return i>0?1:i<0?-1:0}function pp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function mp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ff(i,t){const e=Ml(i.i,i.x,i.y),n=Ml(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function J0(i,t,e,n){const s=Ml(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gp(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class _p{static triangulate(t,e,n=2){return tp(t,e,n)}}class Ei{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ei.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Q0(t),j0(n,t);let r=t.length;e.forEach(Q0);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,j0(n,e[l]);const a=_p.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Q0(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function j0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class _r extends Pe{constructor(t=new _c([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:xp;let S,x=!1,b,y,w,M;if(m){S=m.getSpacedPoints(h),x=!0,u=!1;const F=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,F),y=new z,w=new z,M=new z}u||(p=0,d=0,g=0,_=0);const E=a.extractPoints(c);let A=E.shape;const C=E.holes;if(!Ei.isClockWise(A)){A=A.reverse();for(let F=0,K=C.length;F<K;F++){const ot=C[F];Ei.isClockWise(ot)&&(C[F]=ot.reverse())}}function P(F){const ot=10000000000000001e-36;let at=F[0];for(let ft=1;ft<=F.length;ft++){const Tt=ft%F.length,Dt=F[Tt],Ut=Dt.x-at.x,kt=Dt.y-at.y,O=Ut*Ut+kt*kt,ee=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(at.x),Math.abs(at.y)),$t=ot*ee*ee;if(O<=$t){F.splice(Tt,1),ft--;continue}at=Dt}}P(A),C.forEach(P);const L=C.length,U=A;for(let F=0;F<L;F++){const K=C[F];A=A.concat(K)}function k(F,K,ot){return K||ce("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(K,ot)}const H=A.length;function q(F,K,ot){let at,ft,Tt;const Dt=F.x-K.x,Ut=F.y-K.y,kt=ot.x-F.x,O=ot.y-F.y,ee=Dt*Dt+Ut*Ut,$t=Dt*O-Ut*kt;if(Math.abs($t)>Number.EPSILON){const I=Math.sqrt(ee),T=Math.sqrt(kt*kt+O*O),$=K.x-Ut/I,j=K.y+Dt/I,ct=ot.x-O/T,bt=ot.y+kt/T,wt=((ct-$)*O-(bt-j)*kt)/(Dt*O-Ut*kt);at=$+Dt*wt-F.x,ft=j+Ut*wt-F.y;const ht=at*at+ft*ft;if(ht<=2)return new St(at,ft);Tt=Math.sqrt(ht/2)}else{let I=!1;Dt>Number.EPSILON?kt>Number.EPSILON&&(I=!0):Dt<-Number.EPSILON?kt<-Number.EPSILON&&(I=!0):Math.sign(Ut)===Math.sign(O)&&(I=!0),I?(at=-Ut,ft=Dt,Tt=Math.sqrt(ee)):(at=Dt,ft=Ut,Tt=Math.sqrt(ee/2))}return new St(at/Tt,ft/Tt)}const Y=[];for(let F=0,K=U.length,ot=K-1,at=F+1;F<K;F++,ot++,at++)ot===K&&(ot=0),at===K&&(at=0),Y[F]=q(U[F],U[ot],U[at]);const J=[];let it,yt=Y.concat();for(let F=0,K=L;F<K;F++){const ot=C[F];it=[];for(let at=0,ft=ot.length,Tt=ft-1,Dt=at+1;at<ft;at++,Tt++,Dt++)Tt===ft&&(Tt=0),Dt===ft&&(Dt=0),it[at]=q(ot[at],ot[Tt],ot[Dt]);J.push(it),yt=yt.concat(it)}let vt;if(p===0)vt=Ei.triangulateShape(U,C);else{const F=[],K=[];for(let ot=0;ot<p;ot++){const at=ot/p,ft=d*Math.cos(at*Math.PI/2),Tt=g*Math.sin(at*Math.PI/2)+_;for(let Dt=0,Ut=U.length;Dt<Ut;Dt++){const kt=k(U[Dt],Y[Dt],Tt);Z(kt.x,kt.y,-ft),at===0&&F.push(kt)}for(let Dt=0,Ut=L;Dt<Ut;Dt++){const kt=C[Dt];it=J[Dt];const O=[];for(let ee=0,$t=kt.length;ee<$t;ee++){const I=k(kt[ee],it[ee],Tt);Z(I.x,I.y,-ft),at===0&&O.push(I)}at===0&&K.push(O)}}vt=Ei.triangulateShape(F,K)}const Wt=vt.length,gt=g+_;for(let F=0;F<H;F++){const K=u?k(A[F],yt[F],gt):A[F];x?(w.copy(b.normals[0]).multiplyScalar(K.x),y.copy(b.binormals[0]).multiplyScalar(K.y),M.copy(S[0]).add(w).add(y),Z(M.x,M.y,M.z)):Z(K.x,K.y,0)}for(let F=1;F<=h;F++)for(let K=0;K<H;K++){const ot=u?k(A[K],yt[K],gt):A[K];x?(w.copy(b.normals[F]).multiplyScalar(ot.x),y.copy(b.binormals[F]).multiplyScalar(ot.y),M.copy(S[F]).add(w).add(y),Z(M.x,M.y,M.z)):Z(ot.x,ot.y,f/h*F)}for(let F=p-1;F>=0;F--){const K=F/p,ot=d*Math.cos(K*Math.PI/2),at=g*Math.sin(K*Math.PI/2)+_;for(let ft=0,Tt=U.length;ft<Tt;ft++){const Dt=k(U[ft],Y[ft],at);Z(Dt.x,Dt.y,f+ot)}for(let ft=0,Tt=C.length;ft<Tt;ft++){const Dt=C[ft];it=J[ft];for(let Ut=0,kt=Dt.length;Ut<kt;Ut++){const O=k(Dt[Ut],it[Ut],at);x?Z(O.x,O.y+S[h-1].y,S[h-1].x+ot):Z(O.x,O.y,f+ot)}}}mt(),V();function mt(){const F=s.length/3;if(u){let K=0,ot=H*K;for(let at=0;at<Wt;at++){const ft=vt[at];dt(ft[2]+ot,ft[1]+ot,ft[0]+ot)}K=h+p*2,ot=H*K;for(let at=0;at<Wt;at++){const ft=vt[at];dt(ft[0]+ot,ft[1]+ot,ft[2]+ot)}}else{for(let K=0;K<Wt;K++){const ot=vt[K];dt(ot[2],ot[1],ot[0])}for(let K=0;K<Wt;K++){const ot=vt[K];dt(ot[0]+H*h,ot[1]+H*h,ot[2]+H*h)}}n.addGroup(F,s.length/3-F,0)}function V(){const F=s.length/3;let K=0;N(U,K),K+=U.length;for(let ot=0,at=C.length;ot<at;ot++){const ft=C[ot];N(ft,K),K+=ft.length}n.addGroup(F,s.length/3-F,1)}function N(F,K){let ot=F.length;for(;--ot>=0;){const at=ot;let ft=ot-1;ft<0&&(ft=F.length-1);for(let Tt=0,Dt=h+p*2;Tt<Dt;Tt++){const Ut=H*Tt,kt=H*(Tt+1),O=K+at+Ut,ee=K+ft+Ut,$t=K+ft+kt,I=K+at+kt;st(O,ee,$t,I)}}}function Z(F,K,ot){l.push(F),l.push(K),l.push(ot)}function dt(F,K,ot){ut(F),ut(K),ut(ot);const at=s.length/3,ft=v.generateTopUV(n,s,at-3,at-2,at-1);Et(ft[0]),Et(ft[1]),Et(ft[2])}function st(F,K,ot,at){ut(F),ut(K),ut(at),ut(K),ut(ot),ut(at);const ft=s.length/3,Tt=v.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Et(Tt[0]),Et(Tt[1]),Et(Tt[3]),Et(Tt[1]),Et(Tt[2]),Et(Tt[3])}function ut(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Et(F){o.push(F.x),o.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Za[s.type]().fromJSON(s)),new _r(n,t.options)}}const xp={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new St(o,r),new St(a,l),new St(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[o*3],p=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new St(r,1-l),new St(c,1-f),new St(u,1-g),new St(_,1-m)]:[new St(a,1-l),new St(h,1-f),new St(d,1-g),new St(p,1-m)]}};function vp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _s extends mc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _s(t.radius,t.detail)}}class Li extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const v=m*u-r;for(let S=0;S<c;S++){const x=S*f-o;g.push(x,-v,0),_.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const S=v+c*m,x=v+c*(m+1),b=v+1+c*(m+1),y=v+1+c*m;d.push(S,x,y),d.push(x,b,y)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pn extends Pe{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new z,u=new z,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],S=m/n,x=r+S*a,b=t*Math.cos(x),y=Math.sqrt(t*t-b*b);let w=0;m===0&&r===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let M=0;M<=e;M++){const E=M/e,A=s+E*o;f.x=-y*Math.cos(A),f.y=b,f.z=y*Math.sin(A),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(E+w,1-S),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const S=h[m][v+1],x=h[m][v],b=h[m+1][v],y=h[m+1][v+1];(m!==0||r>0)&&d.push(S,x,y),(m!==n-1||l<Math.PI)&&d.push(x,b,y)}this.setIndex(d),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ci extends Pe{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new z,d=new z,g=new z;for(let _=0;_<=n;_++){const p=r+_/n*a;for(let m=0;m<=s;m++){const v=m/s*o;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){const m=(s+1)*_+p-1,v=(s+1)*(_-1)+p-1,S=(s+1)*(_-1)+p,x=(s+1)*_+p;l.push(m,v,x),l.push(v,S,x)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class xc extends Pe{constructor(t=new h0(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new z,l=new z,c=new St;let h=new z;const f=[],u=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function _(){for(let S=0;S<e;S++)p(S);p(o===!1?e:0),v(),m()}function p(S){h=t.getPointAt(S/e,h);const x=r.normals[S],b=r.binormals[S];for(let y=0;y<=s;y++){const w=y/s*Math.PI*2,M=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+M*b.x,l.y=E*x.y+M*b.y,l.z=E*x.z+M*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=e;S++)for(let x=1;x<=s;x++){const b=(s+1)*(S-1)+(x-1),y=(s+1)*S+(x-1),w=(s+1)*S+x,M=(s+1)*(S-1)+x;g.push(b,y,M),g.push(y,w,M)}}function v(){for(let S=0;S<=e;S++)for(let x=0;x<=s;x++)c.x=S/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new xc(new Za[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ao(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(th(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(th(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=ao(i[e]);for(const s in n)t[s]=n[s]}return t}function th(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function df(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const pf={clone:ao,merge:rn};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new St().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class mf extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zo extends gs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=mr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ne extends gs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=mr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gf extends gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _f extends gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(eh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!eh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function eh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class xf{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vf=new xf;class vc{constructor(t){this.manager=t!==void 0?t:vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}vc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class Mf extends vc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=oa.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let f=Ds.get(r);f===void 0&&(f=[],Ds.set(r,f)),f.push({onLoad:e,onError:s})}return r}const a=rr("img");function l(){h(),e&&e(this);const f=Ds.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Ds.delete(this),o.manager.itemEnd(t)}function c(f){h(),s&&s(f),oa.remove(`image:${t}`);const u=Ds.get(this)||[];for(let d=0;d<u.length;d++){const g=u[d];g.onError&&g.onError(f)}Ds.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),oa.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class Sf extends vc{constructor(t){super(t)}load(t,e,n,s){const o=new We,r=new Mf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class f0 extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class d0 extends f0{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Yc=new Me,nh=new z,ih=new z;class bf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Yc,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;t.coordinateSystem===so||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kr=new z,Hr=new Ri,jn=new z;class p0 extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kr,Hr,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Hr,jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kr,Hr,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Hr,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ki=new z,sh=new St,oh=new St;class je extends p0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,sh,oh),e.subVectors(oh,sh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Mc extends p0{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yp extends bf{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m0 extends f0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new yp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Is=-90,Us=1;class yf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(Is,Us,t,e);s.layers=this.layers,this.add(s);const o=new je(Is,Us,t,e);o.layers=this.layers,this.add(o);const r=new je(Is,Us,t,e);r.layers=this.layers,this.add(r);const a=new je(Is,Us,t,e);a.layers=this.layers,this.add(a);const l=new je(Is,Us,t,e);l.layers=this.layers,this.add(l);const c=new je(Is,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wf extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const E0=class E0{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};E0.prototype.isMatrix2=!0;let bl=E0;class Ef extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function rh(i,t,e,n){const s=wp(n);switch(e){case Zl:return i*t;case oc:return i*t/s.components*s.byteLength;case rc:return i*t/s.components*s.byteLength;case Ji:return i*t*2/s.components*s.byteLength;case ac:return i*t*2/s.components*s.byteLength;case $l:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case cc:return i*t*4/s.components*s.byteLength;case ko:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:case Sa:return Math.max(i,16)*Math.max(t,8)/4;case xa:case Ma:return Math.max(i,8)*Math.max(t,8)/2;case ba:case ya:case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:case er:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nr:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wp(i){switch(i){case _n:case Wl:return{byteLength:1,components:1};case no:case Xl:case $n:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case Zn:case nc:case In:return{byteLength:4,components:1};case ql:case Yl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);function Tf(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ep(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n1="gl_FragColor = linearToOutputTexel( gl_FragColor );",i1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
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
}`,p1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,x1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,w1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E1=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,C1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F1=`#if defined( USE_POINTS_UV )
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
#endif`,O1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
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
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,n2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,l2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,u2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d2=`#ifdef USE_SKINNING
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
#endif`,p2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m2=`#ifdef USE_SKINNING
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
#endif`,g2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v2=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S2=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A2=`uniform sampler2D t2D;
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
}`,R2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,I2=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U2=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,N2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,F2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k2=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,H2=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,G2=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,V2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,W2=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,X2=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,q2=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Y2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z2=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,$2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,K2=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,J2=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Q2=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,j2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,tm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,em=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,im=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,om=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Qt={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Lp,aomap_fragment:Dp,aomap_pars_fragment:Ip,batching_pars_vertex:Up,batching_vertex:Np,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Zp,common:$p,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:jp,emissivemap_fragment:t1,emissivemap_pars_fragment:e1,colorspace_fragment:n1,colorspace_pars_fragment:i1,envmap_fragment:s1,envmap_common_pars_fragment:o1,envmap_pars_fragment:r1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:x1,envmap_vertex:c1,fog_vertex:l1,fog_pars_vertex:h1,fog_fragment:u1,fog_pars_fragment:f1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:p1,lights_lambert_fragment:m1,lights_lambert_pars_fragment:g1,lights_pars_begin:_1,lights_toon_fragment:v1,lights_toon_pars_fragment:M1,lights_phong_fragment:S1,lights_phong_pars_fragment:b1,lights_physical_fragment:y1,lights_physical_pars_fragment:w1,lights_fragment_begin:E1,lights_fragment_maps:T1,lights_fragment_end:A1,lightprobes_pars_fragment:R1,logdepthbuf_fragment:C1,logdepthbuf_pars_fragment:P1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:D1,map_fragment:I1,map_pars_fragment:U1,map_particle_fragment:N1,map_particle_pars_fragment:F1,metalnessmap_fragment:O1,metalnessmap_pars_fragment:B1,morphinstance_vertex:z1,morphcolor_vertex:k1,morphnormal_vertex:H1,morphtarget_pars_vertex:G1,morphtarget_vertex:V1,normal_fragment_begin:W1,normal_fragment_maps:X1,normal_pars_fragment:q1,normal_pars_vertex:Y1,normal_vertex:Z1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:Q1,iridescence_pars_fragment:j1,opaque_fragment:t2,packing:e2,premultiplied_alpha_fragment:n2,project_vertex:i2,dithering_fragment:s2,dithering_pars_fragment:o2,roughnessmap_fragment:r2,roughnessmap_pars_fragment:a2,shadowmap_pars_fragment:c2,shadowmap_pars_vertex:l2,shadowmap_vertex:h2,shadowmask_pars_fragment:u2,skinbase_vertex:f2,skinning_pars_vertex:d2,skinning_vertex:p2,skinnormal_vertex:m2,specularmap_fragment:g2,specularmap_pars_fragment:_2,tonemapping_fragment:x2,tonemapping_pars_fragment:v2,transmission_fragment:M2,transmission_pars_fragment:S2,uv_pars_fragment:b2,uv_pars_vertex:y2,uv_vertex:w2,worldpos_vertex:E2,background_vert:T2,background_frag:A2,backgroundCube_vert:R2,backgroundCube_frag:C2,cube_vert:P2,cube_frag:L2,depth_vert:D2,depth_frag:I2,distance_vert:U2,distance_frag:N2,equirect_vert:F2,equirect_frag:O2,linedashed_vert:B2,linedashed_frag:z2,meshbasic_vert:k2,meshbasic_frag:H2,meshlambert_vert:G2,meshlambert_frag:V2,meshmatcap_vert:W2,meshmatcap_frag:X2,meshnormal_vert:q2,meshnormal_frag:Y2,meshphong_vert:Z2,meshphong_frag:$2,meshphysical_vert:K2,meshphysical_frag:J2,meshtoon_vert:Q2,meshtoon_frag:j2,points_vert:tm,points_frag:em,shadow_vert:nm,shadow_frag:im,sprite_vert:sm,sprite_frag:om},Pt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Vn={basic:{uniforms:rn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:rn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:rn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:rn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:rn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:rn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:rn([Pt.points,Pt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:rn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:rn([Pt.common,Pt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:rn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:rn([Pt.sprite,Pt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:rn([Pt.common,Pt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:rn([Pt.lights,Pt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Vn.physical={uniforms:rn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Gr={r:0,b:0,g:0},rm=new Me,Af=new Jt;Af.set(-1,0,0,0,1,0,0,0,1);function am(i,t,e,n,s,o){const r=new Yt(0);let a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const x=v.backgroundBlurriness>0;S=t.get(S,x)}return S}function g(v){let S=!1;const x=d(v);x===null?p(r,a):x&&x.isColor&&(p(x,1),S=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){const x=d(S);x&&(x.isCubeTexture||x.mapping===gr)?(c===void 0&&(c=new xe(new we(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ao(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Af),c.material.toneMapped=re.getTransfer(x.colorSpace)!==fe,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new xe(new Li(2,2),new Bn({name:"BackgroundMaterial",uniforms:ao(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=re.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(Gr,df(i)),e.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,S=1){r.set(v),a=S,p(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(r,a)},render:g,addToRenderList:_,dispose:m}}function cm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(C,D,P,L,U){let k=!1;const H=f(C,L,P,D);o!==H&&(o=H,c(o.object)),k=d(C,L,P,U),k&&g(C,L,P,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,x(C,D,P,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function f(C,D,P,L){const U=L.wireframe===!0;let k=n[D.id];k===void 0&&(k={},n[D.id]=k);const H=C.isInstancedMesh===!0?C.id:0;let q=k[H];q===void 0&&(q={},k[H]=q);let Y=q[P.id];Y===void 0&&(Y={},q[P.id]=Y);let J=Y[U];return J===void 0&&(J=u(l()),Y[U]=J),J}function u(C){const D=[],P=[],L=[];for(let U=0;U<e;U++)D[U]=0,P[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:L,object:C,attributes:{},index:null}}function d(C,D,P,L){const U=o.attributes,k=D.attributes;let H=0;const q=P.getAttributes();for(const Y in q)if(q[Y].location>=0){const it=U[Y];let yt=k[Y];if(yt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),it===void 0||it.attribute!==yt||yt&&it.data!==yt.data)return!0;H++}return o.attributesNum!==H||o.index!==L}function g(C,D,P,L){const U={},k=D.attributes;let H=0;const q=P.getAttributes();for(const Y in q)if(q[Y].location>=0){let it=k[Y];it===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(it=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(it=C.instanceColor));const yt={};yt.attribute=it,it&&it.data&&(yt.data=it.data),U[Y]=yt,H++}o.attributes=U,o.attributesNum=H,o.index=L}function _(){const C=o.newAttributes;for(let D=0,P=C.length;D<P;D++)C[D]=0}function p(C){m(C,0)}function m(C,D){const P=o.newAttributes,L=o.enabledAttributes,U=o.attributeDivisors;P[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),U[C]!==D&&(i.vertexAttribDivisor(C,D),U[C]=D)}function v(){const C=o.newAttributes,D=o.enabledAttributes;for(let P=0,L=D.length;P<L;P++)D[P]!==C[P]&&(i.disableVertexAttribArray(P),D[P]=0)}function S(C,D,P,L,U,k,H){H===!0?i.vertexAttribIPointer(C,D,P,U,k):i.vertexAttribPointer(C,D,P,L,U,k)}function x(C,D,P,L){_();const U=L.attributes,k=P.getAttributes(),H=D.defaultAttributeValues;for(const q in k){const Y=k[q];if(Y.location>=0){let J=U[q];if(J===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),J!==void 0){const it=J.normalized,yt=J.itemSize,vt=t.get(J);if(vt===void 0)continue;const Wt=vt.buffer,gt=vt.type,mt=vt.bytesPerElement,V=gt===i.INT||gt===i.UNSIGNED_INT||J.gpuType===nc;if(J.isInterleavedBufferAttribute){const N=J.data,Z=N.stride,dt=J.offset;if(N.isInstancedInterleavedBuffer){for(let st=0;st<Y.locationSize;st++)m(Y.location+st,N.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let st=0;st<Y.locationSize;st++)p(Y.location+st);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let st=0;st<Y.locationSize;st++)S(Y.location+st,yt/Y.locationSize,gt,it,Z*mt,(dt+yt/Y.locationSize*st)*mt,V)}else{if(J.isInstancedBufferAttribute){for(let N=0;N<Y.locationSize;N++)m(Y.location+N,J.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let N=0;N<Y.locationSize;N++)p(Y.location+N);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let N=0;N<Y.locationSize;N++)S(Y.location+N,yt/Y.locationSize,gt,it,yt*mt,yt/Y.locationSize*N*mt,V)}}else if(H!==void 0){const it=H[q];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Y.location,it);break;case 3:i.vertexAttrib3fv(Y.location,it);break;case 4:i.vertexAttrib4fv(Y.location,it);break;default:i.vertexAttrib1fv(Y.location,it)}}}}v()}function b(){E();for(const C in n){const D=n[C];for(const P in D){const L=D[P];for(const U in L){const k=L[U];for(const H in k)h(k[H].object),delete k[H];delete L[U]}}delete n[C]}}function y(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const P in D){const L=D[P];for(const U in L){const k=L[U];for(const H in k)h(k[H].object),delete k[H];delete L[U]}}delete n[C.id]}function w(C){for(const D in n){const P=n[D];for(const L in P){const U=P[L];if(U[C.id]===void 0)continue;const k=U[C.id];for(const H in k)h(k[H].object),delete k[H];delete U[C.id]}}}function M(C){for(const D in n){const P=n[D],L=C.isInstancedMesh===!0?C.id:0,U=P[L];if(U!==void 0){for(const k in U){const H=U[k];for(const q in H)h(H[q].object),delete H[q];delete U[k]}delete P[L],Object.keys(P).length===0&&delete n[D]}}}function E(){A(),r=!0,o!==s&&(o=s,c(o.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function lm(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function hm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const M=w===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==_n&&w!==In&&!M&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:b,samples:y}}function um(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new ii,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||o&&!p)o?h(null):c();else{const v=o?0:n,S=v*4;let x=m.clippingState||null;l.value=x,x=h(g,u,S,d);for(let b=0;b!==S;++b)x[b]=e[b];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,x=d;S!==_;++S,x+=4)r.copy(f[S]).applyMatrix4(v,a),r.normal.toArray(p,x),p[x+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const Xs=4,fm=6,dm=20,pm=256,So=new Mc,ah=new Yt;let Zc=null,$c=0,Kc=0,Jc=!1;const mm=new z,os=new z;class yl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=mm}=o;Zc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zc,$c,Kc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:$n,format:Un,colorSpace:sr,depthBuffer:!1},s=ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gm(o)),this._blurMaterial=xm(o,t,e),this._ggxMaterial=_m(o,t,e)}return s}_compileMaterial(t){const e=new xe(new Pe,t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,s,o){const l=new je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ah),f.toneMapping=qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new we,new ji({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,m=!0):(p.color.copy(ah),m=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[S],o.y,o.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[S],o.z)):(l.up.set(0,c[S],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[S]));const b=this._cubeSize;Ns(s,x*b,S>2?b:0,b,b),f.setRenderTarget(s),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ki||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,So)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Xs?n-g+Xs:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Ns(o,p,m,3*_,2*_),s.setRenderTarget(o),s.render(a,So),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=g-n,Ns(t,p,m,3*_,2*_),s.setRenderTarget(t),s.render(a,So)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-Xs?s-this._lodMax+Xs:0),u=4*(this._cubeSize-h);Ns(e,f,u,3*h,2*h),r.setRenderTarget(e),r.render(l,So)}}function gm(i){const t=[],e=[];let n=i;const s=i-Xs+1+fm;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let m=0;m<f;m++){const v=m%3*2/3-1,S=m>2?0:-1,x=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(x,d*u*m);for(let b=0;b<u;b++){const y=h[b*2]*2-1,w=h[b*2+1]*2-1;m===0?os.set(1,w,y):m===1?os.set(-y,1,-w):m===2?os.set(-y,w,1):m===3?os.set(-1,w,-y):m===4?os.set(-y,-1,w):os.set(y,w,-1),os.toArray(_,(m*u+b)*d)}}const p=new Pe;p.setAttribute("position",new On(g,d)),p.setAttribute("outputDirection",new On(_,d)),e.push(new xe(p,null)),n>Xs&&n--}return{lodMeshes:e,sizeLods:t}}function ch(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _m(i,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function xm(i,t,e){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:dm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function lh(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function hh(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class g0 extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new i0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),o=new Bn({name:"CubemapFromEquirect",uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ai});o.uniforms.tEquirect.value=e;const r=new xe(s,o),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=qe),new yf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function vm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?r(u):o(u)}function o(u){if(u&&u.isTexture){const d=u.mapping;if(d===zo||d===ea)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new g0(g.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,g=d===zo||d===ea,_=d===Ki||d===ds;if(g||_){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new yl(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new yl(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===zo?u.mapping=Ki:d===ea&&(u.mapping=ds),u}function l(u){let d=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Mm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function Sm(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let S=0,x=v.length;S<x;S+=3){const b=v[S+0],y=v[S+1],w=v[S+2];u.push(b,y,y,w,w,b)}}else{const v=g.array;_=g.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const b=S+0,y=S+1,w=S+2;u.push(b,y,y,w,w,b)}}const p=new(g.count>=65535?e0:t0)(u,1);p.version=_;const m=o.get(f);m&&t.remove(m),o.set(f,p)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function bm(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,u){i.drawElements(n,u,o,f*r),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,o,f*r,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,f,0,d);let _=0;for(let p=0;p<d;p++)_+=u[p];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ym(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:ce("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wm(i,t,e){const n=new WeakMap,s=new Te;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const y=new Float32Array(x*b*4*f),w=new Jl(y,x,b,f);w.type=In,w.needsUpdate=!0;const M=S*4;for(let A=0;A<f;A++){const C=p[A],D=m[A],P=v[A],L=x*b*4*A;for(let U=0;U<C.count;U++){const k=U*M;d===!0&&(s.fromBufferAttribute(C,U),y[L+k+0]=s.x,y[L+k+1]=s.y,y[L+k+2]=s.z,y[L+k+3]=0),g===!0&&(s.fromBufferAttribute(D,U),y[L+k+4]=s.x,y[L+k+5]=s.y,y[L+k+6]=s.z,y[L+k+7]=0),_===!0&&(s.fromBufferAttribute(P,U),y[L+k+8]=s.x,y[L+k+9]=s.y,y[L+k+10]=s.z,y[L+k+11]=P.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new St(x,b)},n.set(a,u),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Em(i,t,e,n,s){let o=new WeakMap;function r(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(o.get(u)!==h&&(t.update(u),o.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return u}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const Tm={[Fl]:"LINEAR_TONE_MAPPING",[Ol]:"REINHARD_TONE_MAPPING",[Bl]:"CINEON_TONE_MAPPING",[zl]:"ACES_FILMIC_TONE_MAPPING",[Hl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function Am(i,t,e,n,s,o){const r=new Fn(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Pe;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));const h=new mf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new xe(c,h),u=new Mc(-1,1,1,-1,0,1);let d=null,g=null,_=!1,p,m=null,v=[],S=!1;this.setSize=function(x,b){r.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let y=0;y<v.length;y++){const w=v[y];w.setSize&&w.setSize(x,b)}},this.setEffects=function(x){v=x,S=v.length>0&&v[0].isRenderPass===!0;const b=r.width,y=r.height;v.length>0&&a===null&&(a=new Fn(b,y,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(b,y,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){const M=v[w];M.setSize&&M.setSize(b,y)}},this.begin=function(x,b){if(_||x.toneMapping===qn&&v.length===0)return!1;if(m=b,b!==null){const y=b.width,w=b.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return S===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=qn,!0},this.hasRenderPass=function(){return S},this.end=function(x,b){x.toneMapping=p,_=!0;let y=r,w=a;for(let M=0;M<v.length;M++){const E=v[M];E.enabled!==!1&&(E.render(x,w,y,b),E.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,h.defines={},re.getTransfer(d)===fe&&(h.defines.SRGB_TRANSFER="");const M=Tm[g];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(m),x.render(f,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Rf=new We,wl=new oo(1,1),Cf=new Jl,Pf=new tf,Lf=new i0,uh=[],fh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function ho(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=uh[s];if(o===void 0&&(o=new Float32Array(s),uh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bc(i,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;mh.set(n),i.uniformMatrix2fv(this.addr,!1,mh),ke(e,n)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;ph.set(n),i.uniformMatrix3fv(this.addr,!1,ph),ke(e,n)}}function Um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),ke(e,n)}}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=e.isReversedDepthBuffer()?hc:lc,o=wl):o=Rf,e.setTexture2D(t||o,s)}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pf,s)}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lf,s)}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cf,s)}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Lm;case 35674:return Dm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return km;case 36295:return Hm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function Zm(i,t){i.uniform1fv(this.addr,t)}function $m(i,t){const e=ho(t,this.size,2);i.uniform2fv(this.addr,e)}function Km(i,t){const e=ho(t,this.size,3);i.uniform3fv(this.addr,e)}function Jm(i,t){const e=ho(t,this.size,4);i.uniform4fv(this.addr,e)}function Qm(i,t){const e=ho(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jm(i,t){const e=ho(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tg(i,t){const e=ho(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function eg(i,t){i.uniform1iv(this.addr,t)}function ng(i,t){i.uniform2iv(this.addr,t)}function ig(i,t){i.uniform3iv(this.addr,t)}function sg(i,t){i.uniform4iv(this.addr,t)}function og(i,t){i.uniform1uiv(this.addr,t)}function rg(i,t){i.uniform2uiv(this.addr,t)}function ag(i,t){i.uniform3uiv(this.addr,t)}function cg(i,t){i.uniform4uiv(this.addr,t)}function lg(i,t,e){const n=this.cache,s=t.length,o=bc(e,s);ze(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=wl:r=Rf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function hg(i,t,e){const n=this.cache,s=t.length,o=bc(e,s);ze(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Pf,o[r])}function ug(i,t,e){const n=this.cache,s=t.length,o=bc(e,s);ze(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Lf,o[r])}function fg(i,t,e){const n=this.cache,s=t.length,o=bc(e,s);ze(n,o)||(i.uniform1iv(this.addr,o),ke(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Cf,o[r])}function dg(i){switch(i){case 5126:return Zm;case 35664:return $m;case 35665:return Km;case 35666:return Jm;case 35674:return Qm;case 35675:return jm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return og;case 36294:return rg;case 36295:return ag;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}class pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}}class mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function gh(i,t){i.seq.push(t),i.map[t.id]=t}function _g(i,t,e){const n=i.name,s=n.length;for(Qc.lastIndex=0;;){const o=Qc.exec(n),r=Qc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){gh(e,c===void 0?new pg(a,i,t):new mg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new gg(a),gh(e,f)),e=f}}}class ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);_g(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function _h(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xg=37297;let vg=0;function Mg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const xh=new Jt;function Sg(i){re._getMatrix(xh,re.workingColorSpace,i);const t=`mat3( ${xh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Mg(i.getShaderSource(t),a)}else return o}function bg(i,t){const e=Sg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const yg={[Fl]:"Linear",[Ol]:"Reinhard",[Bl]:"Cineon",[zl]:"ACESFilmic",[Hl]:"AgX",[Gl]:"Neutral",[kl]:"Custom"};function wg(i,t){const e=yg[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vr=new z;function Eg(){re.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),t=Vr.y.toFixed(4),e=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function Ag(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ro(i){return i!==""}function Mh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(i){return i.replace(Cg,Lg)}const Pg=new Map;function Lg(i,t){let e=Qt[t];if(e===void 0){const n=Pg.get(t);if(n!==void 0)e=Qt[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return El(e)}const Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(Dg,Ig)}function Ig(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function yh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Ug={[Bo]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function Ng(i){return Ug[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fg={[Ki]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE_UV"};function Og(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bg={[ds]:"ENVMAP_MODE_REFRACTION"};function zg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kg={[mr]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function Hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kg[i.combine]||"ENVMAP_BLENDING_NONE"}function Gg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vg(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=Ng(e),c=Og(e),h=zg(e),f=Hg(e),u=Gg(e),d=Tg(e),g=Ag(o),_=s.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ro).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`)):(p=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),m=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==qn?wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,bg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),r=El(r),r=Mh(r,e),r=Sh(r,e),a=El(a),a=Mh(a,e),a=Sh(a,e),r=bh(r),a=bh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+p+r,x=v+m+a,b=_h(s,s.VERTEX_SHADER,S),y=_h(s,s.FRAGMENT_SHADER,x);s.attachShader(_,b),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",P=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(y)||"",U=D.trim(),k=P.trim(),H=L.trim();let q=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,y);else{const J=vh(s,b,"vertex"),it=vh(s,y,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+J+`
`+it)}else U!==""?Zt("WebGLProgram: Program Info Log:",U):(k===""||H==="")&&(Y=!1);Y&&(C.diagnostics={runnable:q,programLog:U,vertexShader:{log:k,prefix:p},fragmentShader:{log:H,prefix:m}})}s.deleteShader(b),s.deleteShader(y),M=new ra(s,_),E=Rg(s,_)}let M;this.getUniforms=function(){return M===void 0&&w(this),M};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,xg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=y,this}let Wg=0;class Xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qg(t),e.set(t,n)),n}}class qg{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}}function Yg(i){return i===Ji||i===er||i===nr}function Zg(i,t,e,n,s,o){const r=new Ql,a=new Xg,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function _(M,E,A,C,D,P){const L=C.fog,U=D.geometry,k=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?C.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,q=t.get(M.envMap||k,H),Y=q&&q.mapping===gr?q.image.height:null,J=d[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&Zt("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const it=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,yt=it!==void 0?it.length:0;let vt=0;U.morphAttributes.position!==void 0&&(vt=1),U.morphAttributes.normal!==void 0&&(vt=2),U.morphAttributes.color!==void 0&&(vt=3);let Wt,gt,mt,V;if(J){const zt=Vn[J];Wt=zt.vertexShader,gt=zt.fragmentShader}else{Wt=M.vertexShader,gt=M.fragmentShader;const zt=a.getVertexShaderStage(M),Xt=a.getFragmentShaderStage(M);a.update(M,zt,Xt),mt=zt.id,V=Xt.id}const N=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),dt=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,ut=!!M.map,Et=!!M.matcap,F=!!q,K=!!M.aoMap,ot=!!M.lightMap,at=!!M.bumpMap&&M.wireframe===!1,ft=!!M.normalMap,Tt=!!M.displacementMap,Dt=!!M.emissiveMap,Ut=!!M.metalnessMap,kt=!!M.roughnessMap,O=M.anisotropy>0,ee=M.clearcoat>0,$t=M.dispersion>0,I=M.retroreflectivity>0,T=M.iridescence>0,$=M.sheen>0,j=M.transmission>0,ct=O&&!!M.anisotropyMap,bt=ee&&!!M.clearcoatMap,wt=ee&&!!M.clearcoatNormalMap,ht=ee&&!!M.clearcoatRoughnessMap,pt=T&&!!M.iridescenceMap,At=T&&!!M.iridescenceThicknessMap,Ht=$&&!!M.sheenColorMap,Ct=$&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,Gt=!!M.specularColorMap,qt=!!M.specularIntensityMap,Kt=j&&!!M.transmissionMap,X=j&&!!M.thicknessMap,B=!!M.gradientMap,G=!!M.alphaMap,nt=M.alphaTest>0,lt=!!M.alphaHash,Q=!!M.extensions;let Mt=qn;M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=i.toneMapping);const xt={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Wt,fragmentShader:gt,defines:M.defines,customVertexShaderID:mt,customFragmentShaderID:V,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:st,batchingColor:st&&D._colorsTexture!==null,instancing:dt,instancingColor:dt&&D.instanceColor!==null,instancingMorph:dt&&D.morphTexture!==null,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ut,matcap:Et,envMap:F,envMapMode:F&&q.mapping,envMapCubeUVHeight:Y,aoMap:K,lightMap:ot,bumpMap:at,normalMap:ft,displacementMap:Tt,emissiveMap:Dt,normalMapObjectSpace:ft&&M.normalMapType===Hu,normalMapTangentSpace:ft&&M.normalMapType===ir,packedNormalMap:ft&&M.normalMapType===ir&&Yg(M.normalMap.format),metalnessMap:Ut,roughnessMap:kt,anisotropy:O,anisotropyMap:ct,clearcoat:ee,clearcoatMap:bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:ht,dispersion:$t,retroreflection:I,iridescence:T,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:$,sheenColorMap:Ht,sheenRoughnessMap:Ct,specularMap:Rt,specularColorMap:Gt,specularIntensityMap:qt,transmission:j,transmissionMap:Kt,thicknessMap:X,gradientMap:B,opaque:M.transparent===!1&&M.blending===qs&&M.alphaToCoverage===!1,alphaMap:G,alphaTest:nt,alphaHash:lt,combine:M.combine,mapUv:ut&&g(M.map.channel),aoMapUv:K&&g(M.aoMap.channel),lightMapUv:ot&&g(M.lightMap.channel),bumpMapUv:at&&g(M.bumpMap.channel),normalMapUv:ft&&g(M.normalMap.channel),displacementMapUv:Tt&&g(M.displacementMap.channel),emissiveMapUv:Dt&&g(M.emissiveMap.channel),metalnessMapUv:Ut&&g(M.metalnessMap.channel),roughnessMapUv:kt&&g(M.roughnessMap.channel),anisotropyMapUv:ct&&g(M.anisotropyMap.channel),clearcoatMapUv:bt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(M.sheenRoughnessMap.channel),specularMapUv:Rt&&g(M.specularMap.channel),specularColorMapUv:Gt&&g(M.specularColorMap.channel),specularIntensityMapUv:qt&&g(M.specularIntensityMap.channel),transmissionMapUv:Kt&&g(M.transmissionMap.channel),thicknessMapUv:X&&g(M.thicknessMap.channel),alphaMapUv:G&&g(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ft||O),vertexNormals:!!U.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(ut||G),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||U.attributes.normal===void 0&&ft===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Z,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:vt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ut&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:Dt&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Q&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&M.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)E.push(A),E.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(m(E,M),v(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function m(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),M.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),M.push(r.mask)}function S(M){const E=d[M.type];let A;if(E){const C=Vn[E];A=pf.clone(C.uniforms)}else A=M.uniforms;return A}function x(M,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new Vg(i,E,M,s),c.push(A),h.set(E,A)),A}function b(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function y(M){a.remove(M)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:x,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:w}}function $g(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,_,p,m){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:g,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},i[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=g,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=m),t++,v}function l(u,d,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);const S=a(u,d,g,_,p,m);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):e.push(S)}function c(u,d,g,_,p,m){const v=a(u,d,g,_,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||Kg),n.length>1&&n.sort(d||wh),s.length>1&&s.sort(d||wh)}function f(){for(let u=t,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:h}}function Jg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Eh,i.set(n,[r])):s>=o.length?(r=new Eh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Yt};break;case"SpotLight":e={position:new z,direction:new z,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function jg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let t3=0;function e3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function n3(i){const t=new Qg,e=jg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,o=new Me,r=new Me;function a(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,v=0,S=0,x=0,b=0,y=0,w=0,M=0,E=0,A=0;c.sort(e3);for(let D=0,P=c.length;D<P;D++){const L=c[D],U=L.color,k=L.intensity,H=L.distance;let q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ji?q=L.shadow.map.texture:q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=U.r*k,f+=U.g*k,u+=U.b*k;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],k);A++}else if(L.isSunLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,it=e.get(L);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=q;const yt=J.getViewportCount();for(let vt=0;vt<yt;vt++)n.sunShadowMatrix[_+vt]=J.getMatrix(vt),n.sunShadowCascade[_+vt]=J._cascadeData[vt];_+=yt,g++}n.sun[d]=Y,d++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,it=e.get(L);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,n.directionalShadow[p]=it,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=L.shadow.matrix,b++}n.directional[p]=Y,p++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(U).multiplyScalar(k),Y.distance=H,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[v]=Y;const J=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,J.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[v]=J.matrix,L.castShadow){const it=e.get(L);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,n.spotShadow[v]=it,n.spotShadowMap[v]=q,w++}v++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(U).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=Y,S++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const J=L.shadow,it=e.get(L);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,it.shadowCameraNear=J.camera.near,it.shadowCameraFar=J.camera.far,n.pointShadow[m]=it,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(k),Y.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[x]=Y,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.sunLength!==d||C.directionalLength!==p||C.pointLength!==m||C.spotLength!==v||C.rectAreaLength!==S||C.hemiLength!==x||C.numSunShadows!==g||C.numDirectionalShadows!==b||C.numPointShadows!==y||C.numSpotShadows!==w||C.numSpotMaps!==M||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=p,n.spot.length=v,n.rectArea.length=S,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.sunLength=d,C.directionalLength=p,C.pointLength=m,C.spotLength=v,C.rectAreaLength=S,C.hemiLength=x,C.numSunShadows=g,C.numDirectionalShadows=b,C.numPointShadows=y,C.numSpotShadows=w,C.numSpotMaps=M,C.numLightProbes=A,n.version=t3++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const x=c[v];if(x.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),f++}else if(x.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(x.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),r.identity(),o.copy(x.matrixWorld),o.premultiply(m),r.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const b=n.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function Th(i){const t=new n3(i),e=[],n=[],s=[];function o(u){f.camera=u,e.length=0,n.length=0,s.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function i3(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Th(i),t.set(s,[a])):o>=r.length?(a=new Th(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const s3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,r3=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],a3=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Ah=new Me,bo=new z,jc=new z;function c3(i,t,e){let n=new pc;const s=new St,o=new St,r=new Te,a=new gf,l=new _f,c={},h=e.maxTextureSize,f={[Xn]:fn,[fn]:Xn,[ln]:ln},u=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:s3,fragmentShader:o3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let m=this.type;this.render=function(y,w,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;this.type===xu&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bo);const E=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ai),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const P=m!==this.type;P&&w.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=y.length;L<U;L++){const k=y[L],H=k.shadow;if(H===void 0){Zt("WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const q=H.getFrameExtents();s.multiply(q),o.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/q.x),s.x=o.x*q.x,H.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/q.y),s.y=o.y*q.y,H.mapSize.y=o.y));const Y=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||P===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ws){if(k.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Fn(s.x,s.y,{format:Ji,type:$n,minFilter:qe,magFilter:qe,generateMipmaps:!1}),H.map.texture.name=k.name+".shadowMap",H.map.depthTexture=new oo(s.x,s.y,In),H.map.depthTexture.name=k.name+".shadowMapDepth",H.map.depthTexture.format=hi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ve,H.map.depthTexture.magFilter=Ve}else k.isPointLight?(H.map=new g0(s.x),H.map.depthTexture=new sf(s.x,Zn)):(H.map=new Fn(s.x,s.y),H.map.depthTexture=new oo(s.x,s.y,Zn)),H.map.depthTexture.name=k.name+".shadowMap",H.map.depthTexture.format=hi,this.type===Bo?(H.map.depthTexture.compareFunction=Y?hc:lc,H.map.depthTexture.minFilter=qe,H.map.depthTexture.magFilter=qe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ve,H.map.depthTexture.magFilter=Ve);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const J=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();k.isPointLight!==!0&&H.updateMatrices(k,M);for(let it=0;it<J;it++){const yt=H.getCamera(it);if(k.isPointLight){const vt=H.camera,Wt=H.matrix,gt=k.distance||vt.far;gt!==vt.far&&(vt.far=gt,vt.updateProjectionMatrix()),bo.setFromMatrixPosition(k.matrixWorld),vt.position.copy(bo),jc.copy(vt.position),jc.add(r3[it]),vt.up.copy(a3[it]),vt.lookAt(jc),vt.updateMatrixWorld(),Wt.makeTranslation(-bo.x,-bo.y,-bo.z),Ah.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ah,vt.coordinateSystem,vt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,it),i.clear();else{it===0&&(i.setRenderTarget(H.map),i.clear());const vt=H.getViewport(it);r.set(o.x*vt.x,o.y*vt.y,o.x*vt.z,o.y*vt.w),D.viewport(r)}n=H.getFrustum(it),x(w,M,yt,k,this.type)}H.isPointLightShadow!==!0&&this.type===Ws&&v(H,M),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,A,C)};function v(y,w){const M=t.update(_);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new Fn(s.x,s.y,{format:Ji,type:$n}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,M,u,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,M,d,_,null)}function S(y,w,M,E){let A=null;const C=M.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)A=C;else if(A=M.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=A.uuid,P=w.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let U=L[P];U===void 0&&(U=A.clone(),L[P]=U,w.addEventListener("dispose",b)),A=U}if(A.visible=w.visible,A.wireframe=w.wireframe,E===Ws?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=i.properties.get(A);D.light=M}return A}function x(y,w,M,E,A){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&A===Ws)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,y.matrixWorld);const P=t.update(y),L=y.material;if(Array.isArray(L)){const U=P.groups;for(let k=0,H=U.length;k<H;k++){const q=U[k],Y=L[q.materialIndex];if(Y&&Y.visible){const J=S(y,Y,E,A);y.onBeforeShadow(i,y,w,M,P,J,q),i.renderBufferDirect(M,null,P,J,y,q),y.onAfterShadow(i,y,w,M,P,J,q)}}}else if(L.visible){const U=S(y,L,E,A);y.onBeforeShadow(i,y,w,M,P,U,null),i.renderBufferDirect(M,null,P,U,y,null),y.onAfterShadow(i,y,w,M,P,U,null)}}const D=y.children;for(let P=0,L=D.length;P<L;P++)x(D[P],w,M,E,A)}function b(y){y.target.removeEventListener("dispose",b);for(const M in c){const E=c[M],A=y.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function l3(i,t){function e(){let X=!1;const B=new Te;let G=null;const nt=new Te(0,0,0,0);return{setMask:function(lt){G!==lt&&!X&&(i.colorMask(lt,lt,lt,lt),G=lt)},setLocked:function(lt){X=lt},setClear:function(lt,Q,Mt,xt,zt){zt===!0&&(lt*=xt,Q*=xt,Mt*=xt),B.set(lt,Q,Mt,xt),nt.equals(B)===!1&&(i.clearColor(lt,Q,Mt,xt),nt.copy(B))},reset:function(){X=!1,G=null,nt.set(-1,0,0,0)}}}function n(){let X=!1,B=!1,G=null,nt=null,lt=null;return{setReversed:function(Q){if(B!==Q){const Mt=t.get("EXT_clip_control");Q?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),B=Q;const xt=lt;lt=null,this.setClear(xt)}},getReversed:function(){return B},setTest:function(Q){Q?N(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Q){G!==Q&&!X&&(i.depthMask(Q),G=Q)},setFunc:function(Q){if(B&&(Q=ud[Q]),nt!==Q){switch(Q){case ua:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case to:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=Q}},setLocked:function(Q){X=Q},setClear:function(Q){lt!==Q&&(lt=Q,B&&(Q=1-Q),i.clearDepth(Q))},reset:function(){X=!1,G=null,nt=null,lt=null,B=!1}}}function s(){let X=!1,B=null,G=null,nt=null,lt=null,Q=null,Mt=null,xt=null,zt=null;return{setTest:function(Xt){X||(Xt?N(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(Xt){B!==Xt&&!X&&(i.stencilMask(Xt),B=Xt)},setFunc:function(Xt,ie,he){(G!==Xt||nt!==ie||lt!==he)&&(i.stencilFunc(Xt,ie,he),G=Xt,nt=ie,lt=he)},setOp:function(Xt,ie,he){(Q!==Xt||Mt!==ie||xt!==he)&&(i.stencilOp(Xt,ie,he),Q=Xt,Mt=ie,xt=he)},setLocked:function(Xt){X=Xt},setClear:function(Xt){zt!==Xt&&(i.clearStencil(Xt),zt=Xt)},reset:function(){X=!1,B=null,G=null,nt=null,lt=null,Q=null,Mt=null,xt=null,zt=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,v=null,S=null,x=null,b=null,y=null,w=null,M=new Yt(0,0,0),E=0,A=!1,C=null,D=null,P=null,L=null,U=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=q>=2);let J=null,it={};const yt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Wt=new Te().fromArray(yt),gt=new Te().fromArray(vt);function mt(X,B,G,nt){const lt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(X,Q),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<G;Mt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(B,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(B+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return Q}const V={};V[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),N(i.DEPTH_TEST),r.setFunc(to),at(!1),ft(ul),N(i.CULL_FACE),K(ai);function N(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function Z(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function dt(X,B){return u[X]!==B?(i.bindFramebuffer(X,B),u[X]=B,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=B),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=B),!0):!1}function st(X,B){let G=g,nt=!1;if(X){G=d.get(B),G===void 0&&(G=[],d.set(B,G));const lt=X.textures;if(G.length!==lt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Mt=lt.length;Q<Mt;Q++)G[Q]=i.COLOR_ATTACHMENT0+Q;G.length=lt.length,nt=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,nt=!0);nt&&i.drawBuffers(G)}function ut(X){return _!==X?(i.useProgram(X),_=X,!0):!1}const Et={[as]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};Et[bu]=i.MIN,Et[yu]=i.MAX;const F={[wu]:i.ZERO,[Eu]:i.ONE,[Tu]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function K(X,B,G,nt,lt,Q,Mt,xt,zt,Xt){if(X===ai){p===!0&&(Z(i.BLEND),p=!1);return}if(p===!1&&(N(i.BLEND),p=!0),X!==vu){if(X!==m||Xt!==A){if((v!==as||b!==as)&&(i.blendEquation(i.FUNC_ADD),v=as,b=as),Xt)switch(X){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",X);break}else switch(X){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dl:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",X);break}S=null,x=null,y=null,w=null,M.set(0,0,0),E=0,m=X,A=Xt}return}lt=lt||B,Q=Q||G,Mt=Mt||nt,(B!==v||lt!==b)&&(i.blendEquationSeparate(Et[B],Et[lt]),v=B,b=lt),(G!==S||nt!==x||Q!==y||Mt!==w)&&(i.blendFuncSeparate(F[G],F[nt],F[Q],F[Mt]),S=G,x=nt,y=Q,w=Mt),(xt.equals(M)===!1||zt!==E)&&(i.blendColor(xt.r,xt.g,xt.b,zt),M.copy(xt),E=zt),m=X,A=!1}function ot(X,B){X.side===ln?Z(i.CULL_FACE):N(i.CULL_FACE);let G=X.side===fn;B&&(G=!G),at(G),X.blending===qs&&X.transparent===!1?K(ai):K(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),o.setMask(X.colorWrite);const nt=X.stencilWrite;a.setTest(nt),nt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Dt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(X){C!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),C=X)}function ft(X){X!==gu?(N(i.CULL_FACE),X!==D&&(X===ul?i.cullFace(i.BACK):X===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),D=X}function Tt(X){X!==P&&(H&&i.lineWidth(X),P=X)}function Dt(X,B,G){X?(N(i.POLYGON_OFFSET_FILL),(L!==B||U!==G)&&(L=B,U=G,r.getReversed()&&(B=-B),i.polygonOffset(B,G))):Z(i.POLYGON_OFFSET_FILL)}function Ut(X){X?N(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function kt(X){X===void 0&&(X=i.TEXTURE0+k-1),J!==X&&(i.activeTexture(X),J=X)}function O(X,B,G){G===void 0&&(J===null?G=i.TEXTURE0+k-1:G=J);let nt=it[G];nt===void 0&&(nt={type:void 0,texture:void 0},it[G]=nt),(nt.type!==X||nt.texture!==B)&&(J!==G&&(i.activeTexture(G),J=G),i.bindTexture(X,B||V[X]),nt.type=X,nt.texture=B)}function ee(){const X=it[J];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(X){ce("WebGLState:",X)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(X){ce("WebGLState:",X)}}function T(){try{i.texSubImage2D(...arguments)}catch(X){ce("WebGLState:",X)}}function $(){try{i.texSubImage3D(...arguments)}catch(X){ce("WebGLState:",X)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(X){ce("WebGLState:",X)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(X){ce("WebGLState:",X)}}function bt(){try{i.texStorage2D(...arguments)}catch(X){ce("WebGLState:",X)}}function wt(){try{i.texStorage3D(...arguments)}catch(X){ce("WebGLState:",X)}}function ht(){try{i.texImage2D(...arguments)}catch(X){ce("WebGLState:",X)}}function pt(){try{i.texImage3D(...arguments)}catch(X){ce("WebGLState:",X)}}function At(X){return f[X]!==void 0?f[X]:i.getParameter(X)}function Ht(X,B){f[X]!==B&&(i.pixelStorei(X,B),f[X]=B)}function Ct(X){Wt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Wt.copy(X))}function Rt(X){gt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),gt.copy(X))}function Gt(X,B){let G=c.get(B);G===void 0&&(G=new WeakMap,c.set(B,G));let nt=G.get(X);nt===void 0&&(nt=i.getUniformBlockIndex(B,X.name),G.set(X,nt))}function qt(X,B){const nt=c.get(B).get(X);l.get(B)!==nt&&(i.uniformBlockBinding(B,nt,X.__bindingPointIndex),l.set(B,nt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,it={},u={},d=new WeakMap,g=[],_=null,p=!1,m=null,v=null,S=null,x=null,b=null,y=null,w=null,M=new Yt(0,0,0),E=0,A=!1,C=null,D=null,P=null,L=null,U=null,Wt.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:N,disable:Z,bindFramebuffer:dt,drawBuffers:st,useProgram:ut,setBlending:K,setMaterial:ot,setFlipSided:at,setCullFace:ft,setLineWidth:Tt,setPolygonOffset:Dt,setScissorTest:Ut,activeTexture:kt,bindTexture:O,unbindTexture:ee,compressedTexImage2D:$t,compressedTexImage3D:I,texImage2D:ht,texImage3D:pt,pixelStorei:Ht,getParameter:At,updateUBOMapping:Gt,uniformBlockBinding:qt,texStorage2D:bt,texStorage3D:wt,texSubImage2D:T,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:ct,scissor:Ct,viewport:Rt,reset:Kt}}function h3(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,T){return g?new OffscreenCanvas(I,T):rr("canvas")}function p(I,T,$){let j=1;const ct=$t(I);if((ct.width>$||ct.height>$)&&(j=$/Math.max(ct.width,ct.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const bt=Math.floor(j*ct.width),wt=Math.floor(j*ct.height);u===void 0&&(u=_(bt,wt));const ht=T?_(bt,wt):u;return ht.width=bt,ht.height=wt,ht.getContext("2d").drawImage(I,0,0,bt,wt),Zt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+bt+"x"+wt+")."),ht}else return"data"in I&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function m(I){return I.generateMipmaps}function v(I){i.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,T,$,j,ct,bt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let wt;j&&(wt=t.get("EXT_texture_norm16"),wt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=T;if(T===i.RED&&($===i.FLOAT&&(ht=i.R32F),$===i.HALF_FLOAT&&(ht=i.R16F),$===i.UNSIGNED_BYTE&&(ht=i.R8),$===i.UNSIGNED_SHORT&&wt&&(ht=wt.R16_EXT),$===i.SHORT&&wt&&(ht=wt.R16_SNORM_EXT)),T===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.R8UI),$===i.UNSIGNED_SHORT&&(ht=i.R16UI),$===i.UNSIGNED_INT&&(ht=i.R32UI),$===i.BYTE&&(ht=i.R8I),$===i.SHORT&&(ht=i.R16I),$===i.INT&&(ht=i.R32I)),T===i.RG&&($===i.FLOAT&&(ht=i.RG32F),$===i.HALF_FLOAT&&(ht=i.RG16F),$===i.UNSIGNED_BYTE&&(ht=i.RG8),$===i.UNSIGNED_SHORT&&wt&&(ht=wt.RG16_EXT),$===i.SHORT&&wt&&(ht=wt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RG8UI),$===i.UNSIGNED_SHORT&&(ht=i.RG16UI),$===i.UNSIGNED_INT&&(ht=i.RG32UI),$===i.BYTE&&(ht=i.RG8I),$===i.SHORT&&(ht=i.RG16I),$===i.INT&&(ht=i.RG32I)),T===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),$===i.UNSIGNED_INT&&(ht=i.RGB32UI),$===i.BYTE&&(ht=i.RGB8I),$===i.SHORT&&(ht=i.RGB16I),$===i.INT&&(ht=i.RGB32I)),T===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),$===i.UNSIGNED_INT&&(ht=i.RGBA32UI),$===i.BYTE&&(ht=i.RGBA8I),$===i.SHORT&&(ht=i.RGBA16I),$===i.INT&&(ht=i.RGBA32I)),T===i.RGB&&($===i.UNSIGNED_SHORT&&wt&&(ht=wt.RGB16_EXT),$===i.SHORT&&wt&&(ht=wt.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),T===i.RGBA){const pt=bt?or:re.getTransfer(ct);$===i.FLOAT&&(ht=i.RGBA32F),$===i.HALF_FLOAT&&(ht=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ht=pt===fe?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&wt&&(ht=wt.RGBA16_EXT),$===i.SHORT&&wt&&(ht=wt.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function b(I,T){let $;return I?T===null||T===Zn||T===io?$=i.DEPTH24_STENCIL8:T===In?$=i.DEPTH32F_STENCIL8:T===no&&($=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zn||T===io?$=i.DEPTH_COMPONENT24:T===In?$=i.DEPTH_COMPONENT32F:T===no&&($=i.DEPTH_COMPONENT16),$}function y(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ve&&I.minFilter!==qe?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function w(I){const T=I.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function M(I){const T=I.target;T.removeEventListener("dispose",M),C(T)}function E(I){const T=n.get(I);if(T.__webglInit===void 0)return;const $=I.source,j=d.get($);if(j){const ct=j[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&A(I),Object.keys(j).length===0&&d.delete($)}n.remove(I)}function A(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const $=I.source,j=d.get($);delete j[T.__cacheKey],r.memory.textures--}function C(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let ct=0;ct<T.__webglFramebuffer[j].length;ct++)i.deleteFramebuffer(T.__webglFramebuffer[j][ct]);else i.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)i.deleteFramebuffer(T.__webglFramebuffer[j]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=I.textures;for(let j=0,ct=$.length;j<ct;j++){const bt=n.get($[j]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),r.memory.textures--),n.remove($[j])}n.remove(I)}let D=0;function P(){D=0}function L(){return D}function U(I){D=I}function k(){const I=D;return I>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function H(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function q(I,T){const $=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const j=I.image;if(j===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,I,T);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function Y(I,T){const $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Z($,I,T);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function J(I,T){const $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Z($,I,T);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function it(I,T){const $=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){dt($,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const yt={[tr]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},vt={[Ve]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Wt={[Vu]:i.NEVER,[Zu]:i.ALWAYS,[Wu]:i.LESS,[lc]:i.LEQUAL,[Xu]:i.EQUAL,[hc]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function gt(I,T){if(T.type===In&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===qe||T.magFilter===na||T.magFilter===To||T.magFilter===Xi||T.minFilter===qe||T.minFilter===na||T.minFilter===To||T.minFilter===Xi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,yt[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,yt[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,yt[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,vt[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Wt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ve||T.minFilter!==To&&T.minFilter!==Xi||T.type===In&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function mt(I,T){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",w));const j=T.source;let ct=d.get(j);ct===void 0&&(ct={},d.set(j,ct));const bt=H(T);if(bt!==I.__cacheKey){ct[bt]===void 0&&(ct[bt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,$=!0),ct[bt].usedTimes++;const wt=ct[I.__cacheKey];wt!==void 0&&(ct[I.__cacheKey].usedTimes--,wt.usedTimes===0&&A(T)),I.__cacheKey=bt,I.__webglTexture=ct[bt].texture}return $}function V(I,T,$){return Math.floor(Math.floor(I/$)/T)}function N(I,T,$,j){const bt=I.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,$,j,T.data);else{bt.sort((Ht,Ct)=>Ht.start-Ct.start);let wt=0;for(let Ht=1;Ht<bt.length;Ht++){const Ct=bt[wt],Rt=bt[Ht],Gt=Ct.start+Ct.count,qt=V(Rt.start,T.width,4),Kt=V(Ct.start,T.width,4);Rt.start<=Gt+1&&qt===Kt&&V(Rt.start+Rt.count-1,T.width,4)===qt?Ct.count=Math.max(Ct.count,Rt.start+Rt.count-Ct.start):(++wt,bt[wt]=Rt)}bt.length=wt+1;const ht=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Ht=0,Ct=bt.length;Ht<Ct;Ht++){const Rt=bt[Ht],Gt=Math.floor(Rt.start/4),qt=Math.ceil(Rt.count/4),Kt=Gt%T.width,X=Math.floor(Gt/T.width),B=qt,G=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,Kt,X,B,G,$,j,T.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ht),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Z(I,T,$){let j=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=i.TEXTURE_3D);const ct=mt(I,T),bt=T.source;e.bindTexture(j,I.__webglTexture,i.TEXTURE0+$);const wt=n.get(bt);if(bt.version!==wt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const G=re.getPrimaries(re.workingColorSpace),nt=T.colorSpace===Si?null:re.getPrimaries(T.colorSpace),lt=T.colorSpace===Si||G===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let pt=p(T.image,!1,s.maxTextureSize);pt=ee(T,pt);const At=o.convert(T.format,T.colorSpace),Ht=o.convert(T.type);let Ct=x(T.internalFormat,At,Ht,T.normalized,T.colorSpace,T.isVideoTexture);gt(j,T);let Rt;const Gt=T.mipmaps,qt=T.isVideoTexture!==!0,Kt=wt.__version===void 0||ct===!0,X=bt.dataReady,B=y(T,pt);if(T.isDepthTexture)Ct=b(T.format===qi,T.type),Kt&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Ct,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,pt.width,pt.height,0,At,Ht,null));else if(T.isDataTexture)if(Gt.length>0){qt&&Kt&&e.texStorage2D(i.TEXTURE_2D,B,Ct,Gt[0].width,Gt[0].height);for(let G=0,nt=Gt.length;G<nt;G++)Rt=Gt[G],qt?X&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Rt.width,Rt.height,At,Ht,Rt.data):e.texImage2D(i.TEXTURE_2D,G,Ct,Rt.width,Rt.height,0,At,Ht,Rt.data);T.generateMipmaps=!1}else qt?(Kt&&e.texStorage2D(i.TEXTURE_2D,B,Ct,pt.width,pt.height),X&&N(T,pt,At,Ht)):e.texImage2D(i.TEXTURE_2D,0,Ct,pt.width,pt.height,0,At,Ht,pt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,B,Ct,Gt[0].width,Gt[0].height,pt.depth);for(let G=0,nt=Gt.length;G<nt;G++)if(Rt=Gt[G],T.format!==Un)if(At!==null)if(qt){if(X)if(T.layerUpdates.size>0){const lt=rh(Rt.width,Rt.height,T.format,T.type);for(const Q of T.layerUpdates){const Mt=Rt.data.subarray(Q*lt/Rt.data.BYTES_PER_ELEMENT,(Q+1)*lt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,Q,Rt.width,Rt.height,1,At,Mt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Rt.width,Rt.height,pt.depth,At,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Ct,Rt.width,Rt.height,pt.depth,0,Rt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Rt.width,Rt.height,pt.depth,At,Ht,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Ct,Rt.width,Rt.height,pt.depth,0,At,Ht,Rt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{qt&&Kt&&e.texStorage2D(i.TEXTURE_2D,B,Ct,Gt[0].width,Gt[0].height);for(let G=0,nt=Gt.length;G<nt;G++)Rt=Gt[G],T.format!==Un?At!==null?qt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Rt.width,Rt.height,At,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Ct,Rt.width,Rt.height,0,Rt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?X&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Rt.width,Rt.height,At,Ht,Rt.data):e.texImage2D(i.TEXTURE_2D,G,Ct,Rt.width,Rt.height,0,At,Ht,Rt.data)}else if(T.isDataArrayTexture)if(qt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,B,Ct,pt.width,pt.height,pt.depth),X)if(T.layerUpdates.size>0){const G=rh(pt.width,pt.height,T.format,T.type);for(const nt of T.layerUpdates){const lt=pt.data.subarray(nt*G/pt.data.BYTES_PER_ELEMENT,(nt+1)*G/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,pt.width,pt.height,1,At,Ht,lt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,At,Ht,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,pt.width,pt.height,pt.depth,0,At,Ht,pt.data);else if(T.isData3DTexture)qt?(Kt&&e.texStorage3D(i.TEXTURE_3D,B,Ct,pt.width,pt.height,pt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,At,Ht,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,pt.width,pt.height,pt.depth,0,At,Ht,pt.data);else if(T.isFramebufferTexture){if(Kt)if(qt)e.texStorage2D(i.TEXTURE_2D,B,Ct,pt.width,pt.height);else{let G=pt.width,nt=pt.height;for(let lt=0;lt<B;lt++)e.texImage2D(i.TEXTURE_2D,lt,Ct,G,nt,0,At,Ht,null),G>>=1,nt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const G=i.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),pt.parentNode!==G){G.appendChild(pt),f.add(T),G.onpaint=nt=>{const lt=nt.changedElements;for(const Q of f)lt.includes(Q.image)&&(Q.needsUpdate=!0)},G.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{const lt=i.RGBA,Q=i.RGBA,Mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,lt,Q,Mt,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(qt&&Kt){const G=$t(Gt[0]);e.texStorage2D(i.TEXTURE_2D,B,Ct,G.width,G.height)}for(let G=0,nt=Gt.length;G<nt;G++)Rt=Gt[G],qt?X&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,At,Ht,Rt):e.texImage2D(i.TEXTURE_2D,G,Ct,At,Ht,Rt);T.generateMipmaps=!1}else if(qt){if(Kt){const G=$t(pt);e.texStorage2D(i.TEXTURE_2D,B,Ct,G.width,G.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Ht,pt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,At,Ht,pt);m(T)&&v(j),wt.__version=bt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function dt(I,T,$){if(T.image.length!==6)return;const j=mt(I,T),ct=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);const bt=n.get(ct);if(ct.version!==bt.__version||j===!0){e.activeTexture(i.TEXTURE0+$);const wt=re.getPrimaries(re.workingColorSpace),ht=T.colorSpace===Si?null:re.getPrimaries(T.colorSpace),pt=T.colorSpace===Si||wt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const At=T.isCompressedTexture||T.image[0].isCompressedTexture,Ht=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let Q=0;Q<6;Q++)!At&&!Ht?Ct[Q]=p(T.image[Q],!0,s.maxCubemapSize):Ct[Q]=Ht?T.image[Q].image:T.image[Q],Ct[Q]=ee(T,Ct[Q]);const Rt=Ct[0],Gt=o.convert(T.format,T.colorSpace),qt=o.convert(T.type),Kt=x(T.internalFormat,Gt,qt,T.normalized,T.colorSpace),X=T.isVideoTexture!==!0,B=bt.__version===void 0||j===!0,G=ct.dataReady;let nt=y(T,Rt);gt(i.TEXTURE_CUBE_MAP,T);let lt;if(At){X&&B&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Kt,Rt.width,Rt.height);for(let Q=0;Q<6;Q++){lt=Ct[Q].mipmaps;for(let Mt=0;Mt<lt.length;Mt++){const xt=lt[Mt];T.format!==Un?Gt!==null?X?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,xt.width,xt.height,Gt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,Kt,xt.width,xt.height,0,xt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,0,0,xt.width,xt.height,Gt,qt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt,Kt,xt.width,xt.height,0,Gt,qt,xt.data)}}}else{if(lt=T.mipmaps,X&&B){lt.length>0&&nt++;const Q=$t(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ht){X?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ct[Q].width,Ct[Q].height,Gt,qt,Ct[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Ct[Q].width,Ct[Q].height,0,Gt,qt,Ct[Q].data);for(let Mt=0;Mt<lt.length;Mt++){const zt=lt[Mt].image[Q].image;X?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,zt.width,zt.height,Gt,qt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,Kt,zt.width,zt.height,0,Gt,qt,zt.data)}}else{X?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Gt,qt,Ct[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Gt,qt,Ct[Q]);for(let Mt=0;Mt<lt.length;Mt++){const xt=lt[Mt];X?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,0,0,Gt,qt,xt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Mt+1,Kt,Gt,qt,xt.image[Q])}}}m(T)&&v(i.TEXTURE_CUBE_MAP),bt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function st(I,T,$,j,ct,bt){const wt=o.convert($.format,$.colorSpace),ht=o.convert($.type),pt=x($.internalFormat,wt,ht,$.normalized,$.colorSpace),At=n.get(T),Ht=n.get($);if(Ht.__renderTarget=T,!At.__hasExternalTextures){const Ct=Math.max(1,T.width>>bt),Rt=Math.max(1,T.height>>bt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,bt,pt,Ct,Rt,T.depth,0,wt,ht,null):e.texImage2D(ct,bt,pt,Ct,Rt,0,wt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),kt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ct,Ht.__webglTexture,0,Ut(T)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ct,Ht.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(I,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const j=T.depthTexture,ct=j&&j.isDepthTexture?j.type:null,bt=b(T.stencilBuffer,ct),wt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(T),bt,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(T),bt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,I)}else{const j=T.textures;for(let ct=0;ct<j.length;ct++){const bt=j[ct],wt=o.convert(bt.format,bt.colorSpace),ht=o.convert(bt.type),pt=x(bt.internalFormat,wt,ht,bt.normalized,bt.colorSpace);kt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(T),pt,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(T),pt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,pt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(I,T,$){const j=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ct=n.get(T.depthTexture);if(ct.__renderTarget=T,(!ct.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),gt(i.TEXTURE_CUBE_MAP,T.depthTexture);const At=o.convert(T.depthTexture.format),Ht=o.convert(T.depthTexture.type);let Ct;T.depthTexture.format===hi?Ct=i.DEPTH_COMPONENT24:T.depthTexture.format===qi&&(Ct=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ct,T.width,T.height,0,At,Ht,null)}}else q(T.depthTexture,0);const bt=ct.__webglTexture,wt=Ut(T),ht=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,pt=T.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===hi)kt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ht,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ht,bt,0);else if(T.depthTexture.format===qi)kt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ht,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ht,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(I){const T=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",ct)};j.addEventListener("dispose",ct),T.__depthDisposeCallback=ct}T.__boundDepthTexture=j}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let j=0;j<6;j++)Et(T.__webglFramebuffer[j],I,j);else{const j=I.texture.mipmaps;j&&j.length>0?Et(T.__webglFramebuffer[0],I,0):Et(T.__webglFramebuffer,I,0)}else if($){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=i.createRenderbuffer(),ut(T.__webglDepthbuffer[j],I,!1);else{const ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,bt)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ut(T.__webglDepthbuffer,I,!1);else{const ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(I,T,$){const j=n.get(I);T!==void 0&&st(j.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&F(I)}function ot(I){const T=I.texture,$=n.get(I),j=n.get(T);I.addEventListener("dispose",M);const ct=I.textures,bt=I.isWebGLCubeRenderTarget===!0,wt=ct.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=T.version,r.memory.textures++),bt){$.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[ht]=[];for(let pt=0;pt<T.mipmaps.length;pt++)$.__webglFramebuffer[ht][pt]=i.createFramebuffer()}else $.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let ht=0;ht<T.mipmaps.length;ht++)$.__webglFramebuffer[ht]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ht=0,pt=ct.length;ht<pt;ht++){const At=n.get(ct[ht]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&kt(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ht=0;ht<ct.length;ht++){const pt=ct[ht];$.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ht]);const At=o.convert(pt.format,pt.colorSpace),Ht=o.convert(pt.type),Ct=x(pt.internalFormat,At,Ht,pt.normalized,pt.colorSpace,I.isXRRenderTarget===!0),Rt=Ut(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Ct,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,$.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ut($.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),gt(i.TEXTURE_CUBE_MAP,T);for(let ht=0;ht<6;ht++)if(T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)st($.__webglFramebuffer[ht][pt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else st($.__webglFramebuffer[ht],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(T)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,pt=ct.length;ht<pt;ht++){const At=ct[ht],Ht=n.get(At);let Ct=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ct=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Ht.__webglTexture),gt(Ct,At),st($.__webglFramebuffer,I,At,i.COLOR_ATTACHMENT0+ht,Ct,0),m(At)&&v(Ct)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ht=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),gt(ht,T),T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)st($.__webglFramebuffer[pt],I,T,i.COLOR_ATTACHMENT0,ht,pt);else st($.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,ht,0);m(T)&&v(ht),e.unbindTexture()}I.depthBuffer&&F(I)}function at(I){const T=I.textures;for(let $=0,j=T.length;$<j;$++){const ct=T[$];if(m(ct)){const bt=S(I),wt=n.get(ct).__webglTexture;e.bindTexture(bt,wt),v(bt),e.unbindTexture()}}}const ft=[],Tt=[];function Dt(I){if(I.samples>0){if(kt(I)===!1){const T=I.textures,$=I.width,j=I.height;let ct=i.COLOR_BUFFER_BIT;const bt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(I),ht=T.length>1;if(ht)for(let At=0;At<T.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const pt=I.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<T.length;At++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const Ht=n.get(T[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,$,j,0,0,$,j,ct,i.NEAREST),l===!0&&(ft.length=0,Tt.length=0,ft.push(i.COLOR_ATTACHMENT0+At),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ft.push(bt),Tt.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let At=0;At<T.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const Ht=n.get(T[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Ut(I){return Math.min(s.maxSamples,I.samples)}function kt(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function O(I){const T=r.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function ee(I,T){const $=I.colorSpace,j=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==sr&&$!==Si&&(re.getTransfer($)===fe?(j!==Un||ct!==_n)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",$)),T}function $t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.getTextureUnits=L,this.setTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=it,this.rebindTextures=K,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=st,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Df(i,t){function e(n,s=Si){let o;const r=re.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===no)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===$l)return i.RGB;if(n===Un)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===oc)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===ko||n===Ho||n===Go||n===Vo)if(r===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===va||n===Ma||n===Sa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===xa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===ya||n===wa||n===Ea||n===Ta||n===er||n===Aa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ba||n===ya)return r===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===wa)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ea)return o.COMPRESSED_R11_EAC;if(n===Ta)return o.COMPRESSED_SIGNED_R11_EAC;if(n===er)return o.COMPRESSED_RG11_EAC;if(n===Aa)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ra)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Va||n===Wa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ga)return r===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xa||n===qa||n===nr||n===Ya)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===io?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const u3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class d3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new s0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Bn({vertexShader:u3,fragmentShader:f3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p3 extends Pi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new d3,m={},v=e.getContextAttributes();let S=null,x=null;const b=[],y=[],w=new St;let M=null,E=null;const A=new je;A.viewport=new Te;const C=new je;C.viewport=new Te;const D=[A,C],P=new wf;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let N=b[V];return N===void 0&&(N=new sa,b[V]=N),N.getTargetRaySpace()},this.getControllerGrip=function(V){let N=b[V];return N===void 0&&(N=new sa,b[V]=N),N.getGripSpace()},this.getHand=function(V){let N=b[V];return N===void 0&&(N=new sa,b[V]=N),N.getHandSpace()};function k(V){const N=y.indexOf(V.inputSource);if(N===-1)return;const Z=b[N];Z!==void 0&&(Z.update(V.inputSource,V.frame,c||r),Z.dispatchEvent({type:V.type,data:V.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let V=0;V<b.length;V++){const N=y[V];N!==null&&(y[V]=null,b[V].disconnect(N))}L=null,U=null,p.reset();for(const V in m)delete m[V];if(t.setRenderTarget(S),d=null,u=null,f=null,s=null,x=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(w.width,w.height,!1),E!==null){const V=E.camera;V.fov=E.fov,V.zoom=E.zoom,V.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,dt=null,st=null;v.depth&&(st=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=v.stencil?qi:hi,dt=v.stencil?io:Zn);const ut={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:o};f=this.getBinding(),u=f.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Fn(u.textureWidth,u.textureHeight,{format:Un,type:_n,depthTexture:new oo(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Z={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Fn(d.framebufferWidth,d.framebufferHeight,{format:Un,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(V){for(let N=0;N<V.removed.length;N++){const Z=V.removed[N],dt=y.indexOf(Z);dt>=0&&(y[dt]=null,b[dt].disconnect(Z))}for(let N=0;N<V.added.length;N++){const Z=V.added[N];let dt=y.indexOf(Z);if(dt===-1){for(let ut=0;ut<b.length;ut++)if(ut>=y.length){y.push(Z),dt=ut;break}else if(y[ut]===null){y[ut]=Z,dt=ut;break}if(dt===-1)break}const st=b[dt];st&&st.connect(Z)}}const Y=new z,J=new z;function it(V,N,Z){Y.setFromMatrixPosition(N.matrixWorld),J.setFromMatrixPosition(Z.matrixWorld);const dt=Y.distanceTo(J),st=N.projectionMatrix.elements,ut=Z.projectionMatrix.elements,Et=st[14]/(st[10]-1),F=st[14]/(st[10]+1),K=(st[9]+1)/st[5],ot=(st[9]-1)/st[5],at=(st[8]-1)/st[0],ft=(ut[8]+1)/ut[0],Tt=Et*at,Dt=Et*ft,Ut=dt/(-at+ft),kt=Ut*-at;if(N.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(kt),V.translateZ(Ut),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),st[10]===-1)V.projectionMatrix.copy(N.projectionMatrix),V.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const O=Et+Ut,ee=F+Ut,$t=Tt-kt,I=Dt+(dt-kt),T=K*F/ee*O,$=ot*F/ee*O;V.projectionMatrix.makePerspective($t,I,T,$,O,ee),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function yt(V,N){N===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(N.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let N=V.near,Z=V.far;p.texture!==null&&(p.depthNear>0&&(N=p.depthNear),p.depthFar>0&&(Z=p.depthFar)),P.near=C.near=A.near=N,P.far=C.far=A.far=Z,(L!==P.near||U!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,U=P.far),P.layers.mask=V.layers.mask|6,A.layers.mask=P.layers.mask&-5,C.layers.mask=P.layers.mask&-3;const dt=V.parent,st=P.cameras;yt(P,dt);for(let ut=0;ut<st.length;ut++)yt(st[ut],dt);st.length===2?it(P,A,C):P.projectionMatrix.copy(A.projectionMatrix),E===null&&V.isPerspectiveCamera&&(E={camera:V,fov:V.fov,zoom:V.zoom}),vt(V,P,dt)};function vt(V,N,Z){Z===null?V.matrix.copy(N.matrixWorld):(V.matrix.copy(Z.matrixWorld),V.matrix.invert(),V.matrix.multiply(N.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(N.projectionMatrix),V.projectionMatrixInverse.copy(N.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ar*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(V){return m[V]};let Wt=null;function gt(V,N){if(h=N.getViewerPose(c||r),g=N,h!==null){const Z=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let dt=!1;Z.length!==P.cameras.length&&(P.cameras.length=0,dt=!0);for(let F=0;F<Z.length;F++){const K=Z[F];let ot=null;if(d!==null)ot=d.getViewport(K);else{const ft=f.getViewSubImage(u,K);ot=ft.viewport,F===0&&(t.setRenderTargetTextures(x,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(x))}let at=D[F];at===void 0&&(at=new je,at.layers.enable(F),at.viewport=new Te,D[F]=at),at.matrix.fromArray(K.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(K.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ot.x,ot.y,ot.width,ot.height),F===0&&(P.matrix.copy(at.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),dt===!0&&P.cameras.push(at)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const F=f.getDepthInformation(Z[0]);F&&F.isValid&&F.texture&&p.init(F,s.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let F=0;F<Z.length;F++){const K=Z[F].camera;if(K){let ot=m[K];ot||(ot=new s0,m[K]=ot);const at=f.getCameraImage(K);ot.sourceTexture=at}}}}for(let Z=0;Z<b.length;Z++){const dt=y[Z],st=b[Z];dt!==null&&st!==void 0&&st.update(dt,N,c||r)}Wt&&Wt(V,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}const mt=new Tf;mt.setAnimationLoop(gt),this.setAnimationLoop=function(V){Wt=V},this.dispose=function(){}}}const m3=new Me,If=new Jt;If.set(-1,0,0,0,1,0,0,0,1);function g3(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,df(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,S,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(p,m):m.isMeshLambertMaterial?(o(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(p,m),f(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),_(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),S=v.envMap,x=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(m3.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(If),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _3(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const y=b.program;n.uniformBlockBinding(x,y)}function c(x,b){let y=s[x.id];y===void 0&&(p(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",v));const w=b.program;n.updateUBOMapping(x,w);const M=t.render.frame;o[x.id]!==M&&(u(x),o[x.id]=M)}function h(x){const b=f();x.__bindingPointIndex=b;const y=i.createBuffer(),w=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const b=s[x.id],y=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,E=y.length;M<E;M++){const A=y[M];if(Array.isArray(A))for(let C=0,D=A.length;C<D;C++)d(A[C],M,C,w);else d(A,M,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,b,y,w){if(_(x,b,y,w)===!0){const M=x.__offset,E=x.value;if(Array.isArray(E)){let A=0;for(let C=0;C<E.length;C++){const D=E[C],P=m(D);g(D,x.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function g(x,b,y){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,y)}function _(x,b,y,w){const M=x.value,E=b+"_"+y;if(w[E]===void 0)return typeof M=="number"||typeof M=="boolean"?w[E]=M:ArrayBuffer.isView(M)?w[E]=M.slice():w[E]=M.clone(),!0;{const A=w[E];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return w[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function p(x){const b=x.uniforms;let y=0;const w=16;for(let E=0,A=b.length;E<A;E++){const C=Array.isArray(b[E])?b[E]:[b[E]];for(let D=0,P=C.length;D<P;D++){const L=C[D],U=Array.isArray(L.value)?L.value:[L.value];for(let k=0,H=U.length;k<H;k++){const q=U[k],Y=m(q),J=y%w,it=J%Y.boundary,yt=J+it;y+=it,yt!==0&&w-yt<Y.storage&&(y+=w-yt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=Y.storage}}}const M=y%w;return M>0&&(y+=w-M),x.__size=y,x.__cache={},this}function m(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",x),b}function v(x){const b=x.target;b.removeEventListener("dispose",v);const y=r.indexOf(b.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function S(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:S}}const x3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function v3(){return ti===null&&(ti=new dc(x3,16,16,Ji,$n),ti.name="DFG_LUT",ti.minFilter=qe,ti.magFilter=qe,ti.wrapS=ri,ti.wrapT=ri,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Uf{constructor(t={}){const{canvas:e=Ku(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const _=d,p=new Set([cc,ac,rc]),m=new Set([_n,Zn,no,io,ic,sc]),v=new Uint32Array(4),S=new Int32Array(4),x=new z;let b=null,y=null;const w=[],M=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,D=null,P=null,L=null,U=null;this._outputColorSpace=Qe;let k=0,H=0,q=null,Y=-1,J=null;const it=new Te,yt=new Te;let vt=null;const Wt=new Yt(0);let gt=0,mt=e.width,V=e.height,N=1,Z=null,dt=null;const st=new Te(0,0,mt,V),ut=new Te(0,0,mt,V);let Et=!1;const F=new pc;let K=!1,ot=!1;const at=new Me,ft=new z,Tt=new Te,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function kt(){return q===null?N:1}let O=n;function ee(R,W){return e.getContext(R,W)}let $t,I,T,$,j,ct,bt,wt,ht,pt,At,Ht,Ct,Rt,Gt,qt,Kt,X,B,G,nt,lt,Q;try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ec}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",ie,!1),O===null){const W="webgl2";if(O=ee(W,R),O===null)throw ee(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Mt()}catch(R){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),ce("WebGLRenderer: "+R.message),R}function Mt(){$t=new Mm(O),$t.init(),nt=new Df(O,$t),I=new hm(O,$t,t,nt),T=new l3(O,$t),I.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),P=O.createFramebuffer(),L=O.createFramebuffer(),U=O.createFramebuffer(),$=new ym(O),j=new $g,ct=new h3(O,$t,T,j,I,nt,$),bt=new vm(A),wt=new Ep(O),lt=new cm(O,wt),ht=new Sm(O,wt,$,lt),pt=new Em(O,ht,wt,lt,$),X=new wm(O,I,ct),Gt=new um(j),At=new Zg(A,bt,$t,I,lt,Gt),Ht=new g3(A,j),Ct=new Jg,Rt=new i3($t),Kt=new am(A,bt,T,pt,g,l),qt=new c3(A,pt,I),Q=new _3(O,$,I,T),B=new lm(O,$t,$),G=new bm(O,$t,$),$.programs=At.programs,A.capabilities=I,A.extensions=$t,A.properties=j,A.renderLists=Ct,A.shadowMap=qt,A.state=T,A.info=$}_!==_n&&(E=new Am(_,e.width,e.height,a,s,o));const xt=new p3(A,O);this.xr=xt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(R){R!==void 0&&(N=R,this.setSize(mt,V,!1))},this.getSize=function(R){return R.set(mt,V)},this.setSize=function(R,W,rt=!0){if(xt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=R,V=W,e.width=Math.floor(R*N),e.height=Math.floor(W*N),rt===!0&&(e.style.width=R+"px",e.style.height=W+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(mt*N,V*N).floor()},this.setDrawingBufferSize=function(R,W,rt){mt=R,V=W,N=rt,e.width=Math.floor(R*rt),e.height=Math.floor(W*rt),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(_===_n){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(it)},this.getViewport=function(R){return R.copy(st)},this.setViewport=function(R,W,rt,tt){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,W,rt,tt),T.viewport(it.copy(st).multiplyScalar(N).round())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,W,rt,tt){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,W,rt,tt),T.scissor(yt.copy(ut).multiplyScalar(N).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){T.setScissorTest(Et=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){dt=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,rt=!0){let tt=0;if(R){let et=!1;if(q!==null){const It=q.texture.format;et=p.has(It)}if(et){const It=q.texture.type,Ft=m.has(It),Lt=Kt.getClearColor(),Ot=Kt.getClearAlpha(),Vt=Lt.r,jt=Lt.g,se=Lt.b;Ft?(v[0]=Vt,v[1]=jt,v[2]=se,v[3]=Ot,O.clearBufferuiv(O.COLOR,0,v)):(S[0]=Vt,S[1]=jt,S[2]=se,S[3]=Ot,O.clearBufferiv(O.COLOR,0,S))}else tt|=O.COLOR_BUFFER_BIT}W&&(tt|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(tt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&O.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),Kt.dispose(),Ct.dispose(),Rt.dispose(),j.dispose(),bt.dispose(),pt.dispose(),lt.dispose(),Q.dispose(),At.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",xr),xt.removeEventListener("sessionend",vr),di.stop()};function zt(R){R.preventDefault(),gl("WebGLRenderer: Context Lost."),C=!0}function Xt(){gl("WebGLRenderer: Context Restored."),C=!1;const R=$.autoReset,W=qt.enabled,rt=qt.autoUpdate,tt=qt.needsUpdate,et=qt.type;Mt(),$.autoReset=R,qt.enabled=W,qt.autoUpdate=rt,qt.needsUpdate=tt,qt.type=et}function ie(R){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function he(R){const W=R.target;W.removeEventListener("dispose",he),Mn(W)}function Mn(R){dn(R),j.remove(R)}function dn(R){const W=j.get(R).programs;W!==void 0&&(W.forEach(function(rt){At.releaseProgram(rt)}),R.isShaderMaterial&&At.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,rt,tt,et,It){W===null&&(W=Dt);const Ft=et.isMesh&&et.matrixWorld.determinantAffine()<0,Lt=rd(R,W,rt,tt,et);T.setMaterial(tt,Ft);let Ot=rt.index,Vt=1;if(tt.wireframe===!0){if(Ot=ht.getWireframeAttribute(rt),Ot===void 0)return;Vt=2}const jt=rt.drawRange,se=rt.attributes.position;let Bt=jt.start*Vt,ue=(jt.start+jt.count)*Vt;It!==null&&(Bt=Math.max(Bt,It.start*Vt),ue=Math.min(ue,(It.start+It.count)*Vt)),Ot!==null?(Bt=Math.max(Bt,0),ue=Math.min(ue,Ot.count)):se!=null&&(Bt=Math.max(Bt,0),ue=Math.min(ue,se.count));const Ue=ue-Bt;if(Ue<0||Ue===1/0)return;lt.setup(et,tt,Lt,rt,Ot);let be,ve=B;if(Ot!==null&&(be=wt.get(Ot),ve=G,ve.setIndex(be)),et.isMesh)tt.wireframe===!0?(T.setLineWidth(tt.wireframeLinewidth*kt()),ve.setMode(O.LINES)):ve.setMode(O.TRIANGLES);else if(et.isLine){let Ye=tt.linewidth;Ye===void 0&&(Ye=1),T.setLineWidth(Ye*kt()),et.isLineSegments?ve.setMode(O.LINES):et.isLineLoop?ve.setMode(O.LINE_LOOP):ve.setMode(O.LINE_STRIP)}else et.isPoints?ve.setMode(O.POINTS):et.isSprite&&ve.setMode(O.TRIANGLES);if(et.isBatchedMesh)if($t.get("WEBGL_multi_draw"))ve.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Ye=et._multiDrawStarts,Nt=et._multiDrawCounts,nn=et._multiDrawCount,le=Ot?wt.get(Ot).bytesPerElement:1,Tn=j.get(tt).currentProgram.getUniforms();for(let Qn=0;Qn<nn;Qn++)Tn.setValue(O,"_gl_DrawID",Qn),ve.render(Ye[Qn]/le,Nt[Qn])}else if(et.isInstancedMesh)ve.renderInstances(Bt,Ue,et.count);else if(rt.isInstancedBufferGeometry){const Ye=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Nt=Math.min(rt.instanceCount,Ye);ve.renderInstances(Bt,Ue,Nt)}else ve.render(Bt,Ue)};function fi(R,W,rt,tt){D!==null&&R.isNodeMaterial&&D.setObject(tt,R),K===!0&&Gt.setState(R,rt,!1),R.transparent===!0&&R.side===ln&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,ts(R,W,tt),R.side=Xn,R.needsUpdate=!0,ts(R,W,tt),R.side=ln):ts(R,W,tt)}this.compile=function(R,W,rt=null){rt===null&&(rt=R),D!==null&&D.renderStart(R,W,rt),y=Rt.get(rt),y.init(W),M.push(y),rt.traverseVisible(function(et){et.isLight&&et.layers.test(W.layers)&&(y.pushLight(et),et.castShadow&&y.pushShadow(et))}),R!==rt&&R.traverseVisible(function(et){et.isLight&&et.layers.test(W.layers)&&(y.pushLight(et),et.castShadow&&y.pushShadow(et))}),y.setupLights(),D!==null&&D.updateLights(y.state.lightsArray),ot=this.localClippingEnabled,K=Gt.init(this.clippingPlanes,ot),K===!0&&Gt.setGlobalState(this.clippingPlanes,W),D!==null&&qt.render(y.state.shadowsArray,rt,W);const tt=new Set;return R.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const It=et.material;if(It)if(Array.isArray(It))for(let Ft=0;Ft<It.length;Ft++){const Lt=It[Ft];fi(Lt,rt,W,et),tt.add(Lt)}else fi(It,rt,W,et),tt.add(It)}),y=M.pop(),D!==null&&D.renderEnd(),tt},this.compileAsync=function(R,W,rt=null){const tt=this.compile(R,W,rt);return new Promise(et=>{function It(){if(tt.forEach(function(Ft){const Ot=j.get(Ft).currentProgram;(Ot===void 0||Ot.isReady())&&tt.delete(Ft)}),tt.size===0){et(R);return}setTimeout(It,10)}$t.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Di=null;function fo(R){Di&&Di(R)}function xr(){di.stop()}function vr(){di.start()}const di=new Tf;di.setAnimationLoop(fo),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(R){Di=R,xt.setAnimationLoop(R),R===null?di.stop():di.start()},xt.addEventListener("sessionstart",xr),xt.addEventListener("sessionend",vr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(R,W);const rt=xt.enabled===!0&&xt.isPresenting===!0,tt=E!==null&&(q===null||rt)&&E.begin(A,q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(W),W=xt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,q),y=Rt.get(R,M.length),y.init(W),y.state.textureUnits=ct.getTextureUnits(),M.push(y),at.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(at,Wn,W.reversedDepth),ot=this.localClippingEnabled,K=Gt.init(this.clippingPlanes,ot),b=Ct.get(R,w.length),b.init(),w.push(b),xt.enabled===!0&&xt.isPresenting===!0){const Ft=A.xr.getDepthSensingMesh();Ft!==null&&xs(Ft,W,-1/0,A.sortObjects)}xs(R,W,0,A.sortObjects),b.finish(),D!==null&&D.updateLights(y.state.lightsArray),A.sortObjects===!0&&b.sort(Z,dt),Ut=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Ut&&Kt.addToRenderList(b,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),K===!0&&Gt.beginShadows();const et=y.state.shadowsArray;if(qt.render(et,R,W),K===!0&&Gt.endShadows(),(tt&&E.hasRenderPass())===!1){const Ft=b.opaque,Lt=b.transmissive;if(y.setupLights(),W.isArrayCamera){const Ot=W.cameras;if(Lt.length>0)for(let Vt=0,jt=Ot.length;Vt<jt;Vt++){const se=Ot[Vt];mi(Ft,Lt,R,se)}Ut&&Kt.render(R);for(let Vt=0,jt=Ot.length;Vt<jt;Vt++){const se=Ot[Vt];pi(b,R,se,se.viewport)}}else Lt.length>0&&mi(Ft,Lt,R,W),Ut&&Kt.render(R),pi(b,R,W)}q!==null&&H===0&&(ct.updateMultisampleRenderTarget(q),ct.updateRenderTargetMipmap(q)),tt&&E.end(A),R.isScene===!0&&R.onAfterRender(A,R,W),lt.resetDefaultState(),Y=-1,J=null,M.pop(),M.length>0?(y=M[M.length-1],ct.setTextureUnits(y.state.textureUnits),K===!0&&Gt.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,D!==null&&D.renderEnd()};function xs(R,W,rt,tt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)y.pushLightProbeGrid(R);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(F)){tt&&Tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(at);const Ft=pt.update(R),Lt=R.material;Lt.visible&&b.push(R,Ft,Lt,rt,Tt.z,null,W)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(F))){const Ft=pt.update(R),Lt=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Tt.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Tt.copy(Ft.boundingSphere.center)),Tt.applyMatrix4(R.matrixWorld).applyMatrix4(at)),Array.isArray(Lt)){const Ot=Ft.groups;for(let Vt=0,jt=Ot.length;Vt<jt;Vt++){const se=Ot[Vt],Bt=Lt[se.materialIndex];Bt&&Bt.visible&&b.push(R,Ft,Bt,rt,Tt.z,se,W)}}else Lt.visible&&b.push(R,Ft,Lt,rt,Tt.z,null,W)}}const It=R.children;for(let Ft=0,Lt=It.length;Ft<Lt;Ft++)xs(It[Ft],W,rt,tt)}function pi(R,W,rt,tt){const{opaque:et,transmissive:It,transparent:Ft}=R;y.setupLightsView(rt),K===!0&&Gt.setGlobalState(A.clippingPlanes,rt),tt&&T.viewport(it.copy(tt)),et.length>0&&Jn(et,W,rt),It.length>0&&Jn(It,W,rt),Ft.length>0&&Jn(Ft,W,rt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function mi(R,W,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[tt.id]===void 0){const Bt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[tt.id]=new Fn(1,1,{generateMipmaps:!0,type:Bt?$n:_n,minFilter:Xi,samples:Math.max(4,I.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}const It=y.state.transmissionRenderTarget[tt.id],Ft=tt.viewport||it;It.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);const Lt=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Vt=A.getActiveMipmapLevel();A.setRenderTarget(It),A.getClearColor(Wt),gt=A.getClearAlpha(),gt<1&&A.setClearColor(16777215,.5),A.clear(),Ut&&Kt.render(rt);const jt=A.toneMapping;A.toneMapping=qn;const se=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),y.setupLightsView(tt),K===!0&&Gt.setGlobalState(A.clippingPlanes,tt),Jn(R,rt,tt),ct.updateMultisampleRenderTarget(It),ct.updateRenderTargetMipmap(It),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ue=0,Ue=W.length;ue<Ue;ue++){const be=W[ue],{object:ve,geometry:Ye,material:Nt,group:nn}=be;if(Nt.side===ln&&ve.layers.test(tt.layers)){const le=Nt.side;Nt.side=fn,Nt.needsUpdate=!0,po(ve,rt,tt,Ye,Nt,nn),Nt.side=le,Nt.needsUpdate=!0,Bt=!0}}Bt===!0&&(ct.updateMultisampleRenderTarget(It),ct.updateRenderTargetMipmap(It))}A.setRenderTarget(Lt,Ot,Vt),A.setClearColor(Wt,gt),se!==void 0&&(tt.viewport=se),A.toneMapping=jt}function Jn(R,W,rt){const tt=W.isScene===!0?W.overrideMaterial:null;for(let et=0,It=R.length;et<It;et++){const Ft=R[et],{object:Lt,geometry:Ot,group:Vt}=Ft;let jt=Ft.material;jt.allowOverride===!0&&tt!==null&&(jt=tt),Lt.layers.test(rt.layers)&&po(Lt,W,rt,Ot,jt,Vt)}}function po(R,W,rt,tt,et,It){D!==null&&et.isNodeMaterial&&D.setObject(R,et),R.onBeforeRender(A,W,rt,tt,et,It),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),et.onBeforeRender(A,W,rt,tt,R,It),et.transparent===!0&&et.side===ln&&et.forceSinglePass===!1?(et.side=fn,et.needsUpdate=!0,A.renderBufferDirect(rt,W,tt,et,R,It),et.side=Xn,et.needsUpdate=!0,A.renderBufferDirect(rt,W,tt,et,R,It),et.side=ln):A.renderBufferDirect(rt,W,tt,et,R,It),R.onAfterRender(A,W,rt,tt,et,It)}function ts(R,W,rt){W.isScene!==!0&&(W=Dt);const tt=j.get(R),et=y.state.lights,It=y.state.shadowsArray,Ft=et.state.version,Lt=At.getParameters(R,et.state,It,W,rt,y.state.lightProbeGridArray),Ot=At.getProgramCacheKey(Lt);let Vt=tt.programs;tt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,tt.fog=W.fog;const jt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;tt.envMap=bt.get(R.envMap||tt.environment,jt),tt.envMapRotation=tt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Vt===void 0&&(R.addEventListener("dispose",he),Vt=new Map,tt.programs=Vt);let se=Vt.get(Ot);if(se!==void 0){if(tt.currentProgram===se&&tt.lightsStateVersion===Ft)return A0(R,Lt),se}else Lt.uniforms=At.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,rt,Lt),R.onBeforeCompile(Lt,A),se=At.acquireProgram(Lt,Ot),Vt.set(Ot,se),tt.uniforms=Lt.uniforms;const Bt=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=Gt.uniform),A0(R,Lt),tt.needsLights=cd(R),tt.lightsStateVersion=Ft,tt.needsLights&&(Bt.ambientLightColor.value=et.state.ambient,Bt.lightProbe.value=et.state.probe,Bt.sunLights.value=et.state.sun,Bt.sunLightShadows.value=et.state.sunShadow,Bt.directionalLights.value=et.state.directional,Bt.directionalLightShadows.value=et.state.directionalShadow,Bt.spotLights.value=et.state.spot,Bt.spotLightShadows.value=et.state.spotShadow,Bt.rectAreaLights.value=et.state.rectArea,Bt.ltc_1.value=et.state.rectAreaLTC1,Bt.ltc_2.value=et.state.rectAreaLTC2,Bt.pointLights.value=et.state.point,Bt.pointLightShadows.value=et.state.pointShadow,Bt.hemisphereLights.value=et.state.hemi,Bt.sunShadowMatrix.value=et.state.sunShadowMatrix,Bt.sunShadowCascade.value=et.state.sunShadowCascade,Bt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Bt.spotLightMatrix.value=et.state.spotLightMatrix,Bt.spotLightMap.value=et.state.spotLightMap,Bt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=y.state.lightProbeGridArray.length>0,tt.currentProgram=se,tt.uniformsList=null,se}function T0(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=ra.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function A0(R,W){const rt=j.get(R);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function od(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let rt=0,tt=R.length;rt<tt;rt++){const et=R[rt];if(et.texture!==null&&et.boundingBox.containsPoint(x))return et}return null}function rd(R,W,rt,tt,et){W.isScene!==!0&&(W=Dt),ct.resetTextureUnits();const It=W.fog,Ft=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?W.environment:null,Lt=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:re.workingColorSpace,Ot=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Vt=bt.get(tt.envMap||Ft,Ot),jt=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Bt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Ue=!!rt.morphAttributes.color;let be=qn;tt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(be=A.toneMapping);const ve=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ye=ve!==void 0?ve.length:0,Nt=j.get(tt),nn=y.state.lights;if(K===!0&&(ot===!0||R!==J)){const Se=R===J&&tt.id===Y;Gt.setState(tt,R,Se)}let le=!1;tt.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==nn.state.version||Nt.outputColorSpace!==Lt||et.isBatchedMesh&&Nt.batching===!1||!et.isBatchedMesh&&Nt.batching===!0||et.isBatchedMesh&&Nt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Nt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Nt.instancing===!1||!et.isInstancedMesh&&Nt.instancing===!0||et.isSkinnedMesh&&Nt.skinning===!1||!et.isSkinnedMesh&&Nt.skinning===!0||et.isInstancedMesh&&Nt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Nt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Nt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Nt.instancingMorph===!1&&et.morphTexture!==null||Nt.envMap!==Vt||tt.fog===!0&&Nt.fog!==It||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Gt.numPlanes||Nt.numIntersection!==Gt.numIntersection)||Nt.vertexAlphas!==jt||Nt.vertexTangents!==se||Nt.morphTargets!==Bt||Nt.morphNormals!==ue||Nt.morphColors!==Ue||Nt.toneMapping!==be||Nt.morphTargetsCount!==Ye||!!Nt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Nt.__version=tt.version);let Tn=Nt.currentProgram;le===!0&&(Tn=ts(tt,W,et),D&&tt.isNodeMaterial&&D.onUpdateProgram(tt,Tn,Nt));let Qn=!1,Ii=!1,vs=!1;const me=Tn.getUniforms(),De=Nt.uniforms;if(T.useProgram(Tn.program)&&(Qn=!0,Ii=!0,vs=!0),tt.id!==Y&&(Y=tt.id,Ii=!0),Nt.needsLights){const Se=od(y.state.lightProbeGridArray,et);Nt.lightProbeGrid!==Se&&(Nt.lightProbeGrid=Se,Ii=!0)}if(Qn||J!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),me.setValue(O,"projectionMatrix",R.projectionMatrix),me.setValue(O,"viewMatrix",R.matrixWorldInverse);const Ni=me.map.cameraPosition;Ni!==void 0&&Ni.setValue(O,ft.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&me.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&me.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,Ii=!0,vs=!0)}if(Nt.needsLights&&(nn.state.sunShadowMap.length>0&&me.setValue(O,"sunShadowMap",nn.state.sunShadowMap,ct),nn.state.directionalShadowMap.length>0&&me.setValue(O,"directionalShadowMap",nn.state.directionalShadowMap,ct),nn.state.spotShadowMap.length>0&&me.setValue(O,"spotShadowMap",nn.state.spotShadowMap,ct),nn.state.pointShadowMap.length>0&&me.setValue(O,"pointShadowMap",nn.state.pointShadowMap,ct)),et.isSkinnedMesh){me.setOptional(O,et,"bindMatrix"),me.setOptional(O,et,"bindMatrixInverse");const Se=et.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),me.setValue(O,"boneTexture",Se.boneTexture,ct))}et.isBatchedMesh&&(me.setOptional(O,et,"batchingTexture"),me.setValue(O,"batchingTexture",et._matricesTexture,ct),me.setOptional(O,et,"batchingIdTexture"),me.setValue(O,"batchingIdTexture",et._indirectTexture,ct),me.setOptional(O,et,"batchingColorTexture"),et._colorsTexture!==null&&me.setValue(O,"batchingColorTexture",et._colorsTexture,ct));const Ui=rt.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&X.update(et,rt,Tn),(Ii||Nt.receiveShadow!==et.receiveShadow)&&(Nt.receiveShadow=et.receiveShadow,me.setValue(O,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&W.environment!==null&&(De.envMapIntensity.value=W.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=v3()),Ii){if(me.setValue(O,"toneMappingExposure",A.toneMappingExposure),Nt.needsLights&&ad(De,vs),It&&tt.fog===!0&&Ht.refreshFogUniforms(De,It),Ht.refreshMaterialUniforms(De,tt,N,V,y.state.transmissionRenderTarget[R.id]),Nt.needsLights&&Nt.lightProbeGrid){const Se=Nt.lightProbeGrid;De.probesSH.value=Se.texture,De.probesMin.value.copy(Se.boundingBox.min),De.probesMax.value.copy(Se.boundingBox.max),De.probesResolution.value.copy(Se.resolution)}ra.upload(O,T0(Nt),De,ct)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ra.upload(O,T0(Nt),De,ct),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&me.setValue(O,"center",et.center),me.setValue(O,"modelViewMatrix",et.modelViewMatrix),me.setValue(O,"normalMatrix",et.normalMatrix),me.setValue(O,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){const Se=tt.uniformsGroups;for(let Ni=0,Ms=Se.length;Ni<Ms;Ni++){const C0=Se[Ni];Q.update(C0,Tn),Q.bind(C0,Tn)}}return Tn}function ad(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function cd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,W,rt){const tt=j.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),j.get(R.texture).__webglTexture=W,j.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const rt=j.get(R);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,rt=0){q=R,k=W,H=rt;let tt=null,et=!1,It=!1;if(R){const Lt=j.get(R);if(Lt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(O.FRAMEBUFFER,Lt.__webglFramebuffer),it.copy(R.viewport),yt.copy(R.scissor),vt=R.scissorTest,T.viewport(it),T.scissor(yt),T.setScissorTest(vt),Y=-1;return}else if(Lt.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(Lt.__hasExternalTextures)ct.rebindTextures(R,j.get(R.texture).__webglTexture,j.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Lt.__boundDepthTexture!==jt){if(jt!==null&&j.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}const Ot=R.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(It=!0);const Vt=j.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[W])?tt=Vt[W][rt]:tt=Vt[W],et=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?tt=j.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?tt=Vt[rt]:tt=Vt,it.copy(R.viewport),yt.copy(R.scissor),vt=R.scissorTest}else it.copy(st).multiplyScalar(N).floor(),yt.copy(ut).multiplyScalar(N).floor(),vt=Et;if(rt!==0&&(tt=P),T.bindFramebuffer(O.FRAMEBUFFER,tt)&&T.drawBuffers(R,tt),T.viewport(it),T.scissor(yt),T.setScissorTest(vt),et){const Lt=j.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,rt)}else if(It){const Lt=W;for(let Ot=0;Ot<R.textures.length;Ot++){const Vt=j.get(R.textures[Ot]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ot,Vt.__webglTexture,rt,Lt)}}else if(R!==null&&rt!==0){const Lt=j.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Lt.__webglTexture,rt)}Y=-1};function R0(R){const W=j.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=I.textureFormatReadable(R.format),W.__typeReadable=I.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,rt,tt,et,It,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot){T.bindFramebuffer(O.FRAMEBUFFER,Ot);try{const Vt=R.textures[Lt],jt=Vt.format,se=Vt.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Lt);const Bt=R0(Vt);if(Bt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-tt&&rt>=0&&rt<=R.height-et&&O.readPixels(W,rt,tt,et,nt.convert(jt),nt.convert(se),It)}finally{const Vt=q!==null?j.get(q).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(R,W,rt,tt,et,It,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot)if(W>=0&&W<=R.width-tt&&rt>=0&&rt<=R.height-et){T.bindFramebuffer(O.FRAMEBUFFER,Ot);const Vt=R.textures[Lt],jt=Vt.format,se=Vt.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Lt);const Bt=R0(Vt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ue),O.bufferData(O.PIXEL_PACK_BUFFER,It.byteLength,O.STREAM_READ),O.readPixels(W,rt,tt,et,nt.convert(jt),nt.convert(se),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ue=q!==null?j.get(q).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,Ue);const be=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await hd(O,be,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ue),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,It),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ue),O.deleteSync(be),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,rt=0){const tt=Math.pow(2,-rt),et=Math.floor(R.image.width*tt),It=Math.floor(R.image.height*tt),Ft=W!==null?W.x:0,Lt=W!==null?W.y:0;ct.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,rt,0,0,Ft,Lt,et,It),T.unbindTexture()},this.copyTextureToTexture=function(R,W,rt=null,tt=null,et=0,It=0){let Ft,Lt,Ot,Vt,jt,se,Bt,ue,Ue;const be=R.isCompressedTexture?R.mipmaps[It]:R.image;if(rt!==null)Ft=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,Vt=rt.min.x,jt=rt.min.y,se=rt.isBox3?rt.min.z:0;else{const De=Math.pow(2,-et);Ft=Math.floor(be.width*De),Lt=Math.floor(be.height*De),R.isDataArrayTexture?Ot=be.depth:R.isData3DTexture?Ot=Math.floor(be.depth*De):Ot=1,Vt=0,jt=0,se=0}tt!==null?(Bt=tt.x,ue=tt.y,Ue=tt.z):(Bt=0,ue=0,Ue=0);const ve=nt.convert(W.format),Ye=nt.convert(W.type);let Nt;W.isData3DTexture?(ct.setTexture3D(W,0),Nt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ct.setTexture2DArray(W,0),Nt=O.TEXTURE_2D_ARRAY):(ct.setTexture2D(W,0),Nt=O.TEXTURE_2D),T.activeTexture(O.TEXTURE0),T.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const nn=T.getParameter(O.UNPACK_ROW_LENGTH),le=T.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=T.getParameter(O.UNPACK_SKIP_PIXELS),Qn=T.getParameter(O.UNPACK_SKIP_ROWS),Ii=T.getParameter(O.UNPACK_SKIP_IMAGES);T.pixelStorei(O.UNPACK_ROW_LENGTH,be.width),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be.height),T.pixelStorei(O.UNPACK_SKIP_PIXELS,Vt),T.pixelStorei(O.UNPACK_SKIP_ROWS,jt),T.pixelStorei(O.UNPACK_SKIP_IMAGES,se);const vs=R.isDataArrayTexture||R.isData3DTexture,me=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const De=j.get(R),Ui=j.get(W),Se=j.get(De.__renderTarget),Ni=j.get(Ui.__renderTarget);T.bindFramebuffer(O.READ_FRAMEBUFFER,Se.__webglFramebuffer),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ms=0;Ms<Ot;Ms++)vs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(R).__webglTexture,et,se+Ms),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(W).__webglTexture,It,Ue+Ms)),O.blitFramebuffer(Vt,jt,Ft,Lt,Bt,ue,Ft,Lt,O.DEPTH_BUFFER_BIT,O.NEAREST);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(et!==0||R.isRenderTargetTexture||j.has(R)){const De=j.get(R),Ui=j.get(W);T.bindFramebuffer(O.READ_FRAMEBUFFER,L),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let Se=0;Se<Ot;Se++)vs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.__webglTexture,et,se+Se):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,De.__webglTexture,et),me?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ui.__webglTexture,It,Ue+Se):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ui.__webglTexture,It),et!==0?O.blitFramebuffer(Vt,jt,Ft,Lt,Bt,ue,Ft,Lt,O.COLOR_BUFFER_BIT,O.NEAREST):me?O.copyTexSubImage3D(Nt,It,Bt,ue,Ue+Se,Vt,jt,Ft,Lt):O.copyTexSubImage2D(Nt,It,Bt,ue,Vt,jt,Ft,Lt);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else me?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Nt,It,Bt,ue,Ue,Ft,Lt,Ot,ve,Ye,be.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Nt,It,Bt,ue,Ue,Ft,Lt,Ot,ve,be.data):O.texSubImage3D(Nt,It,Bt,ue,Ue,Ft,Lt,Ot,ve,Ye,be):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,It,Bt,ue,Ft,Lt,ve,Ye,be.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,It,Bt,ue,be.width,be.height,ve,be.data):O.texSubImage2D(O.TEXTURE_2D,It,Bt,ue,Ft,Lt,ve,Ye,be);T.pixelStorei(O.UNPACK_ROW_LENGTH,nn),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),T.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),T.pixelStorei(O.UNPACK_SKIP_ROWS,Qn),T.pixelStorei(O.UNPACK_SKIP_IMAGES,Ii),It===0&&W.generateMipmaps&&O.generateMipmap(Nt),T.unbindTexture()},this.initRenderTarget=function(R){j.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){k=0,H=0,q=null,T.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const _0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:zl,AddEquation:as,AddOperation:Bu,AdditiveBlending:fl,AgXToneMapping:Hl,AlphaFormat:Zl,AlwaysCompare:Zu,AlwaysDepth:fa,AlwaysStencilFunc:Gu,ArcCurve:of,ArrayCamera:wf,BackSide:fn,BasicDepthPacking:ku,Box3:Qi,BoxGeometry:we,BufferAttribute:On,BufferGeometry:Pe,ByteType:Wl,Cache:oa,Camera:p0,CanvasTexture:nf,CatmullRomCurve3:r0,CineonToneMapping:Bl,CircleGeometry:lo,ClampToEdgeWrapping:ri,Color:Yt,ColorManagement:re,ConstantAlphaFactor:Nu,ConstantColorFactor:Iu,Controls:Ef,CubeCamera:yf,CubeDepthTexture:sf,CubeReflectionMapping:Ki,CubeRefractionMapping:ds,CubeTexture:i0,CubeUVReflectionMapping:gr,CubicBezierCurve:a0,CubicBezierCurve3:rf,CullFaceBack:ul,CullFaceFront:_u,CullFaceNone:gu,Curve:Kn,CurvePath:cf,CustomBlending:vu,CustomToneMapping:kl,CylinderGeometry:En,Data3DTexture:tf,DataArrayTexture:Jl,DataTexture:dc,DefaultLoadingManager:vf,DepthFormat:hi,DepthStencilFormat:qi,DepthTexture:oo,DirectionalLight:m0,DoubleSide:ln,DstAlphaFactor:Ru,DstColorFactor:Pu,EllipseCurve:gc,EqualCompare:Xu,EqualDepth:pa,EquirectangularReflectionMapping:zo,EquirectangularRefractionMapping:ea,Euler:ui,EventDispatcher:Pi,ExternalTexture:s0,ExtrudeGeometry:_r,Float32BufferAttribute:oe,FloatType:In,Fog:fc,FrontSide:Xn,Frustum:pc,GLSL3:ml,GreaterCompare:qu,GreaterDepth:ga,GreaterEqualCompare:hc,GreaterEqualDepth:ma,Group:_e,HalfFloatType:$n,HemisphereLight:d0,IcosahedronGeometry:_s,ImageLoader:Mf,ImageUtils:Qu,InstancedBufferAttribute:_l,InstancedMesh:Ci,IntType:nc,KeepStencilOp:ia,Layers:Ql,LessCompare:Wu,LessDepth:da,LessEqualCompare:lc,LessEqualDepth:to,Light:f0,LightShadow:bf,LineCurve:c0,LineCurve3:af,LinearFilter:qe,LinearMipmapLinearFilter:Xi,LinearMipmapNearestFilter:na,LinearSRGBColorSpace:sr,LinearToneMapping:Fl,LinearTransfer:or,Loader:vc,LoadingManager:xf,MOUSE:Ti,Material:gs,MathUtils:ae,Matrix2:bl,Matrix3:Jt,Matrix4:Me,MaxEquation:yu,Mesh:xe,MeshBasicMaterial:ji,MeshDepthMaterial:gf,MeshDistanceMaterial:_f,MeshLambertMaterial:ne,MeshPhongMaterial:Zo,MinEquation:bu,MirroredRepeatWrapping:eo,MixOperation:Ou,MultiplyBlending:pl,MultiplyOperation:mr,NearestFilter:Ve,NearestMipmapLinearFilter:To,NearestMipmapNearestFilter:zu,NeutralToneMapping:Gl,NeverCompare:Vu,NeverDepth:ua,NoBlending:ai,NoColorSpace:Si,NoToneMapping:qn,NormalBlending:qs,NotEqualCompare:Yu,NotEqualDepth:_a,Object3D:Ae,ObjectSpaceNormalMap:Hu,OneFactor:Eu,OneMinusConstantAlphaFactor:Fu,OneMinusConstantColorFactor:Uu,OneMinusDstAlphaFactor:Cu,OneMinusDstColorFactor:Lu,OneMinusSrcAlphaFactor:Nl,OneMinusSrcColorFactor:Au,OrthographicCamera:Mc,PCFShadowMap:Bo,PCFSoftShadowMap:xu,PMREMGenerator:yl,Path:xl,PerspectiveCamera:je,Plane:ii,PlaneGeometry:Li,PolyhedronGeometry:mc,QuadraticBezierCurve:l0,QuadraticBezierCurve3:h0,Quaternion:Ri,R11_EAC_Format:Ea,RED_GREEN_RGTC2_Format:nr,RED_RGTC1_Format:Xa,REVISION:ec,RG11_EAC_Format:er,RGBAFormat:Un,RGBAIntegerFormat:cc,RGBA_ASTC_10x10_Format:za,RGBA_ASTC_10x5_Format:Fa,RGBA_ASTC_10x6_Format:Oa,RGBA_ASTC_10x8_Format:Ba,RGBA_ASTC_12x10_Format:ka,RGBA_ASTC_12x12_Format:Ha,RGBA_ASTC_4x4_Format:Ra,RGBA_ASTC_5x4_Format:Ca,RGBA_ASTC_5x5_Format:Pa,RGBA_ASTC_6x5_Format:La,RGBA_ASTC_6x6_Format:Da,RGBA_ASTC_8x5_Format:Ia,RGBA_ASTC_8x6_Format:Ua,RGBA_ASTC_8x8_Format:Na,RGBA_BPTC_Format:Ga,RGBA_ETC2_EAC_Format:wa,RGBA_PVRTC_2BPPV1_Format:Sa,RGBA_PVRTC_4BPPV1_Format:Ma,RGBA_S3TC_DXT1_Format:Ho,RGBA_S3TC_DXT3_Format:Go,RGBA_S3TC_DXT5_Format:Vo,RGBFormat:$l,RGB_BPTC_SIGNED_Format:Va,RGB_BPTC_UNSIGNED_Format:Wa,RGB_ETC1_Format:ba,RGB_ETC2_Format:ya,RGB_PVRTC_2BPPV1_Format:va,RGB_PVRTC_4BPPV1_Format:xa,RGB_S3TC_DXT1_Format:ko,RGFormat:Ji,RGIntegerFormat:ac,RawShaderMaterial:mf,Ray:n0,RedFormat:oc,RedIntegerFormat:rc,ReinhardToneMapping:Ol,RenderTarget:ju,RepeatWrapping:tr,ReverseSubtractEquation:Su,SIGNED_R11_EAC_Format:Ta,SIGNED_RED_GREEN_RGTC2_Format:Ya,SIGNED_RED_RGTC1_Format:qa,SIGNED_RG11_EAC_Format:Aa,SRGBColorSpace:Qe,SRGBTransfer:fe,Scene:jl,ShaderChunk:Qt,ShaderLib:Vn,ShaderMaterial:Bn,Shape:_c,ShapeUtils:Ei,ShortType:Xl,Sphere:co,SphereGeometry:Pn,Spherical:Sl,SplineCurve:u0,SrcAlphaFactor:Ul,SrcAlphaSaturateFactor:Du,SrcColorFactor:Tu,StaticDrawUsage:$u,SubtractEquation:Mu,SubtractiveBlending:dl,TOUCH:oi,TangentSpaceNormalMap:ir,Texture:We,TextureLoader:Sf,TextureSource:uc,TorusGeometry:ci,Triangle:Dn,TubeGeometry:xc,UVMapping:Vl,Uint16BufferAttribute:t0,Uint32BufferAttribute:e0,UniformsLib:Pt,UniformsUtils:pf,UnsignedByteType:_n,UnsignedInt101111Type:Yl,UnsignedInt248Type:io,UnsignedInt5999Type:ql,UnsignedIntType:Zn,UnsignedShort4444Type:ic,UnsignedShort5551Type:sc,UnsignedShortType:no,VSMShadowMap:Ws,Vector2:St,Vector3:z,Vector4:Te,WebGLCoordinateSystem:Wn,WebGLCubeRenderTarget:g0,WebGLRenderTarget:Fn,WebGLRenderer:Uf,WebGLUtils:Df,WebGPUCoordinateSystem:so,WebXRController:sa,ZeroFactor:wu,createCanvasElement:Ku,error:ce,log:gl,warn:Zt,warnOnce:hs},Symbol.toStringTag,{value:"Module"})),Rh={type:"change"},x0={type:"start"},Nf={type:"end"},Wr=new n0,Ch=new ii,M3=Math.cos(70*ae.DEG2RAD),Fe=new z,pn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tl=1e-6;class S3 extends Ef{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Ri,this._lastTargetPosition=new z,this._quat=new Ri().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sl,this._sphericalDelta=new Sl,this._scale=1,this._panOffset=new z,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new z,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y3.bind(this),this._onPointerDown=b3.bind(this),this._onPointerUp=w3.bind(this),this._onContextMenu=L3.bind(this),this._onMouseWheel=A3.bind(this),this._onKeyDown=R3.bind(this),this._onTouchStart=C3.bind(this),this._onTouchMove=P3.bind(this),this._onMouseDown=E3.bind(this),this._onMouseMove=T3.bind(this),this._interceptControlDown=D3.bind(this),this._interceptControlUp=I3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=de.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rh),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Fe.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Wr.origin.copy(this.object.position),Wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wr.direction))<M3?this.object.lookAt(this.target):(Ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wr.intersectPlane(Ch,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tl||this._lastTargetPosition.distanceToSquared(this.target)>tl?(this.dispatchEvent(Rh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Fe.copy(s).sub(this.target);let o=Fe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new St,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function b3(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function y3(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function w3(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nf),this.state=de.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function E3(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case Ti.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case Ti.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(x0)}function T3(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function A3(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(x0),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Nf))}function R3(i){this.enabled!==!1&&this._handleKeyDown(i)}function C3(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(x0)}function P3(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function L3(i){this.enabled!==!1&&i.preventDefault()}function D3(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function I3(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{clamp:v0,lerp:Cn,smoothstep:ei}=ae;function Ge(i,t,e){let n=null,s=0;for(let o=1;o<e.length;o++){const[r,a]=e[o-1],[l,c]=e[o],h=l-r,f=c-a,u=Math.hypot(h,f);if(u<.01)continue;const d=v0(((i-r)*h+(t-a)*f)/u,0,u),g=r+h*d/u,_=a+f*d/u,p=Math.hypot(i-g,t-_);if(!n||p<n.distance){const m=-f/u,v=h/u;n={x:g,z:_,nx:m,nz:v,offset:(i-g)*m+(t-_)*v,run:s+d,distance:p}}s+=u}return n&&{...n,length:s}}function $o(i,t=0){return[Math.min(...i.map(([e])=>e))-t,Math.min(...i.map(([,e])=>e))-t,Math.max(...i.map(([e])=>e))+t,Math.max(...i.map(([,e])=>e))+t]}function el([i,t,e,n],[s,o,r,a]){return i<r&&e>s&&t<a&&n>o}function Xr(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function Fs(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([Cn(s[0],o[0],l),Cn(s[1],o[1],l)])}}return e}function U3(i){const t=i.edge,[e,n]=t[0],[s,o]=t.at(-1),r=Math.hypot(s-e,o-n),a=(s-e)/r,l=(o-n)/r,c=(d,g)=>(d-e)*a+(g-n)*l,h=t.slice(1).map((d,g)=>{const _=t[g],[p,m]=_,[v,S]=d,x=Math.hypot(v-p,S-m),b=c(p,m),y=c(v,S);return{a:_,b:d,span:x,start:b,end:y,offset:(M,E)=>((M-p)*(m-S)+(E-m)*(v-p))/x,bounds:$o([_,d],.005)}}),f=$o(t,i.reach??95),u=$o(t,.01);return{...i,length:r,station:c,segments:h,range:f,crestBounds:u}}function nl(i,t,e){const n=i.station(t,e);if(n<-.001||n>i.length+.001)return null;const s=i.segments.find(({end:f})=>n<=f+.001)??i.segments.at(-1),{a:o,b:r,offset:a,start:l,end:c}=s,h=v0((n-l)/(c-l),0,1);return{offset:a(t,e),upper:Cn(o[2],r[2],h),lower:Cn(o[3],r[3],h)}}function N3(i){const t=[];for(const e of i){if(!e.edge||e.edge.length<2)continue;const n={...e,upperDecks:e.upperDeck?[e.upperDeck]:[],lowerDecks:e.lowerDeck?[e.lowerDeck]:[]},s=t.at(-1);if(!s||s.soft||n.soft||s.edge.at(-1).some((o,r)=>Math.abs(o-n.edge[0][r])>.01)){t.push(n);continue}s.edge=[...s.edge,...n.edge.slice(1)],s.shore=[...s.shore,...n.shore.slice(1)],s.breaks=[...s.breaks??[],...n.breaks??[]],s.upperDecks.push(...n.upperDecks),s.lowerDecks.push(...n.lowerDecks),s.flatInland=Math.max(s.flatInland??10,n.flatInland??10),s.blendInland=Math.max(s.blendInland??50,n.blendInland??50),s.endFade=n.endFade}return t}function F3(i){const t=N3(i).map(U3),e=i.filter(({beach:p})=>p?.length>1).map(p=>({...p,range:$o(p.beach,p.reach??100)})),n=i.flatMap(p=>p.paths??[]),s=Object.assign({},...i.map(p=>p.upperIds)),o=Object.assign({},...i.map(p=>p.lowerIds)),r=Object.assign({},...i.map(p=>p.stairs)),a=Object.assign({},...i.map(p=>p.ramps)),l=Object.assign({},...i.map(p=>p.stairWidths)),c=Object.assign({},...i.map(p=>p.stairRun)),h=new Set(i.flatMap(p=>p.underDeckIds??[])),f=[...t,...e].map(p=>p.range);function u(p,m,v,S){const x=S?[S.section]:t;for(const b of x){if(!Xr(p,m,b.range))continue;const y=nl(b,p,m);if(!y||y.offset<-(b.reach??95)||y.offset>52)continue;const w=Ge(p,m,b.shore??[]),M=b.shoreRise??(b.soft?6.5:3.6),E=b.station(p,m),A=b.startFade??(b.soft?b.fade??12:11),C=b.endFade??(b.soft?b.fade??12:15),D=A?ei(E,0,A):1,P=C?1-ei(E,b.length-C,b.length):1,L=D*P,U=w?Cn(.18,y.lower,ei(w.distance,0,M)):y.lower;if(b.soft){const H=ei(y.offset,-(b.slopeWidth??18),0),q=1-ei(y.offset,10,50);return Cn(v,Cn(U,y.upper,H),L*q)}if(S?.section===b?S.upper:y.offset>=0){const H=1-ei(Math.max(0,y.offset),b.flatInland??10,b.blendInland??50);return Cn(v,y.upper,H*L)}if(!(w&&w.distance>(b.maxShoreDistance??105)))return Cn(v,U,L)}for(const b of e){if(!Xr(p,m,b.range))continue;const y=Ge(p,m,b.beach),w=Ge(p,m,b.shore);if(!y||!w||y.distance>(b.reach??100))continue;const M=Math.max(6,Ge(y.x,y.z,b.shore)?.distance??20);let E=0,A=b.beach[0][2];for(let P=1;P<b.beach.length;P++){const L=b.beach[P-1],U=b.beach[P],k=Math.hypot(U[0]-L[0],U[1]-L[1]);if(y.run<=E+k+.01){A=Cn(L[2],U[2],v0((y.run-E)/k,0,1));break}E+=k}const C=ei(y.run,0,12)*(1-ei(y.run,y.length-30,y.length)),D=1-ei(y.offset,12,55);return Cn(v,Cn(.18,A,ei(w.distance,0,M)),C*D)}return v}function d(p){const m=$o(p);for(const v of t){let w=function(M,E){M.length>=3&&y.push({ring:M,side:E})};if(v.soft||!el(m,v.crestBounds))continue;const{station:S,length:x}=v;if(!v.segments.filter(M=>el(m,M.bounds)).some(M=>{const E=p.map(([A,C])=>M.offset(A,C));return Math.min(...E)<=1e-7&&Math.max(...E)>=-1e-7}))continue;const y=[];w(Fs(p,([M,E])=>-S(M,E)));for(const M of v.segments){const{start:E,end:A,offset:C}=M;let D=Fs(p,([P,L])=>S(P,L)-E);D=Fs(D,([P,L])=>A-S(P,L)),!(D.length<3)&&(w(Fs(D,([P,L])=>C(P,L)),{section:v,upper:!0}),w(Fs(D,([P,L])=>-C(P,L)),{section:v,upper:!1}))}return w(Fs(p,([M,E])=>S(M,E)-x)),y}return null}function g(p,m){return t.some(v=>!v.soft&&Xr(p,m,v.range)&&Math.abs(nl(v,p,m)?.offset??1/0)<7)}function _(p,m,v){for(const S of t){if(!Xr(p,m,S.range))continue;const x=nl(S,p,m);if(x&&Math.abs(x.offset)<36)return x.lower}return v}return{sections:t,extras:n,upperWidths:s,lowerWidths:o,stairLevels:r,rampLevels:a,stairWidths:l,stairRuns:c,deckRoofs:h,apply:u,split:d,nearEdge:g,lowerGrade:_,refines:(p,m,v)=>f.some(S=>el([p,m,p+v,m+v],S))}}const Co=Object.freeze({west:-647,east:-125,north:-138,south:129,innerWest:-624,innerEast:-144,innerNorth:-107,innerSouth:104}),Hi=i=>i.toFixed(1),{west:O3,east:B3,north:z3,south:k3,innerWest:H3,innerEast:G3,innerNorth:V3,innerSouth:W3}=Co,M0=`
  float cartoonDistrict(vec2 worldXZ) {
    // The harbour curves north at the Ocean end of the promenade.
    float harbourBend = 61.0 * (1.0 - smoothstep(-595.0, -500.0, worldXZ.x));
    vec2 fromWestNorth = smoothstep(
      vec2(${Hi(O3)}, ${Hi(z3)} - harbourBend),
      vec2(${Hi(H3)}, ${Hi(V3)} - harbourBend), worldXZ);
    vec2 fromEastSouth = 1.0 - smoothstep(
      vec2(${Hi(G3)}, ${Hi(W3)}),
      vec2(${Hi(B3)}, ${Hi(k3)}), worldXZ);
    return fromWestNorth.x * fromWestNorth.y * fromEastSouth.x * fromEastSouth.y;
  }
`,yc={cartoonEnabled:{value:1}};function X3(i){yc.cartoonEnabled.value=i?1:0}const Ph={plaster:{tile:"plaster",size:[2.9,2.9],grain:.63,tint:"#ebc190",palette:.3},stone:{tile:"stone",size:[3.3,2.05],grain:.67,tint:"#caa36b",palette:.18},paving:{tile:"stone",size:[3.3,3.3],grain:.39,tint:"#dfc59c",palette:.17},laidPaving:{tile:"plaster",size:[2.6,2.6],grain:.65,tint:"#e5c8a0",palette:.25},roof:{tile:"terracotta",size:[2.45,1.45],grain:.5,tint:"#bd6243",palette:.22},flatRoof:{tile:"plaster",size:[5.1,5.1],grain:.44,tint:"#c9bc9f",palette:.12},foliage:{tile:"leaves",size:[2.3,2.3],grain:.79,tint:"#7ea72f",palette:.52},glass:{tile:"plaster",size:[4,3],grain:.16,tint:"#4e7881",palette:.38},wood:{tile:"plaster",size:[1.2,3.5],grain:.53,tint:"#94663c",palette:.14},metal:{tile:"plaster",size:[3.5,3.5],grain:.17,tint:"#ad9d86",palette:.09},ground:{tile:"plaster",size:[8.2,8.2],grain:.53,tint:"#d8b97e",palette:.2},road:{tile:"plaster",size:[4.3,4.3],grain:.33,tint:"#918780",palette:.23}},q3={plaster:.694,stone:.568,terracotta:.271,leaves:.232},il=new Map,Lh=new WeakSet;function Ff(i){if(il.has(i))return il.get(i);const t={value:0},e=`./art/waterfront-${i}.webp`,n=new Sf().load(e,()=>{t.value=1});n.colorSpace=Qe,n.wrapS=eo,n.wrapT=i==="terracotta"?tr:eo,n.anisotropy=4;const s={texture:n,ready:t};return il.set(i,s),s}function Y3(){if(typeof document>"u")return{waterPigment:{value:null},waterPigmentReady:{value:0}};const i=Ff("water");return{waterPigment:{value:i.texture},waterPigmentReady:i.ready}}function uo(i,{surface:t="plaster",strength:e=1}={}){if(Lh.has(i)||typeof document>"u")return i;Lh.add(i);const{tile:n,size:s,grain:o,tint:r,palette:a}=Ph[t]??Ph.plaster,l=Ff(n),c=i.onBeforeCompile,h=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${h}|anapa-paint|${t}|${e}`,i.onBeforeCompile=function(f,u){c.call(this,f,u),Object.assign(f.uniforms,yc,{pigment:{value:l.texture},pigmentReady:l.ready,pigmentMean:{value:q3[n]},pigmentPeriod:{value:new St(...s)},pigmentTint:{value:new Yt(r)},pigmentPalette:{value:a},pigmentGrain:{value:o},pigmentStrength:{value:e}}),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying vec3 paintedWorld;`).replace("#include <project_vertex>",`
        #include <project_vertex>
        vec4 paintedPoint = vec4(transformed, 1.0);
        #ifdef USE_BATCHING
          paintedPoint = batchingMatrix * paintedPoint;
        #endif
        #ifdef USE_INSTANCING
          paintedPoint = instanceMatrix * paintedPoint;
        #endif
        paintedWorld = (modelMatrix * paintedPoint).xyz;
      `),f.fragmentShader=f.fragmentShader.replace("#include <common>",`
        #include <common>
        varying vec3 paintedWorld;
        uniform sampler2D pigment;
        uniform float cartoonEnabled, pigmentReady, pigmentMean, pigmentGrain, pigmentPalette, pigmentStrength;
        uniform vec2 pigmentPeriod;
        uniform vec3 pigmentTint;
        ${M0}
      `).replace("#include <color_fragment>",`
        #include <color_fragment>
        float paintedAmount = cartoonEnabled * pigmentStrength * cartoonDistrict(paintedWorld.xz);
        vec3 paintedNormal = abs(normalize(cross(dFdx(paintedWorld), dFdy(paintedWorld))));
        vec2 paintedUV = paintedNormal.y > max(paintedNormal.x, paintedNormal.z)
          ? paintedWorld.xz
          : vec2(paintedNormal.x > paintedNormal.z ? paintedWorld.z : paintedWorld.x, paintedWorld.y);
        if (paintedAmount > 0.002) {
          vec3 baseInk = diffuseColor.rgb;
          float baseLuma = dot(baseInk, vec3(0.2126, 0.7152, 0.0722));
          float tintedLuma = dot(pigmentTint, vec3(0.2126, 0.7152, 0.0722));
          vec3 colouredInk = clamp(mix(vec3(baseLuma), baseInk, 1.39), 0.0, 1.0);
          vec3 tintWithBaseLight = pigmentTint * ((baseLuma + 0.04) / (tintedLuma + 0.04));
          vec3 ink = mix(colouredInk * vec3(1.11, 1.06, 0.96), tintWithBaseLight, pigmentPalette);
          if (pigmentReady > 0.5) {
            vec3 brush = texture2D(pigment, paintedUV / pigmentPeriod).rgb;
            float brushLuma = dot(brush, vec3(0.2126, 0.7152, 0.0722));
            float marks = clamp(brushLuma / pigmentMean, 0.40, 1.48) - 1.0;
            ink *= 1.0 + marks * pigmentGrain;
          }
          diffuseColor.rgb = mix(baseInk, clamp(ink, 0.0, 1.0), paintedAmount);
        }
      `)},i.needsUpdate=!0,i}const Of="#526e7c",Z3="#f0eee6";function pe(i,t,{surface:e="plaster",surfaces:n={}}={}){const s=new Map,o=new Map([[Of,"glass"]]);for(const[d,g]of Object.entries(n))for(const _ of g)o.set(_,d);const r=new _e;r.name=t,i.add(r);function a(d,g,_){const p=o.get(d)??g;s.has(p)||s.set(p,new Map);const m=s.get(p);m.has(d)||m.set(d,[]);const v=m.get(d);for(let S=2;S<_.length;S++)v.push(..._[0],..._[S-1],..._[S])}function l(d,...g){a(d,e,g)}function c(d,g,_){const p=d.map(([m,v])=>new St(m,v));for(const[m,v,S]of Ei.triangulateShape(p,[])){const[x,b,y]=[p[m],p[v],p[S]],M=(b.x-x.x)*(y.y-x.y)-(b.y-x.y)*(y.x-x.x)>0?[x,y,b]:[x,b,y];a(_,"paving",M.map(({x:E,y:A})=>[E,g,A]))}}function h(d,g,_,p,m){l(m,[d[0],_,d[1]],[g[0],_,g[1]],[g[0],p,g[1]],[d[0],p,d[1]])}function f(d,g,_,p,m=p){const v=d.reduce((S,[x,b],y)=>{const[w,M]=d[(y+1)%d.length];return S+x*M-w*b},0);d.forEach((S,x)=>{const b=d[(x+1)%d.length];v>0?h(b,S,g,_,p):h(S,b,g,_,p)}),m&&c(d,_,m)}function u(d,g,_,p){const m=new z(...d),v=new z(...g),S=v.clone().sub(m).normalize(),b=(Math.abs(S.z)<.9?new z(0,0,1):new z(1,0,0)).cross(S).normalize().multiplyScalar(_/2),y=S.clone().cross(b),w=[m,v].map(M=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([E,A])=>M.clone().addScaledVector(b,E).addScaledVector(y,A).toArray()));for(let M=0;M<4;M++){const E=(M+1)%4;a(p,"metal",[w[0][M],w[1][M],w[1][E],w[0][E]])}a(p,"metal",w[0]),a(p,"metal",w[1].reverse())}return{face:l,flat:c,wall:h,shell:f,beam:u,finish(){for(const[d,g]of s)for(const[_,p]of g){const m=new Pe;m.setAttribute("position",new oe(p,3)),m.computeVertexNormals();const v=uo(new ne({color:_,side:ln}),{surface:d}),S=new xe(m,v);S.castShadow=!0,S.receiveShadow=!0,r.add(S)}}}}function _t(i,t,e){return i.map((n,s)=>ae.lerp(n,t[s],e))}function Re(i){return i.reduce(([t,e],[n,s])=>[t+n/i.length,e+s/i.length],[0,0])}function xn(i,t,e,n,s,o,r,a=Z3){const l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=Math.max(1,Math.round(l/r));for(let h=0;h<c;h++){const f=_t(n,_t(t,e,(h+.035)/c),1.003),u=_t(n,_t(t,e,(h+.965)/c),1.003);i.wall(f,u,s,o,Of),i.wall(u,_t(n,_t(t,e,(h+1)/c),1.003),s,o,a)}}function sl(i,t,e,n=10){return Array.from({length:n},(s,o)=>{const r=o*Math.PI*2/n;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function Bf(i,t,{name:e,lights:n,planters:s}){const o="#878887",r="#646765",a=pe(i,e,{surfaces:{metal:[o,r],stone:["#d8d4c7"],ground:["#8c7e60"]}}),l=new Ci(new Pn(.23,10,7),new ne({color:"#eddaa4"}),n.length*4),c=new Ci(new _s(1,1),uo(new ne({color:"#607a45"}),{surface:"foliage"}),s.length*7);l.name="Плафоны верхней набережной",c.name="Кустарники в клумбах набережной";const h=new Ae;n.forEach(([f,u],d)=>{const g=t(f,u)+.03;a.shell(sl(f,u,.3),g-.13,g+.35,o),a.shell(sl(f,u,.19),g+.32,g+3.72,o);for(const _ of[.44,.68,3.55,3.7])a.shell(sl(f,u,.25),g+_,g+_+.1,r);for(let _=0;_<4;_++){const p=Math.PI/4+_*Math.PI/2,m=Math.cos(p),v=Math.sin(p),S=[f+m*.46,g+3.77,u+v*.46];a.beam([f+m*.1,g+3.49,u+v*.1],S,.075,r),h.position.set(S[0],S[1]+.19,S[2]),h.updateMatrix(),l.setMatrixAt(d*4+_,h.matrix)}}),s.forEach(({x:f,z:u,width:d,depth:g,angle:_},p)=>{const m=(x,b)=>[f+x*Math.cos(_)-b*Math.sin(_),u+x*Math.sin(_)+b*Math.cos(_)],v=(x,b)=>[[-x,-b],[x,-b],[x,b],[-x,b]].map(y=>m(...y)),S=t(f,u);a.shell(v(d/2,g/2),S-.1,S+.16,"#d8d4c7"),a.flat(v(d/2-.17,g/2-.17),S+.175,"#8c7e60");for(let x=0;x<7;x++){const[b,y]=m((x-3)*d/7.8,x%2?-.45:.52);h.position.set(b,S+.53,y);const w=.52+x%3*.17;h.scale.set(w,.5+x%2*.26,w*.84),h.rotation.y=x*1.8,h.updateMatrix(),c.setMatrixAt(p*7+x,h.matrix)}}),l.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,i.add(l,c),a.finish()}const Gs={front:[[-549.25,-30.85],[-517.3,-24.44]],depth:9.15,grade:9.03},$3=[{soft:!0,edge:[[-1194.65,-.88,7.9,2.35],[-1188.5,-6.93,8.7,2.35],[-1176.23,-13.69,9.8,2.35],[-1157.84,-21.72,11.8,2.35],[-1124.63,-25.52,12.3,2.35],[-1073.23,-30.79,12.65,2.35],[-1033.68,-39.87,13.25,2.35],[-982.49,-49.59,13.9,2.35],[-926.44,-60.99,13.15,2.4],[-878.85,-73.87,12.1,2.4],[-852,-77.5,11,2.4],[-830.48,-78.2,8.65,2.4]],shore:[[-1195,-24],[-1186.4,-36.11],[-1161.69,-54.98],[-1142.57,-67.42],[-1119.74,-82.36],[-1095.11,-100.63],[-1060.66,-124.59],[-1054.64,-114.35],[-1036.42,-110.13],[-995.48,-107.91],[-965.35,-114.27],[-903.18,-133.53],[-868.87,-118.74],[-830.48,-132]],upperIds:{1293020296:7},lowerIds:{},stairs:{}},{soft:!0,slopeWidth:10.8,shoreRise:1.5,fade:0,edge:[[-830.48,-78.2,8.65,2.4],[-820.6,-84.1,6.7,2.4],[-806.05,-90.4,5.7,2.45],[-783.75,-94.4,4.6,2.45],[-753.37,-97.1,3.65,2.45],[-742.87,-98.3,3.45,2.45],[-728.5,-94.3,4.15,2.45],[-696.91,-88.7,5.45,2.45],[-673.68,-83.1,6.45,2.5],[-658.2,-79.35,6.8,2.5],[-641.17,-75.3,7.1,2.5],[-638.31,-66,7.65,2.5],[-605.95,-55.15,8.5,2.55],[-595.02,-59.9,8.8,2.6]],shore:[[-830.48,-132],[-827,-183.4],[-783.08,-190.76],[-774.16,-192.09],[-729.85,-199.2],[-709.27,-201.43],[-646.49,-232.7],[-636.97,-260.15],[-623.68,-157.59],[-595.02,-144]],lowerDeck:[[-826,-133],[-837,-178],[-783,-187],[-739,-193],[-728,-190],[-715,-191],[-697,-176],[-682,-150],[-659,-139],[-662,-109],[-704,-103],[-740,-100],[-779,-101],[-813,-103],[-825,-114]],upperIds:{596938944:4.2,178479537:3.2},lowerIds:{},stairs:{596938943:[8.65,6.7]},stairWidths:{596938943:2.5}},{fade:0,edge:[[-595.02,-59.9,8.8,2.6],[-587.5,-63.5,8.8,2.6],[-576,-56.7,9.05,2.6],[-559,-50.3,9.15,2.6],[-550,-46,9.1,2.6],[-531.8,-47.6,9.04,2.6],[-525.5,-50.1,9,2.6],[-519.4,-61.2,8.96,2.6],[-501.2,-54.2,8.82,2.6],[-485.4,-49,8.71,2.6],[-480.1,-48.6,8.66,2.6],[-447.5,-40.1,8.5,2.6],[-416,-34.55,8.3,2.6],[-410.5,-34.1,8.28,2.6],[-380,-29.6,8.12,2.6],[-372,-29,8.07,2.6],[-350,-29.15,7.98,2.6],[-320,-29,7.9,2.6],[-300,-32,7.8,2.6]],shore:[[-595.02,-144],[-573.37,-123.91],[-563.51,-116.13],[-552.8,-94],[-534.2,-89],[-490,-73.3],[-467.6,-82.1],[-442.59,-61.36],[-405.47,-52.91],[-397.91,-61.01],[-379.03,-54.91],[-372.9,-48.36],[-320.33,-44.46],[-300,-47.3]],upperIds:{178484904:11,701760799:3.45},lowerIds:{701760797:5.2},underDeckIds:["223948923","223948927","223948934","223948896","223948899","223948902","223948903","223948904","223948906","223948908"],upperDeck:[[-595.02,-59.9],[-587.5,-63.5],[-576,-56.7],[-559,-50.3],[-550,-46],[-531.8,-47.6],[-525.5,-50.1],[-519.4,-61.2],[-501.2,-54.2],[-485.4,-49],[-480.1,-48.6],[-447.5,-40.1],[-416,-34.55],[-410.5,-34.1],[-380,-29.6],[-372,-29],[-350,-29.15],[-320,-29],[-300,-32],[-300,2.5],[-314,1.7],[-365,-.3],[-394,-.6],[-419,-4.4],[-455,-13.2],[-477,-19.4],[-515,-27.5],[-549,-34.8],[-595,-47.1]],stairs:{701760798:[2.6,5]},stairWidths:{701760798:2.25},ramps:{701760799:[5,8.8]},breaks:[[-589,-62.9,4.2]]}],K3=[[-515.4,-54.6],[-507,-52.4],[-498.1,-49.9],[-488.9,-46.8],[-479.9,-44.6],[-473.2,-42.7],[-463.8,-40.8],[-456.4,-39.3],[-447.3,-37.4],[-441.7,-36.2],[-436.7,-36],[-430.1,-34.8],[-423.4,-34],[-372.9,-24.5],[-364.9,-24.3],[-356.7,-24.9],[-348.5,-24.3],[-339.6,-24.7]],J3=[{x:-512.2,z:-44.4,width:7.2,depth:2.15,angle:.27},{x:-461.1,z:-30.3,width:11.1,depth:2,angle:.17},{x:-442.5,z:-26.9,width:6.1,depth:2.1,angle:.2},{x:-426.2,z:-23.1,width:7.9,depth:2.2,angle:.18}];function Q3(i,t){Bf(i,t,{name:"Верхняя набережная · фонари и клумбы",lights:K3,planters:J3})}const j3=[{edge:[[-300,-32,7.8,2.6],[-284,-34,7.75,2.6],[-267,-37.5,7.65,2.6],[-246,-43,7.55,2.6],[-240,-42,7.5,2.6],[-236,-29,7.42,2.6],[-228,-19,7.35,2.6],[-218,-7,7.25,2.6]],shore:[[-300,-47.3],[-289.6,-48.8],[-177.1,-87.5],[-161.9,-92.7]],upperDeck:[[-300,-32],[-284,-34],[-267,-37.5],[-246,-43],[-240,-42],[-236,-29],[-228,-19],[-218,-7],[-221,3],[-248,4],[-279,3],[-300,3]],upperIds:{178484904:11},lowerIds:{701760797:5.2,121213094:7.2},underDeckIds:["223948913","223948916"],stairs:{597090335:[7.25,5.97],597090341:[3.25,1.1]},stairWidths:{597090335:13.2,597090341:5.4},stairRun:{597090335:[.09,.36]},ramps:{121213094:[5.97,3.25],"701760797-approach":[3.88,2.6]},paths:[{id:"701760797-approach",points:[[-171.1,-33],[-199.26,-67.75]],width:5.2,level:"lower",replaceStartOf:"701760797"}],breaks:[[-218,-7,4]],flatInland:30,blendInland:52,fade:0},{beach:[[-224.06,-6.35,7.25],[-211.83,-6.43,5.97],[-171.1,-33,3.88],[-159.07,-41.45,3.25],[-144.56,-51.21,1.1],[-81.57,-93.77,1.4],[-39.04,-127.25,1.62],[-.76,-159.34,1.82],[25.53,-190.84,1.95],[71.71,-243.52,2.1],[152.59,-369.21,2.15],[173.74,-356.54,2.2],[184.72,-355.26,2.22],[200.31,-357.98,2.23],[218.09,-367.72,2.25],[238.68,-386.95,2.28],[248.36,-396.07,2.35],[217.53,-444.44,2.24],[252.43,-514.76,2.14],[274.46,-559.15,2.05],[283.14,-576.63,2.03],[323,-654.46,1.98]],shore:[[-177.1,-87.5],[-161.9,-92.7],[-53.6,-178.4],[-34.6,-198.7],[31.6,-303.9],[50.4,-343.6],[84.5,-417.2],[123.2,-492],[197.2,-622.5],[224.45,-686]],lowerIds:{597090338:6.5,121159650:7.5,178302326:5.7},stairs:{851920304:[3,2.28]}}],t_=[[-295.8,-26.2],[-288.7,-27.1],[-281.6,-28.1],[-272.7,-29.1],[-265.8,-30.2],[-257.3,-31.1],[-250.1,-32.8],[-244.6,-33.7]];function e_(i,t){Bf(i,t,{name:"Фонари у Алых парусов",lights:t_,planters:[]})}const{clamp:n_,lerp:sn,smoothstep:ge}=ae;function ol(i){return[Math.min(...i.map(([t])=>t)),Math.min(...i.map(([,t])=>t)),Math.max(...i.map(([t])=>t)),Math.max(...i.map(([,t])=>t))]}const yo=([i,t,e,n],s)=>[i-s,t-s,e+s,n+s];function zf(i){const[t,e]=i.origin,[n,s]=i.scale,o=(N,Z)=>[(N-t)*n,(e-Z)*s],r=(N,Z,dt,st)=>[...o(N,st),...o(dt,Z)],a=r(37.2953,44.8868,37.3014,44.8932),l=r(37.2982,44.8933,37.3078,44.8984),c=r(37.3063,44.89613,37.31234,44.89775),h=i.surveyLines??{},f=h[125813146],u=h[400800619],d=h[657038813],g=h[1142991105],_=i.buildings.find(N=>N.id==="977564342")?.rings[0],p=_?.length===8?[_[7],_[6]]:null,m=F3([...$3,...j3]),v=i.landmarks.find(N=>N.id==="lighthouse")?.position,S=i.landmarks.find(N=>N.id==="port")?.position,x=r(37.303,44.8967,37.3069,44.9012),b=yo(ol(Gs.front),Gs.depth+9),y=i.roads.find(N=>N.id==="977564885")?.points,w=y?.[0],M=new Map([["46844613",8],["1293020297",7],["1293020296",7],...Object.entries(m.upperWidths),...Object.entries(m.lowerWidths),...Object.entries(m.stairWidths)]),E=new Map([["977562764",[null,3.8]],["977562762",[3.8,1.65]],["977562763",[3.8,1.65]],["597090335",[7.25,2.6]],["597090341",[2.6,.9]],...Object.entries(m.stairLevels)]),A=new Map(m.extras.filter(N=>N.replaceStartOf).map(N=>[N.replaceStartOf,N.points.length-1])),C=[...i.roads.map(N=>A.has(N.id)?{...N,points:N.points.slice(A.get(N.id))}:N),...m.extras.map(N=>({...N,kind:N.kind??"footway"}))],D=C.filter(N=>E.has(N.id)).map(N=>({...N,width:M.get(N.id)??N.width,bounds:ol(N.points)})),P=C.filter(N=>N.id in m.rampLevels).map(N=>({...N,width:M.get(N.id)??N.width,bounds:ol(N.points)})),L=D.filter(N=>N.id in m.stairLevels),U=[...D,...P],k=[...L,...P],H=(N,Z,[dt,st,ut,Et])=>N>=dt&&N<=ut&&Z>=st&&Z<=Et;function q(N,Z,dt){const st=Ge(N,Z,f);if(st.distance>100)return dt(N,Z);const ut=1-ge(st.distance,49,91),Et=ge(st.run,0,36),F=1-ge(Z,a[3]-55,a[3]-12),K=v?1-ge(Math.hypot(N-v[0],Z-v[1]),85,260):0,ot=sn(dt(st.x-st.nx*28,st.z-st.nz*28),22.4,K);let at=ot;if(st.offset>0){const ft=Math.max(7,Ge(st.x,st.z,u).distance),Tt=1.65*ge(Ge(N,Z,u).distance,0,8)+.18;at=sn(ot,Tt,ge(st.offset,Math.min(1.2,ft*.08),ft*.66))}else at=sn(ot,dt(N,Z),ge(-st.offset,15,42));if(p&&st.distance<48){const ft=Ge(N,Z,p),Tt=1-ge(ft.distance,14,23),Dt=sn(4.35,1.8,ge(ft.offset,0,10));at=sn(at,Math.min(at,Dt),Tt)}return sn(dt(N,Z),at,ut*Et*F)}function Y(N,Z,dt){const st=Ge(N,Z,d);if(st.distance>82||st.offset<-15)return dt(N,Z);const ut=dt(st.x-st.nx*14,st.z-st.nz*14),Et=sn(ut,2.35,ge(st.offset,.5,15)),F=ge(st.run,0,40)*(1-ge(st.run,st.length-45,st.length));return sn(dt(N,Z),Et,F*(1-ge(st.distance,58,82)))}function J(N,Z,dt,st){if(f&&u&&H(N,Z,a))return q(N,Z,dt);let ut=d&&H(N,Z,l)?Y(N,Z,dt):dt(N,Z);if(S&&H(N,Z,x)){const[Et,F,K,ot]=x,at=ge(Math.min(N-Et,K-N,Z-F,ot-Z),2,26)*(1-ge(Z,S[1]+13,S[1]+52)),ft=sn(1.8,2.55,ge(Z,S[1]-73,S[1]+8));ut=sn(ut,ft,at)}return m.apply(N,Z,ut,st)}function it(N,Z){const dt=E.get(N.id);if(!dt)return null;const st=dt[0]??J(...w??N.points[0],Z),ut=dt[1];return{from:st,to:ut,run:m.stairRuns[N.id]??[0,1]}}function yt(N,Z,dt){const st=m.rampLevels[N.id];if(!st)return;const ut=Ge(Z,dt,N.points);return sn(st[0],st[1],ut.run/ut.length)}function vt(N,Z,dt,st){let ut=J(N,Z,dt,st);if(H(N,Z,b)){const Et=Ge(N,Z,Gs.front),F=Math.sqrt(Math.max(0,Et.distance**2-Et.offset**2)),K=Math.max(F,-Et.offset,Et.offset-Gs.depth);ut=sn(ut,Gs.grade,1-ge(K,1.8,7))}if(w&&Math.abs(N-w[0])<14&&Math.abs(Z-w[1])<14){const Et=Ge(N,Z,y);Et.distance<5&&(ut=sn(ut,J(...w,dt),1-ge(Et.distance,1.6,5)))}for(const Et of U){if(!H(N,Z,yo(Et.bounds,Math.max(4.5,Et.width/2+2))))continue;const F=Ge(N,Z,Et.points),K=Et.width/2,ot=!k.includes(Et),at=ot?4.3:K+1.6;if(F.distance>at)continue;const ft=m.rampLevels[Et.id],{from:Tt,to:Dt,run:Ut}=ft?{from:ft[0],to:ft[1],run:[0,1]}:it(Et,dt),kt=n_((F.run/F.length-Ut[0])/(Ut[1]-Ut[0]),0,1),O=sn(Tt,Dt,kt)-(Ut[0]===0&&Ut[1]===1?.08:.23);ut=sn(ut,O,1-ge(F.distance,ot?1.65:K,at))}return ut}function Wt(N,Z,dt){return dt.breaks?.some(([st,ut,Et])=>Math.hypot(N-st,Z-ut)<Et)||k.some(st=>H(N,Z,yo(st.bounds,st.width/2+.5))&&Ge(N,Z,st.points).distance<st.width/2+.3)}function gt(N,Z){return k.some(dt=>H(N,Z,yo(dt.bounds,dt.width/2+2)))}function mt(N,Z,dt){return L.some(st=>{const[ut,Et,F,K]=yo(st.bounds,st.width/2+2);return N<F&&Z<K&&N+dt>ut&&Z+dt>Et})}function V(N,Z,dt){if(f&&u&&H(N,Z,a)){const st=Ge(N,Z,f),ut=Ge(N,Z,u),Et=(1-ge(ut.distance,5,11))*(1-ge(dt,2.2,3.8));if(Et>0)return["shingle",Et];const F=ge(st.offset,.5,4)*(1-ge(st.distance,28,43))*ge(dt,2,5.5);if(F>0)return["rockLight",F*(.74+.21*Math.sin(dt*1.7+N*.027))]}if(g&&H(N,Z,c)){const st=(1-ge(Ge(N,Z,g).distance,3.2,6.4))*(1-ge(dt,2.3,3.1));if(st>0)return["riprap",st]}if(H(N,Z,x)&&dt<7){const[st,ut,Et,F]=x;return["quay",ge(Math.min(N-st,Et-N,Z-ut,F-Z),0,24)*(1-ge(dt,4.5,7))]}return null}return{height:vt,tone:V,stairHeight:it,rampHeight:yt,promenadeWidths:M,gorgWater:g,allRoads:C,surveyedStairs:L,ramps:P,waterfront:m,wallOpening:Wt,nearTransition:gt,refinesStairs:mt,refines(N,Z,dt){return m.refines(N,Z,dt)||[a,l,c,x].some(([st,ut,Et,F])=>N+dt>st-18&&N<Et+18&&Z+dt>ut-18&&Z<F+18)}}}const i_=[37.294125,44.884625,37.325875,44.907375],s_=128,o_=92,r_=JSON.parse("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.9,2.4,2.9,3.4,3.7,3.9,4,4,3.9,3.9,3.9,3.9,4,3.9,3.9,4,3.9,3.6,3.1,2.7,2.5,2.5,2.7,3,3.1,2.9,2.5,1.9,1.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,2,2.5,3.1,3.6,4.1,4.4,4.6,4.4,4.2,3.9,3.8,3.8,3.8,3.8,4,4.1,4.1,3.8,3.2,2.7,2.4,2.4,2.7,3,3.1,2.9,2.4,1.7,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.6,2,2.6,3.1,3.7,4.3,4.8,5,4.9,4.6,4.3,4.1,4,3.9,3.9,4,4.2,4.3,4.1,3.6,3.1,2.9,2.9,3.1,3.2,3.2,2.7,2.1,1.4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.2,1.6,2,2.5,3,3.6,4.2,4.7,5,5,4.9,4.7,4.6,4.4,4.2,4.1,4,4.1,4.2,4.1,3.9,3.6,3.4,3.3,3.2,3.1,2.8,2.2,1.6,1.1,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2,2.4,2.9,3.4,4,4.5,4.7,4.7,4.7,4.7,4.7,4.7,4.4,4.1,3.8,3.8,3.8,3.8,3.6,3.3,3,2.7,2.4,2.2,1.8,1.3,0.9,0.7,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.2,1.6,2,2.3,2.8,3.3,3.8,4.2,4.4,4.4,4.3,4.4,4.5,4.5,4.2,3.7,3.3,3.1,3,2.9,2.5,2.1,1.7,1.4,1.2,1,0.8,0.6,0.4,0.5,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.2,1.5,1.9,2.2,2.5,2.9,3.3,3.6,3.8,3.8,3.8,3.8,3.9,3.9,3.6,3.1,2.7,2.3,2.1,1.8,1.4,1,0.7,0.5,0.4,0.4,0.4,0.5,0.5,0.6,0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.7,2.8,2.9,3,3,3.1,3.1,3.1,2.9,2.5,2.1,1.7,1.5,1.3,1,0.7,0.5,0.4,0.5,0.7,0.9,1.1,1.3,1.4,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,2,2.3,2.5,2.5,2.5,2.4,2.3,2.3,2.3,2.4,2.4,2.3,2,1.8,1.6,1.4,1.3,1.2,1,0.9,1,1.3,1.7,2.1,2.5,2.7,2.9,2.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.2,1.4,1.6,2,2.5,3,3.3,3.3,2.9,2.4,2,1.9,1.9,2,2.1,2.1,2.1,2,1.9,1.8,1.7,1.7,1.6,1.6,1.8,2.2,2.9,3.5,4,4.3,4.4,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.7,1,1.2,1.4,1.6,2,2.5,3.2,3.9,4.3,4.2,3.5,2.6,2,1.8,1.9,2.2,2.4,2.5,2.5,2.5,2.4,2.4,2.4,2.3,2.2,2.2,2.5,3,3.8,4.5,5,5.3,5.5,5.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.4,1.7,2,2.3,2.8,3.5,4.1,4.5,4.2,3.4,2.5,2,1.9,2.1,2.5,2.8,2.9,2.9,2.8,2.8,2.9,2.9,2.8,2.7,2.7,2.9,3.4,4.1,4.8,5.3,5.6,5.8,5.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.6,1.9,2.2,2.5,2.8,3.2,3.5,3.6,3.3,2.6,2.1,1.8,1.9,2.2,2.6,2.9,3,2.9,2.9,2.9,3,3,3.1,3,3,3.1,3.4,4,4.5,5.1,5.4,5.6,5.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.7,2.1,2.4,2.6,2.7,2.9,2.9,2.7,2.3,2,1.8,1.8,2,2.2,2.5,2.7,2.8,2.8,2.8,2.9,3,3.1,3.2,3.2,3.1,3.1,3.2,3.5,3.9,4.4,4.8,5.1,5.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.4,1.9,2.3,2.7,3,3,2.9,2.6,2.3,1.9,1.8,1.8,1.9,2.1,2.3,2.6,2.8,3,3.1,3.1,3.2,3.3,3.3,3.3,3.3,3.2,3.1,2.9,2.9,3.1,3.5,3.9,4.3,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,2,2.6,3.2,3.5,3.5,3.2,2.7,2.2,1.8,1.8,1.9,2.1,2.4,2.7,3.1,3.5,3.9,4.1,4.2,4.1,4,3.7,3.4,3.2,3,2.8,2.6,2.5,2.4,2.6,2.9,3.2,3.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2.2,2.8,3.4,3.6,3.5,3.1,2.5,2.1,1.8,1.9,2,2.3,2.6,3.1,3.8,4.5,5,5.3,5.2,5,4.6,4.1,3.5,3.1,2.8,2.6,2.3,2.2,2,2,2.1,2.3,2.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.4,2.9,3.2,3.2,3,2.6,2.3,2.1,2,2,2.1,2.3,2.7,3.2,3.9,4.7,5.2,5.4,5.3,5,4.6,4,3.5,3,2.6,2.3,2.1,1.9,1.7,1.6,1.7,1.8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.2,1.6,2.1,2.6,2.9,2.9,2.7,2.4,2.3,2.3,2.4,2.5,2.4,2.3,2.4,2.6,3,3.4,3.9,4.3,4.4,4.4,4.3,4.1,3.7,3.3,2.9,2.5,2.2,1.9,1.7,1.6,1.6,1.7,2,2.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.3,2.7,2.7,2.5,2.3,2.2,2.5,2.9,3.2,3.3,3.1,2.8,2.6,2.5,2.6,2.8,3,3.2,3.3,3.4,3.5,3.5,3.4,3.1,2.8,2.5,2.2,2,1.8,1.8,2,2.2,2.6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.5,1.9,2.3,2.6,2.5,2.3,2.3,2.6,3.1,3.7,4,4,3.6,3.1,2.7,2.5,2.5,2.5,2.5,2.5,2.6,2.8,3,3.1,3.1,2.9,2.7,2.5,2.4,2.4,2.4,2.5,2.7,3,3.4,3.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.3,1.7,2,2.3,2.4,2.4,2.4,2.7,3.3,4,4.4,4.3,4,3.5,3.1,2.7,2.5,2.5,2.4,2.4,2.3,2.3,2.5,2.7,2.8,2.8,2.7,2.7,2.7,2.9,3.2,3.6,3.8,3.9,4.1,4.3,4.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,0.8,1.2,1.5,1.9,2.2,2.4,2.3,2.4,2.7,3.3,4.1,4.6,4.7,4.3,3.9,3.5,3.1,2.9,2.7,2.7,2.6,2.6,2.5,2.4,2.5,2.6,2.7,2.7,2.7,2.9,3.2,3.7,4.4,5,5.3,5.4,5.4,5.6,5.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.8,1.1,1.4,1.8,2.1,2.4,2.4,2.3,2.5,3.1,4,4.8,5.2,5,4.5,4.1,3.9,3.7,3.5,3.3,3.1,3,2.9,2.8,2.7,2.7,2.7,2.8,2.8,3,3.2,3.7,4.4,5.2,6,6.4,6.6,6.7,7,7.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,1.8,2.1,2.4,2.4,2.4,2.4,2.6,3.3,4.3,5.1,5.4,5.3,5,4.9,4.8,4.6,4.2,3.9,3.6,3.4,3.3,3.1,3,3.1,3.2,3.2,3.3,3.5,3.8,4.3,5,5.8,6.5,7,7.4,7.6,7.8,8.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.1,1.5,1.9,2.3,2.5,2.6,2.5,2.5,2.5,2.8,3.4,4.1,4.8,5.1,5.3,5.3,5.5,5.4,5.1,4.6,4.2,3.9,3.7,3.6,3.6,3.6,3.7,3.9,4.1,4.2,4.4,4.8,5.2,5.8,6.4,7,7.4,7.6,7.7,7.9,8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,2.8,2.8,2.7,2.8,3.1,3.5,3.9,4.3,4.6,4.9,5.1,5.4,5.4,5.1,4.7,4.3,4,3.9,3.8,3.9,4.1,4.4,4.7,5,5.3,5.7,6.1,6.4,6.8,7.1,7.3,7.4,7.4,7.4,7.5,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,2,2.3,2.7,2.9,3,3,3,3.1,3.3,3.5,3.8,4,4.2,4.4,4.6,4.8,5.1,5.3,5.2,5,4.7,4.4,4.1,4,4.1,4.3,4.6,5,5.5,6,6.5,6.9,7.1,7.3,7.3,7.3,7.3,7.2,7.2,7.3,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.9,3,3.1,3.1,3.2,3.4,3.8,4.1,4.3,4.4,4.4,4.5,4.5,4.7,5,5.4,5.7,5.8,5.6,5.1,4.7,4.3,4.2,4.3,4.6,5,5.6,6.1,6.6,6.9,7.1,7.2,7.3,7.2,7.1,7,7.1,7.4,7.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.7,2.1,2.5,2.8,3,3.1,3.1,3.1,3.3,3.7,4.2,4.7,4.9,4.9,4.8,4.7,4.6,4.7,4.9,5.4,6,6.3,6.3,5.9,5.4,4.9,4.5,4.4,4.5,4.9,5.3,5.9,6.3,6.7,6.9,7.1,7.3,7.3,7.3,7.3,7.4,7.9,8.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,3,3,3,3.1,3.4,4,4.6,5.2,5.5,5.6,5.4,5.3,5,4.8,4.8,5.2,5.8,6.3,6.5,6.4,6,5.6,5.1,4.8,4.7,4.9,5.4,5.9,6.3,6.6,6.9,7.2,7.5,7.7,7.7,7.8,8.1,8.8,9.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.7,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.9,2.2,2.5,2.7,2.9,3,3,3.1,3.2,3.6,4.2,5,5.7,6.2,6.4,6.4,6.3,6,5.5,5.2,5.3,5.8,6.2,6.5,6.6,6.5,6.3,5.9,5.4,5.2,5.3,5.7,6.2,6.6,6.9,7.2,7.6,7.9,8.1,8.1,8.2,8.6,9.4,10.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.8,1.1,1.2,1,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.3,3.3,3.3,3.4,3.8,4.4,5.1,5.9,6.5,7,7.4,7.5,7.1,6.5,5.9,5.7,5.9,6.3,6.6,6.7,6.9,6.8,6.6,6.2,5.9,5.8,6.1,6.4,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.2,8.5,9.2,10.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.5,1.3,0.9,0.4,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.4,1.9,2.3,2.6,2.9,3.2,3.4,3.6,3.7,3.6,3.6,3.7,4,4.5,5.1,5.7,6.3,6.9,7.5,7.9,7.8,7.2,6.4,5.9,5.9,6.2,6.4,6.7,6.8,7,6.9,6.6,6.3,6.2,6.3,6.5,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.1,8.3,8.8,9.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.4,0.7,1.1,1.5,1.7,1.5,1,0.6,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.7,3,3.2,3.5,3.7,3.8,3.9,3.8,3.8,4,4.3,4.6,5,5.3,5.7,6.2,6.8,7.3,7.4,7,6.3,5.8,5.8,6.1,6.4,6.7,6.9,7,7,6.8,6.7,6.7,6.7,6.7,6.8,7.1,7.5,7.9,8.4,8.6,8.6,8.5,8.4,8.5,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.4,0.4,0.4,0.4,0.5,0.6,0.8,0.9,1.1,1.4,1.6,1.7,1.4,0.9,0.5,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.8,3,3.2,3.3,3.4,3.6,3.8,3.9,3.9,3.9,4,4.2,4.4,4.6,4.8,4.9,5.2,5.7,6.1,6.3,6.1,5.8,5.6,5.9,6.4,6.9,7.2,7.4,7.4,7.4,7.3,7.3,7.3,7.2,7,7,7.1,7.4,8,8.6,9.1,9.1,8.9,8.8,8.8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.4,0.5,0.6,0.8,0.9,1,1,1.2,1.4,1.5,1.6,1.7,1.8,1.8,1.6,1.2,0.7,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,1,1.5,2,2.5,2.8,3,3.1,3.2,3.2,3.4,3.5,3.6,3.7,3.7,3.7,3.6,3.7,3.9,4.1,4.4,4.5,4.6,4.8,5,5.2,5.3,5.4,5.6,6.2,6.9,7.5,7.9,8,8,8,8.1,8.1,8,7.7,7.4,7.2,7.2,7.3,7.8,8.5,9.1,9.4,9.5,9.6,9.7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.2,0.3,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.3,2.3,2.3,2.2,2,1.7,1.2,0.7,0.4,0.2,0.1,0.1,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.2,1.7,2.1,2.5,2.8,3.1,3.2,3.2,3.1,3.1,3.2,3.3,3.5,3.6,3.6,3.4,3.3,3.3,3.5,3.9,4.3,4.4,4.4,4.4,4.6,4.9,5.3,5.7,6.2,6.8,7.5,8,8.2,8.3,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.8,7.6,7.5,7.8,8.4,9.1,9.8,10.4,10.7,11,11.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.3,0.4,0.5,0.6,0.6,0.7,0.9,1.1,1.3,1.5,1.7,2,2.4,2.8,3.2,3.5,3.5,3.5,3.4,3.2,3,2.7,2.2,1.6,1.2,0.8,0.6,0.4,0.3,0.3,0.2,0.2,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.5,1,1.5,2,2.4,2.6,2.8,3,3.1,3.2,3.1,3,3,3.1,3.2,3.4,3.4,3.4,3.3,3.2,3.2,3.5,4,4.5,4.8,4.8,4.8,5,5.5,6.1,6.7,7.2,7.7,8,8.2,8.3,8.3,8.5,8.8,9.2,9.5,9.4,9.2,8.9,8.6,8.3,8.1,8.3,8.8,9.6,10.6,11.4,11.8,11.9,11.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.4,0.6,0.8,1,1.2,1.5,1.6,1.7,1.8,1.9,2.2,2.4,2.8,3.2,3.7,4.3,5,5.6,6,6,5.8,5.4,5,4.6,4.1,3.5,2.9,2.3,1.8,1.4,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.3,0.3,0.3,0.3,0.5,0.7,1.1,1.6,2.2,2.8,3.1,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3,3.1,3.2,3.3,3.4,3.4,3.3,3.2,3.3,3.7,4.4,5.1,5.5,5.6,5.6,5.8,6.4,7.1,7.7,8.1,8.2,8.3,8.3,8.3,8.4,8.7,9.1,9.6,9.8,9.9,9.7,9.5,9.3,9,8.9,9,9.5,10.4,11.4,12.2,12.5,12.3,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.6,0.9,1.2,1.6,2,2.3,2.7,3,3.4,3.6,3.9,4.2,4.5,4.9,5.4,6,6.8,7.6,8.5,9.2,9.5,9.3,8.9,8.3,7.6,6.9,6.2,5.5,4.9,4.3,3.7,3,2.4,1.9,1.5,1.3,1,0.8,0.7,0.6,0.5,0.5,0.5,0.6,0.8,0.9,1.1,1.2,1.2,1.2,1.3,1.5,1.8,2.3,2.8,3.2,3.5,3.5,3.5,3.5,3.5,3.4,3.3,3.2,3.2,3.2,3.3,3.4,3.5,3.4,3.4,3.4,3.5,4,4.7,5.5,6,6.3,6.4,6.7,7.2,7.8,8.2,8.3,8.2,8.2,8.3,8.5,8.7,9.1,9.5,9.8,9.9,9.9,9.8,9.8,9.8,9.9,10,10.2,10.6,11.2,12,12.5,12.6,12.2,11.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.3,1.7,2.2,2.7,3.3,3.9,4.4,4.8,5.3,5.8,6.3,6.8,7.3,7.8,8.3,8.7,9.1,9.7,10.4,11.2,11.9,12.3,12.4,12.2,11.6,10.9,10,9.2,8.4,7.8,7.4,7,6.4,5.7,4.9,4.2,3.6,3.1,2.7,2.3,2,1.8,1.8,1.8,1.9,2.1,2.4,2.7,3,3.1,3.1,2.9,2.7,2.7,2.7,2.9,3.2,3.5,3.6,3.6,3.7,3.9,3.9,3.8,3.6,3.5,3.4,3.4,3.4,3.5,3.6,3.6,3.7,3.8,4,4.4,5.1,5.8,6.4,6.7,7,7.3,7.7,8.1,8.2,8.1,8,8.1,8.4,8.7,9.2,9.6,9.9,10,9.9,9.7,9.6,9.8,10.3,10.9,11.4,11.7,11.9,12.2,12.4,12.4,12.1,11.7,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,1.2,2.3,3.5,4.6,5.5,6.4,7.2,7.8,8.3,8.7,9.2,9.8,10.3,10.9,11.5,12,12.3,12.4,12.5,12.7,13.1,13.5,13.9,14,14.1,13.9,13.5,12.7,11.8,10.9,10.2,9.9,9.7,9.7,9.5,9.1,8.4,7.7,6.9,6.1,5.4,4.8,4.5,4.4,4.5,4.6,4.7,5,5.3,5.6,5.8,5.9,5.7,5.3,4.8,4.3,3.8,3.6,3.5,3.5,3.6,3.7,3.9,4.1,4.2,4.1,3.9,3.7,3.5,3.5,3.5,3.6,3.8,3.9,4.2,4.5,4.8,5.4,6.1,6.8,7.4,7.8,8,8.1,8.2,8.3,8.3,8.1,8.1,8.2,8.5,9,9.6,10,10.2,10.2,10,9.7,9.5,9.6,10.3,11.3,12.2,12.7,12.7,12.6,12.3,11.9,11.4,11.1,10.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.3,4.3,6.6,8.6,10.2,11.3,12,12.5,12.9,13.2,13.6,14,14.4,14.7,14.9,15,14.9,14.6,14.4,14.2,14.2,14.3,14.5,14.8,14.9,14.9,14.5,13.9,13,12.2,11.7,11.4,11.4,11.6,11.8,11.8,11.6,11,10.1,9.1,8.3,7.8,7.6,7.7,7.9,8,8.1,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.5,6.6,5.6,4.7,4.2,3.9,3.7,3.8,3.9,4.1,4.2,4.1,3.9,3.8,3.7,3.8,3.9,4.1,4.3,4.6,5,5.5,6.2,7.1,8,8.9,9.4,9.6,9.4,9.1,8.9,8.9,8.9,8.8,8.8,8.9,9.1,9.6,10.1,10.4,10.4,10.3,10,9.6,9.4,9.4,10,11,11.9,12.3,12.3,12,11.7,11.3,10.9,10.7,10.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.1,9.2,12,13.9,15.1,15.7,16.1,16.3,16.6,16.8,17.1,17.2,17.1,16.8,16.4,15.9,15.5,15.1,14.8,14.6,14.6,14.8,15.1,15.3,15.3,15,14.4,13.7,13.1,12.7,12.4,12.4,12.6,13,13.2,13.3,12.8,12,11.1,10.3,10,10,10.2,10.3,10.3,10.2,10.3,10.5,10.7,10.8,10.9,11,10.9,10.4,9.4,8.1,6.9,5.9,5.2,4.8,4.6,4.6,4.7,4.7,4.5,4.3,4.2,4.2,4.5,4.8,5.1,5.4,5.7,6.2,6.9,7.7,8.7,9.7,10.5,11,11,10.6,10,9.8,9.8,9.9,9.9,9.9,9.9,10.1,10.4,10.7,10.7,10.5,10.1,9.7,9.5,9.3,9.4,9.8,10.4,11,11.3,11.2,11.1,11,10.9,10.8,10.7,10.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.8,3.7,6.6,10,13.1,15.3,16.5,17.2,17.6,17.9,18.3,18.5,18.7,18.7,18.4,17.9,17.2,16.5,16,15.6,15.4,15.2,15.2,15.3,15.6,15.7,15.4,15,14.5,14.1,13.7,13.5,13.3,13.3,13.4,13.7,14,14,13.7,13,12.2,11.5,11.3,11.4,11.5,11.3,11,10.8,10.7,11,11.3,11.7,12.2,12.7,12.9,12.8,12.2,11.1,9.8,8.7,7.8,7.2,6.9,6.8,6.8,6.6,6.1,5.6,5.4,5.5,5.8,6.2,6.5,6.7,6.9,7.4,8.1,8.9,9.8,10.5,11.2,11.5,11.4,10.9,10.4,10.3,10.5,10.8,10.9,10.9,10.9,11,11.2,11.1,10.9,10.4,9.9,9.6,9.4,9.4,9.5,9.9,10.3,10.6,10.6,10.6,10.6,10.6,10.8,11,11.1,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.1,5.8,9.1,12.4,14.9,16.4,17.3,17.9,18.4,19,19.3,19.4,19.4,19.1,18.6,17.9,17.3,16.9,16.6,16.4,16.2,16.1,16.3,16.4,16.4,15.9,15.3,14.9,14.6,14.5,14.5,14.5,14.4,14.4,14.4,14.6,14.6,14.4,13.8,13.1,12.5,12.3,12.3,12.3,12,11.6,11.3,11.3,11.5,11.8,12.3,12.9,13.6,14.1,14.3,14,13.3,12.4,11.5,10.8,10.3,10,10,9.9,9.6,9,8.2,7.7,7.5,7.7,7.9,7.9,7.9,7.9,8.3,9,9.8,10.4,10.9,11.3,11.4,11.2,10.9,10.6,10.6,10.8,11.1,11.3,11.4,11.5,11.6,11.6,11.3,10.9,10.3,9.8,9.6,9.5,9.6,9.8,10.2,10.4,10.5,10.4,10.3,10.3,10.5,10.9,11.3,11.7,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,1,2.4,4.8,8,11.4,14.3,16.1,17.1,17.8,18.4,19,19.2,19.3,19.3,19,18.7,18.3,18,17.7,17.5,17.2,17.1,17,17.2,17.3,17.2,16.6,15.9,15.4,15.3,15.5,15.7,15.7,15.5,15.1,14.9,14.7,14.6,14.4,14,13.5,13.1,13.1,13.1,13.1,12.9,12.7,12.7,12.9,13,13.2,13.5,14,14.6,15,15,14.6,14.2,13.6,13.1,12.7,12.5,12.3,12.3,12.3,12.1,11.7,11.1,10.4,9.8,9.3,9.1,8.9,8.8,8.9,9.3,9.9,10.5,10.9,11.1,11.2,11.2,11.1,11,10.9,10.9,11.1,11.3,11.4,11.6,11.7,11.8,11.7,11.5,11,10.5,10.1,9.9,9.9,10,10.2,10.5,10.6,10.5,10.3,10.2,10.2,10.6,11.1,11.6,12.1,12.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.8,2,4.1,7,10.5,13.7,15.9,17.1,17.7,18.2,18.6,18.9,18.9,18.8,18.6,18.3,18,17.8,17.7,17.6,17.4,17.3,17.4,17.6,17.7,17.5,17,16.3,15.9,15.8,16,16.2,16.1,15.7,15.2,14.8,14.4,14.2,13.9,13.6,13.3,13.3,13.5,13.7,13.7,13.7,13.8,14.2,14.7,15.1,15.3,15.5,15.8,16,15.8,15.3,14.7,14.2,13.9,13.8,13.6,13.6,13.6,13.5,13.5,13.4,13.3,12.9,12.2,11.3,10.3,9.5,9.2,9.4,9.9,10.6,11.2,11.6,11.6,11.4,11.3,11.3,11.3,11.3,11.3,11.3,11.4,11.4,11.5,11.6,11.7,11.7,11.8,11.7,11.4,11.1,10.7,10.6,10.5,10.6,10.7,10.8,10.8,10.7,10.6,10.4,10.5,10.8,11.4,11.9,12.3,12.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.2,9.7,13.2,15.8,17.2,17.8,18.2,18.4,18.6,18.6,18.5,18.2,17.8,17.5,17.3,17.2,17.1,17.1,17.2,17.4,17.5,17.6,17.4,17,16.6,16.2,16,16,16,15.8,15.5,15,14.6,14.2,13.9,13.6,13.4,13.3,13.6,13.9,14.2,14.3,14.3,14.5,15.2,15.9,16.4,16.8,16.9,17.1,17,16.6,15.7,14.8,14.4,14.3,14.5,14.6,14.6,14.6,14.5,14.4,14.2,14.1,13.8,13.1,12,10.8,9.8,9.5,9.9,10.8,11.8,12.5,12.8,12.5,12.1,11.7,11.6,11.7,11.8,11.9,11.9,11.8,11.7,11.6,11.5,11.5,11.6,11.8,12,12,11.8,11.6,11.4,11.3,11.2,11.2,11.3,11.3,11.3,11.2,11.1,11.2,11.4,11.9,12.3,12.7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3,5.7,9.3,13,16,17.6,18.2,18.4,18.4,18.4,18.3,18.1,17.8,17.4,17.2,17,16.9,16.9,16.9,17,17.1,17.2,17.3,17.4,17.3,17.1,16.8,16.4,16.1,15.9,15.5,15.1,14.7,14.4,14.2,14,13.7,13.6,13.7,14,14.4,14.7,14.8,14.8,15,15.5,16.1,16.7,17,17.3,17.4,17.4,17,16.2,15.4,15,15,15.4,15.7,15.8,15.7,15.6,15.3,15.1,14.9,14.6,13.9,12.8,11.5,10.5,10.3,10.7,11.6,12.4,13.1,13.4,13.3,13,12.5,12.2,12,12,12.2,12.2,12.1,11.9,11.7,11.5,11.4,11.5,11.8,12.2,12.4,12.4,12.2,12,11.9,11.8,11.8,11.8,12,12.1,12,12,12,12.2,12.5,12.9,13.1,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.3,13.2,16.2,18,18.5,18.5,18.3,18.1,17.8,17.6,17.4,17.3,17.3,17.2,17.1,17,16.8,16.8,16.8,17,17.3,17.6,17.8,17.6,17.3,16.8,16.4,16,15.5,14.9,14.4,14.2,14.1,14.1,14,14,14.2,14.6,15,15.3,15.4,15.3,15.3,15.5,15.9,16.2,16.6,17,17.2,17.3,17.1,16.5,15.9,15.5,15.5,15.8,16.2,16.5,16.4,16.2,16,15.8,15.7,15.4,14.8,13.8,12.7,11.8,11.4,11.7,12.2,12.8,13.3,13.8,14.1,14.1,13.6,13,12.3,12.1,12.1,12.1,12.1,11.9,11.6,11.4,11.3,11.5,11.8,12.2,12.4,12.5,12.5,12.4,12.3,12.2,12.2,12.2,12.4,12.6,12.7,12.7,12.7,12.9,13.1,13.3,13.3,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.6,3.4,6.2,9.8,13.5,16.4,18,18.5,18.4,18.1,17.7,17.4,17.3,17.4,17.6,17.6,17.5,17.3,17,16.7,16.5,16.5,16.7,17.1,17.6,17.7,17.6,17.2,16.8,16.4,15.9,15.4,14.8,14.4,14.2,14.2,14.3,14.5,14.7,15,15.5,15.9,16.1,16,15.8,15.7,15.6,15.7,16,16.4,16.7,17,17,16.9,16.6,16.1,15.5,15.3,15.6,16.1,16.5,16.6,16.5,16.4,16.2,16.1,16,15.6,14.9,14,13.2,12.7,12.7,12.8,13.1,13.6,14.3,15,15.1,14.7,13.8,12.9,12.3,12.1,12,12,11.8,11.6,11.5,11.5,11.7,11.9,12,12.2,12.3,12.4,12.5,12.5,12.5,12.4,12.4,12.6,12.9,13.1,13.2,13.3,13.5,13.6,13.5,13.4,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.3,2.4,4.2,7.1,10.7,14.2,16.7,18.1,18.5,18.3,18,17.6,17.4,17.5,17.9,18.2,18.3,17.9,17.4,16.9,16.4,16.1,16,16.2,16.5,16.8,16.9,16.8,16.6,16.3,15.9,15.6,15.2,14.9,14.7,14.6,14.6,14.8,15.1,15.6,16.2,16.7,16.9,16.9,16.7,16.4,16.1,16,16,16.3,16.6,17,17.2,17.2,17,16.6,16.1,15.6,15.3,15.5,16.2,16.9,17.1,17,16.8,16.5,16.4,16.4,16.2,15.8,15.1,14.4,13.9,13.6,13.4,13.5,13.9,14.7,15.4,15.7,15.3,14.4,13.5,12.9,12.7,12.5,12.3,12,11.9,11.9,11.9,11.9,11.9,12,12.1,12.2,12.4,12.5,12.7,12.7,12.7,12.7,12.9,13.2,13.5,13.7,13.8,13.9,13.9,13.7,13.4,13.3,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.3,0.7,1.3,2.2,3.5,5.6,8.7,12.2,15.5,17.7,18.8,19.1,18.8,18.2,17.8,17.7,18.1,18.6,19.1,19,18.4,17.7,17.1,16.6,16.2,16.1,16,16,16.1,16.1,16.1,16.1,16,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.5,15.9,16.5,17.1,17.6,17.6,17.3,16.9,16.6,16.5,16.6,16.7,17.1,17.5,17.8,18,18,17.8,17.4,17,16.6,16.4,16.6,17.4,18.1,18.3,18,17.5,17,16.7,16.6,16.5,16.1,15.6,15.1,14.7,14.4,14.1,13.9,14.1,14.7,15.4,15.7,15.4,14.7,14.1,13.8,13.6,13.4,13,12.6,12.3,12.3,12.3,12.2,12.2,12.2,12.4,12.5,12.6,12.7,12.9,13.1,13.1,13.1,13.2,13.4,13.7,13.9,13.9,13.9,13.8,13.6,13.4,13.3,0,0,0,0,0,0,0,0,0.1,0.3,0.4,0.5,0.6,0.8,1.3,2.1,3.3,5,7.5,10.8,14.3,17.3,19.3,20.3,20.5,19.9,19.1,18.4,18.2,18.6,19.1,19.5,19.4,18.8,18.1,17.6,17.3,17.2,16.9,16.5,16.1,16,16,16.3,16.4,16.5,16.4,16.3,16.5,16.6,16.6,16.4,16.1,16.1,16.4,17,17.7,18.1,17.9,17.5,17,16.8,16.8,17,17.4,17.9,18.5,19,19.3,19.5,19.4,19.2,18.8,18.3,18,18.2,18.9,19.5,19.7,19.2,18.5,17.8,17.3,17,16.6,16.2,15.7,15.4,15.1,14.9,14.6,14.3,14.2,14.5,15,15.2,15,14.6,14.3,14.2,14.1,13.9,13.4,12.9,12.7,12.7,12.7,12.6,12.5,12.7,13,13.1,13.1,13.1,13.3,13.5,13.6,13.6,13.6,13.7,13.8,13.8,13.8,13.8,13.8,13.7,13.5,13.4,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.3,1.6,2.3,3.4,5,7.2,10.1,13.4,16.7,19.4,21.1,22,22,21.3,20.3,19.3,18.8,18.8,19.2,19.5,19.4,18.9,18.4,18.1,18.1,18.1,17.7,17.1,16.8,16.8,17,17.3,17.5,17.5,17.3,17.2,17.1,17.1,17,16.8,16.5,16.4,16.7,17.4,18.2,18.7,18.7,18.1,17.5,17.1,17.1,17.3,17.9,18.5,19.2,19.8,20.3,20.7,20.8,20.7,20.1,19.5,19.1,19.2,19.8,20.3,20.5,20.1,19.5,18.8,18.1,17.6,17.1,16.6,16,15.6,15.4,15.2,14.9,14.6,14.4,14.4,14.5,14.6,14.5,14.3,14.2,14.2,14.1,13.9,13.5,13.2,13.1,13.1,13.1,12.9,12.8,13,13.3,13.5,13.6,13.7,13.9,14.1,14.2,14.2,14.1,14,14,13.9,13.8,13.9,13.9,13.8,13.7,13.6,0,0,0,0,0,0,0.1,0.2,0.4,0.9,1.5,2.2,2.7,3.4,4.4,5.9,7.9,10.4,13.4,16.4,19.2,21.2,22.5,23,22.9,22.1,20.9,19.9,19.1,18.9,19,19.2,19.2,19,18.7,18.6,18.6,18.5,18.2,17.9,17.8,18,18.4,18.5,18.6,18.5,18.2,17.9,17.6,17.2,17,16.8,16.7,16.9,17.3,18.1,19,19.7,19.7,19.1,18.2,17.6,17.4,17.6,18.3,19.1,19.7,20.3,20.7,21,21.1,21,20.5,19.9,19.6,19.8,20.3,20.7,20.8,20.6,20.1,19.4,18.9,18.4,17.9,17.2,16.6,16.1,15.8,15.6,15.4,15.2,14.9,14.7,14.6,14.6,14.5,14.4,14.3,14.2,14,13.8,13.6,13.5,13.6,13.6,13.5,13.3,13.1,13.2,13.5,13.8,14,14.3,14.7,14.9,14.8,14.6,14.5,14.4,14.2,14.1,14.1,14.1,14.1,14,13.9,13.9,0,0,0,0,0,0.1,0.2,0.5,1.1,2.1,3.4,4.6,5.8,7.1,8.5,10.2,12.2,14.4,16.9,19.3,21.1,22.4,23,23.1,22.8,22,21.1,20.2,19.5,19.1,19.1,19.2,19.2,19.1,18.9,18.8,18.7,18.7,18.6,18.6,18.8,19.1,19.3,19.3,19.2,19.2,19.1,18.7,18.2,17.6,17.3,17.3,17.5,17.8,18.4,19.1,19.9,20.4,20.4,19.7,18.7,18,17.8,18.2,19,19.8,20.3,20.6,20.7,20.8,20.8,20.6,20.3,20.1,20.1,20.4,20.6,20.8,20.7,20.4,19.9,19.4,19,18.7,18.3,17.7,17,16.5,16.3,16.1,16,15.9,15.7,15.5,15.4,15.2,15,14.8,14.5,14.3,14,13.8,13.8,13.9,14,14.1,14,13.7,13.5,13.5,13.8,14.1,14.5,14.9,15.2,15.3,15.1,14.9,14.7,14.6,14.6,14.6,14.6,14.6,14.5,14.4,14.2,14.3,0,0,0,0,0,0.1,0.4,1.1,2.4,4.4,6.7,9,10.8,12.5,13.9,15.3,16.8,18.3,19.8,21.2,22.1,22.7,22.8,22.7,22.4,21.8,21.2,20.6,20.1,19.7,19.6,19.5,19.4,19.2,18.9,18.8,18.7,18.8,19,19.3,19.6,19.8,19.7,19.5,19.3,19.5,19.7,19.6,19.2,18.7,18.4,18.4,18.6,18.9,19.3,19.9,20.4,20.7,20.6,20.1,19.3,18.8,18.7,19.2,19.9,20.6,21,21.1,21,20.9,20.7,20.5,20.5,20.5,20.7,20.9,20.8,20.6,20.3,19.8,19.3,18.9,18.7,18.5,18.2,17.8,17.2,16.9,16.7,16.6,16.6,16.5,16.4,16.3,16.1,15.8,15.4,15,14.6,14.3,14.1,13.9,14,14.2,14.4,14.4,14.3,14.1,13.8,13.8,14,14.2,14.6,14.9,15.2,15.2,15,14.8,14.7,14.8,15,15.2,15.3,15.3,15.1,15,14.8,14.9,0,0,0,0,0,0.2,0.6,1.8,4.1,7.3,10.8,13.9,16.2,17.7,18.8,19.6,20.3,21,21.7,22.2,22.5,22.7,22.7,22.6,22.3,21.9,21.5,21.1,20.8,20.6,20.5,20.3,19.9,19.5,19,18.7,18.7,19,19.4,19.9,20.1,20.1,19.8,19.4,19.3,19.5,20,20.3,20.3,20.1,19.9,19.6,19.5,19.5,19.8,20.2,20.6,20.9,20.9,20.7,20.3,20,20.1,20.4,20.9,21.4,21.6,21.7,21.6,21.4,21.2,21.1,21.1,21.2,21.2,21.2,20.9,20.5,20,19.5,19.1,18.7,18.5,18.3,18,17.7,17.4,17.2,17.1,17,16.9,16.7,16.5,16.4,16.2,15.9,15.5,15,14.7,14.5,14.3,14.2,14.2,14.3,14.5,14.6,14.5,14.3,14.1,14,14,14.1,14.4,14.6,14.9,15,14.9,14.8,14.7,14.9,15.2,15.6,15.9,15.9,15.8,15.7,15.5,15.4,0,0,0,0,0,0.2,0.8,2.3,5.1,9.1,13.5,17.2,19.8,21.1,21.7,22,22.3,22.5,22.6,22.7,22.8,22.9,22.9,22.8,22.6,22.2,21.7,21.4,21.2,21.2,21.2,21,20.6,20,19.4,19,18.9,19.2,19.6,20.1,20.3,20.2,19.8,19.4,19.3,19.7,20.4,21.2,21.6,21.7,21.3,20.7,20.3,20.1,20.2,20.5,20.8,21,21.1,21.1,21,20.9,21.1,21.3,21.6,21.9,21.9,22,21.9,21.9,21.9,21.9,22,22,21.8,21.5,21.2,20.8,20.3,19.8,19.4,19,18.6,18.3,18.1,17.9,17.8,17.7,17.6,17.4,17,16.6,16.3,16.1,16,15.8,15.5,15.1,14.9,14.8,14.6,14.5,14.4,14.4,14.6,14.7,14.8,14.7,14.5,14.3,14.1,14,14.1,14.3,14.6,14.9,14.9,14.8,14.8,14.9,15.3,15.8,16.2,16.4,16.4,16.3,16.2,16,0,0,0,0,0,0.2,0.7,2.1,4.8,9,13.8,18,20.8,22.3,22.9,23.1,23.2,23.3,23.3,23.2,23.2,23.3,23.2,23,22.6,22.1,21.6,21.3,21.2,21.3,21.4,21.3,20.9,20.4,19.9,19.5,19.3,19.5,19.8,20.1,20.4,20.3,20,19.7,19.7,20.2,21.1,22.1,22.8,23,22.7,22.2,21.8,21.6,21.5,21.3,21.1,20.9,20.9,21,21,21.1,21.3,21.6,21.9,22.1,22.1,22,22,22.1,22.2,22.4,22.5,22.5,22.4,22.2,21.9,21.5,20.9,20.4,19.9,19.5,19.1,18.7,18.5,18.4,18.4,18.2,18,17.6,17.1,16.7,16.3,16.1,15.9,15.8,15.6,15.4,15.2,15.1,15,14.8,14.6,14.6,14.7,14.9,15.1,15.2,15.1,14.8,14.5,14.2,14.2,14.3,14.6,14.9,15,15,14.9,15,15.3,15.7,16.2,16.6,16.8,16.9,16.8,16.7,0,0,0,0,0,0.1,0.5,1.5,3.7,7.5,12.3,16.9,20.2,22.2,23.1,23.6,23.8,23.7,23.6,23.5,23.5,23.5,23.3,22.9,22.3,21.6,21.1,20.9,20.9,21.1,21.1,21.1,20.9,20.6,20.3,20.1,19.9,19.9,20,20.2,20.4,20.4,20.3,20.2,20.4,21,21.8,22.7,23.4,23.8,24,24,24,23.9,23.4,22.6,21.7,21,20.7,20.6,20.7,20.9,21.2,21.7,22.1,22.3,22.3,22.2,22.1,22.1,22.2,22.3,22.5,22.6,22.6,22.6,22.3,21.9,21.4,20.9,20.5,20.1,19.7,19.5,19.2,18.9,18.7,18.5,18.1,17.8,17.4,17.1,16.8,16.5,16.3,16.1,15.9,15.7,15.6,15.5,15.4,15.1,14.9,14.7,14.8,15.1,15.3,15.4,15.3,15,14.8,14.5,14.4,14.5,14.7,14.9,15.1,15.1,15.1,15.2,15.4,15.7,16.2,16.6,16.9,17.1,17.2,17.2,0,0,0,0,0,0,0.3,0.9,2.6,5.9,10.5,15.4,19.4,22,23.4,24,24.2,24,23.8,23.5,23.4,23.2,22.9,22.4,21.8,21.1,20.8,20.7,20.8,20.9,20.9,20.9,20.8,20.8,20.7,20.6,20.5,20.4,20.4,20.3,20.4,20.5,20.7,21,21.4,21.9,22.3,22.7,23.2,23.8,24.5,25.1,25.4,25.4,24.8,23.7,22.5,21.4,20.8,20.6,20.8,21.1,21.5,22,22.4,22.7,22.7,22.5,22.3,22.2,22.2,22.2,22.2,22.3,22.4,22.4,22.2,22,21.7,21.3,20.9,20.6,20.4,20.1,19.7,19.2,18.9,18.6,18.3,18,17.9,17.8,17.5,17.2,16.8,16.5,16.3,16.2,16.1,16,15.7,15.3,15.1,15,15,15.2,15.3,15.3,15.2,15.2,15,14.9,14.8,14.8,14.9,15.1,15.2,15.3,15.3,15.4,15.6,15.9,16.2,16.4,16.7,17,17.2,17.3,0,0,0,0,0,0,0.1,0.6,1.9,4.6,9,14.3,19.1,22.3,23.9,24.6,24.6,24.3,23.8,23.3,23,22.8,22.6,22.1,21.6,21.2,21,20.9,21,21,21,20.9,20.9,21,21.1,21.2,21.1,21,20.8,20.7,20.7,21,21.5,22,22.4,22.6,22.5,22.5,22.7,23.3,24.1,24.9,25.3,25.2,24.7,23.7,22.6,21.7,21.2,21.1,21.4,21.7,21.9,22.2,22.5,22.7,22.7,22.7,22.6,22.5,22.4,22.3,22.2,22.1,22.1,22.1,22.1,22,21.8,21.5,21.2,20.8,20.6,20.3,19.8,19.4,19,18.8,18.7,18.5,18.4,18.3,18.1,17.7,17.3,17,16.8,16.6,16.5,16.2,15.8,15.5,15.3,15.2,15.3,15.3,15.2,15.2,15.3,15.4,15.4,15.4,15.3,15.2,15.3,15.4,15.5,15.5,15.6,15.7,15.9,16.2,16.3,16.3,16.4,16.6,16.9,17.2,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.8,13.3,18.7,22.5,24.4,25,24.9,24.5,24,23.4,23,22.7,22.6,22.3,22,21.7,21.6,21.6,21.4,21.2,21.1,21,21.2,21.5,21.8,22,21.9,21.6,21.3,21.2,21.4,21.8,22.4,22.9,23.1,22.9,22.6,22.2,22.2,22.6,23.3,23.8,24.1,24,23.4,22.7,21.9,21.4,21.3,21.4,21.7,22,22.1,22.2,22.2,22.3,22.5,22.6,22.7,22.7,22.6,22.4,22.2,22.1,22.2,22.3,22.5,22.5,22.3,21.8,21.3,20.8,20.6,20.4,20.1,19.8,19.6,19.5,19.4,19.2,19,18.7,18.4,18,17.7,17.5,17.3,17.1,16.8,16.3,15.9,15.6,15.4,15.5,15.5,15.5,15.4,15.3,15.4,15.5,15.7,15.7,15.7,15.6,15.6,15.7,15.8,15.8,15.9,16,16.3,16.5,16.5,16.4,16.4,16.6,16.8,17.2,0,0,0,0,0,0,0,0.2,0.9,2.7,6.3,11.6,17.2,21.5,23.9,24.8,24.9,24.6,24.2,23.8,23.4,23.1,22.9,22.7,22.5,22.3,22.2,22,21.8,21.5,21.4,21.4,21.7,22.1,22.6,22.8,22.7,22.2,21.8,21.7,22,22.5,22.9,23.2,23.2,22.9,22.4,22.1,22,22.1,22.4,22.6,22.6,22.3,21.9,21.5,21.1,21.1,21.3,21.5,21.7,21.9,22.1,22.2,22.2,22.2,22.3,22.4,22.6,22.6,22.5,22.3,22.2,22.2,22.4,22.7,23.1,23.2,22.9,22.2,21.5,21.1,20.9,20.8,20.6,20.4,20.3,20.3,20.2,20,19.6,19.2,18.7,18.3,18,17.8,17.6,17.4,17,16.5,16,15.7,15.6,15.7,15.8,15.7,15.5,15.4,15.5,15.6,15.7,15.9,15.9,15.9,15.9,15.9,16,16.1,16.1,16.2,16.4,16.5,16.6,16.6,16.6,16.7,16.9,17.2,0,0,0,0,0,0,0,0.1,0.6,1.9,4.8,9.4,14.8,19.5,22.5,24,24.5,24.5,24.3,24,23.7,23.4,23,22.8,22.6,22.6,22.5,22.3,22.1,21.9,21.9,22,22.3,22.8,23.2,23.5,23.3,22.8,22.4,22.2,22.4,22.8,23,23.1,23,22.7,22.3,22.1,22,22,22,21.8,21.6,21.3,21.1,21,21.1,21.4,21.7,21.9,22,22.1,22.2,22.4,22.5,22.4,22.3,22.3,22.5,22.5,22.5,22.3,22.2,22.2,22.5,22.9,23.3,23.5,23.3,22.8,22.1,21.7,21.5,21.4,21.3,21.1,21,20.8,20.7,20.5,20.1,19.6,19.1,18.6,18.2,18,17.8,17.6,17.2,16.8,16.4,16.1,16,16,16.1,16,15.8,15.7,15.7,15.7,15.8,16,16.1,16.2,16.3,16.4,16.4,16.4,16.3,16.3,16.4,16.5,16.7,16.7,16.7,16.7,16.9,17.1,0,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.5,12.5,17.5,21.2,23.3,24.2,24.4,24.2,23.8,23.5,23.2,22.9,22.7,22.7,22.7,22.7,22.6,22.5,22.4,22.5,22.7,23,23.5,23.9,24.1,24,23.6,23.2,22.8,22.8,23,23.1,23.1,22.9,22.7,22.6,22.5,22.5,22.5,22.3,22,21.6,21.3,21.2,21.3,21.7,22.2,22.6,22.7,22.6,22.5,22.5,22.7,22.7,22.6,22.5,22.6,22.7,22.8,22.9,22.7,22.5,22.3,22.3,22.5,22.9,23.2,23.3,23,22.6,22.2,22,21.9,21.8,21.6,21.4,21.2,21,20.8,20.5,20,19.4,18.8,18.5,18.2,18,17.8,17.6,17.3,17,16.8,16.6,16.5,16.5,16.4,16.3,16.1,16,15.9,16,16.2,16.5,16.7,16.9,17,16.9,16.9,16.7,16.7,16.7,16.7,16.8,16.8,16.8,16.9,17,17.3,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.9,10.6,15.8,20.1,22.9,24.1,24.3,24,23.6,23.2,23.1,23,23,23,23.1,23.2,23.1,23.1,23.1,23.3,23.6,24,24.4,24.7,24.8,24.7,24.4,23.9,23.5,23.3,23.3,23.4,23.4,23.3,23.3,23.3,23.4,23.6,23.5,23.3,22.8,22.3,21.9,21.7,21.8,22.3,22.9,23.3,23.3,23.1,22.8,22.7,22.6,22.7,22.7,22.8,23,23.3,23.5,23.5,23.3,22.9,22.5,22.2,22.2,22.4,22.7,23,23,22.9,22.6,22.3,22.1,22,21.9,21.7,21.5,21.3,21.1,20.7,20.1,19.5,19,18.6,18.3,18.3,18.2,18,17.8,17.6,17.4,17.3,17.2,17.1,16.9,16.7,16.5,16.3,16.2,16.2,16.4,16.7,17.1,17.3,17.4,17.5,17.4,17.4,17.2,17.1,17,16.9,17,17.1,17.3,17.7,18.1,0,0,0,0,0,0,0,0,0.1,0.6,1.9,4.6,8.8,14.1,18.9,22.2,24,24.5,24.3,23.9,23.6,23.5,23.5,23.6,23.6,23.7,23.7,23.8,24,24.2,24.4,24.6,24.9,25.2,25.3,25.2,25,24.8,24.4,24.1,23.9,23.9,24.1,24.2,24.2,24.3,24.4,24.7,24.8,24.8,24.4,23.8,23.1,22.6,22.2,22.3,22.6,23.1,23.3,23.3,23.1,22.9,22.6,22.5,22.6,22.9,23.2,23.5,23.8,24,23.9,23.7,23.2,22.8,22.5,22.3,22.3,22.5,22.8,23,23,22.8,22.5,22.2,22,21.9,21.9,21.8,21.6,21.3,20.8,20.1,19.5,18.9,18.6,18.5,18.6,18.6,18.5,18.2,17.9,17.7,17.8,17.8,17.8,17.6,17.3,17,16.7,16.6,16.6,16.6,16.8,17.1,17.4,17.6,17.8,17.9,17.8,17.7,17.5,17.2,17.1,17.2,17.5,17.9,18.5,19.2,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.4,7.1,12,17.1,21.1,23.6,24.7,25,24.8,24.5,24.2,24,24,24,24,24.2,24.6,25,25.3,25.4,25.5,25.5,25.5,25.5,25.4,25.2,25,24.7,24.5,24.4,24.5,24.8,25.1,25.3,25.5,25.6,25.7,25.6,25.3,24.8,24.1,23.5,23.1,22.8,22.8,23,23.1,23.2,23.1,22.9,22.8,22.7,22.7,22.9,23.2,23.6,23.9,24,24.1,24,23.8,23.5,23.2,23,22.8,22.7,22.7,22.9,23.1,23.1,23,22.7,22.4,22.2,22.1,22.2,22.1,21.9,21.5,20.8,20.1,19.5,19,18.8,18.7,18.8,18.9,18.7,18.4,18,17.8,17.9,18.1,18.2,18.1,17.9,17.6,17.4,17.2,17.1,17.1,17.1,17.2,17.3,17.5,17.8,18,18.1,17.9,17.7,17.5,17.3,17.4,17.7,18.2,18.9,19.8,0,0,0,0,0,0,0,0,0,0.2,0.8,2.2,5.1,9.4,14.4,19.1,22.5,24.5,25.4,25.5,25.2,24.7,24.3,24.1,24,24.2,24.5,25.1,25.6,25.8,25.8,25.7,25.5,25.6,25.6,25.6,25.5,25.2,24.9,24.7,24.6,24.8,25.1,25.5,25.9,26.1,26.2,26.2,25.8,25.2,24.5,24,23.8,23.7,23.7,23.8,23.9,23.8,23.6,23.4,23.1,23,22.9,23,23.2,23.5,23.8,23.9,24,24.1,24,23.9,23.8,23.7,23.6,23.5,23.4,23.4,23.4,23.5,23.4,23.2,22.8,22.6,22.4,22.4,22.5,22.4,22.2,21.7,21.1,20.5,19.9,19.5,19.2,19,19,18.9,18.6,18.3,17.9,17.8,17.8,18,18.2,18.4,18.4,18.3,18.1,17.9,17.7,17.6,17.5,17.4,17.3,17.4,17.7,18,18.1,18.1,17.9,17.7,17.6,17.5,17.7,18.1,18.6,19.4,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,3.1,6.3,10.7,15.6,19.9,23,24.9,25.6,25.6,25.1,24.6,24.3,24.2,24.4,24.8,25.2,25.6,25.7,25.6,25.4,25.4,25.6,25.9,26.1,26,25.7,25.3,25,24.9,25,25.3,25.7,26.1,26.3,26.4,26.3,25.9,25.3,24.6,24.2,24.1,24.2,24.4,24.6,24.9,24.9,24.6,24.1,23.8,23.6,23.4,23.4,23.5,23.7,23.9,24.1,24.3,24.4,24.5,24.4,24.3,24.2,24.1,24.1,24.1,24.1,24,23.8,23.6,23.2,22.9,22.6,22.5,22.4,22.4,22.4,22.2,21.9,21.5,21.1,20.7,20.3,19.8,19.5,19.3,19,18.7,18.4,18.1,17.9,18,18.1,18.4,18.6,18.8,18.8,18.6,18.4,18.1,17.9,17.7,17.5,17.4,17.4,17.6,17.9,18.2,18.3,18.2,18,17.8,17.8,17.8,18,18.3,18.7,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.3,6.5,10.8,15.5,19.7,22.8,24.7,25.4,25.4,25.1,24.8,24.7,24.8,25,25.3,25.4,25.5,25.5,25.5,25.8,26.1,26.4,26.6,26.5,26.3,26,25.7,25.5,25.5,25.6,25.9,26.1,26.4,26.6,26.6,26.3,25.7,25,24.5,24.4,24.4,24.4,24.6,24.9,25.1,25,24.7,24.4,24.2,24,23.8,23.8,24,24.2,24.5,24.8,25.1,25.2,25.1,24.8,24.7,24.6,24.6,24.5,24.4,24.2,23.8,23.4,23.1,22.9,22.7,22.4,22.2,22.1,22,21.9,21.9,21.8,21.6,21.3,20.9,20.4,20,19.7,19.5,19.3,19,18.7,18.5,18.5,18.6,18.9,19.1,19.2,19.2,18.9,18.5,18.1,17.8,17.7,17.6,17.5,17.5,17.7,18.1,18.4,18.6,18.5,18.3,18.2,18.2,18.1,18.1,18.2,18.4,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.4,3.2,6.2,10.3,14.9,19.2,22.6,24.6,25.4,25.5,25.4,25.2,25.1,25.2,25.3,25.4,25.5,25.8,26,26.3,26.7,26.9,27,27.1,27,26.8,26.5,26.2,26,26,26.1,26.4,26.7,26.9,27,26.8,26.2,25.5,24.8,24.4,24.2,24,24.2,24.5,24.7,24.8,24.8,24.7,24.5,24.3,24.1,24.1,24.3,24.5,24.8,25.2,25.5,25.6,25.6,25.4,25.1,25,24.8,24.7,24.5,24.1,23.6,23.2,23,22.8,22.7,22.4,22.1,21.9,21.7,21.7,21.7,21.7,21.7,21.5,21.2,20.8,20.4,20.1,19.9,19.8,19.7,19.5,19.3,19.2,19.3,19.4,19.6,19.6,19.5,19.1,18.6,18.2,17.9,17.8,17.8,17.9,18,18.2,18.4,18.7,18.9,18.9,18.8,18.8,18.8,18.7,18.6,18.6,18.7,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.9,10,14.7,19.1,22.5,24.4,25.2,25.3,25.3,25.2,25.3,25.4,25.5,25.8,26.1,26.4,26.7,27,27.2,27.4,27.5,27.5,27.3,27,26.6,26.4,26.4,26.5,26.8,27.1,27.3,27.4,27.2,26.7,26,25.2,24.6,24.2,23.9,23.9,24.1,24.4,24.6,24.7,24.7,24.6,24.4,24.3,24.3,24.5,24.7,24.9,25.2,25.5,25.7,25.8,25.7,25.5,25.3,25,24.7,24.4,24,23.6,23.3,23.2,23.1,23,22.7,22.4,22.1,21.9,21.7,21.6,21.6,21.6,21.5,21.3,21,20.7,20.4,20.2,20.1,20.1,20,19.9,19.7,19.6,19.7,19.8,19.9,19.8,19.4,19,18.6,18.4,18.4,18.5,18.6,18.8,19,19.1,19.3,19.4,19.4,19.3,19.4,19.4,19.3,19.2,19.2,19.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,2.9,5.9,10.1,14.8,19.1,22.2,23.9,24.7,25,25.2,25.4,25.6,25.8,26,26.2,26.5,26.8,27.1,27.3,27.5,27.7,27.7,27.5,27.1,26.8,26.7,26.8,27,27.2,27.5,27.6,27.6,27.4,27,26.4,25.7,25,24.4,24,23.9,24,24.3,24.6,24.7,24.8,24.7,24.6,24.6,24.8,24.9,25,25.1,25.3,25.5,25.7,25.8,25.9,25.8,25.5,25.1,24.7,24.4,24.1,23.9,23.8,23.7,23.6,23.4,23.1,22.8,22.6,22.3,22,21.7,21.5,21.5,21.5,21.4,21.3,21,20.7,20.5,20.4,20.3,20.2,20,19.8,19.7,19.8,20,20.2,20.2,19.9,19.5,19.3,19.1,19.1,19.3,19.6,19.8,20,20.1,20.1,20.1,20.1,20,19.9,19.9,19.8,19.9,20.3,21.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3.1,6,10.1,14.5,18.5,21.5,23.4,24.4,25,25.4,25.7,25.8,25.9,25.9,26.1,26.4,26.8,27.2,27.5,27.8,27.8,27.6,27.3,27.1,27.1,27.3,27.5,27.6,27.7,27.7,27.7,27.5,27.1,26.7,26.1,25.4,24.8,24.3,24.2,24.3,24.6,24.9,25.1,25.2,25.2,25.2,25.3,25.4,25.5,25.6,25.6,25.6,25.7,25.8,26,26,25.9,25.6,25.1,24.8,24.5,24.4,24.3,24.2,24.1,23.9,23.6,23.2,23,22.8,22.5,22.1,21.8,21.6,21.5,21.5,21.5,21.4,21.2,21,20.8,20.6,20.4,20.2,20,19.8,19.8,20,20.3,20.6,20.7,20.4,20,19.7,19.6,19.7,19.9,20.4,20.9,21.3,21.4,21.2,20.9,20.6,20.4,20.2,20.2,20.3,20.8,21.6,22.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.5,13.8,17.9,21,23,24.3,25,25.4,25.5,25.5,25.5,25.7,26,26.4,27,27.6,28,28.2,28,27.8,27.6,27.6,27.7,27.8,27.9,27.8,27.7,27.6,27.4,27.2,26.8,26.3,25.7,25.1,24.7,24.6,24.8,25.2,25.6,25.8,25.9,25.9,25.9,26,26.1,26.1,26.1,26.1,26.1,26,26,26.1,26.2,26,25.7,25.3,24.9,24.7,24.6,24.5,24.4,24.2,23.9,23.5,23.2,22.9,22.7,22.5,22.2,21.9,21.8,21.7,21.7,21.7,21.6,21.4,21.2,21.1,20.9,20.6,20.4,20.1,20,19.9,20.1,20.4,20.6,20.7,20.4,20.1,19.9,19.8,19.8,20.1,20.9,21.9,22.7,22.7,22.2,21.4,20.8,20.3,20.1,20.2,20.7,21.4,22.4,23.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,1.2,2.7,5.2,8.9,13.2,17.3,20.6,22.8,24.2,24.9,25.2,25.3,25.4,25.6,25.9,26.4,27,27.7,28.4,28.7,28.5,28.2,28,28,28,28.1,28.1,27.9,27.8,27.6,27.5,27.3,26.9,26.4,25.9,25.3,25,25.1,25.6,26.1,26.5,26.6,26.5,26.4,26.3,26.4,26.5,26.5,26.5,26.5,26.4,26.3,26.2,26.2,26.2,26.1,25.8,25.4,25.1,25,24.8,24.7,24.5,24.2,23.8,23.4,23.2,23,22.7,22.5,22.3,22.1,22.1,22.2,22.2,22.1,21.9,21.7,21.6,21.5,21.3,21,20.8,20.5,20.3,20.1,20.1,20.2,20.3,20.3,20.1,20,19.8,19.8,19.9,20.3,21.2,22.5,23.4,23.4,22.6,21.5,20.6,20.1,19.9,20.2,20.7,21.4,22.2,22.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.4,4.8,8.4,12.5,16.6,20.1,22.6,24.1,25,25.4,25.7,25.9,26.3,26.7,27.2,27.8,28.3,28.6,28.6,28.3,28.2,28.2,28.3,28.5,28.4,28.2,27.9,27.7,27.6,27.3,26.9,26.4,25.8,25.5,25.3,25.6,26.2,26.8,27.1,27.1,26.8,26.6,26.5,26.6,26.7,26.8,26.9,26.8,26.7,26.5,26.4,26.4,26.3,26.2,25.9,25.6,25.4,25.2,25.1,24.9,24.6,24.1,23.8,23.5,23.3,23.2,22.9,22.6,22.3,22.2,22.3,22.5,22.7,22.7,22.4,22.2,22,22,21.9,21.6,21.3,20.9,20.6,20.2,20,19.9,19.9,19.9,19.9,19.9,19.9,20,20.1,20.4,21.2,22.2,23,22.9,22.2,21.2,20.4,20,20,20.3,20.7,21,21.4,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.1,4.4,7.6,11.7,15.9,19.7,22.5,24.3,25.3,25.8,26.1,26.5,26.8,27.1,27.4,27.7,27.9,28,28,28,28.2,28.5,28.8,28.7,28.5,28.1,27.8,27.5,27.1,26.7,26.2,25.9,25.7,25.8,26.1,26.5,27,27.2,27.2,27,26.8,26.7,26.8,26.9,27.1,27.2,27.2,27.1,26.9,26.7,26.6,26.5,26.4,26.2,25.9,25.7,25.6,25.4,25.2,24.8,24.4,24,23.8,23.7,23.5,23.2,22.8,22.5,22.4,22.5,22.8,23.1,23.1,22.9,22.6,22.4,22.5,22.4,22.2,21.8,21.3,20.7,20.3,20,19.8,19.8,19.8,19.9,20,20.1,20.2,20.2,20.4,20.9,21.7,22.2,22.2,21.9,21.2,20.7,20.4,20.5,20.7,20.9,20.9,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.7,1.8,3.8,6.9,11,15.5,19.6,22.7,24.6,25.6,26.1,26.4,26.5,26.6,26.7,26.9,27.1,27.4,27.7,28.1,28.5,29,29.2,29.1,28.6,28.1,27.6,27.2,26.7,26.2,26,26,26.2,26.4,26.6,26.8,27,27.2,27.3,27.3,27.3,27.2,27.2,27.2,27.4,27.7,27.7,27.6,27.3,27,26.8,26.7,26.6,26.5,26.3,26.2,26,25.9,25.7,25.3,24.8,24.6,24.5,24.5,24.4,24.1,23.7,23.2,23,23.1,23.4,23.6,23.5,23.2,22.8,22.6,22.7,22.7,22.5,22.1,21.5,20.9,20.5,20.2,20,19.9,19.9,20.1,20.2,20.4,20.4,20.3,20.4,20.9,21.5,22,22.3,22.3,21.9,21.5,21.3,21.2,21.3,21.3,21.1,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.5,3.4,6.7,11,15.9,20.3,23.5,25.2,26,26.3,26.3,26.3,26.3,26.4,26.7,27.2,27.9,28.5,29.1,29.5,29.5,29.1,28.4,27.8,27.2,26.6,26.2,25.9,26,26.3,26.8,27.1,27.2,27.3,27.3,27.4,27.6,27.8,27.9,27.9,27.8,27.7,28,28.2,28.4,28.2,27.9,27.5,27.2,27.1,27,27,26.9,26.9,26.8,26.6,26.2,25.8,25.5,25.4,25.6,25.9,26.2,26.1,25.6,24.8,24.2,24,23.9,23.8,23.6,23.1,22.7,22.6,22.7,22.7,22.6,22.2,21.7,21.2,20.8,20.5,20.3,20.2,20.1,20.2,20.3,20.4,20.4,20.4,20.6,21.1,21.8,22.5,23,23.1,22.9,22.4,22,21.8,21.8,21.7,21.4,21.2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.7,7.3,12.1,17.4,21.7,24.5,25.8,26.2,26.3,26.3,26.5,26.7,27.2,27.9,28.5,29.1,29.4,29.4,29,28.4,27.8,27.2,26.7,26.3,26.1,26.2,26.6,27.1,27.6,27.8,27.8,27.7,27.7,27.8,28.1,28.4,28.5,28.5,28.3,28.3,28.4,28.7,28.8,28.8,28.5,28.1,27.9,27.7,27.6,27.5,27.5,27.5,27.4,27.2,26.9,26.6,26.5,26.7,27.2,27.9,28.4,28.4,27.8,26.8,25.7,24.8,24.2,23.8,23.3,22.9,22.6,22.6,22.7,22.7,22.6,22.3,22,21.6,21.3,21.1,20.9,20.6,20.5,20.4,20.3,20.3,20.4,20.5,20.9,21.4,22.1,22.9,23.5,23.7,23.4,22.8,22.4,22.2,22.1,22.1,21.8,21.5,21.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.9,4.5,8.7,14,19.2,23.1,25.2,26.1,26.4,26.5,26.8,27.3,27.9,28.7,29.2,29.4,29.2,28.7,28.2,27.6,27.2,26.8,26.6,26.6,26.7,27.1,27.6,28,28.3,28.3,28.2,28.1,28,28.1,28.4,28.6,28.8,28.8,28.7,28.7,28.8,29,29.2,29.2,29.1,28.8,28.6,28.3,28.1,28,28,28,28,27.9,27.8,27.8,27.9,28.2,28.7,29.4,29.9,30,29.6,28.6,27.3,25.9,24.7,23.8,23.3,22.9,22.7,22.7,22.8,22.8,22.7,22.5,22.3,22.1,22,21.8,21.6,21.4,21.2,21,20.8,20.6,20.5,20.7,21,21.5,22.1,22.8,23.4,23.5,23.3,22.7,22.3,22.3,22.3,22.4,22.2,21.9,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.7,10.4,15.7,20.5,23.8,25.5,26.3,26.6,27,27.5,28.2,28.8,29.1,29,28.6,28,27.6,27.3,27.1,27.1,27.2,27.4,27.7,28,28.4,28.6,28.7,28.5,28.4,28.3,28.3,28.4,28.6,28.7,28.8,28.8,28.9,28.9,29.1,29.3,29.5,29.6,29.6,29.5,29.3,29,28.8,28.5,28.4,28.4,28.5,28.8,29.1,29.3,29.4,29.6,29.8,30.2,30.6,30.8,30.5,29.9,28.8,27.4,25.9,24.7,23.9,23.3,23,22.9,22.9,22.9,22.8,22.8,22.8,22.7,22.5,22.4,22.2,22.1,22,21.8,21.4,21,20.8,20.8,20.9,21.3,21.8,22.4,22.9,23.1,22.9,22.5,22.3,22.3,22.4,22.5,22.4,22.2,21.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.3,6.8,11.5,16.6,20.9,23.9,25.5,26.4,27,27.5,28,28.4,28.6,28.4,28,27.7,27.5,27.4,27.6,27.8,28.1,28.4,28.6,28.8,28.8,28.8,28.8,28.7,28.6,28.6,28.7,28.9,29,29.1,29.1,29.1,29.1,29.3,29.4,29.6,29.7,29.8,29.9,29.9,29.9,29.7,29.5,29.2,29,28.9,29.2,29.7,30.4,30.9,31,31,30.9,31,31.1,31.2,31.1,30.7,30.1,29.1,27.7,26.3,25.1,24.1,23.5,23.1,23,23,23.2,23.4,23.5,23.4,23.1,22.8,22.6,22.5,22.4,22.2,21.9,21.5,21.1,20.9,21,21.2,21.6,22,22.4,22.6,22.6,22.5,22.3,22.3,22.4,22.5,22.5,22.3,22.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.6,1.6,3.7,7.1,11.6,16.2,20.2,23.2,25.2,26.4,27.2,27.8,28.2,28.3,28.1,27.9,27.6,27.6,27.7,28,28.4,28.9,29.2,29.4,29.4,29.3,29.1,29,29,29,29.1,29.3,29.5,29.6,29.6,29.5,29.5,29.5,29.6,29.7,29.8,29.8,29.8,29.9,30.1,30.3,30.4,30.3,30.2,30,30,30.3,30.9,31.6,32.2,32.5,32.4,32.2,32,31.8,31.6,31.3,31.1,30.9,30.4,29.5,28.2,26.8,25.4,24.2,23.6,23.3,23.4,23.7,24,24.2,24,23.5,23.1,22.9,22.8,22.7,22.6,22.4,22.1,21.8,21.6,21.4,21.4,21.6,21.8,22.1,22.3,22.5,22.5,22.5,22.5,22.5,22.5,22.6,22.6,22.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.6,1.6,3.5,6.5,10.4,14.7,18.6,21.9,24.3,26.1,27.2,28,28.3,28.2,28.1,27.9,27.8,27.9,28.2,28.7,29.3,29.7,29.9,29.9,29.7,29.5,29.3,29.3,29.4,29.6,29.8,30,30.1,30.1,30,29.9,29.8,29.8,29.8,29.9,30,30.1,30.3,30.6,31.1,31.6,31.9,31.9,31.9,31.9,32,32.4,32.9,33.3,33.5,33.4,33,32.5,32.2,31.8,31.5,31.3,31.3,31.1,30.8,29.9,28.5,26.8,25.3,24.2,23.8,23.9,24.2,24.5,24.5,24.3,23.8,23.4,23.2,23.1,23.2,23.4,23.4,23.4,23.2,22.8,22.5,22.2,22,21.9,22,22.2,22.4,22.6,22.7,22.7,22.7,22.7,22.8,23,23]"),a_={bounds:i_,columns:s_,rows:o_,heights:r_},{bounds:[rl,Dh,Ih,al],columns:wo,rows:Uh,heights:qr}=a_,Nh=[37.309805,44.895974],Fh=1e3,Oh=1160;function c_(i){const[t,e]=i.origin,[n,s]=i.scale,o=(Nh[0]-t)*n,r=(e-Nh[1])*s;return(a,l,c)=>{const h=Math.hypot(a-o,l-r);if(h>=Oh)return c;const f=t+a/n,u=e-l/s;if(f<rl||f>Ih||u<Dh||u>al)return c;const d=(f-rl)/(Ih-rl)*(wo-1),g=(al-u)/(al-Dh)*(Uh-1),_=Math.min(Math.floor(d),wo-2),p=Math.min(Math.floor(g),Uh-2),m=p*wo+_,v=ae.lerp(qr[m],qr[m+1],d-_),S=ae.lerp(qr[m+wo],qr[m+wo+1],d-_),x=Math.max(.16,ae.lerp(v,S,g-p));return h<=Fh?x:ae.lerp(x,c,ae.smoothstep(h,Fh,Oh))}}const Bh=["#b2a99a","#bbb1a1","#b8ae9e","#b7ab99","#aea394"],l_="#c4baaa",h_="#a39888",zh="#4b5351";function u_(i,t,e){const n=pe(i,"Верхняя и нижняя набережные · подпорные стены",{surface:"stone"});for(const s of t.waterfront.sections){if(s.soft)continue;const o={section:s,upper:!0},r={section:s,upper:!1};for(const{a,b:l,span:c}of s.segments){const[h,f]=a,[u,d]=l,g=(f-d)/c,_=(u-h)/c,p=Math.ceil(c/1.25),m=(v,S,x=0,b=0)=>{const y=ae.lerp(h,u,v),w=ae.lerp(f,d,v);return[y+x*g,e.faceHeight(y,w,S)+b,w+x*_]};for(let v=0;v<p;v++){const S=v/p,x=(v+1)/p,[b,,y]=m((S+x)/2,o);if(t.wallOpening(b,y,s))continue;const w=m(S,r,0,-.12),M=m(x,r,0,-.12),E=m(S,o,0,.24),A=m(x,o,0,.24);if(E[1]-w[1]<.55||A[1]-M[1]<.55)continue;n.face(h_,w,M,A,E);const C=Math.max(1,Math.round((E[1]+A[1]-w[1]-M[1])/2/.54));for(let U=0;U<C;U++){const k=(U+.026)/C,H=(U+.976)/C,q=_t(w,E,k),Y=_t(w,E,H),J=_t(M,A,k),it=_t(M,A,H),yt=([vt,Wt,gt],[mt,V,N],Z)=>[ae.lerp(vt,mt,Z)-g*.016,ae.lerp(Wt,V,Z),ae.lerp(gt,N,Z)-_*.016];n.face(Bh[(v*11+U*7)%Bh.length],yt(q,J,.009),yt(q,J,.991),yt(Y,it,.991),yt(Y,it,.009))}const D=s.coping??.38;if(n.face(l_,E,A,m(x,o,D,.24),m(S,o,D,.24)),s.rail===!1)continue;const P=(U,k)=>m(U,o,D*.55,k);for(const U of[.43,1.18])n.beam(P(S,U),P(x,U),.038,zh);const L=Math.max(1,Math.round(c/p/.28));for(let U=0;U<L;U++){const k=ae.lerp(S,x,U/L);n.beam(P(k,.42),P(k,1.16),U===0?.045:.025,zh)}}}}n.finish()}const Zs=[-287.6,-16.5],Yr=-.11,$s="#6c4934",Ke="#ba986f",Po="#a58b6c",Tl=["#674430","#734d37","#7a5239","#6a4734","#815a41"],kh=["#bd282d","#c63134","#c93636","#b9252d"];function aa([i,t]){return(e,n)=>[i+e*Math.cos(Yr)-n*Math.sin(Yr),t+e*Math.sin(Yr)+n*Math.cos(Yr)]}const f_=[[-3.32,-1.15],[1.8,-1.12],[3.48,0],[1.8,1.12],[-3.32,1.18]].map(i=>aa(Zs)(...i));function d_(i,t){const e=new _s(1,2),n=uo(new ne({color:"white",flatShading:!0}),{surface:"foliage"}),s=new Ci(e,n,t.length),o=new Ae;t.forEach(({center:r,scale:a,color:l},c)=>{o.position.set(...r),o.scale.set(...a),o.rotation.y=c*.87,o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c,new Yt(l))}),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}function p_(i,t){const e=[[-3.32,.98,1.41],[-2.54,1.13,1.25],[-1.12,1.22,1.09],[.62,1.15,1.06],[2.05,.87,1.17],[3.14,.4,1.42],[3.5,0,1.58]];function n(l,c,h){const[f,u,d]=e[l];return t(f-(l===e.length-1?(1-h)*.6:0),c*u*(.73+.27*h),.22+(d-.22)*h)}for(const l of[-1,1])for(let c=1;c<e.length;c++){for(let h=0;h<7;h++){const f=h/7,u=(h+.96)/7;i.face(Tl[(h+c*2)%Tl.length],n(c-1,l,f),n(c,l,f),n(c,l,u),n(c-1,l,u))}if(i.beam(n(c-1,l,1),n(c,l,1),.069,Ke),c<6){const[h,f,u]=e[c],d=c===1?3:4;for(let m=0;m<d;m++){const[v,S,x]=e[c-1],b=m/d,y=v+(h-v)*b,w=l*(S+(f-S)*b),M=x+(u-x)*b;i.beam(t(y,w,M),t(y,w,M+.34),.045,Ke)}const[g,_,p]=e[c-1];i.beam(t(g,l*_,p+.34),t(h,l*f,u+.34),.057,Ke)}}const[s,o,r]=e[0];i.face($s,t(s,-o*.73,.22),t(s,o*.73,.22),t(s,o,r),t(s,-o,r));for(const l of[-.52,.52]){const c=s-.025,h=.3;for(const f of[l-h,l+h])i.beam(t(c,f,.4),t(c,f,1.18),.044,Ke);for(const f of[.4,1.18])i.beam(t(c,l-h,f),t(c,l+h,f),.044,Ke);for(let f=0;f<5;f++){const u=f/4;i.beam(t(c,l-h+2*h*u,.43),t(c,l-h,.43+.7*u),.021,Ke),i.beam(t(c,l+h-2*h*u,.43),t(c,l+h,.43+.7*u),.021,Ke),i.beam(t(c,l-h+2*h*u,1.14),t(c,l+h,1.14-.7*u),.021,Ke),i.beam(t(c,l+h-2*h*u,1.14),t(c,l-h,1.14-.7*u),.021,Ke)}}i.beam(t(s,-o,r+.34),t(s,o,r+.34),.06,Ke);for(let l=0;l<=10;l++){const c=-o+2*o*l/10;i.beam(t(s,c,r),t(s,c,r+.34),.045,Ke)}for(let l=1;l<e.length;l++){const[c,h]=e[l-1],[f,u]=e[l];i.face(l%2?"#8e694c":"#856149",t(c,-h,1),t(f,-u,1),t(f,u,1),t(c,h,1))}for(const l of[-1,1])for(const c of[-2.68,-1.87,-.88]){const h=l*(c<-2?1.04:1.12),f=Array.from({length:12},(u,d)=>{const g=d*Math.PI/6;return t(c+Math.cos(g)*.11,h,.66+Math.sin(g)*.1)});i.face("#d0b796",...f)}for(let l=0;l<5;l++){const c=.2+l*.16,h=1.73-l*.13;i.face(Ke,t(-2.79,h,c),t(-2.13,h,c),t(-2.13,h-.13,c),t(-2.79,h-.13,c))}for(const l of[-2.81,-2.11])i.beam(t(l,1.77,.16),t(l,1.13,1.06),.075,$s);i.beam(t(2.55,0,1.38),t(4.88,0,2.98),.105,Ke),i.beam(t(4.62,0,2.78),t(1.19,0,4.62),.026,Po);const a=[];for(let l=0;l<14;l++){const c=l*Math.PI/7;a.push(t(-2.37,Math.cos(c)*.31,1.54+Math.sin(c)*.31))}i.beam(t(-2.37,0,1),t(-2.37,0,1.53),.082,$s),a.forEach((l,c)=>{i.beam(l,a[(c+1)%a.length],.036,Ke),c%2===0&&i.beam(l,t(-2.37,0,1.54),.025,Ke)})}function Hh(i,t,e,n){i.beam(t(e,0,.99),t(e,0,n),.087,$s);const s=[[1.56,n*.6,1.03],[n*.61,n*.76,.79],[n*.78,n*.9,.55]];for(const[o,r,a]of s){const l=(c,h)=>{const f=Math.sin(h*Math.PI)*(1-c*c);return t(e+.11+.25*f,c*a*(1-h*.2),o+h*(r-o))};for(let c=0;c<4;c++)for(let h=0;h<6;h++){const f=-1+h/3,u=f+1/3,d=c/4,g=(c+1)/4;i.face(kh[h===0||h===5?0:(c+h)%kh.length],l(f,d),l(u,d),l(u,g),l(f,g))}for(const c of[0,1])i.beam(l(-1.06,c),l(1.06,c),.037,$s);for(const c of[-1,1])i.beam(l(c,0),l(c,1),.023,Po)}for(const o of[-1,1]){i.beam(t(e-.77,o*1.05,1.2),t(e,o*.26,n*.86),.022,Po),i.beam(t(e+.53,o*1.05,1.2),t(e,o*.26,n*.86),.022,Po);for(let r=1;r<10;r++){const a=r/11,l=o*(1.05-.79*a),c=1.2+(n*.86-1.2)*a;i.beam(t(e-.77*(1-a),l,c),t(e+.53*(1-a),l,c),.019,Po)}}}function m_(i,t,e,n,s){for(let o=0;o<14;o++){const r=o*2.399,a=Math.cos(r),l=Math.sin(r),c=s*(.52+.38*(o*7%11/10)),h=t(e+a*.06,n+l*.06,.04),f=t(e+a*.36*s,n+l*.36*s,c*.68),u=t(e+a*.57*s,n+l*.57*s,c),d=["#8c8551","#a09461","#b2a173"][o%3];i.beam(h,f,.027,d),i.beam(f,u,.018,d)}}function Gh(i,t,e,n,s){const o=s?["#a34c43","#be8341","#567b56","#496d80","#c6944e"]:["#675644","#665540"];for(const r of[-.79,.79]){const a=s?"#3e684d":"#444a46";i.beam(t(e-.22,n+r,.025),t(e-.18,n+r,.78),.047,a),i.beam(t(e+.23,n+r,.025),t(e+.22,n+r,.43),.047,a),i.beam(t(e-.18,n+r,.43),t(e+.22,n+r,.43),.052,a)}for(let r=0;r<5;r++){const a=e-.19+r*.1;i.beam(t(a,n-.9,.44),t(a,n+.9,.44),.071,o[r%o.length]),i.beam(t(e-.19-r*.012,n-.9,.57+r*.072),t(e-.19-r*.012,n+.9,.57+r*.072),.067,o[(r+1)%o.length])}}function g_(i,t){const e=new _e;e.name="Сквер у Алых парусов",i.add(e);const n=pe(e,"Алые паруса · деревянный кораблик и клумбы",{surfaces:{wood:[$s,Ke,...Tl,"#8e694c","#856149"],ground:["#777653","#797358"]}}),s=aa(Zs),o=t(...Zs)+.15,r=(u,d,g)=>{const[_,p]=s(u,d);return[_,o+g,p]},a=(u,d)=>[[-u,-d],[u,-d],[u,d],[-u,d]].map(([g,_])=>s(g,_));n.shell(a(9,2.18),o-.08,o+.11,"#d7d5bd"),n.flat(a(8.87,2.05),o+.125,"#777653");for(let u=0;u<28;u++){const d=-4.2+u*.318,g=d+.307;n.face(["#628d86","#699892","#7ca39a","#5a8179"][u%4],r(d,-1.45,.145),r(g,-1.45,.145),r(g,1.45,.145),r(d,1.45,.145))}p_(n,r),Hh(n,r,-1.03,5.02),Hh(n,r,.98,4.6),Gh(n,r,9.27,.08,!0);for(const[u,d,g]of[[-7.25,-.95,1.06],[-6.45,.52,.72],[-5.35,1.11,.93],[4.35,1.4,.89],[5.48,-1.23,1.1],[6.8,.44,.99],[7.85,1.12,.83]])m_(n,r,u,d,g);const l=[],c=["#415c35","#536c3b","#66804c","#4d6540"],h=[[-344.6,-12.8,9.8,3.45],[-326.5,-13.4,10.5,3.4],[-310.6,-14.2,12.5,3.7],[-265.5,-20.3,15,4.7],[-247.5,-23.4,10.8,4.5]];for(const[u,[d,g,_,p]]of h.entries()){const m=aa([d,g]),v=t(d,g)+.14,S=(x,b)=>[[-x,-b],[x,-b],[x,b],[-x,b]].map(y=>m(...y));n.shell(S(_/2,p/2),v-.1,v+.12,"#d4d3c5"),n.flat(S(_/2-.12,p/2-.12),v+.13,"#797358");for(const x of[-.29,.02,.32]){const[b,y]=m(x*_,(u%2-.5)*.8),w=1.15+.51*((u+Math.round(x*10))%3+3)/3;for(let M=0;M<4;M++){const E=w*(.5-M*.095);l.push({center:[b,v+w*(.28+M*.19),y],scale:[E,w*.26,E*.9],color:c[(M+u)%c.length]})}}for(let x=0;x<7;x++){const[b,y]=m((x/6-.5)*_*.75,-.9);l.push({center:[b,v+.2,y],scale:[.42,.16,.42],color:x%3?"#804944":"#77673c"})}}for(const[u,d]of[[-301.1,-31],[-290.8,-31.7],[-273.1,-34.3],[-260.6,-35],[-247.5,-37.5]]){const g=aa([u,d]),_=t(u,d)+.15;Gh(n,(m,v,S)=>{const[x,b]=g(v,-m);return[x,_+S,b]},0,0,!1)}const f=[[-318,0,6.2],[-310.5,-.4,7.7],[-301,1.5,6.4],[-292.2,-.9,8.3],[-282.1,-1.8,7.6],[-272.4,.8,8.7],[-261,-1.2,6.8],[-249.6,.5,7.3]];for(const[u,[d,g,_]]of f.entries()){const p=t(d,g)+.05;n.beam([d,p,g],[d+.13,p+_*.69,g],.24,"#665949");for(let m=0;m<6;m++){const v=m*2.399,S=_*(m<4?.21:.14);l.push({center:[d+Math.cos(v)*S,p+_*(.6+m*.047),g+Math.sin(v)*S],scale:[_*.26,_*.27,_*.23],color:c[(u+m)%c.length]})}}d_(e,l),n.finish()}function Yn(i,{text:t,position:e,size:n,outward:s,color:o="#fff",background:r,weight:a=700}){if(typeof document>"u")return;const l=document.createElement("canvas");l.width=512,l.height=Math.max(32,Math.round(512*n[1]/n[0]));const c=l.getContext("2d");if(!c)return;r&&(c.fillStyle=r,c.fillRect(0,0,l.width,l.height)),c.fillStyle=o,c.textBaseline="middle",c.textAlign="center";let h=l.height*.76;c.font=`${a} ${h}px system-ui, sans-serif`,h*=Math.min(1,l.width*.93/c.measureText(t).width),c.font=`${a} ${h}px system-ui, sans-serif`,c.fillText(t,l.width/2,l.height/2);const f=new nf(l);f.colorSpace=Qe;const u=new ji({map:f,alphaTest:.35,toneMapped:!1}),d=new xe(new Li(...n),u);d.name=t,d.position.set(...e),d.rotation.y=Math.atan2(...s),i.add(d)}const Ie="#f4f2e9",kf="#e9e7df",tn="#373e3e",ca="#303637",Ks="#b28c5e",$a=["#d1b27a","#bc9c63","#c8a86f"],__="#ecefe8",Yi=[[-416.6,-27.8,-17.5],[-408.5,-25.4,-15.7],[-399.5,-23.2,-14.7],[-389.5,-22.8,-14.6],[-378.4,-23.1,-14.8]],Hf=[[-415.65,-26.9],[-407.4,-24.5],[-408.6,-16.85],[-416.1,-18.05]];function Gf(i,t,e,n){return[[i,e],[t,e],[t,n],[i,n]]}function li(i,t,e,n,s=24){return Array.from({length:s},(o,r)=>{const a=r*2*Math.PI/s;return[i+e*Math.cos(a),t+n*Math.sin(a)]})}function Ee([i,t],e){return[i,e,t]}function Zr(i,t){const e=Yi.findIndex(([o])=>o>=i);if(e<0)return Yi.at(-1)[t];const n=Yi[Math.max(0,e-1)],s=Yi[Math.max(0,e)];return n===s?n[t]:n[t]+(s[t]-n[t])*(i-n[0])/(s[0]-n[0])}function hn(i,t,e,n,s,o,r,a){i.shell(Gf(t-s/2,t+s/2,n-r/2,n+r/2),e,e+o,a)}function x_(i,t){const e=new _e;e.name="Кофейня Qúeue",i.add(e);const n=pe(e,"Павильон и кофейная стойка",{surfaces:{wood:["#b48558","#796c51"],foliage:["#737a51","#68774a","#83916b"]}}),s=uo(new ji({color:"#759497",transparent:!0,opacity:.26,depthWrite:!1,side:ln}),{surface:"glass",strength:.6}),o=Hf,r=t(-412.5,-21.7),a=r+.09,l=r+2.82;n.shell(o,r-.18,a,"#c9c5b5"),n.shell(o,l,r+3.12,Ie),n.wall(o[3],o[0],a,l,Ie);for(const[f,u]of[[0,[0,.13,.32,.54,.76,.95,1]],[1,[0,.14,.39,.64,.89,1]],[2,[0,.28,.43,.58,.7,.88,1]]]){const d=o[f],g=o[f+1],_=g[0]-d[0],p=g[1]-d[1],m=Math.hypot(_,p);for(let v=0;v<u.length-1;v++){const S=_t(d,g,u[v]),x=_t(d,g,u[v+1]);if(v===0||v===u.length-2){n.wall(S,x,a,l,Ie);continue}const y=f===2&&v===4,w=f===2&&v===3,M=y||w?r+2.48:l;M<l&&n.wall(S,x,M,l,Ie);const E=_t(S,x,.5),A=w?r+1.1:a;w&&(n.wall(S,x,a,A,"#a8a494"),n.beam([S[0],A,S[1]],[x[0],A,x[1]],.12,ca));const C=new xe(new Li((u[v+1]-u[v])*m,M-A),s);C.position.set(E[0],(A+M)/2,E[1]),C.rotation.y=-Math.atan2(p,_),e.add(C);for(const D of[S,x])n.beam(Ee(D,a),Ee(D,M),.058,ca);if(n.beam(Ee(S,M),Ee(x,M),.055,ca),y){const D=_t(S,x,.82);n.beam(Ee(D,r+.92),Ee(D,r+1.3),.052,"#bab4a5")}}}const c=[[-415.28,-22.2],[-414.15,-22.2],[-413.68,-21.78],[-413.68,-19.92],[-412.9,-19.25],[-411.05,-19.25],[-410.8,-18.65],[-411.22,-18.34],[-414.68,-18.67],[-415.25,-19.13]];n.shell(c,a,r+1.07,"#e4decd"),n.shell(c,r+1.07,r+1.14,"#f1e9d7");const h=c.map(f=>_t([-413.5,-19.8],f,1.03));n.shell(h,r+2.08,r+2.15,"#eac58a"),n.shell(h,r+2.15,l,"#e3dbc9"),hn(n,-413.54,r+1.14,-19.02,.86,.46,.45,"#343435"),hn(n,-413.54,r+1.5,-18.79,.76,.08,.04,"#a7a199");for(const f of[-413.8,-413.62,-413.44,-413.26])n.shell(li(f,-18.99,.06,.06,10),r+1.6,r+1.76,"#b48558");hn(n,-411.83,r+1.14,-18.85,.85,.34,.46,"#948273"),hn(n,-411.83,r+1.48,-18.85,.85,.046,.46,"#bbb2a0");for(const[f,u]of[[-412.4,-21.8],[-410.8,-21.2]])n.shell(li(f,u,.21,.21,14),a,r+.47,"#e0d9c9"),n.shell(li(f,u,.32,.32,14),r+.47,r+.52,"#ece4d2");for(const f of[.19,.39,.59,.79]){const[u,d]=_t(o[0],o[1],f),g=t(u,d-.66);for(const _ of[-.24,.24])n.beam([u+_,g,d-.82],[u+_,g+.43,d-.82],.022,tn),n.beam([u+_,g,d-.36],[u+_,g+.86,d-.28],.026,tn),n.beam([u+_,g+.41,d-.82],[u+_,g+.41,d-.35],.032,tn);for(let _=0;_<7;_++){const p=g+.45+_*.063,m=d-.34+_*.008;n.beam([u-.24,p,m],[u+.24,p,m],.015,tn)}hn(n,u,g+.41,d-.58,.48,.05,.42,tn)}for(const f of[.04,.94]){const[u,d]=_t(o[0],o[1],f);v_(n,u,t(u,d-.64),d-.64)}n.finish()}function v_(i,t,e,n){i.shell(li(t,n,.26,.26,12),e,e+.5,"#e6e7dd"),i.flat(li(t,n,.22,.22,12),e+.505,"#6b6154"),i.beam([t,e+.5,n],[t+.04,e+1.39,n+.02],.035,"#796c51");for(let s=0;s<9;s++){const o=s*2.4,r=e+.79+s*.075,a=[t+.21*Math.cos(o),r+.11,n+.21*Math.sin(o)];i.beam([t,r,n],a,.024,"#737a51"),i.face(s%2?"#68774a":"#83916b",a,[t+.025,r,n+.06],[a[0]*.5+t*.5,r+.17,a[2]*.5+n*.5])}}function M_(i){const t=new _e;t.name="Ресторан «Море. Истории о еде»",i.add(t);const e=pe(t,"Белая терраса у «Старинной Анапы»",{surfaces:{wood:[Ks,...$a],ground:["#6b6154"]}}),{front:[n,s],grade:o}=Gs,r=(u,d)=>{const[g,_]=_t(n,s,u/32.59);return[g-d*.197,_+d*.98]},a=(u,d,g,_)=>[r(u,g),r(d,g),r(d,_),r(u,_)],l=o+.15,c=l+2.94;e.shell(a(0,32.59,0,1.9),l-.34,l,"#b6aa94"),e.shell(a(0,32.59,7.1,9.15),l-.34,l,"#b6aa94");for(const[u,d]of[[0,7.3],[12.1,20.4],[24.9,32.59]])e.shell(a(u,d,1.9,7.1),l-.34,l,"#b6aa94");for(const[u,d,g,_]of[[0,32.59,0,1.9],[0,32.59,7.1,9.15],[0,7.3,1.9,7.1],[12.1,20.4,1.9,7.1],[24.9,32.59,1.9,7.1]])for(let p=u+.13;p<d;p+=.34)e.beam(Ee(r(p,g),c),Ee(r(p,_),c),.077,Ie);for(let u=0;u<6;u++){const d=c-.02+u*.09;e.beam(Ee(r(0,0),d),Ee(r(32.59,0),d),.066,Ie);for(const g of[0,32.59])e.beam(Ee(r(g,0),d),Ee(r(g,9.15),d),.066,Ie)}for(const u of[.14,4.55,8.98,13.41,17.84,22.27,26.7,32.43])e.beam(Ee(r(u,.22),l),Ee(r(u,.22),c+.44),.165,Ie);for(const u of[2.35,6.82,11.25,15.66,20.07,24.48,28.89,31.3]){e.shell(a(u-.76,u+.76,.16,.72),l,l+.65,Ie);for(let _=1;_<=5;_++){const p=l+.1+_*.085;e.beam(Ee(r(u-.75,.153),p),Ee(r(u+.75,.153),p),.02,kf)}e.flat(a(u-.7,u+.7,.2,.68),l+.655,"#788166");const[d,g]=r(u,1.34);hn(e,d,l+.69,g,.82,.07,.7,"#ab8d63"),hn(e,d,l,g,.08,.69,.08,"#545549")}const[h,f]=r(25.4,-.05);Yn(t,{text:"МОРЕ",position:[h,c+.2,f],size:[2.28,.41],outward:[.197,-.98],color:"#6e553a"}),e.finish()}function S_(i,t){const e=new _e;e.name="Гриль-бар «Бикью»",i.add(e);const n=pe(e,"Остеклённый фасад на Греческом переулке",{surfaces:{flatRoof:["#353635"],stone:["#77726a"],wood:["#403731"]}}),s=[[-456.42,4.1],[-456.94,24.1]],o=[[-458.12,4.1],[-458.64,24.1]],r=[o[0],s[0],s[1],o[1]],a=t(-457,14.1)+.11,l=Math.min(...s.map(f=>t(...f)))-.2,c=a+2.82;n.shell(r,l,a+.12,"#77726a"),n.shell(r,c,c+.21,"#353635"),n.wall(...o,a+.1,c,"#403731");const h=uo(new ji({color:"#394c50",transparent:!0,opacity:.53,depthWrite:!1,side:ln}),{surface:"glass",strength:.7});for(const[f,u,d]of[[...s,14],[o[0],s[0],1],[s[1],o[1],1]])for(let g=0;g<d;g++){const _=_t(f,u,g/d),p=_t(f,u,(g+1)/d),m=_t(_,p,.5),v=p[0]-_[0],S=p[1]-_[1],x=new xe(new Li(Math.hypot(v,S),c-a-.12),h);if(x.position.set(m[0],(c+a+.12)/2,m[1]),x.rotation.y=-Math.atan2(S,v),e.add(x),n.beam(Ee(_,a+.08),Ee(_,c),.074,"#292c2b"),n.beam(Ee(_,a+.85),Ee(p,a+.85),.041,"#393b39"),d===14&&g!==6&&g!==7){for(const b of[.12,.45]){const y=Math.max(0,t(m[0]+.15,m[1])-a),w=(M,E)=>{const[A,C]=_t(_,p,M+b);return[A+.025,a+E+y,C]};n.face("#c89045",w(0,.36),w(.14,.36),w(.31,.6),w(.17,.6)),n.face("#c89045",w(.17,.6),w(.31,.6),w(.14,.84),w(0,.84))}hn(n,m[0]-.75,a+.71,m[1],.55,.09,.62,"#856747"),hn(n,m[0]-.75,a+.1,m[1],.07,.61,.07,"#343330")}}Yn(e,{text:"BAR BQ",position:[-456.65,c+.02,13.98],size:[2.05,.35],outward:[1,.026],color:"#e8d8ae",background:"#343533"}),n.finish()}function b_(i,t){const e=new _e;e.name="Лаундж-зона «Очередь»",i.add(e);const n=pe(e,"Волнообразный навес и кофейня"),s=(g,_)=>t(g,_)+.19,o=g=>{const _=(g+395.7)/5.6;return s(g,Zr(g,2))+3.65+1.08*Math.exp(-(_**2))},r=(g,_,p=0)=>[g,o(g)+p,Zr(g,_)],a=[-416.6,-409.3,-403.8,-388.6,-383.6,-378.4];for(const g of[1,2])for(let _=1;_<a.length;_++){const p=a[_-1],m=a[_],v=Math.ceil((m-p)/.37);let S,x;for(let b=0;b<=v;b++){const y=b/v,w=p+(m-p)*y,M=Zr(w,g),E=s(w,M),A=Math.sqrt(Math.max(0,1-(2*y-1)**2)),C=[w,E+.09+(o(w)-E-.36)*A,M],D=r(w,g);S&&(n.beam(S,C,.18,Ie),n.beam(x,D,.2,kf),n.beam([x[0],x[1]-.23,x[2]],r(w,g,-.23),.075,Ie)),(b>0||_===1)&&n.beam(C,D,b===0||b===v?.18:.065,Ie),S=C,x=D}}for(let g=0;g<=94;g++){const _=a[0]+(a.at(-1)-a[0])*g/94;n.beam(r(_,1,-.11),r(_,2,-.11),.1,Ie)}x_(e,s);const l=-412.2,c=o(l)-.1,h=(Yi[1][2]-Yi[0][2])/(Yi[1][0]-Yi[0][0]),f=[-h,1],u=Zr(l,2)+.15,d=[[-1.65,-.04],[1.65,-.04],[1.65,.04],[-1.65,.04]].map(([g,_])=>[l+g,u+g*h+_]);n.shell(d,c-.21,c+.21,Ie),Yn(e,{text:"Qúeue · кофе и море",position:[l,c,u+.05],size:[3.2,.39],outward:f,color:ca}),n.finish()}function Vh(i,t,e,n){const s=t(e,n)+.16,o=li(e,n,3.45,2.35);i.shell(o,s-.24,s+.08,Ks);for(let a=-10;a<=10;a++){const l=a*.22,c=3.4*Math.sqrt(1-(l/2.35)**2);i.beam([e-c,s+.084,n+l],[e+c,s+.084,n+l],.018,$a[(a+12)%$a.length])}for(const a of[-1,1]){const l=[e+a*2.5,n];i.shell(li(...l,.095,.095,10),t(...l)-.12,s+3.05,Ie)}const r=li(e,n,3.55,2.45,32);for(let a=0;a<r.length;a++)i.beam(Ee(r[a],s+2.88),Ee(r[(a+1)%r.length],s+2.88),.13,Ie);for(let a=-8;a<=8;a++){const l=a*.4,c=2.41*Math.sqrt(1-(l/3.55)**2);i.beam([e+l,s+2.89,n-c],[e+l,s+2.89,n+c],.09,Ie)}for(const a of[-.23,-.09,.09,.23]){const l=Array.from({length:32},(c,h)=>{const f=h*Math.PI/16;return[e+.97*Math.cos(f),s+1.38+.99*Math.sin(f),n+a]});for(let c=0;c<l.length;c++)i.beam(l[c],l[(c+1)%l.length],.035,Ie)}hn(i,e,s+.55,n,1.08,.055,.48,Ks);for(const a of[-.57,.57])i.beam([e+a,s+2.21,n],[e+a,s+2.89,n],.018,tn)}function y_(i,t){const s=t(-397.8,-29.25)+.18;for(const r of[-2.28,2.28])i.shell(li(-397.8+r,-29.25,.085,.085,12),s-.14,s+3.38,Ie);const o=[[-397.8-3.18,s+2.77,-29.25+.45],[-397.8-3.27,s+3,-29.25-1.37],[-397.8,s+2.67,-29.25-.72],[-397.8+3.29,s+3.02,-29.25-1.3],[-397.8+3.14,s+2.8,-29.25+.49]];for(let r=0;r<o.length;r++)i.beam(o[r],o[(r+1)%o.length],.085,Ie);for(let r=0;r<20;r++){const a=(r+1)/21,l=a<.5?_t(o[1],o[2],a*2):_t(o[2],o[3],(a-.5)*2);i.beam(l,_t(o[0],o[4],a),.064,Ie)}}function w_(i,t){const e=new _e;e.name="Качели, теневые крылья и белые галечные сиденья",i.add(e);const n=pe(e,"Настилы и мебель",{surfaces:{wood:[Ks,...$a]}});Vh(n,t,-410.7,-30.1),Vh(n,t,-382.8,-25.55),y_(n,t);const s=new Pn(1,24,12),o=new ne({color:__});for(const[f,u,d,g,_,p]of[[-401.9,-30.05,1.12,.69,.41,.18],[-402.7,-27.65,.88,.65,.4,-.29],[-399.6,-26.05,1.26,.72,.43,-.14],[-396.7,-28.5,.73,.62,.41,.26],[-395.1,-26.05,.98,.68,.43,-.31]]){const m=new xe(s,o);m.scale.set(d,_,g),m.rotation.y=p,m.position.set(f,t(f,u)+_+.15,u),m.castShadow=!0,m.receiveShadow=!0,e.add(m)}for(const[f,u]of[[-406.2,-20.1],[-403,-18.2],[-390.1,-17.3]]){const d=t(f,u)+.15;n.shell(li(f,u,.38,.38,16),d+.72,d+.77,tn),n.beam([f,d,u],[f,d+.72,u],.045,tn);for(const g of[-.74,.74]){hn(n,f+g,d+.43,u,.42,.055,.42,tn);for(const _ of[-.16,.16])for(const p of[-.15,.15])n.beam([f+g+_,d,u+p],[f+g+_,d+.43,u+p],.029,tn);n.wall([f+g*1.25,u-.19],[f+g*1.25,u+.19],d+.46,d+.81,tn)}}const r=-387.7,a=-20.4,l=t(r,a)+.16,c=Gf(r-.92,r+.92,a-.72,a+.72);n.shell(c,l-.12,l+.42,Ks);for(const f of c)n.beam(Ee(f,l),Ee(f,l+1.75),.09,Ks);const h=[[r-1,l+2.35,a],[r+1,l+2.35,a]];for(const f of[-1,1])n.face("#99704d",...h,[r+1.03,l+1.72,a+f*.82],[r-1.03,l+1.72,a+f*.82]);n.finish()}function E_(i,t){const e=pe(i,"Памятный знак Матери Марии"),n=-652.7,s=-66.6,o=t(n,s)+.1,r=[[-1.02,-.42],[-.73,-.78],[.59,-.78],[1.05,-.39],[1.15,.24],[.91,.59],[-.78,.61],[-1.1,.18]],l=[[-.63,.68,-.21],[-.42,1.14,-.51],[.04,1.53,-.56],[.53,1.25,-.39],[.84,.85,-.01],[.88,.47,.37],[-.76,.48,.43],[-.94,.59,.16]].map(([h,f,u])=>[n+h,o+f,s+u]),c=r.map(([h,f])=>[n+h,o-.13,s+f]);for(let h=0;h<r.length;h++){const f=(h+1)%r.length;e.face(h%2?"#706f67":"#666860",c[h],c[f],l[f],l[h]),e.face(h%3?"#8e928b":"#a4a79f",l[h],l[f],[n+.03,o+.95,s-.01])}e.beam([n+.02,o+.05,s+1],[n+.08,o+1.58,s-.57],.14,"#807f71"),e.beam([n-.82,o+1,s+.055],[n+.9,o+1,s+.055],.14,"#807f71");for(let h=0;h<3;h++)for(const[f,u]of[-1.2,-.6,.035,.635].entries()){const d=n+u+.286,g=s+1.33+h*.58,_=t(d,g)+.035;hn(e,d,_-.08,g,.57,.09,.56,f===0||f===3?"#a78277":"#929897")}e.finish()}function T_(i,t){const e=pe(i,"Памятник морскому десанту"),n=-631.7,s=-37.2,o=t(n,s)+.09,r=(l,c,h)=>[n+l,o+c,s+h];hn(e,n,o-.12,s+.45,2.85,.23,2.35,"#bbb6aa"),hn(e,n,o+.11,s+.3,2.19,.26,1.57,"#424545"),hn(e,n,o+.37,s-.25,1.06,2.08,.22,"#333837");const a=Array.from({length:10},(l,c)=>{const h=Math.PI/2+c*Math.PI/5,f=c%2?.064:.151;return r(-.28+f*Math.cos(h),2.12+f*Math.sin(h),-.135)});for(let l=0;l<a.length;l++)e.face("#b6a06b",r(-.28,2.12,-.135),a[l],a[(l+1)%a.length]);e.beam(r(-.34,.52,.73),r(.73,1.39,.54),.13,tn),e.beam(r(-.44,.58,.48),r(-.2,.53,.95),.18,tn);for(const[l,c]of[[[-.66,.79,.72],[-.62,1.33,.65]],[[-.21,.84,.7],[.01,1.35,.58]]])e.beam(r(-.37,.57,.74),r(...l),.11,tn),e.beam(r(...l),r(...c),.1,tn),e.face(tn,r(...c),r(c[0]-.1,c[1]-.26,c[2]+.07),r(c[0]+.08,c[1]-.23,c[2]-.05));for(const l of[-1,0,1]){const c=l*.82,h=l*1.21,f=[r(c-.32,.28,1.72),r(c+.32,.28,1.72),r(h+.37,.19,3.17),r(h-.37,.19,3.17)],u=f.map(([d,,g])=>[d,t(d,g)-.08,g]);e.face("#b7b5ac",...f);for(let d=0;d<f.length;d++){const g=(d+1)%f.length;e.face("#a7a8a1",f[d],f[g],u[g],u[d])}e.face("#444746",r(c-.25,.294,1.8),r(c+.25,.294,1.8),r(h+.28,.216,3.05),r(h-.28,.216,3.05))}e.finish()}function A_(i,t){b_(i,t),w_(i,t),M_(i),S_(i,t),E_(i,t),T_(i,t)}const us=Math.PI*2;function Ko(i,t,e,n=36){return Array.from({length:n},(s,o)=>{const r=o/n*us;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function R_(){const e=new Uint8Array(18432);for(let s=0;s<48;s++){const o=(s+.5)/48;for(let r=0;r<96;r++){const a=r/96*us,l=Math.max(0,Math.sin(a*3)*.06+Math.sin(a*7+.4)*.035),c=o>.51+l?[173+o*46,196+o*36,211+o*38]:o>.42?[71,78,66]:[122+o*71,113+o*77,99+o*86],h=(s*96+r)*4;e.set([...c,255],h)}}const n=new dc(e,96,48);return n.colorSpace=Qe,n.mapping=zo,n.needsUpdate=!0,new Zo({color:"#ced3d4",envMap:n,reflectivity:.88,specular:"#f2f5f5",shininess:78})}function C_(i,t){const s=pe(i,"Фонтан «Жемчужина Анапы»"),o=(d,g,_=0)=>[d,t(d,g)+.17+_,g],r=Ko(-238,2,3.5),a=Ko(-238,2,3.71);r.forEach(([d,g],_)=>{const p=(_+1)%r.length;s.face("#555857",o(-238,2),o(d,g),o(...r[p])),s.face("#997359",o(d,g),o(...a[_]),o(...a[p]),o(...r[p]))});for(let d=0;d<28;d++){const g=d*us/28,_=Ko(-238+2.85*Math.cos(g),2+2.85*Math.sin(g),.036,8);s.face("#a7a8a1",..._.map(p=>o(...p,.008)))}const l=.13;for(let d=0;d<6;d++){const g=l+d*us/6;for(let _=0;_<5;_++){const p=g-.34+_*.135,m=p+.133,v=(w,M,E)=>o(-238+Math.cos(w)*M,2+Math.sin(w)*M,E),S=v(p,4.43,.44),x=v(m,4.43,.44),b=v(p,4.93,.36),y=v(m,4.93,.36);s.face("#9e9a90",S,x,v(m,4.41,-.045),v(p,4.41,-.045)),s.face("#8e8b84",v(p,5.06,.02),v(m,5.06,.02),v(m,5.06,.1),v(p,5.06,.1)),s.face("#bf8770",S,x,y,b),s.face("#b67e64",b,y,v(m,5.06,.1),v(p,5.06,.1)),_===0&&s.face("#a39d92",S,b,v(p,5.06,.02),v(p,4.41,-.045)),_===4&&s.face("#a39d92",x,y,v(m,5.06,.02),v(m,4.41,-.045))}}const c=new _e;c.name="Шесть зеркальных сфер",i.add(c);const h=new Pn(1,28,20),f=R_(),u=[[0,0,.57,3.35],[-1.65,1.12,.56,.86],[1.77,-.98,.48,1.12],[-2.31,-1.72,.51,0],[2.44,1.69,.47,0],[.47,-2.67,.43,0]];for(const[d,g,_,p]of u){const[m,v,S]=o(-238+d,2+g),x=new xe(h,f);if(x.scale.setScalar(_),x.position.set(m,v+_+p,S),x.castShadow=!0,c.add(x),!!p)for(let b=0;b<11;b++){const y=b/11*us,w=y+.88;s.beam([m+Math.cos(y)*.13,v,S+Math.sin(y)*.13],[m+Math.cos(w)*_*.63,v+p+.13,S+Math.sin(w)*_*.63],.026,"#a5a7a4")}}s.finish()}function P_(i,t){const o=Math.cos(-.51),r=Math.sin(-.51),a=pe(i,"Арка Центрального пляжа"),l="#eeeae0",c="#dbd9ce",h=3.11,f=[1.21,1.28,1.34,1.28,1.21],u=[-6.36,-3.69,-1.25,1.25,3.69,6.36],d=(m,v)=>[197.02+m*o-v*r,-463.27+m*r+v*o],g=Math.max(...u.map(m=>t(...d(m,0))))+.16,_=(m,v,S)=>{const[x,b]=d(m,v);return[x,g+S,b]},p=(m,v,S,x)=>[d(m-S,v-x),d(m+S,v-x),d(m+S,v+x),d(m-S,v+x)];for(const[m,v]of u.entries())if(m===0||m===1||m===4||m===5){a.shell(p(v,0,.47,1.18),g-.4,g+h,l),a.shell(p(v,0,.57,1.27),g+h-.045,g+h+.1,l);for(const x of[-1.03,1.03])a.shell(p(v,x,.37,.17),g+h,g+h+.95,l);a.shell(p(v,0,.42,1.23),g+h+.95,g+h+1.09,l)}else for(const x of[-.92,.92])a.shell(p(v,x,.2,.21),g-.4,g+h,l),a.shell(p(v,x,.27,.28),g+h-.06,g+h+.085,l);for(const m of[-.92,.92])for(let v=0;v<f.length;v++){const S=(u[v]+u[v+1])/2,x=(u[v+1]-u[v])/2,b=(y,w,M)=>_(S+(x+w)*Math.cos(y),m+M*.17,h+(f[v]+w)*Math.sin(y));for(let y=0;y<14;y++){const w=Math.PI*y/14,M=Math.PI*(y+1)/14;for(const E of[-1,1])a.face(l,b(w,-.19,E),b(M,-.19,E),b(M,.11,E),b(w,.11,E));a.face(c,b(w,-.19,-1),b(M,-.19,-1),b(M,-.19,1),b(w,-.19,1)),a.face(l,b(w,.11,-1),b(M,.11,-1),b(M,.11,1),b(w,.11,1))}}a.finish()}function L_(i,t){const s=t(64.17,13.11)+.16,o=pe(i,"Скульптура «Белая шляпа»"),r=["#8b8777","#a39e8d","#a9a38f","#8d897b","#969383"],a=[[1.28,.77,-.12,.1],[1.39,.74,.35,.19],[1.12,.65,.75,.17],[.79,.57,1.12,.08],[.48,.38,1.56,-.17]].map(([g,_,p,m],v)=>Array.from({length:13},(S,x)=>{const b=x/13*us,y=1+.13*Math.sin(x*3.3+v*.81);return[64.17+m+Math.cos(b)*g*y,s+p+.12*Math.cos(x*2.4+v),13.11+Math.sin(b)*_*y]}));for(let g=0;g<a.length-1;g++){const _=a[g],p=a[g+1];_.forEach((m,v)=>{const S=(v+1)%_.length;o.face(r[(v+g*3)%r.length],m,_[S],p[S]),o.face(r[(v+g*3+1)%r.length],m,p[S],p[v])})}o.face("#a29e8f",...a.at(-1));const l=(g,_,p)=>Array.from({length:32},(m,v)=>{const S=v/32*us,x=Math.cos(S)*g,b=Math.sin(S)*g*.83,y=p?.038*Math.cos(2*S):.044*Math.cos(2*S);return[64.17-.13+x,s+1.56+_+b*.37+y,13.11+b]}),h=[[.75,0,!1],[.75,.035,!1],[.4,.12,!1],[.405,.155,!0],[.39,.22,!0],[.34,.43,!0],[.24,.49,!0],[.08,.46,!0]].map(g=>l(...g));for(let g=0;g<h.length-1;g++){const _=h[g+1],p=h[g];p.forEach((m,v)=>{const S=(v+1)%p.length;o.face(g===3?"#d8d7ce":"#f5f3e9",m,p[S],_[S],_[v])})}o.face("#f5f3e9",...h.at(-1));const f={Б:[[[.88,1],[0,1],[0,0],[.76,0],[.9,.22],[.72,.53],[0,.53]]],Е:[[[.88,1],[0,1],[0,0],[.9,0]],[[0,.5],[.75,.5]]],Л:[[[0,0],[.31,1],[.84,1],[.84,0]]],А:[[[0,0],[.45,1],[.9,0]],[[.2,.42],[.7,.42]]],Я:[[[.9,0],[.9,1],[.25,1],[0,.76],[.23,.54],[.9,.54]],[[.52,.54],[0,0]]],Ш:[[[0,1],[0,0],[.95,0],[.95,1]],[[.475,0],[.475,1]]],П:[[[0,0],[0,1],[.86,1],[.86,0]]]};[..."БЕЛАЯ ШЛЯПА"].forEach((g,_)=>{for(const p of f[g]??[]){const m=p.map(([v,S])=>{const x=(_+v-5.5)*.155;return[64.17+Math.sin(x)*1.17,s+.41+S*.175,13.11+Math.cos(x)*.88]});m.slice(1).forEach((v,S)=>o.beam(m[S],v,.032,"#f5f3e9"))}});const u=Ko(64.17,13.11,2.45),d=(g,_)=>[g,t(g,_)+.17,_];u.forEach((g,_)=>o.face("#b4ac9c",d(64.17,13.11),d(...g),d(...u[(_+1)%u.length])));for(let g=0;g<46;g++){const _=g*2.39996,p=1.12+g%13/13*1.19,m=64.17+Math.cos(_)*p,v=13.11+Math.sin(_)*p,S=t(m,v)+.17;o.shell(Ko(m,v,.09+g%4*.035,6),S-.01,S+.03+g%3*.025,r[g%r.length])}o.finish()}function D_(i,t){C_(i,t),L_(i,t),P_(i,t)}function I_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Pe;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in o){const f=Wh(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const g=Wh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Wh(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new On(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);a.setComponent(u+f,g,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Ka=Math.PI/4,U_="#e1d9bf",N_="#26313a",F_=[[37.2996896,44.8872772],[37.2995282,44.8874039],[37.2994588,44.8874602],[37.2994093,44.887514],[37.2990185,44.8878942],[37.2988335,44.8880063],[37.2982407,44.8885479]],O_=[[37.2992911,44.8877628],[37.2988951,44.8881412]];function Os(i,t){const e=(i-.5)*Ka;return[Math.sin(e)*t,Math.cos(e)*t]}function Xh(i){const t=i*Ka;return-.85*Math.sin(t)+.5*Math.cos(t)>0}function B_(i,{rings:t},e){const n=t[0],s=n.reduce((x,b)=>x+b[0],0)/n.length,o=n.reduce((x,b)=>x+b[1],0)/n.length,r=e(s,o),a=Math.min(...n.map(x=>e(...x)))-r-.3,c=n.reduce((x,[b,y])=>x+Math.hypot(b-s,y-o),0)/n.length*.74,h=new ne({color:U_,flatShading:!0}),f=new ne({color:N_,flatShading:!0}),u=new ne({color:"#b6b8ae"}),d=new ne({color:"#a9c2c8",transparent:!0,opacity:.56,depthWrite:!1}),g=new _e,_=new Map([[h,[]],[f,[]]]);g.name="Анапский маяк",g.position.set(s,r,o),i.add(g);function p(x,b,y,w,M,E=8){const A=new xe(new En(w,y,b-x,E),M);return A.position.y=(b+x)/2,A.rotation.y=-Math.PI/E,A.castShadow=M!==d,g.add(A),A}function m(x,b,y,w,M,E,A,C){const D=x*Ka,P=Math.sin(D),L=Math.cos(D),U=c*Math.cos(Ka/2)+A,k=new we(M,y,E);k.rotateY(D),k.translate(P*U+L*w,b,L*U-P*w),_.get(C).push(k)}p(a,3.15,c*1.13,c*1.13,h),p(3.15,3.55,c*1.16,c*1.16,h);const v=[[3.55,6.5,!0],[6.5,9.2,!1],[9.2,12,!0],[12,14.6,!1],[14.6,17.05,!0]];for(const[x,b,y]of v){const w=new Pe,M=[[],[]];for(let A=0;A<8;A++){const[C,D]=Os(A,c),[P,L]=Os(A+1,c);if(M[Number(y&&Xh(A))].push(C,x,D,P,x,L,P,b,L,C,x,D,P,b,L,C,b,D),x<14.6){const U=y&&Xh(A)?f:h;for(const k of[-c*.2,c*.2])m(A,(x+b)/2,b-x,k,c*.095,.16,.03,U)}}w.setAttribute("position",new oe(M.flat(),3)),w.addGroup(0,M[0].length/3,0),M[1].length&&w.addGroup(M[0].length/3,M[1].length/3,1),w.computeVertexNormals();const E=new xe(w,[h,f]);E.castShadow=!0,g.add(E)}p(12.2,12.39,c*1.05,c*1.05,h),p(13.4,13.54,c*1.04,c*1.04,h),p(17.05,17.65,c*1.07,c*1.07,h),p(17.65,17.9,c*1.12,c*1.12,h);for(let x=0;x<8;x++)for(const b of[-c*.22,0,c*.22])m(x,17.34,.24,b,.26,.07,c*.067,f);for(const[x,b]of _){g.add(new xe(I_(b),x));for(const y of b)y.dispose()}p(17.9,18.11,c*.71,c*.71,h,12),p(18.11,20.05,c*.58,c*.58,d,12),p(20.05,20.83,c*.68,.24,h,12),p(20.83,21,.24,.12,h,12),p(18.48,19.43,.31,.31,new ne({color:"#a0433d"}),12);const S=[];for(let x=0;x<12;x++){const b=(x-.5)*Math.PI/6,y=Math.sin(b)*c*.58,w=Math.cos(b)*c*.58;S.push([[y,18.11,w],[y,20.05,w],.052])}for(let x=0;x<8;x++){const[b,y]=Os(x,c*1.01),[w,M]=Os(x+1,c*1.01);S.push([[b,17.9,y],[b,18.8,y],.042]);for(const P of[18.35,18.8])S.push([[b,P,y],[w,P,M],.037]);const[E,A]=Os(x,c*.88),[C,D]=Os(x+1,c*.88);S.push([[E,19.55,A],[C,19.55,D],.033]),S.push([[E,20.46,A],[C,20.46,D],.033]),S.push([[E,19.55,A],[E,20.46,A],.033])}Vf(g,S,u,"Ограждения фонаря")}function Vf(i,t,e,n){const s=new we(1,1,1),o=new Ci(s,e,t.length);o.name=n;const r=new Ae,a=new z,l=new z,c=new z,h=new z(1,0,0);for(const[f,[u,d,g]]of t.entries())a.set(...u),l.set(...d),c.subVectors(l,a),r.position.copy(a).lerp(l,.5),r.scale.set(c.length(),g,g),r.quaternion.setFromUnitVectors(h,c.normalize()),r.updateMatrix(),o.setMatrixAt(f,r.matrix);i.add(o)}function qh(i,t,e,{height:n,color:s,spacing:o,width:r,name:a}){const l=[];for(let c=1;c<t.length;c++){const[h,f]=t[c-1],[u,d]=t[c],g=Math.ceil(Math.hypot(u-h,d-f)/2.4),_=(p,m)=>{const v=h+(u-h)*p,S=f+(d-f)*p;return[v,e(v,S)+m,S]};for(let p=0;p<g;p++){const m=p/g,v=(p+1)/g;l.push([_(m,.05),_(m,n+.05),r*2.8]);for(const x of[.14,n])l.push([_(m,x),_(v,x),r*1.7]);const S=Math.ceil(Math.hypot(u-h,d-f)/(g*o));for(let x=1;x<S;x++){const b=(p+x/S)/g;l.push([_(b,.14),_(b,n),r])}}c===t.length-1&&l.push([_(1,.05),_(1,n+.05),r*2.8])}Vf(i,l,new ne({color:s}),a)}function z_(i,{origin:[t,e],scale:n},s){const o=r=>r.map(([a,l])=>[(a-t)*n[0],(e-l)*n[1]]);qh(i,o(F_),s,{height:1.06,color:"#9a9c95",spacing:.16,width:.038,name:"Ограда Верхней Набережной"}),qh(i,o(O_),s,{height:1.76,color:"#363f40",spacing:.16,width:.027,name:"Ограда маяка"})}const k_="125862202",H_="977564342",cl=12,$r=3;function Kr(i,t,e,n){const s=[];for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=e*(n(r)-t),c=e*(n(a)-t);if(l>=0&&s.push(r),l<0!=c<0){const h=l/(l-c);s.push([ae.lerp(r[0],a[0],h),ae.lerp(r[1],a[1],h)])}}return s}function un(i,t,e,n,s){const o=new _c(t.map(([a,l])=>new St(a,-l))),r=new xe(new _r(o,{depth:n,bevelEnabled:!1}),s);r.rotation.x=-Math.PI/2,r.position.y=e,r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function G_(i,t,e){const n=[],s=Math.sign(i.reduce((o,[r,a],l)=>{const[c,h]=i[(l+1)%i.length];return o+r*h-c*a},0));for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=a[0]-r[0],c=a[1]-r[1],h=Math.hypot(l,c);if(h<4||Math.abs(e(r)-e(a))<h*.8)continue;const f=Math.floor(h/3.3);for(let u=0;u<f;u++){const d=(u+.5)/f;n.push([r[0]+l*d+s*c/h*.045,t,r[1]+c*d-s*l/h*.045,-Math.atan2(c,l)])}}return n}function fs(i,t,e,n,s){const o=new Ci(new we(n,s,.12),e,t.length),r=new Ae;t.forEach(([a,l,c,h],f)=>{r.position.set(a,l,c),r.rotation.y=h,r.updateMatrix(),o.setMatrixAt(f,r.matrix)}),o.receiveShadow=!0,i.add(o)}function V_(i,t){const e=new _e;e.name="Малая бухта, комплекс на берегу";const n=new ne({color:"#c5b08c"}),s=new ne({color:"#eeeae0"}),o=new ne({color:"#b7b5a9"}),r=new ne({color:"#617964"}),a=new ne({color:"#5f8596"}),l=new ne({color:"#5799b9"}),c=4.4;un(e,t,1.8,c-1.8,n),un(e,t,c,3.05,n),un(e,t,c+3.05,3.15,s),un(e,t,c+6.2,3.4,s),un(e,t,c+9.6,.35,o);const h=t.map((b,y)=>{const w=t[(y+1)%t.length];return{start:b,end:w,length:Math.hypot(w[0]-b[0],w[1]-b[1])}}).reduce((b,y)=>y.length>b.length?y:b),{start:f,end:u,length:d}=h,g=u[0]-f[0],_=u[1]-f[1],p=-Math.atan2(_,g),m=Math.sign(_),v=-Math.abs(_)/d*.04,S=g*m/d*.04;function x(b,y){return Array.from({length:b},(w,M)=>{const E=(M+.5)/b;return[f[0]+g*E+v,y,f[1]+_*E+S,p]})}fs(e,x(18,c+1.5),r,4.35,2.35),fs(e,x(38,c+4.75),a,1.75,1.35),fs(e,x(30,c+7.9),l,2.55,2.45),i.add(e)}function W_(i,t,e){if(t.id===H_)return V_(i,t.rings[0]),!0;if(t.id!==k_)return!1;const n=t.rings[0],s=ae.degToRad(112.9),o=Math.sin(s),r=-Math.cos(s),a=([w,M])=>w*o+M*r,l=n.map(a),c=Math.min(...l),h=w=>a(w)-c,f=Math.max(...l)-c,u=f*.54,d=n.map(w=>e(...w)),g=Math.max(...d),_=Math.min(...d)-.3,p=new _e;p.name="Малая бухта, корпус «Парусник»";const m=new ne({color:"#f5f3e8"}),v=new ne({color:"#deded5"}),S=new ne({color:"#526f7d"}),x=new ne({color:"#9c9e99"});un(p,n,_,g-_,v);const b=[];for(let w=0;w<cl;w++){const M=w*2.45,E=w<9?f-w*3.3:u,A=Kr(Kr(n,M,1,h),E,-1,h),C=g+w*$r,D=A.reduce(([L,U],k)=>[L+k[0]/A.length,U+k[1]/A.length],[0,0]),P=A.map(([L,U])=>[ae.lerp(L,D[0],.04),ae.lerp(U,D[1],.04)]);un(p,A,C,.35,m),un(p,P,C+.35,$r-.35,v),b.push(...G_(P,C+1.8,h)),(w===8||w===cl-1)&&un(p,P,C+$r,.18,x)}const y=Kr(Kr(n,u-3.8,1,h),u+.15,-1,h);return un(p,y,g,cl*$r+1.9,m),fs(p,b,S,1.65,1.15),i.add(p),!0}function X_(i,t,e){if(t.id!=="142489068")return!1;const n=t.rings[0],s=n.map((mt,V)=>{const N=n[(V+1)%n.length];return{start:mt,end:N,length:Math.hypot(N[0]-mt[0],N[1]-mt[1])}}),[o]=s.sort((mt,V)=>V.length-mt.length).slice(0,2).sort((mt,V)=>mt.start[1]+mt.end[1]-(V.start[1]+V.end[1])),[r,a]=[o.start,o.end].sort((mt,V)=>mt[0]-V[0]),l=n.filter(mt=>mt!==r&&mt!==a).sort((mt,V)=>mt[0]-V[0])[0],[c,h]=r,f=Math.hypot(a[0]-c,a[1]-h),u=Math.hypot(l[0]-c,l[1]-h),d=(a[0]-c)/f,g=(a[1]-h)/f,_=(l[0]-c)/u,p=(l[1]-h)/u,m=(mt,V)=>[c+d*mt+_*V,h+g*mt+p*V],v=(mt,V,N,Z)=>[m(mt,N),m(V,N),m(V,Z),m(mt,Z)],S=new _e;S.name="Анапский морской вокзал";const x=new ne({color:"#e5e4dc"}),b=new ne({color:"#b7a18c"}),y=new ne({color:"#a4aaa4"}),w=new ne({color:"#496877"}),M=new ne({color:"#8f4b3a"}),E=n.map(mt=>e(...mt)),A=Math.max(...E),C=Math.min(...E)-.25;un(S,n,C,A+2.9-C,b),un(S,n,A+2.9,3.6,x),un(S,n,A+6.5,.35,y);const D=7.8,P=f-.85,L=P-D,U=u*.34,k=U+D,H=v(L,P,U,k),q=A+15.2;un(S,H,A+6.8,q-A-6.8,x),un(S,H,q,.22,y);const Y=-Math.atan2(g,d),J=-Math.atan2(p,_),it=(mt,V,N,Z)=>Array.from({length:mt},(dt,st)=>{const[ut,Et]=Z((st+.5)/mt);return[ut,V,Et,N]});fs(S,it(11,A+4.75,Y,mt=>m(1.3+mt*(f-2.6),-.04)),w,2.22,2.55),fs(S,it(8,A+1.48,Y,mt=>m(1.5+mt*(f-3),-.04)),w,1.65,1.34);const yt=[];for(const mt of[8.35,10.95,13.55]){const V=A+mt;yt.push(...it(3,V,Y,N=>m(L+N*D,U-.04))),yt.push(...it(3,V,J,N=>m(P+.04,U+N*D)))}fs(S,yt,w,1.37,1.43);const[vt,Wt]=m(P-2.8,U+2.4),gt=new xe(new En(.055,.105,3.2,6),M);return gt.position.set(vt,q+1.82,Wt),S.add(gt),i.add(S),!0}const q_=[[65,151],[133,120],[143,98],[312,94],[327,41],[410,46],[451,73],[504,67],[540,44],[733,53],[724,326],[1170,410],[1591,455],[1591,738],[40,687]],Y_=[{points:[[94,145],[93,228],[89,353]],width:.65,height:.38},{points:[[142,122],[197,119],[277,117],[320,120],[331,188]],width:.65,height:.32},{points:[[197,119],[201,187],[137,192]],width:.73,height:.31},{points:[[273,119],[279,182],[206,187]],width:.7,height:.33},{points:[[287,122],[291,181],[328,178]],width:.66,height:.3},{points:[[334,91],[338,130],[345,187],[405,175],[403,130],[338,136]],width:.68,height:.35},{points:[[447,84],[486,87],[492,170],[445,173]],width:.69,height:.31},{points:[[500,85],[530,86],[534,161],[500,166]],width:.63,height:.27},{points:[[540,62],[535,107],[537,170]],width:.68,height:.38},{points:[[137,228],[204,222],[275,225],[351,227],[360,279],[300,282],[228,289],[140,279],[137,228]],width:.68,height:.27},{points:[[218,229],[214,277],[230,291],[224,354],[137,344]],width:.69,height:.31},{points:[[181,231],[178,277],[187,291],[181,315],[139,313]],width:.56,height:.25},{points:[[191,314],[187,348]],width:.57,height:.24},{points:[[307,229],[310,257],[278,261]],width:.57,height:.23},{points:[[319,231],[319,276],[352,273]],width:.64,height:.29},{points:[[360,285],[367,348],[366,387]],width:.65,height:.4},{points:[[363,278],[426,272],[427,218]],width:.73,height:.32},{points:[[413,209],[500,205],[570,200],[646,197]],width:.68,height:.31},{points:[[429,270],[504,270],[502,206]],width:.72,height:.29},{points:[[506,271],[510,270]],width:.72,height:.35},{points:[[528,268],[567,262],[627,258]],width:.72,height:.35},{points:[[645,256],[647,203]],width:.72,height:.35},{points:[[560,207],[567,261]],width:.61,height:.28},{points:[[678,178],[681,346],[634,347]],width:.62,height:.41},{points:[[468,349],[467,319],[474,305],[489,302],[602,300],[618,307],[623,330]],width:.66,height:.3},{points:[[382,355],[417,353],[414,398],[388,397]],width:.66,height:.37},{points:[[416,401],[526,426],[531,407],[539,369],[569,375]],width:.75,height:.37},{points:[[569,376],[568,425],[539,422]],width:.68,height:.36},{points:[[578,380],[578,423],[616,430],[620,380]],width:.68,height:.37},{points:[[630,379],[629,433],[682,441],[679,378]],width:.72,height:.36},{points:[[98,445],[190,455],[177,553],[91,539]],width:.81,height:.38},{points:[[209,457],[316,474],[305,552],[202,537],[209,457]],width:.85,height:.42},{points:[[245,474],[237,509],[226,539]],width:.75,height:.4},{points:[[386,490],[429,501],[515,513],[566,520],[622,532]],width:.73,height:.29},{points:[[430,503],[430,551],[389,544]],width:.74,height:.36},{points:[[516,515],[515,559],[431,549]],width:.78,height:.33},{points:[[564,524],[557,587],[515,579],[517,557]],width:.76,height:.38},{points:[[622,531],[615,590],[566,583]],width:.76,height:.39},{points:[[653,536],[708,549],[699,609]],width:.74,height:.34},{points:[[769,385],[806,387],[823,390],[866,388],[875,384]],width:.52,height:.48},{points:[[768,384],[768,425],[766,447]],width:.5,height:.52},{points:[[747,444],[769,449],[813,457],[870,467],[913,473],[953,478],[1006,483]],width:.62,height:.6},{points:[[818,395],[817,426],[814,456]],width:.52,height:.51},{points:[[874,379],[874,415]],width:.47,height:.42},{points:[[870,451],[870,466]],width:.46,height:.46},{points:[[918,390],[917,419]],width:.5,height:.49},{points:[[914,437],[912,473]],width:.55,height:.54},{points:[[959,393],[961,413],[957,428]],width:.49,height:.46},{points:[[955,442],[952,478]],width:.55,height:.54},{points:[[961,416],[994,421],[1016,426]],width:.39,height:.36},{points:[[1016,427],[1012,444],[1007,482]],width:.54,height:.56},{points:[[1070,501],[1079,447],[1085,435],[1104,438]],width:.61,height:.61},{points:[[1138,441],[1169,449]],width:.44,height:.41},{points:[[1170,435],[1169,471],[1168,505],[1111,502],[1071,500]],width:.65,height:.62},{points:[[1122,459],[1114,487],[1111,502]],width:.51,height:.48},{points:[[765,620],[770,577],[844,591],[840,619]],width:.53,height:.53},{points:[[900,645],[903,598],[948,608],[996,618],[1024,616]],width:.55,height:.49},{points:[[950,608],[945,653],[901,647]],width:.52,height:.54},{points:[[999,619],[990,664],[983,688]],width:.52,height:.55},{points:[[944,654],[939,690]],width:.49,height:.44},{points:[[1049,621],[1094,620],[1133,627]],width:.44,height:.38},{points:[[1132,628],[1127,665]],width:.44,height:.42},{points:[[1230,470],[1293,471],[1292,517],[1290,550],[1234,551],[1230,470]],width:.7,height:.87},{points:[[1233,519],[1292,518]],width:.66,height:.72},{points:[[1352,482],[1369,478],[1404,479],[1418,480],[1417,492],[1385,493],[1383,509]],width:.57,height:.48},{points:[[1338,691],[1339,668],[1397,669]],width:.59,height:.55},{points:[[1336,722],[1398,721],[1454,722],[1512,724],[1575,726],[1575,652],[1512,653],[1455,654],[1400,652],[1398,721]],width:.72,height:.69},{points:[[1455,654],[1454,722]],width:.67,height:.62},{points:[[1512,653],[1512,724]],width:.65,height:.6}],Z_=[{polygon:[[144,129],[193,124],[198,177],[142,181]],depth:.78},{polygon:[[205,126],[269,124],[274,169],[210,177]],depth:.74},{polygon:[[287,128],[317,127],[322,171],[290,176]],depth:.7},{polygon:[[346,136],[398,131],[402,169],[347,177]],depth:.83},{polygon:[[452,90],[483,89],[487,158],[450,166]],depth:.78},{polygon:[[502,97],[526,99],[527,153],[500,159]],depth:.64},{polygon:[[146,235],[214,231],[211,274],[143,269]],depth:.88},{polygon:[[279,234],[304,234],[308,253],[278,257]],depth:.57},{polygon:[[319,237],[345,234],[348,269],[320,269]],depth:.75},{polygon:[[145,287],[183,288],[180,311],[141,310]],depth:.62},{polygon:[[142,319],[181,319],[181,342],[137,340]],depth:.58},{polygon:[[190,292],[227,298],[222,350],[189,345]],depth:.77},{polygon:[[505,209],[558,205],[566,260],[526,265],[528,298],[514,298],[512,267]],depth:1.05},{polygon:[[566,205],[641,199],[644,252],[642,252],[642,283],[630,283],[629,254],[571,260]],depth:1.15},{polygon:[[389,358],[414,354],[411,396],[388,393]],depth:.64},{polygon:[[541,370],[567,377],[565,423],[535,420]],depth:.8},{polygon:[[580,378],[617,379],[613,425],[579,422]],depth:.82},{polygon:[[633,378],[676,379],[680,435],[630,426]],depth:1},{polygon:[[98,450],[183,462],[173,541],[92,533]],depth:.92},{polygon:[[213,463],[244,468],[227,535],[207,535]],depth:.9},{polygon:[[248,473],[311,478],[304,549],[236,539]],depth:.91},{polygon:[[388,494],[427,502],[427,541],[389,537]],depth:.74},{polygon:[[434,506],[514,516],[510,552],[433,545]],depth:.87},{polygon:[[521,518],[562,526],[556,576],[516,572]],depth:.94},{polygon:[[566,527],[619,535],[612,581],[561,575]],depth:.99},{polygon:[[656,541],[704,553],[693,603],[646,592]],depth:.83},{polygon:[[773,582],[839,595],[836,620],[771,612]],depth:.84},{polygon:[[906,602],[946,611],[943,645],[903,637]],depth:.64},{polygon:[[952,612],[994,621],[986,665],[951,654]],depth:.58},{polygon:[[1235,475],[1288,476],[1288,515],[1237,516]],depth:.72},{polygon:[[1238,524],[1287,523],[1286,546],[1239,547]],depth:.64},{polygon:[[1404,657],[1450,658],[1449,718],[1403,717]],depth:.54},{polygon:[[1459,658],[1507,657],[1507,719],[1459,717]],depth:.59},{polygon:[[1517,658],[1570,657],[1570,721],[1517,719]],depth:.55}],$_=[{point:[256,273],radius:.7,depth:.51},{point:[412,299],radius:.53,depth:.46},{point:[496,316],radius:.58,depth:.48},{point:[456,365],radius:.73,depth:.58},{point:[516,422],radius:.67,depth:.46},{point:[644,329],radius:.7,depth:.55},{point:[592,393],radius:.56,depth:.37},{point:[553,441],radius:.63,depth:.44},{point:[377,498],radius:.56,depth:.44},{point:[755,405],radius:.74,depth:.75},{point:[962,706],radius:.7,depth:.75},{point:[1260,494],radius:.5,depth:.65}],K_=[{name:"Широкая улица",polygon:[[96,365],[162,362],[217,365],[309,385],[362,398],[414,412],[418,485],[386,486],[308,470],[209,456],[94,443]]},{name:"Широкая улица",polygon:[[1194,609],[1258,608],[1344,612],[1438,614],[1516,615],[1574,612],[1573,647],[1510,651],[1437,652],[1350,651],[1258,648],[1200,647]]},{name:"Северная улица",polygon:[[119,193],[207,191],[287,188],[344,184],[433,176],[527,171],[671,174],[671,194],[524,201],[428,211],[347,219],[273,224],[197,227],[118,228]]},{name:"Поперечная улица",polygon:[[99,159],[125,164],[123,215],[124,280],[121,335],[128,366],[111,388],[93,367],[97,311],[96,250]]}],J_=[{from:[521,298],to:[519,264],width:1.15,steps:7},{from:[636,283],to:[635,252],width:1,steps:7}],bi={outline:q_,walls:Y_,cellars:Z_,wells:$_,streets:K_,stairs:J_},Yh="652417590";function Ln([i,t]){return[.0863102257*i-214318e-9*t-361.5408919,214318e-9*i+.0863102257*t+21.5871871]}const cs=bi.outline.map(Ln);function Vs([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function Wf(i,t,e){const n=i(-310,65)-1.41-.006*(t+355)+.008*(e-60);return Math.min(n,i(t,e)-.43)}const Vi=["#b7a58b","#c1b199","#ad9e88","#a9977e","#c8baa0","#a4947b"],Zh=["#c9b998","#b9aa8e","#c2b497","#b2a389","#d0bfa4"],Q_=new Yt("#a09472"),j_=new Yt("#97976b"),tx=new Yt("#94846b"),ex=new Yt("#62584a"),nx=new Yt("#a99a7e");function Gn(i){const t=Math.sin(i*127.1+3.83)*43758.5453;return t-Math.floor(t)}function Al(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=(i[1]-t[1])*e/(2*n),o=(t[0]-i[0])*e/(2*n);return[[i[0]+s,i[1]+o],[t[0]+s,t[1]+o],[t[0]-s,t[1]-o],[i[0]-s,i[1]-o]]}const gn=([i,t],e)=>[i,e(i,t),t];function Xf(i,t,e,n,s,o){i.face(o,gn(t,n),gn(e,n),gn(e,s),gn(t,s))}function Lo(i,t,e,n,s,o=.65){for(let r=0;r<t.length;r++){const a=t[r],l=t[(r+1)%t.length],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/o);for(let h=0;h<c;h++){const f=_t(a,l,h/c),u=_t(a,l,(h+1)/c);Xf(i,f,u,e,n,s(h+r*97))}}}function ix(i,t,e,n,s,o,r,a){const l=Math.hypot(e[0]-t[0],e[1]-t[1]);if(l<.12)return;const c=(d,g)=>o(d,g)-r-.03,h=(d,g)=>o(d,g)+s,f=Al(t,e,n*.93);Lo(i,f,c,h,()=>"#897862",1.2),i.face("#8c7b66",...f.map(d=>gn(d,(g,_)=>h(g,_)-.028)));const u=Math.max(1,Math.round((s+r)/.31));for(let d=0;d<u;d++){const g=.66+Gn(a+d)*.24;for(let _=-(d%2)*g*.52,p=0;_<l;_+=g,p++){const m=(Math.max(0,_)+.018)/l,v=(Math.min(_+g,l)-.018)/l;if(v<=m)continue;const S=a*101+d*31+p*7,x=Al(_t(t,e,m),_t(t,e,v),n*(.965+Gn(S)*.09)),b=x.map(A=>_t(A,_t(x[0],x[2],.5),.06)),y=(s+r)/u,w=(A,C)=>o(A,C)-r+y*d+.012,M=(A,C)=>o(A,C)-r+y*(d+1)-.014+Gn(S+1)*.09,E=Vi[Math.floor(Gn(S+2)*Vi.length)];for(let A=0;A<4;A++){const C=(A+1)%4;i.face(E,gn(x[A],w),gn(x[C],w),gn(b[C],M),gn(b[A],M))}i.face(E,...b.map(A=>gn(A,M)))}}}function sx(i,t,e,n,s){const o=t.map(([m])=>m),r=t.map(([,m])=>m),a=.61,l=.065,c=(m,v)=>[m*Math.cos(l)-v*Math.sin(l),m*Math.sin(l)+v*Math.cos(l)],[h,f]=t[0],u=(m,v)=>c(m,v).map((S,x)=>S+(x===0?h:f)),d=Math.floor((Math.min(...o)-h-3)/a),g=Math.ceil((Math.max(...o)-h+3)/a),_=Math.floor((Math.min(...r)-f-10)/a),p=Math.ceil((Math.max(...r)-f+10)/a);for(let m=_;m<p;m++)for(let v=d;v<g;v++){const S=n*4241+m*397+v;if(Gn(S+9)>s)continue;const x=(v+m%2*.5)*a,b=m*a,y=[u(x+.03+Gn(S)*.07,b+.033),u(x+.57,b+.027+Gn(S+2)*.07),u(x+.572-Gn(S+3)*.08,b+.574),u(x+.03,b+.572-Gn(S+4)*.07)];if(!y.every(M=>Vs(M,t)))continue;const w=(M,E)=>e(M,E)+.042+Gn(S+6)*.028;i.face(Zh[Math.floor(Gn(S+7)*Zh.length)],...y.map(M=>gn(M,w)))}}function ox(i,t,e){const n=pe(i,"Раскоп Горгиппии · кладка и древние улицы",{surface:"stone"}),s=(c,h)=>Wf(t,c,h),o=bi.cellars.map(({polygon:c,depth:h})=>({ring:c.map(Ln),depth:h,holes:[]})),r=bi.wells.map(({point:c,radius:h,depth:f})=>{const[u,d]=Ln(c),g=Array.from({length:12},(v,S)=>{const x=S*Math.PI/6;return[u+Math.cos(x)*h,d+Math.sin(x)*h]}),_=o.find(v=>g.every(S=>Vs(S,v.ring))),p=(v,S)=>s(v,S)-(_?.depth??0),m=_||g.every(v=>Vs(v,cs))&&!o.some(v=>g.some(S=>Vs(S,v.ring))||v.ring.some(S=>Vs(S,g)));return _&&_.holes.push(g),{ring:g,rim:p,depth:f,cut:m,cellar:_,center:[u,d]}}),a=[...o.map(c=>c.ring),...r.filter(c=>c.cut&&!c.cellar).map(c=>c.ring)],l=new Yt;e([cs,...a],s,(c,h,f)=>l.copy(Q_).lerp(j_,ae.clamp(.51+.32*Math.sin(c*.15+f*.19)+.19*Math.sin(c*.43-f*.24),0,1))),Lo(n,cs,s,(c,h)=>t(c,h)+.012,()=>"#a18f75");for(const{ring:c,depth:h,holes:f}of o){const u=(d,g)=>s(d,g)-h;e([c,...f],u,tx),Lo(n,c,u,s,()=>"#89785f")}for(const{ring:c,rim:h,depth:f,cut:u,center:d}of r){const g=(p,m)=>h(p,m)-(u?f:-.028);u?e([c],g,ex):n.face("#5f5342",...c.map(p=>gn(p,g))),Lo(n,c,g,(p,m)=>h(p,m)+.18,()=>"#80715e",2);const _=c.map(p=>_t(d,p,1.35));for(let p=0;p<c.length;p++){const m=(p+1)%c.length,v=(S,x)=>h(S,x)+.16+p%3*.021;Xf(n,_[p],_[m],h,v,Vi[p%Vi.length]),n.face(Vi[p%Vi.length],...[c[p],_[p],_[m],c[m]].map(S=>gn(S,v)))}}for(const[c,{polygon:h,density:f}]of bi.streets.entries()){const u=h.map(Ln);e([u],(d,g)=>s(d,g)+.025,nx),sx(n,u,s,c,f??.88)}for(const[c,{points:h,width:f,height:u}]of bi.walls.entries()){const d=h.map(Ln);for(let g=1;g<d.length;g++){const _=d[g-1],p=d[g],m=_t(_,p,.5),v=o.reduce((S,{ring:x,depth:b})=>Math.max(S,x.some((y,w)=>{const M=x[(w+1)%x.length],E=M[0]-y[0],A=M[1]-y[1],C=ae.clamp(((m[0]-y[0])*E+(m[1]-y[1])*A)/(E*E+A*A),0,1);return Math.hypot(m[0]-y[0]-C*E,m[1]-y[1]-C*A)<f*.63})?b:0),0);ix(n,_,p,f,u,s,v,c*41+g)}}for(const{from:c,to:h,width:f,steps:u}of bi.stairs){const d=Ln(c),g=Ln(h),_=o.find(p=>Vs(g,p.ring))?.depth??.85;for(let p=0;p<u;p++){const m=Al(_t(d,g,p/u),_t(d,g,(p+1)/u),f),v=(x,b)=>s(x,b)-_,S=(x,b)=>v(x,b)+_*(1-p/u);n.face(Vi[p%Vi.length],...m.map(x=>gn(x,S))),Lo(n,m,v,S,()=>"#9a8a71",2)}}n.finish()}const Wi=i=>i.map(Ln),rx=[[126,399],[220,407],[350,432],[460,455],[536,471],[610,478],[712,485],[779,478],[865,499],[955,516],[1060,538],[1168,556]],$h=[[748,295],[742,323],[729,352],[716,405],[712,462],[710,481]],Kh=[0,0,.16,.67,1,1],ax={position:Ln([707,480]),look:Ln([405,447]),pitch:-.19},Zi=[[-384.79,10.65],[-282.12,15.99],[-217.83,18.81],[-218.47,61.07],[-219.18,90.59],[-393.18,81.88],[-384.79,10.65]],ls=Math.atan2(2.82,64.29);function qf(i){const[t,e]=Zi[1];return i(t+1.44*Math.sin(ls),e-1.44*Math.cos(ls))}function Ja([i,t]){return i===-282.12&&t===15.99?2.62:i===-218.47&&t===61.07?1.45:0}const cx=[{name:"Дорожка у лапидария",points:[[-332,24],[-322,25],[-312,26],[-303,27.3],[-295,28.1]],widths:[2.45,2.7,2.7,2.6,2.6],surface:"paving",railSide:1},{name:"Подход от входной арки",points:[[-282.12,14],[-282.12,18],[-283.15,21.1],[-288.4,25.8],[-295,28.1]],widths:[2.5,2.5,2.7,2.6,2.6],surface:"paving"},{name:"Дорожка от площадки музея",points:[[-295,28.1],[-294.5,33.9],[-295.2,40.9],Ln($h[0])],widths:[2.6,2.8,2.9,2.6],surface:"paving"},{name:"Дорожка вдоль южного борта",points:[...Wi([[65,710],[475,724],[1030,743],[1560,759]]),[-221.6,87.8],[-221.1,63.1]],widths:[1.5,1.65,1.75,1.7,1.65,1.6],surface:"paving",railSide:-1},{name:"Подход к восточной калитке",points:[[-221.1,63.1],[-220.9,61.07],[-216.4,61.07]],widths:[1.6,1.6,1.55],surface:"paving"},{name:"Спуск к раскопу",points:Wi($h),widths:[2.6,2.5,1.35,1.25,1.25,1.7],surface:"ramp",rails:[2,3]},{name:"Проход между подвалами",points:Wi(rx),widths:[3.8,4,4.1,3.9,3.8,3.4,3.5,4.1,4.3,4.2,4.2,3.5],surface:"earth"},{name:"Выход с западных лестниц",points:Wi([[129,368],[128,386],[126,399]]),widths:[1.5,1.8,2],surface:"earth"},...[368,401].flatMap(i=>[{name:"Западная площадка",points:Wi([[43,i],[90,i]]),widths:[1.5,1.43],surface:"landing"},{name:"Западная лестница",points:Wi([[90,i],[129,i]]),widths:[1.43,1.43],surface:"steps"}])],{clamp:lx,lerp:Jr}=ae,hx=new Yt("#c7bda5"),Jh=new Yt("#c1b9a6"),ux=new Yt("#a59b76"),Qr="#aa987f",ll="#52534c",Eo=9;function ur(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=Math.hypot(e,n);return{a:i,b:t,dx:e,dz:n,length:s,nx:-n/s,nz:e/s}}function Qh(i,t){return i.points.map(([e,n],s)=>{const o=i.edges[Math.max(0,s-1)],r=i.edges[Math.min(i.edges.length-1,s)],a=Math.hypot(o.nx+r.nx,o.nz+r.nz),l=(o.nx+r.nx)/a,c=(o.nz+r.nz)/a,h=t*i.widths[s]/(2*Math.max(.66,l*r.nx+c*r.nz));return[e+l*h,n+c*h]})}function jh(i,t,e){return i.rails?.includes(t)||i.railSide===e}function Do(i,t,{a:e,dx:n,dz:s,length:o}){const r=((i-e[0])*n+(t-e[1])*s)/(o*o),a=lx(r,0,1);return{raw:r,t:a,distance:Math.hypot(i-e[0]-n*a,t-e[1]-s*a)}}function fx(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}const dx=Zi.slice(1).map((i,t)=>{const e=Zi[t],{length:n}=ur(e,i);return ur(_t(e,i,Ja(e)/n),_t(e,i,1-Ja(i)/n))}),px=bi.cellars.map(({polygon:i})=>Wi(i)),mx=bi.walls.flatMap(({points:i,width:t})=>{const e=Wi(i);return e.slice(1).map((n,s)=>({...ur(e[s],n),width:t}))}),gx=bi.wells.map(({point:i,radius:t})=>({point:Ln(i),radius:t}));function _x(i,t){return gx.some(({point:[e,n],radius:s})=>Math.hypot(i-e,t-n)<s*1.35+.18)||mx.some(e=>Do(i,t,e).distance<e.width/2+.18)||px.some(e=>fx(i,t,e))}function xx(i,t,e){const[n,s]=Zi[1],o=(t-n)*Math.cos(ls)+(e-s)*Math.sin(ls),r=(e-s)*Math.cos(ls)-(t-n)*Math.sin(ls);if(Math.abs(o)>2.22||r<-1.44||r>.46)return;const a=r<-1.02?.135:r<-.6?.27:.405;return qf(i)+a}function vx(i){const t=(f,u)=>Wf(i,f,u),e=cx.map(f=>({...f,edges:f.points.slice(1).map((u,d)=>ur(f.points[d],u))})).map(f=>({...f,left:Qh(f,-1),right:Qh(f,1)})),n=e.filter(f=>f.surface==="earth"),s=e.filter(f=>f.surface==="paving"),o=e.filter(f=>["steps","landing","ramp"].includes(f.surface)),r=e.flatMap(f=>[[-1,f.left],[1,f.right]].flatMap(([u,d])=>d.slice(1).flatMap((g,_)=>jh(f,_,u)?[ur(d[_],g)]:[])));function a(f,u,d,g,_){if(f==="earth")return t(g,_)+.055;if(f==="paving"||f==="landing")return i(g,_)+.054;const p=t(g,_)+.061,m=i(g,_)+.054;return f==="steps"?Jr(m,p,Math.min(1,Math.floor(d*Eo)/(Eo-1))):Jr(m,p,Jr(Kh[u],Kh[u+1],d))}function l(f,u,d,g=0){let _;return f.edges.forEach((p,m)=>{const{raw:v,t:S,distance:x}=Do(u,d,p);(f.surface==="steps"||f.surface==="landing")&&(v<-1e-5||v>1.00001)||x>Jr(f.widths[m],f.widths[m+1],S)/2-g||x>=(_?.distance??1/0)||(_={distance:x,height:a(f.surface,m,S,u,d)})}),_?.height}function c(f,u,d){if(f<-397||f>-211||u<9||u>92)return;if(dx.some(p=>Do(f,u,p).distance<.24)||r.some(p=>Do(f,u,p).distance<.15))return null;for(const p of o){const m=l(p,f,u,.12);if(m!==void 0)return m}if(d)return n.some(m=>l(m,f,u,.16)!==void 0)&&!_x(f,u)?t(f,u)+.055:null;const g=xx(i,f,u);return g!==void 0?g:s.some(p=>l(p,f,u)!==void 0)?i(f,u)+.054:void 0}function h(f,u){const d=pe(f,"Горгиппия · дорожки и ограждения для посетителей");for(const g of e){const{left:_,right:p}=g;for(const[m,v]of g.edges.entries()){if(g.surface==="earth"&&m<3)continue;const S=[_[m],_[m+1],p[m+1],p[m]],x=(b,y)=>a(g.surface,m,Do(b,y,v).t,b,y);if(g.surface==="steps"){const b=(y,w)=>_t(y[m],y[m+1],w);for(let y=0;y<Eo;y++){const w=y/Eo,M=(y+1)/Eo,E=b(_,w),A=b(p,w),C=b(_,M),D=b(p,M),P=(H,q)=>a("steps",m,(w+M)/2,H,q),L=(H,q)=>a("steps",m,Math.max(0,w-.001),H,q);u([[E,C,D,A]],P,Jh);const U=([H,q],Y)=>[H,Y(H,q),q];y&&d.face(Qr,U(E,L),U(A,L),U(A,P),U(E,P));const k=(H,q)=>t(H,q)-.02;d.face(Qr,U(E,P),U(C,P),U(C,k),U(E,k)),d.face(Qr,U(A,P),U(D,P),U(D,k),U(A,k))}}else g.surface==="earth"?u([S],(b,y)=>t(b,y)+.012,ux):u([S],x,g.surface==="ramp"?Jh:hx);for(const[b,y]of[[-1,_],[1,p]]){const w=y[m],M=y[m+1],E=Math.hypot(M[0]-w[0],M[1]-w[1]),A=g.surface==="ramp"||g.surface==="landing",C=jh(g,m,b);if(!C&&!A)continue;const D=Math.max(1,Math.ceil(E/(A?.62:1.75))),P=(L,U)=>{const[k,H]=_t(w,M,L);return[k,x(k,H)+U,H]};for(let L=0;L<D;L++){const U=L/D,k=(L+1)/D;if(A){const H=([q,Y,J])=>[q,Math.min(Y-.07,t(q,J)-.025),J];d.face(Qr,P(U,0),P(k,0),H(P(k,0)),H(P(U,0)))}if(C){for(const H of[.38,.83])d.beam(P(U,H),P(k,H),.027,ll);(!A||L%3===0)&&d.beam(P(U,0),P(U,.85),.047,ll),L===D-1&&d.beam(P(k,0),P(k,.85),.047,ll)}}}}}d.finish()}return{walkHeight:c,render:h}}const Qa="#dfd7c1",Je="#f0eee6",Mx="#526e7c",Bs="#343d3d";function la([i,t],e){const n=e/2;return[[i-n,t-n],[i+n,t-n],[i+n,t+n],[i-n,t+n]]}function Sx([i,t],[e,n]){const s=Math.hypot(e-i,n-t),o=(e-i)/s,r=(n-t)/s;return(a,l)=>[i+o*a+r*l,t+r*a-o*l]}function bx(i,t,e){const n=Sx(t[0],t[1]),o=(e.lowerWaterfront??e)(...n(9,27))+.65,r=Math.min(...t.map(gt=>e(...gt)))-.2,a=Re(t),l="#7295bf",c="#415f88",h="#636b71",f="#b8bdba",u=pe(i,"Пароходъ",{surfaces:{metal:[l,f,c],paving:[h],stone:[Qa],glass:["#40484a","#4b5256"]}});u.shell(t,Math.min(r,o-.2),o+.25,Qa);const d=t.map(gt=>_t(a,gt,.83));u.shell(d,o+.25,o+2.85,"#40484a",null),u.shell(t,o+2.85,o+3.08,Je,h);for(let gt=2;gt<=13;gt++){const mt=t[gt],V=t[gt+1];xn(u,d[gt],d[gt+1],a,o+.52,o+2.76,2.15,"#d9dbd6");const N=Math.max(1,Math.round(Math.hypot(mt[0]-V[0],mt[1]-V[1])/2.5));for(let Z=0;Z<N;Z++){const dt=_t(a,_t(mt,V,Z/N),.97);u.shell(la(dt,.28),o+.25,o+2.85,Je,null)}}const g=[n(28.3,24),n(31,16.2)],_=e(...g[0])+.025,p=o+3.08,m=[n(27.2,15.4),n(31.95,15.4),n(31.95,17),n(27.2,17)];u.shell(m,p-.14,p,f,h);const v=[.89,.31],S=(gt,mt)=>{const V=_t([28.3,24],[31,16.2],gt);return n(V[0]+v[0]*mt,V[1]+v[1]*mt)},x=19;for(let gt=0;gt<x;gt++){const mt=gt/x,V=(gt+1)/x,N=ae.lerp(_,p,V);u.shell([S(mt,-1),S(V,-1),S(V,1),S(mt,1)],N-.09,N,f,h)}for(const gt of[-1,1]){const mt=(V,N)=>{const[Z,dt]=S(V,gt);return[Z,ae.lerp(_,p,V)+N,dt]};u.beam(mt(0,.98),mt(1,.98),.07,Je),u.beam(mt(0,.51),mt(1,.51),.045,f);for(const V of[.03,.22,.42,.62,.82,1])u.beam(mt(V,.1),mt(V,.98),.055,Je)}const b=[[-16,7.5,15],[-10,4,17],[-2,2.1,17.7],[24,1.7,18.1],[30,1.7,13.2],[34,5.8,9]],y=b.map(([gt,,mt])=>n(gt,mt)),M=b.map(([gt,mt])=>n(gt,mt)).concat(y.slice().reverse());u.shell(M,o+3.08,o+6.5,Je,null);const E=Re(M);for(let gt=1;gt<y.length;gt++)xn(u,y[gt-1],y[gt],E,o+3.4,o+6.24,1.85);const A=o+6.52,C=o+7.72;function D([gt,mt,V]){return[[...n(gt,mt),A],[...n(gt,mt+(V-mt)*.46),C],[...n(gt,V),A]].map(([N,Z,dt])=>[N,dt,Z])}let P=0;for(let gt=1;gt<b.length;gt++){const mt=D(b[gt-1]),V=D(b[gt]),N=Math.max(1,Math.round((b[gt][0]-b[gt-1][0])/2));for(let Z=0;Z<N;Z++){const dt=mt.map((Et,F)=>_t(Et,V[F],Z/N)),st=mt.map((Et,F)=>_t(Et,V[F],(Z+1)/N)),ut=P++%2===0?l:Je;u.face(ut,dt[0],st[0],st[1],dt[1]),u.face(ut,dt[1],st[1],st[2],dt[2])}}u.face(Je,...D(b[0])),u.face(Je,...D(b.at(-1)));const L=n(13,14.8),U=t.slice(4,10).map(gt=>_t(L,gt,.95)),k=[L,...U];u.shell(k,o+3.08,o+3.42,Je),u.shell(k,o+3.42,o+4.92,"#4b5256",null),P=0,U.slice(1).forEach((gt,mt)=>{const V=U[mt];xn(u,V,gt,L,o+3.57,o+4.83,1.65,f);const N=_t(L,V,1.011),Z=_t(L,gt,1.011);u.wall(N,Z,o+3.65,o+4.12,"#79444e");for(const st of[3.48,3.71,4.24])u.beam([N[0],o+st,N[1]],[Z[0],o+st,Z[1]],.052,Je);const dt=Math.max(2,Math.round(Math.hypot(gt[0]-V[0],gt[1]-V[1])/1.25));for(let st=0;st<dt;st++){const ut=_t(V,gt,st/dt),Et=_t(V,gt,(st+1)/dt);u.face(P++%2===0?l:Je,[ut[0],o+4.96,ut[1]],[Et[0],o+4.96,Et[1]],[L[0],o+5.85,L[1]])}});const H=t.slice(9,17).map(gt=>_t(n(-9.5,24),gt,.94)),q=Re(H);u.shell(H,o+3.08,o+6.75,Je,h);const Y=H.map(gt=>_t(q,gt,1.024));u.shell(Y,o+4.38,o+5.1,c,null),u.shell(H.map(gt=>_t(q,gt,1.026)),o+6.75,o+6.94,c,h),H.slice(1).forEach((gt,mt)=>{xn(u,H[mt],gt,q,o+3.45,o+4.38,1.4),xn(u,H[mt],gt,q,o+5.16,o+6.1,1.55)});const[J,it]=Y.slice(1,3),yt=Math.hypot(it[0]-J[0],it[1]-J[1]),vt=[(J[1]-it[1])/yt,(it[0]-J[0])/yt],Wt=_t(J,it,.48);Yn(i,{text:"ПАРОХОДЪ",position:[Wt[0]+vt[0]*.055,o+4.75,Wt[1]+vt[1]*.055],size:[6.6,.69],outward:vt,color:Je,background:c}),u.finish()}function yx(i,t,e){const n=Math.min(...t.map(g=>e(...g)))+.06,s=n-.36,o=Re(t),r="#99655f",a="#d6c9b8",l="#b8b6aa",c=pe(i,"Парк-отель Анапа",{surfaces:{flatRoof:[l],stone:[a]}}),h=n+2.85,f=2.91;c.shell(t,s,h,a,null);for(let g=0;g<t.length;g++){const _=t[g],p=t[(g+1)%t.length],[m,v]=_t(_,p,.5);v<o[1]-2&&e(m,v)<n+.8&&xn(c,_,p,o,n+.46,h-.35,2.1,a)}for(let g=0;g<4;g++){const _=h+g*f;c.shell(t,_,_+f,Qa,null);for(let p=0;p<t.length;p++){const m=t[p],v=t[(p+1)%t.length],[S,x]=_t(m,v,.5);if(Math.hypot(v[0]-m[0],v[1]-m[1])<1.2)continue;const b=S<o[0]-6||g===3?r:a;c.wall(_t(o,m,1.003),_t(o,v,1.003),_+.05,_+.86,b),(x<o[1]+14||p%2===0)&&xn(c,m,v,o,_+.9,_+2.64,1.43,b===r?"#d8bfb0":"#eee8db")}}const u=h+4*f;c.shell(t,u,u+.48,r,l);const d=t.filter(([g,_])=>g<o[0]-11&&_>o[1]-1);if(d.length>=4){const g=d.map(_=>_t(Re(d),_,.68));c.shell(g,u+.48,u+1.68,r,l)}c.finish()}function wx(i,t,e){const n=t.rings[0],s=t.id==="223949001",o=Re(n),r=s?e(...o):e(-263.52,25.47),a=Math.min(...n.map(S=>e(...S)))-.25,l="#e5dfcd",c=s?"#94877d":"#ad5d51",h=pe(i,"Музей Горгиппия",{surfaces:{roof:[c],glass:["#556161"],stone:["#a69a82"]}}),f=r+4.25,u=t.id==="142489024"||s?[n[0],n[1],n[3],n[4]]:n.slice(0,4);Math.hypot(u[1][0]-u[0][0],u[1][1]-u[0][1])>Math.hypot(u[2][0]-u[1][0],u[2][1]-u[1][1])&&u.push(u.shift()),h.shell(n,Math.min(a,r),r+.5,"#a69a82",null),h.shell(n,r+.5,f,l,null);const d=_t(u[0],u[1],.5),g=_t(u[2],u[3],.5),_=[_t(d,g,.23),_t(d,g,.77)].map(([S,x])=>[S,f+(s?1.65:2.25),x]),p=u.map(([S,x])=>[S,f,x]);h.face(c,p[0],p[1],_[0]),h.face(c,p[1],p[2],_[1],_[0]),h.face(c,p[2],p[3],_[1]),h.face(c,p[3],p[0],_[0],_[1]);const m=s?[n[0],n[1]]:[n[4],n[0]],v=s?6:4;for(let S=0;S<v;S++){const x=_t(o,_t(m[0],m[1],(S+.32)/v),1.005),b=_t(o,_t(m[0],m[1],(S+.66)/v),1.005);h.wall(x,b,r+1.25,r+3.03,"#556161")}if(t.id==="142489024")for(const S of[.19,.81]){const x=n[0],b=n[1],y=Array.from({length:16},(w,M)=>{const E=M*Math.PI/8,[A,C]=_t(o,_t(x,b,S+.035*Math.cos(E)),1.006);return[A,r+2.5+.46*Math.sin(E),C]});h.face(Mx,...y)}h.finish()}function Ex(i,t,e){if(t.id==="170958806")bx(i,t.rings[0],e);else if(t.id==="1546378584")yx(i,t.rings[0],e);else if(["142489024","218983841","223949001"].includes(t.id))wx(i,t,e);else return!1;return!0}function Tx(i,t){const e=pe(i,"Вход в Горгиппию"),[n,s]=Zi[1],o=t(n,s),r=ls,a=(h,f,u=0)=>[n+Math.cos(r)*h-Math.sin(r)*u,o+f,s+Math.sin(r)*h+Math.cos(r)*u];for(let h=1;h<Zi.length;h++){const f=Zi[h-1],u=Zi[h],d=Math.hypot(u[0]-f[0],u[1]-f[1]),g=_t(f,u,Ja(f)/d),_=_t(f,u,1-Ja(u)/d),p=Math.hypot(_[0]-g[0],_[1]-g[1]),m=Math.ceil(p/2.6),v=(S,x)=>{const[b,y]=_t(g,_,S);return[b,t(b,y)+x,y]};for(let S=0;S<m;S++){const x=S/m,b=(S+1)/m;for(const[y,w,M]of[[.14,.23,"#b1a992"],[.37,.037,Bs],[1.21,.043,Bs]])e.beam(v(x,y),v(b,y),w,M);e.beam(v(x,.22),v(x,1.31),.068,Bs);for(let y=1;y<=5;y++){const w=x+(b-x)*y/6;e.beam(v(w,.36),v(w,1.25),.024,Bs)}}}for(const h of[-2.55,2.55]){const[f,,u]=a(h,0);e.shell(la([f,u],.63),o-.45,o+2.56,Je),e.shell(la([f,u],.83),o+2.56,o+2.72,Qa),e.shell(la([f,u],.88),o+2.72,o+3.48,Je);const d=Array.from({length:20},(g,_)=>{const p=_*Math.PI/10;return a(h+Math.cos(p)*.31,3.1+Math.sin(p)*.31,-.445)});e.face("#98694b",...d)}for(const h of[0,.27,.55]){const f=Array.from({length:11},(u,d)=>{const g=d/5-1;return a(g*2.17,2.8+h+(1-g*g)*.68)});f.slice(1).forEach((u,d)=>e.beam(f[d],u,.045,Je))}const l={Г:[[[0,0],[0,1],[1,1]]],О:[[[.22,0],[.78,0],[1,.18],[1,.82],[.78,1],[.22,1],[0,.82],[0,.18],[.22,0]]],Р:[[[0,0],[0,1],[.78,1],[1,.82],[1,.65],[.78,.49],[0,.49]]],И:[[[0,1],[0,0],[1,1],[1,0]]],П:[[[0,0],[0,1],[1,1],[1,0]]],Я:[[[1,0],[1,1],[.22,1],[0,.82],[0,.65],[.22,.49],[1,.49]],[[0,0],[.44,.49]]]};Array.from("ГОРГИППИЯ").forEach((h,f)=>{const u=(f-4)*.425,d=3.02+(1-(u/2.17)**2)*.68;for(const g of l[h]){const _=g.map(([p,m])=>a(-u-(p-.5)*.32,d+m*.43,-.045));_.slice(1).forEach((p,m)=>e.beam(_[m],p,.043,"#9e5345"))}});const c=qf(t);for(let h=0;h<3;h++){const f=-1.44+h*.42,u=[[-2.22,f],[2.22,f],[2.22,.46],[-2.22,.46]].map(([g,_])=>{const[p,,m]=a(g,0,_);return[p,m]}),d=h===0?c-.2:c+h*.135;e.shell(u,d,c+(h+1)*.135,"#c8b697")}for(const h of[-1,1]){for(let f=0;f<=6;f++){const u=h*(1.15+f*.16);e.beam(a(u,.26),a(u,1.78),.032,Bs)}for(const f of[.32,1.7])e.beam(a(h*1.15,f),a(h*2.2,f),.046,Bs)}e.finish()}function Ax(i,t){Tx(i,t)}const Io="#eeeee7",Jo="#f3f1e7",ha="#294d6a",Yf="#496b83",Zf={glass:[Yf,"#7694a3"],metal:[ha,"#4d7494"],flatRoof:["#c2c7c2","#c7c8bf","#c6c8c4"],stone:["#c7bcab"]};function Qo(i){return i.map(([t,e],n)=>{const[s,o]=i[(n+1)%i.length],r=Math.hypot(s-t,o-e);return{x:t,z:e,length:r,ux:(s-t)/r,uz:(o-e)/r}})}function en(i,t,e=0){return[i.x+i.ux*t-i.uz*e,i.z+i.uz*t+i.ux*e]}function tu(i,t){return i.map((e,n)=>{const s=(n+i.length-1)%i.length,o=i[s],r=en(o,0,t[s]),a=en(e,0,t[n]),l=o.ux*e.uz-o.uz*e.ux,c=((a[0]-r[0])*e.uz-(a[1]-r[1])*e.ux)/l;return[r[0]+o.ux*c,r[1]+o.uz*c]})}function Rl(i,t,e,n,s){return[en(i,t,n),en(i,e,n),en(i,e,s),en(i,t,s)]}function fr(i,t,e,n,s,o,r=Yf,a=.025){i.wall(en(t,e,-a),en(t,n,-a),s,o,r)}function Rx(i,t,e,n){const s=n?Math.max(1,Math.round(t.length/4.15)):1,o=Math.min(n?2.38:.93,t.length/s*.69);for(let r=0;r<s;r++){const a=t.length*(r+.5)/s,l=e+(n?.37:1.02),c=e+2.37;fr(i,t,a-o/2,a+o/2,l,c),n&&fr(i,t,a-.038,a+.038,l,c,"#7694a3",.04)}}function Cx(i,t,e){const[n,s]=en(t,0,.055),[o,r]=en(t,t.length,.055);i.beam([n,e+.26,s],[o,e+.26,r],.065,ha),i.beam([n,e+1.08,s],[o,e+1.08,r],.075,ha);const a=Math.ceil(t.length/.215);for(let l=0;l<a;l++){const c=t.length*(l+.5)/a;i.wall(en(t,c-.016,.055),en(t,c+.016,.055),e+.26,e+1.08,ha)}}function Px(i,t,e,n){const s=e+.9,o=t.length*.2,r=t.length*.8,a=n(...en(t,t.length/2,-2.9));for(let l=0;l<6;l++){const c=-2.9+l*.42,h=a+(s-a)*(l+1)/6;i.shell(Rl(t,o,r,c,.04),Math.min(h-.05,a-.08),h,"#c7bcab")}i.shell(Rl(t,o-.9,r+.9,-2.3,.04),e+3.24,e+3.56,Jo)}function Lx(i,t,e){const n=pe(i,"Анапа-Океан — 13 этажей",{surfaces:Zf}),s=Qo(t),o=new Set([0,1,3,4,5,6]),r=tu(s,s.map((p,m)=>o.has(m)?1.5:.05)),a=Qo(r),l=e(...en(s[0],s[0].length/2)),c=Math.min(...t.map(p=>e(...p)))-.3,h=l+3.65,f=12,u=2.97,d=h+f*u;n.shell(t,c,h,Io,Jo);for(const p of s.slice(0,3)){const m=Math.max(2,Math.round(p.length/2.3));for(let v=0;v<m;v++){const S=p.length*(v+.055)/m,x=p.length*(v+.945)/m;fr(n,p,S,x,l+.95,l+3.22)}}Px(n,s[0],l,e),n.shell(r,h,d,Io,"#c2c7c2");for(let p=0;p<f;p++){const m=h+u*p,v=p<f-1;v&&(n.shell(t,m,m+.22,Jo),n.flat(t,m,Jo));for(let S=0;S<s.length;S++){const x=o.has(S);Rx(n,a[S],m,x),x&&v&&Cx(n,s[S],m)}}const g=tu(s,s.map(()=>.4)),_=Qo(g);n.shell(g,d-.17,d+.45,Io,"#c7c8bf");for(const[p,m]of[[2,1.37],[7,1.05]]){const v=_[p];n.shell(Rl(v,.7,v.length-.7,.02,2.1),d+.45,d+m,Io)}n.finish()}function Dx(i,t,e){const n=pe(i,"Анапа-Океан — низкое крыло",{surfaces:Zf}),s=[...t.slice(0,9),t[15]],o=t.slice(8),r=e(...Re(s)),a=e(...Re(o)),l=r+3.9,c=a+6.25,h="#4d7494";for(const[u,d,g]of[[s,r,l],[o,a,c]]){const _=Math.min(...u.map(m=>e(...m)))-.3;n.shell(u,_,g,Io,"#c6c8c4");const p=Qo(u);for(const m of p){if(m.length<2.7)continue;const v=Math.max(1,Math.round(m.length/4.3));for(let S=0;S<v;S++){const x=m.length*(S+.17)/v,b=m.length*(S+.84)/v;fr(n,m,x,b,d+.72,d+2.94),u===o&&fr(n,m,x,b,d+3.55,g-.64)}}}const f=Qo(s);for(const u of f.slice(0,6)){const d=en(u,0,.15),g=en(u,u.length,.15);n.wall(d,g,l+.14,l+.91,h),n.beam([d[0],l+.96,d[1]],[g[0],l+.96,g[1]],.055,Jo)}n.finish()}function Ix(i,t,e){if(t.id==="223949006")Lx(i,t.rings[0],e);else if(t.id==="142489050")Dx(i,t.rings[0],e);else return!1;return!0}const si="#eeece2",rs="#354552";function $f(i,t){const e=Math.hypot(t[0]-i[0],t[1]-i[1]),n=(t[0]-i[0])/e,s=(t[1]-i[1])/e,o=(l,c)=>[i[0]+n*l-s*c,i[1]+s*l+n*c];return{point:o,project:([l,c])=>[(l-i[0])*n+(c-i[1])*s,(l-i[0])*-s+(c-i[1])*n],rectangle:(l,c,h,f)=>[o(l,h),o(c,h),o(c,f),o(l,f)]}}function eu(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);r>=0&&e.push(s),r<0!=a<0&&e.push(_t(s,o,r/(r-a)))}return e}function Ux(i,t,e){const{point:n,project:s,rectangle:o}=$f(t[0],t[1]),r=t.map(M=>e(...M)),a=Math.max(...r),l=a+3.35,c="#c8bda8",h="#adada4",f=pe(i,"Кубань",{surfaces:{flatRoof:[h],stone:[c]}});f.shell(t,Math.min(...r)-.22,l,c,h);const u=eu(t,M=>14-s(M)[0]),d=eu(t,M=>s(M)[1]-35.45);f.shell(u,l,a+6.7,si,h),f.shell(d,l,a+6,"#d7d0c1",h);const g=14,_=89.4,p=9.02,m=25.57,v=o(g,_,p+1.05,m-1.05),S=Re(v),x=2.95,b=l+8*x;f.shell(v,l,b,si,h);const y=22,w=[p,m].map((M,E)=>{const A=E===0?1:-1,C=[];for(let D=0;D<y;D++){const P=g+(_-g)*D/y,L=g+(_-g)*(D+1)/y;C.push(n(P,M+A*.48),n(P+(L-P)*.4,M),n(L,M))}return C});for(let M=0;M<8;M++){const E=l+M*x;xn(f,v[0],v[1],S,E+.96,E+2.62,3.45),xn(f,v[2],v[3],S,E+.96,E+2.62,3.45);for(const C of w)for(let D=1;D<C.length;D++)f.wall(C[D-1],C[D],E+.24,E+.94,si);const A=[[...w[0],n(_,p+1.07),n(g,p+1.07)],[...w[1],n(_,m-1.07),n(g,m-1.07)]];for(const C of A)f.shell(C,E,E+.24,si)}f.shell(v,b,b+.45,si,h),f.finish()}function nu(i,t,e,n,s,o,r){const a=[[t[0],n,t[1]],[e[0],n,e[1]]];for(let l=0;l<=8;l++){const c=Math.PI*l/8,[h,f]=_t(t,e,(1+Math.cos(c))/2);a.push([h,s+(o-s)*Math.sin(c),f])}i.face(r,...a)}function jr(i,t,e,n,s,o,r){for(let a=0;a<r;a++){const l=f=>_t(t,e,(a+f)/r),c=[l(.15),l(.85)].map(f=>_t(n,f,1.006));nu(i,...c,s,s+o*.72,s+o,si);const h=[l(.24),l(.76)].map(f=>_t(n,f,1.011));nu(i,...h,s+.12,s+o*.72,s+o-.2,"#314454")}}function Nx(i,[t,e],n,s,o,r=!1){const a=n.map(([l,c])=>Array.from({length:s},(h,f)=>{const u=2*Math.PI*(f+.5)/s;return[t+c*Math.cos(u),l,e+c*Math.sin(u)]}));for(let l=1;l<a.length;l++)for(let c=0;c<s;c++){const h=(c+1)%s;i.face(o,a[l-1][c],a[l-1][h],a[l][h],a[l][c]),r&&c%2===0&&i.beam(a[l-1][c],a[l][c],.04,"#a98c4b")}}function iu(i,[t,e],n,s){const o="#bc9e4f";i.beam([t,n,e],[t,n+s,e],.075,o),i.beam([t-.33,n+s*.67,e],[t+.33,n+s*.67,e],.065,o),i.beam([t-.22,n+s*.35,e],[t+.22,n+s*.43,e],.06,o)}function Fx(i,t,e){const[n,s,o,r]=t,a=(D,P)=>_t(_t(s,o,D),_t(n,r,D),P),l=(D,P,L,U)=>[a(D,L),a(P,L),a(P,U),a(D,U)],c=Re(t),h=e(...c),f=Math.min(...t.map(D=>e(...D)))-.25,u="#3c9e9e",d="#a99973",g=pe(i,"Свято-Онуфриевский храм",{surfaces:{flatRoof:[rs],glass:["#314454"],stone:[d]}}),_=l(.24,1,0,1),p=l(0,.35,.25,.75),m=Re(_),v=Re(p),S=h+5.9;g.shell(_,f,h+.6,d,null),g.shell(_,h+.6,S,u,null),g.shell(p,f,h+.6,d,null),g.shell(p,h+.6,h+6.45,u,null),g.shell(_.map(D=>_t(m,D,1.012)),S-.27,S,si,null);for(const[D,P]of[[_[0],_[1]],[_[2],_[3]],[_[1],_[2]]])jr(g,D,P,m,h+1.18,2.78,3);jr(g,p[3],p[0],v,h+.55,3.1,1);const x=[a(.42,.5),a(.83,.5)].map(([D,P])=>[D,h+7.95,P]),b=_.map(([D,P])=>[D,S,P]);g.face(rs,b[0],b[1],x[1],x[0]),g.face(rs,b[1],b[2],x[1]),g.face(rs,b[2],b[3],x[0],x[1]),g.face(rs,b[3],b[0],x[0]);const y=h+6.65,w=h+10.35;g.shell(p,h+6.22,y,si,null),g.shell(p,y,w,u,null),p.forEach((D,P)=>{jr(g,D,p[(P+1)%p.length],v,y+.18,2.55,3)});for(const[D,P,L]of[[_,m,S],[p,v,w]])for(const U of D){const[k,H]=_t(P,U,1.006);g.beam([k,h+.6,H],[k,L,H],.35,si)}const M=p.map(D=>_t(v,D,1.045)),E=[v[0],h+17.8,v[1]];M.forEach(([D,P],L)=>{const[U,k]=M[(L+1)%M.length];g.face(rs,[D,w,P],[U,w,k],E),g.beam([D,w,P],E,.055,"#88754c")}),iu(g,v,E[1],1.42);const A=a(.68,.5),C=Array.from({length:8},(D,P)=>{const L=Math.PI*(P+.5)/4;return[A[0]+1.98*Math.cos(L),A[1]+1.98*Math.sin(L)]});g.shell(C,h+7.35,h+10.1,u,null),g.shell(C.map(D=>_t(A,D,1.08)),h+9.87,h+10.12,si,null),C.forEach((D,P)=>jr(g,D,C[(P+1)%C.length],A,h+8.22,1.42,1)),Nx(g,A,[[10.12,1.98],[10.55,2.27],[11.25,2.32],[12.02,1.85],[12.63,1.02],[13.12,.47],[13.52,.16]].map(([D,P])=>[h+D,P]),12,rs,!0),iu(g,A,h+13.5,1.35),g.finish()}function Ox(i,t,e){const{point:n,rectangle:s}=$f(t[3],t[4]),o=Re(t),r=t.map(A=>e(...A)),a=Math.max(...r),l="#d4b581",c="#cca873",h="#eadcbe",f="#a17a61",u="#aaa598",d="#625748",g="#986d59",_=pe(i,"Мотылёк",{surfaces:{flatRoof:[u],metal:[d,g],stone:[f]}}),p=a+9.35;_.shell(t,Math.min(...r)-.25,a+.64,f,null),_.shell(t,a+.64,p,c,u);for(let A=0;A<3;A++){const C=a+.65+A*2.84;if(xn(_,t[3],t[4],o,C+.65,C+2.43,3.9,c),xn(_,t[11],t[12],o,C+.65,C+2.43,4,c),!A)continue;const D=s(.2,51.35,-.58,.04);_.shell(D,C-.24,C,h,l),_.wall(D[0],D[1],C+.68,C+.77,d);const P=s(9.18,42.7,16.97,17.52);_.shell(P,C-.24,C,h,l),_.wall(P[2],P[3],C+.68,C+.77,d)}const m=42.99,v=57,S=16.85,x=44.8,b=s(m,v,S,x),y=Re(b),w=a+12.15;_.shell(b,p,w,c,null);for(const[A,C]of b.entries())xn(_,C,b[(A+1)%b.length],y,p+.35,w-.35,4.3,c);const[M,E]=[S,x].map(A=>Array.from({length:11},(C,D)=>{const P=D/10,[L,U]=n(m-.27+(v-m+.54)*P,A);return[L,w+1.55*(1-(2*P-1)**2),U]}));for(let A=1;A<M.length;A++)_.face(g,M[A-1],E[A-1],E[A],M[A]);_.face(c,...M),_.face(c,...E),_.finish()}function Bx(i,t,e){const n=t.parts?.filter(v=>v.levels>2)??[],s=t.parts?.filter(v=>v.levels===2)??[];if(n.length!==2||s.length!==2)return!1;const o=["#6f8a98","#8197a0","#627e8f","#718d9d"],r=pe(i,"Колоннада",{surfaces:{flatRoof:["#b8bfbe"],glass:o,stone:["#d4d8d5"]}}),a=t.rings[0],l=a.map(v=>e(...v)),c=Math.max(...l),h=Math.min(...l)-.22,f=c+6.65,u="#d4d8d5",d="#b8bfbe",g="#a5adaf";for(const v of t.parts)r.shell(v.rings[0],h,f,g,d);const _=Re(a);a.forEach((v,S)=>{const x=a[(S+1)%a.length];for(const b of[0,1]){const y=c+b*3.325;xn(r,v,x,_,y+.42,y+2.87,2.4,"#c4c9c8")}});const p=["#9e7867","#9b8e65","#56768e"],m=2.95;for(const[v,S]of n.entries()){const x=S.rings[0],b=Re(x),y=f+(S.levels-2)*m;r.shell(x,f,y,u,d),x.forEach((w,M)=>{const E=x[(M+1)%x.length],A=Math.hypot(E[0]-w[0],E[1]-w[1]),C=Math.max(1,Math.round(A/2.45)),D=A>9?.13:.16,P=q=>_t(b,_t(w,E,q),1.0035);for(let q=0;q<C;q++){const Y=P(D+(1-2*D)*(q+.025)/C),J=P(D+(1-2*D)*(q+.975)/C);for(let it=2;it<S.levels;it++){const yt=f+(it-2)*m,vt=it*7+M*11+q*5+v*9,Wt=vt%29===0?p[q%p.length]:o[vt%o.length];r.wall(Y,J,yt+.15,yt+m-.14,Wt)}}if(A<13)return;const[L,U]=P(.15),[k,H]=P(.85);for(const[q,Y]of[[L,U],[k,H]])r.beam([q,y,Y],[q,y+1.45,Y],.15,"#9ba5a8");r.beam([L,y+1.45,U],[k,y+1.45,H],.16,"#9ba5a8")})}return r.finish(),!0}function zx(i,t,e){const n=t.rings[0];if(t.id==="223459472")Ux(i,n,e);else if(t.id==="142489074")Fx(i,n,e);else if(t.id==="223628174")Ox(i,n,e);else return t.id==="223628417"?Bx(i,t,e):!1;return!0}function Xe([i,t],e){return[i,e,t]}function Uo([i,t],e,n=e){return Array.from({length:8},(s,o)=>{const r=o*Math.PI/4;return[i+Math.cos(r)*e,t+Math.sin(r)*n]})}function Kf(i,t,e,n){i.shell(Uo(t,.13),e,e+.69,n,null),i.shell(Uo(t,.54),e+.69,e+.75,n);for(const s of[-1,1]){const o=[t[0]+s*.84,t[1]];i.shell(Uo(o,.18),e,e+.44,n,null),i.shell(Uo(o,.28),e+.44,e+.5,n),i.beam([o[0]+s*.23,e+.46,o[1]],[o[0]+s*.23,e+.87,o[1]],.08,n)}}function kx(i,t,e,n,s){const o=(n.lowerWaterfront??n)(...Re(e)),r=o+s,a="#ded4ba",l="#e5e0cf",c="#bfbaa8",h="#484740",f=[[e[1][0],-30.5],[e[2][0],-32.8],[e[3][0],-35.7]],u=f.map(([p,m])=>[p,m-2]),d=[e[0],...u,e.at(-1)];t.shell(d,o-.17,o+.23,a,"#aa9c80"),t.shell(d,r-.25,r,"#a8a393","#b6b2a5");for(let p=1;p<u.length;p++){const m=u[p-1],v=u[p];t.wall(m,v,o+.23,o+.75,a),t.wall(m,v,r-.43,r-.25,l),t.wall(f[p-1],f[p],o+.23,r-.25,"#4b5351");for(const x of[.79,1,1.19])t.beam(Xe(m,o+x),Xe(v,o+x),.053,h);const S=5;for(let x=0;x<S;x++){const b=(x+.5)/S,y=_t(m,v,b),w=Xe(y,o+1.54),M=r-.42;t.beam(Xe(y,o+.23),Xe(y,r-.25),.16,a);for(const C of[-1,1]){const D=_t(m,v,b+C*.018),P=_t(m,v,b+C*.056);t.face(l,Xe(y,M),Xe(P,M),w),t.face(c,Xe(P,M),Xe(D,M-.8),w),t.face(l,w,Xe(y,o+.77),Xe(D,o+.77))}t.beam(Xe([y[0],y[1]-.045],o+1.9),Xe([y[0],y[1]-.045],o+2.12),.11,"#f2dcab");const[E,A]=_t(m,v,b+.09);Kf(t,[E,A+1.14],o+.23,"#88684d")}}const[g,_]=_t(u[0],u[1],.78);Yn(i,{text:"ПРИЧАЛ",position:[g,r-.54,_-.055],size:[3.08,.42],outward:[-.108,-.994],background:"#484740",color:"#f2e8d0"})}function Hx(i,t,e,n){const s=n(-170,-63)+.26,o=Re(e),r="#323a3e",a="#795b45",l=e.map(p=>_t(o,p,.82));t.shell(e,s-1.12,s+.39,"#666458");for(const[p,m,v,S]of[[e,.39,2.75,3.18],[e,3.18,5.93,6.52],[l,6.52,8.75,9.06]])t.shell(p,s+m,s+v,"#35494d",null),t.shell(p,s+v,s+S,r,"#777e7b"),p.forEach((x,b)=>{const y=p[(b+1)%p.length];xn(t,x,y,o,s+m+.05,s+v,1.18,r)});const c=[[-185.1,-55.2],[-173,-69.3],[-163.5,-64],[-162.1,-47.2]],h=s+3.06,f=[c[0],[-188.8,-60.2],[-180.3,-72.6],c[1]];t.shell(f,s-.5,s+.11,"#888479","#aaa293"),t.shell(c,s-.52,s+.37,"#6a675d","#968477"),t.shell(c,h-.18,h,"#4c4035","#929895");const u=c.map(p=>_t(Re(c),p,.94));t.shell(u,s+.37,h-.19,"#475958",null);for(let p=0;p<c.length;p++){const m=c[p],v=c[(p+1)%c.length],S=Math.ceil(Math.hypot(v[0]-m[0],v[1]-m[1])/2.55);for(let x=0;x<S;x++){const b=_t(m,v,x/S);t.beam(Xe(b,s+.35),Xe(b,h-.13),.2,a),t.beam(Xe(_t(b,v,.03),h-.33),Xe(_t(m,v,(x+.8)/S),h-.33),.035,"#dac797")}}for(const p of[[-185.6,-60.4],[-183.4,-64],[-180.8,-67.6]])Kf(t,p,s+.11,"#916e49");const d=[-177.7,-51.7],g=n(...d),_=Uo(d,.36,.52);t.shell(_,g-.08,g+2.31,a),Yn(i,{text:"ВИНО И МОРЕ",position:[d[0]-.365,g+1.28,d[1]],size:[1.02,.53],outward:[-1,0],background:"#5b4435",color:"#e7dac1"})}const Cl="#607680",Gx={223948934:{address:"9",height:4.9,wall:"#c6b69f",roof:"#b6b1a5"},223948896:{address:"11",height:4.7,wall:"#b7a188",roof:"#777774"},223948899:{address:"13",height:4.6,wall:"#c4baaa",roof:"#cbc7bc"},223948902:{address:"15/1",height:4.45,wall:"#c0b4a2",roof:"#c4c0b5"},223948903:{address:"15/2",height:4.45,wall:"#bab0a1",roof:"#c4c0b5"},223948904:{address:"15/3",height:4.4,wall:"#baafa0",roof:"#c4c0b5"},223948906:{address:"17",height:4.35,wall:"#9c8471",roof:"#b3aba1"},223948908:{address:"19",height:3.65},223948913:{address:"21",height:3.75,wall:"#b4a18a",roof:"#a59c8b"},223948916:{address:"23",height:3.85,wall:"#85685b",roof:"#77716a",veranda:!0}};function Vx(i){const t=i.reduce((e,n,s)=>{const o=i[(s+1)%i.length];return e+n[0]*o[1]-o[0]*n[1]},0);return i.map((e,n)=>[e,i[(n+1)%i.length]]).filter(([e,n])=>{const s=Math.hypot(n[0]-e[0],n[1]-e[1]);return s>=2&&(n[0]-e[0])*Math.sign(t)/s>.42})}function Wx(i,t,e,{height:n,wall:s,roof:o,veranda:r}){const a=Vx(t),l=e.lowerWaterfront??e,c=Math.min(...t.map(d=>l(...d))),h=c+n,f=Re(t),u=r?t.map(d=>_t(f,d,.8)):t;i.shell(t,c-.24,c+.32,"#b2a798"),i.shell(u,c+.3,h-.28,s,null),i.shell(t,h-.28,h,o);for(const[d,g]of a){const _=Math.hypot(g[0]-d[0],g[1]-d[1]),p=Math.max(1,Math.round(_/(r?3.4:2.5))),m=_t(f,d,1.005),v=_t(f,g,1.005);for(let S=0;S<p;S++){const x=_t(m,v,(S+.12)/p),b=_t(m,v,(S+.88)/p);if(r){const y=_t(d,g,S/p);i.beam([y[0],c+.32,y[1]],[y[0],h-.26,y[1]],.16,s),i.beam([x[0],c+.97,x[1]],[b[0],c+.97,b[1]],.075,"#66645f");const w=_t(f,x,.8),M=_t(f,b,.8);i.wall(w,M,c+.65,h-.44,Cl)}else i.wall(x,b,c+.55,h-.6,Cl),i.beam([x[0],c+1.31,x[1]],[b[0],c+1.31,b[1]],.07,s)}r&&i.beam([g[0],c+.32,g[1]],[g[0],h-.26,g[1]],.16,s)}}function Xx(i,t,e,n){const s=n?-361.1:-351.8,o=n?-354.7:-331,r=n?-29.5:-29.6,a=(e.lowerWaterfront??e)((s+o)/2,r),l=n?"#e1dbcc":"#ac8b65",c=n?"#244945":"#302723",h=(p,m,v=0)=>[n?s+o-p:p,a+m,r-v],f=(p,m,v,S)=>[[p,v],[m,v],[m,S],[p,S]],u=(p,m,v,S,x,b)=>{t.face(b,h(p,v,x),h(m,v,x),h(m,S,x),h(p,S,x))},d=(p,m,v,S,x,b)=>t.beam(h(p,v,S),h(m,v,S),x,b),g=(p,m,v,S,x,b)=>t.beam(h(p,m,S),h(p,v,S),x,b);t.shell(f(s,o,r,r+2.55),a+.12,a+5.36,l),u(s+.16,o-.16,3.72,5.16,.022,"#687c86");const _=n?4:12;for(let p=0;p<=_;p++)g(s+.16+(o-s-.32)*p/_,3.7,5.18,.041,.065,"#d6d1c7");if(d(s+.16,o-.16,4.47,.038,.068,"#d6d1c7"),n){const p=s+.42;u(p,p+1.16,.31,2.52,.034,"#755336"),u(p+.11,p+1.05,.95,2.41,.044,"#45534a"),u(p+.11,p+1.05,.35,.94,.044,c),u(s+2.02,o-.38,.47,2.46,.026,"#4e6355");for(let S=0;S<=3;S++)g(s+2.02+S*1.33,.45,2.48,.06,.12,"#79573b");const m=s+1.84,v=o-.22;t.face("#236a66",h(m,2.77),h(v,2.77),h(v,2.5,1.38),h(m,2.5,1.38)),u(m,v,2.34,2.5,1.38,"#286c67"),Yn(i,{text:"Adrian",position:h((m+v)/2,2.42,1.39),size:[1.48,.15],outward:[0,-1],color:"#f5e9ce"}),Yn(i,{text:"Adrian  BISTRO",position:h((m+v)/2,3.15,.035),size:[3.98,.53],outward:[0,-1],background:"#536e55",color:"#f1d8a1"}),t.shell(f(s+.12,o-.08,r-1.65,r),a+.13,a+.31,"#b5a58c"),d(s+1.75,o-.15,1.14,1.53,.061,c);for(let S=0;S<=11;S++)g(s+1.75+S*.409,.31,1.14,1.53,.035,c);for(const S of[s+.3,s+1.72,o-.45]){const[x]=h(S,0),b=(w,M)=>Array.from({length:8},(E,A)=>[x+Math.cos(A*Math.PI/4)*w,r-M+Math.sin(A*Math.PI/4)*w]);t.shell(b(.24,.83),a+.31,a+.7,"#ab694f");const y=b(.3,.83);for(let w=0;w<y.length;w++){const M=y[w],E=y[(w+1)%y.length];t.face(w%2?"#345c46":"#40694d",[M[0],a+.66,M[1]],[E[0],a+.66,E[1]],[x,a+1.85,r-.83])}}for(const S of[s+2.7,s+4.56]){g(S,.31,1,.93,.075,"#765d41");const[x]=h(S,0);t.shell(f(x-.31,x+.31,r-1.15,r-.71),a+.98,a+1.03,"#8b6c4b")}}else{t.shell(f(s,o,r-1.2,r),a+.12,a+.31,"#786858"),t.face("#392e27",h(s,3.16),h(o,3.16),h(o,2.79,1.21),h(s,2.79,1.21)),u(s,o,2.62,2.79,1.21,"#3d2f28");const p=8,m=(o-s)/p;for(let v=0;v<p;v++){const S=s+m*v;u(S+.08,S+m-.08,.34,2.61,.032,v%3===0?"#587273":"#354d50"),g(S+.02,.31,2.68,1.13,.088,c),d(S+.12,S+m-.18,1.12,1.11,.07,"#7e5e42");for(let x=0;x<=5;x++)g(S+.12+(m-.3)*x/5,.31,1.12,1.11,.039,"#7e5e42")}g(o-.02,.31,2.68,1.13,.088,c),Yn(i,{text:"BAVARIA",position:h(-342.2,3.07,1.24),size:[5.9,.55],outward:[0,-1],color:"#f5e5ca"})}}function qx(i,t,e){const{id:n,rings:[s]}=t,o=Gx[n];if(!o&&n!=="223949008")return!1;const r=n==="223949008"?"Вино и море":n==="223948908"?"Причал":`Набережная, ${o.address}`,a=pe(i,r,{surfaces:{glass:[Cl,"#687c86","#45534a","#4e6355","#587273","#354d50","#4b5351","#35494d","#475958"],wood:["#755336","#79573b","#765d41","#8b6c4b","#7e5e42","#88684d","#795b45","#916e49","#968477"],foliage:["#345c46","#40694d"],stone:["#b2a798","#b5a58c","#aa9c80","#aaa293"],flatRoof:[o?.roof,"#b6b2a5","#777e7b","#929895"],metal:["#244945","#302723","#484740","#323a3e"]}});return n==="223949008"?Hx(i,a,s,e):n==="223948908"?kx(i,a,s,e,o.height):(Wx(a,s,e,o),(n==="223948904"||n==="223948906")&&Xx(i,a,e,n==="223948904")),a.finish(),!0}const vn="#e9e5d8",su="#d8c7a9",$i="#7a7c75",wc="#517789",zs="#d8ded9";function dr(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=Math.sign(t),c=r*l/a,h=-o*l/a;return{a:e,b:s,length:a,nx:c,nz:h,point(f,u=0){return[e[0]+o*f/a+c*u,e[1]+r*f/a+h*u]}}})}function Nn(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function Be(i,t,e,n,s,o,r,a=.045){i.wall(t.point(e,a),t.point(n,a),s,o,r)}function ou(i,t,e,n,{spacing:s,fraction:o,sill:r,top:a,glass:l}){const c=Math.max(1,Math.round(t.length/s)),h=t.length/c;for(let f=0;f<n;f++){const u=e+f*2.7;for(let d=0;d<c;d++){const g=(d+.5)*h,_=h*o/2;Be(i,t,g-_-.08,g+_+.08,u+r-.08,u+a+.08,vn),Be(i,t,g-_,g+_,u+r,u+a,l,.065),Be(i,t,g-.026,g+.026,u+r,u+a,vn,.083)}}}function Pl(i,[t,e],n,s,o){const r=a=>Array.from({length:10},(l,c)=>{const h=c*Math.PI/5;return[t+o*a*Math.cos(h),e+o*a*Math.sin(h)]});i.shell(r(1.27),n,n+.13,vn),i.shell(r(1),n+.13,s-.2,vn,null),i.shell(r(1.21),s-.2,s,vn)}function Yx(i,t,e){const n=dr(t).filter(w=>w.length>.1),s=Re(t)[1],o=n.filter(({a:w,b:M,length:E,nz:A})=>E>27&&A<-.8&&(w[1]+M[1])/2<s-5).sort((w,M)=>Math.min(w.a[0],w.b[0])-Math.min(M.a[0],M.b[0])),r=o[0];if(!r)return!1;const a=pe(i,"Старинная Анапа",{surfaces:{glass:[wc,"#648591","#63767a","#4b5553","#5a625c"],flatRoof:[$i],stone:["#a89b85"],metal:["#484b47","#535a58"]}}),l=e(...r.point(r.length/2,.7))+.08,c=Math.min(l-.15,...t.map(w=>e(...w)-.25)),h=l+3.3,f=l+11.55,u=l+11.9;a.shell(t,c,l+.26,"#a89b85",null),a.shell(t,l+.26,f,su,null),a.shell(t,f,u,vn,$i);for(const w of n){if(w.length<4.8)continue;const M=w.nz>.55;ou(a,w,h,3,{spacing:M?3.4:3.12,fraction:M?.73:.57,sill:M?.49:.74,top:2.28,glass:M?"#648591":"#63767a"}),o.includes(w)||ou(a,w,l+.26,1,{spacing:3.3,fraction:.58,sill:.55,top:2.62,glass:"#4b5553"})}for(const w of o){const M=w.length-.3,E=Nn(w,.3,M,-.1,.95);a.shell(E,l+.35,h,"#524940",null),a.shell(Nn(w,0,w.length,-.15,1.22),h,h+.24,vn);const A=Math.round(w.length/2.12);for(let C=0;C<A;C++){const D=.3+C*(M-.3)/A,P=.3+(C+1)*(M-.3)/A;Be(a,w,D+.07,P-.07,l+.44,h-.1,"#5a625c",.971),Be(a,w,D+.018,D+.088,l+.44,h-.1,"#a0906d",.989)}}const d=r.length/2,g=d-6.2,_=d+6.2;for(const w of[-4.95,-1.65,1.65,4.95])Pl(a,r.point(d+w,1.17),l+.16,h,.21),Pl(a,r.point(d+w,.85),h+.24,f-.08,.33);for(let w=0;w<3;w++){const M=h+.24+w*2.7;for(const E of[d-3.3,d,d+3.3]){const A=Nn(r,E-1.23,E+1.23,-.03,.54);a.shell(A,M,M+.14,vn);for(const C of[.28,1.03])Be(a,r,E-1.21,E+1.21,M+C,M+C+.045,"#484b47",.55);for(let C=-5;C<=5;C++){const D=E+C*.22;Be(a,r,D,D+.036,M+.27,M+1.04,"#484b47",.55)}}}a.shell(Nn(r,g,_,-.08,1.2),f-.09,u+.39,vn);const p=(w,M)=>[w[0],M,w[1]],m=u+.39,v=u+2.24,S=p(r.point(d,1.2),v),x=p(r.point(d,-3.5),v),b=p(r.point(g,1.2),m),y=p(r.point(_,1.2),m);a.face(vn,b,y,S),a.face($i,b,S,x,p(r.point(g,-3.5),m)),a.face($i,S,y,p(r.point(_,-3.5),m),x),a.face(su,p(r.point(g,-3.5),m),x,p(r.point(_,-3.5),m));for(const w of[-1.83,-.61,.61,1.83]){const M=d+w,E=u+.02,A=Array.from({length:10},(C,D)=>{const P=Math.PI/2+D*Math.PI/5,L=D%2?.105:.245;return p(r.point(M+Math.cos(P)*L,1.225),E+Math.sin(P)*L)});for(let C=0;C<A.length;C++)a.face("#a99973",p(r.point(M,1.225),E),A[C],A[(C+1)%A.length])}for(const w of o)for(const[M,E]of w===r?[[.25,g],[_,w.length-.25]]:[[.25,w.length-.25]]){Be(a,w,M,E,u+.39,u+.45,"#535a58",-.2);for(let A=M;A<E;A+=1.7)Be(a,w,A,A+.04,u,u+.45,"#535a58",-.2)}return a.finish(),!0}function Ll(i,t,e,n,s,o=!1){for(const r of dr(t))if(!(r.length<.35||o&&r.nz>.25))for(let a=0;a<n;a++){const l=e+a*2.62+.42,c=e+(a+1)*2.62-.31,h=Math.max(1,Math.round(r.length/1.48));for(let f=0;f<h;f++){const u=(f+.065)*r.length/h,d=(f+.935)*r.length/h;Be(i,r,u,d,l,c,wc),Be(i,r,u,d,l+(c-l)*.63,l+(c-l)*.63+.056,s,.067)}}}function pr(i,t,e,n,s,o,r,a,l=1.35){const c=Math.max(1,Math.round((n-e)/l)),h=(n-e)/c;Be(i,t,e,n,s,o,a);for(let f=0;f<c;f++){const u=e+f*h+.045,d=u+h-.09;Be(i,t,u,d,s+.05,o-.05,r,.065),Be(i,t,u,d,o-.53,o-.48,a,.081)}}function Jf(i,t,e,n,s,o,r){for(const l of[.45,.98])Be(i,t,e,n,s+l,s+l+.055,r,o);const a=Math.max(1,Math.ceil((n-e)/1.6));for(let l=0;l<=a;l++){const c=e+(n-e)*l/a,[h,f]=t.point(c,o);i.beam([h,s,f],[h,s+1.025,f],.06,r)}}function Qf(i,t,e,n,s,o,r,a){const l=(h,f,u)=>{const[d,g]=t.point(h,f);return[d,u,g]},c=Math.ceil((n-e)/.69);for(let h=0;h<c;h++){const f=e+h*(n-e)/c,u=e+(h+1)*(n-e)/c,d=h%2?r:a;i.face(d,l(f,0,s),l(u,0,s),l(u,o,s-.47),l(f,o,s-.47)),Be(i,t,f,u,s-.62,s-.47,d,o)}}function Zx(i,t,e,n){const s=e.length*.46,o=s-5.25,r=s+5.25,a=n+.59,l=a+2.65;i.shell(Nn(e,o,r,-.08,4.55),n-.22,n,"#d7c7a9");for(let u=0;u<4;u++)i.shell(Nn(e,o+u*.27,r-u*.27,0,2.42-u*.48),n+u*.1475,n+(u+1)*.1475,"#dacbad");pr(i,e,s-2.65,s+2.65,a,l-.13,"#354f52","#dbc693",.88);for(const u of[-4.34,4.34])Pl(i,e.point(s+u,2.81),n,l,.17);const c=[[o,0],[r,0],[r,2.26],[r-.62,2.86],[r-2.17,3.26],[o+2.17,3.26],[o+.62,2.86],[o,2.26]];i.shell(c.map(([u,d])=>e.point(u,d)),l,l+.31,vn,$i);const[h,f]=e.point(s,3.28);Yn(t,{text:"Капитан",position:[h,l+.6,f],size:[3.1,.56],outward:[e.nx,e.nz],color:"#d49925"})}function $x(i,t,e){if(t.length!==17)return!1;const n=pe(i,"Капитан",{surfaces:{glass:[wc,"#54777f","#3f5e66"],flatRoof:[$i,"#987561"],stone:["#a39881"]}}),s=t.slice(2,12),o=[t[2],...t.slice(11,16)],r=[...t.slice(0,3),...t.slice(15)],a=e.lowerWaterfront??e,l=Math.min(...t.map(x=>a(...x)))-.25,c=Math.min(...s.map(x=>a(...x)))+.12,[h,f]=dr(o).slice(1,3),u=dr(r).at(-1),d=e(...u.point(u.length*.46,4.55)),g=e(...f.point(f.length/2,2)),_=g+2.89;n.shell(t,l,c+.27,"#a39881",null),n.shell(o,c+.27,_,zs,null),n.shell(o.map(x=>_t(Re(o),x,1.032)),_,_+.28,zs,"#987561"),Ll(n,o,c+.1,2,zs),pr(n,h,.38,h.length-.38,c+5.48,_-.12,"#54777f","#cedad5",1.67),Be(n,h,.38,h.length-.38,g-.06,g+.05,zs,.083);const p=Nn(h,.3,h.length-.3,-.07,1.03);n.shell(p,c+2.68,c+2.84,"#c3bfb4"),Jf(n,h,.38,h.length-.38,c+2.84,.97,"#afb5b0"),Qf(n,h,.35,h.length-.35,c+5.36,1.24,"#b6a481","#d5c8a5"),pr(n,f,1.03,f.length-.6,g+.14,_-.12,"#3f5e66",zs),n.shell(Nn(f,.48,f.length-.12,0,1.26),_-.1,_+.32,vn);const[m,v]=f.point(f.length*.57,1.28);Yn(i,{text:"Кафе Капитан",position:[m,_+.18,v],size:[5.2,.57],outward:[f.nx,f.nz],color:"#d49925"}),n.shell(s,c+.27,c+7.52,zs,null);const S=s.map(x=>_t(Re(s),x,1.046));return n.shell(S,c+7.52,c+7.85,vn,$i),Ll(n,s,c-.03,3,vn,!0),n.shell(r,c+.27,d+3.62,"#d9be8b",$i),Zx(n,i,u,d),n.finish(),!0}const Kx={170958817:{number:1,roof:"#8a8f8d",wall:"#d5cbb6",frame:"#c8d4d2"},223948923:{number:5,roof:"#aca99d",wall:"#658195",frame:"#deddd3"},223948927:{number:7,roof:"#aaa492",wall:"#bcb29a",frame:"#dfd8bf"}};function Jx(i,t,e,{number:n,roof:s,wall:o,frame:r}){const a=pe(i,`Набережная, ${n}`,{surfaces:{glass:[wc,"#526870","#6c858b"],flatRoof:[s,"#c4c7c2"],stone:["#a99e88"]}}),l=e.lowerWaterfront??e,c=dr(t).filter(_=>_.nz<-.52),h=c.map(_=>l(..._.point(_.length/2))),f=t.map(_=>l(..._)),u=Math.min(...f)-.25,d=Math.min(...h.length?h:f)+.11,g=d+5.51;if(a.shell(t,u,d+.27,"#a99e88",null),a.shell(t,d+.27,g,o,null),a.shell(t.map(_=>_t(Re(t),_,1.02)),g,g+.24,r,s),n===1)Ll(a,t,d+.15,2,r,!0);else for(const _ of c){const p=_.length-.36;if(pr(a,_,.36,p,d+.42,d+2.71,"#526870",r),pr(a,_,.36,p,d+3.03,g-.23,"#6c858b",r,1.47),n===5){const m=Nn(_,.15,_.length-.15,0,1.57);a.shell(m,d-.12,d+.41,"#aea69c");const v=Nn(_,.05,_.length-.05,0,1.68);a.shell(v,d+2.75,d+3.07,"#276583","#c4c7c2"),Be(a,_,.19,_.length*.47,d+2.77,d+3.06,r,1.7);const S=_.length*.22;Jf(a,_,S+2.3,p,d+.41,1.48,"#c2c7c3"),a.shell(Nn(_,.15,S+2.28,1.54,2.01),d-.12,d+.23,"#a49e96");for(const x of[.33,_.length*.51,p])a.shell(Nn(_,x-.12,x+.12,1.32,1.56),d+.41,d+2.75,o)}else Be(a,_,.36,p,d+3.12,d+3.21,"#bc9d58",.085),Qf(a,_,.26,_.length-.26,g-.05,1.42,"#c8a851","#f0e6ca")}return a.finish(),!0}function Qx(i,t,e){if(t.id==="r11979734-0")return Yx(i,t.rings[0],e);if(t.id==="156055903")return $x(i,t.rings[0],e);const n=Kx[t.id];return n?Jx(i,t.rings[0],e,n):!1}const{Color:cn,Vector2:jx,Vector3:S0}=_0,ye=24,jf=4,tv=2;function td(i,t,e){return i.refinesStairs(t,e,ye)?tv:i.refines(t,e,ye)?jf:ye}const yi={land:"#c6b899",beach:"#e0c893",park:"#8da371",water:"#6eabb5",pier:"#c5bdae",plaza:"#d0c1aa",ruins:"#aea27e",road:"#989891",path:"#d9ccb6",tree:"#7b9367",shingle:"#aaa495",rockLight:"#a59172",riprap:"#898a78",quay:"#aca99e"},ru=["#c6b9a5","#b0aca1","#b8a08b","#ddd3ba","#9a9c93"],ev=["#e9deca","#ded6c7","#d6c5ad","#e4d8bf","#d8d6c7"],b0=new Set(["footway","pedestrian","steps","cycleway","path","track"]),au=new Set(["223948926"]),nv=[W_,X_,Ex,Ix,zx,qx,Qx];function ni(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function jo(i){const t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function No(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function iv(i,t,e=zf(i)){const{bounds:[n,s,o,r],columns:a,rows:l,heights:c}=t,[h,f]=i.origin,[u,d]=i.scale;function g(y,w){const M=ae.clamp((h+y/u-n)/(o-n)*(a-1),0,a-1),E=ae.clamp((r-f+w/d)/(r-s)*(l-1),0,l-1),A=Math.min(Math.floor(M),a-2),C=Math.min(Math.floor(E),l-2),D=C*a+A,P=ae.lerp(c[D],c[D+1],M-A),L=ae.lerp(c[D+a],c[D+a+1],M-A);return Math.max(.16,ae.lerp(P,L,E-C))}function _(y,w){const M=new Map,E=(A,C)=>{const D=`${A}:${C}`;return M.has(D)||M.set(D,y(A,C)),M.get(D)};return(A,C)=>{const D=w(A,C),P=Math.floor(A/D)*D,L=Math.floor(C/D)*D,U=(A-P)/D,k=(C-L)/D,H=E(P+D,L),q=E(P,L+D);return U+k<=1?E(P,L)*(1-U-k)+H*U+q*k:E(P+D,L+D)*(U+k-1)+H*(1-k)+q*(1-U)}}const p=c_(i),m=_((y,w)=>p(y,w,g(y,w)),()=>ye),v=_((y,w)=>e.height(y,w,m),(y,w)=>td(e,Math.floor(y/ye)*ye,Math.floor(w/ye)*ye)),S=(y,w)=>e.waterfront.nearEdge(y,w)||e.nearTransition(y,w)?e.height(y,w,m):v(y,w);return Object.assign(S,{plain:m,faceHeight:(y,w,M)=>M?e.height(y,w,m,M):S(y,w),lowerWaterfront:(y,w)=>e.waterfront.lowerGrade(y,w,S(y,w))})}function yn(i=!1){const t=[],e=[],n=i?[]:null;return{triangle(s,o,r,a,l){t.push(...s,...o,...r),n&&n.push(...l);for(const c of[s,o,r]){const h=typeof a=="function"?a(...c):a;e.push(h.r,h.g,h.b)}},mesh(s,o=ln){const r=new Pe;r.setAttribute("position",new oe(t,3)),r.setAttribute("color",new oe(e,3)),n&&r.setAttribute("facadeGrid",new oe(n,3)),r.computeVertexNormals();const a=new xe(r,new ne({vertexColors:!0,side:o}));return a.name=s,a.receiveShadow=!0,a}}}function an(i,t,e=1){return uo(i.material,{surface:t,strength:e}),i}function sv(i){const t=i.material;return t.customProgramCacheKey=()=>"district-facade-grid",t.onBeforeCompile=e=>{e.uniforms.facadeEnabled=yc.cartoonEnabled,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 facadeGrid;
        varying vec3 wallCell;
        varying vec2 wallXZ;
      `).replace("#include <begin_vertex>",`#include <begin_vertex>
        wallCell = facadeGrid;
        wallXZ = position.xz;
      `),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        uniform float facadeEnabled;
        varying vec3 wallCell;
        varying vec2 wallXZ;
        ${M0.replace("cartoonDistrict","windowGridDistrict")}
      `).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 windowCell = fract(wallCell.xy);
        vec2 windowEdge = abs(windowCell - vec2(0.5, 0.57));
        float windowAA = max(length(fwidth(wallCell.xy)), 0.004);
        float windowFrame = (1.0 - smoothstep(0.29, 0.29 + windowAA, windowEdge.x))
                          * (1.0 - smoothstep(0.26, 0.26 + windowAA, windowEdge.y));
        float windowPane = (1.0 - smoothstep(0.243, 0.243 + windowAA, windowEdge.x))
                         * (1.0 - smoothstep(0.204, 0.204 + windowAA, windowEdge.y));
        float windowLintel = windowFrame * (1.0 - windowPane);
        float windowPattern = wallCell.z * facadeEnabled * windowGridDistrict(wallXZ)
                            * (1.0 - smoothstep(0.08, 0.36, windowAA))
                            * step(0.0, wallCell.y);
        vec3 windowGlass = mix(vec3(0.055, 0.123, 0.151), vec3(0.144, 0.248, 0.27),
                               smoothstep(0.38, 0.72, windowCell.y + 0.09 * windowCell.x));
        diffuseColor.rgb = mix(diffuseColor.rgb, windowGlass, windowPane * windowPattern * 0.77);
        diffuseColor.rgb *= 1.0 + 0.12 * windowLintel * windowPattern;
      `)},an(i,"plaster")}function ed(i){const t=i.map(s=>s.map(([o,r])=>new jx(o,r))),e=Ei.triangulateShape(t[0],t.slice(1)),n=t.flat().map(({x:s,y:o})=>[s,o]);return e.map(s=>s.map(o=>n[o]))}function Dl(i,t,e,n){const[s,o,r]=t,a=(o[0]-s[0])*(r[1]-s[1])-(o[1]-s[1])*(r[0]-s[0]);if(Math.abs(a)<1e-4)return;const l=([c,h])=>[c,e(c,h),h];i.triangle(l(s),l(a>0?r:o),l(a>0?o:r),n)}function wi(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l])}}return e}function ov(i,t,e,n){let s=wi(i,o=>o[0]-t);return s=wi(s,o=>t+n-o[0]),s=wi(s,o=>o[1]-e),wi(s,o=>e+n-o[1])}function nd(i,t,e,n,s,o=!1){const[r,a,l,c]=jo(t);for(let h=Math.floor(r/ye)*ye;h<l;h+=ye){let f=wi(t,u=>u[0]-h);if(f=wi(f,u=>h+ye-u[0]),!(f.length<3))for(let u=Math.floor(a/ye)*ye;u<c;u+=ye){let d=wi(f,_=>_[1]-u);if(d=wi(d,_=>u+ye-_[1]),d.length<3)continue;const g=td(s,h,u);for(let _=h;_<h+ye;_+=g)for(let p=u;p<u+ye;p+=g){const m=g===ye?d:ov(d,_,p,g);if(!(m.length<3))for(const v of[1,-1]){const S=wi(m,([b,y])=>v*(_+p+g-b-y));if(S.length<3)continue;const x=o?s.waterfront.split(S):null;if(!x){for(let b=2;b<S.length;b++)Dl(i,[S[0],S[b-1],S[b]],e,n);continue}for(const{ring:b,side:y}of x){const w=(M,E)=>e(M,E,y);for(let M=2;M<b.length;M++)Dl(i,[b[0],b[M-1],b[M]],w,n)}}}}}}function ks(i,t,e,n,s,o=!1){for(const r of ed(t))nd(i,r,e,n,s,o)}function cu(i,t=[.36,.28]){const[e,n]=t;return i.material.customProgramCacheKey=()=>`promenade-${e}-${n}`,i.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec2 pavingMetres;`).replace("#include <begin_vertex>",`#include <begin_vertex>
pavingMetres = position.xz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 pavingMetres;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec2 p = mat2(0.994, 0.109, -0.109, 0.994) * pavingMetres;
        vec2 tileSize = vec2(${e}, ${n});
        vec2 tiles = p / tileSize;
        tiles.x += mod(floor(tiles.y), 2.0) * 0.5;
        vec2 cell = fract(tiles);
        vec2 border = min(cell, 1.0 - cell);
        vec2 pixel = fwidth(p) / tileSize;
        float aa = max(pixel.x, pixel.y);
        float contrast = 1.0 - smoothstep(0.08, 0.48, aa);
        float joints = 1.0 - smoothstep(0.02, 0.025 + aa, min(border.x, border.y));
        float accent = step(2.5, mod(floor(tiles.x) + 2.0 * floor(tiles.y), 4.0));
        diffuseColor.rgb *= 1.0 - contrast * (joints * 0.19 + accent * 0.12);
      `)},i}function id(i,t){return i.kind==="pier"||i.bridge?.85:t.waterfront.upperWidths[i.id]||t.waterfront.lowerWidths[i.id]||i.level?.15:b0.has(i.kind)?.35:.31}function rv(i,t,e,n){const{points:s,kind:o,id:r}=t,a=n.promenadeWidths.get(r)??t.width,l=n.stairHeight(t,e.plain);if(l){av(i,s,a,l);return}const c=b0.has(o),h=n.waterfront.upperWidths[r]||t.level==="upper",f=n.waterfront.lowerWidths[r]||t.level==="lower",u=new cn(h?"#cec7b8":f?"#b8b3a7":n.promenadeWidths.has(r)?"#c5c3b8":o==="pier"?yi.pier:c?yi.path:yi.road),d=id(t,n),g=(_,p,m)=>(n.rampHeight(t,_,p)??e.faceHeight(_,p,m))+d;for(let _=1;_<s.length;_++){const[p,m]=s[_-1],[v,S]=s[_],x=v-p,b=S-m,y=Math.hypot(x,b);if(y<.05)continue;const w=-b*a/(2*y),M=x*a/(2*y);nd(i,[[p+w,m+M],[v+w,S+M],[v-w,S-M],[p-w,m-M]],g,u,n,!0)}}function sd(i,t,{from:e,to:n,run:s}){const o=i.slice(1).map(([l,c],h)=>Math.hypot(l-i[h][0],c-i[h][1])),r=o.reduce((l,c)=>l+c,0);let a=0;return o.flatMap((l,c)=>{if(l<.04)return[];const[h,f]=i[c],u=i[c+1][0]-h,d=i[c+1][1]-f,g=a/r;a+=l;const _=a/r,p=[g,...s.filter(v=>v>g&&v<_),_],m=v=>ae.lerp(e,n,ae.clamp((v-s[0])/(s[1]-s[0]),0,1));return p.slice(1).map((v,S)=>{const x=p[S],b=(x-g)/(_-g),y=(v-x)/(_-g),w=m(x),M=m(v),E=Math.max(1,Math.round(Math.abs(M-w)/.17)),A=C=>ae.lerp(w,M,C/E)+.15;return{x:h+u*b,z:f+d*b,dx:u*y,dz:d*y,length:l*y,width:t,count:E,height:A}})})}function av(i,t,e,n){const s=new cn("#c5bdb0"),o=new cn("#a69d90");for(const{x:r,z:a,dx:l,dz:c,length:h,count:f,height:u}of sd(t,e,n)){const d=-c*e/(2*h),g=l*e/(2*h),_=(p,m,v)=>[r+l*p+d*v,m,a+c*p+g*v];for(let p=0;p<f;p++){const m=p/f,v=(p+1)/f,S=u(p),x=u(p+1),b=_(m,S,1),y=_(m,S,-1),w=_(v,S,-1),M=_(v,S,1),E=_(v,x,-1),A=_(v,x,1);i.triangle(b,y,w,s),i.triangle(b,w,M,s),i.triangle(M,w,E,o),i.triangle(M,E,A,o)}}}function cv(i,t){const e=i.surveyedStairs.flatMap(n=>sd(n.points,n.width,i.stairHeight(n,t.plain)));return(n,s)=>{if(i.nearTransition(n,s)){for(const o of e){const{x:r,z:a,dx:l,dz:c,length:h,width:f,count:u,height:d}=o,g=((n-r)*l+(s-a)*c)/(h*h),_=((s-a)*l-(n-r)*c)/h;if(g>=0&&g<=1&&Math.abs(_)<f/2)return d(Math.min(u-1,Math.floor(g*u)))}for(const o of i.ramps)if(No(n,s,[o.bounds[0]-o.width,o.bounds[1]-o.width,o.bounds[2]+o.width,o.bounds[3]+o.width])&&Ge(n,s,o.points).distance<o.width/2)return i.rampHeight(o,n,s)+id(o,i)}}}function lv(i,t,e,n){const s=t.buildings.find(c=>c.id==="170958806");if(!e||!s)return;const[o]=jo(s.rings[0]),r=[];for(let c=1;c<e.length;c++){const[h,f]=e[c-1],[u,d]=e[c],g=u-h,_=d-f,p=Math.hypot(g,_);for(let m=.8;m<p;m+=1.42){const v=h+g*m/p,S=f+_*m/p;if(!(v<o-122||v>-161.9))for(const x of[.9,2.15,3.4]){const b=Math.sin(m*6.13+c*13.7+x)*.35,y=v+_*(x+b)/p,w=S-g*(x+b)/p,M=n(y,w);M<2.55&&t.land.some(E=>ni(y,w,E))&&r.push([y,M,w,b])}}}const a=new Ci(new _s(1,0),new ne({color:"#ada79a",flatShading:!0}),r.length);a.name="Каменная отсыпка у нижней набережной";const l=new Ae;r.forEach(([c,h,f,u],d)=>{l.position.set(c,h-.05,f),l.scale.set(.72+u*.5,.32+u*.31,.53-u*.3),l.rotation.set(u,d*1.71,u*1.3),l.updateMatrix(),a.setMatrixAt(d,l.matrix),a.setColorAt(d,new cn().setScalar(.8+d%7*.055))}),a.receiveShadow=!0,i.add(an(a,"stone"))}function hv(i,t,e){const n=i.mesh("Terrain"),{position:s,normal:o}=n.geometry.attributes,r=new S0,a=3.2;for(let l=0;l<s.count;l++){if(o.getY(l)<.05)continue;const c=s.getX(l),h=s.getZ(l);if(e.waterfront.nearEdge(c,h))continue;const f=Math.floor(c/ye)*ye,u=Math.floor(h/ye)*ye;e.refines(f,u,ye)&&(r.set(t(c-a,h)-t(c+a,h),2*a,t(c,h-a)-t(c,h+a)).normalize(),o.setXYZ(l,r.x,r.y,r.z))}return o.needsUpdate=!0,n}function lu(i,t,e,n=null){const{rings:s,height:o,id:r}=t,a=Number(String(r).match(/\d+$/)?.[0]??0)%ru.length,l=new cn(ru[a]),c=new cn(ev[a]),h=Math.max(...s[0].map(([g,_])=>e(g,_))),f=h+o,u=Math.max(1,Math.round(o/3.15)),d=o/u;for(const g of ed(s))Dl(i,g,()=>f,l);for(const[g,_]of s.entries()){const m=_.reduce((v,[S,x],b)=>{const[y,w]=_[(b+1)%_.length];return v+S*w-y*x},0)>0==g>0?_:_.slice().reverse();for(let v=0;v<m.length;v++){const[S,x]=m[v],[b,y]=m[(v+1)%m.length],w=[S,e(S,x)-.2,x],M=[b,e(b,y)-.2,y],E=[b,f,y],A=[S,f,x];if(n){const C=Math.hypot(b-S,y-x),D=Math.max(1,Math.round(C/3.2)),P=C>2.2&&o>2.65?1:0,L=[0,(w[1]-h)/d,P],U=[D,(M[1]-h)/d,P],k=[D,u,P],H=[0,u,P];n.triangle(w,M,E,c,[...L,...U,...k]),n.triangle(w,E,A,c,[...L,...k,...H])}else i.triangle(w,M,E,c),i.triangle(w,E,A,c)}}}function uv(i,t,e){if(!t.length)return;const n=new Ci(new En(.15,.24,2.4,5),new ne({color:"#776952"}),t.length),s=new Ci(new _s(1,1),new ne({color:yi.tree,flatShading:!0}),t.length),o=new Ae;t.forEach(([r,a],l)=>{const c=1.5+l*17%13*.11,h=e(r,a);o.position.set(r,h+1.2,a),o.scale.set(1,1,1),o.updateMatrix(),n.setMatrixAt(l,o.matrix),o.position.y=h+2.6+c*.35,o.scale.set(c,c*1.23,c),o.rotation.y=l*1.4,o.updateMatrix(),s.setMatrixAt(l,o.matrix),s.setColorAt(l,new cn().setScalar(.77+l*11%7*.047))}),s.castShadow=!0,s.receiveShadow=!0,i.add(an(n,"wood",.75),an(s,"foliage",1))}function fv(i,t){const[e,n,s,o]=t,r={time:{value:0},evening:{value:0},sun:{value:new S0(-.6,.55,-.5).normalize()},haze:{value:new cn("#b3d5d5")},cartoonEnabled:yc.cartoonEnabled,...Y3()},a=new Bn({uniforms:r,vertexShader:`
      varying vec3 waterPoint;
      void main() {
        vec4 point = modelMatrix * vec4(position, 1.);
        waterPoint = point.xyz;
        gl_Position = projectionMatrix * viewMatrix * point;
      }
    `,fragmentShader:`
      uniform float time;
      uniform float evening;
      uniform vec3 sun;
      uniform vec3 haze;
      uniform float cartoonEnabled;
      uniform sampler2D waterPigment;
      uniform float waterPigmentReady;
      varying vec3 waterPoint;
      ${M0}
      void main() {
        vec2 p = waterPoint.xz;
        vec3 view = normalize(cameraPosition - waterPoint);
        float phase = dot(p, vec2(0.11, 0.19)) + time * 0.84;
        float crossWave = dot(p, vec2(0.17, -0.074)) - time * 0.62;
        float fine = sin(dot(p, vec2(0.58, 0.32)) - time);
        vec3 normal = normalize(vec3(0.045 * cos(phase), 1., 0.055 * sin(crossWave)));
        float swell = 0.5 + 0.13 * sin(phase) + 0.09 * sin(crossWave) + 0.035 * fine;
        vec3 water = mix(vec3(0.014, 0.144, 0.209), vec3(0.036, 0.302, 0.327), swell);
        water = mix(water, vec3(0.058, 0.131, 0.192) * (0.87 + swell * 0.3), evening);
        float fresnel = pow(1. - clamp(dot(view, normal), 0., 1.), 3.);
        water = mix(water, haze, fresnel * 0.46);
        float shine = pow(max(dot(reflect(-sun, normal), view), 0.), 36.);
        water += shine * mix(vec3(0.10, 0.15, 0.14), vec3(0.49, 0.25, 0.12), evening);
        float openSea = -54.0 + (p.y + 54.0) * 0.40;
        float spread = -386.0 + (p.x + 386.0) * 0.70;
        float painted = cartoonEnabled * cartoonDistrict(vec2(spread, max(p.y, openSea)));
        vec2 flow = mat2(0.945, 0.327, -0.327, 0.945) * p;
        float stroke = flow.y * 3.2 + sin(flow.x * 0.76 + flow.y * 0.14) * 0.9 - time * 0.72;
        float visibleStroke = 1.0 - smoothstep(0.21, 0.95, fwidth(stroke));
        if (painted > 0.0) {
          float wash = sin(flow.y * 0.40 + sin(flow.x * 0.17)) * 0.12
                     + sin(flow.x * 0.61 + flow.y * 0.77 + time * 0.37) * 0.055;
          vec3 ink = mix(vec3(0.012, 0.128, 0.161), vec3(0.018, 0.355, 0.36),
                         0.58 + wash + swell * 0.19);
          vec2 brushUV = (flow + vec2(0.24 * sin(flow.y * 0.21), -time * 0.42)) / 13.0;
          vec3 brush = texture2D(waterPigment, brushUV).rgb;
          ink = mix(ink, brush * vec3(0.92, 1.12, 1.03), waterPigmentReady * 0.66);
          float broken = smoothstep(0.03, 0.83, sin(flow.x * 0.95 - flow.y * 0.72 + sin(flow.y * 1.12)));
          float highlight = smoothstep(0.63, 0.99, sin(stroke)) * broken * visibleStroke;
          ink += vec3(0.058, 0.098, 0.084) * highlight;
          ink = mix(ink, ink * vec3(0.62, 0.74, 0.93) + vec3(0.018, 0.009, 0.015), evening);
          water = mix(water, ink, painted * (1.0 - fresnel * 0.16));
        }
        float distanceHaze = smoothstep(900., 3200., distance(cameraPosition, waterPoint));
        gl_FragColor = vec4(mix(water, haze, distanceHaze), 1.);
        #include <colorspace_fragment>
      }
    `}),l=Math.max(s-e,o-n)*4,c=new xe(new Li(l,l),a);return c.rotation.x=-Math.PI/2,c.position.set((e+s)/2,-.18,(n+o)/2),i.add(c),r}function dv(i,t,e){const n=new Uf({canvas:i,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1;const s=new jl;s.fog=new fc("#b3d5d5",900,3200),s.background=new cn("#b3d5d5");const o=zf(t),r=iv(t,e,o),a=fv(s,t.bounds),l=yn(),c=new cn(yi.land),h=Object.fromEntries(["shingle","rockLight","riprap","quay"].map(F=>[F,new cn(yi[F])])),f=new cn;function u(F,K,ot){const at=o.tone(F,ot,K);if(!at)return c;const[ft,Tt]=at;return f.copy(c).lerp(h[ft],Tt)}const d=t.areas.some(({id:F})=>F===Yh),g=d?vx(r):null,_=jo(cs),p=(F,K)=>d&&No(F,K,_)&&ni(F,K,cs);for(const F of t.land){const K=d&&cs.every(([ot,at])=>ni(ot,at,F))?[cs]:[];ks(l,[F,...K],r.faceHeight,u,o,!0);for(let ot=0;ot<F.length;ot++){const[at,ft]=F[ot],[Tt,Dt]=F[(ot+1)%F.length],Ut=o.refines(at,ft,ye)?jf:12,kt=Math.max(1,Math.ceil(Math.hypot(Tt-at,Dt-ft)/Ut));for(let O=0;O<kt;O++){const ee=[at+(Tt-at)*O/kt,ft+(Dt-ft)*O/kt],$t=[at+(Tt-at)*(O+1)/kt,ft+(Dt-ft)*(O+1)/kt],I=[ee[0],r(...ee),ee[1]],T=[$t[0],r(...$t),$t[1]],$=[ee[0],-.4,ee[1]],j=[$t[0],-.4,$t[1]];l.triangle(I,$,T,u),l.triangle(T,$,j,u)}}}const m=yn(),v=yn(),S=yn(),x={beach:.13,park:.14,plaza:.2,ruins:.22,water:.24,pier:.7};for(const F of t.areas){if(F.id===Yh)continue;const K=F.kind==="beach"&&(F.id==="368318892"||["pebblestone","gravel"].includes(F.surface)),ot=new cn(K?yi.shingle:yi[F.kind]??yi.park),at=(Tt,Dt,Ut)=>r.faceHeight(Tt,Dt,Ut)+(x[F.kind]??.14),ft=F.kind==="pier"||F.kind==="plaza"?v:F.kind==="park"?S:m;ks(ft,F.rings,at,ot,o,!0)}const b=yn(),y=yn(),w=yn(),M=yn(),E=new cn("#c7c1b7"),A=new cn("#b4ad9e"),C=[];for(const F of o.waterfront.sections){for(const K of F.upperDecks)C.push(K),ks(M,[K],(at,ft)=>r.faceHeight(at,ft,{section:F,upper:!0})+.12,E,o);for(const K of F.lowerDecks)ks(w,[K],(at,ft)=>r.faceHeight(at,ft,{section:F,upper:!1})+.12,A,o)}for(const F of o.allRoads){const K=o.waterfront.upperWidths[F.id]&&!(F.id in o.waterfront.rampLevels),ot=o.waterfront.lowerWidths[F.id],at=K?M:ot?w:b0.has(F.kind)||F.kind==="pier"?y:b;rv(at,F,r,o)}const D=yn(),P=yn(),L=yn(!0),U=[Co.west,Co.north,Co.east,Co.south];for(const F of t.buildings)if(!au.has(F.id)){if(F.id==="125813145")B_(s,F,r);else if(!nv.some(K=>K(s,F,r))){const[K,ot,at,ft]=jo(F.rings[0]);No((K+at)/2,(ot+ft)/2,U)?lu(P,F,r,L):lu(D,F,r)}}const k=D.mesh("OSM building footprints",Xn);k.castShadow=!0;const H=sv(L.mesh("Фасады квартала",Xn)),q=an(P.mesh("Крыши квартала",Xn),"flatRoof");if(H.castShadow=q.castShadow=!0,s.add(an(hv(l,r,o),"ground"),an(m.mesh("OSM surfaces"),"ground"),an(v.mesh("Площади и причалы"),"paving"),an(S.mesh("Скверы"),"foliage",.65),an(cu(w.mesh("Плитка нижней набережной"),[.24,.22]),"laidPaving"),an(cu(M.mesh("Плитка верхней набережной")),"laidPaving"),an(y.mesh("Пешеходные дорожки"),"paving",.8),an(b.mesh("OSM streets"),"road",.8),k,q,H),d){const F=yn();ox(s,r,(ot,at,ft)=>ks(F,ot,at,ft,o)),s.add(an(F.mesh("Раскоп Горгиппии · уровни грунта"),"ground",.88));const K=yn();g.render(s,(ot,at,ft)=>ks(K,ot,at,ft,o)),s.add(an(K.mesh("Горгиппия · покрытия дорожек"),"paving",.7))}uv(s,t.trees,r),z_(s,t,r),Ax(s,r),g_(s,r),A_(s,r),D_(s,r),lv(s,t,o.gorgWater,r),u_(s,o,r),Q3(s,r),e_(s,r);const Y=new d0("#eefbff","#b0a48b",1.65),J=new m0("#fff5dd",2.25),[it,yt,vt,Wt]=t.bounds,gt=Math.max(vt-it,Wt-yt)*.62;J.target.position.set((it+vt)/2,0,(yt+Wt)/2),J.castShadow=!0,J.shadow.mapSize.set(2048,2048),Object.assign(J.shadow.camera,{left:-gt,right:gt,top:gt,bottom:-gt,near:1,far:5300}),J.shadow.camera.updateProjectionMatrix(),J.shadow.normalBias=1,J.shadow.bias=-15e-5,s.add(Y,J,J.target);function mt(F){const K=F==="sunset";a.evening.value=K?1:0;const ot=K?"#d1aea0":"#b3d5d5";s.background.set(ot),s.fog.color.set(ot),a.haze.value.set(ot),Y.color.set(K?"#c6cde3":"#eefbff"),Y.intensity=K?1.18:1.65,J.color.set(K?"#ffad75":"#fff5dd"),J.intensity=K?2.5:2.25;const at=K?[-.95,.27,-.44]:[-.6,1,-.5];J.position.copy(J.target.position).add(new S0(...at).multiplyScalar(1800)),a.sun.value.set(...at).normalize(),n.shadowMap.needsUpdate=!0}mt("day");const V=new Map,N=60,Z=(F,K)=>`${F}:${K}`;for(const{id:F,rings:K}of t.buildings){if(au.has(F))continue;const[ot,at,ft,Tt]=jo(K[0]);for(let Dt=Math.floor(ot/N);Dt<=Math.floor(ft/N);Dt++)for(let Ut=Math.floor(at/N);Ut<=Math.floor(Tt/N);Ut++){const kt=Z(Dt,Ut);V.has(kt)||V.set(kt,[]),V.get(kt).push({id:F,rings:K,bounds:[ot,at,ft,Tt]})}}const dt=(F,K)=>t.land.some(ot=>ni(F,K,ot)),st=t.areas.filter(F=>F.kind==="pier"),ut=cv(o,r);function Et(F,K){if(!No(F,K,t.bounds)||!dt(F,K)&&!st.some(({rings:ft})=>ni(F,K,ft[0]))||ni(F,K,f_)||ni(F,K,Hf))return null;const ot=g?.walkHeight(F,K,p(F,K));return ot===null||(V.get(Z(Math.floor(F/N),Math.floor(K/N)))??[]).some(({id:ft,rings:Tt,bounds:Dt})=>!No(F,K,Dt)||!ni(F,K,Tt[0])||o.waterfront.deckRoofs.has(ft)&&C.some(Ut=>ni(F,K,Ut))?!1:!Tt.slice(1).some(Ut=>ni(F,K,Ut)))?null:ot??ut(F,K)??r(F,K)}return{renderer:n,scene:s,terrain:r,light:mt,walkHeight:Et,setCartoon:X3,walkable:(F,K)=>Et(F,K)!==null,render(F,K){a.time.value=K,n.render(s,F)}}}const pv=new Set(["motorway","trunk","primary","secondary","tertiary","unclassified","residential","living_street","service"]);function mv({kind:i,access:t}){return i!=="steps"&&t?.car!==!1&&(pv.has(i)||t?.car===!0)}function Il(i,t,e){return(t-i.x)*i.ux+(e-i.z)*i.uz}function hu(i,t,e){const n=Math.min(i.length,Math.max(0,Il(i,t,e)));return(t-i.x-n*i.ux)**2+(e-i.z-n*i.uz)**2}function gv(i,t,e){return i.road.barriers?.some(n=>{if(n.car!==!1)return!1;const[s,o]=n.position;return Math.hypot(t-s,e-o)<i.radius+.7&&Math.abs((t-s)*i.ux+(e-o)*i.uz)<.65})}function _v(i){const t=new Map,e=[],n=32,s=h=>Math.floor(h/n),o=(h,f)=>`${h}:${f}`;for(const h of i){const f=mv(h),u=h.access?.bicycle===!1,d=h.kind==="steps"||u||h.barriers?.length;if(!f&&!d)continue;const g=h.width/2;for(let _=1;_<h.points.length;_++){const[p,m]=h.points[_-1],[v,S]=h.points[_],x=v-p,b=S-m,y=Math.hypot(x,b);if(y<.01)continue;const w={x:p,z:m,ux:x/y,uz:b/y,length:y,radius:g,road:h,car:f,bikeCheck:d};f&&e.push(w);for(let M=s(Math.min(p,v)-g);M<=s(Math.max(p,v)+g);M++)for(let E=s(Math.min(m,S)-g);E<=s(Math.max(m,S)+g);E++){const A=o(M,E);t.has(A)||t.set(A,[]),t.get(A).push(w)}}}const r=(h,f)=>t.get(o(s(h),s(f)))??[];function a(h,f){let u=null,d=1/0;for(const g of r(h,f)){if(!g.car)continue;const _=Il(g,h,f);if(_<-.005||_>g.length+.005)continue;const p=hu(g,h,f),m=Math.max(.4,g.radius-.45);p>m**2||p>=d||gv(g,h,f)||(d=p,u=g.road)}return u}function l(h,f){let u=!1;for(const d of r(h,f)){if(!d.bikeCheck||hu(d,h,f)>d.radius**2)continue;const{road:g}=d;if(g.access?.bicycle===!1){if(g.access?.foot===!1)return"blocked";u=!0}g.kind==="steps"&&(u=!0);for(const _ of g.barriers??[])if(!(_.bicycle!==!1||Math.hypot(h-_.position[0],f-_.position[1])>.65)){if(_.foot===!1)return"blocked";u=!0}}return u?"push":"ride"}function c([h,f],u){let d=null,g=1/0;for(const _ of e){const p=Il(_,h,f);for(const m of[0,-4,4,-12,12]){const v=Math.min(_.length,Math.max(0,p+m)),S=_.x+_.ux*v,x=_.z+_.uz*v,b=(S-h)**2+(x-f)**2;if(b>=g)continue;const y=u(S,x);y!==null&&(g=b,d={x:S,z:x,height:y,heading:Math.atan2(_.ux,-_.uz)})}}return d}return{carAt:a,bicycleAt:l,nearestCarStart:c}}const{MathUtils:xv,Vector3:ja}=_0,vv=new ja(0,1,0);function mn(i){return new ne({color:i,flatShading:!0})}function Le(i,t,e,n=[0,0,0]){const s=new xe(t,e);return s.position.set(...n),i.add(s),s}function wn(i,t,e,n,s){const o=new ja(...t),r=new ja(...e),a=r.clone().sub(o),l=Le(i,new En(n,n,a.length(),10),s);return l.position.copy(o).lerp(r,.5),l.quaternion.setFromUnitVectors(vv,a.normalize()),l}function Js(i,t,e,n){const s=new r0(t.map(o=>new ja(...o)));return Le(i,new xc(s,14,e,8),n)}function uu(i,t,e){const n=t.flat(2),s=t[0].length,o=[];for(let a=0;a<t.length-1;a++)for(let l=0;l<s-1;l++){const c=a*s+l;o.push(c,c+1,c+s,c+1,c+s+1,c+s)}const r=new Pe;return r.setAttribute("position",new oe(n,3)),r.setIndex(o),r.computeVertexNormals(),Le(i,r,e)}function Mv(i){const t=mn("#4ca9ab"),e=mn("#283a3e"),n=mn("#18292b"),s=mn("#acbfc0"),o=mn("#e5af59"),r=new _e,a=new _e;i.add(r),r.add(a),wn(r,[0,-.3,-.27],[0,-.78,.4],.073,t),wn(a,[0,0,.09],[0,-.3,-.25],.049,s),wn(a,[0,-.31,-.25],[0,-.43,-.36],.066,t);for(const h of[-1,1]){const f=u=>u*h;wn(a,[f(.066),-.34,-.27],[f(.061),-.82,-.57],.038,t),Js(a,[[0,0,.09],[f(.24),.012,.11],[f(.43),.075,.18],[f(.75),.09,.25]],.033,s),wn(a,[f(.52),.079,.2],[f(.78),.092,.26],.052,e);for(const u of[.55,.61,.67,.73,.77]){const d=.205+(u-.53)*.21;wn(a,[f(u),.081,d],[f(u+.015),.082,d+.004],.055,n)}Js(a,[[f(.48),.055,.16],[f(.54),.038,.04],[f(.69),.038,.1]],.018,s),Js(a,[[f(.48),.045,.15],[f(.35),-.18,-.08],[f(.07),-.4,-.28]],.009,n)}const l=Le(a,new ci(.35,.042,8,32),n,[0,-.82,-.57]);l.rotation.y=Math.PI/2;const c=Le(a,new ci(.3,.014,6,32),s,[0,-.82,-.57]);return c.rotation.y=Math.PI/2,wn(a,[-.075,-.82,-.57],[.075,-.82,-.57],.036,s),Le(a,new En(.062,.067,.045,16),o,[-.37,.122,.14]),wn(a,[-.38,.115,.16],[-.45,.105,.2],.012,o),r.position.set(0,-.48,-1.5),{group:r,front:a}}function Sv(i){const t=mn("#eee1ba"),e=mn("#9b916c"),n=mn("#303536"),s=mn("#b7b8ab"),o=mn("#202526"),r=mn("#e7dbc2"),a=mn("#f58b63"),l=new _e,c=new _e,h=new _e;i.add(l),l.add(c,h),uu(l,[[[-1.52,-.8,-1.12],[-.84,-.73,-1.12],[-.1,-.67,-1.12],[.66,-.68,-1.12],[1.38,-.74,-1.12],[1.98,-.82,-1.12]],[[-1.36,-.8,-2.25],[-.72,-.75,-2.25],[-.06,-.69,-2.25],[.65,-.7,-2.25],[1.32,-.76,-2.25],[1.85,-.83,-2.25]],[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[-.04,-.83,-3.28],[.65,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]]],t),Js(l,[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[.3,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]],.014,e);for(const f of[-.77,1.3])Js(l,[[f,-.75,-1.42],[f,-.737,-2.14],[f*.93,-.844,-3.05]],.009,e);for(const f of[-.64,.38])wn(l,[f,-.65,-1.69],[f+.48,-.65,-1.76],.014,n),wn(l,[f+.23,-.65,-1.72],[f+.47,-.7,-1.5],.01,s);uu(l,[[[-1.9,-.89,-.67],[-.77,-.83,-.67],[.08,-.8,-.67],[.91,-.84,-.67],[2.05,-.89,-.67]],[[-1.92,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],[[-1.93,-.77,-1.56],[-.74,-.7,-1.56],[.07,-.67,-1.56],[.94,-.72,-1.56],[2.08,-.8,-1.56]]],n),Js(l,[[-1.9,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],.018,s),Le(l,new we(2.12,.14,.065),s,[.52,-.65,-1.37]),Le(l,new we(.86,.24,.16),n,[-.25,-.55,-1.43]),Le(l,new we(.8,.177,.019),s,[-.25,-.55,-1.337]),Le(l,new we(.75,.143,.015),o,[-.25,-.55,-1.32]),Le(l,new we(.44,.046,.004),r,[-.25,-.519,-1.31]);for(let f=0;f<=16;f++){const u=-.455+f*.0255,d=f%2===0?.017:.008;Le(l,new we(.0035,d,.004),o,[u,-.497-d/2,-1.305])}for(const f of[-.542,.038])Le(l,new we(.088,.036,.004),r,[f,-.524,-1.31]),wn(l,[f-.026,-.536,-1.304],[f+.01,-.51,-1.304],.0027,a);for(let f=0;f<6;f++){const u=mn(["#b44e37","#95764c","#a44536","#548159","#a58746","#5b8798"][f]);Le(l,new we(.037,.018,.004),u,[-.42+f*.066,-.579,-1.308])}for(const f of[.43,.67]){Le(l,new we(.17,.105,.025),o,[f,-.645,-1.316]);for(let u=0;u<4;u++)Le(l,new we(.15,.007,.01),s,[f,-.676+u*.019,-1.3])}h.position.set(-.453,-.518,-1.299),Le(h,new we(.008,.035,.006),a),c.position.set(-.25,-.63,-1.1),Le(c,new ci(.295,.023,10,44),n),Le(c,new ci(.219,.008,6,36,Math.PI),s,[0,0,.022]).rotation.z=Math.PI;for(const f of[-1,1])wn(c,[f*.061,-.018,.01],[f*.287,.01,0],.025,n),wn(c,[f*.073,-.015,.035],[f*.212,.003,.023],.008,s);return Le(c,new lo(.079,24),n,[0,0,.038]),Le(c,new ci(.033,.004,6,20),s,[0,0,.042]),Le(c,new we(.034,.024,.006),mn("#a75444"),[0,0,.044]),{group:l,wheel:c,gaugeNeedle:h}}function bv(){const i=new jl,t=new je(58,1,.04,10),e=new d0("#f7f7e9","#9ea8af",1.4),n=new m0("#fff2d8",2);n.position.set(-2,4,2),i.add(e,n);const s=Mv(i),o=Sv(i);let r=0,a="";function l(c,{mode:h,aspect:f,turn:u,speed:d,time:g,delta:_,reducedMotion:p}){if(a!==h&&(r=0,a=h),s.group.visible=h==="bike",o.group.visible=h==="car",!s.group.visible&&!o.group.visible)return;t.aspect!==f&&(t.aspect=f,t.updateProjectionMatrix()),r=p?u:xv.damp(r,u,12,_);const m=Math.min(1,f/1.22),v=.1*(1-m);s.group.visible?(s.group.scale.x=m,s.group.position.y=-.48+v,p||(s.group.position.y+=Math.sin(g*11)*Math.min(.008,Math.abs(d)*.0015)),s.front.rotation.y=-r*.28,s.front.rotation.z=-r*.045):(o.group.scale.x=m,o.group.position.y=v,o.wheel.rotation.z=-r*.74,o.gaugeNeedle.position.x=-.453+Math.min(1,Math.abs(d)*3.6/160)*.407);const S=c.autoClear;c.autoClear=!1;try{c.clearDepth(),c.render(i,t)}finally{c.autoClear=S}}return{render:l}}function yv(i){const t=new _e;t.name="ВАЗ-2101 «Копейка»",t.visible=!1,i.add(t);const e=new Zo({color:"#eee1ba",shininess:54,specular:"#a9a49b"}),n=new Zo({color:"#c9cacc",shininess:90,specular:"#f2f5f4"}),s=new ne({color:"#35342f"}),o=new ne({color:"#232528"}),r=new Zo({color:"#527176",shininess:68,specular:"#3b535a",side:ln}),a=new ne({color:"#fff5d5",emissive:"#422d0d"}),l=new ne({color:"#ecaa38"}),c=new ne({color:"#b92d23"}),h=new ne({color:"#a53830"});function f(P,L,[U,k,H],q=t){const Y=new xe(P,L);return Y.position.set(U,k,H),q.add(Y),Y}const u=(P,L,U,k,H,q,Y,J)=>f(new we(P,L,U),Y,[k,H,q],J);function d(P,L,U,k){const H=new z(...P),q=new z(...L);f(new we(U,U,H.distanceTo(q)),k,H.clone().add(q).multiplyScalar(.5).toArray()).lookAt(q)}function g(P){const L=new Pe;L.setAttribute("position",new oe(P.flat(),3)),L.setIndex([0,1,2,0,2,3]),L.computeVertexNormals(),f(L,r,[0,0,0]),P.forEach((U,k)=>d(U,P[(k+1)%P.length],.026,n))}const _=new _c;_.moveTo(1.99,.42),_.lineTo(1.99,.8),_.lineTo(1.75,.89),_.lineTo(.71,.92),_.lineTo(-1.14,.89),_.lineTo(-1.98,.78),_.lineTo(-1.99,.39),_.lineTo(-1.62,.33);for(const P of[-1.212,1.212]){_.lineTo(P-.353,.29);for(let L=1;L<=12;L++){const U=Math.PI-L*Math.PI/12;_.lineTo(P+Math.cos(U)*.353,.29+Math.sin(U)*.337)}}_.lineTo(1.99,.42);const p=f(new _r(_,{depth:1.49,bevelSize:.035,bevelThickness:.045,bevelSegments:2,steps:1}),e,[-.745,0,0]);p.rotation.y=Math.PI/2;const m=[-.724,.924,-.75],v=[.724,.924,-.75],S=[-.723,.891,1.13],x=[.723,.891,1.13],b=[-.609,1.414,-.43],y=[.609,1.414,-.43],w=[-.609,1.414,.72],M=[.609,1.414,.72];g([m,v,y,b]),g([x,S,w,M]),g([S,m,b,w]),g([v,x,M,y]),u(1.25,.047,1.2,0,1.423,.145,e);for(const P of[-1,1]){d([P*.72,.915,.16],[P*.618,1.41,.16],.044,e),d([P*.782,.688,-1.83],[P*.782,.688,1.83],.017,n);for(const L of[-.53,.39,1.12])d([P*.783,.426,L],[P*.783,.88,L],.009,s);for(const L of[.035,.91])u(.032,.033,.139,P*.791,.793,L,n);d([P*.74,.925,-1.23],[P*.84,1.021,-1.23],.024,n),P<0&&u(.148,.069,.061,-.846,1.037,-1.23,n),d([P*.6,.935,-.8],[P*.62,.855,-1.92],.013,n)}u(1.44,.228,.035,0,.704,-2.002,n),u(1.38,.192,.023,0,.704,-2.023,s);for(let P=0;P<6;P++)u(1.35,.008,.019,0,.627+P*.03,-2.039,n);u(.085,.09,.022,0,.704,-2.053,h);for(const P of[-1,1]){const L=P*.556;f(new En(.136,.136,.038,24),n,[L,.712,-2.036]).rotation.x=Math.PI/2,f(new En(.113,.113,.035,24),a,[L,.712,-2.057]).rotation.x=Math.PI/2,u(.173,.061,.028,L,.528,-2.023,l),u(.234,.128,.035,L,.669,2.014,n),u(.208,.101,.029,L,.669,2.037,c),u(.068,.097,.035,L+P*.066,.669,2.051,l);for(const U of[-2.058,2.047])u(.072,.133,.092,P*.457,.392,U,s)}u(1.62,.079,.112,0,.394,-2.054,n),u(1.62,.079,.112,0,.394,2.043,n),u(.3,.103,.028,0,.535,2.035,s),u(.26,.065,.012,0,.535,2.052,n),d([-.48,.93,-.759],[-.16,.955,-.745],.016,s),d([.12,.93,-.759],[.45,.955,-.745],.016,s);const E=[];for(const P of[-1.212,1.212])for(const L of[-1,1]){const U=new _e;U.position.set(L*.69,.288,P),t.add(U);const k=new _e;U.add(k);const H=(q,Y,J,it)=>f(new En(q,q,Y,20),it,[J,0,0],k).rotation.z=Math.PI/2;H(.289,.198,0,o),H(.207,.024,L*.101,e),H(.135,.027,L*.123,n),H(.054,.029,L*.142,s),E.push({pivot:U,wheel:k,steer:P<0})}const A=f(new lo(1,28),new ji({color:"#263137",transparent:!0,opacity:.24,depthWrite:!1}),[0,.031,0]);A.rotation.x=-Math.PI/2,A.scale.set(.96,2.08,1);const C=new je(49,1,.22,4800),D=new z;return{cameraFor(P,{active:L,yaw:U,speed:k,turn:H,delta:q,terrain:Y,angle:J,height:it,distance:yt}){if(t.visible=L,!L)return P;const vt=P.position.y-1.45;t.position.set(P.position.x,vt,P.position.z),t.rotation.y=-U;for(const{pivot:gt,wheel:mt,steer:V}of E)V&&(gt.rotation.y=-H*.3),mt.rotation.x-=k*q/.289;t.updateMatrixWorld(!0);const Wt=yt*Math.max(1,.72/P.aspect);return t.localToWorld(C.position.set(Math.sin(J)*Wt,it,Math.cos(J)*Wt)),C.position.y=Math.max(C.position.y,Y(C.position.x,C.position.z)+1.8),C.lookAt(t.localToWorld(D.set(0,.83,-Math.max(0,Math.cos(J))*1.1))),C.aspect!==P.aspect&&(C.aspect=P.aspect,C.updateProjectionMatrix()),C}}}const wv=new z(0,1,0),hl=new z,ta=new z;function Rn(i,t,e,n=[0,0,0]){const s=new xe(t,e);return s.position.set(...n),i.add(s),s}function Fo(i,t,e){hl.set(...t),ta.set(...e).sub(hl),i.position.copy(hl).addScaledVector(ta,.5),i.scale.y=ta.length(),i.quaternion.setFromUnitVectors(wv,ta.normalize())}function Oe(i,t,e,n,s){const o=Rn(i,new En(n,n,1,8),s);return Fo(o,t,e),o}function Ev(i){const t=new _e;t.name="Велосипед с велосипедистом",t.visible=!1,i.add(t);const e=q=>new ne({color:q,flatShading:!0}),n=e("#4ca9ab"),s=e("#1d2b2c"),o=e("#b4c1b8"),r=e("#3b4240"),a=e("#eee1ba"),l=e("#415760"),c=e("#cd9478"),h=e("#e5af59"),f=[0,.345,.54],u=[0,.92,-.38],d=[0,.39,.055],g=[0,.94,.21],_=new _e;_.position.set(...u),t.add(_);const p=.321;function m(q,Y){const J=new _e;J.position.set(...Y),q.add(J),Rn(J,new ci(p,.024,8,36),s).rotation.y=Math.PI/2,Rn(J,new ci(.297,.008,6,36),o).rotation.y=Math.PI/2,Oe(J,[-.047,0,0],[.047,0,0],.017,o);for(let it=0;it<14;it++){const yt=it*Math.PI/7;Oe(J,[it%2?.025:-.025,0,0],[0,Math.sin(yt)*.295,Math.cos(yt)*.295],.0026,o)}return J}const v=m(t,f),S=m(_,[0,-.575,-.17]);Oe(t,d,g,.027,n),Oe(t,d,[0,.78,-.36],.029,n),Oe(t,[0,.85,.195],[0,.86,-.37],.023,n),Oe(t,[0,.77,-.36],u,.036,n);for(const q of[-1,1]){const Y=[q*.046,f[1],f[2]];Oe(t,[q*.033,.8,.19],Y,.012,n),Oe(t,[q*.036,d[1],d[2]],Y,.015,n),Oe(_,[q*.036,-.15,.026],[q*.043,-.575,-.17],.016,n),Oe(_,[0,.095,.042],[q*.34,.125,.13],.014,o),Oe(_,[q*.26,.119,.112],[q*.36,.13,.134],.022,s)}Oe(_,[0,0,0],[0,.095,.042],.022,o),Rn(_,new En(.028,.031,.025,12),h,[-.23,.146,.103]),Rn(t,new Pn(1,12,8),r,[0,.95,.208]).scale.set(.082,.022,.123),Oe(t,[-.12,d[1],d[2]],[.12,d[1],d[2]],.015,o);const b=[0,1.34,-.074],y=[0,.96,.22],w=Rn(t,new Pn(1,12,8),a,[0,1.16,.065]);w.scale.set(.16,.232,.118),w.rotation.x=-.63,Rn(t,new Pn(1,12,8),l,y).scale.set(.138,.085,.104),Oe(t,[0,1.31,-.087],[0,1.45,-.169],.059,c),Rn(t,new Pn(.093,12,8),c,[0,1.49,-.167]).scale.y=1.11,Rn(t,new Pn(1,14,9),h,[0,1.554,-.178]).scale.set(.113,.075,.121),Rn(t,new Pn(1,12,8),r,[0,1.541,-.271]).scale.set(.093,.017,.041);const C=[-1,1].map(q=>{const Y=[q*.118,b[1],b[2]],J=[q*.225,1.17,-.16],it=[q*.31,1.05,-.25],yt=[q*.095,y[1],y[2]],vt=[q*.14,.71,-.21],Wt=[q*.12,d[1],d[2]];return{side:q,elbow:J,forearm:Oe(t,J,it,.031,c),sleeve:Oe(t,Y,J,.045,a),thigh:Oe(t,yt,vt,.057,l),shin:Oe(t,vt,Wt,.041,l),crankArm:Oe(t,[q*.085,d[1],d[2]],Wt,.012,o),shoe:Rn(t,new we(.084,.058,.163),r,Wt)}}),D=Rn(t,new lo(1,22),new ji({color:"#203138",transparent:!0,opacity:.16,depthWrite:!1}),[0,.027,0]);D.rotation.x=-Math.PI/2,D.scale.set(.245,.87,1);const P=new je(52,1,.18,4800),L=new z,U=new z;let k=0,H=0;return{cameraFor(q,{active:Y,yaw:J,speed:it,turn:yt,delta:vt,terrain:Wt,angle:gt,height:mt,distance:V}){if(t.visible=Y,!Y)return q;t.position.set(q.position.x,q.position.y-1.65+.12,q.position.z),t.rotation.y=-J,_.rotation.y=-yt*.34,_.updateMatrix();const N=it*vt/(p+.024);k=(k-N)%(Math.PI*2),H=(H-N*.4)%(Math.PI*2),v.rotation.x=S.rotation.x=k;for(const{side:dt,elbow:st,forearm:ut,thigh:Et,shin:F,crankArm:K,shoe:ot}of C){U.set(dt*.316,.125,.126).applyMatrix4(_.matrix),Fo(ut,st,U.toArray());const at=H+(dt>0?Math.PI:0),ft=[dt*.123,d[1]+.143*Math.cos(at),d[2]+.143*Math.sin(at)],Tt=[dt*.143,.68+.078*Math.cos(at),-.216+.035*Math.sin(at)];Fo(Et,[dt*.095,y[1],y[2]],Tt),Fo(F,Tt,ft),Fo(K,[dt*.085,d[1],d[2]],ft),ot.position.set(ft[0],ft[1]+.018,ft[2]-.038)}t.updateMatrixWorld(!0);const Z=V*.59*Math.max(1,.62/q.aspect);return t.localToWorld(P.position.set(Math.sin(gt)*Z,mt*.68,Math.cos(gt)*Z)),P.position.y=Math.max(P.position.y,Wt(P.position.x,P.position.z)+1.4),P.lookAt(t.localToWorld(L.set(0,.8,-Math.max(0,Math.cos(gt))*.52))),P.aspect!==q.aspect&&(P.aspect=q.aspect,P.updateProjectionMatrix()),P}}}const Gi=document.querySelector("#world"),fu=document.querySelector("#status"),Oo=i=>[...document.querySelectorAll(`[data-${i}]`)].filter(t=>t instanceof HTMLButtonElement),du=(i,t)=>{for(const e of Oo(i))e.setAttribute("aria-pressed",String(e.dataset[i]===t))};async function pu(i){const t=await fetch(`./data/${i}.json`);if(!t.ok)throw new Error(`Не удалось загрузить ${i} (${t.status}).`);return t.json()}function Tv(i,t){const{Vector3:e,MathUtils:n}=_0,s=dv(Gi,i,t),o=_v(i.roads),r=bv(),a=yv(s.scene),l=Ev(s.scene),c=new je(46,1,.35,4800),h=new S3(c,Gi),f=matchMedia("(prefers-reduced-motion: reduce)").matches;h.enableDamping=!f,h.dampingFactor=.13,h.minDistance=28,h.maxDistance=3300,h.maxPolarAngle=Math.PI*.48,h.zoomSpeed=.8,h.screenSpacePanning=!1;const[u,d,g,_]=i.bounds,[p,m]=i.origin,[v,S]=i.scale,x=document.querySelector("#compass"),b=document.querySelector("#coordinates"),y=document.querySelector("#vehicle-speed"),w=document.querySelector("#cartoon-style"),M=document.querySelector("#vehicle-view"),E=document.querySelector("#mode-help"),A=document.querySelector("#places"),C=document.querySelector("#venues"),D=document.querySelector("#pins"),P={orbit:"Стрелки или WASD — лететь. Тяните, чтобы повернуть карту. Колесо — масштаб.",walk:"WASD или стрелки — идти. Shift — бег. Тяните по сцене, чтобы оглянуться.",bike:"Стрелки или WASD — движение и руль. V — сменить камеру. На лестнице — пешком.",car:"↑/↓ или W/S — газ и задний ход. ←/→ или A/D — руль. V — сменить камеру.",map:"Север вверху. Тяните карту, чтобы сдвинуть её."},L={walk:{eye:1.75,fov:68},bike:{eye:1.65,fov:70,speed:6.8,reverse:2.2,steer:1.9},car:{eye:1.45,fov:73,speed:10.5,reverse:3.1,steer:1.6}},U={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},k=[{id:"paintedWaterfront",name:"Парк-отель — Анапа-Океан",position:[-376,-15],walk:{position:[-348,-36],look:[-278,-43]}},{id:"upperWaterfront",name:"Верхняя набережная",position:[-348,-13],look:[-265,-19]},{id:"lowerWaterfront",name:"Нижняя набережная",position:[-348,-36],look:[-278,-43]},{id:"queuePavilion",name:"Павильон «Очередь»",position:[-412.5,-21.7],walk:{position:[-414,-12],look:[-412,-21.7]}},{id:"pearlFountain",name:"Жемчужина Анапы",position:[-238,2],walk:{position:[-255,-5],look:[-238,2]}}],q=["paintedWaterfront","lighthouse","malaya","port","ocean","upperWaterfront","lowerWaterfront","queuePavilion","gorgippia","parkHotel","sails","pearlFountain","gates","beach"].map(B=>{const G=i.landmarks.find(xt=>xt.id===B)??k.find(xt=>xt.id===B);if(G?.id!=="sails")return G;const[nt,lt]=Zs,Q=m-lt/S,Mt=p+nt/v;return{...G,position:Zs,pinHeight:5.85,walk:{position:[-306,-22],look:Zs},osm:`https://www.openstreetmap.org/#map=19/${Q.toFixed(6)}/${Mt.toFixed(6)}`}}).filter(Boolean),Y={lighthouse:{aim:[-9,0],offset:[-146,115,102]},malaya:{aim:[-34,35],offset:[-219,151,-43]},ocean:{aim:[7,-6],offset:[-93,103,-176],raise:14},paintedWaterfront:{aim:[0,0],offset:[-55,240,-290],mapAltitude:465},upperWaterfront:{aim:[12,-10],offset:[-58,100,-155],mapAltitude:275},lowerWaterfront:{aim:[12,4],offset:[6,58,-118],mapAltitude:220},queuePavilion:{aim:[0,0],offset:[14,24,-46],mapAltitude:65},pearlFountain:{aim:[0,0],offset:[-11,16,-30],mapAltitude:52},gorgippia:{aim:[40,3],offset:[-13,94,-79],mapAltitude:127},parkHotel:{aim:[-5,-6],offset:[-97,91,-155],raise:6},sails:{aim:[15,-1],offset:[13,31,-49],mapAltitude:69}},J={"Верхний ярус":[{...k.find(B=>B.id==="queuePavilion"),id:"queueCafe",name:"Queue"},{id:"more",name:"Море. Истории о еде",position:[-533,-25],walk:{position:[-533,-35],look:[-533,-25],pitch:.08}},{id:"barBQ",name:"BAR BQ",position:[-456.65,14],walk:{position:[-450,14],look:[-456.65,14],pitch:.08}}],"Нижний ярус":[{id:"captainCafe",name:"Капитан",position:[-530,-67],walk:{position:[-534.4,-79.5],look:[-530,-67],pitch:.15}},{id:"adrian",name:"Adrian Bistro",position:[-358,-30.5],walk:{position:[-359.7,-37.4],look:[-358,-30.5],pitch:.1}},{id:"bavaria",name:"Bavaria",position:[-342.2,-30.9],walk:{position:[-340,-38.1],look:[-342.2,-30.9],pitch:.13}},{id:"prichal",name:"Причал",position:[-303,-34.35],walk:{position:[-302,-40.2],look:[-303,-34.35],pitch:.2}},{id:"parokhod",name:"Пароходъ",position:[-229.8,-52.4],walk:{position:[-232.74,-59.75],look:[-229.8,-52.4],pitch:.34}},{id:"wineSea",name:"Вино и море",position:[-175,-54],walk:{position:[-184,-48],look:[-175,-54],pitch:.2}}]};Y.queueCafe=Y.queuePavilion,Y.more={aim:[0,0],offset:[-13,17,-34],raise:1.3,mapAltitude:67},Y.barBQ={aim:[0,0],offset:[25,11,-14],raise:1.3,mapAltitude:58};for(const B of J["Нижний ярус"])Y[B.id]={aim:[0,0],offset:[-9,12,-32],raise:1.8,mapAltitude:60};Y.wineSea.offset=[-27,13,-12];const it=i.landmarks.find(B=>B.id==="gorgippia")?.position??[(u+g)/2,(d+_)/2],yt=i.landmarks.find(B=>B.id==="lighthouse")?.position??it,vt=new e,Wt=new e,gt=new e,mt=new e,V=new Set,N=new Map,Z=new Set,dt=new Map,st=[];let ut="orbit",Et=null,F=0,K=0,ot=0,at=0;const ft=new Set,Tt=()=>ft.has(ut);let Dt=-.43,Ut=2.8,kt=5.9,O=null,ee="";function $t(B,G){const nt=(m-G/S).toFixed(5),lt=(p+B/v).toFixed(5),Q=`${nt}/${lt}`;Q!==ee&&(ee=Q,b.textContent=`${nt}° N  ${lt}° E`,b.href=`https://www.openstreetmap.org/#map=18/${Q}`,b.title="Показать эту точку в OpenStreetMap")}function I(B,G=!1){const nt=G?Y[Et?.id]:void 0,lt=ut==="orbit"||nt?.mapAltitude?nt:void 0,Q=B[0]+(lt?.aim[0]??0),Mt=B[1]+(lt?.aim[1]??0),xt=s.terrain(Q,Mt)+(lt?.raise??0);if(h.target.set(Q,xt,Mt),ut==="map"){const zt=(lt?.mapAltitude??(G?440:1220))/Math.min(1,c.aspect*(lt?.mapAltitude?.7:1.2));c.position.set(Q,xt+Math.min(3200,zt),Mt+.1)}else{const zt=1/Math.min(1,c.aspect*(lt?.mapAltitude?.67:1.4)),[Xt,ie,he]=lt?.offset??(G?[-148,150,-209]:[-345,350,-485]);c.position.set(Q+Xt*zt,xt+ie*zt,Mt+he*zt)}h.update()}function T(B,G){if(ut==="bike"&&o.bicycleAt(B,G)==="blocked")return null;const nt=ut==="car"?o.carAt(B,G):null;if(ut==="car"&&!nt)return null;const lt=s.walkHeight(B,G);return lt===null||!nt?lt:lt+(nt.bridge?.85:.31)}function $([B,G],nt){let lt=null,Q=1/0;const Mt=s.terrain(B,G);for(const{points:xt,kind:zt}of i.roads)if(["footway","pedestrian","path","living_street","steps"].includes(zt))for(let Xt=1;Xt<xt.length;Xt++){const[ie,he]=xt[Xt-1],[Mn,dn]=xt[Xt],fi=Mn-ie,Di=dn-he,fo=fi*fi+Di*Di;if(fo<.01||nt&&zt!=="pedestrian")continue;const xr=((B-ie)*fi+(G-he)*Di)/fo,vr=Math.sqrt(fo);for(const di of nt?[-42,-30,30,42]:[0,-8,8]){const xs=n.clamp(xr+di/vr,0,1),pi=ie+fi*xs,mi=he+Di*xs,Jn=Math.hypot(pi-B,mi-G);if(Jn<(nt?24:5)||Jn>90)continue;const po=Jn+(nt?4*Math.abs(s.terrain(pi,mi)-Mt):0);po>=Q||T(pi,mi)!==null&&(nt&&![4,10,18].every(ts=>T(pi+(B-pi)*ts/Jn,mi+(G-mi)*ts/Jn)!==null)||(Q=po,lt=[pi,mi]))}}return lt}function j(B,G){const[nt,lt]=G?.look??B;let Q=G&&T(...G.position)!==null?G.position:null;Q??=$(B,B===yt)??$(B,!1);for(let xt=4;!Q&&xt<=96;xt+=4)for(let zt=0;!Q&&zt<Math.PI*2;zt+=Math.PI/8){const Xt=nt+Math.cos(zt)*xt,ie=lt+Math.sin(zt)*xt;T(Xt,ie)!==null&&(Q=[Xt,ie])}if(!Q)return!1;c.position.set(Q[0],T(...Q)+L[ut].eye,Q[1]),F=Math.atan2(nt-Q[0],Q[1]-lt);const Mt=s.terrain(nt,lt)+(B===yt?9:1.6);return K=G?.pitch??n.clamp(Math.atan2(Mt-c.position.y,Math.hypot(nt-Q[0],lt-Q[1])),-.22,.32),!0}function ct(B){const G=o.nearestCarStart(B,T);if(!G)return!1;const{x:nt,z:lt,height:Q,heading:Mt}=G;F=Mt+(Math.cos(F-Mt)<0?Math.PI:0);const xt=dn=>T(nt+Math.sin(F)*dn,lt-Math.cos(F)*dn),zt=dn=>[1.5,3,5].find(fi=>xt(fi*dn)===null)??6;zt(-1)>zt(1)&&(F+=Math.PI);const Xt=2.04,ie=Math.sin(F)*Xt,he=-Math.cos(F)*Xt,Mn=T(nt+ie,lt+he);return K=0,T(nt-ie,lt-he)===null&&Mn!==null?c.position.set(nt+ie,Mn+L.car.eye,lt+he):c.position.set(nt,Q+L.car.eye,lt),!0}function bt(B){Et=B,ot=0;for(const[G,nt]of dt)nt.setAttribute("aria-pressed",String(G===B?.id));for(const{marker:G,place:nt}of st)G.classList.toggle("selected",nt===B);if(ut==="car")ct(B?.position??it);else if(L[ut]){const G=B?.id==="gorgippia"?ax:B?.walk??(B?.look?B:null);j(B?.position??yt,G)||j(yt)}else I(B?.position??it,!!B)}function wt(B){const G=L[ut]?[c.position.x,c.position.z]:null;if(ut=B,O=null,ot=0,V.clear(),N.clear(),Z.clear(),h.enabled=!L[B],h.enableRotate=B==="orbit",h.mouseButtons.LEFT=B==="map"?Ti.PAN:Ti.ROTATE,h.touches.ONE=B==="map"?oi.PAN:oi.ROTATE,h.touches.TWO=oi.DOLLY_PAN,h.minPolarAngle=0,h.maxPolarAngle=B==="map"?1e-4:Math.PI*.48,c.fov=L[B]?.fov??46,c.updateProjectionMatrix(),document.body.dataset.mode=B,y.hidden=B!=="bike"&&B!=="car",ht(),du("mode",B),G&&L[B]){if(B==="car"&&ct(G))return;const nt=T(...G);if(nt!==null){c.position.y=nt+L[B].eye;return}}bt(Et)}q.forEach((B,G)=>{const nt=document.createElement("button");nt.type="button",nt.className="place",nt.setAttribute("aria-pressed","false");const lt=document.createElement("span");lt.className="place-index",lt.textContent=String(G+1).padStart(2,"0"),lt.setAttribute("aria-hidden","true");const Q=document.createElement("span");if(Q.className="place-name",Q.textContent=B.name,nt.append(lt,Q),nt.addEventListener("click",()=>bt(B)),A.append(nt),dt.set(B.id,nt),!B.osm)return;const Mt=document.createElement("a");Mt.className="map-pin",Mt.href=B.osm,Mt.target="_blank",Mt.rel="noopener noreferrer",Mt.setAttribute("aria-label",`${B.name} в OpenStreetMap`),Mt.title=`${B.name} в OpenStreetMap`;const xt=document.createElement("span");xt.textContent=lt.textContent;const zt=document.createElement("strong");zt.textContent=B.name,Mt.append(xt,zt),D.append(Mt),st.push({marker:Mt,place:B})});for(const[B,G]of Object.entries(J)){const nt=document.createElement("h3");nt.textContent=B,C.append(nt);for(const lt of G){const Q=document.createElement("button");Q.type="button",Q.className="place",Q.setAttribute("aria-pressed","false"),Q.textContent=lt.name,Q.addEventListener("click",()=>bt(lt)),C.append(Q),dt.set(lt.id,Q)}}for(const B of Oo("mode"))B.addEventListener("click",()=>wt(B.dataset.mode));w.addEventListener("click",()=>{const B=w.getAttribute("aria-pressed")!=="true";w.setAttribute("aria-pressed",String(B)),s.setCartoon(B)});function ht(){M.hidden=ut!=="bike"&&ut!=="car",M.setAttribute("aria-pressed",String(Tt())),M.textContent=Tt()?ut==="car"?"Камера из салона":"Камера от первого лица":"Камера снаружи",E.textContent=Tt()?"Стрелки или WASD — езда. Тяните по сцене, чтобы повернуть камеру. V — вид от первого лица.":P[ut]}function pt(){Tt()?ft.delete(ut):ft.add(ut),ht()}M.addEventListener("click",pt);for(const B of Oo("light"))B.addEventListener("click",()=>{const G=B.dataset.light;du("light",G),s.light(G)});for(const B of Oo("action"))B.addEventListener("click",()=>{const G=B.dataset.action;if(G==="reset"){bt(q.find(Q=>Q.id==="paintedWaterfront"));return}const nt=G==="zoom-in";if(Tt()){kt=n.clamp(kt+(nt?-1:1),3.8,9);return}if(L[ut]){c.fov=n.clamp(c.fov+(nt?-8:8),42,82),c.updateProjectionMatrix();return}vt.copy(c.position).sub(h.target);const lt=n.clamp(vt.length()*(nt?.75:1.33),h.minDistance,h.maxDistance);c.position.copy(h.target).add(vt.setLength(lt)),h.update()});for(const B of Oo("move")){const G=B.dataset.move;B.addEventListener("pointerdown",nt=>{B.setPointerCapture(nt.pointerId),N.set(nt.pointerId,G)});for(const nt of["pointerup","pointercancel","lostpointercapture"])B.addEventListener(nt,lt=>N.delete(lt.pointerId));B.addEventListener("click",nt=>{nt.detail===0&&Z.add(G)})}Gi.addEventListener("pointerdown",B=>{!L[ut]||O!==null||(O={id:B.pointerId,x:B.clientX,y:B.clientY},Gi.setPointerCapture(O.id))}),Gi.addEventListener("pointermove",B=>{if(B.pointerId!==O?.id)return;const G=B.clientX-O.x,nt=B.clientY-O.y;Tt()?(Dt-=G*.009,Ut=n.clamp(Ut+nt*.018,1.55,6)):(F+=G*.003,K=n.clamp(K-nt*.003,-1.33,1.33)),O.x=B.clientX,O.y=B.clientY});for(const B of["pointerup","pointercancel","lostpointercapture"])Gi.addEventListener(B,G=>{O?.id===G.pointerId&&(O=null)});window.addEventListener("keydown",B=>{const G=U[B.code],nt=ut==="walk"&&(B.code==="ShiftLeft"||B.code==="ShiftRight"),lt=(ut==="car"||ut==="bike")&&B.code==="KeyV";if(!(ut==="map"||!G&&!nt&&!lt||B.defaultPrevented||B.isComposing||B.altKey||B.ctrlKey||B.metaKey)&&!(B.target instanceof HTMLElement&&(B.target.isContentEditable||B.target.matches("input, select, textarea")))){if(lt){B.preventDefault(),B.repeat||pt();return}V.add(B.code),G&&(B.preventDefault(),B.repeat||Z.add(G))}}),window.addEventListener("keyup",B=>V.delete(B.code)),window.addEventListener("blur",()=>{V.clear(),N.clear(),Z.clear(),ot=0,O=null});function At(){const B=Math.max(1,Gi.clientWidth),G=Math.max(1,Gi.clientHeight);s.renderer.setSize(B,G,!1),c.aspect=B/G,c.updateProjectionMatrix()}function Ht(){const B=new Set(Z);for(const G of V)U[G]&&B.add(U[G]);for(const G of N.values())B.add(G);return[Number(B.has("forward"))-Number(B.has("back")),Number(B.has("right"))-Number(B.has("left"))]}function Ct(B,G,nt,lt){const Q=c.position,Mt=ut==="car"?.65:.4,xt=Math.max(1,Math.ceil(Math.hypot(B,G)/.15));function zt(Xt,ie){const he=T(Xt,ie);return he===null||Math.abs(he-nt)>Mt?!1:(Q.x=Xt,Q.z=ie,nt=he,!0)}for(let Xt=0;Xt<xt;Xt++)if(lt)zt(Q.x+B/xt,Q.z),zt(Q.x,Q.z+G/xt);else if(!zt(Q.x+B/xt,Q.z+G/xt)){ot=0;break}return nt}function Rt(B){const[G,nt]=Ht();at=nt;const lt=c.position,Q=L[ut];let Mt=T(lt.x,lt.z);if(ut==="walk"&&(G||nt)){const xt=V.has("ShiftLeft")||V.has("ShiftRight"),Xt=(Z.size?.46:(xt?7.8:4.8)*B)/Math.hypot(nt,G),ie=(Math.sin(F)*G+Math.cos(F)*nt)*Xt,he=(-Math.cos(F)*G+Math.sin(F)*nt)*Xt;Mt=Ct(ie,he,Mt,!0)}else if(ut!=="walk"){const xt=ut==="bike"&&o.bicycleAt(lt.x,lt.z)==="push",zt=xt?2:Q.speed,Xt=G*(G<0?Math.min(zt,Q.reverse):zt),ie=Z.size?Math.max(B,.06):B;ot=n.clamp(n.damp(ot,Xt,Xt===0?12:5,ie),-zt,zt);const he=ot<-.1;F+=nt*Q.steer*ie*(he?-1:1);const Mn=ot*ie;Math.abs(Mn)>1e-4&&(Mt=Ct(Math.sin(F)*Mn,-Math.cos(F)*Mn,Mt,xt));const dn=`${Math.round(Math.abs(ot)*3.6)} км/ч${xt?" · пешком":""}`;y.textContent!==dn&&(y.textContent=dn)}Mt!==null&&(lt.y=n.damp(lt.y,Mt+Q.eye,18,B)),Wt.set(Math.sin(F)*Math.cos(K),Math.sin(K),-Math.cos(F)*Math.cos(K)),c.lookAt(Wt.add(c.position))}function Gt(B){h.update();let{x:G,z:nt}=h.target;if(ut==="orbit"&&(V.size||Z.size||N.size)){const[lt,Q]=Ht(),Mt=Math.hypot(lt,Q);if(Mt){const zt=n.clamp(c.position.distanceTo(h.target)*.38,12,180)*(Z.size?Math.max(B,.08):B)/Mt;vt.copy(h.target).sub(c.position).setY(0).normalize(),G+=(vt.x*lt-vt.z*Q)*zt,nt+=(vt.z*lt+vt.x*Q)*zt}}G=n.clamp(G,u,g),nt=n.clamp(nt,d,_),c.position.x+=G-h.target.x,c.position.z+=nt-h.target.z,h.target.x=G,h.target.z=nt}At(),window.addEventListener("resize",At),wt("orbit"),bt(q.find(B=>B.id==="paintedWaterfront"));const qt=new URLSearchParams(window.location.search),Kt=qt.get("mode");["map","walk","bike","car"].includes(Kt)&&wt(Kt),qt.get("camera")==="outside"&&(ut==="bike"||ut==="car")&&pt();let X=performance.now();s.renderer.setAnimationLoop(B=>{const G=Math.min((B-X)/1e3,.05);X=B,L[ut]?Rt(G):Gt(G),Z.clear(),c.getWorldDirection(gt);const nt=ut==="map"?0:-Math.atan2(gt.x,-gt.z);x.style.setProperty("--north",`${nt}rad`);const lt=L[ut]?c.position:h.target;$t(lt.x,lt.z);for(const{marker:ie,place:he}of st){const[Mn,dn]=he.position;mt.set(Mn,s.terrain(Mn,dn)+(he.pinHeight??1.2),dn).project(c),ie.hidden=!!L[ut]||mt.z<-1||mt.z>1||Math.abs(mt.x)>.97||Math.abs(mt.y)>.92,ie.hidden||(ie.style.left=`${(mt.x+1)*50}%`,ie.style.top=`${(1-mt.y)*50}%`)}const Q=f?0:B/1e3,Mt=Tt(),xt={yaw:F,speed:ot,turn:at,delta:G,terrain:s.terrain,angle:Dt,height:Ut,distance:kt},zt=a.cameraFor(c,{...xt,active:ut==="car"&&Mt}),Xt=l.cameraFor(zt,{...xt,active:ut==="bike"&&Mt});s.render(Xt,Q),r.render(s.renderer,{mode:Mt?"":ut,aspect:c.aspect,turn:at,speed:ot,time:Q,delta:G,reducedMotion:f})})}let mu="Не удалось загрузить данные Анапы. Перезагрузите страницу.";try{const[i,t]=await Promise.all([pu("anapa"),pu("elevation")]);i.scale??=[111320*Math.cos(ae.degToRad(i.origin[1])),111132],mu="Не удалось открыть 3D-карту. Проверьте, доступен ли WebGL 2, и перезагрузите страницу.",Tv(i,t),fu.hidden=!0}catch(i){console.error(i),fu.textContent=mu}
