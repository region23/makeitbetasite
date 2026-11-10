(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Sc="186",Fi={ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zu=0,Il=1,ku=2,Jo=1,Hu=2,to=3,ei=0,fn=1,hn=2,gi=0,no=1,ho=2,Ul=3,Nl=4,Gu=5,xs=100,Vu=101,Wu=102,Xu=103,qu=104,Yu=200,Zu=201,$u=202,Ku=203,t0=204,e0=205,Ju=206,Qu=207,ju=208,tf=209,ef=210,nf=211,sf=212,of=213,rf=214,La=0,Da=1,Ia=2,uo=3,Ua=4,Na=5,Fa=6,Oa=7,Rr=0,af=1,cf=2,ni=0,n0=1,i0=2,s0=3,o0=4,r0=5,a0=6,c0=7,l0=300,os=301,bs=302,Qo=303,Sa=304,Cr=306,fr=1e3,mi=1001,fo=1002,Ke=1003,lf=1004,zo=1005,en=1006,ya=1007,ts=1008,Tn=1009,h0=1010,u0=1011,po=1012,yc=1013,ii=1014,Vn=1015,si=1016,bc=1017,wc=1018,mo=1020,f0=35902,d0=35899,p0=1021,m0=1022,Wn=1023,Mi=1026,es=1027,Ec=1028,Tc=1029,rs=1030,Ac=1031,Rc=1033,jo=33776,tr=33777,er=33778,nr=33779,Ba=35840,za=35841,ka=35842,Ha=35843,Ga=36196,Va=37492,Wa=37496,Xa=37488,qa=37489,dr=37490,Ya=37491,Za=37808,$a=37809,Ka=37810,Ja=37811,Qa=37812,ja=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,oc=37819,rc=37820,ac=37821,cc=36492,lc=36494,hc=36495,uc=36283,fc=36284,pr=36285,dc=36286,hf=3200,mr=0,uf=1,Ci="",je="srgb",gr="srgb-linear",_r="linear",ge="srgb",ba=7680,ff=519,df=512,pf=513,mf=514,Cc=515,gf=516,_f=517,Pc=518,xf=519,g0=35044,Fl="300 es",ti=2e3,go=2001;function Ld(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vf(){const i=xr("canvas");return i.style.display="block",i}const $0={};function vr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Mf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=Mf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=Mf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ms(...i){const t=i.join(" ");t in $0||($0[t]=!0,Qt(...i))}function Dd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Id={[La]:Da,[Ia]:Fa,[Ua]:Oa,[uo]:Na,[Da]:La,[Fa]:Ia,[Oa]:Ua,[Na]:uo};class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let K0=1234567;const ir=Math.PI/180,Mr=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function _0(i,t){return(i%t+t)%t}function Ud(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nd(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function Fd(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function Od(i,t=1){return t-Math.abs(_0(i,t*2)-t)}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function kd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hd(i,t){return i+Math.random()*(t-i)}function Gd(i){return i*(.5-Math.random())}function Vd(i){i!==void 0&&(K0=i);let t=K0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wd(i){return i*ir}function Xd(i){return i*Mr}function qd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $d(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ce={DEG2RAD:ir,RAD2DEG:Mr,generateUUID:_i,clamp:ie,euclideanModulo:_0,mapLinear:Ud,inverseLerp:Nd,lerp:sr,damp:Fd,pingpong:Od,smoothstep:Bd,smootherstep:zd,randInt:kd,randFloat:Hd,randFloatSpread:Gd,seededRandom:Vd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:qd,ceilPowerOfTwo:Yd,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:$d,normalize:ve,denormalize:jn};var co;let xt=(co=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},co.prototype.isVector2=!0,co);class Bi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=o[r+0],d=o[r+1],m=o[r+2],_=o[r+3];if(f!==_||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*_;g<0&&(u=-u,d=-d,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);p=Math.sin(p*v)/M,a=Math.sin(a*v)/M,l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+_*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+m*a,f=f*p+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],m=o[r+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),u=l(n/2),d=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}var lo;let O=(lo=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(J0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(J0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lo.prototype.isVector3=!0,lo);const Yc=new O,J0=new Bi,W0=class W0{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],M=s[4],x=s[7],S=s[2],b=s[5],E=s[8];return o[0]=r*_+a*v+l*S,o[3]=r*g+a*M+l*b,o[6]=r*p+a*x+l*E,o[1]=c*_+h*v+f*S,o[4]=c*g+h*M+f*b,o[7]=c*p+h*x+f*E,o[2]=u*_+d*v+m*S,o[5]=u*g+d*M+m*b,o[8]=u*p+d*x+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*o,d=c*o-r*l,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};W0.prototype.isMatrix3=!0;let jt=W0;const Zc=new jt,Q0=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j0=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kd(){const i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ge&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ge&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:Q0,fromXYZ:j0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Q0,fromXYZ:j0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}const ae=Kd();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cs;class Sf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=xr("canvas")),Cs.width=t.width,Cs.height=t.height;const s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Oi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jd=0;class Lc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push($c(s[r].image)):o.push($c(s[r]))}else o=$c(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function $c(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let Qd=0;const Kc=new O;class Je extends ki{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=mi,s=mi,o=en,r=ts,a=Wn,l=Tn,c=Je.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=_i(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==l0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=l0;Je.DEFAULT_ANISOTROPY=1;const X0=class X0{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(d+1)/2,S=(p+1)/2,b=(h+u)/4,E=(f+_)/4,y=(m+g)/4;return M>x&&M>S?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=b/n,o=E/n):x>S?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=b/s,o=y/s):S<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(S),n=E/o,s=y/o),this.set(n,s,o,e),this}let v=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};X0.prototype.isVector4=!0;let Ie=X0;class yf extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new Je(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends yf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class x0 extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bf extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Mc=class Mc{constructor(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g)}set(t,e,n,s,o,r,a,l,c,h,f,u,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),o=1/Ps.setFromMatrixColumn(t,1).length(),r=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u+_*a,e[4]=m*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-m,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,m=c*h,_=c*f;e[0]=u-_*a,e[4]=-r*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,m=a*h,_=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=m*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*l,d=r*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,tp)}lookAt(t,e,n){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Xi.crossVectors(n,Pn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Xi.crossVectors(n,Pn)),Xi.normalize(),Fr.crossVectors(Pn,Xi),s[0]=Xi.x,s[4]=Fr.x,s[8]=Pn.x,s[1]=Xi.y,s[5]=Fr.y,s[9]=Pn.y,s[2]=Xi.z,s[6]=Fr.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],M=n[7],x=n[11],S=n[15],b=s[0],E=s[4],y=s[8],w=s[12],A=s[1],P=s[5],L=s[9],C=s[13],D=s[2],I=s[6],z=s[10],k=s[14],q=s[3],Y=s[7],J=s[11],j=s[15];return o[0]=r*b+a*A+l*D+c*q,o[4]=r*E+a*P+l*I+c*Y,o[8]=r*y+a*L+l*z+c*J,o[12]=r*w+a*C+l*k+c*j,o[1]=h*b+f*A+u*D+d*q,o[5]=h*E+f*P+u*I+d*Y,o[9]=h*y+f*L+u*z+d*J,o[13]=h*w+f*C+u*k+d*j,o[2]=m*b+_*A+g*D+p*q,o[6]=m*E+_*P+g*I+p*Y,o[10]=m*y+_*L+g*z+p*J,o[14]=m*w+_*C+g*k+p*j,o[3]=v*b+M*A+x*D+S*q,o[7]=v*E+M*P+x*I+S*Y,o[11]=v*y+M*L+x*z+S*J,o[15]=v*w+M*C+x*k+S*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],v=l*d-c*u,M=a*d-c*f,x=a*u-l*f,S=r*d-c*h,b=r*u-l*h,E=r*f-a*h;return e*(_*v-g*M+p*x)-n*(m*v-g*S+p*b)+s*(m*M-_*S+p*E)-o*(m*x-_*b+g*E)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-a*c)-n*(o*h-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=e*a-n*r,M=e*l-s*r,x=e*c-o*r,S=n*l-s*a,b=n*c-o*a,E=s*c-o*l,y=h*_-f*m,w=h*g-u*m,A=h*p-d*m,P=f*g-u*_,L=f*p-d*_,C=u*p-d*g,D=v*C-M*L+x*P+S*A-b*w+E*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return t[0]=(a*C-l*L+c*P)*I,t[1]=(s*L-n*C-o*P)*I,t[2]=(_*E-g*b+p*S)*I,t[3]=(u*b-f*E-d*S)*I,t[4]=(l*A-r*C-c*w)*I,t[5]=(e*C-s*A+o*w)*I,t[6]=(g*x-m*E-p*M)*I,t[7]=(h*E-u*x+d*M)*I,t[8]=(r*L-a*A+c*y)*I,t[9]=(n*A-e*L-o*y)*I,t[10]=(m*b-_*x+p*v)*I,t[11]=(f*x-h*b-d*v)*I,t[12]=(a*w-r*P-l*y)*I,t[13]=(e*P-n*w+s*y)*I,t[14]=(_*M-m*S-g*v)*I,t[15]=(h*S-f*M+u*v)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,u=o*c,d=o*h,m=o*f,_=r*h,g=r*f,p=a*f,v=l*c,M=l*h,x=l*f,S=n.x,b=n.y,E=n.z;return s[0]=(1-(_+p))*S,s[1]=(d+x)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(u+p))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(m+M)*E,s[9]=(g-v)*E,s[10]=(1-(u+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Ps.set(s[0],s[1],s[2]).length();const a=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();o<0&&(r=-r),Zn.copy(this);const c=1/r,h=1/a,f=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,e.setFromRotationMatrix(Zn),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=ti,l=!1){const c=this.elements,h=2*o/(e-t),f=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let m,_;if(l)m=o/(r-o),_=r*o/(r-o);else if(a===ti)m=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===go)m=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=ti,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,_;if(l)m=1/(r-o),_=r/(r-o);else if(a===ti)m=-2/(r-o),_=-(r+o)/(r-o);else if(a===go)m=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Mc.prototype.isMatrix4=!0;let be=Mc;const Ps=new O,Zn=new be,jd=new O(0,0,0),tp=new O(1,1,1),Xi=new O,Fr=new O,Pn=new O,th=new be,eh=new Bi;class Si{constructor(t=0,e=0,n=0,s=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class v0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ep=0;const nh=new O,Ls=new Bi,wi=new be,Or=new O,To=new O,np=new O,ip=new Bi,ih=new O(1,0,0),sh=new O(0,1,0),oh=new O(0,0,1),rh={type:"added"},sp={type:"removed"},Ds={type:"childadded",child:null},Jc={type:"childremoved",child:null};class Ee extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new O,e=new Si,n=new Bi,s=new O(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(oh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(To,Or,this.up):wi.lookAt(Or,To,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(wi),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sp),Jc.child=t,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.DEFAULT_UP=new O(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pe extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(op)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Qc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=_0(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Qc(r,o,t+1/3),this.g=Qc(r,o,t),this.b=Qc(r,o,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function n(o){o!==void 0&&parseFloat(o)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=wf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ae.workingToColorSpace(on.copy(this),t),Math.round(ie(on.r*255,0,255))*65536+Math.round(ie(on.g*255,0,255))*256+Math.round(ie(on.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(on.copy(this),e);const n=on.r,s=on.g,o=on.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=je){ae.workingToColorSpace(on.copy(this),t);const e=on.r,n=on.g,s=on.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Br);const n=sr(qi.h,Br.h,e),s=sr(qi.s,Br.s,e),o=sr(qi.l,Br.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const on=new Zt;Zt.NAMES=wf;class Dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class M0 extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const $n=new O,Ei=new O,jc=new O,Ti=new O,Is=new O,Us=new O,ah=new O,tl=new O,el=new O,nl=new O,il=new Ie,sl=new Ie,ol=new Ie;class Un{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){$n.subVectors(s,e),Ei.subVectors(n,e),jc.subVectors(t,e);const r=$n.dot($n),a=$n.dot(Ei),l=$n.dot(jc),c=Ei.dot(Ei),h=Ei.dot(jc),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,m=(r*h-a*l)*u;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ti.x),l.addScaledVector(r,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return il.setScalar(0),sl.setScalar(0),ol.setScalar(0),il.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,n),ol.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(il,o.x),r.addScaledVector(sl,o.y),r.addScaledVector(ol,o.z),r}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Ei.subVectors(t,e),$n.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),$n.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Is.subVectors(s,n),Us.subVectors(o,n),tl.subVectors(t,n);const l=Is.dot(tl),c=Us.dot(tl);if(l<=0&&c<=0)return e.copy(n);el.subVectors(t,s);const h=Is.dot(el),f=Us.dot(el);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Is,r);nl.subVectors(t,o);const d=Is.dot(nl),m=Us.dot(nl);if(m>=0&&d<=m)return e.copy(o);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Us,a);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return ah.subVectors(o,s),a=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(ah,a);const p=1/(g+_+u);return r=_*p,a=u*p,e.copy(n).addScaledVector(Is,r).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class as{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Kn):Kn.fromBufferAttribute(o,r),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),kr.subVectors(this.max,Ao),Ns.subVectors(t.a,Ao),Fs.subVectors(t.b,Ao),Os.subVectors(t.c,Ao),Yi.subVectors(Fs,Ns),Zi.subVectors(Os,Fs),hs.subVectors(Ns,Os);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-hs.z,hs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,hs.z,0,-hs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-hs.y,hs.x,0];return!rl(e,Ns,Fs,Os,kr)||(e=[1,0,0,0,1,0,0,0,1],!rl(e,Ns,Fs,Os,kr))?!1:(Hr.crossVectors(Yi,Zi),e=[Hr.x,Hr.y,Hr.z],rl(e,Ns,Fs,Os,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ai=[new O,new O,new O,new O,new O,new O,new O,new O],Kn=new O,zr=new as,Ns=new O,Fs=new O,Os=new O,Yi=new O,Zi=new O,hs=new O,Ao=new O,kr=new O,Hr=new O,us=new O;function rl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){us.fromArray(i,o);const a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=t.dot(us),c=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const He=new O,Gr=new xt;let rp=0;class Nn extends ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=g0,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),o=ve(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class S0 extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class y0 extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ap=new as,Ro=new O,al=new O;class So{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ap.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const e=Ro.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(al)),this.expandByPoint(Ro.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cp=0;const zn=new be,cl=new Ee,Bs=new O,Ln=new as,Co=new as,Ze=new O;class Le extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ld(t)?y0:S0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return cl.lookAt(t),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Ln.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Ln.min,Co.min),Ln.expandByPoint(Ze),Ze.addVectors(Ln.max,Co.max),Ln.expandByPoint(Ze)):(Ln.expandByPoint(Co.min),Ln.expandByPoint(Co.max))}Ln.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ze.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),Ze.add(Bs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new O,l[y]=new O;const c=new O,h=new O,f=new O,u=new xt,d=new xt,m=new xt,_=new O,g=new O;function p(y,w,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,A),u.fromBufferAttribute(o,y),d.fromBufferAttribute(o,w),m.fromBufferAttribute(o,A),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[y].add(_),a[w].add(_),a[A].add(_),l[y].add(g),l[w].add(g),l[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,w=v.length;y<w;++y){const A=v[y],P=A.start,L=A.count;for(let C=P,D=P+L;C<D;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new O,x=new O,S=new O,b=new O;function E(y){S.fromBufferAttribute(s,y),b.copy(S);const w=a[y];M.copy(w),M.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(b,w);const P=x.dot(l[y])<0?-1:1;r.setXYZW(y,M.x,M.y,M.z,P)}for(let y=0,w=v.length;y<w;++y){const A=v[y],P=A.start,L=A.count;for(let C=P,D=P+L;C<D;C+=3)E(t.getX(C+0)),E(t.getX(C+1)),E(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new O,o=new O,r=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Nn(u,h,f)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ef{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=g0,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const mn=new O;class Sr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),o=ve(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ll=new O,lp=new O,hp=new jt;class fi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ll.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ll),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hp.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let up=0;class cs extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=no,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=t0,this.blendDst=e0,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class b0 extends cs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zs;const Po=new O,ks=new O,Hs=new O,Gs=new xt,Lo=new xt,Tf=new be,Vr=new O,Do=new O,Wr=new O,ch=new xt,hl=new xt,lh=new xt;class Af extends Ee{constructor(t=new b0){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ef(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Sr(n,3,0,!1)),zs.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=zs,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),Tf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Xr(Vr.set(-.5,-.5,0),Hs,r,ks,s,o),Xr(Do.set(.5,-.5,0),Hs,r,ks,s,o),Xr(Wr.set(.5,.5,0),Hs,r,ks,s,o),ch.set(0,0),hl.set(1,0),lh.set(1,1);let a=t.ray.intersectTriangle(Vr,Do,Wr,!1,Po);if(a===null&&(Xr(Do.set(-.5,.5,0),Hs,r,ks,s,o),hl.set(0,1),a=t.ray.intersectTriangle(Vr,Wr,Do,!1,Po),a===null))return;const l=t.ray.origin.distanceTo(Po);l<t.near||l>t.far||e.push({distance:l,point:Po.clone(),uv:Un.getInterpolation(Po,Vr,Do,Wr,ch,hl,lh,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(i,t,e,n,s,o){Gs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Lo.x=o*Gs.x-s*Gs.y,Lo.y=s*Gs.x+o*Gs.y):Lo.copy(Gs),i.copy(t),i.x+=Lo.x,i.y+=Lo.y,i.applyMatrix4(Tf)}const Ri=new O,ul=new O,qr=new O,Yr=new O;class w0{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ul.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Yr.copy(this.origin).sub(ul);const o=t.distanceTo(e)*.5,r=-this.direction.dot(qr),a=Yr.dot(this.direction),l=-Yr.dot(qr),c=Yr.lengthSq(),h=Math.abs(1-r*r);let f,u,d,m;if(h>0)if(f=r*l-a,u=r*a-l,m=o*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ul).addScaledVector(qr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);const n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-r.x,u=t.y-r.y,d=t.z-r.z,m=e.x-r.x,_=e.y-r.y,g=e.z-r.z,p=n.x-r.x,v=n.y-r.y,M=n.z-r.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(h);let E,y,w,A,P,L,C,D,I,z,k,q;if(x>=S&&x>=b?(w=l,L=f,I=m,q=p,l>=0?(E=c,y=h,A=u,P=d,C=_,D=g,z=v,k=M):(E=h,y=c,A=d,P=u,C=g,D=_,z=M,k=v)):S>=b?(w=c,L=u,I=_,q=v,c>=0?(E=h,y=l,A=d,P=f,C=g,D=m,z=M,k=p):(E=l,y=h,A=f,P=d,C=m,D=g,z=p,k=M)):(w=h,L=d,I=g,q=M,h>=0?(E=l,y=c,A=f,P=u,C=m,D=_,z=p,k=v):(E=c,y=l,A=u,P=f,C=_,D=m,z=v,k=p)),w===0)return null;const Y=E/w,J=y/w,j=1/w,St=A-Y*L,vt=P-J*L,kt=C-Y*I,mt=D-J*I,pt=z-Y*q,V=k-J*q,Q=pt*mt-V*kt,dt=St*V-vt*pt,wt=kt*vt-mt*St;if(s){if(Q<0||dt<0||wt<0)return null}else if((Q<0||dt<0||wt<0)&&(Q>0||dt>0||wt>0))return null;const H=Q+dt+wt;if(H===0)return null;const at=j*(Q*L+dt*I+wt*q);return(H>0?at<0:at>0)?null:this.at(at/H,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qn extends cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hh=new be,fs=new w0,Zr=new So,uh=new O,$r=new O,Kr=new O,Jr=new O,fl=new O,Qr=new O,fh=new O,jr=new O;class he extends Ee{constructor(t=new Le,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Qr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(fl.fromBufferAttribute(f,t),r?Qr.addScaledVector(fl,h):Qr.addScaledVector(fl.sub(e),h))}e.add(Qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(o),fs.copy(t.ray).recast(t.near),!(Zr.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Zr,uh)===null||fs.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(o).invert(),fs.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,S=M;x<S;x+=3){const b=a.getX(x),E=a.getX(x+1),y=a.getX(x+2);s=ta(this,p,t,n,c,h,f,b,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=ta(this,r,t,n,c,h,f,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=r[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,S=M;x<S;x+=3){const b=x,E=x+1,y=x+2;s=ta(this,p,t,n,c,h,f,b,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=g,M=g+1,x=g+2;s=ta(this,r,t,n,c,h,f,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function fp(i,t,e,n,s,o,r,a){let l;if(t.side===fn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ei,a),l===null)return null;jr.copy(a),jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:i}}function ta(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,$r),i.getVertexPosition(l,Kr),i.getVertexPosition(c,Jr);const h=fp(i,t,e,n,$r,Kr,Jr,fh);if(h){const f=new O;Un.getBarycoord(fh,$r,Kr,Jr,f),s&&(h.uv=Un.getInterpolatedAttribute(s,a,l,c,f,new xt)),o&&(h.uv1=Un.getInterpolatedAttribute(o,a,l,c,f,new xt)),r&&(h.normal=Un.getInterpolatedAttribute(r,a,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};Un.getNormal($r,Kr,Jr,u.normal),h.face=u,h.barycoord=f}return h}class Ic extends Je{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Ke,h=Ke,f,u){super(null,r,a,l,c,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends Nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vs=new be,dh=new be,ea=[],ph=new as,dp=new be,Io=new he,Uo=new So;class zi extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new as),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),ph.copy(t.boundingBox).applyMatrix4(Vs),this.boundingBox.union(ph)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Uo.copy(t.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(n),t.ray.intersectsSphere(Uo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Vs),dh.multiplyMatrices(n,Vs),Io.matrixWorld=dh,Io.raycast(t,ea);for(let r=0,a=ea.length;r<a;r++){const l=ea[r];l.instanceId=o,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(s*this.count),s,this.count,Ec,Vn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ds=new So,pp=new xt(.5,.5),na=new O;class Uc{constructor(t=new fi,e=new fi,n=new fi,s=new fi,o=new fi,r=new fi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],f=o[5],u=o[6],d=o[7],m=o[8],_=o[9],g=o[10],p=o[11],v=o[12],M=o[13],x=o[14],S=o[15];if(s[0].setComponents(c-r,d-h,p-m,S-v).normalize(),s[1].setComponents(c+r,d+h,p+m,S+v).normalize(),s[2].setComponents(c+a,d+f,p+_,S+M).normalize(),s[3].setComponents(c-a,d-f,p-_,S-M).normalize(),n)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,d-u,p-g,S-x).normalize();else if(s[4].setComponents(c-l,d-u,p-g,S-x).normalize(),e===ti)s[5].setComponents(c+l,d+u,p+g,S+x).normalize();else if(e===go)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);const e=pp.distanceTo(t.center);return ds.radius=.7071067811865476+e,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class E0 extends Je{constructor(t=[],e=os,n,s,o,r,a,l,c,h){super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nc extends Je{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends Je{constructor(t,e,n=ii,s,o,r,a=Ke,l=Ke,c,h=Mi,f=1){if(h!==Mi&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Rf extends _o{constructor(t,e=ii,n=os,s,o,r=Ke,a=Ke,l,c=Mi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,o,r,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class T0 extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ce extends Le{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function m(_,g,p,v,M,x,S,b,E,y,w){const A=x/E,P=S/y,L=x/2,C=S/2,D=b/2,I=E+1,z=y+1;let k=0,q=0;const Y=new O;for(let J=0;J<z;J++){const j=J*P-C;for(let St=0;St<I;St++){const vt=St*A-L;Y[_]=vt*v,Y[g]=j*M,Y[p]=D,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[p]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(St/E),f.push(1-J/y),k+=1}}for(let J=0;J<y;J++)for(let j=0;j<E;j++){const St=u+j+I*J,vt=u+j+I*(J+1),kt=u+(j+1)+I*(J+1),mt=u+(j+1)+I*J;l.push(St,vt,mt),l.push(vt,kt,mt),q+=6}a.addGroup(d,q,w),d+=q,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yo extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new O,h=new xt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fn extends Le{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let m=0;const _=[],g=n/2;let p=0;v(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function v(){const x=new O,S=new O;let b=0;const E=(e-t)/n;for(let y=0;y<=o;y++){const w=[],A=y/o,P=A*(e-t)+t;for(let L=0;L<=s;L++){const C=L/s,D=C*l+a,I=Math.sin(D),z=Math.cos(D);S.x=P*I,S.y=-A*n+g,S.z=P*z,f.push(S.x,S.y,S.z),x.set(I,E,z).normalize(),u.push(x.x,x.y,x.z),d.push(C,1-A),w.push(m++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<o;w++){const A=_[w][y],P=_[w+1][y],L=_[w+1][y+1],C=_[w][y+1];(t>0||w!==0)&&(h.push(A,P,C),b+=3),(e>0||w!==o-1)&&(h.push(P,L,C),b+=3)}c.addGroup(p,b,0),p+=b}function M(x){const S=m,b=new xt,E=new O;let y=0;const w=x===!0?t:e,A=x===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,g*A,0),u.push(0,A,0),d.push(.5,.5),m++;const P=m;for(let L=0;L<=s;L++){const D=L/s*l+a,I=Math.cos(D),z=Math.sin(D);E.x=w*z,E.y=g*A,E.z=w*I,f.push(E.x,E.y,E.z),u.push(0,A,0),b.x=I*.5+.5,b.y=z*.5*A+.5,d.push(b.x,b.y),m++}for(let L=0;L<s;L++){const C=S+L,D=P+L;x===!0?h.push(D,D+1,C):h.push(D+1,D,C),y+=3}c.addGroup(p,y,x===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fc extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(o.slice(),3)),this.setAttribute("uv",new oe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new O,x=new O,S=new O;for(let b=0;b<e.length;b+=3)d(e[b+0],M),d(e[b+1],x),d(e[b+2],S),l(M,x,S,v)}function l(v,M,x,S){const b=S+1,E=[];for(let y=0;y<=b;y++){E[y]=[];const w=v.clone().lerp(x,y/b),A=M.clone().lerp(x,y/b),P=b-y;for(let L=0;L<=P;L++)L===0&&y===b?E[y][L]=w:E[y][L]=w.clone().lerp(A,L/P)}for(let y=0;y<b;y++)for(let w=0;w<2*(b-y)-1;w++){const A=Math.floor(w/2);w%2===0?(u(E[y][A+1]),u(E[y+1][A]),u(E[y][A])):(u(E[y][A+1]),u(E[y+1][A+1]),u(E[y+1][A]))}}function c(v){const M=new O;for(let x=0;x<o.length;x+=3)M.x=o[x+0],M.y=o[x+1],M.z=o[x+2],M.normalize().multiplyScalar(v),o[x+0]=M.x,o[x+1]=M.y,o[x+2]=M.z}function h(){const v=new O;for(let M=0;M<o.length;M+=3){v.x=o[M+0],v.y=o[M+1],v.z=o[M+2];const x=g(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;r.push(x,1-S)}m(),f()}function f(){for(let v=0;v<r.length;v+=6){const M=r[v+0],x=r[v+2],S=r[v+4],b=Math.max(M,x,S),E=Math.min(M,x,S);b>.9&&E<.1&&(M<.2&&(r[v+0]+=1),x<.2&&(r[v+2]+=1),S<.2&&(r[v+4]+=1))}}function u(v){o.push(v.x,v.y,v.z)}function d(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function m(){const v=new O,M=new O,x=new O,S=new O,b=new xt,E=new xt,y=new xt;for(let w=0,A=0;w<o.length;w+=9,A+=6){v.set(o[w+0],o[w+1],o[w+2]),M.set(o[w+3],o[w+4],o[w+5]),x.set(o[w+6],o[w+7],o[w+8]),b.set(r[A+0],r[A+1]),E.set(r[A+2],r[A+3]),y.set(r[A+4],r[A+5]),S.copy(v).add(M).add(x).divideScalar(3);const P=g(S);_(b,A+0,v,P),_(E,A+2,M,P),_(y,A+4,x,P)}}function _(v,M,x,S){S<0&&v.x===1&&(r[M]=v.x-1),x.x===0&&x.z===0&&(r[M]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.vertices,t.indices,t.radius,t.detail)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new xt:new O);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],o=[],r=[],a=new O,l=new be;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new O)}o[0]=new O,r[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ie(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,m))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(ie(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oc extends ri{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cf extends Oc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function A0(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const mh=new O,gh=new O,dl=new A0,pl=new A0,ml=new A0;class Bc extends ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(gh.subVectors(s[0],s[1]).add(s[0]),c=gh);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(mh.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=mh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),dl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,_,g),pl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,_,g),ml.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),pl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ml.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(dl.calc(l),pl.calc(l),ml.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _h(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function mp(i,t){const e=1-i;return e*e*t}function gp(i,t){return 2*(1-i)*i*t}function _p(i,t){return i*i*t}function or(i,t,e,n){return mp(i,t)+gp(i,e)+_p(i,n)}function xp(i,t){const e=1-i;return e*e*e*t}function vp(i,t){const e=1-i;return 3*e*e*i*t}function Mp(i,t){return 3*(1-i)*i*i*t}function Sp(i,t){return i*i*i*t}function rr(i,t,e,n,s){return xp(i,t)+vp(i,e)+Mp(i,n)+Sp(i,s)}class R0 extends ri{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(rr(t,s.x,o.x,r.x,a.x),rr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pf extends ri{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(rr(t,s.x,o.x,r.x,a.x),rr(t,s.y,o.y,r.y,a.y),rr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class C0 extends ri{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends ri{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P0 extends ri{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(or(t,s.x,o.x,r.x),or(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class L0 extends ri{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(or(t,s.x,o.x,r.x),or(t,s.y,o.y,r.y),or(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D0 extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(_h(a,l.x,c.x,h.x,f.x),_h(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var pc=Object.freeze({__proto__:null,ArcCurve:Cf,CatmullRomCurve3:Bc,CubicBezierCurve:R0,CubicBezierCurve3:Pf,EllipseCurve:Oc,LineCurve:C0,LineCurve3:Lf,QuadraticBezierCurve:P0,QuadraticBezierCurve3:L0,SplineCurve:D0});class Df extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new pc[s.type]().fromJSON(s))}return this}}class Bl extends Df{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new C0(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new P0(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new R0(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new D0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Oc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zc extends Bl{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Bl().fromJSON(s))}return this}}function yp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=If(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Ap(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){const d=i[u],m=i[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return yr(o,r,e,a,l,c,0),r}function If(i,t,e,n,s){let o;if(s===Bp(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=xh(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=xh(r/n|0,i[r],i[r+1],o);return o&&xo(o,o.next)&&(wr(o),o=o.next),o}function ws(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(xo(e,e.next)||Ne(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Dp(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?wp(i,n,s,o):bp(i)){t.push(l.i,i.i,c.i),wr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Ep(ws(i),t),yr(i,t,e,n,s,o,2)):r===2&&Tp(i,t,e,n,s,o):yr(ws(i),t,e,n,s,o,1);break}}}function bp(i){const t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,o,r),f=Math.min(a,l,c),u=Math.max(s,o,r),d=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&ko(s,a,o,l,r,c,m.x,m.y)&&Ne(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function wp(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ne(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,u=r.y,d=Math.min(a,l,c),m=Math.min(h,f,u),_=Math.max(a,l,c),g=Math.max(h,f,u),p=zl(d,m,t,e,n),v=zl(_,g,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&ko(a,h,l,f,c,u,M.x,M.y)&&Ne(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==r&&ko(a,h,l,f,c,u,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&ko(a,h,l,f,c,u,M.x,M.y)&&Ne(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==r&&ko(a,h,l,f,c,u,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ep(i,t){let e=i;do{const n=e.prev,s=e.next.next;!xo(n,s)&&Nf(n,e,e.next,s)&&br(n,s)&&br(s,n)&&(t.push(n.i,e.i,s.i),wr(e),wr(e.next),e=i=s),e=e.next}while(e!==i);return ws(e)}function Tp(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Np(r,a)){let l=Ff(r,a);r=ws(r,r.next),l=ws(l,l.next),yr(r,t,e,n,s,o,0),yr(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Ap(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=If(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Up(c))}s.sort(Rp);for(let o=0;o<s.length;o++)e=Cp(s[o],e);return e}function Rp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Cp(i,t){const e=Pp(i,t);if(!e)return t;const n=Ff(e,i);return ws(n,n.next),ws(e,e.next)}function Pp(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(xo(i,e))return e;do{if(xo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Uf(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);br(e,i)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&Lp(r,e)))&&(r=e,h=f)}e=e.next}while(e!==a);return r}function Lp(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function Dp(i,t,e,n){let s=i;do s.z===0&&(s.z=zl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ip(s)}function Ip(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function zl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Up(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uf(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function ko(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&Uf(i,t,e,n,s,o,r,a)}function Np(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fp(i,t)&&(br(i,t)&&br(t,i)&&Op(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||xo(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function xo(i,t){return i.x===t.x&&i.y===t.y}function Nf(i,t,e,n){const s=sa(Ne(i,t,e)),o=sa(Ne(i,t,n)),r=sa(Ne(e,n,i)),a=sa(Ne(e,n,t));return!!(s!==o&&r!==a||s===0&&ia(i,e,t)||o===0&&ia(i,n,t)||r===0&&ia(e,i,n)||a===0&&ia(e,t,n))}function ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sa(i){return i>0?1:i<0?-1:0}function Fp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function br(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function Op(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ff(i,t){const e=kl(i.i,i.x,i.y),n=kl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function xh(i,t,e,n){const s=kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bp(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class zp{static triangulate(t,e,n=2){return yp(t,e,n)}}class Ii{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ii.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];vh(t),Mh(n,t);let r=t.length;e.forEach(vh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Mh(n,e[l]);const a=zp.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function vh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Pr extends Le{constructor(t=new zc([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:kp;let M,x=!1,S,b,E,y;if(p){M=p.getSpacedPoints(h),x=!0,u=!1;const Z=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,Z),b=new O,E=new O,y=new O}u||(g=0,d=0,m=0,_=0);const w=a.extractPoints(c);let A=w.shape;const P=w.holes;if(!Ii.isClockWise(A)){A=A.reverse();for(let Z=0,F=P.length;Z<F;Z++){const G=P[Z];Ii.isClockWise(G)&&(P[Z]=G.reverse())}}function C(Z){const G=10000000000000001e-36;let tt=Z[0];for(let rt=1;rt<=Z.length;rt++){const _t=rt%Z.length,Et=Z[_t],Tt=Et.x-tt.x,Ot=Et.y-tt.y,B=Tt*Tt+Ot*Ot,Kt=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(tt.x),Math.abs(tt.y)),qt=G*Kt*Kt;if(B<=qt){Z.splice(_t,1),rt--;continue}tt=Et}}C(A),P.forEach(C);const D=P.length,I=A;for(let Z=0;Z<D;Z++){const F=P[Z];A=A.concat(F)}function z(Z,F,G){return F||le("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(F,G)}const k=A.length;function q(Z,F,G){let tt,rt,_t;const Et=Z.x-F.x,Tt=Z.y-F.y,Ot=G.x-Z.x,B=G.y-Z.y,Kt=Et*Et+Tt*Tt,qt=Et*B-Tt*Ot;if(Math.abs(qt)>Number.EPSILON){const U=Math.sqrt(Kt),T=Math.sqrt(Ot*Ot+B*B),$=F.x-Tt/U,K=F.y+Et/U,ct=G.x-B/T,yt=G.y+Ot/T,At=((ct-$)*B-(yt-K)*Ot)/(Et*B-Tt*Ot);tt=$+Et*At-Z.x,rt=K+Tt*At-Z.y;const lt=tt*tt+rt*rt;if(lt<=2)return new xt(tt,rt);_t=Math.sqrt(lt/2)}else{let U=!1;Et>Number.EPSILON?Ot>Number.EPSILON&&(U=!0):Et<-Number.EPSILON?Ot<-Number.EPSILON&&(U=!0):Math.sign(Tt)===Math.sign(B)&&(U=!0),U?(tt=-Tt,rt=Et,_t=Math.sqrt(Kt)):(tt=Et,rt=Tt,_t=Math.sqrt(Kt/2))}return new xt(tt/_t,rt/_t)}const Y=[];for(let Z=0,F=I.length,G=F-1,tt=Z+1;Z<F;Z++,G++,tt++)G===F&&(G=0),tt===F&&(tt=0),Y[Z]=q(I[Z],I[G],I[tt]);const J=[];let j,St=Y.concat();for(let Z=0,F=D;Z<F;Z++){const G=P[Z];j=[];for(let tt=0,rt=G.length,_t=rt-1,Et=tt+1;tt<rt;tt++,_t++,Et++)_t===rt&&(_t=0),Et===rt&&(Et=0),j[tt]=q(G[tt],G[_t],G[Et]);J.push(j),St=St.concat(j)}let vt;if(g===0)vt=Ii.triangulateShape(I,P);else{const Z=[],F=[];for(let G=0;G<g;G++){const tt=G/g,rt=d*Math.cos(tt*Math.PI/2),_t=m*Math.sin(tt*Math.PI/2)+_;for(let Et=0,Tt=I.length;Et<Tt;Et++){const Ot=z(I[Et],Y[Et],_t);dt(Ot.x,Ot.y,-rt),tt===0&&Z.push(Ot)}for(let Et=0,Tt=D;Et<Tt;Et++){const Ot=P[Et];j=J[Et];const B=[];for(let Kt=0,qt=Ot.length;Kt<qt;Kt++){const U=z(Ot[Kt],j[Kt],_t);dt(U.x,U.y,-rt),tt===0&&B.push(U)}tt===0&&F.push(B)}}vt=Ii.triangulateShape(Z,F)}const kt=vt.length,mt=m+_;for(let Z=0;Z<k;Z++){const F=u?z(A[Z],St[Z],mt):A[Z];x?(E.copy(S.normals[0]).multiplyScalar(F.x),b.copy(S.binormals[0]).multiplyScalar(F.y),y.copy(M[0]).add(E).add(b),dt(y.x,y.y,y.z)):dt(F.x,F.y,0)}for(let Z=1;Z<=h;Z++)for(let F=0;F<k;F++){const G=u?z(A[F],St[F],mt):A[F];x?(E.copy(S.normals[Z]).multiplyScalar(G.x),b.copy(S.binormals[Z]).multiplyScalar(G.y),y.copy(M[Z]).add(E).add(b),dt(y.x,y.y,y.z)):dt(G.x,G.y,f/h*Z)}for(let Z=g-1;Z>=0;Z--){const F=Z/g,G=d*Math.cos(F*Math.PI/2),tt=m*Math.sin(F*Math.PI/2)+_;for(let rt=0,_t=I.length;rt<_t;rt++){const Et=z(I[rt],Y[rt],tt);dt(Et.x,Et.y,f+G)}for(let rt=0,_t=P.length;rt<_t;rt++){const Et=P[rt];j=J[rt];for(let Tt=0,Ot=Et.length;Tt<Ot;Tt++){const B=z(Et[Tt],j[Tt],tt);x?dt(B.x,B.y+M[h-1].y,M[h-1].x+G):dt(B.x,B.y,f+G)}}}pt(),V();function pt(){const Z=s.length/3;if(u){let F=0,G=k*F;for(let tt=0;tt<kt;tt++){const rt=vt[tt];wt(rt[2]+G,rt[1]+G,rt[0]+G)}F=h+g*2,G=k*F;for(let tt=0;tt<kt;tt++){const rt=vt[tt];wt(rt[0]+G,rt[1]+G,rt[2]+G)}}else{for(let F=0;F<kt;F++){const G=vt[F];wt(G[2],G[1],G[0])}for(let F=0;F<kt;F++){const G=vt[F];wt(G[0]+k*h,G[1]+k*h,G[2]+k*h)}}n.addGroup(Z,s.length/3-Z,0)}function V(){const Z=s.length/3;let F=0;Q(I,F),F+=I.length;for(let G=0,tt=P.length;G<tt;G++){const rt=P[G];Q(rt,F),F+=rt.length}n.addGroup(Z,s.length/3-Z,1)}function Q(Z,F){let G=Z.length;for(;--G>=0;){const tt=G;let rt=G-1;rt<0&&(rt=Z.length-1);for(let _t=0,Et=h+g*2;_t<Et;_t++){const Tt=k*_t,Ot=k*(_t+1),B=F+tt+Tt,Kt=F+rt+Tt,qt=F+rt+Ot,U=F+tt+Ot;H(B,Kt,qt,U)}}}function dt(Z,F,G){l.push(Z),l.push(F),l.push(G)}function wt(Z,F,G){at(Z),at(F),at(G);const tt=s.length/3,rt=v.generateTopUV(n,s,tt-3,tt-2,tt-1);ht(rt[0]),ht(rt[1]),ht(rt[2])}function H(Z,F,G,tt){at(Z),at(F),at(tt),at(F),at(G),at(tt);const rt=s.length/3,_t=v.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);ht(_t[0]),ht(_t[1]),ht(_t[3]),ht(_t[1]),ht(_t[2]),ht(_t[3])}function at(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function ht(Z){o.push(Z.x),o.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new pc[s.type]().fromJSON(s)),new Pr(n,t.options)}}const kp={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(o,r),new xt(a,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new xt(r,1-l),new xt(c,1-f),new xt(u,1-m),new xt(_,1-p)]:[new xt(a,1-l),new xt(h,1-f),new xt(d,1-m),new xt(g,1-p)]}};function Hp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Es extends Fc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Es(t.radius,t.detail)}}class oi extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*u-r;for(let M=0;M<c;M++){const x=M*f-o;m.push(x,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const M=v+c*p,x=v+c*(p+1),S=v+1+c*(p+1),b=v+1+c*p;d.push(M,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class wn extends Le{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new O,u=new O,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],M=p/n,x=r+M*a,S=t*Math.cos(x),b=Math.sqrt(t*t-S*S);let E=0;p===0&&r===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let y=0;y<=e;y++){const w=y/e,A=s+w*o;f.x=-b*Math.cos(A),f.y=S,f.z=b*Math.sin(A),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(w+E,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const M=h[p][v+1],x=h[p][v],S=h[p+1][v],b=h[p+1][v+1];(p!==0||r>0)&&d.push(M,x,b),(p!==n-1||l<Math.PI)&&d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xi extends Le{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new O,d=new O,m=new O;for(let _=0;_<=n;_++){const g=r+_/n*a;for(let p=0;p<=s;p++){const v=p/s*o;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const p=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,M=(s+1)*(_-1)+g,x=(s+1)*_+g;l.push(p,v,x),l.push(v,M,x)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Lr extends Le{constructor(t=new L0(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new O,l=new O,c=new xt;let h=new O;const f=[],u=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function _(){for(let M=0;M<e;M++)g(M);g(o===!1?e:0),v(),p()}function g(M){h=t.getPointAt(M/e,h);const x=r.normals[M],S=r.binormals[M];for(let b=0;b<=s;b++){const E=b/s*Math.PI*2,y=Math.sin(E),w=-Math.cos(E);l.x=w*x.x+y*S.x,l.y=w*x.y+y*S.y,l.z=w*x.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const S=(s+1)*(M-1)+(x-1),b=(s+1)*M+(x-1),E=(s+1)*M+x,y=(s+1)*(M-1)+x;m.push(S,b,y),m.push(b,E,y)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lr(new pc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function vo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Sh(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Sh(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){const t={};for(let e=0;e<i.length;e++){const n=vo(i[e]);for(const s in n)t[s]=n[s]}return t}function Sh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Of(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Bf={clone:vo,merge:gn};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vo(t.uniforms),this.uniformsGroups=Gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class zf extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ar extends cs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Zt(16777215),this.specular=new Zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Rr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class se extends cs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Rr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kf extends cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hf extends cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ea={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(yh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!yh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function yh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Gf{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Vf=new Gf;class kc{constructor(t){this.manager=t!==void 0?t:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}kc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ws=new WeakMap;class Wf extends kc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ea.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let f=Ws.get(r);f===void 0&&(f=[],Ws.set(r,f)),f.push({onLoad:e,onError:s})}return r}const a=xr("img");function l(){h(),e&&e(this);const f=Ws.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Ws.delete(this),o.manager.itemEnd(t)}function c(f){h(),s&&s(f),Ea.remove(`image:${t}`);const u=Ws.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onError&&m.onError(f)}Ws.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ea.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class Xf extends kc{constructor(t){super(t)}load(t,e,n,s){const o=new Je,r=new Wf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Hc extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class I0 extends Hc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const gl=new be,bh=new O,wh=new O;class U0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(bh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(gl,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;t.coordinateSystem===go||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new O,ra=new Bi,ci=new O;class N0 extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,ra,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,ra,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oa,ra,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,ra,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new O,Eh=new xt,Th=new xt;class tn extends N0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,Th),e.subVectors(Th,Eh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Xp extends U0{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class qf extends Hc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Gc extends N0{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class qp extends U0{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends Hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new qp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Xs=-90,qs=1;class Yf extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Xs,qs,t,e);s.layers=this.layers,this.add(s);const o=new tn(Xs,qs,t,e);o.layers=this.layers,this.add(o);const r=new tn(Xs,qs,t,e);r.layers=this.layers,this.add(r);const a=new tn(Xs,qs,t,e);a.layers=this.layers,this.add(a);const l=new tn(Xs,qs,t,e);l.layers=this.layers,this.add(l);const c=new tn(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Zf extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const q0=class q0{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};q0.prototype.isMatrix2=!0;let Gl=q0;class $f extends ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ah(i,t,e,n){const s=Yp(n);switch(e){case p0:return i*t;case Ec:return i*t/s.components*s.byteLength;case Tc:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case Ac:return i*t*2/s.components*s.byteLength;case m0:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case Rc:return i*t*4/s.components*s.byteLength;case jo:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Ba:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case Va:case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:case dr:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cc:case lc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pr:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yp(i){switch(i){case Tn:case h0:return{byteLength:1,components:1};case po:case u0:case si:return{byteLength:2,components:1};case bc:case wc:return{byteLength:2,components:4};case ii:case yc:case Vn:return{byteLength:4,components:1};case f0:case d0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);function Kf(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Zp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
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
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
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
#endif`,s1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c1=`#ifdef USE_IRIDESCENCE
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
#endif`,l1=`#ifdef USE_BUMPMAP
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x1=`#define PI 3.141592653589793
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
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F1=`#ifdef USE_GRADIENTMAP
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
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,H1=`#ifdef USE_ENVMAP
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
#endif`,G1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
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
#endif`,Y1=`uniform sampler2D dfgLUT;
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
}`,Z1=`
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o2=`#if defined( USE_POINTS_UV )
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
#endif`,r2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u2=`#ifdef USE_MORPHTARGETS
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
#endif`,f2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x2=`#ifdef USE_NORMALMAP
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
#endif`,v2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U2=`float getShadowMask() {
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
}`,N2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F2=`#ifdef USE_SKINNING
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
#endif`,O2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V2=`#ifdef USE_TRANSMISSION
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
#endif`,W2=`#ifdef USE_TRANSMISSION
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
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K2=`uniform sampler2D t2D;
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
}`,J2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
}`,dm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,vm=`#define STANDARD
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define TOON
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
}`,ym=`#define TOON
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
}`,bm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,Am=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:$p,alphahash_pars_fragment:Kp,alphamap_fragment:Jp,alphamap_pars_fragment:Qp,alphatest_fragment:jp,alphatest_pars_fragment:t1,aomap_fragment:e1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:s1,begin_vertex:o1,beginnormal_vertex:r1,bsdfs:a1,iridescence_fragment:c1,bumpmap_pars_fragment:l1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:d1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:g1,color_vertex:_1,common:x1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:M1,displacementmap_pars_vertex:S1,displacementmap_vertex:y1,emissivemap_fragment:b1,emissivemap_pars_fragment:w1,colorspace_fragment:E1,colorspace_pars_fragment:T1,envmap_fragment:A1,envmap_common_pars_fragment:R1,envmap_pars_fragment:C1,envmap_pars_vertex:P1,envmap_physical_pars_fragment:H1,envmap_vertex:L1,fog_vertex:D1,fog_pars_vertex:I1,fog_fragment:U1,fog_pars_fragment:N1,gradientmap_pars_fragment:F1,lightmap_pars_fragment:O1,lights_lambert_fragment:B1,lights_lambert_pars_fragment:z1,lights_pars_begin:k1,lights_toon_fragment:G1,lights_toon_pars_fragment:V1,lights_phong_fragment:W1,lights_phong_pars_fragment:X1,lights_physical_fragment:q1,lights_physical_pars_fragment:Y1,lights_fragment_begin:Z1,lights_fragment_maps:$1,lights_fragment_end:K1,lightprobes_pars_fragment:J1,logdepthbuf_fragment:Q1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:t2,logdepthbuf_vertex:e2,map_fragment:n2,map_pars_fragment:i2,map_particle_fragment:s2,map_particle_pars_fragment:o2,metalnessmap_fragment:r2,metalnessmap_pars_fragment:a2,morphinstance_vertex:c2,morphcolor_vertex:l2,morphnormal_vertex:h2,morphtarget_pars_vertex:u2,morphtarget_vertex:f2,normal_fragment_begin:d2,normal_fragment_maps:p2,normal_pars_fragment:m2,normal_pars_vertex:g2,normal_vertex:_2,normalmap_pars_fragment:x2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:M2,clearcoat_pars_fragment:S2,iridescence_pars_fragment:y2,opaque_fragment:b2,packing:w2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:A2,dithering_pars_fragment:R2,roughnessmap_fragment:C2,roughnessmap_pars_fragment:P2,shadowmap_pars_fragment:L2,shadowmap_pars_vertex:D2,shadowmap_vertex:I2,shadowmask_pars_fragment:U2,skinbase_vertex:N2,skinning_pars_vertex:F2,skinning_vertex:O2,skinnormal_vertex:B2,specularmap_fragment:z2,specularmap_pars_fragment:k2,tonemapping_fragment:H2,tonemapping_pars_fragment:G2,transmission_fragment:V2,transmission_pars_fragment:W2,uv_pars_fragment:X2,uv_pars_vertex:q2,uv_vertex:Y2,worldpos_vertex:Z2,background_vert:$2,background_frag:K2,backgroundCube_vert:J2,backgroundCube_frag:Q2,cube_vert:j2,cube_frag:tm,depth_vert:em,depth_frag:nm,distance_vert:im,distance_frag:sm,equirect_vert:om,equirect_frag:rm,linedashed_vert:am,linedashed_frag:cm,meshbasic_vert:lm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:fm,meshmatcap_vert:dm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:xm,meshphysical_vert:vm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:ym,points_vert:bm,points_frag:wm,shadow_vert:Em,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Rm},It={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Qn={basic:{uniforms:gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:gn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:gn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:gn([It.points,It.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:gn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:gn([It.common,It.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:gn([It.sprite,It.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:gn([It.common,It.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:gn([It.lights,It.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Qn.physical={uniforms:gn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const aa={r:0,b:0,g:0},Cm=new be,Jf=new jt;Jf.set(-1,0,0,0,1,0,0,0,1);function Pm(i,t,e,n,s,o){const r=new Zt(0);let a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const x=v.backgroundBlurriness>0;M=t.get(M,x)}return M}function m(v){let M=!1;const x=d(v);x===null?g(r,a):x&&x.isColor&&(g(x,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,M){const x=d(M);x&&(x.isCubeTexture||x.mapping===Cr)?(c===void 0&&(c=new he(new Ce(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:vo(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cm.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jf),c.material.toneMapped=ae.getTransfer(x.colorSpace)!==ge,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new he(new oi(2,2),new Rn({name:"BackgroundMaterial",uniforms:vo(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(aa,Of(i)),e.buffers.color.setClear(aa.r,aa.g,aa.b,M,o)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),a=M,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(r,a)},render:m,addToRenderList:_,dispose:p}}function Lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(P,L,C,D,I){let z=!1;const k=f(P,D,C,L);o!==k&&(o=k,c(o.object)),z=d(P,D,C,I),z&&m(P,D,C,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,x(P,L,C,D),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,L,C,D){const I=D.wireframe===!0;let z=n[L.id];z===void 0&&(z={},n[L.id]=z);const k=P.isInstancedMesh===!0?P.id:0;let q=z[k];q===void 0&&(q={},z[k]=q);let Y=q[C.id];Y===void 0&&(Y={},q[C.id]=Y);let J=Y[I];return J===void 0&&(J=u(l()),Y[I]=J),J}function u(P){const L=[],C=[],D=[];for(let I=0;I<e;I++)L[I]=0,C[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:C,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,L,C,D){const I=o.attributes,z=L.attributes;let k=0;const q=C.getAttributes();for(const Y in q)if(q[Y].location>=0){const j=I[Y];let St=z[Y];if(St===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(St=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(St=P.instanceColor)),j===void 0||j.attribute!==St||St&&j.data!==St.data)return!0;k++}return o.attributesNum!==k||o.index!==D}function m(P,L,C,D){const I={},z=L.attributes;let k=0;const q=C.getAttributes();for(const Y in q)if(q[Y].location>=0){let j=z[Y];j===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const St={};St.attribute=j,j&&j.data&&(St.data=j.data),I[Y]=St,k++}o.attributes=I,o.attributesNum=k,o.index=D}function _(){const P=o.newAttributes;for(let L=0,C=P.length;L<C;L++)P[L]=0}function g(P){p(P,0)}function p(P,L){const C=o.newAttributes,D=o.enabledAttributes,I=o.attributeDivisors;C[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),I[P]!==L&&(i.vertexAttribDivisor(P,L),I[P]=L)}function v(){const P=o.newAttributes,L=o.enabledAttributes;for(let C=0,D=L.length;C<D;C++)L[C]!==P[C]&&(i.disableVertexAttribArray(C),L[C]=0)}function M(P,L,C,D,I,z,k){k===!0?i.vertexAttribIPointer(P,L,C,I,z):i.vertexAttribPointer(P,L,C,D,I,z)}function x(P,L,C,D){_();const I=D.attributes,z=C.getAttributes(),k=L.defaultAttributeValues;for(const q in z){const Y=z[q];if(Y.location>=0){let J=I[q];if(J===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const j=J.normalized,St=J.itemSize,vt=t.get(J);if(vt===void 0)continue;const kt=vt.buffer,mt=vt.type,pt=vt.bytesPerElement,V=mt===i.INT||mt===i.UNSIGNED_INT||J.gpuType===yc;if(J.isInterleavedBufferAttribute){const Q=J.data,dt=Q.stride,wt=J.offset;if(Q.isInstancedInterleavedBuffer){for(let H=0;H<Y.locationSize;H++)p(Y.location+H,Q.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let H=0;H<Y.locationSize;H++)g(Y.location+H);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let H=0;H<Y.locationSize;H++)M(Y.location+H,St/Y.locationSize,mt,j,dt*pt,(wt+St/Y.locationSize*H)*pt,V)}else{if(J.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)p(Y.location+Q,J.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<Y.locationSize;Q++)g(Y.location+Q);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Q=0;Q<Y.locationSize;Q++)M(Y.location+Q,St/Y.locationSize,mt,j,St*pt,St/Y.locationSize*Q*pt,V)}}else if(k!==void 0){const j=k[q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(Y.location,j);break;case 3:i.vertexAttrib3fv(Y.location,j);break;case 4:i.vertexAttrib4fv(Y.location,j);break;default:i.vertexAttrib1fv(Y.location,j)}}}}v()}function S(){w();for(const P in n){const L=n[P];for(const C in L){const D=L[C];for(const I in D){const z=D[I];for(const k in z)h(z[k].object),delete z[k];delete D[I]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const L=n[P.id];for(const C in L){const D=L[C];for(const I in D){const z=D[I];for(const k in z)h(z[k].object),delete z[k];delete D[I]}}delete n[P.id]}function E(P){for(const L in n){const C=n[L];for(const D in C){const I=C[D];if(I[P.id]===void 0)continue;const z=I[P.id];for(const k in z)h(z[k].object),delete z[k];delete I[P.id]}}}function y(P){for(const L in n){const C=n[L],D=P.isInstancedMesh===!0?P.id:0,I=C[D];if(I!==void 0){for(const z in I){const k=I[z];for(const q in k)h(k[q].object),delete k[q];delete I[z]}delete C[D],Object.keys(C).length===0&&delete n[L]}}}function w(){A(),r=!0,o!==s&&(o=s,c(o.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Dm(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function Im(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==Wn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const y=E===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Tn&&E!==Vn&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:b}}function Um(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new fi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||o&&!g)o?h(null):c();else{const v=o?0:n,M=v*4;let x=p.clippingState||null;l.value=x,x=h(m,u,M,d);for(let S=0;S!==M;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)r.copy(f[M]).applyMatrix4(v,a),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const eo=4,Nm=6,Fm=20,Om=256,No=new Gc,Rh=new Zt;let _l=null,xl=0,vl=0,Ml=!1;const Bm=new O,ps=new O;class Vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=Bm}=o;_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,xl,vl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:si,format:Wn,colorSpace:gr,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zm(o)),this._blurMaterial=Hm(o,t,e),this._ggxMaterial=km(o,t,e)}return s}_compileMaterial(t){const e=new he(new Le,t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,s,o){const l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Rh),f.toneMapping=ni,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new Ce,new qn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(Rh),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const S=this._cubeSize;Ys(s,x*S,M>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===os||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-eo?n-m+eo:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Ys(o,g,p,3*_,2*_),s.setRenderTarget(o),s.render(a,No),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-n,Ys(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(a,No)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-eo?s-this._lodMax+eo:0),u=4*(this._cubeSize-h);Ys(e,f,u,3*h,2*h),r.setRenderTarget(e),r.render(l,No)}}function zm(i){const t=[],e=[];let n=i;const s=i-eo+1+Nm;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){const v=p%3*2/3-1,M=p>2?0:-1,x=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];m.set(x,d*u*p);for(let S=0;S<u;S++){const b=h[S*2]*2-1,E=h[S*2+1]*2-1;p===0?ps.set(1,E,b):p===1?ps.set(-b,1,-E):p===2?ps.set(-b,E,1):p===3?ps.set(-1,E,-b):p===4?ps.set(-b,-1,E):ps.set(b,E,-1),ps.toArray(_,(p*u+S)*d)}}const g=new Le;g.setAttribute("position",new Nn(m,d)),g.setAttribute("outputDirection",new Nn(_,d)),e.push(new he(g,null)),n>eo&&n--}return{lodMeshes:e,sizeLods:t}}function Ch(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Hm(i,t,e){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ph(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Lh(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Vc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class O0 extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new E0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ce(5,5,5),o=new Rn({name:"CubemapFromEquirect",uniforms:vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:gi});o.uniforms.tEquirect.value=e;const r=new he(s,o),a=e.minFilter;return e.minFilter===ts&&(e.minFilter=en),new Yf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function Gm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?r(u):o(u)}function o(u){if(u&&u.isTexture){const d=u.mapping;if(d===Qo||d===Sa)if(t.has(u)){const m=t.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new O0(m.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,m=d===Qo||d===Sa,_=d===os||d===bs;if(m||_){let g=e.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Vl(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Vl(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===Qo?u.mapping=os:d===Sa&&(u.mapping=bs),u}function l(u){let d=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function Wm(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let M=0,x=v.length;M<x;M+=3){const S=v[M+0],b=v[M+1],E=v[M+2];u.push(S,b,b,E,E,S)}}else{const v=m.array;_=m.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const S=M+0,b=M+1,E=M+2;u.push(S,b,b,E,E,S)}}const g=new(m.count>=65535?y0:S0)(u,1);g.version=_;const p=o.get(f);p&&t.remove(p),o.set(f,g)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Xm(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,u){i.drawElements(n,u,o,f*r),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,o,f*r,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:le("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ym(i,t,e){const n=new WeakMap,s=new Ie;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*S*4*f),E=new x0(b,x,S,f);E.type=Vn,E.needsUpdate=!0;const y=M*4;for(let A=0;A<f;A++){const P=g[A],L=p[A],C=v[A],D=x*S*4*A;for(let I=0;I<P.count;I++){const z=I*y;d===!0&&(s.fromBufferAttribute(P,I),b[D+z+0]=s.x,b[D+z+1]=s.y,b[D+z+2]=s.z,b[D+z+3]=0),m===!0&&(s.fromBufferAttribute(L,I),b[D+z+4]=s.x,b[D+z+5]=s.y,b[D+z+6]=s.z,b[D+z+7]=0),_===!0&&(s.fromBufferAttribute(C,I),b[D+z+8]=s.x,b[D+z+9]=s.y,b[D+z+10]=s.z,b[D+z+11]=C.itemSize===4?s.w:1)}}u={count:f,texture:E,size:new xt(x,S)},n.set(a,u),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Zm(i,t,e,n,s){let o=new WeakMap;function r(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(o.get(u)!==h&&(t.update(u),o.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return u}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const $m={[n0]:"LINEAR_TONE_MAPPING",[i0]:"REINHARD_TONE_MAPPING",[s0]:"CINEON_TONE_MAPPING",[o0]:"ACES_FILMIC_TONE_MAPPING",[a0]:"AGX_TONE_MAPPING",[c0]:"NEUTRAL_TONE_MAPPING",[r0]:"CUSTOM_TONE_MAPPING"};function Km(i,t,e,n,s,o){const r=new Xn(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Le;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));const h=new zf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new he(c,h),u=new Gc(-1,1,1,-1,0,1);let d=null,m=null,_=!1,g,p=null,v=[],M=!1;this.setSize=function(x,S){r.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<v.length;b++){const E=v[b];E.setSize&&E.setSize(x,S)}},this.setEffects=function(x){v=x,M=v.length>0&&v[0].isRenderPass===!0;const S=r.width,b=r.height;v.length>0&&a===null&&(a=new Xn(S,b,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new Xn(S,b,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<v.length;E++){const y=v[E];y.setSize&&y.setSize(S,b)}},this.begin=function(x,S){if(_||x.toneMapping===ni&&v.length===0)return!1;if(p=S,S!==null){const b=S.width,E=S.height;(r.width!==b||r.height!==E)&&this.setSize(b,E)}return M===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=ni,!0},this.hasRenderPass=function(){return M},this.end=function(x,S){x.toneMapping=g,_=!0;let b=r,E=a;for(let y=0;y<v.length;y++){const w=v[y];w.enabled!==!1&&(w.render(x,E,b,S),w.needsSwap!==!1&&(b=E,E=E===a?l:a))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,h.defines={},ae.getTransfer(d)===ge&&(h.defines.SRGB_TRANSFER="");const y=$m[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Qf=new Je,Wl=new _o(1,1),jf=new x0,td=new bf,ed=new E0,Dh=[],Ih=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function bo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Dh[s];if(o===void 0&&(o=new Float32Array(s),Dh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wc(i,t){let e=Ih[t];e===void 0&&(e=new Int32Array(t),Ih[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),Ye(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),Ye(e,n)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),Ye(e,n)}}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Wl.compareFunction=e.isReversedDepthBuffer()?Pc:Cc,o=Wl):o=Qf,e.setTexture2D(t||o,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||td,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ed,s)}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jf,s)}function gg(i){switch(i){case 5126:return Jm;case 35664:return Qm;case 35665:return jm;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return og;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return cg;case 36294:return lg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(i,t){i.uniform1fv(this.addr,t)}function xg(i,t){const e=bo(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){const e=bo(t,this.size,3);i.uniform3fv(this.addr,e)}function Mg(i,t){const e=bo(t,this.size,4);i.uniform4fv(this.addr,e)}function Sg(i,t){const e=bo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yg(i,t){const e=bo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bg(i,t){const e=bo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function Eg(i,t){i.uniform2iv(this.addr,t)}function Tg(i,t){i.uniform3iv(this.addr,t)}function Ag(i,t){i.uniform4iv(this.addr,t)}function Rg(i,t){i.uniform1uiv(this.addr,t)}function Cg(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Lg(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){const n=this.cache,s=t.length,o=Wc(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=Wl:r=Qf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function Ig(i,t,e){const n=this.cache,s=t.length,o=Wc(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||td,o[r])}function Ug(i,t,e){const n=this.cache,s=t.length,o=Wc(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||ed,o[r])}function Ng(i,t,e){const n=this.cache,s=t.length,o=Wc(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||jf,o[r])}function Fg(i){switch(i){case 5126:return _g;case 35664:return xg;case 35665:return vg;case 35666:return Mg;case 35674:return Sg;case 35675:return yg;case 35676:return bg;case 5124:case 35670:return wg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}}class zg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){const n=i.name,s=n.length;for(Sl.lastIndex=0;;){const o=Sl.exec(n),r=Sl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Oh(e,c===void 0?new Og(a,i,t):new Bg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new zg(a),Oh(e,f)),e=f}}}class Ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);kg(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Bh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Hg=37297;let Gg=0;function Vg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const zh=new jt;function Wg(i){ae._getMatrix(zh,ae.workingColorSpace,i);const t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case _r:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Vg(i.getShaderSource(t),a)}else return o}function Xg(i,t){const e=Wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const qg={[n0]:"Linear",[i0]:"Reinhard",[s0]:"Cineon",[o0]:"ACESFilmic",[a0]:"AgX",[c0]:"Neutral",[r0]:"Custom"};function Yg(i,t){const e=qg[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new O;function Zg(){ae.getLuminanceCoefficients(ca);const i=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Kg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ho(i){return i!==""}function Hh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(Qg,t3)}const jg=new Map;function t3(i,t){let e=ee[t];if(e===void 0){const n=jg.get(t);if(n!==void 0)e=ee[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xl(e)}const e3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace(e3,n3)}function n3(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Wh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const i3={[Jo]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function s3(i){return i3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o3={[os]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE_UV"};function r3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":o3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const a3={[bs]:"ENVMAP_MODE_REFRACTION"};function c3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l3={[Rr]:"ENVMAP_BLENDING_MULTIPLY",[af]:"ENVMAP_BLENDING_MIX",[cf]:"ENVMAP_BLENDING_ADD"};function h3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l3[i.combine]||"ENVMAP_BLENDING_NONE"}function u3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f3(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=s3(e),c=r3(e),h=c3(e),f=h3(e),u=u3(e),d=$g(e),m=Kg(o),_=s.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ho).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(g=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?ee.tonemapping_pars_fragment:"",e.toneMapping!==ni?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),r=Xl(r),r=Hh(r,e),r=Gh(r,e),a=Xl(a),a=Hh(a,e),a=Gh(a,e),r=Vh(r),a=Vh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+g+r,x=v+p+a,S=Bh(s,s.VERTEX_SHADER,M),b=Bh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(P){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",C=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(b)||"",I=L.trim(),z=C.trim(),k=D.trim();let q=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,b);else{const J=kh(s,S,"vertex"),j=kh(s,b,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+J+`
`+j)}else I!==""?Qt("WebGLProgram: Program Info Log:",I):(z===""||k==="")&&(Y=!1);Y&&(P.diagnostics={runnable:q,programLog:I,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(S),s.deleteShader(b),y=new Ta(s,_),w=Jg(s,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,Hg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let d3=0;class p3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m3(t),e.set(t,n)),n}}class m3{constructor(t){this.id=d3++,this.code=t,this.usedTimes=0}}function g3(i){return i===rs||i===dr||i===pr}function _3(i,t,e,n,s,o){const r=new v0,a=new p3,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,A,P,L,C){const D=P.fog,I=L.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=t.get(y.envMap||z,k),Y=q&&q.mapping===Cr?q.image.height:null,J=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Qt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,St=j!==void 0?j.length:0;let vt=0;I.morphAttributes.position!==void 0&&(vt=1),I.morphAttributes.normal!==void 0&&(vt=2),I.morphAttributes.color!==void 0&&(vt=3);let kt,mt,pt,V;if(J){const bt=Qn[J];kt=bt.vertexShader,mt=bt.fragmentShader}else{kt=y.vertexShader,mt=y.fragmentShader;const bt=a.getVertexShaderStage(y),Mt=a.getFragmentShaderStage(y);a.update(y,bt,Mt),pt=bt.id,V=Mt.id}const Q=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),wt=L.isInstancedMesh===!0,H=L.isBatchedMesh===!0,at=!!y.map,ht=!!y.matcap,Z=!!q,F=!!y.aoMap,G=!!y.lightMap,tt=!!y.bumpMap&&y.wireframe===!1,rt=!!y.normalMap,_t=!!y.displacementMap,Et=!!y.emissiveMap,Tt=!!y.metalnessMap,Ot=!!y.roughnessMap,B=y.anisotropy>0,Kt=y.clearcoat>0,qt=y.dispersion>0,U=y.retroreflectivity>0,T=y.iridescence>0,$=y.sheen>0,K=y.transmission>0,ct=B&&!!y.anisotropyMap,yt=Kt&&!!y.clearcoatMap,At=Kt&&!!y.clearcoatNormalMap,lt=Kt&&!!y.clearcoatRoughnessMap,ft=T&&!!y.iridescenceMap,Ct=T&&!!y.iridescenceThicknessMap,Vt=$&&!!y.sheenColorMap,Dt=$&&!!y.sheenRoughnessMap,Pt=!!y.specularMap,Wt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,te=K&&!!y.transmissionMap,X=K&&!!y.thicknessMap,Rt=!!y.gradientMap,ut=!!y.alphaMap,Lt=y.alphaTest>0,Ut=!!y.alphaHash,N=!!y.extensions;let it=ni;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(it=i.toneMapping);const ot={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:kt,fragmentShader:mt,defines:y.defines,customVertexShaderID:pt,customFragmentShaderID:V,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:H,batchingColor:H&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:ht,envMap:Z,envMapMode:Z&&q.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:G,bumpMap:tt,normalMap:rt,displacementMap:_t,emissiveMap:Et,normalMapObjectSpace:rt&&y.normalMapType===uf,normalMapTangentSpace:rt&&y.normalMapType===mr,packedNormalMap:rt&&y.normalMapType===mr&&g3(y.normalMap.format),metalnessMap:Tt,roughnessMap:Ot,anisotropy:B,anisotropyMap:ct,clearcoat:Kt,clearcoatMap:yt,clearcoatNormalMap:At,clearcoatRoughnessMap:lt,dispersion:qt,retroreflection:U,iridescence:T,iridescenceMap:ft,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:Vt,sheenRoughnessMap:Dt,specularMap:Pt,specularColorMap:Wt,specularIntensityMap:Yt,transmission:K,transmissionMap:te,thicknessMap:X,gradientMap:Rt,opaque:y.transparent===!1&&y.blending===no&&y.alphaToCoverage===!1,alphaMap:ut,alphaTest:Lt,alphaHash:Ut,combine:y.combine,mapUv:at&&m(y.map.channel),aoMapUv:F&&m(y.aoMap.channel),lightMapUv:G&&m(y.lightMap.channel),bumpMapUv:tt&&m(y.bumpMap.channel),normalMapUv:rt&&m(y.normalMap.channel),displacementMapUv:_t&&m(y.displacementMap.channel),emissiveMapUv:Et&&m(y.emissiveMap.channel),metalnessMapUv:Tt&&m(y.metalnessMap.channel),roughnessMapUv:Ot&&m(y.roughnessMap.channel),anisotropyMapUv:ct&&m(y.anisotropyMap.channel),clearcoatMapUv:yt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:At&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&m(y.sheenRoughnessMap.channel),specularMapUv:Pt&&m(y.specularMap.channel),specularColorMapUv:Wt&&m(y.specularColorMap.channel),specularIntensityMapUv:Yt&&m(y.specularIntensityMap.channel),transmissionMapUv:te&&m(y.transmissionMap.channel),thicknessMapUv:X&&m(y.thicknessMap.channel),alphaMapUv:ut&&m(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(rt||B),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(at||ut),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&rt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:vt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:Et&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hn,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:N&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(N&&y.extensions.multiDraw===!0||H)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function g(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)w.push(A),w.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(p(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function M(y){const w=d[y.type];let A;if(w){const P=Qn[w];A=Bf.clone(P.uniforms)}else A=y.uniforms;return A}function x(y,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new f3(i,w,y,s),c.push(A),h.set(w,A)),A}function S(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function x3(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function v3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,_,g,p){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=p),t++,v}function l(u,d,m,_,g,p,v){v.reversedDepth===!0&&(g=-g);const M=a(u,d,m,_,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function c(u,d,m,_,g,p){const v=a(u,d,m,_,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||v3),n.length>1&&n.sort(d||Xh),s.length>1&&s.sort(d||Xh)}function f(){for(let u=t,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:h}}function M3(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new qh,i.set(n,[r])):s>=o.length?(r=new qh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function S3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function y3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b3=0;function w3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E3(i){const t=new S3,e=y3(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,o=new be,r=new be;function a(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,v=0,M=0,x=0,S=0,b=0,E=0,y=0,w=0,A=0;c.sort(w3);for(let L=0,C=c.length;L<C;L++){const D=c[L],I=D.color,z=D.intensity,k=D.distance;let q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===rs?q=D.shadow.map.texture:q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=I.r*z,f+=I.g*z,u+=I.b*z;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],z);A++}else if(D.isSunLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,j=e.get(D);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=q;const St=J.getViewportCount();for(let vt=0;vt<St;vt++)n.sunShadowMatrix[_+vt]=J.getMatrix(vt),n.sunShadowCascade[_+vt]=J._cascadeData[vt];_+=St,m++}n.sun[d]=Y,d++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,j=e.get(D);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=D.shadow.matrix,S++}n.directional[g]=Y,g++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(I).multiplyScalar(z),Y.distance=k,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[v]=Y;const J=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,J.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[v]=J.matrix,D.castShadow){const j=e.get(D);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=q,E++}v++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(I).multiplyScalar(z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[M]=Y,M++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const J=D.shadow,j=e.get(D);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=D.shadow.matrix,b++}n.point[p]=Y,p++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(z),Y.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[x]=Y,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==M||P.hemiLength!==x||P.numSunShadows!==m||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==E||P.numSpotMaps!==y||P.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=M,n.point.length=p,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.sunLength=d,P.directionalLength=g,P.pointLength=p,P.spotLength=v,P.rectAreaLength=M,P.hemiLength=x,P.numSunShadows=m,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=E,P.numSpotMaps=y,P.numLightProbes=A,n.version=b3++)}function l(c,h){let f=0,u=0,d=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const x=c[v];if(x.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),f++}else if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(x.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),r.identity(),o.copy(x.matrixWorld),o.premultiply(p),r.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Yh(i){const t=new E3(i),e=[],n=[],s=[];function o(u){f.camera=u,e.length=0,n.length=0,s.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function T3(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Yh(i),t.set(s,[a])):o>=r.length?(a=new Yh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const A3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R3=`uniform sampler2D shadow_pass;
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
}`,C3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],P3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Zh=new be,Fo=new O,yl=new O;function L3(i,t,e){let n=new Uc;const s=new xt,o=new xt,r=new Ie,a=new kf,l=new Hf,c={},h=e.maxTextureSize,f={[ei]:fn,[fn]:ei,[hn]:hn},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:A3,fragmentShader:R3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Le;m.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new he(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let p=this.type;this.render=function(b,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Hu&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);const w=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(gi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const C=p!==this.type;C&&E.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(I=>I.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,I=b.length;D<I;D++){const z=b[D],k=z.shadow;if(k===void 0){Qt("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const q=k.getFrameExtents();s.multiply(q),o.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/q.x),s.x=o.x*q.x,k.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/q.y),s.y=o.y*q.y,k.mapSize.y=o.y));const Y=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||C===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===to){if(z.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Xn(s.x,s.y,{format:rs,type:si,minFilter:en,magFilter:en,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new _o(s.x,s.y,Vn),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=Mi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ke,k.map.depthTexture.magFilter=Ke}else z.isPointLight?(k.map=new O0(s.x),k.map.depthTexture=new Rf(s.x,ii)):(k.map=new Xn(s.x,s.y),k.map.depthTexture=new _o(s.x,s.y,ii)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=Mi,this.type===Jo?(k.map.depthTexture.compareFunction=Y?Pc:Cc,k.map.depthTexture.minFilter=en,k.map.depthTexture.magFilter=en):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ke,k.map.depthTexture.magFilter=Ke);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const J=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();z.isPointLight!==!0&&k.updateMatrices(z,y);for(let j=0;j<J;j++){const St=k.getCamera(j);if(z.isPointLight){const vt=k.camera,kt=k.matrix,mt=z.distance||vt.far;mt!==vt.far&&(vt.far=mt,vt.updateProjectionMatrix()),Fo.setFromMatrixPosition(z.matrixWorld),vt.position.copy(Fo),yl.copy(vt.position),yl.add(C3[j]),vt.up.copy(P3[j]),vt.lookAt(yl),vt.updateMatrixWorld(),kt.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Zh.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Zh,vt.coordinateSystem,vt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,j),i.clear();else{j===0&&(i.setRenderTarget(k.map),i.clear());const vt=k.getViewport(j);r.set(o.x*vt.x,o.y*vt.y,o.x*vt.z,o.y*vt.w),L.viewport(r)}n=k.getFrustum(j),x(E,y,St,z,this.type)}k.isPointLightShadow!==!0&&this.type===to&&v(k,y),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,A,P)};function v(b,E){const y=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Xn(s.x,s.y,{format:rs,type:si}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,y,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,y,d,_,null)}function M(b,E,y,w){let A=null;const P=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)A=P;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=A.uuid,C=E.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let I=D[C];I===void 0&&(I=A.clone(),D[C]=I,E.addEventListener("dispose",S)),A=I}if(A.visible=E.visible,A.wireframe=E.wireframe,w===to?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:f[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const L=i.properties.get(A);L.light=y}return A}function x(b,E,y,w,A){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===to)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const C=t.update(b),D=b.material;if(Array.isArray(D)){const I=C.groups;for(let z=0,k=I.length;z<k;z++){const q=I[z],Y=D[q.materialIndex];if(Y&&Y.visible){const J=M(b,Y,w,A);b.onBeforeShadow(i,b,E,y,C,J,q),i.renderBufferDirect(y,null,C,J,b,q),b.onAfterShadow(i,b,E,y,C,J,q)}}}else if(D.visible){const I=M(b,D,w,A);b.onBeforeShadow(i,b,E,y,C,I,null),i.renderBufferDirect(y,null,C,I,b,null),b.onAfterShadow(i,b,E,y,C,I,null)}}const L=b.children;for(let C=0,D=L.length;C<D;C++)x(L[C],E,y,w,A)}function S(b){b.target.removeEventListener("dispose",S);for(const y in c){const w=c[y],A=b.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function D3(i,t){function e(){let X=!1;const Rt=new Ie;let ut=null;const Lt=new Ie(0,0,0,0);return{setMask:function(Ut){ut!==Ut&&!X&&(i.colorMask(Ut,Ut,Ut,Ut),ut=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,N,it,ot,bt){bt===!0&&(Ut*=ot,N*=ot,it*=ot),Rt.set(Ut,N,it,ot),Lt.equals(Rt)===!1&&(i.clearColor(Ut,N,it,ot),Lt.copy(Rt))},reset:function(){X=!1,ut=null,Lt.set(-1,0,0,0)}}}function n(){let X=!1,Rt=!1,ut=null,Lt=null,Ut=null;return{setReversed:function(N){if(Rt!==N){const it=t.get("EXT_clip_control");N?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Rt=N;const ot=Ut;Ut=null,this.setClear(ot)}},getReversed:function(){return Rt},setTest:function(N){N?Q(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(N){ut!==N&&!X&&(i.depthMask(N),ut=N)},setFunc:function(N){if(Rt&&(N=Id[N]),Lt!==N){switch(N){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case uo:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=N}},setLocked:function(N){X=N},setClear:function(N){Ut!==N&&(Ut=N,Rt&&(N=1-N),i.clearDepth(N))},reset:function(){X=!1,ut=null,Lt=null,Ut=null,Rt=!1}}}function s(){let X=!1,Rt=null,ut=null,Lt=null,Ut=null,N=null,it=null,ot=null,bt=null;return{setTest:function(Mt){X||(Mt?Q(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(Mt){Rt!==Mt&&!X&&(i.stencilMask(Mt),Rt=Mt)},setFunc:function(Mt,$t,Jt){(ut!==Mt||Lt!==$t||Ut!==Jt)&&(i.stencilFunc(Mt,$t,Jt),ut=Mt,Lt=$t,Ut=Jt)},setOp:function(Mt,$t,Jt){(N!==Mt||it!==$t||ot!==Jt)&&(i.stencilOp(Mt,$t,Jt),N=Mt,it=$t,ot=Jt)},setLocked:function(Mt){X=Mt},setClear:function(Mt){bt!==Mt&&(i.clearStencil(Mt),bt=Mt)},reset:function(){X=!1,Rt=null,ut=null,Lt=null,Ut=null,N=null,it=null,ot=null,bt=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,v=null,M=null,x=null,S=null,b=null,E=null,y=new Zt(0,0,0),w=0,A=!1,P=null,L=null,C=null,D=null,I=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=q>=2);let J=null,j={};const St=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),kt=new Ie().fromArray(St),mt=new Ie().fromArray(vt);function pt(X,Rt,ut,Lt){const Ut=new Uint8Array(4),N=i.createTexture();i.bindTexture(X,N),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<ut;it++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Rt+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return N}const V={};V[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),r.setFunc(uo),tt(!1),rt(Il),Q(i.CULL_FACE),F(gi);function Q(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function dt(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function wt(X,Rt){return u[X]!==Rt?(i.bindFramebuffer(X,Rt),u[X]=Rt,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Rt),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function H(X,Rt){let ut=m,Lt=!1;if(X){ut=d.get(Rt),ut===void 0&&(ut=[],d.set(Rt,ut));const Ut=X.textures;if(ut.length!==Ut.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let N=0,it=Ut.length;N<it;N++)ut[N]=i.COLOR_ATTACHMENT0+N;ut.length=Ut.length,Lt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(ut)}function at(X){return _!==X?(i.useProgram(X),_=X,!0):!1}const ht={[xs]:i.FUNC_ADD,[Vu]:i.FUNC_SUBTRACT,[Wu]:i.FUNC_REVERSE_SUBTRACT};ht[Xu]=i.MIN,ht[qu]=i.MAX;const Z={[Yu]:i.ZERO,[Zu]:i.ONE,[$u]:i.SRC_COLOR,[t0]:i.SRC_ALPHA,[ef]:i.SRC_ALPHA_SATURATE,[ju]:i.DST_COLOR,[Ju]:i.DST_ALPHA,[Ku]:i.ONE_MINUS_SRC_COLOR,[e0]:i.ONE_MINUS_SRC_ALPHA,[tf]:i.ONE_MINUS_DST_COLOR,[Qu]:i.ONE_MINUS_DST_ALPHA,[nf]:i.CONSTANT_COLOR,[sf]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[rf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(X,Rt,ut,Lt,Ut,N,it,ot,bt,Mt){if(X===gi){g===!0&&(dt(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),X!==Gu){if(X!==p||Mt!==A){if((v!==xs||S!==xs)&&(i.blendEquation(i.FUNC_ADD),v=xs,S=xs),Mt)switch(X){case no:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",X);break}else switch(X){case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ul:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",X);break}M=null,x=null,b=null,E=null,y.set(0,0,0),w=0,p=X,A=Mt}return}Ut=Ut||Rt,N=N||ut,it=it||Lt,(Rt!==v||Ut!==S)&&(i.blendEquationSeparate(ht[Rt],ht[Ut]),v=Rt,S=Ut),(ut!==M||Lt!==x||N!==b||it!==E)&&(i.blendFuncSeparate(Z[ut],Z[Lt],Z[N],Z[it]),M=ut,x=Lt,b=N,E=it),(ot.equals(y)===!1||bt!==w)&&(i.blendColor(ot.r,ot.g,ot.b,bt),y.copy(ot),w=bt),p=X,A=!1}function G(X,Rt){X.side===hn?dt(i.CULL_FACE):Q(i.CULL_FACE);let ut=X.side===fn;Rt&&(ut=!ut),tt(ut),X.blending===no&&X.transparent===!1?F(gi):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),o.setMask(X.colorWrite);const Lt=X.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Et(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(X){P!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),P=X)}function rt(X){X!==zu?(Q(i.CULL_FACE),X!==L&&(X===Il?i.cullFace(i.BACK):X===ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),L=X}function _t(X){X!==C&&(k&&i.lineWidth(X),C=X)}function Et(X,Rt,ut){X?(Q(i.POLYGON_OFFSET_FILL),(D!==Rt||I!==ut)&&(D=Rt,I=ut,r.getReversed()&&(Rt=-Rt),i.polygonOffset(Rt,ut))):dt(i.POLYGON_OFFSET_FILL)}function Tt(X){X?Q(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Ot(X){X===void 0&&(X=i.TEXTURE0+z-1),J!==X&&(i.activeTexture(X),J=X)}function B(X,Rt,ut){ut===void 0&&(J===null?ut=i.TEXTURE0+z-1:ut=J);let Lt=j[ut];Lt===void 0&&(Lt={type:void 0,texture:void 0},j[ut]=Lt),(Lt.type!==X||Lt.texture!==Rt)&&(J!==ut&&(i.activeTexture(ut),J=ut),i.bindTexture(X,Rt||V[X]),Lt.type=X,Lt.texture=Rt)}function Kt(){const X=j[J];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function qt(){try{i.compressedTexImage2D(...arguments)}catch(X){le("WebGLState:",X)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(X){le("WebGLState:",X)}}function T(){try{i.texSubImage2D(...arguments)}catch(X){le("WebGLState:",X)}}function $(){try{i.texSubImage3D(...arguments)}catch(X){le("WebGLState:",X)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(X){le("WebGLState:",X)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(X){le("WebGLState:",X)}}function yt(){try{i.texStorage2D(...arguments)}catch(X){le("WebGLState:",X)}}function At(){try{i.texStorage3D(...arguments)}catch(X){le("WebGLState:",X)}}function lt(){try{i.texImage2D(...arguments)}catch(X){le("WebGLState:",X)}}function ft(){try{i.texImage3D(...arguments)}catch(X){le("WebGLState:",X)}}function Ct(X){return f[X]!==void 0?f[X]:i.getParameter(X)}function Vt(X,Rt){f[X]!==Rt&&(i.pixelStorei(X,Rt),f[X]=Rt)}function Dt(X){kt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),kt.copy(X))}function Pt(X){mt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),mt.copy(X))}function Wt(X,Rt){let ut=c.get(Rt);ut===void 0&&(ut=new WeakMap,c.set(Rt,ut));let Lt=ut.get(X);Lt===void 0&&(Lt=i.getUniformBlockIndex(Rt,X.name),ut.set(X,Lt))}function Yt(X,Rt){const Lt=c.get(Rt).get(X);l.get(Rt)!==Lt&&(i.uniformBlockBinding(Rt,Lt,X.__bindingPointIndex),l.set(Rt,Lt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,j={},u={},d=new WeakMap,m=[],_=null,g=!1,p=null,v=null,M=null,x=null,S=null,b=null,E=null,y=new Zt(0,0,0),w=0,A=!1,P=null,L=null,C=null,D=null,I=null,kt.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:Q,disable:dt,bindFramebuffer:wt,drawBuffers:H,useProgram:at,setBlending:F,setMaterial:G,setFlipSided:tt,setCullFace:rt,setLineWidth:_t,setPolygonOffset:Et,setScissorTest:Tt,activeTexture:Ot,bindTexture:B,unbindTexture:Kt,compressedTexImage2D:qt,compressedTexImage3D:U,texImage2D:lt,texImage3D:ft,pixelStorei:Vt,getParameter:Ct,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:yt,texStorage3D:At,texSubImage2D:T,texSubImage3D:$,compressedTexSubImage2D:K,compressedTexSubImage3D:ct,scissor:Dt,viewport:Pt,reset:te}}function I3(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,T){return m?new OffscreenCanvas(U,T):xr("canvas")}function g(U,T,$){let K=1;const ct=qt(U);if((ct.width>$||ct.height>$)&&(K=$/Math.max(ct.width,ct.height)),K<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const yt=Math.floor(K*ct.width),At=Math.floor(K*ct.height);u===void 0&&(u=_(yt,At));const lt=T?_(yt,At):u;return lt.width=yt,lt.height=At,lt.getContext("2d").drawImage(U,0,0,yt,At),Qt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+yt+"x"+At+")."),lt}else return"data"in U&&Qt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function p(U){return U.generateMipmaps}function v(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(U,T,$,K,ct,yt=!1){if(U!==null){if(i[U]!==void 0)return i[U];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let At;K&&(At=t.get("EXT_texture_norm16"),At||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=T;if(T===i.RED&&($===i.FLOAT&&(lt=i.R32F),$===i.HALF_FLOAT&&(lt=i.R16F),$===i.UNSIGNED_BYTE&&(lt=i.R8),$===i.UNSIGNED_SHORT&&At&&(lt=At.R16_EXT),$===i.SHORT&&At&&(lt=At.R16_SNORM_EXT)),T===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.R8UI),$===i.UNSIGNED_SHORT&&(lt=i.R16UI),$===i.UNSIGNED_INT&&(lt=i.R32UI),$===i.BYTE&&(lt=i.R8I),$===i.SHORT&&(lt=i.R16I),$===i.INT&&(lt=i.R32I)),T===i.RG&&($===i.FLOAT&&(lt=i.RG32F),$===i.HALF_FLOAT&&(lt=i.RG16F),$===i.UNSIGNED_BYTE&&(lt=i.RG8),$===i.UNSIGNED_SHORT&&At&&(lt=At.RG16_EXT),$===i.SHORT&&At&&(lt=At.RG16_SNORM_EXT)),T===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RG8UI),$===i.UNSIGNED_SHORT&&(lt=i.RG16UI),$===i.UNSIGNED_INT&&(lt=i.RG32UI),$===i.BYTE&&(lt=i.RG8I),$===i.SHORT&&(lt=i.RG16I),$===i.INT&&(lt=i.RG32I)),T===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),$===i.UNSIGNED_INT&&(lt=i.RGB32UI),$===i.BYTE&&(lt=i.RGB8I),$===i.SHORT&&(lt=i.RGB16I),$===i.INT&&(lt=i.RGB32I)),T===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),$===i.UNSIGNED_INT&&(lt=i.RGBA32UI),$===i.BYTE&&(lt=i.RGBA8I),$===i.SHORT&&(lt=i.RGBA16I),$===i.INT&&(lt=i.RGBA32I)),T===i.RGB&&($===i.UNSIGNED_SHORT&&At&&(lt=At.RGB16_EXT),$===i.SHORT&&At&&(lt=At.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),T===i.RGBA){const ft=yt?_r:ae.getTransfer(ct);$===i.FLOAT&&(lt=i.RGBA32F),$===i.HALF_FLOAT&&(lt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(lt=ft===ge?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&At&&(lt=At.RGBA16_EXT),$===i.SHORT&&At&&(lt=At.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function S(U,T){let $;return U?T===null||T===ii||T===mo?$=i.DEPTH24_STENCIL8:T===Vn?$=i.DEPTH32F_STENCIL8:T===po&&($=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ii||T===mo?$=i.DEPTH_COMPONENT24:T===Vn?$=i.DEPTH_COMPONENT32F:T===po&&($=i.DEPTH_COMPONENT16),$}function b(U,T){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ke&&U.minFilter!==en?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function E(U){const T=U.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function y(U){const T=U.target;T.removeEventListener("dispose",y),P(T)}function w(U){const T=n.get(U);if(T.__webglInit===void 0)return;const $=U.source,K=d.get($);if(K){const ct=K[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&A(U),Object.keys(K).length===0&&d.delete($)}n.remove(U)}function A(U){const T=n.get(U);i.deleteTexture(T.__webglTexture);const $=U.source,K=d.get($);delete K[T.__cacheKey],r.memory.textures--}function P(U){const T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let ct=0;ct<T.__webglFramebuffer[K].length;ct++)i.deleteFramebuffer(T.__webglFramebuffer[K][ct]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=U.textures;for(let K=0,ct=$.length;K<ct;K++){const yt=n.get($[K]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),r.memory.textures--),n.remove($[K])}n.remove(U)}let L=0;function C(){L=0}function D(){return L}function I(U){L=U}function z(){const U=L;return U>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,U}function k(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function q(U,T){const $=n.get(U);if(U.isVideoTexture&&B(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const K=U.image;if(K===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt($,U,T);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+T)}function Y(U,T){const $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){dt($,U,T);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+T)}function J(U,T){const $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){dt($,U,T);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+T)}function j(U,T){const $=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){wt($,U,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+T)}const St={[fr]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},vt={[Ke]:i.NEAREST,[lf]:i.NEAREST_MIPMAP_NEAREST,[zo]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},kt={[df]:i.NEVER,[xf]:i.ALWAYS,[pf]:i.LESS,[Cc]:i.LEQUAL,[mf]:i.EQUAL,[Pc]:i.GEQUAL,[gf]:i.GREATER,[_f]:i.NOTEQUAL};function mt(U,T){if(T.type===Vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===en||T.magFilter===ya||T.magFilter===zo||T.magFilter===ts||T.minFilter===en||T.minFilter===ya||T.minFilter===zo||T.minFilter===ts)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,St[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,St[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,St[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,vt[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,kt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ke||T.minFilter!==zo&&T.minFilter!==ts||T.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function pt(U,T){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",E));const K=T.source;let ct=d.get(K);ct===void 0&&(ct={},d.set(K,ct));const yt=k(T);if(yt!==U.__cacheKey){ct[yt]===void 0&&(ct[yt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,$=!0),ct[yt].usedTimes++;const At=ct[U.__cacheKey];At!==void 0&&(ct[U.__cacheKey].usedTimes--,At.usedTimes===0&&A(T)),U.__cacheKey=yt,U.__webglTexture=ct[yt].texture}return $}function V(U,T,$){return Math.floor(Math.floor(U/$)/T)}function Q(U,T,$,K){const yt=U.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,$,K,T.data);else{yt.sort((Vt,Dt)=>Vt.start-Dt.start);let At=0;for(let Vt=1;Vt<yt.length;Vt++){const Dt=yt[At],Pt=yt[Vt],Wt=Dt.start+Dt.count,Yt=V(Pt.start,T.width,4),te=V(Dt.start,T.width,4);Pt.start<=Wt+1&&Yt===te&&V(Pt.start+Pt.count-1,T.width,4)===Yt?Dt.count=Math.max(Dt.count,Pt.start+Pt.count-Dt.start):(++At,yt[At]=Pt)}yt.length=At+1;const lt=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Vt=0,Dt=yt.length;Vt<Dt;Vt++){const Pt=yt[Vt],Wt=Math.floor(Pt.start/4),Yt=Math.ceil(Pt.count/4),te=Wt%T.width,X=Math.floor(Wt/T.width),Rt=Yt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,te,X,Rt,ut,$,K,T.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function dt(U,T,$){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);const ct=pt(U,T),yt=T.source;e.bindTexture(K,U.__webglTexture,i.TEXTURE0+$);const At=n.get(yt);if(yt.version!==At.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ut=ae.getPrimaries(ae.workingColorSpace),Lt=T.colorSpace===Ci?null:ae.getPrimaries(T.colorSpace),Ut=T.colorSpace===Ci||ut===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ft=g(T.image,!1,s.maxTextureSize);ft=Kt(T,ft);const Ct=o.convert(T.format,T.colorSpace),Vt=o.convert(T.type);let Dt=x(T.internalFormat,Ct,Vt,T.normalized,T.colorSpace,T.isVideoTexture);mt(K,T);let Pt;const Wt=T.mipmaps,Yt=T.isVideoTexture!==!0,te=At.__version===void 0||ct===!0,X=yt.dataReady,Rt=b(T,ft);if(T.isDepthTexture)Dt=S(T.format===es,T.type),te&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Dt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Ct,Vt,null));else if(T.isDataTexture)if(Wt.length>0){Yt&&te&&e.texStorage2D(i.TEXTURE_2D,Rt,Dt,Wt[0].width,Wt[0].height);for(let ut=0,Lt=Wt.length;ut<Lt;ut++)Pt=Wt[ut],Yt?X&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Ct,Vt,Pt.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,Pt.width,Pt.height,0,Ct,Vt,Pt.data);T.generateMipmaps=!1}else Yt?(te&&e.texStorage2D(i.TEXTURE_2D,Rt,Dt,ft.width,ft.height),X&&Q(T,ft,Ct,Vt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ft.width,ft.height,0,Ct,Vt,ft.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Yt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Dt,Wt[0].width,Wt[0].height,ft.depth);for(let ut=0,Lt=Wt.length;ut<Lt;ut++)if(Pt=Wt[ut],T.format!==Wn)if(Ct!==null)if(Yt){if(X)if(T.layerUpdates.size>0){const Ut=Ah(Pt.width,Pt.height,T.format,T.type);for(const N of T.layerUpdates){const it=Pt.data.subarray(N*Ut/Pt.data.BYTES_PER_ELEMENT,(N+1)*Ut/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,N,Pt.width,Pt.height,1,Ct,it)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,ft.depth,Ct,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,Pt.width,Pt.height,ft.depth,0,Pt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,ft.depth,Ct,Vt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Dt,Pt.width,Pt.height,ft.depth,0,Ct,Vt,Pt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Yt&&te&&e.texStorage2D(i.TEXTURE_2D,Rt,Dt,Wt[0].width,Wt[0].height);for(let ut=0,Lt=Wt.length;ut<Lt;ut++)Pt=Wt[ut],T.format!==Wn?Ct!==null?Yt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Dt,Pt.width,Pt.height,0,Pt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?X&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Ct,Vt,Pt.data):e.texImage2D(i.TEXTURE_2D,ut,Dt,Pt.width,Pt.height,0,Ct,Vt,Pt.data)}else if(T.isDataArrayTexture)if(Yt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Dt,ft.width,ft.height,ft.depth),X)if(T.layerUpdates.size>0){const ut=Ah(ft.width,ft.height,T.format,T.type);for(const Lt of T.layerUpdates){const Ut=ft.data.subarray(Lt*ut/ft.data.BYTES_PER_ELEMENT,(Lt+1)*ut/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,ft.width,ft.height,1,Ct,Vt,Ut)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Vt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,Ct,Vt,ft.data);else if(T.isData3DTexture)Yt?(te&&e.texStorage3D(i.TEXTURE_3D,Rt,Dt,ft.width,ft.height,ft.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Vt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,Ct,Vt,ft.data);else if(T.isFramebufferTexture){if(te)if(Yt)e.texStorage2D(i.TEXTURE_2D,Rt,Dt,ft.width,ft.height);else{let ut=ft.width,Lt=ft.height;for(let Ut=0;Ut<Rt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Dt,ut,Lt,0,Ct,Vt,null),ut>>=1,Lt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ft.parentNode!==ut){ut.appendChild(ft),f.add(T),ut.onpaint=Lt=>{const Ut=Lt.changedElements;for(const N of f)Ut.includes(N.image)&&(N.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{const Ut=i.RGBA,N=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,N,it,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Yt&&te){const ut=qt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Dt,ut.width,ut.height)}for(let ut=0,Lt=Wt.length;ut<Lt;ut++)Pt=Wt[ut],Yt?X&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ct,Vt,Pt):e.texImage2D(i.TEXTURE_2D,ut,Dt,Ct,Vt,Pt);T.generateMipmaps=!1}else if(Yt){if(te){const ut=qt(ft);e.texStorage2D(i.TEXTURE_2D,Rt,Dt,ut.width,ut.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Vt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Ct,Vt,ft);p(T)&&v(K),At.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function wt(U,T,$){if(T.image.length!==6)return;const K=pt(U,T),ct=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+$);const yt=n.get(ct);if(ct.version!==yt.__version||K===!0){e.activeTexture(i.TEXTURE0+$);const At=ae.getPrimaries(ae.workingColorSpace),lt=T.colorSpace===Ci?null:ae.getPrimaries(T.colorSpace),ft=T.colorSpace===Ci||At===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Ct=T.isCompressedTexture||T.image[0].isCompressedTexture,Vt=T.image[0]&&T.image[0].isDataTexture,Dt=[];for(let N=0;N<6;N++)!Ct&&!Vt?Dt[N]=g(T.image[N],!0,s.maxCubemapSize):Dt[N]=Vt?T.image[N].image:T.image[N],Dt[N]=Kt(T,Dt[N]);const Pt=Dt[0],Wt=o.convert(T.format,T.colorSpace),Yt=o.convert(T.type),te=x(T.internalFormat,Wt,Yt,T.normalized,T.colorSpace),X=T.isVideoTexture!==!0,Rt=yt.__version===void 0||K===!0,ut=ct.dataReady;let Lt=b(T,Pt);mt(i.TEXTURE_CUBE_MAP,T);let Ut;if(Ct){X&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,te,Pt.width,Pt.height);for(let N=0;N<6;N++){Ut=Dt[N].mipmaps;for(let it=0;it<Ut.length;it++){const ot=Ut[it];T.format!==Wn?Wt!==null?X?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,0,0,ot.width,ot.height,Wt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,te,ot.width,ot.height,0,ot.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,0,0,ot.width,ot.height,Wt,Yt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,te,ot.width,ot.height,0,Wt,Yt,ot.data)}}}else{if(Ut=T.mipmaps,X&&Rt){Ut.length>0&&Lt++;const N=qt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,te,N.width,N.height)}for(let N=0;N<6;N++)if(Vt){X?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Dt[N].width,Dt[N].height,Wt,Yt,Dt[N].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,te,Dt[N].width,Dt[N].height,0,Wt,Yt,Dt[N].data);for(let it=0;it<Ut.length;it++){const bt=Ut[it].image[N].image;X?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,0,0,bt.width,bt.height,Wt,Yt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,te,bt.width,bt.height,0,Wt,Yt,bt.data)}}else{X?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Wt,Yt,Dt[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,te,Wt,Yt,Dt[N]);for(let it=0;it<Ut.length;it++){const ot=Ut[it];X?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,0,0,Wt,Yt,ot.image[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,te,Wt,Yt,ot.image[N])}}}p(T)&&v(i.TEXTURE_CUBE_MAP),yt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function H(U,T,$,K,ct,yt){const At=o.convert($.format,$.colorSpace),lt=o.convert($.type),ft=x($.internalFormat,At,lt,$.normalized,$.colorSpace),Ct=n.get(T),Vt=n.get($);if(Vt.__renderTarget=T,!Ct.__hasExternalTextures){const Dt=Math.max(1,T.width>>yt),Pt=Math.max(1,T.height>>yt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,yt,ft,Dt,Pt,T.depth,0,At,lt,null):e.texImage2D(ct,yt,ft,Dt,Pt,0,At,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Ot(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ct,Vt.__webglTexture,0,Tt(T)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ct,Vt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(U,T,$){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){const K=T.depthTexture,ct=K&&K.isDepthTexture?K.type:null,yt=S(T.stencilBuffer,ct),At=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(T),yt,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(T),yt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,yt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,U)}else{const K=T.textures;for(let ct=0;ct<K.length;ct++){const yt=K[ct],At=o.convert(yt.format,yt.colorSpace),lt=o.convert(yt.type),ft=x(yt.internalFormat,At,lt,yt.normalized,yt.colorSpace);Ot(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(T),ft,T.width,T.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(T),ft,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ft,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(U,T,$){const K=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ct=n.get(T.depthTexture);if(ct.__renderTarget=T,(!ct.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),mt(i.TEXTURE_CUBE_MAP,T.depthTexture);const Ct=o.convert(T.depthTexture.format),Vt=o.convert(T.depthTexture.type);let Dt;T.depthTexture.format===Mi?Dt=i.DEPTH_COMPONENT24:T.depthTexture.format===es&&(Dt=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Dt,T.width,T.height,0,Ct,Vt,null)}}else q(T.depthTexture,0);const yt=ct.__webglTexture,At=Tt(T),lt=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,ft=T.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Mi)Ot(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,lt,yt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,ft,lt,yt,0);else if(T.depthTexture.format===es)Ot(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,lt,yt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,ft,lt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Z(U){const T=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const K=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",ct)};K.addEventListener("dispose",ct),T.__depthDisposeCallback=ct}T.__boundDepthTexture=K}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let K=0;K<6;K++)ht(T.__webglFramebuffer[K],U,K);else{const K=U.texture.mipmaps;K&&K.length>0?ht(T.__webglFramebuffer[0],U,0):ht(T.__webglFramebuffer,U,0)}else if($){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),at(T.__webglDepthbuffer[K],U,!1);else{const ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,yt)}}else{const K=U.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),at(T.__webglDepthbuffer,U,!1);else{const ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function F(U,T,$){const K=n.get(U);T!==void 0&&H(K.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Z(U)}function G(U){const T=U.texture,$=n.get(U),K=n.get(T);U.addEventListener("dispose",y);const ct=U.textures,yt=U.isWebGLCubeRenderTarget===!0,At=ct.length>1;if(At||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,r.memory.textures++),yt){$.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[lt]=[];for(let ft=0;ft<T.mipmaps.length;ft++)$.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else $.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)$.__webglFramebuffer[lt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(At)for(let lt=0,ft=ct.length;lt<ft;lt++){const Ct=n.get(ct[lt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),r.memory.textures++)}if(U.samples>0&&Ot(U)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let lt=0;lt<ct.length;lt++){const ft=ct[lt];$.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[lt]);const Ct=o.convert(ft.format,ft.colorSpace),Vt=o.convert(ft.type),Dt=x(ft.internalFormat,Ct,Vt,ft.normalized,ft.colorSpace,U.isXRRenderTarget===!0),Pt=Tt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Dt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,$.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),at($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),mt(i.TEXTURE_CUBE_MAP,T);for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)H($.__webglFramebuffer[lt][ft],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else H($.__webglFramebuffer[lt],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(T)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let lt=0,ft=ct.length;lt<ft;lt++){const Ct=ct[lt],Vt=n.get(Ct);let Dt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Vt.__webglTexture),mt(Dt,Ct),H($.__webglFramebuffer,U,Ct,i.COLOR_ATTACHMENT0+lt,Dt,0),p(Ct)&&v(Dt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(lt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),mt(lt,T),T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)H($.__webglFramebuffer[ft],U,T,i.COLOR_ATTACHMENT0,lt,ft);else H($.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,lt,0);p(T)&&v(lt),e.unbindTexture()}U.depthBuffer&&Z(U)}function tt(U){const T=U.textures;for(let $=0,K=T.length;$<K;$++){const ct=T[$];if(p(ct)){const yt=M(U),At=n.get(ct).__webglTexture;e.bindTexture(yt,At),v(yt),e.unbindTexture()}}}const rt=[],_t=[];function Et(U){if(U.samples>0){if(Ot(U)===!1){const T=U.textures,$=U.width,K=U.height;let ct=i.COLOR_BUFFER_BIT;const yt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(U),lt=T.length>1;if(lt)for(let Ct=0;Ct<T.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const ft=U.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Ct=0;Ct<T.length;Ct++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Ct]);const Vt=n.get(T[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,$,K,0,0,$,K,ct,i.NEAREST),l===!0&&(rt.length=0,_t.length=0,rt.push(i.COLOR_ATTACHMENT0+Ct),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(rt.push(yt),_t.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Ct=0;Ct<T.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,At.__webglColorRenderbuffer[Ct]);const Vt=n.get(T[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Tt(U){return Math.min(s.maxSamples,U.samples)}function Ot(U){const T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function B(U){const T=r.render.frame;h.get(U)!==T&&(h.set(U,T),U.update())}function Kt(U,T){const $=U.colorSpace,K=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==gr&&$!==Ci&&(ae.getTransfer($)===ge?(K!==Wn||ct!==Tn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",$)),T}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=C,this.getTextureUnits=D,this.setTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=F,this.setupRenderTarget=G,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function nd(i,t){function e(n,s=Ci){let o;const r=ae.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===f0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===d0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===h0)return i.BYTE;if(n===u0)return i.SHORT;if(n===po)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===p0)return i.ALPHA;if(n===m0)return i.RGB;if(n===Wn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Ec)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===jo||n===tr||n===er||n===nr)if(r===ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===jo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===jo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===za||n===ka||n===Ha)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ba)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===dr||n===Ya)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ga||n===Va)return r===ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Wa)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return o.COMPRESSED_R11_EAC;if(n===qa)return o.COMPRESSED_SIGNED_R11_EAC;if(n===dr)return o.COMPRESSED_RG11_EAC;if(n===Ya)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===$a||n===Ka||n===Ja||n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===oc||n===rc||n===ac)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Za)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cc||n===lc||n===hc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===cc)return r===ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===fc||n===pr||n===dc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===uc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const U3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N3=`
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

}`;class F3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new T0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:U3,fragmentShader:N3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O3 extends ki{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new F3,p={},v=e.getContextAttributes();let M=null,x=null;const S=[],b=[],E=new xt;let y=null,w=null;const A=new tn;A.viewport=new Ie;const P=new tn;P.viewport=new Ie;const L=[A,P],C=new Zf;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=S[V];return Q===void 0&&(Q=new wa,S[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=S[V];return Q===void 0&&(Q=new wa,S[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=S[V];return Q===void 0&&(Q=new wa,S[V]=Q),Q.getHandSpace()};function z(V){const Q=b.indexOf(V.inputSource);if(Q===-1)return;const dt=S[Q];dt!==void 0&&(dt.update(V.inputSource,V.frame,c||r),dt.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",q);for(let V=0;V<S.length;V++){const Q=b[V];Q!==null&&(b[V]=null,S[V].disconnect(Q))}D=null,I=null,g.reset();for(const V in p)delete p[V];if(t.setRenderTarget(M),d=null,u=null,f=null,s=null,x=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),w!==null){const V=w.camera;V.fov=w.fov,V.zoom=w.zoom,V.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,wt=null,H=null;v.depth&&(H=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=v.stencil?es:Mi,wt=v.stencil?mo:ii);const at={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:o};f=this.getBinding(),u=f.createProjectionLayer(at),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Xn(u.textureWidth,u.textureHeight,{format:Wn,type:Tn,depthTexture:new _o(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Xn(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(V){for(let Q=0;Q<V.removed.length;Q++){const dt=V.removed[Q],wt=b.indexOf(dt);wt>=0&&(b[wt]=null,S[wt].disconnect(dt))}for(let Q=0;Q<V.added.length;Q++){const dt=V.added[Q];let wt=b.indexOf(dt);if(wt===-1){for(let at=0;at<S.length;at++)if(at>=b.length){b.push(dt),wt=at;break}else if(b[at]===null){b[at]=dt,wt=at;break}if(wt===-1)break}const H=S[wt];H&&H.connect(dt)}}const Y=new O,J=new O;function j(V,Q,dt){Y.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(dt.matrixWorld);const wt=Y.distanceTo(J),H=Q.projectionMatrix.elements,at=dt.projectionMatrix.elements,ht=H[14]/(H[10]-1),Z=H[14]/(H[10]+1),F=(H[9]+1)/H[5],G=(H[9]-1)/H[5],tt=(H[8]-1)/H[0],rt=(at[8]+1)/at[0],_t=ht*tt,Et=ht*rt,Tt=wt/(-tt+rt),Ot=Tt*-tt;if(Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ot),V.translateZ(Tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),H[10]===-1)V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const B=ht+Tt,Kt=Z+Tt,qt=_t-Ot,U=Et+(wt-Ot),T=F*Z/Kt*B,$=G*Z/Kt*B;V.projectionMatrix.makePerspective(qt,U,T,$,B,Kt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function St(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Q=V.near,dt=V.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),C.near=P.near=A.near=Q,C.far=P.far=A.far=dt,(D!==C.near||I!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,I=C.far),C.layers.mask=V.layers.mask|6,A.layers.mask=C.layers.mask&-5,P.layers.mask=C.layers.mask&-3;const wt=V.parent,H=C.cameras;St(C,wt);for(let at=0;at<H.length;at++)St(H[at],wt);H.length===2?j(C,A,P):C.projectionMatrix.copy(A.projectionMatrix),w===null&&V.isPerspectiveCamera&&(w={camera:V,fov:V.fov,zoom:V.zoom}),vt(V,C,wt)};function vt(V,Q,dt){dt===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(dt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Mr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(V){return p[V]};let kt=null;function mt(V,Q){if(h=Q.getViewerPose(c||r),m=Q,h!==null){const dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let wt=!1;dt.length!==C.cameras.length&&(C.cameras.length=0,wt=!0);for(let Z=0;Z<dt.length;Z++){const F=dt[Z];let G=null;if(d!==null)G=d.getViewport(F);else{const rt=f.getViewSubImage(u,F);G=rt.viewport,Z===0&&(t.setRenderTargetTextures(x,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(x))}let tt=L[Z];tt===void 0&&(tt=new tn,tt.layers.enable(Z),tt.viewport=new Ie,L[Z]=tt),tt.matrix.fromArray(F.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(F.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(G.x,G.y,G.width,G.height),Z===0&&(C.matrix.copy(tt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),wt===!0&&C.cameras.push(tt)}const H=s.enabledFeatures;if(H&&H.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Z=f.getDepthInformation(dt[0]);Z&&Z.isValid&&Z.texture&&g.init(Z,s.renderState)}if(H&&H.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Z=0;Z<dt.length;Z++){const F=dt[Z].camera;if(F){let G=p[F];G||(G=new T0,p[F]=G);const tt=f.getCameraImage(F);G.sourceTexture=tt}}}}for(let dt=0;dt<S.length;dt++){const wt=b[dt],H=S[dt];wt!==null&&H!==void 0&&H.update(wt,Q,c||r)}kt&&kt(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const pt=new Kf;pt.setAnimationLoop(mt),this.setAnimationLoop=function(V){kt=V},this.dispose=function(){}}}const B3=new be,id=new jt;id.set(-1,0,0,0,1,0,0,0,1);function z3(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Of(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,M,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,x=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(B3.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(id),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k3(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",v));const E=S.program;n.updateUBOMapping(x,E);const y=t.render.frame;o[x.id]!==y&&(u(x),o[x.id]=y)}function h(x){const S=f();x.__bindingPointIndex=S;const b=i.createBuffer(),E=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=s[x.id],b=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,w=b.length;y<w;y++){const A=b[y];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)d(A[P],y,P,E);else d(A,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,S,b,E){if(_(x,S,b,E)===!0){const y=x.__offset,w=x.value;if(Array.isArray(w)){let A=0;for(let P=0;P<w.length;P++){const L=w[P],C=p(L);m(L,x.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function m(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function _(x,S,b,E){const y=x.value,w=S+"_"+b;if(E[w]===void 0)return typeof y=="number"||typeof y=="boolean"?E[w]=y:ArrayBuffer.isView(y)?E[w]=y.slice():E[w]=y.clone(),!0;{const A=E[w];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return E[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(x){const S=x.uniforms;let b=0;const E=16;for(let w=0,A=S.length;w<A;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,C=P.length;L<C;L++){const D=P[L],I=Array.isArray(D.value)?D.value:[D.value];for(let z=0,k=I.length;z<k;z++){const q=I[z],Y=p(q),J=b%E,j=J%Y.boundary,St=J+j;b+=j,St!==0&&E-St<Y.storage&&(b+=E-St),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=Y.storage}}}const y=b%E;return y>0&&(b+=E-y),x.__size=b,x.__cache={},this}function p(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",x),S}function v(x){const S=x.target;S.removeEventListener("dispose",v);const b=r.indexOf(S.__bindingPointIndex);r.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function M(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:M}}const H3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function G3(){return li===null&&(li=new Ic(H3,16,16,rs,si),li.name="DFG_LUT",li.minFilter=en,li.magFilter=en,li.wrapS=mi,li.wrapT=mi,li.generateMipmaps=!1,li.needsUpdate=!0),li}class sd{constructor(t={}){const{canvas:e=vf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Tn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const _=d,g=new Set([Rc,Ac,Tc]),p=new Set([Tn,ii,po,mo,bc,wc]),v=new Uint32Array(4),M=new Int32Array(4),x=new O;let S=null,b=null;const E=[],y=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1,L=null,C=null,D=null,I=null;this._outputColorSpace=je;let z=0,k=0,q=null,Y=-1,J=null;const j=new Ie,St=new Ie;let vt=null;const kt=new Zt(0);let mt=0,pt=e.width,V=e.height,Q=1,dt=null,wt=null;const H=new Ie(0,0,pt,V),at=new Ie(0,0,pt,V);let ht=!1;const Z=new Uc;let F=!1,G=!1;const tt=new be,rt=new O,_t=new Ie,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Ot(){return q===null?Q:1}let B=n;function Kt(R,W){return e.getContext(R,W)}let qt,U,T,$,K,ct,yt,At,lt,ft,Ct,Vt,Dt,Pt,Wt,Yt,te,X,Rt,ut,Lt,Ut,N;try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",$t,!1),B===null){const W="webgl2";if(B=Kt(W,R),B===null)throw Kt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(R){throw e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),le("WebGLRenderer: "+R.message),R}function it(){qt=new Vm(B),qt.init(),Lt=new nd(B,qt),U=new Im(B,qt,t,Lt),T=new D3(B,qt),U.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),C=B.createFramebuffer(),D=B.createFramebuffer(),I=B.createFramebuffer(),$=new qm(B),K=new x3,ct=new I3(B,qt,T,K,U,Lt,$),yt=new Gm(A),At=new Zp(B),Ut=new Lm(B,At),lt=new Wm(B,At,$,Ut),ft=new Zm(B,lt,At,Ut,$),X=new Ym(B,U,ct),Wt=new Um(K),Ct=new _3(A,yt,qt,U,Ut,Wt),Vt=new z3(A,K),Dt=new M3,Pt=new T3(qt),te=new Pm(A,yt,T,ft,m,l),Yt=new L3(A,ft,U),N=new k3(B,$,U,T),Rt=new Dm(B,qt,$),ut=new Xm(B,qt,$),$.programs=Ct.programs,A.capabilities=U,A.extensions=qt,A.properties=K,A.renderLists=Dt,A.shadowMap=Yt,A.state=T,A.info=$}_!==Tn&&(w=new Km(_,e.width,e.height,a,s,o));const ot=new O3(A,B);this.xr=ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(pt,V,!1))},this.getSize=function(R){return R.set(pt,V)},this.setSize=function(R,W,st=!0){if(ot.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=R,V=W,e.width=Math.floor(R*Q),e.height=Math.floor(W*Q),st===!0&&(e.style.width=R+"px",e.style.height=W+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(pt*Q,V*Q).floor()},this.setDrawingBufferSize=function(R,W,st){pt=R,V=W,Q=st,e.width=Math.floor(R*st),e.height=Math.floor(W*st),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(_===Tn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(j)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,W,st,et){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,W,st,et),T.viewport(j.copy(H).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(at)},this.setScissor=function(R,W,st,et){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,W,st,et),T.scissor(St.copy(at).multiplyScalar(Q).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){T.setScissorTest(ht=R)},this.setOpaqueSort=function(R){dt=R},this.setTransparentSort=function(R){wt=R},this.getClearColor=function(R){return R.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,st=!0){let et=0;if(R){let nt=!1;if(q!==null){const Ft=q.texture.format;nt=g.has(Ft)}if(nt){const Ft=q.texture.type,zt=p.has(Ft),Nt=te.getClearColor(),Ht=te.getClearAlpha(),Xt=Nt.r,ne=Nt.g,re=Nt.b;zt?(v[0]=Xt,v[1]=ne,v[2]=re,v[3]=Ht,B.clearBufferuiv(B.COLOR,0,v)):(M[0]=Xt,M[1]=ne,M[2]=re,M[3]=Ht,B.clearBufferiv(B.COLOR,0,M))}else et|=B.COLOR_BUFFER_BIT}W&&(et|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(et|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&B.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",$t,!1),te.dispose(),Dt.dispose(),Pt.dispose(),K.dispose(),yt.dispose(),ft.dispose(),Ut.dispose(),N.dispose(),Ct.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",dn),ot.removeEventListener("sessionend",yi),On.stop()};function bt(R){R.preventDefault(),vr("WebGLRenderer: Context Lost."),P=!0}function Mt(){vr("WebGLRenderer: Context Restored."),P=!1;const R=$.autoReset,W=Yt.enabled,st=Yt.autoUpdate,et=Yt.needsUpdate,nt=Yt.type;it(),$.autoReset=R,Yt.enabled=W,Yt.autoUpdate=st,Yt.needsUpdate=et,Yt.type=nt}function $t(R){le("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Jt(R){const W=R.target;W.removeEventListener("dispose",Jt),ue(W)}function ue(R){de(R),K.remove(R)}function de(R){const W=K.get(R).programs;W!==void 0&&(W.forEach(function(st){Ct.releaseProgram(st)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,st,et,nt,Ft){W===null&&(W=Et);const zt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Nt=Nr(R,W,st,et,nt);T.setMaterial(et,zt);let Ht=st.index,Xt=1;if(et.wireframe===!0){if(Ht=lt.getWireframeAttribute(st),Ht===void 0)return;Xt=2}const ne=st.drawRange,re=st.attributes.position;let Gt=ne.start*Xt,me=(ne.start+ne.count)*Xt;Ft!==null&&(Gt=Math.max(Gt,Ft.start*Xt),me=Math.min(me,(Ft.start+Ft.count)*Xt)),Ht!==null?(Gt=Math.max(Gt,0),me=Math.min(me,Ht.count)):re!=null&&(Gt=Math.max(Gt,0),me=Math.min(me,re.count));const ke=me-Gt;if(ke<0||ke===1/0)return;Ut.setup(nt,et,Nt,st,Ht);let Re,we=Rt;if(Ht!==null&&(Re=At.get(Ht),we=ut,we.setIndex(Re)),nt.isMesh)et.wireframe===!0?(T.setLineWidth(et.wireframeLinewidth*Ot()),we.setMode(B.LINES)):we.setMode(B.TRIANGLES);else if(nt.isLine){let nn=et.linewidth;nn===void 0&&(nn=1),T.setLineWidth(nn*Ot()),nt.isLineSegments?we.setMode(B.LINES):nt.isLineLoop?we.setMode(B.LINE_LOOP):we.setMode(B.LINE_STRIP)}else nt.isPoints?we.setMode(B.POINTS):nt.isSprite&&we.setMode(B.TRIANGLES);if(nt.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))we.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const nn=nt._multiDrawStarts,Bt=nt._multiDrawCounts,pn=nt._multiDrawCount,fe=Ht?At.get(Ht).bytesPerElement:1,Bn=K.get(et).currentProgram.getUniforms();for(let ai=0;ai<pn;ai++)Bn.setValue(B,"_gl_DrawID",ai),we.render(nn[ai]/fe,Bt[ai])}else if(nt.isInstancedMesh)we.renderInstances(Gt,ke,nt.count);else if(st.isInstancedBufferGeometry){const nn=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Bt=Math.min(st.instanceCount,nn);we.renderInstances(Gt,ke,Bt)}else we.render(Gt,ke)};function _e(R,W,st,et){L!==null&&R.isNodeMaterial&&L.setObject(et,R),F===!0&&Wt.setState(R,st,!1),R.transparent===!0&&R.side===hn&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,Yn(R,W,et),R.side=ei,R.needsUpdate=!0,Yn(R,W,et),R.side=hn):Yn(R,W,et)}this.compile=function(R,W,st=null){st===null&&(st=R),L!==null&&L.renderStart(R,W,st),b=Pt.get(st),b.init(W),y.push(b),st.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),R!==st&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),G=this.localClippingEnabled,F=Wt.init(this.clippingPlanes,G),F===!0&&Wt.setGlobalState(this.clippingPlanes,W),L!==null&&Yt.render(b.state.shadowsArray,st,W);const et=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Ft=nt.material;if(Ft)if(Array.isArray(Ft))for(let zt=0;zt<Ft.length;zt++){const Nt=Ft[zt];_e(Nt,st,W,nt),et.add(Nt)}else _e(Ft,st,W,nt),et.add(Ft)}),b=y.pop(),L!==null&&L.renderEnd(),et},this.compileAsync=function(R,W,st=null){const et=this.compile(R,W,st);return new Promise(nt=>{function Ft(){if(et.forEach(function(zt){const Ht=K.get(zt).currentProgram;(Ht===void 0||Ht.isReady())&&et.delete(zt)}),et.size===0){nt(R);return}setTimeout(Ft,10)}qt.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let De=null;function Cn(R){De&&De(R)}function dn(){On.stop()}function yi(){On.start()}const On=new Kf;On.setAnimationLoop(Cn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(R){De=R,ot.setAnimationLoop(R),R===null?On.stop():On.start()},ot.addEventListener("sessionstart",dn),ot.addEventListener("sessionend",yi),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(R,W);const st=ot.enabled===!0&&ot.isPresenting===!0,et=w!==null&&(q===null||st)&&w.begin(A,q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,q),b=Pt.get(R,y.length),b.init(W),b.state.textureUnits=ct.getTextureUnits(),y.push(b),tt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(tt,ti,W.reversedDepth),G=this.localClippingEnabled,F=Wt.init(this.clippingPlanes,G),S=Dt.get(R,E.length),S.init(),E.push(S),ot.enabled===!0&&ot.isPresenting===!0){const zt=A.xr.getDepthSensingMesh();zt!==null&&ls(zt,W,-1/0,A.sortObjects)}ls(R,W,0,A.sortObjects),S.finish(),L!==null&&L.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(dt,wt),Tt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Tt&&te.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),F===!0&&Wt.beginShadows();const nt=b.state.shadowsArray;if(Yt.render(nt,R,W),F===!0&&Wt.endShadows(),(et&&w.hasRenderPass())===!1){const zt=S.opaque,Nt=S.transmissive;if(b.setupLights(),W.isArrayCamera){const Ht=W.cameras;if(Nt.length>0)for(let Xt=0,ne=Ht.length;Xt<ne;Xt++){const re=Ht[Xt];Ir(zt,Nt,R,re)}Tt&&te.render(R);for(let Xt=0,ne=Ht.length;Xt<ne;Xt++){const re=Ht[Xt];Dr(S,R,re,re.viewport)}}else Nt.length>0&&Ir(zt,Nt,R,W),Tt&&te.render(R),Dr(S,R,W)}q!==null&&k===0&&(ct.updateMultisampleRenderTarget(q),ct.updateRenderTargetMipmap(q)),et&&w.end(A),R.isScene===!0&&R.onAfterRender(A,R,W),Ut.resetDefaultState(),Y=-1,J=null,y.pop(),y.length>0?(b=y[y.length-1],ct.setTextureUnits(b.state.textureUnits),F===!0&&Wt.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,L!==null&&L.renderEnd()};function ls(R,W,st,et){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Z)){et&&_t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(tt);const zt=ft.update(R),Nt=R.material;Nt.visible&&S.push(R,zt,Nt,st,_t.z,null,W)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Z))){const zt=ft.update(R),Nt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_t.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),_t.copy(zt.boundingSphere.center)),_t.applyMatrix4(R.matrixWorld).applyMatrix4(tt)),Array.isArray(Nt)){const Ht=zt.groups;for(let Xt=0,ne=Ht.length;Xt<ne;Xt++){const re=Ht[Xt],Gt=Nt[re.materialIndex];Gt&&Gt.visible&&S.push(R,zt,Gt,st,_t.z,re,W)}}else Nt.visible&&S.push(R,zt,Nt,st,_t.z,null,W)}}const Ft=R.children;for(let zt=0,Nt=Ft.length;zt<Nt;zt++)ls(Ft[zt],W,st,et)}function Dr(R,W,st,et){const{opaque:nt,transmissive:Ft,transparent:zt}=R;b.setupLightsView(st),F===!0&&Wt.setGlobalState(A.clippingPlanes,st),et&&T.viewport(j.copy(et)),nt.length>0&&Ts(nt,W,st),Ft.length>0&&Ts(Ft,W,st),zt.length>0&&Ts(zt,W,st),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ir(R,W,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[et.id]===void 0){const Gt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[et.id]=new Xn(1,1,{generateMipmaps:!0,type:Gt?si:Tn,minFilter:ts,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const Ft=b.state.transmissionRenderTarget[et.id],zt=et.viewport||j;Ft.setSize(zt.z*A.transmissionResolutionScale,zt.w*A.transmissionResolutionScale);const Nt=A.getRenderTarget(),Ht=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(Ft),A.getClearColor(kt),mt=A.getClearAlpha(),mt<1&&A.setClearColor(16777215,.5),A.clear(),Tt&&te.render(st);const ne=A.toneMapping;A.toneMapping=ni;const re=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),b.setupLightsView(et),F===!0&&Wt.setGlobalState(A.clippingPlanes,et),Ts(R,st,et),ct.updateMultisampleRenderTarget(Ft),ct.updateRenderTargetMipmap(Ft),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let me=0,ke=W.length;me<ke;me++){const Re=W[me],{object:we,geometry:nn,material:Bt,group:pn}=Re;if(Bt.side===hn&&we.layers.test(et.layers)){const fe=Bt.side;Bt.side=fn,Bt.needsUpdate=!0,Eo(we,st,et,nn,Bt,pn),Bt.side=fe,Bt.needsUpdate=!0,Gt=!0}}Gt===!0&&(ct.updateMultisampleRenderTarget(Ft),ct.updateRenderTargetMipmap(Ft))}A.setRenderTarget(Nt,Ht,Xt),A.setClearColor(kt,mt),re!==void 0&&(et.viewport=re),A.toneMapping=ne}function Ts(R,W,st){const et=W.isScene===!0?W.overrideMaterial:null;for(let nt=0,Ft=R.length;nt<Ft;nt++){const zt=R[nt],{object:Nt,geometry:Ht,group:Xt}=zt;let ne=zt.material;ne.allowOverride===!0&&et!==null&&(ne=et),Nt.layers.test(st.layers)&&Eo(Nt,W,st,Ht,ne,Xt)}}function Eo(R,W,st,et,nt,Ft){L!==null&&nt.isNodeMaterial&&L.setObject(R,nt),R.onBeforeRender(A,W,st,et,nt,Ft),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(A,W,st,et,R,Ft),nt.transparent===!0&&nt.side===hn&&nt.forceSinglePass===!1?(nt.side=fn,nt.needsUpdate=!0,A.renderBufferDirect(st,W,et,nt,R,Ft),nt.side=ei,nt.needsUpdate=!0,A.renderBufferDirect(st,W,et,nt,R,Ft),nt.side=hn):A.renderBufferDirect(st,W,et,nt,R,Ft),R.onAfterRender(A,W,st,et,nt,Ft)}function Yn(R,W,st){W.isScene!==!0&&(W=Et);const et=K.get(R),nt=b.state.lights,Ft=b.state.shadowsArray,zt=nt.state.version,Nt=Ct.getParameters(R,nt.state,Ft,W,st,b.state.lightProbeGridArray),Ht=Ct.getProgramCacheKey(Nt);let Xt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,et.fog=W.fog;const ne=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=yt.get(R.envMap||et.environment,ne),et.envMapRotation=et.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Jt),Xt=new Map,et.programs=Xt);let re=Xt.get(Ht);if(re!==void 0){if(et.currentProgram===re&&et.lightsStateVersion===zt)return Hi(R,Nt),re}else Nt.uniforms=Ct.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,st,Nt),R.onBeforeCompile(Nt,A),re=Ct.acquireProgram(Nt,Ht),Xt.set(Ht,re),et.uniforms=Nt.uniforms;const Gt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=Wt.uniform),Hi(R,Nt),et.needsLights=Pd(R),et.lightsStateVersion=zt,et.needsLights&&(Gt.ambientLightColor.value=nt.state.ambient,Gt.lightProbe.value=nt.state.probe,Gt.sunLights.value=nt.state.sun,Gt.sunLightShadows.value=nt.state.sunShadow,Gt.directionalLights.value=nt.state.directional,Gt.directionalLightShadows.value=nt.state.directionalShadow,Gt.spotLights.value=nt.state.spot,Gt.spotLightShadows.value=nt.state.spotShadow,Gt.rectAreaLights.value=nt.state.rectArea,Gt.ltc_1.value=nt.state.rectAreaLTC1,Gt.ltc_2.value=nt.state.rectAreaLTC2,Gt.pointLights.value=nt.state.point,Gt.pointLightShadows.value=nt.state.pointShadow,Gt.hemisphereLights.value=nt.state.hemi,Gt.sunShadowMatrix.value=nt.state.sunShadowMatrix,Gt.sunShadowCascade.value=nt.state.sunShadowCascade,Gt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Gt.spotLightMatrix.value=nt.state.spotLightMatrix,Gt.spotLightMap.value=nt.state.spotLightMap,Gt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=b.state.lightProbeGridArray.length>0,et.currentProgram=re,et.uniformsList=null,re}function bi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ta.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Hi(R,W){const st=K.get(R);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function Ur(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let st=0,et=R.length;st<et;st++){const nt=R[st];if(nt.texture!==null&&nt.boundingBox.containsPoint(x))return nt}return null}function Nr(R,W,st,et,nt){W.isScene!==!0&&(W=Et),ct.resetTextureUnits();const Ft=W.fog,zt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?W.environment:null,Nt=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ae.workingColorSpace,Ht=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Xt=yt.get(et.envMap||zt,Ht),ne=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,re=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Gt=!!st.morphAttributes.position,me=!!st.morphAttributes.normal,ke=!!st.morphAttributes.color;let Re=ni;et.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Re=A.toneMapping);const we=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,nn=we!==void 0?we.length:0,Bt=K.get(et),pn=b.state.lights;if(F===!0&&(G===!0||R!==J)){const Te=R===J&&et.id===Y;Wt.setState(et,R,Te)}let fe=!1;et.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==pn.state.version||Bt.outputColorSpace!==Nt||nt.isBatchedMesh&&Bt.batching===!1||!nt.isBatchedMesh&&Bt.batching===!0||nt.isBatchedMesh&&Bt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Bt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Bt.instancing===!1||!nt.isInstancedMesh&&Bt.instancing===!0||nt.isSkinnedMesh&&Bt.skinning===!1||!nt.isSkinnedMesh&&Bt.skinning===!0||nt.isInstancedMesh&&Bt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Bt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Bt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Bt.instancingMorph===!1&&nt.morphTexture!==null||Bt.envMap!==Xt||et.fog===!0&&Bt.fog!==Ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Wt.numPlanes||Bt.numIntersection!==Wt.numIntersection)||Bt.vertexAlphas!==ne||Bt.vertexTangents!==re||Bt.morphTargets!==Gt||Bt.morphNormals!==me||Bt.morphColors!==ke||Bt.toneMapping!==Re||Bt.morphTargetsCount!==nn||!!Bt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Bt.__version=et.version);let Bn=Bt.currentProgram;fe===!0&&(Bn=Yn(et,W,nt),L&&et.isNodeMaterial&&L.onUpdateProgram(et,Bn,Bt));let ai=!1,Gi=!1,As=!1;const ye=Bn.getUniforms(),Oe=Bt.uniforms;if(T.useProgram(Bn.program)&&(ai=!0,Gi=!0,As=!0),et.id!==Y&&(Y=et.id,Gi=!0),Bt.needsLights){const Te=Ur(b.state.lightProbeGridArray,nt);Bt.lightProbeGrid!==Te&&(Bt.lightProbeGrid=Te,Gi=!0)}if(ai||J!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ye.setValue(B,"projectionMatrix",R.projectionMatrix),ye.setValue(B,"viewMatrix",R.matrixWorldInverse);const Wi=ye.map.cameraPosition;Wi!==void 0&&Wi.setValue(B,rt.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&ye.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ye.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,Gi=!0,As=!0)}if(Bt.needsLights&&(pn.state.sunShadowMap.length>0&&ye.setValue(B,"sunShadowMap",pn.state.sunShadowMap,ct),pn.state.directionalShadowMap.length>0&&ye.setValue(B,"directionalShadowMap",pn.state.directionalShadowMap,ct),pn.state.spotShadowMap.length>0&&ye.setValue(B,"spotShadowMap",pn.state.spotShadowMap,ct),pn.state.pointShadowMap.length>0&&ye.setValue(B,"pointShadowMap",pn.state.pointShadowMap,ct)),nt.isSkinnedMesh){ye.setOptional(B,nt,"bindMatrix"),ye.setOptional(B,nt,"bindMatrixInverse");const Te=nt.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ye.setValue(B,"boneTexture",Te.boneTexture,ct))}nt.isBatchedMesh&&(ye.setOptional(B,nt,"batchingTexture"),ye.setValue(B,"batchingTexture",nt._matricesTexture,ct),ye.setOptional(B,nt,"batchingIdTexture"),ye.setValue(B,"batchingIdTexture",nt._indirectTexture,ct),ye.setOptional(B,nt,"batchingColorTexture"),nt._colorsTexture!==null&&ye.setValue(B,"batchingColorTexture",nt._colorsTexture,ct));const Vi=st.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&X.update(nt,st,Bn),(Gi||Bt.receiveShadow!==nt.receiveShadow)&&(Bt.receiveShadow=nt.receiveShadow,ye.setValue(B,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&W.environment!==null&&(Oe.envMapIntensity.value=W.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=G3()),Gi){if(ye.setValue(B,"toneMappingExposure",A.toneMappingExposure),Bt.needsLights&&Cd(Oe,As),Ft&&et.fog===!0&&Vt.refreshFogUniforms(Oe,Ft),Vt.refreshMaterialUniforms(Oe,et,Q,V,b.state.transmissionRenderTarget[R.id]),Bt.needsLights&&Bt.lightProbeGrid){const Te=Bt.lightProbeGrid;Oe.probesSH.value=Te.texture,Oe.probesMin.value.copy(Te.boundingBox.min),Oe.probesMax.value.copy(Te.boundingBox.max),Oe.probesResolution.value.copy(Te.resolution)}Ta.upload(B,bi(Bt),Oe,ct)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ta.upload(B,bi(Bt),Oe,ct),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ye.setValue(B,"center",nt.center),ye.setValue(B,"modelViewMatrix",nt.modelViewMatrix),ye.setValue(B,"normalMatrix",nt.normalMatrix),ye.setValue(B,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const Te=et.uniformsGroups;for(let Wi=0,Rs=Te.length;Wi<Rs;Wi++){const Z0=Te[Wi];N.update(Z0,Bn),N.bind(Z0,Bn)}}return Bn}function Cd(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Pd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,W,st){const et=K.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),K.get(R.texture).__webglTexture=W,K.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const st=K.get(R);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,st=0){q=R,z=W,k=st;let et=null,nt=!1,Ft=!1;if(R){const Nt=K.get(R);if(Nt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(B.FRAMEBUFFER,Nt.__webglFramebuffer),j.copy(R.viewport),St.copy(R.scissor),vt=R.scissorTest,T.viewport(j),T.scissor(St),T.setScissorTest(vt),Y=-1;return}else if(Nt.__webglFramebuffer===void 0)ct.setupRenderTarget(R);else if(Nt.__hasExternalTextures)ct.rebindTextures(R,K.get(R.texture).__webglTexture,K.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(Nt.__boundDepthTexture!==ne){if(ne!==null&&K.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ft=!0);const Xt=K.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[W])?et=Xt[W][st]:et=Xt[W],nt=!0):R.samples>0&&ct.useMultisampledRTT(R)===!1?et=K.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?et=Xt[st]:et=Xt,j.copy(R.viewport),St.copy(R.scissor),vt=R.scissorTest}else j.copy(H).multiplyScalar(Q).floor(),St.copy(at).multiplyScalar(Q).floor(),vt=ht;if(st!==0&&(et=C),T.bindFramebuffer(B.FRAMEBUFFER,et)&&T.drawBuffers(R,et),T.viewport(j),T.scissor(St),T.setScissorTest(vt),nt){const Nt=K.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,st)}else if(Ft){const Nt=W;for(let Ht=0;Ht<R.textures.length;Ht++){const Xt=K.get(R.textures[Ht]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,st,Nt)}}else if(R!==null&&st!==0){const Nt=K.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nt.__webglTexture,st)}Y=-1};function Y0(R){const W=K.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=U.textureFormatReadable(R.format),W.__typeReadable=U.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,st,et,nt,Ft,zt,Nt=0){if(!(R&&R.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht){T.bindFramebuffer(B.FRAMEBUFFER,Ht);try{const Xt=R.textures[Nt],ne=Xt.format,re=Xt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt);const Gt=Y0(Xt);if(Gt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-et&&st>=0&&st<=R.height-nt&&B.readPixels(W,st,et,nt,Lt.convert(ne),Lt.convert(re),Ft)}finally{const Xt=q!==null?K.get(q).__webglFramebuffer:null;T.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,W,st,et,nt,Ft,zt,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=K.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Ht=Ht[zt]),Ht)if(W>=0&&W<=R.width-et&&st>=0&&st<=R.height-nt){T.bindFramebuffer(B.FRAMEBUFFER,Ht);const Xt=R.textures[Nt],ne=Xt.format,re=Xt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Nt);const Gt=Y0(Xt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,me),B.bufferData(B.PIXEL_PACK_BUFFER,Ft.byteLength,B.STREAM_READ),B.readPixels(W,st,et,nt,Lt.convert(ne),Lt.convert(re),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const ke=q!==null?K.get(q).__webglFramebuffer:null;T.bindFramebuffer(B.FRAMEBUFFER,ke);const Re=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Dd(B,Re,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,me),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ft),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(me),B.deleteSync(Re),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,st=0){const et=Math.pow(2,-st),nt=Math.floor(R.image.width*et),Ft=Math.floor(R.image.height*et),zt=W!==null?W.x:0,Nt=W!==null?W.y:0;ct.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,st,0,0,zt,Nt,nt,Ft),T.unbindTexture()},this.copyTextureToTexture=function(R,W,st=null,et=null,nt=0,Ft=0){let zt,Nt,Ht,Xt,ne,re,Gt,me,ke;const Re=R.isCompressedTexture?R.mipmaps[Ft]:R.image;if(st!==null)zt=st.max.x-st.min.x,Nt=st.max.y-st.min.y,Ht=st.isBox3?st.max.z-st.min.z:1,Xt=st.min.x,ne=st.min.y,re=st.isBox3?st.min.z:0;else{const Oe=Math.pow(2,-nt);zt=Math.floor(Re.width*Oe),Nt=Math.floor(Re.height*Oe),R.isDataArrayTexture?Ht=Re.depth:R.isData3DTexture?Ht=Math.floor(Re.depth*Oe):Ht=1,Xt=0,ne=0,re=0}et!==null?(Gt=et.x,me=et.y,ke=et.z):(Gt=0,me=0,ke=0);const we=Lt.convert(W.format),nn=Lt.convert(W.type);let Bt;W.isData3DTexture?(ct.setTexture3D(W,0),Bt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ct.setTexture2DArray(W,0),Bt=B.TEXTURE_2D_ARRAY):(ct.setTexture2D(W,0),Bt=B.TEXTURE_2D),T.activeTexture(B.TEXTURE0),T.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const pn=T.getParameter(B.UNPACK_ROW_LENGTH),fe=T.getParameter(B.UNPACK_IMAGE_HEIGHT),Bn=T.getParameter(B.UNPACK_SKIP_PIXELS),ai=T.getParameter(B.UNPACK_SKIP_ROWS),Gi=T.getParameter(B.UNPACK_SKIP_IMAGES);T.pixelStorei(B.UNPACK_ROW_LENGTH,Re.width),T.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Re.height),T.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),T.pixelStorei(B.UNPACK_SKIP_ROWS,ne),T.pixelStorei(B.UNPACK_SKIP_IMAGES,re);const As=R.isDataArrayTexture||R.isData3DTexture,ye=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Oe=K.get(R),Vi=K.get(W),Te=K.get(Oe.__renderTarget),Wi=K.get(Vi.__renderTarget);T.bindFramebuffer(B.READ_FRAMEBUFFER,Te.__webglFramebuffer),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Rs=0;Rs<Ht;Rs++)As&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(R).__webglTexture,nt,re+Rs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(W).__webglTexture,Ft,ke+Rs)),B.blitFramebuffer(Xt,ne,zt,Nt,Gt,me,zt,Nt,B.DEPTH_BUFFER_BIT,B.NEAREST);T.bindFramebuffer(B.READ_FRAMEBUFFER,null),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||K.has(R)){const Oe=K.get(R),Vi=K.get(W);T.bindFramebuffer(B.READ_FRAMEBUFFER,D),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let Te=0;Te<Ht;Te++)As?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,nt,re+Te):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,nt),ye?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vi.__webglTexture,Ft,ke+Te):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vi.__webglTexture,Ft),nt!==0?B.blitFramebuffer(Xt,ne,zt,Nt,Gt,me,zt,Nt,B.COLOR_BUFFER_BIT,B.NEAREST):ye?B.copyTexSubImage3D(Bt,Ft,Gt,me,ke+Te,Xt,ne,zt,Nt):B.copyTexSubImage2D(Bt,Ft,Gt,me,Xt,ne,zt,Nt);T.bindFramebuffer(B.READ_FRAMEBUFFER,null),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ye?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Bt,Ft,Gt,me,ke,zt,Nt,Ht,we,nn,Re.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Bt,Ft,Gt,me,ke,zt,Nt,Ht,we,Re.data):B.texSubImage3D(Bt,Ft,Gt,me,ke,zt,Nt,Ht,we,nn,Re):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ft,Gt,me,zt,Nt,we,nn,Re.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ft,Gt,me,Re.width,Re.height,we,Re.data):B.texSubImage2D(B.TEXTURE_2D,Ft,Gt,me,zt,Nt,we,nn,Re);T.pixelStorei(B.UNPACK_ROW_LENGTH,pn),T.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe),T.pixelStorei(B.UNPACK_SKIP_PIXELS,Bn),T.pixelStorei(B.UNPACK_SKIP_ROWS,ai),T.pixelStorei(B.UNPACK_SKIP_IMAGES,Gi),Ft===0&&W.generateMipmaps&&B.generateMipmap(Bt),T.unbindTexture()},this.initRenderTarget=function(R){K.get(R).__webglFramebuffer===void 0&&ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ct.setTextureCube(R,0):R.isData3DTexture?ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ct.setTexture2DArray(R,0):ct.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){z=0,k=0,q=null,T.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const B0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:o0,AddEquation:xs,AddOperation:cf,AdditiveBlending:ho,AgXToneMapping:a0,AlphaFormat:p0,AlwaysCompare:xf,AlwaysDepth:Da,AlwaysStencilFunc:ff,ArcCurve:Cf,ArrayCamera:Zf,BackSide:fn,BasicDepthPacking:hf,Box3:as,BoxGeometry:Ce,BufferAttribute:Nn,BufferGeometry:Le,ByteType:h0,Cache:Ea,Camera:N0,CanvasTexture:Nc,CatmullRomCurve3:Bc,CineonToneMapping:s0,CircleGeometry:yo,ClampToEdgeWrapping:mi,Color:Zt,ColorManagement:ae,ConstantAlphaFactor:of,ConstantColorFactor:nf,Controls:$f,CubeCamera:Yf,CubeDepthTexture:Rf,CubeReflectionMapping:os,CubeRefractionMapping:bs,CubeTexture:E0,CubeUVReflectionMapping:Cr,CubicBezierCurve:R0,CubicBezierCurve3:Pf,CullFaceBack:Il,CullFaceFront:ku,CullFaceNone:zu,Curve:ri,CurvePath:Df,CustomBlending:Gu,CustomToneMapping:r0,CylinderGeometry:Fn,Data3DTexture:bf,DataArrayTexture:x0,DataTexture:Ic,DefaultLoadingManager:Vf,DepthFormat:Mi,DepthStencilFormat:es,DepthTexture:_o,DirectionalLight:F0,DoubleSide:hn,DstAlphaFactor:Ju,DstColorFactor:ju,EllipseCurve:Oc,EqualCompare:mf,EqualDepth:Ua,EquirectangularReflectionMapping:Qo,EquirectangularRefractionMapping:Sa,Euler:Si,EventDispatcher:ki,ExternalTexture:T0,ExtrudeGeometry:Pr,Float32BufferAttribute:oe,FloatType:Vn,Fog:Dc,FrontSide:ei,Frustum:Uc,GLSL3:Fl,GreaterCompare:gf,GreaterDepth:Fa,GreaterEqualCompare:Pc,GreaterEqualDepth:Na,Group:pe,HalfFloatType:si,HemisphereLight:I0,IcosahedronGeometry:Es,ImageLoader:Wf,ImageUtils:Sf,InstancedBufferAttribute:Ol,InstancedMesh:zi,IntType:yc,InterleavedBuffer:Ef,InterleavedBufferAttribute:Sr,KeepStencilOp:ba,Layers:v0,LessCompare:pf,LessDepth:Ia,LessEqualCompare:Cc,LessEqualDepth:uo,Light:Hc,LightShadow:U0,LineCurve:C0,LineCurve3:Lf,LinearFilter:en,LinearMipmapLinearFilter:ts,LinearMipmapNearestFilter:ya,LinearSRGBColorSpace:gr,LinearToneMapping:n0,LinearTransfer:_r,Loader:kc,LoadingManager:Gf,MOUSE:Fi,Material:cs,MathUtils:ce,Matrix2:Gl,Matrix3:jt,Matrix4:be,MaxEquation:qu,Mesh:he,MeshBasicMaterial:qn,MeshDepthMaterial:kf,MeshDistanceMaterial:Hf,MeshLambertMaterial:se,MeshPhongMaterial:ar,MinEquation:Xu,MirroredRepeatWrapping:fo,MixOperation:af,MultiplyBlending:Nl,MultiplyOperation:Rr,NearestFilter:Ke,NearestMipmapLinearFilter:zo,NearestMipmapNearestFilter:lf,NeutralToneMapping:c0,NeverCompare:df,NeverDepth:La,NoBlending:gi,NoColorSpace:Ci,NoToneMapping:ni,NormalBlending:no,NotEqualCompare:_f,NotEqualDepth:Oa,Object3D:Ee,ObjectSpaceNormalMap:uf,OneFactor:Zu,OneMinusConstantAlphaFactor:rf,OneMinusConstantColorFactor:sf,OneMinusDstAlphaFactor:Qu,OneMinusDstColorFactor:tf,OneMinusSrcAlphaFactor:e0,OneMinusSrcColorFactor:Ku,OrthographicCamera:Gc,PCFShadowMap:Jo,PCFSoftShadowMap:Hu,PMREMGenerator:Vl,Path:Bl,PerspectiveCamera:tn,Plane:fi,PlaneGeometry:oi,PointLight:qf,PolyhedronGeometry:Fc,QuadraticBezierCurve:P0,QuadraticBezierCurve3:L0,Quaternion:Bi,R11_EAC_Format:Xa,RED_GREEN_RGTC2_Format:pr,RED_RGTC1_Format:uc,REVISION:Sc,RG11_EAC_Format:dr,RGBAFormat:Wn,RGBAIntegerFormat:Rc,RGBA_ASTC_10x10_Format:oc,RGBA_ASTC_10x5_Format:nc,RGBA_ASTC_10x6_Format:ic,RGBA_ASTC_10x8_Format:sc,RGBA_ASTC_12x10_Format:rc,RGBA_ASTC_12x12_Format:ac,RGBA_ASTC_4x4_Format:Za,RGBA_ASTC_5x4_Format:$a,RGBA_ASTC_5x5_Format:Ka,RGBA_ASTC_6x5_Format:Ja,RGBA_ASTC_6x6_Format:Qa,RGBA_ASTC_8x5_Format:ja,RGBA_ASTC_8x6_Format:tc,RGBA_ASTC_8x8_Format:ec,RGBA_BPTC_Format:cc,RGBA_ETC2_EAC_Format:Wa,RGBA_PVRTC_2BPPV1_Format:Ha,RGBA_PVRTC_4BPPV1_Format:ka,RGBA_S3TC_DXT1_Format:tr,RGBA_S3TC_DXT3_Format:er,RGBA_S3TC_DXT5_Format:nr,RGBFormat:m0,RGB_BPTC_SIGNED_Format:lc,RGB_BPTC_UNSIGNED_Format:hc,RGB_ETC1_Format:Ga,RGB_ETC2_Format:Va,RGB_PVRTC_2BPPV1_Format:za,RGB_PVRTC_4BPPV1_Format:Ba,RGB_S3TC_DXT1_Format:jo,RGFormat:rs,RGIntegerFormat:Ac,RawShaderMaterial:zf,Ray:w0,RedFormat:Ec,RedIntegerFormat:Tc,ReinhardToneMapping:i0,RenderTarget:yf,RepeatWrapping:fr,ReverseSubtractEquation:Wu,SIGNED_R11_EAC_Format:qa,SIGNED_RED_GREEN_RGTC2_Format:dc,SIGNED_RED_RGTC1_Format:fc,SIGNED_RG11_EAC_Format:Ya,SRGBColorSpace:je,SRGBTransfer:ge,Scene:M0,ShaderChunk:ee,ShaderLib:Qn,ShaderMaterial:Rn,Shape:zc,ShapeUtils:Ii,ShortType:u0,Sphere:So,SphereGeometry:wn,Spherical:Hl,SplineCurve:D0,Sprite:Af,SpriteMaterial:b0,SrcAlphaFactor:t0,SrcAlphaSaturateFactor:ef,SrcColorFactor:$u,StaticDrawUsage:g0,SubtractEquation:Vu,SubtractiveBlending:Ul,TOUCH:pi,TangentSpaceNormalMap:mr,Texture:Je,TextureLoader:Xf,TextureSource:Lc,TorusGeometry:xi,Triangle:Un,TubeGeometry:Lr,UVMapping:l0,Uint16BufferAttribute:S0,Uint32BufferAttribute:y0,UniformsLib:It,UniformsUtils:Bf,UnsignedByteType:Tn,UnsignedInt101111Type:d0,UnsignedInt248Type:mo,UnsignedInt5999Type:f0,UnsignedIntType:ii,UnsignedShort4444Type:bc,UnsignedShort5551Type:wc,UnsignedShortType:po,VSMShadowMap:to,Vector2:xt,Vector3:O,Vector4:Ie,WebGLCoordinateSystem:ti,WebGLCubeRenderTarget:O0,WebGLRenderTarget:Xn,WebGLRenderer:sd,WebGLUtils:nd,WebGPUCoordinateSystem:go,WebXRController:wa,ZeroFactor:Yu,createCanvasElement:vf,error:le,log:vr,warn:Qt,warnOnce:Ms},Symbol.toStringTag,{value:"Module"})),$h={type:"change"},z0={type:"start"},od={type:"end"},la=new w0,Kh=new fi,V3=Math.cos(70*ce.DEG2RAD),Ve=new O,yn=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bl=1e-6;class W3 extends $f{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Bi,this._lastTargetPosition=new O,this._quat=new Bi().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hl,this._sphericalDelta=new Hl,this._scale=1,this._panOffset=new O,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new O,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q3.bind(this),this._onPointerDown=X3.bind(this),this._onPointerUp=Y3.bind(this),this._onContextMenu=t_.bind(this),this._onMouseWheel=K3.bind(this),this._onKeyDown=J3.bind(this),this._onTouchStart=Q3.bind(this),this._onTouchMove=j3.bind(this),this._onMouseDown=Z3.bind(this),this._onMouseMove=$3.bind(this),this._interceptControlDown=e_.bind(this),this._interceptControlUp=n_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($h),this.update(),this.state=Me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ve.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<V3?this.object.lookAt(this.target):(Kh.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(Kh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bl||this._lastTargetPosition.distanceToSquared(this.target)>bl?(this.dispatchEvent($h),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?yn/60*this.autoRotateSpeed*t:yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ve.copy(s).sub(this.target);let o=Ve.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function X3(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function q3(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Y3(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(od),this.state=Me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Z3(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Me.DOLLY;break;case Fi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Me.ROTATE}break;case Fi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(z0)}function $3(i){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function K3(i){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(i.preventDefault(),this.dispatchEvent(z0),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(od))}function J3(i){this.enabled!==!1&&this._handleKeyDown(i)}function Q3(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Me.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Me.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(z0)}function j3(i){switch(this._trackPointer(i),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Me.NONE}}function t_(i){this.enabled!==!1&&i.preventDefault()}function e_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{clamp:k0,lerp:Hn,smoothstep:hi}=ce;function $e(i,t,e){let n=null,s=0;for(let o=1;o<e.length;o++){const[r,a]=e[o-1],[l,c]=e[o],h=l-r,f=c-a,u=Math.hypot(h,f);if(u<.01)continue;const d=k0(((i-r)*h+(t-a)*f)/u,0,u),m=r+h*d/u,_=a+f*d/u,g=Math.hypot(i-m,t-_);if(!n||g<n.distance){const p=-f/u,v=h/u;n={x:m,z:_,nx:p,nz:v,offset:(i-m)*p+(t-_)*v,run:s+d,distance:g}}s+=u}return n&&{...n,length:s}}function cr(i,t=0){return[Math.min(...i.map(([e])=>e))-t,Math.min(...i.map(([,e])=>e))-t,Math.max(...i.map(([e])=>e))+t,Math.max(...i.map(([,e])=>e))+t]}function wl([i,t,e,n],[s,o,r,a]){return i<r&&e>s&&t<a&&n>o}function ha(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function Zs(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([Hn(s[0],o[0],l),Hn(s[1],o[1],l)])}}return e}function i_(i){const t=i.edge,[e,n]=t[0],[s,o]=t.at(-1),r=Math.hypot(s-e,o-n),a=(s-e)/r,l=(o-n)/r,c=(d,m)=>(d-e)*a+(m-n)*l,h=t.slice(1).map((d,m)=>{const _=t[m],[g,p]=_,[v,M]=d,x=Math.hypot(v-g,M-p),S=c(g,p),b=c(v,M);return{a:_,b:d,span:x,start:S,end:b,offset:(y,w)=>((y-g)*(p-M)+(w-p)*(v-g))/x,bounds:cr([_,d],.005)}}),f=cr(t,i.reach??95),u=cr(t,.01);return{...i,length:r,station:c,segments:h,range:f,crestBounds:u}}function El(i,t,e){const n=i.station(t,e);if(n<-.001||n>i.length+.001)return null;const s=i.segments.find(({end:f})=>n<=f+.001)??i.segments.at(-1),{a:o,b:r,offset:a,start:l,end:c}=s,h=k0((n-l)/(c-l),0,1);return{offset:a(t,e),upper:Hn(o[2],r[2],h),lower:Hn(o[3],r[3],h)}}function s_(i){const t=[];for(const e of i){if(!e.edge||e.edge.length<2)continue;const n={...e,upperDecks:e.upperDeck?[e.upperDeck]:[],lowerDecks:e.lowerDeck?[e.lowerDeck]:[]},s=t.at(-1);if(!s||s.soft||n.soft||s.edge.at(-1).some((o,r)=>Math.abs(o-n.edge[0][r])>.01)){t.push(n);continue}s.edge=[...s.edge,...n.edge.slice(1)],s.shore=[...s.shore,...n.shore.slice(1)],s.breaks=[...s.breaks??[],...n.breaks??[]],s.upperDecks.push(...n.upperDecks),s.lowerDecks.push(...n.lowerDecks),s.flatInland=Math.max(s.flatInland??10,n.flatInland??10),s.blendInland=Math.max(s.blendInland??50,n.blendInland??50),s.endFade=n.endFade}return t}function o_(i){const t=s_(i).map(i_),e=i.filter(({beach:g})=>g?.length>1).map(g=>({...g,range:cr(g.beach,g.reach??100)})),n=i.flatMap(g=>g.paths??[]),s=Object.assign({},...i.map(g=>g.upperIds)),o=Object.assign({},...i.map(g=>g.lowerIds)),r=Object.assign({},...i.map(g=>g.stairs)),a=Object.assign({},...i.map(g=>g.ramps)),l=Object.assign({},...i.map(g=>g.stairWidths)),c=Object.assign({},...i.map(g=>g.stairRun)),h=new Set(i.flatMap(g=>g.underDeckIds??[])),f=[...t,...e].map(g=>g.range);function u(g,p,v,M){const x=M?[M.section]:t;for(const S of x){if(!ha(g,p,S.range))continue;const b=El(S,g,p);if(!b||b.offset<-(S.reach??95)||b.offset>52)continue;const E=$e(g,p,S.shore??[]),y=S.shoreRise??(S.soft?6.5:3.6),w=S.station(g,p),A=S.startFade??(S.soft?S.fade??12:11),P=S.endFade??(S.soft?S.fade??12:15),L=A?hi(w,0,A):1,C=P?1-hi(w,S.length-P,S.length):1,D=L*C,I=E?Hn(.18,b.lower,hi(E.distance,0,y)):b.lower;if(S.soft){const k=hi(b.offset,-(S.slopeWidth??18),0),q=1-hi(b.offset,10,50);return Hn(v,Hn(I,b.upper,k),D*q)}if(M?.section===S?M.upper:b.offset>=0){const k=1-hi(Math.max(0,b.offset),S.flatInland??10,S.blendInland??50);return Hn(v,b.upper,k*D)}if(!(E&&E.distance>(S.maxShoreDistance??105)))return Hn(v,I,D)}for(const S of e){if(!ha(g,p,S.range))continue;const b=$e(g,p,S.beach),E=$e(g,p,S.shore);if(!b||!E||b.distance>(S.reach??100))continue;const y=Math.max(6,$e(b.x,b.z,S.shore)?.distance??20);let w=0,A=S.beach[0][2];for(let C=1;C<S.beach.length;C++){const D=S.beach[C-1],I=S.beach[C],z=Math.hypot(I[0]-D[0],I[1]-D[1]);if(b.run<=w+z+.01){A=Hn(D[2],I[2],k0((b.run-w)/z,0,1));break}w+=z}const P=hi(b.run,0,12)*(1-hi(b.run,b.length-30,b.length)),L=1-hi(b.offset,12,55);return Hn(v,Hn(.18,A,hi(E.distance,0,y)),P*L)}return v}function d(g){const p=cr(g);for(const v of t){let E=function(y,w){y.length>=3&&b.push({ring:y,side:w})};if(v.soft||!wl(p,v.crestBounds))continue;const{station:M,length:x}=v;if(!v.segments.filter(y=>wl(p,y.bounds)).some(y=>{const w=g.map(([A,P])=>y.offset(A,P));return Math.min(...w)<=1e-7&&Math.max(...w)>=-1e-7}))continue;const b=[];E(Zs(g,([y,w])=>-M(y,w)));for(const y of v.segments){const{start:w,end:A,offset:P}=y;let L=Zs(g,([C,D])=>M(C,D)-w);L=Zs(L,([C,D])=>A-M(C,D)),!(L.length<3)&&(E(Zs(L,([C,D])=>P(C,D)),{section:v,upper:!0}),E(Zs(L,([C,D])=>-P(C,D)),{section:v,upper:!1}))}return E(Zs(g,([y,w])=>M(y,w)-x)),b}return null}function m(g,p){return t.some(v=>!v.soft&&ha(g,p,v.range)&&Math.abs(El(v,g,p)?.offset??1/0)<7)}function _(g,p,v){for(const M of t){if(!ha(g,p,M.range))continue;const x=El(M,g,p);if(x&&Math.abs(x.offset)<36)return x.lower}return v}return{sections:t,extras:n,upperWidths:s,lowerWidths:o,stairLevels:r,rampLevels:a,stairWidths:l,stairRuns:c,deckRoofs:h,apply:u,split:d,nearEdge:m,lowerGrade:_,refines:(g,p,v)=>f.some(M=>wl([g,p,g+v,p+v],M))}}const Go=Object.freeze({west:-647,east:-125,north:-138,south:129,innerWest:-624,innerEast:-144,innerNorth:-107,innerSouth:104}),Ki=i=>i.toFixed(1),{west:r_,east:a_,north:c_,south:l_,innerWest:h_,innerEast:u_,innerNorth:f_,innerSouth:d_}=Go,H0=`
  float cartoonDistrict(vec2 worldXZ) {
    // The harbour curves north at the Ocean end of the promenade.
    float harbourBend = 61.0 * (1.0 - smoothstep(-595.0, -500.0, worldXZ.x));
    vec2 fromWestNorth = smoothstep(
      vec2(${Ki(r_)}, ${Ki(c_)} - harbourBend),
      vec2(${Ki(h_)}, ${Ki(f_)} - harbourBend), worldXZ);
    vec2 fromEastSouth = 1.0 - smoothstep(
      vec2(${Ki(u_)}, ${Ki(d_)}),
      vec2(${Ki(a_)}, ${Ki(l_)}), worldXZ);
    return fromWestNorth.x * fromWestNorth.y * fromEastSouth.x * fromEastSouth.y;
  }
`,Xc={cartoonEnabled:{value:1}};function p_(i){Xc.cartoonEnabled.value=i?1:0}const Jh={plaster:{tile:"plaster",size:[2.9,2.9],grain:.63,tint:"#ebc190",palette:.3},stone:{tile:"stone",size:[3.3,2.05],grain:.67,tint:"#caa36b",palette:.18},paving:{tile:"stone",size:[3.3,3.3],grain:.39,tint:"#dfc59c",palette:.17},laidPaving:{tile:"plaster",size:[2.6,2.6],grain:.65,tint:"#e5c8a0",palette:.25},roof:{tile:"terracotta",size:[2.45,1.45],grain:.5,tint:"#bd6243",palette:.22},flatRoof:{tile:"plaster",size:[5.1,5.1],grain:.44,tint:"#c9bc9f",palette:.12},foliage:{tile:"leaves",size:[2.3,2.3],grain:.79,tint:"#7ea72f",palette:.52},glass:{tile:"plaster",size:[4,3],grain:.16,tint:"#4e7881",palette:.38},wood:{tile:"plaster",size:[1.2,3.5],grain:.53,tint:"#94663c",palette:.14},metal:{tile:"plaster",size:[3.5,3.5],grain:.17,tint:"#ad9d86",palette:.09},ground:{tile:"plaster",size:[8.2,8.2],grain:.53,tint:"#d8b97e",palette:.2},road:{tile:"plaster",size:[4.3,4.3],grain:.33,tint:"#918780",palette:.23}},m_={plaster:.694,stone:.568,terracotta:.271,leaves:.232},Tl=new Map,Qh=new WeakSet;function rd(i){if(Tl.has(i))return Tl.get(i);const t={value:0},e=`./art/waterfront-${i}.webp`,n=new Xf().load(e,()=>{t.value=1});n.colorSpace=je,n.wrapS=fo,n.wrapT=i==="terracotta"?fr:fo,n.anisotropy=4;const s={texture:n,ready:t};return Tl.set(i,s),s}function g_(){if(typeof document>"u")return{waterPigment:{value:null},waterPigmentReady:{value:0}};const i=rd("water");return{waterPigment:{value:i.texture},waterPigmentReady:i.ready}}function wo(i,{surface:t="plaster",strength:e=1}={}){if(Qh.has(i)||typeof document>"u")return i;Qh.add(i);const{tile:n,size:s,grain:o,tint:r,palette:a}=Jh[t]??Jh.plaster,l=rd(n),c=i.onBeforeCompile,h=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${h}|anapa-paint|${t}|${e}`,i.onBeforeCompile=function(f,u){c.call(this,f,u),Object.assign(f.uniforms,Xc,{pigment:{value:l.texture},pigmentReady:l.ready,pigmentMean:{value:m_[n]},pigmentPeriod:{value:new xt(...s)},pigmentTint:{value:new Zt(r)},pigmentPalette:{value:a},pigmentGrain:{value:o},pigmentStrength:{value:e}}),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
        ${H0}
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
      `)},i.needsUpdate=!0,i}const ad="#526e7c",__="#f0eee6";function Se(i,t,{surface:e="plaster",surfaces:n={}}={}){const s=new Map,o=new Map([[ad,"glass"]]);for(const[d,m]of Object.entries(n))for(const _ of m)o.set(_,d);const r=new pe;r.name=t,i.add(r);function a(d,m,_){const g=o.get(d)??m;s.has(g)||s.set(g,new Map);const p=s.get(g);p.has(d)||p.set(d,[]);const v=p.get(d);for(let M=2;M<_.length;M++)v.push(..._[0],..._[M-1],..._[M])}function l(d,...m){a(d,e,m)}function c(d,m,_){const g=d.map(([p,v])=>new xt(p,v));for(const[p,v,M]of Ii.triangulateShape(g,[])){const[x,S,b]=[g[p],g[v],g[M]],y=(S.x-x.x)*(b.y-x.y)-(S.y-x.y)*(b.x-x.x)>0?[x,b,S]:[x,S,b];a(_,"paving",y.map(({x:w,y:A})=>[w,m,A]))}}function h(d,m,_,g,p){l(p,[d[0],_,d[1]],[m[0],_,m[1]],[m[0],g,m[1]],[d[0],g,d[1]])}function f(d,m,_,g,p=g){const v=d.reduce((M,[x,S],b)=>{const[E,y]=d[(b+1)%d.length];return M+x*y-E*S},0);d.forEach((M,x)=>{const S=d[(x+1)%d.length];v>0?h(S,M,m,_,g):h(M,S,m,_,g)}),p&&c(d,_,p)}function u(d,m,_,g){const p=new O(...d),v=new O(...m),M=v.clone().sub(p).normalize(),S=(Math.abs(M.z)<.9?new O(0,0,1):new O(1,0,0)).cross(M).normalize().multiplyScalar(_/2),b=M.clone().cross(S),E=[p,v].map(y=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([w,A])=>y.clone().addScaledVector(S,w).addScaledVector(b,A).toArray()));for(let y=0;y<4;y++){const w=(y+1)%4;a(g,"metal",[E[0][y],E[1][y],E[1][w],E[0][w]])}a(g,"metal",E[0]),a(g,"metal",E[1].reverse())}return{face:l,flat:c,wall:h,shell:f,beam:u,finish(){for(const[d,m]of s)for(const[_,g]of m){const p=new Le;p.setAttribute("position",new oe(g,3)),p.computeVertexNormals();const v=wo(new se({color:_,side:hn}),{surface:d}),M=new he(p,v);M.castShadow=!0,M.receiveShadow=!0,r.add(M)}}}}function gt(i,t,e){return i.map((n,s)=>ce.lerp(n,t[s],e))}function Ue(i){return i.reduce(([t,e],[n,s])=>[t+n/i.length,e+s/i.length],[0,0])}function An(i,t,e,n,s,o,r,a=__){const l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=Math.max(1,Math.round(l/r));for(let h=0;h<c;h++){const f=gt(n,gt(t,e,(h+.035)/c),1.003),u=gt(n,gt(t,e,(h+.965)/c),1.003);i.wall(f,u,s,o,ad),i.wall(u,gt(n,gt(t,e,(h+1)/c),1.003),s,o,a)}}function x_(i,t,e,n){const s=new Ee;s.position.set(t,e+3.98,n),s.userData.nightLight={color:"#ffcc88",intensity:27,range:9,ground:e},i.add(s)}function v_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.48)"),e.addColorStop(.28,"rgba(255,255,255,0.22)"),e.addColorStop(.63,"rgba(255,255,255,0.05)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new b0({map:new Nc(i),color:"#ffc47a",opacity:.78,blending:ho,depthWrite:!1,toneMapped:!1})}function M_(){const i=new he(new wn(1,32,16),new Rn({side:fn,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{zenith:{value:new Zt("#45567f")},horizon:{value:new Zt("#9da8c7")},twilight:{value:new Zt("#d3a699")}},vertexShader:`
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
    `}));return i.scale.setScalar(1500),i.frustumCulled=!1,i.renderOrder=-100,i}function S_(i,t){const e=[],n=[];for(const{position:{x:c,z:h},ground:f}of i){let u=function(m,_){const g=_*Math.PI*2/20,p=m/5,v=c+p*7.4*Math.cos(g),M=h+p*7.4*Math.sin(g),x=t(v,M),S=1-Math.min(1,Math.max(0,(Math.abs(x-f)-.28)/.72)),b=Math.min(f+.9,Math.max(f-.9,x))+.215;return[v,b,M,(1-p*p)**3*S]},d=function(...m){if(m.some(_=>_[3]>0))for(const[_,g,p,v]of m)e.push(_,g,p),n.push(v)};for(let m=0;m<5;m++)for(let _=0;_<20;_++){const g=u(m,_),p=u(m,_+1),v=u(m+1,_),M=u(m+1,_+1);m&&d(g,p,v),d(p,M,v)}}const a=new Le;a.setAttribute("position",new oe(e,3)),a.setAttribute("lampStrength",new oe(n,1));const l=new Rn({side:hn,transparent:!0,depthWrite:!1,blending:ho,vertexShader:`
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
    `});return new he(a,l)}function y_(i,t){const e=[],n=[];i.updateMatrixWorld(!0),i.traverse(f=>{const{setEvening:u,nightLight:d}=f.userData;u&&e.push(u),d&&n.push({...d,position:f.getWorldPosition(new O)})});const s=n.filter(f=>f.ground!==void 0),o=new pe;o.name="Вечерний свет";const r=M_();if(o.add(r),s.length&&(o.add(S_(s,t)),typeof document<"u")){const f=v_();for(const{position:u}of s){const d=new Af(f);d.position.copy(u),d.scale.set(2.5,2.5,1),o.add(d)}}const a=Array.from({length:5},()=>{const f=new qf("#fff",0,9,2);return o.add(f),f});i.add(o);const l=new O(1/0,1/0,1/0);let c=!1;function h(f){if(!c||(r.position.copy(f.position),l.distanceToSquared(f.position)<1.5))return;l.copy(f.position);const{x:u,y:d,z:m}=l,g=d-t(u,m)<26?n.map(p=>({source:p,distance:p.position.distanceToSquared(l)})).filter(({distance:p})=>p<33**2).sort((p,v)=>p.distance-v.distance):[];a.forEach((p,v)=>{const M=g[v]?.source;p.intensity=M?.intensity??0,M&&(p.position.copy(M.position),p.color.set(M.color),p.distance=M.range)})}return{setEnabled(f){c=f,o.visible=c,l.set(1/0,1/0,1/0),e.forEach(u=>u(c))},update:h}}function Al(i,t,e,n=10){return Array.from({length:n},(s,o)=>{const r=o*Math.PI*2/n;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function cd(i,t,{name:e,lights:n,planters:s}){const o="#878887",r="#646765",a=Se(i,e,{surfaces:{metal:[o,r],stone:["#d8d4c7"],ground:["#8c7e60"]}}),l=new zi(new wn(.23,10,7),new se({color:"#eddaa4"}),n.length*4),c=new zi(new Es(1,1),wo(new se({color:"#607a45"}),{surface:"foliage"}),s.length*7);l.name="Плафоны верхней набережной",l.userData.setEvening=f=>{l.material.emissive.set(f?"#ffc37a":"#000"),l.material.emissiveIntensity=f?1.34:0},c.name="Кустарники в клумбах набережной";const h=new Ee;n.forEach(([f,u],d)=>{const m=t(f,u)+.03;x_(i,f,m,u),a.shell(Al(f,u,.3),m-.13,m+.35,o),a.shell(Al(f,u,.19),m+.32,m+3.72,o);for(const _ of[.44,.68,3.55,3.7])a.shell(Al(f,u,.25),m+_,m+_+.1,r);for(let _=0;_<4;_++){const g=Math.PI/4+_*Math.PI/2,p=Math.cos(g),v=Math.sin(g),M=[f+p*.46,m+3.77,u+v*.46];a.beam([f+p*.1,m+3.49,u+v*.1],M,.075,r),h.position.set(M[0],M[1]+.19,M[2]),h.updateMatrix(),l.setMatrixAt(d*4+_,h.matrix)}}),s.forEach(({x:f,z:u,width:d,depth:m,angle:_},g)=>{const p=(x,S)=>[f+x*Math.cos(_)-S*Math.sin(_),u+x*Math.sin(_)+S*Math.cos(_)],v=(x,S)=>[[-x,-S],[x,-S],[x,S],[-x,S]].map(b=>p(...b)),M=t(f,u);a.shell(v(d/2,m/2),M-.1,M+.16,"#d8d4c7"),a.flat(v(d/2-.17,m/2-.17),M+.175,"#8c7e60");for(let x=0;x<7;x++){const[S,b]=p((x-3)*d/7.8,x%2?-.45:.52);h.position.set(S,M+.53,b);const E=.52+x%3*.17;h.scale.set(E,.5+x%2*.26,E*.84),h.rotation.y=x*1.8,h.updateMatrix(),c.setMatrixAt(g*7+x,h.matrix)}}),l.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,i.add(l,c),a.finish()}const gs={front:[[-549.25,-30.85],[-517.3,-24.44]],depth:9.15,grade:9.03},b_=[{soft:!0,edge:[[-1194.65,-.88,7.9,2.35],[-1188.5,-6.93,8.7,2.35],[-1176.23,-13.69,9.8,2.35],[-1157.84,-21.72,11.8,2.35],[-1124.63,-25.52,12.3,2.35],[-1073.23,-30.79,12.65,2.35],[-1033.68,-39.87,13.25,2.35],[-982.49,-49.59,13.9,2.35],[-926.44,-60.99,13.15,2.4],[-878.85,-73.87,12.1,2.4],[-852,-77.5,11,2.4],[-830.48,-78.2,8.65,2.4]],shore:[[-1195,-24],[-1186.4,-36.11],[-1161.69,-54.98],[-1142.57,-67.42],[-1119.74,-82.36],[-1095.11,-100.63],[-1060.66,-124.59],[-1054.64,-114.35],[-1036.42,-110.13],[-995.48,-107.91],[-965.35,-114.27],[-903.18,-133.53],[-868.87,-118.74],[-830.48,-132]],upperIds:{1293020296:7},lowerIds:{},stairs:{}},{soft:!0,slopeWidth:10.8,shoreRise:1.5,fade:0,edge:[[-830.48,-78.2,8.65,2.4],[-820.6,-84.1,6.7,2.4],[-806.05,-90.4,5.7,2.45],[-783.75,-94.4,4.6,2.45],[-753.37,-97.1,3.65,2.45],[-742.87,-98.3,3.45,2.45],[-728.5,-94.3,4.15,2.45],[-696.91,-88.7,5.45,2.45],[-673.68,-83.1,6.45,2.5],[-658.2,-79.35,6.8,2.5],[-641.17,-75.3,7.1,2.5],[-638.31,-66,7.65,2.5],[-605.95,-55.15,8.5,2.55],[-595.02,-59.9,8.8,2.6]],shore:[[-830.48,-132],[-827,-183.4],[-783.08,-190.76],[-774.16,-192.09],[-729.85,-199.2],[-709.27,-201.43],[-646.49,-232.7],[-636.97,-260.15],[-623.68,-157.59],[-595.02,-144]],lowerDeck:[[-826,-133],[-837,-178],[-783,-187],[-739,-193],[-728,-190],[-715,-191],[-697,-176],[-682,-150],[-659,-139],[-662,-109],[-704,-103],[-740,-100],[-779,-101],[-813,-103],[-825,-114]],upperIds:{596938944:4.2,178479537:3.2},lowerIds:{},stairs:{596938943:[8.65,6.7]},stairWidths:{596938943:2.5}},{fade:0,edge:[[-595.02,-59.9,8.8,2.6],[-587.5,-63.5,8.8,2.6],[-576,-56.7,9.05,2.6],[-559,-50.3,9.15,2.6],[-550,-46,9.1,2.6],[-531.8,-47.6,9.04,2.6],[-525.5,-50.1,9,2.6],[-519.4,-61.2,8.96,2.6],[-501.2,-54.2,8.82,2.6],[-485.4,-49,8.71,2.6],[-480.1,-48.6,8.66,2.6],[-447.5,-40.1,8.5,2.6],[-416,-34.55,8.3,2.6],[-410.5,-34.1,8.28,2.6],[-380,-29.6,8.12,2.6],[-372,-29,8.07,2.6],[-350,-29.15,7.98,2.6],[-320,-29,7.9,2.6],[-300,-32,7.8,2.6]],shore:[[-595.02,-144],[-573.37,-123.91],[-563.51,-116.13],[-552.8,-94],[-534.2,-89],[-490,-73.3],[-467.6,-82.1],[-442.59,-61.36],[-405.47,-52.91],[-397.91,-61.01],[-379.03,-54.91],[-372.9,-48.36],[-320.33,-44.46],[-300,-47.3]],upperIds:{178484904:11,701760799:3.45},lowerIds:{701760797:5.2},underDeckIds:["223948923","223948927","223948934","223948896","223948899","223948902","223948903","223948904","223948906","223948908"],upperDeck:[[-595.02,-59.9],[-587.5,-63.5],[-576,-56.7],[-559,-50.3],[-550,-46],[-531.8,-47.6],[-525.5,-50.1],[-519.4,-61.2],[-501.2,-54.2],[-485.4,-49],[-480.1,-48.6],[-447.5,-40.1],[-416,-34.55],[-410.5,-34.1],[-380,-29.6],[-372,-29],[-350,-29.15],[-320,-29],[-300,-32],[-300,2.5],[-314,1.7],[-365,-.3],[-394,-.6],[-419,-4.4],[-455,-13.2],[-477,-19.4],[-515,-27.5],[-549,-34.8],[-595,-47.1]],stairs:{701760798:[2.6,5]},stairWidths:{701760798:2.25},ramps:{701760799:[5,8.8]},breaks:[[-589,-62.9,4.2]]}],w_=[[-515.4,-54.6],[-507,-52.4],[-498.1,-49.9],[-488.9,-46.8],[-479.9,-44.6],[-473.2,-42.7],[-463.8,-40.8],[-456.4,-39.3],[-447.3,-37.4],[-441.7,-36.2],[-436.7,-36],[-430.1,-34.8],[-423.4,-34],[-372.9,-24.5],[-364.9,-24.3],[-356.7,-24.9],[-348.5,-24.3],[-339.6,-24.7]],E_=[{x:-512.2,z:-44.4,width:7.2,depth:2.15,angle:.27},{x:-461.1,z:-30.3,width:11.1,depth:2,angle:.17},{x:-442.5,z:-26.9,width:6.1,depth:2.1,angle:.2},{x:-426.2,z:-23.1,width:7.9,depth:2.2,angle:.18}];function T_(i,t){cd(i,t,{name:"Верхняя набережная · фонари и клумбы",lights:w_,planters:E_})}const A_=[{edge:[[-300,-32,7.8,2.6],[-284,-34,7.75,2.6],[-267,-37.5,7.65,2.6],[-246,-43,7.55,2.6],[-240,-42,7.5,2.6],[-236,-29,7.42,2.6],[-228,-19,7.35,2.6],[-218,-7,7.25,2.6]],shore:[[-300,-47.3],[-289.6,-48.8],[-177.1,-87.5],[-161.9,-92.7]],upperDeck:[[-300,-32],[-284,-34],[-267,-37.5],[-246,-43],[-240,-42],[-236,-29],[-228,-19],[-218,-7],[-221,3],[-248,4],[-279,3],[-300,3]],upperIds:{178484904:11},lowerIds:{701760797:5.2,121213094:7.2},underDeckIds:["223948913","223948916"],stairs:{597090335:[7.25,5.97],597090341:[3.25,1.1]},stairWidths:{597090335:13.2,597090341:5.4},stairRun:{597090335:[.09,.36]},ramps:{121213094:[5.97,3.25],"701760797-approach":[3.88,2.6]},paths:[{id:"701760797-approach",points:[[-171.1,-33],[-199.26,-67.75]],width:5.2,level:"lower",replaceStartOf:"701760797"}],breaks:[[-218,-7,4]],flatInland:30,blendInland:52,fade:0},{beach:[[-224.06,-6.35,7.25],[-211.83,-6.43,5.97],[-171.1,-33,3.88],[-159.07,-41.45,3.25],[-144.56,-51.21,1.1],[-81.57,-93.77,1.4],[-39.04,-127.25,1.62],[-.76,-159.34,1.82],[25.53,-190.84,1.95],[71.71,-243.52,2.1],[152.59,-369.21,2.15],[173.74,-356.54,2.2],[184.72,-355.26,2.22],[200.31,-357.98,2.23],[218.09,-367.72,2.25],[238.68,-386.95,2.28],[248.36,-396.07,2.35],[217.53,-444.44,2.24],[252.43,-514.76,2.14],[274.46,-559.15,2.05],[283.14,-576.63,2.03],[323,-654.46,1.98]],shore:[[-177.1,-87.5],[-161.9,-92.7],[-53.6,-178.4],[-34.6,-198.7],[31.6,-303.9],[50.4,-343.6],[84.5,-417.2],[123.2,-492],[197.2,-622.5],[224.45,-686]],lowerIds:{597090338:6.5,121159650:7.5,178302326:5.7},stairs:{851920304:[3,2.28]}}],R_=[[-295.8,-26.2],[-288.7,-27.1],[-281.6,-28.1],[-272.7,-29.1],[-265.8,-30.2],[-257.3,-31.1],[-250.1,-32.8],[-244.6,-33.7]];function C_(i,t){cd(i,t,{name:"Фонари у Алых парусов",lights:R_,planters:[]})}const{clamp:jh,lerp:rn,smoothstep:xe}=ce;function ua(i){return[Math.min(...i.map(([t])=>t)),Math.min(...i.map(([,t])=>t)),Math.max(...i.map(([t])=>t)),Math.max(...i.map(([,t])=>t))]}const $s=([i,t,e,n],s)=>[i-s,t-s,e+s,n+s];function ld(i){const[t,e]=i.origin,[n,s]=i.scale,o=(H,at)=>[(H-t)*n,(e-at)*s],r=(H,at,ht,Z)=>[...o(H,Z),...o(ht,at)],a=r(37.2953,44.8868,37.3014,44.8932),l=r(37.2982,44.8933,37.3078,44.8984),c=r(37.3063,44.89613,37.31234,44.89775),h=i.surveyLines??{},f=h[125813146],u=h[400800619],d=h[657038813],m=h[1142991105],_=i.buildings.find(H=>H.id==="977564342")?.rings[0],g=_?.length===8?[_[7],_[6]]:null,p=o_([...b_,...A_]),v=i.landmarks.find(H=>H.id==="lighthouse")?.position,M=i.landmarks.find(H=>H.id==="port")?.position,x=r(37.303,44.8967,37.3069,44.9012),S=$s(ua(gs.front),gs.depth+9),b=i.buildings.find(H=>H.id==="r11979734-0")?.rings[0],E=b&&$s(ua(b),18),y=i.roads.find(H=>H.id==="977564885")?.points,w=y?.[0],A=new Map([["46844613",8],["1293020297",7],["1293020296",7],...Object.entries(p.upperWidths),...Object.entries(p.lowerWidths),...Object.entries(p.stairWidths)]),P=new Map([["977562764",[null,3.8]],["977562762",[3.8,1.65]],["977562763",[3.8,1.65]],["597090335",[7.25,2.6]],["597090341",[2.6,.9]],...Object.entries(p.stairLevels)]),L=new Map(p.extras.filter(H=>H.replaceStartOf).map(H=>[H.replaceStartOf,H.points.length-1])),C=[...i.roads.map(H=>L.has(H.id)?{...H,points:H.points.slice(L.get(H.id))}:H),...p.extras.map(H=>({...H,kind:H.kind??"footway"}))],D=C.filter(H=>P.has(H.id)).map(H=>({...H,width:A.get(H.id)??H.width,bounds:ua(H.points)})),I=C.filter(H=>H.id in p.rampLevels).map(H=>({...H,width:A.get(H.id)??H.width,bounds:ua(H.points)})),z=D.filter(H=>H.id in p.stairLevels),k=[...D,...I],q=[...z,...I],Y=(H,at,[ht,Z,F,G])=>H>=ht&&H<=F&&at>=Z&&at<=G;function J(H,at,ht){let Z=!1,F=1/0;for(let G=0,tt=ht.length-1;G<ht.length;tt=G++){const[rt,_t]=ht[tt],[Et,Tt]=ht[G];_t>at!=Tt>at&&H<(Et-rt)*(at-_t)/(Tt-_t)+rt&&(Z=!Z);const Ot=Et-rt,B=Tt-_t,Kt=jh(((H-rt)*Ot+(at-_t)*B)/(Ot*Ot+B*B||1),0,1);F=Math.min(F,Math.hypot(H-rt-Kt*Ot,at-_t-Kt*B))}return Z?0:F}function j(H,at,ht){const Z=$e(H,at,f);if(Z.distance>100)return ht(H,at);const F=1-xe(Z.distance,49,91),G=xe(Z.run,0,36),tt=1-xe(at,a[3]-55,a[3]-12),rt=v?1-xe(Math.hypot(H-v[0],at-v[1]),85,260):0,_t=rn(ht(Z.x-Z.nx*28,Z.z-Z.nz*28),22.4,rt);let Et=_t;if(Z.offset>0){const Tt=Math.max(7,$e(Z.x,Z.z,u).distance),Ot=1.65*xe($e(H,at,u).distance,0,8)+.18;Et=rn(_t,Ot,xe(Z.offset,Math.min(1.2,Tt*.08),Tt*.66))}else Et=rn(_t,ht(H,at),xe(-Z.offset,15,42));if(g&&Z.distance<48){const Tt=$e(H,at,g),Ot=1-xe(Tt.distance,14,23),B=rn(4.35,1.8,xe(Tt.offset,0,10));Et=rn(Et,Math.min(Et,B),Ot)}return rn(ht(H,at),Et,F*G*tt)}function St(H,at,ht){const Z=$e(H,at,d);if(Z.distance>82||Z.offset<-15)return ht(H,at);const F=ht(Z.x-Z.nx*14,Z.z-Z.nz*14),G=rn(F,2.35,xe(Z.offset,.5,15)),tt=xe(Z.run,0,40)*(1-xe(Z.run,Z.length-45,Z.length));return rn(ht(H,at),G,tt*(1-xe(Z.distance,58,82)))}function vt(H,at,ht,Z){if(f&&u&&Y(H,at,a))return j(H,at,ht);let F=d&&Y(H,at,l)?St(H,at,ht):ht(H,at);if(M&&Y(H,at,x)){const[G,tt,rt,_t]=x,Et=xe(Math.min(H-G,rt-H,at-tt,_t-at),2,26)*(1-xe(at,M[1]+13,M[1]+52)),Tt=rn(1.8,2.55,xe(at,M[1]-73,M[1]+8));F=rn(F,Tt,Et)}return p.apply(H,at,F,Z)}function kt(H,at){const ht=P.get(H.id);if(!ht)return null;const Z=ht[0]??vt(...w??H.points[0],at),F=ht[1];return{from:Z,to:F,run:p.stairRuns[H.id]??[0,1]}}function mt(H,at,ht){const Z=p.rampLevels[H.id];if(!Z)return;const F=$e(at,ht,H.points);return rn(Z[0],Z[1],F.run/F.length)}function pt(H,at,ht,Z){let F=vt(H,at,ht,Z);if(Y(H,at,S)){const G=$e(H,at,gs.front),tt=Math.sqrt(Math.max(0,G.distance**2-G.offset**2)),rt=Math.max(tt,-G.offset,G.offset-gs.depth);F=rn(F,gs.grade,1-xe(rt,1.8,7))}if(E&&Y(H,at,E)){const G=J(H,at,b);F=rn(F,gs.grade,1-xe(G,10,17))}if(w&&Math.abs(H-w[0])<14&&Math.abs(at-w[1])<14){const G=$e(H,at,y);G.distance<5&&(F=rn(F,vt(...w,ht),1-xe(G.distance,1.6,5)))}for(const G of k){if(!Y(H,at,$s(G.bounds,Math.max(4.5,G.width/2+2))))continue;const tt=$e(H,at,G.points),rt=G.width/2,_t=!q.includes(G),Et=_t?4.3:rt+1.6;if(tt.distance>Et)continue;const Tt=p.rampLevels[G.id],{from:Ot,to:B,run:Kt}=Tt?{from:Tt[0],to:Tt[1],run:[0,1]}:kt(G,ht),qt=jh((tt.run/tt.length-Kt[0])/(Kt[1]-Kt[0]),0,1),U=rn(Ot,B,qt)-(Kt[0]===0&&Kt[1]===1?.08:.23);F=rn(F,U,1-xe(tt.distance,_t?1.65:rt,Et))}return F}function V(H,at,ht){return ht.breaks?.some(([Z,F,G])=>Math.hypot(H-Z,at-F)<G)||q.some(Z=>Y(H,at,$s(Z.bounds,Z.width/2+.5))&&$e(H,at,Z.points).distance<Z.width/2+.3)}function Q(H,at){return q.some(ht=>Y(H,at,$s(ht.bounds,ht.width/2+2)))}function dt(H,at,ht){return z.some(Z=>{const[F,G,tt,rt]=$s(Z.bounds,Z.width/2+2);return H<tt&&at<rt&&H+ht>F&&at+ht>G})}function wt(H,at,ht){if(f&&u&&Y(H,at,a)){const Z=$e(H,at,f),F=$e(H,at,u),G=(1-xe(F.distance,5,11))*(1-xe(ht,2.2,3.8));if(G>0)return["shingle",G];const tt=xe(Z.offset,.5,4)*(1-xe(Z.distance,28,43))*xe(ht,2,5.5);if(tt>0)return["rockLight",tt*(.74+.21*Math.sin(ht*1.7+H*.027))]}if(m&&Y(H,at,c)){const Z=(1-xe($e(H,at,m).distance,3.2,6.4))*(1-xe(ht,2.3,3.1));if(Z>0)return["riprap",Z]}if(Y(H,at,x)&&ht<7){const[Z,F,G,tt]=x;return["quay",xe(Math.min(H-Z,G-H,at-F,tt-at),0,24)*(1-xe(ht,4.5,7))]}return null}return{height:pt,tone:wt,stairHeight:kt,rampHeight:mt,promenadeWidths:A,gorgWater:m,allRoads:C,surveyedStairs:z,ramps:I,waterfront:p,wallOpening:V,nearTransition:Q,refinesStairs:dt,refines(H,at,ht){return p.refines(H,at,ht)||[a,l,c,x].some(([Z,F,G,tt])=>H+ht>Z-18&&H<G+18&&at+ht>F-18&&at<tt+18)}}}const P_=[37.294125,44.884625,37.325875,44.907375],L_=128,D_=92,I_=JSON.parse("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.9,2.4,2.9,3.4,3.7,3.9,4,4,3.9,3.9,3.9,3.9,4,3.9,3.9,4,3.9,3.6,3.1,2.7,2.5,2.5,2.7,3,3.1,2.9,2.5,1.9,1.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,2,2.5,3.1,3.6,4.1,4.4,4.6,4.4,4.2,3.9,3.8,3.8,3.8,3.8,4,4.1,4.1,3.8,3.2,2.7,2.4,2.4,2.7,3,3.1,2.9,2.4,1.7,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.6,2,2.6,3.1,3.7,4.3,4.8,5,4.9,4.6,4.3,4.1,4,3.9,3.9,4,4.2,4.3,4.1,3.6,3.1,2.9,2.9,3.1,3.2,3.2,2.7,2.1,1.4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.2,1.6,2,2.5,3,3.6,4.2,4.7,5,5,4.9,4.7,4.6,4.4,4.2,4.1,4,4.1,4.2,4.1,3.9,3.6,3.4,3.3,3.2,3.1,2.8,2.2,1.6,1.1,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2,2.4,2.9,3.4,4,4.5,4.7,4.7,4.7,4.7,4.7,4.7,4.4,4.1,3.8,3.8,3.8,3.8,3.6,3.3,3,2.7,2.4,2.2,1.8,1.3,0.9,0.7,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.2,1.6,2,2.3,2.8,3.3,3.8,4.2,4.4,4.4,4.3,4.4,4.5,4.5,4.2,3.7,3.3,3.1,3,2.9,2.5,2.1,1.7,1.4,1.2,1,0.8,0.6,0.4,0.5,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.2,1.5,1.9,2.2,2.5,2.9,3.3,3.6,3.8,3.8,3.8,3.8,3.9,3.9,3.6,3.1,2.7,2.3,2.1,1.8,1.4,1,0.7,0.5,0.4,0.4,0.4,0.5,0.5,0.6,0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.7,2.8,2.9,3,3,3.1,3.1,3.1,2.9,2.5,2.1,1.7,1.5,1.3,1,0.7,0.5,0.4,0.5,0.7,0.9,1.1,1.3,1.4,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,2,2.3,2.5,2.5,2.5,2.4,2.3,2.3,2.3,2.4,2.4,2.3,2,1.8,1.6,1.4,1.3,1.2,1,0.9,1,1.3,1.7,2.1,2.5,2.7,2.9,2.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.2,1.4,1.6,2,2.5,3,3.3,3.3,2.9,2.4,2,1.9,1.9,2,2.1,2.1,2.1,2,1.9,1.8,1.7,1.7,1.6,1.6,1.8,2.2,2.9,3.5,4,4.3,4.4,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.7,1,1.2,1.4,1.6,2,2.5,3.2,3.9,4.3,4.2,3.5,2.6,2,1.8,1.9,2.2,2.4,2.5,2.5,2.5,2.4,2.4,2.4,2.3,2.2,2.2,2.5,3,3.8,4.5,5,5.3,5.5,5.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.4,1.7,2,2.3,2.8,3.5,4.1,4.5,4.2,3.4,2.5,2,1.9,2.1,2.5,2.8,2.9,2.9,2.8,2.8,2.9,2.9,2.8,2.7,2.7,2.9,3.4,4.1,4.8,5.3,5.6,5.8,5.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.6,1.9,2.2,2.5,2.8,3.2,3.5,3.6,3.3,2.6,2.1,1.8,1.9,2.2,2.6,2.9,3,2.9,2.9,2.9,3,3,3.1,3,3,3.1,3.4,4,4.5,5.1,5.4,5.6,5.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.7,2.1,2.4,2.6,2.7,2.9,2.9,2.7,2.3,2,1.8,1.8,2,2.2,2.5,2.7,2.8,2.8,2.8,2.9,3,3.1,3.2,3.2,3.1,3.1,3.2,3.5,3.9,4.4,4.8,5.1,5.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.4,1.9,2.3,2.7,3,3,2.9,2.6,2.3,1.9,1.8,1.8,1.9,2.1,2.3,2.6,2.8,3,3.1,3.1,3.2,3.3,3.3,3.3,3.3,3.2,3.1,2.9,2.9,3.1,3.5,3.9,4.3,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,2,2.6,3.2,3.5,3.5,3.2,2.7,2.2,1.8,1.8,1.9,2.1,2.4,2.7,3.1,3.5,3.9,4.1,4.2,4.1,4,3.7,3.4,3.2,3,2.8,2.6,2.5,2.4,2.6,2.9,3.2,3.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2.2,2.8,3.4,3.6,3.5,3.1,2.5,2.1,1.8,1.9,2,2.3,2.6,3.1,3.8,4.5,5,5.3,5.2,5,4.6,4.1,3.5,3.1,2.8,2.6,2.3,2.2,2,2,2.1,2.3,2.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.4,2.9,3.2,3.2,3,2.6,2.3,2.1,2,2,2.1,2.3,2.7,3.2,3.9,4.7,5.2,5.4,5.3,5,4.6,4,3.5,3,2.6,2.3,2.1,1.9,1.7,1.6,1.7,1.8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.2,1.6,2.1,2.6,2.9,2.9,2.7,2.4,2.3,2.3,2.4,2.5,2.4,2.3,2.4,2.6,3,3.4,3.9,4.3,4.4,4.4,4.3,4.1,3.7,3.3,2.9,2.5,2.2,1.9,1.7,1.6,1.6,1.7,2,2.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.3,2.7,2.7,2.5,2.3,2.2,2.5,2.9,3.2,3.3,3.1,2.8,2.6,2.5,2.6,2.8,3,3.2,3.3,3.4,3.5,3.5,3.4,3.1,2.8,2.5,2.2,2,1.8,1.8,2,2.2,2.6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.5,1.9,2.3,2.6,2.5,2.3,2.3,2.6,3.1,3.7,4,4,3.6,3.1,2.7,2.5,2.5,2.5,2.5,2.5,2.6,2.8,3,3.1,3.1,2.9,2.7,2.5,2.4,2.4,2.4,2.5,2.7,3,3.4,3.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.3,1.7,2,2.3,2.4,2.4,2.4,2.7,3.3,4,4.4,4.3,4,3.5,3.1,2.7,2.5,2.5,2.4,2.4,2.3,2.3,2.5,2.7,2.8,2.8,2.7,2.7,2.7,2.9,3.2,3.6,3.8,3.9,4.1,4.3,4.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,0.8,1.2,1.5,1.9,2.2,2.4,2.3,2.4,2.7,3.3,4.1,4.6,4.7,4.3,3.9,3.5,3.1,2.9,2.7,2.7,2.6,2.6,2.5,2.4,2.5,2.6,2.7,2.7,2.7,2.9,3.2,3.7,4.4,5,5.3,5.4,5.4,5.6,5.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.8,1.1,1.4,1.8,2.1,2.4,2.4,2.3,2.5,3.1,4,4.8,5.2,5,4.5,4.1,3.9,3.7,3.5,3.3,3.1,3,2.9,2.8,2.7,2.7,2.7,2.8,2.8,3,3.2,3.7,4.4,5.2,6,6.4,6.6,6.7,7,7.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,1.8,2.1,2.4,2.4,2.4,2.4,2.6,3.3,4.3,5.1,5.4,5.3,5,4.9,4.8,4.6,4.2,3.9,3.6,3.4,3.3,3.1,3,3.1,3.2,3.2,3.3,3.5,3.8,4.3,5,5.8,6.5,7,7.4,7.6,7.8,8.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.1,1.5,1.9,2.3,2.5,2.6,2.5,2.5,2.5,2.8,3.4,4.1,4.8,5.1,5.3,5.3,5.5,5.4,5.1,4.6,4.2,3.9,3.7,3.6,3.6,3.6,3.7,3.9,4.1,4.2,4.4,4.8,5.2,5.8,6.4,7,7.4,7.6,7.7,7.9,8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,2.8,2.8,2.7,2.8,3.1,3.5,3.9,4.3,4.6,4.9,5.1,5.4,5.4,5.1,4.7,4.3,4,3.9,3.8,3.9,4.1,4.4,4.7,5,5.3,5.7,6.1,6.4,6.8,7.1,7.3,7.4,7.4,7.4,7.5,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,2,2.3,2.7,2.9,3,3,3,3.1,3.3,3.5,3.8,4,4.2,4.4,4.6,4.8,5.1,5.3,5.2,5,4.7,4.4,4.1,4,4.1,4.3,4.6,5,5.5,6,6.5,6.9,7.1,7.3,7.3,7.3,7.3,7.2,7.2,7.3,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.9,3,3.1,3.1,3.2,3.4,3.8,4.1,4.3,4.4,4.4,4.5,4.5,4.7,5,5.4,5.7,5.8,5.6,5.1,4.7,4.3,4.2,4.3,4.6,5,5.6,6.1,6.6,6.9,7.1,7.2,7.3,7.2,7.1,7,7.1,7.4,7.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.7,2.1,2.5,2.8,3,3.1,3.1,3.1,3.3,3.7,4.2,4.7,4.9,4.9,4.8,4.7,4.6,4.7,4.9,5.4,6,6.3,6.3,5.9,5.4,4.9,4.5,4.4,4.5,4.9,5.3,5.9,6.3,6.7,6.9,7.1,7.3,7.3,7.3,7.3,7.4,7.9,8.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,3,3,3,3.1,3.4,4,4.6,5.2,5.5,5.6,5.4,5.3,5,4.8,4.8,5.2,5.8,6.3,6.5,6.4,6,5.6,5.1,4.8,4.7,4.9,5.4,5.9,6.3,6.6,6.9,7.2,7.5,7.7,7.7,7.8,8.1,8.8,9.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.7,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.9,2.2,2.5,2.7,2.9,3,3,3.1,3.2,3.6,4.2,5,5.7,6.2,6.4,6.4,6.3,6,5.5,5.2,5.3,5.8,6.2,6.5,6.6,6.5,6.3,5.9,5.4,5.2,5.3,5.7,6.2,6.6,6.9,7.2,7.6,7.9,8.1,8.1,8.2,8.6,9.4,10.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.8,1.1,1.2,1,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.3,3.3,3.3,3.4,3.8,4.4,5.1,5.9,6.5,7,7.4,7.5,7.1,6.5,5.9,5.7,5.9,6.3,6.6,6.7,6.9,6.8,6.6,6.2,5.9,5.8,6.1,6.4,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.2,8.5,9.2,10.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.5,1.3,0.9,0.4,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.4,1.9,2.3,2.6,2.9,3.2,3.4,3.6,3.7,3.6,3.6,3.7,4,4.5,5.1,5.7,6.3,6.9,7.5,7.9,7.8,7.2,6.4,5.9,5.9,6.2,6.4,6.7,6.8,7,6.9,6.6,6.3,6.2,6.3,6.5,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.1,8.3,8.8,9.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.4,0.7,1.1,1.5,1.7,1.5,1,0.6,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.7,3,3.2,3.5,3.7,3.8,3.9,3.8,3.8,4,4.3,4.6,5,5.3,5.7,6.2,6.8,7.3,7.4,7,6.3,5.8,5.8,6.1,6.4,6.7,6.9,7,7,6.8,6.7,6.7,6.7,6.7,6.8,7.1,7.5,7.9,8.4,8.6,8.6,8.5,8.4,8.5,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.4,0.4,0.4,0.4,0.5,0.6,0.8,0.9,1.1,1.4,1.6,1.7,1.4,0.9,0.5,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.8,3,3.2,3.3,3.4,3.6,3.8,3.9,3.9,3.9,4,4.2,4.4,4.6,4.8,4.9,5.2,5.7,6.1,6.3,6.1,5.8,5.6,5.9,6.4,6.9,7.2,7.4,7.4,7.4,7.3,7.3,7.3,7.2,7,7,7.1,7.4,8,8.6,9.1,9.1,8.9,8.8,8.8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.4,0.5,0.6,0.8,0.9,1,1,1.2,1.4,1.5,1.6,1.7,1.8,1.8,1.6,1.2,0.7,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,1,1.5,2,2.5,2.8,3,3.1,3.2,3.2,3.4,3.5,3.6,3.7,3.7,3.7,3.6,3.7,3.9,4.1,4.4,4.5,4.6,4.8,5,5.2,5.3,5.4,5.6,6.2,6.9,7.5,7.9,8,8,8,8.1,8.1,8,7.7,7.4,7.2,7.2,7.3,7.8,8.5,9.1,9.4,9.5,9.6,9.7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.2,0.3,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.3,2.3,2.3,2.2,2,1.7,1.2,0.7,0.4,0.2,0.1,0.1,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.2,1.7,2.1,2.5,2.8,3.1,3.2,3.2,3.1,3.1,3.2,3.3,3.5,3.6,3.6,3.4,3.3,3.3,3.5,3.9,4.3,4.4,4.4,4.4,4.6,4.9,5.3,5.7,6.2,6.8,7.5,8,8.2,8.3,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.8,7.6,7.5,7.8,8.4,9.1,9.8,10.4,10.7,11,11.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.3,0.4,0.5,0.6,0.6,0.7,0.9,1.1,1.3,1.5,1.7,2,2.4,2.8,3.2,3.5,3.5,3.5,3.4,3.2,3,2.7,2.2,1.6,1.2,0.8,0.6,0.4,0.3,0.3,0.2,0.2,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.5,1,1.5,2,2.4,2.6,2.8,3,3.1,3.2,3.1,3,3,3.1,3.2,3.4,3.4,3.4,3.3,3.2,3.2,3.5,4,4.5,4.8,4.8,4.8,5,5.5,6.1,6.7,7.2,7.7,8,8.2,8.3,8.3,8.5,8.8,9.2,9.5,9.4,9.2,8.9,8.6,8.3,8.1,8.3,8.8,9.6,10.6,11.4,11.8,11.9,11.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.4,0.6,0.8,1,1.2,1.5,1.6,1.7,1.8,1.9,2.2,2.4,2.8,3.2,3.7,4.3,5,5.6,6,6,5.8,5.4,5,4.6,4.1,3.5,2.9,2.3,1.8,1.4,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.3,0.3,0.3,0.3,0.5,0.7,1.1,1.6,2.2,2.8,3.1,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3,3.1,3.2,3.3,3.4,3.4,3.3,3.2,3.3,3.7,4.4,5.1,5.5,5.6,5.6,5.8,6.4,7.1,7.7,8.1,8.2,8.3,8.3,8.3,8.4,8.7,9.1,9.6,9.8,9.9,9.7,9.5,9.3,9,8.9,9,9.5,10.4,11.4,12.2,12.5,12.3,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.6,0.9,1.2,1.6,2,2.3,2.7,3,3.4,3.6,3.9,4.2,4.5,4.9,5.4,6,6.8,7.6,8.5,9.2,9.5,9.3,8.9,8.3,7.6,6.9,6.2,5.5,4.9,4.3,3.7,3,2.4,1.9,1.5,1.3,1,0.8,0.7,0.6,0.5,0.5,0.5,0.6,0.8,0.9,1.1,1.2,1.2,1.2,1.3,1.5,1.8,2.3,2.8,3.2,3.5,3.5,3.5,3.5,3.5,3.4,3.3,3.2,3.2,3.2,3.3,3.4,3.5,3.4,3.4,3.4,3.5,4,4.7,5.5,6,6.3,6.4,6.7,7.2,7.8,8.2,8.3,8.2,8.2,8.3,8.5,8.7,9.1,9.5,9.8,9.9,9.9,9.8,9.8,9.8,9.9,10,10.2,10.6,11.2,12,12.5,12.6,12.2,11.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.3,1.7,2.2,2.7,3.3,3.9,4.4,4.8,5.3,5.8,6.3,6.8,7.3,7.8,8.3,8.7,9.1,9.7,10.4,11.2,11.9,12.3,12.4,12.2,11.6,10.9,10,9.2,8.4,7.8,7.4,7,6.4,5.7,4.9,4.2,3.6,3.1,2.7,2.3,2,1.8,1.8,1.8,1.9,2.1,2.4,2.7,3,3.1,3.1,2.9,2.7,2.7,2.7,2.9,3.2,3.5,3.6,3.6,3.7,3.9,3.9,3.8,3.6,3.5,3.4,3.4,3.4,3.5,3.6,3.6,3.7,3.8,4,4.4,5.1,5.8,6.4,6.7,7,7.3,7.7,8.1,8.2,8.1,8,8.1,8.4,8.7,9.2,9.6,9.9,10,9.9,9.7,9.6,9.8,10.3,10.9,11.4,11.7,11.9,12.2,12.4,12.4,12.1,11.7,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,1.2,2.3,3.5,4.6,5.5,6.4,7.2,7.8,8.3,8.7,9.2,9.8,10.3,10.9,11.5,12,12.3,12.4,12.5,12.7,13.1,13.5,13.9,14,14.1,13.9,13.5,12.7,11.8,10.9,10.2,9.9,9.7,9.7,9.5,9.1,8.4,7.7,6.9,6.1,5.4,4.8,4.5,4.4,4.5,4.6,4.7,5,5.3,5.6,5.8,5.9,5.7,5.3,4.8,4.3,3.8,3.6,3.5,3.5,3.6,3.7,3.9,4.1,4.2,4.1,3.9,3.7,3.5,3.5,3.5,3.6,3.8,3.9,4.2,4.5,4.8,5.4,6.1,6.8,7.4,7.8,8,8.1,8.2,8.3,8.3,8.1,8.1,8.2,8.5,9,9.6,10,10.2,10.2,10,9.7,9.5,9.6,10.3,11.3,12.2,12.7,12.7,12.6,12.3,11.9,11.4,11.1,10.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.3,4.3,6.6,8.6,10.2,11.3,12,12.5,12.9,13.2,13.6,14,14.4,14.7,14.9,15,14.9,14.6,14.4,14.2,14.2,14.3,14.5,14.8,14.9,14.9,14.5,13.9,13,12.2,11.7,11.4,11.4,11.6,11.8,11.8,11.6,11,10.1,9.1,8.3,7.8,7.6,7.7,7.9,8,8.1,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.5,6.6,5.6,4.7,4.2,3.9,3.7,3.8,3.9,4.1,4.2,4.1,3.9,3.8,3.7,3.8,3.9,4.1,4.3,4.6,5,5.5,6.2,7.1,8,8.9,9.4,9.6,9.4,9.1,8.9,8.9,8.9,8.8,8.8,8.9,9.1,9.6,10.1,10.4,10.4,10.3,10,9.6,9.4,9.4,10,11,11.9,12.3,12.3,12,11.7,11.3,10.9,10.7,10.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.1,9.2,12,13.9,15.1,15.7,16.1,16.3,16.6,16.8,17.1,17.2,17.1,16.8,16.4,15.9,15.5,15.1,14.8,14.6,14.6,14.8,15.1,15.3,15.3,15,14.4,13.7,13.1,12.7,12.4,12.4,12.6,13,13.2,13.3,12.8,12,11.1,10.3,10,10,10.2,10.3,10.3,10.2,10.3,10.5,10.7,10.8,10.9,11,10.9,10.4,9.4,8.1,6.9,5.9,5.2,4.8,4.6,4.6,4.7,4.7,4.5,4.3,4.2,4.2,4.5,4.8,5.1,5.4,5.7,6.2,6.9,7.7,8.7,9.7,10.5,11,11,10.6,10,9.8,9.8,9.9,9.9,9.9,9.9,10.1,10.4,10.7,10.7,10.5,10.1,9.7,9.5,9.3,9.4,9.8,10.4,11,11.3,11.2,11.1,11,10.9,10.8,10.7,10.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.8,3.7,6.6,10,13.1,15.3,16.5,17.2,17.6,17.9,18.3,18.5,18.7,18.7,18.4,17.9,17.2,16.5,16,15.6,15.4,15.2,15.2,15.3,15.6,15.7,15.4,15,14.5,14.1,13.7,13.5,13.3,13.3,13.4,13.7,14,14,13.7,13,12.2,11.5,11.3,11.4,11.5,11.3,11,10.8,10.7,11,11.3,11.7,12.2,12.7,12.9,12.8,12.2,11.1,9.8,8.7,7.8,7.2,6.9,6.8,6.8,6.6,6.1,5.6,5.4,5.5,5.8,6.2,6.5,6.7,6.9,7.4,8.1,8.9,9.8,10.5,11.2,11.5,11.4,10.9,10.4,10.3,10.5,10.8,10.9,10.9,10.9,11,11.2,11.1,10.9,10.4,9.9,9.6,9.4,9.4,9.5,9.9,10.3,10.6,10.6,10.6,10.6,10.6,10.8,11,11.1,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.1,5.8,9.1,12.4,14.9,16.4,17.3,17.9,18.4,19,19.3,19.4,19.4,19.1,18.6,17.9,17.3,16.9,16.6,16.4,16.2,16.1,16.3,16.4,16.4,15.9,15.3,14.9,14.6,14.5,14.5,14.5,14.4,14.4,14.4,14.6,14.6,14.4,13.8,13.1,12.5,12.3,12.3,12.3,12,11.6,11.3,11.3,11.5,11.8,12.3,12.9,13.6,14.1,14.3,14,13.3,12.4,11.5,10.8,10.3,10,10,9.9,9.6,9,8.2,7.7,7.5,7.7,7.9,7.9,7.9,7.9,8.3,9,9.8,10.4,10.9,11.3,11.4,11.2,10.9,10.6,10.6,10.8,11.1,11.3,11.4,11.5,11.6,11.6,11.3,10.9,10.3,9.8,9.6,9.5,9.6,9.8,10.2,10.4,10.5,10.4,10.3,10.3,10.5,10.9,11.3,11.7,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,1,2.4,4.8,8,11.4,14.3,16.1,17.1,17.8,18.4,19,19.2,19.3,19.3,19,18.7,18.3,18,17.7,17.5,17.2,17.1,17,17.2,17.3,17.2,16.6,15.9,15.4,15.3,15.5,15.7,15.7,15.5,15.1,14.9,14.7,14.6,14.4,14,13.5,13.1,13.1,13.1,13.1,12.9,12.7,12.7,12.9,13,13.2,13.5,14,14.6,15,15,14.6,14.2,13.6,13.1,12.7,12.5,12.3,12.3,12.3,12.1,11.7,11.1,10.4,9.8,9.3,9.1,8.9,8.8,8.9,9.3,9.9,10.5,10.9,11.1,11.2,11.2,11.1,11,10.9,10.9,11.1,11.3,11.4,11.6,11.7,11.8,11.7,11.5,11,10.5,10.1,9.9,9.9,10,10.2,10.5,10.6,10.5,10.3,10.2,10.2,10.6,11.1,11.6,12.1,12.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.8,2,4.1,7,10.5,13.7,15.9,17.1,17.7,18.2,18.6,18.9,18.9,18.8,18.6,18.3,18,17.8,17.7,17.6,17.4,17.3,17.4,17.6,17.7,17.5,17,16.3,15.9,15.8,16,16.2,16.1,15.7,15.2,14.8,14.4,14.2,13.9,13.6,13.3,13.3,13.5,13.7,13.7,13.7,13.8,14.2,14.7,15.1,15.3,15.5,15.8,16,15.8,15.3,14.7,14.2,13.9,13.8,13.6,13.6,13.6,13.5,13.5,13.4,13.3,12.9,12.2,11.3,10.3,9.5,9.2,9.4,9.9,10.6,11.2,11.6,11.6,11.4,11.3,11.3,11.3,11.3,11.3,11.3,11.4,11.4,11.5,11.6,11.7,11.7,11.8,11.7,11.4,11.1,10.7,10.6,10.5,10.6,10.7,10.8,10.8,10.7,10.6,10.4,10.5,10.8,11.4,11.9,12.3,12.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.2,9.7,13.2,15.8,17.2,17.8,18.2,18.4,18.6,18.6,18.5,18.2,17.8,17.5,17.3,17.2,17.1,17.1,17.2,17.4,17.5,17.6,17.4,17,16.6,16.2,16,16,16,15.8,15.5,15,14.6,14.2,13.9,13.6,13.4,13.3,13.6,13.9,14.2,14.3,14.3,14.5,15.2,15.9,16.4,16.8,16.9,17.1,17,16.6,15.7,14.8,14.4,14.3,14.5,14.6,14.6,14.6,14.5,14.4,14.2,14.1,13.8,13.1,12,10.8,9.8,9.5,9.9,10.8,11.8,12.5,12.8,12.5,12.1,11.7,11.6,11.7,11.8,11.9,11.9,11.8,11.7,11.6,11.5,11.5,11.6,11.8,12,12,11.8,11.6,11.4,11.3,11.2,11.2,11.3,11.3,11.3,11.2,11.1,11.2,11.4,11.9,12.3,12.7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3,5.7,9.3,13,16,17.6,18.2,18.4,18.4,18.4,18.3,18.1,17.8,17.4,17.2,17,16.9,16.9,16.9,17,17.1,17.2,17.3,17.4,17.3,17.1,16.8,16.4,16.1,15.9,15.5,15.1,14.7,14.4,14.2,14,13.7,13.6,13.7,14,14.4,14.7,14.8,14.8,15,15.5,16.1,16.7,17,17.3,17.4,17.4,17,16.2,15.4,15,15,15.4,15.7,15.8,15.7,15.6,15.3,15.1,14.9,14.6,13.9,12.8,11.5,10.5,10.3,10.7,11.6,12.4,13.1,13.4,13.3,13,12.5,12.2,12,12,12.2,12.2,12.1,11.9,11.7,11.5,11.4,11.5,11.8,12.2,12.4,12.4,12.2,12,11.9,11.8,11.8,11.8,12,12.1,12,12,12,12.2,12.5,12.9,13.1,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.3,13.2,16.2,18,18.5,18.5,18.3,18.1,17.8,17.6,17.4,17.3,17.3,17.2,17.1,17,16.8,16.8,16.8,17,17.3,17.6,17.8,17.6,17.3,16.8,16.4,16,15.5,14.9,14.4,14.2,14.1,14.1,14,14,14.2,14.6,15,15.3,15.4,15.3,15.3,15.5,15.9,16.2,16.6,17,17.2,17.3,17.1,16.5,15.9,15.5,15.5,15.8,16.2,16.5,16.4,16.2,16,15.8,15.7,15.4,14.8,13.8,12.7,11.8,11.4,11.7,12.2,12.8,13.3,13.8,14.1,14.1,13.6,13,12.3,12.1,12.1,12.1,12.1,11.9,11.6,11.4,11.3,11.5,11.8,12.2,12.4,12.5,12.5,12.4,12.3,12.2,12.2,12.2,12.4,12.6,12.7,12.7,12.7,12.9,13.1,13.3,13.3,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.6,3.4,6.2,9.8,13.5,16.4,18,18.5,18.4,18.1,17.7,17.4,17.3,17.4,17.6,17.6,17.5,17.3,17,16.7,16.5,16.5,16.7,17.1,17.6,17.7,17.6,17.2,16.8,16.4,15.9,15.4,14.8,14.4,14.2,14.2,14.3,14.5,14.7,15,15.5,15.9,16.1,16,15.8,15.7,15.6,15.7,16,16.4,16.7,17,17,16.9,16.6,16.1,15.5,15.3,15.6,16.1,16.5,16.6,16.5,16.4,16.2,16.1,16,15.6,14.9,14,13.2,12.7,12.7,12.8,13.1,13.6,14.3,15,15.1,14.7,13.8,12.9,12.3,12.1,12,12,11.8,11.6,11.5,11.5,11.7,11.9,12,12.2,12.3,12.4,12.5,12.5,12.5,12.4,12.4,12.6,12.9,13.1,13.2,13.3,13.5,13.6,13.5,13.4,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.3,2.4,4.2,7.1,10.7,14.2,16.7,18.1,18.5,18.3,18,17.6,17.4,17.5,17.9,18.2,18.3,17.9,17.4,16.9,16.4,16.1,16,16.2,16.5,16.8,16.9,16.8,16.6,16.3,15.9,15.6,15.2,14.9,14.7,14.6,14.6,14.8,15.1,15.6,16.2,16.7,16.9,16.9,16.7,16.4,16.1,16,16,16.3,16.6,17,17.2,17.2,17,16.6,16.1,15.6,15.3,15.5,16.2,16.9,17.1,17,16.8,16.5,16.4,16.4,16.2,15.8,15.1,14.4,13.9,13.6,13.4,13.5,13.9,14.7,15.4,15.7,15.3,14.4,13.5,12.9,12.7,12.5,12.3,12,11.9,11.9,11.9,11.9,11.9,12,12.1,12.2,12.4,12.5,12.7,12.7,12.7,12.7,12.9,13.2,13.5,13.7,13.8,13.9,13.9,13.7,13.4,13.3,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.3,0.7,1.3,2.2,3.5,5.6,8.7,12.2,15.5,17.7,18.8,19.1,18.8,18.2,17.8,17.7,18.1,18.6,19.1,19,18.4,17.7,17.1,16.6,16.2,16.1,16,16,16.1,16.1,16.1,16.1,16,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.5,15.9,16.5,17.1,17.6,17.6,17.3,16.9,16.6,16.5,16.6,16.7,17.1,17.5,17.8,18,18,17.8,17.4,17,16.6,16.4,16.6,17.4,18.1,18.3,18,17.5,17,16.7,16.6,16.5,16.1,15.6,15.1,14.7,14.4,14.1,13.9,14.1,14.7,15.4,15.7,15.4,14.7,14.1,13.8,13.6,13.4,13,12.6,12.3,12.3,12.3,12.2,12.2,12.2,12.4,12.5,12.6,12.7,12.9,13.1,13.1,13.1,13.2,13.4,13.7,13.9,13.9,13.9,13.8,13.6,13.4,13.3,0,0,0,0,0,0,0,0,0.1,0.3,0.4,0.5,0.6,0.8,1.3,2.1,3.3,5,7.5,10.8,14.3,17.3,19.3,20.3,20.5,19.9,19.1,18.4,18.2,18.6,19.1,19.5,19.4,18.8,18.1,17.6,17.3,17.2,16.9,16.5,16.1,16,16,16.3,16.4,16.5,16.4,16.3,16.5,16.6,16.6,16.4,16.1,16.1,16.4,17,17.7,18.1,17.9,17.5,17,16.8,16.8,17,17.4,17.9,18.5,19,19.3,19.5,19.4,19.2,18.8,18.3,18,18.2,18.9,19.5,19.7,19.2,18.5,17.8,17.3,17,16.6,16.2,15.7,15.4,15.1,14.9,14.6,14.3,14.2,14.5,15,15.2,15,14.6,14.3,14.2,14.1,13.9,13.4,12.9,12.7,12.7,12.7,12.6,12.5,12.7,13,13.1,13.1,13.1,13.3,13.5,13.6,13.6,13.6,13.7,13.8,13.8,13.8,13.8,13.8,13.7,13.5,13.4,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.3,1.6,2.3,3.4,5,7.2,10.1,13.4,16.7,19.4,21.1,22,22,21.3,20.3,19.3,18.8,18.8,19.2,19.5,19.4,18.9,18.4,18.1,18.1,18.1,17.7,17.1,16.8,16.8,17,17.3,17.5,17.5,17.3,17.2,17.1,17.1,17,16.8,16.5,16.4,16.7,17.4,18.2,18.7,18.7,18.1,17.5,17.1,17.1,17.3,17.9,18.5,19.2,19.8,20.3,20.7,20.8,20.7,20.1,19.5,19.1,19.2,19.8,20.3,20.5,20.1,19.5,18.8,18.1,17.6,17.1,16.6,16,15.6,15.4,15.2,14.9,14.6,14.4,14.4,14.5,14.6,14.5,14.3,14.2,14.2,14.1,13.9,13.5,13.2,13.1,13.1,13.1,12.9,12.8,13,13.3,13.5,13.6,13.7,13.9,14.1,14.2,14.2,14.1,14,14,13.9,13.8,13.9,13.9,13.8,13.7,13.6,0,0,0,0,0,0,0.1,0.2,0.4,0.9,1.5,2.2,2.7,3.4,4.4,5.9,7.9,10.4,13.4,16.4,19.2,21.2,22.5,23,22.9,22.1,20.9,19.9,19.1,18.9,19,19.2,19.2,19,18.7,18.6,18.6,18.5,18.2,17.9,17.8,18,18.4,18.5,18.6,18.5,18.2,17.9,17.6,17.2,17,16.8,16.7,16.9,17.3,18.1,19,19.7,19.7,19.1,18.2,17.6,17.4,17.6,18.3,19.1,19.7,20.3,20.7,21,21.1,21,20.5,19.9,19.6,19.8,20.3,20.7,20.8,20.6,20.1,19.4,18.9,18.4,17.9,17.2,16.6,16.1,15.8,15.6,15.4,15.2,14.9,14.7,14.6,14.6,14.5,14.4,14.3,14.2,14,13.8,13.6,13.5,13.6,13.6,13.5,13.3,13.1,13.2,13.5,13.8,14,14.3,14.7,14.9,14.8,14.6,14.5,14.4,14.2,14.1,14.1,14.1,14.1,14,13.9,13.9,0,0,0,0,0,0.1,0.2,0.5,1.1,2.1,3.4,4.6,5.8,7.1,8.5,10.2,12.2,14.4,16.9,19.3,21.1,22.4,23,23.1,22.8,22,21.1,20.2,19.5,19.1,19.1,19.2,19.2,19.1,18.9,18.8,18.7,18.7,18.6,18.6,18.8,19.1,19.3,19.3,19.2,19.2,19.1,18.7,18.2,17.6,17.3,17.3,17.5,17.8,18.4,19.1,19.9,20.4,20.4,19.7,18.7,18,17.8,18.2,19,19.8,20.3,20.6,20.7,20.8,20.8,20.6,20.3,20.1,20.1,20.4,20.6,20.8,20.7,20.4,19.9,19.4,19,18.7,18.3,17.7,17,16.5,16.3,16.1,16,15.9,15.7,15.5,15.4,15.2,15,14.8,14.5,14.3,14,13.8,13.8,13.9,14,14.1,14,13.7,13.5,13.5,13.8,14.1,14.5,14.9,15.2,15.3,15.1,14.9,14.7,14.6,14.6,14.6,14.6,14.6,14.5,14.4,14.2,14.3,0,0,0,0,0,0.1,0.4,1.1,2.4,4.4,6.7,9,10.8,12.5,13.9,15.3,16.8,18.3,19.8,21.2,22.1,22.7,22.8,22.7,22.4,21.8,21.2,20.6,20.1,19.7,19.6,19.5,19.4,19.2,18.9,18.8,18.7,18.8,19,19.3,19.6,19.8,19.7,19.5,19.3,19.5,19.7,19.6,19.2,18.7,18.4,18.4,18.6,18.9,19.3,19.9,20.4,20.7,20.6,20.1,19.3,18.8,18.7,19.2,19.9,20.6,21,21.1,21,20.9,20.7,20.5,20.5,20.5,20.7,20.9,20.8,20.6,20.3,19.8,19.3,18.9,18.7,18.5,18.2,17.8,17.2,16.9,16.7,16.6,16.6,16.5,16.4,16.3,16.1,15.8,15.4,15,14.6,14.3,14.1,13.9,14,14.2,14.4,14.4,14.3,14.1,13.8,13.8,14,14.2,14.6,14.9,15.2,15.2,15,14.8,14.7,14.8,15,15.2,15.3,15.3,15.1,15,14.8,14.9,0,0,0,0,0,0.2,0.6,1.8,4.1,7.3,10.8,13.9,16.2,17.7,18.8,19.6,20.3,21,21.7,22.2,22.5,22.7,22.7,22.6,22.3,21.9,21.5,21.1,20.8,20.6,20.5,20.3,19.9,19.5,19,18.7,18.7,19,19.4,19.9,20.1,20.1,19.8,19.4,19.3,19.5,20,20.3,20.3,20.1,19.9,19.6,19.5,19.5,19.8,20.2,20.6,20.9,20.9,20.7,20.3,20,20.1,20.4,20.9,21.4,21.6,21.7,21.6,21.4,21.2,21.1,21.1,21.2,21.2,21.2,20.9,20.5,20,19.5,19.1,18.7,18.5,18.3,18,17.7,17.4,17.2,17.1,17,16.9,16.7,16.5,16.4,16.2,15.9,15.5,15,14.7,14.5,14.3,14.2,14.2,14.3,14.5,14.6,14.5,14.3,14.1,14,14,14.1,14.4,14.6,14.9,15,14.9,14.8,14.7,14.9,15.2,15.6,15.9,15.9,15.8,15.7,15.5,15.4,0,0,0,0,0,0.2,0.8,2.3,5.1,9.1,13.5,17.2,19.8,21.1,21.7,22,22.3,22.5,22.6,22.7,22.8,22.9,22.9,22.8,22.6,22.2,21.7,21.4,21.2,21.2,21.2,21,20.6,20,19.4,19,18.9,19.2,19.6,20.1,20.3,20.2,19.8,19.4,19.3,19.7,20.4,21.2,21.6,21.7,21.3,20.7,20.3,20.1,20.2,20.5,20.8,21,21.1,21.1,21,20.9,21.1,21.3,21.6,21.9,21.9,22,21.9,21.9,21.9,21.9,22,22,21.8,21.5,21.2,20.8,20.3,19.8,19.4,19,18.6,18.3,18.1,17.9,17.8,17.7,17.6,17.4,17,16.6,16.3,16.1,16,15.8,15.5,15.1,14.9,14.8,14.6,14.5,14.4,14.4,14.6,14.7,14.8,14.7,14.5,14.3,14.1,14,14.1,14.3,14.6,14.9,14.9,14.8,14.8,14.9,15.3,15.8,16.2,16.4,16.4,16.3,16.2,16,0,0,0,0,0,0.2,0.7,2.1,4.8,9,13.8,18,20.8,22.3,22.9,23.1,23.2,23.3,23.3,23.2,23.2,23.3,23.2,23,22.6,22.1,21.6,21.3,21.2,21.3,21.4,21.3,20.9,20.4,19.9,19.5,19.3,19.5,19.8,20.1,20.4,20.3,20,19.7,19.7,20.2,21.1,22.1,22.8,23,22.7,22.2,21.8,21.6,21.5,21.3,21.1,20.9,20.9,21,21,21.1,21.3,21.6,21.9,22.1,22.1,22,22,22.1,22.2,22.4,22.5,22.5,22.4,22.2,21.9,21.5,20.9,20.4,19.9,19.5,19.1,18.7,18.5,18.4,18.4,18.2,18,17.6,17.1,16.7,16.3,16.1,15.9,15.8,15.6,15.4,15.2,15.1,15,14.8,14.6,14.6,14.7,14.9,15.1,15.2,15.1,14.8,14.5,14.2,14.2,14.3,14.6,14.9,15,15,14.9,15,15.3,15.7,16.2,16.6,16.8,16.9,16.8,16.7,0,0,0,0,0,0.1,0.5,1.5,3.7,7.5,12.3,16.9,20.2,22.2,23.1,23.6,23.8,23.7,23.6,23.5,23.5,23.5,23.3,22.9,22.3,21.6,21.1,20.9,20.9,21.1,21.1,21.1,20.9,20.6,20.3,20.1,19.9,19.9,20,20.2,20.4,20.4,20.3,20.2,20.4,21,21.8,22.7,23.4,23.8,24,24,24,23.9,23.4,22.6,21.7,21,20.7,20.6,20.7,20.9,21.2,21.7,22.1,22.3,22.3,22.2,22.1,22.1,22.2,22.3,22.5,22.6,22.6,22.6,22.3,21.9,21.4,20.9,20.5,20.1,19.7,19.5,19.2,18.9,18.7,18.5,18.1,17.8,17.4,17.1,16.8,16.5,16.3,16.1,15.9,15.7,15.6,15.5,15.4,15.1,14.9,14.7,14.8,15.1,15.3,15.4,15.3,15,14.8,14.5,14.4,14.5,14.7,14.9,15.1,15.1,15.1,15.2,15.4,15.7,16.2,16.6,16.9,17.1,17.2,17.2,0,0,0,0,0,0,0.3,0.9,2.6,5.9,10.5,15.4,19.4,22,23.4,24,24.2,24,23.8,23.5,23.4,23.2,22.9,22.4,21.8,21.1,20.8,20.7,20.8,20.9,20.9,20.9,20.8,20.8,20.7,20.6,20.5,20.4,20.4,20.3,20.4,20.5,20.7,21,21.4,21.9,22.3,22.7,23.2,23.8,24.5,25.1,25.4,25.4,24.8,23.7,22.5,21.4,20.8,20.6,20.8,21.1,21.5,22,22.4,22.7,22.7,22.5,22.3,22.2,22.2,22.2,22.2,22.3,22.4,22.4,22.2,22,21.7,21.3,20.9,20.6,20.4,20.1,19.7,19.2,18.9,18.6,18.3,18,17.9,17.8,17.5,17.2,16.8,16.5,16.3,16.2,16.1,16,15.7,15.3,15.1,15,15,15.2,15.3,15.3,15.2,15.2,15,14.9,14.8,14.8,14.9,15.1,15.2,15.3,15.3,15.4,15.6,15.9,16.2,16.4,16.7,17,17.2,17.3,0,0,0,0,0,0,0.1,0.6,1.9,4.6,9,14.3,19.1,22.3,23.9,24.6,24.6,24.3,23.8,23.3,23,22.8,22.6,22.1,21.6,21.2,21,20.9,21,21,21,20.9,20.9,21,21.1,21.2,21.1,21,20.8,20.7,20.7,21,21.5,22,22.4,22.6,22.5,22.5,22.7,23.3,24.1,24.9,25.3,25.2,24.7,23.7,22.6,21.7,21.2,21.1,21.4,21.7,21.9,22.2,22.5,22.7,22.7,22.7,22.6,22.5,22.4,22.3,22.2,22.1,22.1,22.1,22.1,22,21.8,21.5,21.2,20.8,20.6,20.3,19.8,19.4,19,18.8,18.7,18.5,18.4,18.3,18.1,17.7,17.3,17,16.8,16.6,16.5,16.2,15.8,15.5,15.3,15.2,15.3,15.3,15.2,15.2,15.3,15.4,15.4,15.4,15.3,15.2,15.3,15.4,15.5,15.5,15.6,15.7,15.9,16.2,16.3,16.3,16.4,16.6,16.9,17.2,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.8,13.3,18.7,22.5,24.4,25,24.9,24.5,24,23.4,23,22.7,22.6,22.3,22,21.7,21.6,21.6,21.4,21.2,21.1,21,21.2,21.5,21.8,22,21.9,21.6,21.3,21.2,21.4,21.8,22.4,22.9,23.1,22.9,22.6,22.2,22.2,22.6,23.3,23.8,24.1,24,23.4,22.7,21.9,21.4,21.3,21.4,21.7,22,22.1,22.2,22.2,22.3,22.5,22.6,22.7,22.7,22.6,22.4,22.2,22.1,22.2,22.3,22.5,22.5,22.3,21.8,21.3,20.8,20.6,20.4,20.1,19.8,19.6,19.5,19.4,19.2,19,18.7,18.4,18,17.7,17.5,17.3,17.1,16.8,16.3,15.9,15.6,15.4,15.5,15.5,15.5,15.4,15.3,15.4,15.5,15.7,15.7,15.7,15.6,15.6,15.7,15.8,15.8,15.9,16,16.3,16.5,16.5,16.4,16.4,16.6,16.8,17.2,0,0,0,0,0,0,0,0.2,0.9,2.7,6.3,11.6,17.2,21.5,23.9,24.8,24.9,24.6,24.2,23.8,23.4,23.1,22.9,22.7,22.5,22.3,22.2,22,21.8,21.5,21.4,21.4,21.7,22.1,22.6,22.8,22.7,22.2,21.8,21.7,22,22.5,22.9,23.2,23.2,22.9,22.4,22.1,22,22.1,22.4,22.6,22.6,22.3,21.9,21.5,21.1,21.1,21.3,21.5,21.7,21.9,22.1,22.2,22.2,22.2,22.3,22.4,22.6,22.6,22.5,22.3,22.2,22.2,22.4,22.7,23.1,23.2,22.9,22.2,21.5,21.1,20.9,20.8,20.6,20.4,20.3,20.3,20.2,20,19.6,19.2,18.7,18.3,18,17.8,17.6,17.4,17,16.5,16,15.7,15.6,15.7,15.8,15.7,15.5,15.4,15.5,15.6,15.7,15.9,15.9,15.9,15.9,15.9,16,16.1,16.1,16.2,16.4,16.5,16.6,16.6,16.6,16.7,16.9,17.2,0,0,0,0,0,0,0,0.1,0.6,1.9,4.8,9.4,14.8,19.5,22.5,24,24.5,24.5,24.3,24,23.7,23.4,23,22.8,22.6,22.6,22.5,22.3,22.1,21.9,21.9,22,22.3,22.8,23.2,23.5,23.3,22.8,22.4,22.2,22.4,22.8,23,23.1,23,22.7,22.3,22.1,22,22,22,21.8,21.6,21.3,21.1,21,21.1,21.4,21.7,21.9,22,22.1,22.2,22.4,22.5,22.4,22.3,22.3,22.5,22.5,22.5,22.3,22.2,22.2,22.5,22.9,23.3,23.5,23.3,22.8,22.1,21.7,21.5,21.4,21.3,21.1,21,20.8,20.7,20.5,20.1,19.6,19.1,18.6,18.2,18,17.8,17.6,17.2,16.8,16.4,16.1,16,16,16.1,16,15.8,15.7,15.7,15.7,15.8,16,16.1,16.2,16.3,16.4,16.4,16.4,16.3,16.3,16.4,16.5,16.7,16.7,16.7,16.7,16.9,17.1,0,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.5,12.5,17.5,21.2,23.3,24.2,24.4,24.2,23.8,23.5,23.2,22.9,22.7,22.7,22.7,22.7,22.6,22.5,22.4,22.5,22.7,23,23.5,23.9,24.1,24,23.6,23.2,22.8,22.8,23,23.1,23.1,22.9,22.7,22.6,22.5,22.5,22.5,22.3,22,21.6,21.3,21.2,21.3,21.7,22.2,22.6,22.7,22.6,22.5,22.5,22.7,22.7,22.6,22.5,22.6,22.7,22.8,22.9,22.7,22.5,22.3,22.3,22.5,22.9,23.2,23.3,23,22.6,22.2,22,21.9,21.8,21.6,21.4,21.2,21,20.8,20.5,20,19.4,18.8,18.5,18.2,18,17.8,17.6,17.3,17,16.8,16.6,16.5,16.5,16.4,16.3,16.1,16,15.9,16,16.2,16.5,16.7,16.9,17,16.9,16.9,16.7,16.7,16.7,16.7,16.8,16.8,16.8,16.9,17,17.3,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.9,10.6,15.8,20.1,22.9,24.1,24.3,24,23.6,23.2,23.1,23,23,23,23.1,23.2,23.1,23.1,23.1,23.3,23.6,24,24.4,24.7,24.8,24.7,24.4,23.9,23.5,23.3,23.3,23.4,23.4,23.3,23.3,23.3,23.4,23.6,23.5,23.3,22.8,22.3,21.9,21.7,21.8,22.3,22.9,23.3,23.3,23.1,22.8,22.7,22.6,22.7,22.7,22.8,23,23.3,23.5,23.5,23.3,22.9,22.5,22.2,22.2,22.4,22.7,23,23,22.9,22.6,22.3,22.1,22,21.9,21.7,21.5,21.3,21.1,20.7,20.1,19.5,19,18.6,18.3,18.3,18.2,18,17.8,17.6,17.4,17.3,17.2,17.1,16.9,16.7,16.5,16.3,16.2,16.2,16.4,16.7,17.1,17.3,17.4,17.5,17.4,17.4,17.2,17.1,17,16.9,17,17.1,17.3,17.7,18.1,0,0,0,0,0,0,0,0,0.1,0.6,1.9,4.6,8.8,14.1,18.9,22.2,24,24.5,24.3,23.9,23.6,23.5,23.5,23.6,23.6,23.7,23.7,23.8,24,24.2,24.4,24.6,24.9,25.2,25.3,25.2,25,24.8,24.4,24.1,23.9,23.9,24.1,24.2,24.2,24.3,24.4,24.7,24.8,24.8,24.4,23.8,23.1,22.6,22.2,22.3,22.6,23.1,23.3,23.3,23.1,22.9,22.6,22.5,22.6,22.9,23.2,23.5,23.8,24,23.9,23.7,23.2,22.8,22.5,22.3,22.3,22.5,22.8,23,23,22.8,22.5,22.2,22,21.9,21.9,21.8,21.6,21.3,20.8,20.1,19.5,18.9,18.6,18.5,18.6,18.6,18.5,18.2,17.9,17.7,17.8,17.8,17.8,17.6,17.3,17,16.7,16.6,16.6,16.6,16.8,17.1,17.4,17.6,17.8,17.9,17.8,17.7,17.5,17.2,17.1,17.2,17.5,17.9,18.5,19.2,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.4,7.1,12,17.1,21.1,23.6,24.7,25,24.8,24.5,24.2,24,24,24,24,24.2,24.6,25,25.3,25.4,25.5,25.5,25.5,25.5,25.4,25.2,25,24.7,24.5,24.4,24.5,24.8,25.1,25.3,25.5,25.6,25.7,25.6,25.3,24.8,24.1,23.5,23.1,22.8,22.8,23,23.1,23.2,23.1,22.9,22.8,22.7,22.7,22.9,23.2,23.6,23.9,24,24.1,24,23.8,23.5,23.2,23,22.8,22.7,22.7,22.9,23.1,23.1,23,22.7,22.4,22.2,22.1,22.2,22.1,21.9,21.5,20.8,20.1,19.5,19,18.8,18.7,18.8,18.9,18.7,18.4,18,17.8,17.9,18.1,18.2,18.1,17.9,17.6,17.4,17.2,17.1,17.1,17.1,17.2,17.3,17.5,17.8,18,18.1,17.9,17.7,17.5,17.3,17.4,17.7,18.2,18.9,19.8,0,0,0,0,0,0,0,0,0,0.2,0.8,2.2,5.1,9.4,14.4,19.1,22.5,24.5,25.4,25.5,25.2,24.7,24.3,24.1,24,24.2,24.5,25.1,25.6,25.8,25.8,25.7,25.5,25.6,25.6,25.6,25.5,25.2,24.9,24.7,24.6,24.8,25.1,25.5,25.9,26.1,26.2,26.2,25.8,25.2,24.5,24,23.8,23.7,23.7,23.8,23.9,23.8,23.6,23.4,23.1,23,22.9,23,23.2,23.5,23.8,23.9,24,24.1,24,23.9,23.8,23.7,23.6,23.5,23.4,23.4,23.4,23.5,23.4,23.2,22.8,22.6,22.4,22.4,22.5,22.4,22.2,21.7,21.1,20.5,19.9,19.5,19.2,19,19,18.9,18.6,18.3,17.9,17.8,17.8,18,18.2,18.4,18.4,18.3,18.1,17.9,17.7,17.6,17.5,17.4,17.3,17.4,17.7,18,18.1,18.1,17.9,17.7,17.6,17.5,17.7,18.1,18.6,19.4,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,3.1,6.3,10.7,15.6,19.9,23,24.9,25.6,25.6,25.1,24.6,24.3,24.2,24.4,24.8,25.2,25.6,25.7,25.6,25.4,25.4,25.6,25.9,26.1,26,25.7,25.3,25,24.9,25,25.3,25.7,26.1,26.3,26.4,26.3,25.9,25.3,24.6,24.2,24.1,24.2,24.4,24.6,24.9,24.9,24.6,24.1,23.8,23.6,23.4,23.4,23.5,23.7,23.9,24.1,24.3,24.4,24.5,24.4,24.3,24.2,24.1,24.1,24.1,24.1,24,23.8,23.6,23.2,22.9,22.6,22.5,22.4,22.4,22.4,22.2,21.9,21.5,21.1,20.7,20.3,19.8,19.5,19.3,19,18.7,18.4,18.1,17.9,18,18.1,18.4,18.6,18.8,18.8,18.6,18.4,18.1,17.9,17.7,17.5,17.4,17.4,17.6,17.9,18.2,18.3,18.2,18,17.8,17.8,17.8,18,18.3,18.7,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.3,6.5,10.8,15.5,19.7,22.8,24.7,25.4,25.4,25.1,24.8,24.7,24.8,25,25.3,25.4,25.5,25.5,25.5,25.8,26.1,26.4,26.6,26.5,26.3,26,25.7,25.5,25.5,25.6,25.9,26.1,26.4,26.6,26.6,26.3,25.7,25,24.5,24.4,24.4,24.4,24.6,24.9,25.1,25,24.7,24.4,24.2,24,23.8,23.8,24,24.2,24.5,24.8,25.1,25.2,25.1,24.8,24.7,24.6,24.6,24.5,24.4,24.2,23.8,23.4,23.1,22.9,22.7,22.4,22.2,22.1,22,21.9,21.9,21.8,21.6,21.3,20.9,20.4,20,19.7,19.5,19.3,19,18.7,18.5,18.5,18.6,18.9,19.1,19.2,19.2,18.9,18.5,18.1,17.8,17.7,17.6,17.5,17.5,17.7,18.1,18.4,18.6,18.5,18.3,18.2,18.2,18.1,18.1,18.2,18.4,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.4,3.2,6.2,10.3,14.9,19.2,22.6,24.6,25.4,25.5,25.4,25.2,25.1,25.2,25.3,25.4,25.5,25.8,26,26.3,26.7,26.9,27,27.1,27,26.8,26.5,26.2,26,26,26.1,26.4,26.7,26.9,27,26.8,26.2,25.5,24.8,24.4,24.2,24,24.2,24.5,24.7,24.8,24.8,24.7,24.5,24.3,24.1,24.1,24.3,24.5,24.8,25.2,25.5,25.6,25.6,25.4,25.1,25,24.8,24.7,24.5,24.1,23.6,23.2,23,22.8,22.7,22.4,22.1,21.9,21.7,21.7,21.7,21.7,21.7,21.5,21.2,20.8,20.4,20.1,19.9,19.8,19.7,19.5,19.3,19.2,19.3,19.4,19.6,19.6,19.5,19.1,18.6,18.2,17.9,17.8,17.8,17.9,18,18.2,18.4,18.7,18.9,18.9,18.8,18.8,18.8,18.7,18.6,18.6,18.7,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.9,10,14.7,19.1,22.5,24.4,25.2,25.3,25.3,25.2,25.3,25.4,25.5,25.8,26.1,26.4,26.7,27,27.2,27.4,27.5,27.5,27.3,27,26.6,26.4,26.4,26.5,26.8,27.1,27.3,27.4,27.2,26.7,26,25.2,24.6,24.2,23.9,23.9,24.1,24.4,24.6,24.7,24.7,24.6,24.4,24.3,24.3,24.5,24.7,24.9,25.2,25.5,25.7,25.8,25.7,25.5,25.3,25,24.7,24.4,24,23.6,23.3,23.2,23.1,23,22.7,22.4,22.1,21.9,21.7,21.6,21.6,21.6,21.5,21.3,21,20.7,20.4,20.2,20.1,20.1,20,19.9,19.7,19.6,19.7,19.8,19.9,19.8,19.4,19,18.6,18.4,18.4,18.5,18.6,18.8,19,19.1,19.3,19.4,19.4,19.3,19.4,19.4,19.3,19.2,19.2,19.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,2.9,5.9,10.1,14.8,19.1,22.2,23.9,24.7,25,25.2,25.4,25.6,25.8,26,26.2,26.5,26.8,27.1,27.3,27.5,27.7,27.7,27.5,27.1,26.8,26.7,26.8,27,27.2,27.5,27.6,27.6,27.4,27,26.4,25.7,25,24.4,24,23.9,24,24.3,24.6,24.7,24.8,24.7,24.6,24.6,24.8,24.9,25,25.1,25.3,25.5,25.7,25.8,25.9,25.8,25.5,25.1,24.7,24.4,24.1,23.9,23.8,23.7,23.6,23.4,23.1,22.8,22.6,22.3,22,21.7,21.5,21.5,21.5,21.4,21.3,21,20.7,20.5,20.4,20.3,20.2,20,19.8,19.7,19.8,20,20.2,20.2,19.9,19.5,19.3,19.1,19.1,19.3,19.6,19.8,20,20.1,20.1,20.1,20.1,20,19.9,19.9,19.8,19.9,20.3,21.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3.1,6,10.1,14.5,18.5,21.5,23.4,24.4,25,25.4,25.7,25.8,25.9,25.9,26.1,26.4,26.8,27.2,27.5,27.8,27.8,27.6,27.3,27.1,27.1,27.3,27.5,27.6,27.7,27.7,27.7,27.5,27.1,26.7,26.1,25.4,24.8,24.3,24.2,24.3,24.6,24.9,25.1,25.2,25.2,25.2,25.3,25.4,25.5,25.6,25.6,25.6,25.7,25.8,26,26,25.9,25.6,25.1,24.8,24.5,24.4,24.3,24.2,24.1,23.9,23.6,23.2,23,22.8,22.5,22.1,21.8,21.6,21.5,21.5,21.5,21.4,21.2,21,20.8,20.6,20.4,20.2,20,19.8,19.8,20,20.3,20.6,20.7,20.4,20,19.7,19.6,19.7,19.9,20.4,20.9,21.3,21.4,21.2,20.9,20.6,20.4,20.2,20.2,20.3,20.8,21.6,22.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.5,13.8,17.9,21,23,24.3,25,25.4,25.5,25.5,25.5,25.7,26,26.4,27,27.6,28,28.2,28,27.8,27.6,27.6,27.7,27.8,27.9,27.8,27.7,27.6,27.4,27.2,26.8,26.3,25.7,25.1,24.7,24.6,24.8,25.2,25.6,25.8,25.9,25.9,25.9,26,26.1,26.1,26.1,26.1,26.1,26,26,26.1,26.2,26,25.7,25.3,24.9,24.7,24.6,24.5,24.4,24.2,23.9,23.5,23.2,22.9,22.7,22.5,22.2,21.9,21.8,21.7,21.7,21.7,21.6,21.4,21.2,21.1,20.9,20.6,20.4,20.1,20,19.9,20.1,20.4,20.6,20.7,20.4,20.1,19.9,19.8,19.8,20.1,20.9,21.9,22.7,22.7,22.2,21.4,20.8,20.3,20.1,20.2,20.7,21.4,22.4,23.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,1.2,2.7,5.2,8.9,13.2,17.3,20.6,22.8,24.2,24.9,25.2,25.3,25.4,25.6,25.9,26.4,27,27.7,28.4,28.7,28.5,28.2,28,28,28,28.1,28.1,27.9,27.8,27.6,27.5,27.3,26.9,26.4,25.9,25.3,25,25.1,25.6,26.1,26.5,26.6,26.5,26.4,26.3,26.4,26.5,26.5,26.5,26.5,26.4,26.3,26.2,26.2,26.2,26.1,25.8,25.4,25.1,25,24.8,24.7,24.5,24.2,23.8,23.4,23.2,23,22.7,22.5,22.3,22.1,22.1,22.2,22.2,22.1,21.9,21.7,21.6,21.5,21.3,21,20.8,20.5,20.3,20.1,20.1,20.2,20.3,20.3,20.1,20,19.8,19.8,19.9,20.3,21.2,22.5,23.4,23.4,22.6,21.5,20.6,20.1,19.9,20.2,20.7,21.4,22.2,22.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.4,4.8,8.4,12.5,16.6,20.1,22.6,24.1,25,25.4,25.7,25.9,26.3,26.7,27.2,27.8,28.3,28.6,28.6,28.3,28.2,28.2,28.3,28.5,28.4,28.2,27.9,27.7,27.6,27.3,26.9,26.4,25.8,25.5,25.3,25.6,26.2,26.8,27.1,27.1,26.8,26.6,26.5,26.6,26.7,26.8,26.9,26.8,26.7,26.5,26.4,26.4,26.3,26.2,25.9,25.6,25.4,25.2,25.1,24.9,24.6,24.1,23.8,23.5,23.3,23.2,22.9,22.6,22.3,22.2,22.3,22.5,22.7,22.7,22.4,22.2,22,22,21.9,21.6,21.3,20.9,20.6,20.2,20,19.9,19.9,19.9,19.9,19.9,19.9,20,20.1,20.4,21.2,22.2,23,22.9,22.2,21.2,20.4,20,20,20.3,20.7,21,21.4,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.1,4.4,7.6,11.7,15.9,19.7,22.5,24.3,25.3,25.8,26.1,26.5,26.8,27.1,27.4,27.7,27.9,28,28,28,28.2,28.5,28.8,28.7,28.5,28.1,27.8,27.5,27.1,26.7,26.2,25.9,25.7,25.8,26.1,26.5,27,27.2,27.2,27,26.8,26.7,26.8,26.9,27.1,27.2,27.2,27.1,26.9,26.7,26.6,26.5,26.4,26.2,25.9,25.7,25.6,25.4,25.2,24.8,24.4,24,23.8,23.7,23.5,23.2,22.8,22.5,22.4,22.5,22.8,23.1,23.1,22.9,22.6,22.4,22.5,22.4,22.2,21.8,21.3,20.7,20.3,20,19.8,19.8,19.8,19.9,20,20.1,20.2,20.2,20.4,20.9,21.7,22.2,22.2,21.9,21.2,20.7,20.4,20.5,20.7,20.9,20.9,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.7,1.8,3.8,6.9,11,15.5,19.6,22.7,24.6,25.6,26.1,26.4,26.5,26.6,26.7,26.9,27.1,27.4,27.7,28.1,28.5,29,29.2,29.1,28.6,28.1,27.6,27.2,26.7,26.2,26,26,26.2,26.4,26.6,26.8,27,27.2,27.3,27.3,27.3,27.2,27.2,27.2,27.4,27.7,27.7,27.6,27.3,27,26.8,26.7,26.6,26.5,26.3,26.2,26,25.9,25.7,25.3,24.8,24.6,24.5,24.5,24.4,24.1,23.7,23.2,23,23.1,23.4,23.6,23.5,23.2,22.8,22.6,22.7,22.7,22.5,22.1,21.5,20.9,20.5,20.2,20,19.9,19.9,20.1,20.2,20.4,20.4,20.3,20.4,20.9,21.5,22,22.3,22.3,21.9,21.5,21.3,21.2,21.3,21.3,21.1,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.5,3.4,6.7,11,15.9,20.3,23.5,25.2,26,26.3,26.3,26.3,26.3,26.4,26.7,27.2,27.9,28.5,29.1,29.5,29.5,29.1,28.4,27.8,27.2,26.6,26.2,25.9,26,26.3,26.8,27.1,27.2,27.3,27.3,27.4,27.6,27.8,27.9,27.9,27.8,27.7,28,28.2,28.4,28.2,27.9,27.5,27.2,27.1,27,27,26.9,26.9,26.8,26.6,26.2,25.8,25.5,25.4,25.6,25.9,26.2,26.1,25.6,24.8,24.2,24,23.9,23.8,23.6,23.1,22.7,22.6,22.7,22.7,22.6,22.2,21.7,21.2,20.8,20.5,20.3,20.2,20.1,20.2,20.3,20.4,20.4,20.4,20.6,21.1,21.8,22.5,23,23.1,22.9,22.4,22,21.8,21.8,21.7,21.4,21.2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.7,7.3,12.1,17.4,21.7,24.5,25.8,26.2,26.3,26.3,26.5,26.7,27.2,27.9,28.5,29.1,29.4,29.4,29,28.4,27.8,27.2,26.7,26.3,26.1,26.2,26.6,27.1,27.6,27.8,27.8,27.7,27.7,27.8,28.1,28.4,28.5,28.5,28.3,28.3,28.4,28.7,28.8,28.8,28.5,28.1,27.9,27.7,27.6,27.5,27.5,27.5,27.4,27.2,26.9,26.6,26.5,26.7,27.2,27.9,28.4,28.4,27.8,26.8,25.7,24.8,24.2,23.8,23.3,22.9,22.6,22.6,22.7,22.7,22.6,22.3,22,21.6,21.3,21.1,20.9,20.6,20.5,20.4,20.3,20.3,20.4,20.5,20.9,21.4,22.1,22.9,23.5,23.7,23.4,22.8,22.4,22.2,22.1,22.1,21.8,21.5,21.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.9,4.5,8.7,14,19.2,23.1,25.2,26.1,26.4,26.5,26.8,27.3,27.9,28.7,29.2,29.4,29.2,28.7,28.2,27.6,27.2,26.8,26.6,26.6,26.7,27.1,27.6,28,28.3,28.3,28.2,28.1,28,28.1,28.4,28.6,28.8,28.8,28.7,28.7,28.8,29,29.2,29.2,29.1,28.8,28.6,28.3,28.1,28,28,28,28,27.9,27.8,27.8,27.9,28.2,28.7,29.4,29.9,30,29.6,28.6,27.3,25.9,24.7,23.8,23.3,22.9,22.7,22.7,22.8,22.8,22.7,22.5,22.3,22.1,22,21.8,21.6,21.4,21.2,21,20.8,20.6,20.5,20.7,21,21.5,22.1,22.8,23.4,23.5,23.3,22.7,22.3,22.3,22.3,22.4,22.2,21.9,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.7,10.4,15.7,20.5,23.8,25.5,26.3,26.6,27,27.5,28.2,28.8,29.1,29,28.6,28,27.6,27.3,27.1,27.1,27.2,27.4,27.7,28,28.4,28.6,28.7,28.5,28.4,28.3,28.3,28.4,28.6,28.7,28.8,28.8,28.9,28.9,29.1,29.3,29.5,29.6,29.6,29.5,29.3,29,28.8,28.5,28.4,28.4,28.5,28.8,29.1,29.3,29.4,29.6,29.8,30.2,30.6,30.8,30.5,29.9,28.8,27.4,25.9,24.7,23.9,23.3,23,22.9,22.9,22.9,22.8,22.8,22.8,22.7,22.5,22.4,22.2,22.1,22,21.8,21.4,21,20.8,20.8,20.9,21.3,21.8,22.4,22.9,23.1,22.9,22.5,22.3,22.3,22.4,22.5,22.4,22.2,21.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.3,6.8,11.5,16.6,20.9,23.9,25.5,26.4,27,27.5,28,28.4,28.6,28.4,28,27.7,27.5,27.4,27.6,27.8,28.1,28.4,28.6,28.8,28.8,28.8,28.8,28.7,28.6,28.6,28.7,28.9,29,29.1,29.1,29.1,29.1,29.3,29.4,29.6,29.7,29.8,29.9,29.9,29.9,29.7,29.5,29.2,29,28.9,29.2,29.7,30.4,30.9,31,31,30.9,31,31.1,31.2,31.1,30.7,30.1,29.1,27.7,26.3,25.1,24.1,23.5,23.1,23,23,23.2,23.4,23.5,23.4,23.1,22.8,22.6,22.5,22.4,22.2,21.9,21.5,21.1,20.9,21,21.2,21.6,22,22.4,22.6,22.6,22.5,22.3,22.3,22.4,22.5,22.5,22.3,22.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.6,1.6,3.7,7.1,11.6,16.2,20.2,23.2,25.2,26.4,27.2,27.8,28.2,28.3,28.1,27.9,27.6,27.6,27.7,28,28.4,28.9,29.2,29.4,29.4,29.3,29.1,29,29,29,29.1,29.3,29.5,29.6,29.6,29.5,29.5,29.5,29.6,29.7,29.8,29.8,29.8,29.9,30.1,30.3,30.4,30.3,30.2,30,30,30.3,30.9,31.6,32.2,32.5,32.4,32.2,32,31.8,31.6,31.3,31.1,30.9,30.4,29.5,28.2,26.8,25.4,24.2,23.6,23.3,23.4,23.7,24,24.2,24,23.5,23.1,22.9,22.8,22.7,22.6,22.4,22.1,21.8,21.6,21.4,21.4,21.6,21.8,22.1,22.3,22.5,22.5,22.5,22.5,22.5,22.5,22.6,22.6,22.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.6,1.6,3.5,6.5,10.4,14.7,18.6,21.9,24.3,26.1,27.2,28,28.3,28.2,28.1,27.9,27.8,27.9,28.2,28.7,29.3,29.7,29.9,29.9,29.7,29.5,29.3,29.3,29.4,29.6,29.8,30,30.1,30.1,30,29.9,29.8,29.8,29.8,29.9,30,30.1,30.3,30.6,31.1,31.6,31.9,31.9,31.9,31.9,32,32.4,32.9,33.3,33.5,33.4,33,32.5,32.2,31.8,31.5,31.3,31.3,31.1,30.8,29.9,28.5,26.8,25.3,24.2,23.8,23.9,24.2,24.5,24.5,24.3,23.8,23.4,23.2,23.1,23.2,23.4,23.4,23.4,23.2,22.8,22.5,22.2,22,21.9,22,22.2,22.4,22.6,22.7,22.7,22.7,22.7,22.8,23,23]"),U_={bounds:P_,columns:L_,rows:D_,heights:I_},{bounds:[Rl,tu,eu,Cl],columns:Oo,rows:nu,heights:fa}=U_,iu=[37.309805,44.895974],su=1e3,ou=1160;function N_(i){const[t,e]=i.origin,[n,s]=i.scale,o=(iu[0]-t)*n,r=(e-iu[1])*s;return(a,l,c)=>{const h=Math.hypot(a-o,l-r);if(h>=ou)return c;const f=t+a/n,u=e-l/s;if(f<Rl||f>eu||u<tu||u>Cl)return c;const d=(f-Rl)/(eu-Rl)*(Oo-1),m=(Cl-u)/(Cl-tu)*(nu-1),_=Math.min(Math.floor(d),Oo-2),g=Math.min(Math.floor(m),nu-2),p=g*Oo+_,v=ce.lerp(fa[p],fa[p+1],d-_),M=ce.lerp(fa[p+Oo],fa[p+Oo+1],d-_),x=Math.max(.16,ce.lerp(v,M,m-g));return h<=su?x:ce.lerp(x,c,ce.smoothstep(h,su,ou))}}const ru=["#b2a99a","#bbb1a1","#b8ae9e","#b7ab99","#aea394"],F_="#c4baaa",O_="#a39888",au="#4b5351";function B_(i,t,e){const n=Se(i,"Верхняя и нижняя набережные · подпорные стены",{surface:"stone"});for(const s of t.waterfront.sections){if(s.soft)continue;const o={section:s,upper:!0},r={section:s,upper:!1};for(const{a,b:l,span:c}of s.segments){const[h,f]=a,[u,d]=l,m=(f-d)/c,_=(u-h)/c,g=Math.ceil(c/1.25),p=(v,M,x=0,S=0)=>{const b=ce.lerp(h,u,v),E=ce.lerp(f,d,v);return[b+x*m,e.faceHeight(b,E,M)+S,E+x*_]};for(let v=0;v<g;v++){const M=v/g,x=(v+1)/g,[S,,b]=p((M+x)/2,o);if(t.wallOpening(S,b,s))continue;const E=p(M,r,0,-.12),y=p(x,r,0,-.12),w=p(M,o,0,.24),A=p(x,o,0,.24);if(w[1]-E[1]<.55||A[1]-y[1]<.55)continue;n.face(O_,E,y,A,w);const P=Math.max(1,Math.round((w[1]+A[1]-E[1]-y[1])/2/.54));for(let I=0;I<P;I++){const z=(I+.026)/P,k=(I+.976)/P,q=gt(E,w,z),Y=gt(E,w,k),J=gt(y,A,z),j=gt(y,A,k),St=([vt,kt,mt],[pt,V,Q],dt)=>[ce.lerp(vt,pt,dt)-m*.016,ce.lerp(kt,V,dt),ce.lerp(mt,Q,dt)-_*.016];n.face(ru[(v*11+I*7)%ru.length],St(q,J,.009),St(q,J,.991),St(Y,j,.991),St(Y,j,.009))}const L=s.coping??.38;if(n.face(F_,w,A,p(x,o,L,.24),p(M,o,L,.24)),s.rail===!1)continue;const C=(I,z)=>p(I,o,L*.55,z);for(const I of[.43,1.18])n.beam(C(M,I),C(x,I),.038,au);const D=Math.max(1,Math.round(c/g/.28));for(let I=0;I<D;I++){const z=ce.lerp(M,x,I/D);n.beam(C(z,.42),C(z,1.16),I===0?.045:.025,au)}}}}n.finish()}const so=[-287.6,-16.5],da=-.11,oo="#6c4934",an="#ba986f",Vo="#a58b6c",ql=["#674430","#734d37","#7a5239","#6a4734","#815a41"],cu=["#bd282d","#c63134","#c93636","#b9252d"];function Aa([i,t]){return(e,n)=>[i+e*Math.cos(da)-n*Math.sin(da),t+e*Math.sin(da)+n*Math.cos(da)]}const z_=[[-3.32,-1.15],[1.8,-1.12],[3.48,0],[1.8,1.12],[-3.32,1.18]].map(i=>Aa(so)(...i));function k_(i,t){const e=new Es(1,2),n=wo(new se({color:"white",flatShading:!0}),{surface:"foliage"}),s=new zi(e,n,t.length),o=new Ee;t.forEach(({center:r,scale:a,color:l},c)=>{o.position.set(...r),o.scale.set(...a),o.rotation.y=c*.87,o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c,new Zt(l))}),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}function H_(i,t){const e=[[-3.32,.98,1.41],[-2.54,1.13,1.25],[-1.12,1.22,1.09],[.62,1.15,1.06],[2.05,.87,1.17],[3.14,.4,1.42],[3.5,0,1.58]];function n(l,c,h){const[f,u,d]=e[l];return t(f-(l===e.length-1?(1-h)*.6:0),c*u*(.73+.27*h),.22+(d-.22)*h)}for(const l of[-1,1])for(let c=1;c<e.length;c++){for(let h=0;h<7;h++){const f=h/7,u=(h+.96)/7;i.face(ql[(h+c*2)%ql.length],n(c-1,l,f),n(c,l,f),n(c,l,u),n(c-1,l,u))}if(i.beam(n(c-1,l,1),n(c,l,1),.069,an),c<6){const[h,f,u]=e[c],d=c===1?3:4;for(let p=0;p<d;p++){const[v,M,x]=e[c-1],S=p/d,b=v+(h-v)*S,E=l*(M+(f-M)*S),y=x+(u-x)*S;i.beam(t(b,E,y),t(b,E,y+.34),.045,an)}const[m,_,g]=e[c-1];i.beam(t(m,l*_,g+.34),t(h,l*f,u+.34),.057,an)}}const[s,o,r]=e[0];i.face(oo,t(s,-o*.73,.22),t(s,o*.73,.22),t(s,o,r),t(s,-o,r));for(const l of[-.52,.52]){const c=s-.025,h=.3;for(const f of[l-h,l+h])i.beam(t(c,f,.4),t(c,f,1.18),.044,an);for(const f of[.4,1.18])i.beam(t(c,l-h,f),t(c,l+h,f),.044,an);for(let f=0;f<5;f++){const u=f/4;i.beam(t(c,l-h+2*h*u,.43),t(c,l-h,.43+.7*u),.021,an),i.beam(t(c,l+h-2*h*u,.43),t(c,l+h,.43+.7*u),.021,an),i.beam(t(c,l-h+2*h*u,1.14),t(c,l+h,1.14-.7*u),.021,an),i.beam(t(c,l+h-2*h*u,1.14),t(c,l-h,1.14-.7*u),.021,an)}}i.beam(t(s,-o,r+.34),t(s,o,r+.34),.06,an);for(let l=0;l<=10;l++){const c=-o+2*o*l/10;i.beam(t(s,c,r),t(s,c,r+.34),.045,an)}for(let l=1;l<e.length;l++){const[c,h]=e[l-1],[f,u]=e[l];i.face(l%2?"#8e694c":"#856149",t(c,-h,1),t(f,-u,1),t(f,u,1),t(c,h,1))}for(const l of[-1,1])for(const c of[-2.68,-1.87,-.88]){const h=l*(c<-2?1.04:1.12),f=Array.from({length:12},(u,d)=>{const m=d*Math.PI/6;return t(c+Math.cos(m)*.11,h,.66+Math.sin(m)*.1)});i.face("#d0b796",...f)}for(let l=0;l<5;l++){const c=.2+l*.16,h=1.73-l*.13;i.face(an,t(-2.79,h,c),t(-2.13,h,c),t(-2.13,h-.13,c),t(-2.79,h-.13,c))}for(const l of[-2.81,-2.11])i.beam(t(l,1.77,.16),t(l,1.13,1.06),.075,oo);i.beam(t(2.55,0,1.38),t(4.88,0,2.98),.105,an),i.beam(t(4.62,0,2.78),t(1.19,0,4.62),.026,Vo);const a=[];for(let l=0;l<14;l++){const c=l*Math.PI/7;a.push(t(-2.37,Math.cos(c)*.31,1.54+Math.sin(c)*.31))}i.beam(t(-2.37,0,1),t(-2.37,0,1.53),.082,oo),a.forEach((l,c)=>{i.beam(l,a[(c+1)%a.length],.036,an),c%2===0&&i.beam(l,t(-2.37,0,1.54),.025,an)})}function lu(i,t,e,n){i.beam(t(e,0,.99),t(e,0,n),.087,oo);const s=[[1.56,n*.6,1.03],[n*.61,n*.76,.79],[n*.78,n*.9,.55]];for(const[o,r,a]of s){const l=(c,h)=>{const f=Math.sin(h*Math.PI)*(1-c*c);return t(e+.11+.25*f,c*a*(1-h*.2),o+h*(r-o))};for(let c=0;c<4;c++)for(let h=0;h<6;h++){const f=-1+h/3,u=f+1/3,d=c/4,m=(c+1)/4;i.face(cu[h===0||h===5?0:(c+h)%cu.length],l(f,d),l(u,d),l(u,m),l(f,m))}for(const c of[0,1])i.beam(l(-1.06,c),l(1.06,c),.037,oo);for(const c of[-1,1])i.beam(l(c,0),l(c,1),.023,Vo)}for(const o of[-1,1]){i.beam(t(e-.77,o*1.05,1.2),t(e,o*.26,n*.86),.022,Vo),i.beam(t(e+.53,o*1.05,1.2),t(e,o*.26,n*.86),.022,Vo);for(let r=1;r<10;r++){const a=r/11,l=o*(1.05-.79*a),c=1.2+(n*.86-1.2)*a;i.beam(t(e-.77*(1-a),l,c),t(e+.53*(1-a),l,c),.019,Vo)}}}function G_(i,t,e,n,s){for(let o=0;o<14;o++){const r=o*2.399,a=Math.cos(r),l=Math.sin(r),c=s*(.52+.38*(o*7%11/10)),h=t(e+a*.06,n+l*.06,.04),f=t(e+a*.36*s,n+l*.36*s,c*.68),u=t(e+a*.57*s,n+l*.57*s,c),d=["#8c8551","#a09461","#b2a173"][o%3];i.beam(h,f,.027,d),i.beam(f,u,.018,d)}}function hu(i,t,e,n,s){const o=s?["#a34c43","#be8341","#567b56","#496d80","#c6944e"]:["#675644","#665540"];for(const r of[-.79,.79]){const a=s?"#3e684d":"#444a46";i.beam(t(e-.22,n+r,.025),t(e-.18,n+r,.78),.047,a),i.beam(t(e+.23,n+r,.025),t(e+.22,n+r,.43),.047,a),i.beam(t(e-.18,n+r,.43),t(e+.22,n+r,.43),.052,a)}for(let r=0;r<5;r++){const a=e-.19+r*.1;i.beam(t(a,n-.9,.44),t(a,n+.9,.44),.071,o[r%o.length]),i.beam(t(e-.19-r*.012,n-.9,.57+r*.072),t(e-.19-r*.012,n+.9,.57+r*.072),.067,o[(r+1)%o.length])}}function V_(i,t){const e=new pe;e.name="Сквер у Алых парусов",i.add(e);const n=Se(e,"Алые паруса · деревянный кораблик и клумбы",{surfaces:{wood:[oo,an,...ql,"#8e694c","#856149"],ground:["#777653","#797358"]}}),s=Aa(so),o=t(...so)+.15,r=(u,d,m)=>{const[_,g]=s(u,d);return[_,o+m,g]},a=(u,d)=>[[-u,-d],[u,-d],[u,d],[-u,d]].map(([m,_])=>s(m,_));n.shell(a(9,2.18),o-.08,o+.11,"#d7d5bd"),n.flat(a(8.87,2.05),o+.125,"#777653");for(let u=0;u<28;u++){const d=-4.2+u*.318,m=d+.307;n.face(["#628d86","#699892","#7ca39a","#5a8179"][u%4],r(d,-1.45,.145),r(m,-1.45,.145),r(m,1.45,.145),r(d,1.45,.145))}H_(n,r),lu(n,r,-1.03,5.02),lu(n,r,.98,4.6),hu(n,r,9.27,.08,!0);for(const[u,d,m]of[[-7.25,-.95,1.06],[-6.45,.52,.72],[-5.35,1.11,.93],[4.35,1.4,.89],[5.48,-1.23,1.1],[6.8,.44,.99],[7.85,1.12,.83]])G_(n,r,u,d,m);const l=[],c=["#415c35","#536c3b","#66804c","#4d6540"],h=[[-344.6,-12.8,9.8,3.45],[-326.5,-13.4,10.5,3.4],[-310.6,-14.2,12.5,3.7],[-265.5,-20.3,15,4.7],[-247.5,-23.4,10.8,4.5]];for(const[u,[d,m,_,g]]of h.entries()){const p=Aa([d,m]),v=t(d,m)+.14,M=(x,S)=>[[-x,-S],[x,-S],[x,S],[-x,S]].map(b=>p(...b));n.shell(M(_/2,g/2),v-.1,v+.12,"#d4d3c5"),n.flat(M(_/2-.12,g/2-.12),v+.13,"#797358");for(const x of[-.29,.02,.32]){const[S,b]=p(x*_,(u%2-.5)*.8),E=1.15+.51*((u+Math.round(x*10))%3+3)/3;for(let y=0;y<4;y++){const w=E*(.5-y*.095);l.push({center:[S,v+E*(.28+y*.19),b],scale:[w,E*.26,w*.9],color:c[(y+u)%c.length]})}}for(let x=0;x<7;x++){const[S,b]=p((x/6-.5)*_*.75,-.9);l.push({center:[S,v+.2,b],scale:[.42,.16,.42],color:x%3?"#804944":"#77673c"})}}for(const[u,d]of[[-301.1,-31],[-290.8,-31.7],[-273.1,-34.3],[-260.6,-35],[-247.5,-37.5]]){const m=Aa([u,d]),_=t(u,d)+.15;hu(n,(p,v,M)=>{const[x,S]=m(v,-p);return[x,_+M,S]},0,0,!1)}const f=[[-318,0,6.2],[-310.5,-.4,7.7],[-301,1.5,6.4],[-292.2,-.9,8.3],[-282.1,-1.8,7.6],[-272.4,.8,8.7],[-261,-1.2,6.8],[-249.6,.5,7.3]];for(const[u,[d,m,_]]of f.entries()){const g=t(d,m)+.05;n.beam([d,g,m],[d+.13,g+_*.69,m],.24,"#665949");for(let p=0;p<6;p++){const v=p*2.399,M=_*(p<4?.21:.14);l.push({center:[d+Math.cos(v)*M,g+_*(.6+p*.047),m+Math.sin(v)*M],scale:[_*.26,_*.27,_*.23],color:c[(u+p)%c.length]})}}k_(e,l),n.finish()}function uu(i){const t=new Nc(i);return t.colorSpace=je,t.anisotropy=4,t}function Ge(i,{text:t,position:e,size:n,outward:s,color:o="#fff",background:r,weight:a=700,fontFamily:l="system-ui, sans-serif",letterSpacing:c="0px",lighting:h="spot",glowColor:f="#ffe4af",spill:u=!0}){if(typeof document>"u")return;const d=document.createElement("canvas");d.width=Math.max(160,Math.min(768,Math.round(n[0]*138))),d.height=Math.max(32,Math.round(d.width*n[1]/n[0]));const m=d.getContext("2d");if(!m)return;r&&(m.fillStyle=r,m.fillRect(0,0,d.width,d.height));const _=t.split(`
`);let g=d.height*.76/_.length;m.letterSpacing=c,m.font=`${a} ${g}px ${l}`,g*=Math.min(1,d.width*.93/Math.max(..._.map(S=>m.measureText(S).width)));function p(S,b,E=0){S.font=`${a} ${g}px ${l}`,S.letterSpacing=c,S.fillStyle=b,S.textBaseline="middle",S.textAlign="center",_.forEach((y,w)=>{S.fillText(y,E+d.width/2,E+d.height/2+(w-(_.length-1)/2)*g*1.13)})}p(m,o);const v=new qn({map:uu(d),alphaTest:.35,toneMapped:!1}),M=new he(new oi(...n),v);M.name=t,M.position.set(...e),M.rotation.y=Math.atan2(...s);let x;if(h==="neon"||h==="backlit"){const S=h==="neon",b=Math.min(44,Math.round(d.width*.12)),E=document.createElement("canvas");E.width=d.width+2*b,E.height=d.height+2*b;const y=E.getContext("2d");y.shadowColor=f,y.shadowBlur=Math.min(b,Math.max(8,g*(S?.64:.27))),p(y,f,b),S&&(y.shadowBlur=0,y.globalAlpha=.18,p(y,"#fff1dd",b));const w=n[0]*E.width/d.width,A=n[1]*E.height/d.height;x=new he(new oi(w,A),new qn({map:uu(E),transparent:!0,opacity:S?.94:.79,blending:ho,depthWrite:!1,toneMapped:!1})),x.position.z=.014,x.visible=!1,M.add(x)}if(h!=="unlit"&&u){const S=new Ee;S.position.set(0,h==="spot"?n[1]*.64:0,h==="spot"?.75:.54),S.userData.nightLight={color:f,intensity:h==="neon"?3.8:2.2,range:h==="spot"?3.6:3.1},M.add(S)}return M.userData.setEvening=S=>{const b={spot:.82,backlit:.43,neon:.16,unlit:.5};v.color.setScalar(S?b[h]??.82:1),x&&(x.visible=S)},i.add(M),M}const ze="#f4f2e9",hd="#e9e7df",un="#373e3e",Ra="#303637",ro="#b28c5e",mc=["#d1b27a","#bc9c63","#c8a86f"],W_="#ecefe8",ns=[[-416.6,-27.8,-17.5],[-408.5,-25.4,-15.7],[-399.5,-23.2,-14.7],[-389.5,-22.8,-14.6],[-378.4,-23.1,-14.8]],ud=[[-415.65,-26.9],[-407.4,-24.5],[-408.6,-16.85],[-416.1,-18.05]];function fd(i,t,e,n){return[[i,e],[t,e],[t,n],[i,n]]}function vi(i,t,e,n,s=24){return Array.from({length:s},(o,r)=>{const a=r*2*Math.PI/s;return[i+e*Math.cos(a),t+n*Math.sin(a)]})}function Ae([i,t],e){return[i,e,t]}function pa(i,t){const e=ns.findIndex(([o])=>o>=i);if(e<0)return ns.at(-1)[t];const n=ns[Math.max(0,e-1)],s=ns[Math.max(0,e)];return n===s?n[t]:n[t]+(s[t]-n[t])*(i-n[0])/(s[0]-n[0])}function Mn(i,t,e,n,s,o,r,a){i.shell(fd(t-s/2,t+s/2,n-r/2,n+r/2),e,e+o,a)}function X_(i,t){const e=new pe;e.name="Кофейня Qúeue",i.add(e);const n=Se(e,"Павильон и кофейная стойка",{surfaces:{wood:["#b48558","#796c51"],foliage:["#737a51","#68774a","#83916b"]}}),s=wo(new qn({color:"#759497",transparent:!0,opacity:.26,depthWrite:!1,side:hn}),{surface:"glass",strength:.6}),o=ud,r=t(-412.5,-21.7),a=r+.09,l=r+2.82;n.shell(o,r-.18,a,"#c9c5b5"),n.shell(o,l,r+3.12,ze),n.wall(o[3],o[0],a,l,ze);for(const[f,u]of[[0,[0,.13,.32,.54,.76,.95,1]],[1,[0,.14,.39,.64,.89,1]],[2,[0,.28,.43,.58,.7,.88,1]]]){const d=o[f],m=o[f+1],_=m[0]-d[0],g=m[1]-d[1],p=Math.hypot(_,g);for(let v=0;v<u.length-1;v++){const M=gt(d,m,u[v]),x=gt(d,m,u[v+1]);if(v===0||v===u.length-2){n.wall(M,x,a,l,ze);continue}const b=f===2&&v===4,E=f===2&&v===3,y=b||E?r+2.48:l;y<l&&n.wall(M,x,y,l,ze);const w=gt(M,x,.5),A=E?r+1.1:a;E&&(n.wall(M,x,a,A,"#a8a494"),n.beam([M[0],A,M[1]],[x[0],A,x[1]],.12,Ra));const P=new he(new oi((u[v+1]-u[v])*p,y-A),s);P.position.set(w[0],(A+y)/2,w[1]),P.rotation.y=-Math.atan2(g,_),e.add(P);for(const L of[M,x])n.beam(Ae(L,a),Ae(L,y),.058,Ra);if(n.beam(Ae(M,y),Ae(x,y),.055,Ra),b){const L=gt(M,x,.82);n.beam(Ae(L,r+.92),Ae(L,r+1.3),.052,"#bab4a5")}}}const c=[[-415.28,-22.2],[-414.15,-22.2],[-413.68,-21.78],[-413.68,-19.92],[-412.9,-19.25],[-411.05,-19.25],[-410.8,-18.65],[-411.22,-18.34],[-414.68,-18.67],[-415.25,-19.13]];n.shell(c,a,r+1.07,"#e4decd"),n.shell(c,r+1.07,r+1.14,"#f1e9d7");const h=c.map(f=>gt([-413.5,-19.8],f,1.03));n.shell(h,r+2.08,r+2.15,"#eac58a"),n.shell(h,r+2.15,l,"#e3dbc9"),Mn(n,-413.54,r+1.14,-19.02,.86,.46,.45,"#343435"),Mn(n,-413.54,r+1.5,-18.79,.76,.08,.04,"#a7a199");for(const f of[-413.8,-413.62,-413.44,-413.26])n.shell(vi(f,-18.99,.06,.06,10),r+1.6,r+1.76,"#b48558");Mn(n,-411.83,r+1.14,-18.85,.85,.34,.46,"#948273"),Mn(n,-411.83,r+1.48,-18.85,.85,.046,.46,"#bbb2a0");for(const[f,u]of[[-412.4,-21.8],[-410.8,-21.2]])n.shell(vi(f,u,.21,.21,14),a,r+.47,"#e0d9c9"),n.shell(vi(f,u,.32,.32,14),r+.47,r+.52,"#ece4d2");for(const f of[.19,.39,.59,.79]){const[u,d]=gt(o[0],o[1],f),m=t(u,d-.66);for(const _ of[-.24,.24])n.beam([u+_,m,d-.82],[u+_,m+.43,d-.82],.022,un),n.beam([u+_,m,d-.36],[u+_,m+.86,d-.28],.026,un),n.beam([u+_,m+.41,d-.82],[u+_,m+.41,d-.35],.032,un);for(let _=0;_<7;_++){const g=m+.45+_*.063,p=d-.34+_*.008;n.beam([u-.24,g,p],[u+.24,g,p],.015,un)}Mn(n,u,m+.41,d-.58,.48,.05,.42,un)}for(const f of[.04,.94]){const[u,d]=gt(o[0],o[1],f);q_(n,u,t(u,d-.64),d-.64)}n.finish()}function q_(i,t,e,n){i.shell(vi(t,n,.26,.26,12),e,e+.5,"#e6e7dd"),i.flat(vi(t,n,.22,.22,12),e+.505,"#6b6154"),i.beam([t,e+.5,n],[t+.04,e+1.39,n+.02],.035,"#796c51");for(let s=0;s<9;s++){const o=s*2.4,r=e+.79+s*.075,a=[t+.21*Math.cos(o),r+.11,n+.21*Math.sin(o)];i.beam([t,r,n],a,.024,"#737a51"),i.face(s%2?"#68774a":"#83916b",a,[t+.025,r,n+.06],[a[0]*.5+t*.5,r+.17,a[2]*.5+n*.5])}}function Y_(i){const t=new pe;t.name="Ресторан «Море. Истории о еде»",i.add(t);const e=Se(t,"Белая терраса у «Старинной Анапы»",{surfaces:{wood:[ro,...mc],ground:["#6b6154"]}}),{front:[n,s],grade:o}=gs,r=(u,d)=>{const[m,_]=gt(n,s,u/32.59);return[m-d*.197,_+d*.98]},a=(u,d,m,_)=>[r(u,m),r(d,m),r(d,_),r(u,_)],l=o+.15,c=l+2.94;e.shell(a(0,32.59,0,1.9),l-.34,l,"#b6aa94"),e.shell(a(0,32.59,7.1,9.15),l-.34,l,"#b6aa94");for(const[u,d]of[[0,7.3],[12.1,20.4],[24.9,32.59]])e.shell(a(u,d,1.9,7.1),l-.34,l,"#b6aa94");for(const[u,d,m,_]of[[0,32.59,0,1.9],[0,32.59,7.1,9.15],[0,7.3,1.9,7.1],[12.1,20.4,1.9,7.1],[24.9,32.59,1.9,7.1]])for(let g=u+.13;g<d;g+=.34)e.beam(Ae(r(g,m),c),Ae(r(g,_),c),.077,ze);for(let u=0;u<6;u++){const d=c-.02+u*.09;e.beam(Ae(r(0,0),d),Ae(r(32.59,0),d),.066,ze);for(const m of[0,32.59])e.beam(Ae(r(m,0),d),Ae(r(m,9.15),d),.066,ze)}for(const u of[.14,4.55,8.98,13.41,17.84,22.27,26.7,32.43])e.beam(Ae(r(u,.22),l),Ae(r(u,.22),c+.44),.165,ze);for(const u of[2.35,6.82,11.25,15.66,20.07,24.48,28.89,31.3]){e.shell(a(u-.76,u+.76,.16,.72),l,l+.65,ze);for(let _=1;_<=5;_++){const g=l+.1+_*.085;e.beam(Ae(r(u-.75,.153),g),Ae(r(u+.75,.153),g),.02,hd)}e.flat(a(u-.7,u+.7,.2,.68),l+.655,"#788166");const[d,m]=r(u,1.34);Mn(e,d,l+.69,m,.82,.07,.7,"#ab8d63"),Mn(e,d,l,m,.08,.69,.08,"#545549")}const[h,f]=r(25.4,-.05);Ge(t,{text:"МОРЕ",position:[h,c+.2,f],size:[2.28,.41],outward:[.197,-.98],color:"#6e553a",lighting:"spot",glowColor:"#ffd089"});for(const u of[24.65,25.4,26.15])e.beam(Ae(r(u,-.018),c+.5),Ae(r(u,-.17),c+.44),.041,"#70664f");e.finish()}function Z_(i,t,e,n,s){const o=new pe,r=new qn({color:"#c9ba98",toneMapped:!1}),a=new wn(.043,8,6),l=4,c=16;let h;for(let f=0;f<=c;f++){const u=f/c,[d,m]=gt(e,n,u),_=s-.18*Math.sin(Math.PI*(u*l%1)),g=[d+.13,_,m];if(h&&t.beam(h,g,.015,"#353535"),h=g,f===c)continue;const p=new he(a,r);p.position.set(d+.13,_-.052,m),f%4===2&&(p.userData.nightLight={color:"#ffe4ad",intensity:3.5,range:3.4}),o.add(p)}o.userData.setEvening=f=>r.color.set(f?"#fff0be":"#c9ba98"),i.add(o)}function $_(i,t){const e=new pe;e.name="Гриль-бар «Бикью»",i.add(e);const n=Se(e,"Остеклённый фасад на Греческом переулке",{surfaces:{flatRoof:["#353635"],stone:["#77726a"],wood:["#403731"]}}),s=[[-456.42,4.1],[-456.94,24.1]],o=[[-458.12,4.1],[-458.64,24.1]],r=[o[0],s[0],s[1],o[1]],a=t(-457,14.1)+.11,l=Math.min(...s.map(d=>t(...d)))-.2,c=a+2.82;n.shell(r,l,a+.12,"#77726a"),n.shell(r,c,c+.21,"#353635"),n.wall(...o,a+.1,c,"#403731");const h=wo(new qn({color:"#394c50",transparent:!0,opacity:.53,depthWrite:!1,side:hn}),{surface:"glass",strength:.7});for(const[d,m,_]of[[...s,14],[o[0],s[0],1],[s[1],o[1],1]])for(let g=0;g<_;g++){const p=gt(d,m,g/_),v=gt(d,m,(g+1)/_),M=gt(p,v,.5),x=v[0]-p[0],S=v[1]-p[1],b=new he(new oi(Math.hypot(x,S),c-a-.12),h);if(b.position.set(M[0],(c+a+.12)/2,M[1]),b.rotation.y=-Math.atan2(S,x),e.add(b),n.beam(Ae(p,a+.08),Ae(p,c),.074,"#292c2b"),n.beam(Ae(p,a+.85),Ae(v,a+.85),.041,"#393b39"),_===14&&g!==6&&g!==7){for(const E of[.12,.45]){const y=Math.max(0,t(M[0]+.15,M[1])-a),w=(A,P)=>{const[L,C]=gt(p,v,A+E);return[L+.025,a+P+y,C]};n.face("#c89045",w(0,.36),w(.14,.36),w(.31,.6),w(.17,.6)),n.face("#c89045",w(.17,.6),w(.31,.6),w(.14,.84),w(0,.84))}Mn(n,M[0]-.75,a+.71,M[1],.55,.09,.62,"#856747"),Mn(n,M[0]-.75,a+.1,M[1],.07,.61,.07,"#343330")}}Z_(e,n,...s,c-.06);const f=new qn({color:"#757078",toneMapped:!1}),u=new he(new Ce(.047,.047,3),f);u.position.set(-457.8,c-.27,7.7),u.userData.setEvening=d=>f.color.set(d?"#ac91ff":"#757078"),u.userData.nightLight={color:"#9b78ff",intensity:2.5,range:3.3},e.add(u),Ge(e,{text:`BAR
BQ`,position:[-456.54,a+1.36,13.98],size:[1.34,1.17],outward:[1,.026],color:"#cac2a7",weight:550,lighting:"unlit"}),n.finish()}function K_(i,t,e){const n=new qn({color:"#d2d0c2",toneMapped:!1}),s=new pe;for(const o of[1,2]){const r=Array.from({length:41},(c,h)=>{const f=ce.lerp(e[0],e.at(-1),h/40),[u,d,m]=t(f,o,-.18);return new O(u,d,m+(o===1?-.05:.05))}),a=new Bc(r),l=new he(new Lr(a,85,.026,5,!1),n);s.add(l)}s.userData.setEvening=o=>n.color.set(o?"#fff2d7":"#d2d0c2"),i.add(s)}function J_(i,t){const e=new pe;e.name="Лаундж-зона «Очередь»",i.add(e);const n=Se(e,"Волнообразный навес и кофейня"),s=(m,_)=>t(m,_)+.19,o=m=>{const _=(m+395.7)/5.6;return s(m,pa(m,2))+3.65+1.08*Math.exp(-(_**2))},r=(m,_,g=0)=>[m,o(m)+g,pa(m,_)],a=[-416.6,-409.3,-403.8,-388.6,-383.6,-378.4];for(const m of[1,2])for(let _=1;_<a.length;_++){const g=a[_-1],p=a[_],v=Math.ceil((p-g)/.37);let M,x;for(let S=0;S<=v;S++){const b=S/v,E=g+(p-g)*b,y=pa(E,m),w=s(E,y),A=Math.sqrt(Math.max(0,1-(2*b-1)**2)),P=[E,w+.09+(o(E)-w-.36)*A,y],L=r(E,m);M&&(n.beam(M,P,.18,ze),n.beam(x,L,.2,hd),n.beam([x[0],x[1]-.23,x[2]],r(E,m,-.23),.075,ze)),(S>0||_===1)&&n.beam(P,L,S===0||S===v?.18:.065,ze),M=P,x=L}}for(let m=0;m<=94;m++){const _=a[0]+(a.at(-1)-a[0])*m/94;n.beam(r(_,1,-.11),r(_,2,-.11),.1,ze)}K_(e,r,a),X_(e,s);const l=-412.2,c=o(l)-.1,h=(ns[1][2]-ns[0][2])/(ns[1][0]-ns[0][0]),f=[-h,1],u=pa(l,2)+.15,d=[[-1.65,-.04],[1.65,-.04],[1.65,.04],[-1.65,.04]].map(([m,_])=>[l+m,u+m*h+_]);n.shell(d,c-.21,c+.21,ze),Ge(e,{text:"Qúeue · кофе и море",position:[l,c,u+.05],size:[3.2,.39],outward:f,color:Ra,lighting:"spot"}),n.finish()}function fu(i,t,e,n){const s=t(e,n)+.16,o=vi(e,n,3.45,2.35);i.shell(o,s-.24,s+.08,ro);for(let a=-10;a<=10;a++){const l=a*.22,c=3.4*Math.sqrt(1-(l/2.35)**2);i.beam([e-c,s+.084,n+l],[e+c,s+.084,n+l],.018,mc[(a+12)%mc.length])}for(const a of[-1,1]){const l=[e+a*2.5,n];i.shell(vi(...l,.095,.095,10),t(...l)-.12,s+3.05,ze)}const r=vi(e,n,3.55,2.45,32);for(let a=0;a<r.length;a++)i.beam(Ae(r[a],s+2.88),Ae(r[(a+1)%r.length],s+2.88),.13,ze);for(let a=-8;a<=8;a++){const l=a*.4,c=2.41*Math.sqrt(1-(l/3.55)**2);i.beam([e+l,s+2.89,n-c],[e+l,s+2.89,n+c],.09,ze)}for(const a of[-.23,-.09,.09,.23]){const l=Array.from({length:32},(c,h)=>{const f=h*Math.PI/16;return[e+.97*Math.cos(f),s+1.38+.99*Math.sin(f),n+a]});for(let c=0;c<l.length;c++)i.beam(l[c],l[(c+1)%l.length],.035,ze)}Mn(i,e,s+.55,n,1.08,.055,.48,ro);for(const a of[-.57,.57])i.beam([e+a,s+2.21,n],[e+a,s+2.89,n],.018,un)}function Q_(i,t){const s=t(-397.8,-29.25)+.18;for(const r of[-2.28,2.28])i.shell(vi(-397.8+r,-29.25,.085,.085,12),s-.14,s+3.38,ze);const o=[[-397.8-3.18,s+2.77,-29.25+.45],[-397.8-3.27,s+3,-29.25-1.37],[-397.8,s+2.67,-29.25-.72],[-397.8+3.29,s+3.02,-29.25-1.3],[-397.8+3.14,s+2.8,-29.25+.49]];for(let r=0;r<o.length;r++)i.beam(o[r],o[(r+1)%o.length],.085,ze);for(let r=0;r<20;r++){const a=(r+1)/21,l=a<.5?gt(o[1],o[2],a*2):gt(o[2],o[3],(a-.5)*2);i.beam(l,gt(o[0],o[4],a),.064,ze)}}function j_(i,t){const e=new pe;e.name="Качели, теневые крылья и белые галечные сиденья",i.add(e);const n=Se(e,"Настилы и мебель",{surfaces:{wood:[ro,...mc]}});fu(n,t,-410.7,-30.1),fu(n,t,-382.8,-25.55),Q_(n,t);const s=new wn(1,24,12),o=new se({color:W_});for(const[f,u,d,m,_,g]of[[-401.9,-30.05,1.12,.69,.41,.18],[-402.7,-27.65,.88,.65,.4,-.29],[-399.6,-26.05,1.26,.72,.43,-.14],[-396.7,-28.5,.73,.62,.41,.26],[-395.1,-26.05,.98,.68,.43,-.31]]){const p=new he(s,o);p.scale.set(d,_,m),p.rotation.y=g,p.position.set(f,t(f,u)+_+.15,u),p.castShadow=!0,p.receiveShadow=!0,e.add(p)}for(const[f,u]of[[-406.2,-20.1],[-403,-18.2],[-390.1,-17.3]]){const d=t(f,u)+.15;n.shell(vi(f,u,.38,.38,16),d+.72,d+.77,un),n.beam([f,d,u],[f,d+.72,u],.045,un);for(const m of[-.74,.74]){Mn(n,f+m,d+.43,u,.42,.055,.42,un);for(const _ of[-.16,.16])for(const g of[-.15,.15])n.beam([f+m+_,d,u+g],[f+m+_,d+.43,u+g],.029,un);n.wall([f+m*1.25,u-.19],[f+m*1.25,u+.19],d+.46,d+.81,un)}}const r=-387.7,a=-20.4,l=t(r,a)+.16,c=fd(r-.92,r+.92,a-.72,a+.72);n.shell(c,l-.12,l+.42,ro);for(const f of c)n.beam(Ae(f,l),Ae(f,l+1.75),.09,ro);const h=[[r-1,l+2.35,a],[r+1,l+2.35,a]];for(const f of[-1,1])n.face("#99704d",...h,[r+1.03,l+1.72,a+f*.82],[r-1.03,l+1.72,a+f*.82]);n.finish()}function tx(i,t){const e=Se(i,"Памятный знак Матери Марии"),n=-652.7,s=-66.6,o=t(n,s)+.1,r=[[-1.02,-.42],[-.73,-.78],[.59,-.78],[1.05,-.39],[1.15,.24],[.91,.59],[-.78,.61],[-1.1,.18]],l=[[-.63,.68,-.21],[-.42,1.14,-.51],[.04,1.53,-.56],[.53,1.25,-.39],[.84,.85,-.01],[.88,.47,.37],[-.76,.48,.43],[-.94,.59,.16]].map(([h,f,u])=>[n+h,o+f,s+u]),c=r.map(([h,f])=>[n+h,o-.13,s+f]);for(let h=0;h<r.length;h++){const f=(h+1)%r.length;e.face(h%2?"#706f67":"#666860",c[h],c[f],l[f],l[h]),e.face(h%3?"#8e928b":"#a4a79f",l[h],l[f],[n+.03,o+.95,s-.01])}e.beam([n+.02,o+.05,s+1],[n+.08,o+1.58,s-.57],.14,"#807f71"),e.beam([n-.82,o+1,s+.055],[n+.9,o+1,s+.055],.14,"#807f71");for(let h=0;h<3;h++)for(const[f,u]of[-1.2,-.6,.035,.635].entries()){const d=n+u+.286,m=s+1.33+h*.58,_=t(d,m)+.035;Mn(e,d,_-.08,m,.57,.09,.56,f===0||f===3?"#a78277":"#929897")}e.finish()}function ex(i,t){const e=Se(i,"Памятник морскому десанту"),n=-631.7,s=-37.2,o=t(n,s)+.09,r=(l,c,h)=>[n+l,o+c,s+h];Mn(e,n,o-.12,s+.45,2.85,.23,2.35,"#bbb6aa"),Mn(e,n,o+.11,s+.3,2.19,.26,1.57,"#424545"),Mn(e,n,o+.37,s-.25,1.06,2.08,.22,"#333837");const a=Array.from({length:10},(l,c)=>{const h=Math.PI/2+c*Math.PI/5,f=c%2?.064:.151;return r(-.28+f*Math.cos(h),2.12+f*Math.sin(h),-.135)});for(let l=0;l<a.length;l++)e.face("#b6a06b",r(-.28,2.12,-.135),a[l],a[(l+1)%a.length]);e.beam(r(-.34,.52,.73),r(.73,1.39,.54),.13,un),e.beam(r(-.44,.58,.48),r(-.2,.53,.95),.18,un);for(const[l,c]of[[[-.66,.79,.72],[-.62,1.33,.65]],[[-.21,.84,.7],[.01,1.35,.58]]])e.beam(r(-.37,.57,.74),r(...l),.11,un),e.beam(r(...l),r(...c),.1,un),e.face(un,r(...c),r(c[0]-.1,c[1]-.26,c[2]+.07),r(c[0]+.08,c[1]-.23,c[2]-.05));for(const l of[-1,0,1]){const c=l*.82,h=l*1.21,f=[r(c-.32,.28,1.72),r(c+.32,.28,1.72),r(h+.37,.19,3.17),r(h-.37,.19,3.17)],u=f.map(([d,,m])=>[d,t(d,m)-.08,m]);e.face("#b7b5ac",...f);for(let d=0;d<f.length;d++){const m=(d+1)%f.length;e.face("#a7a8a1",f[d],f[m],u[m],u[d])}e.face("#444746",r(c-.25,.294,1.8),r(c+.25,.294,1.8),r(h+.28,.216,3.05),r(h-.28,.216,3.05))}e.finish()}function nx(i,t){J_(i,t),j_(i,t),Y_(i),$_(i,t),tx(i,t),ex(i,t)}const Ss=Math.PI*2;function lr(i,t,e,n=36){return Array.from({length:n},(s,o)=>{const r=o/n*Ss;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function ix(){const e=new Uint8Array(18432);for(let s=0;s<48;s++){const o=(s+.5)/48;for(let r=0;r<96;r++){const a=r/96*Ss,l=Math.max(0,Math.sin(a*3)*.06+Math.sin(a*7+.4)*.035),c=o>.51+l?[173+o*46,196+o*36,211+o*38]:o>.42?[71,78,66]:[122+o*71,113+o*77,99+o*86],h=(s*96+r)*4;e.set([...c,255],h)}}const n=new Ic(e,96,48);return n.colorSpace=je,n.mapping=Qo,n.needsUpdate=!0,new ar({color:"#ced3d4",envMap:n,reflectivity:.88,specular:"#f2f5f5",shininess:78})}function sx(i,t){const s=Se(i,"Фонтан «Жемчужина Анапы»"),o=(d,m,_=0)=>[d,t(d,m)+.17+_,m],r=lr(-238,2,3.5),a=lr(-238,2,3.71);r.forEach(([d,m],_)=>{const g=(_+1)%r.length;s.face("#555857",o(-238,2),o(d,m),o(...r[g])),s.face("#997359",o(d,m),o(...a[_]),o(...a[g]),o(...r[g]))});for(let d=0;d<28;d++){const m=d*Ss/28,_=lr(-238+2.85*Math.cos(m),2+2.85*Math.sin(m),.036,8);s.face("#a7a8a1",..._.map(g=>o(...g,.008)))}const l=.13;for(let d=0;d<6;d++){const m=l+d*Ss/6;for(let _=0;_<5;_++){const g=m-.34+_*.135,p=g+.133,v=(E,y,w)=>o(-238+Math.cos(E)*y,2+Math.sin(E)*y,w),M=v(g,4.43,.44),x=v(p,4.43,.44),S=v(g,4.93,.36),b=v(p,4.93,.36);s.face("#9e9a90",M,x,v(p,4.41,-.045),v(g,4.41,-.045)),s.face("#8e8b84",v(g,5.06,.02),v(p,5.06,.02),v(p,5.06,.1),v(g,5.06,.1)),s.face("#bf8770",M,x,b,S),s.face("#b67e64",S,b,v(p,5.06,.1),v(g,5.06,.1)),_===0&&s.face("#a39d92",M,S,v(g,5.06,.02),v(g,4.41,-.045)),_===4&&s.face("#a39d92",x,b,v(p,5.06,.02),v(p,4.41,-.045))}}const c=new pe;c.name="Шесть зеркальных сфер",i.add(c);const h=new wn(1,28,20),f=ix(),u=[[0,0,.57,3.35],[-1.65,1.12,.56,.86],[1.77,-.98,.48,1.12],[-2.31,-1.72,.51,0],[2.44,1.69,.47,0],[.47,-2.67,.43,0]];for(const[d,m,_,g]of u){const[p,v,M]=o(-238+d,2+m),x=new he(h,f);if(x.scale.setScalar(_),x.position.set(p,v+_+g,M),x.castShadow=!0,c.add(x),!!g)for(let S=0;S<11;S++){const b=S/11*Ss,E=b+.88;s.beam([p+Math.cos(b)*.13,v,M+Math.sin(b)*.13],[p+Math.cos(E)*_*.63,v+g+.13,M+Math.sin(E)*_*.63],.026,"#a5a7a4")}}s.finish()}function ox(i,t){const o=Math.cos(-.51),r=Math.sin(-.51),a=Se(i,"Арка Центрального пляжа"),l="#eeeae0",c="#dbd9ce",h=3.11,f=[1.21,1.28,1.34,1.28,1.21],u=[-6.36,-3.69,-1.25,1.25,3.69,6.36],d=(p,v)=>[197.02+p*o-v*r,-463.27+p*r+v*o],m=Math.max(...u.map(p=>t(...d(p,0))))+.16,_=(p,v,M)=>{const[x,S]=d(p,v);return[x,m+M,S]},g=(p,v,M,x)=>[d(p-M,v-x),d(p+M,v-x),d(p+M,v+x),d(p-M,v+x)];for(const[p,v]of u.entries())if(p===0||p===1||p===4||p===5){a.shell(g(v,0,.47,1.18),m-.4,m+h,l),a.shell(g(v,0,.57,1.27),m+h-.045,m+h+.1,l);for(const x of[-1.03,1.03])a.shell(g(v,x,.37,.17),m+h,m+h+.95,l);a.shell(g(v,0,.42,1.23),m+h+.95,m+h+1.09,l)}else for(const x of[-.92,.92])a.shell(g(v,x,.2,.21),m-.4,m+h,l),a.shell(g(v,x,.27,.28),m+h-.06,m+h+.085,l);for(const p of[-.92,.92])for(let v=0;v<f.length;v++){const M=(u[v]+u[v+1])/2,x=(u[v+1]-u[v])/2,S=(b,E,y)=>_(M+(x+E)*Math.cos(b),p+y*.17,h+(f[v]+E)*Math.sin(b));for(let b=0;b<14;b++){const E=Math.PI*b/14,y=Math.PI*(b+1)/14;for(const w of[-1,1])a.face(l,S(E,-.19,w),S(y,-.19,w),S(y,.11,w),S(E,.11,w));a.face(c,S(E,-.19,-1),S(y,-.19,-1),S(y,-.19,1),S(E,-.19,1)),a.face(l,S(E,.11,-1),S(y,.11,-1),S(y,.11,1),S(E,.11,1))}}a.finish()}function rx(i,t){const s=t(64.17,13.11)+.16,o=Se(i,"Скульптура «Белая шляпа»"),r=["#8b8777","#a39e8d","#a9a38f","#8d897b","#969383"],a=[[1.28,.77,-.12,.1],[1.39,.74,.35,.19],[1.12,.65,.75,.17],[.79,.57,1.12,.08],[.48,.38,1.56,-.17]].map(([m,_,g,p],v)=>Array.from({length:13},(M,x)=>{const S=x/13*Ss,b=1+.13*Math.sin(x*3.3+v*.81);return[64.17+p+Math.cos(S)*m*b,s+g+.12*Math.cos(x*2.4+v),13.11+Math.sin(S)*_*b]}));for(let m=0;m<a.length-1;m++){const _=a[m],g=a[m+1];_.forEach((p,v)=>{const M=(v+1)%_.length;o.face(r[(v+m*3)%r.length],p,_[M],g[M]),o.face(r[(v+m*3+1)%r.length],p,g[M],g[v])})}o.face("#a29e8f",...a.at(-1));const l=(m,_,g)=>Array.from({length:32},(p,v)=>{const M=v/32*Ss,x=Math.cos(M)*m,S=Math.sin(M)*m*.83,b=g?.038*Math.cos(2*M):.044*Math.cos(2*M);return[64.17-.13+x,s+1.56+_+S*.37+b,13.11+S]}),h=[[.75,0,!1],[.75,.035,!1],[.4,.12,!1],[.405,.155,!0],[.39,.22,!0],[.34,.43,!0],[.24,.49,!0],[.08,.46,!0]].map(m=>l(...m));for(let m=0;m<h.length-1;m++){const _=h[m+1],g=h[m];g.forEach((p,v)=>{const M=(v+1)%g.length;o.face(m===3?"#d8d7ce":"#f5f3e9",p,g[M],_[M],_[v])})}o.face("#f5f3e9",...h.at(-1));const f={Б:[[[.88,1],[0,1],[0,0],[.76,0],[.9,.22],[.72,.53],[0,.53]]],Е:[[[.88,1],[0,1],[0,0],[.9,0]],[[0,.5],[.75,.5]]],Л:[[[0,0],[.31,1],[.84,1],[.84,0]]],А:[[[0,0],[.45,1],[.9,0]],[[.2,.42],[.7,.42]]],Я:[[[.9,0],[.9,1],[.25,1],[0,.76],[.23,.54],[.9,.54]],[[.52,.54],[0,0]]],Ш:[[[0,1],[0,0],[.95,0],[.95,1]],[[.475,0],[.475,1]]],П:[[[0,0],[0,1],[.86,1],[.86,0]]]};[..."БЕЛАЯ ШЛЯПА"].forEach((m,_)=>{for(const g of f[m]??[]){const p=g.map(([v,M])=>{const x=(_+v-5.5)*.155;return[64.17+Math.sin(x)*1.17,s+.41+M*.175,13.11+Math.cos(x)*.88]});p.slice(1).forEach((v,M)=>o.beam(p[M],v,.032,"#f5f3e9"))}});const u=lr(64.17,13.11,2.45),d=(m,_)=>[m,t(m,_)+.17,_];u.forEach((m,_)=>o.face("#b4ac9c",d(64.17,13.11),d(...m),d(...u[(_+1)%u.length])));for(let m=0;m<46;m++){const _=m*2.39996,g=1.12+m%13/13*1.19,p=64.17+Math.cos(_)*g,v=13.11+Math.sin(_)*g,M=t(p,v)+.17;o.shell(lr(p,v,.09+m%4*.035,6),M-.01,M+.03+m%3*.025,r[m%r.length])}o.finish()}function ax(i,t){sx(i,t),rx(i,t),ox(i,t)}function cx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Le;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in o){const f=du(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const m=du(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function du(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Nn(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<e;m++){const _=h.getComponent(u,m);a.setComponent(u+f,m,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const gc=Math.PI/4,lx="#e1d9bf",hx="#26313a",ux=[[37.2996896,44.8872772],[37.2995282,44.8874039],[37.2994588,44.8874602],[37.2994093,44.887514],[37.2990185,44.8878942],[37.2988335,44.8880063],[37.2982407,44.8885479]],fx=[[37.2992911,44.8877628],[37.2988951,44.8881412]];function Ks(i,t){const e=(i-.5)*gc;return[Math.sin(e)*t,Math.cos(e)*t]}function pu(i){const t=i*gc;return-.85*Math.sin(t)+.5*Math.cos(t)>0}function dx(i,{rings:t},e){const n=t[0],s=n.reduce((x,S)=>x+S[0],0)/n.length,o=n.reduce((x,S)=>x+S[1],0)/n.length,r=e(s,o),a=Math.min(...n.map(x=>e(...x)))-r-.3,c=n.reduce((x,[S,b])=>x+Math.hypot(S-s,b-o),0)/n.length*.74,h=new se({color:lx,flatShading:!0}),f=new se({color:hx,flatShading:!0}),u=new se({color:"#b6b8ae"}),d=new se({color:"#a9c2c8",transparent:!0,opacity:.56,depthWrite:!1}),m=new pe,_=new Map([[h,[]],[f,[]]]);m.name="Анапский маяк",m.position.set(s,r,o),i.add(m);function g(x,S,b,E,y,w=8){const A=new he(new Fn(E,b,S-x,w),y);return A.position.y=(S+x)/2,A.rotation.y=-Math.PI/w,A.castShadow=y!==d,m.add(A),A}function p(x,S,b,E,y,w,A,P){const L=x*gc,C=Math.sin(L),D=Math.cos(L),I=c*Math.cos(gc/2)+A,z=new Ce(y,b,w);z.rotateY(L),z.translate(C*I+D*E,S,D*I-C*E),_.get(P).push(z)}g(a,3.15,c*1.13,c*1.13,h),g(3.15,3.55,c*1.16,c*1.16,h);const v=[[3.55,6.5,!0],[6.5,9.2,!1],[9.2,12,!0],[12,14.6,!1],[14.6,17.05,!0]];for(const[x,S,b]of v){const E=new Le,y=[[],[]];for(let A=0;A<8;A++){const[P,L]=Ks(A,c),[C,D]=Ks(A+1,c);if(y[Number(b&&pu(A))].push(P,x,L,C,x,D,C,S,D,P,x,L,C,S,D,P,S,L),x<14.6){const I=b&&pu(A)?f:h;for(const z of[-c*.2,c*.2])p(A,(x+S)/2,S-x,z,c*.095,.16,.03,I)}}E.setAttribute("position",new oe(y.flat(),3)),E.addGroup(0,y[0].length/3,0),y[1].length&&E.addGroup(y[0].length/3,y[1].length/3,1),E.computeVertexNormals();const w=new he(E,[h,f]);w.castShadow=!0,m.add(w)}g(12.2,12.39,c*1.05,c*1.05,h),g(13.4,13.54,c*1.04,c*1.04,h),g(17.05,17.65,c*1.07,c*1.07,h),g(17.65,17.9,c*1.12,c*1.12,h);for(let x=0;x<8;x++)for(const S of[-c*.22,0,c*.22])p(x,17.34,.24,S,.26,.07,c*.067,f);for(const[x,S]of _){m.add(new he(cx(S),x));for(const b of S)b.dispose()}g(17.9,18.11,c*.71,c*.71,h,12),g(18.11,20.05,c*.58,c*.58,d,12),g(20.05,20.83,c*.68,.24,h,12),g(20.83,21,.24,.12,h,12),g(18.48,19.43,.31,.31,new se({color:"#a0433d"}),12);const M=[];for(let x=0;x<12;x++){const S=(x-.5)*Math.PI/6,b=Math.sin(S)*c*.58,E=Math.cos(S)*c*.58;M.push([[b,18.11,E],[b,20.05,E],.052])}for(let x=0;x<8;x++){const[S,b]=Ks(x,c*1.01),[E,y]=Ks(x+1,c*1.01);M.push([[S,17.9,b],[S,18.8,b],.042]);for(const C of[18.35,18.8])M.push([[S,C,b],[E,C,y],.037]);const[w,A]=Ks(x,c*.88),[P,L]=Ks(x+1,c*.88);M.push([[w,19.55,A],[P,19.55,L],.033]),M.push([[w,20.46,A],[P,20.46,L],.033]),M.push([[w,19.55,A],[w,20.46,A],.033])}dd(m,M,u,"Ограждения фонаря")}function dd(i,t,e,n){const s=new Ce(1,1,1),o=new zi(s,e,t.length);o.name=n;const r=new Ee,a=new O,l=new O,c=new O,h=new O(1,0,0);for(const[f,[u,d,m]]of t.entries())a.set(...u),l.set(...d),c.subVectors(l,a),r.position.copy(a).lerp(l,.5),r.scale.set(c.length(),m,m),r.quaternion.setFromUnitVectors(h,c.normalize()),r.updateMatrix(),o.setMatrixAt(f,r.matrix);i.add(o)}function mu(i,t,e,{height:n,color:s,spacing:o,width:r,name:a}){const l=[];for(let c=1;c<t.length;c++){const[h,f]=t[c-1],[u,d]=t[c],m=Math.ceil(Math.hypot(u-h,d-f)/2.4),_=(g,p)=>{const v=h+(u-h)*g,M=f+(d-f)*g;return[v,e(v,M)+p,M]};for(let g=0;g<m;g++){const p=g/m,v=(g+1)/m;l.push([_(p,.05),_(p,n+.05),r*2.8]);for(const x of[.14,n])l.push([_(p,x),_(v,x),r*1.7]);const M=Math.ceil(Math.hypot(u-h,d-f)/(m*o));for(let x=1;x<M;x++){const S=(g+x/M)/m;l.push([_(S,.14),_(S,n),r])}}c===t.length-1&&l.push([_(1,.05),_(1,n+.05),r*2.8])}dd(i,l,new se({color:s}),a)}function px(i,{origin:[t,e],scale:n},s){const o=r=>r.map(([a,l])=>[(a-t)*n[0],(e-l)*n[1]]);mu(i,o(ux),s,{height:1.06,color:"#9a9c95",spacing:.16,width:.038,name:"Ограда Верхней Набережной"}),mu(i,o(fx),s,{height:1.76,color:"#363f40",spacing:.16,width:.027,name:"Ограда маяка"})}const mx="125862202",gx="977564342",Pl=12,ma=3;function ga(i,t,e,n){const s=[];for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=e*(n(r)-t),c=e*(n(a)-t);if(l>=0&&s.push(r),l<0!=c<0){const h=l/(l-c);s.push([ce.lerp(r[0],a[0],h),ce.lerp(r[1],a[1],h)])}}return s}function Sn(i,t,e,n,s){const o=new zc(t.map(([a,l])=>new xt(a,-l))),r=new he(new Pr(o,{depth:n,bevelEnabled:!1}),s);r.rotation.x=-Math.PI/2,r.position.y=e,r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function _x(i,t,e){const n=[],s=Math.sign(i.reduce((o,[r,a],l)=>{const[c,h]=i[(l+1)%i.length];return o+r*h-c*a},0));for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=a[0]-r[0],c=a[1]-r[1],h=Math.hypot(l,c);if(h<4||Math.abs(e(r)-e(a))<h*.8)continue;const f=Math.floor(h/3.3);for(let u=0;u<f;u++){const d=(u+.5)/f;n.push([r[0]+l*d+s*c/h*.045,t,r[1]+c*d-s*l/h*.045,-Math.atan2(c,l)])}}return n}function ys(i,t,e,n,s){const o=new zi(new Ce(n,s,.12),e,t.length),r=new Ee;t.forEach(([a,l,c,h],f)=>{r.position.set(a,l,c),r.rotation.y=h,r.updateMatrix(),o.setMatrixAt(f,r.matrix)}),o.receiveShadow=!0,i.add(o)}function xx(i,t){const e=new pe;e.name="Малая бухта, комплекс на берегу";const n=new se({color:"#c5b08c"}),s=new se({color:"#eeeae0"}),o=new se({color:"#b7b5a9"}),r=new se({color:"#617964"}),a=new se({color:"#5f8596"}),l=new se({color:"#5799b9"}),c=4.4;Sn(e,t,1.8,c-1.8,n),Sn(e,t,c,3.05,n),Sn(e,t,c+3.05,3.15,s),Sn(e,t,c+6.2,3.4,s),Sn(e,t,c+9.6,.35,o);const h=t.map((S,b)=>{const E=t[(b+1)%t.length];return{start:S,end:E,length:Math.hypot(E[0]-S[0],E[1]-S[1])}}).reduce((S,b)=>b.length>S.length?b:S),{start:f,end:u,length:d}=h,m=u[0]-f[0],_=u[1]-f[1],g=-Math.atan2(_,m),p=Math.sign(_),v=-Math.abs(_)/d*.04,M=m*p/d*.04;function x(S,b){return Array.from({length:S},(E,y)=>{const w=(y+.5)/S;return[f[0]+m*w+v,b,f[1]+_*w+M,g]})}ys(e,x(18,c+1.5),r,4.35,2.35),ys(e,x(38,c+4.75),a,1.75,1.35),ys(e,x(30,c+7.9),l,2.55,2.45),i.add(e)}function vx(i,t,e){if(t.id===gx)return xx(i,t.rings[0]),!0;if(t.id!==mx)return!1;const n=t.rings[0],s=ce.degToRad(112.9),o=Math.sin(s),r=-Math.cos(s),a=([E,y])=>E*o+y*r,l=n.map(a),c=Math.min(...l),h=E=>a(E)-c,f=Math.max(...l)-c,u=f*.54,d=n.map(E=>e(...E)),m=Math.max(...d),_=Math.min(...d)-.3,g=new pe;g.name="Малая бухта, корпус «Парусник»";const p=new se({color:"#f5f3e8"}),v=new se({color:"#deded5"}),M=new se({color:"#526f7d"}),x=new se({color:"#9c9e99"});Sn(g,n,_,m-_,v);const S=[];for(let E=0;E<Pl;E++){const y=E*2.45,w=E<9?f-E*3.3:u,A=ga(ga(n,y,1,h),w,-1,h),P=m+E*ma,L=A.reduce(([D,I],z)=>[D+z[0]/A.length,I+z[1]/A.length],[0,0]),C=A.map(([D,I])=>[ce.lerp(D,L[0],.04),ce.lerp(I,L[1],.04)]);Sn(g,A,P,.35,p),Sn(g,C,P+.35,ma-.35,v),S.push(..._x(C,P+1.8,h)),(E===8||E===Pl-1)&&Sn(g,C,P+ma,.18,x)}const b=ga(ga(n,u-3.8,1,h),u+.15,-1,h);return Sn(g,b,m,Pl*ma+1.9,p),ys(g,S,M,1.65,1.15),i.add(g),!0}function Mx(i,t,e){if(t.id!=="142489068")return!1;const n=t.rings[0],s=n.map((pt,V)=>{const Q=n[(V+1)%n.length];return{start:pt,end:Q,length:Math.hypot(Q[0]-pt[0],Q[1]-pt[1])}}),[o]=s.sort((pt,V)=>V.length-pt.length).slice(0,2).sort((pt,V)=>pt.start[1]+pt.end[1]-(V.start[1]+V.end[1])),[r,a]=[o.start,o.end].sort((pt,V)=>pt[0]-V[0]),l=n.filter(pt=>pt!==r&&pt!==a).sort((pt,V)=>pt[0]-V[0])[0],[c,h]=r,f=Math.hypot(a[0]-c,a[1]-h),u=Math.hypot(l[0]-c,l[1]-h),d=(a[0]-c)/f,m=(a[1]-h)/f,_=(l[0]-c)/u,g=(l[1]-h)/u,p=(pt,V)=>[c+d*pt+_*V,h+m*pt+g*V],v=(pt,V,Q,dt)=>[p(pt,Q),p(V,Q),p(V,dt),p(pt,dt)],M=new pe;M.name="Анапский морской вокзал";const x=new se({color:"#e5e4dc"}),S=new se({color:"#b7a18c"}),b=new se({color:"#a4aaa4"}),E=new se({color:"#496877"}),y=new se({color:"#8f4b3a"}),w=n.map(pt=>e(...pt)),A=Math.max(...w),P=Math.min(...w)-.25;Sn(M,n,P,A+2.9-P,S),Sn(M,n,A+2.9,3.6,x),Sn(M,n,A+6.5,.35,b);const L=7.8,C=f-.85,D=C-L,I=u*.34,z=I+L,k=v(D,C,I,z),q=A+15.2;Sn(M,k,A+6.8,q-A-6.8,x),Sn(M,k,q,.22,b);const Y=-Math.atan2(m,d),J=-Math.atan2(g,_),j=(pt,V,Q,dt)=>Array.from({length:pt},(wt,H)=>{const[at,ht]=dt((H+.5)/pt);return[at,V,ht,Q]});ys(M,j(11,A+4.75,Y,pt=>p(1.3+pt*(f-2.6),-.04)),E,2.22,2.55),ys(M,j(8,A+1.48,Y,pt=>p(1.5+pt*(f-3),-.04)),E,1.65,1.34);const St=[];for(const pt of[8.35,10.95,13.55]){const V=A+pt;St.push(...j(3,V,Y,Q=>p(D+Q*L,I-.04))),St.push(...j(3,V,J,Q=>p(C+.04,I+Q*L)))}ys(M,St,E,1.37,1.43);const[vt,kt]=p(C-2.8,I+2.4),mt=new he(new Fn(.055,.105,3.2,6),y);return mt.position.set(vt,q+1.82,kt),M.add(mt),i.add(M),!0}const Sx=[[65,151],[133,120],[143,98],[312,94],[327,41],[410,46],[451,73],[504,67],[540,44],[733,53],[724,326],[1170,410],[1591,455],[1591,738],[40,687]],yx=[{points:[[94,145],[93,228],[89,353]],width:.65,height:.38},{points:[[142,122],[197,119],[277,117],[320,120],[331,188]],width:.65,height:.32},{points:[[197,119],[201,187],[137,192]],width:.73,height:.31},{points:[[273,119],[279,182],[206,187]],width:.7,height:.33},{points:[[287,122],[291,181],[328,178]],width:.66,height:.3},{points:[[334,91],[338,130],[345,187],[405,175],[403,130],[338,136]],width:.68,height:.35},{points:[[447,84],[486,87],[492,170],[445,173]],width:.69,height:.31},{points:[[500,85],[530,86],[534,161],[500,166]],width:.63,height:.27},{points:[[540,62],[535,107],[537,170]],width:.68,height:.38},{points:[[137,228],[204,222],[275,225],[351,227],[360,279],[300,282],[228,289],[140,279],[137,228]],width:.68,height:.27},{points:[[218,229],[214,277],[230,291],[224,354],[137,344]],width:.69,height:.31},{points:[[181,231],[178,277],[187,291],[181,315],[139,313]],width:.56,height:.25},{points:[[191,314],[187,348]],width:.57,height:.24},{points:[[307,229],[310,257],[278,261]],width:.57,height:.23},{points:[[319,231],[319,276],[352,273]],width:.64,height:.29},{points:[[360,285],[367,348],[366,387]],width:.65,height:.4},{points:[[363,278],[426,272],[427,218]],width:.73,height:.32},{points:[[413,209],[500,205],[570,200],[646,197]],width:.68,height:.31},{points:[[429,270],[504,270],[502,206]],width:.72,height:.29},{points:[[506,271],[510,270]],width:.72,height:.35},{points:[[528,268],[567,262],[627,258]],width:.72,height:.35},{points:[[645,256],[647,203]],width:.72,height:.35},{points:[[560,207],[567,261]],width:.61,height:.28},{points:[[678,178],[681,346],[634,347]],width:.62,height:.41},{points:[[468,349],[467,319],[474,305],[489,302],[602,300],[618,307],[623,330]],width:.66,height:.3},{points:[[382,355],[417,353],[414,398],[388,397]],width:.66,height:.37},{points:[[416,401],[526,426],[531,407],[539,369],[569,375]],width:.75,height:.37},{points:[[569,376],[568,425],[539,422]],width:.68,height:.36},{points:[[578,380],[578,423],[616,430],[620,380]],width:.68,height:.37},{points:[[630,379],[629,433],[682,441],[679,378]],width:.72,height:.36},{points:[[98,445],[190,455],[177,553],[91,539]],width:.81,height:.38},{points:[[209,457],[316,474],[305,552],[202,537],[209,457]],width:.85,height:.42},{points:[[245,474],[237,509],[226,539]],width:.75,height:.4},{points:[[386,490],[429,501],[515,513],[566,520],[622,532]],width:.73,height:.29},{points:[[430,503],[430,551],[389,544]],width:.74,height:.36},{points:[[516,515],[515,559],[431,549]],width:.78,height:.33},{points:[[564,524],[557,587],[515,579],[517,557]],width:.76,height:.38},{points:[[622,531],[615,590],[566,583]],width:.76,height:.39},{points:[[653,536],[708,549],[699,609]],width:.74,height:.34},{points:[[769,385],[806,387],[823,390],[866,388],[875,384]],width:.52,height:.48},{points:[[768,384],[768,425],[766,447]],width:.5,height:.52},{points:[[747,444],[769,449],[813,457],[870,467],[913,473],[953,478],[1006,483]],width:.62,height:.6},{points:[[818,395],[817,426],[814,456]],width:.52,height:.51},{points:[[874,379],[874,415]],width:.47,height:.42},{points:[[870,451],[870,466]],width:.46,height:.46},{points:[[918,390],[917,419]],width:.5,height:.49},{points:[[914,437],[912,473]],width:.55,height:.54},{points:[[959,393],[961,413],[957,428]],width:.49,height:.46},{points:[[955,442],[952,478]],width:.55,height:.54},{points:[[961,416],[994,421],[1016,426]],width:.39,height:.36},{points:[[1016,427],[1012,444],[1007,482]],width:.54,height:.56},{points:[[1070,501],[1079,447],[1085,435],[1104,438]],width:.61,height:.61},{points:[[1138,441],[1169,449]],width:.44,height:.41},{points:[[1170,435],[1169,471],[1168,505],[1111,502],[1071,500]],width:.65,height:.62},{points:[[1122,459],[1114,487],[1111,502]],width:.51,height:.48},{points:[[765,620],[770,577],[844,591],[840,619]],width:.53,height:.53},{points:[[900,645],[903,598],[948,608],[996,618],[1024,616]],width:.55,height:.49},{points:[[950,608],[945,653],[901,647]],width:.52,height:.54},{points:[[999,619],[990,664],[983,688]],width:.52,height:.55},{points:[[944,654],[939,690]],width:.49,height:.44},{points:[[1049,621],[1094,620],[1133,627]],width:.44,height:.38},{points:[[1132,628],[1127,665]],width:.44,height:.42},{points:[[1230,470],[1293,471],[1292,517],[1290,550],[1234,551],[1230,470]],width:.7,height:.87},{points:[[1233,519],[1292,518]],width:.66,height:.72},{points:[[1352,482],[1369,478],[1404,479],[1418,480],[1417,492],[1385,493],[1383,509]],width:.57,height:.48},{points:[[1338,691],[1339,668],[1397,669]],width:.59,height:.55},{points:[[1336,722],[1398,721],[1454,722],[1512,724],[1575,726],[1575,652],[1512,653],[1455,654],[1400,652],[1398,721]],width:.72,height:.69},{points:[[1455,654],[1454,722]],width:.67,height:.62},{points:[[1512,653],[1512,724]],width:.65,height:.6}],bx=[{polygon:[[144,129],[193,124],[198,177],[142,181]],depth:.78},{polygon:[[205,126],[269,124],[274,169],[210,177]],depth:.74},{polygon:[[287,128],[317,127],[322,171],[290,176]],depth:.7},{polygon:[[346,136],[398,131],[402,169],[347,177]],depth:.83},{polygon:[[452,90],[483,89],[487,158],[450,166]],depth:.78},{polygon:[[502,97],[526,99],[527,153],[500,159]],depth:.64},{polygon:[[146,235],[214,231],[211,274],[143,269]],depth:.88},{polygon:[[279,234],[304,234],[308,253],[278,257]],depth:.57},{polygon:[[319,237],[345,234],[348,269],[320,269]],depth:.75},{polygon:[[145,287],[183,288],[180,311],[141,310]],depth:.62},{polygon:[[142,319],[181,319],[181,342],[137,340]],depth:.58},{polygon:[[190,292],[227,298],[222,350],[189,345]],depth:.77},{polygon:[[505,209],[558,205],[566,260],[526,265],[528,298],[514,298],[512,267]],depth:1.05},{polygon:[[566,205],[641,199],[644,252],[642,252],[642,283],[630,283],[629,254],[571,260]],depth:1.15},{polygon:[[389,358],[414,354],[411,396],[388,393]],depth:.64},{polygon:[[541,370],[567,377],[565,423],[535,420]],depth:.8},{polygon:[[580,378],[617,379],[613,425],[579,422]],depth:.82},{polygon:[[633,378],[676,379],[680,435],[630,426]],depth:1},{polygon:[[98,450],[183,462],[173,541],[92,533]],depth:.92},{polygon:[[213,463],[244,468],[227,535],[207,535]],depth:.9},{polygon:[[248,473],[311,478],[304,549],[236,539]],depth:.91},{polygon:[[388,494],[427,502],[427,541],[389,537]],depth:.74},{polygon:[[434,506],[514,516],[510,552],[433,545]],depth:.87},{polygon:[[521,518],[562,526],[556,576],[516,572]],depth:.94},{polygon:[[566,527],[619,535],[612,581],[561,575]],depth:.99},{polygon:[[656,541],[704,553],[693,603],[646,592]],depth:.83},{polygon:[[773,582],[839,595],[836,620],[771,612]],depth:.84},{polygon:[[906,602],[946,611],[943,645],[903,637]],depth:.64},{polygon:[[952,612],[994,621],[986,665],[951,654]],depth:.58},{polygon:[[1235,475],[1288,476],[1288,515],[1237,516]],depth:.72},{polygon:[[1238,524],[1287,523],[1286,546],[1239,547]],depth:.64},{polygon:[[1404,657],[1450,658],[1449,718],[1403,717]],depth:.54},{polygon:[[1459,658],[1507,657],[1507,719],[1459,717]],depth:.59},{polygon:[[1517,658],[1570,657],[1570,721],[1517,719]],depth:.55}],wx=[{point:[256,273],radius:.7,depth:.51},{point:[412,299],radius:.53,depth:.46},{point:[496,316],radius:.58,depth:.48},{point:[456,365],radius:.73,depth:.58},{point:[516,422],radius:.67,depth:.46},{point:[644,329],radius:.7,depth:.55},{point:[592,393],radius:.56,depth:.37},{point:[553,441],radius:.63,depth:.44},{point:[377,498],radius:.56,depth:.44},{point:[755,405],radius:.74,depth:.75},{point:[962,706],radius:.7,depth:.75},{point:[1260,494],radius:.5,depth:.65}],Ex=[{name:"Широкая улица",polygon:[[96,365],[162,362],[217,365],[309,385],[362,398],[414,412],[418,485],[386,486],[308,470],[209,456],[94,443]]},{name:"Широкая улица",polygon:[[1194,609],[1258,608],[1344,612],[1438,614],[1516,615],[1574,612],[1573,647],[1510,651],[1437,652],[1350,651],[1258,648],[1200,647]]},{name:"Северная улица",polygon:[[119,193],[207,191],[287,188],[344,184],[433,176],[527,171],[671,174],[671,194],[524,201],[428,211],[347,219],[273,224],[197,227],[118,228]]},{name:"Поперечная улица",polygon:[[99,159],[125,164],[123,215],[124,280],[121,335],[128,366],[111,388],[93,367],[97,311],[96,250]]}],Tx=[{from:[521,298],to:[519,264],width:1.15,steps:7},{from:[636,283],to:[635,252],width:1,steps:7}],Pi={outline:Sx,walls:yx,cellars:bx,wells:wx,streets:Ex,stairs:Tx},gu="652417590";function Gn([i,t]){return[.0863102257*i-214318e-9*t-361.5408919,214318e-9*i+.0863102257*t+21.5871871]}const vs=Pi.outline.map(Gn);function js([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function pd(i,t,e){const n=i(-310,65)-1.41-.006*(t+355)+.008*(e-60);return Math.min(n,i(t,e)-.43)}const Qi=["#b7a58b","#c1b199","#ad9e88","#a9977e","#c8baa0","#a4947b"],_u=["#c9b998","#b9aa8e","#c2b497","#b2a389","#d0bfa4"],Ax=new Zt("#a09472"),Rx=new Zt("#97976b"),Cx=new Zt("#94846b"),Px=new Zt("#62584a"),Lx=new Zt("#a99a7e");function Jn(i){const t=Math.sin(i*127.1+3.83)*43758.5453;return t-Math.floor(t)}function Yl(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=(i[1]-t[1])*e/(2*n),o=(t[0]-i[0])*e/(2*n);return[[i[0]+s,i[1]+o],[t[0]+s,t[1]+o],[t[0]-s,t[1]-o],[i[0]-s,i[1]-o]]}const En=([i,t],e)=>[i,e(i,t),t];function md(i,t,e,n,s,o){i.face(o,En(t,n),En(e,n),En(e,s),En(t,s))}function Wo(i,t,e,n,s,o=.65){for(let r=0;r<t.length;r++){const a=t[r],l=t[(r+1)%t.length],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/o);for(let h=0;h<c;h++){const f=gt(a,l,h/c),u=gt(a,l,(h+1)/c);md(i,f,u,e,n,s(h+r*97))}}}function Dx(i,t,e,n,s,o,r,a){const l=Math.hypot(e[0]-t[0],e[1]-t[1]);if(l<.12)return;const c=(d,m)=>o(d,m)-r-.03,h=(d,m)=>o(d,m)+s,f=Yl(t,e,n*.93);Wo(i,f,c,h,()=>"#897862",1.2),i.face("#8c7b66",...f.map(d=>En(d,(m,_)=>h(m,_)-.028)));const u=Math.max(1,Math.round((s+r)/.31));for(let d=0;d<u;d++){const m=.66+Jn(a+d)*.24;for(let _=-(d%2)*m*.52,g=0;_<l;_+=m,g++){const p=(Math.max(0,_)+.018)/l,v=(Math.min(_+m,l)-.018)/l;if(v<=p)continue;const M=a*101+d*31+g*7,x=Yl(gt(t,e,p),gt(t,e,v),n*(.965+Jn(M)*.09)),S=x.map(A=>gt(A,gt(x[0],x[2],.5),.06)),b=(s+r)/u,E=(A,P)=>o(A,P)-r+b*d+.012,y=(A,P)=>o(A,P)-r+b*(d+1)-.014+Jn(M+1)*.09,w=Qi[Math.floor(Jn(M+2)*Qi.length)];for(let A=0;A<4;A++){const P=(A+1)%4;i.face(w,En(x[A],E),En(x[P],E),En(S[P],y),En(S[A],y))}i.face(w,...S.map(A=>En(A,y)))}}}function Ix(i,t,e,n,s){const o=t.map(([p])=>p),r=t.map(([,p])=>p),a=.61,l=.065,c=(p,v)=>[p*Math.cos(l)-v*Math.sin(l),p*Math.sin(l)+v*Math.cos(l)],[h,f]=t[0],u=(p,v)=>c(p,v).map((M,x)=>M+(x===0?h:f)),d=Math.floor((Math.min(...o)-h-3)/a),m=Math.ceil((Math.max(...o)-h+3)/a),_=Math.floor((Math.min(...r)-f-10)/a),g=Math.ceil((Math.max(...r)-f+10)/a);for(let p=_;p<g;p++)for(let v=d;v<m;v++){const M=n*4241+p*397+v;if(Jn(M+9)>s)continue;const x=(v+p%2*.5)*a,S=p*a,b=[u(x+.03+Jn(M)*.07,S+.033),u(x+.57,S+.027+Jn(M+2)*.07),u(x+.572-Jn(M+3)*.08,S+.574),u(x+.03,S+.572-Jn(M+4)*.07)];if(!b.every(y=>js(y,t)))continue;const E=(y,w)=>e(y,w)+.042+Jn(M+6)*.028;i.face(_u[Math.floor(Jn(M+7)*_u.length)],...b.map(y=>En(y,E)))}}function Ux(i,t,e){const n=Se(i,"Раскоп Горгиппии · кладка и древние улицы",{surface:"stone"}),s=(c,h)=>pd(t,c,h),o=Pi.cellars.map(({polygon:c,depth:h})=>({ring:c.map(Gn),depth:h,holes:[]})),r=Pi.wells.map(({point:c,radius:h,depth:f})=>{const[u,d]=Gn(c),m=Array.from({length:12},(v,M)=>{const x=M*Math.PI/6;return[u+Math.cos(x)*h,d+Math.sin(x)*h]}),_=o.find(v=>m.every(M=>js(M,v.ring))),g=(v,M)=>s(v,M)-(_?.depth??0),p=_||m.every(v=>js(v,vs))&&!o.some(v=>m.some(M=>js(M,v.ring))||v.ring.some(M=>js(M,m)));return _&&_.holes.push(m),{ring:m,rim:g,depth:f,cut:p,cellar:_,center:[u,d]}}),a=[...o.map(c=>c.ring),...r.filter(c=>c.cut&&!c.cellar).map(c=>c.ring)],l=new Zt;e([vs,...a],s,(c,h,f)=>l.copy(Ax).lerp(Rx,ce.clamp(.51+.32*Math.sin(c*.15+f*.19)+.19*Math.sin(c*.43-f*.24),0,1))),Wo(n,vs,s,(c,h)=>t(c,h)+.012,()=>"#a18f75");for(const{ring:c,depth:h,holes:f}of o){const u=(d,m)=>s(d,m)-h;e([c,...f],u,Cx),Wo(n,c,u,s,()=>"#89785f")}for(const{ring:c,rim:h,depth:f,cut:u,center:d}of r){const m=(g,p)=>h(g,p)-(u?f:-.028);u?e([c],m,Px):n.face("#5f5342",...c.map(g=>En(g,m))),Wo(n,c,m,(g,p)=>h(g,p)+.18,()=>"#80715e",2);const _=c.map(g=>gt(d,g,1.35));for(let g=0;g<c.length;g++){const p=(g+1)%c.length,v=(M,x)=>h(M,x)+.16+g%3*.021;md(n,_[g],_[p],h,v,Qi[g%Qi.length]),n.face(Qi[g%Qi.length],...[c[g],_[g],_[p],c[p]].map(M=>En(M,v)))}}for(const[c,{polygon:h,density:f}]of Pi.streets.entries()){const u=h.map(Gn);e([u],(d,m)=>s(d,m)+.025,Lx),Ix(n,u,s,c,f??.88)}for(const[c,{points:h,width:f,height:u}]of Pi.walls.entries()){const d=h.map(Gn);for(let m=1;m<d.length;m++){const _=d[m-1],g=d[m],p=gt(_,g,.5),v=o.reduce((M,{ring:x,depth:S})=>Math.max(M,x.some((b,E)=>{const y=x[(E+1)%x.length],w=y[0]-b[0],A=y[1]-b[1],P=ce.clamp(((p[0]-b[0])*w+(p[1]-b[1])*A)/(w*w+A*A),0,1);return Math.hypot(p[0]-b[0]-P*w,p[1]-b[1]-P*A)<f*.63})?S:0),0);Dx(n,_,g,f,u,s,v,c*41+m)}}for(const{from:c,to:h,width:f,steps:u}of Pi.stairs){const d=Gn(c),m=Gn(h),_=o.find(g=>js(m,g.ring))?.depth??.85;for(let g=0;g<u;g++){const p=Yl(gt(d,m,g/u),gt(d,m,(g+1)/u),f),v=(x,S)=>s(x,S)-_,M=(x,S)=>v(x,S)+_*(1-g/u);n.face(Qi[g%Qi.length],...p.map(x=>En(x,M))),Wo(n,p,v,M,()=>"#9a8a71",2)}}n.finish()}const ji=i=>i.map(Gn),Nx=[[126,399],[220,407],[350,432],[460,455],[536,471],[610,478],[712,485],[779,478],[865,499],[955,516],[1060,538],[1168,556]],xu=[[748,295],[742,323],[729,352],[716,405],[712,462],[710,481]],vu=[0,0,.16,.67,1,1],Fx={position:Gn([707,480]),look:Gn([405,447]),pitch:-.19},Ui=[[-384.79,10.65],[-282.12,15.99],[-217.83,18.81],[-218.47,61.07],[-219.18,90.59],[-393.18,81.88],[-384.79,10.65]],Ni=Math.atan2(2.82,64.29);function gd(i){const[t,e]=Ui[1];return i(t+1.44*Math.sin(Ni),e-1.44*Math.cos(Ni))}function _c([i,t]){return i===-282.12&&t===15.99?2.62:i===-218.47&&t===61.07?1.45:0}const Ox=[{name:"Дорожка у лапидария",points:[[-332,24],[-322,25],[-312,26],[-303,27.3],[-295,28.1]],widths:[2.45,2.7,2.7,2.6,2.6],surface:"paving",railSide:1},{name:"Подход от входной арки",points:[[-282.12,14],[-282.12,18],[-283.15,21.1],[-288.4,25.8],[-295,28.1]],widths:[2.5,2.5,2.7,2.6,2.6],surface:"paving"},{name:"Дорожка от площадки музея",points:[[-295,28.1],[-294.5,33.9],[-295.2,40.9],Gn(xu[0])],widths:[2.6,2.8,2.9,2.6],surface:"paving"},{name:"Дорожка вдоль южного борта",points:[...ji([[65,710],[475,724],[1030,743],[1560,759]]),[-221.6,87.8],[-221.1,63.1]],widths:[1.5,1.65,1.75,1.7,1.65,1.6],surface:"paving",railSide:-1},{name:"Подход к восточной калитке",points:[[-221.1,63.1],[-220.9,61.07],[-216.4,61.07]],widths:[1.6,1.6,1.55],surface:"paving"},{name:"Спуск к раскопу",points:ji(xu),widths:[2.6,2.5,1.35,1.25,1.25,1.7],surface:"ramp",rails:[2,3]},{name:"Проход между подвалами",points:ji(Nx),widths:[3.8,4,4.1,3.9,3.8,3.4,3.5,4.1,4.3,4.2,4.2,3.5],surface:"earth"},{name:"Выход с западных лестниц",points:ji([[129,368],[128,386],[126,399]]),widths:[1.5,1.8,2],surface:"earth"},...[368,401].flatMap(i=>[{name:"Западная площадка",points:ji([[43,i],[90,i]]),widths:[1.5,1.43],surface:"landing"},{name:"Западная лестница",points:ji([[90,i],[129,i]]),widths:[1.43,1.43],surface:"steps"}])],{clamp:Bx,lerp:_a}=ce,zx=new Zt("#c7bda5"),Mu=new Zt("#c1b9a6"),kx=new Zt("#a59b76"),xa="#aa987f",Ll="#52534c",Bo=9;function Er(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=Math.hypot(e,n);return{a:i,b:t,dx:e,dz:n,length:s,nx:-n/s,nz:e/s}}function Su(i,t){return i.points.map(([e,n],s)=>{const o=i.edges[Math.max(0,s-1)],r=i.edges[Math.min(i.edges.length-1,s)],a=Math.hypot(o.nx+r.nx,o.nz+r.nz),l=(o.nx+r.nx)/a,c=(o.nz+r.nz)/a,h=t*i.widths[s]/(2*Math.max(.66,l*r.nx+c*r.nz));return[e+l*h,n+c*h]})}function yu(i,t,e){return i.rails?.includes(t)||i.railSide===e}function Xo(i,t,{a:e,dx:n,dz:s,length:o}){const r=((i-e[0])*n+(t-e[1])*s)/(o*o),a=Bx(r,0,1);return{raw:r,t:a,distance:Math.hypot(i-e[0]-n*a,t-e[1]-s*a)}}function Hx(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}const Gx=Ui.slice(1).map((i,t)=>{const e=Ui[t],{length:n}=Er(e,i);return Er(gt(e,i,_c(e)/n),gt(e,i,1-_c(i)/n))}),Vx=Pi.cellars.map(({polygon:i})=>ji(i)),Wx=Pi.walls.flatMap(({points:i,width:t})=>{const e=ji(i);return e.slice(1).map((n,s)=>({...Er(e[s],n),width:t}))}),Xx=Pi.wells.map(({point:i,radius:t})=>({point:Gn(i),radius:t}));function qx(i,t){return Xx.some(({point:[e,n],radius:s})=>Math.hypot(i-e,t-n)<s*1.35+.18)||Wx.some(e=>Xo(i,t,e).distance<e.width/2+.18)||Vx.some(e=>Hx(i,t,e))}function Yx(i,t,e){const[n,s]=Ui[1],o=(t-n)*Math.cos(Ni)+(e-s)*Math.sin(Ni),r=(e-s)*Math.cos(Ni)-(t-n)*Math.sin(Ni);if(Math.abs(o)>2.22||r<-1.44||r>.46)return;const a=r<-1.02?.135:r<-.6?.27:.405;return gd(i)+a}function Zx(i){const t=(f,u)=>pd(i,f,u),e=Ox.map(f=>({...f,edges:f.points.slice(1).map((u,d)=>Er(f.points[d],u))})).map(f=>({...f,left:Su(f,-1),right:Su(f,1)})),n=e.filter(f=>f.surface==="earth"),s=e.filter(f=>f.surface==="paving"),o=e.filter(f=>["steps","landing","ramp"].includes(f.surface)),r=e.flatMap(f=>[[-1,f.left],[1,f.right]].flatMap(([u,d])=>d.slice(1).flatMap((m,_)=>yu(f,_,u)?[Er(d[_],m)]:[])));function a(f,u,d,m,_){if(f==="earth")return t(m,_)+.055;if(f==="paving"||f==="landing")return i(m,_)+.054;const g=t(m,_)+.061,p=i(m,_)+.054;return f==="steps"?_a(p,g,Math.min(1,Math.floor(d*Bo)/(Bo-1))):_a(p,g,_a(vu[u],vu[u+1],d))}function l(f,u,d,m=0){let _;return f.edges.forEach((g,p)=>{const{raw:v,t:M,distance:x}=Xo(u,d,g);(f.surface==="steps"||f.surface==="landing")&&(v<-1e-5||v>1.00001)||x>_a(f.widths[p],f.widths[p+1],M)/2-m||x>=(_?.distance??1/0)||(_={distance:x,height:a(f.surface,p,M,u,d)})}),_?.height}function c(f,u,d){if(f<-397||f>-211||u<9||u>92)return;if(Gx.some(g=>Xo(f,u,g).distance<.24)||r.some(g=>Xo(f,u,g).distance<.15))return null;for(const g of o){const p=l(g,f,u,.12);if(p!==void 0)return p}if(d)return n.some(p=>l(p,f,u,.16)!==void 0)&&!qx(f,u)?t(f,u)+.055:null;const m=Yx(i,f,u);return m!==void 0?m:s.some(g=>l(g,f,u)!==void 0)?i(f,u)+.054:void 0}function h(f,u){const d=Se(f,"Горгиппия · дорожки и ограждения для посетителей");for(const m of e){const{left:_,right:g}=m;for(const[p,v]of m.edges.entries()){if(m.surface==="earth"&&p<3)continue;const M=[_[p],_[p+1],g[p+1],g[p]],x=(S,b)=>a(m.surface,p,Xo(S,b,v).t,S,b);if(m.surface==="steps"){const S=(b,E)=>gt(b[p],b[p+1],E);for(let b=0;b<Bo;b++){const E=b/Bo,y=(b+1)/Bo,w=S(_,E),A=S(g,E),P=S(_,y),L=S(g,y),C=(k,q)=>a("steps",p,(E+y)/2,k,q),D=(k,q)=>a("steps",p,Math.max(0,E-.001),k,q);u([[w,P,L,A]],C,Mu);const I=([k,q],Y)=>[k,Y(k,q),q];b&&d.face(xa,I(w,D),I(A,D),I(A,C),I(w,C));const z=(k,q)=>t(k,q)-.02;d.face(xa,I(w,C),I(P,C),I(P,z),I(w,z)),d.face(xa,I(A,C),I(L,C),I(L,z),I(A,z))}}else m.surface==="earth"?u([M],(S,b)=>t(S,b)+.012,kx):u([M],x,m.surface==="ramp"?Mu:zx);for(const[S,b]of[[-1,_],[1,g]]){const E=b[p],y=b[p+1],w=Math.hypot(y[0]-E[0],y[1]-E[1]),A=m.surface==="ramp"||m.surface==="landing",P=yu(m,p,S);if(!P&&!A)continue;const L=Math.max(1,Math.ceil(w/(A?.62:1.75))),C=(D,I)=>{const[z,k]=gt(E,y,D);return[z,x(z,k)+I,k]};for(let D=0;D<L;D++){const I=D/L,z=(D+1)/L;if(A){const k=([q,Y,J])=>[q,Math.min(Y-.07,t(q,J)-.025),J];d.face(xa,C(I,0),C(z,0),k(C(z,0)),k(C(I,0)))}if(P){for(const k of[.38,.83])d.beam(C(I,k),C(z,k),.027,Ll);(!A||D%3===0)&&d.beam(C(I,0),C(I,.85),.047,Ll),D===L-1&&d.beam(C(z,0),C(z,.85),.047,Ll)}}}}}d.finish()}return{walkHeight:c,render:h}}const xc="#dfd7c1",cn="#f0eee6",$x="#526e7c",_s="#343d3d";function Ca([i,t],e){const n=e/2;return[[i-n,t-n],[i+n,t-n],[i+n,t+n],[i-n,t+n]]}function Kx([i,t],[e,n]){const s=Math.hypot(e-i,n-t),o=(e-i)/s,r=(n-t)/s;return(a,l)=>[i+o*a+r*l,t+r*a-o*l]}function Jx(i,t,e){const n=Kx(t[0],t[1]),o=(e.lowerWaterfront??e)(...n(9,27))+.65,r=Math.min(...t.map(mt=>e(...mt)))-.2,a=Ue(t),l="#7295bf",c="#415f88",h="#636b71",f="#b8bdba",u=Se(i,"Пароходъ",{surfaces:{metal:[l,f,c],paving:[h],stone:[xc],glass:["#40484a","#4b5256"]}});u.shell(t,Math.min(r,o-.2),o+.25,xc);const d=t.map(mt=>gt(a,mt,.83));u.shell(d,o+.25,o+2.85,"#40484a",null),u.shell(t,o+2.85,o+3.08,cn,h);for(let mt=2;mt<=13;mt++){const pt=t[mt],V=t[mt+1];An(u,d[mt],d[mt+1],a,o+.52,o+2.76,2.15,"#d9dbd6");const Q=Math.max(1,Math.round(Math.hypot(pt[0]-V[0],pt[1]-V[1])/2.5));for(let dt=0;dt<Q;dt++){const wt=gt(a,gt(pt,V,dt/Q),.97);u.shell(Ca(wt,.28),o+.25,o+2.85,cn,null)}}const m=[n(28.3,24),n(31,16.2)],_=e(...m[0])+.025,g=o+3.08,p=[n(27.2,15.4),n(31.95,15.4),n(31.95,17),n(27.2,17)];u.shell(p,g-.14,g,f,h);const v=[.89,.31],M=(mt,pt)=>{const V=gt([28.3,24],[31,16.2],mt);return n(V[0]+v[0]*pt,V[1]+v[1]*pt)},x=19;for(let mt=0;mt<x;mt++){const pt=mt/x,V=(mt+1)/x,Q=ce.lerp(_,g,V);u.shell([M(pt,-1),M(V,-1),M(V,1),M(pt,1)],Q-.09,Q,f,h)}for(const mt of[-1,1]){const pt=(V,Q)=>{const[dt,wt]=M(V,mt);return[dt,ce.lerp(_,g,V)+Q,wt]};u.beam(pt(0,.98),pt(1,.98),.07,cn),u.beam(pt(0,.51),pt(1,.51),.045,f);for(const V of[.03,.22,.42,.62,.82,1])u.beam(pt(V,.1),pt(V,.98),.055,cn)}const S=[[-16,7.5,15],[-10,4,17],[-2,2.1,17.7],[24,1.7,18.1],[30,1.7,13.2],[34,5.8,9]],b=S.map(([mt,,pt])=>n(mt,pt)),y=S.map(([mt,pt])=>n(mt,pt)).concat(b.slice().reverse());u.shell(y,o+3.08,o+6.5,cn,null);const w=Ue(y);for(let mt=1;mt<b.length;mt++)An(u,b[mt-1],b[mt],w,o+3.4,o+6.24,1.85);const A=o+6.52,P=o+7.72;function L([mt,pt,V]){return[[...n(mt,pt),A],[...n(mt,pt+(V-pt)*.46),P],[...n(mt,V),A]].map(([Q,dt,wt])=>[Q,wt,dt])}let C=0;for(let mt=1;mt<S.length;mt++){const pt=L(S[mt-1]),V=L(S[mt]),Q=Math.max(1,Math.round((S[mt][0]-S[mt-1][0])/2));for(let dt=0;dt<Q;dt++){const wt=pt.map((ht,Z)=>gt(ht,V[Z],dt/Q)),H=pt.map((ht,Z)=>gt(ht,V[Z],(dt+1)/Q)),at=C++%2===0?l:cn;u.face(at,wt[0],H[0],H[1],wt[1]),u.face(at,wt[1],H[1],H[2],wt[2])}}u.face(cn,...L(S[0])),u.face(cn,...L(S.at(-1)));const D=n(13,14.8),I=t.slice(4,10).map(mt=>gt(D,mt,.95)),z=[D,...I];u.shell(z,o+3.08,o+3.42,cn),u.shell(z,o+3.42,o+4.92,"#4b5256",null),C=0,I.slice(1).forEach((mt,pt)=>{const V=I[pt];An(u,V,mt,D,o+3.57,o+4.83,1.65,f);const Q=gt(D,V,1.011),dt=gt(D,mt,1.011);u.wall(Q,dt,o+3.65,o+4.12,"#79444e");for(const H of[3.48,3.71,4.24])u.beam([Q[0],o+H,Q[1]],[dt[0],o+H,dt[1]],.052,cn);const wt=Math.max(2,Math.round(Math.hypot(mt[0]-V[0],mt[1]-V[1])/1.25));for(let H=0;H<wt;H++){const at=gt(V,mt,H/wt),ht=gt(V,mt,(H+1)/wt);u.face(C++%2===0?l:cn,[at[0],o+4.96,at[1]],[ht[0],o+4.96,ht[1]],[D[0],o+5.85,D[1]])}});const k=t.slice(9,17).map(mt=>gt(n(-9.5,24),mt,.94)),q=Ue(k);u.shell(k,o+3.08,o+6.75,cn,h);const Y=k.map(mt=>gt(q,mt,1.024));u.shell(Y,o+4.38,o+5.1,c,null),u.shell(k.map(mt=>gt(q,mt,1.026)),o+6.75,o+6.94,c,h),k.slice(1).forEach((mt,pt)=>{An(u,k[pt],mt,q,o+3.45,o+4.38,1.4),An(u,k[pt],mt,q,o+5.16,o+6.1,1.55)});const[J,j]=Y.slice(1,3),St=Math.hypot(j[0]-J[0],j[1]-J[1]),vt=[(J[1]-j[1])/St,(j[0]-J[0])/St],kt=gt(J,j,.48);Ge(i,{text:"ПАРОХОДЪ",position:[kt[0]+vt[0]*.055,o+4.75,kt[1]+vt[1]*.055],size:[6.6,.69],outward:vt,color:cn,background:c,lighting:"backlit",glowColor:"#d4e9ff"}),u.finish()}function Qx(i,t,e,n){const s="PARK-HOTEL",o=[1.45,1.67,1.52,1.52,1.08,1.56,1.68,1.51,1.39,1.36],r=.42,a=e.slice(0,8).reverse(),l=a.slice(1).map((f,u)=>{const d=a[u],m=Math.hypot(f[0]-d[0],f[1]-d[1]);return{a:d,b:f,length:m,outward:[(d[1]-f[1])/m,(f[0]-d[0])/m]}}),c=o.reduce((f,u)=>f+u,0)+r*(s.length-1);let h=(l.reduce((f,u)=>f+u.length,0)-c)/2;for(const[f,u]of[...s].entries()){const d=o[f];let m=h+d/2;for(const{a:_,b:g,length:p,outward:v}of l){if(m>p){m-=p;continue}const[M,x]=gt(_,g,m/p),[S,b]=v;t.beam([M-S*.06,n+.43,x-b*.06],[M-S*.06,n+.89,x-b*.06],.075,_s),Ge(i,{text:u,position:[M+S*.07,n+1.13,x+b*.07],size:[d,1.8],outward:v,color:"#e7cc87",weight:850,lighting:"neon",glowColor:"#ff5540",spill:f===5});break}h+=d+r}}function jx(i,t,e){const n=Math.min(...t.map(m=>e(...m)))+.06,s=n-.36,o=Ue(t),r="#99655f",a="#d6c9b8",l="#b8b6aa",c=Se(i,"Парк-отель Анапа",{surfaces:{flatRoof:[l],stone:[a]}}),h=n+2.85,f=2.91;c.shell(t,s,h,a,null);for(let m=0;m<t.length;m++){const _=t[m],g=t[(m+1)%t.length],[p,v]=gt(_,g,.5);v<o[1]-2&&e(p,v)<n+.8&&An(c,_,g,o,n+.46,h-.35,2.1,a)}for(let m=0;m<4;m++){const _=h+m*f;c.shell(t,_,_+f,xc,null);for(let g=0;g<t.length;g++){const p=t[g],v=t[(g+1)%t.length],[M,x]=gt(p,v,.5);if(Math.hypot(v[0]-p[0],v[1]-p[1])<1.2)continue;const S=M<o[0]-6||m===3?r:a;c.wall(gt(o,p,1.003),gt(o,v,1.003),_+.05,_+.86,S),(x<o[1]+14||g%2===0)&&An(c,p,v,o,_+.9,_+2.64,1.43,S===r?"#d8bfb0":"#eee8db")}}const u=h+4*f;c.shell(t,u,u+.48,r,l);const d=t.filter(([m,_])=>m<o[0]-11&&_>o[1]-1);if(d.length>=4){const m=d.map(_=>gt(Ue(d),_,.68));c.shell(m,u+.48,u+1.68,r,l)}Qx(i,c,t,u),c.finish()}function tv(i,t,e){const n=t.rings[0],s=t.id==="223949001",o=Ue(n),r=s?e(...o):e(-263.52,25.47),a=Math.min(...n.map(M=>e(...M)))-.25,l="#e5dfcd",c=s?"#94877d":"#ad5d51",h=Se(i,"Музей Горгиппия",{surfaces:{roof:[c],glass:["#556161"],stone:["#a69a82"]}}),f=r+4.25,u=t.id==="142489024"||s?[n[0],n[1],n[3],n[4]]:n.slice(0,4);Math.hypot(u[1][0]-u[0][0],u[1][1]-u[0][1])>Math.hypot(u[2][0]-u[1][0],u[2][1]-u[1][1])&&u.push(u.shift()),h.shell(n,Math.min(a,r),r+.5,"#a69a82",null),h.shell(n,r+.5,f,l,null);const d=gt(u[0],u[1],.5),m=gt(u[2],u[3],.5),_=[gt(d,m,.23),gt(d,m,.77)].map(([M,x])=>[M,f+(s?1.65:2.25),x]),g=u.map(([M,x])=>[M,f,x]);h.face(c,g[0],g[1],_[0]),h.face(c,g[1],g[2],_[1],_[0]),h.face(c,g[2],g[3],_[1]),h.face(c,g[3],g[0],_[0],_[1]);const p=s?[n[0],n[1]]:[n[4],n[0]],v=s?6:4;for(let M=0;M<v;M++){const x=gt(o,gt(p[0],p[1],(M+.32)/v),1.005),S=gt(o,gt(p[0],p[1],(M+.66)/v),1.005);h.wall(x,S,r+1.25,r+3.03,"#556161")}if(t.id==="142489024")for(const M of[.19,.81]){const x=n[0],S=n[1],b=Array.from({length:16},(E,y)=>{const w=y*Math.PI/8,[A,P]=gt(o,gt(x,S,M+.035*Math.cos(w)),1.006);return[A,r+2.5+.46*Math.sin(w),P]});h.face($x,...b)}h.finish()}function ev(i,t,e){if(t.id==="170958806")Jx(i,t.rings[0],e);else if(t.id==="1546378584")jx(i,t.rings[0],e);else if(["142489024","218983841","223949001"].includes(t.id))tv(i,t,e);else return!1;return!0}function nv(i,t){const e=Se(i,"Вход в Горгиппию"),[n,s]=Ui[1],o=t(n,s),r=Ni,a=(h,f,u=0)=>[n+Math.cos(r)*h-Math.sin(r)*u,o+f,s+Math.sin(r)*h+Math.cos(r)*u];for(let h=1;h<Ui.length;h++){const f=Ui[h-1],u=Ui[h],d=Math.hypot(u[0]-f[0],u[1]-f[1]),m=gt(f,u,_c(f)/d),_=gt(f,u,1-_c(u)/d),g=Math.hypot(_[0]-m[0],_[1]-m[1]),p=Math.ceil(g/2.6),v=(M,x)=>{const[S,b]=gt(m,_,M);return[S,t(S,b)+x,b]};for(let M=0;M<p;M++){const x=M/p,S=(M+1)/p;for(const[b,E,y]of[[.14,.23,"#b1a992"],[.37,.037,_s],[1.21,.043,_s]])e.beam(v(x,b),v(S,b),E,y);e.beam(v(x,.22),v(x,1.31),.068,_s);for(let b=1;b<=5;b++){const E=x+(S-x)*b/6;e.beam(v(E,.36),v(E,1.25),.024,_s)}}}for(const h of[-2.55,2.55]){const[f,,u]=a(h,0);e.shell(Ca([f,u],.63),o-.45,o+2.56,cn),e.shell(Ca([f,u],.83),o+2.56,o+2.72,xc),e.shell(Ca([f,u],.88),o+2.72,o+3.48,cn);const d=Array.from({length:20},(m,_)=>{const g=_*Math.PI/10;return a(h+Math.cos(g)*.31,3.1+Math.sin(g)*.31,-.445)});e.face("#98694b",...d)}for(const h of[0,.27,.55]){const f=Array.from({length:11},(u,d)=>{const m=d/5-1;return a(m*2.17,2.8+h+(1-m*m)*.68)});f.slice(1).forEach((u,d)=>e.beam(f[d],u,.045,cn))}const l={Г:[[[0,0],[0,1],[1,1]]],О:[[[.22,0],[.78,0],[1,.18],[1,.82],[.78,1],[.22,1],[0,.82],[0,.18],[.22,0]]],Р:[[[0,0],[0,1],[.78,1],[1,.82],[1,.65],[.78,.49],[0,.49]]],И:[[[0,1],[0,0],[1,1],[1,0]]],П:[[[0,0],[0,1],[1,1],[1,0]]],Я:[[[1,0],[1,1],[.22,1],[0,.82],[0,.65],[.22,.49],[1,.49]],[[0,0],[.44,.49]]]};Array.from("ГОРГИППИЯ").forEach((h,f)=>{const u=(f-4)*.425,d=3.02+(1-(u/2.17)**2)*.68;for(const m of l[h]){const _=m.map(([g,p])=>a(-u-(g-.5)*.32,d+p*.43,-.045));_.slice(1).forEach((g,p)=>e.beam(_[p],g,.043,"#9e5345"))}});const c=gd(t);for(let h=0;h<3;h++){const f=-1.44+h*.42,u=[[-2.22,f],[2.22,f],[2.22,.46],[-2.22,.46]].map(([m,_])=>{const[g,,p]=a(m,0,_);return[g,p]}),d=h===0?c-.2:c+h*.135;e.shell(u,d,c+(h+1)*.135,"#c8b697")}for(const h of[-1,1]){for(let f=0;f<=6;f++){const u=h*(1.15+f*.16);e.beam(a(u,.26),a(u,1.78),.032,_s)}for(const f of[.32,1.7])e.beam(a(h*1.15,f),a(h*2.2,f),.046,_s)}e.finish()}function iv(i,t){nv(i,t)}const qo="#eeeee7",ss="#f3f1e7",Pa="#294d6a",_d="#496b83",xd={glass:[_d,"#7694a3"],metal:[Pa,"#4d7494"],flatRoof:["#c2c7c2","#c7c8bf","#c6c8c4"],stone:["#c7bcab"]};function hr(i){return i.map(([t,e],n)=>{const[s,o]=i[(n+1)%i.length],r=Math.hypot(s-t,o-e);return{x:t,z:e,length:r,ux:(s-t)/r,uz:(o-e)/r}})}function Xe(i,t,e=0){return[i.x+i.ux*t-i.uz*e,i.z+i.uz*t+i.ux*e]}function bu(i,t){return i.map((e,n)=>{const s=(n+i.length-1)%i.length,o=i[s],r=Xe(o,0,t[s]),a=Xe(e,0,t[n]),l=o.ux*e.uz-o.uz*e.ux,c=((a[0]-r[0])*e.uz-(a[1]-r[1])*e.ux)/l;return[r[0]+o.ux*c,r[1]+o.uz*c]})}function Zl(i,t,e,n,s){return[Xe(i,t,n),Xe(i,e,n),Xe(i,e,s),Xe(i,t,s)]}function Mo(i,t,e,n,s,o,r=_d,a=.025){i.wall(Xe(t,e,-a),Xe(t,n,-a),s,o,r)}function sv(i,t,e,n){const s=n?Math.max(1,Math.round(t.length/4.15)):1,o=Math.min(n?2.38:.93,t.length/s*.69);for(let r=0;r<s;r++){const a=t.length*(r+.5)/s,l=e+(n?.37:1.02),c=e+2.37;Mo(i,t,a-o/2,a+o/2,l,c),n&&Mo(i,t,a-.038,a+.038,l,c,"#7694a3",.04)}}function ov(i,t,e){const[n,s]=Xe(t,0,.055),[o,r]=Xe(t,t.length,.055);i.beam([n,e+.26,s],[o,e+.26,r],.065,Pa),i.beam([n,e+1.08,s],[o,e+1.08,r],.075,Pa);const a=Math.ceil(t.length/.215);for(let l=0;l<a;l++){const c=t.length*(l+.5)/a;i.wall(Xe(t,c-.016,.055),Xe(t,c+.016,.055),e+.26,e+1.08,Pa)}}function rv(i,t,e,n,s){const o=n+.9,r=e.length*.2,a=e.length*.8,l=s(...Xe(e,e.length/2,-2.9));for(let u=0;u<6;u++){const d=-2.9+u*.42,m=l+(o-l)*(u+1)/6;t.shell(Zl(e,r,a,d,.04),Math.min(m-.05,l-.08),m,"#c7bcab")}t.shell(Zl(e,r-.9,a+.9,-2.3,.04),n+3.24,n+3.56,ss);const c=(r+a)/2;Mo(t,e,c-4.4,c+4.4,n+2.74,n+3.23,ss,.055);const[h,f]=Xe(e,c,-.082);Ge(i,{text:"анапа-океан",position:[h,n+2.99,f],size:[8.1,.62],outward:[e.uz,-e.ux],color:"#155d8a",weight:850,lighting:"backlit",glowColor:"#6ac8ff"})}function av(i,t,e){const n=Se(i,"Анапа-Океан — 13 этажей",{surfaces:xd}),s=hr(t),o=new Set([0,1,3,4,5,6]),r=bu(s,s.map((g,p)=>o.has(p)?1.5:.05)),a=hr(r),l=e(...Xe(s[0],s[0].length/2)),c=Math.min(...t.map(g=>e(...g)))-.3,h=l+3.65,f=12,u=2.97,d=h+f*u;n.shell(t,c,h,qo,ss);for(const g of s.slice(0,3)){const p=Math.max(2,Math.round(g.length/2.3));for(let v=0;v<p;v++){const M=g.length*(v+.055)/p,x=g.length*(v+.945)/p;Mo(n,g,M,x,l+.95,l+3.22)}}rv(i,n,s[0],l,e),n.shell(r,h,d,qo,"#c2c7c2");for(let g=0;g<f;g++){const p=h+u*g,v=g<f-1;v&&(n.shell(t,p,p+.22,ss),n.flat(t,p,ss));for(let M=0;M<s.length;M++){const x=o.has(M);sv(n,a[M],p,x),x&&v&&ov(n,s[M],p)}}const m=bu(s,s.map(()=>.4)),_=hr(m);n.shell(m,d-.17,d+.45,qo,"#c7c8bf");for(const[g,p]of[[2,1.37],[7,1.05]]){const v=_[g];n.shell(Zl(v,.7,v.length-.7,.02,2.1),d+.45,d+p,qo)}n.finish()}function cv(i,t,e){const n=Se(i,"Анапа-Океан — низкое крыло",{surfaces:xd}),s=[...t.slice(0,9),t[15]],o=t.slice(8),r=e(...Ue(s)),a=e(...Ue(o)),l=r+3.9,c=a+6.25,h="#4d7494";for(const[g,p,v]of[[s,r,l],[o,a,c]]){const M=Math.min(...g.map(S=>e(...S)))-.3;n.shell(g,M,v,qo,"#c6c8c4");const x=hr(g);for(const S of x){if(S.length<2.7)continue;const b=Math.max(1,Math.round(S.length/4.3));for(let E=0;E<b;E++){const y=S.length*(E+.17)/b,w=S.length*(E+.84)/b;Mo(n,S,y,w,p+.72,p+2.94),g===o&&Mo(n,S,y,w,p+3.55,v-.64)}}}const f=hr(s);for(const g of f.slice(0,6)){const p=Xe(g,0,.15),v=Xe(g,g.length,.15);n.wall(p,v,l+.14,l+.91,h),n.beam([p[0],l+.96,p[1]],[v[0],l+.96,v[1]],.055,ss)}const u=f[3],[d,m]=Xe(u,u.length/2,-1.55),_=e(d,m)+2.65;for(const g of[-1,1]){const[p,v]=Xe(u,u.length/2+g*1.85,-1.47);n.beam([p,e(p,v),v],[p,_,v],.16,ss),n.beam([p,_-.12,v],[d,_-.12,m],.095,ss)}Ge(i,{text:"La Veranda",position:[d,_+.16,m],size:[3.6,.69],outward:[u.uz,-u.ux],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#faf3db",weight:600,lighting:"spot"}),n.finish()}function lv(i,t,e){if(t.id==="223949006")av(i,t.rings[0],e);else if(t.id==="142489050")cv(i,t.rings[0],e);else return!1;return!0}const di="#eeece2",ms="#354552";function vd(i,t){const e=Math.hypot(t[0]-i[0],t[1]-i[1]),n=(t[0]-i[0])/e,s=(t[1]-i[1])/e,o=(l,c)=>[i[0]+n*l-s*c,i[1]+s*l+n*c];return{point:o,project:([l,c])=>[(l-i[0])*n+(c-i[1])*s,(l-i[0])*-s+(c-i[1])*n],rectangle:(l,c,h,f)=>[o(l,h),o(c,h),o(c,f),o(l,f)]}}function wu(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);r>=0&&e.push(s),r<0!=a<0&&e.push(gt(s,o,r/(r-a)))}return e}function hv(i,t,e){const{point:n,project:s,rectangle:o}=vd(t[0],t[1]),r=t.map(y=>e(...y)),a=Math.max(...r),l=a+3.35,c="#c8bda8",h="#adada4",f=Se(i,"Кубань",{surfaces:{flatRoof:[h],stone:[c]}});f.shell(t,Math.min(...r)-.22,l,c,h);const u=wu(t,y=>14-s(y)[0]),d=wu(t,y=>s(y)[1]-35.45);f.shell(u,l,a+6.7,di,h),f.shell(d,l,a+6,"#d7d0c1",h);const m=14,_=89.4,g=9.02,p=25.57,v=o(m,_,g+1.05,p-1.05),M=Ue(v),x=2.95,S=l+8*x;f.shell(v,l,S,di,h);const b=22,E=[g,p].map((y,w)=>{const A=w===0?1:-1,P=[];for(let L=0;L<b;L++){const C=m+(_-m)*L/b,D=m+(_-m)*(L+1)/b;P.push(n(C,y+A*.48),n(C+(D-C)*.4,y),n(D,y))}return P});for(let y=0;y<8;y++){const w=l+y*x;An(f,v[0],v[1],M,w+.96,w+2.62,3.45),An(f,v[2],v[3],M,w+.96,w+2.62,3.45);for(const P of E)for(let L=1;L<P.length;L++)f.wall(P[L-1],P[L],w+.24,w+.94,di);const A=[[...E[0],n(_,g+1.07),n(m,g+1.07)],[...E[1],n(_,p-1.07),n(m,p-1.07)]];for(const P of A)f.shell(P,w,w+.24,di)}f.shell(v,S,S+.45,di,h),f.finish()}function Eu(i,t,e,n,s,o,r){const a=[[t[0],n,t[1]],[e[0],n,e[1]]];for(let l=0;l<=8;l++){const c=Math.PI*l/8,[h,f]=gt(t,e,(1+Math.cos(c))/2);a.push([h,s+(o-s)*Math.sin(c),f])}i.face(r,...a)}function va(i,t,e,n,s,o,r){for(let a=0;a<r;a++){const l=f=>gt(t,e,(a+f)/r),c=[l(.15),l(.85)].map(f=>gt(n,f,1.006));Eu(i,...c,s,s+o*.72,s+o,di);const h=[l(.24),l(.76)].map(f=>gt(n,f,1.011));Eu(i,...h,s+.12,s+o*.72,s+o-.2,"#314454")}}function uv(i,[t,e],n,s,o,r=!1){const a=n.map(([l,c])=>Array.from({length:s},(h,f)=>{const u=2*Math.PI*(f+.5)/s;return[t+c*Math.cos(u),l,e+c*Math.sin(u)]}));for(let l=1;l<a.length;l++)for(let c=0;c<s;c++){const h=(c+1)%s;i.face(o,a[l-1][c],a[l-1][h],a[l][h],a[l][c]),r&&c%2===0&&i.beam(a[l-1][c],a[l][c],.04,"#a98c4b")}}function Tu(i,[t,e],n,s){const o="#bc9e4f";i.beam([t,n,e],[t,n+s,e],.075,o),i.beam([t-.33,n+s*.67,e],[t+.33,n+s*.67,e],.065,o),i.beam([t-.22,n+s*.35,e],[t+.22,n+s*.43,e],.06,o)}function fv(i,t,e){const[n,s,o,r]=t,a=(L,C)=>gt(gt(s,o,L),gt(n,r,L),C),l=(L,C,D,I)=>[a(L,D),a(C,D),a(C,I),a(L,I)],c=Ue(t),h=e(...c),f=Math.min(...t.map(L=>e(...L)))-.25,u="#3c9e9e",d="#a99973",m=Se(i,"Свято-Онуфриевский храм",{surfaces:{flatRoof:[ms],glass:["#314454"],stone:[d]}}),_=l(.24,1,0,1),g=l(0,.35,.25,.75),p=Ue(_),v=Ue(g),M=h+5.9;m.shell(_,f,h+.6,d,null),m.shell(_,h+.6,M,u,null),m.shell(g,f,h+.6,d,null),m.shell(g,h+.6,h+6.45,u,null),m.shell(_.map(L=>gt(p,L,1.012)),M-.27,M,di,null);for(const[L,C]of[[_[0],_[1]],[_[2],_[3]],[_[1],_[2]]])va(m,L,C,p,h+1.18,2.78,3);va(m,g[3],g[0],v,h+.55,3.1,1);const x=[a(.42,.5),a(.83,.5)].map(([L,C])=>[L,h+7.95,C]),S=_.map(([L,C])=>[L,M,C]);m.face(ms,S[0],S[1],x[1],x[0]),m.face(ms,S[1],S[2],x[1]),m.face(ms,S[2],S[3],x[0],x[1]),m.face(ms,S[3],S[0],x[0]);const b=h+6.65,E=h+10.35;m.shell(g,h+6.22,b,di,null),m.shell(g,b,E,u,null),g.forEach((L,C)=>{va(m,L,g[(C+1)%g.length],v,b+.18,2.55,3)});for(const[L,C,D]of[[_,p,M],[g,v,E]])for(const I of L){const[z,k]=gt(C,I,1.006);m.beam([z,h+.6,k],[z,D,k],.35,di)}const y=g.map(L=>gt(v,L,1.045)),w=[v[0],h+17.8,v[1]];y.forEach(([L,C],D)=>{const[I,z]=y[(D+1)%y.length];m.face(ms,[L,E,C],[I,E,z],w),m.beam([L,E,C],w,.055,"#88754c")}),Tu(m,v,w[1],1.42);const A=a(.68,.5),P=Array.from({length:8},(L,C)=>{const D=Math.PI*(C+.5)/4;return[A[0]+1.98*Math.cos(D),A[1]+1.98*Math.sin(D)]});m.shell(P,h+7.35,h+10.1,u,null),m.shell(P.map(L=>gt(A,L,1.08)),h+9.87,h+10.12,di,null),P.forEach((L,C)=>va(m,L,P[(C+1)%P.length],A,h+8.22,1.42,1)),uv(m,A,[[10.12,1.98],[10.55,2.27],[11.25,2.32],[12.02,1.85],[12.63,1.02],[13.12,.47],[13.52,.16]].map(([L,C])=>[h+L,C]),12,ms,!0),Tu(m,A,h+13.5,1.35),m.finish()}function dv(i,t,e){const{point:n,rectangle:s}=vd(t[3],t[4]),o=Ue(t),r=t.map(A=>e(...A)),a=Math.max(...r),l="#d4b581",c="#cca873",h="#eadcbe",f="#a17a61",u="#aaa598",d="#625748",m="#986d59",_=Se(i,"Мотылёк",{surfaces:{flatRoof:[u],metal:[d,m],stone:[f]}}),g=a+9.35;_.shell(t,Math.min(...r)-.25,a+.64,f,null),_.shell(t,a+.64,g,c,u);for(let A=0;A<3;A++){const P=a+.65+A*2.84;if(An(_,t[3],t[4],o,P+.65,P+2.43,3.9,c),An(_,t[11],t[12],o,P+.65,P+2.43,4,c),!A)continue;const L=s(.2,51.35,-.58,.04);_.shell(L,P-.24,P,h,l),_.wall(L[0],L[1],P+.68,P+.77,d);const C=s(9.18,42.7,16.97,17.52);_.shell(C,P-.24,P,h,l),_.wall(C[2],C[3],P+.68,P+.77,d)}const p=42.99,v=57,M=16.85,x=44.8,S=s(p,v,M,x),b=Ue(S),E=a+12.15;_.shell(S,g,E,c,null);for(const[A,P]of S.entries())An(_,P,S[(A+1)%S.length],b,g+.35,E-.35,4.3,c);const[y,w]=[M,x].map(A=>Array.from({length:11},(P,L)=>{const C=L/10,[D,I]=n(p-.27+(v-p+.54)*C,A);return[D,E+1.55*(1-(2*C-1)**2),I]}));for(let A=1;A<y.length;A++)_.face(m,y[A-1],w[A-1],w[A],y[A]);_.face(c,...y),_.face(c,...w),_.finish()}function pv(i,t,e){const n=t.parts?.filter(v=>v.levels>2)??[],s=t.parts?.filter(v=>v.levels===2)??[];if(n.length!==2||s.length!==2)return!1;const o=["#6f8a98","#8197a0","#627e8f","#718d9d"],r=Se(i,"Колоннада",{surfaces:{flatRoof:["#b8bfbe"],glass:o,stone:["#d4d8d5"]}}),a=t.rings[0],l=a.map(v=>e(...v)),c=Math.max(...l),h=Math.min(...l)-.22,f=c+6.65,u="#d4d8d5",d="#b8bfbe",m="#a5adaf";for(const v of t.parts)r.shell(v.rings[0],h,f,m,d);const _=Ue(a);a.forEach((v,M)=>{const x=a[(M+1)%a.length];for(const S of[0,1]){const b=c+S*3.325;An(r,v,x,_,b+.42,b+2.87,2.4,"#c4c9c8")}});const g=["#9e7867","#9b8e65","#56768e"],p=2.95;for(const[v,M]of n.entries()){const x=M.rings[0],S=Ue(x),b=f+(M.levels-2)*p;r.shell(x,f,b,u,d),x.forEach((E,y)=>{const w=x[(y+1)%x.length],A=Math.hypot(w[0]-E[0],w[1]-E[1]),P=Math.max(1,Math.round(A/2.45)),L=A>9?.13:.16,C=q=>gt(S,gt(E,w,q),1.0035);for(let q=0;q<P;q++){const Y=C(L+(1-2*L)*(q+.025)/P),J=C(L+(1-2*L)*(q+.975)/P);for(let j=2;j<M.levels;j++){const St=f+(j-2)*p,vt=j*7+y*11+q*5+v*9,kt=vt%29===0?g[q%g.length]:o[vt%o.length];r.wall(Y,J,St+.15,St+p-.14,kt)}}if(A<13)return;const[D,I]=C(.15),[z,k]=C(.85);for(const[q,Y]of[[D,I],[z,k]])r.beam([q,b,Y],[q,b+1.45,Y],.15,"#9ba5a8");r.beam([D,b+1.45,I],[z,b+1.45,k],.16,"#9ba5a8")})}return r.finish(),!0}function mv(i,t,e){const n=t.rings[0];if(t.id==="223459472")hv(i,n,e);else if(t.id==="142489074")fv(i,n,e);else if(t.id==="223628174")dv(i,n,e);else return t.id==="223628417"?pv(i,t,e):!1;return!0}function Qe([i,t],e){return[i,e,t]}function Yo([i,t],e,n=e){return Array.from({length:8},(s,o)=>{const r=o*Math.PI/4;return[i+Math.cos(r)*e,t+Math.sin(r)*n]})}function Md(i,t,e,n){i.shell(Yo(t,.13),e,e+.69,n,null),i.shell(Yo(t,.54),e+.69,e+.75,n);for(const s of[-1,1]){const o=[t[0]+s*.84,t[1]];i.shell(Yo(o,.18),e,e+.44,n,null),i.shell(Yo(o,.28),e+.44,e+.5,n),i.beam([o[0]+s*.23,e+.46,o[1]],[o[0]+s*.23,e+.87,o[1]],.08,n)}}function gv(i,t,e,n,s){const o=(n.lowerWaterfront??n)(...Ue(e)),r=o+s,a="#ded4ba",l="#e5e0cf",c="#bfbaa8",h="#484740",f=[[e[1][0],-30.5],[e[2][0],-32.8],[e[3][0],-35.7]],u=f.map(([g,p])=>[g,p-2]),d=[e[0],...u,e.at(-1)];t.shell(d,o-.17,o+.23,a,"#aa9c80"),t.shell(d,r-.25,r,"#a8a393","#b6b2a5");for(let g=1;g<u.length;g++){const p=u[g-1],v=u[g];t.wall(p,v,o+.23,o+.75,a),t.wall(p,v,r-.43,r-.25,l),t.wall(f[g-1],f[g],o+.23,r-.25,"#4b5351");for(const x of[.79,1,1.19])t.beam(Qe(p,o+x),Qe(v,o+x),.053,h);const M=5;for(let x=0;x<M;x++){const S=(x+.5)/M,b=gt(p,v,S),E=Qe(b,o+1.54),y=r-.42;t.beam(Qe(b,o+.23),Qe(b,r-.25),.16,a);for(const P of[-1,1]){const L=gt(p,v,S+P*.018),C=gt(p,v,S+P*.056);t.face(l,Qe(b,y),Qe(C,y),E),t.face(c,Qe(C,y),Qe(L,y-.8),E),t.face(l,E,Qe(b,o+.77),Qe(L,o+.77))}t.beam(Qe([b[0],b[1]-.045],o+1.9),Qe([b[0],b[1]-.045],o+2.12),.11,"#f2dcab");const[w,A]=gt(p,v,S+.09);Md(t,[w,A+1.14],o+.23,"#88684d")}}const[m,_]=gt(u[0],u[1],.78);Ge(i,{text:"ПРИЧАЛ",position:[m,r-.54,_-.055],size:[3.08,.42],outward:[-.108,-.994],background:"#484740",color:"#f2e8d0",lighting:"unlit"})}function _v(i,t,e,n){const s=n(-170,-63)+.26,o=Ue(e),r="#323a3e",a="#795b45",l=e.map(g=>gt(o,g,.82));t.shell(e,s-1.12,s+.39,"#666458");for(const[g,p,v,M]of[[e,.39,2.75,3.18],[e,3.18,5.93,6.52],[l,6.52,8.75,9.06]])t.shell(g,s+p,s+v,"#35494d",null),t.shell(g,s+v,s+M,r,"#777e7b"),g.forEach((x,S)=>{const b=g[(S+1)%g.length];An(t,x,b,o,s+p+.05,s+v,1.18,r)});const c=[[-185.1,-55.2],[-173,-69.3],[-163.5,-64],[-162.1,-47.2]],h=s+3.06,f=[c[0],[-188.8,-60.2],[-180.3,-72.6],c[1]];t.shell(f,s-.5,s+.11,"#888479","#aaa293"),t.shell(c,s-.52,s+.37,"#6a675d","#968477"),t.shell(c,h-.18,h,"#4c4035","#929895");const u=c.map(g=>gt(Ue(c),g,.94));t.shell(u,s+.37,h-.19,"#475958",null);for(let g=0;g<c.length;g++){const p=c[g],v=c[(g+1)%c.length],M=Math.ceil(Math.hypot(v[0]-p[0],v[1]-p[1])/2.55);for(let x=0;x<M;x++){const S=gt(p,v,x/M);t.beam(Qe(S,s+.35),Qe(S,h-.13),.2,a),t.beam(Qe(gt(S,v,.03),h-.33),Qe(gt(p,v,(x+.8)/M),h-.33),.035,"#dac797")}}for(const g of[[-185.6,-60.4],[-183.4,-64],[-180.8,-67.6]])Md(t,g,s+.11,"#916e49");const d=[-177.7,-51.7],m=n(...d),_=Yo(d,.36,.52);t.shell(_,m-.08,m+2.31,a),Ge(i,{text:"ВИНО И МОРЕ",position:[d[0]-.365,m+1.28,d[1]],size:[1.02,.53],outward:[-1,0],background:"#5b4435",color:"#e7dac1",lighting:"unlit"})}const $l="#607680",xv={223948934:{address:"9",height:4.9,wall:"#c6b69f",roof:"#b6b1a5"},223948896:{address:"11",height:4.7,wall:"#b7a188",roof:"#777774"},223948899:{address:"13",height:4.6,wall:"#c4baaa",roof:"#cbc7bc"},223948902:{address:"15/1",height:4.45,wall:"#c0b4a2",roof:"#c4c0b5"},223948903:{address:"15/2",height:4.45,wall:"#bab0a1",roof:"#c4c0b5"},223948904:{address:"15/3",height:4.4,wall:"#baafa0",roof:"#c4c0b5"},223948906:{address:"17",height:4.35,wall:"#9c8471",roof:"#b3aba1"},223948908:{address:"19",height:3.65},223948913:{address:"21",height:3.75,wall:"#b4a18a",roof:"#a59c8b",name:"Хинкальная"},223948916:{address:"23",height:3.85,wall:"#85685b",roof:"#77716a",veranda:!0}};function vv(i){const t=i.reduce((e,n,s)=>{const o=i[(s+1)%i.length];return e+n[0]*o[1]-o[0]*n[1]},0);return i.map((e,n)=>[e,i[(n+1)%i.length]]).filter(([e,n])=>{const s=Math.hypot(n[0]-e[0],n[1]-e[1]);return s>=2&&(n[0]-e[0])*Math.sign(t)/s>.42})}function Mv(i,t,e,{height:n,wall:s,roof:o,veranda:r}){const a=vv(t),l=e.lowerWaterfront??e,c=Math.min(...t.map(d=>l(...d))),h=c+n,f=Ue(t),u=r?t.map(d=>gt(f,d,.8)):t;i.shell(t,c-.24,c+.32,"#b2a798"),i.shell(u,c+.3,h-.28,s,null),i.shell(t,h-.28,h,o);for(const[d,m]of a){const _=Math.hypot(m[0]-d[0],m[1]-d[1]),g=Math.max(1,Math.round(_/(r?3.4:2.5))),p=gt(f,d,1.005),v=gt(f,m,1.005);for(let M=0;M<g;M++){const x=gt(p,v,(M+.12)/g),S=gt(p,v,(M+.88)/g);if(r){const b=gt(d,m,M/g);i.beam([b[0],c+.32,b[1]],[b[0],h-.26,b[1]],.16,s),i.beam([x[0],c+.97,x[1]],[S[0],c+.97,S[1]],.075,"#66645f");const E=gt(f,x,.8),y=gt(f,S,.8);i.wall(E,y,c+.65,h-.44,$l)}else i.wall(x,S,c+.55,h-.6,$l),i.beam([x[0],c+1.31,x[1]],[S[0],c+1.31,S[1]],.07,s)}r&&i.beam([m[0],c+.32,m[1]],[m[0],h-.26,m[1]],.16,s)}}function Sv(i,t,e,n){const s=n?-361.1:-351.8,o=n?-354.7:-331,r=n?-29.5:-29.6,a=(e.lowerWaterfront??e)((s+o)/2,r),l=n?"#e1dbcc":"#ac8b65",c=n?"#244945":"#302723",h=(g,p,v=0)=>[n?s+o-g:g,a+p,r-v],f=(g,p,v,M)=>[[g,v],[p,v],[p,M],[g,M]],u=(g,p,v,M,x,S)=>{t.face(S,h(g,v,x),h(p,v,x),h(p,M,x),h(g,M,x))},d=(g,p,v,M,x,S)=>t.beam(h(g,v,M),h(p,v,M),x,S),m=(g,p,v,M,x,S)=>t.beam(h(g,p,M),h(g,v,M),x,S);t.shell(f(s,o,r,r+2.55),a+.12,a+5.36,l),u(s+.16,o-.16,3.72,5.16,.022,"#687c86");const _=n?4:12;for(let g=0;g<=_;g++)m(s+.16+(o-s-.32)*g/_,3.7,5.18,.041,.065,"#d6d1c7");if(d(s+.16,o-.16,4.47,.038,.068,"#d6d1c7"),n){const g=s+.42;u(g,g+1.16,.31,2.52,.034,"#755336"),u(g+.11,g+1.05,.95,2.41,.044,"#45534a"),u(g+.11,g+1.05,.35,.94,.044,c),u(s+2.02,o-.38,.47,2.46,.026,"#4e6355");for(let M=0;M<=3;M++)m(s+2.02+M*1.33,.45,2.48,.06,.12,"#79573b");const p=s+1.84,v=o-.22;t.face("#236a66",h(p,2.77),h(v,2.77),h(v,2.5,1.38),h(p,2.5,1.38)),u(p,v,2.34,2.5,1.38,"#286c67"),Ge(i,{text:"Adrian",position:h((p+v)/2,2.42,1.39),size:[1.48,.15],outward:[0,-1],color:"#f5e9ce",lighting:"unlit"}),Ge(i,{text:"Adrian  BISTRO",position:h((p+v)/2,3.15,.035),size:[3.98,.53],outward:[0,-1],background:"#536e55",color:"#f1d8a1",fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#ffca70"}),t.shell(f(s+.12,o-.08,r-1.65,r),a+.13,a+.31,"#b5a58c"),d(s+1.75,o-.15,1.14,1.53,.061,c);for(let M=0;M<=11;M++)m(s+1.75+M*.409,.31,1.14,1.53,.035,c);for(const M of[s+.3,s+1.72,o-.45]){const[x]=h(M,0),S=(E,y)=>Array.from({length:8},(w,A)=>[x+Math.cos(A*Math.PI/4)*E,r-y+Math.sin(A*Math.PI/4)*E]);t.shell(S(.24,.83),a+.31,a+.7,"#ab694f");const b=S(.3,.83);for(let E=0;E<b.length;E++){const y=b[E],w=b[(E+1)%b.length];t.face(E%2?"#345c46":"#40694d",[y[0],a+.66,y[1]],[w[0],a+.66,w[1]],[x,a+1.85,r-.83])}}for(const M of[s+2.7,s+4.56]){m(M,.31,1,.93,.075,"#765d41");const[x]=h(M,0);t.shell(f(x-.31,x+.31,r-1.15,r-.71),a+.98,a+1.03,"#8b6c4b")}}else{t.shell(f(s,o,r-1.2,r),a+.12,a+.31,"#786858"),t.face("#392e27",h(s,3.16),h(o,3.16),h(o,2.79,1.21),h(s,2.79,1.21)),u(s,o,2.62,2.79,1.21,"#3d2f28");const g=8,p=(o-s)/g;for(let v=0;v<g;v++){const M=s+p*v;u(M+.08,M+p-.08,.34,2.61,.032,v%3===0?"#587273":"#354d50"),m(M+.02,.31,2.68,1.13,.088,c),d(M+.12,M+p-.18,1.12,1.11,.07,"#7e5e42");for(let x=0;x<=5;x++)m(M+.12+(p-.3)*x/5,.31,1.12,1.11,.039,"#7e5e42")}m(o-.02,.31,2.68,1.13,.088,c),Ge(i,{text:"BAVARIA",position:h(-342.2,3.07,1.24),size:[5.9,.55],outward:[0,-1],color:"#f5e5ca",fontFamily:"Georgia, serif",lighting:"backlit"}),yv(i,t,e)}}function yv(i,t,e){const o=e(-332.9,-27.7)+.13;for(const a of[-1,1]){const l=-332.9+a*1.05;t.beam([l,o,-27.7],[l,o+2.58,-27.7],.08,"#606564")}const r=[[-332.9-1.12,-27.7-.05],[-332.9+1.12,-27.7-.05],[-332.9+1.12,-27.7+.05],[-332.9-1.12,-27.7+.05]];t.shell(r,o+1.61,o+2.64,"#593b2a");for(const a of[1.87,2.12,2.38])t.beam([-332.9-1.1,o+a,-27.7+.05],[-332.9+1.1,o+a,-27.7+.05],.008,"#492b21");t.beam([-332.9+.2,o+2.64,-27.7],[-332.9+.28,o+2.95,-27.7+.13],.029,"#31302f"),t.beam([-332.9+.23,o+2.95,-27.7+.13],[-332.9+.35,o+2.95,-27.7+.15],.052,"#31302f"),Ge(i,{text:"BAVARIA",position:[-332.9,o+2.26,-27.7+.061],size:[1.98,.42],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffc882"}),Ge(i,{text:"GRILL&BAR",position:[-332.9,o+1.98,-27.7+.061],size:[1.2,.21],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",spill:!1})}function bv(i,t,e){const n=[-278.9,-35.55],s=[-260.3,-39.94],o=Math.hypot(s[0]-n[0],s[1]-n[1]),r=[(s[1]-n[1])/o,(n[0]-s[0])/o],a=gt(n,s,.61),l=(e.lowerWaterfront??e)(...a),c=(m,_=0)=>{const[g,p]=gt(n,s,m);return[g+_*r[0],p+_*r[1]]},h=(m,_,g=0)=>{const[p,v]=c(m,g);return[p,l+_,v]},f="#59606a",u="#313a43";t.wall(n,s,l+.13,l+3.39,f),t.wall(c(0,.022),c(1,.022),l+2.61,l+3.39,u);const d=[0,.1,.2,.3,.4,.49,.56,.66,.73,.82,.91,1];for(let m=1;m<d.length;m++){const _=d[m-1],g=d[m],p=m===7;t.wall(c(_,.038),c(g,.038),l+(p?.34:.63),l+2.6,p?"#334955":"#6b8596"),t.beam(h(_,p?.33:.62,.08),h(_,2.62,.08),.085,u),p||t.beam(h(_,2.11,.064),h(g,2.11,.064),.058,u)}t.beam(h(1,.62,.08),h(1,2.62,.08),.085,u),Ge(i,{text:"Хинкальная",position:h(.61,2.92,.051),size:[5.54,.56],outward:r,fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#e6f1ff"}),Ge(i,{text:"грузинская  Кафе  европейская",position:h(.61,3.26,.051),size:[4.06,.17],outward:r,fontFamily:"Georgia, serif",color:"#fff4e1",lighting:"spot",spill:!1})}function wv(i,t,e){const{id:n,rings:[s]}=t,o=xv[n];if(!o&&n!=="223949008")return!1;const r=n==="223949008"?"Вино и море":n==="223948908"?"Причал":o.name??`Набережная, ${o.address}`,a=Se(i,r,{surfaces:{glass:[$l,"#687c86","#45534a","#4e6355","#587273","#354d50","#4b5351","#35494d","#475958","#334955","#6b8596"],wood:["#755336","#79573b","#765d41","#8b6c4b","#7e5e42","#88684d","#795b45","#916e49","#968477","#593b2a"],foliage:["#345c46","#40694d"],stone:["#b2a798","#b5a58c","#aa9c80","#aaa293"],flatRoof:[o?.roof,"#b6b2a5","#777e7b","#929895"],metal:["#244945","#302723","#484740","#323a3e"]}});return n==="223949008"?_v(i,a,s,e):n==="223948908"?gv(i,a,s,e,o.height):(Mv(a,s,e,o),(n==="223948904"||n==="223948906")&&Sv(i,a,e,n==="223948904"),n==="223948913"&&bv(i,a,e)),a.finish(),!0}const vn="#e9e5d8",Au="#d8c7a9",is="#7a7c75",qc="#517789",Js="#d8ded9";function Tr(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=Math.sign(t),c=r*l/a,h=-o*l/a;return{a:e,b:s,length:a,nx:c,nz:h,point(f,u=0){return[e[0]+o*f/a+c*u,e[1]+r*f/a+h*u]}}})}function ln(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function Be(i,t,e,n,s,o,r,a=.045){i.wall(t.point(e,a),t.point(n,a),s,o,r)}function Ru(i,t,e,n,{spacing:s,fraction:o,sill:r,top:a,glass:l}){const c=Math.max(1,Math.round(t.length/s)),h=t.length/c;for(let f=0;f<n;f++){const u=e+f*2.7;for(let d=0;d<c;d++){const m=(d+.5)*h,_=h*o/2;Be(i,t,m-_-.08,m+_+.08,u+r-.08,u+a+.08,vn),Be(i,t,m-_,m+_,u+r,u+a,l,.065),Be(i,t,m-.026,m+.026,u+r,u+a,vn,.083)}}}function Kl(i,[t,e],n,s,o){const r=a=>Array.from({length:10},(l,c)=>{const h=c*Math.PI/5;return[t+o*a*Math.cos(h),e+o*a*Math.sin(h)]});i.shell(r(1.27),n,n+.13,vn),i.shell(r(1),n+.13,s-.2,vn,null),i.shell(r(1.21),s-.2,s,vn)}function Ev(i,t,e){const n=Tr(t).filter(w=>w.length>.1),s=Ue(t)[1],o=n.filter(({a:w,b:A,length:P,nz:L})=>P>27&&L<-.8&&(w[1]+A[1])/2<s-5).sort((w,A)=>Math.min(w.a[0],w.b[0])-Math.min(A.a[0],A.b[0])),r=o.at(-1);if(!r)return!1;const a=Se(i,"Старинная Анапа",{surfaces:{glass:[qc,"#648591","#63767a","#4b5553","#5a625c"],flatRoof:[is],stone:["#a89b85"],metal:["#484b47","#535a58"]}}),l=e(...r.point(r.length/2,.7))+.08,c=Math.min(l-.15,...t.map(w=>e(...w)-.25)),h=l+3.3,f=l+11.55,u=l+11.9;a.flat(ln(r,0,r.length,.8,7.6),l-.045,"#bbb7aa");for(let w=0;w<r.length;w+=.8)a.flat(ln(r,w,Math.min(w+.024,r.length),.8,7.6),l-.037,"#aaa99f");for(let w=1.6;w<7.6;w+=.8)a.flat(ln(r,0,r.length,w,w+.024),l-.037,"#aaa99f");a.shell(t,c,l+.26,"#a89b85",null),a.shell(t,l+.26,f,Au,null),a.shell(t,f,u,vn,is);for(const w of n){if(w.length<4.8)continue;const A=w.nz>.55;Ru(a,w,h,3,{spacing:A?3.4:3.12,fraction:A?.73:.57,sill:A?.49:.74,top:2.28,glass:A?"#648591":"#63767a"}),o.includes(w)||Ru(a,w,l+.26,1,{spacing:3.3,fraction:.58,sill:.55,top:2.62,glass:"#4b5553"})}for(const w of o){const A=w.length-.3,P=ln(w,.3,A,-.1,.95);a.shell(P,l+.35,h,"#524940",null);const L=w===r?h-.83:h,C=w===r?h+.36:h+.24;a.shell(ln(w,0,w.length,-.15,w===r?1.49:1.22),L,C,vn);const D=Math.round(w.length/2.12);for(let I=0;I<D;I++){const z=.3+I*(A-.3)/D,k=.3+(I+1)*(A-.3)/D;Be(a,w,z+.07,k-.07,l+.44,h-.1,"#5a625c",.971),Be(a,w,z+.018,z+.088,l+.44,h-.1,"#a0906d",.989)}}const d=r.length/2,m=d-6.2,_=d+6.2;Be(a,r,d-1.18,d+1.18,l+.3,h-.16,"#393f3d",1.015);for(const w of[-1.18,0,1.18])Be(a,r,d+w-.035,d+w+.035,l+.3,h-.16,"#a0906d",1.03);for(const[w,A]of[[-.83,-.76],[.29,.36]])a.shell(ln(r,0,r.length,1.49,1.55),h+w,h+A,vn);const[g,p]=r.point(d,1.505);Ge(i,{text:"СТАРИННАЯ АНАПА",position:[g,h-.58,p],size:[16,.78],outward:[r.nx,r.nz],color:"#a0803f",weight:600,fontFamily:"Georgia, serif",letterSpacing:"16px",lighting:"spot",glowColor:"#ffddad"});for(const w of[-4.95,-1.65,1.65,4.95])Kl(a,r.point(d+w,1.17),l+.16,h,.21),Kl(a,r.point(d+w,.85),h+.24,f-.08,.33);for(let w=0;w<3;w++){const A=h+.24+w*2.7;for(const P of[d-3.3,d,d+3.3]){const L=ln(r,P-1.23,P+1.23,-.03,.54);a.shell(L,A,A+.14,vn);for(const C of[.28,1.03])Be(a,r,P-1.21,P+1.21,A+C,A+C+.045,"#484b47",.55);for(let C=-5;C<=5;C++){const D=P+C*.22;Be(a,r,D,D+.036,A+.27,A+1.04,"#484b47",.55)}}}a.shell(ln(r,m,_,-.08,1.2),f-.09,u+.39,vn);const v=(w,A)=>[w[0],A,w[1]],M=u+.39,x=u+2.24,S=v(r.point(d,1.2),x),b=v(r.point(d,-3.5),x),E=v(r.point(m,1.2),M),y=v(r.point(_,1.2),M);a.face(vn,E,y,S),a.face(is,E,S,b,v(r.point(m,-3.5),M)),a.face(is,S,y,v(r.point(_,-3.5),M),b),a.face(Au,v(r.point(m,-3.5),M),b,v(r.point(_,-3.5),M));for(const w of[-1.83,-.61,.61,1.83]){const A=d+w,P=u+.02,L=Array.from({length:10},(C,D)=>{const I=Math.PI/2+D*Math.PI/5,z=D%2?.105:.245;return v(r.point(A+Math.cos(I)*z,1.225),P+Math.sin(I)*z)});for(let C=0;C<L.length;C++)a.face("#a99973",v(r.point(A,1.225),P),L[C],L[(C+1)%L.length])}for(const w of o)for(const[A,P]of w===r?[[.25,m],[_,w.length-.25]]:[[.25,w.length-.25]]){Be(a,w,A,P,u+.39,u+.45,"#535a58",-.2);for(let L=A;L<P;L+=1.7)Be(a,w,L,L+.04,u,u+.45,"#535a58",-.2)}return a.finish(),!0}function Jl(i,t,e,n,s,o=!1){for(const r of Tr(t))if(!(r.length<.35||o&&r.nz>.25))for(let a=0;a<n;a++){const l=e+a*2.62+.42,c=e+(a+1)*2.62-.31,h=Math.max(1,Math.round(r.length/1.48));for(let f=0;f<h;f++){const u=(f+.065)*r.length/h,d=(f+.935)*r.length/h;Be(i,r,u,d,l,c,qc),Be(i,r,u,d,l+(c-l)*.63,l+(c-l)*.63+.056,s,.067)}}}function Ar(i,t,e,n,s,o,r,a,l=1.35){const c=Math.max(1,Math.round((n-e)/l)),h=(n-e)/c;Be(i,t,e,n,s,o,a);for(let f=0;f<c;f++){const u=e+f*h+.045,d=u+h-.09;Be(i,t,u,d,s+.05,o-.05,r,.065),Be(i,t,u,d,o-.53,o-.48,a,.081)}}function Sd(i,t,e,n,s,o,r){for(const l of[.45,.98])Be(i,t,e,n,s+l,s+l+.055,r,o);const a=Math.max(1,Math.ceil((n-e)/1.6));for(let l=0;l<=a;l++){const c=e+(n-e)*l/a,[h,f]=t.point(c,o);i.beam([h,s,f],[h,s+1.025,f],.06,r)}}function yd(i,t,e,n,s,o,r,a){const l=(h,f,u)=>{const[d,m]=t.point(h,f);return[d,u,m]},c=Math.ceil((n-e)/.69);for(let h=0;h<c;h++){const f=e+h*(n-e)/c,u=e+(h+1)*(n-e)/c,d=h%2?r:a;i.face(d,l(f,0,s),l(u,0,s),l(u,o,s-.47),l(f,o,s-.47)),Be(i,t,f,u,s-.62,s-.47,d,o)}}function Tv(i,t,e,n){const s=e.length*.46,o=s-5.25,r=s+5.25,a=n+.59,l=a+2.65;i.shell(ln(e,o,r,-.08,4.55),n-.22,n,"#d7c7a9");for(let u=0;u<4;u++)i.shell(ln(e,o+u*.27,r-u*.27,0,2.42-u*.48),n+u*.1475,n+(u+1)*.1475,"#dacbad");Ar(i,e,s-2.65,s+2.65,a,l-.13,"#354f52","#dbc693",.88);for(const u of[-4.34,4.34])Kl(i,e.point(s+u,2.81),n,l,.17);const c=[[o,0],[r,0],[r,2.26],[r-.62,2.86],[r-2.17,3.26],[o+2.17,3.26],[o+.62,2.86],[o,2.26]];i.shell(c.map(([u,d])=>e.point(u,d)),l,l+.31,vn,is);const[h,f]=e.point(s,3.28);Ge(t,{text:"Капитан",position:[h,l+.6,f],size:[3.1,.56],outward:[e.nx,e.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"})}function Av(i,t,e){if(t.length!==17)return!1;const n=Se(i,"Капитан",{surfaces:{glass:[qc,"#54777f","#3f5e66"],flatRoof:[is,"#987561"],stone:["#a39881"]}}),s=t.slice(2,12),o=[t[2],...t.slice(11,16)],r=[...t.slice(0,3),...t.slice(15)],a=e.lowerWaterfront??e,l=Math.min(...t.map(x=>a(...x)))-.25,c=Math.min(...s.map(x=>a(...x)))+.12,[h,f]=Tr(o).slice(1,3),u=Tr(r).at(-1),d=e(...u.point(u.length*.46,4.55)),m=e(...f.point(f.length/2,2)),_=m+2.89;n.shell(t,l,c+.27,"#a39881",null),n.shell(o,c+.27,_,Js,null),n.shell(o.map(x=>gt(Ue(o),x,1.032)),_,_+.28,Js,"#987561"),Jl(n,o,c+.1,2,Js),Ar(n,h,.38,h.length-.38,c+5.48,_-.12,"#54777f","#cedad5",1.67),Be(n,h,.38,h.length-.38,m-.06,m+.05,Js,.083);const g=ln(h,.3,h.length-.3,-.07,1.03);n.shell(g,c+2.68,c+2.84,"#c3bfb4"),Sd(n,h,.38,h.length-.38,c+2.84,.97,"#afb5b0"),yd(n,h,.35,h.length-.35,c+5.36,1.24,"#b6a481","#d5c8a5"),Ar(n,f,1.03,f.length-.6,m+.14,_-.12,"#3f5e66",Js),n.shell(ln(f,.48,f.length-.12,0,1.26),_-.1,_+.32,vn);const[p,v]=f.point(f.length*.57,1.28);Ge(i,{text:"Кафе Капитан",position:[p,_+.18,v],size:[5.2,.57],outward:[f.nx,f.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"}),n.shell(s,c+.27,c+7.52,Js,null);const M=s.map(x=>gt(Ue(s),x,1.046));return n.shell(M,c+7.52,c+7.85,vn,is),Jl(n,s,c-.03,3,vn,!0),n.shell(r,c+.27,d+3.62,"#d9be8b",is),Tv(n,i,u,d),n.finish(),!0}const Rv={170958817:{number:1,roof:"#8a8f8d",wall:"#d5cbb6",frame:"#c8d4d2"},223948923:{number:5,roof:"#aca99d",wall:"#658195",frame:"#deddd3"},223948927:{number:7,roof:"#aaa492",wall:"#bcb29a",frame:"#dfd8bf"}};function Cv(i,t,e,{number:n,roof:s,wall:o,frame:r}){const a=Se(i,`Набережная, ${n}`,{surfaces:{glass:[qc,"#526870","#6c858b"],flatRoof:[s,"#c4c7c2"],stone:["#a99e88"]}}),l=e.lowerWaterfront??e,c=Tr(t).filter(_=>_.nz<-.52),h=c.map(_=>l(..._.point(_.length/2))),f=t.map(_=>l(..._)),u=Math.min(...f)-.25,d=Math.min(...h.length?h:f)+.11,m=d+5.51;if(a.shell(t,u,d+.27,"#a99e88",null),a.shell(t,d+.27,m,o,null),a.shell(t.map(_=>gt(Ue(t),_,1.02)),m,m+.24,r,s),n===1)Jl(a,t,d+.15,2,r,!0);else for(const _ of c){const g=_.length-.36;if(Ar(a,_,.36,g,d+.42,d+2.71,"#526870",r),Ar(a,_,.36,g,d+3.03,m-.23,"#6c858b",r,1.47),n===5){const p=ln(_,.15,_.length-.15,0,1.57);a.shell(p,d-.12,d+.41,"#aea69c");const v=ln(_,.05,_.length-.05,0,1.68);a.shell(v,d+2.75,d+3.07,"#276583","#c4c7c2"),Be(a,_,.19,_.length*.47,d+2.77,d+3.06,r,1.7);const M=_.length*.22;Sd(a,_,M+2.3,g,d+.41,1.48,"#c2c7c3"),a.shell(ln(_,.15,M+2.28,1.54,2.01),d-.12,d+.23,"#a49e96");for(const x of[.33,_.length*.51,g])a.shell(ln(_,x-.12,x+.12,1.32,1.56),d+.41,d+2.75,o)}else Be(a,_,.36,g,d+3.12,d+3.21,"#bc9d58",.085),yd(a,_,.26,_.length-.26,m-.05,1.42,"#c8a851","#f0e6ca")}return a.finish(),!0}function Pv(i,t,e){if(t.id==="r11979734-0")return Ev(i,t.rings[0],e);if(t.id==="156055903")return Av(i,t.rings[0],e);const n=Rv[t.id];return n?Cv(i,t.rings[0],e,n):!1}function Lv(i,t){const[e,n]=Ui[1],s=t(e,n),o=Math.cos(Ni),r=Math.sin(Ni),a=[r,-o],l=(x,S,b)=>[e+x*o+b*r,s+S,n+x*r-b*o];if(Ge(i,{text:"ГОРГИППИЯ",position:l(2.55,1.68,.345),size:[.39,.58],outward:a,color:"#3c3021",background:"#b99b62",weight:600,lighting:"unlit"}),typeof document>"u")return;const c=3.56,h=.65,f=document.createElement("canvas");f.width=768,f.height=Math.round(f.width*h/c);const u=f.getContext("2d");if(!u)return;const d="АРХЕОЛОГИЧЕСКИЙ МУЗЕЙ";u.font="600 39px system-ui, sans-serif";const m=Array.from(d,x=>u.measureText(x).width),_=f.width*.92,g=(_-m.reduce((x,S)=>x+S,0))/(d.length-1);let p=(f.width-_)/2;u.fillStyle="#292726",u.textAlign="center",u.textBaseline="middle";for(let x=0;x<d.length;x++){const S=p+m[x]/2,b=(S-f.width/2)/f.width;u.fillText(d[x],S,42+278*b**2),p+=m[x]+g}const v=new Nc(f);v.colorSpace=je,v.anisotropy=4;const M=new he(new oi(c,h),new se({map:v,alphaTest:.35}));M.name=d,M.position.set(...l(0,3.31,.066)),M.rotation.y=Math.atan2(...a),i.add(M)}const{Color:xn,Vector2:Dv,Vector3:G0}=B0,Pe=24,bd=4,Iv=2;function wd(i,t,e){return i.refinesStairs(t,e,Pe)?Iv:i.refines(t,e,Pe)?bd:Pe}const Li={land:"#c6b899",beach:"#e0c893",park:"#8da371",water:"#6eabb5",pier:"#c5bdae",plaza:"#d0c1aa",ruins:"#aea27e",road:"#989891",path:"#d9ccb6",tree:"#7b9367",shingle:"#aaa495",rockLight:"#a59172",riprap:"#898a78",quay:"#aca99e"},Cu=["#c6b9a5","#b0aca1","#b8a08b","#ddd3ba","#9a9c93"],Uv=["#e9deca","#ded6c7","#d6c5ad","#e4d8bf","#d8d6c7"],V0=new Set(["footway","pedestrian","steps","cycleway","path","track"]),Pu=new Set(["223948926"]),Nv=[vx,Mx,ev,lv,mv,wv,Pv];function ui(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function ur(i){const t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function Zo(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function Fv(i,t,e=ld(i)){const{bounds:[n,s,o,r],columns:a,rows:l,heights:c}=t,[h,f]=i.origin,[u,d]=i.scale;function m(b,E){const y=ce.clamp((h+b/u-n)/(o-n)*(a-1),0,a-1),w=ce.clamp((r-f+E/d)/(r-s)*(l-1),0,l-1),A=Math.min(Math.floor(y),a-2),P=Math.min(Math.floor(w),l-2),L=P*a+A,C=ce.lerp(c[L],c[L+1],y-A),D=ce.lerp(c[L+a],c[L+a+1],y-A);return Math.max(.16,ce.lerp(C,D,w-P))}function _(b,E){const y=new Map,w=(A,P)=>{const L=`${A}:${P}`;return y.has(L)||y.set(L,b(A,P)),y.get(L)};return(A,P)=>{const L=E(A,P),C=Math.floor(A/L)*L,D=Math.floor(P/L)*L,I=(A-C)/L,z=(P-D)/L,k=w(C+L,D),q=w(C,D+L);return I+z<=1?w(C,D)*(1-I-z)+k*I+q*z:w(C+L,D+L)*(I+z-1)+k*(1-z)+q*(1-I)}}const g=N_(i),p=_((b,E)=>g(b,E,m(b,E)),()=>Pe),v=_((b,E)=>e.height(b,E,p),(b,E)=>wd(e,Math.floor(b/Pe)*Pe,Math.floor(E/Pe)*Pe)),M=(b,E)=>e.waterfront.nearEdge(b,E)||e.nearTransition(b,E)?e.height(b,E,p):v(b,E);return Object.assign(M,{plain:p,faceHeight:(b,E,y)=>y?e.height(b,E,p,y):M(b,E),lowerWaterfront:(b,E)=>e.waterfront.lowerGrade(b,E,M(b,E))})}function Dn(i=!1){const t=[],e=[],n=i?[]:null;return{triangle(s,o,r,a,l){t.push(...s,...o,...r),n&&n.push(...l);for(const c of[s,o,r]){const h=typeof a=="function"?a(...c):a;e.push(h.r,h.g,h.b)}},mesh(s,o=hn){const r=new Le;r.setAttribute("position",new oe(t,3)),r.setAttribute("color",new oe(e,3)),n&&r.setAttribute("facadeGrid",new oe(n,3)),r.computeVertexNormals();const a=new he(r,new se({vertexColors:!0,side:o}));return a.name=s,a.receiveShadow=!0,a}}}function _n(i,t,e=1){return wo(i.material,{surface:t,strength:e}),i}function Ov(i){const t=i.material;return t.customProgramCacheKey=()=>"district-facade-grid",t.onBeforeCompile=e=>{e.uniforms.facadeEnabled=Xc.cartoonEnabled,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        ${H0.replace("cartoonDistrict","windowGridDistrict")}
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
      `)},_n(i,"plaster")}function Ed(i){const t=i.map(s=>s.map(([o,r])=>new Dv(o,r))),e=Ii.triangulateShape(t[0],t.slice(1)),n=t.flat().map(({x:s,y:o})=>[s,o]);return e.map(s=>s.map(o=>n[o]))}function Ql(i,t,e,n){const[s,o,r]=t,a=(o[0]-s[0])*(r[1]-s[1])-(o[1]-s[1])*(r[0]-s[0]);if(Math.abs(a)<1e-4)return;const l=([c,h])=>[c,e(c,h),h];i.triangle(l(s),l(a>0?r:o),l(a>0?o:r),n)}function Di(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l])}}return e}function Bv(i,t,e,n){let s=Di(i,o=>o[0]-t);return s=Di(s,o=>t+n-o[0]),s=Di(s,o=>o[1]-e),Di(s,o=>e+n-o[1])}function Td(i,t,e,n,s,o=!1){const[r,a,l,c]=ur(t);for(let h=Math.floor(r/Pe)*Pe;h<l;h+=Pe){let f=Di(t,u=>u[0]-h);if(f=Di(f,u=>h+Pe-u[0]),!(f.length<3))for(let u=Math.floor(a/Pe)*Pe;u<c;u+=Pe){let d=Di(f,_=>_[1]-u);if(d=Di(d,_=>u+Pe-_[1]),d.length<3)continue;const m=wd(s,h,u);for(let _=h;_<h+Pe;_+=m)for(let g=u;g<u+Pe;g+=m){const p=m===Pe?d:Bv(d,_,g,m);if(!(p.length<3))for(const v of[1,-1]){const M=Di(p,([S,b])=>v*(_+g+m-S-b));if(M.length<3)continue;const x=o?s.waterfront.split(M):null;if(!x){for(let S=2;S<M.length;S++)Ql(i,[M[0],M[S-1],M[S]],e,n);continue}for(const{ring:S,side:b}of x){const E=(y,w)=>e(y,w,b);for(let y=2;y<S.length;y++)Ql(i,[S[0],S[y-1],S[y]],E,n)}}}}}}function Qs(i,t,e,n,s,o=!1){for(const r of Ed(t))Td(i,r,e,n,s,o)}function Lu(i,t=[.36,.28]){const[e,n]=t;return i.material.customProgramCacheKey=()=>`promenade-${e}-${n}`,i.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      `)},i}function Ad(i,t){return i.kind==="pier"||i.bridge?.85:t.waterfront.upperWidths[i.id]||t.waterfront.lowerWidths[i.id]||i.level?.15:V0.has(i.kind)?.35:.31}function zv(i,t,e,n){const{points:s,kind:o,id:r}=t,a=n.promenadeWidths.get(r)??t.width,l=n.stairHeight(t,e.plain);if(l){kv(i,s,a,l);return}const c=V0.has(o),h=n.waterfront.upperWidths[r]||t.level==="upper",f=n.waterfront.lowerWidths[r]||t.level==="lower",u=new xn(h?"#cec7b8":f?"#b8b3a7":n.promenadeWidths.has(r)?"#c5c3b8":o==="pier"?Li.pier:c?Li.path:Li.road),d=Ad(t,n),m=(_,g,p)=>(n.rampHeight(t,_,g)??e.faceHeight(_,g,p))+d;for(let _=1;_<s.length;_++){const[g,p]=s[_-1],[v,M]=s[_],x=v-g,S=M-p,b=Math.hypot(x,S);if(b<.05)continue;const E=-S*a/(2*b),y=x*a/(2*b);Td(i,[[g+E,p+y],[v+E,M+y],[v-E,M-y],[g-E,p-y]],m,u,n,!0)}}function Rd(i,t,{from:e,to:n,run:s}){const o=i.slice(1).map(([l,c],h)=>Math.hypot(l-i[h][0],c-i[h][1])),r=o.reduce((l,c)=>l+c,0);let a=0;return o.flatMap((l,c)=>{if(l<.04)return[];const[h,f]=i[c],u=i[c+1][0]-h,d=i[c+1][1]-f,m=a/r;a+=l;const _=a/r,g=[m,...s.filter(v=>v>m&&v<_),_],p=v=>ce.lerp(e,n,ce.clamp((v-s[0])/(s[1]-s[0]),0,1));return g.slice(1).map((v,M)=>{const x=g[M],S=(x-m)/(_-m),b=(v-x)/(_-m),E=p(x),y=p(v),w=Math.max(1,Math.round(Math.abs(y-E)/.17)),A=P=>ce.lerp(E,y,P/w)+.15;return{x:h+u*S,z:f+d*S,dx:u*b,dz:d*b,length:l*b,width:t,count:w,height:A}})})}function kv(i,t,e,n){const s=new xn("#c5bdb0"),o=new xn("#a69d90");for(const{x:r,z:a,dx:l,dz:c,length:h,count:f,height:u}of Rd(t,e,n)){const d=-c*e/(2*h),m=l*e/(2*h),_=(g,p,v)=>[r+l*g+d*v,p,a+c*g+m*v];for(let g=0;g<f;g++){const p=g/f,v=(g+1)/f,M=u(g),x=u(g+1),S=_(p,M,1),b=_(p,M,-1),E=_(v,M,-1),y=_(v,M,1),w=_(v,x,-1),A=_(v,x,1);i.triangle(S,b,E,s),i.triangle(S,E,y,s),i.triangle(y,E,w,o),i.triangle(y,w,A,o)}}}function Hv(i,t){const e=i.surveyedStairs.flatMap(n=>Rd(n.points,n.width,i.stairHeight(n,t.plain)));return(n,s)=>{if(i.nearTransition(n,s)){for(const o of e){const{x:r,z:a,dx:l,dz:c,length:h,width:f,count:u,height:d}=o,m=((n-r)*l+(s-a)*c)/(h*h),_=((s-a)*l-(n-r)*c)/h;if(m>=0&&m<=1&&Math.abs(_)<f/2)return d(Math.min(u-1,Math.floor(m*u)))}for(const o of i.ramps)if(Zo(n,s,[o.bounds[0]-o.width,o.bounds[1]-o.width,o.bounds[2]+o.width,o.bounds[3]+o.width])&&$e(n,s,o.points).distance<o.width/2)return i.rampHeight(o,n,s)+Ad(o,i)}}}function Gv(i,t,e,n){const s=t.buildings.find(c=>c.id==="170958806");if(!e||!s)return;const[o]=ur(s.rings[0]),r=[];for(let c=1;c<e.length;c++){const[h,f]=e[c-1],[u,d]=e[c],m=u-h,_=d-f,g=Math.hypot(m,_);for(let p=.8;p<g;p+=1.42){const v=h+m*p/g,M=f+_*p/g;if(!(v<o-122||v>-161.9))for(const x of[.9,2.15,3.4]){const S=Math.sin(p*6.13+c*13.7+x)*.35,b=v+_*(x+S)/g,E=M-m*(x+S)/g,y=n(b,E);y<2.55&&t.land.some(w=>ui(b,E,w))&&r.push([b,y,E,S])}}}const a=new zi(new Es(1,0),new se({color:"#ada79a",flatShading:!0}),r.length);a.name="Каменная отсыпка у нижней набережной";const l=new Ee;r.forEach(([c,h,f,u],d)=>{l.position.set(c,h-.05,f),l.scale.set(.72+u*.5,.32+u*.31,.53-u*.3),l.rotation.set(u,d*1.71,u*1.3),l.updateMatrix(),a.setMatrixAt(d,l.matrix),a.setColorAt(d,new xn().setScalar(.8+d%7*.055))}),a.receiveShadow=!0,i.add(_n(a,"stone"))}function Vv(i,t,e){const n=i.mesh("Terrain"),{position:s,normal:o}=n.geometry.attributes,r=new G0,a=3.2;for(let l=0;l<s.count;l++){if(o.getY(l)<.05)continue;const c=s.getX(l),h=s.getZ(l);if(e.waterfront.nearEdge(c,h))continue;const f=Math.floor(c/Pe)*Pe,u=Math.floor(h/Pe)*Pe;e.refines(f,u,Pe)&&(r.set(t(c-a,h)-t(c+a,h),2*a,t(c,h-a)-t(c,h+a)).normalize(),o.setXYZ(l,r.x,r.y,r.z))}return o.needsUpdate=!0,n}function Du(i,t,e,n=null){const{rings:s,height:o,id:r}=t,a=Number(String(r).match(/\d+$/)?.[0]??0)%Cu.length,l=new xn(Cu[a]),c=new xn(Uv[a]),h=Math.max(...s[0].map(([m,_])=>e(m,_))),f=h+o,u=Math.max(1,Math.round(o/3.15)),d=o/u;for(const m of Ed(s))Ql(i,m,()=>f,l);for(const[m,_]of s.entries()){const p=_.reduce((v,[M,x],S)=>{const[b,E]=_[(S+1)%_.length];return v+M*E-b*x},0)>0==m>0?_:_.slice().reverse();for(let v=0;v<p.length;v++){const[M,x]=p[v],[S,b]=p[(v+1)%p.length],E=[M,e(M,x)-.2,x],y=[S,e(S,b)-.2,b],w=[S,f,b],A=[M,f,x];if(n){const P=Math.hypot(S-M,b-x),L=Math.max(1,Math.round(P/3.2)),C=P>2.2&&o>2.65?1:0,D=[0,(E[1]-h)/d,C],I=[L,(y[1]-h)/d,C],z=[L,u,C],k=[0,u,C];n.triangle(E,y,w,c,[...D,...I,...z]),n.triangle(E,w,A,c,[...D,...z,...k])}else i.triangle(E,y,w,c),i.triangle(E,w,A,c)}}}function Wv(i,t,e){if(!t.length)return;const n=new zi(new Fn(.15,.24,2.4,5),new se({color:"#776952"}),t.length),s=new zi(new Es(1,1),new se({color:Li.tree,flatShading:!0}),t.length),o=new Ee;t.forEach(([r,a],l)=>{const c=1.5+l*17%13*.11,h=e(r,a);o.position.set(r,h+1.2,a),o.scale.set(1,1,1),o.updateMatrix(),n.setMatrixAt(l,o.matrix),o.position.y=h+2.6+c*.35,o.scale.set(c,c*1.23,c),o.rotation.y=l*1.4,o.updateMatrix(),s.setMatrixAt(l,o.matrix),s.setColorAt(l,new xn().setScalar(.77+l*11%7*.047))}),s.castShadow=!0,s.receiveShadow=!0,i.add(_n(n,"wood",.75),_n(s,"foliage",1))}function Xv(i,t){const[e,n,s,o]=t,r={time:{value:0},evening:{value:0},sun:{value:new G0(-.6,.55,-.5).normalize()},haze:{value:new xn("#b3d5d5")},cartoonEnabled:Xc.cartoonEnabled,...g_()},a=new Rn({uniforms:r,vertexShader:`
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
      ${H0}
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
    `}),l=Math.max(s-e,o-n)*4,c=new he(new oi(l,l),a);return c.rotation.x=-Math.PI/2,c.position.set((e+s)/2,-.18,(n+o)/2),i.add(c),r}function qv(i,t,e){const n=new sd({canvas:i,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1;const s=new M0;s.fog=new Dc("#b3d5d5",900,3200),s.background=new xn("#b3d5d5");const o=ld(t),r=Fv(t,e,o),a=Xv(s,t.bounds),l=Dn(),c=new xn(Li.land),h=Object.fromEntries(["shingle","rockLight","riprap","quay"].map(F=>[F,new xn(Li[F])])),f=new xn;function u(F,G,tt){const rt=o.tone(F,tt,G);if(!rt)return c;const[_t,Et]=rt;return f.copy(c).lerp(h[_t],Et)}const d=t.areas.some(({id:F})=>F===gu),m=d?Zx(r):null,_=ur(vs),g=(F,G)=>d&&Zo(F,G,_)&&ui(F,G,vs);for(const F of t.land){const G=d&&vs.every(([tt,rt])=>ui(tt,rt,F))?[vs]:[];Qs(l,[F,...G],r.faceHeight,u,o,!0);for(let tt=0;tt<F.length;tt++){const[rt,_t]=F[tt],[Et,Tt]=F[(tt+1)%F.length],Ot=o.refines(rt,_t,Pe)?bd:12,B=Math.max(1,Math.ceil(Math.hypot(Et-rt,Tt-_t)/Ot));for(let Kt=0;Kt<B;Kt++){const qt=[rt+(Et-rt)*Kt/B,_t+(Tt-_t)*Kt/B],U=[rt+(Et-rt)*(Kt+1)/B,_t+(Tt-_t)*(Kt+1)/B],T=[qt[0],r(...qt),qt[1]],$=[U[0],r(...U),U[1]],K=[qt[0],-.4,qt[1]],ct=[U[0],-.4,U[1]];l.triangle(T,K,$,u),l.triangle($,K,ct,u)}}}const p=Dn(),v=Dn(),M=Dn(),x={beach:.13,park:.14,plaza:.2,ruins:.22,water:.24,pier:.7};for(const F of t.areas){if(F.id===gu)continue;const G=F.kind==="beach"&&(F.id==="368318892"||["pebblestone","gravel"].includes(F.surface)),tt=new xn(G?Li.shingle:Li[F.kind]??Li.park),rt=(Et,Tt,Ot)=>r.faceHeight(Et,Tt,Ot)+(x[F.kind]??.14),_t=F.kind==="pier"||F.kind==="plaza"?v:F.kind==="park"?M:p;Qs(_t,F.rings,rt,tt,o,!0)}const S=Dn(),b=Dn(),E=Dn(),y=Dn(),w=new xn("#c7c1b7"),A=new xn("#b4ad9e"),P=[];for(const F of o.waterfront.sections){for(const G of F.upperDecks)P.push(G),Qs(y,[G],(rt,_t)=>r.faceHeight(rt,_t,{section:F,upper:!0})+.12,w,o);for(const G of F.lowerDecks)Qs(E,[G],(rt,_t)=>r.faceHeight(rt,_t,{section:F,upper:!1})+.12,A,o)}for(const F of o.allRoads){const G=o.waterfront.upperWidths[F.id]&&!(F.id in o.waterfront.rampLevels),tt=o.waterfront.lowerWidths[F.id],rt=G?y:tt?E:V0.has(F.kind)||F.kind==="pier"?b:S;zv(rt,F,r,o)}const L=Dn(),C=Dn(),D=Dn(!0),I=[Go.west,Go.north,Go.east,Go.south];for(const F of t.buildings)if(!Pu.has(F.id)){if(F.id==="125813145")dx(s,F,r);else if(!Nv.some(G=>G(s,F,r))){const[G,tt,rt,_t]=ur(F.rings[0]);Zo((G+rt)/2,(tt+_t)/2,I)?Du(C,F,r,D):Du(L,F,r)}}const z=L.mesh("OSM building footprints",ei);z.castShadow=!0;const k=Ov(D.mesh("Фасады квартала",ei)),q=_n(C.mesh("Крыши квартала",ei),"flatRoof");if(k.castShadow=q.castShadow=!0,s.add(_n(Vv(l,r,o),"ground"),_n(p.mesh("OSM surfaces"),"ground"),_n(v.mesh("Площади и причалы"),"paving"),_n(M.mesh("Скверы"),"foliage",.65),_n(Lu(E.mesh("Плитка нижней набережной"),[.24,.22]),"laidPaving"),_n(Lu(y.mesh("Плитка верхней набережной")),"laidPaving"),_n(b.mesh("Пешеходные дорожки"),"paving",.8),_n(S.mesh("OSM streets"),"road",.8),z,q,k),d){const F=Dn();Ux(s,r,(tt,rt,_t)=>Qs(F,tt,rt,_t,o)),s.add(_n(F.mesh("Раскоп Горгиппии · уровни грунта"),"ground",.88));const G=Dn();m.render(s,(tt,rt,_t)=>Qs(G,tt,rt,_t,o)),s.add(_n(G.mesh("Горгиппия · покрытия дорожек"),"paving",.7))}Wv(s,t.trees,r),px(s,t,r),iv(s,r),Lv(s,r),V_(s,r),nx(s,r),ax(s,r),Gv(s,t,o.gorgWater,r),B_(s,o,r),T_(s,r),C_(s,r);const Y=y_(s,r),J=new I0("#eefbff","#b0a48b",1.65),j=new F0("#fff5dd",2.25),[St,vt,kt,mt]=t.bounds,pt=Math.max(kt-St,mt-vt)*.62;j.target.position.set((St+kt)/2,0,(vt+mt)/2),j.castShadow=!0,j.shadow.mapSize.set(2048,2048),Object.assign(j.shadow.camera,{left:-pt,right:pt,top:pt,bottom:-pt,near:1,far:5300}),j.shadow.camera.updateProjectionMatrix(),j.shadow.normalBias=1,j.shadow.bias=-15e-5,s.add(J,j,j.target);function V(F){const G=F==="sunset";Y.setEnabled(G),a.evening.value=G?1:0;const tt=G?"#8993b4":"#b3d5d5";s.background.set(tt),s.fog.color.set(tt),a.haze.value.set(tt),J.color.set(G?"#becdf9":"#eefbff"),J.groundColor.set(G?"#736b86":"#b0a48b"),J.intensity=G?.73:1.65,j.color.set(G?"#ffc18c":"#fff5dd"),j.intensity=G?.81:2.25;const rt=G?[-.95,.23,-.44]:[-.6,1,-.5];j.position.copy(j.target.position).add(new G0(...rt).multiplyScalar(1800)),a.sun.value.set(...rt).normalize(),n.shadowMap.needsUpdate=!0}V("day");const Q=new Map,dt=60,wt=(F,G)=>`${F}:${G}`;for(const{id:F,rings:G}of t.buildings){if(Pu.has(F))continue;const[tt,rt,_t,Et]=ur(G[0]);for(let Tt=Math.floor(tt/dt);Tt<=Math.floor(_t/dt);Tt++)for(let Ot=Math.floor(rt/dt);Ot<=Math.floor(Et/dt);Ot++){const B=wt(Tt,Ot);Q.has(B)||Q.set(B,[]),Q.get(B).push({id:F,rings:G,bounds:[tt,rt,_t,Et]})}}const H=(F,G)=>t.land.some(tt=>ui(F,G,tt)),at=t.areas.filter(F=>F.kind==="pier"),ht=Hv(o,r);function Z(F,G){if(!Zo(F,G,t.bounds)||!H(F,G)&&!at.some(({rings:_t})=>ui(F,G,_t[0]))||ui(F,G,z_)||ui(F,G,ud))return null;const tt=m?.walkHeight(F,G,g(F,G));return tt===null||(Q.get(wt(Math.floor(F/dt),Math.floor(G/dt)))??[]).some(({id:_t,rings:Et,bounds:Tt})=>!Zo(F,G,Tt)||!ui(F,G,Et[0])||o.waterfront.deckRoofs.has(_t)&&P.some(Ot=>ui(F,G,Ot))?!1:!Et.slice(1).some(Ot=>ui(F,G,Ot)))?null:tt??ht(F,G)??r(F,G)}return{renderer:n,scene:s,terrain:r,light:V,walkHeight:Z,setCartoon:p_,walkable:(F,G)=>Z(F,G)!==null,render(F,G){a.time.value=G,Y.update(F),n.render(s,F)}}}const Yv=new Set(["motorway","trunk","primary","secondary","tertiary","unclassified","residential","living_street","service"]);function Zv({kind:i,access:t}){return i!=="steps"&&t?.car!==!1&&(Yv.has(i)||t?.car===!0)}function jl(i,t,e){return(t-i.x)*i.ux+(e-i.z)*i.uz}function Iu(i,t,e){const n=Math.min(i.length,Math.max(0,jl(i,t,e)));return(t-i.x-n*i.ux)**2+(e-i.z-n*i.uz)**2}function $v(i,t,e){return i.road.barriers?.some(n=>{if(n.car!==!1)return!1;const[s,o]=n.position;return Math.hypot(t-s,e-o)<i.radius+.7&&Math.abs((t-s)*i.ux+(e-o)*i.uz)<.65})}function Kv(i){const t=new Map,e=[],n=32,s=h=>Math.floor(h/n),o=(h,f)=>`${h}:${f}`;for(const h of i){const f=Zv(h),u=h.access?.bicycle===!1,d=h.kind==="steps"||u||h.barriers?.length;if(!f&&!d)continue;const m=h.width/2;for(let _=1;_<h.points.length;_++){const[g,p]=h.points[_-1],[v,M]=h.points[_],x=v-g,S=M-p,b=Math.hypot(x,S);if(b<.01)continue;const E={x:g,z:p,ux:x/b,uz:S/b,length:b,radius:m,road:h,car:f,bikeCheck:d};f&&e.push(E);for(let y=s(Math.min(g,v)-m);y<=s(Math.max(g,v)+m);y++)for(let w=s(Math.min(p,M)-m);w<=s(Math.max(p,M)+m);w++){const A=o(y,w);t.has(A)||t.set(A,[]),t.get(A).push(E)}}}const r=(h,f)=>t.get(o(s(h),s(f)))??[];function a(h,f){let u=null,d=1/0;for(const m of r(h,f)){if(!m.car)continue;const _=jl(m,h,f);if(_<-.005||_>m.length+.005)continue;const g=Iu(m,h,f),p=Math.max(.4,m.radius-.45);g>p**2||g>=d||$v(m,h,f)||(d=g,u=m.road)}return u}function l(h,f){let u=!1;for(const d of r(h,f)){if(!d.bikeCheck||Iu(d,h,f)>d.radius**2)continue;const{road:m}=d;if(m.access?.bicycle===!1){if(m.access?.foot===!1)return"blocked";u=!0}m.kind==="steps"&&(u=!0);for(const _ of m.barriers??[])if(!(_.bicycle!==!1||Math.hypot(h-_.position[0],f-_.position[1])>.65)){if(_.foot===!1)return"blocked";u=!0}}return u?"push":"ride"}function c([h,f],u){let d=null,m=1/0;for(const _ of e){const g=jl(_,h,f);for(const p of[0,-4,4,-12,12]){const v=Math.min(_.length,Math.max(0,g+p)),M=_.x+_.ux*v,x=_.z+_.uz*v,S=(M-h)**2+(x-f)**2;if(S>=m)continue;const b=u(M,x);b!==null&&(m=S,d={x:M,z:x,height:b,heading:Math.atan2(_.ux,-_.uz)})}}return d}return{carAt:a,bicycleAt:l,nearestCarStart:c}}const{MathUtils:Jv,Vector3:vc}=B0,Qv=new vc(0,1,0);function bn(i){return new se({color:i,flatShading:!0})}function Fe(i,t,e,n=[0,0,0]){const s=new he(t,e);return s.position.set(...n),i.add(s),s}function In(i,t,e,n,s){const o=new vc(...t),r=new vc(...e),a=r.clone().sub(o),l=Fe(i,new Fn(n,n,a.length(),10),s);return l.position.copy(o).lerp(r,.5),l.quaternion.setFromUnitVectors(Qv,a.normalize()),l}function ao(i,t,e,n){const s=new Bc(t.map(o=>new vc(...o)));return Fe(i,new Lr(s,14,e,8),n)}function Uu(i,t,e){const n=t.flat(2),s=t[0].length,o=[];for(let a=0;a<t.length-1;a++)for(let l=0;l<s-1;l++){const c=a*s+l;o.push(c,c+1,c+s,c+1,c+s+1,c+s)}const r=new Le;return r.setAttribute("position",new oe(n,3)),r.setIndex(o),r.computeVertexNormals(),Fe(i,r,e)}function jv(i){const t=bn("#4ca9ab"),e=bn("#283a3e"),n=bn("#18292b"),s=bn("#acbfc0"),o=bn("#e5af59"),r=new pe,a=new pe;i.add(r),r.add(a),In(r,[0,-.3,-.27],[0,-.78,.4],.073,t),In(a,[0,0,.09],[0,-.3,-.25],.049,s),In(a,[0,-.31,-.25],[0,-.43,-.36],.066,t);for(const h of[-1,1]){const f=u=>u*h;In(a,[f(.066),-.34,-.27],[f(.061),-.82,-.57],.038,t),ao(a,[[0,0,.09],[f(.24),.012,.11],[f(.43),.075,.18],[f(.75),.09,.25]],.033,s),In(a,[f(.52),.079,.2],[f(.78),.092,.26],.052,e);for(const u of[.55,.61,.67,.73,.77]){const d=.205+(u-.53)*.21;In(a,[f(u),.081,d],[f(u+.015),.082,d+.004],.055,n)}ao(a,[[f(.48),.055,.16],[f(.54),.038,.04],[f(.69),.038,.1]],.018,s),ao(a,[[f(.48),.045,.15],[f(.35),-.18,-.08],[f(.07),-.4,-.28]],.009,n)}const l=Fe(a,new xi(.35,.042,8,32),n,[0,-.82,-.57]);l.rotation.y=Math.PI/2;const c=Fe(a,new xi(.3,.014,6,32),s,[0,-.82,-.57]);return c.rotation.y=Math.PI/2,In(a,[-.075,-.82,-.57],[.075,-.82,-.57],.036,s),Fe(a,new Fn(.062,.067,.045,16),o,[-.37,.122,.14]),In(a,[-.38,.115,.16],[-.45,.105,.2],.012,o),r.position.set(0,-.48,-1.5),{group:r,front:a}}function tM(i){const t=bn("#eee1ba"),e=bn("#9b916c"),n=bn("#303536"),s=bn("#b7b8ab"),o=bn("#202526"),r=bn("#e7dbc2"),a=bn("#f58b63"),l=new pe,c=new pe,h=new pe;i.add(l),l.add(c,h),Uu(l,[[[-1.52,-.8,-1.12],[-.84,-.73,-1.12],[-.1,-.67,-1.12],[.66,-.68,-1.12],[1.38,-.74,-1.12],[1.98,-.82,-1.12]],[[-1.36,-.8,-2.25],[-.72,-.75,-2.25],[-.06,-.69,-2.25],[.65,-.7,-2.25],[1.32,-.76,-2.25],[1.85,-.83,-2.25]],[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[-.04,-.83,-3.28],[.65,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]]],t),ao(l,[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[.3,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]],.014,e);for(const f of[-.77,1.3])ao(l,[[f,-.75,-1.42],[f,-.737,-2.14],[f*.93,-.844,-3.05]],.009,e);for(const f of[-.64,.38])In(l,[f,-.65,-1.69],[f+.48,-.65,-1.76],.014,n),In(l,[f+.23,-.65,-1.72],[f+.47,-.7,-1.5],.01,s);Uu(l,[[[-1.9,-.89,-.67],[-.77,-.83,-.67],[.08,-.8,-.67],[.91,-.84,-.67],[2.05,-.89,-.67]],[[-1.92,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],[[-1.93,-.77,-1.56],[-.74,-.7,-1.56],[.07,-.67,-1.56],[.94,-.72,-1.56],[2.08,-.8,-1.56]]],n),ao(l,[[-1.9,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],.018,s),Fe(l,new Ce(2.12,.14,.065),s,[.52,-.65,-1.37]),Fe(l,new Ce(.86,.24,.16),n,[-.25,-.55,-1.43]),Fe(l,new Ce(.8,.177,.019),s,[-.25,-.55,-1.337]),Fe(l,new Ce(.75,.143,.015),o,[-.25,-.55,-1.32]),Fe(l,new Ce(.44,.046,.004),r,[-.25,-.519,-1.31]);for(let f=0;f<=16;f++){const u=-.455+f*.0255,d=f%2===0?.017:.008;Fe(l,new Ce(.0035,d,.004),o,[u,-.497-d/2,-1.305])}for(const f of[-.542,.038])Fe(l,new Ce(.088,.036,.004),r,[f,-.524,-1.31]),In(l,[f-.026,-.536,-1.304],[f+.01,-.51,-1.304],.0027,a);for(let f=0;f<6;f++){const u=bn(["#b44e37","#95764c","#a44536","#548159","#a58746","#5b8798"][f]);Fe(l,new Ce(.037,.018,.004),u,[-.42+f*.066,-.579,-1.308])}for(const f of[.43,.67]){Fe(l,new Ce(.17,.105,.025),o,[f,-.645,-1.316]);for(let u=0;u<4;u++)Fe(l,new Ce(.15,.007,.01),s,[f,-.676+u*.019,-1.3])}h.position.set(-.453,-.518,-1.299),Fe(h,new Ce(.008,.035,.006),a),c.position.set(-.25,-.63,-1.1),Fe(c,new xi(.295,.023,10,44),n),Fe(c,new xi(.219,.008,6,36,Math.PI),s,[0,0,.022]).rotation.z=Math.PI;for(const f of[-1,1])In(c,[f*.061,-.018,.01],[f*.287,.01,0],.025,n),In(c,[f*.073,-.015,.035],[f*.212,.003,.023],.008,s);return Fe(c,new yo(.079,24),n,[0,0,.038]),Fe(c,new xi(.033,.004,6,20),s,[0,0,.042]),Fe(c,new Ce(.034,.024,.006),bn("#a75444"),[0,0,.044]),{group:l,wheel:c,gaugeNeedle:h}}function eM(){const i=new M0,t=new tn(58,1,.04,10),e=new I0("#f7f7e9","#9ea8af",1.4),n=new F0("#fff2d8",2);n.position.set(-2,4,2),i.add(e,n);const s=jv(i),o=tM(i);let r=0,a="";function l(c,{mode:h,aspect:f,turn:u,speed:d,time:m,delta:_,reducedMotion:g}){if(a!==h&&(r=0,a=h),s.group.visible=h==="bike",o.group.visible=h==="car",!s.group.visible&&!o.group.visible)return;t.aspect!==f&&(t.aspect=f,t.updateProjectionMatrix()),r=g?u:Jv.damp(r,u,12,_);const p=Math.min(1,f/1.22),v=.1*(1-p);s.group.visible?(s.group.scale.x=p,s.group.position.y=-.48+v,g||(s.group.position.y+=Math.sin(m*11)*Math.min(.008,Math.abs(d)*.0015)),s.front.rotation.y=-r*.28,s.front.rotation.z=-r*.045):(o.group.scale.x=p,o.group.position.y=v,o.wheel.rotation.z=-r*.74,o.gaugeNeedle.position.x=-.453+Math.min(1,Math.abs(d)*3.6/160)*.407);const M=c.autoClear;c.autoClear=!1;try{c.clearDepth(),c.render(i,t)}finally{c.autoClear=M}}return{render:l}}function nM(i){const t=new pe;t.name="ВАЗ-2101 «Копейка»",t.visible=!1,i.add(t);const e=new ar({color:"#eee1ba",shininess:54,specular:"#a9a49b"}),n=new ar({color:"#c9cacc",shininess:90,specular:"#f2f5f4"}),s=new se({color:"#35342f"}),o=new se({color:"#232528"}),r=new ar({color:"#527176",shininess:68,specular:"#3b535a",side:hn}),a=new se({color:"#fff5d5",emissive:"#422d0d"}),l=new se({color:"#ecaa38"}),c=new se({color:"#b92d23"}),h=new se({color:"#a53830"});function f(C,D,[I,z,k],q=t){const Y=new he(C,D);return Y.position.set(I,z,k),q.add(Y),Y}const u=(C,D,I,z,k,q,Y,J)=>f(new Ce(C,D,I),Y,[z,k,q],J);function d(C,D,I,z){const k=new O(...C),q=new O(...D);f(new Ce(I,I,k.distanceTo(q)),z,k.clone().add(q).multiplyScalar(.5).toArray()).lookAt(q)}function m(C){const D=new Le;D.setAttribute("position",new oe(C.flat(),3)),D.setIndex([0,1,2,0,2,3]),D.computeVertexNormals(),f(D,r,[0,0,0]),C.forEach((I,z)=>d(I,C[(z+1)%C.length],.026,n))}const _=new zc;_.moveTo(1.99,.42),_.lineTo(1.99,.8),_.lineTo(1.75,.89),_.lineTo(.71,.92),_.lineTo(-1.14,.89),_.lineTo(-1.98,.78),_.lineTo(-1.99,.39),_.lineTo(-1.62,.33);for(const C of[-1.212,1.212]){_.lineTo(C-.353,.29);for(let D=1;D<=12;D++){const I=Math.PI-D*Math.PI/12;_.lineTo(C+Math.cos(I)*.353,.29+Math.sin(I)*.337)}}_.lineTo(1.99,.42);const g=f(new Pr(_,{depth:1.49,bevelSize:.035,bevelThickness:.045,bevelSegments:2,steps:1}),e,[-.745,0,0]);g.rotation.y=Math.PI/2;const p=[-.724,.924,-.75],v=[.724,.924,-.75],M=[-.723,.891,1.13],x=[.723,.891,1.13],S=[-.609,1.414,-.43],b=[.609,1.414,-.43],E=[-.609,1.414,.72],y=[.609,1.414,.72];m([p,v,b,S]),m([x,M,E,y]),m([M,p,S,E]),m([v,x,y,b]),u(1.25,.047,1.2,0,1.423,.145,e);for(const C of[-1,1]){d([C*.72,.915,.16],[C*.618,1.41,.16],.044,e),d([C*.782,.688,-1.83],[C*.782,.688,1.83],.017,n);for(const D of[-.53,.39,1.12])d([C*.783,.426,D],[C*.783,.88,D],.009,s);for(const D of[.035,.91])u(.032,.033,.139,C*.791,.793,D,n);d([C*.74,.925,-1.23],[C*.84,1.021,-1.23],.024,n),C<0&&u(.148,.069,.061,-.846,1.037,-1.23,n),d([C*.6,.935,-.8],[C*.62,.855,-1.92],.013,n)}u(1.44,.228,.035,0,.704,-2.002,n),u(1.38,.192,.023,0,.704,-2.023,s);for(let C=0;C<6;C++)u(1.35,.008,.019,0,.627+C*.03,-2.039,n);u(.085,.09,.022,0,.704,-2.053,h);for(const C of[-1,1]){const D=C*.556;f(new Fn(.136,.136,.038,24),n,[D,.712,-2.036]).rotation.x=Math.PI/2,f(new Fn(.113,.113,.035,24),a,[D,.712,-2.057]).rotation.x=Math.PI/2,u(.173,.061,.028,D,.528,-2.023,l),u(.234,.128,.035,D,.669,2.014,n),u(.208,.101,.029,D,.669,2.037,c),u(.068,.097,.035,D+C*.066,.669,2.051,l);for(const I of[-2.058,2.047])u(.072,.133,.092,C*.457,.392,I,s)}u(1.62,.079,.112,0,.394,-2.054,n),u(1.62,.079,.112,0,.394,2.043,n),u(.3,.103,.028,0,.535,2.035,s),u(.26,.065,.012,0,.535,2.052,n),d([-.48,.93,-.759],[-.16,.955,-.745],.016,s),d([.12,.93,-.759],[.45,.955,-.745],.016,s);const w=[];for(const C of[-1.212,1.212])for(const D of[-1,1]){const I=new pe;I.position.set(D*.69,.288,C),t.add(I);const z=new pe;I.add(z);const k=(q,Y,J,j)=>f(new Fn(q,q,Y,20),j,[J,0,0],z).rotation.z=Math.PI/2;k(.289,.198,0,o),k(.207,.024,D*.101,e),k(.135,.027,D*.123,n),k(.054,.029,D*.142,s),w.push({pivot:I,wheel:z,steer:C<0})}const A=f(new yo(1,28),new qn({color:"#263137",transparent:!0,opacity:.24,depthWrite:!1}),[0,.031,0]);A.rotation.x=-Math.PI/2,A.scale.set(.96,2.08,1);const P=new tn(49,1,.22,4800),L=new O;return{cameraFor(C,{active:D,yaw:I,speed:z,turn:k,delta:q,terrain:Y,angle:J,height:j,distance:St}){if(t.visible=D,!D)return C;const vt=C.position.y-1.45;t.position.set(C.position.x,vt,C.position.z),t.rotation.y=-I;for(const{pivot:mt,wheel:pt,steer:V}of w)V&&(mt.rotation.y=-k*.3),pt.rotation.x-=z*q/.289;t.updateMatrixWorld(!0);const kt=St*Math.max(1,.72/C.aspect);return t.localToWorld(P.position.set(Math.sin(J)*kt,j,Math.cos(J)*kt)),P.position.y=Math.max(P.position.y,Y(P.position.x,P.position.z)+1.8),P.lookAt(t.localToWorld(L.set(0,.83,-Math.max(0,Math.cos(J))*1.1))),P.aspect!==C.aspect&&(P.aspect=C.aspect,P.updateProjectionMatrix()),P}}}const iM=new O(0,1,0),Dl=new O,Ma=new O;function kn(i,t,e,n=[0,0,0]){const s=new he(t,e);return s.position.set(...n),i.add(s),s}function $o(i,t,e){Dl.set(...t),Ma.set(...e).sub(Dl),i.position.copy(Dl).addScaledVector(Ma,.5),i.scale.y=Ma.length(),i.quaternion.setFromUnitVectors(iM,Ma.normalize())}function We(i,t,e,n,s){const o=kn(i,new Fn(n,n,1,8),s);return $o(o,t,e),o}function sM(i){const t=new pe;t.name="Велосипед с велосипедистом",t.visible=!1,i.add(t);const e=q=>new se({color:q,flatShading:!0}),n=e("#4ca9ab"),s=e("#1d2b2c"),o=e("#b4c1b8"),r=e("#3b4240"),a=e("#eee1ba"),l=e("#415760"),c=e("#cd9478"),h=e("#e5af59"),f=[0,.345,.54],u=[0,.92,-.38],d=[0,.39,.055],m=[0,.94,.21],_=new pe;_.position.set(...u),t.add(_);const g=.321;function p(q,Y){const J=new pe;J.position.set(...Y),q.add(J),kn(J,new xi(g,.024,8,36),s).rotation.y=Math.PI/2,kn(J,new xi(.297,.008,6,36),o).rotation.y=Math.PI/2,We(J,[-.047,0,0],[.047,0,0],.017,o);for(let j=0;j<14;j++){const St=j*Math.PI/7;We(J,[j%2?.025:-.025,0,0],[0,Math.sin(St)*.295,Math.cos(St)*.295],.0026,o)}return J}const v=p(t,f),M=p(_,[0,-.575,-.17]);We(t,d,m,.027,n),We(t,d,[0,.78,-.36],.029,n),We(t,[0,.85,.195],[0,.86,-.37],.023,n),We(t,[0,.77,-.36],u,.036,n);for(const q of[-1,1]){const Y=[q*.046,f[1],f[2]];We(t,[q*.033,.8,.19],Y,.012,n),We(t,[q*.036,d[1],d[2]],Y,.015,n),We(_,[q*.036,-.15,.026],[q*.043,-.575,-.17],.016,n),We(_,[0,.095,.042],[q*.34,.125,.13],.014,o),We(_,[q*.26,.119,.112],[q*.36,.13,.134],.022,s)}We(_,[0,0,0],[0,.095,.042],.022,o),kn(_,new Fn(.028,.031,.025,12),h,[-.23,.146,.103]),kn(t,new wn(1,12,8),r,[0,.95,.208]).scale.set(.082,.022,.123),We(t,[-.12,d[1],d[2]],[.12,d[1],d[2]],.015,o);const S=[0,1.34,-.074],b=[0,.96,.22],E=kn(t,new wn(1,12,8),a,[0,1.16,.065]);E.scale.set(.16,.232,.118),E.rotation.x=-.63,kn(t,new wn(1,12,8),l,b).scale.set(.138,.085,.104),We(t,[0,1.31,-.087],[0,1.45,-.169],.059,c),kn(t,new wn(.093,12,8),c,[0,1.49,-.167]).scale.y=1.11,kn(t,new wn(1,14,9),h,[0,1.554,-.178]).scale.set(.113,.075,.121),kn(t,new wn(1,12,8),r,[0,1.541,-.271]).scale.set(.093,.017,.041);const P=[-1,1].map(q=>{const Y=[q*.118,S[1],S[2]],J=[q*.225,1.17,-.16],j=[q*.31,1.05,-.25],St=[q*.095,b[1],b[2]],vt=[q*.14,.71,-.21],kt=[q*.12,d[1],d[2]];return{side:q,elbow:J,forearm:We(t,J,j,.031,c),sleeve:We(t,Y,J,.045,a),thigh:We(t,St,vt,.057,l),shin:We(t,vt,kt,.041,l),crankArm:We(t,[q*.085,d[1],d[2]],kt,.012,o),shoe:kn(t,new Ce(.084,.058,.163),r,kt)}}),L=kn(t,new yo(1,22),new qn({color:"#203138",transparent:!0,opacity:.16,depthWrite:!1}),[0,.027,0]);L.rotation.x=-Math.PI/2,L.scale.set(.245,.87,1);const C=new tn(52,1,.18,4800),D=new O,I=new O;let z=0,k=0;return{cameraFor(q,{active:Y,yaw:J,speed:j,turn:St,delta:vt,terrain:kt,angle:mt,height:pt,distance:V}){if(t.visible=Y,!Y)return q;t.position.set(q.position.x,q.position.y-1.65+.12,q.position.z),t.rotation.y=-J,_.rotation.y=-St*.34,_.updateMatrix();const Q=j*vt/(g+.024);z=(z-Q)%(Math.PI*2),k=(k-Q*.4)%(Math.PI*2),v.rotation.x=M.rotation.x=z;for(const{side:wt,elbow:H,forearm:at,thigh:ht,shin:Z,crankArm:F,shoe:G}of P){I.set(wt*.316,.125,.126).applyMatrix4(_.matrix),$o(at,H,I.toArray());const tt=k+(wt>0?Math.PI:0),rt=[wt*.123,d[1]+.143*Math.cos(tt),d[2]+.143*Math.sin(tt)],_t=[wt*.143,.68+.078*Math.cos(tt),-.216+.035*Math.sin(tt)];$o(ht,[wt*.095,b[1],b[2]],_t),$o(Z,_t,rt),$o(F,[wt*.085,d[1],d[2]],rt),G.position.set(rt[0],rt[1]+.018,rt[2]-.038)}t.updateMatrixWorld(!0);const dt=V*.59*Math.max(1,.62/q.aspect);return t.localToWorld(C.position.set(Math.sin(mt)*dt,pt*.68,Math.cos(mt)*dt)),C.position.y=Math.max(C.position.y,kt(C.position.x,C.position.z)+1.4),C.lookAt(t.localToWorld(D.set(0,.8,-Math.max(0,Math.cos(mt))*.52))),C.aspect!==q.aspect&&(C.aspect=q.aspect,C.updateProjectionMatrix()),C}}}const Ji=document.querySelector("#world"),Nu=document.querySelector("#status"),Ko=i=>[...document.querySelectorAll(`[data-${i}]`)].filter(t=>t instanceof HTMLButtonElement),Fu=(i,t)=>{for(const e of Ko(i))e.setAttribute("aria-pressed",String(e.dataset[i]===t))};async function Ou(i){const t=await fetch(`./data/${i}.json`);if(!t.ok)throw new Error(`Не удалось загрузить ${i} (${t.status}).`);return t.json()}function oM(i,t){const{Vector3:e,MathUtils:n}=B0,s=qv(Ji,i,t),o=Kv(i.roads),r=eM(),a=nM(s.scene),l=sM(s.scene),c=new tn(46,1,.35,4800),h=new W3(c,Ji),f=matchMedia("(prefers-reduced-motion: reduce)").matches;h.enableDamping=!f,h.dampingFactor=.13,h.minDistance=28,h.maxDistance=3300,h.maxPolarAngle=Math.PI*.48,h.zoomSpeed=.8,h.screenSpacePanning=!1;const[u,d,m,_]=i.bounds,[g,p]=i.origin,[v,M]=i.scale,x=document.querySelector("#compass"),S=document.querySelector("#coordinates"),b=document.querySelector("#vehicle-speed"),E=document.querySelector("#cartoon-style"),y=document.querySelector("#vehicle-view"),w=document.querySelector("#superman-flight"),A=document.querySelector("#mode-help"),P=document.querySelector("#places"),L=document.querySelector("#venues"),C=document.querySelector("#pins"),D={orbit:"Стрелки или WASD — лететь. Shift — ускорение. Тяните, чтобы повернуть карту. Колесо — масштаб.",walk:"WASD или стрелки — идти. Shift — бег. Тяните по сцене, чтобы оглянуться.",bike:"Стрелки или WASD — движение и руль. V — сменить камеру. На лестнице — пешком.",car:"↑/↓ или W/S — газ и задний ход. ←/→ или A/D — руль. V — сменить камеру.",map:"Север вверху. Тяните карту, чтобы сдвинуть её."},I={walk:{eye:1.75,fov:68},bike:{eye:1.65,fov:70,speed:6.8,reverse:2.2,steer:1.9},car:{eye:1.45,fov:73,speed:10.5,reverse:3.1,steer:1.6}},z={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},k=[{id:"paintedWaterfront",name:"Парк-отель — Анапа-Океан",position:[-376,-15],walk:{position:[-348,-36],look:[-278,-43]}},{id:"upperWaterfront",name:"Верхняя набережная",position:[-348,-13],walk:{position:[-349,-19.4],look:[-265,-22]}},{id:"lowerWaterfront",name:"Нижняя набережная",position:[-348,-36],look:[-278,-43]},{id:"queuePavilion",name:"Павильон «Очередь»",position:[-412.5,-21.7],walk:{position:[-414,-12],look:[-412,-21.7]}},{id:"pearlFountain",name:"Жемчужина Анапы",position:[-238,2],walk:{position:[-255,-5],look:[-238,2]}},{id:"gorgMuseum",name:"Музей «Горгиппия»",position:[-282,17],walk:{position:[-282,9],look:[-282,17],pitch:.17}},{id:"oldAnapa",name:"Старинная Анапа",position:[-474.6,-5.5],walk:{position:[-474.6,-19],look:[-474.6,-5.5],pitch:.13}}],Y=["paintedWaterfront","lighthouse","malaya","port","ocean","oldAnapa","upperWaterfront","lowerWaterfront","queuePavilion","gorgippia","gorgMuseum","parkHotel","sails","pearlFountain","gates","beach"].map(N=>{const it=i.landmarks.find(Jt=>Jt.id===N)??k.find(Jt=>Jt.id===N);if(N==="parkHotel")return{...it,walk:{position:[-167,-27],look:[-169,-7.5],pitch:.58}};if(N==="ocean")return{...it,walk:{position:[-598,-33],look:[-589.7,-16],pitch:.12}};if(it?.id!=="sails")return it;const[ot,bt]=so,Mt=p-bt/M,$t=g+ot/v;return{...it,position:so,pinHeight:5.85,walk:{position:[-306,-22],look:so},osm:`https://www.openstreetmap.org/#map=19/${Mt.toFixed(6)}/${$t.toFixed(6)}`}}).filter(Boolean),J={lighthouse:{aim:[-9,0],offset:[-146,115,102]},malaya:{aim:[-34,35],offset:[-219,151,-43]},ocean:{aim:[7,-6],offset:[-93,103,-176],raise:14},oldAnapa:{aim:[0,0],offset:[-17,15,-33],raise:3,mapAltitude:65},paintedWaterfront:{aim:[0,0],offset:[-55,240,-290],mapAltitude:465},upperWaterfront:{aim:[12,-10],offset:[-58,100,-155],mapAltitude:275},lowerWaterfront:{aim:[12,4],offset:[6,58,-118],mapAltitude:220},queuePavilion:{aim:[0,0],offset:[14,24,-46],mapAltitude:65},pearlFountain:{aim:[0,0],offset:[-11,16,-30],mapAltitude:52},gorgippia:{aim:[40,3],offset:[-13,94,-79],mapAltitude:127},gorgMuseum:{aim:[0,0],offset:[5,16,-28],mapAltitude:46},parkHotel:{aim:[-5,-6],offset:[-97,91,-155],raise:6},sails:{aim:[15,-1],offset:[13,31,-49],mapAltitude:69}},j={"Верхний ярус":[{id:"laVeranda",name:"La Veranda",position:[-619.4,-18.48],walk:{position:[-627,-25],look:[-619.4,-18.48],pitch:.13}},{...k.find(N=>N.id==="queuePavilion"),id:"queueCafe",name:"Queue"},{id:"more",name:"Море. Истории о еде",position:[-533,-25],walk:{position:[-533,-35],look:[-533,-25],pitch:.08}},{id:"barBQ",name:"BAR BQ",position:[-456.65,14],walk:{position:[-450,14],look:[-456.65,14],pitch:.08}}],"Нижний ярус":[{id:"captainCafe",name:"Капитан",position:[-530,-67],walk:{position:[-534.4,-79.5],look:[-530,-67],pitch:.15}},{id:"adrian",name:"Adrian Bistro",position:[-358,-30.5],walk:{position:[-359.7,-37.4],look:[-358,-30.5],pitch:.1}},{id:"bavaria",name:"Bavaria",position:[-342.2,-30.9],walk:{position:[-340,-38.1],look:[-342.2,-30.9],pitch:.13}},{id:"prichal",name:"Причал",position:[-303,-34.35],walk:{position:[-302,-40.2],look:[-303,-34.35],pitch:.2}},{id:"khinkal",name:"Хинкальная",position:[-267.5,-38.45],walk:{position:[-267.5,-44.35],look:[-267.5,-38.45],pitch:.18}},{id:"parokhod",name:"Пароходъ",position:[-229.8,-52.4],walk:{position:[-232.74,-59.75],look:[-229.8,-52.4],pitch:.34}},{id:"wineSea",name:"Вино и море",position:[-175,-54],walk:{position:[-184,-48],look:[-175,-54],pitch:.2}}]};J.queueCafe=J.queuePavilion,J.more={aim:[0,0],offset:[-13,17,-34],raise:1.3,mapAltitude:67},J.laVeranda={aim:[0,0],offset:[-12,16,-28],raise:2,mapAltitude:52},J.barBQ={aim:[0,0],offset:[25,11,-14],raise:1.3,mapAltitude:58};for(const N of j["Нижний ярус"])J[N.id]={aim:[0,0],offset:[-9,12,-32],raise:1.8,mapAltitude:60};J.wineSea.offset=[-27,13,-12];const St=i.landmarks.find(N=>N.id==="gorgippia")?.position??[(u+m)/2,(d+_)/2],vt=i.landmarks.find(N=>N.id==="lighthouse")?.position??St,kt=new e,mt=new e,pt=new e,V=new e,Q=new Set,dt=new Map,wt=new Set,H=new Map,at=[];let ht="orbit",Z=null,F=0,G=0,tt=0,rt=0,_t=!1;const Et=new Set,Tt=()=>Et.has(ht);let Ot=-.43,B=2.8,Kt=5.9,qt=null,U="";function T(N,it){const ot=(p-it/M).toFixed(5),bt=(g+N/v).toFixed(5),Mt=`${ot}/${bt}`;Mt!==U&&(U=Mt,S.textContent=`${ot}° N  ${bt}° E`,S.href=`https://www.openstreetmap.org/#map=18/${Mt}`,S.title="Показать эту точку в OpenStreetMap")}function $(N,it=!1){const ot=it?J[Z?.id]:void 0,bt=ht==="orbit"||ot?.mapAltitude?ot:void 0,Mt=N[0]+(bt?.aim[0]??0),$t=N[1]+(bt?.aim[1]??0),Jt=s.terrain(Mt,$t)+(bt?.raise??0);if(h.target.set(Mt,Jt,$t),ht==="map"){const ue=(bt?.mapAltitude??(it?440:1220))/Math.min(1,c.aspect*(bt?.mapAltitude?.7:1.2));c.position.set(Mt,Jt+Math.min(3200,ue),$t+.1)}else{const ue=1/Math.min(1,c.aspect*(bt?.mapAltitude?.67:1.4)),[de,_e,De]=bt?.offset??(it?[-148,150,-209]:[-345,350,-485]);c.position.set(Mt+de*ue,Jt+_e*ue,$t+De*ue)}h.update()}function K(N,it){if(ht==="bike"&&o.bicycleAt(N,it)==="blocked")return null;const ot=ht==="car"?o.carAt(N,it):null;if(ht==="car"&&!ot)return null;const bt=s.walkHeight(N,it);return bt===null||!ot?bt:bt+(ot.bridge?.85:.31)}function ct([N,it],ot){let bt=null,Mt=1/0;const $t=s.terrain(N,it);for(const{points:Jt,kind:ue}of i.roads)if(["footway","pedestrian","path","living_street","steps"].includes(ue))for(let de=1;de<Jt.length;de++){const[_e,De]=Jt[de-1],[Cn,dn]=Jt[de],yi=Cn-_e,On=dn-De,ls=yi*yi+On*On;if(ls<.01||ot&&ue!=="pedestrian")continue;const Dr=((N-_e)*yi+(it-De)*On)/ls,Ir=Math.sqrt(ls);for(const Ts of ot?[-42,-30,30,42]:[0,-8,8]){const Eo=n.clamp(Dr+Ts/Ir,0,1),Yn=_e+yi*Eo,bi=De+On*Eo,Hi=Math.hypot(Yn-N,bi-it);if(Hi<(ot?24:5)||Hi>90)continue;const Ur=Hi+(ot?4*Math.abs(s.terrain(Yn,bi)-$t):0);Ur>=Mt||K(Yn,bi)!==null&&(ot&&![4,10,18].every(Nr=>K(Yn+(N-Yn)*Nr/Hi,bi+(it-bi)*Nr/Hi)!==null)||(Mt=Ur,bt=[Yn,bi]))}}return bt}function yt(N,it){const[ot,bt]=it?.look??N;let Mt=it&&K(...it.position)!==null?it.position:null;Mt??=ct(N,N===vt)??ct(N,!1);for(let Jt=4;!Mt&&Jt<=96;Jt+=4)for(let ue=0;!Mt&&ue<Math.PI*2;ue+=Math.PI/8){const de=ot+Math.cos(ue)*Jt,_e=bt+Math.sin(ue)*Jt;K(de,_e)!==null&&(Mt=[de,_e])}if(!Mt)return!1;c.position.set(Mt[0],K(...Mt)+I[ht].eye,Mt[1]),F=Math.atan2(ot-Mt[0],Mt[1]-bt);const $t=s.terrain(ot,bt)+(N===vt?9:1.6);return G=it?.pitch??n.clamp(Math.atan2($t-c.position.y,Math.hypot(ot-Mt[0],bt-Mt[1])),-.22,.32),!0}function At(N){const it=o.nearestCarStart(N,K);if(!it)return!1;const{x:ot,z:bt,height:Mt,heading:$t}=it;F=$t+(Math.cos(F-$t)<0?Math.PI:0);const Jt=dn=>K(ot+Math.sin(F)*dn,bt-Math.cos(F)*dn),ue=dn=>[1.5,3,5].find(yi=>Jt(yi*dn)===null)??6;ue(-1)>ue(1)&&(F+=Math.PI);const de=2.04,_e=Math.sin(F)*de,De=-Math.cos(F)*de,Cn=K(ot+_e,bt+De);return G=0,K(ot-_e,bt-De)===null&&Cn!==null?c.position.set(ot+_e,Cn+I.car.eye,bt+De):c.position.set(ot,Mt+I.car.eye,bt),!0}function lt(N){Z=N,tt=0;for(const[it,ot]of H)ot.setAttribute("aria-pressed",String(it===N?.id));for(const{marker:it,place:ot}of at)it.classList.toggle("selected",ot===N);if(ht==="car")At(N?.position??St);else if(I[ht]){const it=N?.id==="gorgippia"?Fx:N?.walk??(N?.look?N:null);yt(N?.position??vt,it)||yt(vt)}else $(N?.position??St,!!N)}function ft(N){const it=I[ht]?[c.position.x,c.position.z]:null;if(ht=N,qt=null,tt=0,Q.clear(),dt.clear(),wt.clear(),h.enabled=!I[N],h.enableRotate=N==="orbit",h.mouseButtons.LEFT=N==="map"?Fi.PAN:Fi.ROTATE,h.touches.ONE=N==="map"?pi.PAN:pi.ROTATE,h.touches.TWO=pi.DOLLY_PAN,h.minPolarAngle=0,h.maxPolarAngle=N==="map"?1e-4:Math.PI*.48,c.fov=I[N]?.fov??46,c.updateProjectionMatrix(),document.body.dataset.mode=N,b.hidden=N!=="bike"&&N!=="car",w.hidden=N!=="orbit",Ct(),Fu("mode",N),it&&I[N]){if(N==="car"&&At(it))return;const ot=K(...it);if(ot!==null){c.position.y=ot+I[N].eye;return}}lt(Z)}Y.forEach((N,it)=>{const ot=document.createElement("button");ot.type="button",ot.className="place",ot.setAttribute("aria-pressed","false");const bt=document.createElement("span");bt.className="place-index",bt.textContent=String(it+1).padStart(2,"0"),bt.setAttribute("aria-hidden","true");const Mt=document.createElement("span");if(Mt.className="place-name",Mt.textContent=N.name,ot.append(bt,Mt),ot.addEventListener("click",()=>lt(N)),P.append(ot),H.set(N.id,ot),!N.osm)return;const $t=document.createElement("a");$t.className="map-pin",$t.href=N.osm,$t.target="_blank",$t.rel="noopener noreferrer",$t.setAttribute("aria-label",`${N.name} в OpenStreetMap`),$t.title=`${N.name} в OpenStreetMap`;const Jt=document.createElement("span");Jt.textContent=bt.textContent;const ue=document.createElement("strong");ue.textContent=N.name,$t.append(Jt,ue),C.append($t),at.push({marker:$t,place:N})});for(const[N,it]of Object.entries(j)){const ot=document.createElement("h3");ot.textContent=N,L.append(ot);for(const bt of it){const Mt=document.createElement("button");Mt.type="button",Mt.className="place",Mt.setAttribute("aria-pressed","false"),Mt.textContent=bt.name,Mt.addEventListener("click",()=>lt(bt)),L.append(Mt),H.set(bt.id,Mt)}}for(const N of Ko("mode"))N.addEventListener("click",()=>ft(N.dataset.mode));E.addEventListener("click",()=>{const N=E.getAttribute("aria-pressed")!=="true";E.setAttribute("aria-pressed",String(N)),s.setCartoon(N)});function Ct(){y.hidden=ht!=="bike"&&ht!=="car",y.setAttribute("aria-pressed",String(Tt())),y.textContent=Tt()?ht==="car"?"Камера из салона":"Камера от первого лица":"Камера снаружи",A.textContent=Tt()?"Стрелки или WASD — езда. Тяните по сцене, чтобы повернуть камеру. V — вид от первого лица.":D[ht]}function Vt(){Tt()?Et.delete(ht):Et.add(ht),Ct()}y.addEventListener("click",Vt),w.addEventListener("click",()=>{_t=!_t,w.setAttribute("aria-pressed",String(_t))});function Dt(N){Fu("light",N),s.light(N)}for(const N of Ko("light"))N.addEventListener("click",()=>Dt(N.dataset.light));for(const N of Ko("action"))N.addEventListener("click",()=>{const it=N.dataset.action;if(it==="reset"){lt(Y.find(Mt=>Mt.id==="paintedWaterfront"));return}const ot=it==="zoom-in";if(Tt()){Kt=n.clamp(Kt+(ot?-1:1),3.8,9);return}if(I[ht]){c.fov=n.clamp(c.fov+(ot?-8:8),42,82),c.updateProjectionMatrix();return}kt.copy(c.position).sub(h.target);const bt=n.clamp(kt.length()*(ot?.75:1.33),h.minDistance,h.maxDistance);c.position.copy(h.target).add(kt.setLength(bt)),h.update()});for(const N of Ko("move")){const it=N.dataset.move;N.addEventListener("pointerdown",ot=>{N.setPointerCapture(ot.pointerId),dt.set(ot.pointerId,it)});for(const ot of["pointerup","pointercancel","lostpointercapture"])N.addEventListener(ot,bt=>dt.delete(bt.pointerId));N.addEventListener("click",ot=>{ot.detail===0&&wt.add(it)})}Ji.addEventListener("pointerdown",N=>{!I[ht]||qt!==null||(qt={id:N.pointerId,x:N.clientX,y:N.clientY},Ji.setPointerCapture(qt.id))}),Ji.addEventListener("pointermove",N=>{if(N.pointerId!==qt?.id)return;const it=N.clientX-qt.x,ot=N.clientY-qt.y;Tt()?(Ot-=it*.009,B=n.clamp(B+ot*.018,1.55,6)):(F+=it*.003,G=n.clamp(G-ot*.003,-1.33,1.33)),qt.x=N.clientX,qt.y=N.clientY});for(const N of["pointerup","pointercancel","lostpointercapture"])Ji.addEventListener(N,it=>{qt?.id===it.pointerId&&(qt=null)});window.addEventListener("keydown",N=>{const it=z[N.code],ot=(ht==="walk"||ht==="orbit")&&(N.code==="ShiftLeft"||N.code==="ShiftRight"),bt=(ht==="car"||ht==="bike")&&N.code==="KeyV";if(!(ht==="map"||!it&&!ot&&!bt||N.defaultPrevented||N.isComposing||N.altKey||N.ctrlKey||N.metaKey)&&!(N.target instanceof HTMLElement&&(N.target.isContentEditable||N.target.matches("input, select, textarea")))){if(bt){N.preventDefault(),N.repeat||Vt();return}Q.add(N.code),it&&(N.preventDefault(),N.repeat||wt.add(it))}}),window.addEventListener("keyup",N=>Q.delete(N.code)),window.addEventListener("blur",()=>{Q.clear(),dt.clear(),wt.clear(),tt=0,qt=null});function Pt(){const N=Math.max(1,Ji.clientWidth),it=Math.max(1,Ji.clientHeight);s.renderer.setSize(N,it,!1),c.aspect=N/it,c.updateProjectionMatrix()}function Wt(){const N=new Set(wt);for(const it of Q)z[it]&&N.add(z[it]);for(const it of dt.values())N.add(it);return[Number(N.has("forward"))-Number(N.has("back")),Number(N.has("right"))-Number(N.has("left"))]}function Yt(N,it,ot,bt){const Mt=c.position,$t=ht==="car"?.65:.4,Jt=Math.max(1,Math.ceil(Math.hypot(N,it)/.15));function ue(de,_e){const De=K(de,_e);return De===null||Math.abs(De-ot)>$t?!1:(Mt.x=de,Mt.z=_e,ot=De,!0)}for(let de=0;de<Jt;de++)if(bt)ue(Mt.x+N/Jt,Mt.z),ue(Mt.x,Mt.z+it/Jt);else if(!ue(Mt.x+N/Jt,Mt.z+it/Jt)){tt=0;break}return ot}function te(N){const[it,ot]=Wt();rt=ot;const bt=c.position,Mt=I[ht];let $t=K(bt.x,bt.z);if(ht==="walk"&&(it||ot)){const Jt=Q.has("ShiftLeft")||Q.has("ShiftRight"),de=(wt.size?.46:(Jt?7.8:4.8)*N)/Math.hypot(ot,it),_e=(Math.sin(F)*it+Math.cos(F)*ot)*de,De=(-Math.cos(F)*it+Math.sin(F)*ot)*de;$t=Yt(_e,De,$t,!0)}else if(ht!=="walk"){const Jt=ht==="bike"&&o.bicycleAt(bt.x,bt.z)==="push",ue=Jt?2:Mt.speed,de=it*(it<0?Math.min(ue,Mt.reverse):ue),_e=wt.size?Math.max(N,.06):N;tt=n.clamp(n.damp(tt,de,de===0?12:5,_e),-ue,ue);const De=tt<-.1;F+=ot*Mt.steer*_e*(De?-1:1);const Cn=tt*_e;Math.abs(Cn)>1e-4&&($t=Yt(Math.sin(F)*Cn,-Math.cos(F)*Cn,$t,Jt));const dn=`${Math.round(Math.abs(tt)*3.6)} км/ч${Jt?" · пешком":""}`;b.textContent!==dn&&(b.textContent=dn)}$t!==null&&(bt.y=n.damp(bt.y,$t+Mt.eye,18,N)),mt.set(Math.sin(F)*Math.cos(G),Math.sin(G),-Math.cos(F)*Math.cos(G)),c.lookAt(mt.add(c.position))}function X(N){h.update();let{x:it,z:ot}=h.target;if(ht==="orbit"&&(Q.size||wt.size||dt.size)){const[bt,Mt]=Wt(),$t=Math.hypot(bt,Mt);if($t){const Jt=_t||Q.has("ShiftLeft")||Q.has("ShiftRight"),de=n.clamp(c.position.distanceTo(h.target)*.38,12,180)*(Jt?5:1)*(wt.size?Math.max(N,.08):N)/$t;kt.copy(h.target).sub(c.position).setY(0).normalize(),it+=(kt.x*bt-kt.z*Mt)*de,ot+=(kt.z*bt+kt.x*Mt)*de}}it=n.clamp(it,u,m),ot=n.clamp(ot,d,_),c.position.x+=it-h.target.x,c.position.z+=ot-h.target.z,h.target.x=it,h.target.z=ot}Pt(),window.addEventListener("resize",Pt),ft("orbit");const Rt=new URLSearchParams(window.location.search),ut=[...Y,...Object.values(j).flat()];lt(ut.find(N=>N.id===Rt.get("place"))??Y[0]);const Lt=Rt.get("mode");["map","walk","bike","car"].includes(Lt)&&ft(Lt),Rt.get("light")==="sunset"&&Dt("sunset"),Rt.get("camera")==="outside"&&(ht==="bike"||ht==="car")&&Vt();let Ut=performance.now();s.renderer.setAnimationLoop(N=>{const it=Math.min((N-Ut)/1e3,.05);Ut=N,I[ht]?te(it):X(it),wt.clear(),c.getWorldDirection(pt);const ot=ht==="map"?0:-Math.atan2(pt.x,-pt.z);x.style.setProperty("--north",`${ot}rad`);const bt=I[ht]?c.position:h.target;T(bt.x,bt.z);for(const{marker:_e,place:De}of at){const[Cn,dn]=De.position;V.set(Cn,s.terrain(Cn,dn)+(De.pinHeight??1.2),dn).project(c),_e.hidden=!!I[ht]||V.z<-1||V.z>1||Math.abs(V.x)>.97||Math.abs(V.y)>.92,_e.hidden||(_e.style.left=`${(V.x+1)*50}%`,_e.style.top=`${(1-V.y)*50}%`)}const Mt=f?0:N/1e3,$t=Tt(),Jt={yaw:F,speed:tt,turn:rt,delta:it,terrain:s.terrain,angle:Ot,height:B,distance:Kt},ue=a.cameraFor(c,{...Jt,active:ht==="car"&&$t}),de=l.cameraFor(ue,{...Jt,active:ht==="bike"&&$t});s.render(de,Mt),r.render(s.renderer,{mode:$t?"":ht,aspect:c.aspect,turn:rt,speed:tt,time:Mt,delta:it,reducedMotion:f})})}let Bu="Не удалось загрузить данные Анапы. Перезагрузите страницу.";try{const[i,t]=await Promise.all([Ou("anapa"),Ou("elevation")]);i.scale??=[111320*Math.cos(ce.degToRad(i.origin[1])),111132],Bu="Не удалось открыть 3D-карту. Проверьте, доступен ли WebGL 2, и перезагрузите страницу.",oM(i,t),Nu.hidden=!0}catch(i){console.error(i),Nu.textContent=Bu}
