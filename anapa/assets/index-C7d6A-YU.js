(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Ic="186",Wi={ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uf=0,jl=1,ff=2,sr=1,df=2,oo=3,ui=0,fn=1,en=2,Ti=0,co=1,_o=2,t0=3,e0=4,pf=5,ws=100,mf=101,gf=102,_f=103,xf=104,vf=200,Mf=201,yf=202,Sf=203,b0=204,w0=205,bf=206,wf=207,Ef=208,Tf=209,Af=210,Rf=211,Cf=212,Pf=213,Lf=214,ka=0,Ga=1,Ha=2,xo=3,Va=4,Wa=5,Xa=6,qa=7,Nr=0,Df=1,If=2,fi=0,E0=1,T0=2,A0=3,R0=4,C0=5,P0=6,L0=7,D0=300,us=301,Cs=302,or=303,Ca=304,Fr=306,vr=1e3,li=1001,Ps=1002,Ye=1003,Or=1004,Yo=1005,un=1006,Pa=1007,as=1008,kn=1009,I0=1010,U0=1011,vo=1012,Uc=1013,di=1014,ti=1015,pi=1016,Nc=1017,Fc=1018,Mo=1020,N0=35902,F0=35899,O0=1021,B0=1022,ei=1023,Li=1026,cs=1027,Oc=1028,Bc=1029,fs=1030,zc=1031,kc=1033,rr=33776,ar=33777,cr=33778,lr=33779,Ya=35840,$a=35841,Za=35842,Ka=35843,Ja=36196,Qa=37492,ja=37496,tc=37488,ec=37489,Mr=37490,nc=37491,ic=37808,sc=37809,oc=37810,rc=37811,ac=37812,cc=37813,lc=37814,hc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,_c=36492,xc=36494,vc=36495,Mc=36283,yc=36284,yr=36285,Sc=36286,Uf=3200,Sr=0,Nf=1,Bi="",Ke="srgb",br="srgb-linear",wr="linear",be="srgb",La=7680,Ff=519,Of=512,Bf=513,zf=514,Gc=515,kf=516,Gf=517,Hc=518,Hf=519,z0=35044,Vf=35048,n0="300 es",hi=2e3,yo=2001;function tp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wf(){const i=Er("canvas");return i.style.display="block",i}const mh={};function Tr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Xf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function te(...i){i=Xf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function pe(...i){i=Xf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ts(...i){const t=i.join(" ");t in mh||(mh[t]=!0,te(...i))}function ep(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const np={[ka]:Ga,[Ha]:Xa,[Va]:qa,[xo]:Wa,[Ga]:ka,[Xa]:Ha,[qa]:Va,[Wa]:xo};class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const hr=Math.PI/180,Ar=180/Math.PI;function Ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function k0(i,t){return(i%t+t)%t}function ip(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function sp(i,t,e){return i!==t?(e-i)/(t-i):0}function ur(i,t,e){return(1-e)*i+e*t}function op(i,t,e,n){return ur(i,t,1-Math.exp(-e*n))}function rp(i,t=1){return t-Math.abs(k0(i,t*2)-t)}function ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function lp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function hp(i,t){return i+Math.random()*(t-i)}function up(i){return i*(.5-Math.random())}function fp(i){i!==void 0&&(gh=i);let t=gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dp(i){return i*hr}function pp(i){return i*Ar}function mp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function gp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _p(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xp(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ue={DEG2RAD:hr,RAD2DEG:Ar,generateUUID:Ai,clamp:le,euclideanModulo:k0,mapLinear:ip,inverseLerp:sp,lerp:ur,damp:op,pingpong:rp,smoothstep:ap,smootherstep:cp,randInt:lp,randFloat:hp,randFloatSpread:up,seededRandom:fp,degToRad:dp,radToDeg:pp,isPowerOfTwo:mp,ceilPowerOfTwo:gp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:xp,normalize:Ee,denormalize:ci};var mo;let vt=(mo=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mo.prototype.isVector2=!0,mo);class qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=o[r+0],d=o[r+1],m=o[r+2],_=o[r+3];if(f!==_||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*_;g<0&&(u=-u,d=-d,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const x=Math.acos(g),M=Math.sin(x);p=Math.sin(p*x)/M,a=Math.sin(a*x)/M,l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+_*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+_*a;const x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],m=o[r+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),u=l(n/2),d=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}var go;let B=(go=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go.prototype.isVector3=!0,go);const ll=new B,_h=new qi,uh=class uh{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],M=s[4],v=s[7],S=s[2],y=s[5],w=s[8];return o[0]=r*_+a*x+l*S,o[3]=r*g+a*M+l*y,o[6]=r*p+a*v+l*w,o[1]=c*_+h*x+f*S,o[4]=c*g+h*M+f*y,o[7]=c*p+h*v+f*w,o[2]=u*_+d*x+m*S,o[5]=u*g+d*M+m*y,o[8]=u*p+d*v+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*o,d=c*o-r*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hl.makeScale(t,e)),this}rotate(t){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};uh.prototype.isMatrix3=!0;let se=uh;const hl=new se,xh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){const i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===be&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===be&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:t,whitePoint:n,transfer:wr,toXYZ:xh,fromXYZ:vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:be,toXYZ:xh,fromXYZ:vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}const de=vp();function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ns;class qf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ns===void 0&&(Ns=Er("canvas")),Ns.width=t.width,Ns.height=t.height;const s=Ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Xi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mp=0;class Vc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ul(s[r].image)):o.push(ul(s[r]))}else o=ul(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}let yp=0;const fl=new B;class cn extends Yi{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=li,s=li,o=un,r=as,a=ei,l=kn,c=cn.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ai(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==D0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Ps:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Ps:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=D0;cn.DEFAULT_ANISOTROPY=1;const fh=class fh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(d+1)/2,S=(p+1)/2,y=(h+u)/4,w=(f+_)/4,b=(m+g)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=y/n,o=w/n):v>S?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=y/s,o=b/s):S<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(S),n=w/o,s=b/o),this.set(n,s,o,e),this}let x=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;let Ge=fh;class Yf extends Yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new cn(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Vc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Yf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class G0 extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $f extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Dc=class Dc{constructor(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g)}set(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),o=1/Fs.setFromMatrixColumn(t,1).length(),r=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u+_*a,e[4]=m*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-m,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u-_*a,e[4]=-r*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*l,d=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sp,t,bp)}lookAt(t,e,n){const s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Qi.crossVectors(n,Vn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Qi.crossVectors(n,Vn)),Qi.normalize(),Hr.crossVectors(Vn,Qi),s[0]=Qi.x,s[4]=Hr.x,s[8]=Vn.x,s[1]=Qi.y,s[5]=Hr.y,s[9]=Vn.y,s[2]=Qi.z,s[6]=Hr.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],M=n[7],v=n[11],S=n[15],y=s[0],w=s[4],b=s[8],E=s[12],T=s[1],C=s[5],L=s[9],P=s[13],R=s[2],I=s[6],N=s[10],F=s[14],V=s[3],H=s[7],J=s[11],et=s[15];return o[0]=r*y+a*T+l*R+c*V,o[4]=r*w+a*C+l*I+c*H,o[8]=r*b+a*L+l*N+c*J,o[12]=r*E+a*P+l*F+c*et,o[1]=h*y+f*T+u*R+d*V,o[5]=h*w+f*C+u*I+d*H,o[9]=h*b+f*L+u*N+d*J,o[13]=h*E+f*P+u*F+d*et,o[2]=m*y+_*T+g*R+p*V,o[6]=m*w+_*C+g*I+p*H,o[10]=m*b+_*L+g*N+p*J,o[14]=m*E+_*P+g*F+p*et,o[3]=x*y+M*T+v*R+S*V,o[7]=x*w+M*C+v*I+S*H,o[11]=x*b+M*L+v*N+S*J,o[15]=x*E+M*P+v*F+S*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],x=l*d-c*u,M=a*d-c*f,v=a*u-l*f,S=r*d-c*h,y=r*u-l*h,w=r*f-a*h;return e*(_*x-g*M+p*v)-n*(m*x-g*S+p*y)+s*(m*M-_*S+p*w)-o*(m*v-_*y+g*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-a*c)-n*(o*h-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],x=e*a-n*r,M=e*l-s*r,v=e*c-o*r,S=n*l-s*a,y=n*c-o*a,w=s*c-o*l,b=h*_-f*m,E=h*g-u*m,T=h*p-d*m,C=f*g-u*_,L=f*p-d*_,P=u*p-d*g,R=x*P-M*L+v*C+S*T-y*E+w*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=(a*P-l*L+c*C)*I,t[1]=(s*L-n*P-o*C)*I,t[2]=(_*w-g*y+p*S)*I,t[3]=(u*y-f*w-d*S)*I,t[4]=(l*T-r*P-c*E)*I,t[5]=(e*P-s*T+o*E)*I,t[6]=(g*v-m*w-p*M)*I,t[7]=(h*w-u*v+d*M)*I,t[8]=(r*L-a*T+c*b)*I,t[9]=(n*T-e*L-o*b)*I,t[10]=(m*y-_*v+p*x)*I,t[11]=(f*v-h*y-d*x)*I,t[12]=(a*E-r*C-l*b)*I,t[13]=(e*C-n*E+s*b)*I,t[14]=(_*M-m*S-g*x)*I,t[15]=(h*S-f*M+u*x)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,u=o*c,d=o*h,m=o*f,_=r*h,g=r*f,p=a*f,x=l*c,M=l*h,v=l*f,S=n.x,y=n.y,w=n.z;return s[0]=(1-(_+p))*S,s[1]=(d+v)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(d-v)*y,s[5]=(1-(u+p))*y,s[6]=(g+x)*y,s[7]=0,s[8]=(m+M)*w,s[9]=(g-x)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Fs.set(s[0],s[1],s[2]).length();const a=Fs.set(s[4],s[5],s[6]).length(),l=Fs.set(s[8],s[9],s[10]).length();o<0&&(r=-r),ii.copy(this);const c=1/r,h=1/a,f=1/l;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,e.setFromRotationMatrix(ii),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=hi,l=!1){const c=this.elements,h=2*o/(e-t),f=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,_;if(l)m=o/(r-o),_=r*o/(r-o);else if(a===hi)m=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===yo)m=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=hi,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,_;if(l)m=1/(r-o),_=r/(r-o);else if(a===hi)m=-2/(r-o),_=-(r+o)/(r-o);else if(a===yo)m=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Dc.prototype.isMatrix4=!0;let Le=Dc;const Fs=new B,ii=new Le,Sp=new B(0,0,0),bp=new B(1,1,1),Qi=new B,Hr=new B,Vn=new B,Mh=new Le,yh=new qi;class Di{constructor(t=0,e=0,n=0,s=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class H0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wp=0;const Sh=new B,Os=new qi,Ii=new Le,Vr=new B,Do=new B,Ep=new B,Tp=new qi,bh=new B(1,0,0),wh=new B(0,1,0),Eh=new B(0,0,1),Th={type:"added"},Ap={type:"removed"},Bs={type:"childadded",child:null},dl={type:"childremoved",child:null};class ye extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new B,e=new Di,n=new qi,s=new B(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new se}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.multiply(Os),this}rotateOnWorldAxis(t,e){return Os.setFromAxisAngle(t,e),this.quaternion.premultiply(Os),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(wh,t)}rotateZ(t){return this.rotateOnAxis(Eh,t)}translateOnAxis(t,e){return Sh.copy(t).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(wh,t)}translateZ(t){return this.translateOnAxis(Eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Do,Vr,this.up):Ii.lookAt(Vr,Do,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(Ii),this.quaternion.premultiply(Os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ye.DEFAULT_UP=new B(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ge extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function pl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=k0(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=pl(r,o,t+1/3),this.g=pl(r,o,t),this.b=pl(r,o,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(o){o!==void 0&&parseFloat(o)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Zf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return de.workingToColorSpace(gn.copy(this),t),Math.round(le(gn.r*255,0,255))*65536+Math.round(le(gn.g*255,0,255))*256+Math.round(le(gn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(gn.copy(this),e);const n=gn.r,s=gn.g,o=gn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Ke){de.workingToColorSpace(gn.copy(this),t);const e=gn.r,n=gn.g,s=gn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(Wr);const n=ur(ji.h,Wr.h,e),s=ur(ji.s,Wr.s,e),o=ur(ji.l,Wr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const gn=new Ht;Ht.NAMES=Zf;class Wc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new Wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class V0 extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const si=new B,Ui=new B,ml=new B,Ni=new B,zs=new B,ks=new B,Ah=new B,gl=new B,_l=new B,xl=new B,vl=new Ge,Ml=new Ge,yl=new Ge;class Yn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){si.subVectors(s,e),Ui.subVectors(n,e),ml.subVectors(t,e);const r=si.dot(si),a=si.dot(Ui),l=si.dot(ml),c=Ui.dot(Ui),h=Ui.dot(ml),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(r*h-a*l)*u;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ni.x),l.addScaledVector(r,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return vl.setScalar(0),Ml.setScalar(0),yl.setScalar(0),vl.fromBufferAttribute(t,e),Ml.fromBufferAttribute(t,n),yl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(vl,o.x),r.addScaledVector(Ml,o.y),r.addScaledVector(yl,o.z),r}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Ui.subVectors(t,e),si.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;zs.subVectors(s,n),ks.subVectors(o,n),gl.subVectors(t,n);const l=zs.dot(gl),c=ks.dot(gl);if(l<=0&&c<=0)return e.copy(n);_l.subVectors(t,s);const h=zs.dot(_l),f=ks.dot(_l);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(zs,r);xl.subVectors(t,o);const d=zs.dot(xl),m=ks.dot(xl);if(m>=0&&d<=m)return e.copy(o);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ks,a);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Ah.subVectors(o,s),a=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Ah,a);const p=1/(g+_+u);return r=_*p,a=u*p,e.copy(n).addScaledVector(zs,r).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ds{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,oi):oi.fromBufferAttribute(o,r),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),qr.subVectors(this.max,Io),Gs.subVectors(t.a,Io),Hs.subVectors(t.b,Io),Vs.subVectors(t.c,Io),ts.subVectors(Hs,Gs),es.subVectors(Vs,Hs),gs.subVectors(Gs,Vs);let e=[0,-ts.z,ts.y,0,-es.z,es.y,0,-gs.z,gs.y,ts.z,0,-ts.x,es.z,0,-es.x,gs.z,0,-gs.x,-ts.y,ts.x,0,-es.y,es.x,0,-gs.y,gs.x,0];return!Sl(e,Gs,Hs,Vs,qr)||(e=[1,0,0,0,1,0,0,0,1],!Sl(e,Gs,Hs,Vs,qr))?!1:(Yr.crossVectors(ts,es),e=[Yr.x,Yr.y,Yr.z],Sl(e,Gs,Hs,Vs,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fi=[new B,new B,new B,new B,new B,new B,new B,new B],oi=new B,Xr=new ds,Gs=new B,Hs=new B,Vs=new B,ts=new B,es=new B,gs=new B,Io=new B,qr=new B,Yr=new B,_s=new B;function Sl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){_s.fromArray(i,o);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ze=new B,$r=new vt;let Cp=0;class $n extends Yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=z0,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),o=Ee(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class W0 extends $n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class X0 extends $n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends $n{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Pp=new ds,Uo=new B,bl=new B;class To{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const e=Uo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Uo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(bl)),this.expandByPoint(Uo.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Lp=0;const Jn=new Le,wl=new ye,Ws=new B,Wn=new ds,No=new ds,on=new B;class Ae extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tp(t)?X0:W0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new se().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];No.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Wn.min,No.min),Wn.expandByPoint(on),on.addVectors(Wn.max,No.max),Wn.expandByPoint(on)):(Wn.expandByPoint(No.min),Wn.expandByPoint(No.max))}Wn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)on.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(on));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(t,c),on.add(Ws)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new $n(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new B,l[b]=new B;const c=new B,h=new B,f=new B,u=new vt,d=new vt,m=new vt,_=new B,g=new B;function p(b,E,T){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,T),u.fromBufferAttribute(o,b),d.fromBufferAttribute(o,E),m.fromBufferAttribute(o,T),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(C),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(C),a[b].add(_),a[E].add(_),a[T].add(_),l[b].add(g),l[E].add(g),l[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let b=0,E=x.length;b<E;++b){const T=x[b],C=T.start,L=T.count;for(let P=C,R=C+L;P<R;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new B,v=new B,S=new B,y=new B;function w(b){S.fromBufferAttribute(s,b),y.copy(S);const E=a[b];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(y,E);const C=v.dot(l[b])<0?-1:1;r.setXYZW(b,M.x,M.y,M.z,C)}for(let b=0,E=x.length;b<E;++b){const T=x[b],C=T.start,L=T.count;for(let P=C,R=C+L;P<R;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new B,o=new B,r=new B,a=new B,l=new B,c=new B,h=new B,f=new B;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new $n(u,h,f)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=z0,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Tn=new B;class Rr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ci(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),o=Ee(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new $n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const El=new B,Dp=new B,Ip=new se;class Si{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=El.subVectors(n,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(El),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ip.getNormalMatrix(t),s=this.coplanarPoint(El).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Up=0;class ps extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=co,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=b0,this.blendDst=w0,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Si().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class q0 extends ps{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xs;const Fo=new B,qs=new B,Ys=new B,$s=new vt,Oo=new vt,Jf=new Le,Zr=new B,Bo=new B,Kr=new B,Rh=new vt,Tl=new vt,Ch=new vt;class Qf extends ye{constructor(t=new q0){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kf(e,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new Rr(n,3,0,!1)),Xs.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=Xs,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Jf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Jr(Zr.set(-.5,-.5,0),Ys,r,qs,s,o),Jr(Bo.set(.5,-.5,0),Ys,r,qs,s,o),Jr(Kr.set(.5,.5,0),Ys,r,qs,s,o),Rh.set(0,0),Tl.set(1,0),Ch.set(1,1);let a=t.ray.intersectTriangle(Zr,Bo,Kr,!1,Fo);if(a===null&&(Jr(Bo.set(-.5,.5,0),Ys,r,qs,s,o),Tl.set(0,1),a=t.ray.intersectTriangle(Zr,Kr,Bo,!1,Fo),a===null))return;const l=t.ray.origin.distanceTo(Fo);l<t.near||l>t.far||e.push({distance:l,point:Fo.clone(),uv:Yn.getInterpolation(Fo,Zr,Bo,Kr,Rh,Tl,Ch,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jr(i,t,e,n,s,o){$s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Oo.x=o*$s.x-s*$s.y,Oo.y=s*$s.x+o*$s.y):Oo.copy($s),i.copy(t),i.x+=Oo.x,i.y+=Oo.y,i.applyMatrix4(Jf)}const Oi=new B,Al=new B,Qr=new B,jr=new B;class Y0{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Al.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),jr.copy(this.origin).sub(Al);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Qr),a=jr.dot(this.direction),l=-jr.dot(Qr),c=jr.lengthSq(),h=Math.abs(1-r*r);let f,u,d,m;if(h>0)if(f=r*l-a,u=r*a-l,m=o*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Al).addScaledVector(Qr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Oi.subVectors(t.center,this.origin);const n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-r.x,u=t.y-r.y,d=t.z-r.z,m=e.x-r.x,_=e.y-r.y,g=e.z-r.z,p=n.x-r.x,x=n.y-r.y,M=n.z-r.z,v=Math.abs(l),S=Math.abs(c),y=Math.abs(h);let w,b,E,T,C,L,P,R,I,N,F,V;if(v>=S&&v>=y?(E=l,L=f,I=m,V=p,l>=0?(w=c,b=h,T=u,C=d,P=_,R=g,N=x,F=M):(w=h,b=c,T=d,C=u,P=g,R=_,N=M,F=x)):S>=y?(E=c,L=u,I=_,V=x,c>=0?(w=h,b=l,T=d,C=f,P=g,R=m,N=M,F=p):(w=l,b=h,T=f,C=d,P=m,R=g,N=p,F=M)):(E=h,L=d,I=g,V=M,h>=0?(w=l,b=c,T=f,C=u,P=m,R=_,N=p,F=x):(w=c,b=l,T=u,C=f,P=_,R=m,N=x,F=p)),E===0)return null;const H=w/E,J=b/E,et=1/E,St=T-H*L,mt=C-J*L,Ut=P-H*I,kt=R-J*I,G=N-H*V,O=F-J*V,Y=G*kt-O*Ut,rt=St*O-mt*G,_t=Ut*mt-kt*St;if(s){if(Y<0||rt<0||_t<0)return null}else if((Y<0||rt<0||_t<0)&&(Y>0||rt>0||_t>0))return null;const z=Y+rt+_t;if(z===0)return null;const nt=et*(Y*L+rt*I+_t*V);return(z>0?nt<0:nt>0)?null:this.at(nt/z,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gn extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ph=new Le,xs=new Y0,ta=new To,Lh=new B,ea=new B,na=new B,ia=new B,Rl=new B,sa=new B,Dh=new B,oa=new B;class oe extends ye{constructor(t=new Ae,e=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){sa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(Rl.fromBufferAttribute(f,t),r?sa.addScaledVector(Rl,h):sa.addScaledVector(Rl.sub(e),h))}e.add(sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(o),xs.copy(t.ray).recast(t.near),!(ta.containsPoint(xs.origin)===!1&&(xs.intersectSphere(ta,Lh)===null||xs.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Ph.copy(o).invert(),xs.copy(t.ray).applyMatrix4(Ph),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,S=M;v<S;v+=3){const y=a.getX(v),w=a.getX(v+1),b=a.getX(v+2);s=ra(this,p,t,n,c,h,f,y,w,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=ra(this,r,t,n,c,h,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,S=M;v<S;v+=3){const y=v,w=v+1,b=v+2;s=ra(this,p,t,n,c,h,f,y,w,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=g,M=g+1,v=g+2;s=ra(this,r,t,n,c,h,f,x,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Np(i,t,e,n,s,o,r,a){let l;if(t.side===fn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ui,a),l===null)return null;oa.copy(a),oa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(oa);return c<e.near||c>e.far?null:{distance:c,point:oa.clone(),object:i}}function ra(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,ea),i.getVertexPosition(l,na),i.getVertexPosition(c,ia);const h=Np(i,t,e,n,ea,na,ia,Dh);if(h){const f=new B;Yn.getBarycoord(Dh,ea,na,ia,f),s&&(h.uv=Yn.getInterpolatedAttribute(s,a,l,c,f,new vt)),o&&(h.uv1=Yn.getInterpolatedAttribute(o,a,l,c,f,new vt)),r&&(h.normal=Yn.getInterpolatedAttribute(r,a,l,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new B,materialIndex:0};Yn.getNormal(ea,na,ia,u.normal),h.face=u,h.barycoord=f}return h}class Xc extends cn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Ye,h=Ye,f,u){super(null,r,a,l,c,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i0 extends $n{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zs=new Le,Ih=new Le,aa=[],Uh=new ds,Fp=new Le,zo=new oe,ko=new To;class dn extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new i0(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ds),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),Uh.copy(t.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Uh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new To),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zs),ko.copy(t.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(ko)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),t.ray.intersectsSphere(ko)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Zs),Ih.multiplyMatrices(n,Zs),zo.matrixWorld=Ih,zo.raycast(t,aa);for(let r=0,a=aa.length;r<a;r++){const l=aa[r];l.instanceId=o,l.object=this,e.push(l)}aa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new i0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xc(new Float32Array(s*this.count),s,this.count,Oc,ti));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const vs=new To,Op=new vt(.5,.5),ca=new B;class qc{constructor(t=new Si,e=new Si,n=new Si,s=new Si,o=new Si,r=new Si){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],f=o[5],u=o[6],d=o[7],m=o[8],_=o[9],g=o[10],p=o[11],x=o[12],M=o[13],v=o[14],S=o[15];if(s[0].setComponents(c-r,d-h,p-m,S-x).normalize(),s[1].setComponents(c+r,d+h,p+m,S+x).normalize(),s[2].setComponents(c+a,d+f,p+_,S+M).normalize(),s[3].setComponents(c-a,d-f,p-_,S-M).normalize(),n)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,d-u,p-g,S-v).normalize();else if(s[4].setComponents(c-l,d-u,p-g,S-v).normalize(),e===hi)s[5].setComponents(c+l,d+u,p+g,S+v).normalize();else if(e===yo)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);const e=Op.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ca.x=s.normal.x>0?t.max.x:t.min.x,ca.y=s.normal.y>0?t.max.y:t.min.y,ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $0 extends cn{constructor(t=[],e=us,n,s,o,r,a,l,c,h){super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yc extends cn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends cn{constructor(t,e,n=di,s,o,r,a=Ye,l=Ye,c,h=Li,f=1){if(h!==Li&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class jf extends So{constructor(t,e=di,n=us,s,o,r=Ye,a=Ye,l,c=Li){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,o,r,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Z0 extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ne extends Ae{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(f,2));function m(_,g,p,x,M,v,S,y,w,b,E){const T=v/w,C=S/b,L=v/2,P=S/2,R=y/2,I=w+1,N=b+1;let F=0,V=0;const H=new B;for(let J=0;J<N;J++){const et=J*C-P;for(let St=0;St<I;St++){const mt=St*T-L;H[_]=mt*x,H[g]=et*M,H[p]=R,c.push(H.x,H.y,H.z),H[_]=0,H[g]=0,H[p]=y>0?1:-1,h.push(H.x,H.y,H.z),f.push(St/w),f.push(1-J/b),F+=1}}for(let J=0;J<b;J++)for(let et=0;et<w;et++){const St=u+et+I*J,mt=u+et+I*(J+1),Ut=u+(et+1)+I*(J+1),kt=u+(et+1)+I*J;l.push(St,mt,kt),l.push(mt,Ut,kt),V+=6}a.addGroup(d,V,E),d+=V,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ao extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new B,h=new vt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class yn extends Ae{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let m=0;const _=[],g=n/2;let p=0;x(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ee(f,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2));function x(){const v=new B,S=new B;let y=0;const w=(e-t)/n;for(let b=0;b<=o;b++){const E=[],T=b/o,C=T*(e-t)+t;for(let L=0;L<=s;L++){const P=L/s,R=P*l+a,I=Math.sin(R),N=Math.cos(R);S.x=C*I,S.y=-T*n+g,S.z=C*N,f.push(S.x,S.y,S.z),v.set(I,w,N).normalize(),u.push(v.x,v.y,v.z),d.push(P,1-T),E.push(m++)}_.push(E)}for(let b=0;b<s;b++)for(let E=0;E<o;E++){const T=_[E][b],C=_[E+1][b],L=_[E+1][b+1],P=_[E][b+1];(t>0||E!==0)&&(h.push(T,C,P),y+=3),(e>0||E!==o-1)&&(h.push(C,L,P),y+=3)}c.addGroup(p,y,0),p+=y}function M(v){const S=m,y=new vt,w=new B;let b=0;const E=v===!0?t:e,T=v===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,g*T,0),u.push(0,T,0),d.push(.5,.5),m++;const C=m;for(let L=0;L<=s;L++){const R=L/s*l+a,I=Math.cos(R),N=Math.sin(R);w.x=E*N,w.y=g*T,w.z=E*I,f.push(w.x,w.y,w.z),u.push(0,T,0),y.x=I*.5+.5,y.y=N*.5*T+.5,d.push(y.x,y.y),m++}for(let L=0;L<s;L++){const P=S+L,R=C+L;v===!0?h.push(R,R+1,P):h.push(R+1,R,P),b+=3}c.addGroup(p,b,v===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $c extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(o.slice(),3)),this.setAttribute("uv",new ee(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new B,v=new B,S=new B;for(let y=0;y<e.length;y+=3)d(e[y+0],M),d(e[y+1],v),d(e[y+2],S),l(M,v,S,x)}function l(x,M,v,S){const y=S+1,w=[];for(let b=0;b<=y;b++){w[b]=[];const E=x.clone().lerp(v,b/y),T=M.clone().lerp(v,b/y),C=y-b;for(let L=0;L<=C;L++)L===0&&b===y?w[b][L]=E:w[b][L]=E.clone().lerp(T,L/C)}for(let b=0;b<y;b++)for(let E=0;E<2*(y-b)-1;E++){const T=Math.floor(E/2);E%2===0?(u(w[b][T+1]),u(w[b+1][T]),u(w[b][T])):(u(w[b][T+1]),u(w[b+1][T+1]),u(w[b+1][T]))}}function c(x){const M=new B;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(x),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function h(){const x=new B;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];const v=g(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;r.push(v,1-S)}m(),f()}function f(){for(let x=0;x<r.length;x+=6){const M=r[x+0],v=r[x+2],S=r[x+4],y=Math.max(M,v,S),w=Math.min(M,v,S);y>.9&&w<.1&&(M<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),S<.2&&(r[x+4]+=1))}}function u(x){o.push(x.x,x.y,x.z)}function d(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){const x=new B,M=new B,v=new B,S=new B,y=new vt,w=new vt,b=new vt;for(let E=0,T=0;E<o.length;E+=9,T+=6){x.set(o[E+0],o[E+1],o[E+2]),M.set(o[E+3],o[E+4],o[E+5]),v.set(o[E+6],o[E+7],o[E+8]),y.set(r[T+0],r[T+1]),w.set(r[T+2],r[T+3]),b.set(r[T+4],r[T+5]),S.copy(x).add(M).add(v).divideScalar(3);const C=g(S);_(y,T+0,x,C),_(w,T+2,M,C),_(b,T+4,v,C)}}function _(x,M,v,S){S<0&&x.x===1&&(r[M]=x.x-1),v.x===0&&v.z===0&&(r[M]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.vertices,t.indices,t.radius,t.detail)}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new vt:new B);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,s=[],o=[],r=[],a=new B,l=new Le;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new B)}o[0]=new B,r[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(le(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,m))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(le(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zc extends gi{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class td extends Zc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function K0(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Nh=new B,Fh=new B,Cl=new K0,Pl=new K0,Ll=new K0;class Kc extends gi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Fh.subVectors(s[0],s[1]).add(s[0]),c=Fh);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Nh.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Nh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Cl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,g),Pl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,g),Ll.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Pl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ll.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Cl.calc(l),Pl.calc(l),Ll.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Oh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Bp(i,t){const e=1-i;return e*e*t}function zp(i,t){return 2*(1-i)*i*t}function kp(i,t){return i*i*t}function fr(i,t,e,n){return Bp(i,t)+zp(i,e)+kp(i,n)}function Gp(i,t){const e=1-i;return e*e*e*t}function Hp(i,t){const e=1-i;return 3*e*e*i*t}function Vp(i,t){return 3*(1-i)*i*i*t}function Wp(i,t){return i*i*i*t}function dr(i,t,e,n,s){return Gp(i,t)+Hp(i,e)+Vp(i,n)+Wp(i,s)}class J0 extends gi{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(dr(t,s.x,o.x,r.x,a.x),dr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ed extends gi{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(dr(t,s.x,o.x,r.x,a.x),dr(t,s.y,o.y,r.y,a.y),dr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q0 extends gi{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nd extends gi{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class j0 extends gi{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(fr(t,s.x,o.x,r.x),fr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jc extends gi{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(fr(t,s.x,o.x,r.x),fr(t,s.y,o.y,r.y),fr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class th extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(Oh(a,l.x,c.x,h.x,f.x),Oh(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var bc=Object.freeze({__proto__:null,ArcCurve:td,CatmullRomCurve3:Kc,CubicBezierCurve:J0,CubicBezierCurve3:ed,EllipseCurve:Zc,LineCurve:Q0,LineCurve3:nd,QuadraticBezierCurve:j0,QuadraticBezierCurve3:Jc,SplineCurve:th});class id extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new bc[s.type]().fromJSON(s))}return this}}class s0 extends id{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Q0(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new j0(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new J0(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new th(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Zc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qc extends s0{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new s0().fromJSON(s))}return this}}function Xp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=sd(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Kp(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){const d=i[u],m=i[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return Cr(o,r,e,a,l,c,0),r}function sd(i,t,e,n,s){let o;if(s===a1(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=Bh(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=Bh(r/n|0,i[r],i[r+1],o);return o&&bo(o,o.next)&&(Lr(o),o=o.next),o}function Ls(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bo(e,e.next)||He(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&e1(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?Yp(i,n,s,o):qp(i)){t.push(l.i,i.i,c.i),Lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=$p(Ls(i),t),Cr(i,t,e,n,s,o,2)):r===2&&Zp(i,t,e,n,s,o):Cr(Ls(i),t,e,n,s,o,1);break}}}function qp(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,o,r),f=Math.min(a,l,c),u=Math.max(s,o,r),d=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&$o(s,a,o,l,r,c,m.x,m.y)&&He(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yp(i,t,e,n){const s=i.prev,o=i,r=i.next;if(He(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,u=r.y,d=Math.min(a,l,c),m=Math.min(h,f,u),_=Math.max(a,l,c),g=Math.max(h,f,u),p=o0(d,m,t,e,n),x=o0(_,g,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=x;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&$o(a,h,l,f,c,u,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&$o(a,h,l,f,c,u,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&$o(a,h,l,f,c,u,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&$o(a,h,l,f,c,u,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $p(i,t){let e=i;do{const n=e.prev,s=e.next.next;!bo(n,s)&&rd(n,e,e.next,s)&&Pr(n,s)&&Pr(s,n)&&(t.push(n.i,e.i,s.i),Lr(e),Lr(e.next),e=i=s),e=e.next}while(e!==i);return Ls(e)}function Zp(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&s1(r,a)){let l=ad(r,a);r=Ls(r,r.next),l=Ls(l,l.next),Cr(r,t,e,n,s,o,0),Cr(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Kp(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=sd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(i1(c))}s.sort(Jp);for(let o=0;o<s.length;o++)e=Qp(s[o],e);return e}function Jp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Qp(i,t){const e=jp(i,t);if(!e)return t;const n=ad(e,i);return Ls(n,n.next),Ls(e,e.next)}function jp(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(bo(i,e))return e;do{if(bo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&od(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Pr(e,i)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&t1(r,e)))&&(r=e,h=f)}e=e.next}while(e!==a);return r}function t1(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function e1(i,t,e,n){let s=i;do s.z===0&&(s.z=o0(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,n1(s)}function n1(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function o0(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function i1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function od(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function $o(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&od(i,t,e,n,s,o,r,a)}function s1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!o1(i,t)&&(Pr(i,t)&&Pr(t,i)&&r1(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||bo(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bo(i,t){return i.x===t.x&&i.y===t.y}function rd(i,t,e,n){const s=ha(He(i,t,e)),o=ha(He(i,t,n)),r=ha(He(e,n,i)),a=ha(He(e,n,t));return!!(s!==o&&r!==a||s===0&&la(i,e,t)||o===0&&la(i,n,t)||r===0&&la(e,i,n)||a===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ha(i){return i>0?1:i<0?-1:0}function o1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Pr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function r1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ad(i,t){const e=r0(i.i,i.x,i.y),n=r0(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Bh(i,t,e,n){const s=r0(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function r0(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function a1(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class c1{static triangulate(t,e,n=2){return Xp(t,e,n)}}class Ei{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ei.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];zh(t),kh(n,t);let r=t.length;e.forEach(zh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,kh(n,e[l]);const a=c1.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function zh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Br extends Ae{constructor(t=new Qc([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:l1;let M,v=!1,S,y,w,b;if(p){M=p.getSpacedPoints(h),v=!0,u=!1;const q=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,q),y=new B,w=new B,b=new B}u||(g=0,d=0,m=0,_=0);const E=a.extractPoints(c);let T=E.shape;const C=E.holes;if(!Ei.isClockWise(T)){T=T.reverse();for(let q=0,it=C.length;q<it;q++){const at=C[q];Ei.isClockWise(at)&&(C[q]=at.reverse())}}function P(q){const at=10000000000000001e-36;let W=q[0];for(let X=1;X<=q.length;X++){const gt=X%q.length,ht=q[gt],Mt=ht.x-W.x,At=ht.y-W.y,k=Mt*Mt+At*At,Jt=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(W.x),Math.abs(W.y)),Kt=at*Jt*Jt;if(k<=Kt){q.splice(gt,1),X--;continue}W=ht}}P(T),C.forEach(P);const R=C.length,I=T;for(let q=0;q<R;q++){const it=C[q];T=T.concat(it)}function N(q,it,at){return it||pe("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(it,at)}const F=T.length;function V(q,it,at){let W,X,gt;const ht=q.x-it.x,Mt=q.y-it.y,At=at.x-q.x,k=at.y-q.y,Jt=ht*ht+Mt*Mt,Kt=ht*k-Mt*At;if(Math.abs(Kt)>Number.EPSILON){const U=Math.sqrt(Jt),A=Math.sqrt(At*At+k*k),K=it.x-Mt/U,st=it.y+ht/U,ct=at.x-k/A,yt=at.y+At/A,Tt=((ct-K)*k-(yt-st)*At)/(ht*k-Mt*At);W=K+ht*Tt-q.x,X=st+Mt*Tt-q.y;const lt=W*W+X*X;if(lt<=2)return new vt(W,X);gt=Math.sqrt(lt/2)}else{let U=!1;ht>Number.EPSILON?At>Number.EPSILON&&(U=!0):ht<-Number.EPSILON?At<-Number.EPSILON&&(U=!0):Math.sign(Mt)===Math.sign(k)&&(U=!0),U?(W=-Mt,X=ht,gt=Math.sqrt(Jt)):(W=ht,X=Mt,gt=Math.sqrt(Jt/2))}return new vt(W/gt,X/gt)}const H=[];for(let q=0,it=I.length,at=it-1,W=q+1;q<it;q++,at++,W++)at===it&&(at=0),W===it&&(W=0),H[q]=V(I[q],I[at],I[W]);const J=[];let et,St=H.concat();for(let q=0,it=R;q<it;q++){const at=C[q];et=[];for(let W=0,X=at.length,gt=X-1,ht=W+1;W<X;W++,gt++,ht++)gt===X&&(gt=0),ht===X&&(ht=0),et[W]=V(at[W],at[gt],at[ht]);J.push(et),St=St.concat(et)}let mt;if(g===0)mt=Ei.triangulateShape(I,C);else{const q=[],it=[];for(let at=0;at<g;at++){const W=at/g,X=d*Math.cos(W*Math.PI/2),gt=m*Math.sin(W*Math.PI/2)+_;for(let ht=0,Mt=I.length;ht<Mt;ht++){const At=N(I[ht],H[ht],gt);rt(At.x,At.y,-X),W===0&&q.push(At)}for(let ht=0,Mt=R;ht<Mt;ht++){const At=C[ht];et=J[ht];const k=[];for(let Jt=0,Kt=At.length;Jt<Kt;Jt++){const U=N(At[Jt],et[Jt],gt);rt(U.x,U.y,-X),W===0&&k.push(U)}W===0&&it.push(k)}}mt=Ei.triangulateShape(q,it)}const Ut=mt.length,kt=m+_;for(let q=0;q<F;q++){const it=u?N(T[q],St[q],kt):T[q];v?(w.copy(S.normals[0]).multiplyScalar(it.x),y.copy(S.binormals[0]).multiplyScalar(it.y),b.copy(M[0]).add(w).add(y),rt(b.x,b.y,b.z)):rt(it.x,it.y,0)}for(let q=1;q<=h;q++)for(let it=0;it<F;it++){const at=u?N(T[it],St[it],kt):T[it];v?(w.copy(S.normals[q]).multiplyScalar(at.x),y.copy(S.binormals[q]).multiplyScalar(at.y),b.copy(M[q]).add(w).add(y),rt(b.x,b.y,b.z)):rt(at.x,at.y,f/h*q)}for(let q=g-1;q>=0;q--){const it=q/g,at=d*Math.cos(it*Math.PI/2),W=m*Math.sin(it*Math.PI/2)+_;for(let X=0,gt=I.length;X<gt;X++){const ht=N(I[X],H[X],W);rt(ht.x,ht.y,f+at)}for(let X=0,gt=C.length;X<gt;X++){const ht=C[X];et=J[X];for(let Mt=0,At=ht.length;Mt<At;Mt++){const k=N(ht[Mt],et[Mt],W);v?rt(k.x,k.y+M[h-1].y,M[h-1].x+at):rt(k.x,k.y,f+at)}}}G(),O();function G(){const q=s.length/3;if(u){let it=0,at=F*it;for(let W=0;W<Ut;W++){const X=mt[W];_t(X[2]+at,X[1]+at,X[0]+at)}it=h+g*2,at=F*it;for(let W=0;W<Ut;W++){const X=mt[W];_t(X[0]+at,X[1]+at,X[2]+at)}}else{for(let it=0;it<Ut;it++){const at=mt[it];_t(at[2],at[1],at[0])}for(let it=0;it<Ut;it++){const at=mt[it];_t(at[0]+F*h,at[1]+F*h,at[2]+F*h)}}n.addGroup(q,s.length/3-q,0)}function O(){const q=s.length/3;let it=0;Y(I,it),it+=I.length;for(let at=0,W=C.length;at<W;at++){const X=C[at];Y(X,it),it+=X.length}n.addGroup(q,s.length/3-q,1)}function Y(q,it){let at=q.length;for(;--at>=0;){const W=at;let X=at-1;X<0&&(X=q.length-1);for(let gt=0,ht=h+g*2;gt<ht;gt++){const Mt=F*gt,At=F*(gt+1),k=it+W+Mt,Jt=it+X+Mt,Kt=it+X+At,U=it+W+At;z(k,Jt,Kt,U)}}}function rt(q,it,at){l.push(q),l.push(it),l.push(at)}function _t(q,it,at){nt(q),nt(it),nt(at);const W=s.length/3,X=x.generateTopUV(n,s,W-3,W-2,W-1);pt(X[0]),pt(X[1]),pt(X[2])}function z(q,it,at,W){nt(q),nt(it),nt(W),nt(it),nt(at),nt(W);const X=s.length/3,gt=x.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);pt(gt[0]),pt(gt[1]),pt(gt[3]),pt(gt[1]),pt(gt[2]),pt(gt[3])}function nt(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function pt(q){o.push(q.x),o.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return h1(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bc[s.type]().fromJSON(s)),new Br(n,t.options)}}const l1={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new vt(o,r),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new vt(r,1-l),new vt(c,1-f),new vt(u,1-m),new vt(_,1-p)]:[new vt(a,1-l),new vt(h,1-f),new vt(d,1-m),new vt(g,1-p)]}};function h1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zn extends $c{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zn(t.radius,t.detail)}}class mi extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const x=p*u-r;for(let M=0;M<c;M++){const v=M*f-o;m.push(v,-x,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+c*p,v=x+c*(p+1),S=x+1+c*(p+1),y=x+1+c*p;d.push(M,v,y),d.push(v,S,y)}this.setIndex(d),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}class jc extends Ae{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new B,m=new vt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=o+g/n*r;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,M=x,v=x+n+1,S=x+n+2,y=x+1;a.push(M,v,y),a.push(v,S,y)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vn extends Ae{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new B,u=new B,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],M=p/n,v=r+M*a,S=t*Math.cos(v),y=Math.sqrt(t*t-S*S);let w=0;p===0&&r===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let b=0;b<=e;b++){const E=b/e,T=s+E*o;f.x=-y*Math.cos(T),f.y=S,f.z=y*Math.sin(T),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(E+w,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const M=h[p][x+1],v=h[p][x],S=h[p+1][x],y=h[p+1][x+1];(p!==0||r>0)&&d.push(M,v,y),(p!==n-1||l<Math.PI)&&d.push(v,S,y)}this.setIndex(d),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ri extends Ae{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new B,d=new B,m=new B;for(let _=0;_<=n;_++){const g=r+_/n*a;for(let p=0;p<=s;p++){const x=p/s*o;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const p=(s+1)*_+g-1,x=(s+1)*(_-1)+g-1,M=(s+1)*(_-1)+g,v=(s+1)*_+g;l.push(p,x,v),l.push(x,M,v)}this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Ro extends Ae{constructor(t=new Jc(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new B,l=new B,c=new vt;let h=new B;const f=[],u=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ee(f,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(d,2));function _(){for(let M=0;M<e;M++)g(M);g(o===!1?e:0),x(),p()}function g(M){h=t.getPointAt(M/e,h);const v=r.normals[M],S=r.binormals[M];for(let y=0;y<=s;y++){const w=y/s*Math.PI*2,b=Math.sin(w),E=-Math.cos(w);l.x=E*v.x+b*S.x,l.y=E*v.y+b*S.y,l.z=E*v.z+b*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const S=(s+1)*(M-1)+(v-1),y=(s+1)*M+(v-1),w=(s+1)*M+v,b=(s+1)*(M-1)+v;m.push(S,y,b),m.push(y,w,b)}}function x(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ro(new bc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function wo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Gh(s))s.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Gh(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function An(i){const t={};for(let e=0;e<i.length;e++){const n=wo(i[e]);for(const s in n)t[s]=n[s]}return t}function Gh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function u1(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const ld={clone:wo,merge:An};var f1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f1,this.fragmentShader=d1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wo(t.uniforms),this.uniformsGroups=u1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class hd extends Dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pr extends ps{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ht(16777215),this.specular=new Ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Nr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jt extends ps{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Nr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ud extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fd extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ia={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Hh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Hh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Hh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class dd{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pd=new dd;class tl{constructor(t){this.manager=t!==void 0?t:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}tl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ks=new WeakMap;class md extends tl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ia.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let f=Ks.get(r);f===void 0&&(f=[],Ks.set(r,f)),f.push({onLoad:e,onError:s})}return r}const a=Er("img");function l(){h(),e&&e(this);const f=Ks.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Ks.delete(this),o.manager.itemEnd(t)}function c(f){h(),s&&s(f),Ia.remove(`image:${t}`);const u=Ks.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onError&&m.onError(f)}Ks.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ia.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class zr extends tl{constructor(t){super(t)}load(t,e,n,s){const o=new cn,r=new md(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class el extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class eh extends el{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Dl=new Le,Vh=new B,Wh=new B;class nh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qc,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vh),Wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Dl,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;t.coordinateSystem===yo||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ua=new B,fa=new qi,xi=new B;class ih extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,fa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,fa,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ua,fa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,fa,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new B,Xh=new vt,qh=new vt;class hn extends ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,qh),e.subVectors(qh,Xh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class p1 extends nh{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class gd extends el{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new p1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class nl extends ih{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class m1 extends nh{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sh extends el{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new m1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Js=-90,Qs=1;class _d extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Js,Qs,t,e);s.layers=this.layers,this.add(s);const o=new hn(Js,Qs,t,e);o.layers=this.layers,this.add(o);const r=new hn(Js,Qs,t,e);r.layers=this.layers,this.add(r);const a=new hn(Js,Qs,t,e);a.layers=this.layers,this.add(a);const l=new hn(Js,Qs,t,e);l.layers=this.layers,this.add(l);const c=new hn(Js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class xd extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class a0{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=class dh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};dh.prototype.isMatrix2=!0;let c0=dh;class vd extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Yh(i,t,e,n){const s=g1(n);switch(e){case O0:return i*t;case Oc:return i*t/s.components*s.byteLength;case Bc:return i*t/s.components*s.byteLength;case fs:return i*t*2/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case B0:return i*t*3/s.components*s.byteLength;case ei:return i*t*4/s.components*s.byteLength;case kc:return i*t*4/s.components*s.byteLength;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cr:case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Za:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case Qa:case tc:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ja:case Mr:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _c:case xc:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yr:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g1(i){switch(i){case kn:case I0:return{byteLength:1,components:1};case vo:case U0:case pi:return{byteLength:2,components:1};case Nc:case Fc:return{byteLength:2,components:4};case di:case Uc:case ti:return{byteLength:4,components:1};case N0:case F0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);function Md(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function _1(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
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
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
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
#endif`,E1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T1=`#ifdef USE_BATCHING
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
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L1=`#ifdef USE_IRIDESCENCE
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
#endif`,D1=`#ifdef USE_BUMPMAP
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,G1=`#define PI 3.141592653589793
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
} // validated`,H1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V1=`vec3 transformedNormal = objectNormal;
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
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t2=`#ifdef USE_ENVMAP
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
#endif`,e2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o2=`#ifdef USE_GRADIENTMAP
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
}`,r2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h2=`#ifdef USE_ENVMAP
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
#endif`,u2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m2=`PhysicalMaterial material;
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
#endif`,g2=`uniform sampler2D dfgLUT;
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
}`,_2=`
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
#endif`,x2=`#if defined( RE_IndirectDiffuse )
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
#endif`,v2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,y2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R2=`#if defined( USE_POINTS_UV )
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
#endif`,C2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U2=`#ifdef USE_MORPHTARGETS
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
#endif`,N2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,B2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,G2=`#ifdef USE_NORMALMAP
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
#endif`,H2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
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
#endif`;const xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Dm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,zm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,Xm=`#define TOON
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
}`,Ym=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:x1,alphahash_pars_fragment:v1,alphamap_fragment:M1,alphamap_pars_fragment:y1,alphatest_fragment:S1,alphatest_pars_fragment:b1,aomap_fragment:w1,aomap_pars_fragment:E1,batching_pars_vertex:T1,batching_vertex:A1,begin_vertex:R1,beginnormal_vertex:C1,bsdfs:P1,iridescence_fragment:L1,bumpmap_pars_fragment:D1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:U1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:F1,color_fragment:O1,color_pars_fragment:B1,color_pars_vertex:z1,color_vertex:k1,common:G1,cube_uv_reflection_fragment:H1,defaultnormal_vertex:V1,displacementmap_pars_vertex:W1,displacementmap_vertex:X1,emissivemap_fragment:q1,emissivemap_pars_fragment:Y1,colorspace_fragment:$1,colorspace_pars_fragment:Z1,envmap_fragment:K1,envmap_common_pars_fragment:J1,envmap_pars_fragment:Q1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:h2,envmap_vertex:t2,fog_vertex:e2,fog_pars_vertex:n2,fog_fragment:i2,fog_pars_fragment:s2,gradientmap_pars_fragment:o2,lightmap_pars_fragment:r2,lights_lambert_fragment:a2,lights_lambert_pars_fragment:c2,lights_pars_begin:l2,lights_toon_fragment:u2,lights_toon_pars_fragment:f2,lights_phong_fragment:d2,lights_phong_pars_fragment:p2,lights_physical_fragment:m2,lights_physical_pars_fragment:g2,lights_fragment_begin:_2,lights_fragment_maps:x2,lights_fragment_end:v2,lightprobes_pars_fragment:M2,logdepthbuf_fragment:y2,logdepthbuf_pars_fragment:S2,logdepthbuf_pars_vertex:b2,logdepthbuf_vertex:w2,map_fragment:E2,map_pars_fragment:T2,map_particle_fragment:A2,map_particle_pars_fragment:R2,metalnessmap_fragment:C2,metalnessmap_pars_fragment:P2,morphinstance_vertex:L2,morphcolor_vertex:D2,morphnormal_vertex:I2,morphtarget_pars_vertex:U2,morphtarget_vertex:N2,normal_fragment_begin:F2,normal_fragment_maps:O2,normal_pars_fragment:B2,normal_pars_vertex:z2,normal_vertex:k2,normalmap_pars_fragment:G2,clearcoat_normal_fragment_begin:H2,clearcoat_normal_fragment_maps:V2,clearcoat_pars_fragment:W2,iridescence_pars_fragment:X2,opaque_fragment:q2,packing:Y2,premultiplied_alpha_fragment:$2,project_vertex:Z2,dithering_fragment:K2,dithering_pars_fragment:J2,roughnessmap_fragment:Q2,roughnessmap_pars_fragment:j2,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:em,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:om,skinning_vertex:rm,skinnormal_vertex:am,specularmap_fragment:cm,specularmap_pars_fragment:lm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:fm,transmission_pars_fragment:dm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:xm,background_frag:vm,backgroundCube_vert:Mm,backgroundCube_frag:ym,cube_vert:Sm,cube_frag:bm,depth_vert:wm,depth_frag:Em,distance_vert:Tm,distance_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Pm,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Im,meshlambert_vert:Um,meshlambert_frag:Nm,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:km,meshphong_frag:Gm,meshphysical_vert:Hm,meshphysical_frag:Vm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:Ym,shadow_vert:$m,shadow_frag:Zm,sprite_vert:Km,sprite_frag:Jm},It={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ai={basic:{uniforms:An([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:An([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:An([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:An([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:An([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:An([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:An([It.points,It.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:An([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:An([It.common,It.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:An([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:An([It.sprite,It.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:An([It.common,It.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:An([It.lights,It.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ai.physical={uniforms:An([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const da={r:0,b:0,g:0},Qm=new Le,yd=new se;yd.set(-1,0,0,0,1,0,0,0,1);function jm(i,t,e,n,s,o){const r=new Ht(0);let a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const v=x.backgroundBlurriness>0;M=t.get(M,v)}return M}function m(x){let M=!1;const v=d(x);v===null?g(r,a):v&&v.isColor&&(g(v,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,M){const v=d(M);v&&(v.isCubeTexture||v.mapping===Fr)?(c===void 0&&(c=new oe(new Ne(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:wo(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yd),c.material.toneMapped=de.getTransfer(v.colorSpace)!==be,(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new oe(new mi(2,2),new Dn({name:"BackgroundMaterial",uniforms:wo(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=de.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){x.getRGB(da,cd(i)),e.buffers.color.setClear(da.r,da.g,da.b,M,o)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,M=1){r.set(x),a=M,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(r,a)},render:m,addToRenderList:_,dispose:p}}function tg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(C,L,P,R,I){let N=!1;const F=f(C,R,P,L);o!==F&&(o=F,c(o.object)),N=d(C,R,P,I),N&&m(C,R,P,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,v(C,L,P,R),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function f(C,L,P,R){const I=R.wireframe===!0;let N=n[L.id];N===void 0&&(N={},n[L.id]=N);const F=C.isInstancedMesh===!0?C.id:0;let V=N[F];V===void 0&&(V={},N[F]=V);let H=V[P.id];H===void 0&&(H={},V[P.id]=H);let J=H[I];return J===void 0&&(J=u(l()),H[I]=J),J}function u(C){const L=[],P=[],R=[];for(let I=0;I<e;I++)L[I]=0,P[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:R,object:C,attributes:{},index:null}}function d(C,L,P,R){const I=o.attributes,N=L.attributes;let F=0;const V=P.getAttributes();for(const H in V)if(V[H].location>=0){const et=I[H];let St=N[H];if(St===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;F++}return o.attributesNum!==F||o.index!==R}function m(C,L,P,R){const I={},N=L.attributes;let F=0;const V=P.getAttributes();for(const H in V)if(V[H].location>=0){let et=N[H];et===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(et=C.instanceColor));const St={};St.attribute=et,et&&et.data&&(St.data=et.data),I[H]=St,F++}o.attributes=I,o.attributesNum=F,o.index=R}function _(){const C=o.newAttributes;for(let L=0,P=C.length;L<P;L++)C[L]=0}function g(C){p(C,0)}function p(C,L){const P=o.newAttributes,R=o.enabledAttributes,I=o.attributeDivisors;P[C]=1,R[C]===0&&(i.enableVertexAttribArray(C),R[C]=1),I[C]!==L&&(i.vertexAttribDivisor(C,L),I[C]=L)}function x(){const C=o.newAttributes,L=o.enabledAttributes;for(let P=0,R=L.length;P<R;P++)L[P]!==C[P]&&(i.disableVertexAttribArray(P),L[P]=0)}function M(C,L,P,R,I,N,F){F===!0?i.vertexAttribIPointer(C,L,P,I,N):i.vertexAttribPointer(C,L,P,R,I,N)}function v(C,L,P,R){_();const I=R.attributes,N=P.getAttributes(),F=L.defaultAttributeValues;for(const V in N){const H=N[V];if(H.location>=0){let J=I[V];if(J===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),J!==void 0){const et=J.normalized,St=J.itemSize,mt=t.get(J);if(mt===void 0)continue;const Ut=mt.buffer,kt=mt.type,G=mt.bytesPerElement,O=kt===i.INT||kt===i.UNSIGNED_INT||J.gpuType===Uc;if(J.isInterleavedBufferAttribute){const Y=J.data,rt=Y.stride,_t=J.offset;if(Y.isInstancedInterleavedBuffer){for(let z=0;z<H.locationSize;z++)p(H.location+z,Y.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let z=0;z<H.locationSize;z++)g(H.location+z);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let z=0;z<H.locationSize;z++)M(H.location+z,St/H.locationSize,kt,et,rt*G,(_t+St/H.locationSize*z)*G,O)}else{if(J.isInstancedBufferAttribute){for(let Y=0;Y<H.locationSize;Y++)p(H.location+Y,J.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Y=0;Y<H.locationSize;Y++)g(H.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let Y=0;Y<H.locationSize;Y++)M(H.location+Y,St/H.locationSize,kt,et,St*G,St/H.locationSize*Y*G,O)}}else if(F!==void 0){const et=F[V];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(H.location,et);break;case 3:i.vertexAttrib3fv(H.location,et);break;case 4:i.vertexAttrib4fv(H.location,et);break;default:i.vertexAttrib1fv(H.location,et)}}}}x()}function S(){E();for(const C in n){const L=n[C];for(const P in L){const R=L[P];for(const I in R){const N=R[I];for(const F in N)h(N[F].object),delete N[F];delete R[I]}}delete n[C]}}function y(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const P in L){const R=L[P];for(const I in R){const N=R[I];for(const F in N)h(N[F].object),delete N[F];delete R[I]}}delete n[C.id]}function w(C){for(const L in n){const P=n[L];for(const R in P){const I=P[R];if(I[C.id]===void 0)continue;const N=I[C.id];for(const F in N)h(N[F].object),delete N[F];delete I[C.id]}}}function b(C){for(const L in n){const P=n[L],R=C.isInstancedMesh===!0?C.id:0,I=P[R];if(I!==void 0){for(const N in I){const F=I[N];for(const V in F)h(F[V].object),delete F[V];delete I[N]}delete P[R],Object.keys(P).length===0&&delete n[L]}}}function E(){T(),r=!0,o!==s&&(o=s,c(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfObject:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function eg(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function ng(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==ei&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==kn&&w!==ti&&!b&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:y}}function ig(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Si,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||o&&!g)o?h(null):c();else{const x=o?0:n,M=x*4;let v=p.clippingState||null;l.value=v,v=h(m,u,M,d);for(let S=0;S!==M;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=d;M!==_;++M,v+=4)r.copy(f[M]).applyMatrix4(x,a),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const ro=4,sg=6,og=20,rg=256,Go=new nl,$h=new Ht;let Il=null,Ul=0,Nl=0,Fl=!1;const ag=new B,Ms=new B;class l0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=ag}=o;Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Il,Ul,Nl),this._renderer.xr.enabled=Fl,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:pi,format:ei,colorSpace:br,depthBuffer:!1},s=Zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cg(o)),this._blurMaterial=hg(o,t,e),this._ggxMaterial=lg(o,t,e)}return s}_compileMaterial(t){const e=new oe(new Ae,t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s,o){const l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor($h),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new Ne,new Gn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,p=!0):(g.color.copy($h),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const S=this._cubeSize;js(s,v*S,M>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===us||t.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-ro?n-m+ro:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,js(o,g,p,3*_,2*_),s.setRenderTarget(o),s.render(a,Go),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-n,js(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(a,Go)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-ro?s-this._lodMax+ro:0),u=4*(this._cubeSize-h);js(e,f,u,3*h,2*h),r.setRenderTarget(e),r.render(l,Go)}}function cg(i){const t=[],e=[];let n=i;const s=i-ro+1+sg;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){const x=p%3*2/3-1,M=p>2?0:-1,v=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];m.set(v,d*u*p);for(let S=0;S<u;S++){const y=h[S*2]*2-1,w=h[S*2+1]*2-1;p===0?Ms.set(1,w,y):p===1?Ms.set(-y,1,-w):p===2?Ms.set(-y,w,1):p===3?Ms.set(-1,w,-y):p===4?Ms.set(-y,-1,w):Ms.set(y,w,-1),Ms.toArray(_,(p*u+S)*d)}}const g=new Ae;g.setAttribute("position",new $n(m,d)),g.setAttribute("outputDirection",new $n(_,d)),e.push(new oe(g,null)),n>ro&&n--}return{lodMeshes:e,sizeLods:t}}function Zh(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lg(i,t,e){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hg(i,t,e){return new Dn({name:"SphericalGaussianBlur",defines:{SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Kh(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Jh(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class oh extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ne(5,5,5),o=new Dn({name:"CubemapFromEquirect",uniforms:wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ti});o.uniforms.tEquirect.value=e;const r=new oe(s,o),a=e.minFilter;return e.minFilter===as&&(e.minFilter=un),new _d(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function ug(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?r(u):o(u)}function o(u){if(u&&u.isTexture){const d=u.mapping;if(d===or||d===Ca)if(t.has(u)){const m=t.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new oh(m.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,m=d===or||d===Ca,_=d===us||d===Cs;if(m||_){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new l0(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return m&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new l0(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===or?u.mapping=us:d===Ca&&(u.mapping=Cs),u}function l(u){let d=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function fg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ts("WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const x=d.array;_=d.version;for(let M=0,v=x.length;M<v;M+=3){const S=x[M+0],y=x[M+1],w=x[M+2];u.push(S,y,y,w,w,S)}}else{const x=m.array;_=m.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const S=M+0,y=M+1,w=M+2;u.push(S,y,y,w,w,S)}}const g=new(m.count>=65535?X0:W0)(u,1);g.version=_;const p=o.get(f);p&&t.remove(p),o.set(f,g)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function pg(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,u){i.drawElements(n,u,o,f*r),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,o,f*r,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:pe("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,t,e){const n=new WeakMap,s=new Ge;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const y=new Float32Array(v*S*4*f),w=new G0(y,v,S,f);w.type=ti,w.needsUpdate=!0;const b=M*4;for(let T=0;T<f;T++){const C=g[T],L=p[T],P=x[T],R=v*S*4*T;for(let I=0;I<C.count;I++){const N=I*b;d===!0&&(s.fromBufferAttribute(C,I),y[R+N+0]=s.x,y[R+N+1]=s.y,y[R+N+2]=s.z,y[R+N+3]=0),m===!0&&(s.fromBufferAttribute(L,I),y[R+N+4]=s.x,y[R+N+5]=s.y,y[R+N+6]=s.z,y[R+N+7]=0),_===!0&&(s.fromBufferAttribute(P,I),y[R+N+8]=s.x,y[R+N+9]=s.y,y[R+N+10]=s.z,y[R+N+11]=P.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new vt(v,S)},n.set(a,u),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function _g(i,t,e,n,s){let o=new WeakMap;function r(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(o.get(u)!==h&&(t.update(u),o.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return u}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const xg={[E0]:"LINEAR_TONE_MAPPING",[T0]:"REINHARD_TONE_MAPPING",[A0]:"CINEON_TONE_MAPPING",[R0]:"ACES_FILMIC_TONE_MAPPING",[P0]:"AGX_TONE_MAPPING",[L0]:"NEUTRAL_TONE_MAPPING",[C0]:"CUSTOM_TONE_MAPPING"};function vg(i,t,e,n,s,o){const r=new ni(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ae;c.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ee([0,2,0,0,2,0],2));const h=new hd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new oe(c,h),u=new nl(-1,1,1,-1,0,1);let d=null,m=null,_=!1,g,p=null,x=[],M=!1;this.setSize=function(v,S){r.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let y=0;y<x.length;y++){const w=x[y];w.setSize&&w.setSize(v,S)}},this.setEffects=function(v){x=v,M=x.length>0&&x[0].isRenderPass===!0;const S=r.width,y=r.height;x.length>0&&a===null&&(a=new ni(S,y,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new ni(S,y,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){const b=x[w];b.setSize&&b.setSize(S,y)}},this.begin=function(v,S){if(_||v.toneMapping===fi&&x.length===0)return!1;if(p=S,S!==null){const y=S.width,w=S.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return M===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=fi,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=g,_=!0;let y=r,w=a;for(let b=0;b<x.length;b++){const E=x[b];E.enabled!==!1&&(E.render(v,w,y,S),E.needsSwap!==!1&&(y=w,w=w===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},de.getTransfer(d)===be&&(h.defines.SRGB_TRANSFER="");const b=xg[m];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(p),v.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Sd=new cn,h0=new So(1,1),bd=new G0,wd=new $f,Ed=new $0,Qh=[],jh=[],tu=new Float32Array(16),eu=new Float32Array(9),nu=new Float32Array(4);function Co(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Qh[s];if(o===void 0&&(o=new Float32Array(s),Qh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sl(i,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;nu.set(n),i.uniformMatrix2fv(this.addr,!1,nu),sn(e,n)}}function Eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),sn(e,n)}}function Tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;tu.set(n),i.uniformMatrix4fv(this.addr,!1,tu),sn(e,n)}}function Ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function Lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(h0.compareFunction=e.isReversedDepthBuffer()?Hc:Gc,o=h0):o=Sd,e.setTexture2D(t||o,s)}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wd,s)}function Og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ed,s)}function Bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bd,s)}function zg(i){switch(i){case 5126:return Mg;case 35664:return yg;case 35665:return Sg;case 35666:return bg;case 35674:return wg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ig;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}function kg(i,t){i.uniform1fv(this.addr,t)}function Gg(i,t){const e=Co(t,this.size,2);i.uniform2fv(this.addr,e)}function Hg(i,t){const e=Co(t,this.size,3);i.uniform3fv(this.addr,e)}function Vg(i,t){const e=Co(t,this.size,4);i.uniform4fv(this.addr,e)}function Wg(i,t){const e=Co(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xg(i,t){const e=Co(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){const e=Co(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yg(i,t){i.uniform1iv(this.addr,t)}function $g(i,t){i.uniform2iv(this.addr,t)}function Zg(i,t){i.uniform3iv(this.addr,t)}function Kg(i,t){i.uniform4iv(this.addr,t)}function Jg(i,t){i.uniform1uiv(this.addr,t)}function Qg(i,t){i.uniform2uiv(this.addr,t)}function jg(i,t){i.uniform3uiv(this.addr,t)}function t3(i,t){i.uniform4uiv(this.addr,t)}function e3(i,t,e){const n=this.cache,s=t.length,o=sl(e,s);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=h0:r=Sd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function n3(i,t,e){const n=this.cache,s=t.length,o=sl(e,s);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||wd,o[r])}function i3(i,t,e){const n=this.cache,s=t.length,o=sl(e,s);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ed,o[r])}function s3(i,t,e){const n=this.cache,s=t.length,o=sl(e,s);nn(n,o)||(i.uniform1iv(this.addr,o),sn(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||bd,o[r])}function o3(i){switch(i){case 5126:return kg;case 35664:return Gg;case 35665:return Hg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return $g;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Qg;case 36295:return jg;case 36296:return t3;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return n3;case 35680:case 36300:case 36308:case 36293:return i3;case 36289:case 36303:case 36311:case 36292:return s3}}class r3{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}}class a3{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o3(e.type)}}class c3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function iu(i,t){i.seq.push(t),i.map[t.id]=t}function l3(i,t,e){const n=i.name,s=n.length;for(Ol.lastIndex=0;;){const o=Ol.exec(n),r=Ol.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){iu(e,c===void 0?new r3(a,i,t):new a3(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new c3(a),iu(e,f)),e=f}}}class Ua{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);l3(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function su(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const h3=37297;let u3=0;function f3(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const ou=new se;function d3(i){de._getMatrix(ou,de.workingColorSpace,i);const t=`mat3( ${ou.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ru(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+f3(i.getShaderSource(t),a)}else return o}function p3(i,t){const e=d3(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const m3={[E0]:"Linear",[T0]:"Reinhard",[A0]:"Cineon",[R0]:"ACESFilmic",[P0]:"AgX",[L0]:"Neutral",[C0]:"Custom"};function g3(i,t){const e=m3[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pa=new B;function _3(){de.getLuminanceCoefficients(pa);const i=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function v3(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M3(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Zo(i){return i!==""}function au(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function u0(i){return i.replace(y3,b3)}const S3=new Map;function b3(i,t){let e=ae[t];if(e===void 0){const n=S3.get(t);if(n!==void 0)e=ae[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return u0(e)}const w3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(i){return i.replace(w3,E3)}function E3(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function hu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const T3={[sr]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function A3(i){return T3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R3={[us]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function C3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const P3={[Cs]:"ENVMAP_MODE_REFRACTION"};function L3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D3={[Nr]:"ENVMAP_BLENDING_MULTIPLY",[Df]:"ENVMAP_BLENDING_MIX",[If]:"ENVMAP_BLENDING_ADD"};function I3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D3[i.combine]||"ENVMAP_BLENDING_NONE"}function U3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function N3(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=A3(e),c=C3(e),h=L3(e),f=I3(e),u=U3(e),d=x3(e),m=v3(o),_=s.createProgram();let g,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zo).join(`
`),p.length>0&&(p+=`
`)):(g=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),p=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?ae.tonemapping_pars_fragment:"",e.toneMapping!==fi?g3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,p3("linearToOutputTexel",e.outputColorSpace),_3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),r=u0(r),r=au(r,e),r=cu(r,e),a=u0(a),a=au(a,e),a=cu(a,e),r=lu(r),a=lu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+g+r,v=x+p+a,S=su(s,s.VERTEX_SHADER,M),y=su(s,s.FRAGMENT_SHADER,v);s.attachShader(_,S),s.attachShader(_,y),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",P=s.getShaderInfoLog(S)||"",R=s.getShaderInfoLog(y)||"",I=L.trim(),N=P.trim(),F=R.trim();let V=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,y);else{const J=ru(s,S,"vertex"),et=ru(s,y,"fragment");pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+J+`
`+et)}else I!==""?te("WebGLProgram: Program Info Log:",I):(N===""||F==="")&&(H=!1);H&&(C.diagnostics={runnable:V,programLog:I,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:p}})}s.deleteShader(S),s.deleteShader(y),b=new Ua(s,_),E=M3(s,_)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,h3)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u3++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=y,this}let F3=0;class O3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new B3(t),e.set(t,n)),n}}class B3{constructor(t){this.id=F3++,this.code=t,this.usedTimes=0}}function z3(i){return i===fs||i===Mr||i===yr}function k3(i,t,e,n,s,o){const r=new H0,a=new O3,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function _(b,E,T,C,L,P){const R=C.fog,I=L.geometry,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,V=t.get(b.envMap||N,F),H=V&&V.mapping===Fr?V.image.height:null,J=d[b.type];b.precision!==null&&(u=n.getMaxPrecision(b.precision),u!==b.precision&&te("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,St=et!==void 0?et.length:0;let mt=0;I.morphAttributes.position!==void 0&&(mt=1),I.morphAttributes.normal!==void 0&&(mt=2),I.morphAttributes.color!==void 0&&(mt=3);let Ut,kt,G,O;if(J){const Re=ai[J];Ut=Re.vertexShader,kt=Re.fragmentShader}else{Ut=b.vertexShader,kt=b.fragmentShader;const Re=a.getVertexShaderStage(b),ve=a.getFragmentShaderStage(b);a.update(b,Re,ve),G=Re.id,O=ve.id}const Y=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),_t=L.isInstancedMesh===!0,z=L.isBatchedMesh===!0,nt=!!b.map,pt=!!b.matcap,q=!!V,it=!!b.aoMap,at=!!b.lightMap,W=!!b.bumpMap&&b.wireframe===!1,X=!!b.normalMap,gt=!!b.displacementMap,ht=!!b.emissiveMap,Mt=!!b.metalnessMap,At=!!b.roughnessMap,k=b.anisotropy>0,Jt=b.clearcoat>0,Kt=b.dispersion>0,U=b.retroreflectivity>0,A=b.iridescence>0,K=b.sheen>0,st=b.transmission>0,ct=k&&!!b.anisotropyMap,yt=Jt&&!!b.clearcoatMap,Tt=Jt&&!!b.clearcoatNormalMap,lt=Jt&&!!b.clearcoatRoughnessMap,dt=A&&!!b.iridescenceMap,Pt=A&&!!b.iridescenceThicknessMap,qt=K&&!!b.sheenColorMap,Lt=K&&!!b.sheenRoughnessMap,wt=!!b.specularMap,Yt=!!b.specularColorMap,Qt=!!b.specularIntensityMap,ne=st&&!!b.transmissionMap,Z=st&&!!b.thicknessMap,Rt=!!b.gradientMap,ut=!!b.alphaMap,Ct=b.alphaTest>0,Nt=!!b.alphaHash,xt=!!b.extensions;let $t=fi;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&($t=i.toneMapping);const Vt={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:Ut,fragmentShader:kt,defines:b.defines,customVertexShaderID:G,customFragmentShaderID:O,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:z,batchingColor:z&&L._colorsTexture!==null,instancing:_t,instancingColor:_t&&L.instanceColor!==null,instancingMorph:_t&&L.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:nt,matcap:pt,envMap:q,envMapMode:q&&V.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:at,bumpMap:W,normalMap:X,displacementMap:gt,emissiveMap:ht,normalMapObjectSpace:X&&b.normalMapType===Nf,normalMapTangentSpace:X&&b.normalMapType===Sr,packedNormalMap:X&&b.normalMapType===Sr&&z3(b.normalMap.format),metalnessMap:Mt,roughnessMap:At,anisotropy:k,anisotropyMap:ct,clearcoat:Jt,clearcoatMap:yt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:lt,dispersion:Kt,retroreflection:U,iridescence:A,iridescenceMap:dt,iridescenceThicknessMap:Pt,sheen:K,sheenColorMap:qt,sheenRoughnessMap:Lt,specularMap:wt,specularColorMap:Yt,specularIntensityMap:Qt,transmission:st,transmissionMap:ne,thicknessMap:Z,gradientMap:Rt,opaque:b.transparent===!1&&b.blending===co&&b.alphaToCoverage===!1,alphaMap:ut,alphaTest:Ct,alphaHash:Nt,combine:b.combine,mapUv:nt&&m(b.map.channel),aoMapUv:it&&m(b.aoMap.channel),lightMapUv:at&&m(b.lightMap.channel),bumpMapUv:W&&m(b.bumpMap.channel),normalMapUv:X&&m(b.normalMap.channel),displacementMapUv:gt&&m(b.displacementMap.channel),emissiveMapUv:ht&&m(b.emissiveMap.channel),metalnessMapUv:Mt&&m(b.metalnessMap.channel),roughnessMapUv:At&&m(b.roughnessMap.channel),anisotropyMapUv:ct&&m(b.anisotropyMap.channel),clearcoatMapUv:yt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&m(b.sheenRoughnessMap.channel),specularMapUv:wt&&m(b.specularMap.channel),specularColorMapUv:Yt&&m(b.specularColorMap.channel),specularIntensityMapUv:Qt&&m(b.specularIntensityMap.channel),transmissionMapUv:ne&&m(b.transmissionMap.channel),thicknessMapUv:Z&&m(b.thicknessMap.channel),alphaMapUv:ut&&m(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(X||k),vertexNormals:!!I.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(nt||ut),fog:!!R,useFog:b.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||I.attributes.normal===void 0&&X===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:mt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:nt&&b.map.isVideoTexture===!0&&de.getTransfer(b.map.colorSpace)===be,decodeVideoTextureEmissive:ht&&b.emissiveMap.isVideoTexture===!0&&de.getTransfer(b.emissiveMap.colorSpace)===be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===en,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&b.extensions.multiDraw===!0||z)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function g(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const T in b.defines)E.push(T),E.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(p(E,b),x(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function p(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numSunLights),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numSunLightShadows),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),b.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),b.push(r.mask)}function M(b){const E=d[b.type];let T;if(E){const C=ai[E];T=ld.clone(C.uniforms)}else T=b.uniforms;return T}function v(b,E){let T=h.get(E);return T!==void 0?++T.usedTimes:(T=new N3(i,E,b,s),c.push(T),h.set(E,T)),T}function S(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function y(b){a.remove(b)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:w}}function G3(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function H3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function uu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fu(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,_,g,p){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:m,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=m,x.materialVariant=r(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=g,x.group=p),t++,x}function l(u,d,m,_,g,p,x){x.reversedDepth===!0&&(g=-g);const M=a(u,d,m,_,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(u,d,m,_,g,p){const x=a(u,d,m,_,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):e.unshift(x)}function h(u,d){e.length>1&&e.sort(u||H3),n.length>1&&n.sort(d||uu),s.length>1&&s.sort(d||uu)}function f(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:h}}function V3(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new fu,i.set(n,[r])):s>=o.length?(r=new fu,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function W3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Ht};break;case"SpotLight":e={position:new B,direction:new B,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function X3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let q3=0;function Y3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $3(i){const t=new W3,e=X3(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,o=new Le,r=new Le;function a(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,x=0,M=0,v=0,S=0,y=0,w=0,b=0,E=0,T=0;c.sort(Y3);for(let L=0,P=c.length;L<P;L++){const R=c[L],I=R.color,N=R.intensity,F=R.distance;let V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===fs?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=I.r*N,f+=I.g*N,u+=I.b*N;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],N);T++}else if(R.isSunLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,et=e.get(R);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=V;const St=J.getViewportCount();for(let mt=0;mt<St;mt++)n.sunShadowMatrix[_+mt]=J.getMatrix(mt),n.sunShadowCascade[_+mt]=J._cascadeData[mt];_+=St,m++}n.sun[d]=H,d++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,et=e.get(R);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=R.shadow.matrix,S++}n.directional[g]=H,g++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(I).multiplyScalar(N),H.distance=F,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;const J=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,J.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=J.matrix,R.castShadow){const et=e.get(R);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=V,w++}x++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(I).multiplyScalar(N),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=H,M++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const J=R.shadow,et=e.get(R);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=R.shadow.matrix,y++}n.point[p]=H,p++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(N),H.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[v]=H,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.sunLength!==d||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==M||C.hemiLength!==v||C.numSunShadows!==m||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==w||C.numSpotMaps!==b||C.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.sunLength=d,C.directionalLength=g,C.pointLength=p,C.spotLength=x,C.rectAreaLength=M,C.hemiLength=v,C.numSunShadows=m,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=w,C.numSpotMaps=b,C.numLightProbes=T,n.version=q3++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){const v=c[x];if(v.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),f++}else if(v.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(v.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),r.identity(),o.copy(v.matrixWorld),o.premultiply(p),r.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function du(i){const t=new $3(i),e=[],n=[],s=[];function o(u){f.camera=u,e.length=0,n.length=0,s.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function Z3(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new du(i),t.set(s,[a])):o>=r.length?(a=new du(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const K3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J3=`uniform sampler2D shadow_pass;
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
}`,Q3=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],j3=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],pu=new Le,Ho=new B,Bl=new B;function t_(i,t,e){let n=new qc;const s=new vt,o=new vt,r=new Ge,a=new ud,l=new fd,c={},h=e.maxTextureSize,f={[ui]:fn,[fn]:ui,[en]:en},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:K3,fragmentShader:J3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ae;m.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new oe(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let p=this.type;this.render=function(y,w,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===df&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sr);const E=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ti),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=p!==this.type;P&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(I=>I.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,I=y.length;R<I;R++){const N=y[R],F=N.shadow;if(F===void 0){te("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const V=F.getFrameExtents();s.multiply(V),o.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/V.x),s.x=o.x*V.x,F.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/V.y),s.y=o.y*V.y,F.mapSize.y=o.y));const H=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||P===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===oo){if(N.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ni(s.x,s.y,{format:fs,type:pi,minFilter:un,magFilter:un,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new So(s.x,s.y,ti),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Li,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ye,F.map.depthTexture.magFilter=Ye}else N.isPointLight?(F.map=new oh(s.x),F.map.depthTexture=new jf(s.x,di)):(F.map=new ni(s.x,s.y),F.map.depthTexture=new So(s.x,s.y,di)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Li,this.type===sr?(F.map.depthTexture.compareFunction=H?Hc:Gc,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ye,F.map.depthTexture.magFilter=Ye);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const J=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();N.isPointLight!==!0&&F.updateMatrices(N,b);for(let et=0;et<J;et++){const St=F.getCamera(et);if(N.isPointLight){const mt=F.camera,Ut=F.matrix,kt=N.distance||mt.far;kt!==mt.far&&(mt.far=kt,mt.updateProjectionMatrix()),Ho.setFromMatrixPosition(N.matrixWorld),mt.position.copy(Ho),Bl.copy(mt.position),Bl.add(Q3[et]),mt.up.copy(j3[et]),mt.lookAt(Bl),mt.updateMatrixWorld(),Ut.makeTranslation(-Ho.x,-Ho.y,-Ho.z),pu.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(pu,mt.coordinateSystem,mt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,et),i.clear();else{et===0&&(i.setRenderTarget(F.map),i.clear());const mt=F.getViewport(et);r.set(o.x*mt.x,o.y*mt.y,o.x*mt.z,o.y*mt.w),L.viewport(r)}n=F.getFrustum(et),v(w,b,St,N,this.type)}F.isPointLightShadow!==!0&&this.type===oo&&x(F,b),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,T,C)};function x(y,w){const b=t.update(_);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new ni(s.x,s.y,{format:fs,type:pi}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,b,u,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,b,d,_,null)}function M(y,w,b,E){let T=null;const C=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)T=C;else if(T=b.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=T.uuid,P=w.uuid;let R=c[L];R===void 0&&(R={},c[L]=R);let I=R[P];I===void 0&&(I=T.clone(),R[P]=I,w.addEventListener("dispose",S)),T=I}if(T.visible=w.visible,T.wireframe=w.wireframe,E===oo?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const L=i.properties.get(T);L.light=b}return T}function v(y,w,b,E,T){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&T===oo)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const P=t.update(y),R=y.material;if(Array.isArray(R)){const I=P.groups;for(let N=0,F=I.length;N<F;N++){const V=I[N],H=R[V.materialIndex];if(H&&H.visible){const J=M(y,H,E,T);y.onBeforeShadow(i,y,w,b,P,J,V),i.renderBufferDirect(b,null,P,J,y,V),y.onAfterShadow(i,y,w,b,P,J,V)}}}else if(R.visible){const I=M(y,R,E,T);y.onBeforeShadow(i,y,w,b,P,I,null),i.renderBufferDirect(b,null,P,I,y,null),y.onAfterShadow(i,y,w,b,P,I,null)}}const L=y.children;for(let P=0,R=L.length;P<R;P++)v(L[P],w,b,E,T)}function S(y){y.target.removeEventListener("dispose",S);for(const b in c){const E=c[b],T=y.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function e_(i,t){function e(){let Z=!1;const Rt=new Ge;let ut=null;const Ct=new Ge(0,0,0,0);return{setMask:function(Nt){ut!==Nt&&!Z&&(i.colorMask(Nt,Nt,Nt,Nt),ut=Nt)},setLocked:function(Nt){Z=Nt},setClear:function(Nt,xt,$t,Vt,Re){Re===!0&&(Nt*=Vt,xt*=Vt,$t*=Vt),Rt.set(Nt,xt,$t,Vt),Ct.equals(Rt)===!1&&(i.clearColor(Nt,xt,$t,Vt),Ct.copy(Rt))},reset:function(){Z=!1,ut=null,Ct.set(-1,0,0,0)}}}function n(){let Z=!1,Rt=!1,ut=null,Ct=null,Nt=null;return{setReversed:function(xt){if(Rt!==xt){const $t=t.get("EXT_clip_control");xt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Rt=xt;const Vt=Nt;Nt=null,this.setClear(Vt)}},getReversed:function(){return Rt},setTest:function(xt){xt?Y(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(xt){ut!==xt&&!Z&&(i.depthMask(xt),ut=xt)},setFunc:function(xt){if(Rt&&(xt=np[xt]),Ct!==xt){switch(xt){case ka:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case xo:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=xt}},setLocked:function(xt){Z=xt},setClear:function(xt){Nt!==xt&&(Nt=xt,Rt&&(xt=1-xt),i.clearDepth(xt))},reset:function(){Z=!1,ut=null,Ct=null,Nt=null,Rt=!1}}}function s(){let Z=!1,Rt=null,ut=null,Ct=null,Nt=null,xt=null,$t=null,Vt=null,Re=null;return{setTest:function(ve){Z||(ve?Y(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(ve){Rt!==ve&&!Z&&(i.stencilMask(ve),Rt=ve)},setFunc:function(ve,Hn,bn){(ut!==ve||Ct!==Hn||Nt!==bn)&&(i.stencilFunc(ve,Hn,bn),ut=ve,Ct=Hn,Nt=bn)},setOp:function(ve,Hn,bn){(xt!==ve||$t!==Hn||Vt!==bn)&&(i.stencilOp(ve,Hn,bn),xt=ve,$t=Hn,Vt=bn)},setLocked:function(ve){Z=ve},setClear:function(ve){Re!==ve&&(i.clearStencil(ve),Re=ve)},reset:function(){Z=!1,Rt=null,ut=null,Ct=null,Nt=null,xt=null,$t=null,Vt=null,Re=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,x=null,M=null,v=null,S=null,y=null,w=null,b=new Ht(0,0,0),E=0,T=!1,C=null,L=null,P=null,R=null,I=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,V=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=V>=2);let J=null,et={};const St=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Ut=new Ge().fromArray(St),kt=new Ge().fromArray(mt);function G(Z,Rt,ut,Ct){const Nt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(Z,xt),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<ut;$t++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(Rt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return xt}const O={};O[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),r.setFunc(xo),W(!1),X(jl),Y(i.CULL_FACE),it(Ti);function Y(Z){h[Z]!==!0&&(i.enable(Z),h[Z]=!0)}function rt(Z){h[Z]!==!1&&(i.disable(Z),h[Z]=!1)}function _t(Z,Rt){return u[Z]!==Rt?(i.bindFramebuffer(Z,Rt),u[Z]=Rt,Z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Rt),Z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function z(Z,Rt){let ut=m,Ct=!1;if(Z){ut=d.get(Rt),ut===void 0&&(ut=[],d.set(Rt,ut));const Nt=Z.textures;if(ut.length!==Nt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,$t=Nt.length;xt<$t;xt++)ut[xt]=i.COLOR_ATTACHMENT0+xt;ut.length=Nt.length,Ct=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(ut)}function nt(Z){return _!==Z?(i.useProgram(Z),_=Z,!0):!1}const pt={[ws]:i.FUNC_ADD,[mf]:i.FUNC_SUBTRACT,[gf]:i.FUNC_REVERSE_SUBTRACT};pt[_f]=i.MIN,pt[xf]=i.MAX;const q={[vf]:i.ZERO,[Mf]:i.ONE,[yf]:i.SRC_COLOR,[b0]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[Ef]:i.DST_COLOR,[bf]:i.DST_ALPHA,[Sf]:i.ONE_MINUS_SRC_COLOR,[w0]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Cf]:i.ONE_MINUS_CONSTANT_COLOR,[Pf]:i.CONSTANT_ALPHA,[Lf]:i.ONE_MINUS_CONSTANT_ALPHA};function it(Z,Rt,ut,Ct,Nt,xt,$t,Vt,Re,ve){if(Z===Ti){g===!0&&(rt(i.BLEND),g=!1);return}if(g===!1&&(Y(i.BLEND),g=!0),Z!==pf){if(Z!==p||ve!==T){if((x!==ws||S!==ws)&&(i.blendEquation(i.FUNC_ADD),x=ws,S=ws),ve)switch(Z){case co:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _o:i.blendFunc(i.ONE,i.ONE);break;case t0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case e0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pe("WebGLState: Invalid blending: ",Z);break}else switch(Z){case co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case t0:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e0:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",Z);break}M=null,v=null,y=null,w=null,b.set(0,0,0),E=0,p=Z,T=ve}return}Nt=Nt||Rt,xt=xt||ut,$t=$t||Ct,(Rt!==x||Nt!==S)&&(i.blendEquationSeparate(pt[Rt],pt[Nt]),x=Rt,S=Nt),(ut!==M||Ct!==v||xt!==y||$t!==w)&&(i.blendFuncSeparate(q[ut],q[Ct],q[xt],q[$t]),M=ut,v=Ct,y=xt,w=$t),(Vt.equals(b)===!1||Re!==E)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Re),b.copy(Vt),E=Re),p=Z,T=!1}function at(Z,Rt){Z.side===en?rt(i.CULL_FACE):Y(i.CULL_FACE);let ut=Z.side===fn;Rt&&(ut=!ut),W(ut),Z.blending===co&&Z.transparent===!1?it(Ti):it(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),r.setFunc(Z.depthFunc),r.setTest(Z.depthTest),r.setMask(Z.depthWrite),o.setMask(Z.colorWrite);const Ct=Z.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ht(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(Z){C!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),C=Z)}function X(Z){Z!==uf?(Y(i.CULL_FACE),Z!==L&&(Z===jl?i.cullFace(i.BACK):Z===ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),L=Z}function gt(Z){Z!==P&&(F&&i.lineWidth(Z),P=Z)}function ht(Z,Rt,ut){Z?(Y(i.POLYGON_OFFSET_FILL),(R!==Rt||I!==ut)&&(R=Rt,I=ut,r.getReversed()&&(Rt=-Rt),i.polygonOffset(Rt,ut))):rt(i.POLYGON_OFFSET_FILL)}function Mt(Z){Z?Y(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function At(Z){Z===void 0&&(Z=i.TEXTURE0+N-1),J!==Z&&(i.activeTexture(Z),J=Z)}function k(Z,Rt,ut){ut===void 0&&(J===null?ut=i.TEXTURE0+N-1:ut=J);let Ct=et[ut];Ct===void 0&&(Ct={type:void 0,texture:void 0},et[ut]=Ct),(Ct.type!==Z||Ct.texture!==Rt)&&(J!==ut&&(i.activeTexture(ut),J=ut),i.bindTexture(Z,Rt||O[Z]),Ct.type=Z,Ct.texture=Rt)}function Jt(){const Z=et[J];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function A(){try{i.texSubImage2D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function K(){try{i.texSubImage3D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function yt(){try{i.texStorage2D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function Tt(){try{i.texStorage3D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function lt(){try{i.texImage2D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function dt(){try{i.texImage3D(...arguments)}catch(Z){pe("WebGLState:",Z)}}function Pt(Z){return f[Z]!==void 0?f[Z]:i.getParameter(Z)}function qt(Z,Rt){f[Z]!==Rt&&(i.pixelStorei(Z,Rt),f[Z]=Rt)}function Lt(Z){Ut.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),Ut.copy(Z))}function wt(Z){kt.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),kt.copy(Z))}function Yt(Z,Rt){let ut=c.get(Rt);ut===void 0&&(ut=new WeakMap,c.set(Rt,ut));let Ct=ut.get(Z);Ct===void 0&&(Ct=i.getUniformBlockIndex(Rt,Z.name),ut.set(Z,Ct))}function Qt(Z,Rt){const Ct=c.get(Rt).get(Z);l.get(Rt)!==Ct&&(i.uniformBlockBinding(Rt,Ct,Z.__bindingPointIndex),l.set(Rt,Ct))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,et={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,x=null,M=null,v=null,S=null,y=null,w=null,b=new Ht(0,0,0),E=0,T=!1,C=null,L=null,P=null,R=null,I=null,Ut.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:Y,disable:rt,bindFramebuffer:_t,drawBuffers:z,useProgram:nt,setBlending:it,setMaterial:at,setFlipSided:W,setCullFace:X,setLineWidth:gt,setPolygonOffset:ht,setScissorTest:Mt,activeTexture:At,bindTexture:k,unbindTexture:Jt,compressedTexImage2D:Kt,compressedTexImage3D:U,texImage2D:lt,texImage3D:dt,pixelStorei:qt,getParameter:Pt,updateUBOMapping:Yt,uniformBlockBinding:Qt,texStorage2D:yt,texStorage3D:Tt,texSubImage2D:A,texSubImage3D:K,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:Lt,viewport:wt,reset:ne}}function n_(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,A){return m?new OffscreenCanvas(U,A):Er("canvas")}function g(U,A,K){let st=1;const ct=Kt(U);if((ct.width>K||ct.height>K)&&(st=K/Math.max(ct.width,ct.height)),st<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const yt=Math.floor(st*ct.width),Tt=Math.floor(st*ct.height);u===void 0&&(u=_(yt,Tt));const lt=A?_(yt,Tt):u;return lt.width=yt,lt.height=Tt,lt.getContext("2d").drawImage(U,0,0,yt,Tt),te("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+yt+"x"+Tt+")."),lt}else return"data"in U&&te("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function p(U){return U.generateMipmaps}function x(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,A,K,st,ct,yt=!1){if(U!==null){if(i[U]!==void 0)return i[U];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Tt;st&&(Tt=t.get("EXT_texture_norm16"),Tt||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=A;if(A===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8),K===i.UNSIGNED_SHORT&&Tt&&(lt=Tt.R16_EXT),K===i.SHORT&&Tt&&(lt=Tt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),A===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8),K===i.UNSIGNED_SHORT&&Tt&&(lt=Tt.RG16_EXT),K===i.SHORT&&Tt&&(lt=Tt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RG8UI),K===i.UNSIGNED_SHORT&&(lt=i.RG16UI),K===i.UNSIGNED_INT&&(lt=i.RG32UI),K===i.BYTE&&(lt=i.RG8I),K===i.SHORT&&(lt=i.RG16I),K===i.INT&&(lt=i.RG32I)),A===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),K===i.UNSIGNED_INT&&(lt=i.RGB32UI),K===i.BYTE&&(lt=i.RGB8I),K===i.SHORT&&(lt=i.RGB16I),K===i.INT&&(lt=i.RGB32I)),A===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),K===i.UNSIGNED_INT&&(lt=i.RGBA32UI),K===i.BYTE&&(lt=i.RGBA8I),K===i.SHORT&&(lt=i.RGBA16I),K===i.INT&&(lt=i.RGBA32I)),A===i.RGB&&(K===i.UNSIGNED_SHORT&&Tt&&(lt=Tt.RGB16_EXT),K===i.SHORT&&Tt&&(lt=Tt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),A===i.RGBA){const dt=yt?wr:de.getTransfer(ct);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=dt===be?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Tt&&(lt=Tt.RGBA16_EXT),K===i.SHORT&&Tt&&(lt=Tt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function S(U,A){let K;return U?A===null||A===di||A===Mo?K=i.DEPTH24_STENCIL8:A===ti?K=i.DEPTH32F_STENCIL8:A===vo&&(K=i.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===di||A===Mo?K=i.DEPTH_COMPONENT24:A===ti?K=i.DEPTH_COMPONENT32F:A===vo&&(K=i.DEPTH_COMPONENT16),K}function y(U,A){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ye&&U.minFilter!==un?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function w(U){const A=U.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function b(U){const A=U.target;A.removeEventListener("dispose",b),C(A)}function E(U){const A=n.get(U);if(A.__webglInit===void 0)return;const K=U.source,st=d.get(K);if(st){const ct=st[A.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&T(U),Object.keys(st).length===0&&d.delete(K)}n.remove(U)}function T(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const K=U.source,st=d.get(K);delete st[A.__cacheKey],r.memory.textures--}function C(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(A.__webglFramebuffer[st]))for(let ct=0;ct<A.__webglFramebuffer[st].length;ct++)i.deleteFramebuffer(A.__webglFramebuffer[st][ct]);else i.deleteFramebuffer(A.__webglFramebuffer[st]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[st])}else{if(Array.isArray(A.__webglFramebuffer))for(let st=0;st<A.__webglFramebuffer.length;st++)i.deleteFramebuffer(A.__webglFramebuffer[st]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let st=0;st<A.__webglColorRenderbuffer.length;st++)A.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[st]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=U.textures;for(let st=0,ct=K.length;st<ct;st++){const yt=n.get(K[st]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),r.memory.textures--),n.remove(K[st])}n.remove(U)}let L=0;function P(){L=0}function R(){return L}function I(U){L=U}function N(){const U=L;return U>=s.maxTextures&&te("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,U}function F(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function V(U,A){const K=n.get(U);if(U.isVideoTexture&&k(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const st=U.image;if(st===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(K,U,A);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+A)}function H(U,A){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){rt(K,U,A);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+A)}function J(U,A){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){rt(K,U,A);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+A)}function et(U,A){const K=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){_t(K,U,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+A)}const St={[vr]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Ps]:i.MIRRORED_REPEAT},mt={[Ye]:i.NEAREST,[Or]:i.NEAREST_MIPMAP_NEAREST,[Yo]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Pa]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},Ut={[Of]:i.NEVER,[Hf]:i.ALWAYS,[Bf]:i.LESS,[Gc]:i.LEQUAL,[zf]:i.EQUAL,[Hc]:i.GEQUAL,[kf]:i.GREATER,[Gf]:i.NOTEQUAL};function kt(U,A){if(A.type===ti&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===un||A.magFilter===Pa||A.magFilter===Yo||A.magFilter===as||A.minFilter===un||A.minFilter===Pa||A.minFilter===Yo||A.minFilter===as)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,St[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,St[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,St[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,mt[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,mt[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ut[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ye||A.minFilter!==Yo&&A.minFilter!==as||A.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function G(U,A){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",w));const st=A.source;let ct=d.get(st);ct===void 0&&(ct={},d.set(st,ct));const yt=F(A);if(yt!==U.__cacheKey){ct[yt]===void 0&&(ct[yt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,K=!0),ct[yt].usedTimes++;const Tt=ct[U.__cacheKey];Tt!==void 0&&(ct[U.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(A)),U.__cacheKey=yt,U.__webglTexture=ct[yt].texture}return K}function O(U,A,K){return Math.floor(Math.floor(U/K)/A)}function Y(U,A,K,st){const yt=U.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,K,st,A.data);else{yt.sort((qt,Lt)=>qt.start-Lt.start);let Tt=0;for(let qt=1;qt<yt.length;qt++){const Lt=yt[Tt],wt=yt[qt],Yt=Lt.start+Lt.count,Qt=O(wt.start,A.width,4),ne=O(Lt.start,A.width,4);wt.start<=Yt+1&&Qt===ne&&O(wt.start+wt.count-1,A.width,4)===Qt?Lt.count=Math.max(Lt.count,wt.start+wt.count-Lt.start):(++Tt,yt[Tt]=wt)}yt.length=Tt+1;const lt=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let qt=0,Lt=yt.length;qt<Lt;qt++){const wt=yt[qt],Yt=Math.floor(wt.start/4),Qt=Math.ceil(wt.count/4),ne=Yt%A.width,Z=Math.floor(Yt/A.width),Rt=Qt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(i.TEXTURE_2D,0,ne,Z,Rt,ut,K,st,A.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function rt(U,A,K){let st=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(st=i.TEXTURE_3D);const ct=G(U,A),yt=A.source;e.bindTexture(st,U.__webglTexture,i.TEXTURE0+K);const Tt=n.get(yt);if(yt.version!==Tt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ut=de.getPrimaries(de.workingColorSpace),Ct=A.colorSpace===Bi?null:de.getPrimaries(A.colorSpace),Nt=A.colorSpace===Bi||ut===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let dt=g(A.image,!1,s.maxTextureSize);dt=Jt(A,dt);const Pt=o.convert(A.format,A.colorSpace),qt=o.convert(A.type);let Lt=v(A.internalFormat,Pt,qt,A.normalized,A.colorSpace,A.isVideoTexture);kt(st,A);let wt;const Yt=A.mipmaps,Qt=A.isVideoTexture!==!0,ne=Tt.__version===void 0||ct===!0,Z=yt.dataReady,Rt=y(A,dt);if(A.isDepthTexture)Lt=S(A.format===cs,A.type),ne&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Lt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Pt,qt,null));else if(A.isDataTexture)if(Yt.length>0){Qt&&ne&&e.texStorage2D(i.TEXTURE_2D,Rt,Lt,Yt[0].width,Yt[0].height);for(let ut=0,Ct=Yt.length;ut<Ct;ut++)wt=Yt[ut],Qt?Z&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,wt.width,wt.height,Pt,qt,wt.data):e.texImage2D(i.TEXTURE_2D,ut,Lt,wt.width,wt.height,0,Pt,qt,wt.data);A.generateMipmaps=!1}else Qt?(ne&&e.texStorage2D(i.TEXTURE_2D,Rt,Lt,dt.width,dt.height),Z&&Y(A,dt,Pt,qt)):e.texImage2D(i.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Pt,qt,dt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Qt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Lt,Yt[0].width,Yt[0].height,dt.depth);for(let ut=0,Ct=Yt.length;ut<Ct;ut++)if(wt=Yt[ut],A.format!==ei)if(Pt!==null)if(Qt){if(Z)if(A.layerUpdates.size>0){const Nt=Yh(wt.width,wt.height,A.format,A.type);for(const xt of A.layerUpdates){const $t=wt.data.subarray(xt*Nt/wt.data.BYTES_PER_ELEMENT,(xt+1)*Nt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,xt,wt.width,wt.height,1,Pt,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,wt.width,wt.height,dt.depth,Pt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Lt,wt.width,wt.height,dt.depth,0,wt.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?Z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,wt.width,wt.height,dt.depth,Pt,qt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Lt,wt.width,wt.height,dt.depth,0,Pt,qt,wt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Qt&&ne&&e.texStorage2D(i.TEXTURE_2D,Rt,Lt,Yt[0].width,Yt[0].height);for(let ut=0,Ct=Yt.length;ut<Ct;ut++)wt=Yt[ut],A.format!==ei?Pt!==null?Qt?Z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,wt.width,wt.height,Pt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Lt,wt.width,wt.height,0,wt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?Z&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,wt.width,wt.height,Pt,qt,wt.data):e.texImage2D(i.TEXTURE_2D,ut,Lt,wt.width,wt.height,0,Pt,qt,wt.data)}else if(A.isDataArrayTexture)if(Qt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Lt,dt.width,dt.height,dt.depth),Z)if(A.layerUpdates.size>0){const ut=Yh(dt.width,dt.height,A.format,A.type);for(const Ct of A.layerUpdates){const Nt=dt.data.subarray(Ct*ut/dt.data.BYTES_PER_ELEMENT,(Ct+1)*ut/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,dt.width,dt.height,1,Pt,qt,Nt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Pt,qt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,dt.width,dt.height,dt.depth,0,Pt,qt,dt.data);else if(A.isData3DTexture)Qt?(ne&&e.texStorage3D(i.TEXTURE_3D,Rt,Lt,dt.width,dt.height,dt.depth),Z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Pt,qt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,dt.width,dt.height,dt.depth,0,Pt,qt,dt.data);else if(A.isFramebufferTexture){if(ne)if(Qt)e.texStorage2D(i.TEXTURE_2D,Rt,Lt,dt.width,dt.height);else{let ut=dt.width,Ct=dt.height;for(let Nt=0;Nt<Rt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Lt,ut,Ct,0,Pt,qt,null),ut>>=1,Ct>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),dt.parentNode!==ut){ut.appendChild(dt),f.add(A),ut.onpaint=Ct=>{const Nt=Ct.changedElements;for(const xt of f)Nt.includes(xt.image)&&(xt.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{const Nt=i.RGBA,xt=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Nt,xt,$t,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Qt&&ne){const ut=Kt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Lt,ut.width,ut.height)}for(let ut=0,Ct=Yt.length;ut<Ct;ut++)wt=Yt[ut],Qt?Z&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Pt,qt,wt):e.texImage2D(i.TEXTURE_2D,ut,Lt,Pt,qt,wt);A.generateMipmaps=!1}else if(Qt){if(ne){const ut=Kt(dt);e.texStorage2D(i.TEXTURE_2D,Rt,Lt,ut.width,ut.height)}Z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,qt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Pt,qt,dt);p(A)&&x(st),Tt.__version=yt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function _t(U,A,K){if(A.image.length!==6)return;const st=G(U,A),ct=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);const yt=n.get(ct);if(ct.version!==yt.__version||st===!0){e.activeTexture(i.TEXTURE0+K);const Tt=de.getPrimaries(de.workingColorSpace),lt=A.colorSpace===Bi?null:de.getPrimaries(A.colorSpace),dt=A.colorSpace===Bi||Tt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Pt=A.isCompressedTexture||A.image[0].isCompressedTexture,qt=A.image[0]&&A.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!Pt&&!qt?Lt[xt]=g(A.image[xt],!0,s.maxCubemapSize):Lt[xt]=qt?A.image[xt].image:A.image[xt],Lt[xt]=Jt(A,Lt[xt]);const wt=Lt[0],Yt=o.convert(A.format,A.colorSpace),Qt=o.convert(A.type),ne=v(A.internalFormat,Yt,Qt,A.normalized,A.colorSpace),Z=A.isVideoTexture!==!0,Rt=yt.__version===void 0||st===!0,ut=ct.dataReady;let Ct=y(A,wt);kt(i.TEXTURE_CUBE_MAP,A);let Nt;if(Pt){Z&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ne,wt.width,wt.height);for(let xt=0;xt<6;xt++){Nt=Lt[xt].mipmaps;for(let $t=0;$t<Nt.length;$t++){const Vt=Nt[$t];A.format!==ei?Yt!==null?Z?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,0,0,Vt.width,Vt.height,Yt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,ne,Vt.width,Vt.height,0,Vt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,0,0,Vt.width,Vt.height,Yt,Qt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t,ne,Vt.width,Vt.height,0,Yt,Qt,Vt.data)}}}else{if(Nt=A.mipmaps,Z&&Rt){Nt.length>0&&Ct++;const xt=Kt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(qt){Z?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,Yt,Qt,Lt[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Lt[xt].width,Lt[xt].height,0,Yt,Qt,Lt[xt].data);for(let $t=0;$t<Nt.length;$t++){const Re=Nt[$t].image[xt].image;Z?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,0,0,Re.width,Re.height,Yt,Qt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,ne,Re.width,Re.height,0,Yt,Qt,Re.data)}}else{Z?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Yt,Qt,Lt[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Yt,Qt,Lt[xt]);for(let $t=0;$t<Nt.length;$t++){const Vt=Nt[$t];Z?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,0,0,Yt,Qt,Vt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,$t+1,ne,Yt,Qt,Vt.image[xt])}}}p(A)&&x(i.TEXTURE_CUBE_MAP),yt.__version=ct.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function z(U,A,K,st,ct,yt){const Tt=o.convert(K.format,K.colorSpace),lt=o.convert(K.type),dt=v(K.internalFormat,Tt,lt,K.normalized,K.colorSpace),Pt=n.get(A),qt=n.get(K);if(qt.__renderTarget=A,!Pt.__hasExternalTextures){const Lt=Math.max(1,A.width>>yt),wt=Math.max(1,A.height>>yt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,yt,dt,Lt,wt,A.depth,0,Tt,lt,null):e.texImage2D(ct,yt,dt,Lt,wt,0,Tt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),At(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ct,qt.__webglTexture,0,Mt(A)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ct,qt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(U,A,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const st=A.depthTexture,ct=st&&st.isDepthTexture?st.type:null,yt=S(A.stencilBuffer,ct),Tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;At(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(A),yt,A.width,A.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(A),yt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,yt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,U)}else{const st=A.textures;for(let ct=0;ct<st.length;ct++){const yt=st[ct],Tt=o.convert(yt.format,yt.colorSpace),lt=o.convert(yt.type),dt=v(yt.internalFormat,Tt,lt,yt.normalized,yt.colorSpace);At(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(A),dt,A.width,A.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(A),dt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,dt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(U,A,K){const st=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ct=n.get(A.depthTexture);if(ct.__renderTarget=A,(!ct.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),st){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),kt(i.TEXTURE_CUBE_MAP,A.depthTexture);const Pt=o.convert(A.depthTexture.format),qt=o.convert(A.depthTexture.type);let Lt;A.depthTexture.format===Li?Lt=i.DEPTH_COMPONENT24:A.depthTexture.format===cs&&(Lt=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Lt,A.width,A.height,0,Pt,qt,null)}}else V(A.depthTexture,0);const yt=ct.__webglTexture,Tt=Mt(A),lt=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,dt=A.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Li)At(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,lt,yt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,lt,yt,0);else if(A.depthTexture.format===cs)At(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,lt,yt,0,Tt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,lt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(U){const A=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const st=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),st){const ct=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,st.removeEventListener("dispose",ct)};st.addEventListener("dispose",ct),A.__depthDisposeCallback=ct}A.__boundDepthTexture=st}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(K)for(let st=0;st<6;st++)pt(A.__webglFramebuffer[st],U,st);else{const st=U.texture.mipmaps;st&&st.length>0?pt(A.__webglFramebuffer[0],U,0):pt(A.__webglFramebuffer,U,0)}else if(K){A.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[st]),A.__webglDepthbuffer[st]===void 0)A.__webglDepthbuffer[st]=i.createRenderbuffer(),nt(A.__webglDepthbuffer[st],U,!1);else{const ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=A.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,yt)}}else{const st=U.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),nt(A.__webglDepthbuffer,U,!1);else{const ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(U,A,K){const st=n.get(U);A!==void 0&&z(st.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&q(U)}function at(U){const A=U.texture,K=n.get(U),st=n.get(A);U.addEventListener("dispose",b);const ct=U.textures,yt=U.isWebGLCubeRenderTarget===!0,Tt=ct.length>1;if(Tt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=A.version,r.memory.textures++),yt){K.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[lt]=[];for(let dt=0;dt<A.mipmaps.length;dt++)K.__webglFramebuffer[lt][dt]=i.createFramebuffer()}else K.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let lt=0;lt<A.mipmaps.length;lt++)K.__webglFramebuffer[lt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let lt=0,dt=ct.length;lt<dt;lt++){const Pt=n.get(ct[lt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),r.memory.textures++)}if(U.samples>0&&At(U)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let lt=0;lt<ct.length;lt++){const dt=ct[lt];K.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[lt]);const Pt=o.convert(dt.format,dt.colorSpace),qt=o.convert(dt.type),Lt=v(dt.internalFormat,Pt,qt,dt.normalized,dt.colorSpace,U.isXRRenderTarget===!0),wt=Mt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Lt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,K.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(K.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),kt(i.TEXTURE_CUBE_MAP,A);for(let lt=0;lt<6;lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)z(K.__webglFramebuffer[lt][dt],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else z(K.__webglFramebuffer[lt],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(A)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let lt=0,dt=ct.length;lt<dt;lt++){const Pt=ct[lt],qt=n.get(Pt);let Lt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Lt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,qt.__webglTexture),kt(Lt,Pt),z(K.__webglFramebuffer,U,Pt,i.COLOR_ATTACHMENT0+lt,Lt,0),p(Pt)&&x(Lt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(lt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,st.__webglTexture),kt(lt,A),A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)z(K.__webglFramebuffer[dt],U,A,i.COLOR_ATTACHMENT0,lt,dt);else z(K.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,lt,0);p(A)&&x(lt),e.unbindTexture()}U.depthBuffer&&q(U)}function W(U){const A=U.textures;for(let K=0,st=A.length;K<st;K++){const ct=A[K];if(p(ct)){const yt=M(U),Tt=n.get(ct).__webglTexture;e.bindTexture(yt,Tt),x(yt),e.unbindTexture()}}}const X=[],gt=[];function ht(U){if(U.samples>0){if(At(U)===!1){const A=U.textures,K=U.width,st=U.height;let ct=i.COLOR_BUFFER_BIT;const yt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(U),lt=A.length>1;if(lt)for(let Pt=0;Pt<A.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const dt=U.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Pt=0;Pt<A.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Pt]);const qt=n.get(A[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,K,st,0,0,K,st,ct,i.NEAREST),l===!0&&(X.length=0,gt.length=0,X.push(i.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(X.push(yt),gt.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Pt=0;Pt<A.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[Pt]);const qt=n.get(A[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Mt(U){return Math.min(s.maxSamples,U.samples)}function At(U){const A=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function k(U){const A=r.render.frame;h.get(U)!==A&&(h.set(U,A),U.update())}function Jt(U,A){const K=U.colorSpace,st=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==br&&K!==Bi&&(de.getTransfer(K)===be?(st!==ei||ct!==kn)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",K)),A}function Kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.getTextureUnits=R,this.setTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=it,this.setupRenderTarget=at,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=z,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Td(i,t){function e(n,s=Bi){let o;const r=de.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===N0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===F0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===I0)return i.BYTE;if(n===U0)return i.SHORT;if(n===vo)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===O0)return i.ALPHA;if(n===B0)return i.RGB;if(n===ei)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Oc)return i.RED;if(n===Bc)return i.RED_INTEGER;if(n===fs)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===kc)return i.RGBA_INTEGER;if(n===rr||n===ar||n===cr||n===lr)if(r===be)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===$a||n===Za||n===Ka)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ya)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===ja||n===tc||n===ec||n===Mr||n===nc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ja||n===Qa)return r===be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ja)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return o.COMPRESSED_R11_EAC;if(n===ec)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Mr)return o.COMPRESSED_RG11_EAC;if(n===nc)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===sc||n===oc||n===rc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ic)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return r===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===xc||n===vc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===_c)return r===be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===yc||n===yr||n===Sc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Mc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
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

}`;class o_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Z0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class r_ extends Yi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new o_,p={},x=e.getContextAttributes();let M=null,v=null;const S=[],y=[],w=new vt;let b=null,E=null;const T=new hn;T.viewport=new Ge;const C=new hn;C.viewport=new Ge;const L=[T,C],P=new xd;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Y=S[O];return Y===void 0&&(Y=new Da,S[O]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(O){let Y=S[O];return Y===void 0&&(Y=new Da,S[O]=Y),Y.getGripSpace()},this.getHand=function(O){let Y=S[O];return Y===void 0&&(Y=new Da,S[O]=Y),Y.getHandSpace()};function N(O){const Y=y.indexOf(O.inputSource);if(Y===-1)return;const rt=S[Y];rt!==void 0&&(rt.update(O.inputSource,O.frame,c||r),rt.dispatchEvent({type:O.type,data:O.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",V);for(let O=0;O<S.length;O++){const Y=y[O];Y!==null&&(y[O]=null,S[O].disconnect(Y))}R=null,I=null,g.reset();for(const O in p)delete p[O];if(t.setRenderTarget(M),d=null,u=null,f=null,s=null,v=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),E!==null){const O=E.camera;O.fov=E.fov,O.zoom=E.zoom,O.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,_t=null,z=null;x.depth&&(z=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?cs:Li,_t=x.stencil?Mo:di);const nt={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:o};f=this.getBinding(),u=f.createProjectionLayer(nt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ni(u.textureWidth,u.textureHeight,{format:ei,type:kn,depthTexture:new So(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ni(d.framebufferWidth,d.framebufferHeight,{format:ei,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(O){for(let Y=0;Y<O.removed.length;Y++){const rt=O.removed[Y],_t=y.indexOf(rt);_t>=0&&(y[_t]=null,S[_t].disconnect(rt))}for(let Y=0;Y<O.added.length;Y++){const rt=O.added[Y];let _t=y.indexOf(rt);if(_t===-1){for(let nt=0;nt<S.length;nt++)if(nt>=y.length){y.push(rt),_t=nt;break}else if(y[nt]===null){y[nt]=rt,_t=nt;break}if(_t===-1)break}const z=S[_t];z&&z.connect(rt)}}const H=new B,J=new B;function et(O,Y,rt){H.setFromMatrixPosition(Y.matrixWorld),J.setFromMatrixPosition(rt.matrixWorld);const _t=H.distanceTo(J),z=Y.projectionMatrix.elements,nt=rt.projectionMatrix.elements,pt=z[14]/(z[10]-1),q=z[14]/(z[10]+1),it=(z[9]+1)/z[5],at=(z[9]-1)/z[5],W=(z[8]-1)/z[0],X=(nt[8]+1)/nt[0],gt=pt*W,ht=pt*X,Mt=_t/(-W+X),At=Mt*-W;if(Y.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(At),O.translateZ(Mt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),z[10]===-1)O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const k=pt+Mt,Jt=q+Mt,Kt=gt-At,U=ht+(_t-At),A=it*q/Jt*k,K=at*q/Jt*k;O.projectionMatrix.makePerspective(Kt,U,A,K,k,Jt),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function St(O,Y){Y===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Y.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let Y=O.near,rt=O.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),P.near=C.near=T.near=Y,P.far=C.far=T.far=rt,(R!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,I=P.far),P.layers.mask=O.layers.mask|6,T.layers.mask=P.layers.mask&-5,C.layers.mask=P.layers.mask&-3;const _t=O.parent,z=P.cameras;St(P,_t);for(let nt=0;nt<z.length;nt++)St(z[nt],_t);z.length===2?et(P,T,C):P.projectionMatrix.copy(T.projectionMatrix),E===null&&O.isPerspectiveCamera&&(E={camera:O,fov:O.fov,zoom:O.zoom}),mt(O,P,_t)};function mt(O,Y,rt){rt===null?O.matrix.copy(Y.matrixWorld):(O.matrix.copy(rt.matrixWorld),O.matrix.invert(),O.matrix.multiply(Y.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ar*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(O){return p[O]};let Ut=null;function kt(O,Y){if(h=Y.getViewerPose(c||r),m=Y,h!==null){const rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let _t=!1;rt.length!==P.cameras.length&&(P.cameras.length=0,_t=!0);for(let q=0;q<rt.length;q++){const it=rt[q];let at=null;if(d!==null)at=d.getViewport(it);else{const X=f.getViewSubImage(u,it);at=X.viewport,q===0&&(t.setRenderTargetTextures(v,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(v))}let W=L[q];W===void 0&&(W=new hn,W.layers.enable(q),W.viewport=new Ge,L[q]=W),W.matrix.fromArray(it.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(it.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(at.x,at.y,at.width,at.height),q===0&&(P.matrix.copy(W.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),_t===!0&&P.cameras.push(W)}const z=s.enabledFeatures;if(z&&z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const q=f.getDepthInformation(rt[0]);q&&q.isValid&&q.texture&&g.init(q,s.renderState)}if(z&&z.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let q=0;q<rt.length;q++){const it=rt[q].camera;if(it){let at=p[it];at||(at=new Z0,p[it]=at);const W=f.getCameraImage(it);at.sourceTexture=W}}}}for(let rt=0;rt<S.length;rt++){const _t=y[rt],z=S[rt];_t!==null&&z!==void 0&&z.update(_t,Y,c||r)}Ut&&Ut(O,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}const G=new Md;G.setAnimationLoop(kt),this.setAnimationLoop=function(O){Ut=O},this.dispose=function(){}}}const a_=new Le,Ad=new se;Ad.set(-1,0,0,0,1,0,0,0,1);function c_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,cd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,v=x.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ad),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const y=S.program;n.uniformBlockBinding(v,y)}function c(v,S){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",x));const w=S.program;n.updateUBOMapping(v,w);const b=t.render.frame;o[v.id]!==b&&(u(v),o[v.id]=b)}function h(v){const S=f();v.__bindingPointIndex=S;const y=i.createBuffer(),w=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function f(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=s[v.id],y=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,E=y.length;b<E;b++){const T=y[b];if(Array.isArray(T))for(let C=0,L=T.length;C<L;C++)d(T[C],b,C,w);else d(T,b,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,y,w){if(_(v,S,y,w)===!0){const b=v.__offset,E=v.value;if(Array.isArray(E)){let T=0;for(let C=0;C<E.length;C++){const L=E[C],P=p(L);m(L,v.__data,T),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(T+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function m(v,S,y){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,y)}function _(v,S,y,w){const b=v.value,E=S+"_"+y;if(w[E]===void 0)return typeof b=="number"||typeof b=="boolean"?w[E]=b:ArrayBuffer.isView(b)?w[E]=b.slice():w[E]=b.clone(),!0;{const T=w[E];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return w[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(T.equals(b)===!1)return T.copy(b),!0}}return!1}function g(v){const S=v.uniforms;let y=0;const w=16;for(let E=0,T=S.length;E<T;E++){const C=Array.isArray(S[E])?S[E]:[S[E]];for(let L=0,P=C.length;L<P;L++){const R=C[L],I=Array.isArray(R.value)?R.value:[R.value];for(let N=0,F=I.length;N<F;N++){const V=I[N],H=p(V),J=y%w,et=J%H.boundary,St=J+et;y+=et,St!==0&&w-St<H.storage&&(y+=w-St),R.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=H.storage}}}const b=y%w;return b>0&&(y+=w-b),v.__size=y,v.__cache={},this}function p(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):te("WebGLRenderer: Unsupported uniform value type.",v),S}function x(v){const S=v.target;S.removeEventListener("dispose",x);const y=r.indexOf(S.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function M(){for(const v in s)i.deleteBuffer(s[v]);r=[],s={},o={}}return{bind:l,update:c,dispose:M}}const h_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function u_(){return vi===null&&(vi=new Xc(h_,16,16,fs,pi),vi.name="DFG_LUT",vi.minFilter=un,vi.magFilter=un,vi.wrapS=li,vi.wrapT=li,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class Rd{constructor(t={}){const{canvas:e=Wf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=kn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const _=d,g=new Set([kc,zc,Bc]),p=new Set([kn,di,vo,Mo,Nc,Fc]),x=new Uint32Array(4),M=new Int32Array(4),v=new B;let S=null,y=null;const w=[],b=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,L=null,P=null,R=null,I=null;this._outputColorSpace=Ke;let N=0,F=0,V=null,H=-1,J=null;const et=new Ge,St=new Ge;let mt=null;const Ut=new Ht(0);let kt=0,G=e.width,O=e.height,Y=1,rt=null,_t=null;const z=new Ge(0,0,G,O),nt=new Ge(0,0,G,O);let pt=!1;const q=new qc;let it=!1,at=!1;const W=new Le,X=new B,gt=new Ge,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function At(){return V===null?Y:1}let k=n;function Jt(D,$){return e.getContext(D,$)}let Kt,U,A,K,st,ct,yt,Tt,lt,dt,Pt,qt,Lt,wt,Yt,Qt,ne,Z,Rt,ut,Ct,Nt,xt;try{const D={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Hn,!1),k===null){const $="webgl2";if(k=Jt($,D),k===null)throw Jt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(D){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),pe("WebGLRenderer: "+D.message),D}function $t(){Kt=new fg(k),Kt.init(),Ct=new Td(k,Kt),U=new ng(k,Kt,t,Ct),A=new e_(k,Kt),U.reversedDepthBuffer&&u&&A.buffers.depth.setReversed(!0),P=k.createFramebuffer(),R=k.createFramebuffer(),I=k.createFramebuffer(),K=new mg(k),st=new G3,ct=new n_(k,Kt,A,st,U,Ct,K),yt=new ug(T),Tt=new _1(k),Nt=new tg(k,Tt),lt=new dg(k,Tt,K,Nt),dt=new _g(k,lt,Tt,Nt,K),Z=new gg(k,U,ct),Yt=new ig(st),Pt=new k3(T,yt,Kt,U,Nt,Yt),qt=new c_(T,st),Lt=new V3,wt=new Z3(Kt),ne=new jm(T,yt,A,dt,m,l),Qt=new t_(T,dt,U),xt=new l_(k,K,U,A),Rt=new eg(k,Kt,K),ut=new pg(k,Kt,K),K.programs=Pt.programs,T.capabilities=U,T.extensions=Kt,T.properties=st,T.renderLists=Lt,T.shadowMap=Qt,T.state=A,T.info=K}_!==kn&&(E=new vg(_,e.width,e.height,a,s,o));const Vt=new r_(T,k);this.xr=Vt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=Kt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Kt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(D){D!==void 0&&(Y=D,this.setSize(G,O,!1))},this.getSize=function(D){return D.set(G,O)},this.setSize=function(D,$,ot=!0){if(Vt.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,O=$,e.width=Math.floor(D*Y),e.height=Math.floor($*Y),ot===!0&&(e.style.width=D+"px",e.style.height=$+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(G*Y,O*Y).floor()},this.setDrawingBufferSize=function(D,$,ot){G=D,O=$,Y=ot,e.width=Math.floor(D*ot),e.height=Math.floor($*ot),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(_===kn){pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(et)},this.getViewport=function(D){return D.copy(z)},this.setViewport=function(D,$,ot,j){D.isVector4?z.set(D.x,D.y,D.z,D.w):z.set(D,$,ot,j),A.viewport(et.copy(z).multiplyScalar(Y).round())},this.getScissor=function(D){return D.copy(nt)},this.setScissor=function(D,$,ot,j){D.isVector4?nt.set(D.x,D.y,D.z,D.w):nt.set(D,$,ot,j),A.scissor(St.copy(nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(D){A.setScissorTest(pt=D)},this.setOpaqueSort=function(D){rt=D},this.setTransparentSort=function(D){_t=D},this.getClearColor=function(D){return D.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,ot=!0){let j=0;if(D){let tt=!1;if(V!==null){const Dt=V.texture.format;tt=g.has(Dt)}if(tt){const Dt=V.texture.type,zt=p.has(Dt),Ft=ne.getClearColor(),Wt=ne.getClearAlpha(),Zt=Ft.r,ce=Ft.g,he=Ft.b;zt?(x[0]=Zt,x[1]=ce,x[2]=he,x[3]=Wt,k.clearBufferuiv(k.COLOR,0,x)):(M[0]=Zt,M[1]=ce,M[2]=he,M[3]=Wt,k.clearBufferiv(k.COLOR,0,M))}else j|=k.COLOR_BUFFER_BIT}$&&(j|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),L=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Hn,!1),ne.dispose(),Lt.dispose(),wt.dispose(),st.dispose(),yt.dispose(),dt.dispose(),Nt.dispose(),xt.dispose(),Pt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Et),Vt.removeEventListener("sessionend",Ot),Bt.stop()};function Re(D){D.preventDefault(),Tr("WebGLRenderer: Context Lost."),C=!0}function ve(){Tr("WebGLRenderer: Context Restored."),C=!1;const D=K.autoReset,$=Qt.enabled,ot=Qt.autoUpdate,j=Qt.needsUpdate,tt=Qt.type;$t(),K.autoReset=D,Qt.enabled=$,Qt.autoUpdate=ot,Qt.needsUpdate=j,Qt.type=tt}function Hn(D){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function bn(D){const $=D.target;$.removeEventListener("dispose",bn),al($)}function al(D){kr(D),st.remove(D)}function kr(D){const $=st.get(D).programs;$!==void 0&&($.forEach(function(ot){Pt.releaseProgram(ot)}),D.isShaderMaterial&&Pt.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,ot,j,tt,Dt){$===null&&($=ht);const zt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Ft=Ds(D,$,ot,j,tt);A.setMaterial(j,zt);let Wt=ot.index,Zt=1;if(j.wireframe===!0){if(Wt=lt.getWireframeAttribute(ot),Wt===void 0)return;Zt=2}const ce=ot.drawRange,he=ot.attributes.position;let Xt=ce.start*Zt,Se=(ce.start+ce.count)*Zt;Dt!==null&&(Xt=Math.max(Xt,Dt.start*Zt),Se=Math.min(Se,(Dt.start+Dt.count)*Zt)),Wt!==null?(Xt=Math.max(Xt,0),Se=Math.min(Se,Wt.count)):he!=null&&(Xt=Math.max(Xt,0),Se=Math.min(Se,he.count));const $e=Se-Xt;if($e<0||$e===1/0)return;Nt.setup(tt,j,Ft,ot,Wt);let ze,De=Rt;if(Wt!==null&&(ze=Tt.get(Wt),De=ut,De.setIndex(ze)),tt.isMesh)j.wireframe===!0?(A.setLineWidth(j.wireframeLinewidth*At()),De.setMode(k.LINES)):De.setMode(k.TRIANGLES);else if(tt.isLine){let pn=j.linewidth;pn===void 0&&(pn=1),A.setLineWidth(pn*At()),tt.isLineSegments?De.setMode(k.LINES):tt.isLineLoop?De.setMode(k.LINE_LOOP):De.setMode(k.LINE_STRIP)}else tt.isPoints?De.setMode(k.POINTS):tt.isSprite&&De.setMode(k.TRIANGLES);if(tt.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))De.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const pn=tt._multiDrawStarts,Gt=tt._multiDrawCounts,En=tt._multiDrawCount,xe=Wt?Tt.get(Wt).bytesPerElement:1,Kn=st.get(j).currentProgram.getUniforms();for(let _i=0;_i<En;_i++)Kn.setValue(k,"_gl_DrawID",_i),De.render(pn[_i]/xe,Gt[_i])}else if(tt.isInstancedMesh)De.renderInstances(Xt,$e,tt.count);else if(ot.isInstancedBufferGeometry){const pn=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Gt=Math.min(ot.instanceCount,pn);De.renderInstances(Xt,$e,Gt)}else De.render(Xt,$e)};function Po(D,$,ot,j){L!==null&&D.isNodeMaterial&&L.setObject(j,D),it===!0&&Yt.setState(D,ot,!1),D.transparent===!0&&D.side===en&&D.forceSinglePass===!1?(D.side=fn,D.needsUpdate=!0,Ce(D,$,j),D.side=ui,D.needsUpdate=!0,Ce(D,$,j),D.side=en):Ce(D,$,j)}this.compile=function(D,$,ot=null){ot===null&&(ot=D),L!==null&&L.renderStart(D,$,ot),y=wt.get(ot),y.init($),b.push(y),ot.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(y.pushLight(tt),tt.castShadow&&y.pushShadow(tt))}),D!==ot&&D.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(y.pushLight(tt),tt.castShadow&&y.pushShadow(tt))}),y.setupLights(),L!==null&&L.updateLights(y.state.lightsArray),at=this.localClippingEnabled,it=Yt.init(this.clippingPlanes,at),it===!0&&Yt.setGlobalState(this.clippingPlanes,$),L!==null&&Qt.render(y.state.shadowsArray,ot,$);const j=new Set;return D.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Dt=tt.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const Ft=Dt[zt];Po(Ft,ot,$,tt),j.add(Ft)}else Po(Dt,ot,$,tt),j.add(Dt)}),y=b.pop(),L!==null&&L.renderEnd(),j},this.compileAsync=function(D,$,ot=null){const j=this.compile(D,$,ot);return new Promise(tt=>{function Dt(){if(j.forEach(function(zt){const Wt=st.get(zt).currentProgram;(Wt===void 0||Wt.isReady())&&j.delete(zt)}),j.size===0){tt(D);return}setTimeout(Dt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Q=null;function bt(D){Q&&Q(D)}function Et(){Bt.stop()}function Ot(){Bt.start()}const Bt=new Md;Bt.setAnimationLoop(bt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(D){Q=D,Vt.setAnimationLoop(D),D===null?Bt.stop():Bt.start()},Vt.addEventListener("sessionstart",Et),Vt.addEventListener("sessionend",Ot),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(D,$);const ot=Vt.enabled===!0&&Vt.isPresenting===!0,j=E!==null&&(V===null||ot)&&E.begin(T,V);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera($),$=Vt.getCamera()),D.isScene===!0&&D.onBeforeRender(T,D,$,V),y=wt.get(D,b.length),y.init($),y.state.textureUnits=ct.getTextureUnits(),b.push(y),W.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),q.setFromProjectionMatrix(W,hi,$.reversedDepth),at=this.localClippingEnabled,it=Yt.init(this.clippingPlanes,at),S=Lt.get(D,w.length),S.init(),w.push(S),Vt.enabled===!0&&Vt.isPresenting===!0){const zt=T.xr.getDepthSensingMesh();zt!==null&&ie(zt,$,-1/0,T.sortObjects)}ie(D,$,0,T.sortObjects),S.finish(),L!==null&&L.updateLights(y.state.lightsArray),T.sortObjects===!0&&S.sort(rt,_t),Mt=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Mt&&ne.addToRenderList(S,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Yt.beginShadows();const tt=y.state.shadowsArray;if(Qt.render(tt,D,$),it===!0&&Yt.endShadows(),(j&&E.hasRenderPass())===!1){const zt=S.opaque,Ft=S.transmissive;if(y.setupLights(),$.isArrayCamera){const Wt=$.cameras;if(Ft.length>0)for(let Zt=0,ce=Wt.length;Zt<ce;Zt++){const he=Wt[Zt];fe(zt,Ft,D,he)}Mt&&ne.render(D);for(let Zt=0,ce=Wt.length;Zt<ce;Zt++){const he=Wt[Zt];re(S,D,he,he.viewport)}}else Ft.length>0&&fe(zt,Ft,D,$),Mt&&ne.render(D),re(S,D,$)}V!==null&&F===0&&(ct.updateMultisampleRenderTarget(V),ct.updateRenderTargetMipmap(V)),j&&E.end(T),D.isScene===!0&&D.onAfterRender(T,D,$),Nt.resetDefaultState(),H=-1,J=null,b.pop(),b.length>0?(y=b[b.length-1],ct.setTextureUnits(y.state.textureUnits),it===!0&&Yt.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,L!==null&&L.renderEnd()};function ie(D,$,ot,j){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)ot=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLightProbeGrid)y.pushLightProbeGrid(D);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(q)){j&&gt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(W);const zt=dt.update(D),Ft=D.material;Ft.visible&&S.push(D,zt,Ft,ot,gt.z,null,$)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(q))){const zt=dt.update(D),Ft=D.material;if(j&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),gt.copy(D.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),gt.copy(zt.boundingSphere.center)),gt.applyMatrix4(D.matrixWorld).applyMatrix4(W)),Array.isArray(Ft)){const Wt=zt.groups;for(let Zt=0,ce=Wt.length;Zt<ce;Zt++){const he=Wt[Zt],Xt=Ft[he.materialIndex];Xt&&Xt.visible&&S.push(D,zt,Xt,ot,gt.z,he,$)}}else Ft.visible&&S.push(D,zt,Ft,ot,gt.z,null,$)}}const Dt=D.children;for(let zt=0,Ft=Dt.length;zt<Ft;zt++)ie(Dt[zt],$,ot,j)}function re(D,$,ot,j){const{opaque:tt,transmissive:Dt,transparent:zt}=D;y.setupLightsView(ot),it===!0&&Yt.setGlobalState(T.clippingPlanes,ot),j&&A.viewport(et.copy(j)),tt.length>0&&_e(tt,$,ot),Dt.length>0&&_e(Dt,$,ot),zt.length>0&&_e(zt,$,ot),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function fe(D,$,ot,j){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[j.id]===void 0){const Xt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[j.id]=new ni(1,1,{generateMipmaps:!0,type:Xt?pi:kn,minFilter:as,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}const Dt=y.state.transmissionRenderTarget[j.id],zt=j.viewport||et;Dt.setSize(zt.z*T.transmissionResolutionScale,zt.w*T.transmissionResolutionScale);const Ft=T.getRenderTarget(),Wt=T.getActiveCubeFace(),Zt=T.getActiveMipmapLevel();T.setRenderTarget(Dt),T.getClearColor(Ut),kt=T.getClearAlpha(),kt<1&&T.setClearColor(16777215,.5),T.clear(),Mt&&ne.render(ot);const ce=T.toneMapping;T.toneMapping=fi;const he=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),y.setupLightsView(j),it===!0&&Yt.setGlobalState(T.clippingPlanes,j),_e(D,ot,j),ct.updateMultisampleRenderTarget(Dt),ct.updateRenderTargetMipmap(Dt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Se=0,$e=$.length;Se<$e;Se++){const ze=$[Se],{object:De,geometry:pn,material:Gt,group:En}=ze;if(Gt.side===en&&De.layers.test(j.layers)){const xe=Gt.side;Gt.side=fn,Gt.needsUpdate=!0,Me(De,ot,j,pn,Gt,En),Gt.side=xe,Gt.needsUpdate=!0,Xt=!0}}Xt===!0&&(ct.updateMultisampleRenderTarget(Dt),ct.updateRenderTargetMipmap(Dt))}T.setRenderTarget(Ft,Wt,Zt),T.setClearColor(Ut,kt),he!==void 0&&(j.viewport=he),T.toneMapping=ce}function _e(D,$,ot){const j=$.isScene===!0?$.overrideMaterial:null;for(let tt=0,Dt=D.length;tt<Dt;tt++){const zt=D[tt],{object:Ft,geometry:Wt,group:Zt}=zt;let ce=zt.material;ce.allowOverride===!0&&j!==null&&(ce=j),Ft.layers.test(ot.layers)&&Me(Ft,$,ot,Wt,ce,Zt)}}function Me(D,$,ot,j,tt,Dt){L!==null&&tt.isNodeMaterial&&L.setObject(D,tt),D.onBeforeRender(T,$,ot,j,tt,Dt),D.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),tt.onBeforeRender(T,$,ot,j,D,Dt),tt.transparent===!0&&tt.side===en&&tt.forceSinglePass===!1?(tt.side=fn,tt.needsUpdate=!0,T.renderBufferDirect(ot,$,j,tt,D,Dt),tt.side=ui,tt.needsUpdate=!0,T.renderBufferDirect(ot,$,j,tt,D,Dt),tt.side=en):T.renderBufferDirect(ot,$,j,tt,D,Dt),D.onAfterRender(T,$,ot,j,tt,Dt)}function Ce(D,$,ot){$.isScene!==!0&&($=ht);const j=st.get(D),tt=y.state.lights,Dt=y.state.shadowsArray,zt=tt.state.version,Ft=Pt.getParameters(D,tt.state,Dt,$,ot,y.state.lightProbeGridArray),Wt=Pt.getProgramCacheKey(Ft);let Zt=j.programs;j.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?$.environment:null,j.fog=$.fog;const ce=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;j.envMap=yt.get(D.envMap||j.environment,ce),j.envMapRotation=j.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,Zt===void 0&&(D.addEventListener("dispose",bn),Zt=new Map,j.programs=Zt);let he=Zt.get(Wt);if(he!==void 0){if(j.currentProgram===he&&j.lightsStateVersion===zt)return wn(D,Ft),he}else Ft.uniforms=Pt.getUniforms(D),L!==null&&D.isNodeMaterial&&L.build(D,ot,Ft),D.onBeforeCompile(Ft,T),he=Pt.acquireProgram(Ft,Wt),Zt.set(Wt,he),j.uniforms=Ft.uniforms;const Xt=j.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Xt.clippingPlanes=Yt.uniform),wn(D,Ft),j.needsLights=cl(D),j.lightsStateVersion=zt,j.needsLights&&(Xt.ambientLightColor.value=tt.state.ambient,Xt.lightProbe.value=tt.state.probe,Xt.sunLights.value=tt.state.sun,Xt.sunLightShadows.value=tt.state.sunShadow,Xt.directionalLights.value=tt.state.directional,Xt.directionalLightShadows.value=tt.state.directionalShadow,Xt.spotLights.value=tt.state.spot,Xt.spotLightShadows.value=tt.state.spotShadow,Xt.rectAreaLights.value=tt.state.rectArea,Xt.ltc_1.value=tt.state.rectAreaLTC1,Xt.ltc_2.value=tt.state.rectAreaLTC2,Xt.pointLights.value=tt.state.point,Xt.pointLightShadows.value=tt.state.pointShadow,Xt.hemisphereLights.value=tt.state.hemi,Xt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Xt.sunShadowCascade.value=tt.state.sunShadowCascade,Xt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Xt.spotLightMatrix.value=tt.state.spotLightMatrix,Xt.spotLightMap.value=tt.state.spotLightMap,Xt.pointShadowMatrix.value=tt.state.pointShadowMatrix),j.lightProbeGrid=y.state.lightProbeGridArray.length>0,j.currentProgram=he,j.uniformsList=null,he}function Un(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=Ua.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function wn(D,$){const ot=st.get(D);ot.outputColorSpace=$.outputColorSpace,ot.batching=$.batching,ot.batchingColor=$.batchingColor,ot.instancing=$.instancing,ot.instancingColor=$.instancingColor,ot.instancingMorph=$.instancingMorph,ot.skinning=$.skinning,ot.morphTargets=$.morphTargets,ot.morphNormals=$.morphNormals,ot.morphColors=$.morphColors,ot.morphTargetsCount=$.morphTargetsCount,ot.numClippingPlanes=$.numClippingPlanes,ot.numIntersection=$.numClipIntersection,ot.vertexAlphas=$.vertexAlphas,ot.vertexTangents=$.vertexTangents,ot.toneMapping=$.toneMapping}function $i(D,$){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;v.setFromMatrixPosition($.matrixWorld);for(let ot=0,j=D.length;ot<j;ot++){const tt=D[ot];if(tt.texture!==null&&tt.boundingBox.containsPoint(v))return tt}return null}function Ds(D,$,ot,j,tt){$.isScene!==!0&&($=ht),ct.resetTextureUnits();const Dt=$.fog,zt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?$.environment:null,Ft=V===null?T.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:de.workingColorSpace,Wt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Zt=yt.get(j.envMap||zt,Wt),ce=j.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,he=!!ot.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xt=!!ot.morphAttributes.position,Se=!!ot.morphAttributes.normal,$e=!!ot.morphAttributes.color;let ze=fi;j.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ze=T.toneMapping);const De=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,pn=De!==void 0?De.length:0,Gt=st.get(j),En=y.state.lights;if(it===!0&&(at===!0||D!==J)){const Ue=D===J&&j.id===H;Yt.setState(j,D,Ue)}let xe=!1;j.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==En.state.version||Gt.outputColorSpace!==Ft||tt.isBatchedMesh&&Gt.batching===!1||!tt.isBatchedMesh&&Gt.batching===!0||tt.isBatchedMesh&&Gt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Gt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Gt.instancing===!1||!tt.isInstancedMesh&&Gt.instancing===!0||tt.isSkinnedMesh&&Gt.skinning===!1||!tt.isSkinnedMesh&&Gt.skinning===!0||tt.isInstancedMesh&&Gt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Gt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Gt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Gt.instancingMorph===!1&&tt.morphTexture!==null||Gt.envMap!==Zt||j.fog===!0&&Gt.fog!==Dt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Yt.numPlanes||Gt.numIntersection!==Yt.numIntersection)||Gt.vertexAlphas!==ce||Gt.vertexTangents!==he||Gt.morphTargets!==Xt||Gt.morphNormals!==Se||Gt.morphColors!==$e||Gt.toneMapping!==ze||Gt.morphTargetsCount!==pn||!!Gt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Gt.__version=j.version);let Kn=Gt.currentProgram;xe===!0&&(Kn=Ce(j,$,tt),L&&j.isNodeMaterial&&L.onUpdateProgram(j,Kn,Gt));let _i=!1,Zi=!1,Is=!1;const Pe=Kn.getUniforms(),We=Gt.uniforms;if(A.useProgram(Kn.program)&&(_i=!0,Zi=!0,Is=!0),j.id!==H&&(H=j.id,Zi=!0),Gt.needsLights){const Ue=$i(y.state.lightProbeGridArray,tt);Gt.lightProbeGrid!==Ue&&(Gt.lightProbeGrid=Ue,Zi=!0)}if(_i||J!==D){A.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Pe.setValue(k,"projectionMatrix",D.projectionMatrix),Pe.setValue(k,"viewMatrix",D.matrixWorldInverse);const Ji=Pe.map.cameraPosition;Ji!==void 0&&Ji.setValue(k,X.setFromMatrixPosition(D.matrixWorld)),U.logarithmicDepthBuffer&&Pe.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Pe.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),J!==D&&(J=D,Zi=!0,Is=!0)}if(Gt.needsLights&&(En.state.sunShadowMap.length>0&&Pe.setValue(k,"sunShadowMap",En.state.sunShadowMap,ct),En.state.directionalShadowMap.length>0&&Pe.setValue(k,"directionalShadowMap",En.state.directionalShadowMap,ct),En.state.spotShadowMap.length>0&&Pe.setValue(k,"spotShadowMap",En.state.spotShadowMap,ct),En.state.pointShadowMap.length>0&&Pe.setValue(k,"pointShadowMap",En.state.pointShadowMap,ct)),tt.isSkinnedMesh){Pe.setOptional(k,tt,"bindMatrix"),Pe.setOptional(k,tt,"bindMatrixInverse");const Ue=tt.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(k,"boneTexture",Ue.boneTexture,ct))}tt.isBatchedMesh&&(Pe.setOptional(k,tt,"batchingTexture"),Pe.setValue(k,"batchingTexture",tt._matricesTexture,ct),Pe.setOptional(k,tt,"batchingIdTexture"),Pe.setValue(k,"batchingIdTexture",tt._indirectTexture,ct),Pe.setOptional(k,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Pe.setValue(k,"batchingColorTexture",tt._colorsTexture,ct));const Ki=ot.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Z.update(tt,ot,Kn),(Zi||Gt.receiveShadow!==tt.receiveShadow)&&(Gt.receiveShadow=tt.receiveShadow,Pe.setValue(k,"receiveShadow",tt.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&$.environment!==null&&(We.envMapIntensity.value=$.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=u_()),Zi){if(Pe.setValue(k,"toneMappingExposure",T.toneMappingExposure),Gt.needsLights&&Lo(We,Is),Dt&&j.fog===!0&&qt.refreshFogUniforms(We,Dt),qt.refreshMaterialUniforms(We,j,Y,O,y.state.transmissionRenderTarget[D.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ue=Gt.lightProbeGrid;We.probesSH.value=Ue.texture,We.probesMin.value.copy(Ue.boundingBox.min),We.probesMax.value.copy(Ue.boundingBox.max),We.probesResolution.value.copy(Ue.resolution)}Ua.upload(k,Un(Gt),We,ct)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ua.upload(k,Un(Gt),We,ct),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Pe.setValue(k,"center",tt.center),Pe.setValue(k,"modelViewMatrix",tt.modelViewMatrix),Pe.setValue(k,"normalMatrix",tt.normalMatrix),Pe.setValue(k,"modelMatrix",tt.matrixWorld),j.uniformsGroups!==void 0){const Ue=j.uniformsGroups;for(let Ji=0,Us=Ue.length;Ji<Us;Ji++){const ph=Ue[Ji];xt.update(ph,Kn),xt.bind(ph,Kn)}}return Kn}function Lo(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.sunLights.needsUpdate=$,D.sunLightShadows.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function cl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(D,$,ot){const j=st.get(D);j.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),st.get(D.texture).__webglTexture=$,st.get(D.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ot,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const ot=st.get(D);ot.__webglFramebuffer=$,ot.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(D,$=0,ot=0){V=D,N=$,F=ot;let j=null,tt=!1,Dt=!1;if(D){const Ft=st.get(D);if(Ft.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(k.FRAMEBUFFER,Ft.__webglFramebuffer),et.copy(D.viewport),St.copy(D.scissor),mt=D.scissorTest,A.viewport(et),A.scissor(St),A.setScissorTest(mt),H=-1;return}else if(Ft.__webglFramebuffer===void 0)ct.setupRenderTarget(D);else if(Ft.__hasExternalTextures)ct.rebindTextures(D,st.get(D.texture).__webglTexture,st.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ce=D.depthTexture;if(Ft.__boundDepthTexture!==ce){if(ce!==null&&st.has(ce)&&(D.width!==ce.image.width||D.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(D)}}const Wt=D.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const Zt=st.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Zt[$])?j=Zt[$][ot]:j=Zt[$],tt=!0):D.samples>0&&ct.useMultisampledRTT(D)===!1?j=st.get(D).__webglMultisampledFramebuffer:Array.isArray(Zt)?j=Zt[ot]:j=Zt,et.copy(D.viewport),St.copy(D.scissor),mt=D.scissorTest}else et.copy(z).multiplyScalar(Y).floor(),St.copy(nt).multiplyScalar(Y).floor(),mt=pt;if(ot!==0&&(j=P),A.bindFramebuffer(k.FRAMEBUFFER,j)&&A.drawBuffers(D,j),A.viewport(et),A.scissor(St),A.setScissorTest(mt),tt){const Ft=st.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ft.__webglTexture,ot)}else if(Dt){const Ft=$;for(let Wt=0;Wt<D.textures.length;Wt++){const Zt=st.get(D.textures[Wt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Wt,Zt.__webglTexture,ot,Ft)}}else if(D!==null&&ot!==0){const Ft=st.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ft.__webglTexture,ot)}H=-1};function Gr(D){const $=st.get(D);return($.__readFormat!==D.format||$.__readType!==D.type)&&($.__readFormat=D.format,$.__readType=D.type,$.__formatReadable=U.textureFormatReadable(D.format),$.__typeReadable=U.textureTypeReadable(D.type)),$}this.readRenderTargetPixels=function(D,$,ot,j,tt,Dt,zt,Ft=0){if(!(D&&D.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=st.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){A.bindFramebuffer(k.FRAMEBUFFER,Wt);try{const Zt=D.textures[Ft],ce=Zt.format,he=Zt.type;D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ft);const Xt=Gr(Zt);if(Xt.__formatReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-j&&ot>=0&&ot<=D.height-tt&&k.readPixels($,ot,j,tt,Ct.convert(ce),Ct.convert(he),Dt)}finally{const Zt=V!==null?st.get(V).__webglFramebuffer:null;A.bindFramebuffer(k.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(D,$,ot,j,tt,Dt,zt,Ft=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=st.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt)if($>=0&&$<=D.width-j&&ot>=0&&ot<=D.height-tt){A.bindFramebuffer(k.FRAMEBUFFER,Wt);const Zt=D.textures[Ft],ce=Zt.format,he=Zt.type;D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ft);const Xt=Gr(Zt);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Se),k.bufferData(k.PIXEL_PACK_BUFFER,Dt.byteLength,k.STREAM_READ),k.readPixels($,ot,j,tt,Ct.convert(ce),Ct.convert(he),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const $e=V!==null?st.get(V).__webglFramebuffer:null;A.bindFramebuffer(k.FRAMEBUFFER,$e);const ze=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ep(k,ze,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Se),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Dt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Se),k.deleteSync(ze),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,ot=0){const j=Math.pow(2,-ot),tt=Math.floor(D.image.width*j),Dt=Math.floor(D.image.height*j),zt=$!==null?$.x:0,Ft=$!==null?$.y:0;ct.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,zt,Ft,tt,Dt),A.unbindTexture()},this.copyTextureToTexture=function(D,$,ot=null,j=null,tt=0,Dt=0){let zt,Ft,Wt,Zt,ce,he,Xt,Se,$e;const ze=D.isCompressedTexture?D.mipmaps[Dt]:D.image;if(ot!==null)zt=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,Wt=ot.isBox3?ot.max.z-ot.min.z:1,Zt=ot.min.x,ce=ot.min.y,he=ot.isBox3?ot.min.z:0;else{const We=Math.pow(2,-tt);zt=Math.floor(ze.width*We),Ft=Math.floor(ze.height*We),D.isDataArrayTexture?Wt=ze.depth:D.isData3DTexture?Wt=Math.floor(ze.depth*We):Wt=1,Zt=0,ce=0,he=0}j!==null?(Xt=j.x,Se=j.y,$e=j.z):(Xt=0,Se=0,$e=0);const De=Ct.convert($.format),pn=Ct.convert($.type);let Gt;$.isData3DTexture?(ct.setTexture3D($,0),Gt=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ct.setTexture2DArray($,0),Gt=k.TEXTURE_2D_ARRAY):(ct.setTexture2D($,0),Gt=k.TEXTURE_2D),A.activeTexture(k.TEXTURE0),A.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const En=A.getParameter(k.UNPACK_ROW_LENGTH),xe=A.getParameter(k.UNPACK_IMAGE_HEIGHT),Kn=A.getParameter(k.UNPACK_SKIP_PIXELS),_i=A.getParameter(k.UNPACK_SKIP_ROWS),Zi=A.getParameter(k.UNPACK_SKIP_IMAGES);A.pixelStorei(k.UNPACK_ROW_LENGTH,ze.width),A.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ze.height),A.pixelStorei(k.UNPACK_SKIP_PIXELS,Zt),A.pixelStorei(k.UNPACK_SKIP_ROWS,ce),A.pixelStorei(k.UNPACK_SKIP_IMAGES,he);const Is=D.isDataArrayTexture||D.isData3DTexture,Pe=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const We=st.get(D),Ki=st.get($),Ue=st.get(We.__renderTarget),Ji=st.get(Ki.__renderTarget);A.bindFramebuffer(k.READ_FRAMEBUFFER,Ue.__webglFramebuffer),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Us=0;Us<Wt;Us++)Is&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,st.get(D).__webglTexture,tt,he+Us),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,st.get($).__webglTexture,Dt,$e+Us)),k.blitFramebuffer(Zt,ce,zt,Ft,Xt,Se,zt,Ft,k.DEPTH_BUFFER_BIT,k.NEAREST);A.bindFramebuffer(k.READ_FRAMEBUFFER,null),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(tt!==0||D.isRenderTargetTexture||st.has(D)){const We=st.get(D),Ki=st.get($);A.bindFramebuffer(k.READ_FRAMEBUFFER,R),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,I);for(let Ue=0;Ue<Wt;Ue++)Is?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.__webglTexture,tt,he+Ue):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,We.__webglTexture,tt),Pe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ki.__webglTexture,Dt,$e+Ue):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ki.__webglTexture,Dt),tt!==0?k.blitFramebuffer(Zt,ce,zt,Ft,Xt,Se,zt,Ft,k.COLOR_BUFFER_BIT,k.NEAREST):Pe?k.copyTexSubImage3D(Gt,Dt,Xt,Se,$e+Ue,Zt,ce,zt,Ft):k.copyTexSubImage2D(Gt,Dt,Xt,Se,Zt,ce,zt,Ft);A.bindFramebuffer(k.READ_FRAMEBUFFER,null),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Pe?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(Gt,Dt,Xt,Se,$e,zt,Ft,Wt,De,pn,ze.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(Gt,Dt,Xt,Se,$e,zt,Ft,Wt,De,ze.data):k.texSubImage3D(Gt,Dt,Xt,Se,$e,zt,Ft,Wt,De,pn,ze):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Dt,Xt,Se,zt,Ft,De,pn,ze.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Dt,Xt,Se,ze.width,ze.height,De,ze.data):k.texSubImage2D(k.TEXTURE_2D,Dt,Xt,Se,zt,Ft,De,pn,ze);A.pixelStorei(k.UNPACK_ROW_LENGTH,En),A.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xe),A.pixelStorei(k.UNPACK_SKIP_PIXELS,Kn),A.pixelStorei(k.UNPACK_SKIP_ROWS,_i),A.pixelStorei(k.UNPACK_SKIP_IMAGES,Zi),Dt===0&&$.generateMipmaps&&k.generateMipmap(Gt),A.unbindTexture()},this.initRenderTarget=function(D){st.get(D).__webglFramebuffer===void 0&&ct.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ct.setTextureCube(D,0):D.isData3DTexture?ct.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ct.setTexture2DArray(D,0):ct.setTexture2D(D,0),A.unbindTexture()},this.resetState=function(){N=0,F=0,V=null,A.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const rh=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:R0,AddEquation:ws,AddOperation:If,AdditiveBlending:_o,AgXToneMapping:P0,AlphaFormat:O0,AlwaysCompare:Hf,AlwaysDepth:Ga,AlwaysStencilFunc:Ff,ArcCurve:td,ArrayCamera:xd,BackSide:fn,BasicDepthPacking:Uf,Box3:ds,BoxGeometry:Ne,BufferAttribute:$n,BufferGeometry:Ae,ByteType:I0,Cache:Ia,Camera:ih,CanvasTexture:Yc,CatmullRomCurve3:Kc,CineonToneMapping:A0,CircleGeometry:Ao,ClampToEdgeWrapping:li,Color:Ht,ColorManagement:de,ConstantAlphaFactor:Pf,ConstantColorFactor:Rf,Controls:vd,CubeCamera:_d,CubeDepthTexture:jf,CubeReflectionMapping:us,CubeRefractionMapping:Cs,CubeTexture:$0,CubeUVReflectionMapping:Fr,CubicBezierCurve:J0,CubicBezierCurve3:ed,CullFaceBack:jl,CullFaceFront:ff,CullFaceNone:uf,Curve:gi,CurvePath:id,CustomBlending:pf,CustomToneMapping:C0,CylinderGeometry:yn,Data3DTexture:$f,DataArrayTexture:G0,DataTexture:Xc,DefaultLoadingManager:pd,DepthFormat:Li,DepthStencilFormat:cs,DepthTexture:So,DirectionalLight:sh,DoubleSide:en,DstAlphaFactor:bf,DstColorFactor:Ef,DynamicDrawUsage:Vf,EllipseCurve:Zc,EqualCompare:zf,EqualDepth:Va,EquirectangularReflectionMapping:or,EquirectangularRefractionMapping:Ca,Euler:Di,EventDispatcher:Yi,ExternalTexture:Z0,ExtrudeGeometry:Br,Float32BufferAttribute:ee,FloatType:ti,Fog:Wc,FrontSide:ui,Frustum:qc,GLSL3:n0,GreaterCompare:kf,GreaterDepth:Xa,GreaterEqualCompare:Hc,GreaterEqualDepth:Wa,Group:ge,HalfFloatType:pi,HemisphereLight:eh,IcosahedronGeometry:Zn,ImageLoader:md,ImageUtils:qf,InstancedBufferAttribute:i0,InstancedMesh:dn,IntType:Uc,InterleavedBuffer:Kf,InterleavedBufferAttribute:Rr,KeepStencilOp:La,Layers:H0,LessCompare:Bf,LessDepth:Ha,LessEqualCompare:Gc,LessEqualDepth:xo,Light:el,LightShadow:nh,LineCurve:Q0,LineCurve3:nd,LinearFilter:un,LinearMipmapLinearFilter:as,LinearMipmapNearestFilter:Pa,LinearSRGBColorSpace:br,LinearToneMapping:E0,LinearTransfer:wr,Loader:tl,LoadingManager:dd,MOUSE:Wi,Material:ps,MathUtils:ue,Matrix2:c0,Matrix3:se,Matrix4:Le,MaxEquation:xf,Mesh:oe,MeshBasicMaterial:Gn,MeshDepthMaterial:ud,MeshDistanceMaterial:fd,MeshLambertMaterial:jt,MeshPhongMaterial:pr,MinEquation:_f,MirroredRepeatWrapping:Ps,MixOperation:Df,MultiplyBlending:e0,MultiplyOperation:Nr,NearestFilter:Ye,NearestMipmapLinearFilter:Yo,NearestMipmapNearestFilter:Or,NeutralToneMapping:L0,NeverCompare:Of,NeverDepth:ka,NoBlending:Ti,NoColorSpace:Bi,NoToneMapping:fi,NormalBlending:co,NotEqualCompare:Gf,NotEqualDepth:qa,Object3D:ye,ObjectSpaceNormalMap:Nf,OneFactor:Mf,OneMinusConstantAlphaFactor:Lf,OneMinusConstantColorFactor:Cf,OneMinusDstAlphaFactor:wf,OneMinusDstColorFactor:Tf,OneMinusSrcAlphaFactor:w0,OneMinusSrcColorFactor:Sf,OrthographicCamera:nl,PCFShadowMap:sr,PCFSoftShadowMap:df,PMREMGenerator:l0,Path:s0,PerspectiveCamera:hn,Plane:Si,PlaneGeometry:mi,PointLight:gd,PolyhedronGeometry:$c,QuadraticBezierCurve:j0,QuadraticBezierCurve3:Jc,Quaternion:qi,R11_EAC_Format:tc,RED_GREEN_RGTC2_Format:yr,RED_RGTC1_Format:Mc,REVISION:Ic,RG11_EAC_Format:Mr,RGBAFormat:ei,RGBAIntegerFormat:kc,RGBA_ASTC_10x10_Format:pc,RGBA_ASTC_10x5_Format:uc,RGBA_ASTC_10x6_Format:fc,RGBA_ASTC_10x8_Format:dc,RGBA_ASTC_12x10_Format:mc,RGBA_ASTC_12x12_Format:gc,RGBA_ASTC_4x4_Format:ic,RGBA_ASTC_5x4_Format:sc,RGBA_ASTC_5x5_Format:oc,RGBA_ASTC_6x5_Format:rc,RGBA_ASTC_6x6_Format:ac,RGBA_ASTC_8x5_Format:cc,RGBA_ASTC_8x6_Format:lc,RGBA_ASTC_8x8_Format:hc,RGBA_BPTC_Format:_c,RGBA_ETC2_EAC_Format:ja,RGBA_PVRTC_2BPPV1_Format:Ka,RGBA_PVRTC_4BPPV1_Format:Za,RGBA_S3TC_DXT1_Format:ar,RGBA_S3TC_DXT3_Format:cr,RGBA_S3TC_DXT5_Format:lr,RGBFormat:B0,RGB_BPTC_SIGNED_Format:xc,RGB_BPTC_UNSIGNED_Format:vc,RGB_ETC1_Format:Ja,RGB_ETC2_Format:Qa,RGB_PVRTC_2BPPV1_Format:$a,RGB_PVRTC_4BPPV1_Format:Ya,RGB_S3TC_DXT1_Format:rr,RGFormat:fs,RGIntegerFormat:zc,RawShaderMaterial:hd,Ray:Y0,RedFormat:Oc,RedIntegerFormat:Bc,ReinhardToneMapping:T0,RenderTarget:Yf,RepeatWrapping:vr,ReverseSubtractEquation:gf,RingGeometry:jc,SIGNED_R11_EAC_Format:ec,SIGNED_RED_GREEN_RGTC2_Format:Sc,SIGNED_RED_RGTC1_Format:yc,SIGNED_RG11_EAC_Format:nc,SRGBColorSpace:Ke,SRGBTransfer:be,Scene:V0,ShaderChunk:ae,ShaderLib:ai,ShaderMaterial:Dn,Shape:Qc,ShapeUtils:Ei,ShortType:U0,Sphere:To,SphereGeometry:vn,Spherical:a0,SplineCurve:th,Sprite:Qf,SpriteMaterial:q0,SrcAlphaFactor:b0,SrcAlphaSaturateFactor:Af,SrcColorFactor:yf,StaticDrawUsage:z0,SubtractEquation:mf,SubtractiveBlending:t0,TOUCH:wi,TangentSpaceNormalMap:Sr,Texture:cn,TextureLoader:zr,TextureSource:Vc,TorusGeometry:Ri,Triangle:Yn,TubeGeometry:Ro,UVMapping:D0,Uint16BufferAttribute:W0,Uint32BufferAttribute:X0,UniformsLib:It,UniformsUtils:ld,UnsignedByteType:kn,UnsignedInt101111Type:F0,UnsignedInt248Type:Mo,UnsignedInt5999Type:N0,UnsignedIntType:di,UnsignedShort4444Type:Nc,UnsignedShort5551Type:Fc,UnsignedShortType:vo,VSMShadowMap:oo,Vector2:vt,Vector3:B,Vector4:Ge,WebGLCoordinateSystem:hi,WebGLCubeRenderTarget:oh,WebGLRenderTarget:ni,WebGLRenderer:Rd,WebGLUtils:Td,WebGPUCoordinateSystem:yo,WebXRController:Da,ZeroFactor:vf,createCanvasElement:Wf,error:pe,log:Tr,warn:te,warnOnce:Ts},Symbol.toStringTag,{value:"Module"})),mu={type:"change"},ah={type:"start"},Cd={type:"end"},ma=new Y0,gu=new Si,f_=Math.cos(70*ue.DEG2RAD),Qe=new B,Nn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zl=1e-6;class d_ extends vd{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new qi,this._lastTargetPosition=new B,this._quat=new qi().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new a0,this._sphericalDelta=new a0,this._scale=1,this._panOffset=new B,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new B,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=m_.bind(this),this._onPointerDown=p_.bind(this),this._onPointerUp=g_.bind(this),this._onContextMenu=b_.bind(this),this._onMouseWheel=v_.bind(this),this._onKeyDown=M_.bind(this),this._onTouchStart=y_.bind(this),this._onTouchMove=S_.bind(this),this._onMouseDown=__.bind(this),this._onMouseMove=x_.bind(this),this._interceptControlDown=w_.bind(this),this._interceptControlUp=E_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Te.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mu),this.update(),this.state=Te.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Qe.copy(e).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Nn:n>Math.PI&&(n-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Qe.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ma.origin.copy(this.object.position),ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ma.direction))<f_?this.object.lookAt(this.target):(gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ma.intersectPlane(gu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>zl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zl||this._lastTargetPosition.distanceToSquared(this.target)>zl?(this.dispatchEvent(mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Qe.setFromMatrixColumn(e,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,e){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(e,1):(Qe.setFromMatrixColumn(e,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Qe.copy(s).sub(this.target);let o=Qe.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function p_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function m_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function g_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cd),this.state=Te.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function __(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case Wi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case Wi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(ah)}function x_(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function v_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(ah),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cd))}function M_(i){this.enabled!==!1&&this._handleKeyDown(i)}function y_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(ah)}function S_(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function b_(i){this.enabled!==!1&&i.preventDefault()}function w_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function E_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{clamp:wc,lerp:Bn,smoothstep:Mi}=ue;function rn(i,t,e){let n=null,s=0;for(let o=1;o<e.length;o++){const[r,a]=e[o-1],[l,c]=e[o],h=l-r,f=c-a,u=Math.hypot(h,f);if(u<.01)continue;const d=wc(((i-r)*h+(t-a)*f)/u,0,u),m=r+h*d/u,_=a+f*d/u,g=Math.hypot(i-m,t-_);if(!n||g<n.distance){const p=-f/u,x=h/u;n={x:m,z:_,nx:p,nz:x,offset:(i-m)*p+(t-_)*x,run:s+d,distance:g}}s+=u}return n&&{...n,length:s}}function mr(i,t=0){return[Math.min(...i.map(([e])=>e))-t,Math.min(...i.map(([,e])=>e))-t,Math.max(...i.map(([e])=>e))+t,Math.max(...i.map(([,e])=>e))+t]}function kl([i,t,e,n],[s,o,r,a]){return i<r&&e>s&&t<a&&n>o}function ga(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function to(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([Bn(s[0],o[0],l),Bn(s[1],o[1],l)])}}return e}function T_(i){const t=i.edge,[e,n]=t[0],[s,o]=t.at(-1),r=Math.hypot(s-e,o-n),a=(s-e)/r,l=(o-n)/r,c=(d,m)=>(d-e)*a+(m-n)*l,h=t.slice(1).map((d,m)=>{const _=t[m],[g,p]=_,[x,M]=d,v=Math.hypot(x-g,M-p),S=c(g,p),y=c(x,M);return{a:_,b:d,span:v,start:S,end:y,offset:(b,E)=>((b-g)*(p-M)+(E-p)*(x-g))/v,bounds:mr([_,d],.005)}}),f=mr(t,i.reach??95),u=mr(t,.01);return{...i,length:r,station:c,segments:h,range:f,crestBounds:u}}function Gl(i,t,e){const n=i.station(t,e);if(n<-.001||n>i.length+.001)return null;if(i.soft){let f=null;for(const u of i.segments){const{a:d,b:m,span:_}=u,g=m[0]-d[0],p=m[1]-d[1],x=wc(((t-d[0])*g+(e-d[1])*p)/(_*_),0,1),M=t-d[0]-x*g,v=e-d[1]-x*p,S=Math.hypot(M,v);if(!f||S<f.distance){const y=M*-p+v*g;f={distance:S,offset:Math.sign(y)*S,upper:Bn(d[2],m[2],x),lower:Bn(d[3],m[3],x)}}}return f}const s=i.segments.find(({end:f})=>n<=f+.001)??i.segments.at(-1),{a:o,b:r,offset:a,start:l,end:c}=s,h=wc((n-l)/(c-l),0,1);return{offset:a(t,e),upper:Bn(o[2],r[2],h),lower:Bn(o[3],r[3],h)}}function A_(i){const t=[];for(const e of i){if(!e.edge||e.edge.length<2)continue;const n={...e,upperDecks:e.upperDeck?[e.upperDeck]:[],lowerDecks:e.lowerDeck?[e.lowerDeck]:[]},s=t.at(-1);if(!s||s.soft||n.soft||s.edge.at(-1).some((o,r)=>Math.abs(o-n.edge[0][r])>.01)){t.push(n);continue}s.edge=[...s.edge,...n.edge.slice(1)],s.shore=[...s.shore,...n.shore.slice(1)],s.breaks=[...s.breaks??[],...n.breaks??[]],s.upperDecks.push(...n.upperDecks),s.lowerDecks.push(...n.lowerDecks),s.flatInland=Math.max(s.flatInland??10,n.flatInland??10),s.blendInland=Math.max(s.blendInland??50,n.blendInland??50),s.endFade=n.endFade}return t}function R_(i){const t=A_(i).map(T_),e=i.filter(({beach:g})=>g?.length>1).map(g=>({...g,range:mr(g.beach,g.reach??100)})),n=i.flatMap(g=>g.paths??[]),s=Object.assign({},...i.map(g=>g.upperIds)),o=Object.assign({},...i.map(g=>g.lowerIds)),r=Object.assign({},...i.map(g=>g.stairs)),a=Object.assign({},...i.map(g=>g.ramps)),l=Object.assign({},...i.map(g=>g.stairWidths)),c=Object.assign({},...i.map(g=>g.stairRun)),h=new Set(i.flatMap(g=>g.underDeckIds??[])),f=[...t,...e].map(g=>g.range);function u(g,p,x,M){const v=M?[M.section]:t;for(const S of v){if(!ga(g,p,S.range))continue;const y=Gl(S,g,p);if(!y||y.offset<-(S.reach??95)||y.offset>52)continue;const w=rn(g,p,S.shore??[]),b=S.shoreRise??(S.soft?6.5:3.6),E=S.station(g,p),T=S.startFade??(S.soft?S.fade??12:11),C=S.endFade??(S.soft?S.fade??12:15),L=T?Mi(E,0,T):1,P=C?1-Mi(E,S.length-C,S.length):1,R=L*P,I=w?Bn(.18,y.lower,Mi(w.distance,0,b)):y.lower;if(S.soft){const F=Mi(y.offset,-(S.slopeWidth??18),0),V=1-Mi(y.offset,10,50);return Bn(x,Bn(I,y.upper,F),R*V)}if(M?.section===S?M.upper:y.offset>=0){const F=1-Mi(Math.max(0,y.offset),S.flatInland??10,S.blendInland??50);return Bn(x,y.upper,F*R)}if(!(w&&w.distance>(S.maxShoreDistance??105)))return Bn(x,I,R)}for(const S of e){if(!ga(g,p,S.range))continue;const y=rn(g,p,S.beach),w=rn(g,p,S.shore);if(!y||!w||y.distance>(S.reach??100))continue;const b=Math.max(6,rn(y.x,y.z,S.shore)?.distance??20);let E=0,T=S.beach[0][2];for(let P=1;P<S.beach.length;P++){const R=S.beach[P-1],I=S.beach[P],N=Math.hypot(I[0]-R[0],I[1]-R[1]);if(y.run<=E+N+.01){T=Bn(R[2],I[2],wc((y.run-E)/N,0,1));break}E+=N}const C=Mi(y.run,0,12)*(1-Mi(y.run,y.length-30,y.length)),L=1-Mi(y.offset,12,55);return Bn(x,Bn(.18,T,Mi(w.distance,0,b)),C*L)}return x}function d(g){const p=mr(g);for(const x of t){let w=function(b,E){b.length>=3&&y.push({ring:b,side:E})};if(x.soft||!kl(p,x.crestBounds))continue;const{station:M,length:v}=x;if(!x.segments.filter(b=>kl(p,b.bounds)).some(b=>{const E=g.map(([T,C])=>b.offset(T,C));return Math.min(...E)<=1e-7&&Math.max(...E)>=-1e-7}))continue;const y=[];w(to(g,([b,E])=>-M(b,E)));for(const b of x.segments){const{start:E,end:T,offset:C}=b;let L=to(g,([P,R])=>M(P,R)-E);L=to(L,([P,R])=>T-M(P,R)),!(L.length<3)&&(w(to(L,([P,R])=>C(P,R)),{section:x,upper:!0}),w(to(L,([P,R])=>-C(P,R)),{section:x,upper:!1}))}return w(to(g,([b,E])=>M(b,E)-v)),y}return null}function m(g,p){return t.some(x=>!x.soft&&ga(g,p,x.range)&&Math.abs(Gl(x,g,p)?.offset??1/0)<7)}function _(g,p,x){for(const M of t){if(!ga(g,p,M.range))continue;const v=Gl(M,g,p);if(v&&Math.abs(v.offset)<36)return v.lower}return x}return{sections:t,extras:n,upperWidths:s,lowerWidths:o,stairLevels:r,rampLevels:a,stairWidths:l,stairRuns:c,deckRoofs:h,apply:u,split:d,nearEdge:m,lowerGrade:_,refines:(g,p,x)=>f.some(M=>kl([g,p,g+x,p+x],M))}}const Ko=Object.freeze({west:-647,east:-125,north:-138,south:129,innerWest:-624,innerEast:-144,innerNorth:-107,innerSouth:104}),is=i=>i.toFixed(1),{west:C_,east:P_,north:L_,south:D_,innerWest:I_,innerEast:U_,innerNorth:N_,innerSouth:F_}=Ko,ol=`
  float cartoonDistrict(vec2 worldXZ) {
    // The harbour curves north at the Ocean end of the promenade.
    float harbourBend = 61.0 * (1.0 - smoothstep(-595.0, -500.0, worldXZ.x));
    vec2 fromWestNorth = smoothstep(
      vec2(${is(C_)}, ${is(L_)} - harbourBend),
      vec2(${is(I_)}, ${is(N_)} - harbourBend), worldXZ);
    vec2 fromEastSouth = 1.0 - smoothstep(
      vec2(${is(U_)}, ${is(F_)}),
      vec2(${is(P_)}, ${is(D_)}), worldXZ);
    return fromWestNorth.x * fromWestNorth.y * fromEastSouth.x * fromEastSouth.y;
  }
`,ms={cartoonEnabled:{value:1}};function O_(i){ms.cartoonEnabled.value=i?1:0}const _u={plaster:{tile:"plaster",size:[2.9,2.9],grain:.63,tint:"#ebc190",palette:.3},stone:{tile:"stone",size:[3.3,2.05],grain:.67,tint:"#caa36b",palette:.18},paving:{tile:"stone",size:[3.3,3.3],grain:.39,tint:"#dfc59c",palette:.17},laidPaving:{tile:"plaster",size:[2.6,2.6],grain:.55,tint:"#bebeb7",palette:.12},roof:{tile:"terracotta",size:[2.45,1.45],grain:.5,tint:"#bd6243",palette:.22},flatRoof:{tile:"plaster",size:[5.1,5.1],grain:.44,tint:"#c9bc9f",palette:.12},foliage:{tile:"leaves",size:[3,3],grain:.6,tint:"#7ea72f",palette:.52},glass:{tile:"plaster",size:[4,3],grain:.16,tint:"#4e7881",palette:.38},wood:{tile:"plaster",size:[1.2,3.5],grain:.53,tint:"#94663c",palette:.14},metal:{tile:"plaster",size:[3.5,3.5],grain:.17,tint:"#ad9d86",palette:.09},ground:{tile:"plaster",size:[8.2,8.2],grain:.53,tint:"#d8b97e",palette:.2},road:{tile:"plaster",size:[4.3,4.3],grain:.33,tint:"#918780",palette:.23}},B_={plaster:.694,stone:.568,terracotta:.271,leaves:.232},Hl=new Map,Vl=new Map,xu=new WeakSet;function Pd(i){if(Hl.has(i))return Hl.get(i);const t={value:0},e=`./art/waterfront-${i}.webp`,n=new zr().load(e,()=>{t.value=1});n.colorSpace=Ke,n.wrapS=Ps,n.wrapT=i==="terracotta"?vr:Ps,n.anisotropy=4;const s={texture:n,ready:t};return Hl.set(i,s),s}function z_(i,t,e){const n=`${i}|${t}|${e}`;if(Vl.has(n))return Vl.get(n);const s={value:0},o=`./${i.replace(/^\/+/,"")}`,r=new zr().load(o,()=>{s.value=1});r.colorSpace=Ke,r.wrapS=r.wrapT=t?Ps:li,e?(r.magFilter=Ye,r.minFilter=Or):r.anisotropy=4;const a={texture:r,ready:s};return Vl.set(n,a),a}function k_(){if(typeof document>"u")return{waterPigment:{value:null},waterPigmentReady:{value:0}};const i=Pd("water");return{waterPigment:{value:i.texture},waterPigmentReady:i.ready}}function Sn(i,{surface:t="plaster",strength:e=1,texture:n=null}={}){if(xu.has(i)||typeof document>"u")return i;if(xu.add(i),n?.path)return G_(i,n,e);const{tile:s,size:o,grain:r,tint:a,palette:l}=_u[t]??_u.plaster,c=Pd(s),h=i.onBeforeCompile,f=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${f}|anapa-paint|${t}|${e}`,i.onBeforeCompile=function(u,d){h.call(this,u,d),Object.assign(u.uniforms,ms,{pigment:{value:c.texture},pigmentReady:c.ready,pigmentMean:{value:B_[s]},pigmentPeriod:{value:new vt(...o)},pigmentTint:{value:new Ht(a)},pigmentPalette:{value:l},pigmentGrain:{value:r},pigmentStrength:{value:e}}),u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
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
      `),u.fragmentShader=u.fragmentShader.replace("#include <common>",`
        #include <common>
        varying vec3 paintedWorld;
        uniform sampler2D pigment;
        uniform float cartoonEnabled, pigmentReady, pigmentMean, pigmentGrain, pigmentPalette, pigmentStrength;
        uniform vec2 pigmentPeriod;
        uniform vec3 pigmentTint;
        ${ol}
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
      `)},i.needsUpdate=!0,i}function G_(i,{path:t,size:e=[3,3],axes:n,repeat:s=!0,amount:o=1,pixelated:r=!1},a){const l=z_(t,s,r),c=i.onBeforeCompile,h=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${h}|anapa-individual-paint`,i.onBeforeCompile=function(f,u){c.call(this,f,u),Object.assign(f.uniforms,ms,{individualPigment:{value:l.texture},individualReady:l.ready,individualPeriod:{value:new vt(...e)},individualAmount:{value:a*o},individualUseAxes:{value:n?1:0},individualOrigin:{value:new B(...n?.origin??[0,0,0])},individualU:{value:new B(...n?.u??[1,0,0])},individualV:{value:new B(...n?.v??[0,1,0])}}),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
        ${ol}
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
      `)},i.needsUpdate=!0,i}const Ld="#526e7c",H_="#f0eee6";function me(i,t,{surface:e="plaster",surfaces:n={},textures:s={}}={}){const o=new Map,r=new Map([[Ld,"glass"]]);for(const[m,_]of Object.entries(n))for(const g of _)r.set(g,m);const a=new ge;a.name=t,i.add(a);function l(m,_,g){const p=r.get(m)??_;o.has(p)||o.set(p,new Map);const x=o.get(p);x.has(m)||x.set(m,[]);const M=x.get(m);for(let v=2;v<g.length;v++)M.push(...g[0],...g[v-1],...g[v])}function c(m,..._){l(m,e,_)}function h(m,_,g){const p=m.map(([x,M])=>new vt(x,M));for(const[x,M,v]of Ei.triangulateShape(p,[])){const[S,y,w]=[p[x],p[M],p[v]],E=(y.x-S.x)*(w.y-S.y)-(y.y-S.y)*(w.x-S.x)>0?[S,w,y]:[S,y,w];l(g,"paving",E.map(({x:T,y:C})=>[T,_,C]))}}function f(m,_,g,p,x){c(x,[m[0],g,m[1]],[_[0],g,_[1]],[_[0],p,_[1]],[m[0],p,m[1]])}function u(m,_,g,p,x=p){const M=m.reduce((v,[S,y],w)=>{const[b,E]=m[(w+1)%m.length];return v+S*E-b*y},0);m.forEach((v,S)=>{const y=m[(S+1)%m.length];M>0?f(y,v,_,g,p):f(v,y,_,g,p)}),x&&h(m,g,x)}function d(m,_,g,p){const x=new B(...m),M=new B(..._),v=M.clone().sub(x).normalize(),y=(Math.abs(v.z)<.9?new B(0,0,1):new B(1,0,0)).cross(v).normalize().multiplyScalar(g/2),w=v.clone().cross(y),b=[x,M].map(E=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([T,C])=>E.clone().addScaledVector(y,T).addScaledVector(w,C).toArray()));for(let E=0;E<4;E++){const T=(E+1)%4;l(p,"metal",[b[0][E],b[1][E],b[1][T],b[0][T]])}l(p,"metal",b[0]),l(p,"metal",b[1].reverse())}return{face:c,flat:h,wall:f,shell:u,beam:d,finish(){for(const[m,_]of o)for(const[g,p]of _){const x=new Ae;x.setAttribute("position",new ee(p,3)),x.computeVertexNormals();const M=s[g]??s[m],v=Sn(new jt({color:g,side:en}),{surface:m,texture:M}),S=new oe(x,v);S.castShadow=!0,S.receiveShadow=!0,a.add(S)}}}}function ft(i,t,e){return i.map((n,s)=>ue.lerp(n,t[s],e))}function Be(i){return i.reduce(([t,e],[n,s])=>[t+n/i.length,e+s/i.length],[0,0])}function Ci(i,t,e,n,s,o,r,a=H_){const l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=Math.max(1,Math.round(l/r));for(let h=0;h<c;h++){const f=ft(n,ft(t,e,(h+.035)/c),1.003),u=ft(n,ft(t,e,(h+.965)/c),1.003);i.wall(f,u,s,o,Ld),i.wall(u,ft(n,ft(t,e,(h+1)/c),1.003),s,o,a)}}function V_(i,t,e,n){const s=new ye;s.position.set(t,e+3.98,n),s.userData.nightLight={color:"#ffcc88",intensity:27,range:9,ground:e},i.add(s)}function W_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.48)"),e.addColorStop(.28,"rgba(255,255,255,0.22)"),e.addColorStop(.63,"rgba(255,255,255,0.05)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new q0({map:new Yc(i),color:"#ffc47a",opacity:.78,blending:_o,depthWrite:!1,toneMapped:!1})}function X_(){const i=new oe(new vn(1,32,16),new Dn({side:fn,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{zenith:{value:new Ht("#45567f")},horizon:{value:new Ht("#9da8c7")},twilight:{value:new Ht("#d3a699")}},vertexShader:`
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
    `}));return i.scale.setScalar(1500),i.frustumCulled=!1,i.renderOrder=-100,i}function q_(i,t){const e=[],n=[];for(const{position:{x:c,z:h},ground:f}of i){let u=function(m,_){const g=_*Math.PI*2/20,p=m/5,x=c+p*7.4*Math.cos(g),M=h+p*7.4*Math.sin(g),v=t(x,M),S=1-Math.min(1,Math.max(0,(Math.abs(v-f)-.28)/.72)),y=Math.min(f+.9,Math.max(f-.9,v))+.215;return[x,y,M,(1-p*p)**3*S]},d=function(...m){if(m.some(_=>_[3]>0))for(const[_,g,p,x]of m)e.push(_,g,p),n.push(x)};for(let m=0;m<5;m++)for(let _=0;_<20;_++){const g=u(m,_),p=u(m,_+1),x=u(m+1,_),M=u(m+1,_+1);m&&d(g,p,x),d(p,M,x)}}const a=new Ae;a.setAttribute("position",new ee(e,3)),a.setAttribute("lampStrength",new ee(n,1));const l=new Dn({side:en,transparent:!0,depthWrite:!1,blending:_o,vertexShader:`
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
    `});return new oe(a,l)}function Y_(i,t){const e=[],n=[];i.updateMatrixWorld(!0),i.traverse(f=>{const{setEvening:u,nightLight:d}=f.userData;u&&e.push(u),d&&n.push({...d,position:f.getWorldPosition(new B)})});const s=n.filter(f=>f.ground!==void 0),o=new ge;o.name="Вечерний свет";const r=X_();if(o.add(r),s.length&&(o.add(q_(s,t)),typeof document<"u")){const f=W_();for(const{position:u}of s){const d=new Qf(f);d.position.copy(u),d.scale.set(2.5,2.5,1),o.add(d)}}const a=Array.from({length:5},()=>{const f=new gd("#fff",0,9,2);return o.add(f),f});i.add(o);const l=new B(1/0,1/0,1/0);let c=!1;function h(f){if(!c||(r.position.copy(f.position),l.distanceToSquared(f.position)<1.5))return;l.copy(f.position);const{x:u,y:d,z:m}=l,g=d-t(u,m)<26?n.map(p=>({source:p,distance:p.position.distanceToSquared(l)})).filter(({distance:p})=>p<33**2).sort((p,x)=>p.distance-x.distance):[];a.forEach((p,x)=>{const M=g[x]?.source;p.intensity=M?.intensity??0,M&&(p.position.copy(M.position),p.color.set(M.color),p.distance=M.range)})}return{setEnabled(f){c=f,o.visible=c,l.set(1/0,1/0,1/0),e.forEach(u=>u(c))},update:h}}function Wl(i,t,e,n=10){return Array.from({length:n},(s,o)=>{const r=o*Math.PI*2/n;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function Dd(i,t,{name:e,lights:n,planters:s}){const o="#878887",r="#646765",a=me(i,e,{surfaces:{metal:[o,r],stone:["#d8d4c7"],ground:["#8c7e60"]}}),l=new dn(new vn(.23,10,7),new jt({color:"#eddaa4"}),n.length*4),c=new dn(new Zn(1,1),Sn(new jt({color:"#607a45"}),{surface:"foliage"}),s.length*7);l.name="Плафоны верхней набережной",l.userData.setEvening=f=>{l.material.emissive.set(f?"#ffc37a":"#000"),l.material.emissiveIntensity=f?1.34:0},c.name="Кустарники в клумбах набережной";const h=new ye;n.forEach(([f,u],d)=>{const m=t(f,u)+.03;V_(i,f,m,u),a.shell(Wl(f,u,.3),m-.13,m+.35,o),a.shell(Wl(f,u,.19),m+.32,m+3.72,o);for(const _ of[.44,.68,3.55,3.7])a.shell(Wl(f,u,.25),m+_,m+_+.1,r);for(let _=0;_<4;_++){const g=Math.PI/4+_*Math.PI/2,p=Math.cos(g),x=Math.sin(g),M=[f+p*.46,m+3.77,u+x*.46];a.beam([f+p*.1,m+3.49,u+x*.1],M,.075,r),h.position.set(M[0],M[1]+.19,M[2]),h.updateMatrix(),l.setMatrixAt(d*4+_,h.matrix)}}),s.forEach(({x:f,z:u,width:d,depth:m,angle:_},g)=>{const p=(v,S)=>[f+v*Math.cos(_)-S*Math.sin(_),u+v*Math.sin(_)+S*Math.cos(_)],x=(v,S)=>[[-v,-S],[v,-S],[v,S],[-v,S]].map(y=>p(...y)),M=t(f,u);a.shell(x(d/2,m/2),M-.1,M+.16,"#d8d4c7"),a.flat(x(d/2-.17,m/2-.17),M+.175,"#8c7e60");for(let v=0;v<7;v++){const[S,y]=p((v-3)*d/7.8,v%2?-.45:.52);h.position.set(S,M+.53,y);const w=.52+v%3*.17;h.scale.set(w,.5+v%2*.26,w*.84),h.rotation.y=v*1.8,h.updateMatrix(),c.setMatrixAt(g*7+v,h.matrix)}}),l.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,i.add(l,c),a.finish()}const Ss={front:[[-549.25,-30.85],[-517.3,-24.44]],depth:9.15,grade:9.03},$_=[{soft:!0,edge:[[-1194.65,-.88,7.9,2.35],[-1188.5,-6.93,8.7,2.35],[-1176.23,-13.69,9.8,2.35],[-1157.84,-21.72,11.8,2.35],[-1124.63,-25.52,12.3,2.35],[-1073.23,-30.79,12.65,2.35],[-1033.68,-39.87,13.25,2.35],[-982.49,-49.59,13.9,2.35],[-926.44,-60.99,13.15,2.4],[-878.85,-73.87,12.1,2.4],[-852,-77.5,11,2.4],[-830.48,-78.2,8.65,2.4]],shore:[[-1195,-24],[-1186.4,-36.11],[-1161.69,-54.98],[-1142.57,-67.42],[-1119.74,-82.36],[-1095.11,-100.63],[-1060.66,-124.59],[-1054.64,-114.35],[-1036.42,-110.13],[-995.48,-107.91],[-965.35,-114.27],[-903.18,-133.53],[-868.87,-118.74],[-830.48,-132]],upperIds:{1293020296:7},lowerIds:{},stairs:{}},{soft:!0,slopeWidth:10.8,shoreRise:1.5,fade:0,edge:[[-830.48,-78.2,8.65,2.4],[-820.6,-84.1,6.7,2.4],[-806.05,-90.4,5.7,2.45],[-783.75,-94.4,4.6,2.45],[-753.37,-97.1,3.65,2.45],[-742.87,-98.3,3.45,2.45],[-728.5,-94.3,4.15,2.45],[-696.91,-88.7,5.45,2.45],[-673.68,-83.1,6.45,2.5],[-658.2,-79.35,6.8,2.5],[-641.17,-75.3,7.1,2.5],[-638.31,-66,7.65,2.5],[-605.95,-55.15,8.5,2.55],[-595.02,-59.9,8.8,2.6]],shore:[[-830.48,-132],[-827,-183.4],[-783.08,-190.76],[-774.16,-192.09],[-729.85,-199.2],[-709.27,-201.43],[-646.49,-232.7],[-636.97,-260.15],[-623.68,-157.59],[-595.02,-144]],lowerDeck:[[-826,-133],[-837,-178],[-783,-187],[-739,-193],[-728,-190],[-715,-191],[-697,-176],[-682,-150],[-659,-139],[-662,-109],[-704,-103],[-740,-100],[-779,-101],[-813,-103],[-825,-114]],upperIds:{596938944:4.2,178479537:3.2},lowerIds:{},stairs:{596938943:[8.65,6.7]},stairWidths:{596938943:2.5}},{fade:0,edge:[[-595.02,-59.9,8.8,2.6],[-587.5,-63.5,8.8,2.6],[-576,-56.7,9.05,2.6],[-559,-50.3,9.15,2.6],[-550,-46,9.1,2.6],[-531.8,-47.6,9.04,2.6],[-525.5,-50.1,9,2.6],[-519.4,-61.2,8.96,2.6],[-501.2,-54.2,8.82,2.6],[-485.4,-49,8.71,2.6],[-480.1,-48.6,8.66,2.6],[-447.5,-40.1,8.5,2.6],[-416,-34.55,8.3,2.6],[-410.5,-34.1,8.28,2.6],[-380,-29.6,8.12,2.6],[-372,-29,8.07,2.6],[-350,-29.15,7.98,2.6],[-320,-29,7.9,2.6],[-300,-32,7.8,2.6]],shore:[[-595.02,-144],[-573.37,-123.91],[-563.51,-116.13],[-552.8,-94],[-534.2,-89],[-490,-73.3],[-467.6,-82.1],[-442.59,-61.36],[-405.47,-52.91],[-397.91,-61.01],[-379.03,-54.91],[-372.9,-48.36],[-320.33,-44.46],[-300,-47.3]],upperIds:{178484904:11,701760799:3.45},lowerIds:{701760797:5.2},underDeckIds:["223948923","223948927","223948934","223948896","223948899","223948902","223948903","223948904","223948906","223948908"],upperDeck:[[-595.02,-59.9],[-587.5,-63.5],[-576,-56.7],[-559,-50.3],[-550,-46],[-531.8,-47.6],[-525.5,-50.1],[-519.4,-61.2],[-501.2,-54.2],[-485.4,-49],[-480.1,-48.6],[-447.5,-40.1],[-416,-34.55],[-410.5,-34.1],[-380,-29.6],[-372,-29],[-350,-29.15],[-320,-29],[-300,-32],[-300,2.5],[-314,1.7],[-365,-.3],[-394,-.6],[-419,-4.4],[-455,-13.2],[-477,-19.4],[-515,-27.5],[-549,-34.8],[-595,-47.1]],stairs:{701760798:[2.6,5]},stairWidths:{701760798:2.25},ramps:{701760799:[5,8.8]},breaks:[[-589,-62.9,4.2]]}],Z_=[[-515.4,-54.6],[-507,-52.4],[-498.1,-49.9],[-488.9,-46.8],[-479.9,-44.6],[-473.2,-42.7],[-463.8,-40.8],[-456.4,-39.3],[-447.3,-37.4],[-441.7,-36.2],[-436.7,-36],[-430.1,-34.8],[-423.4,-34],[-372.9,-24.5],[-364.9,-24.3],[-356.7,-24.9],[-348.5,-24.3],[-339.6,-24.7]],K_=[{x:-512.2,z:-44.4,width:7.2,depth:2.15,angle:.27},{x:-461.1,z:-30.3,width:11.1,depth:2,angle:.17},{x:-442.5,z:-26.9,width:6.1,depth:2.1,angle:.2},{x:-426.2,z:-23.1,width:7.9,depth:2.2,angle:.18}];function J_(i,t){Dd(i,t,{name:"Верхняя набережная · фонари и клумбы",lights:Z_,planters:K_})}const Q_=[{edge:[[-300,-32,7.8,2.6],[-284,-34,7.75,2.6],[-267,-37.5,7.65,2.6],[-246,-43,7.55,2.6],[-240,-42,7.5,2.6],[-236,-29,7.42,2.6],[-228,-19,7.35,2.6],[-218,-7,7.25,2.6]],shore:[[-300,-47.3],[-289.6,-48.8],[-177.1,-87.5],[-161.9,-92.7]],upperDeck:[[-300,-32],[-284,-34],[-267,-37.5],[-246,-43],[-240,-42],[-236,-29],[-228,-19],[-218,-7],[-221,3],[-248,4],[-279,3],[-300,3]],upperIds:{178484904:11},lowerIds:{701760797:5.2,121213094:7.2},underDeckIds:["223948913","223948916"],stairs:{597090335:[7.25,5.97],597090341:[3.25,1.1]},stairWidths:{597090335:13.2,597090341:5.4},stairRun:{597090335:[.09,.36]},ramps:{121213094:[5.97,3.25],"701760797-approach":[3.88,2.6]},paths:[{id:"701760797-approach",points:[[-171.1,-33],[-199.26,-67.75]],width:5.2,level:"lower",replaceStartOf:"701760797"}],breaks:[[-218,-7,4]],flatInland:30,blendInland:52,fade:0},{beach:[[-224.06,-6.35,7.25],[-211.83,-6.43,5.97],[-171.1,-33,3.88],[-159.07,-41.45,3.25],[-144.56,-51.21,1.1],[-81.57,-93.77,1.4],[-39.04,-127.25,1.62],[-.76,-159.34,1.82],[25.53,-190.84,1.95],[71.71,-243.52,2.1],[152.59,-369.21,2.15],[173.74,-356.54,2.2],[184.72,-355.26,2.22],[200.31,-357.98,2.23],[218.09,-367.72,2.25],[238.68,-386.95,2.28],[248.36,-396.07,2.35],[217.53,-444.44,2.24],[252.43,-514.76,2.14],[274.46,-559.15,2.05],[283.14,-576.63,2.03],[323,-654.46,1.98]],shore:[[-177.1,-87.5],[-161.9,-92.7],[-53.6,-178.4],[-34.6,-198.7],[31.6,-303.9],[50.4,-343.6],[84.5,-417.2],[123.2,-492],[197.2,-622.5],[224.45,-686]],lowerIds:{597090338:6.5,121159650:7.5,178302326:5.7},stairs:{851920304:[3,2.28]}}],j_=[[-295.8,-26.2],[-288.7,-27.1],[-281.6,-28.1],[-272.7,-29.1],[-265.8,-30.2],[-257.3,-31.1],[-250.1,-32.8],[-244.6,-33.7]];function tx(i,t){Dd(i,t,{name:"Фонари у Алых парусов",lights:j_,planters:[]})}const{clamp:vu,lerp:_n,smoothstep:we}=ue;function _a(i){return[Math.min(...i.map(([t])=>t)),Math.min(...i.map(([,t])=>t)),Math.max(...i.map(([t])=>t)),Math.max(...i.map(([,t])=>t))]}const eo=([i,t,e,n],s)=>[i-s,t-s,e+s,n+s];function Id(i){const[t,e]=i.origin,[n,s]=i.scale,o=(z,nt)=>[(z-t)*n,(e-nt)*s],r=(z,nt,pt,q)=>[...o(z,q),...o(pt,nt)],a=r(37.2953,44.8868,37.3014,44.8932),l=r(37.2982,44.8933,37.3078,44.8984),c=r(37.3063,44.89613,37.31234,44.89775),h=i.surveyLines??{},f=h[125813146],u=h[400800619],d=h[657038813],m=h[1142991105],_=i.buildings.find(z=>z.id==="977564342")?.rings[0],g=_?.length===8?[_[7],_[6]]:null,p=R_([...$_,...Q_]),x=i.landmarks.find(z=>z.id==="lighthouse")?.position,M=i.landmarks.find(z=>z.id==="port")?.position,v=r(37.303,44.8967,37.3069,44.9012),S=eo(_a(Ss.front),Ss.depth+9),y=i.buildings.find(z=>z.id==="r11979734-0")?.rings[0],w=y&&eo(_a(y),18),b=i.roads.find(z=>z.id==="977564885")?.points,E=b?.[0],T=new Map([["46844613",8],["1293020297",7],["1293020296",7],...Object.entries(p.upperWidths),...Object.entries(p.lowerWidths),...Object.entries(p.stairWidths)]),C=new Map([["977562764",[null,3.8]],["977562762",[3.8,1.65]],["977562763",[3.8,1.65]],["597090335",[7.25,2.6]],["597090341",[2.6,.9]],...Object.entries(p.stairLevels)]),L=new Map(p.extras.filter(z=>z.replaceStartOf).map(z=>[z.replaceStartOf,z.points.length-1])),P=[...i.roads.map(z=>L.has(z.id)?{...z,points:z.points.slice(L.get(z.id))}:z),...p.extras.map(z=>({...z,kind:z.kind??"footway"}))],R=P.filter(z=>C.has(z.id)).map(z=>({...z,width:T.get(z.id)??z.width,bounds:_a(z.points)})),I=P.filter(z=>z.id in p.rampLevels).map(z=>({...z,width:T.get(z.id)??z.width,bounds:_a(z.points)})),N=R.filter(z=>z.id in p.stairLevels),F=[...R,...I],V=[...N,...I],H=(z,nt,[pt,q,it,at])=>z>=pt&&z<=it&&nt>=q&&nt<=at;function J(z,nt,pt){let q=!1,it=1/0;for(let at=0,W=pt.length-1;at<pt.length;W=at++){const[X,gt]=pt[W],[ht,Mt]=pt[at];gt>nt!=Mt>nt&&z<(ht-X)*(nt-gt)/(Mt-gt)+X&&(q=!q);const At=ht-X,k=Mt-gt,Jt=vu(((z-X)*At+(nt-gt)*k)/(At*At+k*k||1),0,1);it=Math.min(it,Math.hypot(z-X-Jt*At,nt-gt-Jt*k))}return q?0:it}function et(z,nt,pt){const q=rn(z,nt,f);if(q.distance>100)return pt(z,nt);const it=1-we(q.distance,49,91),at=we(q.run,0,36),W=1-we(nt,a[3]-55,a[3]-12),X=x?1-we(Math.hypot(z-x[0],nt-x[1]),85,260):0,gt=_n(pt(q.x-q.nx*28,q.z-q.nz*28),22.4,X);let ht=gt;if(q.offset>0){const Mt=Math.max(7,rn(q.x,q.z,u).distance),At=1.65*we(rn(z,nt,u).distance,0,8)+.18;ht=_n(gt,At,we(q.offset,Math.min(1.2,Mt*.08),Mt*.66))}else ht=_n(gt,pt(z,nt),we(-q.offset,15,42));if(g&&q.distance<48){const Mt=rn(z,nt,g),At=1-we(Mt.distance,14,23),k=_n(4.35,1.8,we(Mt.offset,0,10));ht=_n(ht,Math.min(ht,k),At)}return _n(pt(z,nt),ht,it*at*W)}function St(z,nt,pt){const q=rn(z,nt,d);if(q.distance>82||q.offset<-15)return pt(z,nt);const it=pt(q.x-q.nx*14,q.z-q.nz*14),at=_n(it,2.35,we(q.offset,.5,15)),W=we(q.run,0,40)*(1-we(q.run,q.length-45,q.length));return _n(pt(z,nt),at,W*(1-we(q.distance,58,82)))}function mt(z,nt,pt,q){if(f&&u&&H(z,nt,a))return et(z,nt,pt);let it=d&&H(z,nt,l)?St(z,nt,pt):pt(z,nt);if(M&&H(z,nt,v)){const[at,W,X,gt]=v,ht=we(Math.min(z-at,X-z,nt-W,gt-nt),2,26)*(1-we(nt,M[1]+13,M[1]+52)),Mt=_n(1.8,2.55,we(nt,M[1]-73,M[1]+8));it=_n(it,Mt,ht)}return p.apply(z,nt,it,q)}function Ut(z,nt){const pt=C.get(z.id);if(!pt)return null;const q=pt[0]??mt(...E??z.points[0],nt),it=pt[1];return{from:q,to:it,run:p.stairRuns[z.id]??[0,1]}}function kt(z,nt,pt){const q=p.rampLevels[z.id];if(!q)return;const it=rn(nt,pt,z.points);return _n(q[0],q[1],it.run/it.length)}function G(z,nt,pt,q){let it=mt(z,nt,pt,q);if(H(z,nt,S)){const at=rn(z,nt,Ss.front),W=Math.sqrt(Math.max(0,at.distance**2-at.offset**2)),X=Math.max(W,-at.offset,at.offset-Ss.depth);it=_n(it,Ss.grade,1-we(X,1.8,7))}if(w&&H(z,nt,w)){const at=J(z,nt,y);it=_n(it,Ss.grade,1-we(at,10,17))}if(E&&Math.abs(z-E[0])<14&&Math.abs(nt-E[1])<14){const at=rn(z,nt,b);at.distance<5&&(it=_n(it,mt(...E,pt),1-we(at.distance,1.6,5)))}for(const at of F){if(!H(z,nt,eo(at.bounds,Math.max(4.5,at.width/2+2))))continue;const W=rn(z,nt,at.points),X=at.width/2,gt=!V.includes(at),ht=gt?4.3:X+1.6;if(W.distance>ht)continue;const Mt=p.rampLevels[at.id],{from:At,to:k,run:Jt}=Mt?{from:Mt[0],to:Mt[1],run:[0,1]}:Ut(at,pt),Kt=vu((W.run/W.length-Jt[0])/(Jt[1]-Jt[0]),0,1),U=_n(At,k,Kt)-(Jt[0]===0&&Jt[1]===1?.08:.23);it=_n(it,U,1-we(W.distance,gt?1.65:X,ht))}return it}function O(z,nt,pt){return pt.breaks?.some(([q,it,at])=>Math.hypot(z-q,nt-it)<at)||V.some(q=>H(z,nt,eo(q.bounds,q.width/2+.5))&&rn(z,nt,q.points).distance<q.width/2+.3)}function Y(z,nt){return V.some(pt=>H(z,nt,eo(pt.bounds,pt.width/2+2)))}function rt(z,nt,pt){return N.some(q=>{const[it,at,W,X]=eo(q.bounds,q.width/2+2);return z<W&&nt<X&&z+pt>it&&nt+pt>at})}function _t(z,nt,pt){if(f&&u&&H(z,nt,a)){const q=rn(z,nt,f),it=rn(z,nt,u),at=(1-we(it.distance,5,11))*(1-we(pt,2.2,3.8));if(at>0)return["shingle",at];const W=we(q.offset,.5,4)*(1-we(q.distance,28,43))*we(pt,2,5.5);if(W>0)return["rockLight",W*(.74+.21*Math.sin(pt*1.7+z*.027))]}if(m&&H(z,nt,c)){const q=(1-we(rn(z,nt,m).distance,3.2,6.4))*(1-we(pt,2.3,3.1));if(q>0)return["riprap",q]}if(H(z,nt,v)&&pt<7){const[q,it,at,W]=v;return["quay",we(Math.min(z-q,at-z,nt-it,W-nt),0,24)*(1-we(pt,4.5,7))]}return null}return{height:G,tone:_t,stairHeight:Ut,rampHeight:kt,promenadeWidths:T,gorgWater:m,allRoads:P,surveyedStairs:N,ramps:I,waterfront:p,wallOpening:O,nearTransition:Y,refinesStairs:rt,refines(z,nt,pt){return p.refines(z,nt,pt)||[a,l,c,v].some(([q,it,at,W])=>z+pt>q-18&&z<at+18&&nt+pt>it-18&&nt<W+18)}}}const ex=[37.294125,44.884625,37.325875,44.907375],nx=128,ix=92,sx=JSON.parse("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.9,2.4,2.9,3.4,3.7,3.9,4,4,3.9,3.9,3.9,3.9,4,3.9,3.9,4,3.9,3.6,3.1,2.7,2.5,2.5,2.7,3,3.1,2.9,2.5,1.9,1.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,2,2.5,3.1,3.6,4.1,4.4,4.6,4.4,4.2,3.9,3.8,3.8,3.8,3.8,4,4.1,4.1,3.8,3.2,2.7,2.4,2.4,2.7,3,3.1,2.9,2.4,1.7,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.6,2,2.6,3.1,3.7,4.3,4.8,5,4.9,4.6,4.3,4.1,4,3.9,3.9,4,4.2,4.3,4.1,3.6,3.1,2.9,2.9,3.1,3.2,3.2,2.7,2.1,1.4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.2,1.6,2,2.5,3,3.6,4.2,4.7,5,5,4.9,4.7,4.6,4.4,4.2,4.1,4,4.1,4.2,4.1,3.9,3.6,3.4,3.3,3.2,3.1,2.8,2.2,1.6,1.1,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2,2.4,2.9,3.4,4,4.5,4.7,4.7,4.7,4.7,4.7,4.7,4.4,4.1,3.8,3.8,3.8,3.8,3.6,3.3,3,2.7,2.4,2.2,1.8,1.3,0.9,0.7,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.2,1.6,2,2.3,2.8,3.3,3.8,4.2,4.4,4.4,4.3,4.4,4.5,4.5,4.2,3.7,3.3,3.1,3,2.9,2.5,2.1,1.7,1.4,1.2,1,0.8,0.6,0.4,0.5,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.2,1.5,1.9,2.2,2.5,2.9,3.3,3.6,3.8,3.8,3.8,3.8,3.9,3.9,3.6,3.1,2.7,2.3,2.1,1.8,1.4,1,0.7,0.5,0.4,0.4,0.4,0.5,0.5,0.6,0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.7,2.8,2.9,3,3,3.1,3.1,3.1,2.9,2.5,2.1,1.7,1.5,1.3,1,0.7,0.5,0.4,0.5,0.7,0.9,1.1,1.3,1.4,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,2,2.3,2.5,2.5,2.5,2.4,2.3,2.3,2.3,2.4,2.4,2.3,2,1.8,1.6,1.4,1.3,1.2,1,0.9,1,1.3,1.7,2.1,2.5,2.7,2.9,2.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.2,1.4,1.6,2,2.5,3,3.3,3.3,2.9,2.4,2,1.9,1.9,2,2.1,2.1,2.1,2,1.9,1.8,1.7,1.7,1.6,1.6,1.8,2.2,2.9,3.5,4,4.3,4.4,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.7,1,1.2,1.4,1.6,2,2.5,3.2,3.9,4.3,4.2,3.5,2.6,2,1.8,1.9,2.2,2.4,2.5,2.5,2.5,2.4,2.4,2.4,2.3,2.2,2.2,2.5,3,3.8,4.5,5,5.3,5.5,5.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.4,1.7,2,2.3,2.8,3.5,4.1,4.5,4.2,3.4,2.5,2,1.9,2.1,2.5,2.8,2.9,2.9,2.8,2.8,2.9,2.9,2.8,2.7,2.7,2.9,3.4,4.1,4.8,5.3,5.6,5.8,5.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.6,1.9,2.2,2.5,2.8,3.2,3.5,3.6,3.3,2.6,2.1,1.8,1.9,2.2,2.6,2.9,3,2.9,2.9,2.9,3,3,3.1,3,3,3.1,3.4,4,4.5,5.1,5.4,5.6,5.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.7,2.1,2.4,2.6,2.7,2.9,2.9,2.7,2.3,2,1.8,1.8,2,2.2,2.5,2.7,2.8,2.8,2.8,2.9,3,3.1,3.2,3.2,3.1,3.1,3.2,3.5,3.9,4.4,4.8,5.1,5.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.4,1.9,2.3,2.7,3,3,2.9,2.6,2.3,1.9,1.8,1.8,1.9,2.1,2.3,2.6,2.8,3,3.1,3.1,3.2,3.3,3.3,3.3,3.3,3.2,3.1,2.9,2.9,3.1,3.5,3.9,4.3,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,2,2.6,3.2,3.5,3.5,3.2,2.7,2.2,1.8,1.8,1.9,2.1,2.4,2.7,3.1,3.5,3.9,4.1,4.2,4.1,4,3.7,3.4,3.2,3,2.8,2.6,2.5,2.4,2.6,2.9,3.2,3.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2.2,2.8,3.4,3.6,3.5,3.1,2.5,2.1,1.8,1.9,2,2.3,2.6,3.1,3.8,4.5,5,5.3,5.2,5,4.6,4.1,3.5,3.1,2.8,2.6,2.3,2.2,2,2,2.1,2.3,2.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.4,2.9,3.2,3.2,3,2.6,2.3,2.1,2,2,2.1,2.3,2.7,3.2,3.9,4.7,5.2,5.4,5.3,5,4.6,4,3.5,3,2.6,2.3,2.1,1.9,1.7,1.6,1.7,1.8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.2,1.6,2.1,2.6,2.9,2.9,2.7,2.4,2.3,2.3,2.4,2.5,2.4,2.3,2.4,2.6,3,3.4,3.9,4.3,4.4,4.4,4.3,4.1,3.7,3.3,2.9,2.5,2.2,1.9,1.7,1.6,1.6,1.7,2,2.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.3,2.7,2.7,2.5,2.3,2.2,2.5,2.9,3.2,3.3,3.1,2.8,2.6,2.5,2.6,2.8,3,3.2,3.3,3.4,3.5,3.5,3.4,3.1,2.8,2.5,2.2,2,1.8,1.8,2,2.2,2.6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.5,1.9,2.3,2.6,2.5,2.3,2.3,2.6,3.1,3.7,4,4,3.6,3.1,2.7,2.5,2.5,2.5,2.5,2.5,2.6,2.8,3,3.1,3.1,2.9,2.7,2.5,2.4,2.4,2.4,2.5,2.7,3,3.4,3.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.3,1.7,2,2.3,2.4,2.4,2.4,2.7,3.3,4,4.4,4.3,4,3.5,3.1,2.7,2.5,2.5,2.4,2.4,2.3,2.3,2.5,2.7,2.8,2.8,2.7,2.7,2.7,2.9,3.2,3.6,3.8,3.9,4.1,4.3,4.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,0.8,1.2,1.5,1.9,2.2,2.4,2.3,2.4,2.7,3.3,4.1,4.6,4.7,4.3,3.9,3.5,3.1,2.9,2.7,2.7,2.6,2.6,2.5,2.4,2.5,2.6,2.7,2.7,2.7,2.9,3.2,3.7,4.4,5,5.3,5.4,5.4,5.6,5.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.8,1.1,1.4,1.8,2.1,2.4,2.4,2.3,2.5,3.1,4,4.8,5.2,5,4.5,4.1,3.9,3.7,3.5,3.3,3.1,3,2.9,2.8,2.7,2.7,2.7,2.8,2.8,3,3.2,3.7,4.4,5.2,6,6.4,6.6,6.7,7,7.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,1.8,2.1,2.4,2.4,2.4,2.4,2.6,3.3,4.3,5.1,5.4,5.3,5,4.9,4.8,4.6,4.2,3.9,3.6,3.4,3.3,3.1,3,3.1,3.2,3.2,3.3,3.5,3.8,4.3,5,5.8,6.5,7,7.4,7.6,7.8,8.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.1,1.5,1.9,2.3,2.5,2.6,2.5,2.5,2.5,2.8,3.4,4.1,4.8,5.1,5.3,5.3,5.5,5.4,5.1,4.6,4.2,3.9,3.7,3.6,3.6,3.6,3.7,3.9,4.1,4.2,4.4,4.8,5.2,5.8,6.4,7,7.4,7.6,7.7,7.9,8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,2.8,2.8,2.7,2.8,3.1,3.5,3.9,4.3,4.6,4.9,5.1,5.4,5.4,5.1,4.7,4.3,4,3.9,3.8,3.9,4.1,4.4,4.7,5,5.3,5.7,6.1,6.4,6.8,7.1,7.3,7.4,7.4,7.4,7.5,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,2,2.3,2.7,2.9,3,3,3,3.1,3.3,3.5,3.8,4,4.2,4.4,4.6,4.8,5.1,5.3,5.2,5,4.7,4.4,4.1,4,4.1,4.3,4.6,5,5.5,6,6.5,6.9,7.1,7.3,7.3,7.3,7.3,7.2,7.2,7.3,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.9,3,3.1,3.1,3.2,3.4,3.8,4.1,4.3,4.4,4.4,4.5,4.5,4.7,5,5.4,5.7,5.8,5.6,5.1,4.7,4.3,4.2,4.3,4.6,5,5.6,6.1,6.6,6.9,7.1,7.2,7.3,7.2,7.1,7,7.1,7.4,7.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.7,2.1,2.5,2.8,3,3.1,3.1,3.1,3.3,3.7,4.2,4.7,4.9,4.9,4.8,4.7,4.6,4.7,4.9,5.4,6,6.3,6.3,5.9,5.4,4.9,4.5,4.4,4.5,4.9,5.3,5.9,6.3,6.7,6.9,7.1,7.3,7.3,7.3,7.3,7.4,7.9,8.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,3,3,3,3.1,3.4,4,4.6,5.2,5.5,5.6,5.4,5.3,5,4.8,4.8,5.2,5.8,6.3,6.5,6.4,6,5.6,5.1,4.8,4.7,4.9,5.4,5.9,6.3,6.6,6.9,7.2,7.5,7.7,7.7,7.8,8.1,8.8,9.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.7,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.9,2.2,2.5,2.7,2.9,3,3,3.1,3.2,3.6,4.2,5,5.7,6.2,6.4,6.4,6.3,6,5.5,5.2,5.3,5.8,6.2,6.5,6.6,6.5,6.3,5.9,5.4,5.2,5.3,5.7,6.2,6.6,6.9,7.2,7.6,7.9,8.1,8.1,8.2,8.6,9.4,10.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.8,1.1,1.2,1,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.3,3.3,3.3,3.4,3.8,4.4,5.1,5.9,6.5,7,7.4,7.5,7.1,6.5,5.9,5.7,5.9,6.3,6.6,6.7,6.9,6.8,6.6,6.2,5.9,5.8,6.1,6.4,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.2,8.5,9.2,10.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.5,1.3,0.9,0.4,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.4,1.9,2.3,2.6,2.9,3.2,3.4,3.6,3.7,3.6,3.6,3.7,4,4.5,5.1,5.7,6.3,6.9,7.5,7.9,7.8,7.2,6.4,5.9,5.9,6.2,6.4,6.7,6.8,7,6.9,6.6,6.3,6.2,6.3,6.5,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.1,8.3,8.8,9.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.4,0.7,1.1,1.5,1.7,1.5,1,0.6,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.7,3,3.2,3.5,3.7,3.8,3.9,3.8,3.8,4,4.3,4.6,5,5.3,5.7,6.2,6.8,7.3,7.4,7,6.3,5.8,5.8,6.1,6.4,6.7,6.9,7,7,6.8,6.7,6.7,6.7,6.7,6.8,7.1,7.5,7.9,8.4,8.6,8.6,8.5,8.4,8.5,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.4,0.4,0.4,0.4,0.5,0.6,0.8,0.9,1.1,1.4,1.6,1.7,1.4,0.9,0.5,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.8,3,3.2,3.3,3.4,3.6,3.8,3.9,3.9,3.9,4,4.2,4.4,4.6,4.8,4.9,5.2,5.7,6.1,6.3,6.1,5.8,5.6,5.9,6.4,6.9,7.2,7.4,7.4,7.4,7.3,7.3,7.3,7.2,7,7,7.1,7.4,8,8.6,9.1,9.1,8.9,8.8,8.8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.4,0.5,0.6,0.8,0.9,1,1,1.2,1.4,1.5,1.6,1.7,1.8,1.8,1.6,1.2,0.7,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,1,1.5,2,2.5,2.8,3,3.1,3.2,3.2,3.4,3.5,3.6,3.7,3.7,3.7,3.6,3.7,3.9,4.1,4.4,4.5,4.6,4.8,5,5.2,5.3,5.4,5.6,6.2,6.9,7.5,7.9,8,8,8,8.1,8.1,8,7.7,7.4,7.2,7.2,7.3,7.8,8.5,9.1,9.4,9.5,9.6,9.7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.2,0.3,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.3,2.3,2.3,2.2,2,1.7,1.2,0.7,0.4,0.2,0.1,0.1,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.2,1.7,2.1,2.5,2.8,3.1,3.2,3.2,3.1,3.1,3.2,3.3,3.5,3.6,3.6,3.4,3.3,3.3,3.5,3.9,4.3,4.4,4.4,4.4,4.6,4.9,5.3,5.7,6.2,6.8,7.5,8,8.2,8.3,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.8,7.6,7.5,7.8,8.4,9.1,9.8,10.4,10.7,11,11.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.3,0.4,0.5,0.6,0.6,0.7,0.9,1.1,1.3,1.5,1.7,2,2.4,2.8,3.2,3.5,3.5,3.5,3.4,3.2,3,2.7,2.2,1.6,1.2,0.8,0.6,0.4,0.3,0.3,0.2,0.2,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.5,1,1.5,2,2.4,2.6,2.8,3,3.1,3.2,3.1,3,3,3.1,3.2,3.4,3.4,3.4,3.3,3.2,3.2,3.5,4,4.5,4.8,4.8,4.8,5,5.5,6.1,6.7,7.2,7.7,8,8.2,8.3,8.3,8.5,8.8,9.2,9.5,9.4,9.2,8.9,8.6,8.3,8.1,8.3,8.8,9.6,10.6,11.4,11.8,11.9,11.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.4,0.6,0.8,1,1.2,1.5,1.6,1.7,1.8,1.9,2.2,2.4,2.8,3.2,3.7,4.3,5,5.6,6,6,5.8,5.4,5,4.6,4.1,3.5,2.9,2.3,1.8,1.4,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.3,0.3,0.3,0.3,0.5,0.7,1.1,1.6,2.2,2.8,3.1,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3,3.1,3.2,3.3,3.4,3.4,3.3,3.2,3.3,3.7,4.4,5.1,5.5,5.6,5.6,5.8,6.4,7.1,7.7,8.1,8.2,8.3,8.3,8.3,8.4,8.7,9.1,9.6,9.8,9.9,9.7,9.5,9.3,9,8.9,9,9.5,10.4,11.4,12.2,12.5,12.3,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.6,0.9,1.2,1.6,2,2.3,2.7,3,3.4,3.6,3.9,4.2,4.5,4.9,5.4,6,6.8,7.6,8.5,9.2,9.5,9.3,8.9,8.3,7.6,6.9,6.2,5.5,4.9,4.3,3.7,3,2.4,1.9,1.5,1.3,1,0.8,0.7,0.6,0.5,0.5,0.5,0.6,0.8,0.9,1.1,1.2,1.2,1.2,1.3,1.5,1.8,2.3,2.8,3.2,3.5,3.5,3.5,3.5,3.5,3.4,3.3,3.2,3.2,3.2,3.3,3.4,3.5,3.4,3.4,3.4,3.5,4,4.7,5.5,6,6.3,6.4,6.7,7.2,7.8,8.2,8.3,8.2,8.2,8.3,8.5,8.7,9.1,9.5,9.8,9.9,9.9,9.8,9.8,9.8,9.9,10,10.2,10.6,11.2,12,12.5,12.6,12.2,11.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.3,1.7,2.2,2.7,3.3,3.9,4.4,4.8,5.3,5.8,6.3,6.8,7.3,7.8,8.3,8.7,9.1,9.7,10.4,11.2,11.9,12.3,12.4,12.2,11.6,10.9,10,9.2,8.4,7.8,7.4,7,6.4,5.7,4.9,4.2,3.6,3.1,2.7,2.3,2,1.8,1.8,1.8,1.9,2.1,2.4,2.7,3,3.1,3.1,2.9,2.7,2.7,2.7,2.9,3.2,3.5,3.6,3.6,3.7,3.9,3.9,3.8,3.6,3.5,3.4,3.4,3.4,3.5,3.6,3.6,3.7,3.8,4,4.4,5.1,5.8,6.4,6.7,7,7.3,7.7,8.1,8.2,8.1,8,8.1,8.4,8.7,9.2,9.6,9.9,10,9.9,9.7,9.6,9.8,10.3,10.9,11.4,11.7,11.9,12.2,12.4,12.4,12.1,11.7,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,1.2,2.3,3.5,4.6,5.5,6.4,7.2,7.8,8.3,8.7,9.2,9.8,10.3,10.9,11.5,12,12.3,12.4,12.5,12.7,13.1,13.5,13.9,14,14.1,13.9,13.5,12.7,11.8,10.9,10.2,9.9,9.7,9.7,9.5,9.1,8.4,7.7,6.9,6.1,5.4,4.8,4.5,4.4,4.5,4.6,4.7,5,5.3,5.6,5.8,5.9,5.7,5.3,4.8,4.3,3.8,3.6,3.5,3.5,3.6,3.7,3.9,4.1,4.2,4.1,3.9,3.7,3.5,3.5,3.5,3.6,3.8,3.9,4.2,4.5,4.8,5.4,6.1,6.8,7.4,7.8,8,8.1,8.2,8.3,8.3,8.1,8.1,8.2,8.5,9,9.6,10,10.2,10.2,10,9.7,9.5,9.6,10.3,11.3,12.2,12.7,12.7,12.6,12.3,11.9,11.4,11.1,10.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.3,4.3,6.6,8.6,10.2,11.3,12,12.5,12.9,13.2,13.6,14,14.4,14.7,14.9,15,14.9,14.6,14.4,14.2,14.2,14.3,14.5,14.8,14.9,14.9,14.5,13.9,13,12.2,11.7,11.4,11.4,11.6,11.8,11.8,11.6,11,10.1,9.1,8.3,7.8,7.6,7.7,7.9,8,8.1,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.5,6.6,5.6,4.7,4.2,3.9,3.7,3.8,3.9,4.1,4.2,4.1,3.9,3.8,3.7,3.8,3.9,4.1,4.3,4.6,5,5.5,6.2,7.1,8,8.9,9.4,9.6,9.4,9.1,8.9,8.9,8.9,8.8,8.8,8.9,9.1,9.6,10.1,10.4,10.4,10.3,10,9.6,9.4,9.4,10,11,11.9,12.3,12.3,12,11.7,11.3,10.9,10.7,10.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.1,9.2,12,13.9,15.1,15.7,16.1,16.3,16.6,16.8,17.1,17.2,17.1,16.8,16.4,15.9,15.5,15.1,14.8,14.6,14.6,14.8,15.1,15.3,15.3,15,14.4,13.7,13.1,12.7,12.4,12.4,12.6,13,13.2,13.3,12.8,12,11.1,10.3,10,10,10.2,10.3,10.3,10.2,10.3,10.5,10.7,10.8,10.9,11,10.9,10.4,9.4,8.1,6.9,5.9,5.2,4.8,4.6,4.6,4.7,4.7,4.5,4.3,4.2,4.2,4.5,4.8,5.1,5.4,5.7,6.2,6.9,7.7,8.7,9.7,10.5,11,11,10.6,10,9.8,9.8,9.9,9.9,9.9,9.9,10.1,10.4,10.7,10.7,10.5,10.1,9.7,9.5,9.3,9.4,9.8,10.4,11,11.3,11.2,11.1,11,10.9,10.8,10.7,10.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.8,3.7,6.6,10,13.1,15.3,16.5,17.2,17.6,17.9,18.3,18.5,18.7,18.7,18.4,17.9,17.2,16.5,16,15.6,15.4,15.2,15.2,15.3,15.6,15.7,15.4,15,14.5,14.1,13.7,13.5,13.3,13.3,13.4,13.7,14,14,13.7,13,12.2,11.5,11.3,11.4,11.5,11.3,11,10.8,10.7,11,11.3,11.7,12.2,12.7,12.9,12.8,12.2,11.1,9.8,8.7,7.8,7.2,6.9,6.8,6.8,6.6,6.1,5.6,5.4,5.5,5.8,6.2,6.5,6.7,6.9,7.4,8.1,8.9,9.8,10.5,11.2,11.5,11.4,10.9,10.4,10.3,10.5,10.8,10.9,10.9,10.9,11,11.2,11.1,10.9,10.4,9.9,9.6,9.4,9.4,9.5,9.9,10.3,10.6,10.6,10.6,10.6,10.6,10.8,11,11.1,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.1,5.8,9.1,12.4,14.9,16.4,17.3,17.9,18.4,19,19.3,19.4,19.4,19.1,18.6,17.9,17.3,16.9,16.6,16.4,16.2,16.1,16.3,16.4,16.4,15.9,15.3,14.9,14.6,14.5,14.5,14.5,14.4,14.4,14.4,14.6,14.6,14.4,13.8,13.1,12.5,12.3,12.3,12.3,12,11.6,11.3,11.3,11.5,11.8,12.3,12.9,13.6,14.1,14.3,14,13.3,12.4,11.5,10.8,10.3,10,10,9.9,9.6,9,8.2,7.7,7.5,7.7,7.9,7.9,7.9,7.9,8.3,9,9.8,10.4,10.9,11.3,11.4,11.2,10.9,10.6,10.6,10.8,11.1,11.3,11.4,11.5,11.6,11.6,11.3,10.9,10.3,9.8,9.6,9.5,9.6,9.8,10.2,10.4,10.5,10.4,10.3,10.3,10.5,10.9,11.3,11.7,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,1,2.4,4.8,8,11.4,14.3,16.1,17.1,17.8,18.4,19,19.2,19.3,19.3,19,18.7,18.3,18,17.7,17.5,17.2,17.1,17,17.2,17.3,17.2,16.6,15.9,15.4,15.3,15.5,15.7,15.7,15.5,15.1,14.9,14.7,14.6,14.4,14,13.5,13.1,13.1,13.1,13.1,12.9,12.7,12.7,12.9,13,13.2,13.5,14,14.6,15,15,14.6,14.2,13.6,13.1,12.7,12.5,12.3,12.3,12.3,12.1,11.7,11.1,10.4,9.8,9.3,9.1,8.9,8.8,8.9,9.3,9.9,10.5,10.9,11.1,11.2,11.2,11.1,11,10.9,10.9,11.1,11.3,11.4,11.6,11.7,11.8,11.7,11.5,11,10.5,10.1,9.9,9.9,10,10.2,10.5,10.6,10.5,10.3,10.2,10.2,10.6,11.1,11.6,12.1,12.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.8,2,4.1,7,10.5,13.7,15.9,17.1,17.7,18.2,18.6,18.9,18.9,18.8,18.6,18.3,18,17.8,17.7,17.6,17.4,17.3,17.4,17.6,17.7,17.5,17,16.3,15.9,15.8,16,16.2,16.1,15.7,15.2,14.8,14.4,14.2,13.9,13.6,13.3,13.3,13.5,13.7,13.7,13.7,13.8,14.2,14.7,15.1,15.3,15.5,15.8,16,15.8,15.3,14.7,14.2,13.9,13.8,13.6,13.6,13.6,13.5,13.5,13.4,13.3,12.9,12.2,11.3,10.3,9.5,9.2,9.4,9.9,10.6,11.2,11.6,11.6,11.4,11.3,11.3,11.3,11.3,11.3,11.3,11.4,11.4,11.5,11.6,11.7,11.7,11.8,11.7,11.4,11.1,10.7,10.6,10.5,10.6,10.7,10.8,10.8,10.7,10.6,10.4,10.5,10.8,11.4,11.9,12.3,12.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.2,9.7,13.2,15.8,17.2,17.8,18.2,18.4,18.6,18.6,18.5,18.2,17.8,17.5,17.3,17.2,17.1,17.1,17.2,17.4,17.5,17.6,17.4,17,16.6,16.2,16,16,16,15.8,15.5,15,14.6,14.2,13.9,13.6,13.4,13.3,13.6,13.9,14.2,14.3,14.3,14.5,15.2,15.9,16.4,16.8,16.9,17.1,17,16.6,15.7,14.8,14.4,14.3,14.5,14.6,14.6,14.6,14.5,14.4,14.2,14.1,13.8,13.1,12,10.8,9.8,9.5,9.9,10.8,11.8,12.5,12.8,12.5,12.1,11.7,11.6,11.7,11.8,11.9,11.9,11.8,11.7,11.6,11.5,11.5,11.6,11.8,12,12,11.8,11.6,11.4,11.3,11.2,11.2,11.3,11.3,11.3,11.2,11.1,11.2,11.4,11.9,12.3,12.7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3,5.7,9.3,13,16,17.6,18.2,18.4,18.4,18.4,18.3,18.1,17.8,17.4,17.2,17,16.9,16.9,16.9,17,17.1,17.2,17.3,17.4,17.3,17.1,16.8,16.4,16.1,15.9,15.5,15.1,14.7,14.4,14.2,14,13.7,13.6,13.7,14,14.4,14.7,14.8,14.8,15,15.5,16.1,16.7,17,17.3,17.4,17.4,17,16.2,15.4,15,15,15.4,15.7,15.8,15.7,15.6,15.3,15.1,14.9,14.6,13.9,12.8,11.5,10.5,10.3,10.7,11.6,12.4,13.1,13.4,13.3,13,12.5,12.2,12,12,12.2,12.2,12.1,11.9,11.7,11.5,11.4,11.5,11.8,12.2,12.4,12.4,12.2,12,11.9,11.8,11.8,11.8,12,12.1,12,12,12,12.2,12.5,12.9,13.1,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.3,13.2,16.2,18,18.5,18.5,18.3,18.1,17.8,17.6,17.4,17.3,17.3,17.2,17.1,17,16.8,16.8,16.8,17,17.3,17.6,17.8,17.6,17.3,16.8,16.4,16,15.5,14.9,14.4,14.2,14.1,14.1,14,14,14.2,14.6,15,15.3,15.4,15.3,15.3,15.5,15.9,16.2,16.6,17,17.2,17.3,17.1,16.5,15.9,15.5,15.5,15.8,16.2,16.5,16.4,16.2,16,15.8,15.7,15.4,14.8,13.8,12.7,11.8,11.4,11.7,12.2,12.8,13.3,13.8,14.1,14.1,13.6,13,12.3,12.1,12.1,12.1,12.1,11.9,11.6,11.4,11.3,11.5,11.8,12.2,12.4,12.5,12.5,12.4,12.3,12.2,12.2,12.2,12.4,12.6,12.7,12.7,12.7,12.9,13.1,13.3,13.3,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.6,3.4,6.2,9.8,13.5,16.4,18,18.5,18.4,18.1,17.7,17.4,17.3,17.4,17.6,17.6,17.5,17.3,17,16.7,16.5,16.5,16.7,17.1,17.6,17.7,17.6,17.2,16.8,16.4,15.9,15.4,14.8,14.4,14.2,14.2,14.3,14.5,14.7,15,15.5,15.9,16.1,16,15.8,15.7,15.6,15.7,16,16.4,16.7,17,17,16.9,16.6,16.1,15.5,15.3,15.6,16.1,16.5,16.6,16.5,16.4,16.2,16.1,16,15.6,14.9,14,13.2,12.7,12.7,12.8,13.1,13.6,14.3,15,15.1,14.7,13.8,12.9,12.3,12.1,12,12,11.8,11.6,11.5,11.5,11.7,11.9,12,12.2,12.3,12.4,12.5,12.5,12.5,12.4,12.4,12.6,12.9,13.1,13.2,13.3,13.5,13.6,13.5,13.4,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.3,2.4,4.2,7.1,10.7,14.2,16.7,18.1,18.5,18.3,18,17.6,17.4,17.5,17.9,18.2,18.3,17.9,17.4,16.9,16.4,16.1,16,16.2,16.5,16.8,16.9,16.8,16.6,16.3,15.9,15.6,15.2,14.9,14.7,14.6,14.6,14.8,15.1,15.6,16.2,16.7,16.9,16.9,16.7,16.4,16.1,16,16,16.3,16.6,17,17.2,17.2,17,16.6,16.1,15.6,15.3,15.5,16.2,16.9,17.1,17,16.8,16.5,16.4,16.4,16.2,15.8,15.1,14.4,13.9,13.6,13.4,13.5,13.9,14.7,15.4,15.7,15.3,14.4,13.5,12.9,12.7,12.5,12.3,12,11.9,11.9,11.9,11.9,11.9,12,12.1,12.2,12.4,12.5,12.7,12.7,12.7,12.7,12.9,13.2,13.5,13.7,13.8,13.9,13.9,13.7,13.4,13.3,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.3,0.7,1.3,2.2,3.5,5.6,8.7,12.2,15.5,17.7,18.8,19.1,18.8,18.2,17.8,17.7,18.1,18.6,19.1,19,18.4,17.7,17.1,16.6,16.2,16.1,16,16,16.1,16.1,16.1,16.1,16,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.5,15.9,16.5,17.1,17.6,17.6,17.3,16.9,16.6,16.5,16.6,16.7,17.1,17.5,17.8,18,18,17.8,17.4,17,16.6,16.4,16.6,17.4,18.1,18.3,18,17.5,17,16.7,16.6,16.5,16.1,15.6,15.1,14.7,14.4,14.1,13.9,14.1,14.7,15.4,15.7,15.4,14.7,14.1,13.8,13.6,13.4,13,12.6,12.3,12.3,12.3,12.2,12.2,12.2,12.4,12.5,12.6,12.7,12.9,13.1,13.1,13.1,13.2,13.4,13.7,13.9,13.9,13.9,13.8,13.6,13.4,13.3,0,0,0,0,0,0,0,0,0.1,0.3,0.4,0.5,0.6,0.8,1.3,2.1,3.3,5,7.5,10.8,14.3,17.3,19.3,20.3,20.5,19.9,19.1,18.4,18.2,18.6,19.1,19.5,19.4,18.8,18.1,17.6,17.3,17.2,16.9,16.5,16.1,16,16,16.3,16.4,16.5,16.4,16.3,16.5,16.6,16.6,16.4,16.1,16.1,16.4,17,17.7,18.1,17.9,17.5,17,16.8,16.8,17,17.4,17.9,18.5,19,19.3,19.5,19.4,19.2,18.8,18.3,18,18.2,18.9,19.5,19.7,19.2,18.5,17.8,17.3,17,16.6,16.2,15.7,15.4,15.1,14.9,14.6,14.3,14.2,14.5,15,15.2,15,14.6,14.3,14.2,14.1,13.9,13.4,12.9,12.7,12.7,12.7,12.6,12.5,12.7,13,13.1,13.1,13.1,13.3,13.5,13.6,13.6,13.6,13.7,13.8,13.8,13.8,13.8,13.8,13.7,13.5,13.4,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.3,1.6,2.3,3.4,5,7.2,10.1,13.4,16.7,19.4,21.1,22,22,21.3,20.3,19.3,18.8,18.8,19.2,19.5,19.4,18.9,18.4,18.1,18.1,18.1,17.7,17.1,16.8,16.8,17,17.3,17.5,17.5,17.3,17.2,17.1,17.1,17,16.8,16.5,16.4,16.7,17.4,18.2,18.7,18.7,18.1,17.5,17.1,17.1,17.3,17.9,18.5,19.2,19.8,20.3,20.7,20.8,20.7,20.1,19.5,19.1,19.2,19.8,20.3,20.5,20.1,19.5,18.8,18.1,17.6,17.1,16.6,16,15.6,15.4,15.2,14.9,14.6,14.4,14.4,14.5,14.6,14.5,14.3,14.2,14.2,14.1,13.9,13.5,13.2,13.1,13.1,13.1,12.9,12.8,13,13.3,13.5,13.6,13.7,13.9,14.1,14.2,14.2,14.1,14,14,13.9,13.8,13.9,13.9,13.8,13.7,13.6,0,0,0,0,0,0,0.1,0.2,0.4,0.9,1.5,2.2,2.7,3.4,4.4,5.9,7.9,10.4,13.4,16.4,19.2,21.2,22.5,23,22.9,22.1,20.9,19.9,19.1,18.9,19,19.2,19.2,19,18.7,18.6,18.6,18.5,18.2,17.9,17.8,18,18.4,18.5,18.6,18.5,18.2,17.9,17.6,17.2,17,16.8,16.7,16.9,17.3,18.1,19,19.7,19.7,19.1,18.2,17.6,17.4,17.6,18.3,19.1,19.7,20.3,20.7,21,21.1,21,20.5,19.9,19.6,19.8,20.3,20.7,20.8,20.6,20.1,19.4,18.9,18.4,17.9,17.2,16.6,16.1,15.8,15.6,15.4,15.2,14.9,14.7,14.6,14.6,14.5,14.4,14.3,14.2,14,13.8,13.6,13.5,13.6,13.6,13.5,13.3,13.1,13.2,13.5,13.8,14,14.3,14.7,14.9,14.8,14.6,14.5,14.4,14.2,14.1,14.1,14.1,14.1,14,13.9,13.9,0,0,0,0,0,0.1,0.2,0.5,1.1,2.1,3.4,4.6,5.8,7.1,8.5,10.2,12.2,14.4,16.9,19.3,21.1,22.4,23,23.1,22.8,22,21.1,20.2,19.5,19.1,19.1,19.2,19.2,19.1,18.9,18.8,18.7,18.7,18.6,18.6,18.8,19.1,19.3,19.3,19.2,19.2,19.1,18.7,18.2,17.6,17.3,17.3,17.5,17.8,18.4,19.1,19.9,20.4,20.4,19.7,18.7,18,17.8,18.2,19,19.8,20.3,20.6,20.7,20.8,20.8,20.6,20.3,20.1,20.1,20.4,20.6,20.8,20.7,20.4,19.9,19.4,19,18.7,18.3,17.7,17,16.5,16.3,16.1,16,15.9,15.7,15.5,15.4,15.2,15,14.8,14.5,14.3,14,13.8,13.8,13.9,14,14.1,14,13.7,13.5,13.5,13.8,14.1,14.5,14.9,15.2,15.3,15.1,14.9,14.7,14.6,14.6,14.6,14.6,14.6,14.5,14.4,14.2,14.3,0,0,0,0,0,0.1,0.4,1.1,2.4,4.4,6.7,9,10.8,12.5,13.9,15.3,16.8,18.3,19.8,21.2,22.1,22.7,22.8,22.7,22.4,21.8,21.2,20.6,20.1,19.7,19.6,19.5,19.4,19.2,18.9,18.8,18.7,18.8,19,19.3,19.6,19.8,19.7,19.5,19.3,19.5,19.7,19.6,19.2,18.7,18.4,18.4,18.6,18.9,19.3,19.9,20.4,20.7,20.6,20.1,19.3,18.8,18.7,19.2,19.9,20.6,21,21.1,21,20.9,20.7,20.5,20.5,20.5,20.7,20.9,20.8,20.6,20.3,19.8,19.3,18.9,18.7,18.5,18.2,17.8,17.2,16.9,16.7,16.6,16.6,16.5,16.4,16.3,16.1,15.8,15.4,15,14.6,14.3,14.1,13.9,14,14.2,14.4,14.4,14.3,14.1,13.8,13.8,14,14.2,14.6,14.9,15.2,15.2,15,14.8,14.7,14.8,15,15.2,15.3,15.3,15.1,15,14.8,14.9,0,0,0,0,0,0.2,0.6,1.8,4.1,7.3,10.8,13.9,16.2,17.7,18.8,19.6,20.3,21,21.7,22.2,22.5,22.7,22.7,22.6,22.3,21.9,21.5,21.1,20.8,20.6,20.5,20.3,19.9,19.5,19,18.7,18.7,19,19.4,19.9,20.1,20.1,19.8,19.4,19.3,19.5,20,20.3,20.3,20.1,19.9,19.6,19.5,19.5,19.8,20.2,20.6,20.9,20.9,20.7,20.3,20,20.1,20.4,20.9,21.4,21.6,21.7,21.6,21.4,21.2,21.1,21.1,21.2,21.2,21.2,20.9,20.5,20,19.5,19.1,18.7,18.5,18.3,18,17.7,17.4,17.2,17.1,17,16.9,16.7,16.5,16.4,16.2,15.9,15.5,15,14.7,14.5,14.3,14.2,14.2,14.3,14.5,14.6,14.5,14.3,14.1,14,14,14.1,14.4,14.6,14.9,15,14.9,14.8,14.7,14.9,15.2,15.6,15.9,15.9,15.8,15.7,15.5,15.4,0,0,0,0,0,0.2,0.8,2.3,5.1,9.1,13.5,17.2,19.8,21.1,21.7,22,22.3,22.5,22.6,22.7,22.8,22.9,22.9,22.8,22.6,22.2,21.7,21.4,21.2,21.2,21.2,21,20.6,20,19.4,19,18.9,19.2,19.6,20.1,20.3,20.2,19.8,19.4,19.3,19.7,20.4,21.2,21.6,21.7,21.3,20.7,20.3,20.1,20.2,20.5,20.8,21,21.1,21.1,21,20.9,21.1,21.3,21.6,21.9,21.9,22,21.9,21.9,21.9,21.9,22,22,21.8,21.5,21.2,20.8,20.3,19.8,19.4,19,18.6,18.3,18.1,17.9,17.8,17.7,17.6,17.4,17,16.6,16.3,16.1,16,15.8,15.5,15.1,14.9,14.8,14.6,14.5,14.4,14.4,14.6,14.7,14.8,14.7,14.5,14.3,14.1,14,14.1,14.3,14.6,14.9,14.9,14.8,14.8,14.9,15.3,15.8,16.2,16.4,16.4,16.3,16.2,16,0,0,0,0,0,0.2,0.7,2.1,4.8,9,13.8,18,20.8,22.3,22.9,23.1,23.2,23.3,23.3,23.2,23.2,23.3,23.2,23,22.6,22.1,21.6,21.3,21.2,21.3,21.4,21.3,20.9,20.4,19.9,19.5,19.3,19.5,19.8,20.1,20.4,20.3,20,19.7,19.7,20.2,21.1,22.1,22.8,23,22.7,22.2,21.8,21.6,21.5,21.3,21.1,20.9,20.9,21,21,21.1,21.3,21.6,21.9,22.1,22.1,22,22,22.1,22.2,22.4,22.5,22.5,22.4,22.2,21.9,21.5,20.9,20.4,19.9,19.5,19.1,18.7,18.5,18.4,18.4,18.2,18,17.6,17.1,16.7,16.3,16.1,15.9,15.8,15.6,15.4,15.2,15.1,15,14.8,14.6,14.6,14.7,14.9,15.1,15.2,15.1,14.8,14.5,14.2,14.2,14.3,14.6,14.9,15,15,14.9,15,15.3,15.7,16.2,16.6,16.8,16.9,16.8,16.7,0,0,0,0,0,0.1,0.5,1.5,3.7,7.5,12.3,16.9,20.2,22.2,23.1,23.6,23.8,23.7,23.6,23.5,23.5,23.5,23.3,22.9,22.3,21.6,21.1,20.9,20.9,21.1,21.1,21.1,20.9,20.6,20.3,20.1,19.9,19.9,20,20.2,20.4,20.4,20.3,20.2,20.4,21,21.8,22.7,23.4,23.8,24,24,24,23.9,23.4,22.6,21.7,21,20.7,20.6,20.7,20.9,21.2,21.7,22.1,22.3,22.3,22.2,22.1,22.1,22.2,22.3,22.5,22.6,22.6,22.6,22.3,21.9,21.4,20.9,20.5,20.1,19.7,19.5,19.2,18.9,18.7,18.5,18.1,17.8,17.4,17.1,16.8,16.5,16.3,16.1,15.9,15.7,15.6,15.5,15.4,15.1,14.9,14.7,14.8,15.1,15.3,15.4,15.3,15,14.8,14.5,14.4,14.5,14.7,14.9,15.1,15.1,15.1,15.2,15.4,15.7,16.2,16.6,16.9,17.1,17.2,17.2,0,0,0,0,0,0,0.3,0.9,2.6,5.9,10.5,15.4,19.4,22,23.4,24,24.2,24,23.8,23.5,23.4,23.2,22.9,22.4,21.8,21.1,20.8,20.7,20.8,20.9,20.9,20.9,20.8,20.8,20.7,20.6,20.5,20.4,20.4,20.3,20.4,20.5,20.7,21,21.4,21.9,22.3,22.7,23.2,23.8,24.5,25.1,25.4,25.4,24.8,23.7,22.5,21.4,20.8,20.6,20.8,21.1,21.5,22,22.4,22.7,22.7,22.5,22.3,22.2,22.2,22.2,22.2,22.3,22.4,22.4,22.2,22,21.7,21.3,20.9,20.6,20.4,20.1,19.7,19.2,18.9,18.6,18.3,18,17.9,17.8,17.5,17.2,16.8,16.5,16.3,16.2,16.1,16,15.7,15.3,15.1,15,15,15.2,15.3,15.3,15.2,15.2,15,14.9,14.8,14.8,14.9,15.1,15.2,15.3,15.3,15.4,15.6,15.9,16.2,16.4,16.7,17,17.2,17.3,0,0,0,0,0,0,0.1,0.6,1.9,4.6,9,14.3,19.1,22.3,23.9,24.6,24.6,24.3,23.8,23.3,23,22.8,22.6,22.1,21.6,21.2,21,20.9,21,21,21,20.9,20.9,21,21.1,21.2,21.1,21,20.8,20.7,20.7,21,21.5,22,22.4,22.6,22.5,22.5,22.7,23.3,24.1,24.9,25.3,25.2,24.7,23.7,22.6,21.7,21.2,21.1,21.4,21.7,21.9,22.2,22.5,22.7,22.7,22.7,22.6,22.5,22.4,22.3,22.2,22.1,22.1,22.1,22.1,22,21.8,21.5,21.2,20.8,20.6,20.3,19.8,19.4,19,18.8,18.7,18.5,18.4,18.3,18.1,17.7,17.3,17,16.8,16.6,16.5,16.2,15.8,15.5,15.3,15.2,15.3,15.3,15.2,15.2,15.3,15.4,15.4,15.4,15.3,15.2,15.3,15.4,15.5,15.5,15.6,15.7,15.9,16.2,16.3,16.3,16.4,16.6,16.9,17.2,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.8,13.3,18.7,22.5,24.4,25,24.9,24.5,24,23.4,23,22.7,22.6,22.3,22,21.7,21.6,21.6,21.4,21.2,21.1,21,21.2,21.5,21.8,22,21.9,21.6,21.3,21.2,21.4,21.8,22.4,22.9,23.1,22.9,22.6,22.2,22.2,22.6,23.3,23.8,24.1,24,23.4,22.7,21.9,21.4,21.3,21.4,21.7,22,22.1,22.2,22.2,22.3,22.5,22.6,22.7,22.7,22.6,22.4,22.2,22.1,22.2,22.3,22.5,22.5,22.3,21.8,21.3,20.8,20.6,20.4,20.1,19.8,19.6,19.5,19.4,19.2,19,18.7,18.4,18,17.7,17.5,17.3,17.1,16.8,16.3,15.9,15.6,15.4,15.5,15.5,15.5,15.4,15.3,15.4,15.5,15.7,15.7,15.7,15.6,15.6,15.7,15.8,15.8,15.9,16,16.3,16.5,16.5,16.4,16.4,16.6,16.8,17.2,0,0,0,0,0,0,0,0.2,0.9,2.7,6.3,11.6,17.2,21.5,23.9,24.8,24.9,24.6,24.2,23.8,23.4,23.1,22.9,22.7,22.5,22.3,22.2,22,21.8,21.5,21.4,21.4,21.7,22.1,22.6,22.8,22.7,22.2,21.8,21.7,22,22.5,22.9,23.2,23.2,22.9,22.4,22.1,22,22.1,22.4,22.6,22.6,22.3,21.9,21.5,21.1,21.1,21.3,21.5,21.7,21.9,22.1,22.2,22.2,22.2,22.3,22.4,22.6,22.6,22.5,22.3,22.2,22.2,22.4,22.7,23.1,23.2,22.9,22.2,21.5,21.1,20.9,20.8,20.6,20.4,20.3,20.3,20.2,20,19.6,19.2,18.7,18.3,18,17.8,17.6,17.4,17,16.5,16,15.7,15.6,15.7,15.8,15.7,15.5,15.4,15.5,15.6,15.7,15.9,15.9,15.9,15.9,15.9,16,16.1,16.1,16.2,16.4,16.5,16.6,16.6,16.6,16.7,16.9,17.2,0,0,0,0,0,0,0,0.1,0.6,1.9,4.8,9.4,14.8,19.5,22.5,24,24.5,24.5,24.3,24,23.7,23.4,23,22.8,22.6,22.6,22.5,22.3,22.1,21.9,21.9,22,22.3,22.8,23.2,23.5,23.3,22.8,22.4,22.2,22.4,22.8,23,23.1,23,22.7,22.3,22.1,22,22,22,21.8,21.6,21.3,21.1,21,21.1,21.4,21.7,21.9,22,22.1,22.2,22.4,22.5,22.4,22.3,22.3,22.5,22.5,22.5,22.3,22.2,22.2,22.5,22.9,23.3,23.5,23.3,22.8,22.1,21.7,21.5,21.4,21.3,21.1,21,20.8,20.7,20.5,20.1,19.6,19.1,18.6,18.2,18,17.8,17.6,17.2,16.8,16.4,16.1,16,16,16.1,16,15.8,15.7,15.7,15.7,15.8,16,16.1,16.2,16.3,16.4,16.4,16.4,16.3,16.3,16.4,16.5,16.7,16.7,16.7,16.7,16.9,17.1,0,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.5,12.5,17.5,21.2,23.3,24.2,24.4,24.2,23.8,23.5,23.2,22.9,22.7,22.7,22.7,22.7,22.6,22.5,22.4,22.5,22.7,23,23.5,23.9,24.1,24,23.6,23.2,22.8,22.8,23,23.1,23.1,22.9,22.7,22.6,22.5,22.5,22.5,22.3,22,21.6,21.3,21.2,21.3,21.7,22.2,22.6,22.7,22.6,22.5,22.5,22.7,22.7,22.6,22.5,22.6,22.7,22.8,22.9,22.7,22.5,22.3,22.3,22.5,22.9,23.2,23.3,23,22.6,22.2,22,21.9,21.8,21.6,21.4,21.2,21,20.8,20.5,20,19.4,18.8,18.5,18.2,18,17.8,17.6,17.3,17,16.8,16.6,16.5,16.5,16.4,16.3,16.1,16,15.9,16,16.2,16.5,16.7,16.9,17,16.9,16.9,16.7,16.7,16.7,16.7,16.8,16.8,16.8,16.9,17,17.3,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.9,10.6,15.8,20.1,22.9,24.1,24.3,24,23.6,23.2,23.1,23,23,23,23.1,23.2,23.1,23.1,23.1,23.3,23.6,24,24.4,24.7,24.8,24.7,24.4,23.9,23.5,23.3,23.3,23.4,23.4,23.3,23.3,23.3,23.4,23.6,23.5,23.3,22.8,22.3,21.9,21.7,21.8,22.3,22.9,23.3,23.3,23.1,22.8,22.7,22.6,22.7,22.7,22.8,23,23.3,23.5,23.5,23.3,22.9,22.5,22.2,22.2,22.4,22.7,23,23,22.9,22.6,22.3,22.1,22,21.9,21.7,21.5,21.3,21.1,20.7,20.1,19.5,19,18.6,18.3,18.3,18.2,18,17.8,17.6,17.4,17.3,17.2,17.1,16.9,16.7,16.5,16.3,16.2,16.2,16.4,16.7,17.1,17.3,17.4,17.5,17.4,17.4,17.2,17.1,17,16.9,17,17.1,17.3,17.7,18.1,0,0,0,0,0,0,0,0,0.1,0.6,1.9,4.6,8.8,14.1,18.9,22.2,24,24.5,24.3,23.9,23.6,23.5,23.5,23.6,23.6,23.7,23.7,23.8,24,24.2,24.4,24.6,24.9,25.2,25.3,25.2,25,24.8,24.4,24.1,23.9,23.9,24.1,24.2,24.2,24.3,24.4,24.7,24.8,24.8,24.4,23.8,23.1,22.6,22.2,22.3,22.6,23.1,23.3,23.3,23.1,22.9,22.6,22.5,22.6,22.9,23.2,23.5,23.8,24,23.9,23.7,23.2,22.8,22.5,22.3,22.3,22.5,22.8,23,23,22.8,22.5,22.2,22,21.9,21.9,21.8,21.6,21.3,20.8,20.1,19.5,18.9,18.6,18.5,18.6,18.6,18.5,18.2,17.9,17.7,17.8,17.8,17.8,17.6,17.3,17,16.7,16.6,16.6,16.6,16.8,17.1,17.4,17.6,17.8,17.9,17.8,17.7,17.5,17.2,17.1,17.2,17.5,17.9,18.5,19.2,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.4,7.1,12,17.1,21.1,23.6,24.7,25,24.8,24.5,24.2,24,24,24,24,24.2,24.6,25,25.3,25.4,25.5,25.5,25.5,25.5,25.4,25.2,25,24.7,24.5,24.4,24.5,24.8,25.1,25.3,25.5,25.6,25.7,25.6,25.3,24.8,24.1,23.5,23.1,22.8,22.8,23,23.1,23.2,23.1,22.9,22.8,22.7,22.7,22.9,23.2,23.6,23.9,24,24.1,24,23.8,23.5,23.2,23,22.8,22.7,22.7,22.9,23.1,23.1,23,22.7,22.4,22.2,22.1,22.2,22.1,21.9,21.5,20.8,20.1,19.5,19,18.8,18.7,18.8,18.9,18.7,18.4,18,17.8,17.9,18.1,18.2,18.1,17.9,17.6,17.4,17.2,17.1,17.1,17.1,17.2,17.3,17.5,17.8,18,18.1,17.9,17.7,17.5,17.3,17.4,17.7,18.2,18.9,19.8,0,0,0,0,0,0,0,0,0,0.2,0.8,2.2,5.1,9.4,14.4,19.1,22.5,24.5,25.4,25.5,25.2,24.7,24.3,24.1,24,24.2,24.5,25.1,25.6,25.8,25.8,25.7,25.5,25.6,25.6,25.6,25.5,25.2,24.9,24.7,24.6,24.8,25.1,25.5,25.9,26.1,26.2,26.2,25.8,25.2,24.5,24,23.8,23.7,23.7,23.8,23.9,23.8,23.6,23.4,23.1,23,22.9,23,23.2,23.5,23.8,23.9,24,24.1,24,23.9,23.8,23.7,23.6,23.5,23.4,23.4,23.4,23.5,23.4,23.2,22.8,22.6,22.4,22.4,22.5,22.4,22.2,21.7,21.1,20.5,19.9,19.5,19.2,19,19,18.9,18.6,18.3,17.9,17.8,17.8,18,18.2,18.4,18.4,18.3,18.1,17.9,17.7,17.6,17.5,17.4,17.3,17.4,17.7,18,18.1,18.1,17.9,17.7,17.6,17.5,17.7,18.1,18.6,19.4,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,3.1,6.3,10.7,15.6,19.9,23,24.9,25.6,25.6,25.1,24.6,24.3,24.2,24.4,24.8,25.2,25.6,25.7,25.6,25.4,25.4,25.6,25.9,26.1,26,25.7,25.3,25,24.9,25,25.3,25.7,26.1,26.3,26.4,26.3,25.9,25.3,24.6,24.2,24.1,24.2,24.4,24.6,24.9,24.9,24.6,24.1,23.8,23.6,23.4,23.4,23.5,23.7,23.9,24.1,24.3,24.4,24.5,24.4,24.3,24.2,24.1,24.1,24.1,24.1,24,23.8,23.6,23.2,22.9,22.6,22.5,22.4,22.4,22.4,22.2,21.9,21.5,21.1,20.7,20.3,19.8,19.5,19.3,19,18.7,18.4,18.1,17.9,18,18.1,18.4,18.6,18.8,18.8,18.6,18.4,18.1,17.9,17.7,17.5,17.4,17.4,17.6,17.9,18.2,18.3,18.2,18,17.8,17.8,17.8,18,18.3,18.7,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.3,6.5,10.8,15.5,19.7,22.8,24.7,25.4,25.4,25.1,24.8,24.7,24.8,25,25.3,25.4,25.5,25.5,25.5,25.8,26.1,26.4,26.6,26.5,26.3,26,25.7,25.5,25.5,25.6,25.9,26.1,26.4,26.6,26.6,26.3,25.7,25,24.5,24.4,24.4,24.4,24.6,24.9,25.1,25,24.7,24.4,24.2,24,23.8,23.8,24,24.2,24.5,24.8,25.1,25.2,25.1,24.8,24.7,24.6,24.6,24.5,24.4,24.2,23.8,23.4,23.1,22.9,22.7,22.4,22.2,22.1,22,21.9,21.9,21.8,21.6,21.3,20.9,20.4,20,19.7,19.5,19.3,19,18.7,18.5,18.5,18.6,18.9,19.1,19.2,19.2,18.9,18.5,18.1,17.8,17.7,17.6,17.5,17.5,17.7,18.1,18.4,18.6,18.5,18.3,18.2,18.2,18.1,18.1,18.2,18.4,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.4,3.2,6.2,10.3,14.9,19.2,22.6,24.6,25.4,25.5,25.4,25.2,25.1,25.2,25.3,25.4,25.5,25.8,26,26.3,26.7,26.9,27,27.1,27,26.8,26.5,26.2,26,26,26.1,26.4,26.7,26.9,27,26.8,26.2,25.5,24.8,24.4,24.2,24,24.2,24.5,24.7,24.8,24.8,24.7,24.5,24.3,24.1,24.1,24.3,24.5,24.8,25.2,25.5,25.6,25.6,25.4,25.1,25,24.8,24.7,24.5,24.1,23.6,23.2,23,22.8,22.7,22.4,22.1,21.9,21.7,21.7,21.7,21.7,21.7,21.5,21.2,20.8,20.4,20.1,19.9,19.8,19.7,19.5,19.3,19.2,19.3,19.4,19.6,19.6,19.5,19.1,18.6,18.2,17.9,17.8,17.8,17.9,18,18.2,18.4,18.7,18.9,18.9,18.8,18.8,18.8,18.7,18.6,18.6,18.7,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.9,10,14.7,19.1,22.5,24.4,25.2,25.3,25.3,25.2,25.3,25.4,25.5,25.8,26.1,26.4,26.7,27,27.2,27.4,27.5,27.5,27.3,27,26.6,26.4,26.4,26.5,26.8,27.1,27.3,27.4,27.2,26.7,26,25.2,24.6,24.2,23.9,23.9,24.1,24.4,24.6,24.7,24.7,24.6,24.4,24.3,24.3,24.5,24.7,24.9,25.2,25.5,25.7,25.8,25.7,25.5,25.3,25,24.7,24.4,24,23.6,23.3,23.2,23.1,23,22.7,22.4,22.1,21.9,21.7,21.6,21.6,21.6,21.5,21.3,21,20.7,20.4,20.2,20.1,20.1,20,19.9,19.7,19.6,19.7,19.8,19.9,19.8,19.4,19,18.6,18.4,18.4,18.5,18.6,18.8,19,19.1,19.3,19.4,19.4,19.3,19.4,19.4,19.3,19.2,19.2,19.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,2.9,5.9,10.1,14.8,19.1,22.2,23.9,24.7,25,25.2,25.4,25.6,25.8,26,26.2,26.5,26.8,27.1,27.3,27.5,27.7,27.7,27.5,27.1,26.8,26.7,26.8,27,27.2,27.5,27.6,27.6,27.4,27,26.4,25.7,25,24.4,24,23.9,24,24.3,24.6,24.7,24.8,24.7,24.6,24.6,24.8,24.9,25,25.1,25.3,25.5,25.7,25.8,25.9,25.8,25.5,25.1,24.7,24.4,24.1,23.9,23.8,23.7,23.6,23.4,23.1,22.8,22.6,22.3,22,21.7,21.5,21.5,21.5,21.4,21.3,21,20.7,20.5,20.4,20.3,20.2,20,19.8,19.7,19.8,20,20.2,20.2,19.9,19.5,19.3,19.1,19.1,19.3,19.6,19.8,20,20.1,20.1,20.1,20.1,20,19.9,19.9,19.8,19.9,20.3,21.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3.1,6,10.1,14.5,18.5,21.5,23.4,24.4,25,25.4,25.7,25.8,25.9,25.9,26.1,26.4,26.8,27.2,27.5,27.8,27.8,27.6,27.3,27.1,27.1,27.3,27.5,27.6,27.7,27.7,27.7,27.5,27.1,26.7,26.1,25.4,24.8,24.3,24.2,24.3,24.6,24.9,25.1,25.2,25.2,25.2,25.3,25.4,25.5,25.6,25.6,25.6,25.7,25.8,26,26,25.9,25.6,25.1,24.8,24.5,24.4,24.3,24.2,24.1,23.9,23.6,23.2,23,22.8,22.5,22.1,21.8,21.6,21.5,21.5,21.5,21.4,21.2,21,20.8,20.6,20.4,20.2,20,19.8,19.8,20,20.3,20.6,20.7,20.4,20,19.7,19.6,19.7,19.9,20.4,20.9,21.3,21.4,21.2,20.9,20.6,20.4,20.2,20.2,20.3,20.8,21.6,22.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.5,13.8,17.9,21,23,24.3,25,25.4,25.5,25.5,25.5,25.7,26,26.4,27,27.6,28,28.2,28,27.8,27.6,27.6,27.7,27.8,27.9,27.8,27.7,27.6,27.4,27.2,26.8,26.3,25.7,25.1,24.7,24.6,24.8,25.2,25.6,25.8,25.9,25.9,25.9,26,26.1,26.1,26.1,26.1,26.1,26,26,26.1,26.2,26,25.7,25.3,24.9,24.7,24.6,24.5,24.4,24.2,23.9,23.5,23.2,22.9,22.7,22.5,22.2,21.9,21.8,21.7,21.7,21.7,21.6,21.4,21.2,21.1,20.9,20.6,20.4,20.1,20,19.9,20.1,20.4,20.6,20.7,20.4,20.1,19.9,19.8,19.8,20.1,20.9,21.9,22.7,22.7,22.2,21.4,20.8,20.3,20.1,20.2,20.7,21.4,22.4,23.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,1.2,2.7,5.2,8.9,13.2,17.3,20.6,22.8,24.2,24.9,25.2,25.3,25.4,25.6,25.9,26.4,27,27.7,28.4,28.7,28.5,28.2,28,28,28,28.1,28.1,27.9,27.8,27.6,27.5,27.3,26.9,26.4,25.9,25.3,25,25.1,25.6,26.1,26.5,26.6,26.5,26.4,26.3,26.4,26.5,26.5,26.5,26.5,26.4,26.3,26.2,26.2,26.2,26.1,25.8,25.4,25.1,25,24.8,24.7,24.5,24.2,23.8,23.4,23.2,23,22.7,22.5,22.3,22.1,22.1,22.2,22.2,22.1,21.9,21.7,21.6,21.5,21.3,21,20.8,20.5,20.3,20.1,20.1,20.2,20.3,20.3,20.1,20,19.8,19.8,19.9,20.3,21.2,22.5,23.4,23.4,22.6,21.5,20.6,20.1,19.9,20.2,20.7,21.4,22.2,22.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.4,4.8,8.4,12.5,16.6,20.1,22.6,24.1,25,25.4,25.7,25.9,26.3,26.7,27.2,27.8,28.3,28.6,28.6,28.3,28.2,28.2,28.3,28.5,28.4,28.2,27.9,27.7,27.6,27.3,26.9,26.4,25.8,25.5,25.3,25.6,26.2,26.8,27.1,27.1,26.8,26.6,26.5,26.6,26.7,26.8,26.9,26.8,26.7,26.5,26.4,26.4,26.3,26.2,25.9,25.6,25.4,25.2,25.1,24.9,24.6,24.1,23.8,23.5,23.3,23.2,22.9,22.6,22.3,22.2,22.3,22.5,22.7,22.7,22.4,22.2,22,22,21.9,21.6,21.3,20.9,20.6,20.2,20,19.9,19.9,19.9,19.9,19.9,19.9,20,20.1,20.4,21.2,22.2,23,22.9,22.2,21.2,20.4,20,20,20.3,20.7,21,21.4,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.1,4.4,7.6,11.7,15.9,19.7,22.5,24.3,25.3,25.8,26.1,26.5,26.8,27.1,27.4,27.7,27.9,28,28,28,28.2,28.5,28.8,28.7,28.5,28.1,27.8,27.5,27.1,26.7,26.2,25.9,25.7,25.8,26.1,26.5,27,27.2,27.2,27,26.8,26.7,26.8,26.9,27.1,27.2,27.2,27.1,26.9,26.7,26.6,26.5,26.4,26.2,25.9,25.7,25.6,25.4,25.2,24.8,24.4,24,23.8,23.7,23.5,23.2,22.8,22.5,22.4,22.5,22.8,23.1,23.1,22.9,22.6,22.4,22.5,22.4,22.2,21.8,21.3,20.7,20.3,20,19.8,19.8,19.8,19.9,20,20.1,20.2,20.2,20.4,20.9,21.7,22.2,22.2,21.9,21.2,20.7,20.4,20.5,20.7,20.9,20.9,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.7,1.8,3.8,6.9,11,15.5,19.6,22.7,24.6,25.6,26.1,26.4,26.5,26.6,26.7,26.9,27.1,27.4,27.7,28.1,28.5,29,29.2,29.1,28.6,28.1,27.6,27.2,26.7,26.2,26,26,26.2,26.4,26.6,26.8,27,27.2,27.3,27.3,27.3,27.2,27.2,27.2,27.4,27.7,27.7,27.6,27.3,27,26.8,26.7,26.6,26.5,26.3,26.2,26,25.9,25.7,25.3,24.8,24.6,24.5,24.5,24.4,24.1,23.7,23.2,23,23.1,23.4,23.6,23.5,23.2,22.8,22.6,22.7,22.7,22.5,22.1,21.5,20.9,20.5,20.2,20,19.9,19.9,20.1,20.2,20.4,20.4,20.3,20.4,20.9,21.5,22,22.3,22.3,21.9,21.5,21.3,21.2,21.3,21.3,21.1,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.5,3.4,6.7,11,15.9,20.3,23.5,25.2,26,26.3,26.3,26.3,26.3,26.4,26.7,27.2,27.9,28.5,29.1,29.5,29.5,29.1,28.4,27.8,27.2,26.6,26.2,25.9,26,26.3,26.8,27.1,27.2,27.3,27.3,27.4,27.6,27.8,27.9,27.9,27.8,27.7,28,28.2,28.4,28.2,27.9,27.5,27.2,27.1,27,27,26.9,26.9,26.8,26.6,26.2,25.8,25.5,25.4,25.6,25.9,26.2,26.1,25.6,24.8,24.2,24,23.9,23.8,23.6,23.1,22.7,22.6,22.7,22.7,22.6,22.2,21.7,21.2,20.8,20.5,20.3,20.2,20.1,20.2,20.3,20.4,20.4,20.4,20.6,21.1,21.8,22.5,23,23.1,22.9,22.4,22,21.8,21.8,21.7,21.4,21.2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.7,7.3,12.1,17.4,21.7,24.5,25.8,26.2,26.3,26.3,26.5,26.7,27.2,27.9,28.5,29.1,29.4,29.4,29,28.4,27.8,27.2,26.7,26.3,26.1,26.2,26.6,27.1,27.6,27.8,27.8,27.7,27.7,27.8,28.1,28.4,28.5,28.5,28.3,28.3,28.4,28.7,28.8,28.8,28.5,28.1,27.9,27.7,27.6,27.5,27.5,27.5,27.4,27.2,26.9,26.6,26.5,26.7,27.2,27.9,28.4,28.4,27.8,26.8,25.7,24.8,24.2,23.8,23.3,22.9,22.6,22.6,22.7,22.7,22.6,22.3,22,21.6,21.3,21.1,20.9,20.6,20.5,20.4,20.3,20.3,20.4,20.5,20.9,21.4,22.1,22.9,23.5,23.7,23.4,22.8,22.4,22.2,22.1,22.1,21.8,21.5,21.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.9,4.5,8.7,14,19.2,23.1,25.2,26.1,26.4,26.5,26.8,27.3,27.9,28.7,29.2,29.4,29.2,28.7,28.2,27.6,27.2,26.8,26.6,26.6,26.7,27.1,27.6,28,28.3,28.3,28.2,28.1,28,28.1,28.4,28.6,28.8,28.8,28.7,28.7,28.8,29,29.2,29.2,29.1,28.8,28.6,28.3,28.1,28,28,28,28,27.9,27.8,27.8,27.9,28.2,28.7,29.4,29.9,30,29.6,28.6,27.3,25.9,24.7,23.8,23.3,22.9,22.7,22.7,22.8,22.8,22.7,22.5,22.3,22.1,22,21.8,21.6,21.4,21.2,21,20.8,20.6,20.5,20.7,21,21.5,22.1,22.8,23.4,23.5,23.3,22.7,22.3,22.3,22.3,22.4,22.2,21.9,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.7,10.4,15.7,20.5,23.8,25.5,26.3,26.6,27,27.5,28.2,28.8,29.1,29,28.6,28,27.6,27.3,27.1,27.1,27.2,27.4,27.7,28,28.4,28.6,28.7,28.5,28.4,28.3,28.3,28.4,28.6,28.7,28.8,28.8,28.9,28.9,29.1,29.3,29.5,29.6,29.6,29.5,29.3,29,28.8,28.5,28.4,28.4,28.5,28.8,29.1,29.3,29.4,29.6,29.8,30.2,30.6,30.8,30.5,29.9,28.8,27.4,25.9,24.7,23.9,23.3,23,22.9,22.9,22.9,22.8,22.8,22.8,22.7,22.5,22.4,22.2,22.1,22,21.8,21.4,21,20.8,20.8,20.9,21.3,21.8,22.4,22.9,23.1,22.9,22.5,22.3,22.3,22.4,22.5,22.4,22.2,21.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.3,6.8,11.5,16.6,20.9,23.9,25.5,26.4,27,27.5,28,28.4,28.6,28.4,28,27.7,27.5,27.4,27.6,27.8,28.1,28.4,28.6,28.8,28.8,28.8,28.8,28.7,28.6,28.6,28.7,28.9,29,29.1,29.1,29.1,29.1,29.3,29.4,29.6,29.7,29.8,29.9,29.9,29.9,29.7,29.5,29.2,29,28.9,29.2,29.7,30.4,30.9,31,31,30.9,31,31.1,31.2,31.1,30.7,30.1,29.1,27.7,26.3,25.1,24.1,23.5,23.1,23,23,23.2,23.4,23.5,23.4,23.1,22.8,22.6,22.5,22.4,22.2,21.9,21.5,21.1,20.9,21,21.2,21.6,22,22.4,22.6,22.6,22.5,22.3,22.3,22.4,22.5,22.5,22.3,22.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.6,1.6,3.7,7.1,11.6,16.2,20.2,23.2,25.2,26.4,27.2,27.8,28.2,28.3,28.1,27.9,27.6,27.6,27.7,28,28.4,28.9,29.2,29.4,29.4,29.3,29.1,29,29,29,29.1,29.3,29.5,29.6,29.6,29.5,29.5,29.5,29.6,29.7,29.8,29.8,29.8,29.9,30.1,30.3,30.4,30.3,30.2,30,30,30.3,30.9,31.6,32.2,32.5,32.4,32.2,32,31.8,31.6,31.3,31.1,30.9,30.4,29.5,28.2,26.8,25.4,24.2,23.6,23.3,23.4,23.7,24,24.2,24,23.5,23.1,22.9,22.8,22.7,22.6,22.4,22.1,21.8,21.6,21.4,21.4,21.6,21.8,22.1,22.3,22.5,22.5,22.5,22.5,22.5,22.5,22.6,22.6,22.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.6,1.6,3.5,6.5,10.4,14.7,18.6,21.9,24.3,26.1,27.2,28,28.3,28.2,28.1,27.9,27.8,27.9,28.2,28.7,29.3,29.7,29.9,29.9,29.7,29.5,29.3,29.3,29.4,29.6,29.8,30,30.1,30.1,30,29.9,29.8,29.8,29.8,29.9,30,30.1,30.3,30.6,31.1,31.6,31.9,31.9,31.9,31.9,32,32.4,32.9,33.3,33.5,33.4,33,32.5,32.2,31.8,31.5,31.3,31.3,31.1,30.8,29.9,28.5,26.8,25.3,24.2,23.8,23.9,24.2,24.5,24.5,24.3,23.8,23.4,23.2,23.1,23.2,23.4,23.4,23.4,23.2,22.8,22.5,22.2,22,21.9,22,22.2,22.4,22.6,22.7,22.7,22.7,22.7,22.8,23,23]"),ox={bounds:ex,columns:nx,rows:ix,heights:sx},{bounds:[Xl,Mu,yu,ql],columns:Vo,rows:Su,heights:xa}=ox,bu=[37.309805,44.895974],wu=1e3,Eu=1160;function rx(i){const[t,e]=i.origin,[n,s]=i.scale,o=(bu[0]-t)*n,r=(e-bu[1])*s;return(a,l,c)=>{const h=Math.hypot(a-o,l-r);if(h>=Eu)return c;const f=t+a/n,u=e-l/s;if(f<Xl||f>yu||u<Mu||u>ql)return c;const d=(f-Xl)/(yu-Xl)*(Vo-1),m=(ql-u)/(ql-Mu)*(Su-1),_=Math.min(Math.floor(d),Vo-2),g=Math.min(Math.floor(m),Su-2),p=g*Vo+_,x=ue.lerp(xa[p],xa[p+1],d-_),M=ue.lerp(xa[p+Vo],xa[p+Vo+1],d-_),v=Math.max(.16,ue.lerp(x,M,m-g));return h<=wu?v:ue.lerp(v,c,ue.smoothstep(h,wu,Eu))}}const Tu=["#b2a99a","#bbb1a1","#b8ae9e","#b7ab99","#aea394"],ax="#c4baaa",cx="#a39888",Au="#4b5351";function lx(i,t,e){const n=me(i,"Верхняя и нижняя набережные · подпорные стены",{surface:"stone"});for(const s of t.waterfront.sections){if(s.soft)continue;const o={section:s,upper:!0},r={section:s,upper:!1};for(const{a,b:l,span:c}of s.segments){const[h,f]=a,[u,d]=l,m=(f-d)/c,_=(u-h)/c,g=Math.ceil(c/1.25),p=(x,M,v=0,S=0)=>{const y=ue.lerp(h,u,x),w=ue.lerp(f,d,x);return[y+v*m,e.faceHeight(y,w,M)+S,w+v*_]};for(let x=0;x<g;x++){const M=x/g,v=(x+1)/g,[S,,y]=p((M+v)/2,o);if(t.wallOpening(S,y,s))continue;const w=p(M,r,0,-.12),b=p(v,r,0,-.12),E=p(M,o,0,.24),T=p(v,o,0,.24);if(E[1]-w[1]<.55||T[1]-b[1]<.55)continue;n.face(cx,w,b,T,E);const C=Math.max(1,Math.round((E[1]+T[1]-w[1]-b[1])/2/.54));for(let I=0;I<C;I++){const N=(I+.026)/C,F=(I+.976)/C,V=ft(w,E,N),H=ft(w,E,F),J=ft(b,T,N),et=ft(b,T,F),St=([mt,Ut,kt],[G,O,Y],rt)=>[ue.lerp(mt,G,rt)-m*.016,ue.lerp(Ut,O,rt),ue.lerp(kt,Y,rt)-_*.016];n.face(Tu[(x*11+I*7)%Tu.length],St(V,J,.009),St(V,J,.991),St(H,et,.991),St(H,et,.009))}const L=s.coping??.38;if(n.face(ax,E,T,p(v,o,L,.24),p(M,o,L,.24)),s.rail===!1)continue;const P=(I,N)=>p(I,o,L*.55,N);for(const I of[.43,1.18])n.beam(P(M,I),P(v,I),.038,Au);const R=Math.max(1,Math.round(c/g/.28));for(let I=0;I<R;I++){const N=ue.lerp(M,v,I/R);n.beam(P(N,.42),P(N,1.16),I===0?.045:.025,Au)}}}}n.finish()}const ho=[-287.6,-16.5],va=-.11,uo="#6c4934",xn="#ba986f",Jo="#a58b6c",f0=["#674430","#734d37","#7a5239","#6a4734","#815a41"],Ru=["#bd282d","#c63134","#c93636","#b9252d"];function Na([i,t]){return(e,n)=>[i+e*Math.cos(va)-n*Math.sin(va),t+e*Math.sin(va)+n*Math.cos(va)]}const hx=[[-3.32,-1.15],[1.8,-1.12],[3.48,0],[1.8,1.12],[-3.32,1.18]].map(i=>Na(ho)(...i));function ux(i,t){const e=new Zn(1,2),n=Sn(new jt({color:"white",flatShading:!0}),{surface:"foliage"}),s=new dn(e,n,t.length),o=new ye;t.forEach(({center:r,scale:a,color:l},c)=>{o.position.set(...r),o.scale.set(...a),o.rotation.y=c*.87,o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c,new Ht(l))}),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}function fx(i,t){const e=[[-3.32,.98,1.41],[-2.54,1.13,1.25],[-1.12,1.22,1.09],[.62,1.15,1.06],[2.05,.87,1.17],[3.14,.4,1.42],[3.5,0,1.58]];function n(l,c,h){const[f,u,d]=e[l];return t(f-(l===e.length-1?(1-h)*.6:0),c*u*(.73+.27*h),.22+(d-.22)*h)}for(const l of[-1,1])for(let c=1;c<e.length;c++){for(let h=0;h<7;h++){const f=h/7,u=(h+.96)/7;i.face(f0[(h+c*2)%f0.length],n(c-1,l,f),n(c,l,f),n(c,l,u),n(c-1,l,u))}if(i.beam(n(c-1,l,1),n(c,l,1),.069,xn),c<6){const[h,f,u]=e[c],d=c===1?3:4;for(let p=0;p<d;p++){const[x,M,v]=e[c-1],S=p/d,y=x+(h-x)*S,w=l*(M+(f-M)*S),b=v+(u-v)*S;i.beam(t(y,w,b),t(y,w,b+.34),.045,xn)}const[m,_,g]=e[c-1];i.beam(t(m,l*_,g+.34),t(h,l*f,u+.34),.057,xn)}}const[s,o,r]=e[0];i.face(uo,t(s,-o*.73,.22),t(s,o*.73,.22),t(s,o,r),t(s,-o,r));for(const l of[-.52,.52]){const c=s-.025,h=.3;for(const f of[l-h,l+h])i.beam(t(c,f,.4),t(c,f,1.18),.044,xn);for(const f of[.4,1.18])i.beam(t(c,l-h,f),t(c,l+h,f),.044,xn);for(let f=0;f<5;f++){const u=f/4;i.beam(t(c,l-h+2*h*u,.43),t(c,l-h,.43+.7*u),.021,xn),i.beam(t(c,l+h-2*h*u,.43),t(c,l+h,.43+.7*u),.021,xn),i.beam(t(c,l-h+2*h*u,1.14),t(c,l+h,1.14-.7*u),.021,xn),i.beam(t(c,l+h-2*h*u,1.14),t(c,l-h,1.14-.7*u),.021,xn)}}i.beam(t(s,-o,r+.34),t(s,o,r+.34),.06,xn);for(let l=0;l<=10;l++){const c=-o+2*o*l/10;i.beam(t(s,c,r),t(s,c,r+.34),.045,xn)}for(let l=1;l<e.length;l++){const[c,h]=e[l-1],[f,u]=e[l];i.face(l%2?"#8e694c":"#856149",t(c,-h,1),t(f,-u,1),t(f,u,1),t(c,h,1))}for(const l of[-1,1])for(const c of[-2.68,-1.87,-.88]){const h=l*(c<-2?1.04:1.12),f=Array.from({length:12},(u,d)=>{const m=d*Math.PI/6;return t(c+Math.cos(m)*.11,h,.66+Math.sin(m)*.1)});i.face("#d0b796",...f)}for(let l=0;l<5;l++){const c=.2+l*.16,h=1.73-l*.13;i.face(xn,t(-2.79,h,c),t(-2.13,h,c),t(-2.13,h-.13,c),t(-2.79,h-.13,c))}for(const l of[-2.81,-2.11])i.beam(t(l,1.77,.16),t(l,1.13,1.06),.075,uo);i.beam(t(2.55,0,1.38),t(4.88,0,2.98),.105,xn),i.beam(t(4.62,0,2.78),t(1.19,0,4.62),.026,Jo);const a=[];for(let l=0;l<14;l++){const c=l*Math.PI/7;a.push(t(-2.37,Math.cos(c)*.31,1.54+Math.sin(c)*.31))}i.beam(t(-2.37,0,1),t(-2.37,0,1.53),.082,uo),a.forEach((l,c)=>{i.beam(l,a[(c+1)%a.length],.036,xn),c%2===0&&i.beam(l,t(-2.37,0,1.54),.025,xn)})}function Cu(i,t,e,n){i.beam(t(e,0,.99),t(e,0,n),.087,uo);const s=[[1.56,n*.6,1.03],[n*.61,n*.76,.79],[n*.78,n*.9,.55]];for(const[o,r,a]of s){const l=(c,h)=>{const f=Math.sin(h*Math.PI)*(1-c*c);return t(e+.11+.25*f,c*a*(1-h*.2),o+h*(r-o))};for(let c=0;c<4;c++)for(let h=0;h<6;h++){const f=-1+h/3,u=f+1/3,d=c/4,m=(c+1)/4;i.face(Ru[h===0||h===5?0:(c+h)%Ru.length],l(f,d),l(u,d),l(u,m),l(f,m))}for(const c of[0,1])i.beam(l(-1.06,c),l(1.06,c),.037,uo);for(const c of[-1,1])i.beam(l(c,0),l(c,1),.023,Jo)}for(const o of[-1,1]){i.beam(t(e-.77,o*1.05,1.2),t(e,o*.26,n*.86),.022,Jo),i.beam(t(e+.53,o*1.05,1.2),t(e,o*.26,n*.86),.022,Jo);for(let r=1;r<10;r++){const a=r/11,l=o*(1.05-.79*a),c=1.2+(n*.86-1.2)*a;i.beam(t(e-.77*(1-a),l,c),t(e+.53*(1-a),l,c),.019,Jo)}}}function dx(i,t,e,n,s){for(let o=0;o<14;o++){const r=o*2.399,a=Math.cos(r),l=Math.sin(r),c=s*(.52+.38*(o*7%11/10)),h=t(e+a*.06,n+l*.06,.04),f=t(e+a*.36*s,n+l*.36*s,c*.68),u=t(e+a*.57*s,n+l*.57*s,c),d=["#8c8551","#a09461","#b2a173"][o%3];i.beam(h,f,.027,d),i.beam(f,u,.018,d)}}function Pu(i,t,e,n,s){const o=s?["#a34c43","#be8341","#567b56","#496d80","#c6944e"]:["#675644","#665540"];for(const r of[-.79,.79]){const a=s?"#3e684d":"#444a46";i.beam(t(e-.22,n+r,.025),t(e-.18,n+r,.78),.047,a),i.beam(t(e+.23,n+r,.025),t(e+.22,n+r,.43),.047,a),i.beam(t(e-.18,n+r,.43),t(e+.22,n+r,.43),.052,a)}for(let r=0;r<5;r++){const a=e-.19+r*.1;i.beam(t(a,n-.9,.44),t(a,n+.9,.44),.071,o[r%o.length]),i.beam(t(e-.19-r*.012,n-.9,.57+r*.072),t(e-.19-r*.012,n+.9,.57+r*.072),.067,o[(r+1)%o.length])}}function px(i,t){const e=new ge;e.name="Сквер у Алых парусов",i.add(e);const n=me(e,"Алые паруса · деревянный кораблик и клумбы",{surfaces:{wood:[uo,xn,...f0,"#8e694c","#856149"],ground:["#777653","#797358"]}}),s=Na(ho),o=t(...ho)+.15,r=(u,d,m)=>{const[_,g]=s(u,d);return[_,o+m,g]},a=(u,d)=>[[-u,-d],[u,-d],[u,d],[-u,d]].map(([m,_])=>s(m,_));n.shell(a(9,2.18),o-.08,o+.11,"#d7d5bd"),n.flat(a(8.87,2.05),o+.125,"#777653");for(let u=0;u<28;u++){const d=-4.2+u*.318,m=d+.307;n.face(["#628d86","#699892","#7ca39a","#5a8179"][u%4],r(d,-1.45,.145),r(m,-1.45,.145),r(m,1.45,.145),r(d,1.45,.145))}fx(n,r),Cu(n,r,-1.03,5.02),Cu(n,r,.98,4.6),Pu(n,r,9.27,.08,!0);for(const[u,d,m]of[[-7.25,-.95,1.06],[-6.45,.52,.72],[-5.35,1.11,.93],[4.35,1.4,.89],[5.48,-1.23,1.1],[6.8,.44,.99],[7.85,1.12,.83]])dx(n,r,u,d,m);const l=[],c=["#415c35","#536c3b","#66804c","#4d6540"],h=[[-344.6,-12.8,9.8,3.45],[-326.5,-13.4,10.5,3.4],[-310.6,-14.2,12.5,3.7],[-265.5,-20.3,15,4.7],[-247.5,-23.4,10.8,4.5]];for(const[u,[d,m,_,g]]of h.entries()){const p=Na([d,m]),x=t(d,m)+.14,M=(v,S)=>[[-v,-S],[v,-S],[v,S],[-v,S]].map(y=>p(...y));n.shell(M(_/2,g/2),x-.1,x+.12,"#d4d3c5"),n.flat(M(_/2-.12,g/2-.12),x+.13,"#797358");for(const v of[-.29,.02,.32]){const[S,y]=p(v*_,(u%2-.5)*.8),w=1.15+.51*((u+Math.round(v*10))%3+3)/3;for(let b=0;b<4;b++){const E=w*(.5-b*.095);l.push({center:[S,x+w*(.28+b*.19),y],scale:[E,w*.26,E*.9],color:c[(b+u)%c.length]})}}for(let v=0;v<7;v++){const[S,y]=p((v/6-.5)*_*.75,-.9);l.push({center:[S,x+.2,y],scale:[.42,.16,.42],color:v%3?"#804944":"#77673c"})}}for(const[u,d]of[[-301.1,-31],[-290.8,-31.7],[-273.1,-34.3],[-260.6,-35],[-247.5,-37.5]]){const m=Na([u,d]),_=t(u,d)+.15;Pu(n,(p,x,M)=>{const[v,S]=m(x,-p);return[v,_+M,S]},0,0,!1)}const f=[[-318,0,6.2],[-310.5,-.4,7.7],[-301,1.5,6.4],[-292.2,-.9,8.3],[-282.1,-1.8,7.6],[-272.4,.8,8.7],[-261,-1.2,6.8],[-249.6,.5,7.3]];for(const[u,[d,m,_]]of f.entries()){const g=t(d,m)+.05;n.beam([d,g,m],[d+.13,g+_*.69,m],.24,"#665949");for(let p=0;p<6;p++){const x=p*2.399,M=_*(p<4?.21:.14);l.push({center:[d+Math.cos(x)*M,g+_*(.6+p*.047),m+Math.sin(x)*M],scale:[_*.26,_*.27,_*.23],color:c[(u+p)%c.length]})}}ux(e,l),n.finish()}function Lu(i){const t=new Yc(i);return t.colorSpace=Ke,t.anisotropy=4,t}function Ie(i,{text:t,position:e,size:n,outward:s,color:o="#fff",background:r,weight:a=700,fontFamily:l="system-ui, sans-serif",letterSpacing:c="0px",lighting:h="spot",glowColor:f="#ffe4af",spill:u=!0}){if(typeof document>"u")return;const d=document.createElement("canvas");d.width=Math.max(160,Math.min(768,Math.round(n[0]*138))),d.height=Math.max(32,Math.round(d.width*n[1]/n[0]));const m=d.getContext("2d");if(!m)return;r&&(m.fillStyle=r,m.fillRect(0,0,d.width,d.height));const _=t.split(`
`);let g=d.height*.76/_.length;m.letterSpacing=c,m.font=`${a} ${g}px ${l}`,g*=Math.min(1,d.width*.93/Math.max(..._.map(S=>m.measureText(S).width)));function p(S,y,w=0){S.font=`${a} ${g}px ${l}`,S.letterSpacing=c,S.fillStyle=y,S.textBaseline="middle",S.textAlign="center",_.forEach((b,E)=>{S.fillText(b,w+d.width/2,w+d.height/2+(E-(_.length-1)/2)*g*1.13)})}p(m,o);const x=new Gn({map:Lu(d),alphaTest:.35,toneMapped:!1}),M=new oe(new mi(...n),x);M.name=t,M.position.set(...e),M.rotation.y=Math.atan2(...s);let v;if(h==="neon"||h==="backlit"){const S=h==="neon",y=Math.min(44,Math.round(d.width*.12)),w=document.createElement("canvas");w.width=d.width+2*y,w.height=d.height+2*y;const b=w.getContext("2d");b.shadowColor=f,b.shadowBlur=Math.min(y,Math.max(8,g*(S?.64:.27))),p(b,f,y),S&&(b.shadowBlur=0,b.globalAlpha=.18,p(b,"#fff1dd",y));const E=n[0]*w.width/d.width,T=n[1]*w.height/d.height;v=new oe(new mi(E,T),new Gn({map:Lu(w),transparent:!0,opacity:S?.94:.79,blending:_o,depthWrite:!1,toneMapped:!1})),v.position.z=.014,v.visible=!1,M.add(v)}if(h!=="unlit"&&u){const S=new ye;S.position.set(0,h==="spot"?n[1]*.64:0,h==="spot"?.75:.54),S.userData.nightLight={color:f,intensity:h==="neon"?3.8:2.2,range:h==="spot"?3.6:3.1},M.add(S)}return M.userData.setEvening=S=>{const y={spot:.82,backlit:.43,neon:.16,unlit:.5};x.color.setScalar(S?y[h]??.82:1),v&&(v.visible=S)},i.add(M),M}const qe="#f4f2e9",Ud="#e9e7df",Mn="#373e3e",Fa="#303637",fo="#b28c5e",Ec=["#d1b27a","#bc9c63","#c8a86f"],mx="#ecefe8",ls=[[-416.6,-27.8,-17.5],[-408.5,-25.4,-15.7],[-399.5,-23.2,-14.7],[-389.5,-22.8,-14.6],[-378.4,-23.1,-14.8]],Nd=[[-415.65,-26.9],[-407.4,-24.5],[-408.6,-16.85],[-416.1,-18.05]];function Fd(i,t,e,n){return[[i,e],[t,e],[t,n],[i,n]]}function Pi(i,t,e,n,s=24){return Array.from({length:s},(o,r)=>{const a=r*2*Math.PI/s;return[i+e*Math.cos(a),t+n*Math.sin(a)]})}function Fe([i,t],e){return[i,e,t]}function Ma(i,t){const e=ls.findIndex(([o])=>o>=i);if(e<0)return ls.at(-1)[t];const n=ls[Math.max(0,e-1)],s=ls[Math.max(0,e)];return n===s?n[t]:n[t]+(s[t]-n[t])*(i-n[0])/(s[0]-n[0])}function Pn(i,t,e,n,s,o,r,a){i.shell(Fd(t-s/2,t+s/2,n-r/2,n+r/2),e,e+o,a)}let ya;function Od({color:i,opacity:t,strength:e}){const n=Sn(new Gn({color:i,transparent:!0,opacity:t,depthWrite:!1,side:en}),{surface:"glass",strength:e});if(typeof document>"u")return n;if(!ya){const r={value:0},a=new zr().load("./art/waterfront-window-interior-atlas.webp",()=>{r.value=1});a.colorSpace=Ke,a.magFilter=Ye,a.minFilter=Or,ya={texture:a,ready:r}}const s=n.onBeforeCompile,o=n.customProgramCacheKey();return n.onBeforeCompile=function(r,a){s.call(this,r,a),r.uniforms.promenadeGlassAtlas={value:ya.texture},r.uniforms.promenadeGlassReady=ya.ready,r.uniforms.promenadeGlassStyle=ms.cartoonEnabled,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        varying vec2 vPromenadeGlassUv;
        varying vec2 vPromenadeGlassTangent;
        varying vec3 vPromenadeGlassWorld;
        varying vec2 vPromenadeGlassOrigin;`).replace("#include <project_vertex>",`#include <project_vertex>
        vPromenadeGlassUv = uv;
        vPromenadeGlassTangent = (modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xz;
        vPromenadeGlassWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vPromenadeGlassOrigin = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xz;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D promenadeGlassAtlas;
        uniform float promenadeGlassReady, promenadeGlassStyle;
        varying vec2 vPromenadeGlassUv;
        varying vec2 vPromenadeGlassTangent;
        varying vec3 vPromenadeGlassWorld;
        varying vec2 vPromenadeGlassOrigin;`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 paneEye = normalize(cameraPosition - vPromenadeGlassWorld);
        float paneSide = clamp(dot(paneEye.xz, normalize(vPromenadeGlassTangent)), -0.8, 0.8);
        vec2 paneUv = clamp(vPromenadeGlassUv, 0.0, 1.0);
        vec2 edge = min(paneUv, 1.0 - paneUv);
        float fade = smoothstep(0.0, 0.12, min(edge.x, edge.y));
        // The fourth cell is a hotel bedroom; these are public cafe spaces.
        float cell = mod(floor(abs(dot(vPromenadeGlassOrigin, vec2(0.73, 1.31)))), 3.0);
        vec2 offset = vec2(mod(cell, 2.0), floor(cell / 2.0)) * 0.5;
        vec2 artUv = clamp(0.05 + paneUv * 0.90 + vec2(-paneSide * 0.11, 0.0) * fade, 0.01, 0.99);
        vec3 reflection = texture2D(promenadeGlassAtlas, offset + 0.005 + artUv * 0.49).rgb;
        float painted = promenadeGlassReady * promenadeGlassStyle;
        diffuseColor.rgb = mix(diffuseColor.rgb, reflection, 0.12 * painted);
        float band = abs(paneUv.x + paneUv.y * 0.16 - 0.55 + paneSide * 0.65);
        float glint = (1.0 - smoothstep(0.025, 0.13, band)) * fade * painted;
        diffuseColor.rgb += vec3(0.72, 0.88, 1.0) * 0.42 * glint;
        diffuseColor.a = min(0.72, diffuseColor.a + 0.20 * glint);`)},n.customProgramCacheKey=()=>`${o}|promenade-glass-reflection-v1`,n}function gx(i,t){const e=new ge;e.name="Кофейня Qúeue",i.add(e);const n=me(e,"Павильон и кофейная стойка",{surfaces:{wood:["#b48558","#796c51"],foliage:["#737a51","#68774a","#83916b"]}}),s=Od({color:"#759497",opacity:.26,strength:.6}),o=Nd,r=t(-412.5,-21.7),a=r+.09,l=r+2.82;n.shell(o,r-.18,a,"#c9c5b5"),n.shell(o,l,r+3.12,qe),n.wall(o[3],o[0],a,l,qe);for(const[f,u]of[[0,[0,.13,.32,.54,.76,.95,1]],[1,[0,.14,.39,.64,.89,1]],[2,[0,.28,.43,.58,.7,.88,1]]]){const d=o[f],m=o[f+1],_=m[0]-d[0],g=m[1]-d[1],p=Math.hypot(_,g);for(let x=0;x<u.length-1;x++){const M=ft(d,m,u[x]),v=ft(d,m,u[x+1]);if(x===0||x===u.length-2){n.wall(M,v,a,l,qe);continue}const y=f===2&&x===4,w=f===2&&x===3,b=y||w?r+2.48:l;b<l&&n.wall(M,v,b,l,qe);const E=ft(M,v,.5),T=w?r+1.1:a;w&&(n.wall(M,v,a,T,"#a8a494"),n.beam([M[0],T,M[1]],[v[0],T,v[1]],.12,Fa));const C=new oe(new mi((u[x+1]-u[x])*p,b-T),s);C.position.set(E[0],(T+b)/2,E[1]),C.rotation.y=-Math.atan2(g,_),e.add(C);for(const L of[M,v])n.beam(Fe(L,a),Fe(L,b),.058,Fa);if(n.beam(Fe(M,b),Fe(v,b),.055,Fa),y){const L=ft(M,v,.82);n.beam(Fe(L,r+.92),Fe(L,r+1.3),.052,"#bab4a5")}}}const c=[[-415.28,-22.2],[-414.15,-22.2],[-413.68,-21.78],[-413.68,-19.92],[-412.9,-19.25],[-411.05,-19.25],[-410.8,-18.65],[-411.22,-18.34],[-414.68,-18.67],[-415.25,-19.13]];n.shell(c,a,r+1.07,"#e4decd"),n.shell(c,r+1.07,r+1.14,"#f1e9d7");const h=c.map(f=>ft([-413.5,-19.8],f,1.03));n.shell(h,r+2.08,r+2.15,"#eac58a"),n.shell(h,r+2.15,l,"#e3dbc9"),Pn(n,-413.54,r+1.14,-19.02,.86,.46,.45,"#343435"),Pn(n,-413.54,r+1.5,-18.79,.76,.08,.04,"#a7a199");for(const f of[-413.8,-413.62,-413.44,-413.26])n.shell(Pi(f,-18.99,.06,.06,10),r+1.6,r+1.76,"#b48558");Pn(n,-411.83,r+1.14,-18.85,.85,.34,.46,"#948273"),Pn(n,-411.83,r+1.48,-18.85,.85,.046,.46,"#bbb2a0");for(const[f,u]of[[-412.4,-21.8],[-410.8,-21.2]])n.shell(Pi(f,u,.21,.21,14),a,r+.47,"#e0d9c9"),n.shell(Pi(f,u,.32,.32,14),r+.47,r+.52,"#ece4d2");for(const f of[.19,.39,.59,.79]){const[u,d]=ft(o[0],o[1],f),m=t(u,d-.66);for(const _ of[-.24,.24])n.beam([u+_,m,d-.82],[u+_,m+.43,d-.82],.022,Mn),n.beam([u+_,m,d-.36],[u+_,m+.86,d-.28],.026,Mn),n.beam([u+_,m+.41,d-.82],[u+_,m+.41,d-.35],.032,Mn);for(let _=0;_<7;_++){const g=m+.45+_*.063,p=d-.34+_*.008;n.beam([u-.24,g,p],[u+.24,g,p],.015,Mn)}Pn(n,u,m+.41,d-.58,.48,.05,.42,Mn)}for(const f of[.04,.94]){const[u,d]=ft(o[0],o[1],f);_x(n,u,t(u,d-.64),d-.64)}n.finish()}function _x(i,t,e,n){i.shell(Pi(t,n,.26,.26,12),e,e+.5,"#e6e7dd"),i.flat(Pi(t,n,.22,.22,12),e+.505,"#6b6154"),i.beam([t,e+.5,n],[t+.04,e+1.39,n+.02],.035,"#796c51");for(let s=0;s<9;s++){const o=s*2.4,r=e+.79+s*.075,a=[t+.21*Math.cos(o),r+.11,n+.21*Math.sin(o)];i.beam([t,r,n],a,.024,"#737a51"),i.face(s%2?"#68774a":"#83916b",a,[t+.025,r,n+.06],[a[0]*.5+t*.5,r+.17,a[2]*.5+n*.5])}}function xx(i){const t=new ge;t.name="Ресторан «Море. Истории о еде»",i.add(t);const e=me(t,"Белая терраса у «Старинной Анапы»",{surfaces:{wood:[fo,...Ec],ground:["#6b6154"]}}),{front:[n,s],grade:o}=Ss,r=(u,d)=>{const[m,_]=ft(n,s,u/32.59);return[m-d*.197,_+d*.98]},a=(u,d,m,_)=>[r(u,m),r(d,m),r(d,_),r(u,_)],l=o+.15,c=l+2.94;e.shell(a(0,32.59,0,1.9),l-.34,l,"#b6aa94"),e.shell(a(0,32.59,7.1,9.15),l-.34,l,"#b6aa94");for(const[u,d]of[[0,7.3],[12.1,20.4],[24.9,32.59]])e.shell(a(u,d,1.9,7.1),l-.34,l,"#b6aa94");for(const[u,d,m,_]of[[0,32.59,0,1.9],[0,32.59,7.1,9.15],[0,7.3,1.9,7.1],[12.1,20.4,1.9,7.1],[24.9,32.59,1.9,7.1]])for(let g=u+.13;g<d;g+=.34)e.beam(Fe(r(g,m),c),Fe(r(g,_),c),.077,qe);for(let u=0;u<6;u++){const d=c-.02+u*.09;e.beam(Fe(r(0,0),d),Fe(r(32.59,0),d),.066,qe);for(const m of[0,32.59])e.beam(Fe(r(m,0),d),Fe(r(m,9.15),d),.066,qe)}for(const u of[.14,4.55,8.98,13.41,17.84,22.27,26.7,32.43])e.beam(Fe(r(u,.22),l),Fe(r(u,.22),c+.44),.165,qe);for(const u of[2.35,6.82,11.25,15.66,20.07,24.48,28.89,31.3]){e.shell(a(u-.76,u+.76,.16,.72),l,l+.65,qe);for(let _=1;_<=5;_++){const g=l+.1+_*.085;e.beam(Fe(r(u-.75,.153),g),Fe(r(u+.75,.153),g),.02,Ud)}e.flat(a(u-.7,u+.7,.2,.68),l+.655,"#788166");const[d,m]=r(u,1.34);Pn(e,d,l+.69,m,.82,.07,.7,"#ab8d63"),Pn(e,d,l,m,.08,.69,.08,"#545549")}const[h,f]=r(25.4,-.05);Ie(t,{text:"МОРЕ",position:[h,c+.2,f],size:[2.28,.41],outward:[.197,-.98],color:"#6e553a",lighting:"spot",glowColor:"#ffd089"});for(const u of[24.65,25.4,26.15])e.beam(Fe(r(u,-.018),c+.5),Fe(r(u,-.17),c+.44),.041,"#70664f");e.finish()}function vx(i,t,e,n,s){const o=new ge,r=new Gn({color:"#c9ba98",toneMapped:!1}),a=new vn(.043,8,6),l=4,c=16;let h;for(let f=0;f<=c;f++){const u=f/c,[d,m]=ft(e,n,u),_=s-.18*Math.sin(Math.PI*(u*l%1)),g=[d+.13,_,m];if(h&&t.beam(h,g,.015,"#353535"),h=g,f===c)continue;const p=new oe(a,r);p.position.set(d+.13,_-.052,m),f%4===2&&(p.userData.nightLight={color:"#ffe4ad",intensity:3.5,range:3.4}),o.add(p)}o.userData.setEvening=f=>r.color.set(f?"#fff0be":"#c9ba98"),i.add(o)}function Mx(i,t){const e=new ge;e.name="Гриль-бар «Бикью»",i.add(e);const n=me(e,"Остеклённый фасад на Греческом переулке",{surfaces:{flatRoof:["#353635"],stone:["#77726a"],wood:["#403731"]}}),s=[[-456.42,4.1],[-456.94,24.1]],o=[[-458.12,4.1],[-458.64,24.1]],r=[o[0],s[0],s[1],o[1]],a=t(-457,14.1)+.11,l=Math.min(...s.map(d=>t(...d)))-.2,c=a+2.82;n.shell(r,l,a+.12,"#77726a"),n.shell(r,c,c+.21,"#353635"),n.wall(...o,a+.1,c,"#403731");const h=Od({color:"#394c50",opacity:.53,strength:.7});for(const[d,m,_]of[[...s,14],[o[0],s[0],1],[s[1],o[1],1]])for(let g=0;g<_;g++){const p=ft(d,m,g/_),x=ft(d,m,(g+1)/_),M=ft(p,x,.5),v=x[0]-p[0],S=x[1]-p[1],y=new oe(new mi(Math.hypot(v,S),c-a-.12),h);if(y.position.set(M[0],(c+a+.12)/2,M[1]),y.rotation.y=-Math.atan2(S,v),e.add(y),n.beam(Fe(p,a+.08),Fe(p,c),.074,"#292c2b"),n.beam(Fe(p,a+.85),Fe(x,a+.85),.041,"#393b39"),_===14&&g!==6&&g!==7){for(const w of[.12,.45]){const b=Math.max(0,t(M[0]+.15,M[1])-a),E=(T,C)=>{const[L,P]=ft(p,x,T+w);return[L+.025,a+C+b,P]};n.face("#c89045",E(0,.36),E(.14,.36),E(.31,.6),E(.17,.6)),n.face("#c89045",E(.17,.6),E(.31,.6),E(.14,.84),E(0,.84))}Pn(n,M[0]-.75,a+.71,M[1],.55,.09,.62,"#856747"),Pn(n,M[0]-.75,a+.1,M[1],.07,.61,.07,"#343330")}}vx(e,n,...s,c-.06);const f=new Gn({color:"#757078",toneMapped:!1}),u=new oe(new Ne(.047,.047,3),f);u.position.set(-457.8,c-.27,7.7),u.userData.setEvening=d=>f.color.set(d?"#ac91ff":"#757078"),u.userData.nightLight={color:"#9b78ff",intensity:2.5,range:3.3},e.add(u),Ie(e,{text:`BAR
BQ`,position:[-456.54,a+1.36,13.98],size:[1.34,1.17],outward:[1,.026],color:"#cac2a7",weight:550,lighting:"unlit"}),n.finish()}function yx(i,t,e){const n=new Gn({color:"#d2d0c2",toneMapped:!1}),s=new ge;for(const o of[1,2]){const r=Array.from({length:41},(c,h)=>{const f=ue.lerp(e[0],e.at(-1),h/40),[u,d,m]=t(f,o,-.18);return new B(u,d,m+(o===1?-.05:.05))}),a=new Kc(r),l=new oe(new Ro(a,85,.026,5,!1),n);s.add(l)}s.userData.setEvening=o=>n.color.set(o?"#fff2d7":"#d2d0c2"),i.add(s)}function Sx(i,t){const e=new ge;e.name="Лаундж-зона Qúeue",i.add(e);const n=me(e,"Волнообразный навес и кофейня"),s=(m,_)=>t(m,_)+.19,o=m=>{const _=(m+395.7)/5.6;return s(m,Ma(m,2))+3.65+1.08*Math.exp(-(_**2))},r=(m,_,g=0)=>[m,o(m)+g,Ma(m,_)],a=[-416.6,-409.3,-403.8,-388.6,-383.6,-378.4];for(const m of[1,2])for(let _=1;_<a.length;_++){const g=a[_-1],p=a[_],x=Math.ceil((p-g)/.37);let M,v;for(let S=0;S<=x;S++){const y=S/x,w=g+(p-g)*y,b=Ma(w,m),E=s(w,b),T=Math.sqrt(Math.max(0,1-(2*y-1)**2)),C=[w,E+.09+(o(w)-E-.36)*T,b],L=r(w,m);M&&(n.beam(M,C,.18,qe),n.beam(v,L,.2,Ud),n.beam([v[0],v[1]-.23,v[2]],r(w,m,-.23),.075,qe)),(S>0||_===1)&&n.beam(C,L,S===0||S===x?.18:.065,qe),M=C,v=L}}for(let m=0;m<=94;m++){const _=a[0]+(a.at(-1)-a[0])*m/94;n.beam(r(_,1,-.11),r(_,2,-.11),.1,qe)}yx(e,r,a),gx(e,s);const l=-412.2,c=o(l)-.1,h=(ls[1][2]-ls[0][2])/(ls[1][0]-ls[0][0]),f=[-h,1],u=Ma(l,2)+.15,d=[[-1.65,-.04],[1.65,-.04],[1.65,.04],[-1.65,.04]].map(([m,_])=>[l+m,u+m*h+_]);n.shell(d,c-.21,c+.21,qe),Ie(e,{text:"Qúeue",position:[l,c,u+.05],size:[3.2,.39],outward:f,color:Fa,lighting:"spot"}),n.finish()}function Du(i,t,e,n){const s=t(e,n)+.16,o=Pi(e,n,3.45,2.35);i.shell(o,s-.24,s+.08,fo);for(let a=-10;a<=10;a++){const l=a*.22,c=3.4*Math.sqrt(1-(l/2.35)**2);i.beam([e-c,s+.084,n+l],[e+c,s+.084,n+l],.018,Ec[(a+12)%Ec.length])}for(const a of[-1,1]){const l=[e+a*2.5,n];i.shell(Pi(...l,.095,.095,10),t(...l)-.12,s+3.05,qe)}const r=Pi(e,n,3.55,2.45,32);for(let a=0;a<r.length;a++)i.beam(Fe(r[a],s+2.88),Fe(r[(a+1)%r.length],s+2.88),.13,qe);for(let a=-8;a<=8;a++){const l=a*.4,c=2.41*Math.sqrt(1-(l/3.55)**2);i.beam([e+l,s+2.89,n-c],[e+l,s+2.89,n+c],.09,qe)}for(const a of[-.23,-.09,.09,.23]){const l=Array.from({length:32},(c,h)=>{const f=h*Math.PI/16;return[e+.97*Math.cos(f),s+1.38+.99*Math.sin(f),n+a]});for(let c=0;c<l.length;c++)i.beam(l[c],l[(c+1)%l.length],.035,qe)}Pn(i,e,s+.55,n,1.08,.055,.48,fo);for(const a of[-.57,.57])i.beam([e+a,s+2.21,n],[e+a,s+2.89,n],.018,Mn)}function bx(i,t){const s=t(-397.8,-29.25)+.18;for(const r of[-2.28,2.28])i.shell(Pi(-397.8+r,-29.25,.085,.085,12),s-.14,s+3.38,qe);const o=[[-397.8-3.18,s+2.77,-29.25+.45],[-397.8-3.27,s+3,-29.25-1.37],[-397.8,s+2.67,-29.25-.72],[-397.8+3.29,s+3.02,-29.25-1.3],[-397.8+3.14,s+2.8,-29.25+.49]];for(let r=0;r<o.length;r++)i.beam(o[r],o[(r+1)%o.length],.085,qe);for(let r=0;r<20;r++){const a=(r+1)/21,l=a<.5?ft(o[1],o[2],a*2):ft(o[2],o[3],(a-.5)*2);i.beam(l,ft(o[0],o[4],a),.064,qe)}}function wx(i,t){const e=new ge;e.name="Качели, теневые крылья и белые галечные сиденья",i.add(e);const n=me(e,"Настилы и мебель",{surfaces:{wood:[fo,...Ec]}});Du(n,t,-410.7,-30.1),Du(n,t,-382.8,-25.55),bx(n,t);const s=new vn(1,24,12),o=new jt({color:mx});for(const[f,u,d,m,_,g]of[[-401.9,-30.05,1.12,.69,.41,.18],[-402.7,-27.65,.88,.65,.4,-.29],[-399.6,-26.05,1.26,.72,.43,-.14],[-396.7,-28.5,.73,.62,.41,.26],[-395.1,-26.05,.98,.68,.43,-.31]]){const p=new oe(s,o);p.scale.set(d,_,m),p.rotation.y=g,p.position.set(f,t(f,u)+_+.15,u),p.castShadow=!0,p.receiveShadow=!0,e.add(p)}for(const[f,u]of[[-406.2,-20.1],[-403,-18.2],[-390.1,-17.3]]){const d=t(f,u)+.15;n.shell(Pi(f,u,.38,.38,16),d+.72,d+.77,Mn),n.beam([f,d,u],[f,d+.72,u],.045,Mn);for(const m of[-.74,.74]){Pn(n,f+m,d+.43,u,.42,.055,.42,Mn);for(const _ of[-.16,.16])for(const g of[-.15,.15])n.beam([f+m+_,d,u+g],[f+m+_,d+.43,u+g],.029,Mn);n.wall([f+m*1.25,u-.19],[f+m*1.25,u+.19],d+.46,d+.81,Mn)}}const r=-387.7,a=-20.4,l=t(r,a)+.16,c=Fd(r-.92,r+.92,a-.72,a+.72);n.shell(c,l-.12,l+.42,fo);for(const f of c)n.beam(Fe(f,l),Fe(f,l+1.75),.09,fo);const h=[[r-1,l+2.35,a],[r+1,l+2.35,a]];for(const f of[-1,1])n.face("#99704d",...h,[r+1.03,l+1.72,a+f*.82],[r-1.03,l+1.72,a+f*.82]);n.finish()}function Ex(i,t){const e=me(i,"Памятный знак Матери Марии"),n=-652.7,s=-66.6,o=t(n,s)+.1,r=[[-1.02,-.42],[-.73,-.78],[.59,-.78],[1.05,-.39],[1.15,.24],[.91,.59],[-.78,.61],[-1.1,.18]],l=[[-.63,.68,-.21],[-.42,1.14,-.51],[.04,1.53,-.56],[.53,1.25,-.39],[.84,.85,-.01],[.88,.47,.37],[-.76,.48,.43],[-.94,.59,.16]].map(([h,f,u])=>[n+h,o+f,s+u]),c=r.map(([h,f])=>[n+h,o-.13,s+f]);for(let h=0;h<r.length;h++){const f=(h+1)%r.length;e.face(h%2?"#706f67":"#666860",c[h],c[f],l[f],l[h]),e.face(h%3?"#8e928b":"#a4a79f",l[h],l[f],[n+.03,o+.95,s-.01])}e.beam([n+.02,o+.05,s+1],[n+.08,o+1.58,s-.57],.14,"#807f71"),e.beam([n-.82,o+1,s+.055],[n+.9,o+1,s+.055],.14,"#807f71");for(let h=0;h<3;h++)for(const[f,u]of[-1.2,-.6,.035,.635].entries()){const d=n+u+.286,m=s+1.33+h*.58,_=t(d,m)+.035;Pn(e,d,_-.08,m,.57,.09,.56,f===0||f===3?"#a78277":"#929897")}e.finish()}function Tx(i,t){const e=me(i,"Памятник морскому десанту"),n=-631.7,s=-37.2,o=t(n,s)+.09,r=(l,c,h)=>[n+l,o+c,s+h];Pn(e,n,o-.12,s+.45,2.85,.23,2.35,"#bbb6aa"),Pn(e,n,o+.11,s+.3,2.19,.26,1.57,"#424545"),Pn(e,n,o+.37,s-.25,1.06,2.08,.22,"#333837");const a=Array.from({length:10},(l,c)=>{const h=Math.PI/2+c*Math.PI/5,f=c%2?.064:.151;return r(-.28+f*Math.cos(h),2.12+f*Math.sin(h),-.135)});for(let l=0;l<a.length;l++)e.face("#b6a06b",r(-.28,2.12,-.135),a[l],a[(l+1)%a.length]);e.beam(r(-.34,.52,.73),r(.73,1.39,.54),.13,Mn),e.beam(r(-.44,.58,.48),r(-.2,.53,.95),.18,Mn);for(const[l,c]of[[[-.66,.79,.72],[-.62,1.33,.65]],[[-.21,.84,.7],[.01,1.35,.58]]])e.beam(r(-.37,.57,.74),r(...l),.11,Mn),e.beam(r(...l),r(...c),.1,Mn),e.face(Mn,r(...c),r(c[0]-.1,c[1]-.26,c[2]+.07),r(c[0]+.08,c[1]-.23,c[2]-.05));for(const l of[-1,0,1]){const c=l*.82,h=l*1.21,f=[r(c-.32,.28,1.72),r(c+.32,.28,1.72),r(h+.37,.19,3.17),r(h-.37,.19,3.17)],u=f.map(([d,,m])=>[d,t(d,m)-.08,m]);e.face("#b7b5ac",...f);for(let d=0;d<f.length;d++){const m=(d+1)%f.length;e.face("#a7a8a1",f[d],f[m],u[m],u[d])}e.face("#444746",r(c-.25,.294,1.8),r(c+.25,.294,1.8),r(h+.28,.216,3.05),r(h-.28,.216,3.05))}e.finish()}function Ax(i,t){Sx(i,t),wx(i,t),xx(i),Mx(i,t),Ex(i,t),Tx(i,t)}const As=Math.PI*2;function gr(i,t,e,n=36){return Array.from({length:n},(s,o)=>{const r=o/n*As;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function Rx(){const e=new Uint8Array(18432);for(let s=0;s<48;s++){const o=(s+.5)/48;for(let r=0;r<96;r++){const a=r/96*As,l=Math.max(0,Math.sin(a*3)*.06+Math.sin(a*7+.4)*.035),c=o>.51+l?[173+o*46,196+o*36,211+o*38]:o>.42?[71,78,66]:[122+o*71,113+o*77,99+o*86],h=(s*96+r)*4;e.set([...c,255],h)}}const n=new Xc(e,96,48);return n.colorSpace=Ke,n.mapping=or,n.needsUpdate=!0,new pr({color:"#ced3d4",envMap:n,reflectivity:.88,specular:"#f2f5f5",shininess:78})}function Cx(i,t){const s=me(i,"Фонтан «Жемчужина Анапы»"),o=(d,m,_=0)=>[d,t(d,m)+.17+_,m],r=gr(-238,2,3.5),a=gr(-238,2,3.71);r.forEach(([d,m],_)=>{const g=(_+1)%r.length;s.face("#555857",o(-238,2),o(d,m),o(...r[g])),s.face("#997359",o(d,m),o(...a[_]),o(...a[g]),o(...r[g]))});for(let d=0;d<28;d++){const m=d*As/28,_=gr(-238+2.85*Math.cos(m),2+2.85*Math.sin(m),.036,8);s.face("#a7a8a1",..._.map(g=>o(...g,.008)))}const l=.13;for(let d=0;d<6;d++){const m=l+d*As/6;for(let _=0;_<5;_++){const g=m-.34+_*.135,p=g+.133,x=(w,b,E)=>o(-238+Math.cos(w)*b,2+Math.sin(w)*b,E),M=x(g,4.43,.44),v=x(p,4.43,.44),S=x(g,4.93,.36),y=x(p,4.93,.36);s.face("#9e9a90",M,v,x(p,4.41,-.045),x(g,4.41,-.045)),s.face("#8e8b84",x(g,5.06,.02),x(p,5.06,.02),x(p,5.06,.1),x(g,5.06,.1)),s.face("#bf8770",M,v,y,S),s.face("#b67e64",S,y,x(p,5.06,.1),x(g,5.06,.1)),_===0&&s.face("#a39d92",M,S,x(g,5.06,.02),x(g,4.41,-.045)),_===4&&s.face("#a39d92",v,y,x(p,5.06,.02),x(p,4.41,-.045))}}const c=new ge;c.name="Шесть зеркальных сфер",i.add(c);const h=new vn(1,28,20),f=Rx(),u=[[0,0,.57,3.35],[-1.65,1.12,.56,.86],[1.77,-.98,.48,1.12],[-2.31,-1.72,.51,0],[2.44,1.69,.47,0],[.47,-2.67,.43,0]];for(const[d,m,_,g]of u){const[p,x,M]=o(-238+d,2+m),v=new oe(h,f);if(v.scale.setScalar(_),v.position.set(p,x+_+g,M),v.castShadow=!0,c.add(v),!!g)for(let S=0;S<11;S++){const y=S/11*As,w=y+.88;s.beam([p+Math.cos(y)*.13,x,M+Math.sin(y)*.13],[p+Math.cos(w)*_*.63,x+g+.13,M+Math.sin(w)*_*.63],.026,"#a5a7a4")}}s.finish()}function Px(i,t){const o=Math.cos(-.51),r=Math.sin(-.51),a=me(i,"Арка Центрального пляжа"),l="#eeeae0",c="#dbd9ce",h=3.11,f=[1.21,1.28,1.34,1.28,1.21],u=[-6.36,-3.69,-1.25,1.25,3.69,6.36],d=(p,x)=>[197.02+p*o-x*r,-463.27+p*r+x*o],m=Math.max(...u.map(p=>t(...d(p,0))))+.16,_=(p,x,M)=>{const[v,S]=d(p,x);return[v,m+M,S]},g=(p,x,M,v)=>[d(p-M,x-v),d(p+M,x-v),d(p+M,x+v),d(p-M,x+v)];for(const[p,x]of u.entries())if(p===0||p===1||p===4||p===5){a.shell(g(x,0,.47,1.18),m-.4,m+h,l),a.shell(g(x,0,.57,1.27),m+h-.045,m+h+.1,l);for(const v of[-1.03,1.03])a.shell(g(x,v,.37,.17),m+h,m+h+.95,l);a.shell(g(x,0,.42,1.23),m+h+.95,m+h+1.09,l)}else for(const v of[-.92,.92])a.shell(g(x,v,.2,.21),m-.4,m+h,l),a.shell(g(x,v,.27,.28),m+h-.06,m+h+.085,l);for(const p of[-.92,.92])for(let x=0;x<f.length;x++){const M=(u[x]+u[x+1])/2,v=(u[x+1]-u[x])/2,S=(y,w,b)=>_(M+(v+w)*Math.cos(y),p+b*.17,h+(f[x]+w)*Math.sin(y));for(let y=0;y<14;y++){const w=Math.PI*y/14,b=Math.PI*(y+1)/14;for(const E of[-1,1])a.face(l,S(w,-.19,E),S(b,-.19,E),S(b,.11,E),S(w,.11,E));a.face(c,S(w,-.19,-1),S(b,-.19,-1),S(b,-.19,1),S(w,-.19,1)),a.face(l,S(w,.11,-1),S(b,.11,-1),S(b,.11,1),S(w,.11,1))}}a.finish()}function Lx(i,t){const s=t(64.17,13.11)+.16,o=me(i,"Скульптура «Белая шляпа»"),r=["#8b8777","#a39e8d","#a9a38f","#8d897b","#969383"],a=[[1.28,.77,-.12,.1],[1.39,.74,.35,.19],[1.12,.65,.75,.17],[.79,.57,1.12,.08],[.48,.38,1.56,-.17]].map(([m,_,g,p],x)=>Array.from({length:13},(M,v)=>{const S=v/13*As,y=1+.13*Math.sin(v*3.3+x*.81);return[64.17+p+Math.cos(S)*m*y,s+g+.12*Math.cos(v*2.4+x),13.11+Math.sin(S)*_*y]}));for(let m=0;m<a.length-1;m++){const _=a[m],g=a[m+1];_.forEach((p,x)=>{const M=(x+1)%_.length;o.face(r[(x+m*3)%r.length],p,_[M],g[M]),o.face(r[(x+m*3+1)%r.length],p,g[M],g[x])})}o.face("#a29e8f",...a.at(-1));const l=(m,_,g)=>Array.from({length:32},(p,x)=>{const M=x/32*As,v=Math.cos(M)*m,S=Math.sin(M)*m*.83,y=g?.038*Math.cos(2*M):.044*Math.cos(2*M);return[64.17-.13+v,s+1.56+_+S*.37+y,13.11+S]}),h=[[.75,0,!1],[.75,.035,!1],[.4,.12,!1],[.405,.155,!0],[.39,.22,!0],[.34,.43,!0],[.24,.49,!0],[.08,.46,!0]].map(m=>l(...m));for(let m=0;m<h.length-1;m++){const _=h[m+1],g=h[m];g.forEach((p,x)=>{const M=(x+1)%g.length;o.face(m===3?"#d8d7ce":"#f5f3e9",p,g[M],_[M],_[x])})}o.face("#f5f3e9",...h.at(-1));const f={Б:[[[.88,1],[0,1],[0,0],[.76,0],[.9,.22],[.72,.53],[0,.53]]],Е:[[[.88,1],[0,1],[0,0],[.9,0]],[[0,.5],[.75,.5]]],Л:[[[0,0],[.31,1],[.84,1],[.84,0]]],А:[[[0,0],[.45,1],[.9,0]],[[.2,.42],[.7,.42]]],Я:[[[.9,0],[.9,1],[.25,1],[0,.76],[.23,.54],[.9,.54]],[[.52,.54],[0,0]]],Ш:[[[0,1],[0,0],[.95,0],[.95,1]],[[.475,0],[.475,1]]],П:[[[0,0],[0,1],[.86,1],[.86,0]]]};[..."БЕЛАЯ ШЛЯПА"].forEach((m,_)=>{for(const g of f[m]??[]){const p=g.map(([x,M])=>{const v=(_+x-5.5)*.155;return[64.17+Math.sin(v)*1.17,s+.41+M*.175,13.11+Math.cos(v)*.88]});p.slice(1).forEach((x,M)=>o.beam(p[M],x,.032,"#f5f3e9"))}});const u=gr(64.17,13.11,2.45),d=(m,_)=>[m,t(m,_)+.17,_];u.forEach((m,_)=>o.face("#b4ac9c",d(64.17,13.11),d(...m),d(...u[(_+1)%u.length])));for(let m=0;m<46;m++){const _=m*2.39996,g=1.12+m%13/13*1.19,p=64.17+Math.cos(_)*g,x=13.11+Math.sin(_)*g,M=t(p,x)+.17;o.shell(gr(p,x,.09+m%4*.035,6),M-.01,M+.03+m%3*.025,r[m%r.length])}o.finish()}function Dx(i,t){Cx(i,t),Lx(i,t),Px(i,t)}function Ix(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in o){const f=Iu(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const m=Iu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Iu(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new $n(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const _=h.getComponent(u,m);a.setComponent(u+f,m,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Tc=Math.PI/4,Ux="#e1d9bf",Nx="#26313a",Fx=[[37.2996896,44.8872772],[37.2995282,44.8874039],[37.2994588,44.8874602],[37.2994093,44.887514],[37.2990185,44.8878942],[37.2988335,44.8880063],[37.2982407,44.8885479]],Ox=[[37.2992911,44.8877628],[37.2988951,44.8881412]];function no(i,t){const e=(i-.5)*Tc;return[Math.sin(e)*t,Math.cos(e)*t]}function Uu(i){const t=i*Tc;return-.85*Math.sin(t)+.5*Math.cos(t)>0}function Bx(i,{rings:t},e){const n=t[0],s=n.reduce((v,S)=>v+S[0],0)/n.length,o=n.reduce((v,S)=>v+S[1],0)/n.length,r=e(s,o),a=Math.min(...n.map(v=>e(...v)))-r-.3,c=n.reduce((v,[S,y])=>v+Math.hypot(S-s,y-o),0)/n.length*.74,h=new jt({color:Ux,flatShading:!0}),f=new jt({color:Nx,flatShading:!0}),u=new jt({color:"#b6b8ae"}),d=new jt({color:"#a9c2c8",transparent:!0,opacity:.56,depthWrite:!1}),m=new ge,_=new Map([[h,[]],[f,[]]]);m.name="Анапский маяк",m.position.set(s,r,o),i.add(m);function g(v,S,y,w,b,E=8){const T=new oe(new yn(w,y,S-v,E),b);return T.position.y=(S+v)/2,T.rotation.y=-Math.PI/E,T.castShadow=b!==d,m.add(T),T}function p(v,S,y,w,b,E,T,C){const L=v*Tc,P=Math.sin(L),R=Math.cos(L),I=c*Math.cos(Tc/2)+T,N=new Ne(b,y,E);N.rotateY(L),N.translate(P*I+R*w,S,R*I-P*w),_.get(C).push(N)}g(a,3.15,c*1.13,c*1.13,h),g(3.15,3.55,c*1.16,c*1.16,h);const x=[[3.55,6.5,!0],[6.5,9.2,!1],[9.2,12,!0],[12,14.6,!1],[14.6,17.05,!0]];for(const[v,S,y]of x){const w=new Ae,b=[[],[]];for(let T=0;T<8;T++){const[C,L]=no(T,c),[P,R]=no(T+1,c);if(b[Number(y&&Uu(T))].push(C,v,L,P,v,R,P,S,R,C,v,L,P,S,R,C,S,L),v<14.6){const I=y&&Uu(T)?f:h;for(const N of[-c*.2,c*.2])p(T,(v+S)/2,S-v,N,c*.095,.16,.03,I)}}w.setAttribute("position",new ee(b.flat(),3)),w.addGroup(0,b[0].length/3,0),b[1].length&&w.addGroup(b[0].length/3,b[1].length/3,1),w.computeVertexNormals();const E=new oe(w,[h,f]);E.castShadow=!0,m.add(E)}g(12.2,12.39,c*1.05,c*1.05,h),g(13.4,13.54,c*1.04,c*1.04,h),g(17.05,17.65,c*1.07,c*1.07,h),g(17.65,17.9,c*1.12,c*1.12,h);for(let v=0;v<8;v++)for(const S of[-c*.22,0,c*.22])p(v,17.34,.24,S,.26,.07,c*.067,f);for(const[v,S]of _){m.add(new oe(Ix(S),v));for(const y of S)y.dispose()}g(17.9,18.11,c*.71,c*.71,h,12),g(18.11,20.05,c*.58,c*.58,d,12),g(20.05,20.83,c*.68,.24,h,12),g(20.83,21,.24,.12,h,12),g(18.48,19.43,.31,.31,new jt({color:"#a0433d"}),12);const M=[];for(let v=0;v<12;v++){const S=(v-.5)*Math.PI/6,y=Math.sin(S)*c*.58,w=Math.cos(S)*c*.58;M.push([[y,18.11,w],[y,20.05,w],.052])}for(let v=0;v<8;v++){const[S,y]=no(v,c*1.01),[w,b]=no(v+1,c*1.01);M.push([[S,17.9,y],[S,18.8,y],.042]);for(const P of[18.35,18.8])M.push([[S,P,y],[w,P,b],.037]);const[E,T]=no(v,c*.88),[C,L]=no(v+1,c*.88);M.push([[E,19.55,T],[C,19.55,L],.033]),M.push([[E,20.46,T],[C,20.46,L],.033]),M.push([[E,19.55,T],[E,20.46,T],.033])}Bd(m,M,u,"Ограждения фонаря")}function Bd(i,t,e,n){const s=new Ne(1,1,1),o=new dn(s,e,t.length);o.name=n;const r=new ye,a=new B,l=new B,c=new B,h=new B(1,0,0);for(const[f,[u,d,m]]of t.entries())a.set(...u),l.set(...d),c.subVectors(l,a),r.position.copy(a).lerp(l,.5),r.scale.set(c.length(),m,m),r.quaternion.setFromUnitVectors(h,c.normalize()),r.updateMatrix(),o.setMatrixAt(f,r.matrix);i.add(o)}function Nu(i,t,e,{height:n,color:s,spacing:o,width:r,name:a}){const l=[];for(let c=1;c<t.length;c++){const[h,f]=t[c-1],[u,d]=t[c],m=Math.ceil(Math.hypot(u-h,d-f)/2.4),_=(g,p)=>{const x=h+(u-h)*g,M=f+(d-f)*g;return[x,e(x,M)+p,M]};for(let g=0;g<m;g++){const p=g/m,x=(g+1)/m;l.push([_(p,.05),_(p,n+.05),r*2.8]);for(const v of[.14,n])l.push([_(p,v),_(x,v),r*1.7]);const M=Math.ceil(Math.hypot(u-h,d-f)/(m*o));for(let v=1;v<M;v++){const S=(g+v/M)/m;l.push([_(S,.14),_(S,n),r])}}c===t.length-1&&l.push([_(1,.05),_(1,n+.05),r*2.8])}Bd(i,l,new jt({color:s}),a)}function zx(i,{origin:[t,e],scale:n},s){const o=r=>r.map(([a,l])=>[(a-t)*n[0],(e-l)*n[1]]);Nu(i,o(Fx),s,{height:1.06,color:"#9a9c95",spacing:.16,width:.038,name:"Ограда Верхней Набережной"}),Nu(i,o(Ox),s,{height:1.76,color:"#363f40",spacing:.16,width:.027,name:"Ограда маяка"})}const kx="125862202",Gx="977564342",Yl=12,Sa=3;function ba(i,t,e,n){const s=[];for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=e*(n(r)-t),c=e*(n(a)-t);if(l>=0&&s.push(r),l<0!=c<0){const h=l/(l-c);s.push([ue.lerp(r[0],a[0],h),ue.lerp(r[1],a[1],h)])}}return s}function Ln(i,t,e,n,s){const o=new Qc(t.map(([a,l])=>new vt(a,-l))),r=new oe(new Br(o,{depth:n,bevelEnabled:!1}),s);r.rotation.x=-Math.PI/2,r.position.y=e,r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function Hx(i,t,e){const n=[],s=Math.sign(i.reduce((o,[r,a],l)=>{const[c,h]=i[(l+1)%i.length];return o+r*h-c*a},0));for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=a[0]-r[0],c=a[1]-r[1],h=Math.hypot(l,c);if(h<4||Math.abs(e(r)-e(a))<h*.8)continue;const f=Math.floor(h/3.3);for(let u=0;u<f;u++){const d=(u+.5)/f;n.push([r[0]+l*d+s*c/h*.045,t,r[1]+c*d-s*l/h*.045,-Math.atan2(c,l)])}}return n}function Rs(i,t,e,n,s){const o=new dn(new Ne(n,s,.12),e,t.length),r=new ye;t.forEach(([a,l,c,h],f)=>{r.position.set(a,l,c),r.rotation.y=h,r.updateMatrix(),o.setMatrixAt(f,r.matrix)}),o.receiveShadow=!0,i.add(o)}function Vx(i,t){const e=new ge;e.name="Малая бухта, комплекс на берегу";const n=new jt({color:"#c5b08c"}),s=new jt({color:"#eeeae0"}),o=new jt({color:"#b7b5a9"}),r=new jt({color:"#617964"}),a=new jt({color:"#5f8596"}),l=new jt({color:"#5799b9"}),c=4.4;Ln(e,t,1.8,c-1.8,n),Ln(e,t,c,3.05,n),Ln(e,t,c+3.05,3.15,s),Ln(e,t,c+6.2,3.4,s),Ln(e,t,c+9.6,.35,o);const h=t.map((S,y)=>{const w=t[(y+1)%t.length];return{start:S,end:w,length:Math.hypot(w[0]-S[0],w[1]-S[1])}}).reduce((S,y)=>y.length>S.length?y:S),{start:f,end:u,length:d}=h,m=u[0]-f[0],_=u[1]-f[1],g=-Math.atan2(_,m),p=Math.sign(_),x=-Math.abs(_)/d*.04,M=m*p/d*.04;function v(S,y){return Array.from({length:S},(w,b)=>{const E=(b+.5)/S;return[f[0]+m*E+x,y,f[1]+_*E+M,g]})}Rs(e,v(18,c+1.5),r,4.35,2.35),Rs(e,v(38,c+4.75),a,1.75,1.35),Rs(e,v(30,c+7.9),l,2.55,2.45),i.add(e)}function Wx(i,t,e){if(t.id===Gx)return Vx(i,t.rings[0]),!0;if(t.id!==kx)return!1;const n=t.rings[0],s=ue.degToRad(112.9),o=Math.sin(s),r=-Math.cos(s),a=([w,b])=>w*o+b*r,l=n.map(a),c=Math.min(...l),h=w=>a(w)-c,f=Math.max(...l)-c,u=f*.54,d=n.map(w=>e(...w)),m=Math.max(...d),_=Math.min(...d)-.3,g=new ge;g.name="Малая бухта, корпус «Парусник»";const p=new jt({color:"#f5f3e8"}),x=new jt({color:"#deded5"}),M=new jt({color:"#526f7d"}),v=new jt({color:"#9c9e99"});Ln(g,n,_,m-_,x);const S=[];for(let w=0;w<Yl;w++){const b=w*2.45,E=w<9?f-w*3.3:u,T=ba(ba(n,b,1,h),E,-1,h),C=m+w*Sa,L=T.reduce(([R,I],N)=>[R+N[0]/T.length,I+N[1]/T.length],[0,0]),P=T.map(([R,I])=>[ue.lerp(R,L[0],.04),ue.lerp(I,L[1],.04)]);Ln(g,T,C,.35,p),Ln(g,P,C+.35,Sa-.35,x),S.push(...Hx(P,C+1.8,h)),(w===8||w===Yl-1)&&Ln(g,P,C+Sa,.18,v)}const y=ba(ba(n,u-3.8,1,h),u+.15,-1,h);return Ln(g,y,m,Yl*Sa+1.9,p),Rs(g,S,M,1.65,1.15),i.add(g),!0}function Xx(i,t,e){if(t.id!=="142489068")return!1;const n=t.rings[0],s=n.map((G,O)=>{const Y=n[(O+1)%n.length];return{start:G,end:Y,length:Math.hypot(Y[0]-G[0],Y[1]-G[1])}}),[o]=s.sort((G,O)=>O.length-G.length).slice(0,2).sort((G,O)=>G.start[1]+G.end[1]-(O.start[1]+O.end[1])),[r,a]=[o.start,o.end].sort((G,O)=>G[0]-O[0]),l=n.filter(G=>G!==r&&G!==a).sort((G,O)=>G[0]-O[0])[0],[c,h]=r,f=Math.hypot(a[0]-c,a[1]-h),u=Math.hypot(l[0]-c,l[1]-h),d=(a[0]-c)/f,m=(a[1]-h)/f,_=(l[0]-c)/u,g=(l[1]-h)/u,p=(G,O)=>[c+d*G+_*O,h+m*G+g*O],x=(G,O,Y,rt)=>[p(G,Y),p(O,Y),p(O,rt),p(G,rt)],M=new ge;M.name="Анапский морской вокзал";const v=new jt({color:"#e5e4dc"}),S=new jt({color:"#b7a18c"}),y=new jt({color:"#a4aaa4"}),w=new jt({color:"#496877"}),b=new jt({color:"#8f4b3a"}),E=n.map(G=>e(...G)),T=Math.max(...E),C=Math.min(...E)-.25;Ln(M,n,C,T+2.9-C,S),Ln(M,n,T+2.9,3.6,v),Ln(M,n,T+6.5,.35,y);const L=7.8,P=f-.85,R=P-L,I=u*.34,N=I+L,F=x(R,P,I,N),V=T+15.2;Ln(M,F,T+6.8,V-T-6.8,v),Ln(M,F,V,.22,y);const H=-Math.atan2(m,d),J=-Math.atan2(g,_),et=(G,O,Y,rt)=>Array.from({length:G},(_t,z)=>{const[nt,pt]=rt((z+.5)/G);return[nt,O,pt,Y]});Rs(M,et(11,T+4.75,H,G=>p(1.3+G*(f-2.6),-.04)),w,2.22,2.55),Rs(M,et(8,T+1.48,H,G=>p(1.5+G*(f-3),-.04)),w,1.65,1.34);const St=[];for(const G of[8.35,10.95,13.55]){const O=T+G;St.push(...et(3,O,H,Y=>p(R+Y*L,I-.04))),St.push(...et(3,O,J,Y=>p(P+.04,I+Y*L)))}Rs(M,St,w,1.37,1.43);const[mt,Ut]=p(P-2.8,I+2.4),kt=new oe(new yn(.055,.105,3.2,6),b);return kt.position.set(mt,V+1.82,Ut),M.add(kt),i.add(M),!0}const qx=[[65,151],[133,120],[143,98],[312,94],[327,41],[410,46],[451,73],[504,67],[540,44],[733,53],[724,326],[1170,410],[1591,455],[1591,738],[40,687]],Yx=[{points:[[94,145],[93,228],[89,353]],width:.65,height:.38},{points:[[142,122],[197,119],[277,117],[320,120],[331,188]],width:.65,height:.32},{points:[[197,119],[201,187],[137,192]],width:.73,height:.31},{points:[[273,119],[279,182],[206,187]],width:.7,height:.33},{points:[[287,122],[291,181],[328,178]],width:.66,height:.3},{points:[[334,91],[338,130],[345,187],[405,175],[403,130],[338,136]],width:.68,height:.35},{points:[[447,84],[486,87],[492,170],[445,173]],width:.69,height:.31},{points:[[500,85],[530,86],[534,161],[500,166]],width:.63,height:.27},{points:[[540,62],[535,107],[537,170]],width:.68,height:.38},{points:[[137,228],[204,222],[275,225],[351,227],[360,279],[300,282],[228,289],[140,279],[137,228]],width:.68,height:.27},{points:[[218,229],[214,277],[230,291],[224,354],[137,344]],width:.69,height:.31},{points:[[181,231],[178,277],[187,291],[181,315],[139,313]],width:.56,height:.25},{points:[[191,314],[187,348]],width:.57,height:.24},{points:[[307,229],[310,257],[278,261]],width:.57,height:.23},{points:[[319,231],[319,276],[352,273]],width:.64,height:.29},{points:[[360,285],[367,348],[366,387]],width:.65,height:.4},{points:[[363,278],[426,272],[427,218]],width:.73,height:.32},{points:[[413,209],[500,205],[570,200],[646,197]],width:.68,height:.31},{points:[[429,270],[504,270],[502,206]],width:.72,height:.29},{points:[[506,271],[510,270]],width:.72,height:.35},{points:[[528,268],[567,262],[627,258]],width:.72,height:.35},{points:[[645,256],[647,203]],width:.72,height:.35},{points:[[560,207],[567,261]],width:.61,height:.28},{points:[[678,178],[681,346],[634,347]],width:.62,height:.41},{points:[[468,349],[467,319],[474,305],[489,302],[602,300],[618,307],[623,330]],width:.66,height:.3},{points:[[382,355],[417,353],[414,398],[388,397]],width:.66,height:.37},{points:[[416,401],[526,426],[531,407],[539,369],[569,375]],width:.75,height:.37},{points:[[569,376],[568,425],[539,422]],width:.68,height:.36},{points:[[578,380],[578,423],[616,430],[620,380]],width:.68,height:.37},{points:[[630,379],[629,433],[682,441],[679,378]],width:.72,height:.36},{points:[[98,445],[190,455],[177,553],[91,539]],width:.81,height:.38},{points:[[209,457],[316,474],[305,552],[202,537],[209,457]],width:.85,height:.42},{points:[[245,474],[237,509],[226,539]],width:.75,height:.4},{points:[[386,490],[429,501],[515,513],[566,520],[622,532]],width:.73,height:.29},{points:[[430,503],[430,551],[389,544]],width:.74,height:.36},{points:[[516,515],[515,559],[431,549]],width:.78,height:.33},{points:[[564,524],[557,587],[515,579],[517,557]],width:.76,height:.38},{points:[[622,531],[615,590],[566,583]],width:.76,height:.39},{points:[[653,536],[708,549],[699,609]],width:.74,height:.34},{points:[[769,385],[806,387],[823,390],[866,388],[875,384]],width:.52,height:.48},{points:[[768,384],[768,425],[766,447]],width:.5,height:.52},{points:[[747,444],[769,449],[813,457],[870,467],[913,473],[953,478],[1006,483]],width:.62,height:.6},{points:[[818,395],[817,426],[814,456]],width:.52,height:.51},{points:[[874,379],[874,415]],width:.47,height:.42},{points:[[870,451],[870,466]],width:.46,height:.46},{points:[[918,390],[917,419]],width:.5,height:.49},{points:[[914,437],[912,473]],width:.55,height:.54},{points:[[959,393],[961,413],[957,428]],width:.49,height:.46},{points:[[955,442],[952,478]],width:.55,height:.54},{points:[[961,416],[994,421],[1016,426]],width:.39,height:.36},{points:[[1016,427],[1012,444],[1007,482]],width:.54,height:.56},{points:[[1070,501],[1079,447],[1085,435],[1104,438]],width:.61,height:.61},{points:[[1138,441],[1169,449]],width:.44,height:.41},{points:[[1170,435],[1169,471],[1168,505],[1111,502],[1071,500]],width:.65,height:.62},{points:[[1122,459],[1114,487],[1111,502]],width:.51,height:.48},{points:[[765,620],[770,577],[844,591],[840,619]],width:.53,height:.53},{points:[[900,645],[903,598],[948,608],[996,618],[1024,616]],width:.55,height:.49},{points:[[950,608],[945,653],[901,647]],width:.52,height:.54},{points:[[999,619],[990,664],[983,688]],width:.52,height:.55},{points:[[944,654],[939,690]],width:.49,height:.44},{points:[[1049,621],[1094,620],[1133,627]],width:.44,height:.38},{points:[[1132,628],[1127,665]],width:.44,height:.42},{points:[[1230,470],[1293,471],[1292,517],[1290,550],[1234,551],[1230,470]],width:.7,height:.87},{points:[[1233,519],[1292,518]],width:.66,height:.72},{points:[[1352,482],[1369,478],[1404,479],[1418,480],[1417,492],[1385,493],[1383,509]],width:.57,height:.48},{points:[[1338,691],[1339,668],[1397,669]],width:.59,height:.55},{points:[[1336,722],[1398,721],[1454,722],[1512,724],[1575,726],[1575,652],[1512,653],[1455,654],[1400,652],[1398,721]],width:.72,height:.69},{points:[[1455,654],[1454,722]],width:.67,height:.62},{points:[[1512,653],[1512,724]],width:.65,height:.6}],$x=[{polygon:[[144,129],[193,124],[198,177],[142,181]],depth:.78},{polygon:[[205,126],[269,124],[274,169],[210,177]],depth:.74},{polygon:[[287,128],[317,127],[322,171],[290,176]],depth:.7},{polygon:[[346,136],[398,131],[402,169],[347,177]],depth:.83},{polygon:[[452,90],[483,89],[487,158],[450,166]],depth:.78},{polygon:[[502,97],[526,99],[527,153],[500,159]],depth:.64},{polygon:[[146,235],[214,231],[211,274],[143,269]],depth:.88},{polygon:[[279,234],[304,234],[308,253],[278,257]],depth:.57},{polygon:[[319,237],[345,234],[348,269],[320,269]],depth:.75},{polygon:[[145,287],[183,288],[180,311],[141,310]],depth:.62},{polygon:[[142,319],[181,319],[181,342],[137,340]],depth:.58},{polygon:[[190,292],[227,298],[222,350],[189,345]],depth:.77},{polygon:[[505,209],[558,205],[566,260],[526,265],[528,298],[514,298],[512,267]],depth:1.05},{polygon:[[566,205],[641,199],[644,252],[642,252],[642,283],[630,283],[629,254],[571,260]],depth:1.15},{polygon:[[389,358],[414,354],[411,396],[388,393]],depth:.64},{polygon:[[541,370],[567,377],[565,423],[535,420]],depth:.8},{polygon:[[580,378],[617,379],[613,425],[579,422]],depth:.82},{polygon:[[633,378],[676,379],[680,435],[630,426]],depth:1},{polygon:[[98,450],[183,462],[173,541],[92,533]],depth:.92},{polygon:[[213,463],[244,468],[227,535],[207,535]],depth:.9},{polygon:[[248,473],[311,478],[304,549],[236,539]],depth:.91},{polygon:[[388,494],[427,502],[427,541],[389,537]],depth:.74},{polygon:[[434,506],[514,516],[510,552],[433,545]],depth:.87},{polygon:[[521,518],[562,526],[556,576],[516,572]],depth:.94},{polygon:[[566,527],[619,535],[612,581],[561,575]],depth:.99},{polygon:[[656,541],[704,553],[693,603],[646,592]],depth:.83},{polygon:[[773,582],[839,595],[836,620],[771,612]],depth:.84},{polygon:[[906,602],[946,611],[943,645],[903,637]],depth:.64},{polygon:[[952,612],[994,621],[986,665],[951,654]],depth:.58},{polygon:[[1235,475],[1288,476],[1288,515],[1237,516]],depth:.72},{polygon:[[1238,524],[1287,523],[1286,546],[1239,547]],depth:.64},{polygon:[[1404,657],[1450,658],[1449,718],[1403,717]],depth:.54},{polygon:[[1459,658],[1507,657],[1507,719],[1459,717]],depth:.59},{polygon:[[1517,658],[1570,657],[1570,721],[1517,719]],depth:.55}],Zx=[{point:[256,273],radius:.7,depth:.51},{point:[412,299],radius:.53,depth:.46},{point:[496,316],radius:.58,depth:.48},{point:[456,365],radius:.73,depth:.58},{point:[516,422],radius:.67,depth:.46},{point:[644,329],radius:.7,depth:.55},{point:[592,393],radius:.56,depth:.37},{point:[553,441],radius:.63,depth:.44},{point:[377,498],radius:.56,depth:.44},{point:[755,405],radius:.74,depth:.75},{point:[962,706],radius:.7,depth:.75},{point:[1260,494],radius:.5,depth:.65}],Kx=[{name:"Широкая улица",polygon:[[96,365],[162,362],[217,365],[309,385],[362,398],[414,412],[418,485],[386,486],[308,470],[209,456],[94,443]]},{name:"Широкая улица",polygon:[[1194,609],[1258,608],[1344,612],[1438,614],[1516,615],[1574,612],[1573,647],[1510,651],[1437,652],[1350,651],[1258,648],[1200,647]]},{name:"Северная улица",polygon:[[119,193],[207,191],[287,188],[344,184],[433,176],[527,171],[671,174],[671,194],[524,201],[428,211],[347,219],[273,224],[197,227],[118,228]]},{name:"Поперечная улица",polygon:[[99,159],[125,164],[123,215],[124,280],[121,335],[128,366],[111,388],[93,367],[97,311],[96,250]]}],Jx=[{from:[521,298],to:[519,264],width:1.15,steps:7},{from:[636,283],to:[635,252],width:1,steps:7}],zi={outline:qx,walls:Yx,cellars:$x,wells:Zx,streets:Kx,stairs:Jx},Fu="652417590";function jn([i,t]){return[.0863102257*i-214318e-9*t-361.5408919,214318e-9*i+.0863102257*t+21.5871871]}const Es=zi.outline.map(jn);function so([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function zd(i,t,e){const n=i(-310,65)-1.41-.006*(t+355)+.008*(e-60);return Math.min(n,i(t,e)-.43)}const os=["#b7a58b","#c1b199","#ad9e88","#a9977e","#c8baa0","#a4947b"],Ou=["#c9b998","#b9aa8e","#c2b497","#b2a389","#d0bfa4"],Qx=new Ht("#a09472"),jx=new Ht("#97976b"),tv=new Ht("#94846b"),ev=new Ht("#62584a"),nv=new Ht("#a99a7e");function ri(i){const t=Math.sin(i*127.1+3.83)*43758.5453;return t-Math.floor(t)}function d0(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=(i[1]-t[1])*e/(2*n),o=(t[0]-i[0])*e/(2*n);return[[i[0]+s,i[1]+o],[t[0]+s,t[1]+o],[t[0]-s,t[1]-o],[i[0]-s,i[1]-o]]}const zn=([i,t],e)=>[i,e(i,t),t];function kd(i,t,e,n,s,o){i.face(o,zn(t,n),zn(e,n),zn(e,s),zn(t,s))}function Qo(i,t,e,n,s,o=.65){for(let r=0;r<t.length;r++){const a=t[r],l=t[(r+1)%t.length],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/o);for(let h=0;h<c;h++){const f=ft(a,l,h/c),u=ft(a,l,(h+1)/c);kd(i,f,u,e,n,s(h+r*97))}}}function iv(i,t,e,n,s,o,r,a){const l=Math.hypot(e[0]-t[0],e[1]-t[1]);if(l<.12)return;const c=(d,m)=>o(d,m)-r-.03,h=(d,m)=>o(d,m)+s,f=d0(t,e,n*.93);Qo(i,f,c,h,()=>"#897862",1.2),i.face("#8c7b66",...f.map(d=>zn(d,(m,_)=>h(m,_)-.028)));const u=Math.max(1,Math.round((s+r)/.31));for(let d=0;d<u;d++){const m=.66+ri(a+d)*.24;for(let _=-(d%2)*m*.52,g=0;_<l;_+=m,g++){const p=(Math.max(0,_)+.018)/l,x=(Math.min(_+m,l)-.018)/l;if(x<=p)continue;const M=a*101+d*31+g*7,v=d0(ft(t,e,p),ft(t,e,x),n*(.965+ri(M)*.09)),S=v.map(T=>ft(T,ft(v[0],v[2],.5),.06)),y=(s+r)/u,w=(T,C)=>o(T,C)-r+y*d+.012,b=(T,C)=>o(T,C)-r+y*(d+1)-.014+ri(M+1)*.09,E=os[Math.floor(ri(M+2)*os.length)];for(let T=0;T<4;T++){const C=(T+1)%4;i.face(E,zn(v[T],w),zn(v[C],w),zn(S[C],b),zn(S[T],b))}i.face(E,...S.map(T=>zn(T,b)))}}}function sv(i,t,e,n,s){const o=t.map(([p])=>p),r=t.map(([,p])=>p),a=.61,l=.065,c=(p,x)=>[p*Math.cos(l)-x*Math.sin(l),p*Math.sin(l)+x*Math.cos(l)],[h,f]=t[0],u=(p,x)=>c(p,x).map((M,v)=>M+(v===0?h:f)),d=Math.floor((Math.min(...o)-h-3)/a),m=Math.ceil((Math.max(...o)-h+3)/a),_=Math.floor((Math.min(...r)-f-10)/a),g=Math.ceil((Math.max(...r)-f+10)/a);for(let p=_;p<g;p++)for(let x=d;x<m;x++){const M=n*4241+p*397+x;if(ri(M+9)>s)continue;const v=(x+p%2*.5)*a,S=p*a,y=[u(v+.03+ri(M)*.07,S+.033),u(v+.57,S+.027+ri(M+2)*.07),u(v+.572-ri(M+3)*.08,S+.574),u(v+.03,S+.572-ri(M+4)*.07)];if(!y.every(b=>so(b,t)))continue;const w=(b,E)=>e(b,E)+.042+ri(M+6)*.028;i.face(Ou[Math.floor(ri(M+7)*Ou.length)],...y.map(b=>zn(b,w)))}}function ov(i,t,e){const n=me(i,"Раскоп Горгиппии · кладка и древние улицы",{surface:"stone"}),s=(c,h)=>zd(t,c,h),o=zi.cellars.map(({polygon:c,depth:h})=>({ring:c.map(jn),depth:h,holes:[]})),r=zi.wells.map(({point:c,radius:h,depth:f})=>{const[u,d]=jn(c),m=Array.from({length:12},(x,M)=>{const v=M*Math.PI/6;return[u+Math.cos(v)*h,d+Math.sin(v)*h]}),_=o.find(x=>m.every(M=>so(M,x.ring))),g=(x,M)=>s(x,M)-(_?.depth??0),p=_||m.every(x=>so(x,Es))&&!o.some(x=>m.some(M=>so(M,x.ring))||x.ring.some(M=>so(M,m)));return _&&_.holes.push(m),{ring:m,rim:g,depth:f,cut:p,cellar:_,center:[u,d]}}),a=[...o.map(c=>c.ring),...r.filter(c=>c.cut&&!c.cellar).map(c=>c.ring)],l=new Ht;e([Es,...a],s,(c,h,f)=>l.copy(Qx).lerp(jx,ue.clamp(.51+.32*Math.sin(c*.15+f*.19)+.19*Math.sin(c*.43-f*.24),0,1))),Qo(n,Es,s,(c,h)=>t(c,h)+.012,()=>"#a18f75");for(const{ring:c,depth:h,holes:f}of o){const u=(d,m)=>s(d,m)-h;e([c,...f],u,tv),Qo(n,c,u,s,()=>"#89785f")}for(const{ring:c,rim:h,depth:f,cut:u,center:d}of r){const m=(g,p)=>h(g,p)-(u?f:-.028);u?e([c],m,ev):n.face("#5f5342",...c.map(g=>zn(g,m))),Qo(n,c,m,(g,p)=>h(g,p)+.18,()=>"#80715e",2);const _=c.map(g=>ft(d,g,1.35));for(let g=0;g<c.length;g++){const p=(g+1)%c.length,x=(M,v)=>h(M,v)+.16+g%3*.021;kd(n,_[g],_[p],h,x,os[g%os.length]),n.face(os[g%os.length],...[c[g],_[g],_[p],c[p]].map(M=>zn(M,x)))}}for(const[c,{polygon:h,density:f}]of zi.streets.entries()){const u=h.map(jn);e([u],(d,m)=>s(d,m)+.025,nv),sv(n,u,s,c,f??.88)}for(const[c,{points:h,width:f,height:u}]of zi.walls.entries()){const d=h.map(jn);for(let m=1;m<d.length;m++){const _=d[m-1],g=d[m],p=ft(_,g,.5),x=o.reduce((M,{ring:v,depth:S})=>Math.max(M,v.some((y,w)=>{const b=v[(w+1)%v.length],E=b[0]-y[0],T=b[1]-y[1],C=ue.clamp(((p[0]-y[0])*E+(p[1]-y[1])*T)/(E*E+T*T),0,1);return Math.hypot(p[0]-y[0]-C*E,p[1]-y[1]-C*T)<f*.63})?S:0),0);iv(n,_,g,f,u,s,x,c*41+m)}}for(const{from:c,to:h,width:f,steps:u}of zi.stairs){const d=jn(c),m=jn(h),_=o.find(g=>so(m,g.ring))?.depth??.85;for(let g=0;g<u;g++){const p=d0(ft(d,m,g/u),ft(d,m,(g+1)/u),f),x=(v,S)=>s(v,S)-_,M=(v,S)=>x(v,S)+_*(1-g/u);n.face(os[g%os.length],...p.map(v=>zn(v,M))),Qo(n,p,x,M,()=>"#9a8a71",2)}}n.finish()}const rs=i=>i.map(jn),rv=[[126,399],[220,407],[350,432],[460,455],[536,471],[610,478],[712,485],[779,478],[865,499],[955,516],[1060,538],[1168,556]],Bu=[[748,295],[742,323],[729,352],[716,405],[712,462],[710,481]],zu=[0,0,.16,.67,1,1],av={position:jn([707,480]),look:jn([405,447]),pitch:-.19},Hi=[[-384.79,10.65],[-282.12,15.99],[-217.83,18.81],[-218.47,61.07],[-219.18,90.59],[-393.18,81.88],[-384.79,10.65]],Vi=Math.atan2(2.82,64.29);function Gd(i){const[t,e]=Hi[1];return i(t+1.44*Math.sin(Vi),e-1.44*Math.cos(Vi))}function Ac([i,t]){return i===-282.12&&t===15.99?2.62:i===-218.47&&t===61.07?1.45:0}const cv=[{name:"Дорожка у лапидария",points:[[-332,24],[-322,25],[-312,26],[-303,27.3],[-295,28.1]],widths:[2.45,2.7,2.7,2.6,2.6],surface:"paving",railSide:1},{name:"Подход от входной арки",points:[[-282.12,14],[-282.12,18],[-283.15,21.1],[-288.4,25.8],[-295,28.1]],widths:[2.5,2.5,2.7,2.6,2.6],surface:"paving"},{name:"Дорожка от площадки музея",points:[[-295,28.1],[-294.5,33.9],[-295.2,40.9],jn(Bu[0])],widths:[2.6,2.8,2.9,2.6],surface:"paving"},{name:"Дорожка вдоль южного борта",points:[...rs([[65,710],[475,724],[1030,743],[1560,759]]),[-221.6,87.8],[-221.1,63.1]],widths:[1.5,1.65,1.75,1.7,1.65,1.6],surface:"paving",railSide:-1},{name:"Подход к восточной калитке",points:[[-221.1,63.1],[-220.9,61.07],[-216.4,61.07]],widths:[1.6,1.6,1.55],surface:"paving"},{name:"Спуск к раскопу",points:rs(Bu),widths:[2.6,2.5,1.35,1.25,1.25,1.7],surface:"ramp",rails:[2,3]},{name:"Проход между подвалами",points:rs(rv),widths:[3.8,4,4.1,3.9,3.8,3.4,3.5,4.1,4.3,4.2,4.2,3.5],surface:"earth"},{name:"Выход с западных лестниц",points:rs([[129,368],[128,386],[126,399]]),widths:[1.5,1.8,2],surface:"earth"},...[368,401].flatMap(i=>[{name:"Западная площадка",points:rs([[43,i],[90,i]]),widths:[1.5,1.43],surface:"landing"},{name:"Западная лестница",points:rs([[90,i],[129,i]]),widths:[1.43,1.43],surface:"steps"}])],{clamp:lv,lerp:wa}=ue,hv=new Ht("#c7bda5"),ku=new Ht("#c1b9a6"),uv=new Ht("#a59b76"),Ea="#aa987f",$l="#52534c",Wo=9;function Dr(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=Math.hypot(e,n);return{a:i,b:t,dx:e,dz:n,length:s,nx:-n/s,nz:e/s}}function Gu(i,t){return i.points.map(([e,n],s)=>{const o=i.edges[Math.max(0,s-1)],r=i.edges[Math.min(i.edges.length-1,s)],a=Math.hypot(o.nx+r.nx,o.nz+r.nz),l=(o.nx+r.nx)/a,c=(o.nz+r.nz)/a,h=t*i.widths[s]/(2*Math.max(.66,l*r.nx+c*r.nz));return[e+l*h,n+c*h]})}function Hu(i,t,e){return i.rails?.includes(t)||i.railSide===e}function jo(i,t,{a:e,dx:n,dz:s,length:o}){const r=((i-e[0])*n+(t-e[1])*s)/(o*o),a=lv(r,0,1);return{raw:r,t:a,distance:Math.hypot(i-e[0]-n*a,t-e[1]-s*a)}}function fv(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}const dv=Hi.slice(1).map((i,t)=>{const e=Hi[t],{length:n}=Dr(e,i);return Dr(ft(e,i,Ac(e)/n),ft(e,i,1-Ac(i)/n))}),pv=zi.cellars.map(({polygon:i})=>rs(i)),mv=zi.walls.flatMap(({points:i,width:t})=>{const e=rs(i);return e.slice(1).map((n,s)=>({...Dr(e[s],n),width:t}))}),gv=zi.wells.map(({point:i,radius:t})=>({point:jn(i),radius:t}));function _v(i,t){return gv.some(({point:[e,n],radius:s})=>Math.hypot(i-e,t-n)<s*1.35+.18)||mv.some(e=>jo(i,t,e).distance<e.width/2+.18)||pv.some(e=>fv(i,t,e))}function xv(i,t,e){const[n,s]=Hi[1],o=(t-n)*Math.cos(Vi)+(e-s)*Math.sin(Vi),r=(e-s)*Math.cos(Vi)-(t-n)*Math.sin(Vi);if(Math.abs(o)>2.22||r<-1.44||r>.46)return;const a=r<-1.02?.135:r<-.6?.27:.405;return Gd(i)+a}function vv(i){const t=(f,u)=>zd(i,f,u),e=cv.map(f=>({...f,edges:f.points.slice(1).map((u,d)=>Dr(f.points[d],u))})).map(f=>({...f,left:Gu(f,-1),right:Gu(f,1)})),n=e.filter(f=>f.surface==="earth"),s=e.filter(f=>f.surface==="paving"),o=e.filter(f=>["steps","landing","ramp"].includes(f.surface)),r=e.flatMap(f=>[[-1,f.left],[1,f.right]].flatMap(([u,d])=>d.slice(1).flatMap((m,_)=>Hu(f,_,u)?[Dr(d[_],m)]:[])));function a(f,u,d,m,_){if(f==="earth")return t(m,_)+.055;if(f==="paving"||f==="landing")return i(m,_)+.054;const g=t(m,_)+.061,p=i(m,_)+.054;return f==="steps"?wa(p,g,Math.min(1,Math.floor(d*Wo)/(Wo-1))):wa(p,g,wa(zu[u],zu[u+1],d))}function l(f,u,d,m=0){let _;return f.edges.forEach((g,p)=>{const{raw:x,t:M,distance:v}=jo(u,d,g);(f.surface==="steps"||f.surface==="landing")&&(x<-1e-5||x>1.00001)||v>wa(f.widths[p],f.widths[p+1],M)/2-m||v>=(_?.distance??1/0)||(_={distance:v,height:a(f.surface,p,M,u,d)})}),_?.height}function c(f,u,d){if(f<-397||f>-211||u<9||u>92)return;if(dv.some(g=>jo(f,u,g).distance<.24)||r.some(g=>jo(f,u,g).distance<.15))return null;for(const g of o){const p=l(g,f,u,.12);if(p!==void 0)return p}if(d)return n.some(p=>l(p,f,u,.16)!==void 0)&&!_v(f,u)?t(f,u)+.055:null;const m=xv(i,f,u);return m!==void 0?m:s.some(g=>l(g,f,u)!==void 0)?i(f,u)+.054:void 0}function h(f,u){const d=me(f,"Горгиппия · дорожки и ограждения для посетителей");for(const m of e){const{left:_,right:g}=m;for(const[p,x]of m.edges.entries()){if(m.surface==="earth"&&p<3)continue;const M=[_[p],_[p+1],g[p+1],g[p]],v=(S,y)=>a(m.surface,p,jo(S,y,x).t,S,y);if(m.surface==="steps"){const S=(y,w)=>ft(y[p],y[p+1],w);for(let y=0;y<Wo;y++){const w=y/Wo,b=(y+1)/Wo,E=S(_,w),T=S(g,w),C=S(_,b),L=S(g,b),P=(F,V)=>a("steps",p,(w+b)/2,F,V),R=(F,V)=>a("steps",p,Math.max(0,w-.001),F,V);u([[E,C,L,T]],P,ku);const I=([F,V],H)=>[F,H(F,V),V];y&&d.face(Ea,I(E,R),I(T,R),I(T,P),I(E,P));const N=(F,V)=>t(F,V)-.02;d.face(Ea,I(E,P),I(C,P),I(C,N),I(E,N)),d.face(Ea,I(T,P),I(L,P),I(L,N),I(T,N))}}else m.surface==="earth"?u([M],(S,y)=>t(S,y)+.012,uv):u([M],v,m.surface==="ramp"?ku:hv);for(const[S,y]of[[-1,_],[1,g]]){const w=y[p],b=y[p+1],E=Math.hypot(b[0]-w[0],b[1]-w[1]),T=m.surface==="ramp"||m.surface==="landing",C=Hu(m,p,S);if(!C&&!T)continue;const L=Math.max(1,Math.ceil(E/(T?.62:1.75))),P=(R,I)=>{const[N,F]=ft(w,b,R);return[N,v(N,F)+I,F]};for(let R=0;R<L;R++){const I=R/L,N=(R+1)/L;if(T){const F=([V,H,J])=>[V,Math.min(H-.07,t(V,J)-.025),J];d.face(Ea,P(I,0),P(N,0),F(P(N,0)),F(P(I,0)))}if(C){for(const F of[.38,.83])d.beam(P(I,F),P(N,F),.027,$l);(!T||R%3===0)&&d.beam(P(I,0),P(I,.85),.047,$l),R===L-1&&d.beam(P(N,0),P(N,.85),.047,$l)}}}}}d.finish()}return{walkHeight:c,render:h}}function Mv(i,t,e,n,s){const o=new ge;o.name="Вода фонтана «Старинная Анапа»",o.position.set(t,e,n),i.add(o);const r=new Jc(new B(.32,.08,0),new B(1.12,2.25,0),new B(1.95,.07,0)),a=new Ro(r,24,.025,5,!1),l=new Gn({color:"#b5e9ea",transparent:!0,opacity:.55,depthWrite:!1});for(let g=0;g<8;g++){const p=new oe(a,l);p.rotation.y=-g*Math.PI/4,o.add(p)}const c=7,h=new dn(new vn(.065,6,4),new Gn({color:"#e6ffff",transparent:!0,opacity:.86,depthWrite:!1}),8*c);h.instanceMatrix.setUsage(Vf),h.frustumCulled=!1,o.add(h);const f=new jc(.96,1,40),u=Array.from({length:3},()=>{const g=new Gn({color:"#d9fbfa",transparent:!0,opacity:.3,side:en,depthWrite:!1}),p=new oe(f,g);return p.rotation.x=-Math.PI/2,p.position.y=.012,o.add(p),p}),d=new ye,m=new B;function _(g){for(let p=0;p<8;p++){const x=p*Math.PI/4;for(let M=0;M<c;M++){const v=(g*.53+M/c+p*.029)%1;r.getPoint(v,m),d.position.set(m.x*Math.cos(x),m.y,m.x*Math.sin(x));const S=.65+.35*Math.sin(Math.PI*v);d.scale.setScalar(S),d.updateMatrix(),h.setMatrixAt(p*c+M,d.matrix)}}h.instanceMatrix.needsUpdate=!0,u.forEach((p,x)=>{const M=(g*.34+x/u.length)%1;p.scale.setScalar(.55+M*2.05),p.material.opacity=.33*(1-M)})}_(0),s.push(_)}function yv(i,t){const e=(t%4+4)%4,[n,s,o,r]=i,a=e%2*.5+n,l=Math.floor(e/2)*.5+s;return[a,l,a+o,l+r]}const Fn=Object.freeze({parallaxX:.32,parallaxY:.18,maxOffset:.135,edgeFade:.12,fadeStart:.05,fadeEnd:.2,glintMotion:.65,glintStrength:.22,glintRange:Object.freeze([.025,.13]),sampleScale:.9,insetFraction:.006,insetTexels:2}),Xe="#e9e5d8",Zl="#e6ddc8",Kl="#5e4b3b",Oa="#7a7c75",Xo="#594741",rl="#517789",Ta="#d8ded9",Jl=new Map;function Sv(i){if(Jl.has(i))return Jl.get(i);const t={value:0},e={value:new vt(1/1024,1/1024)},n=new zr().load(`./${i}`,o=>{e.value.set(1/o.image.width,1/o.image.height),t.value=1});n.colorSpace=Ke,n.magFilter=Ye,n.minFilter=Or;const s={ready:t,atlasTexel:e,atlas:n};return Jl.set(i,s),s}function Ir(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=Math.sign(t),c=r*l/a,h=-o*l/a;return{a:e,b:s,length:a,nx:c,nz:h,point(f,u=0){return[e[0]+o*f/a+c*u,e[1]+r*f/a+h*u]}}})}function an(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function Oe(i,t,e,n,s,o,r,a=.045){i.wall(t.point(e,a),t.point(n,a),s,o,r)}function Vu(i,t,e,n,{spacing:s,fraction:o,sill:r,top:a,glass:l,windows:c}){const h=Math.max(1,Math.round(t.length/s)),f=t.length/h;for(let u=0;u<n;u++){const d=e+u*2.7;for(let m=0;m<h;m++){const _=(m+.5)*f,g=f*o/2;Oe(i,t,_-g-.08,_+g+.08,d+r-.08,d+a+.08,Xe),Oe(i,t,_-g,_+g,d+r,d+a,l,.065),Oe(i,t,_-.026,_+.026,d+r,d+a,Xe,.12);const p=d+r+(a-r)*.72;Oe(i,t,_-g,_+g,p-.025,p+.025,Xe,.12),c?.add(t,_-g,_+g,d+r,d+a,0,m+u*3)}}}function Wu(i,t,e,n,s,o,r,a){const l=(f,u)=>{const[d,m]=t.point(f,a);return[d,u,m]},c=l(e,s),h=12;for(let f=0;f<h;f++){const u=Math.PI*f/h,d=Math.PI*(f+1)/h;i.face(r,c,l(e+n*Math.cos(u),s+o*Math.sin(u)),l(e+n*Math.cos(d),s+o*Math.sin(d)))}}function bv(i,t,e,n,s,o,r,a){const l=s+.34,c=s+1.92;Oe(i,t,e-n-.07,e+n+.07,l-.07,c,Xe),Wu(i,t,e,n+.07,c,.46,Xe,.045),Oe(i,t,e-n,e+n,l,c,o,.065),Wu(i,t,e,n,c,.39,o,.065),r?.add(t,e-n,e+n,l,c,.39,a),Oe(i,t,e-.025,e+.025,l,c+.37,Xe,.12),Oe(i,t,e-n,e+n,c-.025,c+.025,Xe,.12)}function In(i,{path:t,name:e,crop:n=[.13,.094,.24,.334],interiorMix:s=1,glassTint:o="#7191a0",atlasGrid:r=2}){const a=[],l=[],c=[],h=[],f=(m,_,g)=>{for(const p of[m,_,g])a.push(...p.position),l.push(...p.uv),c.push(...p.bounds),h.push(...p.tangent)};function u(m,_,g,p,x,M,v,S=.105,y=n){const w=r===1?[y[0],y[1],y[0]+y[2],y[1]+y[3]]:yv(y,v),[b,E,T,C]=w,L=T-b,P=C-E,R=m.point(_,S),I=m.point(g,S),N=Math.hypot(I[0]-R[0],I[1]-R[1]),F=[(I[0]-R[0])/N,(I[1]-R[1])/N],V=x+M-p,H=(Ut,kt)=>{const[G,O]=m.point(Ut,S);return{position:[G,kt,O],uv:[b+L*(Ut-_)/(g-_),E+P*(kt-p)/V],bounds:w,tangent:F}},J=H(_,p),et=H(g,p),St=H(g,x),mt=H(_,x);if(f(J,et,St),f(J,St,mt),M>0){const Ut=(_+g)/2,kt=H(Ut,x);for(let G=0;G<12;G++){const O=Math.PI*G/12,Y=Math.PI*(G+1)/12;f(kt,H(Ut+(g-_)/2*Math.cos(O),x+M*Math.sin(O)),H(Ut+(g-_)/2*Math.cos(Y),x+M*Math.sin(Y)))}}}function d(){if(!a.length||typeof document>"u")return;const{ready:m,atlasTexel:_,atlas:g}=Sv(t),p=new Ae;p.setAttribute("position",new ee(a,3)),p.setAttribute("uv",new ee(l,2)),p.setAttribute("glassBounds",new ee(c,4)),p.setAttribute("glassTangent",new ee(h,2)),p.computeVertexNormals();const x=new jt({map:g,color:"#ffffff",side:en});x.onBeforeCompile=v=>{v.uniforms.cartoonEnabled=ms.cartoonEnabled,v.uniforms.windowAtlasReady=m,v.uniforms.glassAtlasTexel=_,v.uniforms.interiorMix={value:s},v.uniforms.glassTint={value:new Ht(o)},v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
          attribute vec4 glassBounds;
          attribute vec2 glassTangent;
          varying vec4 vGlassBounds;
          varying vec2 vGlassTangent;
          varying vec3 vGlassWorld;`).replace("#include <project_vertex>",`#include <project_vertex>
          vGlassBounds = glassBounds;
          vGlassTangent = (modelMatrix * vec4(glassTangent.x, 0.0, glassTangent.y, 0.0)).xz;
          vGlassWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
          uniform float cartoonEnabled, windowAtlasReady, interiorMix;
          uniform vec3 glassTint;
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
            glassColor.rgb = mix(glassTint, glassColor.rgb, interiorMix);
            diffuseColor *= glassColor;
            // A restrained diagonal glint tracks the viewing angle and fades
            // at the panel edge; scene lighting also dims it in the evening.
            float band = abs(panelUv.x + panelUv.y * 0.16 - 0.55 + sideways * ${Fn.glintMotion});
            float shine = 1.0 - smoothstep(${Fn.glintRange[0]}, ${Fn.glintRange[1]}, band);
            shine *= edgeFade * detailFade;
            diffuseColor.rgb += vec3(0.72, 0.88, 1.0) * ${Fn.glintStrength} * shine;
          #endif`)},x.customProgramCacheKey=()=>"starinnaya-panel-atlas-optics-v1";const M=new oe(p,x);M.name=e,M.receiveShadow=!0,i.add(M)}return{add:u,finish:d}}function wv(i,t,e,n,s){const o=n+.15,r=(l,c)=>{const[h,f]=t.point(l,.09);return[h,c,f]},a=12;for(let l=0;l<a;l++){const c=Math.PI*l/a,h=Math.PI*(l+1)/a;i.face(Xe,r(e+o*Math.cos(c),s+.38*Math.sin(c)),r(e+o*Math.cos(h),s+.38*Math.sin(h)),r(e+n*Math.cos(h),s+.25*Math.sin(h)),r(e+n*Math.cos(c),s+.25*Math.sin(c)))}}function p0(i,[t,e],n,s,o){const r=a=>Array.from({length:10},(l,c)=>{const h=c*Math.PI/5;return[t+o*a*Math.cos(h),e+o*a*Math.sin(h)]});i.shell(r(1.27),n,n+.13,Xe),i.shell(r(1),n+.13,s-.2,Xe,null),i.shell(r(1.21),s-.2,s,Xe)}function Ev(i,t,e,n){const s=Ir(t).filter(G=>G.length>.1),o=Be(t)[1],r=s.filter(({a:G,b:O,length:Y,nz:rt})=>Y>27&&rt<-.8&&(G[1]+O[1])/2<o-5).sort((G,O)=>Math.min(G.a[0],G.b[0])-Math.min(O.a[0],O.b[0]));if(r.length<2)return!1;const a=r[0].a,l=r.at(-1).b,c=l[0]-a[0],h=l[1]-a[1],f=Math.hypot(c,h),u={length:f,nx:h/f,nz:-c/f,point(G,O=0){return[a[0]+c*G/f+this.nx*O,a[1]+h*G/f+this.nz*O]}},d=s.find(G=>G.length>8.7&&G.length<10&&G.nz<-.8);if(!d)return!1;const m=8.6,_=In(i,{path:"art/starinnaya-window-interior-atlas.webp",name:"Старинная Анапа — индивидуальные окна",crop:[.005,.005,.49,.49]}),g=In(i,{path:"art/starinnaya-gallery-atlas.webp",name:"Старинная Анапа — стеклянная галерея",crop:[.005,.075,.49,.35]}),p=me(i,"Старинная Анапа",{surfaces:{glass:[rl,"#648591","#63767a","#397da8","#4b5553"],flatRoof:[Xo],stone:["#a89b85"],metal:["#484b47","#535a58",Kl]},textures:{[Zl]:{path:"art/starinnaya-cladding-pixel-v2.webp",size:[4,4],amount:.82,pixelated:!0},[Xo]:{path:"art/starinnaya-roof.webp",size:[12,12],amount:.72,pixelated:!0},[Kl]:{path:"art/starinnaya-bronze-glass.webp",size:[4,3],amount:.8,pixelated:!0}}}),x=e(...u.point(u.length/2,.7))+.08,M=Math.min(x-.15,...t.map(G=>e(...G)-.25)),v=x+3.3,S=x+11.55,y=x+11.9;p.flat(an(u,0,u.length,.8,8.2),x-.045,"#bbb7aa");for(let G=0;G<u.length;G+=.8)p.flat(an(u,G,Math.min(G+.024,u.length),.8,8.2),x-.037,"#aaa99f");for(let G=1.6;G<8.2;G+=.8)p.flat(an(u,0,u.length,G,G+.024),x-.037,"#aaa99f");p.shell(t,M,x+.26,"#a89b85",null),p.shell(t,x+.26,S,Zl,null),p.shell(t,S,y,Xe,Xo);for(const G of s){if(G.length<4.8)continue;const O=G.nz>.55,Y=G===d;if(Vu(p,G,v,Y?2:3,{spacing:O?3.4:3.12,fraction:O?.73:.57,sill:O?.49:.74,top:2.28,glass:O?"#648591":"#63767a",windows:_}),Y){const rt=G.length/3;for(let _t=0;_t<3;_t++)bv(p,G,(_t+.5)*rt,rt*.57/2,v+2*2.7,"#397da8",_,_t)}if(G.length>7&&G.length<8&&G.nz<-.8){const rt=G.length/2,_t=(G.a[0]+G.b[0])/2<Be(t)[0]?1:0;wv(p,G,(_t+.5)*rt,rt*.57/2,v+2.7+2.28)}r.includes(G)||Vu(p,G,x+.26,1,{spacing:3.3,fraction:.58,sill:.55,top:2.62,glass:"#4b5553"})}for(const G of[u]){const O=G.length-.3,Y=an(G,.3,O,-.1,.95);p.shell(Y,x+.35,v,"#524940",null);const rt=G===u?v-.83:v,_t=G===u?v+.36:v+.24;p.shell(an(G,0,G.length,-.15,G===u?1.49:1.22),rt,_t,Xe);const z=Math.round(G.length/2.12);for(let pt=0;pt<z;pt++){const q=.3+pt*(O-.3)/z,it=.3+(pt+1)*(O-.3)/z;Oe(p,G,q+.07,it-.07,x+.44,v-.1,Kl,.971),Oe(p,G,q+.018,q+.088,x+.44,v-.1,"#a0906d",.989)}const nt=Math.ceil(z/3);for(let pt=0;pt<nt;pt++){const q=Math.floor(pt*z/nt),it=Math.floor((pt+1)*z/nt),at=.3+q*(O-.3)/z,W=.3+it*(O-.3)/z;g.add(G,at+.07,W-.07,x+.44,v-.1,0,pt,.979)}}const w=u.length/2,b=w-6.2,E=w+6.2;Oe(p,u,w-1.18,w+1.18,x+.3,v-.16,"#393f3d",1.015);for(const G of[-1.18,0,1.18])Oe(p,u,w+G-.035,w+G+.035,x+.3,v-.16,"#a0906d",1.03);for(const[G,O]of[[-.83,-.76],[.29,.36]])p.shell(an(u,0,u.length,1.49,1.55),v+G,v+O,Xe);const[T,C]=u.point(w,1.505);Ie(i,{text:"СТАРИННАЯ АНАПА",position:[T,v-.58,C],size:[16,.78],outward:[u.nx,u.nz],color:"#a0803f",weight:600,fontFamily:"Georgia, serif",letterSpacing:"16px",lighting:"spot",glowColor:"#ffddad"});for(const G of[-4.95,-1.65,1.65,4.95])p0(p,u.point(w+G,1.17),x+.16,v,.21),p0(p,u.point(w+G,.85-m),v+.24,S-.08,.33);for(let G=0;G<3;G++){const O=v+.24+G*2.7;for(let Y=0;Y<3;Y++){const rt=d.length*(Y+.5)/3,_t=an(d,rt-1.23,rt+1.23,-.03,.54);p.shell(_t,O,O+.14,Xe);for(const z of[.28,1.03])Oe(p,d,rt-1.21,rt+1.21,O+z,O+z+.045,"#484b47",.55);for(let z=-5;z<=5;z++){const nt=rt+z*.22;Oe(p,d,nt,nt+.036,O+.27,O+1.04,"#484b47",.55)}}}p.shell(an(u,b,E,-.08-m,1.2-m),S-.09,y+.39,Xe);const L=(G,O)=>[G[0],O,G[1]],P=y+.39,R=y+2.24,I=L(u.point(w,1.2-m),R),N=L(u.point(w,-3.5-m),R),F=L(u.point(b,1.2-m),P),V=L(u.point(E,1.2-m),P);p.face(Xe,F,V,I),p.face(Xo,F,I,N,L(u.point(b,-3.5-m),P)),p.face(Xo,I,V,L(u.point(E,-3.5-m),P),N),p.face(Zl,L(u.point(b,-3.5-m),P),N,L(u.point(E,-3.5-m),P));for(const G of[-1.83,-.61,.61,1.83]){const O=w+G,Y=y+.02,rt=Array.from({length:10},(_t,z)=>{const nt=Math.PI/2+z*Math.PI/5,pt=z%2?.105:.245;return L(u.point(O+Math.cos(nt)*pt,1.225-m),Y+Math.sin(nt)*pt)});for(let _t=0;_t<rt.length;_t++)p.face("#a99973",L(u.point(O,1.225-m),Y),rt[_t],rt[(_t+1)%rt.length])}for(const G of r)for(const[O,Y]of G===u?[[.25,b],[E,G.length-.25]]:[[.25,G.length-.25]]){Oe(p,G,O,Y,y+.39,y+.45,"#535a58",-.2);for(let rt=O;rt<Y;rt+=1.7)Oe(p,G,rt,rt+.04,y,y+.45,"#535a58",-.2)}const H=an(u,w-19,w+19,7.9,17.5);p.flat(H,x-.09,"#bbb7aa");const[J,et]=u.point(w,13.3),St=x-.09,mt=G=>Array.from({length:32},(O,Y)=>{const rt=Y*Math.PI/16;return[J+Math.cos(rt)*G,et+Math.sin(rt)*G]});p.shell(mt(3.1),St-.12,St+.34,"#c5bfb2"),p.flat(mt(2.75),St+.35,"#68a6ad"),p.shell(mt(.27),St+.35,St+.43,"#c5bfb2"),Mv(i,J,St+.36,et,n);for(const G of[w-13,w+13]){const O=an(u,G-1.05,G+1.05,6,6.5);p.shell(O,x+.38,x+.48,"#4b4540");for(const Y of[-.8,.8]){const[rt,_t]=u.point(G+Y,6.25);p.beam([rt,x-.04,_t],[rt,x+.4,_t],.08,"#484b47")}}p.finish(),_.finish(),g.finish();const Ut=Sn(new jt({color:"#776952"}),{surface:"wood"}),kt=Sn(new jt({color:"#728e5e",flatShading:!0}),{surface:"foliage"});for(const[G,O]of[[w-20,10],[w+20,10]]){const[Y,rt]=u.point(G,O),_t=e(Y,rt),z=new oe(new yn(.25,.39,4.8,7),Ut);z.position.set(Y,_t+2.4,rt);const nt=new oe(new Zn(3.1,1),kt);nt.scale.set(1.05,1.18,.92),nt.position.set(Y,_t+6.7,rt),z.castShadow=nt.castShadow=!0,i.add(z,nt)}return!0}function m0(i,t,e,n,s,o=!1,r=null,a=0){for(const l of Ir(t))if(!(l.length<.35||o&&l.nz>.25))for(let c=0;c<n;c++){const h=e+c*2.62+.42,f=e+(c+1)*2.62-.31,u=Math.max(1,Math.round(l.length/1.48));for(let d=0;d<u;d++){const m=(d+.065)*l.length/u,_=(d+.935)*l.length/u;Oe(i,l,m,_,h,f,rl),Oe(i,l,m,_,h+(f-h)*.63,h+(f-h)*.63+.056,s,.12),r?.add(l,m,_,h,f,0,(a+d+c)%3)}}}function Ur(i,t,e,n,s,o,r,a,l=1.35,c=null,h=0){const f=Math.max(1,Math.round((n-e)/l)),u=(n-e)/f;Oe(i,t,e,n,s,o,a);for(let d=0;d<f;d++){const m=e+d*u+.045,_=m+u-.09;Oe(i,t,m,_,s+.05,o-.05,r,.065),Oe(i,t,m,_,o-.53,o-.48,a,.12),c?.add(t,m,_,s+.05,o-.05,0,(h+d)%3)}}function Hd(i,t,e,n,s,o,r){for(const l of[.45,.98])Oe(i,t,e,n,s+l,s+l+.055,r,o);const a=Math.max(1,Math.ceil((n-e)/1.6));for(let l=0;l<=a;l++){const c=e+(n-e)*l/a,[h,f]=t.point(c,o);i.beam([h,s,f],[h,s+1.025,f],.06,r)}}function Vd(i,t,e,n,s,o,r,a){const l=(h,f,u)=>{const[d,m]=t.point(h,f);return[d,u,m]},c=Math.ceil((n-e)/.69);for(let h=0;h<c;h++){const f=e+h*(n-e)/c,u=e+(h+1)*(n-e)/c,d=h%2?r:a;i.face(d,l(f,0,s),l(u,0,s),l(u,o,s-.47),l(f,o,s-.47)),Oe(i,t,f,u,s-.62,s-.47,d,o)}}function Tv(i,t,e,n,s){const o=e.length*.46,r=o-5.25,a=o+5.25,l=n+.59,c=l+2.65;i.shell(an(e,r,a,-.08,4.55),n-.22,n,"#d7c7a9");for(let d=0;d<4;d++)i.shell(an(e,r+d*.27,a-d*.27,0,2.42-d*.48),n+d*.1475,n+(d+1)*.1475,"#dacbad");Ur(i,e,o-2.65,o+2.65,l,c-.13,"#354f52","#dbc693",.88,s,2);for(const d of[-4.34,4.34])p0(i,e.point(o+d,2.81),n,c,.17);const h=[[r,0],[a,0],[a,2.26],[a-.62,2.86],[a-2.17,3.26],[r+2.17,3.26],[r+.62,2.86],[r,2.26]];i.shell(h.map(([d,m])=>e.point(d,m)),c,c+.31,Xe,Oa);const[f,u]=e.point(o,3.28);Ie(t,{text:"Капитан",position:[f,c+.6,u],size:[3.1,.56],outward:[e.nx,e.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"})}function Av(i,t,e){if(t.length!==17)return!1;const n="#e3d4ad",s=me(i,"Капитан",{surfaces:{glass:[rl,"#54777f","#3f5e66"],flatRoof:[Oa,"#987561"],stone:["#a39881"]},textures:{[n]:{path:"art/kapitan-cream-pixel.webp",size:[4,4],amount:.72,pixelated:!0},"#d9be8b":{path:"art/kapitan-cream-pixel.webp",size:[4,4],amount:.72,pixelated:!0}}}),o=In(i,{path:"art/waterfront-window-interior-atlas.webp",interiorMix:.38,name:"Капитан — окна и отражения",crop:[.005,.005,.49,.49]}),r=t.slice(2,12),a=[t[2],...t.slice(11,16)],l=[...t.slice(0,3),...t.slice(15)],c=e.lowerWaterfront??e,h=Math.min(...t.map(y=>c(...y)))-.25,f=Math.min(...r.map(y=>c(...y)))+.12,[u,d]=Ir(a).slice(1,3),m=Ir(l).at(-1),_=e(...m.point(m.length*.46,4.55)),g=e(...d.point(d.length/2,2)),p=g+2.89;s.shell(t,h,f+.27,"#a39881",null),s.shell(a,f+.27,p,n,null),s.shell(a.map(y=>ft(Be(a),y,1.032)),p,p+.28,Ta,"#987561"),m0(s,a,f+.1,2,Ta,!1,o,1),Ur(s,u,.38,u.length-.38,f+5.48,p-.12,"#54777f","#cedad5",1.67,o,2),Oe(s,u,.38,u.length-.38,g-.06,g+.05,Ta,.083);const x=an(u,.3,u.length-.3,-.07,1.03);s.shell(x,f+2.68,f+2.84,"#c3bfb4"),Hd(s,u,.38,u.length-.38,f+2.84,.97,"#afb5b0"),Vd(s,u,.35,u.length-.35,f+5.36,1.24,"#b6a481","#d5c8a5"),Ur(s,d,1.03,d.length-.6,g+.14,p-.12,"#3f5e66",Ta,1.35,o,3),s.shell(an(d,.48,d.length-.12,0,1.26),p-.1,p+.32,Xe);const[M,v]=d.point(d.length*.57,1.28);Ie(i,{text:"Кафе Капитан",position:[M,p+.18,v],size:[5.2,.57],outward:[d.nx,d.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"}),s.shell(r,f+.27,f+7.52,n,null);const S=r.map(y=>ft(Be(r),y,1.046));return s.shell(S,f+7.52,f+7.85,Xe,Oa),m0(s,r,f-.03,3,Xe,!0,o),s.shell(l,f+.27,_+3.62,"#d9be8b",Oa),Tv(s,i,m,_,o),s.finish(),o.finish(),!0}const Rv={170958817:{number:1,roof:"#8a8f8d",wall:"#d5cbb6",frame:"#c8d4d2"},223948923:{number:5,roof:"#aca99d",wall:"#658195",frame:"#deddd3"},223948927:{number:7,roof:"#aaa492",wall:"#bcb29a",frame:"#dfd8bf"}};function Cv(i,t,e,{number:n,roof:s,wall:o,frame:r}){const a=`art/lower-waterfront-${n}-wall.webp`,l=`art/lower-waterfront-${n}-windows.webp`,c=me(i,`Набережная, ${n}`,{surfaces:{glass:[rl,"#526870","#6c858b"],flatRoof:[s,"#c4c7c2"],stone:["#a99e88"]},textures:{[o]:{path:a,size:[4,4],amount:.62,pixelated:!0}}}),h=In(i,{path:l,interiorMix:.45,name:`Набережная, ${n} — окна и отражения`,crop:n===7?[.015,.015,.47,.47]:[.005,.005,.49,.49]}),f=e.lowerWaterfront??e,u=Ir(t).filter(x=>x.nz<-.52),d=u.map(x=>f(...x.point(x.length/2))),m=t.map(x=>f(...x)),_=Math.min(...m)-.25,g=Math.min(...d.length?d:m)+.11,p=g+5.51;if(c.shell(t,_,g+.27,"#a99e88",null),c.shell(t,g+.27,p,o,null),c.shell(t.map(x=>ft(Be(t),x,1.02)),p,p+.24,r,s),n===1)m0(c,t,g+.15,2,r,!0,h,1);else for(const x of u){const M=x.length-.36;if(Ur(c,x,.36,M,g+.42,g+2.71,"#526870",r,1.35,h,n),Ur(c,x,.36,M,g+3.03,p-.23,"#6c858b",r,1.47,h,n+2),n===5){const v=an(x,.15,x.length-.15,0,1.57);c.shell(v,g-.12,g+.41,"#aea69c");const S=an(x,.05,x.length-.05,0,1.68);c.shell(S,g+2.75,g+3.07,"#276583","#c4c7c2"),Oe(c,x,.19,x.length*.47,g+2.77,g+3.06,r,1.7);const y=x.length*.22;Hd(c,x,y+2.3,M,g+.41,1.48,"#c2c7c3"),c.shell(an(x,.15,y+2.28,1.54,2.01),g-.12,g+.23,"#a49e96");for(const w of[.33,x.length*.51,M])c.shell(an(x,w-.12,w+.12,1.32,1.56),g+.41,g+2.75,o)}else Oe(c,x,.36,M,g+3.12,g+3.21,"#bc9d58",.085),Vd(c,x,.26,x.length-.26,p-.05,1.42,"#c8a851","#f0e6ca")}return c.finish(),h.finish(),!0}function Pv(i,t,e,n=[]){if(t.id==="r11979734-0")return Ev(i,t.rings[0],e,n);if(t.id==="156055903")return Av(i,t.rings[0],e);const s=Rv[t.id];return s?Cv(i,t.rings[0],e,s):!1}const Rc="#dfd7c1",tn="#f0eee6",Lv="#526e7c",bs="#343d3d";function Ba([i,t],e){const n=e/2;return[[i-n,t-n],[i+n,t-n],[i+n,t+n],[i-n,t+n]]}function Dv([i,t],[e,n]){const s=Math.hypot(e-i,n-t),o=(e-i)/s,r=(n-t)/s;return(a,l)=>[i+o*a+r*l,t+r*a-o*l]}function qo(i,t,e,n,s,o,r,a,l,c=0){Ci(i,e,n,s,o,r,a,l);const h=Math.max(1,Math.round(Math.hypot(n[0]-e[0],n[1]-e[1])/a));for(let f=0;f<h;f++){const u=ft(s,ft(e,n,(f+.035)/h),1.003),d=ft(s,ft(e,n,(f+.965)/h),1.003),m=d[0]-u[0],_=d[1]-u[1],g=Math.hypot(m,_);if(g<.001)continue;const p=ft(u,d,.5),x=(p[0]-s[0])*-_+(p[1]-s[1])*m>=0?1:-1,M=-_/g*x,v=m/g*x,S={point:(y,w)=>[u[0]+m*y/g+M*w,u[1]+_*y/g+v*w]};t.add(S,0,g,o,r,0,c+f,.035)}}function Iv(i,t,e){const n=Dv(t[0],t[1]),o=(e.lowerWaterfront??e)(...n(9,27))+.65,r=Math.min(...t.map(G=>e(...G)))-.2,a=Be(t),l="#7295bf",c="#415f88",h="#636b71",f="#b8bdba",u=me(i,"Пароходъ",{surfaces:{metal:[l,f,c],paving:[h],stone:[Rc],glass:["#40484a","#4b5256"]},textures:{[l]:{path:"art/parohod-blue-enamel.webp",size:[4,4],amount:.68,pixelated:!0}}}),d=In(i,{path:"art/parohod-window-atlas.webp",name:"Пароходъ — окна и морские отражения",crop:[.005,.005,.49,.49],interiorMix:.38,glassTint:"#668b9c"});u.shell(t,Math.min(r,o-.2),o+.25,Rc);const m=t.map(G=>ft(a,G,.83));u.shell(m,o+.25,o+2.85,"#40484a",null),u.shell(t,o+2.85,o+3.08,tn,h);for(let G=2;G<=13;G++){const O=t[G],Y=t[G+1];qo(u,d,m[G],m[G+1],a,o+.52,o+2.76,2.15,"#d9dbd6",G);const rt=Math.max(1,Math.round(Math.hypot(O[0]-Y[0],O[1]-Y[1])/2.5));for(let _t=0;_t<rt;_t++){const z=ft(a,ft(O,Y,_t/rt),.97);u.shell(Ba(z,.28),o+.25,o+2.85,tn,null)}}const _=[n(28.3,24),n(31,16.2)],g=e(..._[0])+.025,p=o+3.08,x=[n(27.2,15.4),n(31.95,15.4),n(31.95,17),n(27.2,17)];u.shell(x,p-.14,p,f,h);const M=[.89,.31],v=(G,O)=>{const Y=ft([28.3,24],[31,16.2],G);return n(Y[0]+M[0]*O,Y[1]+M[1]*O)},S=19;for(let G=0;G<S;G++){const O=G/S,Y=(G+1)/S,rt=ue.lerp(g,p,Y);u.shell([v(O,-1),v(Y,-1),v(Y,1),v(O,1)],rt-.09,rt,f,h)}for(const G of[-1,1]){const O=(Y,rt)=>{const[_t,z]=v(Y,G);return[_t,ue.lerp(g,p,Y)+rt,z]};u.beam(O(0,.98),O(1,.98),.07,tn),u.beam(O(0,.51),O(1,.51),.045,f);for(const Y of[.03,.22,.42,.62,.82,1])u.beam(O(Y,.1),O(Y,.98),.055,tn)}const y=[[-16,7.5,15],[-10,4,17],[-2,2.1,17.7],[24,1.7,18.1],[30,1.7,13.2],[34,5.8,9]],w=y.map(([G,,O])=>n(G,O)),E=y.map(([G,O])=>n(G,O)).concat(w.slice().reverse());u.shell(E,o+3.08,o+6.5,tn,null);const T=Be(E);for(let G=1;G<w.length;G++)qo(u,d,w[G-1],w[G],T,o+3.4,o+6.24,1.85,tn,G+2);const C=o+6.52,L=o+7.72;function P([G,O,Y]){return[[...n(G,O),C],[...n(G,O+(Y-O)*.46),L],[...n(G,Y),C]].map(([rt,_t,z])=>[rt,z,_t])}let R=0;for(let G=1;G<y.length;G++){const O=P(y[G-1]),Y=P(y[G]),rt=Math.max(1,Math.round((y[G][0]-y[G-1][0])/2));for(let _t=0;_t<rt;_t++){const z=O.map((q,it)=>ft(q,Y[it],_t/rt)),nt=O.map((q,it)=>ft(q,Y[it],(_t+1)/rt)),pt=R++%2===0?l:tn;u.face(pt,z[0],nt[0],nt[1],z[1]),u.face(pt,z[1],nt[1],nt[2],z[2])}}u.face(tn,...P(y[0])),u.face(tn,...P(y.at(-1)));const I=n(13,14.8),N=t.slice(4,10).map(G=>ft(I,G,.95)),F=[I,...N];u.shell(F,o+3.08,o+3.42,tn),u.shell(F,o+3.42,o+4.92,"#4b5256",null),R=0,N.slice(1).forEach((G,O)=>{const Y=N[O];qo(u,d,Y,G,I,o+3.57,o+4.83,1.65,f,O+1);const rt=ft(I,Y,1.011),_t=ft(I,G,1.011);u.wall(rt,_t,o+3.65,o+4.12,"#79444e");for(const nt of[3.48,3.71,4.24])u.beam([rt[0],o+nt,rt[1]],[_t[0],o+nt,_t[1]],.052,tn);const z=Math.max(2,Math.round(Math.hypot(G[0]-Y[0],G[1]-Y[1])/1.25));for(let nt=0;nt<z;nt++){const pt=ft(Y,G,nt/z),q=ft(Y,G,(nt+1)/z);u.face(R++%2===0?l:tn,[pt[0],o+4.96,pt[1]],[q[0],o+4.96,q[1]],[I[0],o+5.85,I[1]])}});const V=t.slice(9,17).map(G=>ft(n(-9.5,24),G,.94)),H=Be(V);u.shell(V,o+3.08,o+6.75,tn,h);const J=V.map(G=>ft(H,G,1.024));u.shell(J,o+4.38,o+5.1,c,null),u.shell(V.map(G=>ft(H,G,1.026)),o+6.75,o+6.94,c,h),V.slice(1).forEach((G,O)=>{qo(u,d,V[O],G,H,o+3.45,o+4.38,1.4,tn,O),qo(u,d,V[O],G,H,o+5.16,o+6.1,1.55,tn,O+2)});const[et,St]=J.slice(1,3),mt=Math.hypot(St[0]-et[0],St[1]-et[1]),Ut=[(et[1]-St[1])/mt,(St[0]-et[0])/mt],kt=ft(et,St,.48);Ie(i,{text:"ПАРОХОДЪ",position:[kt[0]+Ut[0]*.055,o+4.75,kt[1]+Ut[1]*.055],size:[6.6,.69],outward:Ut,color:tn,background:c,lighting:"backlit",glowColor:"#d4e9ff"}),u.finish(),d.finish()}function Uv(i,t,e,n){const s="PARK-HOTEL",o=[1.45,1.67,1.52,1.52,1.08,1.56,1.68,1.51,1.39,1.36],r=.42,a=e.slice(0,8).reverse(),l=a.slice(1).map((f,u)=>{const d=a[u],m=Math.hypot(f[0]-d[0],f[1]-d[1]);return{a:d,b:f,length:m,outward:[(d[1]-f[1])/m,(f[0]-d[0])/m]}}),c=o.reduce((f,u)=>f+u,0)+r*(s.length-1);let h=(l.reduce((f,u)=>f+u.length,0)-c)/2;for(const[f,u]of[...s].entries()){const d=o[f];let m=h+d/2;for(const{a:_,b:g,length:p,outward:x}of l){if(m>p){m-=p;continue}const[M,v]=ft(_,g,m/p),[S,y]=x;t.beam([M-S*.06,n+.43,v-y*.06],[M-S*.06,n+.89,v-y*.06],.075,bs),Ie(i,{text:u,position:[M+S*.07,n+1.13,v+y*.07],size:[d,1.8],outward:x,color:"#e7cc87",weight:850,lighting:"neon",glowColor:"#ff5540",spill:f===5});break}h+=d+r}}function Xu(i,t,e,n,s,o,r,a,l=!1){const c=ft(n,t,1.003),h=ft(n,e,1.003),f=h[0]-c[0],u=h[1]-c[1],d=Math.hypot(f,u);if(d<.001)return;const m=u/d,_=-f/d,g={point:(x,M)=>[c[0]+f*x/d+m*M,c[1]+u*x/d+_*M]},p=Math.max(1,Math.round(Math.hypot(t[0]-e[0],t[1]-e[1])/r));for(let x=0;x<p;x++)i.add(g,d*(x+.035)/p,d*(x+.965)/p,s,o,0,l?(a+x)%3:a+x,.035)}function Nv(i,t,e){const n=Math.min(...t.map(g=>e(...g)))+.06,s=n-.36,o=Be(t),r="#99655f",a="#d6c9b8",l="#6f6460",c=me(i,"Парк-отель Анапа",{surfaces:{flatRoof:[l],stone:[a]},textures:{[r]:{path:"art/parkhotel-bronze-pixel.webp",size:[5,4],amount:.62,pixelated:!0}}}),h=In(i,{path:"art/parkhotel-rooms-atlas.webp",interiorMix:.35,name:"Парк-отель — окна и отражения",crop:[.005,.005,.49,.49]}),f=In(i,{path:"art/waterfront-window-interior-atlas.webp",interiorMix:.35,name:"Парк-отель — первый этаж",crop:[.005,.005,.49,.49]}),u=n+2.85,d=2.91;c.shell(t,s,u,a,null);for(let g=0;g<t.length;g++){const p=t[g],x=t[(g+1)%t.length],[M,v]=ft(p,x,.5);v<o[1]-2&&e(M,v)<n+.8&&(Ci(c,p,x,o,n+.46,u-.35,2.1,a),Xu(f,p,x,o,n+.46,u-.35,2.1,g,!0))}for(let g=0;g<4;g++){const p=u+g*d;c.shell(t,p,p+d,Rc,null);for(let x=0;x<t.length;x++){const M=t[x],v=t[(x+1)%t.length],[S,y]=ft(M,v,.5);if(Math.hypot(v[0]-M[0],v[1]-M[1])<1.2)continue;const w=S<o[0]-6||g===3?r:a;c.wall(ft(o,M,1.003),ft(o,v,1.003),p+.05,p+.86,w),(y<o[1]+14||x%2===0)&&(Ci(c,M,v,o,p+.9,p+2.64,1.43,w===r?"#d8bfb0":"#eee8db"),Xu(h,M,v,o,p+.9,p+2.64,1.43,x+g*3))}}const m=u+4*d;c.shell(t,m,m+.48,r,l);const _=t.filter(([g,p])=>g<o[0]-11&&p>o[1]-1);if(_.length>=4){const g=_.map(p=>ft(Be(_),p,.68));c.shell(g,m+.48,m+1.68,r,l)}Uv(i,c,t,m),c.finish(),h.finish(),f.finish()}function Fv(i,t,e){const n=t.rings[0],s=t.id==="223949001",o=Be(n),r=s?e(...o):e(-263.52,25.47),a=Math.min(...n.map(v=>e(...v)))-.25,l="#e5dfcd",c=s?"#94877d":"#ad5d51",h=me(i,"Музей Горгиппия",{surfaces:{roof:[c],glass:["#556161"],stone:["#a69a82"]},textures:{[l]:{path:"art/gorgippiya-museum-plaster.webp",size:[4,4],amount:.6,pixelated:!0}}}),f=In(i,{path:"art/gorgippiya-window-atlas.webp",name:"Горгиппия — окна музейных корпусов",crop:[.015,.015,.47,.47],interiorMix:.42,glassTint:"#758a88"}),u=r+4.25,d=t.id==="142489024"||s?[n[0],n[1],n[3],n[4]]:n.slice(0,4);Math.hypot(d[1][0]-d[0][0],d[1][1]-d[0][1])>Math.hypot(d[2][0]-d[1][0],d[2][1]-d[1][1])&&d.push(d.shift()),h.shell(n,Math.min(a,r),r+.5,"#a69a82",null),h.shell(n,r+.5,u,l,null);const m=ft(d[0],d[1],.5),_=ft(d[2],d[3],.5),g=[ft(m,_,.23),ft(m,_,.77)].map(([v,S])=>[v,u+(s?1.65:2.25),S]),p=d.map(([v,S])=>[v,u,S]);h.face(c,p[0],p[1],g[0]),h.face(c,p[1],p[2],g[1],g[0]),h.face(c,p[2],p[3],g[1]),h.face(c,p[3],p[0],g[0],g[1]);const x=s?[n[0],n[1]]:[n[4],n[0]],M=s?6:4;for(let v=0;v<M;v++){const S=ft(o,ft(x[0],x[1],(v+.32)/M),1.005),y=ft(o,ft(x[0],x[1],(v+.66)/M),1.005);h.wall(S,y,r+1.25,r+3.03,"#556161");const w=y[0]-S[0],b=y[1]-S[1],E=Math.hypot(w,b);if(E>.001){const T=ft(S,y,.5),C=(T[0]-o[0])*-b+(T[1]-o[1])*w>=0?1:-1,L={point:(P,R)=>[S[0]+w*P/E-C*b*R/E,S[1]+b*P/E+C*w*R/E]};f.add(L,0,E,r+1.25,r+3.03,0,v,.035)}}if(t.id==="142489024")for(const v of[.19,.81]){const S=n[0],y=n[1],w=Array.from({length:16},(b,E)=>{const T=E*Math.PI/8,[C,L]=ft(o,ft(S,y,v+.035*Math.cos(T)),1.006);return[C,r+2.5+.46*Math.sin(T),L]});h.face(Lv,...w)}h.finish(),f.finish()}function Ov(i,t,e){if(t.id==="170958806")Iv(i,t.rings[0],e);else if(t.id==="1546378584")Nv(i,t.rings[0],e);else if(["142489024","218983841","223949001"].includes(t.id))Fv(i,t,e);else return!1;return!0}function Bv(i,t){const e=me(i,"Вход в Горгиппию"),[n,s]=Hi[1],o=t(n,s),r=Vi,a=(h,f,u=0)=>[n+Math.cos(r)*h-Math.sin(r)*u,o+f,s+Math.sin(r)*h+Math.cos(r)*u];for(let h=1;h<Hi.length;h++){const f=Hi[h-1],u=Hi[h],d=Math.hypot(u[0]-f[0],u[1]-f[1]),m=ft(f,u,Ac(f)/d),_=ft(f,u,1-Ac(u)/d),g=Math.hypot(_[0]-m[0],_[1]-m[1]),p=Math.ceil(g/2.6),x=(M,v)=>{const[S,y]=ft(m,_,M);return[S,t(S,y)+v,y]};for(let M=0;M<p;M++){const v=M/p,S=(M+1)/p;for(const[y,w,b]of[[.14,.23,"#b1a992"],[.37,.037,bs],[1.21,.043,bs]])e.beam(x(v,y),x(S,y),w,b);e.beam(x(v,.22),x(v,1.31),.068,bs);for(let y=1;y<=5;y++){const w=v+(S-v)*y/6;e.beam(x(w,.36),x(w,1.25),.024,bs)}}}for(const h of[-2.55,2.55]){const[f,,u]=a(h,0);e.shell(Ba([f,u],.63),o-.45,o+2.56,tn),e.shell(Ba([f,u],.83),o+2.56,o+2.72,Rc),e.shell(Ba([f,u],.88),o+2.72,o+3.48,tn);const d=Array.from({length:20},(m,_)=>{const g=_*Math.PI/10;return a(h+Math.cos(g)*.31,3.1+Math.sin(g)*.31,-.445)});e.face("#98694b",...d)}for(const h of[0,.27,.55]){const f=Array.from({length:11},(u,d)=>{const m=d/5-1;return a(m*2.17,2.8+h+(1-m*m)*.68)});f.slice(1).forEach((u,d)=>e.beam(f[d],u,.045,tn))}const l={Г:[[[0,0],[0,1],[1,1]]],О:[[[.22,0],[.78,0],[1,.18],[1,.82],[.78,1],[.22,1],[0,.82],[0,.18],[.22,0]]],Р:[[[0,0],[0,1],[.78,1],[1,.82],[1,.65],[.78,.49],[0,.49]]],И:[[[0,1],[0,0],[1,1],[1,0]]],П:[[[0,0],[0,1],[1,1],[1,0]]],Я:[[[1,0],[1,1],[.22,1],[0,.82],[0,.65],[.22,.49],[1,.49]],[[0,0],[.44,.49]]]};Array.from("ГОРГИППИЯ").forEach((h,f)=>{const u=(f-4)*.425,d=3.02+(1-(u/2.17)**2)*.68;for(const m of l[h]){const _=m.map(([g,p])=>a(-u-(g-.5)*.32,d+p*.43,-.045));_.slice(1).forEach((g,p)=>e.beam(_[p],g,.043,"#9e5345"))}});const c=Gd(t);for(let h=0;h<3;h++){const f=-1.44+h*.42,u=[[-2.22,f],[2.22,f],[2.22,.46],[-2.22,.46]].map(([m,_])=>{const[g,,p]=a(m,0,_);return[g,p]}),d=h===0?c-.2:c+h*.135;e.shell(u,d,c+(h+1)*.135,"#c8b697")}for(const h of[-1,1]){for(let f=0;f<=6;f++){const u=h*(1.15+f*.16);e.beam(a(u,.26),a(u,1.78),.032,bs)}for(const f of[.32,1.7])e.beam(a(h*1.15,f),a(h*2.2,f),.046,bs)}e.finish()}function zv(i,t){Bv(i,t)}const ao="#eeeee7",hs="#f3f1e7",za="#294d6a",Wd="#496b83",Xd={glass:[Wd,"#7694a3"],metal:[za,"#4d7494"],flatRoof:["#c2c7c2","#c7c8bf","#c6c8c4"],stone:["#c7bcab"]},qd={[ao]:{path:"art/ocean-white-pixel.webp",size:[5,4],amount:.67,pixelated:!0}};function _r(i){return i.map(([t,e],n)=>{const[s,o]=i[(n+1)%i.length],r=Math.hypot(s-t,o-e);return{x:t,z:e,length:r,ux:(s-t)/r,uz:(o-e)/r}})}function Je(i,t,e=0){return[i.x+i.ux*t-i.uz*e,i.z+i.uz*t+i.ux*e]}function qu(i,t){return i.map((e,n)=>{const s=(n+i.length-1)%i.length,o=i[s],r=Je(o,0,t[s]),a=Je(e,0,t[n]),l=o.ux*e.uz-o.uz*e.ux,c=((a[0]-r[0])*e.uz-(a[1]-r[1])*e.ux)/l;return[r[0]+o.ux*c,r[1]+o.uz*c]})}function g0(i,t,e,n,s){return[Je(i,t,n),Je(i,e,n),Je(i,e,s),Je(i,t,s)]}function Eo(i,t,e,n,s,o,r=Wd,a=.025){i.wall(Je(t,e,-a),Je(t,n,-a),s,o,r)}function Cc(i){return{point:(t,e)=>Je(i,t,-e)}}function kv(i,t,e,n,s,o){const r=n?Math.max(1,Math.round(t.length/4.15)):1,a=Math.min(n?2.38:.93,t.length/r*.69);for(let l=0;l<r;l++){const c=t.length*(l+.5)/r,h=e+(n?.37:1.02),f=e+2.37;Eo(i,t,c-a/2,c+a/2,h,f),n&&Eo(i,t,c-.038,c+.038,h,f,"#7694a3",.08),s.add(Cc(t),c-a/2,c+a/2,h,f,0,o+l,.055)}}function Gv(i,t,e){const[n,s]=Je(t,0,.055),[o,r]=Je(t,t.length,.055);i.beam([n,e+.26,s],[o,e+.26,r],.065,za),i.beam([n,e+1.08,s],[o,e+1.08,r],.075,za);const a=Math.ceil(t.length/.215);for(let l=0;l<a;l++){const c=t.length*(l+.5)/a;i.wall(Je(t,c-.016,.055),Je(t,c+.016,.055),e+.26,e+1.08,za)}}function Hv(i,t,e,n,s){const o=n+.9,r=e.length*.2,a=e.length*.8,l=s(...Je(e,e.length/2,-2.9));for(let u=0;u<6;u++){const d=-2.9+u*.42,m=l+(o-l)*(u+1)/6;t.shell(g0(e,r,a,d,.04),Math.min(m-.05,l-.08),m,"#c7bcab")}t.shell(g0(e,r-.9,a+.9,-2.3,.04),n+3.24,n+3.56,hs);const c=(r+a)/2;Eo(t,e,c-4.4,c+4.4,n+2.74,n+3.23,hs,.055);const[h,f]=Je(e,c,-.082);Ie(i,{text:"анапа-океан",position:[h,n+2.99,f],size:[8.1,.62],outward:[e.uz,-e.ux],color:"#155d8a",weight:850,lighting:"backlit",glowColor:"#6ac8ff"})}function Vv(i,t,e){const n=me(i,"Анапа-Океан — 13 этажей",{surfaces:Xd,textures:qd}),s=In(i,{path:"art/waterfront-window-interior-atlas.webp",interiorMix:.35,name:"Анапа-Океан — окна башни",crop:[.005,.005,.49,.49]}),o=In(i,{path:"art/ocean-rooms-atlas.webp",interiorMix:.36,name:"Анапа-Океан — номера",crop:[.005,.005,.49,.49]}),r=_r(t),a=new Set([0,1,3,4,5,6]),l=qu(r,r.map((x,M)=>a.has(M)?1.5:.05)),c=_r(l),h=e(...Je(r[0],r[0].length/2)),f=Math.min(...t.map(x=>e(...x)))-.3,u=h+3.65,d=12,m=2.97,_=u+d*m;n.shell(t,f,u,ao,hs);for(const[x,M]of r.slice(0,3).entries()){const v=Math.max(2,Math.round(M.length/2.3));for(let S=0;S<v;S++){const y=M.length*(S+.055)/v,w=M.length*(S+.945)/v;Eo(n,M,y,w,h+.95,h+3.22),s.add(Cc(M),y,w,h+.95,h+(x===0?2.68:3.22),0,[0,1,2][S%3],.055)}}Hv(i,n,r[0],h,e),n.shell(l,u,_,ao,"#c2c7c2");for(let x=0;x<d;x++){const M=u+m*x,v=x<d-1;v&&(n.shell(t,M,M+.22,hs),n.flat(t,M,hs));for(let S=0;S<r.length;S++){const y=a.has(S);kv(n,c[S],M,y,o,x*3+S),y&&v&&Gv(n,r[S],M)}}const g=qu(r,r.map(()=>.4)),p=_r(g);n.shell(g,_-.17,_+.45,ao,"#c7c8bf");for(const[x,M]of[[2,1.37],[7,1.05]]){const v=p[x];n.shell(g0(v,.7,v.length-.7,.02,2.1),_+.45,_+M,ao)}n.finish(),s.finish(),o.finish()}function Wv(i,t,e){const n=me(i,"Анапа-Океан — низкое крыло",{surfaces:Xd,textures:qd}),s=In(i,{path:"art/waterfront-window-interior-atlas.webp",interiorMix:.38,name:"Анапа-Океан — окна крыла",crop:[.005,.005,.49,.49]}),o=[...t.slice(0,9),t[15]],r=t.slice(8),a=e(...Be(o)),l=e(...Be(r)),c=a+3.9,h=l+6.25,f="#4d7494";for(const[p,x,M]of[[o,a,c],[r,l,h]]){const v=Math.min(...p.map(y=>e(...y)))-.3;n.shell(p,v,M,ao,"#c6c8c4");const S=_r(p);for(const y of S){if(y.length<2.7)continue;const w=Math.max(1,Math.round(y.length/4.3));for(let b=0;b<w;b++){const E=y.length*(b+.17)/w,T=y.length*(b+.84)/w;Eo(n,y,E,T,x+.72,x+2.94),s.add(Cc(y),E,T,x+.72,x+2.94,0,b+1,.055),p===r&&(Eo(n,y,E,T,x+3.55,M-.64),s.add(Cc(y),E,T,x+3.55,M-.64,0,b+3,.055))}}}const u=_r(o);for(const p of u.slice(0,6)){const x=Je(p,0,.15),M=Je(p,p.length,.15);n.wall(x,M,c+.14,c+.91,f),n.beam([x[0],c+.96,x[1]],[M[0],c+.96,M[1]],.055,hs)}const d=u[3],[m,_]=Je(d,d.length/2,-1.55),g=e(m,_)+2.65;for(const p of[-1,1]){const[x,M]=Je(d,d.length/2+p*1.85,-1.47);n.beam([x,e(x,M),M],[x,g,M],.16,hs),n.beam([x,g-.12,M],[m,g-.12,_],.095,hs)}Ie(i,{text:"La Veranda",position:[m,g+.16,_],size:[3.6,.69],outward:[d.uz,-d.ux],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#faf3db",weight:600,lighting:"spot"}),n.finish(),s.finish()}function Xv(i,t){const e=me(i,"La Veranda — летняя веранда",{surfaces:{wood:["#ddd7c5","#b5a484"],ground:["#d3c7b3"],metal:["#706b5c"]}}),n=[-601,-29],s=[.855,-.519],o=[.519,.855],r=(m,_)=>[n[0]+s[0]*m+o[0]*_,n[1]+s[1]*m+o[1]*_],a=(m,_,g,p)=>[r(m,g),r(_,g),r(_,p),r(m,p)],l=[0,4.5,9].flatMap(m=>[0,3,6].map(_=>t(...r(m,_)))),c=Math.max(...l)+.06,h=c+3.1,f=(m,_,g,p,x,M)=>e.beam([m[0],g,m[1]],[_[0],p,_[1]],x,M);e.shell(a(0,9,0,6),Math.min(...l)-.12,c,"#bcb4a6","#ddd7c5"),e.shell(a(-.12,9.12,-.12,6.12),h,h+.16,"#e5e1d6","#f6f3e9");for(const m of[.15,3,6,8.85])for(const _ of[.15,5.85]){const g=r(m,_);f(g,g,c,h,.13,"#f5f2e8")}for(const m of[.15,5.85]){f(r(.15,m),r(8.85,m),c+.92,c+.92,.09,"#f5f2e8");for(let _=.15;_<8.5;_+=2.9)f(r(_,m),r(_+2.85,m),c+.18,c+.89,.055,"#f5f2e8"),f(r(_,m),r(_+2.85,m),c+.89,c+.18,.055,"#f5f2e8")}for(const m of[.3,2.8,3.2,5.8,6.2,8.7])e.wall(r(m,.2),r(m+.24,.2),c+.92,h-.05,"#eee9d9");for(const m of[1.5,4.5,7.5])for(const _ of[1.6,4.2]){e.shell(a(m-.47,m+.47,_-.36,_+.36),c+.73,c+.79,"#baa98d","#f5efe1");const g=r(m,_);f(g,g,c+.05,c+.73,.08,"#817462");for(const p of[-.78,.78])e.shell(a(m+p-.23,m+p+.23,_-.23,_+.23),c+.42,c+.5,"#a99779","#c2b198")}for(const m of[1.1,3.6,6.1,8.1])e.shell(a(m-.65,m+.65,-.32,.05),c+.02,c+.4,"#aa8d61","#5f844b"),e.shell(a(m-.57,m+.57,-.29,.02),c+.4,c+.55,"#718f54","#829c62");const[u,d]=r(4.5,-.13);Ie(i,{text:"La Veranda",position:[u,h+.55,d],size:[5.5,.9],outward:[-.519,-.855],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#f8f4e8",weight:600,lighting:"spot"}),e.finish()}function qv(i,t,e){if(t.id==="223949006")Vv(i,t.rings[0],e);else if(t.id==="142489050")Wv(i,t.rings[0],e),Xv(i,e);else return!1;return!0}function Yv(i,t,e){const n="#d6d4cf",s="#b1b0ac",o="#556574",r="#eeeae2",a="#4b5156",l="#50333a",c=me(i,"Анапский городской суд — Ленина, 6",{surfaces:{stone:[l],glass:[o],metal:[a],flatRoof:[s],paving:["#c5bdae"]},textures:{[n]:{path:"art/lenin-court-cladding.webp",size:[2.4,2.4],amount:.95}}}),h=t.map((y,w)=>{const b=t[(w+1)%t.length],E=Math.hypot(b[0]-y[0],b[1]-y[1]),T=(b[0]-y[0])/E,C=(b[1]-y[1])/E;return{a:y,length:E,ux:T,uz:C,point:(L,P=0)=>[y[0]+T*L+C*P,y[1]+C*L-T*P]}}),f=(y,w,b,E,T,C,L=.025)=>c.wall(y.point(w,L),y.point(b,L),E,T,C),u=(y,w,b,E,T)=>[y.point(w,E),y.point(b,E),y.point(b,T),y.point(w,T)],d=h[1],m=d.length/2,_=e(...d.point(m,1.8))+.03,g=_+.72,p=g+7.6,x=Math.min(...t.map(([y,w])=>e(y,w)),_)-.35;c.shell(t,x,g,"#8c8983",null),c.shell(t,g,p,n,null),c.shell(t,p,p+.22,r,s);for(const[y,w]of h.entries()){if(w.length<5)continue;const b=Math.max(1,Math.round(w.length/3.3));for(let E=0;E<b;E++){const T=w.length*(E+.5)/b;for(let C=0;C<2;C++){if(y===1&&C===0&&Math.abs(T-m)<2.3)continue;const L=g+.7+C*3.48;if(f(w,T-.66,T+.66,L,L+1.94,r,.03),f(w,T-.57,T+.57,L+.09,L+1.85,o,.045),f(w,T-.025,T+.025,L+.09,L+1.85,r,.057),C===0){for(let P=-2;P<=2;P++)f(w,T+P*.2-.012,T+P*.2+.012,L+.13,L+1.82,a,.073);for(const P of[L+.48,L+1.4])f(w,T-.54,T+.54,P,P+.025,a,.073)}}}}f(d,m-1.2,m+1.2,g,g+2.65,"#242d31",.055),f(d,m-.025,m+.025,g+.05,g+2.6,"#c1bfba",.07);for(let y=0;y<4;y++){const w=2-y*.43;c.shell(u(d,m-2.7,m+2.7,.08,w),_+y*.18-.05,_+(y+1)*.18,l)}c.shell(u(d,m-2.75,m+2.75,-.02,1.85),g+3.16,g+3.39,r);for(const y of[m-2.25,m+2.25]){const[w,b]=d.point(y,1.47),E=Array.from({length:16},(T,C)=>{const L=C*2*Math.PI/16;return[w+Math.cos(L)*.2,b+Math.sin(L)*.2]});c.shell(E,g,g+3.16,r)}const[M,v]=d.point(m,.085);Ie(i,{text:"АНАПСКИЙ ГОРОДСКОЙ СУД",position:[M,g+2.91,v],size:[2.5,.36],outward:[d.uz,-d.ux],color:"#f8e7c7",background:"#8b2926",weight:700,lighting:"unlit"});const S=(y,w)=>{const b=d.point(y,w);return[b[0],e(...b)+.12,b[1]]};for(let y=2;y<18;y+=1){const w=Math.min(y+1,18);c.face("#c5bdae",S(m-1.45,y),S(m+1.45,y),S(m+1.45,w),S(m-1.45,w))}c.finish()}function $v(i,t,e){return t.id!=="142489077"?!1:(Yv(i,t.rings[0],e),!0)}function Zv(i,t,e){const n="#eee5d0",s="#e2dac6",o="#526e7c",r="#394b51",a="#c9c3b5",l="#987a73",c="#d2c8b5",h=me(i,"Бизнес-центр «Престиж»",{surfaces:{glass:[o,r],stone:[l],flatRoof:[a],metal:["#6e706d"],paving:[c]},textures:{[n]:{path:"art/lenin-prestige-cladding.webp",size:[3.2,2.4],amount:.95}}}),f=t.map((R,I)=>{const N=t[(I+1)%t.length],F=Math.hypot(N[0]-R[0],N[1]-R[1]),V=(N[0]-R[0])/F,H=(N[1]-R[1])/F;return{a:R,length:F,ux:V,uz:H,point:(J,et=0)=>[R[0]+V*J+H*et,R[1]+H*J-V*et]}}),u=f[5],d=f[4],m=u.length/2,_=m-2,g=e(...u.point(m,1.6))+.04,p=Math.min(g,...t.map(([R,I])=>e(R,I)))-.45,x=g+7.5;h.shell(t,p,g+.2,"#b2a99a",null),h.shell(t,g+.2,x,n,null),h.shell(t,x,x+.24,s,a);function M(R,I,N,F,V,H,J=.035){h.wall(R.point(I,J),R.point(N,J),F,V,H)}function v(R,I,N,F,V){return[R.point(I,F),R.point(N,F),R.point(N,V),R.point(I,V)]}for(const R of[u,d]){const I=Math.max(2,Math.round(R.length/2.6));for(let N=0;N<I;N++){const F=R.length*N/I+.07,V=R.length*(N+1)/I-.07;M(R,F,V,g+3.68,x-.44,o,.045),M(R,F,F+.055,g+3.68,x-.44,s,.06),(R!==u||Math.abs((F+V)/2-_)>2.8)&&M(R,F,V,g+.38,g+3.02,r,.045)}M(R,.15,R.length-.15,g+3.22,g+3.44,s,.07)}const S=Math.min(6,(u.length-1)/2);M(u,m-S,m+S,g+2.75,g+3.68,s,.075),M(u,_-2.55,_+2.55,g+.57,g+3.05,r,.07);for(const R of[-1.7,0,1.7])M(u,_+R-.028,_+R+.028,g+.57,g+3.02,s,.085);for(let R=0;R<3;R++){const I=2.2-R*.52;h.shell(v(u,_-3.1,_+3.1,.08,I),g-.04+R*.19,g+.15+R*.19,l)}const y=Math.ceil(u.length);for(let R=0;R<y;R++){const I=u.length*R/y,N=u.length*(R+1)/y;for(const[F,V]of[[.1,2.5],[2.5,5.3]]){const H=v(u,I,N,F,V);h.face(c,...H.map(([J,et])=>[J,e(J,et)+.08,et]))}}h.finish();const[w,b]=u.point(m,.09),E=[u.uz,-u.ux];Ie(i,{text:"БИЗНЕС ЦЕНТР ПРЕСТИЖ",position:[w,x+.43,b],size:[Math.min(17,u.length-1),.72],outward:E,color:"#a72b28",weight:700,lighting:"spot",glowColor:"#ffd8bb"});const[T,C]=u.point(m+.035,.083);Ie(i,{text:`АЛЛЕРГОЛОГИЯ
ИММУНОЛОГИЯ`,position:[T,g+3.19,C],size:[S*2,.95],outward:E,color:"#501d2c",weight:700,fontFamily:"Georgia, serif",lighting:"unlit"}),Ie(i,{text:`АЛЛЕРГОЛОГИЯ
ИММУНОЛОГИЯ`,position:[w,g+3.22,b],size:[S*2,.95],outward:E,color:"#922e44",weight:700,fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffdfce"});const[L,P]=u.point(m+7.5,.09);Ie(i,{text:"АПТЕКА",position:[L,g+2.88,P],size:[3.4,.58],outward:E,color:"#43427c",background:"#eee9dd",weight:700,lighting:"spot",glowColor:"#ddd9ff"})}function Kv(i,t,e){return t.id!=="223535757"?!1:(Zv(i,t.rings[0],e),!0)}function Jv(i,t,e){const n=t.buildings.find(y=>y.id==="142489050");if(!n)return;const s=n.rings[0],o=s[13],r=s[14];if(!o||!r)return;const a=Math.hypot(r[0]-o[0],r[1]-o[1]),l=(r[0]-o[0])/a,c=(r[1]-o[1])/a,h=[c,-l],f=12.1,u=(y,w=.13)=>{const b=f*2-y;return[o[0]+l*b+h[0]*w,o[1]+c*b+h[1]*w]},d=e(...Be(s.slice(8))),m=u(f-6.85,.2),_=me(i,"Мацони — ул. Ленина, 3",{surfaces:{glass:["#202f30","#3d5150"],stone:["#262a29","#a59782"],wood:["#3d302c"],paving:["#b8b0a2","#b7ada0"]},textures:{"#bfc9b4":{path:"art/lenin-matsoni-mural.webp",repeat:!1,axes:{origin:[m[0],d+.31,m[1]],u:[-l/5.7,0,-c/5.7],v:[0,1/2.46,0]}}}}),g=(y,w,b,E,T,C=.13)=>_.wall(u(f+y,C),u(f+w,C),d+b,d+E,T);g(-7,7,.28,3.65,"#202f30"),g(-7,7,2.84,3.69,"#262a29",.16);for(const y of[-6.95,-1.1,.32,2.15,4.5,6.95])g(y-.055,y+.055,.28,2.84,"#262a29",.18);g(-1.02,.24,.32,2.72,"#202f30",.2),g(-.38,-.34,.86,1.66,"#a59782",.23),g(2.23,6.9,.3,1.03,"#e9e5d9",.19),g(2.23,6.9,1.05,2.76,"#3d5150",.19),g(4.49,4.54,1.05,2.76,"#262a29",.22),g(-6.85,-1.15,.31,2.77,"#bfc9b4",.2);const p=(y,w)=>{const[b,E]=u(f+y,w);return[b,e(b,E)+.15,E]};for(let y=-7;y<7;y+=1){const w=Math.min(y+1,7);for(let b=.3;b<9.3;b+=1){const E=Math.min(b+1,9.3);_.face("#b7ada0",p(y,b),p(w,b),p(w,E),p(y,E))}}const x=[u(f-1.12,.24),u(f+.34,.24),u(f+.34,1.25),u(f-1.12,1.25)],M=Math.max(...x.map(y=>e(...y)),d);_.shell(x,M-.12,M+.08,"#a59782"),_.finish();const[v,S]=u(f+1.5,.19);Ie(i,{text:"МАЦОНИ",position:[v,d+3.27,S],size:[5.2,.72],outward:h,color:"#fffdf6",weight:700,fontFamily:'"Comic Sans MS", cursive',lighting:"backlit",glowColor:"#fff0dc"})}const Qv=Object.freeze([{x:-504,z:-127,length:8,width:2.8,angle:-.357,type:"sail",accent:"#315774"},{x:-497,z:-124.4,length:9,width:3,angle:-.357,type:"sail",accent:"#a9604d"},{x:-490,z:-121.8,length:8,width:2.8,angle:-.357,type:"motor",accent:"#42738a"},{x:-483,z:-119.1,length:9,width:3,angle:-.357,type:"sail",accent:"#315774"},{x:-476,z:-116.5,length:8,width:2.8,angle:-.357,type:"motor",accent:"#a9604d"},{x:-469,z:-113.8,length:9,width:3,angle:-.357,type:"sail",accent:"#42738a"},{x:-462,z:-111.2,length:8,width:2.8,angle:-.357,type:"sail",accent:"#315774"},{x:-482,z:-83,length:7,width:2.5,angle:-.357,type:"motor",accent:"#315774"},{x:-474,z:-80.5,length:8,width:2.8,angle:-.357,type:"sail",accent:"#a9604d"},{x:-466,z:-77.5,length:7,width:2.5,angle:-.357,type:"motor",accent:"#42738a"},{x:-589.5,z:-340,length:15,width:4.2,angle:0,type:"port",accent:"#315774"},{x:-589,z:-306,length:10,width:3.5,angle:0,type:"motor",accent:"#a9604d"},{x:-587.7,z:-266,length:14,width:4,angle:0,type:"port",accent:"#42738a"},{x:-597.1,z:-203.6,length:14,width:4,angle:-.465,type:"port",accent:"#a9604d"},{x:-737,z:-275,length:12,width:3.5,angle:.45,type:"motor",accent:"#315774"},{x:-710.8,z:-222,length:8,width:2.8,angle:.45,type:"sail",accent:"#315774"}]);function jv(i){const t="#ecefe8",e="#f5f3e9",n="#435d68",s="#78868a",o="#d9c9a9",r=me(i,"Суда в гавани и морском порту",{surfaces:{glass:[n],metal:[s],wood:[o],flatRoof:[e,t]}}),a=-.18;for(const l of Qv){const{x:c,z:h,length:f,width:u,angle:d,type:m,accent:_}=l,g=Math.sin(d),p=Math.cos(d),x=(N,F,V)=>[c+p*N+g*F,a+V,h-g*N+p*F],M=(N,F=1)=>[x(-u*.46*F,-f*.47,N),x(u*.46*F,-f*.47,N),x(u*.5*F,f*.04,N),x(u*.36*F,f*.3,N),x(0,f*.5,N),x(-u*.36*F,f*.3,N),x(-u*.5*F,f*.04,N)],v=M(-.16,.77),S=M(m==="port"?1.04:.72),y=M(.24,.91),w=M(.32,.92);for(let N=0;N<S.length;N++){const F=(N+1)%S.length;r.face(t,v[N],v[F],S[F],S[N]),r.face(_,y[N],y[F],w[F],w[N])}r.face(o,...S);const b=m==="port"?1.04:.72,E=(N,F,V,H,J)=>[x(F,H,N),x(V,H,N),x(V,J,N),x(F,J,N)],T=u*(m==="sail"?.31:.4),C=-f*(m==="sail"?.19:.29),L=f*(m==="sail"?.04:.14),P=m==="sail"?.43:m==="port"?1.65:1.05,R=E(b,-T,T,C,L),I=E(b+P,-T*.91,T*.91,C,L-f*.025);for(let N=0;N<4;N++)r.face(e,R[N],R[(N+1)%4],I[(N+1)%4],I[N]);if(r.face(e,...I),m!=="sail")for(const N of[-1,1]){const F=N*(T+.02);r.face(n,x(F,C+f*.04,b+P*.35),x(F,L-f*.04,b+P*.35),x(F*.93,L-f*.06,b+P*.82),x(F*.93,C+f*.04,b+P*.82))}if(m==="sail"){const N=f*1.12;r.beam(x(0,0,b),x(0,0,N),.08,s),r.beam(x(0,0,b+1.25),x(0,-f*.31,b+1.25),.09,s),r.beam(x(0,-f*.03,b+1.33),x(0,-f*.28,b+1.33),.19,e),r.beam(x(0,0,N-.25),x(0,f*.44,b+.1),.025,s),r.beam(x(0,0,N-.25),x(0,-f*.43,b+.1),.025,s)}else r.beam(x(0,C+f*.04,b+P),x(0,C+f*.04,b+P+1.5),.055,s),r.beam(x(-u*.42,f*.14,b+.4),x(-u*.34,f*.38,b+.4),.04,s),r.beam(x(u*.42,f*.14,b+.4),x(u*.34,f*.38,b+.4),.04,s)}r.finish()}const t5=[{bounds:[-526,-150,-395,-110]},{bounds:[-463,-110,-395,-62]},{bounds:[-529,-96,-463,-64],outline:[[-526.29,-92.91],[-463,-69.3],[-464.22,-66.02],[-527.51,-89.63]]}];function ch(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+l*(o[0]-s[0]),s[1]+l*(o[1]-s[1])])}}return e}function Yu(i,[t,e,n,s]){for(const o of[r=>r[0]-t,r=>n-r[0],r=>r[1]-e,r=>s-r[1]])if(i=ch(i,o),i.length<3)return[];return i}function e5(i,t){const e=t.reduce((s,o,r)=>{const a=t[(r+1)%t.length];return s+o[0]*a[1]-a[0]*o[1]},0),n=Math.sign(e);for(let s=0;s<t.length;s++){const o=t[s],r=t[(s+1)%t.length];if(i=ch(i,a=>n*((r[0]-o[0])*(a[1]-o[1])-(r[1]-o[1])*(a[0]-o[0]))),i.length<3)return[]}return i}function n5(i){const t=[];for(const e of i.land){const n=e.map(([s,o])=>new vt(s,o));for(const s of Ei.triangulateShape(n,[])){const o=s.map(r=>[n[r].x,n[r].y]);for(const{bounds:r,outline:a}of t5){let l=Yu(o,r);if(a&&l.length>=3&&(l=e5(l,a)),l.length<3)continue;const c=l.map(f=>f[0]),h=l.map(f=>f[1]);for(let f=Math.floor(Math.min(...c)/4)*4;f<Math.max(...c);f+=4)for(let u=Math.floor(Math.min(...h)/4)*4;u<Math.max(...h);u+=4){const d=Yu(l,[f,u,f+4,u+4]);for(const m of[1,-1]){const _=ch(d,g=>m*(f+u+4-g[0]-g[1]));for(let g=2;g<_.length;g++){const p=_[0],x=_[g-1],M=_[g],v=(x[0]-p[0])*(M[1]-p[1])-(x[1]-p[1])*(M[0]-p[0]);Math.abs(v)>1e-4&&t.push(v>0?[p,M,x]:[p,x,M])}}}}}}return t}function i5(i,t,e){const n=[];for(const a of n5(t))for(const[l,c]of a)n.push(l,e.faceHeight(l,c)+.12,c);const s=new Ae;s.setAttribute("position",new ee(n,3)),s.computeVertexNormals();const o=Sn(new jt({color:"#a5a6a0",side:en}),{surface:"road",strength:.25}),r=new oe(s,o);r.name="Серое покрытие причалов марины",r.receiveShadow=!0,i.add(r)}const s5=Object.freeze([[-436.7,-8.4,6.7,2.5],[-425.3,-6.1,7.6,2.9],[-435.4,4.9,7.2,2.7],[-424.6,6.5,6.8,2.6],[-428.4,19.7,7.9,3],[-378.6,10.6,7.1,2.5],[-368,17.4,7.6,2.7],[-374.3,22.5,6.6,2.4],[-358.4,11.2,7.5,2.6],[-336,89.5,7,2.7],[-322,90,8.1,3.1],[-308,86.5,7.3,2.7],[-294,87,8,3],[-280,87,7.2,2.8],[-266,88,8.4,3.1],[-252,88.5,7.5,2.9],[-238,89,7.1,2.6],[-344,-.6,6.6,2.5],[-336,1.1,7.1,2.7],[-325,.6,6.7,2.5],[-229,35,6.8,2.5],[-227,48,7.4,2.7],[-205.8,40.5,7.2,2.6],[-201.7,54.8,7.8,2.9],[-201.7,68.4,6.8,2.6],[-190,74.3,7.7,2.8],[-181.3,32.7,7.2,2.6],[-166.5,40,7.9,2.9],[-151.7,41.8,7.1,2.6],[-141.2,51.8,6.9,2.5],[-172.8,54.8,8.1,3],[-162.3,65.4,7.5,2.8]]);function o5([i,t],[e,n],[s,o]){const r=s-e,a=o-n,l=r*r+a*a,c=l?ue.clamp(((i-e)*r+(t-n)*a)/l,0,1):0;return Math.hypot(i-e-c*r,t-n-c*a)}function _0(i,t){let e=1/0;for(const n of t)for(let s=1;s<n.points.length;s++)e=Math.min(e,o5(i,n.points[s-1],n.points[s])-(n.width??2)/2);return e}const r5=[[-435.4,4.9,1.25],[-424.6,6.5,1.25],[-428.4,19.7,1.4],[-378.6,10.6,1.35],[-368,17.4,1.4],[-374.3,22.5,1.35]];function a5(i,t,e){const n=s5.filter(([f,u])=>_0([f,u],t.roads)>.95&&!t.trees.some(([d,m])=>Math.hypot(d-f,m-u)<3));if(!n.length)return;const s=new dn(new yn(.12,.19,1,6),Sn(new jt({color:"#75634b"}),{surface:"wood",strength:.6}),n.length),o=new dn(new Zn(1,2),Sn(new jt({color:"#ffffff",flatShading:!0}),{surface:"foliage"}),n.length),r=new ye,a=["#557347","#647e4b","#48683d","#6d8753"];n.forEach(([f,u,d,m],_)=>{const g=e(f,u),p=d*.61;r.position.set(f,g+p/2,u),r.scale.set(1,p,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(_,r.matrix),r.position.set(f,g+d*.72,u),r.scale.set(m,d*.36,m*.92),r.rotation.set(0,_*1.37,0),r.updateMatrix(),o.setMatrixAt(_,r.matrix),o.setColorAt(_,new Ht(a[_%a.length]))}),s.name="Стволы деревьев по спутниковому снимку",o.name="Кроны у Горгиппии по спутниковому снимку",o.castShadow=!0,o.receiveShadow=!0,i.add(s,o);const l=[];for(const[f,u,d]of r5){if(_0([f,u],t.roads)<d+.35)continue;const m=(g,p)=>{const x=f+Math.cos(g)*p,M=u+Math.sin(g)*p;return[x,e(x,M)+.16,M]},_=m(0,0);for(let g=0;g<12;g++)l.push(..._,...m((g+1)*Math.PI/6,d),...m(g*Math.PI/6,d))}const c=new Ae;c.setAttribute("position",new ee(l,3)),c.computeVertexNormals();const h=new oe(c,Sn(new jt({color:"#718557",side:en}),{surface:"ground",strength:.4}));h.name="Зелёные островки между дорожками",i.add(h)}const c5=Object.freeze([[-1242.3,795.7,7.5,3.2],[-1234.3,791.9,8.4,3.5],[-1225.4,796.1,7.6,3],[-1227.9,809.4,8.2,3.5],[-1233.9,825.4,7.2,3],[-1252.9,828.6,6.8,2.8],[-1259.2,739.5,8,3.4],[-1248.7,744.8,7.5,3.1],[-1237,739.5,7,2.9],[-1228.6,750.1,8.3,3.4],[-1235.5,760.6,7.2,3],[-1248.7,764.8,8,3.4],[-1260.3,770.1,6.9,2.8],[-1246.5,778.6,7.6,3.2],[-1142.5,930.2,6.6,2.5],[-1124.9,927,7.2,2.8],[-1128.1,952.2,6.8,2.7],[-1113.7,969.5,6.5,2.5]]);function l5([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function h5(i){return c5.filter(([t,e])=>_0([t,e],i.roads)>1&&!i.buildings.some(n=>l5([t,e],n.rings[0]))&&!i.trees.some(([n,s])=>Math.hypot(n-t,s-e)<3))}function u5(i,t,e){const n=h5(t);if(!n.length)return;const s=new dn(new yn(.12,.18,1,6),Sn(new jt({color:"#6d604a"}),{surface:"wood",strength:.6}),n.length),o=new dn(new Zn(1,2),Sn(new jt({color:"#ffffff",flatShading:!0}),{surface:"foliage"}),n.length),r=new ye,a=["#466c43","#547449","#617d4b","#405d3b"];n.forEach(([l,c,h,f],u)=>{const d=e(l,c),m=h*.62;r.position.set(l,d+m/2,c),r.scale.set(1,m,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(u,r.matrix),r.position.set(l,d+h*.72,c),r.scale.set(f,h*.36,f*.94),r.rotation.set(0,u*1.4,0),r.updateMatrix(),o.setMatrixAt(u,r.matrix),o.setColorAt(u,new Ht(a[u%a.length]))}),s.name="Деревья верхней набережной у маяка · стволы",o.name="Деревья верхней набережной у маяка · кроны",o.castShadow=o.receiveShadow=!0,i.add(s,o)}const bi="#eeece2",ys="#354552";function Yd(i,t){const e=Math.hypot(t[0]-i[0],t[1]-i[1]),n=(t[0]-i[0])/e,s=(t[1]-i[1])/e,o=(l,c)=>[i[0]+n*l-s*c,i[1]+s*l+n*c];return{point:o,project:([l,c])=>[(l-i[0])*n+(c-i[1])*s,(l-i[0])*-s+(c-i[1])*n],rectangle:(l,c,h,f)=>[o(l,h),o(c,h),o(c,f),o(l,f)]}}function $u(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);r>=0&&e.push(s),r<0!=a<0&&e.push(ft(s,o,r/(r-a)))}return e}function f5(i,t,e){const{point:n,project:s,rectangle:o}=Yd(t[0],t[1]),r=t.map(b=>e(...b)),a=Math.max(...r),l=a+3.35,c="#c8bda8",h="#adada4",f=me(i,"Кубань",{surfaces:{flatRoof:[h],stone:[c]}});f.shell(t,Math.min(...r)-.22,l,c,h);const u=$u(t,b=>14-s(b)[0]),d=$u(t,b=>s(b)[1]-35.45);f.shell(u,l,a+6.7,bi,h),f.shell(d,l,a+6,"#d7d0c1",h);const m=14,_=89.4,g=9.02,p=25.57,x=o(m,_,g+1.05,p-1.05),M=Be(x),v=2.95,S=l+8*v;f.shell(x,l,S,bi,h);const y=22,w=[g,p].map((b,E)=>{const T=E===0?1:-1,C=[];for(let L=0;L<y;L++){const P=m+(_-m)*L/y,R=m+(_-m)*(L+1)/y;C.push(n(P,b+T*.48),n(P+(R-P)*.4,b),n(R,b))}return C});for(let b=0;b<8;b++){const E=l+b*v;Ci(f,x[0],x[1],M,E+.96,E+2.62,3.45),Ci(f,x[2],x[3],M,E+.96,E+2.62,3.45);for(const C of w)for(let L=1;L<C.length;L++)f.wall(C[L-1],C[L],E+.24,E+.94,bi);const T=[[...w[0],n(_,g+1.07),n(m,g+1.07)],[...w[1],n(_,p-1.07),n(m,p-1.07)]];for(const C of T)f.shell(C,E,E+.24,bi)}f.shell(x,S,S+.45,bi,h),f.finish()}function Zu(i,t,e,n,s,o,r){const a=[[t[0],n,t[1]],[e[0],n,e[1]]];for(let l=0;l<=8;l++){const c=Math.PI*l/8,[h,f]=ft(t,e,(1+Math.cos(c))/2);a.push([h,s+(o-s)*Math.sin(c),f])}i.face(r,...a)}function Aa(i,t,e,n,s,o,r){for(let a=0;a<r;a++){const l=f=>ft(t,e,(a+f)/r),c=[l(.15),l(.85)].map(f=>ft(n,f,1.006));Zu(i,...c,s,s+o*.72,s+o,bi);const h=[l(.24),l(.76)].map(f=>ft(n,f,1.011));Zu(i,...h,s+.12,s+o*.72,s+o-.2,"#314454")}}function d5(i,[t,e],n,s,o,r=!1){const a=n.map(([l,c])=>Array.from({length:s},(h,f)=>{const u=2*Math.PI*(f+.5)/s;return[t+c*Math.cos(u),l,e+c*Math.sin(u)]}));for(let l=1;l<a.length;l++)for(let c=0;c<s;c++){const h=(c+1)%s;i.face(o,a[l-1][c],a[l-1][h],a[l][h],a[l][c]),r&&c%2===0&&i.beam(a[l-1][c],a[l][c],.04,"#a98c4b")}}function Ku(i,[t,e],n,s){const o="#bc9e4f";i.beam([t,n,e],[t,n+s,e],.075,o),i.beam([t-.33,n+s*.67,e],[t+.33,n+s*.67,e],.065,o),i.beam([t-.22,n+s*.35,e],[t+.22,n+s*.43,e],.06,o)}function p5(i,t,e){const[n,s,o,r]=t,a=(L,P)=>ft(ft(s,o,L),ft(n,r,L),P),l=(L,P,R,I)=>[a(L,R),a(P,R),a(P,I),a(L,I)],c=Be(t),h=e(...c),f=Math.min(...t.map(L=>e(...L)))-.25,u="#3c9e9e",d="#a99973",m=me(i,"Свято-Онуфриевский храм",{surfaces:{flatRoof:[ys],glass:["#314454"],stone:[d]}}),_=l(.24,1,0,1),g=l(0,.35,.25,.75),p=Be(_),x=Be(g),M=h+5.9;m.shell(_,f,h+.6,d,null),m.shell(_,h+.6,M,u,null),m.shell(g,f,h+.6,d,null),m.shell(g,h+.6,h+6.45,u,null),m.shell(_.map(L=>ft(p,L,1.012)),M-.27,M,bi,null);for(const[L,P]of[[_[0],_[1]],[_[2],_[3]],[_[1],_[2]]])Aa(m,L,P,p,h+1.18,2.78,3);Aa(m,g[3],g[0],x,h+.55,3.1,1);const v=[a(.42,.5),a(.83,.5)].map(([L,P])=>[L,h+7.95,P]),S=_.map(([L,P])=>[L,M,P]);m.face(ys,S[0],S[1],v[1],v[0]),m.face(ys,S[1],S[2],v[1]),m.face(ys,S[2],S[3],v[0],v[1]),m.face(ys,S[3],S[0],v[0]);const y=h+6.65,w=h+10.35;m.shell(g,h+6.22,y,bi,null),m.shell(g,y,w,u,null),g.forEach((L,P)=>{Aa(m,L,g[(P+1)%g.length],x,y+.18,2.55,3)});for(const[L,P,R]of[[_,p,M],[g,x,w]])for(const I of L){const[N,F]=ft(P,I,1.006);m.beam([N,h+.6,F],[N,R,F],.35,bi)}const b=g.map(L=>ft(x,L,1.045)),E=[x[0],h+17.8,x[1]];b.forEach(([L,P],R)=>{const[I,N]=b[(R+1)%b.length];m.face(ys,[L,w,P],[I,w,N],E),m.beam([L,w,P],E,.055,"#88754c")}),Ku(m,x,E[1],1.42);const T=a(.68,.5),C=Array.from({length:8},(L,P)=>{const R=Math.PI*(P+.5)/4;return[T[0]+1.98*Math.cos(R),T[1]+1.98*Math.sin(R)]});m.shell(C,h+7.35,h+10.1,u,null),m.shell(C.map(L=>ft(T,L,1.08)),h+9.87,h+10.12,bi,null),C.forEach((L,P)=>Aa(m,L,C[(P+1)%C.length],T,h+8.22,1.42,1)),d5(m,T,[[10.12,1.98],[10.55,2.27],[11.25,2.32],[12.02,1.85],[12.63,1.02],[13.12,.47],[13.52,.16]].map(([L,P])=>[h+L,P]),12,ys,!0),Ku(m,T,h+13.5,1.35),m.finish()}function m5(i,t,e){const{point:n,rectangle:s}=Yd(t[3],t[4]),o=Be(t),r=t.map(T=>e(...T)),a=Math.max(...r),l="#d4b581",c="#cca873",h="#eadcbe",f="#a17a61",u="#aaa598",d="#625748",m="#986d59",_=me(i,"Мотылёк",{surfaces:{flatRoof:[u],metal:[d,m],stone:[f]}}),g=a+9.35;_.shell(t,Math.min(...r)-.25,a+.64,f,null),_.shell(t,a+.64,g,c,u);for(let T=0;T<3;T++){const C=a+.65+T*2.84;if(Ci(_,t[3],t[4],o,C+.65,C+2.43,3.9,c),Ci(_,t[11],t[12],o,C+.65,C+2.43,4,c),!T)continue;const L=s(.2,51.35,-.58,.04);_.shell(L,C-.24,C,h,l),_.wall(L[0],L[1],C+.68,C+.77,d);const P=s(9.18,42.7,16.97,17.52);_.shell(P,C-.24,C,h,l),_.wall(P[2],P[3],C+.68,C+.77,d)}const p=42.99,x=57,M=16.85,v=44.8,S=s(p,x,M,v),y=Be(S),w=a+12.15;_.shell(S,g,w,c,null);for(const[T,C]of S.entries())Ci(_,C,S[(T+1)%S.length],y,g+.35,w-.35,4.3,c);const[b,E]=[M,v].map(T=>Array.from({length:11},(C,L)=>{const P=L/10,[R,I]=n(p-.27+(x-p+.54)*P,T);return[R,w+1.55*(1-(2*P-1)**2),I]}));for(let T=1;T<b.length;T++)_.face(m,b[T-1],E[T-1],E[T],b[T]);_.face(c,...b),_.face(c,...E),_.finish()}function g5(i,t,e){const n=t.parts?.filter(x=>x.levels>2)??[],s=t.parts?.filter(x=>x.levels===2)??[];if(n.length!==2||s.length!==2)return!1;const o=["#6f8a98","#8197a0","#627e8f","#718d9d"],r=me(i,"Колоннада",{surfaces:{flatRoof:["#b8bfbe"],glass:o,stone:["#d4d8d5"]}}),a=t.rings[0],l=a.map(x=>e(...x)),c=Math.max(...l),h=Math.min(...l)-.22,f=c+6.65,u="#d4d8d5",d="#b8bfbe",m="#a5adaf";for(const x of t.parts)r.shell(x.rings[0],h,f,m,d);const _=Be(a);a.forEach((x,M)=>{const v=a[(M+1)%a.length];for(const S of[0,1]){const y=c+S*3.325;Ci(r,x,v,_,y+.42,y+2.87,2.4,"#c4c9c8")}});const g=["#9e7867","#9b8e65","#56768e"],p=2.95;for(const[x,M]of n.entries()){const v=M.rings[0],S=Be(v),y=f+(M.levels-2)*p;r.shell(v,f,y,u,d),v.forEach((w,b)=>{const E=v[(b+1)%v.length],T=Math.hypot(E[0]-w[0],E[1]-w[1]),C=Math.max(1,Math.round(T/2.45)),L=T>9?.13:.16,P=V=>ft(S,ft(w,E,V),1.0035);for(let V=0;V<C;V++){const H=P(L+(1-2*L)*(V+.025)/C),J=P(L+(1-2*L)*(V+.975)/C);for(let et=2;et<M.levels;et++){const St=f+(et-2)*p,mt=et*7+b*11+V*5+x*9,Ut=mt%29===0?g[V%g.length]:o[mt%o.length];r.wall(H,J,St+.15,St+p-.14,Ut)}}if(T<13)return;const[R,I]=P(.15),[N,F]=P(.85);for(const[V,H]of[[R,I],[N,F]])r.beam([V,y,H],[V,y+1.45,H],.15,"#9ba5a8");r.beam([R,y+1.45,I],[N,y+1.45,F],.16,"#9ba5a8")})}return r.finish(),!0}function _5(i,t,e){const n=t.rings[0];if(t.id==="223459472")f5(i,n,e);else if(t.id==="142489074")p5(i,n,e);else if(t.id==="223628174")m5(i,n,e);else return t.id==="223628417"?g5(i,t,e):!1;return!0}function ln([i,t],e){return[i,e,t]}function tr([i,t],e,n=e){return Array.from({length:8},(s,o)=>{const r=o*Math.PI/4;return[i+Math.cos(r)*e,t+Math.sin(r)*n]})}function $d(i,t,e,n){i.shell(tr(t,.13),e,e+.69,n,null),i.shell(tr(t,.54),e+.69,e+.75,n);for(const s of[-1,1]){const o=[t[0]+s*.84,t[1]];i.shell(tr(o,.18),e,e+.44,n,null),i.shell(tr(o,.28),e+.44,e+.5,n),i.beam([o[0]+s*.23,e+.46,o[1]],[o[0]+s*.23,e+.87,o[1]],.08,n)}}function x5(i,t,e,n,s){const o=(n.lowerWaterfront??n)(...Be(e)),r=o+s,a="#ded4ba",l="#e5e0cf",c="#bfbaa8",h="#484740",f=[[e[1][0],-30.5],[e[2][0],-32.8],[e[3][0],-35.7]],u=f.map(([g,p])=>[g,p-2]),d=[e[0],...u,e.at(-1)];t.shell(d,o-.17,o+.23,a,"#aa9c80"),t.shell(d,r-.25,r,"#a8a393","#b6b2a5");for(let g=1;g<u.length;g++){const p=u[g-1],x=u[g];t.wall(p,x,o+.23,o+.75,a),t.wall(p,x,r-.43,r-.25,l),t.wall(f[g-1],f[g],o+.23,r-.25,"#4b5351");for(const v of[.79,1,1.19])t.beam(ln(p,o+v),ln(x,o+v),.053,h);const M=5;for(let v=0;v<M;v++){const S=(v+.5)/M,y=ft(p,x,S),w=ln(y,o+1.54),b=r-.42;t.beam(ln(y,o+.23),ln(y,r-.25),.16,a);for(const C of[-1,1]){const L=ft(p,x,S+C*.018),P=ft(p,x,S+C*.056);t.face(l,ln(y,b),ln(P,b),w),t.face(c,ln(P,b),ln(L,b-.8),w),t.face(l,w,ln(y,o+.77),ln(L,o+.77))}t.beam(ln([y[0],y[1]-.045],o+1.9),ln([y[0],y[1]-.045],o+2.12),.11,"#f2dcab");const[E,T]=ft(p,x,S+.09);$d(t,[E,T+1.14],o+.23,"#88684d")}}const[m,_]=ft(u[0],u[1],.78);Ie(i,{text:"ПРИЧАЛ",position:[m,r-.54,_-.055],size:[3.08,.42],outward:[-.108,-.994],background:"#484740",color:"#f2e8d0",lighting:"unlit"})}function v5(i,t,e,n){const s=n(-170,-63)+.26,o=Be(e),r="#323a3e",a="#795b45",l=e.map(p=>ft(o,p,.82)),c=Array.from({length:4},(p,x)=>In(i,{path:"art/vino-more-window.webp",name:`Вино и море — остекление ${x+1}`,atlasGrid:1,crop:[.005+x*.2475,.005,.2475,.99],interiorMix:.48,glassTint:"#526e7c"}));t.shell(e,s-1.12,s+.39,"#666458");for(const[p,x,M,v]of[[e,.39,2.75,3.18],[e,3.18,5.93,6.52],[l,6.52,8.75,9.06]])t.shell(p,s+x,s+M,"#35494d",null),t.shell(p,s+M,s+v,r,"#777e7b"),p.forEach((S,y)=>{const w=p[(y+1)%p.length];if(Ci(t,S,w,o,s+x+.05,s+M,1.18,r),x!==.39)return;const b=Math.hypot(w[0]-S[0],w[1]-S[1]);if(b<.01)return;const E=ft(S,w,.5),T=E[0]-o[0],C=E[1]-o[1],L=Math.hypot(T,C)||1,P={point:(I,N)=>{const[F,V]=ft(o,ft(S,w,I/b),1.003);return[F+T/L*N,V+C/L*N]}},R=Math.max(1,Math.round(b/1.18));for(let I=0;I<R;I++){const N=b*(I+.035)/R,F=b*(I+.965)/R;c[(I+y)%c.length].add(P,N,F,s+x+.05,s+M,0,0,.025)}});c.forEach(p=>p.finish());const h=[[-185.1,-55.2],[-173,-69.3],[-163.5,-64],[-162.1,-47.2]],f=s+3.06,u=[h[0],[-188.8,-60.2],[-180.3,-72.6],h[1]];t.shell(u,s-.5,s+.11,"#888479","#aaa293"),t.shell(h,s-.52,s+.37,"#6a675d","#968477"),t.shell(h,f-.18,f,"#4c4035","#929895");const d=h.map(p=>ft(Be(h),p,.94));t.shell(d,s+.37,f-.19,"#475958",null);for(let p=0;p<h.length;p++){const x=h[p],M=h[(p+1)%h.length],v=Math.ceil(Math.hypot(M[0]-x[0],M[1]-x[1])/2.55);for(let S=0;S<v;S++){const y=ft(x,M,S/v);t.beam(ln(y,s+.35),ln(y,f-.13),.2,a),t.beam(ln(ft(y,M,.03),f-.33),ln(ft(x,M,(S+.8)/v),f-.33),.035,"#dac797")}}for(const p of[[-185.6,-60.4],[-183.4,-64],[-180.8,-67.6]])$d(t,p,s+.11,"#916e49");const m=[-177.7,-51.7],_=n(...m),g=tr(m,.36,.52);t.shell(g,_-.08,_+2.31,a),Ie(i,{text:"ВИНО И МОРЕ",position:[m[0]-.365,_+1.28,m[1]],size:[1.02,.53],outward:[-1,0],background:"#5b4435",color:"#e7dac1",lighting:"unlit"})}const x0="#607680",M5={223948934:{address:"9",height:4.9,wall:"#c6b69f",roof:"#b6b1a5"},223948896:{address:"11",height:4.7,wall:"#b7a188",roof:"#777774"},223948899:{address:"13",height:4.6,wall:"#c4baaa",roof:"#cbc7bc"},223948902:{address:"15/1",height:4.45,wall:"#c0b4a2",roof:"#c4c0b5"},223948903:{address:"15/2",height:4.45,wall:"#bab0a1",roof:"#c4c0b5"},223948904:{address:"15/3",height:4.4,wall:"#baafa0",roof:"#c4c0b5"},223948906:{address:"17",height:4.35,wall:"#9c8471",roof:"#b3aba1"},223948908:{address:"19",height:3.65},223948913:{address:"21",height:3.75,wall:"#b4a18a",roof:"#a59c8b",name:"Хинкальная"},223948916:{address:"23",height:3.85,wall:"#85685b",roof:"#77716a",veranda:!0}};function y5(i){const t=i.reduce((e,n,s)=>{const o=i[(s+1)%i.length];return e+n[0]*o[1]-o[0]*n[1]},0);return i.map((e,n)=>[e,i[(n+1)%i.length]]).filter(([e,n])=>{const s=Math.hypot(n[0]-e[0],n[1]-e[1]);return s>=2&&(n[0]-e[0])*Math.sign(t)/s>.42})}function S5(i,t,e,{height:n,wall:s,roof:o,veranda:r}){const a=y5(t),l=e.lowerWaterfront??e,c=Math.min(...t.map(d=>l(...d))),h=c+n,f=Be(t),u=r?t.map(d=>ft(f,d,.8)):t;i.shell(t,c-.24,c+.32,"#b2a798"),i.shell(u,c+.3,h-.28,s,null),i.shell(t,h-.28,h,o);for(const[d,m]of a){const _=Math.hypot(m[0]-d[0],m[1]-d[1]),g=Math.max(1,Math.round(_/(r?3.4:2.5))),p=ft(f,d,1.005),x=ft(f,m,1.005);for(let M=0;M<g;M++){const v=ft(p,x,(M+.12)/g),S=ft(p,x,(M+.88)/g);if(r){const y=ft(d,m,M/g);i.beam([y[0],c+.32,y[1]],[y[0],h-.26,y[1]],.16,s),i.beam([v[0],c+.97,v[1]],[S[0],c+.97,S[1]],.075,"#66645f");const w=ft(f,v,.8),b=ft(f,S,.8);i.wall(w,b,c+.65,h-.44,x0)}else i.wall(v,S,c+.55,h-.6,x0),i.beam([v[0],c+1.31,v[1]],[S[0],c+1.31,S[1]],.07,s)}r&&i.beam([m[0],c+.32,m[1]],[m[0],h-.26,m[1]],.16,s)}}function b5(i,t,e,n){const s=n?-361.1:-351.8,o=n?-354.7:-331,r=n?-29.5:-29.6,a=(e.lowerWaterfront??e)((s+o)/2,r),l=n?"#e1dbcc":"#ac8b65",c=n?"#244945":"#302723",h=(g,p,x=0)=>[n?s+o-g:g,a+p,r-x],f=(g,p,x,M)=>[[g,x],[p,x],[p,M],[g,M]],u=(g,p,x,M,v,S)=>{t.face(S,h(g,x,v),h(p,x,v),h(p,M,v),h(g,M,v))},d=(g,p,x,M,v,S)=>t.beam(h(g,x,M),h(p,x,M),v,S),m=(g,p,x,M,v,S)=>t.beam(h(g,p,M),h(g,x,M),v,S);t.shell(f(s,o,r,r+2.55),a+.12,a+5.36,l),u(s+.16,o-.16,3.72,5.16,.022,"#687c86");const _=n?4:12;for(let g=0;g<=_;g++)m(s+.16+(o-s-.32)*g/_,3.7,5.18,.041,.065,"#d6d1c7");if(d(s+.16,o-.16,4.47,.038,.068,"#d6d1c7"),n){const g=s+.42;u(g,g+1.16,.31,2.52,.034,"#755336"),u(g+.11,g+1.05,.95,2.41,.044,"#45534a"),u(g+.11,g+1.05,.35,.94,.044,c),u(s+2.02,o-.38,.47,2.46,.026,"#4e6355");const p=In(i,{path:"art/adrian-bistro-window.webp",atlasGrid:1,interiorMix:.58,name:"Adrian Bistro — интерьер за витриной",crop:[.005,.005,.99,.99]}),x={point:(S,y)=>[s+o-S,r-y]};p.add(x,s+2.02,o-.38,a+.47,a+2.46,0,0,.05),p.finish();for(let S=0;S<=3;S++)m(s+2.02+S*1.33,.45,2.48,.06,.12,"#79573b");const M=s+1.84,v=o-.22;t.face("#236a66",h(M,2.77),h(v,2.77),h(v,2.5,1.38),h(M,2.5,1.38)),u(M,v,2.34,2.5,1.38,"#286c67"),Ie(i,{text:"Adrian",position:h((M+v)/2,2.42,1.39),size:[1.48,.15],outward:[0,-1],color:"#f5e9ce",lighting:"unlit"}),Ie(i,{text:"Adrian  BISTRO",position:h((M+v)/2,3.15,.035),size:[3.98,.53],outward:[0,-1],background:"#536e55",color:"#f1d8a1",fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#ffca70"}),t.shell(f(s+.12,o-.08,r-1.65,r),a+.13,a+.31,"#b5a58c"),d(s+1.75,o-.15,1.14,1.53,.061,c);for(let S=0;S<=11;S++)m(s+1.75+S*.409,.31,1.14,1.53,.035,c);for(const S of[s+.3,s+1.72,o-.45]){const[y]=h(S,0),w=(E,T)=>Array.from({length:8},(C,L)=>[y+Math.cos(L*Math.PI/4)*E,r-T+Math.sin(L*Math.PI/4)*E]);t.shell(w(.24,.83),a+.31,a+.7,"#ab694f");const b=w(.3,.83);for(let E=0;E<b.length;E++){const T=b[E],C=b[(E+1)%b.length];t.face(E%2?"#345c46":"#40694d",[T[0],a+.66,T[1]],[C[0],a+.66,C[1]],[y,a+1.85,r-.83])}}for(const S of[s+2.7,s+4.56]){m(S,.31,1,.93,.075,"#765d41");const[y]=h(S,0);t.shell(f(y-.31,y+.31,r-1.15,r-.71),a+.98,a+1.03,"#8b6c4b")}}else{t.shell(f(s,o,r-1.2,r),a+.12,a+.31,"#786858"),t.face("#392e27",h(s,3.16),h(o,3.16),h(o,2.79,1.21),h(s,2.79,1.21)),u(s,o,2.62,2.79,1.21,"#3d2f28");const g=8,p=(o-s)/g;for(let v=0;v<g;v++){const S=s+p*v;u(S+.08,S+p-.08,.34,2.61,.032,v%3===0?"#587273":"#354d50"),m(S+.02,.31,2.68,1.13,.088,c),d(S+.12,S+p-.18,1.12,1.11,.07,"#7e5e42");for(let y=0;y<=5;y++)m(S+.12+(p-.3)*y/5,.31,1.12,1.11,.039,"#7e5e42")}const x=In(i,{path:"art/bavaria-window.webp",name:"Bavaria — интерьер за витриной",atlasGrid:1,crop:[.005,.005,.99,.99],interiorMix:.65,glassTint:"#526c70"}),M={point:(v,S)=>[v,r-S]};for(let v=0;v<8;v++){const S=s+p*v;x.add(M,S+.08,S+p-.08,a+.34,a+2.61,0,0,.05,[.005+v%4*.2475,.005,.2475,.99])}x.finish(),m(o-.02,.31,2.68,1.13,.088,c),Ie(i,{text:"BAVARIA",position:h(-342.2,3.07,1.24),size:[5.9,.55],outward:[0,-1],color:"#f5e5ca",fontFamily:"Georgia, serif",lighting:"backlit"}),w5(i,t,e)}}function w5(i,t,e){const o=e(-332.9,-27.7)+.13;for(const a of[-1,1]){const l=-332.9+a*1.05;t.beam([l,o,-27.7],[l,o+2.58,-27.7],.08,"#606564")}const r=[[-332.9-1.12,-27.7-.05],[-332.9+1.12,-27.7-.05],[-332.9+1.12,-27.7+.05],[-332.9-1.12,-27.7+.05]];t.shell(r,o+1.61,o+2.64,"#593b2a");for(const a of[1.87,2.12,2.38])t.beam([-332.9-1.1,o+a,-27.7+.05],[-332.9+1.1,o+a,-27.7+.05],.008,"#492b21");t.beam([-332.9+.2,o+2.64,-27.7],[-332.9+.28,o+2.95,-27.7+.13],.029,"#31302f"),t.beam([-332.9+.23,o+2.95,-27.7+.13],[-332.9+.35,o+2.95,-27.7+.15],.052,"#31302f"),Ie(i,{text:"BAVARIA",position:[-332.9,o+2.26,-27.7+.061],size:[1.98,.42],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffc882"}),Ie(i,{text:"GRILL&BAR",position:[-332.9,o+1.98,-27.7+.061],size:[1.2,.21],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",spill:!1})}function E5(i,t,e){const n=[-278.9,-35.55],s=[-260.3,-39.94],o=Math.hypot(s[0]-n[0],s[1]-n[1]),r=[(s[1]-n[1])/o,(n[0]-s[0])/o],a=ft(n,s,.61),l=(e.lowerWaterfront??e)(...a),c=(_,g=0)=>{const[p,x]=ft(n,s,_);return[p+g*r[0],x+g*r[1]]},h=(_,g,p=0)=>{const[x,M]=c(_,p);return[x,l+g,M]},f="#59606a",u="#313a43";t.wall(n,s,l+.13,l+3.39,f),t.wall(c(0,.022),c(1,.022),l+2.61,l+3.39,u);const d=[0,.1,.2,.3,.4,.49,.56,.66,.73,.82,.91,1];for(let _=1;_<d.length;_++){const g=d[_-1],p=d[_],x=_===7;t.wall(c(g,.038),c(p,.038),l+(x?.34:.63),l+2.6,x?"#334955":"#6b8596"),t.beam(h(g,x?.33:.62,.08),h(g,2.62,.08),.085,u),x||t.beam(h(g,2.11,.064),h(p,2.11,.064),.058,u)}const m={point:(_,g)=>c(_/o,g)};for(const[_,g]of[[0,.56],[.66,1]]){const p=In(i,{path:"art/khinkalnaya-window.webp",name:"Хинкальная — интерьер и отражения",atlasGrid:1,crop:[.005+.99*_,.005,.99*(g-_),.99],interiorMix:.63,glassTint:"#6b8596"});p.add(m,_*o,g*o,l+.63,l+2.6,0,0,.05),p.finish()}t.beam(h(1,.62,.08),h(1,2.62,.08),.085,u),Ie(i,{text:"Хинкальная",position:h(.61,2.92,.051),size:[5.54,.56],outward:r,fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#e6f1ff"}),Ie(i,{text:"грузинская  Кафе  европейская",position:h(.61,3.26,.051),size:[4.06,.17],outward:r,fontFamily:"Georgia, serif",color:"#fff4e1",lighting:"spot",spill:!1})}function T5(i,t,e){const{id:n,rings:[s]}=t,o=M5[n];if(!o&&n!=="223949008")return!1;const r=n==="223949008"?"Вино и море":n==="223948908"?"Причал":o.name??`Набережная, ${o.address}`,a=me(i,r,{surfaces:{glass:[x0,"#687c86","#45534a","#4e6355","#587273","#354d50","#4b5351","#35494d","#475958","#334955","#6b8596"],wood:["#755336","#79573b","#765d41","#8b6c4b","#7e5e42","#88684d","#795b45","#916e49","#968477","#593b2a"],foliage:["#345c46","#40694d"],stone:["#b2a798","#b5a58c","#aa9c80","#aaa293"],flatRoof:[o?.roof,"#b6b2a5","#777e7b","#929895"],metal:["#244945","#302723","#484740","#323a3e"]}});return n==="223949008"?v5(i,a,s,e):n==="223948908"?x5(i,a,s,e,o.height):(S5(a,s,e,o),(n==="223948904"||n==="223948906")&&b5(i,a,e,n==="223948904"),n==="223948913"&&E5(i,a,e)),a.finish(),!0}function A5(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=r*Math.sign(t)/a,c=-o*Math.sign(t)/a;return{a:e,b:s,length:a,nx:l,nz:c,point(h,f=0){return[e[0]+o*h/a+l*f,e[1]+r*h/a+c*f]}}})}function R5(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function Ju(i,t,e,n,s,o,r){const a=(u,d,m,_)=>R5(t,u,d,m,_),l=["#f16d91","#e83868","#ff9cb2","#ffe6a1","#f5b540"],c=n-.2,h=n+.2;i.shell(a(e-o/2,e+o/2,c,h),s,s+.28,"#9a553a","#bd7450"),i.shell(a(e-o/2+.05,e+o/2-.05,c+.03,h-.03),s+.27,s+.37,"#38682d","#548b39");const f=Math.max(4,Math.floor(o/.16));for(let u=0;u<f;u++){const d=e-o/2+(u+.5)*o/f,m=n+Math.sin((u+r)*2.61)*.12,_=s+.38+.05*((u*7+r)%3),g=.075+.018*((u+r)%3);i.shell(a(d-g,d+g,m-g,m+g),_,_+g*1.5,l[(u*3+r)%l.length])}}function C5(i,t,e,n,s){const o=i.children.find(_=>_.isMesh&&_.geometry?.type==="IcosahedronGeometry"&&Math.hypot(_.position.x-t,_.position.z-e)<.02);if(!o)return!1;o.visible=!1;const r=i.children.find(_=>_.isMesh&&_.geometry?.type==="CylinderGeometry"&&Math.hypot(_.position.x-t,_.position.z-e)<.02);r&&(r.material=Sn(new jt({color:"#94714d"}),{texture:{path:"art/starinnaya-bark.webp",size:[1.4,2.8],amount:.9,pixelated:!0}}));const a=new ge;a.name="Лиственная крона у Старинной Анапы",a.position.set(t,n(t,e)+6.7,e);const l=Sn(new jt({color:"#8ab65a"}),{texture:{path:"art/starinnaya-leaves.webp",size:[2.1,2.1],amount:.82,pixelated:!0}}),c=new oe(new Zn(1,3),l);c.scale.set(2.42,2.7,2.2),c.castShadow=!0,a.add(c);const h=128,f=new Zn(1,2),u=new dn(f,l,h),d=["#7daa55","#9abb65","#73a34d","#a2c873","#659549","#90b961"],m=new ye;for(let _=0;_<h;_++){const g=_*2.39996+s*.41,p=1-2*(_+.5)/h,x=Math.sqrt(Math.max(0,1-p*p));m.position.set(Math.cos(g)*x*2.34,p*2.5,Math.sin(g)*x*2.04);const M=.51+(_*11+s)%5*.045;m.scale.set(M*1.16,M*.96,M),m.rotation.set(0,g,0),m.updateMatrix(),u.setMatrixAt(_,m.matrix),u.setColorAt(_,new Ht(d[(_*5+s)%d.length]))}return u.castShadow=!0,u.receiveShadow=!0,a.add(u),i.add(a),!0}function P5(i,t,e,n,s){const o=new ge;o.name="Цветущий куст у Старинной Анапы",o.position.set(t,n(t,e),e);const r=Sn(new jt({color:"#669740"}),{texture:{path:"art/starinnaya-leaves.webp",size:[1.25,1.25],amount:.7,pixelated:!0}}),a=26,l=new dn(new Zn(1,2),r,a),c=new ye;for(let d=0;d<a;d++){const m=d*2.39996+s,_=d===0?0:.35+d%3*.13;c.position.set(Math.cos(m)*_,.27+d%4*.08,Math.sin(m)*_),c.scale.set(.35,.31,.35),c.rotation.set(0,m,0),c.updateMatrix(),l.setMatrixAt(d,c.matrix)}l.castShadow=!0,o.add(l);const h=48,f=new dn(new Ne(1,1,1),new jt({color:"#ffffff"}),h*3),u=["#f04478","#fa6c99","#f586ad","#f6a3bf","#ffd3df","#df3e6d"];for(let d=0;d<h;d++){const m=d*2.39996+s*.7,_=Math.sqrt((d*47+s*13)%101/101)*.76,g=Math.cos(m)*_,p=Math.sin(m)*_,x=.35+.42*Math.sqrt(Math.max(0,1-_*_/.85**2));for(let M=0;M<3;M++){const v=M*Math.PI*2/3+m;c.position.set(g+Math.cos(v)*.055,x+(M===0?.025:0),p+Math.sin(v)*.055),c.scale.set(.13,.11,.13),c.rotation.set(0,v,0),c.updateMatrix();const S=d*3+M;f.setMatrixAt(S,c.matrix),f.setColorAt(S,new Ht(u[(d+M+s)%u.length]))}}f.castShadow=!0,o.add(f),i.add(o)}function L5(i,t,e){const n=t.buildings.find(p=>p.id==="r11979734-0")?.rings?.[0];if(!n)return;const s=A5(n).filter(p=>p.length>.1),o=n.reduce((p,[,x])=>p+x,0)/n.length,r=s.filter(({a:p,b:x,length:M,nz:v})=>M>27&&v<-.8&&(p[1]+x[1])/2<o-5).sort((p,x)=>Math.min(p.a[0],p.b[0])-Math.min(x.a[0],x.b[0])),a=s.find(p=>p.length>8.7&&p.length<10&&p.nz<-.8);if(r.length<2||!a)return;const l=r[0].a,c=r.at(-1).b,h=c[0]-l[0],f=c[1]-l[1],u=Math.hypot(h,f),d={length:u,point(p,x=0){return[l[0]+h*p/u+f*x/u,l[1]+f*p/u-h*x/u]}},m=u/2,_=e(...d.point(m,.7))+.08,g=me(i,"Цветы и кашпо у Старинной Анапы",{surfaces:{foliage:["#38682d","#548b39"],wood:["#9a553a","#bd7450"],metal:["#f16d91","#e83868","#ff9cb2","#ffe6a1","#f5b540"]}});for(const p of[1,2])for(let x=0;x<3;x++){const M=a.length*(x+.5)/3;Ju(g,a,M,.57,_+3.3+.24+p*2.7+.23,1.45,p*5+x)}for(const[p,x]of[-32,-24,-16,16,24,32].entries())Ju(g,d,m+x,1.55,_+.02,1.8,p+11);g.finish();for(const[p,x]of[-20,20].entries()){const[M,v]=d.point(m+x,10);if(C5(i,M,v,e,p+2)){const[S,y]=d.point(m+x+Math.sign(x)*.55,10);P5(i,S,y,e,p+2)}}}function D5(i){const t=new Dn({side:fn,depthTest:!1,depthWrite:!1,uniforms:{skyHorizon:{value:new Ht("#b3d5d5")},skyBlue:{value:new Ht("#238fdb")},skyPale:{value:new Ht("#9ed7ef")},cloudWhite:{value:new Ht("#fffaf2")},cloudMid:{value:new Ht("#d8e4f3")},cloudShadow:{value:new Ht("#aac5e1")}},vertexShader:`
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
    `}),e=new oe(new vn(2e3,32,16),t);e.name="Мультяшное дневное небо",e.frustumCulled=!1,e.renderOrder=-1e3,i.add(e);let n=!0;return{setDaytime(s){n=s},update(s,o){e.visible=n&&o,e.visible&&e.position.copy(s.position)}}}function I5(i,t){const[e,n]=Hi[1],s=t(e,n),o=Math.cos(Vi),r=Math.sin(Vi),a=[r,-o],l=(v,S,y)=>[e+v*o+y*r,s+S,n+v*r-y*o];if(Ie(i,{text:"ГОРГИППИЯ",position:l(2.55,1.68,.345),size:[.39,.58],outward:a,color:"#3c3021",background:"#b99b62",weight:600,lighting:"unlit"}),typeof document>"u")return;const c=3.56,h=.65,f=document.createElement("canvas");f.width=768,f.height=Math.round(f.width*h/c);const u=f.getContext("2d");if(!u)return;const d="АРХЕОЛОГИЧЕСКИЙ МУЗЕЙ";u.font="600 39px system-ui, sans-serif";const m=Array.from(d,v=>u.measureText(v).width),_=f.width*.92,g=(_-m.reduce((v,S)=>v+S,0))/(d.length-1);let p=(f.width-_)/2;u.fillStyle="#292726",u.textAlign="center",u.textBaseline="middle";for(let v=0;v<d.length;v++){const S=p+m[v]/2,y=(S-f.width/2)/f.width;u.fillText(d[v],S,42+278*y**2),p+=m[v]+g}const x=new Yc(f);x.colorSpace=Ke,x.anisotropy=4;const M=new oe(new mi(c,h),new jt({map:x,alphaTest:.35}));M.name=d,M.position.set(...l(0,3.31,.066)),M.rotation.y=Math.atan2(...a),i.add(M)}function U5(i,t){const e=[],n=t/2;for(let s=1;s+1<i.length;s++){const[o,r]=i[s-1],[a,l]=i[s],[c,h]=i[s+1],f=[a-o,l-r],u=[c-a,h-l],d=Math.hypot(...f),m=Math.hypot(...u);if(d<.05||m<.05)continue;const _=(f[0]*u[1]-f[1]*u[0])/(d*m);if(Math.abs(_)<.001)continue;const g=_>0?-1:1;e.push([[a,l],[a-g*f[1]*n/d,l+g*f[0]*n/d],[a-g*u[1]*n/m,l+g*u[0]*n/m]])}return e}const{Color:Cn,Vector2:N5,Vector3:lh}=rh,ke=24,Zd=4,F5=2;function Kd(i,t,e){return i.refinesStairs(t,e,ke)?F5:i.refines(t,e,ke)?Zd:ke}const ki={land:"#c6b899",beach:"#e0c893",park:"#8da371",water:"#6eabb5",pier:"#c5bdae",plaza:"#d0c1aa",ruins:"#aea27e",road:"#989891",path:"#d9ccb6",tree:"#7b9367",shingle:"#aaa495",rockLight:"#a59172",riprap:"#898a78",quay:"#aca99e"},Qu=["#c6b9a5","#b0aca1","#b8a08b","#ddd3ba","#9a9c93"],O5=["#e9deca","#ded6c7","#d6c5ad","#e4d8bf","#d8d6c7"],hh=new Set(["footway","pedestrian","steps","cycleway","path","track"]),ju=new Set(["223948926"]),B5=[Wx,Xx,Ov,qv,_5,T5,Pv,$v,Kv];function yi(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function xr(i){const t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function er(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function z5(i,t,e=Id(i)){const{bounds:[n,s,o,r],columns:a,rows:l,heights:c}=t,[h,f]=i.origin,[u,d]=i.scale;function m(y,w){const b=ue.clamp((h+y/u-n)/(o-n)*(a-1),0,a-1),E=ue.clamp((r-f+w/d)/(r-s)*(l-1),0,l-1),T=Math.min(Math.floor(b),a-2),C=Math.min(Math.floor(E),l-2),L=C*a+T,P=ue.lerp(c[L],c[L+1],b-T),R=ue.lerp(c[L+a],c[L+a+1],b-T);return Math.max(.16,ue.lerp(P,R,E-C))}function _(y,w){const b=new Map,E=(T,C)=>{const L=`${T}:${C}`;return b.has(L)||b.set(L,y(T,C)),b.get(L)};return(T,C)=>{const L=w(T,C),P=Math.floor(T/L)*L,R=Math.floor(C/L)*L,I=(T-P)/L,N=(C-R)/L,F=E(P+L,R),V=E(P,R+L);return I+N<=1?E(P,R)*(1-I-N)+F*I+V*N:E(P+L,R+L)*(I+N-1)+F*(1-N)+V*(1-I)}}const g=rx(i),p=_((y,w)=>g(y,w,m(y,w)),()=>ke),x=_((y,w)=>e.height(y,w,p),(y,w)=>Kd(e,Math.floor(y/ke)*ke,Math.floor(w/ke)*ke)),M=(y,w)=>e.waterfront.nearEdge(y,w)||e.nearTransition(y,w)?e.height(y,w,p):x(y,w);return Object.assign(M,{plain:p,faceHeight:(y,w,b)=>b?e.height(y,w,p,b):M(y,w),lowerWaterfront:(y,w)=>e.waterfront.lowerGrade(y,w,M(y,w))})}function Xn(i=!1){const t=[],e=[],n=i?[]:null;return{triangle(s,o,r,a,l){t.push(...s,...o,...r),n&&n.push(...l);for(const c of[s,o,r]){const h=typeof a=="function"?a(...c):a;e.push(h.r,h.g,h.b)}},mesh(s,o=en){const r=new Ae;r.setAttribute("position",new ee(t,3)),r.setAttribute("color",new ee(e,3)),n&&r.setAttribute("facadeGrid",new ee(n,3)),r.computeVertexNormals();const a=new oe(r,new jt({vertexColors:!0,side:o}));return a.name=s,a.receiveShadow=!0,a}}}function Rn(i,t,e=1){return Sn(i.material,{surface:t,strength:e}),i}function k5(i){const t=i.material;return t.customProgramCacheKey=()=>"district-facade-grid",t.onBeforeCompile=e=>{e.uniforms.facadeEnabled=ms.cartoonEnabled,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        ${ol.replace("cartoonDistrict","windowGridDistrict")}
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
      `)},Rn(i,"plaster")}function Jd(i){const t=i.map(s=>s.map(([o,r])=>new N5(o,r))),e=Ei.triangulateShape(t[0],t.slice(1)),n=t.flat().map(({x:s,y:o})=>[s,o]);return e.map(s=>s.map(o=>n[o]))}function v0(i,t,e,n){const[s,o,r]=t,a=(o[0]-s[0])*(r[1]-s[1])-(o[1]-s[1])*(r[0]-s[0]);if(Math.abs(a)<1e-4)return;const l=([c,h])=>[c,e(c,h),h];i.triangle(l(s),l(a>0?r:o),l(a>0?o:r),n)}function Gi(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l])}}return e}function G5(i,t,e,n){let s=Gi(i,o=>o[0]-t);return s=Gi(s,o=>t+n-o[0]),s=Gi(s,o=>o[1]-e),Gi(s,o=>e+n-o[1])}function M0(i,t,e,n,s,o=!1){const[r,a,l,c]=xr(t);for(let h=Math.floor(r/ke)*ke;h<l;h+=ke){let f=Gi(t,u=>u[0]-h);if(f=Gi(f,u=>h+ke-u[0]),!(f.length<3))for(let u=Math.floor(a/ke)*ke;u<c;u+=ke){let d=Gi(f,_=>_[1]-u);if(d=Gi(d,_=>u+ke-_[1]),d.length<3)continue;const m=Kd(s,h,u);for(let _=h;_<h+ke;_+=m)for(let g=u;g<u+ke;g+=m){const p=m===ke?d:G5(d,_,g,m);if(!(p.length<3))for(const x of[1,-1]){const M=Gi(p,([S,y])=>x*(_+g+m-S-y));if(M.length<3)continue;const v=o?s.waterfront.split(M):null;if(!v){for(let S=2;S<M.length;S++)v0(i,[M[0],M[S-1],M[S]],e,n);continue}for(const{ring:S,side:y}of v){const w=(b,E)=>e(b,E,y);for(let b=2;b<S.length;b++)v0(i,[S[0],S[b-1],S[b]],w,n)}}}}}}function io(i,t,e,n,s,o=!1){for(const r of Jd(t))M0(i,r,e,n,s,o)}function tf(i,t=[.36,.28]){const[e,n]=t;return i.material.customProgramCacheKey=()=>`promenade-${e}-${n}`,i.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      `)},i}function Qd(i,t){return i.kind==="pier"||i.bridge?.85:t.waterfront.upperWidths[i.id]||t.waterfront.lowerWidths[i.id]||i.level?.15:hh.has(i.kind)?.35:.31}function H5(i,t,e,n){const{points:s,kind:o,id:r}=t,a=n.promenadeWidths.get(r)??t.width,l=n.stairHeight(t,e.plain);if(l){V5(i,s,a,l);return}const c=hh.has(o),h=n.waterfront.upperWidths[r]||t.level==="upper",f=n.waterfront.lowerWidths[r]||t.level==="lower",u=new Cn(h?"#b7b7b1":f?"#a9aaa5":n.promenadeWidths.has(r)?"#c5c3b8":o==="pier"?ki.pier:c?ki.path:ki.road),d=Qd(t,n),m=(_,g,p)=>(n.rampHeight(t,_,g)??e.faceHeight(_,g,p))+d;for(let _=1;_<s.length;_++){const[g,p]=s[_-1],[x,M]=s[_],v=x-g,S=M-p,y=Math.hypot(v,S);if(y<.05)continue;const w=-S*a/(2*y),b=v*a/(2*y);M0(i,[[g+w,p+b],[x+w,M+b],[x-w,M-b],[g-w,p-b]],m,u,n,!0)}for(const _ of U5(s,a))M0(i,_,m,u,n,!0)}function jd(i,t,{from:e,to:n,run:s}){const o=i.slice(1).map(([l,c],h)=>Math.hypot(l-i[h][0],c-i[h][1])),r=o.reduce((l,c)=>l+c,0);let a=0;return o.flatMap((l,c)=>{if(l<.04)return[];const[h,f]=i[c],u=i[c+1][0]-h,d=i[c+1][1]-f,m=a/r;a+=l;const _=a/r,g=[m,...s.filter(x=>x>m&&x<_),_],p=x=>ue.lerp(e,n,ue.clamp((x-s[0])/(s[1]-s[0]),0,1));return g.slice(1).map((x,M)=>{const v=g[M],S=(v-m)/(_-m),y=(x-v)/(_-m),w=p(v),b=p(x),E=Math.max(1,Math.round(Math.abs(b-w)/.17)),T=C=>ue.lerp(w,b,C/E)+.15;return{x:h+u*S,z:f+d*S,dx:u*y,dz:d*y,length:l*y,width:t,count:E,height:T}})})}function V5(i,t,e,n){const s=new Cn("#c5bdb0"),o=new Cn("#a69d90");for(const{x:r,z:a,dx:l,dz:c,length:h,count:f,height:u}of jd(t,e,n)){const d=-c*e/(2*h),m=l*e/(2*h),_=(g,p,x)=>[r+l*g+d*x,p,a+c*g+m*x];for(let g=0;g<f;g++){const p=g/f,x=(g+1)/f,M=u(g),v=u(g+1),S=_(p,M,1),y=_(p,M,-1),w=_(x,M,-1),b=_(x,M,1),E=_(x,v,-1),T=_(x,v,1);i.triangle(S,y,w,s),i.triangle(S,w,b,s),i.triangle(b,w,E,o),i.triangle(b,E,T,o)}}}function W5(i,t){const e=i.surveyedStairs.flatMap(n=>jd(n.points,n.width,i.stairHeight(n,t.plain)));return(n,s)=>{if(i.nearTransition(n,s)){for(const o of e){const{x:r,z:a,dx:l,dz:c,length:h,width:f,count:u,height:d}=o,m=((n-r)*l+(s-a)*c)/(h*h),_=((s-a)*l-(n-r)*c)/h;if(m>=0&&m<=1&&Math.abs(_)<f/2)return d(Math.min(u-1,Math.floor(m*u)))}for(const o of i.ramps)if(er(n,s,[o.bounds[0]-o.width,o.bounds[1]-o.width,o.bounds[2]+o.width,o.bounds[3]+o.width])&&rn(n,s,o.points).distance<o.width/2)return i.rampHeight(o,n,s)+Qd(o,i)}}}function X5(i,t,e,n){const s=t.buildings.find(c=>c.id==="170958806");if(!e||!s)return;const[o]=xr(s.rings[0]),r=[];for(let c=1;c<e.length;c++){const[h,f]=e[c-1],[u,d]=e[c],m=u-h,_=d-f,g=Math.hypot(m,_);for(let p=.8;p<g;p+=1.42){const x=h+m*p/g,M=f+_*p/g;if(!(x<o-122||x>-161.9))for(const v of[.9,2.15,3.4]){const S=Math.sin(p*6.13+c*13.7+v)*.35,y=x+_*(v+S)/g,w=M-m*(v+S)/g,b=n(y,w);b<2.55&&t.land.some(E=>yi(y,w,E))&&r.push([y,b,w,S])}}}const a=new dn(new Zn(1,0),new jt({color:"#ada79a",flatShading:!0}),r.length);a.name="Каменная отсыпка у нижней набережной";const l=new ye;r.forEach(([c,h,f,u],d)=>{l.position.set(c,h-.05,f),l.scale.set(.72+u*.5,.32+u*.31,.53-u*.3),l.rotation.set(u,d*1.71,u*1.3),l.updateMatrix(),a.setMatrixAt(d,l.matrix),a.setColorAt(d,new Cn().setScalar(.8+d%7*.055))}),a.receiveShadow=!0,i.add(Rn(a,"stone"))}function q5(i,t,e){const n=i.mesh("Terrain"),{position:s,normal:o}=n.geometry.attributes,r=new lh,a=3.2;for(let l=0;l<s.count;l++){if(o.getY(l)<.05)continue;const c=s.getX(l),h=s.getZ(l);if(e.waterfront.nearEdge(c,h))continue;const f=Math.floor(c/ke)*ke,u=Math.floor(h/ke)*ke;e.refines(f,u,ke)&&(r.set(t(c-a,h)-t(c+a,h),2*a,t(c,h-a)-t(c,h+a)).normalize(),o.setXYZ(l,r.x,r.y,r.z))}return o.needsUpdate=!0,n}function ef(i,t,e,n=null){const{rings:s,height:o,id:r}=t,a=Number(String(r).match(/\d+$/)?.[0]??0)%Qu.length,l=new Cn(Qu[a]),c=new Cn(O5[a]),h=Math.max(...s[0].map(([m,_])=>e(m,_))),f=h+o,u=Math.max(1,Math.round(o/3.15)),d=o/u;for(const m of Jd(s))v0(i,m,()=>f,l);for(const[m,_]of s.entries()){const p=_.reduce((x,[M,v],S)=>{const[y,w]=_[(S+1)%_.length];return x+M*w-y*v},0)>0==m>0?_:_.slice().reverse();for(let x=0;x<p.length;x++){const[M,v]=p[x],[S,y]=p[(x+1)%p.length],w=[M,e(M,v)-.2,v],b=[S,e(S,y)-.2,y],E=[S,f,y],T=[M,f,v];if(n){const C=Math.hypot(S-M,y-v),L=Math.max(1,Math.round(C/3.2)),P=C>2.2&&o>2.65?1:0,R=[0,(w[1]-h)/d,P],I=[L,(b[1]-h)/d,P],N=[L,u,P],F=[0,u,P];n.triangle(w,b,E,c,[...R,...I,...N]),n.triangle(w,E,T,c,[...R,...N,...F])}else i.triangle(w,b,E,c),i.triangle(w,E,T,c)}}}function Y5(i,t,e){if(!t.length)return;const n=new dn(new yn(.15,.24,2.4,5),new jt({color:"#776952"}),t.length),s=new dn(new Zn(1,1),new jt({color:ki.tree,flatShading:!0}),t.length),o=new ye;t.forEach(([r,a],l)=>{const c=1.5+l*17%13*.11,h=e(r,a);o.position.set(r,h+1.2,a),o.scale.set(1,1,1),o.updateMatrix(),n.setMatrixAt(l,o.matrix),o.position.y=h+2.6+c*.35,o.scale.set(c,c*1.23,c),o.rotation.y=l*1.4,o.updateMatrix(),s.setMatrixAt(l,o.matrix),s.setColorAt(l,new Cn().setScalar(.77+l*11%7*.047))}),s.castShadow=!0,s.receiveShadow=!0,i.add(Rn(n,"wood",.75),Rn(s,"foliage",1))}function $5(i,t){const[e,n,s,o]=t,r={time:{value:0},evening:{value:0},sun:{value:new lh(-.6,.55,-.5).normalize()},haze:{value:new Cn("#b3d5d5")},cartoonEnabled:ms.cartoonEnabled,...k_()},a=new Dn({uniforms:r,vertexShader:`
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
      ${ol}
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
    `}),l=Math.max(s-e,o-n)*4,c=new oe(new mi(l,l),a);return c.rotation.x=-Math.PI/2,c.position.set((e+s)/2,-.18,(n+o)/2),i.add(c),r}function Z5(i,t,e){const n=new Rd({canvas:i,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1;const s=new V0,o=[];s.fog=new Wc("#b3d5d5",900,3200),s.background=new Cn("#b3d5d5");const r=D5(s),a=Id(t),l=z5(t,e,a),c=$5(s,t.bounds);jv(s);const h=Xn(),f=new Cn(ki.land),u=Object.fromEntries(["shingle","rockLight","riprap","quay"].map(W=>[W,new Cn(ki[W])])),d=new Cn;function m(W,X,gt){const ht=a.tone(W,gt,X);if(!ht)return f;const[Mt,At]=ht;return d.copy(f).lerp(u[Mt],At)}const _=t.areas.some(({id:W})=>W===Fu),g=_?vv(l):null,p=xr(Es),x=(W,X)=>_&&er(W,X,p)&&yi(W,X,Es);for(const W of t.land){const X=_&&Es.every(([gt,ht])=>yi(gt,ht,W))?[Es]:[];io(h,[W,...X],l.faceHeight,m,a,!0);for(let gt=0;gt<W.length;gt++){const[ht,Mt]=W[gt],[At,k]=W[(gt+1)%W.length],Jt=a.refines(ht,Mt,ke)?Zd:12,Kt=Math.max(1,Math.ceil(Math.hypot(At-ht,k-Mt)/Jt));for(let U=0;U<Kt;U++){const A=[ht+(At-ht)*U/Kt,Mt+(k-Mt)*U/Kt],K=[ht+(At-ht)*(U+1)/Kt,Mt+(k-Mt)*(U+1)/Kt],st=[A[0],l(...A),A[1]],ct=[K[0],l(...K),K[1]],yt=[A[0],-.4,A[1]],Tt=[K[0],-.4,K[1]];h.triangle(st,yt,ct,m),h.triangle(ct,yt,Tt,m)}}}const M=Xn(),v=Xn(),S=Xn(),y={beach:.13,park:.14,plaza:.2,ruins:.22,water:.24,pier:.7};for(const W of t.areas){if(W.id===Fu)continue;const X=W.kind==="beach"&&(W.id==="368318892"||["pebblestone","gravel"].includes(W.surface)),gt=new Cn(X?ki.shingle:ki[W.kind]??ki.park),ht=(At,k,Jt)=>l.faceHeight(At,k,Jt)+(y[W.kind]??.14),Mt=W.kind==="pier"||W.kind==="plaza"?v:W.kind==="park"?S:M;io(Mt,W.rings,ht,gt,a,!0)}const w=Xn(),b=Xn(),E=Xn(),T=Xn(),C=new Cn("#b7b7b1"),L=new Cn("#a9aaa5"),P=[];for(const W of a.waterfront.sections){for(const X of W.upperDecks)P.push(X),io(T,[X],(ht,Mt)=>l.faceHeight(ht,Mt,{section:W,upper:!0})+.12,C,a);for(const X of W.lowerDecks)io(E,[X],(ht,Mt)=>l.faceHeight(ht,Mt,{section:W,upper:!1})+.12,L,a)}for(const W of a.allRoads){const X=a.waterfront.upperWidths[W.id]&&!(W.id in a.waterfront.rampLevels),gt=a.waterfront.lowerWidths[W.id],ht=X?T:gt?E:hh.has(W.kind)||W.kind==="pier"?b:w;H5(ht,W,l,a)}const R=Xn(),I=Xn(),N=Xn(!0),F=[Ko.west,Ko.north,Ko.east,Ko.south];for(const W of t.buildings)if(!ju.has(W.id)){if(W.id==="125813145")Bx(s,W,l);else if(!B5.some(X=>X(s,W,l,o))){const[X,gt,ht,Mt]=xr(W.rings[0]);er((X+ht)/2,(gt+Mt)/2,F)?ef(I,W,l,N):ef(R,W,l)}}const V=R.mesh("OSM building footprints",ui);V.castShadow=!0;const H=k5(N.mesh("Фасады квартала",ui)),J=Rn(I.mesh("Крыши квартала",ui),"flatRoof");if(H.castShadow=J.castShadow=!0,s.add(Rn(q5(h,l,a),"ground"),Rn(M.mesh("OSM surfaces"),"ground"),Rn(v.mesh("Площади и причалы"),"paving"),Rn(S.mesh("Скверы"),"foliage",.65),Rn(tf(E.mesh("Плитка нижней набережной"),[.24,.22]),"laidPaving"),Rn(tf(T.mesh("Плитка верхней набережной")),"laidPaving"),Rn(b.mesh("Пешеходные дорожки"),"paving",.8),Rn(w.mesh("OSM streets"),"road",.8),V,J,H),i5(s,t,l),_){const W=Xn();ov(s,l,(gt,ht,Mt)=>io(W,gt,ht,Mt,a)),s.add(Rn(W.mesh("Раскоп Горгиппии · уровни грунта"),"ground",.88));const X=Xn();g.render(s,(gt,ht,Mt)=>io(X,gt,ht,Mt,a)),s.add(Rn(X.mesh("Горгиппия · покрытия дорожек"),"paving",.7))}Y5(s,t.trees,l),a5(s,t,l),u5(s,t,l),L5(s,t,l),zx(s,t,l),zv(s,l),I5(s,l),px(s,l),Ax(s,l),Dx(s,l),X5(s,t,a.gorgWater,l),lx(s,a,l),J_(s,l),tx(s,l),Jv(s,t,l);const et=Y_(s,l),St=new eh("#eefbff","#b0a48b",1.65),mt=new sh("#fff5dd",2.25),[Ut,kt,G,O]=t.bounds,Y=Math.max(G-Ut,O-kt)*.62;mt.target.position.set((Ut+G)/2,0,(kt+O)/2),mt.castShadow=!0,mt.shadow.mapSize.set(2048,2048),Object.assign(mt.shadow.camera,{left:-Y,right:Y,top:Y,bottom:-Y,near:1,far:5300}),mt.shadow.camera.updateProjectionMatrix(),mt.shadow.normalBias=1,mt.shadow.bias=-15e-5,s.add(St,mt,mt.target);function rt(W){const X=W==="sunset";r.setDaytime(!X),et.setEnabled(X),c.evening.value=X?1:0;const gt=X?"#8993b4":"#b3d5d5";s.background.set(gt),s.fog.color.set(gt),c.haze.value.set(gt),St.color.set(X?"#becdf9":"#eefbff"),St.groundColor.set(X?"#736b86":"#b0a48b"),St.intensity=X?.73:1.65,mt.color.set(X?"#ffc18c":"#fff5dd"),mt.intensity=X?.81:2.25;const ht=X?[-.95,.23,-.44]:[-.6,1,-.5];mt.position.copy(mt.target.position).add(new lh(...ht).multiplyScalar(1800)),c.sun.value.set(...ht).normalize(),n.shadowMap.needsUpdate=!0}rt("day");const _t=new Map,z=60,nt=(W,X)=>`${W}:${X}`;for(const{id:W,rings:X}of t.buildings){if(ju.has(W))continue;const[gt,ht,Mt,At]=xr(X[0]);for(let k=Math.floor(gt/z);k<=Math.floor(Mt/z);k++)for(let Jt=Math.floor(ht/z);Jt<=Math.floor(At/z);Jt++){const Kt=nt(k,Jt);_t.has(Kt)||_t.set(Kt,[]),_t.get(Kt).push({id:W,rings:X,bounds:[gt,ht,Mt,At]})}}const pt=(W,X)=>t.land.some(gt=>yi(W,X,gt)),q=t.areas.filter(W=>W.kind==="pier"),it=W5(a,l);function at(W,X){if(!er(W,X,t.bounds)||!pt(W,X)&&!q.some(({rings:Mt})=>yi(W,X,Mt[0]))||yi(W,X,hx)||yi(W,X,Nd))return null;const gt=g?.walkHeight(W,X,x(W,X));return gt===null||(_t.get(nt(Math.floor(W/z),Math.floor(X/z)))??[]).some(({id:Mt,rings:At,bounds:k})=>!er(W,X,k)||!yi(W,X,At[0])||a.waterfront.deckRoofs.has(Mt)&&P.some(Jt=>yi(W,X,Jt))?!1:!At.slice(1).some(Jt=>yi(W,X,Jt)))?null:gt??it(W,X)??l(W,X)}return{renderer:n,scene:s,terrain:l,light:rt,walkHeight:at,setCartoon:O_,walkable:(W,X)=>at(W,X)!==null,render(W,X){c.time.value=X;for(const gt of o)gt(X);et.update(W),r.update(W,ms.cartoonEnabled.value>.5),n.render(s,W)}}}const K5=new Set(["motorway","trunk","primary","secondary","tertiary","unclassified","residential","living_street","service"]);function J5({kind:i,access:t}){return i!=="steps"&&t?.car!==!1&&(K5.has(i)||t?.car===!0)}function y0(i,t,e){return(t-i.x)*i.ux+(e-i.z)*i.uz}function nf(i,t,e){const n=Math.min(i.length,Math.max(0,y0(i,t,e)));return(t-i.x-n*i.ux)**2+(e-i.z-n*i.uz)**2}function Q5(i,t,e){return i.road.barriers?.some(n=>{if(n.car!==!1)return!1;const[s,o]=n.position;return Math.hypot(t-s,e-o)<i.radius+.7&&Math.abs((t-s)*i.ux+(e-o)*i.uz)<.65})}function j5(i){const t=new Map,e=[],n=32,s=h=>Math.floor(h/n),o=(h,f)=>`${h}:${f}`;for(const h of i){const f=J5(h),u=h.access?.bicycle===!1,d=h.kind==="steps"||u||h.barriers?.length;if(!f&&!d)continue;const m=h.width/2;for(let _=1;_<h.points.length;_++){const[g,p]=h.points[_-1],[x,M]=h.points[_],v=x-g,S=M-p,y=Math.hypot(v,S);if(y<.01)continue;const w={x:g,z:p,ux:v/y,uz:S/y,length:y,radius:m,road:h,car:f,bikeCheck:d};f&&e.push(w);for(let b=s(Math.min(g,x)-m);b<=s(Math.max(g,x)+m);b++)for(let E=s(Math.min(p,M)-m);E<=s(Math.max(p,M)+m);E++){const T=o(b,E);t.has(T)||t.set(T,[]),t.get(T).push(w)}}}const r=(h,f)=>t.get(o(s(h),s(f)))??[];function a(h,f){let u=null,d=1/0;for(const m of r(h,f)){if(!m.car)continue;const _=y0(m,h,f);if(_<-.005||_>m.length+.005)continue;const g=nf(m,h,f),p=Math.max(.4,m.radius-.45);g>p**2||g>=d||Q5(m,h,f)||(d=g,u=m.road)}return u}function l(h,f){let u=!1;for(const d of r(h,f)){if(!d.bikeCheck||nf(d,h,f)>d.radius**2)continue;const{road:m}=d;if(m.access?.bicycle===!1){if(m.access?.foot===!1)return"blocked";u=!0}m.kind==="steps"&&(u=!0);for(const _ of m.barriers??[])if(!(_.bicycle!==!1||Math.hypot(h-_.position[0],f-_.position[1])>.65)){if(_.foot===!1)return"blocked";u=!0}}return u?"push":"ride"}function c([h,f],u){let d=null,m=1/0;for(const _ of e){const g=y0(_,h,f);for(const p of[0,-4,4,-12,12]){const x=Math.min(_.length,Math.max(0,g+p)),M=_.x+_.ux*x,v=_.z+_.uz*x,S=(M-h)**2+(v-f)**2;if(S>=m)continue;const y=u(M,v);y!==null&&(m=S,d={x:M,z:v,height:y,heading:Math.atan2(_.ux,-_.uz)})}}return d}return{carAt:a,bicycleAt:l,nearestCarStart:c}}const{MathUtils:t4,Vector3:Pc}=rh,e4=new Pc(0,1,0);function On(i){return new jt({color:i,flatShading:!0})}function Ve(i,t,e,n=[0,0,0]){const s=new oe(t,e);return s.position.set(...n),i.add(s),s}function qn(i,t,e,n,s){const o=new Pc(...t),r=new Pc(...e),a=r.clone().sub(o),l=Ve(i,new yn(n,n,a.length(),10),s);return l.position.copy(o).lerp(r,.5),l.quaternion.setFromUnitVectors(e4,a.normalize()),l}function po(i,t,e,n){const s=new Kc(t.map(o=>new Pc(...o)));return Ve(i,new Ro(s,14,e,8),n)}function sf(i,t,e){const n=t.flat(2),s=t[0].length,o=[];for(let a=0;a<t.length-1;a++)for(let l=0;l<s-1;l++){const c=a*s+l;o.push(c,c+1,c+s,c+1,c+s+1,c+s)}const r=new Ae;return r.setAttribute("position",new ee(n,3)),r.setIndex(o),r.computeVertexNormals(),Ve(i,r,e)}function n4(i){const t=On("#4ca9ab"),e=On("#283a3e"),n=On("#18292b"),s=On("#acbfc0"),o=On("#e5af59"),r=new ge,a=new ge;i.add(r),r.add(a),qn(r,[0,-.3,-.27],[0,-.78,.4],.073,t),qn(a,[0,0,.09],[0,-.3,-.25],.049,s),qn(a,[0,-.31,-.25],[0,-.43,-.36],.066,t);for(const h of[-1,1]){const f=u=>u*h;qn(a,[f(.066),-.34,-.27],[f(.061),-.82,-.57],.038,t),po(a,[[0,0,.09],[f(.24),.012,.11],[f(.43),.075,.18],[f(.75),.09,.25]],.033,s),qn(a,[f(.52),.079,.2],[f(.78),.092,.26],.052,e);for(const u of[.55,.61,.67,.73,.77]){const d=.205+(u-.53)*.21;qn(a,[f(u),.081,d],[f(u+.015),.082,d+.004],.055,n)}po(a,[[f(.48),.055,.16],[f(.54),.038,.04],[f(.69),.038,.1]],.018,s),po(a,[[f(.48),.045,.15],[f(.35),-.18,-.08],[f(.07),-.4,-.28]],.009,n)}const l=Ve(a,new Ri(.35,.042,8,32),n,[0,-.82,-.57]);l.rotation.y=Math.PI/2;const c=Ve(a,new Ri(.3,.014,6,32),s,[0,-.82,-.57]);return c.rotation.y=Math.PI/2,qn(a,[-.075,-.82,-.57],[.075,-.82,-.57],.036,s),Ve(a,new yn(.062,.067,.045,16),o,[-.37,.122,.14]),qn(a,[-.38,.115,.16],[-.45,.105,.2],.012,o),r.position.set(0,-.48,-1.5),{group:r,front:a}}function i4(i){const t=On("#eee1ba"),e=On("#9b916c"),n=On("#303536"),s=On("#b7b8ab"),o=On("#202526"),r=On("#e7dbc2"),a=On("#f58b63"),l=new ge,c=new ge,h=new ge;i.add(l),l.add(c,h),sf(l,[[[-1.52,-.8,-1.12],[-.84,-.73,-1.12],[-.1,-.67,-1.12],[.66,-.68,-1.12],[1.38,-.74,-1.12],[1.98,-.82,-1.12]],[[-1.36,-.8,-2.25],[-.72,-.75,-2.25],[-.06,-.69,-2.25],[.65,-.7,-2.25],[1.32,-.76,-2.25],[1.85,-.83,-2.25]],[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[-.04,-.83,-3.28],[.65,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]]],t),po(l,[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[.3,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]],.014,e);for(const f of[-.77,1.3])po(l,[[f,-.75,-1.42],[f,-.737,-2.14],[f*.93,-.844,-3.05]],.009,e);for(const f of[-.64,.38])qn(l,[f,-.65,-1.69],[f+.48,-.65,-1.76],.014,n),qn(l,[f+.23,-.65,-1.72],[f+.47,-.7,-1.5],.01,s);sf(l,[[[-1.9,-.89,-.67],[-.77,-.83,-.67],[.08,-.8,-.67],[.91,-.84,-.67],[2.05,-.89,-.67]],[[-1.92,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],[[-1.93,-.77,-1.56],[-.74,-.7,-1.56],[.07,-.67,-1.56],[.94,-.72,-1.56],[2.08,-.8,-1.56]]],n),po(l,[[-1.9,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],.018,s),Ve(l,new Ne(2.12,.14,.065),s,[.52,-.65,-1.37]),Ve(l,new Ne(.86,.24,.16),n,[-.25,-.55,-1.43]),Ve(l,new Ne(.8,.177,.019),s,[-.25,-.55,-1.337]),Ve(l,new Ne(.75,.143,.015),o,[-.25,-.55,-1.32]),Ve(l,new Ne(.44,.046,.004),r,[-.25,-.519,-1.31]);for(let f=0;f<=16;f++){const u=-.455+f*.0255,d=f%2===0?.017:.008;Ve(l,new Ne(.0035,d,.004),o,[u,-.497-d/2,-1.305])}for(const f of[-.542,.038])Ve(l,new Ne(.088,.036,.004),r,[f,-.524,-1.31]),qn(l,[f-.026,-.536,-1.304],[f+.01,-.51,-1.304],.0027,a);for(let f=0;f<6;f++){const u=On(["#b44e37","#95764c","#a44536","#548159","#a58746","#5b8798"][f]);Ve(l,new Ne(.037,.018,.004),u,[-.42+f*.066,-.579,-1.308])}for(const f of[.43,.67]){Ve(l,new Ne(.17,.105,.025),o,[f,-.645,-1.316]);for(let u=0;u<4;u++)Ve(l,new Ne(.15,.007,.01),s,[f,-.676+u*.019,-1.3])}h.position.set(-.453,-.518,-1.299),Ve(h,new Ne(.008,.035,.006),a),c.position.set(-.25,-.63,-1.1),Ve(c,new Ri(.295,.023,10,44),n),Ve(c,new Ri(.219,.008,6,36,Math.PI),s,[0,0,.022]).rotation.z=Math.PI;for(const f of[-1,1])qn(c,[f*.061,-.018,.01],[f*.287,.01,0],.025,n),qn(c,[f*.073,-.015,.035],[f*.212,.003,.023],.008,s);return Ve(c,new Ao(.079,24),n,[0,0,.038]),Ve(c,new Ri(.033,.004,6,20),s,[0,0,.042]),Ve(c,new Ne(.034,.024,.006),On("#a75444"),[0,0,.044]),{group:l,wheel:c,gaugeNeedle:h}}function s4(){const i=new V0,t=new hn(58,1,.04,10),e=new eh("#f7f7e9","#9ea8af",1.4),n=new sh("#fff2d8",2);n.position.set(-2,4,2),i.add(e,n);const s=n4(i),o=i4(i);let r=0,a="";function l(c,{mode:h,aspect:f,turn:u,speed:d,time:m,delta:_,reducedMotion:g}){if(a!==h&&(r=0,a=h),s.group.visible=h==="bike",o.group.visible=h==="car",!s.group.visible&&!o.group.visible)return;t.aspect!==f&&(t.aspect=f,t.updateProjectionMatrix()),r=g?u:t4.damp(r,u,12,_);const p=Math.min(1,f/1.22),x=.1*(1-p);s.group.visible?(s.group.scale.x=p,s.group.position.y=-.48+x,g||(s.group.position.y+=Math.sin(m*11)*Math.min(.008,Math.abs(d)*.0015)),s.front.rotation.y=-r*.28,s.front.rotation.z=-r*.045):(o.group.scale.x=p,o.group.position.y=x,o.wheel.rotation.z=-r*.74,o.gaugeNeedle.position.x=-.453+Math.min(1,Math.abs(d)*3.6/160)*.407);const M=c.autoClear;c.autoClear=!1;try{c.clearDepth(),c.render(i,t)}finally{c.autoClear=M}}return{render:l}}function o4(i){const t=new ge;t.name="ВАЗ-2101 «Копейка»",t.visible=!1,i.add(t);const e=new pr({color:"#eee1ba",shininess:54,specular:"#a9a49b"}),n=new pr({color:"#c9cacc",shininess:90,specular:"#f2f5f4"}),s=new jt({color:"#35342f"}),o=new jt({color:"#232528"}),r=new pr({color:"#527176",shininess:68,specular:"#3b535a",side:en}),a=new jt({color:"#fff5d5",emissive:"#422d0d"}),l=new jt({color:"#ecaa38"}),c=new jt({color:"#b92d23"}),h=new jt({color:"#a53830"});function f(P,R,[I,N,F],V=t){const H=new oe(P,R);return H.position.set(I,N,F),V.add(H),H}const u=(P,R,I,N,F,V,H,J)=>f(new Ne(P,R,I),H,[N,F,V],J);function d(P,R,I,N){const F=new B(...P),V=new B(...R);f(new Ne(I,I,F.distanceTo(V)),N,F.clone().add(V).multiplyScalar(.5).toArray()).lookAt(V)}function m(P){const R=new Ae;R.setAttribute("position",new ee(P.flat(),3)),R.setIndex([0,1,2,0,2,3]),R.computeVertexNormals(),f(R,r,[0,0,0]),P.forEach((I,N)=>d(I,P[(N+1)%P.length],.026,n))}const _=new Qc;_.moveTo(1.99,.42),_.lineTo(1.99,.8),_.lineTo(1.75,.89),_.lineTo(.71,.92),_.lineTo(-1.14,.89),_.lineTo(-1.98,.78),_.lineTo(-1.99,.39),_.lineTo(-1.62,.33);for(const P of[-1.212,1.212]){_.lineTo(P-.353,.29);for(let R=1;R<=12;R++){const I=Math.PI-R*Math.PI/12;_.lineTo(P+Math.cos(I)*.353,.29+Math.sin(I)*.337)}}_.lineTo(1.99,.42);const g=f(new Br(_,{depth:1.49,bevelSize:.035,bevelThickness:.045,bevelSegments:2,steps:1}),e,[-.745,0,0]);g.rotation.y=Math.PI/2;const p=[-.724,.924,-.75],x=[.724,.924,-.75],M=[-.723,.891,1.13],v=[.723,.891,1.13],S=[-.609,1.414,-.43],y=[.609,1.414,-.43],w=[-.609,1.414,.72],b=[.609,1.414,.72];m([p,x,y,S]),m([v,M,w,b]),m([M,p,S,w]),m([x,v,b,y]),u(1.25,.047,1.2,0,1.423,.145,e);for(const P of[-1,1]){d([P*.72,.915,.16],[P*.618,1.41,.16],.044,e),d([P*.782,.688,-1.83],[P*.782,.688,1.83],.017,n);for(const R of[-.53,.39,1.12])d([P*.783,.426,R],[P*.783,.88,R],.009,s);for(const R of[.035,.91])u(.032,.033,.139,P*.791,.793,R,n);d([P*.74,.925,-1.23],[P*.84,1.021,-1.23],.024,n),P<0&&u(.148,.069,.061,-.846,1.037,-1.23,n),d([P*.6,.935,-.8],[P*.62,.855,-1.92],.013,n)}u(1.44,.228,.035,0,.704,-2.002,n),u(1.38,.192,.023,0,.704,-2.023,s);for(let P=0;P<6;P++)u(1.35,.008,.019,0,.627+P*.03,-2.039,n);u(.085,.09,.022,0,.704,-2.053,h);for(const P of[-1,1]){const R=P*.556;f(new yn(.136,.136,.038,24),n,[R,.712,-2.036]).rotation.x=Math.PI/2,f(new yn(.113,.113,.035,24),a,[R,.712,-2.057]).rotation.x=Math.PI/2,u(.173,.061,.028,R,.528,-2.023,l),u(.234,.128,.035,R,.669,2.014,n),u(.208,.101,.029,R,.669,2.037,c),u(.068,.097,.035,R+P*.066,.669,2.051,l);for(const I of[-2.058,2.047])u(.072,.133,.092,P*.457,.392,I,s)}u(1.62,.079,.112,0,.394,-2.054,n),u(1.62,.079,.112,0,.394,2.043,n),u(.3,.103,.028,0,.535,2.035,s),u(.26,.065,.012,0,.535,2.052,n),d([-.48,.93,-.759],[-.16,.955,-.745],.016,s),d([.12,.93,-.759],[.45,.955,-.745],.016,s);const E=[];for(const P of[-1.212,1.212])for(const R of[-1,1]){const I=new ge;I.position.set(R*.69,.288,P),t.add(I);const N=new ge;I.add(N);const F=(V,H,J,et)=>f(new yn(V,V,H,20),et,[J,0,0],N).rotation.z=Math.PI/2;F(.289,.198,0,o),F(.207,.024,R*.101,e),F(.135,.027,R*.123,n),F(.054,.029,R*.142,s),E.push({pivot:I,wheel:N,steer:P<0})}const T=f(new Ao(1,28),new Gn({color:"#263137",transparent:!0,opacity:.24,depthWrite:!1}),[0,.031,0]);T.rotation.x=-Math.PI/2,T.scale.set(.96,2.08,1);const C=new hn(49,1,.22,4800),L=new B;return{cameraFor(P,{active:R,yaw:I,speed:N,turn:F,delta:V,terrain:H,angle:J,height:et,distance:St}){if(t.visible=R,!R)return P;const mt=P.position.y-1.45;t.position.set(P.position.x,mt,P.position.z),t.rotation.y=-I;for(const{pivot:kt,wheel:G,steer:O}of E)O&&(kt.rotation.y=-F*.3),G.rotation.x-=N*V/.289;t.updateMatrixWorld(!0);const Ut=St*Math.max(1,.72/P.aspect);return t.localToWorld(C.position.set(Math.sin(J)*Ut,et,Math.cos(J)*Ut)),C.position.y=Math.max(C.position.y,H(C.position.x,C.position.z)+1.8),C.lookAt(t.localToWorld(L.set(0,.83,-Math.max(0,Math.cos(J))*1.1))),C.aspect!==P.aspect&&(C.aspect=P.aspect,C.updateProjectionMatrix()),C}}}const r4=new B(0,1,0),Ql=new B,Ra=new B;function Qn(i,t,e,n=[0,0,0]){const s=new oe(t,e);return s.position.set(...n),i.add(s),s}function nr(i,t,e){Ql.set(...t),Ra.set(...e).sub(Ql),i.position.copy(Ql).addScaledVector(Ra,.5),i.scale.y=Ra.length(),i.quaternion.setFromUnitVectors(r4,Ra.normalize())}function je(i,t,e,n,s){const o=Qn(i,new yn(n,n,1,8),s);return nr(o,t,e),o}function a4(i){const t=new ge;t.name="Велосипед с велосипедистом",t.visible=!1,i.add(t);const e=V=>new jt({color:V,flatShading:!0}),n=e("#4ca9ab"),s=e("#1d2b2c"),o=e("#b4c1b8"),r=e("#3b4240"),a=e("#eee1ba"),l=e("#415760"),c=e("#cd9478"),h=e("#e5af59"),f=[0,.345,.54],u=[0,.92,-.38],d=[0,.39,.055],m=[0,.94,.21],_=new ge;_.position.set(...u),t.add(_);const g=.321;function p(V,H){const J=new ge;J.position.set(...H),V.add(J),Qn(J,new Ri(g,.024,8,36),s).rotation.y=Math.PI/2,Qn(J,new Ri(.297,.008,6,36),o).rotation.y=Math.PI/2,je(J,[-.047,0,0],[.047,0,0],.017,o);for(let et=0;et<14;et++){const St=et*Math.PI/7;je(J,[et%2?.025:-.025,0,0],[0,Math.sin(St)*.295,Math.cos(St)*.295],.0026,o)}return J}const x=p(t,f),M=p(_,[0,-.575,-.17]);je(t,d,m,.027,n),je(t,d,[0,.78,-.36],.029,n),je(t,[0,.85,.195],[0,.86,-.37],.023,n),je(t,[0,.77,-.36],u,.036,n);for(const V of[-1,1]){const H=[V*.046,f[1],f[2]];je(t,[V*.033,.8,.19],H,.012,n),je(t,[V*.036,d[1],d[2]],H,.015,n),je(_,[V*.036,-.15,.026],[V*.043,-.575,-.17],.016,n),je(_,[0,.095,.042],[V*.34,.125,.13],.014,o),je(_,[V*.26,.119,.112],[V*.36,.13,.134],.022,s)}je(_,[0,0,0],[0,.095,.042],.022,o),Qn(_,new yn(.028,.031,.025,12),h,[-.23,.146,.103]),Qn(t,new vn(1,12,8),r,[0,.95,.208]).scale.set(.082,.022,.123),je(t,[-.12,d[1],d[2]],[.12,d[1],d[2]],.015,o);const S=[0,1.34,-.074],y=[0,.96,.22],w=Qn(t,new vn(1,12,8),a,[0,1.16,.065]);w.scale.set(.16,.232,.118),w.rotation.x=-.63,Qn(t,new vn(1,12,8),l,y).scale.set(.138,.085,.104),je(t,[0,1.31,-.087],[0,1.45,-.169],.059,c),Qn(t,new vn(.093,12,8),c,[0,1.49,-.167]).scale.y=1.11,Qn(t,new vn(1,14,9),h,[0,1.554,-.178]).scale.set(.113,.075,.121),Qn(t,new vn(1,12,8),r,[0,1.541,-.271]).scale.set(.093,.017,.041);const C=[-1,1].map(V=>{const H=[V*.118,S[1],S[2]],J=[V*.225,1.17,-.16],et=[V*.31,1.05,-.25],St=[V*.095,y[1],y[2]],mt=[V*.14,.71,-.21],Ut=[V*.12,d[1],d[2]];return{side:V,elbow:J,forearm:je(t,J,et,.031,c),sleeve:je(t,H,J,.045,a),thigh:je(t,St,mt,.057,l),shin:je(t,mt,Ut,.041,l),crankArm:je(t,[V*.085,d[1],d[2]],Ut,.012,o),shoe:Qn(t,new Ne(.084,.058,.163),r,Ut)}}),L=Qn(t,new Ao(1,22),new Gn({color:"#203138",transparent:!0,opacity:.16,depthWrite:!1}),[0,.027,0]);L.rotation.x=-Math.PI/2,L.scale.set(.245,.87,1);const P=new hn(52,1,.18,4800),R=new B,I=new B;let N=0,F=0;return{cameraFor(V,{active:H,yaw:J,speed:et,turn:St,delta:mt,terrain:Ut,angle:kt,height:G,distance:O}){if(t.visible=H,!H)return V;t.position.set(V.position.x,V.position.y-1.65+.12,V.position.z),t.rotation.y=-J,_.rotation.y=-St*.34,_.updateMatrix();const Y=et*mt/(g+.024);N=(N-Y)%(Math.PI*2),F=(F-Y*.4)%(Math.PI*2),x.rotation.x=M.rotation.x=N;for(const{side:_t,elbow:z,forearm:nt,thigh:pt,shin:q,crankArm:it,shoe:at}of C){I.set(_t*.316,.125,.126).applyMatrix4(_.matrix),nr(nt,z,I.toArray());const W=F+(_t>0?Math.PI:0),X=[_t*.123,d[1]+.143*Math.cos(W),d[2]+.143*Math.sin(W)],gt=[_t*.143,.68+.078*Math.cos(W),-.216+.035*Math.sin(W)];nr(pt,[_t*.095,y[1],y[2]],gt),nr(q,gt,X),nr(it,[_t*.085,d[1],d[2]],X),at.position.set(X[0],X[1]+.018,X[2]-.038)}t.updateMatrixWorld(!0);const rt=O*.59*Math.max(1,.62/V.aspect);return t.localToWorld(P.position.set(Math.sin(kt)*rt,G*.68,Math.cos(kt)*rt)),P.position.y=Math.max(P.position.y,Ut(P.position.x,P.position.z)+1.4),P.lookAt(t.localToWorld(R.set(0,.8,-Math.max(0,Math.cos(kt))*.52))),P.aspect!==V.aspect&&(P.aspect=V.aspect,P.updateProjectionMatrix()),P}}}const of=1.4;function S0(i,t){const e=Math.min(of,Math.max(-of,t));return[Math.sin(i)*Math.cos(e),Math.sin(e),-Math.cos(i)*Math.cos(e)]}function Lc(i,t,e,n){return Math.min(Math.max(n,t),Math.max(Math.min(e,t),i))}function rf({position:i,yaw:t,pitch:e,longitudinal:n,lateral:s,distance:o,ground:r,clearance:a,ceiling:l=1/0,bounds:c}){let[h,f,u]=i;const d=Math.hypot(n,s);if(!d||!(o>0))return[h,f,u];const[m,_,g]=S0(t,e),p=[(m*n+Math.cos(t)*s)/d,_*n/d,(g*n+Math.sin(t)*s)/d],x=Math.max(l,f),M=Math.max(1,Math.ceil(o/4));for(let v=0;v<M;v++){const S=h,y=u;if(h+=p[0]*o/M,u+=p[2]*o/M,c){const[w,b,E,T]=c;h=Lc(h,S,w,E),u=Lc(u,y,b,T)}f=Math.min(x,Math.max(r(h,u)+a,f+p[1]*o/M))}return[h,f,u]}function c4(i,t,[e,n,s,o]){let r=0,a=1/0;for(const[l,c,h,f]of[[i[0],t[0],e,s],[i[2],t[2],n,o]]){if(Math.abs(c)<1e-9){if(l<h||l>f)return null;continue}const u=(h-l)/c,d=(f-l)/c;r=Math.max(r,Math.min(u,d)),a=Math.min(a,Math.max(u,d))}return r<=a?[r,a]:null}function l4(i,t,{ground:e,bounds:n,near:s,far:o}){const r=Math.max(1,i[1]-e(i[0],i[2])),a=h4(i,t,e,o)??r/Math.max(.05,-t[1]);let l=Math.min(o,Math.max(s,a));const c=n&&c4(i,t,n);return c&&c[1]>=s&&(l=Math.min(Math.max(l,c[0],s),c[1],o)),l}function h4(i,t,e,n){const s=a=>i[1]+t[1]*a-e(i[0]+t[0]*a,i[2]+t[2]*a);let o=0,r=0;for(let a=0;a<96&&r<n;a++){if(r=Math.min(n,o+Math.max(1.5,s(o)*.7)),s(r)<=0){for(let l=0;l<12;l++){const c=(o+r)/2;s(c)>0?o=c:r=c}return r}o=r}return null}const ss=document.querySelector("#world"),af=document.querySelector("#status"),ir=i=>[...document.querySelectorAll(`[data-${i}]`)].filter(t=>t instanceof HTMLButtonElement),cf=(i,t)=>{for(const e of ir(i))e.setAttribute("aria-pressed",String(e.dataset[i]===t))};async function lf(i){const t=await fetch(`./data/${i}.json`);if(!t.ok)throw new Error(`Не удалось загрузить ${i} (${t.status}).`);return t.json()}function u4(i,t){const{Vector3:e,MathUtils:n}=rh,s=Z5(ss,i,t),o=j5(i.roads),r=s4(),a=o4(s.scene),l=a4(s.scene),c=new hn(46,1,.35,4800),h=new d_(c,ss),f=matchMedia("(prefers-reduced-motion: reduce)").matches;h.enableDamping=!f,h.dampingFactor=.13,h.minDistance=28,h.maxDistance=3300,h.maxPolarAngle=Math.PI*.48,h.zoomSpeed=.8,h.screenSpacePanning=!1;const[u,d,m,_]=i.bounds,g=[u,d,m,_],[p,x]=i.origin,[M,v]=i.scale,S=document.querySelector("#compass"),y=document.querySelector("#coordinates"),w=document.querySelector("#vehicle-speed"),b=document.querySelector("#cartoon-style"),E=document.querySelector("#vehicle-view"),T=document.querySelector("#superman-flight"),C=document.querySelector("#mode-help"),L=document.querySelector("#places"),P=document.querySelector("#venues"),R=document.querySelector("#pins"),I={orbit:"Стрелки или WASD — лететь. Shift — ускорение. Тяните, чтобы повернуть карту. Колесо — масштаб.",walk:"WASD или стрелки — идти. Shift — бег. Тяните по сцене, чтобы оглянуться.",bike:"Стрелки или WASD — движение и руль. V — сменить камеру. На лестнице — пешком.",car:"↑/↓ или W/S — газ и задний ход. ←/→ или A/D — руль. V — сменить камеру.",map:"Север вверху. Тяните карту, чтобы сдвинуть её.",superman:"WASD или стрелки — лететь туда, куда смотрите: вверх — набор высоты, вниз — снижение. Тяните, чтобы оглянуться."},N=3,F=1.8,V=3400,H={walk:{eye:1.75,fov:68},bike:{eye:1.65,fov:70,speed:6.8,reverse:2.2,steer:1.9},car:{eye:1.45,fov:73,speed:10.5,reverse:3.1,steer:1.6}},J={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},et=[{id:"paintedWaterfront",name:"Парк-отель — Анапа-Океан",position:[-376,-15],walk:{position:[-348,-36],look:[-278,-43]}},{id:"upperWaterfront",name:"Верхняя набережная",position:[-348,-13],walk:{position:[-349,-19.4],look:[-265,-22]}},{id:"lowerWaterfront",name:"Нижняя набережная",position:[-348,-36],look:[-278,-43]},{id:"queuePavilion",name:"Лаундж-зона Qúeue",position:[-412.5,-21.7],walk:{position:[-414,-12],look:[-412,-21.7]}},{id:"pearlFountain",name:"Жемчужина Анапы",position:[-238,2],walk:{position:[-255,-5],look:[-238,2]}},{id:"gorgMuseum",name:"Музей «Горгиппия»",position:[-282,17],walk:{position:[-282,9],look:[-282,17],pitch:.17}},{id:"oldAnapa",name:"Старинная Анапа",position:[-503.2,-11.6],walk:{position:[-506,-38],look:[-503.2,-11.6],pitch:.13}},{id:"cityCourt",name:"Анапский городской суд",position:[-626,51],walk:{position:[-614,43],look:[-626,51],pitch:.1}},{id:"prestige",name:"Бизнес-центр «Престиж»",position:[-605,95.5],walk:{position:[-594,110],look:[-605,95.5],pitch:.1}},{id:"leninStreet",name:"Улица Ленина",position:[-636.1,0],walk:{position:[-636.1,0],look:[-646.63,-15.23],pitch:0}},{id:"marina",name:"Яхтенная марина",position:[-482,-107],walk:{position:[-452,-76],look:[-482,-107],pitch:-.1}}],mt=["paintedWaterfront","lighthouse","malaya","port","marina","ocean","oldAnapa","upperWaterfront","lowerWaterfront","queuePavilion","gorgippia","gorgMuseum","parkHotel","sails","pearlFountain","gates","beach","cityCourt","prestige","leninStreet"].map(Q=>{const bt=i.landmarks.find(re=>re.id===Q)??et.find(re=>re.id===Q);if(Q==="parkHotel")return{...bt,walk:{position:[-167,-27],look:[-169,-7.5],pitch:.58}};if(Q==="ocean")return{...bt,walk:{position:[-591.8,-23],look:[-587.5,-17.2],pitch:.45}};if(bt?.id!=="sails")return bt;const[Et,Ot]=ho,Bt=x-Ot/v,ie=p+Et/M;return{...bt,position:ho,pinHeight:5.85,walk:{position:[-306,-22],look:ho},osm:`https://www.openstreetmap.org/#map=19/${Bt.toFixed(6)}/${ie.toFixed(6)}`}}).filter(Boolean),Ut={lighthouse:{aim:[-9,0],offset:[-146,115,102]},malaya:{aim:[-34,35],offset:[-219,151,-43]},ocean:{aim:[7,-6],offset:[-93,103,-176],raise:14},marina:{aim:[0,0],offset:[-35,62,-90],mapAltitude:135},oldAnapa:{aim:[0,0],offset:[-17,15,-33],raise:3,mapAltitude:65},paintedWaterfront:{aim:[0,0],offset:[-55,240,-290],mapAltitude:465},upperWaterfront:{aim:[12,-10],offset:[-58,100,-155],mapAltitude:275},lowerWaterfront:{aim:[12,4],offset:[6,58,-118],mapAltitude:220},queuePavilion:{aim:[0,0],offset:[14,24,-46],mapAltitude:65},pearlFountain:{aim:[0,0],offset:[-11,16,-30],mapAltitude:52},gorgippia:{aim:[40,3],offset:[-13,94,-79],mapAltitude:127},gorgMuseum:{aim:[0,0],offset:[5,16,-28],mapAltitude:46},parkHotel:{aim:[-5,-6],offset:[-97,91,-155],raise:6},sails:{aim:[15,-1],offset:[13,31,-49],mapAltitude:69}},kt={"Верхний ярус":[{id:"laVeranda",name:"La Veranda",position:[-595.6,-28.8],walk:{position:[-606,-53],look:[-606,-23],pitch:.13}},{id:"matsoni",name:"Мацони",position:[-586,46],walk:{position:[-605,48],look:[-586,46],pitch:.1}},{...et.find(Q=>Q.id==="queuePavilion"),id:"queueCafe",name:"Qúeue"},{id:"more",name:"Море. Истории о еде",position:[-533,-25],walk:{position:[-533,-35],look:[-533,-25],pitch:.08}},{id:"barBQ",name:"BAR BQ",position:[-456.65,14],walk:{position:[-450,14],look:[-456.65,14],pitch:.08}}],"Нижний ярус":[{id:"captainCafe",name:"Капитан",position:[-530,-67],walk:{position:[-534.4,-79.5],look:[-530,-67],pitch:.15}},{id:"adrian",name:"Adrian Bistro",position:[-358,-30.5],walk:{position:[-359.7,-37.4],look:[-358,-30.5],pitch:.1}},{id:"bavaria",name:"Bavaria",position:[-342.2,-30.9],walk:{position:[-340,-38.1],look:[-342.2,-30.9],pitch:.13}},{id:"prichal",name:"Причал",position:[-303,-34.35],walk:{position:[-302,-40.2],look:[-303,-34.35],pitch:.2}},{id:"khinkal",name:"Хинкальная",position:[-267.5,-38.45],walk:{position:[-267.5,-44.35],look:[-267.5,-38.45],pitch:.18}},{id:"parokhod",name:"Пароходъ",position:[-229.8,-52.4],walk:{position:[-232.74,-59.75],look:[-229.8,-52.4],pitch:.34}},{id:"wineSea",name:"Вино и море",position:[-175,-54],walk:{position:[-184,-48],look:[-175,-54],pitch:.2}}]};Ut.queueCafe=Ut.queuePavilion,Ut.more={aim:[0,0],offset:[-13,17,-34],raise:1.3,mapAltitude:67},Ut.laVeranda={aim:[0,0],offset:[-12,16,-28],raise:2,mapAltitude:52},Ut.matsoni={aim:[0,0],offset:[-24,15,3],raise:2,mapAltitude:52},Ut.barBQ={aim:[0,0],offset:[25,11,-14],raise:1.3,mapAltitude:58};for(const Q of kt["Нижний ярус"])Ut[Q.id]={aim:[0,0],offset:[-9,12,-32],raise:1.8,mapAltitude:60};Ut.wineSea.offset=[-27,13,-12];const G=i.landmarks.find(Q=>Q.id==="gorgippia")?.position??[(u+m)/2,(d+_)/2],O=i.landmarks.find(Q=>Q.id==="lighthouse")?.position??G,Y=new e,rt=new e,_t=new e,z=new e,nt=new e,pt=new Set,q=new Map,it=new Set,at=new Map,W=[];let X="orbit",gt=null,ht=0,Mt=0,At=0,k=0,Jt=!1;const Kt=()=>X==="orbit"&&Jt,U=new Set,A=()=>U.has(X);let K=-.43,st=2.8,ct=5.9,yt=null,Tt="";function lt(Q,bt){const Et=(x-bt/v).toFixed(5),Ot=(p+Q/M).toFixed(5),Bt=`${Et}/${Ot}`;Bt!==Tt&&(Tt=Bt,y.textContent=`${Et}° N  ${Ot}° E`,y.href=`https://www.openstreetmap.org/#map=18/${Bt}`,y.title="Показать эту точку в OpenStreetMap")}function dt(Q,bt=!1){const Et=bt?Ut[gt?.id]:void 0,Ot=X==="orbit"||Et?.mapAltitude?Et:void 0,Bt=Q[0]+(Ot?.aim[0]??0),ie=Q[1]+(Ot?.aim[1]??0),re=s.terrain(Bt,ie)+(Ot?.raise??0);if(h.target.set(Bt,re,ie),nt.copy(h.target),X==="map"){const fe=(Ot?.mapAltitude??(bt?440:1220))/Math.min(1,c.aspect*(Ot?.mapAltitude?.7:1.2));c.position.set(Bt,re+Math.min(3200,fe),ie+.1)}else{const fe=1/Math.min(1,c.aspect*(Ot?.mapAltitude?.67:1.4)),[_e,Me,Ce]=Ot?.offset??(bt?[-148,150,-209]:[-345,350,-485]);c.position.set(Bt+_e*fe,re+Me*fe,ie+Ce*fe)}h.update(),Kt()&&Pt()}function Pt(){ht=-h.getAzimuthalAngle(),Mt=n.clamp(h.getPolarAngle()-Math.PI/2,-1.33,1.33)}function qt(Q){const bt=l4(c.position.toArray(),Q,{ground:s.terrain,bounds:g,near:h.minDistance,far:h.maxDistance});h.target.fromArray(Q).multiplyScalar(bt).add(c.position),nt.copy(h.target),h.update()}function Lt(Q){X==="orbit"&&Q&&Pt(),Jt=Q,T.setAttribute("aria-pressed",String(Q)),X==="orbit"&&(h.enabled=!Q,yt=null,Q||(qt(S0(ht,Math.min(Mt,-.15))),c.fov=46,c.updateProjectionMatrix()),ut())}function wt(Q,bt){if(X==="bike"&&o.bicycleAt(Q,bt)==="blocked")return null;const Et=X==="car"?o.carAt(Q,bt):null;if(X==="car"&&!Et)return null;const Ot=s.walkHeight(Q,bt);return Ot===null||!Et?Ot:Ot+(Et.bridge?.85:.31)}function Yt([Q,bt],Et){let Ot=null,Bt=1/0;const ie=s.terrain(Q,bt);for(const{points:re,kind:fe}of i.roads)if(["footway","pedestrian","path","living_street","steps"].includes(fe))for(let _e=1;_e<re.length;_e++){const[Me,Ce]=re[_e-1],[Un,wn]=re[_e],$i=Un-Me,Ds=wn-Ce,Lo=$i*$i+Ds*Ds;if(Lo<.01||Et&&fe!=="pedestrian")continue;const cl=((Q-Me)*$i+(bt-Ce)*Ds)/Lo,Gr=Math.sqrt(Lo);for(const D of Et?[-42,-30,30,42]:[0,-8,8]){const $=n.clamp(cl+D/Gr,0,1),ot=Me+$i*$,j=Ce+Ds*$,tt=Math.hypot(ot-Q,j-bt);if(tt<(Et?24:5)||tt>90)continue;const Dt=tt+(Et?4*Math.abs(s.terrain(ot,j)-ie):0);Dt>=Bt||wt(ot,j)!==null&&(Et&&![4,10,18].every(zt=>wt(ot+(Q-ot)*zt/tt,j+(bt-j)*zt/tt)!==null)||(Bt=Dt,Ot=[ot,j]))}}return Ot}function Qt(Q,bt){const[Et,Ot]=bt?.look??Q;let Bt=bt&&wt(...bt.position)!==null?bt.position:null;Bt??=Yt(Q,Q===O)??Yt(Q,!1);for(let re=4;!Bt&&re<=96;re+=4)for(let fe=0;!Bt&&fe<Math.PI*2;fe+=Math.PI/8){const _e=Et+Math.cos(fe)*re,Me=Ot+Math.sin(fe)*re;wt(_e,Me)!==null&&(Bt=[_e,Me])}if(!Bt)return!1;c.position.set(Bt[0],wt(...Bt)+H[X].eye,Bt[1]),ht=Math.atan2(Et-Bt[0],Bt[1]-Ot);const ie=s.terrain(Et,Ot)+(Q===O?9:1.6);return Mt=bt?.pitch??n.clamp(Math.atan2(ie-c.position.y,Math.hypot(Et-Bt[0],Ot-Bt[1])),-.22,.32),!0}function ne(Q){const bt=o.nearestCarStart(Q,wt);if(!bt)return!1;const{x:Et,z:Ot,height:Bt,heading:ie}=bt;ht=ie+(Math.cos(ht-ie)<0?Math.PI:0);const re=wn=>wt(Et+Math.sin(ht)*wn,Ot-Math.cos(ht)*wn),fe=wn=>[1.5,3,5].find($i=>re($i*wn)===null)??6;fe(-1)>fe(1)&&(ht+=Math.PI);const _e=2.04,Me=Math.sin(ht)*_e,Ce=-Math.cos(ht)*_e,Un=wt(Et+Me,Ot+Ce);return Mt=0,wt(Et-Me,Ot-Ce)===null&&Un!==null?c.position.set(Et+Me,Un+H.car.eye,Ot+Ce):c.position.set(Et,Bt+H.car.eye,Ot),!0}function Z(Q){gt=Q,At=0;for(const[bt,Et]of at)Et.setAttribute("aria-pressed",String(bt===Q?.id));for(const{marker:bt,place:Et}of W)bt.classList.toggle("selected",Et===Q);if(X==="car")ne(Q?.position??G);else if(H[X]){const bt=Q?.id==="gorgippia"?av:Q?.walk??(Q?.look?Q:null);Qt(Q?.position??O,bt)||Qt(O)}else dt(Q?.position??G,!!Q)}function Rt(Q){const bt=H[X]?[c.position.x,c.position.z]:null;if(X=Q,yt=null,At=0,pt.clear(),q.clear(),it.clear(),h.enabled=!H[Q]&&!Kt(),h.enableRotate=Q==="orbit",h.mouseButtons.LEFT=Q==="map"?Wi.PAN:Wi.ROTATE,h.touches.ONE=Q==="map"?wi.PAN:wi.ROTATE,h.touches.TWO=wi.DOLLY_PAN,h.minPolarAngle=0,h.maxPolarAngle=Q==="map"?1e-4:Math.PI*.48,c.fov=H[Q]?.fov??46,c.updateProjectionMatrix(),document.body.dataset.mode=Q,w.hidden=Q!=="bike"&&Q!=="car",T.hidden=Q!=="orbit",ut(),cf("mode",Q),bt&&H[Q]){if(Q==="car"&&ne(bt))return;const Et=wt(...bt);if(Et!==null){c.position.y=Et+H[Q].eye;return}}Z(gt)}mt.forEach((Q,bt)=>{const Et=document.createElement("button");Et.type="button",Et.className="place",Et.setAttribute("aria-pressed","false");const Ot=document.createElement("span");Ot.className="place-index",Ot.textContent=String(bt+1).padStart(2,"0"),Ot.setAttribute("aria-hidden","true");const Bt=document.createElement("span");if(Bt.className="place-name",Bt.textContent=Q.name,Et.append(Ot,Bt),Et.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,Z(Q)}),L.append(Et),at.set(Q.id,Et),!Q.osm)return;const ie=document.createElement("a");ie.className="map-pin",ie.href=Q.osm,ie.target="_blank",ie.rel="noopener noreferrer",ie.setAttribute("aria-label",`${Q.name} в OpenStreetMap`),ie.title=`${Q.name} в OpenStreetMap`;const re=document.createElement("span");re.textContent=Ot.textContent;const fe=document.createElement("strong");fe.textContent=Q.name,ie.append(re,fe),R.append(ie),W.push({marker:ie,place:Q})});for(const[Q,bt]of Object.entries(kt)){const Et=document.createElement("h3");Et.textContent=Q,P.append(Et);for(const Ot of bt){const Bt=document.createElement("button");Bt.type="button",Bt.className="place",Bt.setAttribute("aria-pressed","false"),Bt.textContent=Ot.name,Bt.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,Z(Ot)}),P.append(Bt),at.set(Ot.id,Bt)}}for(const Q of ir("mode"))Q.addEventListener("click",()=>Rt(Q.dataset.mode));b.addEventListener("click",()=>{const Q=b.getAttribute("aria-pressed")!=="true";b.setAttribute("aria-pressed",String(Q)),s.setCartoon(Q)});function ut(){E.hidden=X!=="bike"&&X!=="car",E.setAttribute("aria-pressed",String(A())),E.textContent=A()?X==="car"?"Камера из салона":"Камера от первого лица":"Камера снаружи",C.textContent=A()?"Стрелки или WASD — езда. Тяните по сцене, чтобы повернуть камеру. V — вид от первого лица.":I[Kt()?"superman":X]}function Ct(){A()?U.delete(X):U.add(X),ut()}E.addEventListener("click",Ct),T.addEventListener("click",()=>Lt(!Jt));function Nt(Q){cf("light",Q),s.light(Q)}for(const Q of ir("light"))Q.addEventListener("click",()=>Nt(Q.dataset.light));for(const Q of ir("action"))Q.addEventListener("click",()=>{const bt=Q.dataset.action;if(bt==="reset"){Z(mt.find(Bt=>Bt.id==="paintedWaterfront"));return}const Et=bt==="zoom-in";if(A()){ct=n.clamp(ct+(Et?-1:1),3.8,9);return}if(H[X]||Kt()){c.fov=n.clamp(c.fov+(Et?-8:8),42,82),c.updateProjectionMatrix();return}Y.copy(c.position).sub(h.target);const Ot=n.clamp(Y.length()*(Et?.75:1.33),h.minDistance,h.maxDistance);c.position.copy(h.target).add(Y.setLength(Ot)),h.update()});for(const Q of ir("move")){const bt=Q.dataset.move;Q.addEventListener("pointerdown",Et=>{Et.pointerType==="touch"&&Et.preventDefault(),Q.setPointerCapture(Et.pointerId),q.set(Et.pointerId,bt),it.add(bt)});for(const Et of["pointerup","pointercancel","lostpointercapture"])Q.addEventListener(Et,Ot=>q.delete(Ot.pointerId));Q.addEventListener("click",Et=>{Et.detail===0&&it.add(bt)}),Q.addEventListener("contextmenu",Et=>Et.preventDefault())}ss.addEventListener("pointerdown",Q=>{!(H[X]||Kt())||yt!==null||(yt={id:Q.pointerId,x:Q.clientX,y:Q.clientY},ss.setPointerCapture(yt.id))}),ss.addEventListener("pointermove",Q=>{if(Q.pointerId!==yt?.id)return;const bt=Q.clientX-yt.x,Et=Q.clientY-yt.y;A()?(K-=bt*.009,st=n.clamp(st+Et*.018,1.55,6)):(ht+=bt*.003,Mt=n.clamp(Mt-Et*.003,-1.33,1.33)),yt.x=Q.clientX,yt.y=Q.clientY});for(const Q of["pointerup","pointercancel","lostpointercapture"])ss.addEventListener(Q,bt=>{yt?.id===bt.pointerId&&(yt=null)});window.addEventListener("keydown",Q=>{const bt=J[Q.code],Et=(X==="walk"||X==="orbit")&&(Q.code==="ShiftLeft"||Q.code==="ShiftRight"),Ot=(X==="car"||X==="bike")&&Q.code==="KeyV";if(!(X==="map"||!bt&&!Et&&!Ot||Q.defaultPrevented||Q.isComposing||Q.altKey||Q.ctrlKey||Q.metaKey)&&!(Q.target instanceof HTMLElement&&(Q.target.isContentEditable||Q.target.matches("input, select, textarea")))){if(Ot){Q.preventDefault(),Q.repeat||Ct();return}pt.add(Q.code),bt&&(Q.preventDefault(),Q.repeat||it.add(bt))}}),window.addEventListener("keyup",Q=>pt.delete(Q.code)),window.addEventListener("blur",()=>{pt.clear(),q.clear(),it.clear(),At=0,yt=null});function xt(){const Q=Math.max(1,ss.clientWidth),bt=Math.max(1,ss.clientHeight);s.renderer.setSize(Q,bt,!1),c.aspect=Q/bt,c.updateProjectionMatrix()}function $t(){const Q=new Set(it);for(const bt of pt)J[bt]&&Q.add(J[bt]);for(const bt of q.values())Q.add(bt);return[Number(Q.has("forward"))-Number(Q.has("back")),Number(Q.has("right"))-Number(Q.has("left"))]}function Vt(Q,bt,Et,Ot){const Bt=c.position,ie=X==="car"?.65:.4,re=Math.max(1,Math.ceil(Math.hypot(Q,bt)/.15));function fe(_e,Me){const Ce=wt(_e,Me);return Ce===null||Math.abs(Ce-Et)>ie?!1:(Bt.x=_e,Bt.z=Me,Et=Ce,!0)}for(let _e=0;_e<re;_e++)if(Ot)fe(Bt.x+Q/re,Bt.z),fe(Bt.x,Bt.z+bt/re);else if(!fe(Bt.x+Q/re,Bt.z+bt/re)){At=0;break}return Et}function Re(Q){const[bt,Et]=$t();k=Et;const Ot=c.position,Bt=H[X];let ie=wt(Ot.x,Ot.z);if(X==="walk"&&(bt||Et)){const re=pt.has("ShiftLeft")||pt.has("ShiftRight"),_e=(it.size?.46:(re?7.8:4.8)*Q)/Math.hypot(Et,bt),Me=(Math.sin(ht)*bt+Math.cos(ht)*Et)*_e,Ce=(-Math.cos(ht)*bt+Math.sin(ht)*Et)*_e;ie=Vt(Me,Ce,ie,!0)}else if(X!=="walk"){const re=X==="bike"&&o.bicycleAt(Ot.x,Ot.z)==="push",fe=re?2:Bt.speed,_e=bt*(bt<0?Math.min(fe,Bt.reverse):fe),Me=it.size?Math.max(Q,.06):Q;At=n.clamp(n.damp(At,_e,_e===0?12:5,Me),-fe,fe);const Ce=At<-.1;ht+=Et*Bt.steer*Me*(Ce?-1:1);const Un=At*Me;Math.abs(Un)>1e-4&&(ie=Vt(Math.sin(ht)*Un,-Math.cos(ht)*Un,ie,re));const wn=`${Math.round(Math.abs(At)*3.6)} км/ч${re?" · пешком":""}`;w.textContent!==wn&&(w.textContent=wn)}ie!==null&&(Ot.y=n.damp(Ot.y,ie+Bt.eye,18,Q)),rt.set(Math.sin(ht)*Math.cos(Mt),Math.sin(Mt),-Math.cos(ht)*Math.cos(Mt)),c.lookAt(rt.add(c.position))}function ve(Q){const[bt,Et]=$t(),Ot=c.position;if(bt||Et){const Bt=Ot.y-s.terrain(Ot.x,Ot.z),ie=n.clamp(Bt*.38,3,180)*5;Ot.fromArray(rf({position:Ot.toArray(),yaw:ht,pitch:Mt,longitudinal:bt,lateral:Et,distance:ie*(it.size?Math.max(Q,.08):Q),ground:s.terrain,clearance:F,ceiling:V,bounds:g}))}rt.fromArray(S0(ht,Mt)),c.lookAt(rt.add(Ot))}function Hn(Q){if(Kt()){ve(Q);return}if(h.update(),X==="orbit"&&(pt.size||it.size||q.size)){const[Bt,ie]=$t();if(Bt||ie){const re=pt.has("ShiftLeft")||pt.has("ShiftRight"),fe=n.clamp(c.position.distanceTo(h.target)*.38,12,180)*(re?5:1),_e=Y.subVectors(h.target,c.position).normalize().toArray(),Me=h.target.x-c.position.x,Ce=h.target.z-c.position.z;c.position.fromArray(rf({position:c.position.toArray(),yaw:-h.getAzimuthalAngle(),pitch:h.getPolarAngle()-Math.PI/2,longitudinal:Bt,lateral:ie,distance:fe*(it.size?Math.max(Q,.08):Q),ground:s.terrain,clearance:N,ceiling:V,bounds:[u-Me,d-Ce,m-Me,_-Ce]})),qt(_e)}}const bt=Lc(h.target.x,nt.x,u,m),Et=Lc(h.target.z,nt.z,d,_);c.position.x+=bt-h.target.x,c.position.z+=Et-h.target.z,h.target.x=bt,h.target.z=Et,nt.copy(h.target);const Ot=s.terrain(c.position.x,c.position.z)+N-c.position.y;Ot>0&&(c.position.y+=Ot,h.target.y+=Ot)}xt(),window.addEventListener("resize",xt),Rt("orbit");const bn=new URLSearchParams(window.location.search),al=[...mt,...Object.values(kt).flat()];Z(al.find(Q=>Q.id===bn.get("place"))??mt[0]);const kr=bn.get("mode");["map","walk","bike","car"].includes(kr)&&Rt(kr),bn.get("light")==="sunset"&&Nt("sunset"),bn.get("camera")==="outside"&&(X==="bike"||X==="car")&&Ct();let Po=performance.now();s.renderer.setAnimationLoop(Q=>{const bt=Math.min((Q-Po)/1e3,.05);Po=Q,H[X]?Re(bt):Hn(bt),it.clear(),c.getWorldDirection(_t);const Et=X==="map"?0:-Math.atan2(_t.x,-_t.z);S.style.setProperty("--north",`${Et}rad`);const Ot=H[X]||Kt()?c.position:h.target;lt(Ot.x,Ot.z);for(const{marker:Me,place:Ce}of W){const[Un,wn]=Ce.position;z.set(Un,s.terrain(Un,wn)+(Ce.pinHeight??1.2),wn).project(c),Me.hidden=!!H[X]||z.z<-1||z.z>1||Math.abs(z.x)>.97||Math.abs(z.y)>.92,Me.hidden||(Me.style.left=`${(z.x+1)*50}%`,Me.style.top=`${(1-z.y)*50}%`)}const Bt=f?0:Q/1e3,ie=A(),re={yaw:ht,speed:At,turn:k,delta:bt,terrain:s.terrain,angle:K,height:st,distance:ct},fe=a.cameraFor(c,{...re,active:X==="car"&&ie}),_e=l.cameraFor(fe,{...re,active:X==="bike"&&ie});s.render(_e,Bt),r.render(s.renderer,{mode:ie?"":X,aspect:c.aspect,turn:k,speed:At,time:Bt,delta:bt,reducedMotion:f})})}let hf="Не удалось загрузить данные Анапы. Перезагрузите страницу.";try{const[i,t]=await Promise.all([lf("anapa"),lf("elevation")]);i.scale??=[111320*Math.cos(ue.degToRad(i.origin[1])),111132],hf="Не удалось открыть 3D-карту. Проверьте, доступен ли WebGL 2, и перезагрузите страницу.",u4(i,t),af.hidden=!0}catch(i){console.error(i),af.textContent=hf}
