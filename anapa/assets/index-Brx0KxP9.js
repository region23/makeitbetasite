(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const wc="186",zi={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yu=0,zl=1,Zu=2,Jo=1,$u=2,eo=3,si=0,fn=1,Xe=2,vi=0,io=1,uo=2,kl=3,Hl=4,Ku=5,vs=100,Ju=101,Qu=102,ju=103,tf=104,ef=200,nf=201,sf=202,of=203,c0=204,l0=205,rf=206,af=207,cf=208,lf=209,hf=210,uf=211,ff=212,df=213,pf=214,Ia=0,Ua=1,Na=2,fo=3,Fa=4,Oa=5,Ba=6,za=7,Rr=0,mf=1,gf=2,oi=0,h0=1,u0=2,f0=3,d0=4,p0=5,m0=6,g0=7,_0=300,rs=301,ws=302,Qo=303,ya=304,Cr=306,fr=1e3,ni=1001,Es=1002,je=1003,_f=1004,zo=1005,sn=1006,ba=1007,ns=1008,Cn=1009,x0=1010,v0=1011,po=1012,Ec=1013,ri=1014,qn=1015,ai=1016,Tc=1017,Ac=1018,mo=1020,M0=35902,S0=35899,y0=1021,b0=1022,Yn=1023,bi=1026,is=1027,Rc=1028,Cc=1029,as=1030,Pc=1031,Lc=1033,jo=33776,tr=33777,er=33778,nr=33779,ka=35840,Ha=35841,Ga=35842,Va=35843,Wa=36196,Xa=37492,qa=37496,Ya=37488,Za=37489,dr=37490,$a=37491,Ka=37808,Ja=37809,Qa=37810,ja=37811,tc=37812,ec=37813,nc=37814,ic=37815,sc=37816,oc=37817,rc=37818,ac=37819,cc=37820,lc=37821,hc=36492,uc=36494,fc=36495,dc=36283,pc=36284,pr=36285,mc=36286,xf=3200,mr=0,vf=1,Ii="",Qe="srgb",gr="srgb-linear",_r="linear",_e="srgb",wa=7680,Mf=519,Sf=512,yf=513,bf=514,Dc=515,wf=516,Ef=517,Ic=518,Tf=519,w0=35044,Af=35048,Gl="300 es",ii=2e3,go=2001;function Bd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rf(){const i=xr("canvas");return i.style.display="block",i}const nh={};function vr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Cf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=Cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function he(...i){i=Cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ss(...i){const t=i.join(" ");t in nh||(nh[t]=!0,Qt(...i))}function zd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const kd={[Ia]:Ua,[Na]:Ba,[Fa]:za,[fo]:Oa,[Ua]:Ia,[Ba]:Na,[za]:Fa,[Oa]:fo};class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const ir=Math.PI/180,Mr=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function E0(i,t){return(i%t+t)%t}function Hd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gd(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function Vd(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function Wd(i,t=1){return t-Math.abs(E0(i,t*2)-t)}function Xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zd(i,t){return i+Math.random()*(t-i)}function $d(i){return i*(.5-Math.random())}function Kd(i){i!==void 0&&(ih=i);let t=ih+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jd(i){return i*ir}function Qd(i){return i*Mr}function jd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function tp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function np(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),u=r((t+n)/2),f=o((t-n)/2),h=r((t-n)/2),p=o((n-t)/2),d=r((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*d,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*d,a*c);break;case"ZYZ":i.set(l*d,l*p,a*u,a*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ce={DEG2RAD:ir,RAD2DEG:Mr,generateUUID:Mi,clamp:re,euclideanModulo:E0,mapLinear:Hd,inverseLerp:Gd,lerp:sr,damp:Vd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:Zd,randFloatSpread:$d,seededRandom:Kd,degToRad:Jd,radToDeg:Qd,isPowerOfTwo:jd,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:np,normalize:Se,denormalize:ei};var lo;let vt=(lo=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lo.prototype.isVector2=!0,lo);class Hi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=o[r+0],p=o[r+1],d=o[r+2],_=o[r+3];if(f!==_||l!==h||c!==p||u!==d){let m=l*h+c*p+u*d+f*_;m<0&&(h=-h,p=-p,d=-d,_=-_,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+h*a,c=c*g+p*a,u=u*g+d*a,f=f*g+_*a}else{l=l*g+h*a,c=c*g+p*a,u=u*g+d*a,f=f*g+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=o[r],h=o[r+1],p=o[r+2],d=o[r+3];return t[e]=a*d+u*f+l*p-c*h,t[e+1]=l*d+u*h+c*f-a*p,t[e+2]=c*d+u*p+a*h-l*f,t[e+3]=u*d-a*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(o/2),h=l(n/2),p=l(s/2),d=l(o/2);switch(r){case"XYZ":this._x=h*u*f+c*p*d,this._y=c*p*f-h*u*d,this._z=c*u*d+h*p*f,this._w=c*u*f-h*p*d;break;case"YXZ":this._x=h*u*f+c*p*d,this._y=c*p*f-h*u*d,this._z=c*u*d-h*p*f,this._w=c*u*f+h*p*d;break;case"ZXY":this._x=h*u*f-c*p*d,this._y=c*p*f+h*u*d,this._z=c*u*d+h*p*f,this._w=c*u*f-h*p*d;break;case"ZYX":this._x=h*u*f-c*p*d,this._y=c*p*f+h*u*d,this._z=c*u*d-h*p*f,this._w=c*u*f+h*p*d;break;case"YZX":this._x=h*u*f+c*p*d,this._y=c*p*f+h*u*d,this._z=c*u*d-h*p*f,this._w=c*u*f-h*p*d;break;case"XZY":this._x=h*u*f-c*p*d,this._y=c*p*f-h*u*d,this._z=c*u*d+h*p*f,this._w=c*u*f+h*p*d;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}var ho;let B=(ho=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),u=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*u,this.y=n+l*u+a*c-o*f,this.z=s+l*f+o*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qc.copy(this).projectOnVector(t),this.sub(Qc)}reflect(t){return this.sub(Qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ho.prototype.isVector3=!0,ho);const Qc=new B,sh=new Hi,J0=class J0{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],d=n[8],_=s[0],m=s[3],g=s[6],v=s[1],M=s[4],x=s[7],y=s[2],b=s[5],w=s[8];return o[0]=r*_+a*v+l*y,o[3]=r*m+a*M+l*b,o[6]=r*g+a*x+l*w,o[1]=c*_+u*v+f*y,o[4]=c*m+u*M+f*b,o[7]=c*g+u*x+f*w,o[2]=h*_+p*v+d*y,o[5]=h*m+p*M+d*b,o[8]=h*g+p*x+d*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*r-a*c,h=a*l-u*o,p=c*o-r*l,d=e*f+n*h+s*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/d;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*r)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};J0.prototype.isMatrix3=!0;let te=J0;const jc=new te,oh=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ip(){const i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===_e&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_e&&(s.r=so(s.r),s.g=so(s.g),s.b=so(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:oh,fromXYZ:rh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:oh,fromXYZ:rh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}const le=ip();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function so(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ps;class Pf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ps===void 0&&(Ps=xr("canvas")),Ps.width=t.width,Ps.height=t.height;const s=Ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ki(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sp=0;class Uc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(tl(s[r].image)):o.push(tl(s[r]))}else o=tl(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let op=0;const el=new B;class tn extends Gi{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=ni,s=ni,o=sn,r=ns,a=Yn,l=Cn,c=tn.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Mi(),this.name="",this.source=new Uc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Es:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Es:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=_0;tn.DEFAULT_ANISOTROPY=1;const Q0=class Q0{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],d=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(d-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(d+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(p+1)/2,y=(g+1)/2,b=(u+h)/4,w=(f+_)/4,S=(d+m)/4;return M>x&&M>y?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=b/n,o=w/n):x>y?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=b/s,o=S/s):y<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(y),n=w/o,s=S/o),this.set(n,s,o,e),this}let v=Math.sqrt((m-d)*(m-d)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-d)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Q0.prototype.isVector4=!0;let Ne=Q0;class Lf extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new tn(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Uc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class T0 extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const bc=class bc{constructor(t,e,n,s,o,r,a,l,c,u,f,h,p,d,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,u,f,h,p,d,_,m)}set(t,e,n,s,o,r,a,l,c,u,f,h,p,d,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=p,g[7]=d,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),o=1/Ls.setFromMatrixColumn(t,1).length(),r=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const h=r*u,p=r*f,d=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+d*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=d+p*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,d=c*u,_=c*f;e[0]=h+_*a,e[4]=d*a-p,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-a,e[2]=p*a-d,e[6]=_+h*a,e[10]=r*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,d=c*u,_=c*f;e[0]=h-_*a,e[4]=-r*f,e[8]=d+p*a,e[1]=p+d*a,e[5]=r*u,e[9]=_-h*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const h=r*u,p=r*f,d=a*u,_=a*f;e[0]=l*u,e[4]=d*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-d,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,p=r*c,d=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=d*f+p,e[1]=f,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+d,e[10]=h-_*f}else if(t.order==="XZY"){const h=r*l,p=r*c,d=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=r*u,e[9]=p*f-d,e[2]=d*f-p,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rp,t,ap)}lookAt(t,e,n){const s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Yi.crossVectors(n,Nn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Yi.crossVectors(n,Nn)),Yi.normalize(),Fr.crossVectors(Nn,Yi),s[0]=Yi.x,s[4]=Fr.x,s[8]=Nn.x,s[1]=Yi.y,s[5]=Fr.y,s[9]=Nn.y,s[2]=Yi.z,s[6]=Fr.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],d=n[2],_=n[6],m=n[10],g=n[14],v=n[3],M=n[7],x=n[11],y=n[15],b=s[0],w=s[4],S=s[8],E=s[12],T=s[1],C=s[5],D=s[9],P=s[13],R=s[2],I=s[6],N=s[10],O=s[14],G=s[3],V=s[7],$=s[11],tt=s[15];return o[0]=r*b+a*T+l*R+c*G,o[4]=r*w+a*C+l*I+c*V,o[8]=r*S+a*D+l*N+c*$,o[12]=r*E+a*P+l*O+c*tt,o[1]=u*b+f*T+h*R+p*G,o[5]=u*w+f*C+h*I+p*V,o[9]=u*S+f*D+h*N+p*$,o[13]=u*E+f*P+h*O+p*tt,o[2]=d*b+_*T+m*R+g*G,o[6]=d*w+_*C+m*I+g*V,o[10]=d*S+_*D+m*N+g*$,o[14]=d*E+_*P+m*O+g*tt,o[3]=v*b+M*T+x*R+y*G,o[7]=v*w+M*C+x*I+y*V,o[11]=v*S+M*D+x*N+y*$,o[15]=v*E+M*P+x*O+y*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],d=t[3],_=t[7],m=t[11],g=t[15],v=l*p-c*h,M=a*p-c*f,x=a*h-l*f,y=r*p-c*u,b=r*h-l*u,w=r*f-a*u;return e*(_*v-m*M+g*x)-n*(d*v-m*y+g*b)+s*(d*M-_*y+g*w)-o*(d*x-_*b+m*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(r*u-a*c)-n*(o*u-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],d=t[12],_=t[13],m=t[14],g=t[15],v=e*a-n*r,M=e*l-s*r,x=e*c-o*r,y=n*l-s*a,b=n*c-o*a,w=s*c-o*l,S=u*_-f*d,E=u*m-h*d,T=u*g-p*d,C=f*m-h*_,D=f*g-p*_,P=h*g-p*m,R=v*P-M*D+x*C+y*T-b*E+w*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=(a*P-l*D+c*C)*I,t[1]=(s*D-n*P-o*C)*I,t[2]=(_*w-m*b+g*y)*I,t[3]=(h*b-f*w-p*y)*I,t[4]=(l*T-r*P-c*E)*I,t[5]=(e*P-s*T+o*E)*I,t[6]=(m*x-d*w-g*M)*I,t[7]=(u*w-h*x+p*M)*I,t[8]=(r*D-a*T+c*S)*I,t[9]=(n*T-e*D-o*S)*I,t[10]=(d*b-_*x+g*v)*I,t[11]=(f*x-u*b-p*v)*I,t[12]=(a*E-r*C-l*S)*I,t[13]=(e*C-n*E+s*S)*I,t[14]=(_*M-d*y-m*v)*I,t[15]=(u*y-f*M+h*v)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,u=r+r,f=a+a,h=o*c,p=o*u,d=o*f,_=r*u,m=r*f,g=a*f,v=l*c,M=l*u,x=l*f,y=n.x,b=n.y,w=n.z;return s[0]=(1-(_+g))*y,s[1]=(p+x)*y,s[2]=(d-M)*y,s[3]=0,s[4]=(p-x)*b,s[5]=(1-(h+g))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(d+M)*w,s[9]=(m-v)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Ls.set(s[0],s[1],s[2]).length();const a=Ls.set(s[4],s[5],s[6]).length(),l=Ls.set(s[8],s[9],s[10]).length();o<0&&(r=-r),Kn.copy(this);const c=1/r,u=1/a,f=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,e.setFromRotationMatrix(Kn),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=ii,l=!1){const c=this.elements,u=2*o/(e-t),f=2*o/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let d,_;if(l)d=o/(r-o),_=r*o/(r-o);else if(a===ii)d=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===go)d=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=ii,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s);let d,_;if(l)d=1/(r-o),_=r/(r-o);else if(a===ii)d=-2/(r-o),_=-(r+o)/(r-o);else if(a===go)d=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bc.prototype.isMatrix4=!0;let we=bc;const Ls=new B,Kn=new we,rp=new B(0,0,0),ap=new B(1,1,1),Yi=new B,Fr=new B,Nn=new B,ah=new we,ch=new Hi;class wi{constructor(t=0,e=0,n=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class A0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cp=0;const lh=new B,Ds=new Hi,Ri=new we,Or=new B,To=new B,lp=new B,hp=new Hi,hh=new B(1,0,0),uh=new B(0,1,0),fh=new B(0,0,1),dh={type:"added"},up={type:"removed"},Is={type:"childadded",child:null},nl={type:"childremoved",child:null};class xe extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new B,e=new wi,n=new Hi,s=new B(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new te}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new A0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(To,Or,this.up):Ri.lookAt(Or,To,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(Ri),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),Is.child=t,this.dispatchEvent(Is),Is.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(up),nl.child=t,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),h=r(t.skeletons),p=r(t.animations),d=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),d.length>0&&(n.nodes=d)}return n.object=s,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xe.DEFAULT_UP=new B(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pe extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fp={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,d=.005;c.inputState.pinching&&h>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=E0(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=il(r,o,t+1/3),this.g=il(r,o,t),this.b=il(r,o,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(o){o!==void 0&&parseFloat(o)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=If[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return le.workingToColorSpace(an.copy(this),t),Math.round(re(an.r*255,0,255))*65536+Math.round(re(an.g*255,0,255))*256+Math.round(re(an.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(an.copy(this),e);const n=an.r,s=an.g,o=an.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=u<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Qe){le.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,s=an.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Br);const n=sr(Zi.h,Br.h,e),s=sr(Zi.s,Br.s,e),o=sr(Zi.l,Br.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const an=new Yt;Yt.NAMES=If;class Nc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new Nc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class R0 extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Jn=new B,Ci=new B,sl=new B,Pi=new B,Us=new B,Ns=new B,ph=new B,ol=new B,rl=new B,al=new B,cl=new Ne,ll=new Ne,hl=new Ne;class zn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Jn.subVectors(t,e),s.cross(Jn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Jn.subVectors(s,e),Ci.subVectors(n,e),sl.subVectors(t,e);const r=Jn.dot(Jn),a=Jn.dot(Ci),l=Jn.dot(sl),c=Ci.dot(Ci),u=Ci.dot(sl),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,d=(r*u-a*l)*h;return o.set(1-p-d,d,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Pi.x),l.addScaledVector(r,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return cl.setScalar(0),ll.setScalar(0),hl.setScalar(0),cl.fromBufferAttribute(t,e),ll.fromBufferAttribute(t,n),hl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(cl,o.x),r.addScaledVector(ll,o.y),r.addScaledVector(hl,o.z),r}static isFrontFacing(t,e,n,s){return Jn.subVectors(n,e),Ci.subVectors(t,e),Jn.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Jn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return zn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Us.subVectors(s,n),Ns.subVectors(o,n),ol.subVectors(t,n);const l=Us.dot(ol),c=Ns.dot(ol);if(l<=0&&c<=0)return e.copy(n);rl.subVectors(t,s);const u=Us.dot(rl),f=Ns.dot(rl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Us,r);al.subVectors(t,o);const p=Us.dot(al),d=Ns.dot(al);if(d>=0&&p<=d)return e.copy(o);const _=p*c-l*d;if(_<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Ns,a);const m=u*d-p*f;if(m<=0&&f-u>=0&&p-d>=0)return ph.subVectors(o,s),a=(f-u)/(f-u+(p-d)),e.copy(s).addScaledVector(ph,a);const g=1/(m+_+h);return r=_*g,a=h*g,e.copy(n).addScaledVector(Us,r).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class cs{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Qn):Qn.fromBufferAttribute(o,r),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),kr.subVectors(this.max,Ao),Fs.subVectors(t.a,Ao),Os.subVectors(t.b,Ao),Bs.subVectors(t.c,Ao),$i.subVectors(Os,Fs),Ki.subVectors(Bs,Os),us.subVectors(Fs,Bs);let e=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-us.z,us.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,us.z,0,-us.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-us.y,us.x,0];return!ul(e,Fs,Os,Bs,kr)||(e=[1,0,0,0,1,0,0,0,1],!ul(e,Fs,Os,Bs,kr))?!1:(Hr.crossVectors($i,Ki),e=[Hr.x,Hr.y,Hr.z],ul(e,Fs,Os,Bs,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Li=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,zr=new cs,Fs=new B,Os=new B,Bs=new B,$i=new B,Ki=new B,us=new B,Ao=new B,kr=new B,Hr=new B,fs=new B;function ul(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){fs.fromArray(i,o);const a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),u=n.dot(fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ge=new B,Gr=new vt;let dp=0;class kn extends Gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=w0,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),o=Se(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class C0 extends kn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class P0 extends kn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends kn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const pp=new cs,Ro=new B,fl=new B;class So{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const e=Ro.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ro,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(fl)),this.expandByPoint(Ro.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mp=0;const Vn=new we,dl=new xe,zs=new B,Fn=new cs,Co=new cs,$e=new B;class Ee extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bd(t)?P0:C0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new te().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Fn.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Co.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Fn.min,Co.min),Fn.expandByPoint($e),$e.addVectors(Fn.max,Co.max),Fn.expandByPoint($e)):(Fn.expandByPoint(Co.min),Fn.expandByPoint(Co.max))}Fn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)$e.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared($e));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$e.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(t,c),$e.add(zs)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new kn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new B,l[S]=new B;const c=new B,u=new B,f=new B,h=new vt,p=new vt,d=new vt,_=new B,m=new B;function g(S,E,T){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,T),h.fromBufferAttribute(o,S),p.fromBufferAttribute(o,E),d.fromBufferAttribute(o,T),u.sub(c),f.sub(c),p.sub(h),d.sub(h);const C=1/(p.x*d.y-d.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(d.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-d.x).multiplyScalar(C),a[S].add(_),a[E].add(_),a[T].add(_),l[S].add(m),l[E].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let S=0,E=v.length;S<E;++S){const T=v[S],C=T.start,D=T.count;for(let P=C,R=C+D;P<R;P+=3)g(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new B,x=new B,y=new B,b=new B;function w(S){y.fromBufferAttribute(s,S),b.copy(y);const E=a[S];M.copy(E),M.sub(y.multiplyScalar(y.dot(E))).normalize(),x.crossVectors(b,E);const C=x.dot(l[S])<0?-1:1;r.setXYZW(S,M.x,M.y,M.z,C)}for(let S=0,E=v.length;S<E;++S){const T=v[S],C=T.start,D=T.count;for(let P=C,R=C+D;P<R;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new kn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new B,o=new B,r=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(t)for(let h=0,p=t.count;h<p;h+=3){const d=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,d),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,o),f.subVectors(s,o),u.cross(f),a.fromBufferAttribute(n,d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,o),f.subVectors(s,o),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,d=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let g=0;g<u;g++)h[d++]=c[p++]}return new kn(h,u,f)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const o=t.morphAttributes;for(const c in o){const u=[],f=o[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=w0,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const gn=new B;class Sr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),o=Se(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new kn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pl=new B,gp=new B,_p=new te;class mi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=pl.subVectors(n,e).cross(gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(pl),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_p.getNormalMatrix(t),s=this.coplanarPoint(pl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let xp=0;class ls extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=io,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=c0,this.blendDst=l0,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new mi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class L0 extends ls{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ks;const Po=new B,Hs=new B,Gs=new B,Vs=new vt,Lo=new vt,Nf=new we,Vr=new B,Do=new B,Wr=new B,mh=new vt,ml=new vt,gh=new vt;class Ff extends xe{constructor(t=new L0){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uf(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Sr(n,3,0,!1)),ks.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&he('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Gs.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Xr(Vr.set(-.5,-.5,0),Gs,r,Hs,s,o),Xr(Do.set(.5,-.5,0),Gs,r,Hs,s,o),Xr(Wr.set(.5,.5,0),Gs,r,Hs,s,o),mh.set(0,0),ml.set(1,0),gh.set(1,1);let a=t.ray.intersectTriangle(Vr,Do,Wr,!1,Po);if(a===null&&(Xr(Do.set(-.5,.5,0),Gs,r,Hs,s,o),ml.set(0,1),a=t.ray.intersectTriangle(Vr,Wr,Do,!1,Po),a===null))return;const l=t.ray.origin.distanceTo(Po);l<t.near||l>t.far||e.push({distance:l,point:Po.clone(),uv:zn.getInterpolation(Po,Vr,Do,Wr,mh,ml,gh,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(i,t,e,n,s,o){Vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Lo.x=o*Vs.x-s*Vs.y,Lo.y=s*Vs.x+o*Vs.y):Lo.copy(Vs),i.copy(t),i.x+=Lo.x,i.y+=Lo.y,i.applyMatrix4(Nf)}const Di=new B,gl=new B,qr=new B,Yr=new B;class D0{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gl.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Yr.copy(this.origin).sub(gl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(qr),a=Yr.dot(this.direction),l=-Yr.dot(qr),c=Yr.lengthSq(),u=Math.abs(1-r*r);let f,h,p,d;if(u>0)if(f=r*l-a,h=r*a-l,d=o*u,f>=0)if(h>=-d)if(h<=d){const _=1/u;f*=_,h*=_,p=f*(f+r*h+2*a)+h*(r*f+h+2*l)+c}else h=o,f=Math.max(0,-(r*h+a)),p=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(r*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-d?(f=Math.max(0,-(-r*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c):h<=d?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(f=Math.max(0,-(r*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c);else h=r>0?-o:o,f=Math.max(0,-(r*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(gl).addScaledVector(qr,h),p}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);const n=Di.dot(this.direction),s=Di.dot(Di)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(o=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(o=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-r.x,h=t.y-r.y,p=t.z-r.z,d=e.x-r.x,_=e.y-r.y,m=e.z-r.z,g=n.x-r.x,v=n.y-r.y,M=n.z-r.z,x=Math.abs(l),y=Math.abs(c),b=Math.abs(u);let w,S,E,T,C,D,P,R,I,N,O,G;if(x>=y&&x>=b?(E=l,D=f,I=d,G=g,l>=0?(w=c,S=u,T=h,C=p,P=_,R=m,N=v,O=M):(w=u,S=c,T=p,C=h,P=m,R=_,N=M,O=v)):y>=b?(E=c,D=h,I=_,G=v,c>=0?(w=u,S=l,T=p,C=f,P=m,R=d,N=M,O=g):(w=l,S=u,T=f,C=p,P=d,R=m,N=g,O=M)):(E=u,D=p,I=m,G=M,u>=0?(w=l,S=c,T=f,C=h,P=d,R=_,N=g,O=v):(w=c,S=l,T=h,C=f,P=_,R=d,N=v,O=g)),E===0)return null;const V=w/E,$=S/E,tt=1/E,Mt=T-V*D,j=C-$*D,St=P-V*I,lt=R-$*I,ct=N-V*G,H=O-$*G,K=ct*lt-H*St,pt=Mt*H-j*ct,bt=St*j-lt*Mt;if(s){if(K<0||pt<0||bt<0)return null}else if((K<0||pt<0||bt<0)&&(K>0||pt>0||bt>0))return null;const W=K+pt+bt;if(W===0)return null;const ht=tt*(K*D+pt*I+bt*G);return(W>0?ht<0:ht>0)?null:this.at(ht/W,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wn extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _h=new we,ds=new D0,Zr=new So,xh=new B,$r=new B,Kr=new B,Jr=new B,_l=new B,Qr=new B,vh=new B,jr=new B;class se extends xe{constructor(t=new Ee,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Qr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],f=o[l];u!==0&&(_l.fromBufferAttribute(f,t),r?Qr.addScaledVector(_l,u):Qr.addScaledVector(_l.sub(e),u))}e.add(Qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(o),ds.copy(t.ray).recast(t.near),!(Zr.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Zr,xh)===null||ds.origin.distanceToSquared(xh)>(t.far-t.near)**2))&&(_h.copy(o).invert(),ds.copy(t.ray).applyMatrix4(_h),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,_=h.length;d<_;d++){const m=h[d],g=r[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,y=M;x<y;x+=3){const b=a.getX(x),w=a.getX(x+1),S=a.getX(x+2);s=ta(this,g,t,n,c,u,f,b,w,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const d=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=d,g=_;m<g;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=ta(this,r,t,n,c,u,f,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,_=h.length;d<_;d++){const m=h[d],g=r[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,y=M;x<y;x+=3){const b=x,w=x+1,S=x+2;s=ta(this,g,t,n,c,u,f,b,w,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const d=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=d,g=_;m<g;m+=3){const v=m,M=m+1,x=m+2;s=ta(this,r,t,n,c,u,f,v,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function vp(i,t,e,n,s,o,r,a){let l;if(t.side===fn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===si,a),l===null)return null;jr.copy(a),jr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:i}}function ta(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,$r),i.getVertexPosition(l,Kr),i.getVertexPosition(c,Jr);const u=vp(i,t,e,n,$r,Kr,Jr,vh);if(u){const f=new B;zn.getBarycoord(vh,$r,Kr,Jr,f),s&&(u.uv=zn.getInterpolatedAttribute(s,a,l,c,f,new vt)),o&&(u.uv1=zn.getInterpolatedAttribute(o,a,l,c,f,new vt)),r&&(u.normal=zn.getInterpolatedAttribute(r,a,l,c,f,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};zn.getNormal($r,Kr,Jr,h.normal),u.face=h,u.barycoord=f}return u}class Fc extends tn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=je,u=je,f,h){super(null,r,a,l,c,u,s,o,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vl extends kn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ws=new we,Mh=new we,ea=[],Sh=new cs,Mp=new we,Io=new se,Uo=new So;class Dn extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Sh.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Sh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new So),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ws),Uo.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(n),t.ray.intersectsSphere(Uo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ws),Mh.multiplyMatrices(n,Ws),Io.matrixWorld=Mh,Io.raycast(t,ea);for(let r=0,a=ea.length;r<a;r++){const l=ea[r];l.instanceId=o,l.object=this,e.push(l)}ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fc(new Float32Array(s*this.count),s,this.count,Rc,qn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ps=new So,Sp=new vt(.5,.5),na=new B;class Oc{constructor(t=new mi,e=new mi,n=new mi,s=new mi,o=new mi,r=new mi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],u=o[4],f=o[5],h=o[6],p=o[7],d=o[8],_=o[9],m=o[10],g=o[11],v=o[12],M=o[13],x=o[14],y=o[15];if(s[0].setComponents(c-r,p-u,g-d,y-v).normalize(),s[1].setComponents(c+r,p+u,g+d,y+v).normalize(),s[2].setComponents(c+a,p+f,g+_,y+M).normalize(),s[3].setComponents(c-a,p-f,g-_,y-M).normalize(),n)s[4].setComponents(l,h,m,x).normalize(),s[5].setComponents(c-l,p-h,g-m,y-x).normalize();else if(s[4].setComponents(c-l,p-h,g-m,y-x).normalize(),e===ii)s[5].setComponents(c+l,p+h,g+m,y+x).normalize();else if(e===go)s[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);const e=Sp.distanceTo(t.center);return ps.radius=.7071067811865476+e,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(na.x=s.normal.x>0?t.max.x:t.min.x,na.y=s.normal.y>0?t.max.y:t.min.y,na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I0 extends tn{constructor(t=[],e=rs,n,s,o,r,a,l,c,u){super(t,e,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bc extends tn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends tn{constructor(t,e,n=ri,s,o,r,a=je,l=je,c,u=bi,f=1){if(u!==bi&&u!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Of extends _o{constructor(t,e=ri,n=rs,s,o,r=je,a=je,l,c=bi){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,o,r,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class U0 extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Le extends Ee{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],f=[];let h=0,p=0;d("z","y","x",-1,-1,n,e,t,r,o,0),d("z","y","x",1,-1,n,e,-t,r,o,1),d("x","z","y",1,1,t,n,e,s,r,2),d("x","z","y",1,-1,t,n,-e,s,r,3),d("x","y","z",1,-1,t,e,n,s,o,4),d("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function d(_,m,g,v,M,x,y,b,w,S,E){const T=x/w,C=y/S,D=x/2,P=y/2,R=b/2,I=w+1,N=S+1;let O=0,G=0;const V=new B;for(let $=0;$<N;$++){const tt=$*C-P;for(let Mt=0;Mt<I;Mt++){const j=Mt*T-D;V[_]=j*v,V[m]=tt*M,V[g]=R,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[g]=b>0?1:-1,u.push(V.x,V.y,V.z),f.push(Mt/w),f.push(1-$/S),O+=1}}for(let $=0;$<S;$++)for(let tt=0;tt<w;tt++){const Mt=h+tt+I*$,j=h+tt+I*($+1),St=h+(tt+1)+I*($+1),lt=h+(tt+1)+I*$;l.push(Mt,j,lt),l.push(j,St,lt),G+=6}a.addGroup(p,G,E),p+=G,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class yo extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new B,u=new vt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[h]/t+1)/2,u.y=(r[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class dn extends Ee{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const u=[],f=[],h=[],p=[];let d=0;const _=[],m=n/2;let g=0;v(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(p,2));function v(){const x=new B,y=new B;let b=0;const w=(e-t)/n;for(let S=0;S<=o;S++){const E=[],T=S/o,C=T*(e-t)+t;for(let D=0;D<=s;D++){const P=D/s,R=P*l+a,I=Math.sin(R),N=Math.cos(R);y.x=C*I,y.y=-T*n+m,y.z=C*N,f.push(y.x,y.y,y.z),x.set(I,w,N).normalize(),h.push(x.x,x.y,x.z),p.push(P,1-T),E.push(d++)}_.push(E)}for(let S=0;S<s;S++)for(let E=0;E<o;E++){const T=_[E][S],C=_[E+1][S],D=_[E+1][S+1],P=_[E][S+1];(t>0||E!==0)&&(u.push(T,C,P),b+=3),(e>0||E!==o-1)&&(u.push(C,D,P),b+=3)}c.addGroup(g,b,0),g+=b}function M(x){const y=d,b=new vt,w=new B;let S=0;const E=x===!0?t:e,T=x===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*T,0),h.push(0,T,0),p.push(.5,.5),d++;const C=d;for(let D=0;D<=s;D++){const R=D/s*l+a,I=Math.cos(R),N=Math.sin(R);w.x=E*N,w.y=m*T,w.z=E*I,f.push(w.x,w.y,w.z),h.push(0,T,0),b.x=I*.5+.5,b.y=N*.5*T+.5,p.push(b.x,b.y),d++}for(let D=0;D<s;D++){const P=y+D,R=C+D;x===!0?u.push(R,R+1,P):u.push(R+1,R,P),S+=3}c.addGroup(g,S,x===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zc extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),u(),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(o.slice(),3)),this.setAttribute("uv",new ne(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new B,x=new B,y=new B;for(let b=0;b<e.length;b+=3)p(e[b+0],M),p(e[b+1],x),p(e[b+2],y),l(M,x,y,v)}function l(v,M,x,y){const b=y+1,w=[];for(let S=0;S<=b;S++){w[S]=[];const E=v.clone().lerp(x,S/b),T=M.clone().lerp(x,S/b),C=b-S;for(let D=0;D<=C;D++)D===0&&S===b?w[S][D]=E:w[S][D]=E.clone().lerp(T,D/C)}for(let S=0;S<b;S++)for(let E=0;E<2*(b-S)-1;E++){const T=Math.floor(E/2);E%2===0?(h(w[S][T+1]),h(w[S+1][T]),h(w[S][T])):(h(w[S][T+1]),h(w[S+1][T+1]),h(w[S+1][T]))}}function c(v){const M=new B;for(let x=0;x<o.length;x+=3)M.x=o[x+0],M.y=o[x+1],M.z=o[x+2],M.normalize().multiplyScalar(v),o[x+0]=M.x,o[x+1]=M.y,o[x+2]=M.z}function u(){const v=new B;for(let M=0;M<o.length;M+=3){v.x=o[M+0],v.y=o[M+1],v.z=o[M+2];const x=m(v)/2/Math.PI+.5,y=g(v)/Math.PI+.5;r.push(x,1-y)}d(),f()}function f(){for(let v=0;v<r.length;v+=6){const M=r[v+0],x=r[v+2],y=r[v+4],b=Math.max(M,x,y),w=Math.min(M,x,y);b>.9&&w<.1&&(M<.2&&(r[v+0]+=1),x<.2&&(r[v+2]+=1),y<.2&&(r[v+4]+=1))}}function h(v){o.push(v.x,v.y,v.z)}function p(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function d(){const v=new B,M=new B,x=new B,y=new B,b=new vt,w=new vt,S=new vt;for(let E=0,T=0;E<o.length;E+=9,T+=6){v.set(o[E+0],o[E+1],o[E+2]),M.set(o[E+3],o[E+4],o[E+5]),x.set(o[E+6],o[E+7],o[E+8]),b.set(r[T+0],r[T+1]),w.set(r[T+2],r[T+3]),S.set(r[T+4],r[T+5]),y.copy(v).add(M).add(x).divideScalar(3);const C=m(y);_(b,T+0,v,C),_(w,T+2,M,C),_(S,T+4,x,C)}}function _(v,M,x,y){y<0&&v.x===1&&(r[M]=v.x-1),x.x===0&&x.z===0&&(r[M]=y/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.vertices,t.indices,t.radius,t.detail)}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const u=n[s],h=n[s+1]-u,p=(r-u)/h;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new vt:new B);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,s=[],o=[],r=[],a=new B,l=new we;for(let p=0;p<=t;p++){const d=p/t;s[p]=this.getTangentAt(d,new B)}o[0]=new B,r[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const d=Math.acos(re(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,d))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(re(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let d=1;d<=t;d++)o[d].applyMatrix4(l.makeRotationAxis(s[d],p*d)),r[d].crossVectors(s[d],o[d])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class kc extends li{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bf extends kc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function N0(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,u,f){let h=(r-o)/c-(a-o)/(c+u)+(a-r)/u,p=(a-r)/u-(l-r)/(u+f)+(l-a)/f;h*=u,p*=u,s(r,a,h,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const yh=new B,bh=new B,xl=new N0,vl=new N0,Ml=new N0;class Hc extends li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%o]:(bh.subVectors(s[0],s[1]).add(s[0]),c=bh);const f=s[a%o],h=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(yh.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=yh),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),d<1e-4&&(d=_),m<1e-4&&(m=_),xl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,d,_,m),vl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,d,_,m),Ml.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,d,_,m)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),vl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ml.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(xl.calc(l),vl.calc(l),Ml.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function yp(i,t){const e=1-i;return e*e*t}function bp(i,t){return 2*(1-i)*i*t}function wp(i,t){return i*i*t}function or(i,t,e,n){return yp(i,t)+bp(i,e)+wp(i,n)}function Ep(i,t){const e=1-i;return e*e*e*t}function Tp(i,t){const e=1-i;return 3*e*e*i*t}function Ap(i,t){return 3*(1-i)*i*i*t}function Rp(i,t){return i*i*i*t}function rr(i,t,e,n,s){return Ep(i,t)+Tp(i,e)+Ap(i,n)+Rp(i,s)}class F0 extends li{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(rr(t,s.x,o.x,r.x,a.x),rr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zf extends li{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(rr(t,s.x,o.x,r.x,a.x),rr(t,s.y,o.y,r.y,a.y),rr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O0 extends li{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends li{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B0 extends li{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(or(t,s.x,o.x,r.x),or(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gc extends li{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(or(t,s.x,o.x,r.x),or(t,s.y,o.y,r.y),or(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z0 extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(wh(a,l.x,c.x,u.x,f.x),wh(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var gc=Object.freeze({__proto__:null,ArcCurve:Bf,CatmullRomCurve3:Hc,CubicBezierCurve:F0,CubicBezierCurve3:zf,EllipseCurve:kc,LineCurve:O0,LineCurve3:kf,QuadraticBezierCurve:B0,QuadraticBezierCurve3:Gc,SplineCurve:z0});class Hf extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new gc[s.type]().fromJSON(s))}return this}}class Wl extends Hf{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new O0(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new B0(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new F0(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new z0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new kc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Vc extends Wl{constructor(t){super(t),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Wl().fromJSON(s))}return this}}function Cp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Gf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Up(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<s;h+=e){const p=i[h],d=i[h+1];p<a&&(a=p),d<l&&(l=d),p>u&&(u=p),d>f&&(f=d)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return yr(o,r,e,a,l,c,0),r}function Gf(i,t,e,n,s){let o;if(s===Xp(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=Eh(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=Eh(r/n|0,i[r],i[r+1],o);return o&&xo(o,o.next)&&(wr(o),o=o.next),o}function Ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(xo(e,e.next)||Fe(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&zp(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?Lp(i,n,s,o):Pp(i)){t.push(l.i,i.i,c.i),wr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Dp(Ts(i),t),yr(i,t,e,n,s,o,2)):r===2&&Ip(i,t,e,n,s,o):yr(Ts(i),t,e,n,s,o,1);break}}}function Pp(i){const t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,o,r),f=Math.min(a,l,c),h=Math.max(s,o,r),p=Math.max(a,l,c);let d=n.next;for(;d!==t;){if(d.x>=u&&d.x<=h&&d.y>=f&&d.y<=p&&ko(s,a,o,l,r,c,d.x,d.y)&&Fe(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Lp(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Fe(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,u=s.y,f=o.y,h=r.y,p=Math.min(a,l,c),d=Math.min(u,f,h),_=Math.max(a,l,c),m=Math.max(u,f,h),g=Xl(p,d,t,e,n),v=Xl(_,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=g&&x&&x.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=d&&M.y<=m&&M!==s&&M!==r&&ko(a,u,l,f,c,h,M.x,M.y)&&Fe(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=p&&x.x<=_&&x.y>=d&&x.y<=m&&x!==s&&x!==r&&ko(a,u,l,f,c,h,x.x,x.y)&&Fe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=_&&M.y>=d&&M.y<=m&&M!==s&&M!==r&&ko(a,u,l,f,c,h,M.x,M.y)&&Fe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=d&&x.y<=m&&x!==s&&x!==r&&ko(a,u,l,f,c,h,x.x,x.y)&&Fe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Dp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!xo(n,s)&&Wf(n,e,e.next,s)&&br(n,s)&&br(s,n)&&(t.push(n.i,e.i,s.i),wr(e),wr(e.next),e=i=s),e=e.next}while(e!==i);return Ts(e)}function Ip(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Gp(r,a)){let l=Xf(r,a);r=Ts(r,r.next),l=Ts(l,l.next),yr(r,t,e,n,s,o,0),yr(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Up(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Gf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Hp(c))}s.sort(Np);for(let o=0;o<s.length;o++)e=Fp(s[o],e);return e}function Np(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Fp(i,t){const e=Op(i,t);if(!e)return t;const n=Xf(e,i);return Ts(n,n.next),Ts(e,e.next)}function Op(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(xo(i,e))return e;do{if(xo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vf(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);br(e,i)&&(f<u||f===u&&(e.x>r.x||e.x===r.x&&Bp(r,e)))&&(r=e,u=f)}e=e.next}while(e!==a);return r}function Bp(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function zp(i,t,e,n){let s=i;do s.z===0&&(s.z=Xl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kp(s)}function kp(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function Xl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vf(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function ko(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&Vf(i,t,e,n,s,o,r,a)}function Gp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vp(i,t)&&(br(i,t)&&br(t,i)&&Wp(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||xo(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function xo(i,t){return i.x===t.x&&i.y===t.y}function Wf(i,t,e,n){const s=sa(Fe(i,t,e)),o=sa(Fe(i,t,n)),r=sa(Fe(e,n,i)),a=sa(Fe(e,n,t));return!!(s!==o&&r!==a||s===0&&ia(i,e,t)||o===0&&ia(i,n,t)||r===0&&ia(e,i,n)||a===0&&ia(e,t,n))}function ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sa(i){return i>0?1:i<0?-1:0}function Vp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function br(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function Wp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Xf(i,t){const e=ql(i.i,i.x,i.y),n=ql(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Eh(i,t,e,n){const s=ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xp(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class qp{static triangulate(t,e,n=2){return Cp(t,e,n)}}class xi{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return xi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Th(t),Ah(n,t);let r=t.length;e.forEach(Th);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Ah(n,e[l]);const a=qp.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Th(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ah(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Pr extends Ee{constructor(t=new Vc([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Yp;let M,x=!1,y,b,w,S;if(g){M=g.getSpacedPoints(u),x=!0,h=!1;const Y=g.isCatmullRomCurve3?g.closed:!1;y=g.computeFrenetFrames(u,Y),b=new B,w=new B,S=new B}h||(m=0,p=0,d=0,_=0);const E=a.extractPoints(c);let T=E.shape;const C=E.holes;if(!xi.isClockWise(T)){T=T.reverse();for(let Y=0,et=C.length;Y<et;Y++){const k=C[Y];xi.isClockWise(k)&&(C[Y]=k.reverse())}}function P(Y){const k=10000000000000001e-36;let Z=Y[0];for(let at=1;at<=Y.length;at++){const xt=at%Y.length,yt=Y[xt],At=yt.x-Z.x,Bt=yt.y-Z.y,z=At*At+Bt*Bt,$t=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(Z.x),Math.abs(Z.y)),Xt=k*$t*$t;if(z<=Xt){Y.splice(xt,1),at--;continue}Z=yt}}P(T),C.forEach(P);const R=C.length,I=T;for(let Y=0;Y<R;Y++){const et=C[Y];T=T.concat(et)}function N(Y,et,k){return et||he("ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(et,k)}const O=T.length;function G(Y,et,k){let Z,at,xt;const yt=Y.x-et.x,At=Y.y-et.y,Bt=k.x-Y.x,z=k.y-Y.y,$t=yt*yt+At*At,Xt=yt*z-At*Bt;if(Math.abs(Xt)>Number.EPSILON){const U=Math.sqrt($t),A=Math.sqrt(Bt*Bt+z*z),J=et.x-At/U,Q=et.y+yt/U,ut=k.x-z/A,Et=k.y+Bt/A,Rt=((ut-J)*z-(Et-Q)*Bt)/(yt*z-At*Bt);Z=J+yt*Rt-Y.x,at=Q+At*Rt-Y.y;const ft=Z*Z+at*at;if(ft<=2)return new vt(Z,at);xt=Math.sqrt(ft/2)}else{let U=!1;yt>Number.EPSILON?Bt>Number.EPSILON&&(U=!0):yt<-Number.EPSILON?Bt<-Number.EPSILON&&(U=!0):Math.sign(At)===Math.sign(z)&&(U=!0),U?(Z=-At,at=yt,xt=Math.sqrt($t)):(Z=yt,at=At,xt=Math.sqrt($t/2))}return new vt(Z/xt,at/xt)}const V=[];for(let Y=0,et=I.length,k=et-1,Z=Y+1;Y<et;Y++,k++,Z++)k===et&&(k=0),Z===et&&(Z=0),V[Y]=G(I[Y],I[k],I[Z]);const $=[];let tt,Mt=V.concat();for(let Y=0,et=R;Y<et;Y++){const k=C[Y];tt=[];for(let Z=0,at=k.length,xt=at-1,yt=Z+1;Z<at;Z++,xt++,yt++)xt===at&&(xt=0),yt===at&&(yt=0),tt[Z]=G(k[Z],k[xt],k[yt]);$.push(tt),Mt=Mt.concat(tt)}let j;if(m===0)j=xi.triangulateShape(I,C);else{const Y=[],et=[];for(let k=0;k<m;k++){const Z=k/m,at=p*Math.cos(Z*Math.PI/2),xt=d*Math.sin(Z*Math.PI/2)+_;for(let yt=0,At=I.length;yt<At;yt++){const Bt=N(I[yt],V[yt],xt);pt(Bt.x,Bt.y,-at),Z===0&&Y.push(Bt)}for(let yt=0,At=R;yt<At;yt++){const Bt=C[yt];tt=$[yt];const z=[];for(let $t=0,Xt=Bt.length;$t<Xt;$t++){const U=N(Bt[$t],tt[$t],xt);pt(U.x,U.y,-at),Z===0&&z.push(U)}Z===0&&et.push(z)}}j=xi.triangulateShape(Y,et)}const St=j.length,lt=d+_;for(let Y=0;Y<O;Y++){const et=h?N(T[Y],Mt[Y],lt):T[Y];x?(w.copy(y.normals[0]).multiplyScalar(et.x),b.copy(y.binormals[0]).multiplyScalar(et.y),S.copy(M[0]).add(w).add(b),pt(S.x,S.y,S.z)):pt(et.x,et.y,0)}for(let Y=1;Y<=u;Y++)for(let et=0;et<O;et++){const k=h?N(T[et],Mt[et],lt):T[et];x?(w.copy(y.normals[Y]).multiplyScalar(k.x),b.copy(y.binormals[Y]).multiplyScalar(k.y),S.copy(M[Y]).add(w).add(b),pt(S.x,S.y,S.z)):pt(k.x,k.y,f/u*Y)}for(let Y=m-1;Y>=0;Y--){const et=Y/m,k=p*Math.cos(et*Math.PI/2),Z=d*Math.sin(et*Math.PI/2)+_;for(let at=0,xt=I.length;at<xt;at++){const yt=N(I[at],V[at],Z);pt(yt.x,yt.y,f+k)}for(let at=0,xt=C.length;at<xt;at++){const yt=C[at];tt=$[at];for(let At=0,Bt=yt.length;At<Bt;At++){const z=N(yt[At],tt[At],Z);x?pt(z.x,z.y+M[u-1].y,M[u-1].x+k):pt(z.x,z.y,f+k)}}}ct(),H();function ct(){const Y=s.length/3;if(h){let et=0,k=O*et;for(let Z=0;Z<St;Z++){const at=j[Z];bt(at[2]+k,at[1]+k,at[0]+k)}et=u+m*2,k=O*et;for(let Z=0;Z<St;Z++){const at=j[Z];bt(at[0]+k,at[1]+k,at[2]+k)}}else{for(let et=0;et<St;et++){const k=j[et];bt(k[2],k[1],k[0])}for(let et=0;et<St;et++){const k=j[et];bt(k[0]+O*u,k[1]+O*u,k[2]+O*u)}}n.addGroup(Y,s.length/3-Y,0)}function H(){const Y=s.length/3;let et=0;K(I,et),et+=I.length;for(let k=0,Z=C.length;k<Z;k++){const at=C[k];K(at,et),et+=at.length}n.addGroup(Y,s.length/3-Y,1)}function K(Y,et){let k=Y.length;for(;--k>=0;){const Z=k;let at=k-1;at<0&&(at=Y.length-1);for(let xt=0,yt=u+m*2;xt<yt;xt++){const At=O*xt,Bt=O*(xt+1),z=et+Z+At,$t=et+at+At,Xt=et+at+Bt,U=et+Z+Bt;W(z,$t,Xt,U)}}}function pt(Y,et,k){l.push(Y),l.push(et),l.push(k)}function bt(Y,et,k){ht(Y),ht(et),ht(k);const Z=s.length/3,at=v.generateTopUV(n,s,Z-3,Z-2,Z-1);dt(at[0]),dt(at[1]),dt(at[2])}function W(Y,et,k,Z){ht(Y),ht(et),ht(Z),ht(et),ht(k),ht(Z);const at=s.length/3,xt=v.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);dt(xt[0]),dt(xt[1]),dt(xt[3]),dt(xt[1]),dt(xt[2]),dt(xt[3])}function ht(Y){s.push(l[Y*3+0]),s.push(l[Y*3+1]),s.push(l[Y*3+2])}function dt(Y){o.push(Y.x),o.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new gc[s.type]().fromJSON(s)),new Pr(n,t.options)}}const Yp={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new vt(o,r),new vt(a,l),new vt(c,u)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],p=t[s*3+1],d=t[s*3+2],_=t[o*3],m=t[o*3+1],g=t[o*3+2];return Math.abs(a-u)<Math.abs(r-c)?[new vt(r,1-l),new vt(c,1-f),new vt(h,1-d),new vt(_,1-g)]:[new vt(a,1-l),new vt(u,1-f),new vt(p,1-d),new vt(m,1-g)]}};function Zp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ei extends zc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ei(t.radius,t.detail)}}class ci extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,p=[],d=[],_=[],m=[];for(let g=0;g<u;g++){const v=g*h-r;for(let M=0;M<c;M++){const x=M*f-o;d.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const M=v+c*g,x=v+c*(g+1),y=v+1+c*(g+1),b=v+1+c*g;p.push(M,x,b),p.push(x,y,b)}this.setIndex(p),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class Wc extends Ee{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,p=new B,d=new vt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const g=o+m/n*r;p.x=f*Math.cos(g),p.y=f*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),d.x=(p.x/e+1)/2,d.y=(p.y/e+1)/2,u.push(d.x,d.y)}f+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let g=0;g<n;g++){const v=g+m,M=v,x=v+n+1,y=v+n+2,b=v+1;a.push(M,x,b),a.push(x,y,b)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mn extends Ee{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],f=new B,h=new B,p=[],d=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],M=g/n,x=r+M*a,y=t*Math.cos(x),b=Math.sqrt(t*t-y*y);let w=0;g===0&&r===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let S=0;S<=e;S++){const E=S/e,T=s+E*o;f.x=-b*Math.cos(T),f.y=y,f.z=b*Math.sin(T),d.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(E+w,1-M),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const M=u[g][v+1],x=u[g][v],y=u[g+1][v],b=u[g+1][v+1];(g!==0||r>0)&&p.push(M,x,b),(g!==n-1||l<Math.PI)&&p.push(x,y,b)}this.setIndex(p),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Si extends Ee{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new B,p=new B,d=new B;for(let _=0;_<=n;_++){const m=r+_/n*a;for(let g=0;g<=s;g++){const v=g/s*o;p.x=(t+e*Math.cos(m))*Math.cos(v),p.y=(t+e*Math.cos(m))*Math.sin(v),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(p,h).normalize(),u.push(d.x,d.y,d.z),f.push(g/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const g=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,M=(s+1)*(_-1)+m,x=(s+1)*_+m;l.push(g,v,x),l.push(v,M,x)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class bo extends Ee{constructor(t=new Gc(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new B,l=new B,c=new vt;let u=new B;const f=[],h=[],p=[],d=[];_(),this.setIndex(d),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(p,2));function _(){for(let M=0;M<e;M++)m(M);m(o===!1?e:0),v(),g()}function m(M){u=t.getPointAt(M/e,u);const x=r.normals[M],y=r.binormals[M];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,S=Math.sin(w),E=-Math.cos(w);l.x=E*x.x+S*y.x,l.y=E*x.y+S*y.y,l.z=E*x.z+S*y.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const y=(s+1)*(M-1)+(x-1),b=(s+1)*M+(x-1),w=(s+1)*M+x,S=(s+1)*(M-1)+x;d.push(y,b,S),d.push(b,w,S)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new bo(new gc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function vo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Rh(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rh(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function _n(i){const t={};for(let e=0;e<i.length;e++){const n=vo(i[e]);for(const s in n)t[s]=n[s]}return t}function Rh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $p(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Yf={clone:vo,merge:_n};var Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vo(t.uniforms),this.uniformsGroups=$p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new we().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Zf extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ar extends ls{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Rr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jt extends ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Rr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $f extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kf extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ta={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ch(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ch(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ch(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Jf{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],d=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Qf=new Jf;class Xc{constructor(t){this.manager=t!==void 0?t:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xs=new WeakMap;class jf extends Xc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Ta.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let f=Xs.get(r);f===void 0&&(f=[],Xs.set(r,f)),f.push({onLoad:e,onError:s})}return r}const a=xr("img");function l(){u(),e&&e(this);const f=Xs.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}Xs.delete(this),o.manager.itemEnd(t)}function c(f){u(),s&&s(f),Ta.remove(`image:${t}`);const h=Xs.get(this)||[];for(let p=0;p<h.length;p++){const d=h[p];d.onError&&d.onError(f)}Xs.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ta.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class k0 extends Xc{constructor(t){super(t)}load(t,e,n,s){const o=new tn,r=new jf(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class qc extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class H0 extends qc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Sl=new we,Ph=new B,Lh=new B;class G0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Sl,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;t.coordinateSystem===go||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oa=new B,ra=new Hi,ui=new B;class V0 extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,ra,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,ra,ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oa,ra,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,ra,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new B,Dh=new vt,Ih=new vt;class nn extends V0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,Dh,Ih),e.subVectors(Ih,Dh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Qp extends G0{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}}class td extends qc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Yc extends V0{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jp extends G0{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class W0 extends qc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new jp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const qs=-90,Ys=1;class ed extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(qs,Ys,t,e);s.layers=this.layers,this.add(s);const o=new nn(qs,Ys,t,e);o.layers=this.layers,this.add(o);const r=new nn(qs,Ys,t,e);r.layers=this.layers,this.add(r);const a=new nn(qs,Ys,t,e);a.layers=this.layers,this.add(a);const l=new nn(qs,Ys,t,e);l.layers=this.layers,this.add(l);const c=new nn(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class nd extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Yl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const j0=class j0{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};j0.prototype.isMatrix2=!0;let Zl=j0;class id extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Uh(i,t,e,n){const s=t1(n);switch(e){case y0:return i*t;case Rc:return i*t/s.components*s.byteLength;case Cc:return i*t/s.components*s.byteLength;case as:return i*t*2/s.components*s.byteLength;case Pc:return i*t*2/s.components*s.byteLength;case b0:return i*t*3/s.components*s.byteLength;case Yn:return i*t*4/s.components*s.byteLength;case Lc:return i*t*4/s.components*s.byteLength;case jo:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Va:return Math.max(i,16)*Math.max(t,8)/4;case ka:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Wa:case Xa:case Ya:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:case dr:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hc:case uc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pr:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t1(i){switch(i){case Cn:case x0:return{byteLength:1,components:1};case po:case v0:case ai:return{byteLength:2,components:1};case Tc:case Ac:return{byteLength:2,components:4};case ri:case Ec:case qn:return{byteLength:4,components:1};case M0:case S0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);function sd(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function e1(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,d)=>p.start-d.start);let h=0;for(let p=1;p<f.length;p++){const d=f[h],_=f[p];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,d=f.length;p<d;p++){const _=f[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var n1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i1=`#ifdef USE_ALPHAHASH
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
#endif`,s1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c1=`#ifdef USE_AOMAP
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
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h1=`#ifdef USE_BATCHING
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
#endif`,u1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m1=`#ifdef USE_IRIDESCENCE
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
#endif`,g1=`#ifdef USE_BUMPMAP
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
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,E1=`#define PI 3.141592653589793
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
} // validated`,T1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A1=`vec3 transformedNormal = objectNormal;
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
#endif`,R1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D1="gl_FragColor = linearToOutputTexel( gl_FragColor );",I1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
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
}`,W1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z1=`#ifdef USE_ENVMAP
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
#endif`,$1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,t2=`uniform sampler2D dfgLUT;
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
}`,e2=`
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
#endif`,n2=`#if defined( RE_IndirectDiffuse )
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
#endif`,i2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,o2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f2=`#if defined( USE_POINTS_UV )
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
#endif`,d2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x2=`#ifdef USE_MORPHTARGETS
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
#endif`,v2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E2=`#ifdef USE_NORMALMAP
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
#endif`,T2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,H2=`float getShadowMask() {
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
}`,G2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V2=`#ifdef USE_SKINNING
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
#endif`,W2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X2=`#ifdef USE_SKINNING
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
#endif`,q2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K2=`#ifdef USE_TRANSMISSION
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
#endif`,J2=`#ifdef USE_TRANSMISSION
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
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,lm=`#if DEPTH_PACKING == 3200
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
}`,hm=`#define DISTANCE
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
}`,um=`#define DISTANCE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
}`,xm=`#define LAMBERT
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
}`,vm=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,Sm=`#define MATCAP
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
}`,ym=`#define NORMAL
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
}`,bm=`#define NORMAL
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
}`,wm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define TOON
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
}`,Cm=`#define TOON
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
}`,Pm=`uniform float size;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Im=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:n1,alphahash_pars_fragment:i1,alphamap_fragment:s1,alphamap_pars_fragment:o1,alphatest_fragment:r1,alphatest_pars_fragment:a1,aomap_fragment:c1,aomap_pars_fragment:l1,batching_pars_vertex:h1,batching_vertex:u1,begin_vertex:f1,beginnormal_vertex:d1,bsdfs:p1,iridescence_fragment:m1,bumpmap_pars_fragment:g1,clipping_planes_fragment:_1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:v1,clipping_planes_vertex:M1,color_fragment:S1,color_pars_fragment:y1,color_pars_vertex:b1,color_vertex:w1,common:E1,cube_uv_reflection_fragment:T1,defaultnormal_vertex:A1,displacementmap_pars_vertex:R1,displacementmap_vertex:C1,emissivemap_fragment:P1,emissivemap_pars_fragment:L1,colorspace_fragment:D1,colorspace_pars_fragment:I1,envmap_fragment:U1,envmap_common_pars_fragment:N1,envmap_pars_fragment:F1,envmap_pars_vertex:O1,envmap_physical_pars_fragment:Z1,envmap_vertex:B1,fog_vertex:z1,fog_pars_vertex:k1,fog_fragment:H1,fog_pars_fragment:G1,gradientmap_pars_fragment:V1,lightmap_pars_fragment:W1,lights_lambert_fragment:X1,lights_lambert_pars_fragment:q1,lights_pars_begin:Y1,lights_toon_fragment:$1,lights_toon_pars_fragment:K1,lights_phong_fragment:J1,lights_phong_pars_fragment:Q1,lights_physical_fragment:j1,lights_physical_pars_fragment:t2,lights_fragment_begin:e2,lights_fragment_maps:n2,lights_fragment_end:i2,lightprobes_pars_fragment:s2,logdepthbuf_fragment:o2,logdepthbuf_pars_fragment:r2,logdepthbuf_pars_vertex:a2,logdepthbuf_vertex:c2,map_fragment:l2,map_pars_fragment:h2,map_particle_fragment:u2,map_particle_pars_fragment:f2,metalnessmap_fragment:d2,metalnessmap_pars_fragment:p2,morphinstance_vertex:m2,morphcolor_vertex:g2,morphnormal_vertex:_2,morphtarget_pars_vertex:x2,morphtarget_vertex:v2,normal_fragment_begin:M2,normal_fragment_maps:S2,normal_pars_fragment:y2,normal_pars_vertex:b2,normal_vertex:w2,normalmap_pars_fragment:E2,clearcoat_normal_fragment_begin:T2,clearcoat_normal_fragment_maps:A2,clearcoat_pars_fragment:R2,iridescence_pars_fragment:C2,opaque_fragment:P2,packing:L2,premultiplied_alpha_fragment:D2,project_vertex:I2,dithering_fragment:U2,dithering_pars_fragment:N2,roughnessmap_fragment:F2,roughnessmap_pars_fragment:O2,shadowmap_pars_fragment:B2,shadowmap_pars_vertex:z2,shadowmap_vertex:k2,shadowmask_pars_fragment:H2,skinbase_vertex:G2,skinning_pars_vertex:V2,skinning_vertex:W2,skinnormal_vertex:X2,specularmap_fragment:q2,specularmap_pars_fragment:Y2,tonemapping_fragment:Z2,tonemapping_pars_fragment:$2,transmission_fragment:K2,transmission_pars_fragment:J2,uv_pars_fragment:Q2,uv_pars_vertex:j2,uv_vertex:tm,worldpos_vertex:em,background_vert:nm,background_frag:im,backgroundCube_vert:sm,backgroundCube_frag:om,cube_vert:rm,cube_frag:am,depth_vert:cm,depth_frag:lm,distance_vert:hm,distance_frag:um,equirect_vert:fm,equirect_frag:dm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:xm,meshlambert_frag:vm,meshmatcap_vert:Mm,meshmatcap_frag:Sm,meshnormal_vert:ym,meshnormal_frag:bm,meshphong_vert:wm,meshphong_frag:Em,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Pm,points_frag:Lm,shadow_vert:Dm,shadow_frag:Im,sprite_vert:Um,sprite_frag:Nm},Ut={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ti={basic:{uniforms:_n([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:_n([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:_n([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:_n([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:_n([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:_n([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:_n([Ut.points,Ut.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:_n([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:_n([Ut.common,Ut.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:_n([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:_n([Ut.sprite,Ut.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:_n([Ut.common,Ut.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:_n([Ut.lights,Ut.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ti.physical={uniforms:_n([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const aa={r:0,b:0,g:0},Fm=new we,od=new te;od.set(-1,0,0,0,1,0,0,0,1);function Om(i,t,e,n,s,o){const r=new Yt(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function p(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const x=v.backgroundBlurriness>0;M=t.get(M,x)}return M}function d(v){let M=!1;const x=p(v);x===null?m(r,a):x&&x.isColor&&(m(x,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,M){const x=p(M);x&&(x.isCubeTexture||x.mapping===Cr)?(c===void 0&&(c=new se(new Le(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:vo(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(od),c.material.toneMapped=le.getTransfer(x.colorSpace)!==_e,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new se(new ci(2,2),new In({name:"BackgroundMaterial",uniforms:vo(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=le.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(aa,qf(i)),e.buffers.color.setClear(aa.r,aa.g,aa.b,M,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),a=M,m(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(r,a)},render:d,addToRenderList:_,dispose:g}}function Bm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let o=s,r=!1;function a(C,D,P,R,I){let N=!1;const O=f(C,R,P,D);o!==O&&(o=O,c(o.object)),N=p(C,R,P,I),N&&d(C,R,P,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,x(C,D,P,R),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function f(C,D,P,R){const I=R.wireframe===!0;let N=n[D.id];N===void 0&&(N={},n[D.id]=N);const O=C.isInstancedMesh===!0?C.id:0;let G=N[O];G===void 0&&(G={},N[O]=G);let V=G[P.id];V===void 0&&(V={},G[P.id]=V);let $=V[I];return $===void 0&&($=h(l()),V[I]=$),$}function h(C){const D=[],P=[],R=[];for(let I=0;I<e;I++)D[I]=0,P[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:R,object:C,attributes:{},index:null}}function p(C,D,P,R){const I=o.attributes,N=D.attributes;let O=0;const G=P.getAttributes();for(const V in G)if(G[V].location>=0){const tt=I[V];let Mt=N[V];if(Mt===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),tt===void 0||tt.attribute!==Mt||Mt&&tt.data!==Mt.data)return!0;O++}return o.attributesNum!==O||o.index!==R}function d(C,D,P,R){const I={},N=D.attributes;let O=0;const G=P.getAttributes();for(const V in G)if(G[V].location>=0){let tt=N[V];tt===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor));const Mt={};Mt.attribute=tt,tt&&tt.data&&(Mt.data=tt.data),I[V]=Mt,O++}o.attributes=I,o.attributesNum=O,o.index=R}function _(){const C=o.newAttributes;for(let D=0,P=C.length;D<P;D++)C[D]=0}function m(C){g(C,0)}function g(C,D){const P=o.newAttributes,R=o.enabledAttributes,I=o.attributeDivisors;P[C]=1,R[C]===0&&(i.enableVertexAttribArray(C),R[C]=1),I[C]!==D&&(i.vertexAttribDivisor(C,D),I[C]=D)}function v(){const C=o.newAttributes,D=o.enabledAttributes;for(let P=0,R=D.length;P<R;P++)D[P]!==C[P]&&(i.disableVertexAttribArray(P),D[P]=0)}function M(C,D,P,R,I,N,O){O===!0?i.vertexAttribIPointer(C,D,P,I,N):i.vertexAttribPointer(C,D,P,R,I,N)}function x(C,D,P,R){_();const I=R.attributes,N=P.getAttributes(),O=D.defaultAttributeValues;for(const G in N){const V=N[G];if(V.location>=0){let $=I[G];if($===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),$!==void 0){const tt=$.normalized,Mt=$.itemSize,j=t.get($);if(j===void 0)continue;const St=j.buffer,lt=j.type,ct=j.bytesPerElement,H=lt===i.INT||lt===i.UNSIGNED_INT||$.gpuType===Ec;if($.isInterleavedBufferAttribute){const K=$.data,pt=K.stride,bt=$.offset;if(K.isInstancedInterleavedBuffer){for(let W=0;W<V.locationSize;W++)g(V.location+W,K.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let W=0;W<V.locationSize;W++)m(V.location+W);i.bindBuffer(i.ARRAY_BUFFER,St);for(let W=0;W<V.locationSize;W++)M(V.location+W,Mt/V.locationSize,lt,tt,pt*ct,(bt+Mt/V.locationSize*W)*ct,H)}else{if($.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)g(V.location+K,$.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);i.bindBuffer(i.ARRAY_BUFFER,St);for(let K=0;K<V.locationSize;K++)M(V.location+K,Mt/V.locationSize,lt,tt,Mt*ct,Mt/V.locationSize*K*ct,H)}}else if(O!==void 0){const tt=O[G];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(V.location,tt);break;case 3:i.vertexAttrib3fv(V.location,tt);break;case 4:i.vertexAttrib4fv(V.location,tt);break;default:i.vertexAttrib1fv(V.location,tt)}}}}v()}function y(){E();for(const C in n){const D=n[C];for(const P in D){const R=D[P];for(const I in R){const N=R[I];for(const O in N)u(N[O].object),delete N[O];delete R[I]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const P in D){const R=D[P];for(const I in R){const N=R[I];for(const O in N)u(N[O].object),delete N[O];delete R[I]}}delete n[C.id]}function w(C){for(const D in n){const P=n[D];for(const R in P){const I=P[R];if(I[C.id]===void 0)continue;const N=I[C.id];for(const O in N)u(N[O].object),delete N[O];delete I[C.id]}}}function S(C){for(const D in n){const P=n[D],R=C.isInstancedMesh===!0?C.id:0,I=P[R];if(I!==void 0){for(const N in I){const O=I[N];for(const G in O)u(O[G].object),delete O[G];delete I[N]}delete P[R],Object.keys(P).length===0&&delete n[D]}}}function E(){T(),r=!0,o!==s&&(o=s,c(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:T,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function zm(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function km(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==Yn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Cn&&w!==qn&&!S&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Qt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,maxSamples:y,samples:b}}function Hm(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new mi,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const d=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||d===null||d.length===0||o&&!m)o?u(null):c();else{const v=o?0:n,M=v*4;let x=g.clippingState||null;l.value=x,x=u(d,h,M,p);for(let y=0;y!==M;++y)x[y]=e[y];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,d){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,d!==!0||m===null){const g=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,x=p;M!==_;++M,x+=4)r.copy(f[M]).applyMatrix4(v,a),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const no=4,Gm=6,Vm=20,Wm=256,No=new Yc,Nh=new Yt;let yl=null,bl=0,wl=0,El=!1;const Xm=new B,ms=new B;class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=Xm}=o;yl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,bl,wl),this._renderer.xr.enabled=El,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ai,format:Yn,colorSpace:gr,depthBuffer:!1},s=Fh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qm(o)),this._blurMaterial=Zm(o,t,e),this._ggxMaterial=Ym(o,t,e)}return s}_compileMaterial(t){const e=new se(new Ee,t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,s,o){const l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Nh),f.toneMapping=oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new Le,new wn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,g=!0):(m.color.copy(Nh),g=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[M],o.y,o.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[M]));const y=this._cubeSize;Zs(s,x*y,M>2?y:0,y,y),f.setRenderTarget(s),g&&f.render(_,l),f.render(t,l)}f.toneMapping=p,f.autoClear=h,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===rs||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:d}=this,_=this._sizeLods[n],m=3*_*(n>d-no?n-d+no:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=d-e,Zs(o,m,g,3*_,2*_),s.setRenderTarget(o),s.render(a,No),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=d-n,Zs(t,m,g,3*_,2*_),s.setRenderTarget(t),s.render(a,No)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-no?s-this._lodMax+no:0),h=4*(this._cubeSize-u);Zs(e,f,h,3*u,2*u),r.setRenderTarget(e),r.render(l,No)}}function qm(i){const t=[],e=[];let n=i;const s=i-no+1+Gm;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,d=new Float32Array(p*h*f),_=new Float32Array(p*h*f);for(let g=0;g<f;g++){const v=g%3*2/3-1,M=g>2?0:-1,x=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];d.set(x,p*h*g);for(let y=0;y<h;y++){const b=u[y*2]*2-1,w=u[y*2+1]*2-1;g===0?ms.set(1,w,b):g===1?ms.set(-b,1,-w):g===2?ms.set(-b,w,1):g===3?ms.set(-1,w,-b):g===4?ms.set(-b,-1,w):ms.set(b,w,-1),ms.toArray(_,(g*h+y)*p)}}const m=new Ee;m.setAttribute("position",new kn(d,p)),m.setAttribute("outputDirection",new kn(_,p)),e.push(new se(m,null)),n>no&&n--}return{lodMeshes:e,sizeLods:t}}function Fh(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ym(i,t,e){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Zm(i,t,e){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Vm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Oh(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Bh(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class X0 extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new I0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),o=new In({name:"CubemapFromEquirect",uniforms:vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:vi});o.uniforms.tEquirect.value=e;const r=new se(s,o),a=e.minFilter;return e.minFilter===ns&&(e.minFilter=sn),new ed(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function $m(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?r(h):o(h)}function o(h){if(h&&h.isTexture){const p=h.mapping;if(p===Qo||p===ya)if(t.has(h)){const d=t.get(h).texture;return a(d,h.mapping)}else{const d=h.image;if(d&&d.height>0){const _=new X0(d.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){const p=h.mapping,d=p===Qo||p===ya,_=p===rs||p===ws;if(d||_){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new $l(i)),m=d?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return d&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new $l(i)),m=d?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Qo?h.mapping=rs:p===ya&&(h.mapping=ws),h}function l(h){let p=0;const d=6;for(let _=0;_<d;_++)h[_]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ss("WebGLRenderer: "+n+" extension not supported."),s}}}function Jm(i,t,e,n){const s={},o=new WeakMap;function r(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const d in h.attributes)t.remove(h.attributes[d]);h.removeEventListener("dispose",r),delete s[h.id];const p=o.get(h);p&&(t.remove(p),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,d=f.attributes.position;let _=0;if(d===void 0)return;if(p!==null){const v=p.array;_=p.version;for(let M=0,x=v.length;M<x;M+=3){const y=v[M+0],b=v[M+1],w=v[M+2];h.push(y,b,b,w,w,y)}}else{const v=d.array;_=d.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const y=M+0,b=M+1,w=M+2;h.push(y,b,b,w,w,y)}}const m=new(d.count>=65535?P0:C0)(h,1);m.version=_;const g=o.get(f);g&&t.remove(g),o.set(f,m)}function u(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Qm(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,h){i.drawElements(n,h,o,f*r),e.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,o,f*r,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,o,f,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:he("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function tg(i,t,e){const n=new WeakMap,s=new Ne;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),d===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,y=1;x>t.maxTextureSize&&(y=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const b=new Float32Array(x*y*4*f),w=new T0(b,x,y,f);w.type=qn,w.needsUpdate=!0;const S=M*4;for(let T=0;T<f;T++){const C=m[T],D=g[T],P=v[T],R=x*y*4*T;for(let I=0;I<C.count;I++){const N=I*S;p===!0&&(s.fromBufferAttribute(C,I),b[R+N+0]=s.x,b[R+N+1]=s.y,b[R+N+2]=s.z,b[R+N+3]=0),d===!0&&(s.fromBufferAttribute(D,I),b[R+N+4]=s.x,b[R+N+5]=s.y,b[R+N+6]=s.z,b[R+N+7]=0),_===!0&&(s.fromBufferAttribute(P,I),b[R+N+8]=s.x,b[R+N+9]=s.y,b[R+N+10]=s.z,b[R+N+11]=P.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new vt(x,y)},n.set(a,h),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const d=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",d),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function eg(i,t,e,n,s){let o=new WeakMap;function r(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(o.get(h)!==u&&(t.update(h),o.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;o.get(p)!==u&&(p.update(),o.set(p,u))}return h}function a(){o=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const ng={[h0]:"LINEAR_TONE_MAPPING",[u0]:"REINHARD_TONE_MAPPING",[f0]:"CINEON_TONE_MAPPING",[d0]:"ACES_FILMIC_TONE_MAPPING",[m0]:"AGX_TONE_MAPPING",[g0]:"NEUTRAL_TONE_MAPPING",[p0]:"CUSTOM_TONE_MAPPING"};function ig(i,t,e,n,s,o){const r=new Zn(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ee;c.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ne([0,2,0,0,2,0],2));const u=new Zf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new se(c,u),h=new Yc(-1,1,1,-1,0,1);let p=null,d=null,_=!1,m,g=null,v=[],M=!1;this.setSize=function(x,y){r.setSize(x,y),a!==null&&a.setSize(x,y),l!==null&&l.setSize(x,y);for(let b=0;b<v.length;b++){const w=v[b];w.setSize&&w.setSize(x,y)}},this.setEffects=function(x){v=x,M=v.length>0&&v[0].isRenderPass===!0;const y=r.width,b=r.height;v.length>0&&a===null&&(a=new Zn(y,b,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(y,b,{type:ai,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){const S=v[w];S.setSize&&S.setSize(y,b)}},this.begin=function(x,y){if(_||x.toneMapping===oi&&v.length===0)return!1;if(g=y,y!==null){const b=y.width,w=y.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return M===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return M},this.end=function(x,y){x.toneMapping=m,_=!0;let b=r,w=a;for(let S=0;S<v.length;S++){const E=v[S];E.enabled!==!1&&(E.render(x,w,b,y),E.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(p!==x.outputColorSpace||d!==x.toneMapping){p=x.outputColorSpace,d=x.toneMapping,u.defines={},le.getTransfer(p)===_e&&(u.defines.SRGB_TRANSFER="");const S=ng[d];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(g),x.render(f,h),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const rd=new tn,Kl=new _o(1,1),ad=new T0,cd=new Df,ld=new I0,zh=[],kh=[],Hh=new Float32Array(16),Gh=new Float32Array(9),Vh=new Float32Array(4);function wo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=zh[s];if(o===void 0&&(o=new Float32Array(s),zh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $c(i,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Vh.set(n),i.uniformMatrix2fv(this.addr,!1,Vh),Ze(e,n)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Gh.set(n),i.uniformMatrix3fv(this.addr,!1,Gh),Ze(e,n)}}function hg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Hh.set(n),i.uniformMatrix4fv(this.addr,!1,Hh),Ze(e,n)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Kl.compareFunction=e.isReversedDepthBuffer()?Ic:Dc,o=Kl):o=rd,e.setTexture2D(t||o,s)}function Mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cd,s)}function Sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ld,s)}function yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ad,s)}function bg(i){switch(i){case 5126:return sg;case 35664:return og;case 35665:return rg;case 35666:return ag;case 35674:return cg;case 35675:return lg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return yg}}function wg(i,t){i.uniform1fv(this.addr,t)}function Eg(i,t){const e=wo(t,this.size,2);i.uniform2fv(this.addr,e)}function Tg(i,t){const e=wo(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){const e=wo(t,this.size,4);i.uniform4fv(this.addr,e)}function Rg(i,t){const e=wo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){const e=wo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){const e=wo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lg(i,t){i.uniform1iv(this.addr,t)}function Dg(i,t){i.uniform2iv(this.addr,t)}function Ig(i,t){i.uniform3iv(this.addr,t)}function Ug(i,t){i.uniform4iv(this.addr,t)}function Ng(i,t){i.uniform1uiv(this.addr,t)}function Fg(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function zg(i,t,e){const n=this.cache,s=t.length,o=$c(e,s);Ye(n,o)||(i.uniform1iv(this.addr,o),Ze(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=Kl:r=rd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function kg(i,t,e){const n=this.cache,s=t.length,o=$c(e,s);Ye(n,o)||(i.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||cd,o[r])}function Hg(i,t,e){const n=this.cache,s=t.length,o=$c(e,s);Ye(n,o)||(i.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||ld,o[r])}function Gg(i,t,e){const n=this.cache,s=t.length,o=$c(e,s);Ye(n,o)||(i.uniform1iv(this.addr,o),Ze(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||ad,o[r])}function Vg(i){switch(i){case 5126:return wg;case 35664:return Eg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ig;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bg(e.type)}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vg(e.type)}}class qg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function Wh(i,t){i.seq.push(t),i.map[t.id]=t}function Yg(i,t,e){const n=i.name,s=n.length;for(Tl.lastIndex=0;;){const o=Tl.exec(n),r=Tl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Wh(e,c===void 0?new Wg(a,i,t):new Xg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new qg(a),Wh(e,f)),e=f}}}class Aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);Yg(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Xh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zg=37297;let $g=0;function Kg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const qh=new te;function Jg(i){le._getMatrix(qh,le.workingColorSpace,i);const t=`mat3( ${qh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case _r:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Kg(i.getShaderSource(t),a)}else return o}function Qg(i,t){const e=Jg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const jg={[h0]:"Linear",[u0]:"Reinhard",[f0]:"Cineon",[d0]:"ACESFilmic",[m0]:"AgX",[g0]:"Neutral",[p0]:"Custom"};function t3(i,t){const e=jg[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new B;function e3(){le.getLuminanceCoefficients(ca);const i=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function i3(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s3(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ho(i){return i!==""}function Zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(o3,a3)}const r3=new Map;function a3(i,t){let e=ie[t];if(e===void 0){const n=r3.get(t);if(n!==void 0)e=ie[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jl(e)}const c3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(c3,l3)}function l3(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Jh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const h3={[Jo]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function u3(i){return h3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f3={[rs]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE_UV"};function d3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":f3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const p3={[ws]:"ENVMAP_MODE_REFRACTION"};function m3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":p3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const g3={[Rr]:"ENVMAP_BLENDING_MULTIPLY",[mf]:"ENVMAP_BLENDING_MIX",[gf]:"ENVMAP_BLENDING_ADD"};function _3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":g3[i.combine]||"ENVMAP_BLENDING_NONE"}function x3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function v3(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=u3(e),c=d3(e),u=m3(e),f=_3(e),h=x3(e),p=n3(e),d=i3(o),_=s.createProgram();let m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ho).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ho).join(`
`),g.length>0&&(g+=`
`)):(m=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),g=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?ie.tonemapping_pars_fragment:"",e.toneMapping!==oi?t3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),e3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ho).join(`
`)),r=Jl(r),r=Zh(r,e),r=$h(r,e),a=Jl(a),a=Zh(a,e),a=$h(a,e),r=Kh(r),a=Kh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=v+m+r,x=v+g+a,y=Xh(s,s.VERTEX_SHADER,M),b=Xh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,y),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",P=s.getShaderInfoLog(y)||"",R=s.getShaderInfoLog(b)||"",I=D.trim(),N=P.trim(),O=R.trim();let G=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,b);else{const $=Yh(s,y,"vertex"),tt=Yh(s,b,"fragment");he("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+$+`
`+tt)}else I!==""?Qt("WebGLProgram: Program Info Log:",I):(N===""||O==="")&&(V=!1);V&&(C.diagnostics={runnable:G,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:g}})}s.deleteShader(y),s.deleteShader(b),S=new Aa(s,_),E=s3(s,_)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,Zg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$g++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let M3=0;class S3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new y3(t),e.set(t,n)),n}}class y3{constructor(t){this.id=M3++,this.code=t,this.usedTimes=0}}function b3(i){return i===as||i===dr||i===pr}function w3(i,t,e,n,s,o){const r=new A0,a=new S3,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,E,T,C,D,P){const R=C.fog,I=D.geometry,N=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?C.environment:null,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,G=t.get(S.envMap||N,O),V=G&&G.mapping===Cr?G.image.height:null,$=p[S.type];S.precision!==null&&(h=n.getMaxPrecision(S.precision),h!==S.precision&&Qt("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Mt=tt!==void 0?tt.length:0;let j=0;I.morphAttributes.position!==void 0&&(j=1),I.morphAttributes.normal!==void 0&&(j=2),I.morphAttributes.color!==void 0&&(j=3);let St,lt,ct,H;if($){const Tt=ti[$];St=Tt.vertexShader,lt=Tt.fragmentShader}else{St=S.vertexShader,lt=S.fragmentShader;const Tt=a.getVertexShaderStage(S),wt=a.getFragmentShaderStage(S);a.update(S,Tt,wt),ct=Tt.id,H=wt.id}const K=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),bt=D.isInstancedMesh===!0,W=D.isBatchedMesh===!0,ht=!!S.map,dt=!!S.matcap,Y=!!G,et=!!S.aoMap,k=!!S.lightMap,Z=!!S.bumpMap&&S.wireframe===!1,at=!!S.normalMap,xt=!!S.displacementMap,yt=!!S.emissiveMap,At=!!S.metalnessMap,Bt=!!S.roughnessMap,z=S.anisotropy>0,$t=S.clearcoat>0,Xt=S.dispersion>0,U=S.retroreflectivity>0,A=S.iridescence>0,J=S.sheen>0,Q=S.transmission>0,ut=z&&!!S.anisotropyMap,Et=$t&&!!S.clearcoatMap,Rt=$t&&!!S.clearcoatNormalMap,ft=$t&&!!S.clearcoatRoughnessMap,gt=A&&!!S.iridescenceMap,Pt=A&&!!S.iridescenceThicknessMap,Vt=J&&!!S.sheenColorMap,It=J&&!!S.sheenRoughnessMap,Lt=!!S.specularMap,Wt=!!S.specularColorMap,Zt=!!S.specularIntensityMap,ee=Q&&!!S.transmissionMap,q=Q&&!!S.thicknessMap,Ct=!!S.gradientMap,mt=!!S.alphaMap,Dt=S.alphaTest>0,Nt=!!S.alphaHash,F=!!S.extensions;let st=oi;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(st=i.toneMapping);const ot={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:St,fragmentShader:lt,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:W,batchingColor:W&&D._colorsTexture!==null,instancing:bt,instancingColor:bt&&D.instanceColor!==null,instancingMorph:bt&&D.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ht,matcap:dt,envMap:Y,envMapMode:Y&&G.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:k,bumpMap:Z,normalMap:at,displacementMap:xt,emissiveMap:yt,normalMapObjectSpace:at&&S.normalMapType===vf,normalMapTangentSpace:at&&S.normalMapType===mr,packedNormalMap:at&&S.normalMapType===mr&&b3(S.normalMap.format),metalnessMap:At,roughnessMap:Bt,anisotropy:z,anisotropyMap:ut,clearcoat:$t,clearcoatMap:Et,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ft,dispersion:Xt,retroreflection:U,iridescence:A,iridescenceMap:gt,iridescenceThicknessMap:Pt,sheen:J,sheenColorMap:Vt,sheenRoughnessMap:It,specularMap:Lt,specularColorMap:Wt,specularIntensityMap:Zt,transmission:Q,transmissionMap:ee,thicknessMap:q,gradientMap:Ct,opaque:S.transparent===!1&&S.blending===io&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:Dt,alphaHash:Nt,combine:S.combine,mapUv:ht&&d(S.map.channel),aoMapUv:et&&d(S.aoMap.channel),lightMapUv:k&&d(S.lightMap.channel),bumpMapUv:Z&&d(S.bumpMap.channel),normalMapUv:at&&d(S.normalMap.channel),displacementMapUv:xt&&d(S.displacementMap.channel),emissiveMapUv:yt&&d(S.emissiveMap.channel),metalnessMapUv:At&&d(S.metalnessMap.channel),roughnessMapUv:Bt&&d(S.roughnessMap.channel),anisotropyMapUv:ut&&d(S.anisotropyMap.channel),clearcoatMapUv:Et&&d(S.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&d(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&d(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&d(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&d(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&d(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&d(S.sheenRoughnessMap.channel),specularMapUv:Lt&&d(S.specularMap.channel),specularColorMapUv:Wt&&d(S.specularColorMap.channel),specularIntensityMapUv:Zt&&d(S.specularIntensityMap.channel),transmissionMapUv:ee&&d(S.transmissionMap.channel),thicknessMapUv:q&&d(S.thicknessMap.channel),alphaMapUv:mt&&d(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(at||z),vertexNormals:!!I.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(ht||mt),fog:!!R,useFog:S.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||I.attributes.normal===void 0&&at===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:j,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:ht&&S.map.isVideoTexture===!0&&le.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:yt&&S.emissiveMap.isVideoTexture===!0&&le.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xe,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:F&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(F&&S.extensions.multiDraw===!0||W)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function m(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)E.push(T),E.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(g(E,S),v(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numSunLights),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numSunLightShadows),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),S.push(r.mask)}function M(S){const E=p[S.type];let T;if(E){const C=ti[E];T=Yf.clone(C.uniforms)}else T=S.uniforms;return T}function x(S,E){let T=u.get(E);return T!==void 0?++T.usedTimes:(T=new v3(i,E,S,s),c.push(T),u.set(E,T)),T}function y(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function b(S){a.remove(S)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:x,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:w}}function E3(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function T3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Qh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jh(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,d,_,m,g){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:p,material:d,materialVariant:r(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},i[t]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=d,v.materialVariant=r(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=g),t++,v}function l(h,p,d,_,m,g,v){v.reversedDepth===!0&&(m=-m);const M=a(h,p,d,_,m,g);d.transmission>0?n.push(M):d.transparent===!0?s.push(M):e.push(M)}function c(h,p,d,_,m,g){const v=a(h,p,d,_,m,g);d.transmission>0?n.unshift(v):d.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,p){e.length>1&&e.sort(h||T3),n.length>1&&n.sort(p||Qh),s.length>1&&s.sort(p||Qh)}function f(){for(let h=t,p=i.length;h<p;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:u}}function A3(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new jh,i.set(n,[r])):s>=o.length?(r=new jh,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function R3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Yt};break;case"SpotLight":e={position:new B,direction:new B,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function C3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let P3=0;function L3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D3(i){const t=new R3,e=C3(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,o=new we,r=new we;function a(c){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,d=0,_=0,m=0,g=0,v=0,M=0,x=0,y=0,b=0,w=0,S=0,E=0,T=0;c.sort(L3);for(let D=0,P=c.length;D<P;D++){const R=c[D],I=R.color,N=R.intensity,O=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===as?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*N,f+=I.g*N,h+=I.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);T++}else if(R.isSunLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,tt=e.get(R);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[d]=tt,n.sunShadowMap[d]=G;const Mt=$.getViewportCount();for(let j=0;j<Mt;j++)n.sunShadowMatrix[_+j]=$.getMatrix(j),n.sunShadowCascade[_+j]=$._cascadeData[j];_+=Mt,d++}n.sun[p]=V,p++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,tt=e.get(R);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=R.shadow.matrix,y++}n.directional[m]=V,m++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(I).multiplyScalar(N),V.distance=O,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[v]=V;const $=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,$.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[v]=$.matrix,R.castShadow){const tt=e.get(R);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=G,w++}v++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(I).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=V,M++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const $=R.shadow,tt=e.get(R);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[x]=V,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.sunLength!==p||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==M||C.hemiLength!==x||C.numSunShadows!==d||C.numDirectionalShadows!==y||C.numPointShadows!==b||C.numSpotShadows!==w||C.numSpotMaps!==S||C.numLightProbes!==T)&&(n.sun.length=p,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=x,n.sunShadow.length=d,n.sunShadowMap.length=d,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.sunLength=p,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=M,C.hemiLength=x,C.numSunShadows=d,C.numDirectionalShadows=y,C.numPointShadows=b,C.numSpotShadows=w,C.numSpotMaps=S,C.numLightProbes=T,n.version=P3++)}function l(c,u){let f=0,h=0,p=0,d=0,_=0,m=0;const g=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const x=c[v];if(x.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),f++}else if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),r.identity(),o.copy(x.matrixWorld),o.premultiply(g),r.extractRotation(o),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),p++}else if(x.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function tu(i){const t=new D3(i),e=[],n=[],s=[];function o(h){f.camera=h,e.length=0,n.length=0,s.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function I3(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new tu(i),t.set(s,[a])):o>=r.length?(a=new tu(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const U3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N3=`uniform sampler2D shadow_pass;
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
}`,F3=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],O3=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],eu=new we,Fo=new B,Al=new B;function B3(i,t,e){let n=new Oc;const s=new vt,o=new vt,r=new Ne,a=new $f,l=new Kf,c={},u=e.maxTextureSize,f={[si]:fn,[fn]:si,[Xe]:Xe},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:U3,fragmentShader:N3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const d=new Ee;d.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(d,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let g=this.type;this.render=function(b,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===$u&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);const E=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(vi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const P=g!==this.type;P&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(I=>I.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,I=b.length;R<I;R++){const N=b[R],O=N.shadow;if(O===void 0){Qt("WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const G=O.getFrameExtents();s.multiply(G),o.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/G.x),s.x=o.x*G.x,O.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/G.y),s.y=o.y*G.y,O.mapSize.y=o.y));const V=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===eo){if(N.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Zn(s.x,s.y,{format:as,type:ai,minFilter:sn,magFilter:sn,generateMipmaps:!1}),O.map.texture.name=N.name+".shadowMap",O.map.depthTexture=new _o(s.x,s.y,qn),O.map.depthTexture.name=N.name+".shadowMapDepth",O.map.depthTexture.format=bi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je}else N.isPointLight?(O.map=new X0(s.x),O.map.depthTexture=new Of(s.x,ri)):(O.map=new Zn(s.x,s.y),O.map.depthTexture=new _o(s.x,s.y,ri)),O.map.depthTexture.name=N.name+".shadowMap",O.map.depthTexture.format=bi,this.type===Jo?(O.map.depthTexture.compareFunction=V?Ic:Dc,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const $=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();N.isPointLight!==!0&&O.updateMatrices(N,S);for(let tt=0;tt<$;tt++){const Mt=O.getCamera(tt);if(N.isPointLight){const j=O.camera,St=O.matrix,lt=N.distance||j.far;lt!==j.far&&(j.far=lt,j.updateProjectionMatrix()),Fo.setFromMatrixPosition(N.matrixWorld),j.position.copy(Fo),Al.copy(j.position),Al.add(F3[tt]),j.up.copy(O3[tt]),j.lookAt(Al),j.updateMatrixWorld(),St.makeTranslation(-Fo.x,-Fo.y,-Fo.z),eu.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),O._frustum.setFromProjectionMatrix(eu,j.coordinateSystem,j.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(O.map),i.clear());const j=O.getViewport(tt);r.set(o.x*j.x,o.y*j.y,o.x*j.z,o.y*j.w),D.viewport(r)}n=O.getFrustum(tt),x(w,S,Mt,N,this.type)}O.isPointLightShadow!==!0&&this.type===eo&&v(O,S),O.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,C)};function v(b,w){const S=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Zn(s.x,s.y,{format:as,type:ai}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,S,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,S,p,_,null)}function M(b,w,S,E){let T=null;const C=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)T=C;else if(T=S.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=T.uuid,P=w.uuid;let R=c[D];R===void 0&&(R={},c[D]=R);let I=R[P];I===void 0&&(I=T.clone(),R[P]=I,w.addEventListener("dispose",y)),T=I}if(T.visible=w.visible,T.wireframe=w.wireframe,E===eo?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=i.properties.get(T);D.light=S}return T}function x(b,w,S,E,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===eo)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const P=t.update(b),R=b.material;if(Array.isArray(R)){const I=P.groups;for(let N=0,O=I.length;N<O;N++){const G=I[N],V=R[G.materialIndex];if(V&&V.visible){const $=M(b,V,E,T);b.onBeforeShadow(i,b,w,S,P,$,G),i.renderBufferDirect(S,null,P,$,b,G),b.onAfterShadow(i,b,w,S,P,$,G)}}}else if(R.visible){const I=M(b,R,E,T);b.onBeforeShadow(i,b,w,S,P,I,null),i.renderBufferDirect(S,null,P,I,b,null),b.onAfterShadow(i,b,w,S,P,I,null)}}const D=b.children;for(let P=0,R=D.length;P<R;P++)x(D[P],w,S,E,T)}function y(b){b.target.removeEventListener("dispose",y);for(const S in c){const E=c[S],T=b.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function z3(i,t){function e(){let q=!1;const Ct=new Ne;let mt=null;const Dt=new Ne(0,0,0,0);return{setMask:function(Nt){mt!==Nt&&!q&&(i.colorMask(Nt,Nt,Nt,Nt),mt=Nt)},setLocked:function(Nt){q=Nt},setClear:function(Nt,F,st,ot,Tt){Tt===!0&&(Nt*=ot,F*=ot,st*=ot),Ct.set(Nt,F,st,ot),Dt.equals(Ct)===!1&&(i.clearColor(Nt,F,st,ot),Dt.copy(Ct))},reset:function(){q=!1,mt=null,Dt.set(-1,0,0,0)}}}function n(){let q=!1,Ct=!1,mt=null,Dt=null,Nt=null;return{setReversed:function(F){if(Ct!==F){const st=t.get("EXT_clip_control");F?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Ct=F;const ot=Nt;Nt=null,this.setClear(ot)}},getReversed:function(){return Ct},setTest:function(F){F?K(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(F){mt!==F&&!q&&(i.depthMask(F),mt=F)},setFunc:function(F){if(Ct&&(F=kd[F]),Dt!==F){switch(F){case Ia:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=F}},setLocked:function(F){q=F},setClear:function(F){Nt!==F&&(Nt=F,Ct&&(F=1-F),i.clearDepth(F))},reset:function(){q=!1,mt=null,Dt=null,Nt=null,Ct=!1}}}function s(){let q=!1,Ct=null,mt=null,Dt=null,Nt=null,F=null,st=null,ot=null,Tt=null;return{setTest:function(wt){q||(wt?K(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(wt){Ct!==wt&&!q&&(i.stencilMask(wt),Ct=wt)},setFunc:function(wt,Kt,Jt){(mt!==wt||Dt!==Kt||Nt!==Jt)&&(i.stencilFunc(wt,Kt,Jt),mt=wt,Dt=Kt,Nt=Jt)},setOp:function(wt,Kt,Jt){(F!==wt||st!==Kt||ot!==Jt)&&(i.stencilOp(wt,Kt,Jt),F=wt,st=Kt,ot=Jt)},setLocked:function(wt){q=wt},setClear:function(wt){Tt!==wt&&(i.clearStencil(wt),Tt=wt)},reset:function(){q=!1,Ct=null,mt=null,Dt=null,Nt=null,F=null,st=null,ot=null,Tt=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,d=[],_=null,m=!1,g=null,v=null,M=null,x=null,y=null,b=null,w=null,S=new Yt(0,0,0),E=0,T=!1,C=null,D=null,P=null,R=null,I=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=G>=1):V.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=G>=2);let $=null,tt={};const Mt=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),St=new Ne().fromArray(Mt),lt=new Ne().fromArray(j);function ct(q,Ct,mt,Dt){const Nt=new Uint8Array(4),F=i.createTexture();i.bindTexture(q,F),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<mt;st++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(Ct+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return F}const H={};H[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),K(i.DEPTH_TEST),r.setFunc(fo),Z(!1),at(zl),K(i.CULL_FACE),et(vi);function K(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function pt(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function bt(q,Ct){return h[q]!==Ct?(i.bindFramebuffer(q,Ct),h[q]=Ct,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ct),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function W(q,Ct){let mt=d,Dt=!1;if(q){mt=p.get(Ct),mt===void 0&&(mt=[],p.set(Ct,mt));const Nt=q.textures;if(mt.length!==Nt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let F=0,st=Nt.length;F<st;F++)mt[F]=i.COLOR_ATTACHMENT0+F;mt.length=Nt.length,Dt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(mt)}function ht(q){return _!==q?(i.useProgram(q),_=q,!0):!1}const dt={[vs]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};dt[ju]=i.MIN,dt[tf]=i.MAX;const Y={[ef]:i.ZERO,[nf]:i.ONE,[sf]:i.SRC_COLOR,[c0]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[cf]:i.DST_COLOR,[rf]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[l0]:i.ONE_MINUS_SRC_ALPHA,[lf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[df]:i.CONSTANT_ALPHA,[pf]:i.ONE_MINUS_CONSTANT_ALPHA};function et(q,Ct,mt,Dt,Nt,F,st,ot,Tt,wt){if(q===vi){m===!0&&(pt(i.BLEND),m=!1);return}if(m===!1&&(K(i.BLEND),m=!0),q!==Ku){if(q!==g||wt!==T){if((v!==vs||y!==vs)&&(i.blendEquation(i.FUNC_ADD),v=vs,y=vs),wt)switch(q){case io:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:he("WebGLState: Invalid blending: ",q);break}else switch(q){case io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kl:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",q);break}M=null,x=null,b=null,w=null,S.set(0,0,0),E=0,g=q,T=wt}return}Nt=Nt||Ct,F=F||mt,st=st||Dt,(Ct!==v||Nt!==y)&&(i.blendEquationSeparate(dt[Ct],dt[Nt]),v=Ct,y=Nt),(mt!==M||Dt!==x||F!==b||st!==w)&&(i.blendFuncSeparate(Y[mt],Y[Dt],Y[F],Y[st]),M=mt,x=Dt,b=F,w=st),(ot.equals(S)===!1||Tt!==E)&&(i.blendColor(ot.r,ot.g,ot.b,Tt),S.copy(ot),E=Tt),g=q,T=!1}function k(q,Ct){q.side===Xe?pt(i.CULL_FACE):K(i.CULL_FACE);let mt=q.side===fn;Ct&&(mt=!mt),Z(mt),q.blending===io&&q.transparent===!1?et(vi):et(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),o.setMask(q.colorWrite);const Dt=q.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),yt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(q){C!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),C=q)}function at(q){q!==Yu?(K(i.CULL_FACE),q!==D&&(q===zl?i.cullFace(i.BACK):q===Zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),D=q}function xt(q){q!==P&&(O&&i.lineWidth(q),P=q)}function yt(q,Ct,mt){q?(K(i.POLYGON_OFFSET_FILL),(R!==Ct||I!==mt)&&(R=Ct,I=mt,r.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,mt))):pt(i.POLYGON_OFFSET_FILL)}function At(q){q?K(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Bt(q){q===void 0&&(q=i.TEXTURE0+N-1),$!==q&&(i.activeTexture(q),$=q)}function z(q,Ct,mt){mt===void 0&&($===null?mt=i.TEXTURE0+N-1:mt=$);let Dt=tt[mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},tt[mt]=Dt),(Dt.type!==q||Dt.texture!==Ct)&&($!==mt&&(i.activeTexture(mt),$=mt),i.bindTexture(q,Ct||H[q]),Dt.type=q,Dt.texture=Ct)}function $t(){const q=tt[$];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch(q){he("WebGLState:",q)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(q){he("WebGLState:",q)}}function A(){try{i.texSubImage2D(...arguments)}catch(q){he("WebGLState:",q)}}function J(){try{i.texSubImage3D(...arguments)}catch(q){he("WebGLState:",q)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(q){he("WebGLState:",q)}}function ut(){try{i.compressedTexSubImage3D(...arguments)}catch(q){he("WebGLState:",q)}}function Et(){try{i.texStorage2D(...arguments)}catch(q){he("WebGLState:",q)}}function Rt(){try{i.texStorage3D(...arguments)}catch(q){he("WebGLState:",q)}}function ft(){try{i.texImage2D(...arguments)}catch(q){he("WebGLState:",q)}}function gt(){try{i.texImage3D(...arguments)}catch(q){he("WebGLState:",q)}}function Pt(q){return f[q]!==void 0?f[q]:i.getParameter(q)}function Vt(q,Ct){f[q]!==Ct&&(i.pixelStorei(q,Ct),f[q]=Ct)}function It(q){St.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),St.copy(q))}function Lt(q){lt.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),lt.copy(q))}function Wt(q,Ct){let mt=c.get(Ct);mt===void 0&&(mt=new WeakMap,c.set(Ct,mt));let Dt=mt.get(q);Dt===void 0&&(Dt=i.getUniformBlockIndex(Ct,q.name),mt.set(q,Dt))}function Zt(q,Ct){const Dt=c.get(Ct).get(q);l.get(Ct)!==Dt&&(i.uniformBlockBinding(Ct,Dt,q.__bindingPointIndex),l.set(Ct,Dt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},$=null,tt={},h={},p=new WeakMap,d=[],_=null,m=!1,g=null,v=null,M=null,x=null,y=null,b=null,w=null,S=new Yt(0,0,0),E=0,T=!1,C=null,D=null,P=null,R=null,I=null,St.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:K,disable:pt,bindFramebuffer:bt,drawBuffers:W,useProgram:ht,setBlending:et,setMaterial:k,setFlipSided:Z,setCullFace:at,setLineWidth:xt,setPolygonOffset:yt,setScissorTest:At,activeTexture:Bt,bindTexture:z,unbindTexture:$t,compressedTexImage2D:Xt,compressedTexImage3D:U,texImage2D:ft,texImage3D:gt,pixelStorei:Vt,getParameter:Pt,updateUBOMapping:Wt,uniformBlockBinding:Zt,texStorage2D:Et,texStorage3D:Rt,texSubImage2D:A,texSubImage3D:J,compressedTexSubImage2D:Q,compressedTexSubImage3D:ut,scissor:It,viewport:Lt,reset:ee}}function k3(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,A){return d?new OffscreenCanvas(U,A):xr("canvas")}function m(U,A,J){let Q=1;const ut=Xt(U);if((ut.width>J||ut.height>J)&&(Q=J/Math.max(ut.width,ut.height)),Q<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Et=Math.floor(Q*ut.width),Rt=Math.floor(Q*ut.height);h===void 0&&(h=_(Et,Rt));const ft=A?_(Et,Rt):h;return ft.width=Et,ft.height=Rt,ft.getContext("2d").drawImage(U,0,0,Et,Rt),Qt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+Et+"x"+Rt+")."),ft}else return"data"in U&&Qt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),U;return U}function g(U){return U.generateMipmaps}function v(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(U,A,J,Q,ut,Et=!1){if(U!==null){if(i[U]!==void 0)return i[U];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Rt;Q&&(Rt=t.get("EXT_texture_norm16"),Rt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=A;if(A===i.RED&&(J===i.FLOAT&&(ft=i.R32F),J===i.HALF_FLOAT&&(ft=i.R16F),J===i.UNSIGNED_BYTE&&(ft=i.R8),J===i.UNSIGNED_SHORT&&Rt&&(ft=Rt.R16_EXT),J===i.SHORT&&Rt&&(ft=Rt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ft=i.R8UI),J===i.UNSIGNED_SHORT&&(ft=i.R16UI),J===i.UNSIGNED_INT&&(ft=i.R32UI),J===i.BYTE&&(ft=i.R8I),J===i.SHORT&&(ft=i.R16I),J===i.INT&&(ft=i.R32I)),A===i.RG&&(J===i.FLOAT&&(ft=i.RG32F),J===i.HALF_FLOAT&&(ft=i.RG16F),J===i.UNSIGNED_BYTE&&(ft=i.RG8),J===i.UNSIGNED_SHORT&&Rt&&(ft=Rt.RG16_EXT),J===i.SHORT&&Rt&&(ft=Rt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ft=i.RG8UI),J===i.UNSIGNED_SHORT&&(ft=i.RG16UI),J===i.UNSIGNED_INT&&(ft=i.RG32UI),J===i.BYTE&&(ft=i.RG8I),J===i.SHORT&&(ft=i.RG16I),J===i.INT&&(ft=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),J===i.UNSIGNED_INT&&(ft=i.RGB32UI),J===i.BYTE&&(ft=i.RGB8I),J===i.SHORT&&(ft=i.RGB16I),J===i.INT&&(ft=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),J===i.UNSIGNED_INT&&(ft=i.RGBA32UI),J===i.BYTE&&(ft=i.RGBA8I),J===i.SHORT&&(ft=i.RGBA16I),J===i.INT&&(ft=i.RGBA32I)),A===i.RGB&&(J===i.UNSIGNED_SHORT&&Rt&&(ft=Rt.RGB16_EXT),J===i.SHORT&&Rt&&(ft=Rt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),A===i.RGBA){const gt=Et?_r:le.getTransfer(ut);J===i.FLOAT&&(ft=i.RGBA32F),J===i.HALF_FLOAT&&(ft=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ft=gt===_e?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Rt&&(ft=Rt.RGBA16_EXT),J===i.SHORT&&Rt&&(ft=Rt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function y(U,A){let J;return U?A===null||A===ri||A===mo?J=i.DEPTH24_STENCIL8:A===qn?J=i.DEPTH32F_STENCIL8:A===po&&(J=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ri||A===mo?J=i.DEPTH_COMPONENT24:A===qn?J=i.DEPTH_COMPONENT32F:A===po&&(J=i.DEPTH_COMPONENT16),J}function b(U,A){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==je&&U.minFilter!==sn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function w(U){const A=U.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function S(U){const A=U.target;A.removeEventListener("dispose",S),C(A)}function E(U){const A=n.get(U);if(A.__webglInit===void 0)return;const J=U.source,Q=p.get(J);if(Q){const ut=Q[A.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&T(U),Object.keys(Q).length===0&&p.delete(J)}n.remove(U)}function T(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const J=U.source,Q=p.get(J);delete Q[A.__cacheKey],r.memory.textures--}function C(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(A.__webglFramebuffer[Q]))for(let ut=0;ut<A.__webglFramebuffer[Q].length;ut++)i.deleteFramebuffer(A.__webglFramebuffer[Q][ut]);else i.deleteFramebuffer(A.__webglFramebuffer[Q]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Q])}else{if(Array.isArray(A.__webglFramebuffer))for(let Q=0;Q<A.__webglFramebuffer.length;Q++)i.deleteFramebuffer(A.__webglFramebuffer[Q]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Q=0;Q<A.__webglColorRenderbuffer.length;Q++)A.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Q]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=U.textures;for(let Q=0,ut=J.length;Q<ut;Q++){const Et=n.get(J[Q]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),r.memory.textures--),n.remove(J[Q])}n.remove(U)}let D=0;function P(){D=0}function R(){return D}function I(U){D=U}function N(){const U=D;return U>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,U}function O(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function G(U,A){const J=n.get(U);if(U.isVideoTexture&&z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const Q=U.image;if(Q===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(J,U,A);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function V(U,A){const J=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){pt(J,U,A);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function $(U,A){const J=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){pt(J,U,A);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function tt(U,A){const J=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){bt(J,U,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const Mt={[fr]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Es]:i.MIRRORED_REPEAT},j={[je]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[zo]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[ns]:i.LINEAR_MIPMAP_LINEAR},St={[Sf]:i.NEVER,[Tf]:i.ALWAYS,[yf]:i.LESS,[Dc]:i.LEQUAL,[bf]:i.EQUAL,[Ic]:i.GEQUAL,[wf]:i.GREATER,[Ef]:i.NOTEQUAL};function lt(U,A){if(A.type===qn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===sn||A.magFilter===ba||A.magFilter===zo||A.magFilter===ns||A.minFilter===sn||A.minFilter===ba||A.minFilter===zo||A.minFilter===ns)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Mt[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Mt[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Mt[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,j[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,j[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,St[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===je||A.minFilter!==zo&&A.minFilter!==ns||A.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ct(U,A){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",w));const Q=A.source;let ut=p.get(Q);ut===void 0&&(ut={},p.set(Q,ut));const Et=O(A);if(Et!==U.__cacheKey){ut[Et]===void 0&&(ut[Et]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,J=!0),ut[Et].usedTimes++;const Rt=ut[U.__cacheKey];Rt!==void 0&&(ut[U.__cacheKey].usedTimes--,Rt.usedTimes===0&&T(A)),U.__cacheKey=Et,U.__webglTexture=ut[Et].texture}return J}function H(U,A,J){return Math.floor(Math.floor(U/J)/A)}function K(U,A,J,Q){const Et=U.updateRanges;if(Et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,J,Q,A.data);else{Et.sort((Vt,It)=>Vt.start-It.start);let Rt=0;for(let Vt=1;Vt<Et.length;Vt++){const It=Et[Rt],Lt=Et[Vt],Wt=It.start+It.count,Zt=H(Lt.start,A.width,4),ee=H(It.start,A.width,4);Lt.start<=Wt+1&&Zt===ee&&H(Lt.start+Lt.count-1,A.width,4)===Zt?It.count=Math.max(It.count,Lt.start+Lt.count-It.start):(++Rt,Et[Rt]=Lt)}Et.length=Rt+1;const ft=e.getParameter(i.UNPACK_ROW_LENGTH),gt=e.getParameter(i.UNPACK_SKIP_PIXELS),Pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Vt=0,It=Et.length;Vt<It;Vt++){const Lt=Et[Vt],Wt=Math.floor(Lt.start/4),Zt=Math.ceil(Lt.count/4),ee=Wt%A.width,q=Math.floor(Wt/A.width),Ct=Zt,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,ee,q,Ct,mt,J,Q,A.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function pt(U,A,J){let Q=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Q=i.TEXTURE_3D);const ut=ct(U,A),Et=A.source;e.bindTexture(Q,U.__webglTexture,i.TEXTURE0+J);const Rt=n.get(Et);if(Et.version!==Rt.__version||ut===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const mt=le.getPrimaries(le.workingColorSpace),Dt=A.colorSpace===Ii?null:le.getPrimaries(A.colorSpace),Nt=A.colorSpace===Ii||mt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let gt=m(A.image,!1,s.maxTextureSize);gt=$t(A,gt);const Pt=o.convert(A.format,A.colorSpace),Vt=o.convert(A.type);let It=x(A.internalFormat,Pt,Vt,A.normalized,A.colorSpace,A.isVideoTexture);lt(Q,A);let Lt;const Wt=A.mipmaps,Zt=A.isVideoTexture!==!0,ee=Rt.__version===void 0||ut===!0,q=Et.dataReady,Ct=b(A,gt);if(A.isDepthTexture)It=y(A.format===is,A.type),ee&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,It,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,It,gt.width,gt.height,0,Pt,Vt,null));else if(A.isDataTexture)if(Wt.length>0){Zt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ct,It,Wt[0].width,Wt[0].height);for(let mt=0,Dt=Wt.length;mt<Dt;mt++)Lt=Wt[mt],Zt?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Lt.width,Lt.height,Pt,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,mt,It,Lt.width,Lt.height,0,Pt,Vt,Lt.data);A.generateMipmaps=!1}else Zt?(ee&&e.texStorage2D(i.TEXTURE_2D,Ct,It,gt.width,gt.height),q&&K(A,gt,Pt,Vt)):e.texImage2D(i.TEXTURE_2D,0,It,gt.width,gt.height,0,Pt,Vt,gt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Zt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,Wt[0].width,Wt[0].height,gt.depth);for(let mt=0,Dt=Wt.length;mt<Dt;mt++)if(Lt=Wt[mt],A.format!==Yn)if(Pt!==null)if(Zt){if(q)if(A.layerUpdates.size>0){const Nt=Uh(Lt.width,Lt.height,A.format,A.type);for(const F of A.layerUpdates){const st=Lt.data.subarray(F*Nt/Lt.data.BYTES_PER_ELEMENT,(F+1)*Nt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,F,Lt.width,Lt.height,1,Pt,st)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Lt.width,Lt.height,gt.depth,Pt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,It,Lt.width,Lt.height,gt.depth,0,Lt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Lt.width,Lt.height,gt.depth,Pt,Vt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,It,Lt.width,Lt.height,gt.depth,0,Pt,Vt,Lt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Zt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ct,It,Wt[0].width,Wt[0].height);for(let mt=0,Dt=Wt.length;mt<Dt;mt++)Lt=Wt[mt],A.format!==Yn?Pt!==null?Zt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Lt.width,Lt.height,Pt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,It,Lt.width,Lt.height,0,Lt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Lt.width,Lt.height,Pt,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,mt,It,Lt.width,Lt.height,0,Pt,Vt,Lt.data)}else if(A.isDataArrayTexture)if(Zt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,gt.width,gt.height,gt.depth),q)if(A.layerUpdates.size>0){const mt=Uh(gt.width,gt.height,A.format,A.type);for(const Dt of A.layerUpdates){const Nt=gt.data.subarray(Dt*mt/gt.data.BYTES_PER_ELEMENT,(Dt+1)*mt/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,gt.width,gt.height,1,Pt,Vt,Nt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Pt,Vt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,gt.width,gt.height,gt.depth,0,Pt,Vt,gt.data);else if(A.isData3DTexture)Zt?(ee&&e.texStorage3D(i.TEXTURE_3D,Ct,It,gt.width,gt.height,gt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Pt,Vt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,It,gt.width,gt.height,gt.depth,0,Pt,Vt,gt.data);else if(A.isFramebufferTexture){if(ee)if(Zt)e.texStorage2D(i.TEXTURE_2D,Ct,It,gt.width,gt.height);else{let mt=gt.width,Dt=gt.height;for(let Nt=0;Nt<Ct;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,It,mt,Dt,0,Pt,Vt,null),mt>>=1,Dt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),gt.parentNode!==mt){mt.appendChild(gt),f.add(A),mt.onpaint=Dt=>{const Nt=Dt.changedElements;for(const F of f)Nt.includes(F.image)&&(F.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,gt);else{const Nt=i.RGBA,F=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Nt,F,st,gt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Zt&&ee){const mt=Xt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,It,mt.width,mt.height)}for(let mt=0,Dt=Wt.length;mt<Dt;mt++)Lt=Wt[mt],Zt?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Pt,Vt,Lt):e.texImage2D(i.TEXTURE_2D,mt,It,Pt,Vt,Lt);A.generateMipmaps=!1}else if(Zt){if(ee){const mt=Xt(gt);e.texStorage2D(i.TEXTURE_2D,Ct,It,mt.width,mt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Vt,gt)}else e.texImage2D(i.TEXTURE_2D,0,It,Pt,Vt,gt);g(A)&&v(Q),Rt.__version=Et.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function bt(U,A,J){if(A.image.length!==6)return;const Q=ct(U,A),ut=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+J);const Et=n.get(ut);if(ut.version!==Et.__version||Q===!0){e.activeTexture(i.TEXTURE0+J);const Rt=le.getPrimaries(le.workingColorSpace),ft=A.colorSpace===Ii?null:le.getPrimaries(A.colorSpace),gt=A.colorSpace===Ii||Rt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Pt=A.isCompressedTexture||A.image[0].isCompressedTexture,Vt=A.image[0]&&A.image[0].isDataTexture,It=[];for(let F=0;F<6;F++)!Pt&&!Vt?It[F]=m(A.image[F],!0,s.maxCubemapSize):It[F]=Vt?A.image[F].image:A.image[F],It[F]=$t(A,It[F]);const Lt=It[0],Wt=o.convert(A.format,A.colorSpace),Zt=o.convert(A.type),ee=x(A.internalFormat,Wt,Zt,A.normalized,A.colorSpace),q=A.isVideoTexture!==!0,Ct=Et.__version===void 0||Q===!0,mt=ut.dataReady;let Dt=b(A,Lt);lt(i.TEXTURE_CUBE_MAP,A);let Nt;if(Pt){q&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ee,Lt.width,Lt.height);for(let F=0;F<6;F++){Nt=It[F].mipmaps;for(let st=0;st<Nt.length;st++){const ot=Nt[st];A.format!==Yn?Wt!==null?q?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st,0,0,ot.width,ot.height,Wt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st,ee,ot.width,ot.height,0,ot.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st,0,0,ot.width,ot.height,Wt,Zt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st,ee,ot.width,ot.height,0,Wt,Zt,ot.data)}}}else{if(Nt=A.mipmaps,q&&Ct){Nt.length>0&&Dt++;const F=Xt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,ee,F.width,F.height)}for(let F=0;F<6;F++)if(Vt){q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,It[F].width,It[F].height,Wt,Zt,It[F].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ee,It[F].width,It[F].height,0,Wt,Zt,It[F].data);for(let st=0;st<Nt.length;st++){const Tt=Nt[st].image[F].image;q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st+1,0,0,Tt.width,Tt.height,Wt,Zt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st+1,ee,Tt.width,Tt.height,0,Wt,Zt,Tt.data)}}else{q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Wt,Zt,It[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,ee,Wt,Zt,It[F]);for(let st=0;st<Nt.length;st++){const ot=Nt[st];q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st+1,0,0,Wt,Zt,ot.image[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,st+1,ee,Wt,Zt,ot.image[F])}}}g(A)&&v(i.TEXTURE_CUBE_MAP),Et.__version=ut.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function W(U,A,J,Q,ut,Et){const Rt=o.convert(J.format,J.colorSpace),ft=o.convert(J.type),gt=x(J.internalFormat,Rt,ft,J.normalized,J.colorSpace),Pt=n.get(A),Vt=n.get(J);if(Vt.__renderTarget=A,!Pt.__hasExternalTextures){const It=Math.max(1,A.width>>Et),Lt=Math.max(1,A.height>>Et);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,Et,gt,It,Lt,A.depth,0,Rt,ft,null):e.texImage2D(ut,Et,gt,It,Lt,0,Rt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ut,Vt.__webglTexture,0,At(A)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ut,Vt.__webglTexture,Et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(U,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const Q=A.depthTexture,ut=Q&&Q.isDepthTexture?Q.type:null,Et=y(A.stencilBuffer,ut),Rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(A),Et,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(A),Et,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Et,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,U)}else{const Q=A.textures;for(let ut=0;ut<Q.length;ut++){const Et=Q[ut],Rt=o.convert(Et.format,Et.colorSpace),ft=o.convert(Et.type),gt=x(Et.internalFormat,Rt,ft,Et.normalized,Et.colorSpace);Bt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(A),gt,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(A),gt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,gt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(U,A,J){const Q=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ut=n.get(A.depthTexture);if(ut.__renderTarget=A,(!ut.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Q){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),ut.__webglTexture===void 0){ut.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),lt(i.TEXTURE_CUBE_MAP,A.depthTexture);const Pt=o.convert(A.depthTexture.format),Vt=o.convert(A.depthTexture.type);let It;A.depthTexture.format===bi?It=i.DEPTH_COMPONENT24:A.depthTexture.format===is&&(It=i.DEPTH24_STENCIL8);for(let Lt=0;Lt<6;Lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,It,A.width,A.height,0,Pt,Vt,null)}}else G(A.depthTexture,0);const Et=ut.__webglTexture,Rt=At(A),ft=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,gt=A.depthTexture.format===is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===bi)Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ft,Et,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,ft,Et,0);else if(A.depthTexture.format===is)Bt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,ft,Et,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,gt,ft,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Y(U){const A=n.get(U),J=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const Q=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Q){const ut=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Q.removeEventListener("dispose",ut)};Q.addEventListener("dispose",ut),A.__depthDisposeCallback=ut}A.__boundDepthTexture=Q}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let Q=0;Q<6;Q++)dt(A.__webglFramebuffer[Q],U,Q);else{const Q=U.texture.mipmaps;Q&&Q.length>0?dt(A.__webglFramebuffer[0],U,0):dt(A.__webglFramebuffer,U,0)}else if(J){A.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Q]),A.__webglDepthbuffer[Q]===void 0)A.__webglDepthbuffer[Q]=i.createRenderbuffer(),ht(A.__webglDepthbuffer[Q],U,!1);else{const ut=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,Et)}}else{const Q=U.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ht(A.__webglDepthbuffer,U,!1);else{const ut=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,Et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(U,A,J){const Q=n.get(U);A!==void 0&&W(Q.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Y(U)}function k(U){const A=U.texture,J=n.get(U),Q=n.get(A);U.addEventListener("dispose",S);const ut=U.textures,Et=U.isWebGLCubeRenderTarget===!0,Rt=ut.length>1;if(Rt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=A.version,r.memory.textures++),Et){J.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[ft]=[];for(let gt=0;gt<A.mipmaps.length;gt++)J.__webglFramebuffer[ft][gt]=i.createFramebuffer()}else J.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)J.__webglFramebuffer[ft]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ft=0,gt=ut.length;ft<gt;ft++){const Pt=n.get(ut[ft]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),r.memory.textures++)}if(U.samples>0&&Bt(U)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ft=0;ft<ut.length;ft++){const gt=ut[ft];J.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);const Pt=o.convert(gt.format,gt.colorSpace),Vt=o.convert(gt.type),It=x(gt.internalFormat,Pt,Vt,gt.normalized,gt.colorSpace,U.isXRRenderTarget===!0),Lt=At(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,It,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,J.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(J.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Et){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(i.TEXTURE_CUBE_MAP,A);for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let gt=0;gt<A.mipmaps.length;gt++)W(J.__webglFramebuffer[ft][gt],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,gt);else W(J.__webglFramebuffer[ft],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(A)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,gt=ut.length;ft<gt;ft++){const Pt=ut[ft],Vt=n.get(Pt);let It=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(It=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,Vt.__webglTexture),lt(It,Pt),W(J.__webglFramebuffer,U,Pt,i.COLOR_ATTACHMENT0+ft,It,0),g(Pt)&&v(It)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ft=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Q.__webglTexture),lt(ft,A),A.mipmaps&&A.mipmaps.length>0)for(let gt=0;gt<A.mipmaps.length;gt++)W(J.__webglFramebuffer[gt],U,A,i.COLOR_ATTACHMENT0,ft,gt);else W(J.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,ft,0);g(A)&&v(ft),e.unbindTexture()}U.depthBuffer&&Y(U)}function Z(U){const A=U.textures;for(let J=0,Q=A.length;J<Q;J++){const ut=A[J];if(g(ut)){const Et=M(U),Rt=n.get(ut).__webglTexture;e.bindTexture(Et,Rt),v(Et),e.unbindTexture()}}}const at=[],xt=[];function yt(U){if(U.samples>0){if(Bt(U)===!1){const A=U.textures,J=U.width,Q=U.height;let ut=i.COLOR_BUFFER_BIT;const Et=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(U),ft=A.length>1;if(ft)for(let Pt=0;Pt<A.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const gt=U.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Pt=0;Pt<A.length;Pt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Pt]);const Vt=n.get(A[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,J,Q,0,0,J,Q,ut,i.NEAREST),l===!0&&(at.length=0,xt.length=0,at.push(i.COLOR_ATTACHMENT0+Pt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(at.push(Et),xt.push(Et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Pt=0;Pt<A.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Pt]);const Vt=n.get(A[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function At(U){return Math.min(s.maxSamples,U.samples)}function Bt(U){const A=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function z(U){const A=r.render.frame;u.get(U)!==A&&(u.set(U,A),U.update())}function $t(U,A){const J=U.colorSpace,Q=U.format,ut=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==gr&&J!==Ii&&(le.getTransfer(J)===_e?(Q!==Yn||ut!==Cn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",J)),A}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.getTextureUnits=R,this.setTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=tt,this.rebindTextures=et,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function hd(i,t){function e(n,s=Ii){let o;const r=le.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===M0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===S0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===x0)return i.BYTE;if(n===v0)return i.SHORT;if(n===po)return i.UNSIGNED_SHORT;if(n===Ec)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===y0)return i.ALPHA;if(n===b0)return i.RGB;if(n===Yn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===Rc)return i.RED;if(n===Cc)return i.RED_INTEGER;if(n===as)return i.RG;if(n===Pc)return i.RG_INTEGER;if(n===Lc)return i.RGBA_INTEGER;if(n===jo||n===tr||n===er||n===nr)if(r===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===jo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===jo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ha||n===Ga||n===Va)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ka)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===dr||n===$a)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Wa||n===Xa)return r===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===qa)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return o.COMPRESSED_R11_EAC;if(n===Za)return o.COMPRESSED_SIGNED_R11_EAC;if(n===dr)return o.COMPRESSED_RG11_EAC;if(n===$a)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===Ja||n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===oc||n===rc||n===ac||n===cc||n===lc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ka)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lc)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===uc||n===fc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===hc)return r===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===pc||n===pr||n===mc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===dc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const H3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G3=`
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

}`;class V3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new U0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:H3,fragmentShader:G3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W3 extends Gi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,d=null;const _=typeof XRWebGLBinding<"u",m=new V3,g={},v=e.getContextAttributes();let M=null,x=null;const y=[],b=[],w=new vt;let S=null,E=null;const T=new nn;T.viewport=new Ne;const C=new nn;C.viewport=new Ne;const D=[T,C],P=new nd;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=y[H];return K===void 0&&(K=new Ea,y[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=y[H];return K===void 0&&(K=new Ea,y[H]=K),K.getGripSpace()},this.getHand=function(H){let K=y[H];return K===void 0&&(K=new Ea,y[H]=K),K.getHandSpace()};function N(H){const K=b.indexOf(H.inputSource);if(K===-1)return;const pt=y[K];pt!==void 0&&(pt.update(H.inputSource,H.frame,c||r),pt.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let H=0;H<y.length;H++){const K=b[H];K!==null&&(b[H]=null,y[H].disconnect(K))}R=null,I=null,m.reset();for(const H in g)delete g[H];if(t.setRenderTarget(M),p=null,h=null,f=null,s=null,x=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(w.width,w.height,!1),E!==null){const H=E.camera;H.fov=E.fov,H.zoom=E.zoom,H.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,bt=null,W=null;v.depth&&(W=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=v.stencil?is:bi,bt=v.stencil?mo:ri);const ht={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:o};f=this.getBinding(),h=f.createProjectionLayer(ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Zn(h.textureWidth,h.textureHeight,{format:Yn,type:Cn,depthTexture:new _o(h.textureWidth,h.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const pt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(H){for(let K=0;K<H.removed.length;K++){const pt=H.removed[K],bt=b.indexOf(pt);bt>=0&&(b[bt]=null,y[bt].disconnect(pt))}for(let K=0;K<H.added.length;K++){const pt=H.added[K];let bt=b.indexOf(pt);if(bt===-1){for(let ht=0;ht<y.length;ht++)if(ht>=b.length){b.push(pt),bt=ht;break}else if(b[ht]===null){b[ht]=pt,bt=ht;break}if(bt===-1)break}const W=y[bt];W&&W.connect(pt)}}const V=new B,$=new B;function tt(H,K,pt){V.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(pt.matrixWorld);const bt=V.distanceTo($),W=K.projectionMatrix.elements,ht=pt.projectionMatrix.elements,dt=W[14]/(W[10]-1),Y=W[14]/(W[10]+1),et=(W[9]+1)/W[5],k=(W[9]-1)/W[5],Z=(W[8]-1)/W[0],at=(ht[8]+1)/ht[0],xt=dt*Z,yt=dt*at,At=bt/(-Z+at),Bt=At*-Z;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Bt),H.translateZ(At),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),W[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const z=dt+At,$t=Y+At,Xt=xt-Bt,U=yt+(bt-Bt),A=et*Y/$t*z,J=k*Y/$t*z;H.projectionMatrix.makePerspective(Xt,U,A,J,z,$t),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Mt(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,pt=H.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),P.near=C.near=T.near=K,P.far=C.far=T.far=pt,(R!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,I=P.far),P.layers.mask=H.layers.mask|6,T.layers.mask=P.layers.mask&-5,C.layers.mask=P.layers.mask&-3;const bt=H.parent,W=P.cameras;Mt(P,bt);for(let ht=0;ht<W.length;ht++)Mt(W[ht],bt);W.length===2?tt(P,T,C):P.projectionMatrix.copy(T.projectionMatrix),E===null&&H.isPerspectiveCamera&&(E={camera:H,fov:H.fov,zoom:H.zoom}),j(H,P,bt)};function j(H,K,pt){pt===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(pt.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Mr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(H){return g[H]};let St=null;function lt(H,K){if(u=K.getViewerPose(c||r),d=K,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let bt=!1;pt.length!==P.cameras.length&&(P.cameras.length=0,bt=!0);for(let Y=0;Y<pt.length;Y++){const et=pt[Y];let k=null;if(p!==null)k=p.getViewport(et);else{const at=f.getViewSubImage(h,et);k=at.viewport,Y===0&&(t.setRenderTargetTextures(x,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(x))}let Z=D[Y];Z===void 0&&(Z=new nn,Z.layers.enable(Y),Z.viewport=new Ne,D[Y]=Z),Z.matrix.fromArray(et.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(et.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(k.x,k.y,k.width,k.height),Y===0&&(P.matrix.copy(Z.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),bt===!0&&P.cameras.push(Z)}const W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Y=f.getDepthInformation(pt[0]);Y&&Y.isValid&&Y.texture&&m.init(Y,s.renderState)}if(W&&W.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Y=0;Y<pt.length;Y++){const et=pt[Y].camera;if(et){let k=g[et];k||(k=new U0,g[et]=k);const Z=f.getCameraImage(et);k.sourceTexture=Z}}}}for(let pt=0;pt<y.length;pt++){const bt=b[pt],W=y[pt];bt!==null&&W!==void 0&&W.update(bt,K,c||r)}St&&St(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),d=null}const ct=new sd;ct.setAnimationLoop(lt),this.setAnimationLoop=function(H){St=H},this.dispose=function(){}}}const X3=new we,ud=new te;ud.set(-1,0,0,0,1,0,0,0,1);function q3(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,qf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,M,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(m,g):g.isMeshLambertMaterial?(o(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(m,g),f(m,g)):g.isMeshPhongMaterial?(o(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,x)):g.isMeshMatcapMaterial?(o(m,g),d(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),_(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=t.get(g),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(X3.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ud),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y3(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const b=y.program;n.uniformBlockBinding(x,b)}function c(x,y){let b=s[x.id];b===void 0&&(m(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",v));const w=y.program;n.updateUBOMapping(x,w);const S=t.render.frame;o[x.id]!==S&&(h(x),o[x.id]=S)}function u(x){const y=f();x.__bindingPointIndex=y;const b=i.createBuffer(),w=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function f(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=s[x.id],b=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,E=b.length;S<E;S++){const T=b[S];if(Array.isArray(T))for(let C=0,D=T.length;C<D;C++)p(T[C],S,C,w);else p(T,S,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,b,w){if(_(x,y,b,w)===!0){const S=x.__offset,E=x.value;if(Array.isArray(E)){let T=0;for(let C=0;C<E.length;C++){const D=E[C],P=g(D);d(D,x.__data,T),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(T+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else d(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,x.__data)}}function d(x,y,b){typeof x=="number"||typeof x=="boolean"?y[0]=x:x.isMatrix3?(y[0]=x.elements[0],y[1]=x.elements[1],y[2]=x.elements[2],y[3]=0,y[4]=x.elements[3],y[5]=x.elements[4],y[6]=x.elements[5],y[7]=0,y[8]=x.elements[6],y[9]=x.elements[7],y[10]=x.elements[8],y[11]=0):ArrayBuffer.isView(x)?y.set(new x.constructor(x.buffer,x.byteOffset,y.length)):x.toArray(y,b)}function _(x,y,b,w){const S=x.value,E=y+"_"+b;if(w[E]===void 0)return typeof S=="number"||typeof S=="boolean"?w[E]=S:ArrayBuffer.isView(S)?w[E]=S.slice():w[E]=S.clone(),!0;{const T=w[E];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return w[E]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(T.equals(S)===!1)return T.copy(S),!0}}return!1}function m(x){const y=x.uniforms;let b=0;const w=16;for(let E=0,T=y.length;E<T;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let D=0,P=C.length;D<P;D++){const R=C[D],I=Array.isArray(R.value)?R.value:[R.value];for(let N=0,O=I.length;N<O;N++){const G=I[N],V=g(G),$=b%w,tt=$%V.boundary,Mt=$+tt;b+=tt,Mt!==0&&w-Mt<V.storage&&(b+=w-Mt),R.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=V.storage}}}const S=b%w;return S>0&&(b+=w-S),x.__size=b,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",x),y}function v(x){const y=x.target;y.removeEventListener("dispose",v);const b=r.indexOf(y.__bindingPointIndex);r.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function M(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:M}}const Z3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function $3(){return fi===null&&(fi=new Fc(Z3,16,16,as,ai),fi.name="DFG_LUT",fi.minFilter=sn,fi.magFilter=sn,fi.wrapS=ni,fi.wrapT=ni,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class fd{constructor(t={}){const{canvas:e=Rf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Cn}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const _=p,m=new Set([Lc,Pc,Cc]),g=new Set([Cn,ri,po,mo,Tc,Ac]),v=new Uint32Array(4),M=new Int32Array(4),x=new B;let y=null,b=null;const w=[],S=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,D=null,P=null,R=null,I=null;this._outputColorSpace=Qe;let N=0,O=0,G=null,V=-1,$=null;const tt=new Ne,Mt=new Ne;let j=null;const St=new Yt(0);let lt=0,ct=e.width,H=e.height,K=1,pt=null,bt=null;const W=new Ne(0,0,ct,H),ht=new Ne(0,0,ct,H);let dt=!1;const Y=new Oc;let et=!1,k=!1;const Z=new we,at=new B,xt=new Ne,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Bt(){return G===null?K:1}let z=n;function $t(L,X){return e.getContext(L,X)}let Xt,U,A,J,Q,ut,Et,Rt,ft,gt,Pt,Vt,It,Lt,Wt,Zt,ee,q,Ct,mt,Dt,Nt,F;try{const L={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),z===null){const X="webgl2";if(z=$t(X,L),z===null)throw $t(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(L){throw e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),he("WebGLRenderer: "+L.message),L}function st(){Xt=new Km(z),Xt.init(),Dt=new hd(z,Xt),U=new km(z,Xt,t,Dt),A=new z3(z,Xt),U.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),P=z.createFramebuffer(),R=z.createFramebuffer(),I=z.createFramebuffer(),J=new jm(z),Q=new E3,ut=new k3(z,Xt,A,Q,U,Dt,J),Et=new $m(T),Rt=new e1(z),Nt=new Bm(z,Rt),ft=new Jm(z,Rt,J,Nt),gt=new eg(z,ft,Rt,Nt,J),q=new tg(z,U,ut),Wt=new Hm(Q),Pt=new w3(T,Et,Xt,U,Nt,Wt),Vt=new q3(T,Q),It=new A3,Lt=new I3(Xt),ee=new Om(T,Et,A,gt,d,l),Zt=new B3(T,gt,U),F=new Y3(z,J,U,A),Ct=new zm(z,Xt,J),mt=new Qm(z,Xt,J),J.programs=Pt.programs,T.capabilities=U,T.extensions=Xt,T.properties=Q,T.renderLists=It,T.shadowMap=Zt,T.state=A,T.info=J}_!==Cn&&(E=new ig(_,e.width,e.height,a,s,o));const ot=new W3(T,z);this.xr=ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const L=Xt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Xt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(L){L!==void 0&&(K=L,this.setSize(ct,H,!1))},this.getSize=function(L){return L.set(ct,H)},this.setSize=function(L,X,rt=!0){if(ot.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=L,H=X,e.width=Math.floor(L*K),e.height=Math.floor(X*K),rt===!0&&(e.style.width=L+"px",e.style.height=X+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(ct*K,H*K).floor()},this.setDrawingBufferSize=function(L,X,rt){ct=L,H=X,K=rt,e.width=Math.floor(L*rt),e.height=Math.floor(X*rt),this.setViewport(0,0,L,X)},this.setEffects=function(L){if(_===Cn){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let X=0;X<L.length;X++)if(L[X].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(tt)},this.getViewport=function(L){return L.copy(W)},this.setViewport=function(L,X,rt,nt){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,X,rt,nt),A.viewport(tt.copy(W).multiplyScalar(K).round())},this.getScissor=function(L){return L.copy(ht)},this.setScissor=function(L,X,rt,nt){L.isVector4?ht.set(L.x,L.y,L.z,L.w):ht.set(L,X,rt,nt),A.scissor(Mt.copy(ht).multiplyScalar(K).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(L){A.setScissorTest(dt=L)},this.setOpaqueSort=function(L){pt=L},this.setTransparentSort=function(L){bt=L},this.getClearColor=function(L){return L.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(L=!0,X=!0,rt=!0){let nt=0;if(L){let it=!1;if(G!==null){const Ot=G.texture.format;it=m.has(Ot)}if(it){const Ot=G.texture.type,kt=g.has(Ot),Ft=ee.getClearColor(),Ht=ee.getClearAlpha(),qt=Ft.r,oe=Ft.g,ae=Ft.b;kt?(v[0]=qt,v[1]=oe,v[2]=ae,v[3]=Ht,z.clearBufferuiv(z.COLOR,0,v)):(M[0]=qt,M[1]=oe,M[2]=ae,M[3]=Ht,z.clearBufferiv(z.COLOR,0,M))}else nt|=z.COLOR_BUFFER_BIT}X&&(nt|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(nt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&z.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),D=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),ee.dispose(),It.dispose(),Lt.dispose(),Q.dispose(),Et.dispose(),gt.dispose(),Nt.dispose(),F.dispose(),Pt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",pn),ot.removeEventListener("sessionend",Ti),Hn.stop()};function Tt(L){L.preventDefault(),vr("WebGLRenderer: Context Lost."),C=!0}function wt(){vr("WebGLRenderer: Context Restored."),C=!1;const L=J.autoReset,X=Zt.enabled,rt=Zt.autoUpdate,nt=Zt.needsUpdate,it=Zt.type;st(),J.autoReset=L,Zt.enabled=X,Zt.autoUpdate=rt,Zt.needsUpdate=nt,Zt.type=it}function Kt(L){he("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Jt(L){const X=L.target;X.removeEventListener("dispose",Jt),ue(X)}function ue(L){me(L),Q.remove(L)}function me(L){const X=Q.get(L).programs;X!==void 0&&(X.forEach(function(rt){Pt.releaseProgram(rt)}),L.isShaderMaterial&&Pt.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,rt,nt,it,Ot){X===null&&(X=yt);const kt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Ft=Nr(L,X,rt,nt,it);A.setMaterial(nt,kt);let Ht=rt.index,qt=1;if(nt.wireframe===!0){if(Ht=ft.getWireframeAttribute(rt),Ht===void 0)return;qt=2}const oe=rt.drawRange,ae=rt.attributes.position;let Gt=oe.start*qt,ge=(oe.start+oe.count)*qt;Ot!==null&&(Gt=Math.max(Gt,Ot.start*qt),ge=Math.min(ge,(Ot.start+Ot.count)*qt)),Ht!==null?(Gt=Math.max(Gt,0),ge=Math.min(ge,Ht.count)):ae!=null&&(Gt=Math.max(Gt,0),ge=Math.min(ge,ae.count));const He=ge-Gt;if(He<0||He===1/0)return;Nt.setup(it,nt,Ft,rt,Ht);let Pe,Te=Ct;if(Ht!==null&&(Pe=Rt.get(Ht),Te=mt,Te.setIndex(Pe)),it.isMesh)nt.wireframe===!0?(A.setLineWidth(nt.wireframeLinewidth*Bt()),Te.setMode(z.LINES)):Te.setMode(z.TRIANGLES);else if(it.isLine){let on=nt.linewidth;on===void 0&&(on=1),A.setLineWidth(on*Bt()),it.isLineSegments?Te.setMode(z.LINES):it.isLineLoop?Te.setMode(z.LINE_LOOP):Te.setMode(z.LINE_STRIP)}else it.isPoints?Te.setMode(z.POINTS):it.isSprite&&Te.setMode(z.TRIANGLES);if(it.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))Te.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const on=it._multiDrawStarts,zt=it._multiDrawCounts,mn=it._multiDrawCount,de=Ht?Rt.get(Ht).bytesPerElement:1,Gn=Q.get(nt).currentProgram.getUniforms();for(let hi=0;hi<mn;hi++)Gn.setValue(z,"_gl_DrawID",hi),Te.render(on[hi]/de,zt[hi])}else if(it.isInstancedMesh)Te.renderInstances(Gt,He,it.count);else if(rt.isInstancedBufferGeometry){const on=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,zt=Math.min(rt.instanceCount,on);Te.renderInstances(Gt,He,zt)}else Te.render(Gt,He)};function ve(L,X,rt,nt){D!==null&&L.isNodeMaterial&&D.setObject(nt,L),et===!0&&Wt.setState(L,rt,!1),L.transparent===!0&&L.side===Xe&&L.forceSinglePass===!1?(L.side=fn,L.needsUpdate=!0,$n(L,X,nt),L.side=si,L.needsUpdate=!0,$n(L,X,nt),L.side=Xe):$n(L,X,nt)}this.compile=function(L,X,rt=null){rt===null&&(rt=L),D!==null&&D.renderStart(L,X,rt),b=Lt.get(rt),b.init(X),S.push(b),rt.traverseVisible(function(it){it.isLight&&it.layers.test(X.layers)&&(b.pushLight(it),it.castShadow&&b.pushShadow(it))}),L!==rt&&L.traverseVisible(function(it){it.isLight&&it.layers.test(X.layers)&&(b.pushLight(it),it.castShadow&&b.pushShadow(it))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),k=this.localClippingEnabled,et=Wt.init(this.clippingPlanes,k),et===!0&&Wt.setGlobalState(this.clippingPlanes,X),D!==null&&Zt.render(b.state.shadowsArray,rt,X);const nt=new Set;return L.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Ot=it.material;if(Ot)if(Array.isArray(Ot))for(let kt=0;kt<Ot.length;kt++){const Ft=Ot[kt];ve(Ft,rt,X,it),nt.add(Ft)}else ve(Ot,rt,X,it),nt.add(Ot)}),b=S.pop(),D!==null&&D.renderEnd(),nt},this.compileAsync=function(L,X,rt=null){const nt=this.compile(L,X,rt);return new Promise(it=>{function Ot(){if(nt.forEach(function(kt){const Ht=Q.get(kt).currentProgram;(Ht===void 0||Ht.isReady())&&nt.delete(kt)}),nt.size===0){it(L);return}setTimeout(Ot,10)}Xt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Ue=null;function Un(L){Ue&&Ue(L)}function pn(){Hn.stop()}function Ti(){Hn.start()}const Hn=new sd;Hn.setAnimationLoop(Un),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(L){Ue=L,ot.setAnimationLoop(L),L===null?Hn.stop():Hn.start()},ot.addEventListener("sessionstart",pn),ot.addEventListener("sessionend",Ti),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(L,X);const rt=ot.enabled===!0&&ot.isPresenting===!0,nt=E!==null&&(G===null||rt)&&E.begin(T,G);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(X),X=ot.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,X,G),b=Lt.get(L,S.length),b.init(X),b.state.textureUnits=ut.getTextureUnits(),S.push(b),Z.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Y.setFromProjectionMatrix(Z,ii,X.reversedDepth),k=this.localClippingEnabled,et=Wt.init(this.clippingPlanes,k),y=It.get(L,w.length),y.init(),w.push(y),ot.enabled===!0&&ot.isPresenting===!0){const kt=T.xr.getDepthSensingMesh();kt!==null&&hs(kt,X,-1/0,T.sortObjects)}hs(L,X,0,T.sortObjects),y.finish(),D!==null&&D.updateLights(b.state.lightsArray),T.sortObjects===!0&&y.sort(pt,bt),At=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,At&&ee.addToRenderList(y,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Wt.beginShadows();const it=b.state.shadowsArray;if(Zt.render(it,L,X),et===!0&&Wt.endShadows(),(nt&&E.hasRenderPass())===!1){const kt=y.opaque,Ft=y.transmissive;if(b.setupLights(),X.isArrayCamera){const Ht=X.cameras;if(Ft.length>0)for(let qt=0,oe=Ht.length;qt<oe;qt++){const ae=Ht[qt];Ir(kt,Ft,L,ae)}At&&ee.render(L);for(let qt=0,oe=Ht.length;qt<oe;qt++){const ae=Ht[qt];Dr(y,L,ae,ae.viewport)}}else Ft.length>0&&Ir(kt,Ft,L,X),At&&ee.render(L),Dr(y,L,X)}G!==null&&O===0&&(ut.updateMultisampleRenderTarget(G),ut.updateRenderTargetMipmap(G)),nt&&E.end(T),L.isScene===!0&&L.onAfterRender(T,L,X),Nt.resetDefaultState(),V=-1,$=null,S.pop(),S.length>0?(b=S[S.length-1],ut.setTextureUnits(b.state.textureUnits),et===!0&&Wt.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,D!==null&&D.renderEnd()};function hs(L,X,rt,nt){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)rt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLightProbeGrid)b.pushLightProbeGrid(L);else if(L.isLight)b.pushLight(L),L.castShadow&&b.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(Y)){nt&&xt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Z);const kt=gt.update(L),Ft=L.material;Ft.visible&&y.push(L,kt,Ft,rt,xt.z,null,X)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(Y))){const kt=gt.update(L),Ft=L.material;if(nt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),xt.copy(L.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),xt.copy(kt.boundingSphere.center)),xt.applyMatrix4(L.matrixWorld).applyMatrix4(Z)),Array.isArray(Ft)){const Ht=kt.groups;for(let qt=0,oe=Ht.length;qt<oe;qt++){const ae=Ht[qt],Gt=Ft[ae.materialIndex];Gt&&Gt.visible&&y.push(L,kt,Gt,rt,xt.z,ae,X)}}else Ft.visible&&y.push(L,kt,Ft,rt,xt.z,null,X)}}const Ot=L.children;for(let kt=0,Ft=Ot.length;kt<Ft;kt++)hs(Ot[kt],X,rt,nt)}function Dr(L,X,rt,nt){const{opaque:it,transmissive:Ot,transparent:kt}=L;b.setupLightsView(rt),et===!0&&Wt.setGlobalState(T.clippingPlanes,rt),nt&&A.viewport(tt.copy(nt)),it.length>0&&As(it,X,rt),Ot.length>0&&As(Ot,X,rt),kt.length>0&&As(kt,X,rt),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Ir(L,X,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[nt.id]===void 0){const Gt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[nt.id]=new Zn(1,1,{generateMipmaps:!0,type:Gt?ai:Cn,minFilter:ns,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}const Ot=b.state.transmissionRenderTarget[nt.id],kt=nt.viewport||tt;Ot.setSize(kt.z*T.transmissionResolutionScale,kt.w*T.transmissionResolutionScale);const Ft=T.getRenderTarget(),Ht=T.getActiveCubeFace(),qt=T.getActiveMipmapLevel();T.setRenderTarget(Ot),T.getClearColor(St),lt=T.getClearAlpha(),lt<1&&T.setClearColor(16777215,.5),T.clear(),At&&ee.render(rt);const oe=T.toneMapping;T.toneMapping=oi;const ae=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),b.setupLightsView(nt),et===!0&&Wt.setGlobalState(T.clippingPlanes,nt),As(L,rt,nt),ut.updateMultisampleRenderTarget(Ot),ut.updateRenderTargetMipmap(Ot),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let ge=0,He=X.length;ge<He;ge++){const Pe=X[ge],{object:Te,geometry:on,material:zt,group:mn}=Pe;if(zt.side===Xe&&Te.layers.test(nt.layers)){const de=zt.side;zt.side=fn,zt.needsUpdate=!0,Eo(Te,rt,nt,on,zt,mn),zt.side=de,zt.needsUpdate=!0,Gt=!0}}Gt===!0&&(ut.updateMultisampleRenderTarget(Ot),ut.updateRenderTargetMipmap(Ot))}T.setRenderTarget(Ft,Ht,qt),T.setClearColor(St,lt),ae!==void 0&&(nt.viewport=ae),T.toneMapping=oe}function As(L,X,rt){const nt=X.isScene===!0?X.overrideMaterial:null;for(let it=0,Ot=L.length;it<Ot;it++){const kt=L[it],{object:Ft,geometry:Ht,group:qt}=kt;let oe=kt.material;oe.allowOverride===!0&&nt!==null&&(oe=nt),Ft.layers.test(rt.layers)&&Eo(Ft,X,rt,Ht,oe,qt)}}function Eo(L,X,rt,nt,it,Ot){D!==null&&it.isNodeMaterial&&D.setObject(L,it),L.onBeforeRender(T,X,rt,nt,it,Ot),L.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),it.onBeforeRender(T,X,rt,nt,L,Ot),it.transparent===!0&&it.side===Xe&&it.forceSinglePass===!1?(it.side=fn,it.needsUpdate=!0,T.renderBufferDirect(rt,X,nt,it,L,Ot),it.side=si,it.needsUpdate=!0,T.renderBufferDirect(rt,X,nt,it,L,Ot),it.side=Xe):T.renderBufferDirect(rt,X,nt,it,L,Ot),L.onAfterRender(T,X,rt,nt,it,Ot)}function $n(L,X,rt){X.isScene!==!0&&(X=yt);const nt=Q.get(L),it=b.state.lights,Ot=b.state.shadowsArray,kt=it.state.version,Ft=Pt.getParameters(L,it.state,Ot,X,rt,b.state.lightProbeGridArray),Ht=Pt.getProgramCacheKey(Ft);let qt=nt.programs;nt.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?X.environment:null,nt.fog=X.fog;const oe=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;nt.envMap=Et.get(L.envMap||nt.environment,oe),nt.envMapRotation=nt.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,qt===void 0&&(L.addEventListener("dispose",Jt),qt=new Map,nt.programs=qt);let ae=qt.get(Ht);if(ae!==void 0){if(nt.currentProgram===ae&&nt.lightsStateVersion===kt)return Vi(L,Ft),ae}else Ft.uniforms=Pt.getUniforms(L),D!==null&&L.isNodeMaterial&&D.build(L,rt,Ft),L.onBeforeCompile(Ft,T),ae=Pt.acquireProgram(Ft,Ht),qt.set(Ht,ae),nt.uniforms=Ft.uniforms;const Gt=nt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Gt.clippingPlanes=Wt.uniform),Vi(L,Ft),nt.needsLights=Od(L),nt.lightsStateVersion=kt,nt.needsLights&&(Gt.ambientLightColor.value=it.state.ambient,Gt.lightProbe.value=it.state.probe,Gt.sunLights.value=it.state.sun,Gt.sunLightShadows.value=it.state.sunShadow,Gt.directionalLights.value=it.state.directional,Gt.directionalLightShadows.value=it.state.directionalShadow,Gt.spotLights.value=it.state.spot,Gt.spotLightShadows.value=it.state.spotShadow,Gt.rectAreaLights.value=it.state.rectArea,Gt.ltc_1.value=it.state.rectAreaLTC1,Gt.ltc_2.value=it.state.rectAreaLTC2,Gt.pointLights.value=it.state.point,Gt.pointLightShadows.value=it.state.pointShadow,Gt.hemisphereLights.value=it.state.hemi,Gt.sunShadowMatrix.value=it.state.sunShadowMatrix,Gt.sunShadowCascade.value=it.state.sunShadowCascade,Gt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Gt.spotLightMatrix.value=it.state.spotLightMatrix,Gt.spotLightMap.value=it.state.spotLightMap,Gt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=b.state.lightProbeGridArray.length>0,nt.currentProgram=ae,nt.uniformsList=null,ae}function Ai(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=Aa.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function Vi(L,X){const rt=Q.get(L);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function Ur(L,X){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;x.setFromMatrixPosition(X.matrixWorld);for(let rt=0,nt=L.length;rt<nt;rt++){const it=L[rt];if(it.texture!==null&&it.boundingBox.containsPoint(x))return it}return null}function Nr(L,X,rt,nt,it){X.isScene!==!0&&(X=yt),ut.resetTextureUnits();const Ot=X.fog,kt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?X.environment:null,Ft=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:le.workingColorSpace,Ht=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,qt=Et.get(nt.envMap||kt,Ht),oe=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ae=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Gt=!!rt.morphAttributes.position,ge=!!rt.morphAttributes.normal,He=!!rt.morphAttributes.color;let Pe=oi;nt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Pe=T.toneMapping);const Te=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,on=Te!==void 0?Te.length:0,zt=Q.get(nt),mn=b.state.lights;if(et===!0&&(k===!0||L!==$)){const Re=L===$&&nt.id===V;Wt.setState(nt,L,Re)}let de=!1;nt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==mn.state.version||zt.outputColorSpace!==Ft||it.isBatchedMesh&&zt.batching===!1||!it.isBatchedMesh&&zt.batching===!0||it.isBatchedMesh&&zt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&zt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&zt.instancing===!1||!it.isInstancedMesh&&zt.instancing===!0||it.isSkinnedMesh&&zt.skinning===!1||!it.isSkinnedMesh&&zt.skinning===!0||it.isInstancedMesh&&zt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&zt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&zt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&zt.instancingMorph===!1&&it.morphTexture!==null||zt.envMap!==qt||nt.fog===!0&&zt.fog!==Ot||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Wt.numPlanes||zt.numIntersection!==Wt.numIntersection)||zt.vertexAlphas!==oe||zt.vertexTangents!==ae||zt.morphTargets!==Gt||zt.morphNormals!==ge||zt.morphColors!==He||zt.toneMapping!==Pe||zt.morphTargetsCount!==on||!!zt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,zt.__version=nt.version);let Gn=zt.currentProgram;de===!0&&(Gn=$n(nt,X,it),D&&nt.isNodeMaterial&&D.onUpdateProgram(nt,Gn,zt));let hi=!1,Wi=!1,Rs=!1;const be=Gn.getUniforms(),Be=zt.uniforms;if(A.useProgram(Gn.program)&&(hi=!0,Wi=!0,Rs=!0),nt.id!==V&&(V=nt.id,Wi=!0),zt.needsLights){const Re=Ur(b.state.lightProbeGridArray,it);zt.lightProbeGrid!==Re&&(zt.lightProbeGrid=Re,Wi=!0)}if(hi||$!==L){A.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),be.setValue(z,"projectionMatrix",L.projectionMatrix),be.setValue(z,"viewMatrix",L.matrixWorldInverse);const qi=be.map.cameraPosition;qi!==void 0&&qi.setValue(z,at.setFromMatrixPosition(L.matrixWorld)),U.logarithmicDepthBuffer&&be.setValue(z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&be.setValue(z,"isOrthographic",L.isOrthographicCamera===!0),$!==L&&($=L,Wi=!0,Rs=!0)}if(zt.needsLights&&(mn.state.sunShadowMap.length>0&&be.setValue(z,"sunShadowMap",mn.state.sunShadowMap,ut),mn.state.directionalShadowMap.length>0&&be.setValue(z,"directionalShadowMap",mn.state.directionalShadowMap,ut),mn.state.spotShadowMap.length>0&&be.setValue(z,"spotShadowMap",mn.state.spotShadowMap,ut),mn.state.pointShadowMap.length>0&&be.setValue(z,"pointShadowMap",mn.state.pointShadowMap,ut)),it.isSkinnedMesh){be.setOptional(z,it,"bindMatrix"),be.setOptional(z,it,"bindMatrixInverse");const Re=it.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),be.setValue(z,"boneTexture",Re.boneTexture,ut))}it.isBatchedMesh&&(be.setOptional(z,it,"batchingTexture"),be.setValue(z,"batchingTexture",it._matricesTexture,ut),be.setOptional(z,it,"batchingIdTexture"),be.setValue(z,"batchingIdTexture",it._indirectTexture,ut),be.setOptional(z,it,"batchingColorTexture"),it._colorsTexture!==null&&be.setValue(z,"batchingColorTexture",it._colorsTexture,ut));const Xi=rt.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&q.update(it,rt,Gn),(Wi||zt.receiveShadow!==it.receiveShadow)&&(zt.receiveShadow=it.receiveShadow,be.setValue(z,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&X.environment!==null&&(Be.envMapIntensity.value=X.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=$3()),Wi){if(be.setValue(z,"toneMappingExposure",T.toneMappingExposure),zt.needsLights&&Fd(Be,Rs),Ot&&nt.fog===!0&&Vt.refreshFogUniforms(Be,Ot),Vt.refreshMaterialUniforms(Be,nt,K,H,b.state.transmissionRenderTarget[L.id]),zt.needsLights&&zt.lightProbeGrid){const Re=zt.lightProbeGrid;Be.probesSH.value=Re.texture,Be.probesMin.value.copy(Re.boundingBox.min),Be.probesMax.value.copy(Re.boundingBox.max),Be.probesResolution.value.copy(Re.resolution)}Aa.upload(z,Ai(zt),Be,ut)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Aa.upload(z,Ai(zt),Be,ut),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&be.setValue(z,"center",it.center),be.setValue(z,"modelViewMatrix",it.modelViewMatrix),be.setValue(z,"normalMatrix",it.normalMatrix),be.setValue(z,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Re=nt.uniformsGroups;for(let qi=0,Cs=Re.length;qi<Cs;qi++){const eh=Re[qi];F.update(eh,Gn),F.bind(eh,Gn)}}return Gn}function Fd(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.sunLights.needsUpdate=X,L.sunLightShadows.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function Od(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(L,X,rt){const nt=Q.get(L);nt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Q.get(L.texture).__webglTexture=X,Q.get(L.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,X){const rt=Q.get(L);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,rt=0){G=L,N=X,O=rt;let nt=null,it=!1,Ot=!1;if(L){const Ft=Q.get(L);if(Ft.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(z.FRAMEBUFFER,Ft.__webglFramebuffer),tt.copy(L.viewport),Mt.copy(L.scissor),j=L.scissorTest,A.viewport(tt),A.scissor(Mt),A.setScissorTest(j),V=-1;return}else if(Ft.__webglFramebuffer===void 0)ut.setupRenderTarget(L);else if(Ft.__hasExternalTextures)ut.rebindTextures(L,Q.get(L.texture).__webglTexture,Q.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const oe=L.depthTexture;if(Ft.__boundDepthTexture!==oe){if(oe!==null&&Q.has(oe)&&(L.width!==oe.image.width||L.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(L)}}const Ht=L.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ot=!0);const qt=Q.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qt[X])?nt=qt[X][rt]:nt=qt[X],it=!0):L.samples>0&&ut.useMultisampledRTT(L)===!1?nt=Q.get(L).__webglMultisampledFramebuffer:Array.isArray(qt)?nt=qt[rt]:nt=qt,tt.copy(L.viewport),Mt.copy(L.scissor),j=L.scissorTest}else tt.copy(W).multiplyScalar(K).floor(),Mt.copy(ht).multiplyScalar(K).floor(),j=dt;if(rt!==0&&(nt=P),A.bindFramebuffer(z.FRAMEBUFFER,nt)&&A.drawBuffers(L,nt),A.viewport(tt),A.scissor(Mt),A.setScissorTest(j),it){const Ft=Q.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,rt)}else if(Ot){const Ft=X;for(let Ht=0;Ht<L.textures.length;Ht++){const qt=Q.get(L.textures[Ht]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ht,qt.__webglTexture,rt,Ft)}}else if(L!==null&&rt!==0){const Ft=Q.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ft.__webglTexture,rt)}V=-1};function th(L){const X=Q.get(L);return(X.__readFormat!==L.format||X.__readType!==L.type)&&(X.__readFormat=L.format,X.__readType=L.type,X.__formatReadable=U.textureFormatReadable(L.format),X.__typeReadable=U.textureTypeReadable(L.type)),X}this.readRenderTargetPixels=function(L,X,rt,nt,it,Ot,kt,Ft=0){if(!(L&&L.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&kt!==void 0&&(Ht=Ht[kt]),Ht){A.bindFramebuffer(z.FRAMEBUFFER,Ht);try{const qt=L.textures[Ft],oe=qt.format,ae=qt.type;L.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft);const Gt=th(qt);if(Gt.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-nt&&rt>=0&&rt<=L.height-it&&z.readPixels(X,rt,nt,it,Dt.convert(oe),Dt.convert(ae),Ot)}finally{const qt=G!==null?Q.get(G).__webglFramebuffer:null;A.bindFramebuffer(z.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(L,X,rt,nt,it,Ot,kt,Ft=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Q.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&kt!==void 0&&(Ht=Ht[kt]),Ht)if(X>=0&&X<=L.width-nt&&rt>=0&&rt<=L.height-it){A.bindFramebuffer(z.FRAMEBUFFER,Ht);const qt=L.textures[Ft],oe=qt.format,ae=qt.type;L.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ft);const Gt=th(qt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ge),z.bufferData(z.PIXEL_PACK_BUFFER,Ot.byteLength,z.STREAM_READ),z.readPixels(X,rt,nt,it,Dt.convert(oe),Dt.convert(ae),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const He=G!==null?Q.get(G).__webglFramebuffer:null;A.bindFramebuffer(z.FRAMEBUFFER,He);const Pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await zd(z,Pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ge),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ot),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ge),z.deleteSync(Pe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,X=null,rt=0){const nt=Math.pow(2,-rt),it=Math.floor(L.image.width*nt),Ot=Math.floor(L.image.height*nt),kt=X!==null?X.x:0,Ft=X!==null?X.y:0;ut.setTexture2D(L,0),z.copyTexSubImage2D(z.TEXTURE_2D,rt,0,0,kt,Ft,it,Ot),A.unbindTexture()},this.copyTextureToTexture=function(L,X,rt=null,nt=null,it=0,Ot=0){let kt,Ft,Ht,qt,oe,ae,Gt,ge,He;const Pe=L.isCompressedTexture?L.mipmaps[Ot]:L.image;if(rt!==null)kt=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,Ht=rt.isBox3?rt.max.z-rt.min.z:1,qt=rt.min.x,oe=rt.min.y,ae=rt.isBox3?rt.min.z:0;else{const Be=Math.pow(2,-it);kt=Math.floor(Pe.width*Be),Ft=Math.floor(Pe.height*Be),L.isDataArrayTexture?Ht=Pe.depth:L.isData3DTexture?Ht=Math.floor(Pe.depth*Be):Ht=1,qt=0,oe=0,ae=0}nt!==null?(Gt=nt.x,ge=nt.y,He=nt.z):(Gt=0,ge=0,He=0);const Te=Dt.convert(X.format),on=Dt.convert(X.type);let zt;X.isData3DTexture?(ut.setTexture3D(X,0),zt=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ut.setTexture2DArray(X,0),zt=z.TEXTURE_2D_ARRAY):(ut.setTexture2D(X,0),zt=z.TEXTURE_2D),A.activeTexture(z.TEXTURE0),A.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),A.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),A.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const mn=A.getParameter(z.UNPACK_ROW_LENGTH),de=A.getParameter(z.UNPACK_IMAGE_HEIGHT),Gn=A.getParameter(z.UNPACK_SKIP_PIXELS),hi=A.getParameter(z.UNPACK_SKIP_ROWS),Wi=A.getParameter(z.UNPACK_SKIP_IMAGES);A.pixelStorei(z.UNPACK_ROW_LENGTH,Pe.width),A.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pe.height),A.pixelStorei(z.UNPACK_SKIP_PIXELS,qt),A.pixelStorei(z.UNPACK_SKIP_ROWS,oe),A.pixelStorei(z.UNPACK_SKIP_IMAGES,ae);const Rs=L.isDataArrayTexture||L.isData3DTexture,be=X.isDataArrayTexture||X.isData3DTexture;if(L.isDepthTexture){const Be=Q.get(L),Xi=Q.get(X),Re=Q.get(Be.__renderTarget),qi=Q.get(Xi.__renderTarget);A.bindFramebuffer(z.READ_FRAMEBUFFER,Re.__webglFramebuffer),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Cs=0;Cs<Ht;Cs++)Rs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.get(L).__webglTexture,it,ae+Cs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.get(X).__webglTexture,Ot,He+Cs)),z.blitFramebuffer(qt,oe,kt,Ft,Gt,ge,kt,Ft,z.DEPTH_BUFFER_BIT,z.NEAREST);A.bindFramebuffer(z.READ_FRAMEBUFFER,null),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(it!==0||L.isRenderTargetTexture||Q.has(L)){const Be=Q.get(L),Xi=Q.get(X);A.bindFramebuffer(z.READ_FRAMEBUFFER,R),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,I);for(let Re=0;Re<Ht;Re++)Rs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Be.__webglTexture,it,ae+Re):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Be.__webglTexture,it),be?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xi.__webglTexture,Ot,He+Re):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xi.__webglTexture,Ot),it!==0?z.blitFramebuffer(qt,oe,kt,Ft,Gt,ge,kt,Ft,z.COLOR_BUFFER_BIT,z.NEAREST):be?z.copyTexSubImage3D(zt,Ot,Gt,ge,He+Re,qt,oe,kt,Ft):z.copyTexSubImage2D(zt,Ot,Gt,ge,qt,oe,kt,Ft);A.bindFramebuffer(z.READ_FRAMEBUFFER,null),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else be?L.isDataTexture||L.isData3DTexture?z.texSubImage3D(zt,Ot,Gt,ge,He,kt,Ft,Ht,Te,on,Pe.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,Ot,Gt,ge,He,kt,Ft,Ht,Te,Pe.data):z.texSubImage3D(zt,Ot,Gt,ge,He,kt,Ft,Ht,Te,on,Pe):L.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ot,Gt,ge,kt,Ft,Te,on,Pe.data):L.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ot,Gt,ge,Pe.width,Pe.height,Te,Pe.data):z.texSubImage2D(z.TEXTURE_2D,Ot,Gt,ge,kt,Ft,Te,on,Pe);A.pixelStorei(z.UNPACK_ROW_LENGTH,mn),A.pixelStorei(z.UNPACK_IMAGE_HEIGHT,de),A.pixelStorei(z.UNPACK_SKIP_PIXELS,Gn),A.pixelStorei(z.UNPACK_SKIP_ROWS,hi),A.pixelStorei(z.UNPACK_SKIP_IMAGES,Wi),Ot===0&&X.generateMipmaps&&z.generateMipmap(zt),A.unbindTexture()},this.initRenderTarget=function(L){Q.get(L).__webglFramebuffer===void 0&&ut.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ut.setTextureCube(L,0):L.isData3DTexture?ut.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ut.setTexture2DArray(L,0):ut.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){N=0,O=0,G=null,A.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const q0=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:d0,AddEquation:vs,AddOperation:gf,AdditiveBlending:uo,AgXToneMapping:m0,AlphaFormat:y0,AlwaysCompare:Tf,AlwaysDepth:Ua,AlwaysStencilFunc:Mf,ArcCurve:Bf,ArrayCamera:nd,BackSide:fn,BasicDepthPacking:xf,Box3:cs,BoxGeometry:Le,BufferAttribute:kn,BufferGeometry:Ee,ByteType:x0,Cache:Ta,Camera:V0,CanvasTexture:Bc,CatmullRomCurve3:Hc,CineonToneMapping:f0,CircleGeometry:yo,ClampToEdgeWrapping:ni,Color:Yt,ColorManagement:le,ConstantAlphaFactor:df,ConstantColorFactor:uf,Controls:id,CubeCamera:ed,CubeDepthTexture:Of,CubeReflectionMapping:rs,CubeRefractionMapping:ws,CubeTexture:I0,CubeUVReflectionMapping:Cr,CubicBezierCurve:F0,CubicBezierCurve3:zf,CullFaceBack:zl,CullFaceFront:Zu,CullFaceNone:Yu,Curve:li,CurvePath:Hf,CustomBlending:Ku,CustomToneMapping:p0,CylinderGeometry:dn,Data3DTexture:Df,DataArrayTexture:T0,DataTexture:Fc,DefaultLoadingManager:Qf,DepthFormat:bi,DepthStencilFormat:is,DepthTexture:_o,DirectionalLight:W0,DoubleSide:Xe,DstAlphaFactor:rf,DstColorFactor:cf,DynamicDrawUsage:Af,EllipseCurve:kc,EqualCompare:bf,EqualDepth:Fa,EquirectangularReflectionMapping:Qo,EquirectangularRefractionMapping:ya,Euler:wi,EventDispatcher:Gi,ExternalTexture:U0,ExtrudeGeometry:Pr,Float32BufferAttribute:ne,FloatType:qn,Fog:Nc,FrontSide:si,Frustum:Oc,GLSL3:Gl,GreaterCompare:wf,GreaterDepth:Ba,GreaterEqualCompare:Ic,GreaterEqualDepth:Oa,Group:pe,HalfFloatType:ai,HemisphereLight:H0,IcosahedronGeometry:Ei,ImageLoader:jf,ImageUtils:Pf,InstancedBufferAttribute:Vl,InstancedMesh:Dn,IntType:Ec,InterleavedBuffer:Uf,InterleavedBufferAttribute:Sr,KeepStencilOp:wa,Layers:A0,LessCompare:yf,LessDepth:Na,LessEqualCompare:Dc,LessEqualDepth:fo,Light:qc,LightShadow:G0,LineCurve:O0,LineCurve3:kf,LinearFilter:sn,LinearMipmapLinearFilter:ns,LinearMipmapNearestFilter:ba,LinearSRGBColorSpace:gr,LinearToneMapping:h0,LinearTransfer:_r,Loader:Xc,LoadingManager:Jf,MOUSE:zi,Material:ls,MathUtils:ce,Matrix2:Zl,Matrix3:te,Matrix4:we,MaxEquation:tf,Mesh:se,MeshBasicMaterial:wn,MeshDepthMaterial:$f,MeshDistanceMaterial:Kf,MeshLambertMaterial:jt,MeshPhongMaterial:ar,MinEquation:ju,MirroredRepeatWrapping:Es,MixOperation:mf,MultiplyBlending:Hl,MultiplyOperation:Rr,NearestFilter:je,NearestMipmapLinearFilter:zo,NearestMipmapNearestFilter:_f,NeutralToneMapping:g0,NeverCompare:Sf,NeverDepth:Ia,NoBlending:vi,NoColorSpace:Ii,NoToneMapping:oi,NormalBlending:io,NotEqualCompare:Ef,NotEqualDepth:za,Object3D:xe,ObjectSpaceNormalMap:vf,OneFactor:nf,OneMinusConstantAlphaFactor:pf,OneMinusConstantColorFactor:ff,OneMinusDstAlphaFactor:af,OneMinusDstColorFactor:lf,OneMinusSrcAlphaFactor:l0,OneMinusSrcColorFactor:of,OrthographicCamera:Yc,PCFShadowMap:Jo,PCFSoftShadowMap:$u,PMREMGenerator:$l,Path:Wl,PerspectiveCamera:nn,Plane:mi,PlaneGeometry:ci,PointLight:td,PolyhedronGeometry:zc,QuadraticBezierCurve:B0,QuadraticBezierCurve3:Gc,Quaternion:Hi,R11_EAC_Format:Ya,RED_GREEN_RGTC2_Format:pr,RED_RGTC1_Format:dc,REVISION:wc,RG11_EAC_Format:dr,RGBAFormat:Yn,RGBAIntegerFormat:Lc,RGBA_ASTC_10x10_Format:ac,RGBA_ASTC_10x5_Format:sc,RGBA_ASTC_10x6_Format:oc,RGBA_ASTC_10x8_Format:rc,RGBA_ASTC_12x10_Format:cc,RGBA_ASTC_12x12_Format:lc,RGBA_ASTC_4x4_Format:Ka,RGBA_ASTC_5x4_Format:Ja,RGBA_ASTC_5x5_Format:Qa,RGBA_ASTC_6x5_Format:ja,RGBA_ASTC_6x6_Format:tc,RGBA_ASTC_8x5_Format:ec,RGBA_ASTC_8x6_Format:nc,RGBA_ASTC_8x8_Format:ic,RGBA_BPTC_Format:hc,RGBA_ETC2_EAC_Format:qa,RGBA_PVRTC_2BPPV1_Format:Va,RGBA_PVRTC_4BPPV1_Format:Ga,RGBA_S3TC_DXT1_Format:tr,RGBA_S3TC_DXT3_Format:er,RGBA_S3TC_DXT5_Format:nr,RGBFormat:b0,RGB_BPTC_SIGNED_Format:uc,RGB_BPTC_UNSIGNED_Format:fc,RGB_ETC1_Format:Wa,RGB_ETC2_Format:Xa,RGB_PVRTC_2BPPV1_Format:Ha,RGB_PVRTC_4BPPV1_Format:ka,RGB_S3TC_DXT1_Format:jo,RGFormat:as,RGIntegerFormat:Pc,RawShaderMaterial:Zf,Ray:D0,RedFormat:Rc,RedIntegerFormat:Cc,ReinhardToneMapping:u0,RenderTarget:Lf,RepeatWrapping:fr,ReverseSubtractEquation:Qu,RingGeometry:Wc,SIGNED_R11_EAC_Format:Za,SIGNED_RED_GREEN_RGTC2_Format:mc,SIGNED_RED_RGTC1_Format:pc,SIGNED_RG11_EAC_Format:$a,SRGBColorSpace:Qe,SRGBTransfer:_e,Scene:R0,ShaderChunk:ie,ShaderLib:ti,ShaderMaterial:In,Shape:Vc,ShapeUtils:xi,ShortType:v0,Sphere:So,SphereGeometry:Mn,Spherical:Yl,SplineCurve:z0,Sprite:Ff,SpriteMaterial:L0,SrcAlphaFactor:c0,SrcAlphaSaturateFactor:hf,SrcColorFactor:sf,StaticDrawUsage:w0,SubtractEquation:Ju,SubtractiveBlending:kl,TOUCH:_i,TangentSpaceNormalMap:mr,Texture:tn,TextureLoader:k0,TextureSource:Uc,TorusGeometry:Si,Triangle:zn,TubeGeometry:bo,UVMapping:_0,Uint16BufferAttribute:C0,Uint32BufferAttribute:P0,UniformsLib:Ut,UniformsUtils:Yf,UnsignedByteType:Cn,UnsignedInt101111Type:S0,UnsignedInt248Type:mo,UnsignedInt5999Type:M0,UnsignedIntType:ri,UnsignedShort4444Type:Tc,UnsignedShort5551Type:Ac,UnsignedShortType:po,VSMShadowMap:eo,Vector2:vt,Vector3:B,Vector4:Ne,WebGLCoordinateSystem:ii,WebGLCubeRenderTarget:X0,WebGLRenderTarget:Zn,WebGLRenderer:fd,WebGLUtils:hd,WebGPUCoordinateSystem:go,WebXRController:Ea,ZeroFactor:ef,createCanvasElement:Rf,error:he,log:vr,warn:Qt,warnOnce:Ss},Symbol.toStringTag,{value:"Module"})),nu={type:"change"},Y0={type:"start"},dd={type:"end"},la=new D0,iu=new mi,K3=Math.cos(70*ce.DEG2RAD),Ve=new B,En=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rl=1e-6;class J3 extends id{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Hi,this._lastTargetPosition=new B,this._quat=new Hi().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yl,this._sphericalDelta=new Yl,this._scale=1,this._panOffset=new B,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new B,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=j3.bind(this),this._onPointerDown=Q3.bind(this),this._onPointerUp=t_.bind(this),this._onContextMenu=a_.bind(this),this._onMouseWheel=i_.bind(this),this._onKeyDown=s_.bind(this),this._onTouchStart=o_.bind(this),this._onTouchMove=r_.bind(this),this._onMouseDown=e_.bind(this),this._onMouseMove=n_.bind(this),this._interceptControlDown=c_.bind(this),this._interceptControlUp=l_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ye.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nu),this.update(),this.state=ye.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=En:n>Math.PI&&(n-=En),s<-Math.PI?s+=En:s>Math.PI&&(s-=En),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ve.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<K3?this.object.lookAt(this.target):(iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(iu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Rl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rl||this._lastTargetPosition.distanceToSquared(this.target)>Rl?(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?En/60*this.autoRotateSpeed*t:En/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ve.copy(s).sub(this.target);let o=Ve.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(En*this._rotateDelta.x/e.clientHeight),this._rotateUp(En*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(En*this._rotateDelta.x/e.clientHeight),this._rotateUp(En*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Q3(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function j3(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function t_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dd),this.state=ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function e_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case zi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case zi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Y0)}function n_(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function i_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(Y0),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(dd))}function s_(i){this.enabled!==!1&&this._handleKeyDown(i)}function o_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Y0)}function r_(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function a_(i){this.enabled!==!1&&i.preventDefault()}function c_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{clamp:_c,lerp:An,smoothstep:di}=ce;function Ke(i,t,e){let n=null,s=0;for(let o=1;o<e.length;o++){const[r,a]=e[o-1],[l,c]=e[o],u=l-r,f=c-a,h=Math.hypot(u,f);if(h<.01)continue;const p=_c(((i-r)*u+(t-a)*f)/h,0,h),d=r+u*p/h,_=a+f*p/h,m=Math.hypot(i-d,t-_);if(!n||m<n.distance){const g=-f/h,v=u/h;n={x:d,z:_,nx:g,nz:v,offset:(i-d)*g+(t-_)*v,run:s+p,distance:m}}s+=h}return n&&{...n,length:s}}function cr(i,t=0){return[Math.min(...i.map(([e])=>e))-t,Math.min(...i.map(([,e])=>e))-t,Math.max(...i.map(([e])=>e))+t,Math.max(...i.map(([,e])=>e))+t]}function Cl([i,t,e,n],[s,o,r,a]){return i<r&&e>s&&t<a&&n>o}function ha(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function $s(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([An(s[0],o[0],l),An(s[1],o[1],l)])}}return e}function h_(i){const t=i.edge,[e,n]=t[0],[s,o]=t.at(-1),r=Math.hypot(s-e,o-n),a=(s-e)/r,l=(o-n)/r,c=(p,d)=>(p-e)*a+(d-n)*l,u=t.slice(1).map((p,d)=>{const _=t[d],[m,g]=_,[v,M]=p,x=Math.hypot(v-m,M-g),y=c(m,g),b=c(v,M);return{a:_,b:p,span:x,start:y,end:b,offset:(S,E)=>((S-m)*(g-M)+(E-g)*(v-m))/x,bounds:cr([_,p],.005)}}),f=cr(t,i.reach??95),h=cr(t,.01);return{...i,length:r,station:c,segments:u,range:f,crestBounds:h}}function Pl(i,t,e){const n=i.station(t,e);if(n<-.001||n>i.length+.001)return null;if(i.soft){let f=null;for(const h of i.segments){const{a:p,b:d,span:_}=h,m=d[0]-p[0],g=d[1]-p[1],v=_c(((t-p[0])*m+(e-p[1])*g)/(_*_),0,1),M=t-p[0]-v*m,x=e-p[1]-v*g,y=Math.hypot(M,x);if(!f||y<f.distance){const b=M*-g+x*m;f={distance:y,offset:Math.sign(b)*y,upper:An(p[2],d[2],v),lower:An(p[3],d[3],v)}}}return f}const s=i.segments.find(({end:f})=>n<=f+.001)??i.segments.at(-1),{a:o,b:r,offset:a,start:l,end:c}=s,u=_c((n-l)/(c-l),0,1);return{offset:a(t,e),upper:An(o[2],r[2],u),lower:An(o[3],r[3],u)}}function u_(i){const t=[];for(const e of i){if(!e.edge||e.edge.length<2)continue;const n={...e,upperDecks:e.upperDeck?[e.upperDeck]:[],lowerDecks:e.lowerDeck?[e.lowerDeck]:[]},s=t.at(-1);if(!s||s.soft||n.soft||s.edge.at(-1).some((o,r)=>Math.abs(o-n.edge[0][r])>.01)){t.push(n);continue}s.edge=[...s.edge,...n.edge.slice(1)],s.shore=[...s.shore,...n.shore.slice(1)],s.breaks=[...s.breaks??[],...n.breaks??[]],s.upperDecks.push(...n.upperDecks),s.lowerDecks.push(...n.lowerDecks),s.flatInland=Math.max(s.flatInland??10,n.flatInland??10),s.blendInland=Math.max(s.blendInland??50,n.blendInland??50),s.endFade=n.endFade}return t}function f_(i){const t=u_(i).map(h_),e=i.filter(({beach:m})=>m?.length>1).map(m=>({...m,range:cr(m.beach,m.reach??100)})),n=i.flatMap(m=>m.paths??[]),s=Object.assign({},...i.map(m=>m.upperIds)),o=Object.assign({},...i.map(m=>m.lowerIds)),r=Object.assign({},...i.map(m=>m.stairs)),a=Object.assign({},...i.map(m=>m.ramps)),l=Object.assign({},...i.map(m=>m.stairWidths)),c=Object.assign({},...i.map(m=>m.stairRun)),u=new Set(i.flatMap(m=>m.underDeckIds??[])),f=[...t,...e].map(m=>m.range);function h(m,g,v,M){const x=M?[M.section]:t;for(const y of x){if(!ha(m,g,y.range))continue;const b=Pl(y,m,g);if(!b||b.offset<-(y.reach??95)||b.offset>52)continue;const w=Ke(m,g,y.shore??[]),S=y.shoreRise??(y.soft?6.5:3.6),E=y.station(m,g),T=y.startFade??(y.soft?y.fade??12:11),C=y.endFade??(y.soft?y.fade??12:15),D=T?di(E,0,T):1,P=C?1-di(E,y.length-C,y.length):1,R=D*P,I=w?An(.18,b.lower,di(w.distance,0,S)):b.lower;if(y.soft){const O=di(b.offset,-(y.slopeWidth??18),0),G=1-di(b.offset,10,50);return An(v,An(I,b.upper,O),R*G)}if(M?.section===y?M.upper:b.offset>=0){const O=1-di(Math.max(0,b.offset),y.flatInland??10,y.blendInland??50);return An(v,b.upper,O*R)}if(!(w&&w.distance>(y.maxShoreDistance??105)))return An(v,I,R)}for(const y of e){if(!ha(m,g,y.range))continue;const b=Ke(m,g,y.beach),w=Ke(m,g,y.shore);if(!b||!w||b.distance>(y.reach??100))continue;const S=Math.max(6,Ke(b.x,b.z,y.shore)?.distance??20);let E=0,T=y.beach[0][2];for(let P=1;P<y.beach.length;P++){const R=y.beach[P-1],I=y.beach[P],N=Math.hypot(I[0]-R[0],I[1]-R[1]);if(b.run<=E+N+.01){T=An(R[2],I[2],_c((b.run-E)/N,0,1));break}E+=N}const C=di(b.run,0,12)*(1-di(b.run,b.length-30,b.length)),D=1-di(b.offset,12,55);return An(v,An(.18,T,di(w.distance,0,S)),C*D)}return v}function p(m){const g=cr(m);for(const v of t){let w=function(S,E){S.length>=3&&b.push({ring:S,side:E})};if(v.soft||!Cl(g,v.crestBounds))continue;const{station:M,length:x}=v;if(!v.segments.filter(S=>Cl(g,S.bounds)).some(S=>{const E=m.map(([T,C])=>S.offset(T,C));return Math.min(...E)<=1e-7&&Math.max(...E)>=-1e-7}))continue;const b=[];w($s(m,([S,E])=>-M(S,E)));for(const S of v.segments){const{start:E,end:T,offset:C}=S;let D=$s(m,([P,R])=>M(P,R)-E);D=$s(D,([P,R])=>T-M(P,R)),!(D.length<3)&&(w($s(D,([P,R])=>C(P,R)),{section:v,upper:!0}),w($s(D,([P,R])=>-C(P,R)),{section:v,upper:!1}))}return w($s(m,([S,E])=>M(S,E)-x)),b}return null}function d(m,g){return t.some(v=>!v.soft&&ha(m,g,v.range)&&Math.abs(Pl(v,m,g)?.offset??1/0)<7)}function _(m,g,v){for(const M of t){if(!ha(m,g,M.range))continue;const x=Pl(M,m,g);if(x&&Math.abs(x.offset)<36)return x.lower}return v}return{sections:t,extras:n,upperWidths:s,lowerWidths:o,stairLevels:r,rampLevels:a,stairWidths:l,stairRuns:c,deckRoofs:u,apply:h,split:p,nearEdge:d,lowerGrade:_,refines:(m,g,v)=>f.some(M=>Cl([m,g,m+v,g+v],M))}}const Go=Object.freeze({west:-647,east:-125,north:-138,south:129,innerWest:-624,innerEast:-144,innerNorth:-107,innerSouth:104}),Qi=i=>i.toFixed(1),{west:d_,east:p_,north:m_,south:g_,innerWest:__,innerEast:x_,innerNorth:v_,innerSouth:M_}=Go,Kc=`
  float cartoonDistrict(vec2 worldXZ) {
    // The harbour curves north at the Ocean end of the promenade.
    float harbourBend = 61.0 * (1.0 - smoothstep(-595.0, -500.0, worldXZ.x));
    vec2 fromWestNorth = smoothstep(
      vec2(${Qi(d_)}, ${Qi(m_)} - harbourBend),
      vec2(${Qi(__)}, ${Qi(v_)} - harbourBend), worldXZ);
    vec2 fromEastSouth = 1.0 - smoothstep(
      vec2(${Qi(x_)}, ${Qi(M_)}),
      vec2(${Qi(p_)}, ${Qi(g_)}), worldXZ);
    return fromWestNorth.x * fromWestNorth.y * fromEastSouth.x * fromEastSouth.y;
  }
`,Lr={cartoonEnabled:{value:1}};function S_(i){Lr.cartoonEnabled.value=i?1:0}const su={plaster:{tile:"plaster",size:[2.9,2.9],grain:.63,tint:"#ebc190",palette:.3},stone:{tile:"stone",size:[3.3,2.05],grain:.67,tint:"#caa36b",palette:.18},paving:{tile:"stone",size:[3.3,3.3],grain:.39,tint:"#dfc59c",palette:.17},laidPaving:{tile:"plaster",size:[2.6,2.6],grain:.55,tint:"#bebeb7",palette:.12},roof:{tile:"terracotta",size:[2.45,1.45],grain:.5,tint:"#bd6243",palette:.22},flatRoof:{tile:"plaster",size:[5.1,5.1],grain:.44,tint:"#c9bc9f",palette:.12},foliage:{tile:"leaves",size:[2.3,2.3],grain:.79,tint:"#7ea72f",palette:.52},glass:{tile:"plaster",size:[4,3],grain:.16,tint:"#4e7881",palette:.38},wood:{tile:"plaster",size:[1.2,3.5],grain:.53,tint:"#94663c",palette:.14},metal:{tile:"plaster",size:[3.5,3.5],grain:.17,tint:"#ad9d86",palette:.09},ground:{tile:"plaster",size:[8.2,8.2],grain:.53,tint:"#d8b97e",palette:.2},road:{tile:"plaster",size:[4.3,4.3],grain:.33,tint:"#918780",palette:.23}},y_={plaster:.694,stone:.568,terracotta:.271,leaves:.232},Ll=new Map,Dl=new Map,ou=new WeakSet;function pd(i){if(Ll.has(i))return Ll.get(i);const t={value:0},e=`./art/waterfront-${i}.webp`,n=new k0().load(e,()=>{t.value=1});n.colorSpace=Qe,n.wrapS=Es,n.wrapT=i==="terracotta"?fr:Es,n.anisotropy=4;const s={texture:n,ready:t};return Ll.set(i,s),s}function b_(i,t){const e=`${i}|${t}`;if(Dl.has(e))return Dl.get(e);const n={value:0},s=`./${i.replace(/^\/+/,"")}`,o=new k0().load(s,()=>{n.value=1});o.colorSpace=Qe,o.wrapS=o.wrapT=t?Es:ni,o.anisotropy=4;const r={texture:o,ready:n};return Dl.set(e,r),r}function w_(){if(typeof document>"u")return{waterPigment:{value:null},waterPigmentReady:{value:0}};const i=pd("water");return{waterPigment:{value:i.texture},waterPigmentReady:i.ready}}function Ln(i,{surface:t="plaster",strength:e=1,texture:n=null}={}){if(ou.has(i)||typeof document>"u")return i;if(ou.add(i),n?.path)return E_(i,n,e);const{tile:s,size:o,grain:r,tint:a,palette:l}=su[t]??su.plaster,c=pd(s),u=i.onBeforeCompile,f=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${f}|anapa-paint|${t}|${e}`,i.onBeforeCompile=function(h,p){u.call(this,h,p),Object.assign(h.uniforms,Lr,{pigment:{value:c.texture},pigmentReady:c.ready,pigmentMean:{value:y_[s]},pigmentPeriod:{value:new vt(...o)},pigmentTint:{value:new Yt(a)},pigmentPalette:{value:l},pigmentGrain:{value:r},pigmentStrength:{value:e}}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
        ${Kc}
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
      `)},i.needsUpdate=!0,i}function E_(i,{path:t,size:e=[3,3],axes:n,repeat:s=!0,amount:o=1},r){const a=b_(t,s),l=i.onBeforeCompile,c=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${c}|anapa-individual-paint`,i.onBeforeCompile=function(u,f){l.call(this,u,f),Object.assign(u.uniforms,Lr,{individualPigment:{value:a.texture},individualReady:a.ready,individualPeriod:{value:new vt(...e)},individualAmount:{value:r*o},individualUseAxes:{value:n?1:0},individualOrigin:{value:new B(...n?.origin??[0,0,0])},individualU:{value:new B(...n?.u??[1,0,0])},individualV:{value:new B(...n?.v??[0,1,0])}}),u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
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
        uniform sampler2D individualPigment;
        uniform float cartoonEnabled, individualReady, individualAmount, individualUseAxes;
        uniform vec2 individualPeriod;
        uniform vec3 individualOrigin, individualU, individualV;
        ${Kc}
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
      `)},i.needsUpdate=!0,i}const md="#526e7c",T_="#f0eee6";function fe(i,t,{surface:e="plaster",surfaces:n={},textures:s={}}={}){const o=new Map,r=new Map([[md,"glass"]]);for(const[d,_]of Object.entries(n))for(const m of _)r.set(m,d);const a=new pe;a.name=t,i.add(a);function l(d,_,m){const g=r.get(d)??_;o.has(g)||o.set(g,new Map);const v=o.get(g);v.has(d)||v.set(d,[]);const M=v.get(d);for(let x=2;x<m.length;x++)M.push(...m[0],...m[x-1],...m[x])}function c(d,..._){l(d,e,_)}function u(d,_,m){const g=d.map(([v,M])=>new vt(v,M));for(const[v,M,x]of xi.triangulateShape(g,[])){const[y,b,w]=[g[v],g[M],g[x]],E=(b.x-y.x)*(w.y-y.y)-(b.y-y.y)*(w.x-y.x)>0?[y,w,b]:[y,b,w];l(m,"paving",E.map(({x:T,y:C})=>[T,_,C]))}}function f(d,_,m,g,v){c(v,[d[0],m,d[1]],[_[0],m,_[1]],[_[0],g,_[1]],[d[0],g,d[1]])}function h(d,_,m,g,v=g){const M=d.reduce((x,[y,b],w)=>{const[S,E]=d[(w+1)%d.length];return x+y*E-S*b},0);d.forEach((x,y)=>{const b=d[(y+1)%d.length];M>0?f(b,x,_,m,g):f(x,b,_,m,g)}),v&&u(d,m,v)}function p(d,_,m,g){const v=new B(...d),M=new B(..._),x=M.clone().sub(v).normalize(),b=(Math.abs(x.z)<.9?new B(0,0,1):new B(1,0,0)).cross(x).normalize().multiplyScalar(m/2),w=x.clone().cross(b),S=[v,M].map(E=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([T,C])=>E.clone().addScaledVector(b,T).addScaledVector(w,C).toArray()));for(let E=0;E<4;E++){const T=(E+1)%4;l(g,"metal",[S[0][E],S[1][E],S[1][T],S[0][T]])}l(g,"metal",S[0]),l(g,"metal",S[1].reverse())}return{face:c,flat:u,wall:f,shell:h,beam:p,finish(){for(const[d,_]of o)for(const[m,g]of _){const v=new Ee;v.setAttribute("position",new ne(g,3)),v.computeVertexNormals();const M=s[m]??s[d],x=Ln(new jt({color:m,side:Xe}),{surface:d,texture:M}),y=new se(v,x);y.castShadow=!0,y.receiveShadow=!0,a.add(y)}}}}function _t(i,t,e){return i.map((n,s)=>ce.lerp(n,t[s],e))}function Ie(i){return i.reduce(([t,e],[n,s])=>[t+n/i.length,e+s/i.length],[0,0])}function Pn(i,t,e,n,s,o,r,a=T_){const l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=Math.max(1,Math.round(l/r));for(let u=0;u<c;u++){const f=_t(n,_t(t,e,(u+.035)/c),1.003),h=_t(n,_t(t,e,(u+.965)/c),1.003);i.wall(f,h,s,o,md),i.wall(h,_t(n,_t(t,e,(u+1)/c),1.003),s,o,a)}}function A_(i,t,e,n){const s=new xe;s.position.set(t,e+3.98,n),s.userData.nightLight={color:"#ffcc88",intensity:27,range:9,ground:e},i.add(s)}function R_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.48)"),e.addColorStop(.28,"rgba(255,255,255,0.22)"),e.addColorStop(.63,"rgba(255,255,255,0.05)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new L0({map:new Bc(i),color:"#ffc47a",opacity:.78,blending:uo,depthWrite:!1,toneMapped:!1})}function C_(){const i=new se(new Mn(1,32,16),new In({side:fn,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{zenith:{value:new Yt("#45567f")},horizon:{value:new Yt("#9da8c7")},twilight:{value:new Yt("#d3a699")}},vertexShader:`
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
    `}));return i.scale.setScalar(1500),i.frustumCulled=!1,i.renderOrder=-100,i}function P_(i,t){const e=[],n=[];for(const{position:{x:c,z:u},ground:f}of i){let h=function(d,_){const m=_*Math.PI*2/20,g=d/5,v=c+g*7.4*Math.cos(m),M=u+g*7.4*Math.sin(m),x=t(v,M),y=1-Math.min(1,Math.max(0,(Math.abs(x-f)-.28)/.72)),b=Math.min(f+.9,Math.max(f-.9,x))+.215;return[v,b,M,(1-g*g)**3*y]},p=function(...d){if(d.some(_=>_[3]>0))for(const[_,m,g,v]of d)e.push(_,m,g),n.push(v)};for(let d=0;d<5;d++)for(let _=0;_<20;_++){const m=h(d,_),g=h(d,_+1),v=h(d+1,_),M=h(d+1,_+1);d&&p(m,g,v),p(g,M,v)}}const a=new Ee;a.setAttribute("position",new ne(e,3)),a.setAttribute("lampStrength",new ne(n,1));const l=new In({side:Xe,transparent:!0,depthWrite:!1,blending:uo,vertexShader:`
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
    `});return new se(a,l)}function L_(i,t){const e=[],n=[];i.updateMatrixWorld(!0),i.traverse(f=>{const{setEvening:h,nightLight:p}=f.userData;h&&e.push(h),p&&n.push({...p,position:f.getWorldPosition(new B)})});const s=n.filter(f=>f.ground!==void 0),o=new pe;o.name="Вечерний свет";const r=C_();if(o.add(r),s.length&&(o.add(P_(s,t)),typeof document<"u")){const f=R_();for(const{position:h}of s){const p=new Ff(f);p.position.copy(h),p.scale.set(2.5,2.5,1),o.add(p)}}const a=Array.from({length:5},()=>{const f=new td("#fff",0,9,2);return o.add(f),f});i.add(o);const l=new B(1/0,1/0,1/0);let c=!1;function u(f){if(!c||(r.position.copy(f.position),l.distanceToSquared(f.position)<1.5))return;l.copy(f.position);const{x:h,y:p,z:d}=l,m=p-t(h,d)<26?n.map(g=>({source:g,distance:g.position.distanceToSquared(l)})).filter(({distance:g})=>g<33**2).sort((g,v)=>g.distance-v.distance):[];a.forEach((g,v)=>{const M=m[v]?.source;g.intensity=M?.intensity??0,M&&(g.position.copy(M.position),g.color.set(M.color),g.distance=M.range)})}return{setEnabled(f){c=f,o.visible=c,l.set(1/0,1/0,1/0),e.forEach(h=>h(c))},update:u}}function Il(i,t,e,n=10){return Array.from({length:n},(s,o)=>{const r=o*Math.PI*2/n;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function gd(i,t,{name:e,lights:n,planters:s}){const o="#878887",r="#646765",a=fe(i,e,{surfaces:{metal:[o,r],stone:["#d8d4c7"],ground:["#8c7e60"]}}),l=new Dn(new Mn(.23,10,7),new jt({color:"#eddaa4"}),n.length*4),c=new Dn(new Ei(1,1),Ln(new jt({color:"#607a45"}),{surface:"foliage"}),s.length*7);l.name="Плафоны верхней набережной",l.userData.setEvening=f=>{l.material.emissive.set(f?"#ffc37a":"#000"),l.material.emissiveIntensity=f?1.34:0},c.name="Кустарники в клумбах набережной";const u=new xe;n.forEach(([f,h],p)=>{const d=t(f,h)+.03;A_(i,f,d,h),a.shell(Il(f,h,.3),d-.13,d+.35,o),a.shell(Il(f,h,.19),d+.32,d+3.72,o);for(const _ of[.44,.68,3.55,3.7])a.shell(Il(f,h,.25),d+_,d+_+.1,r);for(let _=0;_<4;_++){const m=Math.PI/4+_*Math.PI/2,g=Math.cos(m),v=Math.sin(m),M=[f+g*.46,d+3.77,h+v*.46];a.beam([f+g*.1,d+3.49,h+v*.1],M,.075,r),u.position.set(M[0],M[1]+.19,M[2]),u.updateMatrix(),l.setMatrixAt(p*4+_,u.matrix)}}),s.forEach(({x:f,z:h,width:p,depth:d,angle:_},m)=>{const g=(x,y)=>[f+x*Math.cos(_)-y*Math.sin(_),h+x*Math.sin(_)+y*Math.cos(_)],v=(x,y)=>[[-x,-y],[x,-y],[x,y],[-x,y]].map(b=>g(...b)),M=t(f,h);a.shell(v(p/2,d/2),M-.1,M+.16,"#d8d4c7"),a.flat(v(p/2-.17,d/2-.17),M+.175,"#8c7e60");for(let x=0;x<7;x++){const[y,b]=g((x-3)*p/7.8,x%2?-.45:.52);u.position.set(y,M+.53,b);const w=.52+x%3*.17;u.scale.set(w,.5+x%2*.26,w*.84),u.rotation.y=x*1.8,u.updateMatrix(),c.setMatrixAt(m*7+x,u.matrix)}}),l.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,i.add(l,c),a.finish()}const _s={front:[[-549.25,-30.85],[-517.3,-24.44]],depth:9.15,grade:9.03},D_=[{soft:!0,edge:[[-1194.65,-.88,7.9,2.35],[-1188.5,-6.93,8.7,2.35],[-1176.23,-13.69,9.8,2.35],[-1157.84,-21.72,11.8,2.35],[-1124.63,-25.52,12.3,2.35],[-1073.23,-30.79,12.65,2.35],[-1033.68,-39.87,13.25,2.35],[-982.49,-49.59,13.9,2.35],[-926.44,-60.99,13.15,2.4],[-878.85,-73.87,12.1,2.4],[-852,-77.5,11,2.4],[-830.48,-78.2,8.65,2.4]],shore:[[-1195,-24],[-1186.4,-36.11],[-1161.69,-54.98],[-1142.57,-67.42],[-1119.74,-82.36],[-1095.11,-100.63],[-1060.66,-124.59],[-1054.64,-114.35],[-1036.42,-110.13],[-995.48,-107.91],[-965.35,-114.27],[-903.18,-133.53],[-868.87,-118.74],[-830.48,-132]],upperIds:{1293020296:7},lowerIds:{},stairs:{}},{soft:!0,slopeWidth:10.8,shoreRise:1.5,fade:0,edge:[[-830.48,-78.2,8.65,2.4],[-820.6,-84.1,6.7,2.4],[-806.05,-90.4,5.7,2.45],[-783.75,-94.4,4.6,2.45],[-753.37,-97.1,3.65,2.45],[-742.87,-98.3,3.45,2.45],[-728.5,-94.3,4.15,2.45],[-696.91,-88.7,5.45,2.45],[-673.68,-83.1,6.45,2.5],[-658.2,-79.35,6.8,2.5],[-641.17,-75.3,7.1,2.5],[-638.31,-66,7.65,2.5],[-605.95,-55.15,8.5,2.55],[-595.02,-59.9,8.8,2.6]],shore:[[-830.48,-132],[-827,-183.4],[-783.08,-190.76],[-774.16,-192.09],[-729.85,-199.2],[-709.27,-201.43],[-646.49,-232.7],[-636.97,-260.15],[-623.68,-157.59],[-595.02,-144]],lowerDeck:[[-826,-133],[-837,-178],[-783,-187],[-739,-193],[-728,-190],[-715,-191],[-697,-176],[-682,-150],[-659,-139],[-662,-109],[-704,-103],[-740,-100],[-779,-101],[-813,-103],[-825,-114]],upperIds:{596938944:4.2,178479537:3.2},lowerIds:{},stairs:{596938943:[8.65,6.7]},stairWidths:{596938943:2.5}},{fade:0,edge:[[-595.02,-59.9,8.8,2.6],[-587.5,-63.5,8.8,2.6],[-576,-56.7,9.05,2.6],[-559,-50.3,9.15,2.6],[-550,-46,9.1,2.6],[-531.8,-47.6,9.04,2.6],[-525.5,-50.1,9,2.6],[-519.4,-61.2,8.96,2.6],[-501.2,-54.2,8.82,2.6],[-485.4,-49,8.71,2.6],[-480.1,-48.6,8.66,2.6],[-447.5,-40.1,8.5,2.6],[-416,-34.55,8.3,2.6],[-410.5,-34.1,8.28,2.6],[-380,-29.6,8.12,2.6],[-372,-29,8.07,2.6],[-350,-29.15,7.98,2.6],[-320,-29,7.9,2.6],[-300,-32,7.8,2.6]],shore:[[-595.02,-144],[-573.37,-123.91],[-563.51,-116.13],[-552.8,-94],[-534.2,-89],[-490,-73.3],[-467.6,-82.1],[-442.59,-61.36],[-405.47,-52.91],[-397.91,-61.01],[-379.03,-54.91],[-372.9,-48.36],[-320.33,-44.46],[-300,-47.3]],upperIds:{178484904:11,701760799:3.45},lowerIds:{701760797:5.2},underDeckIds:["223948923","223948927","223948934","223948896","223948899","223948902","223948903","223948904","223948906","223948908"],upperDeck:[[-595.02,-59.9],[-587.5,-63.5],[-576,-56.7],[-559,-50.3],[-550,-46],[-531.8,-47.6],[-525.5,-50.1],[-519.4,-61.2],[-501.2,-54.2],[-485.4,-49],[-480.1,-48.6],[-447.5,-40.1],[-416,-34.55],[-410.5,-34.1],[-380,-29.6],[-372,-29],[-350,-29.15],[-320,-29],[-300,-32],[-300,2.5],[-314,1.7],[-365,-.3],[-394,-.6],[-419,-4.4],[-455,-13.2],[-477,-19.4],[-515,-27.5],[-549,-34.8],[-595,-47.1]],stairs:{701760798:[2.6,5]},stairWidths:{701760798:2.25},ramps:{701760799:[5,8.8]},breaks:[[-589,-62.9,4.2]]}],I_=[[-515.4,-54.6],[-507,-52.4],[-498.1,-49.9],[-488.9,-46.8],[-479.9,-44.6],[-473.2,-42.7],[-463.8,-40.8],[-456.4,-39.3],[-447.3,-37.4],[-441.7,-36.2],[-436.7,-36],[-430.1,-34.8],[-423.4,-34],[-372.9,-24.5],[-364.9,-24.3],[-356.7,-24.9],[-348.5,-24.3],[-339.6,-24.7]],U_=[{x:-512.2,z:-44.4,width:7.2,depth:2.15,angle:.27},{x:-461.1,z:-30.3,width:11.1,depth:2,angle:.17},{x:-442.5,z:-26.9,width:6.1,depth:2.1,angle:.2},{x:-426.2,z:-23.1,width:7.9,depth:2.2,angle:.18}];function N_(i,t){gd(i,t,{name:"Верхняя набережная · фонари и клумбы",lights:I_,planters:U_})}const F_=[{edge:[[-300,-32,7.8,2.6],[-284,-34,7.75,2.6],[-267,-37.5,7.65,2.6],[-246,-43,7.55,2.6],[-240,-42,7.5,2.6],[-236,-29,7.42,2.6],[-228,-19,7.35,2.6],[-218,-7,7.25,2.6]],shore:[[-300,-47.3],[-289.6,-48.8],[-177.1,-87.5],[-161.9,-92.7]],upperDeck:[[-300,-32],[-284,-34],[-267,-37.5],[-246,-43],[-240,-42],[-236,-29],[-228,-19],[-218,-7],[-221,3],[-248,4],[-279,3],[-300,3]],upperIds:{178484904:11},lowerIds:{701760797:5.2,121213094:7.2},underDeckIds:["223948913","223948916"],stairs:{597090335:[7.25,5.97],597090341:[3.25,1.1]},stairWidths:{597090335:13.2,597090341:5.4},stairRun:{597090335:[.09,.36]},ramps:{121213094:[5.97,3.25],"701760797-approach":[3.88,2.6]},paths:[{id:"701760797-approach",points:[[-171.1,-33],[-199.26,-67.75]],width:5.2,level:"lower",replaceStartOf:"701760797"}],breaks:[[-218,-7,4]],flatInland:30,blendInland:52,fade:0},{beach:[[-224.06,-6.35,7.25],[-211.83,-6.43,5.97],[-171.1,-33,3.88],[-159.07,-41.45,3.25],[-144.56,-51.21,1.1],[-81.57,-93.77,1.4],[-39.04,-127.25,1.62],[-.76,-159.34,1.82],[25.53,-190.84,1.95],[71.71,-243.52,2.1],[152.59,-369.21,2.15],[173.74,-356.54,2.2],[184.72,-355.26,2.22],[200.31,-357.98,2.23],[218.09,-367.72,2.25],[238.68,-386.95,2.28],[248.36,-396.07,2.35],[217.53,-444.44,2.24],[252.43,-514.76,2.14],[274.46,-559.15,2.05],[283.14,-576.63,2.03],[323,-654.46,1.98]],shore:[[-177.1,-87.5],[-161.9,-92.7],[-53.6,-178.4],[-34.6,-198.7],[31.6,-303.9],[50.4,-343.6],[84.5,-417.2],[123.2,-492],[197.2,-622.5],[224.45,-686]],lowerIds:{597090338:6.5,121159650:7.5,178302326:5.7},stairs:{851920304:[3,2.28]}}],O_=[[-295.8,-26.2],[-288.7,-27.1],[-281.6,-28.1],[-272.7,-29.1],[-265.8,-30.2],[-257.3,-31.1],[-250.1,-32.8],[-244.6,-33.7]];function B_(i,t){gd(i,t,{name:"Фонари у Алых парусов",lights:O_,planters:[]})}const{clamp:ru,lerp:cn,smoothstep:Me}=ce;function ua(i){return[Math.min(...i.map(([t])=>t)),Math.min(...i.map(([,t])=>t)),Math.max(...i.map(([t])=>t)),Math.max(...i.map(([,t])=>t))]}const Ks=([i,t,e,n],s)=>[i-s,t-s,e+s,n+s];function _d(i){const[t,e]=i.origin,[n,s]=i.scale,o=(W,ht)=>[(W-t)*n,(e-ht)*s],r=(W,ht,dt,Y)=>[...o(W,Y),...o(dt,ht)],a=r(37.2953,44.8868,37.3014,44.8932),l=r(37.2982,44.8933,37.3078,44.8984),c=r(37.3063,44.89613,37.31234,44.89775),u=i.surveyLines??{},f=u[125813146],h=u[400800619],p=u[657038813],d=u[1142991105],_=i.buildings.find(W=>W.id==="977564342")?.rings[0],m=_?.length===8?[_[7],_[6]]:null,g=f_([...D_,...F_]),v=i.landmarks.find(W=>W.id==="lighthouse")?.position,M=i.landmarks.find(W=>W.id==="port")?.position,x=r(37.303,44.8967,37.3069,44.9012),y=Ks(ua(_s.front),_s.depth+9),b=i.buildings.find(W=>W.id==="r11979734-0")?.rings[0],w=b&&Ks(ua(b),18),S=i.roads.find(W=>W.id==="977564885")?.points,E=S?.[0],T=new Map([["46844613",8],["1293020297",7],["1293020296",7],...Object.entries(g.upperWidths),...Object.entries(g.lowerWidths),...Object.entries(g.stairWidths)]),C=new Map([["977562764",[null,3.8]],["977562762",[3.8,1.65]],["977562763",[3.8,1.65]],["597090335",[7.25,2.6]],["597090341",[2.6,.9]],...Object.entries(g.stairLevels)]),D=new Map(g.extras.filter(W=>W.replaceStartOf).map(W=>[W.replaceStartOf,W.points.length-1])),P=[...i.roads.map(W=>D.has(W.id)?{...W,points:W.points.slice(D.get(W.id))}:W),...g.extras.map(W=>({...W,kind:W.kind??"footway"}))],R=P.filter(W=>C.has(W.id)).map(W=>({...W,width:T.get(W.id)??W.width,bounds:ua(W.points)})),I=P.filter(W=>W.id in g.rampLevels).map(W=>({...W,width:T.get(W.id)??W.width,bounds:ua(W.points)})),N=R.filter(W=>W.id in g.stairLevels),O=[...R,...I],G=[...N,...I],V=(W,ht,[dt,Y,et,k])=>W>=dt&&W<=et&&ht>=Y&&ht<=k;function $(W,ht,dt){let Y=!1,et=1/0;for(let k=0,Z=dt.length-1;k<dt.length;Z=k++){const[at,xt]=dt[Z],[yt,At]=dt[k];xt>ht!=At>ht&&W<(yt-at)*(ht-xt)/(At-xt)+at&&(Y=!Y);const Bt=yt-at,z=At-xt,$t=ru(((W-at)*Bt+(ht-xt)*z)/(Bt*Bt+z*z||1),0,1);et=Math.min(et,Math.hypot(W-at-$t*Bt,ht-xt-$t*z))}return Y?0:et}function tt(W,ht,dt){const Y=Ke(W,ht,f);if(Y.distance>100)return dt(W,ht);const et=1-Me(Y.distance,49,91),k=Me(Y.run,0,36),Z=1-Me(ht,a[3]-55,a[3]-12),at=v?1-Me(Math.hypot(W-v[0],ht-v[1]),85,260):0,xt=cn(dt(Y.x-Y.nx*28,Y.z-Y.nz*28),22.4,at);let yt=xt;if(Y.offset>0){const At=Math.max(7,Ke(Y.x,Y.z,h).distance),Bt=1.65*Me(Ke(W,ht,h).distance,0,8)+.18;yt=cn(xt,Bt,Me(Y.offset,Math.min(1.2,At*.08),At*.66))}else yt=cn(xt,dt(W,ht),Me(-Y.offset,15,42));if(m&&Y.distance<48){const At=Ke(W,ht,m),Bt=1-Me(At.distance,14,23),z=cn(4.35,1.8,Me(At.offset,0,10));yt=cn(yt,Math.min(yt,z),Bt)}return cn(dt(W,ht),yt,et*k*Z)}function Mt(W,ht,dt){const Y=Ke(W,ht,p);if(Y.distance>82||Y.offset<-15)return dt(W,ht);const et=dt(Y.x-Y.nx*14,Y.z-Y.nz*14),k=cn(et,2.35,Me(Y.offset,.5,15)),Z=Me(Y.run,0,40)*(1-Me(Y.run,Y.length-45,Y.length));return cn(dt(W,ht),k,Z*(1-Me(Y.distance,58,82)))}function j(W,ht,dt,Y){if(f&&h&&V(W,ht,a))return tt(W,ht,dt);let et=p&&V(W,ht,l)?Mt(W,ht,dt):dt(W,ht);if(M&&V(W,ht,x)){const[k,Z,at,xt]=x,yt=Me(Math.min(W-k,at-W,ht-Z,xt-ht),2,26)*(1-Me(ht,M[1]+13,M[1]+52)),At=cn(1.8,2.55,Me(ht,M[1]-73,M[1]+8));et=cn(et,At,yt)}return g.apply(W,ht,et,Y)}function St(W,ht){const dt=C.get(W.id);if(!dt)return null;const Y=dt[0]??j(...E??W.points[0],ht),et=dt[1];return{from:Y,to:et,run:g.stairRuns[W.id]??[0,1]}}function lt(W,ht,dt){const Y=g.rampLevels[W.id];if(!Y)return;const et=Ke(ht,dt,W.points);return cn(Y[0],Y[1],et.run/et.length)}function ct(W,ht,dt,Y){let et=j(W,ht,dt,Y);if(V(W,ht,y)){const k=Ke(W,ht,_s.front),Z=Math.sqrt(Math.max(0,k.distance**2-k.offset**2)),at=Math.max(Z,-k.offset,k.offset-_s.depth);et=cn(et,_s.grade,1-Me(at,1.8,7))}if(w&&V(W,ht,w)){const k=$(W,ht,b);et=cn(et,_s.grade,1-Me(k,10,17))}if(E&&Math.abs(W-E[0])<14&&Math.abs(ht-E[1])<14){const k=Ke(W,ht,S);k.distance<5&&(et=cn(et,j(...E,dt),1-Me(k.distance,1.6,5)))}for(const k of O){if(!V(W,ht,Ks(k.bounds,Math.max(4.5,k.width/2+2))))continue;const Z=Ke(W,ht,k.points),at=k.width/2,xt=!G.includes(k),yt=xt?4.3:at+1.6;if(Z.distance>yt)continue;const At=g.rampLevels[k.id],{from:Bt,to:z,run:$t}=At?{from:At[0],to:At[1],run:[0,1]}:St(k,dt),Xt=ru((Z.run/Z.length-$t[0])/($t[1]-$t[0]),0,1),U=cn(Bt,z,Xt)-($t[0]===0&&$t[1]===1?.08:.23);et=cn(et,U,1-Me(Z.distance,xt?1.65:at,yt))}return et}function H(W,ht,dt){return dt.breaks?.some(([Y,et,k])=>Math.hypot(W-Y,ht-et)<k)||G.some(Y=>V(W,ht,Ks(Y.bounds,Y.width/2+.5))&&Ke(W,ht,Y.points).distance<Y.width/2+.3)}function K(W,ht){return G.some(dt=>V(W,ht,Ks(dt.bounds,dt.width/2+2)))}function pt(W,ht,dt){return N.some(Y=>{const[et,k,Z,at]=Ks(Y.bounds,Y.width/2+2);return W<Z&&ht<at&&W+dt>et&&ht+dt>k})}function bt(W,ht,dt){if(f&&h&&V(W,ht,a)){const Y=Ke(W,ht,f),et=Ke(W,ht,h),k=(1-Me(et.distance,5,11))*(1-Me(dt,2.2,3.8));if(k>0)return["shingle",k];const Z=Me(Y.offset,.5,4)*(1-Me(Y.distance,28,43))*Me(dt,2,5.5);if(Z>0)return["rockLight",Z*(.74+.21*Math.sin(dt*1.7+W*.027))]}if(d&&V(W,ht,c)){const Y=(1-Me(Ke(W,ht,d).distance,3.2,6.4))*(1-Me(dt,2.3,3.1));if(Y>0)return["riprap",Y]}if(V(W,ht,x)&&dt<7){const[Y,et,k,Z]=x;return["quay",Me(Math.min(W-Y,k-W,ht-et,Z-ht),0,24)*(1-Me(dt,4.5,7))]}return null}return{height:ct,tone:bt,stairHeight:St,rampHeight:lt,promenadeWidths:T,gorgWater:d,allRoads:P,surveyedStairs:N,ramps:I,waterfront:g,wallOpening:H,nearTransition:K,refinesStairs:pt,refines(W,ht,dt){return g.refines(W,ht,dt)||[a,l,c,x].some(([Y,et,k,Z])=>W+dt>Y-18&&W<k+18&&ht+dt>et-18&&ht<Z+18)}}}const z_=[37.294125,44.884625,37.325875,44.907375],k_=128,H_=92,G_=JSON.parse("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.9,2.4,2.9,3.4,3.7,3.9,4,4,3.9,3.9,3.9,3.9,4,3.9,3.9,4,3.9,3.6,3.1,2.7,2.5,2.5,2.7,3,3.1,2.9,2.5,1.9,1.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,2,2.5,3.1,3.6,4.1,4.4,4.6,4.4,4.2,3.9,3.8,3.8,3.8,3.8,4,4.1,4.1,3.8,3.2,2.7,2.4,2.4,2.7,3,3.1,2.9,2.4,1.7,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.6,2,2.6,3.1,3.7,4.3,4.8,5,4.9,4.6,4.3,4.1,4,3.9,3.9,4,4.2,4.3,4.1,3.6,3.1,2.9,2.9,3.1,3.2,3.2,2.7,2.1,1.4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.2,1.6,2,2.5,3,3.6,4.2,4.7,5,5,4.9,4.7,4.6,4.4,4.2,4.1,4,4.1,4.2,4.1,3.9,3.6,3.4,3.3,3.2,3.1,2.8,2.2,1.6,1.1,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2,2.4,2.9,3.4,4,4.5,4.7,4.7,4.7,4.7,4.7,4.7,4.4,4.1,3.8,3.8,3.8,3.8,3.6,3.3,3,2.7,2.4,2.2,1.8,1.3,0.9,0.7,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.2,1.6,2,2.3,2.8,3.3,3.8,4.2,4.4,4.4,4.3,4.4,4.5,4.5,4.2,3.7,3.3,3.1,3,2.9,2.5,2.1,1.7,1.4,1.2,1,0.8,0.6,0.4,0.5,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.2,1.5,1.9,2.2,2.5,2.9,3.3,3.6,3.8,3.8,3.8,3.8,3.9,3.9,3.6,3.1,2.7,2.3,2.1,1.8,1.4,1,0.7,0.5,0.4,0.4,0.4,0.5,0.5,0.6,0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.7,2.8,2.9,3,3,3.1,3.1,3.1,2.9,2.5,2.1,1.7,1.5,1.3,1,0.7,0.5,0.4,0.5,0.7,0.9,1.1,1.3,1.4,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,2,2.3,2.5,2.5,2.5,2.4,2.3,2.3,2.3,2.4,2.4,2.3,2,1.8,1.6,1.4,1.3,1.2,1,0.9,1,1.3,1.7,2.1,2.5,2.7,2.9,2.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.2,1.4,1.6,2,2.5,3,3.3,3.3,2.9,2.4,2,1.9,1.9,2,2.1,2.1,2.1,2,1.9,1.8,1.7,1.7,1.6,1.6,1.8,2.2,2.9,3.5,4,4.3,4.4,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.7,1,1.2,1.4,1.6,2,2.5,3.2,3.9,4.3,4.2,3.5,2.6,2,1.8,1.9,2.2,2.4,2.5,2.5,2.5,2.4,2.4,2.4,2.3,2.2,2.2,2.5,3,3.8,4.5,5,5.3,5.5,5.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.4,1.7,2,2.3,2.8,3.5,4.1,4.5,4.2,3.4,2.5,2,1.9,2.1,2.5,2.8,2.9,2.9,2.8,2.8,2.9,2.9,2.8,2.7,2.7,2.9,3.4,4.1,4.8,5.3,5.6,5.8,5.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.6,1.9,2.2,2.5,2.8,3.2,3.5,3.6,3.3,2.6,2.1,1.8,1.9,2.2,2.6,2.9,3,2.9,2.9,2.9,3,3,3.1,3,3,3.1,3.4,4,4.5,5.1,5.4,5.6,5.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.7,2.1,2.4,2.6,2.7,2.9,2.9,2.7,2.3,2,1.8,1.8,2,2.2,2.5,2.7,2.8,2.8,2.8,2.9,3,3.1,3.2,3.2,3.1,3.1,3.2,3.5,3.9,4.4,4.8,5.1,5.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.4,1.9,2.3,2.7,3,3,2.9,2.6,2.3,1.9,1.8,1.8,1.9,2.1,2.3,2.6,2.8,3,3.1,3.1,3.2,3.3,3.3,3.3,3.3,3.2,3.1,2.9,2.9,3.1,3.5,3.9,4.3,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,2,2.6,3.2,3.5,3.5,3.2,2.7,2.2,1.8,1.8,1.9,2.1,2.4,2.7,3.1,3.5,3.9,4.1,4.2,4.1,4,3.7,3.4,3.2,3,2.8,2.6,2.5,2.4,2.6,2.9,3.2,3.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2.2,2.8,3.4,3.6,3.5,3.1,2.5,2.1,1.8,1.9,2,2.3,2.6,3.1,3.8,4.5,5,5.3,5.2,5,4.6,4.1,3.5,3.1,2.8,2.6,2.3,2.2,2,2,2.1,2.3,2.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.4,2.9,3.2,3.2,3,2.6,2.3,2.1,2,2,2.1,2.3,2.7,3.2,3.9,4.7,5.2,5.4,5.3,5,4.6,4,3.5,3,2.6,2.3,2.1,1.9,1.7,1.6,1.7,1.8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.2,1.6,2.1,2.6,2.9,2.9,2.7,2.4,2.3,2.3,2.4,2.5,2.4,2.3,2.4,2.6,3,3.4,3.9,4.3,4.4,4.4,4.3,4.1,3.7,3.3,2.9,2.5,2.2,1.9,1.7,1.6,1.6,1.7,2,2.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.3,2.7,2.7,2.5,2.3,2.2,2.5,2.9,3.2,3.3,3.1,2.8,2.6,2.5,2.6,2.8,3,3.2,3.3,3.4,3.5,3.5,3.4,3.1,2.8,2.5,2.2,2,1.8,1.8,2,2.2,2.6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.5,1.9,2.3,2.6,2.5,2.3,2.3,2.6,3.1,3.7,4,4,3.6,3.1,2.7,2.5,2.5,2.5,2.5,2.5,2.6,2.8,3,3.1,3.1,2.9,2.7,2.5,2.4,2.4,2.4,2.5,2.7,3,3.4,3.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.3,1.7,2,2.3,2.4,2.4,2.4,2.7,3.3,4,4.4,4.3,4,3.5,3.1,2.7,2.5,2.5,2.4,2.4,2.3,2.3,2.5,2.7,2.8,2.8,2.7,2.7,2.7,2.9,3.2,3.6,3.8,3.9,4.1,4.3,4.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,0.8,1.2,1.5,1.9,2.2,2.4,2.3,2.4,2.7,3.3,4.1,4.6,4.7,4.3,3.9,3.5,3.1,2.9,2.7,2.7,2.6,2.6,2.5,2.4,2.5,2.6,2.7,2.7,2.7,2.9,3.2,3.7,4.4,5,5.3,5.4,5.4,5.6,5.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.8,1.1,1.4,1.8,2.1,2.4,2.4,2.3,2.5,3.1,4,4.8,5.2,5,4.5,4.1,3.9,3.7,3.5,3.3,3.1,3,2.9,2.8,2.7,2.7,2.7,2.8,2.8,3,3.2,3.7,4.4,5.2,6,6.4,6.6,6.7,7,7.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,1.8,2.1,2.4,2.4,2.4,2.4,2.6,3.3,4.3,5.1,5.4,5.3,5,4.9,4.8,4.6,4.2,3.9,3.6,3.4,3.3,3.1,3,3.1,3.2,3.2,3.3,3.5,3.8,4.3,5,5.8,6.5,7,7.4,7.6,7.8,8.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.1,1.5,1.9,2.3,2.5,2.6,2.5,2.5,2.5,2.8,3.4,4.1,4.8,5.1,5.3,5.3,5.5,5.4,5.1,4.6,4.2,3.9,3.7,3.6,3.6,3.6,3.7,3.9,4.1,4.2,4.4,4.8,5.2,5.8,6.4,7,7.4,7.6,7.7,7.9,8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,2.8,2.8,2.7,2.8,3.1,3.5,3.9,4.3,4.6,4.9,5.1,5.4,5.4,5.1,4.7,4.3,4,3.9,3.8,3.9,4.1,4.4,4.7,5,5.3,5.7,6.1,6.4,6.8,7.1,7.3,7.4,7.4,7.4,7.5,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,2,2.3,2.7,2.9,3,3,3,3.1,3.3,3.5,3.8,4,4.2,4.4,4.6,4.8,5.1,5.3,5.2,5,4.7,4.4,4.1,4,4.1,4.3,4.6,5,5.5,6,6.5,6.9,7.1,7.3,7.3,7.3,7.3,7.2,7.2,7.3,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.9,3,3.1,3.1,3.2,3.4,3.8,4.1,4.3,4.4,4.4,4.5,4.5,4.7,5,5.4,5.7,5.8,5.6,5.1,4.7,4.3,4.2,4.3,4.6,5,5.6,6.1,6.6,6.9,7.1,7.2,7.3,7.2,7.1,7,7.1,7.4,7.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.7,2.1,2.5,2.8,3,3.1,3.1,3.1,3.3,3.7,4.2,4.7,4.9,4.9,4.8,4.7,4.6,4.7,4.9,5.4,6,6.3,6.3,5.9,5.4,4.9,4.5,4.4,4.5,4.9,5.3,5.9,6.3,6.7,6.9,7.1,7.3,7.3,7.3,7.3,7.4,7.9,8.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,3,3,3,3.1,3.4,4,4.6,5.2,5.5,5.6,5.4,5.3,5,4.8,4.8,5.2,5.8,6.3,6.5,6.4,6,5.6,5.1,4.8,4.7,4.9,5.4,5.9,6.3,6.6,6.9,7.2,7.5,7.7,7.7,7.8,8.1,8.8,9.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.7,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.9,2.2,2.5,2.7,2.9,3,3,3.1,3.2,3.6,4.2,5,5.7,6.2,6.4,6.4,6.3,6,5.5,5.2,5.3,5.8,6.2,6.5,6.6,6.5,6.3,5.9,5.4,5.2,5.3,5.7,6.2,6.6,6.9,7.2,7.6,7.9,8.1,8.1,8.2,8.6,9.4,10.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.8,1.1,1.2,1,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.3,3.3,3.3,3.4,3.8,4.4,5.1,5.9,6.5,7,7.4,7.5,7.1,6.5,5.9,5.7,5.9,6.3,6.6,6.7,6.9,6.8,6.6,6.2,5.9,5.8,6.1,6.4,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.2,8.5,9.2,10.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.5,1.3,0.9,0.4,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.4,1.9,2.3,2.6,2.9,3.2,3.4,3.6,3.7,3.6,3.6,3.7,4,4.5,5.1,5.7,6.3,6.9,7.5,7.9,7.8,7.2,6.4,5.9,5.9,6.2,6.4,6.7,6.8,7,6.9,6.6,6.3,6.2,6.3,6.5,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.1,8.3,8.8,9.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.4,0.7,1.1,1.5,1.7,1.5,1,0.6,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.7,3,3.2,3.5,3.7,3.8,3.9,3.8,3.8,4,4.3,4.6,5,5.3,5.7,6.2,6.8,7.3,7.4,7,6.3,5.8,5.8,6.1,6.4,6.7,6.9,7,7,6.8,6.7,6.7,6.7,6.7,6.8,7.1,7.5,7.9,8.4,8.6,8.6,8.5,8.4,8.5,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.4,0.4,0.4,0.4,0.5,0.6,0.8,0.9,1.1,1.4,1.6,1.7,1.4,0.9,0.5,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.8,3,3.2,3.3,3.4,3.6,3.8,3.9,3.9,3.9,4,4.2,4.4,4.6,4.8,4.9,5.2,5.7,6.1,6.3,6.1,5.8,5.6,5.9,6.4,6.9,7.2,7.4,7.4,7.4,7.3,7.3,7.3,7.2,7,7,7.1,7.4,8,8.6,9.1,9.1,8.9,8.8,8.8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.4,0.5,0.6,0.8,0.9,1,1,1.2,1.4,1.5,1.6,1.7,1.8,1.8,1.6,1.2,0.7,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,1,1.5,2,2.5,2.8,3,3.1,3.2,3.2,3.4,3.5,3.6,3.7,3.7,3.7,3.6,3.7,3.9,4.1,4.4,4.5,4.6,4.8,5,5.2,5.3,5.4,5.6,6.2,6.9,7.5,7.9,8,8,8,8.1,8.1,8,7.7,7.4,7.2,7.2,7.3,7.8,8.5,9.1,9.4,9.5,9.6,9.7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.2,0.3,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.3,2.3,2.3,2.2,2,1.7,1.2,0.7,0.4,0.2,0.1,0.1,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.2,1.7,2.1,2.5,2.8,3.1,3.2,3.2,3.1,3.1,3.2,3.3,3.5,3.6,3.6,3.4,3.3,3.3,3.5,3.9,4.3,4.4,4.4,4.4,4.6,4.9,5.3,5.7,6.2,6.8,7.5,8,8.2,8.3,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.8,7.6,7.5,7.8,8.4,9.1,9.8,10.4,10.7,11,11.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.3,0.4,0.5,0.6,0.6,0.7,0.9,1.1,1.3,1.5,1.7,2,2.4,2.8,3.2,3.5,3.5,3.5,3.4,3.2,3,2.7,2.2,1.6,1.2,0.8,0.6,0.4,0.3,0.3,0.2,0.2,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.5,1,1.5,2,2.4,2.6,2.8,3,3.1,3.2,3.1,3,3,3.1,3.2,3.4,3.4,3.4,3.3,3.2,3.2,3.5,4,4.5,4.8,4.8,4.8,5,5.5,6.1,6.7,7.2,7.7,8,8.2,8.3,8.3,8.5,8.8,9.2,9.5,9.4,9.2,8.9,8.6,8.3,8.1,8.3,8.8,9.6,10.6,11.4,11.8,11.9,11.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.4,0.6,0.8,1,1.2,1.5,1.6,1.7,1.8,1.9,2.2,2.4,2.8,3.2,3.7,4.3,5,5.6,6,6,5.8,5.4,5,4.6,4.1,3.5,2.9,2.3,1.8,1.4,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.3,0.3,0.3,0.3,0.5,0.7,1.1,1.6,2.2,2.8,3.1,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3,3.1,3.2,3.3,3.4,3.4,3.3,3.2,3.3,3.7,4.4,5.1,5.5,5.6,5.6,5.8,6.4,7.1,7.7,8.1,8.2,8.3,8.3,8.3,8.4,8.7,9.1,9.6,9.8,9.9,9.7,9.5,9.3,9,8.9,9,9.5,10.4,11.4,12.2,12.5,12.3,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.6,0.9,1.2,1.6,2,2.3,2.7,3,3.4,3.6,3.9,4.2,4.5,4.9,5.4,6,6.8,7.6,8.5,9.2,9.5,9.3,8.9,8.3,7.6,6.9,6.2,5.5,4.9,4.3,3.7,3,2.4,1.9,1.5,1.3,1,0.8,0.7,0.6,0.5,0.5,0.5,0.6,0.8,0.9,1.1,1.2,1.2,1.2,1.3,1.5,1.8,2.3,2.8,3.2,3.5,3.5,3.5,3.5,3.5,3.4,3.3,3.2,3.2,3.2,3.3,3.4,3.5,3.4,3.4,3.4,3.5,4,4.7,5.5,6,6.3,6.4,6.7,7.2,7.8,8.2,8.3,8.2,8.2,8.3,8.5,8.7,9.1,9.5,9.8,9.9,9.9,9.8,9.8,9.8,9.9,10,10.2,10.6,11.2,12,12.5,12.6,12.2,11.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.3,1.7,2.2,2.7,3.3,3.9,4.4,4.8,5.3,5.8,6.3,6.8,7.3,7.8,8.3,8.7,9.1,9.7,10.4,11.2,11.9,12.3,12.4,12.2,11.6,10.9,10,9.2,8.4,7.8,7.4,7,6.4,5.7,4.9,4.2,3.6,3.1,2.7,2.3,2,1.8,1.8,1.8,1.9,2.1,2.4,2.7,3,3.1,3.1,2.9,2.7,2.7,2.7,2.9,3.2,3.5,3.6,3.6,3.7,3.9,3.9,3.8,3.6,3.5,3.4,3.4,3.4,3.5,3.6,3.6,3.7,3.8,4,4.4,5.1,5.8,6.4,6.7,7,7.3,7.7,8.1,8.2,8.1,8,8.1,8.4,8.7,9.2,9.6,9.9,10,9.9,9.7,9.6,9.8,10.3,10.9,11.4,11.7,11.9,12.2,12.4,12.4,12.1,11.7,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,1.2,2.3,3.5,4.6,5.5,6.4,7.2,7.8,8.3,8.7,9.2,9.8,10.3,10.9,11.5,12,12.3,12.4,12.5,12.7,13.1,13.5,13.9,14,14.1,13.9,13.5,12.7,11.8,10.9,10.2,9.9,9.7,9.7,9.5,9.1,8.4,7.7,6.9,6.1,5.4,4.8,4.5,4.4,4.5,4.6,4.7,5,5.3,5.6,5.8,5.9,5.7,5.3,4.8,4.3,3.8,3.6,3.5,3.5,3.6,3.7,3.9,4.1,4.2,4.1,3.9,3.7,3.5,3.5,3.5,3.6,3.8,3.9,4.2,4.5,4.8,5.4,6.1,6.8,7.4,7.8,8,8.1,8.2,8.3,8.3,8.1,8.1,8.2,8.5,9,9.6,10,10.2,10.2,10,9.7,9.5,9.6,10.3,11.3,12.2,12.7,12.7,12.6,12.3,11.9,11.4,11.1,10.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.3,4.3,6.6,8.6,10.2,11.3,12,12.5,12.9,13.2,13.6,14,14.4,14.7,14.9,15,14.9,14.6,14.4,14.2,14.2,14.3,14.5,14.8,14.9,14.9,14.5,13.9,13,12.2,11.7,11.4,11.4,11.6,11.8,11.8,11.6,11,10.1,9.1,8.3,7.8,7.6,7.7,7.9,8,8.1,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.5,6.6,5.6,4.7,4.2,3.9,3.7,3.8,3.9,4.1,4.2,4.1,3.9,3.8,3.7,3.8,3.9,4.1,4.3,4.6,5,5.5,6.2,7.1,8,8.9,9.4,9.6,9.4,9.1,8.9,8.9,8.9,8.8,8.8,8.9,9.1,9.6,10.1,10.4,10.4,10.3,10,9.6,9.4,9.4,10,11,11.9,12.3,12.3,12,11.7,11.3,10.9,10.7,10.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.1,9.2,12,13.9,15.1,15.7,16.1,16.3,16.6,16.8,17.1,17.2,17.1,16.8,16.4,15.9,15.5,15.1,14.8,14.6,14.6,14.8,15.1,15.3,15.3,15,14.4,13.7,13.1,12.7,12.4,12.4,12.6,13,13.2,13.3,12.8,12,11.1,10.3,10,10,10.2,10.3,10.3,10.2,10.3,10.5,10.7,10.8,10.9,11,10.9,10.4,9.4,8.1,6.9,5.9,5.2,4.8,4.6,4.6,4.7,4.7,4.5,4.3,4.2,4.2,4.5,4.8,5.1,5.4,5.7,6.2,6.9,7.7,8.7,9.7,10.5,11,11,10.6,10,9.8,9.8,9.9,9.9,9.9,9.9,10.1,10.4,10.7,10.7,10.5,10.1,9.7,9.5,9.3,9.4,9.8,10.4,11,11.3,11.2,11.1,11,10.9,10.8,10.7,10.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.8,3.7,6.6,10,13.1,15.3,16.5,17.2,17.6,17.9,18.3,18.5,18.7,18.7,18.4,17.9,17.2,16.5,16,15.6,15.4,15.2,15.2,15.3,15.6,15.7,15.4,15,14.5,14.1,13.7,13.5,13.3,13.3,13.4,13.7,14,14,13.7,13,12.2,11.5,11.3,11.4,11.5,11.3,11,10.8,10.7,11,11.3,11.7,12.2,12.7,12.9,12.8,12.2,11.1,9.8,8.7,7.8,7.2,6.9,6.8,6.8,6.6,6.1,5.6,5.4,5.5,5.8,6.2,6.5,6.7,6.9,7.4,8.1,8.9,9.8,10.5,11.2,11.5,11.4,10.9,10.4,10.3,10.5,10.8,10.9,10.9,10.9,11,11.2,11.1,10.9,10.4,9.9,9.6,9.4,9.4,9.5,9.9,10.3,10.6,10.6,10.6,10.6,10.6,10.8,11,11.1,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.1,5.8,9.1,12.4,14.9,16.4,17.3,17.9,18.4,19,19.3,19.4,19.4,19.1,18.6,17.9,17.3,16.9,16.6,16.4,16.2,16.1,16.3,16.4,16.4,15.9,15.3,14.9,14.6,14.5,14.5,14.5,14.4,14.4,14.4,14.6,14.6,14.4,13.8,13.1,12.5,12.3,12.3,12.3,12,11.6,11.3,11.3,11.5,11.8,12.3,12.9,13.6,14.1,14.3,14,13.3,12.4,11.5,10.8,10.3,10,10,9.9,9.6,9,8.2,7.7,7.5,7.7,7.9,7.9,7.9,7.9,8.3,9,9.8,10.4,10.9,11.3,11.4,11.2,10.9,10.6,10.6,10.8,11.1,11.3,11.4,11.5,11.6,11.6,11.3,10.9,10.3,9.8,9.6,9.5,9.6,9.8,10.2,10.4,10.5,10.4,10.3,10.3,10.5,10.9,11.3,11.7,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,1,2.4,4.8,8,11.4,14.3,16.1,17.1,17.8,18.4,19,19.2,19.3,19.3,19,18.7,18.3,18,17.7,17.5,17.2,17.1,17,17.2,17.3,17.2,16.6,15.9,15.4,15.3,15.5,15.7,15.7,15.5,15.1,14.9,14.7,14.6,14.4,14,13.5,13.1,13.1,13.1,13.1,12.9,12.7,12.7,12.9,13,13.2,13.5,14,14.6,15,15,14.6,14.2,13.6,13.1,12.7,12.5,12.3,12.3,12.3,12.1,11.7,11.1,10.4,9.8,9.3,9.1,8.9,8.8,8.9,9.3,9.9,10.5,10.9,11.1,11.2,11.2,11.1,11,10.9,10.9,11.1,11.3,11.4,11.6,11.7,11.8,11.7,11.5,11,10.5,10.1,9.9,9.9,10,10.2,10.5,10.6,10.5,10.3,10.2,10.2,10.6,11.1,11.6,12.1,12.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.8,2,4.1,7,10.5,13.7,15.9,17.1,17.7,18.2,18.6,18.9,18.9,18.8,18.6,18.3,18,17.8,17.7,17.6,17.4,17.3,17.4,17.6,17.7,17.5,17,16.3,15.9,15.8,16,16.2,16.1,15.7,15.2,14.8,14.4,14.2,13.9,13.6,13.3,13.3,13.5,13.7,13.7,13.7,13.8,14.2,14.7,15.1,15.3,15.5,15.8,16,15.8,15.3,14.7,14.2,13.9,13.8,13.6,13.6,13.6,13.5,13.5,13.4,13.3,12.9,12.2,11.3,10.3,9.5,9.2,9.4,9.9,10.6,11.2,11.6,11.6,11.4,11.3,11.3,11.3,11.3,11.3,11.3,11.4,11.4,11.5,11.6,11.7,11.7,11.8,11.7,11.4,11.1,10.7,10.6,10.5,10.6,10.7,10.8,10.8,10.7,10.6,10.4,10.5,10.8,11.4,11.9,12.3,12.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.2,9.7,13.2,15.8,17.2,17.8,18.2,18.4,18.6,18.6,18.5,18.2,17.8,17.5,17.3,17.2,17.1,17.1,17.2,17.4,17.5,17.6,17.4,17,16.6,16.2,16,16,16,15.8,15.5,15,14.6,14.2,13.9,13.6,13.4,13.3,13.6,13.9,14.2,14.3,14.3,14.5,15.2,15.9,16.4,16.8,16.9,17.1,17,16.6,15.7,14.8,14.4,14.3,14.5,14.6,14.6,14.6,14.5,14.4,14.2,14.1,13.8,13.1,12,10.8,9.8,9.5,9.9,10.8,11.8,12.5,12.8,12.5,12.1,11.7,11.6,11.7,11.8,11.9,11.9,11.8,11.7,11.6,11.5,11.5,11.6,11.8,12,12,11.8,11.6,11.4,11.3,11.2,11.2,11.3,11.3,11.3,11.2,11.1,11.2,11.4,11.9,12.3,12.7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3,5.7,9.3,13,16,17.6,18.2,18.4,18.4,18.4,18.3,18.1,17.8,17.4,17.2,17,16.9,16.9,16.9,17,17.1,17.2,17.3,17.4,17.3,17.1,16.8,16.4,16.1,15.9,15.5,15.1,14.7,14.4,14.2,14,13.7,13.6,13.7,14,14.4,14.7,14.8,14.8,15,15.5,16.1,16.7,17,17.3,17.4,17.4,17,16.2,15.4,15,15,15.4,15.7,15.8,15.7,15.6,15.3,15.1,14.9,14.6,13.9,12.8,11.5,10.5,10.3,10.7,11.6,12.4,13.1,13.4,13.3,13,12.5,12.2,12,12,12.2,12.2,12.1,11.9,11.7,11.5,11.4,11.5,11.8,12.2,12.4,12.4,12.2,12,11.9,11.8,11.8,11.8,12,12.1,12,12,12,12.2,12.5,12.9,13.1,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.3,13.2,16.2,18,18.5,18.5,18.3,18.1,17.8,17.6,17.4,17.3,17.3,17.2,17.1,17,16.8,16.8,16.8,17,17.3,17.6,17.8,17.6,17.3,16.8,16.4,16,15.5,14.9,14.4,14.2,14.1,14.1,14,14,14.2,14.6,15,15.3,15.4,15.3,15.3,15.5,15.9,16.2,16.6,17,17.2,17.3,17.1,16.5,15.9,15.5,15.5,15.8,16.2,16.5,16.4,16.2,16,15.8,15.7,15.4,14.8,13.8,12.7,11.8,11.4,11.7,12.2,12.8,13.3,13.8,14.1,14.1,13.6,13,12.3,12.1,12.1,12.1,12.1,11.9,11.6,11.4,11.3,11.5,11.8,12.2,12.4,12.5,12.5,12.4,12.3,12.2,12.2,12.2,12.4,12.6,12.7,12.7,12.7,12.9,13.1,13.3,13.3,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.6,3.4,6.2,9.8,13.5,16.4,18,18.5,18.4,18.1,17.7,17.4,17.3,17.4,17.6,17.6,17.5,17.3,17,16.7,16.5,16.5,16.7,17.1,17.6,17.7,17.6,17.2,16.8,16.4,15.9,15.4,14.8,14.4,14.2,14.2,14.3,14.5,14.7,15,15.5,15.9,16.1,16,15.8,15.7,15.6,15.7,16,16.4,16.7,17,17,16.9,16.6,16.1,15.5,15.3,15.6,16.1,16.5,16.6,16.5,16.4,16.2,16.1,16,15.6,14.9,14,13.2,12.7,12.7,12.8,13.1,13.6,14.3,15,15.1,14.7,13.8,12.9,12.3,12.1,12,12,11.8,11.6,11.5,11.5,11.7,11.9,12,12.2,12.3,12.4,12.5,12.5,12.5,12.4,12.4,12.6,12.9,13.1,13.2,13.3,13.5,13.6,13.5,13.4,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.3,2.4,4.2,7.1,10.7,14.2,16.7,18.1,18.5,18.3,18,17.6,17.4,17.5,17.9,18.2,18.3,17.9,17.4,16.9,16.4,16.1,16,16.2,16.5,16.8,16.9,16.8,16.6,16.3,15.9,15.6,15.2,14.9,14.7,14.6,14.6,14.8,15.1,15.6,16.2,16.7,16.9,16.9,16.7,16.4,16.1,16,16,16.3,16.6,17,17.2,17.2,17,16.6,16.1,15.6,15.3,15.5,16.2,16.9,17.1,17,16.8,16.5,16.4,16.4,16.2,15.8,15.1,14.4,13.9,13.6,13.4,13.5,13.9,14.7,15.4,15.7,15.3,14.4,13.5,12.9,12.7,12.5,12.3,12,11.9,11.9,11.9,11.9,11.9,12,12.1,12.2,12.4,12.5,12.7,12.7,12.7,12.7,12.9,13.2,13.5,13.7,13.8,13.9,13.9,13.7,13.4,13.3,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.3,0.7,1.3,2.2,3.5,5.6,8.7,12.2,15.5,17.7,18.8,19.1,18.8,18.2,17.8,17.7,18.1,18.6,19.1,19,18.4,17.7,17.1,16.6,16.2,16.1,16,16,16.1,16.1,16.1,16.1,16,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.5,15.9,16.5,17.1,17.6,17.6,17.3,16.9,16.6,16.5,16.6,16.7,17.1,17.5,17.8,18,18,17.8,17.4,17,16.6,16.4,16.6,17.4,18.1,18.3,18,17.5,17,16.7,16.6,16.5,16.1,15.6,15.1,14.7,14.4,14.1,13.9,14.1,14.7,15.4,15.7,15.4,14.7,14.1,13.8,13.6,13.4,13,12.6,12.3,12.3,12.3,12.2,12.2,12.2,12.4,12.5,12.6,12.7,12.9,13.1,13.1,13.1,13.2,13.4,13.7,13.9,13.9,13.9,13.8,13.6,13.4,13.3,0,0,0,0,0,0,0,0,0.1,0.3,0.4,0.5,0.6,0.8,1.3,2.1,3.3,5,7.5,10.8,14.3,17.3,19.3,20.3,20.5,19.9,19.1,18.4,18.2,18.6,19.1,19.5,19.4,18.8,18.1,17.6,17.3,17.2,16.9,16.5,16.1,16,16,16.3,16.4,16.5,16.4,16.3,16.5,16.6,16.6,16.4,16.1,16.1,16.4,17,17.7,18.1,17.9,17.5,17,16.8,16.8,17,17.4,17.9,18.5,19,19.3,19.5,19.4,19.2,18.8,18.3,18,18.2,18.9,19.5,19.7,19.2,18.5,17.8,17.3,17,16.6,16.2,15.7,15.4,15.1,14.9,14.6,14.3,14.2,14.5,15,15.2,15,14.6,14.3,14.2,14.1,13.9,13.4,12.9,12.7,12.7,12.7,12.6,12.5,12.7,13,13.1,13.1,13.1,13.3,13.5,13.6,13.6,13.6,13.7,13.8,13.8,13.8,13.8,13.8,13.7,13.5,13.4,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.3,1.6,2.3,3.4,5,7.2,10.1,13.4,16.7,19.4,21.1,22,22,21.3,20.3,19.3,18.8,18.8,19.2,19.5,19.4,18.9,18.4,18.1,18.1,18.1,17.7,17.1,16.8,16.8,17,17.3,17.5,17.5,17.3,17.2,17.1,17.1,17,16.8,16.5,16.4,16.7,17.4,18.2,18.7,18.7,18.1,17.5,17.1,17.1,17.3,17.9,18.5,19.2,19.8,20.3,20.7,20.8,20.7,20.1,19.5,19.1,19.2,19.8,20.3,20.5,20.1,19.5,18.8,18.1,17.6,17.1,16.6,16,15.6,15.4,15.2,14.9,14.6,14.4,14.4,14.5,14.6,14.5,14.3,14.2,14.2,14.1,13.9,13.5,13.2,13.1,13.1,13.1,12.9,12.8,13,13.3,13.5,13.6,13.7,13.9,14.1,14.2,14.2,14.1,14,14,13.9,13.8,13.9,13.9,13.8,13.7,13.6,0,0,0,0,0,0,0.1,0.2,0.4,0.9,1.5,2.2,2.7,3.4,4.4,5.9,7.9,10.4,13.4,16.4,19.2,21.2,22.5,23,22.9,22.1,20.9,19.9,19.1,18.9,19,19.2,19.2,19,18.7,18.6,18.6,18.5,18.2,17.9,17.8,18,18.4,18.5,18.6,18.5,18.2,17.9,17.6,17.2,17,16.8,16.7,16.9,17.3,18.1,19,19.7,19.7,19.1,18.2,17.6,17.4,17.6,18.3,19.1,19.7,20.3,20.7,21,21.1,21,20.5,19.9,19.6,19.8,20.3,20.7,20.8,20.6,20.1,19.4,18.9,18.4,17.9,17.2,16.6,16.1,15.8,15.6,15.4,15.2,14.9,14.7,14.6,14.6,14.5,14.4,14.3,14.2,14,13.8,13.6,13.5,13.6,13.6,13.5,13.3,13.1,13.2,13.5,13.8,14,14.3,14.7,14.9,14.8,14.6,14.5,14.4,14.2,14.1,14.1,14.1,14.1,14,13.9,13.9,0,0,0,0,0,0.1,0.2,0.5,1.1,2.1,3.4,4.6,5.8,7.1,8.5,10.2,12.2,14.4,16.9,19.3,21.1,22.4,23,23.1,22.8,22,21.1,20.2,19.5,19.1,19.1,19.2,19.2,19.1,18.9,18.8,18.7,18.7,18.6,18.6,18.8,19.1,19.3,19.3,19.2,19.2,19.1,18.7,18.2,17.6,17.3,17.3,17.5,17.8,18.4,19.1,19.9,20.4,20.4,19.7,18.7,18,17.8,18.2,19,19.8,20.3,20.6,20.7,20.8,20.8,20.6,20.3,20.1,20.1,20.4,20.6,20.8,20.7,20.4,19.9,19.4,19,18.7,18.3,17.7,17,16.5,16.3,16.1,16,15.9,15.7,15.5,15.4,15.2,15,14.8,14.5,14.3,14,13.8,13.8,13.9,14,14.1,14,13.7,13.5,13.5,13.8,14.1,14.5,14.9,15.2,15.3,15.1,14.9,14.7,14.6,14.6,14.6,14.6,14.6,14.5,14.4,14.2,14.3,0,0,0,0,0,0.1,0.4,1.1,2.4,4.4,6.7,9,10.8,12.5,13.9,15.3,16.8,18.3,19.8,21.2,22.1,22.7,22.8,22.7,22.4,21.8,21.2,20.6,20.1,19.7,19.6,19.5,19.4,19.2,18.9,18.8,18.7,18.8,19,19.3,19.6,19.8,19.7,19.5,19.3,19.5,19.7,19.6,19.2,18.7,18.4,18.4,18.6,18.9,19.3,19.9,20.4,20.7,20.6,20.1,19.3,18.8,18.7,19.2,19.9,20.6,21,21.1,21,20.9,20.7,20.5,20.5,20.5,20.7,20.9,20.8,20.6,20.3,19.8,19.3,18.9,18.7,18.5,18.2,17.8,17.2,16.9,16.7,16.6,16.6,16.5,16.4,16.3,16.1,15.8,15.4,15,14.6,14.3,14.1,13.9,14,14.2,14.4,14.4,14.3,14.1,13.8,13.8,14,14.2,14.6,14.9,15.2,15.2,15,14.8,14.7,14.8,15,15.2,15.3,15.3,15.1,15,14.8,14.9,0,0,0,0,0,0.2,0.6,1.8,4.1,7.3,10.8,13.9,16.2,17.7,18.8,19.6,20.3,21,21.7,22.2,22.5,22.7,22.7,22.6,22.3,21.9,21.5,21.1,20.8,20.6,20.5,20.3,19.9,19.5,19,18.7,18.7,19,19.4,19.9,20.1,20.1,19.8,19.4,19.3,19.5,20,20.3,20.3,20.1,19.9,19.6,19.5,19.5,19.8,20.2,20.6,20.9,20.9,20.7,20.3,20,20.1,20.4,20.9,21.4,21.6,21.7,21.6,21.4,21.2,21.1,21.1,21.2,21.2,21.2,20.9,20.5,20,19.5,19.1,18.7,18.5,18.3,18,17.7,17.4,17.2,17.1,17,16.9,16.7,16.5,16.4,16.2,15.9,15.5,15,14.7,14.5,14.3,14.2,14.2,14.3,14.5,14.6,14.5,14.3,14.1,14,14,14.1,14.4,14.6,14.9,15,14.9,14.8,14.7,14.9,15.2,15.6,15.9,15.9,15.8,15.7,15.5,15.4,0,0,0,0,0,0.2,0.8,2.3,5.1,9.1,13.5,17.2,19.8,21.1,21.7,22,22.3,22.5,22.6,22.7,22.8,22.9,22.9,22.8,22.6,22.2,21.7,21.4,21.2,21.2,21.2,21,20.6,20,19.4,19,18.9,19.2,19.6,20.1,20.3,20.2,19.8,19.4,19.3,19.7,20.4,21.2,21.6,21.7,21.3,20.7,20.3,20.1,20.2,20.5,20.8,21,21.1,21.1,21,20.9,21.1,21.3,21.6,21.9,21.9,22,21.9,21.9,21.9,21.9,22,22,21.8,21.5,21.2,20.8,20.3,19.8,19.4,19,18.6,18.3,18.1,17.9,17.8,17.7,17.6,17.4,17,16.6,16.3,16.1,16,15.8,15.5,15.1,14.9,14.8,14.6,14.5,14.4,14.4,14.6,14.7,14.8,14.7,14.5,14.3,14.1,14,14.1,14.3,14.6,14.9,14.9,14.8,14.8,14.9,15.3,15.8,16.2,16.4,16.4,16.3,16.2,16,0,0,0,0,0,0.2,0.7,2.1,4.8,9,13.8,18,20.8,22.3,22.9,23.1,23.2,23.3,23.3,23.2,23.2,23.3,23.2,23,22.6,22.1,21.6,21.3,21.2,21.3,21.4,21.3,20.9,20.4,19.9,19.5,19.3,19.5,19.8,20.1,20.4,20.3,20,19.7,19.7,20.2,21.1,22.1,22.8,23,22.7,22.2,21.8,21.6,21.5,21.3,21.1,20.9,20.9,21,21,21.1,21.3,21.6,21.9,22.1,22.1,22,22,22.1,22.2,22.4,22.5,22.5,22.4,22.2,21.9,21.5,20.9,20.4,19.9,19.5,19.1,18.7,18.5,18.4,18.4,18.2,18,17.6,17.1,16.7,16.3,16.1,15.9,15.8,15.6,15.4,15.2,15.1,15,14.8,14.6,14.6,14.7,14.9,15.1,15.2,15.1,14.8,14.5,14.2,14.2,14.3,14.6,14.9,15,15,14.9,15,15.3,15.7,16.2,16.6,16.8,16.9,16.8,16.7,0,0,0,0,0,0.1,0.5,1.5,3.7,7.5,12.3,16.9,20.2,22.2,23.1,23.6,23.8,23.7,23.6,23.5,23.5,23.5,23.3,22.9,22.3,21.6,21.1,20.9,20.9,21.1,21.1,21.1,20.9,20.6,20.3,20.1,19.9,19.9,20,20.2,20.4,20.4,20.3,20.2,20.4,21,21.8,22.7,23.4,23.8,24,24,24,23.9,23.4,22.6,21.7,21,20.7,20.6,20.7,20.9,21.2,21.7,22.1,22.3,22.3,22.2,22.1,22.1,22.2,22.3,22.5,22.6,22.6,22.6,22.3,21.9,21.4,20.9,20.5,20.1,19.7,19.5,19.2,18.9,18.7,18.5,18.1,17.8,17.4,17.1,16.8,16.5,16.3,16.1,15.9,15.7,15.6,15.5,15.4,15.1,14.9,14.7,14.8,15.1,15.3,15.4,15.3,15,14.8,14.5,14.4,14.5,14.7,14.9,15.1,15.1,15.1,15.2,15.4,15.7,16.2,16.6,16.9,17.1,17.2,17.2,0,0,0,0,0,0,0.3,0.9,2.6,5.9,10.5,15.4,19.4,22,23.4,24,24.2,24,23.8,23.5,23.4,23.2,22.9,22.4,21.8,21.1,20.8,20.7,20.8,20.9,20.9,20.9,20.8,20.8,20.7,20.6,20.5,20.4,20.4,20.3,20.4,20.5,20.7,21,21.4,21.9,22.3,22.7,23.2,23.8,24.5,25.1,25.4,25.4,24.8,23.7,22.5,21.4,20.8,20.6,20.8,21.1,21.5,22,22.4,22.7,22.7,22.5,22.3,22.2,22.2,22.2,22.2,22.3,22.4,22.4,22.2,22,21.7,21.3,20.9,20.6,20.4,20.1,19.7,19.2,18.9,18.6,18.3,18,17.9,17.8,17.5,17.2,16.8,16.5,16.3,16.2,16.1,16,15.7,15.3,15.1,15,15,15.2,15.3,15.3,15.2,15.2,15,14.9,14.8,14.8,14.9,15.1,15.2,15.3,15.3,15.4,15.6,15.9,16.2,16.4,16.7,17,17.2,17.3,0,0,0,0,0,0,0.1,0.6,1.9,4.6,9,14.3,19.1,22.3,23.9,24.6,24.6,24.3,23.8,23.3,23,22.8,22.6,22.1,21.6,21.2,21,20.9,21,21,21,20.9,20.9,21,21.1,21.2,21.1,21,20.8,20.7,20.7,21,21.5,22,22.4,22.6,22.5,22.5,22.7,23.3,24.1,24.9,25.3,25.2,24.7,23.7,22.6,21.7,21.2,21.1,21.4,21.7,21.9,22.2,22.5,22.7,22.7,22.7,22.6,22.5,22.4,22.3,22.2,22.1,22.1,22.1,22.1,22,21.8,21.5,21.2,20.8,20.6,20.3,19.8,19.4,19,18.8,18.7,18.5,18.4,18.3,18.1,17.7,17.3,17,16.8,16.6,16.5,16.2,15.8,15.5,15.3,15.2,15.3,15.3,15.2,15.2,15.3,15.4,15.4,15.4,15.3,15.2,15.3,15.4,15.5,15.5,15.6,15.7,15.9,16.2,16.3,16.3,16.4,16.6,16.9,17.2,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.8,13.3,18.7,22.5,24.4,25,24.9,24.5,24,23.4,23,22.7,22.6,22.3,22,21.7,21.6,21.6,21.4,21.2,21.1,21,21.2,21.5,21.8,22,21.9,21.6,21.3,21.2,21.4,21.8,22.4,22.9,23.1,22.9,22.6,22.2,22.2,22.6,23.3,23.8,24.1,24,23.4,22.7,21.9,21.4,21.3,21.4,21.7,22,22.1,22.2,22.2,22.3,22.5,22.6,22.7,22.7,22.6,22.4,22.2,22.1,22.2,22.3,22.5,22.5,22.3,21.8,21.3,20.8,20.6,20.4,20.1,19.8,19.6,19.5,19.4,19.2,19,18.7,18.4,18,17.7,17.5,17.3,17.1,16.8,16.3,15.9,15.6,15.4,15.5,15.5,15.5,15.4,15.3,15.4,15.5,15.7,15.7,15.7,15.6,15.6,15.7,15.8,15.8,15.9,16,16.3,16.5,16.5,16.4,16.4,16.6,16.8,17.2,0,0,0,0,0,0,0,0.2,0.9,2.7,6.3,11.6,17.2,21.5,23.9,24.8,24.9,24.6,24.2,23.8,23.4,23.1,22.9,22.7,22.5,22.3,22.2,22,21.8,21.5,21.4,21.4,21.7,22.1,22.6,22.8,22.7,22.2,21.8,21.7,22,22.5,22.9,23.2,23.2,22.9,22.4,22.1,22,22.1,22.4,22.6,22.6,22.3,21.9,21.5,21.1,21.1,21.3,21.5,21.7,21.9,22.1,22.2,22.2,22.2,22.3,22.4,22.6,22.6,22.5,22.3,22.2,22.2,22.4,22.7,23.1,23.2,22.9,22.2,21.5,21.1,20.9,20.8,20.6,20.4,20.3,20.3,20.2,20,19.6,19.2,18.7,18.3,18,17.8,17.6,17.4,17,16.5,16,15.7,15.6,15.7,15.8,15.7,15.5,15.4,15.5,15.6,15.7,15.9,15.9,15.9,15.9,15.9,16,16.1,16.1,16.2,16.4,16.5,16.6,16.6,16.6,16.7,16.9,17.2,0,0,0,0,0,0,0,0.1,0.6,1.9,4.8,9.4,14.8,19.5,22.5,24,24.5,24.5,24.3,24,23.7,23.4,23,22.8,22.6,22.6,22.5,22.3,22.1,21.9,21.9,22,22.3,22.8,23.2,23.5,23.3,22.8,22.4,22.2,22.4,22.8,23,23.1,23,22.7,22.3,22.1,22,22,22,21.8,21.6,21.3,21.1,21,21.1,21.4,21.7,21.9,22,22.1,22.2,22.4,22.5,22.4,22.3,22.3,22.5,22.5,22.5,22.3,22.2,22.2,22.5,22.9,23.3,23.5,23.3,22.8,22.1,21.7,21.5,21.4,21.3,21.1,21,20.8,20.7,20.5,20.1,19.6,19.1,18.6,18.2,18,17.8,17.6,17.2,16.8,16.4,16.1,16,16,16.1,16,15.8,15.7,15.7,15.7,15.8,16,16.1,16.2,16.3,16.4,16.4,16.4,16.3,16.3,16.4,16.5,16.7,16.7,16.7,16.7,16.9,17.1,0,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.5,12.5,17.5,21.2,23.3,24.2,24.4,24.2,23.8,23.5,23.2,22.9,22.7,22.7,22.7,22.7,22.6,22.5,22.4,22.5,22.7,23,23.5,23.9,24.1,24,23.6,23.2,22.8,22.8,23,23.1,23.1,22.9,22.7,22.6,22.5,22.5,22.5,22.3,22,21.6,21.3,21.2,21.3,21.7,22.2,22.6,22.7,22.6,22.5,22.5,22.7,22.7,22.6,22.5,22.6,22.7,22.8,22.9,22.7,22.5,22.3,22.3,22.5,22.9,23.2,23.3,23,22.6,22.2,22,21.9,21.8,21.6,21.4,21.2,21,20.8,20.5,20,19.4,18.8,18.5,18.2,18,17.8,17.6,17.3,17,16.8,16.6,16.5,16.5,16.4,16.3,16.1,16,15.9,16,16.2,16.5,16.7,16.9,17,16.9,16.9,16.7,16.7,16.7,16.7,16.8,16.8,16.8,16.9,17,17.3,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.9,10.6,15.8,20.1,22.9,24.1,24.3,24,23.6,23.2,23.1,23,23,23,23.1,23.2,23.1,23.1,23.1,23.3,23.6,24,24.4,24.7,24.8,24.7,24.4,23.9,23.5,23.3,23.3,23.4,23.4,23.3,23.3,23.3,23.4,23.6,23.5,23.3,22.8,22.3,21.9,21.7,21.8,22.3,22.9,23.3,23.3,23.1,22.8,22.7,22.6,22.7,22.7,22.8,23,23.3,23.5,23.5,23.3,22.9,22.5,22.2,22.2,22.4,22.7,23,23,22.9,22.6,22.3,22.1,22,21.9,21.7,21.5,21.3,21.1,20.7,20.1,19.5,19,18.6,18.3,18.3,18.2,18,17.8,17.6,17.4,17.3,17.2,17.1,16.9,16.7,16.5,16.3,16.2,16.2,16.4,16.7,17.1,17.3,17.4,17.5,17.4,17.4,17.2,17.1,17,16.9,17,17.1,17.3,17.7,18.1,0,0,0,0,0,0,0,0,0.1,0.6,1.9,4.6,8.8,14.1,18.9,22.2,24,24.5,24.3,23.9,23.6,23.5,23.5,23.6,23.6,23.7,23.7,23.8,24,24.2,24.4,24.6,24.9,25.2,25.3,25.2,25,24.8,24.4,24.1,23.9,23.9,24.1,24.2,24.2,24.3,24.4,24.7,24.8,24.8,24.4,23.8,23.1,22.6,22.2,22.3,22.6,23.1,23.3,23.3,23.1,22.9,22.6,22.5,22.6,22.9,23.2,23.5,23.8,24,23.9,23.7,23.2,22.8,22.5,22.3,22.3,22.5,22.8,23,23,22.8,22.5,22.2,22,21.9,21.9,21.8,21.6,21.3,20.8,20.1,19.5,18.9,18.6,18.5,18.6,18.6,18.5,18.2,17.9,17.7,17.8,17.8,17.8,17.6,17.3,17,16.7,16.6,16.6,16.6,16.8,17.1,17.4,17.6,17.8,17.9,17.8,17.7,17.5,17.2,17.1,17.2,17.5,17.9,18.5,19.2,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.4,7.1,12,17.1,21.1,23.6,24.7,25,24.8,24.5,24.2,24,24,24,24,24.2,24.6,25,25.3,25.4,25.5,25.5,25.5,25.5,25.4,25.2,25,24.7,24.5,24.4,24.5,24.8,25.1,25.3,25.5,25.6,25.7,25.6,25.3,24.8,24.1,23.5,23.1,22.8,22.8,23,23.1,23.2,23.1,22.9,22.8,22.7,22.7,22.9,23.2,23.6,23.9,24,24.1,24,23.8,23.5,23.2,23,22.8,22.7,22.7,22.9,23.1,23.1,23,22.7,22.4,22.2,22.1,22.2,22.1,21.9,21.5,20.8,20.1,19.5,19,18.8,18.7,18.8,18.9,18.7,18.4,18,17.8,17.9,18.1,18.2,18.1,17.9,17.6,17.4,17.2,17.1,17.1,17.1,17.2,17.3,17.5,17.8,18,18.1,17.9,17.7,17.5,17.3,17.4,17.7,18.2,18.9,19.8,0,0,0,0,0,0,0,0,0,0.2,0.8,2.2,5.1,9.4,14.4,19.1,22.5,24.5,25.4,25.5,25.2,24.7,24.3,24.1,24,24.2,24.5,25.1,25.6,25.8,25.8,25.7,25.5,25.6,25.6,25.6,25.5,25.2,24.9,24.7,24.6,24.8,25.1,25.5,25.9,26.1,26.2,26.2,25.8,25.2,24.5,24,23.8,23.7,23.7,23.8,23.9,23.8,23.6,23.4,23.1,23,22.9,23,23.2,23.5,23.8,23.9,24,24.1,24,23.9,23.8,23.7,23.6,23.5,23.4,23.4,23.4,23.5,23.4,23.2,22.8,22.6,22.4,22.4,22.5,22.4,22.2,21.7,21.1,20.5,19.9,19.5,19.2,19,19,18.9,18.6,18.3,17.9,17.8,17.8,18,18.2,18.4,18.4,18.3,18.1,17.9,17.7,17.6,17.5,17.4,17.3,17.4,17.7,18,18.1,18.1,17.9,17.7,17.6,17.5,17.7,18.1,18.6,19.4,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,3.1,6.3,10.7,15.6,19.9,23,24.9,25.6,25.6,25.1,24.6,24.3,24.2,24.4,24.8,25.2,25.6,25.7,25.6,25.4,25.4,25.6,25.9,26.1,26,25.7,25.3,25,24.9,25,25.3,25.7,26.1,26.3,26.4,26.3,25.9,25.3,24.6,24.2,24.1,24.2,24.4,24.6,24.9,24.9,24.6,24.1,23.8,23.6,23.4,23.4,23.5,23.7,23.9,24.1,24.3,24.4,24.5,24.4,24.3,24.2,24.1,24.1,24.1,24.1,24,23.8,23.6,23.2,22.9,22.6,22.5,22.4,22.4,22.4,22.2,21.9,21.5,21.1,20.7,20.3,19.8,19.5,19.3,19,18.7,18.4,18.1,17.9,18,18.1,18.4,18.6,18.8,18.8,18.6,18.4,18.1,17.9,17.7,17.5,17.4,17.4,17.6,17.9,18.2,18.3,18.2,18,17.8,17.8,17.8,18,18.3,18.7,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.3,6.5,10.8,15.5,19.7,22.8,24.7,25.4,25.4,25.1,24.8,24.7,24.8,25,25.3,25.4,25.5,25.5,25.5,25.8,26.1,26.4,26.6,26.5,26.3,26,25.7,25.5,25.5,25.6,25.9,26.1,26.4,26.6,26.6,26.3,25.7,25,24.5,24.4,24.4,24.4,24.6,24.9,25.1,25,24.7,24.4,24.2,24,23.8,23.8,24,24.2,24.5,24.8,25.1,25.2,25.1,24.8,24.7,24.6,24.6,24.5,24.4,24.2,23.8,23.4,23.1,22.9,22.7,22.4,22.2,22.1,22,21.9,21.9,21.8,21.6,21.3,20.9,20.4,20,19.7,19.5,19.3,19,18.7,18.5,18.5,18.6,18.9,19.1,19.2,19.2,18.9,18.5,18.1,17.8,17.7,17.6,17.5,17.5,17.7,18.1,18.4,18.6,18.5,18.3,18.2,18.2,18.1,18.1,18.2,18.4,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.4,3.2,6.2,10.3,14.9,19.2,22.6,24.6,25.4,25.5,25.4,25.2,25.1,25.2,25.3,25.4,25.5,25.8,26,26.3,26.7,26.9,27,27.1,27,26.8,26.5,26.2,26,26,26.1,26.4,26.7,26.9,27,26.8,26.2,25.5,24.8,24.4,24.2,24,24.2,24.5,24.7,24.8,24.8,24.7,24.5,24.3,24.1,24.1,24.3,24.5,24.8,25.2,25.5,25.6,25.6,25.4,25.1,25,24.8,24.7,24.5,24.1,23.6,23.2,23,22.8,22.7,22.4,22.1,21.9,21.7,21.7,21.7,21.7,21.7,21.5,21.2,20.8,20.4,20.1,19.9,19.8,19.7,19.5,19.3,19.2,19.3,19.4,19.6,19.6,19.5,19.1,18.6,18.2,17.9,17.8,17.8,17.9,18,18.2,18.4,18.7,18.9,18.9,18.8,18.8,18.8,18.7,18.6,18.6,18.7,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.9,10,14.7,19.1,22.5,24.4,25.2,25.3,25.3,25.2,25.3,25.4,25.5,25.8,26.1,26.4,26.7,27,27.2,27.4,27.5,27.5,27.3,27,26.6,26.4,26.4,26.5,26.8,27.1,27.3,27.4,27.2,26.7,26,25.2,24.6,24.2,23.9,23.9,24.1,24.4,24.6,24.7,24.7,24.6,24.4,24.3,24.3,24.5,24.7,24.9,25.2,25.5,25.7,25.8,25.7,25.5,25.3,25,24.7,24.4,24,23.6,23.3,23.2,23.1,23,22.7,22.4,22.1,21.9,21.7,21.6,21.6,21.6,21.5,21.3,21,20.7,20.4,20.2,20.1,20.1,20,19.9,19.7,19.6,19.7,19.8,19.9,19.8,19.4,19,18.6,18.4,18.4,18.5,18.6,18.8,19,19.1,19.3,19.4,19.4,19.3,19.4,19.4,19.3,19.2,19.2,19.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,2.9,5.9,10.1,14.8,19.1,22.2,23.9,24.7,25,25.2,25.4,25.6,25.8,26,26.2,26.5,26.8,27.1,27.3,27.5,27.7,27.7,27.5,27.1,26.8,26.7,26.8,27,27.2,27.5,27.6,27.6,27.4,27,26.4,25.7,25,24.4,24,23.9,24,24.3,24.6,24.7,24.8,24.7,24.6,24.6,24.8,24.9,25,25.1,25.3,25.5,25.7,25.8,25.9,25.8,25.5,25.1,24.7,24.4,24.1,23.9,23.8,23.7,23.6,23.4,23.1,22.8,22.6,22.3,22,21.7,21.5,21.5,21.5,21.4,21.3,21,20.7,20.5,20.4,20.3,20.2,20,19.8,19.7,19.8,20,20.2,20.2,19.9,19.5,19.3,19.1,19.1,19.3,19.6,19.8,20,20.1,20.1,20.1,20.1,20,19.9,19.9,19.8,19.9,20.3,21.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3.1,6,10.1,14.5,18.5,21.5,23.4,24.4,25,25.4,25.7,25.8,25.9,25.9,26.1,26.4,26.8,27.2,27.5,27.8,27.8,27.6,27.3,27.1,27.1,27.3,27.5,27.6,27.7,27.7,27.7,27.5,27.1,26.7,26.1,25.4,24.8,24.3,24.2,24.3,24.6,24.9,25.1,25.2,25.2,25.2,25.3,25.4,25.5,25.6,25.6,25.6,25.7,25.8,26,26,25.9,25.6,25.1,24.8,24.5,24.4,24.3,24.2,24.1,23.9,23.6,23.2,23,22.8,22.5,22.1,21.8,21.6,21.5,21.5,21.5,21.4,21.2,21,20.8,20.6,20.4,20.2,20,19.8,19.8,20,20.3,20.6,20.7,20.4,20,19.7,19.6,19.7,19.9,20.4,20.9,21.3,21.4,21.2,20.9,20.6,20.4,20.2,20.2,20.3,20.8,21.6,22.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.5,13.8,17.9,21,23,24.3,25,25.4,25.5,25.5,25.5,25.7,26,26.4,27,27.6,28,28.2,28,27.8,27.6,27.6,27.7,27.8,27.9,27.8,27.7,27.6,27.4,27.2,26.8,26.3,25.7,25.1,24.7,24.6,24.8,25.2,25.6,25.8,25.9,25.9,25.9,26,26.1,26.1,26.1,26.1,26.1,26,26,26.1,26.2,26,25.7,25.3,24.9,24.7,24.6,24.5,24.4,24.2,23.9,23.5,23.2,22.9,22.7,22.5,22.2,21.9,21.8,21.7,21.7,21.7,21.6,21.4,21.2,21.1,20.9,20.6,20.4,20.1,20,19.9,20.1,20.4,20.6,20.7,20.4,20.1,19.9,19.8,19.8,20.1,20.9,21.9,22.7,22.7,22.2,21.4,20.8,20.3,20.1,20.2,20.7,21.4,22.4,23.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,1.2,2.7,5.2,8.9,13.2,17.3,20.6,22.8,24.2,24.9,25.2,25.3,25.4,25.6,25.9,26.4,27,27.7,28.4,28.7,28.5,28.2,28,28,28,28.1,28.1,27.9,27.8,27.6,27.5,27.3,26.9,26.4,25.9,25.3,25,25.1,25.6,26.1,26.5,26.6,26.5,26.4,26.3,26.4,26.5,26.5,26.5,26.5,26.4,26.3,26.2,26.2,26.2,26.1,25.8,25.4,25.1,25,24.8,24.7,24.5,24.2,23.8,23.4,23.2,23,22.7,22.5,22.3,22.1,22.1,22.2,22.2,22.1,21.9,21.7,21.6,21.5,21.3,21,20.8,20.5,20.3,20.1,20.1,20.2,20.3,20.3,20.1,20,19.8,19.8,19.9,20.3,21.2,22.5,23.4,23.4,22.6,21.5,20.6,20.1,19.9,20.2,20.7,21.4,22.2,22.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.4,4.8,8.4,12.5,16.6,20.1,22.6,24.1,25,25.4,25.7,25.9,26.3,26.7,27.2,27.8,28.3,28.6,28.6,28.3,28.2,28.2,28.3,28.5,28.4,28.2,27.9,27.7,27.6,27.3,26.9,26.4,25.8,25.5,25.3,25.6,26.2,26.8,27.1,27.1,26.8,26.6,26.5,26.6,26.7,26.8,26.9,26.8,26.7,26.5,26.4,26.4,26.3,26.2,25.9,25.6,25.4,25.2,25.1,24.9,24.6,24.1,23.8,23.5,23.3,23.2,22.9,22.6,22.3,22.2,22.3,22.5,22.7,22.7,22.4,22.2,22,22,21.9,21.6,21.3,20.9,20.6,20.2,20,19.9,19.9,19.9,19.9,19.9,19.9,20,20.1,20.4,21.2,22.2,23,22.9,22.2,21.2,20.4,20,20,20.3,20.7,21,21.4,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.1,4.4,7.6,11.7,15.9,19.7,22.5,24.3,25.3,25.8,26.1,26.5,26.8,27.1,27.4,27.7,27.9,28,28,28,28.2,28.5,28.8,28.7,28.5,28.1,27.8,27.5,27.1,26.7,26.2,25.9,25.7,25.8,26.1,26.5,27,27.2,27.2,27,26.8,26.7,26.8,26.9,27.1,27.2,27.2,27.1,26.9,26.7,26.6,26.5,26.4,26.2,25.9,25.7,25.6,25.4,25.2,24.8,24.4,24,23.8,23.7,23.5,23.2,22.8,22.5,22.4,22.5,22.8,23.1,23.1,22.9,22.6,22.4,22.5,22.4,22.2,21.8,21.3,20.7,20.3,20,19.8,19.8,19.8,19.9,20,20.1,20.2,20.2,20.4,20.9,21.7,22.2,22.2,21.9,21.2,20.7,20.4,20.5,20.7,20.9,20.9,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.7,1.8,3.8,6.9,11,15.5,19.6,22.7,24.6,25.6,26.1,26.4,26.5,26.6,26.7,26.9,27.1,27.4,27.7,28.1,28.5,29,29.2,29.1,28.6,28.1,27.6,27.2,26.7,26.2,26,26,26.2,26.4,26.6,26.8,27,27.2,27.3,27.3,27.3,27.2,27.2,27.2,27.4,27.7,27.7,27.6,27.3,27,26.8,26.7,26.6,26.5,26.3,26.2,26,25.9,25.7,25.3,24.8,24.6,24.5,24.5,24.4,24.1,23.7,23.2,23,23.1,23.4,23.6,23.5,23.2,22.8,22.6,22.7,22.7,22.5,22.1,21.5,20.9,20.5,20.2,20,19.9,19.9,20.1,20.2,20.4,20.4,20.3,20.4,20.9,21.5,22,22.3,22.3,21.9,21.5,21.3,21.2,21.3,21.3,21.1,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.5,3.4,6.7,11,15.9,20.3,23.5,25.2,26,26.3,26.3,26.3,26.3,26.4,26.7,27.2,27.9,28.5,29.1,29.5,29.5,29.1,28.4,27.8,27.2,26.6,26.2,25.9,26,26.3,26.8,27.1,27.2,27.3,27.3,27.4,27.6,27.8,27.9,27.9,27.8,27.7,28,28.2,28.4,28.2,27.9,27.5,27.2,27.1,27,27,26.9,26.9,26.8,26.6,26.2,25.8,25.5,25.4,25.6,25.9,26.2,26.1,25.6,24.8,24.2,24,23.9,23.8,23.6,23.1,22.7,22.6,22.7,22.7,22.6,22.2,21.7,21.2,20.8,20.5,20.3,20.2,20.1,20.2,20.3,20.4,20.4,20.4,20.6,21.1,21.8,22.5,23,23.1,22.9,22.4,22,21.8,21.8,21.7,21.4,21.2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.7,7.3,12.1,17.4,21.7,24.5,25.8,26.2,26.3,26.3,26.5,26.7,27.2,27.9,28.5,29.1,29.4,29.4,29,28.4,27.8,27.2,26.7,26.3,26.1,26.2,26.6,27.1,27.6,27.8,27.8,27.7,27.7,27.8,28.1,28.4,28.5,28.5,28.3,28.3,28.4,28.7,28.8,28.8,28.5,28.1,27.9,27.7,27.6,27.5,27.5,27.5,27.4,27.2,26.9,26.6,26.5,26.7,27.2,27.9,28.4,28.4,27.8,26.8,25.7,24.8,24.2,23.8,23.3,22.9,22.6,22.6,22.7,22.7,22.6,22.3,22,21.6,21.3,21.1,20.9,20.6,20.5,20.4,20.3,20.3,20.4,20.5,20.9,21.4,22.1,22.9,23.5,23.7,23.4,22.8,22.4,22.2,22.1,22.1,21.8,21.5,21.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.9,4.5,8.7,14,19.2,23.1,25.2,26.1,26.4,26.5,26.8,27.3,27.9,28.7,29.2,29.4,29.2,28.7,28.2,27.6,27.2,26.8,26.6,26.6,26.7,27.1,27.6,28,28.3,28.3,28.2,28.1,28,28.1,28.4,28.6,28.8,28.8,28.7,28.7,28.8,29,29.2,29.2,29.1,28.8,28.6,28.3,28.1,28,28,28,28,27.9,27.8,27.8,27.9,28.2,28.7,29.4,29.9,30,29.6,28.6,27.3,25.9,24.7,23.8,23.3,22.9,22.7,22.7,22.8,22.8,22.7,22.5,22.3,22.1,22,21.8,21.6,21.4,21.2,21,20.8,20.6,20.5,20.7,21,21.5,22.1,22.8,23.4,23.5,23.3,22.7,22.3,22.3,22.3,22.4,22.2,21.9,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.7,10.4,15.7,20.5,23.8,25.5,26.3,26.6,27,27.5,28.2,28.8,29.1,29,28.6,28,27.6,27.3,27.1,27.1,27.2,27.4,27.7,28,28.4,28.6,28.7,28.5,28.4,28.3,28.3,28.4,28.6,28.7,28.8,28.8,28.9,28.9,29.1,29.3,29.5,29.6,29.6,29.5,29.3,29,28.8,28.5,28.4,28.4,28.5,28.8,29.1,29.3,29.4,29.6,29.8,30.2,30.6,30.8,30.5,29.9,28.8,27.4,25.9,24.7,23.9,23.3,23,22.9,22.9,22.9,22.8,22.8,22.8,22.7,22.5,22.4,22.2,22.1,22,21.8,21.4,21,20.8,20.8,20.9,21.3,21.8,22.4,22.9,23.1,22.9,22.5,22.3,22.3,22.4,22.5,22.4,22.2,21.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.3,6.8,11.5,16.6,20.9,23.9,25.5,26.4,27,27.5,28,28.4,28.6,28.4,28,27.7,27.5,27.4,27.6,27.8,28.1,28.4,28.6,28.8,28.8,28.8,28.8,28.7,28.6,28.6,28.7,28.9,29,29.1,29.1,29.1,29.1,29.3,29.4,29.6,29.7,29.8,29.9,29.9,29.9,29.7,29.5,29.2,29,28.9,29.2,29.7,30.4,30.9,31,31,30.9,31,31.1,31.2,31.1,30.7,30.1,29.1,27.7,26.3,25.1,24.1,23.5,23.1,23,23,23.2,23.4,23.5,23.4,23.1,22.8,22.6,22.5,22.4,22.2,21.9,21.5,21.1,20.9,21,21.2,21.6,22,22.4,22.6,22.6,22.5,22.3,22.3,22.4,22.5,22.5,22.3,22.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.6,1.6,3.7,7.1,11.6,16.2,20.2,23.2,25.2,26.4,27.2,27.8,28.2,28.3,28.1,27.9,27.6,27.6,27.7,28,28.4,28.9,29.2,29.4,29.4,29.3,29.1,29,29,29,29.1,29.3,29.5,29.6,29.6,29.5,29.5,29.5,29.6,29.7,29.8,29.8,29.8,29.9,30.1,30.3,30.4,30.3,30.2,30,30,30.3,30.9,31.6,32.2,32.5,32.4,32.2,32,31.8,31.6,31.3,31.1,30.9,30.4,29.5,28.2,26.8,25.4,24.2,23.6,23.3,23.4,23.7,24,24.2,24,23.5,23.1,22.9,22.8,22.7,22.6,22.4,22.1,21.8,21.6,21.4,21.4,21.6,21.8,22.1,22.3,22.5,22.5,22.5,22.5,22.5,22.5,22.6,22.6,22.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.6,1.6,3.5,6.5,10.4,14.7,18.6,21.9,24.3,26.1,27.2,28,28.3,28.2,28.1,27.9,27.8,27.9,28.2,28.7,29.3,29.7,29.9,29.9,29.7,29.5,29.3,29.3,29.4,29.6,29.8,30,30.1,30.1,30,29.9,29.8,29.8,29.8,29.9,30,30.1,30.3,30.6,31.1,31.6,31.9,31.9,31.9,31.9,32,32.4,32.9,33.3,33.5,33.4,33,32.5,32.2,31.8,31.5,31.3,31.3,31.1,30.8,29.9,28.5,26.8,25.3,24.2,23.8,23.9,24.2,24.5,24.5,24.3,23.8,23.4,23.2,23.1,23.2,23.4,23.4,23.4,23.2,22.8,22.5,22.2,22,21.9,22,22.2,22.4,22.6,22.7,22.7,22.7,22.7,22.8,23,23]"),V_={bounds:z_,columns:k_,rows:H_,heights:G_},{bounds:[Ul,au,cu,Nl],columns:Oo,rows:lu,heights:fa}=V_,hu=[37.309805,44.895974],uu=1e3,fu=1160;function W_(i){const[t,e]=i.origin,[n,s]=i.scale,o=(hu[0]-t)*n,r=(e-hu[1])*s;return(a,l,c)=>{const u=Math.hypot(a-o,l-r);if(u>=fu)return c;const f=t+a/n,h=e-l/s;if(f<Ul||f>cu||h<au||h>Nl)return c;const p=(f-Ul)/(cu-Ul)*(Oo-1),d=(Nl-h)/(Nl-au)*(lu-1),_=Math.min(Math.floor(p),Oo-2),m=Math.min(Math.floor(d),lu-2),g=m*Oo+_,v=ce.lerp(fa[g],fa[g+1],p-_),M=ce.lerp(fa[g+Oo],fa[g+Oo+1],p-_),x=Math.max(.16,ce.lerp(v,M,d-m));return u<=uu?x:ce.lerp(x,c,ce.smoothstep(u,uu,fu))}}const du=["#b2a99a","#bbb1a1","#b8ae9e","#b7ab99","#aea394"],X_="#c4baaa",q_="#a39888",pu="#4b5351";function Y_(i,t,e){const n=fe(i,"Верхняя и нижняя набережные · подпорные стены",{surface:"stone"});for(const s of t.waterfront.sections){if(s.soft)continue;const o={section:s,upper:!0},r={section:s,upper:!1};for(const{a,b:l,span:c}of s.segments){const[u,f]=a,[h,p]=l,d=(f-p)/c,_=(h-u)/c,m=Math.ceil(c/1.25),g=(v,M,x=0,y=0)=>{const b=ce.lerp(u,h,v),w=ce.lerp(f,p,v);return[b+x*d,e.faceHeight(b,w,M)+y,w+x*_]};for(let v=0;v<m;v++){const M=v/m,x=(v+1)/m,[y,,b]=g((M+x)/2,o);if(t.wallOpening(y,b,s))continue;const w=g(M,r,0,-.12),S=g(x,r,0,-.12),E=g(M,o,0,.24),T=g(x,o,0,.24);if(E[1]-w[1]<.55||T[1]-S[1]<.55)continue;n.face(q_,w,S,T,E);const C=Math.max(1,Math.round((E[1]+T[1]-w[1]-S[1])/2/.54));for(let I=0;I<C;I++){const N=(I+.026)/C,O=(I+.976)/C,G=_t(w,E,N),V=_t(w,E,O),$=_t(S,T,N),tt=_t(S,T,O),Mt=([j,St,lt],[ct,H,K],pt)=>[ce.lerp(j,ct,pt)-d*.016,ce.lerp(St,H,pt),ce.lerp(lt,K,pt)-_*.016];n.face(du[(v*11+I*7)%du.length],Mt(G,$,.009),Mt(G,$,.991),Mt(V,tt,.991),Mt(V,tt,.009))}const D=s.coping??.38;if(n.face(X_,E,T,g(x,o,D,.24),g(M,o,D,.24)),s.rail===!1)continue;const P=(I,N)=>g(I,o,D*.55,N);for(const I of[.43,1.18])n.beam(P(M,I),P(x,I),.038,pu);const R=Math.max(1,Math.round(c/m/.28));for(let I=0;I<R;I++){const N=ce.lerp(M,x,I/R);n.beam(P(N,.42),P(N,1.16),I===0?.045:.025,pu)}}}}n.finish()}const oo=[-287.6,-16.5],da=-.11,ro="#6c4934",ln="#ba986f",Vo="#a58b6c",Ql=["#674430","#734d37","#7a5239","#6a4734","#815a41"],mu=["#bd282d","#c63134","#c93636","#b9252d"];function Ra([i,t]){return(e,n)=>[i+e*Math.cos(da)-n*Math.sin(da),t+e*Math.sin(da)+n*Math.cos(da)]}const Z_=[[-3.32,-1.15],[1.8,-1.12],[3.48,0],[1.8,1.12],[-3.32,1.18]].map(i=>Ra(oo)(...i));function $_(i,t){const e=new Ei(1,2),n=Ln(new jt({color:"white",flatShading:!0}),{surface:"foliage"}),s=new Dn(e,n,t.length),o=new xe;t.forEach(({center:r,scale:a,color:l},c)=>{o.position.set(...r),o.scale.set(...a),o.rotation.y=c*.87,o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c,new Yt(l))}),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}function K_(i,t){const e=[[-3.32,.98,1.41],[-2.54,1.13,1.25],[-1.12,1.22,1.09],[.62,1.15,1.06],[2.05,.87,1.17],[3.14,.4,1.42],[3.5,0,1.58]];function n(l,c,u){const[f,h,p]=e[l];return t(f-(l===e.length-1?(1-u)*.6:0),c*h*(.73+.27*u),.22+(p-.22)*u)}for(const l of[-1,1])for(let c=1;c<e.length;c++){for(let u=0;u<7;u++){const f=u/7,h=(u+.96)/7;i.face(Ql[(u+c*2)%Ql.length],n(c-1,l,f),n(c,l,f),n(c,l,h),n(c-1,l,h))}if(i.beam(n(c-1,l,1),n(c,l,1),.069,ln),c<6){const[u,f,h]=e[c],p=c===1?3:4;for(let g=0;g<p;g++){const[v,M,x]=e[c-1],y=g/p,b=v+(u-v)*y,w=l*(M+(f-M)*y),S=x+(h-x)*y;i.beam(t(b,w,S),t(b,w,S+.34),.045,ln)}const[d,_,m]=e[c-1];i.beam(t(d,l*_,m+.34),t(u,l*f,h+.34),.057,ln)}}const[s,o,r]=e[0];i.face(ro,t(s,-o*.73,.22),t(s,o*.73,.22),t(s,o,r),t(s,-o,r));for(const l of[-.52,.52]){const c=s-.025,u=.3;for(const f of[l-u,l+u])i.beam(t(c,f,.4),t(c,f,1.18),.044,ln);for(const f of[.4,1.18])i.beam(t(c,l-u,f),t(c,l+u,f),.044,ln);for(let f=0;f<5;f++){const h=f/4;i.beam(t(c,l-u+2*u*h,.43),t(c,l-u,.43+.7*h),.021,ln),i.beam(t(c,l+u-2*u*h,.43),t(c,l+u,.43+.7*h),.021,ln),i.beam(t(c,l-u+2*u*h,1.14),t(c,l+u,1.14-.7*h),.021,ln),i.beam(t(c,l+u-2*u*h,1.14),t(c,l-u,1.14-.7*h),.021,ln)}}i.beam(t(s,-o,r+.34),t(s,o,r+.34),.06,ln);for(let l=0;l<=10;l++){const c=-o+2*o*l/10;i.beam(t(s,c,r),t(s,c,r+.34),.045,ln)}for(let l=1;l<e.length;l++){const[c,u]=e[l-1],[f,h]=e[l];i.face(l%2?"#8e694c":"#856149",t(c,-u,1),t(f,-h,1),t(f,h,1),t(c,u,1))}for(const l of[-1,1])for(const c of[-2.68,-1.87,-.88]){const u=l*(c<-2?1.04:1.12),f=Array.from({length:12},(h,p)=>{const d=p*Math.PI/6;return t(c+Math.cos(d)*.11,u,.66+Math.sin(d)*.1)});i.face("#d0b796",...f)}for(let l=0;l<5;l++){const c=.2+l*.16,u=1.73-l*.13;i.face(ln,t(-2.79,u,c),t(-2.13,u,c),t(-2.13,u-.13,c),t(-2.79,u-.13,c))}for(const l of[-2.81,-2.11])i.beam(t(l,1.77,.16),t(l,1.13,1.06),.075,ro);i.beam(t(2.55,0,1.38),t(4.88,0,2.98),.105,ln),i.beam(t(4.62,0,2.78),t(1.19,0,4.62),.026,Vo);const a=[];for(let l=0;l<14;l++){const c=l*Math.PI/7;a.push(t(-2.37,Math.cos(c)*.31,1.54+Math.sin(c)*.31))}i.beam(t(-2.37,0,1),t(-2.37,0,1.53),.082,ro),a.forEach((l,c)=>{i.beam(l,a[(c+1)%a.length],.036,ln),c%2===0&&i.beam(l,t(-2.37,0,1.54),.025,ln)})}function gu(i,t,e,n){i.beam(t(e,0,.99),t(e,0,n),.087,ro);const s=[[1.56,n*.6,1.03],[n*.61,n*.76,.79],[n*.78,n*.9,.55]];for(const[o,r,a]of s){const l=(c,u)=>{const f=Math.sin(u*Math.PI)*(1-c*c);return t(e+.11+.25*f,c*a*(1-u*.2),o+u*(r-o))};for(let c=0;c<4;c++)for(let u=0;u<6;u++){const f=-1+u/3,h=f+1/3,p=c/4,d=(c+1)/4;i.face(mu[u===0||u===5?0:(c+u)%mu.length],l(f,p),l(h,p),l(h,d),l(f,d))}for(const c of[0,1])i.beam(l(-1.06,c),l(1.06,c),.037,ro);for(const c of[-1,1])i.beam(l(c,0),l(c,1),.023,Vo)}for(const o of[-1,1]){i.beam(t(e-.77,o*1.05,1.2),t(e,o*.26,n*.86),.022,Vo),i.beam(t(e+.53,o*1.05,1.2),t(e,o*.26,n*.86),.022,Vo);for(let r=1;r<10;r++){const a=r/11,l=o*(1.05-.79*a),c=1.2+(n*.86-1.2)*a;i.beam(t(e-.77*(1-a),l,c),t(e+.53*(1-a),l,c),.019,Vo)}}}function J_(i,t,e,n,s){for(let o=0;o<14;o++){const r=o*2.399,a=Math.cos(r),l=Math.sin(r),c=s*(.52+.38*(o*7%11/10)),u=t(e+a*.06,n+l*.06,.04),f=t(e+a*.36*s,n+l*.36*s,c*.68),h=t(e+a*.57*s,n+l*.57*s,c),p=["#8c8551","#a09461","#b2a173"][o%3];i.beam(u,f,.027,p),i.beam(f,h,.018,p)}}function _u(i,t,e,n,s){const o=s?["#a34c43","#be8341","#567b56","#496d80","#c6944e"]:["#675644","#665540"];for(const r of[-.79,.79]){const a=s?"#3e684d":"#444a46";i.beam(t(e-.22,n+r,.025),t(e-.18,n+r,.78),.047,a),i.beam(t(e+.23,n+r,.025),t(e+.22,n+r,.43),.047,a),i.beam(t(e-.18,n+r,.43),t(e+.22,n+r,.43),.052,a)}for(let r=0;r<5;r++){const a=e-.19+r*.1;i.beam(t(a,n-.9,.44),t(a,n+.9,.44),.071,o[r%o.length]),i.beam(t(e-.19-r*.012,n-.9,.57+r*.072),t(e-.19-r*.012,n+.9,.57+r*.072),.067,o[(r+1)%o.length])}}function Q_(i,t){const e=new pe;e.name="Сквер у Алых парусов",i.add(e);const n=fe(e,"Алые паруса · деревянный кораблик и клумбы",{surfaces:{wood:[ro,ln,...Ql,"#8e694c","#856149"],ground:["#777653","#797358"]}}),s=Ra(oo),o=t(...oo)+.15,r=(h,p,d)=>{const[_,m]=s(h,p);return[_,o+d,m]},a=(h,p)=>[[-h,-p],[h,-p],[h,p],[-h,p]].map(([d,_])=>s(d,_));n.shell(a(9,2.18),o-.08,o+.11,"#d7d5bd"),n.flat(a(8.87,2.05),o+.125,"#777653");for(let h=0;h<28;h++){const p=-4.2+h*.318,d=p+.307;n.face(["#628d86","#699892","#7ca39a","#5a8179"][h%4],r(p,-1.45,.145),r(d,-1.45,.145),r(d,1.45,.145),r(p,1.45,.145))}K_(n,r),gu(n,r,-1.03,5.02),gu(n,r,.98,4.6),_u(n,r,9.27,.08,!0);for(const[h,p,d]of[[-7.25,-.95,1.06],[-6.45,.52,.72],[-5.35,1.11,.93],[4.35,1.4,.89],[5.48,-1.23,1.1],[6.8,.44,.99],[7.85,1.12,.83]])J_(n,r,h,p,d);const l=[],c=["#415c35","#536c3b","#66804c","#4d6540"],u=[[-344.6,-12.8,9.8,3.45],[-326.5,-13.4,10.5,3.4],[-310.6,-14.2,12.5,3.7],[-265.5,-20.3,15,4.7],[-247.5,-23.4,10.8,4.5]];for(const[h,[p,d,_,m]]of u.entries()){const g=Ra([p,d]),v=t(p,d)+.14,M=(x,y)=>[[-x,-y],[x,-y],[x,y],[-x,y]].map(b=>g(...b));n.shell(M(_/2,m/2),v-.1,v+.12,"#d4d3c5"),n.flat(M(_/2-.12,m/2-.12),v+.13,"#797358");for(const x of[-.29,.02,.32]){const[y,b]=g(x*_,(h%2-.5)*.8),w=1.15+.51*((h+Math.round(x*10))%3+3)/3;for(let S=0;S<4;S++){const E=w*(.5-S*.095);l.push({center:[y,v+w*(.28+S*.19),b],scale:[E,w*.26,E*.9],color:c[(S+h)%c.length]})}}for(let x=0;x<7;x++){const[y,b]=g((x/6-.5)*_*.75,-.9);l.push({center:[y,v+.2,b],scale:[.42,.16,.42],color:x%3?"#804944":"#77673c"})}}for(const[h,p]of[[-301.1,-31],[-290.8,-31.7],[-273.1,-34.3],[-260.6,-35],[-247.5,-37.5]]){const d=Ra([h,p]),_=t(h,p)+.15;_u(n,(g,v,M)=>{const[x,y]=d(v,-g);return[x,_+M,y]},0,0,!1)}const f=[[-318,0,6.2],[-310.5,-.4,7.7],[-301,1.5,6.4],[-292.2,-.9,8.3],[-282.1,-1.8,7.6],[-272.4,.8,8.7],[-261,-1.2,6.8],[-249.6,.5,7.3]];for(const[h,[p,d,_]]of f.entries()){const m=t(p,d)+.05;n.beam([p,m,d],[p+.13,m+_*.69,d],.24,"#665949");for(let g=0;g<6;g++){const v=g*2.399,M=_*(g<4?.21:.14);l.push({center:[p+Math.cos(v)*M,m+_*(.6+g*.047),d+Math.sin(v)*M],scale:[_*.26,_*.27,_*.23],color:c[(h+g)%c.length]})}}$_(e,l),n.finish()}function xu(i){const t=new Bc(i);return t.colorSpace=Qe,t.anisotropy=4,t}function Ae(i,{text:t,position:e,size:n,outward:s,color:o="#fff",background:r,weight:a=700,fontFamily:l="system-ui, sans-serif",letterSpacing:c="0px",lighting:u="spot",glowColor:f="#ffe4af",spill:h=!0}){if(typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.max(160,Math.min(768,Math.round(n[0]*138))),p.height=Math.max(32,Math.round(p.width*n[1]/n[0]));const d=p.getContext("2d");if(!d)return;r&&(d.fillStyle=r,d.fillRect(0,0,p.width,p.height));const _=t.split(`
`);let m=p.height*.76/_.length;d.letterSpacing=c,d.font=`${a} ${m}px ${l}`,m*=Math.min(1,p.width*.93/Math.max(..._.map(y=>d.measureText(y).width)));function g(y,b,w=0){y.font=`${a} ${m}px ${l}`,y.letterSpacing=c,y.fillStyle=b,y.textBaseline="middle",y.textAlign="center",_.forEach((S,E)=>{y.fillText(S,w+p.width/2,w+p.height/2+(E-(_.length-1)/2)*m*1.13)})}g(d,o);const v=new wn({map:xu(p),alphaTest:.35,toneMapped:!1}),M=new se(new ci(...n),v);M.name=t,M.position.set(...e),M.rotation.y=Math.atan2(...s);let x;if(u==="neon"||u==="backlit"){const y=u==="neon",b=Math.min(44,Math.round(p.width*.12)),w=document.createElement("canvas");w.width=p.width+2*b,w.height=p.height+2*b;const S=w.getContext("2d");S.shadowColor=f,S.shadowBlur=Math.min(b,Math.max(8,m*(y?.64:.27))),g(S,f,b),y&&(S.shadowBlur=0,S.globalAlpha=.18,g(S,"#fff1dd",b));const E=n[0]*w.width/p.width,T=n[1]*w.height/p.height;x=new se(new ci(E,T),new wn({map:xu(w),transparent:!0,opacity:y?.94:.79,blending:uo,depthWrite:!1,toneMapped:!1})),x.position.z=.014,x.visible=!1,M.add(x)}if(u!=="unlit"&&h){const y=new xe;y.position.set(0,u==="spot"?n[1]*.64:0,u==="spot"?.75:.54),y.userData.nightLight={color:f,intensity:u==="neon"?3.8:2.2,range:u==="spot"?3.6:3.1},M.add(y)}return M.userData.setEvening=y=>{const b={spot:.82,backlit:.43,neon:.16,unlit:.5};v.color.setScalar(y?b[u]??.82:1),x&&(x.visible=y)},i.add(M),M}const ke="#f4f2e9",xd="#e9e7df",un="#373e3e",Ca="#303637",ao="#b28c5e",xc=["#d1b27a","#bc9c63","#c8a86f"],j_="#ecefe8",ss=[[-416.6,-27.8,-17.5],[-408.5,-25.4,-15.7],[-399.5,-23.2,-14.7],[-389.5,-22.8,-14.6],[-378.4,-23.1,-14.8]],vd=[[-415.65,-26.9],[-407.4,-24.5],[-408.6,-16.85],[-416.1,-18.05]];function Md(i,t,e,n){return[[i,e],[t,e],[t,n],[i,n]]}function yi(i,t,e,n,s=24){return Array.from({length:s},(o,r)=>{const a=r*2*Math.PI/s;return[i+e*Math.cos(a),t+n*Math.sin(a)]})}function Ce([i,t],e){return[i,e,t]}function pa(i,t){const e=ss.findIndex(([o])=>o>=i);if(e<0)return ss.at(-1)[t];const n=ss[Math.max(0,e-1)],s=ss[Math.max(0,e)];return n===s?n[t]:n[t]+(s[t]-n[t])*(i-n[0])/(s[0]-n[0])}function yn(i,t,e,n,s,o,r,a){i.shell(Md(t-s/2,t+s/2,n-r/2,n+r/2),e,e+o,a)}function tx(i,t){const e=new pe;e.name="Кофейня Qúeue",i.add(e);const n=fe(e,"Павильон и кофейная стойка",{surfaces:{wood:["#b48558","#796c51"],foliage:["#737a51","#68774a","#83916b"]}}),s=Ln(new wn({color:"#759497",transparent:!0,opacity:.26,depthWrite:!1,side:Xe}),{surface:"glass",strength:.6}),o=vd,r=t(-412.5,-21.7),a=r+.09,l=r+2.82;n.shell(o,r-.18,a,"#c9c5b5"),n.shell(o,l,r+3.12,ke),n.wall(o[3],o[0],a,l,ke);for(const[f,h]of[[0,[0,.13,.32,.54,.76,.95,1]],[1,[0,.14,.39,.64,.89,1]],[2,[0,.28,.43,.58,.7,.88,1]]]){const p=o[f],d=o[f+1],_=d[0]-p[0],m=d[1]-p[1],g=Math.hypot(_,m);for(let v=0;v<h.length-1;v++){const M=_t(p,d,h[v]),x=_t(p,d,h[v+1]);if(v===0||v===h.length-2){n.wall(M,x,a,l,ke);continue}const b=f===2&&v===4,w=f===2&&v===3,S=b||w?r+2.48:l;S<l&&n.wall(M,x,S,l,ke);const E=_t(M,x,.5),T=w?r+1.1:a;w&&(n.wall(M,x,a,T,"#a8a494"),n.beam([M[0],T,M[1]],[x[0],T,x[1]],.12,Ca));const C=new se(new ci((h[v+1]-h[v])*g,S-T),s);C.position.set(E[0],(T+S)/2,E[1]),C.rotation.y=-Math.atan2(m,_),e.add(C);for(const D of[M,x])n.beam(Ce(D,a),Ce(D,S),.058,Ca);if(n.beam(Ce(M,S),Ce(x,S),.055,Ca),b){const D=_t(M,x,.82);n.beam(Ce(D,r+.92),Ce(D,r+1.3),.052,"#bab4a5")}}}const c=[[-415.28,-22.2],[-414.15,-22.2],[-413.68,-21.78],[-413.68,-19.92],[-412.9,-19.25],[-411.05,-19.25],[-410.8,-18.65],[-411.22,-18.34],[-414.68,-18.67],[-415.25,-19.13]];n.shell(c,a,r+1.07,"#e4decd"),n.shell(c,r+1.07,r+1.14,"#f1e9d7");const u=c.map(f=>_t([-413.5,-19.8],f,1.03));n.shell(u,r+2.08,r+2.15,"#eac58a"),n.shell(u,r+2.15,l,"#e3dbc9"),yn(n,-413.54,r+1.14,-19.02,.86,.46,.45,"#343435"),yn(n,-413.54,r+1.5,-18.79,.76,.08,.04,"#a7a199");for(const f of[-413.8,-413.62,-413.44,-413.26])n.shell(yi(f,-18.99,.06,.06,10),r+1.6,r+1.76,"#b48558");yn(n,-411.83,r+1.14,-18.85,.85,.34,.46,"#948273"),yn(n,-411.83,r+1.48,-18.85,.85,.046,.46,"#bbb2a0");for(const[f,h]of[[-412.4,-21.8],[-410.8,-21.2]])n.shell(yi(f,h,.21,.21,14),a,r+.47,"#e0d9c9"),n.shell(yi(f,h,.32,.32,14),r+.47,r+.52,"#ece4d2");for(const f of[.19,.39,.59,.79]){const[h,p]=_t(o[0],o[1],f),d=t(h,p-.66);for(const _ of[-.24,.24])n.beam([h+_,d,p-.82],[h+_,d+.43,p-.82],.022,un),n.beam([h+_,d,p-.36],[h+_,d+.86,p-.28],.026,un),n.beam([h+_,d+.41,p-.82],[h+_,d+.41,p-.35],.032,un);for(let _=0;_<7;_++){const m=d+.45+_*.063,g=p-.34+_*.008;n.beam([h-.24,m,g],[h+.24,m,g],.015,un)}yn(n,h,d+.41,p-.58,.48,.05,.42,un)}for(const f of[.04,.94]){const[h,p]=_t(o[0],o[1],f);ex(n,h,t(h,p-.64),p-.64)}n.finish()}function ex(i,t,e,n){i.shell(yi(t,n,.26,.26,12),e,e+.5,"#e6e7dd"),i.flat(yi(t,n,.22,.22,12),e+.505,"#6b6154"),i.beam([t,e+.5,n],[t+.04,e+1.39,n+.02],.035,"#796c51");for(let s=0;s<9;s++){const o=s*2.4,r=e+.79+s*.075,a=[t+.21*Math.cos(o),r+.11,n+.21*Math.sin(o)];i.beam([t,r,n],a,.024,"#737a51"),i.face(s%2?"#68774a":"#83916b",a,[t+.025,r,n+.06],[a[0]*.5+t*.5,r+.17,a[2]*.5+n*.5])}}function nx(i){const t=new pe;t.name="Ресторан «Море. Истории о еде»",i.add(t);const e=fe(t,"Белая терраса у «Старинной Анапы»",{surfaces:{wood:[ao,...xc],ground:["#6b6154"]}}),{front:[n,s],grade:o}=_s,r=(h,p)=>{const[d,_]=_t(n,s,h/32.59);return[d-p*.197,_+p*.98]},a=(h,p,d,_)=>[r(h,d),r(p,d),r(p,_),r(h,_)],l=o+.15,c=l+2.94;e.shell(a(0,32.59,0,1.9),l-.34,l,"#b6aa94"),e.shell(a(0,32.59,7.1,9.15),l-.34,l,"#b6aa94");for(const[h,p]of[[0,7.3],[12.1,20.4],[24.9,32.59]])e.shell(a(h,p,1.9,7.1),l-.34,l,"#b6aa94");for(const[h,p,d,_]of[[0,32.59,0,1.9],[0,32.59,7.1,9.15],[0,7.3,1.9,7.1],[12.1,20.4,1.9,7.1],[24.9,32.59,1.9,7.1]])for(let m=h+.13;m<p;m+=.34)e.beam(Ce(r(m,d),c),Ce(r(m,_),c),.077,ke);for(let h=0;h<6;h++){const p=c-.02+h*.09;e.beam(Ce(r(0,0),p),Ce(r(32.59,0),p),.066,ke);for(const d of[0,32.59])e.beam(Ce(r(d,0),p),Ce(r(d,9.15),p),.066,ke)}for(const h of[.14,4.55,8.98,13.41,17.84,22.27,26.7,32.43])e.beam(Ce(r(h,.22),l),Ce(r(h,.22),c+.44),.165,ke);for(const h of[2.35,6.82,11.25,15.66,20.07,24.48,28.89,31.3]){e.shell(a(h-.76,h+.76,.16,.72),l,l+.65,ke);for(let _=1;_<=5;_++){const m=l+.1+_*.085;e.beam(Ce(r(h-.75,.153),m),Ce(r(h+.75,.153),m),.02,xd)}e.flat(a(h-.7,h+.7,.2,.68),l+.655,"#788166");const[p,d]=r(h,1.34);yn(e,p,l+.69,d,.82,.07,.7,"#ab8d63"),yn(e,p,l,d,.08,.69,.08,"#545549")}const[u,f]=r(25.4,-.05);Ae(t,{text:"МОРЕ",position:[u,c+.2,f],size:[2.28,.41],outward:[.197,-.98],color:"#6e553a",lighting:"spot",glowColor:"#ffd089"});for(const h of[24.65,25.4,26.15])e.beam(Ce(r(h,-.018),c+.5),Ce(r(h,-.17),c+.44),.041,"#70664f");e.finish()}function ix(i,t,e,n,s){const o=new pe,r=new wn({color:"#c9ba98",toneMapped:!1}),a=new Mn(.043,8,6),l=4,c=16;let u;for(let f=0;f<=c;f++){const h=f/c,[p,d]=_t(e,n,h),_=s-.18*Math.sin(Math.PI*(h*l%1)),m=[p+.13,_,d];if(u&&t.beam(u,m,.015,"#353535"),u=m,f===c)continue;const g=new se(a,r);g.position.set(p+.13,_-.052,d),f%4===2&&(g.userData.nightLight={color:"#ffe4ad",intensity:3.5,range:3.4}),o.add(g)}o.userData.setEvening=f=>r.color.set(f?"#fff0be":"#c9ba98"),i.add(o)}function sx(i,t){const e=new pe;e.name="Гриль-бар «Бикью»",i.add(e);const n=fe(e,"Остеклённый фасад на Греческом переулке",{surfaces:{flatRoof:["#353635"],stone:["#77726a"],wood:["#403731"]}}),s=[[-456.42,4.1],[-456.94,24.1]],o=[[-458.12,4.1],[-458.64,24.1]],r=[o[0],s[0],s[1],o[1]],a=t(-457,14.1)+.11,l=Math.min(...s.map(p=>t(...p)))-.2,c=a+2.82;n.shell(r,l,a+.12,"#77726a"),n.shell(r,c,c+.21,"#353635"),n.wall(...o,a+.1,c,"#403731");const u=Ln(new wn({color:"#394c50",transparent:!0,opacity:.53,depthWrite:!1,side:Xe}),{surface:"glass",strength:.7});for(const[p,d,_]of[[...s,14],[o[0],s[0],1],[s[1],o[1],1]])for(let m=0;m<_;m++){const g=_t(p,d,m/_),v=_t(p,d,(m+1)/_),M=_t(g,v,.5),x=v[0]-g[0],y=v[1]-g[1],b=new se(new ci(Math.hypot(x,y),c-a-.12),u);if(b.position.set(M[0],(c+a+.12)/2,M[1]),b.rotation.y=-Math.atan2(y,x),e.add(b),n.beam(Ce(g,a+.08),Ce(g,c),.074,"#292c2b"),n.beam(Ce(g,a+.85),Ce(v,a+.85),.041,"#393b39"),_===14&&m!==6&&m!==7){for(const w of[.12,.45]){const S=Math.max(0,t(M[0]+.15,M[1])-a),E=(T,C)=>{const[D,P]=_t(g,v,T+w);return[D+.025,a+C+S,P]};n.face("#c89045",E(0,.36),E(.14,.36),E(.31,.6),E(.17,.6)),n.face("#c89045",E(.17,.6),E(.31,.6),E(.14,.84),E(0,.84))}yn(n,M[0]-.75,a+.71,M[1],.55,.09,.62,"#856747"),yn(n,M[0]-.75,a+.1,M[1],.07,.61,.07,"#343330")}}ix(e,n,...s,c-.06);const f=new wn({color:"#757078",toneMapped:!1}),h=new se(new Le(.047,.047,3),f);h.position.set(-457.8,c-.27,7.7),h.userData.setEvening=p=>f.color.set(p?"#ac91ff":"#757078"),h.userData.nightLight={color:"#9b78ff",intensity:2.5,range:3.3},e.add(h),Ae(e,{text:`BAR
BQ`,position:[-456.54,a+1.36,13.98],size:[1.34,1.17],outward:[1,.026],color:"#cac2a7",weight:550,lighting:"unlit"}),n.finish()}function ox(i,t,e){const n=new wn({color:"#d2d0c2",toneMapped:!1}),s=new pe;for(const o of[1,2]){const r=Array.from({length:41},(c,u)=>{const f=ce.lerp(e[0],e.at(-1),u/40),[h,p,d]=t(f,o,-.18);return new B(h,p,d+(o===1?-.05:.05))}),a=new Hc(r),l=new se(new bo(a,85,.026,5,!1),n);s.add(l)}s.userData.setEvening=o=>n.color.set(o?"#fff2d7":"#d2d0c2"),i.add(s)}function rx(i,t){const e=new pe;e.name="Лаундж-зона Qúeue",i.add(e);const n=fe(e,"Волнообразный навес и кофейня"),s=(d,_)=>t(d,_)+.19,o=d=>{const _=(d+395.7)/5.6;return s(d,pa(d,2))+3.65+1.08*Math.exp(-(_**2))},r=(d,_,m=0)=>[d,o(d)+m,pa(d,_)],a=[-416.6,-409.3,-403.8,-388.6,-383.6,-378.4];for(const d of[1,2])for(let _=1;_<a.length;_++){const m=a[_-1],g=a[_],v=Math.ceil((g-m)/.37);let M,x;for(let y=0;y<=v;y++){const b=y/v,w=m+(g-m)*b,S=pa(w,d),E=s(w,S),T=Math.sqrt(Math.max(0,1-(2*b-1)**2)),C=[w,E+.09+(o(w)-E-.36)*T,S],D=r(w,d);M&&(n.beam(M,C,.18,ke),n.beam(x,D,.2,xd),n.beam([x[0],x[1]-.23,x[2]],r(w,d,-.23),.075,ke)),(y>0||_===1)&&n.beam(C,D,y===0||y===v?.18:.065,ke),M=C,x=D}}for(let d=0;d<=94;d++){const _=a[0]+(a.at(-1)-a[0])*d/94;n.beam(r(_,1,-.11),r(_,2,-.11),.1,ke)}ox(e,r,a),tx(e,s);const l=-412.2,c=o(l)-.1,u=(ss[1][2]-ss[0][2])/(ss[1][0]-ss[0][0]),f=[-u,1],h=pa(l,2)+.15,p=[[-1.65,-.04],[1.65,-.04],[1.65,.04],[-1.65,.04]].map(([d,_])=>[l+d,h+d*u+_]);n.shell(p,c-.21,c+.21,ke),Ae(e,{text:"Qúeue",position:[l,c,h+.05],size:[3.2,.39],outward:f,color:Ca,lighting:"spot"}),n.finish()}function vu(i,t,e,n){const s=t(e,n)+.16,o=yi(e,n,3.45,2.35);i.shell(o,s-.24,s+.08,ao);for(let a=-10;a<=10;a++){const l=a*.22,c=3.4*Math.sqrt(1-(l/2.35)**2);i.beam([e-c,s+.084,n+l],[e+c,s+.084,n+l],.018,xc[(a+12)%xc.length])}for(const a of[-1,1]){const l=[e+a*2.5,n];i.shell(yi(...l,.095,.095,10),t(...l)-.12,s+3.05,ke)}const r=yi(e,n,3.55,2.45,32);for(let a=0;a<r.length;a++)i.beam(Ce(r[a],s+2.88),Ce(r[(a+1)%r.length],s+2.88),.13,ke);for(let a=-8;a<=8;a++){const l=a*.4,c=2.41*Math.sqrt(1-(l/3.55)**2);i.beam([e+l,s+2.89,n-c],[e+l,s+2.89,n+c],.09,ke)}for(const a of[-.23,-.09,.09,.23]){const l=Array.from({length:32},(c,u)=>{const f=u*Math.PI/16;return[e+.97*Math.cos(f),s+1.38+.99*Math.sin(f),n+a]});for(let c=0;c<l.length;c++)i.beam(l[c],l[(c+1)%l.length],.035,ke)}yn(i,e,s+.55,n,1.08,.055,.48,ao);for(const a of[-.57,.57])i.beam([e+a,s+2.21,n],[e+a,s+2.89,n],.018,un)}function ax(i,t){const s=t(-397.8,-29.25)+.18;for(const r of[-2.28,2.28])i.shell(yi(-397.8+r,-29.25,.085,.085,12),s-.14,s+3.38,ke);const o=[[-397.8-3.18,s+2.77,-29.25+.45],[-397.8-3.27,s+3,-29.25-1.37],[-397.8,s+2.67,-29.25-.72],[-397.8+3.29,s+3.02,-29.25-1.3],[-397.8+3.14,s+2.8,-29.25+.49]];for(let r=0;r<o.length;r++)i.beam(o[r],o[(r+1)%o.length],.085,ke);for(let r=0;r<20;r++){const a=(r+1)/21,l=a<.5?_t(o[1],o[2],a*2):_t(o[2],o[3],(a-.5)*2);i.beam(l,_t(o[0],o[4],a),.064,ke)}}function cx(i,t){const e=new pe;e.name="Качели, теневые крылья и белые галечные сиденья",i.add(e);const n=fe(e,"Настилы и мебель",{surfaces:{wood:[ao,...xc]}});vu(n,t,-410.7,-30.1),vu(n,t,-382.8,-25.55),ax(n,t);const s=new Mn(1,24,12),o=new jt({color:j_});for(const[f,h,p,d,_,m]of[[-401.9,-30.05,1.12,.69,.41,.18],[-402.7,-27.65,.88,.65,.4,-.29],[-399.6,-26.05,1.26,.72,.43,-.14],[-396.7,-28.5,.73,.62,.41,.26],[-395.1,-26.05,.98,.68,.43,-.31]]){const g=new se(s,o);g.scale.set(p,_,d),g.rotation.y=m,g.position.set(f,t(f,h)+_+.15,h),g.castShadow=!0,g.receiveShadow=!0,e.add(g)}for(const[f,h]of[[-406.2,-20.1],[-403,-18.2],[-390.1,-17.3]]){const p=t(f,h)+.15;n.shell(yi(f,h,.38,.38,16),p+.72,p+.77,un),n.beam([f,p,h],[f,p+.72,h],.045,un);for(const d of[-.74,.74]){yn(n,f+d,p+.43,h,.42,.055,.42,un);for(const _ of[-.16,.16])for(const m of[-.15,.15])n.beam([f+d+_,p,h+m],[f+d+_,p+.43,h+m],.029,un);n.wall([f+d*1.25,h-.19],[f+d*1.25,h+.19],p+.46,p+.81,un)}}const r=-387.7,a=-20.4,l=t(r,a)+.16,c=Md(r-.92,r+.92,a-.72,a+.72);n.shell(c,l-.12,l+.42,ao);for(const f of c)n.beam(Ce(f,l),Ce(f,l+1.75),.09,ao);const u=[[r-1,l+2.35,a],[r+1,l+2.35,a]];for(const f of[-1,1])n.face("#99704d",...u,[r+1.03,l+1.72,a+f*.82],[r-1.03,l+1.72,a+f*.82]);n.finish()}function lx(i,t){const e=fe(i,"Памятный знак Матери Марии"),n=-652.7,s=-66.6,o=t(n,s)+.1,r=[[-1.02,-.42],[-.73,-.78],[.59,-.78],[1.05,-.39],[1.15,.24],[.91,.59],[-.78,.61],[-1.1,.18]],l=[[-.63,.68,-.21],[-.42,1.14,-.51],[.04,1.53,-.56],[.53,1.25,-.39],[.84,.85,-.01],[.88,.47,.37],[-.76,.48,.43],[-.94,.59,.16]].map(([u,f,h])=>[n+u,o+f,s+h]),c=r.map(([u,f])=>[n+u,o-.13,s+f]);for(let u=0;u<r.length;u++){const f=(u+1)%r.length;e.face(u%2?"#706f67":"#666860",c[u],c[f],l[f],l[u]),e.face(u%3?"#8e928b":"#a4a79f",l[u],l[f],[n+.03,o+.95,s-.01])}e.beam([n+.02,o+.05,s+1],[n+.08,o+1.58,s-.57],.14,"#807f71"),e.beam([n-.82,o+1,s+.055],[n+.9,o+1,s+.055],.14,"#807f71");for(let u=0;u<3;u++)for(const[f,h]of[-1.2,-.6,.035,.635].entries()){const p=n+h+.286,d=s+1.33+u*.58,_=t(p,d)+.035;yn(e,p,_-.08,d,.57,.09,.56,f===0||f===3?"#a78277":"#929897")}e.finish()}function hx(i,t){const e=fe(i,"Памятник морскому десанту"),n=-631.7,s=-37.2,o=t(n,s)+.09,r=(l,c,u)=>[n+l,o+c,s+u];yn(e,n,o-.12,s+.45,2.85,.23,2.35,"#bbb6aa"),yn(e,n,o+.11,s+.3,2.19,.26,1.57,"#424545"),yn(e,n,o+.37,s-.25,1.06,2.08,.22,"#333837");const a=Array.from({length:10},(l,c)=>{const u=Math.PI/2+c*Math.PI/5,f=c%2?.064:.151;return r(-.28+f*Math.cos(u),2.12+f*Math.sin(u),-.135)});for(let l=0;l<a.length;l++)e.face("#b6a06b",r(-.28,2.12,-.135),a[l],a[(l+1)%a.length]);e.beam(r(-.34,.52,.73),r(.73,1.39,.54),.13,un),e.beam(r(-.44,.58,.48),r(-.2,.53,.95),.18,un);for(const[l,c]of[[[-.66,.79,.72],[-.62,1.33,.65]],[[-.21,.84,.7],[.01,1.35,.58]]])e.beam(r(-.37,.57,.74),r(...l),.11,un),e.beam(r(...l),r(...c),.1,un),e.face(un,r(...c),r(c[0]-.1,c[1]-.26,c[2]+.07),r(c[0]+.08,c[1]-.23,c[2]-.05));for(const l of[-1,0,1]){const c=l*.82,u=l*1.21,f=[r(c-.32,.28,1.72),r(c+.32,.28,1.72),r(u+.37,.19,3.17),r(u-.37,.19,3.17)],h=f.map(([p,,d])=>[p,t(p,d)-.08,d]);e.face("#b7b5ac",...f);for(let p=0;p<f.length;p++){const d=(p+1)%f.length;e.face("#a7a8a1",f[p],f[d],h[d],h[p])}e.face("#444746",r(c-.25,.294,1.8),r(c+.25,.294,1.8),r(u+.28,.216,3.05),r(u-.28,.216,3.05))}e.finish()}function ux(i,t){rx(i,t),cx(i,t),nx(i),sx(i,t),lx(i,t),hx(i,t)}const ys=Math.PI*2;function lr(i,t,e,n=36){return Array.from({length:n},(s,o)=>{const r=o/n*ys;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function fx(){const e=new Uint8Array(18432);for(let s=0;s<48;s++){const o=(s+.5)/48;for(let r=0;r<96;r++){const a=r/96*ys,l=Math.max(0,Math.sin(a*3)*.06+Math.sin(a*7+.4)*.035),c=o>.51+l?[173+o*46,196+o*36,211+o*38]:o>.42?[71,78,66]:[122+o*71,113+o*77,99+o*86],u=(s*96+r)*4;e.set([...c,255],u)}}const n=new Fc(e,96,48);return n.colorSpace=Qe,n.mapping=Qo,n.needsUpdate=!0,new ar({color:"#ced3d4",envMap:n,reflectivity:.88,specular:"#f2f5f5",shininess:78})}function dx(i,t){const s=fe(i,"Фонтан «Жемчужина Анапы»"),o=(p,d,_=0)=>[p,t(p,d)+.17+_,d],r=lr(-238,2,3.5),a=lr(-238,2,3.71);r.forEach(([p,d],_)=>{const m=(_+1)%r.length;s.face("#555857",o(-238,2),o(p,d),o(...r[m])),s.face("#997359",o(p,d),o(...a[_]),o(...a[m]),o(...r[m]))});for(let p=0;p<28;p++){const d=p*ys/28,_=lr(-238+2.85*Math.cos(d),2+2.85*Math.sin(d),.036,8);s.face("#a7a8a1",..._.map(m=>o(...m,.008)))}const l=.13;for(let p=0;p<6;p++){const d=l+p*ys/6;for(let _=0;_<5;_++){const m=d-.34+_*.135,g=m+.133,v=(w,S,E)=>o(-238+Math.cos(w)*S,2+Math.sin(w)*S,E),M=v(m,4.43,.44),x=v(g,4.43,.44),y=v(m,4.93,.36),b=v(g,4.93,.36);s.face("#9e9a90",M,x,v(g,4.41,-.045),v(m,4.41,-.045)),s.face("#8e8b84",v(m,5.06,.02),v(g,5.06,.02),v(g,5.06,.1),v(m,5.06,.1)),s.face("#bf8770",M,x,b,y),s.face("#b67e64",y,b,v(g,5.06,.1),v(m,5.06,.1)),_===0&&s.face("#a39d92",M,y,v(m,5.06,.02),v(m,4.41,-.045)),_===4&&s.face("#a39d92",x,b,v(g,5.06,.02),v(g,4.41,-.045))}}const c=new pe;c.name="Шесть зеркальных сфер",i.add(c);const u=new Mn(1,28,20),f=fx(),h=[[0,0,.57,3.35],[-1.65,1.12,.56,.86],[1.77,-.98,.48,1.12],[-2.31,-1.72,.51,0],[2.44,1.69,.47,0],[.47,-2.67,.43,0]];for(const[p,d,_,m]of h){const[g,v,M]=o(-238+p,2+d),x=new se(u,f);if(x.scale.setScalar(_),x.position.set(g,v+_+m,M),x.castShadow=!0,c.add(x),!!m)for(let y=0;y<11;y++){const b=y/11*ys,w=b+.88;s.beam([g+Math.cos(b)*.13,v,M+Math.sin(b)*.13],[g+Math.cos(w)*_*.63,v+m+.13,M+Math.sin(w)*_*.63],.026,"#a5a7a4")}}s.finish()}function px(i,t){const o=Math.cos(-.51),r=Math.sin(-.51),a=fe(i,"Арка Центрального пляжа"),l="#eeeae0",c="#dbd9ce",u=3.11,f=[1.21,1.28,1.34,1.28,1.21],h=[-6.36,-3.69,-1.25,1.25,3.69,6.36],p=(g,v)=>[197.02+g*o-v*r,-463.27+g*r+v*o],d=Math.max(...h.map(g=>t(...p(g,0))))+.16,_=(g,v,M)=>{const[x,y]=p(g,v);return[x,d+M,y]},m=(g,v,M,x)=>[p(g-M,v-x),p(g+M,v-x),p(g+M,v+x),p(g-M,v+x)];for(const[g,v]of h.entries())if(g===0||g===1||g===4||g===5){a.shell(m(v,0,.47,1.18),d-.4,d+u,l),a.shell(m(v,0,.57,1.27),d+u-.045,d+u+.1,l);for(const x of[-1.03,1.03])a.shell(m(v,x,.37,.17),d+u,d+u+.95,l);a.shell(m(v,0,.42,1.23),d+u+.95,d+u+1.09,l)}else for(const x of[-.92,.92])a.shell(m(v,x,.2,.21),d-.4,d+u,l),a.shell(m(v,x,.27,.28),d+u-.06,d+u+.085,l);for(const g of[-.92,.92])for(let v=0;v<f.length;v++){const M=(h[v]+h[v+1])/2,x=(h[v+1]-h[v])/2,y=(b,w,S)=>_(M+(x+w)*Math.cos(b),g+S*.17,u+(f[v]+w)*Math.sin(b));for(let b=0;b<14;b++){const w=Math.PI*b/14,S=Math.PI*(b+1)/14;for(const E of[-1,1])a.face(l,y(w,-.19,E),y(S,-.19,E),y(S,.11,E),y(w,.11,E));a.face(c,y(w,-.19,-1),y(S,-.19,-1),y(S,-.19,1),y(w,-.19,1)),a.face(l,y(w,.11,-1),y(S,.11,-1),y(S,.11,1),y(w,.11,1))}}a.finish()}function mx(i,t){const s=t(64.17,13.11)+.16,o=fe(i,"Скульптура «Белая шляпа»"),r=["#8b8777","#a39e8d","#a9a38f","#8d897b","#969383"],a=[[1.28,.77,-.12,.1],[1.39,.74,.35,.19],[1.12,.65,.75,.17],[.79,.57,1.12,.08],[.48,.38,1.56,-.17]].map(([d,_,m,g],v)=>Array.from({length:13},(M,x)=>{const y=x/13*ys,b=1+.13*Math.sin(x*3.3+v*.81);return[64.17+g+Math.cos(y)*d*b,s+m+.12*Math.cos(x*2.4+v),13.11+Math.sin(y)*_*b]}));for(let d=0;d<a.length-1;d++){const _=a[d],m=a[d+1];_.forEach((g,v)=>{const M=(v+1)%_.length;o.face(r[(v+d*3)%r.length],g,_[M],m[M]),o.face(r[(v+d*3+1)%r.length],g,m[M],m[v])})}o.face("#a29e8f",...a.at(-1));const l=(d,_,m)=>Array.from({length:32},(g,v)=>{const M=v/32*ys,x=Math.cos(M)*d,y=Math.sin(M)*d*.83,b=m?.038*Math.cos(2*M):.044*Math.cos(2*M);return[64.17-.13+x,s+1.56+_+y*.37+b,13.11+y]}),u=[[.75,0,!1],[.75,.035,!1],[.4,.12,!1],[.405,.155,!0],[.39,.22,!0],[.34,.43,!0],[.24,.49,!0],[.08,.46,!0]].map(d=>l(...d));for(let d=0;d<u.length-1;d++){const _=u[d+1],m=u[d];m.forEach((g,v)=>{const M=(v+1)%m.length;o.face(d===3?"#d8d7ce":"#f5f3e9",g,m[M],_[M],_[v])})}o.face("#f5f3e9",...u.at(-1));const f={Б:[[[.88,1],[0,1],[0,0],[.76,0],[.9,.22],[.72,.53],[0,.53]]],Е:[[[.88,1],[0,1],[0,0],[.9,0]],[[0,.5],[.75,.5]]],Л:[[[0,0],[.31,1],[.84,1],[.84,0]]],А:[[[0,0],[.45,1],[.9,0]],[[.2,.42],[.7,.42]]],Я:[[[.9,0],[.9,1],[.25,1],[0,.76],[.23,.54],[.9,.54]],[[.52,.54],[0,0]]],Ш:[[[0,1],[0,0],[.95,0],[.95,1]],[[.475,0],[.475,1]]],П:[[[0,0],[0,1],[.86,1],[.86,0]]]};[..."БЕЛАЯ ШЛЯПА"].forEach((d,_)=>{for(const m of f[d]??[]){const g=m.map(([v,M])=>{const x=(_+v-5.5)*.155;return[64.17+Math.sin(x)*1.17,s+.41+M*.175,13.11+Math.cos(x)*.88]});g.slice(1).forEach((v,M)=>o.beam(g[M],v,.032,"#f5f3e9"))}});const h=lr(64.17,13.11,2.45),p=(d,_)=>[d,t(d,_)+.17,_];h.forEach((d,_)=>o.face("#b4ac9c",p(64.17,13.11),p(...d),p(...h[(_+1)%h.length])));for(let d=0;d<46;d++){const _=d*2.39996,m=1.12+d%13/13*1.19,g=64.17+Math.cos(_)*m,v=13.11+Math.sin(_)*m,M=t(g,v)+.17;o.shell(lr(g,v,.09+d%4*.035,6),M-.01,M+.03+d%3*.025,r[d%r.length])}o.finish()}function gx(i,t){dx(i,t),mx(i,t),px(i,t)}function _x(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Ee;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let d=0;d<p.count;++d)f.push(p.getX(d)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in o){const f=Mu(o[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in r){const f=r[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let _=0;_<r[u].length;++_)p.push(r[u][_][h]);const d=Mu(p);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(d)}}}return l}function Mu(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new kn(r,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,p=u.count;h<p;h++)for(let d=0;d<e;d++){const _=u.getComponent(h,d);a.setComponent(h+f,d,_)}}else r.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const vc=Math.PI/4,xx="#e1d9bf",vx="#26313a",Mx=[[37.2996896,44.8872772],[37.2995282,44.8874039],[37.2994588,44.8874602],[37.2994093,44.887514],[37.2990185,44.8878942],[37.2988335,44.8880063],[37.2982407,44.8885479]],Sx=[[37.2992911,44.8877628],[37.2988951,44.8881412]];function Js(i,t){const e=(i-.5)*vc;return[Math.sin(e)*t,Math.cos(e)*t]}function Su(i){const t=i*vc;return-.85*Math.sin(t)+.5*Math.cos(t)>0}function yx(i,{rings:t},e){const n=t[0],s=n.reduce((x,y)=>x+y[0],0)/n.length,o=n.reduce((x,y)=>x+y[1],0)/n.length,r=e(s,o),a=Math.min(...n.map(x=>e(...x)))-r-.3,c=n.reduce((x,[y,b])=>x+Math.hypot(y-s,b-o),0)/n.length*.74,u=new jt({color:xx,flatShading:!0}),f=new jt({color:vx,flatShading:!0}),h=new jt({color:"#b6b8ae"}),p=new jt({color:"#a9c2c8",transparent:!0,opacity:.56,depthWrite:!1}),d=new pe,_=new Map([[u,[]],[f,[]]]);d.name="Анапский маяк",d.position.set(s,r,o),i.add(d);function m(x,y,b,w,S,E=8){const T=new se(new dn(w,b,y-x,E),S);return T.position.y=(y+x)/2,T.rotation.y=-Math.PI/E,T.castShadow=S!==p,d.add(T),T}function g(x,y,b,w,S,E,T,C){const D=x*vc,P=Math.sin(D),R=Math.cos(D),I=c*Math.cos(vc/2)+T,N=new Le(S,b,E);N.rotateY(D),N.translate(P*I+R*w,y,R*I-P*w),_.get(C).push(N)}m(a,3.15,c*1.13,c*1.13,u),m(3.15,3.55,c*1.16,c*1.16,u);const v=[[3.55,6.5,!0],[6.5,9.2,!1],[9.2,12,!0],[12,14.6,!1],[14.6,17.05,!0]];for(const[x,y,b]of v){const w=new Ee,S=[[],[]];for(let T=0;T<8;T++){const[C,D]=Js(T,c),[P,R]=Js(T+1,c);if(S[Number(b&&Su(T))].push(C,x,D,P,x,R,P,y,R,C,x,D,P,y,R,C,y,D),x<14.6){const I=b&&Su(T)?f:u;for(const N of[-c*.2,c*.2])g(T,(x+y)/2,y-x,N,c*.095,.16,.03,I)}}w.setAttribute("position",new ne(S.flat(),3)),w.addGroup(0,S[0].length/3,0),S[1].length&&w.addGroup(S[0].length/3,S[1].length/3,1),w.computeVertexNormals();const E=new se(w,[u,f]);E.castShadow=!0,d.add(E)}m(12.2,12.39,c*1.05,c*1.05,u),m(13.4,13.54,c*1.04,c*1.04,u),m(17.05,17.65,c*1.07,c*1.07,u),m(17.65,17.9,c*1.12,c*1.12,u);for(let x=0;x<8;x++)for(const y of[-c*.22,0,c*.22])g(x,17.34,.24,y,.26,.07,c*.067,f);for(const[x,y]of _){d.add(new se(_x(y),x));for(const b of y)b.dispose()}m(17.9,18.11,c*.71,c*.71,u,12),m(18.11,20.05,c*.58,c*.58,p,12),m(20.05,20.83,c*.68,.24,u,12),m(20.83,21,.24,.12,u,12),m(18.48,19.43,.31,.31,new jt({color:"#a0433d"}),12);const M=[];for(let x=0;x<12;x++){const y=(x-.5)*Math.PI/6,b=Math.sin(y)*c*.58,w=Math.cos(y)*c*.58;M.push([[b,18.11,w],[b,20.05,w],.052])}for(let x=0;x<8;x++){const[y,b]=Js(x,c*1.01),[w,S]=Js(x+1,c*1.01);M.push([[y,17.9,b],[y,18.8,b],.042]);for(const P of[18.35,18.8])M.push([[y,P,b],[w,P,S],.037]);const[E,T]=Js(x,c*.88),[C,D]=Js(x+1,c*.88);M.push([[E,19.55,T],[C,19.55,D],.033]),M.push([[E,20.46,T],[C,20.46,D],.033]),M.push([[E,19.55,T],[E,20.46,T],.033])}Sd(d,M,h,"Ограждения фонаря")}function Sd(i,t,e,n){const s=new Le(1,1,1),o=new Dn(s,e,t.length);o.name=n;const r=new xe,a=new B,l=new B,c=new B,u=new B(1,0,0);for(const[f,[h,p,d]]of t.entries())a.set(...h),l.set(...p),c.subVectors(l,a),r.position.copy(a).lerp(l,.5),r.scale.set(c.length(),d,d),r.quaternion.setFromUnitVectors(u,c.normalize()),r.updateMatrix(),o.setMatrixAt(f,r.matrix);i.add(o)}function yu(i,t,e,{height:n,color:s,spacing:o,width:r,name:a}){const l=[];for(let c=1;c<t.length;c++){const[u,f]=t[c-1],[h,p]=t[c],d=Math.ceil(Math.hypot(h-u,p-f)/2.4),_=(m,g)=>{const v=u+(h-u)*m,M=f+(p-f)*m;return[v,e(v,M)+g,M]};for(let m=0;m<d;m++){const g=m/d,v=(m+1)/d;l.push([_(g,.05),_(g,n+.05),r*2.8]);for(const x of[.14,n])l.push([_(g,x),_(v,x),r*1.7]);const M=Math.ceil(Math.hypot(h-u,p-f)/(d*o));for(let x=1;x<M;x++){const y=(m+x/M)/d;l.push([_(y,.14),_(y,n),r])}}c===t.length-1&&l.push([_(1,.05),_(1,n+.05),r*2.8])}Sd(i,l,new jt({color:s}),a)}function bx(i,{origin:[t,e],scale:n},s){const o=r=>r.map(([a,l])=>[(a-t)*n[0],(e-l)*n[1]]);yu(i,o(Mx),s,{height:1.06,color:"#9a9c95",spacing:.16,width:.038,name:"Ограда Верхней Набережной"}),yu(i,o(Sx),s,{height:1.76,color:"#363f40",spacing:.16,width:.027,name:"Ограда маяка"})}const wx="125862202",Ex="977564342",Fl=12,ma=3;function ga(i,t,e,n){const s=[];for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=e*(n(r)-t),c=e*(n(a)-t);if(l>=0&&s.push(r),l<0!=c<0){const u=l/(l-c);s.push([ce.lerp(r[0],a[0],u),ce.lerp(r[1],a[1],u)])}}return s}function bn(i,t,e,n,s){const o=new Vc(t.map(([a,l])=>new vt(a,-l))),r=new se(new Pr(o,{depth:n,bevelEnabled:!1}),s);r.rotation.x=-Math.PI/2,r.position.y=e,r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function Tx(i,t,e){const n=[],s=Math.sign(i.reduce((o,[r,a],l)=>{const[c,u]=i[(l+1)%i.length];return o+r*u-c*a},0));for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=a[0]-r[0],c=a[1]-r[1],u=Math.hypot(l,c);if(u<4||Math.abs(e(r)-e(a))<u*.8)continue;const f=Math.floor(u/3.3);for(let h=0;h<f;h++){const p=(h+.5)/f;n.push([r[0]+l*p+s*c/u*.045,t,r[1]+c*p-s*l/u*.045,-Math.atan2(c,l)])}}return n}function bs(i,t,e,n,s){const o=new Dn(new Le(n,s,.12),e,t.length),r=new xe;t.forEach(([a,l,c,u],f)=>{r.position.set(a,l,c),r.rotation.y=u,r.updateMatrix(),o.setMatrixAt(f,r.matrix)}),o.receiveShadow=!0,i.add(o)}function Ax(i,t){const e=new pe;e.name="Малая бухта, комплекс на берегу";const n=new jt({color:"#c5b08c"}),s=new jt({color:"#eeeae0"}),o=new jt({color:"#b7b5a9"}),r=new jt({color:"#617964"}),a=new jt({color:"#5f8596"}),l=new jt({color:"#5799b9"}),c=4.4;bn(e,t,1.8,c-1.8,n),bn(e,t,c,3.05,n),bn(e,t,c+3.05,3.15,s),bn(e,t,c+6.2,3.4,s),bn(e,t,c+9.6,.35,o);const u=t.map((y,b)=>{const w=t[(b+1)%t.length];return{start:y,end:w,length:Math.hypot(w[0]-y[0],w[1]-y[1])}}).reduce((y,b)=>b.length>y.length?b:y),{start:f,end:h,length:p}=u,d=h[0]-f[0],_=h[1]-f[1],m=-Math.atan2(_,d),g=Math.sign(_),v=-Math.abs(_)/p*.04,M=d*g/p*.04;function x(y,b){return Array.from({length:y},(w,S)=>{const E=(S+.5)/y;return[f[0]+d*E+v,b,f[1]+_*E+M,m]})}bs(e,x(18,c+1.5),r,4.35,2.35),bs(e,x(38,c+4.75),a,1.75,1.35),bs(e,x(30,c+7.9),l,2.55,2.45),i.add(e)}function Rx(i,t,e){if(t.id===Ex)return Ax(i,t.rings[0]),!0;if(t.id!==wx)return!1;const n=t.rings[0],s=ce.degToRad(112.9),o=Math.sin(s),r=-Math.cos(s),a=([w,S])=>w*o+S*r,l=n.map(a),c=Math.min(...l),u=w=>a(w)-c,f=Math.max(...l)-c,h=f*.54,p=n.map(w=>e(...w)),d=Math.max(...p),_=Math.min(...p)-.3,m=new pe;m.name="Малая бухта, корпус «Парусник»";const g=new jt({color:"#f5f3e8"}),v=new jt({color:"#deded5"}),M=new jt({color:"#526f7d"}),x=new jt({color:"#9c9e99"});bn(m,n,_,d-_,v);const y=[];for(let w=0;w<Fl;w++){const S=w*2.45,E=w<9?f-w*3.3:h,T=ga(ga(n,S,1,u),E,-1,u),C=d+w*ma,D=T.reduce(([R,I],N)=>[R+N[0]/T.length,I+N[1]/T.length],[0,0]),P=T.map(([R,I])=>[ce.lerp(R,D[0],.04),ce.lerp(I,D[1],.04)]);bn(m,T,C,.35,g),bn(m,P,C+.35,ma-.35,v),y.push(...Tx(P,C+1.8,u)),(w===8||w===Fl-1)&&bn(m,P,C+ma,.18,x)}const b=ga(ga(n,h-3.8,1,u),h+.15,-1,u);return bn(m,b,d,Fl*ma+1.9,g),bs(m,y,M,1.65,1.15),i.add(m),!0}function Cx(i,t,e){if(t.id!=="142489068")return!1;const n=t.rings[0],s=n.map((ct,H)=>{const K=n[(H+1)%n.length];return{start:ct,end:K,length:Math.hypot(K[0]-ct[0],K[1]-ct[1])}}),[o]=s.sort((ct,H)=>H.length-ct.length).slice(0,2).sort((ct,H)=>ct.start[1]+ct.end[1]-(H.start[1]+H.end[1])),[r,a]=[o.start,o.end].sort((ct,H)=>ct[0]-H[0]),l=n.filter(ct=>ct!==r&&ct!==a).sort((ct,H)=>ct[0]-H[0])[0],[c,u]=r,f=Math.hypot(a[0]-c,a[1]-u),h=Math.hypot(l[0]-c,l[1]-u),p=(a[0]-c)/f,d=(a[1]-u)/f,_=(l[0]-c)/h,m=(l[1]-u)/h,g=(ct,H)=>[c+p*ct+_*H,u+d*ct+m*H],v=(ct,H,K,pt)=>[g(ct,K),g(H,K),g(H,pt),g(ct,pt)],M=new pe;M.name="Анапский морской вокзал";const x=new jt({color:"#e5e4dc"}),y=new jt({color:"#b7a18c"}),b=new jt({color:"#a4aaa4"}),w=new jt({color:"#496877"}),S=new jt({color:"#8f4b3a"}),E=n.map(ct=>e(...ct)),T=Math.max(...E),C=Math.min(...E)-.25;bn(M,n,C,T+2.9-C,y),bn(M,n,T+2.9,3.6,x),bn(M,n,T+6.5,.35,b);const D=7.8,P=f-.85,R=P-D,I=h*.34,N=I+D,O=v(R,P,I,N),G=T+15.2;bn(M,O,T+6.8,G-T-6.8,x),bn(M,O,G,.22,b);const V=-Math.atan2(d,p),$=-Math.atan2(m,_),tt=(ct,H,K,pt)=>Array.from({length:ct},(bt,W)=>{const[ht,dt]=pt((W+.5)/ct);return[ht,H,dt,K]});bs(M,tt(11,T+4.75,V,ct=>g(1.3+ct*(f-2.6),-.04)),w,2.22,2.55),bs(M,tt(8,T+1.48,V,ct=>g(1.5+ct*(f-3),-.04)),w,1.65,1.34);const Mt=[];for(const ct of[8.35,10.95,13.55]){const H=T+ct;Mt.push(...tt(3,H,V,K=>g(R+K*D,I-.04))),Mt.push(...tt(3,H,$,K=>g(P+.04,I+K*D)))}bs(M,Mt,w,1.37,1.43);const[j,St]=g(P-2.8,I+2.4),lt=new se(new dn(.055,.105,3.2,6),S);return lt.position.set(j,G+1.82,St),M.add(lt),i.add(M),!0}const Px=[[65,151],[133,120],[143,98],[312,94],[327,41],[410,46],[451,73],[504,67],[540,44],[733,53],[724,326],[1170,410],[1591,455],[1591,738],[40,687]],Lx=[{points:[[94,145],[93,228],[89,353]],width:.65,height:.38},{points:[[142,122],[197,119],[277,117],[320,120],[331,188]],width:.65,height:.32},{points:[[197,119],[201,187],[137,192]],width:.73,height:.31},{points:[[273,119],[279,182],[206,187]],width:.7,height:.33},{points:[[287,122],[291,181],[328,178]],width:.66,height:.3},{points:[[334,91],[338,130],[345,187],[405,175],[403,130],[338,136]],width:.68,height:.35},{points:[[447,84],[486,87],[492,170],[445,173]],width:.69,height:.31},{points:[[500,85],[530,86],[534,161],[500,166]],width:.63,height:.27},{points:[[540,62],[535,107],[537,170]],width:.68,height:.38},{points:[[137,228],[204,222],[275,225],[351,227],[360,279],[300,282],[228,289],[140,279],[137,228]],width:.68,height:.27},{points:[[218,229],[214,277],[230,291],[224,354],[137,344]],width:.69,height:.31},{points:[[181,231],[178,277],[187,291],[181,315],[139,313]],width:.56,height:.25},{points:[[191,314],[187,348]],width:.57,height:.24},{points:[[307,229],[310,257],[278,261]],width:.57,height:.23},{points:[[319,231],[319,276],[352,273]],width:.64,height:.29},{points:[[360,285],[367,348],[366,387]],width:.65,height:.4},{points:[[363,278],[426,272],[427,218]],width:.73,height:.32},{points:[[413,209],[500,205],[570,200],[646,197]],width:.68,height:.31},{points:[[429,270],[504,270],[502,206]],width:.72,height:.29},{points:[[506,271],[510,270]],width:.72,height:.35},{points:[[528,268],[567,262],[627,258]],width:.72,height:.35},{points:[[645,256],[647,203]],width:.72,height:.35},{points:[[560,207],[567,261]],width:.61,height:.28},{points:[[678,178],[681,346],[634,347]],width:.62,height:.41},{points:[[468,349],[467,319],[474,305],[489,302],[602,300],[618,307],[623,330]],width:.66,height:.3},{points:[[382,355],[417,353],[414,398],[388,397]],width:.66,height:.37},{points:[[416,401],[526,426],[531,407],[539,369],[569,375]],width:.75,height:.37},{points:[[569,376],[568,425],[539,422]],width:.68,height:.36},{points:[[578,380],[578,423],[616,430],[620,380]],width:.68,height:.37},{points:[[630,379],[629,433],[682,441],[679,378]],width:.72,height:.36},{points:[[98,445],[190,455],[177,553],[91,539]],width:.81,height:.38},{points:[[209,457],[316,474],[305,552],[202,537],[209,457]],width:.85,height:.42},{points:[[245,474],[237,509],[226,539]],width:.75,height:.4},{points:[[386,490],[429,501],[515,513],[566,520],[622,532]],width:.73,height:.29},{points:[[430,503],[430,551],[389,544]],width:.74,height:.36},{points:[[516,515],[515,559],[431,549]],width:.78,height:.33},{points:[[564,524],[557,587],[515,579],[517,557]],width:.76,height:.38},{points:[[622,531],[615,590],[566,583]],width:.76,height:.39},{points:[[653,536],[708,549],[699,609]],width:.74,height:.34},{points:[[769,385],[806,387],[823,390],[866,388],[875,384]],width:.52,height:.48},{points:[[768,384],[768,425],[766,447]],width:.5,height:.52},{points:[[747,444],[769,449],[813,457],[870,467],[913,473],[953,478],[1006,483]],width:.62,height:.6},{points:[[818,395],[817,426],[814,456]],width:.52,height:.51},{points:[[874,379],[874,415]],width:.47,height:.42},{points:[[870,451],[870,466]],width:.46,height:.46},{points:[[918,390],[917,419]],width:.5,height:.49},{points:[[914,437],[912,473]],width:.55,height:.54},{points:[[959,393],[961,413],[957,428]],width:.49,height:.46},{points:[[955,442],[952,478]],width:.55,height:.54},{points:[[961,416],[994,421],[1016,426]],width:.39,height:.36},{points:[[1016,427],[1012,444],[1007,482]],width:.54,height:.56},{points:[[1070,501],[1079,447],[1085,435],[1104,438]],width:.61,height:.61},{points:[[1138,441],[1169,449]],width:.44,height:.41},{points:[[1170,435],[1169,471],[1168,505],[1111,502],[1071,500]],width:.65,height:.62},{points:[[1122,459],[1114,487],[1111,502]],width:.51,height:.48},{points:[[765,620],[770,577],[844,591],[840,619]],width:.53,height:.53},{points:[[900,645],[903,598],[948,608],[996,618],[1024,616]],width:.55,height:.49},{points:[[950,608],[945,653],[901,647]],width:.52,height:.54},{points:[[999,619],[990,664],[983,688]],width:.52,height:.55},{points:[[944,654],[939,690]],width:.49,height:.44},{points:[[1049,621],[1094,620],[1133,627]],width:.44,height:.38},{points:[[1132,628],[1127,665]],width:.44,height:.42},{points:[[1230,470],[1293,471],[1292,517],[1290,550],[1234,551],[1230,470]],width:.7,height:.87},{points:[[1233,519],[1292,518]],width:.66,height:.72},{points:[[1352,482],[1369,478],[1404,479],[1418,480],[1417,492],[1385,493],[1383,509]],width:.57,height:.48},{points:[[1338,691],[1339,668],[1397,669]],width:.59,height:.55},{points:[[1336,722],[1398,721],[1454,722],[1512,724],[1575,726],[1575,652],[1512,653],[1455,654],[1400,652],[1398,721]],width:.72,height:.69},{points:[[1455,654],[1454,722]],width:.67,height:.62},{points:[[1512,653],[1512,724]],width:.65,height:.6}],Dx=[{polygon:[[144,129],[193,124],[198,177],[142,181]],depth:.78},{polygon:[[205,126],[269,124],[274,169],[210,177]],depth:.74},{polygon:[[287,128],[317,127],[322,171],[290,176]],depth:.7},{polygon:[[346,136],[398,131],[402,169],[347,177]],depth:.83},{polygon:[[452,90],[483,89],[487,158],[450,166]],depth:.78},{polygon:[[502,97],[526,99],[527,153],[500,159]],depth:.64},{polygon:[[146,235],[214,231],[211,274],[143,269]],depth:.88},{polygon:[[279,234],[304,234],[308,253],[278,257]],depth:.57},{polygon:[[319,237],[345,234],[348,269],[320,269]],depth:.75},{polygon:[[145,287],[183,288],[180,311],[141,310]],depth:.62},{polygon:[[142,319],[181,319],[181,342],[137,340]],depth:.58},{polygon:[[190,292],[227,298],[222,350],[189,345]],depth:.77},{polygon:[[505,209],[558,205],[566,260],[526,265],[528,298],[514,298],[512,267]],depth:1.05},{polygon:[[566,205],[641,199],[644,252],[642,252],[642,283],[630,283],[629,254],[571,260]],depth:1.15},{polygon:[[389,358],[414,354],[411,396],[388,393]],depth:.64},{polygon:[[541,370],[567,377],[565,423],[535,420]],depth:.8},{polygon:[[580,378],[617,379],[613,425],[579,422]],depth:.82},{polygon:[[633,378],[676,379],[680,435],[630,426]],depth:1},{polygon:[[98,450],[183,462],[173,541],[92,533]],depth:.92},{polygon:[[213,463],[244,468],[227,535],[207,535]],depth:.9},{polygon:[[248,473],[311,478],[304,549],[236,539]],depth:.91},{polygon:[[388,494],[427,502],[427,541],[389,537]],depth:.74},{polygon:[[434,506],[514,516],[510,552],[433,545]],depth:.87},{polygon:[[521,518],[562,526],[556,576],[516,572]],depth:.94},{polygon:[[566,527],[619,535],[612,581],[561,575]],depth:.99},{polygon:[[656,541],[704,553],[693,603],[646,592]],depth:.83},{polygon:[[773,582],[839,595],[836,620],[771,612]],depth:.84},{polygon:[[906,602],[946,611],[943,645],[903,637]],depth:.64},{polygon:[[952,612],[994,621],[986,665],[951,654]],depth:.58},{polygon:[[1235,475],[1288,476],[1288,515],[1237,516]],depth:.72},{polygon:[[1238,524],[1287,523],[1286,546],[1239,547]],depth:.64},{polygon:[[1404,657],[1450,658],[1449,718],[1403,717]],depth:.54},{polygon:[[1459,658],[1507,657],[1507,719],[1459,717]],depth:.59},{polygon:[[1517,658],[1570,657],[1570,721],[1517,719]],depth:.55}],Ix=[{point:[256,273],radius:.7,depth:.51},{point:[412,299],radius:.53,depth:.46},{point:[496,316],radius:.58,depth:.48},{point:[456,365],radius:.73,depth:.58},{point:[516,422],radius:.67,depth:.46},{point:[644,329],radius:.7,depth:.55},{point:[592,393],radius:.56,depth:.37},{point:[553,441],radius:.63,depth:.44},{point:[377,498],radius:.56,depth:.44},{point:[755,405],radius:.74,depth:.75},{point:[962,706],radius:.7,depth:.75},{point:[1260,494],radius:.5,depth:.65}],Ux=[{name:"Широкая улица",polygon:[[96,365],[162,362],[217,365],[309,385],[362,398],[414,412],[418,485],[386,486],[308,470],[209,456],[94,443]]},{name:"Широкая улица",polygon:[[1194,609],[1258,608],[1344,612],[1438,614],[1516,615],[1574,612],[1573,647],[1510,651],[1437,652],[1350,651],[1258,648],[1200,647]]},{name:"Северная улица",polygon:[[119,193],[207,191],[287,188],[344,184],[433,176],[527,171],[671,174],[671,194],[524,201],[428,211],[347,219],[273,224],[197,227],[118,228]]},{name:"Поперечная улица",polygon:[[99,159],[125,164],[123,215],[124,280],[121,335],[128,366],[111,388],[93,367],[97,311],[96,250]]}],Nx=[{from:[521,298],to:[519,264],width:1.15,steps:7},{from:[636,283],to:[635,252],width:1,steps:7}],Ui={outline:Px,walls:Lx,cellars:Dx,wells:Ix,streets:Ux,stairs:Nx},bu="652417590";function Xn([i,t]){return[.0863102257*i-214318e-9*t-361.5408919,214318e-9*i+.0863102257*t+21.5871871]}const Ms=Ui.outline.map(Xn);function to([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function yd(i,t,e){const n=i(-310,65)-1.41-.006*(t+355)+.008*(e-60);return Math.min(n,i(t,e)-.43)}const ts=["#b7a58b","#c1b199","#ad9e88","#a9977e","#c8baa0","#a4947b"],wu=["#c9b998","#b9aa8e","#c2b497","#b2a389","#d0bfa4"],Fx=new Yt("#a09472"),Ox=new Yt("#97976b"),Bx=new Yt("#94846b"),zx=new Yt("#62584a"),kx=new Yt("#a99a7e");function jn(i){const t=Math.sin(i*127.1+3.83)*43758.5453;return t-Math.floor(t)}function jl(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=(i[1]-t[1])*e/(2*n),o=(t[0]-i[0])*e/(2*n);return[[i[0]+s,i[1]+o],[t[0]+s,t[1]+o],[t[0]-s,t[1]-o],[i[0]-s,i[1]-o]]}const Rn=([i,t],e)=>[i,e(i,t),t];function bd(i,t,e,n,s,o){i.face(o,Rn(t,n),Rn(e,n),Rn(e,s),Rn(t,s))}function Wo(i,t,e,n,s,o=.65){for(let r=0;r<t.length;r++){const a=t[r],l=t[(r+1)%t.length],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/o);for(let u=0;u<c;u++){const f=_t(a,l,u/c),h=_t(a,l,(u+1)/c);bd(i,f,h,e,n,s(u+r*97))}}}function Hx(i,t,e,n,s,o,r,a){const l=Math.hypot(e[0]-t[0],e[1]-t[1]);if(l<.12)return;const c=(p,d)=>o(p,d)-r-.03,u=(p,d)=>o(p,d)+s,f=jl(t,e,n*.93);Wo(i,f,c,u,()=>"#897862",1.2),i.face("#8c7b66",...f.map(p=>Rn(p,(d,_)=>u(d,_)-.028)));const h=Math.max(1,Math.round((s+r)/.31));for(let p=0;p<h;p++){const d=.66+jn(a+p)*.24;for(let _=-(p%2)*d*.52,m=0;_<l;_+=d,m++){const g=(Math.max(0,_)+.018)/l,v=(Math.min(_+d,l)-.018)/l;if(v<=g)continue;const M=a*101+p*31+m*7,x=jl(_t(t,e,g),_t(t,e,v),n*(.965+jn(M)*.09)),y=x.map(T=>_t(T,_t(x[0],x[2],.5),.06)),b=(s+r)/h,w=(T,C)=>o(T,C)-r+b*p+.012,S=(T,C)=>o(T,C)-r+b*(p+1)-.014+jn(M+1)*.09,E=ts[Math.floor(jn(M+2)*ts.length)];for(let T=0;T<4;T++){const C=(T+1)%4;i.face(E,Rn(x[T],w),Rn(x[C],w),Rn(y[C],S),Rn(y[T],S))}i.face(E,...y.map(T=>Rn(T,S)))}}}function Gx(i,t,e,n,s){const o=t.map(([g])=>g),r=t.map(([,g])=>g),a=.61,l=.065,c=(g,v)=>[g*Math.cos(l)-v*Math.sin(l),g*Math.sin(l)+v*Math.cos(l)],[u,f]=t[0],h=(g,v)=>c(g,v).map((M,x)=>M+(x===0?u:f)),p=Math.floor((Math.min(...o)-u-3)/a),d=Math.ceil((Math.max(...o)-u+3)/a),_=Math.floor((Math.min(...r)-f-10)/a),m=Math.ceil((Math.max(...r)-f+10)/a);for(let g=_;g<m;g++)for(let v=p;v<d;v++){const M=n*4241+g*397+v;if(jn(M+9)>s)continue;const x=(v+g%2*.5)*a,y=g*a,b=[h(x+.03+jn(M)*.07,y+.033),h(x+.57,y+.027+jn(M+2)*.07),h(x+.572-jn(M+3)*.08,y+.574),h(x+.03,y+.572-jn(M+4)*.07)];if(!b.every(S=>to(S,t)))continue;const w=(S,E)=>e(S,E)+.042+jn(M+6)*.028;i.face(wu[Math.floor(jn(M+7)*wu.length)],...b.map(S=>Rn(S,w)))}}function Vx(i,t,e){const n=fe(i,"Раскоп Горгиппии · кладка и древние улицы",{surface:"stone"}),s=(c,u)=>yd(t,c,u),o=Ui.cellars.map(({polygon:c,depth:u})=>({ring:c.map(Xn),depth:u,holes:[]})),r=Ui.wells.map(({point:c,radius:u,depth:f})=>{const[h,p]=Xn(c),d=Array.from({length:12},(v,M)=>{const x=M*Math.PI/6;return[h+Math.cos(x)*u,p+Math.sin(x)*u]}),_=o.find(v=>d.every(M=>to(M,v.ring))),m=(v,M)=>s(v,M)-(_?.depth??0),g=_||d.every(v=>to(v,Ms))&&!o.some(v=>d.some(M=>to(M,v.ring))||v.ring.some(M=>to(M,d)));return _&&_.holes.push(d),{ring:d,rim:m,depth:f,cut:g,cellar:_,center:[h,p]}}),a=[...o.map(c=>c.ring),...r.filter(c=>c.cut&&!c.cellar).map(c=>c.ring)],l=new Yt;e([Ms,...a],s,(c,u,f)=>l.copy(Fx).lerp(Ox,ce.clamp(.51+.32*Math.sin(c*.15+f*.19)+.19*Math.sin(c*.43-f*.24),0,1))),Wo(n,Ms,s,(c,u)=>t(c,u)+.012,()=>"#a18f75");for(const{ring:c,depth:u,holes:f}of o){const h=(p,d)=>s(p,d)-u;e([c,...f],h,Bx),Wo(n,c,h,s,()=>"#89785f")}for(const{ring:c,rim:u,depth:f,cut:h,center:p}of r){const d=(m,g)=>u(m,g)-(h?f:-.028);h?e([c],d,zx):n.face("#5f5342",...c.map(m=>Rn(m,d))),Wo(n,c,d,(m,g)=>u(m,g)+.18,()=>"#80715e",2);const _=c.map(m=>_t(p,m,1.35));for(let m=0;m<c.length;m++){const g=(m+1)%c.length,v=(M,x)=>u(M,x)+.16+m%3*.021;bd(n,_[m],_[g],u,v,ts[m%ts.length]),n.face(ts[m%ts.length],...[c[m],_[m],_[g],c[g]].map(M=>Rn(M,v)))}}for(const[c,{polygon:u,density:f}]of Ui.streets.entries()){const h=u.map(Xn);e([h],(p,d)=>s(p,d)+.025,kx),Gx(n,h,s,c,f??.88)}for(const[c,{points:u,width:f,height:h}]of Ui.walls.entries()){const p=u.map(Xn);for(let d=1;d<p.length;d++){const _=p[d-1],m=p[d],g=_t(_,m,.5),v=o.reduce((M,{ring:x,depth:y})=>Math.max(M,x.some((b,w)=>{const S=x[(w+1)%x.length],E=S[0]-b[0],T=S[1]-b[1],C=ce.clamp(((g[0]-b[0])*E+(g[1]-b[1])*T)/(E*E+T*T),0,1);return Math.hypot(g[0]-b[0]-C*E,g[1]-b[1]-C*T)<f*.63})?y:0),0);Hx(n,_,m,f,h,s,v,c*41+d)}}for(const{from:c,to:u,width:f,steps:h}of Ui.stairs){const p=Xn(c),d=Xn(u),_=o.find(m=>to(d,m.ring))?.depth??.85;for(let m=0;m<h;m++){const g=jl(_t(p,d,m/h),_t(p,d,(m+1)/h),f),v=(x,y)=>s(x,y)-_,M=(x,y)=>v(x,y)+_*(1-m/h);n.face(ts[m%ts.length],...g.map(x=>Rn(x,M))),Wo(n,g,v,M,()=>"#9a8a71",2)}}n.finish()}const es=i=>i.map(Xn),Wx=[[126,399],[220,407],[350,432],[460,455],[536,471],[610,478],[712,485],[779,478],[865,499],[955,516],[1060,538],[1168,556]],Eu=[[748,295],[742,323],[729,352],[716,405],[712,462],[710,481]],Tu=[0,0,.16,.67,1,1],Xx={position:Xn([707,480]),look:Xn([405,447]),pitch:-.19},Oi=[[-384.79,10.65],[-282.12,15.99],[-217.83,18.81],[-218.47,61.07],[-219.18,90.59],[-393.18,81.88],[-384.79,10.65]],Bi=Math.atan2(2.82,64.29);function wd(i){const[t,e]=Oi[1];return i(t+1.44*Math.sin(Bi),e-1.44*Math.cos(Bi))}function Mc([i,t]){return i===-282.12&&t===15.99?2.62:i===-218.47&&t===61.07?1.45:0}const qx=[{name:"Дорожка у лапидария",points:[[-332,24],[-322,25],[-312,26],[-303,27.3],[-295,28.1]],widths:[2.45,2.7,2.7,2.6,2.6],surface:"paving",railSide:1},{name:"Подход от входной арки",points:[[-282.12,14],[-282.12,18],[-283.15,21.1],[-288.4,25.8],[-295,28.1]],widths:[2.5,2.5,2.7,2.6,2.6],surface:"paving"},{name:"Дорожка от площадки музея",points:[[-295,28.1],[-294.5,33.9],[-295.2,40.9],Xn(Eu[0])],widths:[2.6,2.8,2.9,2.6],surface:"paving"},{name:"Дорожка вдоль южного борта",points:[...es([[65,710],[475,724],[1030,743],[1560,759]]),[-221.6,87.8],[-221.1,63.1]],widths:[1.5,1.65,1.75,1.7,1.65,1.6],surface:"paving",railSide:-1},{name:"Подход к восточной калитке",points:[[-221.1,63.1],[-220.9,61.07],[-216.4,61.07]],widths:[1.6,1.6,1.55],surface:"paving"},{name:"Спуск к раскопу",points:es(Eu),widths:[2.6,2.5,1.35,1.25,1.25,1.7],surface:"ramp",rails:[2,3]},{name:"Проход между подвалами",points:es(Wx),widths:[3.8,4,4.1,3.9,3.8,3.4,3.5,4.1,4.3,4.2,4.2,3.5],surface:"earth"},{name:"Выход с западных лестниц",points:es([[129,368],[128,386],[126,399]]),widths:[1.5,1.8,2],surface:"earth"},...[368,401].flatMap(i=>[{name:"Западная площадка",points:es([[43,i],[90,i]]),widths:[1.5,1.43],surface:"landing"},{name:"Западная лестница",points:es([[90,i],[129,i]]),widths:[1.43,1.43],surface:"steps"}])],{clamp:Yx,lerp:_a}=ce,Zx=new Yt("#c7bda5"),Au=new Yt("#c1b9a6"),$x=new Yt("#a59b76"),xa="#aa987f",Ol="#52534c",Bo=9;function Er(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=Math.hypot(e,n);return{a:i,b:t,dx:e,dz:n,length:s,nx:-n/s,nz:e/s}}function Ru(i,t){return i.points.map(([e,n],s)=>{const o=i.edges[Math.max(0,s-1)],r=i.edges[Math.min(i.edges.length-1,s)],a=Math.hypot(o.nx+r.nx,o.nz+r.nz),l=(o.nx+r.nx)/a,c=(o.nz+r.nz)/a,u=t*i.widths[s]/(2*Math.max(.66,l*r.nx+c*r.nz));return[e+l*u,n+c*u]})}function Cu(i,t,e){return i.rails?.includes(t)||i.railSide===e}function Xo(i,t,{a:e,dx:n,dz:s,length:o}){const r=((i-e[0])*n+(t-e[1])*s)/(o*o),a=Yx(r,0,1);return{raw:r,t:a,distance:Math.hypot(i-e[0]-n*a,t-e[1]-s*a)}}function Kx(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}const Jx=Oi.slice(1).map((i,t)=>{const e=Oi[t],{length:n}=Er(e,i);return Er(_t(e,i,Mc(e)/n),_t(e,i,1-Mc(i)/n))}),Qx=Ui.cellars.map(({polygon:i})=>es(i)),jx=Ui.walls.flatMap(({points:i,width:t})=>{const e=es(i);return e.slice(1).map((n,s)=>({...Er(e[s],n),width:t}))}),tv=Ui.wells.map(({point:i,radius:t})=>({point:Xn(i),radius:t}));function ev(i,t){return tv.some(({point:[e,n],radius:s})=>Math.hypot(i-e,t-n)<s*1.35+.18)||jx.some(e=>Xo(i,t,e).distance<e.width/2+.18)||Qx.some(e=>Kx(i,t,e))}function nv(i,t,e){const[n,s]=Oi[1],o=(t-n)*Math.cos(Bi)+(e-s)*Math.sin(Bi),r=(e-s)*Math.cos(Bi)-(t-n)*Math.sin(Bi);if(Math.abs(o)>2.22||r<-1.44||r>.46)return;const a=r<-1.02?.135:r<-.6?.27:.405;return wd(i)+a}function iv(i){const t=(f,h)=>yd(i,f,h),e=qx.map(f=>({...f,edges:f.points.slice(1).map((h,p)=>Er(f.points[p],h))})).map(f=>({...f,left:Ru(f,-1),right:Ru(f,1)})),n=e.filter(f=>f.surface==="earth"),s=e.filter(f=>f.surface==="paving"),o=e.filter(f=>["steps","landing","ramp"].includes(f.surface)),r=e.flatMap(f=>[[-1,f.left],[1,f.right]].flatMap(([h,p])=>p.slice(1).flatMap((d,_)=>Cu(f,_,h)?[Er(p[_],d)]:[])));function a(f,h,p,d,_){if(f==="earth")return t(d,_)+.055;if(f==="paving"||f==="landing")return i(d,_)+.054;const m=t(d,_)+.061,g=i(d,_)+.054;return f==="steps"?_a(g,m,Math.min(1,Math.floor(p*Bo)/(Bo-1))):_a(g,m,_a(Tu[h],Tu[h+1],p))}function l(f,h,p,d=0){let _;return f.edges.forEach((m,g)=>{const{raw:v,t:M,distance:x}=Xo(h,p,m);(f.surface==="steps"||f.surface==="landing")&&(v<-1e-5||v>1.00001)||x>_a(f.widths[g],f.widths[g+1],M)/2-d||x>=(_?.distance??1/0)||(_={distance:x,height:a(f.surface,g,M,h,p)})}),_?.height}function c(f,h,p){if(f<-397||f>-211||h<9||h>92)return;if(Jx.some(m=>Xo(f,h,m).distance<.24)||r.some(m=>Xo(f,h,m).distance<.15))return null;for(const m of o){const g=l(m,f,h,.12);if(g!==void 0)return g}if(p)return n.some(g=>l(g,f,h,.16)!==void 0)&&!ev(f,h)?t(f,h)+.055:null;const d=nv(i,f,h);return d!==void 0?d:s.some(m=>l(m,f,h)!==void 0)?i(f,h)+.054:void 0}function u(f,h){const p=fe(f,"Горгиппия · дорожки и ограждения для посетителей");for(const d of e){const{left:_,right:m}=d;for(const[g,v]of d.edges.entries()){if(d.surface==="earth"&&g<3)continue;const M=[_[g],_[g+1],m[g+1],m[g]],x=(y,b)=>a(d.surface,g,Xo(y,b,v).t,y,b);if(d.surface==="steps"){const y=(b,w)=>_t(b[g],b[g+1],w);for(let b=0;b<Bo;b++){const w=b/Bo,S=(b+1)/Bo,E=y(_,w),T=y(m,w),C=y(_,S),D=y(m,S),P=(O,G)=>a("steps",g,(w+S)/2,O,G),R=(O,G)=>a("steps",g,Math.max(0,w-.001),O,G);h([[E,C,D,T]],P,Au);const I=([O,G],V)=>[O,V(O,G),G];b&&p.face(xa,I(E,R),I(T,R),I(T,P),I(E,P));const N=(O,G)=>t(O,G)-.02;p.face(xa,I(E,P),I(C,P),I(C,N),I(E,N)),p.face(xa,I(T,P),I(D,P),I(D,N),I(T,N))}}else d.surface==="earth"?h([M],(y,b)=>t(y,b)+.012,$x):h([M],x,d.surface==="ramp"?Au:Zx);for(const[y,b]of[[-1,_],[1,m]]){const w=b[g],S=b[g+1],E=Math.hypot(S[0]-w[0],S[1]-w[1]),T=d.surface==="ramp"||d.surface==="landing",C=Cu(d,g,y);if(!C&&!T)continue;const D=Math.max(1,Math.ceil(E/(T?.62:1.75))),P=(R,I)=>{const[N,O]=_t(w,S,R);return[N,x(N,O)+I,O]};for(let R=0;R<D;R++){const I=R/D,N=(R+1)/D;if(T){const O=([G,V,$])=>[G,Math.min(V-.07,t(G,$)-.025),$];p.face(xa,P(I,0),P(N,0),O(P(N,0)),O(P(I,0)))}if(C){for(const O of[.38,.83])p.beam(P(I,O),P(N,O),.027,Ol);(!T||R%3===0)&&p.beam(P(I,0),P(I,.85),.047,Ol),R===D-1&&p.beam(P(N,0),P(N,.85),.047,Ol)}}}}}p.finish()}return{walkHeight:c,render:u}}const Sc="#dfd7c1",hn="#f0eee6",sv="#526e7c",xs="#343d3d";function Pa([i,t],e){const n=e/2;return[[i-n,t-n],[i+n,t-n],[i+n,t+n],[i-n,t+n]]}function ov([i,t],[e,n]){const s=Math.hypot(e-i,n-t),o=(e-i)/s,r=(n-t)/s;return(a,l)=>[i+o*a+r*l,t+r*a-o*l]}function rv(i,t,e){const n=ov(t[0],t[1]),o=(e.lowerWaterfront??e)(...n(9,27))+.65,r=Math.min(...t.map(lt=>e(...lt)))-.2,a=Ie(t),l="#7295bf",c="#415f88",u="#636b71",f="#b8bdba",h=fe(i,"Пароходъ",{surfaces:{metal:[l,f,c],paving:[u],stone:[Sc],glass:["#40484a","#4b5256"]}});h.shell(t,Math.min(r,o-.2),o+.25,Sc);const p=t.map(lt=>_t(a,lt,.83));h.shell(p,o+.25,o+2.85,"#40484a",null),h.shell(t,o+2.85,o+3.08,hn,u);for(let lt=2;lt<=13;lt++){const ct=t[lt],H=t[lt+1];Pn(h,p[lt],p[lt+1],a,o+.52,o+2.76,2.15,"#d9dbd6");const K=Math.max(1,Math.round(Math.hypot(ct[0]-H[0],ct[1]-H[1])/2.5));for(let pt=0;pt<K;pt++){const bt=_t(a,_t(ct,H,pt/K),.97);h.shell(Pa(bt,.28),o+.25,o+2.85,hn,null)}}const d=[n(28.3,24),n(31,16.2)],_=e(...d[0])+.025,m=o+3.08,g=[n(27.2,15.4),n(31.95,15.4),n(31.95,17),n(27.2,17)];h.shell(g,m-.14,m,f,u);const v=[.89,.31],M=(lt,ct)=>{const H=_t([28.3,24],[31,16.2],lt);return n(H[0]+v[0]*ct,H[1]+v[1]*ct)},x=19;for(let lt=0;lt<x;lt++){const ct=lt/x,H=(lt+1)/x,K=ce.lerp(_,m,H);h.shell([M(ct,-1),M(H,-1),M(H,1),M(ct,1)],K-.09,K,f,u)}for(const lt of[-1,1]){const ct=(H,K)=>{const[pt,bt]=M(H,lt);return[pt,ce.lerp(_,m,H)+K,bt]};h.beam(ct(0,.98),ct(1,.98),.07,hn),h.beam(ct(0,.51),ct(1,.51),.045,f);for(const H of[.03,.22,.42,.62,.82,1])h.beam(ct(H,.1),ct(H,.98),.055,hn)}const y=[[-16,7.5,15],[-10,4,17],[-2,2.1,17.7],[24,1.7,18.1],[30,1.7,13.2],[34,5.8,9]],b=y.map(([lt,,ct])=>n(lt,ct)),S=y.map(([lt,ct])=>n(lt,ct)).concat(b.slice().reverse());h.shell(S,o+3.08,o+6.5,hn,null);const E=Ie(S);for(let lt=1;lt<b.length;lt++)Pn(h,b[lt-1],b[lt],E,o+3.4,o+6.24,1.85);const T=o+6.52,C=o+7.72;function D([lt,ct,H]){return[[...n(lt,ct),T],[...n(lt,ct+(H-ct)*.46),C],[...n(lt,H),T]].map(([K,pt,bt])=>[K,bt,pt])}let P=0;for(let lt=1;lt<y.length;lt++){const ct=D(y[lt-1]),H=D(y[lt]),K=Math.max(1,Math.round((y[lt][0]-y[lt-1][0])/2));for(let pt=0;pt<K;pt++){const bt=ct.map((dt,Y)=>_t(dt,H[Y],pt/K)),W=ct.map((dt,Y)=>_t(dt,H[Y],(pt+1)/K)),ht=P++%2===0?l:hn;h.face(ht,bt[0],W[0],W[1],bt[1]),h.face(ht,bt[1],W[1],W[2],bt[2])}}h.face(hn,...D(y[0])),h.face(hn,...D(y.at(-1)));const R=n(13,14.8),I=t.slice(4,10).map(lt=>_t(R,lt,.95)),N=[R,...I];h.shell(N,o+3.08,o+3.42,hn),h.shell(N,o+3.42,o+4.92,"#4b5256",null),P=0,I.slice(1).forEach((lt,ct)=>{const H=I[ct];Pn(h,H,lt,R,o+3.57,o+4.83,1.65,f);const K=_t(R,H,1.011),pt=_t(R,lt,1.011);h.wall(K,pt,o+3.65,o+4.12,"#79444e");for(const W of[3.48,3.71,4.24])h.beam([K[0],o+W,K[1]],[pt[0],o+W,pt[1]],.052,hn);const bt=Math.max(2,Math.round(Math.hypot(lt[0]-H[0],lt[1]-H[1])/1.25));for(let W=0;W<bt;W++){const ht=_t(H,lt,W/bt),dt=_t(H,lt,(W+1)/bt);h.face(P++%2===0?l:hn,[ht[0],o+4.96,ht[1]],[dt[0],o+4.96,dt[1]],[R[0],o+5.85,R[1]])}});const O=t.slice(9,17).map(lt=>_t(n(-9.5,24),lt,.94)),G=Ie(O);h.shell(O,o+3.08,o+6.75,hn,u);const V=O.map(lt=>_t(G,lt,1.024));h.shell(V,o+4.38,o+5.1,c,null),h.shell(O.map(lt=>_t(G,lt,1.026)),o+6.75,o+6.94,c,u),O.slice(1).forEach((lt,ct)=>{Pn(h,O[ct],lt,G,o+3.45,o+4.38,1.4),Pn(h,O[ct],lt,G,o+5.16,o+6.1,1.55)});const[$,tt]=V.slice(1,3),Mt=Math.hypot(tt[0]-$[0],tt[1]-$[1]),j=[($[1]-tt[1])/Mt,(tt[0]-$[0])/Mt],St=_t($,tt,.48);Ae(i,{text:"ПАРОХОДЪ",position:[St[0]+j[0]*.055,o+4.75,St[1]+j[1]*.055],size:[6.6,.69],outward:j,color:hn,background:c,lighting:"backlit",glowColor:"#d4e9ff"}),h.finish()}function av(i,t,e,n){const s="PARK-HOTEL",o=[1.45,1.67,1.52,1.52,1.08,1.56,1.68,1.51,1.39,1.36],r=.42,a=e.slice(0,8).reverse(),l=a.slice(1).map((f,h)=>{const p=a[h],d=Math.hypot(f[0]-p[0],f[1]-p[1]);return{a:p,b:f,length:d,outward:[(p[1]-f[1])/d,(f[0]-p[0])/d]}}),c=o.reduce((f,h)=>f+h,0)+r*(s.length-1);let u=(l.reduce((f,h)=>f+h.length,0)-c)/2;for(const[f,h]of[...s].entries()){const p=o[f];let d=u+p/2;for(const{a:_,b:m,length:g,outward:v}of l){if(d>g){d-=g;continue}const[M,x]=_t(_,m,d/g),[y,b]=v;t.beam([M-y*.06,n+.43,x-b*.06],[M-y*.06,n+.89,x-b*.06],.075,xs),Ae(i,{text:h,position:[M+y*.07,n+1.13,x+b*.07],size:[p,1.8],outward:v,color:"#e7cc87",weight:850,lighting:"neon",glowColor:"#ff5540",spill:f===5});break}u+=p+r}}function cv(i,t,e){const n=Math.min(...t.map(d=>e(...d)))+.06,s=n-.36,o=Ie(t),r="#99655f",a="#d6c9b8",l="#6f6460",c=fe(i,"Парк-отель Анапа",{surfaces:{flatRoof:[l],stone:[a]}}),u=n+2.85,f=2.91;c.shell(t,s,u,a,null);for(let d=0;d<t.length;d++){const _=t[d],m=t[(d+1)%t.length],[g,v]=_t(_,m,.5);v<o[1]-2&&e(g,v)<n+.8&&Pn(c,_,m,o,n+.46,u-.35,2.1,a)}for(let d=0;d<4;d++){const _=u+d*f;c.shell(t,_,_+f,Sc,null);for(let m=0;m<t.length;m++){const g=t[m],v=t[(m+1)%t.length],[M,x]=_t(g,v,.5);if(Math.hypot(v[0]-g[0],v[1]-g[1])<1.2)continue;const y=M<o[0]-6||d===3?r:a;c.wall(_t(o,g,1.003),_t(o,v,1.003),_+.05,_+.86,y),(x<o[1]+14||m%2===0)&&Pn(c,g,v,o,_+.9,_+2.64,1.43,y===r?"#d8bfb0":"#eee8db")}}const h=u+4*f;c.shell(t,h,h+.48,r,l);const p=t.filter(([d,_])=>d<o[0]-11&&_>o[1]-1);if(p.length>=4){const d=p.map(_=>_t(Ie(p),_,.68));c.shell(d,h+.48,h+1.68,r,l)}av(i,c,t,h),c.finish()}function lv(i,t,e){const n=t.rings[0],s=t.id==="223949001",o=Ie(n),r=s?e(...o):e(-263.52,25.47),a=Math.min(...n.map(M=>e(...M)))-.25,l="#e5dfcd",c=s?"#94877d":"#ad5d51",u=fe(i,"Музей Горгиппия",{surfaces:{roof:[c],glass:["#556161"],stone:["#a69a82"]}}),f=r+4.25,h=t.id==="142489024"||s?[n[0],n[1],n[3],n[4]]:n.slice(0,4);Math.hypot(h[1][0]-h[0][0],h[1][1]-h[0][1])>Math.hypot(h[2][0]-h[1][0],h[2][1]-h[1][1])&&h.push(h.shift()),u.shell(n,Math.min(a,r),r+.5,"#a69a82",null),u.shell(n,r+.5,f,l,null);const p=_t(h[0],h[1],.5),d=_t(h[2],h[3],.5),_=[_t(p,d,.23),_t(p,d,.77)].map(([M,x])=>[M,f+(s?1.65:2.25),x]),m=h.map(([M,x])=>[M,f,x]);u.face(c,m[0],m[1],_[0]),u.face(c,m[1],m[2],_[1],_[0]),u.face(c,m[2],m[3],_[1]),u.face(c,m[3],m[0],_[0],_[1]);const g=s?[n[0],n[1]]:[n[4],n[0]],v=s?6:4;for(let M=0;M<v;M++){const x=_t(o,_t(g[0],g[1],(M+.32)/v),1.005),y=_t(o,_t(g[0],g[1],(M+.66)/v),1.005);u.wall(x,y,r+1.25,r+3.03,"#556161")}if(t.id==="142489024")for(const M of[.19,.81]){const x=n[0],y=n[1],b=Array.from({length:16},(w,S)=>{const E=S*Math.PI/8,[T,C]=_t(o,_t(x,y,M+.035*Math.cos(E)),1.006);return[T,r+2.5+.46*Math.sin(E),C]});u.face(sv,...b)}u.finish()}function hv(i,t,e){if(t.id==="170958806")rv(i,t.rings[0],e);else if(t.id==="1546378584")cv(i,t.rings[0],e);else if(["142489024","218983841","223949001"].includes(t.id))lv(i,t,e);else return!1;return!0}function uv(i,t){const e=fe(i,"Вход в Горгиппию"),[n,s]=Oi[1],o=t(n,s),r=Bi,a=(u,f,h=0)=>[n+Math.cos(r)*u-Math.sin(r)*h,o+f,s+Math.sin(r)*u+Math.cos(r)*h];for(let u=1;u<Oi.length;u++){const f=Oi[u-1],h=Oi[u],p=Math.hypot(h[0]-f[0],h[1]-f[1]),d=_t(f,h,Mc(f)/p),_=_t(f,h,1-Mc(h)/p),m=Math.hypot(_[0]-d[0],_[1]-d[1]),g=Math.ceil(m/2.6),v=(M,x)=>{const[y,b]=_t(d,_,M);return[y,t(y,b)+x,b]};for(let M=0;M<g;M++){const x=M/g,y=(M+1)/g;for(const[b,w,S]of[[.14,.23,"#b1a992"],[.37,.037,xs],[1.21,.043,xs]])e.beam(v(x,b),v(y,b),w,S);e.beam(v(x,.22),v(x,1.31),.068,xs);for(let b=1;b<=5;b++){const w=x+(y-x)*b/6;e.beam(v(w,.36),v(w,1.25),.024,xs)}}}for(const u of[-2.55,2.55]){const[f,,h]=a(u,0);e.shell(Pa([f,h],.63),o-.45,o+2.56,hn),e.shell(Pa([f,h],.83),o+2.56,o+2.72,Sc),e.shell(Pa([f,h],.88),o+2.72,o+3.48,hn);const p=Array.from({length:20},(d,_)=>{const m=_*Math.PI/10;return a(u+Math.cos(m)*.31,3.1+Math.sin(m)*.31,-.445)});e.face("#98694b",...p)}for(const u of[0,.27,.55]){const f=Array.from({length:11},(h,p)=>{const d=p/5-1;return a(d*2.17,2.8+u+(1-d*d)*.68)});f.slice(1).forEach((h,p)=>e.beam(f[p],h,.045,hn))}const l={Г:[[[0,0],[0,1],[1,1]]],О:[[[.22,0],[.78,0],[1,.18],[1,.82],[.78,1],[.22,1],[0,.82],[0,.18],[.22,0]]],Р:[[[0,0],[0,1],[.78,1],[1,.82],[1,.65],[.78,.49],[0,.49]]],И:[[[0,1],[0,0],[1,1],[1,0]]],П:[[[0,0],[0,1],[1,1],[1,0]]],Я:[[[1,0],[1,1],[.22,1],[0,.82],[0,.65],[.22,.49],[1,.49]],[[0,0],[.44,.49]]]};Array.from("ГОРГИППИЯ").forEach((u,f)=>{const h=(f-4)*.425,p=3.02+(1-(h/2.17)**2)*.68;for(const d of l[u]){const _=d.map(([m,g])=>a(-h-(m-.5)*.32,p+g*.43,-.045));_.slice(1).forEach((m,g)=>e.beam(_[g],m,.043,"#9e5345"))}});const c=wd(t);for(let u=0;u<3;u++){const f=-1.44+u*.42,h=[[-2.22,f],[2.22,f],[2.22,.46],[-2.22,.46]].map(([d,_])=>{const[m,,g]=a(d,0,_);return[m,g]}),p=u===0?c-.2:c+u*.135;e.shell(h,p,c+(u+1)*.135,"#c8b697")}for(const u of[-1,1]){for(let f=0;f<=6;f++){const h=u*(1.15+f*.16);e.beam(a(h,.26),a(h,1.78),.032,xs)}for(const f of[.32,1.7])e.beam(a(u*1.15,f),a(u*2.2,f),.046,xs)}e.finish()}function fv(i,t){uv(i,t)}const qo="#eeeee7",os="#f3f1e7",La="#294d6a",Ed="#496b83",Td={glass:[Ed,"#7694a3"],metal:[La,"#4d7494"],flatRoof:["#c2c7c2","#c7c8bf","#c6c8c4"],stone:["#c7bcab"]};function hr(i){return i.map(([t,e],n)=>{const[s,o]=i[(n+1)%i.length],r=Math.hypot(s-t,o-e);return{x:t,z:e,length:r,ux:(s-t)/r,uz:(o-e)/r}})}function qe(i,t,e=0){return[i.x+i.ux*t-i.uz*e,i.z+i.uz*t+i.ux*e]}function Pu(i,t){return i.map((e,n)=>{const s=(n+i.length-1)%i.length,o=i[s],r=qe(o,0,t[s]),a=qe(e,0,t[n]),l=o.ux*e.uz-o.uz*e.ux,c=((a[0]-r[0])*e.uz-(a[1]-r[1])*e.ux)/l;return[r[0]+o.ux*c,r[1]+o.uz*c]})}function t0(i,t,e,n,s){return[qe(i,t,n),qe(i,e,n),qe(i,e,s),qe(i,t,s)]}function Mo(i,t,e,n,s,o,r=Ed,a=.025){i.wall(qe(t,e,-a),qe(t,n,-a),s,o,r)}function dv(i,t,e,n){const s=n?Math.max(1,Math.round(t.length/4.15)):1,o=Math.min(n?2.38:.93,t.length/s*.69);for(let r=0;r<s;r++){const a=t.length*(r+.5)/s,l=e+(n?.37:1.02),c=e+2.37;Mo(i,t,a-o/2,a+o/2,l,c),n&&Mo(i,t,a-.038,a+.038,l,c,"#7694a3",.04)}}function pv(i,t,e){const[n,s]=qe(t,0,.055),[o,r]=qe(t,t.length,.055);i.beam([n,e+.26,s],[o,e+.26,r],.065,La),i.beam([n,e+1.08,s],[o,e+1.08,r],.075,La);const a=Math.ceil(t.length/.215);for(let l=0;l<a;l++){const c=t.length*(l+.5)/a;i.wall(qe(t,c-.016,.055),qe(t,c+.016,.055),e+.26,e+1.08,La)}}function mv(i,t,e,n,s){const o=n+.9,r=e.length*.2,a=e.length*.8,l=s(...qe(e,e.length/2,-2.9));for(let h=0;h<6;h++){const p=-2.9+h*.42,d=l+(o-l)*(h+1)/6;t.shell(t0(e,r,a,p,.04),Math.min(d-.05,l-.08),d,"#c7bcab")}t.shell(t0(e,r-.9,a+.9,-2.3,.04),n+3.24,n+3.56,os);const c=(r+a)/2;Mo(t,e,c-4.4,c+4.4,n+2.74,n+3.23,os,.055);const[u,f]=qe(e,c,-.082);Ae(i,{text:"анапа-океан",position:[u,n+2.99,f],size:[8.1,.62],outward:[e.uz,-e.ux],color:"#155d8a",weight:850,lighting:"backlit",glowColor:"#6ac8ff"})}function gv(i,t,e){const n=fe(i,"Анапа-Океан — 13 этажей",{surfaces:Td}),s=hr(t),o=new Set([0,1,3,4,5,6]),r=Pu(s,s.map((m,g)=>o.has(g)?1.5:.05)),a=hr(r),l=e(...qe(s[0],s[0].length/2)),c=Math.min(...t.map(m=>e(...m)))-.3,u=l+3.65,f=12,h=2.97,p=u+f*h;n.shell(t,c,u,qo,os);for(const m of s.slice(0,3)){const g=Math.max(2,Math.round(m.length/2.3));for(let v=0;v<g;v++){const M=m.length*(v+.055)/g,x=m.length*(v+.945)/g;Mo(n,m,M,x,l+.95,l+3.22)}}mv(i,n,s[0],l,e),n.shell(r,u,p,qo,"#c2c7c2");for(let m=0;m<f;m++){const g=u+h*m,v=m<f-1;v&&(n.shell(t,g,g+.22,os),n.flat(t,g,os));for(let M=0;M<s.length;M++){const x=o.has(M);dv(n,a[M],g,x),x&&v&&pv(n,s[M],g)}}const d=Pu(s,s.map(()=>.4)),_=hr(d);n.shell(d,p-.17,p+.45,qo,"#c7c8bf");for(const[m,g]of[[2,1.37],[7,1.05]]){const v=_[m];n.shell(t0(v,.7,v.length-.7,.02,2.1),p+.45,p+g,qo)}n.finish()}function _v(i,t,e){const n=fe(i,"Анапа-Океан — низкое крыло",{surfaces:Td}),s=[...t.slice(0,9),t[15]],o=t.slice(8),r=e(...Ie(s)),a=e(...Ie(o)),l=r+3.9,c=a+6.25,u="#4d7494";for(const[m,g,v]of[[s,r,l],[o,a,c]]){const M=Math.min(...m.map(y=>e(...y)))-.3;n.shell(m,M,v,qo,"#c6c8c4");const x=hr(m);for(const y of x){if(y.length<2.7)continue;const b=Math.max(1,Math.round(y.length/4.3));for(let w=0;w<b;w++){const S=y.length*(w+.17)/b,E=y.length*(w+.84)/b;Mo(n,y,S,E,g+.72,g+2.94),m===o&&Mo(n,y,S,E,g+3.55,v-.64)}}}const f=hr(s);for(const m of f.slice(0,6)){const g=qe(m,0,.15),v=qe(m,m.length,.15);n.wall(g,v,l+.14,l+.91,u),n.beam([g[0],l+.96,g[1]],[v[0],l+.96,v[1]],.055,os)}const h=f[3],[p,d]=qe(h,h.length/2,-1.55),_=e(p,d)+2.65;for(const m of[-1,1]){const[g,v]=qe(h,h.length/2+m*1.85,-1.47);n.beam([g,e(g,v),v],[g,_,v],.16,os),n.beam([g,_-.12,v],[p,_-.12,d],.095,os)}Ae(i,{text:"La Veranda",position:[p,_+.16,d],size:[3.6,.69],outward:[h.uz,-h.ux],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#faf3db",weight:600,lighting:"spot"}),n.finish()}function xv(i,t){const e=fe(i,"La Veranda — летняя веранда",{surfaces:{wood:["#ddd7c5","#b5a484"],ground:["#d3c7b3"],metal:["#706b5c"]}}),n=[-601,-29],s=[.855,-.519],o=[.519,.855],r=(d,_)=>[n[0]+s[0]*d+o[0]*_,n[1]+s[1]*d+o[1]*_],a=(d,_,m,g)=>[r(d,m),r(_,m),r(_,g),r(d,g)],l=[0,4.5,9].flatMap(d=>[0,3,6].map(_=>t(...r(d,_)))),c=Math.max(...l)+.06,u=c+3.1,f=(d,_,m,g,v,M)=>e.beam([d[0],m,d[1]],[_[0],g,_[1]],v,M);e.shell(a(0,9,0,6),Math.min(...l)-.12,c,"#bcb4a6","#ddd7c5"),e.shell(a(-.12,9.12,-.12,6.12),u,u+.16,"#e5e1d6","#f6f3e9");for(const d of[.15,3,6,8.85])for(const _ of[.15,5.85]){const m=r(d,_);f(m,m,c,u,.13,"#f5f2e8")}for(const d of[.15,5.85]){f(r(.15,d),r(8.85,d),c+.92,c+.92,.09,"#f5f2e8");for(let _=.15;_<8.5;_+=2.9)f(r(_,d),r(_+2.85,d),c+.18,c+.89,.055,"#f5f2e8"),f(r(_,d),r(_+2.85,d),c+.89,c+.18,.055,"#f5f2e8")}for(const d of[.3,2.8,3.2,5.8,6.2,8.7])e.wall(r(d,.2),r(d+.24,.2),c+.92,u-.05,"#eee9d9");for(const d of[1.5,4.5,7.5])for(const _ of[1.6,4.2]){e.shell(a(d-.47,d+.47,_-.36,_+.36),c+.73,c+.79,"#baa98d","#f5efe1");const m=r(d,_);f(m,m,c+.05,c+.73,.08,"#817462");for(const g of[-.78,.78])e.shell(a(d+g-.23,d+g+.23,_-.23,_+.23),c+.42,c+.5,"#a99779","#c2b198")}for(const d of[1.1,3.6,6.1,8.1])e.shell(a(d-.65,d+.65,-.32,.05),c+.02,c+.4,"#aa8d61","#5f844b"),e.shell(a(d-.57,d+.57,-.29,.02),c+.4,c+.55,"#718f54","#829c62");const[h,p]=r(4.5,-.13);Ae(i,{text:"La Veranda",position:[h,u+.55,p],size:[5.5,.9],outward:[-.519,-.855],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#f8f4e8",weight:600,lighting:"spot"}),e.finish()}function vv(i,t,e){if(t.id==="223949006")gv(i,t.rings[0],e);else if(t.id==="142489050")_v(i,t.rings[0],e),xv(i,e);else return!1;return!0}function Mv(i,t,e){const n="#d6d4cf",s="#b1b0ac",o="#556574",r="#eeeae2",a="#4b5156",l="#50333a",c=fe(i,"Анапский городской суд — Ленина, 6",{surfaces:{stone:[l],glass:[o],metal:[a],flatRoof:[s],paving:["#c5bdae"]},textures:{[n]:{path:"art/lenin-court-cladding.webp",size:[2.4,2.4],amount:.95}}}),u=t.map((b,w)=>{const S=t[(w+1)%t.length],E=Math.hypot(S[0]-b[0],S[1]-b[1]),T=(S[0]-b[0])/E,C=(S[1]-b[1])/E;return{a:b,length:E,ux:T,uz:C,point:(D,P=0)=>[b[0]+T*D+C*P,b[1]+C*D-T*P]}}),f=(b,w,S,E,T,C,D=.025)=>c.wall(b.point(w,D),b.point(S,D),E,T,C),h=(b,w,S,E,T)=>[b.point(w,E),b.point(S,E),b.point(S,T),b.point(w,T)],p=u[1],d=p.length/2,_=e(...p.point(d,1.8))+.03,m=_+.72,g=m+7.6,v=Math.min(...t.map(([b,w])=>e(b,w)),_)-.35;c.shell(t,v,m,"#8c8983",null),c.shell(t,m,g,n,null),c.shell(t,g,g+.22,r,s);for(const[b,w]of u.entries()){if(w.length<5)continue;const S=Math.max(1,Math.round(w.length/3.3));for(let E=0;E<S;E++){const T=w.length*(E+.5)/S;for(let C=0;C<2;C++){if(b===1&&C===0&&Math.abs(T-d)<2.3)continue;const D=m+.7+C*3.48;if(f(w,T-.66,T+.66,D,D+1.94,r,.03),f(w,T-.57,T+.57,D+.09,D+1.85,o,.045),f(w,T-.025,T+.025,D+.09,D+1.85,r,.057),C===0){for(let P=-2;P<=2;P++)f(w,T+P*.2-.012,T+P*.2+.012,D+.13,D+1.82,a,.073);for(const P of[D+.48,D+1.4])f(w,T-.54,T+.54,P,P+.025,a,.073)}}}}f(p,d-1.2,d+1.2,m,m+2.65,"#242d31",.055),f(p,d-.025,d+.025,m+.05,m+2.6,"#c1bfba",.07);for(let b=0;b<4;b++){const w=2-b*.43;c.shell(h(p,d-2.7,d+2.7,.08,w),_+b*.18-.05,_+(b+1)*.18,l)}c.shell(h(p,d-2.75,d+2.75,-.02,1.85),m+3.16,m+3.39,r);for(const b of[d-2.25,d+2.25]){const[w,S]=p.point(b,1.47),E=Array.from({length:16},(T,C)=>{const D=C*2*Math.PI/16;return[w+Math.cos(D)*.2,S+Math.sin(D)*.2]});c.shell(E,m,m+3.16,r)}const[M,x]=p.point(d,.085);Ae(i,{text:"АНАПСКИЙ ГОРОДСКОЙ СУД",position:[M,m+2.91,x],size:[2.5,.36],outward:[p.uz,-p.ux],color:"#f8e7c7",background:"#8b2926",weight:700,lighting:"unlit"});const y=(b,w)=>{const S=p.point(b,w);return[S[0],e(...S)+.12,S[1]]};for(let b=2;b<18;b+=1){const w=Math.min(b+1,18);c.face("#c5bdae",y(d-1.45,b),y(d+1.45,b),y(d+1.45,w),y(d-1.45,w))}c.finish()}function Sv(i,t,e){return t.id!=="142489077"?!1:(Mv(i,t.rings[0],e),!0)}function yv(i,t,e){const n="#eee5d0",s="#e2dac6",o="#526e7c",r="#394b51",a="#c9c3b5",l="#987a73",c="#d2c8b5",u=fe(i,"Бизнес-центр «Престиж»",{surfaces:{glass:[o,r],stone:[l],flatRoof:[a],metal:["#6e706d"],paving:[c]},textures:{[n]:{path:"art/lenin-prestige-cladding.webp",size:[3.2,2.4],amount:.95}}}),f=t.map((R,I)=>{const N=t[(I+1)%t.length],O=Math.hypot(N[0]-R[0],N[1]-R[1]),G=(N[0]-R[0])/O,V=(N[1]-R[1])/O;return{a:R,length:O,ux:G,uz:V,point:($,tt=0)=>[R[0]+G*$+V*tt,R[1]+V*$-G*tt]}}),h=f[5],p=f[4],d=h.length/2,_=d-2,m=e(...h.point(d,1.6))+.04,g=Math.min(m,...t.map(([R,I])=>e(R,I)))-.45,v=m+7.5;u.shell(t,g,m+.2,"#b2a99a",null),u.shell(t,m+.2,v,n,null),u.shell(t,v,v+.24,s,a);function M(R,I,N,O,G,V,$=.035){u.wall(R.point(I,$),R.point(N,$),O,G,V)}function x(R,I,N,O,G){return[R.point(I,O),R.point(N,O),R.point(N,G),R.point(I,G)]}for(const R of[h,p]){const I=Math.max(2,Math.round(R.length/2.6));for(let N=0;N<I;N++){const O=R.length*N/I+.07,G=R.length*(N+1)/I-.07;M(R,O,G,m+3.68,v-.44,o,.045),M(R,O,O+.055,m+3.68,v-.44,s,.06),(R!==h||Math.abs((O+G)/2-_)>2.8)&&M(R,O,G,m+.38,m+3.02,r,.045)}M(R,.15,R.length-.15,m+3.22,m+3.44,s,.07)}const y=Math.min(6,(h.length-1)/2);M(h,d-y,d+y,m+2.75,m+3.68,s,.075),M(h,_-2.55,_+2.55,m+.57,m+3.05,r,.07);for(const R of[-1.7,0,1.7])M(h,_+R-.028,_+R+.028,m+.57,m+3.02,s,.085);for(let R=0;R<3;R++){const I=2.2-R*.52;u.shell(x(h,_-3.1,_+3.1,.08,I),m-.04+R*.19,m+.15+R*.19,l)}const b=Math.ceil(h.length);for(let R=0;R<b;R++){const I=h.length*R/b,N=h.length*(R+1)/b;for(const[O,G]of[[.1,2.5],[2.5,5.3]]){const V=x(h,I,N,O,G);u.face(c,...V.map(([$,tt])=>[$,e($,tt)+.08,tt]))}}u.finish();const[w,S]=h.point(d,.09),E=[h.uz,-h.ux];Ae(i,{text:"БИЗНЕС ЦЕНТР ПРЕСТИЖ",position:[w,v+.43,S],size:[Math.min(17,h.length-1),.72],outward:E,color:"#a72b28",weight:700,lighting:"spot",glowColor:"#ffd8bb"});const[T,C]=h.point(d+.035,.083);Ae(i,{text:`АЛЛЕРГОЛОГИЯ
ИММУНОЛОГИЯ`,position:[T,m+3.19,C],size:[y*2,.95],outward:E,color:"#501d2c",weight:700,fontFamily:"Georgia, serif",lighting:"unlit"}),Ae(i,{text:`АЛЛЕРГОЛОГИЯ
ИММУНОЛОГИЯ`,position:[w,m+3.22,S],size:[y*2,.95],outward:E,color:"#922e44",weight:700,fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffdfce"});const[D,P]=h.point(d+7.5,.09);Ae(i,{text:"АПТЕКА",position:[D,m+2.88,P],size:[3.4,.58],outward:E,color:"#43427c",background:"#eee9dd",weight:700,lighting:"spot",glowColor:"#ddd9ff"})}function bv(i,t,e){return t.id!=="223535757"?!1:(yv(i,t.rings[0],e),!0)}function wv(i,t,e){const n=t.buildings.find(b=>b.id==="142489050");if(!n)return;const s=n.rings[0],o=s[13],r=s[14];if(!o||!r)return;const a=Math.hypot(r[0]-o[0],r[1]-o[1]),l=(r[0]-o[0])/a,c=(r[1]-o[1])/a,u=[c,-l],f=12.1,h=(b,w=.13)=>{const S=f*2-b;return[o[0]+l*S+u[0]*w,o[1]+c*S+u[1]*w]},p=e(...Ie(s.slice(8))),d=h(f-6.85,.2),_=fe(i,"Мацони — ул. Ленина, 3",{surfaces:{glass:["#202f30","#3d5150"],stone:["#262a29","#a59782"],wood:["#3d302c"],paving:["#b8b0a2","#b7ada0"]},textures:{"#bfc9b4":{path:"art/lenin-matsoni-mural.webp",repeat:!1,axes:{origin:[d[0],p+.31,d[1]],u:[-l/5.7,0,-c/5.7],v:[0,1/2.46,0]}}}}),m=(b,w,S,E,T,C=.13)=>_.wall(h(f+b,C),h(f+w,C),p+S,p+E,T);m(-7,7,.28,3.65,"#202f30"),m(-7,7,2.84,3.69,"#262a29",.16);for(const b of[-6.95,-1.1,.32,2.15,4.5,6.95])m(b-.055,b+.055,.28,2.84,"#262a29",.18);m(-1.02,.24,.32,2.72,"#202f30",.2),m(-.38,-.34,.86,1.66,"#a59782",.23),m(2.23,6.9,.3,1.03,"#e9e5d9",.19),m(2.23,6.9,1.05,2.76,"#3d5150",.19),m(4.49,4.54,1.05,2.76,"#262a29",.22),m(-6.85,-1.15,.31,2.77,"#bfc9b4",.2);const g=(b,w)=>{const[S,E]=h(f+b,w);return[S,e(S,E)+.15,E]};for(let b=-7;b<7;b+=1){const w=Math.min(b+1,7);for(let S=.3;S<9.3;S+=1){const E=Math.min(S+1,9.3);_.face("#b7ada0",g(b,S),g(w,S),g(w,E),g(b,E))}}const v=[h(f-1.12,.24),h(f+.34,.24),h(f+.34,1.25),h(f-1.12,1.25)],M=Math.max(...v.map(b=>e(...b)),p);_.shell(v,M-.12,M+.08,"#a59782"),_.finish();const[x,y]=h(f+1.5,.19);Ae(i,{text:"МАЦОНИ",position:[x,p+3.27,y],size:[5.2,.72],outward:u,color:"#fffdf6",weight:700,fontFamily:'"Comic Sans MS", cursive',lighting:"backlit",glowColor:"#fff0dc"})}const Ev=Object.freeze([{x:-504,z:-127,length:8,width:2.8,angle:-.357,type:"sail",accent:"#315774"},{x:-497,z:-124.4,length:9,width:3,angle:-.357,type:"sail",accent:"#a9604d"},{x:-490,z:-121.8,length:8,width:2.8,angle:-.357,type:"motor",accent:"#42738a"},{x:-483,z:-119.1,length:9,width:3,angle:-.357,type:"sail",accent:"#315774"},{x:-476,z:-116.5,length:8,width:2.8,angle:-.357,type:"motor",accent:"#a9604d"},{x:-469,z:-113.8,length:9,width:3,angle:-.357,type:"sail",accent:"#42738a"},{x:-462,z:-111.2,length:8,width:2.8,angle:-.357,type:"sail",accent:"#315774"},{x:-482,z:-83,length:7,width:2.5,angle:-.357,type:"motor",accent:"#315774"},{x:-474,z:-80.5,length:8,width:2.8,angle:-.357,type:"sail",accent:"#a9604d"},{x:-466,z:-77.5,length:7,width:2.5,angle:-.357,type:"motor",accent:"#42738a"},{x:-589.5,z:-340,length:15,width:4.2,angle:0,type:"port",accent:"#315774"},{x:-589,z:-306,length:10,width:3.5,angle:0,type:"motor",accent:"#a9604d"},{x:-587.7,z:-266,length:14,width:4,angle:0,type:"port",accent:"#42738a"},{x:-597.1,z:-203.6,length:14,width:4,angle:-.465,type:"port",accent:"#a9604d"},{x:-737,z:-275,length:12,width:3.5,angle:.45,type:"motor",accent:"#315774"},{x:-710.8,z:-222,length:8,width:2.8,angle:.45,type:"sail",accent:"#315774"}]);function Tv(i){const t="#ecefe8",e="#f5f3e9",n="#435d68",s="#78868a",o="#d9c9a9",r=fe(i,"Суда в гавани и морском порту",{surfaces:{glass:[n],metal:[s],wood:[o],flatRoof:[e,t]}}),a=-.18;for(const l of Ev){const{x:c,z:u,length:f,width:h,angle:p,type:d,accent:_}=l,m=Math.sin(p),g=Math.cos(p),v=(N,O,G)=>[c+g*N+m*O,a+G,u-m*N+g*O],M=(N,O=1)=>[v(-h*.46*O,-f*.47,N),v(h*.46*O,-f*.47,N),v(h*.5*O,f*.04,N),v(h*.36*O,f*.3,N),v(0,f*.5,N),v(-h*.36*O,f*.3,N),v(-h*.5*O,f*.04,N)],x=M(-.16,.77),y=M(d==="port"?1.04:.72),b=M(.24,.91),w=M(.32,.92);for(let N=0;N<y.length;N++){const O=(N+1)%y.length;r.face(t,x[N],x[O],y[O],y[N]),r.face(_,b[N],b[O],w[O],w[N])}r.face(o,...y);const S=d==="port"?1.04:.72,E=(N,O,G,V,$)=>[v(O,V,N),v(G,V,N),v(G,$,N),v(O,$,N)],T=h*(d==="sail"?.31:.4),C=-f*(d==="sail"?.19:.29),D=f*(d==="sail"?.04:.14),P=d==="sail"?.43:d==="port"?1.65:1.05,R=E(S,-T,T,C,D),I=E(S+P,-T*.91,T*.91,C,D-f*.025);for(let N=0;N<4;N++)r.face(e,R[N],R[(N+1)%4],I[(N+1)%4],I[N]);if(r.face(e,...I),d!=="sail")for(const N of[-1,1]){const O=N*(T+.02);r.face(n,v(O,C+f*.04,S+P*.35),v(O,D-f*.04,S+P*.35),v(O*.93,D-f*.06,S+P*.82),v(O*.93,C+f*.04,S+P*.82))}if(d==="sail"){const N=f*1.12;r.beam(v(0,0,S),v(0,0,N),.08,s),r.beam(v(0,0,S+1.25),v(0,-f*.31,S+1.25),.09,s),r.beam(v(0,-f*.03,S+1.33),v(0,-f*.28,S+1.33),.19,e),r.beam(v(0,0,N-.25),v(0,f*.44,S+.1),.025,s),r.beam(v(0,0,N-.25),v(0,-f*.43,S+.1),.025,s)}else r.beam(v(0,C+f*.04,S+P),v(0,C+f*.04,S+P+1.5),.055,s),r.beam(v(-h*.42,f*.14,S+.4),v(-h*.34,f*.38,S+.4),.04,s),r.beam(v(h*.42,f*.14,S+.4),v(h*.34,f*.38,S+.4),.04,s)}r.finish()}const Av=[{bounds:[-526,-150,-395,-110]},{bounds:[-463,-110,-395,-62]},{bounds:[-529,-96,-463,-64],outline:[[-526.29,-92.91],[-463,-69.3],[-464.22,-66.02],[-527.51,-89.63]]}];function Z0(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+l*(o[0]-s[0]),s[1]+l*(o[1]-s[1])])}}return e}function Lu(i,[t,e,n,s]){for(const o of[r=>r[0]-t,r=>n-r[0],r=>r[1]-e,r=>s-r[1]])if(i=Z0(i,o),i.length<3)return[];return i}function Rv(i,t){const e=t.reduce((s,o,r)=>{const a=t[(r+1)%t.length];return s+o[0]*a[1]-a[0]*o[1]},0),n=Math.sign(e);for(let s=0;s<t.length;s++){const o=t[s],r=t[(s+1)%t.length];if(i=Z0(i,a=>n*((r[0]-o[0])*(a[1]-o[1])-(r[1]-o[1])*(a[0]-o[0]))),i.length<3)return[]}return i}function Cv(i){const t=[];for(const e of i.land){const n=e.map(([s,o])=>new vt(s,o));for(const s of xi.triangulateShape(n,[])){const o=s.map(r=>[n[r].x,n[r].y]);for(const{bounds:r,outline:a}of Av){let l=Lu(o,r);if(a&&l.length>=3&&(l=Rv(l,a)),l.length<3)continue;const c=l.map(f=>f[0]),u=l.map(f=>f[1]);for(let f=Math.floor(Math.min(...c)/4)*4;f<Math.max(...c);f+=4)for(let h=Math.floor(Math.min(...u)/4)*4;h<Math.max(...u);h+=4){const p=Lu(l,[f,h,f+4,h+4]);for(const d of[1,-1]){const _=Z0(p,m=>d*(f+h+4-m[0]-m[1]));for(let m=2;m<_.length;m++){const g=_[0],v=_[m-1],M=_[m],x=(v[0]-g[0])*(M[1]-g[1])-(v[1]-g[1])*(M[0]-g[0]);Math.abs(x)>1e-4&&t.push(x>0?[g,M,v]:[g,v,M])}}}}}}return t}function Pv(i,t,e){const n=[];for(const a of Cv(t))for(const[l,c]of a)n.push(l,e.faceHeight(l,c)+.12,c);const s=new Ee;s.setAttribute("position",new ne(n,3)),s.computeVertexNormals();const o=Ln(new jt({color:"#a5a6a0",side:Xe}),{surface:"road",strength:.25}),r=new se(s,o);r.name="Серое покрытие причалов марины",r.receiveShadow=!0,i.add(r)}const Lv=Object.freeze([[-436.7,-8.4,6.7,2.5],[-425.3,-6.1,7.6,2.9],[-435.4,4.9,7.2,2.7],[-424.6,6.5,6.8,2.6],[-428.4,19.7,7.9,3],[-378.6,10.6,7.1,2.5],[-368,17.4,7.6,2.7],[-374.3,22.5,6.6,2.4],[-358.4,11.2,7.5,2.6],[-336,89.5,7,2.7],[-322,90,8.1,3.1],[-308,86.5,7.3,2.7],[-294,87,8,3],[-280,87,7.2,2.8],[-266,88,8.4,3.1],[-252,88.5,7.5,2.9],[-238,89,7.1,2.6],[-344,-.6,6.6,2.5],[-336,1.1,7.1,2.7],[-325,.6,6.7,2.5],[-229,35,6.8,2.5],[-227,48,7.4,2.7],[-205.8,40.5,7.2,2.6],[-201.7,54.8,7.8,2.9],[-201.7,68.4,6.8,2.6],[-190,74.3,7.7,2.8],[-181.3,32.7,7.2,2.6],[-166.5,40,7.9,2.9],[-151.7,41.8,7.1,2.6],[-141.2,51.8,6.9,2.5],[-172.8,54.8,8.1,3],[-162.3,65.4,7.5,2.8]]);function Dv([i,t],[e,n],[s,o]){const r=s-e,a=o-n,l=r*r+a*a,c=l?ce.clamp(((i-e)*r+(t-n)*a)/l,0,1):0;return Math.hypot(i-e-c*r,t-n-c*a)}function e0(i,t){let e=1/0;for(const n of t)for(let s=1;s<n.points.length;s++)e=Math.min(e,Dv(i,n.points[s-1],n.points[s])-(n.width??2)/2);return e}const Iv=[[-435.4,4.9,1.25],[-424.6,6.5,1.25],[-428.4,19.7,1.4],[-378.6,10.6,1.35],[-368,17.4,1.4],[-374.3,22.5,1.35]];function Uv(i,t,e){const n=Lv.filter(([f,h])=>e0([f,h],t.roads)>.95&&!t.trees.some(([p,d])=>Math.hypot(p-f,d-h)<3));if(!n.length)return;const s=new Dn(new dn(.12,.19,1,6),Ln(new jt({color:"#75634b"}),{surface:"wood",strength:.6}),n.length),o=new Dn(new Ei(1,2),Ln(new jt({color:"#ffffff",flatShading:!0}),{surface:"foliage"}),n.length),r=new xe,a=["#557347","#647e4b","#48683d","#6d8753"];n.forEach(([f,h,p,d],_)=>{const m=e(f,h),g=p*.61;r.position.set(f,m+g/2,h),r.scale.set(1,g,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(_,r.matrix),r.position.set(f,m+p*.72,h),r.scale.set(d,p*.36,d*.92),r.rotation.set(0,_*1.37,0),r.updateMatrix(),o.setMatrixAt(_,r.matrix),o.setColorAt(_,new Yt(a[_%a.length]))}),s.name="Стволы деревьев по спутниковому снимку",o.name="Кроны у Горгиппии по спутниковому снимку",o.castShadow=!0,o.receiveShadow=!0,i.add(s,o);const l=[];for(const[f,h,p]of Iv){if(e0([f,h],t.roads)<p+.35)continue;const d=(m,g)=>{const v=f+Math.cos(m)*g,M=h+Math.sin(m)*g;return[v,e(v,M)+.16,M]},_=d(0,0);for(let m=0;m<12;m++)l.push(..._,...d((m+1)*Math.PI/6,p),...d(m*Math.PI/6,p))}const c=new Ee;c.setAttribute("position",new ne(l,3)),c.computeVertexNormals();const u=new se(c,Ln(new jt({color:"#718557",side:Xe}),{surface:"ground",strength:.4}));u.name="Зелёные островки между дорожками",i.add(u)}const Nv=Object.freeze([[-1242.3,795.7,7.5,3.2],[-1234.3,791.9,8.4,3.5],[-1225.4,796.1,7.6,3],[-1227.9,809.4,8.2,3.5],[-1233.9,825.4,7.2,3],[-1252.9,828.6,6.8,2.8],[-1259.2,739.5,8,3.4],[-1248.7,744.8,7.5,3.1],[-1237,739.5,7,2.9],[-1228.6,750.1,8.3,3.4],[-1235.5,760.6,7.2,3],[-1248.7,764.8,8,3.4],[-1260.3,770.1,6.9,2.8],[-1246.5,778.6,7.6,3.2],[-1142.5,930.2,6.6,2.5],[-1124.9,927,7.2,2.8],[-1128.1,952.2,6.8,2.7],[-1113.7,969.5,6.5,2.5]]);function Fv([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function Ov(i){return Nv.filter(([t,e])=>e0([t,e],i.roads)>1&&!i.buildings.some(n=>Fv([t,e],n.rings[0]))&&!i.trees.some(([n,s])=>Math.hypot(n-t,s-e)<3))}function Bv(i,t,e){const n=Ov(t);if(!n.length)return;const s=new Dn(new dn(.12,.18,1,6),Ln(new jt({color:"#6d604a"}),{surface:"wood",strength:.6}),n.length),o=new Dn(new Ei(1,2),Ln(new jt({color:"#ffffff",flatShading:!0}),{surface:"foliage"}),n.length),r=new xe,a=["#466c43","#547449","#617d4b","#405d3b"];n.forEach(([l,c,u,f],h)=>{const p=e(l,c),d=u*.62;r.position.set(l,p+d/2,c),r.scale.set(1,d,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(h,r.matrix),r.position.set(l,p+u*.72,c),r.scale.set(f,u*.36,f*.94),r.rotation.set(0,h*1.4,0),r.updateMatrix(),o.setMatrixAt(h,r.matrix),o.setColorAt(h,new Yt(a[h%a.length]))}),s.name="Деревья верхней набережной у маяка · стволы",o.name="Деревья верхней набережной у маяка · кроны",o.castShadow=o.receiveShadow=!0,i.add(s,o)}const gi="#eeece2",gs="#354552";function Ad(i,t){const e=Math.hypot(t[0]-i[0],t[1]-i[1]),n=(t[0]-i[0])/e,s=(t[1]-i[1])/e,o=(l,c)=>[i[0]+n*l-s*c,i[1]+s*l+n*c];return{point:o,project:([l,c])=>[(l-i[0])*n+(c-i[1])*s,(l-i[0])*-s+(c-i[1])*n],rectangle:(l,c,u,f)=>[o(l,u),o(c,u),o(c,f),o(l,f)]}}function Du(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);r>=0&&e.push(s),r<0!=a<0&&e.push(_t(s,o,r/(r-a)))}return e}function zv(i,t,e){const{point:n,project:s,rectangle:o}=Ad(t[0],t[1]),r=t.map(S=>e(...S)),a=Math.max(...r),l=a+3.35,c="#c8bda8",u="#adada4",f=fe(i,"Кубань",{surfaces:{flatRoof:[u],stone:[c]}});f.shell(t,Math.min(...r)-.22,l,c,u);const h=Du(t,S=>14-s(S)[0]),p=Du(t,S=>s(S)[1]-35.45);f.shell(h,l,a+6.7,gi,u),f.shell(p,l,a+6,"#d7d0c1",u);const d=14,_=89.4,m=9.02,g=25.57,v=o(d,_,m+1.05,g-1.05),M=Ie(v),x=2.95,y=l+8*x;f.shell(v,l,y,gi,u);const b=22,w=[m,g].map((S,E)=>{const T=E===0?1:-1,C=[];for(let D=0;D<b;D++){const P=d+(_-d)*D/b,R=d+(_-d)*(D+1)/b;C.push(n(P,S+T*.48),n(P+(R-P)*.4,S),n(R,S))}return C});for(let S=0;S<8;S++){const E=l+S*x;Pn(f,v[0],v[1],M,E+.96,E+2.62,3.45),Pn(f,v[2],v[3],M,E+.96,E+2.62,3.45);for(const C of w)for(let D=1;D<C.length;D++)f.wall(C[D-1],C[D],E+.24,E+.94,gi);const T=[[...w[0],n(_,m+1.07),n(d,m+1.07)],[...w[1],n(_,g-1.07),n(d,g-1.07)]];for(const C of T)f.shell(C,E,E+.24,gi)}f.shell(v,y,y+.45,gi,u),f.finish()}function Iu(i,t,e,n,s,o,r){const a=[[t[0],n,t[1]],[e[0],n,e[1]]];for(let l=0;l<=8;l++){const c=Math.PI*l/8,[u,f]=_t(t,e,(1+Math.cos(c))/2);a.push([u,s+(o-s)*Math.sin(c),f])}i.face(r,...a)}function va(i,t,e,n,s,o,r){for(let a=0;a<r;a++){const l=f=>_t(t,e,(a+f)/r),c=[l(.15),l(.85)].map(f=>_t(n,f,1.006));Iu(i,...c,s,s+o*.72,s+o,gi);const u=[l(.24),l(.76)].map(f=>_t(n,f,1.011));Iu(i,...u,s+.12,s+o*.72,s+o-.2,"#314454")}}function kv(i,[t,e],n,s,o,r=!1){const a=n.map(([l,c])=>Array.from({length:s},(u,f)=>{const h=2*Math.PI*(f+.5)/s;return[t+c*Math.cos(h),l,e+c*Math.sin(h)]}));for(let l=1;l<a.length;l++)for(let c=0;c<s;c++){const u=(c+1)%s;i.face(o,a[l-1][c],a[l-1][u],a[l][u],a[l][c]),r&&c%2===0&&i.beam(a[l-1][c],a[l][c],.04,"#a98c4b")}}function Uu(i,[t,e],n,s){const o="#bc9e4f";i.beam([t,n,e],[t,n+s,e],.075,o),i.beam([t-.33,n+s*.67,e],[t+.33,n+s*.67,e],.065,o),i.beam([t-.22,n+s*.35,e],[t+.22,n+s*.43,e],.06,o)}function Hv(i,t,e){const[n,s,o,r]=t,a=(D,P)=>_t(_t(s,o,D),_t(n,r,D),P),l=(D,P,R,I)=>[a(D,R),a(P,R),a(P,I),a(D,I)],c=Ie(t),u=e(...c),f=Math.min(...t.map(D=>e(...D)))-.25,h="#3c9e9e",p="#a99973",d=fe(i,"Свято-Онуфриевский храм",{surfaces:{flatRoof:[gs],glass:["#314454"],stone:[p]}}),_=l(.24,1,0,1),m=l(0,.35,.25,.75),g=Ie(_),v=Ie(m),M=u+5.9;d.shell(_,f,u+.6,p,null),d.shell(_,u+.6,M,h,null),d.shell(m,f,u+.6,p,null),d.shell(m,u+.6,u+6.45,h,null),d.shell(_.map(D=>_t(g,D,1.012)),M-.27,M,gi,null);for(const[D,P]of[[_[0],_[1]],[_[2],_[3]],[_[1],_[2]]])va(d,D,P,g,u+1.18,2.78,3);va(d,m[3],m[0],v,u+.55,3.1,1);const x=[a(.42,.5),a(.83,.5)].map(([D,P])=>[D,u+7.95,P]),y=_.map(([D,P])=>[D,M,P]);d.face(gs,y[0],y[1],x[1],x[0]),d.face(gs,y[1],y[2],x[1]),d.face(gs,y[2],y[3],x[0],x[1]),d.face(gs,y[3],y[0],x[0]);const b=u+6.65,w=u+10.35;d.shell(m,u+6.22,b,gi,null),d.shell(m,b,w,h,null),m.forEach((D,P)=>{va(d,D,m[(P+1)%m.length],v,b+.18,2.55,3)});for(const[D,P,R]of[[_,g,M],[m,v,w]])for(const I of D){const[N,O]=_t(P,I,1.006);d.beam([N,u+.6,O],[N,R,O],.35,gi)}const S=m.map(D=>_t(v,D,1.045)),E=[v[0],u+17.8,v[1]];S.forEach(([D,P],R)=>{const[I,N]=S[(R+1)%S.length];d.face(gs,[D,w,P],[I,w,N],E),d.beam([D,w,P],E,.055,"#88754c")}),Uu(d,v,E[1],1.42);const T=a(.68,.5),C=Array.from({length:8},(D,P)=>{const R=Math.PI*(P+.5)/4;return[T[0]+1.98*Math.cos(R),T[1]+1.98*Math.sin(R)]});d.shell(C,u+7.35,u+10.1,h,null),d.shell(C.map(D=>_t(T,D,1.08)),u+9.87,u+10.12,gi,null),C.forEach((D,P)=>va(d,D,C[(P+1)%C.length],T,u+8.22,1.42,1)),kv(d,T,[[10.12,1.98],[10.55,2.27],[11.25,2.32],[12.02,1.85],[12.63,1.02],[13.12,.47],[13.52,.16]].map(([D,P])=>[u+D,P]),12,gs,!0),Uu(d,T,u+13.5,1.35),d.finish()}function Gv(i,t,e){const{point:n,rectangle:s}=Ad(t[3],t[4]),o=Ie(t),r=t.map(T=>e(...T)),a=Math.max(...r),l="#d4b581",c="#cca873",u="#eadcbe",f="#a17a61",h="#aaa598",p="#625748",d="#986d59",_=fe(i,"Мотылёк",{surfaces:{flatRoof:[h],metal:[p,d],stone:[f]}}),m=a+9.35;_.shell(t,Math.min(...r)-.25,a+.64,f,null),_.shell(t,a+.64,m,c,h);for(let T=0;T<3;T++){const C=a+.65+T*2.84;if(Pn(_,t[3],t[4],o,C+.65,C+2.43,3.9,c),Pn(_,t[11],t[12],o,C+.65,C+2.43,4,c),!T)continue;const D=s(.2,51.35,-.58,.04);_.shell(D,C-.24,C,u,l),_.wall(D[0],D[1],C+.68,C+.77,p);const P=s(9.18,42.7,16.97,17.52);_.shell(P,C-.24,C,u,l),_.wall(P[2],P[3],C+.68,C+.77,p)}const g=42.99,v=57,M=16.85,x=44.8,y=s(g,v,M,x),b=Ie(y),w=a+12.15;_.shell(y,m,w,c,null);for(const[T,C]of y.entries())Pn(_,C,y[(T+1)%y.length],b,m+.35,w-.35,4.3,c);const[S,E]=[M,x].map(T=>Array.from({length:11},(C,D)=>{const P=D/10,[R,I]=n(g-.27+(v-g+.54)*P,T);return[R,w+1.55*(1-(2*P-1)**2),I]}));for(let T=1;T<S.length;T++)_.face(d,S[T-1],E[T-1],E[T],S[T]);_.face(c,...S),_.face(c,...E),_.finish()}function Vv(i,t,e){const n=t.parts?.filter(v=>v.levels>2)??[],s=t.parts?.filter(v=>v.levels===2)??[];if(n.length!==2||s.length!==2)return!1;const o=["#6f8a98","#8197a0","#627e8f","#718d9d"],r=fe(i,"Колоннада",{surfaces:{flatRoof:["#b8bfbe"],glass:o,stone:["#d4d8d5"]}}),a=t.rings[0],l=a.map(v=>e(...v)),c=Math.max(...l),u=Math.min(...l)-.22,f=c+6.65,h="#d4d8d5",p="#b8bfbe",d="#a5adaf";for(const v of t.parts)r.shell(v.rings[0],u,f,d,p);const _=Ie(a);a.forEach((v,M)=>{const x=a[(M+1)%a.length];for(const y of[0,1]){const b=c+y*3.325;Pn(r,v,x,_,b+.42,b+2.87,2.4,"#c4c9c8")}});const m=["#9e7867","#9b8e65","#56768e"],g=2.95;for(const[v,M]of n.entries()){const x=M.rings[0],y=Ie(x),b=f+(M.levels-2)*g;r.shell(x,f,b,h,p),x.forEach((w,S)=>{const E=x[(S+1)%x.length],T=Math.hypot(E[0]-w[0],E[1]-w[1]),C=Math.max(1,Math.round(T/2.45)),D=T>9?.13:.16,P=G=>_t(y,_t(w,E,G),1.0035);for(let G=0;G<C;G++){const V=P(D+(1-2*D)*(G+.025)/C),$=P(D+(1-2*D)*(G+.975)/C);for(let tt=2;tt<M.levels;tt++){const Mt=f+(tt-2)*g,j=tt*7+S*11+G*5+v*9,St=j%29===0?m[G%m.length]:o[j%o.length];r.wall(V,$,Mt+.15,Mt+g-.14,St)}}if(T<13)return;const[R,I]=P(.15),[N,O]=P(.85);for(const[G,V]of[[R,I],[N,O]])r.beam([G,b,V],[G,b+1.45,V],.15,"#9ba5a8");r.beam([R,b+1.45,I],[N,b+1.45,O],.16,"#9ba5a8")})}return r.finish(),!0}function Wv(i,t,e){const n=t.rings[0];if(t.id==="223459472")zv(i,n,e);else if(t.id==="142489074")Hv(i,n,e);else if(t.id==="223628174")Gv(i,n,e);else return t.id==="223628417"?Vv(i,t,e):!1;return!0}function en([i,t],e){return[i,e,t]}function Yo([i,t],e,n=e){return Array.from({length:8},(s,o)=>{const r=o*Math.PI/4;return[i+Math.cos(r)*e,t+Math.sin(r)*n]})}function Rd(i,t,e,n){i.shell(Yo(t,.13),e,e+.69,n,null),i.shell(Yo(t,.54),e+.69,e+.75,n);for(const s of[-1,1]){const o=[t[0]+s*.84,t[1]];i.shell(Yo(o,.18),e,e+.44,n,null),i.shell(Yo(o,.28),e+.44,e+.5,n),i.beam([o[0]+s*.23,e+.46,o[1]],[o[0]+s*.23,e+.87,o[1]],.08,n)}}function Xv(i,t,e,n,s){const o=(n.lowerWaterfront??n)(...Ie(e)),r=o+s,a="#ded4ba",l="#e5e0cf",c="#bfbaa8",u="#484740",f=[[e[1][0],-30.5],[e[2][0],-32.8],[e[3][0],-35.7]],h=f.map(([m,g])=>[m,g-2]),p=[e[0],...h,e.at(-1)];t.shell(p,o-.17,o+.23,a,"#aa9c80"),t.shell(p,r-.25,r,"#a8a393","#b6b2a5");for(let m=1;m<h.length;m++){const g=h[m-1],v=h[m];t.wall(g,v,o+.23,o+.75,a),t.wall(g,v,r-.43,r-.25,l),t.wall(f[m-1],f[m],o+.23,r-.25,"#4b5351");for(const x of[.79,1,1.19])t.beam(en(g,o+x),en(v,o+x),.053,u);const M=5;for(let x=0;x<M;x++){const y=(x+.5)/M,b=_t(g,v,y),w=en(b,o+1.54),S=r-.42;t.beam(en(b,o+.23),en(b,r-.25),.16,a);for(const C of[-1,1]){const D=_t(g,v,y+C*.018),P=_t(g,v,y+C*.056);t.face(l,en(b,S),en(P,S),w),t.face(c,en(P,S),en(D,S-.8),w),t.face(l,w,en(b,o+.77),en(D,o+.77))}t.beam(en([b[0],b[1]-.045],o+1.9),en([b[0],b[1]-.045],o+2.12),.11,"#f2dcab");const[E,T]=_t(g,v,y+.09);Rd(t,[E,T+1.14],o+.23,"#88684d")}}const[d,_]=_t(h[0],h[1],.78);Ae(i,{text:"ПРИЧАЛ",position:[d,r-.54,_-.055],size:[3.08,.42],outward:[-.108,-.994],background:"#484740",color:"#f2e8d0",lighting:"unlit"})}function qv(i,t,e,n){const s=n(-170,-63)+.26,o=Ie(e),r="#323a3e",a="#795b45",l=e.map(m=>_t(o,m,.82));t.shell(e,s-1.12,s+.39,"#666458");for(const[m,g,v,M]of[[e,.39,2.75,3.18],[e,3.18,5.93,6.52],[l,6.52,8.75,9.06]])t.shell(m,s+g,s+v,"#35494d",null),t.shell(m,s+v,s+M,r,"#777e7b"),m.forEach((x,y)=>{const b=m[(y+1)%m.length];Pn(t,x,b,o,s+g+.05,s+v,1.18,r)});const c=[[-185.1,-55.2],[-173,-69.3],[-163.5,-64],[-162.1,-47.2]],u=s+3.06,f=[c[0],[-188.8,-60.2],[-180.3,-72.6],c[1]];t.shell(f,s-.5,s+.11,"#888479","#aaa293"),t.shell(c,s-.52,s+.37,"#6a675d","#968477"),t.shell(c,u-.18,u,"#4c4035","#929895");const h=c.map(m=>_t(Ie(c),m,.94));t.shell(h,s+.37,u-.19,"#475958",null);for(let m=0;m<c.length;m++){const g=c[m],v=c[(m+1)%c.length],M=Math.ceil(Math.hypot(v[0]-g[0],v[1]-g[1])/2.55);for(let x=0;x<M;x++){const y=_t(g,v,x/M);t.beam(en(y,s+.35),en(y,u-.13),.2,a),t.beam(en(_t(y,v,.03),u-.33),en(_t(g,v,(x+.8)/M),u-.33),.035,"#dac797")}}for(const m of[[-185.6,-60.4],[-183.4,-64],[-180.8,-67.6]])Rd(t,m,s+.11,"#916e49");const p=[-177.7,-51.7],d=n(...p),_=Yo(p,.36,.52);t.shell(_,d-.08,d+2.31,a),Ae(i,{text:"ВИНО И МОРЕ",position:[p[0]-.365,d+1.28,p[1]],size:[1.02,.53],outward:[-1,0],background:"#5b4435",color:"#e7dac1",lighting:"unlit"})}const n0="#607680",Yv={223948934:{address:"9",height:4.9,wall:"#c6b69f",roof:"#b6b1a5"},223948896:{address:"11",height:4.7,wall:"#b7a188",roof:"#777774"},223948899:{address:"13",height:4.6,wall:"#c4baaa",roof:"#cbc7bc"},223948902:{address:"15/1",height:4.45,wall:"#c0b4a2",roof:"#c4c0b5"},223948903:{address:"15/2",height:4.45,wall:"#bab0a1",roof:"#c4c0b5"},223948904:{address:"15/3",height:4.4,wall:"#baafa0",roof:"#c4c0b5"},223948906:{address:"17",height:4.35,wall:"#9c8471",roof:"#b3aba1"},223948908:{address:"19",height:3.65},223948913:{address:"21",height:3.75,wall:"#b4a18a",roof:"#a59c8b",name:"Хинкальная"},223948916:{address:"23",height:3.85,wall:"#85685b",roof:"#77716a",veranda:!0}};function Zv(i){const t=i.reduce((e,n,s)=>{const o=i[(s+1)%i.length];return e+n[0]*o[1]-o[0]*n[1]},0);return i.map((e,n)=>[e,i[(n+1)%i.length]]).filter(([e,n])=>{const s=Math.hypot(n[0]-e[0],n[1]-e[1]);return s>=2&&(n[0]-e[0])*Math.sign(t)/s>.42})}function $v(i,t,e,{height:n,wall:s,roof:o,veranda:r}){const a=Zv(t),l=e.lowerWaterfront??e,c=Math.min(...t.map(p=>l(...p))),u=c+n,f=Ie(t),h=r?t.map(p=>_t(f,p,.8)):t;i.shell(t,c-.24,c+.32,"#b2a798"),i.shell(h,c+.3,u-.28,s,null),i.shell(t,u-.28,u,o);for(const[p,d]of a){const _=Math.hypot(d[0]-p[0],d[1]-p[1]),m=Math.max(1,Math.round(_/(r?3.4:2.5))),g=_t(f,p,1.005),v=_t(f,d,1.005);for(let M=0;M<m;M++){const x=_t(g,v,(M+.12)/m),y=_t(g,v,(M+.88)/m);if(r){const b=_t(p,d,M/m);i.beam([b[0],c+.32,b[1]],[b[0],u-.26,b[1]],.16,s),i.beam([x[0],c+.97,x[1]],[y[0],c+.97,y[1]],.075,"#66645f");const w=_t(f,x,.8),S=_t(f,y,.8);i.wall(w,S,c+.65,u-.44,n0)}else i.wall(x,y,c+.55,u-.6,n0),i.beam([x[0],c+1.31,x[1]],[y[0],c+1.31,y[1]],.07,s)}r&&i.beam([d[0],c+.32,d[1]],[d[0],u-.26,d[1]],.16,s)}}function Kv(i,t,e,n){const s=n?-361.1:-351.8,o=n?-354.7:-331,r=n?-29.5:-29.6,a=(e.lowerWaterfront??e)((s+o)/2,r),l=n?"#e1dbcc":"#ac8b65",c=n?"#244945":"#302723",u=(m,g,v=0)=>[n?s+o-m:m,a+g,r-v],f=(m,g,v,M)=>[[m,v],[g,v],[g,M],[m,M]],h=(m,g,v,M,x,y)=>{t.face(y,u(m,v,x),u(g,v,x),u(g,M,x),u(m,M,x))},p=(m,g,v,M,x,y)=>t.beam(u(m,v,M),u(g,v,M),x,y),d=(m,g,v,M,x,y)=>t.beam(u(m,g,M),u(m,v,M),x,y);t.shell(f(s,o,r,r+2.55),a+.12,a+5.36,l),h(s+.16,o-.16,3.72,5.16,.022,"#687c86");const _=n?4:12;for(let m=0;m<=_;m++)d(s+.16+(o-s-.32)*m/_,3.7,5.18,.041,.065,"#d6d1c7");if(p(s+.16,o-.16,4.47,.038,.068,"#d6d1c7"),n){const m=s+.42;h(m,m+1.16,.31,2.52,.034,"#755336"),h(m+.11,m+1.05,.95,2.41,.044,"#45534a"),h(m+.11,m+1.05,.35,.94,.044,c),h(s+2.02,o-.38,.47,2.46,.026,"#4e6355");for(let M=0;M<=3;M++)d(s+2.02+M*1.33,.45,2.48,.06,.12,"#79573b");const g=s+1.84,v=o-.22;t.face("#236a66",u(g,2.77),u(v,2.77),u(v,2.5,1.38),u(g,2.5,1.38)),h(g,v,2.34,2.5,1.38,"#286c67"),Ae(i,{text:"Adrian",position:u((g+v)/2,2.42,1.39),size:[1.48,.15],outward:[0,-1],color:"#f5e9ce",lighting:"unlit"}),Ae(i,{text:"Adrian  BISTRO",position:u((g+v)/2,3.15,.035),size:[3.98,.53],outward:[0,-1],background:"#536e55",color:"#f1d8a1",fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#ffca70"}),t.shell(f(s+.12,o-.08,r-1.65,r),a+.13,a+.31,"#b5a58c"),p(s+1.75,o-.15,1.14,1.53,.061,c);for(let M=0;M<=11;M++)d(s+1.75+M*.409,.31,1.14,1.53,.035,c);for(const M of[s+.3,s+1.72,o-.45]){const[x]=u(M,0),y=(w,S)=>Array.from({length:8},(E,T)=>[x+Math.cos(T*Math.PI/4)*w,r-S+Math.sin(T*Math.PI/4)*w]);t.shell(y(.24,.83),a+.31,a+.7,"#ab694f");const b=y(.3,.83);for(let w=0;w<b.length;w++){const S=b[w],E=b[(w+1)%b.length];t.face(w%2?"#345c46":"#40694d",[S[0],a+.66,S[1]],[E[0],a+.66,E[1]],[x,a+1.85,r-.83])}}for(const M of[s+2.7,s+4.56]){d(M,.31,1,.93,.075,"#765d41");const[x]=u(M,0);t.shell(f(x-.31,x+.31,r-1.15,r-.71),a+.98,a+1.03,"#8b6c4b")}}else{t.shell(f(s,o,r-1.2,r),a+.12,a+.31,"#786858"),t.face("#392e27",u(s,3.16),u(o,3.16),u(o,2.79,1.21),u(s,2.79,1.21)),h(s,o,2.62,2.79,1.21,"#3d2f28");const m=8,g=(o-s)/m;for(let v=0;v<m;v++){const M=s+g*v;h(M+.08,M+g-.08,.34,2.61,.032,v%3===0?"#587273":"#354d50"),d(M+.02,.31,2.68,1.13,.088,c),p(M+.12,M+g-.18,1.12,1.11,.07,"#7e5e42");for(let x=0;x<=5;x++)d(M+.12+(g-.3)*x/5,.31,1.12,1.11,.039,"#7e5e42")}d(o-.02,.31,2.68,1.13,.088,c),Ae(i,{text:"BAVARIA",position:u(-342.2,3.07,1.24),size:[5.9,.55],outward:[0,-1],color:"#f5e5ca",fontFamily:"Georgia, serif",lighting:"backlit"}),Jv(i,t,e)}}function Jv(i,t,e){const o=e(-332.9,-27.7)+.13;for(const a of[-1,1]){const l=-332.9+a*1.05;t.beam([l,o,-27.7],[l,o+2.58,-27.7],.08,"#606564")}const r=[[-332.9-1.12,-27.7-.05],[-332.9+1.12,-27.7-.05],[-332.9+1.12,-27.7+.05],[-332.9-1.12,-27.7+.05]];t.shell(r,o+1.61,o+2.64,"#593b2a");for(const a of[1.87,2.12,2.38])t.beam([-332.9-1.1,o+a,-27.7+.05],[-332.9+1.1,o+a,-27.7+.05],.008,"#492b21");t.beam([-332.9+.2,o+2.64,-27.7],[-332.9+.28,o+2.95,-27.7+.13],.029,"#31302f"),t.beam([-332.9+.23,o+2.95,-27.7+.13],[-332.9+.35,o+2.95,-27.7+.15],.052,"#31302f"),Ae(i,{text:"BAVARIA",position:[-332.9,o+2.26,-27.7+.061],size:[1.98,.42],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffc882"}),Ae(i,{text:"GRILL&BAR",position:[-332.9,o+1.98,-27.7+.061],size:[1.2,.21],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",spill:!1})}function Qv(i,t,e){const n=[-278.9,-35.55],s=[-260.3,-39.94],o=Math.hypot(s[0]-n[0],s[1]-n[1]),r=[(s[1]-n[1])/o,(n[0]-s[0])/o],a=_t(n,s,.61),l=(e.lowerWaterfront??e)(...a),c=(d,_=0)=>{const[m,g]=_t(n,s,d);return[m+_*r[0],g+_*r[1]]},u=(d,_,m=0)=>{const[g,v]=c(d,m);return[g,l+_,v]},f="#59606a",h="#313a43";t.wall(n,s,l+.13,l+3.39,f),t.wall(c(0,.022),c(1,.022),l+2.61,l+3.39,h);const p=[0,.1,.2,.3,.4,.49,.56,.66,.73,.82,.91,1];for(let d=1;d<p.length;d++){const _=p[d-1],m=p[d],g=d===7;t.wall(c(_,.038),c(m,.038),l+(g?.34:.63),l+2.6,g?"#334955":"#6b8596"),t.beam(u(_,g?.33:.62,.08),u(_,2.62,.08),.085,h),g||t.beam(u(_,2.11,.064),u(m,2.11,.064),.058,h)}t.beam(u(1,.62,.08),u(1,2.62,.08),.085,h),Ae(i,{text:"Хинкальная",position:u(.61,2.92,.051),size:[5.54,.56],outward:r,fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#e6f1ff"}),Ae(i,{text:"грузинская  Кафе  европейская",position:u(.61,3.26,.051),size:[4.06,.17],outward:r,fontFamily:"Georgia, serif",color:"#fff4e1",lighting:"spot",spill:!1})}function jv(i,t,e){const{id:n,rings:[s]}=t,o=Yv[n];if(!o&&n!=="223949008")return!1;const r=n==="223949008"?"Вино и море":n==="223948908"?"Причал":o.name??`Набережная, ${o.address}`,a=fe(i,r,{surfaces:{glass:[n0,"#687c86","#45534a","#4e6355","#587273","#354d50","#4b5351","#35494d","#475958","#334955","#6b8596"],wood:["#755336","#79573b","#765d41","#8b6c4b","#7e5e42","#88684d","#795b45","#916e49","#968477","#593b2a"],foliage:["#345c46","#40694d"],stone:["#b2a798","#b5a58c","#aa9c80","#aaa293"],flatRoof:[o?.roof,"#b6b2a5","#777e7b","#929895"],metal:["#244945","#302723","#484740","#323a3e"]}});return n==="223949008"?qv(i,a,s,e):n==="223948908"?Xv(i,a,s,e,o.height):($v(a,s,e,o),(n==="223948904"||n==="223948906")&&Kv(i,a,e,n==="223948904"),n==="223948913"&&Qv(i,a,e)),a.finish(),!0}function t5(i,t,e,n,s){const o=new pe;o.name="Вода фонтана «Старинная Анапа»",o.position.set(t,e,n),i.add(o);const r=new Gc(new B(.32,.08,0),new B(1.12,2.25,0),new B(1.95,.07,0)),a=new bo(r,24,.025,5,!1),l=new wn({color:"#b5e9ea",transparent:!0,opacity:.55,depthWrite:!1});for(let m=0;m<8;m++){const g=new se(a,l);g.rotation.y=-m*Math.PI/4,o.add(g)}const c=7,u=new Dn(new Mn(.065,6,4),new wn({color:"#e6ffff",transparent:!0,opacity:.86,depthWrite:!1}),8*c);u.instanceMatrix.setUsage(Af),u.frustumCulled=!1,o.add(u);const f=new Wc(.96,1,40),h=Array.from({length:3},()=>{const m=new wn({color:"#d9fbfa",transparent:!0,opacity:.3,side:Xe,depthWrite:!1}),g=new se(f,m);return g.rotation.x=-Math.PI/2,g.position.y=.012,o.add(g),g}),p=new xe,d=new B;function _(m){for(let g=0;g<8;g++){const v=g*Math.PI/4;for(let M=0;M<c;M++){const x=(m*.53+M/c+g*.029)%1;r.getPoint(x,d),p.position.set(d.x*Math.cos(v),d.y,d.x*Math.sin(v));const y=.65+.35*Math.sin(Math.PI*x);p.scale.setScalar(y),p.updateMatrix(),u.setMatrixAt(g*c+M,p.matrix)}}u.instanceMatrix.needsUpdate=!0,h.forEach((g,v)=>{const M=(m*.34+v/h.length)%1;g.scale.setScalar(.55+M*2.05),g.material.opacity=.33*(1-M)})}_(0),s.push(_)}const Sn="#e9e5d8",Nu="#d8c7a9",Da="#7a7c75",Ma="#594741",Jc="#517789",Qs="#d8ded9";function Tr(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=Math.sign(t),c=r*l/a,u=-o*l/a;return{a:e,b:s,length:a,nx:c,nz:u,point(f,h=0){return[e[0]+o*f/a+c*h,e[1]+r*f/a+u*h]}}})}function Je(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function ze(i,t,e,n,s,o,r,a=.045){i.wall(t.point(e,a),t.point(n,a),s,o,r)}function Fu(i,t,e,n,{spacing:s,fraction:o,sill:r,top:a,glass:l}){const c=Math.max(1,Math.round(t.length/s)),u=t.length/c;for(let f=0;f<n;f++){const h=e+f*2.7;for(let p=0;p<c;p++){const d=(p+.5)*u,_=u*o/2;ze(i,t,d-_-.08,d+_+.08,h+r-.08,h+a+.08,Sn),ze(i,t,d-_,d+_,h+r,h+a,l,.065),ze(i,t,d-.026,d+.026,h+r,h+a,Sn,.083)}}}function i0(i,[t,e],n,s,o){const r=a=>Array.from({length:10},(l,c)=>{const u=c*Math.PI/5;return[t+o*a*Math.cos(u),e+o*a*Math.sin(u)]});i.shell(r(1.27),n,n+.13,Sn),i.shell(r(1),n+.13,s-.2,Sn,null),i.shell(r(1.21),s-.2,s,Sn)}function e5(i,t,e,n){const s=Tr(t).filter(j=>j.length>.1),o=Ie(t)[1],r=s.filter(({a:j,b:St,length:lt,nz:ct})=>lt>27&&ct<-.8&&(j[1]+St[1])/2<o-5).sort((j,St)=>Math.min(j.a[0],j.b[0])-Math.min(St.a[0],St.b[0]));if(r.length<2)return!1;const a=r[0].a,l=r.at(-1).b,c=l[0]-a[0],u=l[1]-a[1],f=Math.hypot(c,u),h={length:f,nx:u/f,nz:-c/f,point(j,St=0){return[a[0]+c*j/f+this.nx*St,a[1]+u*j/f+this.nz*St]}},p=8.6,d=fe(i,"Старинная Анапа",{surfaces:{glass:[Jc,"#648591","#63767a","#4b5553","#5a625c"],flatRoof:[Ma],stone:["#a89b85"],metal:["#484b47","#535a58"]}}),_=e(...h.point(h.length/2,.7))+.08,m=Math.min(_-.15,...t.map(j=>e(...j)-.25)),g=_+3.3,v=_+11.55,M=_+11.9;d.flat(Je(h,0,h.length,.8,8.2),_-.045,"#bbb7aa");for(let j=0;j<h.length;j+=.8)d.flat(Je(h,j,Math.min(j+.024,h.length),.8,8.2),_-.037,"#aaa99f");for(let j=1.6;j<8.2;j+=.8)d.flat(Je(h,0,h.length,j,j+.024),_-.037,"#aaa99f");d.shell(t,m,_+.26,"#a89b85",null),d.shell(t,_+.26,v,Nu,null),d.shell(t,v,M,Sn,Ma);for(const j of s){if(j.length<4.8)continue;const St=j.nz>.55;Fu(d,j,g,3,{spacing:St?3.4:3.12,fraction:St?.73:.57,sill:St?.49:.74,top:2.28,glass:St?"#648591":"#63767a"}),r.includes(j)||Fu(d,j,_+.26,1,{spacing:3.3,fraction:.58,sill:.55,top:2.62,glass:"#4b5553"})}for(const j of[h]){const St=j.length-.3,lt=Je(j,.3,St,-.1,.95);d.shell(lt,_+.35,g,"#524940",null);const ct=j===h?g-.83:g,H=j===h?g+.36:g+.24;d.shell(Je(j,0,j.length,-.15,j===h?1.49:1.22),ct,H,Sn);const K=Math.round(j.length/2.12);for(let pt=0;pt<K;pt++){const bt=.3+pt*(St-.3)/K,W=.3+(pt+1)*(St-.3)/K;ze(d,j,bt+.07,W-.07,_+.44,g-.1,"#5a625c",.971),ze(d,j,bt+.018,bt+.088,_+.44,g-.1,"#a0906d",.989)}}const x=h.length/2,y=x-6.2,b=x+6.2;ze(d,h,x-1.18,x+1.18,_+.3,g-.16,"#393f3d",1.015);for(const j of[-1.18,0,1.18])ze(d,h,x+j-.035,x+j+.035,_+.3,g-.16,"#a0906d",1.03);for(const[j,St]of[[-.83,-.76],[.29,.36]])d.shell(Je(h,0,h.length,1.49,1.55),g+j,g+St,Sn);const[w,S]=h.point(x,1.505);Ae(i,{text:"СТАРИННАЯ АНАПА",position:[w,g-.58,S],size:[16,.78],outward:[h.nx,h.nz],color:"#a0803f",weight:600,fontFamily:"Georgia, serif",letterSpacing:"16px",lighting:"spot",glowColor:"#ffddad"});for(const j of[-4.95,-1.65,1.65,4.95])i0(d,h.point(x+j,1.17),_+.16,g,.21),i0(d,h.point(x+j,.85-p),g+.24,v-.08,.33);for(let j=0;j<3;j++){const St=g+.24+j*2.7;for(const lt of[x-3.3,x,x+3.3]){const ct=Je(h,lt-1.23,lt+1.23,-p-.03,-p+.54);d.shell(ct,St,St+.14,Sn);for(const H of[.28,1.03])ze(d,h,lt-1.21,lt+1.21,St+H,St+H+.045,"#484b47",.55-p);for(let H=-5;H<=5;H++){const K=lt+H*.22;ze(d,h,K,K+.036,St+.27,St+1.04,"#484b47",.55-p)}}}d.shell(Je(h,y,b,-.08-p,1.2-p),v-.09,M+.39,Sn);const E=(j,St)=>[j[0],St,j[1]],T=M+.39,C=M+2.24,D=E(h.point(x,1.2-p),C),P=E(h.point(x,-3.5-p),C),R=E(h.point(y,1.2-p),T),I=E(h.point(b,1.2-p),T);d.face(Sn,R,I,D),d.face(Ma,R,D,P,E(h.point(y,-3.5-p),T)),d.face(Ma,D,I,E(h.point(b,-3.5-p),T),P),d.face(Nu,E(h.point(y,-3.5-p),T),P,E(h.point(b,-3.5-p),T));for(const j of[-1.83,-.61,.61,1.83]){const St=x+j,lt=M+.02,ct=Array.from({length:10},(H,K)=>{const pt=Math.PI/2+K*Math.PI/5,bt=K%2?.105:.245;return E(h.point(St+Math.cos(pt)*bt,1.225-p),lt+Math.sin(pt)*bt)});for(let H=0;H<ct.length;H++)d.face("#a99973",E(h.point(St,1.225-p),lt),ct[H],ct[(H+1)%ct.length])}for(const j of r)for(const[St,lt]of j===h?[[.25,y],[b,j.length-.25]]:[[.25,j.length-.25]]){ze(d,j,St,lt,M+.39,M+.45,"#535a58",-.2);for(let ct=St;ct<lt;ct+=1.7)ze(d,j,ct,ct+.04,M,M+.45,"#535a58",-.2)}const N=Je(h,x-19,x+19,7.9,17.5);d.flat(N,_-.09,"#bbb7aa");const[O,G]=h.point(x,13.3),V=_-.09,$=j=>Array.from({length:32},(St,lt)=>{const ct=lt*Math.PI/16;return[O+Math.cos(ct)*j,G+Math.sin(ct)*j]});d.shell($(3.1),V-.12,V+.34,"#c5bfb2"),d.flat($(2.75),V+.35,"#68a6ad"),d.shell($(.27),V+.35,V+.43,"#c5bfb2"),t5(i,O,V+.36,G,n);for(const j of[x-13,x+13]){const St=Je(h,j-1.05,j+1.05,6,6.5);d.shell(St,_+.38,_+.48,"#4b4540");for(const lt of[-.8,.8]){const[ct,H]=h.point(j+lt,6.25);d.beam([ct,_-.04,H],[ct,_+.4,H],.08,"#484b47")}}d.finish();const tt=Ln(new jt({color:"#776952"}),{surface:"wood"}),Mt=Ln(new jt({color:"#728e5e",flatShading:!0}),{surface:"foliage"});for(const[j,St]of[[x-20,10],[x+20,10]]){const[lt,ct]=h.point(j,St),H=e(lt,ct),K=new se(new dn(.25,.39,4.8,7),tt);K.position.set(lt,H+2.4,ct);const pt=new se(new Ei(3.1,1),Mt);pt.scale.set(1.05,1.18,.92),pt.position.set(lt,H+6.7,ct),K.castShadow=pt.castShadow=!0,i.add(K,pt)}return!0}function s0(i,t,e,n,s,o=!1){for(const r of Tr(t))if(!(r.length<.35||o&&r.nz>.25))for(let a=0;a<n;a++){const l=e+a*2.62+.42,c=e+(a+1)*2.62-.31,u=Math.max(1,Math.round(r.length/1.48));for(let f=0;f<u;f++){const h=(f+.065)*r.length/u,p=(f+.935)*r.length/u;ze(i,r,h,p,l,c,Jc),ze(i,r,h,p,l+(c-l)*.63,l+(c-l)*.63+.056,s,.067)}}}function Ar(i,t,e,n,s,o,r,a,l=1.35){const c=Math.max(1,Math.round((n-e)/l)),u=(n-e)/c;ze(i,t,e,n,s,o,a);for(let f=0;f<c;f++){const h=e+f*u+.045,p=h+u-.09;ze(i,t,h,p,s+.05,o-.05,r,.065),ze(i,t,h,p,o-.53,o-.48,a,.081)}}function Cd(i,t,e,n,s,o,r){for(const l of[.45,.98])ze(i,t,e,n,s+l,s+l+.055,r,o);const a=Math.max(1,Math.ceil((n-e)/1.6));for(let l=0;l<=a;l++){const c=e+(n-e)*l/a,[u,f]=t.point(c,o);i.beam([u,s,f],[u,s+1.025,f],.06,r)}}function Pd(i,t,e,n,s,o,r,a){const l=(u,f,h)=>{const[p,d]=t.point(u,f);return[p,h,d]},c=Math.ceil((n-e)/.69);for(let u=0;u<c;u++){const f=e+u*(n-e)/c,h=e+(u+1)*(n-e)/c,p=u%2?r:a;i.face(p,l(f,0,s),l(h,0,s),l(h,o,s-.47),l(f,o,s-.47)),ze(i,t,f,h,s-.62,s-.47,p,o)}}function n5(i,t,e,n){const s=e.length*.46,o=s-5.25,r=s+5.25,a=n+.59,l=a+2.65;i.shell(Je(e,o,r,-.08,4.55),n-.22,n,"#d7c7a9");for(let h=0;h<4;h++)i.shell(Je(e,o+h*.27,r-h*.27,0,2.42-h*.48),n+h*.1475,n+(h+1)*.1475,"#dacbad");Ar(i,e,s-2.65,s+2.65,a,l-.13,"#354f52","#dbc693",.88);for(const h of[-4.34,4.34])i0(i,e.point(s+h,2.81),n,l,.17);const c=[[o,0],[r,0],[r,2.26],[r-.62,2.86],[r-2.17,3.26],[o+2.17,3.26],[o+.62,2.86],[o,2.26]];i.shell(c.map(([h,p])=>e.point(h,p)),l,l+.31,Sn,Da);const[u,f]=e.point(s,3.28);Ae(t,{text:"Капитан",position:[u,l+.6,f],size:[3.1,.56],outward:[e.nx,e.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"})}function i5(i,t,e){if(t.length!==17)return!1;const n=fe(i,"Капитан",{surfaces:{glass:[Jc,"#54777f","#3f5e66"],flatRoof:[Da,"#987561"],stone:["#a39881"]}}),s=t.slice(2,12),o=[t[2],...t.slice(11,16)],r=[...t.slice(0,3),...t.slice(15)],a=e.lowerWaterfront??e,l=Math.min(...t.map(x=>a(...x)))-.25,c=Math.min(...s.map(x=>a(...x)))+.12,[u,f]=Tr(o).slice(1,3),h=Tr(r).at(-1),p=e(...h.point(h.length*.46,4.55)),d=e(...f.point(f.length/2,2)),_=d+2.89;n.shell(t,l,c+.27,"#a39881",null),n.shell(o,c+.27,_,Qs,null),n.shell(o.map(x=>_t(Ie(o),x,1.032)),_,_+.28,Qs,"#987561"),s0(n,o,c+.1,2,Qs),Ar(n,u,.38,u.length-.38,c+5.48,_-.12,"#54777f","#cedad5",1.67),ze(n,u,.38,u.length-.38,d-.06,d+.05,Qs,.083);const m=Je(u,.3,u.length-.3,-.07,1.03);n.shell(m,c+2.68,c+2.84,"#c3bfb4"),Cd(n,u,.38,u.length-.38,c+2.84,.97,"#afb5b0"),Pd(n,u,.35,u.length-.35,c+5.36,1.24,"#b6a481","#d5c8a5"),Ar(n,f,1.03,f.length-.6,d+.14,_-.12,"#3f5e66",Qs),n.shell(Je(f,.48,f.length-.12,0,1.26),_-.1,_+.32,Sn);const[g,v]=f.point(f.length*.57,1.28);Ae(i,{text:"Кафе Капитан",position:[g,_+.18,v],size:[5.2,.57],outward:[f.nx,f.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"}),n.shell(s,c+.27,c+7.52,Qs,null);const M=s.map(x=>_t(Ie(s),x,1.046));return n.shell(M,c+7.52,c+7.85,Sn,Da),s0(n,s,c-.03,3,Sn,!0),n.shell(r,c+.27,p+3.62,"#d9be8b",Da),n5(n,i,h,p),n.finish(),!0}const s5={170958817:{number:1,roof:"#8a8f8d",wall:"#d5cbb6",frame:"#c8d4d2"},223948923:{number:5,roof:"#aca99d",wall:"#658195",frame:"#deddd3"},223948927:{number:7,roof:"#aaa492",wall:"#bcb29a",frame:"#dfd8bf"}};function o5(i,t,e,{number:n,roof:s,wall:o,frame:r}){const a=fe(i,`Набережная, ${n}`,{surfaces:{glass:[Jc,"#526870","#6c858b"],flatRoof:[s,"#c4c7c2"],stone:["#a99e88"]}}),l=e.lowerWaterfront??e,c=Tr(t).filter(_=>_.nz<-.52),u=c.map(_=>l(..._.point(_.length/2))),f=t.map(_=>l(..._)),h=Math.min(...f)-.25,p=Math.min(...u.length?u:f)+.11,d=p+5.51;if(a.shell(t,h,p+.27,"#a99e88",null),a.shell(t,p+.27,d,o,null),a.shell(t.map(_=>_t(Ie(t),_,1.02)),d,d+.24,r,s),n===1)s0(a,t,p+.15,2,r,!0);else for(const _ of c){const m=_.length-.36;if(Ar(a,_,.36,m,p+.42,p+2.71,"#526870",r),Ar(a,_,.36,m,p+3.03,d-.23,"#6c858b",r,1.47),n===5){const g=Je(_,.15,_.length-.15,0,1.57);a.shell(g,p-.12,p+.41,"#aea69c");const v=Je(_,.05,_.length-.05,0,1.68);a.shell(v,p+2.75,p+3.07,"#276583","#c4c7c2"),ze(a,_,.19,_.length*.47,p+2.77,p+3.06,r,1.7);const M=_.length*.22;Cd(a,_,M+2.3,m,p+.41,1.48,"#c2c7c3"),a.shell(Je(_,.15,M+2.28,1.54,2.01),p-.12,p+.23,"#a49e96");for(const x of[.33,_.length*.51,m])a.shell(Je(_,x-.12,x+.12,1.32,1.56),p+.41,p+2.75,o)}else ze(a,_,.36,m,p+3.12,p+3.21,"#bc9d58",.085),Pd(a,_,.26,_.length-.26,d-.05,1.42,"#c8a851","#f0e6ca")}return a.finish(),!0}function r5(i,t,e,n=[]){if(t.id==="r11979734-0")return e5(i,t.rings[0],e,n);if(t.id==="156055903")return i5(i,t.rings[0],e);const s=s5[t.id];return s?o5(i,t.rings[0],e,s):!1}function a5(i,t){const[e,n]=Oi[1],s=t(e,n),o=Math.cos(Bi),r=Math.sin(Bi),a=[r,-o],l=(x,y,b)=>[e+x*o+b*r,s+y,n+x*r-b*o];if(Ae(i,{text:"ГОРГИППИЯ",position:l(2.55,1.68,.345),size:[.39,.58],outward:a,color:"#3c3021",background:"#b99b62",weight:600,lighting:"unlit"}),typeof document>"u")return;const c=3.56,u=.65,f=document.createElement("canvas");f.width=768,f.height=Math.round(f.width*u/c);const h=f.getContext("2d");if(!h)return;const p="АРХЕОЛОГИЧЕСКИЙ МУЗЕЙ";h.font="600 39px system-ui, sans-serif";const d=Array.from(p,x=>h.measureText(x).width),_=f.width*.92,m=(_-d.reduce((x,y)=>x+y,0))/(p.length-1);let g=(f.width-_)/2;h.fillStyle="#292726",h.textAlign="center",h.textBaseline="middle";for(let x=0;x<p.length;x++){const y=g+d[x]/2,b=(y-f.width/2)/f.width;h.fillText(p[x],y,42+278*b**2),g+=d[x]+m}const v=new Bc(f);v.colorSpace=Qe,v.anisotropy=4;const M=new se(new ci(c,u),new jt({map:v,alphaTest:.35}));M.name=p,M.position.set(...l(0,3.31,.066)),M.rotation.y=Math.atan2(...a),i.add(M)}function c5(i,t){const e=[],n=t/2;for(let s=1;s+1<i.length;s++){const[o,r]=i[s-1],[a,l]=i[s],[c,u]=i[s+1],f=[a-o,l-r],h=[c-a,u-l],p=Math.hypot(...f),d=Math.hypot(...h);if(p<.05||d<.05)continue;const _=(f[0]*h[1]-f[1]*h[0])/(p*d);if(Math.abs(_)<.001)continue;const m=_>0?-1:1;e.push([[a,l],[a-m*f[1]*n/p,l+m*f[0]*n/p],[a-m*h[1]*n/d,l+m*h[0]*n/d]])}return e}const{Color:vn,Vector2:l5,Vector3:$0}=q0,De=24,Ld=4,h5=2;function Dd(i,t,e){return i.refinesStairs(t,e,De)?h5:i.refines(t,e,De)?Ld:De}const Ni={land:"#c6b899",beach:"#e0c893",park:"#8da371",water:"#6eabb5",pier:"#c5bdae",plaza:"#d0c1aa",ruins:"#aea27e",road:"#989891",path:"#d9ccb6",tree:"#7b9367",shingle:"#aaa495",rockLight:"#a59172",riprap:"#898a78",quay:"#aca99e"},Ou=["#c6b9a5","#b0aca1","#b8a08b","#ddd3ba","#9a9c93"],u5=["#e9deca","#ded6c7","#d6c5ad","#e4d8bf","#d8d6c7"],K0=new Set(["footway","pedestrian","steps","cycleway","path","track"]),Bu=new Set(["223948926"]),f5=[Rx,Cx,hv,vv,Wv,jv,r5,Sv,bv];function pi(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function ur(i){const t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function Zo(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function d5(i,t,e=_d(i)){const{bounds:[n,s,o,r],columns:a,rows:l,heights:c}=t,[u,f]=i.origin,[h,p]=i.scale;function d(b,w){const S=ce.clamp((u+b/h-n)/(o-n)*(a-1),0,a-1),E=ce.clamp((r-f+w/p)/(r-s)*(l-1),0,l-1),T=Math.min(Math.floor(S),a-2),C=Math.min(Math.floor(E),l-2),D=C*a+T,P=ce.lerp(c[D],c[D+1],S-T),R=ce.lerp(c[D+a],c[D+a+1],S-T);return Math.max(.16,ce.lerp(P,R,E-C))}function _(b,w){const S=new Map,E=(T,C)=>{const D=`${T}:${C}`;return S.has(D)||S.set(D,b(T,C)),S.get(D)};return(T,C)=>{const D=w(T,C),P=Math.floor(T/D)*D,R=Math.floor(C/D)*D,I=(T-P)/D,N=(C-R)/D,O=E(P+D,R),G=E(P,R+D);return I+N<=1?E(P,R)*(1-I-N)+O*I+G*N:E(P+D,R+D)*(I+N-1)+O*(1-N)+G*(1-I)}}const m=W_(i),g=_((b,w)=>m(b,w,d(b,w)),()=>De),v=_((b,w)=>e.height(b,w,g),(b,w)=>Dd(e,Math.floor(b/De)*De,Math.floor(w/De)*De)),M=(b,w)=>e.waterfront.nearEdge(b,w)||e.nearTransition(b,w)?e.height(b,w,g):v(b,w);return Object.assign(M,{plain:g,faceHeight:(b,w,S)=>S?e.height(b,w,g,S):M(b,w),lowerWaterfront:(b,w)=>e.waterfront.lowerGrade(b,w,M(b,w))})}function On(i=!1){const t=[],e=[],n=i?[]:null;return{triangle(s,o,r,a,l){t.push(...s,...o,...r),n&&n.push(...l);for(const c of[s,o,r]){const u=typeof a=="function"?a(...c):a;e.push(u.r,u.g,u.b)}},mesh(s,o=Xe){const r=new Ee;r.setAttribute("position",new ne(t,3)),r.setAttribute("color",new ne(e,3)),n&&r.setAttribute("facadeGrid",new ne(n,3)),r.computeVertexNormals();const a=new se(r,new jt({vertexColors:!0,side:o}));return a.name=s,a.receiveShadow=!0,a}}}function xn(i,t,e=1){return Ln(i.material,{surface:t,strength:e}),i}function p5(i){const t=i.material;return t.customProgramCacheKey=()=>"district-facade-grid",t.onBeforeCompile=e=>{e.uniforms.facadeEnabled=Lr.cartoonEnabled,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        ${Kc.replace("cartoonDistrict","windowGridDistrict")}
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
      `)},xn(i,"plaster")}function Id(i){const t=i.map(s=>s.map(([o,r])=>new l5(o,r))),e=xi.triangulateShape(t[0],t.slice(1)),n=t.flat().map(({x:s,y:o})=>[s,o]);return e.map(s=>s.map(o=>n[o]))}function o0(i,t,e,n){const[s,o,r]=t,a=(o[0]-s[0])*(r[1]-s[1])-(o[1]-s[1])*(r[0]-s[0]);if(Math.abs(a)<1e-4)return;const l=([c,u])=>[c,e(c,u),u];i.triangle(l(s),l(a>0?r:o),l(a>0?o:r),n)}function Fi(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l])}}return e}function m5(i,t,e,n){let s=Fi(i,o=>o[0]-t);return s=Fi(s,o=>t+n-o[0]),s=Fi(s,o=>o[1]-e),Fi(s,o=>e+n-o[1])}function r0(i,t,e,n,s,o=!1){const[r,a,l,c]=ur(t);for(let u=Math.floor(r/De)*De;u<l;u+=De){let f=Fi(t,h=>h[0]-u);if(f=Fi(f,h=>u+De-h[0]),!(f.length<3))for(let h=Math.floor(a/De)*De;h<c;h+=De){let p=Fi(f,_=>_[1]-h);if(p=Fi(p,_=>h+De-_[1]),p.length<3)continue;const d=Dd(s,u,h);for(let _=u;_<u+De;_+=d)for(let m=h;m<h+De;m+=d){const g=d===De?p:m5(p,_,m,d);if(!(g.length<3))for(const v of[1,-1]){const M=Fi(g,([y,b])=>v*(_+m+d-y-b));if(M.length<3)continue;const x=o?s.waterfront.split(M):null;if(!x){for(let y=2;y<M.length;y++)o0(i,[M[0],M[y-1],M[y]],e,n);continue}for(const{ring:y,side:b}of x){const w=(S,E)=>e(S,E,b);for(let S=2;S<y.length;S++)o0(i,[y[0],y[S-1],y[S]],w,n)}}}}}}function js(i,t,e,n,s,o=!1){for(const r of Id(t))r0(i,r,e,n,s,o)}function zu(i,t=[.36,.28]){const[e,n]=t;return i.material.customProgramCacheKey=()=>`promenade-${e}-${n}`,i.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      `)},i}function Ud(i,t){return i.kind==="pier"||i.bridge?.85:t.waterfront.upperWidths[i.id]||t.waterfront.lowerWidths[i.id]||i.level?.15:K0.has(i.kind)?.35:.31}function g5(i,t,e,n){const{points:s,kind:o,id:r}=t,a=n.promenadeWidths.get(r)??t.width,l=n.stairHeight(t,e.plain);if(l){_5(i,s,a,l);return}const c=K0.has(o),u=n.waterfront.upperWidths[r]||t.level==="upper",f=n.waterfront.lowerWidths[r]||t.level==="lower",h=new vn(u?"#b7b7b1":f?"#a9aaa5":n.promenadeWidths.has(r)?"#c5c3b8":o==="pier"?Ni.pier:c?Ni.path:Ni.road),p=Ud(t,n),d=(_,m,g)=>(n.rampHeight(t,_,m)??e.faceHeight(_,m,g))+p;for(let _=1;_<s.length;_++){const[m,g]=s[_-1],[v,M]=s[_],x=v-m,y=M-g,b=Math.hypot(x,y);if(b<.05)continue;const w=-y*a/(2*b),S=x*a/(2*b);r0(i,[[m+w,g+S],[v+w,M+S],[v-w,M-S],[m-w,g-S]],d,h,n,!0)}for(const _ of c5(s,a))r0(i,_,d,h,n,!0)}function Nd(i,t,{from:e,to:n,run:s}){const o=i.slice(1).map(([l,c],u)=>Math.hypot(l-i[u][0],c-i[u][1])),r=o.reduce((l,c)=>l+c,0);let a=0;return o.flatMap((l,c)=>{if(l<.04)return[];const[u,f]=i[c],h=i[c+1][0]-u,p=i[c+1][1]-f,d=a/r;a+=l;const _=a/r,m=[d,...s.filter(v=>v>d&&v<_),_],g=v=>ce.lerp(e,n,ce.clamp((v-s[0])/(s[1]-s[0]),0,1));return m.slice(1).map((v,M)=>{const x=m[M],y=(x-d)/(_-d),b=(v-x)/(_-d),w=g(x),S=g(v),E=Math.max(1,Math.round(Math.abs(S-w)/.17)),T=C=>ce.lerp(w,S,C/E)+.15;return{x:u+h*y,z:f+p*y,dx:h*b,dz:p*b,length:l*b,width:t,count:E,height:T}})})}function _5(i,t,e,n){const s=new vn("#c5bdb0"),o=new vn("#a69d90");for(const{x:r,z:a,dx:l,dz:c,length:u,count:f,height:h}of Nd(t,e,n)){const p=-c*e/(2*u),d=l*e/(2*u),_=(m,g,v)=>[r+l*m+p*v,g,a+c*m+d*v];for(let m=0;m<f;m++){const g=m/f,v=(m+1)/f,M=h(m),x=h(m+1),y=_(g,M,1),b=_(g,M,-1),w=_(v,M,-1),S=_(v,M,1),E=_(v,x,-1),T=_(v,x,1);i.triangle(y,b,w,s),i.triangle(y,w,S,s),i.triangle(S,w,E,o),i.triangle(S,E,T,o)}}}function x5(i,t){const e=i.surveyedStairs.flatMap(n=>Nd(n.points,n.width,i.stairHeight(n,t.plain)));return(n,s)=>{if(i.nearTransition(n,s)){for(const o of e){const{x:r,z:a,dx:l,dz:c,length:u,width:f,count:h,height:p}=o,d=((n-r)*l+(s-a)*c)/(u*u),_=((s-a)*l-(n-r)*c)/u;if(d>=0&&d<=1&&Math.abs(_)<f/2)return p(Math.min(h-1,Math.floor(d*h)))}for(const o of i.ramps)if(Zo(n,s,[o.bounds[0]-o.width,o.bounds[1]-o.width,o.bounds[2]+o.width,o.bounds[3]+o.width])&&Ke(n,s,o.points).distance<o.width/2)return i.rampHeight(o,n,s)+Ud(o,i)}}}function v5(i,t,e,n){const s=t.buildings.find(c=>c.id==="170958806");if(!e||!s)return;const[o]=ur(s.rings[0]),r=[];for(let c=1;c<e.length;c++){const[u,f]=e[c-1],[h,p]=e[c],d=h-u,_=p-f,m=Math.hypot(d,_);for(let g=.8;g<m;g+=1.42){const v=u+d*g/m,M=f+_*g/m;if(!(v<o-122||v>-161.9))for(const x of[.9,2.15,3.4]){const y=Math.sin(g*6.13+c*13.7+x)*.35,b=v+_*(x+y)/m,w=M-d*(x+y)/m,S=n(b,w);S<2.55&&t.land.some(E=>pi(b,w,E))&&r.push([b,S,w,y])}}}const a=new Dn(new Ei(1,0),new jt({color:"#ada79a",flatShading:!0}),r.length);a.name="Каменная отсыпка у нижней набережной";const l=new xe;r.forEach(([c,u,f,h],p)=>{l.position.set(c,u-.05,f),l.scale.set(.72+h*.5,.32+h*.31,.53-h*.3),l.rotation.set(h,p*1.71,h*1.3),l.updateMatrix(),a.setMatrixAt(p,l.matrix),a.setColorAt(p,new vn().setScalar(.8+p%7*.055))}),a.receiveShadow=!0,i.add(xn(a,"stone"))}function M5(i,t,e){const n=i.mesh("Terrain"),{position:s,normal:o}=n.geometry.attributes,r=new $0,a=3.2;for(let l=0;l<s.count;l++){if(o.getY(l)<.05)continue;const c=s.getX(l),u=s.getZ(l);if(e.waterfront.nearEdge(c,u))continue;const f=Math.floor(c/De)*De,h=Math.floor(u/De)*De;e.refines(f,h,De)&&(r.set(t(c-a,u)-t(c+a,u),2*a,t(c,u-a)-t(c,u+a)).normalize(),o.setXYZ(l,r.x,r.y,r.z))}return o.needsUpdate=!0,n}function ku(i,t,e,n=null){const{rings:s,height:o,id:r}=t,a=Number(String(r).match(/\d+$/)?.[0]??0)%Ou.length,l=new vn(Ou[a]),c=new vn(u5[a]),u=Math.max(...s[0].map(([d,_])=>e(d,_))),f=u+o,h=Math.max(1,Math.round(o/3.15)),p=o/h;for(const d of Id(s))o0(i,d,()=>f,l);for(const[d,_]of s.entries()){const g=_.reduce((v,[M,x],y)=>{const[b,w]=_[(y+1)%_.length];return v+M*w-b*x},0)>0==d>0?_:_.slice().reverse();for(let v=0;v<g.length;v++){const[M,x]=g[v],[y,b]=g[(v+1)%g.length],w=[M,e(M,x)-.2,x],S=[y,e(y,b)-.2,b],E=[y,f,b],T=[M,f,x];if(n){const C=Math.hypot(y-M,b-x),D=Math.max(1,Math.round(C/3.2)),P=C>2.2&&o>2.65?1:0,R=[0,(w[1]-u)/p,P],I=[D,(S[1]-u)/p,P],N=[D,h,P],O=[0,h,P];n.triangle(w,S,E,c,[...R,...I,...N]),n.triangle(w,E,T,c,[...R,...N,...O])}else i.triangle(w,S,E,c),i.triangle(w,E,T,c)}}}function S5(i,t,e){if(!t.length)return;const n=new Dn(new dn(.15,.24,2.4,5),new jt({color:"#776952"}),t.length),s=new Dn(new Ei(1,1),new jt({color:Ni.tree,flatShading:!0}),t.length),o=new xe;t.forEach(([r,a],l)=>{const c=1.5+l*17%13*.11,u=e(r,a);o.position.set(r,u+1.2,a),o.scale.set(1,1,1),o.updateMatrix(),n.setMatrixAt(l,o.matrix),o.position.y=u+2.6+c*.35,o.scale.set(c,c*1.23,c),o.rotation.y=l*1.4,o.updateMatrix(),s.setMatrixAt(l,o.matrix),s.setColorAt(l,new vn().setScalar(.77+l*11%7*.047))}),s.castShadow=!0,s.receiveShadow=!0,i.add(xn(n,"wood",.75),xn(s,"foliage",1))}function y5(i,t){const[e,n,s,o]=t,r={time:{value:0},evening:{value:0},sun:{value:new $0(-.6,.55,-.5).normalize()},haze:{value:new vn("#b3d5d5")},cartoonEnabled:Lr.cartoonEnabled,...w_()},a=new In({uniforms:r,vertexShader:`
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
      ${Kc}
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
    `}),l=Math.max(s-e,o-n)*4,c=new se(new ci(l,l),a);return c.rotation.x=-Math.PI/2,c.position.set((e+s)/2,-.18,(n+o)/2),i.add(c),r}function b5(i,t,e){const n=new fd({canvas:i,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1;const s=new R0,o=[];s.fog=new Nc("#b3d5d5",900,3200),s.background=new vn("#b3d5d5");const r=_d(t),a=d5(t,e,r),l=y5(s,t.bounds);Tv(s);const c=On(),u=new vn(Ni.land),f=Object.fromEntries(["shingle","rockLight","riprap","quay"].map(k=>[k,new vn(Ni[k])])),h=new vn;function p(k,Z,at){const xt=r.tone(k,at,Z);if(!xt)return u;const[yt,At]=xt;return h.copy(u).lerp(f[yt],At)}const d=t.areas.some(({id:k})=>k===bu),_=d?iv(a):null,m=ur(Ms),g=(k,Z)=>d&&Zo(k,Z,m)&&pi(k,Z,Ms);for(const k of t.land){const Z=d&&Ms.every(([at,xt])=>pi(at,xt,k))?[Ms]:[];js(c,[k,...Z],a.faceHeight,p,r,!0);for(let at=0;at<k.length;at++){const[xt,yt]=k[at],[At,Bt]=k[(at+1)%k.length],z=r.refines(xt,yt,De)?Ld:12,$t=Math.max(1,Math.ceil(Math.hypot(At-xt,Bt-yt)/z));for(let Xt=0;Xt<$t;Xt++){const U=[xt+(At-xt)*Xt/$t,yt+(Bt-yt)*Xt/$t],A=[xt+(At-xt)*(Xt+1)/$t,yt+(Bt-yt)*(Xt+1)/$t],J=[U[0],a(...U),U[1]],Q=[A[0],a(...A),A[1]],ut=[U[0],-.4,U[1]],Et=[A[0],-.4,A[1]];c.triangle(J,ut,Q,p),c.triangle(Q,ut,Et,p)}}}const v=On(),M=On(),x=On(),y={beach:.13,park:.14,plaza:.2,ruins:.22,water:.24,pier:.7};for(const k of t.areas){if(k.id===bu)continue;const Z=k.kind==="beach"&&(k.id==="368318892"||["pebblestone","gravel"].includes(k.surface)),at=new vn(Z?Ni.shingle:Ni[k.kind]??Ni.park),xt=(At,Bt,z)=>a.faceHeight(At,Bt,z)+(y[k.kind]??.14),yt=k.kind==="pier"||k.kind==="plaza"?M:k.kind==="park"?x:v;js(yt,k.rings,xt,at,r,!0)}const b=On(),w=On(),S=On(),E=On(),T=new vn("#b7b7b1"),C=new vn("#a9aaa5"),D=[];for(const k of r.waterfront.sections){for(const Z of k.upperDecks)D.push(Z),js(E,[Z],(xt,yt)=>a.faceHeight(xt,yt,{section:k,upper:!0})+.12,T,r);for(const Z of k.lowerDecks)js(S,[Z],(xt,yt)=>a.faceHeight(xt,yt,{section:k,upper:!1})+.12,C,r)}for(const k of r.allRoads){const Z=r.waterfront.upperWidths[k.id]&&!(k.id in r.waterfront.rampLevels),at=r.waterfront.lowerWidths[k.id],xt=Z?E:at?S:K0.has(k.kind)||k.kind==="pier"?w:b;g5(xt,k,a,r)}const P=On(),R=On(),I=On(!0),N=[Go.west,Go.north,Go.east,Go.south];for(const k of t.buildings)if(!Bu.has(k.id)){if(k.id==="125813145")yx(s,k,a);else if(!f5.some(Z=>Z(s,k,a,o))){const[Z,at,xt,yt]=ur(k.rings[0]);Zo((Z+xt)/2,(at+yt)/2,N)?ku(R,k,a,I):ku(P,k,a)}}const O=P.mesh("OSM building footprints",si);O.castShadow=!0;const G=p5(I.mesh("Фасады квартала",si)),V=xn(R.mesh("Крыши квартала",si),"flatRoof");if(G.castShadow=V.castShadow=!0,s.add(xn(M5(c,a,r),"ground"),xn(v.mesh("OSM surfaces"),"ground"),xn(M.mesh("Площади и причалы"),"paving"),xn(x.mesh("Скверы"),"foliage",.65),xn(zu(S.mesh("Плитка нижней набережной"),[.24,.22]),"laidPaving"),xn(zu(E.mesh("Плитка верхней набережной")),"laidPaving"),xn(w.mesh("Пешеходные дорожки"),"paving",.8),xn(b.mesh("OSM streets"),"road",.8),O,V,G),Pv(s,t,a),d){const k=On();Vx(s,a,(at,xt,yt)=>js(k,at,xt,yt,r)),s.add(xn(k.mesh("Раскоп Горгиппии · уровни грунта"),"ground",.88));const Z=On();_.render(s,(at,xt,yt)=>js(Z,at,xt,yt,r)),s.add(xn(Z.mesh("Горгиппия · покрытия дорожек"),"paving",.7))}S5(s,t.trees,a),Uv(s,t,a),Bv(s,t,a),bx(s,t,a),fv(s,a),a5(s,a),Q_(s,a),ux(s,a),gx(s,a),v5(s,t,r.gorgWater,a),Y_(s,r,a),N_(s,a),B_(s,a),wv(s,t,a);const $=L_(s,a),tt=new H0("#eefbff","#b0a48b",1.65),Mt=new W0("#fff5dd",2.25),[j,St,lt,ct]=t.bounds,H=Math.max(lt-j,ct-St)*.62;Mt.target.position.set((j+lt)/2,0,(St+ct)/2),Mt.castShadow=!0,Mt.shadow.mapSize.set(2048,2048),Object.assign(Mt.shadow.camera,{left:-H,right:H,top:H,bottom:-H,near:1,far:5300}),Mt.shadow.camera.updateProjectionMatrix(),Mt.shadow.normalBias=1,Mt.shadow.bias=-15e-5,s.add(tt,Mt,Mt.target);function K(k){const Z=k==="sunset";$.setEnabled(Z),l.evening.value=Z?1:0;const at=Z?"#8993b4":"#b3d5d5";s.background.set(at),s.fog.color.set(at),l.haze.value.set(at),tt.color.set(Z?"#becdf9":"#eefbff"),tt.groundColor.set(Z?"#736b86":"#b0a48b"),tt.intensity=Z?.73:1.65,Mt.color.set(Z?"#ffc18c":"#fff5dd"),Mt.intensity=Z?.81:2.25;const xt=Z?[-.95,.23,-.44]:[-.6,1,-.5];Mt.position.copy(Mt.target.position).add(new $0(...xt).multiplyScalar(1800)),l.sun.value.set(...xt).normalize(),n.shadowMap.needsUpdate=!0}K("day");const pt=new Map,bt=60,W=(k,Z)=>`${k}:${Z}`;for(const{id:k,rings:Z}of t.buildings){if(Bu.has(k))continue;const[at,xt,yt,At]=ur(Z[0]);for(let Bt=Math.floor(at/bt);Bt<=Math.floor(yt/bt);Bt++)for(let z=Math.floor(xt/bt);z<=Math.floor(At/bt);z++){const $t=W(Bt,z);pt.has($t)||pt.set($t,[]),pt.get($t).push({id:k,rings:Z,bounds:[at,xt,yt,At]})}}const ht=(k,Z)=>t.land.some(at=>pi(k,Z,at)),dt=t.areas.filter(k=>k.kind==="pier"),Y=x5(r,a);function et(k,Z){if(!Zo(k,Z,t.bounds)||!ht(k,Z)&&!dt.some(({rings:yt})=>pi(k,Z,yt[0]))||pi(k,Z,Z_)||pi(k,Z,vd))return null;const at=_?.walkHeight(k,Z,g(k,Z));return at===null||(pt.get(W(Math.floor(k/bt),Math.floor(Z/bt)))??[]).some(({id:yt,rings:At,bounds:Bt})=>!Zo(k,Z,Bt)||!pi(k,Z,At[0])||r.waterfront.deckRoofs.has(yt)&&D.some(z=>pi(k,Z,z))?!1:!At.slice(1).some(z=>pi(k,Z,z)))?null:at??Y(k,Z)??a(k,Z)}return{renderer:n,scene:s,terrain:a,light:K,walkHeight:et,setCartoon:S_,walkable:(k,Z)=>et(k,Z)!==null,render(k,Z){l.time.value=Z;for(const at of o)at(Z);$.update(k),n.render(s,k)}}}const w5=new Set(["motorway","trunk","primary","secondary","tertiary","unclassified","residential","living_street","service"]);function E5({kind:i,access:t}){return i!=="steps"&&t?.car!==!1&&(w5.has(i)||t?.car===!0)}function a0(i,t,e){return(t-i.x)*i.ux+(e-i.z)*i.uz}function Hu(i,t,e){const n=Math.min(i.length,Math.max(0,a0(i,t,e)));return(t-i.x-n*i.ux)**2+(e-i.z-n*i.uz)**2}function T5(i,t,e){return i.road.barriers?.some(n=>{if(n.car!==!1)return!1;const[s,o]=n.position;return Math.hypot(t-s,e-o)<i.radius+.7&&Math.abs((t-s)*i.ux+(e-o)*i.uz)<.65})}function A5(i){const t=new Map,e=[],n=32,s=u=>Math.floor(u/n),o=(u,f)=>`${u}:${f}`;for(const u of i){const f=E5(u),h=u.access?.bicycle===!1,p=u.kind==="steps"||h||u.barriers?.length;if(!f&&!p)continue;const d=u.width/2;for(let _=1;_<u.points.length;_++){const[m,g]=u.points[_-1],[v,M]=u.points[_],x=v-m,y=M-g,b=Math.hypot(x,y);if(b<.01)continue;const w={x:m,z:g,ux:x/b,uz:y/b,length:b,radius:d,road:u,car:f,bikeCheck:p};f&&e.push(w);for(let S=s(Math.min(m,v)-d);S<=s(Math.max(m,v)+d);S++)for(let E=s(Math.min(g,M)-d);E<=s(Math.max(g,M)+d);E++){const T=o(S,E);t.has(T)||t.set(T,[]),t.get(T).push(w)}}}const r=(u,f)=>t.get(o(s(u),s(f)))??[];function a(u,f){let h=null,p=1/0;for(const d of r(u,f)){if(!d.car)continue;const _=a0(d,u,f);if(_<-.005||_>d.length+.005)continue;const m=Hu(d,u,f),g=Math.max(.4,d.radius-.45);m>g**2||m>=p||T5(d,u,f)||(p=m,h=d.road)}return h}function l(u,f){let h=!1;for(const p of r(u,f)){if(!p.bikeCheck||Hu(p,u,f)>p.radius**2)continue;const{road:d}=p;if(d.access?.bicycle===!1){if(d.access?.foot===!1)return"blocked";h=!0}d.kind==="steps"&&(h=!0);for(const _ of d.barriers??[])if(!(_.bicycle!==!1||Math.hypot(u-_.position[0],f-_.position[1])>.65)){if(_.foot===!1)return"blocked";h=!0}}return h?"push":"ride"}function c([u,f],h){let p=null,d=1/0;for(const _ of e){const m=a0(_,u,f);for(const g of[0,-4,4,-12,12]){const v=Math.min(_.length,Math.max(0,m+g)),M=_.x+_.ux*v,x=_.z+_.uz*v,y=(M-u)**2+(x-f)**2;if(y>=d)continue;const b=h(M,x);b!==null&&(d=y,p={x:M,z:x,height:b,heading:Math.atan2(_.ux,-_.uz)})}}return p}return{carAt:a,bicycleAt:l,nearestCarStart:c}}const{MathUtils:R5,Vector3:yc}=q0,C5=new yc(0,1,0);function Tn(i){return new jt({color:i,flatShading:!0})}function Oe(i,t,e,n=[0,0,0]){const s=new se(t,e);return s.position.set(...n),i.add(s),s}function Bn(i,t,e,n,s){const o=new yc(...t),r=new yc(...e),a=r.clone().sub(o),l=Oe(i,new dn(n,n,a.length(),10),s);return l.position.copy(o).lerp(r,.5),l.quaternion.setFromUnitVectors(C5,a.normalize()),l}function co(i,t,e,n){const s=new Hc(t.map(o=>new yc(...o)));return Oe(i,new bo(s,14,e,8),n)}function Gu(i,t,e){const n=t.flat(2),s=t[0].length,o=[];for(let a=0;a<t.length-1;a++)for(let l=0;l<s-1;l++){const c=a*s+l;o.push(c,c+1,c+s,c+1,c+s+1,c+s)}const r=new Ee;return r.setAttribute("position",new ne(n,3)),r.setIndex(o),r.computeVertexNormals(),Oe(i,r,e)}function P5(i){const t=Tn("#4ca9ab"),e=Tn("#283a3e"),n=Tn("#18292b"),s=Tn("#acbfc0"),o=Tn("#e5af59"),r=new pe,a=new pe;i.add(r),r.add(a),Bn(r,[0,-.3,-.27],[0,-.78,.4],.073,t),Bn(a,[0,0,.09],[0,-.3,-.25],.049,s),Bn(a,[0,-.31,-.25],[0,-.43,-.36],.066,t);for(const u of[-1,1]){const f=h=>h*u;Bn(a,[f(.066),-.34,-.27],[f(.061),-.82,-.57],.038,t),co(a,[[0,0,.09],[f(.24),.012,.11],[f(.43),.075,.18],[f(.75),.09,.25]],.033,s),Bn(a,[f(.52),.079,.2],[f(.78),.092,.26],.052,e);for(const h of[.55,.61,.67,.73,.77]){const p=.205+(h-.53)*.21;Bn(a,[f(h),.081,p],[f(h+.015),.082,p+.004],.055,n)}co(a,[[f(.48),.055,.16],[f(.54),.038,.04],[f(.69),.038,.1]],.018,s),co(a,[[f(.48),.045,.15],[f(.35),-.18,-.08],[f(.07),-.4,-.28]],.009,n)}const l=Oe(a,new Si(.35,.042,8,32),n,[0,-.82,-.57]);l.rotation.y=Math.PI/2;const c=Oe(a,new Si(.3,.014,6,32),s,[0,-.82,-.57]);return c.rotation.y=Math.PI/2,Bn(a,[-.075,-.82,-.57],[.075,-.82,-.57],.036,s),Oe(a,new dn(.062,.067,.045,16),o,[-.37,.122,.14]),Bn(a,[-.38,.115,.16],[-.45,.105,.2],.012,o),r.position.set(0,-.48,-1.5),{group:r,front:a}}function L5(i){const t=Tn("#eee1ba"),e=Tn("#9b916c"),n=Tn("#303536"),s=Tn("#b7b8ab"),o=Tn("#202526"),r=Tn("#e7dbc2"),a=Tn("#f58b63"),l=new pe,c=new pe,u=new pe;i.add(l),l.add(c,u),Gu(l,[[[-1.52,-.8,-1.12],[-.84,-.73,-1.12],[-.1,-.67,-1.12],[.66,-.68,-1.12],[1.38,-.74,-1.12],[1.98,-.82,-1.12]],[[-1.36,-.8,-2.25],[-.72,-.75,-2.25],[-.06,-.69,-2.25],[.65,-.7,-2.25],[1.32,-.76,-2.25],[1.85,-.83,-2.25]],[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[-.04,-.83,-3.28],[.65,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]]],t),co(l,[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[.3,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]],.014,e);for(const f of[-.77,1.3])co(l,[[f,-.75,-1.42],[f,-.737,-2.14],[f*.93,-.844,-3.05]],.009,e);for(const f of[-.64,.38])Bn(l,[f,-.65,-1.69],[f+.48,-.65,-1.76],.014,n),Bn(l,[f+.23,-.65,-1.72],[f+.47,-.7,-1.5],.01,s);Gu(l,[[[-1.9,-.89,-.67],[-.77,-.83,-.67],[.08,-.8,-.67],[.91,-.84,-.67],[2.05,-.89,-.67]],[[-1.92,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],[[-1.93,-.77,-1.56],[-.74,-.7,-1.56],[.07,-.67,-1.56],[.94,-.72,-1.56],[2.08,-.8,-1.56]]],n),co(l,[[-1.9,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],.018,s),Oe(l,new Le(2.12,.14,.065),s,[.52,-.65,-1.37]),Oe(l,new Le(.86,.24,.16),n,[-.25,-.55,-1.43]),Oe(l,new Le(.8,.177,.019),s,[-.25,-.55,-1.337]),Oe(l,new Le(.75,.143,.015),o,[-.25,-.55,-1.32]),Oe(l,new Le(.44,.046,.004),r,[-.25,-.519,-1.31]);for(let f=0;f<=16;f++){const h=-.455+f*.0255,p=f%2===0?.017:.008;Oe(l,new Le(.0035,p,.004),o,[h,-.497-p/2,-1.305])}for(const f of[-.542,.038])Oe(l,new Le(.088,.036,.004),r,[f,-.524,-1.31]),Bn(l,[f-.026,-.536,-1.304],[f+.01,-.51,-1.304],.0027,a);for(let f=0;f<6;f++){const h=Tn(["#b44e37","#95764c","#a44536","#548159","#a58746","#5b8798"][f]);Oe(l,new Le(.037,.018,.004),h,[-.42+f*.066,-.579,-1.308])}for(const f of[.43,.67]){Oe(l,new Le(.17,.105,.025),o,[f,-.645,-1.316]);for(let h=0;h<4;h++)Oe(l,new Le(.15,.007,.01),s,[f,-.676+h*.019,-1.3])}u.position.set(-.453,-.518,-1.299),Oe(u,new Le(.008,.035,.006),a),c.position.set(-.25,-.63,-1.1),Oe(c,new Si(.295,.023,10,44),n),Oe(c,new Si(.219,.008,6,36,Math.PI),s,[0,0,.022]).rotation.z=Math.PI;for(const f of[-1,1])Bn(c,[f*.061,-.018,.01],[f*.287,.01,0],.025,n),Bn(c,[f*.073,-.015,.035],[f*.212,.003,.023],.008,s);return Oe(c,new yo(.079,24),n,[0,0,.038]),Oe(c,new Si(.033,.004,6,20),s,[0,0,.042]),Oe(c,new Le(.034,.024,.006),Tn("#a75444"),[0,0,.044]),{group:l,wheel:c,gaugeNeedle:u}}function D5(){const i=new R0,t=new nn(58,1,.04,10),e=new H0("#f7f7e9","#9ea8af",1.4),n=new W0("#fff2d8",2);n.position.set(-2,4,2),i.add(e,n);const s=P5(i),o=L5(i);let r=0,a="";function l(c,{mode:u,aspect:f,turn:h,speed:p,time:d,delta:_,reducedMotion:m}){if(a!==u&&(r=0,a=u),s.group.visible=u==="bike",o.group.visible=u==="car",!s.group.visible&&!o.group.visible)return;t.aspect!==f&&(t.aspect=f,t.updateProjectionMatrix()),r=m?h:R5.damp(r,h,12,_);const g=Math.min(1,f/1.22),v=.1*(1-g);s.group.visible?(s.group.scale.x=g,s.group.position.y=-.48+v,m||(s.group.position.y+=Math.sin(d*11)*Math.min(.008,Math.abs(p)*.0015)),s.front.rotation.y=-r*.28,s.front.rotation.z=-r*.045):(o.group.scale.x=g,o.group.position.y=v,o.wheel.rotation.z=-r*.74,o.gaugeNeedle.position.x=-.453+Math.min(1,Math.abs(p)*3.6/160)*.407);const M=c.autoClear;c.autoClear=!1;try{c.clearDepth(),c.render(i,t)}finally{c.autoClear=M}}return{render:l}}function I5(i){const t=new pe;t.name="ВАЗ-2101 «Копейка»",t.visible=!1,i.add(t);const e=new ar({color:"#eee1ba",shininess:54,specular:"#a9a49b"}),n=new ar({color:"#c9cacc",shininess:90,specular:"#f2f5f4"}),s=new jt({color:"#35342f"}),o=new jt({color:"#232528"}),r=new ar({color:"#527176",shininess:68,specular:"#3b535a",side:Xe}),a=new jt({color:"#fff5d5",emissive:"#422d0d"}),l=new jt({color:"#ecaa38"}),c=new jt({color:"#b92d23"}),u=new jt({color:"#a53830"});function f(P,R,[I,N,O],G=t){const V=new se(P,R);return V.position.set(I,N,O),G.add(V),V}const h=(P,R,I,N,O,G,V,$)=>f(new Le(P,R,I),V,[N,O,G],$);function p(P,R,I,N){const O=new B(...P),G=new B(...R);f(new Le(I,I,O.distanceTo(G)),N,O.clone().add(G).multiplyScalar(.5).toArray()).lookAt(G)}function d(P){const R=new Ee;R.setAttribute("position",new ne(P.flat(),3)),R.setIndex([0,1,2,0,2,3]),R.computeVertexNormals(),f(R,r,[0,0,0]),P.forEach((I,N)=>p(I,P[(N+1)%P.length],.026,n))}const _=new Vc;_.moveTo(1.99,.42),_.lineTo(1.99,.8),_.lineTo(1.75,.89),_.lineTo(.71,.92),_.lineTo(-1.14,.89),_.lineTo(-1.98,.78),_.lineTo(-1.99,.39),_.lineTo(-1.62,.33);for(const P of[-1.212,1.212]){_.lineTo(P-.353,.29);for(let R=1;R<=12;R++){const I=Math.PI-R*Math.PI/12;_.lineTo(P+Math.cos(I)*.353,.29+Math.sin(I)*.337)}}_.lineTo(1.99,.42);const m=f(new Pr(_,{depth:1.49,bevelSize:.035,bevelThickness:.045,bevelSegments:2,steps:1}),e,[-.745,0,0]);m.rotation.y=Math.PI/2;const g=[-.724,.924,-.75],v=[.724,.924,-.75],M=[-.723,.891,1.13],x=[.723,.891,1.13],y=[-.609,1.414,-.43],b=[.609,1.414,-.43],w=[-.609,1.414,.72],S=[.609,1.414,.72];d([g,v,b,y]),d([x,M,w,S]),d([M,g,y,w]),d([v,x,S,b]),h(1.25,.047,1.2,0,1.423,.145,e);for(const P of[-1,1]){p([P*.72,.915,.16],[P*.618,1.41,.16],.044,e),p([P*.782,.688,-1.83],[P*.782,.688,1.83],.017,n);for(const R of[-.53,.39,1.12])p([P*.783,.426,R],[P*.783,.88,R],.009,s);for(const R of[.035,.91])h(.032,.033,.139,P*.791,.793,R,n);p([P*.74,.925,-1.23],[P*.84,1.021,-1.23],.024,n),P<0&&h(.148,.069,.061,-.846,1.037,-1.23,n),p([P*.6,.935,-.8],[P*.62,.855,-1.92],.013,n)}h(1.44,.228,.035,0,.704,-2.002,n),h(1.38,.192,.023,0,.704,-2.023,s);for(let P=0;P<6;P++)h(1.35,.008,.019,0,.627+P*.03,-2.039,n);h(.085,.09,.022,0,.704,-2.053,u);for(const P of[-1,1]){const R=P*.556;f(new dn(.136,.136,.038,24),n,[R,.712,-2.036]).rotation.x=Math.PI/2,f(new dn(.113,.113,.035,24),a,[R,.712,-2.057]).rotation.x=Math.PI/2,h(.173,.061,.028,R,.528,-2.023,l),h(.234,.128,.035,R,.669,2.014,n),h(.208,.101,.029,R,.669,2.037,c),h(.068,.097,.035,R+P*.066,.669,2.051,l);for(const I of[-2.058,2.047])h(.072,.133,.092,P*.457,.392,I,s)}h(1.62,.079,.112,0,.394,-2.054,n),h(1.62,.079,.112,0,.394,2.043,n),h(.3,.103,.028,0,.535,2.035,s),h(.26,.065,.012,0,.535,2.052,n),p([-.48,.93,-.759],[-.16,.955,-.745],.016,s),p([.12,.93,-.759],[.45,.955,-.745],.016,s);const E=[];for(const P of[-1.212,1.212])for(const R of[-1,1]){const I=new pe;I.position.set(R*.69,.288,P),t.add(I);const N=new pe;I.add(N);const O=(G,V,$,tt)=>f(new dn(G,G,V,20),tt,[$,0,0],N).rotation.z=Math.PI/2;O(.289,.198,0,o),O(.207,.024,R*.101,e),O(.135,.027,R*.123,n),O(.054,.029,R*.142,s),E.push({pivot:I,wheel:N,steer:P<0})}const T=f(new yo(1,28),new wn({color:"#263137",transparent:!0,opacity:.24,depthWrite:!1}),[0,.031,0]);T.rotation.x=-Math.PI/2,T.scale.set(.96,2.08,1);const C=new nn(49,1,.22,4800),D=new B;return{cameraFor(P,{active:R,yaw:I,speed:N,turn:O,delta:G,terrain:V,angle:$,height:tt,distance:Mt}){if(t.visible=R,!R)return P;const j=P.position.y-1.45;t.position.set(P.position.x,j,P.position.z),t.rotation.y=-I;for(const{pivot:lt,wheel:ct,steer:H}of E)H&&(lt.rotation.y=-O*.3),ct.rotation.x-=N*G/.289;t.updateMatrixWorld(!0);const St=Mt*Math.max(1,.72/P.aspect);return t.localToWorld(C.position.set(Math.sin($)*St,tt,Math.cos($)*St)),C.position.y=Math.max(C.position.y,V(C.position.x,C.position.z)+1.8),C.lookAt(t.localToWorld(D.set(0,.83,-Math.max(0,Math.cos($))*1.1))),C.aspect!==P.aspect&&(C.aspect=P.aspect,C.updateProjectionMatrix()),C}}}const U5=new B(0,1,0),Bl=new B,Sa=new B;function Wn(i,t,e,n=[0,0,0]){const s=new se(t,e);return s.position.set(...n),i.add(s),s}function $o(i,t,e){Bl.set(...t),Sa.set(...e).sub(Bl),i.position.copy(Bl).addScaledVector(Sa,.5),i.scale.y=Sa.length(),i.quaternion.setFromUnitVectors(U5,Sa.normalize())}function We(i,t,e,n,s){const o=Wn(i,new dn(n,n,1,8),s);return $o(o,t,e),o}function N5(i){const t=new pe;t.name="Велосипед с велосипедистом",t.visible=!1,i.add(t);const e=G=>new jt({color:G,flatShading:!0}),n=e("#4ca9ab"),s=e("#1d2b2c"),o=e("#b4c1b8"),r=e("#3b4240"),a=e("#eee1ba"),l=e("#415760"),c=e("#cd9478"),u=e("#e5af59"),f=[0,.345,.54],h=[0,.92,-.38],p=[0,.39,.055],d=[0,.94,.21],_=new pe;_.position.set(...h),t.add(_);const m=.321;function g(G,V){const $=new pe;$.position.set(...V),G.add($),Wn($,new Si(m,.024,8,36),s).rotation.y=Math.PI/2,Wn($,new Si(.297,.008,6,36),o).rotation.y=Math.PI/2,We($,[-.047,0,0],[.047,0,0],.017,o);for(let tt=0;tt<14;tt++){const Mt=tt*Math.PI/7;We($,[tt%2?.025:-.025,0,0],[0,Math.sin(Mt)*.295,Math.cos(Mt)*.295],.0026,o)}return $}const v=g(t,f),M=g(_,[0,-.575,-.17]);We(t,p,d,.027,n),We(t,p,[0,.78,-.36],.029,n),We(t,[0,.85,.195],[0,.86,-.37],.023,n),We(t,[0,.77,-.36],h,.036,n);for(const G of[-1,1]){const V=[G*.046,f[1],f[2]];We(t,[G*.033,.8,.19],V,.012,n),We(t,[G*.036,p[1],p[2]],V,.015,n),We(_,[G*.036,-.15,.026],[G*.043,-.575,-.17],.016,n),We(_,[0,.095,.042],[G*.34,.125,.13],.014,o),We(_,[G*.26,.119,.112],[G*.36,.13,.134],.022,s)}We(_,[0,0,0],[0,.095,.042],.022,o),Wn(_,new dn(.028,.031,.025,12),u,[-.23,.146,.103]),Wn(t,new Mn(1,12,8),r,[0,.95,.208]).scale.set(.082,.022,.123),We(t,[-.12,p[1],p[2]],[.12,p[1],p[2]],.015,o);const y=[0,1.34,-.074],b=[0,.96,.22],w=Wn(t,new Mn(1,12,8),a,[0,1.16,.065]);w.scale.set(.16,.232,.118),w.rotation.x=-.63,Wn(t,new Mn(1,12,8),l,b).scale.set(.138,.085,.104),We(t,[0,1.31,-.087],[0,1.45,-.169],.059,c),Wn(t,new Mn(.093,12,8),c,[0,1.49,-.167]).scale.y=1.11,Wn(t,new Mn(1,14,9),u,[0,1.554,-.178]).scale.set(.113,.075,.121),Wn(t,new Mn(1,12,8),r,[0,1.541,-.271]).scale.set(.093,.017,.041);const C=[-1,1].map(G=>{const V=[G*.118,y[1],y[2]],$=[G*.225,1.17,-.16],tt=[G*.31,1.05,-.25],Mt=[G*.095,b[1],b[2]],j=[G*.14,.71,-.21],St=[G*.12,p[1],p[2]];return{side:G,elbow:$,forearm:We(t,$,tt,.031,c),sleeve:We(t,V,$,.045,a),thigh:We(t,Mt,j,.057,l),shin:We(t,j,St,.041,l),crankArm:We(t,[G*.085,p[1],p[2]],St,.012,o),shoe:Wn(t,new Le(.084,.058,.163),r,St)}}),D=Wn(t,new yo(1,22),new wn({color:"#203138",transparent:!0,opacity:.16,depthWrite:!1}),[0,.027,0]);D.rotation.x=-Math.PI/2,D.scale.set(.245,.87,1);const P=new nn(52,1,.18,4800),R=new B,I=new B;let N=0,O=0;return{cameraFor(G,{active:V,yaw:$,speed:tt,turn:Mt,delta:j,terrain:St,angle:lt,height:ct,distance:H}){if(t.visible=V,!V)return G;t.position.set(G.position.x,G.position.y-1.65+.12,G.position.z),t.rotation.y=-$,_.rotation.y=-Mt*.34,_.updateMatrix();const K=tt*j/(m+.024);N=(N-K)%(Math.PI*2),O=(O-K*.4)%(Math.PI*2),v.rotation.x=M.rotation.x=N;for(const{side:bt,elbow:W,forearm:ht,thigh:dt,shin:Y,crankArm:et,shoe:k}of C){I.set(bt*.316,.125,.126).applyMatrix4(_.matrix),$o(ht,W,I.toArray());const Z=O+(bt>0?Math.PI:0),at=[bt*.123,p[1]+.143*Math.cos(Z),p[2]+.143*Math.sin(Z)],xt=[bt*.143,.68+.078*Math.cos(Z),-.216+.035*Math.sin(Z)];$o(dt,[bt*.095,b[1],b[2]],xt),$o(Y,xt,at),$o(et,[bt*.085,p[1],p[2]],at),k.position.set(at[0],at[1]+.018,at[2]-.038)}t.updateMatrixWorld(!0);const pt=H*.59*Math.max(1,.62/G.aspect);return t.localToWorld(P.position.set(Math.sin(lt)*pt,ct*.68,Math.cos(lt)*pt)),P.position.y=Math.max(P.position.y,St(P.position.x,P.position.z)+1.4),P.lookAt(t.localToWorld(R.set(0,.8,-Math.max(0,Math.cos(lt))*.52))),P.aspect!==G.aspect&&(P.aspect=G.aspect,P.updateProjectionMatrix()),P}}}const ji=document.querySelector("#world"),Vu=document.querySelector("#status"),Ko=i=>[...document.querySelectorAll(`[data-${i}]`)].filter(t=>t instanceof HTMLButtonElement),Wu=(i,t)=>{for(const e of Ko(i))e.setAttribute("aria-pressed",String(e.dataset[i]===t))};async function Xu(i){const t=await fetch(`./data/${i}.json`);if(!t.ok)throw new Error(`Не удалось загрузить ${i} (${t.status}).`);return t.json()}function F5(i,t){const{Vector3:e,MathUtils:n}=q0,s=b5(ji,i,t),o=A5(i.roads),r=D5(),a=I5(s.scene),l=N5(s.scene),c=new nn(46,1,.35,4800),u=new J3(c,ji),f=matchMedia("(prefers-reduced-motion: reduce)").matches;u.enableDamping=!f,u.dampingFactor=.13,u.minDistance=28,u.maxDistance=3300,u.maxPolarAngle=Math.PI*.48,u.zoomSpeed=.8,u.screenSpacePanning=!1;const[h,p,d,_]=i.bounds,[m,g]=i.origin,[v,M]=i.scale,x=document.querySelector("#compass"),y=document.querySelector("#coordinates"),b=document.querySelector("#vehicle-speed"),w=document.querySelector("#cartoon-style"),S=document.querySelector("#vehicle-view"),E=document.querySelector("#superman-flight"),T=document.querySelector("#mode-help"),C=document.querySelector("#places"),D=document.querySelector("#venues"),P=document.querySelector("#pins"),R={orbit:"Стрелки или WASD — лететь. Shift — ускорение. Тяните, чтобы повернуть карту. Колесо — масштаб.",walk:"WASD или стрелки — идти. Shift — бег. Тяните по сцене, чтобы оглянуться.",bike:"Стрелки или WASD — движение и руль. V — сменить камеру. На лестнице — пешком.",car:"↑/↓ или W/S — газ и задний ход. ←/→ или A/D — руль. V — сменить камеру.",map:"Север вверху. Тяните карту, чтобы сдвинуть её."},I={walk:{eye:1.75,fov:68},bike:{eye:1.65,fov:70,speed:6.8,reverse:2.2,steer:1.9},car:{eye:1.45,fov:73,speed:10.5,reverse:3.1,steer:1.6}},N={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},O=[{id:"paintedWaterfront",name:"Парк-отель — Анапа-Океан",position:[-376,-15],walk:{position:[-348,-36],look:[-278,-43]}},{id:"upperWaterfront",name:"Верхняя набережная",position:[-348,-13],walk:{position:[-349,-19.4],look:[-265,-22]}},{id:"lowerWaterfront",name:"Нижняя набережная",position:[-348,-36],look:[-278,-43]},{id:"queuePavilion",name:"Лаундж-зона Qúeue",position:[-412.5,-21.7],walk:{position:[-414,-12],look:[-412,-21.7]}},{id:"pearlFountain",name:"Жемчужина Анапы",position:[-238,2],walk:{position:[-255,-5],look:[-238,2]}},{id:"gorgMuseum",name:"Музей «Горгиппия»",position:[-282,17],walk:{position:[-282,9],look:[-282,17],pitch:.17}},{id:"oldAnapa",name:"Старинная Анапа",position:[-503.2,-11.6],walk:{position:[-506,-38],look:[-503.2,-11.6],pitch:.13}},{id:"cityCourt",name:"Анапский городской суд",position:[-626,51],walk:{position:[-614,43],look:[-626,51],pitch:.1}},{id:"prestige",name:"Бизнес-центр «Престиж»",position:[-605,95.5],walk:{position:[-594,110],look:[-605,95.5],pitch:.1}},{id:"leninStreet",name:"Улица Ленина",position:[-636.1,0],walk:{position:[-636.1,0],look:[-646.63,-15.23],pitch:0}},{id:"marina",name:"Яхтенная марина",position:[-482,-107],walk:{position:[-452,-76],look:[-482,-107],pitch:-.1}}],V=["paintedWaterfront","lighthouse","malaya","port","marina","ocean","oldAnapa","upperWaterfront","lowerWaterfront","queuePavilion","gorgippia","gorgMuseum","parkHotel","sails","pearlFountain","gates","beach","cityCourt","prestige","leninStreet"].map(F=>{const st=i.landmarks.find(Jt=>Jt.id===F)??O.find(Jt=>Jt.id===F);if(F==="parkHotel")return{...st,walk:{position:[-167,-27],look:[-169,-7.5],pitch:.58}};if(F==="ocean")return{...st,walk:{position:[-598,-33],look:[-589.7,-16],pitch:.12}};if(st?.id!=="sails")return st;const[ot,Tt]=oo,wt=g-Tt/M,Kt=m+ot/v;return{...st,position:oo,pinHeight:5.85,walk:{position:[-306,-22],look:oo},osm:`https://www.openstreetmap.org/#map=19/${wt.toFixed(6)}/${Kt.toFixed(6)}`}}).filter(Boolean),$={lighthouse:{aim:[-9,0],offset:[-146,115,102]},malaya:{aim:[-34,35],offset:[-219,151,-43]},ocean:{aim:[7,-6],offset:[-93,103,-176],raise:14},marina:{aim:[0,0],offset:[-35,62,-90],mapAltitude:135},oldAnapa:{aim:[0,0],offset:[-17,15,-33],raise:3,mapAltitude:65},paintedWaterfront:{aim:[0,0],offset:[-55,240,-290],mapAltitude:465},upperWaterfront:{aim:[12,-10],offset:[-58,100,-155],mapAltitude:275},lowerWaterfront:{aim:[12,4],offset:[6,58,-118],mapAltitude:220},queuePavilion:{aim:[0,0],offset:[14,24,-46],mapAltitude:65},pearlFountain:{aim:[0,0],offset:[-11,16,-30],mapAltitude:52},gorgippia:{aim:[40,3],offset:[-13,94,-79],mapAltitude:127},gorgMuseum:{aim:[0,0],offset:[5,16,-28],mapAltitude:46},parkHotel:{aim:[-5,-6],offset:[-97,91,-155],raise:6},sails:{aim:[15,-1],offset:[13,31,-49],mapAltitude:69}},tt={"Верхний ярус":[{id:"laVeranda",name:"La Veranda",position:[-595.6,-28.8],walk:{position:[-606,-53],look:[-606,-23],pitch:.13}},{id:"matsoni",name:"Мацони",position:[-586,46],walk:{position:[-605,48],look:[-586,46],pitch:.1}},{...O.find(F=>F.id==="queuePavilion"),id:"queueCafe",name:"Qúeue"},{id:"more",name:"Море. Истории о еде",position:[-533,-25],walk:{position:[-533,-35],look:[-533,-25],pitch:.08}},{id:"barBQ",name:"BAR BQ",position:[-456.65,14],walk:{position:[-450,14],look:[-456.65,14],pitch:.08}}],"Нижний ярус":[{id:"captainCafe",name:"Капитан",position:[-530,-67],walk:{position:[-534.4,-79.5],look:[-530,-67],pitch:.15}},{id:"adrian",name:"Adrian Bistro",position:[-358,-30.5],walk:{position:[-359.7,-37.4],look:[-358,-30.5],pitch:.1}},{id:"bavaria",name:"Bavaria",position:[-342.2,-30.9],walk:{position:[-340,-38.1],look:[-342.2,-30.9],pitch:.13}},{id:"prichal",name:"Причал",position:[-303,-34.35],walk:{position:[-302,-40.2],look:[-303,-34.35],pitch:.2}},{id:"khinkal",name:"Хинкальная",position:[-267.5,-38.45],walk:{position:[-267.5,-44.35],look:[-267.5,-38.45],pitch:.18}},{id:"parokhod",name:"Пароходъ",position:[-229.8,-52.4],walk:{position:[-232.74,-59.75],look:[-229.8,-52.4],pitch:.34}},{id:"wineSea",name:"Вино и море",position:[-175,-54],walk:{position:[-184,-48],look:[-175,-54],pitch:.2}}]};$.queueCafe=$.queuePavilion,$.more={aim:[0,0],offset:[-13,17,-34],raise:1.3,mapAltitude:67},$.laVeranda={aim:[0,0],offset:[-12,16,-28],raise:2,mapAltitude:52},$.matsoni={aim:[0,0],offset:[-24,15,3],raise:2,mapAltitude:52},$.barBQ={aim:[0,0],offset:[25,11,-14],raise:1.3,mapAltitude:58};for(const F of tt["Нижний ярус"])$[F.id]={aim:[0,0],offset:[-9,12,-32],raise:1.8,mapAltitude:60};$.wineSea.offset=[-27,13,-12];const Mt=i.landmarks.find(F=>F.id==="gorgippia")?.position??[(h+d)/2,(p+_)/2],j=i.landmarks.find(F=>F.id==="lighthouse")?.position??Mt,St=new e,lt=new e,ct=new e,H=new e,K=new Set,pt=new Map,bt=new Set,W=new Map,ht=[];let dt="orbit",Y=null,et=0,k=0,Z=0,at=0,xt=!1;const yt=new Set,At=()=>yt.has(dt);let Bt=-.43,z=2.8,$t=5.9,Xt=null,U="";function A(F,st){const ot=(g-st/M).toFixed(5),Tt=(m+F/v).toFixed(5),wt=`${ot}/${Tt}`;wt!==U&&(U=wt,y.textContent=`${ot}° N  ${Tt}° E`,y.href=`https://www.openstreetmap.org/#map=18/${wt}`,y.title="Показать эту точку в OpenStreetMap")}function J(F,st=!1){const ot=st?$[Y?.id]:void 0,Tt=dt==="orbit"||ot?.mapAltitude?ot:void 0,wt=F[0]+(Tt?.aim[0]??0),Kt=F[1]+(Tt?.aim[1]??0),Jt=s.terrain(wt,Kt)+(Tt?.raise??0);if(u.target.set(wt,Jt,Kt),dt==="map"){const ue=(Tt?.mapAltitude??(st?440:1220))/Math.min(1,c.aspect*(Tt?.mapAltitude?.7:1.2));c.position.set(wt,Jt+Math.min(3200,ue),Kt+.1)}else{const ue=1/Math.min(1,c.aspect*(Tt?.mapAltitude?.67:1.4)),[me,ve,Ue]=Tt?.offset??(st?[-148,150,-209]:[-345,350,-485]);c.position.set(wt+me*ue,Jt+ve*ue,Kt+Ue*ue)}u.update()}function Q(F,st){if(dt==="bike"&&o.bicycleAt(F,st)==="blocked")return null;const ot=dt==="car"?o.carAt(F,st):null;if(dt==="car"&&!ot)return null;const Tt=s.walkHeight(F,st);return Tt===null||!ot?Tt:Tt+(ot.bridge?.85:.31)}function ut([F,st],ot){let Tt=null,wt=1/0;const Kt=s.terrain(F,st);for(const{points:Jt,kind:ue}of i.roads)if(["footway","pedestrian","path","living_street","steps"].includes(ue))for(let me=1;me<Jt.length;me++){const[ve,Ue]=Jt[me-1],[Un,pn]=Jt[me],Ti=Un-ve,Hn=pn-Ue,hs=Ti*Ti+Hn*Hn;if(hs<.01||ot&&ue!=="pedestrian")continue;const Dr=((F-ve)*Ti+(st-Ue)*Hn)/hs,Ir=Math.sqrt(hs);for(const As of ot?[-42,-30,30,42]:[0,-8,8]){const Eo=n.clamp(Dr+As/Ir,0,1),$n=ve+Ti*Eo,Ai=Ue+Hn*Eo,Vi=Math.hypot($n-F,Ai-st);if(Vi<(ot?24:5)||Vi>90)continue;const Ur=Vi+(ot?4*Math.abs(s.terrain($n,Ai)-Kt):0);Ur>=wt||Q($n,Ai)!==null&&(ot&&![4,10,18].every(Nr=>Q($n+(F-$n)*Nr/Vi,Ai+(st-Ai)*Nr/Vi)!==null)||(wt=Ur,Tt=[$n,Ai]))}}return Tt}function Et(F,st){const[ot,Tt]=st?.look??F;let wt=st&&Q(...st.position)!==null?st.position:null;wt??=ut(F,F===j)??ut(F,!1);for(let Jt=4;!wt&&Jt<=96;Jt+=4)for(let ue=0;!wt&&ue<Math.PI*2;ue+=Math.PI/8){const me=ot+Math.cos(ue)*Jt,ve=Tt+Math.sin(ue)*Jt;Q(me,ve)!==null&&(wt=[me,ve])}if(!wt)return!1;c.position.set(wt[0],Q(...wt)+I[dt].eye,wt[1]),et=Math.atan2(ot-wt[0],wt[1]-Tt);const Kt=s.terrain(ot,Tt)+(F===j?9:1.6);return k=st?.pitch??n.clamp(Math.atan2(Kt-c.position.y,Math.hypot(ot-wt[0],Tt-wt[1])),-.22,.32),!0}function Rt(F){const st=o.nearestCarStart(F,Q);if(!st)return!1;const{x:ot,z:Tt,height:wt,heading:Kt}=st;et=Kt+(Math.cos(et-Kt)<0?Math.PI:0);const Jt=pn=>Q(ot+Math.sin(et)*pn,Tt-Math.cos(et)*pn),ue=pn=>[1.5,3,5].find(Ti=>Jt(Ti*pn)===null)??6;ue(-1)>ue(1)&&(et+=Math.PI);const me=2.04,ve=Math.sin(et)*me,Ue=-Math.cos(et)*me,Un=Q(ot+ve,Tt+Ue);return k=0,Q(ot-ve,Tt-Ue)===null&&Un!==null?c.position.set(ot+ve,Un+I.car.eye,Tt+Ue):c.position.set(ot,wt+I.car.eye,Tt),!0}function ft(F){Y=F,Z=0;for(const[st,ot]of W)ot.setAttribute("aria-pressed",String(st===F?.id));for(const{marker:st,place:ot}of ht)st.classList.toggle("selected",ot===F);if(dt==="car")Rt(F?.position??Mt);else if(I[dt]){const st=F?.id==="gorgippia"?Xx:F?.walk??(F?.look?F:null);Et(F?.position??j,st)||Et(j)}else J(F?.position??Mt,!!F)}function gt(F){const st=I[dt]?[c.position.x,c.position.z]:null;if(dt=F,Xt=null,Z=0,K.clear(),pt.clear(),bt.clear(),u.enabled=!I[F],u.enableRotate=F==="orbit",u.mouseButtons.LEFT=F==="map"?zi.PAN:zi.ROTATE,u.touches.ONE=F==="map"?_i.PAN:_i.ROTATE,u.touches.TWO=_i.DOLLY_PAN,u.minPolarAngle=0,u.maxPolarAngle=F==="map"?1e-4:Math.PI*.48,c.fov=I[F]?.fov??46,c.updateProjectionMatrix(),document.body.dataset.mode=F,b.hidden=F!=="bike"&&F!=="car",E.hidden=F!=="orbit",Pt(),Wu("mode",F),st&&I[F]){if(F==="car"&&Rt(st))return;const ot=Q(...st);if(ot!==null){c.position.y=ot+I[F].eye;return}}ft(Y)}V.forEach((F,st)=>{const ot=document.createElement("button");ot.type="button",ot.className="place",ot.setAttribute("aria-pressed","false");const Tt=document.createElement("span");Tt.className="place-index",Tt.textContent=String(st+1).padStart(2,"0"),Tt.setAttribute("aria-hidden","true");const wt=document.createElement("span");if(wt.className="place-name",wt.textContent=F.name,ot.append(Tt,wt),ot.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,ft(F)}),C.append(ot),W.set(F.id,ot),!F.osm)return;const Kt=document.createElement("a");Kt.className="map-pin",Kt.href=F.osm,Kt.target="_blank",Kt.rel="noopener noreferrer",Kt.setAttribute("aria-label",`${F.name} в OpenStreetMap`),Kt.title=`${F.name} в OpenStreetMap`;const Jt=document.createElement("span");Jt.textContent=Tt.textContent;const ue=document.createElement("strong");ue.textContent=F.name,Kt.append(Jt,ue),P.append(Kt),ht.push({marker:Kt,place:F})});for(const[F,st]of Object.entries(tt)){const ot=document.createElement("h3");ot.textContent=F,D.append(ot);for(const Tt of st){const wt=document.createElement("button");wt.type="button",wt.className="place",wt.setAttribute("aria-pressed","false"),wt.textContent=Tt.name,wt.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,ft(Tt)}),D.append(wt),W.set(Tt.id,wt)}}for(const F of Ko("mode"))F.addEventListener("click",()=>gt(F.dataset.mode));w.addEventListener("click",()=>{const F=w.getAttribute("aria-pressed")!=="true";w.setAttribute("aria-pressed",String(F)),s.setCartoon(F)});function Pt(){S.hidden=dt!=="bike"&&dt!=="car",S.setAttribute("aria-pressed",String(At())),S.textContent=At()?dt==="car"?"Камера из салона":"Камера от первого лица":"Камера снаружи",T.textContent=At()?"Стрелки или WASD — езда. Тяните по сцене, чтобы повернуть камеру. V — вид от первого лица.":R[dt]}function Vt(){At()?yt.delete(dt):yt.add(dt),Pt()}S.addEventListener("click",Vt),E.addEventListener("click",()=>{xt=!xt,E.setAttribute("aria-pressed",String(xt))});function It(F){Wu("light",F),s.light(F)}for(const F of Ko("light"))F.addEventListener("click",()=>It(F.dataset.light));for(const F of Ko("action"))F.addEventListener("click",()=>{const st=F.dataset.action;if(st==="reset"){ft(V.find(wt=>wt.id==="paintedWaterfront"));return}const ot=st==="zoom-in";if(At()){$t=n.clamp($t+(ot?-1:1),3.8,9);return}if(I[dt]){c.fov=n.clamp(c.fov+(ot?-8:8),42,82),c.updateProjectionMatrix();return}St.copy(c.position).sub(u.target);const Tt=n.clamp(St.length()*(ot?.75:1.33),u.minDistance,u.maxDistance);c.position.copy(u.target).add(St.setLength(Tt)),u.update()});for(const F of Ko("move")){const st=F.dataset.move;F.addEventListener("pointerdown",ot=>{ot.pointerType==="touch"&&ot.preventDefault(),F.setPointerCapture(ot.pointerId),pt.set(ot.pointerId,st),bt.add(st)});for(const ot of["pointerup","pointercancel","lostpointercapture"])F.addEventListener(ot,Tt=>pt.delete(Tt.pointerId));F.addEventListener("click",ot=>{ot.detail===0&&bt.add(st)}),F.addEventListener("contextmenu",ot=>ot.preventDefault())}ji.addEventListener("pointerdown",F=>{!I[dt]||Xt!==null||(Xt={id:F.pointerId,x:F.clientX,y:F.clientY},ji.setPointerCapture(Xt.id))}),ji.addEventListener("pointermove",F=>{if(F.pointerId!==Xt?.id)return;const st=F.clientX-Xt.x,ot=F.clientY-Xt.y;At()?(Bt-=st*.009,z=n.clamp(z+ot*.018,1.55,6)):(et+=st*.003,k=n.clamp(k-ot*.003,-1.33,1.33)),Xt.x=F.clientX,Xt.y=F.clientY});for(const F of["pointerup","pointercancel","lostpointercapture"])ji.addEventListener(F,st=>{Xt?.id===st.pointerId&&(Xt=null)});window.addEventListener("keydown",F=>{const st=N[F.code],ot=(dt==="walk"||dt==="orbit")&&(F.code==="ShiftLeft"||F.code==="ShiftRight"),Tt=(dt==="car"||dt==="bike")&&F.code==="KeyV";if(!(dt==="map"||!st&&!ot&&!Tt||F.defaultPrevented||F.isComposing||F.altKey||F.ctrlKey||F.metaKey)&&!(F.target instanceof HTMLElement&&(F.target.isContentEditable||F.target.matches("input, select, textarea")))){if(Tt){F.preventDefault(),F.repeat||Vt();return}K.add(F.code),st&&(F.preventDefault(),F.repeat||bt.add(st))}}),window.addEventListener("keyup",F=>K.delete(F.code)),window.addEventListener("blur",()=>{K.clear(),pt.clear(),bt.clear(),Z=0,Xt=null});function Lt(){const F=Math.max(1,ji.clientWidth),st=Math.max(1,ji.clientHeight);s.renderer.setSize(F,st,!1),c.aspect=F/st,c.updateProjectionMatrix()}function Wt(){const F=new Set(bt);for(const st of K)N[st]&&F.add(N[st]);for(const st of pt.values())F.add(st);return[Number(F.has("forward"))-Number(F.has("back")),Number(F.has("right"))-Number(F.has("left"))]}function Zt(F,st,ot,Tt){const wt=c.position,Kt=dt==="car"?.65:.4,Jt=Math.max(1,Math.ceil(Math.hypot(F,st)/.15));function ue(me,ve){const Ue=Q(me,ve);return Ue===null||Math.abs(Ue-ot)>Kt?!1:(wt.x=me,wt.z=ve,ot=Ue,!0)}for(let me=0;me<Jt;me++)if(Tt)ue(wt.x+F/Jt,wt.z),ue(wt.x,wt.z+st/Jt);else if(!ue(wt.x+F/Jt,wt.z+st/Jt)){Z=0;break}return ot}function ee(F){const[st,ot]=Wt();at=ot;const Tt=c.position,wt=I[dt];let Kt=Q(Tt.x,Tt.z);if(dt==="walk"&&(st||ot)){const Jt=K.has("ShiftLeft")||K.has("ShiftRight"),me=(bt.size?.46:(Jt?7.8:4.8)*F)/Math.hypot(ot,st),ve=(Math.sin(et)*st+Math.cos(et)*ot)*me,Ue=(-Math.cos(et)*st+Math.sin(et)*ot)*me;Kt=Zt(ve,Ue,Kt,!0)}else if(dt!=="walk"){const Jt=dt==="bike"&&o.bicycleAt(Tt.x,Tt.z)==="push",ue=Jt?2:wt.speed,me=st*(st<0?Math.min(ue,wt.reverse):ue),ve=bt.size?Math.max(F,.06):F;Z=n.clamp(n.damp(Z,me,me===0?12:5,ve),-ue,ue);const Ue=Z<-.1;et+=ot*wt.steer*ve*(Ue?-1:1);const Un=Z*ve;Math.abs(Un)>1e-4&&(Kt=Zt(Math.sin(et)*Un,-Math.cos(et)*Un,Kt,Jt));const pn=`${Math.round(Math.abs(Z)*3.6)} км/ч${Jt?" · пешком":""}`;b.textContent!==pn&&(b.textContent=pn)}Kt!==null&&(Tt.y=n.damp(Tt.y,Kt+wt.eye,18,F)),lt.set(Math.sin(et)*Math.cos(k),Math.sin(k),-Math.cos(et)*Math.cos(k)),c.lookAt(lt.add(c.position))}function q(F){u.update();let{x:st,z:ot}=u.target;if(dt==="orbit"&&(K.size||bt.size||pt.size)){const[Tt,wt]=Wt(),Kt=Math.hypot(Tt,wt);if(Kt){const Jt=xt||K.has("ShiftLeft")||K.has("ShiftRight"),me=n.clamp(c.position.distanceTo(u.target)*.38,12,180)*(Jt?5:1)*(bt.size?Math.max(F,.08):F)/Kt;St.copy(u.target).sub(c.position).setY(0).normalize(),st+=(St.x*Tt-St.z*wt)*me,ot+=(St.z*Tt+St.x*wt)*me}}st=n.clamp(st,h,d),ot=n.clamp(ot,p,_),c.position.x+=st-u.target.x,c.position.z+=ot-u.target.z,u.target.x=st,u.target.z=ot}Lt(),window.addEventListener("resize",Lt),gt("orbit");const Ct=new URLSearchParams(window.location.search),mt=[...V,...Object.values(tt).flat()];ft(mt.find(F=>F.id===Ct.get("place"))??V[0]);const Dt=Ct.get("mode");["map","walk","bike","car"].includes(Dt)&&gt(Dt),Ct.get("light")==="sunset"&&It("sunset"),Ct.get("camera")==="outside"&&(dt==="bike"||dt==="car")&&Vt();let Nt=performance.now();s.renderer.setAnimationLoop(F=>{const st=Math.min((F-Nt)/1e3,.05);Nt=F,I[dt]?ee(st):q(st),bt.clear(),c.getWorldDirection(ct);const ot=dt==="map"?0:-Math.atan2(ct.x,-ct.z);x.style.setProperty("--north",`${ot}rad`);const Tt=I[dt]?c.position:u.target;A(Tt.x,Tt.z);for(const{marker:ve,place:Ue}of ht){const[Un,pn]=Ue.position;H.set(Un,s.terrain(Un,pn)+(Ue.pinHeight??1.2),pn).project(c),ve.hidden=!!I[dt]||H.z<-1||H.z>1||Math.abs(H.x)>.97||Math.abs(H.y)>.92,ve.hidden||(ve.style.left=`${(H.x+1)*50}%`,ve.style.top=`${(1-H.y)*50}%`)}const wt=f?0:F/1e3,Kt=At(),Jt={yaw:et,speed:Z,turn:at,delta:st,terrain:s.terrain,angle:Bt,height:z,distance:$t},ue=a.cameraFor(c,{...Jt,active:dt==="car"&&Kt}),me=l.cameraFor(ue,{...Jt,active:dt==="bike"&&Kt});s.render(me,wt),r.render(s.renderer,{mode:Kt?"":dt,aspect:c.aspect,turn:at,speed:Z,time:wt,delta:st,reducedMotion:f})})}let qu="Не удалось загрузить данные Анапы. Перезагрузите страницу.";try{const[i,t]=await Promise.all([Xu("anapa"),Xu("elevation")]);i.scale??=[111320*Math.cos(ce.degToRad(i.origin[1])),111132],qu="Не удалось открыть 3D-карту. Проверьте, доступен ли WebGL 2, и перезагрузите страницу.",F5(i,t),Vu.hidden=!0}catch(i){console.error(i),Vu.textContent=qu}
