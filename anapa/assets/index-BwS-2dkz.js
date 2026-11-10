(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Sc="186",Oi={ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ku=0,Nl=1,Gu=2,Qo=1,Hu=2,eo=3,ei=0,fn=1,nn=2,gi=0,io=1,uo=2,Fl=3,Ol=4,Vu=5,Ms=100,Wu=101,Xu=102,qu=103,Yu=104,Zu=200,$u=201,Ku=202,Ju=203,n0=204,i0=205,Qu=206,ju=207,tf=208,ef=209,nf=210,sf=211,of=212,rf=213,af=214,La=0,Da=1,Ia=2,fo=3,Ua=4,Na=5,Fa=6,Oa=7,Cr=0,cf=1,lf=2,ni=0,s0=1,o0=2,r0=3,a0=4,c0=5,l0=6,h0=7,u0=300,os=301,Es=302,jo=303,Sa=304,Pr=306,dr=1e3,mi=1001,po=1002,Je=1003,hf=1004,ko=1005,sn=1006,ya=1007,ts=1008,An=1009,f0=1010,d0=1011,mo=1012,yc=1013,ii=1014,Wn=1015,si=1016,bc=1017,wc=1018,go=1020,p0=35902,m0=35899,g0=1021,_0=1022,Xn=1023,Mi=1026,es=1027,Ec=1028,Tc=1029,rs=1030,Ac=1031,Rc=1033,tr=33776,er=33777,nr=33778,ir=33779,Ba=35840,za=35841,ka=35842,Ga=35843,Ha=36196,Va=37492,Wa=37496,Xa=37488,qa=37489,pr=37490,Ya=37491,Za=37808,$a=37809,Ka=37810,Ja=37811,Qa=37812,ja=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,oc=37819,rc=37820,ac=37821,cc=36492,lc=36494,hc=36495,uc=36283,fc=36284,mr=36285,dc=36286,uf=3200,gr=0,ff=1,Pi="",tn="srgb",_r="srgb-linear",xr="linear",_e="srgb",ba=7680,df=519,pf=512,mf=513,gf=514,Cc=515,_f=516,xf=517,Pc=518,vf=519,x0=35044,Mf=35048,Bl="300 es",ti=2e3,_o=2001;function Id(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){const i=vr("canvas");return i.style.display="block",i}const K0={};function Mr(...i){const t="THREE."+i.shift();console.log(t,...i)}function yf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=yf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function he(...i){i=yf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ys(...i){const t=i.join(" ");t in K0||(K0[t]=!0,Qt(...i))}function Ud(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Nd={[La]:Da,[Ia]:Fa,[Ua]:Oa,[fo]:Na,[Da]:La,[Fa]:Ia,[Oa]:Ua,[Na]:fo};class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let J0=1234567;const sr=Math.PI/180,Sr=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function v0(i,t){return(i%t+t)%t}function Fd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Od(i,t,e){return i!==t?(e-i)/(t-i):0}function or(i,t,e){return(1-e)*i+e*t}function Bd(i,t,e,n){return or(i,t,1-Math.exp(-e*n))}function zd(i,t=1){return t-Math.abs(v0(i,t*2)-t)}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vd(i,t){return i+Math.random()*(t-i)}function Wd(i){return i*(.5-Math.random())}function Xd(i){i!==void 0&&(J0=i);let t=J0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qd(i){return i*sr}function Yd(i){return i*Sr}function Zd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $d(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jd(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),p=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const le={DEG2RAD:sr,RAD2DEG:Sr,generateUUID:_i,clamp:oe,euclideanModulo:v0,mapLinear:Fd,inverseLerp:Od,lerp:or,damp:Bd,pingpong:zd,smoothstep:kd,smootherstep:Gd,randInt:Hd,randFloat:Vd,randFloatSpread:Wd,seededRandom:Xd,degToRad:qd,radToDeg:Yd,isPowerOfTwo:Zd,ceilPowerOfTwo:$d,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:Jd,normalize:Me,denormalize:jn};var lo;let St=(lo=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lo.prototype.isVector2=!0,lo);class zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=o[r+0],d=o[r+1],p=o[r+2],_=o[r+3];if(f!==_||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*_;g<0&&(u=-u,d=-d,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){const v=Math.acos(g),M=Math.sin(v);m=Math.sin(m*v)/M,a=Math.sin(a*v)/M,l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+_*a}else{l=l*m+u*a,c=c*m+d*a,h=h*m+p*a,f=f*m+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=o[r],u=o[r+1],d=o[r+2],p=o[r+3];return t[e]=a*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-a*d,t[e+2]=c*p+h*d+a*u-l*f,t[e+3]=h*p-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(o/2),u=l(n/2),d=l(s/2),p=l(o/2);switch(r){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}var ho;let F=(ho=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Q0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Q0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*h,this.y=n+l*h+a*c-o*f,this.z=s+l*f+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $c.copy(this).projectOnVector(t),this.sub($c)}reflect(t){return this.sub($c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ho.prototype.isVector3=!0,ho);const $c=new F,Q0=new zi,X0=class X0{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=s[0],g=s[3],m=s[6],v=s[1],M=s[4],x=s[7],S=s[2],b=s[5],w=s[8];return o[0]=r*_+a*v+l*S,o[3]=r*g+a*M+l*b,o[6]=r*m+a*x+l*w,o[1]=c*_+h*v+f*S,o[4]=c*g+h*M+f*b,o[7]=c*m+h*x+f*w,o[2]=u*_+d*v+p*S,o[5]=u*g+d*M+p*b,o[8]=u*m+d*x+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*r-a*c,u=a*l-h*o,d=c*o-r*l,p=e*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=f*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kc.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kc.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};X0.prototype.isMatrix3=!0;let jt=X0;const Kc=new jt,j0=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qd(){const i={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===_e&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_e&&(s.r=so(s.r),s.g=so(s.g),s.b=so(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_r]:{primaries:t,whitePoint:n,transfer:xr,toXYZ:j0,fromXYZ:th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:j0,fromXYZ:th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const ce=Qd();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function so(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ps;class bf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ps===void 0&&(Ps=vr("canvas")),Ps.width=t.width,Ps.height=t.height;const s=Ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Bi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jd=0;class Lc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Jc(s[r].image)):o.push(Jc(s[r]))}else o=Jc(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let tp=0;const Qc=new F;class Qe extends ki{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=mi,s=mi,o=sn,r=ts,a=Xn,l=An,c=Qe.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=_i(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==u0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=u0;Qe.DEFAULT_ANISOTROPY=1;const q0=class q0{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(d+1)/2,S=(m+1)/2,b=(h+u)/4,w=(f+_)/4,y=(p+g)/4;return M>x&&M>S?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=b/n,o=w/n):x>S?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=b/s,o=y/s):S<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(S),n=w/o,s=y/o),this.set(n,s,o,e),this}let v=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};q0.prototype.isVector4=!0;let Ie=q0;class wf extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new Qe(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class M0 extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ef extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Mc=class Mc{constructor(t,e,n,s,o,r,a,l,c,h,f,u,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,f,u,d,p,_,g)}set(t,e,n,s,o,r,a,l,c,h,f,u,d,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),o=1/Ls.setFromMatrixColumn(t,1).length(),r=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,p=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+d*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u+_*a,e[4]=p*a-d,e[8]=r*c,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-p,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u-_*a,e[4]=-r*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*f,p=a*h,_=a*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=p*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*l,d=r*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,n){const s=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Xi.crossVectors(n,Dn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Xi.crossVectors(n,Dn)),Xi.normalize(),Fr.crossVectors(Dn,Xi),s[0]=Xi.x,s[4]=Fr.x,s[8]=Dn.x,s[1]=Xi.y,s[5]=Fr.y,s[9]=Dn.y,s[2]=Xi.z,s[6]=Fr.z,s[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],M=n[7],x=n[11],S=n[15],b=s[0],w=s[4],y=s[8],E=s[12],A=s[1],L=s[5],P=s[9],C=s[13],D=s[2],I=s[6],k=s[10],G=s[14],X=s[3],V=s[7],J=s[11],it=s[15];return o[0]=r*b+a*A+l*D+c*X,o[4]=r*w+a*L+l*I+c*V,o[8]=r*y+a*P+l*k+c*J,o[12]=r*E+a*C+l*G+c*it,o[1]=h*b+f*A+u*D+d*X,o[5]=h*w+f*L+u*I+d*V,o[9]=h*y+f*P+u*k+d*J,o[13]=h*E+f*C+u*G+d*it,o[2]=p*b+_*A+g*D+m*X,o[6]=p*w+_*L+g*I+m*V,o[10]=p*y+_*P+g*k+m*J,o[14]=p*E+_*C+g*G+m*it,o[3]=v*b+M*A+x*D+S*X,o[7]=v*w+M*L+x*I+S*V,o[11]=v*y+M*P+x*k+S*J,o[15]=v*E+M*C+x*G+S*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],v=l*d-c*u,M=a*d-c*f,x=a*u-l*f,S=r*d-c*h,b=r*u-l*h,w=r*f-a*h;return e*(_*v-g*M+m*x)-n*(p*v-g*S+m*b)+s*(p*M-_*S+m*w)-o*(p*x-_*b+g*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-a*c)-n*(o*h-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=e*a-n*r,M=e*l-s*r,x=e*c-o*r,S=n*l-s*a,b=n*c-o*a,w=s*c-o*l,y=h*_-f*p,E=h*g-u*p,A=h*m-d*p,L=f*g-u*_,P=f*m-d*_,C=u*m-d*g,D=v*C-M*P+x*L+S*A-b*E+w*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return t[0]=(a*C-l*P+c*L)*I,t[1]=(s*P-n*C-o*L)*I,t[2]=(_*w-g*b+m*S)*I,t[3]=(u*b-f*w-d*S)*I,t[4]=(l*A-r*C-c*E)*I,t[5]=(e*C-s*A+o*E)*I,t[6]=(g*x-p*w-m*M)*I,t[7]=(h*w-u*x+d*M)*I,t[8]=(r*P-a*A+c*y)*I,t[9]=(n*A-e*P-o*y)*I,t[10]=(p*b-_*x+m*v)*I,t[11]=(f*x-h*b-d*v)*I,t[12]=(a*E-r*L-l*y)*I,t[13]=(e*L-n*E+s*y)*I,t[14]=(_*M-p*S-g*v)*I,t[15]=(h*S-f*M+u*v)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,f=a+a,u=o*c,d=o*h,p=o*f,_=r*h,g=r*f,m=a*f,v=l*c,M=l*h,x=l*f,S=n.x,b=n.y,w=n.z;return s[0]=(1-(_+m))*S,s[1]=(d+x)*S,s[2]=(p-M)*S,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(u+m))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(p+M)*w,s[9]=(g-v)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Ls.set(s[0],s[1],s[2]).length();const a=Ls.set(s[4],s[5],s[6]).length(),l=Ls.set(s[8],s[9],s[10]).length();o<0&&(r=-r),Zn.copy(this);const c=1/r,h=1/a,f=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,e.setFromRotationMatrix(Zn),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=ti,l=!1){const c=this.elements,h=2*o/(e-t),f=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,_;if(l)p=o/(r-o),_=r*o/(r-o);else if(a===ti)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===_o)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=ti,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let p,_;if(l)p=1/(r-o),_=r/(r-o);else if(a===ti)p=-2/(r-o),_=-(r+o)/(r-o);else if(a===_o)p=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Mc.prototype.isMatrix4=!0;let be=Mc;const Ls=new F,Zn=new be,ep=new F(0,0,0),np=new F(1,1,1),Xi=new F,Fr=new F,Dn=new F,eh=new be,nh=new zi;class Si{constructor(t=0,e=0,n=0,s=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nh.setFromEuler(this),this.setFromQuaternion(nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ip=0;const ih=new F,Ds=new zi,Ei=new be,Or=new F,Ao=new F,sp=new F,op=new zi,sh=new F(1,0,0),oh=new F(0,1,0),rh=new F(0,0,1),ah={type:"added"},rp={type:"removed"},Is={type:"childadded",child:null},jc={type:"childremoved",child:null};class we extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new F,e=new Si,n=new zi,s=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(sh,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return ih.copy(t).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sh,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Ao,Or,this.up):Ei.lookAt(Or,Ao,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ah),Is.child=t,this.dispatchEvent(Is),Is.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ah),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}we.DEFAULT_UP=new F(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class de extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ap={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function tl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=v0(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=tl(r,o,t+1/3),this.g=tl(r,o,t),this.b=tl(r,o,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function n(o){o!==void 0&&parseFloat(o)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Tf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ce.workingToColorSpace(an.copy(this),t),Math.round(oe(an.r*255,0,255))*65536+Math.round(oe(an.g*255,0,255))*256+Math.round(oe(an.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(an.copy(this),e);const n=an.r,s=an.g,o=an.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=h<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=tn){ce.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,s=an.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Br);const n=or(qi.h,Br.h,e),s=or(qi.s,Br.s,e),o=or(qi.l,Br.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const an=new Zt;Zt.NAMES=Tf;class Dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class y0 extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const $n=new F,Ti=new F,el=new F,Ai=new F,Us=new F,Ns=new F,ch=new F,nl=new F,il=new F,sl=new F,ol=new Ie,rl=new Ie,al=new Ie;class Fn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){$n.subVectors(s,e),Ti.subVectors(n,e),el.subVectors(t,e);const r=$n.dot($n),a=$n.dot(Ti),l=$n.dot(el),c=Ti.dot(Ti),h=Ti.dot(el),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,p=(r*h-a*l)*u;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ai.x),l.addScaledVector(r,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return ol.setScalar(0),rl.setScalar(0),al.setScalar(0),ol.fromBufferAttribute(t,e),rl.fromBufferAttribute(t,n),al.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(ol,o.x),r.addScaledVector(rl,o.y),r.addScaledVector(al,o.z),r}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Ti.subVectors(t,e),$n.cross(Ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),$n.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Us.subVectors(s,n),Ns.subVectors(o,n),nl.subVectors(t,n);const l=Us.dot(nl),c=Ns.dot(nl);if(l<=0&&c<=0)return e.copy(n);il.subVectors(t,s);const h=Us.dot(il),f=Ns.dot(il);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Us,r);sl.subVectors(t,o);const d=Us.dot(sl),p=Ns.dot(sl);if(p>=0&&d<=p)return e.copy(o);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ns,a);const g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return ch.subVectors(o,s),a=(f-h)/(f-h+(d-p)),e.copy(s).addScaledVector(ch,a);const m=1/(g+_+u);return r=_*m,a=u*m,e.copy(n).addScaledVector(Us,r).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class cs{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Kn):Kn.fromBufferAttribute(o,r),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),kr.subVectors(this.max,Ro),Fs.subVectors(t.a,Ro),Os.subVectors(t.b,Ro),Bs.subVectors(t.c,Ro),Yi.subVectors(Os,Fs),Zi.subVectors(Bs,Os),fs.subVectors(Fs,Bs);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-fs.z,fs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,fs.z,0,-fs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-fs.y,fs.x,0];return!cl(e,Fs,Os,Bs,kr)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,Fs,Os,Bs,kr))?!1:(Gr.crossVectors(Yi,Zi),e=[Gr.x,Gr.y,Gr.z],cl(e,Fs,Os,Bs,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ri=[new F,new F,new F,new F,new F,new F,new F,new F],Kn=new F,zr=new cs,Fs=new F,Os=new F,Bs=new F,Yi=new F,Zi=new F,fs=new F,Ro=new F,kr=new F,Gr=new F,ds=new F;function cl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ds.fromArray(i,o);const a=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),l=t.dot(ds),c=e.dot(ds),h=n.dot(ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const He=new F,Hr=new St;let cp=0;class On extends ki{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=x0,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),o=Me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class b0 extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class w0 extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}}const lp=new cs,Co=new F,ll=new F;class yo{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const e=Co.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Co,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(ll)),this.expandByPoint(Co.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hp=0;const kn=new be,hl=new we,zs=new F,In=new cs,Po=new cs,Ze=new F;class Re extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?w0:b0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];In.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(In.min,Po.min),In.expandByPoint(Ze),Ze.addVectors(In.max,Po.max),In.expandByPoint(Ze)):(In.expandByPoint(Po.min),In.expandByPoint(Po.max))}In.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ze.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(t,c),Ze.add(zs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new On(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new F,l[y]=new F;const c=new F,h=new F,f=new F,u=new St,d=new St,p=new St,_=new F,g=new F;function m(y,E,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,A),u.fromBufferAttribute(o,y),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,A),h.sub(c),f.sub(c),d.sub(u),p.sub(u);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[y].add(_),a[E].add(_),a[A].add(_),l[y].add(g),l[E].add(g),l[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,E=v.length;y<E;++y){const A=v[y],L=A.start,P=A.count;for(let C=L,D=L+P;C<D;C+=3)m(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new F,x=new F,S=new F,b=new F;function w(y){S.fromBufferAttribute(s,y),b.copy(S);const E=a[y];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(b,E);const L=x.dot(l[y])<0?-1:1;r.setXYZW(y,M.x,M.y,M.z,L)}for(let y=0,E=v.length;y<E;++y){const A=v[y],L=A.start,P=A.count;for(let C=L,D=L+P;C<D;C+=3)w(t.getX(C+0)),w(t.getX(C+1)),w(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new F,o=new F,r=new F,a=new F,l=new F,c=new F,h=new F,f=new F;if(t)for(let u=0,d=t.count;u<d;u+=3){const p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(s,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new On(u,h,f)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],f=o[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Af{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=x0,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const mn=new F;class yr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),o=Me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){Mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new On(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ul=new F,up=new F,fp=new jt;class fi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ul.subVectors(n,e).cross(up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ul),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fp.getNormalMatrix(t),s=this.coplanarPoint(ul).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let dp=0;class ls extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=io,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=n0,this.blendDst=i0,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new St().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class E0 extends ls{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ks;const Lo=new F,Gs=new F,Hs=new F,Vs=new St,Do=new St,Rf=new be,Vr=new F,Io=new F,Wr=new F,lh=new St,fl=new St,hh=new St;class Cf extends we{constructor(t=new E0){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Af(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new yr(n,3,0,!1)),ks.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new St(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&he('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Hs.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Xr(Vr.set(-.5,-.5,0),Hs,r,Gs,s,o),Xr(Io.set(.5,-.5,0),Hs,r,Gs,s,o),Xr(Wr.set(.5,.5,0),Hs,r,Gs,s,o),lh.set(0,0),fl.set(1,0),hh.set(1,1);let a=t.ray.intersectTriangle(Vr,Io,Wr,!1,Lo);if(a===null&&(Xr(Io.set(-.5,.5,0),Hs,r,Gs,s,o),fl.set(0,1),a=t.ray.intersectTriangle(Vr,Wr,Io,!1,Lo),a===null))return;const l=t.ray.origin.distanceTo(Lo);l<t.near||l>t.far||e.push({distance:l,point:Lo.clone(),uv:Fn.getInterpolation(Lo,Vr,Io,Wr,lh,fl,hh,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(i,t,e,n,s,o){Vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Do.x=o*Vs.x-s*Vs.y,Do.y=s*Vs.x+o*Vs.y):Do.copy(Vs),i.copy(t),i.x+=Do.x,i.y+=Do.y,i.applyMatrix4(Rf)}const Ci=new F,dl=new F,qr=new F,Yr=new F;class T0{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){dl.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Yr.copy(this.origin).sub(dl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(qr),a=Yr.dot(this.direction),l=-Yr.dot(qr),c=Yr.lengthSq(),h=Math.abs(1-r*r);let f,u,d,p;if(h>0)if(f=r*l-a,u=r*a-l,p=o*h,f>=0)if(u>=-p)if(u<=p){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*l)+c}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-o,-l),o),d=u*(u+2*l)+c):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-l),o),d=-f*f+u*(u+2*l)+c);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dl).addScaledVector(qr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-r.x,u=t.y-r.y,d=t.z-r.z,p=e.x-r.x,_=e.y-r.y,g=e.z-r.z,m=n.x-r.x,v=n.y-r.y,M=n.z-r.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(h);let w,y,E,A,L,P,C,D,I,k,G,X;if(x>=S&&x>=b?(E=l,P=f,I=p,X=m,l>=0?(w=c,y=h,A=u,L=d,C=_,D=g,k=v,G=M):(w=h,y=c,A=d,L=u,C=g,D=_,k=M,G=v)):S>=b?(E=c,P=u,I=_,X=v,c>=0?(w=h,y=l,A=d,L=f,C=g,D=p,k=M,G=m):(w=l,y=h,A=f,L=d,C=p,D=g,k=m,G=M)):(E=h,P=d,I=g,X=M,h>=0?(w=l,y=c,A=f,L=u,C=p,D=_,k=m,G=v):(w=c,y=l,A=u,L=f,C=_,D=p,k=v,G=m)),E===0)return null;const V=w/E,J=y/E,it=1/E,vt=A-V*P,j=L-J*P,Mt=C-V*I,lt=D-J*I,ct=k-V*X,z=G-J*X,$=ct*lt-z*Mt,pt=vt*z-j*ct,bt=Mt*j-lt*vt;if(s){if($<0||pt<0||bt<0)return null}else if(($<0||pt<0||bt<0)&&($>0||pt>0||bt>0))return null;const H=$+pt+bt;if(H===0)return null;const ht=it*($*P+pt*I+bt*X);return(H>0?ht<0:ht>0)?null:this.at(ht/H,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const uh=new be,ps=new T0,Zr=new yo,fh=new F,$r=new F,Kr=new F,Jr=new F,pl=new F,Qr=new F,dh=new F,jr=new F;class re extends we{constructor(t=new Re,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Qr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],f=o[l];h!==0&&(pl.fromBufferAttribute(f,t),r?Qr.addScaledVector(pl,h):Qr.addScaledVector(pl.sub(e),h))}e.add(Qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(o),ps.copy(t.ray).recast(t.near),!(Zr.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Zr,fh)===null||ps.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(o).invert(),ps.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,S=M;x<S;x+=3){const b=a.getX(x),w=a.getX(x+1),y=a.getX(x+2);s=ta(this,m,t,n,c,h,f,b,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=ta(this,r,t,n,c,h,f,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=r[g.materialIndex],v=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,S=M;x<S;x+=3){const b=x,w=x+1,y=x+2;s=ta(this,m,t,n,c,h,f,b,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=g,M=g+1,x=g+2;s=ta(this,r,t,n,c,h,f,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function pp(i,t,e,n,s,o,r,a){let l;if(t.side===fn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ei,a),l===null)return null;jr.copy(a),jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:i}}function ta(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,$r),i.getVertexPosition(l,Kr),i.getVertexPosition(c,Jr);const h=pp(i,t,e,n,$r,Kr,Jr,dh);if(h){const f=new F;Fn.getBarycoord(dh,$r,Kr,Jr,f),s&&(h.uv=Fn.getInterpolatedAttribute(s,a,l,c,f,new St)),o&&(h.uv1=Fn.getInterpolatedAttribute(o,a,l,c,f,new St)),r&&(h.normal=Fn.getInterpolatedAttribute(r,a,l,c,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};Fn.getNormal($r,Kr,Jr,u.normal),h.face=u,h.barycoord=f}return h}class Ic extends Qe{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Je,h=Je,f,u){super(null,r,a,l,c,h,s,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends On{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ws=new be,ph=new be,ea=[],mh=new cs,mp=new be,Uo=new re,No=new yo;class yi extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),mh.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(mh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),No.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),t.ray.intersectsSphere(No)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ws),ph.multiplyMatrices(n,Ws),Uo.matrixWorld=ph,Uo.raycast(t,ea);for(let r=0,a=ea.length;r<a;r++){const l=ea[r];l.instanceId=o,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ic(new Float32Array(s*this.count),s,this.count,Ec,Wn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ms=new yo,gp=new St(.5,.5),na=new F;class Uc{constructor(t=new fi,e=new fi,n=new fi,s=new fi,o=new fi,r=new fi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],f=o[5],u=o[6],d=o[7],p=o[8],_=o[9],g=o[10],m=o[11],v=o[12],M=o[13],x=o[14],S=o[15];if(s[0].setComponents(c-r,d-h,m-p,S-v).normalize(),s[1].setComponents(c+r,d+h,m+p,S+v).normalize(),s[2].setComponents(c+a,d+f,m+_,S+M).normalize(),s[3].setComponents(c-a,d-f,m-_,S-M).normalize(),n)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,d-u,m-g,S-x).normalize();else if(s[4].setComponents(c-l,d-u,m-g,S-x).normalize(),e===ti)s[5].setComponents(c+l,d+u,m+g,S+x).normalize();else if(e===_o)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);const e=gp.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class A0 extends Qe{constructor(t=[],e=os,n,s,o,r,a,l,c,h){super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nc extends Qe{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xo extends Qe{constructor(t,e,n=ii,s,o,r,a=Je,l=Je,c,h=Mi,f=1){if(h!==Mi&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Pf extends xo{constructor(t,e=ii,n=os,s,o,r=Je,a=Je,l,c=Mi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,o,r,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class R0 extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pe extends Re{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],f=[];let u=0,d=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(f,2));function p(_,g,m,v,M,x,S,b,w,y,E){const A=x/w,L=S/y,P=x/2,C=S/2,D=b/2,I=w+1,k=y+1;let G=0,X=0;const V=new F;for(let J=0;J<k;J++){const it=J*L-C;for(let vt=0;vt<I;vt++){const j=vt*A-P;V[_]=j*v,V[g]=it*M,V[m]=D,c.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[m]=b>0?1:-1,h.push(V.x,V.y,V.z),f.push(vt/w),f.push(1-J/y),G+=1}}for(let J=0;J<y;J++)for(let it=0;it<w;it++){const vt=u+it+I*J,j=u+it+I*(J+1),Mt=u+(it+1)+I*(J+1),lt=u+(it+1)+I*J;l.push(vt,j,lt),l.push(j,Mt,lt),X+=6}a.addGroup(d,X,E),d+=X,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class bo extends Re{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new F,h=new St;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Cn extends Re{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],f=[],u=[],d=[];let p=0;const _=[],g=n/2;let m=0;v(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(d,2));function v(){const x=new F,S=new F;let b=0;const w=(e-t)/n;for(let y=0;y<=o;y++){const E=[],A=y/o,L=A*(e-t)+t;for(let P=0;P<=s;P++){const C=P/s,D=C*l+a,I=Math.sin(D),k=Math.cos(D);S.x=L*I,S.y=-A*n+g,S.z=L*k,f.push(S.x,S.y,S.z),x.set(I,w,k).normalize(),u.push(x.x,x.y,x.z),d.push(C,1-A),E.push(p++)}_.push(E)}for(let y=0;y<s;y++)for(let E=0;E<o;E++){const A=_[E][y],L=_[E+1][y],P=_[E+1][y+1],C=_[E][y+1];(t>0||E!==0)&&(h.push(A,L,C),b+=3),(e>0||E!==o-1)&&(h.push(L,P,C),b+=3)}c.addGroup(m,b,0),m+=b}function M(x){const S=p,b=new St,w=new F;let y=0;const E=x===!0?t:e,A=x===!0?1:-1;for(let P=1;P<=s;P++)f.push(0,g*A,0),u.push(0,A,0),d.push(.5,.5),p++;const L=p;for(let P=0;P<=s;P++){const D=P/s*l+a,I=Math.cos(D),k=Math.sin(D);w.x=E*k,w.y=g*A,w.z=E*I,f.push(w.x,w.y,w.z),u.push(0,A,0),b.x=I*.5+.5,b.y=k*.5*A+.5,d.push(b.x,b.y),p++}for(let P=0;P<s;P++){const C=S+P,D=L+P;x===!0?h.push(D,D+1,C):h.push(D+1,D,C),y+=3}c.addGroup(m,y,x===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fc extends Re{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(o.slice(),3)),this.setAttribute("uv",new ne(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new F,x=new F,S=new F;for(let b=0;b<e.length;b+=3)d(e[b+0],M),d(e[b+1],x),d(e[b+2],S),l(M,x,S,v)}function l(v,M,x,S){const b=S+1,w=[];for(let y=0;y<=b;y++){w[y]=[];const E=v.clone().lerp(x,y/b),A=M.clone().lerp(x,y/b),L=b-y;for(let P=0;P<=L;P++)P===0&&y===b?w[y][P]=E:w[y][P]=E.clone().lerp(A,P/L)}for(let y=0;y<b;y++)for(let E=0;E<2*(b-y)-1;E++){const A=Math.floor(E/2);E%2===0?(u(w[y][A+1]),u(w[y+1][A]),u(w[y][A])):(u(w[y][A+1]),u(w[y+1][A+1]),u(w[y+1][A]))}}function c(v){const M=new F;for(let x=0;x<o.length;x+=3)M.x=o[x+0],M.y=o[x+1],M.z=o[x+2],M.normalize().multiplyScalar(v),o[x+0]=M.x,o[x+1]=M.y,o[x+2]=M.z}function h(){const v=new F;for(let M=0;M<o.length;M+=3){v.x=o[M+0],v.y=o[M+1],v.z=o[M+2];const x=g(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;r.push(x,1-S)}p(),f()}function f(){for(let v=0;v<r.length;v+=6){const M=r[v+0],x=r[v+2],S=r[v+4],b=Math.max(M,x,S),w=Math.min(M,x,S);b>.9&&w<.1&&(M<.2&&(r[v+0]+=1),x<.2&&(r[v+2]+=1),S<.2&&(r[v+4]+=1))}}function u(v){o.push(v.x,v.y,v.z)}function d(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){const v=new F,M=new F,x=new F,S=new F,b=new St,w=new St,y=new St;for(let E=0,A=0;E<o.length;E+=9,A+=6){v.set(o[E+0],o[E+1],o[E+2]),M.set(o[E+3],o[E+4],o[E+5]),x.set(o[E+6],o[E+7],o[E+8]),b.set(r[A+0],r[A+1]),w.set(r[A+2],r[A+3]),y.set(r[A+4],r[A+5]),S.copy(v).add(M).add(x).divideScalar(3);const L=g(S);_(b,A+0,v,L),_(w,A+2,M,L),_(y,A+4,x,L)}}function _(v,M,x,S){S<0&&v.x===1&&(r[M]=v.x-1),x.x===0&&x.z===0&&(r[M]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fc(t.vertices,t.indices,t.radius,t.detail)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,d=(r-h)/u;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new St:new F);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new F,s=[],o=[],r=[],a=new F,l=new be;for(let d=0;d<=t;d++){const p=d/t;s[d]=this.getTangentAt(p,new F)}o[0]=new F,r[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(oe(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,p))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(oe(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let p=1;p<=t;p++)o[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oc extends ri{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lf extends Oc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function C0(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,f){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+f)+(l-a)/f;u*=h,d*=h,s(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const gh=new F,_h=new F,ml=new C0,gl=new C0,_l=new C0;class Bc extends ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(_h.subVectors(s[0],s[1]).add(s[0]),c=_h);const f=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(gh.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=gh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),ml.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,_,g),gl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,_,g),_l.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),gl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_l.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(ml.calc(l),gl.calc(l),_l.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function _p(i,t){const e=1-i;return e*e*t}function xp(i,t){return 2*(1-i)*i*t}function vp(i,t){return i*i*t}function rr(i,t,e,n){return _p(i,t)+xp(i,e)+vp(i,n)}function Mp(i,t){const e=1-i;return e*e*e*t}function Sp(i,t){const e=1-i;return 3*e*e*i*t}function yp(i,t){return 3*(1-i)*i*i*t}function bp(i,t){return i*i*i*t}function ar(i,t,e,n,s){return Mp(i,t)+Sp(i,e)+yp(i,n)+bp(i,s)}class P0 extends ri{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ar(t,s.x,o.x,r.x,a.x),ar(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Df extends ri{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ar(t,s.x,o.x,r.x,a.x),ar(t,s.y,o.y,r.y,a.y),ar(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class L0 extends ri{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class If extends ri{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D0 extends ri{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(rr(t,s.x,o.x,r.x),rr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zc extends ri{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(rr(t,s.x,o.x,r.x),rr(t,s.y,o.y,r.y),rr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I0 extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(xh(a,l.x,c.x,h.x,f.x),xh(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var pc=Object.freeze({__proto__:null,ArcCurve:Lf,CatmullRomCurve3:Bc,CubicBezierCurve:P0,CubicBezierCurve3:Df,EllipseCurve:Oc,LineCurve:L0,LineCurve3:If,QuadraticBezierCurve:D0,QuadraticBezierCurve3:zc,SplineCurve:I0});class Uf extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new pc[s.type]().fromJSON(s))}return this}}class kl extends Uf{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new L0(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new D0(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new P0(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new I0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Oc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class kc extends kl{constructor(t){super(t),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new kl().fromJSON(s))}return this}}function wp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Nf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Cp(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let h=a,f=l;for(let u=e;u<s;u+=e){const d=i[u],p=i[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return br(o,r,e,a,l,c,0),r}function Nf(i,t,e,n,s){let o;if(s===kp(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=vh(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=vh(r/n|0,i[r],i[r+1],o);return o&&vo(o,o.next)&&(Er(o),o=o.next),o}function Ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vo(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Up(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?Tp(i,n,s,o):Ep(i)){t.push(l.i,i.i,c.i),Er(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Ap(Ts(i),t),br(i,t,e,n,s,o,2)):r===2&&Rp(i,t,e,n,s,o):br(Ts(i),t,e,n,s,o,1);break}}}function Ep(i){const t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,o,r),f=Math.min(a,l,c),u=Math.max(s,o,r),d=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Go(s,a,o,l,r,c,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Tp(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ne(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,f=o.y,u=r.y,d=Math.min(a,l,c),p=Math.min(h,f,u),_=Math.max(a,l,c),g=Math.max(h,f,u),m=Gl(d,p,t,e,n),v=Gl(_,g,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=m&&x&&x.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==r&&Go(a,h,l,f,c,u,M.x,M.y)&&Ne(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Go(a,h,l,f,c,u,x.x,x.y)&&Ne(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==r&&Go(a,h,l,f,c,u,M.x,M.y)&&Ne(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==r&&Go(a,h,l,f,c,u,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ap(i,t){let e=i;do{const n=e.prev,s=e.next.next;!vo(n,s)&&Of(n,e,e.next,s)&&wr(n,s)&&wr(s,n)&&(t.push(n.i,e.i,s.i),Er(e),Er(e.next),e=i=s),e=e.next}while(e!==i);return Ts(e)}function Rp(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Op(r,a)){let l=Bf(r,a);r=Ts(r,r.next),l=Ts(l,l.next),br(r,t,e,n,s,o,0),br(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Cp(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Nf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fp(c))}s.sort(Pp);for(let o=0;o<s.length;o++)e=Lp(s[o],e);return e}function Pp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Lp(i,t){const e=Dp(i,t);if(!e)return t;const n=Bf(e,i);return Ts(n,n.next),Ts(e,e.next)}function Dp(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(vo(i,e))return e;do{if(vo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ff(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);wr(e,i)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&Ip(r,e)))&&(r=e,h=f)}e=e.next}while(e!==a);return r}function Ip(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function Up(i,t,e,n){let s=i;do s.z===0&&(s.z=Gl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Np(s)}function Np(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function Gl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ff(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Go(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&Ff(i,t,e,n,s,o,r,a)}function Op(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bp(i,t)&&(wr(i,t)&&wr(t,i)&&zp(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||vo(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vo(i,t){return i.x===t.x&&i.y===t.y}function Of(i,t,e,n){const s=sa(Ne(i,t,e)),o=sa(Ne(i,t,n)),r=sa(Ne(e,n,i)),a=sa(Ne(e,n,t));return!!(s!==o&&r!==a||s===0&&ia(i,e,t)||o===0&&ia(i,n,t)||r===0&&ia(e,i,n)||a===0&&ia(e,t,n))}function ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sa(i){return i>0?1:i<0?-1:0}function Bp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Of(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wr(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function zp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bf(i,t){const e=Hl(i.i,i.x,i.y),n=Hl(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function vh(i,t,e,n){const s=Hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kp(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Gp{static triangulate(t,e,n=2){return wp(t,e,n)}}class Ui{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Ui.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Mh(t),Sh(n,t);let r=t.length;e.forEach(Mh);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Sh(n,e[l]);const a=Gp.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Mh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Lr extends Re{constructor(t=new kc([new St(.5,.5),new St(-.5,.5),new St(-.5,-.5),new St(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Hp;let M,x=!1,S,b,w,y;if(m){M=m.getSpacedPoints(h),x=!0,u=!1;const Y=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,Y),b=new F,w=new F,y=new F}u||(g=0,d=0,p=0,_=0);const E=a.extractPoints(c);let A=E.shape;const L=E.holes;if(!Ui.isClockWise(A)){A=A.reverse();for(let Y=0,tt=L.length;Y<tt;Y++){const B=L[Y];Ui.isClockWise(B)&&(L[Y]=B.reverse())}}function C(Y){const B=10000000000000001e-36;let Z=Y[0];for(let at=1;at<=Y.length;at++){const xt=at%Y.length,yt=Y[xt],At=yt.x-Z.x,Bt=yt.y-Z.y,O=At*At+Bt*Bt,$t=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(Z.x),Math.abs(Z.y)),Xt=B*$t*$t;if(O<=Xt){Y.splice(xt,1),at--;continue}Z=yt}}C(A),L.forEach(C);const D=L.length,I=A;for(let Y=0;Y<D;Y++){const tt=L[Y];A=A.concat(tt)}function k(Y,tt,B){return tt||he("ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(tt,B)}const G=A.length;function X(Y,tt,B){let Z,at,xt;const yt=Y.x-tt.x,At=Y.y-tt.y,Bt=B.x-Y.x,O=B.y-Y.y,$t=yt*yt+At*At,Xt=yt*O-At*Bt;if(Math.abs(Xt)>Number.EPSILON){const U=Math.sqrt($t),T=Math.sqrt(Bt*Bt+O*O),K=tt.x-At/U,Q=tt.y+yt/U,ut=B.x-O/T,Et=B.y+Bt/T,Rt=((ut-K)*O-(Et-Q)*Bt)/(yt*O-At*Bt);Z=K+yt*Rt-Y.x,at=Q+At*Rt-Y.y;const ft=Z*Z+at*at;if(ft<=2)return new St(Z,at);xt=Math.sqrt(ft/2)}else{let U=!1;yt>Number.EPSILON?Bt>Number.EPSILON&&(U=!0):yt<-Number.EPSILON?Bt<-Number.EPSILON&&(U=!0):Math.sign(At)===Math.sign(O)&&(U=!0),U?(Z=-At,at=yt,xt=Math.sqrt($t)):(Z=yt,at=At,xt=Math.sqrt($t/2))}return new St(Z/xt,at/xt)}const V=[];for(let Y=0,tt=I.length,B=tt-1,Z=Y+1;Y<tt;Y++,B++,Z++)B===tt&&(B=0),Z===tt&&(Z=0),V[Y]=X(I[Y],I[B],I[Z]);const J=[];let it,vt=V.concat();for(let Y=0,tt=D;Y<tt;Y++){const B=L[Y];it=[];for(let Z=0,at=B.length,xt=at-1,yt=Z+1;Z<at;Z++,xt++,yt++)xt===at&&(xt=0),yt===at&&(yt=0),it[Z]=X(B[Z],B[xt],B[yt]);J.push(it),vt=vt.concat(it)}let j;if(g===0)j=Ui.triangulateShape(I,L);else{const Y=[],tt=[];for(let B=0;B<g;B++){const Z=B/g,at=d*Math.cos(Z*Math.PI/2),xt=p*Math.sin(Z*Math.PI/2)+_;for(let yt=0,At=I.length;yt<At;yt++){const Bt=k(I[yt],V[yt],xt);pt(Bt.x,Bt.y,-at),Z===0&&Y.push(Bt)}for(let yt=0,At=D;yt<At;yt++){const Bt=L[yt];it=J[yt];const O=[];for(let $t=0,Xt=Bt.length;$t<Xt;$t++){const U=k(Bt[$t],it[$t],xt);pt(U.x,U.y,-at),Z===0&&O.push(U)}Z===0&&tt.push(O)}}j=Ui.triangulateShape(Y,tt)}const Mt=j.length,lt=p+_;for(let Y=0;Y<G;Y++){const tt=u?k(A[Y],vt[Y],lt):A[Y];x?(w.copy(S.normals[0]).multiplyScalar(tt.x),b.copy(S.binormals[0]).multiplyScalar(tt.y),y.copy(M[0]).add(w).add(b),pt(y.x,y.y,y.z)):pt(tt.x,tt.y,0)}for(let Y=1;Y<=h;Y++)for(let tt=0;tt<G;tt++){const B=u?k(A[tt],vt[tt],lt):A[tt];x?(w.copy(S.normals[Y]).multiplyScalar(B.x),b.copy(S.binormals[Y]).multiplyScalar(B.y),y.copy(M[Y]).add(w).add(b),pt(y.x,y.y,y.z)):pt(B.x,B.y,f/h*Y)}for(let Y=g-1;Y>=0;Y--){const tt=Y/g,B=d*Math.cos(tt*Math.PI/2),Z=p*Math.sin(tt*Math.PI/2)+_;for(let at=0,xt=I.length;at<xt;at++){const yt=k(I[at],V[at],Z);pt(yt.x,yt.y,f+B)}for(let at=0,xt=L.length;at<xt;at++){const yt=L[at];it=J[at];for(let At=0,Bt=yt.length;At<Bt;At++){const O=k(yt[At],it[At],Z);x?pt(O.x,O.y+M[h-1].y,M[h-1].x+B):pt(O.x,O.y,f+B)}}}ct(),z();function ct(){const Y=s.length/3;if(u){let tt=0,B=G*tt;for(let Z=0;Z<Mt;Z++){const at=j[Z];bt(at[2]+B,at[1]+B,at[0]+B)}tt=h+g*2,B=G*tt;for(let Z=0;Z<Mt;Z++){const at=j[Z];bt(at[0]+B,at[1]+B,at[2]+B)}}else{for(let tt=0;tt<Mt;tt++){const B=j[tt];bt(B[2],B[1],B[0])}for(let tt=0;tt<Mt;tt++){const B=j[tt];bt(B[0]+G*h,B[1]+G*h,B[2]+G*h)}}n.addGroup(Y,s.length/3-Y,0)}function z(){const Y=s.length/3;let tt=0;$(I,tt),tt+=I.length;for(let B=0,Z=L.length;B<Z;B++){const at=L[B];$(at,tt),tt+=at.length}n.addGroup(Y,s.length/3-Y,1)}function $(Y,tt){let B=Y.length;for(;--B>=0;){const Z=B;let at=B-1;at<0&&(at=Y.length-1);for(let xt=0,yt=h+g*2;xt<yt;xt++){const At=G*xt,Bt=G*(xt+1),O=tt+Z+At,$t=tt+at+At,Xt=tt+at+Bt,U=tt+Z+Bt;H(O,$t,Xt,U)}}}function pt(Y,tt,B){l.push(Y),l.push(tt),l.push(B)}function bt(Y,tt,B){ht(Y),ht(tt),ht(B);const Z=s.length/3,at=v.generateTopUV(n,s,Z-3,Z-2,Z-1);dt(at[0]),dt(at[1]),dt(at[2])}function H(Y,tt,B,Z){ht(Y),ht(tt),ht(Z),ht(tt),ht(B),ht(Z);const at=s.length/3,xt=v.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);dt(xt[0]),dt(xt[1]),dt(xt[3]),dt(xt[1]),dt(xt[2]),dt(xt[3])}function ht(Y){s.push(l[Y*3+0]),s.push(l[Y*3+1]),s.push(l[Y*3+2])}function dt(Y){o.push(Y.x),o.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new pc[s.type]().fromJSON(s)),new Lr(n,t.options)}}const Hp={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new St(o,r),new St(a,l),new St(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],p=t[s*3+2],_=t[o*3],g=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new St(r,1-l),new St(c,1-f),new St(u,1-p),new St(_,1-m)]:[new St(a,1-l),new St(h,1-f),new St(d,1-p),new St(g,1-m)]}};function Vp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hs extends Fc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hs(t.radius,t.detail)}}class oi extends Re{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*u-r;for(let M=0;M<c;M++){const x=M*f-o;p.push(x,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const M=v+c*m,x=v+c*(m+1),S=v+1+c*(m+1),b=v+1+c*m;d.push(M,x,b),d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gc extends Re{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new F,p=new St;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const m=o+g/n*r;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}f+=u}for(let _=0;_<s;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,M=v,x=v+n+1,S=v+n+2,b=v+1;a.push(M,x,b),a.push(x,S,b)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vn extends Re{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],f=new F,u=new F,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],M=m/n,x=r+M*a,S=t*Math.cos(x),b=Math.sqrt(t*t-S*S);let w=0;m===0&&r===0?w=.5/e:m===n&&l===Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){const E=y/e,A=s+E*o;f.x=-b*Math.cos(A),f.y=S,f.z=b*Math.sin(A),p.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(E+w,1-M),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const M=h[m][v+1],x=h[m][v],S=h[m+1][v],b=h[m+1][v+1];(m!==0||r>0)&&d.push(M,x,b),(m!==n-1||l<Math.PI)&&d.push(x,S,b)}this.setIndex(d),this.setAttribute("position",new ne(p,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xi extends Re{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new F,d=new F,p=new F;for(let _=0;_<=n;_++){const g=r+_/n*a;for(let m=0;m<=s;m++){const v=m/s*o;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){const m=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,M=(s+1)*(_-1)+g,x=(s+1)*_+g;l.push(m,v,x),l.push(v,M,x)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class wo extends Re{constructor(t=new zc(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new F,l=new F,c=new St;let h=new F;const f=[],u=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(d,2));function _(){for(let M=0;M<e;M++)g(M);g(o===!1?e:0),v(),m()}function g(M){h=t.getPointAt(M/e,h);const x=r.normals[M],S=r.binormals[M];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,y=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+y*S.x,l.y=E*x.y+y*S.y,l.z=E*x.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const S=(s+1)*(M-1)+(x-1),b=(s+1)*M+(x-1),w=(s+1)*M+x,y=(s+1)*(M-1)+x;p.push(S,b,y),p.push(b,w,y)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wo(new pc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Mo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(yh(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(yh(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){const t={};for(let e=0;e<i.length;e++){const n=Mo(i[e]);for(const s in n)t[s]=n[s]}return t}function yh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const kf={clone:Mo,merge:gn};var Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=Wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new St().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Gf extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cr extends ls{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Zt(16777215),this.specular=new Zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ee extends ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Cr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hf extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vf extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ea={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(bh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!bh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function bh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Wf{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Xf=new Wf;class Hc{constructor(t){this.manager=t!==void 0?t:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Hc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xs=new WeakMap;class qf extends Hc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ea.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let f=Xs.get(r);f===void 0&&(f=[],Xs.set(r,f)),f.push({onLoad:e,onError:s})}return r}const a=vr("img");function l(){h(),e&&e(this);const f=Xs.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Xs.delete(this),o.manager.itemEnd(t)}function c(f){h(),s&&s(f),Ea.remove(`image:${t}`);const u=Xs.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onError&&p.onError(f)}Xs.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ea.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class Yf extends Hc{constructor(t){super(t)}load(t,e,n,s){const o=new Qe,r=new qf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Vc extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class U0 extends Vc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const xl=new be,wh=new F,Eh=new F;class N0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xl,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;t.coordinateSystem===_o||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new F,ra=new zi,ci=new F;class F0 extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,ra,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,ra,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oa,ra,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,ra,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new F,Th=new St,Ah=new St;class en extends F0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,Th,Ah),e.subVectors(Ah,Th)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Yp extends N0{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}}class Zf extends Vc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Wc extends F0{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zp extends N0{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O0 extends Vc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Zp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const qs=-90,Ys=1;class $f extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(qs,Ys,t,e);s.layers=this.layers,this.add(s);const o=new en(qs,Ys,t,e);o.layers=this.layers,this.add(o);const r=new en(qs,Ys,t,e);r.layers=this.layers,this.add(r);const a=new en(qs,Ys,t,e);a.layers=this.layers,this.add(a);const l=new en(qs,Ys,t,e);l.layers=this.layers,this.add(l);const c=new en(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Kf extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Vl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Y0=class Y0{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};Y0.prototype.isMatrix2=!0;let Wl=Y0;class Jf extends ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Rh(i,t,e,n){const s=$p(n);switch(e){case g0:return i*t;case Ec:return i*t/s.components*s.byteLength;case Tc:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case Ac:return i*t*2/s.components*s.byteLength;case _0:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case Rc:return i*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:case Ga:return Math.max(i,16)*Math.max(t,8)/4;case Ba:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Ha:case Va:case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:case pr:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cc:case lc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mr:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $p(i){switch(i){case An:case f0:return{byteLength:1,components:1};case mo:case d0:case si:return{byteLength:2,components:1};case bc:case wc:return{byteLength:2,components:4};case ii:case yc:case Wn:return{byteLength:4,components:1};case p0:case m0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);function Qf(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Kp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){const p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){const _=f[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
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
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o1=`#ifdef USE_BATCHING
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
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h1=`#ifdef USE_IRIDESCENCE
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
#endif`,u1=`#ifdef USE_BUMPMAP
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,M1=`#define PI 3.141592653589793
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
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",R1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,V1=`#ifdef USE_ENVMAP
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
#endif`,W1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
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
#endif`,$1=`uniform sampler2D dfgLUT;
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
}`,K1=`
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
#endif`,J1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a2=`#if defined( USE_POINTS_UV )
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
#endif`,c2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d2=`#ifdef USE_MORPHTARGETS
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
#endif`,p2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M2=`#ifdef USE_NORMALMAP
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
#endif`,S2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F2=`float getShadowMask() {
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
}`,O2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,z2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k2=`#ifdef USE_SKINNING
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
#endif`,G2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X2=`#ifdef USE_TRANSMISSION
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
#endif`,q2=`#ifdef USE_TRANSMISSION
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q2=`uniform sampler2D t2D;
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
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
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
}`,sm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,rm=`#define DISTANCE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define MATCAP
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
}`,gm=`#define MATCAP
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
}`,_m=`#define NORMAL
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
}`,xm=`#define NORMAL
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
}`,vm=`#define PHONG
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
}`,Mm=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,bm=`#define TOON
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
}`,wm=`#define TOON
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
}`,Em=`uniform float size;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Rm=`uniform vec3 color;
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
}`,Cm=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Jp,alphahash_pars_fragment:Qp,alphamap_fragment:jp,alphamap_pars_fragment:t1,alphatest_fragment:e1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:s1,batching_pars_vertex:o1,batching_vertex:r1,begin_vertex:a1,beginnormal_vertex:c1,bsdfs:l1,iridescence_fragment:h1,bumpmap_pars_fragment:u1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:x1,color_vertex:v1,common:M1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:y1,displacementmap_pars_vertex:b1,displacementmap_vertex:w1,emissivemap_fragment:E1,emissivemap_pars_fragment:T1,colorspace_fragment:A1,colorspace_pars_fragment:R1,envmap_fragment:C1,envmap_common_pars_fragment:P1,envmap_pars_fragment:L1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:V1,envmap_vertex:I1,fog_vertex:U1,fog_pars_vertex:N1,fog_fragment:F1,fog_pars_fragment:O1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:z1,lights_lambert_fragment:k1,lights_lambert_pars_fragment:G1,lights_pars_begin:H1,lights_toon_fragment:W1,lights_toon_pars_fragment:X1,lights_phong_fragment:q1,lights_phong_pars_fragment:Y1,lights_physical_fragment:Z1,lights_physical_pars_fragment:$1,lights_fragment_begin:K1,lights_fragment_maps:J1,lights_fragment_end:Q1,lightprobes_pars_fragment:j1,logdepthbuf_fragment:t2,logdepthbuf_pars_fragment:e2,logdepthbuf_pars_vertex:n2,logdepthbuf_vertex:i2,map_fragment:s2,map_pars_fragment:o2,map_particle_fragment:r2,map_particle_pars_fragment:a2,metalnessmap_fragment:c2,metalnessmap_pars_fragment:l2,morphinstance_vertex:h2,morphcolor_vertex:u2,morphnormal_vertex:f2,morphtarget_pars_vertex:d2,morphtarget_vertex:p2,normal_fragment_begin:m2,normal_fragment_maps:g2,normal_pars_fragment:_2,normal_pars_vertex:x2,normal_vertex:v2,normalmap_pars_fragment:M2,clearcoat_normal_fragment_begin:S2,clearcoat_normal_fragment_maps:y2,clearcoat_pars_fragment:b2,iridescence_pars_fragment:w2,opaque_fragment:E2,packing:T2,premultiplied_alpha_fragment:A2,project_vertex:R2,dithering_fragment:C2,dithering_pars_fragment:P2,roughnessmap_fragment:L2,roughnessmap_pars_fragment:D2,shadowmap_pars_fragment:I2,shadowmap_pars_vertex:U2,shadowmap_vertex:N2,shadowmask_pars_fragment:F2,skinbase_vertex:O2,skinning_pars_vertex:B2,skinning_vertex:z2,skinnormal_vertex:k2,specularmap_fragment:G2,specularmap_pars_fragment:H2,tonemapping_fragment:V2,tonemapping_pars_fragment:W2,transmission_fragment:X2,transmission_pars_fragment:q2,uv_pars_fragment:Y2,uv_pars_vertex:Z2,uv_vertex:$2,worldpos_vertex:K2,background_vert:J2,background_frag:Q2,backgroundCube_vert:j2,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:sm,distance_vert:om,distance_frag:rm,equirect_vert:am,equirect_frag:cm,linedashed_vert:lm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:fm,meshlambert_vert:dm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:xm,meshphong_vert:vm,meshphong_frag:Mm,meshphysical_vert:Sm,meshphysical_frag:ym,meshtoon_vert:bm,meshtoon_frag:wm,points_vert:Em,points_frag:Tm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},Ut={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Qn={basic:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:gn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:gn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:gn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Zt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:gn([Ut.points,Ut.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:gn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:gn([Ut.common,Ut.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:gn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:gn([Ut.sprite,Ut.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:gn([Ut.common,Ut.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:gn([Ut.lights,Ut.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Qn.physical={uniforms:gn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const aa={r:0,b:0,g:0},Lm=new be,jf=new jt;jf.set(-1,0,0,0,1,0,0,0,1);function Dm(i,t,e,n,s,o){const r=new Zt(0);let a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const x=v.backgroundBlurriness>0;M=t.get(M,x)}return M}function p(v){let M=!1;const x=d(v);x===null?g(r,a):x&&x.isColor&&(g(x,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,M){const x=d(M);x&&(x.isCubeTexture||x.mapping===Pr)?(c===void 0&&(c=new re(new Pe(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Mo(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jf),c.material.toneMapped=ce.getTransfer(x.colorSpace)!==_e,(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new re(new oi(2,2),new Pn({name:"BackgroundMaterial",uniforms:Mo(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ce.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(aa,zf(i)),e.buffers.color.setClear(aa.r,aa.g,aa.b,M,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),a=M,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(r,a)},render:p,addToRenderList:_,dispose:m}}function Im(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(L,P,C,D,I){let k=!1;const G=f(L,D,C,P);o!==G&&(o=G,c(o.object)),k=d(L,D,C,I),k&&p(L,D,C,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,x(L,P,C,D),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,P,C,D){const I=D.wireframe===!0;let k=n[P.id];k===void 0&&(k={},n[P.id]=k);const G=L.isInstancedMesh===!0?L.id:0;let X=k[G];X===void 0&&(X={},k[G]=X);let V=X[C.id];V===void 0&&(V={},X[C.id]=V);let J=V[I];return J===void 0&&(J=u(l()),V[I]=J),J}function u(L){const P=[],C=[],D=[];for(let I=0;I<e;I++)P[I]=0,C[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:D,object:L,attributes:{},index:null}}function d(L,P,C,D){const I=o.attributes,k=P.attributes;let G=0;const X=C.getAttributes();for(const V in X)if(X[V].location>=0){const it=I[V];let vt=k[V];if(vt===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(vt=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(vt=L.instanceColor)),it===void 0||it.attribute!==vt||vt&&it.data!==vt.data)return!0;G++}return o.attributesNum!==G||o.index!==D}function p(L,P,C,D){const I={},k=P.attributes;let G=0;const X=C.getAttributes();for(const V in X)if(X[V].location>=0){let it=k[V];it===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const vt={};vt.attribute=it,it&&it.data&&(vt.data=it.data),I[V]=vt,G++}o.attributes=I,o.attributesNum=G,o.index=D}function _(){const L=o.newAttributes;for(let P=0,C=L.length;P<C;P++)L[P]=0}function g(L){m(L,0)}function m(L,P){const C=o.newAttributes,D=o.enabledAttributes,I=o.attributeDivisors;C[L]=1,D[L]===0&&(i.enableVertexAttribArray(L),D[L]=1),I[L]!==P&&(i.vertexAttribDivisor(L,P),I[L]=P)}function v(){const L=o.newAttributes,P=o.enabledAttributes;for(let C=0,D=P.length;C<D;C++)P[C]!==L[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function M(L,P,C,D,I,k,G){G===!0?i.vertexAttribIPointer(L,P,C,I,k):i.vertexAttribPointer(L,P,C,D,I,k)}function x(L,P,C,D){_();const I=D.attributes,k=C.getAttributes(),G=P.defaultAttributeValues;for(const X in k){const V=k[X];if(V.location>=0){let J=I[X];if(J===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const it=J.normalized,vt=J.itemSize,j=t.get(J);if(j===void 0)continue;const Mt=j.buffer,lt=j.type,ct=j.bytesPerElement,z=lt===i.INT||lt===i.UNSIGNED_INT||J.gpuType===yc;if(J.isInterleavedBufferAttribute){const $=J.data,pt=$.stride,bt=J.offset;if($.isInstancedInterleavedBuffer){for(let H=0;H<V.locationSize;H++)m(V.location+H,$.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let H=0;H<V.locationSize;H++)g(V.location+H);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let H=0;H<V.locationSize;H++)M(V.location+H,vt/V.locationSize,lt,it,pt*ct,(bt+vt/V.locationSize*H)*ct,z)}else{if(J.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)m(V.location+$,J.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let $=0;$<V.locationSize;$++)g(V.location+$);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let $=0;$<V.locationSize;$++)M(V.location+$,vt/V.locationSize,lt,it,vt*ct,vt/V.locationSize*$*ct,z)}}else if(G!==void 0){const it=G[X];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(V.location,it);break;case 3:i.vertexAttrib3fv(V.location,it);break;case 4:i.vertexAttrib4fv(V.location,it);break;default:i.vertexAttrib1fv(V.location,it)}}}}v()}function S(){E();for(const L in n){const P=n[L];for(const C in P){const D=P[C];for(const I in D){const k=D[I];for(const G in k)h(k[G].object),delete k[G];delete D[I]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const P=n[L.id];for(const C in P){const D=P[C];for(const I in D){const k=D[I];for(const G in k)h(k[G].object),delete k[G];delete D[I]}}delete n[L.id]}function w(L){for(const P in n){const C=n[P];for(const D in C){const I=C[D];if(I[L.id]===void 0)continue;const k=I[L.id];for(const G in k)h(k[G].object),delete k[G];delete I[L.id]}}}function y(L){for(const P in n){const C=n[P],D=L.isInstancedMesh===!0?L.id:0,I=C[D];if(I!==void 0){for(const k in I){const G=I[k];for(const X in G)h(G[X].object),delete G[X];delete I[k]}delete C[D],Object.keys(C).length===0&&delete n[P]}}}function E(){A(),r=!0,o!==s&&(o=s,c(o.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Um(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function Nm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const y=w===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==An&&w!==Wn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,maxSamples:S,samples:b}}function Fm(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new fi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||o&&!g)o?h(null):c();else{const v=o?0:n,M=v*4;let x=m.clippingState||null;l.value=x,x=h(p,u,M,d);for(let S=0;S!==M;++S)x[S]=e[S];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=d;M!==_;++M,x+=4)r.copy(f[M]).applyMatrix4(v,a),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}const no=4,Om=6,Bm=20,zm=256,Fo=new Wc,Ch=new Zt;let vl=null,Ml=0,Sl=0,yl=!1;const km=new F,gs=new F;class Xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=km}=o;vl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,Ml,Sl),this._renderer.xr.enabled=yl,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:si,format:Xn,colorSpace:_r,depthBuffer:!1},s=Ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gm(o)),this._blurMaterial=Vm(o,t,e),this._ggxMaterial=Hm(o,t,e)}return s}_compileMaterial(t){const e=new re(new Re,t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,s,o){const l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Ch),f.toneMapping=ni,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new Pe,new bn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Ch),m=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[M],o.y,o.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[M]));const S=this._cubeSize;Zs(s,x*S,M>2?S:0,S,S),f.setRenderTarget(s),m&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===os||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-no?n-p+no:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Zs(o,g,m,3*_,2*_),s.setRenderTarget(o),s.render(a,Fo),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,Zs(t,g,m,3*_,2*_),s.setRenderTarget(t),s.render(a,Fo)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-no?s-this._lodMax+no:0),u=4*(this._cubeSize-h);Zs(e,f,u,3*h,2*h),r.setRenderTarget(e),r.render(l,Fo)}}function Gm(i){const t=[],e=[];let n=i;const s=i-no+1+Om;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let m=0;m<f;m++){const v=m%3*2/3-1,M=m>2?0:-1,x=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];p.set(x,d*u*m);for(let S=0;S<u;S++){const b=h[S*2]*2-1,w=h[S*2+1]*2-1;m===0?gs.set(1,w,b):m===1?gs.set(-b,1,-w):m===2?gs.set(-b,w,1):m===3?gs.set(-1,w,-b):m===4?gs.set(-b,-1,w):gs.set(b,w,-1),gs.toArray(_,(m*u+S)*d)}}const g=new Re;g.setAttribute("position",new On(p,d)),g.setAttribute("outputDirection",new On(_,d)),e.push(new re(g,null)),n>no&&n--}return{lodMeshes:e,sizeLods:t}}function Ph(i,t,e){const n=new qn(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hm(i,t,e){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Vm(i,t,e){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Lh(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Dh(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class B0 extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new A0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),o=new Pn({name:"CubemapFromEquirect",uniforms:Mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:gi});o.uniforms.tEquirect.value=e;const r=new re(s,o),a=e.minFilter;return e.minFilter===ts&&(e.minFilter=sn),new $f(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function Wm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?r(u):o(u)}function o(u){if(u&&u.isTexture){const d=u.mapping;if(d===jo||d===Sa)if(t.has(u)){const p=t.get(u).texture;return a(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new B0(p.height);return _.fromEquirectangularTexture(i,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,p=d===jo||d===Sa,_=d===os||d===Es;if(p||_){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Xl(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Xl(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===jo?u.mapping=os:d===Sa&&(u.mapping=Es),u}function l(u){let d=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){const d=u.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Xm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function qm(i,t,e,n){const s={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",r),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(d!==null){const v=d.array;_=d.version;for(let M=0,x=v.length;M<x;M+=3){const S=v[M+0],b=v[M+1],w=v[M+2];u.push(S,b,b,w,w,S)}}else{const v=p.array;_=p.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const S=M+0,b=M+1,w=M+2;u.push(S,b,b,w,w,S)}}const g=new(p.count>=65535?w0:b0)(u,1);g.version=_;const m=o.get(f);m&&t.remove(m),o.set(f,g)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Ym(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,u){i.drawElements(n,u,o,f*r),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,o,f*r,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Zm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:he("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t,e){const n=new WeakMap,s=new Ie;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*S*4*f),w=new M0(b,x,S,f);w.type=Wn,w.needsUpdate=!0;const y=M*4;for(let A=0;A<f;A++){const L=g[A],P=m[A],C=v[A],D=x*S*4*A;for(let I=0;I<L.count;I++){const k=I*y;d===!0&&(s.fromBufferAttribute(L,I),b[D+k+0]=s.x,b[D+k+1]=s.y,b[D+k+2]=s.z,b[D+k+3]=0),p===!0&&(s.fromBufferAttribute(P,I),b[D+k+4]=s.x,b[D+k+5]=s.y,b[D+k+6]=s.z,b[D+k+7]=0),_===!0&&(s.fromBufferAttribute(C,I),b[D+k+8]=s.x,b[D+k+9]=s.y,b[D+k+10]=s.z,b[D+k+11]=C.itemSize===4?s.w:1)}}u={count:f,texture:w,size:new St(x,S)},n.set(a,u),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Km(i,t,e,n,s){let o=new WeakMap;function r(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(o.get(u)!==h&&(t.update(u),o.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return u}function a(){o=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}const Jm={[s0]:"LINEAR_TONE_MAPPING",[o0]:"REINHARD_TONE_MAPPING",[r0]:"CINEON_TONE_MAPPING",[a0]:"ACES_FILMIC_TONE_MAPPING",[l0]:"AGX_TONE_MAPPING",[h0]:"NEUTRAL_TONE_MAPPING",[c0]:"CUSTOM_TONE_MAPPING"};function Qm(i,t,e,n,s,o){const r=new qn(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Re;c.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ne([0,2,0,0,2,0],2));const h=new Gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new re(c,h),u=new Wc(-1,1,1,-1,0,1);let d=null,p=null,_=!1,g,m=null,v=[],M=!1;this.setSize=function(x,S){r.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<v.length;b++){const w=v[b];w.setSize&&w.setSize(x,S)}},this.setEffects=function(x){v=x,M=v.length>0&&v[0].isRenderPass===!0;const S=r.width,b=r.height;v.length>0&&a===null&&(a=new qn(S,b,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new qn(S,b,{type:si,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){const y=v[w];y.setSize&&y.setSize(S,b)}},this.begin=function(x,S){if(_||x.toneMapping===ni&&v.length===0)return!1;if(m=S,S!==null){const b=S.width,w=S.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return M===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=ni,!0},this.hasRenderPass=function(){return M},this.end=function(x,S){x.toneMapping=g,_=!0;let b=r,w=a;for(let y=0;y<v.length;y++){const E=v[y];E.enabled!==!1&&(E.render(x,w,b,S),E.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,h.defines={},ce.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");const y=Jm[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(m),x.render(f,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const td=new Qe,ql=new xo(1,1),ed=new M0,nd=new Ef,id=new A0,Ih=[],Uh=[],Nh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function Eo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Ih[s];if(o===void 0&&(o=new Float32Array(s),Ih[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qc(i,t){let e=Uh[t];e===void 0&&(e=new Int32Array(t),Uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Oh.set(n),i.uniformMatrix2fv(this.addr,!1,Oh),Ye(e,n)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Ye(e,n)}}function og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),Ye(e,n)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(ql.compareFunction=e.isReversedDepthBuffer()?Pc:Cc,o=ql):o=td,e.setTexture2D(t||o,s)}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nd,s)}function gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||id,s)}function _g(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ed,s)}function xg(i){switch(i){case 5126:return jm;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return og;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return cg;case 35669:case 35673:return lg;case 5125:return hg;case 36294:return ug;case 36295:return fg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}function vg(i,t){i.uniform1fv(this.addr,t)}function Mg(i,t){const e=Eo(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){const e=Eo(t,this.size,3);i.uniform3fv(this.addr,e)}function yg(i,t){const e=Eo(t,this.size,4);i.uniform4fv(this.addr,e)}function bg(i,t){const e=Eo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wg(i,t){const e=Eo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Eg(i,t){const e=Eo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tg(i,t){i.uniform1iv(this.addr,t)}function Ag(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Cg(i,t){i.uniform4iv(this.addr,t)}function Pg(i,t){i.uniform1uiv(this.addr,t)}function Lg(i,t){i.uniform2uiv(this.addr,t)}function Dg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Ug(i,t,e){const n=this.cache,s=t.length,o=qc(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=ql:r=td;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function Ng(i,t,e){const n=this.cache,s=t.length,o=qc(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||nd,o[r])}function Fg(i,t,e){const n=this.cache,s=t.length,o=qc(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||id,o[r])}function Og(i,t,e){const n=this.cache,s=t.length,o=qc(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||ed,o[r])}function Bg(i){switch(i){case 5126:return vg;case 35664:return Mg;case 35665:return Sg;case 35666:return yg;case 35674:return bg;case 35675:return wg;case 35676:return Eg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Lg;case 36295:return Dg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}}class kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bg(e.type)}}class Gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function Bh(i,t){i.seq.push(t),i.map[t.id]=t}function Hg(i,t,e){const n=i.name,s=n.length;for(bl.lastIndex=0;;){const o=bl.exec(n),r=bl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Bh(e,c===void 0?new zg(a,i,t):new kg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Gg(a),Bh(e,f)),e=f}}}class Ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);Hg(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function zh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vg=37297;let Wg=0;function Xg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const kh=new jt;function qg(i){ce._getMatrix(kh,ce.workingColorSpace,i);const t=`mat3( ${kh.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case xr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Xg(i.getShaderSource(t),a)}else return o}function Yg(i,t){const e=qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Zg={[s0]:"Linear",[o0]:"Reinhard",[r0]:"Cineon",[a0]:"ACESFilmic",[l0]:"AgX",[h0]:"Neutral",[c0]:"Custom"};function $g(i,t){const e=Zg[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new F;function Kg(){ce.getLuminanceCoefficients(ca);const i=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Qg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ho(i){return i!==""}function Hh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(t3,n3)}const e3=new Map;function n3(i,t){let e=ie[t];if(e===void 0){const n=e3.get(t);if(n!==void 0)e=ie[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yl(e)}const i3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(i){return i.replace(i3,s3)}function s3(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Xh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const o3={[Qo]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function r3(i){return o3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a3={[os]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function c3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":a3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const l3={[Es]:"ENVMAP_MODE_REFRACTION"};function h3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":l3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u3={[Cr]:"ENVMAP_BLENDING_MULTIPLY",[cf]:"ENVMAP_BLENDING_MIX",[lf]:"ENVMAP_BLENDING_ADD"};function f3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":u3[i.combine]||"ENVMAP_BLENDING_NONE"}function d3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function p3(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=r3(e),c=c3(e),h=h3(e),f=f3(e),u=d3(e),d=Jg(e),p=Qg(o),_=s.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ho).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ho).join(`
`),m.length>0&&(m+=`
`)):(g=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),m=[Xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?ie.tonemapping_pars_fragment:"",e.toneMapping!==ni?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),Kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),r=Yl(r),r=Hh(r,e),r=Vh(r,e),a=Yl(a),a=Hh(a,e),a=Vh(a,e),r=Wh(r),a=Wh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+g+r,x=v+m+a,S=zh(s,s.VERTEX_SHADER,M),b=zh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(_)||"",C=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(b)||"",I=P.trim(),k=C.trim(),G=D.trim();let X=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,b);else{const J=Gh(s,S,"vertex"),it=Gh(s,b,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+J+`
`+it)}else I!==""?Qt("WebGLProgram: Program Info Log:",I):(k===""||G==="")&&(V=!1);V&&(L.diagnostics={runnable:X,programLog:I,vertexShader:{log:k,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(S),s.deleteShader(b),y=new Ta(s,_),E=jg(s,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,Vg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let m3=0;class g3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _3(t),e.set(t,n)),n}}class _3{constructor(t){this.id=m3++,this.code=t,this.usedTimes=0}}function x3(i){return i===rs||i===pr||i===mr}function v3(i,t,e,n,s,o){const r=new S0,a=new g3,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,E,A,L,P,C){const D=L.fog,I=P.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,X=t.get(y.envMap||k,G),V=X&&X.mapping===Pr?X.image.height:null,J=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Qt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const it=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,vt=it!==void 0?it.length:0;let j=0;I.morphAttributes.position!==void 0&&(j=1),I.morphAttributes.normal!==void 0&&(j=2),I.morphAttributes.color!==void 0&&(j=3);let Mt,lt,ct,z;if(J){const Tt=Qn[J];Mt=Tt.vertexShader,lt=Tt.fragmentShader}else{Mt=y.vertexShader,lt=y.fragmentShader;const Tt=a.getVertexShaderStage(y),wt=a.getFragmentShaderStage(y);a.update(y,Tt,wt),ct=Tt.id,z=wt.id}const $=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),bt=P.isInstancedMesh===!0,H=P.isBatchedMesh===!0,ht=!!y.map,dt=!!y.matcap,Y=!!X,tt=!!y.aoMap,B=!!y.lightMap,Z=!!y.bumpMap&&y.wireframe===!1,at=!!y.normalMap,xt=!!y.displacementMap,yt=!!y.emissiveMap,At=!!y.metalnessMap,Bt=!!y.roughnessMap,O=y.anisotropy>0,$t=y.clearcoat>0,Xt=y.dispersion>0,U=y.retroreflectivity>0,T=y.iridescence>0,K=y.sheen>0,Q=y.transmission>0,ut=O&&!!y.anisotropyMap,Et=$t&&!!y.clearcoatMap,Rt=$t&&!!y.clearcoatNormalMap,ft=$t&&!!y.clearcoatRoughnessMap,gt=T&&!!y.iridescenceMap,Pt=T&&!!y.iridescenceThicknessMap,Vt=K&&!!y.sheenColorMap,It=K&&!!y.sheenRoughnessMap,Lt=!!y.specularMap,Wt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,te=Q&&!!y.transmissionMap,q=Q&&!!y.thicknessMap,Ct=!!y.gradientMap,mt=!!y.alphaMap,Dt=y.alphaTest>0,Nt=!!y.alphaHash,N=!!y.extensions;let st=ni;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(st=i.toneMapping);const ot={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Mt,fragmentShader:lt,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:H,batchingColor:H&&P._colorsTexture!==null,instancing:bt,instancingColor:bt&&P.instanceColor!==null,instancingMorph:bt&&P.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ht,matcap:dt,envMap:Y,envMapMode:Y&&X.mapping,envMapCubeUVHeight:V,aoMap:tt,lightMap:B,bumpMap:Z,normalMap:at,displacementMap:xt,emissiveMap:yt,normalMapObjectSpace:at&&y.normalMapType===ff,normalMapTangentSpace:at&&y.normalMapType===gr,packedNormalMap:at&&y.normalMapType===gr&&x3(y.normalMap.format),metalnessMap:At,roughnessMap:Bt,anisotropy:O,anisotropyMap:ut,clearcoat:$t,clearcoatMap:Et,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ft,dispersion:Xt,retroreflection:U,iridescence:T,iridescenceMap:gt,iridescenceThicknessMap:Pt,sheen:K,sheenColorMap:Vt,sheenRoughnessMap:It,specularMap:Lt,specularColorMap:Wt,specularIntensityMap:Yt,transmission:Q,transmissionMap:te,thicknessMap:q,gradientMap:Ct,opaque:y.transparent===!1&&y.blending===io&&y.alphaToCoverage===!1,alphaMap:mt,alphaTest:Dt,alphaHash:Nt,combine:y.combine,mapUv:ht&&p(y.map.channel),aoMapUv:tt&&p(y.aoMap.channel),lightMapUv:B&&p(y.lightMap.channel),bumpMapUv:Z&&p(y.bumpMap.channel),normalMapUv:at&&p(y.normalMap.channel),displacementMapUv:xt&&p(y.displacementMap.channel),emissiveMapUv:yt&&p(y.emissiveMap.channel),metalnessMapUv:At&&p(y.metalnessMap.channel),roughnessMapUv:Bt&&p(y.roughnessMap.channel),anisotropyMapUv:ut&&p(y.anisotropyMap.channel),clearcoatMapUv:Et&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&p(y.sheenRoughnessMap.channel),specularMapUv:Lt&&p(y.specularMap.channel),specularColorMapUv:Wt&&p(y.specularColorMap.channel),specularIntensityMapUv:Yt&&p(y.specularIntensityMap.channel),transmissionMapUv:te&&p(y.transmissionMap.channel),thicknessMapUv:q&&p(y.thicknessMap.channel),alphaMapUv:mt&&p(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(at||O),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(ht||mt),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&at===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:j,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:ht&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:yt&&y.emissiveMap.isVideoTexture===!0&&ce.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nn,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:N&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(N&&y.extensions.multiDraw===!0||H)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function g(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)E.push(A),E.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(m(E,y),v(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function M(y){const E=d[y.type];let A;if(E){const L=Qn[E];A=kf.clone(L.uniforms)}else A=y.uniforms;return A}function x(y,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new p3(i,E,y,s),c.push(A),h.set(E,A)),A}function S(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:w}}function M3(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function S3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function qh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,_,g,m){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:p,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=p,v.materialVariant=r(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,d,p,_,g,m,v){v.reversedDepth===!0&&(g=-g);const M=a(u,d,p,_,g,m);p.transmission>0?n.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(u,d,p,_,g,m){const v=a(u,d,p,_,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||S3),n.length>1&&n.sort(d||qh),s.length>1&&s.sort(d||qh)}function f(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:h}}function y3(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Yh,i.set(n,[r])):s>=o.length?(r=new Yh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function b3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Zt};break;case"SpotLight":e={position:new F,direction:new F,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function w3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let E3=0;function T3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function A3(i){const t=new b3,e=w3(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,o=new be,r=new be;function a(c){let h=0,f=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,v=0,M=0,x=0,S=0,b=0,w=0,y=0,E=0,A=0;c.sort(T3);for(let P=0,C=c.length;P<C;P++){const D=c[P],I=D.color,k=D.intensity,G=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===rs?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=I.r*k,f+=I.g*k,u+=I.b*k;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],k);A++}else if(D.isSunLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,it=e.get(D);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=it,n.sunShadowMap[p]=X;const vt=J.getViewportCount();for(let j=0;j<vt;j++)n.sunShadowMatrix[_+j]=J.getMatrix(j),n.sunShadowCascade[_+j]=J._cascadeData[j];_+=vt,p++}n.sun[d]=V,d++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,it=e.get(D);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,n.directionalShadow[g]=it,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=D.shadow.matrix,S++}n.directional[g]=V,g++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(I).multiplyScalar(k),V.distance=G,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[v]=V;const J=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,J.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=J.matrix,D.castShadow){const it=e.get(D);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,n.spotShadow[v]=it,n.spotShadowMap[v]=X,w++}v++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(I).multiplyScalar(k),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[M]=V,M++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const J=D.shadow,it=e.get(D);it.shadowIntensity=J.intensity,it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,it.shadowCameraNear=J.camera.near,it.shadowCameraFar=J.camera.far,n.pointShadow[m]=it,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=V,m++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(k),V.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[x]=V,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==M||L.hemiLength!==x||L.numSunShadows!==p||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==w||L.numSpotMaps!==y||L.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=M,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,L.sunLength=d,L.directionalLength=g,L.pointLength=m,L.spotLength=v,L.rectAreaLength=M,L.hemiLength=x,L.numSunShadows=p,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=w,L.numSpotMaps=y,L.numLightProbes=A,n.version=E3++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const x=c[v];if(x.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),f++}else if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(x.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),r.identity(),o.copy(x.matrixWorld),o.premultiply(m),r.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Zh(i){const t=new A3(i),e=[],n=[],s=[];function o(u){f.camera=u,e.length=0,n.length=0,s.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function R3(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Zh(i),t.set(s,[a])):o>=r.length?(a=new Zh(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const C3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P3=`uniform sampler2D shadow_pass;
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
}`,L3=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],D3=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],$h=new be,Oo=new F,wl=new F;function I3(i,t,e){let n=new Uc;const s=new St,o=new St,r=new Ie,a=new Hf,l=new Vf,c={},h=e.maxTextureSize,f={[ei]:fn,[fn]:ei,[nn]:nn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:C3,fragmentShader:P3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const p=new Re;p.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let m=this.type;this.render=function(b,w,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Hu&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qo);const E=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),P=i.state;P.setBlending(gi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const C=m!==this.type;C&&w.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(I=>I.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,I=b.length;D<I;D++){const k=b[D],G=k.shadow;if(G===void 0){Qt("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const X=G.getFrameExtents();s.multiply(X),o.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/X.x),s.x=o.x*X.x,G.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/X.y),s.y=o.y*X.y,G.mapSize.y=o.y));const V=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||C===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===eo){if(k.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new qn(s.x,s.y,{format:rs,type:si,minFilter:sn,magFilter:sn,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new xo(s.x,s.y,Wn),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=Mi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Je,G.map.depthTexture.magFilter=Je}else k.isPointLight?(G.map=new B0(s.x),G.map.depthTexture=new Pf(s.x,ii)):(G.map=new qn(s.x,s.y),G.map.depthTexture=new xo(s.x,s.y,ii)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=Mi,this.type===Qo?(G.map.depthTexture.compareFunction=V?Pc:Cc,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Je,G.map.depthTexture.magFilter=Je);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();k.isPointLight!==!0&&G.updateMatrices(k,y);for(let it=0;it<J;it++){const vt=G.getCamera(it);if(k.isPointLight){const j=G.camera,Mt=G.matrix,lt=k.distance||j.far;lt!==j.far&&(j.far=lt,j.updateProjectionMatrix()),Oo.setFromMatrixPosition(k.matrixWorld),j.position.copy(Oo),wl.copy(j.position),wl.add(L3[it]),j.up.copy(D3[it]),j.lookAt(wl),j.updateMatrixWorld(),Mt.makeTranslation(-Oo.x,-Oo.y,-Oo.z),$h.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix($h,j.coordinateSystem,j.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,it),i.clear();else{it===0&&(i.setRenderTarget(G.map),i.clear());const j=G.getViewport(it);r.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),P.viewport(r)}n=G.getFrustum(it),x(w,y,vt,k,this.type)}G.isPointLightShadow!==!0&&this.type===eo&&v(G,y),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,A,L)};function v(b,w){const y=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new qn(s.x,s.y,{format:rs,type:si}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,y,u,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,y,d,_,null)}function M(b,w,y,E){let A=null;const L=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const P=A.uuid,C=w.uuid;let D=c[P];D===void 0&&(D={},c[P]=D);let I=D[C];I===void 0&&(I=A.clone(),D[C]=I,w.addEventListener("dispose",S)),A=I}if(A.visible=w.visible,A.wireframe=w.wireframe,E===eo?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const P=i.properties.get(A);P.light=y}return A}function x(b,w,y,E,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===eo)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const C=t.update(b),D=b.material;if(Array.isArray(D)){const I=C.groups;for(let k=0,G=I.length;k<G;k++){const X=I[k],V=D[X.materialIndex];if(V&&V.visible){const J=M(b,V,E,A);b.onBeforeShadow(i,b,w,y,C,J,X),i.renderBufferDirect(y,null,C,J,b,X),b.onAfterShadow(i,b,w,y,C,J,X)}}}else if(D.visible){const I=M(b,D,E,A);b.onBeforeShadow(i,b,w,y,C,I,null),i.renderBufferDirect(y,null,C,I,b,null),b.onAfterShadow(i,b,w,y,C,I,null)}}const P=b.children;for(let C=0,D=P.length;C<D;C++)x(P[C],w,y,E,A)}function S(b){b.target.removeEventListener("dispose",S);for(const y in c){const E=c[y],A=b.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function U3(i,t){function e(){let q=!1;const Ct=new Ie;let mt=null;const Dt=new Ie(0,0,0,0);return{setMask:function(Nt){mt!==Nt&&!q&&(i.colorMask(Nt,Nt,Nt,Nt),mt=Nt)},setLocked:function(Nt){q=Nt},setClear:function(Nt,N,st,ot,Tt){Tt===!0&&(Nt*=ot,N*=ot,st*=ot),Ct.set(Nt,N,st,ot),Dt.equals(Ct)===!1&&(i.clearColor(Nt,N,st,ot),Dt.copy(Ct))},reset:function(){q=!1,mt=null,Dt.set(-1,0,0,0)}}}function n(){let q=!1,Ct=!1,mt=null,Dt=null,Nt=null;return{setReversed:function(N){if(Ct!==N){const st=t.get("EXT_clip_control");N?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Ct=N;const ot=Nt;Nt=null,this.setClear(ot)}},getReversed:function(){return Ct},setTest:function(N){N?$(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(N){mt!==N&&!q&&(i.depthMask(N),mt=N)},setFunc:function(N){if(Ct&&(N=Nd[N]),Dt!==N){switch(N){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Fa:i.depthFunc(i.GREATER);break;case Oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=N}},setLocked:function(N){q=N},setClear:function(N){Nt!==N&&(Nt=N,Ct&&(N=1-N),i.clearDepth(N))},reset:function(){q=!1,mt=null,Dt=null,Nt=null,Ct=!1}}}function s(){let q=!1,Ct=null,mt=null,Dt=null,Nt=null,N=null,st=null,ot=null,Tt=null;return{setTest:function(wt){q||(wt?$(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(wt){Ct!==wt&&!q&&(i.stencilMask(wt),Ct=wt)},setFunc:function(wt,Kt,Jt){(mt!==wt||Dt!==Kt||Nt!==Jt)&&(i.stencilFunc(wt,Kt,Jt),mt=wt,Dt=Kt,Nt=Jt)},setOp:function(wt,Kt,Jt){(N!==wt||st!==Kt||ot!==Jt)&&(i.stencilOp(wt,Kt,Jt),N=wt,st=Kt,ot=Jt)},setLocked:function(wt){q=wt},setClear:function(wt){Tt!==wt&&(i.clearStencil(wt),Tt=wt)},reset:function(){q=!1,Ct=null,mt=null,Dt=null,Nt=null,N=null,st=null,ot=null,Tt=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,v=null,M=null,x=null,S=null,b=null,w=null,y=new Zt(0,0,0),E=0,A=!1,L=null,P=null,C=null,D=null,I=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=X>=2);let J=null,it={};const vt=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),Mt=new Ie().fromArray(vt),lt=new Ie().fromArray(j);function ct(q,Ct,mt,Dt){const Nt=new Uint8Array(4),N=i.createTexture();i.bindTexture(q,N),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<mt;st++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(Ct+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return N}const z={};z[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),$(i.DEPTH_TEST),r.setFunc(fo),Z(!1),at(Nl),$(i.CULL_FACE),tt(gi);function $(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function pt(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function bt(q,Ct){return u[q]!==Ct?(i.bindFramebuffer(q,Ct),u[q]=Ct,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function H(q,Ct){let mt=p,Dt=!1;if(q){mt=d.get(Ct),mt===void 0&&(mt=[],d.set(Ct,mt));const Nt=q.textures;if(mt.length!==Nt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let N=0,st=Nt.length;N<st;N++)mt[N]=i.COLOR_ATTACHMENT0+N;mt.length=Nt.length,Dt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(mt)}function ht(q){return _!==q?(i.useProgram(q),_=q,!0):!1}const dt={[Ms]:i.FUNC_ADD,[Wu]:i.FUNC_SUBTRACT,[Xu]:i.FUNC_REVERSE_SUBTRACT};dt[qu]=i.MIN,dt[Yu]=i.MAX;const Y={[Zu]:i.ZERO,[$u]:i.ONE,[Ku]:i.SRC_COLOR,[n0]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[Qu]:i.DST_ALPHA,[Ju]:i.ONE_MINUS_SRC_COLOR,[i0]:i.ONE_MINUS_SRC_ALPHA,[ef]:i.ONE_MINUS_DST_COLOR,[ju]:i.ONE_MINUS_DST_ALPHA,[sf]:i.CONSTANT_COLOR,[of]:i.ONE_MINUS_CONSTANT_COLOR,[rf]:i.CONSTANT_ALPHA,[af]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(q,Ct,mt,Dt,Nt,N,st,ot,Tt,wt){if(q===gi){g===!0&&(pt(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),q!==Vu){if(q!==m||wt!==A){if((v!==Ms||S!==Ms)&&(i.blendEquation(i.FUNC_ADD),v=Ms,S=Ms),wt)switch(q){case io:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:he("WebGLState: Invalid blending: ",q);break}else switch(q){case io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fl:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ol:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",q);break}M=null,x=null,b=null,w=null,y.set(0,0,0),E=0,m=q,A=wt}return}Nt=Nt||Ct,N=N||mt,st=st||Dt,(Ct!==v||Nt!==S)&&(i.blendEquationSeparate(dt[Ct],dt[Nt]),v=Ct,S=Nt),(mt!==M||Dt!==x||N!==b||st!==w)&&(i.blendFuncSeparate(Y[mt],Y[Dt],Y[N],Y[st]),M=mt,x=Dt,b=N,w=st),(ot.equals(y)===!1||Tt!==E)&&(i.blendColor(ot.r,ot.g,ot.b,Tt),y.copy(ot),E=Tt),m=q,A=!1}function B(q,Ct){q.side===nn?pt(i.CULL_FACE):$(i.CULL_FACE);let mt=q.side===fn;Ct&&(mt=!mt),Z(mt),q.blending===io&&q.transparent===!1?tt(gi):tt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),o.setMask(q.colorWrite);const Dt=q.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),yt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(q){L!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),L=q)}function at(q){q!==ku?($(i.CULL_FACE),q!==P&&(q===Nl?i.cullFace(i.BACK):q===Gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),P=q}function xt(q){q!==C&&(G&&i.lineWidth(q),C=q)}function yt(q,Ct,mt){q?($(i.POLYGON_OFFSET_FILL),(D!==Ct||I!==mt)&&(D=Ct,I=mt,r.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,mt))):pt(i.POLYGON_OFFSET_FILL)}function At(q){q?$(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Bt(q){q===void 0&&(q=i.TEXTURE0+k-1),J!==q&&(i.activeTexture(q),J=q)}function O(q,Ct,mt){mt===void 0&&(J===null?mt=i.TEXTURE0+k-1:mt=J);let Dt=it[mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},it[mt]=Dt),(Dt.type!==q||Dt.texture!==Ct)&&(J!==mt&&(i.activeTexture(mt),J=mt),i.bindTexture(q,Ct||z[q]),Dt.type=q,Dt.texture=Ct)}function $t(){const q=it[J];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch(q){he("WebGLState:",q)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(q){he("WebGLState:",q)}}function T(){try{i.texSubImage2D(...arguments)}catch(q){he("WebGLState:",q)}}function K(){try{i.texSubImage3D(...arguments)}catch(q){he("WebGLState:",q)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(q){he("WebGLState:",q)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(q){he("WebGLState:",q)}}function Et(){try{i.texStorage2D(...arguments)}catch(q){he("WebGLState:",q)}}function Rt(){try{i.texStorage3D(...arguments)}catch(q){he("WebGLState:",q)}}function ft(){try{i.texImage2D(...arguments)}catch(q){he("WebGLState:",q)}}function gt(){try{i.texImage3D(...arguments)}catch(q){he("WebGLState:",q)}}function Pt(q){return f[q]!==void 0?f[q]:i.getParameter(q)}function Vt(q,Ct){f[q]!==Ct&&(i.pixelStorei(q,Ct),f[q]=Ct)}function It(q){Mt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Mt.copy(q))}function Lt(q){lt.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),lt.copy(q))}function Wt(q,Ct){let mt=c.get(Ct);mt===void 0&&(mt=new WeakMap,c.set(Ct,mt));let Dt=mt.get(q);Dt===void 0&&(Dt=i.getUniformBlockIndex(Ct,q.name),mt.set(q,Dt))}function Yt(q,Ct){const Dt=c.get(Ct).get(q);l.get(Ct)!==Dt&&(i.uniformBlockBinding(Ct,Dt,q.__bindingPointIndex),l.set(Ct,Dt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,it={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,v=null,M=null,x=null,S=null,b=null,w=null,y=new Zt(0,0,0),E=0,A=!1,L=null,P=null,C=null,D=null,I=null,Mt.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:$,disable:pt,bindFramebuffer:bt,drawBuffers:H,useProgram:ht,setBlending:tt,setMaterial:B,setFlipSided:Z,setCullFace:at,setLineWidth:xt,setPolygonOffset:yt,setScissorTest:At,activeTexture:Bt,bindTexture:O,unbindTexture:$t,compressedTexImage2D:Xt,compressedTexImage3D:U,texImage2D:ft,texImage3D:gt,pixelStorei:Vt,getParameter:Pt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:Et,texStorage3D:Rt,texSubImage2D:T,texSubImage3D:K,compressedTexSubImage2D:Q,compressedTexSubImage3D:ut,scissor:It,viewport:Lt,reset:te}}function N3(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,T){return p?new OffscreenCanvas(U,T):vr("canvas")}function g(U,T,K){let Q=1;const ut=Xt(U);if((ut.width>K||ut.height>K)&&(Q=K/Math.max(ut.width,ut.height)),Q<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Et=Math.floor(Q*ut.width),Rt=Math.floor(Q*ut.height);u===void 0&&(u=_(Et,Rt));const ft=T?_(Et,Rt):u;return ft.width=Et,ft.height=Rt,ft.getContext("2d").drawImage(U,0,0,Et,Rt),Qt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+Et+"x"+Rt+")."),ft}else return"data"in U&&Qt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),U;return U}function m(U){return U.generateMipmaps}function v(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(U,T,K,Q,ut,Et=!1){if(U!==null){if(i[U]!==void 0)return i[U];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Rt;Q&&(Rt=t.get("EXT_texture_norm16"),Rt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=T;if(T===i.RED&&(K===i.FLOAT&&(ft=i.R32F),K===i.HALF_FLOAT&&(ft=i.R16F),K===i.UNSIGNED_BYTE&&(ft=i.R8),K===i.UNSIGNED_SHORT&&Rt&&(ft=Rt.R16_EXT),K===i.SHORT&&Rt&&(ft=Rt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ft=i.R8UI),K===i.UNSIGNED_SHORT&&(ft=i.R16UI),K===i.UNSIGNED_INT&&(ft=i.R32UI),K===i.BYTE&&(ft=i.R8I),K===i.SHORT&&(ft=i.R16I),K===i.INT&&(ft=i.R32I)),T===i.RG&&(K===i.FLOAT&&(ft=i.RG32F),K===i.HALF_FLOAT&&(ft=i.RG16F),K===i.UNSIGNED_BYTE&&(ft=i.RG8),K===i.UNSIGNED_SHORT&&Rt&&(ft=Rt.RG16_EXT),K===i.SHORT&&Rt&&(ft=Rt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ft=i.RG8UI),K===i.UNSIGNED_SHORT&&(ft=i.RG16UI),K===i.UNSIGNED_INT&&(ft=i.RG32UI),K===i.BYTE&&(ft=i.RG8I),K===i.SHORT&&(ft=i.RG16I),K===i.INT&&(ft=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),K===i.UNSIGNED_INT&&(ft=i.RGB32UI),K===i.BYTE&&(ft=i.RGB8I),K===i.SHORT&&(ft=i.RGB16I),K===i.INT&&(ft=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),K===i.UNSIGNED_INT&&(ft=i.RGBA32UI),K===i.BYTE&&(ft=i.RGBA8I),K===i.SHORT&&(ft=i.RGBA16I),K===i.INT&&(ft=i.RGBA32I)),T===i.RGB&&(K===i.UNSIGNED_SHORT&&Rt&&(ft=Rt.RGB16_EXT),K===i.SHORT&&Rt&&(ft=Rt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),T===i.RGBA){const gt=Et?xr:ce.getTransfer(ut);K===i.FLOAT&&(ft=i.RGBA32F),K===i.HALF_FLOAT&&(ft=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ft=gt===_e?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Rt&&(ft=Rt.RGBA16_EXT),K===i.SHORT&&Rt&&(ft=Rt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function S(U,T){let K;return U?T===null||T===ii||T===go?K=i.DEPTH24_STENCIL8:T===Wn?K=i.DEPTH32F_STENCIL8:T===mo&&(K=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ii||T===go?K=i.DEPTH_COMPONENT24:T===Wn?K=i.DEPTH_COMPONENT32F:T===mo&&(K=i.DEPTH_COMPONENT16),K}function b(U,T){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Je&&U.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function w(U){const T=U.target;T.removeEventListener("dispose",w),E(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function y(U){const T=U.target;T.removeEventListener("dispose",y),L(T)}function E(U){const T=n.get(U);if(T.__webglInit===void 0)return;const K=U.source,Q=d.get(K);if(Q){const ut=Q[T.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&A(U),Object.keys(Q).length===0&&d.delete(K)}n.remove(U)}function A(U){const T=n.get(U);i.deleteTexture(T.__webglTexture);const K=U.source,Q=d.get(K);delete Q[T.__cacheKey],r.memory.textures--}function L(U){const T=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ut=0;ut<T.__webglFramebuffer[Q].length;ut++)i.deleteFramebuffer(T.__webglFramebuffer[Q][ut]);else i.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=U.textures;for(let Q=0,ut=K.length;Q<ut;Q++){const Et=n.get(K[Q]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),r.memory.textures--),n.remove(K[Q])}n.remove(U)}let P=0;function C(){P=0}function D(){return P}function I(U){P=U}function k(){const U=P;return U>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,U}function G(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function X(U,T){const K=n.get(U);if(U.isVideoTexture&&O(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const Q=U.image;if(Q===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(K,U,T);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function V(U,T){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){pt(K,U,T);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function J(U,T){const K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){pt(K,U,T);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function it(U,T){const K=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){bt(K,U,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}const vt={[dr]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},j={[Je]:i.NEAREST,[hf]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},Mt={[pf]:i.NEVER,[vf]:i.ALWAYS,[mf]:i.LESS,[Cc]:i.LEQUAL,[gf]:i.EQUAL,[Pc]:i.GEQUAL,[_f]:i.GREATER,[xf]:i.NOTEQUAL};function lt(U,T){if(T.type===Wn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===sn||T.magFilter===ya||T.magFilter===ko||T.magFilter===ts||T.minFilter===sn||T.minFilter===ya||T.minFilter===ko||T.minFilter===ts)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,vt[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,vt[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,vt[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,j[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,j[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Mt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Je||T.minFilter!==ko&&T.minFilter!==ts||T.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ct(U,T){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",w));const Q=T.source;let ut=d.get(Q);ut===void 0&&(ut={},d.set(Q,ut));const Et=G(T);if(Et!==U.__cacheKey){ut[Et]===void 0&&(ut[Et]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,K=!0),ut[Et].usedTimes++;const Rt=ut[U.__cacheKey];Rt!==void 0&&(ut[U.__cacheKey].usedTimes--,Rt.usedTimes===0&&A(T)),U.__cacheKey=Et,U.__webglTexture=ut[Et].texture}return K}function z(U,T,K){return Math.floor(Math.floor(U/K)/T)}function $(U,T,K,Q){const Et=U.updateRanges;if(Et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,K,Q,T.data);else{Et.sort((Vt,It)=>Vt.start-It.start);let Rt=0;for(let Vt=1;Vt<Et.length;Vt++){const It=Et[Rt],Lt=Et[Vt],Wt=It.start+It.count,Yt=z(Lt.start,T.width,4),te=z(It.start,T.width,4);Lt.start<=Wt+1&&Yt===te&&z(Lt.start+Lt.count-1,T.width,4)===Yt?It.count=Math.max(It.count,Lt.start+Lt.count-It.start):(++Rt,Et[Rt]=Lt)}Et.length=Rt+1;const ft=e.getParameter(i.UNPACK_ROW_LENGTH),gt=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Vt=0,It=Et.length;Vt<It;Vt++){const Lt=Et[Vt],Wt=Math.floor(Lt.start/4),Yt=Math.ceil(Lt.count/4),te=Wt%T.width,q=Math.floor(Wt/T.width),Ct=Yt,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,te,q,Ct,mt,K,Q,T.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function pt(U,T,K){let Q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=i.TEXTURE_3D);const ut=ct(U,T),Et=T.source;e.bindTexture(Q,U.__webglTexture,i.TEXTURE0+K);const Rt=n.get(Et);if(Et.version!==Rt.__version||ut===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const mt=ce.getPrimaries(ce.workingColorSpace),Dt=T.colorSpace===Pi?null:ce.getPrimaries(T.colorSpace),Nt=T.colorSpace===Pi||mt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let gt=g(T.image,!1,s.maxTextureSize);gt=$t(T,gt);const Pt=o.convert(T.format,T.colorSpace),Vt=o.convert(T.type);let It=x(T.internalFormat,Pt,Vt,T.normalized,T.colorSpace,T.isVideoTexture);lt(Q,T);let Lt;const Wt=T.mipmaps,Yt=T.isVideoTexture!==!0,te=Rt.__version===void 0||ut===!0,q=Et.dataReady,Ct=b(T,gt);if(T.isDepthTexture)It=S(T.format===es,T.type),te&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,It,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,It,gt.width,gt.height,0,Pt,Vt,null));else if(T.isDataTexture)if(Wt.length>0){Yt&&te&&e.texStorage2D(i.TEXTURE_2D,Ct,It,Wt[0].width,Wt[0].height);for(let mt=0,Dt=Wt.length;mt<Dt;mt++)Lt=Wt[mt],Yt?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Lt.width,Lt.height,Pt,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,mt,It,Lt.width,Lt.height,0,Pt,Vt,Lt.data);T.generateMipmaps=!1}else Yt?(te&&e.texStorage2D(i.TEXTURE_2D,Ct,It,gt.width,gt.height),q&&$(T,gt,Pt,Vt)):e.texImage2D(i.TEXTURE_2D,0,It,gt.width,gt.height,0,Pt,Vt,gt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Yt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,Wt[0].width,Wt[0].height,gt.depth);for(let mt=0,Dt=Wt.length;mt<Dt;mt++)if(Lt=Wt[mt],T.format!==Xn)if(Pt!==null)if(Yt){if(q)if(T.layerUpdates.size>0){const Nt=Rh(Lt.width,Lt.height,T.format,T.type);for(const N of T.layerUpdates){const st=Lt.data.subarray(N*Nt/Lt.data.BYTES_PER_ELEMENT,(N+1)*Nt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,N,Lt.width,Lt.height,1,Pt,st)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Lt.width,Lt.height,gt.depth,Pt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,It,Lt.width,Lt.height,gt.depth,0,Lt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Lt.width,Lt.height,gt.depth,Pt,Vt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,It,Lt.width,Lt.height,gt.depth,0,Pt,Vt,Lt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Yt&&te&&e.texStorage2D(i.TEXTURE_2D,Ct,It,Wt[0].width,Wt[0].height);for(let mt=0,Dt=Wt.length;mt<Dt;mt++)Lt=Wt[mt],T.format!==Xn?Pt!==null?Yt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,It,Lt.width,Lt.height,0,Lt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Lt.width,Lt.height,Pt,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,mt,It,Lt.width,Lt.height,0,Pt,Vt,Lt.data)}else if(T.isDataArrayTexture)if(Yt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,gt.width,gt.height,gt.depth),q)if(T.layerUpdates.size>0){const mt=Rh(gt.width,gt.height,T.format,T.type);for(const Dt of T.layerUpdates){const Nt=gt.data.subarray(Dt*mt/gt.data.BYTES_PER_ELEMENT,(Dt+1)*mt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,gt.width,gt.height,1,Pt,Vt,Nt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Pt,Vt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,gt.width,gt.height,gt.depth,0,Pt,Vt,gt.data);else if(T.isData3DTexture)Yt?(te&&e.texStorage3D(i.TEXTURE_3D,Ct,It,gt.width,gt.height,gt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Pt,Vt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,It,gt.width,gt.height,gt.depth,0,Pt,Vt,gt.data);else if(T.isFramebufferTexture){if(te)if(Yt)e.texStorage2D(i.TEXTURE_2D,Ct,It,gt.width,gt.height);else{let mt=gt.width,Dt=gt.height;for(let Nt=0;Nt<Ct;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,It,mt,Dt,0,Pt,Vt,null),mt>>=1,Dt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){const mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),gt.parentNode!==mt){mt.appendChild(gt),f.add(T),mt.onpaint=Dt=>{const Nt=Dt.changedElements;for(const N of f)Nt.includes(N.image)&&(N.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,gt);else{const Nt=i.RGBA,N=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Nt,N,st,gt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Yt&&te){const mt=Xt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,It,mt.width,mt.height)}for(let mt=0,Dt=Wt.length;mt<Dt;mt++)Lt=Wt[mt],Yt?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Pt,Vt,Lt):e.texImage2D(i.TEXTURE_2D,mt,It,Pt,Vt,Lt);T.generateMipmaps=!1}else if(Yt){if(te){const mt=Xt(gt);e.texStorage2D(i.TEXTURE_2D,Ct,It,mt.width,mt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Vt,gt)}else e.texImage2D(i.TEXTURE_2D,0,It,Pt,Vt,gt);m(T)&&v(Q),Rt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function bt(U,T,K){if(T.image.length!==6)return;const Q=ct(U,T),ut=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);const Et=n.get(ut);if(ut.version!==Et.__version||Q===!0){e.activeTexture(i.TEXTURE0+K);const Rt=ce.getPrimaries(ce.workingColorSpace),ft=T.colorSpace===Pi?null:ce.getPrimaries(T.colorSpace),gt=T.colorSpace===Pi||Rt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Vt=T.image[0]&&T.image[0].isDataTexture,It=[];for(let N=0;N<6;N++)!Pt&&!Vt?It[N]=g(T.image[N],!0,s.maxCubemapSize):It[N]=Vt?T.image[N].image:T.image[N],It[N]=$t(T,It[N]);const Lt=It[0],Wt=o.convert(T.format,T.colorSpace),Yt=o.convert(T.type),te=x(T.internalFormat,Wt,Yt,T.normalized,T.colorSpace),q=T.isVideoTexture!==!0,Ct=Et.__version===void 0||Q===!0,mt=ut.dataReady;let Dt=b(T,Lt);lt(i.TEXTURE_CUBE_MAP,T);let Nt;if(Pt){q&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,te,Lt.width,Lt.height);for(let N=0;N<6;N++){Nt=It[N].mipmaps;for(let st=0;st<Nt.length;st++){const ot=Nt[st];T.format!==Xn?Wt!==null?q?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,st,0,0,ot.width,ot.height,Wt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,st,te,ot.width,ot.height,0,ot.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,st,0,0,ot.width,ot.height,Wt,Yt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,st,te,ot.width,ot.height,0,Wt,Yt,ot.data)}}}else{if(Nt=T.mipmaps,q&&Ct){Nt.length>0&&Dt++;const N=Xt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,te,N.width,N.height)}for(let N=0;N<6;N++)if(Vt){q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,It[N].width,It[N].height,Wt,Yt,It[N].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,te,It[N].width,It[N].height,0,Wt,Yt,It[N].data);for(let st=0;st<Nt.length;st++){const Tt=Nt[st].image[N].image;q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,st+1,0,0,Tt.width,Tt.height,Wt,Yt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,st+1,te,Tt.width,Tt.height,0,Wt,Yt,Tt.data)}}else{q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Wt,Yt,It[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,te,Wt,Yt,It[N]);for(let st=0;st<Nt.length;st++){const ot=Nt[st];q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,st+1,0,0,Wt,Yt,ot.image[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,st+1,te,Wt,Yt,ot.image[N])}}}m(T)&&v(i.TEXTURE_CUBE_MAP),Et.__version=ut.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function H(U,T,K,Q,ut,Et){const Rt=o.convert(K.format,K.colorSpace),ft=o.convert(K.type),gt=x(K.internalFormat,Rt,ft,K.normalized,K.colorSpace),Pt=n.get(T),Vt=n.get(K);if(Vt.__renderTarget=T,!Pt.__hasExternalTextures){const It=Math.max(1,T.width>>Et),Lt=Math.max(1,T.height>>Et);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,Et,gt,It,Lt,T.depth,0,Rt,ft,null):e.texImage2D(ut,Et,gt,It,Lt,0,Rt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Bt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ut,Vt.__webglTexture,0,At(T)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ut,Vt.__webglTexture,Et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(U,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){const Q=T.depthTexture,ut=Q&&Q.isDepthTexture?Q.type:null,Et=S(T.stencilBuffer,ut),Rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(T),Et,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(T),Et,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Et,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,U)}else{const Q=T.textures;for(let ut=0;ut<Q.length;ut++){const Et=Q[ut],Rt=o.convert(Et.format,Et.colorSpace),ft=o.convert(Et.type),gt=x(Et.internalFormat,Rt,ft,Et.normalized,Et.colorSpace);Bt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(T),gt,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(T),gt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,gt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(U,T,K){const Q=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ut=n.get(T.depthTexture);if(ut.__renderTarget=T,(!ut.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),ut.__webglTexture===void 0){ut.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),lt(i.TEXTURE_CUBE_MAP,T.depthTexture);const Pt=o.convert(T.depthTexture.format),Vt=o.convert(T.depthTexture.type);let It;T.depthTexture.format===Mi?It=i.DEPTH_COMPONENT24:T.depthTexture.format===es&&(It=i.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,It,T.width,T.height,0,Pt,Vt,null)}}else X(T.depthTexture,0);const Et=ut.__webglTexture,Rt=At(T),ft=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,gt=T.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Mi)Bt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ft,Et,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,ft,Et,0);else if(T.depthTexture.format===es)Bt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ft,Et,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,ft,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Y(U){const T=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const Q=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const ut=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",ut)};Q.addEventListener("dispose",ut),T.__depthDisposeCallback=ut}T.__boundDepthTexture=Q}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let Q=0;Q<6;Q++)dt(T.__webglFramebuffer[Q],U,Q);else{const Q=U.texture.mipmaps;Q&&Q.length>0?dt(T.__webglFramebuffer[0],U,0):dt(T.__webglFramebuffer,U,0)}else if(K){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=i.createRenderbuffer(),ht(T.__webglDepthbuffer[Q],U,!1);else{const ut=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=T.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,Et)}}else{const Q=U.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ht(T.__webglDepthbuffer,U,!1);else{const ut=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,Et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(U,T,K){const Q=n.get(U);T!==void 0&&H(Q.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Y(U)}function B(U){const T=U.texture,K=n.get(U),Q=n.get(T);U.addEventListener("dispose",y);const ut=U.textures,Et=U.isWebGLCubeRenderTarget===!0,Rt=ut.length>1;if(Rt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=T.version,r.memory.textures++),Et){K.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[ft]=[];for(let gt=0;gt<T.mipmaps.length;gt++)K.__webglFramebuffer[ft][gt]=i.createFramebuffer()}else K.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)K.__webglFramebuffer[ft]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ft=0,gt=ut.length;ft<gt;ft++){const Pt=n.get(ut[ft]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),r.memory.textures++)}if(U.samples>0&&Bt(U)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ft=0;ft<ut.length;ft++){const gt=ut[ft];K.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ft]);const Pt=o.convert(gt.format,gt.colorSpace),Vt=o.convert(gt.type),It=x(gt.internalFormat,Pt,Vt,gt.normalized,gt.colorSpace,U.isXRRenderTarget===!0),Lt=At(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,It,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,K.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(K.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Et){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(i.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)H(K.__webglFramebuffer[ft][gt],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt);else H(K.__webglFramebuffer[ft],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(T)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,gt=ut.length;ft<gt;ft++){const Pt=ut[ft],Vt=n.get(Pt);let It=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(It=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,Vt.__webglTexture),lt(It,Pt),H(K.__webglFramebuffer,U,Pt,i.COLOR_ATTACHMENT0+ft,It,0),m(Pt)&&v(It)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ft=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Q.__webglTexture),lt(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)H(K.__webglFramebuffer[gt],U,T,i.COLOR_ATTACHMENT0,ft,gt);else H(K.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,ft,0);m(T)&&v(ft),e.unbindTexture()}U.depthBuffer&&Y(U)}function Z(U){const T=U.textures;for(let K=0,Q=T.length;K<Q;K++){const ut=T[K];if(m(ut)){const Et=M(U),Rt=n.get(ut).__webglTexture;e.bindTexture(Et,Rt),v(Et),e.unbindTexture()}}}const at=[],xt=[];function yt(U){if(U.samples>0){if(Bt(U)===!1){const T=U.textures,K=U.width,Q=U.height;let ut=i.COLOR_BUFFER_BIT;const Et=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(U),ft=T.length>1;if(ft)for(let Pt=0;Pt<T.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const gt=U.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Pt=0;Pt<T.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Pt]);const Vt=n.get(T[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,K,Q,0,0,K,Q,ut,i.NEAREST),l===!0&&(at.length=0,xt.length=0,at.push(i.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(at.push(Et),xt.push(Et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Pt=0;Pt<T.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Pt]);const Vt=n.get(T[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function At(U){return Math.min(s.maxSamples,U.samples)}function Bt(U){const T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function O(U){const T=r.render.frame;h.get(U)!==T&&(h.set(U,T),U.update())}function $t(U,T){const K=U.colorSpace,Q=U.format,ut=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==_r&&K!==Pi&&(ce.getTransfer(K)===_e?(Q!==Xn||ut!==An)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",K)),T}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=C,this.getTextureUnits=D,this.setTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=it,this.rebindTextures=tt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function sd(i,t){function e(n,s=Pi){let o;const r=ce.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===p0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===m0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===f0)return i.BYTE;if(n===d0)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===yc)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===g0)return i.ALPHA;if(n===_0)return i.RGB;if(n===Xn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Ec)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(r===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===za||n===ka||n===Ga)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ba)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Va||n===Wa||n===Xa||n===qa||n===pr||n===Ya)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ha||n===Va)return r===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Wa)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return o.COMPRESSED_R11_EAC;if(n===qa)return o.COMPRESSED_SIGNED_R11_EAC;if(n===pr)return o.COMPRESSED_RG11_EAC;if(n===Ya)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===$a||n===Ka||n===Ja||n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===oc||n===rc||n===ac)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Za)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cc||n===lc||n===hc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===cc)return r===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===fc||n===mr||n===dc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===uc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===go?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const F3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O3=`
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

}`;class B3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new R0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:F3,fragmentShader:O3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z3 extends ki{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null;const _=typeof XRWebGLBinding<"u",g=new B3,m={},v=e.getContextAttributes();let M=null,x=null;const S=[],b=[],w=new St;let y=null,E=null;const A=new en;A.viewport=new Ie;const L=new en;L.viewport=new Ie;const P=[A,L],C=new Kf;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=S[z];return $===void 0&&($=new wa,S[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=S[z];return $===void 0&&($=new wa,S[z]=$),$.getGripSpace()},this.getHand=function(z){let $=S[z];return $===void 0&&($=new wa,S[z]=$),$.getHandSpace()};function k(z){const $=b.indexOf(z.inputSource);if($===-1)return;const pt=S[$];pt!==void 0&&(pt.update(z.inputSource,z.frame,c||r),pt.dispatchEvent({type:z.type,data:z.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let z=0;z<S.length;z++){const $=b[z];$!==null&&(b[z]=null,S[z].disconnect($))}D=null,I=null,g.reset();for(const z in m)delete m[z];if(t.setRenderTarget(M),d=null,u=null,f=null,s=null,x=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),E!==null){const z=E.camera;z.fov=E.fov,z.zoom=E.zoom,z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,bt=null,H=null;v.depth&&(H=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=v.stencil?es:Mi,bt=v.stencil?go:ii);const ht={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:o};f=this.getBinding(),u=f.createProjectionLayer(ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new qn(u.textureWidth,u.textureHeight,{format:Xn,type:An,depthTexture:new xo(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const pt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new qn(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(z){for(let $=0;$<z.removed.length;$++){const pt=z.removed[$],bt=b.indexOf(pt);bt>=0&&(b[bt]=null,S[bt].disconnect(pt))}for(let $=0;$<z.added.length;$++){const pt=z.added[$];let bt=b.indexOf(pt);if(bt===-1){for(let ht=0;ht<S.length;ht++)if(ht>=b.length){b.push(pt),bt=ht;break}else if(b[ht]===null){b[ht]=pt,bt=ht;break}if(bt===-1)break}const H=S[bt];H&&H.connect(pt)}}const V=new F,J=new F;function it(z,$,pt){V.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(pt.matrixWorld);const bt=V.distanceTo(J),H=$.projectionMatrix.elements,ht=pt.projectionMatrix.elements,dt=H[14]/(H[10]-1),Y=H[14]/(H[10]+1),tt=(H[9]+1)/H[5],B=(H[9]-1)/H[5],Z=(H[8]-1)/H[0],at=(ht[8]+1)/ht[0],xt=dt*Z,yt=dt*at,At=bt/(-Z+at),Bt=At*-Z;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Bt),z.translateZ(At),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),H[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const O=dt+At,$t=Y+At,Xt=xt-Bt,U=yt+(bt-Bt),T=tt*Y/$t*O,K=B*Y/$t*O;z.projectionMatrix.makePerspective(Xt,U,T,K,O,$t),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function vt(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let $=z.near,pt=z.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),C.near=L.near=A.near=$,C.far=L.far=A.far=pt,(D!==C.near||I!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,I=C.far),C.layers.mask=z.layers.mask|6,A.layers.mask=C.layers.mask&-5,L.layers.mask=C.layers.mask&-3;const bt=z.parent,H=C.cameras;vt(C,bt);for(let ht=0;ht<H.length;ht++)vt(H[ht],bt);H.length===2?it(C,A,L):C.projectionMatrix.copy(A.projectionMatrix),E===null&&z.isPerspectiveCamera&&(E={camera:z,fov:z.fov,zoom:z.zoom}),j(z,C,bt)};function j(z,$,pt){pt===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(pt.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Sr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(z){return m[z]};let Mt=null;function lt(z,$){if(h=$.getViewerPose(c||r),p=$,h!==null){const pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let bt=!1;pt.length!==C.cameras.length&&(C.cameras.length=0,bt=!0);for(let Y=0;Y<pt.length;Y++){const tt=pt[Y];let B=null;if(d!==null)B=d.getViewport(tt);else{const at=f.getViewSubImage(u,tt);B=at.viewport,Y===0&&(t.setRenderTargetTextures(x,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(x))}let Z=P[Y];Z===void 0&&(Z=new en,Z.layers.enable(Y),Z.viewport=new Ie,P[Y]=Z),Z.matrix.fromArray(tt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(tt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(B.x,B.y,B.width,B.height),Y===0&&(C.matrix.copy(Z.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),bt===!0&&C.cameras.push(Z)}const H=s.enabledFeatures;if(H&&H.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Y=f.getDepthInformation(pt[0]);Y&&Y.isValid&&Y.texture&&g.init(Y,s.renderState)}if(H&&H.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Y=0;Y<pt.length;Y++){const tt=pt[Y].camera;if(tt){let B=m[tt];B||(B=new R0,m[tt]=B);const Z=f.getCameraImage(tt);B.sourceTexture=Z}}}}for(let pt=0;pt<S.length;pt++){const bt=b[pt],H=S[pt];bt!==null&&H!==void 0&&H.update(bt,$,c||r)}Mt&&Mt(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),p=null}const ct=new Qf;ct.setAnimationLoop(lt),this.setAnimationLoop=function(z){Mt=z},this.dispose=function(){}}}const k3=new be,od=new jt;od.set(-1,0,0,0,1,0,0,0,1);function G3(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,zf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,M,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),f(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,x)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),M=v.envMap,x=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(k3.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(od),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H3(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",v));const w=S.program;n.updateUBOMapping(x,w);const y=t.render.frame;o[x.id]!==y&&(u(x),o[x.id]=y)}function h(x){const S=f();x.__bindingPointIndex=S;const b=i.createBuffer(),w=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const S=s[x.id],b=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,E=b.length;y<E;y++){const A=b[y];if(Array.isArray(A))for(let L=0,P=A.length;L<P;L++)d(A[L],y,L,w);else d(A,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,S,b,w){if(_(x,S,b,w)===!0){const y=x.__offset,E=x.value;if(Array.isArray(E)){let A=0;for(let L=0;L<E.length;L++){const P=E[L],C=m(P);p(P,x.__data,A),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(A+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function p(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function _(x,S,b,w){const y=x.value,E=S+"_"+b;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{const A=w[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(x){const S=x.uniforms;let b=0;const w=16;for(let E=0,A=S.length;E<A;E++){const L=Array.isArray(S[E])?S[E]:[S[E]];for(let P=0,C=L.length;P<C;P++){const D=L[P],I=Array.isArray(D.value)?D.value:[D.value];for(let k=0,G=I.length;k<G;k++){const X=I[k],V=m(X),J=b%w,it=J%V.boundary,vt=J+it;b+=it,vt!==0&&w-vt<V.storage&&(b+=w-vt),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=V.storage}}}const y=b%w;return y>0&&(b+=w-y),x.__size=b,x.__cache={},this}function m(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",x),S}function v(x){const S=x.target;S.removeEventListener("dispose",v);const b=r.indexOf(S.__bindingPointIndex);r.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function M(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:M}}const V3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function W3(){return li===null&&(li=new Ic(V3,16,16,rs,si),li.name="DFG_LUT",li.minFilter=sn,li.magFilter=sn,li.wrapS=mi,li.wrapT=mi,li.generateMipmaps=!1,li.needsUpdate=!0),li}class rd{constructor(t={}){const{canvas:e=Sf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=An}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const _=d,g=new Set([Rc,Ac,Tc]),m=new Set([An,ii,mo,go,bc,wc]),v=new Uint32Array(4),M=new Int32Array(4),x=new F;let S=null,b=null;const w=[],y=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,P=null,C=null,D=null,I=null;this._outputColorSpace=tn;let k=0,G=0,X=null,V=-1,J=null;const it=new Ie,vt=new Ie;let j=null;const Mt=new Zt(0);let lt=0,ct=e.width,z=e.height,$=1,pt=null,bt=null;const H=new Ie(0,0,ct,z),ht=new Ie(0,0,ct,z);let dt=!1;const Y=new Uc;let tt=!1,B=!1;const Z=new be,at=new F,xt=new Ie,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Bt(){return X===null?$:1}let O=n;function $t(R,W){return e.getContext(R,W)}let Xt,U,T,K,Q,ut,Et,Rt,ft,gt,Pt,Vt,It,Lt,Wt,Yt,te,q,Ct,mt,Dt,Nt,N;try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),O===null){const W="webgl2";if(O=$t(W,R),O===null)throw $t(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(R){throw e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),he("WebGLRenderer: "+R.message),R}function st(){Xt=new Xm(O),Xt.init(),Dt=new sd(O,Xt),U=new Nm(O,Xt,t,Dt),T=new U3(O,Xt),U.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),C=O.createFramebuffer(),D=O.createFramebuffer(),I=O.createFramebuffer(),K=new Zm(O),Q=new M3,ut=new N3(O,Xt,T,Q,U,Dt,K),Et=new Wm(A),Rt=new Kp(O),Nt=new Im(O,Rt),ft=new qm(O,Rt,K,Nt),gt=new Km(O,ft,Rt,Nt,K),q=new $m(O,U,ut),Wt=new Fm(Q),Pt=new v3(A,Et,Xt,U,Nt,Wt),Vt=new G3(A,Q),It=new y3,Lt=new R3(Xt),te=new Dm(A,Et,T,gt,p,l),Yt=new I3(A,gt,U),N=new H3(O,K,U,T),Ct=new Um(O,Xt,K),mt=new Ym(O,Xt,K),K.programs=Pt.programs,A.capabilities=U,A.extensions=Xt,A.properties=Q,A.renderLists=It,A.shadowMap=Yt,A.state=T,A.info=K}_!==An&&(E=new Qm(_,e.width,e.height,a,s,o));const ot=new z3(A,O);this.xr=ot,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(ct,z,!1))},this.getSize=function(R){return R.set(ct,z)},this.setSize=function(R,W,rt=!0){if(ot.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=R,z=W,e.width=Math.floor(R*$),e.height=Math.floor(W*$),rt===!0&&(e.style.width=R+"px",e.style.height=W+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ct*$,z*$).floor()},this.setDrawingBufferSize=function(R,W,rt){ct=R,z=W,$=rt,e.width=Math.floor(R*rt),e.height=Math.floor(W*rt),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(_===An){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(it)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,W,rt,et){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,W,rt,et),T.viewport(it.copy(H).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,W,rt,et){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,W,rt,et),T.scissor(vt.copy(ht).multiplyScalar($).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){T.setScissorTest(dt=R)},this.setOpaqueSort=function(R){pt=R},this.setTransparentSort=function(R){bt=R},this.getClearColor=function(R){return R.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,rt=!0){let et=0;if(R){let nt=!1;if(X!==null){const Ot=X.texture.format;nt=g.has(Ot)}if(nt){const Ot=X.texture.type,kt=m.has(Ot),Ft=te.getClearColor(),Gt=te.getClearAlpha(),qt=Ft.r,se=Ft.g,ae=Ft.b;kt?(v[0]=qt,v[1]=se,v[2]=ae,v[3]=Gt,O.clearBufferuiv(O.COLOR,0,v)):(M[0]=qt,M[1]=se,M[2]=ae,M[3]=Gt,O.clearBufferiv(O.COLOR,0,M))}else et|=O.COLOR_BUFFER_BIT}W&&(et|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&O.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),P=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),te.dispose(),It.dispose(),Lt.dispose(),Q.dispose(),Et.dispose(),gt.dispose(),Nt.dispose(),N.dispose(),Pt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",dn),ot.removeEventListener("sessionend",bi),Bn.stop()};function Tt(R){R.preventDefault(),Mr("WebGLRenderer: Context Lost."),L=!0}function wt(){Mr("WebGLRenderer: Context Restored."),L=!1;const R=K.autoReset,W=Yt.enabled,rt=Yt.autoUpdate,et=Yt.needsUpdate,nt=Yt.type;st(),K.autoReset=R,Yt.enabled=W,Yt.autoUpdate=rt,Yt.needsUpdate=et,Yt.type=nt}function Kt(R){he("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Jt(R){const W=R.target;W.removeEventListener("dispose",Jt),ue(W)}function ue(R){pe(R),Q.remove(R)}function pe(R){const W=Q.get(R).programs;W!==void 0&&(W.forEach(function(rt){Pt.releaseProgram(rt)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,rt,et,nt,Ot){W===null&&(W=yt);const kt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Ft=Nr(R,W,rt,et,nt);T.setMaterial(et,kt);let Gt=rt.index,qt=1;if(et.wireframe===!0){if(Gt=ft.getWireframeAttribute(rt),Gt===void 0)return;qt=2}const se=rt.drawRange,ae=rt.attributes.position;let Ht=se.start*qt,ge=(se.start+se.count)*qt;Ot!==null&&(Ht=Math.max(Ht,Ot.start*qt),ge=Math.min(ge,(Ot.start+Ot.count)*qt)),Gt!==null?(Ht=Math.max(Ht,0),ge=Math.min(ge,Gt.count)):ae!=null&&(Ht=Math.max(Ht,0),ge=Math.min(ge,ae.count));const Ge=ge-Ht;if(Ge<0||Ge===1/0)return;Nt.setup(nt,et,Ft,rt,Gt);let Ce,Ee=Ct;if(Gt!==null&&(Ce=Rt.get(Gt),Ee=mt,Ee.setIndex(Ce)),nt.isMesh)et.wireframe===!0?(T.setLineWidth(et.wireframeLinewidth*Bt()),Ee.setMode(O.LINES)):Ee.setMode(O.TRIANGLES);else if(nt.isLine){let on=et.linewidth;on===void 0&&(on=1),T.setLineWidth(on*Bt()),nt.isLineSegments?Ee.setMode(O.LINES):nt.isLineLoop?Ee.setMode(O.LINE_LOOP):Ee.setMode(O.LINE_STRIP)}else nt.isPoints?Ee.setMode(O.POINTS):nt.isSprite&&Ee.setMode(O.TRIANGLES);if(nt.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const on=nt._multiDrawStarts,zt=nt._multiDrawCounts,pn=nt._multiDrawCount,fe=Gt?Rt.get(Gt).bytesPerElement:1,zn=Q.get(et).currentProgram.getUniforms();for(let ai=0;ai<pn;ai++)zn.setValue(O,"_gl_DrawID",ai),Ee.render(on[ai]/fe,zt[ai])}else if(nt.isInstancedMesh)Ee.renderInstances(Ht,Ge,nt.count);else if(rt.isInstancedBufferGeometry){const on=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,zt=Math.min(rt.instanceCount,on);Ee.renderInstances(Ht,Ge,zt)}else Ee.render(Ht,Ge)};function xe(R,W,rt,et){P!==null&&R.isNodeMaterial&&P.setObject(et,R),tt===!0&&Wt.setState(R,rt,!1),R.transparent===!0&&R.side===nn&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,Yn(R,W,et),R.side=ei,R.needsUpdate=!0,Yn(R,W,et),R.side=nn):Yn(R,W,et)}this.compile=function(R,W,rt=null){rt===null&&(rt=R),P!==null&&P.renderStart(R,W,rt),b=Lt.get(rt),b.init(W),y.push(b),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),R!==rt&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(W.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),B=this.localClippingEnabled,tt=Wt.init(this.clippingPlanes,B),tt===!0&&Wt.setGlobalState(this.clippingPlanes,W),P!==null&&Yt.render(b.state.shadowsArray,rt,W);const et=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Ot=nt.material;if(Ot)if(Array.isArray(Ot))for(let kt=0;kt<Ot.length;kt++){const Ft=Ot[kt];xe(Ft,rt,W,nt),et.add(Ft)}else xe(Ot,rt,W,nt),et.add(Ot)}),b=y.pop(),P!==null&&P.renderEnd(),et},this.compileAsync=function(R,W,rt=null){const et=this.compile(R,W,rt);return new Promise(nt=>{function Ot(){if(et.forEach(function(kt){const Gt=Q.get(kt).currentProgram;(Gt===void 0||Gt.isReady())&&et.delete(kt)}),et.size===0){nt(R);return}setTimeout(Ot,10)}Xt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let De=null;function Ln(R){De&&De(R)}function dn(){Bn.stop()}function bi(){Bn.start()}const Bn=new Qf;Bn.setAnimationLoop(Ln),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){De=R,ot.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},ot.addEventListener("sessionstart",dn),ot.addEventListener("sessionend",bi),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(R,W);const rt=ot.enabled===!0&&ot.isPresenting===!0,et=E!==null&&(X===null||rt)&&E.begin(A,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,W,X),b=Lt.get(R,y.length),b.init(W),b.state.textureUnits=ut.getTextureUnits(),y.push(b),Z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Y.setFromProjectionMatrix(Z,ti,W.reversedDepth),B=this.localClippingEnabled,tt=Wt.init(this.clippingPlanes,B),S=It.get(R,w.length),S.init(),w.push(S),ot.enabled===!0&&ot.isPresenting===!0){const kt=A.xr.getDepthSensingMesh();kt!==null&&us(kt,W,-1/0,A.sortObjects)}us(R,W,0,A.sortObjects),S.finish(),P!==null&&P.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(pt,bt),At=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,At&&te.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Wt.beginShadows();const nt=b.state.shadowsArray;if(Yt.render(nt,R,W),tt===!0&&Wt.endShadows(),(et&&E.hasRenderPass())===!1){const kt=S.opaque,Ft=S.transmissive;if(b.setupLights(),W.isArrayCamera){const Gt=W.cameras;if(Ft.length>0)for(let qt=0,se=Gt.length;qt<se;qt++){const ae=Gt[qt];Ir(kt,Ft,R,ae)}At&&te.render(R);for(let qt=0,se=Gt.length;qt<se;qt++){const ae=Gt[qt];Dr(S,R,ae,ae.viewport)}}else Ft.length>0&&Ir(kt,Ft,R,W),At&&te.render(R),Dr(S,R,W)}X!==null&&G===0&&(ut.updateMultisampleRenderTarget(X),ut.updateRenderTargetMipmap(X)),et&&E.end(A),R.isScene===!0&&R.onAfterRender(A,R,W),Nt.resetDefaultState(),V=-1,J=null,y.pop(),y.length>0?(b=y[y.length-1],ut.setTextureUnits(b.state.textureUnits),tt===!0&&Wt.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,P!==null&&P.renderEnd()};function us(R,W,rt,et){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Y)){et&&xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Z);const kt=gt.update(R),Ft=R.material;Ft.visible&&S.push(R,kt,Ft,rt,xt.z,null,W)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Y))){const kt=gt.update(R),Ft=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xt.copy(R.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),xt.copy(kt.boundingSphere.center)),xt.applyMatrix4(R.matrixWorld).applyMatrix4(Z)),Array.isArray(Ft)){const Gt=kt.groups;for(let qt=0,se=Gt.length;qt<se;qt++){const ae=Gt[qt],Ht=Ft[ae.materialIndex];Ht&&Ht.visible&&S.push(R,kt,Ht,rt,xt.z,ae,W)}}else Ft.visible&&S.push(R,kt,Ft,rt,xt.z,null,W)}}const Ot=R.children;for(let kt=0,Ft=Ot.length;kt<Ft;kt++)us(Ot[kt],W,rt,et)}function Dr(R,W,rt,et){const{opaque:nt,transmissive:Ot,transparent:kt}=R;b.setupLightsView(rt),tt===!0&&Wt.setGlobalState(A.clippingPlanes,rt),et&&T.viewport(it.copy(et)),nt.length>0&&As(nt,W,rt),Ot.length>0&&As(Ot,W,rt),kt.length>0&&As(kt,W,rt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ir(R,W,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[et.id]===void 0){const Ht=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[et.id]=new qn(1,1,{generateMipmaps:!0,type:Ht?si:An,minFilter:ts,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const Ot=b.state.transmissionRenderTarget[et.id],kt=et.viewport||it;Ot.setSize(kt.z*A.transmissionResolutionScale,kt.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),Gt=A.getActiveCubeFace(),qt=A.getActiveMipmapLevel();A.setRenderTarget(Ot),A.getClearColor(Mt),lt=A.getClearAlpha(),lt<1&&A.setClearColor(16777215,.5),A.clear(),At&&te.render(rt);const se=A.toneMapping;A.toneMapping=ni;const ae=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),b.setupLightsView(et),tt===!0&&Wt.setGlobalState(A.clippingPlanes,et),As(R,rt,et),ut.updateMultisampleRenderTarget(Ot),ut.updateRenderTargetMipmap(Ot),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ge=0,Ge=W.length;ge<Ge;ge++){const Ce=W[ge],{object:Ee,geometry:on,material:zt,group:pn}=Ce;if(zt.side===nn&&Ee.layers.test(et.layers)){const fe=zt.side;zt.side=fn,zt.needsUpdate=!0,To(Ee,rt,et,on,zt,pn),zt.side=fe,zt.needsUpdate=!0,Ht=!0}}Ht===!0&&(ut.updateMultisampleRenderTarget(Ot),ut.updateRenderTargetMipmap(Ot))}A.setRenderTarget(Ft,Gt,qt),A.setClearColor(Mt,lt),ae!==void 0&&(et.viewport=ae),A.toneMapping=se}function As(R,W,rt){const et=W.isScene===!0?W.overrideMaterial:null;for(let nt=0,Ot=R.length;nt<Ot;nt++){const kt=R[nt],{object:Ft,geometry:Gt,group:qt}=kt;let se=kt.material;se.allowOverride===!0&&et!==null&&(se=et),Ft.layers.test(rt.layers)&&To(Ft,W,rt,Gt,se,qt)}}function To(R,W,rt,et,nt,Ot){P!==null&&nt.isNodeMaterial&&P.setObject(R,nt),R.onBeforeRender(A,W,rt,et,nt,Ot),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(A,W,rt,et,R,Ot),nt.transparent===!0&&nt.side===nn&&nt.forceSinglePass===!1?(nt.side=fn,nt.needsUpdate=!0,A.renderBufferDirect(rt,W,et,nt,R,Ot),nt.side=ei,nt.needsUpdate=!0,A.renderBufferDirect(rt,W,et,nt,R,Ot),nt.side=nn):A.renderBufferDirect(rt,W,et,nt,R,Ot),R.onAfterRender(A,W,rt,et,nt,Ot)}function Yn(R,W,rt){W.isScene!==!0&&(W=yt);const et=Q.get(R),nt=b.state.lights,Ot=b.state.shadowsArray,kt=nt.state.version,Ft=Pt.getParameters(R,nt.state,Ot,W,rt,b.state.lightProbeGridArray),Gt=Pt.getProgramCacheKey(Ft);let qt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,et.fog=W.fog;const se=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=Et.get(R.envMap||et.environment,se),et.envMapRotation=et.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",Jt),qt=new Map,et.programs=qt);let ae=qt.get(Gt);if(ae!==void 0){if(et.currentProgram===ae&&et.lightsStateVersion===kt)return Gi(R,Ft),ae}else Ft.uniforms=Pt.getUniforms(R),P!==null&&R.isNodeMaterial&&P.build(R,rt,Ft),R.onBeforeCompile(Ft,A),ae=Pt.acquireProgram(Ft,Gt),qt.set(Gt,ae),et.uniforms=Ft.uniforms;const Ht=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=Wt.uniform),Gi(R,Ft),et.needsLights=Dd(R),et.lightsStateVersion=kt,et.needsLights&&(Ht.ambientLightColor.value=nt.state.ambient,Ht.lightProbe.value=nt.state.probe,Ht.sunLights.value=nt.state.sun,Ht.sunLightShadows.value=nt.state.sunShadow,Ht.directionalLights.value=nt.state.directional,Ht.directionalLightShadows.value=nt.state.directionalShadow,Ht.spotLights.value=nt.state.spot,Ht.spotLightShadows.value=nt.state.spotShadow,Ht.rectAreaLights.value=nt.state.rectArea,Ht.ltc_1.value=nt.state.rectAreaLTC1,Ht.ltc_2.value=nt.state.rectAreaLTC2,Ht.pointLights.value=nt.state.point,Ht.pointLightShadows.value=nt.state.pointShadow,Ht.hemisphereLights.value=nt.state.hemi,Ht.sunShadowMatrix.value=nt.state.sunShadowMatrix,Ht.sunShadowCascade.value=nt.state.sunShadowCascade,Ht.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ht.spotLightMatrix.value=nt.state.spotLightMatrix,Ht.spotLightMap.value=nt.state.spotLightMap,Ht.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=b.state.lightProbeGridArray.length>0,et.currentProgram=ae,et.uniformsList=null,ae}function wi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ta.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Gi(R,W){const rt=Q.get(R);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function Ur(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(W.matrixWorld);for(let rt=0,et=R.length;rt<et;rt++){const nt=R[rt];if(nt.texture!==null&&nt.boundingBox.containsPoint(x))return nt}return null}function Nr(R,W,rt,et,nt){W.isScene!==!0&&(W=yt),ut.resetTextureUnits();const Ot=W.fog,kt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?W.environment:null,Ft=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ce.workingColorSpace,Gt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,qt=Et.get(et.envMap||kt,Gt),se=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ae=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ht=!!rt.morphAttributes.position,ge=!!rt.morphAttributes.normal,Ge=!!rt.morphAttributes.color;let Ce=ni;et.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ce=A.toneMapping);const Ee=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,on=Ee!==void 0?Ee.length:0,zt=Q.get(et),pn=b.state.lights;if(tt===!0&&(B===!0||R!==J)){const Te=R===J&&et.id===V;Wt.setState(et,R,Te)}let fe=!1;et.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==pn.state.version||zt.outputColorSpace!==Ft||nt.isBatchedMesh&&zt.batching===!1||!nt.isBatchedMesh&&zt.batching===!0||nt.isBatchedMesh&&zt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&zt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&zt.instancing===!1||!nt.isInstancedMesh&&zt.instancing===!0||nt.isSkinnedMesh&&zt.skinning===!1||!nt.isSkinnedMesh&&zt.skinning===!0||nt.isInstancedMesh&&zt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&zt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&zt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&zt.instancingMorph===!1&&nt.morphTexture!==null||zt.envMap!==qt||et.fog===!0&&zt.fog!==Ot||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Wt.numPlanes||zt.numIntersection!==Wt.numIntersection)||zt.vertexAlphas!==se||zt.vertexTangents!==ae||zt.morphTargets!==Ht||zt.morphNormals!==ge||zt.morphColors!==Ge||zt.toneMapping!==Ce||zt.morphTargetsCount!==on||!!zt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,zt.__version=et.version);let zn=zt.currentProgram;fe===!0&&(zn=Yn(et,W,nt),P&&et.isNodeMaterial&&P.onUpdateProgram(et,zn,zt));let ai=!1,Hi=!1,Rs=!1;const ye=zn.getUniforms(),Be=zt.uniforms;if(T.useProgram(zn.program)&&(ai=!0,Hi=!0,Rs=!0),et.id!==V&&(V=et.id,Hi=!0),zt.needsLights){const Te=Ur(b.state.lightProbeGridArray,nt);zt.lightProbeGrid!==Te&&(zt.lightProbeGrid=Te,Hi=!0)}if(ai||J!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ye.setValue(O,"projectionMatrix",R.projectionMatrix),ye.setValue(O,"viewMatrix",R.matrixWorldInverse);const Wi=ye.map.cameraPosition;Wi!==void 0&&Wi.setValue(O,at.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ye.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,Hi=!0,Rs=!0)}if(zt.needsLights&&(pn.state.sunShadowMap.length>0&&ye.setValue(O,"sunShadowMap",pn.state.sunShadowMap,ut),pn.state.directionalShadowMap.length>0&&ye.setValue(O,"directionalShadowMap",pn.state.directionalShadowMap,ut),pn.state.spotShadowMap.length>0&&ye.setValue(O,"spotShadowMap",pn.state.spotShadowMap,ut),pn.state.pointShadowMap.length>0&&ye.setValue(O,"pointShadowMap",pn.state.pointShadowMap,ut)),nt.isSkinnedMesh){ye.setOptional(O,nt,"bindMatrix"),ye.setOptional(O,nt,"bindMatrixInverse");const Te=nt.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ye.setValue(O,"boneTexture",Te.boneTexture,ut))}nt.isBatchedMesh&&(ye.setOptional(O,nt,"batchingTexture"),ye.setValue(O,"batchingTexture",nt._matricesTexture,ut),ye.setOptional(O,nt,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",nt._indirectTexture,ut),ye.setOptional(O,nt,"batchingColorTexture"),nt._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",nt._colorsTexture,ut));const Vi=rt.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&q.update(nt,rt,zn),(Hi||zt.receiveShadow!==nt.receiveShadow)&&(zt.receiveShadow=nt.receiveShadow,ye.setValue(O,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&W.environment!==null&&(Be.envMapIntensity.value=W.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=W3()),Hi){if(ye.setValue(O,"toneMappingExposure",A.toneMappingExposure),zt.needsLights&&Ld(Be,Rs),Ot&&et.fog===!0&&Vt.refreshFogUniforms(Be,Ot),Vt.refreshMaterialUniforms(Be,et,$,z,b.state.transmissionRenderTarget[R.id]),zt.needsLights&&zt.lightProbeGrid){const Te=zt.lightProbeGrid;Be.probesSH.value=Te.texture,Be.probesMin.value.copy(Te.boundingBox.min),Be.probesMax.value.copy(Te.boundingBox.max),Be.probesResolution.value.copy(Te.resolution)}Ta.upload(O,wi(zt),Be,ut)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ta.upload(O,wi(zt),Be,ut),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ye.setValue(O,"center",nt.center),ye.setValue(O,"modelViewMatrix",nt.modelViewMatrix),ye.setValue(O,"normalMatrix",nt.normalMatrix),ye.setValue(O,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const Te=et.uniformsGroups;for(let Wi=0,Cs=Te.length;Wi<Cs;Wi++){const $0=Te[Wi];N.update($0,zn),N.bind($0,zn)}}return zn}function Ld(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Dd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,W,rt){const et=Q.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),Q.get(R.texture).__webglTexture=W,Q.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const rt=Q.get(R);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,rt=0){X=R,k=W,G=rt;let et=null,nt=!1,Ot=!1;if(R){const Ft=Q.get(R);if(Ft.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(O.FRAMEBUFFER,Ft.__webglFramebuffer),it.copy(R.viewport),vt.copy(R.scissor),j=R.scissorTest,T.viewport(it),T.scissor(vt),T.setScissorTest(j),V=-1;return}else if(Ft.__webglFramebuffer===void 0)ut.setupRenderTarget(R);else if(Ft.__hasExternalTextures)ut.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const se=R.depthTexture;if(Ft.__boundDepthTexture!==se){if(se!==null&&Q.has(se)&&(R.width!==se.image.width||R.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(R)}}const Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ot=!0);const qt=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[W])?et=qt[W][rt]:et=qt[W],nt=!0):R.samples>0&&ut.useMultisampledRTT(R)===!1?et=Q.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?et=qt[rt]:et=qt,it.copy(R.viewport),vt.copy(R.scissor),j=R.scissorTest}else it.copy(H).multiplyScalar($).floor(),vt.copy(ht).multiplyScalar($).floor(),j=dt;if(rt!==0&&(et=C),T.bindFramebuffer(O.FRAMEBUFFER,et)&&T.drawBuffers(R,et),T.viewport(it),T.scissor(vt),T.setScissorTest(j),nt){const Ft=Q.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ft.__webglTexture,rt)}else if(Ot){const Ft=W;for(let Gt=0;Gt<R.textures.length;Gt++){const qt=Q.get(R.textures[Gt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Gt,qt.__webglTexture,rt,Ft)}}else if(R!==null&&rt!==0){const Ft=Q.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,rt)}V=-1};function Z0(R){const W=Q.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=U.textureFormatReadable(R.format),W.__typeReadable=U.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,rt,et,nt,Ot,kt,Ft=0){if(!(R&&R.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Gt=Gt[kt]),Gt){T.bindFramebuffer(O.FRAMEBUFFER,Gt);try{const qt=R.textures[Ft],se=qt.format,ae=qt.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ft);const Ht=Z0(qt);if(Ht.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-et&&rt>=0&&rt<=R.height-nt&&O.readPixels(W,rt,et,nt,Dt.convert(se),Dt.convert(ae),Ot)}finally{const qt=X!==null?Q.get(X).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,W,rt,et,nt,Ot,kt,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Gt=Gt[kt]),Gt)if(W>=0&&W<=R.width-et&&rt>=0&&rt<=R.height-nt){T.bindFramebuffer(O.FRAMEBUFFER,Gt);const qt=R.textures[Ft],se=qt.format,ae=qt.type;R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ft);const Ht=Z0(qt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ge),O.bufferData(O.PIXEL_PACK_BUFFER,Ot.byteLength,O.STREAM_READ),O.readPixels(W,rt,et,nt,Dt.convert(se),Dt.convert(ae),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ge=X!==null?Q.get(X).__webglFramebuffer:null;T.bindFramebuffer(O.FRAMEBUFFER,Ge);const Ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ud(O,Ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ge),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ot),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ge),O.deleteSync(Ce),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,rt=0){const et=Math.pow(2,-rt),nt=Math.floor(R.image.width*et),Ot=Math.floor(R.image.height*et),kt=W!==null?W.x:0,Ft=W!==null?W.y:0;ut.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,rt,0,0,kt,Ft,nt,Ot),T.unbindTexture()},this.copyTextureToTexture=function(R,W,rt=null,et=null,nt=0,Ot=0){let kt,Ft,Gt,qt,se,ae,Ht,ge,Ge;const Ce=R.isCompressedTexture?R.mipmaps[Ot]:R.image;if(rt!==null)kt=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,qt=rt.min.x,se=rt.min.y,ae=rt.isBox3?rt.min.z:0;else{const Be=Math.pow(2,-nt);kt=Math.floor(Ce.width*Be),Ft=Math.floor(Ce.height*Be),R.isDataArrayTexture?Gt=Ce.depth:R.isData3DTexture?Gt=Math.floor(Ce.depth*Be):Gt=1,qt=0,se=0,ae=0}et!==null?(Ht=et.x,ge=et.y,Ge=et.z):(Ht=0,ge=0,Ge=0);const Ee=Dt.convert(W.format),on=Dt.convert(W.type);let zt;W.isData3DTexture?(ut.setTexture3D(W,0),zt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ut.setTexture2DArray(W,0),zt=O.TEXTURE_2D_ARRAY):(ut.setTexture2D(W,0),zt=O.TEXTURE_2D),T.activeTexture(O.TEXTURE0),T.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),T.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),T.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const pn=T.getParameter(O.UNPACK_ROW_LENGTH),fe=T.getParameter(O.UNPACK_IMAGE_HEIGHT),zn=T.getParameter(O.UNPACK_SKIP_PIXELS),ai=T.getParameter(O.UNPACK_SKIP_ROWS),Hi=T.getParameter(O.UNPACK_SKIP_IMAGES);T.pixelStorei(O.UNPACK_ROW_LENGTH,Ce.width),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ce.height),T.pixelStorei(O.UNPACK_SKIP_PIXELS,qt),T.pixelStorei(O.UNPACK_SKIP_ROWS,se),T.pixelStorei(O.UNPACK_SKIP_IMAGES,ae);const Rs=R.isDataArrayTexture||R.isData3DTexture,ye=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Be=Q.get(R),Vi=Q.get(W),Te=Q.get(Be.__renderTarget),Wi=Q.get(Vi.__renderTarget);T.bindFramebuffer(O.READ_FRAMEBUFFER,Te.__webglFramebuffer),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Cs=0;Cs<Gt;Cs++)Rs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,nt,ae+Cs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Q.get(W).__webglTexture,Ot,Ge+Cs)),O.blitFramebuffer(qt,se,kt,Ft,Ht,ge,kt,Ft,O.DEPTH_BUFFER_BIT,O.NEAREST);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||Q.has(R)){const Be=Q.get(R),Vi=Q.get(W);T.bindFramebuffer(O.READ_FRAMEBUFFER,D),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,I);for(let Te=0;Te<Gt;Te++)Rs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,nt,ae+Te):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Be.__webglTexture,nt),ye?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vi.__webglTexture,Ot,Ge+Te):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Vi.__webglTexture,Ot),nt!==0?O.blitFramebuffer(qt,se,kt,Ft,Ht,ge,kt,Ft,O.COLOR_BUFFER_BIT,O.NEAREST):ye?O.copyTexSubImage3D(zt,Ot,Ht,ge,Ge+Te,qt,se,kt,Ft):O.copyTexSubImage2D(zt,Ot,Ht,ge,qt,se,kt,Ft);T.bindFramebuffer(O.READ_FRAMEBUFFER,null),T.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ye?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(zt,Ot,Ht,ge,Ge,kt,Ft,Gt,Ee,on,Ce.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(zt,Ot,Ht,ge,Ge,kt,Ft,Gt,Ee,Ce.data):O.texSubImage3D(zt,Ot,Ht,ge,Ge,kt,Ft,Gt,Ee,on,Ce):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ot,Ht,ge,kt,Ft,Ee,on,Ce.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ot,Ht,ge,Ce.width,Ce.height,Ee,Ce.data):O.texSubImage2D(O.TEXTURE_2D,Ot,Ht,ge,kt,Ft,Ee,on,Ce);T.pixelStorei(O.UNPACK_ROW_LENGTH,pn),T.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe),T.pixelStorei(O.UNPACK_SKIP_PIXELS,zn),T.pixelStorei(O.UNPACK_SKIP_ROWS,ai),T.pixelStorei(O.UNPACK_SKIP_IMAGES,Hi),Ot===0&&W.generateMipmaps&&O.generateMipmap(zt),T.unbindTexture()},this.initRenderTarget=function(R){Q.get(R).__webglFramebuffer===void 0&&ut.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ut.setTextureCube(R,0):R.isData3DTexture?ut.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ut.setTexture2DArray(R,0):ut.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){k=0,G=0,X=null,T.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const z0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:a0,AddEquation:Ms,AddOperation:lf,AdditiveBlending:uo,AgXToneMapping:l0,AlphaFormat:g0,AlwaysCompare:vf,AlwaysDepth:Da,AlwaysStencilFunc:df,ArcCurve:Lf,ArrayCamera:Kf,BackSide:fn,BasicDepthPacking:uf,Box3:cs,BoxGeometry:Pe,BufferAttribute:On,BufferGeometry:Re,ByteType:f0,Cache:Ea,Camera:F0,CanvasTexture:Nc,CatmullRomCurve3:Bc,CineonToneMapping:r0,CircleGeometry:bo,ClampToEdgeWrapping:mi,Color:Zt,ColorManagement:ce,ConstantAlphaFactor:rf,ConstantColorFactor:sf,Controls:Jf,CubeCamera:$f,CubeDepthTexture:Pf,CubeReflectionMapping:os,CubeRefractionMapping:Es,CubeTexture:A0,CubeUVReflectionMapping:Pr,CubicBezierCurve:P0,CubicBezierCurve3:Df,CullFaceBack:Nl,CullFaceFront:Gu,CullFaceNone:ku,Curve:ri,CurvePath:Uf,CustomBlending:Vu,CustomToneMapping:c0,CylinderGeometry:Cn,Data3DTexture:Ef,DataArrayTexture:M0,DataTexture:Ic,DefaultLoadingManager:Xf,DepthFormat:Mi,DepthStencilFormat:es,DepthTexture:xo,DirectionalLight:O0,DoubleSide:nn,DstAlphaFactor:Qu,DstColorFactor:tf,DynamicDrawUsage:Mf,EllipseCurve:Oc,EqualCompare:gf,EqualDepth:Ua,EquirectangularReflectionMapping:jo,EquirectangularRefractionMapping:Sa,Euler:Si,EventDispatcher:ki,ExternalTexture:R0,ExtrudeGeometry:Lr,Float32BufferAttribute:ne,FloatType:Wn,Fog:Dc,FrontSide:ei,Frustum:Uc,GLSL3:Bl,GreaterCompare:_f,GreaterDepth:Fa,GreaterEqualCompare:Pc,GreaterEqualDepth:Na,Group:de,HalfFloatType:si,HemisphereLight:U0,IcosahedronGeometry:hs,ImageLoader:qf,ImageUtils:bf,InstancedBufferAttribute:zl,InstancedMesh:yi,IntType:yc,InterleavedBuffer:Af,InterleavedBufferAttribute:yr,KeepStencilOp:ba,Layers:S0,LessCompare:mf,LessDepth:Ia,LessEqualCompare:Cc,LessEqualDepth:fo,Light:Vc,LightShadow:N0,LineCurve:L0,LineCurve3:If,LinearFilter:sn,LinearMipmapLinearFilter:ts,LinearMipmapNearestFilter:ya,LinearSRGBColorSpace:_r,LinearToneMapping:s0,LinearTransfer:xr,Loader:Hc,LoadingManager:Wf,MOUSE:Oi,Material:ls,MathUtils:le,Matrix2:Wl,Matrix3:jt,Matrix4:be,MaxEquation:Yu,Mesh:re,MeshBasicMaterial:bn,MeshDepthMaterial:Hf,MeshDistanceMaterial:Vf,MeshLambertMaterial:ee,MeshPhongMaterial:cr,MinEquation:qu,MirroredRepeatWrapping:po,MixOperation:cf,MultiplyBlending:Ol,MultiplyOperation:Cr,NearestFilter:Je,NearestMipmapLinearFilter:ko,NearestMipmapNearestFilter:hf,NeutralToneMapping:h0,NeverCompare:pf,NeverDepth:La,NoBlending:gi,NoColorSpace:Pi,NoToneMapping:ni,NormalBlending:io,NotEqualCompare:xf,NotEqualDepth:Oa,Object3D:we,ObjectSpaceNormalMap:ff,OneFactor:$u,OneMinusConstantAlphaFactor:af,OneMinusConstantColorFactor:of,OneMinusDstAlphaFactor:ju,OneMinusDstColorFactor:ef,OneMinusSrcAlphaFactor:i0,OneMinusSrcColorFactor:Ju,OrthographicCamera:Wc,PCFShadowMap:Qo,PCFSoftShadowMap:Hu,PMREMGenerator:Xl,Path:kl,PerspectiveCamera:en,Plane:fi,PlaneGeometry:oi,PointLight:Zf,PolyhedronGeometry:Fc,QuadraticBezierCurve:D0,QuadraticBezierCurve3:zc,Quaternion:zi,R11_EAC_Format:Xa,RED_GREEN_RGTC2_Format:mr,RED_RGTC1_Format:uc,REVISION:Sc,RG11_EAC_Format:pr,RGBAFormat:Xn,RGBAIntegerFormat:Rc,RGBA_ASTC_10x10_Format:oc,RGBA_ASTC_10x5_Format:nc,RGBA_ASTC_10x6_Format:ic,RGBA_ASTC_10x8_Format:sc,RGBA_ASTC_12x10_Format:rc,RGBA_ASTC_12x12_Format:ac,RGBA_ASTC_4x4_Format:Za,RGBA_ASTC_5x4_Format:$a,RGBA_ASTC_5x5_Format:Ka,RGBA_ASTC_6x5_Format:Ja,RGBA_ASTC_6x6_Format:Qa,RGBA_ASTC_8x5_Format:ja,RGBA_ASTC_8x6_Format:tc,RGBA_ASTC_8x8_Format:ec,RGBA_BPTC_Format:cc,RGBA_ETC2_EAC_Format:Wa,RGBA_PVRTC_2BPPV1_Format:Ga,RGBA_PVRTC_4BPPV1_Format:ka,RGBA_S3TC_DXT1_Format:er,RGBA_S3TC_DXT3_Format:nr,RGBA_S3TC_DXT5_Format:ir,RGBFormat:_0,RGB_BPTC_SIGNED_Format:lc,RGB_BPTC_UNSIGNED_Format:hc,RGB_ETC1_Format:Ha,RGB_ETC2_Format:Va,RGB_PVRTC_2BPPV1_Format:za,RGB_PVRTC_4BPPV1_Format:Ba,RGB_S3TC_DXT1_Format:tr,RGFormat:rs,RGIntegerFormat:Ac,RawShaderMaterial:Gf,Ray:T0,RedFormat:Ec,RedIntegerFormat:Tc,ReinhardToneMapping:o0,RenderTarget:wf,RepeatWrapping:dr,ReverseSubtractEquation:Xu,RingGeometry:Gc,SIGNED_R11_EAC_Format:qa,SIGNED_RED_GREEN_RGTC2_Format:dc,SIGNED_RED_RGTC1_Format:fc,SIGNED_RG11_EAC_Format:Ya,SRGBColorSpace:tn,SRGBTransfer:_e,Scene:y0,ShaderChunk:ie,ShaderLib:Qn,ShaderMaterial:Pn,Shape:kc,ShapeUtils:Ui,ShortType:d0,Sphere:yo,SphereGeometry:vn,Spherical:Vl,SplineCurve:I0,Sprite:Cf,SpriteMaterial:E0,SrcAlphaFactor:n0,SrcAlphaSaturateFactor:nf,SrcColorFactor:Ku,StaticDrawUsage:x0,SubtractEquation:Wu,SubtractiveBlending:Fl,TOUCH:pi,TangentSpaceNormalMap:gr,Texture:Qe,TextureLoader:Yf,TextureSource:Lc,TorusGeometry:xi,Triangle:Fn,TubeGeometry:wo,UVMapping:u0,Uint16BufferAttribute:b0,Uint32BufferAttribute:w0,UniformsLib:Ut,UniformsUtils:kf,UnsignedByteType:An,UnsignedInt101111Type:m0,UnsignedInt248Type:go,UnsignedInt5999Type:p0,UnsignedIntType:ii,UnsignedShort4444Type:bc,UnsignedShort5551Type:wc,UnsignedShortType:mo,VSMShadowMap:eo,Vector2:St,Vector3:F,Vector4:Ie,WebGLCoordinateSystem:ti,WebGLCubeRenderTarget:B0,WebGLRenderTarget:qn,WebGLRenderer:rd,WebGLUtils:sd,WebGPUCoordinateSystem:_o,WebXRController:wa,ZeroFactor:Zu,createCanvasElement:Sf,error:he,log:Mr,warn:Qt,warnOnce:ys},Symbol.toStringTag,{value:"Module"})),Kh={type:"change"},k0={type:"start"},ad={type:"end"},la=new T0,Jh=new fi,X3=Math.cos(70*le.DEG2RAD),Ve=new F,wn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},El=1e-6;class q3 extends Jf{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new zi,this._lastTargetPosition=new F,this._quat=new zi().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vl,this._sphericalDelta=new Vl,this._scale=1,this._panOffset=new F,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new F,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z3.bind(this),this._onPointerDown=Y3.bind(this),this._onPointerUp=$3.bind(this),this._onContextMenu=n_.bind(this),this._onMouseWheel=Q3.bind(this),this._onKeyDown=j3.bind(this),this._onTouchStart=t_.bind(this),this._onTouchMove=e_.bind(this),this._onMouseDown=K3.bind(this),this._onMouseMove=J3.bind(this),this._interceptControlDown=i_.bind(this),this._interceptControlUp=s_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Se.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kh),this.update(),this.state=Se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=wn:n>Math.PI&&(n-=wn),s<-Math.PI?s+=wn:s>Math.PI&&(s-=wn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ve.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<X3?this.object.lookAt(this.target):(Jh.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(Jh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>El||8*(1-this._lastQuaternion.dot(this.object.quaternion))>El||this._lastTargetPosition.distanceToSquared(this.target)>El?(this.dispatchEvent(Kh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?wn/60*this.autoRotateSpeed*t:wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ve.copy(s).sub(this.target);let o=Ve.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new St,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Y3(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Z3(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $3(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ad),this.state=Se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function K3(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Se.DOLLY;break;case Oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}break;case Oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(k0)}function J3(i){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Q3(i){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(i.preventDefault(),this.dispatchEvent(k0),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ad))}function j3(i){this.enabled!==!1&&this._handleKeyDown(i)}function t_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Se.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Se.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(k0)}function e_(i){switch(this._trackPointer(i),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Se.NONE}}function n_(i){this.enabled!==!1&&i.preventDefault()}function i_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{clamp:G0,lerp:Hn,smoothstep:hi}=le;function $e(i,t,e){let n=null,s=0;for(let o=1;o<e.length;o++){const[r,a]=e[o-1],[l,c]=e[o],h=l-r,f=c-a,u=Math.hypot(h,f);if(u<.01)continue;const d=G0(((i-r)*h+(t-a)*f)/u,0,u),p=r+h*d/u,_=a+f*d/u,g=Math.hypot(i-p,t-_);if(!n||g<n.distance){const m=-f/u,v=h/u;n={x:p,z:_,nx:m,nz:v,offset:(i-p)*m+(t-_)*v,run:s+d,distance:g}}s+=u}return n&&{...n,length:s}}function lr(i,t=0){return[Math.min(...i.map(([e])=>e))-t,Math.min(...i.map(([,e])=>e))-t,Math.max(...i.map(([e])=>e))+t,Math.max(...i.map(([,e])=>e))+t]}function Tl([i,t,e,n],[s,o,r,a]){return i<r&&e>s&&t<a&&n>o}function ha(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function $s(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([Hn(s[0],o[0],l),Hn(s[1],o[1],l)])}}return e}function o_(i){const t=i.edge,[e,n]=t[0],[s,o]=t.at(-1),r=Math.hypot(s-e,o-n),a=(s-e)/r,l=(o-n)/r,c=(d,p)=>(d-e)*a+(p-n)*l,h=t.slice(1).map((d,p)=>{const _=t[p],[g,m]=_,[v,M]=d,x=Math.hypot(v-g,M-m),S=c(g,m),b=c(v,M);return{a:_,b:d,span:x,start:S,end:b,offset:(y,E)=>((y-g)*(m-M)+(E-m)*(v-g))/x,bounds:lr([_,d],.005)}}),f=lr(t,i.reach??95),u=lr(t,.01);return{...i,length:r,station:c,segments:h,range:f,crestBounds:u}}function Al(i,t,e){const n=i.station(t,e);if(n<-.001||n>i.length+.001)return null;const s=i.segments.find(({end:f})=>n<=f+.001)??i.segments.at(-1),{a:o,b:r,offset:a,start:l,end:c}=s,h=G0((n-l)/(c-l),0,1);return{offset:a(t,e),upper:Hn(o[2],r[2],h),lower:Hn(o[3],r[3],h)}}function r_(i){const t=[];for(const e of i){if(!e.edge||e.edge.length<2)continue;const n={...e,upperDecks:e.upperDeck?[e.upperDeck]:[],lowerDecks:e.lowerDeck?[e.lowerDeck]:[]},s=t.at(-1);if(!s||s.soft||n.soft||s.edge.at(-1).some((o,r)=>Math.abs(o-n.edge[0][r])>.01)){t.push(n);continue}s.edge=[...s.edge,...n.edge.slice(1)],s.shore=[...s.shore,...n.shore.slice(1)],s.breaks=[...s.breaks??[],...n.breaks??[]],s.upperDecks.push(...n.upperDecks),s.lowerDecks.push(...n.lowerDecks),s.flatInland=Math.max(s.flatInland??10,n.flatInland??10),s.blendInland=Math.max(s.blendInland??50,n.blendInland??50),s.endFade=n.endFade}return t}function a_(i){const t=r_(i).map(o_),e=i.filter(({beach:g})=>g?.length>1).map(g=>({...g,range:lr(g.beach,g.reach??100)})),n=i.flatMap(g=>g.paths??[]),s=Object.assign({},...i.map(g=>g.upperIds)),o=Object.assign({},...i.map(g=>g.lowerIds)),r=Object.assign({},...i.map(g=>g.stairs)),a=Object.assign({},...i.map(g=>g.ramps)),l=Object.assign({},...i.map(g=>g.stairWidths)),c=Object.assign({},...i.map(g=>g.stairRun)),h=new Set(i.flatMap(g=>g.underDeckIds??[])),f=[...t,...e].map(g=>g.range);function u(g,m,v,M){const x=M?[M.section]:t;for(const S of x){if(!ha(g,m,S.range))continue;const b=Al(S,g,m);if(!b||b.offset<-(S.reach??95)||b.offset>52)continue;const w=$e(g,m,S.shore??[]),y=S.shoreRise??(S.soft?6.5:3.6),E=S.station(g,m),A=S.startFade??(S.soft?S.fade??12:11),L=S.endFade??(S.soft?S.fade??12:15),P=A?hi(E,0,A):1,C=L?1-hi(E,S.length-L,S.length):1,D=P*C,I=w?Hn(.18,b.lower,hi(w.distance,0,y)):b.lower;if(S.soft){const G=hi(b.offset,-(S.slopeWidth??18),0),X=1-hi(b.offset,10,50);return Hn(v,Hn(I,b.upper,G),D*X)}if(M?.section===S?M.upper:b.offset>=0){const G=1-hi(Math.max(0,b.offset),S.flatInland??10,S.blendInland??50);return Hn(v,b.upper,G*D)}if(!(w&&w.distance>(S.maxShoreDistance??105)))return Hn(v,I,D)}for(const S of e){if(!ha(g,m,S.range))continue;const b=$e(g,m,S.beach),w=$e(g,m,S.shore);if(!b||!w||b.distance>(S.reach??100))continue;const y=Math.max(6,$e(b.x,b.z,S.shore)?.distance??20);let E=0,A=S.beach[0][2];for(let C=1;C<S.beach.length;C++){const D=S.beach[C-1],I=S.beach[C],k=Math.hypot(I[0]-D[0],I[1]-D[1]);if(b.run<=E+k+.01){A=Hn(D[2],I[2],G0((b.run-E)/k,0,1));break}E+=k}const L=hi(b.run,0,12)*(1-hi(b.run,b.length-30,b.length)),P=1-hi(b.offset,12,55);return Hn(v,Hn(.18,A,hi(w.distance,0,y)),L*P)}return v}function d(g){const m=lr(g);for(const v of t){let w=function(y,E){y.length>=3&&b.push({ring:y,side:E})};if(v.soft||!Tl(m,v.crestBounds))continue;const{station:M,length:x}=v;if(!v.segments.filter(y=>Tl(m,y.bounds)).some(y=>{const E=g.map(([A,L])=>y.offset(A,L));return Math.min(...E)<=1e-7&&Math.max(...E)>=-1e-7}))continue;const b=[];w($s(g,([y,E])=>-M(y,E)));for(const y of v.segments){const{start:E,end:A,offset:L}=y;let P=$s(g,([C,D])=>M(C,D)-E);P=$s(P,([C,D])=>A-M(C,D)),!(P.length<3)&&(w($s(P,([C,D])=>L(C,D)),{section:v,upper:!0}),w($s(P,([C,D])=>-L(C,D)),{section:v,upper:!1}))}return w($s(g,([y,E])=>M(y,E)-x)),b}return null}function p(g,m){return t.some(v=>!v.soft&&ha(g,m,v.range)&&Math.abs(Al(v,g,m)?.offset??1/0)<7)}function _(g,m,v){for(const M of t){if(!ha(g,m,M.range))continue;const x=Al(M,g,m);if(x&&Math.abs(x.offset)<36)return x.lower}return v}return{sections:t,extras:n,upperWidths:s,lowerWidths:o,stairLevels:r,rampLevels:a,stairWidths:l,stairRuns:c,deckRoofs:h,apply:u,split:d,nearEdge:p,lowerGrade:_,refines:(g,m,v)=>f.some(M=>Tl([g,m,g+v,m+v],M))}}const Vo=Object.freeze({west:-647,east:-125,north:-138,south:129,innerWest:-624,innerEast:-144,innerNorth:-107,innerSouth:104}),Ki=i=>i.toFixed(1),{west:c_,east:l_,north:h_,south:u_,innerWest:f_,innerEast:d_,innerNorth:p_,innerSouth:m_}=Vo,H0=`
  float cartoonDistrict(vec2 worldXZ) {
    // The harbour curves north at the Ocean end of the promenade.
    float harbourBend = 61.0 * (1.0 - smoothstep(-595.0, -500.0, worldXZ.x));
    vec2 fromWestNorth = smoothstep(
      vec2(${Ki(c_)}, ${Ki(h_)} - harbourBend),
      vec2(${Ki(f_)}, ${Ki(p_)} - harbourBend), worldXZ);
    vec2 fromEastSouth = 1.0 - smoothstep(
      vec2(${Ki(d_)}, ${Ki(m_)}),
      vec2(${Ki(l_)}, ${Ki(u_)}), worldXZ);
    return fromWestNorth.x * fromWestNorth.y * fromEastSouth.x * fromEastSouth.y;
  }
`,Yc={cartoonEnabled:{value:1}};function g_(i){Yc.cartoonEnabled.value=i?1:0}const Qh={plaster:{tile:"plaster",size:[2.9,2.9],grain:.63,tint:"#ebc190",palette:.3},stone:{tile:"stone",size:[3.3,2.05],grain:.67,tint:"#caa36b",palette:.18},paving:{tile:"stone",size:[3.3,3.3],grain:.39,tint:"#dfc59c",palette:.17},laidPaving:{tile:"plaster",size:[2.6,2.6],grain:.65,tint:"#e5c8a0",palette:.25},roof:{tile:"terracotta",size:[2.45,1.45],grain:.5,tint:"#bd6243",palette:.22},flatRoof:{tile:"plaster",size:[5.1,5.1],grain:.44,tint:"#c9bc9f",palette:.12},foliage:{tile:"leaves",size:[2.3,2.3],grain:.79,tint:"#7ea72f",palette:.52},glass:{tile:"plaster",size:[4,3],grain:.16,tint:"#4e7881",palette:.38},wood:{tile:"plaster",size:[1.2,3.5],grain:.53,tint:"#94663c",palette:.14},metal:{tile:"plaster",size:[3.5,3.5],grain:.17,tint:"#ad9d86",palette:.09},ground:{tile:"plaster",size:[8.2,8.2],grain:.53,tint:"#d8b97e",palette:.2},road:{tile:"plaster",size:[4.3,4.3],grain:.33,tint:"#918780",palette:.23}},__={plaster:.694,stone:.568,terracotta:.271,leaves:.232},Rl=new Map,jh=new WeakSet;function cd(i){if(Rl.has(i))return Rl.get(i);const t={value:0},e=`./art/waterfront-${i}.webp`,n=new Yf().load(e,()=>{t.value=1});n.colorSpace=tn,n.wrapS=po,n.wrapT=i==="terracotta"?dr:po,n.anisotropy=4;const s={texture:n,ready:t};return Rl.set(i,s),s}function x_(){if(typeof document>"u")return{waterPigment:{value:null},waterPigmentReady:{value:0}};const i=cd("water");return{waterPigment:{value:i.texture},waterPigmentReady:i.ready}}function as(i,{surface:t="plaster",strength:e=1}={}){if(jh.has(i)||typeof document>"u")return i;jh.add(i);const{tile:n,size:s,grain:o,tint:r,palette:a}=Qh[t]??Qh.plaster,l=cd(n),c=i.onBeforeCompile,h=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${h}|anapa-paint|${t}|${e}`,i.onBeforeCompile=function(f,u){c.call(this,f,u),Object.assign(f.uniforms,Yc,{pigment:{value:l.texture},pigmentReady:l.ready,pigmentMean:{value:__[n]},pigmentPeriod:{value:new St(...s)},pigmentTint:{value:new Zt(r)},pigmentPalette:{value:a},pigmentGrain:{value:o},pigmentStrength:{value:e}}),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
      `)},i.needsUpdate=!0,i}const ld="#526e7c",v_="#f0eee6";function me(i,t,{surface:e="plaster",surfaces:n={}}={}){const s=new Map,o=new Map([[ld,"glass"]]);for(const[d,p]of Object.entries(n))for(const _ of p)o.set(_,d);const r=new de;r.name=t,i.add(r);function a(d,p,_){const g=o.get(d)??p;s.has(g)||s.set(g,new Map);const m=s.get(g);m.has(d)||m.set(d,[]);const v=m.get(d);for(let M=2;M<_.length;M++)v.push(..._[0],..._[M-1],..._[M])}function l(d,...p){a(d,e,p)}function c(d,p,_){const g=d.map(([m,v])=>new St(m,v));for(const[m,v,M]of Ui.triangulateShape(g,[])){const[x,S,b]=[g[m],g[v],g[M]],y=(S.x-x.x)*(b.y-x.y)-(S.y-x.y)*(b.x-x.x)>0?[x,b,S]:[x,S,b];a(_,"paving",y.map(({x:E,y:A})=>[E,p,A]))}}function h(d,p,_,g,m){l(m,[d[0],_,d[1]],[p[0],_,p[1]],[p[0],g,p[1]],[d[0],g,d[1]])}function f(d,p,_,g,m=g){const v=d.reduce((M,[x,S],b)=>{const[w,y]=d[(b+1)%d.length];return M+x*y-w*S},0);d.forEach((M,x)=>{const S=d[(x+1)%d.length];v>0?h(S,M,p,_,g):h(M,S,p,_,g)}),m&&c(d,_,m)}function u(d,p,_,g){const m=new F(...d),v=new F(...p),M=v.clone().sub(m).normalize(),S=(Math.abs(M.z)<.9?new F(0,0,1):new F(1,0,0)).cross(M).normalize().multiplyScalar(_/2),b=M.clone().cross(S),w=[m,v].map(y=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([E,A])=>y.clone().addScaledVector(S,E).addScaledVector(b,A).toArray()));for(let y=0;y<4;y++){const E=(y+1)%4;a(g,"metal",[w[0][y],w[1][y],w[1][E],w[0][E]])}a(g,"metal",w[0]),a(g,"metal",w[1].reverse())}return{face:l,flat:c,wall:h,shell:f,beam:u,finish(){for(const[d,p]of s)for(const[_,g]of p){const m=new Re;m.setAttribute("position",new ne(g,3)),m.computeVertexNormals();const v=as(new ee({color:_,side:nn}),{surface:d}),M=new re(m,v);M.castShadow=!0,M.receiveShadow=!0,r.add(M)}}}}function _t(i,t,e){return i.map((n,s)=>le.lerp(n,t[s],e))}function Ue(i){return i.reduce(([t,e],[n,s])=>[t+n/i.length,e+s/i.length],[0,0])}function Rn(i,t,e,n,s,o,r,a=v_){const l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=Math.max(1,Math.round(l/r));for(let h=0;h<c;h++){const f=_t(n,_t(t,e,(h+.035)/c),1.003),u=_t(n,_t(t,e,(h+.965)/c),1.003);i.wall(f,u,s,o,ld),i.wall(u,_t(n,_t(t,e,(h+1)/c),1.003),s,o,a)}}function M_(i,t,e,n){const s=new we;s.position.set(t,e+3.98,n),s.userData.nightLight={color:"#ffcc88",intensity:27,range:9,ground:e},i.add(s)}function S_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.48)"),e.addColorStop(.28,"rgba(255,255,255,0.22)"),e.addColorStop(.63,"rgba(255,255,255,0.05)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new E0({map:new Nc(i),color:"#ffc47a",opacity:.78,blending:uo,depthWrite:!1,toneMapped:!1})}function y_(){const i=new re(new vn(1,32,16),new Pn({side:fn,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{zenith:{value:new Zt("#45567f")},horizon:{value:new Zt("#9da8c7")},twilight:{value:new Zt("#d3a699")}},vertexShader:`
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
    `}));return i.scale.setScalar(1500),i.frustumCulled=!1,i.renderOrder=-100,i}function b_(i,t){const e=[],n=[];for(const{position:{x:c,z:h},ground:f}of i){let u=function(p,_){const g=_*Math.PI*2/20,m=p/5,v=c+m*7.4*Math.cos(g),M=h+m*7.4*Math.sin(g),x=t(v,M),S=1-Math.min(1,Math.max(0,(Math.abs(x-f)-.28)/.72)),b=Math.min(f+.9,Math.max(f-.9,x))+.215;return[v,b,M,(1-m*m)**3*S]},d=function(...p){if(p.some(_=>_[3]>0))for(const[_,g,m,v]of p)e.push(_,g,m),n.push(v)};for(let p=0;p<5;p++)for(let _=0;_<20;_++){const g=u(p,_),m=u(p,_+1),v=u(p+1,_),M=u(p+1,_+1);p&&d(g,m,v),d(m,M,v)}}const a=new Re;a.setAttribute("position",new ne(e,3)),a.setAttribute("lampStrength",new ne(n,1));const l=new Pn({side:nn,transparent:!0,depthWrite:!1,blending:uo,vertexShader:`
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
    `});return new re(a,l)}function w_(i,t){const e=[],n=[];i.updateMatrixWorld(!0),i.traverse(f=>{const{setEvening:u,nightLight:d}=f.userData;u&&e.push(u),d&&n.push({...d,position:f.getWorldPosition(new F)})});const s=n.filter(f=>f.ground!==void 0),o=new de;o.name="Вечерний свет";const r=y_();if(o.add(r),s.length&&(o.add(b_(s,t)),typeof document<"u")){const f=S_();for(const{position:u}of s){const d=new Cf(f);d.position.copy(u),d.scale.set(2.5,2.5,1),o.add(d)}}const a=Array.from({length:5},()=>{const f=new Zf("#fff",0,9,2);return o.add(f),f});i.add(o);const l=new F(1/0,1/0,1/0);let c=!1;function h(f){if(!c||(r.position.copy(f.position),l.distanceToSquared(f.position)<1.5))return;l.copy(f.position);const{x:u,y:d,z:p}=l,g=d-t(u,p)<26?n.map(m=>({source:m,distance:m.position.distanceToSquared(l)})).filter(({distance:m})=>m<33**2).sort((m,v)=>m.distance-v.distance):[];a.forEach((m,v)=>{const M=g[v]?.source;m.intensity=M?.intensity??0,M&&(m.position.copy(M.position),m.color.set(M.color),m.distance=M.range)})}return{setEnabled(f){c=f,o.visible=c,l.set(1/0,1/0,1/0),e.forEach(u=>u(c))},update:h}}function Cl(i,t,e,n=10){return Array.from({length:n},(s,o)=>{const r=o*Math.PI*2/n;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function hd(i,t,{name:e,lights:n,planters:s}){const o="#878887",r="#646765",a=me(i,e,{surfaces:{metal:[o,r],stone:["#d8d4c7"],ground:["#8c7e60"]}}),l=new yi(new vn(.23,10,7),new ee({color:"#eddaa4"}),n.length*4),c=new yi(new hs(1,1),as(new ee({color:"#607a45"}),{surface:"foliage"}),s.length*7);l.name="Плафоны верхней набережной",l.userData.setEvening=f=>{l.material.emissive.set(f?"#ffc37a":"#000"),l.material.emissiveIntensity=f?1.34:0},c.name="Кустарники в клумбах набережной";const h=new we;n.forEach(([f,u],d)=>{const p=t(f,u)+.03;M_(i,f,p,u),a.shell(Cl(f,u,.3),p-.13,p+.35,o),a.shell(Cl(f,u,.19),p+.32,p+3.72,o);for(const _ of[.44,.68,3.55,3.7])a.shell(Cl(f,u,.25),p+_,p+_+.1,r);for(let _=0;_<4;_++){const g=Math.PI/4+_*Math.PI/2,m=Math.cos(g),v=Math.sin(g),M=[f+m*.46,p+3.77,u+v*.46];a.beam([f+m*.1,p+3.49,u+v*.1],M,.075,r),h.position.set(M[0],M[1]+.19,M[2]),h.updateMatrix(),l.setMatrixAt(d*4+_,h.matrix)}}),s.forEach(({x:f,z:u,width:d,depth:p,angle:_},g)=>{const m=(x,S)=>[f+x*Math.cos(_)-S*Math.sin(_),u+x*Math.sin(_)+S*Math.cos(_)],v=(x,S)=>[[-x,-S],[x,-S],[x,S],[-x,S]].map(b=>m(...b)),M=t(f,u);a.shell(v(d/2,p/2),M-.1,M+.16,"#d8d4c7"),a.flat(v(d/2-.17,p/2-.17),M+.175,"#8c7e60");for(let x=0;x<7;x++){const[S,b]=m((x-3)*d/7.8,x%2?-.45:.52);h.position.set(S,M+.53,b);const w=.52+x%3*.17;h.scale.set(w,.5+x%2*.26,w*.84),h.rotation.y=x*1.8,h.updateMatrix(),c.setMatrixAt(g*7+x,h.matrix)}}),l.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,i.add(l,c),a.finish()}const xs={front:[[-549.25,-30.85],[-517.3,-24.44]],depth:9.15,grade:9.03},E_=[{soft:!0,edge:[[-1194.65,-.88,7.9,2.35],[-1188.5,-6.93,8.7,2.35],[-1176.23,-13.69,9.8,2.35],[-1157.84,-21.72,11.8,2.35],[-1124.63,-25.52,12.3,2.35],[-1073.23,-30.79,12.65,2.35],[-1033.68,-39.87,13.25,2.35],[-982.49,-49.59,13.9,2.35],[-926.44,-60.99,13.15,2.4],[-878.85,-73.87,12.1,2.4],[-852,-77.5,11,2.4],[-830.48,-78.2,8.65,2.4]],shore:[[-1195,-24],[-1186.4,-36.11],[-1161.69,-54.98],[-1142.57,-67.42],[-1119.74,-82.36],[-1095.11,-100.63],[-1060.66,-124.59],[-1054.64,-114.35],[-1036.42,-110.13],[-995.48,-107.91],[-965.35,-114.27],[-903.18,-133.53],[-868.87,-118.74],[-830.48,-132]],upperIds:{1293020296:7},lowerIds:{},stairs:{}},{soft:!0,slopeWidth:10.8,shoreRise:1.5,fade:0,edge:[[-830.48,-78.2,8.65,2.4],[-820.6,-84.1,6.7,2.4],[-806.05,-90.4,5.7,2.45],[-783.75,-94.4,4.6,2.45],[-753.37,-97.1,3.65,2.45],[-742.87,-98.3,3.45,2.45],[-728.5,-94.3,4.15,2.45],[-696.91,-88.7,5.45,2.45],[-673.68,-83.1,6.45,2.5],[-658.2,-79.35,6.8,2.5],[-641.17,-75.3,7.1,2.5],[-638.31,-66,7.65,2.5],[-605.95,-55.15,8.5,2.55],[-595.02,-59.9,8.8,2.6]],shore:[[-830.48,-132],[-827,-183.4],[-783.08,-190.76],[-774.16,-192.09],[-729.85,-199.2],[-709.27,-201.43],[-646.49,-232.7],[-636.97,-260.15],[-623.68,-157.59],[-595.02,-144]],lowerDeck:[[-826,-133],[-837,-178],[-783,-187],[-739,-193],[-728,-190],[-715,-191],[-697,-176],[-682,-150],[-659,-139],[-662,-109],[-704,-103],[-740,-100],[-779,-101],[-813,-103],[-825,-114]],upperIds:{596938944:4.2,178479537:3.2},lowerIds:{},stairs:{596938943:[8.65,6.7]},stairWidths:{596938943:2.5}},{fade:0,edge:[[-595.02,-59.9,8.8,2.6],[-587.5,-63.5,8.8,2.6],[-576,-56.7,9.05,2.6],[-559,-50.3,9.15,2.6],[-550,-46,9.1,2.6],[-531.8,-47.6,9.04,2.6],[-525.5,-50.1,9,2.6],[-519.4,-61.2,8.96,2.6],[-501.2,-54.2,8.82,2.6],[-485.4,-49,8.71,2.6],[-480.1,-48.6,8.66,2.6],[-447.5,-40.1,8.5,2.6],[-416,-34.55,8.3,2.6],[-410.5,-34.1,8.28,2.6],[-380,-29.6,8.12,2.6],[-372,-29,8.07,2.6],[-350,-29.15,7.98,2.6],[-320,-29,7.9,2.6],[-300,-32,7.8,2.6]],shore:[[-595.02,-144],[-573.37,-123.91],[-563.51,-116.13],[-552.8,-94],[-534.2,-89],[-490,-73.3],[-467.6,-82.1],[-442.59,-61.36],[-405.47,-52.91],[-397.91,-61.01],[-379.03,-54.91],[-372.9,-48.36],[-320.33,-44.46],[-300,-47.3]],upperIds:{178484904:11,701760799:3.45},lowerIds:{701760797:5.2},underDeckIds:["223948923","223948927","223948934","223948896","223948899","223948902","223948903","223948904","223948906","223948908"],upperDeck:[[-595.02,-59.9],[-587.5,-63.5],[-576,-56.7],[-559,-50.3],[-550,-46],[-531.8,-47.6],[-525.5,-50.1],[-519.4,-61.2],[-501.2,-54.2],[-485.4,-49],[-480.1,-48.6],[-447.5,-40.1],[-416,-34.55],[-410.5,-34.1],[-380,-29.6],[-372,-29],[-350,-29.15],[-320,-29],[-300,-32],[-300,2.5],[-314,1.7],[-365,-.3],[-394,-.6],[-419,-4.4],[-455,-13.2],[-477,-19.4],[-515,-27.5],[-549,-34.8],[-595,-47.1]],stairs:{701760798:[2.6,5]},stairWidths:{701760798:2.25},ramps:{701760799:[5,8.8]},breaks:[[-589,-62.9,4.2]]}],T_=[[-515.4,-54.6],[-507,-52.4],[-498.1,-49.9],[-488.9,-46.8],[-479.9,-44.6],[-473.2,-42.7],[-463.8,-40.8],[-456.4,-39.3],[-447.3,-37.4],[-441.7,-36.2],[-436.7,-36],[-430.1,-34.8],[-423.4,-34],[-372.9,-24.5],[-364.9,-24.3],[-356.7,-24.9],[-348.5,-24.3],[-339.6,-24.7]],A_=[{x:-512.2,z:-44.4,width:7.2,depth:2.15,angle:.27},{x:-461.1,z:-30.3,width:11.1,depth:2,angle:.17},{x:-442.5,z:-26.9,width:6.1,depth:2.1,angle:.2},{x:-426.2,z:-23.1,width:7.9,depth:2.2,angle:.18}];function R_(i,t){hd(i,t,{name:"Верхняя набережная · фонари и клумбы",lights:T_,planters:A_})}const C_=[{edge:[[-300,-32,7.8,2.6],[-284,-34,7.75,2.6],[-267,-37.5,7.65,2.6],[-246,-43,7.55,2.6],[-240,-42,7.5,2.6],[-236,-29,7.42,2.6],[-228,-19,7.35,2.6],[-218,-7,7.25,2.6]],shore:[[-300,-47.3],[-289.6,-48.8],[-177.1,-87.5],[-161.9,-92.7]],upperDeck:[[-300,-32],[-284,-34],[-267,-37.5],[-246,-43],[-240,-42],[-236,-29],[-228,-19],[-218,-7],[-221,3],[-248,4],[-279,3],[-300,3]],upperIds:{178484904:11},lowerIds:{701760797:5.2,121213094:7.2},underDeckIds:["223948913","223948916"],stairs:{597090335:[7.25,5.97],597090341:[3.25,1.1]},stairWidths:{597090335:13.2,597090341:5.4},stairRun:{597090335:[.09,.36]},ramps:{121213094:[5.97,3.25],"701760797-approach":[3.88,2.6]},paths:[{id:"701760797-approach",points:[[-171.1,-33],[-199.26,-67.75]],width:5.2,level:"lower",replaceStartOf:"701760797"}],breaks:[[-218,-7,4]],flatInland:30,blendInland:52,fade:0},{beach:[[-224.06,-6.35,7.25],[-211.83,-6.43,5.97],[-171.1,-33,3.88],[-159.07,-41.45,3.25],[-144.56,-51.21,1.1],[-81.57,-93.77,1.4],[-39.04,-127.25,1.62],[-.76,-159.34,1.82],[25.53,-190.84,1.95],[71.71,-243.52,2.1],[152.59,-369.21,2.15],[173.74,-356.54,2.2],[184.72,-355.26,2.22],[200.31,-357.98,2.23],[218.09,-367.72,2.25],[238.68,-386.95,2.28],[248.36,-396.07,2.35],[217.53,-444.44,2.24],[252.43,-514.76,2.14],[274.46,-559.15,2.05],[283.14,-576.63,2.03],[323,-654.46,1.98]],shore:[[-177.1,-87.5],[-161.9,-92.7],[-53.6,-178.4],[-34.6,-198.7],[31.6,-303.9],[50.4,-343.6],[84.5,-417.2],[123.2,-492],[197.2,-622.5],[224.45,-686]],lowerIds:{597090338:6.5,121159650:7.5,178302326:5.7},stairs:{851920304:[3,2.28]}}],P_=[[-295.8,-26.2],[-288.7,-27.1],[-281.6,-28.1],[-272.7,-29.1],[-265.8,-30.2],[-257.3,-31.1],[-250.1,-32.8],[-244.6,-33.7]];function L_(i,t){hd(i,t,{name:"Фонари у Алых парусов",lights:P_,planters:[]})}const{clamp:tu,lerp:cn,smoothstep:ve}=le;function ua(i){return[Math.min(...i.map(([t])=>t)),Math.min(...i.map(([,t])=>t)),Math.max(...i.map(([t])=>t)),Math.max(...i.map(([,t])=>t))]}const Ks=([i,t,e,n],s)=>[i-s,t-s,e+s,n+s];function ud(i){const[t,e]=i.origin,[n,s]=i.scale,o=(H,ht)=>[(H-t)*n,(e-ht)*s],r=(H,ht,dt,Y)=>[...o(H,Y),...o(dt,ht)],a=r(37.2953,44.8868,37.3014,44.8932),l=r(37.2982,44.8933,37.3078,44.8984),c=r(37.3063,44.89613,37.31234,44.89775),h=i.surveyLines??{},f=h[125813146],u=h[400800619],d=h[657038813],p=h[1142991105],_=i.buildings.find(H=>H.id==="977564342")?.rings[0],g=_?.length===8?[_[7],_[6]]:null,m=a_([...E_,...C_]),v=i.landmarks.find(H=>H.id==="lighthouse")?.position,M=i.landmarks.find(H=>H.id==="port")?.position,x=r(37.303,44.8967,37.3069,44.9012),S=Ks(ua(xs.front),xs.depth+9),b=i.buildings.find(H=>H.id==="r11979734-0")?.rings[0],w=b&&Ks(ua(b),18),y=i.roads.find(H=>H.id==="977564885")?.points,E=y?.[0],A=new Map([["46844613",8],["1293020297",7],["1293020296",7],...Object.entries(m.upperWidths),...Object.entries(m.lowerWidths),...Object.entries(m.stairWidths)]),L=new Map([["977562764",[null,3.8]],["977562762",[3.8,1.65]],["977562763",[3.8,1.65]],["597090335",[7.25,2.6]],["597090341",[2.6,.9]],...Object.entries(m.stairLevels)]),P=new Map(m.extras.filter(H=>H.replaceStartOf).map(H=>[H.replaceStartOf,H.points.length-1])),C=[...i.roads.map(H=>P.has(H.id)?{...H,points:H.points.slice(P.get(H.id))}:H),...m.extras.map(H=>({...H,kind:H.kind??"footway"}))],D=C.filter(H=>L.has(H.id)).map(H=>({...H,width:A.get(H.id)??H.width,bounds:ua(H.points)})),I=C.filter(H=>H.id in m.rampLevels).map(H=>({...H,width:A.get(H.id)??H.width,bounds:ua(H.points)})),k=D.filter(H=>H.id in m.stairLevels),G=[...D,...I],X=[...k,...I],V=(H,ht,[dt,Y,tt,B])=>H>=dt&&H<=tt&&ht>=Y&&ht<=B;function J(H,ht,dt){let Y=!1,tt=1/0;for(let B=0,Z=dt.length-1;B<dt.length;Z=B++){const[at,xt]=dt[Z],[yt,At]=dt[B];xt>ht!=At>ht&&H<(yt-at)*(ht-xt)/(At-xt)+at&&(Y=!Y);const Bt=yt-at,O=At-xt,$t=tu(((H-at)*Bt+(ht-xt)*O)/(Bt*Bt+O*O||1),0,1);tt=Math.min(tt,Math.hypot(H-at-$t*Bt,ht-xt-$t*O))}return Y?0:tt}function it(H,ht,dt){const Y=$e(H,ht,f);if(Y.distance>100)return dt(H,ht);const tt=1-ve(Y.distance,49,91),B=ve(Y.run,0,36),Z=1-ve(ht,a[3]-55,a[3]-12),at=v?1-ve(Math.hypot(H-v[0],ht-v[1]),85,260):0,xt=cn(dt(Y.x-Y.nx*28,Y.z-Y.nz*28),22.4,at);let yt=xt;if(Y.offset>0){const At=Math.max(7,$e(Y.x,Y.z,u).distance),Bt=1.65*ve($e(H,ht,u).distance,0,8)+.18;yt=cn(xt,Bt,ve(Y.offset,Math.min(1.2,At*.08),At*.66))}else yt=cn(xt,dt(H,ht),ve(-Y.offset,15,42));if(g&&Y.distance<48){const At=$e(H,ht,g),Bt=1-ve(At.distance,14,23),O=cn(4.35,1.8,ve(At.offset,0,10));yt=cn(yt,Math.min(yt,O),Bt)}return cn(dt(H,ht),yt,tt*B*Z)}function vt(H,ht,dt){const Y=$e(H,ht,d);if(Y.distance>82||Y.offset<-15)return dt(H,ht);const tt=dt(Y.x-Y.nx*14,Y.z-Y.nz*14),B=cn(tt,2.35,ve(Y.offset,.5,15)),Z=ve(Y.run,0,40)*(1-ve(Y.run,Y.length-45,Y.length));return cn(dt(H,ht),B,Z*(1-ve(Y.distance,58,82)))}function j(H,ht,dt,Y){if(f&&u&&V(H,ht,a))return it(H,ht,dt);let tt=d&&V(H,ht,l)?vt(H,ht,dt):dt(H,ht);if(M&&V(H,ht,x)){const[B,Z,at,xt]=x,yt=ve(Math.min(H-B,at-H,ht-Z,xt-ht),2,26)*(1-ve(ht,M[1]+13,M[1]+52)),At=cn(1.8,2.55,ve(ht,M[1]-73,M[1]+8));tt=cn(tt,At,yt)}return m.apply(H,ht,tt,Y)}function Mt(H,ht){const dt=L.get(H.id);if(!dt)return null;const Y=dt[0]??j(...E??H.points[0],ht),tt=dt[1];return{from:Y,to:tt,run:m.stairRuns[H.id]??[0,1]}}function lt(H,ht,dt){const Y=m.rampLevels[H.id];if(!Y)return;const tt=$e(ht,dt,H.points);return cn(Y[0],Y[1],tt.run/tt.length)}function ct(H,ht,dt,Y){let tt=j(H,ht,dt,Y);if(V(H,ht,S)){const B=$e(H,ht,xs.front),Z=Math.sqrt(Math.max(0,B.distance**2-B.offset**2)),at=Math.max(Z,-B.offset,B.offset-xs.depth);tt=cn(tt,xs.grade,1-ve(at,1.8,7))}if(w&&V(H,ht,w)){const B=J(H,ht,b);tt=cn(tt,xs.grade,1-ve(B,10,17))}if(E&&Math.abs(H-E[0])<14&&Math.abs(ht-E[1])<14){const B=$e(H,ht,y);B.distance<5&&(tt=cn(tt,j(...E,dt),1-ve(B.distance,1.6,5)))}for(const B of G){if(!V(H,ht,Ks(B.bounds,Math.max(4.5,B.width/2+2))))continue;const Z=$e(H,ht,B.points),at=B.width/2,xt=!X.includes(B),yt=xt?4.3:at+1.6;if(Z.distance>yt)continue;const At=m.rampLevels[B.id],{from:Bt,to:O,run:$t}=At?{from:At[0],to:At[1],run:[0,1]}:Mt(B,dt),Xt=tu((Z.run/Z.length-$t[0])/($t[1]-$t[0]),0,1),U=cn(Bt,O,Xt)-($t[0]===0&&$t[1]===1?.08:.23);tt=cn(tt,U,1-ve(Z.distance,xt?1.65:at,yt))}return tt}function z(H,ht,dt){return dt.breaks?.some(([Y,tt,B])=>Math.hypot(H-Y,ht-tt)<B)||X.some(Y=>V(H,ht,Ks(Y.bounds,Y.width/2+.5))&&$e(H,ht,Y.points).distance<Y.width/2+.3)}function $(H,ht){return X.some(dt=>V(H,ht,Ks(dt.bounds,dt.width/2+2)))}function pt(H,ht,dt){return k.some(Y=>{const[tt,B,Z,at]=Ks(Y.bounds,Y.width/2+2);return H<Z&&ht<at&&H+dt>tt&&ht+dt>B})}function bt(H,ht,dt){if(f&&u&&V(H,ht,a)){const Y=$e(H,ht,f),tt=$e(H,ht,u),B=(1-ve(tt.distance,5,11))*(1-ve(dt,2.2,3.8));if(B>0)return["shingle",B];const Z=ve(Y.offset,.5,4)*(1-ve(Y.distance,28,43))*ve(dt,2,5.5);if(Z>0)return["rockLight",Z*(.74+.21*Math.sin(dt*1.7+H*.027))]}if(p&&V(H,ht,c)){const Y=(1-ve($e(H,ht,p).distance,3.2,6.4))*(1-ve(dt,2.3,3.1));if(Y>0)return["riprap",Y]}if(V(H,ht,x)&&dt<7){const[Y,tt,B,Z]=x;return["quay",ve(Math.min(H-Y,B-H,ht-tt,Z-ht),0,24)*(1-ve(dt,4.5,7))]}return null}return{height:ct,tone:bt,stairHeight:Mt,rampHeight:lt,promenadeWidths:A,gorgWater:p,allRoads:C,surveyedStairs:k,ramps:I,waterfront:m,wallOpening:z,nearTransition:$,refinesStairs:pt,refines(H,ht,dt){return m.refines(H,ht,dt)||[a,l,c,x].some(([Y,tt,B,Z])=>H+dt>Y-18&&H<B+18&&ht+dt>tt-18&&ht<Z+18)}}}const D_=[37.294125,44.884625,37.325875,44.907375],I_=128,U_=92,N_=JSON.parse("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.9,2.4,2.9,3.4,3.7,3.9,4,4,3.9,3.9,3.9,3.9,4,3.9,3.9,4,3.9,3.6,3.1,2.7,2.5,2.5,2.7,3,3.1,2.9,2.5,1.9,1.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,2,2.5,3.1,3.6,4.1,4.4,4.6,4.4,4.2,3.9,3.8,3.8,3.8,3.8,4,4.1,4.1,3.8,3.2,2.7,2.4,2.4,2.7,3,3.1,2.9,2.4,1.7,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.6,2,2.6,3.1,3.7,4.3,4.8,5,4.9,4.6,4.3,4.1,4,3.9,3.9,4,4.2,4.3,4.1,3.6,3.1,2.9,2.9,3.1,3.2,3.2,2.7,2.1,1.4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.2,1.6,2,2.5,3,3.6,4.2,4.7,5,5,4.9,4.7,4.6,4.4,4.2,4.1,4,4.1,4.2,4.1,3.9,3.6,3.4,3.3,3.2,3.1,2.8,2.2,1.6,1.1,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2,2.4,2.9,3.4,4,4.5,4.7,4.7,4.7,4.7,4.7,4.7,4.4,4.1,3.8,3.8,3.8,3.8,3.6,3.3,3,2.7,2.4,2.2,1.8,1.3,0.9,0.7,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.2,1.6,2,2.3,2.8,3.3,3.8,4.2,4.4,4.4,4.3,4.4,4.5,4.5,4.2,3.7,3.3,3.1,3,2.9,2.5,2.1,1.7,1.4,1.2,1,0.8,0.6,0.4,0.5,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.2,1.5,1.9,2.2,2.5,2.9,3.3,3.6,3.8,3.8,3.8,3.8,3.9,3.9,3.6,3.1,2.7,2.3,2.1,1.8,1.4,1,0.7,0.5,0.4,0.4,0.4,0.5,0.5,0.6,0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.7,2.8,2.9,3,3,3.1,3.1,3.1,2.9,2.5,2.1,1.7,1.5,1.3,1,0.7,0.5,0.4,0.5,0.7,0.9,1.1,1.3,1.4,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,2,2.3,2.5,2.5,2.5,2.4,2.3,2.3,2.3,2.4,2.4,2.3,2,1.8,1.6,1.4,1.3,1.2,1,0.9,1,1.3,1.7,2.1,2.5,2.7,2.9,2.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.2,1.4,1.6,2,2.5,3,3.3,3.3,2.9,2.4,2,1.9,1.9,2,2.1,2.1,2.1,2,1.9,1.8,1.7,1.7,1.6,1.6,1.8,2.2,2.9,3.5,4,4.3,4.4,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.7,1,1.2,1.4,1.6,2,2.5,3.2,3.9,4.3,4.2,3.5,2.6,2,1.8,1.9,2.2,2.4,2.5,2.5,2.5,2.4,2.4,2.4,2.3,2.2,2.2,2.5,3,3.8,4.5,5,5.3,5.5,5.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.4,1.7,2,2.3,2.8,3.5,4.1,4.5,4.2,3.4,2.5,2,1.9,2.1,2.5,2.8,2.9,2.9,2.8,2.8,2.9,2.9,2.8,2.7,2.7,2.9,3.4,4.1,4.8,5.3,5.6,5.8,5.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.6,1.9,2.2,2.5,2.8,3.2,3.5,3.6,3.3,2.6,2.1,1.8,1.9,2.2,2.6,2.9,3,2.9,2.9,2.9,3,3,3.1,3,3,3.1,3.4,4,4.5,5.1,5.4,5.6,5.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.7,2.1,2.4,2.6,2.7,2.9,2.9,2.7,2.3,2,1.8,1.8,2,2.2,2.5,2.7,2.8,2.8,2.8,2.9,3,3.1,3.2,3.2,3.1,3.1,3.2,3.5,3.9,4.4,4.8,5.1,5.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.4,1.9,2.3,2.7,3,3,2.9,2.6,2.3,1.9,1.8,1.8,1.9,2.1,2.3,2.6,2.8,3,3.1,3.1,3.2,3.3,3.3,3.3,3.3,3.2,3.1,2.9,2.9,3.1,3.5,3.9,4.3,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,2,2.6,3.2,3.5,3.5,3.2,2.7,2.2,1.8,1.8,1.9,2.1,2.4,2.7,3.1,3.5,3.9,4.1,4.2,4.1,4,3.7,3.4,3.2,3,2.8,2.6,2.5,2.4,2.6,2.9,3.2,3.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2.2,2.8,3.4,3.6,3.5,3.1,2.5,2.1,1.8,1.9,2,2.3,2.6,3.1,3.8,4.5,5,5.3,5.2,5,4.6,4.1,3.5,3.1,2.8,2.6,2.3,2.2,2,2,2.1,2.3,2.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.4,2.9,3.2,3.2,3,2.6,2.3,2.1,2,2,2.1,2.3,2.7,3.2,3.9,4.7,5.2,5.4,5.3,5,4.6,4,3.5,3,2.6,2.3,2.1,1.9,1.7,1.6,1.7,1.8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.2,1.6,2.1,2.6,2.9,2.9,2.7,2.4,2.3,2.3,2.4,2.5,2.4,2.3,2.4,2.6,3,3.4,3.9,4.3,4.4,4.4,4.3,4.1,3.7,3.3,2.9,2.5,2.2,1.9,1.7,1.6,1.6,1.7,2,2.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.3,2.7,2.7,2.5,2.3,2.2,2.5,2.9,3.2,3.3,3.1,2.8,2.6,2.5,2.6,2.8,3,3.2,3.3,3.4,3.5,3.5,3.4,3.1,2.8,2.5,2.2,2,1.8,1.8,2,2.2,2.6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.5,1.9,2.3,2.6,2.5,2.3,2.3,2.6,3.1,3.7,4,4,3.6,3.1,2.7,2.5,2.5,2.5,2.5,2.5,2.6,2.8,3,3.1,3.1,2.9,2.7,2.5,2.4,2.4,2.4,2.5,2.7,3,3.4,3.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.3,1.7,2,2.3,2.4,2.4,2.4,2.7,3.3,4,4.4,4.3,4,3.5,3.1,2.7,2.5,2.5,2.4,2.4,2.3,2.3,2.5,2.7,2.8,2.8,2.7,2.7,2.7,2.9,3.2,3.6,3.8,3.9,4.1,4.3,4.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,0.8,1.2,1.5,1.9,2.2,2.4,2.3,2.4,2.7,3.3,4.1,4.6,4.7,4.3,3.9,3.5,3.1,2.9,2.7,2.7,2.6,2.6,2.5,2.4,2.5,2.6,2.7,2.7,2.7,2.9,3.2,3.7,4.4,5,5.3,5.4,5.4,5.6,5.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.8,1.1,1.4,1.8,2.1,2.4,2.4,2.3,2.5,3.1,4,4.8,5.2,5,4.5,4.1,3.9,3.7,3.5,3.3,3.1,3,2.9,2.8,2.7,2.7,2.7,2.8,2.8,3,3.2,3.7,4.4,5.2,6,6.4,6.6,6.7,7,7.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,1.8,2.1,2.4,2.4,2.4,2.4,2.6,3.3,4.3,5.1,5.4,5.3,5,4.9,4.8,4.6,4.2,3.9,3.6,3.4,3.3,3.1,3,3.1,3.2,3.2,3.3,3.5,3.8,4.3,5,5.8,6.5,7,7.4,7.6,7.8,8.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.1,1.5,1.9,2.3,2.5,2.6,2.5,2.5,2.5,2.8,3.4,4.1,4.8,5.1,5.3,5.3,5.5,5.4,5.1,4.6,4.2,3.9,3.7,3.6,3.6,3.6,3.7,3.9,4.1,4.2,4.4,4.8,5.2,5.8,6.4,7,7.4,7.6,7.7,7.9,8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,2.8,2.8,2.7,2.8,3.1,3.5,3.9,4.3,4.6,4.9,5.1,5.4,5.4,5.1,4.7,4.3,4,3.9,3.8,3.9,4.1,4.4,4.7,5,5.3,5.7,6.1,6.4,6.8,7.1,7.3,7.4,7.4,7.4,7.5,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,2,2.3,2.7,2.9,3,3,3,3.1,3.3,3.5,3.8,4,4.2,4.4,4.6,4.8,5.1,5.3,5.2,5,4.7,4.4,4.1,4,4.1,4.3,4.6,5,5.5,6,6.5,6.9,7.1,7.3,7.3,7.3,7.3,7.2,7.2,7.3,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.9,3,3.1,3.1,3.2,3.4,3.8,4.1,4.3,4.4,4.4,4.5,4.5,4.7,5,5.4,5.7,5.8,5.6,5.1,4.7,4.3,4.2,4.3,4.6,5,5.6,6.1,6.6,6.9,7.1,7.2,7.3,7.2,7.1,7,7.1,7.4,7.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.7,2.1,2.5,2.8,3,3.1,3.1,3.1,3.3,3.7,4.2,4.7,4.9,4.9,4.8,4.7,4.6,4.7,4.9,5.4,6,6.3,6.3,5.9,5.4,4.9,4.5,4.4,4.5,4.9,5.3,5.9,6.3,6.7,6.9,7.1,7.3,7.3,7.3,7.3,7.4,7.9,8.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,3,3,3,3.1,3.4,4,4.6,5.2,5.5,5.6,5.4,5.3,5,4.8,4.8,5.2,5.8,6.3,6.5,6.4,6,5.6,5.1,4.8,4.7,4.9,5.4,5.9,6.3,6.6,6.9,7.2,7.5,7.7,7.7,7.8,8.1,8.8,9.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.7,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.9,2.2,2.5,2.7,2.9,3,3,3.1,3.2,3.6,4.2,5,5.7,6.2,6.4,6.4,6.3,6,5.5,5.2,5.3,5.8,6.2,6.5,6.6,6.5,6.3,5.9,5.4,5.2,5.3,5.7,6.2,6.6,6.9,7.2,7.6,7.9,8.1,8.1,8.2,8.6,9.4,10.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.8,1.1,1.2,1,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.3,3.3,3.3,3.4,3.8,4.4,5.1,5.9,6.5,7,7.4,7.5,7.1,6.5,5.9,5.7,5.9,6.3,6.6,6.7,6.9,6.8,6.6,6.2,5.9,5.8,6.1,6.4,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.2,8.5,9.2,10.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.5,1.3,0.9,0.4,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.4,1.9,2.3,2.6,2.9,3.2,3.4,3.6,3.7,3.6,3.6,3.7,4,4.5,5.1,5.7,6.3,6.9,7.5,7.9,7.8,7.2,6.4,5.9,5.9,6.2,6.4,6.7,6.8,7,6.9,6.6,6.3,6.2,6.3,6.5,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.1,8.3,8.8,9.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.4,0.7,1.1,1.5,1.7,1.5,1,0.6,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.7,3,3.2,3.5,3.7,3.8,3.9,3.8,3.8,4,4.3,4.6,5,5.3,5.7,6.2,6.8,7.3,7.4,7,6.3,5.8,5.8,6.1,6.4,6.7,6.9,7,7,6.8,6.7,6.7,6.7,6.7,6.8,7.1,7.5,7.9,8.4,8.6,8.6,8.5,8.4,8.5,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.4,0.4,0.4,0.4,0.5,0.6,0.8,0.9,1.1,1.4,1.6,1.7,1.4,0.9,0.5,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.8,3,3.2,3.3,3.4,3.6,3.8,3.9,3.9,3.9,4,4.2,4.4,4.6,4.8,4.9,5.2,5.7,6.1,6.3,6.1,5.8,5.6,5.9,6.4,6.9,7.2,7.4,7.4,7.4,7.3,7.3,7.3,7.2,7,7,7.1,7.4,8,8.6,9.1,9.1,8.9,8.8,8.8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.4,0.5,0.6,0.8,0.9,1,1,1.2,1.4,1.5,1.6,1.7,1.8,1.8,1.6,1.2,0.7,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,1,1.5,2,2.5,2.8,3,3.1,3.2,3.2,3.4,3.5,3.6,3.7,3.7,3.7,3.6,3.7,3.9,4.1,4.4,4.5,4.6,4.8,5,5.2,5.3,5.4,5.6,6.2,6.9,7.5,7.9,8,8,8,8.1,8.1,8,7.7,7.4,7.2,7.2,7.3,7.8,8.5,9.1,9.4,9.5,9.6,9.7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.2,0.3,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.3,2.3,2.3,2.2,2,1.7,1.2,0.7,0.4,0.2,0.1,0.1,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.2,1.7,2.1,2.5,2.8,3.1,3.2,3.2,3.1,3.1,3.2,3.3,3.5,3.6,3.6,3.4,3.3,3.3,3.5,3.9,4.3,4.4,4.4,4.4,4.6,4.9,5.3,5.7,6.2,6.8,7.5,8,8.2,8.3,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.8,7.6,7.5,7.8,8.4,9.1,9.8,10.4,10.7,11,11.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.3,0.4,0.5,0.6,0.6,0.7,0.9,1.1,1.3,1.5,1.7,2,2.4,2.8,3.2,3.5,3.5,3.5,3.4,3.2,3,2.7,2.2,1.6,1.2,0.8,0.6,0.4,0.3,0.3,0.2,0.2,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.5,1,1.5,2,2.4,2.6,2.8,3,3.1,3.2,3.1,3,3,3.1,3.2,3.4,3.4,3.4,3.3,3.2,3.2,3.5,4,4.5,4.8,4.8,4.8,5,5.5,6.1,6.7,7.2,7.7,8,8.2,8.3,8.3,8.5,8.8,9.2,9.5,9.4,9.2,8.9,8.6,8.3,8.1,8.3,8.8,9.6,10.6,11.4,11.8,11.9,11.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.4,0.6,0.8,1,1.2,1.5,1.6,1.7,1.8,1.9,2.2,2.4,2.8,3.2,3.7,4.3,5,5.6,6,6,5.8,5.4,5,4.6,4.1,3.5,2.9,2.3,1.8,1.4,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.3,0.3,0.3,0.3,0.5,0.7,1.1,1.6,2.2,2.8,3.1,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3,3.1,3.2,3.3,3.4,3.4,3.3,3.2,3.3,3.7,4.4,5.1,5.5,5.6,5.6,5.8,6.4,7.1,7.7,8.1,8.2,8.3,8.3,8.3,8.4,8.7,9.1,9.6,9.8,9.9,9.7,9.5,9.3,9,8.9,9,9.5,10.4,11.4,12.2,12.5,12.3,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.6,0.9,1.2,1.6,2,2.3,2.7,3,3.4,3.6,3.9,4.2,4.5,4.9,5.4,6,6.8,7.6,8.5,9.2,9.5,9.3,8.9,8.3,7.6,6.9,6.2,5.5,4.9,4.3,3.7,3,2.4,1.9,1.5,1.3,1,0.8,0.7,0.6,0.5,0.5,0.5,0.6,0.8,0.9,1.1,1.2,1.2,1.2,1.3,1.5,1.8,2.3,2.8,3.2,3.5,3.5,3.5,3.5,3.5,3.4,3.3,3.2,3.2,3.2,3.3,3.4,3.5,3.4,3.4,3.4,3.5,4,4.7,5.5,6,6.3,6.4,6.7,7.2,7.8,8.2,8.3,8.2,8.2,8.3,8.5,8.7,9.1,9.5,9.8,9.9,9.9,9.8,9.8,9.8,9.9,10,10.2,10.6,11.2,12,12.5,12.6,12.2,11.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.3,1.7,2.2,2.7,3.3,3.9,4.4,4.8,5.3,5.8,6.3,6.8,7.3,7.8,8.3,8.7,9.1,9.7,10.4,11.2,11.9,12.3,12.4,12.2,11.6,10.9,10,9.2,8.4,7.8,7.4,7,6.4,5.7,4.9,4.2,3.6,3.1,2.7,2.3,2,1.8,1.8,1.8,1.9,2.1,2.4,2.7,3,3.1,3.1,2.9,2.7,2.7,2.7,2.9,3.2,3.5,3.6,3.6,3.7,3.9,3.9,3.8,3.6,3.5,3.4,3.4,3.4,3.5,3.6,3.6,3.7,3.8,4,4.4,5.1,5.8,6.4,6.7,7,7.3,7.7,8.1,8.2,8.1,8,8.1,8.4,8.7,9.2,9.6,9.9,10,9.9,9.7,9.6,9.8,10.3,10.9,11.4,11.7,11.9,12.2,12.4,12.4,12.1,11.7,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,1.2,2.3,3.5,4.6,5.5,6.4,7.2,7.8,8.3,8.7,9.2,9.8,10.3,10.9,11.5,12,12.3,12.4,12.5,12.7,13.1,13.5,13.9,14,14.1,13.9,13.5,12.7,11.8,10.9,10.2,9.9,9.7,9.7,9.5,9.1,8.4,7.7,6.9,6.1,5.4,4.8,4.5,4.4,4.5,4.6,4.7,5,5.3,5.6,5.8,5.9,5.7,5.3,4.8,4.3,3.8,3.6,3.5,3.5,3.6,3.7,3.9,4.1,4.2,4.1,3.9,3.7,3.5,3.5,3.5,3.6,3.8,3.9,4.2,4.5,4.8,5.4,6.1,6.8,7.4,7.8,8,8.1,8.2,8.3,8.3,8.1,8.1,8.2,8.5,9,9.6,10,10.2,10.2,10,9.7,9.5,9.6,10.3,11.3,12.2,12.7,12.7,12.6,12.3,11.9,11.4,11.1,10.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.3,4.3,6.6,8.6,10.2,11.3,12,12.5,12.9,13.2,13.6,14,14.4,14.7,14.9,15,14.9,14.6,14.4,14.2,14.2,14.3,14.5,14.8,14.9,14.9,14.5,13.9,13,12.2,11.7,11.4,11.4,11.6,11.8,11.8,11.6,11,10.1,9.1,8.3,7.8,7.6,7.7,7.9,8,8.1,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.5,6.6,5.6,4.7,4.2,3.9,3.7,3.8,3.9,4.1,4.2,4.1,3.9,3.8,3.7,3.8,3.9,4.1,4.3,4.6,5,5.5,6.2,7.1,8,8.9,9.4,9.6,9.4,9.1,8.9,8.9,8.9,8.8,8.8,8.9,9.1,9.6,10.1,10.4,10.4,10.3,10,9.6,9.4,9.4,10,11,11.9,12.3,12.3,12,11.7,11.3,10.9,10.7,10.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.1,9.2,12,13.9,15.1,15.7,16.1,16.3,16.6,16.8,17.1,17.2,17.1,16.8,16.4,15.9,15.5,15.1,14.8,14.6,14.6,14.8,15.1,15.3,15.3,15,14.4,13.7,13.1,12.7,12.4,12.4,12.6,13,13.2,13.3,12.8,12,11.1,10.3,10,10,10.2,10.3,10.3,10.2,10.3,10.5,10.7,10.8,10.9,11,10.9,10.4,9.4,8.1,6.9,5.9,5.2,4.8,4.6,4.6,4.7,4.7,4.5,4.3,4.2,4.2,4.5,4.8,5.1,5.4,5.7,6.2,6.9,7.7,8.7,9.7,10.5,11,11,10.6,10,9.8,9.8,9.9,9.9,9.9,9.9,10.1,10.4,10.7,10.7,10.5,10.1,9.7,9.5,9.3,9.4,9.8,10.4,11,11.3,11.2,11.1,11,10.9,10.8,10.7,10.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.8,3.7,6.6,10,13.1,15.3,16.5,17.2,17.6,17.9,18.3,18.5,18.7,18.7,18.4,17.9,17.2,16.5,16,15.6,15.4,15.2,15.2,15.3,15.6,15.7,15.4,15,14.5,14.1,13.7,13.5,13.3,13.3,13.4,13.7,14,14,13.7,13,12.2,11.5,11.3,11.4,11.5,11.3,11,10.8,10.7,11,11.3,11.7,12.2,12.7,12.9,12.8,12.2,11.1,9.8,8.7,7.8,7.2,6.9,6.8,6.8,6.6,6.1,5.6,5.4,5.5,5.8,6.2,6.5,6.7,6.9,7.4,8.1,8.9,9.8,10.5,11.2,11.5,11.4,10.9,10.4,10.3,10.5,10.8,10.9,10.9,10.9,11,11.2,11.1,10.9,10.4,9.9,9.6,9.4,9.4,9.5,9.9,10.3,10.6,10.6,10.6,10.6,10.6,10.8,11,11.1,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.1,5.8,9.1,12.4,14.9,16.4,17.3,17.9,18.4,19,19.3,19.4,19.4,19.1,18.6,17.9,17.3,16.9,16.6,16.4,16.2,16.1,16.3,16.4,16.4,15.9,15.3,14.9,14.6,14.5,14.5,14.5,14.4,14.4,14.4,14.6,14.6,14.4,13.8,13.1,12.5,12.3,12.3,12.3,12,11.6,11.3,11.3,11.5,11.8,12.3,12.9,13.6,14.1,14.3,14,13.3,12.4,11.5,10.8,10.3,10,10,9.9,9.6,9,8.2,7.7,7.5,7.7,7.9,7.9,7.9,7.9,8.3,9,9.8,10.4,10.9,11.3,11.4,11.2,10.9,10.6,10.6,10.8,11.1,11.3,11.4,11.5,11.6,11.6,11.3,10.9,10.3,9.8,9.6,9.5,9.6,9.8,10.2,10.4,10.5,10.4,10.3,10.3,10.5,10.9,11.3,11.7,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,1,2.4,4.8,8,11.4,14.3,16.1,17.1,17.8,18.4,19,19.2,19.3,19.3,19,18.7,18.3,18,17.7,17.5,17.2,17.1,17,17.2,17.3,17.2,16.6,15.9,15.4,15.3,15.5,15.7,15.7,15.5,15.1,14.9,14.7,14.6,14.4,14,13.5,13.1,13.1,13.1,13.1,12.9,12.7,12.7,12.9,13,13.2,13.5,14,14.6,15,15,14.6,14.2,13.6,13.1,12.7,12.5,12.3,12.3,12.3,12.1,11.7,11.1,10.4,9.8,9.3,9.1,8.9,8.8,8.9,9.3,9.9,10.5,10.9,11.1,11.2,11.2,11.1,11,10.9,10.9,11.1,11.3,11.4,11.6,11.7,11.8,11.7,11.5,11,10.5,10.1,9.9,9.9,10,10.2,10.5,10.6,10.5,10.3,10.2,10.2,10.6,11.1,11.6,12.1,12.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.8,2,4.1,7,10.5,13.7,15.9,17.1,17.7,18.2,18.6,18.9,18.9,18.8,18.6,18.3,18,17.8,17.7,17.6,17.4,17.3,17.4,17.6,17.7,17.5,17,16.3,15.9,15.8,16,16.2,16.1,15.7,15.2,14.8,14.4,14.2,13.9,13.6,13.3,13.3,13.5,13.7,13.7,13.7,13.8,14.2,14.7,15.1,15.3,15.5,15.8,16,15.8,15.3,14.7,14.2,13.9,13.8,13.6,13.6,13.6,13.5,13.5,13.4,13.3,12.9,12.2,11.3,10.3,9.5,9.2,9.4,9.9,10.6,11.2,11.6,11.6,11.4,11.3,11.3,11.3,11.3,11.3,11.3,11.4,11.4,11.5,11.6,11.7,11.7,11.8,11.7,11.4,11.1,10.7,10.6,10.5,10.6,10.7,10.8,10.8,10.7,10.6,10.4,10.5,10.8,11.4,11.9,12.3,12.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.2,9.7,13.2,15.8,17.2,17.8,18.2,18.4,18.6,18.6,18.5,18.2,17.8,17.5,17.3,17.2,17.1,17.1,17.2,17.4,17.5,17.6,17.4,17,16.6,16.2,16,16,16,15.8,15.5,15,14.6,14.2,13.9,13.6,13.4,13.3,13.6,13.9,14.2,14.3,14.3,14.5,15.2,15.9,16.4,16.8,16.9,17.1,17,16.6,15.7,14.8,14.4,14.3,14.5,14.6,14.6,14.6,14.5,14.4,14.2,14.1,13.8,13.1,12,10.8,9.8,9.5,9.9,10.8,11.8,12.5,12.8,12.5,12.1,11.7,11.6,11.7,11.8,11.9,11.9,11.8,11.7,11.6,11.5,11.5,11.6,11.8,12,12,11.8,11.6,11.4,11.3,11.2,11.2,11.3,11.3,11.3,11.2,11.1,11.2,11.4,11.9,12.3,12.7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3,5.7,9.3,13,16,17.6,18.2,18.4,18.4,18.4,18.3,18.1,17.8,17.4,17.2,17,16.9,16.9,16.9,17,17.1,17.2,17.3,17.4,17.3,17.1,16.8,16.4,16.1,15.9,15.5,15.1,14.7,14.4,14.2,14,13.7,13.6,13.7,14,14.4,14.7,14.8,14.8,15,15.5,16.1,16.7,17,17.3,17.4,17.4,17,16.2,15.4,15,15,15.4,15.7,15.8,15.7,15.6,15.3,15.1,14.9,14.6,13.9,12.8,11.5,10.5,10.3,10.7,11.6,12.4,13.1,13.4,13.3,13,12.5,12.2,12,12,12.2,12.2,12.1,11.9,11.7,11.5,11.4,11.5,11.8,12.2,12.4,12.4,12.2,12,11.9,11.8,11.8,11.8,12,12.1,12,12,12,12.2,12.5,12.9,13.1,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.3,13.2,16.2,18,18.5,18.5,18.3,18.1,17.8,17.6,17.4,17.3,17.3,17.2,17.1,17,16.8,16.8,16.8,17,17.3,17.6,17.8,17.6,17.3,16.8,16.4,16,15.5,14.9,14.4,14.2,14.1,14.1,14,14,14.2,14.6,15,15.3,15.4,15.3,15.3,15.5,15.9,16.2,16.6,17,17.2,17.3,17.1,16.5,15.9,15.5,15.5,15.8,16.2,16.5,16.4,16.2,16,15.8,15.7,15.4,14.8,13.8,12.7,11.8,11.4,11.7,12.2,12.8,13.3,13.8,14.1,14.1,13.6,13,12.3,12.1,12.1,12.1,12.1,11.9,11.6,11.4,11.3,11.5,11.8,12.2,12.4,12.5,12.5,12.4,12.3,12.2,12.2,12.2,12.4,12.6,12.7,12.7,12.7,12.9,13.1,13.3,13.3,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.6,3.4,6.2,9.8,13.5,16.4,18,18.5,18.4,18.1,17.7,17.4,17.3,17.4,17.6,17.6,17.5,17.3,17,16.7,16.5,16.5,16.7,17.1,17.6,17.7,17.6,17.2,16.8,16.4,15.9,15.4,14.8,14.4,14.2,14.2,14.3,14.5,14.7,15,15.5,15.9,16.1,16,15.8,15.7,15.6,15.7,16,16.4,16.7,17,17,16.9,16.6,16.1,15.5,15.3,15.6,16.1,16.5,16.6,16.5,16.4,16.2,16.1,16,15.6,14.9,14,13.2,12.7,12.7,12.8,13.1,13.6,14.3,15,15.1,14.7,13.8,12.9,12.3,12.1,12,12,11.8,11.6,11.5,11.5,11.7,11.9,12,12.2,12.3,12.4,12.5,12.5,12.5,12.4,12.4,12.6,12.9,13.1,13.2,13.3,13.5,13.6,13.5,13.4,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.3,2.4,4.2,7.1,10.7,14.2,16.7,18.1,18.5,18.3,18,17.6,17.4,17.5,17.9,18.2,18.3,17.9,17.4,16.9,16.4,16.1,16,16.2,16.5,16.8,16.9,16.8,16.6,16.3,15.9,15.6,15.2,14.9,14.7,14.6,14.6,14.8,15.1,15.6,16.2,16.7,16.9,16.9,16.7,16.4,16.1,16,16,16.3,16.6,17,17.2,17.2,17,16.6,16.1,15.6,15.3,15.5,16.2,16.9,17.1,17,16.8,16.5,16.4,16.4,16.2,15.8,15.1,14.4,13.9,13.6,13.4,13.5,13.9,14.7,15.4,15.7,15.3,14.4,13.5,12.9,12.7,12.5,12.3,12,11.9,11.9,11.9,11.9,11.9,12,12.1,12.2,12.4,12.5,12.7,12.7,12.7,12.7,12.9,13.2,13.5,13.7,13.8,13.9,13.9,13.7,13.4,13.3,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.3,0.7,1.3,2.2,3.5,5.6,8.7,12.2,15.5,17.7,18.8,19.1,18.8,18.2,17.8,17.7,18.1,18.6,19.1,19,18.4,17.7,17.1,16.6,16.2,16.1,16,16,16.1,16.1,16.1,16.1,16,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.5,15.9,16.5,17.1,17.6,17.6,17.3,16.9,16.6,16.5,16.6,16.7,17.1,17.5,17.8,18,18,17.8,17.4,17,16.6,16.4,16.6,17.4,18.1,18.3,18,17.5,17,16.7,16.6,16.5,16.1,15.6,15.1,14.7,14.4,14.1,13.9,14.1,14.7,15.4,15.7,15.4,14.7,14.1,13.8,13.6,13.4,13,12.6,12.3,12.3,12.3,12.2,12.2,12.2,12.4,12.5,12.6,12.7,12.9,13.1,13.1,13.1,13.2,13.4,13.7,13.9,13.9,13.9,13.8,13.6,13.4,13.3,0,0,0,0,0,0,0,0,0.1,0.3,0.4,0.5,0.6,0.8,1.3,2.1,3.3,5,7.5,10.8,14.3,17.3,19.3,20.3,20.5,19.9,19.1,18.4,18.2,18.6,19.1,19.5,19.4,18.8,18.1,17.6,17.3,17.2,16.9,16.5,16.1,16,16,16.3,16.4,16.5,16.4,16.3,16.5,16.6,16.6,16.4,16.1,16.1,16.4,17,17.7,18.1,17.9,17.5,17,16.8,16.8,17,17.4,17.9,18.5,19,19.3,19.5,19.4,19.2,18.8,18.3,18,18.2,18.9,19.5,19.7,19.2,18.5,17.8,17.3,17,16.6,16.2,15.7,15.4,15.1,14.9,14.6,14.3,14.2,14.5,15,15.2,15,14.6,14.3,14.2,14.1,13.9,13.4,12.9,12.7,12.7,12.7,12.6,12.5,12.7,13,13.1,13.1,13.1,13.3,13.5,13.6,13.6,13.6,13.7,13.8,13.8,13.8,13.8,13.8,13.7,13.5,13.4,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.3,1.6,2.3,3.4,5,7.2,10.1,13.4,16.7,19.4,21.1,22,22,21.3,20.3,19.3,18.8,18.8,19.2,19.5,19.4,18.9,18.4,18.1,18.1,18.1,17.7,17.1,16.8,16.8,17,17.3,17.5,17.5,17.3,17.2,17.1,17.1,17,16.8,16.5,16.4,16.7,17.4,18.2,18.7,18.7,18.1,17.5,17.1,17.1,17.3,17.9,18.5,19.2,19.8,20.3,20.7,20.8,20.7,20.1,19.5,19.1,19.2,19.8,20.3,20.5,20.1,19.5,18.8,18.1,17.6,17.1,16.6,16,15.6,15.4,15.2,14.9,14.6,14.4,14.4,14.5,14.6,14.5,14.3,14.2,14.2,14.1,13.9,13.5,13.2,13.1,13.1,13.1,12.9,12.8,13,13.3,13.5,13.6,13.7,13.9,14.1,14.2,14.2,14.1,14,14,13.9,13.8,13.9,13.9,13.8,13.7,13.6,0,0,0,0,0,0,0.1,0.2,0.4,0.9,1.5,2.2,2.7,3.4,4.4,5.9,7.9,10.4,13.4,16.4,19.2,21.2,22.5,23,22.9,22.1,20.9,19.9,19.1,18.9,19,19.2,19.2,19,18.7,18.6,18.6,18.5,18.2,17.9,17.8,18,18.4,18.5,18.6,18.5,18.2,17.9,17.6,17.2,17,16.8,16.7,16.9,17.3,18.1,19,19.7,19.7,19.1,18.2,17.6,17.4,17.6,18.3,19.1,19.7,20.3,20.7,21,21.1,21,20.5,19.9,19.6,19.8,20.3,20.7,20.8,20.6,20.1,19.4,18.9,18.4,17.9,17.2,16.6,16.1,15.8,15.6,15.4,15.2,14.9,14.7,14.6,14.6,14.5,14.4,14.3,14.2,14,13.8,13.6,13.5,13.6,13.6,13.5,13.3,13.1,13.2,13.5,13.8,14,14.3,14.7,14.9,14.8,14.6,14.5,14.4,14.2,14.1,14.1,14.1,14.1,14,13.9,13.9,0,0,0,0,0,0.1,0.2,0.5,1.1,2.1,3.4,4.6,5.8,7.1,8.5,10.2,12.2,14.4,16.9,19.3,21.1,22.4,23,23.1,22.8,22,21.1,20.2,19.5,19.1,19.1,19.2,19.2,19.1,18.9,18.8,18.7,18.7,18.6,18.6,18.8,19.1,19.3,19.3,19.2,19.2,19.1,18.7,18.2,17.6,17.3,17.3,17.5,17.8,18.4,19.1,19.9,20.4,20.4,19.7,18.7,18,17.8,18.2,19,19.8,20.3,20.6,20.7,20.8,20.8,20.6,20.3,20.1,20.1,20.4,20.6,20.8,20.7,20.4,19.9,19.4,19,18.7,18.3,17.7,17,16.5,16.3,16.1,16,15.9,15.7,15.5,15.4,15.2,15,14.8,14.5,14.3,14,13.8,13.8,13.9,14,14.1,14,13.7,13.5,13.5,13.8,14.1,14.5,14.9,15.2,15.3,15.1,14.9,14.7,14.6,14.6,14.6,14.6,14.6,14.5,14.4,14.2,14.3,0,0,0,0,0,0.1,0.4,1.1,2.4,4.4,6.7,9,10.8,12.5,13.9,15.3,16.8,18.3,19.8,21.2,22.1,22.7,22.8,22.7,22.4,21.8,21.2,20.6,20.1,19.7,19.6,19.5,19.4,19.2,18.9,18.8,18.7,18.8,19,19.3,19.6,19.8,19.7,19.5,19.3,19.5,19.7,19.6,19.2,18.7,18.4,18.4,18.6,18.9,19.3,19.9,20.4,20.7,20.6,20.1,19.3,18.8,18.7,19.2,19.9,20.6,21,21.1,21,20.9,20.7,20.5,20.5,20.5,20.7,20.9,20.8,20.6,20.3,19.8,19.3,18.9,18.7,18.5,18.2,17.8,17.2,16.9,16.7,16.6,16.6,16.5,16.4,16.3,16.1,15.8,15.4,15,14.6,14.3,14.1,13.9,14,14.2,14.4,14.4,14.3,14.1,13.8,13.8,14,14.2,14.6,14.9,15.2,15.2,15,14.8,14.7,14.8,15,15.2,15.3,15.3,15.1,15,14.8,14.9,0,0,0,0,0,0.2,0.6,1.8,4.1,7.3,10.8,13.9,16.2,17.7,18.8,19.6,20.3,21,21.7,22.2,22.5,22.7,22.7,22.6,22.3,21.9,21.5,21.1,20.8,20.6,20.5,20.3,19.9,19.5,19,18.7,18.7,19,19.4,19.9,20.1,20.1,19.8,19.4,19.3,19.5,20,20.3,20.3,20.1,19.9,19.6,19.5,19.5,19.8,20.2,20.6,20.9,20.9,20.7,20.3,20,20.1,20.4,20.9,21.4,21.6,21.7,21.6,21.4,21.2,21.1,21.1,21.2,21.2,21.2,20.9,20.5,20,19.5,19.1,18.7,18.5,18.3,18,17.7,17.4,17.2,17.1,17,16.9,16.7,16.5,16.4,16.2,15.9,15.5,15,14.7,14.5,14.3,14.2,14.2,14.3,14.5,14.6,14.5,14.3,14.1,14,14,14.1,14.4,14.6,14.9,15,14.9,14.8,14.7,14.9,15.2,15.6,15.9,15.9,15.8,15.7,15.5,15.4,0,0,0,0,0,0.2,0.8,2.3,5.1,9.1,13.5,17.2,19.8,21.1,21.7,22,22.3,22.5,22.6,22.7,22.8,22.9,22.9,22.8,22.6,22.2,21.7,21.4,21.2,21.2,21.2,21,20.6,20,19.4,19,18.9,19.2,19.6,20.1,20.3,20.2,19.8,19.4,19.3,19.7,20.4,21.2,21.6,21.7,21.3,20.7,20.3,20.1,20.2,20.5,20.8,21,21.1,21.1,21,20.9,21.1,21.3,21.6,21.9,21.9,22,21.9,21.9,21.9,21.9,22,22,21.8,21.5,21.2,20.8,20.3,19.8,19.4,19,18.6,18.3,18.1,17.9,17.8,17.7,17.6,17.4,17,16.6,16.3,16.1,16,15.8,15.5,15.1,14.9,14.8,14.6,14.5,14.4,14.4,14.6,14.7,14.8,14.7,14.5,14.3,14.1,14,14.1,14.3,14.6,14.9,14.9,14.8,14.8,14.9,15.3,15.8,16.2,16.4,16.4,16.3,16.2,16,0,0,0,0,0,0.2,0.7,2.1,4.8,9,13.8,18,20.8,22.3,22.9,23.1,23.2,23.3,23.3,23.2,23.2,23.3,23.2,23,22.6,22.1,21.6,21.3,21.2,21.3,21.4,21.3,20.9,20.4,19.9,19.5,19.3,19.5,19.8,20.1,20.4,20.3,20,19.7,19.7,20.2,21.1,22.1,22.8,23,22.7,22.2,21.8,21.6,21.5,21.3,21.1,20.9,20.9,21,21,21.1,21.3,21.6,21.9,22.1,22.1,22,22,22.1,22.2,22.4,22.5,22.5,22.4,22.2,21.9,21.5,20.9,20.4,19.9,19.5,19.1,18.7,18.5,18.4,18.4,18.2,18,17.6,17.1,16.7,16.3,16.1,15.9,15.8,15.6,15.4,15.2,15.1,15,14.8,14.6,14.6,14.7,14.9,15.1,15.2,15.1,14.8,14.5,14.2,14.2,14.3,14.6,14.9,15,15,14.9,15,15.3,15.7,16.2,16.6,16.8,16.9,16.8,16.7,0,0,0,0,0,0.1,0.5,1.5,3.7,7.5,12.3,16.9,20.2,22.2,23.1,23.6,23.8,23.7,23.6,23.5,23.5,23.5,23.3,22.9,22.3,21.6,21.1,20.9,20.9,21.1,21.1,21.1,20.9,20.6,20.3,20.1,19.9,19.9,20,20.2,20.4,20.4,20.3,20.2,20.4,21,21.8,22.7,23.4,23.8,24,24,24,23.9,23.4,22.6,21.7,21,20.7,20.6,20.7,20.9,21.2,21.7,22.1,22.3,22.3,22.2,22.1,22.1,22.2,22.3,22.5,22.6,22.6,22.6,22.3,21.9,21.4,20.9,20.5,20.1,19.7,19.5,19.2,18.9,18.7,18.5,18.1,17.8,17.4,17.1,16.8,16.5,16.3,16.1,15.9,15.7,15.6,15.5,15.4,15.1,14.9,14.7,14.8,15.1,15.3,15.4,15.3,15,14.8,14.5,14.4,14.5,14.7,14.9,15.1,15.1,15.1,15.2,15.4,15.7,16.2,16.6,16.9,17.1,17.2,17.2,0,0,0,0,0,0,0.3,0.9,2.6,5.9,10.5,15.4,19.4,22,23.4,24,24.2,24,23.8,23.5,23.4,23.2,22.9,22.4,21.8,21.1,20.8,20.7,20.8,20.9,20.9,20.9,20.8,20.8,20.7,20.6,20.5,20.4,20.4,20.3,20.4,20.5,20.7,21,21.4,21.9,22.3,22.7,23.2,23.8,24.5,25.1,25.4,25.4,24.8,23.7,22.5,21.4,20.8,20.6,20.8,21.1,21.5,22,22.4,22.7,22.7,22.5,22.3,22.2,22.2,22.2,22.2,22.3,22.4,22.4,22.2,22,21.7,21.3,20.9,20.6,20.4,20.1,19.7,19.2,18.9,18.6,18.3,18,17.9,17.8,17.5,17.2,16.8,16.5,16.3,16.2,16.1,16,15.7,15.3,15.1,15,15,15.2,15.3,15.3,15.2,15.2,15,14.9,14.8,14.8,14.9,15.1,15.2,15.3,15.3,15.4,15.6,15.9,16.2,16.4,16.7,17,17.2,17.3,0,0,0,0,0,0,0.1,0.6,1.9,4.6,9,14.3,19.1,22.3,23.9,24.6,24.6,24.3,23.8,23.3,23,22.8,22.6,22.1,21.6,21.2,21,20.9,21,21,21,20.9,20.9,21,21.1,21.2,21.1,21,20.8,20.7,20.7,21,21.5,22,22.4,22.6,22.5,22.5,22.7,23.3,24.1,24.9,25.3,25.2,24.7,23.7,22.6,21.7,21.2,21.1,21.4,21.7,21.9,22.2,22.5,22.7,22.7,22.7,22.6,22.5,22.4,22.3,22.2,22.1,22.1,22.1,22.1,22,21.8,21.5,21.2,20.8,20.6,20.3,19.8,19.4,19,18.8,18.7,18.5,18.4,18.3,18.1,17.7,17.3,17,16.8,16.6,16.5,16.2,15.8,15.5,15.3,15.2,15.3,15.3,15.2,15.2,15.3,15.4,15.4,15.4,15.3,15.2,15.3,15.4,15.5,15.5,15.6,15.7,15.9,16.2,16.3,16.3,16.4,16.6,16.9,17.2,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.8,13.3,18.7,22.5,24.4,25,24.9,24.5,24,23.4,23,22.7,22.6,22.3,22,21.7,21.6,21.6,21.4,21.2,21.1,21,21.2,21.5,21.8,22,21.9,21.6,21.3,21.2,21.4,21.8,22.4,22.9,23.1,22.9,22.6,22.2,22.2,22.6,23.3,23.8,24.1,24,23.4,22.7,21.9,21.4,21.3,21.4,21.7,22,22.1,22.2,22.2,22.3,22.5,22.6,22.7,22.7,22.6,22.4,22.2,22.1,22.2,22.3,22.5,22.5,22.3,21.8,21.3,20.8,20.6,20.4,20.1,19.8,19.6,19.5,19.4,19.2,19,18.7,18.4,18,17.7,17.5,17.3,17.1,16.8,16.3,15.9,15.6,15.4,15.5,15.5,15.5,15.4,15.3,15.4,15.5,15.7,15.7,15.7,15.6,15.6,15.7,15.8,15.8,15.9,16,16.3,16.5,16.5,16.4,16.4,16.6,16.8,17.2,0,0,0,0,0,0,0,0.2,0.9,2.7,6.3,11.6,17.2,21.5,23.9,24.8,24.9,24.6,24.2,23.8,23.4,23.1,22.9,22.7,22.5,22.3,22.2,22,21.8,21.5,21.4,21.4,21.7,22.1,22.6,22.8,22.7,22.2,21.8,21.7,22,22.5,22.9,23.2,23.2,22.9,22.4,22.1,22,22.1,22.4,22.6,22.6,22.3,21.9,21.5,21.1,21.1,21.3,21.5,21.7,21.9,22.1,22.2,22.2,22.2,22.3,22.4,22.6,22.6,22.5,22.3,22.2,22.2,22.4,22.7,23.1,23.2,22.9,22.2,21.5,21.1,20.9,20.8,20.6,20.4,20.3,20.3,20.2,20,19.6,19.2,18.7,18.3,18,17.8,17.6,17.4,17,16.5,16,15.7,15.6,15.7,15.8,15.7,15.5,15.4,15.5,15.6,15.7,15.9,15.9,15.9,15.9,15.9,16,16.1,16.1,16.2,16.4,16.5,16.6,16.6,16.6,16.7,16.9,17.2,0,0,0,0,0,0,0,0.1,0.6,1.9,4.8,9.4,14.8,19.5,22.5,24,24.5,24.5,24.3,24,23.7,23.4,23,22.8,22.6,22.6,22.5,22.3,22.1,21.9,21.9,22,22.3,22.8,23.2,23.5,23.3,22.8,22.4,22.2,22.4,22.8,23,23.1,23,22.7,22.3,22.1,22,22,22,21.8,21.6,21.3,21.1,21,21.1,21.4,21.7,21.9,22,22.1,22.2,22.4,22.5,22.4,22.3,22.3,22.5,22.5,22.5,22.3,22.2,22.2,22.5,22.9,23.3,23.5,23.3,22.8,22.1,21.7,21.5,21.4,21.3,21.1,21,20.8,20.7,20.5,20.1,19.6,19.1,18.6,18.2,18,17.8,17.6,17.2,16.8,16.4,16.1,16,16,16.1,16,15.8,15.7,15.7,15.7,15.8,16,16.1,16.2,16.3,16.4,16.4,16.4,16.3,16.3,16.4,16.5,16.7,16.7,16.7,16.7,16.9,17.1,0,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.5,12.5,17.5,21.2,23.3,24.2,24.4,24.2,23.8,23.5,23.2,22.9,22.7,22.7,22.7,22.7,22.6,22.5,22.4,22.5,22.7,23,23.5,23.9,24.1,24,23.6,23.2,22.8,22.8,23,23.1,23.1,22.9,22.7,22.6,22.5,22.5,22.5,22.3,22,21.6,21.3,21.2,21.3,21.7,22.2,22.6,22.7,22.6,22.5,22.5,22.7,22.7,22.6,22.5,22.6,22.7,22.8,22.9,22.7,22.5,22.3,22.3,22.5,22.9,23.2,23.3,23,22.6,22.2,22,21.9,21.8,21.6,21.4,21.2,21,20.8,20.5,20,19.4,18.8,18.5,18.2,18,17.8,17.6,17.3,17,16.8,16.6,16.5,16.5,16.4,16.3,16.1,16,15.9,16,16.2,16.5,16.7,16.9,17,16.9,16.9,16.7,16.7,16.7,16.7,16.8,16.8,16.8,16.9,17,17.3,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.9,10.6,15.8,20.1,22.9,24.1,24.3,24,23.6,23.2,23.1,23,23,23,23.1,23.2,23.1,23.1,23.1,23.3,23.6,24,24.4,24.7,24.8,24.7,24.4,23.9,23.5,23.3,23.3,23.4,23.4,23.3,23.3,23.3,23.4,23.6,23.5,23.3,22.8,22.3,21.9,21.7,21.8,22.3,22.9,23.3,23.3,23.1,22.8,22.7,22.6,22.7,22.7,22.8,23,23.3,23.5,23.5,23.3,22.9,22.5,22.2,22.2,22.4,22.7,23,23,22.9,22.6,22.3,22.1,22,21.9,21.7,21.5,21.3,21.1,20.7,20.1,19.5,19,18.6,18.3,18.3,18.2,18,17.8,17.6,17.4,17.3,17.2,17.1,16.9,16.7,16.5,16.3,16.2,16.2,16.4,16.7,17.1,17.3,17.4,17.5,17.4,17.4,17.2,17.1,17,16.9,17,17.1,17.3,17.7,18.1,0,0,0,0,0,0,0,0,0.1,0.6,1.9,4.6,8.8,14.1,18.9,22.2,24,24.5,24.3,23.9,23.6,23.5,23.5,23.6,23.6,23.7,23.7,23.8,24,24.2,24.4,24.6,24.9,25.2,25.3,25.2,25,24.8,24.4,24.1,23.9,23.9,24.1,24.2,24.2,24.3,24.4,24.7,24.8,24.8,24.4,23.8,23.1,22.6,22.2,22.3,22.6,23.1,23.3,23.3,23.1,22.9,22.6,22.5,22.6,22.9,23.2,23.5,23.8,24,23.9,23.7,23.2,22.8,22.5,22.3,22.3,22.5,22.8,23,23,22.8,22.5,22.2,22,21.9,21.9,21.8,21.6,21.3,20.8,20.1,19.5,18.9,18.6,18.5,18.6,18.6,18.5,18.2,17.9,17.7,17.8,17.8,17.8,17.6,17.3,17,16.7,16.6,16.6,16.6,16.8,17.1,17.4,17.6,17.8,17.9,17.8,17.7,17.5,17.2,17.1,17.2,17.5,17.9,18.5,19.2,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.4,7.1,12,17.1,21.1,23.6,24.7,25,24.8,24.5,24.2,24,24,24,24,24.2,24.6,25,25.3,25.4,25.5,25.5,25.5,25.5,25.4,25.2,25,24.7,24.5,24.4,24.5,24.8,25.1,25.3,25.5,25.6,25.7,25.6,25.3,24.8,24.1,23.5,23.1,22.8,22.8,23,23.1,23.2,23.1,22.9,22.8,22.7,22.7,22.9,23.2,23.6,23.9,24,24.1,24,23.8,23.5,23.2,23,22.8,22.7,22.7,22.9,23.1,23.1,23,22.7,22.4,22.2,22.1,22.2,22.1,21.9,21.5,20.8,20.1,19.5,19,18.8,18.7,18.8,18.9,18.7,18.4,18,17.8,17.9,18.1,18.2,18.1,17.9,17.6,17.4,17.2,17.1,17.1,17.1,17.2,17.3,17.5,17.8,18,18.1,17.9,17.7,17.5,17.3,17.4,17.7,18.2,18.9,19.8,0,0,0,0,0,0,0,0,0,0.2,0.8,2.2,5.1,9.4,14.4,19.1,22.5,24.5,25.4,25.5,25.2,24.7,24.3,24.1,24,24.2,24.5,25.1,25.6,25.8,25.8,25.7,25.5,25.6,25.6,25.6,25.5,25.2,24.9,24.7,24.6,24.8,25.1,25.5,25.9,26.1,26.2,26.2,25.8,25.2,24.5,24,23.8,23.7,23.7,23.8,23.9,23.8,23.6,23.4,23.1,23,22.9,23,23.2,23.5,23.8,23.9,24,24.1,24,23.9,23.8,23.7,23.6,23.5,23.4,23.4,23.4,23.5,23.4,23.2,22.8,22.6,22.4,22.4,22.5,22.4,22.2,21.7,21.1,20.5,19.9,19.5,19.2,19,19,18.9,18.6,18.3,17.9,17.8,17.8,18,18.2,18.4,18.4,18.3,18.1,17.9,17.7,17.6,17.5,17.4,17.3,17.4,17.7,18,18.1,18.1,17.9,17.7,17.6,17.5,17.7,18.1,18.6,19.4,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,3.1,6.3,10.7,15.6,19.9,23,24.9,25.6,25.6,25.1,24.6,24.3,24.2,24.4,24.8,25.2,25.6,25.7,25.6,25.4,25.4,25.6,25.9,26.1,26,25.7,25.3,25,24.9,25,25.3,25.7,26.1,26.3,26.4,26.3,25.9,25.3,24.6,24.2,24.1,24.2,24.4,24.6,24.9,24.9,24.6,24.1,23.8,23.6,23.4,23.4,23.5,23.7,23.9,24.1,24.3,24.4,24.5,24.4,24.3,24.2,24.1,24.1,24.1,24.1,24,23.8,23.6,23.2,22.9,22.6,22.5,22.4,22.4,22.4,22.2,21.9,21.5,21.1,20.7,20.3,19.8,19.5,19.3,19,18.7,18.4,18.1,17.9,18,18.1,18.4,18.6,18.8,18.8,18.6,18.4,18.1,17.9,17.7,17.5,17.4,17.4,17.6,17.9,18.2,18.3,18.2,18,17.8,17.8,17.8,18,18.3,18.7,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.3,6.5,10.8,15.5,19.7,22.8,24.7,25.4,25.4,25.1,24.8,24.7,24.8,25,25.3,25.4,25.5,25.5,25.5,25.8,26.1,26.4,26.6,26.5,26.3,26,25.7,25.5,25.5,25.6,25.9,26.1,26.4,26.6,26.6,26.3,25.7,25,24.5,24.4,24.4,24.4,24.6,24.9,25.1,25,24.7,24.4,24.2,24,23.8,23.8,24,24.2,24.5,24.8,25.1,25.2,25.1,24.8,24.7,24.6,24.6,24.5,24.4,24.2,23.8,23.4,23.1,22.9,22.7,22.4,22.2,22.1,22,21.9,21.9,21.8,21.6,21.3,20.9,20.4,20,19.7,19.5,19.3,19,18.7,18.5,18.5,18.6,18.9,19.1,19.2,19.2,18.9,18.5,18.1,17.8,17.7,17.6,17.5,17.5,17.7,18.1,18.4,18.6,18.5,18.3,18.2,18.2,18.1,18.1,18.2,18.4,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.4,3.2,6.2,10.3,14.9,19.2,22.6,24.6,25.4,25.5,25.4,25.2,25.1,25.2,25.3,25.4,25.5,25.8,26,26.3,26.7,26.9,27,27.1,27,26.8,26.5,26.2,26,26,26.1,26.4,26.7,26.9,27,26.8,26.2,25.5,24.8,24.4,24.2,24,24.2,24.5,24.7,24.8,24.8,24.7,24.5,24.3,24.1,24.1,24.3,24.5,24.8,25.2,25.5,25.6,25.6,25.4,25.1,25,24.8,24.7,24.5,24.1,23.6,23.2,23,22.8,22.7,22.4,22.1,21.9,21.7,21.7,21.7,21.7,21.7,21.5,21.2,20.8,20.4,20.1,19.9,19.8,19.7,19.5,19.3,19.2,19.3,19.4,19.6,19.6,19.5,19.1,18.6,18.2,17.9,17.8,17.8,17.9,18,18.2,18.4,18.7,18.9,18.9,18.8,18.8,18.8,18.7,18.6,18.6,18.7,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.9,10,14.7,19.1,22.5,24.4,25.2,25.3,25.3,25.2,25.3,25.4,25.5,25.8,26.1,26.4,26.7,27,27.2,27.4,27.5,27.5,27.3,27,26.6,26.4,26.4,26.5,26.8,27.1,27.3,27.4,27.2,26.7,26,25.2,24.6,24.2,23.9,23.9,24.1,24.4,24.6,24.7,24.7,24.6,24.4,24.3,24.3,24.5,24.7,24.9,25.2,25.5,25.7,25.8,25.7,25.5,25.3,25,24.7,24.4,24,23.6,23.3,23.2,23.1,23,22.7,22.4,22.1,21.9,21.7,21.6,21.6,21.6,21.5,21.3,21,20.7,20.4,20.2,20.1,20.1,20,19.9,19.7,19.6,19.7,19.8,19.9,19.8,19.4,19,18.6,18.4,18.4,18.5,18.6,18.8,19,19.1,19.3,19.4,19.4,19.3,19.4,19.4,19.3,19.2,19.2,19.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,2.9,5.9,10.1,14.8,19.1,22.2,23.9,24.7,25,25.2,25.4,25.6,25.8,26,26.2,26.5,26.8,27.1,27.3,27.5,27.7,27.7,27.5,27.1,26.8,26.7,26.8,27,27.2,27.5,27.6,27.6,27.4,27,26.4,25.7,25,24.4,24,23.9,24,24.3,24.6,24.7,24.8,24.7,24.6,24.6,24.8,24.9,25,25.1,25.3,25.5,25.7,25.8,25.9,25.8,25.5,25.1,24.7,24.4,24.1,23.9,23.8,23.7,23.6,23.4,23.1,22.8,22.6,22.3,22,21.7,21.5,21.5,21.5,21.4,21.3,21,20.7,20.5,20.4,20.3,20.2,20,19.8,19.7,19.8,20,20.2,20.2,19.9,19.5,19.3,19.1,19.1,19.3,19.6,19.8,20,20.1,20.1,20.1,20.1,20,19.9,19.9,19.8,19.9,20.3,21.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3.1,6,10.1,14.5,18.5,21.5,23.4,24.4,25,25.4,25.7,25.8,25.9,25.9,26.1,26.4,26.8,27.2,27.5,27.8,27.8,27.6,27.3,27.1,27.1,27.3,27.5,27.6,27.7,27.7,27.7,27.5,27.1,26.7,26.1,25.4,24.8,24.3,24.2,24.3,24.6,24.9,25.1,25.2,25.2,25.2,25.3,25.4,25.5,25.6,25.6,25.6,25.7,25.8,26,26,25.9,25.6,25.1,24.8,24.5,24.4,24.3,24.2,24.1,23.9,23.6,23.2,23,22.8,22.5,22.1,21.8,21.6,21.5,21.5,21.5,21.4,21.2,21,20.8,20.6,20.4,20.2,20,19.8,19.8,20,20.3,20.6,20.7,20.4,20,19.7,19.6,19.7,19.9,20.4,20.9,21.3,21.4,21.2,20.9,20.6,20.4,20.2,20.2,20.3,20.8,21.6,22.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.5,13.8,17.9,21,23,24.3,25,25.4,25.5,25.5,25.5,25.7,26,26.4,27,27.6,28,28.2,28,27.8,27.6,27.6,27.7,27.8,27.9,27.8,27.7,27.6,27.4,27.2,26.8,26.3,25.7,25.1,24.7,24.6,24.8,25.2,25.6,25.8,25.9,25.9,25.9,26,26.1,26.1,26.1,26.1,26.1,26,26,26.1,26.2,26,25.7,25.3,24.9,24.7,24.6,24.5,24.4,24.2,23.9,23.5,23.2,22.9,22.7,22.5,22.2,21.9,21.8,21.7,21.7,21.7,21.6,21.4,21.2,21.1,20.9,20.6,20.4,20.1,20,19.9,20.1,20.4,20.6,20.7,20.4,20.1,19.9,19.8,19.8,20.1,20.9,21.9,22.7,22.7,22.2,21.4,20.8,20.3,20.1,20.2,20.7,21.4,22.4,23.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,1.2,2.7,5.2,8.9,13.2,17.3,20.6,22.8,24.2,24.9,25.2,25.3,25.4,25.6,25.9,26.4,27,27.7,28.4,28.7,28.5,28.2,28,28,28,28.1,28.1,27.9,27.8,27.6,27.5,27.3,26.9,26.4,25.9,25.3,25,25.1,25.6,26.1,26.5,26.6,26.5,26.4,26.3,26.4,26.5,26.5,26.5,26.5,26.4,26.3,26.2,26.2,26.2,26.1,25.8,25.4,25.1,25,24.8,24.7,24.5,24.2,23.8,23.4,23.2,23,22.7,22.5,22.3,22.1,22.1,22.2,22.2,22.1,21.9,21.7,21.6,21.5,21.3,21,20.8,20.5,20.3,20.1,20.1,20.2,20.3,20.3,20.1,20,19.8,19.8,19.9,20.3,21.2,22.5,23.4,23.4,22.6,21.5,20.6,20.1,19.9,20.2,20.7,21.4,22.2,22.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.4,4.8,8.4,12.5,16.6,20.1,22.6,24.1,25,25.4,25.7,25.9,26.3,26.7,27.2,27.8,28.3,28.6,28.6,28.3,28.2,28.2,28.3,28.5,28.4,28.2,27.9,27.7,27.6,27.3,26.9,26.4,25.8,25.5,25.3,25.6,26.2,26.8,27.1,27.1,26.8,26.6,26.5,26.6,26.7,26.8,26.9,26.8,26.7,26.5,26.4,26.4,26.3,26.2,25.9,25.6,25.4,25.2,25.1,24.9,24.6,24.1,23.8,23.5,23.3,23.2,22.9,22.6,22.3,22.2,22.3,22.5,22.7,22.7,22.4,22.2,22,22,21.9,21.6,21.3,20.9,20.6,20.2,20,19.9,19.9,19.9,19.9,19.9,19.9,20,20.1,20.4,21.2,22.2,23,22.9,22.2,21.2,20.4,20,20,20.3,20.7,21,21.4,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.1,4.4,7.6,11.7,15.9,19.7,22.5,24.3,25.3,25.8,26.1,26.5,26.8,27.1,27.4,27.7,27.9,28,28,28,28.2,28.5,28.8,28.7,28.5,28.1,27.8,27.5,27.1,26.7,26.2,25.9,25.7,25.8,26.1,26.5,27,27.2,27.2,27,26.8,26.7,26.8,26.9,27.1,27.2,27.2,27.1,26.9,26.7,26.6,26.5,26.4,26.2,25.9,25.7,25.6,25.4,25.2,24.8,24.4,24,23.8,23.7,23.5,23.2,22.8,22.5,22.4,22.5,22.8,23.1,23.1,22.9,22.6,22.4,22.5,22.4,22.2,21.8,21.3,20.7,20.3,20,19.8,19.8,19.8,19.9,20,20.1,20.2,20.2,20.4,20.9,21.7,22.2,22.2,21.9,21.2,20.7,20.4,20.5,20.7,20.9,20.9,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.7,1.8,3.8,6.9,11,15.5,19.6,22.7,24.6,25.6,26.1,26.4,26.5,26.6,26.7,26.9,27.1,27.4,27.7,28.1,28.5,29,29.2,29.1,28.6,28.1,27.6,27.2,26.7,26.2,26,26,26.2,26.4,26.6,26.8,27,27.2,27.3,27.3,27.3,27.2,27.2,27.2,27.4,27.7,27.7,27.6,27.3,27,26.8,26.7,26.6,26.5,26.3,26.2,26,25.9,25.7,25.3,24.8,24.6,24.5,24.5,24.4,24.1,23.7,23.2,23,23.1,23.4,23.6,23.5,23.2,22.8,22.6,22.7,22.7,22.5,22.1,21.5,20.9,20.5,20.2,20,19.9,19.9,20.1,20.2,20.4,20.4,20.3,20.4,20.9,21.5,22,22.3,22.3,21.9,21.5,21.3,21.2,21.3,21.3,21.1,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.5,3.4,6.7,11,15.9,20.3,23.5,25.2,26,26.3,26.3,26.3,26.3,26.4,26.7,27.2,27.9,28.5,29.1,29.5,29.5,29.1,28.4,27.8,27.2,26.6,26.2,25.9,26,26.3,26.8,27.1,27.2,27.3,27.3,27.4,27.6,27.8,27.9,27.9,27.8,27.7,28,28.2,28.4,28.2,27.9,27.5,27.2,27.1,27,27,26.9,26.9,26.8,26.6,26.2,25.8,25.5,25.4,25.6,25.9,26.2,26.1,25.6,24.8,24.2,24,23.9,23.8,23.6,23.1,22.7,22.6,22.7,22.7,22.6,22.2,21.7,21.2,20.8,20.5,20.3,20.2,20.1,20.2,20.3,20.4,20.4,20.4,20.6,21.1,21.8,22.5,23,23.1,22.9,22.4,22,21.8,21.8,21.7,21.4,21.2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.7,7.3,12.1,17.4,21.7,24.5,25.8,26.2,26.3,26.3,26.5,26.7,27.2,27.9,28.5,29.1,29.4,29.4,29,28.4,27.8,27.2,26.7,26.3,26.1,26.2,26.6,27.1,27.6,27.8,27.8,27.7,27.7,27.8,28.1,28.4,28.5,28.5,28.3,28.3,28.4,28.7,28.8,28.8,28.5,28.1,27.9,27.7,27.6,27.5,27.5,27.5,27.4,27.2,26.9,26.6,26.5,26.7,27.2,27.9,28.4,28.4,27.8,26.8,25.7,24.8,24.2,23.8,23.3,22.9,22.6,22.6,22.7,22.7,22.6,22.3,22,21.6,21.3,21.1,20.9,20.6,20.5,20.4,20.3,20.3,20.4,20.5,20.9,21.4,22.1,22.9,23.5,23.7,23.4,22.8,22.4,22.2,22.1,22.1,21.8,21.5,21.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.9,4.5,8.7,14,19.2,23.1,25.2,26.1,26.4,26.5,26.8,27.3,27.9,28.7,29.2,29.4,29.2,28.7,28.2,27.6,27.2,26.8,26.6,26.6,26.7,27.1,27.6,28,28.3,28.3,28.2,28.1,28,28.1,28.4,28.6,28.8,28.8,28.7,28.7,28.8,29,29.2,29.2,29.1,28.8,28.6,28.3,28.1,28,28,28,28,27.9,27.8,27.8,27.9,28.2,28.7,29.4,29.9,30,29.6,28.6,27.3,25.9,24.7,23.8,23.3,22.9,22.7,22.7,22.8,22.8,22.7,22.5,22.3,22.1,22,21.8,21.6,21.4,21.2,21,20.8,20.6,20.5,20.7,21,21.5,22.1,22.8,23.4,23.5,23.3,22.7,22.3,22.3,22.3,22.4,22.2,21.9,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.7,10.4,15.7,20.5,23.8,25.5,26.3,26.6,27,27.5,28.2,28.8,29.1,29,28.6,28,27.6,27.3,27.1,27.1,27.2,27.4,27.7,28,28.4,28.6,28.7,28.5,28.4,28.3,28.3,28.4,28.6,28.7,28.8,28.8,28.9,28.9,29.1,29.3,29.5,29.6,29.6,29.5,29.3,29,28.8,28.5,28.4,28.4,28.5,28.8,29.1,29.3,29.4,29.6,29.8,30.2,30.6,30.8,30.5,29.9,28.8,27.4,25.9,24.7,23.9,23.3,23,22.9,22.9,22.9,22.8,22.8,22.8,22.7,22.5,22.4,22.2,22.1,22,21.8,21.4,21,20.8,20.8,20.9,21.3,21.8,22.4,22.9,23.1,22.9,22.5,22.3,22.3,22.4,22.5,22.4,22.2,21.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.3,6.8,11.5,16.6,20.9,23.9,25.5,26.4,27,27.5,28,28.4,28.6,28.4,28,27.7,27.5,27.4,27.6,27.8,28.1,28.4,28.6,28.8,28.8,28.8,28.8,28.7,28.6,28.6,28.7,28.9,29,29.1,29.1,29.1,29.1,29.3,29.4,29.6,29.7,29.8,29.9,29.9,29.9,29.7,29.5,29.2,29,28.9,29.2,29.7,30.4,30.9,31,31,30.9,31,31.1,31.2,31.1,30.7,30.1,29.1,27.7,26.3,25.1,24.1,23.5,23.1,23,23,23.2,23.4,23.5,23.4,23.1,22.8,22.6,22.5,22.4,22.2,21.9,21.5,21.1,20.9,21,21.2,21.6,22,22.4,22.6,22.6,22.5,22.3,22.3,22.4,22.5,22.5,22.3,22.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.6,1.6,3.7,7.1,11.6,16.2,20.2,23.2,25.2,26.4,27.2,27.8,28.2,28.3,28.1,27.9,27.6,27.6,27.7,28,28.4,28.9,29.2,29.4,29.4,29.3,29.1,29,29,29,29.1,29.3,29.5,29.6,29.6,29.5,29.5,29.5,29.6,29.7,29.8,29.8,29.8,29.9,30.1,30.3,30.4,30.3,30.2,30,30,30.3,30.9,31.6,32.2,32.5,32.4,32.2,32,31.8,31.6,31.3,31.1,30.9,30.4,29.5,28.2,26.8,25.4,24.2,23.6,23.3,23.4,23.7,24,24.2,24,23.5,23.1,22.9,22.8,22.7,22.6,22.4,22.1,21.8,21.6,21.4,21.4,21.6,21.8,22.1,22.3,22.5,22.5,22.5,22.5,22.5,22.5,22.6,22.6,22.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.6,1.6,3.5,6.5,10.4,14.7,18.6,21.9,24.3,26.1,27.2,28,28.3,28.2,28.1,27.9,27.8,27.9,28.2,28.7,29.3,29.7,29.9,29.9,29.7,29.5,29.3,29.3,29.4,29.6,29.8,30,30.1,30.1,30,29.9,29.8,29.8,29.8,29.9,30,30.1,30.3,30.6,31.1,31.6,31.9,31.9,31.9,31.9,32,32.4,32.9,33.3,33.5,33.4,33,32.5,32.2,31.8,31.5,31.3,31.3,31.1,30.8,29.9,28.5,26.8,25.3,24.2,23.8,23.9,24.2,24.5,24.5,24.3,23.8,23.4,23.2,23.1,23.2,23.4,23.4,23.4,23.2,22.8,22.5,22.2,22,21.9,22,22.2,22.4,22.6,22.7,22.7,22.7,22.7,22.8,23,23]"),F_={bounds:D_,columns:I_,rows:U_,heights:N_},{bounds:[Pl,eu,nu,Ll],columns:Bo,rows:iu,heights:fa}=F_,su=[37.309805,44.895974],ou=1e3,ru=1160;function O_(i){const[t,e]=i.origin,[n,s]=i.scale,o=(su[0]-t)*n,r=(e-su[1])*s;return(a,l,c)=>{const h=Math.hypot(a-o,l-r);if(h>=ru)return c;const f=t+a/n,u=e-l/s;if(f<Pl||f>nu||u<eu||u>Ll)return c;const d=(f-Pl)/(nu-Pl)*(Bo-1),p=(Ll-u)/(Ll-eu)*(iu-1),_=Math.min(Math.floor(d),Bo-2),g=Math.min(Math.floor(p),iu-2),m=g*Bo+_,v=le.lerp(fa[m],fa[m+1],d-_),M=le.lerp(fa[m+Bo],fa[m+Bo+1],d-_),x=Math.max(.16,le.lerp(v,M,p-g));return h<=ou?x:le.lerp(x,c,le.smoothstep(h,ou,ru))}}const au=["#b2a99a","#bbb1a1","#b8ae9e","#b7ab99","#aea394"],B_="#c4baaa",z_="#a39888",cu="#4b5351";function k_(i,t,e){const n=me(i,"Верхняя и нижняя набережные · подпорные стены",{surface:"stone"});for(const s of t.waterfront.sections){if(s.soft)continue;const o={section:s,upper:!0},r={section:s,upper:!1};for(const{a,b:l,span:c}of s.segments){const[h,f]=a,[u,d]=l,p=(f-d)/c,_=(u-h)/c,g=Math.ceil(c/1.25),m=(v,M,x=0,S=0)=>{const b=le.lerp(h,u,v),w=le.lerp(f,d,v);return[b+x*p,e.faceHeight(b,w,M)+S,w+x*_]};for(let v=0;v<g;v++){const M=v/g,x=(v+1)/g,[S,,b]=m((M+x)/2,o);if(t.wallOpening(S,b,s))continue;const w=m(M,r,0,-.12),y=m(x,r,0,-.12),E=m(M,o,0,.24),A=m(x,o,0,.24);if(E[1]-w[1]<.55||A[1]-y[1]<.55)continue;n.face(z_,w,y,A,E);const L=Math.max(1,Math.round((E[1]+A[1]-w[1]-y[1])/2/.54));for(let I=0;I<L;I++){const k=(I+.026)/L,G=(I+.976)/L,X=_t(w,E,k),V=_t(w,E,G),J=_t(y,A,k),it=_t(y,A,G),vt=([j,Mt,lt],[ct,z,$],pt)=>[le.lerp(j,ct,pt)-p*.016,le.lerp(Mt,z,pt),le.lerp(lt,$,pt)-_*.016];n.face(au[(v*11+I*7)%au.length],vt(X,J,.009),vt(X,J,.991),vt(V,it,.991),vt(V,it,.009))}const P=s.coping??.38;if(n.face(B_,E,A,m(x,o,P,.24),m(M,o,P,.24)),s.rail===!1)continue;const C=(I,k)=>m(I,o,P*.55,k);for(const I of[.43,1.18])n.beam(C(M,I),C(x,I),.038,cu);const D=Math.max(1,Math.round(c/g/.28));for(let I=0;I<D;I++){const k=le.lerp(M,x,I/D);n.beam(C(k,.42),C(k,1.16),I===0?.045:.025,cu)}}}}n.finish()}const oo=[-287.6,-16.5],da=-.11,ro="#6c4934",ln="#ba986f",Wo="#a58b6c",Zl=["#674430","#734d37","#7a5239","#6a4734","#815a41"],lu=["#bd282d","#c63134","#c93636","#b9252d"];function Aa([i,t]){return(e,n)=>[i+e*Math.cos(da)-n*Math.sin(da),t+e*Math.sin(da)+n*Math.cos(da)]}const G_=[[-3.32,-1.15],[1.8,-1.12],[3.48,0],[1.8,1.12],[-3.32,1.18]].map(i=>Aa(oo)(...i));function H_(i,t){const e=new hs(1,2),n=as(new ee({color:"white",flatShading:!0}),{surface:"foliage"}),s=new yi(e,n,t.length),o=new we;t.forEach(({center:r,scale:a,color:l},c)=>{o.position.set(...r),o.scale.set(...a),o.rotation.y=c*.87,o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c,new Zt(l))}),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}function V_(i,t){const e=[[-3.32,.98,1.41],[-2.54,1.13,1.25],[-1.12,1.22,1.09],[.62,1.15,1.06],[2.05,.87,1.17],[3.14,.4,1.42],[3.5,0,1.58]];function n(l,c,h){const[f,u,d]=e[l];return t(f-(l===e.length-1?(1-h)*.6:0),c*u*(.73+.27*h),.22+(d-.22)*h)}for(const l of[-1,1])for(let c=1;c<e.length;c++){for(let h=0;h<7;h++){const f=h/7,u=(h+.96)/7;i.face(Zl[(h+c*2)%Zl.length],n(c-1,l,f),n(c,l,f),n(c,l,u),n(c-1,l,u))}if(i.beam(n(c-1,l,1),n(c,l,1),.069,ln),c<6){const[h,f,u]=e[c],d=c===1?3:4;for(let m=0;m<d;m++){const[v,M,x]=e[c-1],S=m/d,b=v+(h-v)*S,w=l*(M+(f-M)*S),y=x+(u-x)*S;i.beam(t(b,w,y),t(b,w,y+.34),.045,ln)}const[p,_,g]=e[c-1];i.beam(t(p,l*_,g+.34),t(h,l*f,u+.34),.057,ln)}}const[s,o,r]=e[0];i.face(ro,t(s,-o*.73,.22),t(s,o*.73,.22),t(s,o,r),t(s,-o,r));for(const l of[-.52,.52]){const c=s-.025,h=.3;for(const f of[l-h,l+h])i.beam(t(c,f,.4),t(c,f,1.18),.044,ln);for(const f of[.4,1.18])i.beam(t(c,l-h,f),t(c,l+h,f),.044,ln);for(let f=0;f<5;f++){const u=f/4;i.beam(t(c,l-h+2*h*u,.43),t(c,l-h,.43+.7*u),.021,ln),i.beam(t(c,l+h-2*h*u,.43),t(c,l+h,.43+.7*u),.021,ln),i.beam(t(c,l-h+2*h*u,1.14),t(c,l+h,1.14-.7*u),.021,ln),i.beam(t(c,l+h-2*h*u,1.14),t(c,l-h,1.14-.7*u),.021,ln)}}i.beam(t(s,-o,r+.34),t(s,o,r+.34),.06,ln);for(let l=0;l<=10;l++){const c=-o+2*o*l/10;i.beam(t(s,c,r),t(s,c,r+.34),.045,ln)}for(let l=1;l<e.length;l++){const[c,h]=e[l-1],[f,u]=e[l];i.face(l%2?"#8e694c":"#856149",t(c,-h,1),t(f,-u,1),t(f,u,1),t(c,h,1))}for(const l of[-1,1])for(const c of[-2.68,-1.87,-.88]){const h=l*(c<-2?1.04:1.12),f=Array.from({length:12},(u,d)=>{const p=d*Math.PI/6;return t(c+Math.cos(p)*.11,h,.66+Math.sin(p)*.1)});i.face("#d0b796",...f)}for(let l=0;l<5;l++){const c=.2+l*.16,h=1.73-l*.13;i.face(ln,t(-2.79,h,c),t(-2.13,h,c),t(-2.13,h-.13,c),t(-2.79,h-.13,c))}for(const l of[-2.81,-2.11])i.beam(t(l,1.77,.16),t(l,1.13,1.06),.075,ro);i.beam(t(2.55,0,1.38),t(4.88,0,2.98),.105,ln),i.beam(t(4.62,0,2.78),t(1.19,0,4.62),.026,Wo);const a=[];for(let l=0;l<14;l++){const c=l*Math.PI/7;a.push(t(-2.37,Math.cos(c)*.31,1.54+Math.sin(c)*.31))}i.beam(t(-2.37,0,1),t(-2.37,0,1.53),.082,ro),a.forEach((l,c)=>{i.beam(l,a[(c+1)%a.length],.036,ln),c%2===0&&i.beam(l,t(-2.37,0,1.54),.025,ln)})}function hu(i,t,e,n){i.beam(t(e,0,.99),t(e,0,n),.087,ro);const s=[[1.56,n*.6,1.03],[n*.61,n*.76,.79],[n*.78,n*.9,.55]];for(const[o,r,a]of s){const l=(c,h)=>{const f=Math.sin(h*Math.PI)*(1-c*c);return t(e+.11+.25*f,c*a*(1-h*.2),o+h*(r-o))};for(let c=0;c<4;c++)for(let h=0;h<6;h++){const f=-1+h/3,u=f+1/3,d=c/4,p=(c+1)/4;i.face(lu[h===0||h===5?0:(c+h)%lu.length],l(f,d),l(u,d),l(u,p),l(f,p))}for(const c of[0,1])i.beam(l(-1.06,c),l(1.06,c),.037,ro);for(const c of[-1,1])i.beam(l(c,0),l(c,1),.023,Wo)}for(const o of[-1,1]){i.beam(t(e-.77,o*1.05,1.2),t(e,o*.26,n*.86),.022,Wo),i.beam(t(e+.53,o*1.05,1.2),t(e,o*.26,n*.86),.022,Wo);for(let r=1;r<10;r++){const a=r/11,l=o*(1.05-.79*a),c=1.2+(n*.86-1.2)*a;i.beam(t(e-.77*(1-a),l,c),t(e+.53*(1-a),l,c),.019,Wo)}}}function W_(i,t,e,n,s){for(let o=0;o<14;o++){const r=o*2.399,a=Math.cos(r),l=Math.sin(r),c=s*(.52+.38*(o*7%11/10)),h=t(e+a*.06,n+l*.06,.04),f=t(e+a*.36*s,n+l*.36*s,c*.68),u=t(e+a*.57*s,n+l*.57*s,c),d=["#8c8551","#a09461","#b2a173"][o%3];i.beam(h,f,.027,d),i.beam(f,u,.018,d)}}function uu(i,t,e,n,s){const o=s?["#a34c43","#be8341","#567b56","#496d80","#c6944e"]:["#675644","#665540"];for(const r of[-.79,.79]){const a=s?"#3e684d":"#444a46";i.beam(t(e-.22,n+r,.025),t(e-.18,n+r,.78),.047,a),i.beam(t(e+.23,n+r,.025),t(e+.22,n+r,.43),.047,a),i.beam(t(e-.18,n+r,.43),t(e+.22,n+r,.43),.052,a)}for(let r=0;r<5;r++){const a=e-.19+r*.1;i.beam(t(a,n-.9,.44),t(a,n+.9,.44),.071,o[r%o.length]),i.beam(t(e-.19-r*.012,n-.9,.57+r*.072),t(e-.19-r*.012,n+.9,.57+r*.072),.067,o[(r+1)%o.length])}}function X_(i,t){const e=new de;e.name="Сквер у Алых парусов",i.add(e);const n=me(e,"Алые паруса · деревянный кораблик и клумбы",{surfaces:{wood:[ro,ln,...Zl,"#8e694c","#856149"],ground:["#777653","#797358"]}}),s=Aa(oo),o=t(...oo)+.15,r=(u,d,p)=>{const[_,g]=s(u,d);return[_,o+p,g]},a=(u,d)=>[[-u,-d],[u,-d],[u,d],[-u,d]].map(([p,_])=>s(p,_));n.shell(a(9,2.18),o-.08,o+.11,"#d7d5bd"),n.flat(a(8.87,2.05),o+.125,"#777653");for(let u=0;u<28;u++){const d=-4.2+u*.318,p=d+.307;n.face(["#628d86","#699892","#7ca39a","#5a8179"][u%4],r(d,-1.45,.145),r(p,-1.45,.145),r(p,1.45,.145),r(d,1.45,.145))}V_(n,r),hu(n,r,-1.03,5.02),hu(n,r,.98,4.6),uu(n,r,9.27,.08,!0);for(const[u,d,p]of[[-7.25,-.95,1.06],[-6.45,.52,.72],[-5.35,1.11,.93],[4.35,1.4,.89],[5.48,-1.23,1.1],[6.8,.44,.99],[7.85,1.12,.83]])W_(n,r,u,d,p);const l=[],c=["#415c35","#536c3b","#66804c","#4d6540"],h=[[-344.6,-12.8,9.8,3.45],[-326.5,-13.4,10.5,3.4],[-310.6,-14.2,12.5,3.7],[-265.5,-20.3,15,4.7],[-247.5,-23.4,10.8,4.5]];for(const[u,[d,p,_,g]]of h.entries()){const m=Aa([d,p]),v=t(d,p)+.14,M=(x,S)=>[[-x,-S],[x,-S],[x,S],[-x,S]].map(b=>m(...b));n.shell(M(_/2,g/2),v-.1,v+.12,"#d4d3c5"),n.flat(M(_/2-.12,g/2-.12),v+.13,"#797358");for(const x of[-.29,.02,.32]){const[S,b]=m(x*_,(u%2-.5)*.8),w=1.15+.51*((u+Math.round(x*10))%3+3)/3;for(let y=0;y<4;y++){const E=w*(.5-y*.095);l.push({center:[S,v+w*(.28+y*.19),b],scale:[E,w*.26,E*.9],color:c[(y+u)%c.length]})}}for(let x=0;x<7;x++){const[S,b]=m((x/6-.5)*_*.75,-.9);l.push({center:[S,v+.2,b],scale:[.42,.16,.42],color:x%3?"#804944":"#77673c"})}}for(const[u,d]of[[-301.1,-31],[-290.8,-31.7],[-273.1,-34.3],[-260.6,-35],[-247.5,-37.5]]){const p=Aa([u,d]),_=t(u,d)+.15;uu(n,(m,v,M)=>{const[x,S]=p(v,-m);return[x,_+M,S]},0,0,!1)}const f=[[-318,0,6.2],[-310.5,-.4,7.7],[-301,1.5,6.4],[-292.2,-.9,8.3],[-282.1,-1.8,7.6],[-272.4,.8,8.7],[-261,-1.2,6.8],[-249.6,.5,7.3]];for(const[u,[d,p,_]]of f.entries()){const g=t(d,p)+.05;n.beam([d,g,p],[d+.13,g+_*.69,p],.24,"#665949");for(let m=0;m<6;m++){const v=m*2.399,M=_*(m<4?.21:.14);l.push({center:[d+Math.cos(v)*M,g+_*(.6+m*.047),p+Math.sin(v)*M],scale:[_*.26,_*.27,_*.23],color:c[(u+m)%c.length]})}}H_(e,l),n.finish()}function fu(i){const t=new Nc(i);return t.colorSpace=tn,t.anisotropy=4,t}function Oe(i,{text:t,position:e,size:n,outward:s,color:o="#fff",background:r,weight:a=700,fontFamily:l="system-ui, sans-serif",letterSpacing:c="0px",lighting:h="spot",glowColor:f="#ffe4af",spill:u=!0}){if(typeof document>"u")return;const d=document.createElement("canvas");d.width=Math.max(160,Math.min(768,Math.round(n[0]*138))),d.height=Math.max(32,Math.round(d.width*n[1]/n[0]));const p=d.getContext("2d");if(!p)return;r&&(p.fillStyle=r,p.fillRect(0,0,d.width,d.height));const _=t.split(`
`);let g=d.height*.76/_.length;p.letterSpacing=c,p.font=`${a} ${g}px ${l}`,g*=Math.min(1,d.width*.93/Math.max(..._.map(S=>p.measureText(S).width)));function m(S,b,w=0){S.font=`${a} ${g}px ${l}`,S.letterSpacing=c,S.fillStyle=b,S.textBaseline="middle",S.textAlign="center",_.forEach((y,E)=>{S.fillText(y,w+d.width/2,w+d.height/2+(E-(_.length-1)/2)*g*1.13)})}m(p,o);const v=new bn({map:fu(d),alphaTest:.35,toneMapped:!1}),M=new re(new oi(...n),v);M.name=t,M.position.set(...e),M.rotation.y=Math.atan2(...s);let x;if(h==="neon"||h==="backlit"){const S=h==="neon",b=Math.min(44,Math.round(d.width*.12)),w=document.createElement("canvas");w.width=d.width+2*b,w.height=d.height+2*b;const y=w.getContext("2d");y.shadowColor=f,y.shadowBlur=Math.min(b,Math.max(8,g*(S?.64:.27))),m(y,f,b),S&&(y.shadowBlur=0,y.globalAlpha=.18,m(y,"#fff1dd",b));const E=n[0]*w.width/d.width,A=n[1]*w.height/d.height;x=new re(new oi(E,A),new bn({map:fu(w),transparent:!0,opacity:S?.94:.79,blending:uo,depthWrite:!1,toneMapped:!1})),x.position.z=.014,x.visible=!1,M.add(x)}if(h!=="unlit"&&u){const S=new we;S.position.set(0,h==="spot"?n[1]*.64:0,h==="spot"?.75:.54),S.userData.nightLight={color:f,intensity:h==="neon"?3.8:2.2,range:h==="spot"?3.6:3.1},M.add(S)}return M.userData.setEvening=S=>{const b={spot:.82,backlit:.43,neon:.16,unlit:.5};v.color.setScalar(S?b[h]??.82:1),x&&(x.visible=S)},i.add(M),M}const ke="#f4f2e9",fd="#e9e7df",un="#373e3e",Ra="#303637",ao="#b28c5e",mc=["#d1b27a","#bc9c63","#c8a86f"],q_="#ecefe8",ns=[[-416.6,-27.8,-17.5],[-408.5,-25.4,-15.7],[-399.5,-23.2,-14.7],[-389.5,-22.8,-14.6],[-378.4,-23.1,-14.8]],dd=[[-415.65,-26.9],[-407.4,-24.5],[-408.6,-16.85],[-416.1,-18.05]];function pd(i,t,e,n){return[[i,e],[t,e],[t,n],[i,n]]}function vi(i,t,e,n,s=24){return Array.from({length:s},(o,r)=>{const a=r*2*Math.PI/s;return[i+e*Math.cos(a),t+n*Math.sin(a)]})}function Ae([i,t],e){return[i,e,t]}function pa(i,t){const e=ns.findIndex(([o])=>o>=i);if(e<0)return ns.at(-1)[t];const n=ns[Math.max(0,e-1)],s=ns[Math.max(0,e)];return n===s?n[t]:n[t]+(s[t]-n[t])*(i-n[0])/(s[0]-n[0])}function Sn(i,t,e,n,s,o,r,a){i.shell(pd(t-s/2,t+s/2,n-r/2,n+r/2),e,e+o,a)}function Y_(i,t){const e=new de;e.name="Кофейня Qúeue",i.add(e);const n=me(e,"Павильон и кофейная стойка",{surfaces:{wood:["#b48558","#796c51"],foliage:["#737a51","#68774a","#83916b"]}}),s=as(new bn({color:"#759497",transparent:!0,opacity:.26,depthWrite:!1,side:nn}),{surface:"glass",strength:.6}),o=dd,r=t(-412.5,-21.7),a=r+.09,l=r+2.82;n.shell(o,r-.18,a,"#c9c5b5"),n.shell(o,l,r+3.12,ke),n.wall(o[3],o[0],a,l,ke);for(const[f,u]of[[0,[0,.13,.32,.54,.76,.95,1]],[1,[0,.14,.39,.64,.89,1]],[2,[0,.28,.43,.58,.7,.88,1]]]){const d=o[f],p=o[f+1],_=p[0]-d[0],g=p[1]-d[1],m=Math.hypot(_,g);for(let v=0;v<u.length-1;v++){const M=_t(d,p,u[v]),x=_t(d,p,u[v+1]);if(v===0||v===u.length-2){n.wall(M,x,a,l,ke);continue}const b=f===2&&v===4,w=f===2&&v===3,y=b||w?r+2.48:l;y<l&&n.wall(M,x,y,l,ke);const E=_t(M,x,.5),A=w?r+1.1:a;w&&(n.wall(M,x,a,A,"#a8a494"),n.beam([M[0],A,M[1]],[x[0],A,x[1]],.12,Ra));const L=new re(new oi((u[v+1]-u[v])*m,y-A),s);L.position.set(E[0],(A+y)/2,E[1]),L.rotation.y=-Math.atan2(g,_),e.add(L);for(const P of[M,x])n.beam(Ae(P,a),Ae(P,y),.058,Ra);if(n.beam(Ae(M,y),Ae(x,y),.055,Ra),b){const P=_t(M,x,.82);n.beam(Ae(P,r+.92),Ae(P,r+1.3),.052,"#bab4a5")}}}const c=[[-415.28,-22.2],[-414.15,-22.2],[-413.68,-21.78],[-413.68,-19.92],[-412.9,-19.25],[-411.05,-19.25],[-410.8,-18.65],[-411.22,-18.34],[-414.68,-18.67],[-415.25,-19.13]];n.shell(c,a,r+1.07,"#e4decd"),n.shell(c,r+1.07,r+1.14,"#f1e9d7");const h=c.map(f=>_t([-413.5,-19.8],f,1.03));n.shell(h,r+2.08,r+2.15,"#eac58a"),n.shell(h,r+2.15,l,"#e3dbc9"),Sn(n,-413.54,r+1.14,-19.02,.86,.46,.45,"#343435"),Sn(n,-413.54,r+1.5,-18.79,.76,.08,.04,"#a7a199");for(const f of[-413.8,-413.62,-413.44,-413.26])n.shell(vi(f,-18.99,.06,.06,10),r+1.6,r+1.76,"#b48558");Sn(n,-411.83,r+1.14,-18.85,.85,.34,.46,"#948273"),Sn(n,-411.83,r+1.48,-18.85,.85,.046,.46,"#bbb2a0");for(const[f,u]of[[-412.4,-21.8],[-410.8,-21.2]])n.shell(vi(f,u,.21,.21,14),a,r+.47,"#e0d9c9"),n.shell(vi(f,u,.32,.32,14),r+.47,r+.52,"#ece4d2");for(const f of[.19,.39,.59,.79]){const[u,d]=_t(o[0],o[1],f),p=t(u,d-.66);for(const _ of[-.24,.24])n.beam([u+_,p,d-.82],[u+_,p+.43,d-.82],.022,un),n.beam([u+_,p,d-.36],[u+_,p+.86,d-.28],.026,un),n.beam([u+_,p+.41,d-.82],[u+_,p+.41,d-.35],.032,un);for(let _=0;_<7;_++){const g=p+.45+_*.063,m=d-.34+_*.008;n.beam([u-.24,g,m],[u+.24,g,m],.015,un)}Sn(n,u,p+.41,d-.58,.48,.05,.42,un)}for(const f of[.04,.94]){const[u,d]=_t(o[0],o[1],f);Z_(n,u,t(u,d-.64),d-.64)}n.finish()}function Z_(i,t,e,n){i.shell(vi(t,n,.26,.26,12),e,e+.5,"#e6e7dd"),i.flat(vi(t,n,.22,.22,12),e+.505,"#6b6154"),i.beam([t,e+.5,n],[t+.04,e+1.39,n+.02],.035,"#796c51");for(let s=0;s<9;s++){const o=s*2.4,r=e+.79+s*.075,a=[t+.21*Math.cos(o),r+.11,n+.21*Math.sin(o)];i.beam([t,r,n],a,.024,"#737a51"),i.face(s%2?"#68774a":"#83916b",a,[t+.025,r,n+.06],[a[0]*.5+t*.5,r+.17,a[2]*.5+n*.5])}}function $_(i){const t=new de;t.name="Ресторан «Море. Истории о еде»",i.add(t);const e=me(t,"Белая терраса у «Старинной Анапы»",{surfaces:{wood:[ao,...mc],ground:["#6b6154"]}}),{front:[n,s],grade:o}=xs,r=(u,d)=>{const[p,_]=_t(n,s,u/32.59);return[p-d*.197,_+d*.98]},a=(u,d,p,_)=>[r(u,p),r(d,p),r(d,_),r(u,_)],l=o+.15,c=l+2.94;e.shell(a(0,32.59,0,1.9),l-.34,l,"#b6aa94"),e.shell(a(0,32.59,7.1,9.15),l-.34,l,"#b6aa94");for(const[u,d]of[[0,7.3],[12.1,20.4],[24.9,32.59]])e.shell(a(u,d,1.9,7.1),l-.34,l,"#b6aa94");for(const[u,d,p,_]of[[0,32.59,0,1.9],[0,32.59,7.1,9.15],[0,7.3,1.9,7.1],[12.1,20.4,1.9,7.1],[24.9,32.59,1.9,7.1]])for(let g=u+.13;g<d;g+=.34)e.beam(Ae(r(g,p),c),Ae(r(g,_),c),.077,ke);for(let u=0;u<6;u++){const d=c-.02+u*.09;e.beam(Ae(r(0,0),d),Ae(r(32.59,0),d),.066,ke);for(const p of[0,32.59])e.beam(Ae(r(p,0),d),Ae(r(p,9.15),d),.066,ke)}for(const u of[.14,4.55,8.98,13.41,17.84,22.27,26.7,32.43])e.beam(Ae(r(u,.22),l),Ae(r(u,.22),c+.44),.165,ke);for(const u of[2.35,6.82,11.25,15.66,20.07,24.48,28.89,31.3]){e.shell(a(u-.76,u+.76,.16,.72),l,l+.65,ke);for(let _=1;_<=5;_++){const g=l+.1+_*.085;e.beam(Ae(r(u-.75,.153),g),Ae(r(u+.75,.153),g),.02,fd)}e.flat(a(u-.7,u+.7,.2,.68),l+.655,"#788166");const[d,p]=r(u,1.34);Sn(e,d,l+.69,p,.82,.07,.7,"#ab8d63"),Sn(e,d,l,p,.08,.69,.08,"#545549")}const[h,f]=r(25.4,-.05);Oe(t,{text:"МОРЕ",position:[h,c+.2,f],size:[2.28,.41],outward:[.197,-.98],color:"#6e553a",lighting:"spot",glowColor:"#ffd089"});for(const u of[24.65,25.4,26.15])e.beam(Ae(r(u,-.018),c+.5),Ae(r(u,-.17),c+.44),.041,"#70664f");e.finish()}function K_(i,t,e,n,s){const o=new de,r=new bn({color:"#c9ba98",toneMapped:!1}),a=new vn(.043,8,6),l=4,c=16;let h;for(let f=0;f<=c;f++){const u=f/c,[d,p]=_t(e,n,u),_=s-.18*Math.sin(Math.PI*(u*l%1)),g=[d+.13,_,p];if(h&&t.beam(h,g,.015,"#353535"),h=g,f===c)continue;const m=new re(a,r);m.position.set(d+.13,_-.052,p),f%4===2&&(m.userData.nightLight={color:"#ffe4ad",intensity:3.5,range:3.4}),o.add(m)}o.userData.setEvening=f=>r.color.set(f?"#fff0be":"#c9ba98"),i.add(o)}function J_(i,t){const e=new de;e.name="Гриль-бар «Бикью»",i.add(e);const n=me(e,"Остеклённый фасад на Греческом переулке",{surfaces:{flatRoof:["#353635"],stone:["#77726a"],wood:["#403731"]}}),s=[[-456.42,4.1],[-456.94,24.1]],o=[[-458.12,4.1],[-458.64,24.1]],r=[o[0],s[0],s[1],o[1]],a=t(-457,14.1)+.11,l=Math.min(...s.map(d=>t(...d)))-.2,c=a+2.82;n.shell(r,l,a+.12,"#77726a"),n.shell(r,c,c+.21,"#353635"),n.wall(...o,a+.1,c,"#403731");const h=as(new bn({color:"#394c50",transparent:!0,opacity:.53,depthWrite:!1,side:nn}),{surface:"glass",strength:.7});for(const[d,p,_]of[[...s,14],[o[0],s[0],1],[s[1],o[1],1]])for(let g=0;g<_;g++){const m=_t(d,p,g/_),v=_t(d,p,(g+1)/_),M=_t(m,v,.5),x=v[0]-m[0],S=v[1]-m[1],b=new re(new oi(Math.hypot(x,S),c-a-.12),h);if(b.position.set(M[0],(c+a+.12)/2,M[1]),b.rotation.y=-Math.atan2(S,x),e.add(b),n.beam(Ae(m,a+.08),Ae(m,c),.074,"#292c2b"),n.beam(Ae(m,a+.85),Ae(v,a+.85),.041,"#393b39"),_===14&&g!==6&&g!==7){for(const w of[.12,.45]){const y=Math.max(0,t(M[0]+.15,M[1])-a),E=(A,L)=>{const[P,C]=_t(m,v,A+w);return[P+.025,a+L+y,C]};n.face("#c89045",E(0,.36),E(.14,.36),E(.31,.6),E(.17,.6)),n.face("#c89045",E(.17,.6),E(.31,.6),E(.14,.84),E(0,.84))}Sn(n,M[0]-.75,a+.71,M[1],.55,.09,.62,"#856747"),Sn(n,M[0]-.75,a+.1,M[1],.07,.61,.07,"#343330")}}K_(e,n,...s,c-.06);const f=new bn({color:"#757078",toneMapped:!1}),u=new re(new Pe(.047,.047,3),f);u.position.set(-457.8,c-.27,7.7),u.userData.setEvening=d=>f.color.set(d?"#ac91ff":"#757078"),u.userData.nightLight={color:"#9b78ff",intensity:2.5,range:3.3},e.add(u),Oe(e,{text:`BAR
BQ`,position:[-456.54,a+1.36,13.98],size:[1.34,1.17],outward:[1,.026],color:"#cac2a7",weight:550,lighting:"unlit"}),n.finish()}function Q_(i,t,e){const n=new bn({color:"#d2d0c2",toneMapped:!1}),s=new de;for(const o of[1,2]){const r=Array.from({length:41},(c,h)=>{const f=le.lerp(e[0],e.at(-1),h/40),[u,d,p]=t(f,o,-.18);return new F(u,d,p+(o===1?-.05:.05))}),a=new Bc(r),l=new re(new wo(a,85,.026,5,!1),n);s.add(l)}s.userData.setEvening=o=>n.color.set(o?"#fff2d7":"#d2d0c2"),i.add(s)}function j_(i,t){const e=new de;e.name="Лаундж-зона «Очередь»",i.add(e);const n=me(e,"Волнообразный навес и кофейня"),s=(p,_)=>t(p,_)+.19,o=p=>{const _=(p+395.7)/5.6;return s(p,pa(p,2))+3.65+1.08*Math.exp(-(_**2))},r=(p,_,g=0)=>[p,o(p)+g,pa(p,_)],a=[-416.6,-409.3,-403.8,-388.6,-383.6,-378.4];for(const p of[1,2])for(let _=1;_<a.length;_++){const g=a[_-1],m=a[_],v=Math.ceil((m-g)/.37);let M,x;for(let S=0;S<=v;S++){const b=S/v,w=g+(m-g)*b,y=pa(w,p),E=s(w,y),A=Math.sqrt(Math.max(0,1-(2*b-1)**2)),L=[w,E+.09+(o(w)-E-.36)*A,y],P=r(w,p);M&&(n.beam(M,L,.18,ke),n.beam(x,P,.2,fd),n.beam([x[0],x[1]-.23,x[2]],r(w,p,-.23),.075,ke)),(S>0||_===1)&&n.beam(L,P,S===0||S===v?.18:.065,ke),M=L,x=P}}for(let p=0;p<=94;p++){const _=a[0]+(a.at(-1)-a[0])*p/94;n.beam(r(_,1,-.11),r(_,2,-.11),.1,ke)}Q_(e,r,a),Y_(e,s);const l=-412.2,c=o(l)-.1,h=(ns[1][2]-ns[0][2])/(ns[1][0]-ns[0][0]),f=[-h,1],u=pa(l,2)+.15,d=[[-1.65,-.04],[1.65,-.04],[1.65,.04],[-1.65,.04]].map(([p,_])=>[l+p,u+p*h+_]);n.shell(d,c-.21,c+.21,ke),Oe(e,{text:"Qúeue · кофе и море",position:[l,c,u+.05],size:[3.2,.39],outward:f,color:Ra,lighting:"spot"}),n.finish()}function du(i,t,e,n){const s=t(e,n)+.16,o=vi(e,n,3.45,2.35);i.shell(o,s-.24,s+.08,ao);for(let a=-10;a<=10;a++){const l=a*.22,c=3.4*Math.sqrt(1-(l/2.35)**2);i.beam([e-c,s+.084,n+l],[e+c,s+.084,n+l],.018,mc[(a+12)%mc.length])}for(const a of[-1,1]){const l=[e+a*2.5,n];i.shell(vi(...l,.095,.095,10),t(...l)-.12,s+3.05,ke)}const r=vi(e,n,3.55,2.45,32);for(let a=0;a<r.length;a++)i.beam(Ae(r[a],s+2.88),Ae(r[(a+1)%r.length],s+2.88),.13,ke);for(let a=-8;a<=8;a++){const l=a*.4,c=2.41*Math.sqrt(1-(l/3.55)**2);i.beam([e+l,s+2.89,n-c],[e+l,s+2.89,n+c],.09,ke)}for(const a of[-.23,-.09,.09,.23]){const l=Array.from({length:32},(c,h)=>{const f=h*Math.PI/16;return[e+.97*Math.cos(f),s+1.38+.99*Math.sin(f),n+a]});for(let c=0;c<l.length;c++)i.beam(l[c],l[(c+1)%l.length],.035,ke)}Sn(i,e,s+.55,n,1.08,.055,.48,ao);for(const a of[-.57,.57])i.beam([e+a,s+2.21,n],[e+a,s+2.89,n],.018,un)}function tx(i,t){const s=t(-397.8,-29.25)+.18;for(const r of[-2.28,2.28])i.shell(vi(-397.8+r,-29.25,.085,.085,12),s-.14,s+3.38,ke);const o=[[-397.8-3.18,s+2.77,-29.25+.45],[-397.8-3.27,s+3,-29.25-1.37],[-397.8,s+2.67,-29.25-.72],[-397.8+3.29,s+3.02,-29.25-1.3],[-397.8+3.14,s+2.8,-29.25+.49]];for(let r=0;r<o.length;r++)i.beam(o[r],o[(r+1)%o.length],.085,ke);for(let r=0;r<20;r++){const a=(r+1)/21,l=a<.5?_t(o[1],o[2],a*2):_t(o[2],o[3],(a-.5)*2);i.beam(l,_t(o[0],o[4],a),.064,ke)}}function ex(i,t){const e=new de;e.name="Качели, теневые крылья и белые галечные сиденья",i.add(e);const n=me(e,"Настилы и мебель",{surfaces:{wood:[ao,...mc]}});du(n,t,-410.7,-30.1),du(n,t,-382.8,-25.55),tx(n,t);const s=new vn(1,24,12),o=new ee({color:q_});for(const[f,u,d,p,_,g]of[[-401.9,-30.05,1.12,.69,.41,.18],[-402.7,-27.65,.88,.65,.4,-.29],[-399.6,-26.05,1.26,.72,.43,-.14],[-396.7,-28.5,.73,.62,.41,.26],[-395.1,-26.05,.98,.68,.43,-.31]]){const m=new re(s,o);m.scale.set(d,_,p),m.rotation.y=g,m.position.set(f,t(f,u)+_+.15,u),m.castShadow=!0,m.receiveShadow=!0,e.add(m)}for(const[f,u]of[[-406.2,-20.1],[-403,-18.2],[-390.1,-17.3]]){const d=t(f,u)+.15;n.shell(vi(f,u,.38,.38,16),d+.72,d+.77,un),n.beam([f,d,u],[f,d+.72,u],.045,un);for(const p of[-.74,.74]){Sn(n,f+p,d+.43,u,.42,.055,.42,un);for(const _ of[-.16,.16])for(const g of[-.15,.15])n.beam([f+p+_,d,u+g],[f+p+_,d+.43,u+g],.029,un);n.wall([f+p*1.25,u-.19],[f+p*1.25,u+.19],d+.46,d+.81,un)}}const r=-387.7,a=-20.4,l=t(r,a)+.16,c=pd(r-.92,r+.92,a-.72,a+.72);n.shell(c,l-.12,l+.42,ao);for(const f of c)n.beam(Ae(f,l),Ae(f,l+1.75),.09,ao);const h=[[r-1,l+2.35,a],[r+1,l+2.35,a]];for(const f of[-1,1])n.face("#99704d",...h,[r+1.03,l+1.72,a+f*.82],[r-1.03,l+1.72,a+f*.82]);n.finish()}function nx(i,t){const e=me(i,"Памятный знак Матери Марии"),n=-652.7,s=-66.6,o=t(n,s)+.1,r=[[-1.02,-.42],[-.73,-.78],[.59,-.78],[1.05,-.39],[1.15,.24],[.91,.59],[-.78,.61],[-1.1,.18]],l=[[-.63,.68,-.21],[-.42,1.14,-.51],[.04,1.53,-.56],[.53,1.25,-.39],[.84,.85,-.01],[.88,.47,.37],[-.76,.48,.43],[-.94,.59,.16]].map(([h,f,u])=>[n+h,o+f,s+u]),c=r.map(([h,f])=>[n+h,o-.13,s+f]);for(let h=0;h<r.length;h++){const f=(h+1)%r.length;e.face(h%2?"#706f67":"#666860",c[h],c[f],l[f],l[h]),e.face(h%3?"#8e928b":"#a4a79f",l[h],l[f],[n+.03,o+.95,s-.01])}e.beam([n+.02,o+.05,s+1],[n+.08,o+1.58,s-.57],.14,"#807f71"),e.beam([n-.82,o+1,s+.055],[n+.9,o+1,s+.055],.14,"#807f71");for(let h=0;h<3;h++)for(const[f,u]of[-1.2,-.6,.035,.635].entries()){const d=n+u+.286,p=s+1.33+h*.58,_=t(d,p)+.035;Sn(e,d,_-.08,p,.57,.09,.56,f===0||f===3?"#a78277":"#929897")}e.finish()}function ix(i,t){const e=me(i,"Памятник морскому десанту"),n=-631.7,s=-37.2,o=t(n,s)+.09,r=(l,c,h)=>[n+l,o+c,s+h];Sn(e,n,o-.12,s+.45,2.85,.23,2.35,"#bbb6aa"),Sn(e,n,o+.11,s+.3,2.19,.26,1.57,"#424545"),Sn(e,n,o+.37,s-.25,1.06,2.08,.22,"#333837");const a=Array.from({length:10},(l,c)=>{const h=Math.PI/2+c*Math.PI/5,f=c%2?.064:.151;return r(-.28+f*Math.cos(h),2.12+f*Math.sin(h),-.135)});for(let l=0;l<a.length;l++)e.face("#b6a06b",r(-.28,2.12,-.135),a[l],a[(l+1)%a.length]);e.beam(r(-.34,.52,.73),r(.73,1.39,.54),.13,un),e.beam(r(-.44,.58,.48),r(-.2,.53,.95),.18,un);for(const[l,c]of[[[-.66,.79,.72],[-.62,1.33,.65]],[[-.21,.84,.7],[.01,1.35,.58]]])e.beam(r(-.37,.57,.74),r(...l),.11,un),e.beam(r(...l),r(...c),.1,un),e.face(un,r(...c),r(c[0]-.1,c[1]-.26,c[2]+.07),r(c[0]+.08,c[1]-.23,c[2]-.05));for(const l of[-1,0,1]){const c=l*.82,h=l*1.21,f=[r(c-.32,.28,1.72),r(c+.32,.28,1.72),r(h+.37,.19,3.17),r(h-.37,.19,3.17)],u=f.map(([d,,p])=>[d,t(d,p)-.08,p]);e.face("#b7b5ac",...f);for(let d=0;d<f.length;d++){const p=(d+1)%f.length;e.face("#a7a8a1",f[d],f[p],u[p],u[d])}e.face("#444746",r(c-.25,.294,1.8),r(c+.25,.294,1.8),r(h+.28,.216,3.05),r(h-.28,.216,3.05))}e.finish()}function sx(i,t){j_(i,t),ex(i,t),$_(i),J_(i,t),nx(i,t),ix(i,t)}const bs=Math.PI*2;function hr(i,t,e,n=36){return Array.from({length:n},(s,o)=>{const r=o/n*bs;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function ox(){const e=new Uint8Array(18432);for(let s=0;s<48;s++){const o=(s+.5)/48;for(let r=0;r<96;r++){const a=r/96*bs,l=Math.max(0,Math.sin(a*3)*.06+Math.sin(a*7+.4)*.035),c=o>.51+l?[173+o*46,196+o*36,211+o*38]:o>.42?[71,78,66]:[122+o*71,113+o*77,99+o*86],h=(s*96+r)*4;e.set([...c,255],h)}}const n=new Ic(e,96,48);return n.colorSpace=tn,n.mapping=jo,n.needsUpdate=!0,new cr({color:"#ced3d4",envMap:n,reflectivity:.88,specular:"#f2f5f5",shininess:78})}function rx(i,t){const s=me(i,"Фонтан «Жемчужина Анапы»"),o=(d,p,_=0)=>[d,t(d,p)+.17+_,p],r=hr(-238,2,3.5),a=hr(-238,2,3.71);r.forEach(([d,p],_)=>{const g=(_+1)%r.length;s.face("#555857",o(-238,2),o(d,p),o(...r[g])),s.face("#997359",o(d,p),o(...a[_]),o(...a[g]),o(...r[g]))});for(let d=0;d<28;d++){const p=d*bs/28,_=hr(-238+2.85*Math.cos(p),2+2.85*Math.sin(p),.036,8);s.face("#a7a8a1",..._.map(g=>o(...g,.008)))}const l=.13;for(let d=0;d<6;d++){const p=l+d*bs/6;for(let _=0;_<5;_++){const g=p-.34+_*.135,m=g+.133,v=(w,y,E)=>o(-238+Math.cos(w)*y,2+Math.sin(w)*y,E),M=v(g,4.43,.44),x=v(m,4.43,.44),S=v(g,4.93,.36),b=v(m,4.93,.36);s.face("#9e9a90",M,x,v(m,4.41,-.045),v(g,4.41,-.045)),s.face("#8e8b84",v(g,5.06,.02),v(m,5.06,.02),v(m,5.06,.1),v(g,5.06,.1)),s.face("#bf8770",M,x,b,S),s.face("#b67e64",S,b,v(m,5.06,.1),v(g,5.06,.1)),_===0&&s.face("#a39d92",M,S,v(g,5.06,.02),v(g,4.41,-.045)),_===4&&s.face("#a39d92",x,b,v(m,5.06,.02),v(m,4.41,-.045))}}const c=new de;c.name="Шесть зеркальных сфер",i.add(c);const h=new vn(1,28,20),f=ox(),u=[[0,0,.57,3.35],[-1.65,1.12,.56,.86],[1.77,-.98,.48,1.12],[-2.31,-1.72,.51,0],[2.44,1.69,.47,0],[.47,-2.67,.43,0]];for(const[d,p,_,g]of u){const[m,v,M]=o(-238+d,2+p),x=new re(h,f);if(x.scale.setScalar(_),x.position.set(m,v+_+g,M),x.castShadow=!0,c.add(x),!!g)for(let S=0;S<11;S++){const b=S/11*bs,w=b+.88;s.beam([m+Math.cos(b)*.13,v,M+Math.sin(b)*.13],[m+Math.cos(w)*_*.63,v+g+.13,M+Math.sin(w)*_*.63],.026,"#a5a7a4")}}s.finish()}function ax(i,t){const o=Math.cos(-.51),r=Math.sin(-.51),a=me(i,"Арка Центрального пляжа"),l="#eeeae0",c="#dbd9ce",h=3.11,f=[1.21,1.28,1.34,1.28,1.21],u=[-6.36,-3.69,-1.25,1.25,3.69,6.36],d=(m,v)=>[197.02+m*o-v*r,-463.27+m*r+v*o],p=Math.max(...u.map(m=>t(...d(m,0))))+.16,_=(m,v,M)=>{const[x,S]=d(m,v);return[x,p+M,S]},g=(m,v,M,x)=>[d(m-M,v-x),d(m+M,v-x),d(m+M,v+x),d(m-M,v+x)];for(const[m,v]of u.entries())if(m===0||m===1||m===4||m===5){a.shell(g(v,0,.47,1.18),p-.4,p+h,l),a.shell(g(v,0,.57,1.27),p+h-.045,p+h+.1,l);for(const x of[-1.03,1.03])a.shell(g(v,x,.37,.17),p+h,p+h+.95,l);a.shell(g(v,0,.42,1.23),p+h+.95,p+h+1.09,l)}else for(const x of[-.92,.92])a.shell(g(v,x,.2,.21),p-.4,p+h,l),a.shell(g(v,x,.27,.28),p+h-.06,p+h+.085,l);for(const m of[-.92,.92])for(let v=0;v<f.length;v++){const M=(u[v]+u[v+1])/2,x=(u[v+1]-u[v])/2,S=(b,w,y)=>_(M+(x+w)*Math.cos(b),m+y*.17,h+(f[v]+w)*Math.sin(b));for(let b=0;b<14;b++){const w=Math.PI*b/14,y=Math.PI*(b+1)/14;for(const E of[-1,1])a.face(l,S(w,-.19,E),S(y,-.19,E),S(y,.11,E),S(w,.11,E));a.face(c,S(w,-.19,-1),S(y,-.19,-1),S(y,-.19,1),S(w,-.19,1)),a.face(l,S(w,.11,-1),S(y,.11,-1),S(y,.11,1),S(w,.11,1))}}a.finish()}function cx(i,t){const s=t(64.17,13.11)+.16,o=me(i,"Скульптура «Белая шляпа»"),r=["#8b8777","#a39e8d","#a9a38f","#8d897b","#969383"],a=[[1.28,.77,-.12,.1],[1.39,.74,.35,.19],[1.12,.65,.75,.17],[.79,.57,1.12,.08],[.48,.38,1.56,-.17]].map(([p,_,g,m],v)=>Array.from({length:13},(M,x)=>{const S=x/13*bs,b=1+.13*Math.sin(x*3.3+v*.81);return[64.17+m+Math.cos(S)*p*b,s+g+.12*Math.cos(x*2.4+v),13.11+Math.sin(S)*_*b]}));for(let p=0;p<a.length-1;p++){const _=a[p],g=a[p+1];_.forEach((m,v)=>{const M=(v+1)%_.length;o.face(r[(v+p*3)%r.length],m,_[M],g[M]),o.face(r[(v+p*3+1)%r.length],m,g[M],g[v])})}o.face("#a29e8f",...a.at(-1));const l=(p,_,g)=>Array.from({length:32},(m,v)=>{const M=v/32*bs,x=Math.cos(M)*p,S=Math.sin(M)*p*.83,b=g?.038*Math.cos(2*M):.044*Math.cos(2*M);return[64.17-.13+x,s+1.56+_+S*.37+b,13.11+S]}),h=[[.75,0,!1],[.75,.035,!1],[.4,.12,!1],[.405,.155,!0],[.39,.22,!0],[.34,.43,!0],[.24,.49,!0],[.08,.46,!0]].map(p=>l(...p));for(let p=0;p<h.length-1;p++){const _=h[p+1],g=h[p];g.forEach((m,v)=>{const M=(v+1)%g.length;o.face(p===3?"#d8d7ce":"#f5f3e9",m,g[M],_[M],_[v])})}o.face("#f5f3e9",...h.at(-1));const f={Б:[[[.88,1],[0,1],[0,0],[.76,0],[.9,.22],[.72,.53],[0,.53]]],Е:[[[.88,1],[0,1],[0,0],[.9,0]],[[0,.5],[.75,.5]]],Л:[[[0,0],[.31,1],[.84,1],[.84,0]]],А:[[[0,0],[.45,1],[.9,0]],[[.2,.42],[.7,.42]]],Я:[[[.9,0],[.9,1],[.25,1],[0,.76],[.23,.54],[.9,.54]],[[.52,.54],[0,0]]],Ш:[[[0,1],[0,0],[.95,0],[.95,1]],[[.475,0],[.475,1]]],П:[[[0,0],[0,1],[.86,1],[.86,0]]]};[..."БЕЛАЯ ШЛЯПА"].forEach((p,_)=>{for(const g of f[p]??[]){const m=g.map(([v,M])=>{const x=(_+v-5.5)*.155;return[64.17+Math.sin(x)*1.17,s+.41+M*.175,13.11+Math.cos(x)*.88]});m.slice(1).forEach((v,M)=>o.beam(m[M],v,.032,"#f5f3e9"))}});const u=hr(64.17,13.11,2.45),d=(p,_)=>[p,t(p,_)+.17,_];u.forEach((p,_)=>o.face("#b4ac9c",d(64.17,13.11),d(...p),d(...u[(_+1)%u.length])));for(let p=0;p<46;p++){const _=p*2.39996,g=1.12+p%13/13*1.19,m=64.17+Math.cos(_)*g,v=13.11+Math.sin(_)*g,M=t(m,v)+.17;o.shell(hr(m,v,.09+p%4*.035,6),M-.01,M+.03+p%3*.025,r[p%r.length])}o.finish()}function lx(i,t){rx(i,t),cx(i,t),ax(i,t)}function hx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Re;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in o){const f=pu(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const p=pu(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function pu(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new On(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){const _=h.getComponent(u,p);a.setComponent(u+f,p,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const gc=Math.PI/4,ux="#e1d9bf",fx="#26313a",dx=[[37.2996896,44.8872772],[37.2995282,44.8874039],[37.2994588,44.8874602],[37.2994093,44.887514],[37.2990185,44.8878942],[37.2988335,44.8880063],[37.2982407,44.8885479]],px=[[37.2992911,44.8877628],[37.2988951,44.8881412]];function Js(i,t){const e=(i-.5)*gc;return[Math.sin(e)*t,Math.cos(e)*t]}function mu(i){const t=i*gc;return-.85*Math.sin(t)+.5*Math.cos(t)>0}function mx(i,{rings:t},e){const n=t[0],s=n.reduce((x,S)=>x+S[0],0)/n.length,o=n.reduce((x,S)=>x+S[1],0)/n.length,r=e(s,o),a=Math.min(...n.map(x=>e(...x)))-r-.3,c=n.reduce((x,[S,b])=>x+Math.hypot(S-s,b-o),0)/n.length*.74,h=new ee({color:ux,flatShading:!0}),f=new ee({color:fx,flatShading:!0}),u=new ee({color:"#b6b8ae"}),d=new ee({color:"#a9c2c8",transparent:!0,opacity:.56,depthWrite:!1}),p=new de,_=new Map([[h,[]],[f,[]]]);p.name="Анапский маяк",p.position.set(s,r,o),i.add(p);function g(x,S,b,w,y,E=8){const A=new re(new Cn(w,b,S-x,E),y);return A.position.y=(S+x)/2,A.rotation.y=-Math.PI/E,A.castShadow=y!==d,p.add(A),A}function m(x,S,b,w,y,E,A,L){const P=x*gc,C=Math.sin(P),D=Math.cos(P),I=c*Math.cos(gc/2)+A,k=new Pe(y,b,E);k.rotateY(P),k.translate(C*I+D*w,S,D*I-C*w),_.get(L).push(k)}g(a,3.15,c*1.13,c*1.13,h),g(3.15,3.55,c*1.16,c*1.16,h);const v=[[3.55,6.5,!0],[6.5,9.2,!1],[9.2,12,!0],[12,14.6,!1],[14.6,17.05,!0]];for(const[x,S,b]of v){const w=new Re,y=[[],[]];for(let A=0;A<8;A++){const[L,P]=Js(A,c),[C,D]=Js(A+1,c);if(y[Number(b&&mu(A))].push(L,x,P,C,x,D,C,S,D,L,x,P,C,S,D,L,S,P),x<14.6){const I=b&&mu(A)?f:h;for(const k of[-c*.2,c*.2])m(A,(x+S)/2,S-x,k,c*.095,.16,.03,I)}}w.setAttribute("position",new ne(y.flat(),3)),w.addGroup(0,y[0].length/3,0),y[1].length&&w.addGroup(y[0].length/3,y[1].length/3,1),w.computeVertexNormals();const E=new re(w,[h,f]);E.castShadow=!0,p.add(E)}g(12.2,12.39,c*1.05,c*1.05,h),g(13.4,13.54,c*1.04,c*1.04,h),g(17.05,17.65,c*1.07,c*1.07,h),g(17.65,17.9,c*1.12,c*1.12,h);for(let x=0;x<8;x++)for(const S of[-c*.22,0,c*.22])m(x,17.34,.24,S,.26,.07,c*.067,f);for(const[x,S]of _){p.add(new re(hx(S),x));for(const b of S)b.dispose()}g(17.9,18.11,c*.71,c*.71,h,12),g(18.11,20.05,c*.58,c*.58,d,12),g(20.05,20.83,c*.68,.24,h,12),g(20.83,21,.24,.12,h,12),g(18.48,19.43,.31,.31,new ee({color:"#a0433d"}),12);const M=[];for(let x=0;x<12;x++){const S=(x-.5)*Math.PI/6,b=Math.sin(S)*c*.58,w=Math.cos(S)*c*.58;M.push([[b,18.11,w],[b,20.05,w],.052])}for(let x=0;x<8;x++){const[S,b]=Js(x,c*1.01),[w,y]=Js(x+1,c*1.01);M.push([[S,17.9,b],[S,18.8,b],.042]);for(const C of[18.35,18.8])M.push([[S,C,b],[w,C,y],.037]);const[E,A]=Js(x,c*.88),[L,P]=Js(x+1,c*.88);M.push([[E,19.55,A],[L,19.55,P],.033]),M.push([[E,20.46,A],[L,20.46,P],.033]),M.push([[E,19.55,A],[E,20.46,A],.033])}md(p,M,u,"Ограждения фонаря")}function md(i,t,e,n){const s=new Pe(1,1,1),o=new yi(s,e,t.length);o.name=n;const r=new we,a=new F,l=new F,c=new F,h=new F(1,0,0);for(const[f,[u,d,p]]of t.entries())a.set(...u),l.set(...d),c.subVectors(l,a),r.position.copy(a).lerp(l,.5),r.scale.set(c.length(),p,p),r.quaternion.setFromUnitVectors(h,c.normalize()),r.updateMatrix(),o.setMatrixAt(f,r.matrix);i.add(o)}function gu(i,t,e,{height:n,color:s,spacing:o,width:r,name:a}){const l=[];for(let c=1;c<t.length;c++){const[h,f]=t[c-1],[u,d]=t[c],p=Math.ceil(Math.hypot(u-h,d-f)/2.4),_=(g,m)=>{const v=h+(u-h)*g,M=f+(d-f)*g;return[v,e(v,M)+m,M]};for(let g=0;g<p;g++){const m=g/p,v=(g+1)/p;l.push([_(m,.05),_(m,n+.05),r*2.8]);for(const x of[.14,n])l.push([_(m,x),_(v,x),r*1.7]);const M=Math.ceil(Math.hypot(u-h,d-f)/(p*o));for(let x=1;x<M;x++){const S=(g+x/M)/p;l.push([_(S,.14),_(S,n),r])}}c===t.length-1&&l.push([_(1,.05),_(1,n+.05),r*2.8])}md(i,l,new ee({color:s}),a)}function gx(i,{origin:[t,e],scale:n},s){const o=r=>r.map(([a,l])=>[(a-t)*n[0],(e-l)*n[1]]);gu(i,o(dx),s,{height:1.06,color:"#9a9c95",spacing:.16,width:.038,name:"Ограда Верхней Набережной"}),gu(i,o(px),s,{height:1.76,color:"#363f40",spacing:.16,width:.027,name:"Ограда маяка"})}const _x="125862202",xx="977564342",Dl=12,ma=3;function ga(i,t,e,n){const s=[];for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=e*(n(r)-t),c=e*(n(a)-t);if(l>=0&&s.push(r),l<0!=c<0){const h=l/(l-c);s.push([le.lerp(r[0],a[0],h),le.lerp(r[1],a[1],h)])}}return s}function yn(i,t,e,n,s){const o=new kc(t.map(([a,l])=>new St(a,-l))),r=new re(new Lr(o,{depth:n,bevelEnabled:!1}),s);r.rotation.x=-Math.PI/2,r.position.y=e,r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function vx(i,t,e){const n=[],s=Math.sign(i.reduce((o,[r,a],l)=>{const[c,h]=i[(l+1)%i.length];return o+r*h-c*a},0));for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=a[0]-r[0],c=a[1]-r[1],h=Math.hypot(l,c);if(h<4||Math.abs(e(r)-e(a))<h*.8)continue;const f=Math.floor(h/3.3);for(let u=0;u<f;u++){const d=(u+.5)/f;n.push([r[0]+l*d+s*c/h*.045,t,r[1]+c*d-s*l/h*.045,-Math.atan2(c,l)])}}return n}function ws(i,t,e,n,s){const o=new yi(new Pe(n,s,.12),e,t.length),r=new we;t.forEach(([a,l,c,h],f)=>{r.position.set(a,l,c),r.rotation.y=h,r.updateMatrix(),o.setMatrixAt(f,r.matrix)}),o.receiveShadow=!0,i.add(o)}function Mx(i,t){const e=new de;e.name="Малая бухта, комплекс на берегу";const n=new ee({color:"#c5b08c"}),s=new ee({color:"#eeeae0"}),o=new ee({color:"#b7b5a9"}),r=new ee({color:"#617964"}),a=new ee({color:"#5f8596"}),l=new ee({color:"#5799b9"}),c=4.4;yn(e,t,1.8,c-1.8,n),yn(e,t,c,3.05,n),yn(e,t,c+3.05,3.15,s),yn(e,t,c+6.2,3.4,s),yn(e,t,c+9.6,.35,o);const h=t.map((S,b)=>{const w=t[(b+1)%t.length];return{start:S,end:w,length:Math.hypot(w[0]-S[0],w[1]-S[1])}}).reduce((S,b)=>b.length>S.length?b:S),{start:f,end:u,length:d}=h,p=u[0]-f[0],_=u[1]-f[1],g=-Math.atan2(_,p),m=Math.sign(_),v=-Math.abs(_)/d*.04,M=p*m/d*.04;function x(S,b){return Array.from({length:S},(w,y)=>{const E=(y+.5)/S;return[f[0]+p*E+v,b,f[1]+_*E+M,g]})}ws(e,x(18,c+1.5),r,4.35,2.35),ws(e,x(38,c+4.75),a,1.75,1.35),ws(e,x(30,c+7.9),l,2.55,2.45),i.add(e)}function Sx(i,t,e){if(t.id===xx)return Mx(i,t.rings[0]),!0;if(t.id!==_x)return!1;const n=t.rings[0],s=le.degToRad(112.9),o=Math.sin(s),r=-Math.cos(s),a=([w,y])=>w*o+y*r,l=n.map(a),c=Math.min(...l),h=w=>a(w)-c,f=Math.max(...l)-c,u=f*.54,d=n.map(w=>e(...w)),p=Math.max(...d),_=Math.min(...d)-.3,g=new de;g.name="Малая бухта, корпус «Парусник»";const m=new ee({color:"#f5f3e8"}),v=new ee({color:"#deded5"}),M=new ee({color:"#526f7d"}),x=new ee({color:"#9c9e99"});yn(g,n,_,p-_,v);const S=[];for(let w=0;w<Dl;w++){const y=w*2.45,E=w<9?f-w*3.3:u,A=ga(ga(n,y,1,h),E,-1,h),L=p+w*ma,P=A.reduce(([D,I],k)=>[D+k[0]/A.length,I+k[1]/A.length],[0,0]),C=A.map(([D,I])=>[le.lerp(D,P[0],.04),le.lerp(I,P[1],.04)]);yn(g,A,L,.35,m),yn(g,C,L+.35,ma-.35,v),S.push(...vx(C,L+1.8,h)),(w===8||w===Dl-1)&&yn(g,C,L+ma,.18,x)}const b=ga(ga(n,u-3.8,1,h),u+.15,-1,h);return yn(g,b,p,Dl*ma+1.9,m),ws(g,S,M,1.65,1.15),i.add(g),!0}function yx(i,t,e){if(t.id!=="142489068")return!1;const n=t.rings[0],s=n.map((ct,z)=>{const $=n[(z+1)%n.length];return{start:ct,end:$,length:Math.hypot($[0]-ct[0],$[1]-ct[1])}}),[o]=s.sort((ct,z)=>z.length-ct.length).slice(0,2).sort((ct,z)=>ct.start[1]+ct.end[1]-(z.start[1]+z.end[1])),[r,a]=[o.start,o.end].sort((ct,z)=>ct[0]-z[0]),l=n.filter(ct=>ct!==r&&ct!==a).sort((ct,z)=>ct[0]-z[0])[0],[c,h]=r,f=Math.hypot(a[0]-c,a[1]-h),u=Math.hypot(l[0]-c,l[1]-h),d=(a[0]-c)/f,p=(a[1]-h)/f,_=(l[0]-c)/u,g=(l[1]-h)/u,m=(ct,z)=>[c+d*ct+_*z,h+p*ct+g*z],v=(ct,z,$,pt)=>[m(ct,$),m(z,$),m(z,pt),m(ct,pt)],M=new de;M.name="Анапский морской вокзал";const x=new ee({color:"#e5e4dc"}),S=new ee({color:"#b7a18c"}),b=new ee({color:"#a4aaa4"}),w=new ee({color:"#496877"}),y=new ee({color:"#8f4b3a"}),E=n.map(ct=>e(...ct)),A=Math.max(...E),L=Math.min(...E)-.25;yn(M,n,L,A+2.9-L,S),yn(M,n,A+2.9,3.6,x),yn(M,n,A+6.5,.35,b);const P=7.8,C=f-.85,D=C-P,I=u*.34,k=I+P,G=v(D,C,I,k),X=A+15.2;yn(M,G,A+6.8,X-A-6.8,x),yn(M,G,X,.22,b);const V=-Math.atan2(p,d),J=-Math.atan2(g,_),it=(ct,z,$,pt)=>Array.from({length:ct},(bt,H)=>{const[ht,dt]=pt((H+.5)/ct);return[ht,z,dt,$]});ws(M,it(11,A+4.75,V,ct=>m(1.3+ct*(f-2.6),-.04)),w,2.22,2.55),ws(M,it(8,A+1.48,V,ct=>m(1.5+ct*(f-3),-.04)),w,1.65,1.34);const vt=[];for(const ct of[8.35,10.95,13.55]){const z=A+ct;vt.push(...it(3,z,V,$=>m(D+$*P,I-.04))),vt.push(...it(3,z,J,$=>m(C+.04,I+$*P)))}ws(M,vt,w,1.37,1.43);const[j,Mt]=m(C-2.8,I+2.4),lt=new re(new Cn(.055,.105,3.2,6),y);return lt.position.set(j,X+1.82,Mt),M.add(lt),i.add(M),!0}const bx=[[65,151],[133,120],[143,98],[312,94],[327,41],[410,46],[451,73],[504,67],[540,44],[733,53],[724,326],[1170,410],[1591,455],[1591,738],[40,687]],wx=[{points:[[94,145],[93,228],[89,353]],width:.65,height:.38},{points:[[142,122],[197,119],[277,117],[320,120],[331,188]],width:.65,height:.32},{points:[[197,119],[201,187],[137,192]],width:.73,height:.31},{points:[[273,119],[279,182],[206,187]],width:.7,height:.33},{points:[[287,122],[291,181],[328,178]],width:.66,height:.3},{points:[[334,91],[338,130],[345,187],[405,175],[403,130],[338,136]],width:.68,height:.35},{points:[[447,84],[486,87],[492,170],[445,173]],width:.69,height:.31},{points:[[500,85],[530,86],[534,161],[500,166]],width:.63,height:.27},{points:[[540,62],[535,107],[537,170]],width:.68,height:.38},{points:[[137,228],[204,222],[275,225],[351,227],[360,279],[300,282],[228,289],[140,279],[137,228]],width:.68,height:.27},{points:[[218,229],[214,277],[230,291],[224,354],[137,344]],width:.69,height:.31},{points:[[181,231],[178,277],[187,291],[181,315],[139,313]],width:.56,height:.25},{points:[[191,314],[187,348]],width:.57,height:.24},{points:[[307,229],[310,257],[278,261]],width:.57,height:.23},{points:[[319,231],[319,276],[352,273]],width:.64,height:.29},{points:[[360,285],[367,348],[366,387]],width:.65,height:.4},{points:[[363,278],[426,272],[427,218]],width:.73,height:.32},{points:[[413,209],[500,205],[570,200],[646,197]],width:.68,height:.31},{points:[[429,270],[504,270],[502,206]],width:.72,height:.29},{points:[[506,271],[510,270]],width:.72,height:.35},{points:[[528,268],[567,262],[627,258]],width:.72,height:.35},{points:[[645,256],[647,203]],width:.72,height:.35},{points:[[560,207],[567,261]],width:.61,height:.28},{points:[[678,178],[681,346],[634,347]],width:.62,height:.41},{points:[[468,349],[467,319],[474,305],[489,302],[602,300],[618,307],[623,330]],width:.66,height:.3},{points:[[382,355],[417,353],[414,398],[388,397]],width:.66,height:.37},{points:[[416,401],[526,426],[531,407],[539,369],[569,375]],width:.75,height:.37},{points:[[569,376],[568,425],[539,422]],width:.68,height:.36},{points:[[578,380],[578,423],[616,430],[620,380]],width:.68,height:.37},{points:[[630,379],[629,433],[682,441],[679,378]],width:.72,height:.36},{points:[[98,445],[190,455],[177,553],[91,539]],width:.81,height:.38},{points:[[209,457],[316,474],[305,552],[202,537],[209,457]],width:.85,height:.42},{points:[[245,474],[237,509],[226,539]],width:.75,height:.4},{points:[[386,490],[429,501],[515,513],[566,520],[622,532]],width:.73,height:.29},{points:[[430,503],[430,551],[389,544]],width:.74,height:.36},{points:[[516,515],[515,559],[431,549]],width:.78,height:.33},{points:[[564,524],[557,587],[515,579],[517,557]],width:.76,height:.38},{points:[[622,531],[615,590],[566,583]],width:.76,height:.39},{points:[[653,536],[708,549],[699,609]],width:.74,height:.34},{points:[[769,385],[806,387],[823,390],[866,388],[875,384]],width:.52,height:.48},{points:[[768,384],[768,425],[766,447]],width:.5,height:.52},{points:[[747,444],[769,449],[813,457],[870,467],[913,473],[953,478],[1006,483]],width:.62,height:.6},{points:[[818,395],[817,426],[814,456]],width:.52,height:.51},{points:[[874,379],[874,415]],width:.47,height:.42},{points:[[870,451],[870,466]],width:.46,height:.46},{points:[[918,390],[917,419]],width:.5,height:.49},{points:[[914,437],[912,473]],width:.55,height:.54},{points:[[959,393],[961,413],[957,428]],width:.49,height:.46},{points:[[955,442],[952,478]],width:.55,height:.54},{points:[[961,416],[994,421],[1016,426]],width:.39,height:.36},{points:[[1016,427],[1012,444],[1007,482]],width:.54,height:.56},{points:[[1070,501],[1079,447],[1085,435],[1104,438]],width:.61,height:.61},{points:[[1138,441],[1169,449]],width:.44,height:.41},{points:[[1170,435],[1169,471],[1168,505],[1111,502],[1071,500]],width:.65,height:.62},{points:[[1122,459],[1114,487],[1111,502]],width:.51,height:.48},{points:[[765,620],[770,577],[844,591],[840,619]],width:.53,height:.53},{points:[[900,645],[903,598],[948,608],[996,618],[1024,616]],width:.55,height:.49},{points:[[950,608],[945,653],[901,647]],width:.52,height:.54},{points:[[999,619],[990,664],[983,688]],width:.52,height:.55},{points:[[944,654],[939,690]],width:.49,height:.44},{points:[[1049,621],[1094,620],[1133,627]],width:.44,height:.38},{points:[[1132,628],[1127,665]],width:.44,height:.42},{points:[[1230,470],[1293,471],[1292,517],[1290,550],[1234,551],[1230,470]],width:.7,height:.87},{points:[[1233,519],[1292,518]],width:.66,height:.72},{points:[[1352,482],[1369,478],[1404,479],[1418,480],[1417,492],[1385,493],[1383,509]],width:.57,height:.48},{points:[[1338,691],[1339,668],[1397,669]],width:.59,height:.55},{points:[[1336,722],[1398,721],[1454,722],[1512,724],[1575,726],[1575,652],[1512,653],[1455,654],[1400,652],[1398,721]],width:.72,height:.69},{points:[[1455,654],[1454,722]],width:.67,height:.62},{points:[[1512,653],[1512,724]],width:.65,height:.6}],Ex=[{polygon:[[144,129],[193,124],[198,177],[142,181]],depth:.78},{polygon:[[205,126],[269,124],[274,169],[210,177]],depth:.74},{polygon:[[287,128],[317,127],[322,171],[290,176]],depth:.7},{polygon:[[346,136],[398,131],[402,169],[347,177]],depth:.83},{polygon:[[452,90],[483,89],[487,158],[450,166]],depth:.78},{polygon:[[502,97],[526,99],[527,153],[500,159]],depth:.64},{polygon:[[146,235],[214,231],[211,274],[143,269]],depth:.88},{polygon:[[279,234],[304,234],[308,253],[278,257]],depth:.57},{polygon:[[319,237],[345,234],[348,269],[320,269]],depth:.75},{polygon:[[145,287],[183,288],[180,311],[141,310]],depth:.62},{polygon:[[142,319],[181,319],[181,342],[137,340]],depth:.58},{polygon:[[190,292],[227,298],[222,350],[189,345]],depth:.77},{polygon:[[505,209],[558,205],[566,260],[526,265],[528,298],[514,298],[512,267]],depth:1.05},{polygon:[[566,205],[641,199],[644,252],[642,252],[642,283],[630,283],[629,254],[571,260]],depth:1.15},{polygon:[[389,358],[414,354],[411,396],[388,393]],depth:.64},{polygon:[[541,370],[567,377],[565,423],[535,420]],depth:.8},{polygon:[[580,378],[617,379],[613,425],[579,422]],depth:.82},{polygon:[[633,378],[676,379],[680,435],[630,426]],depth:1},{polygon:[[98,450],[183,462],[173,541],[92,533]],depth:.92},{polygon:[[213,463],[244,468],[227,535],[207,535]],depth:.9},{polygon:[[248,473],[311,478],[304,549],[236,539]],depth:.91},{polygon:[[388,494],[427,502],[427,541],[389,537]],depth:.74},{polygon:[[434,506],[514,516],[510,552],[433,545]],depth:.87},{polygon:[[521,518],[562,526],[556,576],[516,572]],depth:.94},{polygon:[[566,527],[619,535],[612,581],[561,575]],depth:.99},{polygon:[[656,541],[704,553],[693,603],[646,592]],depth:.83},{polygon:[[773,582],[839,595],[836,620],[771,612]],depth:.84},{polygon:[[906,602],[946,611],[943,645],[903,637]],depth:.64},{polygon:[[952,612],[994,621],[986,665],[951,654]],depth:.58},{polygon:[[1235,475],[1288,476],[1288,515],[1237,516]],depth:.72},{polygon:[[1238,524],[1287,523],[1286,546],[1239,547]],depth:.64},{polygon:[[1404,657],[1450,658],[1449,718],[1403,717]],depth:.54},{polygon:[[1459,658],[1507,657],[1507,719],[1459,717]],depth:.59},{polygon:[[1517,658],[1570,657],[1570,721],[1517,719]],depth:.55}],Tx=[{point:[256,273],radius:.7,depth:.51},{point:[412,299],radius:.53,depth:.46},{point:[496,316],radius:.58,depth:.48},{point:[456,365],radius:.73,depth:.58},{point:[516,422],radius:.67,depth:.46},{point:[644,329],radius:.7,depth:.55},{point:[592,393],radius:.56,depth:.37},{point:[553,441],radius:.63,depth:.44},{point:[377,498],radius:.56,depth:.44},{point:[755,405],radius:.74,depth:.75},{point:[962,706],radius:.7,depth:.75},{point:[1260,494],radius:.5,depth:.65}],Ax=[{name:"Широкая улица",polygon:[[96,365],[162,362],[217,365],[309,385],[362,398],[414,412],[418,485],[386,486],[308,470],[209,456],[94,443]]},{name:"Широкая улица",polygon:[[1194,609],[1258,608],[1344,612],[1438,614],[1516,615],[1574,612],[1573,647],[1510,651],[1437,652],[1350,651],[1258,648],[1200,647]]},{name:"Северная улица",polygon:[[119,193],[207,191],[287,188],[344,184],[433,176],[527,171],[671,174],[671,194],[524,201],[428,211],[347,219],[273,224],[197,227],[118,228]]},{name:"Поперечная улица",polygon:[[99,159],[125,164],[123,215],[124,280],[121,335],[128,366],[111,388],[93,367],[97,311],[96,250]]}],Rx=[{from:[521,298],to:[519,264],width:1.15,steps:7},{from:[636,283],to:[635,252],width:1,steps:7}],Li={outline:bx,walls:wx,cellars:Ex,wells:Tx,streets:Ax,stairs:Rx},_u="652417590";function Vn([i,t]){return[.0863102257*i-214318e-9*t-361.5408919,214318e-9*i+.0863102257*t+21.5871871]}const Ss=Li.outline.map(Vn);function to([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function gd(i,t,e){const n=i(-310,65)-1.41-.006*(t+355)+.008*(e-60);return Math.min(n,i(t,e)-.43)}const Qi=["#b7a58b","#c1b199","#ad9e88","#a9977e","#c8baa0","#a4947b"],xu=["#c9b998","#b9aa8e","#c2b497","#b2a389","#d0bfa4"],Cx=new Zt("#a09472"),Px=new Zt("#97976b"),Lx=new Zt("#94846b"),Dx=new Zt("#62584a"),Ix=new Zt("#a99a7e");function Jn(i){const t=Math.sin(i*127.1+3.83)*43758.5453;return t-Math.floor(t)}function $l(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=(i[1]-t[1])*e/(2*n),o=(t[0]-i[0])*e/(2*n);return[[i[0]+s,i[1]+o],[t[0]+s,t[1]+o],[t[0]-s,t[1]-o],[i[0]-s,i[1]-o]]}const Tn=([i,t],e)=>[i,e(i,t),t];function _d(i,t,e,n,s,o){i.face(o,Tn(t,n),Tn(e,n),Tn(e,s),Tn(t,s))}function Xo(i,t,e,n,s,o=.65){for(let r=0;r<t.length;r++){const a=t[r],l=t[(r+1)%t.length],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/o);for(let h=0;h<c;h++){const f=_t(a,l,h/c),u=_t(a,l,(h+1)/c);_d(i,f,u,e,n,s(h+r*97))}}}function Ux(i,t,e,n,s,o,r,a){const l=Math.hypot(e[0]-t[0],e[1]-t[1]);if(l<.12)return;const c=(d,p)=>o(d,p)-r-.03,h=(d,p)=>o(d,p)+s,f=$l(t,e,n*.93);Xo(i,f,c,h,()=>"#897862",1.2),i.face("#8c7b66",...f.map(d=>Tn(d,(p,_)=>h(p,_)-.028)));const u=Math.max(1,Math.round((s+r)/.31));for(let d=0;d<u;d++){const p=.66+Jn(a+d)*.24;for(let _=-(d%2)*p*.52,g=0;_<l;_+=p,g++){const m=(Math.max(0,_)+.018)/l,v=(Math.min(_+p,l)-.018)/l;if(v<=m)continue;const M=a*101+d*31+g*7,x=$l(_t(t,e,m),_t(t,e,v),n*(.965+Jn(M)*.09)),S=x.map(A=>_t(A,_t(x[0],x[2],.5),.06)),b=(s+r)/u,w=(A,L)=>o(A,L)-r+b*d+.012,y=(A,L)=>o(A,L)-r+b*(d+1)-.014+Jn(M+1)*.09,E=Qi[Math.floor(Jn(M+2)*Qi.length)];for(let A=0;A<4;A++){const L=(A+1)%4;i.face(E,Tn(x[A],w),Tn(x[L],w),Tn(S[L],y),Tn(S[A],y))}i.face(E,...S.map(A=>Tn(A,y)))}}}function Nx(i,t,e,n,s){const o=t.map(([m])=>m),r=t.map(([,m])=>m),a=.61,l=.065,c=(m,v)=>[m*Math.cos(l)-v*Math.sin(l),m*Math.sin(l)+v*Math.cos(l)],[h,f]=t[0],u=(m,v)=>c(m,v).map((M,x)=>M+(x===0?h:f)),d=Math.floor((Math.min(...o)-h-3)/a),p=Math.ceil((Math.max(...o)-h+3)/a),_=Math.floor((Math.min(...r)-f-10)/a),g=Math.ceil((Math.max(...r)-f+10)/a);for(let m=_;m<g;m++)for(let v=d;v<p;v++){const M=n*4241+m*397+v;if(Jn(M+9)>s)continue;const x=(v+m%2*.5)*a,S=m*a,b=[u(x+.03+Jn(M)*.07,S+.033),u(x+.57,S+.027+Jn(M+2)*.07),u(x+.572-Jn(M+3)*.08,S+.574),u(x+.03,S+.572-Jn(M+4)*.07)];if(!b.every(y=>to(y,t)))continue;const w=(y,E)=>e(y,E)+.042+Jn(M+6)*.028;i.face(xu[Math.floor(Jn(M+7)*xu.length)],...b.map(y=>Tn(y,w)))}}function Fx(i,t,e){const n=me(i,"Раскоп Горгиппии · кладка и древние улицы",{surface:"stone"}),s=(c,h)=>gd(t,c,h),o=Li.cellars.map(({polygon:c,depth:h})=>({ring:c.map(Vn),depth:h,holes:[]})),r=Li.wells.map(({point:c,radius:h,depth:f})=>{const[u,d]=Vn(c),p=Array.from({length:12},(v,M)=>{const x=M*Math.PI/6;return[u+Math.cos(x)*h,d+Math.sin(x)*h]}),_=o.find(v=>p.every(M=>to(M,v.ring))),g=(v,M)=>s(v,M)-(_?.depth??0),m=_||p.every(v=>to(v,Ss))&&!o.some(v=>p.some(M=>to(M,v.ring))||v.ring.some(M=>to(M,p)));return _&&_.holes.push(p),{ring:p,rim:g,depth:f,cut:m,cellar:_,center:[u,d]}}),a=[...o.map(c=>c.ring),...r.filter(c=>c.cut&&!c.cellar).map(c=>c.ring)],l=new Zt;e([Ss,...a],s,(c,h,f)=>l.copy(Cx).lerp(Px,le.clamp(.51+.32*Math.sin(c*.15+f*.19)+.19*Math.sin(c*.43-f*.24),0,1))),Xo(n,Ss,s,(c,h)=>t(c,h)+.012,()=>"#a18f75");for(const{ring:c,depth:h,holes:f}of o){const u=(d,p)=>s(d,p)-h;e([c,...f],u,Lx),Xo(n,c,u,s,()=>"#89785f")}for(const{ring:c,rim:h,depth:f,cut:u,center:d}of r){const p=(g,m)=>h(g,m)-(u?f:-.028);u?e([c],p,Dx):n.face("#5f5342",...c.map(g=>Tn(g,p))),Xo(n,c,p,(g,m)=>h(g,m)+.18,()=>"#80715e",2);const _=c.map(g=>_t(d,g,1.35));for(let g=0;g<c.length;g++){const m=(g+1)%c.length,v=(M,x)=>h(M,x)+.16+g%3*.021;_d(n,_[g],_[m],h,v,Qi[g%Qi.length]),n.face(Qi[g%Qi.length],...[c[g],_[g],_[m],c[m]].map(M=>Tn(M,v)))}}for(const[c,{polygon:h,density:f}]of Li.streets.entries()){const u=h.map(Vn);e([u],(d,p)=>s(d,p)+.025,Ix),Nx(n,u,s,c,f??.88)}for(const[c,{points:h,width:f,height:u}]of Li.walls.entries()){const d=h.map(Vn);for(let p=1;p<d.length;p++){const _=d[p-1],g=d[p],m=_t(_,g,.5),v=o.reduce((M,{ring:x,depth:S})=>Math.max(M,x.some((b,w)=>{const y=x[(w+1)%x.length],E=y[0]-b[0],A=y[1]-b[1],L=le.clamp(((m[0]-b[0])*E+(m[1]-b[1])*A)/(E*E+A*A),0,1);return Math.hypot(m[0]-b[0]-L*E,m[1]-b[1]-L*A)<f*.63})?S:0),0);Ux(n,_,g,f,u,s,v,c*41+p)}}for(const{from:c,to:h,width:f,steps:u}of Li.stairs){const d=Vn(c),p=Vn(h),_=o.find(g=>to(p,g.ring))?.depth??.85;for(let g=0;g<u;g++){const m=$l(_t(d,p,g/u),_t(d,p,(g+1)/u),f),v=(x,S)=>s(x,S)-_,M=(x,S)=>v(x,S)+_*(1-g/u);n.face(Qi[g%Qi.length],...m.map(x=>Tn(x,M))),Xo(n,m,v,M,()=>"#9a8a71",2)}}n.finish()}const ji=i=>i.map(Vn),Ox=[[126,399],[220,407],[350,432],[460,455],[536,471],[610,478],[712,485],[779,478],[865,499],[955,516],[1060,538],[1168,556]],vu=[[748,295],[742,323],[729,352],[716,405],[712,462],[710,481]],Mu=[0,0,.16,.67,1,1],Bx={position:Vn([707,480]),look:Vn([405,447]),pitch:-.19},Ni=[[-384.79,10.65],[-282.12,15.99],[-217.83,18.81],[-218.47,61.07],[-219.18,90.59],[-393.18,81.88],[-384.79,10.65]],Fi=Math.atan2(2.82,64.29);function xd(i){const[t,e]=Ni[1];return i(t+1.44*Math.sin(Fi),e-1.44*Math.cos(Fi))}function _c([i,t]){return i===-282.12&&t===15.99?2.62:i===-218.47&&t===61.07?1.45:0}const zx=[{name:"Дорожка у лапидария",points:[[-332,24],[-322,25],[-312,26],[-303,27.3],[-295,28.1]],widths:[2.45,2.7,2.7,2.6,2.6],surface:"paving",railSide:1},{name:"Подход от входной арки",points:[[-282.12,14],[-282.12,18],[-283.15,21.1],[-288.4,25.8],[-295,28.1]],widths:[2.5,2.5,2.7,2.6,2.6],surface:"paving"},{name:"Дорожка от площадки музея",points:[[-295,28.1],[-294.5,33.9],[-295.2,40.9],Vn(vu[0])],widths:[2.6,2.8,2.9,2.6],surface:"paving"},{name:"Дорожка вдоль южного борта",points:[...ji([[65,710],[475,724],[1030,743],[1560,759]]),[-221.6,87.8],[-221.1,63.1]],widths:[1.5,1.65,1.75,1.7,1.65,1.6],surface:"paving",railSide:-1},{name:"Подход к восточной калитке",points:[[-221.1,63.1],[-220.9,61.07],[-216.4,61.07]],widths:[1.6,1.6,1.55],surface:"paving"},{name:"Спуск к раскопу",points:ji(vu),widths:[2.6,2.5,1.35,1.25,1.25,1.7],surface:"ramp",rails:[2,3]},{name:"Проход между подвалами",points:ji(Ox),widths:[3.8,4,4.1,3.9,3.8,3.4,3.5,4.1,4.3,4.2,4.2,3.5],surface:"earth"},{name:"Выход с западных лестниц",points:ji([[129,368],[128,386],[126,399]]),widths:[1.5,1.8,2],surface:"earth"},...[368,401].flatMap(i=>[{name:"Западная площадка",points:ji([[43,i],[90,i]]),widths:[1.5,1.43],surface:"landing"},{name:"Западная лестница",points:ji([[90,i],[129,i]]),widths:[1.43,1.43],surface:"steps"}])],{clamp:kx,lerp:_a}=le,Gx=new Zt("#c7bda5"),Su=new Zt("#c1b9a6"),Hx=new Zt("#a59b76"),xa="#aa987f",Il="#52534c",zo=9;function Tr(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=Math.hypot(e,n);return{a:i,b:t,dx:e,dz:n,length:s,nx:-n/s,nz:e/s}}function yu(i,t){return i.points.map(([e,n],s)=>{const o=i.edges[Math.max(0,s-1)],r=i.edges[Math.min(i.edges.length-1,s)],a=Math.hypot(o.nx+r.nx,o.nz+r.nz),l=(o.nx+r.nx)/a,c=(o.nz+r.nz)/a,h=t*i.widths[s]/(2*Math.max(.66,l*r.nx+c*r.nz));return[e+l*h,n+c*h]})}function bu(i,t,e){return i.rails?.includes(t)||i.railSide===e}function qo(i,t,{a:e,dx:n,dz:s,length:o}){const r=((i-e[0])*n+(t-e[1])*s)/(o*o),a=kx(r,0,1);return{raw:r,t:a,distance:Math.hypot(i-e[0]-n*a,t-e[1]-s*a)}}function Vx(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}const Wx=Ni.slice(1).map((i,t)=>{const e=Ni[t],{length:n}=Tr(e,i);return Tr(_t(e,i,_c(e)/n),_t(e,i,1-_c(i)/n))}),Xx=Li.cellars.map(({polygon:i})=>ji(i)),qx=Li.walls.flatMap(({points:i,width:t})=>{const e=ji(i);return e.slice(1).map((n,s)=>({...Tr(e[s],n),width:t}))}),Yx=Li.wells.map(({point:i,radius:t})=>({point:Vn(i),radius:t}));function Zx(i,t){return Yx.some(({point:[e,n],radius:s})=>Math.hypot(i-e,t-n)<s*1.35+.18)||qx.some(e=>qo(i,t,e).distance<e.width/2+.18)||Xx.some(e=>Vx(i,t,e))}function $x(i,t,e){const[n,s]=Ni[1],o=(t-n)*Math.cos(Fi)+(e-s)*Math.sin(Fi),r=(e-s)*Math.cos(Fi)-(t-n)*Math.sin(Fi);if(Math.abs(o)>2.22||r<-1.44||r>.46)return;const a=r<-1.02?.135:r<-.6?.27:.405;return xd(i)+a}function Kx(i){const t=(f,u)=>gd(i,f,u),e=zx.map(f=>({...f,edges:f.points.slice(1).map((u,d)=>Tr(f.points[d],u))})).map(f=>({...f,left:yu(f,-1),right:yu(f,1)})),n=e.filter(f=>f.surface==="earth"),s=e.filter(f=>f.surface==="paving"),o=e.filter(f=>["steps","landing","ramp"].includes(f.surface)),r=e.flatMap(f=>[[-1,f.left],[1,f.right]].flatMap(([u,d])=>d.slice(1).flatMap((p,_)=>bu(f,_,u)?[Tr(d[_],p)]:[])));function a(f,u,d,p,_){if(f==="earth")return t(p,_)+.055;if(f==="paving"||f==="landing")return i(p,_)+.054;const g=t(p,_)+.061,m=i(p,_)+.054;return f==="steps"?_a(m,g,Math.min(1,Math.floor(d*zo)/(zo-1))):_a(m,g,_a(Mu[u],Mu[u+1],d))}function l(f,u,d,p=0){let _;return f.edges.forEach((g,m)=>{const{raw:v,t:M,distance:x}=qo(u,d,g);(f.surface==="steps"||f.surface==="landing")&&(v<-1e-5||v>1.00001)||x>_a(f.widths[m],f.widths[m+1],M)/2-p||x>=(_?.distance??1/0)||(_={distance:x,height:a(f.surface,m,M,u,d)})}),_?.height}function c(f,u,d){if(f<-397||f>-211||u<9||u>92)return;if(Wx.some(g=>qo(f,u,g).distance<.24)||r.some(g=>qo(f,u,g).distance<.15))return null;for(const g of o){const m=l(g,f,u,.12);if(m!==void 0)return m}if(d)return n.some(m=>l(m,f,u,.16)!==void 0)&&!Zx(f,u)?t(f,u)+.055:null;const p=$x(i,f,u);return p!==void 0?p:s.some(g=>l(g,f,u)!==void 0)?i(f,u)+.054:void 0}function h(f,u){const d=me(f,"Горгиппия · дорожки и ограждения для посетителей");for(const p of e){const{left:_,right:g}=p;for(const[m,v]of p.edges.entries()){if(p.surface==="earth"&&m<3)continue;const M=[_[m],_[m+1],g[m+1],g[m]],x=(S,b)=>a(p.surface,m,qo(S,b,v).t,S,b);if(p.surface==="steps"){const S=(b,w)=>_t(b[m],b[m+1],w);for(let b=0;b<zo;b++){const w=b/zo,y=(b+1)/zo,E=S(_,w),A=S(g,w),L=S(_,y),P=S(g,y),C=(G,X)=>a("steps",m,(w+y)/2,G,X),D=(G,X)=>a("steps",m,Math.max(0,w-.001),G,X);u([[E,L,P,A]],C,Su);const I=([G,X],V)=>[G,V(G,X),X];b&&d.face(xa,I(E,D),I(A,D),I(A,C),I(E,C));const k=(G,X)=>t(G,X)-.02;d.face(xa,I(E,C),I(L,C),I(L,k),I(E,k)),d.face(xa,I(A,C),I(P,C),I(P,k),I(A,k))}}else p.surface==="earth"?u([M],(S,b)=>t(S,b)+.012,Hx):u([M],x,p.surface==="ramp"?Su:Gx);for(const[S,b]of[[-1,_],[1,g]]){const w=b[m],y=b[m+1],E=Math.hypot(y[0]-w[0],y[1]-w[1]),A=p.surface==="ramp"||p.surface==="landing",L=bu(p,m,S);if(!L&&!A)continue;const P=Math.max(1,Math.ceil(E/(A?.62:1.75))),C=(D,I)=>{const[k,G]=_t(w,y,D);return[k,x(k,G)+I,G]};for(let D=0;D<P;D++){const I=D/P,k=(D+1)/P;if(A){const G=([X,V,J])=>[X,Math.min(V-.07,t(X,J)-.025),J];d.face(xa,C(I,0),C(k,0),G(C(k,0)),G(C(I,0)))}if(L){for(const G of[.38,.83])d.beam(C(I,G),C(k,G),.027,Il);(!A||D%3===0)&&d.beam(C(I,0),C(I,.85),.047,Il),D===P-1&&d.beam(C(k,0),C(k,.85),.047,Il)}}}}}d.finish()}return{walkHeight:c,render:h}}const xc="#dfd7c1",hn="#f0eee6",Jx="#526e7c",vs="#343d3d";function Ca([i,t],e){const n=e/2;return[[i-n,t-n],[i+n,t-n],[i+n,t+n],[i-n,t+n]]}function Qx([i,t],[e,n]){const s=Math.hypot(e-i,n-t),o=(e-i)/s,r=(n-t)/s;return(a,l)=>[i+o*a+r*l,t+r*a-o*l]}function jx(i,t,e){const n=Qx(t[0],t[1]),o=(e.lowerWaterfront??e)(...n(9,27))+.65,r=Math.min(...t.map(lt=>e(...lt)))-.2,a=Ue(t),l="#7295bf",c="#415f88",h="#636b71",f="#b8bdba",u=me(i,"Пароходъ",{surfaces:{metal:[l,f,c],paving:[h],stone:[xc],glass:["#40484a","#4b5256"]}});u.shell(t,Math.min(r,o-.2),o+.25,xc);const d=t.map(lt=>_t(a,lt,.83));u.shell(d,o+.25,o+2.85,"#40484a",null),u.shell(t,o+2.85,o+3.08,hn,h);for(let lt=2;lt<=13;lt++){const ct=t[lt],z=t[lt+1];Rn(u,d[lt],d[lt+1],a,o+.52,o+2.76,2.15,"#d9dbd6");const $=Math.max(1,Math.round(Math.hypot(ct[0]-z[0],ct[1]-z[1])/2.5));for(let pt=0;pt<$;pt++){const bt=_t(a,_t(ct,z,pt/$),.97);u.shell(Ca(bt,.28),o+.25,o+2.85,hn,null)}}const p=[n(28.3,24),n(31,16.2)],_=e(...p[0])+.025,g=o+3.08,m=[n(27.2,15.4),n(31.95,15.4),n(31.95,17),n(27.2,17)];u.shell(m,g-.14,g,f,h);const v=[.89,.31],M=(lt,ct)=>{const z=_t([28.3,24],[31,16.2],lt);return n(z[0]+v[0]*ct,z[1]+v[1]*ct)},x=19;for(let lt=0;lt<x;lt++){const ct=lt/x,z=(lt+1)/x,$=le.lerp(_,g,z);u.shell([M(ct,-1),M(z,-1),M(z,1),M(ct,1)],$-.09,$,f,h)}for(const lt of[-1,1]){const ct=(z,$)=>{const[pt,bt]=M(z,lt);return[pt,le.lerp(_,g,z)+$,bt]};u.beam(ct(0,.98),ct(1,.98),.07,hn),u.beam(ct(0,.51),ct(1,.51),.045,f);for(const z of[.03,.22,.42,.62,.82,1])u.beam(ct(z,.1),ct(z,.98),.055,hn)}const S=[[-16,7.5,15],[-10,4,17],[-2,2.1,17.7],[24,1.7,18.1],[30,1.7,13.2],[34,5.8,9]],b=S.map(([lt,,ct])=>n(lt,ct)),y=S.map(([lt,ct])=>n(lt,ct)).concat(b.slice().reverse());u.shell(y,o+3.08,o+6.5,hn,null);const E=Ue(y);for(let lt=1;lt<b.length;lt++)Rn(u,b[lt-1],b[lt],E,o+3.4,o+6.24,1.85);const A=o+6.52,L=o+7.72;function P([lt,ct,z]){return[[...n(lt,ct),A],[...n(lt,ct+(z-ct)*.46),L],[...n(lt,z),A]].map(([$,pt,bt])=>[$,bt,pt])}let C=0;for(let lt=1;lt<S.length;lt++){const ct=P(S[lt-1]),z=P(S[lt]),$=Math.max(1,Math.round((S[lt][0]-S[lt-1][0])/2));for(let pt=0;pt<$;pt++){const bt=ct.map((dt,Y)=>_t(dt,z[Y],pt/$)),H=ct.map((dt,Y)=>_t(dt,z[Y],(pt+1)/$)),ht=C++%2===0?l:hn;u.face(ht,bt[0],H[0],H[1],bt[1]),u.face(ht,bt[1],H[1],H[2],bt[2])}}u.face(hn,...P(S[0])),u.face(hn,...P(S.at(-1)));const D=n(13,14.8),I=t.slice(4,10).map(lt=>_t(D,lt,.95)),k=[D,...I];u.shell(k,o+3.08,o+3.42,hn),u.shell(k,o+3.42,o+4.92,"#4b5256",null),C=0,I.slice(1).forEach((lt,ct)=>{const z=I[ct];Rn(u,z,lt,D,o+3.57,o+4.83,1.65,f);const $=_t(D,z,1.011),pt=_t(D,lt,1.011);u.wall($,pt,o+3.65,o+4.12,"#79444e");for(const H of[3.48,3.71,4.24])u.beam([$[0],o+H,$[1]],[pt[0],o+H,pt[1]],.052,hn);const bt=Math.max(2,Math.round(Math.hypot(lt[0]-z[0],lt[1]-z[1])/1.25));for(let H=0;H<bt;H++){const ht=_t(z,lt,H/bt),dt=_t(z,lt,(H+1)/bt);u.face(C++%2===0?l:hn,[ht[0],o+4.96,ht[1]],[dt[0],o+4.96,dt[1]],[D[0],o+5.85,D[1]])}});const G=t.slice(9,17).map(lt=>_t(n(-9.5,24),lt,.94)),X=Ue(G);u.shell(G,o+3.08,o+6.75,hn,h);const V=G.map(lt=>_t(X,lt,1.024));u.shell(V,o+4.38,o+5.1,c,null),u.shell(G.map(lt=>_t(X,lt,1.026)),o+6.75,o+6.94,c,h),G.slice(1).forEach((lt,ct)=>{Rn(u,G[ct],lt,X,o+3.45,o+4.38,1.4),Rn(u,G[ct],lt,X,o+5.16,o+6.1,1.55)});const[J,it]=V.slice(1,3),vt=Math.hypot(it[0]-J[0],it[1]-J[1]),j=[(J[1]-it[1])/vt,(it[0]-J[0])/vt],Mt=_t(J,it,.48);Oe(i,{text:"ПАРОХОДЪ",position:[Mt[0]+j[0]*.055,o+4.75,Mt[1]+j[1]*.055],size:[6.6,.69],outward:j,color:hn,background:c,lighting:"backlit",glowColor:"#d4e9ff"}),u.finish()}function tv(i,t,e,n){const s="PARK-HOTEL",o=[1.45,1.67,1.52,1.52,1.08,1.56,1.68,1.51,1.39,1.36],r=.42,a=e.slice(0,8).reverse(),l=a.slice(1).map((f,u)=>{const d=a[u],p=Math.hypot(f[0]-d[0],f[1]-d[1]);return{a:d,b:f,length:p,outward:[(d[1]-f[1])/p,(f[0]-d[0])/p]}}),c=o.reduce((f,u)=>f+u,0)+r*(s.length-1);let h=(l.reduce((f,u)=>f+u.length,0)-c)/2;for(const[f,u]of[...s].entries()){const d=o[f];let p=h+d/2;for(const{a:_,b:g,length:m,outward:v}of l){if(p>m){p-=m;continue}const[M,x]=_t(_,g,p/m),[S,b]=v;t.beam([M-S*.06,n+.43,x-b*.06],[M-S*.06,n+.89,x-b*.06],.075,vs),Oe(i,{text:u,position:[M+S*.07,n+1.13,x+b*.07],size:[d,1.8],outward:v,color:"#e7cc87",weight:850,lighting:"neon",glowColor:"#ff5540",spill:f===5});break}h+=d+r}}function ev(i,t,e){const n=Math.min(...t.map(p=>e(...p)))+.06,s=n-.36,o=Ue(t),r="#99655f",a="#d6c9b8",l="#b8b6aa",c=me(i,"Парк-отель Анапа",{surfaces:{flatRoof:[l],stone:[a]}}),h=n+2.85,f=2.91;c.shell(t,s,h,a,null);for(let p=0;p<t.length;p++){const _=t[p],g=t[(p+1)%t.length],[m,v]=_t(_,g,.5);v<o[1]-2&&e(m,v)<n+.8&&Rn(c,_,g,o,n+.46,h-.35,2.1,a)}for(let p=0;p<4;p++){const _=h+p*f;c.shell(t,_,_+f,xc,null);for(let g=0;g<t.length;g++){const m=t[g],v=t[(g+1)%t.length],[M,x]=_t(m,v,.5);if(Math.hypot(v[0]-m[0],v[1]-m[1])<1.2)continue;const S=M<o[0]-6||p===3?r:a;c.wall(_t(o,m,1.003),_t(o,v,1.003),_+.05,_+.86,S),(x<o[1]+14||g%2===0)&&Rn(c,m,v,o,_+.9,_+2.64,1.43,S===r?"#d8bfb0":"#eee8db")}}const u=h+4*f;c.shell(t,u,u+.48,r,l);const d=t.filter(([p,_])=>p<o[0]-11&&_>o[1]-1);if(d.length>=4){const p=d.map(_=>_t(Ue(d),_,.68));c.shell(p,u+.48,u+1.68,r,l)}tv(i,c,t,u),c.finish()}function nv(i,t,e){const n=t.rings[0],s=t.id==="223949001",o=Ue(n),r=s?e(...o):e(-263.52,25.47),a=Math.min(...n.map(M=>e(...M)))-.25,l="#e5dfcd",c=s?"#94877d":"#ad5d51",h=me(i,"Музей Горгиппия",{surfaces:{roof:[c],glass:["#556161"],stone:["#a69a82"]}}),f=r+4.25,u=t.id==="142489024"||s?[n[0],n[1],n[3],n[4]]:n.slice(0,4);Math.hypot(u[1][0]-u[0][0],u[1][1]-u[0][1])>Math.hypot(u[2][0]-u[1][0],u[2][1]-u[1][1])&&u.push(u.shift()),h.shell(n,Math.min(a,r),r+.5,"#a69a82",null),h.shell(n,r+.5,f,l,null);const d=_t(u[0],u[1],.5),p=_t(u[2],u[3],.5),_=[_t(d,p,.23),_t(d,p,.77)].map(([M,x])=>[M,f+(s?1.65:2.25),x]),g=u.map(([M,x])=>[M,f,x]);h.face(c,g[0],g[1],_[0]),h.face(c,g[1],g[2],_[1],_[0]),h.face(c,g[2],g[3],_[1]),h.face(c,g[3],g[0],_[0],_[1]);const m=s?[n[0],n[1]]:[n[4],n[0]],v=s?6:4;for(let M=0;M<v;M++){const x=_t(o,_t(m[0],m[1],(M+.32)/v),1.005),S=_t(o,_t(m[0],m[1],(M+.66)/v),1.005);h.wall(x,S,r+1.25,r+3.03,"#556161")}if(t.id==="142489024")for(const M of[.19,.81]){const x=n[0],S=n[1],b=Array.from({length:16},(w,y)=>{const E=y*Math.PI/8,[A,L]=_t(o,_t(x,S,M+.035*Math.cos(E)),1.006);return[A,r+2.5+.46*Math.sin(E),L]});h.face(Jx,...b)}h.finish()}function iv(i,t,e){if(t.id==="170958806")jx(i,t.rings[0],e);else if(t.id==="1546378584")ev(i,t.rings[0],e);else if(["142489024","218983841","223949001"].includes(t.id))nv(i,t,e);else return!1;return!0}function sv(i,t){const e=me(i,"Вход в Горгиппию"),[n,s]=Ni[1],o=t(n,s),r=Fi,a=(h,f,u=0)=>[n+Math.cos(r)*h-Math.sin(r)*u,o+f,s+Math.sin(r)*h+Math.cos(r)*u];for(let h=1;h<Ni.length;h++){const f=Ni[h-1],u=Ni[h],d=Math.hypot(u[0]-f[0],u[1]-f[1]),p=_t(f,u,_c(f)/d),_=_t(f,u,1-_c(u)/d),g=Math.hypot(_[0]-p[0],_[1]-p[1]),m=Math.ceil(g/2.6),v=(M,x)=>{const[S,b]=_t(p,_,M);return[S,t(S,b)+x,b]};for(let M=0;M<m;M++){const x=M/m,S=(M+1)/m;for(const[b,w,y]of[[.14,.23,"#b1a992"],[.37,.037,vs],[1.21,.043,vs]])e.beam(v(x,b),v(S,b),w,y);e.beam(v(x,.22),v(x,1.31),.068,vs);for(let b=1;b<=5;b++){const w=x+(S-x)*b/6;e.beam(v(w,.36),v(w,1.25),.024,vs)}}}for(const h of[-2.55,2.55]){const[f,,u]=a(h,0);e.shell(Ca([f,u],.63),o-.45,o+2.56,hn),e.shell(Ca([f,u],.83),o+2.56,o+2.72,xc),e.shell(Ca([f,u],.88),o+2.72,o+3.48,hn);const d=Array.from({length:20},(p,_)=>{const g=_*Math.PI/10;return a(h+Math.cos(g)*.31,3.1+Math.sin(g)*.31,-.445)});e.face("#98694b",...d)}for(const h of[0,.27,.55]){const f=Array.from({length:11},(u,d)=>{const p=d/5-1;return a(p*2.17,2.8+h+(1-p*p)*.68)});f.slice(1).forEach((u,d)=>e.beam(f[d],u,.045,hn))}const l={Г:[[[0,0],[0,1],[1,1]]],О:[[[.22,0],[.78,0],[1,.18],[1,.82],[.78,1],[.22,1],[0,.82],[0,.18],[.22,0]]],Р:[[[0,0],[0,1],[.78,1],[1,.82],[1,.65],[.78,.49],[0,.49]]],И:[[[0,1],[0,0],[1,1],[1,0]]],П:[[[0,0],[0,1],[1,1],[1,0]]],Я:[[[1,0],[1,1],[.22,1],[0,.82],[0,.65],[.22,.49],[1,.49]],[[0,0],[.44,.49]]]};Array.from("ГОРГИППИЯ").forEach((h,f)=>{const u=(f-4)*.425,d=3.02+(1-(u/2.17)**2)*.68;for(const p of l[h]){const _=p.map(([g,m])=>a(-u-(g-.5)*.32,d+m*.43,-.045));_.slice(1).forEach((g,m)=>e.beam(_[m],g,.043,"#9e5345"))}});const c=xd(t);for(let h=0;h<3;h++){const f=-1.44+h*.42,u=[[-2.22,f],[2.22,f],[2.22,.46],[-2.22,.46]].map(([p,_])=>{const[g,,m]=a(p,0,_);return[g,m]}),d=h===0?c-.2:c+h*.135;e.shell(u,d,c+(h+1)*.135,"#c8b697")}for(const h of[-1,1]){for(let f=0;f<=6;f++){const u=h*(1.15+f*.16);e.beam(a(u,.26),a(u,1.78),.032,vs)}for(const f of[.32,1.7])e.beam(a(h*1.15,f),a(h*2.2,f),.046,vs)}e.finish()}function ov(i,t){sv(i,t)}const Yo="#eeeee7",ss="#f3f1e7",Pa="#294d6a",vd="#496b83",Md={glass:[vd,"#7694a3"],metal:[Pa,"#4d7494"],flatRoof:["#c2c7c2","#c7c8bf","#c6c8c4"],stone:["#c7bcab"]};function ur(i){return i.map(([t,e],n)=>{const[s,o]=i[(n+1)%i.length],r=Math.hypot(s-t,o-e);return{x:t,z:e,length:r,ux:(s-t)/r,uz:(o-e)/r}})}function Xe(i,t,e=0){return[i.x+i.ux*t-i.uz*e,i.z+i.uz*t+i.ux*e]}function wu(i,t){return i.map((e,n)=>{const s=(n+i.length-1)%i.length,o=i[s],r=Xe(o,0,t[s]),a=Xe(e,0,t[n]),l=o.ux*e.uz-o.uz*e.ux,c=((a[0]-r[0])*e.uz-(a[1]-r[1])*e.ux)/l;return[r[0]+o.ux*c,r[1]+o.uz*c]})}function Kl(i,t,e,n,s){return[Xe(i,t,n),Xe(i,e,n),Xe(i,e,s),Xe(i,t,s)]}function So(i,t,e,n,s,o,r=vd,a=.025){i.wall(Xe(t,e,-a),Xe(t,n,-a),s,o,r)}function rv(i,t,e,n){const s=n?Math.max(1,Math.round(t.length/4.15)):1,o=Math.min(n?2.38:.93,t.length/s*.69);for(let r=0;r<s;r++){const a=t.length*(r+.5)/s,l=e+(n?.37:1.02),c=e+2.37;So(i,t,a-o/2,a+o/2,l,c),n&&So(i,t,a-.038,a+.038,l,c,"#7694a3",.04)}}function av(i,t,e){const[n,s]=Xe(t,0,.055),[o,r]=Xe(t,t.length,.055);i.beam([n,e+.26,s],[o,e+.26,r],.065,Pa),i.beam([n,e+1.08,s],[o,e+1.08,r],.075,Pa);const a=Math.ceil(t.length/.215);for(let l=0;l<a;l++){const c=t.length*(l+.5)/a;i.wall(Xe(t,c-.016,.055),Xe(t,c+.016,.055),e+.26,e+1.08,Pa)}}function cv(i,t,e,n,s){const o=n+.9,r=e.length*.2,a=e.length*.8,l=s(...Xe(e,e.length/2,-2.9));for(let u=0;u<6;u++){const d=-2.9+u*.42,p=l+(o-l)*(u+1)/6;t.shell(Kl(e,r,a,d,.04),Math.min(p-.05,l-.08),p,"#c7bcab")}t.shell(Kl(e,r-.9,a+.9,-2.3,.04),n+3.24,n+3.56,ss);const c=(r+a)/2;So(t,e,c-4.4,c+4.4,n+2.74,n+3.23,ss,.055);const[h,f]=Xe(e,c,-.082);Oe(i,{text:"анапа-океан",position:[h,n+2.99,f],size:[8.1,.62],outward:[e.uz,-e.ux],color:"#155d8a",weight:850,lighting:"backlit",glowColor:"#6ac8ff"})}function lv(i,t,e){const n=me(i,"Анапа-Океан — 13 этажей",{surfaces:Md}),s=ur(t),o=new Set([0,1,3,4,5,6]),r=wu(s,s.map((g,m)=>o.has(m)?1.5:.05)),a=ur(r),l=e(...Xe(s[0],s[0].length/2)),c=Math.min(...t.map(g=>e(...g)))-.3,h=l+3.65,f=12,u=2.97,d=h+f*u;n.shell(t,c,h,Yo,ss);for(const g of s.slice(0,3)){const m=Math.max(2,Math.round(g.length/2.3));for(let v=0;v<m;v++){const M=g.length*(v+.055)/m,x=g.length*(v+.945)/m;So(n,g,M,x,l+.95,l+3.22)}}cv(i,n,s[0],l,e),n.shell(r,h,d,Yo,"#c2c7c2");for(let g=0;g<f;g++){const m=h+u*g,v=g<f-1;v&&(n.shell(t,m,m+.22,ss),n.flat(t,m,ss));for(let M=0;M<s.length;M++){const x=o.has(M);rv(n,a[M],m,x),x&&v&&av(n,s[M],m)}}const p=wu(s,s.map(()=>.4)),_=ur(p);n.shell(p,d-.17,d+.45,Yo,"#c7c8bf");for(const[g,m]of[[2,1.37],[7,1.05]]){const v=_[g];n.shell(Kl(v,.7,v.length-.7,.02,2.1),d+.45,d+m,Yo)}n.finish()}function hv(i,t,e){const n=me(i,"Анапа-Океан — низкое крыло",{surfaces:Md}),s=[...t.slice(0,9),t[15]],o=t.slice(8),r=e(...Ue(s)),a=e(...Ue(o)),l=r+3.9,c=a+6.25,h="#4d7494";for(const[g,m,v]of[[s,r,l],[o,a,c]]){const M=Math.min(...g.map(S=>e(...S)))-.3;n.shell(g,M,v,Yo,"#c6c8c4");const x=ur(g);for(const S of x){if(S.length<2.7)continue;const b=Math.max(1,Math.round(S.length/4.3));for(let w=0;w<b;w++){const y=S.length*(w+.17)/b,E=S.length*(w+.84)/b;So(n,S,y,E,m+.72,m+2.94),g===o&&So(n,S,y,E,m+3.55,v-.64)}}}const f=ur(s);for(const g of f.slice(0,6)){const m=Xe(g,0,.15),v=Xe(g,g.length,.15);n.wall(m,v,l+.14,l+.91,h),n.beam([m[0],l+.96,m[1]],[v[0],l+.96,v[1]],.055,ss)}const u=f[3],[d,p]=Xe(u,u.length/2,-1.55),_=e(d,p)+2.65;for(const g of[-1,1]){const[m,v]=Xe(u,u.length/2+g*1.85,-1.47);n.beam([m,e(m,v),v],[m,_,v],.16,ss),n.beam([m,_-.12,v],[d,_-.12,p],.095,ss)}Oe(i,{text:"La Veranda",position:[d,_+.16,p],size:[3.6,.69],outward:[u.uz,-u.ux],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#faf3db",weight:600,lighting:"spot"}),n.finish()}function uv(i,t){const e=me(i,"La Veranda — летняя веранда",{surfaces:{wood:["#ddd7c5","#b5a484"],ground:["#d3c7b3"],metal:["#706b5c"]}}),n=[-601,-29],s=[.855,-.519],o=[.519,.855],r=(p,_)=>[n[0]+s[0]*p+o[0]*_,n[1]+s[1]*p+o[1]*_],a=(p,_,g,m)=>[r(p,g),r(_,g),r(_,m),r(p,m)],l=[0,4.5,9].flatMap(p=>[0,3,6].map(_=>t(...r(p,_)))),c=Math.max(...l)+.06,h=c+3.1,f=(p,_,g,m,v,M)=>e.beam([p[0],g,p[1]],[_[0],m,_[1]],v,M);e.shell(a(0,9,0,6),Math.min(...l)-.12,c,"#bcb4a6","#ddd7c5"),e.shell(a(-.12,9.12,-.12,6.12),h,h+.16,"#e5e1d6","#f6f3e9");for(const p of[.15,3,6,8.85])for(const _ of[.15,5.85]){const g=r(p,_);f(g,g,c,h,.13,"#f5f2e8")}for(const p of[.15,5.85]){f(r(.15,p),r(8.85,p),c+.92,c+.92,.09,"#f5f2e8");for(let _=.15;_<8.5;_+=2.9)f(r(_,p),r(_+2.85,p),c+.18,c+.89,.055,"#f5f2e8"),f(r(_,p),r(_+2.85,p),c+.89,c+.18,.055,"#f5f2e8")}for(const p of[.3,2.8,3.2,5.8,6.2,8.7])e.wall(r(p,.2),r(p+.24,.2),c+.92,h-.05,"#eee9d9");for(const p of[1.5,4.5,7.5])for(const _ of[1.6,4.2]){e.shell(a(p-.47,p+.47,_-.36,_+.36),c+.73,c+.79,"#baa98d","#f5efe1");const g=r(p,_);f(g,g,c+.05,c+.73,.08,"#817462");for(const m of[-.78,.78])e.shell(a(p+m-.23,p+m+.23,_-.23,_+.23),c+.42,c+.5,"#a99779","#c2b198")}for(const p of[1.1,3.6,6.1,8.1])e.shell(a(p-.65,p+.65,-.32,.05),c+.02,c+.4,"#aa8d61","#5f844b"),e.shell(a(p-.57,p+.57,-.29,.02),c+.4,c+.55,"#718f54","#829c62");const[u,d]=r(4.5,-.13);Oe(i,{text:"La Veranda",position:[u,h+.55,d],size:[5.5,.9],outward:[-.519,-.855],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#f8f4e8",weight:600,lighting:"spot"}),e.finish()}function fv(i,t,e){if(t.id==="223949006")lv(i,t.rings[0],e);else if(t.id==="142489050")hv(i,t.rings[0],e),uv(i,e);else return!1;return!0}function dv(i,t,e){const n="#d6d4cf",s="#b1b0ac",o="#556574",r="#eeeae2",a="#4b5156",l="#514e4a",c=me(i,"Анапский городской суд — Ленина, 6",{surfaces:{stone:[l],glass:[o],metal:[a],flatRoof:[s],paving:["#c5bdae"]}}),h=t.map((b,w)=>{const y=t[(w+1)%t.length],E=Math.hypot(y[0]-b[0],y[1]-b[1]),A=(y[0]-b[0])/E,L=(y[1]-b[1])/E;return{a:b,length:E,ux:A,uz:L,point:(P,C=0)=>[b[0]+A*P+L*C,b[1]+L*P-A*C]}}),f=(b,w,y,E,A,L,P=.025)=>c.wall(b.point(w,P),b.point(y,P),E,A,L),u=(b,w,y,E,A)=>[b.point(w,E),b.point(y,E),b.point(y,A),b.point(w,A)],d=h[1],p=d.length/2,_=e(...d.point(p,1.8))+.03,g=_+.72,m=g+7.6,v=Math.min(...t.map(([b,w])=>e(b,w)),_)-.35;c.shell(t,v,g,"#8c8983",null),c.shell(t,g,m,n,null),c.shell(t,m,m+.22,r,s);for(const[b,w]of h.entries()){if(w.length<5)continue;const y=Math.max(1,Math.round(w.length/3.3));for(let E=0;E<y;E++){const A=w.length*(E+.5)/y;for(let L=0;L<2;L++){if(b===1&&L===0&&Math.abs(A-p)<2.3)continue;const P=g+.7+L*3.48;if(f(w,A-.66,A+.66,P,P+1.94,r,.03),f(w,A-.57,A+.57,P+.09,P+1.85,o,.045),f(w,A-.025,A+.025,P+.09,P+1.85,r,.057),L===0){for(let C=-2;C<=2;C++)f(w,A+C*.2-.012,A+C*.2+.012,P+.13,P+1.82,a,.073);for(const C of[P+.48,P+1.4])f(w,A-.54,A+.54,C,C+.025,a,.073)}}}}f(d,p-1.2,p+1.2,g,g+2.65,"#242d31",.055),f(d,p-.025,p+.025,g+.05,g+2.6,"#c1bfba",.07);for(let b=0;b<4;b++){const w=2-b*.43;c.shell(u(d,p-2.7,p+2.7,.08,w),_+b*.18-.05,_+(b+1)*.18,l)}c.shell(u(d,p-2.75,p+2.75,-.02,1.85),g+3.16,g+3.39,r);for(const b of[p-2.25,p+2.25])c.shell(u(d,b-.17,b+.17,1.3,1.64),g,g+3.16,r);const[M,x]=d.point(p,.085);Oe(i,{text:"АНАПСКИЙ ГОРОДСКОЙ СУД",position:[M,g+2.91,x],size:[2.5,.36],outward:[d.uz,-d.ux],color:"#f8e7c7",background:"#8b2926",weight:700,lighting:"unlit"});const S=(b,w)=>{const y=d.point(b,w);return[y[0],e(...y)+.12,y[1]]};for(let b=2;b<18;b+=1){const w=Math.min(b+1,18);c.face("#c5bdae",S(p-1.45,b),S(p+1.45,b),S(p+1.45,w),S(p-1.45,w))}c.finish()}function pv(i,t,e){return t.id!=="142489077"?!1:(dv(i,t.rings[0],e),!0)}const di="#eeece2",_s="#354552";function Sd(i,t){const e=Math.hypot(t[0]-i[0],t[1]-i[1]),n=(t[0]-i[0])/e,s=(t[1]-i[1])/e,o=(l,c)=>[i[0]+n*l-s*c,i[1]+s*l+n*c];return{point:o,project:([l,c])=>[(l-i[0])*n+(c-i[1])*s,(l-i[0])*-s+(c-i[1])*n],rectangle:(l,c,h,f)=>[o(l,h),o(c,h),o(c,f),o(l,f)]}}function Eu(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);r>=0&&e.push(s),r<0!=a<0&&e.push(_t(s,o,r/(r-a)))}return e}function mv(i,t,e){const{point:n,project:s,rectangle:o}=Sd(t[0],t[1]),r=t.map(y=>e(...y)),a=Math.max(...r),l=a+3.35,c="#c8bda8",h="#adada4",f=me(i,"Кубань",{surfaces:{flatRoof:[h],stone:[c]}});f.shell(t,Math.min(...r)-.22,l,c,h);const u=Eu(t,y=>14-s(y)[0]),d=Eu(t,y=>s(y)[1]-35.45);f.shell(u,l,a+6.7,di,h),f.shell(d,l,a+6,"#d7d0c1",h);const p=14,_=89.4,g=9.02,m=25.57,v=o(p,_,g+1.05,m-1.05),M=Ue(v),x=2.95,S=l+8*x;f.shell(v,l,S,di,h);const b=22,w=[g,m].map((y,E)=>{const A=E===0?1:-1,L=[];for(let P=0;P<b;P++){const C=p+(_-p)*P/b,D=p+(_-p)*(P+1)/b;L.push(n(C,y+A*.48),n(C+(D-C)*.4,y),n(D,y))}return L});for(let y=0;y<8;y++){const E=l+y*x;Rn(f,v[0],v[1],M,E+.96,E+2.62,3.45),Rn(f,v[2],v[3],M,E+.96,E+2.62,3.45);for(const L of w)for(let P=1;P<L.length;P++)f.wall(L[P-1],L[P],E+.24,E+.94,di);const A=[[...w[0],n(_,g+1.07),n(p,g+1.07)],[...w[1],n(_,m-1.07),n(p,m-1.07)]];for(const L of A)f.shell(L,E,E+.24,di)}f.shell(v,S,S+.45,di,h),f.finish()}function Tu(i,t,e,n,s,o,r){const a=[[t[0],n,t[1]],[e[0],n,e[1]]];for(let l=0;l<=8;l++){const c=Math.PI*l/8,[h,f]=_t(t,e,(1+Math.cos(c))/2);a.push([h,s+(o-s)*Math.sin(c),f])}i.face(r,...a)}function va(i,t,e,n,s,o,r){for(let a=0;a<r;a++){const l=f=>_t(t,e,(a+f)/r),c=[l(.15),l(.85)].map(f=>_t(n,f,1.006));Tu(i,...c,s,s+o*.72,s+o,di);const h=[l(.24),l(.76)].map(f=>_t(n,f,1.011));Tu(i,...h,s+.12,s+o*.72,s+o-.2,"#314454")}}function gv(i,[t,e],n,s,o,r=!1){const a=n.map(([l,c])=>Array.from({length:s},(h,f)=>{const u=2*Math.PI*(f+.5)/s;return[t+c*Math.cos(u),l,e+c*Math.sin(u)]}));for(let l=1;l<a.length;l++)for(let c=0;c<s;c++){const h=(c+1)%s;i.face(o,a[l-1][c],a[l-1][h],a[l][h],a[l][c]),r&&c%2===0&&i.beam(a[l-1][c],a[l][c],.04,"#a98c4b")}}function Au(i,[t,e],n,s){const o="#bc9e4f";i.beam([t,n,e],[t,n+s,e],.075,o),i.beam([t-.33,n+s*.67,e],[t+.33,n+s*.67,e],.065,o),i.beam([t-.22,n+s*.35,e],[t+.22,n+s*.43,e],.06,o)}function _v(i,t,e){const[n,s,o,r]=t,a=(P,C)=>_t(_t(s,o,P),_t(n,r,P),C),l=(P,C,D,I)=>[a(P,D),a(C,D),a(C,I),a(P,I)],c=Ue(t),h=e(...c),f=Math.min(...t.map(P=>e(...P)))-.25,u="#3c9e9e",d="#a99973",p=me(i,"Свято-Онуфриевский храм",{surfaces:{flatRoof:[_s],glass:["#314454"],stone:[d]}}),_=l(.24,1,0,1),g=l(0,.35,.25,.75),m=Ue(_),v=Ue(g),M=h+5.9;p.shell(_,f,h+.6,d,null),p.shell(_,h+.6,M,u,null),p.shell(g,f,h+.6,d,null),p.shell(g,h+.6,h+6.45,u,null),p.shell(_.map(P=>_t(m,P,1.012)),M-.27,M,di,null);for(const[P,C]of[[_[0],_[1]],[_[2],_[3]],[_[1],_[2]]])va(p,P,C,m,h+1.18,2.78,3);va(p,g[3],g[0],v,h+.55,3.1,1);const x=[a(.42,.5),a(.83,.5)].map(([P,C])=>[P,h+7.95,C]),S=_.map(([P,C])=>[P,M,C]);p.face(_s,S[0],S[1],x[1],x[0]),p.face(_s,S[1],S[2],x[1]),p.face(_s,S[2],S[3],x[0],x[1]),p.face(_s,S[3],S[0],x[0]);const b=h+6.65,w=h+10.35;p.shell(g,h+6.22,b,di,null),p.shell(g,b,w,u,null),g.forEach((P,C)=>{va(p,P,g[(C+1)%g.length],v,b+.18,2.55,3)});for(const[P,C,D]of[[_,m,M],[g,v,w]])for(const I of P){const[k,G]=_t(C,I,1.006);p.beam([k,h+.6,G],[k,D,G],.35,di)}const y=g.map(P=>_t(v,P,1.045)),E=[v[0],h+17.8,v[1]];y.forEach(([P,C],D)=>{const[I,k]=y[(D+1)%y.length];p.face(_s,[P,w,C],[I,w,k],E),p.beam([P,w,C],E,.055,"#88754c")}),Au(p,v,E[1],1.42);const A=a(.68,.5),L=Array.from({length:8},(P,C)=>{const D=Math.PI*(C+.5)/4;return[A[0]+1.98*Math.cos(D),A[1]+1.98*Math.sin(D)]});p.shell(L,h+7.35,h+10.1,u,null),p.shell(L.map(P=>_t(A,P,1.08)),h+9.87,h+10.12,di,null),L.forEach((P,C)=>va(p,P,L[(C+1)%L.length],A,h+8.22,1.42,1)),gv(p,A,[[10.12,1.98],[10.55,2.27],[11.25,2.32],[12.02,1.85],[12.63,1.02],[13.12,.47],[13.52,.16]].map(([P,C])=>[h+P,C]),12,_s,!0),Au(p,A,h+13.5,1.35),p.finish()}function xv(i,t,e){const{point:n,rectangle:s}=Sd(t[3],t[4]),o=Ue(t),r=t.map(A=>e(...A)),a=Math.max(...r),l="#d4b581",c="#cca873",h="#eadcbe",f="#a17a61",u="#aaa598",d="#625748",p="#986d59",_=me(i,"Мотылёк",{surfaces:{flatRoof:[u],metal:[d,p],stone:[f]}}),g=a+9.35;_.shell(t,Math.min(...r)-.25,a+.64,f,null),_.shell(t,a+.64,g,c,u);for(let A=0;A<3;A++){const L=a+.65+A*2.84;if(Rn(_,t[3],t[4],o,L+.65,L+2.43,3.9,c),Rn(_,t[11],t[12],o,L+.65,L+2.43,4,c),!A)continue;const P=s(.2,51.35,-.58,.04);_.shell(P,L-.24,L,h,l),_.wall(P[0],P[1],L+.68,L+.77,d);const C=s(9.18,42.7,16.97,17.52);_.shell(C,L-.24,L,h,l),_.wall(C[2],C[3],L+.68,L+.77,d)}const m=42.99,v=57,M=16.85,x=44.8,S=s(m,v,M,x),b=Ue(S),w=a+12.15;_.shell(S,g,w,c,null);for(const[A,L]of S.entries())Rn(_,L,S[(A+1)%S.length],b,g+.35,w-.35,4.3,c);const[y,E]=[M,x].map(A=>Array.from({length:11},(L,P)=>{const C=P/10,[D,I]=n(m-.27+(v-m+.54)*C,A);return[D,w+1.55*(1-(2*C-1)**2),I]}));for(let A=1;A<y.length;A++)_.face(p,y[A-1],E[A-1],E[A],y[A]);_.face(c,...y),_.face(c,...E),_.finish()}function vv(i,t,e){const n=t.parts?.filter(v=>v.levels>2)??[],s=t.parts?.filter(v=>v.levels===2)??[];if(n.length!==2||s.length!==2)return!1;const o=["#6f8a98","#8197a0","#627e8f","#718d9d"],r=me(i,"Колоннада",{surfaces:{flatRoof:["#b8bfbe"],glass:o,stone:["#d4d8d5"]}}),a=t.rings[0],l=a.map(v=>e(...v)),c=Math.max(...l),h=Math.min(...l)-.22,f=c+6.65,u="#d4d8d5",d="#b8bfbe",p="#a5adaf";for(const v of t.parts)r.shell(v.rings[0],h,f,p,d);const _=Ue(a);a.forEach((v,M)=>{const x=a[(M+1)%a.length];for(const S of[0,1]){const b=c+S*3.325;Rn(r,v,x,_,b+.42,b+2.87,2.4,"#c4c9c8")}});const g=["#9e7867","#9b8e65","#56768e"],m=2.95;for(const[v,M]of n.entries()){const x=M.rings[0],S=Ue(x),b=f+(M.levels-2)*m;r.shell(x,f,b,u,d),x.forEach((w,y)=>{const E=x[(y+1)%x.length],A=Math.hypot(E[0]-w[0],E[1]-w[1]),L=Math.max(1,Math.round(A/2.45)),P=A>9?.13:.16,C=X=>_t(S,_t(w,E,X),1.0035);for(let X=0;X<L;X++){const V=C(P+(1-2*P)*(X+.025)/L),J=C(P+(1-2*P)*(X+.975)/L);for(let it=2;it<M.levels;it++){const vt=f+(it-2)*m,j=it*7+y*11+X*5+v*9,Mt=j%29===0?g[X%g.length]:o[j%o.length];r.wall(V,J,vt+.15,vt+m-.14,Mt)}}if(A<13)return;const[D,I]=C(.15),[k,G]=C(.85);for(const[X,V]of[[D,I],[k,G]])r.beam([X,b,V],[X,b+1.45,V],.15,"#9ba5a8");r.beam([D,b+1.45,I],[k,b+1.45,G],.16,"#9ba5a8")})}return r.finish(),!0}function Mv(i,t,e){const n=t.rings[0];if(t.id==="223459472")mv(i,n,e);else if(t.id==="142489074")_v(i,n,e);else if(t.id==="223628174")xv(i,n,e);else return t.id==="223628417"?vv(i,t,e):!1;return!0}function je([i,t],e){return[i,e,t]}function Zo([i,t],e,n=e){return Array.from({length:8},(s,o)=>{const r=o*Math.PI/4;return[i+Math.cos(r)*e,t+Math.sin(r)*n]})}function yd(i,t,e,n){i.shell(Zo(t,.13),e,e+.69,n,null),i.shell(Zo(t,.54),e+.69,e+.75,n);for(const s of[-1,1]){const o=[t[0]+s*.84,t[1]];i.shell(Zo(o,.18),e,e+.44,n,null),i.shell(Zo(o,.28),e+.44,e+.5,n),i.beam([o[0]+s*.23,e+.46,o[1]],[o[0]+s*.23,e+.87,o[1]],.08,n)}}function Sv(i,t,e,n,s){const o=(n.lowerWaterfront??n)(...Ue(e)),r=o+s,a="#ded4ba",l="#e5e0cf",c="#bfbaa8",h="#484740",f=[[e[1][0],-30.5],[e[2][0],-32.8],[e[3][0],-35.7]],u=f.map(([g,m])=>[g,m-2]),d=[e[0],...u,e.at(-1)];t.shell(d,o-.17,o+.23,a,"#aa9c80"),t.shell(d,r-.25,r,"#a8a393","#b6b2a5");for(let g=1;g<u.length;g++){const m=u[g-1],v=u[g];t.wall(m,v,o+.23,o+.75,a),t.wall(m,v,r-.43,r-.25,l),t.wall(f[g-1],f[g],o+.23,r-.25,"#4b5351");for(const x of[.79,1,1.19])t.beam(je(m,o+x),je(v,o+x),.053,h);const M=5;for(let x=0;x<M;x++){const S=(x+.5)/M,b=_t(m,v,S),w=je(b,o+1.54),y=r-.42;t.beam(je(b,o+.23),je(b,r-.25),.16,a);for(const L of[-1,1]){const P=_t(m,v,S+L*.018),C=_t(m,v,S+L*.056);t.face(l,je(b,y),je(C,y),w),t.face(c,je(C,y),je(P,y-.8),w),t.face(l,w,je(b,o+.77),je(P,o+.77))}t.beam(je([b[0],b[1]-.045],o+1.9),je([b[0],b[1]-.045],o+2.12),.11,"#f2dcab");const[E,A]=_t(m,v,S+.09);yd(t,[E,A+1.14],o+.23,"#88684d")}}const[p,_]=_t(u[0],u[1],.78);Oe(i,{text:"ПРИЧАЛ",position:[p,r-.54,_-.055],size:[3.08,.42],outward:[-.108,-.994],background:"#484740",color:"#f2e8d0",lighting:"unlit"})}function yv(i,t,e,n){const s=n(-170,-63)+.26,o=Ue(e),r="#323a3e",a="#795b45",l=e.map(g=>_t(o,g,.82));t.shell(e,s-1.12,s+.39,"#666458");for(const[g,m,v,M]of[[e,.39,2.75,3.18],[e,3.18,5.93,6.52],[l,6.52,8.75,9.06]])t.shell(g,s+m,s+v,"#35494d",null),t.shell(g,s+v,s+M,r,"#777e7b"),g.forEach((x,S)=>{const b=g[(S+1)%g.length];Rn(t,x,b,o,s+m+.05,s+v,1.18,r)});const c=[[-185.1,-55.2],[-173,-69.3],[-163.5,-64],[-162.1,-47.2]],h=s+3.06,f=[c[0],[-188.8,-60.2],[-180.3,-72.6],c[1]];t.shell(f,s-.5,s+.11,"#888479","#aaa293"),t.shell(c,s-.52,s+.37,"#6a675d","#968477"),t.shell(c,h-.18,h,"#4c4035","#929895");const u=c.map(g=>_t(Ue(c),g,.94));t.shell(u,s+.37,h-.19,"#475958",null);for(let g=0;g<c.length;g++){const m=c[g],v=c[(g+1)%c.length],M=Math.ceil(Math.hypot(v[0]-m[0],v[1]-m[1])/2.55);for(let x=0;x<M;x++){const S=_t(m,v,x/M);t.beam(je(S,s+.35),je(S,h-.13),.2,a),t.beam(je(_t(S,v,.03),h-.33),je(_t(m,v,(x+.8)/M),h-.33),.035,"#dac797")}}for(const g of[[-185.6,-60.4],[-183.4,-64],[-180.8,-67.6]])yd(t,g,s+.11,"#916e49");const d=[-177.7,-51.7],p=n(...d),_=Zo(d,.36,.52);t.shell(_,p-.08,p+2.31,a),Oe(i,{text:"ВИНО И МОРЕ",position:[d[0]-.365,p+1.28,d[1]],size:[1.02,.53],outward:[-1,0],background:"#5b4435",color:"#e7dac1",lighting:"unlit"})}const Jl="#607680",bv={223948934:{address:"9",height:4.9,wall:"#c6b69f",roof:"#b6b1a5"},223948896:{address:"11",height:4.7,wall:"#b7a188",roof:"#777774"},223948899:{address:"13",height:4.6,wall:"#c4baaa",roof:"#cbc7bc"},223948902:{address:"15/1",height:4.45,wall:"#c0b4a2",roof:"#c4c0b5"},223948903:{address:"15/2",height:4.45,wall:"#bab0a1",roof:"#c4c0b5"},223948904:{address:"15/3",height:4.4,wall:"#baafa0",roof:"#c4c0b5"},223948906:{address:"17",height:4.35,wall:"#9c8471",roof:"#b3aba1"},223948908:{address:"19",height:3.65},223948913:{address:"21",height:3.75,wall:"#b4a18a",roof:"#a59c8b",name:"Хинкальная"},223948916:{address:"23",height:3.85,wall:"#85685b",roof:"#77716a",veranda:!0}};function wv(i){const t=i.reduce((e,n,s)=>{const o=i[(s+1)%i.length];return e+n[0]*o[1]-o[0]*n[1]},0);return i.map((e,n)=>[e,i[(n+1)%i.length]]).filter(([e,n])=>{const s=Math.hypot(n[0]-e[0],n[1]-e[1]);return s>=2&&(n[0]-e[0])*Math.sign(t)/s>.42})}function Ev(i,t,e,{height:n,wall:s,roof:o,veranda:r}){const a=wv(t),l=e.lowerWaterfront??e,c=Math.min(...t.map(d=>l(...d))),h=c+n,f=Ue(t),u=r?t.map(d=>_t(f,d,.8)):t;i.shell(t,c-.24,c+.32,"#b2a798"),i.shell(u,c+.3,h-.28,s,null),i.shell(t,h-.28,h,o);for(const[d,p]of a){const _=Math.hypot(p[0]-d[0],p[1]-d[1]),g=Math.max(1,Math.round(_/(r?3.4:2.5))),m=_t(f,d,1.005),v=_t(f,p,1.005);for(let M=0;M<g;M++){const x=_t(m,v,(M+.12)/g),S=_t(m,v,(M+.88)/g);if(r){const b=_t(d,p,M/g);i.beam([b[0],c+.32,b[1]],[b[0],h-.26,b[1]],.16,s),i.beam([x[0],c+.97,x[1]],[S[0],c+.97,S[1]],.075,"#66645f");const w=_t(f,x,.8),y=_t(f,S,.8);i.wall(w,y,c+.65,h-.44,Jl)}else i.wall(x,S,c+.55,h-.6,Jl),i.beam([x[0],c+1.31,x[1]],[S[0],c+1.31,S[1]],.07,s)}r&&i.beam([p[0],c+.32,p[1]],[p[0],h-.26,p[1]],.16,s)}}function Tv(i,t,e,n){const s=n?-361.1:-351.8,o=n?-354.7:-331,r=n?-29.5:-29.6,a=(e.lowerWaterfront??e)((s+o)/2,r),l=n?"#e1dbcc":"#ac8b65",c=n?"#244945":"#302723",h=(g,m,v=0)=>[n?s+o-g:g,a+m,r-v],f=(g,m,v,M)=>[[g,v],[m,v],[m,M],[g,M]],u=(g,m,v,M,x,S)=>{t.face(S,h(g,v,x),h(m,v,x),h(m,M,x),h(g,M,x))},d=(g,m,v,M,x,S)=>t.beam(h(g,v,M),h(m,v,M),x,S),p=(g,m,v,M,x,S)=>t.beam(h(g,m,M),h(g,v,M),x,S);t.shell(f(s,o,r,r+2.55),a+.12,a+5.36,l),u(s+.16,o-.16,3.72,5.16,.022,"#687c86");const _=n?4:12;for(let g=0;g<=_;g++)p(s+.16+(o-s-.32)*g/_,3.7,5.18,.041,.065,"#d6d1c7");if(d(s+.16,o-.16,4.47,.038,.068,"#d6d1c7"),n){const g=s+.42;u(g,g+1.16,.31,2.52,.034,"#755336"),u(g+.11,g+1.05,.95,2.41,.044,"#45534a"),u(g+.11,g+1.05,.35,.94,.044,c),u(s+2.02,o-.38,.47,2.46,.026,"#4e6355");for(let M=0;M<=3;M++)p(s+2.02+M*1.33,.45,2.48,.06,.12,"#79573b");const m=s+1.84,v=o-.22;t.face("#236a66",h(m,2.77),h(v,2.77),h(v,2.5,1.38),h(m,2.5,1.38)),u(m,v,2.34,2.5,1.38,"#286c67"),Oe(i,{text:"Adrian",position:h((m+v)/2,2.42,1.39),size:[1.48,.15],outward:[0,-1],color:"#f5e9ce",lighting:"unlit"}),Oe(i,{text:"Adrian  BISTRO",position:h((m+v)/2,3.15,.035),size:[3.98,.53],outward:[0,-1],background:"#536e55",color:"#f1d8a1",fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#ffca70"}),t.shell(f(s+.12,o-.08,r-1.65,r),a+.13,a+.31,"#b5a58c"),d(s+1.75,o-.15,1.14,1.53,.061,c);for(let M=0;M<=11;M++)p(s+1.75+M*.409,.31,1.14,1.53,.035,c);for(const M of[s+.3,s+1.72,o-.45]){const[x]=h(M,0),S=(w,y)=>Array.from({length:8},(E,A)=>[x+Math.cos(A*Math.PI/4)*w,r-y+Math.sin(A*Math.PI/4)*w]);t.shell(S(.24,.83),a+.31,a+.7,"#ab694f");const b=S(.3,.83);for(let w=0;w<b.length;w++){const y=b[w],E=b[(w+1)%b.length];t.face(w%2?"#345c46":"#40694d",[y[0],a+.66,y[1]],[E[0],a+.66,E[1]],[x,a+1.85,r-.83])}}for(const M of[s+2.7,s+4.56]){p(M,.31,1,.93,.075,"#765d41");const[x]=h(M,0);t.shell(f(x-.31,x+.31,r-1.15,r-.71),a+.98,a+1.03,"#8b6c4b")}}else{t.shell(f(s,o,r-1.2,r),a+.12,a+.31,"#786858"),t.face("#392e27",h(s,3.16),h(o,3.16),h(o,2.79,1.21),h(s,2.79,1.21)),u(s,o,2.62,2.79,1.21,"#3d2f28");const g=8,m=(o-s)/g;for(let v=0;v<g;v++){const M=s+m*v;u(M+.08,M+m-.08,.34,2.61,.032,v%3===0?"#587273":"#354d50"),p(M+.02,.31,2.68,1.13,.088,c),d(M+.12,M+m-.18,1.12,1.11,.07,"#7e5e42");for(let x=0;x<=5;x++)p(M+.12+(m-.3)*x/5,.31,1.12,1.11,.039,"#7e5e42")}p(o-.02,.31,2.68,1.13,.088,c),Oe(i,{text:"BAVARIA",position:h(-342.2,3.07,1.24),size:[5.9,.55],outward:[0,-1],color:"#f5e5ca",fontFamily:"Georgia, serif",lighting:"backlit"}),Av(i,t,e)}}function Av(i,t,e){const o=e(-332.9,-27.7)+.13;for(const a of[-1,1]){const l=-332.9+a*1.05;t.beam([l,o,-27.7],[l,o+2.58,-27.7],.08,"#606564")}const r=[[-332.9-1.12,-27.7-.05],[-332.9+1.12,-27.7-.05],[-332.9+1.12,-27.7+.05],[-332.9-1.12,-27.7+.05]];t.shell(r,o+1.61,o+2.64,"#593b2a");for(const a of[1.87,2.12,2.38])t.beam([-332.9-1.1,o+a,-27.7+.05],[-332.9+1.1,o+a,-27.7+.05],.008,"#492b21");t.beam([-332.9+.2,o+2.64,-27.7],[-332.9+.28,o+2.95,-27.7+.13],.029,"#31302f"),t.beam([-332.9+.23,o+2.95,-27.7+.13],[-332.9+.35,o+2.95,-27.7+.15],.052,"#31302f"),Oe(i,{text:"BAVARIA",position:[-332.9,o+2.26,-27.7+.061],size:[1.98,.42],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffc882"}),Oe(i,{text:"GRILL&BAR",position:[-332.9,o+1.98,-27.7+.061],size:[1.2,.21],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",spill:!1})}function Rv(i,t,e){const n=[-278.9,-35.55],s=[-260.3,-39.94],o=Math.hypot(s[0]-n[0],s[1]-n[1]),r=[(s[1]-n[1])/o,(n[0]-s[0])/o],a=_t(n,s,.61),l=(e.lowerWaterfront??e)(...a),c=(p,_=0)=>{const[g,m]=_t(n,s,p);return[g+_*r[0],m+_*r[1]]},h=(p,_,g=0)=>{const[m,v]=c(p,g);return[m,l+_,v]},f="#59606a",u="#313a43";t.wall(n,s,l+.13,l+3.39,f),t.wall(c(0,.022),c(1,.022),l+2.61,l+3.39,u);const d=[0,.1,.2,.3,.4,.49,.56,.66,.73,.82,.91,1];for(let p=1;p<d.length;p++){const _=d[p-1],g=d[p],m=p===7;t.wall(c(_,.038),c(g,.038),l+(m?.34:.63),l+2.6,m?"#334955":"#6b8596"),t.beam(h(_,m?.33:.62,.08),h(_,2.62,.08),.085,u),m||t.beam(h(_,2.11,.064),h(g,2.11,.064),.058,u)}t.beam(h(1,.62,.08),h(1,2.62,.08),.085,u),Oe(i,{text:"Хинкальная",position:h(.61,2.92,.051),size:[5.54,.56],outward:r,fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#e6f1ff"}),Oe(i,{text:"грузинская  Кафе  европейская",position:h(.61,3.26,.051),size:[4.06,.17],outward:r,fontFamily:"Georgia, serif",color:"#fff4e1",lighting:"spot",spill:!1})}function Cv(i,t,e){const{id:n,rings:[s]}=t,o=bv[n];if(!o&&n!=="223949008")return!1;const r=n==="223949008"?"Вино и море":n==="223948908"?"Причал":o.name??`Набережная, ${o.address}`,a=me(i,r,{surfaces:{glass:[Jl,"#687c86","#45534a","#4e6355","#587273","#354d50","#4b5351","#35494d","#475958","#334955","#6b8596"],wood:["#755336","#79573b","#765d41","#8b6c4b","#7e5e42","#88684d","#795b45","#916e49","#968477","#593b2a"],foliage:["#345c46","#40694d"],stone:["#b2a798","#b5a58c","#aa9c80","#aaa293"],flatRoof:[o?.roof,"#b6b2a5","#777e7b","#929895"],metal:["#244945","#302723","#484740","#323a3e"]}});return n==="223949008"?yv(i,a,s,e):n==="223948908"?Sv(i,a,s,e,o.height):(Ev(a,s,e,o),(n==="223948904"||n==="223948906")&&Tv(i,a,e,n==="223948904"),n==="223948913"&&Rv(i,a,e)),a.finish(),!0}function Pv(i,t,e,n,s){const o=new de;o.name="Вода фонтана «Старинная Анапа»",o.position.set(t,e,n),i.add(o);const r=new zc(new F(.32,.08,0),new F(1.12,2.25,0),new F(1.95,.07,0)),a=new wo(r,24,.025,5,!1),l=new bn({color:"#b5e9ea",transparent:!0,opacity:.55,depthWrite:!1});for(let g=0;g<8;g++){const m=new re(a,l);m.rotation.y=-g*Math.PI/4,o.add(m)}const c=7,h=new yi(new vn(.065,6,4),new bn({color:"#e6ffff",transparent:!0,opacity:.86,depthWrite:!1}),8*c);h.instanceMatrix.setUsage(Mf),h.frustumCulled=!1,o.add(h);const f=new Gc(.96,1,40),u=Array.from({length:3},()=>{const g=new bn({color:"#d9fbfa",transparent:!0,opacity:.3,side:nn,depthWrite:!1}),m=new re(f,g);return m.rotation.x=-Math.PI/2,m.position.y=.012,o.add(m),m}),d=new we,p=new F;function _(g){for(let m=0;m<8;m++){const v=m*Math.PI/4;for(let M=0;M<c;M++){const x=(g*.53+M/c+m*.029)%1;r.getPoint(x,p),d.position.set(p.x*Math.cos(v),p.y,p.x*Math.sin(v));const S=.65+.35*Math.sin(Math.PI*x);d.scale.setScalar(S),d.updateMatrix(),h.setMatrixAt(m*c+M,d.matrix)}}h.instanceMatrix.needsUpdate=!0,u.forEach((m,v)=>{const M=(g*.34+v/u.length)%1;m.scale.setScalar(.55+M*2.05),m.material.opacity=.33*(1-M)})}_(0),s.push(_)}const Mn="#e9e5d8",Ru="#d8c7a9",is="#7a7c75",Zc="#517789",Qs="#d8ded9";function Ar(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=Math.sign(t),c=r*l/a,h=-o*l/a;return{a:e,b:s,length:a,nx:c,nz:h,point(f,u=0){return[e[0]+o*f/a+c*u,e[1]+r*f/a+h*u]}}})}function Ke(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function ze(i,t,e,n,s,o,r,a=.045){i.wall(t.point(e,a),t.point(n,a),s,o,r)}function Cu(i,t,e,n,{spacing:s,fraction:o,sill:r,top:a,glass:l}){const c=Math.max(1,Math.round(t.length/s)),h=t.length/c;for(let f=0;f<n;f++){const u=e+f*2.7;for(let d=0;d<c;d++){const p=(d+.5)*h,_=h*o/2;ze(i,t,p-_-.08,p+_+.08,u+r-.08,u+a+.08,Mn),ze(i,t,p-_,p+_,u+r,u+a,l,.065),ze(i,t,p-.026,p+.026,u+r,u+a,Mn,.083)}}}function Ql(i,[t,e],n,s,o){const r=a=>Array.from({length:10},(l,c)=>{const h=c*Math.PI/5;return[t+o*a*Math.cos(h),e+o*a*Math.sin(h)]});i.shell(r(1.27),n,n+.13,Mn),i.shell(r(1),n+.13,s-.2,Mn,null),i.shell(r(1.21),s-.2,s,Mn)}function Lv(i,t,e,n){const s=Ar(t).filter(j=>j.length>.1),o=Ue(t)[1],r=s.filter(({a:j,b:Mt,length:lt,nz:ct})=>lt>27&&ct<-.8&&(j[1]+Mt[1])/2<o-5).sort((j,Mt)=>Math.min(j.a[0],j.b[0])-Math.min(Mt.a[0],Mt.b[0]));if(r.length<2)return!1;const a=r[0].a,l=r.at(-1).b,c=l[0]-a[0],h=l[1]-a[1],f=Math.hypot(c,h),u={length:f,nx:h/f,nz:-c/f,point(j,Mt=0){return[a[0]+c*j/f+this.nx*Mt,a[1]+h*j/f+this.nz*Mt]}},d=8.6,p=me(i,"Старинная Анапа",{surfaces:{glass:[Zc,"#648591","#63767a","#4b5553","#5a625c"],flatRoof:[is],stone:["#a89b85"],metal:["#484b47","#535a58"]}}),_=e(...u.point(u.length/2,.7))+.08,g=Math.min(_-.15,...t.map(j=>e(...j)-.25)),m=_+3.3,v=_+11.55,M=_+11.9;p.flat(Ke(u,0,u.length,.8,8.2),_-.045,"#bbb7aa");for(let j=0;j<u.length;j+=.8)p.flat(Ke(u,j,Math.min(j+.024,u.length),.8,8.2),_-.037,"#aaa99f");for(let j=1.6;j<8.2;j+=.8)p.flat(Ke(u,0,u.length,j,j+.024),_-.037,"#aaa99f");p.shell(t,g,_+.26,"#a89b85",null),p.shell(t,_+.26,v,Ru,null),p.shell(t,v,M,Mn,is);for(const j of s){if(j.length<4.8)continue;const Mt=j.nz>.55;Cu(p,j,m,3,{spacing:Mt?3.4:3.12,fraction:Mt?.73:.57,sill:Mt?.49:.74,top:2.28,glass:Mt?"#648591":"#63767a"}),r.includes(j)||Cu(p,j,_+.26,1,{spacing:3.3,fraction:.58,sill:.55,top:2.62,glass:"#4b5553"})}for(const j of[u]){const Mt=j.length-.3,lt=Ke(j,.3,Mt,-.1,.95);p.shell(lt,_+.35,m,"#524940",null);const ct=j===u?m-.83:m,z=j===u?m+.36:m+.24;p.shell(Ke(j,0,j.length,-.15,j===u?1.49:1.22),ct,z,Mn);const $=Math.round(j.length/2.12);for(let pt=0;pt<$;pt++){const bt=.3+pt*(Mt-.3)/$,H=.3+(pt+1)*(Mt-.3)/$;ze(p,j,bt+.07,H-.07,_+.44,m-.1,"#5a625c",.971),ze(p,j,bt+.018,bt+.088,_+.44,m-.1,"#a0906d",.989)}}const x=u.length/2,S=x-6.2,b=x+6.2;ze(p,u,x-1.18,x+1.18,_+.3,m-.16,"#393f3d",1.015);for(const j of[-1.18,0,1.18])ze(p,u,x+j-.035,x+j+.035,_+.3,m-.16,"#a0906d",1.03);for(const[j,Mt]of[[-.83,-.76],[.29,.36]])p.shell(Ke(u,0,u.length,1.49,1.55),m+j,m+Mt,Mn);const[w,y]=u.point(x,1.505);Oe(i,{text:"СТАРИННАЯ АНАПА",position:[w,m-.58,y],size:[16,.78],outward:[u.nx,u.nz],color:"#a0803f",weight:600,fontFamily:"Georgia, serif",letterSpacing:"16px",lighting:"spot",glowColor:"#ffddad"});for(const j of[-4.95,-1.65,1.65,4.95])Ql(p,u.point(x+j,1.17),_+.16,m,.21),Ql(p,u.point(x+j,.85-d),m+.24,v-.08,.33);for(let j=0;j<3;j++){const Mt=m+.24+j*2.7;for(const lt of[x-3.3,x,x+3.3]){const ct=Ke(u,lt-1.23,lt+1.23,-d-.03,-d+.54);p.shell(ct,Mt,Mt+.14,Mn);for(const z of[.28,1.03])ze(p,u,lt-1.21,lt+1.21,Mt+z,Mt+z+.045,"#484b47",.55-d);for(let z=-5;z<=5;z++){const $=lt+z*.22;ze(p,u,$,$+.036,Mt+.27,Mt+1.04,"#484b47",.55-d)}}}p.shell(Ke(u,S,b,-.08-d,1.2-d),v-.09,M+.39,Mn);const E=(j,Mt)=>[j[0],Mt,j[1]],A=M+.39,L=M+2.24,P=E(u.point(x,1.2-d),L),C=E(u.point(x,-3.5-d),L),D=E(u.point(S,1.2-d),A),I=E(u.point(b,1.2-d),A);p.face(Mn,D,I,P),p.face(is,D,P,C,E(u.point(S,-3.5-d),A)),p.face(is,P,I,E(u.point(b,-3.5-d),A),C),p.face(Ru,E(u.point(S,-3.5-d),A),C,E(u.point(b,-3.5-d),A));for(const j of[-1.83,-.61,.61,1.83]){const Mt=x+j,lt=M+.02,ct=Array.from({length:10},(z,$)=>{const pt=Math.PI/2+$*Math.PI/5,bt=$%2?.105:.245;return E(u.point(Mt+Math.cos(pt)*bt,1.225-d),lt+Math.sin(pt)*bt)});for(let z=0;z<ct.length;z++)p.face("#a99973",E(u.point(Mt,1.225-d),lt),ct[z],ct[(z+1)%ct.length])}for(const j of r)for(const[Mt,lt]of j===u?[[.25,S],[b,j.length-.25]]:[[.25,j.length-.25]]){ze(p,j,Mt,lt,M+.39,M+.45,"#535a58",-.2);for(let ct=Mt;ct<lt;ct+=1.7)ze(p,j,ct,ct+.04,M,M+.45,"#535a58",-.2)}const k=Ke(u,x-19,x+19,7.9,17.5);p.flat(k,_-.09,"#bbb7aa");const[G,X]=u.point(x,13.3),V=_-.09,J=j=>Array.from({length:32},(Mt,lt)=>{const ct=lt*Math.PI/16;return[G+Math.cos(ct)*j,X+Math.sin(ct)*j]});p.shell(J(3.1),V-.12,V+.34,"#c5bfb2"),p.flat(J(2.75),V+.35,"#68a6ad"),p.shell(J(.27),V+.35,V+.43,"#c5bfb2"),Pv(i,G,V+.36,X,n);for(const j of[x-13,x+13]){const Mt=Ke(u,j-1.05,j+1.05,6,6.5);p.shell(Mt,_+.38,_+.48,"#4b4540");for(const lt of[-.8,.8]){const[ct,z]=u.point(j+lt,6.25);p.beam([ct,_-.04,z],[ct,_+.4,z],.08,"#484b47")}}p.finish();const it=as(new ee({color:"#776952"}),{surface:"wood"}),vt=as(new ee({color:"#728e5e",flatShading:!0}),{surface:"foliage"});for(const[j,Mt]of[[x-20,10],[x+20,10]]){const[lt,ct]=u.point(j,Mt),z=e(lt,ct),$=new re(new Cn(.25,.39,4.8,7),it);$.position.set(lt,z+2.4,ct);const pt=new re(new hs(3.1,1),vt);pt.scale.set(1.05,1.18,.92),pt.position.set(lt,z+6.7,ct),$.castShadow=pt.castShadow=!0,i.add($,pt)}return!0}function jl(i,t,e,n,s,o=!1){for(const r of Ar(t))if(!(r.length<.35||o&&r.nz>.25))for(let a=0;a<n;a++){const l=e+a*2.62+.42,c=e+(a+1)*2.62-.31,h=Math.max(1,Math.round(r.length/1.48));for(let f=0;f<h;f++){const u=(f+.065)*r.length/h,d=(f+.935)*r.length/h;ze(i,r,u,d,l,c,Zc),ze(i,r,u,d,l+(c-l)*.63,l+(c-l)*.63+.056,s,.067)}}}function Rr(i,t,e,n,s,o,r,a,l=1.35){const c=Math.max(1,Math.round((n-e)/l)),h=(n-e)/c;ze(i,t,e,n,s,o,a);for(let f=0;f<c;f++){const u=e+f*h+.045,d=u+h-.09;ze(i,t,u,d,s+.05,o-.05,r,.065),ze(i,t,u,d,o-.53,o-.48,a,.081)}}function bd(i,t,e,n,s,o,r){for(const l of[.45,.98])ze(i,t,e,n,s+l,s+l+.055,r,o);const a=Math.max(1,Math.ceil((n-e)/1.6));for(let l=0;l<=a;l++){const c=e+(n-e)*l/a,[h,f]=t.point(c,o);i.beam([h,s,f],[h,s+1.025,f],.06,r)}}function wd(i,t,e,n,s,o,r,a){const l=(h,f,u)=>{const[d,p]=t.point(h,f);return[d,u,p]},c=Math.ceil((n-e)/.69);for(let h=0;h<c;h++){const f=e+h*(n-e)/c,u=e+(h+1)*(n-e)/c,d=h%2?r:a;i.face(d,l(f,0,s),l(u,0,s),l(u,o,s-.47),l(f,o,s-.47)),ze(i,t,f,u,s-.62,s-.47,d,o)}}function Dv(i,t,e,n){const s=e.length*.46,o=s-5.25,r=s+5.25,a=n+.59,l=a+2.65;i.shell(Ke(e,o,r,-.08,4.55),n-.22,n,"#d7c7a9");for(let u=0;u<4;u++)i.shell(Ke(e,o+u*.27,r-u*.27,0,2.42-u*.48),n+u*.1475,n+(u+1)*.1475,"#dacbad");Rr(i,e,s-2.65,s+2.65,a,l-.13,"#354f52","#dbc693",.88);for(const u of[-4.34,4.34])Ql(i,e.point(s+u,2.81),n,l,.17);const c=[[o,0],[r,0],[r,2.26],[r-.62,2.86],[r-2.17,3.26],[o+2.17,3.26],[o+.62,2.86],[o,2.26]];i.shell(c.map(([u,d])=>e.point(u,d)),l,l+.31,Mn,is);const[h,f]=e.point(s,3.28);Oe(t,{text:"Капитан",position:[h,l+.6,f],size:[3.1,.56],outward:[e.nx,e.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"})}function Iv(i,t,e){if(t.length!==17)return!1;const n=me(i,"Капитан",{surfaces:{glass:[Zc,"#54777f","#3f5e66"],flatRoof:[is,"#987561"],stone:["#a39881"]}}),s=t.slice(2,12),o=[t[2],...t.slice(11,16)],r=[...t.slice(0,3),...t.slice(15)],a=e.lowerWaterfront??e,l=Math.min(...t.map(x=>a(...x)))-.25,c=Math.min(...s.map(x=>a(...x)))+.12,[h,f]=Ar(o).slice(1,3),u=Ar(r).at(-1),d=e(...u.point(u.length*.46,4.55)),p=e(...f.point(f.length/2,2)),_=p+2.89;n.shell(t,l,c+.27,"#a39881",null),n.shell(o,c+.27,_,Qs,null),n.shell(o.map(x=>_t(Ue(o),x,1.032)),_,_+.28,Qs,"#987561"),jl(n,o,c+.1,2,Qs),Rr(n,h,.38,h.length-.38,c+5.48,_-.12,"#54777f","#cedad5",1.67),ze(n,h,.38,h.length-.38,p-.06,p+.05,Qs,.083);const g=Ke(h,.3,h.length-.3,-.07,1.03);n.shell(g,c+2.68,c+2.84,"#c3bfb4"),bd(n,h,.38,h.length-.38,c+2.84,.97,"#afb5b0"),wd(n,h,.35,h.length-.35,c+5.36,1.24,"#b6a481","#d5c8a5"),Rr(n,f,1.03,f.length-.6,p+.14,_-.12,"#3f5e66",Qs),n.shell(Ke(f,.48,f.length-.12,0,1.26),_-.1,_+.32,Mn);const[m,v]=f.point(f.length*.57,1.28);Oe(i,{text:"Кафе Капитан",position:[m,_+.18,v],size:[5.2,.57],outward:[f.nx,f.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"}),n.shell(s,c+.27,c+7.52,Qs,null);const M=s.map(x=>_t(Ue(s),x,1.046));return n.shell(M,c+7.52,c+7.85,Mn,is),jl(n,s,c-.03,3,Mn,!0),n.shell(r,c+.27,d+3.62,"#d9be8b",is),Dv(n,i,u,d),n.finish(),!0}const Uv={170958817:{number:1,roof:"#8a8f8d",wall:"#d5cbb6",frame:"#c8d4d2"},223948923:{number:5,roof:"#aca99d",wall:"#658195",frame:"#deddd3"},223948927:{number:7,roof:"#aaa492",wall:"#bcb29a",frame:"#dfd8bf"}};function Nv(i,t,e,{number:n,roof:s,wall:o,frame:r}){const a=me(i,`Набережная, ${n}`,{surfaces:{glass:[Zc,"#526870","#6c858b"],flatRoof:[s,"#c4c7c2"],stone:["#a99e88"]}}),l=e.lowerWaterfront??e,c=Ar(t).filter(_=>_.nz<-.52),h=c.map(_=>l(..._.point(_.length/2))),f=t.map(_=>l(..._)),u=Math.min(...f)-.25,d=Math.min(...h.length?h:f)+.11,p=d+5.51;if(a.shell(t,u,d+.27,"#a99e88",null),a.shell(t,d+.27,p,o,null),a.shell(t.map(_=>_t(Ue(t),_,1.02)),p,p+.24,r,s),n===1)jl(a,t,d+.15,2,r,!0);else for(const _ of c){const g=_.length-.36;if(Rr(a,_,.36,g,d+.42,d+2.71,"#526870",r),Rr(a,_,.36,g,d+3.03,p-.23,"#6c858b",r,1.47),n===5){const m=Ke(_,.15,_.length-.15,0,1.57);a.shell(m,d-.12,d+.41,"#aea69c");const v=Ke(_,.05,_.length-.05,0,1.68);a.shell(v,d+2.75,d+3.07,"#276583","#c4c7c2"),ze(a,_,.19,_.length*.47,d+2.77,d+3.06,r,1.7);const M=_.length*.22;bd(a,_,M+2.3,g,d+.41,1.48,"#c2c7c3"),a.shell(Ke(_,.15,M+2.28,1.54,2.01),d-.12,d+.23,"#a49e96");for(const x of[.33,_.length*.51,g])a.shell(Ke(_,x-.12,x+.12,1.32,1.56),d+.41,d+2.75,o)}else ze(a,_,.36,g,d+3.12,d+3.21,"#bc9d58",.085),wd(a,_,.26,_.length-.26,p-.05,1.42,"#c8a851","#f0e6ca")}return a.finish(),!0}function Fv(i,t,e,n=[]){if(t.id==="r11979734-0")return Lv(i,t.rings[0],e,n);if(t.id==="156055903")return Iv(i,t.rings[0],e);const s=Uv[t.id];return s?Nv(i,t.rings[0],e,s):!1}function Ov(i,t){const[e,n]=Ni[1],s=t(e,n),o=Math.cos(Fi),r=Math.sin(Fi),a=[r,-o],l=(x,S,b)=>[e+x*o+b*r,s+S,n+x*r-b*o];if(Oe(i,{text:"ГОРГИППИЯ",position:l(2.55,1.68,.345),size:[.39,.58],outward:a,color:"#3c3021",background:"#b99b62",weight:600,lighting:"unlit"}),typeof document>"u")return;const c=3.56,h=.65,f=document.createElement("canvas");f.width=768,f.height=Math.round(f.width*h/c);const u=f.getContext("2d");if(!u)return;const d="АРХЕОЛОГИЧЕСКИЙ МУЗЕЙ";u.font="600 39px system-ui, sans-serif";const p=Array.from(d,x=>u.measureText(x).width),_=f.width*.92,g=(_-p.reduce((x,S)=>x+S,0))/(d.length-1);let m=(f.width-_)/2;u.fillStyle="#292726",u.textAlign="center",u.textBaseline="middle";for(let x=0;x<d.length;x++){const S=m+p[x]/2,b=(S-f.width/2)/f.width;u.fillText(d[x],S,42+278*b**2),m+=p[x]+g}const v=new Nc(f);v.colorSpace=tn,v.anisotropy=4;const M=new re(new oi(c,h),new ee({map:v,alphaTest:.35}));M.name=d,M.position.set(...l(0,3.31,.066)),M.rotation.y=Math.atan2(...a),i.add(M)}const{Color:xn,Vector2:Bv,Vector3:V0}=z0,Le=24,Ed=4,zv=2;function Td(i,t,e){return i.refinesStairs(t,e,Le)?zv:i.refines(t,e,Le)?Ed:Le}const Di={land:"#c6b899",beach:"#e0c893",park:"#8da371",water:"#6eabb5",pier:"#c5bdae",plaza:"#d0c1aa",ruins:"#aea27e",road:"#989891",path:"#d9ccb6",tree:"#7b9367",shingle:"#aaa495",rockLight:"#a59172",riprap:"#898a78",quay:"#aca99e"},Pu=["#c6b9a5","#b0aca1","#b8a08b","#ddd3ba","#9a9c93"],kv=["#e9deca","#ded6c7","#d6c5ad","#e4d8bf","#d8d6c7"],W0=new Set(["footway","pedestrian","steps","cycleway","path","track"]),Lu=new Set(["223948926"]),Gv=[Sx,yx,iv,fv,Mv,Cv,Fv,pv];function ui(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function fr(i){const t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function $o(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function Hv(i,t,e=ud(i)){const{bounds:[n,s,o,r],columns:a,rows:l,heights:c}=t,[h,f]=i.origin,[u,d]=i.scale;function p(b,w){const y=le.clamp((h+b/u-n)/(o-n)*(a-1),0,a-1),E=le.clamp((r-f+w/d)/(r-s)*(l-1),0,l-1),A=Math.min(Math.floor(y),a-2),L=Math.min(Math.floor(E),l-2),P=L*a+A,C=le.lerp(c[P],c[P+1],y-A),D=le.lerp(c[P+a],c[P+a+1],y-A);return Math.max(.16,le.lerp(C,D,E-L))}function _(b,w){const y=new Map,E=(A,L)=>{const P=`${A}:${L}`;return y.has(P)||y.set(P,b(A,L)),y.get(P)};return(A,L)=>{const P=w(A,L),C=Math.floor(A/P)*P,D=Math.floor(L/P)*P,I=(A-C)/P,k=(L-D)/P,G=E(C+P,D),X=E(C,D+P);return I+k<=1?E(C,D)*(1-I-k)+G*I+X*k:E(C+P,D+P)*(I+k-1)+G*(1-k)+X*(1-I)}}const g=O_(i),m=_((b,w)=>g(b,w,p(b,w)),()=>Le),v=_((b,w)=>e.height(b,w,m),(b,w)=>Td(e,Math.floor(b/Le)*Le,Math.floor(w/Le)*Le)),M=(b,w)=>e.waterfront.nearEdge(b,w)||e.nearTransition(b,w)?e.height(b,w,m):v(b,w);return Object.assign(M,{plain:m,faceHeight:(b,w,y)=>y?e.height(b,w,m,y):M(b,w),lowerWaterfront:(b,w)=>e.waterfront.lowerGrade(b,w,M(b,w))})}function Un(i=!1){const t=[],e=[],n=i?[]:null;return{triangle(s,o,r,a,l){t.push(...s,...o,...r),n&&n.push(...l);for(const c of[s,o,r]){const h=typeof a=="function"?a(...c):a;e.push(h.r,h.g,h.b)}},mesh(s,o=nn){const r=new Re;r.setAttribute("position",new ne(t,3)),r.setAttribute("color",new ne(e,3)),n&&r.setAttribute("facadeGrid",new ne(n,3)),r.computeVertexNormals();const a=new re(r,new ee({vertexColors:!0,side:o}));return a.name=s,a.receiveShadow=!0,a}}}function _n(i,t,e=1){return as(i.material,{surface:t,strength:e}),i}function Vv(i){const t=i.material;return t.customProgramCacheKey=()=>"district-facade-grid",t.onBeforeCompile=e=>{e.uniforms.facadeEnabled=Yc.cartoonEnabled,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
      `)},_n(i,"plaster")}function Ad(i){const t=i.map(s=>s.map(([o,r])=>new Bv(o,r))),e=Ui.triangulateShape(t[0],t.slice(1)),n=t.flat().map(({x:s,y:o})=>[s,o]);return e.map(s=>s.map(o=>n[o]))}function t0(i,t,e,n){const[s,o,r]=t,a=(o[0]-s[0])*(r[1]-s[1])-(o[1]-s[1])*(r[0]-s[0]);if(Math.abs(a)<1e-4)return;const l=([c,h])=>[c,e(c,h),h];i.triangle(l(s),l(a>0?r:o),l(a>0?o:r),n)}function Ii(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l])}}return e}function Wv(i,t,e,n){let s=Ii(i,o=>o[0]-t);return s=Ii(s,o=>t+n-o[0]),s=Ii(s,o=>o[1]-e),Ii(s,o=>e+n-o[1])}function Rd(i,t,e,n,s,o=!1){const[r,a,l,c]=fr(t);for(let h=Math.floor(r/Le)*Le;h<l;h+=Le){let f=Ii(t,u=>u[0]-h);if(f=Ii(f,u=>h+Le-u[0]),!(f.length<3))for(let u=Math.floor(a/Le)*Le;u<c;u+=Le){let d=Ii(f,_=>_[1]-u);if(d=Ii(d,_=>u+Le-_[1]),d.length<3)continue;const p=Td(s,h,u);for(let _=h;_<h+Le;_+=p)for(let g=u;g<u+Le;g+=p){const m=p===Le?d:Wv(d,_,g,p);if(!(m.length<3))for(const v of[1,-1]){const M=Ii(m,([S,b])=>v*(_+g+p-S-b));if(M.length<3)continue;const x=o?s.waterfront.split(M):null;if(!x){for(let S=2;S<M.length;S++)t0(i,[M[0],M[S-1],M[S]],e,n);continue}for(const{ring:S,side:b}of x){const w=(y,E)=>e(y,E,b);for(let y=2;y<S.length;y++)t0(i,[S[0],S[y-1],S[y]],w,n)}}}}}}function js(i,t,e,n,s,o=!1){for(const r of Ad(t))Rd(i,r,e,n,s,o)}function Du(i,t=[.36,.28]){const[e,n]=t;return i.material.customProgramCacheKey=()=>`promenade-${e}-${n}`,i.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      `)},i}function Cd(i,t){return i.kind==="pier"||i.bridge?.85:t.waterfront.upperWidths[i.id]||t.waterfront.lowerWidths[i.id]||i.level?.15:W0.has(i.kind)?.35:.31}function Xv(i,t,e,n){const{points:s,kind:o,id:r}=t,a=n.promenadeWidths.get(r)??t.width,l=n.stairHeight(t,e.plain);if(l){qv(i,s,a,l);return}const c=W0.has(o),h=n.waterfront.upperWidths[r]||t.level==="upper",f=n.waterfront.lowerWidths[r]||t.level==="lower",u=new xn(h?"#cec7b8":f?"#b8b3a7":n.promenadeWidths.has(r)?"#c5c3b8":o==="pier"?Di.pier:c?Di.path:Di.road),d=Cd(t,n),p=(_,g,m)=>(n.rampHeight(t,_,g)??e.faceHeight(_,g,m))+d;for(let _=1;_<s.length;_++){const[g,m]=s[_-1],[v,M]=s[_],x=v-g,S=M-m,b=Math.hypot(x,S);if(b<.05)continue;const w=-S*a/(2*b),y=x*a/(2*b);Rd(i,[[g+w,m+y],[v+w,M+y],[v-w,M-y],[g-w,m-y]],p,u,n,!0)}}function Pd(i,t,{from:e,to:n,run:s}){const o=i.slice(1).map(([l,c],h)=>Math.hypot(l-i[h][0],c-i[h][1])),r=o.reduce((l,c)=>l+c,0);let a=0;return o.flatMap((l,c)=>{if(l<.04)return[];const[h,f]=i[c],u=i[c+1][0]-h,d=i[c+1][1]-f,p=a/r;a+=l;const _=a/r,g=[p,...s.filter(v=>v>p&&v<_),_],m=v=>le.lerp(e,n,le.clamp((v-s[0])/(s[1]-s[0]),0,1));return g.slice(1).map((v,M)=>{const x=g[M],S=(x-p)/(_-p),b=(v-x)/(_-p),w=m(x),y=m(v),E=Math.max(1,Math.round(Math.abs(y-w)/.17)),A=L=>le.lerp(w,y,L/E)+.15;return{x:h+u*S,z:f+d*S,dx:u*b,dz:d*b,length:l*b,width:t,count:E,height:A}})})}function qv(i,t,e,n){const s=new xn("#c5bdb0"),o=new xn("#a69d90");for(const{x:r,z:a,dx:l,dz:c,length:h,count:f,height:u}of Pd(t,e,n)){const d=-c*e/(2*h),p=l*e/(2*h),_=(g,m,v)=>[r+l*g+d*v,m,a+c*g+p*v];for(let g=0;g<f;g++){const m=g/f,v=(g+1)/f,M=u(g),x=u(g+1),S=_(m,M,1),b=_(m,M,-1),w=_(v,M,-1),y=_(v,M,1),E=_(v,x,-1),A=_(v,x,1);i.triangle(S,b,w,s),i.triangle(S,w,y,s),i.triangle(y,w,E,o),i.triangle(y,E,A,o)}}}function Yv(i,t){const e=i.surveyedStairs.flatMap(n=>Pd(n.points,n.width,i.stairHeight(n,t.plain)));return(n,s)=>{if(i.nearTransition(n,s)){for(const o of e){const{x:r,z:a,dx:l,dz:c,length:h,width:f,count:u,height:d}=o,p=((n-r)*l+(s-a)*c)/(h*h),_=((s-a)*l-(n-r)*c)/h;if(p>=0&&p<=1&&Math.abs(_)<f/2)return d(Math.min(u-1,Math.floor(p*u)))}for(const o of i.ramps)if($o(n,s,[o.bounds[0]-o.width,o.bounds[1]-o.width,o.bounds[2]+o.width,o.bounds[3]+o.width])&&$e(n,s,o.points).distance<o.width/2)return i.rampHeight(o,n,s)+Cd(o,i)}}}function Zv(i,t,e,n){const s=t.buildings.find(c=>c.id==="170958806");if(!e||!s)return;const[o]=fr(s.rings[0]),r=[];for(let c=1;c<e.length;c++){const[h,f]=e[c-1],[u,d]=e[c],p=u-h,_=d-f,g=Math.hypot(p,_);for(let m=.8;m<g;m+=1.42){const v=h+p*m/g,M=f+_*m/g;if(!(v<o-122||v>-161.9))for(const x of[.9,2.15,3.4]){const S=Math.sin(m*6.13+c*13.7+x)*.35,b=v+_*(x+S)/g,w=M-p*(x+S)/g,y=n(b,w);y<2.55&&t.land.some(E=>ui(b,w,E))&&r.push([b,y,w,S])}}}const a=new yi(new hs(1,0),new ee({color:"#ada79a",flatShading:!0}),r.length);a.name="Каменная отсыпка у нижней набережной";const l=new we;r.forEach(([c,h,f,u],d)=>{l.position.set(c,h-.05,f),l.scale.set(.72+u*.5,.32+u*.31,.53-u*.3),l.rotation.set(u,d*1.71,u*1.3),l.updateMatrix(),a.setMatrixAt(d,l.matrix),a.setColorAt(d,new xn().setScalar(.8+d%7*.055))}),a.receiveShadow=!0,i.add(_n(a,"stone"))}function $v(i,t,e){const n=i.mesh("Terrain"),{position:s,normal:o}=n.geometry.attributes,r=new V0,a=3.2;for(let l=0;l<s.count;l++){if(o.getY(l)<.05)continue;const c=s.getX(l),h=s.getZ(l);if(e.waterfront.nearEdge(c,h))continue;const f=Math.floor(c/Le)*Le,u=Math.floor(h/Le)*Le;e.refines(f,u,Le)&&(r.set(t(c-a,h)-t(c+a,h),2*a,t(c,h-a)-t(c,h+a)).normalize(),o.setXYZ(l,r.x,r.y,r.z))}return o.needsUpdate=!0,n}function Iu(i,t,e,n=null){const{rings:s,height:o,id:r}=t,a=Number(String(r).match(/\d+$/)?.[0]??0)%Pu.length,l=new xn(Pu[a]),c=new xn(kv[a]),h=Math.max(...s[0].map(([p,_])=>e(p,_))),f=h+o,u=Math.max(1,Math.round(o/3.15)),d=o/u;for(const p of Ad(s))t0(i,p,()=>f,l);for(const[p,_]of s.entries()){const m=_.reduce((v,[M,x],S)=>{const[b,w]=_[(S+1)%_.length];return v+M*w-b*x},0)>0==p>0?_:_.slice().reverse();for(let v=0;v<m.length;v++){const[M,x]=m[v],[S,b]=m[(v+1)%m.length],w=[M,e(M,x)-.2,x],y=[S,e(S,b)-.2,b],E=[S,f,b],A=[M,f,x];if(n){const L=Math.hypot(S-M,b-x),P=Math.max(1,Math.round(L/3.2)),C=L>2.2&&o>2.65?1:0,D=[0,(w[1]-h)/d,C],I=[P,(y[1]-h)/d,C],k=[P,u,C],G=[0,u,C];n.triangle(w,y,E,c,[...D,...I,...k]),n.triangle(w,E,A,c,[...D,...k,...G])}else i.triangle(w,y,E,c),i.triangle(w,E,A,c)}}}function Kv(i,t,e){if(!t.length)return;const n=new yi(new Cn(.15,.24,2.4,5),new ee({color:"#776952"}),t.length),s=new yi(new hs(1,1),new ee({color:Di.tree,flatShading:!0}),t.length),o=new we;t.forEach(([r,a],l)=>{const c=1.5+l*17%13*.11,h=e(r,a);o.position.set(r,h+1.2,a),o.scale.set(1,1,1),o.updateMatrix(),n.setMatrixAt(l,o.matrix),o.position.y=h+2.6+c*.35,o.scale.set(c,c*1.23,c),o.rotation.y=l*1.4,o.updateMatrix(),s.setMatrixAt(l,o.matrix),s.setColorAt(l,new xn().setScalar(.77+l*11%7*.047))}),s.castShadow=!0,s.receiveShadow=!0,i.add(_n(n,"wood",.75),_n(s,"foliage",1))}function Jv(i,t){const[e,n,s,o]=t,r={time:{value:0},evening:{value:0},sun:{value:new V0(-.6,.55,-.5).normalize()},haze:{value:new xn("#b3d5d5")},cartoonEnabled:Yc.cartoonEnabled,...x_()},a=new Pn({uniforms:r,vertexShader:`
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
    `}),l=Math.max(s-e,o-n)*4,c=new re(new oi(l,l),a);return c.rotation.x=-Math.PI/2,c.position.set((e+s)/2,-.18,(n+o)/2),i.add(c),r}function Qv(i,t,e){const n=new rd({canvas:i,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1;const s=new y0,o=[];s.fog=new Dc("#b3d5d5",900,3200),s.background=new xn("#b3d5d5");const r=ud(t),a=Hv(t,e,r),l=Jv(s,t.bounds),c=Un(),h=new xn(Di.land),f=Object.fromEntries(["shingle","rockLight","riprap","quay"].map(B=>[B,new xn(Di[B])])),u=new xn;function d(B,Z,at){const xt=r.tone(B,at,Z);if(!xt)return h;const[yt,At]=xt;return u.copy(h).lerp(f[yt],At)}const p=t.areas.some(({id:B})=>B===_u),_=p?Kx(a):null,g=fr(Ss),m=(B,Z)=>p&&$o(B,Z,g)&&ui(B,Z,Ss);for(const B of t.land){const Z=p&&Ss.every(([at,xt])=>ui(at,xt,B))?[Ss]:[];js(c,[B,...Z],a.faceHeight,d,r,!0);for(let at=0;at<B.length;at++){const[xt,yt]=B[at],[At,Bt]=B[(at+1)%B.length],O=r.refines(xt,yt,Le)?Ed:12,$t=Math.max(1,Math.ceil(Math.hypot(At-xt,Bt-yt)/O));for(let Xt=0;Xt<$t;Xt++){const U=[xt+(At-xt)*Xt/$t,yt+(Bt-yt)*Xt/$t],T=[xt+(At-xt)*(Xt+1)/$t,yt+(Bt-yt)*(Xt+1)/$t],K=[U[0],a(...U),U[1]],Q=[T[0],a(...T),T[1]],ut=[U[0],-.4,U[1]],Et=[T[0],-.4,T[1]];c.triangle(K,ut,Q,d),c.triangle(Q,ut,Et,d)}}}const v=Un(),M=Un(),x=Un(),S={beach:.13,park:.14,plaza:.2,ruins:.22,water:.24,pier:.7};for(const B of t.areas){if(B.id===_u)continue;const Z=B.kind==="beach"&&(B.id==="368318892"||["pebblestone","gravel"].includes(B.surface)),at=new xn(Z?Di.shingle:Di[B.kind]??Di.park),xt=(At,Bt,O)=>a.faceHeight(At,Bt,O)+(S[B.kind]??.14),yt=B.kind==="pier"||B.kind==="plaza"?M:B.kind==="park"?x:v;js(yt,B.rings,xt,at,r,!0)}const b=Un(),w=Un(),y=Un(),E=Un(),A=new xn("#c7c1b7"),L=new xn("#b4ad9e"),P=[];for(const B of r.waterfront.sections){for(const Z of B.upperDecks)P.push(Z),js(E,[Z],(xt,yt)=>a.faceHeight(xt,yt,{section:B,upper:!0})+.12,A,r);for(const Z of B.lowerDecks)js(y,[Z],(xt,yt)=>a.faceHeight(xt,yt,{section:B,upper:!1})+.12,L,r)}for(const B of r.allRoads){const Z=r.waterfront.upperWidths[B.id]&&!(B.id in r.waterfront.rampLevels),at=r.waterfront.lowerWidths[B.id],xt=Z?E:at?y:W0.has(B.kind)||B.kind==="pier"?w:b;Xv(xt,B,a,r)}const C=Un(),D=Un(),I=Un(!0),k=[Vo.west,Vo.north,Vo.east,Vo.south];for(const B of t.buildings)if(!Lu.has(B.id)){if(B.id==="125813145")mx(s,B,a);else if(!Gv.some(Z=>Z(s,B,a,o))){const[Z,at,xt,yt]=fr(B.rings[0]);$o((Z+xt)/2,(at+yt)/2,k)?Iu(D,B,a,I):Iu(C,B,a)}}const G=C.mesh("OSM building footprints",ei);G.castShadow=!0;const X=Vv(I.mesh("Фасады квартала",ei)),V=_n(D.mesh("Крыши квартала",ei),"flatRoof");if(X.castShadow=V.castShadow=!0,s.add(_n($v(c,a,r),"ground"),_n(v.mesh("OSM surfaces"),"ground"),_n(M.mesh("Площади и причалы"),"paving"),_n(x.mesh("Скверы"),"foliage",.65),_n(Du(y.mesh("Плитка нижней набережной"),[.24,.22]),"laidPaving"),_n(Du(E.mesh("Плитка верхней набережной")),"laidPaving"),_n(w.mesh("Пешеходные дорожки"),"paving",.8),_n(b.mesh("OSM streets"),"road",.8),G,V,X),p){const B=Un();Fx(s,a,(at,xt,yt)=>js(B,at,xt,yt,r)),s.add(_n(B.mesh("Раскоп Горгиппии · уровни грунта"),"ground",.88));const Z=Un();_.render(s,(at,xt,yt)=>js(Z,at,xt,yt,r)),s.add(_n(Z.mesh("Горгиппия · покрытия дорожек"),"paving",.7))}Kv(s,t.trees,a),gx(s,t,a),ov(s,a),Ov(s,a),X_(s,a),sx(s,a),lx(s,a),Zv(s,t,r.gorgWater,a),k_(s,r,a),R_(s,a),L_(s,a);const J=w_(s,a),it=new U0("#eefbff","#b0a48b",1.65),vt=new O0("#fff5dd",2.25),[j,Mt,lt,ct]=t.bounds,z=Math.max(lt-j,ct-Mt)*.62;vt.target.position.set((j+lt)/2,0,(Mt+ct)/2),vt.castShadow=!0,vt.shadow.mapSize.set(2048,2048),Object.assign(vt.shadow.camera,{left:-z,right:z,top:z,bottom:-z,near:1,far:5300}),vt.shadow.camera.updateProjectionMatrix(),vt.shadow.normalBias=1,vt.shadow.bias=-15e-5,s.add(it,vt,vt.target);function $(B){const Z=B==="sunset";J.setEnabled(Z),l.evening.value=Z?1:0;const at=Z?"#8993b4":"#b3d5d5";s.background.set(at),s.fog.color.set(at),l.haze.value.set(at),it.color.set(Z?"#becdf9":"#eefbff"),it.groundColor.set(Z?"#736b86":"#b0a48b"),it.intensity=Z?.73:1.65,vt.color.set(Z?"#ffc18c":"#fff5dd"),vt.intensity=Z?.81:2.25;const xt=Z?[-.95,.23,-.44]:[-.6,1,-.5];vt.position.copy(vt.target.position).add(new V0(...xt).multiplyScalar(1800)),l.sun.value.set(...xt).normalize(),n.shadowMap.needsUpdate=!0}$("day");const pt=new Map,bt=60,H=(B,Z)=>`${B}:${Z}`;for(const{id:B,rings:Z}of t.buildings){if(Lu.has(B))continue;const[at,xt,yt,At]=fr(Z[0]);for(let Bt=Math.floor(at/bt);Bt<=Math.floor(yt/bt);Bt++)for(let O=Math.floor(xt/bt);O<=Math.floor(At/bt);O++){const $t=H(Bt,O);pt.has($t)||pt.set($t,[]),pt.get($t).push({id:B,rings:Z,bounds:[at,xt,yt,At]})}}const ht=(B,Z)=>t.land.some(at=>ui(B,Z,at)),dt=t.areas.filter(B=>B.kind==="pier"),Y=Yv(r,a);function tt(B,Z){if(!$o(B,Z,t.bounds)||!ht(B,Z)&&!dt.some(({rings:yt})=>ui(B,Z,yt[0]))||ui(B,Z,G_)||ui(B,Z,dd))return null;const at=_?.walkHeight(B,Z,m(B,Z));return at===null||(pt.get(H(Math.floor(B/bt),Math.floor(Z/bt)))??[]).some(({id:yt,rings:At,bounds:Bt})=>!$o(B,Z,Bt)||!ui(B,Z,At[0])||r.waterfront.deckRoofs.has(yt)&&P.some(O=>ui(B,Z,O))?!1:!At.slice(1).some(O=>ui(B,Z,O)))?null:at??Y(B,Z)??a(B,Z)}return{renderer:n,scene:s,terrain:a,light:$,walkHeight:tt,setCartoon:g_,walkable:(B,Z)=>tt(B,Z)!==null,render(B,Z){l.time.value=Z;for(const at of o)at(Z);J.update(B),n.render(s,B)}}}const jv=new Set(["motorway","trunk","primary","secondary","tertiary","unclassified","residential","living_street","service"]);function t5({kind:i,access:t}){return i!=="steps"&&t?.car!==!1&&(jv.has(i)||t?.car===!0)}function e0(i,t,e){return(t-i.x)*i.ux+(e-i.z)*i.uz}function Uu(i,t,e){const n=Math.min(i.length,Math.max(0,e0(i,t,e)));return(t-i.x-n*i.ux)**2+(e-i.z-n*i.uz)**2}function e5(i,t,e){return i.road.barriers?.some(n=>{if(n.car!==!1)return!1;const[s,o]=n.position;return Math.hypot(t-s,e-o)<i.radius+.7&&Math.abs((t-s)*i.ux+(e-o)*i.uz)<.65})}function n5(i){const t=new Map,e=[],n=32,s=h=>Math.floor(h/n),o=(h,f)=>`${h}:${f}`;for(const h of i){const f=t5(h),u=h.access?.bicycle===!1,d=h.kind==="steps"||u||h.barriers?.length;if(!f&&!d)continue;const p=h.width/2;for(let _=1;_<h.points.length;_++){const[g,m]=h.points[_-1],[v,M]=h.points[_],x=v-g,S=M-m,b=Math.hypot(x,S);if(b<.01)continue;const w={x:g,z:m,ux:x/b,uz:S/b,length:b,radius:p,road:h,car:f,bikeCheck:d};f&&e.push(w);for(let y=s(Math.min(g,v)-p);y<=s(Math.max(g,v)+p);y++)for(let E=s(Math.min(m,M)-p);E<=s(Math.max(m,M)+p);E++){const A=o(y,E);t.has(A)||t.set(A,[]),t.get(A).push(w)}}}const r=(h,f)=>t.get(o(s(h),s(f)))??[];function a(h,f){let u=null,d=1/0;for(const p of r(h,f)){if(!p.car)continue;const _=e0(p,h,f);if(_<-.005||_>p.length+.005)continue;const g=Uu(p,h,f),m=Math.max(.4,p.radius-.45);g>m**2||g>=d||e5(p,h,f)||(d=g,u=p.road)}return u}function l(h,f){let u=!1;for(const d of r(h,f)){if(!d.bikeCheck||Uu(d,h,f)>d.radius**2)continue;const{road:p}=d;if(p.access?.bicycle===!1){if(p.access?.foot===!1)return"blocked";u=!0}p.kind==="steps"&&(u=!0);for(const _ of p.barriers??[])if(!(_.bicycle!==!1||Math.hypot(h-_.position[0],f-_.position[1])>.65)){if(_.foot===!1)return"blocked";u=!0}}return u?"push":"ride"}function c([h,f],u){let d=null,p=1/0;for(const _ of e){const g=e0(_,h,f);for(const m of[0,-4,4,-12,12]){const v=Math.min(_.length,Math.max(0,g+m)),M=_.x+_.ux*v,x=_.z+_.uz*v,S=(M-h)**2+(x-f)**2;if(S>=p)continue;const b=u(M,x);b!==null&&(p=S,d={x:M,z:x,height:b,heading:Math.atan2(_.ux,-_.uz)})}}return d}return{carAt:a,bicycleAt:l,nearestCarStart:c}}const{MathUtils:i5,Vector3:vc}=z0,s5=new vc(0,1,0);function En(i){return new ee({color:i,flatShading:!0})}function Fe(i,t,e,n=[0,0,0]){const s=new re(t,e);return s.position.set(...n),i.add(s),s}function Nn(i,t,e,n,s){const o=new vc(...t),r=new vc(...e),a=r.clone().sub(o),l=Fe(i,new Cn(n,n,a.length(),10),s);return l.position.copy(o).lerp(r,.5),l.quaternion.setFromUnitVectors(s5,a.normalize()),l}function co(i,t,e,n){const s=new Bc(t.map(o=>new vc(...o)));return Fe(i,new wo(s,14,e,8),n)}function Nu(i,t,e){const n=t.flat(2),s=t[0].length,o=[];for(let a=0;a<t.length-1;a++)for(let l=0;l<s-1;l++){const c=a*s+l;o.push(c,c+1,c+s,c+1,c+s+1,c+s)}const r=new Re;return r.setAttribute("position",new ne(n,3)),r.setIndex(o),r.computeVertexNormals(),Fe(i,r,e)}function o5(i){const t=En("#4ca9ab"),e=En("#283a3e"),n=En("#18292b"),s=En("#acbfc0"),o=En("#e5af59"),r=new de,a=new de;i.add(r),r.add(a),Nn(r,[0,-.3,-.27],[0,-.78,.4],.073,t),Nn(a,[0,0,.09],[0,-.3,-.25],.049,s),Nn(a,[0,-.31,-.25],[0,-.43,-.36],.066,t);for(const h of[-1,1]){const f=u=>u*h;Nn(a,[f(.066),-.34,-.27],[f(.061),-.82,-.57],.038,t),co(a,[[0,0,.09],[f(.24),.012,.11],[f(.43),.075,.18],[f(.75),.09,.25]],.033,s),Nn(a,[f(.52),.079,.2],[f(.78),.092,.26],.052,e);for(const u of[.55,.61,.67,.73,.77]){const d=.205+(u-.53)*.21;Nn(a,[f(u),.081,d],[f(u+.015),.082,d+.004],.055,n)}co(a,[[f(.48),.055,.16],[f(.54),.038,.04],[f(.69),.038,.1]],.018,s),co(a,[[f(.48),.045,.15],[f(.35),-.18,-.08],[f(.07),-.4,-.28]],.009,n)}const l=Fe(a,new xi(.35,.042,8,32),n,[0,-.82,-.57]);l.rotation.y=Math.PI/2;const c=Fe(a,new xi(.3,.014,6,32),s,[0,-.82,-.57]);return c.rotation.y=Math.PI/2,Nn(a,[-.075,-.82,-.57],[.075,-.82,-.57],.036,s),Fe(a,new Cn(.062,.067,.045,16),o,[-.37,.122,.14]),Nn(a,[-.38,.115,.16],[-.45,.105,.2],.012,o),r.position.set(0,-.48,-1.5),{group:r,front:a}}function r5(i){const t=En("#eee1ba"),e=En("#9b916c"),n=En("#303536"),s=En("#b7b8ab"),o=En("#202526"),r=En("#e7dbc2"),a=En("#f58b63"),l=new de,c=new de,h=new de;i.add(l),l.add(c,h),Nu(l,[[[-1.52,-.8,-1.12],[-.84,-.73,-1.12],[-.1,-.67,-1.12],[.66,-.68,-1.12],[1.38,-.74,-1.12],[1.98,-.82,-1.12]],[[-1.36,-.8,-2.25],[-.72,-.75,-2.25],[-.06,-.69,-2.25],[.65,-.7,-2.25],[1.32,-.76,-2.25],[1.85,-.83,-2.25]],[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[-.04,-.83,-3.28],[.65,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]]],t),co(l,[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[.3,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]],.014,e);for(const f of[-.77,1.3])co(l,[[f,-.75,-1.42],[f,-.737,-2.14],[f*.93,-.844,-3.05]],.009,e);for(const f of[-.64,.38])Nn(l,[f,-.65,-1.69],[f+.48,-.65,-1.76],.014,n),Nn(l,[f+.23,-.65,-1.72],[f+.47,-.7,-1.5],.01,s);Nu(l,[[[-1.9,-.89,-.67],[-.77,-.83,-.67],[.08,-.8,-.67],[.91,-.84,-.67],[2.05,-.89,-.67]],[[-1.92,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],[[-1.93,-.77,-1.56],[-.74,-.7,-1.56],[.07,-.67,-1.56],[.94,-.72,-1.56],[2.08,-.8,-1.56]]],n),co(l,[[-1.9,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],.018,s),Fe(l,new Pe(2.12,.14,.065),s,[.52,-.65,-1.37]),Fe(l,new Pe(.86,.24,.16),n,[-.25,-.55,-1.43]),Fe(l,new Pe(.8,.177,.019),s,[-.25,-.55,-1.337]),Fe(l,new Pe(.75,.143,.015),o,[-.25,-.55,-1.32]),Fe(l,new Pe(.44,.046,.004),r,[-.25,-.519,-1.31]);for(let f=0;f<=16;f++){const u=-.455+f*.0255,d=f%2===0?.017:.008;Fe(l,new Pe(.0035,d,.004),o,[u,-.497-d/2,-1.305])}for(const f of[-.542,.038])Fe(l,new Pe(.088,.036,.004),r,[f,-.524,-1.31]),Nn(l,[f-.026,-.536,-1.304],[f+.01,-.51,-1.304],.0027,a);for(let f=0;f<6;f++){const u=En(["#b44e37","#95764c","#a44536","#548159","#a58746","#5b8798"][f]);Fe(l,new Pe(.037,.018,.004),u,[-.42+f*.066,-.579,-1.308])}for(const f of[.43,.67]){Fe(l,new Pe(.17,.105,.025),o,[f,-.645,-1.316]);for(let u=0;u<4;u++)Fe(l,new Pe(.15,.007,.01),s,[f,-.676+u*.019,-1.3])}h.position.set(-.453,-.518,-1.299),Fe(h,new Pe(.008,.035,.006),a),c.position.set(-.25,-.63,-1.1),Fe(c,new xi(.295,.023,10,44),n),Fe(c,new xi(.219,.008,6,36,Math.PI),s,[0,0,.022]).rotation.z=Math.PI;for(const f of[-1,1])Nn(c,[f*.061,-.018,.01],[f*.287,.01,0],.025,n),Nn(c,[f*.073,-.015,.035],[f*.212,.003,.023],.008,s);return Fe(c,new bo(.079,24),n,[0,0,.038]),Fe(c,new xi(.033,.004,6,20),s,[0,0,.042]),Fe(c,new Pe(.034,.024,.006),En("#a75444"),[0,0,.044]),{group:l,wheel:c,gaugeNeedle:h}}function a5(){const i=new y0,t=new en(58,1,.04,10),e=new U0("#f7f7e9","#9ea8af",1.4),n=new O0("#fff2d8",2);n.position.set(-2,4,2),i.add(e,n);const s=o5(i),o=r5(i);let r=0,a="";function l(c,{mode:h,aspect:f,turn:u,speed:d,time:p,delta:_,reducedMotion:g}){if(a!==h&&(r=0,a=h),s.group.visible=h==="bike",o.group.visible=h==="car",!s.group.visible&&!o.group.visible)return;t.aspect!==f&&(t.aspect=f,t.updateProjectionMatrix()),r=g?u:i5.damp(r,u,12,_);const m=Math.min(1,f/1.22),v=.1*(1-m);s.group.visible?(s.group.scale.x=m,s.group.position.y=-.48+v,g||(s.group.position.y+=Math.sin(p*11)*Math.min(.008,Math.abs(d)*.0015)),s.front.rotation.y=-r*.28,s.front.rotation.z=-r*.045):(o.group.scale.x=m,o.group.position.y=v,o.wheel.rotation.z=-r*.74,o.gaugeNeedle.position.x=-.453+Math.min(1,Math.abs(d)*3.6/160)*.407);const M=c.autoClear;c.autoClear=!1;try{c.clearDepth(),c.render(i,t)}finally{c.autoClear=M}}return{render:l}}function c5(i){const t=new de;t.name="ВАЗ-2101 «Копейка»",t.visible=!1,i.add(t);const e=new cr({color:"#eee1ba",shininess:54,specular:"#a9a49b"}),n=new cr({color:"#c9cacc",shininess:90,specular:"#f2f5f4"}),s=new ee({color:"#35342f"}),o=new ee({color:"#232528"}),r=new cr({color:"#527176",shininess:68,specular:"#3b535a",side:nn}),a=new ee({color:"#fff5d5",emissive:"#422d0d"}),l=new ee({color:"#ecaa38"}),c=new ee({color:"#b92d23"}),h=new ee({color:"#a53830"});function f(C,D,[I,k,G],X=t){const V=new re(C,D);return V.position.set(I,k,G),X.add(V),V}const u=(C,D,I,k,G,X,V,J)=>f(new Pe(C,D,I),V,[k,G,X],J);function d(C,D,I,k){const G=new F(...C),X=new F(...D);f(new Pe(I,I,G.distanceTo(X)),k,G.clone().add(X).multiplyScalar(.5).toArray()).lookAt(X)}function p(C){const D=new Re;D.setAttribute("position",new ne(C.flat(),3)),D.setIndex([0,1,2,0,2,3]),D.computeVertexNormals(),f(D,r,[0,0,0]),C.forEach((I,k)=>d(I,C[(k+1)%C.length],.026,n))}const _=new kc;_.moveTo(1.99,.42),_.lineTo(1.99,.8),_.lineTo(1.75,.89),_.lineTo(.71,.92),_.lineTo(-1.14,.89),_.lineTo(-1.98,.78),_.lineTo(-1.99,.39),_.lineTo(-1.62,.33);for(const C of[-1.212,1.212]){_.lineTo(C-.353,.29);for(let D=1;D<=12;D++){const I=Math.PI-D*Math.PI/12;_.lineTo(C+Math.cos(I)*.353,.29+Math.sin(I)*.337)}}_.lineTo(1.99,.42);const g=f(new Lr(_,{depth:1.49,bevelSize:.035,bevelThickness:.045,bevelSegments:2,steps:1}),e,[-.745,0,0]);g.rotation.y=Math.PI/2;const m=[-.724,.924,-.75],v=[.724,.924,-.75],M=[-.723,.891,1.13],x=[.723,.891,1.13],S=[-.609,1.414,-.43],b=[.609,1.414,-.43],w=[-.609,1.414,.72],y=[.609,1.414,.72];p([m,v,b,S]),p([x,M,w,y]),p([M,m,S,w]),p([v,x,y,b]),u(1.25,.047,1.2,0,1.423,.145,e);for(const C of[-1,1]){d([C*.72,.915,.16],[C*.618,1.41,.16],.044,e),d([C*.782,.688,-1.83],[C*.782,.688,1.83],.017,n);for(const D of[-.53,.39,1.12])d([C*.783,.426,D],[C*.783,.88,D],.009,s);for(const D of[.035,.91])u(.032,.033,.139,C*.791,.793,D,n);d([C*.74,.925,-1.23],[C*.84,1.021,-1.23],.024,n),C<0&&u(.148,.069,.061,-.846,1.037,-1.23,n),d([C*.6,.935,-.8],[C*.62,.855,-1.92],.013,n)}u(1.44,.228,.035,0,.704,-2.002,n),u(1.38,.192,.023,0,.704,-2.023,s);for(let C=0;C<6;C++)u(1.35,.008,.019,0,.627+C*.03,-2.039,n);u(.085,.09,.022,0,.704,-2.053,h);for(const C of[-1,1]){const D=C*.556;f(new Cn(.136,.136,.038,24),n,[D,.712,-2.036]).rotation.x=Math.PI/2,f(new Cn(.113,.113,.035,24),a,[D,.712,-2.057]).rotation.x=Math.PI/2,u(.173,.061,.028,D,.528,-2.023,l),u(.234,.128,.035,D,.669,2.014,n),u(.208,.101,.029,D,.669,2.037,c),u(.068,.097,.035,D+C*.066,.669,2.051,l);for(const I of[-2.058,2.047])u(.072,.133,.092,C*.457,.392,I,s)}u(1.62,.079,.112,0,.394,-2.054,n),u(1.62,.079,.112,0,.394,2.043,n),u(.3,.103,.028,0,.535,2.035,s),u(.26,.065,.012,0,.535,2.052,n),d([-.48,.93,-.759],[-.16,.955,-.745],.016,s),d([.12,.93,-.759],[.45,.955,-.745],.016,s);const E=[];for(const C of[-1.212,1.212])for(const D of[-1,1]){const I=new de;I.position.set(D*.69,.288,C),t.add(I);const k=new de;I.add(k);const G=(X,V,J,it)=>f(new Cn(X,X,V,20),it,[J,0,0],k).rotation.z=Math.PI/2;G(.289,.198,0,o),G(.207,.024,D*.101,e),G(.135,.027,D*.123,n),G(.054,.029,D*.142,s),E.push({pivot:I,wheel:k,steer:C<0})}const A=f(new bo(1,28),new bn({color:"#263137",transparent:!0,opacity:.24,depthWrite:!1}),[0,.031,0]);A.rotation.x=-Math.PI/2,A.scale.set(.96,2.08,1);const L=new en(49,1,.22,4800),P=new F;return{cameraFor(C,{active:D,yaw:I,speed:k,turn:G,delta:X,terrain:V,angle:J,height:it,distance:vt}){if(t.visible=D,!D)return C;const j=C.position.y-1.45;t.position.set(C.position.x,j,C.position.z),t.rotation.y=-I;for(const{pivot:lt,wheel:ct,steer:z}of E)z&&(lt.rotation.y=-G*.3),ct.rotation.x-=k*X/.289;t.updateMatrixWorld(!0);const Mt=vt*Math.max(1,.72/C.aspect);return t.localToWorld(L.position.set(Math.sin(J)*Mt,it,Math.cos(J)*Mt)),L.position.y=Math.max(L.position.y,V(L.position.x,L.position.z)+1.8),L.lookAt(t.localToWorld(P.set(0,.83,-Math.max(0,Math.cos(J))*1.1))),L.aspect!==C.aspect&&(L.aspect=C.aspect,L.updateProjectionMatrix()),L}}}const l5=new F(0,1,0),Ul=new F,Ma=new F;function Gn(i,t,e,n=[0,0,0]){const s=new re(t,e);return s.position.set(...n),i.add(s),s}function Ko(i,t,e){Ul.set(...t),Ma.set(...e).sub(Ul),i.position.copy(Ul).addScaledVector(Ma,.5),i.scale.y=Ma.length(),i.quaternion.setFromUnitVectors(l5,Ma.normalize())}function We(i,t,e,n,s){const o=Gn(i,new Cn(n,n,1,8),s);return Ko(o,t,e),o}function h5(i){const t=new de;t.name="Велосипед с велосипедистом",t.visible=!1,i.add(t);const e=X=>new ee({color:X,flatShading:!0}),n=e("#4ca9ab"),s=e("#1d2b2c"),o=e("#b4c1b8"),r=e("#3b4240"),a=e("#eee1ba"),l=e("#415760"),c=e("#cd9478"),h=e("#e5af59"),f=[0,.345,.54],u=[0,.92,-.38],d=[0,.39,.055],p=[0,.94,.21],_=new de;_.position.set(...u),t.add(_);const g=.321;function m(X,V){const J=new de;J.position.set(...V),X.add(J),Gn(J,new xi(g,.024,8,36),s).rotation.y=Math.PI/2,Gn(J,new xi(.297,.008,6,36),o).rotation.y=Math.PI/2,We(J,[-.047,0,0],[.047,0,0],.017,o);for(let it=0;it<14;it++){const vt=it*Math.PI/7;We(J,[it%2?.025:-.025,0,0],[0,Math.sin(vt)*.295,Math.cos(vt)*.295],.0026,o)}return J}const v=m(t,f),M=m(_,[0,-.575,-.17]);We(t,d,p,.027,n),We(t,d,[0,.78,-.36],.029,n),We(t,[0,.85,.195],[0,.86,-.37],.023,n),We(t,[0,.77,-.36],u,.036,n);for(const X of[-1,1]){const V=[X*.046,f[1],f[2]];We(t,[X*.033,.8,.19],V,.012,n),We(t,[X*.036,d[1],d[2]],V,.015,n),We(_,[X*.036,-.15,.026],[X*.043,-.575,-.17],.016,n),We(_,[0,.095,.042],[X*.34,.125,.13],.014,o),We(_,[X*.26,.119,.112],[X*.36,.13,.134],.022,s)}We(_,[0,0,0],[0,.095,.042],.022,o),Gn(_,new Cn(.028,.031,.025,12),h,[-.23,.146,.103]),Gn(t,new vn(1,12,8),r,[0,.95,.208]).scale.set(.082,.022,.123),We(t,[-.12,d[1],d[2]],[.12,d[1],d[2]],.015,o);const S=[0,1.34,-.074],b=[0,.96,.22],w=Gn(t,new vn(1,12,8),a,[0,1.16,.065]);w.scale.set(.16,.232,.118),w.rotation.x=-.63,Gn(t,new vn(1,12,8),l,b).scale.set(.138,.085,.104),We(t,[0,1.31,-.087],[0,1.45,-.169],.059,c),Gn(t,new vn(.093,12,8),c,[0,1.49,-.167]).scale.y=1.11,Gn(t,new vn(1,14,9),h,[0,1.554,-.178]).scale.set(.113,.075,.121),Gn(t,new vn(1,12,8),r,[0,1.541,-.271]).scale.set(.093,.017,.041);const L=[-1,1].map(X=>{const V=[X*.118,S[1],S[2]],J=[X*.225,1.17,-.16],it=[X*.31,1.05,-.25],vt=[X*.095,b[1],b[2]],j=[X*.14,.71,-.21],Mt=[X*.12,d[1],d[2]];return{side:X,elbow:J,forearm:We(t,J,it,.031,c),sleeve:We(t,V,J,.045,a),thigh:We(t,vt,j,.057,l),shin:We(t,j,Mt,.041,l),crankArm:We(t,[X*.085,d[1],d[2]],Mt,.012,o),shoe:Gn(t,new Pe(.084,.058,.163),r,Mt)}}),P=Gn(t,new bo(1,22),new bn({color:"#203138",transparent:!0,opacity:.16,depthWrite:!1}),[0,.027,0]);P.rotation.x=-Math.PI/2,P.scale.set(.245,.87,1);const C=new en(52,1,.18,4800),D=new F,I=new F;let k=0,G=0;return{cameraFor(X,{active:V,yaw:J,speed:it,turn:vt,delta:j,terrain:Mt,angle:lt,height:ct,distance:z}){if(t.visible=V,!V)return X;t.position.set(X.position.x,X.position.y-1.65+.12,X.position.z),t.rotation.y=-J,_.rotation.y=-vt*.34,_.updateMatrix();const $=it*j/(g+.024);k=(k-$)%(Math.PI*2),G=(G-$*.4)%(Math.PI*2),v.rotation.x=M.rotation.x=k;for(const{side:bt,elbow:H,forearm:ht,thigh:dt,shin:Y,crankArm:tt,shoe:B}of L){I.set(bt*.316,.125,.126).applyMatrix4(_.matrix),Ko(ht,H,I.toArray());const Z=G+(bt>0?Math.PI:0),at=[bt*.123,d[1]+.143*Math.cos(Z),d[2]+.143*Math.sin(Z)],xt=[bt*.143,.68+.078*Math.cos(Z),-.216+.035*Math.sin(Z)];Ko(dt,[bt*.095,b[1],b[2]],xt),Ko(Y,xt,at),Ko(tt,[bt*.085,d[1],d[2]],at),B.position.set(at[0],at[1]+.018,at[2]-.038)}t.updateMatrixWorld(!0);const pt=z*.59*Math.max(1,.62/X.aspect);return t.localToWorld(C.position.set(Math.sin(lt)*pt,ct*.68,Math.cos(lt)*pt)),C.position.y=Math.max(C.position.y,Mt(C.position.x,C.position.z)+1.4),C.lookAt(t.localToWorld(D.set(0,.8,-Math.max(0,Math.cos(lt))*.52))),C.aspect!==X.aspect&&(C.aspect=X.aspect,C.updateProjectionMatrix()),C}}}const Ji=document.querySelector("#world"),Fu=document.querySelector("#status"),Jo=i=>[...document.querySelectorAll(`[data-${i}]`)].filter(t=>t instanceof HTMLButtonElement),Ou=(i,t)=>{for(const e of Jo(i))e.setAttribute("aria-pressed",String(e.dataset[i]===t))};async function Bu(i){const t=await fetch(`./data/${i}.json`);if(!t.ok)throw new Error(`Не удалось загрузить ${i} (${t.status}).`);return t.json()}function u5(i,t){const{Vector3:e,MathUtils:n}=z0,s=Qv(Ji,i,t),o=n5(i.roads),r=a5(),a=c5(s.scene),l=h5(s.scene),c=new en(46,1,.35,4800),h=new q3(c,Ji),f=matchMedia("(prefers-reduced-motion: reduce)").matches;h.enableDamping=!f,h.dampingFactor=.13,h.minDistance=28,h.maxDistance=3300,h.maxPolarAngle=Math.PI*.48,h.zoomSpeed=.8,h.screenSpacePanning=!1;const[u,d,p,_]=i.bounds,[g,m]=i.origin,[v,M]=i.scale,x=document.querySelector("#compass"),S=document.querySelector("#coordinates"),b=document.querySelector("#vehicle-speed"),w=document.querySelector("#cartoon-style"),y=document.querySelector("#vehicle-view"),E=document.querySelector("#superman-flight"),A=document.querySelector("#mode-help"),L=document.querySelector("#places"),P=document.querySelector("#venues"),C=document.querySelector("#pins"),D={orbit:"Стрелки или WASD — лететь. Shift — ускорение. Тяните, чтобы повернуть карту. Колесо — масштаб.",walk:"WASD или стрелки — идти. Shift — бег. Тяните по сцене, чтобы оглянуться.",bike:"Стрелки или WASD — движение и руль. V — сменить камеру. На лестнице — пешком.",car:"↑/↓ или W/S — газ и задний ход. ←/→ или A/D — руль. V — сменить камеру.",map:"Север вверху. Тяните карту, чтобы сдвинуть её."},I={walk:{eye:1.75,fov:68},bike:{eye:1.65,fov:70,speed:6.8,reverse:2.2,steer:1.9},car:{eye:1.45,fov:73,speed:10.5,reverse:3.1,steer:1.6}},k={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},G=[{id:"paintedWaterfront",name:"Парк-отель — Анапа-Океан",position:[-376,-15],walk:{position:[-348,-36],look:[-278,-43]}},{id:"upperWaterfront",name:"Верхняя набережная",position:[-348,-13],walk:{position:[-349,-19.4],look:[-265,-22]}},{id:"lowerWaterfront",name:"Нижняя набережная",position:[-348,-36],look:[-278,-43]},{id:"queuePavilion",name:"Павильон «Очередь»",position:[-412.5,-21.7],walk:{position:[-414,-12],look:[-412,-21.7]}},{id:"pearlFountain",name:"Жемчужина Анапы",position:[-238,2],walk:{position:[-255,-5],look:[-238,2]}},{id:"gorgMuseum",name:"Музей «Горгиппия»",position:[-282,17],walk:{position:[-282,9],look:[-282,17],pitch:.17}},{id:"oldAnapa",name:"Старинная Анапа",position:[-503.2,-11.6],walk:{position:[-506,-38],look:[-503.2,-11.6],pitch:.13}},{id:"cityCourt",name:"Анапский городской суд",position:[-626,51],walk:{position:[-614,43],look:[-626,51],pitch:.1}}],V=["paintedWaterfront","lighthouse","malaya","port","ocean","oldAnapa","upperWaterfront","lowerWaterfront","queuePavilion","gorgippia","gorgMuseum","parkHotel","sails","pearlFountain","gates","beach","cityCourt"].map(N=>{const st=i.landmarks.find(Jt=>Jt.id===N)??G.find(Jt=>Jt.id===N);if(N==="parkHotel")return{...st,walk:{position:[-167,-27],look:[-169,-7.5],pitch:.58}};if(N==="ocean")return{...st,walk:{position:[-598,-33],look:[-589.7,-16],pitch:.12}};if(st?.id!=="sails")return st;const[ot,Tt]=oo,wt=m-Tt/M,Kt=g+ot/v;return{...st,position:oo,pinHeight:5.85,walk:{position:[-306,-22],look:oo},osm:`https://www.openstreetmap.org/#map=19/${wt.toFixed(6)}/${Kt.toFixed(6)}`}}).filter(Boolean),J={lighthouse:{aim:[-9,0],offset:[-146,115,102]},malaya:{aim:[-34,35],offset:[-219,151,-43]},ocean:{aim:[7,-6],offset:[-93,103,-176],raise:14},oldAnapa:{aim:[0,0],offset:[-17,15,-33],raise:3,mapAltitude:65},paintedWaterfront:{aim:[0,0],offset:[-55,240,-290],mapAltitude:465},upperWaterfront:{aim:[12,-10],offset:[-58,100,-155],mapAltitude:275},lowerWaterfront:{aim:[12,4],offset:[6,58,-118],mapAltitude:220},queuePavilion:{aim:[0,0],offset:[14,24,-46],mapAltitude:65},pearlFountain:{aim:[0,0],offset:[-11,16,-30],mapAltitude:52},gorgippia:{aim:[40,3],offset:[-13,94,-79],mapAltitude:127},gorgMuseum:{aim:[0,0],offset:[5,16,-28],mapAltitude:46},parkHotel:{aim:[-5,-6],offset:[-97,91,-155],raise:6},sails:{aim:[15,-1],offset:[13,31,-49],mapAltitude:69}},it={"Верхний ярус":[{id:"laVeranda",name:"La Veranda",position:[-595.6,-28.8],walk:{position:[-606,-53],look:[-606,-23],pitch:.13}},{...G.find(N=>N.id==="queuePavilion"),id:"queueCafe",name:"Queue"},{id:"more",name:"Море. Истории о еде",position:[-533,-25],walk:{position:[-533,-35],look:[-533,-25],pitch:.08}},{id:"barBQ",name:"BAR BQ",position:[-456.65,14],walk:{position:[-450,14],look:[-456.65,14],pitch:.08}}],"Нижний ярус":[{id:"captainCafe",name:"Капитан",position:[-530,-67],walk:{position:[-534.4,-79.5],look:[-530,-67],pitch:.15}},{id:"adrian",name:"Adrian Bistro",position:[-358,-30.5],walk:{position:[-359.7,-37.4],look:[-358,-30.5],pitch:.1}},{id:"bavaria",name:"Bavaria",position:[-342.2,-30.9],walk:{position:[-340,-38.1],look:[-342.2,-30.9],pitch:.13}},{id:"prichal",name:"Причал",position:[-303,-34.35],walk:{position:[-302,-40.2],look:[-303,-34.35],pitch:.2}},{id:"khinkal",name:"Хинкальная",position:[-267.5,-38.45],walk:{position:[-267.5,-44.35],look:[-267.5,-38.45],pitch:.18}},{id:"parokhod",name:"Пароходъ",position:[-229.8,-52.4],walk:{position:[-232.74,-59.75],look:[-229.8,-52.4],pitch:.34}},{id:"wineSea",name:"Вино и море",position:[-175,-54],walk:{position:[-184,-48],look:[-175,-54],pitch:.2}}]};J.queueCafe=J.queuePavilion,J.more={aim:[0,0],offset:[-13,17,-34],raise:1.3,mapAltitude:67},J.laVeranda={aim:[0,0],offset:[-12,16,-28],raise:2,mapAltitude:52},J.barBQ={aim:[0,0],offset:[25,11,-14],raise:1.3,mapAltitude:58};for(const N of it["Нижний ярус"])J[N.id]={aim:[0,0],offset:[-9,12,-32],raise:1.8,mapAltitude:60};J.wineSea.offset=[-27,13,-12];const vt=i.landmarks.find(N=>N.id==="gorgippia")?.position??[(u+p)/2,(d+_)/2],j=i.landmarks.find(N=>N.id==="lighthouse")?.position??vt,Mt=new e,lt=new e,ct=new e,z=new e,$=new Set,pt=new Map,bt=new Set,H=new Map,ht=[];let dt="orbit",Y=null,tt=0,B=0,Z=0,at=0,xt=!1;const yt=new Set,At=()=>yt.has(dt);let Bt=-.43,O=2.8,$t=5.9,Xt=null,U="";function T(N,st){const ot=(m-st/M).toFixed(5),Tt=(g+N/v).toFixed(5),wt=`${ot}/${Tt}`;wt!==U&&(U=wt,S.textContent=`${ot}° N  ${Tt}° E`,S.href=`https://www.openstreetmap.org/#map=18/${wt}`,S.title="Показать эту точку в OpenStreetMap")}function K(N,st=!1){const ot=st?J[Y?.id]:void 0,Tt=dt==="orbit"||ot?.mapAltitude?ot:void 0,wt=N[0]+(Tt?.aim[0]??0),Kt=N[1]+(Tt?.aim[1]??0),Jt=s.terrain(wt,Kt)+(Tt?.raise??0);if(h.target.set(wt,Jt,Kt),dt==="map"){const ue=(Tt?.mapAltitude??(st?440:1220))/Math.min(1,c.aspect*(Tt?.mapAltitude?.7:1.2));c.position.set(wt,Jt+Math.min(3200,ue),Kt+.1)}else{const ue=1/Math.min(1,c.aspect*(Tt?.mapAltitude?.67:1.4)),[pe,xe,De]=Tt?.offset??(st?[-148,150,-209]:[-345,350,-485]);c.position.set(wt+pe*ue,Jt+xe*ue,Kt+De*ue)}h.update()}function Q(N,st){if(dt==="bike"&&o.bicycleAt(N,st)==="blocked")return null;const ot=dt==="car"?o.carAt(N,st):null;if(dt==="car"&&!ot)return null;const Tt=s.walkHeight(N,st);return Tt===null||!ot?Tt:Tt+(ot.bridge?.85:.31)}function ut([N,st],ot){let Tt=null,wt=1/0;const Kt=s.terrain(N,st);for(const{points:Jt,kind:ue}of i.roads)if(["footway","pedestrian","path","living_street","steps"].includes(ue))for(let pe=1;pe<Jt.length;pe++){const[xe,De]=Jt[pe-1],[Ln,dn]=Jt[pe],bi=Ln-xe,Bn=dn-De,us=bi*bi+Bn*Bn;if(us<.01||ot&&ue!=="pedestrian")continue;const Dr=((N-xe)*bi+(st-De)*Bn)/us,Ir=Math.sqrt(us);for(const As of ot?[-42,-30,30,42]:[0,-8,8]){const To=n.clamp(Dr+As/Ir,0,1),Yn=xe+bi*To,wi=De+Bn*To,Gi=Math.hypot(Yn-N,wi-st);if(Gi<(ot?24:5)||Gi>90)continue;const Ur=Gi+(ot?4*Math.abs(s.terrain(Yn,wi)-Kt):0);Ur>=wt||Q(Yn,wi)!==null&&(ot&&![4,10,18].every(Nr=>Q(Yn+(N-Yn)*Nr/Gi,wi+(st-wi)*Nr/Gi)!==null)||(wt=Ur,Tt=[Yn,wi]))}}return Tt}function Et(N,st){const[ot,Tt]=st?.look??N;let wt=st&&Q(...st.position)!==null?st.position:null;wt??=ut(N,N===j)??ut(N,!1);for(let Jt=4;!wt&&Jt<=96;Jt+=4)for(let ue=0;!wt&&ue<Math.PI*2;ue+=Math.PI/8){const pe=ot+Math.cos(ue)*Jt,xe=Tt+Math.sin(ue)*Jt;Q(pe,xe)!==null&&(wt=[pe,xe])}if(!wt)return!1;c.position.set(wt[0],Q(...wt)+I[dt].eye,wt[1]),tt=Math.atan2(ot-wt[0],wt[1]-Tt);const Kt=s.terrain(ot,Tt)+(N===j?9:1.6);return B=st?.pitch??n.clamp(Math.atan2(Kt-c.position.y,Math.hypot(ot-wt[0],Tt-wt[1])),-.22,.32),!0}function Rt(N){const st=o.nearestCarStart(N,Q);if(!st)return!1;const{x:ot,z:Tt,height:wt,heading:Kt}=st;tt=Kt+(Math.cos(tt-Kt)<0?Math.PI:0);const Jt=dn=>Q(ot+Math.sin(tt)*dn,Tt-Math.cos(tt)*dn),ue=dn=>[1.5,3,5].find(bi=>Jt(bi*dn)===null)??6;ue(-1)>ue(1)&&(tt+=Math.PI);const pe=2.04,xe=Math.sin(tt)*pe,De=-Math.cos(tt)*pe,Ln=Q(ot+xe,Tt+De);return B=0,Q(ot-xe,Tt-De)===null&&Ln!==null?c.position.set(ot+xe,Ln+I.car.eye,Tt+De):c.position.set(ot,wt+I.car.eye,Tt),!0}function ft(N){Y=N,Z=0;for(const[st,ot]of H)ot.setAttribute("aria-pressed",String(st===N?.id));for(const{marker:st,place:ot}of ht)st.classList.toggle("selected",ot===N);if(dt==="car")Rt(N?.position??vt);else if(I[dt]){const st=N?.id==="gorgippia"?Bx:N?.walk??(N?.look?N:null);Et(N?.position??j,st)||Et(j)}else K(N?.position??vt,!!N)}function gt(N){const st=I[dt]?[c.position.x,c.position.z]:null;if(dt=N,Xt=null,Z=0,$.clear(),pt.clear(),bt.clear(),h.enabled=!I[N],h.enableRotate=N==="orbit",h.mouseButtons.LEFT=N==="map"?Oi.PAN:Oi.ROTATE,h.touches.ONE=N==="map"?pi.PAN:pi.ROTATE,h.touches.TWO=pi.DOLLY_PAN,h.minPolarAngle=0,h.maxPolarAngle=N==="map"?1e-4:Math.PI*.48,c.fov=I[N]?.fov??46,c.updateProjectionMatrix(),document.body.dataset.mode=N,b.hidden=N!=="bike"&&N!=="car",E.hidden=N!=="orbit",Pt(),Ou("mode",N),st&&I[N]){if(N==="car"&&Rt(st))return;const ot=Q(...st);if(ot!==null){c.position.y=ot+I[N].eye;return}}ft(Y)}V.forEach((N,st)=>{const ot=document.createElement("button");ot.type="button",ot.className="place",ot.setAttribute("aria-pressed","false");const Tt=document.createElement("span");Tt.className="place-index",Tt.textContent=String(st+1).padStart(2,"0"),Tt.setAttribute("aria-hidden","true");const wt=document.createElement("span");if(wt.className="place-name",wt.textContent=N.name,ot.append(Tt,wt),ot.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,ft(N)}),L.append(ot),H.set(N.id,ot),!N.osm)return;const Kt=document.createElement("a");Kt.className="map-pin",Kt.href=N.osm,Kt.target="_blank",Kt.rel="noopener noreferrer",Kt.setAttribute("aria-label",`${N.name} в OpenStreetMap`),Kt.title=`${N.name} в OpenStreetMap`;const Jt=document.createElement("span");Jt.textContent=Tt.textContent;const ue=document.createElement("strong");ue.textContent=N.name,Kt.append(Jt,ue),C.append(Kt),ht.push({marker:Kt,place:N})});for(const[N,st]of Object.entries(it)){const ot=document.createElement("h3");ot.textContent=N,P.append(ot);for(const Tt of st){const wt=document.createElement("button");wt.type="button",wt.className="place",wt.setAttribute("aria-pressed","false"),wt.textContent=Tt.name,wt.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,ft(Tt)}),P.append(wt),H.set(Tt.id,wt)}}for(const N of Jo("mode"))N.addEventListener("click",()=>gt(N.dataset.mode));w.addEventListener("click",()=>{const N=w.getAttribute("aria-pressed")!=="true";w.setAttribute("aria-pressed",String(N)),s.setCartoon(N)});function Pt(){y.hidden=dt!=="bike"&&dt!=="car",y.setAttribute("aria-pressed",String(At())),y.textContent=At()?dt==="car"?"Камера из салона":"Камера от первого лица":"Камера снаружи",A.textContent=At()?"Стрелки или WASD — езда. Тяните по сцене, чтобы повернуть камеру. V — вид от первого лица.":D[dt]}function Vt(){At()?yt.delete(dt):yt.add(dt),Pt()}y.addEventListener("click",Vt),E.addEventListener("click",()=>{xt=!xt,E.setAttribute("aria-pressed",String(xt))});function It(N){Ou("light",N),s.light(N)}for(const N of Jo("light"))N.addEventListener("click",()=>It(N.dataset.light));for(const N of Jo("action"))N.addEventListener("click",()=>{const st=N.dataset.action;if(st==="reset"){ft(V.find(wt=>wt.id==="paintedWaterfront"));return}const ot=st==="zoom-in";if(At()){$t=n.clamp($t+(ot?-1:1),3.8,9);return}if(I[dt]){c.fov=n.clamp(c.fov+(ot?-8:8),42,82),c.updateProjectionMatrix();return}Mt.copy(c.position).sub(h.target);const Tt=n.clamp(Mt.length()*(ot?.75:1.33),h.minDistance,h.maxDistance);c.position.copy(h.target).add(Mt.setLength(Tt)),h.update()});for(const N of Jo("move")){const st=N.dataset.move;N.addEventListener("pointerdown",ot=>{ot.pointerType==="touch"&&ot.preventDefault(),N.setPointerCapture(ot.pointerId),pt.set(ot.pointerId,st),bt.add(st)});for(const ot of["pointerup","pointercancel","lostpointercapture"])N.addEventListener(ot,Tt=>pt.delete(Tt.pointerId));N.addEventListener("click",ot=>{ot.detail===0&&bt.add(st)}),N.addEventListener("contextmenu",ot=>ot.preventDefault())}Ji.addEventListener("pointerdown",N=>{!I[dt]||Xt!==null||(Xt={id:N.pointerId,x:N.clientX,y:N.clientY},Ji.setPointerCapture(Xt.id))}),Ji.addEventListener("pointermove",N=>{if(N.pointerId!==Xt?.id)return;const st=N.clientX-Xt.x,ot=N.clientY-Xt.y;At()?(Bt-=st*.009,O=n.clamp(O+ot*.018,1.55,6)):(tt+=st*.003,B=n.clamp(B-ot*.003,-1.33,1.33)),Xt.x=N.clientX,Xt.y=N.clientY});for(const N of["pointerup","pointercancel","lostpointercapture"])Ji.addEventListener(N,st=>{Xt?.id===st.pointerId&&(Xt=null)});window.addEventListener("keydown",N=>{const st=k[N.code],ot=(dt==="walk"||dt==="orbit")&&(N.code==="ShiftLeft"||N.code==="ShiftRight"),Tt=(dt==="car"||dt==="bike")&&N.code==="KeyV";if(!(dt==="map"||!st&&!ot&&!Tt||N.defaultPrevented||N.isComposing||N.altKey||N.ctrlKey||N.metaKey)&&!(N.target instanceof HTMLElement&&(N.target.isContentEditable||N.target.matches("input, select, textarea")))){if(Tt){N.preventDefault(),N.repeat||Vt();return}$.add(N.code),st&&(N.preventDefault(),N.repeat||bt.add(st))}}),window.addEventListener("keyup",N=>$.delete(N.code)),window.addEventListener("blur",()=>{$.clear(),pt.clear(),bt.clear(),Z=0,Xt=null});function Lt(){const N=Math.max(1,Ji.clientWidth),st=Math.max(1,Ji.clientHeight);s.renderer.setSize(N,st,!1),c.aspect=N/st,c.updateProjectionMatrix()}function Wt(){const N=new Set(bt);for(const st of $)k[st]&&N.add(k[st]);for(const st of pt.values())N.add(st);return[Number(N.has("forward"))-Number(N.has("back")),Number(N.has("right"))-Number(N.has("left"))]}function Yt(N,st,ot,Tt){const wt=c.position,Kt=dt==="car"?.65:.4,Jt=Math.max(1,Math.ceil(Math.hypot(N,st)/.15));function ue(pe,xe){const De=Q(pe,xe);return De===null||Math.abs(De-ot)>Kt?!1:(wt.x=pe,wt.z=xe,ot=De,!0)}for(let pe=0;pe<Jt;pe++)if(Tt)ue(wt.x+N/Jt,wt.z),ue(wt.x,wt.z+st/Jt);else if(!ue(wt.x+N/Jt,wt.z+st/Jt)){Z=0;break}return ot}function te(N){const[st,ot]=Wt();at=ot;const Tt=c.position,wt=I[dt];let Kt=Q(Tt.x,Tt.z);if(dt==="walk"&&(st||ot)){const Jt=$.has("ShiftLeft")||$.has("ShiftRight"),pe=(bt.size?.46:(Jt?7.8:4.8)*N)/Math.hypot(ot,st),xe=(Math.sin(tt)*st+Math.cos(tt)*ot)*pe,De=(-Math.cos(tt)*st+Math.sin(tt)*ot)*pe;Kt=Yt(xe,De,Kt,!0)}else if(dt!=="walk"){const Jt=dt==="bike"&&o.bicycleAt(Tt.x,Tt.z)==="push",ue=Jt?2:wt.speed,pe=st*(st<0?Math.min(ue,wt.reverse):ue),xe=bt.size?Math.max(N,.06):N;Z=n.clamp(n.damp(Z,pe,pe===0?12:5,xe),-ue,ue);const De=Z<-.1;tt+=ot*wt.steer*xe*(De?-1:1);const Ln=Z*xe;Math.abs(Ln)>1e-4&&(Kt=Yt(Math.sin(tt)*Ln,-Math.cos(tt)*Ln,Kt,Jt));const dn=`${Math.round(Math.abs(Z)*3.6)} км/ч${Jt?" · пешком":""}`;b.textContent!==dn&&(b.textContent=dn)}Kt!==null&&(Tt.y=n.damp(Tt.y,Kt+wt.eye,18,N)),lt.set(Math.sin(tt)*Math.cos(B),Math.sin(B),-Math.cos(tt)*Math.cos(B)),c.lookAt(lt.add(c.position))}function q(N){h.update();let{x:st,z:ot}=h.target;if(dt==="orbit"&&($.size||bt.size||pt.size)){const[Tt,wt]=Wt(),Kt=Math.hypot(Tt,wt);if(Kt){const Jt=xt||$.has("ShiftLeft")||$.has("ShiftRight"),pe=n.clamp(c.position.distanceTo(h.target)*.38,12,180)*(Jt?5:1)*(bt.size?Math.max(N,.08):N)/Kt;Mt.copy(h.target).sub(c.position).setY(0).normalize(),st+=(Mt.x*Tt-Mt.z*wt)*pe,ot+=(Mt.z*Tt+Mt.x*wt)*pe}}st=n.clamp(st,u,p),ot=n.clamp(ot,d,_),c.position.x+=st-h.target.x,c.position.z+=ot-h.target.z,h.target.x=st,h.target.z=ot}Lt(),window.addEventListener("resize",Lt),gt("orbit");const Ct=new URLSearchParams(window.location.search),mt=[...V,...Object.values(it).flat()];ft(mt.find(N=>N.id===Ct.get("place"))??V[0]);const Dt=Ct.get("mode");["map","walk","bike","car"].includes(Dt)&&gt(Dt),Ct.get("light")==="sunset"&&It("sunset"),Ct.get("camera")==="outside"&&(dt==="bike"||dt==="car")&&Vt();let Nt=performance.now();s.renderer.setAnimationLoop(N=>{const st=Math.min((N-Nt)/1e3,.05);Nt=N,I[dt]?te(st):q(st),bt.clear(),c.getWorldDirection(ct);const ot=dt==="map"?0:-Math.atan2(ct.x,-ct.z);x.style.setProperty("--north",`${ot}rad`);const Tt=I[dt]?c.position:h.target;T(Tt.x,Tt.z);for(const{marker:xe,place:De}of ht){const[Ln,dn]=De.position;z.set(Ln,s.terrain(Ln,dn)+(De.pinHeight??1.2),dn).project(c),xe.hidden=!!I[dt]||z.z<-1||z.z>1||Math.abs(z.x)>.97||Math.abs(z.y)>.92,xe.hidden||(xe.style.left=`${(z.x+1)*50}%`,xe.style.top=`${(1-z.y)*50}%`)}const wt=f?0:N/1e3,Kt=At(),Jt={yaw:tt,speed:Z,turn:at,delta:st,terrain:s.terrain,angle:Bt,height:O,distance:$t},ue=a.cameraFor(c,{...Jt,active:dt==="car"&&Kt}),pe=l.cameraFor(ue,{...Jt,active:dt==="bike"&&Kt});s.render(pe,wt),r.render(s.renderer,{mode:Kt?"":dt,aspect:c.aspect,turn:at,speed:Z,time:wt,delta:st,reducedMotion:f})})}let zu="Не удалось загрузить данные Анапы. Перезагрузите страницу.";try{const[i,t]=await Promise.all([Bu("anapa"),Bu("elevation")]);i.scale??=[111320*Math.cos(le.degToRad(i.origin[1])),111132],zu="Не удалось открыть 3D-карту. Проверьте, доступен ли WebGL 2, и перезагрузите страницу.",u5(i,t),Fu.hidden=!0}catch(i){console.error(i),Fu.textContent=zu}
