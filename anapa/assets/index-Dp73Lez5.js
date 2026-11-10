(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Ac="186",Vi={ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rf=0,$l=1,af=2,ir=1,cf=2,oo=3,ui=0,un=1,Ze=2,Ti=0,ao=1,go=2,Zl=3,Kl=4,lf=5,ys=100,hf=101,uf=102,ff=103,df=104,pf=200,mf=201,gf=202,_f=203,x0=204,v0=205,xf=206,vf=207,Mf=208,Sf=209,yf=210,bf=211,wf=212,Ef=213,Tf=214,Na=0,Fa=1,Oa=2,_o=3,Ba=4,za=5,ka=6,Ga=7,Ur=0,Af=1,Rf=2,fi=0,M0=1,S0=2,y0=3,b0=4,w0=5,E0=6,T0=7,A0=300,hs=301,As=302,sr=303,wa=304,Nr=306,xr=1e3,li=1001,Rs=1002,Ke=1003,Rc=1004,Xo=1005,hn=1006,Ea=1007,rs=1008,kn=1009,R0=1010,C0=1011,xo=1012,Cc=1013,di=1014,ti=1015,pi=1016,Pc=1017,Lc=1018,vo=1020,P0=35902,L0=35899,D0=1021,I0=1022,ei=1023,Pi=1026,as=1027,Dc=1028,Ic=1029,us=1030,Uc=1031,Nc=1033,or=33776,rr=33777,ar=33778,cr=33779,Ha=35840,Va=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,$a=37496,Za=37488,Ka=37489,vr=37490,Ja=37491,Qa=37808,ja=37809,tc=37810,ec=37811,nc=37812,ic=37813,sc=37814,oc=37815,rc=37816,ac=37817,cc=37818,lc=37819,hc=37820,uc=37821,fc=36492,dc=36494,pc=36495,mc=36283,gc=36284,Mr=36285,_c=36286,Cf=3200,Sr=0,Pf=1,Oi="",je="srgb",yr="srgb-linear",br="linear",be="srgb",Ta=7680,Lf=519,Df=512,If=513,Uf=514,Fc=515,Nf=516,Ff=517,Oc=518,Of=519,U0=35044,Bf=35048,Jl="300 es",hi=2e3,Mo=2001;function Yd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zf(){const i=wr("canvas");return i.style.display="block",i}const hh={};function Er(...i){const t="THREE."+i.shift();console.log(t,...i)}function kf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function te(...i){i=kf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function pe(...i){i=kf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ws(...i){const t=i.join(" ");t in hh||(hh[t]=!0,te(...i))}function $d(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Zd={[Na]:Fa,[Oa]:ka,[Ba]:Ga,[_o]:za,[Fa]:Na,[ka]:Oa,[Ga]:Ba,[za]:_o};class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uh=1234567;const lr=Math.PI/180,Tr=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function N0(i,t){return(i%t+t)%t}function Kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jd(i,t,e){return i!==t?(e-i)/(t-i):0}function hr(i,t,e){return(1-e)*i+e*t}function Qd(i,t,e,n){return hr(i,t,1-Math.exp(-e*n))}function jd(i,t=1){return t-Math.abs(N0(i,t*2)-t)}function tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ep(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function np(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ip(i,t){return i+Math.random()*(t-i)}function sp(i){return i*(.5-Math.random())}function op(i){i!==void 0&&(uh=i);let t=uh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rp(i){return i*lr}function ap(i){return i*Tr}function cp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function up(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),u=r((t+n)/2),f=o((t-n)/2),h=r((t-n)/2),d=o((n-t)/2),p=r((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*u,a*c);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ue={DEG2RAD:lr,RAD2DEG:Tr,generateUUID:Ai,clamp:le,euclideanModulo:N0,mapLinear:Kd,inverseLerp:Jd,lerp:hr,damp:Qd,pingpong:jd,smoothstep:tp,smootherstep:ep,randInt:np,randFloat:ip,randFloatSpread:sp,seededRandom:op,degToRad:rp,radToDeg:ap,isPowerOfTwo:cp,ceilPowerOfTwo:lp,floorPowerOfTwo:hp,setQuaternionFromProperEuler:up,normalize:Ee,denormalize:ci};var po;let Mt=(po=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},po.prototype.isVector2=!0,po);class Xi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=o[r+0],d=o[r+1],p=o[r+2],_=o[r+3];if(f!==_||l!==h||c!==d||u!==p){let g=l*h+c*d+u*p+f*_;g<0&&(h=-h,d=-d,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){const x=Math.acos(g),M=Math.sin(x);m=Math.sin(m*x)/M,a=Math.sin(a*x)/M,l=l*m+h*a,c=c*m+d*a,u=u*m+p*a,f=f*m+_*a}else{l=l*m+h*a,c=c*m+d*a,u=u*m+p*a,f=f*m+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=o[r],h=o[r+1],d=o[r+2],p=o[r+3];return t[e]=a*p+u*f+l*d-c*h,t[e+1]=l*p+u*h+c*f-a*d,t[e+2]=c*p+u*d+a*h-l*f,t[e+3]=u*p-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(o/2),h=l(n/2),d=l(s/2),p=l(o/2);switch(r){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}var mo;let O=(mo=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),u=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*u,this.y=n+l*u+a*c-o*f,this.z=s+l*f+o*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mo.prototype.isVector3=!0,mo);const ol=new O,fh=new Xi,rh=class rh{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],_=s[0],g=s[3],m=s[6],x=s[1],M=s[4],v=s[7],y=s[2],b=s[5],w=s[8];return o[0]=r*_+a*x+l*y,o[3]=r*g+a*M+l*b,o[6]=r*m+a*v+l*w,o[1]=c*_+u*x+f*y,o[4]=c*g+u*M+f*b,o[7]=c*m+u*v+f*w,o[2]=h*_+d*x+p*y,o[5]=h*g+d*M+p*b,o[8]=h*m+d*v+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*r-a*c,h=a*l-u*o,d=c*o-r*l,p=e*f+n*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*r)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rl.makeScale(t,e)),this}rotate(t){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rh.prototype.isMatrix3=!0;let se=rh;const rl=new se,dh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fp(){const i={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===be&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===be&&(s.r=co(s.r),s.g=co(s.g),s.b=co(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:be,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}const de=fp();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class Gf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=wr("canvas")),Us.width=t.width,Us.height=t.height;const s=Us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Wi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dp=0;class Bc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(al(s[r].image)):o.push(al(s[r]))}else o=al(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}let pp=0;const cl=new O;class an extends qi{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=li,s=li,o=hn,r=rs,a=ei,l=kn,c=an.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ai(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==A0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xr:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Rs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xr:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Rs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=A0;an.DEFAULT_ANISOTROPY=1;const ah=class ah{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(d+1)/2,y=(m+1)/2,b=(u+h)/4,w=(f+_)/4,S=(p+g)/4;return M>v&&M>y?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=b/n,o=w/n):v>y?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=b/s,o=S/s):y<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(y),n=w/o,s=S/o),this.set(n,s,o,e),this}let x=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;let Ge=ah;class Hf extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new an(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Hf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class F0 extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vf extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Tc=class Tc{constructor(t,e,n,s,o,r,a,l,c,u,f,h,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,u,f,h,d,p,_,g)}set(t,e,n,s,o,r,a,l,c,u,f,h,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),o=1/Ns.setFromMatrixColumn(t,1).length(),r=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const h=r*u,d=r*f,p=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=p+d*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,p=c*u,_=c*f;e[0]=h+_*a,e[4]=p*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-a,e[2]=d*a-p,e[6]=_+h*a,e[10]=r*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,p=c*u,_=c*f;e[0]=h-_*a,e[4]=-r*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*u,e[9]=_-h*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const h=r*u,d=r*f,p=a*u,_=a*f;e[0]=l*u,e[4]=p*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,d=r*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=p*f+d,e[1]=f,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+p,e[10]=h-_*f}else if(t.order==="XZY"){const h=r*l,d=r*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=r*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,gp)}lookAt(t,e,n){const s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ji.crossVectors(n,Vn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ji.crossVectors(n,Vn)),Ji.normalize(),zr.crossVectors(Vn,Ji),s[0]=Ji.x,s[4]=zr.x,s[8]=Vn.x,s[1]=Ji.y,s[5]=zr.y,s[9]=Vn.y,s[2]=Ji.z,s[6]=zr.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],x=n[3],M=n[7],v=n[11],y=n[15],b=s[0],w=s[4],S=s[8],E=s[12],T=s[1],P=s[5],L=s[9],C=s[13],R=s[2],I=s[6],N=s[10],F=s[14],G=s[3],H=s[7],K=s[11],j=s[15];return o[0]=r*b+a*T+l*R+c*G,o[4]=r*w+a*P+l*I+c*H,o[8]=r*S+a*L+l*N+c*K,o[12]=r*E+a*C+l*F+c*j,o[1]=u*b+f*T+h*R+d*G,o[5]=u*w+f*P+h*I+d*H,o[9]=u*S+f*L+h*N+d*K,o[13]=u*E+f*C+h*F+d*j,o[2]=p*b+_*T+g*R+m*G,o[6]=p*w+_*P+g*I+m*H,o[10]=p*S+_*L+g*N+m*K,o[14]=p*E+_*C+g*F+m*j,o[3]=x*b+M*T+v*R+y*G,o[7]=x*w+M*P+v*I+y*H,o[11]=x*S+M*L+v*N+y*K,o[15]=x*E+M*C+v*F+y*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],x=l*d-c*h,M=a*d-c*f,v=a*h-l*f,y=r*d-c*u,b=r*h-l*u,w=r*f-a*u;return e*(_*x-g*M+m*v)-n*(p*x-g*y+m*b)+s*(p*M-_*y+m*w)-o*(p*v-_*b+g*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(r*u-a*c)-n*(o*u-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],x=e*a-n*r,M=e*l-s*r,v=e*c-o*r,y=n*l-s*a,b=n*c-o*a,w=s*c-o*l,S=u*_-f*p,E=u*g-h*p,T=u*m-d*p,P=f*g-h*_,L=f*m-d*_,C=h*m-d*g,R=x*C-M*L+v*P+y*T-b*E+w*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=(a*C-l*L+c*P)*I,t[1]=(s*L-n*C-o*P)*I,t[2]=(_*w-g*b+m*y)*I,t[3]=(h*b-f*w-d*y)*I,t[4]=(l*T-r*C-c*E)*I,t[5]=(e*C-s*T+o*E)*I,t[6]=(g*v-p*w-m*M)*I,t[7]=(u*w-h*v+d*M)*I,t[8]=(r*L-a*T+c*S)*I,t[9]=(n*T-e*L-o*S)*I,t[10]=(p*b-_*v+m*x)*I,t[11]=(f*v-u*b-d*x)*I,t[12]=(a*E-r*P-l*S)*I,t[13]=(e*P-n*E+s*S)*I,t[14]=(_*M-p*y-g*x)*I,t[15]=(u*y-f*M+h*x)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,u=r+r,f=a+a,h=o*c,d=o*u,p=o*f,_=r*u,g=r*f,m=a*f,x=l*c,M=l*u,v=l*f,y=n.x,b=n.y,w=n.z;return s[0]=(1-(_+m))*y,s[1]=(d+v)*y,s[2]=(p-M)*y,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(h+m))*b,s[6]=(g+x)*b,s[7]=0,s[8]=(p+M)*w,s[9]=(g-x)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Ns.set(s[0],s[1],s[2]).length();const a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();o<0&&(r=-r),ii.copy(this);const c=1/r,u=1/a,f=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,e.setFromRotationMatrix(ii),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=hi,l=!1){const c=this.elements,u=2*o/(e-t),f=2*o/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,_;if(l)p=o/(r-o),_=r*o/(r-o);else if(a===hi)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Mo)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=hi,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let p,_;if(l)p=1/(r-o),_=r/(r-o);else if(a===hi)p=-2/(r-o),_=-(r+o)/(r-o);else if(a===Mo)p=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Tc.prototype.isMatrix4=!0;let Le=Tc;const Ns=new O,ii=new Le,mp=new O(0,0,0),gp=new O(1,1,1),Ji=new O,zr=new O,Vn=new O,mh=new Le,gh=new Xi;class Li{constructor(t=0,e=0,n=0,s=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,d),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gh.setFromEuler(this),this.setFromQuaternion(gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class O0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _p=0;const _h=new O,Fs=new Xi,Di=new Le,kr=new O,Lo=new O,xp=new O,vp=new Xi,xh=new O(1,0,0),vh=new O(0,1,0),Mh=new O(0,0,1),Sh={type:"added"},Mp={type:"removed"},Os={type:"childadded",child:null},ll={type:"childremoved",child:null};class Se extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new O,e=new Li,n=new Xi,s=new O(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new se}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(Mh,t)}translateOnAxis(t,e){return _h.copy(t).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(Mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Lo,kr,this.up):Di.lookAt(kr,Lo,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Di),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),Os.child=t,this.dispatchEvent(Os),Os.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mp),ll.child=t,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,xp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),h=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Se.DEFAULT_UP=new O(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ge extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=N0(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=hl(r,o,t+1/3),this.g=hl(r,o,t),this.b=hl(r,o,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function n(o){o!==void 0&&parseFloat(o)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=Wf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return de.workingToColorSpace(gn.copy(this),t),Math.round(le(gn.r*255,0,255))*65536+Math.round(le(gn.g*255,0,255))*256+Math.round(le(gn.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(gn.copy(this),e);const n=gn.r,s=gn.g,o=gn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=u<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=je){de.workingToColorSpace(gn.copy(this),t);const e=gn.r,n=gn.g,s=gn.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Gr);const n=hr(Qi.h,Gr.h,e),s=hr(Qi.s,Gr.s,e),o=hr(Qi.l,Gr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new Ht;Ht.NAMES=Wf;class zc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class B0 extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const si=new O,Ii=new O,ul=new O,Ui=new O,Bs=new O,zs=new O,yh=new O,fl=new O,dl=new O,pl=new O,ml=new Ge,gl=new Ge,_l=new Ge;class Yn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){si.subVectors(s,e),Ii.subVectors(n,e),ul.subVectors(t,e);const r=si.dot(si),a=si.dot(Ii),l=si.dot(ul),c=Ii.dot(Ii),u=Ii.dot(ul),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,p=(r*u-a*l)*h;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ui.x),l.addScaledVector(r,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ml,o.x),r.addScaledVector(gl,o.y),r.addScaledVector(_l,o.z),r}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Ii.subVectors(t,e),si.cross(Ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Bs.subVectors(s,n),zs.subVectors(o,n),fl.subVectors(t,n);const l=Bs.dot(fl),c=zs.dot(fl);if(l<=0&&c<=0)return e.copy(n);dl.subVectors(t,s);const u=Bs.dot(dl),f=zs.dot(dl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Bs,r);pl.subVectors(t,o);const d=Bs.dot(pl),p=zs.dot(pl);if(p>=0&&d<=p)return e.copy(o);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(zs,a);const g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return yh.subVectors(o,s),a=(f-u)/(f-u+(d-p)),e.copy(s).addScaledVector(yh,a);const m=1/(g+_+h);return r=_*m,a=h*m,e.copy(n).addScaledVector(Bs,r).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fs{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,oi):oi.fromBufferAttribute(o,r),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),Vr.subVectors(this.max,Do),ks.subVectors(t.a,Do),Gs.subVectors(t.b,Do),Hs.subVectors(t.c,Do),ji.subVectors(Gs,ks),ts.subVectors(Hs,Gs),ps.subVectors(ks,Hs);let e=[0,-ji.z,ji.y,0,-ts.z,ts.y,0,-ps.z,ps.y,ji.z,0,-ji.x,ts.z,0,-ts.x,ps.z,0,-ps.x,-ji.y,ji.x,0,-ts.y,ts.x,0,-ps.y,ps.x,0];return!xl(e,ks,Gs,Hs,Vr)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,ks,Gs,Hs,Vr))?!1:(Wr.crossVectors(ji,ts),e=[Wr.x,Wr.y,Wr.z],xl(e,ks,Gs,Hs,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ni=[new O,new O,new O,new O,new O,new O,new O,new O],oi=new O,Hr=new fs,ks=new O,Gs=new O,Hs=new O,ji=new O,ts=new O,ps=new O,Do=new O,Vr=new O,Wr=new O,ms=new O;function xl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ms.fromArray(i,o);const a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $e=new O,Xr=new Mt;let yp=0;class $n extends qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=U0,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),o=Ee(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class z0 extends $n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class k0 extends $n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends $n{constructor(t,e,n){super(new Float32Array(t),e,n)}}const bp=new fs,Io=new O,vl=new O;class Eo{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const e=Io.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Io,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(vl)),this.expandByPoint(Io.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let wp=0;const Jn=new Le,Ml=new Se,Vs=new O,Wn=new fs,Uo=new fs,sn=new O;class Ae extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yd(t)?k0:z0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new se().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Wn.min,Uo.min),Wn.expandByPoint(sn),sn.addVectors(Wn.max,Uo.max),Wn.expandByPoint(sn)):(Wn.expandByPoint(Uo.min),Wn.expandByPoint(Uo.max))}Wn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)sn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(sn));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),sn.add(Vs)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new $n(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new O,l[S]=new O;const c=new O,u=new O,f=new O,h=new Mt,d=new Mt,p=new Mt,_=new O,g=new O;function m(S,E,T){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,T),h.fromBufferAttribute(o,S),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,T),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),a[S].add(_),a[E].add(_),a[T].add(_),l[S].add(g),l[E].add(g),l[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let S=0,E=x.length;S<E;++S){const T=x[S],P=T.start,L=T.count;for(let C=P,R=P+L;C<R;C+=3)m(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new O,v=new O,y=new O,b=new O;function w(S){y.fromBufferAttribute(s,S),b.copy(y);const E=a[S];M.copy(E),M.sub(y.multiplyScalar(y.dot(E))).normalize(),v.crossVectors(b,E);const P=v.dot(l[S])<0?-1:1;r.setXYZW(S,M.x,M.y,M.z,P)}for(let S=0,E=x.length;S<E;++S){const T=x[S],P=T.start,L=T.count;for(let C=P,R=P+L;C<R;C+=3)w(t.getX(C+0)),w(t.getX(C+1)),w(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new O,o=new O,r=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(t)for(let h=0,d=t.count;h<d;h+=3){const p=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),u.subVectors(r,o),f.subVectors(s,o),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,o),f.subVectors(s,o),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[p++]=c[d++]}return new $n(h,u,f)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const o=t.morphAttributes;for(const c in o){const u=[],f=o[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=U0,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Tn=new O;class Ar{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ci(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),o=Ee(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new $n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ar(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sl=new O,Ep=new O,Tp=new se;class yi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Sl.subVectors(n,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Sl),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tp.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Ap=0;class ds extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=ao,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=x0,this.blendDst=v0,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class G0 extends ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ws;const No=new O,Xs=new O,qs=new O,Ys=new Mt,Fo=new Mt,qf=new Le,qr=new O,Oo=new O,Yr=new O,bh=new Mt,yl=new Mt,wh=new Mt;class Yf extends Se{constructor(t=new G0){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xf(e,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Ar(n,3,0,!1)),Ws.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=Ws,this.material=t,this.center=new Mt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),qf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;$r(qr.set(-.5,-.5,0),qs,r,Xs,s,o),$r(Oo.set(.5,-.5,0),qs,r,Xs,s,o),$r(Yr.set(.5,.5,0),qs,r,Xs,s,o),bh.set(0,0),yl.set(1,0),wh.set(1,1);let a=t.ray.intersectTriangle(qr,Oo,Yr,!1,No);if(a===null&&($r(Oo.set(-.5,.5,0),qs,r,Xs,s,o),yl.set(0,1),a=t.ray.intersectTriangle(qr,Yr,Oo,!1,No),a===null))return;const l=t.ray.origin.distanceTo(No);l<t.near||l>t.far||e.push({distance:l,point:No.clone(),uv:Yn.getInterpolation(No,qr,Oo,Yr,bh,yl,wh,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function $r(i,t,e,n,s,o){Ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fo.x=o*Ys.x-s*Ys.y,Fo.y=s*Ys.x+o*Ys.y):Fo.copy(Ys),i.copy(t),i.x+=Fo.x,i.y+=Fo.y,i.applyMatrix4(qf)}const Fi=new O,bl=new O,Zr=new O,Kr=new O;class H0{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bl.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Kr.copy(this.origin).sub(bl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Zr),a=Kr.dot(this.direction),l=-Kr.dot(Zr),c=Kr.lengthSq(),u=Math.abs(1-r*r);let f,h,d,p;if(u>0)if(f=r*l-a,h=r*a-l,p=o*u,f>=0)if(h>=-p)if(h<=p){const _=1/u;f*=_,h*=_,d=f*(f+r*h+2*a)+h*(r*f+h+2*l)+c}else h=o,f=Math.max(0,-(r*h+a)),d=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(r*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-r*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-o,-l),o),d=h*(h+2*l)+c):(f=Math.max(0,-(r*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+h*(h+2*l)+c);else h=r>0?-o:o,f=Math.max(0,-(r*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(bl).addScaledVector(Zr,h),d}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);const n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(o=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(o=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-r.x,h=t.y-r.y,d=t.z-r.z,p=e.x-r.x,_=e.y-r.y,g=e.z-r.z,m=n.x-r.x,x=n.y-r.y,M=n.z-r.z,v=Math.abs(l),y=Math.abs(c),b=Math.abs(u);let w,S,E,T,P,L,C,R,I,N,F,G;if(v>=y&&v>=b?(E=l,L=f,I=p,G=m,l>=0?(w=c,S=u,T=h,P=d,C=_,R=g,N=x,F=M):(w=u,S=c,T=d,P=h,C=g,R=_,N=M,F=x)):y>=b?(E=c,L=h,I=_,G=x,c>=0?(w=u,S=l,T=d,P=f,C=g,R=p,N=M,F=m):(w=l,S=u,T=f,P=d,C=p,R=g,N=m,F=M)):(E=u,L=d,I=g,G=M,u>=0?(w=l,S=c,T=f,P=h,C=p,R=_,N=m,F=x):(w=c,S=l,T=h,P=f,C=_,R=p,N=x,F=m)),E===0)return null;const H=w/E,K=S/E,j=1/E,St=T-H*L,mt=P-K*L,zt=C-H*I,pt=R-K*I,Y=N-H*G,B=F-K*G,Z=Y*pt-B*zt,rt=St*B-mt*Y,vt=zt*mt-pt*St;if(s){if(Z<0||rt<0||vt<0)return null}else if((Z<0||rt<0||vt<0)&&(Z>0||rt>0||vt>0))return null;const z=Z+rt+vt;if(z===0)return null;const st=j*(Z*L+rt*I+vt*G);return(z>0?st<0:st>0)?null:this.at(st/z,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dn extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Eh=new Le,gs=new H0,Jr=new Eo,Th=new O,Qr=new O,jr=new O,ta=new O,wl=new O,ea=new O,Ah=new O,na=new O;class oe extends Se{constructor(t=new Ae,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){ea.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],f=o[l];u!==0&&(wl.fromBufferAttribute(f,t),r?ea.addScaledVector(wl,u):ea.addScaledVector(wl.sub(e),u))}e.add(ea)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(o),gs.copy(t.ray).recast(t.near),!(Jr.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Jr,Th)===null||gs.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(Eh.copy(o).invert(),gs.copy(t.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,h=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=r[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,y=M;v<y;v+=3){const b=a.getX(v),w=a.getX(v+1),S=a.getX(v+2);s=ia(this,m,t,n,c,u,f,b,w,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const x=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=ia(this,r,t,n,c,u,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,_=h.length;p<_;p++){const g=h[p],m=r[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,y=M;v<y;v+=3){const b=v,w=v+1,S=v+2;s=ia(this,m,t,n,c,u,f,b,w,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const x=g,M=g+1,v=g+2;s=ia(this,r,t,n,c,u,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Rp(i,t,e,n,s,o,r,a){let l;if(t.side===un?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ui,a),l===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Qr),i.getVertexPosition(l,jr),i.getVertexPosition(c,ta);const u=Rp(i,t,e,n,Qr,jr,ta,Ah);if(u){const f=new O;Yn.getBarycoord(Ah,Qr,jr,ta,f),s&&(u.uv=Yn.getInterpolatedAttribute(s,a,l,c,f,new Mt)),o&&(u.uv1=Yn.getInterpolatedAttribute(o,a,l,c,f,new Mt)),r&&(u.normal=Yn.getInterpolatedAttribute(r,a,l,c,f,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Yn.getNormal(Qr,jr,ta,h.normal),u.face=h,u.barycoord=f}return u}class kc extends an{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Ke,u=Ke,f,h){super(null,r,a,l,c,u,s,o,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends $n{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $s=new Le,Rh=new Le,sa=[],Ch=new fs,Cp=new Le,Bo=new oe,zo=new Eo;class dn extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Ch.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Ch)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Eo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),zo.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(zo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(n),t.ray.intersectsSphere(zo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,$s),Rh.multiplyMatrices(n,$s),Bo.matrixWorld=Rh,Bo.raycast(t,sa);for(let r=0,a=sa.length;r<a;r++){const l=sa[r];l.instanceId=o,l.object=this,e.push(l)}sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kc(new Float32Array(s*this.count),s,this.count,Dc,ti));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _s=new Eo,Pp=new Mt(.5,.5),oa=new O;class Gc{constructor(t=new yi,e=new yi,n=new yi,s=new yi,o=new yi,r=new yi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],u=o[4],f=o[5],h=o[6],d=o[7],p=o[8],_=o[9],g=o[10],m=o[11],x=o[12],M=o[13],v=o[14],y=o[15];if(s[0].setComponents(c-r,d-u,m-p,y-x).normalize(),s[1].setComponents(c+r,d+u,m+p,y+x).normalize(),s[2].setComponents(c+a,d+f,m+_,y+M).normalize(),s[3].setComponents(c-a,d-f,m-_,y-M).normalize(),n)s[4].setComponents(l,h,g,v).normalize(),s[5].setComponents(c-l,d-h,m-g,y-v).normalize();else if(s[4].setComponents(c-l,d-h,m-g,y-v).normalize(),e===hi)s[5].setComponents(c+l,d+h,m+g,y+v).normalize();else if(e===Mo)s[5].setComponents(l,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);const e=Pp.distanceTo(t.center);return _s.radius=.7071067811865476+e,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V0 extends an{constructor(t=[],e=hs,n,s,o,r,a,l,c,u){super(t,e,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hc extends an{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends an{constructor(t,e,n=di,s,o,r,a=Ke,l=Ke,c,u=Pi,f=1){if(u!==Pi&&u!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class $f extends So{constructor(t,e=di,n=hs,s,o,r=Ke,a=Ke,l,c=Pi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,o,r,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class W0 extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ne extends Ae{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(f,2));function p(_,g,m,x,M,v,y,b,w,S,E){const T=v/w,P=y/S,L=v/2,C=y/2,R=b/2,I=w+1,N=S+1;let F=0,G=0;const H=new O;for(let K=0;K<N;K++){const j=K*P-C;for(let St=0;St<I;St++){const mt=St*T-L;H[_]=mt*x,H[g]=j*M,H[m]=R,c.push(H.x,H.y,H.z),H[_]=0,H[g]=0,H[m]=b>0?1:-1,u.push(H.x,H.y,H.z),f.push(St/w),f.push(1-K/S),F+=1}}for(let K=0;K<S;K++)for(let j=0;j<w;j++){const St=h+j+I*K,mt=h+j+I*(K+1),zt=h+(j+1)+I*(K+1),pt=h+(j+1)+I*K;l.push(St,mt,pt),l.push(mt,zt,pt),G+=6}a.addGroup(d,G,E),d+=G,h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class To extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new O,u=new Mt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[h]/t+1)/2,u.y=(r[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class yn extends Ae{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const u=[],f=[],h=[],d=[];let p=0;const _=[],g=n/2;let m=0;x(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ee(f,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function x(){const v=new O,y=new O;let b=0;const w=(e-t)/n;for(let S=0;S<=o;S++){const E=[],T=S/o,P=T*(e-t)+t;for(let L=0;L<=s;L++){const C=L/s,R=C*l+a,I=Math.sin(R),N=Math.cos(R);y.x=P*I,y.y=-T*n+g,y.z=P*N,f.push(y.x,y.y,y.z),v.set(I,w,N).normalize(),h.push(v.x,v.y,v.z),d.push(C,1-T),E.push(p++)}_.push(E)}for(let S=0;S<s;S++)for(let E=0;E<o;E++){const T=_[E][S],P=_[E+1][S],L=_[E+1][S+1],C=_[E][S+1];(t>0||E!==0)&&(u.push(T,P,C),b+=3),(e>0||E!==o-1)&&(u.push(P,L,C),b+=3)}c.addGroup(m,b,0),m+=b}function M(v){const y=p,b=new Mt,w=new O;let S=0;const E=v===!0?t:e,T=v===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,g*T,0),h.push(0,T,0),d.push(.5,.5),p++;const P=p;for(let L=0;L<=s;L++){const R=L/s*l+a,I=Math.cos(R),N=Math.sin(R);w.x=E*N,w.y=g*T,w.z=E*I,f.push(w.x,w.y,w.z),h.push(0,T,0),b.x=I*.5+.5,b.y=N*.5*T+.5,d.push(b.x,b.y),p++}for(let L=0;L<s;L++){const C=y+L,R=P+L;v===!0?u.push(R,R+1,C):u.push(R+1,R,C),S+=3}c.addGroup(m,S,v===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vc extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),u(),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(o.slice(),3)),this.setAttribute("uv",new ee(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new O,v=new O,y=new O;for(let b=0;b<e.length;b+=3)d(e[b+0],M),d(e[b+1],v),d(e[b+2],y),l(M,v,y,x)}function l(x,M,v,y){const b=y+1,w=[];for(let S=0;S<=b;S++){w[S]=[];const E=x.clone().lerp(v,S/b),T=M.clone().lerp(v,S/b),P=b-S;for(let L=0;L<=P;L++)L===0&&S===b?w[S][L]=E:w[S][L]=E.clone().lerp(T,L/P)}for(let S=0;S<b;S++)for(let E=0;E<2*(b-S)-1;E++){const T=Math.floor(E/2);E%2===0?(h(w[S][T+1]),h(w[S+1][T]),h(w[S][T])):(h(w[S][T+1]),h(w[S+1][T+1]),h(w[S+1][T]))}}function c(x){const M=new O;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(x),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function u(){const x=new O;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];const v=g(x)/2/Math.PI+.5,y=m(x)/Math.PI+.5;r.push(v,1-y)}p(),f()}function f(){for(let x=0;x<r.length;x+=6){const M=r[x+0],v=r[x+2],y=r[x+4],b=Math.max(M,v,y),w=Math.min(M,v,y);b>.9&&w<.1&&(M<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),y<.2&&(r[x+4]+=1))}}function h(x){o.push(x.x,x.y,x.z)}function d(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function p(){const x=new O,M=new O,v=new O,y=new O,b=new Mt,w=new Mt,S=new Mt;for(let E=0,T=0;E<o.length;E+=9,T+=6){x.set(o[E+0],o[E+1],o[E+2]),M.set(o[E+3],o[E+4],o[E+5]),v.set(o[E+6],o[E+7],o[E+8]),b.set(r[T+0],r[T+1]),w.set(r[T+2],r[T+3]),S.set(r[T+4],r[T+5]),y.copy(x).add(M).add(v).divideScalar(3);const P=g(y);_(b,T+0,x,P),_(w,T+2,M,P),_(S,T+4,v,P)}}function _(x,M,v,y){y<0&&x.x===1&&(r[M]=x.x-1),v.x===0&&v.z===0&&(r[M]=y/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.vertices,t.indices,t.radius,t.detail)}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const u=n[s],h=n[s+1]-u,d=(r-u)/h;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Mt:new O);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],o=[],r=[],a=new O,l=new Le;for(let d=0;d<=t;d++){const p=d/t;s[d]=this.getTangentAt(p,new O)}o[0]=new O,r[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(le(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,p))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(le(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let p=1;p<=t;p++)o[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wc extends gi{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zf extends Wc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function X0(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,u,f){let h=(r-o)/c-(a-o)/(c+u)+(a-r)/u,d=(a-r)/u-(l-r)/(u+f)+(l-a)/f;h*=u,d*=u,s(r,a,h,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Ph=new O,Lh=new O,El=new X0,Tl=new X0,Al=new X0;class Xc extends gi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%o]:(Lh.subVectors(s[0],s[1]).add(s[0]),c=Lh);const f=s[a%o],h=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Ph.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Ph),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),El.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,_,g),Tl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,_,g),Al.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Tl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Al.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(El.calc(l),Tl.calc(l),Al.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Lp(i,t){const e=1-i;return e*e*t}function Dp(i,t){return 2*(1-i)*i*t}function Ip(i,t){return i*i*t}function ur(i,t,e,n){return Lp(i,t)+Dp(i,e)+Ip(i,n)}function Up(i,t){const e=1-i;return e*e*e*t}function Np(i,t){const e=1-i;return 3*e*e*i*t}function Fp(i,t){return 3*(1-i)*i*i*t}function Op(i,t){return i*i*i*t}function fr(i,t,e,n,s){return Up(i,t)+Np(i,e)+Fp(i,n)+Op(i,s)}class q0 extends gi{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(fr(t,s.x,o.x,r.x,a.x),fr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kf extends gi{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(fr(t,s.x,o.x,r.x,a.x),fr(t,s.y,o.y,r.y,a.y),fr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Y0 extends gi{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jf extends gi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $0 extends gi{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ur(t,s.x,o.x,r.x),ur(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qc extends gi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ur(t,s.x,o.x,r.x),ur(t,s.y,o.y,r.y),ur(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z0 extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(Dh(a,l.x,c.x,u.x,f.x),Dh(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}}var xc=Object.freeze({__proto__:null,ArcCurve:Zf,CatmullRomCurve3:Xc,CubicBezierCurve:q0,CubicBezierCurve3:Kf,EllipseCurve:Wc,LineCurve:Y0,LineCurve3:Jf,QuadraticBezierCurve:$0,QuadraticBezierCurve3:qc,SplineCurve:Z0});class Qf extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new xc[s.type]().fromJSON(s))}return this}}class jl extends Qf{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Y0(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new $0(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new q0(this.currentPoint.clone(),new Mt(t,e),new Mt(n,s),new Mt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Z0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Wc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yc extends jl{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new jl().fromJSON(s))}return this}}function Bp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=jf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Vp(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<s;h+=e){const d=i[h],p=i[h+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Rr(o,r,e,a,l,c,0),r}function jf(i,t,e,n,s){let o;if(s===t1(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=Ih(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=Ih(r/n|0,i[r],i[r+1],o);return o&&yo(o,o.next)&&(Pr(o),o=o.next),o}function Cs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(yo(e,e.next)||He(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Rr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&$p(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?kp(i,n,s,o):zp(i)){t.push(l.i,i.i,c.i),Pr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Gp(Cs(i),t),Rr(i,t,e,n,s,o,2)):r===2&&Hp(i,t,e,n,s,o):Rr(Cs(i),t,e,n,s,o,1);break}}}function zp(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,o,r),f=Math.min(a,l,c),h=Math.max(s,o,r),d=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&qo(s,a,o,l,r,c,p.x,p.y)&&He(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kp(i,t,e,n){const s=i.prev,o=i,r=i.next;if(He(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,u=s.y,f=o.y,h=r.y,d=Math.min(a,l,c),p=Math.min(u,f,h),_=Math.max(a,l,c),g=Math.max(u,f,h),m=t0(d,p,t,e,n),x=t0(_,g,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=x;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==r&&qo(a,u,l,f,c,h,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&qo(a,u,l,f,c,h,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==r&&qo(a,u,l,f,c,h,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&qo(a,u,l,f,c,h,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Gp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!yo(n,s)&&ed(n,e,e.next,s)&&Cr(n,s)&&Cr(s,n)&&(t.push(n.i,e.i,s.i),Pr(e),Pr(e.next),e=i=s),e=e.next}while(e!==i);return Cs(e)}function Hp(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Jp(r,a)){let l=nd(r,a);r=Cs(r,r.next),l=Cs(l,l.next),Rr(r,t,e,n,s,o,0),Rr(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Vp(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=jf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Kp(c))}s.sort(Wp);for(let o=0;o<s.length;o++)e=Xp(s[o],e);return e}function Wp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Xp(i,t){const e=qp(i,t);if(!e)return t;const n=nd(e,i);return Cs(n,n.next),Cs(e,e.next)}function qp(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(yo(i,e))return e;do{if(yo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&td(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Cr(e,i)&&(f<u||f===u&&(e.x>r.x||e.x===r.x&&Yp(r,e)))&&(r=e,u=f)}e=e.next}while(e!==a);return r}function Yp(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function $p(i,t,e,n){let s=i;do s.z===0&&(s.z=t0(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function t0(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Kp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function td(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function qo(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&td(i,t,e,n,s,o,r,a)}function Jp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qp(i,t)&&(Cr(i,t)&&Cr(t,i)&&jp(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||yo(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function yo(i,t){return i.x===t.x&&i.y===t.y}function ed(i,t,e,n){const s=aa(He(i,t,e)),o=aa(He(i,t,n)),r=aa(He(e,n,i)),a=aa(He(e,n,t));return!!(s!==o&&r!==a||s===0&&ra(i,e,t)||o===0&&ra(i,n,t)||r===0&&ra(e,i,n)||a===0&&ra(e,t,n))}function ra(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function aa(i){return i>0?1:i<0?-1:0}function Qp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ed(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Cr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function jp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function nd(i,t){const e=e0(i.i,i.x,i.y),n=e0(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ih(i,t,e,n){const s=e0(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function e0(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function t1(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class e1{static triangulate(t,e,n=2){return Bp(t,e,n)}}class Ei{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ei.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Uh(t),Nh(n,t);let r=t.length;e.forEach(Uh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Nh(n,e[l]);const a=e1.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Uh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Fr extends Ae{constructor(t=new Yc([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:n1;let M,v=!1,y,b,w,S;if(m){M=m.getSpacedPoints(u),v=!0,h=!1;const X=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(u,X),b=new O,w=new O,S=new O}h||(g=0,d=0,p=0,_=0);const E=a.extractPoints(c);let T=E.shape;const P=E.holes;if(!Ei.isClockWise(T)){T=T.reverse();for(let X=0,it=P.length;X<it;X++){const at=P[X];Ei.isClockWise(at)&&(P[X]=at.reverse())}}function C(X){const at=10000000000000001e-36;let V=X[0];for(let W=1;W<=X.length;W++){const _t=W%X.length,ht=X[_t],yt=ht.x-V.x,Rt=ht.y-V.y,k=yt*yt+Rt*Rt,Jt=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(V.x),Math.abs(V.y)),Kt=at*Jt*Jt;if(k<=Kt){X.splice(_t,1),W--;continue}V=ht}}C(T),P.forEach(C);const R=P.length,I=T;for(let X=0;X<R;X++){const it=P[X];T=T.concat(it)}function N(X,it,at){return it||pe("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(it,at)}const F=T.length;function G(X,it,at){let V,W,_t;const ht=X.x-it.x,yt=X.y-it.y,Rt=at.x-X.x,k=at.y-X.y,Jt=ht*ht+yt*yt,Kt=ht*k-yt*Rt;if(Math.abs(Kt)>Number.EPSILON){const U=Math.sqrt(Jt),A=Math.sqrt(Rt*Rt+k*k),J=it.x-yt/U,nt=it.y+ht/U,ct=at.x-k/A,bt=at.y+Rt/A,At=((ct-J)*k-(bt-nt)*Rt)/(ht*k-yt*Rt);V=J+ht*At-X.x,W=nt+yt*At-X.y;const lt=V*V+W*W;if(lt<=2)return new Mt(V,W);_t=Math.sqrt(lt/2)}else{let U=!1;ht>Number.EPSILON?Rt>Number.EPSILON&&(U=!0):ht<-Number.EPSILON?Rt<-Number.EPSILON&&(U=!0):Math.sign(yt)===Math.sign(k)&&(U=!0),U?(V=-yt,W=ht,_t=Math.sqrt(Jt)):(V=ht,W=yt,_t=Math.sqrt(Jt/2))}return new Mt(V/_t,W/_t)}const H=[];for(let X=0,it=I.length,at=it-1,V=X+1;X<it;X++,at++,V++)at===it&&(at=0),V===it&&(V=0),H[X]=G(I[X],I[at],I[V]);const K=[];let j,St=H.concat();for(let X=0,it=R;X<it;X++){const at=P[X];j=[];for(let V=0,W=at.length,_t=W-1,ht=V+1;V<W;V++,_t++,ht++)_t===W&&(_t=0),ht===W&&(ht=0),j[V]=G(at[V],at[_t],at[ht]);K.push(j),St=St.concat(j)}let mt;if(g===0)mt=Ei.triangulateShape(I,P);else{const X=[],it=[];for(let at=0;at<g;at++){const V=at/g,W=d*Math.cos(V*Math.PI/2),_t=p*Math.sin(V*Math.PI/2)+_;for(let ht=0,yt=I.length;ht<yt;ht++){const Rt=N(I[ht],H[ht],_t);rt(Rt.x,Rt.y,-W),V===0&&X.push(Rt)}for(let ht=0,yt=R;ht<yt;ht++){const Rt=P[ht];j=K[ht];const k=[];for(let Jt=0,Kt=Rt.length;Jt<Kt;Jt++){const U=N(Rt[Jt],j[Jt],_t);rt(U.x,U.y,-W),V===0&&k.push(U)}V===0&&it.push(k)}}mt=Ei.triangulateShape(X,it)}const zt=mt.length,pt=p+_;for(let X=0;X<F;X++){const it=h?N(T[X],St[X],pt):T[X];v?(w.copy(y.normals[0]).multiplyScalar(it.x),b.copy(y.binormals[0]).multiplyScalar(it.y),S.copy(M[0]).add(w).add(b),rt(S.x,S.y,S.z)):rt(it.x,it.y,0)}for(let X=1;X<=u;X++)for(let it=0;it<F;it++){const at=h?N(T[it],St[it],pt):T[it];v?(w.copy(y.normals[X]).multiplyScalar(at.x),b.copy(y.binormals[X]).multiplyScalar(at.y),S.copy(M[X]).add(w).add(b),rt(S.x,S.y,S.z)):rt(at.x,at.y,f/u*X)}for(let X=g-1;X>=0;X--){const it=X/g,at=d*Math.cos(it*Math.PI/2),V=p*Math.sin(it*Math.PI/2)+_;for(let W=0,_t=I.length;W<_t;W++){const ht=N(I[W],H[W],V);rt(ht.x,ht.y,f+at)}for(let W=0,_t=P.length;W<_t;W++){const ht=P[W];j=K[W];for(let yt=0,Rt=ht.length;yt<Rt;yt++){const k=N(ht[yt],j[yt],V);v?rt(k.x,k.y+M[u-1].y,M[u-1].x+at):rt(k.x,k.y,f+at)}}}Y(),B();function Y(){const X=s.length/3;if(h){let it=0,at=F*it;for(let V=0;V<zt;V++){const W=mt[V];vt(W[2]+at,W[1]+at,W[0]+at)}it=u+g*2,at=F*it;for(let V=0;V<zt;V++){const W=mt[V];vt(W[0]+at,W[1]+at,W[2]+at)}}else{for(let it=0;it<zt;it++){const at=mt[it];vt(at[2],at[1],at[0])}for(let it=0;it<zt;it++){const at=mt[it];vt(at[0]+F*u,at[1]+F*u,at[2]+F*u)}}n.addGroup(X,s.length/3-X,0)}function B(){const X=s.length/3;let it=0;Z(I,it),it+=I.length;for(let at=0,V=P.length;at<V;at++){const W=P[at];Z(W,it),it+=W.length}n.addGroup(X,s.length/3-X,1)}function Z(X,it){let at=X.length;for(;--at>=0;){const V=at;let W=at-1;W<0&&(W=X.length-1);for(let _t=0,ht=u+g*2;_t<ht;_t++){const yt=F*_t,Rt=F*(_t+1),k=it+V+yt,Jt=it+W+yt,Kt=it+W+Rt,U=it+V+Rt;z(k,Jt,Kt,U)}}}function rt(X,it,at){l.push(X),l.push(it),l.push(at)}function vt(X,it,at){st(X),st(it),st(at);const V=s.length/3,W=x.generateTopUV(n,s,V-3,V-2,V-1);dt(W[0]),dt(W[1]),dt(W[2])}function z(X,it,at,V){st(X),st(it),st(V),st(it),st(at),st(V);const W=s.length/3,_t=x.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);dt(_t[0]),dt(_t[1]),dt(_t[3]),dt(_t[1]),dt(_t[2]),dt(_t[3])}function st(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function dt(X){o.push(X.x),o.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return i1(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xc[s.type]().fromJSON(s)),new Fr(n,t.options)}}const n1={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Mt(o,r),new Mt(a,l),new Mt(c,u)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],p=t[s*3+2],_=t[o*3],g=t[o*3+1],m=t[o*3+2];return Math.abs(a-u)<Math.abs(r-c)?[new Mt(r,1-l),new Mt(c,1-f),new Mt(h,1-p),new Mt(_,1-m)]:[new Mt(a,1-l),new Mt(u,1-f),new Mt(d,1-p),new Mt(g,1-m)]}};function i1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zn extends Vc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zn(t.radius,t.detail)}}class mi extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const x=m*h-r;for(let M=0;M<c;M++){const v=M*f-o;p.push(v,-x,0),_.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const M=x+c*m,v=x+c*(m+1),y=x+1+c*(m+1),b=x+1+c*m;d.push(M,v,b),d.push(v,y,b)}this.setIndex(d),this.setAttribute("position",new ee(p,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}class $c extends Ae{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,d=new O,p=new Mt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=o+g/n*r;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}f+=h}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const x=m+g,M=x,v=x+n+1,y=x+n+2,b=x+1;a.push(M,v,b),a.push(v,y,b)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mn extends Ae{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],f=new O,h=new O,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],M=m/n,v=r+M*a,y=t*Math.cos(v),b=Math.sqrt(t*t-y*y);let w=0;m===0&&r===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let S=0;S<=e;S++){const E=S/e,T=s+E*o;f.x=-b*Math.cos(T),f.y=y,f.z=b*Math.sin(T),p.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),g.push(E+w,1-M),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const M=u[m][x+1],v=u[m][x],y=u[m+1][x],b=u[m+1][x+1];(m!==0||r>0)&&d.push(M,v,b),(m!==n-1||l<Math.PI)&&d.push(v,y,b)}this.setIndex(d),this.setAttribute("position",new ee(p,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ri extends Ae{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new O,d=new O,p=new O;for(let _=0;_<=n;_++){const g=r+_/n*a;for(let m=0;m<=s;m++){const x=m/s*o;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const m=(s+1)*_+g-1,x=(s+1)*(_-1)+g-1,M=(s+1)*(_-1)+g,v=(s+1)*_+g;l.push(m,x,v),l.push(x,M,v)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Ao extends Ae{constructor(t=new qc(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new O,l=new O,c=new Mt;let u=new O;const f=[],h=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new ee(f,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function _(){for(let M=0;M<e;M++)g(M);g(o===!1?e:0),x(),m()}function g(M){u=t.getPointAt(M/e,u);const v=r.normals[M],y=r.binormals[M];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,S=Math.sin(w),E=-Math.cos(w);l.x=E*v.x+S*y.x,l.y=E*v.y+S*y.y,l.z=E*v.z+S*y.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const y=(s+1)*(M-1)+(v-1),b=(s+1)*M+(v-1),w=(s+1)*M+v,S=(s+1)*(M-1)+v;p.push(y,b,S),p.push(b,w,S)}}function x(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ao(new xc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function bo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Fh(s))s.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fh(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function An(i){const t={};for(let e=0;e<i.length;e++){const n=bo(i[e]);for(const s in n)t[s]=n[s]}return t}function Fh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function s1(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function id(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const sd={clone:bo,merge:An};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=r1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bo(t.uniforms),this.uniformsGroups=s1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class od extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dr extends ds{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ur,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jt extends ds{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ur,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rd extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ad extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ra={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Oh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Oh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Oh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class cd{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ld=new cd;class Zc{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zs=new WeakMap;class hd extends Zc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ra.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let f=Zs.get(r);f===void 0&&(f=[],Zs.set(r,f)),f.push({onLoad:e,onError:s})}return r}const a=wr("img");function l(){u(),e&&e(this);const f=Zs.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Zs.delete(this),o.manager.itemEnd(t)}function c(f){u(),s&&s(f),Ra.remove(`image:${t}`);const h=Zs.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}Zs.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ra.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class Kc extends Zc{constructor(t){super(t)}load(t,e,n,s){const o=new an,r=new hd(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Jc extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class K0 extends Jc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Rl=new Le,Bh=new O,zh=new O;class J0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Rl,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;t.coordinateSystem===Mo||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ca=new O,la=new Xi,xi=new O;class Q0 extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ca,la,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,la,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ca,la,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,la,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const es=new O,kh=new Mt,Gh=new Mt;class ln extends Q0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Gh),e.subVectors(Gh,kh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class a1 extends J0{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class ud extends Jc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Qc extends Q0{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class c1 extends J0{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j0 extends Jc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new c1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ks=-90,Js=1;class fd extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Ks,Js,t,e);s.layers=this.layers,this.add(s);const o=new ln(Ks,Js,t,e);o.layers=this.layers,this.add(o);const r=new ln(Ks,Js,t,e);r.layers=this.layers,this.add(r);const a=new ln(Ks,Js,t,e);a.layers=this.layers,this.add(a);const l=new ln(Ks,Js,t,e);l.layers=this.layers,this.add(l);const c=new ln(Ks,Js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class dd extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class n0{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ch=class ch{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};ch.prototype.isMatrix2=!0;let i0=ch;class pd extends qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Hh(i,t,e,n){const s=l1(n);switch(e){case D0:return i*t;case Dc:return i*t/s.components*s.byteLength;case Ic:return i*t/s.components*s.byteLength;case us:return i*t*2/s.components*s.byteLength;case Uc:return i*t*2/s.components*s.byteLength;case I0:return i*t*3/s.components*s.byteLength;case ei:return i*t*4/s.components*s.byteLength;case Nc:return i*t*4/s.components*s.byteLength;case or:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ar:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case Ya:case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $a:case vr:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fc:case dc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mr:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l1(i){switch(i){case kn:case R0:return{byteLength:1,components:1};case xo:case C0:case pi:return{byteLength:2,components:1};case Pc:case Lc:return{byteLength:2,components:4};case di:case Cc:case ti:return{byteLength:4,components:1};case P0:case L0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);function md(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function h1(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f1=`#ifdef USE_ALPHAHASH
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
#endif`,d1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
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
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
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
#endif`,M1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w1=`#ifdef USE_IRIDESCENCE
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
#endif`,E1=`#ifdef USE_BUMPMAP
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U1=`#define PI 3.141592653589793
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
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F1=`vec3 transformedNormal = objectNormal;
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
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G1="gl_FragColor = linearToOutputTexel( gl_FragColor );",H1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
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
}`,j1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i2=`#ifdef USE_ENVMAP
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
#endif`,s2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c2=`PhysicalMaterial material;
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
#endif`,l2=`uniform sampler2D dfgLUT;
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
}`,h2=`
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
#endif`,u2=`#if defined( RE_IndirectDiffuse )
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
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,p2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S2=`#if defined( USE_POINTS_UV )
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
#endif`,y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`#ifdef USE_MORPHTARGETS
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
#endif`,R2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U2=`#ifdef USE_NORMALMAP
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
#endif`,N2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K2=`float getShadowMask() {
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
}`,J2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q2=`#ifdef USE_SKINNING
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
#endif`,j2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Bm=`#define TOON
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
}`,zm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Hm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:u1,alphahash_pars_fragment:f1,alphamap_fragment:d1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:_1,aomap_pars_fragment:x1,batching_pars_vertex:v1,batching_vertex:M1,begin_vertex:S1,beginnormal_vertex:y1,bsdfs:b1,iridescence_fragment:w1,bumpmap_pars_fragment:E1,clipping_planes_fragment:T1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:C1,color_fragment:P1,color_pars_fragment:L1,color_pars_vertex:D1,color_vertex:I1,common:U1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:F1,displacementmap_pars_vertex:O1,displacementmap_vertex:B1,emissivemap_fragment:z1,emissivemap_pars_fragment:k1,colorspace_fragment:G1,colorspace_pars_fragment:H1,envmap_fragment:V1,envmap_common_pars_fragment:W1,envmap_pars_fragment:X1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:i2,envmap_vertex:Y1,fog_vertex:$1,fog_pars_vertex:Z1,fog_fragment:K1,fog_pars_fragment:J1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:j1,lights_lambert_fragment:t2,lights_lambert_pars_fragment:e2,lights_pars_begin:n2,lights_toon_fragment:s2,lights_toon_pars_fragment:o2,lights_phong_fragment:r2,lights_phong_pars_fragment:a2,lights_physical_fragment:c2,lights_physical_pars_fragment:l2,lights_fragment_begin:h2,lights_fragment_maps:u2,lights_fragment_end:f2,lightprobes_pars_fragment:d2,logdepthbuf_fragment:p2,logdepthbuf_pars_fragment:m2,logdepthbuf_pars_vertex:g2,logdepthbuf_vertex:_2,map_fragment:x2,map_pars_fragment:v2,map_particle_fragment:M2,map_particle_pars_fragment:S2,metalnessmap_fragment:y2,metalnessmap_pars_fragment:b2,morphinstance_vertex:w2,morphcolor_vertex:E2,morphnormal_vertex:T2,morphtarget_pars_vertex:A2,morphtarget_vertex:R2,normal_fragment_begin:C2,normal_fragment_maps:P2,normal_pars_fragment:L2,normal_pars_vertex:D2,normal_vertex:I2,normalmap_pars_fragment:U2,clearcoat_normal_fragment_begin:N2,clearcoat_normal_fragment_maps:F2,clearcoat_pars_fragment:O2,iridescence_pars_fragment:B2,opaque_fragment:z2,packing:k2,premultiplied_alpha_fragment:G2,project_vertex:H2,dithering_fragment:V2,dithering_pars_fragment:W2,roughnessmap_fragment:X2,roughnessmap_pars_fragment:q2,shadowmap_pars_fragment:Y2,shadowmap_pars_vertex:$2,shadowmap_vertex:Z2,shadowmask_pars_fragment:K2,skinbase_vertex:J2,skinning_pars_vertex:Q2,skinning_vertex:j2,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:om,transmission_pars_fragment:rm,uv_pars_fragment:am,uv_pars_vertex:cm,uv_vertex:lm,worldpos_vertex:hm,background_vert:um,background_frag:fm,backgroundCube_vert:dm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:_m,depth_frag:xm,distance_vert:vm,distance_frag:Mm,equirect_vert:Sm,equirect_frag:ym,linedashed_vert:bm,linedashed_frag:wm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:Im,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:zm,points_frag:km,shadow_vert:Gm,shadow_frag:Hm,sprite_vert:Vm,sprite_frag:Wm},Ut={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ai={basic:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:An([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:An([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:An([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:An([Ut.points,Ut.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:An([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:An([Ut.common,Ut.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:An([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:An([Ut.sprite,Ut.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:An([Ut.common,Ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:An([Ut.lights,Ut.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ai.physical={uniforms:An([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const ha={r:0,b:0,g:0},Xm=new Le,gd=new se;gd.set(-1,0,0,0,1,0,0,0,1);function qm(i,t,e,n,s,o){const r=new Ht(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const v=x.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(x){let M=!1;const v=d(x);v===null?g(r,a):v&&v.isColor&&(g(v,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,M){const v=d(M);v&&(v.isCubeTexture||v.mapping===Nr)?(c===void 0&&(c=new oe(new Ne(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:bo(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gd),c.material.toneMapped=de.getTransfer(v.colorSpace)!==be,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new oe(new mi(2,2),new In({name:"BackgroundMaterial",uniforms:bo(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=de.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){x.getRGB(ha,id(i)),e.buffers.color.setClear(ha.r,ha.g,ha.b,M,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,M=1){r.set(x),a=M,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(r,a)},render:p,addToRenderList:_,dispose:m}}function Ym(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let o=s,r=!1;function a(P,L,C,R,I){let N=!1;const F=f(P,R,C,L);o!==F&&(o=F,c(o.object)),N=d(P,R,C,I),N&&p(P,R,C,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,v(P,L,C,R),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function f(P,L,C,R){const I=R.wireframe===!0;let N=n[L.id];N===void 0&&(N={},n[L.id]=N);const F=P.isInstancedMesh===!0?P.id:0;let G=N[F];G===void 0&&(G={},N[F]=G);let H=G[C.id];H===void 0&&(H={},G[C.id]=H);let K=H[I];return K===void 0&&(K=h(l()),H[I]=K),K}function h(P){const L=[],C=[],R=[];for(let I=0;I<e;I++)L[I]=0,C[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:C,attributeDivisors:R,object:P,attributes:{},index:null}}function d(P,L,C,R){const I=o.attributes,N=L.attributes;let F=0;const G=C.getAttributes();for(const H in G)if(G[H].location>=0){const j=I[H];let St=N[H];if(St===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(St=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(St=P.instanceColor)),j===void 0||j.attribute!==St||St&&j.data!==St.data)return!0;F++}return o.attributesNum!==F||o.index!==R}function p(P,L,C,R){const I={},N=L.attributes;let F=0;const G=C.getAttributes();for(const H in G)if(G[H].location>=0){let j=N[H];j===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const St={};St.attribute=j,j&&j.data&&(St.data=j.data),I[H]=St,F++}o.attributes=I,o.attributesNum=F,o.index=R}function _(){const P=o.newAttributes;for(let L=0,C=P.length;L<C;L++)P[L]=0}function g(P){m(P,0)}function m(P,L){const C=o.newAttributes,R=o.enabledAttributes,I=o.attributeDivisors;C[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),I[P]!==L&&(i.vertexAttribDivisor(P,L),I[P]=L)}function x(){const P=o.newAttributes,L=o.enabledAttributes;for(let C=0,R=L.length;C<R;C++)L[C]!==P[C]&&(i.disableVertexAttribArray(C),L[C]=0)}function M(P,L,C,R,I,N,F){F===!0?i.vertexAttribIPointer(P,L,C,I,N):i.vertexAttribPointer(P,L,C,R,I,N)}function v(P,L,C,R){_();const I=R.attributes,N=C.getAttributes(),F=L.defaultAttributeValues;for(const G in N){const H=N[G];if(H.location>=0){let K=I[G];if(K===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){const j=K.normalized,St=K.itemSize,mt=t.get(K);if(mt===void 0)continue;const zt=mt.buffer,pt=mt.type,Y=mt.bytesPerElement,B=pt===i.INT||pt===i.UNSIGNED_INT||K.gpuType===Cc;if(K.isInterleavedBufferAttribute){const Z=K.data,rt=Z.stride,vt=K.offset;if(Z.isInstancedInterleavedBuffer){for(let z=0;z<H.locationSize;z++)m(H.location+z,Z.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let z=0;z<H.locationSize;z++)g(H.location+z);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let z=0;z<H.locationSize;z++)M(H.location+z,St/H.locationSize,pt,j,rt*Y,(vt+St/H.locationSize*z)*Y,B)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z,K.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<H.locationSize;Z++)g(H.location+Z);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Z=0;Z<H.locationSize;Z++)M(H.location+Z,St/H.locationSize,pt,j,St*Y,St/H.locationSize*Z*Y,B)}}else if(F!==void 0){const j=F[G];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(H.location,j);break;case 3:i.vertexAttrib3fv(H.location,j);break;case 4:i.vertexAttrib4fv(H.location,j);break;default:i.vertexAttrib1fv(H.location,j)}}}}x()}function y(){E();for(const P in n){const L=n[P];for(const C in L){const R=L[C];for(const I in R){const N=R[I];for(const F in N)u(N[F].object),delete N[F];delete R[I]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const L=n[P.id];for(const C in L){const R=L[C];for(const I in R){const N=R[I];for(const F in N)u(N[F].object),delete N[F];delete R[I]}}delete n[P.id]}function w(P){for(const L in n){const C=n[L];for(const R in C){const I=C[R];if(I[P.id]===void 0)continue;const N=I[P.id];for(const F in N)u(N[F].object),delete N[F];delete I[P.id]}}}function S(P){for(const L in n){const C=n[L],R=P.isInstancedMesh===!0?P.id:0,I=C[R];if(I!==void 0){for(const N in I){const F=I[N];for(const G in F)u(F[G].object),delete F[G];delete I[N]}delete C[R],Object.keys(C).length===0&&delete n[L]}}}function E(){T(),r=!0,o!==s&&(o=s,c(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:T,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function $m(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function Zm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==ei&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==kn&&w!==ti&&!S&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(te("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:y,samples:b}}function Km(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new yi,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||o&&!g)o?u(null):c();else{const x=o?0:n,M=x*4;let v=m.clippingState||null;l.value=v,v=u(p,h,M,d);for(let y=0;y!==M;++y)v[y]=e[y];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,v=d;M!==_;++M,v+=4)r.copy(f[M]).applyMatrix4(x,a),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const ro=4,Jm=6,Qm=20,jm=256,ko=new Qc,Vh=new Ht;let Cl=null,Pl=0,Ll=0,Dl=!1;const tg=new O,xs=new O;class s0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=tg}=o;Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cl,Pl,Ll),this._renderer.xr.enabled=Dl,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:pi,format:ei,colorSpace:yr,depthBuffer:!1},s=Wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eg(o)),this._blurMaterial=ig(o,t,e),this._ggxMaterial=ng(o,t,e)}return s}_compileMaterial(t){const e=new oe(new Ae,t);this._renderer.compile(e,ko)}_sceneToCubeUV(t,e,n,s,o){const l=new ln(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Vh),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new Ne,new Dn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(Vh),m=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[M],o.y,o.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[M]));const y=this._cubeSize;Qs(s,v*y,M>2?y:0,y,y),f.setRenderTarget(s),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hs||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,ko)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-ro?n-p+ro:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Qs(o,g,m,3*_,2*_),s.setRenderTarget(o),s.render(a,ko),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,Qs(t,g,m,3*_,2*_),s.setRenderTarget(t),s.render(a,ko)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-ro?s-this._lodMax+ro:0),h=4*(this._cubeSize-u);Qs(e,f,h,3*u,2*u),r.setRenderTarget(e),r.render(l,ko)}}function eg(i){const t=[],e=[];let n=i;const s=i-ro+1+Jm;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,p=new Float32Array(d*h*f),_=new Float32Array(d*h*f);for(let m=0;m<f;m++){const x=m%3*2/3-1,M=m>2?0:-1,v=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];p.set(v,d*h*m);for(let y=0;y<h;y++){const b=u[y*2]*2-1,w=u[y*2+1]*2-1;m===0?xs.set(1,w,b):m===1?xs.set(-b,1,-w):m===2?xs.set(-b,w,1):m===3?xs.set(-1,w,-b):m===4?xs.set(-b,-1,w):xs.set(b,w,-1),xs.toArray(_,(m*h+y)*d)}}const g=new Ae;g.setAttribute("position",new $n(p,d)),g.setAttribute("outputDirection",new $n(_,d)),e.push(new oe(g,null)),n>ro&&n--}return{lodMeshes:e,sizeLods:t}}function Wh(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ng(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ig(i,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Qm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Xh(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function qh(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class th extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new V0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ne(5,5,5),o=new In({name:"CubemapFromEquirect",uniforms:bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ti});o.uniforms.tEquirect.value=e;const r=new oe(s,o),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=hn),new fd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function sg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?r(h):o(h)}function o(h){if(h&&h.isTexture){const d=h.mapping;if(d===sr||d===wa)if(t.has(h)){const p=t.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new th(p.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){const d=h.mapping,p=d===sr||d===wa,_=d===hs||d===As;if(p||_){let g=e.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new s0(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return p&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new s0(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===sr?h.mapping=hs:d===wa&&(h.mapping=As),h}function l(h){let d=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function og(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ws("WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,t,e,n){const s={},o=new WeakMap;function r(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",r),delete s[h.id];const d=o.get(h);d&&(t.remove(d),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let M=0,v=x.length;M<v;M+=3){const y=x[M+0],b=x[M+1],w=x[M+2];h.push(y,b,b,w,w,y)}}else{const x=p.array;_=p.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const y=M+0,b=M+1,w=M+2;h.push(y,b,b,w,w,y)}}const g=new(p.count>=65535?k0:z0)(h,1);g.version=_;const m=o.get(f);m&&t.remove(m),o.set(f,g)}function u(f){const h=o.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ag(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,h){i.drawElements(n,h,o,f*r),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,o,f*r,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,o,f,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:pe("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,t,e){const n=new WeakMap,s=new Ge;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,y=1;v>t.maxTextureSize&&(y=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*y*4*f),w=new F0(b,v,y,f);w.type=ti,w.needsUpdate=!0;const S=M*4;for(let T=0;T<f;T++){const P=g[T],L=m[T],C=x[T],R=v*y*4*T;for(let I=0;I<P.count;I++){const N=I*S;d===!0&&(s.fromBufferAttribute(P,I),b[R+N+0]=s.x,b[R+N+1]=s.y,b[R+N+2]=s.z,b[R+N+3]=0),p===!0&&(s.fromBufferAttribute(L,I),b[R+N+4]=s.x,b[R+N+5]=s.y,b[R+N+6]=s.z,b[R+N+7]=0),_===!0&&(s.fromBufferAttribute(C,I),b[R+N+8]=s.x,b[R+N+9]=s.y,b[R+N+10]=s.z,b[R+N+11]=C.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new Mt(v,y)},n.set(a,h),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function hg(i,t,e,n,s){let o=new WeakMap;function r(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(o.get(h)!==u&&(t.update(h),o.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==u&&(d.update(),o.set(d,u))}return h}function a(){o=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const ug={[M0]:"LINEAR_TONE_MAPPING",[S0]:"REINHARD_TONE_MAPPING",[y0]:"CINEON_TONE_MAPPING",[b0]:"ACES_FILMIC_TONE_MAPPING",[E0]:"AGX_TONE_MAPPING",[T0]:"NEUTRAL_TONE_MAPPING",[w0]:"CUSTOM_TONE_MAPPING"};function fg(i,t,e,n,s,o){const r=new ni(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ae;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));const u=new od({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new oe(c,u),h=new Qc(-1,1,1,-1,0,1);let d=null,p=null,_=!1,g,m=null,x=[],M=!1;this.setSize=function(v,y){r.setSize(v,y),a!==null&&a.setSize(v,y),l!==null&&l.setSize(v,y);for(let b=0;b<x.length;b++){const w=x[b];w.setSize&&w.setSize(v,y)}},this.setEffects=function(v){x=v,M=x.length>0&&x[0].isRenderPass===!0;const y=r.width,b=r.height;x.length>0&&a===null&&(a=new ni(y,b,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new ni(y,b,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){const S=x[w];S.setSize&&S.setSize(y,b)}},this.begin=function(v,y){if(_||v.toneMapping===fi&&x.length===0)return!1;if(m=y,y!==null){const b=y.width,w=y.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return M===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=fi,!0},this.hasRenderPass=function(){return M},this.end=function(v,y){v.toneMapping=g,_=!0;let b=r,w=a;for(let S=0;S<x.length;S++){const E=x[S];E.enabled!==!1&&(E.render(v,w,b,y),E.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,u.defines={},de.getTransfer(d)===be&&(u.defines.SRGB_TRANSFER="");const S=ug[p];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(f,h),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const _d=new an,o0=new So(1,1),xd=new F0,vd=new Vf,Md=new V0,Yh=[],$h=[],Zh=new Float32Array(16),Kh=new Float32Array(9),Jh=new Float32Array(4);function Ro(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Yh[s];if(o===void 0&&(o=new Float32Array(s),Yh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tl(i,t){let e=$h[t];e===void 0&&(e=new Int32Array(t),$h[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Jh.set(n),i.uniformMatrix2fv(this.addr,!1,Jh),nn(e,n)}}function xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),nn(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),nn(e,n)}}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function wg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function Ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(o0.compareFunction=e.isReversedDepthBuffer()?Oc:Fc,o=o0):o=_d,e.setTexture2D(t||o,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vd,s)}function Pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Md,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xd,s)}function Dg(i){switch(i){case 5126:return dg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return xg;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return yg;case 35669:case 35673:return bg;case 5125:return wg;case 36294:return Eg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ig(i,t){i.uniform1fv(this.addr,t)}function Ug(i,t){const e=Ro(t,this.size,2);i.uniform2fv(this.addr,e)}function Ng(i,t){const e=Ro(t,this.size,3);i.uniform3fv(this.addr,e)}function Fg(i,t){const e=Ro(t,this.size,4);i.uniform4fv(this.addr,e)}function Og(i,t){const e=Ro(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bg(i,t){const e=Ro(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zg(i,t){const e=Ro(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Gg(i,t){i.uniform2iv(this.addr,t)}function Hg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Wg(i,t){i.uniform1uiv(this.addr,t)}function Xg(i,t){i.uniform2uiv(this.addr,t)}function qg(i,t){i.uniform3uiv(this.addr,t)}function Yg(i,t){i.uniform4uiv(this.addr,t)}function $g(i,t,e){const n=this.cache,s=t.length,o=tl(e,s);en(n,o)||(i.uniform1iv(this.addr,o),nn(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=o0:r=_d;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function Zg(i,t,e){const n=this.cache,s=t.length,o=tl(e,s);en(n,o)||(i.uniform1iv(this.addr,o),nn(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||vd,o[r])}function Kg(i,t,e){const n=this.cache,s=t.length,o=tl(e,s);en(n,o)||(i.uniform1iv(this.addr,o),nn(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Md,o[r])}function Jg(i,t,e){const n=this.cache,s=t.length,o=tl(e,s);en(n,o)||(i.uniform1iv(this.addr,o),nn(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||xd,o[r])}function Qg(i){switch(i){case 5126:return Ig;case 35664:return Ug;case 35665:return Ng;case 35666:return Fg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Vg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Jg}}class jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class t3{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}}class e3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function Qh(i,t){i.seq.push(t),i.map[t.id]=t}function n3(i,t,e){const n=i.name,s=n.length;for(Il.lastIndex=0;;){const o=Il.exec(n),r=Il.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Qh(e,c===void 0?new jg(a,i,t):new t3(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new e3(a),Qh(e,f)),e=f}}}class Ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);n3(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function jh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const i3=37297;let s3=0;function o3(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const tu=new se;function r3(i){de._getMatrix(tu,de.workingColorSpace,i);const t=`mat3( ${tu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function eu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+o3(i.getShaderSource(t),a)}else return o}function a3(i,t){const e=r3(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const c3={[M0]:"Linear",[S0]:"Reinhard",[y0]:"Cineon",[b0]:"ACESFilmic",[E0]:"AgX",[T0]:"Neutral",[w0]:"Custom"};function l3(i,t){const e=c3[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ua=new O;function h3(){de.getLuminanceCoefficients(ua);const i=ua.x.toFixed(4),t=ua.y.toFixed(4),e=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function f3(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d3(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Yo(i){return i!==""}function nu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p3=/^[ \t]*#include +<([\w\d./]+)>/gm;function r0(i){return i.replace(p3,g3)}const m3=new Map;function g3(i,t){let e=ae[t];if(e===void 0){const n=m3.get(t);if(n!==void 0)e=ae[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return r0(e)}const _3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(i){return i.replace(_3,x3)}function x3(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ou(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const v3={[ir]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function M3(i){return v3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S3={[hs]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function y3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":S3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const b3={[As]:"ENVMAP_MODE_REFRACTION"};function w3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":b3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E3={[Ur]:"ENVMAP_BLENDING_MULTIPLY",[Af]:"ENVMAP_BLENDING_MIX",[Rf]:"ENVMAP_BLENDING_ADD"};function T3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":E3[i.combine]||"ENVMAP_BLENDING_NONE"}function A3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function R3(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=M3(e),c=y3(e),u=w3(e),f=T3(e),h=A3(e),d=u3(e),p=f3(o),_=s.createProgram();let g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yo).join(`
`),m.length>0&&(m+=`
`)):(g=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),m=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?ae.tonemapping_pars_fragment:"",e.toneMapping!==fi?l3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,a3("linearToOutputTexel",e.outputColorSpace),h3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yo).join(`
`)),r=r0(r),r=nu(r,e),r=iu(r,e),a=r0(a),a=nu(a,e),a=iu(a,e),r=su(r),a=su(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=x+g+r,v=x+m+a,y=jh(s,s.VERTEX_SHADER,M),b=jh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",C=s.getShaderInfoLog(y)||"",R=s.getShaderInfoLog(b)||"",I=L.trim(),N=C.trim(),F=R.trim();let G=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,b);else{const K=eu(s,y,"vertex"),j=eu(s,b,"fragment");pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+K+`
`+j)}else I!==""?te("WebGLProgram: Program Info Log:",I):(N===""||F==="")&&(H=!1);H&&(P.diagnostics={runnable:G,programLog:I,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:m}})}s.deleteShader(y),s.deleteShader(b),S=new Ca(s,_),E=d3(s,_)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,i3)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s3++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let C3=0;class P3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new L3(t),e.set(t,n)),n}}class L3{constructor(t){this.id=C3++,this.code=t,this.usedTimes=0}}function D3(i){return i===us||i===vr||i===Mr}function I3(i,t,e,n,s,o){const r=new O0,a=new P3,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,E,T,P,L,C){const R=P.fog,I=L.geometry,N=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,G=t.get(S.envMap||N,F),H=G&&G.mapping===Nr?G.image.height:null,K=d[S.type];S.precision!==null&&(h=n.getMaxPrecision(S.precision),h!==S.precision&&te("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,St=j!==void 0?j.length:0;let mt=0;I.morphAttributes.position!==void 0&&(mt=1),I.morphAttributes.normal!==void 0&&(mt=2),I.morphAttributes.color!==void 0&&(mt=3);let zt,pt,Y,B;if(K){const Re=ai[K];zt=Re.vertexShader,pt=Re.fragmentShader}else{zt=S.vertexShader,pt=S.fragmentShader;const Re=a.getVertexShaderStage(S),ve=a.getFragmentShaderStage(S);a.update(S,Re,ve),Y=Re.id,B=ve.id}const Z=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),vt=L.isInstancedMesh===!0,z=L.isBatchedMesh===!0,st=!!S.map,dt=!!S.matcap,X=!!G,it=!!S.aoMap,at=!!S.lightMap,V=!!S.bumpMap&&S.wireframe===!1,W=!!S.normalMap,_t=!!S.displacementMap,ht=!!S.emissiveMap,yt=!!S.metalnessMap,Rt=!!S.roughnessMap,k=S.anisotropy>0,Jt=S.clearcoat>0,Kt=S.dispersion>0,U=S.retroreflectivity>0,A=S.iridescence>0,J=S.sheen>0,nt=S.transmission>0,ct=k&&!!S.anisotropyMap,bt=Jt&&!!S.clearcoatMap,At=Jt&&!!S.clearcoatNormalMap,lt=Jt&&!!S.clearcoatRoughnessMap,ft=A&&!!S.iridescenceMap,Lt=A&&!!S.iridescenceThicknessMap,qt=J&&!!S.sheenColorMap,Dt=J&&!!S.sheenRoughnessMap,Et=!!S.specularMap,Yt=!!S.specularColorMap,Qt=!!S.specularIntensityMap,ne=nt&&!!S.transmissionMap,$=nt&&!!S.thicknessMap,Ct=!!S.gradientMap,ut=!!S.alphaMap,Pt=S.alphaTest>0,Nt=!!S.alphaHash,xt=!!S.extensions;let $t=fi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&($t=i.toneMapping);const Vt={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:zt,fragmentShader:pt,defines:S.defines,customVertexShaderID:Y,customFragmentShaderID:B,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:z,batchingColor:z&&L._colorsTexture!==null,instancing:vt,instancingColor:vt&&L.instanceColor!==null,instancingMorph:vt&&L.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:dt,envMap:X,envMapMode:X&&G.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:at,bumpMap:V,normalMap:W,displacementMap:_t,emissiveMap:ht,normalMapObjectSpace:W&&S.normalMapType===Pf,normalMapTangentSpace:W&&S.normalMapType===Sr,packedNormalMap:W&&S.normalMapType===Sr&&D3(S.normalMap.format),metalnessMap:yt,roughnessMap:Rt,anisotropy:k,anisotropyMap:ct,clearcoat:Jt,clearcoatMap:bt,clearcoatNormalMap:At,clearcoatRoughnessMap:lt,dispersion:Kt,retroreflection:U,iridescence:A,iridescenceMap:ft,iridescenceThicknessMap:Lt,sheen:J,sheenColorMap:qt,sheenRoughnessMap:Dt,specularMap:Et,specularColorMap:Yt,specularIntensityMap:Qt,transmission:nt,transmissionMap:ne,thicknessMap:$,gradientMap:Ct,opaque:S.transparent===!1&&S.blending===ao&&S.alphaToCoverage===!1,alphaMap:ut,alphaTest:Pt,alphaHash:Nt,combine:S.combine,mapUv:st&&p(S.map.channel),aoMapUv:it&&p(S.aoMap.channel),lightMapUv:at&&p(S.lightMap.channel),bumpMapUv:V&&p(S.bumpMap.channel),normalMapUv:W&&p(S.normalMap.channel),displacementMapUv:_t&&p(S.displacementMap.channel),emissiveMapUv:ht&&p(S.emissiveMap.channel),metalnessMapUv:yt&&p(S.metalnessMap.channel),roughnessMapUv:Rt&&p(S.roughnessMap.channel),anisotropyMapUv:ct&&p(S.anisotropyMap.channel),clearcoatMapUv:bt&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:At&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&p(S.sheenRoughnessMap.channel),specularMapUv:Et&&p(S.specularMap.channel),specularColorMapUv:Yt&&p(S.specularColorMap.channel),specularIntensityMapUv:Qt&&p(S.specularIntensityMap.channel),transmissionMapUv:ne&&p(S.transmissionMap.channel),thicknessMapUv:$&&p(S.thicknessMap.channel),alphaMapUv:ut&&p(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(W||k),vertexNormals:!!I.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(st||ut),fog:!!R,useFog:S.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||I.attributes.normal===void 0&&W===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:mt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&de.getTransfer(S.map.colorSpace)===be,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&de.getTransfer(S.emissiveMap.colorSpace)===be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ze,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&S.extensions.multiDraw===!0||z)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function g(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)E.push(T),E.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(m(E,S),x(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function m(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numSunLights),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numSunLightShadows),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),S.push(r.mask)}function M(S){const E=d[S.type];let T;if(E){const P=ai[E];T=sd.clone(P.uniforms)}else T=S.uniforms;return T}function v(S,E){let T=u.get(E);return T!==void 0?++T.usedTimes:(T=new R3(i,E,S,s),c.push(T),u.set(E,T)),T}function y(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function b(S){a.remove(S)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:w}}function U3(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function N3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function au(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,_,g,m){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:r(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=r(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=g,x.group=m),t++,x}function l(h,d,p,_,g,m,x){x.reversedDepth===!0&&(g=-g);const M=a(h,d,p,_,g,m);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(h,d,p,_,g,m){const x=a(h,d,p,_,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function u(h,d){e.length>1&&e.sort(h||N3),n.length>1&&n.sort(d||ru),s.length>1&&s.sort(d||ru)}function f(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:u}}function F3(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new au,i.set(n,[r])):s>=o.length?(r=new au,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function O3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Ht};break;case"SpotLight":e={position:new O,direction:new O,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function B3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let z3=0;function k3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G3(i){const t=new O3,e=B3(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,o=new Le,r=new Le;function a(c){let u=0,f=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,x=0,M=0,v=0,y=0,b=0,w=0,S=0,E=0,T=0;c.sort(k3);for(let L=0,C=c.length;L<C;L++){const R=c[L],I=R.color,N=R.intensity,F=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===us?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*N,f+=I.g*N,h+=I.b*N;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],N);T++}else if(R.isSunLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,j=e.get(R);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=G;const St=K.getViewportCount();for(let mt=0;mt<St;mt++)n.sunShadowMatrix[_+mt]=K.getMatrix(mt),n.sunShadowCascade[_+mt]=K._cascadeData[mt];_+=St,p++}n.sun[d]=H,d++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,j=e.get(R);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=G,n.directionalShadowMatrix[g]=R.shadow.matrix,y++}n.directional[g]=H,g++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(I).multiplyScalar(N),H.distance=F,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;const K=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,K.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=K.matrix,R.castShadow){const j=e.get(R);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=G,w++}x++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(I).multiplyScalar(N),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=H,M++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const K=R.shadow,j=e.get(R);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=R.shadow.matrix,b++}n.point[m]=H,m++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(N),H.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[v]=H,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==w||P.numSpotMaps!==S||P.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,P.sunLength=d,P.directionalLength=g,P.pointLength=m,P.spotLength=x,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=w,P.numSpotMaps=S,P.numLightProbes=T,n.version=z3++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){const v=c[x];if(v.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),f++}else if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),o.copy(v.matrixWorld),o.premultiply(m),r.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function cu(i){const t=new G3(i),e=[],n=[],s=[];function o(h){f.camera=h,e.length=0,n.length=0,s.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function H3(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new cu(i),t.set(s,[a])):o>=r.length?(a=new cu(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const V3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W3=`uniform sampler2D shadow_pass;
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
}`,X3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],q3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],lu=new Le,Go=new O,Ul=new O;function Y3(i,t,e){let n=new Gc;const s=new Mt,o=new Mt,r=new Ge,a=new rd,l=new ad,c={},u=e.maxTextureSize,f={[ui]:un,[un]:ui,[Ze]:Ze},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:V3,fragmentShader:W3}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ae;p.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new oe(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let m=this.type;this.render=function(b,w,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===cf&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);const E=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ti),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const C=m!==this.type;C&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(I=>I.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,I=b.length;R<I;R++){const N=b[R],F=N.shadow;if(F===void 0){te("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const G=F.getFrameExtents();s.multiply(G),o.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/G.x),s.x=o.x*G.x,F.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/G.y),s.y=o.y*G.y,F.mapSize.y=o.y));const H=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||C===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===oo){if(N.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ni(s.x,s.y,{format:us,type:pi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new So(s.x,s.y,ti),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Pi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ke,F.map.depthTexture.magFilter=Ke}else N.isPointLight?(F.map=new th(s.x),F.map.depthTexture=new $f(s.x,di)):(F.map=new ni(s.x,s.y),F.map.depthTexture=new So(s.x,s.y,di)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Pi,this.type===ir?(F.map.depthTexture.compareFunction=H?Oc:Fc,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ke,F.map.depthTexture.magFilter=Ke);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const K=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();N.isPointLight!==!0&&F.updateMatrices(N,S);for(let j=0;j<K;j++){const St=F.getCamera(j);if(N.isPointLight){const mt=F.camera,zt=F.matrix,pt=N.distance||mt.far;pt!==mt.far&&(mt.far=pt,mt.updateProjectionMatrix()),Go.setFromMatrixPosition(N.matrixWorld),mt.position.copy(Go),Ul.copy(mt.position),Ul.add(X3[j]),mt.up.copy(q3[j]),mt.lookAt(Ul),mt.updateMatrixWorld(),zt.makeTranslation(-Go.x,-Go.y,-Go.z),lu.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(lu,mt.coordinateSystem,mt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,j),i.clear();else{j===0&&(i.setRenderTarget(F.map),i.clear());const mt=F.getViewport(j);r.set(o.x*mt.x,o.y*mt.y,o.x*mt.z,o.y*mt.w),L.viewport(r)}n=F.getFrustum(j),v(w,S,St,N,this.type)}F.isPointLightShadow!==!0&&this.type===oo&&x(F,S),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,T,P)};function x(b,w){const S=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new ni(s.x,s.y,{format:us,type:pi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,S,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,S,d,_,null)}function M(b,w,S,E){let T=null;const P=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)T=P;else if(T=S.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=T.uuid,C=w.uuid;let R=c[L];R===void 0&&(R={},c[L]=R);let I=R[C];I===void 0&&(I=T.clone(),R[C]=I,w.addEventListener("dispose",y)),T=I}if(T.visible=w.visible,T.wireframe=w.wireframe,E===oo?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const L=i.properties.get(T);L.light=S}return T}function v(b,w,S,E,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===oo)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const C=t.update(b),R=b.material;if(Array.isArray(R)){const I=C.groups;for(let N=0,F=I.length;N<F;N++){const G=I[N],H=R[G.materialIndex];if(H&&H.visible){const K=M(b,H,E,T);b.onBeforeShadow(i,b,w,S,C,K,G),i.renderBufferDirect(S,null,C,K,b,G),b.onAfterShadow(i,b,w,S,C,K,G)}}}else if(R.visible){const I=M(b,R,E,T);b.onBeforeShadow(i,b,w,S,C,I,null),i.renderBufferDirect(S,null,C,I,b,null),b.onAfterShadow(i,b,w,S,C,I,null)}}const L=b.children;for(let C=0,R=L.length;C<R;C++)v(L[C],w,S,E,T)}function y(b){b.target.removeEventListener("dispose",y);for(const S in c){const E=c[S],T=b.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function $3(i,t){function e(){let $=!1;const Ct=new Ge;let ut=null;const Pt=new Ge(0,0,0,0);return{setMask:function(Nt){ut!==Nt&&!$&&(i.colorMask(Nt,Nt,Nt,Nt),ut=Nt)},setLocked:function(Nt){$=Nt},setClear:function(Nt,xt,$t,Vt,Re){Re===!0&&(Nt*=Vt,xt*=Vt,$t*=Vt),Ct.set(Nt,xt,$t,Vt),Pt.equals(Ct)===!1&&(i.clearColor(Nt,xt,$t,Vt),Pt.copy(Ct))},reset:function(){$=!1,ut=null,Pt.set(-1,0,0,0)}}}function n(){let $=!1,Ct=!1,ut=null,Pt=null,Nt=null;return{setReversed:function(xt){if(Ct!==xt){const $t=t.get("EXT_clip_control");xt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Ct=xt;const Vt=Nt;Nt=null,this.setClear(Vt)}},getReversed:function(){return Ct},setTest:function(xt){xt?Z(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(xt){ut!==xt&&!$&&(i.depthMask(xt),ut=xt)},setFunc:function(xt){if(Ct&&(xt=Zd[xt]),Pt!==xt){switch(xt){case Na:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Oa:i.depthFunc(i.LESS);break;case _o:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=xt}},setLocked:function(xt){$=xt},setClear:function(xt){Nt!==xt&&(Nt=xt,Ct&&(xt=1-xt),i.clearDepth(xt))},reset:function(){$=!1,ut=null,Pt=null,Nt=null,Ct=!1}}}function s(){let $=!1,Ct=null,ut=null,Pt=null,Nt=null,xt=null,$t=null,Vt=null,Re=null;return{setTest:function(ve){$||(ve?Z(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(ve){Ct!==ve&&!$&&(i.stencilMask(ve),Ct=ve)},setFunc:function(ve,Hn,bn){(ut!==ve||Pt!==Hn||Nt!==bn)&&(i.stencilFunc(ve,Hn,bn),ut=ve,Pt=Hn,Nt=bn)},setOp:function(ve,Hn,bn){(xt!==ve||$t!==Hn||Vt!==bn)&&(i.stencilOp(ve,Hn,bn),xt=ve,$t=Hn,Vt=bn)},setLocked:function(ve){$=ve},setClear:function(ve){Re!==ve&&(i.clearStencil(ve),Re=ve)},reset:function(){$=!1,Ct=null,ut=null,Pt=null,Nt=null,xt=null,$t=null,Vt=null,Re=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,x=null,M=null,v=null,y=null,b=null,w=null,S=new Ht(0,0,0),E=0,T=!1,P=null,L=null,C=null,R=null,I=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=G>=2);let K=null,j={};const St=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),zt=new Ge().fromArray(St),pt=new Ge().fromArray(mt);function Y($,Ct,ut,Pt){const Nt=new Uint8Array(4),xt=i.createTexture();i.bindTexture($,xt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<ut;$t++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(Ct+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return xt}const B={};B[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),r.setFunc(_o),V(!1),W($l),Z(i.CULL_FACE),it(Ti);function Z($){u[$]!==!0&&(i.enable($),u[$]=!0)}function rt($){u[$]!==!1&&(i.disable($),u[$]=!1)}function vt($,Ct){return h[$]!==Ct?(i.bindFramebuffer($,Ct),h[$]=Ct,$===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ct),$===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function z($,Ct){let ut=p,Pt=!1;if($){ut=d.get(Ct),ut===void 0&&(ut=[],d.set(Ct,ut));const Nt=$.textures;if(ut.length!==Nt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,$t=Nt.length;xt<$t;xt++)ut[xt]=i.COLOR_ATTACHMENT0+xt;ut.length=Nt.length,Pt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(ut)}function st($){return _!==$?(i.useProgram($),_=$,!0):!1}const dt={[ys]:i.FUNC_ADD,[hf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};dt[ff]=i.MIN,dt[df]=i.MAX;const X={[pf]:i.ZERO,[mf]:i.ONE,[gf]:i.SRC_COLOR,[x0]:i.SRC_ALPHA,[yf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[xf]:i.DST_ALPHA,[_f]:i.ONE_MINUS_SRC_COLOR,[v0]:i.ONE_MINUS_SRC_ALPHA,[Sf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[bf]:i.CONSTANT_COLOR,[wf]:i.ONE_MINUS_CONSTANT_COLOR,[Ef]:i.CONSTANT_ALPHA,[Tf]:i.ONE_MINUS_CONSTANT_ALPHA};function it($,Ct,ut,Pt,Nt,xt,$t,Vt,Re,ve){if($===Ti){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),$!==lf){if($!==m||ve!==T){if((x!==ys||y!==ys)&&(i.blendEquation(i.FUNC_ADD),x=ys,y=ys),ve)switch($){case ao:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pe("WebGLState: Invalid blending: ",$);break}else switch($){case ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",$);break}M=null,v=null,b=null,w=null,S.set(0,0,0),E=0,m=$,T=ve}return}Nt=Nt||Ct,xt=xt||ut,$t=$t||Pt,(Ct!==x||Nt!==y)&&(i.blendEquationSeparate(dt[Ct],dt[Nt]),x=Ct,y=Nt),(ut!==M||Pt!==v||xt!==b||$t!==w)&&(i.blendFuncSeparate(X[ut],X[Pt],X[xt],X[$t]),M=ut,v=Pt,b=xt,w=$t),(Vt.equals(S)===!1||Re!==E)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Re),S.copy(Vt),E=Re),m=$,T=!1}function at($,Ct){$.side===Ze?rt(i.CULL_FACE):Z(i.CULL_FACE);let ut=$.side===un;Ct&&(ut=!ut),V(ut),$.blending===ao&&$.transparent===!1?it(Ti):it($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),r.setFunc($.depthFunc),r.setTest($.depthTest),r.setMask($.depthWrite),o.setMask($.colorWrite);const Pt=$.stencilWrite;a.setTest(Pt),Pt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ht($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function V($){P!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),P=$)}function W($){$!==rf?(Z(i.CULL_FACE),$!==L&&($===$l?i.cullFace(i.BACK):$===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),L=$}function _t($){$!==C&&(F&&i.lineWidth($),C=$)}function ht($,Ct,ut){$?(Z(i.POLYGON_OFFSET_FILL),(R!==Ct||I!==ut)&&(R=Ct,I=ut,r.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,ut))):rt(i.POLYGON_OFFSET_FILL)}function yt($){$?Z(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function Rt($){$===void 0&&($=i.TEXTURE0+N-1),K!==$&&(i.activeTexture($),K=$)}function k($,Ct,ut){ut===void 0&&(K===null?ut=i.TEXTURE0+N-1:ut=K);let Pt=j[ut];Pt===void 0&&(Pt={type:void 0,texture:void 0},j[ut]=Pt),(Pt.type!==$||Pt.texture!==Ct)&&(K!==ut&&(i.activeTexture(ut),K=ut),i.bindTexture($,Ct||B[$]),Pt.type=$,Pt.texture=Ct)}function Jt(){const $=j[K];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch($){pe("WebGLState:",$)}}function U(){try{i.compressedTexImage3D(...arguments)}catch($){pe("WebGLState:",$)}}function A(){try{i.texSubImage2D(...arguments)}catch($){pe("WebGLState:",$)}}function J(){try{i.texSubImage3D(...arguments)}catch($){pe("WebGLState:",$)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch($){pe("WebGLState:",$)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch($){pe("WebGLState:",$)}}function bt(){try{i.texStorage2D(...arguments)}catch($){pe("WebGLState:",$)}}function At(){try{i.texStorage3D(...arguments)}catch($){pe("WebGLState:",$)}}function lt(){try{i.texImage2D(...arguments)}catch($){pe("WebGLState:",$)}}function ft(){try{i.texImage3D(...arguments)}catch($){pe("WebGLState:",$)}}function Lt($){return f[$]!==void 0?f[$]:i.getParameter($)}function qt($,Ct){f[$]!==Ct&&(i.pixelStorei($,Ct),f[$]=Ct)}function Dt($){zt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),zt.copy($))}function Et($){pt.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),pt.copy($))}function Yt($,Ct){let ut=c.get(Ct);ut===void 0&&(ut=new WeakMap,c.set(Ct,ut));let Pt=ut.get($);Pt===void 0&&(Pt=i.getUniformBlockIndex(Ct,$.name),ut.set($,Pt))}function Qt($,Ct){const Pt=c.get(Ct).get($);l.get(Ct)!==Pt&&(i.uniformBlockBinding(Ct,Pt,$.__bindingPointIndex),l.set(Ct,Pt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,j={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,x=null,M=null,v=null,y=null,b=null,w=null,S=new Ht(0,0,0),E=0,T=!1,P=null,L=null,C=null,R=null,I=null,zt.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:Z,disable:rt,bindFramebuffer:vt,drawBuffers:z,useProgram:st,setBlending:it,setMaterial:at,setFlipSided:V,setCullFace:W,setLineWidth:_t,setPolygonOffset:ht,setScissorTest:yt,activeTexture:Rt,bindTexture:k,unbindTexture:Jt,compressedTexImage2D:Kt,compressedTexImage3D:U,texImage2D:lt,texImage3D:ft,pixelStorei:qt,getParameter:Lt,updateUBOMapping:Yt,uniformBlockBinding:Qt,texStorage2D:bt,texStorage3D:At,texSubImage2D:A,texSubImage3D:J,compressedTexSubImage2D:nt,compressedTexSubImage3D:ct,scissor:Dt,viewport:Et,reset:ne}}function Z3(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,A){return p?new OffscreenCanvas(U,A):wr("canvas")}function g(U,A,J){let nt=1;const ct=Kt(U);if((ct.width>J||ct.height>J)&&(nt=J/Math.max(ct.width,ct.height)),nt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const bt=Math.floor(nt*ct.width),At=Math.floor(nt*ct.height);h===void 0&&(h=_(bt,At));const lt=A?_(bt,At):h;return lt.width=bt,lt.height=At,lt.getContext("2d").drawImage(U,0,0,bt,At),te("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+bt+"x"+At+")."),lt}else return"data"in U&&te("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function m(U){return U.generateMipmaps}function x(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,A,J,nt,ct,bt=!1){if(U!==null){if(i[U]!==void 0)return i[U];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let At;nt&&(At=t.get("EXT_texture_norm16"),At||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=A;if(A===i.RED&&(J===i.FLOAT&&(lt=i.R32F),J===i.HALF_FLOAT&&(lt=i.R16F),J===i.UNSIGNED_BYTE&&(lt=i.R8),J===i.UNSIGNED_SHORT&&At&&(lt=At.R16_EXT),J===i.SHORT&&At&&(lt=At.R16_SNORM_EXT)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.R8UI),J===i.UNSIGNED_SHORT&&(lt=i.R16UI),J===i.UNSIGNED_INT&&(lt=i.R32UI),J===i.BYTE&&(lt=i.R8I),J===i.SHORT&&(lt=i.R16I),J===i.INT&&(lt=i.R32I)),A===i.RG&&(J===i.FLOAT&&(lt=i.RG32F),J===i.HALF_FLOAT&&(lt=i.RG16F),J===i.UNSIGNED_BYTE&&(lt=i.RG8),J===i.UNSIGNED_SHORT&&At&&(lt=At.RG16_EXT),J===i.SHORT&&At&&(lt=At.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RG8UI),J===i.UNSIGNED_SHORT&&(lt=i.RG16UI),J===i.UNSIGNED_INT&&(lt=i.RG32UI),J===i.BYTE&&(lt=i.RG8I),J===i.SHORT&&(lt=i.RG16I),J===i.INT&&(lt=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),J===i.UNSIGNED_INT&&(lt=i.RGB32UI),J===i.BYTE&&(lt=i.RGB8I),J===i.SHORT&&(lt=i.RGB16I),J===i.INT&&(lt=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),J===i.UNSIGNED_INT&&(lt=i.RGBA32UI),J===i.BYTE&&(lt=i.RGBA8I),J===i.SHORT&&(lt=i.RGBA16I),J===i.INT&&(lt=i.RGBA32I)),A===i.RGB&&(J===i.UNSIGNED_SHORT&&At&&(lt=At.RGB16_EXT),J===i.SHORT&&At&&(lt=At.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),A===i.RGBA){const ft=bt?br:de.getTransfer(ct);J===i.FLOAT&&(lt=i.RGBA32F),J===i.HALF_FLOAT&&(lt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(lt=ft===be?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&At&&(lt=At.RGBA16_EXT),J===i.SHORT&&At&&(lt=At.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function y(U,A){let J;return U?A===null||A===di||A===vo?J=i.DEPTH24_STENCIL8:A===ti?J=i.DEPTH32F_STENCIL8:A===xo&&(J=i.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===di||A===vo?J=i.DEPTH_COMPONENT24:A===ti?J=i.DEPTH_COMPONENT32F:A===xo&&(J=i.DEPTH_COMPONENT16),J}function b(U,A){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ke&&U.minFilter!==hn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function w(U){const A=U.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function S(U){const A=U.target;A.removeEventListener("dispose",S),P(A)}function E(U){const A=n.get(U);if(A.__webglInit===void 0)return;const J=U.source,nt=d.get(J);if(nt){const ct=nt[A.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&T(U),Object.keys(nt).length===0&&d.delete(J)}n.remove(U)}function T(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const J=U.source,nt=d.get(J);delete nt[A.__cacheKey],r.memory.textures--}function P(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(A.__webglFramebuffer[nt]))for(let ct=0;ct<A.__webglFramebuffer[nt].length;ct++)i.deleteFramebuffer(A.__webglFramebuffer[nt][ct]);else i.deleteFramebuffer(A.__webglFramebuffer[nt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[nt])}else{if(Array.isArray(A.__webglFramebuffer))for(let nt=0;nt<A.__webglFramebuffer.length;nt++)i.deleteFramebuffer(A.__webglFramebuffer[nt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let nt=0;nt<A.__webglColorRenderbuffer.length;nt++)A.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[nt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=U.textures;for(let nt=0,ct=J.length;nt<ct;nt++){const bt=n.get(J[nt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),r.memory.textures--),n.remove(J[nt])}n.remove(U)}let L=0;function C(){L=0}function R(){return L}function I(U){L=U}function N(){const U=L;return U>=s.maxTextures&&te("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,U}function F(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function G(U,A){const J=n.get(U);if(U.isVideoTexture&&k(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const nt=U.image;if(nt===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(J,U,A);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function H(U,A){const J=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){rt(J,U,A);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function K(U,A){const J=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){rt(J,U,A);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function j(U,A){const J=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){vt(J,U,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const St={[xr]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Rs]:i.MIRRORED_REPEAT},mt={[Ke]:i.NEAREST,[Rc]:i.NEAREST_MIPMAP_NEAREST,[Xo]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},zt={[Df]:i.NEVER,[Of]:i.ALWAYS,[If]:i.LESS,[Fc]:i.LEQUAL,[Uf]:i.EQUAL,[Oc]:i.GEQUAL,[Nf]:i.GREATER,[Ff]:i.NOTEQUAL};function pt(U,A){if(A.type===ti&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===hn||A.magFilter===Ea||A.magFilter===Xo||A.magFilter===rs||A.minFilter===hn||A.minFilter===Ea||A.minFilter===Xo||A.minFilter===rs)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,St[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,St[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,St[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,mt[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,mt[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,zt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ke||A.minFilter!==Xo&&A.minFilter!==rs||A.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Y(U,A){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",w));const nt=A.source;let ct=d.get(nt);ct===void 0&&(ct={},d.set(nt,ct));const bt=F(A);if(bt!==U.__cacheKey){ct[bt]===void 0&&(ct[bt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,J=!0),ct[bt].usedTimes++;const At=ct[U.__cacheKey];At!==void 0&&(ct[U.__cacheKey].usedTimes--,At.usedTimes===0&&T(A)),U.__cacheKey=bt,U.__webglTexture=ct[bt].texture}return J}function B(U,A,J){return Math.floor(Math.floor(U/J)/A)}function Z(U,A,J,nt){const bt=U.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,J,nt,A.data);else{bt.sort((qt,Dt)=>qt.start-Dt.start);let At=0;for(let qt=1;qt<bt.length;qt++){const Dt=bt[At],Et=bt[qt],Yt=Dt.start+Dt.count,Qt=B(Et.start,A.width,4),ne=B(Dt.start,A.width,4);Et.start<=Yt+1&&Qt===ne&&B(Et.start+Et.count-1,A.width,4)===Qt?Dt.count=Math.max(Dt.count,Et.start+Et.count-Dt.start):(++At,bt[At]=Et)}bt.length=At+1;const lt=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),Lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let qt=0,Dt=bt.length;qt<Dt;qt++){const Et=bt[qt],Yt=Math.floor(Et.start/4),Qt=Math.ceil(Et.count/4),ne=Yt%A.width,$=Math.floor(Yt/A.width),Ct=Qt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(i.UNPACK_SKIP_ROWS,$),e.texSubImage2D(i.TEXTURE_2D,0,ne,$,Ct,ut,J,nt,A.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function rt(U,A,J){let nt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(nt=i.TEXTURE_3D);const ct=Y(U,A),bt=A.source;e.bindTexture(nt,U.__webglTexture,i.TEXTURE0+J);const At=n.get(bt);if(bt.version!==At.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ut=de.getPrimaries(de.workingColorSpace),Pt=A.colorSpace===Oi?null:de.getPrimaries(A.colorSpace),Nt=A.colorSpace===Oi||ut===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let ft=g(A.image,!1,s.maxTextureSize);ft=Jt(A,ft);const Lt=o.convert(A.format,A.colorSpace),qt=o.convert(A.type);let Dt=v(A.internalFormat,Lt,qt,A.normalized,A.colorSpace,A.isVideoTexture);pt(nt,A);let Et;const Yt=A.mipmaps,Qt=A.isVideoTexture!==!0,ne=At.__version===void 0||ct===!0,$=bt.dataReady,Ct=b(A,ft);if(A.isDepthTexture)Dt=y(A.format===as,A.type),ne&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Dt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Lt,qt,null));else if(A.isDataTexture)if(Yt.length>0){Qt&&ne&&e.texStorage2D(i.TEXTURE_2D,Ct,Dt,Yt[0].width,Yt[0].height);for(let ut=0,Pt=Yt.length;ut<Pt;ut++)Et=Yt[ut],Qt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Lt,qt,Et.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,Et.width,Et.height,0,Lt,qt,Et.data);A.generateMipmaps=!1}else Qt?(ne&&e.texStorage2D(i.TEXTURE_2D,Ct,Dt,ft.width,ft.height),$&&Z(A,ft,Lt,qt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Lt,qt,ft.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Dt,Yt[0].width,Yt[0].height,ft.depth);for(let ut=0,Pt=Yt.length;ut<Pt;ut++)if(Et=Yt[ut],A.format!==ei)if(Lt!==null)if(Qt){if($)if(A.layerUpdates.size>0){const Nt=Hh(Et.width,Et.height,A.format,A.type);for(const xt of A.layerUpdates){const $t=Et.data.subarray(xt*Nt/Et.data.BYTES_PER_ELEMENT,(xt+1)*Nt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,xt,Et.width,Et.height,1,Lt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ft.depth,Lt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,Et.width,Et.height,ft.depth,0,Et.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ft.depth,Lt,qt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,Et.width,Et.height,ft.depth,0,Lt,qt,Et.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Qt&&ne&&e.texStorage2D(i.TEXTURE_2D,Ct,Dt,Yt[0].width,Yt[0].height);for(let ut=0,Pt=Yt.length;ut<Pt;ut++)Et=Yt[ut],A.format!==ei?Lt!==null?Qt?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Lt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Dt,Et.width,Et.height,0,Et.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Lt,qt,Et.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,Et.width,Et.height,0,Lt,qt,Et.data)}else if(A.isDataArrayTexture)if(Qt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Dt,ft.width,ft.height,ft.depth),$)if(A.layerUpdates.size>0){const ut=Hh(ft.width,ft.height,A.format,A.type);for(const Pt of A.layerUpdates){const Nt=ft.data.subarray(Pt*ut/ft.data.BYTES_PER_ELEMENT,(Pt+1)*ut/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,ft.width,ft.height,1,Lt,qt,Nt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Lt,qt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,Lt,qt,ft.data);else if(A.isData3DTexture)Qt?(ne&&e.texStorage3D(i.TEXTURE_3D,Ct,Dt,ft.width,ft.height,ft.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Lt,qt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,Lt,qt,ft.data);else if(A.isFramebufferTexture){if(ne)if(Qt)e.texStorage2D(i.TEXTURE_2D,Ct,Dt,ft.width,ft.height);else{let ut=ft.width,Pt=ft.height;for(let Nt=0;Nt<Ct;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Dt,ut,Pt,0,Lt,qt,null),ut>>=1,Pt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ft.parentNode!==ut){ut.appendChild(ft),f.add(A),ut.onpaint=Pt=>{const Nt=Pt.changedElements;for(const xt of f)Nt.includes(xt.image)&&(xt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{const Nt=i.RGBA,xt=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Nt,xt,$t,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Qt&&ne){const ut=Kt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Dt,ut.width,ut.height)}for(let ut=0,Pt=Yt.length;ut<Pt;ut++)Et=Yt[ut],Qt?$&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Lt,qt,Et):e.texImage2D(i.TEXTURE_2D,ut,Dt,Lt,qt,Et);A.generateMipmaps=!1}else if(Qt){if(ne){const ut=Kt(ft);e.texStorage2D(i.TEXTURE_2D,Ct,Dt,ut.width,ut.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,qt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Lt,qt,ft);m(A)&&x(nt),At.__version=bt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function vt(U,A,J){if(A.image.length!==6)return;const nt=Y(U,A),ct=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+J);const bt=n.get(ct);if(ct.version!==bt.__version||nt===!0){e.activeTexture(i.TEXTURE0+J);const At=de.getPrimaries(de.workingColorSpace),lt=A.colorSpace===Oi?null:de.getPrimaries(A.colorSpace),ft=A.colorSpace===Oi||At===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Lt=A.isCompressedTexture||A.image[0].isCompressedTexture,qt=A.image[0]&&A.image[0].isDataTexture,Dt=[];for(let xt=0;xt<6;xt++)!Lt&&!qt?Dt[xt]=g(A.image[xt],!0,s.maxCubemapSize):Dt[xt]=qt?A.image[xt].image:A.image[xt],Dt[xt]=Jt(A,Dt[xt]);const Et=Dt[0],Yt=o.convert(A.format,A.colorSpace),Qt=o.convert(A.type),ne=v(A.internalFormat,Yt,Qt,A.normalized,A.colorSpace),$=A.isVideoTexture!==!0,Ct=bt.__version===void 0||nt===!0,ut=ct.dataReady;let Pt=b(A,Et);pt(i.TEXTURE_CUBE_MAP,A);let Nt;if(Lt){$&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ne,Et.width,Et.height);for(let xt=0;xt<6;xt++){Nt=Dt[xt].mipmaps;for(let $t=0;$t<Nt.length;$t++){const Vt=Nt[$t];A.format!==ei?Yt!==null?$?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,0,0,Vt.width,Vt.height,Yt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,ne,Vt.width,Vt.height,0,Vt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,0,0,Vt.width,Vt.height,Yt,Qt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,ne,Vt.width,Vt.height,0,Yt,Qt,Vt.data)}}}else{if(Nt=A.mipmaps,$&&Ct){Nt.length>0&&Pt++;const xt=Kt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(qt){$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Dt[xt].width,Dt[xt].height,Yt,Qt,Dt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Dt[xt].width,Dt[xt].height,0,Yt,Qt,Dt[xt].data);for(let $t=0;$t<Nt.length;$t++){const Re=Nt[$t].image[xt].image;$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,0,0,Re.width,Re.height,Yt,Qt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,ne,Re.width,Re.height,0,Yt,Qt,Re.data)}}else{$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Yt,Qt,Dt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Yt,Qt,Dt[xt]);for(let $t=0;$t<Nt.length;$t++){const Vt=Nt[$t];$?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,0,0,Yt,Qt,Vt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,ne,Yt,Qt,Vt.image[xt])}}}m(A)&&x(i.TEXTURE_CUBE_MAP),bt.__version=ct.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function z(U,A,J,nt,ct,bt){const At=o.convert(J.format,J.colorSpace),lt=o.convert(J.type),ft=v(J.internalFormat,At,lt,J.normalized,J.colorSpace),Lt=n.get(A),qt=n.get(J);if(qt.__renderTarget=A,!Lt.__hasExternalTextures){const Dt=Math.max(1,A.width>>bt),Et=Math.max(1,A.height>>bt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,bt,ft,Dt,Et,A.depth,0,At,lt,null):e.texImage2D(ct,bt,ft,Dt,Et,0,At,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Rt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ct,qt.__webglTexture,0,yt(A)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ct,qt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(U,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const nt=A.depthTexture,ct=nt&&nt.isDepthTexture?nt.type:null,bt=y(A.stencilBuffer,ct),At=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(A),bt,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(A),bt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,bt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,U)}else{const nt=A.textures;for(let ct=0;ct<nt.length;ct++){const bt=nt[ct],At=o.convert(bt.format,bt.colorSpace),lt=o.convert(bt.type),ft=v(bt.internalFormat,At,lt,bt.normalized,bt.colorSpace);Rt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(A),ft,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(A),ft,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ft,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(U,A,J){const nt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ct=n.get(A.depthTexture);if(ct.__renderTarget=A,(!ct.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),nt){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),pt(i.TEXTURE_CUBE_MAP,A.depthTexture);const Lt=o.convert(A.depthTexture.format),qt=o.convert(A.depthTexture.type);let Dt;A.depthTexture.format===Pi?Dt=i.DEPTH_COMPONENT24:A.depthTexture.format===as&&(Dt=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Dt,A.width,A.height,0,Lt,qt,null)}}else G(A.depthTexture,0);const bt=ct.__webglTexture,At=yt(A),lt=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,ft=A.depthTexture.format===as?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Pi)Rt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,lt,bt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,ft,lt,bt,0);else if(A.depthTexture.format===as)Rt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,lt,bt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,ft,lt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X(U){const A=n.get(U),J=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const nt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),nt){const ct=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,nt.removeEventListener("dispose",ct)};nt.addEventListener("dispose",ct),A.__depthDisposeCallback=ct}A.__boundDepthTexture=nt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let nt=0;nt<6;nt++)dt(A.__webglFramebuffer[nt],U,nt);else{const nt=U.texture.mipmaps;nt&&nt.length>0?dt(A.__webglFramebuffer[0],U,0):dt(A.__webglFramebuffer,U,0)}else if(J){A.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[nt]),A.__webglDepthbuffer[nt]===void 0)A.__webglDepthbuffer[nt]=i.createRenderbuffer(),st(A.__webglDepthbuffer[nt],U,!1);else{const ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=A.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,bt)}}else{const nt=U.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),st(A.__webglDepthbuffer,U,!1);else{const ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,bt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(U,A,J){const nt=n.get(U);A!==void 0&&z(nt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&X(U)}function at(U){const A=U.texture,J=n.get(U),nt=n.get(A);U.addEventListener("dispose",S);const ct=U.textures,bt=U.isWebGLCubeRenderTarget===!0,At=ct.length>1;if(At||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=A.version,r.memory.textures++),bt){J.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[lt]=[];for(let ft=0;ft<A.mipmaps.length;ft++)J.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else J.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let lt=0;lt<A.mipmaps.length;lt++)J.__webglFramebuffer[lt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(At)for(let lt=0,ft=ct.length;lt<ft;lt++){const Lt=n.get(ct[lt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),r.memory.textures++)}if(U.samples>0&&Rt(U)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let lt=0;lt<ct.length;lt++){const ft=ct[lt];J.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[lt]);const Lt=o.convert(ft.format,ft.colorSpace),qt=o.convert(ft.type),Dt=v(ft.internalFormat,Lt,qt,ft.normalized,ft.colorSpace,U.isXRRenderTarget===!0),Et=yt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,Dt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,J.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),st(J.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),pt(i.TEXTURE_CUBE_MAP,A);for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let ft=0;ft<A.mipmaps.length;ft++)z(J.__webglFramebuffer[lt][ft],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else z(J.__webglFramebuffer[lt],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(A)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let lt=0,ft=ct.length;lt<ft;lt++){const Lt=ct[lt],qt=n.get(Lt);let Dt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,qt.__webglTexture),pt(Dt,Lt),z(J.__webglFramebuffer,U,Lt,i.COLOR_ATTACHMENT0+lt,Dt,0),m(Lt)&&x(Dt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(lt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,nt.__webglTexture),pt(lt,A),A.mipmaps&&A.mipmaps.length>0)for(let ft=0;ft<A.mipmaps.length;ft++)z(J.__webglFramebuffer[ft],U,A,i.COLOR_ATTACHMENT0,lt,ft);else z(J.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,lt,0);m(A)&&x(lt),e.unbindTexture()}U.depthBuffer&&X(U)}function V(U){const A=U.textures;for(let J=0,nt=A.length;J<nt;J++){const ct=A[J];if(m(ct)){const bt=M(U),At=n.get(ct).__webglTexture;e.bindTexture(bt,At),x(bt),e.unbindTexture()}}}const W=[],_t=[];function ht(U){if(U.samples>0){if(Rt(U)===!1){const A=U.textures,J=U.width,nt=U.height;let ct=i.COLOR_BUFFER_BIT;const bt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(U),lt=A.length>1;if(lt)for(let Lt=0;Lt<A.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const ft=U.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Lt=0;Lt<A.length;Lt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Lt]);const qt=n.get(A[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,J,nt,0,0,J,nt,ct,i.NEAREST),l===!0&&(W.length=0,_t.length=0,W.push(i.COLOR_ATTACHMENT0+Lt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(W.push(bt),_t.push(bt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Lt=0;Lt<A.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Lt]);const qt=n.get(A[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function yt(U){return Math.min(s.maxSamples,U.samples)}function Rt(U){const A=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function k(U){const A=r.render.frame;u.get(U)!==A&&(u.set(U,A),U.update())}function Jt(U,A){const J=U.colorSpace,nt=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==yr&&J!==Oi&&(de.getTransfer(J)===be?(nt!==ei||ct!==kn)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",J)),A}function Kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.getTextureUnits=R,this.setTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=it,this.setupRenderTarget=at,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Sd(i,t){function e(n,s=Oi){let o;const r=de.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===P0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===L0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===R0)return i.BYTE;if(n===C0)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===Cc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===D0)return i.ALPHA;if(n===I0)return i.RGB;if(n===ei)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Dc)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===us)return i.RG;if(n===Uc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===or||n===rr||n===ar||n===cr)if(r===be)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===or)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===or)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Va||n===Wa||n===Xa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ha)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===$a||n===Za||n===Ka||n===vr||n===Ja)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===qa||n===Ya)return r===be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===$a)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return o.COMPRESSED_R11_EAC;if(n===Ka)return o.COMPRESSED_SIGNED_R11_EAC;if(n===vr)return o.COMPRESSED_RG11_EAC;if(n===Ja)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===oc||n===rc||n===ac||n===cc||n===lc||n===hc||n===uc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Qa)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===dc||n===pc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===fc)return r===be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===Mr||n===_c)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===mc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const K3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J3=`
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

}`;class Q3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new W0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:K3,fragmentShader:J3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j3 extends qi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new Q3,m={},x=e.getContextAttributes();let M=null,v=null;const y=[],b=[],w=new Mt;let S=null,E=null;const T=new ln;T.viewport=new Ge;const P=new ln;P.viewport=new Ge;const L=[T,P],C=new dd;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=y[B];return Z===void 0&&(Z=new Aa,y[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=y[B];return Z===void 0&&(Z=new Aa,y[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=y[B];return Z===void 0&&(Z=new Aa,y[B]=Z),Z.getHandSpace()};function N(B){const Z=b.indexOf(B.inputSource);if(Z===-1)return;const rt=y[Z];rt!==void 0&&(rt.update(B.inputSource,B.frame,c||r),rt.dispatchEvent({type:B.type,data:B.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",G);for(let B=0;B<y.length;B++){const Z=b[B];Z!==null&&(b[B]=null,y[B].disconnect(Z))}R=null,I=null,g.reset();for(const B in m)delete m[B];if(t.setRenderTarget(M),d=null,h=null,f=null,s=null,v=null,Y.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),E!==null){const B=E.camera;B.fov=E.fov,B.zoom=E.zoom,B.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,vt=null,z=null;x.depth&&(z=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?as:Pi,vt=x.stencil?vo:di);const st={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:o};f=this.getBinding(),h=f.createProjectionLayer(st),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new ni(h.textureWidth,h.textureHeight,{format:ei,type:kn,depthTexture:new So(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ni(d.framebufferWidth,d.framebufferHeight,{format:ei,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(B){for(let Z=0;Z<B.removed.length;Z++){const rt=B.removed[Z],vt=b.indexOf(rt);vt>=0&&(b[vt]=null,y[vt].disconnect(rt))}for(let Z=0;Z<B.added.length;Z++){const rt=B.added[Z];let vt=b.indexOf(rt);if(vt===-1){for(let st=0;st<y.length;st++)if(st>=b.length){b.push(rt),vt=st;break}else if(b[st]===null){b[st]=rt,vt=st;break}if(vt===-1)break}const z=y[vt];z&&z.connect(rt)}}const H=new O,K=new O;function j(B,Z,rt){H.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(rt.matrixWorld);const vt=H.distanceTo(K),z=Z.projectionMatrix.elements,st=rt.projectionMatrix.elements,dt=z[14]/(z[10]-1),X=z[14]/(z[10]+1),it=(z[9]+1)/z[5],at=(z[9]-1)/z[5],V=(z[8]-1)/z[0],W=(st[8]+1)/st[0],_t=dt*V,ht=dt*W,yt=vt/(-V+W),Rt=yt*-V;if(Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Rt),B.translateZ(yt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),z[10]===-1)B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const k=dt+yt,Jt=X+yt,Kt=_t-Rt,U=ht+(vt-Rt),A=it*X/Jt*k,J=at*X/Jt*k;B.projectionMatrix.makePerspective(Kt,U,A,J,k,Jt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function St(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let Z=B.near,rt=B.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),C.near=P.near=T.near=Z,C.far=P.far=T.far=rt,(R!==C.near||I!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,I=C.far),C.layers.mask=B.layers.mask|6,T.layers.mask=C.layers.mask&-5,P.layers.mask=C.layers.mask&-3;const vt=B.parent,z=C.cameras;St(C,vt);for(let st=0;st<z.length;st++)St(z[st],vt);z.length===2?j(C,T,P):C.projectionMatrix.copy(T.projectionMatrix),E===null&&B.isPerspectiveCamera&&(E={camera:B,fov:B.fov,zoom:B.zoom}),mt(B,C,vt)};function mt(B,Z,rt){rt===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(rt.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Tr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(B){return m[B]};let zt=null;function pt(B,Z){if(u=Z.getViewerPose(c||r),p=Z,u!==null){const rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let vt=!1;rt.length!==C.cameras.length&&(C.cameras.length=0,vt=!0);for(let X=0;X<rt.length;X++){const it=rt[X];let at=null;if(d!==null)at=d.getViewport(it);else{const W=f.getViewSubImage(h,it);at=W.viewport,X===0&&(t.setRenderTargetTextures(v,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(v))}let V=L[X];V===void 0&&(V=new ln,V.layers.enable(X),V.viewport=new Ge,L[X]=V),V.matrix.fromArray(it.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(it.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(at.x,at.y,at.width,at.height),X===0&&(C.matrix.copy(V.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),vt===!0&&C.cameras.push(V)}const z=s.enabledFeatures;if(z&&z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const X=f.getDepthInformation(rt[0]);X&&X.isValid&&X.texture&&g.init(X,s.renderState)}if(z&&z.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let X=0;X<rt.length;X++){const it=rt[X].camera;if(it){let at=m[it];at||(at=new W0,m[it]=at);const V=f.getCameraImage(it);at.sourceTexture=V}}}}for(let rt=0;rt<y.length;rt++){const vt=b[rt],z=y[rt];vt!==null&&z!==void 0&&z.update(vt,Z,c||r)}zt&&zt(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}const Y=new md;Y.setAnimationLoop(pt),this.setAnimationLoop=function(B){zt=B},this.dispose=function(){}}}const t_=new Le,yd=new se;yd.set(-1,0,0,0,1,0,0,0,1);function e_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,id(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),f(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=t.get(m),M=x.envMap,v=x.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function c(v,y){let b=s[v.id];b===void 0&&(g(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",x));const w=y.program;n.updateUBOMapping(v,w);const S=t.render.frame;o[v.id]!==S&&(h(v),o[v.id]=S)}function u(v){const y=f();v.__bindingPointIndex=y;const b=i.createBuffer(),w=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function f(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=s[v.id],b=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,E=b.length;S<E;S++){const T=b[S];if(Array.isArray(T))for(let P=0,L=T.length;P<L;P++)d(T[P],S,P,w);else d(T,S,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,b,w){if(_(v,y,b,w)===!0){const S=v.__offset,E=v.value;if(Array.isArray(E)){let T=0;for(let P=0;P<E.length;P++){const L=E[P],C=m(L);p(L,v.__data,T),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(T+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function p(v,y,b){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,b)}function _(v,y,b,w){const S=v.value,E=y+"_"+b;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:ArrayBuffer.isView(S)?w[E]=S.slice():w[E]=S.clone(),!0;{const T=w[E];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return w[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(T.equals(S)===!1)return T.copy(S),!0}}return!1}function g(v){const y=v.uniforms;let b=0;const w=16;for(let E=0,T=y.length;E<T;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let L=0,C=P.length;L<C;L++){const R=P[L],I=Array.isArray(R.value)?R.value:[R.value];for(let N=0,F=I.length;N<F;N++){const G=I[N],H=m(G),K=b%w,j=K%H.boundary,St=K+j;b+=j,St!==0&&w-St<H.storage&&(b+=w-St),R.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=H.storage}}}const S=b%w;return S>0&&(b+=w-S),v.__size=b,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):te("WebGLRenderer: Unsupported uniform value type.",v),y}function x(v){const y=v.target;y.removeEventListener("dispose",x);const b=r.indexOf(y.__bindingPointIndex);r.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function M(){for(const v in s)i.deleteBuffer(s[v]);r=[],s={},o={}}return{bind:l,update:c,dispose:M}}const i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function s_(){return vi===null&&(vi=new kc(i_,16,16,us,pi),vi.name="DFG_LUT",vi.minFilter=hn,vi.magFilter=hn,vi.wrapS=li,vi.wrapT=li,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class bd{constructor(t={}){const{canvas:e=zf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=kn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const _=d,g=new Set([Nc,Uc,Ic]),m=new Set([kn,di,xo,vo,Pc,Lc]),x=new Uint32Array(4),M=new Int32Array(4),v=new O;let y=null,b=null;const w=[],S=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1,L=null,C=null,R=null,I=null;this._outputColorSpace=je;let N=0,F=0,G=null,H=-1,K=null;const j=new Ge,St=new Ge;let mt=null;const zt=new Ht(0);let pt=0,Y=e.width,B=e.height,Z=1,rt=null,vt=null;const z=new Ge(0,0,Y,B),st=new Ge(0,0,Y,B);let dt=!1;const X=new Gc;let it=!1,at=!1;const V=new Le,W=new O,_t=new Ge,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Rt(){return G===null?Z:1}let k=n;function Jt(D,q){return e.getContext(D,q)}let Kt,U,A,J,nt,ct,bt,At,lt,ft,Lt,qt,Dt,Et,Yt,Qt,ne,$,Ct,ut,Pt,Nt,xt;try{const D={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ac}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Hn,!1),k===null){const q="webgl2";if(k=Jt(q,D),k===null)throw Jt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(D){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),pe("WebGLRenderer: "+D.message),D}function $t(){Kt=new og(k),Kt.init(),Pt=new Sd(k,Kt),U=new Zm(k,Kt,t,Pt),A=new $3(k,Kt),U.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),C=k.createFramebuffer(),R=k.createFramebuffer(),I=k.createFramebuffer(),J=new cg(k),nt=new U3,ct=new Z3(k,Kt,A,nt,U,Pt,J),bt=new sg(T),At=new h1(k),Nt=new Ym(k,At),lt=new rg(k,At,J,Nt),ft=new hg(k,lt,At,Nt,J),$=new lg(k,U,ct),Yt=new Km(nt),Lt=new I3(T,bt,Kt,U,Nt,Yt),qt=new e_(T,nt),Dt=new F3,Et=new H3(Kt),ne=new qm(T,bt,A,ft,p,l),Qt=new Y3(T,ft,U),xt=new n_(k,J,U,A),Ct=new $m(k,Kt,J),ut=new ag(k,Kt,J),J.programs=Lt.programs,T.capabilities=U,T.extensions=Kt,T.properties=nt,T.renderLists=Dt,T.shadowMap=Qt,T.state=A,T.info=J}_!==kn&&(E=new fg(_,e.width,e.height,a,s,o));const Vt=new j3(T,k);this.xr=Vt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=Kt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Kt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(D){D!==void 0&&(Z=D,this.setSize(Y,B,!1))},this.getSize=function(D){return D.set(Y,B)},this.setSize=function(D,q,ot=!0){if(Vt.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=D,B=q,e.width=Math.floor(D*Z),e.height=Math.floor(q*Z),ot===!0&&(e.style.width=D+"px",e.style.height=q+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(Y*Z,B*Z).floor()},this.setDrawingBufferSize=function(D,q,ot){Y=D,B=q,Z=ot,e.width=Math.floor(D*ot),e.height=Math.floor(q*ot),this.setViewport(0,0,D,q)},this.setEffects=function(D){if(_===kn){pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let q=0;q<D.length;q++)if(D[q].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(j)},this.getViewport=function(D){return D.copy(z)},this.setViewport=function(D,q,ot,tt){D.isVector4?z.set(D.x,D.y,D.z,D.w):z.set(D,q,ot,tt),A.viewport(j.copy(z).multiplyScalar(Z).round())},this.getScissor=function(D){return D.copy(st)},this.setScissor=function(D,q,ot,tt){D.isVector4?st.set(D.x,D.y,D.z,D.w):st.set(D,q,ot,tt),A.scissor(St.copy(st).multiplyScalar(Z).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(D){A.setScissorTest(dt=D)},this.setOpaqueSort=function(D){rt=D},this.setTransparentSort=function(D){vt=D},this.getClearColor=function(D){return D.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,ot=!0){let tt=0;if(D){let et=!1;if(G!==null){const It=G.texture.format;et=g.has(It)}if(et){const It=G.texture.type,kt=m.has(It),Ft=ne.getClearColor(),Wt=ne.getClearAlpha(),Zt=Ft.r,ce=Ft.g,he=Ft.b;kt?(x[0]=Zt,x[1]=ce,x[2]=he,x[3]=Wt,k.clearBufferuiv(k.COLOR,0,x)):(M[0]=Zt,M[1]=ce,M[2]=he,M[3]=Wt,k.clearBufferiv(k.COLOR,0,M))}else tt|=k.COLOR_BUFFER_BIT}q&&(tt|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(tt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&k.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),L=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),ne.dispose(),Dt.dispose(),Et.dispose(),nt.dispose(),bt.dispose(),ft.dispose(),Nt.dispose(),xt.dispose(),Lt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Tt),Vt.removeEventListener("sessionend",Ot),Bt.stop()};function Re(D){D.preventDefault(),Er("WebGLRenderer: Context Lost."),P=!0}function ve(){Er("WebGLRenderer: Context Restored."),P=!1;const D=J.autoReset,q=Qt.enabled,ot=Qt.autoUpdate,tt=Qt.needsUpdate,et=Qt.type;$t(),J.autoReset=D,Qt.enabled=q,Qt.autoUpdate=ot,Qt.needsUpdate=tt,Qt.type=et}function Hn(D){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function bn(D){const q=D.target;q.removeEventListener("dispose",bn),il(q)}function il(D){Or(D),nt.remove(D)}function Or(D){const q=nt.get(D).programs;q!==void 0&&(q.forEach(function(ot){Lt.releaseProgram(ot)}),D.isShaderMaterial&&Lt.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,ot,tt,et,It){q===null&&(q=ht);const kt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Ft=Ls(D,q,ot,tt,et);A.setMaterial(tt,kt);let Wt=ot.index,Zt=1;if(tt.wireframe===!0){if(Wt=lt.getWireframeAttribute(ot),Wt===void 0)return;Zt=2}const ce=ot.drawRange,he=ot.attributes.position;let Xt=ce.start*Zt,ye=(ce.start+ce.count)*Zt;It!==null&&(Xt=Math.max(Xt,It.start*Zt),ye=Math.min(ye,(It.start+It.count)*Zt)),Wt!==null?(Xt=Math.max(Xt,0),ye=Math.min(ye,Wt.count)):he!=null&&(Xt=Math.max(Xt,0),ye=Math.min(ye,he.count));const Ye=ye-Xt;if(Ye<0||Ye===1/0)return;Nt.setup(et,tt,Ft,ot,Wt);let ze,De=Ct;if(Wt!==null&&(ze=At.get(Wt),De=ut,De.setIndex(ze)),et.isMesh)tt.wireframe===!0?(A.setLineWidth(tt.wireframeLinewidth*Rt()),De.setMode(k.LINES)):De.setMode(k.TRIANGLES);else if(et.isLine){let pn=tt.linewidth;pn===void 0&&(pn=1),A.setLineWidth(pn*Rt()),et.isLineSegments?De.setMode(k.LINES):et.isLineLoop?De.setMode(k.LINE_LOOP):De.setMode(k.LINE_STRIP)}else et.isPoints?De.setMode(k.POINTS):et.isSprite&&De.setMode(k.TRIANGLES);if(et.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))De.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const pn=et._multiDrawStarts,Gt=et._multiDrawCounts,En=et._multiDrawCount,xe=Wt?At.get(Wt).bytesPerElement:1,Kn=nt.get(tt).currentProgram.getUniforms();for(let _i=0;_i<En;_i++)Kn.setValue(k,"_gl_DrawID",_i),De.render(pn[_i]/xe,Gt[_i])}else if(et.isInstancedMesh)De.renderInstances(Xt,Ye,et.count);else if(ot.isInstancedBufferGeometry){const pn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Gt=Math.min(ot.instanceCount,pn);De.renderInstances(Xt,Ye,Gt)}else De.render(Xt,Ye)};function Co(D,q,ot,tt){L!==null&&D.isNodeMaterial&&L.setObject(tt,D),it===!0&&Yt.setState(D,ot,!1),D.transparent===!0&&D.side===Ze&&D.forceSinglePass===!1?(D.side=un,D.needsUpdate=!0,Ce(D,q,tt),D.side=ui,D.needsUpdate=!0,Ce(D,q,tt),D.side=Ze):Ce(D,q,tt)}this.compile=function(D,q,ot=null){ot===null&&(ot=D),L!==null&&L.renderStart(D,q,ot),b=Et.get(ot),b.init(q),S.push(b),ot.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(b.pushLight(et),et.castShadow&&b.pushShadow(et))}),D!==ot&&D.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(b.pushLight(et),et.castShadow&&b.pushShadow(et))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),at=this.localClippingEnabled,it=Yt.init(this.clippingPlanes,at),it===!0&&Yt.setGlobalState(this.clippingPlanes,q),L!==null&&Qt.render(b.state.shadowsArray,ot,q);const tt=new Set;return D.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const It=et.material;if(It)if(Array.isArray(It))for(let kt=0;kt<It.length;kt++){const Ft=It[kt];Co(Ft,ot,q,et),tt.add(Ft)}else Co(It,ot,q,et),tt.add(It)}),b=S.pop(),L!==null&&L.renderEnd(),tt},this.compileAsync=function(D,q,ot=null){const tt=this.compile(D,q,ot);return new Promise(et=>{function It(){if(tt.forEach(function(kt){const Wt=nt.get(kt).currentProgram;(Wt===void 0||Wt.isReady())&&tt.delete(kt)}),tt.size===0){et(D);return}setTimeout(It,10)}Kt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Q=null;function wt(D){Q&&Q(D)}function Tt(){Bt.stop()}function Ot(){Bt.start()}const Bt=new md;Bt.setAnimationLoop(wt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(D){Q=D,Vt.setAnimationLoop(D),D===null?Bt.stop():Bt.start()},Vt.addEventListener("sessionstart",Tt),Vt.addEventListener("sessionend",Ot),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(D,q);const ot=Vt.enabled===!0&&Vt.isPresenting===!0,tt=E!==null&&(G===null||ot)&&E.begin(T,G);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(q),q=Vt.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,q,G),b=Et.get(D,S.length),b.init(q),b.state.textureUnits=ct.getTextureUnits(),S.push(b),V.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix(V,hi,q.reversedDepth),at=this.localClippingEnabled,it=Yt.init(this.clippingPlanes,at),y=Dt.get(D,w.length),y.init(),w.push(y),Vt.enabled===!0&&Vt.isPresenting===!0){const kt=T.xr.getDepthSensingMesh();kt!==null&&ie(kt,q,-1/0,T.sortObjects)}ie(D,q,0,T.sortObjects),y.finish(),L!==null&&L.updateLights(b.state.lightsArray),T.sortObjects===!0&&y.sort(rt,vt),yt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,yt&&ne.addToRenderList(y,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Yt.beginShadows();const et=b.state.shadowsArray;if(Qt.render(et,D,q),it===!0&&Yt.endShadows(),(tt&&E.hasRenderPass())===!1){const kt=y.opaque,Ft=y.transmissive;if(b.setupLights(),q.isArrayCamera){const Wt=q.cameras;if(Ft.length>0)for(let Zt=0,ce=Wt.length;Zt<ce;Zt++){const he=Wt[Zt];fe(kt,Ft,D,he)}yt&&ne.render(D);for(let Zt=0,ce=Wt.length;Zt<ce;Zt++){const he=Wt[Zt];re(y,D,he,he.viewport)}}else Ft.length>0&&fe(kt,Ft,D,q),yt&&ne.render(D),re(y,D,q)}G!==null&&F===0&&(ct.updateMultisampleRenderTarget(G),ct.updateRenderTargetMipmap(G)),tt&&E.end(T),D.isScene===!0&&D.onAfterRender(T,D,q),Nt.resetDefaultState(),H=-1,K=null,S.pop(),S.length>0?(b=S[S.length-1],ct.setTextureUnits(b.state.textureUnits),it===!0&&Yt.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,L!==null&&L.renderEnd()};function ie(D,q,ot,tt){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ot=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLightProbeGrid)b.pushLightProbeGrid(D);else if(D.isLight)b.pushLight(D),D.castShadow&&b.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(X)){tt&&_t.setFromMatrixPosition(D.matrixWorld).applyMatrix4(V);const kt=ft.update(D),Ft=D.material;Ft.visible&&y.push(D,kt,Ft,ot,_t.z,null,q)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(X))){const kt=ft.update(D),Ft=D.material;if(tt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),_t.copy(D.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),_t.copy(kt.boundingSphere.center)),_t.applyMatrix4(D.matrixWorld).applyMatrix4(V)),Array.isArray(Ft)){const Wt=kt.groups;for(let Zt=0,ce=Wt.length;Zt<ce;Zt++){const he=Wt[Zt],Xt=Ft[he.materialIndex];Xt&&Xt.visible&&y.push(D,kt,Xt,ot,_t.z,he,q)}}else Ft.visible&&y.push(D,kt,Ft,ot,_t.z,null,q)}}const It=D.children;for(let kt=0,Ft=It.length;kt<Ft;kt++)ie(It[kt],q,ot,tt)}function re(D,q,ot,tt){const{opaque:et,transmissive:It,transparent:kt}=D;b.setupLightsView(ot),it===!0&&Yt.setGlobalState(T.clippingPlanes,ot),tt&&A.viewport(j.copy(tt)),et.length>0&&_e(et,q,ot),It.length>0&&_e(It,q,ot),kt.length>0&&_e(kt,q,ot),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function fe(D,q,ot,tt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[tt.id]===void 0){const Xt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[tt.id]=new ni(1,1,{generateMipmaps:!0,type:Xt?pi:kn,minFilter:rs,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}const It=b.state.transmissionRenderTarget[tt.id],kt=tt.viewport||j;It.setSize(kt.z*T.transmissionResolutionScale,kt.w*T.transmissionResolutionScale);const Ft=T.getRenderTarget(),Wt=T.getActiveCubeFace(),Zt=T.getActiveMipmapLevel();T.setRenderTarget(It),T.getClearColor(zt),pt=T.getClearAlpha(),pt<1&&T.setClearColor(16777215,.5),T.clear(),yt&&ne.render(ot);const ce=T.toneMapping;T.toneMapping=fi;const he=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),b.setupLightsView(tt),it===!0&&Yt.setGlobalState(T.clippingPlanes,tt),_e(D,ot,tt),ct.updateMultisampleRenderTarget(It),ct.updateRenderTargetMipmap(It),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ye=0,Ye=q.length;ye<Ye;ye++){const ze=q[ye],{object:De,geometry:pn,material:Gt,group:En}=ze;if(Gt.side===Ze&&De.layers.test(tt.layers)){const xe=Gt.side;Gt.side=un,Gt.needsUpdate=!0,Me(De,ot,tt,pn,Gt,En),Gt.side=xe,Gt.needsUpdate=!0,Xt=!0}}Xt===!0&&(ct.updateMultisampleRenderTarget(It),ct.updateRenderTargetMipmap(It))}T.setRenderTarget(Ft,Wt,Zt),T.setClearColor(zt,pt),he!==void 0&&(tt.viewport=he),T.toneMapping=ce}function _e(D,q,ot){const tt=q.isScene===!0?q.overrideMaterial:null;for(let et=0,It=D.length;et<It;et++){const kt=D[et],{object:Ft,geometry:Wt,group:Zt}=kt;let ce=kt.material;ce.allowOverride===!0&&tt!==null&&(ce=tt),Ft.layers.test(ot.layers)&&Me(Ft,q,ot,Wt,ce,Zt)}}function Me(D,q,ot,tt,et,It){L!==null&&et.isNodeMaterial&&L.setObject(D,et),D.onBeforeRender(T,q,ot,tt,et,It),D.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),et.onBeforeRender(T,q,ot,tt,D,It),et.transparent===!0&&et.side===Ze&&et.forceSinglePass===!1?(et.side=un,et.needsUpdate=!0,T.renderBufferDirect(ot,q,tt,et,D,It),et.side=ui,et.needsUpdate=!0,T.renderBufferDirect(ot,q,tt,et,D,It),et.side=Ze):T.renderBufferDirect(ot,q,tt,et,D,It),D.onAfterRender(T,q,ot,tt,et,It)}function Ce(D,q,ot){q.isScene!==!0&&(q=ht);const tt=nt.get(D),et=b.state.lights,It=b.state.shadowsArray,kt=et.state.version,Ft=Lt.getParameters(D,et.state,It,q,ot,b.state.lightProbeGridArray),Wt=Lt.getProgramCacheKey(Ft);let Zt=tt.programs;tt.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?q.environment:null,tt.fog=q.fog;const ce=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;tt.envMap=bt.get(D.envMap||tt.environment,ce),tt.envMapRotation=tt.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,Zt===void 0&&(D.addEventListener("dispose",bn),Zt=new Map,tt.programs=Zt);let he=Zt.get(Wt);if(he!==void 0){if(tt.currentProgram===he&&tt.lightsStateVersion===kt)return wn(D,Ft),he}else Ft.uniforms=Lt.getUniforms(D),L!==null&&D.isNodeMaterial&&L.build(D,ot,Ft),D.onBeforeCompile(Ft,T),he=Lt.acquireProgram(Ft,Wt),Zt.set(Wt,he),tt.uniforms=Ft.uniforms;const Xt=tt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Xt.clippingPlanes=Yt.uniform),wn(D,Ft),tt.needsLights=sl(D),tt.lightsStateVersion=kt,tt.needsLights&&(Xt.ambientLightColor.value=et.state.ambient,Xt.lightProbe.value=et.state.probe,Xt.sunLights.value=et.state.sun,Xt.sunLightShadows.value=et.state.sunShadow,Xt.directionalLights.value=et.state.directional,Xt.directionalLightShadows.value=et.state.directionalShadow,Xt.spotLights.value=et.state.spot,Xt.spotLightShadows.value=et.state.spotShadow,Xt.rectAreaLights.value=et.state.rectArea,Xt.ltc_1.value=et.state.rectAreaLTC1,Xt.ltc_2.value=et.state.rectAreaLTC2,Xt.pointLights.value=et.state.point,Xt.pointLightShadows.value=et.state.pointShadow,Xt.hemisphereLights.value=et.state.hemi,Xt.sunShadowMatrix.value=et.state.sunShadowMatrix,Xt.sunShadowCascade.value=et.state.sunShadowCascade,Xt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Xt.spotLightMatrix.value=et.state.spotLightMatrix,Xt.spotLightMap.value=et.state.spotLightMap,Xt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=b.state.lightProbeGridArray.length>0,tt.currentProgram=he,tt.uniformsList=null,he}function Un(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=Ca.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function wn(D,q){const ot=nt.get(D);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function Yi(D,q){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let ot=0,tt=D.length;ot<tt;ot++){const et=D[ot];if(et.texture!==null&&et.boundingBox.containsPoint(v))return et}return null}function Ls(D,q,ot,tt,et){q.isScene!==!0&&(q=ht),ct.resetTextureUnits();const It=q.fog,kt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?q.environment:null,Ft=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:de.workingColorSpace,Wt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Zt=bt.get(tt.envMap||kt,Wt),ce=tt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,he=!!ot.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Xt=!!ot.morphAttributes.position,ye=!!ot.morphAttributes.normal,Ye=!!ot.morphAttributes.color;let ze=fi;tt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ze=T.toneMapping);const De=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,pn=De!==void 0?De.length:0,Gt=nt.get(tt),En=b.state.lights;if(it===!0&&(at===!0||D!==K)){const Ue=D===K&&tt.id===H;Yt.setState(tt,D,Ue)}let xe=!1;tt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==En.state.version||Gt.outputColorSpace!==Ft||et.isBatchedMesh&&Gt.batching===!1||!et.isBatchedMesh&&Gt.batching===!0||et.isBatchedMesh&&Gt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Gt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Gt.instancing===!1||!et.isInstancedMesh&&Gt.instancing===!0||et.isSkinnedMesh&&Gt.skinning===!1||!et.isSkinnedMesh&&Gt.skinning===!0||et.isInstancedMesh&&Gt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Gt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Gt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Gt.instancingMorph===!1&&et.morphTexture!==null||Gt.envMap!==Zt||tt.fog===!0&&Gt.fog!==It||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Yt.numPlanes||Gt.numIntersection!==Yt.numIntersection)||Gt.vertexAlphas!==ce||Gt.vertexTangents!==he||Gt.morphTargets!==Xt||Gt.morphNormals!==ye||Gt.morphColors!==Ye||Gt.toneMapping!==ze||Gt.morphTargetsCount!==pn||!!Gt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Gt.__version=tt.version);let Kn=Gt.currentProgram;xe===!0&&(Kn=Ce(tt,q,et),L&&tt.isNodeMaterial&&L.onUpdateProgram(tt,Kn,Gt));let _i=!1,$i=!1,Ds=!1;const Pe=Kn.getUniforms(),We=Gt.uniforms;if(A.useProgram(Kn.program)&&(_i=!0,$i=!0,Ds=!0),tt.id!==H&&(H=tt.id,$i=!0),Gt.needsLights){const Ue=Yi(b.state.lightProbeGridArray,et);Gt.lightProbeGrid!==Ue&&(Gt.lightProbeGrid=Ue,$i=!0)}if(_i||K!==D){A.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Pe.setValue(k,"projectionMatrix",D.projectionMatrix),Pe.setValue(k,"viewMatrix",D.matrixWorldInverse);const Ki=Pe.map.cameraPosition;Ki!==void 0&&Ki.setValue(k,W.setFromMatrixPosition(D.matrixWorld)),U.logarithmicDepthBuffer&&Pe.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Pe.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),K!==D&&(K=D,$i=!0,Ds=!0)}if(Gt.needsLights&&(En.state.sunShadowMap.length>0&&Pe.setValue(k,"sunShadowMap",En.state.sunShadowMap,ct),En.state.directionalShadowMap.length>0&&Pe.setValue(k,"directionalShadowMap",En.state.directionalShadowMap,ct),En.state.spotShadowMap.length>0&&Pe.setValue(k,"spotShadowMap",En.state.spotShadowMap,ct),En.state.pointShadowMap.length>0&&Pe.setValue(k,"pointShadowMap",En.state.pointShadowMap,ct)),et.isSkinnedMesh){Pe.setOptional(k,et,"bindMatrix"),Pe.setOptional(k,et,"bindMatrixInverse");const Ue=et.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(k,"boneTexture",Ue.boneTexture,ct))}et.isBatchedMesh&&(Pe.setOptional(k,et,"batchingTexture"),Pe.setValue(k,"batchingTexture",et._matricesTexture,ct),Pe.setOptional(k,et,"batchingIdTexture"),Pe.setValue(k,"batchingIdTexture",et._indirectTexture,ct),Pe.setOptional(k,et,"batchingColorTexture"),et._colorsTexture!==null&&Pe.setValue(k,"batchingColorTexture",et._colorsTexture,ct));const Zi=ot.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&$.update(et,ot,Kn),($i||Gt.receiveShadow!==et.receiveShadow)&&(Gt.receiveShadow=et.receiveShadow,Pe.setValue(k,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&q.environment!==null&&(We.envMapIntensity.value=q.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=s_()),$i){if(Pe.setValue(k,"toneMappingExposure",T.toneMappingExposure),Gt.needsLights&&Po(We,Ds),It&&tt.fog===!0&&qt.refreshFogUniforms(We,It),qt.refreshMaterialUniforms(We,tt,Z,B,b.state.transmissionRenderTarget[D.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ue=Gt.lightProbeGrid;We.probesSH.value=Ue.texture,We.probesMin.value.copy(Ue.boundingBox.min),We.probesMax.value.copy(Ue.boundingBox.max),We.probesResolution.value.copy(Ue.resolution)}Ca.upload(k,Un(Gt),We,ct)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Ca.upload(k,Un(Gt),We,ct),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Pe.setValue(k,"center",et.center),Pe.setValue(k,"modelViewMatrix",et.modelViewMatrix),Pe.setValue(k,"normalMatrix",et.normalMatrix),Pe.setValue(k,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){const Ue=tt.uniformsGroups;for(let Ki=0,Is=Ue.length;Ki<Is;Ki++){const lh=Ue[Ki];xt.update(lh,Kn),xt.bind(lh,Kn)}}return Kn}function Po(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.sunLights.needsUpdate=q,D.sunLightShadows.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function sl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,q,ot){const tt=nt.get(D);tt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),nt.get(D.texture).__webglTexture=q,nt.get(D.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:ot,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){const ot=nt.get(D);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,ot=0){G=D,N=q,F=ot;let tt=null,et=!1,It=!1;if(D){const Ft=nt.get(D);if(Ft.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(k.FRAMEBUFFER,Ft.__webglFramebuffer),j.copy(D.viewport),St.copy(D.scissor),mt=D.scissorTest,A.viewport(j),A.scissor(St),A.setScissorTest(mt),H=-1;return}else if(Ft.__webglFramebuffer===void 0)ct.setupRenderTarget(D);else if(Ft.__hasExternalTextures)ct.rebindTextures(D,nt.get(D.texture).__webglTexture,nt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ce=D.depthTexture;if(Ft.__boundDepthTexture!==ce){if(ce!==null&&nt.has(ce)&&(D.width!==ce.image.width||D.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(D)}}const Wt=D.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(It=!0);const Zt=nt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Zt[q])?tt=Zt[q][ot]:tt=Zt[q],et=!0):D.samples>0&&ct.useMultisampledRTT(D)===!1?tt=nt.get(D).__webglMultisampledFramebuffer:Array.isArray(Zt)?tt=Zt[ot]:tt=Zt,j.copy(D.viewport),St.copy(D.scissor),mt=D.scissorTest}else j.copy(z).multiplyScalar(Z).floor(),St.copy(st).multiplyScalar(Z).floor(),mt=dt;if(ot!==0&&(tt=C),A.bindFramebuffer(k.FRAMEBUFFER,tt)&&A.drawBuffers(D,tt),A.viewport(j),A.scissor(St),A.setScissorTest(mt),et){const Ft=nt.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ft.__webglTexture,ot)}else if(It){const Ft=q;for(let Wt=0;Wt<D.textures.length;Wt++){const Zt=nt.get(D.textures[Wt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Wt,Zt.__webglTexture,ot,Ft)}}else if(D!==null&&ot!==0){const Ft=nt.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ft.__webglTexture,ot)}H=-1};function Br(D){const q=nt.get(D);return(q.__readFormat!==D.format||q.__readType!==D.type)&&(q.__readFormat=D.format,q.__readType=D.type,q.__formatReadable=U.textureFormatReadable(D.format),q.__typeReadable=U.textureTypeReadable(D.type)),q}this.readRenderTargetPixels=function(D,q,ot,tt,et,It,kt,Ft=0){if(!(D&&D.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt){A.bindFramebuffer(k.FRAMEBUFFER,Wt);try{const Zt=D.textures[Ft],ce=Zt.format,he=Zt.type;D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ft);const Xt=Br(Zt);if(Xt.__formatReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-tt&&ot>=0&&ot<=D.height-et&&k.readPixels(q,ot,tt,et,Pt.convert(ce),Pt.convert(he),It)}finally{const Zt=G!==null?nt.get(G).__webglFramebuffer:null;A.bindFramebuffer(k.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(D,q,ot,tt,et,It,kt,Ft=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=nt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&kt!==void 0&&(Wt=Wt[kt]),Wt)if(q>=0&&q<=D.width-tt&&ot>=0&&ot<=D.height-et){A.bindFramebuffer(k.FRAMEBUFFER,Wt);const Zt=D.textures[Ft],ce=Zt.format,he=Zt.type;D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ft);const Xt=Br(Zt);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.bufferData(k.PIXEL_PACK_BUFFER,It.byteLength,k.STREAM_READ),k.readPixels(q,ot,tt,et,Pt.convert(ce),Pt.convert(he),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ye=G!==null?nt.get(G).__webglFramebuffer:null;A.bindFramebuffer(k.FRAMEBUFFER,Ye);const ze=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await $d(k,ze,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,It),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ye),k.deleteSync(ze),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,ot=0){const tt=Math.pow(2,-ot),et=Math.floor(D.image.width*tt),It=Math.floor(D.image.height*tt),kt=q!==null?q.x:0,Ft=q!==null?q.y:0;ct.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,kt,Ft,et,It),A.unbindTexture()},this.copyTextureToTexture=function(D,q,ot=null,tt=null,et=0,It=0){let kt,Ft,Wt,Zt,ce,he,Xt,ye,Ye;const ze=D.isCompressedTexture?D.mipmaps[It]:D.image;if(ot!==null)kt=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,Wt=ot.isBox3?ot.max.z-ot.min.z:1,Zt=ot.min.x,ce=ot.min.y,he=ot.isBox3?ot.min.z:0;else{const We=Math.pow(2,-et);kt=Math.floor(ze.width*We),Ft=Math.floor(ze.height*We),D.isDataArrayTexture?Wt=ze.depth:D.isData3DTexture?Wt=Math.floor(ze.depth*We):Wt=1,Zt=0,ce=0,he=0}tt!==null?(Xt=tt.x,ye=tt.y,Ye=tt.z):(Xt=0,ye=0,Ye=0);const De=Pt.convert(q.format),pn=Pt.convert(q.type);let Gt;q.isData3DTexture?(ct.setTexture3D(q,0),Gt=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ct.setTexture2DArray(q,0),Gt=k.TEXTURE_2D_ARRAY):(ct.setTexture2D(q,0),Gt=k.TEXTURE_2D),A.activeTexture(k.TEXTURE0),A.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),A.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),A.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const En=A.getParameter(k.UNPACK_ROW_LENGTH),xe=A.getParameter(k.UNPACK_IMAGE_HEIGHT),Kn=A.getParameter(k.UNPACK_SKIP_PIXELS),_i=A.getParameter(k.UNPACK_SKIP_ROWS),$i=A.getParameter(k.UNPACK_SKIP_IMAGES);A.pixelStorei(k.UNPACK_ROW_LENGTH,ze.width),A.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ze.height),A.pixelStorei(k.UNPACK_SKIP_PIXELS,Zt),A.pixelStorei(k.UNPACK_SKIP_ROWS,ce),A.pixelStorei(k.UNPACK_SKIP_IMAGES,he);const Ds=D.isDataArrayTexture||D.isData3DTexture,Pe=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){const We=nt.get(D),Zi=nt.get(q),Ue=nt.get(We.__renderTarget),Ki=nt.get(Zi.__renderTarget);A.bindFramebuffer(k.READ_FRAMEBUFFER,Ue.__webglFramebuffer),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let Is=0;Is<Wt;Is++)Ds&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nt.get(D).__webglTexture,et,he+Is),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nt.get(q).__webglTexture,It,Ye+Is)),k.blitFramebuffer(Zt,ce,kt,Ft,Xt,ye,kt,Ft,k.DEPTH_BUFFER_BIT,k.NEAREST);A.bindFramebuffer(k.READ_FRAMEBUFFER,null),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(et!==0||D.isRenderTargetTexture||nt.has(D)){const We=nt.get(D),Zi=nt.get(q);A.bindFramebuffer(k.READ_FRAMEBUFFER,R),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,I);for(let Ue=0;Ue<Wt;Ue++)Ds?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.__webglTexture,et,he+Ue):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,We.__webglTexture,et),Pe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Zi.__webglTexture,It,Ye+Ue):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Zi.__webglTexture,It),et!==0?k.blitFramebuffer(Zt,ce,kt,Ft,Xt,ye,kt,Ft,k.COLOR_BUFFER_BIT,k.NEAREST):Pe?k.copyTexSubImage3D(Gt,It,Xt,ye,Ye+Ue,Zt,ce,kt,Ft):k.copyTexSubImage2D(Gt,It,Xt,ye,Zt,ce,kt,Ft);A.bindFramebuffer(k.READ_FRAMEBUFFER,null),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Pe?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(Gt,It,Xt,ye,Ye,kt,Ft,Wt,De,pn,ze.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Gt,It,Xt,ye,Ye,kt,Ft,Wt,De,ze.data):k.texSubImage3D(Gt,It,Xt,ye,Ye,kt,Ft,Wt,De,pn,ze):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,It,Xt,ye,kt,Ft,De,pn,ze.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,It,Xt,ye,ze.width,ze.height,De,ze.data):k.texSubImage2D(k.TEXTURE_2D,It,Xt,ye,kt,Ft,De,pn,ze);A.pixelStorei(k.UNPACK_ROW_LENGTH,En),A.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xe),A.pixelStorei(k.UNPACK_SKIP_PIXELS,Kn),A.pixelStorei(k.UNPACK_SKIP_ROWS,_i),A.pixelStorei(k.UNPACK_SKIP_IMAGES,$i),It===0&&q.generateMipmaps&&k.generateMipmap(Gt),A.unbindTexture()},this.initRenderTarget=function(D){nt.get(D).__webglFramebuffer===void 0&&ct.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ct.setTextureCube(D,0):D.isData3DTexture?ct.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ct.setTexture2DArray(D,0):ct.setTexture2D(D,0),A.unbindTexture()},this.resetState=function(){N=0,F=0,G=null,A.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const eh=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:b0,AddEquation:ys,AddOperation:Rf,AdditiveBlending:go,AgXToneMapping:E0,AlphaFormat:D0,AlwaysCompare:Of,AlwaysDepth:Fa,AlwaysStencilFunc:Lf,ArcCurve:Zf,ArrayCamera:dd,BackSide:un,BasicDepthPacking:Cf,Box3:fs,BoxGeometry:Ne,BufferAttribute:$n,BufferGeometry:Ae,ByteType:R0,Cache:Ra,Camera:Q0,CanvasTexture:Hc,CatmullRomCurve3:Xc,CineonToneMapping:y0,CircleGeometry:To,ClampToEdgeWrapping:li,Color:Ht,ColorManagement:de,ConstantAlphaFactor:Ef,ConstantColorFactor:bf,Controls:pd,CubeCamera:fd,CubeDepthTexture:$f,CubeReflectionMapping:hs,CubeRefractionMapping:As,CubeTexture:V0,CubeUVReflectionMapping:Nr,CubicBezierCurve:q0,CubicBezierCurve3:Kf,CullFaceBack:$l,CullFaceFront:af,CullFaceNone:rf,Curve:gi,CurvePath:Qf,CustomBlending:lf,CustomToneMapping:w0,CylinderGeometry:yn,Data3DTexture:Vf,DataArrayTexture:F0,DataTexture:kc,DefaultLoadingManager:ld,DepthFormat:Pi,DepthStencilFormat:as,DepthTexture:So,DirectionalLight:j0,DoubleSide:Ze,DstAlphaFactor:xf,DstColorFactor:Mf,DynamicDrawUsage:Bf,EllipseCurve:Wc,EqualCompare:Uf,EqualDepth:Ba,EquirectangularReflectionMapping:sr,EquirectangularRefractionMapping:wa,Euler:Li,EventDispatcher:qi,ExternalTexture:W0,ExtrudeGeometry:Fr,Float32BufferAttribute:ee,FloatType:ti,Fog:zc,FrontSide:ui,Frustum:Gc,GLSL3:Jl,GreaterCompare:Nf,GreaterDepth:ka,GreaterEqualCompare:Oc,GreaterEqualDepth:za,Group:ge,HalfFloatType:pi,HemisphereLight:K0,IcosahedronGeometry:Zn,ImageLoader:hd,ImageUtils:Gf,InstancedBufferAttribute:Ql,InstancedMesh:dn,IntType:Cc,InterleavedBuffer:Xf,InterleavedBufferAttribute:Ar,KeepStencilOp:Ta,Layers:O0,LessCompare:If,LessDepth:Oa,LessEqualCompare:Fc,LessEqualDepth:_o,Light:Jc,LightShadow:J0,LineCurve:Y0,LineCurve3:Jf,LinearFilter:hn,LinearMipmapLinearFilter:rs,LinearMipmapNearestFilter:Ea,LinearSRGBColorSpace:yr,LinearToneMapping:M0,LinearTransfer:br,Loader:Zc,LoadingManager:cd,MOUSE:Vi,Material:ds,MathUtils:ue,Matrix2:i0,Matrix3:se,Matrix4:Le,MaxEquation:df,Mesh:oe,MeshBasicMaterial:Dn,MeshDepthMaterial:rd,MeshDistanceMaterial:ad,MeshLambertMaterial:jt,MeshPhongMaterial:dr,MinEquation:ff,MirroredRepeatWrapping:Rs,MixOperation:Af,MultiplyBlending:Kl,MultiplyOperation:Ur,NearestFilter:Ke,NearestMipmapLinearFilter:Xo,NearestMipmapNearestFilter:Rc,NeutralToneMapping:T0,NeverCompare:Df,NeverDepth:Na,NoBlending:Ti,NoColorSpace:Oi,NoToneMapping:fi,NormalBlending:ao,NotEqualCompare:Ff,NotEqualDepth:Ga,Object3D:Se,ObjectSpaceNormalMap:Pf,OneFactor:mf,OneMinusConstantAlphaFactor:Tf,OneMinusConstantColorFactor:wf,OneMinusDstAlphaFactor:vf,OneMinusDstColorFactor:Sf,OneMinusSrcAlphaFactor:v0,OneMinusSrcColorFactor:_f,OrthographicCamera:Qc,PCFShadowMap:ir,PCFSoftShadowMap:cf,PMREMGenerator:s0,Path:jl,PerspectiveCamera:ln,Plane:yi,PlaneGeometry:mi,PointLight:ud,PolyhedronGeometry:Vc,QuadraticBezierCurve:$0,QuadraticBezierCurve3:qc,Quaternion:Xi,R11_EAC_Format:Za,RED_GREEN_RGTC2_Format:Mr,RED_RGTC1_Format:mc,REVISION:Ac,RG11_EAC_Format:vr,RGBAFormat:ei,RGBAIntegerFormat:Nc,RGBA_ASTC_10x10_Format:lc,RGBA_ASTC_10x5_Format:rc,RGBA_ASTC_10x6_Format:ac,RGBA_ASTC_10x8_Format:cc,RGBA_ASTC_12x10_Format:hc,RGBA_ASTC_12x12_Format:uc,RGBA_ASTC_4x4_Format:Qa,RGBA_ASTC_5x4_Format:ja,RGBA_ASTC_5x5_Format:tc,RGBA_ASTC_6x5_Format:ec,RGBA_ASTC_6x6_Format:nc,RGBA_ASTC_8x5_Format:ic,RGBA_ASTC_8x6_Format:sc,RGBA_ASTC_8x8_Format:oc,RGBA_BPTC_Format:fc,RGBA_ETC2_EAC_Format:$a,RGBA_PVRTC_2BPPV1_Format:Xa,RGBA_PVRTC_4BPPV1_Format:Wa,RGBA_S3TC_DXT1_Format:rr,RGBA_S3TC_DXT3_Format:ar,RGBA_S3TC_DXT5_Format:cr,RGBFormat:I0,RGB_BPTC_SIGNED_Format:dc,RGB_BPTC_UNSIGNED_Format:pc,RGB_ETC1_Format:qa,RGB_ETC2_Format:Ya,RGB_PVRTC_2BPPV1_Format:Va,RGB_PVRTC_4BPPV1_Format:Ha,RGB_S3TC_DXT1_Format:or,RGFormat:us,RGIntegerFormat:Uc,RawShaderMaterial:od,Ray:H0,RedFormat:Dc,RedIntegerFormat:Ic,ReinhardToneMapping:S0,RenderTarget:Hf,RepeatWrapping:xr,ReverseSubtractEquation:uf,RingGeometry:$c,SIGNED_R11_EAC_Format:Ka,SIGNED_RED_GREEN_RGTC2_Format:_c,SIGNED_RED_RGTC1_Format:gc,SIGNED_RG11_EAC_Format:Ja,SRGBColorSpace:je,SRGBTransfer:be,Scene:B0,ShaderChunk:ae,ShaderLib:ai,ShaderMaterial:In,Shape:Yc,ShapeUtils:Ei,ShortType:C0,Sphere:Eo,SphereGeometry:Mn,Spherical:n0,SplineCurve:Z0,Sprite:Yf,SpriteMaterial:G0,SrcAlphaFactor:x0,SrcAlphaSaturateFactor:yf,SrcColorFactor:gf,StaticDrawUsage:U0,SubtractEquation:hf,SubtractiveBlending:Zl,TOUCH:wi,TangentSpaceNormalMap:Sr,Texture:an,TextureLoader:Kc,TextureSource:Bc,TorusGeometry:Ri,Triangle:Yn,TubeGeometry:Ao,UVMapping:A0,Uint16BufferAttribute:z0,Uint32BufferAttribute:k0,UniformsLib:Ut,UniformsUtils:sd,UnsignedByteType:kn,UnsignedInt101111Type:L0,UnsignedInt248Type:vo,UnsignedInt5999Type:P0,UnsignedIntType:di,UnsignedShort4444Type:Pc,UnsignedShort5551Type:Lc,UnsignedShortType:xo,VSMShadowMap:oo,Vector2:Mt,Vector3:O,Vector4:Ge,WebGLCoordinateSystem:hi,WebGLCubeRenderTarget:th,WebGLRenderTarget:ni,WebGLRenderer:bd,WebGLUtils:Sd,WebGPUCoordinateSystem:Mo,WebXRController:Aa,ZeroFactor:pf,createCanvasElement:zf,error:pe,log:Er,warn:te,warnOnce:ws},Symbol.toStringTag,{value:"Module"})),hu={type:"change"},nh={type:"start"},wd={type:"end"},fa=new H0,uu=new yi,o_=Math.cos(70*ue.DEG2RAD),Je=new O,Nn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nl=1e-6;class r_ extends pd{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Xi,this._lastTargetPosition=new O,this._quat=new Xi().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new n0,this._sphericalDelta=new n0,this._scale=1,this._panOffset=new O,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new O,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=a_.bind(this),this._onPointerUp=l_.bind(this),this._onContextMenu=g_.bind(this),this._onMouseWheel=f_.bind(this),this._onKeyDown=d_.bind(this),this._onTouchStart=p_.bind(this),this._onTouchMove=m_.bind(this),this._onMouseDown=h_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=__.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Te.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hu),this.update(),this.state=Te.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Je.copy(e).sub(this.target),Je.applyQuaternion(this._quat),this._spherical.setFromVector3(Je),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Nn:n>Math.PI&&(n-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Je.setFromSpherical(this._spherical),Je.applyQuaternion(this._quatInverse),e.copy(this.target).add(Je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Je.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(fa.origin.copy(this.object.position),fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fa.direction))<o_?this.object.lookAt(this.target):(uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),fa.intersectPlane(uu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Nl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nl||this._lastTargetPosition.distanceToSquared(this.target)>Nl?(this.dispatchEvent(hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Je.setFromMatrixColumn(e,0),Je.multiplyScalar(-t),this._panOffset.add(Je)}_panUp(t,e){this.screenSpacePanning===!0?Je.setFromMatrixColumn(e,1):(Je.setFromMatrixColumn(e,0),Je.crossVectors(this.object.up,Je)),Je.multiplyScalar(t),this._panOffset.add(Je)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Je.copy(s).sub(this.target);let o=Je.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function a_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function l_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wd),this.state=Te.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function h_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case Vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case Vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(nh)}function u_(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(nh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wd))}function d_(i){this.enabled!==!1&&this._handleKeyDown(i)}function p_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(nh)}function m_(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function g_(i){this.enabled!==!1&&i.preventDefault()}function __(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{clamp:vc,lerp:Bn,smoothstep:Mi}=ue;function on(i,t,e){let n=null,s=0;for(let o=1;o<e.length;o++){const[r,a]=e[o-1],[l,c]=e[o],u=l-r,f=c-a,h=Math.hypot(u,f);if(h<.01)continue;const d=vc(((i-r)*u+(t-a)*f)/h,0,h),p=r+u*d/h,_=a+f*d/h,g=Math.hypot(i-p,t-_);if(!n||g<n.distance){const m=-f/h,x=u/h;n={x:p,z:_,nx:m,nz:x,offset:(i-p)*m+(t-_)*x,run:s+d,distance:g}}s+=h}return n&&{...n,length:s}}function pr(i,t=0){return[Math.min(...i.map(([e])=>e))-t,Math.min(...i.map(([,e])=>e))-t,Math.max(...i.map(([e])=>e))+t,Math.max(...i.map(([,e])=>e))+t]}function Fl([i,t,e,n],[s,o,r,a]){return i<r&&e>s&&t<a&&n>o}function da(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function js(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([Bn(s[0],o[0],l),Bn(s[1],o[1],l)])}}return e}function v_(i){const t=i.edge,[e,n]=t[0],[s,o]=t.at(-1),r=Math.hypot(s-e,o-n),a=(s-e)/r,l=(o-n)/r,c=(d,p)=>(d-e)*a+(p-n)*l,u=t.slice(1).map((d,p)=>{const _=t[p],[g,m]=_,[x,M]=d,v=Math.hypot(x-g,M-m),y=c(g,m),b=c(x,M);return{a:_,b:d,span:v,start:y,end:b,offset:(S,E)=>((S-g)*(m-M)+(E-m)*(x-g))/v,bounds:pr([_,d],.005)}}),f=pr(t,i.reach??95),h=pr(t,.01);return{...i,length:r,station:c,segments:u,range:f,crestBounds:h}}function Ol(i,t,e){const n=i.station(t,e);if(n<-.001||n>i.length+.001)return null;if(i.soft){let f=null;for(const h of i.segments){const{a:d,b:p,span:_}=h,g=p[0]-d[0],m=p[1]-d[1],x=vc(((t-d[0])*g+(e-d[1])*m)/(_*_),0,1),M=t-d[0]-x*g,v=e-d[1]-x*m,y=Math.hypot(M,v);if(!f||y<f.distance){const b=M*-m+v*g;f={distance:y,offset:Math.sign(b)*y,upper:Bn(d[2],p[2],x),lower:Bn(d[3],p[3],x)}}}return f}const s=i.segments.find(({end:f})=>n<=f+.001)??i.segments.at(-1),{a:o,b:r,offset:a,start:l,end:c}=s,u=vc((n-l)/(c-l),0,1);return{offset:a(t,e),upper:Bn(o[2],r[2],u),lower:Bn(o[3],r[3],u)}}function M_(i){const t=[];for(const e of i){if(!e.edge||e.edge.length<2)continue;const n={...e,upperDecks:e.upperDeck?[e.upperDeck]:[],lowerDecks:e.lowerDeck?[e.lowerDeck]:[]},s=t.at(-1);if(!s||s.soft||n.soft||s.edge.at(-1).some((o,r)=>Math.abs(o-n.edge[0][r])>.01)){t.push(n);continue}s.edge=[...s.edge,...n.edge.slice(1)],s.shore=[...s.shore,...n.shore.slice(1)],s.breaks=[...s.breaks??[],...n.breaks??[]],s.upperDecks.push(...n.upperDecks),s.lowerDecks.push(...n.lowerDecks),s.flatInland=Math.max(s.flatInland??10,n.flatInland??10),s.blendInland=Math.max(s.blendInland??50,n.blendInland??50),s.endFade=n.endFade}return t}function S_(i){const t=M_(i).map(v_),e=i.filter(({beach:g})=>g?.length>1).map(g=>({...g,range:pr(g.beach,g.reach??100)})),n=i.flatMap(g=>g.paths??[]),s=Object.assign({},...i.map(g=>g.upperIds)),o=Object.assign({},...i.map(g=>g.lowerIds)),r=Object.assign({},...i.map(g=>g.stairs)),a=Object.assign({},...i.map(g=>g.ramps)),l=Object.assign({},...i.map(g=>g.stairWidths)),c=Object.assign({},...i.map(g=>g.stairRun)),u=new Set(i.flatMap(g=>g.underDeckIds??[])),f=[...t,...e].map(g=>g.range);function h(g,m,x,M){const v=M?[M.section]:t;for(const y of v){if(!da(g,m,y.range))continue;const b=Ol(y,g,m);if(!b||b.offset<-(y.reach??95)||b.offset>52)continue;const w=on(g,m,y.shore??[]),S=y.shoreRise??(y.soft?6.5:3.6),E=y.station(g,m),T=y.startFade??(y.soft?y.fade??12:11),P=y.endFade??(y.soft?y.fade??12:15),L=T?Mi(E,0,T):1,C=P?1-Mi(E,y.length-P,y.length):1,R=L*C,I=w?Bn(.18,b.lower,Mi(w.distance,0,S)):b.lower;if(y.soft){const F=Mi(b.offset,-(y.slopeWidth??18),0),G=1-Mi(b.offset,10,50);return Bn(x,Bn(I,b.upper,F),R*G)}if(M?.section===y?M.upper:b.offset>=0){const F=1-Mi(Math.max(0,b.offset),y.flatInland??10,y.blendInland??50);return Bn(x,b.upper,F*R)}if(!(w&&w.distance>(y.maxShoreDistance??105)))return Bn(x,I,R)}for(const y of e){if(!da(g,m,y.range))continue;const b=on(g,m,y.beach),w=on(g,m,y.shore);if(!b||!w||b.distance>(y.reach??100))continue;const S=Math.max(6,on(b.x,b.z,y.shore)?.distance??20);let E=0,T=y.beach[0][2];for(let C=1;C<y.beach.length;C++){const R=y.beach[C-1],I=y.beach[C],N=Math.hypot(I[0]-R[0],I[1]-R[1]);if(b.run<=E+N+.01){T=Bn(R[2],I[2],vc((b.run-E)/N,0,1));break}E+=N}const P=Mi(b.run,0,12)*(1-Mi(b.run,b.length-30,b.length)),L=1-Mi(b.offset,12,55);return Bn(x,Bn(.18,T,Mi(w.distance,0,S)),P*L)}return x}function d(g){const m=pr(g);for(const x of t){let w=function(S,E){S.length>=3&&b.push({ring:S,side:E})};if(x.soft||!Fl(m,x.crestBounds))continue;const{station:M,length:v}=x;if(!x.segments.filter(S=>Fl(m,S.bounds)).some(S=>{const E=g.map(([T,P])=>S.offset(T,P));return Math.min(...E)<=1e-7&&Math.max(...E)>=-1e-7}))continue;const b=[];w(js(g,([S,E])=>-M(S,E)));for(const S of x.segments){const{start:E,end:T,offset:P}=S;let L=js(g,([C,R])=>M(C,R)-E);L=js(L,([C,R])=>T-M(C,R)),!(L.length<3)&&(w(js(L,([C,R])=>P(C,R)),{section:x,upper:!0}),w(js(L,([C,R])=>-P(C,R)),{section:x,upper:!1}))}return w(js(g,([S,E])=>M(S,E)-v)),b}return null}function p(g,m){return t.some(x=>!x.soft&&da(g,m,x.range)&&Math.abs(Ol(x,g,m)?.offset??1/0)<7)}function _(g,m,x){for(const M of t){if(!da(g,m,M.range))continue;const v=Ol(M,g,m);if(v&&Math.abs(v.offset)<36)return v.lower}return x}return{sections:t,extras:n,upperWidths:s,lowerWidths:o,stairLevels:r,rampLevels:a,stairWidths:l,stairRuns:c,deckRoofs:u,apply:h,split:d,nearEdge:p,lowerGrade:_,refines:(g,m,x)=>f.some(M=>Fl([g,m,g+x,m+x],M))}}const $o=Object.freeze({west:-647,east:-125,north:-138,south:129,innerWest:-624,innerEast:-144,innerNorth:-107,innerSouth:104}),ns=i=>i.toFixed(1),{west:y_,east:b_,north:w_,south:E_,innerWest:T_,innerEast:A_,innerNorth:R_,innerSouth:C_}=$o,el=`
  float cartoonDistrict(vec2 worldXZ) {
    // The harbour curves north at the Ocean end of the promenade.
    float harbourBend = 61.0 * (1.0 - smoothstep(-595.0, -500.0, worldXZ.x));
    vec2 fromWestNorth = smoothstep(
      vec2(${ns(y_)}, ${ns(w_)} - harbourBend),
      vec2(${ns(T_)}, ${ns(R_)} - harbourBend), worldXZ);
    vec2 fromEastSouth = 1.0 - smoothstep(
      vec2(${ns(A_)}, ${ns(C_)}),
      vec2(${ns(b_)}, ${ns(E_)}), worldXZ);
    return fromWestNorth.x * fromWestNorth.y * fromEastSouth.x * fromEastSouth.y;
  }
`,Ps={cartoonEnabled:{value:1}};function P_(i){Ps.cartoonEnabled.value=i?1:0}const fu={plaster:{tile:"plaster",size:[2.9,2.9],grain:.63,tint:"#ebc190",palette:.3},stone:{tile:"stone",size:[3.3,2.05],grain:.67,tint:"#caa36b",palette:.18},paving:{tile:"stone",size:[3.3,3.3],grain:.39,tint:"#dfc59c",palette:.17},laidPaving:{tile:"plaster",size:[2.6,2.6],grain:.55,tint:"#bebeb7",palette:.12},roof:{tile:"terracotta",size:[2.45,1.45],grain:.5,tint:"#bd6243",palette:.22},flatRoof:{tile:"plaster",size:[5.1,5.1],grain:.44,tint:"#c9bc9f",palette:.12},foliage:{tile:"leaves",size:[3,3],grain:.6,tint:"#7ea72f",palette:.52},glass:{tile:"plaster",size:[4,3],grain:.16,tint:"#4e7881",palette:.38},wood:{tile:"plaster",size:[1.2,3.5],grain:.53,tint:"#94663c",palette:.14},metal:{tile:"plaster",size:[3.5,3.5],grain:.17,tint:"#ad9d86",palette:.09},ground:{tile:"plaster",size:[8.2,8.2],grain:.53,tint:"#d8b97e",palette:.2},road:{tile:"plaster",size:[4.3,4.3],grain:.33,tint:"#918780",palette:.23}},L_={plaster:.694,stone:.568,terracotta:.271,leaves:.232},Bl=new Map,zl=new Map,du=new WeakSet;function Ed(i){if(Bl.has(i))return Bl.get(i);const t={value:0},e=`./art/waterfront-${i}.webp`,n=new Kc().load(e,()=>{t.value=1});n.colorSpace=je,n.wrapS=Rs,n.wrapT=i==="terracotta"?xr:Rs,n.anisotropy=4;const s={texture:n,ready:t};return Bl.set(i,s),s}function D_(i,t,e){const n=`${i}|${t}|${e}`;if(zl.has(n))return zl.get(n);const s={value:0},o=`./${i.replace(/^\/+/,"")}`,r=new Kc().load(o,()=>{s.value=1});r.colorSpace=je,r.wrapS=r.wrapT=t?Rs:li,e?(r.magFilter=Ke,r.minFilter=Rc):r.anisotropy=4;const a={texture:r,ready:s};return zl.set(n,a),a}function I_(){if(typeof document>"u")return{waterPigment:{value:null},waterPigmentReady:{value:0}};const i=Ed("water");return{waterPigment:{value:i.texture},waterPigmentReady:i.ready}}function fn(i,{surface:t="plaster",strength:e=1,texture:n=null}={}){if(du.has(i)||typeof document>"u")return i;if(du.add(i),n?.path)return U_(i,n,e);const{tile:s,size:o,grain:r,tint:a,palette:l}=fu[t]??fu.plaster,c=Ed(s),u=i.onBeforeCompile,f=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${f}|anapa-paint|${t}|${e}`,i.onBeforeCompile=function(h,d){u.call(this,h,d),Object.assign(h.uniforms,Ps,{pigment:{value:c.texture},pigmentReady:c.ready,pigmentMean:{value:L_[s]},pigmentPeriod:{value:new Mt(...o)},pigmentTint:{value:new Ht(a)},pigmentPalette:{value:l},pigmentGrain:{value:r},pigmentStrength:{value:e}}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
      `),h.fragmentShader=h.fragmentShader.replace("#include <common>",`
        #include <common>
        varying vec3 paintedWorld;
        uniform sampler2D pigment;
        uniform float cartoonEnabled, pigmentReady, pigmentMean, pigmentGrain, pigmentPalette, pigmentStrength;
        uniform vec2 pigmentPeriod;
        uniform vec3 pigmentTint;
        ${el}
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
      `)},i.needsUpdate=!0,i}function U_(i,{path:t,size:e=[3,3],axes:n,repeat:s=!0,amount:o=1,pixelated:r=!1},a){const l=D_(t,s,r),c=i.onBeforeCompile,u=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${u}|anapa-individual-paint`,i.onBeforeCompile=function(f,h){c.call(this,f,h),Object.assign(f.uniforms,Ps,{individualPigment:{value:l.texture},individualReady:l.ready,individualPeriod:{value:new Mt(...e)},individualAmount:{value:a*o},individualUseAxes:{value:n?1:0},individualOrigin:{value:new O(...n?.origin??[0,0,0])},individualU:{value:new O(...n?.u??[1,0,0])},individualV:{value:new O(...n?.v??[0,1,0])}}),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
        uniform sampler2D individualPigment;
        uniform float cartoonEnabled, individualReady, individualAmount, individualUseAxes;
        uniform vec2 individualPeriod;
        uniform vec3 individualOrigin, individualU, individualV;
        ${el}
      `).replace("#include <color_fragment>",`
        #include <color_fragment>
        float paintedAmount = cartoonEnabled * individualAmount * individualReady * cartoonDistrict(paintedWorld.xz);
        if (paintedAmount > 0.002) {
          vec3 normal = abs(normalize(cross(dFdx(paintedWorld), dFdy(paintedWorld))));
          vec2 projected = normal.y > max(normal.x, normal.z) ? paintedWorld.xz
            : vec2(normal.x > normal.z ? paintedWorld.z : paintedWorld.x, paintedWorld.y);
          vec3 relative = paintedWorld - individualOrigin;
          vec2 mapped = vec2(dot(relative, individualU), dot(relative, individualV));
          vec2 paintedUV = individualUseAxes > 0.5 ? mapped : projected / individualPeriod;
          vec3 pigment = texture2D(individualPigment, paintedUV).rgb;
          diffuseColor.rgb = mix(diffuseColor.rgb, pigment, clamp(paintedAmount, 0.0, 1.0));
        }
      `)},i.needsUpdate=!0,i}const Td="#526e7c",N_="#f0eee6";function me(i,t,{surface:e="plaster",surfaces:n={},textures:s={}}={}){const o=new Map,r=new Map([[Td,"glass"]]);for(const[p,_]of Object.entries(n))for(const g of _)r.set(g,p);const a=new ge;a.name=t,i.add(a);function l(p,_,g){const m=r.get(p)??_;o.has(m)||o.set(m,new Map);const x=o.get(m);x.has(p)||x.set(p,[]);const M=x.get(p);for(let v=2;v<g.length;v++)M.push(...g[0],...g[v-1],...g[v])}function c(p,..._){l(p,e,_)}function u(p,_,g){const m=p.map(([x,M])=>new Mt(x,M));for(const[x,M,v]of Ei.triangulateShape(m,[])){const[y,b,w]=[m[x],m[M],m[v]],E=(b.x-y.x)*(w.y-y.y)-(b.y-y.y)*(w.x-y.x)>0?[y,w,b]:[y,b,w];l(g,"paving",E.map(({x:T,y:P})=>[T,_,P]))}}function f(p,_,g,m,x){c(x,[p[0],g,p[1]],[_[0],g,_[1]],[_[0],m,_[1]],[p[0],m,p[1]])}function h(p,_,g,m,x=m){const M=p.reduce((v,[y,b],w)=>{const[S,E]=p[(w+1)%p.length];return v+y*E-S*b},0);p.forEach((v,y)=>{const b=p[(y+1)%p.length];M>0?f(b,v,_,g,m):f(v,b,_,g,m)}),x&&u(p,g,x)}function d(p,_,g,m){const x=new O(...p),M=new O(..._),v=M.clone().sub(x).normalize(),b=(Math.abs(v.z)<.9?new O(0,0,1):new O(1,0,0)).cross(v).normalize().multiplyScalar(g/2),w=v.clone().cross(b),S=[x,M].map(E=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([T,P])=>E.clone().addScaledVector(b,T).addScaledVector(w,P).toArray()));for(let E=0;E<4;E++){const T=(E+1)%4;l(m,"metal",[S[0][E],S[1][E],S[1][T],S[0][T]])}l(m,"metal",S[0]),l(m,"metal",S[1].reverse())}return{face:c,flat:u,wall:f,shell:h,beam:d,finish(){for(const[p,_]of o)for(const[g,m]of _){const x=new Ae;x.setAttribute("position",new ee(m,3)),x.computeVertexNormals();const M=s[g]??s[p],v=fn(new jt({color:g,side:Ze}),{surface:p,texture:M}),y=new oe(x,v);y.castShadow=!0,y.receiveShadow=!0,a.add(y)}}}}function gt(i,t,e){return i.map((n,s)=>ue.lerp(n,t[s],e))}function Be(i){return i.reduce(([t,e],[n,s])=>[t+n/i.length,e+s/i.length],[0,0])}function Gn(i,t,e,n,s,o,r,a=N_){const l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=Math.max(1,Math.round(l/r));for(let u=0;u<c;u++){const f=gt(n,gt(t,e,(u+.035)/c),1.003),h=gt(n,gt(t,e,(u+.965)/c),1.003);i.wall(f,h,s,o,Td),i.wall(h,gt(n,gt(t,e,(u+1)/c),1.003),s,o,a)}}function F_(i,t,e,n){const s=new Se;s.position.set(t,e+3.98,n),s.userData.nightLight={color:"#ffcc88",intensity:27,range:9,ground:e},i.add(s)}function O_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.48)"),e.addColorStop(.28,"rgba(255,255,255,0.22)"),e.addColorStop(.63,"rgba(255,255,255,0.05)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new G0({map:new Hc(i),color:"#ffc47a",opacity:.78,blending:go,depthWrite:!1,toneMapped:!1})}function B_(){const i=new oe(new Mn(1,32,16),new In({side:un,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{zenith:{value:new Ht("#45567f")},horizon:{value:new Ht("#9da8c7")},twilight:{value:new Ht("#d3a699")}},vertexShader:`
      varying vec3 direction;
      void main() {
        direction = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 direction;
      uniform vec3 zenith, horizon, twilight;
      void main() {
        vec3 ray = normalize(direction);
        vec3 sky = mix(horizon, zenith, smoothstep(-0.02, 0.72, ray.y));
        float west = pow(max(dot(ray, normalize(vec3(-0.95, 0.0, -0.44))), 0.0), 9.0);
        sky = mix(sky, twilight, 0.55 * west * (1.0 - smoothstep(0.01, 0.4, abs(ray.y))));
        gl_FragColor = vec4(sky, 1.0);
        #include <colorspace_fragment>
      }
    `}));return i.scale.setScalar(1500),i.frustumCulled=!1,i.renderOrder=-100,i}function z_(i,t){const e=[],n=[];for(const{position:{x:c,z:u},ground:f}of i){let h=function(p,_){const g=_*Math.PI*2/20,m=p/5,x=c+m*7.4*Math.cos(g),M=u+m*7.4*Math.sin(g),v=t(x,M),y=1-Math.min(1,Math.max(0,(Math.abs(v-f)-.28)/.72)),b=Math.min(f+.9,Math.max(f-.9,v))+.215;return[x,b,M,(1-m*m)**3*y]},d=function(...p){if(p.some(_=>_[3]>0))for(const[_,g,m,x]of p)e.push(_,g,m),n.push(x)};for(let p=0;p<5;p++)for(let _=0;_<20;_++){const g=h(p,_),m=h(p,_+1),x=h(p+1,_),M=h(p+1,_+1);p&&d(g,m,x),d(m,M,x)}}const a=new Ae;a.setAttribute("position",new ee(e,3)),a.setAttribute("lampStrength",new ee(n,1));const l=new In({side:Ze,transparent:!0,depthWrite:!1,blending:go,vertexShader:`
      attribute float lampStrength;
      varying float pool;
      void main() {
        pool = lampStrength;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying float pool;
      void main() {
        gl_FragColor = vec4(0.94, 0.59, 0.26, pool * 0.28);
        #include <colorspace_fragment>
      }
    `});return new oe(a,l)}function k_(i,t){const e=[],n=[];i.updateMatrixWorld(!0),i.traverse(f=>{const{setEvening:h,nightLight:d}=f.userData;h&&e.push(h),d&&n.push({...d,position:f.getWorldPosition(new O)})});const s=n.filter(f=>f.ground!==void 0),o=new ge;o.name="Вечерний свет";const r=B_();if(o.add(r),s.length&&(o.add(z_(s,t)),typeof document<"u")){const f=O_();for(const{position:h}of s){const d=new Yf(f);d.position.copy(h),d.scale.set(2.5,2.5,1),o.add(d)}}const a=Array.from({length:5},()=>{const f=new ud("#fff",0,9,2);return o.add(f),f});i.add(o);const l=new O(1/0,1/0,1/0);let c=!1;function u(f){if(!c||(r.position.copy(f.position),l.distanceToSquared(f.position)<1.5))return;l.copy(f.position);const{x:h,y:d,z:p}=l,g=d-t(h,p)<26?n.map(m=>({source:m,distance:m.position.distanceToSquared(l)})).filter(({distance:m})=>m<33**2).sort((m,x)=>m.distance-x.distance):[];a.forEach((m,x)=>{const M=g[x]?.source;m.intensity=M?.intensity??0,M&&(m.position.copy(M.position),m.color.set(M.color),m.distance=M.range)})}return{setEnabled(f){c=f,o.visible=c,l.set(1/0,1/0,1/0),e.forEach(h=>h(c))},update:u}}function kl(i,t,e,n=10){return Array.from({length:n},(s,o)=>{const r=o*Math.PI*2/n;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function Ad(i,t,{name:e,lights:n,planters:s}){const o="#878887",r="#646765",a=me(i,e,{surfaces:{metal:[o,r],stone:["#d8d4c7"],ground:["#8c7e60"]}}),l=new dn(new Mn(.23,10,7),new jt({color:"#eddaa4"}),n.length*4),c=new dn(new Zn(1,1),fn(new jt({color:"#607a45"}),{surface:"foliage"}),s.length*7);l.name="Плафоны верхней набережной",l.userData.setEvening=f=>{l.material.emissive.set(f?"#ffc37a":"#000"),l.material.emissiveIntensity=f?1.34:0},c.name="Кустарники в клумбах набережной";const u=new Se;n.forEach(([f,h],d)=>{const p=t(f,h)+.03;F_(i,f,p,h),a.shell(kl(f,h,.3),p-.13,p+.35,o),a.shell(kl(f,h,.19),p+.32,p+3.72,o);for(const _ of[.44,.68,3.55,3.7])a.shell(kl(f,h,.25),p+_,p+_+.1,r);for(let _=0;_<4;_++){const g=Math.PI/4+_*Math.PI/2,m=Math.cos(g),x=Math.sin(g),M=[f+m*.46,p+3.77,h+x*.46];a.beam([f+m*.1,p+3.49,h+x*.1],M,.075,r),u.position.set(M[0],M[1]+.19,M[2]),u.updateMatrix(),l.setMatrixAt(d*4+_,u.matrix)}}),s.forEach(({x:f,z:h,width:d,depth:p,angle:_},g)=>{const m=(v,y)=>[f+v*Math.cos(_)-y*Math.sin(_),h+v*Math.sin(_)+y*Math.cos(_)],x=(v,y)=>[[-v,-y],[v,-y],[v,y],[-v,y]].map(b=>m(...b)),M=t(f,h);a.shell(x(d/2,p/2),M-.1,M+.16,"#d8d4c7"),a.flat(x(d/2-.17,p/2-.17),M+.175,"#8c7e60");for(let v=0;v<7;v++){const[y,b]=m((v-3)*d/7.8,v%2?-.45:.52);u.position.set(y,M+.53,b);const w=.52+v%3*.17;u.scale.set(w,.5+v%2*.26,w*.84),u.rotation.y=v*1.8,u.updateMatrix(),c.setMatrixAt(g*7+v,u.matrix)}}),l.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,i.add(l,c),a.finish()}const Ms={front:[[-549.25,-30.85],[-517.3,-24.44]],depth:9.15,grade:9.03},G_=[{soft:!0,edge:[[-1194.65,-.88,7.9,2.35],[-1188.5,-6.93,8.7,2.35],[-1176.23,-13.69,9.8,2.35],[-1157.84,-21.72,11.8,2.35],[-1124.63,-25.52,12.3,2.35],[-1073.23,-30.79,12.65,2.35],[-1033.68,-39.87,13.25,2.35],[-982.49,-49.59,13.9,2.35],[-926.44,-60.99,13.15,2.4],[-878.85,-73.87,12.1,2.4],[-852,-77.5,11,2.4],[-830.48,-78.2,8.65,2.4]],shore:[[-1195,-24],[-1186.4,-36.11],[-1161.69,-54.98],[-1142.57,-67.42],[-1119.74,-82.36],[-1095.11,-100.63],[-1060.66,-124.59],[-1054.64,-114.35],[-1036.42,-110.13],[-995.48,-107.91],[-965.35,-114.27],[-903.18,-133.53],[-868.87,-118.74],[-830.48,-132]],upperIds:{1293020296:7},lowerIds:{},stairs:{}},{soft:!0,slopeWidth:10.8,shoreRise:1.5,fade:0,edge:[[-830.48,-78.2,8.65,2.4],[-820.6,-84.1,6.7,2.4],[-806.05,-90.4,5.7,2.45],[-783.75,-94.4,4.6,2.45],[-753.37,-97.1,3.65,2.45],[-742.87,-98.3,3.45,2.45],[-728.5,-94.3,4.15,2.45],[-696.91,-88.7,5.45,2.45],[-673.68,-83.1,6.45,2.5],[-658.2,-79.35,6.8,2.5],[-641.17,-75.3,7.1,2.5],[-638.31,-66,7.65,2.5],[-605.95,-55.15,8.5,2.55],[-595.02,-59.9,8.8,2.6]],shore:[[-830.48,-132],[-827,-183.4],[-783.08,-190.76],[-774.16,-192.09],[-729.85,-199.2],[-709.27,-201.43],[-646.49,-232.7],[-636.97,-260.15],[-623.68,-157.59],[-595.02,-144]],lowerDeck:[[-826,-133],[-837,-178],[-783,-187],[-739,-193],[-728,-190],[-715,-191],[-697,-176],[-682,-150],[-659,-139],[-662,-109],[-704,-103],[-740,-100],[-779,-101],[-813,-103],[-825,-114]],upperIds:{596938944:4.2,178479537:3.2},lowerIds:{},stairs:{596938943:[8.65,6.7]},stairWidths:{596938943:2.5}},{fade:0,edge:[[-595.02,-59.9,8.8,2.6],[-587.5,-63.5,8.8,2.6],[-576,-56.7,9.05,2.6],[-559,-50.3,9.15,2.6],[-550,-46,9.1,2.6],[-531.8,-47.6,9.04,2.6],[-525.5,-50.1,9,2.6],[-519.4,-61.2,8.96,2.6],[-501.2,-54.2,8.82,2.6],[-485.4,-49,8.71,2.6],[-480.1,-48.6,8.66,2.6],[-447.5,-40.1,8.5,2.6],[-416,-34.55,8.3,2.6],[-410.5,-34.1,8.28,2.6],[-380,-29.6,8.12,2.6],[-372,-29,8.07,2.6],[-350,-29.15,7.98,2.6],[-320,-29,7.9,2.6],[-300,-32,7.8,2.6]],shore:[[-595.02,-144],[-573.37,-123.91],[-563.51,-116.13],[-552.8,-94],[-534.2,-89],[-490,-73.3],[-467.6,-82.1],[-442.59,-61.36],[-405.47,-52.91],[-397.91,-61.01],[-379.03,-54.91],[-372.9,-48.36],[-320.33,-44.46],[-300,-47.3]],upperIds:{178484904:11,701760799:3.45},lowerIds:{701760797:5.2},underDeckIds:["223948923","223948927","223948934","223948896","223948899","223948902","223948903","223948904","223948906","223948908"],upperDeck:[[-595.02,-59.9],[-587.5,-63.5],[-576,-56.7],[-559,-50.3],[-550,-46],[-531.8,-47.6],[-525.5,-50.1],[-519.4,-61.2],[-501.2,-54.2],[-485.4,-49],[-480.1,-48.6],[-447.5,-40.1],[-416,-34.55],[-410.5,-34.1],[-380,-29.6],[-372,-29],[-350,-29.15],[-320,-29],[-300,-32],[-300,2.5],[-314,1.7],[-365,-.3],[-394,-.6],[-419,-4.4],[-455,-13.2],[-477,-19.4],[-515,-27.5],[-549,-34.8],[-595,-47.1]],stairs:{701760798:[2.6,5]},stairWidths:{701760798:2.25},ramps:{701760799:[5,8.8]},breaks:[[-589,-62.9,4.2]]}],H_=[[-515.4,-54.6],[-507,-52.4],[-498.1,-49.9],[-488.9,-46.8],[-479.9,-44.6],[-473.2,-42.7],[-463.8,-40.8],[-456.4,-39.3],[-447.3,-37.4],[-441.7,-36.2],[-436.7,-36],[-430.1,-34.8],[-423.4,-34],[-372.9,-24.5],[-364.9,-24.3],[-356.7,-24.9],[-348.5,-24.3],[-339.6,-24.7]],V_=[{x:-512.2,z:-44.4,width:7.2,depth:2.15,angle:.27},{x:-461.1,z:-30.3,width:11.1,depth:2,angle:.17},{x:-442.5,z:-26.9,width:6.1,depth:2.1,angle:.2},{x:-426.2,z:-23.1,width:7.9,depth:2.2,angle:.18}];function W_(i,t){Ad(i,t,{name:"Верхняя набережная · фонари и клумбы",lights:H_,planters:V_})}const X_=[{edge:[[-300,-32,7.8,2.6],[-284,-34,7.75,2.6],[-267,-37.5,7.65,2.6],[-246,-43,7.55,2.6],[-240,-42,7.5,2.6],[-236,-29,7.42,2.6],[-228,-19,7.35,2.6],[-218,-7,7.25,2.6]],shore:[[-300,-47.3],[-289.6,-48.8],[-177.1,-87.5],[-161.9,-92.7]],upperDeck:[[-300,-32],[-284,-34],[-267,-37.5],[-246,-43],[-240,-42],[-236,-29],[-228,-19],[-218,-7],[-221,3],[-248,4],[-279,3],[-300,3]],upperIds:{178484904:11},lowerIds:{701760797:5.2,121213094:7.2},underDeckIds:["223948913","223948916"],stairs:{597090335:[7.25,5.97],597090341:[3.25,1.1]},stairWidths:{597090335:13.2,597090341:5.4},stairRun:{597090335:[.09,.36]},ramps:{121213094:[5.97,3.25],"701760797-approach":[3.88,2.6]},paths:[{id:"701760797-approach",points:[[-171.1,-33],[-199.26,-67.75]],width:5.2,level:"lower",replaceStartOf:"701760797"}],breaks:[[-218,-7,4]],flatInland:30,blendInland:52,fade:0},{beach:[[-224.06,-6.35,7.25],[-211.83,-6.43,5.97],[-171.1,-33,3.88],[-159.07,-41.45,3.25],[-144.56,-51.21,1.1],[-81.57,-93.77,1.4],[-39.04,-127.25,1.62],[-.76,-159.34,1.82],[25.53,-190.84,1.95],[71.71,-243.52,2.1],[152.59,-369.21,2.15],[173.74,-356.54,2.2],[184.72,-355.26,2.22],[200.31,-357.98,2.23],[218.09,-367.72,2.25],[238.68,-386.95,2.28],[248.36,-396.07,2.35],[217.53,-444.44,2.24],[252.43,-514.76,2.14],[274.46,-559.15,2.05],[283.14,-576.63,2.03],[323,-654.46,1.98]],shore:[[-177.1,-87.5],[-161.9,-92.7],[-53.6,-178.4],[-34.6,-198.7],[31.6,-303.9],[50.4,-343.6],[84.5,-417.2],[123.2,-492],[197.2,-622.5],[224.45,-686]],lowerIds:{597090338:6.5,121159650:7.5,178302326:5.7},stairs:{851920304:[3,2.28]}}],q_=[[-295.8,-26.2],[-288.7,-27.1],[-281.6,-28.1],[-272.7,-29.1],[-265.8,-30.2],[-257.3,-31.1],[-250.1,-32.8],[-244.6,-33.7]];function Y_(i,t){Ad(i,t,{name:"Фонари у Алых парусов",lights:q_,planters:[]})}const{clamp:pu,lerp:_n,smoothstep:we}=ue;function pa(i){return[Math.min(...i.map(([t])=>t)),Math.min(...i.map(([,t])=>t)),Math.max(...i.map(([t])=>t)),Math.max(...i.map(([,t])=>t))]}const to=([i,t,e,n],s)=>[i-s,t-s,e+s,n+s];function Rd(i){const[t,e]=i.origin,[n,s]=i.scale,o=(z,st)=>[(z-t)*n,(e-st)*s],r=(z,st,dt,X)=>[...o(z,X),...o(dt,st)],a=r(37.2953,44.8868,37.3014,44.8932),l=r(37.2982,44.8933,37.3078,44.8984),c=r(37.3063,44.89613,37.31234,44.89775),u=i.surveyLines??{},f=u[125813146],h=u[400800619],d=u[657038813],p=u[1142991105],_=i.buildings.find(z=>z.id==="977564342")?.rings[0],g=_?.length===8?[_[7],_[6]]:null,m=S_([...G_,...X_]),x=i.landmarks.find(z=>z.id==="lighthouse")?.position,M=i.landmarks.find(z=>z.id==="port")?.position,v=r(37.303,44.8967,37.3069,44.9012),y=to(pa(Ms.front),Ms.depth+9),b=i.buildings.find(z=>z.id==="r11979734-0")?.rings[0],w=b&&to(pa(b),18),S=i.roads.find(z=>z.id==="977564885")?.points,E=S?.[0],T=new Map([["46844613",8],["1293020297",7],["1293020296",7],...Object.entries(m.upperWidths),...Object.entries(m.lowerWidths),...Object.entries(m.stairWidths)]),P=new Map([["977562764",[null,3.8]],["977562762",[3.8,1.65]],["977562763",[3.8,1.65]],["597090335",[7.25,2.6]],["597090341",[2.6,.9]],...Object.entries(m.stairLevels)]),L=new Map(m.extras.filter(z=>z.replaceStartOf).map(z=>[z.replaceStartOf,z.points.length-1])),C=[...i.roads.map(z=>L.has(z.id)?{...z,points:z.points.slice(L.get(z.id))}:z),...m.extras.map(z=>({...z,kind:z.kind??"footway"}))],R=C.filter(z=>P.has(z.id)).map(z=>({...z,width:T.get(z.id)??z.width,bounds:pa(z.points)})),I=C.filter(z=>z.id in m.rampLevels).map(z=>({...z,width:T.get(z.id)??z.width,bounds:pa(z.points)})),N=R.filter(z=>z.id in m.stairLevels),F=[...R,...I],G=[...N,...I],H=(z,st,[dt,X,it,at])=>z>=dt&&z<=it&&st>=X&&st<=at;function K(z,st,dt){let X=!1,it=1/0;for(let at=0,V=dt.length-1;at<dt.length;V=at++){const[W,_t]=dt[V],[ht,yt]=dt[at];_t>st!=yt>st&&z<(ht-W)*(st-_t)/(yt-_t)+W&&(X=!X);const Rt=ht-W,k=yt-_t,Jt=pu(((z-W)*Rt+(st-_t)*k)/(Rt*Rt+k*k||1),0,1);it=Math.min(it,Math.hypot(z-W-Jt*Rt,st-_t-Jt*k))}return X?0:it}function j(z,st,dt){const X=on(z,st,f);if(X.distance>100)return dt(z,st);const it=1-we(X.distance,49,91),at=we(X.run,0,36),V=1-we(st,a[3]-55,a[3]-12),W=x?1-we(Math.hypot(z-x[0],st-x[1]),85,260):0,_t=_n(dt(X.x-X.nx*28,X.z-X.nz*28),22.4,W);let ht=_t;if(X.offset>0){const yt=Math.max(7,on(X.x,X.z,h).distance),Rt=1.65*we(on(z,st,h).distance,0,8)+.18;ht=_n(_t,Rt,we(X.offset,Math.min(1.2,yt*.08),yt*.66))}else ht=_n(_t,dt(z,st),we(-X.offset,15,42));if(g&&X.distance<48){const yt=on(z,st,g),Rt=1-we(yt.distance,14,23),k=_n(4.35,1.8,we(yt.offset,0,10));ht=_n(ht,Math.min(ht,k),Rt)}return _n(dt(z,st),ht,it*at*V)}function St(z,st,dt){const X=on(z,st,d);if(X.distance>82||X.offset<-15)return dt(z,st);const it=dt(X.x-X.nx*14,X.z-X.nz*14),at=_n(it,2.35,we(X.offset,.5,15)),V=we(X.run,0,40)*(1-we(X.run,X.length-45,X.length));return _n(dt(z,st),at,V*(1-we(X.distance,58,82)))}function mt(z,st,dt,X){if(f&&h&&H(z,st,a))return j(z,st,dt);let it=d&&H(z,st,l)?St(z,st,dt):dt(z,st);if(M&&H(z,st,v)){const[at,V,W,_t]=v,ht=we(Math.min(z-at,W-z,st-V,_t-st),2,26)*(1-we(st,M[1]+13,M[1]+52)),yt=_n(1.8,2.55,we(st,M[1]-73,M[1]+8));it=_n(it,yt,ht)}return m.apply(z,st,it,X)}function zt(z,st){const dt=P.get(z.id);if(!dt)return null;const X=dt[0]??mt(...E??z.points[0],st),it=dt[1];return{from:X,to:it,run:m.stairRuns[z.id]??[0,1]}}function pt(z,st,dt){const X=m.rampLevels[z.id];if(!X)return;const it=on(st,dt,z.points);return _n(X[0],X[1],it.run/it.length)}function Y(z,st,dt,X){let it=mt(z,st,dt,X);if(H(z,st,y)){const at=on(z,st,Ms.front),V=Math.sqrt(Math.max(0,at.distance**2-at.offset**2)),W=Math.max(V,-at.offset,at.offset-Ms.depth);it=_n(it,Ms.grade,1-we(W,1.8,7))}if(w&&H(z,st,w)){const at=K(z,st,b);it=_n(it,Ms.grade,1-we(at,10,17))}if(E&&Math.abs(z-E[0])<14&&Math.abs(st-E[1])<14){const at=on(z,st,S);at.distance<5&&(it=_n(it,mt(...E,dt),1-we(at.distance,1.6,5)))}for(const at of F){if(!H(z,st,to(at.bounds,Math.max(4.5,at.width/2+2))))continue;const V=on(z,st,at.points),W=at.width/2,_t=!G.includes(at),ht=_t?4.3:W+1.6;if(V.distance>ht)continue;const yt=m.rampLevels[at.id],{from:Rt,to:k,run:Jt}=yt?{from:yt[0],to:yt[1],run:[0,1]}:zt(at,dt),Kt=pu((V.run/V.length-Jt[0])/(Jt[1]-Jt[0]),0,1),U=_n(Rt,k,Kt)-(Jt[0]===0&&Jt[1]===1?.08:.23);it=_n(it,U,1-we(V.distance,_t?1.65:W,ht))}return it}function B(z,st,dt){return dt.breaks?.some(([X,it,at])=>Math.hypot(z-X,st-it)<at)||G.some(X=>H(z,st,to(X.bounds,X.width/2+.5))&&on(z,st,X.points).distance<X.width/2+.3)}function Z(z,st){return G.some(dt=>H(z,st,to(dt.bounds,dt.width/2+2)))}function rt(z,st,dt){return N.some(X=>{const[it,at,V,W]=to(X.bounds,X.width/2+2);return z<V&&st<W&&z+dt>it&&st+dt>at})}function vt(z,st,dt){if(f&&h&&H(z,st,a)){const X=on(z,st,f),it=on(z,st,h),at=(1-we(it.distance,5,11))*(1-we(dt,2.2,3.8));if(at>0)return["shingle",at];const V=we(X.offset,.5,4)*(1-we(X.distance,28,43))*we(dt,2,5.5);if(V>0)return["rockLight",V*(.74+.21*Math.sin(dt*1.7+z*.027))]}if(p&&H(z,st,c)){const X=(1-we(on(z,st,p).distance,3.2,6.4))*(1-we(dt,2.3,3.1));if(X>0)return["riprap",X]}if(H(z,st,v)&&dt<7){const[X,it,at,V]=v;return["quay",we(Math.min(z-X,at-z,st-it,V-st),0,24)*(1-we(dt,4.5,7))]}return null}return{height:Y,tone:vt,stairHeight:zt,rampHeight:pt,promenadeWidths:T,gorgWater:p,allRoads:C,surveyedStairs:N,ramps:I,waterfront:m,wallOpening:B,nearTransition:Z,refinesStairs:rt,refines(z,st,dt){return m.refines(z,st,dt)||[a,l,c,v].some(([X,it,at,V])=>z+dt>X-18&&z<at+18&&st+dt>it-18&&st<V+18)}}}const $_=[37.294125,44.884625,37.325875,44.907375],Z_=128,K_=92,J_=JSON.parse("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.9,2.4,2.9,3.4,3.7,3.9,4,4,3.9,3.9,3.9,3.9,4,3.9,3.9,4,3.9,3.6,3.1,2.7,2.5,2.5,2.7,3,3.1,2.9,2.5,1.9,1.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,2,2.5,3.1,3.6,4.1,4.4,4.6,4.4,4.2,3.9,3.8,3.8,3.8,3.8,4,4.1,4.1,3.8,3.2,2.7,2.4,2.4,2.7,3,3.1,2.9,2.4,1.7,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.6,2,2.6,3.1,3.7,4.3,4.8,5,4.9,4.6,4.3,4.1,4,3.9,3.9,4,4.2,4.3,4.1,3.6,3.1,2.9,2.9,3.1,3.2,3.2,2.7,2.1,1.4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.2,1.6,2,2.5,3,3.6,4.2,4.7,5,5,4.9,4.7,4.6,4.4,4.2,4.1,4,4.1,4.2,4.1,3.9,3.6,3.4,3.3,3.2,3.1,2.8,2.2,1.6,1.1,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2,2.4,2.9,3.4,4,4.5,4.7,4.7,4.7,4.7,4.7,4.7,4.4,4.1,3.8,3.8,3.8,3.8,3.6,3.3,3,2.7,2.4,2.2,1.8,1.3,0.9,0.7,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.2,1.6,2,2.3,2.8,3.3,3.8,4.2,4.4,4.4,4.3,4.4,4.5,4.5,4.2,3.7,3.3,3.1,3,2.9,2.5,2.1,1.7,1.4,1.2,1,0.8,0.6,0.4,0.5,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.2,1.5,1.9,2.2,2.5,2.9,3.3,3.6,3.8,3.8,3.8,3.8,3.9,3.9,3.6,3.1,2.7,2.3,2.1,1.8,1.4,1,0.7,0.5,0.4,0.4,0.4,0.5,0.5,0.6,0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.7,2.8,2.9,3,3,3.1,3.1,3.1,2.9,2.5,2.1,1.7,1.5,1.3,1,0.7,0.5,0.4,0.5,0.7,0.9,1.1,1.3,1.4,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,2,2.3,2.5,2.5,2.5,2.4,2.3,2.3,2.3,2.4,2.4,2.3,2,1.8,1.6,1.4,1.3,1.2,1,0.9,1,1.3,1.7,2.1,2.5,2.7,2.9,2.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.2,1.4,1.6,2,2.5,3,3.3,3.3,2.9,2.4,2,1.9,1.9,2,2.1,2.1,2.1,2,1.9,1.8,1.7,1.7,1.6,1.6,1.8,2.2,2.9,3.5,4,4.3,4.4,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.7,1,1.2,1.4,1.6,2,2.5,3.2,3.9,4.3,4.2,3.5,2.6,2,1.8,1.9,2.2,2.4,2.5,2.5,2.5,2.4,2.4,2.4,2.3,2.2,2.2,2.5,3,3.8,4.5,5,5.3,5.5,5.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.4,1.7,2,2.3,2.8,3.5,4.1,4.5,4.2,3.4,2.5,2,1.9,2.1,2.5,2.8,2.9,2.9,2.8,2.8,2.9,2.9,2.8,2.7,2.7,2.9,3.4,4.1,4.8,5.3,5.6,5.8,5.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.6,1.9,2.2,2.5,2.8,3.2,3.5,3.6,3.3,2.6,2.1,1.8,1.9,2.2,2.6,2.9,3,2.9,2.9,2.9,3,3,3.1,3,3,3.1,3.4,4,4.5,5.1,5.4,5.6,5.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.7,2.1,2.4,2.6,2.7,2.9,2.9,2.7,2.3,2,1.8,1.8,2,2.2,2.5,2.7,2.8,2.8,2.8,2.9,3,3.1,3.2,3.2,3.1,3.1,3.2,3.5,3.9,4.4,4.8,5.1,5.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.4,1.9,2.3,2.7,3,3,2.9,2.6,2.3,1.9,1.8,1.8,1.9,2.1,2.3,2.6,2.8,3,3.1,3.1,3.2,3.3,3.3,3.3,3.3,3.2,3.1,2.9,2.9,3.1,3.5,3.9,4.3,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,2,2.6,3.2,3.5,3.5,3.2,2.7,2.2,1.8,1.8,1.9,2.1,2.4,2.7,3.1,3.5,3.9,4.1,4.2,4.1,4,3.7,3.4,3.2,3,2.8,2.6,2.5,2.4,2.6,2.9,3.2,3.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2.2,2.8,3.4,3.6,3.5,3.1,2.5,2.1,1.8,1.9,2,2.3,2.6,3.1,3.8,4.5,5,5.3,5.2,5,4.6,4.1,3.5,3.1,2.8,2.6,2.3,2.2,2,2,2.1,2.3,2.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.4,2.9,3.2,3.2,3,2.6,2.3,2.1,2,2,2.1,2.3,2.7,3.2,3.9,4.7,5.2,5.4,5.3,5,4.6,4,3.5,3,2.6,2.3,2.1,1.9,1.7,1.6,1.7,1.8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.2,1.6,2.1,2.6,2.9,2.9,2.7,2.4,2.3,2.3,2.4,2.5,2.4,2.3,2.4,2.6,3,3.4,3.9,4.3,4.4,4.4,4.3,4.1,3.7,3.3,2.9,2.5,2.2,1.9,1.7,1.6,1.6,1.7,2,2.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.3,2.7,2.7,2.5,2.3,2.2,2.5,2.9,3.2,3.3,3.1,2.8,2.6,2.5,2.6,2.8,3,3.2,3.3,3.4,3.5,3.5,3.4,3.1,2.8,2.5,2.2,2,1.8,1.8,2,2.2,2.6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.5,1.9,2.3,2.6,2.5,2.3,2.3,2.6,3.1,3.7,4,4,3.6,3.1,2.7,2.5,2.5,2.5,2.5,2.5,2.6,2.8,3,3.1,3.1,2.9,2.7,2.5,2.4,2.4,2.4,2.5,2.7,3,3.4,3.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.3,1.7,2,2.3,2.4,2.4,2.4,2.7,3.3,4,4.4,4.3,4,3.5,3.1,2.7,2.5,2.5,2.4,2.4,2.3,2.3,2.5,2.7,2.8,2.8,2.7,2.7,2.7,2.9,3.2,3.6,3.8,3.9,4.1,4.3,4.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,0.8,1.2,1.5,1.9,2.2,2.4,2.3,2.4,2.7,3.3,4.1,4.6,4.7,4.3,3.9,3.5,3.1,2.9,2.7,2.7,2.6,2.6,2.5,2.4,2.5,2.6,2.7,2.7,2.7,2.9,3.2,3.7,4.4,5,5.3,5.4,5.4,5.6,5.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.8,1.1,1.4,1.8,2.1,2.4,2.4,2.3,2.5,3.1,4,4.8,5.2,5,4.5,4.1,3.9,3.7,3.5,3.3,3.1,3,2.9,2.8,2.7,2.7,2.7,2.8,2.8,3,3.2,3.7,4.4,5.2,6,6.4,6.6,6.7,7,7.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,1.8,2.1,2.4,2.4,2.4,2.4,2.6,3.3,4.3,5.1,5.4,5.3,5,4.9,4.8,4.6,4.2,3.9,3.6,3.4,3.3,3.1,3,3.1,3.2,3.2,3.3,3.5,3.8,4.3,5,5.8,6.5,7,7.4,7.6,7.8,8.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.1,1.5,1.9,2.3,2.5,2.6,2.5,2.5,2.5,2.8,3.4,4.1,4.8,5.1,5.3,5.3,5.5,5.4,5.1,4.6,4.2,3.9,3.7,3.6,3.6,3.6,3.7,3.9,4.1,4.2,4.4,4.8,5.2,5.8,6.4,7,7.4,7.6,7.7,7.9,8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,2.8,2.8,2.7,2.8,3.1,3.5,3.9,4.3,4.6,4.9,5.1,5.4,5.4,5.1,4.7,4.3,4,3.9,3.8,3.9,4.1,4.4,4.7,5,5.3,5.7,6.1,6.4,6.8,7.1,7.3,7.4,7.4,7.4,7.5,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,2,2.3,2.7,2.9,3,3,3,3.1,3.3,3.5,3.8,4,4.2,4.4,4.6,4.8,5.1,5.3,5.2,5,4.7,4.4,4.1,4,4.1,4.3,4.6,5,5.5,6,6.5,6.9,7.1,7.3,7.3,7.3,7.3,7.2,7.2,7.3,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.9,3,3.1,3.1,3.2,3.4,3.8,4.1,4.3,4.4,4.4,4.5,4.5,4.7,5,5.4,5.7,5.8,5.6,5.1,4.7,4.3,4.2,4.3,4.6,5,5.6,6.1,6.6,6.9,7.1,7.2,7.3,7.2,7.1,7,7.1,7.4,7.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.7,2.1,2.5,2.8,3,3.1,3.1,3.1,3.3,3.7,4.2,4.7,4.9,4.9,4.8,4.7,4.6,4.7,4.9,5.4,6,6.3,6.3,5.9,5.4,4.9,4.5,4.4,4.5,4.9,5.3,5.9,6.3,6.7,6.9,7.1,7.3,7.3,7.3,7.3,7.4,7.9,8.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,3,3,3,3.1,3.4,4,4.6,5.2,5.5,5.6,5.4,5.3,5,4.8,4.8,5.2,5.8,6.3,6.5,6.4,6,5.6,5.1,4.8,4.7,4.9,5.4,5.9,6.3,6.6,6.9,7.2,7.5,7.7,7.7,7.8,8.1,8.8,9.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.7,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.9,2.2,2.5,2.7,2.9,3,3,3.1,3.2,3.6,4.2,5,5.7,6.2,6.4,6.4,6.3,6,5.5,5.2,5.3,5.8,6.2,6.5,6.6,6.5,6.3,5.9,5.4,5.2,5.3,5.7,6.2,6.6,6.9,7.2,7.6,7.9,8.1,8.1,8.2,8.6,9.4,10.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.8,1.1,1.2,1,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.3,3.3,3.3,3.4,3.8,4.4,5.1,5.9,6.5,7,7.4,7.5,7.1,6.5,5.9,5.7,5.9,6.3,6.6,6.7,6.9,6.8,6.6,6.2,5.9,5.8,6.1,6.4,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.2,8.5,9.2,10.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.5,1.3,0.9,0.4,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.4,1.9,2.3,2.6,2.9,3.2,3.4,3.6,3.7,3.6,3.6,3.7,4,4.5,5.1,5.7,6.3,6.9,7.5,7.9,7.8,7.2,6.4,5.9,5.9,6.2,6.4,6.7,6.8,7,6.9,6.6,6.3,6.2,6.3,6.5,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.1,8.3,8.8,9.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.4,0.7,1.1,1.5,1.7,1.5,1,0.6,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.7,3,3.2,3.5,3.7,3.8,3.9,3.8,3.8,4,4.3,4.6,5,5.3,5.7,6.2,6.8,7.3,7.4,7,6.3,5.8,5.8,6.1,6.4,6.7,6.9,7,7,6.8,6.7,6.7,6.7,6.7,6.8,7.1,7.5,7.9,8.4,8.6,8.6,8.5,8.4,8.5,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.4,0.4,0.4,0.4,0.5,0.6,0.8,0.9,1.1,1.4,1.6,1.7,1.4,0.9,0.5,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.8,3,3.2,3.3,3.4,3.6,3.8,3.9,3.9,3.9,4,4.2,4.4,4.6,4.8,4.9,5.2,5.7,6.1,6.3,6.1,5.8,5.6,5.9,6.4,6.9,7.2,7.4,7.4,7.4,7.3,7.3,7.3,7.2,7,7,7.1,7.4,8,8.6,9.1,9.1,8.9,8.8,8.8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.4,0.5,0.6,0.8,0.9,1,1,1.2,1.4,1.5,1.6,1.7,1.8,1.8,1.6,1.2,0.7,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,1,1.5,2,2.5,2.8,3,3.1,3.2,3.2,3.4,3.5,3.6,3.7,3.7,3.7,3.6,3.7,3.9,4.1,4.4,4.5,4.6,4.8,5,5.2,5.3,5.4,5.6,6.2,6.9,7.5,7.9,8,8,8,8.1,8.1,8,7.7,7.4,7.2,7.2,7.3,7.8,8.5,9.1,9.4,9.5,9.6,9.7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.2,0.3,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.3,2.3,2.3,2.2,2,1.7,1.2,0.7,0.4,0.2,0.1,0.1,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.2,1.7,2.1,2.5,2.8,3.1,3.2,3.2,3.1,3.1,3.2,3.3,3.5,3.6,3.6,3.4,3.3,3.3,3.5,3.9,4.3,4.4,4.4,4.4,4.6,4.9,5.3,5.7,6.2,6.8,7.5,8,8.2,8.3,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.8,7.6,7.5,7.8,8.4,9.1,9.8,10.4,10.7,11,11.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.3,0.4,0.5,0.6,0.6,0.7,0.9,1.1,1.3,1.5,1.7,2,2.4,2.8,3.2,3.5,3.5,3.5,3.4,3.2,3,2.7,2.2,1.6,1.2,0.8,0.6,0.4,0.3,0.3,0.2,0.2,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.5,1,1.5,2,2.4,2.6,2.8,3,3.1,3.2,3.1,3,3,3.1,3.2,3.4,3.4,3.4,3.3,3.2,3.2,3.5,4,4.5,4.8,4.8,4.8,5,5.5,6.1,6.7,7.2,7.7,8,8.2,8.3,8.3,8.5,8.8,9.2,9.5,9.4,9.2,8.9,8.6,8.3,8.1,8.3,8.8,9.6,10.6,11.4,11.8,11.9,11.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.4,0.6,0.8,1,1.2,1.5,1.6,1.7,1.8,1.9,2.2,2.4,2.8,3.2,3.7,4.3,5,5.6,6,6,5.8,5.4,5,4.6,4.1,3.5,2.9,2.3,1.8,1.4,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.3,0.3,0.3,0.3,0.5,0.7,1.1,1.6,2.2,2.8,3.1,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3,3.1,3.2,3.3,3.4,3.4,3.3,3.2,3.3,3.7,4.4,5.1,5.5,5.6,5.6,5.8,6.4,7.1,7.7,8.1,8.2,8.3,8.3,8.3,8.4,8.7,9.1,9.6,9.8,9.9,9.7,9.5,9.3,9,8.9,9,9.5,10.4,11.4,12.2,12.5,12.3,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.6,0.9,1.2,1.6,2,2.3,2.7,3,3.4,3.6,3.9,4.2,4.5,4.9,5.4,6,6.8,7.6,8.5,9.2,9.5,9.3,8.9,8.3,7.6,6.9,6.2,5.5,4.9,4.3,3.7,3,2.4,1.9,1.5,1.3,1,0.8,0.7,0.6,0.5,0.5,0.5,0.6,0.8,0.9,1.1,1.2,1.2,1.2,1.3,1.5,1.8,2.3,2.8,3.2,3.5,3.5,3.5,3.5,3.5,3.4,3.3,3.2,3.2,3.2,3.3,3.4,3.5,3.4,3.4,3.4,3.5,4,4.7,5.5,6,6.3,6.4,6.7,7.2,7.8,8.2,8.3,8.2,8.2,8.3,8.5,8.7,9.1,9.5,9.8,9.9,9.9,9.8,9.8,9.8,9.9,10,10.2,10.6,11.2,12,12.5,12.6,12.2,11.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.3,1.7,2.2,2.7,3.3,3.9,4.4,4.8,5.3,5.8,6.3,6.8,7.3,7.8,8.3,8.7,9.1,9.7,10.4,11.2,11.9,12.3,12.4,12.2,11.6,10.9,10,9.2,8.4,7.8,7.4,7,6.4,5.7,4.9,4.2,3.6,3.1,2.7,2.3,2,1.8,1.8,1.8,1.9,2.1,2.4,2.7,3,3.1,3.1,2.9,2.7,2.7,2.7,2.9,3.2,3.5,3.6,3.6,3.7,3.9,3.9,3.8,3.6,3.5,3.4,3.4,3.4,3.5,3.6,3.6,3.7,3.8,4,4.4,5.1,5.8,6.4,6.7,7,7.3,7.7,8.1,8.2,8.1,8,8.1,8.4,8.7,9.2,9.6,9.9,10,9.9,9.7,9.6,9.8,10.3,10.9,11.4,11.7,11.9,12.2,12.4,12.4,12.1,11.7,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,1.2,2.3,3.5,4.6,5.5,6.4,7.2,7.8,8.3,8.7,9.2,9.8,10.3,10.9,11.5,12,12.3,12.4,12.5,12.7,13.1,13.5,13.9,14,14.1,13.9,13.5,12.7,11.8,10.9,10.2,9.9,9.7,9.7,9.5,9.1,8.4,7.7,6.9,6.1,5.4,4.8,4.5,4.4,4.5,4.6,4.7,5,5.3,5.6,5.8,5.9,5.7,5.3,4.8,4.3,3.8,3.6,3.5,3.5,3.6,3.7,3.9,4.1,4.2,4.1,3.9,3.7,3.5,3.5,3.5,3.6,3.8,3.9,4.2,4.5,4.8,5.4,6.1,6.8,7.4,7.8,8,8.1,8.2,8.3,8.3,8.1,8.1,8.2,8.5,9,9.6,10,10.2,10.2,10,9.7,9.5,9.6,10.3,11.3,12.2,12.7,12.7,12.6,12.3,11.9,11.4,11.1,10.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.3,4.3,6.6,8.6,10.2,11.3,12,12.5,12.9,13.2,13.6,14,14.4,14.7,14.9,15,14.9,14.6,14.4,14.2,14.2,14.3,14.5,14.8,14.9,14.9,14.5,13.9,13,12.2,11.7,11.4,11.4,11.6,11.8,11.8,11.6,11,10.1,9.1,8.3,7.8,7.6,7.7,7.9,8,8.1,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.5,6.6,5.6,4.7,4.2,3.9,3.7,3.8,3.9,4.1,4.2,4.1,3.9,3.8,3.7,3.8,3.9,4.1,4.3,4.6,5,5.5,6.2,7.1,8,8.9,9.4,9.6,9.4,9.1,8.9,8.9,8.9,8.8,8.8,8.9,9.1,9.6,10.1,10.4,10.4,10.3,10,9.6,9.4,9.4,10,11,11.9,12.3,12.3,12,11.7,11.3,10.9,10.7,10.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.1,9.2,12,13.9,15.1,15.7,16.1,16.3,16.6,16.8,17.1,17.2,17.1,16.8,16.4,15.9,15.5,15.1,14.8,14.6,14.6,14.8,15.1,15.3,15.3,15,14.4,13.7,13.1,12.7,12.4,12.4,12.6,13,13.2,13.3,12.8,12,11.1,10.3,10,10,10.2,10.3,10.3,10.2,10.3,10.5,10.7,10.8,10.9,11,10.9,10.4,9.4,8.1,6.9,5.9,5.2,4.8,4.6,4.6,4.7,4.7,4.5,4.3,4.2,4.2,4.5,4.8,5.1,5.4,5.7,6.2,6.9,7.7,8.7,9.7,10.5,11,11,10.6,10,9.8,9.8,9.9,9.9,9.9,9.9,10.1,10.4,10.7,10.7,10.5,10.1,9.7,9.5,9.3,9.4,9.8,10.4,11,11.3,11.2,11.1,11,10.9,10.8,10.7,10.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.8,3.7,6.6,10,13.1,15.3,16.5,17.2,17.6,17.9,18.3,18.5,18.7,18.7,18.4,17.9,17.2,16.5,16,15.6,15.4,15.2,15.2,15.3,15.6,15.7,15.4,15,14.5,14.1,13.7,13.5,13.3,13.3,13.4,13.7,14,14,13.7,13,12.2,11.5,11.3,11.4,11.5,11.3,11,10.8,10.7,11,11.3,11.7,12.2,12.7,12.9,12.8,12.2,11.1,9.8,8.7,7.8,7.2,6.9,6.8,6.8,6.6,6.1,5.6,5.4,5.5,5.8,6.2,6.5,6.7,6.9,7.4,8.1,8.9,9.8,10.5,11.2,11.5,11.4,10.9,10.4,10.3,10.5,10.8,10.9,10.9,10.9,11,11.2,11.1,10.9,10.4,9.9,9.6,9.4,9.4,9.5,9.9,10.3,10.6,10.6,10.6,10.6,10.6,10.8,11,11.1,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.1,5.8,9.1,12.4,14.9,16.4,17.3,17.9,18.4,19,19.3,19.4,19.4,19.1,18.6,17.9,17.3,16.9,16.6,16.4,16.2,16.1,16.3,16.4,16.4,15.9,15.3,14.9,14.6,14.5,14.5,14.5,14.4,14.4,14.4,14.6,14.6,14.4,13.8,13.1,12.5,12.3,12.3,12.3,12,11.6,11.3,11.3,11.5,11.8,12.3,12.9,13.6,14.1,14.3,14,13.3,12.4,11.5,10.8,10.3,10,10,9.9,9.6,9,8.2,7.7,7.5,7.7,7.9,7.9,7.9,7.9,8.3,9,9.8,10.4,10.9,11.3,11.4,11.2,10.9,10.6,10.6,10.8,11.1,11.3,11.4,11.5,11.6,11.6,11.3,10.9,10.3,9.8,9.6,9.5,9.6,9.8,10.2,10.4,10.5,10.4,10.3,10.3,10.5,10.9,11.3,11.7,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,1,2.4,4.8,8,11.4,14.3,16.1,17.1,17.8,18.4,19,19.2,19.3,19.3,19,18.7,18.3,18,17.7,17.5,17.2,17.1,17,17.2,17.3,17.2,16.6,15.9,15.4,15.3,15.5,15.7,15.7,15.5,15.1,14.9,14.7,14.6,14.4,14,13.5,13.1,13.1,13.1,13.1,12.9,12.7,12.7,12.9,13,13.2,13.5,14,14.6,15,15,14.6,14.2,13.6,13.1,12.7,12.5,12.3,12.3,12.3,12.1,11.7,11.1,10.4,9.8,9.3,9.1,8.9,8.8,8.9,9.3,9.9,10.5,10.9,11.1,11.2,11.2,11.1,11,10.9,10.9,11.1,11.3,11.4,11.6,11.7,11.8,11.7,11.5,11,10.5,10.1,9.9,9.9,10,10.2,10.5,10.6,10.5,10.3,10.2,10.2,10.6,11.1,11.6,12.1,12.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.8,2,4.1,7,10.5,13.7,15.9,17.1,17.7,18.2,18.6,18.9,18.9,18.8,18.6,18.3,18,17.8,17.7,17.6,17.4,17.3,17.4,17.6,17.7,17.5,17,16.3,15.9,15.8,16,16.2,16.1,15.7,15.2,14.8,14.4,14.2,13.9,13.6,13.3,13.3,13.5,13.7,13.7,13.7,13.8,14.2,14.7,15.1,15.3,15.5,15.8,16,15.8,15.3,14.7,14.2,13.9,13.8,13.6,13.6,13.6,13.5,13.5,13.4,13.3,12.9,12.2,11.3,10.3,9.5,9.2,9.4,9.9,10.6,11.2,11.6,11.6,11.4,11.3,11.3,11.3,11.3,11.3,11.3,11.4,11.4,11.5,11.6,11.7,11.7,11.8,11.7,11.4,11.1,10.7,10.6,10.5,10.6,10.7,10.8,10.8,10.7,10.6,10.4,10.5,10.8,11.4,11.9,12.3,12.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.2,9.7,13.2,15.8,17.2,17.8,18.2,18.4,18.6,18.6,18.5,18.2,17.8,17.5,17.3,17.2,17.1,17.1,17.2,17.4,17.5,17.6,17.4,17,16.6,16.2,16,16,16,15.8,15.5,15,14.6,14.2,13.9,13.6,13.4,13.3,13.6,13.9,14.2,14.3,14.3,14.5,15.2,15.9,16.4,16.8,16.9,17.1,17,16.6,15.7,14.8,14.4,14.3,14.5,14.6,14.6,14.6,14.5,14.4,14.2,14.1,13.8,13.1,12,10.8,9.8,9.5,9.9,10.8,11.8,12.5,12.8,12.5,12.1,11.7,11.6,11.7,11.8,11.9,11.9,11.8,11.7,11.6,11.5,11.5,11.6,11.8,12,12,11.8,11.6,11.4,11.3,11.2,11.2,11.3,11.3,11.3,11.2,11.1,11.2,11.4,11.9,12.3,12.7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3,5.7,9.3,13,16,17.6,18.2,18.4,18.4,18.4,18.3,18.1,17.8,17.4,17.2,17,16.9,16.9,16.9,17,17.1,17.2,17.3,17.4,17.3,17.1,16.8,16.4,16.1,15.9,15.5,15.1,14.7,14.4,14.2,14,13.7,13.6,13.7,14,14.4,14.7,14.8,14.8,15,15.5,16.1,16.7,17,17.3,17.4,17.4,17,16.2,15.4,15,15,15.4,15.7,15.8,15.7,15.6,15.3,15.1,14.9,14.6,13.9,12.8,11.5,10.5,10.3,10.7,11.6,12.4,13.1,13.4,13.3,13,12.5,12.2,12,12,12.2,12.2,12.1,11.9,11.7,11.5,11.4,11.5,11.8,12.2,12.4,12.4,12.2,12,11.9,11.8,11.8,11.8,12,12.1,12,12,12,12.2,12.5,12.9,13.1,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.3,13.2,16.2,18,18.5,18.5,18.3,18.1,17.8,17.6,17.4,17.3,17.3,17.2,17.1,17,16.8,16.8,16.8,17,17.3,17.6,17.8,17.6,17.3,16.8,16.4,16,15.5,14.9,14.4,14.2,14.1,14.1,14,14,14.2,14.6,15,15.3,15.4,15.3,15.3,15.5,15.9,16.2,16.6,17,17.2,17.3,17.1,16.5,15.9,15.5,15.5,15.8,16.2,16.5,16.4,16.2,16,15.8,15.7,15.4,14.8,13.8,12.7,11.8,11.4,11.7,12.2,12.8,13.3,13.8,14.1,14.1,13.6,13,12.3,12.1,12.1,12.1,12.1,11.9,11.6,11.4,11.3,11.5,11.8,12.2,12.4,12.5,12.5,12.4,12.3,12.2,12.2,12.2,12.4,12.6,12.7,12.7,12.7,12.9,13.1,13.3,13.3,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.6,3.4,6.2,9.8,13.5,16.4,18,18.5,18.4,18.1,17.7,17.4,17.3,17.4,17.6,17.6,17.5,17.3,17,16.7,16.5,16.5,16.7,17.1,17.6,17.7,17.6,17.2,16.8,16.4,15.9,15.4,14.8,14.4,14.2,14.2,14.3,14.5,14.7,15,15.5,15.9,16.1,16,15.8,15.7,15.6,15.7,16,16.4,16.7,17,17,16.9,16.6,16.1,15.5,15.3,15.6,16.1,16.5,16.6,16.5,16.4,16.2,16.1,16,15.6,14.9,14,13.2,12.7,12.7,12.8,13.1,13.6,14.3,15,15.1,14.7,13.8,12.9,12.3,12.1,12,12,11.8,11.6,11.5,11.5,11.7,11.9,12,12.2,12.3,12.4,12.5,12.5,12.5,12.4,12.4,12.6,12.9,13.1,13.2,13.3,13.5,13.6,13.5,13.4,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.3,2.4,4.2,7.1,10.7,14.2,16.7,18.1,18.5,18.3,18,17.6,17.4,17.5,17.9,18.2,18.3,17.9,17.4,16.9,16.4,16.1,16,16.2,16.5,16.8,16.9,16.8,16.6,16.3,15.9,15.6,15.2,14.9,14.7,14.6,14.6,14.8,15.1,15.6,16.2,16.7,16.9,16.9,16.7,16.4,16.1,16,16,16.3,16.6,17,17.2,17.2,17,16.6,16.1,15.6,15.3,15.5,16.2,16.9,17.1,17,16.8,16.5,16.4,16.4,16.2,15.8,15.1,14.4,13.9,13.6,13.4,13.5,13.9,14.7,15.4,15.7,15.3,14.4,13.5,12.9,12.7,12.5,12.3,12,11.9,11.9,11.9,11.9,11.9,12,12.1,12.2,12.4,12.5,12.7,12.7,12.7,12.7,12.9,13.2,13.5,13.7,13.8,13.9,13.9,13.7,13.4,13.3,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.3,0.7,1.3,2.2,3.5,5.6,8.7,12.2,15.5,17.7,18.8,19.1,18.8,18.2,17.8,17.7,18.1,18.6,19.1,19,18.4,17.7,17.1,16.6,16.2,16.1,16,16,16.1,16.1,16.1,16.1,16,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.5,15.9,16.5,17.1,17.6,17.6,17.3,16.9,16.6,16.5,16.6,16.7,17.1,17.5,17.8,18,18,17.8,17.4,17,16.6,16.4,16.6,17.4,18.1,18.3,18,17.5,17,16.7,16.6,16.5,16.1,15.6,15.1,14.7,14.4,14.1,13.9,14.1,14.7,15.4,15.7,15.4,14.7,14.1,13.8,13.6,13.4,13,12.6,12.3,12.3,12.3,12.2,12.2,12.2,12.4,12.5,12.6,12.7,12.9,13.1,13.1,13.1,13.2,13.4,13.7,13.9,13.9,13.9,13.8,13.6,13.4,13.3,0,0,0,0,0,0,0,0,0.1,0.3,0.4,0.5,0.6,0.8,1.3,2.1,3.3,5,7.5,10.8,14.3,17.3,19.3,20.3,20.5,19.9,19.1,18.4,18.2,18.6,19.1,19.5,19.4,18.8,18.1,17.6,17.3,17.2,16.9,16.5,16.1,16,16,16.3,16.4,16.5,16.4,16.3,16.5,16.6,16.6,16.4,16.1,16.1,16.4,17,17.7,18.1,17.9,17.5,17,16.8,16.8,17,17.4,17.9,18.5,19,19.3,19.5,19.4,19.2,18.8,18.3,18,18.2,18.9,19.5,19.7,19.2,18.5,17.8,17.3,17,16.6,16.2,15.7,15.4,15.1,14.9,14.6,14.3,14.2,14.5,15,15.2,15,14.6,14.3,14.2,14.1,13.9,13.4,12.9,12.7,12.7,12.7,12.6,12.5,12.7,13,13.1,13.1,13.1,13.3,13.5,13.6,13.6,13.6,13.7,13.8,13.8,13.8,13.8,13.8,13.7,13.5,13.4,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.3,1.6,2.3,3.4,5,7.2,10.1,13.4,16.7,19.4,21.1,22,22,21.3,20.3,19.3,18.8,18.8,19.2,19.5,19.4,18.9,18.4,18.1,18.1,18.1,17.7,17.1,16.8,16.8,17,17.3,17.5,17.5,17.3,17.2,17.1,17.1,17,16.8,16.5,16.4,16.7,17.4,18.2,18.7,18.7,18.1,17.5,17.1,17.1,17.3,17.9,18.5,19.2,19.8,20.3,20.7,20.8,20.7,20.1,19.5,19.1,19.2,19.8,20.3,20.5,20.1,19.5,18.8,18.1,17.6,17.1,16.6,16,15.6,15.4,15.2,14.9,14.6,14.4,14.4,14.5,14.6,14.5,14.3,14.2,14.2,14.1,13.9,13.5,13.2,13.1,13.1,13.1,12.9,12.8,13,13.3,13.5,13.6,13.7,13.9,14.1,14.2,14.2,14.1,14,14,13.9,13.8,13.9,13.9,13.8,13.7,13.6,0,0,0,0,0,0,0.1,0.2,0.4,0.9,1.5,2.2,2.7,3.4,4.4,5.9,7.9,10.4,13.4,16.4,19.2,21.2,22.5,23,22.9,22.1,20.9,19.9,19.1,18.9,19,19.2,19.2,19,18.7,18.6,18.6,18.5,18.2,17.9,17.8,18,18.4,18.5,18.6,18.5,18.2,17.9,17.6,17.2,17,16.8,16.7,16.9,17.3,18.1,19,19.7,19.7,19.1,18.2,17.6,17.4,17.6,18.3,19.1,19.7,20.3,20.7,21,21.1,21,20.5,19.9,19.6,19.8,20.3,20.7,20.8,20.6,20.1,19.4,18.9,18.4,17.9,17.2,16.6,16.1,15.8,15.6,15.4,15.2,14.9,14.7,14.6,14.6,14.5,14.4,14.3,14.2,14,13.8,13.6,13.5,13.6,13.6,13.5,13.3,13.1,13.2,13.5,13.8,14,14.3,14.7,14.9,14.8,14.6,14.5,14.4,14.2,14.1,14.1,14.1,14.1,14,13.9,13.9,0,0,0,0,0,0.1,0.2,0.5,1.1,2.1,3.4,4.6,5.8,7.1,8.5,10.2,12.2,14.4,16.9,19.3,21.1,22.4,23,23.1,22.8,22,21.1,20.2,19.5,19.1,19.1,19.2,19.2,19.1,18.9,18.8,18.7,18.7,18.6,18.6,18.8,19.1,19.3,19.3,19.2,19.2,19.1,18.7,18.2,17.6,17.3,17.3,17.5,17.8,18.4,19.1,19.9,20.4,20.4,19.7,18.7,18,17.8,18.2,19,19.8,20.3,20.6,20.7,20.8,20.8,20.6,20.3,20.1,20.1,20.4,20.6,20.8,20.7,20.4,19.9,19.4,19,18.7,18.3,17.7,17,16.5,16.3,16.1,16,15.9,15.7,15.5,15.4,15.2,15,14.8,14.5,14.3,14,13.8,13.8,13.9,14,14.1,14,13.7,13.5,13.5,13.8,14.1,14.5,14.9,15.2,15.3,15.1,14.9,14.7,14.6,14.6,14.6,14.6,14.6,14.5,14.4,14.2,14.3,0,0,0,0,0,0.1,0.4,1.1,2.4,4.4,6.7,9,10.8,12.5,13.9,15.3,16.8,18.3,19.8,21.2,22.1,22.7,22.8,22.7,22.4,21.8,21.2,20.6,20.1,19.7,19.6,19.5,19.4,19.2,18.9,18.8,18.7,18.8,19,19.3,19.6,19.8,19.7,19.5,19.3,19.5,19.7,19.6,19.2,18.7,18.4,18.4,18.6,18.9,19.3,19.9,20.4,20.7,20.6,20.1,19.3,18.8,18.7,19.2,19.9,20.6,21,21.1,21,20.9,20.7,20.5,20.5,20.5,20.7,20.9,20.8,20.6,20.3,19.8,19.3,18.9,18.7,18.5,18.2,17.8,17.2,16.9,16.7,16.6,16.6,16.5,16.4,16.3,16.1,15.8,15.4,15,14.6,14.3,14.1,13.9,14,14.2,14.4,14.4,14.3,14.1,13.8,13.8,14,14.2,14.6,14.9,15.2,15.2,15,14.8,14.7,14.8,15,15.2,15.3,15.3,15.1,15,14.8,14.9,0,0,0,0,0,0.2,0.6,1.8,4.1,7.3,10.8,13.9,16.2,17.7,18.8,19.6,20.3,21,21.7,22.2,22.5,22.7,22.7,22.6,22.3,21.9,21.5,21.1,20.8,20.6,20.5,20.3,19.9,19.5,19,18.7,18.7,19,19.4,19.9,20.1,20.1,19.8,19.4,19.3,19.5,20,20.3,20.3,20.1,19.9,19.6,19.5,19.5,19.8,20.2,20.6,20.9,20.9,20.7,20.3,20,20.1,20.4,20.9,21.4,21.6,21.7,21.6,21.4,21.2,21.1,21.1,21.2,21.2,21.2,20.9,20.5,20,19.5,19.1,18.7,18.5,18.3,18,17.7,17.4,17.2,17.1,17,16.9,16.7,16.5,16.4,16.2,15.9,15.5,15,14.7,14.5,14.3,14.2,14.2,14.3,14.5,14.6,14.5,14.3,14.1,14,14,14.1,14.4,14.6,14.9,15,14.9,14.8,14.7,14.9,15.2,15.6,15.9,15.9,15.8,15.7,15.5,15.4,0,0,0,0,0,0.2,0.8,2.3,5.1,9.1,13.5,17.2,19.8,21.1,21.7,22,22.3,22.5,22.6,22.7,22.8,22.9,22.9,22.8,22.6,22.2,21.7,21.4,21.2,21.2,21.2,21,20.6,20,19.4,19,18.9,19.2,19.6,20.1,20.3,20.2,19.8,19.4,19.3,19.7,20.4,21.2,21.6,21.7,21.3,20.7,20.3,20.1,20.2,20.5,20.8,21,21.1,21.1,21,20.9,21.1,21.3,21.6,21.9,21.9,22,21.9,21.9,21.9,21.9,22,22,21.8,21.5,21.2,20.8,20.3,19.8,19.4,19,18.6,18.3,18.1,17.9,17.8,17.7,17.6,17.4,17,16.6,16.3,16.1,16,15.8,15.5,15.1,14.9,14.8,14.6,14.5,14.4,14.4,14.6,14.7,14.8,14.7,14.5,14.3,14.1,14,14.1,14.3,14.6,14.9,14.9,14.8,14.8,14.9,15.3,15.8,16.2,16.4,16.4,16.3,16.2,16,0,0,0,0,0,0.2,0.7,2.1,4.8,9,13.8,18,20.8,22.3,22.9,23.1,23.2,23.3,23.3,23.2,23.2,23.3,23.2,23,22.6,22.1,21.6,21.3,21.2,21.3,21.4,21.3,20.9,20.4,19.9,19.5,19.3,19.5,19.8,20.1,20.4,20.3,20,19.7,19.7,20.2,21.1,22.1,22.8,23,22.7,22.2,21.8,21.6,21.5,21.3,21.1,20.9,20.9,21,21,21.1,21.3,21.6,21.9,22.1,22.1,22,22,22.1,22.2,22.4,22.5,22.5,22.4,22.2,21.9,21.5,20.9,20.4,19.9,19.5,19.1,18.7,18.5,18.4,18.4,18.2,18,17.6,17.1,16.7,16.3,16.1,15.9,15.8,15.6,15.4,15.2,15.1,15,14.8,14.6,14.6,14.7,14.9,15.1,15.2,15.1,14.8,14.5,14.2,14.2,14.3,14.6,14.9,15,15,14.9,15,15.3,15.7,16.2,16.6,16.8,16.9,16.8,16.7,0,0,0,0,0,0.1,0.5,1.5,3.7,7.5,12.3,16.9,20.2,22.2,23.1,23.6,23.8,23.7,23.6,23.5,23.5,23.5,23.3,22.9,22.3,21.6,21.1,20.9,20.9,21.1,21.1,21.1,20.9,20.6,20.3,20.1,19.9,19.9,20,20.2,20.4,20.4,20.3,20.2,20.4,21,21.8,22.7,23.4,23.8,24,24,24,23.9,23.4,22.6,21.7,21,20.7,20.6,20.7,20.9,21.2,21.7,22.1,22.3,22.3,22.2,22.1,22.1,22.2,22.3,22.5,22.6,22.6,22.6,22.3,21.9,21.4,20.9,20.5,20.1,19.7,19.5,19.2,18.9,18.7,18.5,18.1,17.8,17.4,17.1,16.8,16.5,16.3,16.1,15.9,15.7,15.6,15.5,15.4,15.1,14.9,14.7,14.8,15.1,15.3,15.4,15.3,15,14.8,14.5,14.4,14.5,14.7,14.9,15.1,15.1,15.1,15.2,15.4,15.7,16.2,16.6,16.9,17.1,17.2,17.2,0,0,0,0,0,0,0.3,0.9,2.6,5.9,10.5,15.4,19.4,22,23.4,24,24.2,24,23.8,23.5,23.4,23.2,22.9,22.4,21.8,21.1,20.8,20.7,20.8,20.9,20.9,20.9,20.8,20.8,20.7,20.6,20.5,20.4,20.4,20.3,20.4,20.5,20.7,21,21.4,21.9,22.3,22.7,23.2,23.8,24.5,25.1,25.4,25.4,24.8,23.7,22.5,21.4,20.8,20.6,20.8,21.1,21.5,22,22.4,22.7,22.7,22.5,22.3,22.2,22.2,22.2,22.2,22.3,22.4,22.4,22.2,22,21.7,21.3,20.9,20.6,20.4,20.1,19.7,19.2,18.9,18.6,18.3,18,17.9,17.8,17.5,17.2,16.8,16.5,16.3,16.2,16.1,16,15.7,15.3,15.1,15,15,15.2,15.3,15.3,15.2,15.2,15,14.9,14.8,14.8,14.9,15.1,15.2,15.3,15.3,15.4,15.6,15.9,16.2,16.4,16.7,17,17.2,17.3,0,0,0,0,0,0,0.1,0.6,1.9,4.6,9,14.3,19.1,22.3,23.9,24.6,24.6,24.3,23.8,23.3,23,22.8,22.6,22.1,21.6,21.2,21,20.9,21,21,21,20.9,20.9,21,21.1,21.2,21.1,21,20.8,20.7,20.7,21,21.5,22,22.4,22.6,22.5,22.5,22.7,23.3,24.1,24.9,25.3,25.2,24.7,23.7,22.6,21.7,21.2,21.1,21.4,21.7,21.9,22.2,22.5,22.7,22.7,22.7,22.6,22.5,22.4,22.3,22.2,22.1,22.1,22.1,22.1,22,21.8,21.5,21.2,20.8,20.6,20.3,19.8,19.4,19,18.8,18.7,18.5,18.4,18.3,18.1,17.7,17.3,17,16.8,16.6,16.5,16.2,15.8,15.5,15.3,15.2,15.3,15.3,15.2,15.2,15.3,15.4,15.4,15.4,15.3,15.2,15.3,15.4,15.5,15.5,15.6,15.7,15.9,16.2,16.3,16.3,16.4,16.6,16.9,17.2,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.8,13.3,18.7,22.5,24.4,25,24.9,24.5,24,23.4,23,22.7,22.6,22.3,22,21.7,21.6,21.6,21.4,21.2,21.1,21,21.2,21.5,21.8,22,21.9,21.6,21.3,21.2,21.4,21.8,22.4,22.9,23.1,22.9,22.6,22.2,22.2,22.6,23.3,23.8,24.1,24,23.4,22.7,21.9,21.4,21.3,21.4,21.7,22,22.1,22.2,22.2,22.3,22.5,22.6,22.7,22.7,22.6,22.4,22.2,22.1,22.2,22.3,22.5,22.5,22.3,21.8,21.3,20.8,20.6,20.4,20.1,19.8,19.6,19.5,19.4,19.2,19,18.7,18.4,18,17.7,17.5,17.3,17.1,16.8,16.3,15.9,15.6,15.4,15.5,15.5,15.5,15.4,15.3,15.4,15.5,15.7,15.7,15.7,15.6,15.6,15.7,15.8,15.8,15.9,16,16.3,16.5,16.5,16.4,16.4,16.6,16.8,17.2,0,0,0,0,0,0,0,0.2,0.9,2.7,6.3,11.6,17.2,21.5,23.9,24.8,24.9,24.6,24.2,23.8,23.4,23.1,22.9,22.7,22.5,22.3,22.2,22,21.8,21.5,21.4,21.4,21.7,22.1,22.6,22.8,22.7,22.2,21.8,21.7,22,22.5,22.9,23.2,23.2,22.9,22.4,22.1,22,22.1,22.4,22.6,22.6,22.3,21.9,21.5,21.1,21.1,21.3,21.5,21.7,21.9,22.1,22.2,22.2,22.2,22.3,22.4,22.6,22.6,22.5,22.3,22.2,22.2,22.4,22.7,23.1,23.2,22.9,22.2,21.5,21.1,20.9,20.8,20.6,20.4,20.3,20.3,20.2,20,19.6,19.2,18.7,18.3,18,17.8,17.6,17.4,17,16.5,16,15.7,15.6,15.7,15.8,15.7,15.5,15.4,15.5,15.6,15.7,15.9,15.9,15.9,15.9,15.9,16,16.1,16.1,16.2,16.4,16.5,16.6,16.6,16.6,16.7,16.9,17.2,0,0,0,0,0,0,0,0.1,0.6,1.9,4.8,9.4,14.8,19.5,22.5,24,24.5,24.5,24.3,24,23.7,23.4,23,22.8,22.6,22.6,22.5,22.3,22.1,21.9,21.9,22,22.3,22.8,23.2,23.5,23.3,22.8,22.4,22.2,22.4,22.8,23,23.1,23,22.7,22.3,22.1,22,22,22,21.8,21.6,21.3,21.1,21,21.1,21.4,21.7,21.9,22,22.1,22.2,22.4,22.5,22.4,22.3,22.3,22.5,22.5,22.5,22.3,22.2,22.2,22.5,22.9,23.3,23.5,23.3,22.8,22.1,21.7,21.5,21.4,21.3,21.1,21,20.8,20.7,20.5,20.1,19.6,19.1,18.6,18.2,18,17.8,17.6,17.2,16.8,16.4,16.1,16,16,16.1,16,15.8,15.7,15.7,15.7,15.8,16,16.1,16.2,16.3,16.4,16.4,16.4,16.3,16.3,16.4,16.5,16.7,16.7,16.7,16.7,16.9,17.1,0,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.5,12.5,17.5,21.2,23.3,24.2,24.4,24.2,23.8,23.5,23.2,22.9,22.7,22.7,22.7,22.7,22.6,22.5,22.4,22.5,22.7,23,23.5,23.9,24.1,24,23.6,23.2,22.8,22.8,23,23.1,23.1,22.9,22.7,22.6,22.5,22.5,22.5,22.3,22,21.6,21.3,21.2,21.3,21.7,22.2,22.6,22.7,22.6,22.5,22.5,22.7,22.7,22.6,22.5,22.6,22.7,22.8,22.9,22.7,22.5,22.3,22.3,22.5,22.9,23.2,23.3,23,22.6,22.2,22,21.9,21.8,21.6,21.4,21.2,21,20.8,20.5,20,19.4,18.8,18.5,18.2,18,17.8,17.6,17.3,17,16.8,16.6,16.5,16.5,16.4,16.3,16.1,16,15.9,16,16.2,16.5,16.7,16.9,17,16.9,16.9,16.7,16.7,16.7,16.7,16.8,16.8,16.8,16.9,17,17.3,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.9,10.6,15.8,20.1,22.9,24.1,24.3,24,23.6,23.2,23.1,23,23,23,23.1,23.2,23.1,23.1,23.1,23.3,23.6,24,24.4,24.7,24.8,24.7,24.4,23.9,23.5,23.3,23.3,23.4,23.4,23.3,23.3,23.3,23.4,23.6,23.5,23.3,22.8,22.3,21.9,21.7,21.8,22.3,22.9,23.3,23.3,23.1,22.8,22.7,22.6,22.7,22.7,22.8,23,23.3,23.5,23.5,23.3,22.9,22.5,22.2,22.2,22.4,22.7,23,23,22.9,22.6,22.3,22.1,22,21.9,21.7,21.5,21.3,21.1,20.7,20.1,19.5,19,18.6,18.3,18.3,18.2,18,17.8,17.6,17.4,17.3,17.2,17.1,16.9,16.7,16.5,16.3,16.2,16.2,16.4,16.7,17.1,17.3,17.4,17.5,17.4,17.4,17.2,17.1,17,16.9,17,17.1,17.3,17.7,18.1,0,0,0,0,0,0,0,0,0.1,0.6,1.9,4.6,8.8,14.1,18.9,22.2,24,24.5,24.3,23.9,23.6,23.5,23.5,23.6,23.6,23.7,23.7,23.8,24,24.2,24.4,24.6,24.9,25.2,25.3,25.2,25,24.8,24.4,24.1,23.9,23.9,24.1,24.2,24.2,24.3,24.4,24.7,24.8,24.8,24.4,23.8,23.1,22.6,22.2,22.3,22.6,23.1,23.3,23.3,23.1,22.9,22.6,22.5,22.6,22.9,23.2,23.5,23.8,24,23.9,23.7,23.2,22.8,22.5,22.3,22.3,22.5,22.8,23,23,22.8,22.5,22.2,22,21.9,21.9,21.8,21.6,21.3,20.8,20.1,19.5,18.9,18.6,18.5,18.6,18.6,18.5,18.2,17.9,17.7,17.8,17.8,17.8,17.6,17.3,17,16.7,16.6,16.6,16.6,16.8,17.1,17.4,17.6,17.8,17.9,17.8,17.7,17.5,17.2,17.1,17.2,17.5,17.9,18.5,19.2,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.4,7.1,12,17.1,21.1,23.6,24.7,25,24.8,24.5,24.2,24,24,24,24,24.2,24.6,25,25.3,25.4,25.5,25.5,25.5,25.5,25.4,25.2,25,24.7,24.5,24.4,24.5,24.8,25.1,25.3,25.5,25.6,25.7,25.6,25.3,24.8,24.1,23.5,23.1,22.8,22.8,23,23.1,23.2,23.1,22.9,22.8,22.7,22.7,22.9,23.2,23.6,23.9,24,24.1,24,23.8,23.5,23.2,23,22.8,22.7,22.7,22.9,23.1,23.1,23,22.7,22.4,22.2,22.1,22.2,22.1,21.9,21.5,20.8,20.1,19.5,19,18.8,18.7,18.8,18.9,18.7,18.4,18,17.8,17.9,18.1,18.2,18.1,17.9,17.6,17.4,17.2,17.1,17.1,17.1,17.2,17.3,17.5,17.8,18,18.1,17.9,17.7,17.5,17.3,17.4,17.7,18.2,18.9,19.8,0,0,0,0,0,0,0,0,0,0.2,0.8,2.2,5.1,9.4,14.4,19.1,22.5,24.5,25.4,25.5,25.2,24.7,24.3,24.1,24,24.2,24.5,25.1,25.6,25.8,25.8,25.7,25.5,25.6,25.6,25.6,25.5,25.2,24.9,24.7,24.6,24.8,25.1,25.5,25.9,26.1,26.2,26.2,25.8,25.2,24.5,24,23.8,23.7,23.7,23.8,23.9,23.8,23.6,23.4,23.1,23,22.9,23,23.2,23.5,23.8,23.9,24,24.1,24,23.9,23.8,23.7,23.6,23.5,23.4,23.4,23.4,23.5,23.4,23.2,22.8,22.6,22.4,22.4,22.5,22.4,22.2,21.7,21.1,20.5,19.9,19.5,19.2,19,19,18.9,18.6,18.3,17.9,17.8,17.8,18,18.2,18.4,18.4,18.3,18.1,17.9,17.7,17.6,17.5,17.4,17.3,17.4,17.7,18,18.1,18.1,17.9,17.7,17.6,17.5,17.7,18.1,18.6,19.4,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,3.1,6.3,10.7,15.6,19.9,23,24.9,25.6,25.6,25.1,24.6,24.3,24.2,24.4,24.8,25.2,25.6,25.7,25.6,25.4,25.4,25.6,25.9,26.1,26,25.7,25.3,25,24.9,25,25.3,25.7,26.1,26.3,26.4,26.3,25.9,25.3,24.6,24.2,24.1,24.2,24.4,24.6,24.9,24.9,24.6,24.1,23.8,23.6,23.4,23.4,23.5,23.7,23.9,24.1,24.3,24.4,24.5,24.4,24.3,24.2,24.1,24.1,24.1,24.1,24,23.8,23.6,23.2,22.9,22.6,22.5,22.4,22.4,22.4,22.2,21.9,21.5,21.1,20.7,20.3,19.8,19.5,19.3,19,18.7,18.4,18.1,17.9,18,18.1,18.4,18.6,18.8,18.8,18.6,18.4,18.1,17.9,17.7,17.5,17.4,17.4,17.6,17.9,18.2,18.3,18.2,18,17.8,17.8,17.8,18,18.3,18.7,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.3,6.5,10.8,15.5,19.7,22.8,24.7,25.4,25.4,25.1,24.8,24.7,24.8,25,25.3,25.4,25.5,25.5,25.5,25.8,26.1,26.4,26.6,26.5,26.3,26,25.7,25.5,25.5,25.6,25.9,26.1,26.4,26.6,26.6,26.3,25.7,25,24.5,24.4,24.4,24.4,24.6,24.9,25.1,25,24.7,24.4,24.2,24,23.8,23.8,24,24.2,24.5,24.8,25.1,25.2,25.1,24.8,24.7,24.6,24.6,24.5,24.4,24.2,23.8,23.4,23.1,22.9,22.7,22.4,22.2,22.1,22,21.9,21.9,21.8,21.6,21.3,20.9,20.4,20,19.7,19.5,19.3,19,18.7,18.5,18.5,18.6,18.9,19.1,19.2,19.2,18.9,18.5,18.1,17.8,17.7,17.6,17.5,17.5,17.7,18.1,18.4,18.6,18.5,18.3,18.2,18.2,18.1,18.1,18.2,18.4,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.4,3.2,6.2,10.3,14.9,19.2,22.6,24.6,25.4,25.5,25.4,25.2,25.1,25.2,25.3,25.4,25.5,25.8,26,26.3,26.7,26.9,27,27.1,27,26.8,26.5,26.2,26,26,26.1,26.4,26.7,26.9,27,26.8,26.2,25.5,24.8,24.4,24.2,24,24.2,24.5,24.7,24.8,24.8,24.7,24.5,24.3,24.1,24.1,24.3,24.5,24.8,25.2,25.5,25.6,25.6,25.4,25.1,25,24.8,24.7,24.5,24.1,23.6,23.2,23,22.8,22.7,22.4,22.1,21.9,21.7,21.7,21.7,21.7,21.7,21.5,21.2,20.8,20.4,20.1,19.9,19.8,19.7,19.5,19.3,19.2,19.3,19.4,19.6,19.6,19.5,19.1,18.6,18.2,17.9,17.8,17.8,17.9,18,18.2,18.4,18.7,18.9,18.9,18.8,18.8,18.8,18.7,18.6,18.6,18.7,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.9,10,14.7,19.1,22.5,24.4,25.2,25.3,25.3,25.2,25.3,25.4,25.5,25.8,26.1,26.4,26.7,27,27.2,27.4,27.5,27.5,27.3,27,26.6,26.4,26.4,26.5,26.8,27.1,27.3,27.4,27.2,26.7,26,25.2,24.6,24.2,23.9,23.9,24.1,24.4,24.6,24.7,24.7,24.6,24.4,24.3,24.3,24.5,24.7,24.9,25.2,25.5,25.7,25.8,25.7,25.5,25.3,25,24.7,24.4,24,23.6,23.3,23.2,23.1,23,22.7,22.4,22.1,21.9,21.7,21.6,21.6,21.6,21.5,21.3,21,20.7,20.4,20.2,20.1,20.1,20,19.9,19.7,19.6,19.7,19.8,19.9,19.8,19.4,19,18.6,18.4,18.4,18.5,18.6,18.8,19,19.1,19.3,19.4,19.4,19.3,19.4,19.4,19.3,19.2,19.2,19.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,2.9,5.9,10.1,14.8,19.1,22.2,23.9,24.7,25,25.2,25.4,25.6,25.8,26,26.2,26.5,26.8,27.1,27.3,27.5,27.7,27.7,27.5,27.1,26.8,26.7,26.8,27,27.2,27.5,27.6,27.6,27.4,27,26.4,25.7,25,24.4,24,23.9,24,24.3,24.6,24.7,24.8,24.7,24.6,24.6,24.8,24.9,25,25.1,25.3,25.5,25.7,25.8,25.9,25.8,25.5,25.1,24.7,24.4,24.1,23.9,23.8,23.7,23.6,23.4,23.1,22.8,22.6,22.3,22,21.7,21.5,21.5,21.5,21.4,21.3,21,20.7,20.5,20.4,20.3,20.2,20,19.8,19.7,19.8,20,20.2,20.2,19.9,19.5,19.3,19.1,19.1,19.3,19.6,19.8,20,20.1,20.1,20.1,20.1,20,19.9,19.9,19.8,19.9,20.3,21.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3.1,6,10.1,14.5,18.5,21.5,23.4,24.4,25,25.4,25.7,25.8,25.9,25.9,26.1,26.4,26.8,27.2,27.5,27.8,27.8,27.6,27.3,27.1,27.1,27.3,27.5,27.6,27.7,27.7,27.7,27.5,27.1,26.7,26.1,25.4,24.8,24.3,24.2,24.3,24.6,24.9,25.1,25.2,25.2,25.2,25.3,25.4,25.5,25.6,25.6,25.6,25.7,25.8,26,26,25.9,25.6,25.1,24.8,24.5,24.4,24.3,24.2,24.1,23.9,23.6,23.2,23,22.8,22.5,22.1,21.8,21.6,21.5,21.5,21.5,21.4,21.2,21,20.8,20.6,20.4,20.2,20,19.8,19.8,20,20.3,20.6,20.7,20.4,20,19.7,19.6,19.7,19.9,20.4,20.9,21.3,21.4,21.2,20.9,20.6,20.4,20.2,20.2,20.3,20.8,21.6,22.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.5,13.8,17.9,21,23,24.3,25,25.4,25.5,25.5,25.5,25.7,26,26.4,27,27.6,28,28.2,28,27.8,27.6,27.6,27.7,27.8,27.9,27.8,27.7,27.6,27.4,27.2,26.8,26.3,25.7,25.1,24.7,24.6,24.8,25.2,25.6,25.8,25.9,25.9,25.9,26,26.1,26.1,26.1,26.1,26.1,26,26,26.1,26.2,26,25.7,25.3,24.9,24.7,24.6,24.5,24.4,24.2,23.9,23.5,23.2,22.9,22.7,22.5,22.2,21.9,21.8,21.7,21.7,21.7,21.6,21.4,21.2,21.1,20.9,20.6,20.4,20.1,20,19.9,20.1,20.4,20.6,20.7,20.4,20.1,19.9,19.8,19.8,20.1,20.9,21.9,22.7,22.7,22.2,21.4,20.8,20.3,20.1,20.2,20.7,21.4,22.4,23.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,1.2,2.7,5.2,8.9,13.2,17.3,20.6,22.8,24.2,24.9,25.2,25.3,25.4,25.6,25.9,26.4,27,27.7,28.4,28.7,28.5,28.2,28,28,28,28.1,28.1,27.9,27.8,27.6,27.5,27.3,26.9,26.4,25.9,25.3,25,25.1,25.6,26.1,26.5,26.6,26.5,26.4,26.3,26.4,26.5,26.5,26.5,26.5,26.4,26.3,26.2,26.2,26.2,26.1,25.8,25.4,25.1,25,24.8,24.7,24.5,24.2,23.8,23.4,23.2,23,22.7,22.5,22.3,22.1,22.1,22.2,22.2,22.1,21.9,21.7,21.6,21.5,21.3,21,20.8,20.5,20.3,20.1,20.1,20.2,20.3,20.3,20.1,20,19.8,19.8,19.9,20.3,21.2,22.5,23.4,23.4,22.6,21.5,20.6,20.1,19.9,20.2,20.7,21.4,22.2,22.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.4,4.8,8.4,12.5,16.6,20.1,22.6,24.1,25,25.4,25.7,25.9,26.3,26.7,27.2,27.8,28.3,28.6,28.6,28.3,28.2,28.2,28.3,28.5,28.4,28.2,27.9,27.7,27.6,27.3,26.9,26.4,25.8,25.5,25.3,25.6,26.2,26.8,27.1,27.1,26.8,26.6,26.5,26.6,26.7,26.8,26.9,26.8,26.7,26.5,26.4,26.4,26.3,26.2,25.9,25.6,25.4,25.2,25.1,24.9,24.6,24.1,23.8,23.5,23.3,23.2,22.9,22.6,22.3,22.2,22.3,22.5,22.7,22.7,22.4,22.2,22,22,21.9,21.6,21.3,20.9,20.6,20.2,20,19.9,19.9,19.9,19.9,19.9,19.9,20,20.1,20.4,21.2,22.2,23,22.9,22.2,21.2,20.4,20,20,20.3,20.7,21,21.4,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.1,4.4,7.6,11.7,15.9,19.7,22.5,24.3,25.3,25.8,26.1,26.5,26.8,27.1,27.4,27.7,27.9,28,28,28,28.2,28.5,28.8,28.7,28.5,28.1,27.8,27.5,27.1,26.7,26.2,25.9,25.7,25.8,26.1,26.5,27,27.2,27.2,27,26.8,26.7,26.8,26.9,27.1,27.2,27.2,27.1,26.9,26.7,26.6,26.5,26.4,26.2,25.9,25.7,25.6,25.4,25.2,24.8,24.4,24,23.8,23.7,23.5,23.2,22.8,22.5,22.4,22.5,22.8,23.1,23.1,22.9,22.6,22.4,22.5,22.4,22.2,21.8,21.3,20.7,20.3,20,19.8,19.8,19.8,19.9,20,20.1,20.2,20.2,20.4,20.9,21.7,22.2,22.2,21.9,21.2,20.7,20.4,20.5,20.7,20.9,20.9,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.7,1.8,3.8,6.9,11,15.5,19.6,22.7,24.6,25.6,26.1,26.4,26.5,26.6,26.7,26.9,27.1,27.4,27.7,28.1,28.5,29,29.2,29.1,28.6,28.1,27.6,27.2,26.7,26.2,26,26,26.2,26.4,26.6,26.8,27,27.2,27.3,27.3,27.3,27.2,27.2,27.2,27.4,27.7,27.7,27.6,27.3,27,26.8,26.7,26.6,26.5,26.3,26.2,26,25.9,25.7,25.3,24.8,24.6,24.5,24.5,24.4,24.1,23.7,23.2,23,23.1,23.4,23.6,23.5,23.2,22.8,22.6,22.7,22.7,22.5,22.1,21.5,20.9,20.5,20.2,20,19.9,19.9,20.1,20.2,20.4,20.4,20.3,20.4,20.9,21.5,22,22.3,22.3,21.9,21.5,21.3,21.2,21.3,21.3,21.1,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.5,3.4,6.7,11,15.9,20.3,23.5,25.2,26,26.3,26.3,26.3,26.3,26.4,26.7,27.2,27.9,28.5,29.1,29.5,29.5,29.1,28.4,27.8,27.2,26.6,26.2,25.9,26,26.3,26.8,27.1,27.2,27.3,27.3,27.4,27.6,27.8,27.9,27.9,27.8,27.7,28,28.2,28.4,28.2,27.9,27.5,27.2,27.1,27,27,26.9,26.9,26.8,26.6,26.2,25.8,25.5,25.4,25.6,25.9,26.2,26.1,25.6,24.8,24.2,24,23.9,23.8,23.6,23.1,22.7,22.6,22.7,22.7,22.6,22.2,21.7,21.2,20.8,20.5,20.3,20.2,20.1,20.2,20.3,20.4,20.4,20.4,20.6,21.1,21.8,22.5,23,23.1,22.9,22.4,22,21.8,21.8,21.7,21.4,21.2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.7,7.3,12.1,17.4,21.7,24.5,25.8,26.2,26.3,26.3,26.5,26.7,27.2,27.9,28.5,29.1,29.4,29.4,29,28.4,27.8,27.2,26.7,26.3,26.1,26.2,26.6,27.1,27.6,27.8,27.8,27.7,27.7,27.8,28.1,28.4,28.5,28.5,28.3,28.3,28.4,28.7,28.8,28.8,28.5,28.1,27.9,27.7,27.6,27.5,27.5,27.5,27.4,27.2,26.9,26.6,26.5,26.7,27.2,27.9,28.4,28.4,27.8,26.8,25.7,24.8,24.2,23.8,23.3,22.9,22.6,22.6,22.7,22.7,22.6,22.3,22,21.6,21.3,21.1,20.9,20.6,20.5,20.4,20.3,20.3,20.4,20.5,20.9,21.4,22.1,22.9,23.5,23.7,23.4,22.8,22.4,22.2,22.1,22.1,21.8,21.5,21.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.9,4.5,8.7,14,19.2,23.1,25.2,26.1,26.4,26.5,26.8,27.3,27.9,28.7,29.2,29.4,29.2,28.7,28.2,27.6,27.2,26.8,26.6,26.6,26.7,27.1,27.6,28,28.3,28.3,28.2,28.1,28,28.1,28.4,28.6,28.8,28.8,28.7,28.7,28.8,29,29.2,29.2,29.1,28.8,28.6,28.3,28.1,28,28,28,28,27.9,27.8,27.8,27.9,28.2,28.7,29.4,29.9,30,29.6,28.6,27.3,25.9,24.7,23.8,23.3,22.9,22.7,22.7,22.8,22.8,22.7,22.5,22.3,22.1,22,21.8,21.6,21.4,21.2,21,20.8,20.6,20.5,20.7,21,21.5,22.1,22.8,23.4,23.5,23.3,22.7,22.3,22.3,22.3,22.4,22.2,21.9,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.7,10.4,15.7,20.5,23.8,25.5,26.3,26.6,27,27.5,28.2,28.8,29.1,29,28.6,28,27.6,27.3,27.1,27.1,27.2,27.4,27.7,28,28.4,28.6,28.7,28.5,28.4,28.3,28.3,28.4,28.6,28.7,28.8,28.8,28.9,28.9,29.1,29.3,29.5,29.6,29.6,29.5,29.3,29,28.8,28.5,28.4,28.4,28.5,28.8,29.1,29.3,29.4,29.6,29.8,30.2,30.6,30.8,30.5,29.9,28.8,27.4,25.9,24.7,23.9,23.3,23,22.9,22.9,22.9,22.8,22.8,22.8,22.7,22.5,22.4,22.2,22.1,22,21.8,21.4,21,20.8,20.8,20.9,21.3,21.8,22.4,22.9,23.1,22.9,22.5,22.3,22.3,22.4,22.5,22.4,22.2,21.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.3,6.8,11.5,16.6,20.9,23.9,25.5,26.4,27,27.5,28,28.4,28.6,28.4,28,27.7,27.5,27.4,27.6,27.8,28.1,28.4,28.6,28.8,28.8,28.8,28.8,28.7,28.6,28.6,28.7,28.9,29,29.1,29.1,29.1,29.1,29.3,29.4,29.6,29.7,29.8,29.9,29.9,29.9,29.7,29.5,29.2,29,28.9,29.2,29.7,30.4,30.9,31,31,30.9,31,31.1,31.2,31.1,30.7,30.1,29.1,27.7,26.3,25.1,24.1,23.5,23.1,23,23,23.2,23.4,23.5,23.4,23.1,22.8,22.6,22.5,22.4,22.2,21.9,21.5,21.1,20.9,21,21.2,21.6,22,22.4,22.6,22.6,22.5,22.3,22.3,22.4,22.5,22.5,22.3,22.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.6,1.6,3.7,7.1,11.6,16.2,20.2,23.2,25.2,26.4,27.2,27.8,28.2,28.3,28.1,27.9,27.6,27.6,27.7,28,28.4,28.9,29.2,29.4,29.4,29.3,29.1,29,29,29,29.1,29.3,29.5,29.6,29.6,29.5,29.5,29.5,29.6,29.7,29.8,29.8,29.8,29.9,30.1,30.3,30.4,30.3,30.2,30,30,30.3,30.9,31.6,32.2,32.5,32.4,32.2,32,31.8,31.6,31.3,31.1,30.9,30.4,29.5,28.2,26.8,25.4,24.2,23.6,23.3,23.4,23.7,24,24.2,24,23.5,23.1,22.9,22.8,22.7,22.6,22.4,22.1,21.8,21.6,21.4,21.4,21.6,21.8,22.1,22.3,22.5,22.5,22.5,22.5,22.5,22.5,22.6,22.6,22.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.6,1.6,3.5,6.5,10.4,14.7,18.6,21.9,24.3,26.1,27.2,28,28.3,28.2,28.1,27.9,27.8,27.9,28.2,28.7,29.3,29.7,29.9,29.9,29.7,29.5,29.3,29.3,29.4,29.6,29.8,30,30.1,30.1,30,29.9,29.8,29.8,29.8,29.9,30,30.1,30.3,30.6,31.1,31.6,31.9,31.9,31.9,31.9,32,32.4,32.9,33.3,33.5,33.4,33,32.5,32.2,31.8,31.5,31.3,31.3,31.1,30.8,29.9,28.5,26.8,25.3,24.2,23.8,23.9,24.2,24.5,24.5,24.3,23.8,23.4,23.2,23.1,23.2,23.4,23.4,23.4,23.2,22.8,22.5,22.2,22,21.9,22,22.2,22.4,22.6,22.7,22.7,22.7,22.7,22.8,23,23]"),Q_={bounds:$_,columns:Z_,rows:K_,heights:J_},{bounds:[Gl,mu,gu,Hl],columns:Ho,rows:_u,heights:ma}=Q_,xu=[37.309805,44.895974],vu=1e3,Mu=1160;function j_(i){const[t,e]=i.origin,[n,s]=i.scale,o=(xu[0]-t)*n,r=(e-xu[1])*s;return(a,l,c)=>{const u=Math.hypot(a-o,l-r);if(u>=Mu)return c;const f=t+a/n,h=e-l/s;if(f<Gl||f>gu||h<mu||h>Hl)return c;const d=(f-Gl)/(gu-Gl)*(Ho-1),p=(Hl-h)/(Hl-mu)*(_u-1),_=Math.min(Math.floor(d),Ho-2),g=Math.min(Math.floor(p),_u-2),m=g*Ho+_,x=ue.lerp(ma[m],ma[m+1],d-_),M=ue.lerp(ma[m+Ho],ma[m+Ho+1],d-_),v=Math.max(.16,ue.lerp(x,M,p-g));return u<=vu?v:ue.lerp(v,c,ue.smoothstep(u,vu,Mu))}}const Su=["#b2a99a","#bbb1a1","#b8ae9e","#b7ab99","#aea394"],tx="#c4baaa",ex="#a39888",yu="#4b5351";function nx(i,t,e){const n=me(i,"Верхняя и нижняя набережные · подпорные стены",{surface:"stone"});for(const s of t.waterfront.sections){if(s.soft)continue;const o={section:s,upper:!0},r={section:s,upper:!1};for(const{a,b:l,span:c}of s.segments){const[u,f]=a,[h,d]=l,p=(f-d)/c,_=(h-u)/c,g=Math.ceil(c/1.25),m=(x,M,v=0,y=0)=>{const b=ue.lerp(u,h,x),w=ue.lerp(f,d,x);return[b+v*p,e.faceHeight(b,w,M)+y,w+v*_]};for(let x=0;x<g;x++){const M=x/g,v=(x+1)/g,[y,,b]=m((M+v)/2,o);if(t.wallOpening(y,b,s))continue;const w=m(M,r,0,-.12),S=m(v,r,0,-.12),E=m(M,o,0,.24),T=m(v,o,0,.24);if(E[1]-w[1]<.55||T[1]-S[1]<.55)continue;n.face(ex,w,S,T,E);const P=Math.max(1,Math.round((E[1]+T[1]-w[1]-S[1])/2/.54));for(let I=0;I<P;I++){const N=(I+.026)/P,F=(I+.976)/P,G=gt(w,E,N),H=gt(w,E,F),K=gt(S,T,N),j=gt(S,T,F),St=([mt,zt,pt],[Y,B,Z],rt)=>[ue.lerp(mt,Y,rt)-p*.016,ue.lerp(zt,B,rt),ue.lerp(pt,Z,rt)-_*.016];n.face(Su[(x*11+I*7)%Su.length],St(G,K,.009),St(G,K,.991),St(H,j,.991),St(H,j,.009))}const L=s.coping??.38;if(n.face(tx,E,T,m(v,o,L,.24),m(M,o,L,.24)),s.rail===!1)continue;const C=(I,N)=>m(I,o,L*.55,N);for(const I of[.43,1.18])n.beam(C(M,I),C(v,I),.038,yu);const R=Math.max(1,Math.round(c/g/.28));for(let I=0;I<R;I++){const N=ue.lerp(M,v,I/R);n.beam(C(N,.42),C(N,1.16),I===0?.045:.025,yu)}}}}n.finish()}const lo=[-287.6,-16.5],ga=-.11,ho="#6c4934",xn="#ba986f",Zo="#a58b6c",a0=["#674430","#734d37","#7a5239","#6a4734","#815a41"],bu=["#bd282d","#c63134","#c93636","#b9252d"];function Pa([i,t]){return(e,n)=>[i+e*Math.cos(ga)-n*Math.sin(ga),t+e*Math.sin(ga)+n*Math.cos(ga)]}const ix=[[-3.32,-1.15],[1.8,-1.12],[3.48,0],[1.8,1.12],[-3.32,1.18]].map(i=>Pa(lo)(...i));function sx(i,t){const e=new Zn(1,2),n=fn(new jt({color:"white",flatShading:!0}),{surface:"foliage"}),s=new dn(e,n,t.length),o=new Se;t.forEach(({center:r,scale:a,color:l},c)=>{o.position.set(...r),o.scale.set(...a),o.rotation.y=c*.87,o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c,new Ht(l))}),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}function ox(i,t){const e=[[-3.32,.98,1.41],[-2.54,1.13,1.25],[-1.12,1.22,1.09],[.62,1.15,1.06],[2.05,.87,1.17],[3.14,.4,1.42],[3.5,0,1.58]];function n(l,c,u){const[f,h,d]=e[l];return t(f-(l===e.length-1?(1-u)*.6:0),c*h*(.73+.27*u),.22+(d-.22)*u)}for(const l of[-1,1])for(let c=1;c<e.length;c++){for(let u=0;u<7;u++){const f=u/7,h=(u+.96)/7;i.face(a0[(u+c*2)%a0.length],n(c-1,l,f),n(c,l,f),n(c,l,h),n(c-1,l,h))}if(i.beam(n(c-1,l,1),n(c,l,1),.069,xn),c<6){const[u,f,h]=e[c],d=c===1?3:4;for(let m=0;m<d;m++){const[x,M,v]=e[c-1],y=m/d,b=x+(u-x)*y,w=l*(M+(f-M)*y),S=v+(h-v)*y;i.beam(t(b,w,S),t(b,w,S+.34),.045,xn)}const[p,_,g]=e[c-1];i.beam(t(p,l*_,g+.34),t(u,l*f,h+.34),.057,xn)}}const[s,o,r]=e[0];i.face(ho,t(s,-o*.73,.22),t(s,o*.73,.22),t(s,o,r),t(s,-o,r));for(const l of[-.52,.52]){const c=s-.025,u=.3;for(const f of[l-u,l+u])i.beam(t(c,f,.4),t(c,f,1.18),.044,xn);for(const f of[.4,1.18])i.beam(t(c,l-u,f),t(c,l+u,f),.044,xn);for(let f=0;f<5;f++){const h=f/4;i.beam(t(c,l-u+2*u*h,.43),t(c,l-u,.43+.7*h),.021,xn),i.beam(t(c,l+u-2*u*h,.43),t(c,l+u,.43+.7*h),.021,xn),i.beam(t(c,l-u+2*u*h,1.14),t(c,l+u,1.14-.7*h),.021,xn),i.beam(t(c,l+u-2*u*h,1.14),t(c,l-u,1.14-.7*h),.021,xn)}}i.beam(t(s,-o,r+.34),t(s,o,r+.34),.06,xn);for(let l=0;l<=10;l++){const c=-o+2*o*l/10;i.beam(t(s,c,r),t(s,c,r+.34),.045,xn)}for(let l=1;l<e.length;l++){const[c,u]=e[l-1],[f,h]=e[l];i.face(l%2?"#8e694c":"#856149",t(c,-u,1),t(f,-h,1),t(f,h,1),t(c,u,1))}for(const l of[-1,1])for(const c of[-2.68,-1.87,-.88]){const u=l*(c<-2?1.04:1.12),f=Array.from({length:12},(h,d)=>{const p=d*Math.PI/6;return t(c+Math.cos(p)*.11,u,.66+Math.sin(p)*.1)});i.face("#d0b796",...f)}for(let l=0;l<5;l++){const c=.2+l*.16,u=1.73-l*.13;i.face(xn,t(-2.79,u,c),t(-2.13,u,c),t(-2.13,u-.13,c),t(-2.79,u-.13,c))}for(const l of[-2.81,-2.11])i.beam(t(l,1.77,.16),t(l,1.13,1.06),.075,ho);i.beam(t(2.55,0,1.38),t(4.88,0,2.98),.105,xn),i.beam(t(4.62,0,2.78),t(1.19,0,4.62),.026,Zo);const a=[];for(let l=0;l<14;l++){const c=l*Math.PI/7;a.push(t(-2.37,Math.cos(c)*.31,1.54+Math.sin(c)*.31))}i.beam(t(-2.37,0,1),t(-2.37,0,1.53),.082,ho),a.forEach((l,c)=>{i.beam(l,a[(c+1)%a.length],.036,xn),c%2===0&&i.beam(l,t(-2.37,0,1.54),.025,xn)})}function wu(i,t,e,n){i.beam(t(e,0,.99),t(e,0,n),.087,ho);const s=[[1.56,n*.6,1.03],[n*.61,n*.76,.79],[n*.78,n*.9,.55]];for(const[o,r,a]of s){const l=(c,u)=>{const f=Math.sin(u*Math.PI)*(1-c*c);return t(e+.11+.25*f,c*a*(1-u*.2),o+u*(r-o))};for(let c=0;c<4;c++)for(let u=0;u<6;u++){const f=-1+u/3,h=f+1/3,d=c/4,p=(c+1)/4;i.face(bu[u===0||u===5?0:(c+u)%bu.length],l(f,d),l(h,d),l(h,p),l(f,p))}for(const c of[0,1])i.beam(l(-1.06,c),l(1.06,c),.037,ho);for(const c of[-1,1])i.beam(l(c,0),l(c,1),.023,Zo)}for(const o of[-1,1]){i.beam(t(e-.77,o*1.05,1.2),t(e,o*.26,n*.86),.022,Zo),i.beam(t(e+.53,o*1.05,1.2),t(e,o*.26,n*.86),.022,Zo);for(let r=1;r<10;r++){const a=r/11,l=o*(1.05-.79*a),c=1.2+(n*.86-1.2)*a;i.beam(t(e-.77*(1-a),l,c),t(e+.53*(1-a),l,c),.019,Zo)}}}function rx(i,t,e,n,s){for(let o=0;o<14;o++){const r=o*2.399,a=Math.cos(r),l=Math.sin(r),c=s*(.52+.38*(o*7%11/10)),u=t(e+a*.06,n+l*.06,.04),f=t(e+a*.36*s,n+l*.36*s,c*.68),h=t(e+a*.57*s,n+l*.57*s,c),d=["#8c8551","#a09461","#b2a173"][o%3];i.beam(u,f,.027,d),i.beam(f,h,.018,d)}}function Eu(i,t,e,n,s){const o=s?["#a34c43","#be8341","#567b56","#496d80","#c6944e"]:["#675644","#665540"];for(const r of[-.79,.79]){const a=s?"#3e684d":"#444a46";i.beam(t(e-.22,n+r,.025),t(e-.18,n+r,.78),.047,a),i.beam(t(e+.23,n+r,.025),t(e+.22,n+r,.43),.047,a),i.beam(t(e-.18,n+r,.43),t(e+.22,n+r,.43),.052,a)}for(let r=0;r<5;r++){const a=e-.19+r*.1;i.beam(t(a,n-.9,.44),t(a,n+.9,.44),.071,o[r%o.length]),i.beam(t(e-.19-r*.012,n-.9,.57+r*.072),t(e-.19-r*.012,n+.9,.57+r*.072),.067,o[(r+1)%o.length])}}function ax(i,t){const e=new ge;e.name="Сквер у Алых парусов",i.add(e);const n=me(e,"Алые паруса · деревянный кораблик и клумбы",{surfaces:{wood:[ho,xn,...a0,"#8e694c","#856149"],ground:["#777653","#797358"]}}),s=Pa(lo),o=t(...lo)+.15,r=(h,d,p)=>{const[_,g]=s(h,d);return[_,o+p,g]},a=(h,d)=>[[-h,-d],[h,-d],[h,d],[-h,d]].map(([p,_])=>s(p,_));n.shell(a(9,2.18),o-.08,o+.11,"#d7d5bd"),n.flat(a(8.87,2.05),o+.125,"#777653");for(let h=0;h<28;h++){const d=-4.2+h*.318,p=d+.307;n.face(["#628d86","#699892","#7ca39a","#5a8179"][h%4],r(d,-1.45,.145),r(p,-1.45,.145),r(p,1.45,.145),r(d,1.45,.145))}ox(n,r),wu(n,r,-1.03,5.02),wu(n,r,.98,4.6),Eu(n,r,9.27,.08,!0);for(const[h,d,p]of[[-7.25,-.95,1.06],[-6.45,.52,.72],[-5.35,1.11,.93],[4.35,1.4,.89],[5.48,-1.23,1.1],[6.8,.44,.99],[7.85,1.12,.83]])rx(n,r,h,d,p);const l=[],c=["#415c35","#536c3b","#66804c","#4d6540"],u=[[-344.6,-12.8,9.8,3.45],[-326.5,-13.4,10.5,3.4],[-310.6,-14.2,12.5,3.7],[-265.5,-20.3,15,4.7],[-247.5,-23.4,10.8,4.5]];for(const[h,[d,p,_,g]]of u.entries()){const m=Pa([d,p]),x=t(d,p)+.14,M=(v,y)=>[[-v,-y],[v,-y],[v,y],[-v,y]].map(b=>m(...b));n.shell(M(_/2,g/2),x-.1,x+.12,"#d4d3c5"),n.flat(M(_/2-.12,g/2-.12),x+.13,"#797358");for(const v of[-.29,.02,.32]){const[y,b]=m(v*_,(h%2-.5)*.8),w=1.15+.51*((h+Math.round(v*10))%3+3)/3;for(let S=0;S<4;S++){const E=w*(.5-S*.095);l.push({center:[y,x+w*(.28+S*.19),b],scale:[E,w*.26,E*.9],color:c[(S+h)%c.length]})}}for(let v=0;v<7;v++){const[y,b]=m((v/6-.5)*_*.75,-.9);l.push({center:[y,x+.2,b],scale:[.42,.16,.42],color:v%3?"#804944":"#77673c"})}}for(const[h,d]of[[-301.1,-31],[-290.8,-31.7],[-273.1,-34.3],[-260.6,-35],[-247.5,-37.5]]){const p=Pa([h,d]),_=t(h,d)+.15;Eu(n,(m,x,M)=>{const[v,y]=p(x,-m);return[v,_+M,y]},0,0,!1)}const f=[[-318,0,6.2],[-310.5,-.4,7.7],[-301,1.5,6.4],[-292.2,-.9,8.3],[-282.1,-1.8,7.6],[-272.4,.8,8.7],[-261,-1.2,6.8],[-249.6,.5,7.3]];for(const[h,[d,p,_]]of f.entries()){const g=t(d,p)+.05;n.beam([d,g,p],[d+.13,g+_*.69,p],.24,"#665949");for(let m=0;m<6;m++){const x=m*2.399,M=_*(m<4?.21:.14);l.push({center:[d+Math.cos(x)*M,g+_*(.6+m*.047),p+Math.sin(x)*M],scale:[_*.26,_*.27,_*.23],color:c[(h+m)%c.length]})}}sx(e,l),n.finish()}function Tu(i){const t=new Hc(i);return t.colorSpace=je,t.anisotropy=4,t}function Ie(i,{text:t,position:e,size:n,outward:s,color:o="#fff",background:r,weight:a=700,fontFamily:l="system-ui, sans-serif",letterSpacing:c="0px",lighting:u="spot",glowColor:f="#ffe4af",spill:h=!0}){if(typeof document>"u")return;const d=document.createElement("canvas");d.width=Math.max(160,Math.min(768,Math.round(n[0]*138))),d.height=Math.max(32,Math.round(d.width*n[1]/n[0]));const p=d.getContext("2d");if(!p)return;r&&(p.fillStyle=r,p.fillRect(0,0,d.width,d.height));const _=t.split(`
`);let g=d.height*.76/_.length;p.letterSpacing=c,p.font=`${a} ${g}px ${l}`,g*=Math.min(1,d.width*.93/Math.max(..._.map(y=>p.measureText(y).width)));function m(y,b,w=0){y.font=`${a} ${g}px ${l}`,y.letterSpacing=c,y.fillStyle=b,y.textBaseline="middle",y.textAlign="center",_.forEach((S,E)=>{y.fillText(S,w+d.width/2,w+d.height/2+(E-(_.length-1)/2)*g*1.13)})}m(p,o);const x=new Dn({map:Tu(d),alphaTest:.35,toneMapped:!1}),M=new oe(new mi(...n),x);M.name=t,M.position.set(...e),M.rotation.y=Math.atan2(...s);let v;if(u==="neon"||u==="backlit"){const y=u==="neon",b=Math.min(44,Math.round(d.width*.12)),w=document.createElement("canvas");w.width=d.width+2*b,w.height=d.height+2*b;const S=w.getContext("2d");S.shadowColor=f,S.shadowBlur=Math.min(b,Math.max(8,g*(y?.64:.27))),m(S,f,b),y&&(S.shadowBlur=0,S.globalAlpha=.18,m(S,"#fff1dd",b));const E=n[0]*w.width/d.width,T=n[1]*w.height/d.height;v=new oe(new mi(E,T),new Dn({map:Tu(w),transparent:!0,opacity:y?.94:.79,blending:go,depthWrite:!1,toneMapped:!1})),v.position.z=.014,v.visible=!1,M.add(v)}if(u!=="unlit"&&h){const y=new Se;y.position.set(0,u==="spot"?n[1]*.64:0,u==="spot"?.75:.54),y.userData.nightLight={color:f,intensity:u==="neon"?3.8:2.2,range:u==="spot"?3.6:3.1},M.add(y)}return M.userData.setEvening=y=>{const b={spot:.82,backlit:.43,neon:.16,unlit:.5};x.color.setScalar(y?b[u]??.82:1),v&&(v.visible=y)},i.add(M),M}const qe="#f4f2e9",Cd="#e9e7df",Sn="#373e3e",La="#303637",uo="#b28c5e",Mc=["#d1b27a","#bc9c63","#c8a86f"],cx="#ecefe8",cs=[[-416.6,-27.8,-17.5],[-408.5,-25.4,-15.7],[-399.5,-23.2,-14.7],[-389.5,-22.8,-14.6],[-378.4,-23.1,-14.8]],Pd=[[-415.65,-26.9],[-407.4,-24.5],[-408.6,-16.85],[-416.1,-18.05]];function Ld(i,t,e,n){return[[i,e],[t,e],[t,n],[i,n]]}function Ci(i,t,e,n,s=24){return Array.from({length:s},(o,r)=>{const a=r*2*Math.PI/s;return[i+e*Math.cos(a),t+n*Math.sin(a)]})}function Fe([i,t],e){return[i,e,t]}function _a(i,t){const e=cs.findIndex(([o])=>o>=i);if(e<0)return cs.at(-1)[t];const n=cs[Math.max(0,e-1)],s=cs[Math.max(0,e)];return n===s?n[t]:n[t]+(s[t]-n[t])*(i-n[0])/(s[0]-n[0])}function Pn(i,t,e,n,s,o,r,a){i.shell(Ld(t-s/2,t+s/2,n-r/2,n+r/2),e,e+o,a)}function lx(i,t){const e=new ge;e.name="Кофейня Qúeue",i.add(e);const n=me(e,"Павильон и кофейная стойка",{surfaces:{wood:["#b48558","#796c51"],foliage:["#737a51","#68774a","#83916b"]}}),s=fn(new Dn({color:"#759497",transparent:!0,opacity:.26,depthWrite:!1,side:Ze}),{surface:"glass",strength:.6}),o=Pd,r=t(-412.5,-21.7),a=r+.09,l=r+2.82;n.shell(o,r-.18,a,"#c9c5b5"),n.shell(o,l,r+3.12,qe),n.wall(o[3],o[0],a,l,qe);for(const[f,h]of[[0,[0,.13,.32,.54,.76,.95,1]],[1,[0,.14,.39,.64,.89,1]],[2,[0,.28,.43,.58,.7,.88,1]]]){const d=o[f],p=o[f+1],_=p[0]-d[0],g=p[1]-d[1],m=Math.hypot(_,g);for(let x=0;x<h.length-1;x++){const M=gt(d,p,h[x]),v=gt(d,p,h[x+1]);if(x===0||x===h.length-2){n.wall(M,v,a,l,qe);continue}const b=f===2&&x===4,w=f===2&&x===3,S=b||w?r+2.48:l;S<l&&n.wall(M,v,S,l,qe);const E=gt(M,v,.5),T=w?r+1.1:a;w&&(n.wall(M,v,a,T,"#a8a494"),n.beam([M[0],T,M[1]],[v[0],T,v[1]],.12,La));const P=new oe(new mi((h[x+1]-h[x])*m,S-T),s);P.position.set(E[0],(T+S)/2,E[1]),P.rotation.y=-Math.atan2(g,_),e.add(P);for(const L of[M,v])n.beam(Fe(L,a),Fe(L,S),.058,La);if(n.beam(Fe(M,S),Fe(v,S),.055,La),b){const L=gt(M,v,.82);n.beam(Fe(L,r+.92),Fe(L,r+1.3),.052,"#bab4a5")}}}const c=[[-415.28,-22.2],[-414.15,-22.2],[-413.68,-21.78],[-413.68,-19.92],[-412.9,-19.25],[-411.05,-19.25],[-410.8,-18.65],[-411.22,-18.34],[-414.68,-18.67],[-415.25,-19.13]];n.shell(c,a,r+1.07,"#e4decd"),n.shell(c,r+1.07,r+1.14,"#f1e9d7");const u=c.map(f=>gt([-413.5,-19.8],f,1.03));n.shell(u,r+2.08,r+2.15,"#eac58a"),n.shell(u,r+2.15,l,"#e3dbc9"),Pn(n,-413.54,r+1.14,-19.02,.86,.46,.45,"#343435"),Pn(n,-413.54,r+1.5,-18.79,.76,.08,.04,"#a7a199");for(const f of[-413.8,-413.62,-413.44,-413.26])n.shell(Ci(f,-18.99,.06,.06,10),r+1.6,r+1.76,"#b48558");Pn(n,-411.83,r+1.14,-18.85,.85,.34,.46,"#948273"),Pn(n,-411.83,r+1.48,-18.85,.85,.046,.46,"#bbb2a0");for(const[f,h]of[[-412.4,-21.8],[-410.8,-21.2]])n.shell(Ci(f,h,.21,.21,14),a,r+.47,"#e0d9c9"),n.shell(Ci(f,h,.32,.32,14),r+.47,r+.52,"#ece4d2");for(const f of[.19,.39,.59,.79]){const[h,d]=gt(o[0],o[1],f),p=t(h,d-.66);for(const _ of[-.24,.24])n.beam([h+_,p,d-.82],[h+_,p+.43,d-.82],.022,Sn),n.beam([h+_,p,d-.36],[h+_,p+.86,d-.28],.026,Sn),n.beam([h+_,p+.41,d-.82],[h+_,p+.41,d-.35],.032,Sn);for(let _=0;_<7;_++){const g=p+.45+_*.063,m=d-.34+_*.008;n.beam([h-.24,g,m],[h+.24,g,m],.015,Sn)}Pn(n,h,p+.41,d-.58,.48,.05,.42,Sn)}for(const f of[.04,.94]){const[h,d]=gt(o[0],o[1],f);hx(n,h,t(h,d-.64),d-.64)}n.finish()}function hx(i,t,e,n){i.shell(Ci(t,n,.26,.26,12),e,e+.5,"#e6e7dd"),i.flat(Ci(t,n,.22,.22,12),e+.505,"#6b6154"),i.beam([t,e+.5,n],[t+.04,e+1.39,n+.02],.035,"#796c51");for(let s=0;s<9;s++){const o=s*2.4,r=e+.79+s*.075,a=[t+.21*Math.cos(o),r+.11,n+.21*Math.sin(o)];i.beam([t,r,n],a,.024,"#737a51"),i.face(s%2?"#68774a":"#83916b",a,[t+.025,r,n+.06],[a[0]*.5+t*.5,r+.17,a[2]*.5+n*.5])}}function ux(i){const t=new ge;t.name="Ресторан «Море. Истории о еде»",i.add(t);const e=me(t,"Белая терраса у «Старинной Анапы»",{surfaces:{wood:[uo,...Mc],ground:["#6b6154"]}}),{front:[n,s],grade:o}=Ms,r=(h,d)=>{const[p,_]=gt(n,s,h/32.59);return[p-d*.197,_+d*.98]},a=(h,d,p,_)=>[r(h,p),r(d,p),r(d,_),r(h,_)],l=o+.15,c=l+2.94;e.shell(a(0,32.59,0,1.9),l-.34,l,"#b6aa94"),e.shell(a(0,32.59,7.1,9.15),l-.34,l,"#b6aa94");for(const[h,d]of[[0,7.3],[12.1,20.4],[24.9,32.59]])e.shell(a(h,d,1.9,7.1),l-.34,l,"#b6aa94");for(const[h,d,p,_]of[[0,32.59,0,1.9],[0,32.59,7.1,9.15],[0,7.3,1.9,7.1],[12.1,20.4,1.9,7.1],[24.9,32.59,1.9,7.1]])for(let g=h+.13;g<d;g+=.34)e.beam(Fe(r(g,p),c),Fe(r(g,_),c),.077,qe);for(let h=0;h<6;h++){const d=c-.02+h*.09;e.beam(Fe(r(0,0),d),Fe(r(32.59,0),d),.066,qe);for(const p of[0,32.59])e.beam(Fe(r(p,0),d),Fe(r(p,9.15),d),.066,qe)}for(const h of[.14,4.55,8.98,13.41,17.84,22.27,26.7,32.43])e.beam(Fe(r(h,.22),l),Fe(r(h,.22),c+.44),.165,qe);for(const h of[2.35,6.82,11.25,15.66,20.07,24.48,28.89,31.3]){e.shell(a(h-.76,h+.76,.16,.72),l,l+.65,qe);for(let _=1;_<=5;_++){const g=l+.1+_*.085;e.beam(Fe(r(h-.75,.153),g),Fe(r(h+.75,.153),g),.02,Cd)}e.flat(a(h-.7,h+.7,.2,.68),l+.655,"#788166");const[d,p]=r(h,1.34);Pn(e,d,l+.69,p,.82,.07,.7,"#ab8d63"),Pn(e,d,l,p,.08,.69,.08,"#545549")}const[u,f]=r(25.4,-.05);Ie(t,{text:"МОРЕ",position:[u,c+.2,f],size:[2.28,.41],outward:[.197,-.98],color:"#6e553a",lighting:"spot",glowColor:"#ffd089"});for(const h of[24.65,25.4,26.15])e.beam(Fe(r(h,-.018),c+.5),Fe(r(h,-.17),c+.44),.041,"#70664f");e.finish()}function fx(i,t,e,n,s){const o=new ge,r=new Dn({color:"#c9ba98",toneMapped:!1}),a=new Mn(.043,8,6),l=4,c=16;let u;for(let f=0;f<=c;f++){const h=f/c,[d,p]=gt(e,n,h),_=s-.18*Math.sin(Math.PI*(h*l%1)),g=[d+.13,_,p];if(u&&t.beam(u,g,.015,"#353535"),u=g,f===c)continue;const m=new oe(a,r);m.position.set(d+.13,_-.052,p),f%4===2&&(m.userData.nightLight={color:"#ffe4ad",intensity:3.5,range:3.4}),o.add(m)}o.userData.setEvening=f=>r.color.set(f?"#fff0be":"#c9ba98"),i.add(o)}function dx(i,t){const e=new ge;e.name="Гриль-бар «Бикью»",i.add(e);const n=me(e,"Остеклённый фасад на Греческом переулке",{surfaces:{flatRoof:["#353635"],stone:["#77726a"],wood:["#403731"]}}),s=[[-456.42,4.1],[-456.94,24.1]],o=[[-458.12,4.1],[-458.64,24.1]],r=[o[0],s[0],s[1],o[1]],a=t(-457,14.1)+.11,l=Math.min(...s.map(d=>t(...d)))-.2,c=a+2.82;n.shell(r,l,a+.12,"#77726a"),n.shell(r,c,c+.21,"#353635"),n.wall(...o,a+.1,c,"#403731");const u=fn(new Dn({color:"#394c50",transparent:!0,opacity:.53,depthWrite:!1,side:Ze}),{surface:"glass",strength:.7});for(const[d,p,_]of[[...s,14],[o[0],s[0],1],[s[1],o[1],1]])for(let g=0;g<_;g++){const m=gt(d,p,g/_),x=gt(d,p,(g+1)/_),M=gt(m,x,.5),v=x[0]-m[0],y=x[1]-m[1],b=new oe(new mi(Math.hypot(v,y),c-a-.12),u);if(b.position.set(M[0],(c+a+.12)/2,M[1]),b.rotation.y=-Math.atan2(y,v),e.add(b),n.beam(Fe(m,a+.08),Fe(m,c),.074,"#292c2b"),n.beam(Fe(m,a+.85),Fe(x,a+.85),.041,"#393b39"),_===14&&g!==6&&g!==7){for(const w of[.12,.45]){const S=Math.max(0,t(M[0]+.15,M[1])-a),E=(T,P)=>{const[L,C]=gt(m,x,T+w);return[L+.025,a+P+S,C]};n.face("#c89045",E(0,.36),E(.14,.36),E(.31,.6),E(.17,.6)),n.face("#c89045",E(.17,.6),E(.31,.6),E(.14,.84),E(0,.84))}Pn(n,M[0]-.75,a+.71,M[1],.55,.09,.62,"#856747"),Pn(n,M[0]-.75,a+.1,M[1],.07,.61,.07,"#343330")}}fx(e,n,...s,c-.06);const f=new Dn({color:"#757078",toneMapped:!1}),h=new oe(new Ne(.047,.047,3),f);h.position.set(-457.8,c-.27,7.7),h.userData.setEvening=d=>f.color.set(d?"#ac91ff":"#757078"),h.userData.nightLight={color:"#9b78ff",intensity:2.5,range:3.3},e.add(h),Ie(e,{text:`BAR
BQ`,position:[-456.54,a+1.36,13.98],size:[1.34,1.17],outward:[1,.026],color:"#cac2a7",weight:550,lighting:"unlit"}),n.finish()}function px(i,t,e){const n=new Dn({color:"#d2d0c2",toneMapped:!1}),s=new ge;for(const o of[1,2]){const r=Array.from({length:41},(c,u)=>{const f=ue.lerp(e[0],e.at(-1),u/40),[h,d,p]=t(f,o,-.18);return new O(h,d,p+(o===1?-.05:.05))}),a=new Xc(r),l=new oe(new Ao(a,85,.026,5,!1),n);s.add(l)}s.userData.setEvening=o=>n.color.set(o?"#fff2d7":"#d2d0c2"),i.add(s)}function mx(i,t){const e=new ge;e.name="Лаундж-зона Qúeue",i.add(e);const n=me(e,"Волнообразный навес и кофейня"),s=(p,_)=>t(p,_)+.19,o=p=>{const _=(p+395.7)/5.6;return s(p,_a(p,2))+3.65+1.08*Math.exp(-(_**2))},r=(p,_,g=0)=>[p,o(p)+g,_a(p,_)],a=[-416.6,-409.3,-403.8,-388.6,-383.6,-378.4];for(const p of[1,2])for(let _=1;_<a.length;_++){const g=a[_-1],m=a[_],x=Math.ceil((m-g)/.37);let M,v;for(let y=0;y<=x;y++){const b=y/x,w=g+(m-g)*b,S=_a(w,p),E=s(w,S),T=Math.sqrt(Math.max(0,1-(2*b-1)**2)),P=[w,E+.09+(o(w)-E-.36)*T,S],L=r(w,p);M&&(n.beam(M,P,.18,qe),n.beam(v,L,.2,Cd),n.beam([v[0],v[1]-.23,v[2]],r(w,p,-.23),.075,qe)),(y>0||_===1)&&n.beam(P,L,y===0||y===x?.18:.065,qe),M=P,v=L}}for(let p=0;p<=94;p++){const _=a[0]+(a.at(-1)-a[0])*p/94;n.beam(r(_,1,-.11),r(_,2,-.11),.1,qe)}px(e,r,a),lx(e,s);const l=-412.2,c=o(l)-.1,u=(cs[1][2]-cs[0][2])/(cs[1][0]-cs[0][0]),f=[-u,1],h=_a(l,2)+.15,d=[[-1.65,-.04],[1.65,-.04],[1.65,.04],[-1.65,.04]].map(([p,_])=>[l+p,h+p*u+_]);n.shell(d,c-.21,c+.21,qe),Ie(e,{text:"Qúeue",position:[l,c,h+.05],size:[3.2,.39],outward:f,color:La,lighting:"spot"}),n.finish()}function Au(i,t,e,n){const s=t(e,n)+.16,o=Ci(e,n,3.45,2.35);i.shell(o,s-.24,s+.08,uo);for(let a=-10;a<=10;a++){const l=a*.22,c=3.4*Math.sqrt(1-(l/2.35)**2);i.beam([e-c,s+.084,n+l],[e+c,s+.084,n+l],.018,Mc[(a+12)%Mc.length])}for(const a of[-1,1]){const l=[e+a*2.5,n];i.shell(Ci(...l,.095,.095,10),t(...l)-.12,s+3.05,qe)}const r=Ci(e,n,3.55,2.45,32);for(let a=0;a<r.length;a++)i.beam(Fe(r[a],s+2.88),Fe(r[(a+1)%r.length],s+2.88),.13,qe);for(let a=-8;a<=8;a++){const l=a*.4,c=2.41*Math.sqrt(1-(l/3.55)**2);i.beam([e+l,s+2.89,n-c],[e+l,s+2.89,n+c],.09,qe)}for(const a of[-.23,-.09,.09,.23]){const l=Array.from({length:32},(c,u)=>{const f=u*Math.PI/16;return[e+.97*Math.cos(f),s+1.38+.99*Math.sin(f),n+a]});for(let c=0;c<l.length;c++)i.beam(l[c],l[(c+1)%l.length],.035,qe)}Pn(i,e,s+.55,n,1.08,.055,.48,uo);for(const a of[-.57,.57])i.beam([e+a,s+2.21,n],[e+a,s+2.89,n],.018,Sn)}function gx(i,t){const s=t(-397.8,-29.25)+.18;for(const r of[-2.28,2.28])i.shell(Ci(-397.8+r,-29.25,.085,.085,12),s-.14,s+3.38,qe);const o=[[-397.8-3.18,s+2.77,-29.25+.45],[-397.8-3.27,s+3,-29.25-1.37],[-397.8,s+2.67,-29.25-.72],[-397.8+3.29,s+3.02,-29.25-1.3],[-397.8+3.14,s+2.8,-29.25+.49]];for(let r=0;r<o.length;r++)i.beam(o[r],o[(r+1)%o.length],.085,qe);for(let r=0;r<20;r++){const a=(r+1)/21,l=a<.5?gt(o[1],o[2],a*2):gt(o[2],o[3],(a-.5)*2);i.beam(l,gt(o[0],o[4],a),.064,qe)}}function _x(i,t){const e=new ge;e.name="Качели, теневые крылья и белые галечные сиденья",i.add(e);const n=me(e,"Настилы и мебель",{surfaces:{wood:[uo,...Mc]}});Au(n,t,-410.7,-30.1),Au(n,t,-382.8,-25.55),gx(n,t);const s=new Mn(1,24,12),o=new jt({color:cx});for(const[f,h,d,p,_,g]of[[-401.9,-30.05,1.12,.69,.41,.18],[-402.7,-27.65,.88,.65,.4,-.29],[-399.6,-26.05,1.26,.72,.43,-.14],[-396.7,-28.5,.73,.62,.41,.26],[-395.1,-26.05,.98,.68,.43,-.31]]){const m=new oe(s,o);m.scale.set(d,_,p),m.rotation.y=g,m.position.set(f,t(f,h)+_+.15,h),m.castShadow=!0,m.receiveShadow=!0,e.add(m)}for(const[f,h]of[[-406.2,-20.1],[-403,-18.2],[-390.1,-17.3]]){const d=t(f,h)+.15;n.shell(Ci(f,h,.38,.38,16),d+.72,d+.77,Sn),n.beam([f,d,h],[f,d+.72,h],.045,Sn);for(const p of[-.74,.74]){Pn(n,f+p,d+.43,h,.42,.055,.42,Sn);for(const _ of[-.16,.16])for(const g of[-.15,.15])n.beam([f+p+_,d,h+g],[f+p+_,d+.43,h+g],.029,Sn);n.wall([f+p*1.25,h-.19],[f+p*1.25,h+.19],d+.46,d+.81,Sn)}}const r=-387.7,a=-20.4,l=t(r,a)+.16,c=Ld(r-.92,r+.92,a-.72,a+.72);n.shell(c,l-.12,l+.42,uo);for(const f of c)n.beam(Fe(f,l),Fe(f,l+1.75),.09,uo);const u=[[r-1,l+2.35,a],[r+1,l+2.35,a]];for(const f of[-1,1])n.face("#99704d",...u,[r+1.03,l+1.72,a+f*.82],[r-1.03,l+1.72,a+f*.82]);n.finish()}function xx(i,t){const e=me(i,"Памятный знак Матери Марии"),n=-652.7,s=-66.6,o=t(n,s)+.1,r=[[-1.02,-.42],[-.73,-.78],[.59,-.78],[1.05,-.39],[1.15,.24],[.91,.59],[-.78,.61],[-1.1,.18]],l=[[-.63,.68,-.21],[-.42,1.14,-.51],[.04,1.53,-.56],[.53,1.25,-.39],[.84,.85,-.01],[.88,.47,.37],[-.76,.48,.43],[-.94,.59,.16]].map(([u,f,h])=>[n+u,o+f,s+h]),c=r.map(([u,f])=>[n+u,o-.13,s+f]);for(let u=0;u<r.length;u++){const f=(u+1)%r.length;e.face(u%2?"#706f67":"#666860",c[u],c[f],l[f],l[u]),e.face(u%3?"#8e928b":"#a4a79f",l[u],l[f],[n+.03,o+.95,s-.01])}e.beam([n+.02,o+.05,s+1],[n+.08,o+1.58,s-.57],.14,"#807f71"),e.beam([n-.82,o+1,s+.055],[n+.9,o+1,s+.055],.14,"#807f71");for(let u=0;u<3;u++)for(const[f,h]of[-1.2,-.6,.035,.635].entries()){const d=n+h+.286,p=s+1.33+u*.58,_=t(d,p)+.035;Pn(e,d,_-.08,p,.57,.09,.56,f===0||f===3?"#a78277":"#929897")}e.finish()}function vx(i,t){const e=me(i,"Памятник морскому десанту"),n=-631.7,s=-37.2,o=t(n,s)+.09,r=(l,c,u)=>[n+l,o+c,s+u];Pn(e,n,o-.12,s+.45,2.85,.23,2.35,"#bbb6aa"),Pn(e,n,o+.11,s+.3,2.19,.26,1.57,"#424545"),Pn(e,n,o+.37,s-.25,1.06,2.08,.22,"#333837");const a=Array.from({length:10},(l,c)=>{const u=Math.PI/2+c*Math.PI/5,f=c%2?.064:.151;return r(-.28+f*Math.cos(u),2.12+f*Math.sin(u),-.135)});for(let l=0;l<a.length;l++)e.face("#b6a06b",r(-.28,2.12,-.135),a[l],a[(l+1)%a.length]);e.beam(r(-.34,.52,.73),r(.73,1.39,.54),.13,Sn),e.beam(r(-.44,.58,.48),r(-.2,.53,.95),.18,Sn);for(const[l,c]of[[[-.66,.79,.72],[-.62,1.33,.65]],[[-.21,.84,.7],[.01,1.35,.58]]])e.beam(r(-.37,.57,.74),r(...l),.11,Sn),e.beam(r(...l),r(...c),.1,Sn),e.face(Sn,r(...c),r(c[0]-.1,c[1]-.26,c[2]+.07),r(c[0]+.08,c[1]-.23,c[2]-.05));for(const l of[-1,0,1]){const c=l*.82,u=l*1.21,f=[r(c-.32,.28,1.72),r(c+.32,.28,1.72),r(u+.37,.19,3.17),r(u-.37,.19,3.17)],h=f.map(([d,,p])=>[d,t(d,p)-.08,p]);e.face("#b7b5ac",...f);for(let d=0;d<f.length;d++){const p=(d+1)%f.length;e.face("#a7a8a1",f[d],f[p],h[p],h[d])}e.face("#444746",r(c-.25,.294,1.8),r(c+.25,.294,1.8),r(u+.28,.216,3.05),r(u-.28,.216,3.05))}e.finish()}function Mx(i,t){mx(i,t),_x(i,t),ux(i),dx(i,t),xx(i,t),vx(i,t)}const Es=Math.PI*2;function mr(i,t,e,n=36){return Array.from({length:n},(s,o)=>{const r=o/n*Es;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function Sx(){const e=new Uint8Array(18432);for(let s=0;s<48;s++){const o=(s+.5)/48;for(let r=0;r<96;r++){const a=r/96*Es,l=Math.max(0,Math.sin(a*3)*.06+Math.sin(a*7+.4)*.035),c=o>.51+l?[173+o*46,196+o*36,211+o*38]:o>.42?[71,78,66]:[122+o*71,113+o*77,99+o*86],u=(s*96+r)*4;e.set([...c,255],u)}}const n=new kc(e,96,48);return n.colorSpace=je,n.mapping=sr,n.needsUpdate=!0,new dr({color:"#ced3d4",envMap:n,reflectivity:.88,specular:"#f2f5f5",shininess:78})}function yx(i,t){const s=me(i,"Фонтан «Жемчужина Анапы»"),o=(d,p,_=0)=>[d,t(d,p)+.17+_,p],r=mr(-238,2,3.5),a=mr(-238,2,3.71);r.forEach(([d,p],_)=>{const g=(_+1)%r.length;s.face("#555857",o(-238,2),o(d,p),o(...r[g])),s.face("#997359",o(d,p),o(...a[_]),o(...a[g]),o(...r[g]))});for(let d=0;d<28;d++){const p=d*Es/28,_=mr(-238+2.85*Math.cos(p),2+2.85*Math.sin(p),.036,8);s.face("#a7a8a1",..._.map(g=>o(...g,.008)))}const l=.13;for(let d=0;d<6;d++){const p=l+d*Es/6;for(let _=0;_<5;_++){const g=p-.34+_*.135,m=g+.133,x=(w,S,E)=>o(-238+Math.cos(w)*S,2+Math.sin(w)*S,E),M=x(g,4.43,.44),v=x(m,4.43,.44),y=x(g,4.93,.36),b=x(m,4.93,.36);s.face("#9e9a90",M,v,x(m,4.41,-.045),x(g,4.41,-.045)),s.face("#8e8b84",x(g,5.06,.02),x(m,5.06,.02),x(m,5.06,.1),x(g,5.06,.1)),s.face("#bf8770",M,v,b,y),s.face("#b67e64",y,b,x(m,5.06,.1),x(g,5.06,.1)),_===0&&s.face("#a39d92",M,y,x(g,5.06,.02),x(g,4.41,-.045)),_===4&&s.face("#a39d92",v,b,x(m,5.06,.02),x(m,4.41,-.045))}}const c=new ge;c.name="Шесть зеркальных сфер",i.add(c);const u=new Mn(1,28,20),f=Sx(),h=[[0,0,.57,3.35],[-1.65,1.12,.56,.86],[1.77,-.98,.48,1.12],[-2.31,-1.72,.51,0],[2.44,1.69,.47,0],[.47,-2.67,.43,0]];for(const[d,p,_,g]of h){const[m,x,M]=o(-238+d,2+p),v=new oe(u,f);if(v.scale.setScalar(_),v.position.set(m,x+_+g,M),v.castShadow=!0,c.add(v),!!g)for(let y=0;y<11;y++){const b=y/11*Es,w=b+.88;s.beam([m+Math.cos(b)*.13,x,M+Math.sin(b)*.13],[m+Math.cos(w)*_*.63,x+g+.13,M+Math.sin(w)*_*.63],.026,"#a5a7a4")}}s.finish()}function bx(i,t){const o=Math.cos(-.51),r=Math.sin(-.51),a=me(i,"Арка Центрального пляжа"),l="#eeeae0",c="#dbd9ce",u=3.11,f=[1.21,1.28,1.34,1.28,1.21],h=[-6.36,-3.69,-1.25,1.25,3.69,6.36],d=(m,x)=>[197.02+m*o-x*r,-463.27+m*r+x*o],p=Math.max(...h.map(m=>t(...d(m,0))))+.16,_=(m,x,M)=>{const[v,y]=d(m,x);return[v,p+M,y]},g=(m,x,M,v)=>[d(m-M,x-v),d(m+M,x-v),d(m+M,x+v),d(m-M,x+v)];for(const[m,x]of h.entries())if(m===0||m===1||m===4||m===5){a.shell(g(x,0,.47,1.18),p-.4,p+u,l),a.shell(g(x,0,.57,1.27),p+u-.045,p+u+.1,l);for(const v of[-1.03,1.03])a.shell(g(x,v,.37,.17),p+u,p+u+.95,l);a.shell(g(x,0,.42,1.23),p+u+.95,p+u+1.09,l)}else for(const v of[-.92,.92])a.shell(g(x,v,.2,.21),p-.4,p+u,l),a.shell(g(x,v,.27,.28),p+u-.06,p+u+.085,l);for(const m of[-.92,.92])for(let x=0;x<f.length;x++){const M=(h[x]+h[x+1])/2,v=(h[x+1]-h[x])/2,y=(b,w,S)=>_(M+(v+w)*Math.cos(b),m+S*.17,u+(f[x]+w)*Math.sin(b));for(let b=0;b<14;b++){const w=Math.PI*b/14,S=Math.PI*(b+1)/14;for(const E of[-1,1])a.face(l,y(w,-.19,E),y(S,-.19,E),y(S,.11,E),y(w,.11,E));a.face(c,y(w,-.19,-1),y(S,-.19,-1),y(S,-.19,1),y(w,-.19,1)),a.face(l,y(w,.11,-1),y(S,.11,-1),y(S,.11,1),y(w,.11,1))}}a.finish()}function wx(i,t){const s=t(64.17,13.11)+.16,o=me(i,"Скульптура «Белая шляпа»"),r=["#8b8777","#a39e8d","#a9a38f","#8d897b","#969383"],a=[[1.28,.77,-.12,.1],[1.39,.74,.35,.19],[1.12,.65,.75,.17],[.79,.57,1.12,.08],[.48,.38,1.56,-.17]].map(([p,_,g,m],x)=>Array.from({length:13},(M,v)=>{const y=v/13*Es,b=1+.13*Math.sin(v*3.3+x*.81);return[64.17+m+Math.cos(y)*p*b,s+g+.12*Math.cos(v*2.4+x),13.11+Math.sin(y)*_*b]}));for(let p=0;p<a.length-1;p++){const _=a[p],g=a[p+1];_.forEach((m,x)=>{const M=(x+1)%_.length;o.face(r[(x+p*3)%r.length],m,_[M],g[M]),o.face(r[(x+p*3+1)%r.length],m,g[M],g[x])})}o.face("#a29e8f",...a.at(-1));const l=(p,_,g)=>Array.from({length:32},(m,x)=>{const M=x/32*Es,v=Math.cos(M)*p,y=Math.sin(M)*p*.83,b=g?.038*Math.cos(2*M):.044*Math.cos(2*M);return[64.17-.13+v,s+1.56+_+y*.37+b,13.11+y]}),u=[[.75,0,!1],[.75,.035,!1],[.4,.12,!1],[.405,.155,!0],[.39,.22,!0],[.34,.43,!0],[.24,.49,!0],[.08,.46,!0]].map(p=>l(...p));for(let p=0;p<u.length-1;p++){const _=u[p+1],g=u[p];g.forEach((m,x)=>{const M=(x+1)%g.length;o.face(p===3?"#d8d7ce":"#f5f3e9",m,g[M],_[M],_[x])})}o.face("#f5f3e9",...u.at(-1));const f={Б:[[[.88,1],[0,1],[0,0],[.76,0],[.9,.22],[.72,.53],[0,.53]]],Е:[[[.88,1],[0,1],[0,0],[.9,0]],[[0,.5],[.75,.5]]],Л:[[[0,0],[.31,1],[.84,1],[.84,0]]],А:[[[0,0],[.45,1],[.9,0]],[[.2,.42],[.7,.42]]],Я:[[[.9,0],[.9,1],[.25,1],[0,.76],[.23,.54],[.9,.54]],[[.52,.54],[0,0]]],Ш:[[[0,1],[0,0],[.95,0],[.95,1]],[[.475,0],[.475,1]]],П:[[[0,0],[0,1],[.86,1],[.86,0]]]};[..."БЕЛАЯ ШЛЯПА"].forEach((p,_)=>{for(const g of f[p]??[]){const m=g.map(([x,M])=>{const v=(_+x-5.5)*.155;return[64.17+Math.sin(v)*1.17,s+.41+M*.175,13.11+Math.cos(v)*.88]});m.slice(1).forEach((x,M)=>o.beam(m[M],x,.032,"#f5f3e9"))}});const h=mr(64.17,13.11,2.45),d=(p,_)=>[p,t(p,_)+.17,_];h.forEach((p,_)=>o.face("#b4ac9c",d(64.17,13.11),d(...p),d(...h[(_+1)%h.length])));for(let p=0;p<46;p++){const _=p*2.39996,g=1.12+p%13/13*1.19,m=64.17+Math.cos(_)*g,x=13.11+Math.sin(_)*g,M=t(m,x)+.17;o.shell(mr(m,x,.09+p%4*.035,6),M-.01,M+.03+p%3*.025,r[p%r.length])}o.finish()}function Ex(i,t){yx(i,t),wx(i,t),bx(i,t)}function Tx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Ae;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in o){const f=Ru(o[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in r){const f=r[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let _=0;_<r[u].length;++_)d.push(r[u][_][h]);const p=Ru(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Ru(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new $n(r,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<e;p++){const _=u.getComponent(h,p);a.setComponent(h+f,p,_)}}else r.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Sc=Math.PI/4,Ax="#e1d9bf",Rx="#26313a",Cx=[[37.2996896,44.8872772],[37.2995282,44.8874039],[37.2994588,44.8874602],[37.2994093,44.887514],[37.2990185,44.8878942],[37.2988335,44.8880063],[37.2982407,44.8885479]],Px=[[37.2992911,44.8877628],[37.2988951,44.8881412]];function eo(i,t){const e=(i-.5)*Sc;return[Math.sin(e)*t,Math.cos(e)*t]}function Cu(i){const t=i*Sc;return-.85*Math.sin(t)+.5*Math.cos(t)>0}function Lx(i,{rings:t},e){const n=t[0],s=n.reduce((v,y)=>v+y[0],0)/n.length,o=n.reduce((v,y)=>v+y[1],0)/n.length,r=e(s,o),a=Math.min(...n.map(v=>e(...v)))-r-.3,c=n.reduce((v,[y,b])=>v+Math.hypot(y-s,b-o),0)/n.length*.74,u=new jt({color:Ax,flatShading:!0}),f=new jt({color:Rx,flatShading:!0}),h=new jt({color:"#b6b8ae"}),d=new jt({color:"#a9c2c8",transparent:!0,opacity:.56,depthWrite:!1}),p=new ge,_=new Map([[u,[]],[f,[]]]);p.name="Анапский маяк",p.position.set(s,r,o),i.add(p);function g(v,y,b,w,S,E=8){const T=new oe(new yn(w,b,y-v,E),S);return T.position.y=(y+v)/2,T.rotation.y=-Math.PI/E,T.castShadow=S!==d,p.add(T),T}function m(v,y,b,w,S,E,T,P){const L=v*Sc,C=Math.sin(L),R=Math.cos(L),I=c*Math.cos(Sc/2)+T,N=new Ne(S,b,E);N.rotateY(L),N.translate(C*I+R*w,y,R*I-C*w),_.get(P).push(N)}g(a,3.15,c*1.13,c*1.13,u),g(3.15,3.55,c*1.16,c*1.16,u);const x=[[3.55,6.5,!0],[6.5,9.2,!1],[9.2,12,!0],[12,14.6,!1],[14.6,17.05,!0]];for(const[v,y,b]of x){const w=new Ae,S=[[],[]];for(let T=0;T<8;T++){const[P,L]=eo(T,c),[C,R]=eo(T+1,c);if(S[Number(b&&Cu(T))].push(P,v,L,C,v,R,C,y,R,P,v,L,C,y,R,P,y,L),v<14.6){const I=b&&Cu(T)?f:u;for(const N of[-c*.2,c*.2])m(T,(v+y)/2,y-v,N,c*.095,.16,.03,I)}}w.setAttribute("position",new ee(S.flat(),3)),w.addGroup(0,S[0].length/3,0),S[1].length&&w.addGroup(S[0].length/3,S[1].length/3,1),w.computeVertexNormals();const E=new oe(w,[u,f]);E.castShadow=!0,p.add(E)}g(12.2,12.39,c*1.05,c*1.05,u),g(13.4,13.54,c*1.04,c*1.04,u),g(17.05,17.65,c*1.07,c*1.07,u),g(17.65,17.9,c*1.12,c*1.12,u);for(let v=0;v<8;v++)for(const y of[-c*.22,0,c*.22])m(v,17.34,.24,y,.26,.07,c*.067,f);for(const[v,y]of _){p.add(new oe(Tx(y),v));for(const b of y)b.dispose()}g(17.9,18.11,c*.71,c*.71,u,12),g(18.11,20.05,c*.58,c*.58,d,12),g(20.05,20.83,c*.68,.24,u,12),g(20.83,21,.24,.12,u,12),g(18.48,19.43,.31,.31,new jt({color:"#a0433d"}),12);const M=[];for(let v=0;v<12;v++){const y=(v-.5)*Math.PI/6,b=Math.sin(y)*c*.58,w=Math.cos(y)*c*.58;M.push([[b,18.11,w],[b,20.05,w],.052])}for(let v=0;v<8;v++){const[y,b]=eo(v,c*1.01),[w,S]=eo(v+1,c*1.01);M.push([[y,17.9,b],[y,18.8,b],.042]);for(const C of[18.35,18.8])M.push([[y,C,b],[w,C,S],.037]);const[E,T]=eo(v,c*.88),[P,L]=eo(v+1,c*.88);M.push([[E,19.55,T],[P,19.55,L],.033]),M.push([[E,20.46,T],[P,20.46,L],.033]),M.push([[E,19.55,T],[E,20.46,T],.033])}Dd(p,M,h,"Ограждения фонаря")}function Dd(i,t,e,n){const s=new Ne(1,1,1),o=new dn(s,e,t.length);o.name=n;const r=new Se,a=new O,l=new O,c=new O,u=new O(1,0,0);for(const[f,[h,d,p]]of t.entries())a.set(...h),l.set(...d),c.subVectors(l,a),r.position.copy(a).lerp(l,.5),r.scale.set(c.length(),p,p),r.quaternion.setFromUnitVectors(u,c.normalize()),r.updateMatrix(),o.setMatrixAt(f,r.matrix);i.add(o)}function Pu(i,t,e,{height:n,color:s,spacing:o,width:r,name:a}){const l=[];for(let c=1;c<t.length;c++){const[u,f]=t[c-1],[h,d]=t[c],p=Math.ceil(Math.hypot(h-u,d-f)/2.4),_=(g,m)=>{const x=u+(h-u)*g,M=f+(d-f)*g;return[x,e(x,M)+m,M]};for(let g=0;g<p;g++){const m=g/p,x=(g+1)/p;l.push([_(m,.05),_(m,n+.05),r*2.8]);for(const v of[.14,n])l.push([_(m,v),_(x,v),r*1.7]);const M=Math.ceil(Math.hypot(h-u,d-f)/(p*o));for(let v=1;v<M;v++){const y=(g+v/M)/p;l.push([_(y,.14),_(y,n),r])}}c===t.length-1&&l.push([_(1,.05),_(1,n+.05),r*2.8])}Dd(i,l,new jt({color:s}),a)}function Dx(i,{origin:[t,e],scale:n},s){const o=r=>r.map(([a,l])=>[(a-t)*n[0],(e-l)*n[1]]);Pu(i,o(Cx),s,{height:1.06,color:"#9a9c95",spacing:.16,width:.038,name:"Ограда Верхней Набережной"}),Pu(i,o(Px),s,{height:1.76,color:"#363f40",spacing:.16,width:.027,name:"Ограда маяка"})}const Ix="125862202",Ux="977564342",Vl=12,xa=3;function va(i,t,e,n){const s=[];for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=e*(n(r)-t),c=e*(n(a)-t);if(l>=0&&s.push(r),l<0!=c<0){const u=l/(l-c);s.push([ue.lerp(r[0],a[0],u),ue.lerp(r[1],a[1],u)])}}return s}function Ln(i,t,e,n,s){const o=new Yc(t.map(([a,l])=>new Mt(a,-l))),r=new oe(new Fr(o,{depth:n,bevelEnabled:!1}),s);r.rotation.x=-Math.PI/2,r.position.y=e,r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function Nx(i,t,e){const n=[],s=Math.sign(i.reduce((o,[r,a],l)=>{const[c,u]=i[(l+1)%i.length];return o+r*u-c*a},0));for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=a[0]-r[0],c=a[1]-r[1],u=Math.hypot(l,c);if(u<4||Math.abs(e(r)-e(a))<u*.8)continue;const f=Math.floor(u/3.3);for(let h=0;h<f;h++){const d=(h+.5)/f;n.push([r[0]+l*d+s*c/u*.045,t,r[1]+c*d-s*l/u*.045,-Math.atan2(c,l)])}}return n}function Ts(i,t,e,n,s){const o=new dn(new Ne(n,s,.12),e,t.length),r=new Se;t.forEach(([a,l,c,u],f)=>{r.position.set(a,l,c),r.rotation.y=u,r.updateMatrix(),o.setMatrixAt(f,r.matrix)}),o.receiveShadow=!0,i.add(o)}function Fx(i,t){const e=new ge;e.name="Малая бухта, комплекс на берегу";const n=new jt({color:"#c5b08c"}),s=new jt({color:"#eeeae0"}),o=new jt({color:"#b7b5a9"}),r=new jt({color:"#617964"}),a=new jt({color:"#5f8596"}),l=new jt({color:"#5799b9"}),c=4.4;Ln(e,t,1.8,c-1.8,n),Ln(e,t,c,3.05,n),Ln(e,t,c+3.05,3.15,s),Ln(e,t,c+6.2,3.4,s),Ln(e,t,c+9.6,.35,o);const u=t.map((y,b)=>{const w=t[(b+1)%t.length];return{start:y,end:w,length:Math.hypot(w[0]-y[0],w[1]-y[1])}}).reduce((y,b)=>b.length>y.length?b:y),{start:f,end:h,length:d}=u,p=h[0]-f[0],_=h[1]-f[1],g=-Math.atan2(_,p),m=Math.sign(_),x=-Math.abs(_)/d*.04,M=p*m/d*.04;function v(y,b){return Array.from({length:y},(w,S)=>{const E=(S+.5)/y;return[f[0]+p*E+x,b,f[1]+_*E+M,g]})}Ts(e,v(18,c+1.5),r,4.35,2.35),Ts(e,v(38,c+4.75),a,1.75,1.35),Ts(e,v(30,c+7.9),l,2.55,2.45),i.add(e)}function Ox(i,t,e){if(t.id===Ux)return Fx(i,t.rings[0]),!0;if(t.id!==Ix)return!1;const n=t.rings[0],s=ue.degToRad(112.9),o=Math.sin(s),r=-Math.cos(s),a=([w,S])=>w*o+S*r,l=n.map(a),c=Math.min(...l),u=w=>a(w)-c,f=Math.max(...l)-c,h=f*.54,d=n.map(w=>e(...w)),p=Math.max(...d),_=Math.min(...d)-.3,g=new ge;g.name="Малая бухта, корпус «Парусник»";const m=new jt({color:"#f5f3e8"}),x=new jt({color:"#deded5"}),M=new jt({color:"#526f7d"}),v=new jt({color:"#9c9e99"});Ln(g,n,_,p-_,x);const y=[];for(let w=0;w<Vl;w++){const S=w*2.45,E=w<9?f-w*3.3:h,T=va(va(n,S,1,u),E,-1,u),P=p+w*xa,L=T.reduce(([R,I],N)=>[R+N[0]/T.length,I+N[1]/T.length],[0,0]),C=T.map(([R,I])=>[ue.lerp(R,L[0],.04),ue.lerp(I,L[1],.04)]);Ln(g,T,P,.35,m),Ln(g,C,P+.35,xa-.35,x),y.push(...Nx(C,P+1.8,u)),(w===8||w===Vl-1)&&Ln(g,C,P+xa,.18,v)}const b=va(va(n,h-3.8,1,u),h+.15,-1,u);return Ln(g,b,p,Vl*xa+1.9,m),Ts(g,y,M,1.65,1.15),i.add(g),!0}function Bx(i,t,e){if(t.id!=="142489068")return!1;const n=t.rings[0],s=n.map((Y,B)=>{const Z=n[(B+1)%n.length];return{start:Y,end:Z,length:Math.hypot(Z[0]-Y[0],Z[1]-Y[1])}}),[o]=s.sort((Y,B)=>B.length-Y.length).slice(0,2).sort((Y,B)=>Y.start[1]+Y.end[1]-(B.start[1]+B.end[1])),[r,a]=[o.start,o.end].sort((Y,B)=>Y[0]-B[0]),l=n.filter(Y=>Y!==r&&Y!==a).sort((Y,B)=>Y[0]-B[0])[0],[c,u]=r,f=Math.hypot(a[0]-c,a[1]-u),h=Math.hypot(l[0]-c,l[1]-u),d=(a[0]-c)/f,p=(a[1]-u)/f,_=(l[0]-c)/h,g=(l[1]-u)/h,m=(Y,B)=>[c+d*Y+_*B,u+p*Y+g*B],x=(Y,B,Z,rt)=>[m(Y,Z),m(B,Z),m(B,rt),m(Y,rt)],M=new ge;M.name="Анапский морской вокзал";const v=new jt({color:"#e5e4dc"}),y=new jt({color:"#b7a18c"}),b=new jt({color:"#a4aaa4"}),w=new jt({color:"#496877"}),S=new jt({color:"#8f4b3a"}),E=n.map(Y=>e(...Y)),T=Math.max(...E),P=Math.min(...E)-.25;Ln(M,n,P,T+2.9-P,y),Ln(M,n,T+2.9,3.6,v),Ln(M,n,T+6.5,.35,b);const L=7.8,C=f-.85,R=C-L,I=h*.34,N=I+L,F=x(R,C,I,N),G=T+15.2;Ln(M,F,T+6.8,G-T-6.8,v),Ln(M,F,G,.22,b);const H=-Math.atan2(p,d),K=-Math.atan2(g,_),j=(Y,B,Z,rt)=>Array.from({length:Y},(vt,z)=>{const[st,dt]=rt((z+.5)/Y);return[st,B,dt,Z]});Ts(M,j(11,T+4.75,H,Y=>m(1.3+Y*(f-2.6),-.04)),w,2.22,2.55),Ts(M,j(8,T+1.48,H,Y=>m(1.5+Y*(f-3),-.04)),w,1.65,1.34);const St=[];for(const Y of[8.35,10.95,13.55]){const B=T+Y;St.push(...j(3,B,H,Z=>m(R+Z*L,I-.04))),St.push(...j(3,B,K,Z=>m(C+.04,I+Z*L)))}Ts(M,St,w,1.37,1.43);const[mt,zt]=m(C-2.8,I+2.4),pt=new oe(new yn(.055,.105,3.2,6),S);return pt.position.set(mt,G+1.82,zt),M.add(pt),i.add(M),!0}const zx=[[65,151],[133,120],[143,98],[312,94],[327,41],[410,46],[451,73],[504,67],[540,44],[733,53],[724,326],[1170,410],[1591,455],[1591,738],[40,687]],kx=[{points:[[94,145],[93,228],[89,353]],width:.65,height:.38},{points:[[142,122],[197,119],[277,117],[320,120],[331,188]],width:.65,height:.32},{points:[[197,119],[201,187],[137,192]],width:.73,height:.31},{points:[[273,119],[279,182],[206,187]],width:.7,height:.33},{points:[[287,122],[291,181],[328,178]],width:.66,height:.3},{points:[[334,91],[338,130],[345,187],[405,175],[403,130],[338,136]],width:.68,height:.35},{points:[[447,84],[486,87],[492,170],[445,173]],width:.69,height:.31},{points:[[500,85],[530,86],[534,161],[500,166]],width:.63,height:.27},{points:[[540,62],[535,107],[537,170]],width:.68,height:.38},{points:[[137,228],[204,222],[275,225],[351,227],[360,279],[300,282],[228,289],[140,279],[137,228]],width:.68,height:.27},{points:[[218,229],[214,277],[230,291],[224,354],[137,344]],width:.69,height:.31},{points:[[181,231],[178,277],[187,291],[181,315],[139,313]],width:.56,height:.25},{points:[[191,314],[187,348]],width:.57,height:.24},{points:[[307,229],[310,257],[278,261]],width:.57,height:.23},{points:[[319,231],[319,276],[352,273]],width:.64,height:.29},{points:[[360,285],[367,348],[366,387]],width:.65,height:.4},{points:[[363,278],[426,272],[427,218]],width:.73,height:.32},{points:[[413,209],[500,205],[570,200],[646,197]],width:.68,height:.31},{points:[[429,270],[504,270],[502,206]],width:.72,height:.29},{points:[[506,271],[510,270]],width:.72,height:.35},{points:[[528,268],[567,262],[627,258]],width:.72,height:.35},{points:[[645,256],[647,203]],width:.72,height:.35},{points:[[560,207],[567,261]],width:.61,height:.28},{points:[[678,178],[681,346],[634,347]],width:.62,height:.41},{points:[[468,349],[467,319],[474,305],[489,302],[602,300],[618,307],[623,330]],width:.66,height:.3},{points:[[382,355],[417,353],[414,398],[388,397]],width:.66,height:.37},{points:[[416,401],[526,426],[531,407],[539,369],[569,375]],width:.75,height:.37},{points:[[569,376],[568,425],[539,422]],width:.68,height:.36},{points:[[578,380],[578,423],[616,430],[620,380]],width:.68,height:.37},{points:[[630,379],[629,433],[682,441],[679,378]],width:.72,height:.36},{points:[[98,445],[190,455],[177,553],[91,539]],width:.81,height:.38},{points:[[209,457],[316,474],[305,552],[202,537],[209,457]],width:.85,height:.42},{points:[[245,474],[237,509],[226,539]],width:.75,height:.4},{points:[[386,490],[429,501],[515,513],[566,520],[622,532]],width:.73,height:.29},{points:[[430,503],[430,551],[389,544]],width:.74,height:.36},{points:[[516,515],[515,559],[431,549]],width:.78,height:.33},{points:[[564,524],[557,587],[515,579],[517,557]],width:.76,height:.38},{points:[[622,531],[615,590],[566,583]],width:.76,height:.39},{points:[[653,536],[708,549],[699,609]],width:.74,height:.34},{points:[[769,385],[806,387],[823,390],[866,388],[875,384]],width:.52,height:.48},{points:[[768,384],[768,425],[766,447]],width:.5,height:.52},{points:[[747,444],[769,449],[813,457],[870,467],[913,473],[953,478],[1006,483]],width:.62,height:.6},{points:[[818,395],[817,426],[814,456]],width:.52,height:.51},{points:[[874,379],[874,415]],width:.47,height:.42},{points:[[870,451],[870,466]],width:.46,height:.46},{points:[[918,390],[917,419]],width:.5,height:.49},{points:[[914,437],[912,473]],width:.55,height:.54},{points:[[959,393],[961,413],[957,428]],width:.49,height:.46},{points:[[955,442],[952,478]],width:.55,height:.54},{points:[[961,416],[994,421],[1016,426]],width:.39,height:.36},{points:[[1016,427],[1012,444],[1007,482]],width:.54,height:.56},{points:[[1070,501],[1079,447],[1085,435],[1104,438]],width:.61,height:.61},{points:[[1138,441],[1169,449]],width:.44,height:.41},{points:[[1170,435],[1169,471],[1168,505],[1111,502],[1071,500]],width:.65,height:.62},{points:[[1122,459],[1114,487],[1111,502]],width:.51,height:.48},{points:[[765,620],[770,577],[844,591],[840,619]],width:.53,height:.53},{points:[[900,645],[903,598],[948,608],[996,618],[1024,616]],width:.55,height:.49},{points:[[950,608],[945,653],[901,647]],width:.52,height:.54},{points:[[999,619],[990,664],[983,688]],width:.52,height:.55},{points:[[944,654],[939,690]],width:.49,height:.44},{points:[[1049,621],[1094,620],[1133,627]],width:.44,height:.38},{points:[[1132,628],[1127,665]],width:.44,height:.42},{points:[[1230,470],[1293,471],[1292,517],[1290,550],[1234,551],[1230,470]],width:.7,height:.87},{points:[[1233,519],[1292,518]],width:.66,height:.72},{points:[[1352,482],[1369,478],[1404,479],[1418,480],[1417,492],[1385,493],[1383,509]],width:.57,height:.48},{points:[[1338,691],[1339,668],[1397,669]],width:.59,height:.55},{points:[[1336,722],[1398,721],[1454,722],[1512,724],[1575,726],[1575,652],[1512,653],[1455,654],[1400,652],[1398,721]],width:.72,height:.69},{points:[[1455,654],[1454,722]],width:.67,height:.62},{points:[[1512,653],[1512,724]],width:.65,height:.6}],Gx=[{polygon:[[144,129],[193,124],[198,177],[142,181]],depth:.78},{polygon:[[205,126],[269,124],[274,169],[210,177]],depth:.74},{polygon:[[287,128],[317,127],[322,171],[290,176]],depth:.7},{polygon:[[346,136],[398,131],[402,169],[347,177]],depth:.83},{polygon:[[452,90],[483,89],[487,158],[450,166]],depth:.78},{polygon:[[502,97],[526,99],[527,153],[500,159]],depth:.64},{polygon:[[146,235],[214,231],[211,274],[143,269]],depth:.88},{polygon:[[279,234],[304,234],[308,253],[278,257]],depth:.57},{polygon:[[319,237],[345,234],[348,269],[320,269]],depth:.75},{polygon:[[145,287],[183,288],[180,311],[141,310]],depth:.62},{polygon:[[142,319],[181,319],[181,342],[137,340]],depth:.58},{polygon:[[190,292],[227,298],[222,350],[189,345]],depth:.77},{polygon:[[505,209],[558,205],[566,260],[526,265],[528,298],[514,298],[512,267]],depth:1.05},{polygon:[[566,205],[641,199],[644,252],[642,252],[642,283],[630,283],[629,254],[571,260]],depth:1.15},{polygon:[[389,358],[414,354],[411,396],[388,393]],depth:.64},{polygon:[[541,370],[567,377],[565,423],[535,420]],depth:.8},{polygon:[[580,378],[617,379],[613,425],[579,422]],depth:.82},{polygon:[[633,378],[676,379],[680,435],[630,426]],depth:1},{polygon:[[98,450],[183,462],[173,541],[92,533]],depth:.92},{polygon:[[213,463],[244,468],[227,535],[207,535]],depth:.9},{polygon:[[248,473],[311,478],[304,549],[236,539]],depth:.91},{polygon:[[388,494],[427,502],[427,541],[389,537]],depth:.74},{polygon:[[434,506],[514,516],[510,552],[433,545]],depth:.87},{polygon:[[521,518],[562,526],[556,576],[516,572]],depth:.94},{polygon:[[566,527],[619,535],[612,581],[561,575]],depth:.99},{polygon:[[656,541],[704,553],[693,603],[646,592]],depth:.83},{polygon:[[773,582],[839,595],[836,620],[771,612]],depth:.84},{polygon:[[906,602],[946,611],[943,645],[903,637]],depth:.64},{polygon:[[952,612],[994,621],[986,665],[951,654]],depth:.58},{polygon:[[1235,475],[1288,476],[1288,515],[1237,516]],depth:.72},{polygon:[[1238,524],[1287,523],[1286,546],[1239,547]],depth:.64},{polygon:[[1404,657],[1450,658],[1449,718],[1403,717]],depth:.54},{polygon:[[1459,658],[1507,657],[1507,719],[1459,717]],depth:.59},{polygon:[[1517,658],[1570,657],[1570,721],[1517,719]],depth:.55}],Hx=[{point:[256,273],radius:.7,depth:.51},{point:[412,299],radius:.53,depth:.46},{point:[496,316],radius:.58,depth:.48},{point:[456,365],radius:.73,depth:.58},{point:[516,422],radius:.67,depth:.46},{point:[644,329],radius:.7,depth:.55},{point:[592,393],radius:.56,depth:.37},{point:[553,441],radius:.63,depth:.44},{point:[377,498],radius:.56,depth:.44},{point:[755,405],radius:.74,depth:.75},{point:[962,706],radius:.7,depth:.75},{point:[1260,494],radius:.5,depth:.65}],Vx=[{name:"Широкая улица",polygon:[[96,365],[162,362],[217,365],[309,385],[362,398],[414,412],[418,485],[386,486],[308,470],[209,456],[94,443]]},{name:"Широкая улица",polygon:[[1194,609],[1258,608],[1344,612],[1438,614],[1516,615],[1574,612],[1573,647],[1510,651],[1437,652],[1350,651],[1258,648],[1200,647]]},{name:"Северная улица",polygon:[[119,193],[207,191],[287,188],[344,184],[433,176],[527,171],[671,174],[671,194],[524,201],[428,211],[347,219],[273,224],[197,227],[118,228]]},{name:"Поперечная улица",polygon:[[99,159],[125,164],[123,215],[124,280],[121,335],[128,366],[111,388],[93,367],[97,311],[96,250]]}],Wx=[{from:[521,298],to:[519,264],width:1.15,steps:7},{from:[636,283],to:[635,252],width:1,steps:7}],Bi={outline:zx,walls:kx,cellars:Gx,wells:Hx,streets:Vx,stairs:Wx},Lu="652417590";function jn([i,t]){return[.0863102257*i-214318e-9*t-361.5408919,214318e-9*i+.0863102257*t+21.5871871]}const bs=Bi.outline.map(jn);function so([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function Id(i,t,e){const n=i(-310,65)-1.41-.006*(t+355)+.008*(e-60);return Math.min(n,i(t,e)-.43)}const ss=["#b7a58b","#c1b199","#ad9e88","#a9977e","#c8baa0","#a4947b"],Du=["#c9b998","#b9aa8e","#c2b497","#b2a389","#d0bfa4"],Xx=new Ht("#a09472"),qx=new Ht("#97976b"),Yx=new Ht("#94846b"),$x=new Ht("#62584a"),Zx=new Ht("#a99a7e");function ri(i){const t=Math.sin(i*127.1+3.83)*43758.5453;return t-Math.floor(t)}function c0(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=(i[1]-t[1])*e/(2*n),o=(t[0]-i[0])*e/(2*n);return[[i[0]+s,i[1]+o],[t[0]+s,t[1]+o],[t[0]-s,t[1]-o],[i[0]-s,i[1]-o]]}const zn=([i,t],e)=>[i,e(i,t),t];function Ud(i,t,e,n,s,o){i.face(o,zn(t,n),zn(e,n),zn(e,s),zn(t,s))}function Ko(i,t,e,n,s,o=.65){for(let r=0;r<t.length;r++){const a=t[r],l=t[(r+1)%t.length],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/o);for(let u=0;u<c;u++){const f=gt(a,l,u/c),h=gt(a,l,(u+1)/c);Ud(i,f,h,e,n,s(u+r*97))}}}function Kx(i,t,e,n,s,o,r,a){const l=Math.hypot(e[0]-t[0],e[1]-t[1]);if(l<.12)return;const c=(d,p)=>o(d,p)-r-.03,u=(d,p)=>o(d,p)+s,f=c0(t,e,n*.93);Ko(i,f,c,u,()=>"#897862",1.2),i.face("#8c7b66",...f.map(d=>zn(d,(p,_)=>u(p,_)-.028)));const h=Math.max(1,Math.round((s+r)/.31));for(let d=0;d<h;d++){const p=.66+ri(a+d)*.24;for(let _=-(d%2)*p*.52,g=0;_<l;_+=p,g++){const m=(Math.max(0,_)+.018)/l,x=(Math.min(_+p,l)-.018)/l;if(x<=m)continue;const M=a*101+d*31+g*7,v=c0(gt(t,e,m),gt(t,e,x),n*(.965+ri(M)*.09)),y=v.map(T=>gt(T,gt(v[0],v[2],.5),.06)),b=(s+r)/h,w=(T,P)=>o(T,P)-r+b*d+.012,S=(T,P)=>o(T,P)-r+b*(d+1)-.014+ri(M+1)*.09,E=ss[Math.floor(ri(M+2)*ss.length)];for(let T=0;T<4;T++){const P=(T+1)%4;i.face(E,zn(v[T],w),zn(v[P],w),zn(y[P],S),zn(y[T],S))}i.face(E,...y.map(T=>zn(T,S)))}}}function Jx(i,t,e,n,s){const o=t.map(([m])=>m),r=t.map(([,m])=>m),a=.61,l=.065,c=(m,x)=>[m*Math.cos(l)-x*Math.sin(l),m*Math.sin(l)+x*Math.cos(l)],[u,f]=t[0],h=(m,x)=>c(m,x).map((M,v)=>M+(v===0?u:f)),d=Math.floor((Math.min(...o)-u-3)/a),p=Math.ceil((Math.max(...o)-u+3)/a),_=Math.floor((Math.min(...r)-f-10)/a),g=Math.ceil((Math.max(...r)-f+10)/a);for(let m=_;m<g;m++)for(let x=d;x<p;x++){const M=n*4241+m*397+x;if(ri(M+9)>s)continue;const v=(x+m%2*.5)*a,y=m*a,b=[h(v+.03+ri(M)*.07,y+.033),h(v+.57,y+.027+ri(M+2)*.07),h(v+.572-ri(M+3)*.08,y+.574),h(v+.03,y+.572-ri(M+4)*.07)];if(!b.every(S=>so(S,t)))continue;const w=(S,E)=>e(S,E)+.042+ri(M+6)*.028;i.face(Du[Math.floor(ri(M+7)*Du.length)],...b.map(S=>zn(S,w)))}}function Qx(i,t,e){const n=me(i,"Раскоп Горгиппии · кладка и древние улицы",{surface:"stone"}),s=(c,u)=>Id(t,c,u),o=Bi.cellars.map(({polygon:c,depth:u})=>({ring:c.map(jn),depth:u,holes:[]})),r=Bi.wells.map(({point:c,radius:u,depth:f})=>{const[h,d]=jn(c),p=Array.from({length:12},(x,M)=>{const v=M*Math.PI/6;return[h+Math.cos(v)*u,d+Math.sin(v)*u]}),_=o.find(x=>p.every(M=>so(M,x.ring))),g=(x,M)=>s(x,M)-(_?.depth??0),m=_||p.every(x=>so(x,bs))&&!o.some(x=>p.some(M=>so(M,x.ring))||x.ring.some(M=>so(M,p)));return _&&_.holes.push(p),{ring:p,rim:g,depth:f,cut:m,cellar:_,center:[h,d]}}),a=[...o.map(c=>c.ring),...r.filter(c=>c.cut&&!c.cellar).map(c=>c.ring)],l=new Ht;e([bs,...a],s,(c,u,f)=>l.copy(Xx).lerp(qx,ue.clamp(.51+.32*Math.sin(c*.15+f*.19)+.19*Math.sin(c*.43-f*.24),0,1))),Ko(n,bs,s,(c,u)=>t(c,u)+.012,()=>"#a18f75");for(const{ring:c,depth:u,holes:f}of o){const h=(d,p)=>s(d,p)-u;e([c,...f],h,Yx),Ko(n,c,h,s,()=>"#89785f")}for(const{ring:c,rim:u,depth:f,cut:h,center:d}of r){const p=(g,m)=>u(g,m)-(h?f:-.028);h?e([c],p,$x):n.face("#5f5342",...c.map(g=>zn(g,p))),Ko(n,c,p,(g,m)=>u(g,m)+.18,()=>"#80715e",2);const _=c.map(g=>gt(d,g,1.35));for(let g=0;g<c.length;g++){const m=(g+1)%c.length,x=(M,v)=>u(M,v)+.16+g%3*.021;Ud(n,_[g],_[m],u,x,ss[g%ss.length]),n.face(ss[g%ss.length],...[c[g],_[g],_[m],c[m]].map(M=>zn(M,x)))}}for(const[c,{polygon:u,density:f}]of Bi.streets.entries()){const h=u.map(jn);e([h],(d,p)=>s(d,p)+.025,Zx),Jx(n,h,s,c,f??.88)}for(const[c,{points:u,width:f,height:h}]of Bi.walls.entries()){const d=u.map(jn);for(let p=1;p<d.length;p++){const _=d[p-1],g=d[p],m=gt(_,g,.5),x=o.reduce((M,{ring:v,depth:y})=>Math.max(M,v.some((b,w)=>{const S=v[(w+1)%v.length],E=S[0]-b[0],T=S[1]-b[1],P=ue.clamp(((m[0]-b[0])*E+(m[1]-b[1])*T)/(E*E+T*T),0,1);return Math.hypot(m[0]-b[0]-P*E,m[1]-b[1]-P*T)<f*.63})?y:0),0);Kx(n,_,g,f,h,s,x,c*41+p)}}for(const{from:c,to:u,width:f,steps:h}of Bi.stairs){const d=jn(c),p=jn(u),_=o.find(g=>so(p,g.ring))?.depth??.85;for(let g=0;g<h;g++){const m=c0(gt(d,p,g/h),gt(d,p,(g+1)/h),f),x=(v,y)=>s(v,y)-_,M=(v,y)=>x(v,y)+_*(1-g/h);n.face(ss[g%ss.length],...m.map(v=>zn(v,M))),Ko(n,m,x,M,()=>"#9a8a71",2)}}n.finish()}const os=i=>i.map(jn),jx=[[126,399],[220,407],[350,432],[460,455],[536,471],[610,478],[712,485],[779,478],[865,499],[955,516],[1060,538],[1168,556]],Iu=[[748,295],[742,323],[729,352],[716,405],[712,462],[710,481]],Uu=[0,0,.16,.67,1,1],tv={position:jn([707,480]),look:jn([405,447]),pitch:-.19},Gi=[[-384.79,10.65],[-282.12,15.99],[-217.83,18.81],[-218.47,61.07],[-219.18,90.59],[-393.18,81.88],[-384.79,10.65]],Hi=Math.atan2(2.82,64.29);function Nd(i){const[t,e]=Gi[1];return i(t+1.44*Math.sin(Hi),e-1.44*Math.cos(Hi))}function yc([i,t]){return i===-282.12&&t===15.99?2.62:i===-218.47&&t===61.07?1.45:0}const ev=[{name:"Дорожка у лапидария",points:[[-332,24],[-322,25],[-312,26],[-303,27.3],[-295,28.1]],widths:[2.45,2.7,2.7,2.6,2.6],surface:"paving",railSide:1},{name:"Подход от входной арки",points:[[-282.12,14],[-282.12,18],[-283.15,21.1],[-288.4,25.8],[-295,28.1]],widths:[2.5,2.5,2.7,2.6,2.6],surface:"paving"},{name:"Дорожка от площадки музея",points:[[-295,28.1],[-294.5,33.9],[-295.2,40.9],jn(Iu[0])],widths:[2.6,2.8,2.9,2.6],surface:"paving"},{name:"Дорожка вдоль южного борта",points:[...os([[65,710],[475,724],[1030,743],[1560,759]]),[-221.6,87.8],[-221.1,63.1]],widths:[1.5,1.65,1.75,1.7,1.65,1.6],surface:"paving",railSide:-1},{name:"Подход к восточной калитке",points:[[-221.1,63.1],[-220.9,61.07],[-216.4,61.07]],widths:[1.6,1.6,1.55],surface:"paving"},{name:"Спуск к раскопу",points:os(Iu),widths:[2.6,2.5,1.35,1.25,1.25,1.7],surface:"ramp",rails:[2,3]},{name:"Проход между подвалами",points:os(jx),widths:[3.8,4,4.1,3.9,3.8,3.4,3.5,4.1,4.3,4.2,4.2,3.5],surface:"earth"},{name:"Выход с западных лестниц",points:os([[129,368],[128,386],[126,399]]),widths:[1.5,1.8,2],surface:"earth"},...[368,401].flatMap(i=>[{name:"Западная площадка",points:os([[43,i],[90,i]]),widths:[1.5,1.43],surface:"landing"},{name:"Западная лестница",points:os([[90,i],[129,i]]),widths:[1.43,1.43],surface:"steps"}])],{clamp:nv,lerp:Ma}=ue,iv=new Ht("#c7bda5"),Nu=new Ht("#c1b9a6"),sv=new Ht("#a59b76"),Sa="#aa987f",Wl="#52534c",Vo=9;function Lr(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=Math.hypot(e,n);return{a:i,b:t,dx:e,dz:n,length:s,nx:-n/s,nz:e/s}}function Fu(i,t){return i.points.map(([e,n],s)=>{const o=i.edges[Math.max(0,s-1)],r=i.edges[Math.min(i.edges.length-1,s)],a=Math.hypot(o.nx+r.nx,o.nz+r.nz),l=(o.nx+r.nx)/a,c=(o.nz+r.nz)/a,u=t*i.widths[s]/(2*Math.max(.66,l*r.nx+c*r.nz));return[e+l*u,n+c*u]})}function Ou(i,t,e){return i.rails?.includes(t)||i.railSide===e}function Jo(i,t,{a:e,dx:n,dz:s,length:o}){const r=((i-e[0])*n+(t-e[1])*s)/(o*o),a=nv(r,0,1);return{raw:r,t:a,distance:Math.hypot(i-e[0]-n*a,t-e[1]-s*a)}}function ov(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}const rv=Gi.slice(1).map((i,t)=>{const e=Gi[t],{length:n}=Lr(e,i);return Lr(gt(e,i,yc(e)/n),gt(e,i,1-yc(i)/n))}),av=Bi.cellars.map(({polygon:i})=>os(i)),cv=Bi.walls.flatMap(({points:i,width:t})=>{const e=os(i);return e.slice(1).map((n,s)=>({...Lr(e[s],n),width:t}))}),lv=Bi.wells.map(({point:i,radius:t})=>({point:jn(i),radius:t}));function hv(i,t){return lv.some(({point:[e,n],radius:s})=>Math.hypot(i-e,t-n)<s*1.35+.18)||cv.some(e=>Jo(i,t,e).distance<e.width/2+.18)||av.some(e=>ov(i,t,e))}function uv(i,t,e){const[n,s]=Gi[1],o=(t-n)*Math.cos(Hi)+(e-s)*Math.sin(Hi),r=(e-s)*Math.cos(Hi)-(t-n)*Math.sin(Hi);if(Math.abs(o)>2.22||r<-1.44||r>.46)return;const a=r<-1.02?.135:r<-.6?.27:.405;return Nd(i)+a}function fv(i){const t=(f,h)=>Id(i,f,h),e=ev.map(f=>({...f,edges:f.points.slice(1).map((h,d)=>Lr(f.points[d],h))})).map(f=>({...f,left:Fu(f,-1),right:Fu(f,1)})),n=e.filter(f=>f.surface==="earth"),s=e.filter(f=>f.surface==="paving"),o=e.filter(f=>["steps","landing","ramp"].includes(f.surface)),r=e.flatMap(f=>[[-1,f.left],[1,f.right]].flatMap(([h,d])=>d.slice(1).flatMap((p,_)=>Ou(f,_,h)?[Lr(d[_],p)]:[])));function a(f,h,d,p,_){if(f==="earth")return t(p,_)+.055;if(f==="paving"||f==="landing")return i(p,_)+.054;const g=t(p,_)+.061,m=i(p,_)+.054;return f==="steps"?Ma(m,g,Math.min(1,Math.floor(d*Vo)/(Vo-1))):Ma(m,g,Ma(Uu[h],Uu[h+1],d))}function l(f,h,d,p=0){let _;return f.edges.forEach((g,m)=>{const{raw:x,t:M,distance:v}=Jo(h,d,g);(f.surface==="steps"||f.surface==="landing")&&(x<-1e-5||x>1.00001)||v>Ma(f.widths[m],f.widths[m+1],M)/2-p||v>=(_?.distance??1/0)||(_={distance:v,height:a(f.surface,m,M,h,d)})}),_?.height}function c(f,h,d){if(f<-397||f>-211||h<9||h>92)return;if(rv.some(g=>Jo(f,h,g).distance<.24)||r.some(g=>Jo(f,h,g).distance<.15))return null;for(const g of o){const m=l(g,f,h,.12);if(m!==void 0)return m}if(d)return n.some(m=>l(m,f,h,.16)!==void 0)&&!hv(f,h)?t(f,h)+.055:null;const p=uv(i,f,h);return p!==void 0?p:s.some(g=>l(g,f,h)!==void 0)?i(f,h)+.054:void 0}function u(f,h){const d=me(f,"Горгиппия · дорожки и ограждения для посетителей");for(const p of e){const{left:_,right:g}=p;for(const[m,x]of p.edges.entries()){if(p.surface==="earth"&&m<3)continue;const M=[_[m],_[m+1],g[m+1],g[m]],v=(y,b)=>a(p.surface,m,Jo(y,b,x).t,y,b);if(p.surface==="steps"){const y=(b,w)=>gt(b[m],b[m+1],w);for(let b=0;b<Vo;b++){const w=b/Vo,S=(b+1)/Vo,E=y(_,w),T=y(g,w),P=y(_,S),L=y(g,S),C=(F,G)=>a("steps",m,(w+S)/2,F,G),R=(F,G)=>a("steps",m,Math.max(0,w-.001),F,G);h([[E,P,L,T]],C,Nu);const I=([F,G],H)=>[F,H(F,G),G];b&&d.face(Sa,I(E,R),I(T,R),I(T,C),I(E,C));const N=(F,G)=>t(F,G)-.02;d.face(Sa,I(E,C),I(P,C),I(P,N),I(E,N)),d.face(Sa,I(T,C),I(L,C),I(L,N),I(T,N))}}else p.surface==="earth"?h([M],(y,b)=>t(y,b)+.012,sv):h([M],v,p.surface==="ramp"?Nu:iv);for(const[y,b]of[[-1,_],[1,g]]){const w=b[m],S=b[m+1],E=Math.hypot(S[0]-w[0],S[1]-w[1]),T=p.surface==="ramp"||p.surface==="landing",P=Ou(p,m,y);if(!P&&!T)continue;const L=Math.max(1,Math.ceil(E/(T?.62:1.75))),C=(R,I)=>{const[N,F]=gt(w,S,R);return[N,v(N,F)+I,F]};for(let R=0;R<L;R++){const I=R/L,N=(R+1)/L;if(T){const F=([G,H,K])=>[G,Math.min(H-.07,t(G,K)-.025),K];d.face(Sa,C(I,0),C(N,0),F(C(N,0)),F(C(I,0)))}if(P){for(const F of[.38,.83])d.beam(C(I,F),C(N,F),.027,Wl);(!T||R%3===0)&&d.beam(C(I,0),C(I,.85),.047,Wl),R===L-1&&d.beam(C(N,0),C(N,.85),.047,Wl)}}}}}d.finish()}return{walkHeight:c,render:u}}const bc="#dfd7c1",vn="#f0eee6",dv="#526e7c",Ss="#343d3d";function Da([i,t],e){const n=e/2;return[[i-n,t-n],[i+n,t-n],[i+n,t+n],[i-n,t+n]]}function pv([i,t],[e,n]){const s=Math.hypot(e-i,n-t),o=(e-i)/s,r=(n-t)/s;return(a,l)=>[i+o*a+r*l,t+r*a-o*l]}function mv(i,t,e){const n=pv(t[0],t[1]),o=(e.lowerWaterfront??e)(...n(9,27))+.65,r=Math.min(...t.map(pt=>e(...pt)))-.2,a=Be(t),l="#7295bf",c="#415f88",u="#636b71",f="#b8bdba",h=me(i,"Пароходъ",{surfaces:{metal:[l,f,c],paving:[u],stone:[bc],glass:["#40484a","#4b5256"]}});h.shell(t,Math.min(r,o-.2),o+.25,bc);const d=t.map(pt=>gt(a,pt,.83));h.shell(d,o+.25,o+2.85,"#40484a",null),h.shell(t,o+2.85,o+3.08,vn,u);for(let pt=2;pt<=13;pt++){const Y=t[pt],B=t[pt+1];Gn(h,d[pt],d[pt+1],a,o+.52,o+2.76,2.15,"#d9dbd6");const Z=Math.max(1,Math.round(Math.hypot(Y[0]-B[0],Y[1]-B[1])/2.5));for(let rt=0;rt<Z;rt++){const vt=gt(a,gt(Y,B,rt/Z),.97);h.shell(Da(vt,.28),o+.25,o+2.85,vn,null)}}const p=[n(28.3,24),n(31,16.2)],_=e(...p[0])+.025,g=o+3.08,m=[n(27.2,15.4),n(31.95,15.4),n(31.95,17),n(27.2,17)];h.shell(m,g-.14,g,f,u);const x=[.89,.31],M=(pt,Y)=>{const B=gt([28.3,24],[31,16.2],pt);return n(B[0]+x[0]*Y,B[1]+x[1]*Y)},v=19;for(let pt=0;pt<v;pt++){const Y=pt/v,B=(pt+1)/v,Z=ue.lerp(_,g,B);h.shell([M(Y,-1),M(B,-1),M(B,1),M(Y,1)],Z-.09,Z,f,u)}for(const pt of[-1,1]){const Y=(B,Z)=>{const[rt,vt]=M(B,pt);return[rt,ue.lerp(_,g,B)+Z,vt]};h.beam(Y(0,.98),Y(1,.98),.07,vn),h.beam(Y(0,.51),Y(1,.51),.045,f);for(const B of[.03,.22,.42,.62,.82,1])h.beam(Y(B,.1),Y(B,.98),.055,vn)}const y=[[-16,7.5,15],[-10,4,17],[-2,2.1,17.7],[24,1.7,18.1],[30,1.7,13.2],[34,5.8,9]],b=y.map(([pt,,Y])=>n(pt,Y)),S=y.map(([pt,Y])=>n(pt,Y)).concat(b.slice().reverse());h.shell(S,o+3.08,o+6.5,vn,null);const E=Be(S);for(let pt=1;pt<b.length;pt++)Gn(h,b[pt-1],b[pt],E,o+3.4,o+6.24,1.85);const T=o+6.52,P=o+7.72;function L([pt,Y,B]){return[[...n(pt,Y),T],[...n(pt,Y+(B-Y)*.46),P],[...n(pt,B),T]].map(([Z,rt,vt])=>[Z,vt,rt])}let C=0;for(let pt=1;pt<y.length;pt++){const Y=L(y[pt-1]),B=L(y[pt]),Z=Math.max(1,Math.round((y[pt][0]-y[pt-1][0])/2));for(let rt=0;rt<Z;rt++){const vt=Y.map((dt,X)=>gt(dt,B[X],rt/Z)),z=Y.map((dt,X)=>gt(dt,B[X],(rt+1)/Z)),st=C++%2===0?l:vn;h.face(st,vt[0],z[0],z[1],vt[1]),h.face(st,vt[1],z[1],z[2],vt[2])}}h.face(vn,...L(y[0])),h.face(vn,...L(y.at(-1)));const R=n(13,14.8),I=t.slice(4,10).map(pt=>gt(R,pt,.95)),N=[R,...I];h.shell(N,o+3.08,o+3.42,vn),h.shell(N,o+3.42,o+4.92,"#4b5256",null),C=0,I.slice(1).forEach((pt,Y)=>{const B=I[Y];Gn(h,B,pt,R,o+3.57,o+4.83,1.65,f);const Z=gt(R,B,1.011),rt=gt(R,pt,1.011);h.wall(Z,rt,o+3.65,o+4.12,"#79444e");for(const z of[3.48,3.71,4.24])h.beam([Z[0],o+z,Z[1]],[rt[0],o+z,rt[1]],.052,vn);const vt=Math.max(2,Math.round(Math.hypot(pt[0]-B[0],pt[1]-B[1])/1.25));for(let z=0;z<vt;z++){const st=gt(B,pt,z/vt),dt=gt(B,pt,(z+1)/vt);h.face(C++%2===0?l:vn,[st[0],o+4.96,st[1]],[dt[0],o+4.96,dt[1]],[R[0],o+5.85,R[1]])}});const F=t.slice(9,17).map(pt=>gt(n(-9.5,24),pt,.94)),G=Be(F);h.shell(F,o+3.08,o+6.75,vn,u);const H=F.map(pt=>gt(G,pt,1.024));h.shell(H,o+4.38,o+5.1,c,null),h.shell(F.map(pt=>gt(G,pt,1.026)),o+6.75,o+6.94,c,u),F.slice(1).forEach((pt,Y)=>{Gn(h,F[Y],pt,G,o+3.45,o+4.38,1.4),Gn(h,F[Y],pt,G,o+5.16,o+6.1,1.55)});const[K,j]=H.slice(1,3),St=Math.hypot(j[0]-K[0],j[1]-K[1]),mt=[(K[1]-j[1])/St,(j[0]-K[0])/St],zt=gt(K,j,.48);Ie(i,{text:"ПАРОХОДЪ",position:[zt[0]+mt[0]*.055,o+4.75,zt[1]+mt[1]*.055],size:[6.6,.69],outward:mt,color:vn,background:c,lighting:"backlit",glowColor:"#d4e9ff"}),h.finish()}function gv(i,t,e,n){const s="PARK-HOTEL",o=[1.45,1.67,1.52,1.52,1.08,1.56,1.68,1.51,1.39,1.36],r=.42,a=e.slice(0,8).reverse(),l=a.slice(1).map((f,h)=>{const d=a[h],p=Math.hypot(f[0]-d[0],f[1]-d[1]);return{a:d,b:f,length:p,outward:[(d[1]-f[1])/p,(f[0]-d[0])/p]}}),c=o.reduce((f,h)=>f+h,0)+r*(s.length-1);let u=(l.reduce((f,h)=>f+h.length,0)-c)/2;for(const[f,h]of[...s].entries()){const d=o[f];let p=u+d/2;for(const{a:_,b:g,length:m,outward:x}of l){if(p>m){p-=m;continue}const[M,v]=gt(_,g,p/m),[y,b]=x;t.beam([M-y*.06,n+.43,v-b*.06],[M-y*.06,n+.89,v-b*.06],.075,Ss),Ie(i,{text:h,position:[M+y*.07,n+1.13,v+b*.07],size:[d,1.8],outward:x,color:"#e7cc87",weight:850,lighting:"neon",glowColor:"#ff5540",spill:f===5});break}u+=d+r}}function _v(i,t,e){const n=Math.min(...t.map(p=>e(...p)))+.06,s=n-.36,o=Be(t),r="#99655f",a="#d6c9b8",l="#6f6460",c=me(i,"Парк-отель Анапа",{surfaces:{flatRoof:[l],stone:[a]}}),u=n+2.85,f=2.91;c.shell(t,s,u,a,null);for(let p=0;p<t.length;p++){const _=t[p],g=t[(p+1)%t.length],[m,x]=gt(_,g,.5);x<o[1]-2&&e(m,x)<n+.8&&Gn(c,_,g,o,n+.46,u-.35,2.1,a)}for(let p=0;p<4;p++){const _=u+p*f;c.shell(t,_,_+f,bc,null);for(let g=0;g<t.length;g++){const m=t[g],x=t[(g+1)%t.length],[M,v]=gt(m,x,.5);if(Math.hypot(x[0]-m[0],x[1]-m[1])<1.2)continue;const y=M<o[0]-6||p===3?r:a;c.wall(gt(o,m,1.003),gt(o,x,1.003),_+.05,_+.86,y),(v<o[1]+14||g%2===0)&&Gn(c,m,x,o,_+.9,_+2.64,1.43,y===r?"#d8bfb0":"#eee8db")}}const h=u+4*f;c.shell(t,h,h+.48,r,l);const d=t.filter(([p,_])=>p<o[0]-11&&_>o[1]-1);if(d.length>=4){const p=d.map(_=>gt(Be(d),_,.68));c.shell(p,h+.48,h+1.68,r,l)}gv(i,c,t,h),c.finish()}function xv(i,t,e){const n=t.rings[0],s=t.id==="223949001",o=Be(n),r=s?e(...o):e(-263.52,25.47),a=Math.min(...n.map(M=>e(...M)))-.25,l="#e5dfcd",c=s?"#94877d":"#ad5d51",u=me(i,"Музей Горгиппия",{surfaces:{roof:[c],glass:["#556161"],stone:["#a69a82"]}}),f=r+4.25,h=t.id==="142489024"||s?[n[0],n[1],n[3],n[4]]:n.slice(0,4);Math.hypot(h[1][0]-h[0][0],h[1][1]-h[0][1])>Math.hypot(h[2][0]-h[1][0],h[2][1]-h[1][1])&&h.push(h.shift()),u.shell(n,Math.min(a,r),r+.5,"#a69a82",null),u.shell(n,r+.5,f,l,null);const d=gt(h[0],h[1],.5),p=gt(h[2],h[3],.5),_=[gt(d,p,.23),gt(d,p,.77)].map(([M,v])=>[M,f+(s?1.65:2.25),v]),g=h.map(([M,v])=>[M,f,v]);u.face(c,g[0],g[1],_[0]),u.face(c,g[1],g[2],_[1],_[0]),u.face(c,g[2],g[3],_[1]),u.face(c,g[3],g[0],_[0],_[1]);const m=s?[n[0],n[1]]:[n[4],n[0]],x=s?6:4;for(let M=0;M<x;M++){const v=gt(o,gt(m[0],m[1],(M+.32)/x),1.005),y=gt(o,gt(m[0],m[1],(M+.66)/x),1.005);u.wall(v,y,r+1.25,r+3.03,"#556161")}if(t.id==="142489024")for(const M of[.19,.81]){const v=n[0],y=n[1],b=Array.from({length:16},(w,S)=>{const E=S*Math.PI/8,[T,P]=gt(o,gt(v,y,M+.035*Math.cos(E)),1.006);return[T,r+2.5+.46*Math.sin(E),P]});u.face(dv,...b)}u.finish()}function vv(i,t,e){if(t.id==="170958806")mv(i,t.rings[0],e);else if(t.id==="1546378584")_v(i,t.rings[0],e);else if(["142489024","218983841","223949001"].includes(t.id))xv(i,t,e);else return!1;return!0}function Mv(i,t){const e=me(i,"Вход в Горгиппию"),[n,s]=Gi[1],o=t(n,s),r=Hi,a=(u,f,h=0)=>[n+Math.cos(r)*u-Math.sin(r)*h,o+f,s+Math.sin(r)*u+Math.cos(r)*h];for(let u=1;u<Gi.length;u++){const f=Gi[u-1],h=Gi[u],d=Math.hypot(h[0]-f[0],h[1]-f[1]),p=gt(f,h,yc(f)/d),_=gt(f,h,1-yc(h)/d),g=Math.hypot(_[0]-p[0],_[1]-p[1]),m=Math.ceil(g/2.6),x=(M,v)=>{const[y,b]=gt(p,_,M);return[y,t(y,b)+v,b]};for(let M=0;M<m;M++){const v=M/m,y=(M+1)/m;for(const[b,w,S]of[[.14,.23,"#b1a992"],[.37,.037,Ss],[1.21,.043,Ss]])e.beam(x(v,b),x(y,b),w,S);e.beam(x(v,.22),x(v,1.31),.068,Ss);for(let b=1;b<=5;b++){const w=v+(y-v)*b/6;e.beam(x(w,.36),x(w,1.25),.024,Ss)}}}for(const u of[-2.55,2.55]){const[f,,h]=a(u,0);e.shell(Da([f,h],.63),o-.45,o+2.56,vn),e.shell(Da([f,h],.83),o+2.56,o+2.72,bc),e.shell(Da([f,h],.88),o+2.72,o+3.48,vn);const d=Array.from({length:20},(p,_)=>{const g=_*Math.PI/10;return a(u+Math.cos(g)*.31,3.1+Math.sin(g)*.31,-.445)});e.face("#98694b",...d)}for(const u of[0,.27,.55]){const f=Array.from({length:11},(h,d)=>{const p=d/5-1;return a(p*2.17,2.8+u+(1-p*p)*.68)});f.slice(1).forEach((h,d)=>e.beam(f[d],h,.045,vn))}const l={Г:[[[0,0],[0,1],[1,1]]],О:[[[.22,0],[.78,0],[1,.18],[1,.82],[.78,1],[.22,1],[0,.82],[0,.18],[.22,0]]],Р:[[[0,0],[0,1],[.78,1],[1,.82],[1,.65],[.78,.49],[0,.49]]],И:[[[0,1],[0,0],[1,1],[1,0]]],П:[[[0,0],[0,1],[1,1],[1,0]]],Я:[[[1,0],[1,1],[.22,1],[0,.82],[0,.65],[.22,.49],[1,.49]],[[0,0],[.44,.49]]]};Array.from("ГОРГИППИЯ").forEach((u,f)=>{const h=(f-4)*.425,d=3.02+(1-(h/2.17)**2)*.68;for(const p of l[u]){const _=p.map(([g,m])=>a(-h-(g-.5)*.32,d+m*.43,-.045));_.slice(1).forEach((g,m)=>e.beam(_[m],g,.043,"#9e5345"))}});const c=Nd(t);for(let u=0;u<3;u++){const f=-1.44+u*.42,h=[[-2.22,f],[2.22,f],[2.22,.46],[-2.22,.46]].map(([p,_])=>{const[g,,m]=a(p,0,_);return[g,m]}),d=u===0?c-.2:c+u*.135;e.shell(h,d,c+(u+1)*.135,"#c8b697")}for(const u of[-1,1]){for(let f=0;f<=6;f++){const h=u*(1.15+f*.16);e.beam(a(h,.26),a(h,1.78),.032,Ss)}for(const f of[.32,1.7])e.beam(a(u*1.15,f),a(u*2.2,f),.046,Ss)}e.finish()}function Sv(i,t){Mv(i,t)}const Qo="#eeeee7",ls="#f3f1e7",Ia="#294d6a",Fd="#496b83",Od={glass:[Fd,"#7694a3"],metal:[Ia,"#4d7494"],flatRoof:["#c2c7c2","#c7c8bf","#c6c8c4"],stone:["#c7bcab"]};function gr(i){return i.map(([t,e],n)=>{const[s,o]=i[(n+1)%i.length],r=Math.hypot(s-t,o-e);return{x:t,z:e,length:r,ux:(s-t)/r,uz:(o-e)/r}})}function tn(i,t,e=0){return[i.x+i.ux*t-i.uz*e,i.z+i.uz*t+i.ux*e]}function Bu(i,t){return i.map((e,n)=>{const s=(n+i.length-1)%i.length,o=i[s],r=tn(o,0,t[s]),a=tn(e,0,t[n]),l=o.ux*e.uz-o.uz*e.ux,c=((a[0]-r[0])*e.uz-(a[1]-r[1])*e.ux)/l;return[r[0]+o.ux*c,r[1]+o.uz*c]})}function l0(i,t,e,n,s){return[tn(i,t,n),tn(i,e,n),tn(i,e,s),tn(i,t,s)]}function wo(i,t,e,n,s,o,r=Fd,a=.025){i.wall(tn(t,e,-a),tn(t,n,-a),s,o,r)}function yv(i,t,e,n){const s=n?Math.max(1,Math.round(t.length/4.15)):1,o=Math.min(n?2.38:.93,t.length/s*.69);for(let r=0;r<s;r++){const a=t.length*(r+.5)/s,l=e+(n?.37:1.02),c=e+2.37;wo(i,t,a-o/2,a+o/2,l,c),n&&wo(i,t,a-.038,a+.038,l,c,"#7694a3",.04)}}function bv(i,t,e){const[n,s]=tn(t,0,.055),[o,r]=tn(t,t.length,.055);i.beam([n,e+.26,s],[o,e+.26,r],.065,Ia),i.beam([n,e+1.08,s],[o,e+1.08,r],.075,Ia);const a=Math.ceil(t.length/.215);for(let l=0;l<a;l++){const c=t.length*(l+.5)/a;i.wall(tn(t,c-.016,.055),tn(t,c+.016,.055),e+.26,e+1.08,Ia)}}function wv(i,t,e,n,s){const o=n+.9,r=e.length*.2,a=e.length*.8,l=s(...tn(e,e.length/2,-2.9));for(let h=0;h<6;h++){const d=-2.9+h*.42,p=l+(o-l)*(h+1)/6;t.shell(l0(e,r,a,d,.04),Math.min(p-.05,l-.08),p,"#c7bcab")}t.shell(l0(e,r-.9,a+.9,-2.3,.04),n+3.24,n+3.56,ls);const c=(r+a)/2;wo(t,e,c-4.4,c+4.4,n+2.74,n+3.23,ls,.055);const[u,f]=tn(e,c,-.082);Ie(i,{text:"анапа-океан",position:[u,n+2.99,f],size:[8.1,.62],outward:[e.uz,-e.ux],color:"#155d8a",weight:850,lighting:"backlit",glowColor:"#6ac8ff"})}function Ev(i,t,e){const n=me(i,"Анапа-Океан — 13 этажей",{surfaces:Od}),s=gr(t),o=new Set([0,1,3,4,5,6]),r=Bu(s,s.map((g,m)=>o.has(m)?1.5:.05)),a=gr(r),l=e(...tn(s[0],s[0].length/2)),c=Math.min(...t.map(g=>e(...g)))-.3,u=l+3.65,f=12,h=2.97,d=u+f*h;n.shell(t,c,u,Qo,ls);for(const g of s.slice(0,3)){const m=Math.max(2,Math.round(g.length/2.3));for(let x=0;x<m;x++){const M=g.length*(x+.055)/m,v=g.length*(x+.945)/m;wo(n,g,M,v,l+.95,l+3.22)}}wv(i,n,s[0],l,e),n.shell(r,u,d,Qo,"#c2c7c2");for(let g=0;g<f;g++){const m=u+h*g,x=g<f-1;x&&(n.shell(t,m,m+.22,ls),n.flat(t,m,ls));for(let M=0;M<s.length;M++){const v=o.has(M);yv(n,a[M],m,v),v&&x&&bv(n,s[M],m)}}const p=Bu(s,s.map(()=>.4)),_=gr(p);n.shell(p,d-.17,d+.45,Qo,"#c7c8bf");for(const[g,m]of[[2,1.37],[7,1.05]]){const x=_[g];n.shell(l0(x,.7,x.length-.7,.02,2.1),d+.45,d+m,Qo)}n.finish()}function Tv(i,t,e){const n=me(i,"Анапа-Океан — низкое крыло",{surfaces:Od}),s=[...t.slice(0,9),t[15]],o=t.slice(8),r=e(...Be(s)),a=e(...Be(o)),l=r+3.9,c=a+6.25,u="#4d7494";for(const[g,m,x]of[[s,r,l],[o,a,c]]){const M=Math.min(...g.map(y=>e(...y)))-.3;n.shell(g,M,x,Qo,"#c6c8c4");const v=gr(g);for(const y of v){if(y.length<2.7)continue;const b=Math.max(1,Math.round(y.length/4.3));for(let w=0;w<b;w++){const S=y.length*(w+.17)/b,E=y.length*(w+.84)/b;wo(n,y,S,E,m+.72,m+2.94),g===o&&wo(n,y,S,E,m+3.55,x-.64)}}}const f=gr(s);for(const g of f.slice(0,6)){const m=tn(g,0,.15),x=tn(g,g.length,.15);n.wall(m,x,l+.14,l+.91,u),n.beam([m[0],l+.96,m[1]],[x[0],l+.96,x[1]],.055,ls)}const h=f[3],[d,p]=tn(h,h.length/2,-1.55),_=e(d,p)+2.65;for(const g of[-1,1]){const[m,x]=tn(h,h.length/2+g*1.85,-1.47);n.beam([m,e(m,x),x],[m,_,x],.16,ls),n.beam([m,_-.12,x],[d,_-.12,p],.095,ls)}Ie(i,{text:"La Veranda",position:[d,_+.16,p],size:[3.6,.69],outward:[h.uz,-h.ux],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#faf3db",weight:600,lighting:"spot"}),n.finish()}function Av(i,t){const e=me(i,"La Veranda — летняя веранда",{surfaces:{wood:["#ddd7c5","#b5a484"],ground:["#d3c7b3"],metal:["#706b5c"]}}),n=[-601,-29],s=[.855,-.519],o=[.519,.855],r=(p,_)=>[n[0]+s[0]*p+o[0]*_,n[1]+s[1]*p+o[1]*_],a=(p,_,g,m)=>[r(p,g),r(_,g),r(_,m),r(p,m)],l=[0,4.5,9].flatMap(p=>[0,3,6].map(_=>t(...r(p,_)))),c=Math.max(...l)+.06,u=c+3.1,f=(p,_,g,m,x,M)=>e.beam([p[0],g,p[1]],[_[0],m,_[1]],x,M);e.shell(a(0,9,0,6),Math.min(...l)-.12,c,"#bcb4a6","#ddd7c5"),e.shell(a(-.12,9.12,-.12,6.12),u,u+.16,"#e5e1d6","#f6f3e9");for(const p of[.15,3,6,8.85])for(const _ of[.15,5.85]){const g=r(p,_);f(g,g,c,u,.13,"#f5f2e8")}for(const p of[.15,5.85]){f(r(.15,p),r(8.85,p),c+.92,c+.92,.09,"#f5f2e8");for(let _=.15;_<8.5;_+=2.9)f(r(_,p),r(_+2.85,p),c+.18,c+.89,.055,"#f5f2e8"),f(r(_,p),r(_+2.85,p),c+.89,c+.18,.055,"#f5f2e8")}for(const p of[.3,2.8,3.2,5.8,6.2,8.7])e.wall(r(p,.2),r(p+.24,.2),c+.92,u-.05,"#eee9d9");for(const p of[1.5,4.5,7.5])for(const _ of[1.6,4.2]){e.shell(a(p-.47,p+.47,_-.36,_+.36),c+.73,c+.79,"#baa98d","#f5efe1");const g=r(p,_);f(g,g,c+.05,c+.73,.08,"#817462");for(const m of[-.78,.78])e.shell(a(p+m-.23,p+m+.23,_-.23,_+.23),c+.42,c+.5,"#a99779","#c2b198")}for(const p of[1.1,3.6,6.1,8.1])e.shell(a(p-.65,p+.65,-.32,.05),c+.02,c+.4,"#aa8d61","#5f844b"),e.shell(a(p-.57,p+.57,-.29,.02),c+.4,c+.55,"#718f54","#829c62");const[h,d]=r(4.5,-.13);Ie(i,{text:"La Veranda",position:[h,u+.55,d],size:[5.5,.9],outward:[-.519,-.855],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#f8f4e8",weight:600,lighting:"spot"}),e.finish()}function Rv(i,t,e){if(t.id==="223949006")Ev(i,t.rings[0],e);else if(t.id==="142489050")Tv(i,t.rings[0],e),Av(i,e);else return!1;return!0}function Cv(i,t,e){const n="#d6d4cf",s="#b1b0ac",o="#556574",r="#eeeae2",a="#4b5156",l="#50333a",c=me(i,"Анапский городской суд — Ленина, 6",{surfaces:{stone:[l],glass:[o],metal:[a],flatRoof:[s],paving:["#c5bdae"]},textures:{[n]:{path:"art/lenin-court-cladding.webp",size:[2.4,2.4],amount:.95}}}),u=t.map((b,w)=>{const S=t[(w+1)%t.length],E=Math.hypot(S[0]-b[0],S[1]-b[1]),T=(S[0]-b[0])/E,P=(S[1]-b[1])/E;return{a:b,length:E,ux:T,uz:P,point:(L,C=0)=>[b[0]+T*L+P*C,b[1]+P*L-T*C]}}),f=(b,w,S,E,T,P,L=.025)=>c.wall(b.point(w,L),b.point(S,L),E,T,P),h=(b,w,S,E,T)=>[b.point(w,E),b.point(S,E),b.point(S,T),b.point(w,T)],d=u[1],p=d.length/2,_=e(...d.point(p,1.8))+.03,g=_+.72,m=g+7.6,x=Math.min(...t.map(([b,w])=>e(b,w)),_)-.35;c.shell(t,x,g,"#8c8983",null),c.shell(t,g,m,n,null),c.shell(t,m,m+.22,r,s);for(const[b,w]of u.entries()){if(w.length<5)continue;const S=Math.max(1,Math.round(w.length/3.3));for(let E=0;E<S;E++){const T=w.length*(E+.5)/S;for(let P=0;P<2;P++){if(b===1&&P===0&&Math.abs(T-p)<2.3)continue;const L=g+.7+P*3.48;if(f(w,T-.66,T+.66,L,L+1.94,r,.03),f(w,T-.57,T+.57,L+.09,L+1.85,o,.045),f(w,T-.025,T+.025,L+.09,L+1.85,r,.057),P===0){for(let C=-2;C<=2;C++)f(w,T+C*.2-.012,T+C*.2+.012,L+.13,L+1.82,a,.073);for(const C of[L+.48,L+1.4])f(w,T-.54,T+.54,C,C+.025,a,.073)}}}}f(d,p-1.2,p+1.2,g,g+2.65,"#242d31",.055),f(d,p-.025,p+.025,g+.05,g+2.6,"#c1bfba",.07);for(let b=0;b<4;b++){const w=2-b*.43;c.shell(h(d,p-2.7,p+2.7,.08,w),_+b*.18-.05,_+(b+1)*.18,l)}c.shell(h(d,p-2.75,p+2.75,-.02,1.85),g+3.16,g+3.39,r);for(const b of[p-2.25,p+2.25]){const[w,S]=d.point(b,1.47),E=Array.from({length:16},(T,P)=>{const L=P*2*Math.PI/16;return[w+Math.cos(L)*.2,S+Math.sin(L)*.2]});c.shell(E,g,g+3.16,r)}const[M,v]=d.point(p,.085);Ie(i,{text:"АНАПСКИЙ ГОРОДСКОЙ СУД",position:[M,g+2.91,v],size:[2.5,.36],outward:[d.uz,-d.ux],color:"#f8e7c7",background:"#8b2926",weight:700,lighting:"unlit"});const y=(b,w)=>{const S=d.point(b,w);return[S[0],e(...S)+.12,S[1]]};for(let b=2;b<18;b+=1){const w=Math.min(b+1,18);c.face("#c5bdae",y(p-1.45,b),y(p+1.45,b),y(p+1.45,w),y(p-1.45,w))}c.finish()}function Pv(i,t,e){return t.id!=="142489077"?!1:(Cv(i,t.rings[0],e),!0)}function Lv(i,t,e){const n="#eee5d0",s="#e2dac6",o="#526e7c",r="#394b51",a="#c9c3b5",l="#987a73",c="#d2c8b5",u=me(i,"Бизнес-центр «Престиж»",{surfaces:{glass:[o,r],stone:[l],flatRoof:[a],metal:["#6e706d"],paving:[c]},textures:{[n]:{path:"art/lenin-prestige-cladding.webp",size:[3.2,2.4],amount:.95}}}),f=t.map((R,I)=>{const N=t[(I+1)%t.length],F=Math.hypot(N[0]-R[0],N[1]-R[1]),G=(N[0]-R[0])/F,H=(N[1]-R[1])/F;return{a:R,length:F,ux:G,uz:H,point:(K,j=0)=>[R[0]+G*K+H*j,R[1]+H*K-G*j]}}),h=f[5],d=f[4],p=h.length/2,_=p-2,g=e(...h.point(p,1.6))+.04,m=Math.min(g,...t.map(([R,I])=>e(R,I)))-.45,x=g+7.5;u.shell(t,m,g+.2,"#b2a99a",null),u.shell(t,g+.2,x,n,null),u.shell(t,x,x+.24,s,a);function M(R,I,N,F,G,H,K=.035){u.wall(R.point(I,K),R.point(N,K),F,G,H)}function v(R,I,N,F,G){return[R.point(I,F),R.point(N,F),R.point(N,G),R.point(I,G)]}for(const R of[h,d]){const I=Math.max(2,Math.round(R.length/2.6));for(let N=0;N<I;N++){const F=R.length*N/I+.07,G=R.length*(N+1)/I-.07;M(R,F,G,g+3.68,x-.44,o,.045),M(R,F,F+.055,g+3.68,x-.44,s,.06),(R!==h||Math.abs((F+G)/2-_)>2.8)&&M(R,F,G,g+.38,g+3.02,r,.045)}M(R,.15,R.length-.15,g+3.22,g+3.44,s,.07)}const y=Math.min(6,(h.length-1)/2);M(h,p-y,p+y,g+2.75,g+3.68,s,.075),M(h,_-2.55,_+2.55,g+.57,g+3.05,r,.07);for(const R of[-1.7,0,1.7])M(h,_+R-.028,_+R+.028,g+.57,g+3.02,s,.085);for(let R=0;R<3;R++){const I=2.2-R*.52;u.shell(v(h,_-3.1,_+3.1,.08,I),g-.04+R*.19,g+.15+R*.19,l)}const b=Math.ceil(h.length);for(let R=0;R<b;R++){const I=h.length*R/b,N=h.length*(R+1)/b;for(const[F,G]of[[.1,2.5],[2.5,5.3]]){const H=v(h,I,N,F,G);u.face(c,...H.map(([K,j])=>[K,e(K,j)+.08,j]))}}u.finish();const[w,S]=h.point(p,.09),E=[h.uz,-h.ux];Ie(i,{text:"БИЗНЕС ЦЕНТР ПРЕСТИЖ",position:[w,x+.43,S],size:[Math.min(17,h.length-1),.72],outward:E,color:"#a72b28",weight:700,lighting:"spot",glowColor:"#ffd8bb"});const[T,P]=h.point(p+.035,.083);Ie(i,{text:`АЛЛЕРГОЛОГИЯ
ИММУНОЛОГИЯ`,position:[T,g+3.19,P],size:[y*2,.95],outward:E,color:"#501d2c",weight:700,fontFamily:"Georgia, serif",lighting:"unlit"}),Ie(i,{text:`АЛЛЕРГОЛОГИЯ
ИММУНОЛОГИЯ`,position:[w,g+3.22,S],size:[y*2,.95],outward:E,color:"#922e44",weight:700,fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffdfce"});const[L,C]=h.point(p+7.5,.09);Ie(i,{text:"АПТЕКА",position:[L,g+2.88,C],size:[3.4,.58],outward:E,color:"#43427c",background:"#eee9dd",weight:700,lighting:"spot",glowColor:"#ddd9ff"})}function Dv(i,t,e){return t.id!=="223535757"?!1:(Lv(i,t.rings[0],e),!0)}function Iv(i,t,e){const n=t.buildings.find(b=>b.id==="142489050");if(!n)return;const s=n.rings[0],o=s[13],r=s[14];if(!o||!r)return;const a=Math.hypot(r[0]-o[0],r[1]-o[1]),l=(r[0]-o[0])/a,c=(r[1]-o[1])/a,u=[c,-l],f=12.1,h=(b,w=.13)=>{const S=f*2-b;return[o[0]+l*S+u[0]*w,o[1]+c*S+u[1]*w]},d=e(...Be(s.slice(8))),p=h(f-6.85,.2),_=me(i,"Мацони — ул. Ленина, 3",{surfaces:{glass:["#202f30","#3d5150"],stone:["#262a29","#a59782"],wood:["#3d302c"],paving:["#b8b0a2","#b7ada0"]},textures:{"#bfc9b4":{path:"art/lenin-matsoni-mural.webp",repeat:!1,axes:{origin:[p[0],d+.31,p[1]],u:[-l/5.7,0,-c/5.7],v:[0,1/2.46,0]}}}}),g=(b,w,S,E,T,P=.13)=>_.wall(h(f+b,P),h(f+w,P),d+S,d+E,T);g(-7,7,.28,3.65,"#202f30"),g(-7,7,2.84,3.69,"#262a29",.16);for(const b of[-6.95,-1.1,.32,2.15,4.5,6.95])g(b-.055,b+.055,.28,2.84,"#262a29",.18);g(-1.02,.24,.32,2.72,"#202f30",.2),g(-.38,-.34,.86,1.66,"#a59782",.23),g(2.23,6.9,.3,1.03,"#e9e5d9",.19),g(2.23,6.9,1.05,2.76,"#3d5150",.19),g(4.49,4.54,1.05,2.76,"#262a29",.22),g(-6.85,-1.15,.31,2.77,"#bfc9b4",.2);const m=(b,w)=>{const[S,E]=h(f+b,w);return[S,e(S,E)+.15,E]};for(let b=-7;b<7;b+=1){const w=Math.min(b+1,7);for(let S=.3;S<9.3;S+=1){const E=Math.min(S+1,9.3);_.face("#b7ada0",m(b,S),m(w,S),m(w,E),m(b,E))}}const x=[h(f-1.12,.24),h(f+.34,.24),h(f+.34,1.25),h(f-1.12,1.25)],M=Math.max(...x.map(b=>e(...b)),d);_.shell(x,M-.12,M+.08,"#a59782"),_.finish();const[v,y]=h(f+1.5,.19);Ie(i,{text:"МАЦОНИ",position:[v,d+3.27,y],size:[5.2,.72],outward:u,color:"#fffdf6",weight:700,fontFamily:'"Comic Sans MS", cursive',lighting:"backlit",glowColor:"#fff0dc"})}const Uv=Object.freeze([{x:-504,z:-127,length:8,width:2.8,angle:-.357,type:"sail",accent:"#315774"},{x:-497,z:-124.4,length:9,width:3,angle:-.357,type:"sail",accent:"#a9604d"},{x:-490,z:-121.8,length:8,width:2.8,angle:-.357,type:"motor",accent:"#42738a"},{x:-483,z:-119.1,length:9,width:3,angle:-.357,type:"sail",accent:"#315774"},{x:-476,z:-116.5,length:8,width:2.8,angle:-.357,type:"motor",accent:"#a9604d"},{x:-469,z:-113.8,length:9,width:3,angle:-.357,type:"sail",accent:"#42738a"},{x:-462,z:-111.2,length:8,width:2.8,angle:-.357,type:"sail",accent:"#315774"},{x:-482,z:-83,length:7,width:2.5,angle:-.357,type:"motor",accent:"#315774"},{x:-474,z:-80.5,length:8,width:2.8,angle:-.357,type:"sail",accent:"#a9604d"},{x:-466,z:-77.5,length:7,width:2.5,angle:-.357,type:"motor",accent:"#42738a"},{x:-589.5,z:-340,length:15,width:4.2,angle:0,type:"port",accent:"#315774"},{x:-589,z:-306,length:10,width:3.5,angle:0,type:"motor",accent:"#a9604d"},{x:-587.7,z:-266,length:14,width:4,angle:0,type:"port",accent:"#42738a"},{x:-597.1,z:-203.6,length:14,width:4,angle:-.465,type:"port",accent:"#a9604d"},{x:-737,z:-275,length:12,width:3.5,angle:.45,type:"motor",accent:"#315774"},{x:-710.8,z:-222,length:8,width:2.8,angle:.45,type:"sail",accent:"#315774"}]);function Nv(i){const t="#ecefe8",e="#f5f3e9",n="#435d68",s="#78868a",o="#d9c9a9",r=me(i,"Суда в гавани и морском порту",{surfaces:{glass:[n],metal:[s],wood:[o],flatRoof:[e,t]}}),a=-.18;for(const l of Uv){const{x:c,z:u,length:f,width:h,angle:d,type:p,accent:_}=l,g=Math.sin(d),m=Math.cos(d),x=(N,F,G)=>[c+m*N+g*F,a+G,u-g*N+m*F],M=(N,F=1)=>[x(-h*.46*F,-f*.47,N),x(h*.46*F,-f*.47,N),x(h*.5*F,f*.04,N),x(h*.36*F,f*.3,N),x(0,f*.5,N),x(-h*.36*F,f*.3,N),x(-h*.5*F,f*.04,N)],v=M(-.16,.77),y=M(p==="port"?1.04:.72),b=M(.24,.91),w=M(.32,.92);for(let N=0;N<y.length;N++){const F=(N+1)%y.length;r.face(t,v[N],v[F],y[F],y[N]),r.face(_,b[N],b[F],w[F],w[N])}r.face(o,...y);const S=p==="port"?1.04:.72,E=(N,F,G,H,K)=>[x(F,H,N),x(G,H,N),x(G,K,N),x(F,K,N)],T=h*(p==="sail"?.31:.4),P=-f*(p==="sail"?.19:.29),L=f*(p==="sail"?.04:.14),C=p==="sail"?.43:p==="port"?1.65:1.05,R=E(S,-T,T,P,L),I=E(S+C,-T*.91,T*.91,P,L-f*.025);for(let N=0;N<4;N++)r.face(e,R[N],R[(N+1)%4],I[(N+1)%4],I[N]);if(r.face(e,...I),p!=="sail")for(const N of[-1,1]){const F=N*(T+.02);r.face(n,x(F,P+f*.04,S+C*.35),x(F,L-f*.04,S+C*.35),x(F*.93,L-f*.06,S+C*.82),x(F*.93,P+f*.04,S+C*.82))}if(p==="sail"){const N=f*1.12;r.beam(x(0,0,S),x(0,0,N),.08,s),r.beam(x(0,0,S+1.25),x(0,-f*.31,S+1.25),.09,s),r.beam(x(0,-f*.03,S+1.33),x(0,-f*.28,S+1.33),.19,e),r.beam(x(0,0,N-.25),x(0,f*.44,S+.1),.025,s),r.beam(x(0,0,N-.25),x(0,-f*.43,S+.1),.025,s)}else r.beam(x(0,P+f*.04,S+C),x(0,P+f*.04,S+C+1.5),.055,s),r.beam(x(-h*.42,f*.14,S+.4),x(-h*.34,f*.38,S+.4),.04,s),r.beam(x(h*.42,f*.14,S+.4),x(h*.34,f*.38,S+.4),.04,s)}r.finish()}const Fv=[{bounds:[-526,-150,-395,-110]},{bounds:[-463,-110,-395,-62]},{bounds:[-529,-96,-463,-64],outline:[[-526.29,-92.91],[-463,-69.3],[-464.22,-66.02],[-527.51,-89.63]]}];function ih(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+l*(o[0]-s[0]),s[1]+l*(o[1]-s[1])])}}return e}function zu(i,[t,e,n,s]){for(const o of[r=>r[0]-t,r=>n-r[0],r=>r[1]-e,r=>s-r[1]])if(i=ih(i,o),i.length<3)return[];return i}function Ov(i,t){const e=t.reduce((s,o,r)=>{const a=t[(r+1)%t.length];return s+o[0]*a[1]-a[0]*o[1]},0),n=Math.sign(e);for(let s=0;s<t.length;s++){const o=t[s],r=t[(s+1)%t.length];if(i=ih(i,a=>n*((r[0]-o[0])*(a[1]-o[1])-(r[1]-o[1])*(a[0]-o[0]))),i.length<3)return[]}return i}function Bv(i){const t=[];for(const e of i.land){const n=e.map(([s,o])=>new Mt(s,o));for(const s of Ei.triangulateShape(n,[])){const o=s.map(r=>[n[r].x,n[r].y]);for(const{bounds:r,outline:a}of Fv){let l=zu(o,r);if(a&&l.length>=3&&(l=Ov(l,a)),l.length<3)continue;const c=l.map(f=>f[0]),u=l.map(f=>f[1]);for(let f=Math.floor(Math.min(...c)/4)*4;f<Math.max(...c);f+=4)for(let h=Math.floor(Math.min(...u)/4)*4;h<Math.max(...u);h+=4){const d=zu(l,[f,h,f+4,h+4]);for(const p of[1,-1]){const _=ih(d,g=>p*(f+h+4-g[0]-g[1]));for(let g=2;g<_.length;g++){const m=_[0],x=_[g-1],M=_[g],v=(x[0]-m[0])*(M[1]-m[1])-(x[1]-m[1])*(M[0]-m[0]);Math.abs(v)>1e-4&&t.push(v>0?[m,M,x]:[m,x,M])}}}}}}return t}function zv(i,t,e){const n=[];for(const a of Bv(t))for(const[l,c]of a)n.push(l,e.faceHeight(l,c)+.12,c);const s=new Ae;s.setAttribute("position",new ee(n,3)),s.computeVertexNormals();const o=fn(new jt({color:"#a5a6a0",side:Ze}),{surface:"road",strength:.25}),r=new oe(s,o);r.name="Серое покрытие причалов марины",r.receiveShadow=!0,i.add(r)}const kv=Object.freeze([[-436.7,-8.4,6.7,2.5],[-425.3,-6.1,7.6,2.9],[-435.4,4.9,7.2,2.7],[-424.6,6.5,6.8,2.6],[-428.4,19.7,7.9,3],[-378.6,10.6,7.1,2.5],[-368,17.4,7.6,2.7],[-374.3,22.5,6.6,2.4],[-358.4,11.2,7.5,2.6],[-336,89.5,7,2.7],[-322,90,8.1,3.1],[-308,86.5,7.3,2.7],[-294,87,8,3],[-280,87,7.2,2.8],[-266,88,8.4,3.1],[-252,88.5,7.5,2.9],[-238,89,7.1,2.6],[-344,-.6,6.6,2.5],[-336,1.1,7.1,2.7],[-325,.6,6.7,2.5],[-229,35,6.8,2.5],[-227,48,7.4,2.7],[-205.8,40.5,7.2,2.6],[-201.7,54.8,7.8,2.9],[-201.7,68.4,6.8,2.6],[-190,74.3,7.7,2.8],[-181.3,32.7,7.2,2.6],[-166.5,40,7.9,2.9],[-151.7,41.8,7.1,2.6],[-141.2,51.8,6.9,2.5],[-172.8,54.8,8.1,3],[-162.3,65.4,7.5,2.8]]);function Gv([i,t],[e,n],[s,o]){const r=s-e,a=o-n,l=r*r+a*a,c=l?ue.clamp(((i-e)*r+(t-n)*a)/l,0,1):0;return Math.hypot(i-e-c*r,t-n-c*a)}function h0(i,t){let e=1/0;for(const n of t)for(let s=1;s<n.points.length;s++)e=Math.min(e,Gv(i,n.points[s-1],n.points[s])-(n.width??2)/2);return e}const Hv=[[-435.4,4.9,1.25],[-424.6,6.5,1.25],[-428.4,19.7,1.4],[-378.6,10.6,1.35],[-368,17.4,1.4],[-374.3,22.5,1.35]];function Vv(i,t,e){const n=kv.filter(([f,h])=>h0([f,h],t.roads)>.95&&!t.trees.some(([d,p])=>Math.hypot(d-f,p-h)<3));if(!n.length)return;const s=new dn(new yn(.12,.19,1,6),fn(new jt({color:"#75634b"}),{surface:"wood",strength:.6}),n.length),o=new dn(new Zn(1,2),fn(new jt({color:"#ffffff",flatShading:!0}),{surface:"foliage"}),n.length),r=new Se,a=["#557347","#647e4b","#48683d","#6d8753"];n.forEach(([f,h,d,p],_)=>{const g=e(f,h),m=d*.61;r.position.set(f,g+m/2,h),r.scale.set(1,m,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(_,r.matrix),r.position.set(f,g+d*.72,h),r.scale.set(p,d*.36,p*.92),r.rotation.set(0,_*1.37,0),r.updateMatrix(),o.setMatrixAt(_,r.matrix),o.setColorAt(_,new Ht(a[_%a.length]))}),s.name="Стволы деревьев по спутниковому снимку",o.name="Кроны у Горгиппии по спутниковому снимку",o.castShadow=!0,o.receiveShadow=!0,i.add(s,o);const l=[];for(const[f,h,d]of Hv){if(h0([f,h],t.roads)<d+.35)continue;const p=(g,m)=>{const x=f+Math.cos(g)*m,M=h+Math.sin(g)*m;return[x,e(x,M)+.16,M]},_=p(0,0);for(let g=0;g<12;g++)l.push(..._,...p((g+1)*Math.PI/6,d),...p(g*Math.PI/6,d))}const c=new Ae;c.setAttribute("position",new ee(l,3)),c.computeVertexNormals();const u=new oe(c,fn(new jt({color:"#718557",side:Ze}),{surface:"ground",strength:.4}));u.name="Зелёные островки между дорожками",i.add(u)}const Wv=Object.freeze([[-1242.3,795.7,7.5,3.2],[-1234.3,791.9,8.4,3.5],[-1225.4,796.1,7.6,3],[-1227.9,809.4,8.2,3.5],[-1233.9,825.4,7.2,3],[-1252.9,828.6,6.8,2.8],[-1259.2,739.5,8,3.4],[-1248.7,744.8,7.5,3.1],[-1237,739.5,7,2.9],[-1228.6,750.1,8.3,3.4],[-1235.5,760.6,7.2,3],[-1248.7,764.8,8,3.4],[-1260.3,770.1,6.9,2.8],[-1246.5,778.6,7.6,3.2],[-1142.5,930.2,6.6,2.5],[-1124.9,927,7.2,2.8],[-1128.1,952.2,6.8,2.7],[-1113.7,969.5,6.5,2.5]]);function Xv([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function qv(i){return Wv.filter(([t,e])=>h0([t,e],i.roads)>1&&!i.buildings.some(n=>Xv([t,e],n.rings[0]))&&!i.trees.some(([n,s])=>Math.hypot(n-t,s-e)<3))}function Yv(i,t,e){const n=qv(t);if(!n.length)return;const s=new dn(new yn(.12,.18,1,6),fn(new jt({color:"#6d604a"}),{surface:"wood",strength:.6}),n.length),o=new dn(new Zn(1,2),fn(new jt({color:"#ffffff",flatShading:!0}),{surface:"foliage"}),n.length),r=new Se,a=["#466c43","#547449","#617d4b","#405d3b"];n.forEach(([l,c,u,f],h)=>{const d=e(l,c),p=u*.62;r.position.set(l,d+p/2,c),r.scale.set(1,p,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(h,r.matrix),r.position.set(l,d+u*.72,c),r.scale.set(f,u*.36,f*.94),r.rotation.set(0,h*1.4,0),r.updateMatrix(),o.setMatrixAt(h,r.matrix),o.setColorAt(h,new Ht(a[h%a.length]))}),s.name="Деревья верхней набережной у маяка · стволы",o.name="Деревья верхней набережной у маяка · кроны",o.castShadow=o.receiveShadow=!0,i.add(s,o)}const bi="#eeece2",vs="#354552";function Bd(i,t){const e=Math.hypot(t[0]-i[0],t[1]-i[1]),n=(t[0]-i[0])/e,s=(t[1]-i[1])/e,o=(l,c)=>[i[0]+n*l-s*c,i[1]+s*l+n*c];return{point:o,project:([l,c])=>[(l-i[0])*n+(c-i[1])*s,(l-i[0])*-s+(c-i[1])*n],rectangle:(l,c,u,f)=>[o(l,u),o(c,u),o(c,f),o(l,f)]}}function ku(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);r>=0&&e.push(s),r<0!=a<0&&e.push(gt(s,o,r/(r-a)))}return e}function $v(i,t,e){const{point:n,project:s,rectangle:o}=Bd(t[0],t[1]),r=t.map(S=>e(...S)),a=Math.max(...r),l=a+3.35,c="#c8bda8",u="#adada4",f=me(i,"Кубань",{surfaces:{flatRoof:[u],stone:[c]}});f.shell(t,Math.min(...r)-.22,l,c,u);const h=ku(t,S=>14-s(S)[0]),d=ku(t,S=>s(S)[1]-35.45);f.shell(h,l,a+6.7,bi,u),f.shell(d,l,a+6,"#d7d0c1",u);const p=14,_=89.4,g=9.02,m=25.57,x=o(p,_,g+1.05,m-1.05),M=Be(x),v=2.95,y=l+8*v;f.shell(x,l,y,bi,u);const b=22,w=[g,m].map((S,E)=>{const T=E===0?1:-1,P=[];for(let L=0;L<b;L++){const C=p+(_-p)*L/b,R=p+(_-p)*(L+1)/b;P.push(n(C,S+T*.48),n(C+(R-C)*.4,S),n(R,S))}return P});for(let S=0;S<8;S++){const E=l+S*v;Gn(f,x[0],x[1],M,E+.96,E+2.62,3.45),Gn(f,x[2],x[3],M,E+.96,E+2.62,3.45);for(const P of w)for(let L=1;L<P.length;L++)f.wall(P[L-1],P[L],E+.24,E+.94,bi);const T=[[...w[0],n(_,g+1.07),n(p,g+1.07)],[...w[1],n(_,m-1.07),n(p,m-1.07)]];for(const P of T)f.shell(P,E,E+.24,bi)}f.shell(x,y,y+.45,bi,u),f.finish()}function Gu(i,t,e,n,s,o,r){const a=[[t[0],n,t[1]],[e[0],n,e[1]]];for(let l=0;l<=8;l++){const c=Math.PI*l/8,[u,f]=gt(t,e,(1+Math.cos(c))/2);a.push([u,s+(o-s)*Math.sin(c),f])}i.face(r,...a)}function ya(i,t,e,n,s,o,r){for(let a=0;a<r;a++){const l=f=>gt(t,e,(a+f)/r),c=[l(.15),l(.85)].map(f=>gt(n,f,1.006));Gu(i,...c,s,s+o*.72,s+o,bi);const u=[l(.24),l(.76)].map(f=>gt(n,f,1.011));Gu(i,...u,s+.12,s+o*.72,s+o-.2,"#314454")}}function Zv(i,[t,e],n,s,o,r=!1){const a=n.map(([l,c])=>Array.from({length:s},(u,f)=>{const h=2*Math.PI*(f+.5)/s;return[t+c*Math.cos(h),l,e+c*Math.sin(h)]}));for(let l=1;l<a.length;l++)for(let c=0;c<s;c++){const u=(c+1)%s;i.face(o,a[l-1][c],a[l-1][u],a[l][u],a[l][c]),r&&c%2===0&&i.beam(a[l-1][c],a[l][c],.04,"#a98c4b")}}function Hu(i,[t,e],n,s){const o="#bc9e4f";i.beam([t,n,e],[t,n+s,e],.075,o),i.beam([t-.33,n+s*.67,e],[t+.33,n+s*.67,e],.065,o),i.beam([t-.22,n+s*.35,e],[t+.22,n+s*.43,e],.06,o)}function Kv(i,t,e){const[n,s,o,r]=t,a=(L,C)=>gt(gt(s,o,L),gt(n,r,L),C),l=(L,C,R,I)=>[a(L,R),a(C,R),a(C,I),a(L,I)],c=Be(t),u=e(...c),f=Math.min(...t.map(L=>e(...L)))-.25,h="#3c9e9e",d="#a99973",p=me(i,"Свято-Онуфриевский храм",{surfaces:{flatRoof:[vs],glass:["#314454"],stone:[d]}}),_=l(.24,1,0,1),g=l(0,.35,.25,.75),m=Be(_),x=Be(g),M=u+5.9;p.shell(_,f,u+.6,d,null),p.shell(_,u+.6,M,h,null),p.shell(g,f,u+.6,d,null),p.shell(g,u+.6,u+6.45,h,null),p.shell(_.map(L=>gt(m,L,1.012)),M-.27,M,bi,null);for(const[L,C]of[[_[0],_[1]],[_[2],_[3]],[_[1],_[2]]])ya(p,L,C,m,u+1.18,2.78,3);ya(p,g[3],g[0],x,u+.55,3.1,1);const v=[a(.42,.5),a(.83,.5)].map(([L,C])=>[L,u+7.95,C]),y=_.map(([L,C])=>[L,M,C]);p.face(vs,y[0],y[1],v[1],v[0]),p.face(vs,y[1],y[2],v[1]),p.face(vs,y[2],y[3],v[0],v[1]),p.face(vs,y[3],y[0],v[0]);const b=u+6.65,w=u+10.35;p.shell(g,u+6.22,b,bi,null),p.shell(g,b,w,h,null),g.forEach((L,C)=>{ya(p,L,g[(C+1)%g.length],x,b+.18,2.55,3)});for(const[L,C,R]of[[_,m,M],[g,x,w]])for(const I of L){const[N,F]=gt(C,I,1.006);p.beam([N,u+.6,F],[N,R,F],.35,bi)}const S=g.map(L=>gt(x,L,1.045)),E=[x[0],u+17.8,x[1]];S.forEach(([L,C],R)=>{const[I,N]=S[(R+1)%S.length];p.face(vs,[L,w,C],[I,w,N],E),p.beam([L,w,C],E,.055,"#88754c")}),Hu(p,x,E[1],1.42);const T=a(.68,.5),P=Array.from({length:8},(L,C)=>{const R=Math.PI*(C+.5)/4;return[T[0]+1.98*Math.cos(R),T[1]+1.98*Math.sin(R)]});p.shell(P,u+7.35,u+10.1,h,null),p.shell(P.map(L=>gt(T,L,1.08)),u+9.87,u+10.12,bi,null),P.forEach((L,C)=>ya(p,L,P[(C+1)%P.length],T,u+8.22,1.42,1)),Zv(p,T,[[10.12,1.98],[10.55,2.27],[11.25,2.32],[12.02,1.85],[12.63,1.02],[13.12,.47],[13.52,.16]].map(([L,C])=>[u+L,C]),12,vs,!0),Hu(p,T,u+13.5,1.35),p.finish()}function Jv(i,t,e){const{point:n,rectangle:s}=Bd(t[3],t[4]),o=Be(t),r=t.map(T=>e(...T)),a=Math.max(...r),l="#d4b581",c="#cca873",u="#eadcbe",f="#a17a61",h="#aaa598",d="#625748",p="#986d59",_=me(i,"Мотылёк",{surfaces:{flatRoof:[h],metal:[d,p],stone:[f]}}),g=a+9.35;_.shell(t,Math.min(...r)-.25,a+.64,f,null),_.shell(t,a+.64,g,c,h);for(let T=0;T<3;T++){const P=a+.65+T*2.84;if(Gn(_,t[3],t[4],o,P+.65,P+2.43,3.9,c),Gn(_,t[11],t[12],o,P+.65,P+2.43,4,c),!T)continue;const L=s(.2,51.35,-.58,.04);_.shell(L,P-.24,P,u,l),_.wall(L[0],L[1],P+.68,P+.77,d);const C=s(9.18,42.7,16.97,17.52);_.shell(C,P-.24,P,u,l),_.wall(C[2],C[3],P+.68,P+.77,d)}const m=42.99,x=57,M=16.85,v=44.8,y=s(m,x,M,v),b=Be(y),w=a+12.15;_.shell(y,g,w,c,null);for(const[T,P]of y.entries())Gn(_,P,y[(T+1)%y.length],b,g+.35,w-.35,4.3,c);const[S,E]=[M,v].map(T=>Array.from({length:11},(P,L)=>{const C=L/10,[R,I]=n(m-.27+(x-m+.54)*C,T);return[R,w+1.55*(1-(2*C-1)**2),I]}));for(let T=1;T<S.length;T++)_.face(p,S[T-1],E[T-1],E[T],S[T]);_.face(c,...S),_.face(c,...E),_.finish()}function Qv(i,t,e){const n=t.parts?.filter(x=>x.levels>2)??[],s=t.parts?.filter(x=>x.levels===2)??[];if(n.length!==2||s.length!==2)return!1;const o=["#6f8a98","#8197a0","#627e8f","#718d9d"],r=me(i,"Колоннада",{surfaces:{flatRoof:["#b8bfbe"],glass:o,stone:["#d4d8d5"]}}),a=t.rings[0],l=a.map(x=>e(...x)),c=Math.max(...l),u=Math.min(...l)-.22,f=c+6.65,h="#d4d8d5",d="#b8bfbe",p="#a5adaf";for(const x of t.parts)r.shell(x.rings[0],u,f,p,d);const _=Be(a);a.forEach((x,M)=>{const v=a[(M+1)%a.length];for(const y of[0,1]){const b=c+y*3.325;Gn(r,x,v,_,b+.42,b+2.87,2.4,"#c4c9c8")}});const g=["#9e7867","#9b8e65","#56768e"],m=2.95;for(const[x,M]of n.entries()){const v=M.rings[0],y=Be(v),b=f+(M.levels-2)*m;r.shell(v,f,b,h,d),v.forEach((w,S)=>{const E=v[(S+1)%v.length],T=Math.hypot(E[0]-w[0],E[1]-w[1]),P=Math.max(1,Math.round(T/2.45)),L=T>9?.13:.16,C=G=>gt(y,gt(w,E,G),1.0035);for(let G=0;G<P;G++){const H=C(L+(1-2*L)*(G+.025)/P),K=C(L+(1-2*L)*(G+.975)/P);for(let j=2;j<M.levels;j++){const St=f+(j-2)*m,mt=j*7+S*11+G*5+x*9,zt=mt%29===0?g[G%g.length]:o[mt%o.length];r.wall(H,K,St+.15,St+m-.14,zt)}}if(T<13)return;const[R,I]=C(.15),[N,F]=C(.85);for(const[G,H]of[[R,I],[N,F]])r.beam([G,b,H],[G,b+1.45,H],.15,"#9ba5a8");r.beam([R,b+1.45,I],[N,b+1.45,F],.16,"#9ba5a8")})}return r.finish(),!0}function jv(i,t,e){const n=t.rings[0];if(t.id==="223459472")$v(i,n,e);else if(t.id==="142489074")Kv(i,n,e);else if(t.id==="223628174")Jv(i,n,e);else return t.id==="223628417"?Qv(i,t,e):!1;return!0}function cn([i,t],e){return[i,e,t]}function jo([i,t],e,n=e){return Array.from({length:8},(s,o)=>{const r=o*Math.PI/4;return[i+Math.cos(r)*e,t+Math.sin(r)*n]})}function zd(i,t,e,n){i.shell(jo(t,.13),e,e+.69,n,null),i.shell(jo(t,.54),e+.69,e+.75,n);for(const s of[-1,1]){const o=[t[0]+s*.84,t[1]];i.shell(jo(o,.18),e,e+.44,n,null),i.shell(jo(o,.28),e+.44,e+.5,n),i.beam([o[0]+s*.23,e+.46,o[1]],[o[0]+s*.23,e+.87,o[1]],.08,n)}}function t5(i,t,e,n,s){const o=(n.lowerWaterfront??n)(...Be(e)),r=o+s,a="#ded4ba",l="#e5e0cf",c="#bfbaa8",u="#484740",f=[[e[1][0],-30.5],[e[2][0],-32.8],[e[3][0],-35.7]],h=f.map(([g,m])=>[g,m-2]),d=[e[0],...h,e.at(-1)];t.shell(d,o-.17,o+.23,a,"#aa9c80"),t.shell(d,r-.25,r,"#a8a393","#b6b2a5");for(let g=1;g<h.length;g++){const m=h[g-1],x=h[g];t.wall(m,x,o+.23,o+.75,a),t.wall(m,x,r-.43,r-.25,l),t.wall(f[g-1],f[g],o+.23,r-.25,"#4b5351");for(const v of[.79,1,1.19])t.beam(cn(m,o+v),cn(x,o+v),.053,u);const M=5;for(let v=0;v<M;v++){const y=(v+.5)/M,b=gt(m,x,y),w=cn(b,o+1.54),S=r-.42;t.beam(cn(b,o+.23),cn(b,r-.25),.16,a);for(const P of[-1,1]){const L=gt(m,x,y+P*.018),C=gt(m,x,y+P*.056);t.face(l,cn(b,S),cn(C,S),w),t.face(c,cn(C,S),cn(L,S-.8),w),t.face(l,w,cn(b,o+.77),cn(L,o+.77))}t.beam(cn([b[0],b[1]-.045],o+1.9),cn([b[0],b[1]-.045],o+2.12),.11,"#f2dcab");const[E,T]=gt(m,x,y+.09);zd(t,[E,T+1.14],o+.23,"#88684d")}}const[p,_]=gt(h[0],h[1],.78);Ie(i,{text:"ПРИЧАЛ",position:[p,r-.54,_-.055],size:[3.08,.42],outward:[-.108,-.994],background:"#484740",color:"#f2e8d0",lighting:"unlit"})}function e5(i,t,e,n){const s=n(-170,-63)+.26,o=Be(e),r="#323a3e",a="#795b45",l=e.map(g=>gt(o,g,.82));t.shell(e,s-1.12,s+.39,"#666458");for(const[g,m,x,M]of[[e,.39,2.75,3.18],[e,3.18,5.93,6.52],[l,6.52,8.75,9.06]])t.shell(g,s+m,s+x,"#35494d",null),t.shell(g,s+x,s+M,r,"#777e7b"),g.forEach((v,y)=>{const b=g[(y+1)%g.length];Gn(t,v,b,o,s+m+.05,s+x,1.18,r)});const c=[[-185.1,-55.2],[-173,-69.3],[-163.5,-64],[-162.1,-47.2]],u=s+3.06,f=[c[0],[-188.8,-60.2],[-180.3,-72.6],c[1]];t.shell(f,s-.5,s+.11,"#888479","#aaa293"),t.shell(c,s-.52,s+.37,"#6a675d","#968477"),t.shell(c,u-.18,u,"#4c4035","#929895");const h=c.map(g=>gt(Be(c),g,.94));t.shell(h,s+.37,u-.19,"#475958",null);for(let g=0;g<c.length;g++){const m=c[g],x=c[(g+1)%c.length],M=Math.ceil(Math.hypot(x[0]-m[0],x[1]-m[1])/2.55);for(let v=0;v<M;v++){const y=gt(m,x,v/M);t.beam(cn(y,s+.35),cn(y,u-.13),.2,a),t.beam(cn(gt(y,x,.03),u-.33),cn(gt(m,x,(v+.8)/M),u-.33),.035,"#dac797")}}for(const g of[[-185.6,-60.4],[-183.4,-64],[-180.8,-67.6]])zd(t,g,s+.11,"#916e49");const d=[-177.7,-51.7],p=n(...d),_=jo(d,.36,.52);t.shell(_,p-.08,p+2.31,a),Ie(i,{text:"ВИНО И МОРЕ",position:[d[0]-.365,p+1.28,d[1]],size:[1.02,.53],outward:[-1,0],background:"#5b4435",color:"#e7dac1",lighting:"unlit"})}const u0="#607680",n5={223948934:{address:"9",height:4.9,wall:"#c6b69f",roof:"#b6b1a5"},223948896:{address:"11",height:4.7,wall:"#b7a188",roof:"#777774"},223948899:{address:"13",height:4.6,wall:"#c4baaa",roof:"#cbc7bc"},223948902:{address:"15/1",height:4.45,wall:"#c0b4a2",roof:"#c4c0b5"},223948903:{address:"15/2",height:4.45,wall:"#bab0a1",roof:"#c4c0b5"},223948904:{address:"15/3",height:4.4,wall:"#baafa0",roof:"#c4c0b5"},223948906:{address:"17",height:4.35,wall:"#9c8471",roof:"#b3aba1"},223948908:{address:"19",height:3.65},223948913:{address:"21",height:3.75,wall:"#b4a18a",roof:"#a59c8b",name:"Хинкальная"},223948916:{address:"23",height:3.85,wall:"#85685b",roof:"#77716a",veranda:!0}};function i5(i){const t=i.reduce((e,n,s)=>{const o=i[(s+1)%i.length];return e+n[0]*o[1]-o[0]*n[1]},0);return i.map((e,n)=>[e,i[(n+1)%i.length]]).filter(([e,n])=>{const s=Math.hypot(n[0]-e[0],n[1]-e[1]);return s>=2&&(n[0]-e[0])*Math.sign(t)/s>.42})}function s5(i,t,e,{height:n,wall:s,roof:o,veranda:r}){const a=i5(t),l=e.lowerWaterfront??e,c=Math.min(...t.map(d=>l(...d))),u=c+n,f=Be(t),h=r?t.map(d=>gt(f,d,.8)):t;i.shell(t,c-.24,c+.32,"#b2a798"),i.shell(h,c+.3,u-.28,s,null),i.shell(t,u-.28,u,o);for(const[d,p]of a){const _=Math.hypot(p[0]-d[0],p[1]-d[1]),g=Math.max(1,Math.round(_/(r?3.4:2.5))),m=gt(f,d,1.005),x=gt(f,p,1.005);for(let M=0;M<g;M++){const v=gt(m,x,(M+.12)/g),y=gt(m,x,(M+.88)/g);if(r){const b=gt(d,p,M/g);i.beam([b[0],c+.32,b[1]],[b[0],u-.26,b[1]],.16,s),i.beam([v[0],c+.97,v[1]],[y[0],c+.97,y[1]],.075,"#66645f");const w=gt(f,v,.8),S=gt(f,y,.8);i.wall(w,S,c+.65,u-.44,u0)}else i.wall(v,y,c+.55,u-.6,u0),i.beam([v[0],c+1.31,v[1]],[y[0],c+1.31,y[1]],.07,s)}r&&i.beam([p[0],c+.32,p[1]],[p[0],u-.26,p[1]],.16,s)}}function o5(i,t,e,n){const s=n?-361.1:-351.8,o=n?-354.7:-331,r=n?-29.5:-29.6,a=(e.lowerWaterfront??e)((s+o)/2,r),l=n?"#e1dbcc":"#ac8b65",c=n?"#244945":"#302723",u=(g,m,x=0)=>[n?s+o-g:g,a+m,r-x],f=(g,m,x,M)=>[[g,x],[m,x],[m,M],[g,M]],h=(g,m,x,M,v,y)=>{t.face(y,u(g,x,v),u(m,x,v),u(m,M,v),u(g,M,v))},d=(g,m,x,M,v,y)=>t.beam(u(g,x,M),u(m,x,M),v,y),p=(g,m,x,M,v,y)=>t.beam(u(g,m,M),u(g,x,M),v,y);t.shell(f(s,o,r,r+2.55),a+.12,a+5.36,l),h(s+.16,o-.16,3.72,5.16,.022,"#687c86");const _=n?4:12;for(let g=0;g<=_;g++)p(s+.16+(o-s-.32)*g/_,3.7,5.18,.041,.065,"#d6d1c7");if(d(s+.16,o-.16,4.47,.038,.068,"#d6d1c7"),n){const g=s+.42;h(g,g+1.16,.31,2.52,.034,"#755336"),h(g+.11,g+1.05,.95,2.41,.044,"#45534a"),h(g+.11,g+1.05,.35,.94,.044,c),h(s+2.02,o-.38,.47,2.46,.026,"#4e6355");for(let M=0;M<=3;M++)p(s+2.02+M*1.33,.45,2.48,.06,.12,"#79573b");const m=s+1.84,x=o-.22;t.face("#236a66",u(m,2.77),u(x,2.77),u(x,2.5,1.38),u(m,2.5,1.38)),h(m,x,2.34,2.5,1.38,"#286c67"),Ie(i,{text:"Adrian",position:u((m+x)/2,2.42,1.39),size:[1.48,.15],outward:[0,-1],color:"#f5e9ce",lighting:"unlit"}),Ie(i,{text:"Adrian  BISTRO",position:u((m+x)/2,3.15,.035),size:[3.98,.53],outward:[0,-1],background:"#536e55",color:"#f1d8a1",fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#ffca70"}),t.shell(f(s+.12,o-.08,r-1.65,r),a+.13,a+.31,"#b5a58c"),d(s+1.75,o-.15,1.14,1.53,.061,c);for(let M=0;M<=11;M++)p(s+1.75+M*.409,.31,1.14,1.53,.035,c);for(const M of[s+.3,s+1.72,o-.45]){const[v]=u(M,0),y=(w,S)=>Array.from({length:8},(E,T)=>[v+Math.cos(T*Math.PI/4)*w,r-S+Math.sin(T*Math.PI/4)*w]);t.shell(y(.24,.83),a+.31,a+.7,"#ab694f");const b=y(.3,.83);for(let w=0;w<b.length;w++){const S=b[w],E=b[(w+1)%b.length];t.face(w%2?"#345c46":"#40694d",[S[0],a+.66,S[1]],[E[0],a+.66,E[1]],[v,a+1.85,r-.83])}}for(const M of[s+2.7,s+4.56]){p(M,.31,1,.93,.075,"#765d41");const[v]=u(M,0);t.shell(f(v-.31,v+.31,r-1.15,r-.71),a+.98,a+1.03,"#8b6c4b")}}else{t.shell(f(s,o,r-1.2,r),a+.12,a+.31,"#786858"),t.face("#392e27",u(s,3.16),u(o,3.16),u(o,2.79,1.21),u(s,2.79,1.21)),h(s,o,2.62,2.79,1.21,"#3d2f28");const g=8,m=(o-s)/g;for(let x=0;x<g;x++){const M=s+m*x;h(M+.08,M+m-.08,.34,2.61,.032,x%3===0?"#587273":"#354d50"),p(M+.02,.31,2.68,1.13,.088,c),d(M+.12,M+m-.18,1.12,1.11,.07,"#7e5e42");for(let v=0;v<=5;v++)p(M+.12+(m-.3)*v/5,.31,1.12,1.11,.039,"#7e5e42")}p(o-.02,.31,2.68,1.13,.088,c),Ie(i,{text:"BAVARIA",position:u(-342.2,3.07,1.24),size:[5.9,.55],outward:[0,-1],color:"#f5e5ca",fontFamily:"Georgia, serif",lighting:"backlit"}),r5(i,t,e)}}function r5(i,t,e){const o=e(-332.9,-27.7)+.13;for(const a of[-1,1]){const l=-332.9+a*1.05;t.beam([l,o,-27.7],[l,o+2.58,-27.7],.08,"#606564")}const r=[[-332.9-1.12,-27.7-.05],[-332.9+1.12,-27.7-.05],[-332.9+1.12,-27.7+.05],[-332.9-1.12,-27.7+.05]];t.shell(r,o+1.61,o+2.64,"#593b2a");for(const a of[1.87,2.12,2.38])t.beam([-332.9-1.1,o+a,-27.7+.05],[-332.9+1.1,o+a,-27.7+.05],.008,"#492b21");t.beam([-332.9+.2,o+2.64,-27.7],[-332.9+.28,o+2.95,-27.7+.13],.029,"#31302f"),t.beam([-332.9+.23,o+2.95,-27.7+.13],[-332.9+.35,o+2.95,-27.7+.15],.052,"#31302f"),Ie(i,{text:"BAVARIA",position:[-332.9,o+2.26,-27.7+.061],size:[1.98,.42],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffc882"}),Ie(i,{text:"GRILL&BAR",position:[-332.9,o+1.98,-27.7+.061],size:[1.2,.21],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",spill:!1})}function a5(i,t,e){const n=[-278.9,-35.55],s=[-260.3,-39.94],o=Math.hypot(s[0]-n[0],s[1]-n[1]),r=[(s[1]-n[1])/o,(n[0]-s[0])/o],a=gt(n,s,.61),l=(e.lowerWaterfront??e)(...a),c=(p,_=0)=>{const[g,m]=gt(n,s,p);return[g+_*r[0],m+_*r[1]]},u=(p,_,g=0)=>{const[m,x]=c(p,g);return[m,l+_,x]},f="#59606a",h="#313a43";t.wall(n,s,l+.13,l+3.39,f),t.wall(c(0,.022),c(1,.022),l+2.61,l+3.39,h);const d=[0,.1,.2,.3,.4,.49,.56,.66,.73,.82,.91,1];for(let p=1;p<d.length;p++){const _=d[p-1],g=d[p],m=p===7;t.wall(c(_,.038),c(g,.038),l+(m?.34:.63),l+2.6,m?"#334955":"#6b8596"),t.beam(u(_,m?.33:.62,.08),u(_,2.62,.08),.085,h),m||t.beam(u(_,2.11,.064),u(g,2.11,.064),.058,h)}t.beam(u(1,.62,.08),u(1,2.62,.08),.085,h),Ie(i,{text:"Хинкальная",position:u(.61,2.92,.051),size:[5.54,.56],outward:r,fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#e6f1ff"}),Ie(i,{text:"грузинская  Кафе  европейская",position:u(.61,3.26,.051),size:[4.06,.17],outward:r,fontFamily:"Georgia, serif",color:"#fff4e1",lighting:"spot",spill:!1})}function c5(i,t,e){const{id:n,rings:[s]}=t,o=n5[n];if(!o&&n!=="223949008")return!1;const r=n==="223949008"?"Вино и море":n==="223948908"?"Причал":o.name??`Набережная, ${o.address}`,a=me(i,r,{surfaces:{glass:[u0,"#687c86","#45534a","#4e6355","#587273","#354d50","#4b5351","#35494d","#475958","#334955","#6b8596"],wood:["#755336","#79573b","#765d41","#8b6c4b","#7e5e42","#88684d","#795b45","#916e49","#968477","#593b2a"],foliage:["#345c46","#40694d"],stone:["#b2a798","#b5a58c","#aa9c80","#aaa293"],flatRoof:[o?.roof,"#b6b2a5","#777e7b","#929895"],metal:["#244945","#302723","#484740","#323a3e"]}});return n==="223949008"?e5(i,a,s,e):n==="223948908"?t5(i,a,s,e,o.height):(s5(a,s,e,o),(n==="223948904"||n==="223948906")&&o5(i,a,e,n==="223948904"),n==="223948913"&&a5(i,a,e)),a.finish(),!0}function l5(i,t,e,n,s){const o=new ge;o.name="Вода фонтана «Старинная Анапа»",o.position.set(t,e,n),i.add(o);const r=new qc(new O(.32,.08,0),new O(1.12,2.25,0),new O(1.95,.07,0)),a=new Ao(r,24,.025,5,!1),l=new Dn({color:"#b5e9ea",transparent:!0,opacity:.55,depthWrite:!1});for(let g=0;g<8;g++){const m=new oe(a,l);m.rotation.y=-g*Math.PI/4,o.add(m)}const c=7,u=new dn(new Mn(.065,6,4),new Dn({color:"#e6ffff",transparent:!0,opacity:.86,depthWrite:!1}),8*c);u.instanceMatrix.setUsage(Bf),u.frustumCulled=!1,o.add(u);const f=new $c(.96,1,40),h=Array.from({length:3},()=>{const g=new Dn({color:"#d9fbfa",transparent:!0,opacity:.3,side:Ze,depthWrite:!1}),m=new oe(f,g);return m.rotation.x=-Math.PI/2,m.position.y=.012,o.add(m),m}),d=new Se,p=new O;function _(g){for(let m=0;m<8;m++){const x=m*Math.PI/4;for(let M=0;M<c;M++){const v=(g*.53+M/c+m*.029)%1;r.getPoint(v,p),d.position.set(p.x*Math.cos(x),p.y,p.x*Math.sin(x));const y=.65+.35*Math.sin(Math.PI*v);d.scale.setScalar(y),d.updateMatrix(),u.setMatrixAt(m*c+M,d.matrix)}}u.instanceMatrix.needsUpdate=!0,h.forEach((m,x)=>{const M=(g*.34+x/h.length)%1;m.scale.setScalar(.55+M*2.05),m.material.opacity=.33*(1-M)})}_(0),s.push(_)}function h5(i,t){const e=(t%4+4)%4,[n,s,o,r]=i,a=e%2*.5+n,l=Math.floor(e/2)*.5+s;return[a,l,a+o,l+r]}const Fn=Object.freeze({parallaxX:.32,parallaxY:.18,maxOffset:.135,edgeFade:.12,fadeStart:.05,fadeEnd:.2,glintMotion:.65,glintStrength:.22,glintRange:Object.freeze([.025,.13]),sampleScale:.9,insetFraction:.006,insetTexels:2}),Xe="#e9e5d8",Xl="#e6ddc8",ql="#5e4b3b",Ua="#7a7c75",Wo="#594741",nl="#517789",no="#d8ded9";function Dr(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=Math.sign(t),c=r*l/a,u=-o*l/a;return{a:e,b:s,length:a,nx:c,nz:u,point(f,h=0){return[e[0]+o*f/a+c*h,e[1]+r*f/a+u*h]}}})}function rn(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function Oe(i,t,e,n,s,o,r,a=.045){i.wall(t.point(e,a),t.point(n,a),s,o,r)}function Vu(i,t,e,n,{spacing:s,fraction:o,sill:r,top:a,glass:l,windows:c}){const u=Math.max(1,Math.round(t.length/s)),f=t.length/u;for(let h=0;h<n;h++){const d=e+h*2.7;for(let p=0;p<u;p++){const _=(p+.5)*f,g=f*o/2;Oe(i,t,_-g-.08,_+g+.08,d+r-.08,d+a+.08,Xe),Oe(i,t,_-g,_+g,d+r,d+a,l,.065),Oe(i,t,_-.026,_+.026,d+r,d+a,Xe,.12);const m=d+r+(a-r)*.72;Oe(i,t,_-g,_+g,m-.025,m+.025,Xe,.12),c?.add(t,_-g,_+g,d+r,d+a,0,p+h*3)}}}function Wu(i,t,e,n,s,o,r,a){const l=(f,h)=>{const[d,p]=t.point(f,a);return[d,h,p]},c=l(e,s),u=12;for(let f=0;f<u;f++){const h=Math.PI*f/u,d=Math.PI*(f+1)/u;i.face(r,c,l(e+n*Math.cos(h),s+o*Math.sin(h)),l(e+n*Math.cos(d),s+o*Math.sin(d)))}}function u5(i,t,e,n,s,o,r,a){const l=s+.34,c=s+1.92;Oe(i,t,e-n-.07,e+n+.07,l-.07,c,Xe),Wu(i,t,e,n+.07,c,.46,Xe,.045),Oe(i,t,e-n,e+n,l,c,o,.065),Wu(i,t,e,n,c,.39,o,.065),r?.add(t,e-n,e+n,l,c,.39,a),Oe(i,t,e-.025,e+.025,l,c+.37,Xe,.12),Oe(i,t,e-n,e+n,c-.025,c+.025,Xe,.12)}function Xu(i,{path:t,name:e,crop:n=[.13,.094,.24,.334]}){const s=[],o=[],r=[],a=[],l=(f,h,d)=>{for(const p of[f,h,d])s.push(...p.position),o.push(...p.uv),r.push(...p.bounds),a.push(...p.tangent)};function c(f,h,d,p,_,g,m,x=.105){const M=h5(n,m),[v,y,b,w]=M,S=b-v,E=w-y,T=f.point(h,x),P=f.point(d,x),L=Math.hypot(P[0]-T[0],P[1]-T[1]),C=[(P[0]-T[0])/L,(P[1]-T[1])/L],R=_+g-p,I=(K,j)=>{const[St,mt]=f.point(K,x);return{position:[St,j,mt],uv:[v+S*(K-h)/(d-h),y+E*(j-p)/R],bounds:M,tangent:C}},N=I(h,p),F=I(d,p),G=I(d,_),H=I(h,_);if(l(N,F,G),l(N,G,H),g>0){const K=(h+d)/2,j=I(K,_);for(let St=0;St<12;St++){const mt=Math.PI*St/12,zt=Math.PI*(St+1)/12;l(j,I(K+(d-h)/2*Math.cos(mt),_+g*Math.sin(mt)),I(K+(d-h)/2*Math.cos(zt),_+g*Math.sin(zt)))}}}function u(){if(!s.length||typeof document>"u")return;const f={value:0},h={value:new Mt(1/1024,1/1024)},d=new Kc().load(`./${t}`,m=>{h.value.set(1/m.image.width,1/m.image.height),f.value=1});d.colorSpace=je,d.magFilter=Ke,d.minFilter=Rc;const p=new Ae;p.setAttribute("position",new ee(s,3)),p.setAttribute("uv",new ee(o,2)),p.setAttribute("glassBounds",new ee(r,4)),p.setAttribute("glassTangent",new ee(a,2)),p.computeVertexNormals();const _=new jt({map:d,color:"#ffffff",side:Ze});_.onBeforeCompile=m=>{m.uniforms.cartoonEnabled=Ps.cartoonEnabled,m.uniforms.windowAtlasReady=f,m.uniforms.glassAtlasTexel=h,m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
          attribute vec4 glassBounds;
          attribute vec2 glassTangent;
          varying vec4 vGlassBounds;
          varying vec2 vGlassTangent;
          varying vec3 vGlassWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
          vGlassBounds = glassBounds;
          vGlassTangent = (modelMatrix * vec4(glassTangent.x, 0.0, glassTangent.y, 0.0)).xz;
          vGlassWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
          uniform float cartoonEnabled, windowAtlasReady;
          uniform vec2 glassAtlasTexel;
          varying vec4 vGlassBounds;
          varying vec2 vGlassTangent;
          varying vec3 vGlassWorld;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (cartoonEnabled < 0.5 || windowAtlasReady < 0.5) discard;`).replace("#include <map_fragment>",`
          #ifdef USE_MAP
            // A shallow view-dependent offset suggests interior depth without
            // a second render pass. Shrink before moving and clamp to this
            // panel's crop so no neighbouring atlas image can appear.
            vec2 glassSize = vGlassBounds.zw - vGlassBounds.xy;
            vec2 glassMiddle = (vGlassBounds.xy + vGlassBounds.zw) * 0.5;
            vec2 panelUv = clamp((vMapUv - vGlassBounds.xy) / glassSize, 0.0, 1.0);
            vec2 edgeDistance = min(panelUv, 1.0 - panelUv);
            float edgeFade = smoothstep(0.0, ${Fn.edgeFade}, min(edgeDistance.x, edgeDistance.y));
            // Subpixel windows need no high-frequency movement or glint.
            float footprint = max(fwidth(panelUv.x), fwidth(panelUv.y));
            float detailFade = 1.0 - smoothstep(${Fn.fadeStart}, ${Fn.fadeEnd}, footprint);
            vec3 eye = normalize(cameraPosition - vGlassWorld);
            float sideways = clamp(dot(eye.xz, normalize(vGlassTangent)), -0.8, 0.8);
            float vertical = clamp(eye.y, -0.6, 0.6);
            vec2 movement = vec2(-sideways * ${Fn.parallaxX}, -vertical * ${Fn.parallaxY}) * edgeFade * detailFade;
            vec2 parallax = glassSize * clamp(movement, -${Fn.maxOffset}, ${Fn.maxOffset});
            vec2 sampleUv = glassMiddle + (vMapUv - glassMiddle) * ${Fn.sampleScale} + parallax;
            vec2 safeInset = max(glassSize * ${Fn.insetFraction}, glassAtlasTexel * ${Fn.insetTexels.toFixed(1)});
            sampleUv = clamp(sampleUv, vGlassBounds.xy + safeInset, vGlassBounds.zw - safeInset);
            vec4 glassColor = texture2D(map, sampleUv);
            diffuseColor *= glassColor;
            // A restrained diagonal glint tracks the viewing angle and fades
            // at the panel edge; scene lighting also dims it in the evening.
            float band = abs(panelUv.x + panelUv.y * 0.16 - 0.55 + sideways * ${Fn.glintMotion});
            float shine = 1.0 - smoothstep(${Fn.glintRange[0]}, ${Fn.glintRange[1]}, band);
            shine *= edgeFade * detailFade;
            diffuseColor.rgb += vec3(0.72, 0.88, 1.0) * ${Fn.glintStrength} * shine;
          #endif`)},_.customProgramCacheKey=()=>"starinnaya-panel-atlas-optics-v1";const g=new oe(p,_);g.name=e,g.receiveShadow=!0,i.add(g)}return{add:c,finish:u}}function f5(i,t,e,n,s){const o=n+.15,r=(l,c)=>{const[u,f]=t.point(l,.09);return[u,c,f]},a=12;for(let l=0;l<a;l++){const c=Math.PI*l/a,u=Math.PI*(l+1)/a;i.face(Xe,r(e+o*Math.cos(c),s+.38*Math.sin(c)),r(e+o*Math.cos(u),s+.38*Math.sin(u)),r(e+n*Math.cos(u),s+.25*Math.sin(u)),r(e+n*Math.cos(c),s+.25*Math.sin(c)))}}function f0(i,[t,e],n,s,o){const r=a=>Array.from({length:10},(l,c)=>{const u=c*Math.PI/5;return[t+o*a*Math.cos(u),e+o*a*Math.sin(u)]});i.shell(r(1.27),n,n+.13,Xe),i.shell(r(1),n+.13,s-.2,Xe,null),i.shell(r(1.21),s-.2,s,Xe)}function d5(i,t,e,n){const s=Dr(t).filter(Y=>Y.length>.1),o=Be(t)[1],r=s.filter(({a:Y,b:B,length:Z,nz:rt})=>Z>27&&rt<-.8&&(Y[1]+B[1])/2<o-5).sort((Y,B)=>Math.min(Y.a[0],Y.b[0])-Math.min(B.a[0],B.b[0]));if(r.length<2)return!1;const a=r[0].a,l=r.at(-1).b,c=l[0]-a[0],u=l[1]-a[1],f=Math.hypot(c,u),h={length:f,nx:u/f,nz:-c/f,point(Y,B=0){return[a[0]+c*Y/f+this.nx*B,a[1]+u*Y/f+this.nz*B]}},d=s.find(Y=>Y.length>8.7&&Y.length<10&&Y.nz<-.8);if(!d)return!1;const p=8.6,_=Xu(i,{path:"art/starinnaya-window-interior-atlas.webp",name:"Старинная Анапа — индивидуальные окна",crop:[.005,.005,.49,.49]}),g=Xu(i,{path:"art/starinnaya-gallery-atlas.webp",name:"Старинная Анапа — стеклянная галерея",crop:[.005,.075,.49,.35]}),m=me(i,"Старинная Анапа",{surfaces:{glass:[nl,"#648591","#63767a","#397da8","#4b5553"],flatRoof:[Wo],stone:["#a89b85"],metal:["#484b47","#535a58",ql]},textures:{[Xl]:{path:"art/starinnaya-cladding-pixel-v2.webp",size:[4,4],amount:.82,pixelated:!0},[Wo]:{path:"art/starinnaya-roof.webp",size:[12,12],amount:.72,pixelated:!0},[ql]:{path:"art/starinnaya-bronze-glass.webp",size:[4,3],amount:.8,pixelated:!0}}}),x=e(...h.point(h.length/2,.7))+.08,M=Math.min(x-.15,...t.map(Y=>e(...Y)-.25)),v=x+3.3,y=x+11.55,b=x+11.9;m.flat(rn(h,0,h.length,.8,8.2),x-.045,"#bbb7aa");for(let Y=0;Y<h.length;Y+=.8)m.flat(rn(h,Y,Math.min(Y+.024,h.length),.8,8.2),x-.037,"#aaa99f");for(let Y=1.6;Y<8.2;Y+=.8)m.flat(rn(h,0,h.length,Y,Y+.024),x-.037,"#aaa99f");m.shell(t,M,x+.26,"#a89b85",null),m.shell(t,x+.26,y,Xl,null),m.shell(t,y,b,Xe,Wo);for(const Y of s){if(Y.length<4.8)continue;const B=Y.nz>.55,Z=Y===d;if(Vu(m,Y,v,Z?2:3,{spacing:B?3.4:3.12,fraction:B?.73:.57,sill:B?.49:.74,top:2.28,glass:B?"#648591":"#63767a",windows:_}),Z){const rt=Y.length/3;for(let vt=0;vt<3;vt++)u5(m,Y,(vt+.5)*rt,rt*.57/2,v+2*2.7,"#397da8",_,vt)}if(Y.length>7&&Y.length<8&&Y.nz<-.8){const rt=Y.length/2,vt=(Y.a[0]+Y.b[0])/2<Be(t)[0]?1:0;f5(m,Y,(vt+.5)*rt,rt*.57/2,v+2.7+2.28)}r.includes(Y)||Vu(m,Y,x+.26,1,{spacing:3.3,fraction:.58,sill:.55,top:2.62,glass:"#4b5553"})}for(const Y of[h]){const B=Y.length-.3,Z=rn(Y,.3,B,-.1,.95);m.shell(Z,x+.35,v,"#524940",null);const rt=Y===h?v-.83:v,vt=Y===h?v+.36:v+.24;m.shell(rn(Y,0,Y.length,-.15,Y===h?1.49:1.22),rt,vt,Xe);const z=Math.round(Y.length/2.12);for(let dt=0;dt<z;dt++){const X=.3+dt*(B-.3)/z,it=.3+(dt+1)*(B-.3)/z;Oe(m,Y,X+.07,it-.07,x+.44,v-.1,ql,.971),Oe(m,Y,X+.018,X+.088,x+.44,v-.1,"#a0906d",.989)}const st=Math.ceil(z/3);for(let dt=0;dt<st;dt++){const X=Math.floor(dt*z/st),it=Math.floor((dt+1)*z/st),at=.3+X*(B-.3)/z,V=.3+it*(B-.3)/z;g.add(Y,at+.07,V-.07,x+.44,v-.1,0,dt,.979)}}const w=h.length/2,S=w-6.2,E=w+6.2;Oe(m,h,w-1.18,w+1.18,x+.3,v-.16,"#393f3d",1.015);for(const Y of[-1.18,0,1.18])Oe(m,h,w+Y-.035,w+Y+.035,x+.3,v-.16,"#a0906d",1.03);for(const[Y,B]of[[-.83,-.76],[.29,.36]])m.shell(rn(h,0,h.length,1.49,1.55),v+Y,v+B,Xe);const[T,P]=h.point(w,1.505);Ie(i,{text:"СТАРИННАЯ АНАПА",position:[T,v-.58,P],size:[16,.78],outward:[h.nx,h.nz],color:"#a0803f",weight:600,fontFamily:"Georgia, serif",letterSpacing:"16px",lighting:"spot",glowColor:"#ffddad"});for(const Y of[-4.95,-1.65,1.65,4.95])f0(m,h.point(w+Y,1.17),x+.16,v,.21),f0(m,h.point(w+Y,.85-p),v+.24,y-.08,.33);for(let Y=0;Y<3;Y++){const B=v+.24+Y*2.7;for(let Z=0;Z<3;Z++){const rt=d.length*(Z+.5)/3,vt=rn(d,rt-1.23,rt+1.23,-.03,.54);m.shell(vt,B,B+.14,Xe);for(const z of[.28,1.03])Oe(m,d,rt-1.21,rt+1.21,B+z,B+z+.045,"#484b47",.55);for(let z=-5;z<=5;z++){const st=rt+z*.22;Oe(m,d,st,st+.036,B+.27,B+1.04,"#484b47",.55)}}}m.shell(rn(h,S,E,-.08-p,1.2-p),y-.09,b+.39,Xe);const L=(Y,B)=>[Y[0],B,Y[1]],C=b+.39,R=b+2.24,I=L(h.point(w,1.2-p),R),N=L(h.point(w,-3.5-p),R),F=L(h.point(S,1.2-p),C),G=L(h.point(E,1.2-p),C);m.face(Xe,F,G,I),m.face(Wo,F,I,N,L(h.point(S,-3.5-p),C)),m.face(Wo,I,G,L(h.point(E,-3.5-p),C),N),m.face(Xl,L(h.point(S,-3.5-p),C),N,L(h.point(E,-3.5-p),C));for(const Y of[-1.83,-.61,.61,1.83]){const B=w+Y,Z=b+.02,rt=Array.from({length:10},(vt,z)=>{const st=Math.PI/2+z*Math.PI/5,dt=z%2?.105:.245;return L(h.point(B+Math.cos(st)*dt,1.225-p),Z+Math.sin(st)*dt)});for(let vt=0;vt<rt.length;vt++)m.face("#a99973",L(h.point(B,1.225-p),Z),rt[vt],rt[(vt+1)%rt.length])}for(const Y of r)for(const[B,Z]of Y===h?[[.25,S],[E,Y.length-.25]]:[[.25,Y.length-.25]]){Oe(m,Y,B,Z,b+.39,b+.45,"#535a58",-.2);for(let rt=B;rt<Z;rt+=1.7)Oe(m,Y,rt,rt+.04,b,b+.45,"#535a58",-.2)}const H=rn(h,w-19,w+19,7.9,17.5);m.flat(H,x-.09,"#bbb7aa");const[K,j]=h.point(w,13.3),St=x-.09,mt=Y=>Array.from({length:32},(B,Z)=>{const rt=Z*Math.PI/16;return[K+Math.cos(rt)*Y,j+Math.sin(rt)*Y]});m.shell(mt(3.1),St-.12,St+.34,"#c5bfb2"),m.flat(mt(2.75),St+.35,"#68a6ad"),m.shell(mt(.27),St+.35,St+.43,"#c5bfb2"),l5(i,K,St+.36,j,n);for(const Y of[w-13,w+13]){const B=rn(h,Y-1.05,Y+1.05,6,6.5);m.shell(B,x+.38,x+.48,"#4b4540");for(const Z of[-.8,.8]){const[rt,vt]=h.point(Y+Z,6.25);m.beam([rt,x-.04,vt],[rt,x+.4,vt],.08,"#484b47")}}m.finish(),_.finish(),g.finish();const zt=fn(new jt({color:"#776952"}),{surface:"wood"}),pt=fn(new jt({color:"#728e5e",flatShading:!0}),{surface:"foliage"});for(const[Y,B]of[[w-20,10],[w+20,10]]){const[Z,rt]=h.point(Y,B),vt=e(Z,rt),z=new oe(new yn(.25,.39,4.8,7),zt);z.position.set(Z,vt+2.4,rt);const st=new oe(new Zn(3.1,1),pt);st.scale.set(1.05,1.18,.92),st.position.set(Z,vt+6.7,rt),z.castShadow=st.castShadow=!0,i.add(z,st)}return!0}function d0(i,t,e,n,s,o=!1){for(const r of Dr(t))if(!(r.length<.35||o&&r.nz>.25))for(let a=0;a<n;a++){const l=e+a*2.62+.42,c=e+(a+1)*2.62-.31,u=Math.max(1,Math.round(r.length/1.48));for(let f=0;f<u;f++){const h=(f+.065)*r.length/u,d=(f+.935)*r.length/u;Oe(i,r,h,d,l,c,nl),Oe(i,r,h,d,l+(c-l)*.63,l+(c-l)*.63+.056,s,.067)}}}function Ir(i,t,e,n,s,o,r,a,l=1.35){const c=Math.max(1,Math.round((n-e)/l)),u=(n-e)/c;Oe(i,t,e,n,s,o,a);for(let f=0;f<c;f++){const h=e+f*u+.045,d=h+u-.09;Oe(i,t,h,d,s+.05,o-.05,r,.065),Oe(i,t,h,d,o-.53,o-.48,a,.081)}}function kd(i,t,e,n,s,o,r){for(const l of[.45,.98])Oe(i,t,e,n,s+l,s+l+.055,r,o);const a=Math.max(1,Math.ceil((n-e)/1.6));for(let l=0;l<=a;l++){const c=e+(n-e)*l/a,[u,f]=t.point(c,o);i.beam([u,s,f],[u,s+1.025,f],.06,r)}}function Gd(i,t,e,n,s,o,r,a){const l=(u,f,h)=>{const[d,p]=t.point(u,f);return[d,h,p]},c=Math.ceil((n-e)/.69);for(let u=0;u<c;u++){const f=e+u*(n-e)/c,h=e+(u+1)*(n-e)/c,d=u%2?r:a;i.face(d,l(f,0,s),l(h,0,s),l(h,o,s-.47),l(f,o,s-.47)),Oe(i,t,f,h,s-.62,s-.47,d,o)}}function p5(i,t,e,n){const s=e.length*.46,o=s-5.25,r=s+5.25,a=n+.59,l=a+2.65;i.shell(rn(e,o,r,-.08,4.55),n-.22,n,"#d7c7a9");for(let h=0;h<4;h++)i.shell(rn(e,o+h*.27,r-h*.27,0,2.42-h*.48),n+h*.1475,n+(h+1)*.1475,"#dacbad");Ir(i,e,s-2.65,s+2.65,a,l-.13,"#354f52","#dbc693",.88);for(const h of[-4.34,4.34])f0(i,e.point(s+h,2.81),n,l,.17);const c=[[o,0],[r,0],[r,2.26],[r-.62,2.86],[r-2.17,3.26],[o+2.17,3.26],[o+.62,2.86],[o,2.26]];i.shell(c.map(([h,d])=>e.point(h,d)),l,l+.31,Xe,Ua);const[u,f]=e.point(s,3.28);Ie(t,{text:"Капитан",position:[u,l+.6,f],size:[3.1,.56],outward:[e.nx,e.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"})}function m5(i,t,e){if(t.length!==17)return!1;const n=me(i,"Капитан",{surfaces:{glass:[nl,"#54777f","#3f5e66"],flatRoof:[Ua,"#987561"],stone:["#a39881"]}}),s=t.slice(2,12),o=[t[2],...t.slice(11,16)],r=[...t.slice(0,3),...t.slice(15)],a=e.lowerWaterfront??e,l=Math.min(...t.map(v=>a(...v)))-.25,c=Math.min(...s.map(v=>a(...v)))+.12,[u,f]=Dr(o).slice(1,3),h=Dr(r).at(-1),d=e(...h.point(h.length*.46,4.55)),p=e(...f.point(f.length/2,2)),_=p+2.89;n.shell(t,l,c+.27,"#a39881",null),n.shell(o,c+.27,_,no,null),n.shell(o.map(v=>gt(Be(o),v,1.032)),_,_+.28,no,"#987561"),d0(n,o,c+.1,2,no),Ir(n,u,.38,u.length-.38,c+5.48,_-.12,"#54777f","#cedad5",1.67),Oe(n,u,.38,u.length-.38,p-.06,p+.05,no,.083);const g=rn(u,.3,u.length-.3,-.07,1.03);n.shell(g,c+2.68,c+2.84,"#c3bfb4"),kd(n,u,.38,u.length-.38,c+2.84,.97,"#afb5b0"),Gd(n,u,.35,u.length-.35,c+5.36,1.24,"#b6a481","#d5c8a5"),Ir(n,f,1.03,f.length-.6,p+.14,_-.12,"#3f5e66",no),n.shell(rn(f,.48,f.length-.12,0,1.26),_-.1,_+.32,Xe);const[m,x]=f.point(f.length*.57,1.28);Ie(i,{text:"Кафе Капитан",position:[m,_+.18,x],size:[5.2,.57],outward:[f.nx,f.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"}),n.shell(s,c+.27,c+7.52,no,null);const M=s.map(v=>gt(Be(s),v,1.046));return n.shell(M,c+7.52,c+7.85,Xe,Ua),d0(n,s,c-.03,3,Xe,!0),n.shell(r,c+.27,d+3.62,"#d9be8b",Ua),p5(n,i,h,d),n.finish(),!0}const g5={170958817:{number:1,roof:"#8a8f8d",wall:"#d5cbb6",frame:"#c8d4d2"},223948923:{number:5,roof:"#aca99d",wall:"#658195",frame:"#deddd3"},223948927:{number:7,roof:"#aaa492",wall:"#bcb29a",frame:"#dfd8bf"}};function _5(i,t,e,{number:n,roof:s,wall:o,frame:r}){const a=me(i,`Набережная, ${n}`,{surfaces:{glass:[nl,"#526870","#6c858b"],flatRoof:[s,"#c4c7c2"],stone:["#a99e88"]}}),l=e.lowerWaterfront??e,c=Dr(t).filter(_=>_.nz<-.52),u=c.map(_=>l(..._.point(_.length/2))),f=t.map(_=>l(..._)),h=Math.min(...f)-.25,d=Math.min(...u.length?u:f)+.11,p=d+5.51;if(a.shell(t,h,d+.27,"#a99e88",null),a.shell(t,d+.27,p,o,null),a.shell(t.map(_=>gt(Be(t),_,1.02)),p,p+.24,r,s),n===1)d0(a,t,d+.15,2,r,!0);else for(const _ of c){const g=_.length-.36;if(Ir(a,_,.36,g,d+.42,d+2.71,"#526870",r),Ir(a,_,.36,g,d+3.03,p-.23,"#6c858b",r,1.47),n===5){const m=rn(_,.15,_.length-.15,0,1.57);a.shell(m,d-.12,d+.41,"#aea69c");const x=rn(_,.05,_.length-.05,0,1.68);a.shell(x,d+2.75,d+3.07,"#276583","#c4c7c2"),Oe(a,_,.19,_.length*.47,d+2.77,d+3.06,r,1.7);const M=_.length*.22;kd(a,_,M+2.3,g,d+.41,1.48,"#c2c7c3"),a.shell(rn(_,.15,M+2.28,1.54,2.01),d-.12,d+.23,"#a49e96");for(const v of[.33,_.length*.51,g])a.shell(rn(_,v-.12,v+.12,1.32,1.56),d+.41,d+2.75,o)}else Oe(a,_,.36,g,d+3.12,d+3.21,"#bc9d58",.085),Gd(a,_,.26,_.length-.26,p-.05,1.42,"#c8a851","#f0e6ca")}return a.finish(),!0}function x5(i,t,e,n=[]){if(t.id==="r11979734-0")return d5(i,t.rings[0],e,n);if(t.id==="156055903")return m5(i,t.rings[0],e);const s=g5[t.id];return s?_5(i,t.rings[0],e,s):!1}function v5(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=r*Math.sign(t)/a,c=-o*Math.sign(t)/a;return{a:e,b:s,length:a,nx:l,nz:c,point(u,f=0){return[e[0]+o*u/a+l*f,e[1]+r*u/a+c*f]}}})}function M5(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function qu(i,t,e,n,s,o,r){const a=(h,d,p,_)=>M5(t,h,d,p,_),l=["#f16d91","#e83868","#ff9cb2","#ffe6a1","#f5b540"],c=n-.2,u=n+.2;i.shell(a(e-o/2,e+o/2,c,u),s,s+.28,"#9a553a","#bd7450"),i.shell(a(e-o/2+.05,e+o/2-.05,c+.03,u-.03),s+.27,s+.37,"#38682d","#548b39");const f=Math.max(4,Math.floor(o/.16));for(let h=0;h<f;h++){const d=e-o/2+(h+.5)*o/f,p=n+Math.sin((h+r)*2.61)*.12,_=s+.38+.05*((h*7+r)%3),g=.075+.018*((h+r)%3);i.shell(a(d-g,d+g,p-g,p+g),_,_+g*1.5,l[(h*3+r)%l.length])}}function S5(i,t,e,n,s){const o=i.children.find(_=>_.isMesh&&_.geometry?.type==="IcosahedronGeometry"&&Math.hypot(_.position.x-t,_.position.z-e)<.02);if(!o)return!1;o.visible=!1;const r=i.children.find(_=>_.isMesh&&_.geometry?.type==="CylinderGeometry"&&Math.hypot(_.position.x-t,_.position.z-e)<.02);r&&(r.material=fn(new jt({color:"#94714d"}),{texture:{path:"art/starinnaya-bark.webp",size:[1.4,2.8],amount:.9,pixelated:!0}}));const a=new ge;a.name="Лиственная крона у Старинной Анапы",a.position.set(t,n(t,e)+6.7,e);const l=fn(new jt({color:"#8ab65a"}),{texture:{path:"art/starinnaya-leaves.webp",size:[2.1,2.1],amount:.82,pixelated:!0}}),c=new oe(new Zn(1,3),l);c.scale.set(2.42,2.7,2.2),c.castShadow=!0,a.add(c);const u=128,f=new Zn(1,2),h=new dn(f,l,u),d=["#7daa55","#9abb65","#73a34d","#a2c873","#659549","#90b961"],p=new Se;for(let _=0;_<u;_++){const g=_*2.39996+s*.41,m=1-2*(_+.5)/u,x=Math.sqrt(Math.max(0,1-m*m));p.position.set(Math.cos(g)*x*2.34,m*2.5,Math.sin(g)*x*2.04);const M=.51+(_*11+s)%5*.045;p.scale.set(M*1.16,M*.96,M),p.rotation.set(0,g,0),p.updateMatrix(),h.setMatrixAt(_,p.matrix),h.setColorAt(_,new Ht(d[(_*5+s)%d.length]))}return h.castShadow=!0,h.receiveShadow=!0,a.add(h),i.add(a),!0}function y5(i,t,e,n,s){const o=new ge;o.name="Цветущий куст у Старинной Анапы",o.position.set(t,n(t,e),e);const r=fn(new jt({color:"#669740"}),{texture:{path:"art/starinnaya-leaves.webp",size:[1.25,1.25],amount:.7,pixelated:!0}}),a=26,l=new dn(new Zn(1,2),r,a),c=new Se;for(let d=0;d<a;d++){const p=d*2.39996+s,_=d===0?0:.35+d%3*.13;c.position.set(Math.cos(p)*_,.27+d%4*.08,Math.sin(p)*_),c.scale.set(.35,.31,.35),c.rotation.set(0,p,0),c.updateMatrix(),l.setMatrixAt(d,c.matrix)}l.castShadow=!0,o.add(l);const u=48,f=new dn(new Ne(1,1,1),new jt({color:"#ffffff"}),u*3),h=["#f04478","#fa6c99","#f586ad","#f6a3bf","#ffd3df","#df3e6d"];for(let d=0;d<u;d++){const p=d*2.39996+s*.7,_=Math.sqrt((d*47+s*13)%101/101)*.76,g=Math.cos(p)*_,m=Math.sin(p)*_,x=.35+.42*Math.sqrt(Math.max(0,1-_*_/.85**2));for(let M=0;M<3;M++){const v=M*Math.PI*2/3+p;c.position.set(g+Math.cos(v)*.055,x+(M===0?.025:0),m+Math.sin(v)*.055),c.scale.set(.13,.11,.13),c.rotation.set(0,v,0),c.updateMatrix();const y=d*3+M;f.setMatrixAt(y,c.matrix),f.setColorAt(y,new Ht(h[(d+M+s)%h.length]))}}f.castShadow=!0,o.add(f),i.add(o)}function b5(i,t,e){const n=t.buildings.find(m=>m.id==="r11979734-0")?.rings?.[0];if(!n)return;const s=v5(n).filter(m=>m.length>.1),o=n.reduce((m,[,x])=>m+x,0)/n.length,r=s.filter(({a:m,b:x,length:M,nz:v})=>M>27&&v<-.8&&(m[1]+x[1])/2<o-5).sort((m,x)=>Math.min(m.a[0],m.b[0])-Math.min(x.a[0],x.b[0])),a=s.find(m=>m.length>8.7&&m.length<10&&m.nz<-.8);if(r.length<2||!a)return;const l=r[0].a,c=r.at(-1).b,u=c[0]-l[0],f=c[1]-l[1],h=Math.hypot(u,f),d={length:h,point(m,x=0){return[l[0]+u*m/h+f*x/h,l[1]+f*m/h-u*x/h]}},p=h/2,_=e(...d.point(p,.7))+.08,g=me(i,"Цветы и кашпо у Старинной Анапы",{surfaces:{foliage:["#38682d","#548b39"],wood:["#9a553a","#bd7450"],metal:["#f16d91","#e83868","#ff9cb2","#ffe6a1","#f5b540"]}});for(const m of[1,2])for(let x=0;x<3;x++){const M=a.length*(x+.5)/3;qu(g,a,M,.57,_+3.3+.24+m*2.7+.23,1.45,m*5+x)}for(const[m,x]of[-32,-24,-16,16,24,32].entries())qu(g,d,p+x,1.55,_+.02,1.8,m+11);g.finish();for(const[m,x]of[-20,20].entries()){const[M,v]=d.point(p+x,10);if(S5(i,M,v,e,m+2)){const[y,b]=d.point(p+x+Math.sign(x)*.55,10);y5(i,y,b,e,m+2)}}}function w5(i){const t=new In({side:un,depthTest:!1,depthWrite:!1,uniforms:{skyHorizon:{value:new Ht("#b3d5d5")},skyBlue:{value:new Ht("#238fdb")},skyPale:{value:new Ht("#9ed7ef")},cloudWhite:{value:new Ht("#fffaf2")},cloudMid:{value:new Ht("#d8e4f3")},cloudShadow:{value:new Ht("#aac5e1")}},vertexShader:`
      varying vec3 skyDirection;
      void main() {
        skyDirection = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 skyDirection;
      uniform vec3 skyHorizon, skyBlue, skyPale, cloudWhite, cloudMid, cloudShadow;

      float ellipse(vec2 p, vec2 center, vec2 radius) {
        vec2 q = (p - center) / radius;
        return 1.0 - step(1.0, dot(q, q));
      }
      // Narrow base and uneven upper puffs retain the stepped cumulus shape.
      vec3 cloud(vec2 p, vec2 center, float scale) {
        vec2 q = (p - center) / scale;
        // Projection flattens the cloud layer toward the horizon: compensate
        // in depth so the visible silhouettes keep their cumulus height.
        q.y *= 0.60;
        if (abs(q.x) > 0.9 || abs(q.y) > 0.65) return vec3(0.0);
        float body = ellipse(q, vec2(0.0, 0.07), vec2(0.82, 0.20));
        float left = ellipse(q, vec2(-0.48, -0.03), vec2(0.25, 0.27));
        float peak = ellipse(q, vec2(-0.12, -0.16), vec2(0.30, 0.36));
        float right = ellipse(q, vec2(0.25, -0.07), vec2(0.29, 0.28));
        float tip = ellipse(q, vec2(0.52, 0.02), vec2(0.24, 0.19));
        float shape = max(body, max(max(left, peak), max(right, tip)));
        float steppedHeight = q.y + floor((q.x + 1.0) * 4.0) * 0.025;
        return shape * vec3(1.0, 1.0 - step(0.12, steppedHeight),
          1.0 - step(-0.08, steppedHeight));
      }
      vec3 clouds(vec2 p) {
        vec3 c = cloud(p, vec2(-1.15, -3.4), 0.42);
        c = max(c, cloud(p, vec2(1.8, -2.6), 0.38));
        c = max(c, cloud(p, vec2(3.5, -0.3), 0.42));
        c = max(c, cloud(p, vec2(2.1, 3.2), 0.39));
        // The hotel is viewed northward (+Z): put two modest cloud groups
        // within the normal walking camera's field of view above its facade.
        c = max(c, cloud(p, vec2(-0.85, 2.25), 0.34));
        c = max(c, cloud(p, vec2(1.05, 2.15), 0.32));
        c = max(c, cloud(p, vec2(-1.6, 2.8), 0.35));
        c = max(c, cloud(p, vec2(-3.6, 0.4), 0.40));
        return c;
      }
      void main() {
        vec3 direction = normalize(skyDirection);
        float altitude = clamp(direction.y, 0.0, 1.0);
        // Fade back to the original haze at the horizon so distant terrain and
        // water stay consistent with the existing fog and sunset.
        float skyAmount = smoothstep(0.03, 0.24, altitude);
        vec3 color = mix(skyPale, skyBlue, pow(altitude, 0.62));
        vec2 projected = direction.xz / max(altitude, 0.20);
        vec2 pixels = floor(projected * 34.0) / 34.0;
        // Each cloud supplies its silhouette, stepped midtone and highlight.
        vec3 layers = clouds(pixels);
        float cloudFade = smoothstep(0.12, 0.27, altitude) * (1.0 - smoothstep(0.75, 0.94, altitude));
        color = mix(color, cloudShadow, layers.x * cloudFade * 0.80);
        color = mix(color, cloudMid, layers.y * cloudFade * 0.90);
        color = mix(color, cloudWhite, layers.z * cloudFade * 0.94);
        gl_FragColor = vec4(mix(skyHorizon, color, skyAmount), 1.0);
        #include <colorspace_fragment>
      }
    `}),e=new oe(new Mn(2e3,32,16),t);e.name="Мультяшное дневное небо",e.frustumCulled=!1,e.renderOrder=-1e3,i.add(e);let n=!0;return{setDaytime(s){n=s},update(s,o){e.visible=n&&o,e.visible&&e.position.copy(s.position)}}}function E5(i,t){const[e,n]=Gi[1],s=t(e,n),o=Math.cos(Hi),r=Math.sin(Hi),a=[r,-o],l=(v,y,b)=>[e+v*o+b*r,s+y,n+v*r-b*o];if(Ie(i,{text:"ГОРГИППИЯ",position:l(2.55,1.68,.345),size:[.39,.58],outward:a,color:"#3c3021",background:"#b99b62",weight:600,lighting:"unlit"}),typeof document>"u")return;const c=3.56,u=.65,f=document.createElement("canvas");f.width=768,f.height=Math.round(f.width*u/c);const h=f.getContext("2d");if(!h)return;const d="АРХЕОЛОГИЧЕСКИЙ МУЗЕЙ";h.font="600 39px system-ui, sans-serif";const p=Array.from(d,v=>h.measureText(v).width),_=f.width*.92,g=(_-p.reduce((v,y)=>v+y,0))/(d.length-1);let m=(f.width-_)/2;h.fillStyle="#292726",h.textAlign="center",h.textBaseline="middle";for(let v=0;v<d.length;v++){const y=m+p[v]/2,b=(y-f.width/2)/f.width;h.fillText(d[v],y,42+278*b**2),m+=p[v]+g}const x=new Hc(f);x.colorSpace=je,x.anisotropy=4;const M=new oe(new mi(c,u),new jt({map:x,alphaTest:.35}));M.name=d,M.position.set(...l(0,3.31,.066)),M.rotation.y=Math.atan2(...a),i.add(M)}function T5(i,t){const e=[],n=t/2;for(let s=1;s+1<i.length;s++){const[o,r]=i[s-1],[a,l]=i[s],[c,u]=i[s+1],f=[a-o,l-r],h=[c-a,u-l],d=Math.hypot(...f),p=Math.hypot(...h);if(d<.05||p<.05)continue;const _=(f[0]*h[1]-f[1]*h[0])/(d*p);if(Math.abs(_)<.001)continue;const g=_>0?-1:1;e.push([[a,l],[a-g*f[1]*n/d,l+g*f[0]*n/d],[a-g*h[1]*n/p,l+g*h[0]*n/p]])}return e}const{Color:Cn,Vector2:A5,Vector3:sh}=eh,ke=24,Hd=4,R5=2;function Vd(i,t,e){return i.refinesStairs(t,e,ke)?R5:i.refines(t,e,ke)?Hd:ke}const zi={land:"#c6b899",beach:"#e0c893",park:"#8da371",water:"#6eabb5",pier:"#c5bdae",plaza:"#d0c1aa",ruins:"#aea27e",road:"#989891",path:"#d9ccb6",tree:"#7b9367",shingle:"#aaa495",rockLight:"#a59172",riprap:"#898a78",quay:"#aca99e"},Yu=["#c6b9a5","#b0aca1","#b8a08b","#ddd3ba","#9a9c93"],C5=["#e9deca","#ded6c7","#d6c5ad","#e4d8bf","#d8d6c7"],oh=new Set(["footway","pedestrian","steps","cycleway","path","track"]),$u=new Set(["223948926"]),P5=[Ox,Bx,vv,Rv,jv,c5,x5,Pv,Dv];function Si(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function _r(i){const t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function tr(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function L5(i,t,e=Rd(i)){const{bounds:[n,s,o,r],columns:a,rows:l,heights:c}=t,[u,f]=i.origin,[h,d]=i.scale;function p(b,w){const S=ue.clamp((u+b/h-n)/(o-n)*(a-1),0,a-1),E=ue.clamp((r-f+w/d)/(r-s)*(l-1),0,l-1),T=Math.min(Math.floor(S),a-2),P=Math.min(Math.floor(E),l-2),L=P*a+T,C=ue.lerp(c[L],c[L+1],S-T),R=ue.lerp(c[L+a],c[L+a+1],S-T);return Math.max(.16,ue.lerp(C,R,E-P))}function _(b,w){const S=new Map,E=(T,P)=>{const L=`${T}:${P}`;return S.has(L)||S.set(L,b(T,P)),S.get(L)};return(T,P)=>{const L=w(T,P),C=Math.floor(T/L)*L,R=Math.floor(P/L)*L,I=(T-C)/L,N=(P-R)/L,F=E(C+L,R),G=E(C,R+L);return I+N<=1?E(C,R)*(1-I-N)+F*I+G*N:E(C+L,R+L)*(I+N-1)+F*(1-N)+G*(1-I)}}const g=j_(i),m=_((b,w)=>g(b,w,p(b,w)),()=>ke),x=_((b,w)=>e.height(b,w,m),(b,w)=>Vd(e,Math.floor(b/ke)*ke,Math.floor(w/ke)*ke)),M=(b,w)=>e.waterfront.nearEdge(b,w)||e.nearTransition(b,w)?e.height(b,w,m):x(b,w);return Object.assign(M,{plain:m,faceHeight:(b,w,S)=>S?e.height(b,w,m,S):M(b,w),lowerWaterfront:(b,w)=>e.waterfront.lowerGrade(b,w,M(b,w))})}function Xn(i=!1){const t=[],e=[],n=i?[]:null;return{triangle(s,o,r,a,l){t.push(...s,...o,...r),n&&n.push(...l);for(const c of[s,o,r]){const u=typeof a=="function"?a(...c):a;e.push(u.r,u.g,u.b)}},mesh(s,o=Ze){const r=new Ae;r.setAttribute("position",new ee(t,3)),r.setAttribute("color",new ee(e,3)),n&&r.setAttribute("facadeGrid",new ee(n,3)),r.computeVertexNormals();const a=new oe(r,new jt({vertexColors:!0,side:o}));return a.name=s,a.receiveShadow=!0,a}}}function Rn(i,t,e=1){return fn(i.material,{surface:t,strength:e}),i}function D5(i){const t=i.material;return t.customProgramCacheKey=()=>"district-facade-grid",t.onBeforeCompile=e=>{e.uniforms.facadeEnabled=Ps.cartoonEnabled,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        ${el.replace("cartoonDistrict","windowGridDistrict")}
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
      `)},Rn(i,"plaster")}function Wd(i){const t=i.map(s=>s.map(([o,r])=>new A5(o,r))),e=Ei.triangulateShape(t[0],t.slice(1)),n=t.flat().map(({x:s,y:o})=>[s,o]);return e.map(s=>s.map(o=>n[o]))}function p0(i,t,e,n){const[s,o,r]=t,a=(o[0]-s[0])*(r[1]-s[1])-(o[1]-s[1])*(r[0]-s[0]);if(Math.abs(a)<1e-4)return;const l=([c,u])=>[c,e(c,u),u];i.triangle(l(s),l(a>0?r:o),l(a>0?o:r),n)}function ki(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l])}}return e}function I5(i,t,e,n){let s=ki(i,o=>o[0]-t);return s=ki(s,o=>t+n-o[0]),s=ki(s,o=>o[1]-e),ki(s,o=>e+n-o[1])}function m0(i,t,e,n,s,o=!1){const[r,a,l,c]=_r(t);for(let u=Math.floor(r/ke)*ke;u<l;u+=ke){let f=ki(t,h=>h[0]-u);if(f=ki(f,h=>u+ke-h[0]),!(f.length<3))for(let h=Math.floor(a/ke)*ke;h<c;h+=ke){let d=ki(f,_=>_[1]-h);if(d=ki(d,_=>h+ke-_[1]),d.length<3)continue;const p=Vd(s,u,h);for(let _=u;_<u+ke;_+=p)for(let g=h;g<h+ke;g+=p){const m=p===ke?d:I5(d,_,g,p);if(!(m.length<3))for(const x of[1,-1]){const M=ki(m,([y,b])=>x*(_+g+p-y-b));if(M.length<3)continue;const v=o?s.waterfront.split(M):null;if(!v){for(let y=2;y<M.length;y++)p0(i,[M[0],M[y-1],M[y]],e,n);continue}for(const{ring:y,side:b}of v){const w=(S,E)=>e(S,E,b);for(let S=2;S<y.length;S++)p0(i,[y[0],y[S-1],y[S]],w,n)}}}}}}function io(i,t,e,n,s,o=!1){for(const r of Wd(t))m0(i,r,e,n,s,o)}function Zu(i,t=[.36,.28]){const[e,n]=t;return i.material.customProgramCacheKey=()=>`promenade-${e}-${n}`,i.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      `)},i}function Xd(i,t){return i.kind==="pier"||i.bridge?.85:t.waterfront.upperWidths[i.id]||t.waterfront.lowerWidths[i.id]||i.level?.15:oh.has(i.kind)?.35:.31}function U5(i,t,e,n){const{points:s,kind:o,id:r}=t,a=n.promenadeWidths.get(r)??t.width,l=n.stairHeight(t,e.plain);if(l){N5(i,s,a,l);return}const c=oh.has(o),u=n.waterfront.upperWidths[r]||t.level==="upper",f=n.waterfront.lowerWidths[r]||t.level==="lower",h=new Cn(u?"#b7b7b1":f?"#a9aaa5":n.promenadeWidths.has(r)?"#c5c3b8":o==="pier"?zi.pier:c?zi.path:zi.road),d=Xd(t,n),p=(_,g,m)=>(n.rampHeight(t,_,g)??e.faceHeight(_,g,m))+d;for(let _=1;_<s.length;_++){const[g,m]=s[_-1],[x,M]=s[_],v=x-g,y=M-m,b=Math.hypot(v,y);if(b<.05)continue;const w=-y*a/(2*b),S=v*a/(2*b);m0(i,[[g+w,m+S],[x+w,M+S],[x-w,M-S],[g-w,m-S]],p,h,n,!0)}for(const _ of T5(s,a))m0(i,_,p,h,n,!0)}function qd(i,t,{from:e,to:n,run:s}){const o=i.slice(1).map(([l,c],u)=>Math.hypot(l-i[u][0],c-i[u][1])),r=o.reduce((l,c)=>l+c,0);let a=0;return o.flatMap((l,c)=>{if(l<.04)return[];const[u,f]=i[c],h=i[c+1][0]-u,d=i[c+1][1]-f,p=a/r;a+=l;const _=a/r,g=[p,...s.filter(x=>x>p&&x<_),_],m=x=>ue.lerp(e,n,ue.clamp((x-s[0])/(s[1]-s[0]),0,1));return g.slice(1).map((x,M)=>{const v=g[M],y=(v-p)/(_-p),b=(x-v)/(_-p),w=m(v),S=m(x),E=Math.max(1,Math.round(Math.abs(S-w)/.17)),T=P=>ue.lerp(w,S,P/E)+.15;return{x:u+h*y,z:f+d*y,dx:h*b,dz:d*b,length:l*b,width:t,count:E,height:T}})})}function N5(i,t,e,n){const s=new Cn("#c5bdb0"),o=new Cn("#a69d90");for(const{x:r,z:a,dx:l,dz:c,length:u,count:f,height:h}of qd(t,e,n)){const d=-c*e/(2*u),p=l*e/(2*u),_=(g,m,x)=>[r+l*g+d*x,m,a+c*g+p*x];for(let g=0;g<f;g++){const m=g/f,x=(g+1)/f,M=h(g),v=h(g+1),y=_(m,M,1),b=_(m,M,-1),w=_(x,M,-1),S=_(x,M,1),E=_(x,v,-1),T=_(x,v,1);i.triangle(y,b,w,s),i.triangle(y,w,S,s),i.triangle(S,w,E,o),i.triangle(S,E,T,o)}}}function F5(i,t){const e=i.surveyedStairs.flatMap(n=>qd(n.points,n.width,i.stairHeight(n,t.plain)));return(n,s)=>{if(i.nearTransition(n,s)){for(const o of e){const{x:r,z:a,dx:l,dz:c,length:u,width:f,count:h,height:d}=o,p=((n-r)*l+(s-a)*c)/(u*u),_=((s-a)*l-(n-r)*c)/u;if(p>=0&&p<=1&&Math.abs(_)<f/2)return d(Math.min(h-1,Math.floor(p*h)))}for(const o of i.ramps)if(tr(n,s,[o.bounds[0]-o.width,o.bounds[1]-o.width,o.bounds[2]+o.width,o.bounds[3]+o.width])&&on(n,s,o.points).distance<o.width/2)return i.rampHeight(o,n,s)+Xd(o,i)}}}function O5(i,t,e,n){const s=t.buildings.find(c=>c.id==="170958806");if(!e||!s)return;const[o]=_r(s.rings[0]),r=[];for(let c=1;c<e.length;c++){const[u,f]=e[c-1],[h,d]=e[c],p=h-u,_=d-f,g=Math.hypot(p,_);for(let m=.8;m<g;m+=1.42){const x=u+p*m/g,M=f+_*m/g;if(!(x<o-122||x>-161.9))for(const v of[.9,2.15,3.4]){const y=Math.sin(m*6.13+c*13.7+v)*.35,b=x+_*(v+y)/g,w=M-p*(v+y)/g,S=n(b,w);S<2.55&&t.land.some(E=>Si(b,w,E))&&r.push([b,S,w,y])}}}const a=new dn(new Zn(1,0),new jt({color:"#ada79a",flatShading:!0}),r.length);a.name="Каменная отсыпка у нижней набережной";const l=new Se;r.forEach(([c,u,f,h],d)=>{l.position.set(c,u-.05,f),l.scale.set(.72+h*.5,.32+h*.31,.53-h*.3),l.rotation.set(h,d*1.71,h*1.3),l.updateMatrix(),a.setMatrixAt(d,l.matrix),a.setColorAt(d,new Cn().setScalar(.8+d%7*.055))}),a.receiveShadow=!0,i.add(Rn(a,"stone"))}function B5(i,t,e){const n=i.mesh("Terrain"),{position:s,normal:o}=n.geometry.attributes,r=new sh,a=3.2;for(let l=0;l<s.count;l++){if(o.getY(l)<.05)continue;const c=s.getX(l),u=s.getZ(l);if(e.waterfront.nearEdge(c,u))continue;const f=Math.floor(c/ke)*ke,h=Math.floor(u/ke)*ke;e.refines(f,h,ke)&&(r.set(t(c-a,u)-t(c+a,u),2*a,t(c,u-a)-t(c,u+a)).normalize(),o.setXYZ(l,r.x,r.y,r.z))}return o.needsUpdate=!0,n}function Ku(i,t,e,n=null){const{rings:s,height:o,id:r}=t,a=Number(String(r).match(/\d+$/)?.[0]??0)%Yu.length,l=new Cn(Yu[a]),c=new Cn(C5[a]),u=Math.max(...s[0].map(([p,_])=>e(p,_))),f=u+o,h=Math.max(1,Math.round(o/3.15)),d=o/h;for(const p of Wd(s))p0(i,p,()=>f,l);for(const[p,_]of s.entries()){const m=_.reduce((x,[M,v],y)=>{const[b,w]=_[(y+1)%_.length];return x+M*w-b*v},0)>0==p>0?_:_.slice().reverse();for(let x=0;x<m.length;x++){const[M,v]=m[x],[y,b]=m[(x+1)%m.length],w=[M,e(M,v)-.2,v],S=[y,e(y,b)-.2,b],E=[y,f,b],T=[M,f,v];if(n){const P=Math.hypot(y-M,b-v),L=Math.max(1,Math.round(P/3.2)),C=P>2.2&&o>2.65?1:0,R=[0,(w[1]-u)/d,C],I=[L,(S[1]-u)/d,C],N=[L,h,C],F=[0,h,C];n.triangle(w,S,E,c,[...R,...I,...N]),n.triangle(w,E,T,c,[...R,...N,...F])}else i.triangle(w,S,E,c),i.triangle(w,E,T,c)}}}function z5(i,t,e){if(!t.length)return;const n=new dn(new yn(.15,.24,2.4,5),new jt({color:"#776952"}),t.length),s=new dn(new Zn(1,1),new jt({color:zi.tree,flatShading:!0}),t.length),o=new Se;t.forEach(([r,a],l)=>{const c=1.5+l*17%13*.11,u=e(r,a);o.position.set(r,u+1.2,a),o.scale.set(1,1,1),o.updateMatrix(),n.setMatrixAt(l,o.matrix),o.position.y=u+2.6+c*.35,o.scale.set(c,c*1.23,c),o.rotation.y=l*1.4,o.updateMatrix(),s.setMatrixAt(l,o.matrix),s.setColorAt(l,new Cn().setScalar(.77+l*11%7*.047))}),s.castShadow=!0,s.receiveShadow=!0,i.add(Rn(n,"wood",.75),Rn(s,"foliage",1))}function k5(i,t){const[e,n,s,o]=t,r={time:{value:0},evening:{value:0},sun:{value:new sh(-.6,.55,-.5).normalize()},haze:{value:new Cn("#b3d5d5")},cartoonEnabled:Ps.cartoonEnabled,...I_()},a=new In({uniforms:r,vertexShader:`
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
      ${el}
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
    `}),l=Math.max(s-e,o-n)*4,c=new oe(new mi(l,l),a);return c.rotation.x=-Math.PI/2,c.position.set((e+s)/2,-.18,(n+o)/2),i.add(c),r}function G5(i,t,e){const n=new bd({canvas:i,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1;const s=new B0,o=[];s.fog=new zc("#b3d5d5",900,3200),s.background=new Cn("#b3d5d5");const r=w5(s),a=Rd(t),l=L5(t,e,a),c=k5(s,t.bounds);Nv(s);const u=Xn(),f=new Cn(zi.land),h=Object.fromEntries(["shingle","rockLight","riprap","quay"].map(V=>[V,new Cn(zi[V])])),d=new Cn;function p(V,W,_t){const ht=a.tone(V,_t,W);if(!ht)return f;const[yt,Rt]=ht;return d.copy(f).lerp(h[yt],Rt)}const _=t.areas.some(({id:V})=>V===Lu),g=_?fv(l):null,m=_r(bs),x=(V,W)=>_&&tr(V,W,m)&&Si(V,W,bs);for(const V of t.land){const W=_&&bs.every(([_t,ht])=>Si(_t,ht,V))?[bs]:[];io(u,[V,...W],l.faceHeight,p,a,!0);for(let _t=0;_t<V.length;_t++){const[ht,yt]=V[_t],[Rt,k]=V[(_t+1)%V.length],Jt=a.refines(ht,yt,ke)?Hd:12,Kt=Math.max(1,Math.ceil(Math.hypot(Rt-ht,k-yt)/Jt));for(let U=0;U<Kt;U++){const A=[ht+(Rt-ht)*U/Kt,yt+(k-yt)*U/Kt],J=[ht+(Rt-ht)*(U+1)/Kt,yt+(k-yt)*(U+1)/Kt],nt=[A[0],l(...A),A[1]],ct=[J[0],l(...J),J[1]],bt=[A[0],-.4,A[1]],At=[J[0],-.4,J[1]];u.triangle(nt,bt,ct,p),u.triangle(ct,bt,At,p)}}}const M=Xn(),v=Xn(),y=Xn(),b={beach:.13,park:.14,plaza:.2,ruins:.22,water:.24,pier:.7};for(const V of t.areas){if(V.id===Lu)continue;const W=V.kind==="beach"&&(V.id==="368318892"||["pebblestone","gravel"].includes(V.surface)),_t=new Cn(W?zi.shingle:zi[V.kind]??zi.park),ht=(Rt,k,Jt)=>l.faceHeight(Rt,k,Jt)+(b[V.kind]??.14),yt=V.kind==="pier"||V.kind==="plaza"?v:V.kind==="park"?y:M;io(yt,V.rings,ht,_t,a,!0)}const w=Xn(),S=Xn(),E=Xn(),T=Xn(),P=new Cn("#b7b7b1"),L=new Cn("#a9aaa5"),C=[];for(const V of a.waterfront.sections){for(const W of V.upperDecks)C.push(W),io(T,[W],(ht,yt)=>l.faceHeight(ht,yt,{section:V,upper:!0})+.12,P,a);for(const W of V.lowerDecks)io(E,[W],(ht,yt)=>l.faceHeight(ht,yt,{section:V,upper:!1})+.12,L,a)}for(const V of a.allRoads){const W=a.waterfront.upperWidths[V.id]&&!(V.id in a.waterfront.rampLevels),_t=a.waterfront.lowerWidths[V.id],ht=W?T:_t?E:oh.has(V.kind)||V.kind==="pier"?S:w;U5(ht,V,l,a)}const R=Xn(),I=Xn(),N=Xn(!0),F=[$o.west,$o.north,$o.east,$o.south];for(const V of t.buildings)if(!$u.has(V.id)){if(V.id==="125813145")Lx(s,V,l);else if(!P5.some(W=>W(s,V,l,o))){const[W,_t,ht,yt]=_r(V.rings[0]);tr((W+ht)/2,(_t+yt)/2,F)?Ku(I,V,l,N):Ku(R,V,l)}}const G=R.mesh("OSM building footprints",ui);G.castShadow=!0;const H=D5(N.mesh("Фасады квартала",ui)),K=Rn(I.mesh("Крыши квартала",ui),"flatRoof");if(H.castShadow=K.castShadow=!0,s.add(Rn(B5(u,l,a),"ground"),Rn(M.mesh("OSM surfaces"),"ground"),Rn(v.mesh("Площади и причалы"),"paving"),Rn(y.mesh("Скверы"),"foliage",.65),Rn(Zu(E.mesh("Плитка нижней набережной"),[.24,.22]),"laidPaving"),Rn(Zu(T.mesh("Плитка верхней набережной")),"laidPaving"),Rn(S.mesh("Пешеходные дорожки"),"paving",.8),Rn(w.mesh("OSM streets"),"road",.8),G,K,H),zv(s,t,l),_){const V=Xn();Qx(s,l,(_t,ht,yt)=>io(V,_t,ht,yt,a)),s.add(Rn(V.mesh("Раскоп Горгиппии · уровни грунта"),"ground",.88));const W=Xn();g.render(s,(_t,ht,yt)=>io(W,_t,ht,yt,a)),s.add(Rn(W.mesh("Горгиппия · покрытия дорожек"),"paving",.7))}z5(s,t.trees,l),Vv(s,t,l),Yv(s,t,l),b5(s,t,l),Dx(s,t,l),Sv(s,l),E5(s,l),ax(s,l),Mx(s,l),Ex(s,l),O5(s,t,a.gorgWater,l),nx(s,a,l),W_(s,l),Y_(s,l),Iv(s,t,l);const j=k_(s,l),St=new K0("#eefbff","#b0a48b",1.65),mt=new j0("#fff5dd",2.25),[zt,pt,Y,B]=t.bounds,Z=Math.max(Y-zt,B-pt)*.62;mt.target.position.set((zt+Y)/2,0,(pt+B)/2),mt.castShadow=!0,mt.shadow.mapSize.set(2048,2048),Object.assign(mt.shadow.camera,{left:-Z,right:Z,top:Z,bottom:-Z,near:1,far:5300}),mt.shadow.camera.updateProjectionMatrix(),mt.shadow.normalBias=1,mt.shadow.bias=-15e-5,s.add(St,mt,mt.target);function rt(V){const W=V==="sunset";r.setDaytime(!W),j.setEnabled(W),c.evening.value=W?1:0;const _t=W?"#8993b4":"#b3d5d5";s.background.set(_t),s.fog.color.set(_t),c.haze.value.set(_t),St.color.set(W?"#becdf9":"#eefbff"),St.groundColor.set(W?"#736b86":"#b0a48b"),St.intensity=W?.73:1.65,mt.color.set(W?"#ffc18c":"#fff5dd"),mt.intensity=W?.81:2.25;const ht=W?[-.95,.23,-.44]:[-.6,1,-.5];mt.position.copy(mt.target.position).add(new sh(...ht).multiplyScalar(1800)),c.sun.value.set(...ht).normalize(),n.shadowMap.needsUpdate=!0}rt("day");const vt=new Map,z=60,st=(V,W)=>`${V}:${W}`;for(const{id:V,rings:W}of t.buildings){if($u.has(V))continue;const[_t,ht,yt,Rt]=_r(W[0]);for(let k=Math.floor(_t/z);k<=Math.floor(yt/z);k++)for(let Jt=Math.floor(ht/z);Jt<=Math.floor(Rt/z);Jt++){const Kt=st(k,Jt);vt.has(Kt)||vt.set(Kt,[]),vt.get(Kt).push({id:V,rings:W,bounds:[_t,ht,yt,Rt]})}}const dt=(V,W)=>t.land.some(_t=>Si(V,W,_t)),X=t.areas.filter(V=>V.kind==="pier"),it=F5(a,l);function at(V,W){if(!tr(V,W,t.bounds)||!dt(V,W)&&!X.some(({rings:yt})=>Si(V,W,yt[0]))||Si(V,W,ix)||Si(V,W,Pd))return null;const _t=g?.walkHeight(V,W,x(V,W));return _t===null||(vt.get(st(Math.floor(V/z),Math.floor(W/z)))??[]).some(({id:yt,rings:Rt,bounds:k})=>!tr(V,W,k)||!Si(V,W,Rt[0])||a.waterfront.deckRoofs.has(yt)&&C.some(Jt=>Si(V,W,Jt))?!1:!Rt.slice(1).some(Jt=>Si(V,W,Jt)))?null:_t??it(V,W)??l(V,W)}return{renderer:n,scene:s,terrain:l,light:rt,walkHeight:at,setCartoon:P_,walkable:(V,W)=>at(V,W)!==null,render(V,W){c.time.value=W;for(const _t of o)_t(W);j.update(V),r.update(V,Ps.cartoonEnabled.value>.5),n.render(s,V)}}}const H5=new Set(["motorway","trunk","primary","secondary","tertiary","unclassified","residential","living_street","service"]);function V5({kind:i,access:t}){return i!=="steps"&&t?.car!==!1&&(H5.has(i)||t?.car===!0)}function g0(i,t,e){return(t-i.x)*i.ux+(e-i.z)*i.uz}function Ju(i,t,e){const n=Math.min(i.length,Math.max(0,g0(i,t,e)));return(t-i.x-n*i.ux)**2+(e-i.z-n*i.uz)**2}function W5(i,t,e){return i.road.barriers?.some(n=>{if(n.car!==!1)return!1;const[s,o]=n.position;return Math.hypot(t-s,e-o)<i.radius+.7&&Math.abs((t-s)*i.ux+(e-o)*i.uz)<.65})}function X5(i){const t=new Map,e=[],n=32,s=u=>Math.floor(u/n),o=(u,f)=>`${u}:${f}`;for(const u of i){const f=V5(u),h=u.access?.bicycle===!1,d=u.kind==="steps"||h||u.barriers?.length;if(!f&&!d)continue;const p=u.width/2;for(let _=1;_<u.points.length;_++){const[g,m]=u.points[_-1],[x,M]=u.points[_],v=x-g,y=M-m,b=Math.hypot(v,y);if(b<.01)continue;const w={x:g,z:m,ux:v/b,uz:y/b,length:b,radius:p,road:u,car:f,bikeCheck:d};f&&e.push(w);for(let S=s(Math.min(g,x)-p);S<=s(Math.max(g,x)+p);S++)for(let E=s(Math.min(m,M)-p);E<=s(Math.max(m,M)+p);E++){const T=o(S,E);t.has(T)||t.set(T,[]),t.get(T).push(w)}}}const r=(u,f)=>t.get(o(s(u),s(f)))??[];function a(u,f){let h=null,d=1/0;for(const p of r(u,f)){if(!p.car)continue;const _=g0(p,u,f);if(_<-.005||_>p.length+.005)continue;const g=Ju(p,u,f),m=Math.max(.4,p.radius-.45);g>m**2||g>=d||W5(p,u,f)||(d=g,h=p.road)}return h}function l(u,f){let h=!1;for(const d of r(u,f)){if(!d.bikeCheck||Ju(d,u,f)>d.radius**2)continue;const{road:p}=d;if(p.access?.bicycle===!1){if(p.access?.foot===!1)return"blocked";h=!0}p.kind==="steps"&&(h=!0);for(const _ of p.barriers??[])if(!(_.bicycle!==!1||Math.hypot(u-_.position[0],f-_.position[1])>.65)){if(_.foot===!1)return"blocked";h=!0}}return h?"push":"ride"}function c([u,f],h){let d=null,p=1/0;for(const _ of e){const g=g0(_,u,f);for(const m of[0,-4,4,-12,12]){const x=Math.min(_.length,Math.max(0,g+m)),M=_.x+_.ux*x,v=_.z+_.uz*x,y=(M-u)**2+(v-f)**2;if(y>=p)continue;const b=h(M,v);b!==null&&(p=y,d={x:M,z:v,height:b,heading:Math.atan2(_.ux,-_.uz)})}}return d}return{carAt:a,bicycleAt:l,nearestCarStart:c}}const{MathUtils:q5,Vector3:wc}=eh,Y5=new wc(0,1,0);function On(i){return new jt({color:i,flatShading:!0})}function Ve(i,t,e,n=[0,0,0]){const s=new oe(t,e);return s.position.set(...n),i.add(s),s}function qn(i,t,e,n,s){const o=new wc(...t),r=new wc(...e),a=r.clone().sub(o),l=Ve(i,new yn(n,n,a.length(),10),s);return l.position.copy(o).lerp(r,.5),l.quaternion.setFromUnitVectors(Y5,a.normalize()),l}function fo(i,t,e,n){const s=new Xc(t.map(o=>new wc(...o)));return Ve(i,new Ao(s,14,e,8),n)}function Qu(i,t,e){const n=t.flat(2),s=t[0].length,o=[];for(let a=0;a<t.length-1;a++)for(let l=0;l<s-1;l++){const c=a*s+l;o.push(c,c+1,c+s,c+1,c+s+1,c+s)}const r=new Ae;return r.setAttribute("position",new ee(n,3)),r.setIndex(o),r.computeVertexNormals(),Ve(i,r,e)}function $5(i){const t=On("#4ca9ab"),e=On("#283a3e"),n=On("#18292b"),s=On("#acbfc0"),o=On("#e5af59"),r=new ge,a=new ge;i.add(r),r.add(a),qn(r,[0,-.3,-.27],[0,-.78,.4],.073,t),qn(a,[0,0,.09],[0,-.3,-.25],.049,s),qn(a,[0,-.31,-.25],[0,-.43,-.36],.066,t);for(const u of[-1,1]){const f=h=>h*u;qn(a,[f(.066),-.34,-.27],[f(.061),-.82,-.57],.038,t),fo(a,[[0,0,.09],[f(.24),.012,.11],[f(.43),.075,.18],[f(.75),.09,.25]],.033,s),qn(a,[f(.52),.079,.2],[f(.78),.092,.26],.052,e);for(const h of[.55,.61,.67,.73,.77]){const d=.205+(h-.53)*.21;qn(a,[f(h),.081,d],[f(h+.015),.082,d+.004],.055,n)}fo(a,[[f(.48),.055,.16],[f(.54),.038,.04],[f(.69),.038,.1]],.018,s),fo(a,[[f(.48),.045,.15],[f(.35),-.18,-.08],[f(.07),-.4,-.28]],.009,n)}const l=Ve(a,new Ri(.35,.042,8,32),n,[0,-.82,-.57]);l.rotation.y=Math.PI/2;const c=Ve(a,new Ri(.3,.014,6,32),s,[0,-.82,-.57]);return c.rotation.y=Math.PI/2,qn(a,[-.075,-.82,-.57],[.075,-.82,-.57],.036,s),Ve(a,new yn(.062,.067,.045,16),o,[-.37,.122,.14]),qn(a,[-.38,.115,.16],[-.45,.105,.2],.012,o),r.position.set(0,-.48,-1.5),{group:r,front:a}}function Z5(i){const t=On("#eee1ba"),e=On("#9b916c"),n=On("#303536"),s=On("#b7b8ab"),o=On("#202526"),r=On("#e7dbc2"),a=On("#f58b63"),l=new ge,c=new ge,u=new ge;i.add(l),l.add(c,u),Qu(l,[[[-1.52,-.8,-1.12],[-.84,-.73,-1.12],[-.1,-.67,-1.12],[.66,-.68,-1.12],[1.38,-.74,-1.12],[1.98,-.82,-1.12]],[[-1.36,-.8,-2.25],[-.72,-.75,-2.25],[-.06,-.69,-2.25],[.65,-.7,-2.25],[1.32,-.76,-2.25],[1.85,-.83,-2.25]],[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[-.04,-.83,-3.28],[.65,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]]],t),fo(l,[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[.3,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]],.014,e);for(const f of[-.77,1.3])fo(l,[[f,-.75,-1.42],[f,-.737,-2.14],[f*.93,-.844,-3.05]],.009,e);for(const f of[-.64,.38])qn(l,[f,-.65,-1.69],[f+.48,-.65,-1.76],.014,n),qn(l,[f+.23,-.65,-1.72],[f+.47,-.7,-1.5],.01,s);Qu(l,[[[-1.9,-.89,-.67],[-.77,-.83,-.67],[.08,-.8,-.67],[.91,-.84,-.67],[2.05,-.89,-.67]],[[-1.92,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],[[-1.93,-.77,-1.56],[-.74,-.7,-1.56],[.07,-.67,-1.56],[.94,-.72,-1.56],[2.08,-.8,-1.56]]],n),fo(l,[[-1.9,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],.018,s),Ve(l,new Ne(2.12,.14,.065),s,[.52,-.65,-1.37]),Ve(l,new Ne(.86,.24,.16),n,[-.25,-.55,-1.43]),Ve(l,new Ne(.8,.177,.019),s,[-.25,-.55,-1.337]),Ve(l,new Ne(.75,.143,.015),o,[-.25,-.55,-1.32]),Ve(l,new Ne(.44,.046,.004),r,[-.25,-.519,-1.31]);for(let f=0;f<=16;f++){const h=-.455+f*.0255,d=f%2===0?.017:.008;Ve(l,new Ne(.0035,d,.004),o,[h,-.497-d/2,-1.305])}for(const f of[-.542,.038])Ve(l,new Ne(.088,.036,.004),r,[f,-.524,-1.31]),qn(l,[f-.026,-.536,-1.304],[f+.01,-.51,-1.304],.0027,a);for(let f=0;f<6;f++){const h=On(["#b44e37","#95764c","#a44536","#548159","#a58746","#5b8798"][f]);Ve(l,new Ne(.037,.018,.004),h,[-.42+f*.066,-.579,-1.308])}for(const f of[.43,.67]){Ve(l,new Ne(.17,.105,.025),o,[f,-.645,-1.316]);for(let h=0;h<4;h++)Ve(l,new Ne(.15,.007,.01),s,[f,-.676+h*.019,-1.3])}u.position.set(-.453,-.518,-1.299),Ve(u,new Ne(.008,.035,.006),a),c.position.set(-.25,-.63,-1.1),Ve(c,new Ri(.295,.023,10,44),n),Ve(c,new Ri(.219,.008,6,36,Math.PI),s,[0,0,.022]).rotation.z=Math.PI;for(const f of[-1,1])qn(c,[f*.061,-.018,.01],[f*.287,.01,0],.025,n),qn(c,[f*.073,-.015,.035],[f*.212,.003,.023],.008,s);return Ve(c,new To(.079,24),n,[0,0,.038]),Ve(c,new Ri(.033,.004,6,20),s,[0,0,.042]),Ve(c,new Ne(.034,.024,.006),On("#a75444"),[0,0,.044]),{group:l,wheel:c,gaugeNeedle:u}}function K5(){const i=new B0,t=new ln(58,1,.04,10),e=new K0("#f7f7e9","#9ea8af",1.4),n=new j0("#fff2d8",2);n.position.set(-2,4,2),i.add(e,n);const s=$5(i),o=Z5(i);let r=0,a="";function l(c,{mode:u,aspect:f,turn:h,speed:d,time:p,delta:_,reducedMotion:g}){if(a!==u&&(r=0,a=u),s.group.visible=u==="bike",o.group.visible=u==="car",!s.group.visible&&!o.group.visible)return;t.aspect!==f&&(t.aspect=f,t.updateProjectionMatrix()),r=g?h:q5.damp(r,h,12,_);const m=Math.min(1,f/1.22),x=.1*(1-m);s.group.visible?(s.group.scale.x=m,s.group.position.y=-.48+x,g||(s.group.position.y+=Math.sin(p*11)*Math.min(.008,Math.abs(d)*.0015)),s.front.rotation.y=-r*.28,s.front.rotation.z=-r*.045):(o.group.scale.x=m,o.group.position.y=x,o.wheel.rotation.z=-r*.74,o.gaugeNeedle.position.x=-.453+Math.min(1,Math.abs(d)*3.6/160)*.407);const M=c.autoClear;c.autoClear=!1;try{c.clearDepth(),c.render(i,t)}finally{c.autoClear=M}}return{render:l}}function J5(i){const t=new ge;t.name="ВАЗ-2101 «Копейка»",t.visible=!1,i.add(t);const e=new dr({color:"#eee1ba",shininess:54,specular:"#a9a49b"}),n=new dr({color:"#c9cacc",shininess:90,specular:"#f2f5f4"}),s=new jt({color:"#35342f"}),o=new jt({color:"#232528"}),r=new dr({color:"#527176",shininess:68,specular:"#3b535a",side:Ze}),a=new jt({color:"#fff5d5",emissive:"#422d0d"}),l=new jt({color:"#ecaa38"}),c=new jt({color:"#b92d23"}),u=new jt({color:"#a53830"});function f(C,R,[I,N,F],G=t){const H=new oe(C,R);return H.position.set(I,N,F),G.add(H),H}const h=(C,R,I,N,F,G,H,K)=>f(new Ne(C,R,I),H,[N,F,G],K);function d(C,R,I,N){const F=new O(...C),G=new O(...R);f(new Ne(I,I,F.distanceTo(G)),N,F.clone().add(G).multiplyScalar(.5).toArray()).lookAt(G)}function p(C){const R=new Ae;R.setAttribute("position",new ee(C.flat(),3)),R.setIndex([0,1,2,0,2,3]),R.computeVertexNormals(),f(R,r,[0,0,0]),C.forEach((I,N)=>d(I,C[(N+1)%C.length],.026,n))}const _=new Yc;_.moveTo(1.99,.42),_.lineTo(1.99,.8),_.lineTo(1.75,.89),_.lineTo(.71,.92),_.lineTo(-1.14,.89),_.lineTo(-1.98,.78),_.lineTo(-1.99,.39),_.lineTo(-1.62,.33);for(const C of[-1.212,1.212]){_.lineTo(C-.353,.29);for(let R=1;R<=12;R++){const I=Math.PI-R*Math.PI/12;_.lineTo(C+Math.cos(I)*.353,.29+Math.sin(I)*.337)}}_.lineTo(1.99,.42);const g=f(new Fr(_,{depth:1.49,bevelSize:.035,bevelThickness:.045,bevelSegments:2,steps:1}),e,[-.745,0,0]);g.rotation.y=Math.PI/2;const m=[-.724,.924,-.75],x=[.724,.924,-.75],M=[-.723,.891,1.13],v=[.723,.891,1.13],y=[-.609,1.414,-.43],b=[.609,1.414,-.43],w=[-.609,1.414,.72],S=[.609,1.414,.72];p([m,x,b,y]),p([v,M,w,S]),p([M,m,y,w]),p([x,v,S,b]),h(1.25,.047,1.2,0,1.423,.145,e);for(const C of[-1,1]){d([C*.72,.915,.16],[C*.618,1.41,.16],.044,e),d([C*.782,.688,-1.83],[C*.782,.688,1.83],.017,n);for(const R of[-.53,.39,1.12])d([C*.783,.426,R],[C*.783,.88,R],.009,s);for(const R of[.035,.91])h(.032,.033,.139,C*.791,.793,R,n);d([C*.74,.925,-1.23],[C*.84,1.021,-1.23],.024,n),C<0&&h(.148,.069,.061,-.846,1.037,-1.23,n),d([C*.6,.935,-.8],[C*.62,.855,-1.92],.013,n)}h(1.44,.228,.035,0,.704,-2.002,n),h(1.38,.192,.023,0,.704,-2.023,s);for(let C=0;C<6;C++)h(1.35,.008,.019,0,.627+C*.03,-2.039,n);h(.085,.09,.022,0,.704,-2.053,u);for(const C of[-1,1]){const R=C*.556;f(new yn(.136,.136,.038,24),n,[R,.712,-2.036]).rotation.x=Math.PI/2,f(new yn(.113,.113,.035,24),a,[R,.712,-2.057]).rotation.x=Math.PI/2,h(.173,.061,.028,R,.528,-2.023,l),h(.234,.128,.035,R,.669,2.014,n),h(.208,.101,.029,R,.669,2.037,c),h(.068,.097,.035,R+C*.066,.669,2.051,l);for(const I of[-2.058,2.047])h(.072,.133,.092,C*.457,.392,I,s)}h(1.62,.079,.112,0,.394,-2.054,n),h(1.62,.079,.112,0,.394,2.043,n),h(.3,.103,.028,0,.535,2.035,s),h(.26,.065,.012,0,.535,2.052,n),d([-.48,.93,-.759],[-.16,.955,-.745],.016,s),d([.12,.93,-.759],[.45,.955,-.745],.016,s);const E=[];for(const C of[-1.212,1.212])for(const R of[-1,1]){const I=new ge;I.position.set(R*.69,.288,C),t.add(I);const N=new ge;I.add(N);const F=(G,H,K,j)=>f(new yn(G,G,H,20),j,[K,0,0],N).rotation.z=Math.PI/2;F(.289,.198,0,o),F(.207,.024,R*.101,e),F(.135,.027,R*.123,n),F(.054,.029,R*.142,s),E.push({pivot:I,wheel:N,steer:C<0})}const T=f(new To(1,28),new Dn({color:"#263137",transparent:!0,opacity:.24,depthWrite:!1}),[0,.031,0]);T.rotation.x=-Math.PI/2,T.scale.set(.96,2.08,1);const P=new ln(49,1,.22,4800),L=new O;return{cameraFor(C,{active:R,yaw:I,speed:N,turn:F,delta:G,terrain:H,angle:K,height:j,distance:St}){if(t.visible=R,!R)return C;const mt=C.position.y-1.45;t.position.set(C.position.x,mt,C.position.z),t.rotation.y=-I;for(const{pivot:pt,wheel:Y,steer:B}of E)B&&(pt.rotation.y=-F*.3),Y.rotation.x-=N*G/.289;t.updateMatrixWorld(!0);const zt=St*Math.max(1,.72/C.aspect);return t.localToWorld(P.position.set(Math.sin(K)*zt,j,Math.cos(K)*zt)),P.position.y=Math.max(P.position.y,H(P.position.x,P.position.z)+1.8),P.lookAt(t.localToWorld(L.set(0,.83,-Math.max(0,Math.cos(K))*1.1))),P.aspect!==C.aspect&&(P.aspect=C.aspect,P.updateProjectionMatrix()),P}}}const Q5=new O(0,1,0),Yl=new O,ba=new O;function Qn(i,t,e,n=[0,0,0]){const s=new oe(t,e);return s.position.set(...n),i.add(s),s}function er(i,t,e){Yl.set(...t),ba.set(...e).sub(Yl),i.position.copy(Yl).addScaledVector(ba,.5),i.scale.y=ba.length(),i.quaternion.setFromUnitVectors(Q5,ba.normalize())}function Qe(i,t,e,n,s){const o=Qn(i,new yn(n,n,1,8),s);return er(o,t,e),o}function j5(i){const t=new ge;t.name="Велосипед с велосипедистом",t.visible=!1,i.add(t);const e=G=>new jt({color:G,flatShading:!0}),n=e("#4ca9ab"),s=e("#1d2b2c"),o=e("#b4c1b8"),r=e("#3b4240"),a=e("#eee1ba"),l=e("#415760"),c=e("#cd9478"),u=e("#e5af59"),f=[0,.345,.54],h=[0,.92,-.38],d=[0,.39,.055],p=[0,.94,.21],_=new ge;_.position.set(...h),t.add(_);const g=.321;function m(G,H){const K=new ge;K.position.set(...H),G.add(K),Qn(K,new Ri(g,.024,8,36),s).rotation.y=Math.PI/2,Qn(K,new Ri(.297,.008,6,36),o).rotation.y=Math.PI/2,Qe(K,[-.047,0,0],[.047,0,0],.017,o);for(let j=0;j<14;j++){const St=j*Math.PI/7;Qe(K,[j%2?.025:-.025,0,0],[0,Math.sin(St)*.295,Math.cos(St)*.295],.0026,o)}return K}const x=m(t,f),M=m(_,[0,-.575,-.17]);Qe(t,d,p,.027,n),Qe(t,d,[0,.78,-.36],.029,n),Qe(t,[0,.85,.195],[0,.86,-.37],.023,n),Qe(t,[0,.77,-.36],h,.036,n);for(const G of[-1,1]){const H=[G*.046,f[1],f[2]];Qe(t,[G*.033,.8,.19],H,.012,n),Qe(t,[G*.036,d[1],d[2]],H,.015,n),Qe(_,[G*.036,-.15,.026],[G*.043,-.575,-.17],.016,n),Qe(_,[0,.095,.042],[G*.34,.125,.13],.014,o),Qe(_,[G*.26,.119,.112],[G*.36,.13,.134],.022,s)}Qe(_,[0,0,0],[0,.095,.042],.022,o),Qn(_,new yn(.028,.031,.025,12),u,[-.23,.146,.103]),Qn(t,new Mn(1,12,8),r,[0,.95,.208]).scale.set(.082,.022,.123),Qe(t,[-.12,d[1],d[2]],[.12,d[1],d[2]],.015,o);const y=[0,1.34,-.074],b=[0,.96,.22],w=Qn(t,new Mn(1,12,8),a,[0,1.16,.065]);w.scale.set(.16,.232,.118),w.rotation.x=-.63,Qn(t,new Mn(1,12,8),l,b).scale.set(.138,.085,.104),Qe(t,[0,1.31,-.087],[0,1.45,-.169],.059,c),Qn(t,new Mn(.093,12,8),c,[0,1.49,-.167]).scale.y=1.11,Qn(t,new Mn(1,14,9),u,[0,1.554,-.178]).scale.set(.113,.075,.121),Qn(t,new Mn(1,12,8),r,[0,1.541,-.271]).scale.set(.093,.017,.041);const P=[-1,1].map(G=>{const H=[G*.118,y[1],y[2]],K=[G*.225,1.17,-.16],j=[G*.31,1.05,-.25],St=[G*.095,b[1],b[2]],mt=[G*.14,.71,-.21],zt=[G*.12,d[1],d[2]];return{side:G,elbow:K,forearm:Qe(t,K,j,.031,c),sleeve:Qe(t,H,K,.045,a),thigh:Qe(t,St,mt,.057,l),shin:Qe(t,mt,zt,.041,l),crankArm:Qe(t,[G*.085,d[1],d[2]],zt,.012,o),shoe:Qn(t,new Ne(.084,.058,.163),r,zt)}}),L=Qn(t,new To(1,22),new Dn({color:"#203138",transparent:!0,opacity:.16,depthWrite:!1}),[0,.027,0]);L.rotation.x=-Math.PI/2,L.scale.set(.245,.87,1);const C=new ln(52,1,.18,4800),R=new O,I=new O;let N=0,F=0;return{cameraFor(G,{active:H,yaw:K,speed:j,turn:St,delta:mt,terrain:zt,angle:pt,height:Y,distance:B}){if(t.visible=H,!H)return G;t.position.set(G.position.x,G.position.y-1.65+.12,G.position.z),t.rotation.y=-K,_.rotation.y=-St*.34,_.updateMatrix();const Z=j*mt/(g+.024);N=(N-Z)%(Math.PI*2),F=(F-Z*.4)%(Math.PI*2),x.rotation.x=M.rotation.x=N;for(const{side:vt,elbow:z,forearm:st,thigh:dt,shin:X,crankArm:it,shoe:at}of P){I.set(vt*.316,.125,.126).applyMatrix4(_.matrix),er(st,z,I.toArray());const V=F+(vt>0?Math.PI:0),W=[vt*.123,d[1]+.143*Math.cos(V),d[2]+.143*Math.sin(V)],_t=[vt*.143,.68+.078*Math.cos(V),-.216+.035*Math.sin(V)];er(dt,[vt*.095,b[1],b[2]],_t),er(X,_t,W),er(it,[vt*.085,d[1],d[2]],W),at.position.set(W[0],W[1]+.018,W[2]-.038)}t.updateMatrixWorld(!0);const rt=B*.59*Math.max(1,.62/G.aspect);return t.localToWorld(C.position.set(Math.sin(pt)*rt,Y*.68,Math.cos(pt)*rt)),C.position.y=Math.max(C.position.y,zt(C.position.x,C.position.z)+1.4),C.lookAt(t.localToWorld(R.set(0,.8,-Math.max(0,Math.cos(pt))*.52))),C.aspect!==G.aspect&&(C.aspect=G.aspect,C.updateProjectionMatrix()),C}}}const ju=1.4;function _0(i,t){const e=Math.min(ju,Math.max(-ju,t));return[Math.sin(i)*Math.cos(e),Math.sin(e),-Math.cos(i)*Math.cos(e)]}function Ec(i,t,e,n){return Math.min(Math.max(n,t),Math.max(Math.min(e,t),i))}function tf({position:i,yaw:t,pitch:e,longitudinal:n,lateral:s,distance:o,ground:r,clearance:a,ceiling:l=1/0,bounds:c}){let[u,f,h]=i;const d=Math.hypot(n,s);if(!d||!(o>0))return[u,f,h];const[p,_,g]=_0(t,e),m=[(p*n+Math.cos(t)*s)/d,_*n/d,(g*n+Math.sin(t)*s)/d],x=Math.max(l,f),M=Math.max(1,Math.ceil(o/4));for(let v=0;v<M;v++){const y=u,b=h;if(u+=m[0]*o/M,h+=m[2]*o/M,c){const[w,S,E,T]=c;u=Ec(u,y,w,E),h=Ec(h,b,S,T)}f=Math.min(x,Math.max(r(u,h)+a,f+m[1]*o/M))}return[u,f,h]}function t4(i,t,[e,n,s,o]){let r=0,a=1/0;for(const[l,c,u,f]of[[i[0],t[0],e,s],[i[2],t[2],n,o]]){if(Math.abs(c)<1e-9){if(l<u||l>f)return null;continue}const h=(u-l)/c,d=(f-l)/c;r=Math.max(r,Math.min(h,d)),a=Math.min(a,Math.max(h,d))}return r<=a?[r,a]:null}function e4(i,t,{ground:e,bounds:n,near:s,far:o}){const r=Math.max(1,i[1]-e(i[0],i[2])),a=n4(i,t,e,o)??r/Math.max(.05,-t[1]);let l=Math.min(o,Math.max(s,a));const c=n&&t4(i,t,n);return c&&c[1]>=s&&(l=Math.min(Math.max(l,c[0],s),c[1],o)),l}function n4(i,t,e,n){const s=a=>i[1]+t[1]*a-e(i[0]+t[0]*a,i[2]+t[2]*a);let o=0,r=0;for(let a=0;a<96&&r<n;a++){if(r=Math.min(n,o+Math.max(1.5,s(o)*.7)),s(r)<=0){for(let l=0;l<12;l++){const c=(o+r)/2;s(c)>0?o=c:r=c}return r}o=r}return null}const is=document.querySelector("#world"),ef=document.querySelector("#status"),nr=i=>[...document.querySelectorAll(`[data-${i}]`)].filter(t=>t instanceof HTMLButtonElement),nf=(i,t)=>{for(const e of nr(i))e.setAttribute("aria-pressed",String(e.dataset[i]===t))};async function sf(i){const t=await fetch(`./data/${i}.json`);if(!t.ok)throw new Error(`Не удалось загрузить ${i} (${t.status}).`);return t.json()}function i4(i,t){const{Vector3:e,MathUtils:n}=eh,s=G5(is,i,t),o=X5(i.roads),r=K5(),a=J5(s.scene),l=j5(s.scene),c=new ln(46,1,.35,4800),u=new r_(c,is),f=matchMedia("(prefers-reduced-motion: reduce)").matches;u.enableDamping=!f,u.dampingFactor=.13,u.minDistance=28,u.maxDistance=3300,u.maxPolarAngle=Math.PI*.48,u.zoomSpeed=.8,u.screenSpacePanning=!1;const[h,d,p,_]=i.bounds,g=[h,d,p,_],[m,x]=i.origin,[M,v]=i.scale,y=document.querySelector("#compass"),b=document.querySelector("#coordinates"),w=document.querySelector("#vehicle-speed"),S=document.querySelector("#cartoon-style"),E=document.querySelector("#vehicle-view"),T=document.querySelector("#superman-flight"),P=document.querySelector("#mode-help"),L=document.querySelector("#places"),C=document.querySelector("#venues"),R=document.querySelector("#pins"),I={orbit:"Стрелки или WASD — лететь. Shift — ускорение. Тяните, чтобы повернуть карту. Колесо — масштаб.",walk:"WASD или стрелки — идти. Shift — бег. Тяните по сцене, чтобы оглянуться.",bike:"Стрелки или WASD — движение и руль. V — сменить камеру. На лестнице — пешком.",car:"↑/↓ или W/S — газ и задний ход. ←/→ или A/D — руль. V — сменить камеру.",map:"Север вверху. Тяните карту, чтобы сдвинуть её.",superman:"WASD или стрелки — лететь туда, куда смотрите: вверх — набор высоты, вниз — снижение. Тяните, чтобы оглянуться."},N=3,F=1.8,G=3400,H={walk:{eye:1.75,fov:68},bike:{eye:1.65,fov:70,speed:6.8,reverse:2.2,steer:1.9},car:{eye:1.45,fov:73,speed:10.5,reverse:3.1,steer:1.6}},K={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},j=[{id:"paintedWaterfront",name:"Парк-отель — Анапа-Океан",position:[-376,-15],walk:{position:[-348,-36],look:[-278,-43]}},{id:"upperWaterfront",name:"Верхняя набережная",position:[-348,-13],walk:{position:[-349,-19.4],look:[-265,-22]}},{id:"lowerWaterfront",name:"Нижняя набережная",position:[-348,-36],look:[-278,-43]},{id:"queuePavilion",name:"Лаундж-зона Qúeue",position:[-412.5,-21.7],walk:{position:[-414,-12],look:[-412,-21.7]}},{id:"pearlFountain",name:"Жемчужина Анапы",position:[-238,2],walk:{position:[-255,-5],look:[-238,2]}},{id:"gorgMuseum",name:"Музей «Горгиппия»",position:[-282,17],walk:{position:[-282,9],look:[-282,17],pitch:.17}},{id:"oldAnapa",name:"Старинная Анапа",position:[-503.2,-11.6],walk:{position:[-506,-38],look:[-503.2,-11.6],pitch:.13}},{id:"cityCourt",name:"Анапский городской суд",position:[-626,51],walk:{position:[-614,43],look:[-626,51],pitch:.1}},{id:"prestige",name:"Бизнес-центр «Престиж»",position:[-605,95.5],walk:{position:[-594,110],look:[-605,95.5],pitch:.1}},{id:"leninStreet",name:"Улица Ленина",position:[-636.1,0],walk:{position:[-636.1,0],look:[-646.63,-15.23],pitch:0}},{id:"marina",name:"Яхтенная марина",position:[-482,-107],walk:{position:[-452,-76],look:[-482,-107],pitch:-.1}}],mt=["paintedWaterfront","lighthouse","malaya","port","marina","ocean","oldAnapa","upperWaterfront","lowerWaterfront","queuePavilion","gorgippia","gorgMuseum","parkHotel","sails","pearlFountain","gates","beach","cityCourt","prestige","leninStreet"].map(Q=>{const wt=i.landmarks.find(re=>re.id===Q)??j.find(re=>re.id===Q);if(Q==="parkHotel")return{...wt,walk:{position:[-167,-27],look:[-169,-7.5],pitch:.58}};if(Q==="ocean")return{...wt,walk:{position:[-591.8,-23],look:[-587.5,-17.2],pitch:.45}};if(wt?.id!=="sails")return wt;const[Tt,Ot]=lo,Bt=x-Ot/v,ie=m+Tt/M;return{...wt,position:lo,pinHeight:5.85,walk:{position:[-306,-22],look:lo},osm:`https://www.openstreetmap.org/#map=19/${Bt.toFixed(6)}/${ie.toFixed(6)}`}}).filter(Boolean),zt={lighthouse:{aim:[-9,0],offset:[-146,115,102]},malaya:{aim:[-34,35],offset:[-219,151,-43]},ocean:{aim:[7,-6],offset:[-93,103,-176],raise:14},marina:{aim:[0,0],offset:[-35,62,-90],mapAltitude:135},oldAnapa:{aim:[0,0],offset:[-17,15,-33],raise:3,mapAltitude:65},paintedWaterfront:{aim:[0,0],offset:[-55,240,-290],mapAltitude:465},upperWaterfront:{aim:[12,-10],offset:[-58,100,-155],mapAltitude:275},lowerWaterfront:{aim:[12,4],offset:[6,58,-118],mapAltitude:220},queuePavilion:{aim:[0,0],offset:[14,24,-46],mapAltitude:65},pearlFountain:{aim:[0,0],offset:[-11,16,-30],mapAltitude:52},gorgippia:{aim:[40,3],offset:[-13,94,-79],mapAltitude:127},gorgMuseum:{aim:[0,0],offset:[5,16,-28],mapAltitude:46},parkHotel:{aim:[-5,-6],offset:[-97,91,-155],raise:6},sails:{aim:[15,-1],offset:[13,31,-49],mapAltitude:69}},pt={"Верхний ярус":[{id:"laVeranda",name:"La Veranda",position:[-595.6,-28.8],walk:{position:[-606,-53],look:[-606,-23],pitch:.13}},{id:"matsoni",name:"Мацони",position:[-586,46],walk:{position:[-605,48],look:[-586,46],pitch:.1}},{...j.find(Q=>Q.id==="queuePavilion"),id:"queueCafe",name:"Qúeue"},{id:"more",name:"Море. Истории о еде",position:[-533,-25],walk:{position:[-533,-35],look:[-533,-25],pitch:.08}},{id:"barBQ",name:"BAR BQ",position:[-456.65,14],walk:{position:[-450,14],look:[-456.65,14],pitch:.08}}],"Нижний ярус":[{id:"captainCafe",name:"Капитан",position:[-530,-67],walk:{position:[-534.4,-79.5],look:[-530,-67],pitch:.15}},{id:"adrian",name:"Adrian Bistro",position:[-358,-30.5],walk:{position:[-359.7,-37.4],look:[-358,-30.5],pitch:.1}},{id:"bavaria",name:"Bavaria",position:[-342.2,-30.9],walk:{position:[-340,-38.1],look:[-342.2,-30.9],pitch:.13}},{id:"prichal",name:"Причал",position:[-303,-34.35],walk:{position:[-302,-40.2],look:[-303,-34.35],pitch:.2}},{id:"khinkal",name:"Хинкальная",position:[-267.5,-38.45],walk:{position:[-267.5,-44.35],look:[-267.5,-38.45],pitch:.18}},{id:"parokhod",name:"Пароходъ",position:[-229.8,-52.4],walk:{position:[-232.74,-59.75],look:[-229.8,-52.4],pitch:.34}},{id:"wineSea",name:"Вино и море",position:[-175,-54],walk:{position:[-184,-48],look:[-175,-54],pitch:.2}}]};zt.queueCafe=zt.queuePavilion,zt.more={aim:[0,0],offset:[-13,17,-34],raise:1.3,mapAltitude:67},zt.laVeranda={aim:[0,0],offset:[-12,16,-28],raise:2,mapAltitude:52},zt.matsoni={aim:[0,0],offset:[-24,15,3],raise:2,mapAltitude:52},zt.barBQ={aim:[0,0],offset:[25,11,-14],raise:1.3,mapAltitude:58};for(const Q of pt["Нижний ярус"])zt[Q.id]={aim:[0,0],offset:[-9,12,-32],raise:1.8,mapAltitude:60};zt.wineSea.offset=[-27,13,-12];const Y=i.landmarks.find(Q=>Q.id==="gorgippia")?.position??[(h+p)/2,(d+_)/2],B=i.landmarks.find(Q=>Q.id==="lighthouse")?.position??Y,Z=new e,rt=new e,vt=new e,z=new e,st=new e,dt=new Set,X=new Map,it=new Set,at=new Map,V=[];let W="orbit",_t=null,ht=0,yt=0,Rt=0,k=0,Jt=!1;const Kt=()=>W==="orbit"&&Jt,U=new Set,A=()=>U.has(W);let J=-.43,nt=2.8,ct=5.9,bt=null,At="";function lt(Q,wt){const Tt=(x-wt/v).toFixed(5),Ot=(m+Q/M).toFixed(5),Bt=`${Tt}/${Ot}`;Bt!==At&&(At=Bt,b.textContent=`${Tt}° N  ${Ot}° E`,b.href=`https://www.openstreetmap.org/#map=18/${Bt}`,b.title="Показать эту точку в OpenStreetMap")}function ft(Q,wt=!1){const Tt=wt?zt[_t?.id]:void 0,Ot=W==="orbit"||Tt?.mapAltitude?Tt:void 0,Bt=Q[0]+(Ot?.aim[0]??0),ie=Q[1]+(Ot?.aim[1]??0),re=s.terrain(Bt,ie)+(Ot?.raise??0);if(u.target.set(Bt,re,ie),st.copy(u.target),W==="map"){const fe=(Ot?.mapAltitude??(wt?440:1220))/Math.min(1,c.aspect*(Ot?.mapAltitude?.7:1.2));c.position.set(Bt,re+Math.min(3200,fe),ie+.1)}else{const fe=1/Math.min(1,c.aspect*(Ot?.mapAltitude?.67:1.4)),[_e,Me,Ce]=Ot?.offset??(wt?[-148,150,-209]:[-345,350,-485]);c.position.set(Bt+_e*fe,re+Me*fe,ie+Ce*fe)}u.update(),Kt()&&Lt()}function Lt(){ht=-u.getAzimuthalAngle(),yt=n.clamp(u.getPolarAngle()-Math.PI/2,-1.33,1.33)}function qt(Q){const wt=e4(c.position.toArray(),Q,{ground:s.terrain,bounds:g,near:u.minDistance,far:u.maxDistance});u.target.fromArray(Q).multiplyScalar(wt).add(c.position),st.copy(u.target),u.update()}function Dt(Q){W==="orbit"&&Q&&Lt(),Jt=Q,T.setAttribute("aria-pressed",String(Q)),W==="orbit"&&(u.enabled=!Q,bt=null,Q||(qt(_0(ht,Math.min(yt,-.15))),c.fov=46,c.updateProjectionMatrix()),ut())}function Et(Q,wt){if(W==="bike"&&o.bicycleAt(Q,wt)==="blocked")return null;const Tt=W==="car"?o.carAt(Q,wt):null;if(W==="car"&&!Tt)return null;const Ot=s.walkHeight(Q,wt);return Ot===null||!Tt?Ot:Ot+(Tt.bridge?.85:.31)}function Yt([Q,wt],Tt){let Ot=null,Bt=1/0;const ie=s.terrain(Q,wt);for(const{points:re,kind:fe}of i.roads)if(["footway","pedestrian","path","living_street","steps"].includes(fe))for(let _e=1;_e<re.length;_e++){const[Me,Ce]=re[_e-1],[Un,wn]=re[_e],Yi=Un-Me,Ls=wn-Ce,Po=Yi*Yi+Ls*Ls;if(Po<.01||Tt&&fe!=="pedestrian")continue;const sl=((Q-Me)*Yi+(wt-Ce)*Ls)/Po,Br=Math.sqrt(Po);for(const D of Tt?[-42,-30,30,42]:[0,-8,8]){const q=n.clamp(sl+D/Br,0,1),ot=Me+Yi*q,tt=Ce+Ls*q,et=Math.hypot(ot-Q,tt-wt);if(et<(Tt?24:5)||et>90)continue;const It=et+(Tt?4*Math.abs(s.terrain(ot,tt)-ie):0);It>=Bt||Et(ot,tt)!==null&&(Tt&&![4,10,18].every(kt=>Et(ot+(Q-ot)*kt/et,tt+(wt-tt)*kt/et)!==null)||(Bt=It,Ot=[ot,tt]))}}return Ot}function Qt(Q,wt){const[Tt,Ot]=wt?.look??Q;let Bt=wt&&Et(...wt.position)!==null?wt.position:null;Bt??=Yt(Q,Q===B)??Yt(Q,!1);for(let re=4;!Bt&&re<=96;re+=4)for(let fe=0;!Bt&&fe<Math.PI*2;fe+=Math.PI/8){const _e=Tt+Math.cos(fe)*re,Me=Ot+Math.sin(fe)*re;Et(_e,Me)!==null&&(Bt=[_e,Me])}if(!Bt)return!1;c.position.set(Bt[0],Et(...Bt)+H[W].eye,Bt[1]),ht=Math.atan2(Tt-Bt[0],Bt[1]-Ot);const ie=s.terrain(Tt,Ot)+(Q===B?9:1.6);return yt=wt?.pitch??n.clamp(Math.atan2(ie-c.position.y,Math.hypot(Tt-Bt[0],Ot-Bt[1])),-.22,.32),!0}function ne(Q){const wt=o.nearestCarStart(Q,Et);if(!wt)return!1;const{x:Tt,z:Ot,height:Bt,heading:ie}=wt;ht=ie+(Math.cos(ht-ie)<0?Math.PI:0);const re=wn=>Et(Tt+Math.sin(ht)*wn,Ot-Math.cos(ht)*wn),fe=wn=>[1.5,3,5].find(Yi=>re(Yi*wn)===null)??6;fe(-1)>fe(1)&&(ht+=Math.PI);const _e=2.04,Me=Math.sin(ht)*_e,Ce=-Math.cos(ht)*_e,Un=Et(Tt+Me,Ot+Ce);return yt=0,Et(Tt-Me,Ot-Ce)===null&&Un!==null?c.position.set(Tt+Me,Un+H.car.eye,Ot+Ce):c.position.set(Tt,Bt+H.car.eye,Ot),!0}function $(Q){_t=Q,Rt=0;for(const[wt,Tt]of at)Tt.setAttribute("aria-pressed",String(wt===Q?.id));for(const{marker:wt,place:Tt}of V)wt.classList.toggle("selected",Tt===Q);if(W==="car")ne(Q?.position??Y);else if(H[W]){const wt=Q?.id==="gorgippia"?tv:Q?.walk??(Q?.look?Q:null);Qt(Q?.position??B,wt)||Qt(B)}else ft(Q?.position??Y,!!Q)}function Ct(Q){const wt=H[W]?[c.position.x,c.position.z]:null;if(W=Q,bt=null,Rt=0,dt.clear(),X.clear(),it.clear(),u.enabled=!H[Q]&&!Kt(),u.enableRotate=Q==="orbit",u.mouseButtons.LEFT=Q==="map"?Vi.PAN:Vi.ROTATE,u.touches.ONE=Q==="map"?wi.PAN:wi.ROTATE,u.touches.TWO=wi.DOLLY_PAN,u.minPolarAngle=0,u.maxPolarAngle=Q==="map"?1e-4:Math.PI*.48,c.fov=H[Q]?.fov??46,c.updateProjectionMatrix(),document.body.dataset.mode=Q,w.hidden=Q!=="bike"&&Q!=="car",T.hidden=Q!=="orbit",ut(),nf("mode",Q),wt&&H[Q]){if(Q==="car"&&ne(wt))return;const Tt=Et(...wt);if(Tt!==null){c.position.y=Tt+H[Q].eye;return}}$(_t)}mt.forEach((Q,wt)=>{const Tt=document.createElement("button");Tt.type="button",Tt.className="place",Tt.setAttribute("aria-pressed","false");const Ot=document.createElement("span");Ot.className="place-index",Ot.textContent=String(wt+1).padStart(2,"0"),Ot.setAttribute("aria-hidden","true");const Bt=document.createElement("span");if(Bt.className="place-name",Bt.textContent=Q.name,Tt.append(Ot,Bt),Tt.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,$(Q)}),L.append(Tt),at.set(Q.id,Tt),!Q.osm)return;const ie=document.createElement("a");ie.className="map-pin",ie.href=Q.osm,ie.target="_blank",ie.rel="noopener noreferrer",ie.setAttribute("aria-label",`${Q.name} в OpenStreetMap`),ie.title=`${Q.name} в OpenStreetMap`;const re=document.createElement("span");re.textContent=Ot.textContent;const fe=document.createElement("strong");fe.textContent=Q.name,ie.append(re,fe),R.append(ie),V.push({marker:ie,place:Q})});for(const[Q,wt]of Object.entries(pt)){const Tt=document.createElement("h3");Tt.textContent=Q,C.append(Tt);for(const Ot of wt){const Bt=document.createElement("button");Bt.type="button",Bt.className="place",Bt.setAttribute("aria-pressed","false"),Bt.textContent=Ot.name,Bt.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,$(Ot)}),C.append(Bt),at.set(Ot.id,Bt)}}for(const Q of nr("mode"))Q.addEventListener("click",()=>Ct(Q.dataset.mode));S.addEventListener("click",()=>{const Q=S.getAttribute("aria-pressed")!=="true";S.setAttribute("aria-pressed",String(Q)),s.setCartoon(Q)});function ut(){E.hidden=W!=="bike"&&W!=="car",E.setAttribute("aria-pressed",String(A())),E.textContent=A()?W==="car"?"Камера из салона":"Камера от первого лица":"Камера снаружи",P.textContent=A()?"Стрелки или WASD — езда. Тяните по сцене, чтобы повернуть камеру. V — вид от первого лица.":I[Kt()?"superman":W]}function Pt(){A()?U.delete(W):U.add(W),ut()}E.addEventListener("click",Pt),T.addEventListener("click",()=>Dt(!Jt));function Nt(Q){nf("light",Q),s.light(Q)}for(const Q of nr("light"))Q.addEventListener("click",()=>Nt(Q.dataset.light));for(const Q of nr("action"))Q.addEventListener("click",()=>{const wt=Q.dataset.action;if(wt==="reset"){$(mt.find(Bt=>Bt.id==="paintedWaterfront"));return}const Tt=wt==="zoom-in";if(A()){ct=n.clamp(ct+(Tt?-1:1),3.8,9);return}if(H[W]||Kt()){c.fov=n.clamp(c.fov+(Tt?-8:8),42,82),c.updateProjectionMatrix();return}Z.copy(c.position).sub(u.target);const Ot=n.clamp(Z.length()*(Tt?.75:1.33),u.minDistance,u.maxDistance);c.position.copy(u.target).add(Z.setLength(Ot)),u.update()});for(const Q of nr("move")){const wt=Q.dataset.move;Q.addEventListener("pointerdown",Tt=>{Tt.pointerType==="touch"&&Tt.preventDefault(),Q.setPointerCapture(Tt.pointerId),X.set(Tt.pointerId,wt),it.add(wt)});for(const Tt of["pointerup","pointercancel","lostpointercapture"])Q.addEventListener(Tt,Ot=>X.delete(Ot.pointerId));Q.addEventListener("click",Tt=>{Tt.detail===0&&it.add(wt)}),Q.addEventListener("contextmenu",Tt=>Tt.preventDefault())}is.addEventListener("pointerdown",Q=>{!(H[W]||Kt())||bt!==null||(bt={id:Q.pointerId,x:Q.clientX,y:Q.clientY},is.setPointerCapture(bt.id))}),is.addEventListener("pointermove",Q=>{if(Q.pointerId!==bt?.id)return;const wt=Q.clientX-bt.x,Tt=Q.clientY-bt.y;A()?(J-=wt*.009,nt=n.clamp(nt+Tt*.018,1.55,6)):(ht+=wt*.003,yt=n.clamp(yt-Tt*.003,-1.33,1.33)),bt.x=Q.clientX,bt.y=Q.clientY});for(const Q of["pointerup","pointercancel","lostpointercapture"])is.addEventListener(Q,wt=>{bt?.id===wt.pointerId&&(bt=null)});window.addEventListener("keydown",Q=>{const wt=K[Q.code],Tt=(W==="walk"||W==="orbit")&&(Q.code==="ShiftLeft"||Q.code==="ShiftRight"),Ot=(W==="car"||W==="bike")&&Q.code==="KeyV";if(!(W==="map"||!wt&&!Tt&&!Ot||Q.defaultPrevented||Q.isComposing||Q.altKey||Q.ctrlKey||Q.metaKey)&&!(Q.target instanceof HTMLElement&&(Q.target.isContentEditable||Q.target.matches("input, select, textarea")))){if(Ot){Q.preventDefault(),Q.repeat||Pt();return}dt.add(Q.code),wt&&(Q.preventDefault(),Q.repeat||it.add(wt))}}),window.addEventListener("keyup",Q=>dt.delete(Q.code)),window.addEventListener("blur",()=>{dt.clear(),X.clear(),it.clear(),Rt=0,bt=null});function xt(){const Q=Math.max(1,is.clientWidth),wt=Math.max(1,is.clientHeight);s.renderer.setSize(Q,wt,!1),c.aspect=Q/wt,c.updateProjectionMatrix()}function $t(){const Q=new Set(it);for(const wt of dt)K[wt]&&Q.add(K[wt]);for(const wt of X.values())Q.add(wt);return[Number(Q.has("forward"))-Number(Q.has("back")),Number(Q.has("right"))-Number(Q.has("left"))]}function Vt(Q,wt,Tt,Ot){const Bt=c.position,ie=W==="car"?.65:.4,re=Math.max(1,Math.ceil(Math.hypot(Q,wt)/.15));function fe(_e,Me){const Ce=Et(_e,Me);return Ce===null||Math.abs(Ce-Tt)>ie?!1:(Bt.x=_e,Bt.z=Me,Tt=Ce,!0)}for(let _e=0;_e<re;_e++)if(Ot)fe(Bt.x+Q/re,Bt.z),fe(Bt.x,Bt.z+wt/re);else if(!fe(Bt.x+Q/re,Bt.z+wt/re)){Rt=0;break}return Tt}function Re(Q){const[wt,Tt]=$t();k=Tt;const Ot=c.position,Bt=H[W];let ie=Et(Ot.x,Ot.z);if(W==="walk"&&(wt||Tt)){const re=dt.has("ShiftLeft")||dt.has("ShiftRight"),_e=(it.size?.46:(re?7.8:4.8)*Q)/Math.hypot(Tt,wt),Me=(Math.sin(ht)*wt+Math.cos(ht)*Tt)*_e,Ce=(-Math.cos(ht)*wt+Math.sin(ht)*Tt)*_e;ie=Vt(Me,Ce,ie,!0)}else if(W!=="walk"){const re=W==="bike"&&o.bicycleAt(Ot.x,Ot.z)==="push",fe=re?2:Bt.speed,_e=wt*(wt<0?Math.min(fe,Bt.reverse):fe),Me=it.size?Math.max(Q,.06):Q;Rt=n.clamp(n.damp(Rt,_e,_e===0?12:5,Me),-fe,fe);const Ce=Rt<-.1;ht+=Tt*Bt.steer*Me*(Ce?-1:1);const Un=Rt*Me;Math.abs(Un)>1e-4&&(ie=Vt(Math.sin(ht)*Un,-Math.cos(ht)*Un,ie,re));const wn=`${Math.round(Math.abs(Rt)*3.6)} км/ч${re?" · пешком":""}`;w.textContent!==wn&&(w.textContent=wn)}ie!==null&&(Ot.y=n.damp(Ot.y,ie+Bt.eye,18,Q)),rt.set(Math.sin(ht)*Math.cos(yt),Math.sin(yt),-Math.cos(ht)*Math.cos(yt)),c.lookAt(rt.add(c.position))}function ve(Q){const[wt,Tt]=$t(),Ot=c.position;if(wt||Tt){const Bt=Ot.y-s.terrain(Ot.x,Ot.z),ie=n.clamp(Bt*.38,3,180)*5;Ot.fromArray(tf({position:Ot.toArray(),yaw:ht,pitch:yt,longitudinal:wt,lateral:Tt,distance:ie*(it.size?Math.max(Q,.08):Q),ground:s.terrain,clearance:F,ceiling:G,bounds:g}))}rt.fromArray(_0(ht,yt)),c.lookAt(rt.add(Ot))}function Hn(Q){if(Kt()){ve(Q);return}if(u.update(),W==="orbit"&&(dt.size||it.size||X.size)){const[Bt,ie]=$t();if(Bt||ie){const re=dt.has("ShiftLeft")||dt.has("ShiftRight"),fe=n.clamp(c.position.distanceTo(u.target)*.38,12,180)*(re?5:1),_e=Z.subVectors(u.target,c.position).normalize().toArray(),Me=u.target.x-c.position.x,Ce=u.target.z-c.position.z;c.position.fromArray(tf({position:c.position.toArray(),yaw:-u.getAzimuthalAngle(),pitch:u.getPolarAngle()-Math.PI/2,longitudinal:Bt,lateral:ie,distance:fe*(it.size?Math.max(Q,.08):Q),ground:s.terrain,clearance:N,ceiling:G,bounds:[h-Me,d-Ce,p-Me,_-Ce]})),qt(_e)}}const wt=Ec(u.target.x,st.x,h,p),Tt=Ec(u.target.z,st.z,d,_);c.position.x+=wt-u.target.x,c.position.z+=Tt-u.target.z,u.target.x=wt,u.target.z=Tt,st.copy(u.target);const Ot=s.terrain(c.position.x,c.position.z)+N-c.position.y;Ot>0&&(c.position.y+=Ot,u.target.y+=Ot)}xt(),window.addEventListener("resize",xt),Ct("orbit");const bn=new URLSearchParams(window.location.search),il=[...mt,...Object.values(pt).flat()];$(il.find(Q=>Q.id===bn.get("place"))??mt[0]);const Or=bn.get("mode");["map","walk","bike","car"].includes(Or)&&Ct(Or),bn.get("light")==="sunset"&&Nt("sunset"),bn.get("camera")==="outside"&&(W==="bike"||W==="car")&&Pt();let Co=performance.now();s.renderer.setAnimationLoop(Q=>{const wt=Math.min((Q-Co)/1e3,.05);Co=Q,H[W]?Re(wt):Hn(wt),it.clear(),c.getWorldDirection(vt);const Tt=W==="map"?0:-Math.atan2(vt.x,-vt.z);y.style.setProperty("--north",`${Tt}rad`);const Ot=H[W]||Kt()?c.position:u.target;lt(Ot.x,Ot.z);for(const{marker:Me,place:Ce}of V){const[Un,wn]=Ce.position;z.set(Un,s.terrain(Un,wn)+(Ce.pinHeight??1.2),wn).project(c),Me.hidden=!!H[W]||z.z<-1||z.z>1||Math.abs(z.x)>.97||Math.abs(z.y)>.92,Me.hidden||(Me.style.left=`${(z.x+1)*50}%`,Me.style.top=`${(1-z.y)*50}%`)}const Bt=f?0:Q/1e3,ie=A(),re={yaw:ht,speed:Rt,turn:k,delta:wt,terrain:s.terrain,angle:J,height:nt,distance:ct},fe=a.cameraFor(c,{...re,active:W==="car"&&ie}),_e=l.cameraFor(fe,{...re,active:W==="bike"&&ie});s.render(_e,Bt),r.render(s.renderer,{mode:ie?"":W,aspect:c.aspect,turn:k,speed:Rt,time:Bt,delta:wt,reducedMotion:f})})}let of="Не удалось загрузить данные Анапы. Перезагрузите страницу.";try{const[i,t]=await Promise.all([sf("anapa"),sf("elevation")]);i.scale??=[111320*Math.cos(ue.degToRad(i.origin[1])),111132],of="Не удалось открыть 3D-карту. Проверьте, доступен ли WebGL 2, и перезагрузите страницу.",i4(i,t),ef.hidden=!0}catch(i){console.error(i),ef.textContent=of}
