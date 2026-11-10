(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const xc="186",Ui={ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fu=0,Ll=1,Ou=2,Qo=1,Bu=2,Js=3,Qn=0,ln=1,an=2,pi=0,js=1,ao=2,Dl=3,Il=4,zu=5,ms=100,ku=101,Hu=102,Gu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,Ql=204,jl=205,Zu=206,$u=207,Ku=208,Ju=209,Qu=210,ju=211,tf=212,ef=213,nf=214,Ra=0,Ca=1,Pa=2,co=3,La=4,Da=5,Ia=6,Ua=7,Cr=0,sf=1,of=2,jn=0,t0=1,e0=2,n0=3,i0=4,s0=5,o0=6,r0=7,a0=300,is=301,Ms=302,jo=303,xa=304,Pr=306,dr=1e3,di=1001,lo=1002,Ze=1003,rf=1004,ko=1005,je=1006,va=1007,Qi=1008,wn=1009,c0=1010,l0=1011,ho=1012,vc=1013,ti=1014,kn=1015,ei=1016,Mc=1017,Sc=1018,uo=1020,h0=35902,u0=35899,f0=1021,d0=1022,Hn=1023,xi=1026,ji=1027,yc=1028,bc=1029,ss=1030,wc=1031,Ec=1033,tr=33776,er=33777,nr=33778,ir=33779,Na=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Ha=37496,Ga=37488,Va=37489,pr=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,$a=37812,Ka=37813,Ja=37814,Qa=37815,ja=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,oc=36492,rc=36494,ac=36495,cc=36283,lc=36284,mr=36285,hc=36286,af=3200,gr=0,cf=1,Ai="",Je="srgb",_r="srgb-linear",xr="linear",pe="srgb",Ma=7680,lf=519,hf=512,uf=513,ff=514,Tc=515,df=516,pf=517,Ac=518,mf=519,p0=35044,Ul="300 es",Jn=2e3,fo=2001;function Pd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){const i=vr("canvas");return i.style.display="block",i}const Y0={};function Mr(...i){const t="THREE."+i.shift();console.log(t,...i)}function _f(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=_f(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=_f(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _s(...i){const t=i.join(" ");t in Y0||(Y0[t]=!0,Zt(...i))}function Ld(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Dd={[Ra]:Ca,[Pa]:Ia,[La]:Ua,[co]:Da,[Ca]:Ra,[Ia]:Pa,[Ua]:La,[Da]:co};class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Z0=1234567;const sr=Math.PI/180,Sr=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function m0(i,t){return(i%t+t)%t}function Id(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ud(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function Nd(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function Fd(i,t=1){return t-Math.abs(m0(i,t*2)-t)}function Od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kd(i,t){return i+Math.random()*(t-i)}function Hd(i){return i*(.5-Math.random())}function Gd(i){i!==void 0&&(Z0=i);let t=Z0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vd(i){return i*sr}function Wd(i){return i*Sr}function Xd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function qd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zd(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ce={DEG2RAD:sr,RAD2DEG:Sr,generateUUID:mi,clamp:ne,euclideanModulo:m0,mapLinear:Id,inverseLerp:Ud,lerp:or,damp:Nd,pingpong:Fd,smoothstep:Od,smootherstep:Bd,randInt:zd,randFloat:kd,randFloatSpread:Hd,seededRandom:Gd,degToRad:Vd,radToDeg:Wd,isPowerOfTwo:Xd,ceilPowerOfTwo:qd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:Zd,normalize:me,denormalize:Kn};var oo;let vt=(oo=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},oo.prototype.isVector2=!0,oo);class Fi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=o[r+0],d=o[r+1],m=o[r+2],_=o[r+3];if(f!==_||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*_;g<0&&(u=-u,d=-d,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);p=Math.sin(p*v)/M,a=Math.sin(a*v)/M,l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+_*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],m=o[r+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),u=l(n/2),d=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}var ro;let O=(ro=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ro.prototype.isVector3=!0,ro);const Wc=new O,$0=new Fi,G0=class G0{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],M=s[4],x=s[7],S=s[2],b=s[5],E=s[8];return o[0]=r*_+a*v+l*S,o[3]=r*g+a*M+l*b,o[6]=r*p+a*x+l*E,o[1]=c*_+h*v+f*S,o[4]=c*g+h*M+f*b,o[7]=c*p+h*x+f*E,o[2]=u*_+d*v+m*S,o[5]=u*g+d*M+m*b,o[8]=u*p+d*x+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*o,d=c*o-r*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xc.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xc.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};G0.prototype.isMatrix3=!0;let Qt=G0;const Xc=new Qt,K0=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J0=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $d(){const i={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===pe&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_r]:{primaries:t,whitePoint:n,transfer:xr,toXYZ:K0,fromXYZ:J0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:K0,fromXYZ:J0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),i}const ae=$d();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class xf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ts===void 0&&(Ts=vr("canvas")),Ts.width=t.width,Ts.height=t.height;const s=Ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ni(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kd=0;class Rc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(qc(s[r].image)):o.push(qc(s[r]))}else o=qc(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let Jd=0;const Yc=new O;class $e extends Bi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=di,s=di,o=je,r=Qi,a=Hn,l=wn,c=$e.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=mi(),this.name="",this.source=new Rc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=a0;$e.DEFAULT_ANISOTROPY=1;const V0=class V0{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(d+1)/2,S=(p+1)/2,b=(h+u)/4,E=(f+_)/4,y=(m+g)/4;return M>x&&M>S?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=b/n,o=E/n):x>S?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=b/s,o=y/s):S<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(S),n=E/o,s=y/o),this.set(n,s,o,e),this}let v=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};V0.prototype.isVector4=!0;let Pe=V0;class vf extends Bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new $e(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends vf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class g0 extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mf extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const _c=class _c{constructor(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g)}set(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _c().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),o=1/As.setFromMatrixColumn(t,1).length(),r=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u+_*a,e[4]=m*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-m,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u-_*a,e[4]=-r*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*l,d=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qd,t,jd)}lookAt(t,e,n){const s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Vi.crossVectors(n,An),Vi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Vi.crossVectors(n,An)),Vi.normalize(),Ur.crossVectors(An,Vi),s[0]=Vi.x,s[4]=Ur.x,s[8]=An.x,s[1]=Vi.y,s[5]=Ur.y,s[9]=An.y,s[2]=Vi.z,s[6]=Ur.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],M=n[7],x=n[11],S=n[15],b=s[0],E=s[4],y=s[8],w=s[12],A=s[1],P=s[5],D=s[9],C=s[13],L=s[2],U=s[6],z=s[10],k=s[14],W=s[3],q=s[7],J=s[11],Q=s[15];return o[0]=r*b+a*A+l*L+c*W,o[4]=r*E+a*P+l*U+c*q,o[8]=r*y+a*D+l*z+c*J,o[12]=r*w+a*C+l*k+c*Q,o[1]=h*b+f*A+u*L+d*W,o[5]=h*E+f*P+u*U+d*q,o[9]=h*y+f*D+u*z+d*J,o[13]=h*w+f*C+u*k+d*Q,o[2]=m*b+_*A+g*L+p*W,o[6]=m*E+_*P+g*U+p*q,o[10]=m*y+_*D+g*z+p*J,o[14]=m*w+_*C+g*k+p*Q,o[3]=v*b+M*A+x*L+S*W,o[7]=v*E+M*P+x*U+S*q,o[11]=v*y+M*D+x*z+S*J,o[15]=v*w+M*C+x*k+S*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],v=l*d-c*u,M=a*d-c*f,x=a*u-l*f,S=r*d-c*h,b=r*u-l*h,E=r*f-a*h;return e*(_*v-g*M+p*x)-n*(m*v-g*S+p*b)+s*(m*M-_*S+p*E)-o*(m*x-_*b+g*E)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-a*c)-n*(o*h-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=e*a-n*r,M=e*l-s*r,x=e*c-o*r,S=n*l-s*a,b=n*c-o*a,E=s*c-o*l,y=h*_-f*m,w=h*g-u*m,A=h*p-d*m,P=f*g-u*_,D=f*p-d*_,C=u*p-d*g,L=v*C-M*D+x*P+S*A-b*w+E*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/L;return t[0]=(a*C-l*D+c*P)*U,t[1]=(s*D-n*C-o*P)*U,t[2]=(_*E-g*b+p*S)*U,t[3]=(u*b-f*E-d*S)*U,t[4]=(l*A-r*C-c*w)*U,t[5]=(e*C-s*A+o*w)*U,t[6]=(g*x-m*E-p*M)*U,t[7]=(h*E-u*x+d*M)*U,t[8]=(r*D-a*A+c*y)*U,t[9]=(n*A-e*D-o*y)*U,t[10]=(m*b-_*x+p*v)*U,t[11]=(f*x-h*b-d*v)*U,t[12]=(a*w-r*P-l*y)*U,t[13]=(e*P-n*w+s*y)*U,t[14]=(_*M-m*S-g*v)*U,t[15]=(h*S-f*M+u*v)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,u=o*c,d=o*h,m=o*f,_=r*h,g=r*f,p=a*f,v=l*c,M=l*h,x=l*f,S=n.x,b=n.y,E=n.z;return s[0]=(1-(_+p))*S,s[1]=(d+x)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(u+p))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(m+M)*E,s[9]=(g-v)*E,s[10]=(1-(u+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=As.set(s[0],s[1],s[2]).length();const a=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();o<0&&(r=-r),Xn.copy(this);const c=1/r,h=1/a,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,e.setFromRotationMatrix(Xn),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=Jn,l=!1){const c=this.elements,h=2*o/(e-t),f=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,_;if(l)m=o/(r-o),_=r*o/(r-o);else if(a===Jn)m=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===fo)m=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Jn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,_;if(l)m=1/(r-o),_=r/(r-o);else if(a===Jn)m=-2/(r-o),_=-(r+o)/(r-o);else if(a===fo)m=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};_c.prototype.isMatrix4=!0;let Se=_c;const As=new O,Xn=new Se,Qd=new O(0,0,0),jd=new O(1,1,1),Vi=new O,Ur=new O,An=new O,Q0=new Se,j0=new Fi;class vi{constructor(t=0,e=0,n=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Q0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Q0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return j0.setFromEuler(this),this.setFromQuaternion(j0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class _0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tp=0;const th=new O,Rs=new Fi,yi=new Se,Nr=new O,To=new O,ep=new O,np=new Fi,eh=new O(1,0,0),nh=new O(0,1,0),ih=new O(0,0,1),sh={type:"added"},ip={type:"removed"},Cs={type:"childadded",child:null},Zc={type:"childremoved",child:null};class be extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new O,e=new vi,n=new Fi,s=new O(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Qt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(To,Nr,this.up):yi.lookAt(Nr,To,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(yi),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ip),Zc.child=t,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}be.DEFAULT_UP=new O(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fe extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sp={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function $c(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=m0(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=$c(r,o,t+1/3),this.g=$c(r,o,t),this.b=$c(r,o,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function n(o){o!==void 0&&parseFloat(o)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ae.workingToColorSpace(sn.copy(this),t),Math.round(ne(sn.r*255,0,255))*65536+Math.round(ne(sn.g*255,0,255))*256+Math.round(ne(sn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(sn.copy(this),e);const n=sn.r,s=sn.g,o=sn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Je){ae.workingToColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,s=sn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Fr);const n=or(Wi.h,Fr.h,e),s=or(Wi.s,Fr.s,e),o=or(Wi.l,Fr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const sn=new qt;qt.NAMES=Sf;class Cc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new Cc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class x0 extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const qn=new O,bi=new O,Kc=new O,wi=new O,Ps=new O,Ls=new O,oh=new O,Jc=new O,Qc=new O,jc=new O,tl=new Pe,el=new Pe,nl=new Pe;class Ln{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qn.subVectors(t,e),s.cross(qn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){qn.subVectors(s,e),bi.subVectors(n,e),Kc.subVectors(t,e);const r=qn.dot(qn),a=qn.dot(bi),l=qn.dot(Kc),c=bi.dot(bi),h=bi.dot(Kc),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(r*h-a*l)*u;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,wi.x),l.addScaledVector(r,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(tl,o.x),r.addScaledVector(el,o.y),r.addScaledVector(nl,o.z),r}static isFrontFacing(t,e,n,s){return qn.subVectors(n,e),bi.subVectors(t,e),qn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),qn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Ps.subVectors(s,n),Ls.subVectors(o,n),Jc.subVectors(t,n);const l=Ps.dot(Jc),c=Ls.dot(Jc);if(l<=0&&c<=0)return e.copy(n);Qc.subVectors(t,s);const h=Ps.dot(Qc),f=Ls.dot(Qc);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Ps,r);jc.subVectors(t,o);const d=Ps.dot(jc),m=Ls.dot(jc);if(m>=0&&d<=m)return e.copy(o);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ls,a);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return oh.subVectors(o,s),a=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(oh,a);const p=1/(g+_+u);return r=_*p,a=u*p,e.copy(n).addScaledVector(Ps,r).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class os{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Yn):Yn.fromBufferAttribute(o,r),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),Br.subVectors(this.max,Ao),Ds.subVectors(t.a,Ao),Is.subVectors(t.b,Ao),Us.subVectors(t.c,Ao),Xi.subVectors(Is,Ds),qi.subVectors(Us,Is),cs.subVectors(Ds,Us);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-cs.z,cs.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,cs.z,0,-cs.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-cs.y,cs.x,0];return!il(e,Ds,Is,Us,Br)||(e=[1,0,0,0,1,0,0,0,1],!il(e,Ds,Is,Us,Br))?!1:(zr.crossVectors(Xi,qi),e=[zr.x,zr.y,zr.z],il(e,Ds,Is,Us,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ei=[new O,new O,new O,new O,new O,new O,new O,new O],Yn=new O,Or=new os,Ds=new O,Is=new O,Us=new O,Xi=new O,qi=new O,cs=new O,Ao=new O,Br=new O,zr=new O,ls=new O;function il(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ls.fromArray(i,o);const a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=t.dot(ls),c=e.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Be=new O,kr=new vt;let op=0;class In extends Bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=p0,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),o=me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class v0 extends In{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class M0 extends In{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends In{constructor(t,e,n){super(new Float32Array(t),e,n)}}const rp=new os,Ro=new O,sl=new O;class xo{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const e=Ro.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(sl)),this.expandByPoint(Ro.copy(t.center).sub(sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ap=0;const Fn=new Se,ol=new be,Ns=new O,Rn=new os,Co=new os,qe=new O;class Ce extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pd(t)?M0:v0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(Rn.min,Co.min),Rn.expandByPoint(qe),qe.addVectors(Rn.max,Co.max),Rn.expandByPoint(qe)):(Rn.expandByPoint(Co.min),Rn.expandByPoint(Co.max))}Rn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)qe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qe.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),qe.add(Ns)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new In(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new O,l[y]=new O;const c=new O,h=new O,f=new O,u=new vt,d=new vt,m=new vt,_=new O,g=new O;function p(y,w,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,A),u.fromBufferAttribute(o,y),d.fromBufferAttribute(o,w),m.fromBufferAttribute(o,A),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[y].add(_),a[w].add(_),a[A].add(_),l[y].add(g),l[w].add(g),l[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,w=v.length;y<w;++y){const A=v[y],P=A.start,D=A.count;for(let C=P,L=P+D;C<L;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new O,x=new O,S=new O,b=new O;function E(y){S.fromBufferAttribute(s,y),b.copy(S);const w=a[y];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(b,w);const P=x.dot(l[y])<0?-1:1;r.setXYZW(y,M.x,M.y,M.z,P)}for(let y=0,w=v.length;y<w;++y){const A=v[y],P=A.start,D=A.count;for(let C=P,L=P+D;C<L;C+=3)E(t.getX(C+0)),E(t.getX(C+1)),E(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new In(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new O,o=new O,r=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new In(u,h,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=p0,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const un=new O;class yr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),o=me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new In(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rl=new O,cp=new O,lp=new Qt;class hi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=rl.subVectors(n,e).cross(cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(rl),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lp.getNormalMatrix(t),s=this.coplanarPoint(rl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let hp=0;class rs extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=js,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=jl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class S0 extends rs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fs;const Po=new O,Os=new O,Bs=new O,zs=new vt,Lo=new vt,bf=new Se,Hr=new O,Do=new O,Gr=new O,rh=new vt,al=new vt,ah=new vt;class wf extends be{constructor(t=new S0){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yf(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new yr(n,3,0,!1)),Fs.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),bf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Vr(Hr.set(-.5,-.5,0),Bs,r,Os,s,o),Vr(Do.set(.5,-.5,0),Bs,r,Os,s,o),Vr(Gr.set(.5,.5,0),Bs,r,Os,s,o),rh.set(0,0),al.set(1,0),ah.set(1,1);let a=t.ray.intersectTriangle(Hr,Do,Gr,!1,Po);if(a===null&&(Vr(Do.set(-.5,.5,0),Bs,r,Os,s,o),al.set(0,1),a=t.ray.intersectTriangle(Hr,Gr,Do,!1,Po),a===null))return;const l=t.ray.origin.distanceTo(Po);l<t.near||l>t.far||e.push({distance:l,point:Po.clone(),uv:Ln.getInterpolation(Po,Hr,Do,Gr,rh,al,ah,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vr(i,t,e,n,s,o){zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Lo.x=o*zs.x-s*zs.y,Lo.y=s*zs.x+o*zs.y):Lo.copy(zs),i.copy(t),i.x+=Lo.x,i.y+=Lo.y,i.applyMatrix4(bf)}const Ti=new O,cl=new O,Wr=new O,Xr=new O;class y0{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cl.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Xr.copy(this.origin).sub(cl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Wr),a=Xr.dot(this.direction),l=-Xr.dot(Wr),c=Xr.lengthSq(),h=Math.abs(1-r*r);let f,u,d,m;if(h>0)if(f=r*l-a,u=r*a-l,m=o*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(cl).addScaledVector(Wr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ti.subVectors(t.center,this.origin);const n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-r.x,u=t.y-r.y,d=t.z-r.z,m=e.x-r.x,_=e.y-r.y,g=e.z-r.z,p=n.x-r.x,v=n.y-r.y,M=n.z-r.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(h);let E,y,w,A,P,D,C,L,U,z,k,W;if(x>=S&&x>=b?(w=l,D=f,U=m,W=p,l>=0?(E=c,y=h,A=u,P=d,C=_,L=g,z=v,k=M):(E=h,y=c,A=d,P=u,C=g,L=_,z=M,k=v)):S>=b?(w=c,D=u,U=_,W=v,c>=0?(E=h,y=l,A=d,P=f,C=g,L=m,z=M,k=p):(E=l,y=h,A=f,P=d,C=m,L=g,z=p,k=M)):(w=h,D=d,U=g,W=M,h>=0?(E=l,y=c,A=f,P=u,C=m,L=_,z=p,k=v):(E=c,y=l,A=u,P=f,C=_,L=m,z=v,k=p)),w===0)return null;const q=E/w,J=y/w,Q=1/w,bt=A-q*D,Mt=P-J*D,Xt=C-q*U,_t=L-J*U,mt=z-q*W,H=k-J*W,N=mt*_t-H*Xt,Y=bt*H-Mt*mt,ut=Xt*Mt-_t*bt;if(s){if(N<0||Y<0||ut<0)return null}else if((N<0||Y<0||ut<0)&&(N>0||Y>0||ut>0))return null;const st=N+Y+ut;if(st===0)return null;const ht=Q*(N*D+Y*U+ut*W);return(st>0?ht<0:ht>0)?null:this.at(ht/st,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn extends rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ch=new Se,hs=new y0,qr=new xo,lh=new O,Yr=new O,Zr=new O,$r=new O,ll=new O,Kr=new O,hh=new O,Jr=new O;class he extends be{constructor(t=new Ce,e=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Kr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(ll.fromBufferAttribute(f,t),r?Kr.addScaledVector(ll,h):Kr.addScaledVector(ll.sub(e),h))}e.add(Kr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(o),hs.copy(t.ray).recast(t.near),!(qr.containsPoint(hs.origin)===!1&&(hs.intersectSphere(qr,lh)===null||hs.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(ch.copy(o).invert(),hs.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,S=M;x<S;x+=3){const b=a.getX(x),E=a.getX(x+1),y=a.getX(x+2);s=Qr(this,p,t,n,c,h,f,b,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=Qr(this,r,t,n,c,h,f,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,S=M;x<S;x+=3){const b=x,E=x+1,y=x+2;s=Qr(this,p,t,n,c,h,f,b,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=g,M=g+1,x=g+2;s=Qr(this,r,t,n,c,h,f,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function up(i,t,e,n,s,o,r,a){let l;if(t.side===ln?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Qn,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:i}}function Qr(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Yr),i.getVertexPosition(l,Zr),i.getVertexPosition(c,$r);const h=up(i,t,e,n,Yr,Zr,$r,hh);if(h){const f=new O;Ln.getBarycoord(hh,Yr,Zr,$r,f),s&&(h.uv=Ln.getInterpolatedAttribute(s,a,l,c,f,new vt)),o&&(h.uv1=Ln.getInterpolatedAttribute(o,a,l,c,f,new vt)),r&&(h.normal=Ln.getInterpolatedAttribute(r,a,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};Ln.getNormal(Yr,Zr,$r,u.normal),h.face=u,h.barycoord=f}return h}class Pc extends $e{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Ze,h=Ze,f,u){super(null,r,a,l,c,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl extends In{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ks=new Se,uh=new Se,jr=[],fh=new os,fp=new Se,Io=new he,Uo=new xo;class Oi extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new os),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ks),fh.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(fh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ks),Uo.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(n),t.ray.intersectsSphere(Uo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ks),uh.multiplyMatrices(n,ks),Io.matrixWorld=uh,Io.raycast(t,jr);for(let r=0,a=jr.length;r<a;r++){const l=jr[r];l.instanceId=o,l.object=this,e.push(l)}jr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pc(new Float32Array(s*this.count),s,this.count,yc,kn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const us=new xo,dp=new vt(.5,.5),ta=new O;class Lc{constructor(t=new hi,e=new hi,n=new hi,s=new hi,o=new hi,r=new hi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],f=o[5],u=o[6],d=o[7],m=o[8],_=o[9],g=o[10],p=o[11],v=o[12],M=o[13],x=o[14],S=o[15];if(s[0].setComponents(c-r,d-h,p-m,S-v).normalize(),s[1].setComponents(c+r,d+h,p+m,S+v).normalize(),s[2].setComponents(c+a,d+f,p+_,S+M).normalize(),s[3].setComponents(c-a,d-f,p-_,S-M).normalize(),n)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,d-u,p-g,S-x).normalize();else if(s[4].setComponents(c-l,d-u,p-g,S-x).normalize(),e===Jn)s[5].setComponents(c+l,d+u,p+g,S+x).normalize();else if(e===fo)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(t){us.center.set(0,0,0);const e=dp.distanceTo(t.center);return us.radius=.7071067811865476+e,us.applyMatrix4(t.matrixWorld),this.intersectsSphere(us)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ta.x=s.normal.x>0?t.max.x:t.min.x,ta.y=s.normal.y>0?t.max.y:t.min.y,ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b0 extends $e{constructor(t=[],e=is,n,s,o,r,a,l,c,h){super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dc extends $e{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class po extends $e{constructor(t,e,n=ti,s,o,r,a=Ze,l=Ze,c,h=xi,f=1){if(h!==xi&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ef extends po{constructor(t,e=ti,n=is,s,o,r=Ze,a=Ze,l,c=xi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,o,r,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class w0 extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ae extends Ce{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function m(_,g,p,v,M,x,S,b,E,y,w){const A=x/E,P=S/y,D=x/2,C=S/2,L=b/2,U=E+1,z=y+1;let k=0,W=0;const q=new O;for(let J=0;J<z;J++){const Q=J*P-C;for(let bt=0;bt<U;bt++){const Mt=bt*A-D;q[_]=Mt*v,q[g]=Q*M,q[p]=L,c.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[p]=b>0?1:-1,h.push(q.x,q.y,q.z),f.push(bt/E),f.push(1-J/y),k+=1}}for(let J=0;J<y;J++)for(let Q=0;Q<E;Q++){const bt=u+Q+U*J,Mt=u+Q+U*(J+1),Xt=u+(Q+1)+U*(J+1),_t=u+(Q+1)+U*J;l.push(bt,Mt,_t),l.push(Mt,Xt,_t),W+=6}a.addGroup(d,W,w),d+=W,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class vo extends Ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new O,h=new vt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Un extends Ce{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let m=0;const _=[],g=n/2;let p=0;v(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function v(){const x=new O,S=new O;let b=0;const E=(e-t)/n;for(let y=0;y<=o;y++){const w=[],A=y/o,P=A*(e-t)+t;for(let D=0;D<=s;D++){const C=D/s,L=C*l+a,U=Math.sin(L),z=Math.cos(L);S.x=P*U,S.y=-A*n+g,S.z=P*z,f.push(S.x,S.y,S.z),x.set(U,E,z).normalize(),u.push(x.x,x.y,x.z),d.push(C,1-A),w.push(m++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<o;w++){const A=_[w][y],P=_[w+1][y],D=_[w+1][y+1],C=_[w][y+1];(t>0||w!==0)&&(h.push(A,P,C),b+=3),(e>0||w!==o-1)&&(h.push(P,D,C),b+=3)}c.addGroup(p,b,0),p+=b}function M(x){const S=m,b=new vt,E=new O;let y=0;const w=x===!0?t:e,A=x===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,g*A,0),u.push(0,A,0),d.push(.5,.5),m++;const P=m;for(let D=0;D<=s;D++){const L=D/s*l+a,U=Math.cos(L),z=Math.sin(L);E.x=w*z,E.y=g*A,E.z=w*U,f.push(E.x,E.y,E.z),u.push(0,A,0),b.x=U*.5+.5,b.y=z*.5*A+.5,d.push(b.x,b.y),m++}for(let D=0;D<s;D++){const C=S+D,L=P+D;x===!0?h.push(L,L+1,C):h.push(L+1,L,C),y+=3}c.addGroup(p,y,x===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ic extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(o.slice(),3)),this.setAttribute("uv",new se(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new O,x=new O,S=new O;for(let b=0;b<e.length;b+=3)d(e[b+0],M),d(e[b+1],x),d(e[b+2],S),l(M,x,S,v)}function l(v,M,x,S){const b=S+1,E=[];for(let y=0;y<=b;y++){E[y]=[];const w=v.clone().lerp(x,y/b),A=M.clone().lerp(x,y/b),P=b-y;for(let D=0;D<=P;D++)D===0&&y===b?E[y][D]=w:E[y][D]=w.clone().lerp(A,D/P)}for(let y=0;y<b;y++)for(let w=0;w<2*(b-y)-1;w++){const A=Math.floor(w/2);w%2===0?(u(E[y][A+1]),u(E[y+1][A]),u(E[y][A])):(u(E[y][A+1]),u(E[y+1][A+1]),u(E[y+1][A]))}}function c(v){const M=new O;for(let x=0;x<o.length;x+=3)M.x=o[x+0],M.y=o[x+1],M.z=o[x+2],M.normalize().multiplyScalar(v),o[x+0]=M.x,o[x+1]=M.y,o[x+2]=M.z}function h(){const v=new O;for(let M=0;M<o.length;M+=3){v.x=o[M+0],v.y=o[M+1],v.z=o[M+2];const x=g(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;r.push(x,1-S)}m(),f()}function f(){for(let v=0;v<r.length;v+=6){const M=r[v+0],x=r[v+2],S=r[v+4],b=Math.max(M,x,S),E=Math.min(M,x,S);b>.9&&E<.1&&(M<.2&&(r[v+0]+=1),x<.2&&(r[v+2]+=1),S<.2&&(r[v+4]+=1))}}function u(v){o.push(v.x,v.y,v.z)}function d(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function m(){const v=new O,M=new O,x=new O,S=new O,b=new vt,E=new vt,y=new vt;for(let w=0,A=0;w<o.length;w+=9,A+=6){v.set(o[w+0],o[w+1],o[w+2]),M.set(o[w+3],o[w+4],o[w+5]),x.set(o[w+6],o[w+7],o[w+8]),b.set(r[A+0],r[A+1]),E.set(r[A+2],r[A+3]),y.set(r[A+4],r[A+5]),S.copy(v).add(M).add(x).divideScalar(3);const P=g(S);_(b,A+0,v,P),_(E,A+2,M,P),_(y,A+4,x,P)}}function _(v,M,x,S){S<0&&v.x===1&&(r[M]=v.x-1),x.x===0&&x.z===0&&(r[M]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.vertices,t.indices,t.radius,t.detail)}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new vt:new O);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],o=[],r=[],a=new O,l=new Se;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new O)}o[0]=new O,r[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ne(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,m))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(ne(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uc extends ii{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tf extends Uc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function E0(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const dh=new O,ph=new O,hl=new E0,ul=new E0,fl=new E0;class Nc extends ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(ph.subVectors(s[0],s[1]).add(s[0]),c=ph);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(dh.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=dh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),hl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,g),ul.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,g),fl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ul.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),fl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(hl.calc(l),ul.calc(l),fl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function pp(i,t){const e=1-i;return e*e*t}function mp(i,t){return 2*(1-i)*i*t}function gp(i,t){return i*i*t}function rr(i,t,e,n){return pp(i,t)+mp(i,e)+gp(i,n)}function _p(i,t){const e=1-i;return e*e*e*t}function xp(i,t){const e=1-i;return 3*e*e*i*t}function vp(i,t){return 3*(1-i)*i*i*t}function Mp(i,t){return i*i*i*t}function ar(i,t,e,n,s){return _p(i,t)+xp(i,e)+vp(i,n)+Mp(i,s)}class T0 extends ii{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ar(t,s.x,o.x,r.x,a.x),ar(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Af extends ii{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ar(t,s.x,o.x,r.x,a.x),ar(t,s.y,o.y,r.y,a.y),ar(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A0 extends ii{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends ii{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R0 extends ii{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(rr(t,s.x,o.x,r.x),rr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends ii{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(rr(t,s.x,o.x,r.x),rr(t,s.y,o.y,r.y),rr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P0 extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(mh(a,l.x,c.x,h.x,f.x),mh(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var uc=Object.freeze({__proto__:null,ArcCurve:Tf,CatmullRomCurve3:Nc,CubicBezierCurve:T0,CubicBezierCurve3:Af,EllipseCurve:Uc,LineCurve:A0,LineCurve3:Rf,QuadraticBezierCurve:R0,QuadraticBezierCurve3:C0,SplineCurve:P0});class Cf extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new uc[s.type]().fromJSON(s))}return this}}class Fl extends Cf{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new A0(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new R0(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new T0(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new P0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Uc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fc extends Fl{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fl().fromJSON(s))}return this}}function Sp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Pf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Tp(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){const d=i[u],m=i[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return br(o,r,e,a,l,c,0),r}function Pf(i,t,e,n,s){let o;if(s===Op(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=gh(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=gh(r/n|0,i[r],i[r+1],o);return o&&mo(o,o.next)&&(Er(o),o=o.next),o}function Ss(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mo(e,e.next)||De(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Lp(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?bp(i,n,s,o):yp(i)){t.push(l.i,i.i,c.i),Er(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=wp(Ss(i),t),br(i,t,e,n,s,o,2)):r===2&&Ep(i,t,e,n,s,o):br(Ss(i),t,e,n,s,o,1);break}}}function yp(i){const t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,o,r),f=Math.min(a,l,c),u=Math.max(s,o,r),d=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ho(s,a,o,l,r,c,m.x,m.y)&&De(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bp(i,t,e,n){const s=i.prev,o=i,r=i.next;if(De(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,u=r.y,d=Math.min(a,l,c),m=Math.min(h,f,u),_=Math.max(a,l,c),g=Math.max(h,f,u),p=Ol(d,m,t,e,n),v=Ol(_,g,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&Ho(a,h,l,f,c,u,M.x,M.y)&&De(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==r&&Ho(a,h,l,f,c,u,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&Ho(a,h,l,f,c,u,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==r&&Ho(a,h,l,f,c,u,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!mo(n,s)&&Df(n,e,e.next,s)&&wr(n,s)&&wr(s,n)&&(t.push(n.i,e.i,s.i),Er(e),Er(e.next),e=i=s),e=e.next}while(e!==i);return Ss(e)}function Ep(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Up(r,a)){let l=If(r,a);r=Ss(r,r.next),l=Ss(l,l.next),br(r,t,e,n,s,o,0),br(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Tp(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Pf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ip(c))}s.sort(Ap);for(let o=0;o<s.length;o++)e=Rp(s[o],e);return e}function Ap(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Rp(i,t){const e=Cp(i,t);if(!e)return t;const n=If(e,i);return Ss(n,n.next),Ss(e,e.next)}function Cp(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(mo(i,e))return e;do{if(mo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Lf(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);wr(e,i)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&Pp(r,e)))&&(r=e,h=f)}e=e.next}while(e!==a);return r}function Pp(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Lp(i,t,e,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dp(s)}function Dp(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function Ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ip(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Lf(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Ho(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&Lf(i,t,e,n,s,o,r,a)}function Up(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Np(i,t)&&(wr(i,t)&&wr(t,i)&&Fp(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||mo(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mo(i,t){return i.x===t.x&&i.y===t.y}function Df(i,t,e,n){const s=na(De(i,t,e)),o=na(De(i,t,n)),r=na(De(e,n,i)),a=na(De(e,n,t));return!!(s!==o&&r!==a||s===0&&ea(i,e,t)||o===0&&ea(i,n,t)||r===0&&ea(e,i,n)||a===0&&ea(e,t,n))}function ea(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function na(i){return i>0?1:i<0?-1:0}function Np(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Fp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function If(i,t){const e=Bl(i.i,i.x,i.y),n=Bl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function gh(i,t,e,n){const s=Bl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Op(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Bp{static triangulate(t,e,n=2){return Sp(t,e,n)}}class Li{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Li.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];_h(t),xh(n,t);let r=t.length;e.forEach(_h);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,xh(n,e[l]);const a=Bp.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function _h(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Lr extends Ce{constructor(t=new Fc([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:zp;let M,x=!1,S,b,E,y;if(p){M=p.getSpacedPoints(h),x=!0,u=!1;const j=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,j),b=new O,E=new O,y=new O}u||(g=0,d=0,m=0,_=0);const w=a.extractPoints(c);let A=w.shape;const P=w.holes;if(!Li.isClockWise(A)){A=A.reverse();for(let j=0,G=P.length;j<G;j++){const K=P[j];Li.isClockWise(K)&&(P[j]=K.reverse())}}function C(j){const K=10000000000000001e-36;let rt=j[0];for(let ct=1;ct<=j.length;ct++){const St=ct%j.length,Lt=j[St],Ut=Lt.x-rt.x,zt=Lt.y-rt.y,F=Ut*Ut+zt*zt,te=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(rt.x),Math.abs(rt.y)),Jt=K*te*te;if(F<=Jt){j.splice(St,1),ct--;continue}rt=Lt}}C(A),P.forEach(C);const L=P.length,U=A;for(let j=0;j<L;j++){const G=P[j];A=A.concat(G)}function z(j,G,K){return G||le("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(G,K)}const k=A.length;function W(j,G,K){let rt,ct,St;const Lt=j.x-G.x,Ut=j.y-G.y,zt=K.x-j.x,F=K.y-j.y,te=Lt*Lt+Ut*Ut,Jt=Lt*F-Ut*zt;if(Math.abs(Jt)>Number.EPSILON){const I=Math.sqrt(te),T=Math.sqrt(zt*zt+F*F),$=G.x-Ut/I,tt=G.y+Lt/I,at=K.x-F/T,yt=K.y+zt/T,wt=((at-$)*F-(yt-tt)*zt)/(Lt*F-Ut*zt);rt=$+Lt*wt-j.x,ct=tt+Ut*wt-j.y;const lt=rt*rt+ct*ct;if(lt<=2)return new vt(rt,ct);St=Math.sqrt(lt/2)}else{let I=!1;Lt>Number.EPSILON?zt>Number.EPSILON&&(I=!0):Lt<-Number.EPSILON?zt<-Number.EPSILON&&(I=!0):Math.sign(Ut)===Math.sign(F)&&(I=!0),I?(rt=-Ut,ct=Lt,St=Math.sqrt(te)):(rt=Lt,ct=Ut,St=Math.sqrt(te/2))}return new vt(rt/St,ct/St)}const q=[];for(let j=0,G=U.length,K=G-1,rt=j+1;j<G;j++,K++,rt++)K===G&&(K=0),rt===G&&(rt=0),q[j]=W(U[j],U[K],U[rt]);const J=[];let Q,bt=q.concat();for(let j=0,G=L;j<G;j++){const K=P[j];Q=[];for(let rt=0,ct=K.length,St=ct-1,Lt=rt+1;rt<ct;rt++,St++,Lt++)St===ct&&(St=0),Lt===ct&&(Lt=0),Q[rt]=W(K[rt],K[St],K[Lt]);J.push(Q),bt=bt.concat(Q)}let Mt;if(g===0)Mt=Li.triangulateShape(U,P);else{const j=[],G=[];for(let K=0;K<g;K++){const rt=K/g,ct=d*Math.cos(rt*Math.PI/2),St=m*Math.sin(rt*Math.PI/2)+_;for(let Lt=0,Ut=U.length;Lt<Ut;Lt++){const zt=z(U[Lt],q[Lt],St);Y(zt.x,zt.y,-ct),rt===0&&j.push(zt)}for(let Lt=0,Ut=L;Lt<Ut;Lt++){const zt=P[Lt];Q=J[Lt];const F=[];for(let te=0,Jt=zt.length;te<Jt;te++){const I=z(zt[te],Q[te],St);Y(I.x,I.y,-ct),rt===0&&F.push(I)}rt===0&&G.push(F)}}Mt=Li.triangulateShape(j,G)}const Xt=Mt.length,_t=m+_;for(let j=0;j<k;j++){const G=u?z(A[j],bt[j],_t):A[j];x?(E.copy(S.normals[0]).multiplyScalar(G.x),b.copy(S.binormals[0]).multiplyScalar(G.y),y.copy(M[0]).add(E).add(b),Y(y.x,y.y,y.z)):Y(G.x,G.y,0)}for(let j=1;j<=h;j++)for(let G=0;G<k;G++){const K=u?z(A[G],bt[G],_t):A[G];x?(E.copy(S.normals[j]).multiplyScalar(K.x),b.copy(S.binormals[j]).multiplyScalar(K.y),y.copy(M[j]).add(E).add(b),Y(y.x,y.y,y.z)):Y(K.x,K.y,f/h*j)}for(let j=g-1;j>=0;j--){const G=j/g,K=d*Math.cos(G*Math.PI/2),rt=m*Math.sin(G*Math.PI/2)+_;for(let ct=0,St=U.length;ct<St;ct++){const Lt=z(U[ct],q[ct],rt);Y(Lt.x,Lt.y,f+K)}for(let ct=0,St=P.length;ct<St;ct++){const Lt=P[ct];Q=J[ct];for(let Ut=0,zt=Lt.length;Ut<zt;Ut++){const F=z(Lt[Ut],Q[Ut],rt);x?Y(F.x,F.y+M[h-1].y,M[h-1].x+K):Y(F.x,F.y,f+K)}}}mt(),H();function mt(){const j=s.length/3;if(u){let G=0,K=k*G;for(let rt=0;rt<Xt;rt++){const ct=Mt[rt];ut(ct[2]+K,ct[1]+K,ct[0]+K)}G=h+g*2,K=k*G;for(let rt=0;rt<Xt;rt++){const ct=Mt[rt];ut(ct[0]+K,ct[1]+K,ct[2]+K)}}else{for(let G=0;G<Xt;G++){const K=Mt[G];ut(K[2],K[1],K[0])}for(let G=0;G<Xt;G++){const K=Mt[G];ut(K[0]+k*h,K[1]+k*h,K[2]+k*h)}}n.addGroup(j,s.length/3-j,0)}function H(){const j=s.length/3;let G=0;N(U,G),G+=U.length;for(let K=0,rt=P.length;K<rt;K++){const ct=P[K];N(ct,G),G+=ct.length}n.addGroup(j,s.length/3-j,1)}function N(j,G){let K=j.length;for(;--K>=0;){const rt=K;let ct=K-1;ct<0&&(ct=j.length-1);for(let St=0,Lt=h+g*2;St<Lt;St++){const Ut=k*St,zt=k*(St+1),F=G+rt+Ut,te=G+ct+Ut,Jt=G+ct+zt,I=G+rt+zt;st(F,te,Jt,I)}}}function Y(j,G,K){l.push(j),l.push(G),l.push(K)}function ut(j,G,K){ht(j),ht(G),ht(K);const rt=s.length/3,ct=v.generateTopUV(n,s,rt-3,rt-2,rt-1);Et(ct[0]),Et(ct[1]),Et(ct[2])}function st(j,G,K,rt){ht(j),ht(G),ht(rt),ht(G),ht(K),ht(rt);const ct=s.length/3,St=v.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);Et(St[0]),Et(St[1]),Et(St[3]),Et(St[1]),Et(St[2]),Et(St[3])}function ht(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Et(j){o.push(j.x),o.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new uc[s.type]().fromJSON(s)),new Lr(n,t.options)}}const zp={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new vt(o,r),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new vt(r,1-l),new vt(c,1-f),new vt(u,1-m),new vt(_,1-p)]:[new vt(a,1-l),new vt(h,1-f),new vt(d,1-m),new vt(g,1-p)]}};function kp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ys extends Ic{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ys(t.radius,t.detail)}}class ni extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*u-r;for(let M=0;M<c;M++){const x=M*f-o;m.push(x,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const M=v+c*p,x=v+c*(p+1),S=v+1+c*(p+1),b=v+1+c*p;d.push(M,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}class yn extends Ce{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new O,u=new O,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],M=p/n,x=r+M*a,S=t*Math.cos(x),b=Math.sqrt(t*t-S*S);let E=0;p===0&&r===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let y=0;y<=e;y++){const w=y/e,A=s+w*o;f.x=-b*Math.cos(A),f.y=S,f.z=b*Math.sin(A),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(w+E,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const M=h[p][v+1],x=h[p][v],S=h[p+1][v],b=h[p+1][v+1];(p!==0||r>0)&&d.push(M,x,b),(p!==n-1||l<Math.PI)&&d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gi extends Ce{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new O,d=new O,m=new O;for(let _=0;_<=n;_++){const g=r+_/n*a;for(let p=0;p<=s;p++){const v=p/s*o;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const p=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,M=(s+1)*(_-1)+g,x=(s+1)*_+g;l.push(p,v,x),l.push(v,M,x)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Dr extends Ce{constructor(t=new C0(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new O,l=new O,c=new vt;let h=new O;const f=[],u=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function _(){for(let M=0;M<e;M++)g(M);g(o===!1?e:0),v(),p()}function g(M){h=t.getPointAt(M/e,h);const x=r.normals[M],S=r.binormals[M];for(let b=0;b<=s;b++){const E=b/s*Math.PI*2,y=Math.sin(E),w=-Math.cos(E);l.x=w*x.x+y*S.x,l.y=w*x.y+y*S.y,l.z=w*x.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const S=(s+1)*(M-1)+(x-1),b=(s+1)*M+(x-1),E=(s+1)*M+x,y=(s+1)*(M-1)+x;m.push(S,b,y),m.push(b,E,y)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Dr(new uc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function go(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(vh(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vh(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){const t={};for(let e=0;e<i.length;e++){const n=go(i[e]);for(const s in n)t[s]=n[s]}return t}function vh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Hp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Nf={clone:go,merge:dn};var Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ff extends Tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cr extends rs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ie extends rs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Of extends rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bf extends rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ya={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Mh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Mh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class zf{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kf=new zf;class Oc{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hs=new WeakMap;class Hf extends Oc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=ya.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let f=Hs.get(r);f===void 0&&(f=[],Hs.set(r,f)),f.push({onLoad:e,onError:s})}return r}const a=vr("img");function l(){h(),e&&e(this);const f=Hs.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Hs.delete(this),o.manager.itemEnd(t)}function c(f){h(),s&&s(f),ya.remove(`image:${t}`);const u=Hs.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onError&&m.onError(f)}Hs.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ya.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class Gf extends Oc{constructor(t){super(t)}load(t,e,n,s){const o=new $e,r=new Hf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Bc extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class L0 extends Bc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const dl=new Se,Sh=new O,yh=new O;class D0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(dl,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;t.coordinateSystem===fo||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ia=new O,sa=new Fi,ri=new O;class I0 extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ia,sa,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ia,sa,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new O,bh=new vt,wh=new vt;class Qe extends I0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,bh,wh),e.subVectors(wh,bh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Wp extends D0{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class Vf extends Bc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class zc extends I0{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xp extends D0{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U0 extends Bc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Xp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Gs=-90,Vs=1;class Wf extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Gs,Vs,t,e);s.layers=this.layers,this.add(s);const o=new Qe(Gs,Vs,t,e);o.layers=this.layers,this.add(o);const r=new Qe(Gs,Vs,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Gs,Vs,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Gs,Vs,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Gs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xf extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class zl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const W0=class W0{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};W0.prototype.isMatrix2=!0;let kl=W0;class qf extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Eh(i,t,e,n){const s=qp(n);switch(e){case f0:return i*t;case yc:return i*t/s.components*s.byteLength;case bc:return i*t/s.components*s.byteLength;case ss:return i*t*2/s.components*s.byteLength;case wc:return i*t*2/s.components*s.byteLength;case d0:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case Ec:return i*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Na:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case za:case ka:case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case pr:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oc:case rc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mr:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(i){switch(i){case wn:case c0:return{byteLength:1,components:1};case ho:case l0:case ei:return{byteLength:2,components:1};case Mc:case Sc:return{byteLength:2,components:4};case ti:case vc:case kn:return{byteLength:4,components:1};case h0:case u0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);function Yf(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Yp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
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
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a1=`#ifdef USE_IRIDESCENCE
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
#endif`,c1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_1=`#define PI 3.141592653589793
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
} // validated`,x1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v1=`vec3 transformedNormal = objectNormal;
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
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N1=`#ifdef USE_GRADIENTMAP
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
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k1=`#ifdef USE_ENVMAP
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
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
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
#endif`,q1=`uniform sampler2D dfgLUT;
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
}`,Y1=`
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s2=`#if defined( USE_POINTS_UV )
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
#endif`,o2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h2=`#ifdef USE_MORPHTARGETS
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
#endif`,u2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_2=`#ifdef USE_NORMALMAP
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
#endif`,x2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I2=`float getShadowMask() {
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
}`,U2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N2=`#ifdef USE_SKINNING
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
#endif`,F2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O2=`#ifdef USE_SKINNING
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
#endif`,B2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G2=`#ifdef USE_TRANSMISSION
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
#endif`,V2=`#ifdef USE_TRANSMISSION
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
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$2=`uniform sampler2D t2D;
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
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,nm=`#define DISTANCE
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
}`,im=`#define DISTANCE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,hm=`#define LAMBERT
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
}`,um=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,pm=`#define NORMAL
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
}`,mm=`#define NORMAL
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
}`,gm=`#define PHONG
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
}`,_m=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,vm=`#define STANDARD
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
}`,Mm=`#define TOON
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
}`,Sm=`#define TOON
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
}`,ym=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,Am=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Zp,alphahash_pars_fragment:$p,alphamap_fragment:Kp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:jp,aomap_fragment:t1,aomap_pars_fragment:e1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:s1,beginnormal_vertex:o1,bsdfs:r1,iridescence_fragment:a1,bumpmap_pars_fragment:c1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:f1,color_fragment:d1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:_1,cube_uv_reflection_fragment:x1,defaultnormal_vertex:v1,displacementmap_pars_vertex:M1,displacementmap_vertex:S1,emissivemap_fragment:y1,emissivemap_pars_fragment:b1,colorspace_fragment:w1,colorspace_pars_fragment:E1,envmap_fragment:T1,envmap_common_pars_fragment:A1,envmap_pars_fragment:R1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:k1,envmap_vertex:P1,fog_vertex:L1,fog_pars_vertex:D1,fog_fragment:I1,fog_pars_fragment:U1,gradientmap_pars_fragment:N1,lightmap_pars_fragment:F1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:B1,lights_pars_begin:z1,lights_toon_fragment:H1,lights_toon_pars_fragment:G1,lights_phong_fragment:V1,lights_phong_pars_fragment:W1,lights_physical_fragment:X1,lights_physical_pars_fragment:q1,lights_fragment_begin:Y1,lights_fragment_maps:Z1,lights_fragment_end:$1,lightprobes_pars_fragment:K1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:Q1,logdepthbuf_pars_vertex:j1,logdepthbuf_vertex:t2,map_fragment:e2,map_pars_fragment:n2,map_particle_fragment:i2,map_particle_pars_fragment:s2,metalnessmap_fragment:o2,metalnessmap_pars_fragment:r2,morphinstance_vertex:a2,morphcolor_vertex:c2,morphnormal_vertex:l2,morphtarget_pars_vertex:h2,morphtarget_vertex:u2,normal_fragment_begin:f2,normal_fragment_maps:d2,normal_pars_fragment:p2,normal_pars_vertex:m2,normal_vertex:g2,normalmap_pars_fragment:_2,clearcoat_normal_fragment_begin:x2,clearcoat_normal_fragment_maps:v2,clearcoat_pars_fragment:M2,iridescence_pars_fragment:S2,opaque_fragment:y2,packing:b2,premultiplied_alpha_fragment:w2,project_vertex:E2,dithering_fragment:T2,dithering_pars_fragment:A2,roughnessmap_fragment:R2,roughnessmap_pars_fragment:C2,shadowmap_pars_fragment:P2,shadowmap_pars_vertex:L2,shadowmap_vertex:D2,shadowmask_pars_fragment:I2,skinbase_vertex:U2,skinning_pars_vertex:N2,skinning_vertex:F2,skinnormal_vertex:O2,specularmap_fragment:B2,specularmap_pars_fragment:z2,tonemapping_fragment:k2,tonemapping_pars_fragment:H2,transmission_fragment:G2,transmission_pars_fragment:V2,uv_pars_fragment:W2,uv_pars_vertex:X2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:Z2,background_frag:$2,backgroundCube_vert:K2,backgroundCube_frag:J2,cube_vert:Q2,cube_frag:j2,depth_vert:tm,depth_frag:em,distance_vert:nm,distance_frag:im,equirect_vert:sm,equirect_frag:om,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:cm,meshbasic_frag:lm,meshlambert_vert:hm,meshlambert_frag:um,meshmatcap_vert:fm,meshmatcap_frag:dm,meshnormal_vert:pm,meshnormal_frag:mm,meshphong_vert:gm,meshphong_frag:_m,meshphysical_vert:xm,meshphysical_frag:vm,meshtoon_vert:Mm,meshtoon_frag:Sm,points_vert:ym,points_frag:bm,shadow_vert:wm,shadow_frag:Em,sprite_vert:Tm,sprite_frag:Am},Pt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},$n={basic:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:dn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:dn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:dn([Pt.points,Pt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:dn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:dn([Pt.common,Pt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:dn([Pt.sprite,Pt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:dn([Pt.common,Pt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:dn([Pt.lights,Pt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};$n.physical={uniforms:dn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const oa={r:0,b:0,g:0},Rm=new Se,Zf=new Qt;Zf.set(-1,0,0,0,1,0,0,0,1);function Cm(i,t,e,n,s,o){const r=new qt(0);let a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const x=v.backgroundBlurriness>0;M=t.get(M,x)}return M}function m(v){let M=!1;const x=d(v);x===null?g(r,a):x&&x.isColor&&(g(x,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,M){const x=d(M);x&&(x.isCubeTexture||x.mapping===Pr)?(c===void 0&&(c=new he(new Ae(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:go($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zf),c.material.toneMapped=ae.getTransfer(x.colorSpace)!==pe,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new he(new ni(2,2),new Tn({name:"BackgroundMaterial",uniforms:go($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(oa,Uf(i)),e.buffers.color.setClear(oa.r,oa.g,oa.b,M,o)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),a=M,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(r,a)},render:m,addToRenderList:_,dispose:p}}function Pm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(P,D,C,L,U){let z=!1;const k=f(P,L,C,D);o!==k&&(o=k,c(o.object)),z=d(P,L,C,U),z&&m(P,L,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,x(P,D,C,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,D,C,L){const U=L.wireframe===!0;let z=n[D.id];z===void 0&&(z={},n[D.id]=z);const k=P.isInstancedMesh===!0?P.id:0;let W=z[k];W===void 0&&(W={},z[k]=W);let q=W[C.id];q===void 0&&(q={},W[C.id]=q);let J=q[U];return J===void 0&&(J=u(l()),q[U]=J),J}function u(P){const D=[],C=[],L=[];for(let U=0;U<e;U++)D[U]=0,C[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:L,object:P,attributes:{},index:null}}function d(P,D,C,L){const U=o.attributes,z=D.attributes;let k=0;const W=C.getAttributes();for(const q in W)if(W[q].location>=0){const Q=U[q];let bt=z[q];if(bt===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(bt=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(bt=P.instanceColor)),Q===void 0||Q.attribute!==bt||bt&&Q.data!==bt.data)return!0;k++}return o.attributesNum!==k||o.index!==L}function m(P,D,C,L){const U={},z=D.attributes;let k=0;const W=C.getAttributes();for(const q in W)if(W[q].location>=0){let Q=z[q];Q===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));const bt={};bt.attribute=Q,Q&&Q.data&&(bt.data=Q.data),U[q]=bt,k++}o.attributes=U,o.attributesNum=k,o.index=L}function _(){const P=o.newAttributes;for(let D=0,C=P.length;D<C;D++)P[D]=0}function g(P){p(P,0)}function p(P,D){const C=o.newAttributes,L=o.enabledAttributes,U=o.attributeDivisors;C[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),U[P]!==D&&(i.vertexAttribDivisor(P,D),U[P]=D)}function v(){const P=o.newAttributes,D=o.enabledAttributes;for(let C=0,L=D.length;C<L;C++)D[C]!==P[C]&&(i.disableVertexAttribArray(C),D[C]=0)}function M(P,D,C,L,U,z,k){k===!0?i.vertexAttribIPointer(P,D,C,U,z):i.vertexAttribPointer(P,D,C,L,U,z)}function x(P,D,C,L){_();const U=L.attributes,z=C.getAttributes(),k=D.defaultAttributeValues;for(const W in z){const q=z[W];if(q.location>=0){let J=U[W];if(J===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const Q=J.normalized,bt=J.itemSize,Mt=t.get(J);if(Mt===void 0)continue;const Xt=Mt.buffer,_t=Mt.type,mt=Mt.bytesPerElement,H=_t===i.INT||_t===i.UNSIGNED_INT||J.gpuType===vc;if(J.isInterleavedBufferAttribute){const N=J.data,Y=N.stride,ut=J.offset;if(N.isInstancedInterleavedBuffer){for(let st=0;st<q.locationSize;st++)p(q.location+st,N.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let st=0;st<q.locationSize;st++)g(q.location+st);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let st=0;st<q.locationSize;st++)M(q.location+st,bt/q.locationSize,_t,Q,Y*mt,(ut+bt/q.locationSize*st)*mt,H)}else{if(J.isInstancedBufferAttribute){for(let N=0;N<q.locationSize;N++)p(q.location+N,J.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let N=0;N<q.locationSize;N++)g(q.location+N);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let N=0;N<q.locationSize;N++)M(q.location+N,bt/q.locationSize,_t,Q,bt*mt,bt/q.locationSize*N*mt,H)}}else if(k!==void 0){const Q=k[W];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(q.location,Q);break;case 3:i.vertexAttrib3fv(q.location,Q);break;case 4:i.vertexAttrib4fv(q.location,Q);break;default:i.vertexAttrib1fv(q.location,Q)}}}}v()}function S(){w();for(const P in n){const D=n[P];for(const C in D){const L=D[C];for(const U in L){const z=L[U];for(const k in z)h(z[k].object),delete z[k];delete L[U]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const C in D){const L=D[C];for(const U in L){const z=L[U];for(const k in z)h(z[k].object),delete z[k];delete L[U]}}delete n[P.id]}function E(P){for(const D in n){const C=n[D];for(const L in C){const U=C[L];if(U[P.id]===void 0)continue;const z=U[P.id];for(const k in z)h(z[k].object),delete z[k];delete U[P.id]}}}function y(P){for(const D in n){const C=n[D],L=P.isInstancedMesh===!0?P.id:0,U=C[L];if(U!==void 0){for(const z in U){const k=U[z];for(const W in k)h(k[W].object),delete k[W];delete U[z]}delete C[L],Object.keys(C).length===0&&delete n[D]}}}function w(){A(),r=!0,o!==s&&(o=s,c(o.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Lm(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function Dm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==Hn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const y=E===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wn&&E!==kn&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:b}}function Im(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new hi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||o&&!g)o?h(null):c();else{const v=o?0:n,M=v*4;let x=p.clippingState||null;l.value=x,x=h(m,u,M,d);for(let S=0;S!==M;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)r.copy(f[M]).applyMatrix4(v,a),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const Qs=4,Um=6,Nm=20,Fm=256,No=new zc,Th=new qt;let pl=null,ml=0,gl=0,_l=!1;const Om=new O,fs=new O;class Hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=Om}=o;pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pl,ml,gl),this._renderer.xr.enabled=_l,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:ei,format:Hn,colorSpace:_r,depthBuffer:!1},s=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bm(o)),this._blurMaterial=km(o,t,e),this._ggxMaterial=zm(o,t,e)}return s}_compileMaterial(t){const e=new he(new Ce,t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,s,o){const l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Th),f.toneMapping=jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new Ae,new Vn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(Th),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const S=this._cubeSize;Ws(s,x*S,M>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===is||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Qs?n-m+Qs:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Ws(o,g,p,3*_,2*_),s.setRenderTarget(o),s.render(a,No),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-n,Ws(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(a,No)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-Qs?s-this._lodMax+Qs:0),u=4*(this._cubeSize-h);Ws(e,f,u,3*h,2*h),r.setRenderTarget(e),r.render(l,No)}}function Bm(i){const t=[],e=[];let n=i;const s=i-Qs+1+Um;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){const v=p%3*2/3-1,M=p>2?0:-1,x=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];m.set(x,d*u*p);for(let S=0;S<u;S++){const b=h[S*2]*2-1,E=h[S*2+1]*2-1;p===0?fs.set(1,E,b):p===1?fs.set(-b,1,-E):p===2?fs.set(-b,E,1):p===3?fs.set(-1,E,-b):p===4?fs.set(-b,-1,E):fs.set(b,E,-1),fs.toArray(_,(p*u+S)*d)}}const g=new Ce;g.setAttribute("position",new In(m,d)),g.setAttribute("outputDirection",new In(_,d)),e.push(new he(g,null)),n>Qs&&n--}return{lodMeshes:e,sizeLods:t}}function Ah(i,t,e){const n=new Gn(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zm(i,t,e){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function km(i,t,e){return new Tn({name:"SphericalGaussianBlur",defines:{SAMPLES:Nm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Rh(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ch(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class N0 extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new b0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),o=new Tn({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:pi});o.uniforms.tEquirect.value=e;const r=new he(s,o),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=je),new Wf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function Hm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?r(u):o(u)}function o(u){if(u&&u.isTexture){const d=u.mapping;if(d===jo||d===xa)if(t.has(u)){const m=t.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new N0(m.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,m=d===jo||d===xa,_=d===is||d===Ms;if(m||_){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Hl(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Hl(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===jo?u.mapping=is:d===xa&&(u.mapping=Ms),u}function l(u){let d=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Gm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&_s("WebGLRenderer: "+n+" extension not supported."),s}}}function Vm(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let M=0,x=v.length;M<x;M+=3){const S=v[M+0],b=v[M+1],E=v[M+2];u.push(S,b,b,E,E,S)}}else{const v=m.array;_=m.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const S=M+0,b=M+1,E=M+2;u.push(S,b,b,E,E,S)}}const g=new(m.count>=65535?M0:v0)(u,1);g.version=_;const p=o.get(f);p&&t.remove(p),o.set(f,g)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Wm(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,u){i.drawElements(n,u,o,f*r),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,o,f*r,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:le("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,t,e){const n=new WeakMap,s=new Pe;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*S*4*f),E=new g0(b,x,S,f);E.type=kn,E.needsUpdate=!0;const y=M*4;for(let A=0;A<f;A++){const P=g[A],D=p[A],C=v[A],L=x*S*4*A;for(let U=0;U<P.count;U++){const z=U*y;d===!0&&(s.fromBufferAttribute(P,U),b[L+z+0]=s.x,b[L+z+1]=s.y,b[L+z+2]=s.z,b[L+z+3]=0),m===!0&&(s.fromBufferAttribute(D,U),b[L+z+4]=s.x,b[L+z+5]=s.y,b[L+z+6]=s.z,b[L+z+7]=0),_===!0&&(s.fromBufferAttribute(C,U),b[L+z+8]=s.x,b[L+z+9]=s.y,b[L+z+10]=s.z,b[L+z+11]=C.itemSize===4?s.w:1)}}u={count:f,texture:E,size:new vt(x,S)},n.set(a,u),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Ym(i,t,e,n,s){let o=new WeakMap;function r(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(o.get(u)!==h&&(t.update(u),o.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return u}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const Zm={[t0]:"LINEAR_TONE_MAPPING",[e0]:"REINHARD_TONE_MAPPING",[n0]:"CINEON_TONE_MAPPING",[i0]:"ACES_FILMIC_TONE_MAPPING",[o0]:"AGX_TONE_MAPPING",[r0]:"NEUTRAL_TONE_MAPPING",[s0]:"CUSTOM_TONE_MAPPING"};function $m(i,t,e,n,s,o){const r=new Gn(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ce;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));const h=new Ff({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new he(c,h),u=new zc(-1,1,1,-1,0,1);let d=null,m=null,_=!1,g,p=null,v=[],M=!1;this.setSize=function(x,S){r.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<v.length;b++){const E=v[b];E.setSize&&E.setSize(x,S)}},this.setEffects=function(x){v=x,M=v.length>0&&v[0].isRenderPass===!0;const S=r.width,b=r.height;v.length>0&&a===null&&(a=new Gn(S,b,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(S,b,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<v.length;E++){const y=v[E];y.setSize&&y.setSize(S,b)}},this.begin=function(x,S){if(_||x.toneMapping===jn&&v.length===0)return!1;if(p=S,S!==null){const b=S.width,E=S.height;(r.width!==b||r.height!==E)&&this.setSize(b,E)}return M===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=jn,!0},this.hasRenderPass=function(){return M},this.end=function(x,S){x.toneMapping=g,_=!0;let b=r,E=a;for(let y=0;y<v.length;y++){const w=v[y];w.enabled!==!1&&(w.render(x,E,b,S),w.needsSwap!==!1&&(b=E,E=E===a?l:a))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,h.defines={},ae.getTransfer(d)===pe&&(h.defines.SRGB_TRANSFER="");const y=Zm[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const $f=new $e,Gl=new po(1,1),Kf=new g0,Jf=new Mf,Qf=new b0,Ph=[],Lh=[],Dh=new Float32Array(16),Ih=new Float32Array(9),Uh=new Float32Array(4);function Mo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Ph[s];if(o===void 0&&(o=new Float32Array(s),Ph[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hc(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Uh.set(n),i.uniformMatrix2fv(this.addr,!1,Uh),Xe(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Ih.set(n),i.uniformMatrix3fv(this.addr,!1,Ih),Xe(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),Xe(e,n)}}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Gl.compareFunction=e.isReversedDepthBuffer()?Ac:Tc,o=Gl):o=$f,e.setTexture2D(t||o,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jf,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qf,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kf,s)}function mg(i){switch(i){case 5126:return Km;case 35664:return Jm;case 35665:return Qm;case 35666:return jm;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return og;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return cg;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,t){i.uniform1fv(this.addr,t)}function _g(i,t){const e=Mo(t,this.size,2);i.uniform2fv(this.addr,e)}function xg(i,t){const e=Mo(t,this.size,3);i.uniform3fv(this.addr,e)}function vg(i,t){const e=Mo(t,this.size,4);i.uniform4fv(this.addr,e)}function Mg(i,t){const e=Mo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sg(i,t){const e=Mo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yg(i,t){const e=Mo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bg(i,t){i.uniform1iv(this.addr,t)}function wg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function Tg(i,t){i.uniform4iv(this.addr,t)}function Ag(i,t){i.uniform1uiv(this.addr,t)}function Rg(i,t){i.uniform2uiv(this.addr,t)}function Cg(i,t){i.uniform3uiv(this.addr,t)}function Pg(i,t){i.uniform4uiv(this.addr,t)}function Lg(i,t,e){const n=this.cache,s=t.length,o=Hc(e,s);We(n,o)||(i.uniform1iv(this.addr,o),Xe(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=Gl:r=$f;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function Dg(i,t,e){const n=this.cache,s=t.length,o=Hc(e,s);We(n,o)||(i.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Jf,o[r])}function Ig(i,t,e){const n=this.cache,s=t.length,o=Hc(e,s);We(n,o)||(i.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Qf,o[r])}function Ug(i,t,e){const n=this.cache,s=t.length,o=Hc(e,s);We(n,o)||(i.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Kf,o[r])}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return xg;case 35666:return vg;case 35674:return Mg;case 35675:return Sg;case 35676:return yg;case 5124:case 35670:return bg;case 35667:case 35671:return wg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ug}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mg(e.type)}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ng(e.type)}}class Bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Nh(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){const n=i.name,s=n.length;for(xl.lastIndex=0;;){const o=xl.exec(n),r=xl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Nh(e,c===void 0?new Fg(a,i,t):new Og(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Bg(a),Nh(e,f)),e=f}}}class ba{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);zg(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Fh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kg=37297;let Hg=0;function Gg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Oh=new Qt;function Vg(i){ae._getMatrix(Oh,ae.workingColorSpace,i);const t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case xr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Gg(i.getShaderSource(t),a)}else return o}function Wg(i,t){const e=Vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Xg={[t0]:"Linear",[e0]:"Reinhard",[n0]:"Cineon",[i0]:"ACESFilmic",[o0]:"AgX",[r0]:"Neutral",[s0]:"Custom"};function qg(i,t){const e=Xg[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ra=new O;function Yg(){ae.getLuminanceCoefficients(ra);const i=ra.x.toFixed(4),t=ra.y.toFixed(4),e=ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function $g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Go(i){return i!==""}function zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(Jg,jg)}const Qg=new Map;function jg(i,t){let e=jt[t];if(e===void 0){const n=Qg.get(t);if(n!==void 0)e=jt[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vl(e)}const t3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(i){return i.replace(t3,e3)}function e3(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Gh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const n3={[Qo]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function i3(i){return n3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s3={[is]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function o3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":s3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const r3={[Ms]:"ENVMAP_MODE_REFRACTION"};function a3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":r3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c3={[Cr]:"ENVMAP_BLENDING_MULTIPLY",[sf]:"ENVMAP_BLENDING_MIX",[of]:"ENVMAP_BLENDING_ADD"};function l3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":c3[i.combine]||"ENVMAP_BLENDING_NONE"}function h3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function u3(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=i3(e),c=o3(e),h=a3(e),f=l3(e),u=h3(e),d=Zg(e),m=$g(o),_=s.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Go).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Go).join(`
`),p.length>0&&(p+=`
`)):(g=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),p=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?jt.tonemapping_pars_fragment:"",e.toneMapping!==jn?qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Go).join(`
`)),r=Vl(r),r=zh(r,e),r=kh(r,e),a=Vl(a),a=zh(a,e),a=kh(a,e),r=Hh(r),a=Hh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+g+r,x=v+p+a,S=Fh(s,s.VERTEX_SHADER,M),b=Fh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",C=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(b)||"",U=D.trim(),z=C.trim(),k=L.trim();let W=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,b);else{const J=Bh(s,S,"vertex"),Q=Bh(s,b,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+J+`
`+Q)}else U!==""?Zt("WebGLProgram: Program Info Log:",U):(z===""||k==="")&&(q=!1);q&&(P.diagnostics={runnable:W,programLog:U,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(S),s.deleteShader(b),y=new ba(s,_),w=Kg(s,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,kg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let f3=0;class d3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new p3(t),e.set(t,n)),n}}class p3{constructor(t){this.id=f3++,this.code=t,this.usedTimes=0}}function m3(i){return i===ss||i===pr||i===mr}function g3(i,t,e,n,s,o){const r=new _0,a=new d3,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,A,P,D,C){const L=P.fog,U=D.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,W=t.get(y.envMap||z,k),q=W&&W.mapping===Pr?W.image.height:null,J=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Zt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,bt=Q!==void 0?Q.length:0;let Mt=0;U.morphAttributes.position!==void 0&&(Mt=1),U.morphAttributes.normal!==void 0&&(Mt=2),U.morphAttributes.color!==void 0&&(Mt=3);let Xt,_t,mt,H;if(J){const Ot=$n[J];Xt=Ot.vertexShader,_t=Ot.fragmentShader}else{Xt=y.vertexShader,_t=y.fragmentShader;const Ot=a.getVertexShaderStage(y),Nt=a.getFragmentShaderStage(y);a.update(y,Ot,Nt),mt=Ot.id,H=Nt.id}const N=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),ut=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,ht=!!y.map,Et=!!y.matcap,j=!!W,G=!!y.aoMap,K=!!y.lightMap,rt=!!y.bumpMap&&y.wireframe===!1,ct=!!y.normalMap,St=!!y.displacementMap,Lt=!!y.emissiveMap,Ut=!!y.metalnessMap,zt=!!y.roughnessMap,F=y.anisotropy>0,te=y.clearcoat>0,Jt=y.dispersion>0,I=y.retroreflectivity>0,T=y.iridescence>0,$=y.sheen>0,tt=y.transmission>0,at=F&&!!y.anisotropyMap,yt=te&&!!y.clearcoatMap,wt=te&&!!y.clearcoatNormalMap,lt=te&&!!y.clearcoatRoughnessMap,pt=T&&!!y.iridescenceMap,Tt=T&&!!y.iridescenceThicknessMap,Gt=$&&!!y.sheenColorMap,Ct=$&&!!y.sheenRoughnessMap,At=!!y.specularMap,Vt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,$t=tt&&!!y.transmissionMap,X=tt&&!!y.thicknessMap,Rt=!!y.gradientMap,dt=!!y.alphaMap,B=y.alphaTest>0,et=!!y.alphaHash,Z=!!y.extensions;let gt=jn;y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(gt=i.toneMapping);const ft={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Xt,fragmentShader:_t,defines:y.defines,customVertexShaderID:mt,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:st,batchingColor:st&&D._colorsTexture!==null,instancing:ut,instancingColor:ut&&D.instanceColor!==null,instancingMorph:ut&&D.morphTexture!==null,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:Et,envMap:j,envMapMode:j&&W.mapping,envMapCubeUVHeight:q,aoMap:G,lightMap:K,bumpMap:rt,normalMap:ct,displacementMap:St,emissiveMap:Lt,normalMapObjectSpace:ct&&y.normalMapType===cf,normalMapTangentSpace:ct&&y.normalMapType===gr,packedNormalMap:ct&&y.normalMapType===gr&&m3(y.normalMap.format),metalnessMap:Ut,roughnessMap:zt,anisotropy:F,anisotropyMap:at,clearcoat:te,clearcoatMap:yt,clearcoatNormalMap:wt,clearcoatRoughnessMap:lt,dispersion:Jt,retroreflection:I,iridescence:T,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:$,sheenColorMap:Gt,sheenRoughnessMap:Ct,specularMap:At,specularColorMap:Vt,specularIntensityMap:Yt,transmission:tt,transmissionMap:$t,thicknessMap:X,gradientMap:Rt,opaque:y.transparent===!1&&y.blending===js&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:B,alphaHash:et,combine:y.combine,mapUv:ht&&m(y.map.channel),aoMapUv:G&&m(y.aoMap.channel),lightMapUv:K&&m(y.lightMap.channel),bumpMapUv:rt&&m(y.bumpMap.channel),normalMapUv:ct&&m(y.normalMap.channel),displacementMapUv:St&&m(y.displacementMap.channel),emissiveMapUv:Lt&&m(y.emissiveMap.channel),metalnessMapUv:Ut&&m(y.metalnessMap.channel),roughnessMapUv:zt&&m(y.roughnessMap.channel),anisotropyMapUv:at&&m(y.anisotropyMap.channel),clearcoatMapUv:yt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:wt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&m(y.sheenRoughnessMap.channel),specularMapUv:At&&m(y.specularMap.channel),specularColorMapUv:Vt&&m(y.specularColorMap.channel),specularIntensityMapUv:Yt&&m(y.specularIntensityMap.channel),transmissionMapUv:$t&&m(y.transmissionMap.channel),thicknessMapUv:X&&m(y.thicknessMap.channel),alphaMapUv:dt&&m(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ct||F),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(ht||dt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Y,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Mt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:Lt&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Z&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&y.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function g(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(p(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function M(y){const w=d[y.type];let A;if(w){const P=$n[w];A=Nf.clone(P.uniforms)}else A=y.uniforms;return A}function x(y,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new u3(i,w,y,s),c.push(A),h.set(w,A)),A}function S(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function _3(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function x3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Vh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,_,g,p){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=p),t++,v}function l(u,d,m,_,g,p,v){v.reversedDepth===!0&&(g=-g);const M=a(u,d,m,_,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(u,d,m,_,g,p){const v=a(u,d,m,_,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||x3),n.length>1&&n.sort(d||Vh),s.length>1&&s.sort(d||Vh)}function f(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:h}}function v3(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Wh,i.set(n,[r])):s>=o.length?(r=new Wh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function M3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function S3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let y3=0;function b3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w3(i){const t=new M3,e=S3(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,o=new Se,r=new Se;function a(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,v=0,M=0,x=0,S=0,b=0,E=0,y=0,w=0,A=0;c.sort(b3);for(let D=0,C=c.length;D<C;D++){const L=c[D],U=L.color,z=L.intensity,k=L.distance;let W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ss?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=U.r*z,f+=U.g*z,u+=U.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],z);A++}else if(L.isSunLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,Q=e.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=W;const bt=J.getViewportCount();for(let Mt=0;Mt<bt;Mt++)n.sunShadowMatrix[_+Mt]=J.getMatrix(Mt),n.sunShadowCascade[_+Mt]=J._cascadeData[Mt];_+=bt,m++}n.sun[d]=q,d++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,Q=e.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=L.shadow.matrix,S++}n.directional[g]=q,g++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(U).multiplyScalar(z),q.distance=k,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[v]=q;const J=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,J.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[v]=J.matrix,L.castShadow){const Q=e.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=W,E++}v++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(U).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=q,M++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const J=L.shadow,Q=e.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=q,p++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[x]=q,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==M||P.hemiLength!==x||P.numSunShadows!==m||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==E||P.numSpotMaps!==y||P.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=M,n.point.length=p,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.sunLength=d,P.directionalLength=g,P.pointLength=p,P.spotLength=v,P.rectAreaLength=M,P.hemiLength=x,P.numSunShadows=m,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=E,P.numSpotMaps=y,P.numLightProbes=A,n.version=y3++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const x=c[v];if(x.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),f++}else if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(x.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),r.identity(),o.copy(x.matrixWorld),o.premultiply(p),r.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Xh(i){const t=new w3(i),e=[],n=[],s=[];function o(u){f.camera=u,e.length=0,n.length=0,s.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function E3(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Xh(i),t.set(s,[a])):o>=r.length?(a=new Xh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const T3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A3=`uniform sampler2D shadow_pass;
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
}`,R3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],C3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],qh=new Se,Fo=new O,vl=new O;function P3(i,t,e){let n=new Lc;const s=new vt,o=new vt,r=new Pe,a=new Of,l=new Bf,c={},h=e.maxTextureSize,f={[Qn]:ln,[ln]:Qn,[an]:an},u=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:T3,fragmentShader:A3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ce;m.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new he(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let p=this.type;this.render=function(b,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Bu&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qo);const w=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(pi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const C=p!==this.type;C&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=b.length;L<U;L++){const z=b[L],k=z.shadow;if(k===void 0){Zt("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const W=k.getFrameExtents();s.multiply(W),o.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/W.x),s.x=o.x*W.x,k.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/W.y),s.y=o.y*W.y,k.mapSize.y=o.y));const q=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||C===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Js){if(z.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Gn(s.x,s.y,{format:ss,type:ei,minFilter:je,magFilter:je,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new po(s.x,s.y,kn),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=xi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ze,k.map.depthTexture.magFilter=Ze}else z.isPointLight?(k.map=new N0(s.x),k.map.depthTexture=new Ef(s.x,ti)):(k.map=new Gn(s.x,s.y),k.map.depthTexture=new po(s.x,s.y,ti)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=xi,this.type===Qo?(k.map.depthTexture.compareFunction=q?Ac:Tc,k.map.depthTexture.minFilter=je,k.map.depthTexture.magFilter=je):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ze,k.map.depthTexture.magFilter=Ze);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const J=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();z.isPointLight!==!0&&k.updateMatrices(z,y);for(let Q=0;Q<J;Q++){const bt=k.getCamera(Q);if(z.isPointLight){const Mt=k.camera,Xt=k.matrix,_t=z.distance||Mt.far;_t!==Mt.far&&(Mt.far=_t,Mt.updateProjectionMatrix()),Fo.setFromMatrixPosition(z.matrixWorld),Mt.position.copy(Fo),vl.copy(Mt.position),vl.add(R3[Q]),Mt.up.copy(C3[Q]),Mt.lookAt(vl),Mt.updateMatrixWorld(),Xt.makeTranslation(-Fo.x,-Fo.y,-Fo.z),qh.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(qh,Mt.coordinateSystem,Mt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(k.map),i.clear());const Mt=k.getViewport(Q);r.set(o.x*Mt.x,o.y*Mt.y,o.x*Mt.z,o.y*Mt.w),D.viewport(r)}n=k.getFrustum(Q),x(E,y,bt,z,this.type)}k.isPointLightShadow!==!0&&this.type===Js&&v(k,y),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,A,P)};function v(b,E){const y=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Gn(s.x,s.y,{format:ss,type:ei}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,y,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,y,d,_,null)}function M(b,E,y,w){let A=null;const P=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)A=P;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const D=A.uuid,C=E.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let U=L[C];U===void 0&&(U=A.clone(),L[C]=U,E.addEventListener("dispose",S)),A=U}if(A.visible=E.visible,A.wireframe=E.wireframe,w===Js?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:f[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=i.properties.get(A);D.light=y}return A}function x(b,E,y,w,A){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===Js)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const C=t.update(b),L=b.material;if(Array.isArray(L)){const U=C.groups;for(let z=0,k=U.length;z<k;z++){const W=U[z],q=L[W.materialIndex];if(q&&q.visible){const J=M(b,q,w,A);b.onBeforeShadow(i,b,E,y,C,J,W),i.renderBufferDirect(y,null,C,J,b,W),b.onAfterShadow(i,b,E,y,C,J,W)}}}else if(L.visible){const U=M(b,L,w,A);b.onBeforeShadow(i,b,E,y,C,U,null),i.renderBufferDirect(y,null,C,U,b,null),b.onAfterShadow(i,b,E,y,C,U,null)}}const D=b.children;for(let C=0,L=D.length;C<L;C++)x(D[C],E,y,w,A)}function S(b){b.target.removeEventListener("dispose",S);for(const y in c){const w=c[y],A=b.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function L3(i,t){function e(){let X=!1;const Rt=new Pe;let dt=null;const B=new Pe(0,0,0,0);return{setMask:function(et){dt!==et&&!X&&(i.colorMask(et,et,et,et),dt=et)},setLocked:function(et){X=et},setClear:function(et,Z,gt,ft,Ot){Ot===!0&&(et*=ft,Z*=ft,gt*=ft),Rt.set(et,Z,gt,ft),B.equals(Rt)===!1&&(i.clearColor(et,Z,gt,ft),B.copy(Rt))},reset:function(){X=!1,dt=null,B.set(-1,0,0,0)}}}function n(){let X=!1,Rt=!1,dt=null,B=null,et=null;return{setReversed:function(Z){if(Rt!==Z){const gt=t.get("EXT_clip_control");Z?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Z;const ft=et;et=null,this.setClear(ft)}},getReversed:function(){return Rt},setTest:function(Z){Z?N(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(Z){dt!==Z&&!X&&(i.depthMask(Z),dt=Z)},setFunc:function(Z){if(Rt&&(Z=Dd[Z]),B!==Z){switch(Z){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case co:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=Z}},setLocked:function(Z){X=Z},setClear:function(Z){et!==Z&&(et=Z,Rt&&(Z=1-Z),i.clearDepth(Z))},reset:function(){X=!1,dt=null,B=null,et=null,Rt=!1}}}function s(){let X=!1,Rt=null,dt=null,B=null,et=null,Z=null,gt=null,ft=null,Ot=null;return{setTest:function(Nt){X||(Nt?N(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(Nt){Rt!==Nt&&!X&&(i.stencilMask(Nt),Rt=Nt)},setFunc:function(Nt,Kt,oe){(dt!==Nt||B!==Kt||et!==oe)&&(i.stencilFunc(Nt,Kt,oe),dt=Nt,B=Kt,et=oe)},setOp:function(Nt,Kt,oe){(Z!==Nt||gt!==Kt||ft!==oe)&&(i.stencilOp(Nt,Kt,oe),Z=Nt,gt=Kt,ft=oe)},setLocked:function(Nt){X=Nt},setClear:function(Nt){Ot!==Nt&&(i.clearStencil(Nt),Ot=Nt)},reset:function(){X=!1,Rt=null,dt=null,B=null,et=null,Z=null,gt=null,ft=null,Ot=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,v=null,M=null,x=null,S=null,b=null,E=null,y=new qt(0,0,0),w=0,A=!1,P=null,D=null,C=null,L=null,U=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=W>=2);let J=null,Q={};const bt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Xt=new Pe().fromArray(bt),_t=new Pe().fromArray(Mt);function mt(X,Rt,dt,B){const et=new Uint8Array(4),Z=i.createTexture();i.bindTexture(X,Z),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<dt;gt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,B,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(Rt+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Z}const H={};H[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),N(i.DEPTH_TEST),r.setFunc(co),rt(!1),ct(Ll),N(i.CULL_FACE),G(pi);function N(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function Y(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function ut(X,Rt){return u[X]!==Rt?(i.bindFramebuffer(X,Rt),u[X]=Rt,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Rt),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function st(X,Rt){let dt=m,B=!1;if(X){dt=d.get(Rt),dt===void 0&&(dt=[],d.set(Rt,dt));const et=X.textures;if(dt.length!==et.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,gt=et.length;Z<gt;Z++)dt[Z]=i.COLOR_ATTACHMENT0+Z;dt.length=et.length,B=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,B=!0);B&&i.drawBuffers(dt)}function ht(X){return _!==X?(i.useProgram(X),_=X,!0):!1}const Et={[ms]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};Et[Gu]=i.MIN,Et[Vu]=i.MAX;const j={[Wu]:i.ZERO,[Xu]:i.ONE,[qu]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[Qu]:i.SRC_ALPHA_SATURATE,[Ku]:i.DST_COLOR,[Zu]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[jl]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[tf]:i.ONE_MINUS_CONSTANT_COLOR,[ef]:i.CONSTANT_ALPHA,[nf]:i.ONE_MINUS_CONSTANT_ALPHA};function G(X,Rt,dt,B,et,Z,gt,ft,Ot,Nt){if(X===pi){g===!0&&(Y(i.BLEND),g=!1);return}if(g===!1&&(N(i.BLEND),g=!0),X!==zu){if(X!==p||Nt!==A){if((v!==ms||S!==ms)&&(i.blendEquation(i.FUNC_ADD),v=ms,S=ms),Nt)switch(X){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ao:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",X);break}else switch(X){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dl:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",X);break}M=null,x=null,b=null,E=null,y.set(0,0,0),w=0,p=X,A=Nt}return}et=et||Rt,Z=Z||dt,gt=gt||B,(Rt!==v||et!==S)&&(i.blendEquationSeparate(Et[Rt],Et[et]),v=Rt,S=et),(dt!==M||B!==x||Z!==b||gt!==E)&&(i.blendFuncSeparate(j[dt],j[B],j[Z],j[gt]),M=dt,x=B,b=Z,E=gt),(ft.equals(y)===!1||Ot!==w)&&(i.blendColor(ft.r,ft.g,ft.b,Ot),y.copy(ft),w=Ot),p=X,A=!1}function K(X,Rt){X.side===an?Y(i.CULL_FACE):N(i.CULL_FACE);let dt=X.side===ln;Rt&&(dt=!dt),rt(dt),X.blending===js&&X.transparent===!1?G(pi):G(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),o.setMask(X.colorWrite);const B=X.stencilWrite;a.setTest(B),B&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){P!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),P=X)}function ct(X){X!==Fu?(N(i.CULL_FACE),X!==D&&(X===Ll?i.cullFace(i.BACK):X===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),D=X}function St(X){X!==C&&(k&&i.lineWidth(X),C=X)}function Lt(X,Rt,dt){X?(N(i.POLYGON_OFFSET_FILL),(L!==Rt||U!==dt)&&(L=Rt,U=dt,r.getReversed()&&(Rt=-Rt),i.polygonOffset(Rt,dt))):Y(i.POLYGON_OFFSET_FILL)}function Ut(X){X?N(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function zt(X){X===void 0&&(X=i.TEXTURE0+z-1),J!==X&&(i.activeTexture(X),J=X)}function F(X,Rt,dt){dt===void 0&&(J===null?dt=i.TEXTURE0+z-1:dt=J);let B=Q[dt];B===void 0&&(B={type:void 0,texture:void 0},Q[dt]=B),(B.type!==X||B.texture!==Rt)&&(J!==dt&&(i.activeTexture(dt),J=dt),i.bindTexture(X,Rt||H[X]),B.type=X,B.texture=Rt)}function te(){const X=Q[J];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(X){le("WebGLState:",X)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(X){le("WebGLState:",X)}}function T(){try{i.texSubImage2D(...arguments)}catch(X){le("WebGLState:",X)}}function $(){try{i.texSubImage3D(...arguments)}catch(X){le("WebGLState:",X)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){le("WebGLState:",X)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(X){le("WebGLState:",X)}}function yt(){try{i.texStorage2D(...arguments)}catch(X){le("WebGLState:",X)}}function wt(){try{i.texStorage3D(...arguments)}catch(X){le("WebGLState:",X)}}function lt(){try{i.texImage2D(...arguments)}catch(X){le("WebGLState:",X)}}function pt(){try{i.texImage3D(...arguments)}catch(X){le("WebGLState:",X)}}function Tt(X){return f[X]!==void 0?f[X]:i.getParameter(X)}function Gt(X,Rt){f[X]!==Rt&&(i.pixelStorei(X,Rt),f[X]=Rt)}function Ct(X){Xt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Xt.copy(X))}function At(X){_t.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),_t.copy(X))}function Vt(X,Rt){let dt=c.get(Rt);dt===void 0&&(dt=new WeakMap,c.set(Rt,dt));let B=dt.get(X);B===void 0&&(B=i.getUniformBlockIndex(Rt,X.name),dt.set(X,B))}function Yt(X,Rt){const B=c.get(Rt).get(X);l.get(Rt)!==B&&(i.uniformBlockBinding(Rt,B,X.__bindingPointIndex),l.set(Rt,B))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,Q={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,v=null,M=null,x=null,S=null,b=null,E=null,y=new qt(0,0,0),w=0,A=!1,P=null,D=null,C=null,L=null,U=null,Xt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:N,disable:Y,bindFramebuffer:ut,drawBuffers:st,useProgram:ht,setBlending:G,setMaterial:K,setFlipSided:rt,setCullFace:ct,setLineWidth:St,setPolygonOffset:Lt,setScissorTest:Ut,activeTexture:zt,bindTexture:F,unbindTexture:te,compressedTexImage2D:Jt,compressedTexImage3D:I,texImage2D:lt,texImage3D:pt,pixelStorei:Gt,getParameter:Tt,updateUBOMapping:Vt,uniformBlockBinding:Yt,texStorage2D:yt,texStorage3D:wt,texSubImage2D:T,texSubImage3D:$,compressedTexSubImage2D:tt,compressedTexSubImage3D:at,scissor:Ct,viewport:At,reset:$t}}function D3(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,T){return m?new OffscreenCanvas(I,T):vr("canvas")}function g(I,T,$){let tt=1;const at=Jt(I);if((at.width>$||at.height>$)&&(tt=$/Math.max(at.width,at.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const yt=Math.floor(tt*at.width),wt=Math.floor(tt*at.height);u===void 0&&(u=_(yt,wt));const lt=T?_(yt,wt):u;return lt.width=yt,lt.height=wt,lt.getContext("2d").drawImage(I,0,0,yt,wt),Zt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+yt+"x"+wt+")."),lt}else return"data"in I&&Zt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function p(I){return I.generateMipmaps}function v(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,T,$,tt,at,yt=!1){if(I!==null){if(i[I]!==void 0)return i[I];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let wt;tt&&(wt=t.get("EXT_texture_norm16"),wt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=T;if(T===i.RED&&($===i.FLOAT&&(lt=i.R32F),$===i.HALF_FLOAT&&(lt=i.R16F),$===i.UNSIGNED_BYTE&&(lt=i.R8),$===i.UNSIGNED_SHORT&&wt&&(lt=wt.R16_EXT),$===i.SHORT&&wt&&(lt=wt.R16_SNORM_EXT)),T===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.R8UI),$===i.UNSIGNED_SHORT&&(lt=i.R16UI),$===i.UNSIGNED_INT&&(lt=i.R32UI),$===i.BYTE&&(lt=i.R8I),$===i.SHORT&&(lt=i.R16I),$===i.INT&&(lt=i.R32I)),T===i.RG&&($===i.FLOAT&&(lt=i.RG32F),$===i.HALF_FLOAT&&(lt=i.RG16F),$===i.UNSIGNED_BYTE&&(lt=i.RG8),$===i.UNSIGNED_SHORT&&wt&&(lt=wt.RG16_EXT),$===i.SHORT&&wt&&(lt=wt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RG8UI),$===i.UNSIGNED_SHORT&&(lt=i.RG16UI),$===i.UNSIGNED_INT&&(lt=i.RG32UI),$===i.BYTE&&(lt=i.RG8I),$===i.SHORT&&(lt=i.RG16I),$===i.INT&&(lt=i.RG32I)),T===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),$===i.UNSIGNED_INT&&(lt=i.RGB32UI),$===i.BYTE&&(lt=i.RGB8I),$===i.SHORT&&(lt=i.RGB16I),$===i.INT&&(lt=i.RGB32I)),T===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),$===i.UNSIGNED_INT&&(lt=i.RGBA32UI),$===i.BYTE&&(lt=i.RGBA8I),$===i.SHORT&&(lt=i.RGBA16I),$===i.INT&&(lt=i.RGBA32I)),T===i.RGB&&($===i.UNSIGNED_SHORT&&wt&&(lt=wt.RGB16_EXT),$===i.SHORT&&wt&&(lt=wt.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),T===i.RGBA){const pt=yt?xr:ae.getTransfer(at);$===i.FLOAT&&(lt=i.RGBA32F),$===i.HALF_FLOAT&&(lt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(lt=pt===pe?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&wt&&(lt=wt.RGBA16_EXT),$===i.SHORT&&wt&&(lt=wt.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function S(I,T){let $;return I?T===null||T===ti||T===uo?$=i.DEPTH24_STENCIL8:T===kn?$=i.DEPTH32F_STENCIL8:T===ho&&($=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ti||T===uo?$=i.DEPTH_COMPONENT24:T===kn?$=i.DEPTH_COMPONENT32F:T===ho&&($=i.DEPTH_COMPONENT16),$}function b(I,T){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ze&&I.minFilter!==je?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){const T=I.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function y(I){const T=I.target;T.removeEventListener("dispose",y),P(T)}function w(I){const T=n.get(I);if(T.__webglInit===void 0)return;const $=I.source,tt=d.get($);if(tt){const at=tt[T.__cacheKey];at.usedTimes--,at.usedTimes===0&&A(I),Object.keys(tt).length===0&&d.delete($)}n.remove(I)}function A(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const $=I.source,tt=d.get($);delete tt[T.__cacheKey],r.memory.textures--}function P(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let at=0;at<T.__webglFramebuffer[tt].length;at++)i.deleteFramebuffer(T.__webglFramebuffer[tt][at]);else i.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)i.deleteFramebuffer(T.__webglFramebuffer[tt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=I.textures;for(let tt=0,at=$.length;tt<at;tt++){const yt=n.get($[tt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),r.memory.textures--),n.remove($[tt])}n.remove(I)}let D=0;function C(){D=0}function L(){return D}function U(I){D=I}function z(){const I=D;return I>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function k(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function W(I,T){const $=n.get(I);if(I.isVideoTexture&&F(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const tt=I.image;if(tt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y($,I,T);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function q(I,T){const $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Y($,I,T);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function J(I,T){const $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Y($,I,T);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function Q(I,T){const $=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){ut($,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const bt={[dr]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},Mt={[Ze]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},Xt={[hf]:i.NEVER,[mf]:i.ALWAYS,[uf]:i.LESS,[Tc]:i.LEQUAL,[ff]:i.EQUAL,[Ac]:i.GEQUAL,[df]:i.GREATER,[pf]:i.NOTEQUAL};function _t(I,T){if(T.type===kn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===je||T.magFilter===va||T.magFilter===ko||T.magFilter===Qi||T.minFilter===je||T.minFilter===va||T.minFilter===ko||T.minFilter===Qi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,bt[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,bt[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,bt[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Mt[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Mt[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Xt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ze||T.minFilter!==ko&&T.minFilter!==Qi||T.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function mt(I,T){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));const tt=T.source;let at=d.get(tt);at===void 0&&(at={},d.set(tt,at));const yt=k(T);if(yt!==I.__cacheKey){at[yt]===void 0&&(at[yt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,$=!0),at[yt].usedTimes++;const wt=at[I.__cacheKey];wt!==void 0&&(at[I.__cacheKey].usedTimes--,wt.usedTimes===0&&A(T)),I.__cacheKey=yt,I.__webglTexture=at[yt].texture}return $}function H(I,T,$){return Math.floor(Math.floor(I/$)/T)}function N(I,T,$,tt){const yt=I.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,$,tt,T.data);else{yt.sort((Gt,Ct)=>Gt.start-Ct.start);let wt=0;for(let Gt=1;Gt<yt.length;Gt++){const Ct=yt[wt],At=yt[Gt],Vt=Ct.start+Ct.count,Yt=H(At.start,T.width,4),$t=H(Ct.start,T.width,4);At.start<=Vt+1&&Yt===$t&&H(At.start+At.count-1,T.width,4)===Yt?Ct.count=Math.max(Ct.count,At.start+At.count-Ct.start):(++wt,yt[wt]=At)}yt.length=wt+1;const lt=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),Tt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Gt=0,Ct=yt.length;Gt<Ct;Gt++){const At=yt[Gt],Vt=Math.floor(At.start/4),Yt=Math.ceil(At.count/4),$t=Vt%T.width,X=Math.floor(Vt/T.width),Rt=Yt,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,$t,X,Rt,dt,$,tt,T.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function Y(I,T,$){let tt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=i.TEXTURE_3D);const at=mt(I,T),yt=T.source;e.bindTexture(tt,I.__webglTexture,i.TEXTURE0+$);const wt=n.get(yt);if(yt.version!==wt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const dt=ae.getPrimaries(ae.workingColorSpace),B=T.colorSpace===Ai?null:ae.getPrimaries(T.colorSpace),et=T.colorSpace===Ai||dt===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let pt=g(T.image,!1,s.maxTextureSize);pt=te(T,pt);const Tt=o.convert(T.format,T.colorSpace),Gt=o.convert(T.type);let Ct=x(T.internalFormat,Tt,Gt,T.normalized,T.colorSpace,T.isVideoTexture);_t(tt,T);let At;const Vt=T.mipmaps,Yt=T.isVideoTexture!==!0,$t=wt.__version===void 0||at===!0,X=yt.dataReady,Rt=b(T,pt);if(T.isDepthTexture)Ct=S(T.format===ji,T.type),$t&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ct,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,pt.width,pt.height,0,Tt,Gt,null));else if(T.isDataTexture)if(Vt.length>0){Yt&&$t&&e.texStorage2D(i.TEXTURE_2D,Rt,Ct,Vt[0].width,Vt[0].height);for(let dt=0,B=Vt.length;dt<B;dt++)At=Vt[dt],Yt?X&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,At.width,At.height,Tt,Gt,At.data):e.texImage2D(i.TEXTURE_2D,dt,Ct,At.width,At.height,0,Tt,Gt,At.data);T.generateMipmaps=!1}else Yt?($t&&e.texStorage2D(i.TEXTURE_2D,Rt,Ct,pt.width,pt.height),X&&N(T,pt,Tt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Ct,pt.width,pt.height,0,Tt,Gt,pt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Yt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ct,Vt[0].width,Vt[0].height,pt.depth);for(let dt=0,B=Vt.length;dt<B;dt++)if(At=Vt[dt],T.format!==Hn)if(Tt!==null)if(Yt){if(X)if(T.layerUpdates.size>0){const et=Eh(At.width,At.height,T.format,T.type);for(const Z of T.layerUpdates){const gt=At.data.subarray(Z*et/At.data.BYTES_PER_ELEMENT,(Z+1)*et/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Z,At.width,At.height,1,Tt,gt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,At.width,At.height,pt.depth,Tt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ct,At.width,At.height,pt.depth,0,At.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,At.width,At.height,pt.depth,Tt,Gt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ct,At.width,At.height,pt.depth,0,Tt,Gt,At.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Yt&&$t&&e.texStorage2D(i.TEXTURE_2D,Rt,Ct,Vt[0].width,Vt[0].height);for(let dt=0,B=Vt.length;dt<B;dt++)At=Vt[dt],T.format!==Hn?Tt!==null?Yt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ct,At.width,At.height,0,At.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?X&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,At.width,At.height,Tt,Gt,At.data):e.texImage2D(i.TEXTURE_2D,dt,Ct,At.width,At.height,0,Tt,Gt,At.data)}else if(T.isDataArrayTexture)if(Yt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ct,pt.width,pt.height,pt.depth),X)if(T.layerUpdates.size>0){const dt=Eh(pt.width,pt.height,T.format,T.type);for(const B of T.layerUpdates){const et=pt.data.subarray(B*dt/pt.data.BYTES_PER_ELEMENT,(B+1)*dt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,B,pt.width,pt.height,1,Tt,Gt,et)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Tt,Gt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,pt.width,pt.height,pt.depth,0,Tt,Gt,pt.data);else if(T.isData3DTexture)Yt?($t&&e.texStorage3D(i.TEXTURE_3D,Rt,Ct,pt.width,pt.height,pt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Tt,Gt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,pt.width,pt.height,pt.depth,0,Tt,Gt,pt.data);else if(T.isFramebufferTexture){if($t)if(Yt)e.texStorage2D(i.TEXTURE_2D,Rt,Ct,pt.width,pt.height);else{let dt=pt.width,B=pt.height;for(let et=0;et<Rt;et++)e.texImage2D(i.TEXTURE_2D,et,Ct,dt,B,0,Tt,Gt,null),dt>>=1,B>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),pt.parentNode!==dt){dt.appendChild(pt),f.add(T),dt.onpaint=B=>{const et=B.changedElements;for(const Z of f)et.includes(Z.image)&&(Z.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{const et=i.RGBA,Z=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,et,Z,gt,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(Yt&&$t){const dt=Jt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Ct,dt.width,dt.height)}for(let dt=0,B=Vt.length;dt<B;dt++)At=Vt[dt],Yt?X&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt,Gt,At):e.texImage2D(i.TEXTURE_2D,dt,Ct,Tt,Gt,At);T.generateMipmaps=!1}else if(Yt){if($t){const dt=Jt(pt);e.texStorage2D(i.TEXTURE_2D,Rt,Ct,dt.width,dt.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Gt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,Tt,Gt,pt);p(T)&&v(tt),wt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ut(I,T,$){if(T.image.length!==6)return;const tt=mt(I,T),at=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);const yt=n.get(at);if(at.version!==yt.__version||tt===!0){e.activeTexture(i.TEXTURE0+$);const wt=ae.getPrimaries(ae.workingColorSpace),lt=T.colorSpace===Ai?null:ae.getPrimaries(T.colorSpace),pt=T.colorSpace===Ai||wt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Tt=T.isCompressedTexture||T.image[0].isCompressedTexture,Gt=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let Z=0;Z<6;Z++)!Tt&&!Gt?Ct[Z]=g(T.image[Z],!0,s.maxCubemapSize):Ct[Z]=Gt?T.image[Z].image:T.image[Z],Ct[Z]=te(T,Ct[Z]);const At=Ct[0],Vt=o.convert(T.format,T.colorSpace),Yt=o.convert(T.type),$t=x(T.internalFormat,Vt,Yt,T.normalized,T.colorSpace),X=T.isVideoTexture!==!0,Rt=yt.__version===void 0||tt===!0,dt=at.dataReady;let B=b(T,At);_t(i.TEXTURE_CUBE_MAP,T);let et;if(Tt){X&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,B,$t,At.width,At.height);for(let Z=0;Z<6;Z++){et=Ct[Z].mipmaps;for(let gt=0;gt<et.length;gt++){const ft=et[gt];T.format!==Hn?Vt!==null?X?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,ft.width,ft.height,Vt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,$t,ft.width,ft.height,0,ft.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,ft.width,ft.height,Vt,Yt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,$t,ft.width,ft.height,0,Vt,Yt,ft.data)}}}else{if(et=T.mipmaps,X&&Rt){et.length>0&&B++;const Z=Jt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,B,$t,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Gt){X?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct[Z].width,Ct[Z].height,Vt,Yt,Ct[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,Ct[Z].width,Ct[Z].height,0,Vt,Yt,Ct[Z].data);for(let gt=0;gt<et.length;gt++){const Ot=et[gt].image[Z].image;X?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Ot.width,Ot.height,Vt,Yt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,$t,Ot.width,Ot.height,0,Vt,Yt,Ot.data)}}else{X?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Vt,Yt,Ct[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$t,Vt,Yt,Ct[Z]);for(let gt=0;gt<et.length;gt++){const ft=et[gt];X?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Vt,Yt,ft.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,$t,Vt,Yt,ft.image[Z])}}}p(T)&&v(i.TEXTURE_CUBE_MAP),yt.__version=at.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function st(I,T,$,tt,at,yt){const wt=o.convert($.format,$.colorSpace),lt=o.convert($.type),pt=x($.internalFormat,wt,lt,$.normalized,$.colorSpace),Tt=n.get(T),Gt=n.get($);if(Gt.__renderTarget=T,!Tt.__hasExternalTextures){const Ct=Math.max(1,T.width>>yt),At=Math.max(1,T.height>>yt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,yt,pt,Ct,At,T.depth,0,wt,lt,null):e.texImage2D(at,yt,pt,Ct,At,0,wt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),zt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,at,Gt.__webglTexture,0,Ut(T)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,at,Gt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(I,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const tt=T.depthTexture,at=tt&&tt.isDepthTexture?tt.type:null,yt=S(T.stencilBuffer,at),wt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(T),yt,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(T),yt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,yt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,I)}else{const tt=T.textures;for(let at=0;at<tt.length;at++){const yt=tt[at],wt=o.convert(yt.format,yt.colorSpace),lt=o.convert(yt.type),pt=x(yt.internalFormat,wt,lt,yt.normalized,yt.colorSpace);zt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(T),pt,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(T),pt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,pt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(I,T,$){const tt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=n.get(T.depthTexture);if(at.__renderTarget=T,(!at.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),tt){if(at.__webglInit===void 0&&(at.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),at.__webglTexture===void 0){at.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),_t(i.TEXTURE_CUBE_MAP,T.depthTexture);const Tt=o.convert(T.depthTexture.format),Gt=o.convert(T.depthTexture.type);let Ct;T.depthTexture.format===xi?Ct=i.DEPTH_COMPONENT24:T.depthTexture.format===ji&&(Ct=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Ct,T.width,T.height,0,Tt,Gt,null)}}else W(T.depthTexture,0);const yt=at.__webglTexture,wt=Ut(T),lt=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,pt=T.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===xi)zt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,lt,yt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,lt,yt,0);else if(T.depthTexture.format===ji)zt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,lt,yt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,lt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(I){const T=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const tt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),tt){const at=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,tt.removeEventListener("dispose",at)};tt.addEventListener("dispose",at),T.__depthDisposeCallback=at}T.__boundDepthTexture=tt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let tt=0;tt<6;tt++)Et(T.__webglFramebuffer[tt],I,tt);else{const tt=I.texture.mipmaps;tt&&tt.length>0?Et(T.__webglFramebuffer[0],I,0):Et(T.__webglFramebuffer,I,0)}else if($){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]===void 0)T.__webglDepthbuffer[tt]=i.createRenderbuffer(),ht(T.__webglDepthbuffer[tt],I,!1);else{const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,yt)}}else{const tt=I.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ht(T.__webglDepthbuffer,I,!1);else{const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(I,T,$){const tt=n.get(I);T!==void 0&&st(tt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&j(I)}function K(I){const T=I.texture,$=n.get(I),tt=n.get(T);I.addEventListener("dispose",y);const at=I.textures,yt=I.isWebGLCubeRenderTarget===!0,wt=at.length>1;if(wt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=T.version,r.memory.textures++),yt){$.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[lt]=[];for(let pt=0;pt<T.mipmaps.length;pt++)$.__webglFramebuffer[lt][pt]=i.createFramebuffer()}else $.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)$.__webglFramebuffer[lt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(wt)for(let lt=0,pt=at.length;lt<pt;lt++){const Tt=n.get(at[lt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&zt(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let lt=0;lt<at.length;lt++){const pt=at[lt];$.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[lt]);const Tt=o.convert(pt.format,pt.colorSpace),Gt=o.convert(pt.type),Ct=x(pt.internalFormat,Tt,Gt,pt.normalized,pt.colorSpace,I.isXRRenderTarget===!0),At=Ut(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Ct,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,$.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),ht($.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),_t(i.TEXTURE_CUBE_MAP,T);for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)st($.__webglFramebuffer[lt][pt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else st($.__webglFramebuffer[lt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(T)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let lt=0,pt=at.length;lt<pt;lt++){const Tt=at[lt],Gt=n.get(Tt);let Ct=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ct=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Gt.__webglTexture),_t(Ct,Tt),st($.__webglFramebuffer,I,Tt,i.COLOR_ATTACHMENT0+lt,Ct,0),p(Tt)&&v(Ct)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(lt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),_t(lt,T),T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)st($.__webglFramebuffer[pt],I,T,i.COLOR_ATTACHMENT0,lt,pt);else st($.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,lt,0);p(T)&&v(lt),e.unbindTexture()}I.depthBuffer&&j(I)}function rt(I){const T=I.textures;for(let $=0,tt=T.length;$<tt;$++){const at=T[$];if(p(at)){const yt=M(I),wt=n.get(at).__webglTexture;e.bindTexture(yt,wt),v(yt),e.unbindTexture()}}}const ct=[],St=[];function Lt(I){if(I.samples>0){if(zt(I)===!1){const T=I.textures,$=I.width,tt=I.height;let at=i.COLOR_BUFFER_BIT;const yt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(I),lt=T.length>1;if(lt)for(let Tt=0;Tt<T.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const pt=I.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<T.length;Tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const Gt=n.get(T[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,$,tt,0,0,$,tt,at,i.NEAREST),l===!0&&(ct.length=0,St.length=0,ct.push(i.COLOR_ATTACHMENT0+Tt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ct.push(yt),St.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Tt=0;Tt<T.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);const Gt=n.get(T[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Ut(I){return Math.min(s.maxSamples,I.samples)}function zt(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function F(I){const T=r.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function te(I,T){const $=I.colorSpace,tt=I.format,at=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==_r&&$!==Ai&&(ae.getTransfer($)===pe?(tt!==Hn||at!==wn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",$)),T}function Jt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=C,this.getTextureUnits=L,this.setTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=G,this.setupRenderTarget=K,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=st,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function jf(i,t){function e(n,s=Ai){let o;const r=ae.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===h0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===u0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===c0)return i.BYTE;if(n===l0)return i.SHORT;if(n===ho)return i.UNSIGNED_SHORT;if(n===vc)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===f0)return i.ALPHA;if(n===d0)return i.RGB;if(n===Hn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===yc)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Na)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Ha||n===Ga||n===Va||n===pr||n===Wa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===za||n===ka)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ha)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return o.COMPRESSED_R11_EAC;if(n===Va)return o.COMPRESSED_SIGNED_R11_EAC;if(n===pr)return o.COMPRESSED_RG11_EAC;if(n===Wa)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ka||n===Ja||n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Xa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===rc||n===ac)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===oc)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===lc||n===mr||n===hc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===cc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===uo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const I3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U3=`
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

}`;class N3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new w0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:I3,fragmentShader:U3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F3 extends Bi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new N3,p={},v=e.getContextAttributes();let M=null,x=null;const S=[],b=[],E=new vt;let y=null,w=null;const A=new Qe;A.viewport=new Pe;const P=new Qe;P.viewport=new Pe;const D=[A,P],C=new Xf;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let N=S[H];return N===void 0&&(N=new Sa,S[H]=N),N.getTargetRaySpace()},this.getControllerGrip=function(H){let N=S[H];return N===void 0&&(N=new Sa,S[H]=N),N.getGripSpace()},this.getHand=function(H){let N=S[H];return N===void 0&&(N=new Sa,S[H]=N),N.getHandSpace()};function z(H){const N=b.indexOf(H.inputSource);if(N===-1)return;const Y=S[N];Y!==void 0&&(Y.update(H.inputSource,H.frame,c||r),Y.dispatchEvent({type:H.type,data:H.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",W);for(let H=0;H<S.length;H++){const N=b[H];N!==null&&(b[H]=null,S[H].disconnect(N))}L=null,U=null,g.reset();for(const H in p)delete p[H];if(t.setRenderTarget(M),d=null,u=null,f=null,s=null,x=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),w!==null){const H=w.camera;H.fov=w.fov,H.zoom=w.zoom,H.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,ut=null,st=null;v.depth&&(st=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=v.stencil?ji:xi,ut=v.stencil?uo:ti);const ht={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:o};f=this.getBinding(),u=f.createProjectionLayer(ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Gn(u.textureWidth,u.textureHeight,{format:Hn,type:wn,depthTexture:new po(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Y={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Gn(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(H){for(let N=0;N<H.removed.length;N++){const Y=H.removed[N],ut=b.indexOf(Y);ut>=0&&(b[ut]=null,S[ut].disconnect(Y))}for(let N=0;N<H.added.length;N++){const Y=H.added[N];let ut=b.indexOf(Y);if(ut===-1){for(let ht=0;ht<S.length;ht++)if(ht>=b.length){b.push(Y),ut=ht;break}else if(b[ht]===null){b[ht]=Y,ut=ht;break}if(ut===-1)break}const st=S[ut];st&&st.connect(Y)}}const q=new O,J=new O;function Q(H,N,Y){q.setFromMatrixPosition(N.matrixWorld),J.setFromMatrixPosition(Y.matrixWorld);const ut=q.distanceTo(J),st=N.projectionMatrix.elements,ht=Y.projectionMatrix.elements,Et=st[14]/(st[10]-1),j=st[14]/(st[10]+1),G=(st[9]+1)/st[5],K=(st[9]-1)/st[5],rt=(st[8]-1)/st[0],ct=(ht[8]+1)/ht[0],St=Et*rt,Lt=Et*ct,Ut=ut/(-rt+ct),zt=Ut*-rt;if(N.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(zt),H.translateZ(Ut),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),st[10]===-1)H.projectionMatrix.copy(N.projectionMatrix),H.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const F=Et+Ut,te=j+Ut,Jt=St-zt,I=Lt+(ut-zt),T=G*j/te*F,$=K*j/te*F;H.projectionMatrix.makePerspective(Jt,I,T,$,F,te),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function bt(H,N){N===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(N.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let N=H.near,Y=H.far;g.texture!==null&&(g.depthNear>0&&(N=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),C.near=P.near=A.near=N,C.far=P.far=A.far=Y,(L!==C.near||U!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,U=C.far),C.layers.mask=H.layers.mask|6,A.layers.mask=C.layers.mask&-5,P.layers.mask=C.layers.mask&-3;const ut=H.parent,st=C.cameras;bt(C,ut);for(let ht=0;ht<st.length;ht++)bt(st[ht],ut);st.length===2?Q(C,A,P):C.projectionMatrix.copy(A.projectionMatrix),w===null&&H.isPerspectiveCamera&&(w={camera:H,fov:H.fov,zoom:H.zoom}),Mt(H,C,ut)};function Mt(H,N,Y){Y===null?H.matrix.copy(N.matrixWorld):(H.matrix.copy(Y.matrixWorld),H.matrix.invert(),H.matrix.multiply(N.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(N.projectionMatrix),H.projectionMatrixInverse.copy(N.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Sr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(H){return p[H]};let Xt=null;function _t(H,N){if(h=N.getViewerPose(c||r),m=N,h!==null){const Y=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ut=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,ut=!0);for(let j=0;j<Y.length;j++){const G=Y[j];let K=null;if(d!==null)K=d.getViewport(G);else{const ct=f.getViewSubImage(u,G);K=ct.viewport,j===0&&(t.setRenderTargetTextures(x,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(x))}let rt=D[j];rt===void 0&&(rt=new Qe,rt.layers.enable(j),rt.viewport=new Pe,D[j]=rt),rt.matrix.fromArray(G.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(G.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(K.x,K.y,K.width,K.height),j===0&&(C.matrix.copy(rt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ut===!0&&C.cameras.push(rt)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const j=f.getDepthInformation(Y[0]);j&&j.isValid&&j.texture&&g.init(j,s.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let j=0;j<Y.length;j++){const G=Y[j].camera;if(G){let K=p[G];K||(K=new w0,p[G]=K);const rt=f.getCameraImage(G);K.sourceTexture=rt}}}}for(let Y=0;Y<S.length;Y++){const ut=b[Y],st=S[Y];ut!==null&&st!==void 0&&st.update(ut,N,c||r)}Xt&&Xt(H,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),m=null}const mt=new Yf;mt.setAnimationLoop(_t),this.setAnimationLoop=function(H){Xt=H},this.dispose=function(){}}}const O3=new Se,td=new Qt;td.set(-1,0,0,0,1,0,0,0,1);function B3(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Uf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ln&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ln&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(O3.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(td),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z3(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",v));const E=S.program;n.updateUBOMapping(x,E);const y=t.render.frame;o[x.id]!==y&&(u(x),o[x.id]=y)}function h(x){const S=f();x.__bindingPointIndex=S;const b=i.createBuffer(),E=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=s[x.id],b=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,w=b.length;y<w;y++){const A=b[y];if(Array.isArray(A))for(let P=0,D=A.length;P<D;P++)d(A[P],y,P,E);else d(A,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,S,b,E){if(_(x,S,b,E)===!0){const y=x.__offset,w=x.value;if(Array.isArray(w)){let A=0;for(let P=0;P<w.length;P++){const D=w[P],C=p(D);m(D,x.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function m(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function _(x,S,b,E){const y=x.value,w=S+"_"+b;if(E[w]===void 0)return typeof y=="number"||typeof y=="boolean"?E[w]=y:ArrayBuffer.isView(y)?E[w]=y.slice():E[w]=y.clone(),!0;{const A=E[w];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return E[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(x){const S=x.uniforms;let b=0;const E=16;for(let w=0,A=S.length;w<A;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let D=0,C=P.length;D<C;D++){const L=P[D],U=Array.isArray(L.value)?L.value:[L.value];for(let z=0,k=U.length;z<k;z++){const W=U[z],q=p(W),J=b%E,Q=J%q.boundary,bt=J+Q;b+=Q,bt!==0&&E-bt<q.storage&&(b+=E-bt),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=q.storage}}}const y=b%E;return y>0&&(b+=E-y),x.__size=b,x.__cache={},this}function p(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",x),S}function v(x){const S=x.target;S.removeEventListener("dispose",v);const b=r.indexOf(S.__bindingPointIndex);r.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function M(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:M}}const k3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function H3(){return ai===null&&(ai=new Pc(k3,16,16,ss,ei),ai.name="DFG_LUT",ai.minFilter=je,ai.magFilter=je,ai.wrapS=di,ai.wrapT=di,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class ed{constructor(t={}){const{canvas:e=gf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=wn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const _=d,g=new Set([Ec,wc,bc]),p=new Set([wn,ti,ho,uo,Mc,Sc]),v=new Uint32Array(4),M=new Int32Array(4),x=new O;let S=null,b=null;const E=[],y=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1,D=null,C=null,L=null,U=null;this._outputColorSpace=Je;let z=0,k=0,W=null,q=-1,J=null;const Q=new Pe,bt=new Pe;let Mt=null;const Xt=new qt(0);let _t=0,mt=e.width,H=e.height,N=1,Y=null,ut=null;const st=new Pe(0,0,mt,H),ht=new Pe(0,0,mt,H);let Et=!1;const j=new Lc;let G=!1,K=!1;const rt=new Se,ct=new O,St=new Pe,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function zt(){return W===null?N:1}let F=n;function te(R,V){return e.getContext(R,V)}let Jt,I,T,$,tt,at,yt,wt,lt,pt,Tt,Gt,Ct,At,Vt,Yt,$t,X,Rt,dt,B,et,Z;try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xc}`),e.addEventListener("webglcontextlost",Ot,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),F===null){const V="webgl2";if(F=te(V,R),F===null)throw te(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(R){throw e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),le("WebGLRenderer: "+R.message),R}function gt(){Jt=new Gm(F),Jt.init(),B=new jf(F,Jt),I=new Dm(F,Jt,t,B),T=new L3(F,Jt),I.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),C=F.createFramebuffer(),L=F.createFramebuffer(),U=F.createFramebuffer(),$=new Xm(F),tt=new _3,at=new D3(F,Jt,T,tt,I,B,$),yt=new Hm(A),wt=new Yp(F),et=new Pm(F,wt),lt=new Vm(F,wt,$,et),pt=new Ym(F,lt,wt,et,$),X=new qm(F,I,at),Vt=new Im(tt),Tt=new g3(A,yt,Jt,I,et,Vt),Gt=new B3(A,tt),Ct=new v3,At=new E3(Jt),$t=new Cm(A,yt,T,pt,m,l),Yt=new P3(A,pt,I),Z=new z3(F,$,I,T),Rt=new Lm(F,Jt,$),dt=new Wm(F,Jt,$),$.programs=Tt.programs,A.capabilities=I,A.extensions=Jt,A.properties=tt,A.renderLists=Ct,A.shadowMap=Yt,A.state=T,A.info=$}_!==wn&&(w=new $m(_,e.width,e.height,a,s,o));const ft=new F3(A,F);this.xr=ft,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(R){R!==void 0&&(N=R,this.setSize(mt,H,!1))},this.getSize=function(R){return R.set(mt,H)},this.setSize=function(R,V,ot=!0){if(ft.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=R,H=V,e.width=Math.floor(R*N),e.height=Math.floor(V*N),ot===!0&&(e.style.width=R+"px",e.style.height=V+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(mt*N,H*N).floor()},this.setDrawingBufferSize=function(R,V,ot){mt=R,H=V,N=ot,e.width=Math.floor(R*ot),e.height=Math.floor(V*ot),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(_===wn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Q)},this.getViewport=function(R){return R.copy(st)},this.setViewport=function(R,V,ot,nt){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,V,ot,nt),T.viewport(Q.copy(st).multiplyScalar(N).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,V,ot,nt){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,V,ot,nt),T.scissor(bt.copy(ht).multiplyScalar(N).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(R){T.setScissorTest(Et=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,ot=!0){let nt=0;if(R){let it=!1;if(W!==null){const It=W.texture.format;it=g.has(It)}if(it){const It=W.texture.type,Bt=p.has(It),Dt=$t.getClearColor(),kt=$t.getClearAlpha(),Wt=Dt.r,ee=Dt.g,re=Dt.b;Bt?(v[0]=Wt,v[1]=ee,v[2]=re,v[3]=kt,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=Wt,M[1]=ee,M[2]=re,M[3]=kt,F.clearBufferiv(F.COLOR,0,M))}else nt|=F.COLOR_BUFFER_BIT}V&&(nt|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(nt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&F.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),D=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Ot,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),$t.dispose(),Ct.dispose(),At.dispose(),tt.dispose(),yt.dispose(),pt.dispose(),et.dispose(),Z.dispose(),Tt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",as),ft.removeEventListener("sessionend",bs),Mi.stop()};function Ot(R){R.preventDefault(),Mr("WebGLRenderer: Context Lost."),P=!0}function Nt(){Mr("WebGLRenderer: Context Restored."),P=!1;const R=$.autoReset,V=Yt.enabled,ot=Yt.autoUpdate,nt=Yt.needsUpdate,it=Yt.type;gt(),$.autoReset=R,Yt.enabled=V,Yt.autoUpdate=ot,Yt.needsUpdate=nt,Yt.type=it}function Kt(R){le("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oe(R){const V=R.target;V.removeEventListener("dispose",oe),xe(V)}function xe(R){Ie(R),tt.remove(R)}function Ie(R){const V=tt.get(R).programs;V!==void 0&&(V.forEach(function(ot){Tt.releaseProgram(ot)}),R.isShaderMaterial&&Tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,ot,nt,it,It){V===null&&(V=Lt);const Bt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Dt=Ad(R,V,ot,nt,it);T.setMaterial(nt,Bt);let kt=ot.index,Wt=1;if(nt.wireframe===!0){if(kt=lt.getWireframeAttribute(ot),kt===void 0)return;Wt=2}const ee=ot.drawRange,re=ot.attributes.position;let Ht=ee.start*Wt,de=(ee.start+ee.count)*Wt;It!==null&&(Ht=Math.max(Ht,It.start*Wt),de=Math.min(de,(It.start+It.count)*Wt)),kt!==null?(Ht=Math.max(Ht,0),de=Math.min(de,kt.count)):re!=null&&(Ht=Math.max(Ht,0),de=Math.min(de,re.count));const Oe=de-Ht;if(Oe<0||Oe===1/0)return;et.setup(it,nt,Dt,ot,kt);let Te,ye=Rt;if(kt!==null&&(Te=wt.get(kt),ye=dt,ye.setIndex(Te)),it.isMesh)nt.wireframe===!0?(T.setLineWidth(nt.wireframeLinewidth*zt()),ye.setMode(F.LINES)):ye.setMode(F.TRIANGLES);else if(it.isLine){let en=nt.linewidth;en===void 0&&(en=1),T.setLineWidth(en*zt()),it.isLineSegments?ye.setMode(F.LINES):it.isLineLoop?ye.setMode(F.LINE_LOOP):ye.setMode(F.LINE_STRIP)}else it.isPoints?ye.setMode(F.POINTS):it.isSprite&&ye.setMode(F.TRIANGLES);if(it.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))ye.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const en=it._multiDrawStarts,Ft=it._multiDrawCounts,hn=it._multiDrawCount,ue=kt?wt.get(kt).bytesPerElement:1,Nn=tt.get(nt).currentProgram.getUniforms();for(let oi=0;oi<hn;oi++)Nn.setValue(F,"_gl_DrawID",oi),ye.render(en[oi]/ue,Ft[oi])}else if(it.isInstancedMesh)ye.renderInstances(Ht,Oe,it.count);else if(ot.isInstancedBufferGeometry){const en=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ft=Math.min(ot.instanceCount,en);ye.renderInstances(Ht,Oe,Ft)}else ye.render(Ht,Oe)};function vn(R,V,ot,nt){D!==null&&R.isNodeMaterial&&D.setObject(nt,R),G===!0&&Vt.setState(R,ot,!1),R.transparent===!0&&R.side===an&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,si(R,V,nt),R.side=Qn,R.needsUpdate=!0,si(R,V,nt),R.side=an):si(R,V,nt)}this.compile=function(R,V,ot=null){ot===null&&(ot=R),D!==null&&D.renderStart(R,V,ot),b=At.get(ot),b.init(V),y.push(b),ot.traverseVisible(function(it){it.isLight&&it.layers.test(V.layers)&&(b.pushLight(it),it.castShadow&&b.pushShadow(it))}),R!==ot&&R.traverseVisible(function(it){it.isLight&&it.layers.test(V.layers)&&(b.pushLight(it),it.castShadow&&b.pushShadow(it))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),K=this.localClippingEnabled,G=Vt.init(this.clippingPlanes,K),G===!0&&Vt.setGlobalState(this.clippingPlanes,V),D!==null&&Yt.render(b.state.shadowsArray,ot,V);const nt=new Set;return R.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const It=it.material;if(It)if(Array.isArray(It))for(let Bt=0;Bt<It.length;Bt++){const Dt=It[Bt];vn(Dt,ot,V,it),nt.add(Dt)}else vn(It,ot,V,it),nt.add(It)}),b=y.pop(),D!==null&&D.renderEnd(),nt},this.compileAsync=function(R,V,ot=null){const nt=this.compile(R,V,ot);return new Promise(it=>{function It(){if(nt.forEach(function(Bt){const kt=tt.get(Bt).currentProgram;(kt===void 0||kt.isReady())&&nt.delete(Bt)}),nt.size===0){it(R);return}setTimeout(It,10)}Jt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let tn=null;function zi(R){tn&&tn(R)}function as(){Mi.stop()}function bs(){Mi.start()}const Mi=new Yf;Mi.setAnimationLoop(zi),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){tn=R,ft.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},ft.addEventListener("sessionstart",as),ft.addEventListener("sessionend",bs),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(R,V);const ot=ft.enabled===!0&&ft.isPresenting===!0,nt=w!==null&&(W===null||ot)&&w.begin(A,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(V),V=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,V,W),b=At.get(R,y.length),b.init(V),b.state.textureUnits=at.getTextureUnits(),y.push(b),rt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(rt,Jn,V.reversedDepth),K=this.localClippingEnabled,G=Vt.init(this.clippingPlanes,K),S=Ct.get(R,E.length),S.init(),E.push(S),ft.enabled===!0&&ft.isPresenting===!0){const Bt=A.xr.getDepthSensingMesh();Bt!==null&&yo(Bt,V,-1/0,A.sortObjects)}yo(R,V,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(Y,ut),Ut=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ut&&$t.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&Vt.beginShadows();const it=b.state.shadowsArray;if(Yt.render(it,R,V),G===!0&&Vt.endShadows(),(nt&&w.hasRenderPass())===!1){const Bt=S.opaque,Dt=S.transmissive;if(b.setupLights(),V.isArrayCamera){const kt=V.cameras;if(Dt.length>0)for(let Wt=0,ee=kt.length;Wt<ee;Wt++){const re=kt[Wt];bo(Bt,Dt,R,re)}Ut&&$t.render(R);for(let Wt=0,ee=kt.length;Wt<ee;Wt++){const re=kt[Wt];Ir(S,R,re,re.viewport)}}else Dt.length>0&&bo(Bt,Dt,R,V),Ut&&$t.render(R),Ir(S,R,V)}W!==null&&k===0&&(at.updateMultisampleRenderTarget(W),at.updateRenderTargetMipmap(W)),nt&&w.end(A),R.isScene===!0&&R.onAfterRender(A,R,V),et.resetDefaultState(),q=-1,J=null,y.pop(),y.length>0?(b=y[y.length-1],at.setTextureUnits(b.state.textureUnits),G===!0&&Vt.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,D!==null&&D.renderEnd()};function yo(R,V,ot,nt){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(j)){nt&&St.setFromMatrixPosition(R.matrixWorld).applyMatrix4(rt);const Bt=pt.update(R),Dt=R.material;Dt.visible&&S.push(R,Bt,Dt,ot,St.z,null,V)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(j))){const Bt=pt.update(R),Dt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),St.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),St.copy(Bt.boundingSphere.center)),St.applyMatrix4(R.matrixWorld).applyMatrix4(rt)),Array.isArray(Dt)){const kt=Bt.groups;for(let Wt=0,ee=kt.length;Wt<ee;Wt++){const re=kt[Wt],Ht=Dt[re.materialIndex];Ht&&Ht.visible&&S.push(R,Bt,Ht,ot,St.z,re,V)}}else Dt.visible&&S.push(R,Bt,Dt,ot,St.z,null,V)}}const It=R.children;for(let Bt=0,Dt=It.length;Bt<Dt;Bt++)yo(It[Bt],V,ot,nt)}function Ir(R,V,ot,nt){const{opaque:it,transmissive:It,transparent:Bt}=R;b.setupLightsView(ot),G===!0&&Vt.setGlobalState(A.clippingPlanes,ot),nt&&T.viewport(Q.copy(nt)),it.length>0&&Wn(it,V,ot),It.length>0&&Wn(It,V,ot),Bt.length>0&&Wn(Bt,V,ot),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function bo(R,V,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[nt.id]===void 0){const Ht=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[nt.id]=new Gn(1,1,{generateMipmaps:!0,type:Ht?ei:wn,minFilter:Qi,samples:Math.max(4,I.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const It=b.state.transmissionRenderTarget[nt.id],Bt=nt.viewport||Q;It.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);const Dt=A.getRenderTarget(),kt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(It),A.getClearColor(Xt),_t=A.getClearAlpha(),_t<1&&A.setClearColor(16777215,.5),A.clear(),Ut&&$t.render(ot);const ee=A.toneMapping;A.toneMapping=jn;const re=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),b.setupLightsView(nt),G===!0&&Vt.setGlobalState(A.clippingPlanes,nt),Wn(R,ot,nt),at.updateMultisampleRenderTarget(It),at.updateRenderTargetMipmap(It),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let de=0,Oe=V.length;de<Oe;de++){const Te=V[de],{object:ye,geometry:en,material:Ft,group:hn}=Te;if(Ft.side===an&&ye.layers.test(nt.layers)){const ue=Ft.side;Ft.side=ln,Ft.needsUpdate=!0,Si(ye,ot,nt,en,Ft,hn),Ft.side=ue,Ft.needsUpdate=!0,Ht=!0}}Ht===!0&&(at.updateMultisampleRenderTarget(It),at.updateRenderTargetMipmap(It))}A.setRenderTarget(Dt,kt,Wt),A.setClearColor(Xt,_t),re!==void 0&&(nt.viewport=re),A.toneMapping=ee}function Wn(R,V,ot){const nt=V.isScene===!0?V.overrideMaterial:null;for(let it=0,It=R.length;it<It;it++){const Bt=R[it],{object:Dt,geometry:kt,group:Wt}=Bt;let ee=Bt.material;ee.allowOverride===!0&&nt!==null&&(ee=nt),Dt.layers.test(ot.layers)&&Si(Dt,V,ot,kt,ee,Wt)}}function Si(R,V,ot,nt,it,It){D!==null&&it.isNodeMaterial&&D.setObject(R,it),R.onBeforeRender(A,V,ot,nt,it,It),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),it.onBeforeRender(A,V,ot,nt,R,It),it.transparent===!0&&it.side===an&&it.forceSinglePass===!1?(it.side=ln,it.needsUpdate=!0,A.renderBufferDirect(ot,V,nt,it,R,It),it.side=Qn,it.needsUpdate=!0,A.renderBufferDirect(ot,V,nt,it,R,It),it.side=an):A.renderBufferDirect(ot,V,nt,it,R,It),R.onAfterRender(A,V,ot,nt,it,It)}function si(R,V,ot){V.isScene!==!0&&(V=Lt);const nt=tt.get(R),it=b.state.lights,It=b.state.shadowsArray,Bt=it.state.version,Dt=Tt.getParameters(R,it.state,It,V,ot,b.state.lightProbeGridArray),kt=Tt.getProgramCacheKey(Dt);let Wt=nt.programs;nt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,nt.fog=V.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;nt.envMap=yt.get(R.envMap||nt.environment,ee),nt.envMapRotation=nt.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",oe),Wt=new Map,nt.programs=Wt);let re=Wt.get(kt);if(re!==void 0){if(nt.currentProgram===re&&nt.lightsStateVersion===Bt)return Eo(R,Dt),re}else Dt.uniforms=Tt.getUniforms(R),D!==null&&R.isNodeMaterial&&D.build(R,ot,Dt),R.onBeforeCompile(Dt,A),re=Tt.acquireProgram(Dt,kt),Wt.set(kt,re),nt.uniforms=Dt.uniforms;const Ht=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=Vt.uniform),Eo(R,Dt),nt.needsLights=Cd(R),nt.lightsStateVersion=Bt,nt.needsLights&&(Ht.ambientLightColor.value=it.state.ambient,Ht.lightProbe.value=it.state.probe,Ht.sunLights.value=it.state.sun,Ht.sunLightShadows.value=it.state.sunShadow,Ht.directionalLights.value=it.state.directional,Ht.directionalLightShadows.value=it.state.directionalShadow,Ht.spotLights.value=it.state.spot,Ht.spotLightShadows.value=it.state.spotShadow,Ht.rectAreaLights.value=it.state.rectArea,Ht.ltc_1.value=it.state.rectAreaLTC1,Ht.ltc_2.value=it.state.rectAreaLTC2,Ht.pointLights.value=it.state.point,Ht.pointLightShadows.value=it.state.pointShadow,Ht.hemisphereLights.value=it.state.hemi,Ht.sunShadowMatrix.value=it.state.sunShadowMatrix,Ht.sunShadowCascade.value=it.state.sunShadowCascade,Ht.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Ht.spotLightMatrix.value=it.state.spotLightMatrix,Ht.spotLightMap.value=it.state.spotLightMap,Ht.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=b.state.lightProbeGridArray.length>0,nt.currentProgram=re,nt.uniformsList=null,re}function wo(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=ba.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Eo(R,V){const ot=tt.get(R);ot.outputColorSpace=V.outputColorSpace,ot.batching=V.batching,ot.batchingColor=V.batchingColor,ot.instancing=V.instancing,ot.instancingColor=V.instancingColor,ot.instancingMorph=V.instancingMorph,ot.skinning=V.skinning,ot.morphTargets=V.morphTargets,ot.morphNormals=V.morphNormals,ot.morphColors=V.morphColors,ot.morphTargetsCount=V.morphTargetsCount,ot.numClippingPlanes=V.numClippingPlanes,ot.numIntersection=V.numClipIntersection,ot.vertexAlphas=V.vertexAlphas,ot.vertexTangents=V.vertexTangents,ot.toneMapping=V.toneMapping}function Td(R,V){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(V.matrixWorld);for(let ot=0,nt=R.length;ot<nt;ot++){const it=R[ot];if(it.texture!==null&&it.boundingBox.containsPoint(x))return it}return null}function Ad(R,V,ot,nt,it){V.isScene!==!0&&(V=Lt),at.resetTextureUnits();const It=V.fog,Bt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?V.environment:null,Dt=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ae.workingColorSpace,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Wt=yt.get(nt.envMap||Bt,kt),ee=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ht=!!ot.morphAttributes.position,de=!!ot.morphAttributes.normal,Oe=!!ot.morphAttributes.color;let Te=jn;nt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Te=A.toneMapping);const ye=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,en=ye!==void 0?ye.length:0,Ft=tt.get(nt),hn=b.state.lights;if(G===!0&&(K===!0||R!==J)){const we=R===J&&nt.id===q;Vt.setState(nt,R,we)}let ue=!1;nt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==hn.state.version||Ft.outputColorSpace!==Dt||it.isBatchedMesh&&Ft.batching===!1||!it.isBatchedMesh&&Ft.batching===!0||it.isBatchedMesh&&Ft.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Ft.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Ft.instancing===!1||!it.isInstancedMesh&&Ft.instancing===!0||it.isSkinnedMesh&&Ft.skinning===!1||!it.isSkinnedMesh&&Ft.skinning===!0||it.isInstancedMesh&&Ft.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Ft.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Ft.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Ft.instancingMorph===!1&&it.morphTexture!==null||Ft.envMap!==Wt||nt.fog===!0&&Ft.fog!==It||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Vt.numPlanes||Ft.numIntersection!==Vt.numIntersection)||Ft.vertexAlphas!==ee||Ft.vertexTangents!==re||Ft.morphTargets!==Ht||Ft.morphNormals!==de||Ft.morphColors!==Oe||Ft.toneMapping!==Te||Ft.morphTargetsCount!==en||!!Ft.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Ft.__version=nt.version);let Nn=Ft.currentProgram;ue===!0&&(Nn=si(nt,V,it),D&&nt.isNodeMaterial&&D.onUpdateProgram(nt,Nn,Ft));let oi=!1,ki=!1,ws=!1;const ve=Nn.getUniforms(),Ne=Ft.uniforms;if(T.useProgram(Nn.program)&&(oi=!0,ki=!0,ws=!0),nt.id!==q&&(q=nt.id,ki=!0),Ft.needsLights){const we=Td(b.state.lightProbeGridArray,it);Ft.lightProbeGrid!==we&&(Ft.lightProbeGrid=we,ki=!0)}if(oi||J!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ve.setValue(F,"projectionMatrix",R.projectionMatrix),ve.setValue(F,"viewMatrix",R.matrixWorldInverse);const Gi=ve.map.cameraPosition;Gi!==void 0&&Gi.setValue(F,ct.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&ve.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,ki=!0,ws=!0)}if(Ft.needsLights&&(hn.state.sunShadowMap.length>0&&ve.setValue(F,"sunShadowMap",hn.state.sunShadowMap,at),hn.state.directionalShadowMap.length>0&&ve.setValue(F,"directionalShadowMap",hn.state.directionalShadowMap,at),hn.state.spotShadowMap.length>0&&ve.setValue(F,"spotShadowMap",hn.state.spotShadowMap,at),hn.state.pointShadowMap.length>0&&ve.setValue(F,"pointShadowMap",hn.state.pointShadowMap,at)),it.isSkinnedMesh){ve.setOptional(F,it,"bindMatrix"),ve.setOptional(F,it,"bindMatrixInverse");const we=it.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ve.setValue(F,"boneTexture",we.boneTexture,at))}it.isBatchedMesh&&(ve.setOptional(F,it,"batchingTexture"),ve.setValue(F,"batchingTexture",it._matricesTexture,at),ve.setOptional(F,it,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",it._indirectTexture,at),ve.setOptional(F,it,"batchingColorTexture"),it._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",it._colorsTexture,at));const Hi=ot.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&X.update(it,ot,Nn),(ki||Ft.receiveShadow!==it.receiveShadow)&&(Ft.receiveShadow=it.receiveShadow,ve.setValue(F,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&V.environment!==null&&(Ne.envMapIntensity.value=V.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=H3()),ki){if(ve.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ft.needsLights&&Rd(Ne,ws),It&&nt.fog===!0&&Gt.refreshFogUniforms(Ne,It),Gt.refreshMaterialUniforms(Ne,nt,N,H,b.state.transmissionRenderTarget[R.id]),Ft.needsLights&&Ft.lightProbeGrid){const we=Ft.lightProbeGrid;Ne.probesSH.value=we.texture,Ne.probesMin.value.copy(we.boundingBox.min),Ne.probesMax.value.copy(we.boundingBox.max),Ne.probesResolution.value.copy(we.resolution)}ba.upload(F,wo(Ft),Ne,at)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ba.upload(F,wo(Ft),Ne,at),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&ve.setValue(F,"center",it.center),ve.setValue(F,"modelViewMatrix",it.modelViewMatrix),ve.setValue(F,"normalMatrix",it.normalMatrix),ve.setValue(F,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const we=nt.uniformsGroups;for(let Gi=0,Es=we.length;Gi<Es;Gi++){const q0=we[Gi];Z.update(q0,Nn),Z.bind(q0,Nn)}}return Nn}function Rd(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Cd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,V,ot){const nt=tt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),tt.get(R.texture).__webglTexture=V,tt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const ot=tt.get(R);ot.__webglFramebuffer=V,ot.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,ot=0){W=R,z=V,k=ot;let nt=null,it=!1,It=!1;if(R){const Dt=tt.get(R);if(Dt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(F.FRAMEBUFFER,Dt.__webglFramebuffer),Q.copy(R.viewport),bt.copy(R.scissor),Mt=R.scissorTest,T.viewport(Q),T.scissor(bt),T.setScissorTest(Mt),q=-1;return}else if(Dt.__webglFramebuffer===void 0)at.setupRenderTarget(R);else if(Dt.__hasExternalTextures)at.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Dt.__boundDepthTexture!==ee){if(ee!==null&&tt.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(It=!0);const Wt=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[V])?nt=Wt[V][ot]:nt=Wt[V],it=!0):R.samples>0&&at.useMultisampledRTT(R)===!1?nt=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?nt=Wt[ot]:nt=Wt,Q.copy(R.viewport),bt.copy(R.scissor),Mt=R.scissorTest}else Q.copy(st).multiplyScalar(N).floor(),bt.copy(ht).multiplyScalar(N).floor(),Mt=Et;if(ot!==0&&(nt=C),T.bindFramebuffer(F.FRAMEBUFFER,nt)&&T.drawBuffers(R,nt),T.viewport(Q),T.scissor(bt),T.setScissorTest(Mt),it){const Dt=tt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,Dt.__webglTexture,ot)}else if(It){const Dt=V;for(let kt=0;kt<R.textures.length;kt++){const Wt=tt.get(R.textures[kt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+kt,Wt.__webglTexture,ot,Dt)}}else if(R!==null&&ot!==0){const Dt=tt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dt.__webglTexture,ot)}q=-1};function X0(R){const V=tt.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=I.textureFormatReadable(R.format),V.__typeReadable=I.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,ot,nt,it,It,Bt,Dt=0){if(!(R&&R.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt){T.bindFramebuffer(F.FRAMEBUFFER,kt);try{const Wt=R.textures[Dt],ee=Wt.format,re=Wt.type;R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Dt);const Ht=X0(Wt);if(Ht.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-nt&&ot>=0&&ot<=R.height-it&&F.readPixels(V,ot,nt,it,B.convert(ee),B.convert(re),It)}finally{const Wt=W!==null?tt.get(W).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,V,ot,nt,it,It,Bt,Dt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt)if(V>=0&&V<=R.width-nt&&ot>=0&&ot<=R.height-it){T.bindFramebuffer(F.FRAMEBUFFER,kt);const Wt=R.textures[Dt],ee=Wt.format,re=Wt.type;R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Dt);const Ht=X0(Wt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.bufferData(F.PIXEL_PACK_BUFFER,It.byteLength,F.STREAM_READ),F.readPixels(V,ot,nt,it,B.convert(ee),B.convert(re),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Oe=W!==null?tt.get(W).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,Oe);const Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ld(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,It),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(de),F.deleteSync(Te),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,ot=0){const nt=Math.pow(2,-ot),it=Math.floor(R.image.width*nt),It=Math.floor(R.image.height*nt),Bt=V!==null?V.x:0,Dt=V!==null?V.y:0;at.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ot,0,0,Bt,Dt,it,It),T.unbindTexture()},this.copyTextureToTexture=function(R,V,ot=null,nt=null,it=0,It=0){let Bt,Dt,kt,Wt,ee,re,Ht,de,Oe;const Te=R.isCompressedTexture?R.mipmaps[It]:R.image;if(ot!==null)Bt=ot.max.x-ot.min.x,Dt=ot.max.y-ot.min.y,kt=ot.isBox3?ot.max.z-ot.min.z:1,Wt=ot.min.x,ee=ot.min.y,re=ot.isBox3?ot.min.z:0;else{const Ne=Math.pow(2,-it);Bt=Math.floor(Te.width*Ne),Dt=Math.floor(Te.height*Ne),R.isDataArrayTexture?kt=Te.depth:R.isData3DTexture?kt=Math.floor(Te.depth*Ne):kt=1,Wt=0,ee=0,re=0}nt!==null?(Ht=nt.x,de=nt.y,Oe=nt.z):(Ht=0,de=0,Oe=0);const ye=B.convert(V.format),en=B.convert(V.type);let Ft;V.isData3DTexture?(at.setTexture3D(V,0),Ft=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(at.setTexture2DArray(V,0),Ft=F.TEXTURE_2D_ARRAY):(at.setTexture2D(V,0),Ft=F.TEXTURE_2D),T.activeTexture(F.TEXTURE0),T.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const hn=T.getParameter(F.UNPACK_ROW_LENGTH),ue=T.getParameter(F.UNPACK_IMAGE_HEIGHT),Nn=T.getParameter(F.UNPACK_SKIP_PIXELS),oi=T.getParameter(F.UNPACK_SKIP_ROWS),ki=T.getParameter(F.UNPACK_SKIP_IMAGES);T.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),T.pixelStorei(F.UNPACK_SKIP_PIXELS,Wt),T.pixelStorei(F.UNPACK_SKIP_ROWS,ee),T.pixelStorei(F.UNPACK_SKIP_IMAGES,re);const ws=R.isDataArrayTexture||R.isData3DTexture,ve=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const Ne=tt.get(R),Hi=tt.get(V),we=tt.get(Ne.__renderTarget),Gi=tt.get(Hi.__renderTarget);T.bindFramebuffer(F.READ_FRAMEBUFFER,we.__webglFramebuffer),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Es=0;Es<kt;Es++)ws&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tt.get(R).__webglTexture,it,re+Es),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tt.get(V).__webglTexture,It,Oe+Es)),F.blitFramebuffer(Wt,ee,Bt,Dt,Ht,de,Bt,Dt,F.DEPTH_BUFFER_BIT,F.NEAREST);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(it!==0||R.isRenderTargetTexture||tt.has(R)){const Ne=tt.get(R),Hi=tt.get(V);T.bindFramebuffer(F.READ_FRAMEBUFFER,L),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let we=0;we<kt;we++)ws?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,it,re+we):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ne.__webglTexture,it),ve?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Hi.__webglTexture,It,Oe+we):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Hi.__webglTexture,It),it!==0?F.blitFramebuffer(Wt,ee,Bt,Dt,Ht,de,Bt,Dt,F.COLOR_BUFFER_BIT,F.NEAREST):ve?F.copyTexSubImage3D(Ft,It,Ht,de,Oe+we,Wt,ee,Bt,Dt):F.copyTexSubImage2D(Ft,It,Ht,de,Wt,ee,Bt,Dt);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ve?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ft,It,Ht,de,Oe,Bt,Dt,kt,ye,en,Te.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(Ft,It,Ht,de,Oe,Bt,Dt,kt,ye,Te.data):F.texSubImage3D(Ft,It,Ht,de,Oe,Bt,Dt,kt,ye,en,Te):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,It,Ht,de,Bt,Dt,ye,en,Te.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,It,Ht,de,Te.width,Te.height,ye,Te.data):F.texSubImage2D(F.TEXTURE_2D,It,Ht,de,Bt,Dt,ye,en,Te);T.pixelStorei(F.UNPACK_ROW_LENGTH,hn),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),T.pixelStorei(F.UNPACK_SKIP_PIXELS,Nn),T.pixelStorei(F.UNPACK_SKIP_ROWS,oi),T.pixelStorei(F.UNPACK_SKIP_IMAGES,ki),It===0&&V.generateMipmaps&&F.generateMipmap(Ft),T.unbindTexture()},this.initRenderTarget=function(R){tt.get(R).__webglFramebuffer===void 0&&at.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?at.setTextureCube(R,0):R.isData3DTexture?at.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?at.setTexture2DArray(R,0):at.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){z=0,k=0,W=null,T.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const F0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:i0,AddEquation:ms,AddOperation:of,AdditiveBlending:ao,AgXToneMapping:o0,AlphaFormat:f0,AlwaysCompare:mf,AlwaysDepth:Ca,AlwaysStencilFunc:lf,ArcCurve:Tf,ArrayCamera:Xf,BackSide:ln,BasicDepthPacking:af,Box3:os,BoxGeometry:Ae,BufferAttribute:In,BufferGeometry:Ce,ByteType:c0,Cache:ya,Camera:I0,CanvasTexture:Dc,CatmullRomCurve3:Nc,CineonToneMapping:n0,CircleGeometry:vo,ClampToEdgeWrapping:di,Color:qt,ColorManagement:ae,ConstantAlphaFactor:ef,ConstantColorFactor:ju,Controls:qf,CubeCamera:Wf,CubeDepthTexture:Ef,CubeReflectionMapping:is,CubeRefractionMapping:Ms,CubeTexture:b0,CubeUVReflectionMapping:Pr,CubicBezierCurve:T0,CubicBezierCurve3:Af,CullFaceBack:Ll,CullFaceFront:Ou,CullFaceNone:Fu,Curve:ii,CurvePath:Cf,CustomBlending:zu,CustomToneMapping:s0,CylinderGeometry:Un,Data3DTexture:Mf,DataArrayTexture:g0,DataTexture:Pc,DefaultLoadingManager:kf,DepthFormat:xi,DepthStencilFormat:ji,DepthTexture:po,DirectionalLight:U0,DoubleSide:an,DstAlphaFactor:Zu,DstColorFactor:Ku,EllipseCurve:Uc,EqualCompare:ff,EqualDepth:La,EquirectangularReflectionMapping:jo,EquirectangularRefractionMapping:xa,Euler:vi,EventDispatcher:Bi,ExternalTexture:w0,ExtrudeGeometry:Lr,Float32BufferAttribute:se,FloatType:kn,Fog:Cc,FrontSide:Qn,Frustum:Lc,GLSL3:Ul,GreaterCompare:df,GreaterDepth:Ia,GreaterEqualCompare:Ac,GreaterEqualDepth:Da,Group:fe,HalfFloatType:ei,HemisphereLight:L0,IcosahedronGeometry:ys,ImageLoader:Hf,ImageUtils:xf,InstancedBufferAttribute:Nl,InstancedMesh:Oi,IntType:vc,InterleavedBuffer:yf,InterleavedBufferAttribute:yr,KeepStencilOp:Ma,Layers:_0,LessCompare:uf,LessDepth:Pa,LessEqualCompare:Tc,LessEqualDepth:co,Light:Bc,LightShadow:D0,LineCurve:A0,LineCurve3:Rf,LinearFilter:je,LinearMipmapLinearFilter:Qi,LinearMipmapNearestFilter:va,LinearSRGBColorSpace:_r,LinearToneMapping:t0,LinearTransfer:xr,Loader:Oc,LoadingManager:zf,MOUSE:Ui,Material:rs,MathUtils:ce,Matrix2:kl,Matrix3:Qt,Matrix4:Se,MaxEquation:Vu,Mesh:he,MeshBasicMaterial:Vn,MeshDepthMaterial:Of,MeshDistanceMaterial:Bf,MeshLambertMaterial:ie,MeshPhongMaterial:cr,MinEquation:Gu,MirroredRepeatWrapping:lo,MixOperation:sf,MultiplyBlending:Il,MultiplyOperation:Cr,NearestFilter:Ze,NearestMipmapLinearFilter:ko,NearestMipmapNearestFilter:rf,NeutralToneMapping:r0,NeverCompare:hf,NeverDepth:Ra,NoBlending:pi,NoColorSpace:Ai,NoToneMapping:jn,NormalBlending:js,NotEqualCompare:pf,NotEqualDepth:Ua,Object3D:be,ObjectSpaceNormalMap:cf,OneFactor:Xu,OneMinusConstantAlphaFactor:nf,OneMinusConstantColorFactor:tf,OneMinusDstAlphaFactor:$u,OneMinusDstColorFactor:Ju,OneMinusSrcAlphaFactor:jl,OneMinusSrcColorFactor:Yu,OrthographicCamera:zc,PCFShadowMap:Qo,PCFSoftShadowMap:Bu,PMREMGenerator:Hl,Path:Fl,PerspectiveCamera:Qe,Plane:hi,PlaneGeometry:ni,PointLight:Vf,PolyhedronGeometry:Ic,QuadraticBezierCurve:R0,QuadraticBezierCurve3:C0,Quaternion:Fi,R11_EAC_Format:Ga,RED_GREEN_RGTC2_Format:mr,RED_RGTC1_Format:cc,REVISION:xc,RG11_EAC_Format:pr,RGBAFormat:Hn,RGBAIntegerFormat:Ec,RGBA_ASTC_10x10_Format:nc,RGBA_ASTC_10x5_Format:ja,RGBA_ASTC_10x6_Format:tc,RGBA_ASTC_10x8_Format:ec,RGBA_ASTC_12x10_Format:ic,RGBA_ASTC_12x12_Format:sc,RGBA_ASTC_4x4_Format:Xa,RGBA_ASTC_5x4_Format:qa,RGBA_ASTC_5x5_Format:Ya,RGBA_ASTC_6x5_Format:Za,RGBA_ASTC_6x6_Format:$a,RGBA_ASTC_8x5_Format:Ka,RGBA_ASTC_8x6_Format:Ja,RGBA_ASTC_8x8_Format:Qa,RGBA_BPTC_Format:oc,RGBA_ETC2_EAC_Format:Ha,RGBA_PVRTC_2BPPV1_Format:Ba,RGBA_PVRTC_4BPPV1_Format:Oa,RGBA_S3TC_DXT1_Format:er,RGBA_S3TC_DXT3_Format:nr,RGBA_S3TC_DXT5_Format:ir,RGBFormat:d0,RGB_BPTC_SIGNED_Format:rc,RGB_BPTC_UNSIGNED_Format:ac,RGB_ETC1_Format:za,RGB_ETC2_Format:ka,RGB_PVRTC_2BPPV1_Format:Fa,RGB_PVRTC_4BPPV1_Format:Na,RGB_S3TC_DXT1_Format:tr,RGFormat:ss,RGIntegerFormat:wc,RawShaderMaterial:Ff,Ray:y0,RedFormat:yc,RedIntegerFormat:bc,ReinhardToneMapping:e0,RenderTarget:vf,RepeatWrapping:dr,ReverseSubtractEquation:Hu,SIGNED_R11_EAC_Format:Va,SIGNED_RED_GREEN_RGTC2_Format:hc,SIGNED_RED_RGTC1_Format:lc,SIGNED_RG11_EAC_Format:Wa,SRGBColorSpace:Je,SRGBTransfer:pe,Scene:x0,ShaderChunk:jt,ShaderLib:$n,ShaderMaterial:Tn,Shape:Fc,ShapeUtils:Li,ShortType:l0,Sphere:xo,SphereGeometry:yn,Spherical:zl,SplineCurve:P0,Sprite:wf,SpriteMaterial:S0,SrcAlphaFactor:Ql,SrcAlphaSaturateFactor:Qu,SrcColorFactor:qu,StaticDrawUsage:p0,SubtractEquation:ku,SubtractiveBlending:Dl,TOUCH:fi,TangentSpaceNormalMap:gr,Texture:$e,TextureLoader:Gf,TextureSource:Rc,TorusGeometry:gi,Triangle:Ln,TubeGeometry:Dr,UVMapping:a0,Uint16BufferAttribute:v0,Uint32BufferAttribute:M0,UniformsLib:Pt,UniformsUtils:Nf,UnsignedByteType:wn,UnsignedInt101111Type:u0,UnsignedInt248Type:uo,UnsignedInt5999Type:h0,UnsignedIntType:ti,UnsignedShort4444Type:Mc,UnsignedShort5551Type:Sc,UnsignedShortType:ho,VSMShadowMap:Js,Vector2:vt,Vector3:O,Vector4:Pe,WebGLCoordinateSystem:Jn,WebGLCubeRenderTarget:N0,WebGLRenderTarget:Gn,WebGLRenderer:ed,WebGLUtils:jf,WebGPUCoordinateSystem:fo,WebXRController:Sa,ZeroFactor:Wu,createCanvasElement:gf,error:le,log:Mr,warn:Zt,warnOnce:_s},Symbol.toStringTag,{value:"Module"})),Yh={type:"change"},O0={type:"start"},nd={type:"end"},aa=new y0,Zh=new hi,G3=Math.cos(70*ce.DEG2RAD),ke=new O,Mn=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ml=1e-6;class V3 extends qf{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Fi,this._lastTargetPosition=new O,this._quat=new Fi().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zl,this._sphericalDelta=new zl,this._scale=1,this._panOffset=new O,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new O,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X3.bind(this),this._onPointerDown=W3.bind(this),this._onPointerUp=q3.bind(this),this._onContextMenu=j3.bind(this),this._onMouseWheel=$3.bind(this),this._onKeyDown=K3.bind(this),this._onTouchStart=J3.bind(this),this._onTouchMove=Q3.bind(this),this._onMouseDown=Y3.bind(this),this._onMouseMove=Z3.bind(this),this._interceptControlDown=t_.bind(this),this._interceptControlUp=e_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ge.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yh),this.update(),this.state=ge.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Mn:n>Math.PI&&(n-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=ke.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(aa.origin.copy(this.object.position),aa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(aa.direction))<G3?this.object.lookAt(this.target):(Zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),aa.intersectPlane(Zh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ml||this._lastTargetPosition.distanceToSquared(this.target)>Ml?(this.dispatchEvent(Yh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Mn/60*this.autoRotateSpeed*t:Mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ke.copy(s).sub(this.target);let o=ke.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function W3(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function X3(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function q3(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nd),this.state=ge.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Y3(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ge.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(O0)}function Z3(i){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $3(i){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(i.preventDefault(),this.dispatchEvent(O0),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nd))}function K3(i){this.enabled!==!1&&this._handleKeyDown(i)}function J3(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ge.TOUCH_ROTATE;break;case fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ge.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(O0)}function Q3(i){switch(this._trackPointer(i),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ge.NONE}}function j3(i){this.enabled!==!1&&i.preventDefault()}function t_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{clamp:B0,lerp:Bn,smoothstep:ci}=ce;function Ye(i,t,e){let n=null,s=0;for(let o=1;o<e.length;o++){const[r,a]=e[o-1],[l,c]=e[o],h=l-r,f=c-a,u=Math.hypot(h,f);if(u<.01)continue;const d=B0(((i-r)*h+(t-a)*f)/u,0,u),m=r+h*d/u,_=a+f*d/u,g=Math.hypot(i-m,t-_);if(!n||g<n.distance){const p=-f/u,v=h/u;n={x:m,z:_,nx:p,nz:v,offset:(i-m)*p+(t-_)*v,run:s+d,distance:g}}s+=u}return n&&{...n,length:s}}function lr(i,t=0){return[Math.min(...i.map(([e])=>e))-t,Math.min(...i.map(([,e])=>e))-t,Math.max(...i.map(([e])=>e))+t,Math.max(...i.map(([,e])=>e))+t]}function Sl([i,t,e,n],[s,o,r,a]){return i<r&&e>s&&t<a&&n>o}function ca(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function Xs(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([Bn(s[0],o[0],l),Bn(s[1],o[1],l)])}}return e}function n_(i){const t=i.edge,[e,n]=t[0],[s,o]=t.at(-1),r=Math.hypot(s-e,o-n),a=(s-e)/r,l=(o-n)/r,c=(d,m)=>(d-e)*a+(m-n)*l,h=t.slice(1).map((d,m)=>{const _=t[m],[g,p]=_,[v,M]=d,x=Math.hypot(v-g,M-p),S=c(g,p),b=c(v,M);return{a:_,b:d,span:x,start:S,end:b,offset:(y,w)=>((y-g)*(p-M)+(w-p)*(v-g))/x,bounds:lr([_,d],.005)}}),f=lr(t,i.reach??95),u=lr(t,.01);return{...i,length:r,station:c,segments:h,range:f,crestBounds:u}}function yl(i,t,e){const n=i.station(t,e);if(n<-.001||n>i.length+.001)return null;const s=i.segments.find(({end:f})=>n<=f+.001)??i.segments.at(-1),{a:o,b:r,offset:a,start:l,end:c}=s,h=B0((n-l)/(c-l),0,1);return{offset:a(t,e),upper:Bn(o[2],r[2],h),lower:Bn(o[3],r[3],h)}}function i_(i){const t=[];for(const e of i){if(!e.edge||e.edge.length<2)continue;const n={...e,upperDecks:e.upperDeck?[e.upperDeck]:[],lowerDecks:e.lowerDeck?[e.lowerDeck]:[]},s=t.at(-1);if(!s||s.soft||n.soft||s.edge.at(-1).some((o,r)=>Math.abs(o-n.edge[0][r])>.01)){t.push(n);continue}s.edge=[...s.edge,...n.edge.slice(1)],s.shore=[...s.shore,...n.shore.slice(1)],s.breaks=[...s.breaks??[],...n.breaks??[]],s.upperDecks.push(...n.upperDecks),s.lowerDecks.push(...n.lowerDecks),s.flatInland=Math.max(s.flatInland??10,n.flatInland??10),s.blendInland=Math.max(s.blendInland??50,n.blendInland??50),s.endFade=n.endFade}return t}function s_(i){const t=i_(i).map(n_),e=i.filter(({beach:g})=>g?.length>1).map(g=>({...g,range:lr(g.beach,g.reach??100)})),n=i.flatMap(g=>g.paths??[]),s=Object.assign({},...i.map(g=>g.upperIds)),o=Object.assign({},...i.map(g=>g.lowerIds)),r=Object.assign({},...i.map(g=>g.stairs)),a=Object.assign({},...i.map(g=>g.ramps)),l=Object.assign({},...i.map(g=>g.stairWidths)),c=Object.assign({},...i.map(g=>g.stairRun)),h=new Set(i.flatMap(g=>g.underDeckIds??[])),f=[...t,...e].map(g=>g.range);function u(g,p,v,M){const x=M?[M.section]:t;for(const S of x){if(!ca(g,p,S.range))continue;const b=yl(S,g,p);if(!b||b.offset<-(S.reach??95)||b.offset>52)continue;const E=Ye(g,p,S.shore??[]),y=S.shoreRise??(S.soft?6.5:3.6),w=S.station(g,p),A=S.startFade??(S.soft?S.fade??12:11),P=S.endFade??(S.soft?S.fade??12:15),D=A?ci(w,0,A):1,C=P?1-ci(w,S.length-P,S.length):1,L=D*C,U=E?Bn(.18,b.lower,ci(E.distance,0,y)):b.lower;if(S.soft){const k=ci(b.offset,-(S.slopeWidth??18),0),W=1-ci(b.offset,10,50);return Bn(v,Bn(U,b.upper,k),L*W)}if(M?.section===S?M.upper:b.offset>=0){const k=1-ci(Math.max(0,b.offset),S.flatInland??10,S.blendInland??50);return Bn(v,b.upper,k*L)}if(!(E&&E.distance>(S.maxShoreDistance??105)))return Bn(v,U,L)}for(const S of e){if(!ca(g,p,S.range))continue;const b=Ye(g,p,S.beach),E=Ye(g,p,S.shore);if(!b||!E||b.distance>(S.reach??100))continue;const y=Math.max(6,Ye(b.x,b.z,S.shore)?.distance??20);let w=0,A=S.beach[0][2];for(let C=1;C<S.beach.length;C++){const L=S.beach[C-1],U=S.beach[C],z=Math.hypot(U[0]-L[0],U[1]-L[1]);if(b.run<=w+z+.01){A=Bn(L[2],U[2],B0((b.run-w)/z,0,1));break}w+=z}const P=ci(b.run,0,12)*(1-ci(b.run,b.length-30,b.length)),D=1-ci(b.offset,12,55);return Bn(v,Bn(.18,A,ci(E.distance,0,y)),P*D)}return v}function d(g){const p=lr(g);for(const v of t){let E=function(y,w){y.length>=3&&b.push({ring:y,side:w})};if(v.soft||!Sl(p,v.crestBounds))continue;const{station:M,length:x}=v;if(!v.segments.filter(y=>Sl(p,y.bounds)).some(y=>{const w=g.map(([A,P])=>y.offset(A,P));return Math.min(...w)<=1e-7&&Math.max(...w)>=-1e-7}))continue;const b=[];E(Xs(g,([y,w])=>-M(y,w)));for(const y of v.segments){const{start:w,end:A,offset:P}=y;let D=Xs(g,([C,L])=>M(C,L)-w);D=Xs(D,([C,L])=>A-M(C,L)),!(D.length<3)&&(E(Xs(D,([C,L])=>P(C,L)),{section:v,upper:!0}),E(Xs(D,([C,L])=>-P(C,L)),{section:v,upper:!1}))}return E(Xs(g,([y,w])=>M(y,w)-x)),b}return null}function m(g,p){return t.some(v=>!v.soft&&ca(g,p,v.range)&&Math.abs(yl(v,g,p)?.offset??1/0)<7)}function _(g,p,v){for(const M of t){if(!ca(g,p,M.range))continue;const x=yl(M,g,p);if(x&&Math.abs(x.offset)<36)return x.lower}return v}return{sections:t,extras:n,upperWidths:s,lowerWidths:o,stairLevels:r,rampLevels:a,stairWidths:l,stairRuns:c,deckRoofs:h,apply:u,split:d,nearEdge:m,lowerGrade:_,refines:(g,p,v)=>f.some(M=>Sl([g,p,g+v,p+v],M))}}const Vo=Object.freeze({west:-647,east:-125,north:-138,south:129,innerWest:-624,innerEast:-144,innerNorth:-107,innerSouth:104}),Zi=i=>i.toFixed(1),{west:o_,east:r_,north:a_,south:c_,innerWest:l_,innerEast:h_,innerNorth:u_,innerSouth:f_}=Vo,z0=`
  float cartoonDistrict(vec2 worldXZ) {
    // The harbour curves north at the Ocean end of the promenade.
    float harbourBend = 61.0 * (1.0 - smoothstep(-595.0, -500.0, worldXZ.x));
    vec2 fromWestNorth = smoothstep(
      vec2(${Zi(o_)}, ${Zi(a_)} - harbourBend),
      vec2(${Zi(l_)}, ${Zi(u_)} - harbourBend), worldXZ);
    vec2 fromEastSouth = 1.0 - smoothstep(
      vec2(${Zi(h_)}, ${Zi(f_)}),
      vec2(${Zi(r_)}, ${Zi(c_)}), worldXZ);
    return fromWestNorth.x * fromWestNorth.y * fromEastSouth.x * fromEastSouth.y;
  }
`,Gc={cartoonEnabled:{value:1}};function d_(i){Gc.cartoonEnabled.value=i?1:0}const $h={plaster:{tile:"plaster",size:[2.9,2.9],grain:.63,tint:"#ebc190",palette:.3},stone:{tile:"stone",size:[3.3,2.05],grain:.67,tint:"#caa36b",palette:.18},paving:{tile:"stone",size:[3.3,3.3],grain:.39,tint:"#dfc59c",palette:.17},laidPaving:{tile:"plaster",size:[2.6,2.6],grain:.65,tint:"#e5c8a0",palette:.25},roof:{tile:"terracotta",size:[2.45,1.45],grain:.5,tint:"#bd6243",palette:.22},flatRoof:{tile:"plaster",size:[5.1,5.1],grain:.44,tint:"#c9bc9f",palette:.12},foliage:{tile:"leaves",size:[2.3,2.3],grain:.79,tint:"#7ea72f",palette:.52},glass:{tile:"plaster",size:[4,3],grain:.16,tint:"#4e7881",palette:.38},wood:{tile:"plaster",size:[1.2,3.5],grain:.53,tint:"#94663c",palette:.14},metal:{tile:"plaster",size:[3.5,3.5],grain:.17,tint:"#ad9d86",palette:.09},ground:{tile:"plaster",size:[8.2,8.2],grain:.53,tint:"#d8b97e",palette:.2},road:{tile:"plaster",size:[4.3,4.3],grain:.33,tint:"#918780",palette:.23}},p_={plaster:.694,stone:.568,terracotta:.271,leaves:.232},bl=new Map,Kh=new WeakSet;function id(i){if(bl.has(i))return bl.get(i);const t={value:0},e=`./art/waterfront-${i}.webp`,n=new Gf().load(e,()=>{t.value=1});n.colorSpace=Je,n.wrapS=lo,n.wrapT=i==="terracotta"?dr:lo,n.anisotropy=4;const s={texture:n,ready:t};return bl.set(i,s),s}function m_(){if(typeof document>"u")return{waterPigment:{value:null},waterPigmentReady:{value:0}};const i=id("water");return{waterPigment:{value:i.texture},waterPigmentReady:i.ready}}function So(i,{surface:t="plaster",strength:e=1}={}){if(Kh.has(i)||typeof document>"u")return i;Kh.add(i);const{tile:n,size:s,grain:o,tint:r,palette:a}=$h[t]??$h.plaster,l=id(n),c=i.onBeforeCompile,h=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${h}|anapa-paint|${t}|${e}`,i.onBeforeCompile=function(f,u){c.call(this,f,u),Object.assign(f.uniforms,Gc,{pigment:{value:l.texture},pigmentReady:l.ready,pigmentMean:{value:p_[n]},pigmentPeriod:{value:new vt(...s)},pigmentTint:{value:new qt(r)},pigmentPalette:{value:a},pigmentGrain:{value:o},pigmentStrength:{value:e}}),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
        ${z0}
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
      `)},i.needsUpdate=!0,i}const sd="#526e7c",g_="#f0eee6";function _e(i,t,{surface:e="plaster",surfaces:n={}}={}){const s=new Map,o=new Map([[sd,"glass"]]);for(const[d,m]of Object.entries(n))for(const _ of m)o.set(_,d);const r=new fe;r.name=t,i.add(r);function a(d,m,_){const g=o.get(d)??m;s.has(g)||s.set(g,new Map);const p=s.get(g);p.has(d)||p.set(d,[]);const v=p.get(d);for(let M=2;M<_.length;M++)v.push(..._[0],..._[M-1],..._[M])}function l(d,...m){a(d,e,m)}function c(d,m,_){const g=d.map(([p,v])=>new vt(p,v));for(const[p,v,M]of Li.triangulateShape(g,[])){const[x,S,b]=[g[p],g[v],g[M]],y=(S.x-x.x)*(b.y-x.y)-(S.y-x.y)*(b.x-x.x)>0?[x,b,S]:[x,S,b];a(_,"paving",y.map(({x:w,y:A})=>[w,m,A]))}}function h(d,m,_,g,p){l(p,[d[0],_,d[1]],[m[0],_,m[1]],[m[0],g,m[1]],[d[0],g,d[1]])}function f(d,m,_,g,p=g){const v=d.reduce((M,[x,S],b)=>{const[E,y]=d[(b+1)%d.length];return M+x*y-E*S},0);d.forEach((M,x)=>{const S=d[(x+1)%d.length];v>0?h(S,M,m,_,g):h(M,S,m,_,g)}),p&&c(d,_,p)}function u(d,m,_,g){const p=new O(...d),v=new O(...m),M=v.clone().sub(p).normalize(),S=(Math.abs(M.z)<.9?new O(0,0,1):new O(1,0,0)).cross(M).normalize().multiplyScalar(_/2),b=M.clone().cross(S),E=[p,v].map(y=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([w,A])=>y.clone().addScaledVector(S,w).addScaledVector(b,A).toArray()));for(let y=0;y<4;y++){const w=(y+1)%4;a(g,"metal",[E[0][y],E[1][y],E[1][w],E[0][w]])}a(g,"metal",E[0]),a(g,"metal",E[1].reverse())}return{face:l,flat:c,wall:h,shell:f,beam:u,finish(){for(const[d,m]of s)for(const[_,g]of m){const p=new Ce;p.setAttribute("position",new se(g,3)),p.computeVertexNormals();const v=So(new ie({color:_,side:an}),{surface:d}),M=new he(p,v);M.castShadow=!0,M.receiveShadow=!0,r.add(M)}}}}function xt(i,t,e){return i.map((n,s)=>ce.lerp(n,t[s],e))}function Le(i){return i.reduce(([t,e],[n,s])=>[t+n/i.length,e+s/i.length],[0,0])}function En(i,t,e,n,s,o,r,a=g_){const l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=Math.max(1,Math.round(l/r));for(let h=0;h<c;h++){const f=xt(n,xt(t,e,(h+.035)/c),1.003),u=xt(n,xt(t,e,(h+.965)/c),1.003);i.wall(f,u,s,o,sd),i.wall(u,xt(n,xt(t,e,(h+1)/c),1.003),s,o,a)}}function __(i,t,e,n){const s=new be;s.position.set(t,e+3.98,n),s.userData.nightLight={color:"#ffcc88",intensity:27,range:9,ground:e},i.add(s)}function x_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.48)"),e.addColorStop(.28,"rgba(255,255,255,0.22)"),e.addColorStop(.63,"rgba(255,255,255,0.05)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new S0({map:new Dc(i),color:"#ffc47a",opacity:.78,blending:ao,depthWrite:!1,toneMapped:!1})}function v_(){const i=new he(new yn(1,32,16),new Tn({side:ln,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{zenith:{value:new qt("#45567f")},horizon:{value:new qt("#9da8c7")},twilight:{value:new qt("#d3a699")}},vertexShader:`
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
    `}));return i.scale.setScalar(1500),i.frustumCulled=!1,i.renderOrder=-100,i}function M_(i,t){const e=[],n=[];for(const{position:{x:c,z:h},ground:f}of i){let u=function(m,_){const g=_*Math.PI*2/20,p=m/5,v=c+p*7.4*Math.cos(g),M=h+p*7.4*Math.sin(g),x=t(v,M),S=1-Math.min(1,Math.max(0,(Math.abs(x-f)-.28)/.72)),b=Math.min(f+.9,Math.max(f-.9,x))+.215;return[v,b,M,(1-p*p)**3*S]},d=function(...m){if(m.some(_=>_[3]>0))for(const[_,g,p,v]of m)e.push(_,g,p),n.push(v)};for(let m=0;m<5;m++)for(let _=0;_<20;_++){const g=u(m,_),p=u(m,_+1),v=u(m+1,_),M=u(m+1,_+1);m&&d(g,p,v),d(p,M,v)}}const a=new Ce;a.setAttribute("position",new se(e,3)),a.setAttribute("lampStrength",new se(n,1));const l=new Tn({side:an,transparent:!0,depthWrite:!1,blending:ao,vertexShader:`
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
    `});return new he(a,l)}function S_(i,t){const e=[],n=[];i.updateMatrixWorld(!0),i.traverse(f=>{const{setEvening:u,nightLight:d}=f.userData;u&&e.push(u),d&&n.push({...d,position:f.getWorldPosition(new O)})});const s=n.filter(f=>f.ground!==void 0),o=new fe;o.name="Вечерний свет";const r=v_();if(o.add(r),s.length&&(o.add(M_(s,t)),typeof document<"u")){const f=x_();for(const{position:u}of s){const d=new wf(f);d.position.copy(u),d.scale.set(2.5,2.5,1),o.add(d)}}const a=Array.from({length:5},()=>{const f=new Vf("#fff",0,9,2);return o.add(f),f});i.add(o);const l=new O(1/0,1/0,1/0);let c=!1;function h(f){if(!c||(r.position.copy(f.position),l.distanceToSquared(f.position)<1.5))return;l.copy(f.position);const{x:u,y:d,z:m}=l,g=d-t(u,m)<26?n.map(p=>({source:p,distance:p.position.distanceToSquared(l)})).filter(({distance:p})=>p<33**2).sort((p,v)=>p.distance-v.distance):[];a.forEach((p,v)=>{const M=g[v]?.source;p.intensity=M?.intensity??0,M&&(p.position.copy(M.position),p.color.set(M.color),p.distance=M.range)})}return{setEnabled(f){c=f,o.visible=c,l.set(1/0,1/0,1/0),e.forEach(u=>u(c))},update:h}}function wl(i,t,e,n=10){return Array.from({length:n},(s,o)=>{const r=o*Math.PI*2/n;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function od(i,t,{name:e,lights:n,planters:s}){const o="#878887",r="#646765",a=_e(i,e,{surfaces:{metal:[o,r],stone:["#d8d4c7"],ground:["#8c7e60"]}}),l=new Oi(new yn(.23,10,7),new ie({color:"#eddaa4"}),n.length*4),c=new Oi(new ys(1,1),So(new ie({color:"#607a45"}),{surface:"foliage"}),s.length*7);l.name="Плафоны верхней набережной",l.userData.setEvening=f=>{l.material.emissive.set(f?"#ffc37a":"#000"),l.material.emissiveIntensity=f?1.34:0},c.name="Кустарники в клумбах набережной";const h=new be;n.forEach(([f,u],d)=>{const m=t(f,u)+.03;__(i,f,m,u),a.shell(wl(f,u,.3),m-.13,m+.35,o),a.shell(wl(f,u,.19),m+.32,m+3.72,o);for(const _ of[.44,.68,3.55,3.7])a.shell(wl(f,u,.25),m+_,m+_+.1,r);for(let _=0;_<4;_++){const g=Math.PI/4+_*Math.PI/2,p=Math.cos(g),v=Math.sin(g),M=[f+p*.46,m+3.77,u+v*.46];a.beam([f+p*.1,m+3.49,u+v*.1],M,.075,r),h.position.set(M[0],M[1]+.19,M[2]),h.updateMatrix(),l.setMatrixAt(d*4+_,h.matrix)}}),s.forEach(({x:f,z:u,width:d,depth:m,angle:_},g)=>{const p=(x,S)=>[f+x*Math.cos(_)-S*Math.sin(_),u+x*Math.sin(_)+S*Math.cos(_)],v=(x,S)=>[[-x,-S],[x,-S],[x,S],[-x,S]].map(b=>p(...b)),M=t(f,u);a.shell(v(d/2,m/2),M-.1,M+.16,"#d8d4c7"),a.flat(v(d/2-.17,m/2-.17),M+.175,"#8c7e60");for(let x=0;x<7;x++){const[S,b]=p((x-3)*d/7.8,x%2?-.45:.52);h.position.set(S,M+.53,b);const E=.52+x%3*.17;h.scale.set(E,.5+x%2*.26,E*.84),h.rotation.y=x*1.8,h.updateMatrix(),c.setMatrixAt(g*7+x,h.matrix)}}),l.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,i.add(l,c),a.finish()}const $s={front:[[-549.25,-30.85],[-517.3,-24.44]],depth:9.15,grade:9.03},y_=[{soft:!0,edge:[[-1194.65,-.88,7.9,2.35],[-1188.5,-6.93,8.7,2.35],[-1176.23,-13.69,9.8,2.35],[-1157.84,-21.72,11.8,2.35],[-1124.63,-25.52,12.3,2.35],[-1073.23,-30.79,12.65,2.35],[-1033.68,-39.87,13.25,2.35],[-982.49,-49.59,13.9,2.35],[-926.44,-60.99,13.15,2.4],[-878.85,-73.87,12.1,2.4],[-852,-77.5,11,2.4],[-830.48,-78.2,8.65,2.4]],shore:[[-1195,-24],[-1186.4,-36.11],[-1161.69,-54.98],[-1142.57,-67.42],[-1119.74,-82.36],[-1095.11,-100.63],[-1060.66,-124.59],[-1054.64,-114.35],[-1036.42,-110.13],[-995.48,-107.91],[-965.35,-114.27],[-903.18,-133.53],[-868.87,-118.74],[-830.48,-132]],upperIds:{1293020296:7},lowerIds:{},stairs:{}},{soft:!0,slopeWidth:10.8,shoreRise:1.5,fade:0,edge:[[-830.48,-78.2,8.65,2.4],[-820.6,-84.1,6.7,2.4],[-806.05,-90.4,5.7,2.45],[-783.75,-94.4,4.6,2.45],[-753.37,-97.1,3.65,2.45],[-742.87,-98.3,3.45,2.45],[-728.5,-94.3,4.15,2.45],[-696.91,-88.7,5.45,2.45],[-673.68,-83.1,6.45,2.5],[-658.2,-79.35,6.8,2.5],[-641.17,-75.3,7.1,2.5],[-638.31,-66,7.65,2.5],[-605.95,-55.15,8.5,2.55],[-595.02,-59.9,8.8,2.6]],shore:[[-830.48,-132],[-827,-183.4],[-783.08,-190.76],[-774.16,-192.09],[-729.85,-199.2],[-709.27,-201.43],[-646.49,-232.7],[-636.97,-260.15],[-623.68,-157.59],[-595.02,-144]],lowerDeck:[[-826,-133],[-837,-178],[-783,-187],[-739,-193],[-728,-190],[-715,-191],[-697,-176],[-682,-150],[-659,-139],[-662,-109],[-704,-103],[-740,-100],[-779,-101],[-813,-103],[-825,-114]],upperIds:{596938944:4.2,178479537:3.2},lowerIds:{},stairs:{596938943:[8.65,6.7]},stairWidths:{596938943:2.5}},{fade:0,edge:[[-595.02,-59.9,8.8,2.6],[-587.5,-63.5,8.8,2.6],[-576,-56.7,9.05,2.6],[-559,-50.3,9.15,2.6],[-550,-46,9.1,2.6],[-531.8,-47.6,9.04,2.6],[-525.5,-50.1,9,2.6],[-519.4,-61.2,8.96,2.6],[-501.2,-54.2,8.82,2.6],[-485.4,-49,8.71,2.6],[-480.1,-48.6,8.66,2.6],[-447.5,-40.1,8.5,2.6],[-416,-34.55,8.3,2.6],[-410.5,-34.1,8.28,2.6],[-380,-29.6,8.12,2.6],[-372,-29,8.07,2.6],[-350,-29.15,7.98,2.6],[-320,-29,7.9,2.6],[-300,-32,7.8,2.6]],shore:[[-595.02,-144],[-573.37,-123.91],[-563.51,-116.13],[-552.8,-94],[-534.2,-89],[-490,-73.3],[-467.6,-82.1],[-442.59,-61.36],[-405.47,-52.91],[-397.91,-61.01],[-379.03,-54.91],[-372.9,-48.36],[-320.33,-44.46],[-300,-47.3]],upperIds:{178484904:11,701760799:3.45},lowerIds:{701760797:5.2},underDeckIds:["223948923","223948927","223948934","223948896","223948899","223948902","223948903","223948904","223948906","223948908"],upperDeck:[[-595.02,-59.9],[-587.5,-63.5],[-576,-56.7],[-559,-50.3],[-550,-46],[-531.8,-47.6],[-525.5,-50.1],[-519.4,-61.2],[-501.2,-54.2],[-485.4,-49],[-480.1,-48.6],[-447.5,-40.1],[-416,-34.55],[-410.5,-34.1],[-380,-29.6],[-372,-29],[-350,-29.15],[-320,-29],[-300,-32],[-300,2.5],[-314,1.7],[-365,-.3],[-394,-.6],[-419,-4.4],[-455,-13.2],[-477,-19.4],[-515,-27.5],[-549,-34.8],[-595,-47.1]],stairs:{701760798:[2.6,5]},stairWidths:{701760798:2.25},ramps:{701760799:[5,8.8]},breaks:[[-589,-62.9,4.2]]}],b_=[[-515.4,-54.6],[-507,-52.4],[-498.1,-49.9],[-488.9,-46.8],[-479.9,-44.6],[-473.2,-42.7],[-463.8,-40.8],[-456.4,-39.3],[-447.3,-37.4],[-441.7,-36.2],[-436.7,-36],[-430.1,-34.8],[-423.4,-34],[-372.9,-24.5],[-364.9,-24.3],[-356.7,-24.9],[-348.5,-24.3],[-339.6,-24.7]],w_=[{x:-512.2,z:-44.4,width:7.2,depth:2.15,angle:.27},{x:-461.1,z:-30.3,width:11.1,depth:2,angle:.17},{x:-442.5,z:-26.9,width:6.1,depth:2.1,angle:.2},{x:-426.2,z:-23.1,width:7.9,depth:2.2,angle:.18}];function E_(i,t){od(i,t,{name:"Верхняя набережная · фонари и клумбы",lights:b_,planters:w_})}const T_=[{edge:[[-300,-32,7.8,2.6],[-284,-34,7.75,2.6],[-267,-37.5,7.65,2.6],[-246,-43,7.55,2.6],[-240,-42,7.5,2.6],[-236,-29,7.42,2.6],[-228,-19,7.35,2.6],[-218,-7,7.25,2.6]],shore:[[-300,-47.3],[-289.6,-48.8],[-177.1,-87.5],[-161.9,-92.7]],upperDeck:[[-300,-32],[-284,-34],[-267,-37.5],[-246,-43],[-240,-42],[-236,-29],[-228,-19],[-218,-7],[-221,3],[-248,4],[-279,3],[-300,3]],upperIds:{178484904:11},lowerIds:{701760797:5.2,121213094:7.2},underDeckIds:["223948913","223948916"],stairs:{597090335:[7.25,5.97],597090341:[3.25,1.1]},stairWidths:{597090335:13.2,597090341:5.4},stairRun:{597090335:[.09,.36]},ramps:{121213094:[5.97,3.25],"701760797-approach":[3.88,2.6]},paths:[{id:"701760797-approach",points:[[-171.1,-33],[-199.26,-67.75]],width:5.2,level:"lower",replaceStartOf:"701760797"}],breaks:[[-218,-7,4]],flatInland:30,blendInland:52,fade:0},{beach:[[-224.06,-6.35,7.25],[-211.83,-6.43,5.97],[-171.1,-33,3.88],[-159.07,-41.45,3.25],[-144.56,-51.21,1.1],[-81.57,-93.77,1.4],[-39.04,-127.25,1.62],[-.76,-159.34,1.82],[25.53,-190.84,1.95],[71.71,-243.52,2.1],[152.59,-369.21,2.15],[173.74,-356.54,2.2],[184.72,-355.26,2.22],[200.31,-357.98,2.23],[218.09,-367.72,2.25],[238.68,-386.95,2.28],[248.36,-396.07,2.35],[217.53,-444.44,2.24],[252.43,-514.76,2.14],[274.46,-559.15,2.05],[283.14,-576.63,2.03],[323,-654.46,1.98]],shore:[[-177.1,-87.5],[-161.9,-92.7],[-53.6,-178.4],[-34.6,-198.7],[31.6,-303.9],[50.4,-343.6],[84.5,-417.2],[123.2,-492],[197.2,-622.5],[224.45,-686]],lowerIds:{597090338:6.5,121159650:7.5,178302326:5.7},stairs:{851920304:[3,2.28]}}],A_=[[-295.8,-26.2],[-288.7,-27.1],[-281.6,-28.1],[-272.7,-29.1],[-265.8,-30.2],[-257.3,-31.1],[-250.1,-32.8],[-244.6,-33.7]];function R_(i,t){od(i,t,{name:"Фонари у Алых парусов",lights:A_,planters:[]})}const{clamp:C_,lerp:fn,smoothstep:Me}=ce;function El(i){return[Math.min(...i.map(([t])=>t)),Math.min(...i.map(([,t])=>t)),Math.max(...i.map(([t])=>t)),Math.max(...i.map(([,t])=>t))]}const Oo=([i,t,e,n],s)=>[i-s,t-s,e+s,n+s];function rd(i){const[t,e]=i.origin,[n,s]=i.scale,o=(N,Y)=>[(N-t)*n,(e-Y)*s],r=(N,Y,ut,st)=>[...o(N,st),...o(ut,Y)],a=r(37.2953,44.8868,37.3014,44.8932),l=r(37.2982,44.8933,37.3078,44.8984),c=r(37.3063,44.89613,37.31234,44.89775),h=i.surveyLines??{},f=h[125813146],u=h[400800619],d=h[657038813],m=h[1142991105],_=i.buildings.find(N=>N.id==="977564342")?.rings[0],g=_?.length===8?[_[7],_[6]]:null,p=s_([...y_,...T_]),v=i.landmarks.find(N=>N.id==="lighthouse")?.position,M=i.landmarks.find(N=>N.id==="port")?.position,x=r(37.303,44.8967,37.3069,44.9012),S=Oo(El($s.front),$s.depth+9),b=i.roads.find(N=>N.id==="977564885")?.points,E=b?.[0],y=new Map([["46844613",8],["1293020297",7],["1293020296",7],...Object.entries(p.upperWidths),...Object.entries(p.lowerWidths),...Object.entries(p.stairWidths)]),w=new Map([["977562764",[null,3.8]],["977562762",[3.8,1.65]],["977562763",[3.8,1.65]],["597090335",[7.25,2.6]],["597090341",[2.6,.9]],...Object.entries(p.stairLevels)]),A=new Map(p.extras.filter(N=>N.replaceStartOf).map(N=>[N.replaceStartOf,N.points.length-1])),P=[...i.roads.map(N=>A.has(N.id)?{...N,points:N.points.slice(A.get(N.id))}:N),...p.extras.map(N=>({...N,kind:N.kind??"footway"}))],D=P.filter(N=>w.has(N.id)).map(N=>({...N,width:y.get(N.id)??N.width,bounds:El(N.points)})),C=P.filter(N=>N.id in p.rampLevels).map(N=>({...N,width:y.get(N.id)??N.width,bounds:El(N.points)})),L=D.filter(N=>N.id in p.stairLevels),U=[...D,...C],z=[...L,...C],k=(N,Y,[ut,st,ht,Et])=>N>=ut&&N<=ht&&Y>=st&&Y<=Et;function W(N,Y,ut){const st=Ye(N,Y,f);if(st.distance>100)return ut(N,Y);const ht=1-Me(st.distance,49,91),Et=Me(st.run,0,36),j=1-Me(Y,a[3]-55,a[3]-12),G=v?1-Me(Math.hypot(N-v[0],Y-v[1]),85,260):0,K=fn(ut(st.x-st.nx*28,st.z-st.nz*28),22.4,G);let rt=K;if(st.offset>0){const ct=Math.max(7,Ye(st.x,st.z,u).distance),St=1.65*Me(Ye(N,Y,u).distance,0,8)+.18;rt=fn(K,St,Me(st.offset,Math.min(1.2,ct*.08),ct*.66))}else rt=fn(K,ut(N,Y),Me(-st.offset,15,42));if(g&&st.distance<48){const ct=Ye(N,Y,g),St=1-Me(ct.distance,14,23),Lt=fn(4.35,1.8,Me(ct.offset,0,10));rt=fn(rt,Math.min(rt,Lt),St)}return fn(ut(N,Y),rt,ht*Et*j)}function q(N,Y,ut){const st=Ye(N,Y,d);if(st.distance>82||st.offset<-15)return ut(N,Y);const ht=ut(st.x-st.nx*14,st.z-st.nz*14),Et=fn(ht,2.35,Me(st.offset,.5,15)),j=Me(st.run,0,40)*(1-Me(st.run,st.length-45,st.length));return fn(ut(N,Y),Et,j*(1-Me(st.distance,58,82)))}function J(N,Y,ut,st){if(f&&u&&k(N,Y,a))return W(N,Y,ut);let ht=d&&k(N,Y,l)?q(N,Y,ut):ut(N,Y);if(M&&k(N,Y,x)){const[Et,j,G,K]=x,rt=Me(Math.min(N-Et,G-N,Y-j,K-Y),2,26)*(1-Me(Y,M[1]+13,M[1]+52)),ct=fn(1.8,2.55,Me(Y,M[1]-73,M[1]+8));ht=fn(ht,ct,rt)}return p.apply(N,Y,ht,st)}function Q(N,Y){const ut=w.get(N.id);if(!ut)return null;const st=ut[0]??J(...E??N.points[0],Y),ht=ut[1];return{from:st,to:ht,run:p.stairRuns[N.id]??[0,1]}}function bt(N,Y,ut){const st=p.rampLevels[N.id];if(!st)return;const ht=Ye(Y,ut,N.points);return fn(st[0],st[1],ht.run/ht.length)}function Mt(N,Y,ut,st){let ht=J(N,Y,ut,st);if(k(N,Y,S)){const Et=Ye(N,Y,$s.front),j=Math.sqrt(Math.max(0,Et.distance**2-Et.offset**2)),G=Math.max(j,-Et.offset,Et.offset-$s.depth);ht=fn(ht,$s.grade,1-Me(G,1.8,7))}if(E&&Math.abs(N-E[0])<14&&Math.abs(Y-E[1])<14){const Et=Ye(N,Y,b);Et.distance<5&&(ht=fn(ht,J(...E,ut),1-Me(Et.distance,1.6,5)))}for(const Et of U){if(!k(N,Y,Oo(Et.bounds,Math.max(4.5,Et.width/2+2))))continue;const j=Ye(N,Y,Et.points),G=Et.width/2,K=!z.includes(Et),rt=K?4.3:G+1.6;if(j.distance>rt)continue;const ct=p.rampLevels[Et.id],{from:St,to:Lt,run:Ut}=ct?{from:ct[0],to:ct[1],run:[0,1]}:Q(Et,ut),zt=C_((j.run/j.length-Ut[0])/(Ut[1]-Ut[0]),0,1),F=fn(St,Lt,zt)-(Ut[0]===0&&Ut[1]===1?.08:.23);ht=fn(ht,F,1-Me(j.distance,K?1.65:G,rt))}return ht}function Xt(N,Y,ut){return ut.breaks?.some(([st,ht,Et])=>Math.hypot(N-st,Y-ht)<Et)||z.some(st=>k(N,Y,Oo(st.bounds,st.width/2+.5))&&Ye(N,Y,st.points).distance<st.width/2+.3)}function _t(N,Y){return z.some(ut=>k(N,Y,Oo(ut.bounds,ut.width/2+2)))}function mt(N,Y,ut){return L.some(st=>{const[ht,Et,j,G]=Oo(st.bounds,st.width/2+2);return N<j&&Y<G&&N+ut>ht&&Y+ut>Et})}function H(N,Y,ut){if(f&&u&&k(N,Y,a)){const st=Ye(N,Y,f),ht=Ye(N,Y,u),Et=(1-Me(ht.distance,5,11))*(1-Me(ut,2.2,3.8));if(Et>0)return["shingle",Et];const j=Me(st.offset,.5,4)*(1-Me(st.distance,28,43))*Me(ut,2,5.5);if(j>0)return["rockLight",j*(.74+.21*Math.sin(ut*1.7+N*.027))]}if(m&&k(N,Y,c)){const st=(1-Me(Ye(N,Y,m).distance,3.2,6.4))*(1-Me(ut,2.3,3.1));if(st>0)return["riprap",st]}if(k(N,Y,x)&&ut<7){const[st,ht,Et,j]=x;return["quay",Me(Math.min(N-st,Et-N,Y-ht,j-Y),0,24)*(1-Me(ut,4.5,7))]}return null}return{height:Mt,tone:H,stairHeight:Q,rampHeight:bt,promenadeWidths:y,gorgWater:m,allRoads:P,surveyedStairs:L,ramps:C,waterfront:p,wallOpening:Xt,nearTransition:_t,refinesStairs:mt,refines(N,Y,ut){return p.refines(N,Y,ut)||[a,l,c,x].some(([st,ht,Et,j])=>N+ut>st-18&&N<Et+18&&Y+ut>ht-18&&Y<j+18)}}}const P_=[37.294125,44.884625,37.325875,44.907375],L_=128,D_=92,I_=JSON.parse("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.9,2.4,2.9,3.4,3.7,3.9,4,4,3.9,3.9,3.9,3.9,4,3.9,3.9,4,3.9,3.6,3.1,2.7,2.5,2.5,2.7,3,3.1,2.9,2.5,1.9,1.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,2,2.5,3.1,3.6,4.1,4.4,4.6,4.4,4.2,3.9,3.8,3.8,3.8,3.8,4,4.1,4.1,3.8,3.2,2.7,2.4,2.4,2.7,3,3.1,2.9,2.4,1.7,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.6,2,2.6,3.1,3.7,4.3,4.8,5,4.9,4.6,4.3,4.1,4,3.9,3.9,4,4.2,4.3,4.1,3.6,3.1,2.9,2.9,3.1,3.2,3.2,2.7,2.1,1.4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.2,1.6,2,2.5,3,3.6,4.2,4.7,5,5,4.9,4.7,4.6,4.4,4.2,4.1,4,4.1,4.2,4.1,3.9,3.6,3.4,3.3,3.2,3.1,2.8,2.2,1.6,1.1,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2,2.4,2.9,3.4,4,4.5,4.7,4.7,4.7,4.7,4.7,4.7,4.4,4.1,3.8,3.8,3.8,3.8,3.6,3.3,3,2.7,2.4,2.2,1.8,1.3,0.9,0.7,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.2,1.6,2,2.3,2.8,3.3,3.8,4.2,4.4,4.4,4.3,4.4,4.5,4.5,4.2,3.7,3.3,3.1,3,2.9,2.5,2.1,1.7,1.4,1.2,1,0.8,0.6,0.4,0.5,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.2,1.5,1.9,2.2,2.5,2.9,3.3,3.6,3.8,3.8,3.8,3.8,3.9,3.9,3.6,3.1,2.7,2.3,2.1,1.8,1.4,1,0.7,0.5,0.4,0.4,0.4,0.5,0.5,0.6,0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.7,2.8,2.9,3,3,3.1,3.1,3.1,2.9,2.5,2.1,1.7,1.5,1.3,1,0.7,0.5,0.4,0.5,0.7,0.9,1.1,1.3,1.4,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,2,2.3,2.5,2.5,2.5,2.4,2.3,2.3,2.3,2.4,2.4,2.3,2,1.8,1.6,1.4,1.3,1.2,1,0.9,1,1.3,1.7,2.1,2.5,2.7,2.9,2.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.2,1.4,1.6,2,2.5,3,3.3,3.3,2.9,2.4,2,1.9,1.9,2,2.1,2.1,2.1,2,1.9,1.8,1.7,1.7,1.6,1.6,1.8,2.2,2.9,3.5,4,4.3,4.4,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.7,1,1.2,1.4,1.6,2,2.5,3.2,3.9,4.3,4.2,3.5,2.6,2,1.8,1.9,2.2,2.4,2.5,2.5,2.5,2.4,2.4,2.4,2.3,2.2,2.2,2.5,3,3.8,4.5,5,5.3,5.5,5.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.4,1.7,2,2.3,2.8,3.5,4.1,4.5,4.2,3.4,2.5,2,1.9,2.1,2.5,2.8,2.9,2.9,2.8,2.8,2.9,2.9,2.8,2.7,2.7,2.9,3.4,4.1,4.8,5.3,5.6,5.8,5.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.6,1.9,2.2,2.5,2.8,3.2,3.5,3.6,3.3,2.6,2.1,1.8,1.9,2.2,2.6,2.9,3,2.9,2.9,2.9,3,3,3.1,3,3,3.1,3.4,4,4.5,5.1,5.4,5.6,5.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.7,2.1,2.4,2.6,2.7,2.9,2.9,2.7,2.3,2,1.8,1.8,2,2.2,2.5,2.7,2.8,2.8,2.8,2.9,3,3.1,3.2,3.2,3.1,3.1,3.2,3.5,3.9,4.4,4.8,5.1,5.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.4,1.9,2.3,2.7,3,3,2.9,2.6,2.3,1.9,1.8,1.8,1.9,2.1,2.3,2.6,2.8,3,3.1,3.1,3.2,3.3,3.3,3.3,3.3,3.2,3.1,2.9,2.9,3.1,3.5,3.9,4.3,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,2,2.6,3.2,3.5,3.5,3.2,2.7,2.2,1.8,1.8,1.9,2.1,2.4,2.7,3.1,3.5,3.9,4.1,4.2,4.1,4,3.7,3.4,3.2,3,2.8,2.6,2.5,2.4,2.6,2.9,3.2,3.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2.2,2.8,3.4,3.6,3.5,3.1,2.5,2.1,1.8,1.9,2,2.3,2.6,3.1,3.8,4.5,5,5.3,5.2,5,4.6,4.1,3.5,3.1,2.8,2.6,2.3,2.2,2,2,2.1,2.3,2.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.4,2.9,3.2,3.2,3,2.6,2.3,2.1,2,2,2.1,2.3,2.7,3.2,3.9,4.7,5.2,5.4,5.3,5,4.6,4,3.5,3,2.6,2.3,2.1,1.9,1.7,1.6,1.7,1.8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.2,1.6,2.1,2.6,2.9,2.9,2.7,2.4,2.3,2.3,2.4,2.5,2.4,2.3,2.4,2.6,3,3.4,3.9,4.3,4.4,4.4,4.3,4.1,3.7,3.3,2.9,2.5,2.2,1.9,1.7,1.6,1.6,1.7,2,2.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.3,2.7,2.7,2.5,2.3,2.2,2.5,2.9,3.2,3.3,3.1,2.8,2.6,2.5,2.6,2.8,3,3.2,3.3,3.4,3.5,3.5,3.4,3.1,2.8,2.5,2.2,2,1.8,1.8,2,2.2,2.6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.5,1.9,2.3,2.6,2.5,2.3,2.3,2.6,3.1,3.7,4,4,3.6,3.1,2.7,2.5,2.5,2.5,2.5,2.5,2.6,2.8,3,3.1,3.1,2.9,2.7,2.5,2.4,2.4,2.4,2.5,2.7,3,3.4,3.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.3,1.7,2,2.3,2.4,2.4,2.4,2.7,3.3,4,4.4,4.3,4,3.5,3.1,2.7,2.5,2.5,2.4,2.4,2.3,2.3,2.5,2.7,2.8,2.8,2.7,2.7,2.7,2.9,3.2,3.6,3.8,3.9,4.1,4.3,4.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,0.8,1.2,1.5,1.9,2.2,2.4,2.3,2.4,2.7,3.3,4.1,4.6,4.7,4.3,3.9,3.5,3.1,2.9,2.7,2.7,2.6,2.6,2.5,2.4,2.5,2.6,2.7,2.7,2.7,2.9,3.2,3.7,4.4,5,5.3,5.4,5.4,5.6,5.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.8,1.1,1.4,1.8,2.1,2.4,2.4,2.3,2.5,3.1,4,4.8,5.2,5,4.5,4.1,3.9,3.7,3.5,3.3,3.1,3,2.9,2.8,2.7,2.7,2.7,2.8,2.8,3,3.2,3.7,4.4,5.2,6,6.4,6.6,6.7,7,7.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,1.8,2.1,2.4,2.4,2.4,2.4,2.6,3.3,4.3,5.1,5.4,5.3,5,4.9,4.8,4.6,4.2,3.9,3.6,3.4,3.3,3.1,3,3.1,3.2,3.2,3.3,3.5,3.8,4.3,5,5.8,6.5,7,7.4,7.6,7.8,8.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.1,1.5,1.9,2.3,2.5,2.6,2.5,2.5,2.5,2.8,3.4,4.1,4.8,5.1,5.3,5.3,5.5,5.4,5.1,4.6,4.2,3.9,3.7,3.6,3.6,3.6,3.7,3.9,4.1,4.2,4.4,4.8,5.2,5.8,6.4,7,7.4,7.6,7.7,7.9,8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,2.8,2.8,2.7,2.8,3.1,3.5,3.9,4.3,4.6,4.9,5.1,5.4,5.4,5.1,4.7,4.3,4,3.9,3.8,3.9,4.1,4.4,4.7,5,5.3,5.7,6.1,6.4,6.8,7.1,7.3,7.4,7.4,7.4,7.5,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,2,2.3,2.7,2.9,3,3,3,3.1,3.3,3.5,3.8,4,4.2,4.4,4.6,4.8,5.1,5.3,5.2,5,4.7,4.4,4.1,4,4.1,4.3,4.6,5,5.5,6,6.5,6.9,7.1,7.3,7.3,7.3,7.3,7.2,7.2,7.3,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.9,3,3.1,3.1,3.2,3.4,3.8,4.1,4.3,4.4,4.4,4.5,4.5,4.7,5,5.4,5.7,5.8,5.6,5.1,4.7,4.3,4.2,4.3,4.6,5,5.6,6.1,6.6,6.9,7.1,7.2,7.3,7.2,7.1,7,7.1,7.4,7.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.7,2.1,2.5,2.8,3,3.1,3.1,3.1,3.3,3.7,4.2,4.7,4.9,4.9,4.8,4.7,4.6,4.7,4.9,5.4,6,6.3,6.3,5.9,5.4,4.9,4.5,4.4,4.5,4.9,5.3,5.9,6.3,6.7,6.9,7.1,7.3,7.3,7.3,7.3,7.4,7.9,8.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,3,3,3,3.1,3.4,4,4.6,5.2,5.5,5.6,5.4,5.3,5,4.8,4.8,5.2,5.8,6.3,6.5,6.4,6,5.6,5.1,4.8,4.7,4.9,5.4,5.9,6.3,6.6,6.9,7.2,7.5,7.7,7.7,7.8,8.1,8.8,9.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.7,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.9,2.2,2.5,2.7,2.9,3,3,3.1,3.2,3.6,4.2,5,5.7,6.2,6.4,6.4,6.3,6,5.5,5.2,5.3,5.8,6.2,6.5,6.6,6.5,6.3,5.9,5.4,5.2,5.3,5.7,6.2,6.6,6.9,7.2,7.6,7.9,8.1,8.1,8.2,8.6,9.4,10.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.8,1.1,1.2,1,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.3,3.3,3.3,3.4,3.8,4.4,5.1,5.9,6.5,7,7.4,7.5,7.1,6.5,5.9,5.7,5.9,6.3,6.6,6.7,6.9,6.8,6.6,6.2,5.9,5.8,6.1,6.4,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.2,8.5,9.2,10.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.5,1.3,0.9,0.4,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.4,1.9,2.3,2.6,2.9,3.2,3.4,3.6,3.7,3.6,3.6,3.7,4,4.5,5.1,5.7,6.3,6.9,7.5,7.9,7.8,7.2,6.4,5.9,5.9,6.2,6.4,6.7,6.8,7,6.9,6.6,6.3,6.2,6.3,6.5,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.1,8.3,8.8,9.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.4,0.7,1.1,1.5,1.7,1.5,1,0.6,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.7,3,3.2,3.5,3.7,3.8,3.9,3.8,3.8,4,4.3,4.6,5,5.3,5.7,6.2,6.8,7.3,7.4,7,6.3,5.8,5.8,6.1,6.4,6.7,6.9,7,7,6.8,6.7,6.7,6.7,6.7,6.8,7.1,7.5,7.9,8.4,8.6,8.6,8.5,8.4,8.5,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.4,0.4,0.4,0.4,0.5,0.6,0.8,0.9,1.1,1.4,1.6,1.7,1.4,0.9,0.5,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.8,3,3.2,3.3,3.4,3.6,3.8,3.9,3.9,3.9,4,4.2,4.4,4.6,4.8,4.9,5.2,5.7,6.1,6.3,6.1,5.8,5.6,5.9,6.4,6.9,7.2,7.4,7.4,7.4,7.3,7.3,7.3,7.2,7,7,7.1,7.4,8,8.6,9.1,9.1,8.9,8.8,8.8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.4,0.5,0.6,0.8,0.9,1,1,1.2,1.4,1.5,1.6,1.7,1.8,1.8,1.6,1.2,0.7,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,1,1.5,2,2.5,2.8,3,3.1,3.2,3.2,3.4,3.5,3.6,3.7,3.7,3.7,3.6,3.7,3.9,4.1,4.4,4.5,4.6,4.8,5,5.2,5.3,5.4,5.6,6.2,6.9,7.5,7.9,8,8,8,8.1,8.1,8,7.7,7.4,7.2,7.2,7.3,7.8,8.5,9.1,9.4,9.5,9.6,9.7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.2,0.3,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.3,2.3,2.3,2.2,2,1.7,1.2,0.7,0.4,0.2,0.1,0.1,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.2,1.7,2.1,2.5,2.8,3.1,3.2,3.2,3.1,3.1,3.2,3.3,3.5,3.6,3.6,3.4,3.3,3.3,3.5,3.9,4.3,4.4,4.4,4.4,4.6,4.9,5.3,5.7,6.2,6.8,7.5,8,8.2,8.3,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.8,7.6,7.5,7.8,8.4,9.1,9.8,10.4,10.7,11,11.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.3,0.4,0.5,0.6,0.6,0.7,0.9,1.1,1.3,1.5,1.7,2,2.4,2.8,3.2,3.5,3.5,3.5,3.4,3.2,3,2.7,2.2,1.6,1.2,0.8,0.6,0.4,0.3,0.3,0.2,0.2,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.5,1,1.5,2,2.4,2.6,2.8,3,3.1,3.2,3.1,3,3,3.1,3.2,3.4,3.4,3.4,3.3,3.2,3.2,3.5,4,4.5,4.8,4.8,4.8,5,5.5,6.1,6.7,7.2,7.7,8,8.2,8.3,8.3,8.5,8.8,9.2,9.5,9.4,9.2,8.9,8.6,8.3,8.1,8.3,8.8,9.6,10.6,11.4,11.8,11.9,11.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.4,0.6,0.8,1,1.2,1.5,1.6,1.7,1.8,1.9,2.2,2.4,2.8,3.2,3.7,4.3,5,5.6,6,6,5.8,5.4,5,4.6,4.1,3.5,2.9,2.3,1.8,1.4,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.3,0.3,0.3,0.3,0.5,0.7,1.1,1.6,2.2,2.8,3.1,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3,3.1,3.2,3.3,3.4,3.4,3.3,3.2,3.3,3.7,4.4,5.1,5.5,5.6,5.6,5.8,6.4,7.1,7.7,8.1,8.2,8.3,8.3,8.3,8.4,8.7,9.1,9.6,9.8,9.9,9.7,9.5,9.3,9,8.9,9,9.5,10.4,11.4,12.2,12.5,12.3,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.6,0.9,1.2,1.6,2,2.3,2.7,3,3.4,3.6,3.9,4.2,4.5,4.9,5.4,6,6.8,7.6,8.5,9.2,9.5,9.3,8.9,8.3,7.6,6.9,6.2,5.5,4.9,4.3,3.7,3,2.4,1.9,1.5,1.3,1,0.8,0.7,0.6,0.5,0.5,0.5,0.6,0.8,0.9,1.1,1.2,1.2,1.2,1.3,1.5,1.8,2.3,2.8,3.2,3.5,3.5,3.5,3.5,3.5,3.4,3.3,3.2,3.2,3.2,3.3,3.4,3.5,3.4,3.4,3.4,3.5,4,4.7,5.5,6,6.3,6.4,6.7,7.2,7.8,8.2,8.3,8.2,8.2,8.3,8.5,8.7,9.1,9.5,9.8,9.9,9.9,9.8,9.8,9.8,9.9,10,10.2,10.6,11.2,12,12.5,12.6,12.2,11.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.3,1.7,2.2,2.7,3.3,3.9,4.4,4.8,5.3,5.8,6.3,6.8,7.3,7.8,8.3,8.7,9.1,9.7,10.4,11.2,11.9,12.3,12.4,12.2,11.6,10.9,10,9.2,8.4,7.8,7.4,7,6.4,5.7,4.9,4.2,3.6,3.1,2.7,2.3,2,1.8,1.8,1.8,1.9,2.1,2.4,2.7,3,3.1,3.1,2.9,2.7,2.7,2.7,2.9,3.2,3.5,3.6,3.6,3.7,3.9,3.9,3.8,3.6,3.5,3.4,3.4,3.4,3.5,3.6,3.6,3.7,3.8,4,4.4,5.1,5.8,6.4,6.7,7,7.3,7.7,8.1,8.2,8.1,8,8.1,8.4,8.7,9.2,9.6,9.9,10,9.9,9.7,9.6,9.8,10.3,10.9,11.4,11.7,11.9,12.2,12.4,12.4,12.1,11.7,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,1.2,2.3,3.5,4.6,5.5,6.4,7.2,7.8,8.3,8.7,9.2,9.8,10.3,10.9,11.5,12,12.3,12.4,12.5,12.7,13.1,13.5,13.9,14,14.1,13.9,13.5,12.7,11.8,10.9,10.2,9.9,9.7,9.7,9.5,9.1,8.4,7.7,6.9,6.1,5.4,4.8,4.5,4.4,4.5,4.6,4.7,5,5.3,5.6,5.8,5.9,5.7,5.3,4.8,4.3,3.8,3.6,3.5,3.5,3.6,3.7,3.9,4.1,4.2,4.1,3.9,3.7,3.5,3.5,3.5,3.6,3.8,3.9,4.2,4.5,4.8,5.4,6.1,6.8,7.4,7.8,8,8.1,8.2,8.3,8.3,8.1,8.1,8.2,8.5,9,9.6,10,10.2,10.2,10,9.7,9.5,9.6,10.3,11.3,12.2,12.7,12.7,12.6,12.3,11.9,11.4,11.1,10.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.3,4.3,6.6,8.6,10.2,11.3,12,12.5,12.9,13.2,13.6,14,14.4,14.7,14.9,15,14.9,14.6,14.4,14.2,14.2,14.3,14.5,14.8,14.9,14.9,14.5,13.9,13,12.2,11.7,11.4,11.4,11.6,11.8,11.8,11.6,11,10.1,9.1,8.3,7.8,7.6,7.7,7.9,8,8.1,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.5,6.6,5.6,4.7,4.2,3.9,3.7,3.8,3.9,4.1,4.2,4.1,3.9,3.8,3.7,3.8,3.9,4.1,4.3,4.6,5,5.5,6.2,7.1,8,8.9,9.4,9.6,9.4,9.1,8.9,8.9,8.9,8.8,8.8,8.9,9.1,9.6,10.1,10.4,10.4,10.3,10,9.6,9.4,9.4,10,11,11.9,12.3,12.3,12,11.7,11.3,10.9,10.7,10.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.1,9.2,12,13.9,15.1,15.7,16.1,16.3,16.6,16.8,17.1,17.2,17.1,16.8,16.4,15.9,15.5,15.1,14.8,14.6,14.6,14.8,15.1,15.3,15.3,15,14.4,13.7,13.1,12.7,12.4,12.4,12.6,13,13.2,13.3,12.8,12,11.1,10.3,10,10,10.2,10.3,10.3,10.2,10.3,10.5,10.7,10.8,10.9,11,10.9,10.4,9.4,8.1,6.9,5.9,5.2,4.8,4.6,4.6,4.7,4.7,4.5,4.3,4.2,4.2,4.5,4.8,5.1,5.4,5.7,6.2,6.9,7.7,8.7,9.7,10.5,11,11,10.6,10,9.8,9.8,9.9,9.9,9.9,9.9,10.1,10.4,10.7,10.7,10.5,10.1,9.7,9.5,9.3,9.4,9.8,10.4,11,11.3,11.2,11.1,11,10.9,10.8,10.7,10.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.8,3.7,6.6,10,13.1,15.3,16.5,17.2,17.6,17.9,18.3,18.5,18.7,18.7,18.4,17.9,17.2,16.5,16,15.6,15.4,15.2,15.2,15.3,15.6,15.7,15.4,15,14.5,14.1,13.7,13.5,13.3,13.3,13.4,13.7,14,14,13.7,13,12.2,11.5,11.3,11.4,11.5,11.3,11,10.8,10.7,11,11.3,11.7,12.2,12.7,12.9,12.8,12.2,11.1,9.8,8.7,7.8,7.2,6.9,6.8,6.8,6.6,6.1,5.6,5.4,5.5,5.8,6.2,6.5,6.7,6.9,7.4,8.1,8.9,9.8,10.5,11.2,11.5,11.4,10.9,10.4,10.3,10.5,10.8,10.9,10.9,10.9,11,11.2,11.1,10.9,10.4,9.9,9.6,9.4,9.4,9.5,9.9,10.3,10.6,10.6,10.6,10.6,10.6,10.8,11,11.1,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.1,5.8,9.1,12.4,14.9,16.4,17.3,17.9,18.4,19,19.3,19.4,19.4,19.1,18.6,17.9,17.3,16.9,16.6,16.4,16.2,16.1,16.3,16.4,16.4,15.9,15.3,14.9,14.6,14.5,14.5,14.5,14.4,14.4,14.4,14.6,14.6,14.4,13.8,13.1,12.5,12.3,12.3,12.3,12,11.6,11.3,11.3,11.5,11.8,12.3,12.9,13.6,14.1,14.3,14,13.3,12.4,11.5,10.8,10.3,10,10,9.9,9.6,9,8.2,7.7,7.5,7.7,7.9,7.9,7.9,7.9,8.3,9,9.8,10.4,10.9,11.3,11.4,11.2,10.9,10.6,10.6,10.8,11.1,11.3,11.4,11.5,11.6,11.6,11.3,10.9,10.3,9.8,9.6,9.5,9.6,9.8,10.2,10.4,10.5,10.4,10.3,10.3,10.5,10.9,11.3,11.7,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,1,2.4,4.8,8,11.4,14.3,16.1,17.1,17.8,18.4,19,19.2,19.3,19.3,19,18.7,18.3,18,17.7,17.5,17.2,17.1,17,17.2,17.3,17.2,16.6,15.9,15.4,15.3,15.5,15.7,15.7,15.5,15.1,14.9,14.7,14.6,14.4,14,13.5,13.1,13.1,13.1,13.1,12.9,12.7,12.7,12.9,13,13.2,13.5,14,14.6,15,15,14.6,14.2,13.6,13.1,12.7,12.5,12.3,12.3,12.3,12.1,11.7,11.1,10.4,9.8,9.3,9.1,8.9,8.8,8.9,9.3,9.9,10.5,10.9,11.1,11.2,11.2,11.1,11,10.9,10.9,11.1,11.3,11.4,11.6,11.7,11.8,11.7,11.5,11,10.5,10.1,9.9,9.9,10,10.2,10.5,10.6,10.5,10.3,10.2,10.2,10.6,11.1,11.6,12.1,12.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.8,2,4.1,7,10.5,13.7,15.9,17.1,17.7,18.2,18.6,18.9,18.9,18.8,18.6,18.3,18,17.8,17.7,17.6,17.4,17.3,17.4,17.6,17.7,17.5,17,16.3,15.9,15.8,16,16.2,16.1,15.7,15.2,14.8,14.4,14.2,13.9,13.6,13.3,13.3,13.5,13.7,13.7,13.7,13.8,14.2,14.7,15.1,15.3,15.5,15.8,16,15.8,15.3,14.7,14.2,13.9,13.8,13.6,13.6,13.6,13.5,13.5,13.4,13.3,12.9,12.2,11.3,10.3,9.5,9.2,9.4,9.9,10.6,11.2,11.6,11.6,11.4,11.3,11.3,11.3,11.3,11.3,11.3,11.4,11.4,11.5,11.6,11.7,11.7,11.8,11.7,11.4,11.1,10.7,10.6,10.5,10.6,10.7,10.8,10.8,10.7,10.6,10.4,10.5,10.8,11.4,11.9,12.3,12.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.2,9.7,13.2,15.8,17.2,17.8,18.2,18.4,18.6,18.6,18.5,18.2,17.8,17.5,17.3,17.2,17.1,17.1,17.2,17.4,17.5,17.6,17.4,17,16.6,16.2,16,16,16,15.8,15.5,15,14.6,14.2,13.9,13.6,13.4,13.3,13.6,13.9,14.2,14.3,14.3,14.5,15.2,15.9,16.4,16.8,16.9,17.1,17,16.6,15.7,14.8,14.4,14.3,14.5,14.6,14.6,14.6,14.5,14.4,14.2,14.1,13.8,13.1,12,10.8,9.8,9.5,9.9,10.8,11.8,12.5,12.8,12.5,12.1,11.7,11.6,11.7,11.8,11.9,11.9,11.8,11.7,11.6,11.5,11.5,11.6,11.8,12,12,11.8,11.6,11.4,11.3,11.2,11.2,11.3,11.3,11.3,11.2,11.1,11.2,11.4,11.9,12.3,12.7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3,5.7,9.3,13,16,17.6,18.2,18.4,18.4,18.4,18.3,18.1,17.8,17.4,17.2,17,16.9,16.9,16.9,17,17.1,17.2,17.3,17.4,17.3,17.1,16.8,16.4,16.1,15.9,15.5,15.1,14.7,14.4,14.2,14,13.7,13.6,13.7,14,14.4,14.7,14.8,14.8,15,15.5,16.1,16.7,17,17.3,17.4,17.4,17,16.2,15.4,15,15,15.4,15.7,15.8,15.7,15.6,15.3,15.1,14.9,14.6,13.9,12.8,11.5,10.5,10.3,10.7,11.6,12.4,13.1,13.4,13.3,13,12.5,12.2,12,12,12.2,12.2,12.1,11.9,11.7,11.5,11.4,11.5,11.8,12.2,12.4,12.4,12.2,12,11.9,11.8,11.8,11.8,12,12.1,12,12,12,12.2,12.5,12.9,13.1,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.3,13.2,16.2,18,18.5,18.5,18.3,18.1,17.8,17.6,17.4,17.3,17.3,17.2,17.1,17,16.8,16.8,16.8,17,17.3,17.6,17.8,17.6,17.3,16.8,16.4,16,15.5,14.9,14.4,14.2,14.1,14.1,14,14,14.2,14.6,15,15.3,15.4,15.3,15.3,15.5,15.9,16.2,16.6,17,17.2,17.3,17.1,16.5,15.9,15.5,15.5,15.8,16.2,16.5,16.4,16.2,16,15.8,15.7,15.4,14.8,13.8,12.7,11.8,11.4,11.7,12.2,12.8,13.3,13.8,14.1,14.1,13.6,13,12.3,12.1,12.1,12.1,12.1,11.9,11.6,11.4,11.3,11.5,11.8,12.2,12.4,12.5,12.5,12.4,12.3,12.2,12.2,12.2,12.4,12.6,12.7,12.7,12.7,12.9,13.1,13.3,13.3,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.6,3.4,6.2,9.8,13.5,16.4,18,18.5,18.4,18.1,17.7,17.4,17.3,17.4,17.6,17.6,17.5,17.3,17,16.7,16.5,16.5,16.7,17.1,17.6,17.7,17.6,17.2,16.8,16.4,15.9,15.4,14.8,14.4,14.2,14.2,14.3,14.5,14.7,15,15.5,15.9,16.1,16,15.8,15.7,15.6,15.7,16,16.4,16.7,17,17,16.9,16.6,16.1,15.5,15.3,15.6,16.1,16.5,16.6,16.5,16.4,16.2,16.1,16,15.6,14.9,14,13.2,12.7,12.7,12.8,13.1,13.6,14.3,15,15.1,14.7,13.8,12.9,12.3,12.1,12,12,11.8,11.6,11.5,11.5,11.7,11.9,12,12.2,12.3,12.4,12.5,12.5,12.5,12.4,12.4,12.6,12.9,13.1,13.2,13.3,13.5,13.6,13.5,13.4,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.3,2.4,4.2,7.1,10.7,14.2,16.7,18.1,18.5,18.3,18,17.6,17.4,17.5,17.9,18.2,18.3,17.9,17.4,16.9,16.4,16.1,16,16.2,16.5,16.8,16.9,16.8,16.6,16.3,15.9,15.6,15.2,14.9,14.7,14.6,14.6,14.8,15.1,15.6,16.2,16.7,16.9,16.9,16.7,16.4,16.1,16,16,16.3,16.6,17,17.2,17.2,17,16.6,16.1,15.6,15.3,15.5,16.2,16.9,17.1,17,16.8,16.5,16.4,16.4,16.2,15.8,15.1,14.4,13.9,13.6,13.4,13.5,13.9,14.7,15.4,15.7,15.3,14.4,13.5,12.9,12.7,12.5,12.3,12,11.9,11.9,11.9,11.9,11.9,12,12.1,12.2,12.4,12.5,12.7,12.7,12.7,12.7,12.9,13.2,13.5,13.7,13.8,13.9,13.9,13.7,13.4,13.3,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.3,0.7,1.3,2.2,3.5,5.6,8.7,12.2,15.5,17.7,18.8,19.1,18.8,18.2,17.8,17.7,18.1,18.6,19.1,19,18.4,17.7,17.1,16.6,16.2,16.1,16,16,16.1,16.1,16.1,16.1,16,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.5,15.9,16.5,17.1,17.6,17.6,17.3,16.9,16.6,16.5,16.6,16.7,17.1,17.5,17.8,18,18,17.8,17.4,17,16.6,16.4,16.6,17.4,18.1,18.3,18,17.5,17,16.7,16.6,16.5,16.1,15.6,15.1,14.7,14.4,14.1,13.9,14.1,14.7,15.4,15.7,15.4,14.7,14.1,13.8,13.6,13.4,13,12.6,12.3,12.3,12.3,12.2,12.2,12.2,12.4,12.5,12.6,12.7,12.9,13.1,13.1,13.1,13.2,13.4,13.7,13.9,13.9,13.9,13.8,13.6,13.4,13.3,0,0,0,0,0,0,0,0,0.1,0.3,0.4,0.5,0.6,0.8,1.3,2.1,3.3,5,7.5,10.8,14.3,17.3,19.3,20.3,20.5,19.9,19.1,18.4,18.2,18.6,19.1,19.5,19.4,18.8,18.1,17.6,17.3,17.2,16.9,16.5,16.1,16,16,16.3,16.4,16.5,16.4,16.3,16.5,16.6,16.6,16.4,16.1,16.1,16.4,17,17.7,18.1,17.9,17.5,17,16.8,16.8,17,17.4,17.9,18.5,19,19.3,19.5,19.4,19.2,18.8,18.3,18,18.2,18.9,19.5,19.7,19.2,18.5,17.8,17.3,17,16.6,16.2,15.7,15.4,15.1,14.9,14.6,14.3,14.2,14.5,15,15.2,15,14.6,14.3,14.2,14.1,13.9,13.4,12.9,12.7,12.7,12.7,12.6,12.5,12.7,13,13.1,13.1,13.1,13.3,13.5,13.6,13.6,13.6,13.7,13.8,13.8,13.8,13.8,13.8,13.7,13.5,13.4,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.3,1.6,2.3,3.4,5,7.2,10.1,13.4,16.7,19.4,21.1,22,22,21.3,20.3,19.3,18.8,18.8,19.2,19.5,19.4,18.9,18.4,18.1,18.1,18.1,17.7,17.1,16.8,16.8,17,17.3,17.5,17.5,17.3,17.2,17.1,17.1,17,16.8,16.5,16.4,16.7,17.4,18.2,18.7,18.7,18.1,17.5,17.1,17.1,17.3,17.9,18.5,19.2,19.8,20.3,20.7,20.8,20.7,20.1,19.5,19.1,19.2,19.8,20.3,20.5,20.1,19.5,18.8,18.1,17.6,17.1,16.6,16,15.6,15.4,15.2,14.9,14.6,14.4,14.4,14.5,14.6,14.5,14.3,14.2,14.2,14.1,13.9,13.5,13.2,13.1,13.1,13.1,12.9,12.8,13,13.3,13.5,13.6,13.7,13.9,14.1,14.2,14.2,14.1,14,14,13.9,13.8,13.9,13.9,13.8,13.7,13.6,0,0,0,0,0,0,0.1,0.2,0.4,0.9,1.5,2.2,2.7,3.4,4.4,5.9,7.9,10.4,13.4,16.4,19.2,21.2,22.5,23,22.9,22.1,20.9,19.9,19.1,18.9,19,19.2,19.2,19,18.7,18.6,18.6,18.5,18.2,17.9,17.8,18,18.4,18.5,18.6,18.5,18.2,17.9,17.6,17.2,17,16.8,16.7,16.9,17.3,18.1,19,19.7,19.7,19.1,18.2,17.6,17.4,17.6,18.3,19.1,19.7,20.3,20.7,21,21.1,21,20.5,19.9,19.6,19.8,20.3,20.7,20.8,20.6,20.1,19.4,18.9,18.4,17.9,17.2,16.6,16.1,15.8,15.6,15.4,15.2,14.9,14.7,14.6,14.6,14.5,14.4,14.3,14.2,14,13.8,13.6,13.5,13.6,13.6,13.5,13.3,13.1,13.2,13.5,13.8,14,14.3,14.7,14.9,14.8,14.6,14.5,14.4,14.2,14.1,14.1,14.1,14.1,14,13.9,13.9,0,0,0,0,0,0.1,0.2,0.5,1.1,2.1,3.4,4.6,5.8,7.1,8.5,10.2,12.2,14.4,16.9,19.3,21.1,22.4,23,23.1,22.8,22,21.1,20.2,19.5,19.1,19.1,19.2,19.2,19.1,18.9,18.8,18.7,18.7,18.6,18.6,18.8,19.1,19.3,19.3,19.2,19.2,19.1,18.7,18.2,17.6,17.3,17.3,17.5,17.8,18.4,19.1,19.9,20.4,20.4,19.7,18.7,18,17.8,18.2,19,19.8,20.3,20.6,20.7,20.8,20.8,20.6,20.3,20.1,20.1,20.4,20.6,20.8,20.7,20.4,19.9,19.4,19,18.7,18.3,17.7,17,16.5,16.3,16.1,16,15.9,15.7,15.5,15.4,15.2,15,14.8,14.5,14.3,14,13.8,13.8,13.9,14,14.1,14,13.7,13.5,13.5,13.8,14.1,14.5,14.9,15.2,15.3,15.1,14.9,14.7,14.6,14.6,14.6,14.6,14.6,14.5,14.4,14.2,14.3,0,0,0,0,0,0.1,0.4,1.1,2.4,4.4,6.7,9,10.8,12.5,13.9,15.3,16.8,18.3,19.8,21.2,22.1,22.7,22.8,22.7,22.4,21.8,21.2,20.6,20.1,19.7,19.6,19.5,19.4,19.2,18.9,18.8,18.7,18.8,19,19.3,19.6,19.8,19.7,19.5,19.3,19.5,19.7,19.6,19.2,18.7,18.4,18.4,18.6,18.9,19.3,19.9,20.4,20.7,20.6,20.1,19.3,18.8,18.7,19.2,19.9,20.6,21,21.1,21,20.9,20.7,20.5,20.5,20.5,20.7,20.9,20.8,20.6,20.3,19.8,19.3,18.9,18.7,18.5,18.2,17.8,17.2,16.9,16.7,16.6,16.6,16.5,16.4,16.3,16.1,15.8,15.4,15,14.6,14.3,14.1,13.9,14,14.2,14.4,14.4,14.3,14.1,13.8,13.8,14,14.2,14.6,14.9,15.2,15.2,15,14.8,14.7,14.8,15,15.2,15.3,15.3,15.1,15,14.8,14.9,0,0,0,0,0,0.2,0.6,1.8,4.1,7.3,10.8,13.9,16.2,17.7,18.8,19.6,20.3,21,21.7,22.2,22.5,22.7,22.7,22.6,22.3,21.9,21.5,21.1,20.8,20.6,20.5,20.3,19.9,19.5,19,18.7,18.7,19,19.4,19.9,20.1,20.1,19.8,19.4,19.3,19.5,20,20.3,20.3,20.1,19.9,19.6,19.5,19.5,19.8,20.2,20.6,20.9,20.9,20.7,20.3,20,20.1,20.4,20.9,21.4,21.6,21.7,21.6,21.4,21.2,21.1,21.1,21.2,21.2,21.2,20.9,20.5,20,19.5,19.1,18.7,18.5,18.3,18,17.7,17.4,17.2,17.1,17,16.9,16.7,16.5,16.4,16.2,15.9,15.5,15,14.7,14.5,14.3,14.2,14.2,14.3,14.5,14.6,14.5,14.3,14.1,14,14,14.1,14.4,14.6,14.9,15,14.9,14.8,14.7,14.9,15.2,15.6,15.9,15.9,15.8,15.7,15.5,15.4,0,0,0,0,0,0.2,0.8,2.3,5.1,9.1,13.5,17.2,19.8,21.1,21.7,22,22.3,22.5,22.6,22.7,22.8,22.9,22.9,22.8,22.6,22.2,21.7,21.4,21.2,21.2,21.2,21,20.6,20,19.4,19,18.9,19.2,19.6,20.1,20.3,20.2,19.8,19.4,19.3,19.7,20.4,21.2,21.6,21.7,21.3,20.7,20.3,20.1,20.2,20.5,20.8,21,21.1,21.1,21,20.9,21.1,21.3,21.6,21.9,21.9,22,21.9,21.9,21.9,21.9,22,22,21.8,21.5,21.2,20.8,20.3,19.8,19.4,19,18.6,18.3,18.1,17.9,17.8,17.7,17.6,17.4,17,16.6,16.3,16.1,16,15.8,15.5,15.1,14.9,14.8,14.6,14.5,14.4,14.4,14.6,14.7,14.8,14.7,14.5,14.3,14.1,14,14.1,14.3,14.6,14.9,14.9,14.8,14.8,14.9,15.3,15.8,16.2,16.4,16.4,16.3,16.2,16,0,0,0,0,0,0.2,0.7,2.1,4.8,9,13.8,18,20.8,22.3,22.9,23.1,23.2,23.3,23.3,23.2,23.2,23.3,23.2,23,22.6,22.1,21.6,21.3,21.2,21.3,21.4,21.3,20.9,20.4,19.9,19.5,19.3,19.5,19.8,20.1,20.4,20.3,20,19.7,19.7,20.2,21.1,22.1,22.8,23,22.7,22.2,21.8,21.6,21.5,21.3,21.1,20.9,20.9,21,21,21.1,21.3,21.6,21.9,22.1,22.1,22,22,22.1,22.2,22.4,22.5,22.5,22.4,22.2,21.9,21.5,20.9,20.4,19.9,19.5,19.1,18.7,18.5,18.4,18.4,18.2,18,17.6,17.1,16.7,16.3,16.1,15.9,15.8,15.6,15.4,15.2,15.1,15,14.8,14.6,14.6,14.7,14.9,15.1,15.2,15.1,14.8,14.5,14.2,14.2,14.3,14.6,14.9,15,15,14.9,15,15.3,15.7,16.2,16.6,16.8,16.9,16.8,16.7,0,0,0,0,0,0.1,0.5,1.5,3.7,7.5,12.3,16.9,20.2,22.2,23.1,23.6,23.8,23.7,23.6,23.5,23.5,23.5,23.3,22.9,22.3,21.6,21.1,20.9,20.9,21.1,21.1,21.1,20.9,20.6,20.3,20.1,19.9,19.9,20,20.2,20.4,20.4,20.3,20.2,20.4,21,21.8,22.7,23.4,23.8,24,24,24,23.9,23.4,22.6,21.7,21,20.7,20.6,20.7,20.9,21.2,21.7,22.1,22.3,22.3,22.2,22.1,22.1,22.2,22.3,22.5,22.6,22.6,22.6,22.3,21.9,21.4,20.9,20.5,20.1,19.7,19.5,19.2,18.9,18.7,18.5,18.1,17.8,17.4,17.1,16.8,16.5,16.3,16.1,15.9,15.7,15.6,15.5,15.4,15.1,14.9,14.7,14.8,15.1,15.3,15.4,15.3,15,14.8,14.5,14.4,14.5,14.7,14.9,15.1,15.1,15.1,15.2,15.4,15.7,16.2,16.6,16.9,17.1,17.2,17.2,0,0,0,0,0,0,0.3,0.9,2.6,5.9,10.5,15.4,19.4,22,23.4,24,24.2,24,23.8,23.5,23.4,23.2,22.9,22.4,21.8,21.1,20.8,20.7,20.8,20.9,20.9,20.9,20.8,20.8,20.7,20.6,20.5,20.4,20.4,20.3,20.4,20.5,20.7,21,21.4,21.9,22.3,22.7,23.2,23.8,24.5,25.1,25.4,25.4,24.8,23.7,22.5,21.4,20.8,20.6,20.8,21.1,21.5,22,22.4,22.7,22.7,22.5,22.3,22.2,22.2,22.2,22.2,22.3,22.4,22.4,22.2,22,21.7,21.3,20.9,20.6,20.4,20.1,19.7,19.2,18.9,18.6,18.3,18,17.9,17.8,17.5,17.2,16.8,16.5,16.3,16.2,16.1,16,15.7,15.3,15.1,15,15,15.2,15.3,15.3,15.2,15.2,15,14.9,14.8,14.8,14.9,15.1,15.2,15.3,15.3,15.4,15.6,15.9,16.2,16.4,16.7,17,17.2,17.3,0,0,0,0,0,0,0.1,0.6,1.9,4.6,9,14.3,19.1,22.3,23.9,24.6,24.6,24.3,23.8,23.3,23,22.8,22.6,22.1,21.6,21.2,21,20.9,21,21,21,20.9,20.9,21,21.1,21.2,21.1,21,20.8,20.7,20.7,21,21.5,22,22.4,22.6,22.5,22.5,22.7,23.3,24.1,24.9,25.3,25.2,24.7,23.7,22.6,21.7,21.2,21.1,21.4,21.7,21.9,22.2,22.5,22.7,22.7,22.7,22.6,22.5,22.4,22.3,22.2,22.1,22.1,22.1,22.1,22,21.8,21.5,21.2,20.8,20.6,20.3,19.8,19.4,19,18.8,18.7,18.5,18.4,18.3,18.1,17.7,17.3,17,16.8,16.6,16.5,16.2,15.8,15.5,15.3,15.2,15.3,15.3,15.2,15.2,15.3,15.4,15.4,15.4,15.3,15.2,15.3,15.4,15.5,15.5,15.6,15.7,15.9,16.2,16.3,16.3,16.4,16.6,16.9,17.2,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.8,13.3,18.7,22.5,24.4,25,24.9,24.5,24,23.4,23,22.7,22.6,22.3,22,21.7,21.6,21.6,21.4,21.2,21.1,21,21.2,21.5,21.8,22,21.9,21.6,21.3,21.2,21.4,21.8,22.4,22.9,23.1,22.9,22.6,22.2,22.2,22.6,23.3,23.8,24.1,24,23.4,22.7,21.9,21.4,21.3,21.4,21.7,22,22.1,22.2,22.2,22.3,22.5,22.6,22.7,22.7,22.6,22.4,22.2,22.1,22.2,22.3,22.5,22.5,22.3,21.8,21.3,20.8,20.6,20.4,20.1,19.8,19.6,19.5,19.4,19.2,19,18.7,18.4,18,17.7,17.5,17.3,17.1,16.8,16.3,15.9,15.6,15.4,15.5,15.5,15.5,15.4,15.3,15.4,15.5,15.7,15.7,15.7,15.6,15.6,15.7,15.8,15.8,15.9,16,16.3,16.5,16.5,16.4,16.4,16.6,16.8,17.2,0,0,0,0,0,0,0,0.2,0.9,2.7,6.3,11.6,17.2,21.5,23.9,24.8,24.9,24.6,24.2,23.8,23.4,23.1,22.9,22.7,22.5,22.3,22.2,22,21.8,21.5,21.4,21.4,21.7,22.1,22.6,22.8,22.7,22.2,21.8,21.7,22,22.5,22.9,23.2,23.2,22.9,22.4,22.1,22,22.1,22.4,22.6,22.6,22.3,21.9,21.5,21.1,21.1,21.3,21.5,21.7,21.9,22.1,22.2,22.2,22.2,22.3,22.4,22.6,22.6,22.5,22.3,22.2,22.2,22.4,22.7,23.1,23.2,22.9,22.2,21.5,21.1,20.9,20.8,20.6,20.4,20.3,20.3,20.2,20,19.6,19.2,18.7,18.3,18,17.8,17.6,17.4,17,16.5,16,15.7,15.6,15.7,15.8,15.7,15.5,15.4,15.5,15.6,15.7,15.9,15.9,15.9,15.9,15.9,16,16.1,16.1,16.2,16.4,16.5,16.6,16.6,16.6,16.7,16.9,17.2,0,0,0,0,0,0,0,0.1,0.6,1.9,4.8,9.4,14.8,19.5,22.5,24,24.5,24.5,24.3,24,23.7,23.4,23,22.8,22.6,22.6,22.5,22.3,22.1,21.9,21.9,22,22.3,22.8,23.2,23.5,23.3,22.8,22.4,22.2,22.4,22.8,23,23.1,23,22.7,22.3,22.1,22,22,22,21.8,21.6,21.3,21.1,21,21.1,21.4,21.7,21.9,22,22.1,22.2,22.4,22.5,22.4,22.3,22.3,22.5,22.5,22.5,22.3,22.2,22.2,22.5,22.9,23.3,23.5,23.3,22.8,22.1,21.7,21.5,21.4,21.3,21.1,21,20.8,20.7,20.5,20.1,19.6,19.1,18.6,18.2,18,17.8,17.6,17.2,16.8,16.4,16.1,16,16,16.1,16,15.8,15.7,15.7,15.7,15.8,16,16.1,16.2,16.3,16.4,16.4,16.4,16.3,16.3,16.4,16.5,16.7,16.7,16.7,16.7,16.9,17.1,0,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.5,12.5,17.5,21.2,23.3,24.2,24.4,24.2,23.8,23.5,23.2,22.9,22.7,22.7,22.7,22.7,22.6,22.5,22.4,22.5,22.7,23,23.5,23.9,24.1,24,23.6,23.2,22.8,22.8,23,23.1,23.1,22.9,22.7,22.6,22.5,22.5,22.5,22.3,22,21.6,21.3,21.2,21.3,21.7,22.2,22.6,22.7,22.6,22.5,22.5,22.7,22.7,22.6,22.5,22.6,22.7,22.8,22.9,22.7,22.5,22.3,22.3,22.5,22.9,23.2,23.3,23,22.6,22.2,22,21.9,21.8,21.6,21.4,21.2,21,20.8,20.5,20,19.4,18.8,18.5,18.2,18,17.8,17.6,17.3,17,16.8,16.6,16.5,16.5,16.4,16.3,16.1,16,15.9,16,16.2,16.5,16.7,16.9,17,16.9,16.9,16.7,16.7,16.7,16.7,16.8,16.8,16.8,16.9,17,17.3,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.9,10.6,15.8,20.1,22.9,24.1,24.3,24,23.6,23.2,23.1,23,23,23,23.1,23.2,23.1,23.1,23.1,23.3,23.6,24,24.4,24.7,24.8,24.7,24.4,23.9,23.5,23.3,23.3,23.4,23.4,23.3,23.3,23.3,23.4,23.6,23.5,23.3,22.8,22.3,21.9,21.7,21.8,22.3,22.9,23.3,23.3,23.1,22.8,22.7,22.6,22.7,22.7,22.8,23,23.3,23.5,23.5,23.3,22.9,22.5,22.2,22.2,22.4,22.7,23,23,22.9,22.6,22.3,22.1,22,21.9,21.7,21.5,21.3,21.1,20.7,20.1,19.5,19,18.6,18.3,18.3,18.2,18,17.8,17.6,17.4,17.3,17.2,17.1,16.9,16.7,16.5,16.3,16.2,16.2,16.4,16.7,17.1,17.3,17.4,17.5,17.4,17.4,17.2,17.1,17,16.9,17,17.1,17.3,17.7,18.1,0,0,0,0,0,0,0,0,0.1,0.6,1.9,4.6,8.8,14.1,18.9,22.2,24,24.5,24.3,23.9,23.6,23.5,23.5,23.6,23.6,23.7,23.7,23.8,24,24.2,24.4,24.6,24.9,25.2,25.3,25.2,25,24.8,24.4,24.1,23.9,23.9,24.1,24.2,24.2,24.3,24.4,24.7,24.8,24.8,24.4,23.8,23.1,22.6,22.2,22.3,22.6,23.1,23.3,23.3,23.1,22.9,22.6,22.5,22.6,22.9,23.2,23.5,23.8,24,23.9,23.7,23.2,22.8,22.5,22.3,22.3,22.5,22.8,23,23,22.8,22.5,22.2,22,21.9,21.9,21.8,21.6,21.3,20.8,20.1,19.5,18.9,18.6,18.5,18.6,18.6,18.5,18.2,17.9,17.7,17.8,17.8,17.8,17.6,17.3,17,16.7,16.6,16.6,16.6,16.8,17.1,17.4,17.6,17.8,17.9,17.8,17.7,17.5,17.2,17.1,17.2,17.5,17.9,18.5,19.2,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.4,7.1,12,17.1,21.1,23.6,24.7,25,24.8,24.5,24.2,24,24,24,24,24.2,24.6,25,25.3,25.4,25.5,25.5,25.5,25.5,25.4,25.2,25,24.7,24.5,24.4,24.5,24.8,25.1,25.3,25.5,25.6,25.7,25.6,25.3,24.8,24.1,23.5,23.1,22.8,22.8,23,23.1,23.2,23.1,22.9,22.8,22.7,22.7,22.9,23.2,23.6,23.9,24,24.1,24,23.8,23.5,23.2,23,22.8,22.7,22.7,22.9,23.1,23.1,23,22.7,22.4,22.2,22.1,22.2,22.1,21.9,21.5,20.8,20.1,19.5,19,18.8,18.7,18.8,18.9,18.7,18.4,18,17.8,17.9,18.1,18.2,18.1,17.9,17.6,17.4,17.2,17.1,17.1,17.1,17.2,17.3,17.5,17.8,18,18.1,17.9,17.7,17.5,17.3,17.4,17.7,18.2,18.9,19.8,0,0,0,0,0,0,0,0,0,0.2,0.8,2.2,5.1,9.4,14.4,19.1,22.5,24.5,25.4,25.5,25.2,24.7,24.3,24.1,24,24.2,24.5,25.1,25.6,25.8,25.8,25.7,25.5,25.6,25.6,25.6,25.5,25.2,24.9,24.7,24.6,24.8,25.1,25.5,25.9,26.1,26.2,26.2,25.8,25.2,24.5,24,23.8,23.7,23.7,23.8,23.9,23.8,23.6,23.4,23.1,23,22.9,23,23.2,23.5,23.8,23.9,24,24.1,24,23.9,23.8,23.7,23.6,23.5,23.4,23.4,23.4,23.5,23.4,23.2,22.8,22.6,22.4,22.4,22.5,22.4,22.2,21.7,21.1,20.5,19.9,19.5,19.2,19,19,18.9,18.6,18.3,17.9,17.8,17.8,18,18.2,18.4,18.4,18.3,18.1,17.9,17.7,17.6,17.5,17.4,17.3,17.4,17.7,18,18.1,18.1,17.9,17.7,17.6,17.5,17.7,18.1,18.6,19.4,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,3.1,6.3,10.7,15.6,19.9,23,24.9,25.6,25.6,25.1,24.6,24.3,24.2,24.4,24.8,25.2,25.6,25.7,25.6,25.4,25.4,25.6,25.9,26.1,26,25.7,25.3,25,24.9,25,25.3,25.7,26.1,26.3,26.4,26.3,25.9,25.3,24.6,24.2,24.1,24.2,24.4,24.6,24.9,24.9,24.6,24.1,23.8,23.6,23.4,23.4,23.5,23.7,23.9,24.1,24.3,24.4,24.5,24.4,24.3,24.2,24.1,24.1,24.1,24.1,24,23.8,23.6,23.2,22.9,22.6,22.5,22.4,22.4,22.4,22.2,21.9,21.5,21.1,20.7,20.3,19.8,19.5,19.3,19,18.7,18.4,18.1,17.9,18,18.1,18.4,18.6,18.8,18.8,18.6,18.4,18.1,17.9,17.7,17.5,17.4,17.4,17.6,17.9,18.2,18.3,18.2,18,17.8,17.8,17.8,18,18.3,18.7,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.3,6.5,10.8,15.5,19.7,22.8,24.7,25.4,25.4,25.1,24.8,24.7,24.8,25,25.3,25.4,25.5,25.5,25.5,25.8,26.1,26.4,26.6,26.5,26.3,26,25.7,25.5,25.5,25.6,25.9,26.1,26.4,26.6,26.6,26.3,25.7,25,24.5,24.4,24.4,24.4,24.6,24.9,25.1,25,24.7,24.4,24.2,24,23.8,23.8,24,24.2,24.5,24.8,25.1,25.2,25.1,24.8,24.7,24.6,24.6,24.5,24.4,24.2,23.8,23.4,23.1,22.9,22.7,22.4,22.2,22.1,22,21.9,21.9,21.8,21.6,21.3,20.9,20.4,20,19.7,19.5,19.3,19,18.7,18.5,18.5,18.6,18.9,19.1,19.2,19.2,18.9,18.5,18.1,17.8,17.7,17.6,17.5,17.5,17.7,18.1,18.4,18.6,18.5,18.3,18.2,18.2,18.1,18.1,18.2,18.4,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.4,3.2,6.2,10.3,14.9,19.2,22.6,24.6,25.4,25.5,25.4,25.2,25.1,25.2,25.3,25.4,25.5,25.8,26,26.3,26.7,26.9,27,27.1,27,26.8,26.5,26.2,26,26,26.1,26.4,26.7,26.9,27,26.8,26.2,25.5,24.8,24.4,24.2,24,24.2,24.5,24.7,24.8,24.8,24.7,24.5,24.3,24.1,24.1,24.3,24.5,24.8,25.2,25.5,25.6,25.6,25.4,25.1,25,24.8,24.7,24.5,24.1,23.6,23.2,23,22.8,22.7,22.4,22.1,21.9,21.7,21.7,21.7,21.7,21.7,21.5,21.2,20.8,20.4,20.1,19.9,19.8,19.7,19.5,19.3,19.2,19.3,19.4,19.6,19.6,19.5,19.1,18.6,18.2,17.9,17.8,17.8,17.9,18,18.2,18.4,18.7,18.9,18.9,18.8,18.8,18.8,18.7,18.6,18.6,18.7,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.9,10,14.7,19.1,22.5,24.4,25.2,25.3,25.3,25.2,25.3,25.4,25.5,25.8,26.1,26.4,26.7,27,27.2,27.4,27.5,27.5,27.3,27,26.6,26.4,26.4,26.5,26.8,27.1,27.3,27.4,27.2,26.7,26,25.2,24.6,24.2,23.9,23.9,24.1,24.4,24.6,24.7,24.7,24.6,24.4,24.3,24.3,24.5,24.7,24.9,25.2,25.5,25.7,25.8,25.7,25.5,25.3,25,24.7,24.4,24,23.6,23.3,23.2,23.1,23,22.7,22.4,22.1,21.9,21.7,21.6,21.6,21.6,21.5,21.3,21,20.7,20.4,20.2,20.1,20.1,20,19.9,19.7,19.6,19.7,19.8,19.9,19.8,19.4,19,18.6,18.4,18.4,18.5,18.6,18.8,19,19.1,19.3,19.4,19.4,19.3,19.4,19.4,19.3,19.2,19.2,19.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,2.9,5.9,10.1,14.8,19.1,22.2,23.9,24.7,25,25.2,25.4,25.6,25.8,26,26.2,26.5,26.8,27.1,27.3,27.5,27.7,27.7,27.5,27.1,26.8,26.7,26.8,27,27.2,27.5,27.6,27.6,27.4,27,26.4,25.7,25,24.4,24,23.9,24,24.3,24.6,24.7,24.8,24.7,24.6,24.6,24.8,24.9,25,25.1,25.3,25.5,25.7,25.8,25.9,25.8,25.5,25.1,24.7,24.4,24.1,23.9,23.8,23.7,23.6,23.4,23.1,22.8,22.6,22.3,22,21.7,21.5,21.5,21.5,21.4,21.3,21,20.7,20.5,20.4,20.3,20.2,20,19.8,19.7,19.8,20,20.2,20.2,19.9,19.5,19.3,19.1,19.1,19.3,19.6,19.8,20,20.1,20.1,20.1,20.1,20,19.9,19.9,19.8,19.9,20.3,21.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3.1,6,10.1,14.5,18.5,21.5,23.4,24.4,25,25.4,25.7,25.8,25.9,25.9,26.1,26.4,26.8,27.2,27.5,27.8,27.8,27.6,27.3,27.1,27.1,27.3,27.5,27.6,27.7,27.7,27.7,27.5,27.1,26.7,26.1,25.4,24.8,24.3,24.2,24.3,24.6,24.9,25.1,25.2,25.2,25.2,25.3,25.4,25.5,25.6,25.6,25.6,25.7,25.8,26,26,25.9,25.6,25.1,24.8,24.5,24.4,24.3,24.2,24.1,23.9,23.6,23.2,23,22.8,22.5,22.1,21.8,21.6,21.5,21.5,21.5,21.4,21.2,21,20.8,20.6,20.4,20.2,20,19.8,19.8,20,20.3,20.6,20.7,20.4,20,19.7,19.6,19.7,19.9,20.4,20.9,21.3,21.4,21.2,20.9,20.6,20.4,20.2,20.2,20.3,20.8,21.6,22.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.5,13.8,17.9,21,23,24.3,25,25.4,25.5,25.5,25.5,25.7,26,26.4,27,27.6,28,28.2,28,27.8,27.6,27.6,27.7,27.8,27.9,27.8,27.7,27.6,27.4,27.2,26.8,26.3,25.7,25.1,24.7,24.6,24.8,25.2,25.6,25.8,25.9,25.9,25.9,26,26.1,26.1,26.1,26.1,26.1,26,26,26.1,26.2,26,25.7,25.3,24.9,24.7,24.6,24.5,24.4,24.2,23.9,23.5,23.2,22.9,22.7,22.5,22.2,21.9,21.8,21.7,21.7,21.7,21.6,21.4,21.2,21.1,20.9,20.6,20.4,20.1,20,19.9,20.1,20.4,20.6,20.7,20.4,20.1,19.9,19.8,19.8,20.1,20.9,21.9,22.7,22.7,22.2,21.4,20.8,20.3,20.1,20.2,20.7,21.4,22.4,23.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,1.2,2.7,5.2,8.9,13.2,17.3,20.6,22.8,24.2,24.9,25.2,25.3,25.4,25.6,25.9,26.4,27,27.7,28.4,28.7,28.5,28.2,28,28,28,28.1,28.1,27.9,27.8,27.6,27.5,27.3,26.9,26.4,25.9,25.3,25,25.1,25.6,26.1,26.5,26.6,26.5,26.4,26.3,26.4,26.5,26.5,26.5,26.5,26.4,26.3,26.2,26.2,26.2,26.1,25.8,25.4,25.1,25,24.8,24.7,24.5,24.2,23.8,23.4,23.2,23,22.7,22.5,22.3,22.1,22.1,22.2,22.2,22.1,21.9,21.7,21.6,21.5,21.3,21,20.8,20.5,20.3,20.1,20.1,20.2,20.3,20.3,20.1,20,19.8,19.8,19.9,20.3,21.2,22.5,23.4,23.4,22.6,21.5,20.6,20.1,19.9,20.2,20.7,21.4,22.2,22.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.4,4.8,8.4,12.5,16.6,20.1,22.6,24.1,25,25.4,25.7,25.9,26.3,26.7,27.2,27.8,28.3,28.6,28.6,28.3,28.2,28.2,28.3,28.5,28.4,28.2,27.9,27.7,27.6,27.3,26.9,26.4,25.8,25.5,25.3,25.6,26.2,26.8,27.1,27.1,26.8,26.6,26.5,26.6,26.7,26.8,26.9,26.8,26.7,26.5,26.4,26.4,26.3,26.2,25.9,25.6,25.4,25.2,25.1,24.9,24.6,24.1,23.8,23.5,23.3,23.2,22.9,22.6,22.3,22.2,22.3,22.5,22.7,22.7,22.4,22.2,22,22,21.9,21.6,21.3,20.9,20.6,20.2,20,19.9,19.9,19.9,19.9,19.9,19.9,20,20.1,20.4,21.2,22.2,23,22.9,22.2,21.2,20.4,20,20,20.3,20.7,21,21.4,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.1,4.4,7.6,11.7,15.9,19.7,22.5,24.3,25.3,25.8,26.1,26.5,26.8,27.1,27.4,27.7,27.9,28,28,28,28.2,28.5,28.8,28.7,28.5,28.1,27.8,27.5,27.1,26.7,26.2,25.9,25.7,25.8,26.1,26.5,27,27.2,27.2,27,26.8,26.7,26.8,26.9,27.1,27.2,27.2,27.1,26.9,26.7,26.6,26.5,26.4,26.2,25.9,25.7,25.6,25.4,25.2,24.8,24.4,24,23.8,23.7,23.5,23.2,22.8,22.5,22.4,22.5,22.8,23.1,23.1,22.9,22.6,22.4,22.5,22.4,22.2,21.8,21.3,20.7,20.3,20,19.8,19.8,19.8,19.9,20,20.1,20.2,20.2,20.4,20.9,21.7,22.2,22.2,21.9,21.2,20.7,20.4,20.5,20.7,20.9,20.9,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.7,1.8,3.8,6.9,11,15.5,19.6,22.7,24.6,25.6,26.1,26.4,26.5,26.6,26.7,26.9,27.1,27.4,27.7,28.1,28.5,29,29.2,29.1,28.6,28.1,27.6,27.2,26.7,26.2,26,26,26.2,26.4,26.6,26.8,27,27.2,27.3,27.3,27.3,27.2,27.2,27.2,27.4,27.7,27.7,27.6,27.3,27,26.8,26.7,26.6,26.5,26.3,26.2,26,25.9,25.7,25.3,24.8,24.6,24.5,24.5,24.4,24.1,23.7,23.2,23,23.1,23.4,23.6,23.5,23.2,22.8,22.6,22.7,22.7,22.5,22.1,21.5,20.9,20.5,20.2,20,19.9,19.9,20.1,20.2,20.4,20.4,20.3,20.4,20.9,21.5,22,22.3,22.3,21.9,21.5,21.3,21.2,21.3,21.3,21.1,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.5,3.4,6.7,11,15.9,20.3,23.5,25.2,26,26.3,26.3,26.3,26.3,26.4,26.7,27.2,27.9,28.5,29.1,29.5,29.5,29.1,28.4,27.8,27.2,26.6,26.2,25.9,26,26.3,26.8,27.1,27.2,27.3,27.3,27.4,27.6,27.8,27.9,27.9,27.8,27.7,28,28.2,28.4,28.2,27.9,27.5,27.2,27.1,27,27,26.9,26.9,26.8,26.6,26.2,25.8,25.5,25.4,25.6,25.9,26.2,26.1,25.6,24.8,24.2,24,23.9,23.8,23.6,23.1,22.7,22.6,22.7,22.7,22.6,22.2,21.7,21.2,20.8,20.5,20.3,20.2,20.1,20.2,20.3,20.4,20.4,20.4,20.6,21.1,21.8,22.5,23,23.1,22.9,22.4,22,21.8,21.8,21.7,21.4,21.2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.7,7.3,12.1,17.4,21.7,24.5,25.8,26.2,26.3,26.3,26.5,26.7,27.2,27.9,28.5,29.1,29.4,29.4,29,28.4,27.8,27.2,26.7,26.3,26.1,26.2,26.6,27.1,27.6,27.8,27.8,27.7,27.7,27.8,28.1,28.4,28.5,28.5,28.3,28.3,28.4,28.7,28.8,28.8,28.5,28.1,27.9,27.7,27.6,27.5,27.5,27.5,27.4,27.2,26.9,26.6,26.5,26.7,27.2,27.9,28.4,28.4,27.8,26.8,25.7,24.8,24.2,23.8,23.3,22.9,22.6,22.6,22.7,22.7,22.6,22.3,22,21.6,21.3,21.1,20.9,20.6,20.5,20.4,20.3,20.3,20.4,20.5,20.9,21.4,22.1,22.9,23.5,23.7,23.4,22.8,22.4,22.2,22.1,22.1,21.8,21.5,21.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.9,4.5,8.7,14,19.2,23.1,25.2,26.1,26.4,26.5,26.8,27.3,27.9,28.7,29.2,29.4,29.2,28.7,28.2,27.6,27.2,26.8,26.6,26.6,26.7,27.1,27.6,28,28.3,28.3,28.2,28.1,28,28.1,28.4,28.6,28.8,28.8,28.7,28.7,28.8,29,29.2,29.2,29.1,28.8,28.6,28.3,28.1,28,28,28,28,27.9,27.8,27.8,27.9,28.2,28.7,29.4,29.9,30,29.6,28.6,27.3,25.9,24.7,23.8,23.3,22.9,22.7,22.7,22.8,22.8,22.7,22.5,22.3,22.1,22,21.8,21.6,21.4,21.2,21,20.8,20.6,20.5,20.7,21,21.5,22.1,22.8,23.4,23.5,23.3,22.7,22.3,22.3,22.3,22.4,22.2,21.9,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.7,10.4,15.7,20.5,23.8,25.5,26.3,26.6,27,27.5,28.2,28.8,29.1,29,28.6,28,27.6,27.3,27.1,27.1,27.2,27.4,27.7,28,28.4,28.6,28.7,28.5,28.4,28.3,28.3,28.4,28.6,28.7,28.8,28.8,28.9,28.9,29.1,29.3,29.5,29.6,29.6,29.5,29.3,29,28.8,28.5,28.4,28.4,28.5,28.8,29.1,29.3,29.4,29.6,29.8,30.2,30.6,30.8,30.5,29.9,28.8,27.4,25.9,24.7,23.9,23.3,23,22.9,22.9,22.9,22.8,22.8,22.8,22.7,22.5,22.4,22.2,22.1,22,21.8,21.4,21,20.8,20.8,20.9,21.3,21.8,22.4,22.9,23.1,22.9,22.5,22.3,22.3,22.4,22.5,22.4,22.2,21.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.3,6.8,11.5,16.6,20.9,23.9,25.5,26.4,27,27.5,28,28.4,28.6,28.4,28,27.7,27.5,27.4,27.6,27.8,28.1,28.4,28.6,28.8,28.8,28.8,28.8,28.7,28.6,28.6,28.7,28.9,29,29.1,29.1,29.1,29.1,29.3,29.4,29.6,29.7,29.8,29.9,29.9,29.9,29.7,29.5,29.2,29,28.9,29.2,29.7,30.4,30.9,31,31,30.9,31,31.1,31.2,31.1,30.7,30.1,29.1,27.7,26.3,25.1,24.1,23.5,23.1,23,23,23.2,23.4,23.5,23.4,23.1,22.8,22.6,22.5,22.4,22.2,21.9,21.5,21.1,20.9,21,21.2,21.6,22,22.4,22.6,22.6,22.5,22.3,22.3,22.4,22.5,22.5,22.3,22.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.6,1.6,3.7,7.1,11.6,16.2,20.2,23.2,25.2,26.4,27.2,27.8,28.2,28.3,28.1,27.9,27.6,27.6,27.7,28,28.4,28.9,29.2,29.4,29.4,29.3,29.1,29,29,29,29.1,29.3,29.5,29.6,29.6,29.5,29.5,29.5,29.6,29.7,29.8,29.8,29.8,29.9,30.1,30.3,30.4,30.3,30.2,30,30,30.3,30.9,31.6,32.2,32.5,32.4,32.2,32,31.8,31.6,31.3,31.1,30.9,30.4,29.5,28.2,26.8,25.4,24.2,23.6,23.3,23.4,23.7,24,24.2,24,23.5,23.1,22.9,22.8,22.7,22.6,22.4,22.1,21.8,21.6,21.4,21.4,21.6,21.8,22.1,22.3,22.5,22.5,22.5,22.5,22.5,22.5,22.6,22.6,22.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.6,1.6,3.5,6.5,10.4,14.7,18.6,21.9,24.3,26.1,27.2,28,28.3,28.2,28.1,27.9,27.8,27.9,28.2,28.7,29.3,29.7,29.9,29.9,29.7,29.5,29.3,29.3,29.4,29.6,29.8,30,30.1,30.1,30,29.9,29.8,29.8,29.8,29.9,30,30.1,30.3,30.6,31.1,31.6,31.9,31.9,31.9,31.9,32,32.4,32.9,33.3,33.5,33.4,33,32.5,32.2,31.8,31.5,31.3,31.3,31.1,30.8,29.9,28.5,26.8,25.3,24.2,23.8,23.9,24.2,24.5,24.5,24.3,23.8,23.4,23.2,23.1,23.2,23.4,23.4,23.4,23.2,22.8,22.5,22.2,22,21.9,22,22.2,22.4,22.6,22.7,22.7,22.7,22.7,22.8,23,23]"),U_={bounds:P_,columns:L_,rows:D_,heights:I_},{bounds:[Tl,Jh,Qh,Al],columns:Bo,rows:jh,heights:la}=U_,tu=[37.309805,44.895974],eu=1e3,nu=1160;function N_(i){const[t,e]=i.origin,[n,s]=i.scale,o=(tu[0]-t)*n,r=(e-tu[1])*s;return(a,l,c)=>{const h=Math.hypot(a-o,l-r);if(h>=nu)return c;const f=t+a/n,u=e-l/s;if(f<Tl||f>Qh||u<Jh||u>Al)return c;const d=(f-Tl)/(Qh-Tl)*(Bo-1),m=(Al-u)/(Al-Jh)*(jh-1),_=Math.min(Math.floor(d),Bo-2),g=Math.min(Math.floor(m),jh-2),p=g*Bo+_,v=ce.lerp(la[p],la[p+1],d-_),M=ce.lerp(la[p+Bo],la[p+Bo+1],d-_),x=Math.max(.16,ce.lerp(v,M,m-g));return h<=eu?x:ce.lerp(x,c,ce.smoothstep(h,eu,nu))}}const iu=["#b2a99a","#bbb1a1","#b8ae9e","#b7ab99","#aea394"],F_="#c4baaa",O_="#a39888",su="#4b5351";function B_(i,t,e){const n=_e(i,"Верхняя и нижняя набережные · подпорные стены",{surface:"stone"});for(const s of t.waterfront.sections){if(s.soft)continue;const o={section:s,upper:!0},r={section:s,upper:!1};for(const{a,b:l,span:c}of s.segments){const[h,f]=a,[u,d]=l,m=(f-d)/c,_=(u-h)/c,g=Math.ceil(c/1.25),p=(v,M,x=0,S=0)=>{const b=ce.lerp(h,u,v),E=ce.lerp(f,d,v);return[b+x*m,e.faceHeight(b,E,M)+S,E+x*_]};for(let v=0;v<g;v++){const M=v/g,x=(v+1)/g,[S,,b]=p((M+x)/2,o);if(t.wallOpening(S,b,s))continue;const E=p(M,r,0,-.12),y=p(x,r,0,-.12),w=p(M,o,0,.24),A=p(x,o,0,.24);if(w[1]-E[1]<.55||A[1]-y[1]<.55)continue;n.face(O_,E,y,A,w);const P=Math.max(1,Math.round((w[1]+A[1]-E[1]-y[1])/2/.54));for(let U=0;U<P;U++){const z=(U+.026)/P,k=(U+.976)/P,W=xt(E,w,z),q=xt(E,w,k),J=xt(y,A,z),Q=xt(y,A,k),bt=([Mt,Xt,_t],[mt,H,N],Y)=>[ce.lerp(Mt,mt,Y)-m*.016,ce.lerp(Xt,H,Y),ce.lerp(_t,N,Y)-_*.016];n.face(iu[(v*11+U*7)%iu.length],bt(W,J,.009),bt(W,J,.991),bt(q,Q,.991),bt(q,Q,.009))}const D=s.coping??.38;if(n.face(F_,w,A,p(x,o,D,.24),p(M,o,D,.24)),s.rail===!1)continue;const C=(U,z)=>p(U,o,D*.55,z);for(const U of[.43,1.18])n.beam(C(M,U),C(x,U),.038,su);const L=Math.max(1,Math.round(c/g/.28));for(let U=0;U<L;U++){const z=ce.lerp(M,x,U/L);n.beam(C(z,.42),C(z,1.16),U===0?.045:.025,su)}}}}n.finish()}const eo=[-287.6,-16.5],ha=-.11,no="#6c4934",on="#ba986f",Wo="#a58b6c",Wl=["#674430","#734d37","#7a5239","#6a4734","#815a41"],ou=["#bd282d","#c63134","#c93636","#b9252d"];function wa([i,t]){return(e,n)=>[i+e*Math.cos(ha)-n*Math.sin(ha),t+e*Math.sin(ha)+n*Math.cos(ha)]}const z_=[[-3.32,-1.15],[1.8,-1.12],[3.48,0],[1.8,1.12],[-3.32,1.18]].map(i=>wa(eo)(...i));function k_(i,t){const e=new ys(1,2),n=So(new ie({color:"white",flatShading:!0}),{surface:"foliage"}),s=new Oi(e,n,t.length),o=new be;t.forEach(({center:r,scale:a,color:l},c)=>{o.position.set(...r),o.scale.set(...a),o.rotation.y=c*.87,o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c,new qt(l))}),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}function H_(i,t){const e=[[-3.32,.98,1.41],[-2.54,1.13,1.25],[-1.12,1.22,1.09],[.62,1.15,1.06],[2.05,.87,1.17],[3.14,.4,1.42],[3.5,0,1.58]];function n(l,c,h){const[f,u,d]=e[l];return t(f-(l===e.length-1?(1-h)*.6:0),c*u*(.73+.27*h),.22+(d-.22)*h)}for(const l of[-1,1])for(let c=1;c<e.length;c++){for(let h=0;h<7;h++){const f=h/7,u=(h+.96)/7;i.face(Wl[(h+c*2)%Wl.length],n(c-1,l,f),n(c,l,f),n(c,l,u),n(c-1,l,u))}if(i.beam(n(c-1,l,1),n(c,l,1),.069,on),c<6){const[h,f,u]=e[c],d=c===1?3:4;for(let p=0;p<d;p++){const[v,M,x]=e[c-1],S=p/d,b=v+(h-v)*S,E=l*(M+(f-M)*S),y=x+(u-x)*S;i.beam(t(b,E,y),t(b,E,y+.34),.045,on)}const[m,_,g]=e[c-1];i.beam(t(m,l*_,g+.34),t(h,l*f,u+.34),.057,on)}}const[s,o,r]=e[0];i.face(no,t(s,-o*.73,.22),t(s,o*.73,.22),t(s,o,r),t(s,-o,r));for(const l of[-.52,.52]){const c=s-.025,h=.3;for(const f of[l-h,l+h])i.beam(t(c,f,.4),t(c,f,1.18),.044,on);for(const f of[.4,1.18])i.beam(t(c,l-h,f),t(c,l+h,f),.044,on);for(let f=0;f<5;f++){const u=f/4;i.beam(t(c,l-h+2*h*u,.43),t(c,l-h,.43+.7*u),.021,on),i.beam(t(c,l+h-2*h*u,.43),t(c,l+h,.43+.7*u),.021,on),i.beam(t(c,l-h+2*h*u,1.14),t(c,l+h,1.14-.7*u),.021,on),i.beam(t(c,l+h-2*h*u,1.14),t(c,l-h,1.14-.7*u),.021,on)}}i.beam(t(s,-o,r+.34),t(s,o,r+.34),.06,on);for(let l=0;l<=10;l++){const c=-o+2*o*l/10;i.beam(t(s,c,r),t(s,c,r+.34),.045,on)}for(let l=1;l<e.length;l++){const[c,h]=e[l-1],[f,u]=e[l];i.face(l%2?"#8e694c":"#856149",t(c,-h,1),t(f,-u,1),t(f,u,1),t(c,h,1))}for(const l of[-1,1])for(const c of[-2.68,-1.87,-.88]){const h=l*(c<-2?1.04:1.12),f=Array.from({length:12},(u,d)=>{const m=d*Math.PI/6;return t(c+Math.cos(m)*.11,h,.66+Math.sin(m)*.1)});i.face("#d0b796",...f)}for(let l=0;l<5;l++){const c=.2+l*.16,h=1.73-l*.13;i.face(on,t(-2.79,h,c),t(-2.13,h,c),t(-2.13,h-.13,c),t(-2.79,h-.13,c))}for(const l of[-2.81,-2.11])i.beam(t(l,1.77,.16),t(l,1.13,1.06),.075,no);i.beam(t(2.55,0,1.38),t(4.88,0,2.98),.105,on),i.beam(t(4.62,0,2.78),t(1.19,0,4.62),.026,Wo);const a=[];for(let l=0;l<14;l++){const c=l*Math.PI/7;a.push(t(-2.37,Math.cos(c)*.31,1.54+Math.sin(c)*.31))}i.beam(t(-2.37,0,1),t(-2.37,0,1.53),.082,no),a.forEach((l,c)=>{i.beam(l,a[(c+1)%a.length],.036,on),c%2===0&&i.beam(l,t(-2.37,0,1.54),.025,on)})}function ru(i,t,e,n){i.beam(t(e,0,.99),t(e,0,n),.087,no);const s=[[1.56,n*.6,1.03],[n*.61,n*.76,.79],[n*.78,n*.9,.55]];for(const[o,r,a]of s){const l=(c,h)=>{const f=Math.sin(h*Math.PI)*(1-c*c);return t(e+.11+.25*f,c*a*(1-h*.2),o+h*(r-o))};for(let c=0;c<4;c++)for(let h=0;h<6;h++){const f=-1+h/3,u=f+1/3,d=c/4,m=(c+1)/4;i.face(ou[h===0||h===5?0:(c+h)%ou.length],l(f,d),l(u,d),l(u,m),l(f,m))}for(const c of[0,1])i.beam(l(-1.06,c),l(1.06,c),.037,no);for(const c of[-1,1])i.beam(l(c,0),l(c,1),.023,Wo)}for(const o of[-1,1]){i.beam(t(e-.77,o*1.05,1.2),t(e,o*.26,n*.86),.022,Wo),i.beam(t(e+.53,o*1.05,1.2),t(e,o*.26,n*.86),.022,Wo);for(let r=1;r<10;r++){const a=r/11,l=o*(1.05-.79*a),c=1.2+(n*.86-1.2)*a;i.beam(t(e-.77*(1-a),l,c),t(e+.53*(1-a),l,c),.019,Wo)}}}function G_(i,t,e,n,s){for(let o=0;o<14;o++){const r=o*2.399,a=Math.cos(r),l=Math.sin(r),c=s*(.52+.38*(o*7%11/10)),h=t(e+a*.06,n+l*.06,.04),f=t(e+a*.36*s,n+l*.36*s,c*.68),u=t(e+a*.57*s,n+l*.57*s,c),d=["#8c8551","#a09461","#b2a173"][o%3];i.beam(h,f,.027,d),i.beam(f,u,.018,d)}}function au(i,t,e,n,s){const o=s?["#a34c43","#be8341","#567b56","#496d80","#c6944e"]:["#675644","#665540"];for(const r of[-.79,.79]){const a=s?"#3e684d":"#444a46";i.beam(t(e-.22,n+r,.025),t(e-.18,n+r,.78),.047,a),i.beam(t(e+.23,n+r,.025),t(e+.22,n+r,.43),.047,a),i.beam(t(e-.18,n+r,.43),t(e+.22,n+r,.43),.052,a)}for(let r=0;r<5;r++){const a=e-.19+r*.1;i.beam(t(a,n-.9,.44),t(a,n+.9,.44),.071,o[r%o.length]),i.beam(t(e-.19-r*.012,n-.9,.57+r*.072),t(e-.19-r*.012,n+.9,.57+r*.072),.067,o[(r+1)%o.length])}}function V_(i,t){const e=new fe;e.name="Сквер у Алых парусов",i.add(e);const n=_e(e,"Алые паруса · деревянный кораблик и клумбы",{surfaces:{wood:[no,on,...Wl,"#8e694c","#856149"],ground:["#777653","#797358"]}}),s=wa(eo),o=t(...eo)+.15,r=(u,d,m)=>{const[_,g]=s(u,d);return[_,o+m,g]},a=(u,d)=>[[-u,-d],[u,-d],[u,d],[-u,d]].map(([m,_])=>s(m,_));n.shell(a(9,2.18),o-.08,o+.11,"#d7d5bd"),n.flat(a(8.87,2.05),o+.125,"#777653");for(let u=0;u<28;u++){const d=-4.2+u*.318,m=d+.307;n.face(["#628d86","#699892","#7ca39a","#5a8179"][u%4],r(d,-1.45,.145),r(m,-1.45,.145),r(m,1.45,.145),r(d,1.45,.145))}H_(n,r),ru(n,r,-1.03,5.02),ru(n,r,.98,4.6),au(n,r,9.27,.08,!0);for(const[u,d,m]of[[-7.25,-.95,1.06],[-6.45,.52,.72],[-5.35,1.11,.93],[4.35,1.4,.89],[5.48,-1.23,1.1],[6.8,.44,.99],[7.85,1.12,.83]])G_(n,r,u,d,m);const l=[],c=["#415c35","#536c3b","#66804c","#4d6540"],h=[[-344.6,-12.8,9.8,3.45],[-326.5,-13.4,10.5,3.4],[-310.6,-14.2,12.5,3.7],[-265.5,-20.3,15,4.7],[-247.5,-23.4,10.8,4.5]];for(const[u,[d,m,_,g]]of h.entries()){const p=wa([d,m]),v=t(d,m)+.14,M=(x,S)=>[[-x,-S],[x,-S],[x,S],[-x,S]].map(b=>p(...b));n.shell(M(_/2,g/2),v-.1,v+.12,"#d4d3c5"),n.flat(M(_/2-.12,g/2-.12),v+.13,"#797358");for(const x of[-.29,.02,.32]){const[S,b]=p(x*_,(u%2-.5)*.8),E=1.15+.51*((u+Math.round(x*10))%3+3)/3;for(let y=0;y<4;y++){const w=E*(.5-y*.095);l.push({center:[S,v+E*(.28+y*.19),b],scale:[w,E*.26,w*.9],color:c[(y+u)%c.length]})}}for(let x=0;x<7;x++){const[S,b]=p((x/6-.5)*_*.75,-.9);l.push({center:[S,v+.2,b],scale:[.42,.16,.42],color:x%3?"#804944":"#77673c"})}}for(const[u,d]of[[-301.1,-31],[-290.8,-31.7],[-273.1,-34.3],[-260.6,-35],[-247.5,-37.5]]){const m=wa([u,d]),_=t(u,d)+.15;au(n,(p,v,M)=>{const[x,S]=m(v,-p);return[x,_+M,S]},0,0,!1)}const f=[[-318,0,6.2],[-310.5,-.4,7.7],[-301,1.5,6.4],[-292.2,-.9,8.3],[-282.1,-1.8,7.6],[-272.4,.8,8.7],[-261,-1.2,6.8],[-249.6,.5,7.3]];for(const[u,[d,m,_]]of f.entries()){const g=t(d,m)+.05;n.beam([d,g,m],[d+.13,g+_*.69,m],.24,"#665949");for(let p=0;p<6;p++){const v=p*2.399,M=_*(p<4?.21:.14);l.push({center:[d+Math.cos(v)*M,g+_*(.6+p*.047),m+Math.sin(v)*M],scale:[_*.26,_*.27,_*.23],color:c[(u+p)%c.length]})}}k_(e,l),n.finish()}function cu(i){const t=new Dc(i);return t.colorSpace=Je,t.anisotropy=4,t}function ze(i,{text:t,position:e,size:n,outward:s,color:o="#fff",background:r,weight:a=700,fontFamily:l="system-ui, sans-serif",letterSpacing:c="0px",lighting:h="spot",glowColor:f="#ffe4af",spill:u=!0}){if(typeof document>"u")return;const d=document.createElement("canvas");d.width=Math.max(160,Math.min(768,Math.round(n[0]*138))),d.height=Math.max(32,Math.round(d.width*n[1]/n[0]));const m=d.getContext("2d");if(!m)return;r&&(m.fillStyle=r,m.fillRect(0,0,d.width,d.height));const _=t.split(`
`);let g=d.height*.76/_.length;m.letterSpacing=c,m.font=`${a} ${g}px ${l}`,g*=Math.min(1,d.width*.93/Math.max(..._.map(S=>m.measureText(S).width)));function p(S,b,E=0){S.font=`${a} ${g}px ${l}`,S.letterSpacing=c,S.fillStyle=b,S.textBaseline="middle",S.textAlign="center",_.forEach((y,w)=>{S.fillText(y,E+d.width/2,E+d.height/2+(w-(_.length-1)/2)*g*1.13)})}p(m,o);const v=new Vn({map:cu(d),alphaTest:.35,toneMapped:!1}),M=new he(new ni(...n),v);M.name=t,M.position.set(...e),M.rotation.y=Math.atan2(...s);let x;if(h==="neon"||h==="backlit"){const S=h==="neon",b=Math.min(44,Math.round(d.width*.12)),E=document.createElement("canvas");E.width=d.width+2*b,E.height=d.height+2*b;const y=E.getContext("2d");y.shadowColor=f,y.shadowBlur=Math.min(b,Math.max(8,g*(S?.64:.27))),p(y,f,b),S&&(y.shadowBlur=0,y.globalAlpha=.18,p(y,"#fff1dd",b));const w=n[0]*E.width/d.width,A=n[1]*E.height/d.height;x=new he(new ni(w,A),new Vn({map:cu(E),transparent:!0,opacity:S?.94:.79,blending:ao,depthWrite:!1,toneMapped:!1})),x.position.z=.014,x.visible=!1,M.add(x)}if(h!=="unlit"&&u){const S=new be;S.position.set(0,h==="spot"?n[1]*.64:0,h==="spot"?.75:.54),S.userData.nightLight={color:f,intensity:h==="neon"?3.8:2.2,range:h==="spot"?3.6:3.1},M.add(S)}return M.userData.setEvening=S=>{const b={spot:.82,backlit:.43,neon:.16,unlit:.5};v.color.setScalar(S?b[h]??.82:1),x&&(x.visible=S)},i.add(M),M}const Fe="#f4f2e9",ad="#e9e7df",cn="#373e3e",Ea="#303637",io="#b28c5e",fc=["#d1b27a","#bc9c63","#c8a86f"],W_="#ecefe8",ts=[[-416.6,-27.8,-17.5],[-408.5,-25.4,-15.7],[-399.5,-23.2,-14.7],[-389.5,-22.8,-14.6],[-378.4,-23.1,-14.8]],cd=[[-415.65,-26.9],[-407.4,-24.5],[-408.6,-16.85],[-416.1,-18.05]];function ld(i,t,e,n){return[[i,e],[t,e],[t,n],[i,n]]}function _i(i,t,e,n,s=24){return Array.from({length:s},(o,r)=>{const a=r*2*Math.PI/s;return[i+e*Math.cos(a),t+n*Math.sin(a)]})}function Ee([i,t],e){return[i,e,t]}function ua(i,t){const e=ts.findIndex(([o])=>o>=i);if(e<0)return ts.at(-1)[t];const n=ts[Math.max(0,e-1)],s=ts[Math.max(0,e)];return n===s?n[t]:n[t]+(s[t]-n[t])*(i-n[0])/(s[0]-n[0])}function _n(i,t,e,n,s,o,r,a){i.shell(ld(t-s/2,t+s/2,n-r/2,n+r/2),e,e+o,a)}function X_(i,t){const e=new fe;e.name="Кофейня Qúeue",i.add(e);const n=_e(e,"Павильон и кофейная стойка",{surfaces:{wood:["#b48558","#796c51"],foliage:["#737a51","#68774a","#83916b"]}}),s=So(new Vn({color:"#759497",transparent:!0,opacity:.26,depthWrite:!1,side:an}),{surface:"glass",strength:.6}),o=cd,r=t(-412.5,-21.7),a=r+.09,l=r+2.82;n.shell(o,r-.18,a,"#c9c5b5"),n.shell(o,l,r+3.12,Fe),n.wall(o[3],o[0],a,l,Fe);for(const[f,u]of[[0,[0,.13,.32,.54,.76,.95,1]],[1,[0,.14,.39,.64,.89,1]],[2,[0,.28,.43,.58,.7,.88,1]]]){const d=o[f],m=o[f+1],_=m[0]-d[0],g=m[1]-d[1],p=Math.hypot(_,g);for(let v=0;v<u.length-1;v++){const M=xt(d,m,u[v]),x=xt(d,m,u[v+1]);if(v===0||v===u.length-2){n.wall(M,x,a,l,Fe);continue}const b=f===2&&v===4,E=f===2&&v===3,y=b||E?r+2.48:l;y<l&&n.wall(M,x,y,l,Fe);const w=xt(M,x,.5),A=E?r+1.1:a;E&&(n.wall(M,x,a,A,"#a8a494"),n.beam([M[0],A,M[1]],[x[0],A,x[1]],.12,Ea));const P=new he(new ni((u[v+1]-u[v])*p,y-A),s);P.position.set(w[0],(A+y)/2,w[1]),P.rotation.y=-Math.atan2(g,_),e.add(P);for(const D of[M,x])n.beam(Ee(D,a),Ee(D,y),.058,Ea);if(n.beam(Ee(M,y),Ee(x,y),.055,Ea),b){const D=xt(M,x,.82);n.beam(Ee(D,r+.92),Ee(D,r+1.3),.052,"#bab4a5")}}}const c=[[-415.28,-22.2],[-414.15,-22.2],[-413.68,-21.78],[-413.68,-19.92],[-412.9,-19.25],[-411.05,-19.25],[-410.8,-18.65],[-411.22,-18.34],[-414.68,-18.67],[-415.25,-19.13]];n.shell(c,a,r+1.07,"#e4decd"),n.shell(c,r+1.07,r+1.14,"#f1e9d7");const h=c.map(f=>xt([-413.5,-19.8],f,1.03));n.shell(h,r+2.08,r+2.15,"#eac58a"),n.shell(h,r+2.15,l,"#e3dbc9"),_n(n,-413.54,r+1.14,-19.02,.86,.46,.45,"#343435"),_n(n,-413.54,r+1.5,-18.79,.76,.08,.04,"#a7a199");for(const f of[-413.8,-413.62,-413.44,-413.26])n.shell(_i(f,-18.99,.06,.06,10),r+1.6,r+1.76,"#b48558");_n(n,-411.83,r+1.14,-18.85,.85,.34,.46,"#948273"),_n(n,-411.83,r+1.48,-18.85,.85,.046,.46,"#bbb2a0");for(const[f,u]of[[-412.4,-21.8],[-410.8,-21.2]])n.shell(_i(f,u,.21,.21,14),a,r+.47,"#e0d9c9"),n.shell(_i(f,u,.32,.32,14),r+.47,r+.52,"#ece4d2");for(const f of[.19,.39,.59,.79]){const[u,d]=xt(o[0],o[1],f),m=t(u,d-.66);for(const _ of[-.24,.24])n.beam([u+_,m,d-.82],[u+_,m+.43,d-.82],.022,cn),n.beam([u+_,m,d-.36],[u+_,m+.86,d-.28],.026,cn),n.beam([u+_,m+.41,d-.82],[u+_,m+.41,d-.35],.032,cn);for(let _=0;_<7;_++){const g=m+.45+_*.063,p=d-.34+_*.008;n.beam([u-.24,g,p],[u+.24,g,p],.015,cn)}_n(n,u,m+.41,d-.58,.48,.05,.42,cn)}for(const f of[.04,.94]){const[u,d]=xt(o[0],o[1],f);q_(n,u,t(u,d-.64),d-.64)}n.finish()}function q_(i,t,e,n){i.shell(_i(t,n,.26,.26,12),e,e+.5,"#e6e7dd"),i.flat(_i(t,n,.22,.22,12),e+.505,"#6b6154"),i.beam([t,e+.5,n],[t+.04,e+1.39,n+.02],.035,"#796c51");for(let s=0;s<9;s++){const o=s*2.4,r=e+.79+s*.075,a=[t+.21*Math.cos(o),r+.11,n+.21*Math.sin(o)];i.beam([t,r,n],a,.024,"#737a51"),i.face(s%2?"#68774a":"#83916b",a,[t+.025,r,n+.06],[a[0]*.5+t*.5,r+.17,a[2]*.5+n*.5])}}function Y_(i){const t=new fe;t.name="Ресторан «Море. Истории о еде»",i.add(t);const e=_e(t,"Белая терраса у «Старинной Анапы»",{surfaces:{wood:[io,...fc],ground:["#6b6154"]}}),{front:[n,s],grade:o}=$s,r=(u,d)=>{const[m,_]=xt(n,s,u/32.59);return[m-d*.197,_+d*.98]},a=(u,d,m,_)=>[r(u,m),r(d,m),r(d,_),r(u,_)],l=o+.15,c=l+2.94;e.shell(a(0,32.59,0,1.9),l-.34,l,"#b6aa94"),e.shell(a(0,32.59,7.1,9.15),l-.34,l,"#b6aa94");for(const[u,d]of[[0,7.3],[12.1,20.4],[24.9,32.59]])e.shell(a(u,d,1.9,7.1),l-.34,l,"#b6aa94");for(const[u,d,m,_]of[[0,32.59,0,1.9],[0,32.59,7.1,9.15],[0,7.3,1.9,7.1],[12.1,20.4,1.9,7.1],[24.9,32.59,1.9,7.1]])for(let g=u+.13;g<d;g+=.34)e.beam(Ee(r(g,m),c),Ee(r(g,_),c),.077,Fe);for(let u=0;u<6;u++){const d=c-.02+u*.09;e.beam(Ee(r(0,0),d),Ee(r(32.59,0),d),.066,Fe);for(const m of[0,32.59])e.beam(Ee(r(m,0),d),Ee(r(m,9.15),d),.066,Fe)}for(const u of[.14,4.55,8.98,13.41,17.84,22.27,26.7,32.43])e.beam(Ee(r(u,.22),l),Ee(r(u,.22),c+.44),.165,Fe);for(const u of[2.35,6.82,11.25,15.66,20.07,24.48,28.89,31.3]){e.shell(a(u-.76,u+.76,.16,.72),l,l+.65,Fe);for(let _=1;_<=5;_++){const g=l+.1+_*.085;e.beam(Ee(r(u-.75,.153),g),Ee(r(u+.75,.153),g),.02,ad)}e.flat(a(u-.7,u+.7,.2,.68),l+.655,"#788166");const[d,m]=r(u,1.34);_n(e,d,l+.69,m,.82,.07,.7,"#ab8d63"),_n(e,d,l,m,.08,.69,.08,"#545549")}const[h,f]=r(25.4,-.05);ze(t,{text:"МОРЕ",position:[h,c+.2,f],size:[2.28,.41],outward:[.197,-.98],color:"#6e553a",lighting:"spot",glowColor:"#ffd089"});for(const u of[24.65,25.4,26.15])e.beam(Ee(r(u,-.018),c+.5),Ee(r(u,-.17),c+.44),.041,"#70664f");e.finish()}function Z_(i,t,e,n,s){const o=new fe,r=new Vn({color:"#c9ba98",toneMapped:!1}),a=new yn(.043,8,6),l=4,c=16;let h;for(let f=0;f<=c;f++){const u=f/c,[d,m]=xt(e,n,u),_=s-.18*Math.sin(Math.PI*(u*l%1)),g=[d+.13,_,m];if(h&&t.beam(h,g,.015,"#353535"),h=g,f===c)continue;const p=new he(a,r);p.position.set(d+.13,_-.052,m),f%4===2&&(p.userData.nightLight={color:"#ffe4ad",intensity:3.5,range:3.4}),o.add(p)}o.userData.setEvening=f=>r.color.set(f?"#fff0be":"#c9ba98"),i.add(o)}function $_(i,t){const e=new fe;e.name="Гриль-бар «Бикью»",i.add(e);const n=_e(e,"Остеклённый фасад на Греческом переулке",{surfaces:{flatRoof:["#353635"],stone:["#77726a"],wood:["#403731"]}}),s=[[-456.42,4.1],[-456.94,24.1]],o=[[-458.12,4.1],[-458.64,24.1]],r=[o[0],s[0],s[1],o[1]],a=t(-457,14.1)+.11,l=Math.min(...s.map(d=>t(...d)))-.2,c=a+2.82;n.shell(r,l,a+.12,"#77726a"),n.shell(r,c,c+.21,"#353635"),n.wall(...o,a+.1,c,"#403731");const h=So(new Vn({color:"#394c50",transparent:!0,opacity:.53,depthWrite:!1,side:an}),{surface:"glass",strength:.7});for(const[d,m,_]of[[...s,14],[o[0],s[0],1],[s[1],o[1],1]])for(let g=0;g<_;g++){const p=xt(d,m,g/_),v=xt(d,m,(g+1)/_),M=xt(p,v,.5),x=v[0]-p[0],S=v[1]-p[1],b=new he(new ni(Math.hypot(x,S),c-a-.12),h);if(b.position.set(M[0],(c+a+.12)/2,M[1]),b.rotation.y=-Math.atan2(S,x),e.add(b),n.beam(Ee(p,a+.08),Ee(p,c),.074,"#292c2b"),n.beam(Ee(p,a+.85),Ee(v,a+.85),.041,"#393b39"),_===14&&g!==6&&g!==7){for(const E of[.12,.45]){const y=Math.max(0,t(M[0]+.15,M[1])-a),w=(A,P)=>{const[D,C]=xt(p,v,A+E);return[D+.025,a+P+y,C]};n.face("#c89045",w(0,.36),w(.14,.36),w(.31,.6),w(.17,.6)),n.face("#c89045",w(.17,.6),w(.31,.6),w(.14,.84),w(0,.84))}_n(n,M[0]-.75,a+.71,M[1],.55,.09,.62,"#856747"),_n(n,M[0]-.75,a+.1,M[1],.07,.61,.07,"#343330")}}Z_(e,n,...s,c-.06);const f=new Vn({color:"#757078",toneMapped:!1}),u=new he(new Ae(.047,.047,3),f);u.position.set(-457.8,c-.27,7.7),u.userData.setEvening=d=>f.color.set(d?"#ac91ff":"#757078"),u.userData.nightLight={color:"#9b78ff",intensity:2.5,range:3.3},e.add(u),ze(e,{text:`BAR
BQ`,position:[-456.54,a+1.36,13.98],size:[1.34,1.17],outward:[1,.026],color:"#cac2a7",weight:550,lighting:"unlit"}),n.finish()}function K_(i,t,e){const n=new Vn({color:"#d2d0c2",toneMapped:!1}),s=new fe;for(const o of[1,2]){const r=Array.from({length:41},(c,h)=>{const f=ce.lerp(e[0],e.at(-1),h/40),[u,d,m]=t(f,o,-.18);return new O(u,d,m+(o===1?-.05:.05))}),a=new Nc(r),l=new he(new Dr(a,85,.026,5,!1),n);s.add(l)}s.userData.setEvening=o=>n.color.set(o?"#fff2d7":"#d2d0c2"),i.add(s)}function J_(i,t){const e=new fe;e.name="Лаундж-зона «Очередь»",i.add(e);const n=_e(e,"Волнообразный навес и кофейня"),s=(m,_)=>t(m,_)+.19,o=m=>{const _=(m+395.7)/5.6;return s(m,ua(m,2))+3.65+1.08*Math.exp(-(_**2))},r=(m,_,g=0)=>[m,o(m)+g,ua(m,_)],a=[-416.6,-409.3,-403.8,-388.6,-383.6,-378.4];for(const m of[1,2])for(let _=1;_<a.length;_++){const g=a[_-1],p=a[_],v=Math.ceil((p-g)/.37);let M,x;for(let S=0;S<=v;S++){const b=S/v,E=g+(p-g)*b,y=ua(E,m),w=s(E,y),A=Math.sqrt(Math.max(0,1-(2*b-1)**2)),P=[E,w+.09+(o(E)-w-.36)*A,y],D=r(E,m);M&&(n.beam(M,P,.18,Fe),n.beam(x,D,.2,ad),n.beam([x[0],x[1]-.23,x[2]],r(E,m,-.23),.075,Fe)),(S>0||_===1)&&n.beam(P,D,S===0||S===v?.18:.065,Fe),M=P,x=D}}for(let m=0;m<=94;m++){const _=a[0]+(a.at(-1)-a[0])*m/94;n.beam(r(_,1,-.11),r(_,2,-.11),.1,Fe)}K_(e,r,a),X_(e,s);const l=-412.2,c=o(l)-.1,h=(ts[1][2]-ts[0][2])/(ts[1][0]-ts[0][0]),f=[-h,1],u=ua(l,2)+.15,d=[[-1.65,-.04],[1.65,-.04],[1.65,.04],[-1.65,.04]].map(([m,_])=>[l+m,u+m*h+_]);n.shell(d,c-.21,c+.21,Fe),ze(e,{text:"Qúeue · кофе и море",position:[l,c,u+.05],size:[3.2,.39],outward:f,color:Ea,lighting:"spot"}),n.finish()}function lu(i,t,e,n){const s=t(e,n)+.16,o=_i(e,n,3.45,2.35);i.shell(o,s-.24,s+.08,io);for(let a=-10;a<=10;a++){const l=a*.22,c=3.4*Math.sqrt(1-(l/2.35)**2);i.beam([e-c,s+.084,n+l],[e+c,s+.084,n+l],.018,fc[(a+12)%fc.length])}for(const a of[-1,1]){const l=[e+a*2.5,n];i.shell(_i(...l,.095,.095,10),t(...l)-.12,s+3.05,Fe)}const r=_i(e,n,3.55,2.45,32);for(let a=0;a<r.length;a++)i.beam(Ee(r[a],s+2.88),Ee(r[(a+1)%r.length],s+2.88),.13,Fe);for(let a=-8;a<=8;a++){const l=a*.4,c=2.41*Math.sqrt(1-(l/3.55)**2);i.beam([e+l,s+2.89,n-c],[e+l,s+2.89,n+c],.09,Fe)}for(const a of[-.23,-.09,.09,.23]){const l=Array.from({length:32},(c,h)=>{const f=h*Math.PI/16;return[e+.97*Math.cos(f),s+1.38+.99*Math.sin(f),n+a]});for(let c=0;c<l.length;c++)i.beam(l[c],l[(c+1)%l.length],.035,Fe)}_n(i,e,s+.55,n,1.08,.055,.48,io);for(const a of[-.57,.57])i.beam([e+a,s+2.21,n],[e+a,s+2.89,n],.018,cn)}function Q_(i,t){const s=t(-397.8,-29.25)+.18;for(const r of[-2.28,2.28])i.shell(_i(-397.8+r,-29.25,.085,.085,12),s-.14,s+3.38,Fe);const o=[[-397.8-3.18,s+2.77,-29.25+.45],[-397.8-3.27,s+3,-29.25-1.37],[-397.8,s+2.67,-29.25-.72],[-397.8+3.29,s+3.02,-29.25-1.3],[-397.8+3.14,s+2.8,-29.25+.49]];for(let r=0;r<o.length;r++)i.beam(o[r],o[(r+1)%o.length],.085,Fe);for(let r=0;r<20;r++){const a=(r+1)/21,l=a<.5?xt(o[1],o[2],a*2):xt(o[2],o[3],(a-.5)*2);i.beam(l,xt(o[0],o[4],a),.064,Fe)}}function j_(i,t){const e=new fe;e.name="Качели, теневые крылья и белые галечные сиденья",i.add(e);const n=_e(e,"Настилы и мебель",{surfaces:{wood:[io,...fc]}});lu(n,t,-410.7,-30.1),lu(n,t,-382.8,-25.55),Q_(n,t);const s=new yn(1,24,12),o=new ie({color:W_});for(const[f,u,d,m,_,g]of[[-401.9,-30.05,1.12,.69,.41,.18],[-402.7,-27.65,.88,.65,.4,-.29],[-399.6,-26.05,1.26,.72,.43,-.14],[-396.7,-28.5,.73,.62,.41,.26],[-395.1,-26.05,.98,.68,.43,-.31]]){const p=new he(s,o);p.scale.set(d,_,m),p.rotation.y=g,p.position.set(f,t(f,u)+_+.15,u),p.castShadow=!0,p.receiveShadow=!0,e.add(p)}for(const[f,u]of[[-406.2,-20.1],[-403,-18.2],[-390.1,-17.3]]){const d=t(f,u)+.15;n.shell(_i(f,u,.38,.38,16),d+.72,d+.77,cn),n.beam([f,d,u],[f,d+.72,u],.045,cn);for(const m of[-.74,.74]){_n(n,f+m,d+.43,u,.42,.055,.42,cn);for(const _ of[-.16,.16])for(const g of[-.15,.15])n.beam([f+m+_,d,u+g],[f+m+_,d+.43,u+g],.029,cn);n.wall([f+m*1.25,u-.19],[f+m*1.25,u+.19],d+.46,d+.81,cn)}}const r=-387.7,a=-20.4,l=t(r,a)+.16,c=ld(r-.92,r+.92,a-.72,a+.72);n.shell(c,l-.12,l+.42,io);for(const f of c)n.beam(Ee(f,l),Ee(f,l+1.75),.09,io);const h=[[r-1,l+2.35,a],[r+1,l+2.35,a]];for(const f of[-1,1])n.face("#99704d",...h,[r+1.03,l+1.72,a+f*.82],[r-1.03,l+1.72,a+f*.82]);n.finish()}function tx(i,t){const e=_e(i,"Памятный знак Матери Марии"),n=-652.7,s=-66.6,o=t(n,s)+.1,r=[[-1.02,-.42],[-.73,-.78],[.59,-.78],[1.05,-.39],[1.15,.24],[.91,.59],[-.78,.61],[-1.1,.18]],l=[[-.63,.68,-.21],[-.42,1.14,-.51],[.04,1.53,-.56],[.53,1.25,-.39],[.84,.85,-.01],[.88,.47,.37],[-.76,.48,.43],[-.94,.59,.16]].map(([h,f,u])=>[n+h,o+f,s+u]),c=r.map(([h,f])=>[n+h,o-.13,s+f]);for(let h=0;h<r.length;h++){const f=(h+1)%r.length;e.face(h%2?"#706f67":"#666860",c[h],c[f],l[f],l[h]),e.face(h%3?"#8e928b":"#a4a79f",l[h],l[f],[n+.03,o+.95,s-.01])}e.beam([n+.02,o+.05,s+1],[n+.08,o+1.58,s-.57],.14,"#807f71"),e.beam([n-.82,o+1,s+.055],[n+.9,o+1,s+.055],.14,"#807f71");for(let h=0;h<3;h++)for(const[f,u]of[-1.2,-.6,.035,.635].entries()){const d=n+u+.286,m=s+1.33+h*.58,_=t(d,m)+.035;_n(e,d,_-.08,m,.57,.09,.56,f===0||f===3?"#a78277":"#929897")}e.finish()}function ex(i,t){const e=_e(i,"Памятник морскому десанту"),n=-631.7,s=-37.2,o=t(n,s)+.09,r=(l,c,h)=>[n+l,o+c,s+h];_n(e,n,o-.12,s+.45,2.85,.23,2.35,"#bbb6aa"),_n(e,n,o+.11,s+.3,2.19,.26,1.57,"#424545"),_n(e,n,o+.37,s-.25,1.06,2.08,.22,"#333837");const a=Array.from({length:10},(l,c)=>{const h=Math.PI/2+c*Math.PI/5,f=c%2?.064:.151;return r(-.28+f*Math.cos(h),2.12+f*Math.sin(h),-.135)});for(let l=0;l<a.length;l++)e.face("#b6a06b",r(-.28,2.12,-.135),a[l],a[(l+1)%a.length]);e.beam(r(-.34,.52,.73),r(.73,1.39,.54),.13,cn),e.beam(r(-.44,.58,.48),r(-.2,.53,.95),.18,cn);for(const[l,c]of[[[-.66,.79,.72],[-.62,1.33,.65]],[[-.21,.84,.7],[.01,1.35,.58]]])e.beam(r(-.37,.57,.74),r(...l),.11,cn),e.beam(r(...l),r(...c),.1,cn),e.face(cn,r(...c),r(c[0]-.1,c[1]-.26,c[2]+.07),r(c[0]+.08,c[1]-.23,c[2]-.05));for(const l of[-1,0,1]){const c=l*.82,h=l*1.21,f=[r(c-.32,.28,1.72),r(c+.32,.28,1.72),r(h+.37,.19,3.17),r(h-.37,.19,3.17)],u=f.map(([d,,m])=>[d,t(d,m)-.08,m]);e.face("#b7b5ac",...f);for(let d=0;d<f.length;d++){const m=(d+1)%f.length;e.face("#a7a8a1",f[d],f[m],u[m],u[d])}e.face("#444746",r(c-.25,.294,1.8),r(c+.25,.294,1.8),r(h+.28,.216,3.05),r(h-.28,.216,3.05))}e.finish()}function nx(i,t){J_(i,t),j_(i,t),Y_(i),$_(i,t),tx(i,t),ex(i,t)}const xs=Math.PI*2;function hr(i,t,e,n=36){return Array.from({length:n},(s,o)=>{const r=o/n*xs;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function ix(){const e=new Uint8Array(18432);for(let s=0;s<48;s++){const o=(s+.5)/48;for(let r=0;r<96;r++){const a=r/96*xs,l=Math.max(0,Math.sin(a*3)*.06+Math.sin(a*7+.4)*.035),c=o>.51+l?[173+o*46,196+o*36,211+o*38]:o>.42?[71,78,66]:[122+o*71,113+o*77,99+o*86],h=(s*96+r)*4;e.set([...c,255],h)}}const n=new Pc(e,96,48);return n.colorSpace=Je,n.mapping=jo,n.needsUpdate=!0,new cr({color:"#ced3d4",envMap:n,reflectivity:.88,specular:"#f2f5f5",shininess:78})}function sx(i,t){const s=_e(i,"Фонтан «Жемчужина Анапы»"),o=(d,m,_=0)=>[d,t(d,m)+.17+_,m],r=hr(-238,2,3.5),a=hr(-238,2,3.71);r.forEach(([d,m],_)=>{const g=(_+1)%r.length;s.face("#555857",o(-238,2),o(d,m),o(...r[g])),s.face("#997359",o(d,m),o(...a[_]),o(...a[g]),o(...r[g]))});for(let d=0;d<28;d++){const m=d*xs/28,_=hr(-238+2.85*Math.cos(m),2+2.85*Math.sin(m),.036,8);s.face("#a7a8a1",..._.map(g=>o(...g,.008)))}const l=.13;for(let d=0;d<6;d++){const m=l+d*xs/6;for(let _=0;_<5;_++){const g=m-.34+_*.135,p=g+.133,v=(E,y,w)=>o(-238+Math.cos(E)*y,2+Math.sin(E)*y,w),M=v(g,4.43,.44),x=v(p,4.43,.44),S=v(g,4.93,.36),b=v(p,4.93,.36);s.face("#9e9a90",M,x,v(p,4.41,-.045),v(g,4.41,-.045)),s.face("#8e8b84",v(g,5.06,.02),v(p,5.06,.02),v(p,5.06,.1),v(g,5.06,.1)),s.face("#bf8770",M,x,b,S),s.face("#b67e64",S,b,v(p,5.06,.1),v(g,5.06,.1)),_===0&&s.face("#a39d92",M,S,v(g,5.06,.02),v(g,4.41,-.045)),_===4&&s.face("#a39d92",x,b,v(p,5.06,.02),v(p,4.41,-.045))}}const c=new fe;c.name="Шесть зеркальных сфер",i.add(c);const h=new yn(1,28,20),f=ix(),u=[[0,0,.57,3.35],[-1.65,1.12,.56,.86],[1.77,-.98,.48,1.12],[-2.31,-1.72,.51,0],[2.44,1.69,.47,0],[.47,-2.67,.43,0]];for(const[d,m,_,g]of u){const[p,v,M]=o(-238+d,2+m),x=new he(h,f);if(x.scale.setScalar(_),x.position.set(p,v+_+g,M),x.castShadow=!0,c.add(x),!!g)for(let S=0;S<11;S++){const b=S/11*xs,E=b+.88;s.beam([p+Math.cos(b)*.13,v,M+Math.sin(b)*.13],[p+Math.cos(E)*_*.63,v+g+.13,M+Math.sin(E)*_*.63],.026,"#a5a7a4")}}s.finish()}function ox(i,t){const o=Math.cos(-.51),r=Math.sin(-.51),a=_e(i,"Арка Центрального пляжа"),l="#eeeae0",c="#dbd9ce",h=3.11,f=[1.21,1.28,1.34,1.28,1.21],u=[-6.36,-3.69,-1.25,1.25,3.69,6.36],d=(p,v)=>[197.02+p*o-v*r,-463.27+p*r+v*o],m=Math.max(...u.map(p=>t(...d(p,0))))+.16,_=(p,v,M)=>{const[x,S]=d(p,v);return[x,m+M,S]},g=(p,v,M,x)=>[d(p-M,v-x),d(p+M,v-x),d(p+M,v+x),d(p-M,v+x)];for(const[p,v]of u.entries())if(p===0||p===1||p===4||p===5){a.shell(g(v,0,.47,1.18),m-.4,m+h,l),a.shell(g(v,0,.57,1.27),m+h-.045,m+h+.1,l);for(const x of[-1.03,1.03])a.shell(g(v,x,.37,.17),m+h,m+h+.95,l);a.shell(g(v,0,.42,1.23),m+h+.95,m+h+1.09,l)}else for(const x of[-.92,.92])a.shell(g(v,x,.2,.21),m-.4,m+h,l),a.shell(g(v,x,.27,.28),m+h-.06,m+h+.085,l);for(const p of[-.92,.92])for(let v=0;v<f.length;v++){const M=(u[v]+u[v+1])/2,x=(u[v+1]-u[v])/2,S=(b,E,y)=>_(M+(x+E)*Math.cos(b),p+y*.17,h+(f[v]+E)*Math.sin(b));for(let b=0;b<14;b++){const E=Math.PI*b/14,y=Math.PI*(b+1)/14;for(const w of[-1,1])a.face(l,S(E,-.19,w),S(y,-.19,w),S(y,.11,w),S(E,.11,w));a.face(c,S(E,-.19,-1),S(y,-.19,-1),S(y,-.19,1),S(E,-.19,1)),a.face(l,S(E,.11,-1),S(y,.11,-1),S(y,.11,1),S(E,.11,1))}}a.finish()}function rx(i,t){const s=t(64.17,13.11)+.16,o=_e(i,"Скульптура «Белая шляпа»"),r=["#8b8777","#a39e8d","#a9a38f","#8d897b","#969383"],a=[[1.28,.77,-.12,.1],[1.39,.74,.35,.19],[1.12,.65,.75,.17],[.79,.57,1.12,.08],[.48,.38,1.56,-.17]].map(([m,_,g,p],v)=>Array.from({length:13},(M,x)=>{const S=x/13*xs,b=1+.13*Math.sin(x*3.3+v*.81);return[64.17+p+Math.cos(S)*m*b,s+g+.12*Math.cos(x*2.4+v),13.11+Math.sin(S)*_*b]}));for(let m=0;m<a.length-1;m++){const _=a[m],g=a[m+1];_.forEach((p,v)=>{const M=(v+1)%_.length;o.face(r[(v+m*3)%r.length],p,_[M],g[M]),o.face(r[(v+m*3+1)%r.length],p,g[M],g[v])})}o.face("#a29e8f",...a.at(-1));const l=(m,_,g)=>Array.from({length:32},(p,v)=>{const M=v/32*xs,x=Math.cos(M)*m,S=Math.sin(M)*m*.83,b=g?.038*Math.cos(2*M):.044*Math.cos(2*M);return[64.17-.13+x,s+1.56+_+S*.37+b,13.11+S]}),h=[[.75,0,!1],[.75,.035,!1],[.4,.12,!1],[.405,.155,!0],[.39,.22,!0],[.34,.43,!0],[.24,.49,!0],[.08,.46,!0]].map(m=>l(...m));for(let m=0;m<h.length-1;m++){const _=h[m+1],g=h[m];g.forEach((p,v)=>{const M=(v+1)%g.length;o.face(m===3?"#d8d7ce":"#f5f3e9",p,g[M],_[M],_[v])})}o.face("#f5f3e9",...h.at(-1));const f={Б:[[[.88,1],[0,1],[0,0],[.76,0],[.9,.22],[.72,.53],[0,.53]]],Е:[[[.88,1],[0,1],[0,0],[.9,0]],[[0,.5],[.75,.5]]],Л:[[[0,0],[.31,1],[.84,1],[.84,0]]],А:[[[0,0],[.45,1],[.9,0]],[[.2,.42],[.7,.42]]],Я:[[[.9,0],[.9,1],[.25,1],[0,.76],[.23,.54],[.9,.54]],[[.52,.54],[0,0]]],Ш:[[[0,1],[0,0],[.95,0],[.95,1]],[[.475,0],[.475,1]]],П:[[[0,0],[0,1],[.86,1],[.86,0]]]};[..."БЕЛАЯ ШЛЯПА"].forEach((m,_)=>{for(const g of f[m]??[]){const p=g.map(([v,M])=>{const x=(_+v-5.5)*.155;return[64.17+Math.sin(x)*1.17,s+.41+M*.175,13.11+Math.cos(x)*.88]});p.slice(1).forEach((v,M)=>o.beam(p[M],v,.032,"#f5f3e9"))}});const u=hr(64.17,13.11,2.45),d=(m,_)=>[m,t(m,_)+.17,_];u.forEach((m,_)=>o.face("#b4ac9c",d(64.17,13.11),d(...m),d(...u[(_+1)%u.length])));for(let m=0;m<46;m++){const _=m*2.39996,g=1.12+m%13/13*1.19,p=64.17+Math.cos(_)*g,v=13.11+Math.sin(_)*g,M=t(p,v)+.17;o.shell(hr(p,v,.09+m%4*.035,6),M-.01,M+.03+m%3*.025,r[m%r.length])}o.finish()}function ax(i,t){sx(i,t),rx(i,t),ox(i,t)}function cx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Ce;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in o){const f=hu(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const m=hu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function hu(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new In(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const _=h.getComponent(u,m);a.setComponent(u+f,m,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const dc=Math.PI/4,lx="#e1d9bf",hx="#26313a",ux=[[37.2996896,44.8872772],[37.2995282,44.8874039],[37.2994588,44.8874602],[37.2994093,44.887514],[37.2990185,44.8878942],[37.2988335,44.8880063],[37.2982407,44.8885479]],fx=[[37.2992911,44.8877628],[37.2988951,44.8881412]];function qs(i,t){const e=(i-.5)*dc;return[Math.sin(e)*t,Math.cos(e)*t]}function uu(i){const t=i*dc;return-.85*Math.sin(t)+.5*Math.cos(t)>0}function dx(i,{rings:t},e){const n=t[0],s=n.reduce((x,S)=>x+S[0],0)/n.length,o=n.reduce((x,S)=>x+S[1],0)/n.length,r=e(s,o),a=Math.min(...n.map(x=>e(...x)))-r-.3,c=n.reduce((x,[S,b])=>x+Math.hypot(S-s,b-o),0)/n.length*.74,h=new ie({color:lx,flatShading:!0}),f=new ie({color:hx,flatShading:!0}),u=new ie({color:"#b6b8ae"}),d=new ie({color:"#a9c2c8",transparent:!0,opacity:.56,depthWrite:!1}),m=new fe,_=new Map([[h,[]],[f,[]]]);m.name="Анапский маяк",m.position.set(s,r,o),i.add(m);function g(x,S,b,E,y,w=8){const A=new he(new Un(E,b,S-x,w),y);return A.position.y=(S+x)/2,A.rotation.y=-Math.PI/w,A.castShadow=y!==d,m.add(A),A}function p(x,S,b,E,y,w,A,P){const D=x*dc,C=Math.sin(D),L=Math.cos(D),U=c*Math.cos(dc/2)+A,z=new Ae(y,b,w);z.rotateY(D),z.translate(C*U+L*E,S,L*U-C*E),_.get(P).push(z)}g(a,3.15,c*1.13,c*1.13,h),g(3.15,3.55,c*1.16,c*1.16,h);const v=[[3.55,6.5,!0],[6.5,9.2,!1],[9.2,12,!0],[12,14.6,!1],[14.6,17.05,!0]];for(const[x,S,b]of v){const E=new Ce,y=[[],[]];for(let A=0;A<8;A++){const[P,D]=qs(A,c),[C,L]=qs(A+1,c);if(y[Number(b&&uu(A))].push(P,x,D,C,x,L,C,S,L,P,x,D,C,S,L,P,S,D),x<14.6){const U=b&&uu(A)?f:h;for(const z of[-c*.2,c*.2])p(A,(x+S)/2,S-x,z,c*.095,.16,.03,U)}}E.setAttribute("position",new se(y.flat(),3)),E.addGroup(0,y[0].length/3,0),y[1].length&&E.addGroup(y[0].length/3,y[1].length/3,1),E.computeVertexNormals();const w=new he(E,[h,f]);w.castShadow=!0,m.add(w)}g(12.2,12.39,c*1.05,c*1.05,h),g(13.4,13.54,c*1.04,c*1.04,h),g(17.05,17.65,c*1.07,c*1.07,h),g(17.65,17.9,c*1.12,c*1.12,h);for(let x=0;x<8;x++)for(const S of[-c*.22,0,c*.22])p(x,17.34,.24,S,.26,.07,c*.067,f);for(const[x,S]of _){m.add(new he(cx(S),x));for(const b of S)b.dispose()}g(17.9,18.11,c*.71,c*.71,h,12),g(18.11,20.05,c*.58,c*.58,d,12),g(20.05,20.83,c*.68,.24,h,12),g(20.83,21,.24,.12,h,12),g(18.48,19.43,.31,.31,new ie({color:"#a0433d"}),12);const M=[];for(let x=0;x<12;x++){const S=(x-.5)*Math.PI/6,b=Math.sin(S)*c*.58,E=Math.cos(S)*c*.58;M.push([[b,18.11,E],[b,20.05,E],.052])}for(let x=0;x<8;x++){const[S,b]=qs(x,c*1.01),[E,y]=qs(x+1,c*1.01);M.push([[S,17.9,b],[S,18.8,b],.042]);for(const C of[18.35,18.8])M.push([[S,C,b],[E,C,y],.037]);const[w,A]=qs(x,c*.88),[P,D]=qs(x+1,c*.88);M.push([[w,19.55,A],[P,19.55,D],.033]),M.push([[w,20.46,A],[P,20.46,D],.033]),M.push([[w,19.55,A],[w,20.46,A],.033])}hd(m,M,u,"Ограждения фонаря")}function hd(i,t,e,n){const s=new Ae(1,1,1),o=new Oi(s,e,t.length);o.name=n;const r=new be,a=new O,l=new O,c=new O,h=new O(1,0,0);for(const[f,[u,d,m]]of t.entries())a.set(...u),l.set(...d),c.subVectors(l,a),r.position.copy(a).lerp(l,.5),r.scale.set(c.length(),m,m),r.quaternion.setFromUnitVectors(h,c.normalize()),r.updateMatrix(),o.setMatrixAt(f,r.matrix);i.add(o)}function fu(i,t,e,{height:n,color:s,spacing:o,width:r,name:a}){const l=[];for(let c=1;c<t.length;c++){const[h,f]=t[c-1],[u,d]=t[c],m=Math.ceil(Math.hypot(u-h,d-f)/2.4),_=(g,p)=>{const v=h+(u-h)*g,M=f+(d-f)*g;return[v,e(v,M)+p,M]};for(let g=0;g<m;g++){const p=g/m,v=(g+1)/m;l.push([_(p,.05),_(p,n+.05),r*2.8]);for(const x of[.14,n])l.push([_(p,x),_(v,x),r*1.7]);const M=Math.ceil(Math.hypot(u-h,d-f)/(m*o));for(let x=1;x<M;x++){const S=(g+x/M)/m;l.push([_(S,.14),_(S,n),r])}}c===t.length-1&&l.push([_(1,.05),_(1,n+.05),r*2.8])}hd(i,l,new ie({color:s}),a)}function px(i,{origin:[t,e],scale:n},s){const o=r=>r.map(([a,l])=>[(a-t)*n[0],(e-l)*n[1]]);fu(i,o(ux),s,{height:1.06,color:"#9a9c95",spacing:.16,width:.038,name:"Ограда Верхней Набережной"}),fu(i,o(fx),s,{height:1.76,color:"#363f40",spacing:.16,width:.027,name:"Ограда маяка"})}const mx="125862202",gx="977564342",Rl=12,fa=3;function da(i,t,e,n){const s=[];for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=e*(n(r)-t),c=e*(n(a)-t);if(l>=0&&s.push(r),l<0!=c<0){const h=l/(l-c);s.push([ce.lerp(r[0],a[0],h),ce.lerp(r[1],a[1],h)])}}return s}function xn(i,t,e,n,s){const o=new Fc(t.map(([a,l])=>new vt(a,-l))),r=new he(new Lr(o,{depth:n,bevelEnabled:!1}),s);r.rotation.x=-Math.PI/2,r.position.y=e,r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function _x(i,t,e){const n=[],s=Math.sign(i.reduce((o,[r,a],l)=>{const[c,h]=i[(l+1)%i.length];return o+r*h-c*a},0));for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=a[0]-r[0],c=a[1]-r[1],h=Math.hypot(l,c);if(h<4||Math.abs(e(r)-e(a))<h*.8)continue;const f=Math.floor(h/3.3);for(let u=0;u<f;u++){const d=(u+.5)/f;n.push([r[0]+l*d+s*c/h*.045,t,r[1]+c*d-s*l/h*.045,-Math.atan2(c,l)])}}return n}function vs(i,t,e,n,s){const o=new Oi(new Ae(n,s,.12),e,t.length),r=new be;t.forEach(([a,l,c,h],f)=>{r.position.set(a,l,c),r.rotation.y=h,r.updateMatrix(),o.setMatrixAt(f,r.matrix)}),o.receiveShadow=!0,i.add(o)}function xx(i,t){const e=new fe;e.name="Малая бухта, комплекс на берегу";const n=new ie({color:"#c5b08c"}),s=new ie({color:"#eeeae0"}),o=new ie({color:"#b7b5a9"}),r=new ie({color:"#617964"}),a=new ie({color:"#5f8596"}),l=new ie({color:"#5799b9"}),c=4.4;xn(e,t,1.8,c-1.8,n),xn(e,t,c,3.05,n),xn(e,t,c+3.05,3.15,s),xn(e,t,c+6.2,3.4,s),xn(e,t,c+9.6,.35,o);const h=t.map((S,b)=>{const E=t[(b+1)%t.length];return{start:S,end:E,length:Math.hypot(E[0]-S[0],E[1]-S[1])}}).reduce((S,b)=>b.length>S.length?b:S),{start:f,end:u,length:d}=h,m=u[0]-f[0],_=u[1]-f[1],g=-Math.atan2(_,m),p=Math.sign(_),v=-Math.abs(_)/d*.04,M=m*p/d*.04;function x(S,b){return Array.from({length:S},(E,y)=>{const w=(y+.5)/S;return[f[0]+m*w+v,b,f[1]+_*w+M,g]})}vs(e,x(18,c+1.5),r,4.35,2.35),vs(e,x(38,c+4.75),a,1.75,1.35),vs(e,x(30,c+7.9),l,2.55,2.45),i.add(e)}function vx(i,t,e){if(t.id===gx)return xx(i,t.rings[0]),!0;if(t.id!==mx)return!1;const n=t.rings[0],s=ce.degToRad(112.9),o=Math.sin(s),r=-Math.cos(s),a=([E,y])=>E*o+y*r,l=n.map(a),c=Math.min(...l),h=E=>a(E)-c,f=Math.max(...l)-c,u=f*.54,d=n.map(E=>e(...E)),m=Math.max(...d),_=Math.min(...d)-.3,g=new fe;g.name="Малая бухта, корпус «Парусник»";const p=new ie({color:"#f5f3e8"}),v=new ie({color:"#deded5"}),M=new ie({color:"#526f7d"}),x=new ie({color:"#9c9e99"});xn(g,n,_,m-_,v);const S=[];for(let E=0;E<Rl;E++){const y=E*2.45,w=E<9?f-E*3.3:u,A=da(da(n,y,1,h),w,-1,h),P=m+E*fa,D=A.reduce(([L,U],z)=>[L+z[0]/A.length,U+z[1]/A.length],[0,0]),C=A.map(([L,U])=>[ce.lerp(L,D[0],.04),ce.lerp(U,D[1],.04)]);xn(g,A,P,.35,p),xn(g,C,P+.35,fa-.35,v),S.push(..._x(C,P+1.8,h)),(E===8||E===Rl-1)&&xn(g,C,P+fa,.18,x)}const b=da(da(n,u-3.8,1,h),u+.15,-1,h);return xn(g,b,m,Rl*fa+1.9,p),vs(g,S,M,1.65,1.15),i.add(g),!0}function Mx(i,t,e){if(t.id!=="142489068")return!1;const n=t.rings[0],s=n.map((mt,H)=>{const N=n[(H+1)%n.length];return{start:mt,end:N,length:Math.hypot(N[0]-mt[0],N[1]-mt[1])}}),[o]=s.sort((mt,H)=>H.length-mt.length).slice(0,2).sort((mt,H)=>mt.start[1]+mt.end[1]-(H.start[1]+H.end[1])),[r,a]=[o.start,o.end].sort((mt,H)=>mt[0]-H[0]),l=n.filter(mt=>mt!==r&&mt!==a).sort((mt,H)=>mt[0]-H[0])[0],[c,h]=r,f=Math.hypot(a[0]-c,a[1]-h),u=Math.hypot(l[0]-c,l[1]-h),d=(a[0]-c)/f,m=(a[1]-h)/f,_=(l[0]-c)/u,g=(l[1]-h)/u,p=(mt,H)=>[c+d*mt+_*H,h+m*mt+g*H],v=(mt,H,N,Y)=>[p(mt,N),p(H,N),p(H,Y),p(mt,Y)],M=new fe;M.name="Анапский морской вокзал";const x=new ie({color:"#e5e4dc"}),S=new ie({color:"#b7a18c"}),b=new ie({color:"#a4aaa4"}),E=new ie({color:"#496877"}),y=new ie({color:"#8f4b3a"}),w=n.map(mt=>e(...mt)),A=Math.max(...w),P=Math.min(...w)-.25;xn(M,n,P,A+2.9-P,S),xn(M,n,A+2.9,3.6,x),xn(M,n,A+6.5,.35,b);const D=7.8,C=f-.85,L=C-D,U=u*.34,z=U+D,k=v(L,C,U,z),W=A+15.2;xn(M,k,A+6.8,W-A-6.8,x),xn(M,k,W,.22,b);const q=-Math.atan2(m,d),J=-Math.atan2(g,_),Q=(mt,H,N,Y)=>Array.from({length:mt},(ut,st)=>{const[ht,Et]=Y((st+.5)/mt);return[ht,H,Et,N]});vs(M,Q(11,A+4.75,q,mt=>p(1.3+mt*(f-2.6),-.04)),E,2.22,2.55),vs(M,Q(8,A+1.48,q,mt=>p(1.5+mt*(f-3),-.04)),E,1.65,1.34);const bt=[];for(const mt of[8.35,10.95,13.55]){const H=A+mt;bt.push(...Q(3,H,q,N=>p(L+N*D,U-.04))),bt.push(...Q(3,H,J,N=>p(C+.04,U+N*D)))}vs(M,bt,E,1.37,1.43);const[Mt,Xt]=p(C-2.8,U+2.4),_t=new he(new Un(.055,.105,3.2,6),y);return _t.position.set(Mt,W+1.82,Xt),M.add(_t),i.add(M),!0}const Sx=[[65,151],[133,120],[143,98],[312,94],[327,41],[410,46],[451,73],[504,67],[540,44],[733,53],[724,326],[1170,410],[1591,455],[1591,738],[40,687]],yx=[{points:[[94,145],[93,228],[89,353]],width:.65,height:.38},{points:[[142,122],[197,119],[277,117],[320,120],[331,188]],width:.65,height:.32},{points:[[197,119],[201,187],[137,192]],width:.73,height:.31},{points:[[273,119],[279,182],[206,187]],width:.7,height:.33},{points:[[287,122],[291,181],[328,178]],width:.66,height:.3},{points:[[334,91],[338,130],[345,187],[405,175],[403,130],[338,136]],width:.68,height:.35},{points:[[447,84],[486,87],[492,170],[445,173]],width:.69,height:.31},{points:[[500,85],[530,86],[534,161],[500,166]],width:.63,height:.27},{points:[[540,62],[535,107],[537,170]],width:.68,height:.38},{points:[[137,228],[204,222],[275,225],[351,227],[360,279],[300,282],[228,289],[140,279],[137,228]],width:.68,height:.27},{points:[[218,229],[214,277],[230,291],[224,354],[137,344]],width:.69,height:.31},{points:[[181,231],[178,277],[187,291],[181,315],[139,313]],width:.56,height:.25},{points:[[191,314],[187,348]],width:.57,height:.24},{points:[[307,229],[310,257],[278,261]],width:.57,height:.23},{points:[[319,231],[319,276],[352,273]],width:.64,height:.29},{points:[[360,285],[367,348],[366,387]],width:.65,height:.4},{points:[[363,278],[426,272],[427,218]],width:.73,height:.32},{points:[[413,209],[500,205],[570,200],[646,197]],width:.68,height:.31},{points:[[429,270],[504,270],[502,206]],width:.72,height:.29},{points:[[506,271],[510,270]],width:.72,height:.35},{points:[[528,268],[567,262],[627,258]],width:.72,height:.35},{points:[[645,256],[647,203]],width:.72,height:.35},{points:[[560,207],[567,261]],width:.61,height:.28},{points:[[678,178],[681,346],[634,347]],width:.62,height:.41},{points:[[468,349],[467,319],[474,305],[489,302],[602,300],[618,307],[623,330]],width:.66,height:.3},{points:[[382,355],[417,353],[414,398],[388,397]],width:.66,height:.37},{points:[[416,401],[526,426],[531,407],[539,369],[569,375]],width:.75,height:.37},{points:[[569,376],[568,425],[539,422]],width:.68,height:.36},{points:[[578,380],[578,423],[616,430],[620,380]],width:.68,height:.37},{points:[[630,379],[629,433],[682,441],[679,378]],width:.72,height:.36},{points:[[98,445],[190,455],[177,553],[91,539]],width:.81,height:.38},{points:[[209,457],[316,474],[305,552],[202,537],[209,457]],width:.85,height:.42},{points:[[245,474],[237,509],[226,539]],width:.75,height:.4},{points:[[386,490],[429,501],[515,513],[566,520],[622,532]],width:.73,height:.29},{points:[[430,503],[430,551],[389,544]],width:.74,height:.36},{points:[[516,515],[515,559],[431,549]],width:.78,height:.33},{points:[[564,524],[557,587],[515,579],[517,557]],width:.76,height:.38},{points:[[622,531],[615,590],[566,583]],width:.76,height:.39},{points:[[653,536],[708,549],[699,609]],width:.74,height:.34},{points:[[769,385],[806,387],[823,390],[866,388],[875,384]],width:.52,height:.48},{points:[[768,384],[768,425],[766,447]],width:.5,height:.52},{points:[[747,444],[769,449],[813,457],[870,467],[913,473],[953,478],[1006,483]],width:.62,height:.6},{points:[[818,395],[817,426],[814,456]],width:.52,height:.51},{points:[[874,379],[874,415]],width:.47,height:.42},{points:[[870,451],[870,466]],width:.46,height:.46},{points:[[918,390],[917,419]],width:.5,height:.49},{points:[[914,437],[912,473]],width:.55,height:.54},{points:[[959,393],[961,413],[957,428]],width:.49,height:.46},{points:[[955,442],[952,478]],width:.55,height:.54},{points:[[961,416],[994,421],[1016,426]],width:.39,height:.36},{points:[[1016,427],[1012,444],[1007,482]],width:.54,height:.56},{points:[[1070,501],[1079,447],[1085,435],[1104,438]],width:.61,height:.61},{points:[[1138,441],[1169,449]],width:.44,height:.41},{points:[[1170,435],[1169,471],[1168,505],[1111,502],[1071,500]],width:.65,height:.62},{points:[[1122,459],[1114,487],[1111,502]],width:.51,height:.48},{points:[[765,620],[770,577],[844,591],[840,619]],width:.53,height:.53},{points:[[900,645],[903,598],[948,608],[996,618],[1024,616]],width:.55,height:.49},{points:[[950,608],[945,653],[901,647]],width:.52,height:.54},{points:[[999,619],[990,664],[983,688]],width:.52,height:.55},{points:[[944,654],[939,690]],width:.49,height:.44},{points:[[1049,621],[1094,620],[1133,627]],width:.44,height:.38},{points:[[1132,628],[1127,665]],width:.44,height:.42},{points:[[1230,470],[1293,471],[1292,517],[1290,550],[1234,551],[1230,470]],width:.7,height:.87},{points:[[1233,519],[1292,518]],width:.66,height:.72},{points:[[1352,482],[1369,478],[1404,479],[1418,480],[1417,492],[1385,493],[1383,509]],width:.57,height:.48},{points:[[1338,691],[1339,668],[1397,669]],width:.59,height:.55},{points:[[1336,722],[1398,721],[1454,722],[1512,724],[1575,726],[1575,652],[1512,653],[1455,654],[1400,652],[1398,721]],width:.72,height:.69},{points:[[1455,654],[1454,722]],width:.67,height:.62},{points:[[1512,653],[1512,724]],width:.65,height:.6}],bx=[{polygon:[[144,129],[193,124],[198,177],[142,181]],depth:.78},{polygon:[[205,126],[269,124],[274,169],[210,177]],depth:.74},{polygon:[[287,128],[317,127],[322,171],[290,176]],depth:.7},{polygon:[[346,136],[398,131],[402,169],[347,177]],depth:.83},{polygon:[[452,90],[483,89],[487,158],[450,166]],depth:.78},{polygon:[[502,97],[526,99],[527,153],[500,159]],depth:.64},{polygon:[[146,235],[214,231],[211,274],[143,269]],depth:.88},{polygon:[[279,234],[304,234],[308,253],[278,257]],depth:.57},{polygon:[[319,237],[345,234],[348,269],[320,269]],depth:.75},{polygon:[[145,287],[183,288],[180,311],[141,310]],depth:.62},{polygon:[[142,319],[181,319],[181,342],[137,340]],depth:.58},{polygon:[[190,292],[227,298],[222,350],[189,345]],depth:.77},{polygon:[[505,209],[558,205],[566,260],[526,265],[528,298],[514,298],[512,267]],depth:1.05},{polygon:[[566,205],[641,199],[644,252],[642,252],[642,283],[630,283],[629,254],[571,260]],depth:1.15},{polygon:[[389,358],[414,354],[411,396],[388,393]],depth:.64},{polygon:[[541,370],[567,377],[565,423],[535,420]],depth:.8},{polygon:[[580,378],[617,379],[613,425],[579,422]],depth:.82},{polygon:[[633,378],[676,379],[680,435],[630,426]],depth:1},{polygon:[[98,450],[183,462],[173,541],[92,533]],depth:.92},{polygon:[[213,463],[244,468],[227,535],[207,535]],depth:.9},{polygon:[[248,473],[311,478],[304,549],[236,539]],depth:.91},{polygon:[[388,494],[427,502],[427,541],[389,537]],depth:.74},{polygon:[[434,506],[514,516],[510,552],[433,545]],depth:.87},{polygon:[[521,518],[562,526],[556,576],[516,572]],depth:.94},{polygon:[[566,527],[619,535],[612,581],[561,575]],depth:.99},{polygon:[[656,541],[704,553],[693,603],[646,592]],depth:.83},{polygon:[[773,582],[839,595],[836,620],[771,612]],depth:.84},{polygon:[[906,602],[946,611],[943,645],[903,637]],depth:.64},{polygon:[[952,612],[994,621],[986,665],[951,654]],depth:.58},{polygon:[[1235,475],[1288,476],[1288,515],[1237,516]],depth:.72},{polygon:[[1238,524],[1287,523],[1286,546],[1239,547]],depth:.64},{polygon:[[1404,657],[1450,658],[1449,718],[1403,717]],depth:.54},{polygon:[[1459,658],[1507,657],[1507,719],[1459,717]],depth:.59},{polygon:[[1517,658],[1570,657],[1570,721],[1517,719]],depth:.55}],wx=[{point:[256,273],radius:.7,depth:.51},{point:[412,299],radius:.53,depth:.46},{point:[496,316],radius:.58,depth:.48},{point:[456,365],radius:.73,depth:.58},{point:[516,422],radius:.67,depth:.46},{point:[644,329],radius:.7,depth:.55},{point:[592,393],radius:.56,depth:.37},{point:[553,441],radius:.63,depth:.44},{point:[377,498],radius:.56,depth:.44},{point:[755,405],radius:.74,depth:.75},{point:[962,706],radius:.7,depth:.75},{point:[1260,494],radius:.5,depth:.65}],Ex=[{name:"Широкая улица",polygon:[[96,365],[162,362],[217,365],[309,385],[362,398],[414,412],[418,485],[386,486],[308,470],[209,456],[94,443]]},{name:"Широкая улица",polygon:[[1194,609],[1258,608],[1344,612],[1438,614],[1516,615],[1574,612],[1573,647],[1510,651],[1437,652],[1350,651],[1258,648],[1200,647]]},{name:"Северная улица",polygon:[[119,193],[207,191],[287,188],[344,184],[433,176],[527,171],[671,174],[671,194],[524,201],[428,211],[347,219],[273,224],[197,227],[118,228]]},{name:"Поперечная улица",polygon:[[99,159],[125,164],[123,215],[124,280],[121,335],[128,366],[111,388],[93,367],[97,311],[96,250]]}],Tx=[{from:[521,298],to:[519,264],width:1.15,steps:7},{from:[636,283],to:[635,252],width:1,steps:7}],Ri={outline:Sx,walls:yx,cellars:bx,wells:wx,streets:Ex,stairs:Tx},du="652417590";function zn([i,t]){return[.0863102257*i-214318e-9*t-361.5408919,214318e-9*i+.0863102257*t+21.5871871]}const gs=Ri.outline.map(zn);function Ks([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function ud(i,t,e){const n=i(-310,65)-1.41-.006*(t+355)+.008*(e-60);return Math.min(n,i(t,e)-.43)}const Ki=["#b7a58b","#c1b199","#ad9e88","#a9977e","#c8baa0","#a4947b"],pu=["#c9b998","#b9aa8e","#c2b497","#b2a389","#d0bfa4"],Ax=new qt("#a09472"),Rx=new qt("#97976b"),Cx=new qt("#94846b"),Px=new qt("#62584a"),Lx=new qt("#a99a7e");function Zn(i){const t=Math.sin(i*127.1+3.83)*43758.5453;return t-Math.floor(t)}function Xl(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=(i[1]-t[1])*e/(2*n),o=(t[0]-i[0])*e/(2*n);return[[i[0]+s,i[1]+o],[t[0]+s,t[1]+o],[t[0]-s,t[1]-o],[i[0]-s,i[1]-o]]}const bn=([i,t],e)=>[i,e(i,t),t];function fd(i,t,e,n,s,o){i.face(o,bn(t,n),bn(e,n),bn(e,s),bn(t,s))}function Xo(i,t,e,n,s,o=.65){for(let r=0;r<t.length;r++){const a=t[r],l=t[(r+1)%t.length],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/o);for(let h=0;h<c;h++){const f=xt(a,l,h/c),u=xt(a,l,(h+1)/c);fd(i,f,u,e,n,s(h+r*97))}}}function Dx(i,t,e,n,s,o,r,a){const l=Math.hypot(e[0]-t[0],e[1]-t[1]);if(l<.12)return;const c=(d,m)=>o(d,m)-r-.03,h=(d,m)=>o(d,m)+s,f=Xl(t,e,n*.93);Xo(i,f,c,h,()=>"#897862",1.2),i.face("#8c7b66",...f.map(d=>bn(d,(m,_)=>h(m,_)-.028)));const u=Math.max(1,Math.round((s+r)/.31));for(let d=0;d<u;d++){const m=.66+Zn(a+d)*.24;for(let _=-(d%2)*m*.52,g=0;_<l;_+=m,g++){const p=(Math.max(0,_)+.018)/l,v=(Math.min(_+m,l)-.018)/l;if(v<=p)continue;const M=a*101+d*31+g*7,x=Xl(xt(t,e,p),xt(t,e,v),n*(.965+Zn(M)*.09)),S=x.map(A=>xt(A,xt(x[0],x[2],.5),.06)),b=(s+r)/u,E=(A,P)=>o(A,P)-r+b*d+.012,y=(A,P)=>o(A,P)-r+b*(d+1)-.014+Zn(M+1)*.09,w=Ki[Math.floor(Zn(M+2)*Ki.length)];for(let A=0;A<4;A++){const P=(A+1)%4;i.face(w,bn(x[A],E),bn(x[P],E),bn(S[P],y),bn(S[A],y))}i.face(w,...S.map(A=>bn(A,y)))}}}function Ix(i,t,e,n,s){const o=t.map(([p])=>p),r=t.map(([,p])=>p),a=.61,l=.065,c=(p,v)=>[p*Math.cos(l)-v*Math.sin(l),p*Math.sin(l)+v*Math.cos(l)],[h,f]=t[0],u=(p,v)=>c(p,v).map((M,x)=>M+(x===0?h:f)),d=Math.floor((Math.min(...o)-h-3)/a),m=Math.ceil((Math.max(...o)-h+3)/a),_=Math.floor((Math.min(...r)-f-10)/a),g=Math.ceil((Math.max(...r)-f+10)/a);for(let p=_;p<g;p++)for(let v=d;v<m;v++){const M=n*4241+p*397+v;if(Zn(M+9)>s)continue;const x=(v+p%2*.5)*a,S=p*a,b=[u(x+.03+Zn(M)*.07,S+.033),u(x+.57,S+.027+Zn(M+2)*.07),u(x+.572-Zn(M+3)*.08,S+.574),u(x+.03,S+.572-Zn(M+4)*.07)];if(!b.every(y=>Ks(y,t)))continue;const E=(y,w)=>e(y,w)+.042+Zn(M+6)*.028;i.face(pu[Math.floor(Zn(M+7)*pu.length)],...b.map(y=>bn(y,E)))}}function Ux(i,t,e){const n=_e(i,"Раскоп Горгиппии · кладка и древние улицы",{surface:"stone"}),s=(c,h)=>ud(t,c,h),o=Ri.cellars.map(({polygon:c,depth:h})=>({ring:c.map(zn),depth:h,holes:[]})),r=Ri.wells.map(({point:c,radius:h,depth:f})=>{const[u,d]=zn(c),m=Array.from({length:12},(v,M)=>{const x=M*Math.PI/6;return[u+Math.cos(x)*h,d+Math.sin(x)*h]}),_=o.find(v=>m.every(M=>Ks(M,v.ring))),g=(v,M)=>s(v,M)-(_?.depth??0),p=_||m.every(v=>Ks(v,gs))&&!o.some(v=>m.some(M=>Ks(M,v.ring))||v.ring.some(M=>Ks(M,m)));return _&&_.holes.push(m),{ring:m,rim:g,depth:f,cut:p,cellar:_,center:[u,d]}}),a=[...o.map(c=>c.ring),...r.filter(c=>c.cut&&!c.cellar).map(c=>c.ring)],l=new qt;e([gs,...a],s,(c,h,f)=>l.copy(Ax).lerp(Rx,ce.clamp(.51+.32*Math.sin(c*.15+f*.19)+.19*Math.sin(c*.43-f*.24),0,1))),Xo(n,gs,s,(c,h)=>t(c,h)+.012,()=>"#a18f75");for(const{ring:c,depth:h,holes:f}of o){const u=(d,m)=>s(d,m)-h;e([c,...f],u,Cx),Xo(n,c,u,s,()=>"#89785f")}for(const{ring:c,rim:h,depth:f,cut:u,center:d}of r){const m=(g,p)=>h(g,p)-(u?f:-.028);u?e([c],m,Px):n.face("#5f5342",...c.map(g=>bn(g,m))),Xo(n,c,m,(g,p)=>h(g,p)+.18,()=>"#80715e",2);const _=c.map(g=>xt(d,g,1.35));for(let g=0;g<c.length;g++){const p=(g+1)%c.length,v=(M,x)=>h(M,x)+.16+g%3*.021;fd(n,_[g],_[p],h,v,Ki[g%Ki.length]),n.face(Ki[g%Ki.length],...[c[g],_[g],_[p],c[p]].map(M=>bn(M,v)))}}for(const[c,{polygon:h,density:f}]of Ri.streets.entries()){const u=h.map(zn);e([u],(d,m)=>s(d,m)+.025,Lx),Ix(n,u,s,c,f??.88)}for(const[c,{points:h,width:f,height:u}]of Ri.walls.entries()){const d=h.map(zn);for(let m=1;m<d.length;m++){const _=d[m-1],g=d[m],p=xt(_,g,.5),v=o.reduce((M,{ring:x,depth:S})=>Math.max(M,x.some((b,E)=>{const y=x[(E+1)%x.length],w=y[0]-b[0],A=y[1]-b[1],P=ce.clamp(((p[0]-b[0])*w+(p[1]-b[1])*A)/(w*w+A*A),0,1);return Math.hypot(p[0]-b[0]-P*w,p[1]-b[1]-P*A)<f*.63})?S:0),0);Dx(n,_,g,f,u,s,v,c*41+m)}}for(const{from:c,to:h,width:f,steps:u}of Ri.stairs){const d=zn(c),m=zn(h),_=o.find(g=>Ks(m,g.ring))?.depth??.85;for(let g=0;g<u;g++){const p=Xl(xt(d,m,g/u),xt(d,m,(g+1)/u),f),v=(x,S)=>s(x,S)-_,M=(x,S)=>v(x,S)+_*(1-g/u);n.face(Ki[g%Ki.length],...p.map(x=>bn(x,M))),Xo(n,p,v,M,()=>"#9a8a71",2)}}n.finish()}const Ji=i=>i.map(zn),Nx=[[126,399],[220,407],[350,432],[460,455],[536,471],[610,478],[712,485],[779,478],[865,499],[955,516],[1060,538],[1168,556]],mu=[[748,295],[742,323],[729,352],[716,405],[712,462],[710,481]],gu=[0,0,.16,.67,1,1],Fx={position:zn([707,480]),look:zn([405,447]),pitch:-.19},Di=[[-384.79,10.65],[-282.12,15.99],[-217.83,18.81],[-218.47,61.07],[-219.18,90.59],[-393.18,81.88],[-384.79,10.65]],Ii=Math.atan2(2.82,64.29);function dd(i){const[t,e]=Di[1];return i(t+1.44*Math.sin(Ii),e-1.44*Math.cos(Ii))}function pc([i,t]){return i===-282.12&&t===15.99?2.62:i===-218.47&&t===61.07?1.45:0}const Ox=[{name:"Дорожка у лапидария",points:[[-332,24],[-322,25],[-312,26],[-303,27.3],[-295,28.1]],widths:[2.45,2.7,2.7,2.6,2.6],surface:"paving",railSide:1},{name:"Подход от входной арки",points:[[-282.12,14],[-282.12,18],[-283.15,21.1],[-288.4,25.8],[-295,28.1]],widths:[2.5,2.5,2.7,2.6,2.6],surface:"paving"},{name:"Дорожка от площадки музея",points:[[-295,28.1],[-294.5,33.9],[-295.2,40.9],zn(mu[0])],widths:[2.6,2.8,2.9,2.6],surface:"paving"},{name:"Дорожка вдоль южного борта",points:[...Ji([[65,710],[475,724],[1030,743],[1560,759]]),[-221.6,87.8],[-221.1,63.1]],widths:[1.5,1.65,1.75,1.7,1.65,1.6],surface:"paving",railSide:-1},{name:"Подход к восточной калитке",points:[[-221.1,63.1],[-220.9,61.07],[-216.4,61.07]],widths:[1.6,1.6,1.55],surface:"paving"},{name:"Спуск к раскопу",points:Ji(mu),widths:[2.6,2.5,1.35,1.25,1.25,1.7],surface:"ramp",rails:[2,3]},{name:"Проход между подвалами",points:Ji(Nx),widths:[3.8,4,4.1,3.9,3.8,3.4,3.5,4.1,4.3,4.2,4.2,3.5],surface:"earth"},{name:"Выход с западных лестниц",points:Ji([[129,368],[128,386],[126,399]]),widths:[1.5,1.8,2],surface:"earth"},...[368,401].flatMap(i=>[{name:"Западная площадка",points:Ji([[43,i],[90,i]]),widths:[1.5,1.43],surface:"landing"},{name:"Западная лестница",points:Ji([[90,i],[129,i]]),widths:[1.43,1.43],surface:"steps"}])],{clamp:Bx,lerp:pa}=ce,zx=new qt("#c7bda5"),_u=new qt("#c1b9a6"),kx=new qt("#a59b76"),ma="#aa987f",Cl="#52534c",zo=9;function Tr(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=Math.hypot(e,n);return{a:i,b:t,dx:e,dz:n,length:s,nx:-n/s,nz:e/s}}function xu(i,t){return i.points.map(([e,n],s)=>{const o=i.edges[Math.max(0,s-1)],r=i.edges[Math.min(i.edges.length-1,s)],a=Math.hypot(o.nx+r.nx,o.nz+r.nz),l=(o.nx+r.nx)/a,c=(o.nz+r.nz)/a,h=t*i.widths[s]/(2*Math.max(.66,l*r.nx+c*r.nz));return[e+l*h,n+c*h]})}function vu(i,t,e){return i.rails?.includes(t)||i.railSide===e}function qo(i,t,{a:e,dx:n,dz:s,length:o}){const r=((i-e[0])*n+(t-e[1])*s)/(o*o),a=Bx(r,0,1);return{raw:r,t:a,distance:Math.hypot(i-e[0]-n*a,t-e[1]-s*a)}}function Hx(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}const Gx=Di.slice(1).map((i,t)=>{const e=Di[t],{length:n}=Tr(e,i);return Tr(xt(e,i,pc(e)/n),xt(e,i,1-pc(i)/n))}),Vx=Ri.cellars.map(({polygon:i})=>Ji(i)),Wx=Ri.walls.flatMap(({points:i,width:t})=>{const e=Ji(i);return e.slice(1).map((n,s)=>({...Tr(e[s],n),width:t}))}),Xx=Ri.wells.map(({point:i,radius:t})=>({point:zn(i),radius:t}));function qx(i,t){return Xx.some(({point:[e,n],radius:s})=>Math.hypot(i-e,t-n)<s*1.35+.18)||Wx.some(e=>qo(i,t,e).distance<e.width/2+.18)||Vx.some(e=>Hx(i,t,e))}function Yx(i,t,e){const[n,s]=Di[1],o=(t-n)*Math.cos(Ii)+(e-s)*Math.sin(Ii),r=(e-s)*Math.cos(Ii)-(t-n)*Math.sin(Ii);if(Math.abs(o)>2.22||r<-1.44||r>.46)return;const a=r<-1.02?.135:r<-.6?.27:.405;return dd(i)+a}function Zx(i){const t=(f,u)=>ud(i,f,u),e=Ox.map(f=>({...f,edges:f.points.slice(1).map((u,d)=>Tr(f.points[d],u))})).map(f=>({...f,left:xu(f,-1),right:xu(f,1)})),n=e.filter(f=>f.surface==="earth"),s=e.filter(f=>f.surface==="paving"),o=e.filter(f=>["steps","landing","ramp"].includes(f.surface)),r=e.flatMap(f=>[[-1,f.left],[1,f.right]].flatMap(([u,d])=>d.slice(1).flatMap((m,_)=>vu(f,_,u)?[Tr(d[_],m)]:[])));function a(f,u,d,m,_){if(f==="earth")return t(m,_)+.055;if(f==="paving"||f==="landing")return i(m,_)+.054;const g=t(m,_)+.061,p=i(m,_)+.054;return f==="steps"?pa(p,g,Math.min(1,Math.floor(d*zo)/(zo-1))):pa(p,g,pa(gu[u],gu[u+1],d))}function l(f,u,d,m=0){let _;return f.edges.forEach((g,p)=>{const{raw:v,t:M,distance:x}=qo(u,d,g);(f.surface==="steps"||f.surface==="landing")&&(v<-1e-5||v>1.00001)||x>pa(f.widths[p],f.widths[p+1],M)/2-m||x>=(_?.distance??1/0)||(_={distance:x,height:a(f.surface,p,M,u,d)})}),_?.height}function c(f,u,d){if(f<-397||f>-211||u<9||u>92)return;if(Gx.some(g=>qo(f,u,g).distance<.24)||r.some(g=>qo(f,u,g).distance<.15))return null;for(const g of o){const p=l(g,f,u,.12);if(p!==void 0)return p}if(d)return n.some(p=>l(p,f,u,.16)!==void 0)&&!qx(f,u)?t(f,u)+.055:null;const m=Yx(i,f,u);return m!==void 0?m:s.some(g=>l(g,f,u)!==void 0)?i(f,u)+.054:void 0}function h(f,u){const d=_e(f,"Горгиппия · дорожки и ограждения для посетителей");for(const m of e){const{left:_,right:g}=m;for(const[p,v]of m.edges.entries()){if(m.surface==="earth"&&p<3)continue;const M=[_[p],_[p+1],g[p+1],g[p]],x=(S,b)=>a(m.surface,p,qo(S,b,v).t,S,b);if(m.surface==="steps"){const S=(b,E)=>xt(b[p],b[p+1],E);for(let b=0;b<zo;b++){const E=b/zo,y=(b+1)/zo,w=S(_,E),A=S(g,E),P=S(_,y),D=S(g,y),C=(k,W)=>a("steps",p,(E+y)/2,k,W),L=(k,W)=>a("steps",p,Math.max(0,E-.001),k,W);u([[w,P,D,A]],C,_u);const U=([k,W],q)=>[k,q(k,W),W];b&&d.face(ma,U(w,L),U(A,L),U(A,C),U(w,C));const z=(k,W)=>t(k,W)-.02;d.face(ma,U(w,C),U(P,C),U(P,z),U(w,z)),d.face(ma,U(A,C),U(D,C),U(D,z),U(A,z))}}else m.surface==="earth"?u([M],(S,b)=>t(S,b)+.012,kx):u([M],x,m.surface==="ramp"?_u:zx);for(const[S,b]of[[-1,_],[1,g]]){const E=b[p],y=b[p+1],w=Math.hypot(y[0]-E[0],y[1]-E[1]),A=m.surface==="ramp"||m.surface==="landing",P=vu(m,p,S);if(!P&&!A)continue;const D=Math.max(1,Math.ceil(w/(A?.62:1.75))),C=(L,U)=>{const[z,k]=xt(E,y,L);return[z,x(z,k)+U,k]};for(let L=0;L<D;L++){const U=L/D,z=(L+1)/D;if(A){const k=([W,q,J])=>[W,Math.min(q-.07,t(W,J)-.025),J];d.face(ma,C(U,0),C(z,0),k(C(z,0)),k(C(U,0)))}if(P){for(const k of[.38,.83])d.beam(C(U,k),C(z,k),.027,Cl);(!A||L%3===0)&&d.beam(C(U,0),C(U,.85),.047,Cl),L===D-1&&d.beam(C(z,0),C(z,.85),.047,Cl)}}}}}d.finish()}return{walkHeight:c,render:h}}const mc="#dfd7c1",rn="#f0eee6",$x="#526e7c",ps="#343d3d";function Ta([i,t],e){const n=e/2;return[[i-n,t-n],[i+n,t-n],[i+n,t+n],[i-n,t+n]]}function Kx([i,t],[e,n]){const s=Math.hypot(e-i,n-t),o=(e-i)/s,r=(n-t)/s;return(a,l)=>[i+o*a+r*l,t+r*a-o*l]}function Jx(i,t,e){const n=Kx(t[0],t[1]),o=(e.lowerWaterfront??e)(...n(9,27))+.65,r=Math.min(...t.map(_t=>e(..._t)))-.2,a=Le(t),l="#7295bf",c="#415f88",h="#636b71",f="#b8bdba",u=_e(i,"Пароходъ",{surfaces:{metal:[l,f,c],paving:[h],stone:[mc],glass:["#40484a","#4b5256"]}});u.shell(t,Math.min(r,o-.2),o+.25,mc);const d=t.map(_t=>xt(a,_t,.83));u.shell(d,o+.25,o+2.85,"#40484a",null),u.shell(t,o+2.85,o+3.08,rn,h);for(let _t=2;_t<=13;_t++){const mt=t[_t],H=t[_t+1];En(u,d[_t],d[_t+1],a,o+.52,o+2.76,2.15,"#d9dbd6");const N=Math.max(1,Math.round(Math.hypot(mt[0]-H[0],mt[1]-H[1])/2.5));for(let Y=0;Y<N;Y++){const ut=xt(a,xt(mt,H,Y/N),.97);u.shell(Ta(ut,.28),o+.25,o+2.85,rn,null)}}const m=[n(28.3,24),n(31,16.2)],_=e(...m[0])+.025,g=o+3.08,p=[n(27.2,15.4),n(31.95,15.4),n(31.95,17),n(27.2,17)];u.shell(p,g-.14,g,f,h);const v=[.89,.31],M=(_t,mt)=>{const H=xt([28.3,24],[31,16.2],_t);return n(H[0]+v[0]*mt,H[1]+v[1]*mt)},x=19;for(let _t=0;_t<x;_t++){const mt=_t/x,H=(_t+1)/x,N=ce.lerp(_,g,H);u.shell([M(mt,-1),M(H,-1),M(H,1),M(mt,1)],N-.09,N,f,h)}for(const _t of[-1,1]){const mt=(H,N)=>{const[Y,ut]=M(H,_t);return[Y,ce.lerp(_,g,H)+N,ut]};u.beam(mt(0,.98),mt(1,.98),.07,rn),u.beam(mt(0,.51),mt(1,.51),.045,f);for(const H of[.03,.22,.42,.62,.82,1])u.beam(mt(H,.1),mt(H,.98),.055,rn)}const S=[[-16,7.5,15],[-10,4,17],[-2,2.1,17.7],[24,1.7,18.1],[30,1.7,13.2],[34,5.8,9]],b=S.map(([_t,,mt])=>n(_t,mt)),y=S.map(([_t,mt])=>n(_t,mt)).concat(b.slice().reverse());u.shell(y,o+3.08,o+6.5,rn,null);const w=Le(y);for(let _t=1;_t<b.length;_t++)En(u,b[_t-1],b[_t],w,o+3.4,o+6.24,1.85);const A=o+6.52,P=o+7.72;function D([_t,mt,H]){return[[...n(_t,mt),A],[...n(_t,mt+(H-mt)*.46),P],[...n(_t,H),A]].map(([N,Y,ut])=>[N,ut,Y])}let C=0;for(let _t=1;_t<S.length;_t++){const mt=D(S[_t-1]),H=D(S[_t]),N=Math.max(1,Math.round((S[_t][0]-S[_t-1][0])/2));for(let Y=0;Y<N;Y++){const ut=mt.map((Et,j)=>xt(Et,H[j],Y/N)),st=mt.map((Et,j)=>xt(Et,H[j],(Y+1)/N)),ht=C++%2===0?l:rn;u.face(ht,ut[0],st[0],st[1],ut[1]),u.face(ht,ut[1],st[1],st[2],ut[2])}}u.face(rn,...D(S[0])),u.face(rn,...D(S.at(-1)));const L=n(13,14.8),U=t.slice(4,10).map(_t=>xt(L,_t,.95)),z=[L,...U];u.shell(z,o+3.08,o+3.42,rn),u.shell(z,o+3.42,o+4.92,"#4b5256",null),C=0,U.slice(1).forEach((_t,mt)=>{const H=U[mt];En(u,H,_t,L,o+3.57,o+4.83,1.65,f);const N=xt(L,H,1.011),Y=xt(L,_t,1.011);u.wall(N,Y,o+3.65,o+4.12,"#79444e");for(const st of[3.48,3.71,4.24])u.beam([N[0],o+st,N[1]],[Y[0],o+st,Y[1]],.052,rn);const ut=Math.max(2,Math.round(Math.hypot(_t[0]-H[0],_t[1]-H[1])/1.25));for(let st=0;st<ut;st++){const ht=xt(H,_t,st/ut),Et=xt(H,_t,(st+1)/ut);u.face(C++%2===0?l:rn,[ht[0],o+4.96,ht[1]],[Et[0],o+4.96,Et[1]],[L[0],o+5.85,L[1]])}});const k=t.slice(9,17).map(_t=>xt(n(-9.5,24),_t,.94)),W=Le(k);u.shell(k,o+3.08,o+6.75,rn,h);const q=k.map(_t=>xt(W,_t,1.024));u.shell(q,o+4.38,o+5.1,c,null),u.shell(k.map(_t=>xt(W,_t,1.026)),o+6.75,o+6.94,c,h),k.slice(1).forEach((_t,mt)=>{En(u,k[mt],_t,W,o+3.45,o+4.38,1.4),En(u,k[mt],_t,W,o+5.16,o+6.1,1.55)});const[J,Q]=q.slice(1,3),bt=Math.hypot(Q[0]-J[0],Q[1]-J[1]),Mt=[(J[1]-Q[1])/bt,(Q[0]-J[0])/bt],Xt=xt(J,Q,.48);ze(i,{text:"ПАРОХОДЪ",position:[Xt[0]+Mt[0]*.055,o+4.75,Xt[1]+Mt[1]*.055],size:[6.6,.69],outward:Mt,color:rn,background:c,lighting:"backlit",glowColor:"#d4e9ff"}),u.finish()}function Qx(i,t,e,n){const s="PARK-HOTEL",o=[1.45,1.67,1.52,1.52,1.08,1.56,1.68,1.51,1.39,1.36],r=.42,a=e.slice(0,8).reverse(),l=a.slice(1).map((f,u)=>{const d=a[u],m=Math.hypot(f[0]-d[0],f[1]-d[1]);return{a:d,b:f,length:m,outward:[(d[1]-f[1])/m,(f[0]-d[0])/m]}}),c=o.reduce((f,u)=>f+u,0)+r*(s.length-1);let h=(l.reduce((f,u)=>f+u.length,0)-c)/2;for(const[f,u]of[...s].entries()){const d=o[f];let m=h+d/2;for(const{a:_,b:g,length:p,outward:v}of l){if(m>p){m-=p;continue}const[M,x]=xt(_,g,m/p),[S,b]=v;t.beam([M-S*.06,n+.43,x-b*.06],[M-S*.06,n+.89,x-b*.06],.075,ps),ze(i,{text:u,position:[M+S*.07,n+1.13,x+b*.07],size:[d,1.8],outward:v,color:"#e7cc87",weight:850,lighting:"neon",glowColor:"#ff5540",spill:f===5});break}h+=d+r}}function jx(i,t,e){const n=Math.min(...t.map(m=>e(...m)))+.06,s=n-.36,o=Le(t),r="#99655f",a="#d6c9b8",l="#b8b6aa",c=_e(i,"Парк-отель Анапа",{surfaces:{flatRoof:[l],stone:[a]}}),h=n+2.85,f=2.91;c.shell(t,s,h,a,null);for(let m=0;m<t.length;m++){const _=t[m],g=t[(m+1)%t.length],[p,v]=xt(_,g,.5);v<o[1]-2&&e(p,v)<n+.8&&En(c,_,g,o,n+.46,h-.35,2.1,a)}for(let m=0;m<4;m++){const _=h+m*f;c.shell(t,_,_+f,mc,null);for(let g=0;g<t.length;g++){const p=t[g],v=t[(g+1)%t.length],[M,x]=xt(p,v,.5);if(Math.hypot(v[0]-p[0],v[1]-p[1])<1.2)continue;const S=M<o[0]-6||m===3?r:a;c.wall(xt(o,p,1.003),xt(o,v,1.003),_+.05,_+.86,S),(x<o[1]+14||g%2===0)&&En(c,p,v,o,_+.9,_+2.64,1.43,S===r?"#d8bfb0":"#eee8db")}}const u=h+4*f;c.shell(t,u,u+.48,r,l);const d=t.filter(([m,_])=>m<o[0]-11&&_>o[1]-1);if(d.length>=4){const m=d.map(_=>xt(Le(d),_,.68));c.shell(m,u+.48,u+1.68,r,l)}Qx(i,c,t,u),c.finish()}function tv(i,t,e){const n=t.rings[0],s=t.id==="223949001",o=Le(n),r=s?e(...o):e(-263.52,25.47),a=Math.min(...n.map(M=>e(...M)))-.25,l="#e5dfcd",c=s?"#94877d":"#ad5d51",h=_e(i,"Музей Горгиппия",{surfaces:{roof:[c],glass:["#556161"],stone:["#a69a82"]}}),f=r+4.25,u=t.id==="142489024"||s?[n[0],n[1],n[3],n[4]]:n.slice(0,4);Math.hypot(u[1][0]-u[0][0],u[1][1]-u[0][1])>Math.hypot(u[2][0]-u[1][0],u[2][1]-u[1][1])&&u.push(u.shift()),h.shell(n,Math.min(a,r),r+.5,"#a69a82",null),h.shell(n,r+.5,f,l,null);const d=xt(u[0],u[1],.5),m=xt(u[2],u[3],.5),_=[xt(d,m,.23),xt(d,m,.77)].map(([M,x])=>[M,f+(s?1.65:2.25),x]),g=u.map(([M,x])=>[M,f,x]);h.face(c,g[0],g[1],_[0]),h.face(c,g[1],g[2],_[1],_[0]),h.face(c,g[2],g[3],_[1]),h.face(c,g[3],g[0],_[0],_[1]);const p=s?[n[0],n[1]]:[n[4],n[0]],v=s?6:4;for(let M=0;M<v;M++){const x=xt(o,xt(p[0],p[1],(M+.32)/v),1.005),S=xt(o,xt(p[0],p[1],(M+.66)/v),1.005);h.wall(x,S,r+1.25,r+3.03,"#556161")}if(t.id==="142489024")for(const M of[.19,.81]){const x=n[0],S=n[1],b=Array.from({length:16},(E,y)=>{const w=y*Math.PI/8,[A,P]=xt(o,xt(x,S,M+.035*Math.cos(w)),1.006);return[A,r+2.5+.46*Math.sin(w),P]});h.face($x,...b)}h.finish()}function ev(i,t,e){if(t.id==="170958806")Jx(i,t.rings[0],e);else if(t.id==="1546378584")jx(i,t.rings[0],e);else if(["142489024","218983841","223949001"].includes(t.id))tv(i,t,e);else return!1;return!0}function nv(i,t){const e=_e(i,"Вход в Горгиппию"),[n,s]=Di[1],o=t(n,s),r=Ii,a=(h,f,u=0)=>[n+Math.cos(r)*h-Math.sin(r)*u,o+f,s+Math.sin(r)*h+Math.cos(r)*u];for(let h=1;h<Di.length;h++){const f=Di[h-1],u=Di[h],d=Math.hypot(u[0]-f[0],u[1]-f[1]),m=xt(f,u,pc(f)/d),_=xt(f,u,1-pc(u)/d),g=Math.hypot(_[0]-m[0],_[1]-m[1]),p=Math.ceil(g/2.6),v=(M,x)=>{const[S,b]=xt(m,_,M);return[S,t(S,b)+x,b]};for(let M=0;M<p;M++){const x=M/p,S=(M+1)/p;for(const[b,E,y]of[[.14,.23,"#b1a992"],[.37,.037,ps],[1.21,.043,ps]])e.beam(v(x,b),v(S,b),E,y);e.beam(v(x,.22),v(x,1.31),.068,ps);for(let b=1;b<=5;b++){const E=x+(S-x)*b/6;e.beam(v(E,.36),v(E,1.25),.024,ps)}}}for(const h of[-2.55,2.55]){const[f,,u]=a(h,0);e.shell(Ta([f,u],.63),o-.45,o+2.56,rn),e.shell(Ta([f,u],.83),o+2.56,o+2.72,mc),e.shell(Ta([f,u],.88),o+2.72,o+3.48,rn);const d=Array.from({length:20},(m,_)=>{const g=_*Math.PI/10;return a(h+Math.cos(g)*.31,3.1+Math.sin(g)*.31,-.445)});e.face("#98694b",...d)}for(const h of[0,.27,.55]){const f=Array.from({length:11},(u,d)=>{const m=d/5-1;return a(m*2.17,2.8+h+(1-m*m)*.68)});f.slice(1).forEach((u,d)=>e.beam(f[d],u,.045,rn))}const l={Г:[[[0,0],[0,1],[1,1]]],О:[[[.22,0],[.78,0],[1,.18],[1,.82],[.78,1],[.22,1],[0,.82],[0,.18],[.22,0]]],Р:[[[0,0],[0,1],[.78,1],[1,.82],[1,.65],[.78,.49],[0,.49]]],И:[[[0,1],[0,0],[1,1],[1,0]]],П:[[[0,0],[0,1],[1,1],[1,0]]],Я:[[[1,0],[1,1],[.22,1],[0,.82],[0,.65],[.22,.49],[1,.49]],[[0,0],[.44,.49]]]};Array.from("ГОРГИППИЯ").forEach((h,f)=>{const u=(f-4)*.425,d=3.02+(1-(u/2.17)**2)*.68;for(const m of l[h]){const _=m.map(([g,p])=>a(-u-(g-.5)*.32,d+p*.43,-.045));_.slice(1).forEach((g,p)=>e.beam(_[p],g,.043,"#9e5345"))}});const c=dd(t);for(let h=0;h<3;h++){const f=-1.44+h*.42,u=[[-2.22,f],[2.22,f],[2.22,.46],[-2.22,.46]].map(([m,_])=>{const[g,,p]=a(m,0,_);return[g,p]}),d=h===0?c-.2:c+h*.135;e.shell(u,d,c+(h+1)*.135,"#c8b697")}for(const h of[-1,1]){for(let f=0;f<=6;f++){const u=h*(1.15+f*.16);e.beam(a(u,.26),a(u,1.78),.032,ps)}for(const f of[.32,1.7])e.beam(a(h*1.15,f),a(h*2.2,f),.046,ps)}e.finish()}function iv(i,t){nv(i,t)}const Yo="#eeeee7",ns="#f3f1e7",Aa="#294d6a",pd="#496b83",md={glass:[pd,"#7694a3"],metal:[Aa,"#4d7494"],flatRoof:["#c2c7c2","#c7c8bf","#c6c8c4"],stone:["#c7bcab"]};function ur(i){return i.map(([t,e],n)=>{const[s,o]=i[(n+1)%i.length],r=Math.hypot(s-t,o-e);return{x:t,z:e,length:r,ux:(s-t)/r,uz:(o-e)/r}})}function Ve(i,t,e=0){return[i.x+i.ux*t-i.uz*e,i.z+i.uz*t+i.ux*e]}function Mu(i,t){return i.map((e,n)=>{const s=(n+i.length-1)%i.length,o=i[s],r=Ve(o,0,t[s]),a=Ve(e,0,t[n]),l=o.ux*e.uz-o.uz*e.ux,c=((a[0]-r[0])*e.uz-(a[1]-r[1])*e.ux)/l;return[r[0]+o.ux*c,r[1]+o.uz*c]})}function ql(i,t,e,n,s){return[Ve(i,t,n),Ve(i,e,n),Ve(i,e,s),Ve(i,t,s)]}function _o(i,t,e,n,s,o,r=pd,a=.025){i.wall(Ve(t,e,-a),Ve(t,n,-a),s,o,r)}function sv(i,t,e,n){const s=n?Math.max(1,Math.round(t.length/4.15)):1,o=Math.min(n?2.38:.93,t.length/s*.69);for(let r=0;r<s;r++){const a=t.length*(r+.5)/s,l=e+(n?.37:1.02),c=e+2.37;_o(i,t,a-o/2,a+o/2,l,c),n&&_o(i,t,a-.038,a+.038,l,c,"#7694a3",.04)}}function ov(i,t,e){const[n,s]=Ve(t,0,.055),[o,r]=Ve(t,t.length,.055);i.beam([n,e+.26,s],[o,e+.26,r],.065,Aa),i.beam([n,e+1.08,s],[o,e+1.08,r],.075,Aa);const a=Math.ceil(t.length/.215);for(let l=0;l<a;l++){const c=t.length*(l+.5)/a;i.wall(Ve(t,c-.016,.055),Ve(t,c+.016,.055),e+.26,e+1.08,Aa)}}function rv(i,t,e,n,s){const o=n+.9,r=e.length*.2,a=e.length*.8,l=s(...Ve(e,e.length/2,-2.9));for(let u=0;u<6;u++){const d=-2.9+u*.42,m=l+(o-l)*(u+1)/6;t.shell(ql(e,r,a,d,.04),Math.min(m-.05,l-.08),m,"#c7bcab")}t.shell(ql(e,r-.9,a+.9,-2.3,.04),n+3.24,n+3.56,ns);const c=(r+a)/2;_o(t,e,c-4.4,c+4.4,n+2.74,n+3.23,ns,.055);const[h,f]=Ve(e,c,-.082);ze(i,{text:"анапа-океан",position:[h,n+2.99,f],size:[8.1,.62],outward:[e.uz,-e.ux],color:"#155d8a",weight:850,lighting:"backlit",glowColor:"#6ac8ff"})}function av(i,t,e){const n=_e(i,"Анапа-Океан — 13 этажей",{surfaces:md}),s=ur(t),o=new Set([0,1,3,4,5,6]),r=Mu(s,s.map((g,p)=>o.has(p)?1.5:.05)),a=ur(r),l=e(...Ve(s[0],s[0].length/2)),c=Math.min(...t.map(g=>e(...g)))-.3,h=l+3.65,f=12,u=2.97,d=h+f*u;n.shell(t,c,h,Yo,ns);for(const g of s.slice(0,3)){const p=Math.max(2,Math.round(g.length/2.3));for(let v=0;v<p;v++){const M=g.length*(v+.055)/p,x=g.length*(v+.945)/p;_o(n,g,M,x,l+.95,l+3.22)}}rv(i,n,s[0],l,e),n.shell(r,h,d,Yo,"#c2c7c2");for(let g=0;g<f;g++){const p=h+u*g,v=g<f-1;v&&(n.shell(t,p,p+.22,ns),n.flat(t,p,ns));for(let M=0;M<s.length;M++){const x=o.has(M);sv(n,a[M],p,x),x&&v&&ov(n,s[M],p)}}const m=Mu(s,s.map(()=>.4)),_=ur(m);n.shell(m,d-.17,d+.45,Yo,"#c7c8bf");for(const[g,p]of[[2,1.37],[7,1.05]]){const v=_[g];n.shell(ql(v,.7,v.length-.7,.02,2.1),d+.45,d+p,Yo)}n.finish()}function cv(i,t,e){const n=_e(i,"Анапа-Океан — низкое крыло",{surfaces:md}),s=[...t.slice(0,9),t[15]],o=t.slice(8),r=e(...Le(s)),a=e(...Le(o)),l=r+3.9,c=a+6.25,h="#4d7494";for(const[g,p,v]of[[s,r,l],[o,a,c]]){const M=Math.min(...g.map(S=>e(...S)))-.3;n.shell(g,M,v,Yo,"#c6c8c4");const x=ur(g);for(const S of x){if(S.length<2.7)continue;const b=Math.max(1,Math.round(S.length/4.3));for(let E=0;E<b;E++){const y=S.length*(E+.17)/b,w=S.length*(E+.84)/b;_o(n,S,y,w,p+.72,p+2.94),g===o&&_o(n,S,y,w,p+3.55,v-.64)}}}const f=ur(s);for(const g of f.slice(0,6)){const p=Ve(g,0,.15),v=Ve(g,g.length,.15);n.wall(p,v,l+.14,l+.91,h),n.beam([p[0],l+.96,p[1]],[v[0],l+.96,v[1]],.055,ns)}const u=f[3],[d,m]=Ve(u,u.length/2,-1.55),_=e(d,m)+2.65;for(const g of[-1,1]){const[p,v]=Ve(u,u.length/2+g*1.85,-1.47);n.beam([p,e(p,v),v],[p,_,v],.16,ns),n.beam([p,_-.12,v],[d,_-.12,m],.095,ns)}ze(i,{text:"La Veranda",position:[d,_+.16,m],size:[3.6,.69],outward:[u.uz,-u.ux],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#faf3db",weight:600,lighting:"spot"}),n.finish()}function lv(i,t,e){if(t.id==="223949006")av(i,t.rings[0],e);else if(t.id==="142489050")cv(i,t.rings[0],e);else return!1;return!0}const ui="#eeece2",ds="#354552";function gd(i,t){const e=Math.hypot(t[0]-i[0],t[1]-i[1]),n=(t[0]-i[0])/e,s=(t[1]-i[1])/e,o=(l,c)=>[i[0]+n*l-s*c,i[1]+s*l+n*c];return{point:o,project:([l,c])=>[(l-i[0])*n+(c-i[1])*s,(l-i[0])*-s+(c-i[1])*n],rectangle:(l,c,h,f)=>[o(l,h),o(c,h),o(c,f),o(l,f)]}}function Su(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);r>=0&&e.push(s),r<0!=a<0&&e.push(xt(s,o,r/(r-a)))}return e}function hv(i,t,e){const{point:n,project:s,rectangle:o}=gd(t[0],t[1]),r=t.map(y=>e(...y)),a=Math.max(...r),l=a+3.35,c="#c8bda8",h="#adada4",f=_e(i,"Кубань",{surfaces:{flatRoof:[h],stone:[c]}});f.shell(t,Math.min(...r)-.22,l,c,h);const u=Su(t,y=>14-s(y)[0]),d=Su(t,y=>s(y)[1]-35.45);f.shell(u,l,a+6.7,ui,h),f.shell(d,l,a+6,"#d7d0c1",h);const m=14,_=89.4,g=9.02,p=25.57,v=o(m,_,g+1.05,p-1.05),M=Le(v),x=2.95,S=l+8*x;f.shell(v,l,S,ui,h);const b=22,E=[g,p].map((y,w)=>{const A=w===0?1:-1,P=[];for(let D=0;D<b;D++){const C=m+(_-m)*D/b,L=m+(_-m)*(D+1)/b;P.push(n(C,y+A*.48),n(C+(L-C)*.4,y),n(L,y))}return P});for(let y=0;y<8;y++){const w=l+y*x;En(f,v[0],v[1],M,w+.96,w+2.62,3.45),En(f,v[2],v[3],M,w+.96,w+2.62,3.45);for(const P of E)for(let D=1;D<P.length;D++)f.wall(P[D-1],P[D],w+.24,w+.94,ui);const A=[[...E[0],n(_,g+1.07),n(m,g+1.07)],[...E[1],n(_,p-1.07),n(m,p-1.07)]];for(const P of A)f.shell(P,w,w+.24,ui)}f.shell(v,S,S+.45,ui,h),f.finish()}function yu(i,t,e,n,s,o,r){const a=[[t[0],n,t[1]],[e[0],n,e[1]]];for(let l=0;l<=8;l++){const c=Math.PI*l/8,[h,f]=xt(t,e,(1+Math.cos(c))/2);a.push([h,s+(o-s)*Math.sin(c),f])}i.face(r,...a)}function ga(i,t,e,n,s,o,r){for(let a=0;a<r;a++){const l=f=>xt(t,e,(a+f)/r),c=[l(.15),l(.85)].map(f=>xt(n,f,1.006));yu(i,...c,s,s+o*.72,s+o,ui);const h=[l(.24),l(.76)].map(f=>xt(n,f,1.011));yu(i,...h,s+.12,s+o*.72,s+o-.2,"#314454")}}function uv(i,[t,e],n,s,o,r=!1){const a=n.map(([l,c])=>Array.from({length:s},(h,f)=>{const u=2*Math.PI*(f+.5)/s;return[t+c*Math.cos(u),l,e+c*Math.sin(u)]}));for(let l=1;l<a.length;l++)for(let c=0;c<s;c++){const h=(c+1)%s;i.face(o,a[l-1][c],a[l-1][h],a[l][h],a[l][c]),r&&c%2===0&&i.beam(a[l-1][c],a[l][c],.04,"#a98c4b")}}function bu(i,[t,e],n,s){const o="#bc9e4f";i.beam([t,n,e],[t,n+s,e],.075,o),i.beam([t-.33,n+s*.67,e],[t+.33,n+s*.67,e],.065,o),i.beam([t-.22,n+s*.35,e],[t+.22,n+s*.43,e],.06,o)}function fv(i,t,e){const[n,s,o,r]=t,a=(D,C)=>xt(xt(s,o,D),xt(n,r,D),C),l=(D,C,L,U)=>[a(D,L),a(C,L),a(C,U),a(D,U)],c=Le(t),h=e(...c),f=Math.min(...t.map(D=>e(...D)))-.25,u="#3c9e9e",d="#a99973",m=_e(i,"Свято-Онуфриевский храм",{surfaces:{flatRoof:[ds],glass:["#314454"],stone:[d]}}),_=l(.24,1,0,1),g=l(0,.35,.25,.75),p=Le(_),v=Le(g),M=h+5.9;m.shell(_,f,h+.6,d,null),m.shell(_,h+.6,M,u,null),m.shell(g,f,h+.6,d,null),m.shell(g,h+.6,h+6.45,u,null),m.shell(_.map(D=>xt(p,D,1.012)),M-.27,M,ui,null);for(const[D,C]of[[_[0],_[1]],[_[2],_[3]],[_[1],_[2]]])ga(m,D,C,p,h+1.18,2.78,3);ga(m,g[3],g[0],v,h+.55,3.1,1);const x=[a(.42,.5),a(.83,.5)].map(([D,C])=>[D,h+7.95,C]),S=_.map(([D,C])=>[D,M,C]);m.face(ds,S[0],S[1],x[1],x[0]),m.face(ds,S[1],S[2],x[1]),m.face(ds,S[2],S[3],x[0],x[1]),m.face(ds,S[3],S[0],x[0]);const b=h+6.65,E=h+10.35;m.shell(g,h+6.22,b,ui,null),m.shell(g,b,E,u,null),g.forEach((D,C)=>{ga(m,D,g[(C+1)%g.length],v,b+.18,2.55,3)});for(const[D,C,L]of[[_,p,M],[g,v,E]])for(const U of D){const[z,k]=xt(C,U,1.006);m.beam([z,h+.6,k],[z,L,k],.35,ui)}const y=g.map(D=>xt(v,D,1.045)),w=[v[0],h+17.8,v[1]];y.forEach(([D,C],L)=>{const[U,z]=y[(L+1)%y.length];m.face(ds,[D,E,C],[U,E,z],w),m.beam([D,E,C],w,.055,"#88754c")}),bu(m,v,w[1],1.42);const A=a(.68,.5),P=Array.from({length:8},(D,C)=>{const L=Math.PI*(C+.5)/4;return[A[0]+1.98*Math.cos(L),A[1]+1.98*Math.sin(L)]});m.shell(P,h+7.35,h+10.1,u,null),m.shell(P.map(D=>xt(A,D,1.08)),h+9.87,h+10.12,ui,null),P.forEach((D,C)=>ga(m,D,P[(C+1)%P.length],A,h+8.22,1.42,1)),uv(m,A,[[10.12,1.98],[10.55,2.27],[11.25,2.32],[12.02,1.85],[12.63,1.02],[13.12,.47],[13.52,.16]].map(([D,C])=>[h+D,C]),12,ds,!0),bu(m,A,h+13.5,1.35),m.finish()}function dv(i,t,e){const{point:n,rectangle:s}=gd(t[3],t[4]),o=Le(t),r=t.map(A=>e(...A)),a=Math.max(...r),l="#d4b581",c="#cca873",h="#eadcbe",f="#a17a61",u="#aaa598",d="#625748",m="#986d59",_=_e(i,"Мотылёк",{surfaces:{flatRoof:[u],metal:[d,m],stone:[f]}}),g=a+9.35;_.shell(t,Math.min(...r)-.25,a+.64,f,null),_.shell(t,a+.64,g,c,u);for(let A=0;A<3;A++){const P=a+.65+A*2.84;if(En(_,t[3],t[4],o,P+.65,P+2.43,3.9,c),En(_,t[11],t[12],o,P+.65,P+2.43,4,c),!A)continue;const D=s(.2,51.35,-.58,.04);_.shell(D,P-.24,P,h,l),_.wall(D[0],D[1],P+.68,P+.77,d);const C=s(9.18,42.7,16.97,17.52);_.shell(C,P-.24,P,h,l),_.wall(C[2],C[3],P+.68,P+.77,d)}const p=42.99,v=57,M=16.85,x=44.8,S=s(p,v,M,x),b=Le(S),E=a+12.15;_.shell(S,g,E,c,null);for(const[A,P]of S.entries())En(_,P,S[(A+1)%S.length],b,g+.35,E-.35,4.3,c);const[y,w]=[M,x].map(A=>Array.from({length:11},(P,D)=>{const C=D/10,[L,U]=n(p-.27+(v-p+.54)*C,A);return[L,E+1.55*(1-(2*C-1)**2),U]}));for(let A=1;A<y.length;A++)_.face(m,y[A-1],w[A-1],w[A],y[A]);_.face(c,...y),_.face(c,...w),_.finish()}function pv(i,t,e){const n=t.parts?.filter(v=>v.levels>2)??[],s=t.parts?.filter(v=>v.levels===2)??[];if(n.length!==2||s.length!==2)return!1;const o=["#6f8a98","#8197a0","#627e8f","#718d9d"],r=_e(i,"Колоннада",{surfaces:{flatRoof:["#b8bfbe"],glass:o,stone:["#d4d8d5"]}}),a=t.rings[0],l=a.map(v=>e(...v)),c=Math.max(...l),h=Math.min(...l)-.22,f=c+6.65,u="#d4d8d5",d="#b8bfbe",m="#a5adaf";for(const v of t.parts)r.shell(v.rings[0],h,f,m,d);const _=Le(a);a.forEach((v,M)=>{const x=a[(M+1)%a.length];for(const S of[0,1]){const b=c+S*3.325;En(r,v,x,_,b+.42,b+2.87,2.4,"#c4c9c8")}});const g=["#9e7867","#9b8e65","#56768e"],p=2.95;for(const[v,M]of n.entries()){const x=M.rings[0],S=Le(x),b=f+(M.levels-2)*p;r.shell(x,f,b,u,d),x.forEach((E,y)=>{const w=x[(y+1)%x.length],A=Math.hypot(w[0]-E[0],w[1]-E[1]),P=Math.max(1,Math.round(A/2.45)),D=A>9?.13:.16,C=W=>xt(S,xt(E,w,W),1.0035);for(let W=0;W<P;W++){const q=C(D+(1-2*D)*(W+.025)/P),J=C(D+(1-2*D)*(W+.975)/P);for(let Q=2;Q<M.levels;Q++){const bt=f+(Q-2)*p,Mt=Q*7+y*11+W*5+v*9,Xt=Mt%29===0?g[W%g.length]:o[Mt%o.length];r.wall(q,J,bt+.15,bt+p-.14,Xt)}}if(A<13)return;const[L,U]=C(.15),[z,k]=C(.85);for(const[W,q]of[[L,U],[z,k]])r.beam([W,b,q],[W,b+1.45,q],.15,"#9ba5a8");r.beam([L,b+1.45,U],[z,b+1.45,k],.16,"#9ba5a8")})}return r.finish(),!0}function mv(i,t,e){const n=t.rings[0];if(t.id==="223459472")hv(i,n,e);else if(t.id==="142489074")fv(i,n,e);else if(t.id==="223628174")dv(i,n,e);else return t.id==="223628417"?pv(i,t,e):!1;return!0}function Ke([i,t],e){return[i,e,t]}function Zo([i,t],e,n=e){return Array.from({length:8},(s,o)=>{const r=o*Math.PI/4;return[i+Math.cos(r)*e,t+Math.sin(r)*n]})}function _d(i,t,e,n){i.shell(Zo(t,.13),e,e+.69,n,null),i.shell(Zo(t,.54),e+.69,e+.75,n);for(const s of[-1,1]){const o=[t[0]+s*.84,t[1]];i.shell(Zo(o,.18),e,e+.44,n,null),i.shell(Zo(o,.28),e+.44,e+.5,n),i.beam([o[0]+s*.23,e+.46,o[1]],[o[0]+s*.23,e+.87,o[1]],.08,n)}}function gv(i,t,e,n,s){const o=(n.lowerWaterfront??n)(...Le(e)),r=o+s,a="#ded4ba",l="#e5e0cf",c="#bfbaa8",h="#484740",f=[[e[1][0],-30.5],[e[2][0],-32.8],[e[3][0],-35.7]],u=f.map(([g,p])=>[g,p-2]),d=[e[0],...u,e.at(-1)];t.shell(d,o-.17,o+.23,a,"#aa9c80"),t.shell(d,r-.25,r,"#a8a393","#b6b2a5");for(let g=1;g<u.length;g++){const p=u[g-1],v=u[g];t.wall(p,v,o+.23,o+.75,a),t.wall(p,v,r-.43,r-.25,l),t.wall(f[g-1],f[g],o+.23,r-.25,"#4b5351");for(const x of[.79,1,1.19])t.beam(Ke(p,o+x),Ke(v,o+x),.053,h);const M=5;for(let x=0;x<M;x++){const S=(x+.5)/M,b=xt(p,v,S),E=Ke(b,o+1.54),y=r-.42;t.beam(Ke(b,o+.23),Ke(b,r-.25),.16,a);for(const P of[-1,1]){const D=xt(p,v,S+P*.018),C=xt(p,v,S+P*.056);t.face(l,Ke(b,y),Ke(C,y),E),t.face(c,Ke(C,y),Ke(D,y-.8),E),t.face(l,E,Ke(b,o+.77),Ke(D,o+.77))}t.beam(Ke([b[0],b[1]-.045],o+1.9),Ke([b[0],b[1]-.045],o+2.12),.11,"#f2dcab");const[w,A]=xt(p,v,S+.09);_d(t,[w,A+1.14],o+.23,"#88684d")}}const[m,_]=xt(u[0],u[1],.78);ze(i,{text:"ПРИЧАЛ",position:[m,r-.54,_-.055],size:[3.08,.42],outward:[-.108,-.994],background:"#484740",color:"#f2e8d0",lighting:"unlit"})}function _v(i,t,e,n){const s=n(-170,-63)+.26,o=Le(e),r="#323a3e",a="#795b45",l=e.map(g=>xt(o,g,.82));t.shell(e,s-1.12,s+.39,"#666458");for(const[g,p,v,M]of[[e,.39,2.75,3.18],[e,3.18,5.93,6.52],[l,6.52,8.75,9.06]])t.shell(g,s+p,s+v,"#35494d",null),t.shell(g,s+v,s+M,r,"#777e7b"),g.forEach((x,S)=>{const b=g[(S+1)%g.length];En(t,x,b,o,s+p+.05,s+v,1.18,r)});const c=[[-185.1,-55.2],[-173,-69.3],[-163.5,-64],[-162.1,-47.2]],h=s+3.06,f=[c[0],[-188.8,-60.2],[-180.3,-72.6],c[1]];t.shell(f,s-.5,s+.11,"#888479","#aaa293"),t.shell(c,s-.52,s+.37,"#6a675d","#968477"),t.shell(c,h-.18,h,"#4c4035","#929895");const u=c.map(g=>xt(Le(c),g,.94));t.shell(u,s+.37,h-.19,"#475958",null);for(let g=0;g<c.length;g++){const p=c[g],v=c[(g+1)%c.length],M=Math.ceil(Math.hypot(v[0]-p[0],v[1]-p[1])/2.55);for(let x=0;x<M;x++){const S=xt(p,v,x/M);t.beam(Ke(S,s+.35),Ke(S,h-.13),.2,a),t.beam(Ke(xt(S,v,.03),h-.33),Ke(xt(p,v,(x+.8)/M),h-.33),.035,"#dac797")}}for(const g of[[-185.6,-60.4],[-183.4,-64],[-180.8,-67.6]])_d(t,g,s+.11,"#916e49");const d=[-177.7,-51.7],m=n(...d),_=Zo(d,.36,.52);t.shell(_,m-.08,m+2.31,a),ze(i,{text:"ВИНО И МОРЕ",position:[d[0]-.365,m+1.28,d[1]],size:[1.02,.53],outward:[-1,0],background:"#5b4435",color:"#e7dac1",lighting:"unlit"})}const Yl="#607680",xv={223948934:{address:"9",height:4.9,wall:"#c6b69f",roof:"#b6b1a5"},223948896:{address:"11",height:4.7,wall:"#b7a188",roof:"#777774"},223948899:{address:"13",height:4.6,wall:"#c4baaa",roof:"#cbc7bc"},223948902:{address:"15/1",height:4.45,wall:"#c0b4a2",roof:"#c4c0b5"},223948903:{address:"15/2",height:4.45,wall:"#bab0a1",roof:"#c4c0b5"},223948904:{address:"15/3",height:4.4,wall:"#baafa0",roof:"#c4c0b5"},223948906:{address:"17",height:4.35,wall:"#9c8471",roof:"#b3aba1"},223948908:{address:"19",height:3.65},223948913:{address:"21",height:3.75,wall:"#b4a18a",roof:"#a59c8b",name:"Хинкальная"},223948916:{address:"23",height:3.85,wall:"#85685b",roof:"#77716a",veranda:!0}};function vv(i){const t=i.reduce((e,n,s)=>{const o=i[(s+1)%i.length];return e+n[0]*o[1]-o[0]*n[1]},0);return i.map((e,n)=>[e,i[(n+1)%i.length]]).filter(([e,n])=>{const s=Math.hypot(n[0]-e[0],n[1]-e[1]);return s>=2&&(n[0]-e[0])*Math.sign(t)/s>.42})}function Mv(i,t,e,{height:n,wall:s,roof:o,veranda:r}){const a=vv(t),l=e.lowerWaterfront??e,c=Math.min(...t.map(d=>l(...d))),h=c+n,f=Le(t),u=r?t.map(d=>xt(f,d,.8)):t;i.shell(t,c-.24,c+.32,"#b2a798"),i.shell(u,c+.3,h-.28,s,null),i.shell(t,h-.28,h,o);for(const[d,m]of a){const _=Math.hypot(m[0]-d[0],m[1]-d[1]),g=Math.max(1,Math.round(_/(r?3.4:2.5))),p=xt(f,d,1.005),v=xt(f,m,1.005);for(let M=0;M<g;M++){const x=xt(p,v,(M+.12)/g),S=xt(p,v,(M+.88)/g);if(r){const b=xt(d,m,M/g);i.beam([b[0],c+.32,b[1]],[b[0],h-.26,b[1]],.16,s),i.beam([x[0],c+.97,x[1]],[S[0],c+.97,S[1]],.075,"#66645f");const E=xt(f,x,.8),y=xt(f,S,.8);i.wall(E,y,c+.65,h-.44,Yl)}else i.wall(x,S,c+.55,h-.6,Yl),i.beam([x[0],c+1.31,x[1]],[S[0],c+1.31,S[1]],.07,s)}r&&i.beam([m[0],c+.32,m[1]],[m[0],h-.26,m[1]],.16,s)}}function Sv(i,t,e,n){const s=n?-361.1:-351.8,o=n?-354.7:-331,r=n?-29.5:-29.6,a=(e.lowerWaterfront??e)((s+o)/2,r),l=n?"#e1dbcc":"#ac8b65",c=n?"#244945":"#302723",h=(g,p,v=0)=>[n?s+o-g:g,a+p,r-v],f=(g,p,v,M)=>[[g,v],[p,v],[p,M],[g,M]],u=(g,p,v,M,x,S)=>{t.face(S,h(g,v,x),h(p,v,x),h(p,M,x),h(g,M,x))},d=(g,p,v,M,x,S)=>t.beam(h(g,v,M),h(p,v,M),x,S),m=(g,p,v,M,x,S)=>t.beam(h(g,p,M),h(g,v,M),x,S);t.shell(f(s,o,r,r+2.55),a+.12,a+5.36,l),u(s+.16,o-.16,3.72,5.16,.022,"#687c86");const _=n?4:12;for(let g=0;g<=_;g++)m(s+.16+(o-s-.32)*g/_,3.7,5.18,.041,.065,"#d6d1c7");if(d(s+.16,o-.16,4.47,.038,.068,"#d6d1c7"),n){const g=s+.42;u(g,g+1.16,.31,2.52,.034,"#755336"),u(g+.11,g+1.05,.95,2.41,.044,"#45534a"),u(g+.11,g+1.05,.35,.94,.044,c),u(s+2.02,o-.38,.47,2.46,.026,"#4e6355");for(let M=0;M<=3;M++)m(s+2.02+M*1.33,.45,2.48,.06,.12,"#79573b");const p=s+1.84,v=o-.22;t.face("#236a66",h(p,2.77),h(v,2.77),h(v,2.5,1.38),h(p,2.5,1.38)),u(p,v,2.34,2.5,1.38,"#286c67"),ze(i,{text:"Adrian",position:h((p+v)/2,2.42,1.39),size:[1.48,.15],outward:[0,-1],color:"#f5e9ce",lighting:"unlit"}),ze(i,{text:"Adrian  BISTRO",position:h((p+v)/2,3.15,.035),size:[3.98,.53],outward:[0,-1],background:"#536e55",color:"#f1d8a1",fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#ffca70"}),t.shell(f(s+.12,o-.08,r-1.65,r),a+.13,a+.31,"#b5a58c"),d(s+1.75,o-.15,1.14,1.53,.061,c);for(let M=0;M<=11;M++)m(s+1.75+M*.409,.31,1.14,1.53,.035,c);for(const M of[s+.3,s+1.72,o-.45]){const[x]=h(M,0),S=(E,y)=>Array.from({length:8},(w,A)=>[x+Math.cos(A*Math.PI/4)*E,r-y+Math.sin(A*Math.PI/4)*E]);t.shell(S(.24,.83),a+.31,a+.7,"#ab694f");const b=S(.3,.83);for(let E=0;E<b.length;E++){const y=b[E],w=b[(E+1)%b.length];t.face(E%2?"#345c46":"#40694d",[y[0],a+.66,y[1]],[w[0],a+.66,w[1]],[x,a+1.85,r-.83])}}for(const M of[s+2.7,s+4.56]){m(M,.31,1,.93,.075,"#765d41");const[x]=h(M,0);t.shell(f(x-.31,x+.31,r-1.15,r-.71),a+.98,a+1.03,"#8b6c4b")}}else{t.shell(f(s,o,r-1.2,r),a+.12,a+.31,"#786858"),t.face("#392e27",h(s,3.16),h(o,3.16),h(o,2.79,1.21),h(s,2.79,1.21)),u(s,o,2.62,2.79,1.21,"#3d2f28");const g=8,p=(o-s)/g;for(let v=0;v<g;v++){const M=s+p*v;u(M+.08,M+p-.08,.34,2.61,.032,v%3===0?"#587273":"#354d50"),m(M+.02,.31,2.68,1.13,.088,c),d(M+.12,M+p-.18,1.12,1.11,.07,"#7e5e42");for(let x=0;x<=5;x++)m(M+.12+(p-.3)*x/5,.31,1.12,1.11,.039,"#7e5e42")}m(o-.02,.31,2.68,1.13,.088,c),ze(i,{text:"BAVARIA",position:h(-342.2,3.07,1.24),size:[5.9,.55],outward:[0,-1],color:"#f5e5ca",fontFamily:"Georgia, serif",lighting:"backlit"}),yv(i,t,e)}}function yv(i,t,e){const o=e(-332.9,-27.7)+.13;for(const a of[-1,1]){const l=-332.9+a*1.05;t.beam([l,o,-27.7],[l,o+2.58,-27.7],.08,"#606564")}const r=[[-332.9-1.12,-27.7-.05],[-332.9+1.12,-27.7-.05],[-332.9+1.12,-27.7+.05],[-332.9-1.12,-27.7+.05]];t.shell(r,o+1.61,o+2.64,"#593b2a");for(const a of[1.87,2.12,2.38])t.beam([-332.9-1.1,o+a,-27.7+.05],[-332.9+1.1,o+a,-27.7+.05],.008,"#492b21");t.beam([-332.9+.2,o+2.64,-27.7],[-332.9+.28,o+2.95,-27.7+.13],.029,"#31302f"),t.beam([-332.9+.23,o+2.95,-27.7+.13],[-332.9+.35,o+2.95,-27.7+.15],.052,"#31302f"),ze(i,{text:"BAVARIA",position:[-332.9,o+2.26,-27.7+.061],size:[1.98,.42],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffc882"}),ze(i,{text:"GRILL&BAR",position:[-332.9,o+1.98,-27.7+.061],size:[1.2,.21],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",spill:!1})}function bv(i,t,e){const n=[-278.9,-35.55],s=[-260.3,-39.94],o=Math.hypot(s[0]-n[0],s[1]-n[1]),r=[(s[1]-n[1])/o,(n[0]-s[0])/o],a=xt(n,s,.61),l=(e.lowerWaterfront??e)(...a),c=(m,_=0)=>{const[g,p]=xt(n,s,m);return[g+_*r[0],p+_*r[1]]},h=(m,_,g=0)=>{const[p,v]=c(m,g);return[p,l+_,v]},f="#59606a",u="#313a43";t.wall(n,s,l+.13,l+3.39,f),t.wall(c(0,.022),c(1,.022),l+2.61,l+3.39,u);const d=[0,.1,.2,.3,.4,.49,.56,.66,.73,.82,.91,1];for(let m=1;m<d.length;m++){const _=d[m-1],g=d[m],p=m===7;t.wall(c(_,.038),c(g,.038),l+(p?.34:.63),l+2.6,p?"#334955":"#6b8596"),t.beam(h(_,p?.33:.62,.08),h(_,2.62,.08),.085,u),p||t.beam(h(_,2.11,.064),h(g,2.11,.064),.058,u)}t.beam(h(1,.62,.08),h(1,2.62,.08),.085,u),ze(i,{text:"Хинкальная",position:h(.61,2.92,.051),size:[5.54,.56],outward:r,fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#e6f1ff"}),ze(i,{text:"грузинская  Кафе  европейская",position:h(.61,3.26,.051),size:[4.06,.17],outward:r,fontFamily:"Georgia, serif",color:"#fff4e1",lighting:"spot",spill:!1})}function wv(i,t,e){const{id:n,rings:[s]}=t,o=xv[n];if(!o&&n!=="223949008")return!1;const r=n==="223949008"?"Вино и море":n==="223948908"?"Причал":o.name??`Набережная, ${o.address}`,a=_e(i,r,{surfaces:{glass:[Yl,"#687c86","#45534a","#4e6355","#587273","#354d50","#4b5351","#35494d","#475958","#334955","#6b8596"],wood:["#755336","#79573b","#765d41","#8b6c4b","#7e5e42","#88684d","#795b45","#916e49","#968477","#593b2a"],foliage:["#345c46","#40694d"],stone:["#b2a798","#b5a58c","#aa9c80","#aaa293"],flatRoof:[o?.roof,"#b6b2a5","#777e7b","#929895"],metal:["#244945","#302723","#484740","#323a3e"]}});return n==="223949008"?_v(i,a,s,e):n==="223948908"?gv(i,a,s,e,o.height):(Mv(a,s,e,o),(n==="223948904"||n==="223948906")&&Sv(i,a,e,n==="223948904"),n==="223948913"&&bv(i,a,e)),a.finish(),!0}const gn="#e9e5d8",wu="#d8c7a9",es="#7a7c75",Vc="#517789",Ys="#d8ded9";function Ar(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=Math.sign(t),c=r*l/a,h=-o*l/a;return{a:e,b:s,length:a,nx:c,nz:h,point(f,u=0){return[e[0]+o*f/a+c*u,e[1]+r*f/a+h*u]}}})}function Dn(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function Ge(i,t,e,n,s,o,r,a=.045){i.wall(t.point(e,a),t.point(n,a),s,o,r)}function Eu(i,t,e,n,{spacing:s,fraction:o,sill:r,top:a,glass:l}){const c=Math.max(1,Math.round(t.length/s)),h=t.length/c;for(let f=0;f<n;f++){const u=e+f*2.7;for(let d=0;d<c;d++){const m=(d+.5)*h,_=h*o/2;Ge(i,t,m-_-.08,m+_+.08,u+r-.08,u+a+.08,gn),Ge(i,t,m-_,m+_,u+r,u+a,l,.065),Ge(i,t,m-.026,m+.026,u+r,u+a,gn,.083)}}}function Zl(i,[t,e],n,s,o){const r=a=>Array.from({length:10},(l,c)=>{const h=c*Math.PI/5;return[t+o*a*Math.cos(h),e+o*a*Math.sin(h)]});i.shell(r(1.27),n,n+.13,gn),i.shell(r(1),n+.13,s-.2,gn,null),i.shell(r(1.21),s-.2,s,gn)}function Ev(i,t,e){const n=Ar(t).filter(w=>w.length>.1),s=Le(t)[1],o=n.filter(({a:w,b:A,length:P,nz:D})=>P>27&&D<-.8&&(w[1]+A[1])/2<s-5).sort((w,A)=>Math.min(w.a[0],w.b[0])-Math.min(A.a[0],A.b[0])),r=o[0];if(!r)return!1;const a=_e(i,"Старинная Анапа",{surfaces:{glass:[Vc,"#648591","#63767a","#4b5553","#5a625c"],flatRoof:[es],stone:["#a89b85"],metal:["#484b47","#535a58"]}}),l=e(...r.point(r.length/2,.7))+.08,c=Math.min(l-.15,...t.map(w=>e(...w)-.25)),h=l+3.3,f=l+11.55,u=l+11.9;a.shell(t,c,l+.26,"#a89b85",null),a.shell(t,l+.26,f,wu,null),a.shell(t,f,u,gn,es);for(const w of n){if(w.length<4.8)continue;const A=w.nz>.55;Eu(a,w,h,3,{spacing:A?3.4:3.12,fraction:A?.73:.57,sill:A?.49:.74,top:2.28,glass:A?"#648591":"#63767a"}),o.includes(w)||Eu(a,w,l+.26,1,{spacing:3.3,fraction:.58,sill:.55,top:2.62,glass:"#4b5553"})}for(const w of o){const A=w.length-.3,P=Dn(w,.3,A,-.1,.95);a.shell(P,l+.35,h,"#524940",null);const D=w===r?h-.83:h,C=w===r?h+.36:h+.24;a.shell(Dn(w,0,w.length,-.15,w===r?1.49:1.22),D,C,gn);const L=Math.round(w.length/2.12);for(let U=0;U<L;U++){const z=.3+U*(A-.3)/L,k=.3+(U+1)*(A-.3)/L;Ge(a,w,z+.07,k-.07,l+.44,h-.1,"#5a625c",.971),Ge(a,w,z+.018,z+.088,l+.44,h-.1,"#a0906d",.989)}}const d=r.length/2,m=d-6.2,_=d+6.2;for(const[w,A]of[[-.83,-.76],[.29,.36]])a.shell(Dn(r,0,r.length,1.49,1.55),h+w,h+A,gn);const[g,p]=r.point(d,1.505);ze(i,{text:"СТАРИННАЯ АНАПА",position:[g,h-.58,p],size:[16,.78],outward:[r.nx,r.nz],color:"#a0803f",weight:600,fontFamily:"Georgia, serif",letterSpacing:"16px",lighting:"spot",glowColor:"#ffddad"});for(const w of[-4.95,-1.65,1.65,4.95])Zl(a,r.point(d+w,1.17),l+.16,h,.21),Zl(a,r.point(d+w,.85),h+.24,f-.08,.33);for(let w=0;w<3;w++){const A=h+.24+w*2.7;for(const P of[d-3.3,d,d+3.3]){const D=Dn(r,P-1.23,P+1.23,-.03,.54);a.shell(D,A,A+.14,gn);for(const C of[.28,1.03])Ge(a,r,P-1.21,P+1.21,A+C,A+C+.045,"#484b47",.55);for(let C=-5;C<=5;C++){const L=P+C*.22;Ge(a,r,L,L+.036,A+.27,A+1.04,"#484b47",.55)}}}a.shell(Dn(r,m,_,-.08,1.2),f-.09,u+.39,gn);const v=(w,A)=>[w[0],A,w[1]],M=u+.39,x=u+2.24,S=v(r.point(d,1.2),x),b=v(r.point(d,-3.5),x),E=v(r.point(m,1.2),M),y=v(r.point(_,1.2),M);a.face(gn,E,y,S),a.face(es,E,S,b,v(r.point(m,-3.5),M)),a.face(es,S,y,v(r.point(_,-3.5),M),b),a.face(wu,v(r.point(m,-3.5),M),b,v(r.point(_,-3.5),M));for(const w of[-1.83,-.61,.61,1.83]){const A=d+w,P=u+.02,D=Array.from({length:10},(C,L)=>{const U=Math.PI/2+L*Math.PI/5,z=L%2?.105:.245;return v(r.point(A+Math.cos(U)*z,1.225),P+Math.sin(U)*z)});for(let C=0;C<D.length;C++)a.face("#a99973",v(r.point(A,1.225),P),D[C],D[(C+1)%D.length])}for(const w of o)for(const[A,P]of w===r?[[.25,m],[_,w.length-.25]]:[[.25,w.length-.25]]){Ge(a,w,A,P,u+.39,u+.45,"#535a58",-.2);for(let D=A;D<P;D+=1.7)Ge(a,w,D,D+.04,u,u+.45,"#535a58",-.2)}return a.finish(),!0}function $l(i,t,e,n,s,o=!1){for(const r of Ar(t))if(!(r.length<.35||o&&r.nz>.25))for(let a=0;a<n;a++){const l=e+a*2.62+.42,c=e+(a+1)*2.62-.31,h=Math.max(1,Math.round(r.length/1.48));for(let f=0;f<h;f++){const u=(f+.065)*r.length/h,d=(f+.935)*r.length/h;Ge(i,r,u,d,l,c,Vc),Ge(i,r,u,d,l+(c-l)*.63,l+(c-l)*.63+.056,s,.067)}}}function Rr(i,t,e,n,s,o,r,a,l=1.35){const c=Math.max(1,Math.round((n-e)/l)),h=(n-e)/c;Ge(i,t,e,n,s,o,a);for(let f=0;f<c;f++){const u=e+f*h+.045,d=u+h-.09;Ge(i,t,u,d,s+.05,o-.05,r,.065),Ge(i,t,u,d,o-.53,o-.48,a,.081)}}function xd(i,t,e,n,s,o,r){for(const l of[.45,.98])Ge(i,t,e,n,s+l,s+l+.055,r,o);const a=Math.max(1,Math.ceil((n-e)/1.6));for(let l=0;l<=a;l++){const c=e+(n-e)*l/a,[h,f]=t.point(c,o);i.beam([h,s,f],[h,s+1.025,f],.06,r)}}function vd(i,t,e,n,s,o,r,a){const l=(h,f,u)=>{const[d,m]=t.point(h,f);return[d,u,m]},c=Math.ceil((n-e)/.69);for(let h=0;h<c;h++){const f=e+h*(n-e)/c,u=e+(h+1)*(n-e)/c,d=h%2?r:a;i.face(d,l(f,0,s),l(u,0,s),l(u,o,s-.47),l(f,o,s-.47)),Ge(i,t,f,u,s-.62,s-.47,d,o)}}function Tv(i,t,e,n){const s=e.length*.46,o=s-5.25,r=s+5.25,a=n+.59,l=a+2.65;i.shell(Dn(e,o,r,-.08,4.55),n-.22,n,"#d7c7a9");for(let u=0;u<4;u++)i.shell(Dn(e,o+u*.27,r-u*.27,0,2.42-u*.48),n+u*.1475,n+(u+1)*.1475,"#dacbad");Rr(i,e,s-2.65,s+2.65,a,l-.13,"#354f52","#dbc693",.88);for(const u of[-4.34,4.34])Zl(i,e.point(s+u,2.81),n,l,.17);const c=[[o,0],[r,0],[r,2.26],[r-.62,2.86],[r-2.17,3.26],[o+2.17,3.26],[o+.62,2.86],[o,2.26]];i.shell(c.map(([u,d])=>e.point(u,d)),l,l+.31,gn,es);const[h,f]=e.point(s,3.28);ze(t,{text:"Капитан",position:[h,l+.6,f],size:[3.1,.56],outward:[e.nx,e.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"})}function Av(i,t,e){if(t.length!==17)return!1;const n=_e(i,"Капитан",{surfaces:{glass:[Vc,"#54777f","#3f5e66"],flatRoof:[es,"#987561"],stone:["#a39881"]}}),s=t.slice(2,12),o=[t[2],...t.slice(11,16)],r=[...t.slice(0,3),...t.slice(15)],a=e.lowerWaterfront??e,l=Math.min(...t.map(x=>a(...x)))-.25,c=Math.min(...s.map(x=>a(...x)))+.12,[h,f]=Ar(o).slice(1,3),u=Ar(r).at(-1),d=e(...u.point(u.length*.46,4.55)),m=e(...f.point(f.length/2,2)),_=m+2.89;n.shell(t,l,c+.27,"#a39881",null),n.shell(o,c+.27,_,Ys,null),n.shell(o.map(x=>xt(Le(o),x,1.032)),_,_+.28,Ys,"#987561"),$l(n,o,c+.1,2,Ys),Rr(n,h,.38,h.length-.38,c+5.48,_-.12,"#54777f","#cedad5",1.67),Ge(n,h,.38,h.length-.38,m-.06,m+.05,Ys,.083);const g=Dn(h,.3,h.length-.3,-.07,1.03);n.shell(g,c+2.68,c+2.84,"#c3bfb4"),xd(n,h,.38,h.length-.38,c+2.84,.97,"#afb5b0"),vd(n,h,.35,h.length-.35,c+5.36,1.24,"#b6a481","#d5c8a5"),Rr(n,f,1.03,f.length-.6,m+.14,_-.12,"#3f5e66",Ys),n.shell(Dn(f,.48,f.length-.12,0,1.26),_-.1,_+.32,gn);const[p,v]=f.point(f.length*.57,1.28);ze(i,{text:"Кафе Капитан",position:[p,_+.18,v],size:[5.2,.57],outward:[f.nx,f.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"}),n.shell(s,c+.27,c+7.52,Ys,null);const M=s.map(x=>xt(Le(s),x,1.046));return n.shell(M,c+7.52,c+7.85,gn,es),$l(n,s,c-.03,3,gn,!0),n.shell(r,c+.27,d+3.62,"#d9be8b",es),Tv(n,i,u,d),n.finish(),!0}const Rv={170958817:{number:1,roof:"#8a8f8d",wall:"#d5cbb6",frame:"#c8d4d2"},223948923:{number:5,roof:"#aca99d",wall:"#658195",frame:"#deddd3"},223948927:{number:7,roof:"#aaa492",wall:"#bcb29a",frame:"#dfd8bf"}};function Cv(i,t,e,{number:n,roof:s,wall:o,frame:r}){const a=_e(i,`Набережная, ${n}`,{surfaces:{glass:[Vc,"#526870","#6c858b"],flatRoof:[s,"#c4c7c2"],stone:["#a99e88"]}}),l=e.lowerWaterfront??e,c=Ar(t).filter(_=>_.nz<-.52),h=c.map(_=>l(..._.point(_.length/2))),f=t.map(_=>l(..._)),u=Math.min(...f)-.25,d=Math.min(...h.length?h:f)+.11,m=d+5.51;if(a.shell(t,u,d+.27,"#a99e88",null),a.shell(t,d+.27,m,o,null),a.shell(t.map(_=>xt(Le(t),_,1.02)),m,m+.24,r,s),n===1)$l(a,t,d+.15,2,r,!0);else for(const _ of c){const g=_.length-.36;if(Rr(a,_,.36,g,d+.42,d+2.71,"#526870",r),Rr(a,_,.36,g,d+3.03,m-.23,"#6c858b",r,1.47),n===5){const p=Dn(_,.15,_.length-.15,0,1.57);a.shell(p,d-.12,d+.41,"#aea69c");const v=Dn(_,.05,_.length-.05,0,1.68);a.shell(v,d+2.75,d+3.07,"#276583","#c4c7c2"),Ge(a,_,.19,_.length*.47,d+2.77,d+3.06,r,1.7);const M=_.length*.22;xd(a,_,M+2.3,g,d+.41,1.48,"#c2c7c3"),a.shell(Dn(_,.15,M+2.28,1.54,2.01),d-.12,d+.23,"#a49e96");for(const x of[.33,_.length*.51,g])a.shell(Dn(_,x-.12,x+.12,1.32,1.56),d+.41,d+2.75,o)}else Ge(a,_,.36,g,d+3.12,d+3.21,"#bc9d58",.085),vd(a,_,.26,_.length-.26,m-.05,1.42,"#c8a851","#f0e6ca")}return a.finish(),!0}function Pv(i,t,e){if(t.id==="r11979734-0")return Ev(i,t.rings[0],e);if(t.id==="156055903")return Av(i,t.rings[0],e);const n=Rv[t.id];return n?Cv(i,t.rings[0],e,n):!1}function Lv(i,t){const[e,n]=Di[1],s=t(e,n),o=Math.cos(Ii),r=Math.sin(Ii),a=[r,-o],l=(x,S,b)=>[e+x*o+b*r,s+S,n+x*r-b*o];if(ze(i,{text:"ГОРГИППИЯ",position:l(2.55,1.68,.345),size:[.39,.58],outward:a,color:"#3c3021",background:"#b99b62",weight:600,lighting:"unlit"}),typeof document>"u")return;const c=3.56,h=.65,f=document.createElement("canvas");f.width=768,f.height=Math.round(f.width*h/c);const u=f.getContext("2d");if(!u)return;const d="АРХЕОЛОГИЧЕСКИЙ МУЗЕЙ";u.font="600 39px system-ui, sans-serif";const m=Array.from(d,x=>u.measureText(x).width),_=f.width*.92,g=(_-m.reduce((x,S)=>x+S,0))/(d.length-1);let p=(f.width-_)/2;u.fillStyle="#292726",u.textAlign="center",u.textBaseline="middle";for(let x=0;x<d.length;x++){const S=p+m[x]/2,b=(S-f.width/2)/f.width;u.fillText(d[x],S,42+278*b**2),p+=m[x]+g}const v=new Dc(f);v.colorSpace=Je,v.anisotropy=4;const M=new he(new ni(c,h),new ie({map:v,alphaTest:.35}));M.name=d,M.position.set(...l(0,3.31,.066)),M.rotation.y=Math.atan2(...a),i.add(M)}const{Color:mn,Vector2:Dv,Vector3:k0}=F0,Re=24,Md=4,Iv=2;function Sd(i,t,e){return i.refinesStairs(t,e,Re)?Iv:i.refines(t,e,Re)?Md:Re}const Ci={land:"#c6b899",beach:"#e0c893",park:"#8da371",water:"#6eabb5",pier:"#c5bdae",plaza:"#d0c1aa",ruins:"#aea27e",road:"#989891",path:"#d9ccb6",tree:"#7b9367",shingle:"#aaa495",rockLight:"#a59172",riprap:"#898a78",quay:"#aca99e"},Tu=["#c6b9a5","#b0aca1","#b8a08b","#ddd3ba","#9a9c93"],Uv=["#e9deca","#ded6c7","#d6c5ad","#e4d8bf","#d8d6c7"],H0=new Set(["footway","pedestrian","steps","cycleway","path","track"]),Au=new Set(["223948926"]),Nv=[vx,Mx,ev,lv,mv,wv,Pv];function li(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function fr(i){const t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function $o(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function Fv(i,t,e=rd(i)){const{bounds:[n,s,o,r],columns:a,rows:l,heights:c}=t,[h,f]=i.origin,[u,d]=i.scale;function m(b,E){const y=ce.clamp((h+b/u-n)/(o-n)*(a-1),0,a-1),w=ce.clamp((r-f+E/d)/(r-s)*(l-1),0,l-1),A=Math.min(Math.floor(y),a-2),P=Math.min(Math.floor(w),l-2),D=P*a+A,C=ce.lerp(c[D],c[D+1],y-A),L=ce.lerp(c[D+a],c[D+a+1],y-A);return Math.max(.16,ce.lerp(C,L,w-P))}function _(b,E){const y=new Map,w=(A,P)=>{const D=`${A}:${P}`;return y.has(D)||y.set(D,b(A,P)),y.get(D)};return(A,P)=>{const D=E(A,P),C=Math.floor(A/D)*D,L=Math.floor(P/D)*D,U=(A-C)/D,z=(P-L)/D,k=w(C+D,L),W=w(C,L+D);return U+z<=1?w(C,L)*(1-U-z)+k*U+W*z:w(C+D,L+D)*(U+z-1)+k*(1-z)+W*(1-U)}}const g=N_(i),p=_((b,E)=>g(b,E,m(b,E)),()=>Re),v=_((b,E)=>e.height(b,E,p),(b,E)=>Sd(e,Math.floor(b/Re)*Re,Math.floor(E/Re)*Re)),M=(b,E)=>e.waterfront.nearEdge(b,E)||e.nearTransition(b,E)?e.height(b,E,p):v(b,E);return Object.assign(M,{plain:p,faceHeight:(b,E,y)=>y?e.height(b,E,p,y):M(b,E),lowerWaterfront:(b,E)=>e.waterfront.lowerGrade(b,E,M(b,E))})}function Cn(i=!1){const t=[],e=[],n=i?[]:null;return{triangle(s,o,r,a,l){t.push(...s,...o,...r),n&&n.push(...l);for(const c of[s,o,r]){const h=typeof a=="function"?a(...c):a;e.push(h.r,h.g,h.b)}},mesh(s,o=an){const r=new Ce;r.setAttribute("position",new se(t,3)),r.setAttribute("color",new se(e,3)),n&&r.setAttribute("facadeGrid",new se(n,3)),r.computeVertexNormals();const a=new he(r,new ie({vertexColors:!0,side:o}));return a.name=s,a.receiveShadow=!0,a}}}function pn(i,t,e=1){return So(i.material,{surface:t,strength:e}),i}function Ov(i){const t=i.material;return t.customProgramCacheKey=()=>"district-facade-grid",t.onBeforeCompile=e=>{e.uniforms.facadeEnabled=Gc.cartoonEnabled,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        ${z0.replace("cartoonDistrict","windowGridDistrict")}
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
      `)},pn(i,"plaster")}function yd(i){const t=i.map(s=>s.map(([o,r])=>new Dv(o,r))),e=Li.triangulateShape(t[0],t.slice(1)),n=t.flat().map(({x:s,y:o})=>[s,o]);return e.map(s=>s.map(o=>n[o]))}function Kl(i,t,e,n){const[s,o,r]=t,a=(o[0]-s[0])*(r[1]-s[1])-(o[1]-s[1])*(r[0]-s[0]);if(Math.abs(a)<1e-4)return;const l=([c,h])=>[c,e(c,h),h];i.triangle(l(s),l(a>0?r:o),l(a>0?o:r),n)}function Pi(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l])}}return e}function Bv(i,t,e,n){let s=Pi(i,o=>o[0]-t);return s=Pi(s,o=>t+n-o[0]),s=Pi(s,o=>o[1]-e),Pi(s,o=>e+n-o[1])}function bd(i,t,e,n,s,o=!1){const[r,a,l,c]=fr(t);for(let h=Math.floor(r/Re)*Re;h<l;h+=Re){let f=Pi(t,u=>u[0]-h);if(f=Pi(f,u=>h+Re-u[0]),!(f.length<3))for(let u=Math.floor(a/Re)*Re;u<c;u+=Re){let d=Pi(f,_=>_[1]-u);if(d=Pi(d,_=>u+Re-_[1]),d.length<3)continue;const m=Sd(s,h,u);for(let _=h;_<h+Re;_+=m)for(let g=u;g<u+Re;g+=m){const p=m===Re?d:Bv(d,_,g,m);if(!(p.length<3))for(const v of[1,-1]){const M=Pi(p,([S,b])=>v*(_+g+m-S-b));if(M.length<3)continue;const x=o?s.waterfront.split(M):null;if(!x){for(let S=2;S<M.length;S++)Kl(i,[M[0],M[S-1],M[S]],e,n);continue}for(const{ring:S,side:b}of x){const E=(y,w)=>e(y,w,b);for(let y=2;y<S.length;y++)Kl(i,[S[0],S[y-1],S[y]],E,n)}}}}}}function Zs(i,t,e,n,s,o=!1){for(const r of yd(t))bd(i,r,e,n,s,o)}function Ru(i,t=[.36,.28]){const[e,n]=t;return i.material.customProgramCacheKey=()=>`promenade-${e}-${n}`,i.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      `)},i}function wd(i,t){return i.kind==="pier"||i.bridge?.85:t.waterfront.upperWidths[i.id]||t.waterfront.lowerWidths[i.id]||i.level?.15:H0.has(i.kind)?.35:.31}function zv(i,t,e,n){const{points:s,kind:o,id:r}=t,a=n.promenadeWidths.get(r)??t.width,l=n.stairHeight(t,e.plain);if(l){kv(i,s,a,l);return}const c=H0.has(o),h=n.waterfront.upperWidths[r]||t.level==="upper",f=n.waterfront.lowerWidths[r]||t.level==="lower",u=new mn(h?"#cec7b8":f?"#b8b3a7":n.promenadeWidths.has(r)?"#c5c3b8":o==="pier"?Ci.pier:c?Ci.path:Ci.road),d=wd(t,n),m=(_,g,p)=>(n.rampHeight(t,_,g)??e.faceHeight(_,g,p))+d;for(let _=1;_<s.length;_++){const[g,p]=s[_-1],[v,M]=s[_],x=v-g,S=M-p,b=Math.hypot(x,S);if(b<.05)continue;const E=-S*a/(2*b),y=x*a/(2*b);bd(i,[[g+E,p+y],[v+E,M+y],[v-E,M-y],[g-E,p-y]],m,u,n,!0)}}function Ed(i,t,{from:e,to:n,run:s}){const o=i.slice(1).map(([l,c],h)=>Math.hypot(l-i[h][0],c-i[h][1])),r=o.reduce((l,c)=>l+c,0);let a=0;return o.flatMap((l,c)=>{if(l<.04)return[];const[h,f]=i[c],u=i[c+1][0]-h,d=i[c+1][1]-f,m=a/r;a+=l;const _=a/r,g=[m,...s.filter(v=>v>m&&v<_),_],p=v=>ce.lerp(e,n,ce.clamp((v-s[0])/(s[1]-s[0]),0,1));return g.slice(1).map((v,M)=>{const x=g[M],S=(x-m)/(_-m),b=(v-x)/(_-m),E=p(x),y=p(v),w=Math.max(1,Math.round(Math.abs(y-E)/.17)),A=P=>ce.lerp(E,y,P/w)+.15;return{x:h+u*S,z:f+d*S,dx:u*b,dz:d*b,length:l*b,width:t,count:w,height:A}})})}function kv(i,t,e,n){const s=new mn("#c5bdb0"),o=new mn("#a69d90");for(const{x:r,z:a,dx:l,dz:c,length:h,count:f,height:u}of Ed(t,e,n)){const d=-c*e/(2*h),m=l*e/(2*h),_=(g,p,v)=>[r+l*g+d*v,p,a+c*g+m*v];for(let g=0;g<f;g++){const p=g/f,v=(g+1)/f,M=u(g),x=u(g+1),S=_(p,M,1),b=_(p,M,-1),E=_(v,M,-1),y=_(v,M,1),w=_(v,x,-1),A=_(v,x,1);i.triangle(S,b,E,s),i.triangle(S,E,y,s),i.triangle(y,E,w,o),i.triangle(y,w,A,o)}}}function Hv(i,t){const e=i.surveyedStairs.flatMap(n=>Ed(n.points,n.width,i.stairHeight(n,t.plain)));return(n,s)=>{if(i.nearTransition(n,s)){for(const o of e){const{x:r,z:a,dx:l,dz:c,length:h,width:f,count:u,height:d}=o,m=((n-r)*l+(s-a)*c)/(h*h),_=((s-a)*l-(n-r)*c)/h;if(m>=0&&m<=1&&Math.abs(_)<f/2)return d(Math.min(u-1,Math.floor(m*u)))}for(const o of i.ramps)if($o(n,s,[o.bounds[0]-o.width,o.bounds[1]-o.width,o.bounds[2]+o.width,o.bounds[3]+o.width])&&Ye(n,s,o.points).distance<o.width/2)return i.rampHeight(o,n,s)+wd(o,i)}}}function Gv(i,t,e,n){const s=t.buildings.find(c=>c.id==="170958806");if(!e||!s)return;const[o]=fr(s.rings[0]),r=[];for(let c=1;c<e.length;c++){const[h,f]=e[c-1],[u,d]=e[c],m=u-h,_=d-f,g=Math.hypot(m,_);for(let p=.8;p<g;p+=1.42){const v=h+m*p/g,M=f+_*p/g;if(!(v<o-122||v>-161.9))for(const x of[.9,2.15,3.4]){const S=Math.sin(p*6.13+c*13.7+x)*.35,b=v+_*(x+S)/g,E=M-m*(x+S)/g,y=n(b,E);y<2.55&&t.land.some(w=>li(b,E,w))&&r.push([b,y,E,S])}}}const a=new Oi(new ys(1,0),new ie({color:"#ada79a",flatShading:!0}),r.length);a.name="Каменная отсыпка у нижней набережной";const l=new be;r.forEach(([c,h,f,u],d)=>{l.position.set(c,h-.05,f),l.scale.set(.72+u*.5,.32+u*.31,.53-u*.3),l.rotation.set(u,d*1.71,u*1.3),l.updateMatrix(),a.setMatrixAt(d,l.matrix),a.setColorAt(d,new mn().setScalar(.8+d%7*.055))}),a.receiveShadow=!0,i.add(pn(a,"stone"))}function Vv(i,t,e){const n=i.mesh("Terrain"),{position:s,normal:o}=n.geometry.attributes,r=new k0,a=3.2;for(let l=0;l<s.count;l++){if(o.getY(l)<.05)continue;const c=s.getX(l),h=s.getZ(l);if(e.waterfront.nearEdge(c,h))continue;const f=Math.floor(c/Re)*Re,u=Math.floor(h/Re)*Re;e.refines(f,u,Re)&&(r.set(t(c-a,h)-t(c+a,h),2*a,t(c,h-a)-t(c,h+a)).normalize(),o.setXYZ(l,r.x,r.y,r.z))}return o.needsUpdate=!0,n}function Cu(i,t,e,n=null){const{rings:s,height:o,id:r}=t,a=Number(String(r).match(/\d+$/)?.[0]??0)%Tu.length,l=new mn(Tu[a]),c=new mn(Uv[a]),h=Math.max(...s[0].map(([m,_])=>e(m,_))),f=h+o,u=Math.max(1,Math.round(o/3.15)),d=o/u;for(const m of yd(s))Kl(i,m,()=>f,l);for(const[m,_]of s.entries()){const p=_.reduce((v,[M,x],S)=>{const[b,E]=_[(S+1)%_.length];return v+M*E-b*x},0)>0==m>0?_:_.slice().reverse();for(let v=0;v<p.length;v++){const[M,x]=p[v],[S,b]=p[(v+1)%p.length],E=[M,e(M,x)-.2,x],y=[S,e(S,b)-.2,b],w=[S,f,b],A=[M,f,x];if(n){const P=Math.hypot(S-M,b-x),D=Math.max(1,Math.round(P/3.2)),C=P>2.2&&o>2.65?1:0,L=[0,(E[1]-h)/d,C],U=[D,(y[1]-h)/d,C],z=[D,u,C],k=[0,u,C];n.triangle(E,y,w,c,[...L,...U,...z]),n.triangle(E,w,A,c,[...L,...z,...k])}else i.triangle(E,y,w,c),i.triangle(E,w,A,c)}}}function Wv(i,t,e){if(!t.length)return;const n=new Oi(new Un(.15,.24,2.4,5),new ie({color:"#776952"}),t.length),s=new Oi(new ys(1,1),new ie({color:Ci.tree,flatShading:!0}),t.length),o=new be;t.forEach(([r,a],l)=>{const c=1.5+l*17%13*.11,h=e(r,a);o.position.set(r,h+1.2,a),o.scale.set(1,1,1),o.updateMatrix(),n.setMatrixAt(l,o.matrix),o.position.y=h+2.6+c*.35,o.scale.set(c,c*1.23,c),o.rotation.y=l*1.4,o.updateMatrix(),s.setMatrixAt(l,o.matrix),s.setColorAt(l,new mn().setScalar(.77+l*11%7*.047))}),s.castShadow=!0,s.receiveShadow=!0,i.add(pn(n,"wood",.75),pn(s,"foliage",1))}function Xv(i,t){const[e,n,s,o]=t,r={time:{value:0},evening:{value:0},sun:{value:new k0(-.6,.55,-.5).normalize()},haze:{value:new mn("#b3d5d5")},cartoonEnabled:Gc.cartoonEnabled,...m_()},a=new Tn({uniforms:r,vertexShader:`
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
      ${z0}
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
    `}),l=Math.max(s-e,o-n)*4,c=new he(new ni(l,l),a);return c.rotation.x=-Math.PI/2,c.position.set((e+s)/2,-.18,(n+o)/2),i.add(c),r}function qv(i,t,e){const n=new ed({canvas:i,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1;const s=new x0;s.fog=new Cc("#b3d5d5",900,3200),s.background=new mn("#b3d5d5");const o=rd(t),r=Fv(t,e,o),a=Xv(s,t.bounds),l=Cn(),c=new mn(Ci.land),h=Object.fromEntries(["shingle","rockLight","riprap","quay"].map(G=>[G,new mn(Ci[G])])),f=new mn;function u(G,K,rt){const ct=o.tone(G,rt,K);if(!ct)return c;const[St,Lt]=ct;return f.copy(c).lerp(h[St],Lt)}const d=t.areas.some(({id:G})=>G===du),m=d?Zx(r):null,_=fr(gs),g=(G,K)=>d&&$o(G,K,_)&&li(G,K,gs);for(const G of t.land){const K=d&&gs.every(([rt,ct])=>li(rt,ct,G))?[gs]:[];Zs(l,[G,...K],r.faceHeight,u,o,!0);for(let rt=0;rt<G.length;rt++){const[ct,St]=G[rt],[Lt,Ut]=G[(rt+1)%G.length],zt=o.refines(ct,St,Re)?Md:12,F=Math.max(1,Math.ceil(Math.hypot(Lt-ct,Ut-St)/zt));for(let te=0;te<F;te++){const Jt=[ct+(Lt-ct)*te/F,St+(Ut-St)*te/F],I=[ct+(Lt-ct)*(te+1)/F,St+(Ut-St)*(te+1)/F],T=[Jt[0],r(...Jt),Jt[1]],$=[I[0],r(...I),I[1]],tt=[Jt[0],-.4,Jt[1]],at=[I[0],-.4,I[1]];l.triangle(T,tt,$,u),l.triangle($,tt,at,u)}}}const p=Cn(),v=Cn(),M=Cn(),x={beach:.13,park:.14,plaza:.2,ruins:.22,water:.24,pier:.7};for(const G of t.areas){if(G.id===du)continue;const K=G.kind==="beach"&&(G.id==="368318892"||["pebblestone","gravel"].includes(G.surface)),rt=new mn(K?Ci.shingle:Ci[G.kind]??Ci.park),ct=(Lt,Ut,zt)=>r.faceHeight(Lt,Ut,zt)+(x[G.kind]??.14),St=G.kind==="pier"||G.kind==="plaza"?v:G.kind==="park"?M:p;Zs(St,G.rings,ct,rt,o,!0)}const S=Cn(),b=Cn(),E=Cn(),y=Cn(),w=new mn("#c7c1b7"),A=new mn("#b4ad9e"),P=[];for(const G of o.waterfront.sections){for(const K of G.upperDecks)P.push(K),Zs(y,[K],(ct,St)=>r.faceHeight(ct,St,{section:G,upper:!0})+.12,w,o);for(const K of G.lowerDecks)Zs(E,[K],(ct,St)=>r.faceHeight(ct,St,{section:G,upper:!1})+.12,A,o)}for(const G of o.allRoads){const K=o.waterfront.upperWidths[G.id]&&!(G.id in o.waterfront.rampLevels),rt=o.waterfront.lowerWidths[G.id],ct=K?y:rt?E:H0.has(G.kind)||G.kind==="pier"?b:S;zv(ct,G,r,o)}const D=Cn(),C=Cn(),L=Cn(!0),U=[Vo.west,Vo.north,Vo.east,Vo.south];for(const G of t.buildings)if(!Au.has(G.id)){if(G.id==="125813145")dx(s,G,r);else if(!Nv.some(K=>K(s,G,r))){const[K,rt,ct,St]=fr(G.rings[0]);$o((K+ct)/2,(rt+St)/2,U)?Cu(C,G,r,L):Cu(D,G,r)}}const z=D.mesh("OSM building footprints",Qn);z.castShadow=!0;const k=Ov(L.mesh("Фасады квартала",Qn)),W=pn(C.mesh("Крыши квартала",Qn),"flatRoof");if(k.castShadow=W.castShadow=!0,s.add(pn(Vv(l,r,o),"ground"),pn(p.mesh("OSM surfaces"),"ground"),pn(v.mesh("Площади и причалы"),"paving"),pn(M.mesh("Скверы"),"foliage",.65),pn(Ru(E.mesh("Плитка нижней набережной"),[.24,.22]),"laidPaving"),pn(Ru(y.mesh("Плитка верхней набережной")),"laidPaving"),pn(b.mesh("Пешеходные дорожки"),"paving",.8),pn(S.mesh("OSM streets"),"road",.8),z,W,k),d){const G=Cn();Ux(s,r,(rt,ct,St)=>Zs(G,rt,ct,St,o)),s.add(pn(G.mesh("Раскоп Горгиппии · уровни грунта"),"ground",.88));const K=Cn();m.render(s,(rt,ct,St)=>Zs(K,rt,ct,St,o)),s.add(pn(K.mesh("Горгиппия · покрытия дорожек"),"paving",.7))}Wv(s,t.trees,r),px(s,t,r),iv(s,r),Lv(s,r),V_(s,r),nx(s,r),ax(s,r),Gv(s,t,o.gorgWater,r),B_(s,o,r),E_(s,r),R_(s,r);const q=S_(s,r),J=new L0("#eefbff","#b0a48b",1.65),Q=new U0("#fff5dd",2.25),[bt,Mt,Xt,_t]=t.bounds,mt=Math.max(Xt-bt,_t-Mt)*.62;Q.target.position.set((bt+Xt)/2,0,(Mt+_t)/2),Q.castShadow=!0,Q.shadow.mapSize.set(2048,2048),Object.assign(Q.shadow.camera,{left:-mt,right:mt,top:mt,bottom:-mt,near:1,far:5300}),Q.shadow.camera.updateProjectionMatrix(),Q.shadow.normalBias=1,Q.shadow.bias=-15e-5,s.add(J,Q,Q.target);function H(G){const K=G==="sunset";q.setEnabled(K),a.evening.value=K?1:0;const rt=K?"#8993b4":"#b3d5d5";s.background.set(rt),s.fog.color.set(rt),a.haze.value.set(rt),J.color.set(K?"#becdf9":"#eefbff"),J.groundColor.set(K?"#736b86":"#b0a48b"),J.intensity=K?.73:1.65,Q.color.set(K?"#ffc18c":"#fff5dd"),Q.intensity=K?.81:2.25;const ct=K?[-.95,.23,-.44]:[-.6,1,-.5];Q.position.copy(Q.target.position).add(new k0(...ct).multiplyScalar(1800)),a.sun.value.set(...ct).normalize(),n.shadowMap.needsUpdate=!0}H("day");const N=new Map,Y=60,ut=(G,K)=>`${G}:${K}`;for(const{id:G,rings:K}of t.buildings){if(Au.has(G))continue;const[rt,ct,St,Lt]=fr(K[0]);for(let Ut=Math.floor(rt/Y);Ut<=Math.floor(St/Y);Ut++)for(let zt=Math.floor(ct/Y);zt<=Math.floor(Lt/Y);zt++){const F=ut(Ut,zt);N.has(F)||N.set(F,[]),N.get(F).push({id:G,rings:K,bounds:[rt,ct,St,Lt]})}}const st=(G,K)=>t.land.some(rt=>li(G,K,rt)),ht=t.areas.filter(G=>G.kind==="pier"),Et=Hv(o,r);function j(G,K){if(!$o(G,K,t.bounds)||!st(G,K)&&!ht.some(({rings:St})=>li(G,K,St[0]))||li(G,K,z_)||li(G,K,cd))return null;const rt=m?.walkHeight(G,K,g(G,K));return rt===null||(N.get(ut(Math.floor(G/Y),Math.floor(K/Y)))??[]).some(({id:St,rings:Lt,bounds:Ut})=>!$o(G,K,Ut)||!li(G,K,Lt[0])||o.waterfront.deckRoofs.has(St)&&P.some(zt=>li(G,K,zt))?!1:!Lt.slice(1).some(zt=>li(G,K,zt)))?null:rt??Et(G,K)??r(G,K)}return{renderer:n,scene:s,terrain:r,light:H,walkHeight:j,setCartoon:d_,walkable:(G,K)=>j(G,K)!==null,render(G,K){a.time.value=K,q.update(G),n.render(s,G)}}}const Yv=new Set(["motorway","trunk","primary","secondary","tertiary","unclassified","residential","living_street","service"]);function Zv({kind:i,access:t}){return i!=="steps"&&t?.car!==!1&&(Yv.has(i)||t?.car===!0)}function Jl(i,t,e){return(t-i.x)*i.ux+(e-i.z)*i.uz}function Pu(i,t,e){const n=Math.min(i.length,Math.max(0,Jl(i,t,e)));return(t-i.x-n*i.ux)**2+(e-i.z-n*i.uz)**2}function $v(i,t,e){return i.road.barriers?.some(n=>{if(n.car!==!1)return!1;const[s,o]=n.position;return Math.hypot(t-s,e-o)<i.radius+.7&&Math.abs((t-s)*i.ux+(e-o)*i.uz)<.65})}function Kv(i){const t=new Map,e=[],n=32,s=h=>Math.floor(h/n),o=(h,f)=>`${h}:${f}`;for(const h of i){const f=Zv(h),u=h.access?.bicycle===!1,d=h.kind==="steps"||u||h.barriers?.length;if(!f&&!d)continue;const m=h.width/2;for(let _=1;_<h.points.length;_++){const[g,p]=h.points[_-1],[v,M]=h.points[_],x=v-g,S=M-p,b=Math.hypot(x,S);if(b<.01)continue;const E={x:g,z:p,ux:x/b,uz:S/b,length:b,radius:m,road:h,car:f,bikeCheck:d};f&&e.push(E);for(let y=s(Math.min(g,v)-m);y<=s(Math.max(g,v)+m);y++)for(let w=s(Math.min(p,M)-m);w<=s(Math.max(p,M)+m);w++){const A=o(y,w);t.has(A)||t.set(A,[]),t.get(A).push(E)}}}const r=(h,f)=>t.get(o(s(h),s(f)))??[];function a(h,f){let u=null,d=1/0;for(const m of r(h,f)){if(!m.car)continue;const _=Jl(m,h,f);if(_<-.005||_>m.length+.005)continue;const g=Pu(m,h,f),p=Math.max(.4,m.radius-.45);g>p**2||g>=d||$v(m,h,f)||(d=g,u=m.road)}return u}function l(h,f){let u=!1;for(const d of r(h,f)){if(!d.bikeCheck||Pu(d,h,f)>d.radius**2)continue;const{road:m}=d;if(m.access?.bicycle===!1){if(m.access?.foot===!1)return"blocked";u=!0}m.kind==="steps"&&(u=!0);for(const _ of m.barriers??[])if(!(_.bicycle!==!1||Math.hypot(h-_.position[0],f-_.position[1])>.65)){if(_.foot===!1)return"blocked";u=!0}}return u?"push":"ride"}function c([h,f],u){let d=null,m=1/0;for(const _ of e){const g=Jl(_,h,f);for(const p of[0,-4,4,-12,12]){const v=Math.min(_.length,Math.max(0,g+p)),M=_.x+_.ux*v,x=_.z+_.uz*v,S=(M-h)**2+(x-f)**2;if(S>=m)continue;const b=u(M,x);b!==null&&(m=S,d={x:M,z:x,height:b,heading:Math.atan2(_.ux,-_.uz)})}}return d}return{carAt:a,bicycleAt:l,nearestCarStart:c}}const{MathUtils:Jv,Vector3:gc}=F0,Qv=new gc(0,1,0);function Sn(i){return new ie({color:i,flatShading:!0})}function Ue(i,t,e,n=[0,0,0]){const s=new he(t,e);return s.position.set(...n),i.add(s),s}function Pn(i,t,e,n,s){const o=new gc(...t),r=new gc(...e),a=r.clone().sub(o),l=Ue(i,new Un(n,n,a.length(),10),s);return l.position.copy(o).lerp(r,.5),l.quaternion.setFromUnitVectors(Qv,a.normalize()),l}function so(i,t,e,n){const s=new Nc(t.map(o=>new gc(...o)));return Ue(i,new Dr(s,14,e,8),n)}function Lu(i,t,e){const n=t.flat(2),s=t[0].length,o=[];for(let a=0;a<t.length-1;a++)for(let l=0;l<s-1;l++){const c=a*s+l;o.push(c,c+1,c+s,c+1,c+s+1,c+s)}const r=new Ce;return r.setAttribute("position",new se(n,3)),r.setIndex(o),r.computeVertexNormals(),Ue(i,r,e)}function jv(i){const t=Sn("#4ca9ab"),e=Sn("#283a3e"),n=Sn("#18292b"),s=Sn("#acbfc0"),o=Sn("#e5af59"),r=new fe,a=new fe;i.add(r),r.add(a),Pn(r,[0,-.3,-.27],[0,-.78,.4],.073,t),Pn(a,[0,0,.09],[0,-.3,-.25],.049,s),Pn(a,[0,-.31,-.25],[0,-.43,-.36],.066,t);for(const h of[-1,1]){const f=u=>u*h;Pn(a,[f(.066),-.34,-.27],[f(.061),-.82,-.57],.038,t),so(a,[[0,0,.09],[f(.24),.012,.11],[f(.43),.075,.18],[f(.75),.09,.25]],.033,s),Pn(a,[f(.52),.079,.2],[f(.78),.092,.26],.052,e);for(const u of[.55,.61,.67,.73,.77]){const d=.205+(u-.53)*.21;Pn(a,[f(u),.081,d],[f(u+.015),.082,d+.004],.055,n)}so(a,[[f(.48),.055,.16],[f(.54),.038,.04],[f(.69),.038,.1]],.018,s),so(a,[[f(.48),.045,.15],[f(.35),-.18,-.08],[f(.07),-.4,-.28]],.009,n)}const l=Ue(a,new gi(.35,.042,8,32),n,[0,-.82,-.57]);l.rotation.y=Math.PI/2;const c=Ue(a,new gi(.3,.014,6,32),s,[0,-.82,-.57]);return c.rotation.y=Math.PI/2,Pn(a,[-.075,-.82,-.57],[.075,-.82,-.57],.036,s),Ue(a,new Un(.062,.067,.045,16),o,[-.37,.122,.14]),Pn(a,[-.38,.115,.16],[-.45,.105,.2],.012,o),r.position.set(0,-.48,-1.5),{group:r,front:a}}function tM(i){const t=Sn("#eee1ba"),e=Sn("#9b916c"),n=Sn("#303536"),s=Sn("#b7b8ab"),o=Sn("#202526"),r=Sn("#e7dbc2"),a=Sn("#f58b63"),l=new fe,c=new fe,h=new fe;i.add(l),l.add(c,h),Lu(l,[[[-1.52,-.8,-1.12],[-.84,-.73,-1.12],[-.1,-.67,-1.12],[.66,-.68,-1.12],[1.38,-.74,-1.12],[1.98,-.82,-1.12]],[[-1.36,-.8,-2.25],[-.72,-.75,-2.25],[-.06,-.69,-2.25],[.65,-.7,-2.25],[1.32,-.76,-2.25],[1.85,-.83,-2.25]],[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[-.04,-.83,-3.28],[.65,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]]],t),so(l,[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[.3,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]],.014,e);for(const f of[-.77,1.3])so(l,[[f,-.75,-1.42],[f,-.737,-2.14],[f*.93,-.844,-3.05]],.009,e);for(const f of[-.64,.38])Pn(l,[f,-.65,-1.69],[f+.48,-.65,-1.76],.014,n),Pn(l,[f+.23,-.65,-1.72],[f+.47,-.7,-1.5],.01,s);Lu(l,[[[-1.9,-.89,-.67],[-.77,-.83,-.67],[.08,-.8,-.67],[.91,-.84,-.67],[2.05,-.89,-.67]],[[-1.92,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],[[-1.93,-.77,-1.56],[-.74,-.7,-1.56],[.07,-.67,-1.56],[.94,-.72,-1.56],[2.08,-.8,-1.56]]],n),so(l,[[-1.9,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],.018,s),Ue(l,new Ae(2.12,.14,.065),s,[.52,-.65,-1.37]),Ue(l,new Ae(.86,.24,.16),n,[-.25,-.55,-1.43]),Ue(l,new Ae(.8,.177,.019),s,[-.25,-.55,-1.337]),Ue(l,new Ae(.75,.143,.015),o,[-.25,-.55,-1.32]),Ue(l,new Ae(.44,.046,.004),r,[-.25,-.519,-1.31]);for(let f=0;f<=16;f++){const u=-.455+f*.0255,d=f%2===0?.017:.008;Ue(l,new Ae(.0035,d,.004),o,[u,-.497-d/2,-1.305])}for(const f of[-.542,.038])Ue(l,new Ae(.088,.036,.004),r,[f,-.524,-1.31]),Pn(l,[f-.026,-.536,-1.304],[f+.01,-.51,-1.304],.0027,a);for(let f=0;f<6;f++){const u=Sn(["#b44e37","#95764c","#a44536","#548159","#a58746","#5b8798"][f]);Ue(l,new Ae(.037,.018,.004),u,[-.42+f*.066,-.579,-1.308])}for(const f of[.43,.67]){Ue(l,new Ae(.17,.105,.025),o,[f,-.645,-1.316]);for(let u=0;u<4;u++)Ue(l,new Ae(.15,.007,.01),s,[f,-.676+u*.019,-1.3])}h.position.set(-.453,-.518,-1.299),Ue(h,new Ae(.008,.035,.006),a),c.position.set(-.25,-.63,-1.1),Ue(c,new gi(.295,.023,10,44),n),Ue(c,new gi(.219,.008,6,36,Math.PI),s,[0,0,.022]).rotation.z=Math.PI;for(const f of[-1,1])Pn(c,[f*.061,-.018,.01],[f*.287,.01,0],.025,n),Pn(c,[f*.073,-.015,.035],[f*.212,.003,.023],.008,s);return Ue(c,new vo(.079,24),n,[0,0,.038]),Ue(c,new gi(.033,.004,6,20),s,[0,0,.042]),Ue(c,new Ae(.034,.024,.006),Sn("#a75444"),[0,0,.044]),{group:l,wheel:c,gaugeNeedle:h}}function eM(){const i=new x0,t=new Qe(58,1,.04,10),e=new L0("#f7f7e9","#9ea8af",1.4),n=new U0("#fff2d8",2);n.position.set(-2,4,2),i.add(e,n);const s=jv(i),o=tM(i);let r=0,a="";function l(c,{mode:h,aspect:f,turn:u,speed:d,time:m,delta:_,reducedMotion:g}){if(a!==h&&(r=0,a=h),s.group.visible=h==="bike",o.group.visible=h==="car",!s.group.visible&&!o.group.visible)return;t.aspect!==f&&(t.aspect=f,t.updateProjectionMatrix()),r=g?u:Jv.damp(r,u,12,_);const p=Math.min(1,f/1.22),v=.1*(1-p);s.group.visible?(s.group.scale.x=p,s.group.position.y=-.48+v,g||(s.group.position.y+=Math.sin(m*11)*Math.min(.008,Math.abs(d)*.0015)),s.front.rotation.y=-r*.28,s.front.rotation.z=-r*.045):(o.group.scale.x=p,o.group.position.y=v,o.wheel.rotation.z=-r*.74,o.gaugeNeedle.position.x=-.453+Math.min(1,Math.abs(d)*3.6/160)*.407);const M=c.autoClear;c.autoClear=!1;try{c.clearDepth(),c.render(i,t)}finally{c.autoClear=M}}return{render:l}}function nM(i){const t=new fe;t.name="ВАЗ-2101 «Копейка»",t.visible=!1,i.add(t);const e=new cr({color:"#eee1ba",shininess:54,specular:"#a9a49b"}),n=new cr({color:"#c9cacc",shininess:90,specular:"#f2f5f4"}),s=new ie({color:"#35342f"}),o=new ie({color:"#232528"}),r=new cr({color:"#527176",shininess:68,specular:"#3b535a",side:an}),a=new ie({color:"#fff5d5",emissive:"#422d0d"}),l=new ie({color:"#ecaa38"}),c=new ie({color:"#b92d23"}),h=new ie({color:"#a53830"});function f(C,L,[U,z,k],W=t){const q=new he(C,L);return q.position.set(U,z,k),W.add(q),q}const u=(C,L,U,z,k,W,q,J)=>f(new Ae(C,L,U),q,[z,k,W],J);function d(C,L,U,z){const k=new O(...C),W=new O(...L);f(new Ae(U,U,k.distanceTo(W)),z,k.clone().add(W).multiplyScalar(.5).toArray()).lookAt(W)}function m(C){const L=new Ce;L.setAttribute("position",new se(C.flat(),3)),L.setIndex([0,1,2,0,2,3]),L.computeVertexNormals(),f(L,r,[0,0,0]),C.forEach((U,z)=>d(U,C[(z+1)%C.length],.026,n))}const _=new Fc;_.moveTo(1.99,.42),_.lineTo(1.99,.8),_.lineTo(1.75,.89),_.lineTo(.71,.92),_.lineTo(-1.14,.89),_.lineTo(-1.98,.78),_.lineTo(-1.99,.39),_.lineTo(-1.62,.33);for(const C of[-1.212,1.212]){_.lineTo(C-.353,.29);for(let L=1;L<=12;L++){const U=Math.PI-L*Math.PI/12;_.lineTo(C+Math.cos(U)*.353,.29+Math.sin(U)*.337)}}_.lineTo(1.99,.42);const g=f(new Lr(_,{depth:1.49,bevelSize:.035,bevelThickness:.045,bevelSegments:2,steps:1}),e,[-.745,0,0]);g.rotation.y=Math.PI/2;const p=[-.724,.924,-.75],v=[.724,.924,-.75],M=[-.723,.891,1.13],x=[.723,.891,1.13],S=[-.609,1.414,-.43],b=[.609,1.414,-.43],E=[-.609,1.414,.72],y=[.609,1.414,.72];m([p,v,b,S]),m([x,M,E,y]),m([M,p,S,E]),m([v,x,y,b]),u(1.25,.047,1.2,0,1.423,.145,e);for(const C of[-1,1]){d([C*.72,.915,.16],[C*.618,1.41,.16],.044,e),d([C*.782,.688,-1.83],[C*.782,.688,1.83],.017,n);for(const L of[-.53,.39,1.12])d([C*.783,.426,L],[C*.783,.88,L],.009,s);for(const L of[.035,.91])u(.032,.033,.139,C*.791,.793,L,n);d([C*.74,.925,-1.23],[C*.84,1.021,-1.23],.024,n),C<0&&u(.148,.069,.061,-.846,1.037,-1.23,n),d([C*.6,.935,-.8],[C*.62,.855,-1.92],.013,n)}u(1.44,.228,.035,0,.704,-2.002,n),u(1.38,.192,.023,0,.704,-2.023,s);for(let C=0;C<6;C++)u(1.35,.008,.019,0,.627+C*.03,-2.039,n);u(.085,.09,.022,0,.704,-2.053,h);for(const C of[-1,1]){const L=C*.556;f(new Un(.136,.136,.038,24),n,[L,.712,-2.036]).rotation.x=Math.PI/2,f(new Un(.113,.113,.035,24),a,[L,.712,-2.057]).rotation.x=Math.PI/2,u(.173,.061,.028,L,.528,-2.023,l),u(.234,.128,.035,L,.669,2.014,n),u(.208,.101,.029,L,.669,2.037,c),u(.068,.097,.035,L+C*.066,.669,2.051,l);for(const U of[-2.058,2.047])u(.072,.133,.092,C*.457,.392,U,s)}u(1.62,.079,.112,0,.394,-2.054,n),u(1.62,.079,.112,0,.394,2.043,n),u(.3,.103,.028,0,.535,2.035,s),u(.26,.065,.012,0,.535,2.052,n),d([-.48,.93,-.759],[-.16,.955,-.745],.016,s),d([.12,.93,-.759],[.45,.955,-.745],.016,s);const w=[];for(const C of[-1.212,1.212])for(const L of[-1,1]){const U=new fe;U.position.set(L*.69,.288,C),t.add(U);const z=new fe;U.add(z);const k=(W,q,J,Q)=>f(new Un(W,W,q,20),Q,[J,0,0],z).rotation.z=Math.PI/2;k(.289,.198,0,o),k(.207,.024,L*.101,e),k(.135,.027,L*.123,n),k(.054,.029,L*.142,s),w.push({pivot:U,wheel:z,steer:C<0})}const A=f(new vo(1,28),new Vn({color:"#263137",transparent:!0,opacity:.24,depthWrite:!1}),[0,.031,0]);A.rotation.x=-Math.PI/2,A.scale.set(.96,2.08,1);const P=new Qe(49,1,.22,4800),D=new O;return{cameraFor(C,{active:L,yaw:U,speed:z,turn:k,delta:W,terrain:q,angle:J,height:Q,distance:bt}){if(t.visible=L,!L)return C;const Mt=C.position.y-1.45;t.position.set(C.position.x,Mt,C.position.z),t.rotation.y=-U;for(const{pivot:_t,wheel:mt,steer:H}of w)H&&(_t.rotation.y=-k*.3),mt.rotation.x-=z*W/.289;t.updateMatrixWorld(!0);const Xt=bt*Math.max(1,.72/C.aspect);return t.localToWorld(P.position.set(Math.sin(J)*Xt,Q,Math.cos(J)*Xt)),P.position.y=Math.max(P.position.y,q(P.position.x,P.position.z)+1.8),P.lookAt(t.localToWorld(D.set(0,.83,-Math.max(0,Math.cos(J))*1.1))),P.aspect!==C.aspect&&(P.aspect=C.aspect,P.updateProjectionMatrix()),P}}}const iM=new O(0,1,0),Pl=new O,_a=new O;function On(i,t,e,n=[0,0,0]){const s=new he(t,e);return s.position.set(...n),i.add(s),s}function Ko(i,t,e){Pl.set(...t),_a.set(...e).sub(Pl),i.position.copy(Pl).addScaledVector(_a,.5),i.scale.y=_a.length(),i.quaternion.setFromUnitVectors(iM,_a.normalize())}function He(i,t,e,n,s){const o=On(i,new Un(n,n,1,8),s);return Ko(o,t,e),o}function sM(i){const t=new fe;t.name="Велосипед с велосипедистом",t.visible=!1,i.add(t);const e=W=>new ie({color:W,flatShading:!0}),n=e("#4ca9ab"),s=e("#1d2b2c"),o=e("#b4c1b8"),r=e("#3b4240"),a=e("#eee1ba"),l=e("#415760"),c=e("#cd9478"),h=e("#e5af59"),f=[0,.345,.54],u=[0,.92,-.38],d=[0,.39,.055],m=[0,.94,.21],_=new fe;_.position.set(...u),t.add(_);const g=.321;function p(W,q){const J=new fe;J.position.set(...q),W.add(J),On(J,new gi(g,.024,8,36),s).rotation.y=Math.PI/2,On(J,new gi(.297,.008,6,36),o).rotation.y=Math.PI/2,He(J,[-.047,0,0],[.047,0,0],.017,o);for(let Q=0;Q<14;Q++){const bt=Q*Math.PI/7;He(J,[Q%2?.025:-.025,0,0],[0,Math.sin(bt)*.295,Math.cos(bt)*.295],.0026,o)}return J}const v=p(t,f),M=p(_,[0,-.575,-.17]);He(t,d,m,.027,n),He(t,d,[0,.78,-.36],.029,n),He(t,[0,.85,.195],[0,.86,-.37],.023,n),He(t,[0,.77,-.36],u,.036,n);for(const W of[-1,1]){const q=[W*.046,f[1],f[2]];He(t,[W*.033,.8,.19],q,.012,n),He(t,[W*.036,d[1],d[2]],q,.015,n),He(_,[W*.036,-.15,.026],[W*.043,-.575,-.17],.016,n),He(_,[0,.095,.042],[W*.34,.125,.13],.014,o),He(_,[W*.26,.119,.112],[W*.36,.13,.134],.022,s)}He(_,[0,0,0],[0,.095,.042],.022,o),On(_,new Un(.028,.031,.025,12),h,[-.23,.146,.103]),On(t,new yn(1,12,8),r,[0,.95,.208]).scale.set(.082,.022,.123),He(t,[-.12,d[1],d[2]],[.12,d[1],d[2]],.015,o);const S=[0,1.34,-.074],b=[0,.96,.22],E=On(t,new yn(1,12,8),a,[0,1.16,.065]);E.scale.set(.16,.232,.118),E.rotation.x=-.63,On(t,new yn(1,12,8),l,b).scale.set(.138,.085,.104),He(t,[0,1.31,-.087],[0,1.45,-.169],.059,c),On(t,new yn(.093,12,8),c,[0,1.49,-.167]).scale.y=1.11,On(t,new yn(1,14,9),h,[0,1.554,-.178]).scale.set(.113,.075,.121),On(t,new yn(1,12,8),r,[0,1.541,-.271]).scale.set(.093,.017,.041);const P=[-1,1].map(W=>{const q=[W*.118,S[1],S[2]],J=[W*.225,1.17,-.16],Q=[W*.31,1.05,-.25],bt=[W*.095,b[1],b[2]],Mt=[W*.14,.71,-.21],Xt=[W*.12,d[1],d[2]];return{side:W,elbow:J,forearm:He(t,J,Q,.031,c),sleeve:He(t,q,J,.045,a),thigh:He(t,bt,Mt,.057,l),shin:He(t,Mt,Xt,.041,l),crankArm:He(t,[W*.085,d[1],d[2]],Xt,.012,o),shoe:On(t,new Ae(.084,.058,.163),r,Xt)}}),D=On(t,new vo(1,22),new Vn({color:"#203138",transparent:!0,opacity:.16,depthWrite:!1}),[0,.027,0]);D.rotation.x=-Math.PI/2,D.scale.set(.245,.87,1);const C=new Qe(52,1,.18,4800),L=new O,U=new O;let z=0,k=0;return{cameraFor(W,{active:q,yaw:J,speed:Q,turn:bt,delta:Mt,terrain:Xt,angle:_t,height:mt,distance:H}){if(t.visible=q,!q)return W;t.position.set(W.position.x,W.position.y-1.65+.12,W.position.z),t.rotation.y=-J,_.rotation.y=-bt*.34,_.updateMatrix();const N=Q*Mt/(g+.024);z=(z-N)%(Math.PI*2),k=(k-N*.4)%(Math.PI*2),v.rotation.x=M.rotation.x=z;for(const{side:ut,elbow:st,forearm:ht,thigh:Et,shin:j,crankArm:G,shoe:K}of P){U.set(ut*.316,.125,.126).applyMatrix4(_.matrix),Ko(ht,st,U.toArray());const rt=k+(ut>0?Math.PI:0),ct=[ut*.123,d[1]+.143*Math.cos(rt),d[2]+.143*Math.sin(rt)],St=[ut*.143,.68+.078*Math.cos(rt),-.216+.035*Math.sin(rt)];Ko(Et,[ut*.095,b[1],b[2]],St),Ko(j,St,ct),Ko(G,[ut*.085,d[1],d[2]],ct),K.position.set(ct[0],ct[1]+.018,ct[2]-.038)}t.updateMatrixWorld(!0);const Y=H*.59*Math.max(1,.62/W.aspect);return t.localToWorld(C.position.set(Math.sin(_t)*Y,mt*.68,Math.cos(_t)*Y)),C.position.y=Math.max(C.position.y,Xt(C.position.x,C.position.z)+1.4),C.lookAt(t.localToWorld(L.set(0,.8,-Math.max(0,Math.cos(_t))*.52))),C.aspect!==W.aspect&&(C.aspect=W.aspect,C.updateProjectionMatrix()),C}}}const $i=document.querySelector("#world"),Du=document.querySelector("#status"),Jo=i=>[...document.querySelectorAll(`[data-${i}]`)].filter(t=>t instanceof HTMLButtonElement),Iu=(i,t)=>{for(const e of Jo(i))e.setAttribute("aria-pressed",String(e.dataset[i]===t))};async function Uu(i){const t=await fetch(`./data/${i}.json`);if(!t.ok)throw new Error(`Не удалось загрузить ${i} (${t.status}).`);return t.json()}function oM(i,t){const{Vector3:e,MathUtils:n}=F0,s=qv($i,i,t),o=Kv(i.roads),r=eM(),a=nM(s.scene),l=sM(s.scene),c=new Qe(46,1,.35,4800),h=new V3(c,$i),f=matchMedia("(prefers-reduced-motion: reduce)").matches;h.enableDamping=!f,h.dampingFactor=.13,h.minDistance=28,h.maxDistance=3300,h.maxPolarAngle=Math.PI*.48,h.zoomSpeed=.8,h.screenSpacePanning=!1;const[u,d,m,_]=i.bounds,[g,p]=i.origin,[v,M]=i.scale,x=document.querySelector("#compass"),S=document.querySelector("#coordinates"),b=document.querySelector("#vehicle-speed"),E=document.querySelector("#cartoon-style"),y=document.querySelector("#vehicle-view"),w=document.querySelector("#mode-help"),A=document.querySelector("#places"),P=document.querySelector("#venues"),D=document.querySelector("#pins"),C={orbit:"Стрелки или WASD — лететь. Тяните, чтобы повернуть карту. Колесо — масштаб.",walk:"WASD или стрелки — идти. Shift — бег. Тяните по сцене, чтобы оглянуться.",bike:"Стрелки или WASD — движение и руль. V — сменить камеру. На лестнице — пешком.",car:"↑/↓ или W/S — газ и задний ход. ←/→ или A/D — руль. V — сменить камеру.",map:"Север вверху. Тяните карту, чтобы сдвинуть её."},L={walk:{eye:1.75,fov:68},bike:{eye:1.65,fov:70,speed:6.8,reverse:2.2,steer:1.9},car:{eye:1.45,fov:73,speed:10.5,reverse:3.1,steer:1.6}},U={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},z=[{id:"paintedWaterfront",name:"Парк-отель — Анапа-Океан",position:[-376,-15],walk:{position:[-348,-36],look:[-278,-43]}},{id:"upperWaterfront",name:"Верхняя набережная",position:[-348,-13],walk:{position:[-349,-19.4],look:[-265,-22]}},{id:"lowerWaterfront",name:"Нижняя набережная",position:[-348,-36],look:[-278,-43]},{id:"queuePavilion",name:"Павильон «Очередь»",position:[-412.5,-21.7],walk:{position:[-414,-12],look:[-412,-21.7]}},{id:"pearlFountain",name:"Жемчужина Анапы",position:[-238,2],walk:{position:[-255,-5],look:[-238,2]}},{id:"gorgMuseum",name:"Музей «Горгиппия»",position:[-282,17],walk:{position:[-282,9],look:[-282,17],pitch:.17}},{id:"oldAnapa",name:"Старинная Анапа",position:[-532,-18.5],walk:{position:[-532,-26.4],look:[-531.7,-18.4],pitch:.13}}],W=["paintedWaterfront","lighthouse","malaya","port","ocean","oldAnapa","upperWaterfront","lowerWaterfront","queuePavilion","gorgippia","gorgMuseum","parkHotel","sails","pearlFountain","gates","beach"].map(B=>{const et=i.landmarks.find(Nt=>Nt.id===B)??z.find(Nt=>Nt.id===B);if(B==="parkHotel")return{...et,walk:{position:[-167,-27],look:[-169,-7.5],pitch:.58}};if(B==="ocean")return{...et,walk:{position:[-598,-33],look:[-589.7,-16],pitch:.12}};if(et?.id!=="sails")return et;const[Z,gt]=eo,ft=p-gt/M,Ot=g+Z/v;return{...et,position:eo,pinHeight:5.85,walk:{position:[-306,-22],look:eo},osm:`https://www.openstreetmap.org/#map=19/${ft.toFixed(6)}/${Ot.toFixed(6)}`}}).filter(Boolean),q={lighthouse:{aim:[-9,0],offset:[-146,115,102]},malaya:{aim:[-34,35],offset:[-219,151,-43]},ocean:{aim:[7,-6],offset:[-93,103,-176],raise:14},oldAnapa:{aim:[0,0],offset:[-17,15,-33],raise:3,mapAltitude:65},paintedWaterfront:{aim:[0,0],offset:[-55,240,-290],mapAltitude:465},upperWaterfront:{aim:[12,-10],offset:[-58,100,-155],mapAltitude:275},lowerWaterfront:{aim:[12,4],offset:[6,58,-118],mapAltitude:220},queuePavilion:{aim:[0,0],offset:[14,24,-46],mapAltitude:65},pearlFountain:{aim:[0,0],offset:[-11,16,-30],mapAltitude:52},gorgippia:{aim:[40,3],offset:[-13,94,-79],mapAltitude:127},gorgMuseum:{aim:[0,0],offset:[5,16,-28],mapAltitude:46},parkHotel:{aim:[-5,-6],offset:[-97,91,-155],raise:6},sails:{aim:[15,-1],offset:[13,31,-49],mapAltitude:69}},J={"Верхний ярус":[{id:"laVeranda",name:"La Veranda",position:[-619.4,-18.48],walk:{position:[-627,-25],look:[-619.4,-18.48],pitch:.13}},{...z.find(B=>B.id==="queuePavilion"),id:"queueCafe",name:"Queue"},{id:"more",name:"Море. Истории о еде",position:[-533,-25],walk:{position:[-533,-35],look:[-533,-25],pitch:.08}},{id:"barBQ",name:"BAR BQ",position:[-456.65,14],walk:{position:[-450,14],look:[-456.65,14],pitch:.08}}],"Нижний ярус":[{id:"captainCafe",name:"Капитан",position:[-530,-67],walk:{position:[-534.4,-79.5],look:[-530,-67],pitch:.15}},{id:"adrian",name:"Adrian Bistro",position:[-358,-30.5],walk:{position:[-359.7,-37.4],look:[-358,-30.5],pitch:.1}},{id:"bavaria",name:"Bavaria",position:[-342.2,-30.9],walk:{position:[-340,-38.1],look:[-342.2,-30.9],pitch:.13}},{id:"prichal",name:"Причал",position:[-303,-34.35],walk:{position:[-302,-40.2],look:[-303,-34.35],pitch:.2}},{id:"khinkal",name:"Хинкальная",position:[-267.5,-38.45],walk:{position:[-267.5,-44.35],look:[-267.5,-38.45],pitch:.18}},{id:"parokhod",name:"Пароходъ",position:[-229.8,-52.4],walk:{position:[-232.74,-59.75],look:[-229.8,-52.4],pitch:.34}},{id:"wineSea",name:"Вино и море",position:[-175,-54],walk:{position:[-184,-48],look:[-175,-54],pitch:.2}}]};q.queueCafe=q.queuePavilion,q.more={aim:[0,0],offset:[-13,17,-34],raise:1.3,mapAltitude:67},q.laVeranda={aim:[0,0],offset:[-12,16,-28],raise:2,mapAltitude:52},q.barBQ={aim:[0,0],offset:[25,11,-14],raise:1.3,mapAltitude:58};for(const B of J["Нижний ярус"])q[B.id]={aim:[0,0],offset:[-9,12,-32],raise:1.8,mapAltitude:60};q.wineSea.offset=[-27,13,-12];const Q=i.landmarks.find(B=>B.id==="gorgippia")?.position??[(u+m)/2,(d+_)/2],bt=i.landmarks.find(B=>B.id==="lighthouse")?.position??Q,Mt=new e,Xt=new e,_t=new e,mt=new e,H=new Set,N=new Map,Y=new Set,ut=new Map,st=[];let ht="orbit",Et=null,j=0,G=0,K=0,rt=0;const ct=new Set,St=()=>ct.has(ht);let Lt=-.43,Ut=2.8,zt=5.9,F=null,te="";function Jt(B,et){const Z=(p-et/M).toFixed(5),gt=(g+B/v).toFixed(5),ft=`${Z}/${gt}`;ft!==te&&(te=ft,S.textContent=`${Z}° N  ${gt}° E`,S.href=`https://www.openstreetmap.org/#map=18/${ft}`,S.title="Показать эту точку в OpenStreetMap")}function I(B,et=!1){const Z=et?q[Et?.id]:void 0,gt=ht==="orbit"||Z?.mapAltitude?Z:void 0,ft=B[0]+(gt?.aim[0]??0),Ot=B[1]+(gt?.aim[1]??0),Nt=s.terrain(ft,Ot)+(gt?.raise??0);if(h.target.set(ft,Nt,Ot),ht==="map"){const Kt=(gt?.mapAltitude??(et?440:1220))/Math.min(1,c.aspect*(gt?.mapAltitude?.7:1.2));c.position.set(ft,Nt+Math.min(3200,Kt),Ot+.1)}else{const Kt=1/Math.min(1,c.aspect*(gt?.mapAltitude?.67:1.4)),[oe,xe,Ie]=gt?.offset??(et?[-148,150,-209]:[-345,350,-485]);c.position.set(ft+oe*Kt,Nt+xe*Kt,Ot+Ie*Kt)}h.update()}function T(B,et){if(ht==="bike"&&o.bicycleAt(B,et)==="blocked")return null;const Z=ht==="car"?o.carAt(B,et):null;if(ht==="car"&&!Z)return null;const gt=s.walkHeight(B,et);return gt===null||!Z?gt:gt+(Z.bridge?.85:.31)}function $([B,et],Z){let gt=null,ft=1/0;const Ot=s.terrain(B,et);for(const{points:Nt,kind:Kt}of i.roads)if(["footway","pedestrian","path","living_street","steps"].includes(Kt))for(let oe=1;oe<Nt.length;oe++){const[xe,Ie]=Nt[oe-1],[vn,tn]=Nt[oe],zi=vn-xe,as=tn-Ie,bs=zi*zi+as*as;if(bs<.01||Z&&Kt!=="pedestrian")continue;const Mi=((B-xe)*zi+(et-Ie)*as)/bs,yo=Math.sqrt(bs);for(const Ir of Z?[-42,-30,30,42]:[0,-8,8]){const bo=n.clamp(Mi+Ir/yo,0,1),Wn=xe+zi*bo,Si=Ie+as*bo,si=Math.hypot(Wn-B,Si-et);if(si<(Z?24:5)||si>90)continue;const wo=si+(Z?4*Math.abs(s.terrain(Wn,Si)-Ot):0);wo>=ft||T(Wn,Si)!==null&&(Z&&![4,10,18].every(Eo=>T(Wn+(B-Wn)*Eo/si,Si+(et-Si)*Eo/si)!==null)||(ft=wo,gt=[Wn,Si]))}}return gt}function tt(B,et){const[Z,gt]=et?.look??B;let ft=et&&T(...et.position)!==null?et.position:null;ft??=$(B,B===bt)??$(B,!1);for(let Nt=4;!ft&&Nt<=96;Nt+=4)for(let Kt=0;!ft&&Kt<Math.PI*2;Kt+=Math.PI/8){const oe=Z+Math.cos(Kt)*Nt,xe=gt+Math.sin(Kt)*Nt;T(oe,xe)!==null&&(ft=[oe,xe])}if(!ft)return!1;c.position.set(ft[0],T(...ft)+L[ht].eye,ft[1]),j=Math.atan2(Z-ft[0],ft[1]-gt);const Ot=s.terrain(Z,gt)+(B===bt?9:1.6);return G=et?.pitch??n.clamp(Math.atan2(Ot-c.position.y,Math.hypot(Z-ft[0],gt-ft[1])),-.22,.32),!0}function at(B){const et=o.nearestCarStart(B,T);if(!et)return!1;const{x:Z,z:gt,height:ft,heading:Ot}=et;j=Ot+(Math.cos(j-Ot)<0?Math.PI:0);const Nt=tn=>T(Z+Math.sin(j)*tn,gt-Math.cos(j)*tn),Kt=tn=>[1.5,3,5].find(zi=>Nt(zi*tn)===null)??6;Kt(-1)>Kt(1)&&(j+=Math.PI);const oe=2.04,xe=Math.sin(j)*oe,Ie=-Math.cos(j)*oe,vn=T(Z+xe,gt+Ie);return G=0,T(Z-xe,gt-Ie)===null&&vn!==null?c.position.set(Z+xe,vn+L.car.eye,gt+Ie):c.position.set(Z,ft+L.car.eye,gt),!0}function yt(B){Et=B,K=0;for(const[et,Z]of ut)Z.setAttribute("aria-pressed",String(et===B?.id));for(const{marker:et,place:Z}of st)et.classList.toggle("selected",Z===B);if(ht==="car")at(B?.position??Q);else if(L[ht]){const et=B?.id==="gorgippia"?Fx:B?.walk??(B?.look?B:null);tt(B?.position??bt,et)||tt(bt)}else I(B?.position??Q,!!B)}function wt(B){const et=L[ht]?[c.position.x,c.position.z]:null;if(ht=B,F=null,K=0,H.clear(),N.clear(),Y.clear(),h.enabled=!L[B],h.enableRotate=B==="orbit",h.mouseButtons.LEFT=B==="map"?Ui.PAN:Ui.ROTATE,h.touches.ONE=B==="map"?fi.PAN:fi.ROTATE,h.touches.TWO=fi.DOLLY_PAN,h.minPolarAngle=0,h.maxPolarAngle=B==="map"?1e-4:Math.PI*.48,c.fov=L[B]?.fov??46,c.updateProjectionMatrix(),document.body.dataset.mode=B,b.hidden=B!=="bike"&&B!=="car",lt(),Iu("mode",B),et&&L[B]){if(B==="car"&&at(et))return;const Z=T(...et);if(Z!==null){c.position.y=Z+L[B].eye;return}}yt(Et)}W.forEach((B,et)=>{const Z=document.createElement("button");Z.type="button",Z.className="place",Z.setAttribute("aria-pressed","false");const gt=document.createElement("span");gt.className="place-index",gt.textContent=String(et+1).padStart(2,"0"),gt.setAttribute("aria-hidden","true");const ft=document.createElement("span");if(ft.className="place-name",ft.textContent=B.name,Z.append(gt,ft),Z.addEventListener("click",()=>yt(B)),A.append(Z),ut.set(B.id,Z),!B.osm)return;const Ot=document.createElement("a");Ot.className="map-pin",Ot.href=B.osm,Ot.target="_blank",Ot.rel="noopener noreferrer",Ot.setAttribute("aria-label",`${B.name} в OpenStreetMap`),Ot.title=`${B.name} в OpenStreetMap`;const Nt=document.createElement("span");Nt.textContent=gt.textContent;const Kt=document.createElement("strong");Kt.textContent=B.name,Ot.append(Nt,Kt),D.append(Ot),st.push({marker:Ot,place:B})});for(const[B,et]of Object.entries(J)){const Z=document.createElement("h3");Z.textContent=B,P.append(Z);for(const gt of et){const ft=document.createElement("button");ft.type="button",ft.className="place",ft.setAttribute("aria-pressed","false"),ft.textContent=gt.name,ft.addEventListener("click",()=>yt(gt)),P.append(ft),ut.set(gt.id,ft)}}for(const B of Jo("mode"))B.addEventListener("click",()=>wt(B.dataset.mode));E.addEventListener("click",()=>{const B=E.getAttribute("aria-pressed")!=="true";E.setAttribute("aria-pressed",String(B)),s.setCartoon(B)});function lt(){y.hidden=ht!=="bike"&&ht!=="car",y.setAttribute("aria-pressed",String(St())),y.textContent=St()?ht==="car"?"Камера из салона":"Камера от первого лица":"Камера снаружи",w.textContent=St()?"Стрелки или WASD — езда. Тяните по сцене, чтобы повернуть камеру. V — вид от первого лица.":C[ht]}function pt(){St()?ct.delete(ht):ct.add(ht),lt()}y.addEventListener("click",pt);function Tt(B){Iu("light",B),s.light(B)}for(const B of Jo("light"))B.addEventListener("click",()=>Tt(B.dataset.light));for(const B of Jo("action"))B.addEventListener("click",()=>{const et=B.dataset.action;if(et==="reset"){yt(W.find(ft=>ft.id==="paintedWaterfront"));return}const Z=et==="zoom-in";if(St()){zt=n.clamp(zt+(Z?-1:1),3.8,9);return}if(L[ht]){c.fov=n.clamp(c.fov+(Z?-8:8),42,82),c.updateProjectionMatrix();return}Mt.copy(c.position).sub(h.target);const gt=n.clamp(Mt.length()*(Z?.75:1.33),h.minDistance,h.maxDistance);c.position.copy(h.target).add(Mt.setLength(gt)),h.update()});for(const B of Jo("move")){const et=B.dataset.move;B.addEventListener("pointerdown",Z=>{B.setPointerCapture(Z.pointerId),N.set(Z.pointerId,et)});for(const Z of["pointerup","pointercancel","lostpointercapture"])B.addEventListener(Z,gt=>N.delete(gt.pointerId));B.addEventListener("click",Z=>{Z.detail===0&&Y.add(et)})}$i.addEventListener("pointerdown",B=>{!L[ht]||F!==null||(F={id:B.pointerId,x:B.clientX,y:B.clientY},$i.setPointerCapture(F.id))}),$i.addEventListener("pointermove",B=>{if(B.pointerId!==F?.id)return;const et=B.clientX-F.x,Z=B.clientY-F.y;St()?(Lt-=et*.009,Ut=n.clamp(Ut+Z*.018,1.55,6)):(j+=et*.003,G=n.clamp(G-Z*.003,-1.33,1.33)),F.x=B.clientX,F.y=B.clientY});for(const B of["pointerup","pointercancel","lostpointercapture"])$i.addEventListener(B,et=>{F?.id===et.pointerId&&(F=null)});window.addEventListener("keydown",B=>{const et=U[B.code],Z=ht==="walk"&&(B.code==="ShiftLeft"||B.code==="ShiftRight"),gt=(ht==="car"||ht==="bike")&&B.code==="KeyV";if(!(ht==="map"||!et&&!Z&&!gt||B.defaultPrevented||B.isComposing||B.altKey||B.ctrlKey||B.metaKey)&&!(B.target instanceof HTMLElement&&(B.target.isContentEditable||B.target.matches("input, select, textarea")))){if(gt){B.preventDefault(),B.repeat||pt();return}H.add(B.code),et&&(B.preventDefault(),B.repeat||Y.add(et))}}),window.addEventListener("keyup",B=>H.delete(B.code)),window.addEventListener("blur",()=>{H.clear(),N.clear(),Y.clear(),K=0,F=null});function Gt(){const B=Math.max(1,$i.clientWidth),et=Math.max(1,$i.clientHeight);s.renderer.setSize(B,et,!1),c.aspect=B/et,c.updateProjectionMatrix()}function Ct(){const B=new Set(Y);for(const et of H)U[et]&&B.add(U[et]);for(const et of N.values())B.add(et);return[Number(B.has("forward"))-Number(B.has("back")),Number(B.has("right"))-Number(B.has("left"))]}function At(B,et,Z,gt){const ft=c.position,Ot=ht==="car"?.65:.4,Nt=Math.max(1,Math.ceil(Math.hypot(B,et)/.15));function Kt(oe,xe){const Ie=T(oe,xe);return Ie===null||Math.abs(Ie-Z)>Ot?!1:(ft.x=oe,ft.z=xe,Z=Ie,!0)}for(let oe=0;oe<Nt;oe++)if(gt)Kt(ft.x+B/Nt,ft.z),Kt(ft.x,ft.z+et/Nt);else if(!Kt(ft.x+B/Nt,ft.z+et/Nt)){K=0;break}return Z}function Vt(B){const[et,Z]=Ct();rt=Z;const gt=c.position,ft=L[ht];let Ot=T(gt.x,gt.z);if(ht==="walk"&&(et||Z)){const Nt=H.has("ShiftLeft")||H.has("ShiftRight"),oe=(Y.size?.46:(Nt?7.8:4.8)*B)/Math.hypot(Z,et),xe=(Math.sin(j)*et+Math.cos(j)*Z)*oe,Ie=(-Math.cos(j)*et+Math.sin(j)*Z)*oe;Ot=At(xe,Ie,Ot,!0)}else if(ht!=="walk"){const Nt=ht==="bike"&&o.bicycleAt(gt.x,gt.z)==="push",Kt=Nt?2:ft.speed,oe=et*(et<0?Math.min(Kt,ft.reverse):Kt),xe=Y.size?Math.max(B,.06):B;K=n.clamp(n.damp(K,oe,oe===0?12:5,xe),-Kt,Kt);const Ie=K<-.1;j+=Z*ft.steer*xe*(Ie?-1:1);const vn=K*xe;Math.abs(vn)>1e-4&&(Ot=At(Math.sin(j)*vn,-Math.cos(j)*vn,Ot,Nt));const tn=`${Math.round(Math.abs(K)*3.6)} км/ч${Nt?" · пешком":""}`;b.textContent!==tn&&(b.textContent=tn)}Ot!==null&&(gt.y=n.damp(gt.y,Ot+ft.eye,18,B)),Xt.set(Math.sin(j)*Math.cos(G),Math.sin(G),-Math.cos(j)*Math.cos(G)),c.lookAt(Xt.add(c.position))}function Yt(B){h.update();let{x:et,z:Z}=h.target;if(ht==="orbit"&&(H.size||Y.size||N.size)){const[gt,ft]=Ct(),Ot=Math.hypot(gt,ft);if(Ot){const Kt=n.clamp(c.position.distanceTo(h.target)*.38,12,180)*(Y.size?Math.max(B,.08):B)/Ot;Mt.copy(h.target).sub(c.position).setY(0).normalize(),et+=(Mt.x*gt-Mt.z*ft)*Kt,Z+=(Mt.z*gt+Mt.x*ft)*Kt}}et=n.clamp(et,u,m),Z=n.clamp(Z,d,_),c.position.x+=et-h.target.x,c.position.z+=Z-h.target.z,h.target.x=et,h.target.z=Z}Gt(),window.addEventListener("resize",Gt),wt("orbit");const $t=new URLSearchParams(window.location.search),X=[...W,...Object.values(J).flat()];yt(X.find(B=>B.id===$t.get("place"))??W[0]);const Rt=$t.get("mode");["map","walk","bike","car"].includes(Rt)&&wt(Rt),$t.get("light")==="sunset"&&Tt("sunset"),$t.get("camera")==="outside"&&(ht==="bike"||ht==="car")&&pt();let dt=performance.now();s.renderer.setAnimationLoop(B=>{const et=Math.min((B-dt)/1e3,.05);dt=B,L[ht]?Vt(et):Yt(et),Y.clear(),c.getWorldDirection(_t);const Z=ht==="map"?0:-Math.atan2(_t.x,-_t.z);x.style.setProperty("--north",`${Z}rad`);const gt=L[ht]?c.position:h.target;Jt(gt.x,gt.z);for(const{marker:xe,place:Ie}of st){const[vn,tn]=Ie.position;mt.set(vn,s.terrain(vn,tn)+(Ie.pinHeight??1.2),tn).project(c),xe.hidden=!!L[ht]||mt.z<-1||mt.z>1||Math.abs(mt.x)>.97||Math.abs(mt.y)>.92,xe.hidden||(xe.style.left=`${(mt.x+1)*50}%`,xe.style.top=`${(1-mt.y)*50}%`)}const ft=f?0:B/1e3,Ot=St(),Nt={yaw:j,speed:K,turn:rt,delta:et,terrain:s.terrain,angle:Lt,height:Ut,distance:zt},Kt=a.cameraFor(c,{...Nt,active:ht==="car"&&Ot}),oe=l.cameraFor(Kt,{...Nt,active:ht==="bike"&&Ot});s.render(oe,ft),r.render(s.renderer,{mode:Ot?"":ht,aspect:c.aspect,turn:rt,speed:K,time:ft,delta:et,reducedMotion:f})})}let Nu="Не удалось загрузить данные Анапы. Перезагрузите страницу.";try{const[i,t]=await Promise.all([Uu("anapa"),Uu("elevation")]);i.scale??=[111320*Math.cos(ce.degToRad(i.origin[1])),111132],Nu="Не удалось открыть 3D-карту. Проверьте, доступен ли WebGL 2, и перезагрузите страницу.",oM(i,t),Du.hidden=!0}catch(i){console.error(i),Du.textContent=Nu}
