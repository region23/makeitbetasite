(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Tc="186",Hi={ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nf=0,Xl=1,sf=2,tr=1,of=2,io=3,li=0,xn=1,Je=2,wi=0,oo=1,po=2,ql=3,Yl=4,rf=5,Ss=100,af=101,cf=102,lf=103,hf=104,uf=200,ff=201,df=202,pf=203,m0=204,g0=205,mf=206,gf=207,_f=208,xf=209,vf=210,Mf=211,Sf=212,yf=213,bf=214,Ua=0,Na=1,Fa=2,mo=3,Oa=4,Ba=5,za=6,ka=7,Lr=0,wf=1,Ef=2,hi=0,_0=1,x0=2,v0=3,M0=4,S0=5,y0=6,b0=7,w0=300,ls=301,Ts=302,er=303,ba=304,Dr=306,mr=1e3,ai=1001,As=1002,Qe=1003,E0=1004,Ho=1005,hn=1006,wa=1007,os=1008,Fn=1009,T0=1010,A0=1011,go=1012,Ac=1013,ui=1014,Qn=1015,fi=1016,Rc=1017,Cc=1018,_o=1020,R0=35902,C0=35899,P0=1021,L0=1022,jn=1023,Ri=1026,rs=1027,Pc=1028,Lc=1029,hs=1030,Dc=1031,Ic=1033,nr=33776,ir=33777,sr=33778,or=33779,Ga=35840,Ha=35841,Va=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,Za=37488,$a=37489,gr=37490,Ka=37491,Ja=37808,Qa=37809,ja=37810,tc=37811,ec=37812,nc=37813,ic=37814,sc=37815,oc=37816,rc=37817,ac=37818,cc=37819,lc=37820,hc=37821,uc=36492,fc=36494,dc=36495,pc=36283,mc=36284,_r=36285,gc=36286,Tf=3200,xr=0,Af=1,Fi="",rn="srgb",vr="srgb-linear",Mr="linear",ye="srgb",Ea=7680,Rf=519,Cf=512,Pf=513,Lf=514,Uc=515,Df=516,If=517,Nc=518,Uf=519,D0=35044,Nf=35048,Zl="300 es",ci=2e3,xo=2001;function Wd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ff(){const i=Sr("canvas");return i.style.display="block",i}const lh={};function yr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Of(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Of(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function pe(...i){i=Of(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bs(...i){const t=i.join(" ");t in lh||(lh[t]=!0,jt(...i))}function Xd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const qd={[Ua]:Na,[Fa]:za,[Oa]:ka,[mo]:Ba,[Na]:Ua,[za]:Fa,[ka]:Oa,[Ba]:mo};class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hh=1234567;const rr=Math.PI/180,br=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function I0(i,t){return(i%t+t)%t}function Yd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Zd(i,t,e){return i!==t?(e-i)/(t-i):0}function ar(i,t,e){return(1-e)*i+e*t}function $d(i,t,e,n){return ar(i,t,1-Math.exp(-e*n))}function Kd(i,t=1){return t-Math.abs(I0(i,t*2)-t)}function Jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tp(i,t){return i+Math.random()*(t-i)}function ep(i){return i*(.5-Math.random())}function np(i){i!==void 0&&(hh=i);let t=hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ip(i){return i*rr}function sp(i){return i*br}function op(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function rp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ap(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cp(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),u=r((t+n)/2),f=o((t-n)/2),h=r((t-n)/2),p=o((n-t)/2),d=r((n-t)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*d,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*d,a*c);break;case"ZYZ":i.set(l*d,l*p,a*u,a*c);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ue={DEG2RAD:rr,RAD2DEG:br,generateUUID:Ei,clamp:le,euclideanModulo:I0,mapLinear:Yd,inverseLerp:Zd,lerp:ar,damp:$d,pingpong:Kd,smoothstep:Jd,smootherstep:Qd,randInt:jd,randFloat:tp,randFloatSpread:ep,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:op,ceilPowerOfTwo:rp,floorPowerOfTwo:ap,setQuaternionFromProperEuler:cp,normalize:Ee,denormalize:ri};var uo;let xt=(uo=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},uo.prototype.isVector2=!0,uo);class Wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=o[r+0],p=o[r+1],d=o[r+2],_=o[r+3];if(f!==_||l!==h||c!==p||u!==d){let m=l*h+c*p+u*d+f*_;m<0&&(h=-h,p=-p,d=-d,_=-_,m=-m);let g=1-a;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,a=Math.sin(a*x)/M,l=l*g+h*a,c=c*g+p*a,u=u*g+d*a,f=f*g+_*a}else{l=l*g+h*a,c=c*g+p*a,u=u*g+d*a,f=f*g+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=o[r],h=o[r+1],p=o[r+2],d=o[r+3];return t[e]=a*d+u*f+l*p-c*h,t[e+1]=l*d+u*h+c*f-a*p,t[e+2]=c*d+u*p+a*h-l*f,t[e+3]=u*d-a*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(o/2),h=l(n/2),p=l(s/2),d=l(o/2);switch(r){case"XYZ":this._x=h*u*f+c*p*d,this._y=c*p*f-h*u*d,this._z=c*u*d+h*p*f,this._w=c*u*f-h*p*d;break;case"YXZ":this._x=h*u*f+c*p*d,this._y=c*p*f-h*u*d,this._z=c*u*d-h*p*f,this._w=c*u*f+h*p*d;break;case"ZXY":this._x=h*u*f-c*p*d,this._y=c*p*f+h*u*d,this._z=c*u*d+h*p*f,this._w=c*u*f-h*p*d;break;case"ZYX":this._x=h*u*f-c*p*d,this._y=c*p*f+h*u*d,this._z=c*u*d-h*p*f,this._w=c*u*f+h*p*d;break;case"YZX":this._x=h*u*f+c*p*d,this._y=c*p*f+h*u*d,this._z=c*u*d-h*p*f,this._w=c*u*f-h*p*d;break;case"XZY":this._x=h*u*f-c*p*d,this._y=c*p*f-h*u*d,this._z=c*u*d+h*p*f,this._w=c*u*f+h*p*d;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+o*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}var fo;let O=(fo=class{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),u=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+l*c+r*f-a*u,this.y=n+l*u+a*c-o*f,this.z=s+l*f+o*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nl.copy(this).projectOnVector(t),this.sub(nl)}reflect(t){return this.sub(nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fo.prototype.isVector3=!0,fo);const nl=new O,uh=new Wi,oh=class oh{constructor(t,e,n,s,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],d=n[8],_=s[0],m=s[3],g=s[6],x=s[1],M=s[4],v=s[7],S=s[2],b=s[5],w=s[8];return o[0]=r*_+a*x+l*S,o[3]=r*m+a*M+l*b,o[6]=r*g+a*v+l*w,o[1]=c*_+u*x+f*S,o[4]=c*m+u*M+f*b,o[7]=c*g+u*v+f*w,o[2]=h*_+p*x+d*S,o[5]=h*m+p*M+d*b,o[8]=h*g+p*v+d*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*r-a*c,h=a*l-u*o,p=c*o-r*l,d=e*f+n*h+s*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/d;return t[0]=f*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*r)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(il.makeScale(t,e)),this}rotate(t){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(il.makeRotation(-t)),this}translate(t,e){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;let ie=oh;const il=new ie,fh=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){const i={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ye&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ye&&(s.r=ro(s.r),s.g=ro(s.g),s.b=ro(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vr]:{primaries:t,whitePoint:n,transfer:Mr,toXYZ:fh,fromXYZ:dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:fh,fromXYZ:dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const de=lp();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ds;class Bf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Sr("canvas")),Ds.width=t.width,Ds.height=t.height;const s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Vi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vi(e[n]/255)*255):e[n]=Vi(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hp=0;class Fc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(sl(s[r].image)):o.push(sl(s[r]))}else o=sl(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let up=0;const ol=new O;class an extends Xi{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=ai,s=ai,o=hn,r=os,a=jn,l=Fn,c=an.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ei(),this.name="",this.source=new Fc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case As:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case As:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=w0;an.DEFAULT_ANISOTROPY=1;const rh=class rh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],d=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(d-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(d+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(p+1)/2,S=(g+1)/2,b=(u+h)/4,w=(f+_)/4,y=(d+m)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=b/n,o=w/n):v>S?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=b/s,o=y/s):S<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(S),n=w/o,s=y/o),this.set(n,s,o,e),this}let x=Math.sqrt((m-d)*(m-d)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-d)/x,this.y=(f-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;let Ge=rh;class zf extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},o=new an(s),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends zf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class U0 extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kf extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ec=class Ec{constructor(t,e,n,s,o,r,a,l,c,u,f,h,p,d,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,u,f,h,p,d,_,m)}set(t,e,n,s,o,r,a,l,c,u,f,h,p,d,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=p,g[7]=d,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ec().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),o=1/Is.setFromMatrixColumn(t,1).length(),r=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const h=r*u,p=r*f,d=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+d*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=d+p*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,d=c*u,_=c*f;e[0]=h+_*a,e[4]=d*a-p,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-a,e[2]=p*a-d,e[6]=_+h*a,e[10]=r*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,d=c*u,_=c*f;e[0]=h-_*a,e[4]=-r*f,e[8]=d+p*a,e[1]=p+d*a,e[5]=r*u,e[9]=_-h*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const h=r*u,p=r*f,d=a*u,_=a*f;e[0]=l*u,e[4]=d*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-d,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,p=r*c,d=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=d*f+p,e[1]=f,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+d,e[10]=h-_*f}else if(t.order==="XZY"){const h=r*l,p=r*c,d=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=r*u,e[9]=p*f-d,e[2]=d*f-p,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fp,t,dp)}lookAt(t,e,n){const s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Ki.crossVectors(n,Hn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Ki.crossVectors(n,Hn)),Ki.normalize(),Or.crossVectors(Hn,Ki),s[0]=Ki.x,s[4]=Or.x,s[8]=Hn.x,s[1]=Ki.y,s[5]=Or.y,s[9]=Hn.y,s[2]=Ki.z,s[6]=Or.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],d=n[2],_=n[6],m=n[10],g=n[14],x=n[3],M=n[7],v=n[11],S=n[15],b=s[0],w=s[4],y=s[8],E=s[12],T=s[1],C=s[5],D=s[9],P=s[13],R=s[2],I=s[6],N=s[10],F=s[14],G=s[3],H=s[7],$=s[11],et=s[15];return o[0]=r*b+a*T+l*R+c*G,o[4]=r*w+a*C+l*I+c*H,o[8]=r*y+a*D+l*N+c*$,o[12]=r*E+a*P+l*F+c*et,o[1]=u*b+f*T+h*R+p*G,o[5]=u*w+f*C+h*I+p*H,o[9]=u*y+f*D+h*N+p*$,o[13]=u*E+f*P+h*F+p*et,o[2]=d*b+_*T+m*R+g*G,o[6]=d*w+_*C+m*I+g*H,o[10]=d*y+_*D+m*N+g*$,o[14]=d*E+_*P+m*F+g*et,o[3]=x*b+M*T+v*R+S*G,o[7]=x*w+M*C+v*I+S*H,o[11]=x*y+M*D+v*N+S*$,o[15]=x*E+M*P+v*F+S*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],d=t[3],_=t[7],m=t[11],g=t[15],x=l*p-c*h,M=a*p-c*f,v=a*h-l*f,S=r*p-c*u,b=r*h-l*u,w=r*f-a*u;return e*(_*x-m*M+g*v)-n*(d*x-m*S+g*b)+s*(d*M-_*S+g*w)-o*(d*v-_*b+m*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(r*u-a*c)-n*(o*u-a*l)+s*(o*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],d=t[12],_=t[13],m=t[14],g=t[15],x=e*a-n*r,M=e*l-s*r,v=e*c-o*r,S=n*l-s*a,b=n*c-o*a,w=s*c-o*l,y=u*_-f*d,E=u*m-h*d,T=u*g-p*d,C=f*m-h*_,D=f*g-p*_,P=h*g-p*m,R=x*P-M*D+v*C+S*T-b*E+w*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=(a*P-l*D+c*C)*I,t[1]=(s*D-n*P-o*C)*I,t[2]=(_*w-m*b+g*S)*I,t[3]=(h*b-f*w-p*S)*I,t[4]=(l*T-r*P-c*E)*I,t[5]=(e*P-s*T+o*E)*I,t[6]=(m*v-d*w-g*M)*I,t[7]=(u*w-h*v+p*M)*I,t[8]=(r*D-a*T+c*y)*I,t[9]=(n*T-e*D-o*y)*I,t[10]=(d*b-_*v+g*x)*I,t[11]=(f*v-u*b-p*x)*I,t[12]=(a*E-r*C-l*y)*I,t[13]=(e*C-n*E+s*y)*I,t[14]=(_*M-d*S-m*x)*I,t[15]=(u*S-f*M+h*x)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,u=r+r,f=a+a,h=o*c,p=o*u,d=o*f,_=r*u,m=r*f,g=a*f,x=l*c,M=l*u,v=l*f,S=n.x,b=n.y,w=n.z;return s[0]=(1-(_+g))*S,s[1]=(p+v)*S,s[2]=(d-M)*S,s[3]=0,s[4]=(p-v)*b,s[5]=(1-(h+g))*b,s[6]=(m+x)*b,s[7]=0,s[8]=(d+M)*w,s[9]=(m-x)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Is.set(s[0],s[1],s[2]).length();const a=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();o<0&&(r=-r),ei.copy(this);const c=1/r,u=1/a,f=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,e.setFromRotationMatrix(ei),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,o,r,a=ci,l=!1){const c=this.elements,u=2*o/(e-t),f=2*o/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let d,_;if(l)d=o/(r-o),_=r*o/(r-o);else if(a===ci)d=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===xo)d=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=ci,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),p=-(n+s)/(n-s);let d,_;if(l)d=1/(r-o),_=r/(r-o);else if(a===ci)d=-2/(r-o),_=-(r+o)/(r-o);else if(a===xo)d=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ec.prototype.isMatrix4=!0;let Pe=Ec;const Is=new O,ei=new Pe,fp=new O(0,0,0),dp=new O(1,1,1),Ki=new O,Or=new O,Hn=new O,ph=new Pe,mh=new Wi;class Ci{constructor(t=0,e=0,n=0,s=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pp=0;const gh=new O,Us=new Wi,Li=new Pe,Br=new O,Co=new O,mp=new O,gp=new Wi,_h=new O(1,0,0),xh=new O(0,1,0),vh=new O(0,0,1),Mh={type:"added"},_p={type:"removed"},Ns={type:"childadded",child:null},rl={type:"childremoved",child:null};class be extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new O,e=new Ci,n=new Wi,s=new O(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ie}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(vh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Co,Br,this.up):Li.lookAt(Br,Co,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(Li),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mh),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mh),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),h=r(t.skeletons),p=r(t.animations),d=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),d.length>0&&(n.nodes=d)}return n.object=s,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}be.DEFAULT_UP=new O(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Me extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xp={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,d=.005;c.inputState.pinching&&h>p+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},zr={h:0,s:0,l:0};function al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=I0(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=al(r,o,t+1/3),this.g=al(r,o,t),this.b=al(r,o,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(o){o!==void 0&&parseFloat(o)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return de.workingToColorSpace(dn.copy(this),t),Math.round(le(dn.r*255,0,255))*65536+Math.round(le(dn.g*255,0,255))*256+Math.round(le(dn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(dn.copy(this),e);const n=dn.r,s=dn.g,o=dn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const f=r-a;switch(c=u<=.5?f/(r+a):f/(2-r-a),r){case n:l=(s-o)/f+(s<o?6:0);break;case s:l=(o-n)/f+2;break;case o:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=rn){de.workingToColorSpace(dn.copy(this),t);const e=dn.r,n=dn.g,s=dn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(zr);const n=ar(Ji.h,zr.h,e),s=ar(Ji.s,zr.s,e),o=ar(Ji.l,zr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const dn=new $t;$t.NAMES=Gf;class Oc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new Oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class F0 extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ni=new O,Di=new O,cl=new O,Ii=new O,Fs=new O,Os=new O,Sh=new O,ll=new O,hl=new O,ul=new O,fl=new Ge,dl=new Ge,pl=new Ge;class qn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ni.subVectors(t,e),s.cross(ni);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){ni.subVectors(s,e),Di.subVectors(n,e),cl.subVectors(t,e);const r=ni.dot(ni),a=ni.dot(Di),l=ni.dot(cl),c=Di.dot(Di),u=Di.dot(cl),f=r*c-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,d=(r*u-a*l)*h;return o.set(1-p-d,d,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ii.x),l.addScaledVector(r,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return fl.setScalar(0),dl.setScalar(0),pl.setScalar(0),fl.fromBufferAttribute(t,e),dl.fromBufferAttribute(t,n),pl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(fl,o.x),r.addScaledVector(dl,o.y),r.addScaledVector(pl,o.z),r}static isFrontFacing(t,e,n,s){return ni.subVectors(n,e),Di.subVectors(t,e),ni.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ni.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return qn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Fs.subVectors(s,n),Os.subVectors(o,n),ll.subVectors(t,n);const l=Fs.dot(ll),c=Os.dot(ll);if(l<=0&&c<=0)return e.copy(n);hl.subVectors(t,s);const u=Fs.dot(hl),f=Os.dot(hl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Fs,r);ul.subVectors(t,o);const p=Fs.dot(ul),d=Os.dot(ul);if(d>=0&&p<=d)return e.copy(o);const _=p*c-l*d;if(_<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(Os,a);const m=u*d-p*f;if(m<=0&&f-u>=0&&p-d>=0)return Sh.subVectors(o,s),a=(f-u)/(f-u+(p-d)),e.copy(s).addScaledVector(Sh,a);const g=1/(m+_+h);return r=_*g,a=h*g,e.copy(n).addScaledVector(Fs,r).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class us{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ii):ii.fromBufferAttribute(o,r),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),Gr.subVectors(this.max,Po),Bs.subVectors(t.a,Po),zs.subVectors(t.b,Po),ks.subVectors(t.c,Po),Qi.subVectors(zs,Bs),ji.subVectors(ks,zs),ds.subVectors(Bs,ks);let e=[0,-Qi.z,Qi.y,0,-ji.z,ji.y,0,-ds.z,ds.y,Qi.z,0,-Qi.x,ji.z,0,-ji.x,ds.z,0,-ds.x,-Qi.y,Qi.x,0,-ji.y,ji.x,0,-ds.y,ds.x,0];return!ml(e,Bs,zs,ks,Gr)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,Bs,zs,ks,Gr))?!1:(Hr.crossVectors(Qi,ji),e=[Hr.x,Hr.y,Hr.z],ml(e,Bs,zs,ks,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ui=[new O,new O,new O,new O,new O,new O,new O,new O],ii=new O,kr=new us,Bs=new O,zs=new O,ks=new O,Qi=new O,ji=new O,ds=new O,Po=new O,Gr=new O,Hr=new O,ps=new O;function ml(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ps.fromArray(i,o);const a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=t.dot(ps),c=e.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ye=new O,Vr=new xt;let vp=0;class Yn extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=D0,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),o=Ee(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class O0 extends Yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class B0 extends Yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Mp=new us,Lo=new O,gl=new O;class bo{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const e=Lo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(gl)),this.expandByPoint(Lo.copy(t.center).sub(gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Sp=0;const $n=new Pe,_l=new be,Gs=new O,Vn=new us,Do=new us,nn=new O;class Le extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wd(t)?B0:O0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ie().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,n){return $n.makeTranslation(t,e,n),this.applyMatrix4($n),this}scale(t,e,n){return $n.makeScale(t,e,n),this.applyMatrix4($n),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new se(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Vn.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Vn.min,Do.min),Vn.expandByPoint(nn),nn.addVectors(Vn.max,Do.max),Vn.expandByPoint(nn)):(Vn.expandByPoint(Do.min),Vn.expandByPoint(Do.max))}Vn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)nn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(nn));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),nn.add(Gs)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new O,l[y]=new O;const c=new O,u=new O,f=new O,h=new xt,p=new xt,d=new xt,_=new O,m=new O;function g(y,E,T){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,T),h.fromBufferAttribute(o,y),p.fromBufferAttribute(o,E),d.fromBufferAttribute(o,T),u.sub(c),f.sub(c),p.sub(h),d.sub(h);const C=1/(p.x*d.y-d.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(d.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-d.x).multiplyScalar(C),a[y].add(_),a[E].add(_),a[T].add(_),l[y].add(m),l[E].add(m),l[T].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,E=x.length;y<E;++y){const T=x[y],C=T.start,D=T.count;for(let P=C,R=C+D;P<R;P+=3)g(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new O,v=new O,S=new O,b=new O;function w(y){S.fromBufferAttribute(s,y),b.copy(S);const E=a[y];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(b,E);const C=v.dot(l[y])<0?-1:1;r.setXYZW(y,M.x,M.y,M.z,C)}for(let y=0,E=x.length;y<E;++y){const T=x[y],C=T.start,D=T.count;for(let P=C,R=C+D;P<R;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new O,o=new O,r=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(t)for(let h=0,p=t.count;h<p;h+=3){const d=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,d),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,o),f.subVectors(s,o),u.cross(f),a.fromBufferAttribute(n,d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),o.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,o),f.subVectors(s,o),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,d=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let g=0;g<u;g++)h[d++]=c[p++]}return new Yn(h,u,f)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const o=t.morphAttributes;for(const c in o){const u=[],f=o[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=D0,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const bn=new O;class wr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),o=Ee(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Yn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xl=new O,yp=new O,bp=new ie;class Mi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xl.subVectors(n,e).cross(yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(xl),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bp.getNormalMatrix(t),s=this.coplanarPoint(xl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let wp=0;class fs extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=oo,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=m0,this.blendDst=g0,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class z0 extends fs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const Io=new O,Vs=new O,Ws=new O,Xs=new xt,Uo=new xt,Vf=new Pe,Wr=new O,No=new O,Xr=new O,yh=new xt,vl=new xt,bh=new xt;class Wf extends be{constructor(t=new z0){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hf(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new wr(n,3,0,!1)),Hs.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),Vf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;qr(Wr.set(-.5,-.5,0),Ws,r,Vs,s,o),qr(No.set(.5,-.5,0),Ws,r,Vs,s,o),qr(Xr.set(.5,.5,0),Ws,r,Vs,s,o),yh.set(0,0),vl.set(1,0),bh.set(1,1);let a=t.ray.intersectTriangle(Wr,No,Xr,!1,Io);if(a===null&&(qr(No.set(-.5,.5,0),Ws,r,Vs,s,o),vl.set(0,1),a=t.ray.intersectTriangle(Wr,Xr,No,!1,Io),a===null))return;const l=t.ray.origin.distanceTo(Io);l<t.near||l>t.far||e.push({distance:l,point:Io.clone(),uv:qn.getInterpolation(Io,Wr,No,Xr,yh,vl,bh,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qr(i,t,e,n,s,o){Xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Uo.x=o*Xs.x-s*Xs.y,Uo.y=s*Xs.x+o*Xs.y):Uo.copy(Xs),i.copy(t),i.x+=Uo.x,i.y+=Uo.y,i.applyMatrix4(Vf)}const Ni=new O,Ml=new O,Yr=new O,Zr=new O;class k0{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ml.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),Zr.copy(this.origin).sub(Ml);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Yr),a=Zr.dot(this.direction),l=-Zr.dot(Yr),c=Zr.lengthSq(),u=Math.abs(1-r*r);let f,h,p,d;if(u>0)if(f=r*l-a,h=r*a-l,d=o*u,f>=0)if(h>=-d)if(h<=d){const _=1/u;f*=_,h*=_,p=f*(f+r*h+2*a)+h*(r*f+h+2*l)+c}else h=o,f=Math.max(0,-(r*h+a)),p=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(r*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-d?(f=Math.max(0,-(-r*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c):h<=d?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(f=Math.max(0,-(r*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c);else h=r>0?-o:o,f=Math.max(0,-(r*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ml).addScaledVector(Yr,h),p}intersectSphere(t,e){if(t.radius<0)return null;Ni.subVectors(t.center,this.origin);const n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(o=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(o=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,s,o){const r=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-r.x,h=t.y-r.y,p=t.z-r.z,d=e.x-r.x,_=e.y-r.y,m=e.z-r.z,g=n.x-r.x,x=n.y-r.y,M=n.z-r.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(u);let w,y,E,T,C,D,P,R,I,N,F,G;if(v>=S&&v>=b?(E=l,D=f,I=d,G=g,l>=0?(w=c,y=u,T=h,C=p,P=_,R=m,N=x,F=M):(w=u,y=c,T=p,C=h,P=m,R=_,N=M,F=x)):S>=b?(E=c,D=h,I=_,G=x,c>=0?(w=u,y=l,T=p,C=f,P=m,R=d,N=M,F=g):(w=l,y=u,T=f,C=p,P=d,R=m,N=g,F=M)):(E=u,D=p,I=m,G=M,u>=0?(w=l,y=c,T=f,C=h,P=d,R=_,N=g,F=x):(w=c,y=l,T=h,C=f,P=_,R=d,N=x,F=g)),E===0)return null;const H=w/E,$=y/E,et=1/E,St=T-H*D,bt=C-$*D,rt=P-H*I,st=R-$*I,ct=N-H*G,B=F-$*G,Z=ct*st-B*rt,ht=St*B-bt*ct,yt=rt*bt-st*St;if(s){if(Z<0||ht<0||yt<0)return null}else if((Z<0||ht<0||yt<0)&&(Z>0||ht>0||yt>0))return null;const V=Z+ht+yt;if(V===0)return null;const at=et*(Z*D+ht*I+yt*G);return(V>0?at<0:at>0)?null:this.at(at/V,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pn extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wh=new Pe,ms=new k0,$r=new bo,Eh=new O,Kr=new O,Jr=new O,Qr=new O,Sl=new O,jr=new O,Th=new O,ta=new O;class ae extends be{constructor(t=new Le,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){jr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],f=o[l];u!==0&&(Sl.fromBufferAttribute(f,t),r?jr.addScaledVector(Sl,u):jr.addScaledVector(Sl.sub(e),u))}e.add(jr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(o),ms.copy(t.ray).recast(t.near),!($r.containsPoint(ms.origin)===!1&&(ms.intersectSphere($r,Eh)===null||ms.origin.distanceToSquared(Eh)>(t.far-t.near)**2))&&(wh.copy(o).invert(),ms.copy(t.ray).applyMatrix4(wh),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,_=h.length;d<_;d++){const m=h[d],g=r[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,S=M;v<S;v+=3){const b=a.getX(v),w=a.getX(v+1),y=a.getX(v+2);s=ea(this,g,t,n,c,u,f,b,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const d=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=d,g=_;m<g;m+=3){const x=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=ea(this,r,t,n,c,u,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,_=h.length;d<_;d++){const m=h[d],g=r[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,S=M;v<S;v+=3){const b=v,w=v+1,y=v+2;s=ea(this,g,t,n,c,u,f,b,w,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const d=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=d,g=_;m<g;m+=3){const x=m,M=m+1,v=m+2;s=ea(this,r,t,n,c,u,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ep(i,t,e,n,s,o,r,a){let l;if(t.side===xn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===li,a),l===null)return null;ta.copy(a),ta.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:i}}function ea(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Kr),i.getVertexPosition(l,Jr),i.getVertexPosition(c,Qr);const u=Ep(i,t,e,n,Kr,Jr,Qr,Th);if(u){const f=new O;qn.getBarycoord(Th,Kr,Jr,Qr,f),s&&(u.uv=qn.getInterpolatedAttribute(s,a,l,c,f,new xt)),o&&(u.uv1=qn.getInterpolatedAttribute(o,a,l,c,f,new xt)),r&&(u.normal=qn.getInterpolatedAttribute(r,a,l,c,f,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};qn.getNormal(Kr,Jr,Qr,h.normal),u.face=h,u.barycoord=f}return u}class Bc extends an{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Qe,u=Qe,f,h){super(null,r,a,l,c,u,s,o,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $l extends Yn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qs=new Pe,Ah=new Pe,na=[],Rh=new us,Tp=new Pe,Fo=new ae,Oo=new bo;class zn extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new us),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Rh.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Rh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Oo.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(n),t.ray.intersectsSphere(Oo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,qs),Ah.multiplyMatrices(n,qs),Fo.matrixWorld=Ah,Fo.raycast(t,na);for(let r=0,a=na.length;r<a;r++){const l=na[r];l.instanceId=o,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bc(new Float32Array(s*this.count),s,this.count,Pc,Qn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;return o[l]=a,o.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gs=new bo,Ap=new xt(.5,.5),ia=new O;class zc{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,o=new Mi,r=new Mi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],u=o[4],f=o[5],h=o[6],p=o[7],d=o[8],_=o[9],m=o[10],g=o[11],x=o[12],M=o[13],v=o[14],S=o[15];if(s[0].setComponents(c-r,p-u,g-d,S-x).normalize(),s[1].setComponents(c+r,p+u,g+d,S+x).normalize(),s[2].setComponents(c+a,p+f,g+_,S+M).normalize(),s[3].setComponents(c-a,p-f,g-_,S-M).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,g-m,S-v).normalize();else if(s[4].setComponents(c-l,p-h,g-m,S-v).normalize(),e===ci)s[5].setComponents(c+l,p+h,g+m,S+v).normalize();else if(e===xo)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const e=Ap.distanceTo(t.center);return gs.radius=.7071067811865476+e,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class G0 extends an{constructor(t=[],e=ls,n,s,o,r,a,l,c,u){super(t,e,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kc extends an{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vo extends an{constructor(t,e,n=ui,s,o,r,a=Qe,l=Qe,c,u=Ri,f=1){if(u!==Ri&&u!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Xf extends vo{constructor(t,e=ui,n=ls,s,o,r=Qe,a=Qe,l,c=Ri){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,o,r,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class H0 extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Be extends Le{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],u=[],f=[];let h=0,p=0;d("z","y","x",-1,-1,n,e,t,r,o,0),d("z","y","x",1,-1,n,e,-t,r,o,1),d("x","z","y",1,1,t,n,e,s,r,2),d("x","z","y",1,-1,t,n,-e,s,r,3),d("x","y","z",1,-1,t,e,n,s,o,4),d("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function d(_,m,g,x,M,v,S,b,w,y,E){const T=v/w,C=S/y,D=v/2,P=S/2,R=b/2,I=w+1,N=y+1;let F=0,G=0;const H=new O;for(let $=0;$<N;$++){const et=$*C-P;for(let St=0;St<I;St++){const bt=St*T-D;H[_]=bt*x,H[m]=et*M,H[g]=R,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[g]=b>0?1:-1,u.push(H.x,H.y,H.z),f.push(St/w),f.push(1-$/y),F+=1}}for(let $=0;$<y;$++)for(let et=0;et<w;et++){const St=h+et+I*$,bt=h+et+I*($+1),rt=h+(et+1)+I*($+1),st=h+(et+1)+I*$;l.push(St,bt,st),l.push(bt,rt,st),G+=6}a.addGroup(p,G,E),p+=G,h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wo extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new O,u=new xt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const p=n+f/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[h]/t+1)/2,u.y=(r[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vn extends Le{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const u=[],f=[],h=[],p=[];let d=0;const _=[],m=n/2;let g=0;x(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2));function x(){const v=new O,S=new O;let b=0;const w=(e-t)/n;for(let y=0;y<=o;y++){const E=[],T=y/o,C=T*(e-t)+t;for(let D=0;D<=s;D++){const P=D/s,R=P*l+a,I=Math.sin(R),N=Math.cos(R);S.x=C*I,S.y=-T*n+m,S.z=C*N,f.push(S.x,S.y,S.z),v.set(I,w,N).normalize(),h.push(v.x,v.y,v.z),p.push(P,1-T),E.push(d++)}_.push(E)}for(let y=0;y<s;y++)for(let E=0;E<o;E++){const T=_[E][y],C=_[E+1][y],D=_[E+1][y+1],P=_[E][y+1];(t>0||E!==0)&&(u.push(T,C,P),b+=3),(e>0||E!==o-1)&&(u.push(C,D,P),b+=3)}c.addGroup(g,b,0),g+=b}function M(v){const S=d,b=new xt,w=new O;let y=0;const E=v===!0?t:e,T=v===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*T,0),h.push(0,T,0),p.push(.5,.5),d++;const C=d;for(let D=0;D<=s;D++){const R=D/s*l+a,I=Math.cos(R),N=Math.sin(R);w.x=E*N,w.y=m*T,w.z=E*I,f.push(w.x,w.y,w.z),h.push(0,T,0),b.x=I*.5+.5,b.y=N*.5*T+.5,p.push(b.x,b.y),d++}for(let D=0;D<s;D++){const P=S+D,R=C+D;v===!0?u.push(R,R+1,P):u.push(R+1,R,P),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gc extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),u(),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(o.slice(),3)),this.setAttribute("uv",new se(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new O,v=new O,S=new O;for(let b=0;b<e.length;b+=3)p(e[b+0],M),p(e[b+1],v),p(e[b+2],S),l(M,v,S,x)}function l(x,M,v,S){const b=S+1,w=[];for(let y=0;y<=b;y++){w[y]=[];const E=x.clone().lerp(v,y/b),T=M.clone().lerp(v,y/b),C=b-y;for(let D=0;D<=C;D++)D===0&&y===b?w[y][D]=E:w[y][D]=E.clone().lerp(T,D/C)}for(let y=0;y<b;y++)for(let E=0;E<2*(b-y)-1;E++){const T=Math.floor(E/2);E%2===0?(h(w[y][T+1]),h(w[y+1][T]),h(w[y][T])):(h(w[y][T+1]),h(w[y+1][T+1]),h(w[y+1][T]))}}function c(x){const M=new O;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(x),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function u(){const x=new O;for(let M=0;M<o.length;M+=3){x.x=o[M+0],x.y=o[M+1],x.z=o[M+2];const v=m(x)/2/Math.PI+.5,S=g(x)/Math.PI+.5;r.push(v,1-S)}d(),f()}function f(){for(let x=0;x<r.length;x+=6){const M=r[x+0],v=r[x+2],S=r[x+4],b=Math.max(M,v,S),w=Math.min(M,v,S);b>.9&&w<.1&&(M<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),S<.2&&(r[x+4]+=1))}}function h(x){o.push(x.x,x.y,x.z)}function p(x,M){const v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function d(){const x=new O,M=new O,v=new O,S=new O,b=new xt,w=new xt,y=new xt;for(let E=0,T=0;E<o.length;E+=9,T+=6){x.set(o[E+0],o[E+1],o[E+2]),M.set(o[E+3],o[E+4],o[E+5]),v.set(o[E+6],o[E+7],o[E+8]),b.set(r[T+0],r[T+1]),w.set(r[T+2],r[T+3]),y.set(r[T+4],r[T+5]),S.copy(x).add(M).add(v).divideScalar(3);const C=m(S);_(b,T+0,x,C),_(w,T+2,M,C),_(y,T+4,v,C)}}function _(x,M,v,S){S<0&&x.x===1&&(r[M]=x.x-1),v.x===0&&v.z===0&&(r[M]=S/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.vertices,t.indices,t.radius,t.detail)}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const u=n[s],h=n[s+1]-u,p=(r-u)/h;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new xt:new O);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new O,s=[],o=[],r=[],a=new O,l=new Pe;for(let p=0;p<=t;p++){const d=p/t;s[p]=this.getTangentAt(d,new O)}o[0]=new O,r[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const d=Math.acos(le(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,d))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(le(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let d=1;d<=t;d++)o[d].applyMatrix4(l.makeRotationAxis(s[d],p*d)),r[d].crossVectors(s[d],o[d])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hc extends pi{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qf extends Hc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function V0(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,u,f){let h=(r-o)/c-(a-o)/(c+u)+(a-r)/u,p=(a-r)/u-(l-r)/(u+f)+(l-a)/f;h*=u,p*=u,s(r,a,h,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Ch=new O,Ph=new O,yl=new V0,bl=new V0,wl=new V0;class Vc extends pi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%o]:(Ph.subVectors(s[0],s[1]).add(s[0]),c=Ph);const f=s[a%o],h=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Ch.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),d<1e-4&&(d=_),m<1e-4&&(m=_),yl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,d,_,m),bl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,d,_,m),wl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,d,_,m)}else this.curveType==="catmullrom"&&(yl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),bl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),wl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(yl.calc(l),bl.calc(l),wl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Lh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Rp(i,t){const e=1-i;return e*e*t}function Cp(i,t){return 2*(1-i)*i*t}function Pp(i,t){return i*i*t}function cr(i,t,e,n){return Rp(i,t)+Cp(i,e)+Pp(i,n)}function Lp(i,t){const e=1-i;return e*e*e*t}function Dp(i,t){const e=1-i;return 3*e*e*i*t}function Ip(i,t){return 3*(1-i)*i*i*t}function Up(i,t){return i*i*i*t}function lr(i,t,e,n,s){return Lp(i,t)+Dp(i,e)+Ip(i,n)+Up(i,s)}class W0 extends pi{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(lr(t,s.x,o.x,r.x,a.x),lr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yf extends pi{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(lr(t,s.x,o.x,r.x,a.x),lr(t,s.y,o.y,r.y,a.y),lr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class X0 extends pi{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zf extends pi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q0 extends pi{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(cr(t,s.x,o.x,r.x),cr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wc extends pi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(cr(t,s.x,o.x,r.x),cr(t,s.y,o.y,r.y),cr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Y0 extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(Lh(a,l.x,c.x,u.x,f.x),Lh(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new xt().fromArray(s))}return this}}var _c=Object.freeze({__proto__:null,ArcCurve:qf,CatmullRomCurve3:Vc,CubicBezierCurve:W0,CubicBezierCurve3:Yf,EllipseCurve:Hc,LineCurve:X0,LineCurve3:Zf,QuadraticBezierCurve:q0,QuadraticBezierCurve3:Wc,SplineCurve:Y0});class $f extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new _c[s.type]().fromJSON(s))}return this}}class Kl extends $f{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new X0(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new q0(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new W0(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Y0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Hc(t,e,n,s,o,r,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xc extends Kl{constructor(t){super(t),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Kl().fromJSON(s))}return this}}function Np(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Kf(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=kp(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<s;h+=e){const p=i[h],d=i[h+1];p<a&&(a=p),d<l&&(l=d),p>u&&(u=p),d>f&&(f=d)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Er(o,r,e,a,l,c,0),r}function Kf(i,t,e,n,s){let o;if(s===Jp(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=Dh(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=Dh(r/n|0,i[r],i[r+1],o);return o&&Mo(o,o.next)&&(Ar(o),o=o.next),o}function Rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mo(e,e.next)||He(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Er(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Xp(i,n,s,o);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(o?Op(i,n,s,o):Fp(i)){t.push(l.i,i.i,c.i),Ar(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Bp(Rs(i),t),Er(i,t,e,n,s,o,2)):r===2&&zp(i,t,e,n,s,o):Er(Rs(i),t,e,n,s,o,1);break}}}function Fp(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,o,r),f=Math.min(a,l,c),h=Math.max(s,o,r),p=Math.max(a,l,c);let d=n.next;for(;d!==t;){if(d.x>=u&&d.x<=h&&d.y>=f&&d.y<=p&&Vo(s,a,o,l,r,c,d.x,d.y)&&He(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Op(i,t,e,n){const s=i.prev,o=i,r=i.next;if(He(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,u=s.y,f=o.y,h=r.y,p=Math.min(a,l,c),d=Math.min(u,f,h),_=Math.max(a,l,c),m=Math.max(u,f,h),g=Jl(p,d,t,e,n),x=Jl(_,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=g&&v&&v.z<=x;){if(M.x>=p&&M.x<=_&&M.y>=d&&M.y<=m&&M!==s&&M!==r&&Vo(a,u,l,f,c,h,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=_&&v.y>=d&&v.y<=m&&v!==s&&v!==r&&Vo(a,u,l,f,c,h,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=_&&M.y>=d&&M.y<=m&&M!==s&&M!==r&&Vo(a,u,l,f,c,h,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=d&&v.y<=m&&v!==s&&v!==r&&Vo(a,u,l,f,c,h,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Bp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Mo(n,s)&&Qf(n,e,e.next,s)&&Tr(n,s)&&Tr(s,n)&&(t.push(n.i,e.i,s.i),Ar(e),Ar(e.next),e=i=s),e=e.next}while(e!==i);return Rs(e)}function zp(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Zp(r,a)){let l=jf(r,a);r=Rs(r,r.next),l=Rs(l,l.next),Er(r,t,e,n,s,o,0),Er(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function kp(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Kf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Yp(c))}s.sort(Gp);for(let o=0;o<s.length;o++)e=Hp(s[o],e);return e}function Gp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hp(i,t){const e=Vp(i,t);if(!e)return t;const n=jf(e,i);return Rs(n,n.next),Rs(e,e.next)}function Vp(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(Mo(i,e))return e;do{if(Mo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jf(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Tr(e,i)&&(f<u||f===u&&(e.x>r.x||e.x===r.x&&Wp(r,e)))&&(r=e,u=f)}e=e.next}while(e!==a);return r}function Wp(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function Xp(i,t,e,n){let s=i;do s.z===0&&(s.z=Jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qp(s)}function qp(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function Jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jf(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Vo(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&Jf(i,t,e,n,s,o,r,a)}function Zp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$p(i,t)&&(Tr(i,t)&&Tr(t,i)&&Kp(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Mo(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mo(i,t){return i.x===t.x&&i.y===t.y}function Qf(i,t,e,n){const s=oa(He(i,t,e)),o=oa(He(i,t,n)),r=oa(He(e,n,i)),a=oa(He(e,n,t));return!!(s!==o&&r!==a||s===0&&sa(i,e,t)||o===0&&sa(i,n,t)||r===0&&sa(e,i,n)||a===0&&sa(e,t,n))}function sa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function oa(i){return i>0?1:i<0?-1:0}function $p(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Tr(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function Kp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jf(i,t){const e=Ql(i.i,i.x,i.y),n=Ql(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Dh(i,t,e,n){const s=Ql(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jp(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Qp{static triangulate(t,e,n=2){return Np(t,e,n)}}class bi{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return bi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Ih(t),Uh(n,t);let r=t.length;e.forEach(Ih);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Uh(n,e[l]);const a=Qp.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Ih(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ir extends Le{constructor(t=new Xc([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:jp;let M,v=!1,S,b,w,y;if(g){M=g.getSpacedPoints(u),v=!0,h=!1;const q=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(u,q),b=new O,w=new O,y=new O}h||(m=0,p=0,d=0,_=0);const E=a.extractPoints(c);let T=E.shape;const C=E.holes;if(!bi.isClockWise(T)){T=T.reverse();for(let q=0,it=C.length;q<it;q++){const k=C[q];bi.isClockWise(k)&&(C[q]=k.reverse())}}function P(q){const k=10000000000000001e-36;let Y=q[0];for(let K=1;K<=q.length;K++){const _t=K%q.length,dt=q[_t],Et=dt.x-Y.x,Dt=dt.y-Y.y,z=Et*Et+Dt*Dt,Qt=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(Y.x),Math.abs(Y.y)),Kt=k*Qt*Qt;if(z<=Kt){q.splice(_t,1),K--;continue}Y=dt}}P(T),C.forEach(P);const R=C.length,I=T;for(let q=0;q<R;q++){const it=C[q];T=T.concat(it)}function N(q,it,k){return it||pe("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(it,k)}const F=T.length;function G(q,it,k){let Y,K,_t;const dt=q.x-it.x,Et=q.y-it.y,Dt=k.x-q.x,z=k.y-q.y,Qt=dt*dt+Et*Et,Kt=dt*z-Et*Dt;if(Math.abs(Kt)>Number.EPSILON){const U=Math.sqrt(Qt),A=Math.sqrt(Dt*Dt+z*z),J=it.x-Et/U,nt=it.y+dt/U,lt=k.x-z/A,Mt=k.y+Dt/A,Rt=((lt-J)*z-(Mt-nt)*Dt)/(dt*z-Et*Dt);Y=J+dt*Rt-q.x,K=nt+Et*Rt-q.y;const ut=Y*Y+K*K;if(ut<=2)return new xt(Y,K);_t=Math.sqrt(ut/2)}else{let U=!1;dt>Number.EPSILON?Dt>Number.EPSILON&&(U=!0):dt<-Number.EPSILON?Dt<-Number.EPSILON&&(U=!0):Math.sign(Et)===Math.sign(z)&&(U=!0),U?(Y=-Et,K=dt,_t=Math.sqrt(Qt)):(Y=dt,K=Et,_t=Math.sqrt(Qt/2))}return new xt(Y/_t,K/_t)}const H=[];for(let q=0,it=I.length,k=it-1,Y=q+1;q<it;q++,k++,Y++)k===it&&(k=0),Y===it&&(Y=0),H[q]=G(I[q],I[k],I[Y]);const $=[];let et,St=H.concat();for(let q=0,it=R;q<it;q++){const k=C[q];et=[];for(let Y=0,K=k.length,_t=K-1,dt=Y+1;Y<K;Y++,_t++,dt++)_t===K&&(_t=0),dt===K&&(dt=0),et[Y]=G(k[Y],k[_t],k[dt]);$.push(et),St=St.concat(et)}let bt;if(m===0)bt=bi.triangulateShape(I,C);else{const q=[],it=[];for(let k=0;k<m;k++){const Y=k/m,K=p*Math.cos(Y*Math.PI/2),_t=d*Math.sin(Y*Math.PI/2)+_;for(let dt=0,Et=I.length;dt<Et;dt++){const Dt=N(I[dt],H[dt],_t);ht(Dt.x,Dt.y,-K),Y===0&&q.push(Dt)}for(let dt=0,Et=R;dt<Et;dt++){const Dt=C[dt];et=$[dt];const z=[];for(let Qt=0,Kt=Dt.length;Qt<Kt;Qt++){const U=N(Dt[Qt],et[Qt],_t);ht(U.x,U.y,-K),Y===0&&z.push(U)}Y===0&&it.push(z)}}bt=bi.triangulateShape(q,it)}const rt=bt.length,st=d+_;for(let q=0;q<F;q++){const it=h?N(T[q],St[q],st):T[q];v?(w.copy(S.normals[0]).multiplyScalar(it.x),b.copy(S.binormals[0]).multiplyScalar(it.y),y.copy(M[0]).add(w).add(b),ht(y.x,y.y,y.z)):ht(it.x,it.y,0)}for(let q=1;q<=u;q++)for(let it=0;it<F;it++){const k=h?N(T[it],St[it],st):T[it];v?(w.copy(S.normals[q]).multiplyScalar(k.x),b.copy(S.binormals[q]).multiplyScalar(k.y),y.copy(M[q]).add(w).add(b),ht(y.x,y.y,y.z)):ht(k.x,k.y,f/u*q)}for(let q=m-1;q>=0;q--){const it=q/m,k=p*Math.cos(it*Math.PI/2),Y=d*Math.sin(it*Math.PI/2)+_;for(let K=0,_t=I.length;K<_t;K++){const dt=N(I[K],H[K],Y);ht(dt.x,dt.y,f+k)}for(let K=0,_t=C.length;K<_t;K++){const dt=C[K];et=$[K];for(let Et=0,Dt=dt.length;Et<Dt;Et++){const z=N(dt[Et],et[Et],Y);v?ht(z.x,z.y+M[u-1].y,M[u-1].x+k):ht(z.x,z.y,f+k)}}}ct(),B();function ct(){const q=s.length/3;if(h){let it=0,k=F*it;for(let Y=0;Y<rt;Y++){const K=bt[Y];yt(K[2]+k,K[1]+k,K[0]+k)}it=u+m*2,k=F*it;for(let Y=0;Y<rt;Y++){const K=bt[Y];yt(K[0]+k,K[1]+k,K[2]+k)}}else{for(let it=0;it<rt;it++){const k=bt[it];yt(k[2],k[1],k[0])}for(let it=0;it<rt;it++){const k=bt[it];yt(k[0]+F*u,k[1]+F*u,k[2]+F*u)}}n.addGroup(q,s.length/3-q,0)}function B(){const q=s.length/3;let it=0;Z(I,it),it+=I.length;for(let k=0,Y=C.length;k<Y;k++){const K=C[k];Z(K,it),it+=K.length}n.addGroup(q,s.length/3-q,1)}function Z(q,it){let k=q.length;for(;--k>=0;){const Y=k;let K=k-1;K<0&&(K=q.length-1);for(let _t=0,dt=u+m*2;_t<dt;_t++){const Et=F*_t,Dt=F*(_t+1),z=it+Y+Et,Qt=it+K+Et,Kt=it+K+Dt,U=it+Y+Dt;V(z,Qt,Kt,U)}}}function ht(q,it,k){l.push(q),l.push(it),l.push(k)}function yt(q,it,k){at(q),at(it),at(k);const Y=s.length/3,K=x.generateTopUV(n,s,Y-3,Y-2,Y-1);vt(K[0]),vt(K[1]),vt(K[2])}function V(q,it,k,Y){at(q),at(it),at(Y),at(it),at(k),at(Y);const K=s.length/3,_t=x.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);vt(_t[0]),vt(_t[1]),vt(_t[3]),vt(_t[1]),vt(_t[2]),vt(_t[3])}function at(q){s.push(l[q*3+0]),s.push(l[q*3+1]),s.push(l[q*3+2])}function vt(q){o.push(q.x),o.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return t1(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _c[s.type]().fromJSON(s)),new Ir(n,t.options)}}const jp={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new xt(o,r),new xt(a,l),new xt(c,u)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],p=t[s*3+1],d=t[s*3+2],_=t[o*3],m=t[o*3+1],g=t[o*3+2];return Math.abs(a-u)<Math.abs(r-c)?[new xt(r,1-l),new xt(c,1-f),new xt(h,1-d),new xt(_,1-g)]:[new xt(a,1-l),new xt(u,1-f),new xt(p,1-d),new xt(m,1-g)]}};function t1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pi extends Gc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pi(t.radius,t.detail)}}class di extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,p=[],d=[],_=[],m=[];for(let g=0;g<u;g++){const x=g*h-r;for(let M=0;M<c;M++){const v=M*f-o;d.push(v,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const M=x+c*g,v=x+c*(g+1),S=x+1+c*(g+1),b=x+1+c*g;p.push(M,v,b),p.push(v,S,b)}this.setIndex(p),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new di(t.width,t.height,t.widthSegments,t.heightSegments)}}class qc extends Le{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=t;const h=(e-t)/s,p=new O,d=new xt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const g=o+m/n*r;p.x=f*Math.cos(g),p.y=f*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),d.x=(p.x/e+1)/2,d.y=(p.y/e+1)/2,u.push(d.x,d.y)}f+=h}for(let _=0;_<s;_++){const m=_*(n+1);for(let g=0;g<n;g++){const x=g+m,M=x,v=x+n+1,S=x+n+2,b=x+1;a.push(M,v,b),a.push(v,S,b)}}this.setIndex(a),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class An extends Le{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],f=new O,h=new O,p=[],d=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],M=g/n,v=r+M*a,S=t*Math.cos(v),b=Math.sqrt(t*t-S*S);let w=0;g===0&&r===0?w=.5/e:g===n&&l===Math.PI&&(w=-.5/e);for(let y=0;y<=e;y++){const E=y/e,T=s+E*o;f.x=-b*Math.cos(T),f.y=S,f.z=b*Math.sin(T),d.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(E+w,1-M),x.push(c++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const M=u[g][x+1],v=u[g][x],S=u[g+1][x],b=u[g+1][x+1];(g!==0||r>0)&&p.push(M,v,b),(g!==n-1||l<Math.PI)&&p.push(v,S,b)}this.setIndex(p),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ti extends Le{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new O,p=new O,d=new O;for(let _=0;_<=n;_++){const m=r+_/n*a;for(let g=0;g<=s;g++){const x=g/s*o;p.x=(t+e*Math.cos(m))*Math.cos(x),p.y=(t+e*Math.cos(m))*Math.sin(x),p.z=e*Math.sin(m),c.push(p.x,p.y,p.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(p,h).normalize(),u.push(d.x,d.y,d.z),f.push(g/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){const g=(s+1)*_+m-1,x=(s+1)*(_-1)+m-1,M=(s+1)*(_-1)+m,v=(s+1)*_+m;l.push(g,x,v),l.push(x,M,v)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Eo extends Le{constructor(t=new Wc(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new O,l=new O,c=new xt;let u=new O;const f=[],h=[],p=[],d=[];_(),this.setIndex(d),this.setAttribute("position",new se(f,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2));function _(){for(let M=0;M<e;M++)m(M);m(o===!1?e:0),x(),g()}function m(M){u=t.getPointAt(M/e,u);const v=r.normals[M],S=r.binormals[M];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,y=Math.sin(w),E=-Math.cos(w);l.x=E*v.x+y*S.x,l.y=E*v.y+y*S.y,l.z=E*v.z+y*S.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const S=(s+1)*(M-1)+(v-1),b=(s+1)*M+(v-1),w=(s+1)*M+v,y=(s+1)*(M-1)+v;d.push(S,b,y),d.push(b,w,y)}}function x(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Eo(new _c[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function So(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Nh(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Nh(s[0])){const o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function wn(i){const t={};for(let e=0;e<i.length;e++){const n=So(i[e]);for(const s in n)t[s]=n[s]}return t}function Nh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function e1(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function td(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const ed={clone:So,merge:wn};var n1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n1,this.fragmentShader=i1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=So(t.uniforms),this.uniformsGroups=e1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class nd extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hr extends fs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $t(16777215),this.specular=new $t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Lr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class te extends fs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Lr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class id extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sd extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Aa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Fh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Fh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class od{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],d=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rd=new od;class Yc{constructor(t){this.manager=t!==void 0?t:rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ys=new WeakMap;class ad extends Yc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Aa.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0);else{let f=Ys.get(r);f===void 0&&(f=[],Ys.set(r,f)),f.push({onLoad:e,onError:s})}return r}const a=Sr("img");function l(){u(),e&&e(this);const f=Ys.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}Ys.delete(this),o.manager.itemEnd(t)}function c(f){u(),s&&s(f),Aa.remove(`image:${t}`);const h=Ys.get(this)||[];for(let p=0;p<h.length;p++){const d=h[p];d.onError&&d.onError(f)}Ys.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Aa.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}}class Z0 extends Yc{constructor(t){super(t)}load(t,e,n,s){const o=new an,r=new ad(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class Zc extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class $0 extends Zc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const El=new Pe,Oh=new O,Bh=new O;class K0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zc,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(El,t.coordinateSystem,t.reversedDepth);const o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,l=s?s.x/o.x:0,c=s?s.y/o.y:0;t.coordinateSystem===xo||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(El)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ra=new O,aa=new Wi,gi=new O;class J0 extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ra,aa,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,aa,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ra,aa,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,aa,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new O,zh=new xt,kh=new xt;class ln extends J0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,zh,kh),e.subVectors(kh,zh)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class s1 extends K0{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class cd extends Zc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new s1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class $c extends J0{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class o1 extends K0{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q0 extends Zc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new o1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Zs=-90,$s=1;class ld extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Zs,$s,t,e);s.layers=this.layers,this.add(s);const o=new ln(Zs,$s,t,e);o.layers=this.layers,this.add(o);const r=new ln(Zs,$s,t,e);r.layers=this.layers,this.add(r);const a=new ln(Zs,$s,t,e);a.layers=this.layers,this.add(a);const l=new ln(Zs,$s,t,e);l.layers=this.layers,this.add(l);const c=new ln(Zs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class hd extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class jl{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ah=class ah{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};ah.prototype.isMatrix2=!0;let t0=ah;class ud extends Xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Gh(i,t,e,n){const s=r1(n);switch(e){case P0:return i*t;case Pc:return i*t/s.components*s.byteLength;case Lc:return i*t/s.components*s.byteLength;case hs:return i*t*2/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case L0:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Ic:return i*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sr:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case Ga:case Va:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case qa:case Za:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:case gr:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uc:case fc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _r:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r1(i){switch(i){case Fn:case T0:return{byteLength:1,components:1};case go:case A0:case fi:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case ui:case Ac:case Qn:return{byteLength:4,components:1};case R0:case C0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);function fd(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function a1(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,d)=>p.start-d.start);let h=0;for(let p=1;p<f.length;p++){const d=f[h],_=f[p];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,d=f.length;p<d;p++){const _=f[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var c1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l1=`#ifdef USE_ALPHAHASH
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
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p1=`#ifdef USE_AOMAP
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
#endif`,m1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g1=`#ifdef USE_BATCHING
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
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S1=`#ifdef USE_IRIDESCENCE
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
#endif`,y1=`#ifdef USE_BUMPMAP
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,L1=`#define PI 3.141592653589793
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
} // validated`,D1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I1=`vec3 transformedNormal = objectNormal;
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
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B1="gl_FragColor = linearToOutputTexel( gl_FragColor );",z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,K1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t2=`#ifdef USE_ENVMAP
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
#endif`,e2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o2=`PhysicalMaterial material;
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
#endif`,r2=`uniform sampler2D dfgLUT;
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
}`,a2=`
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
#endif`,c2=`#if defined( RE_IndirectDiffuse )
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
#endif`,l2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,u2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x2=`#if defined( USE_POINTS_UV )
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
#endif`,v2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w2=`#ifdef USE_MORPHTARGETS
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
#endif`,E2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,L2=`#ifdef USE_NORMALMAP
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
#endif`,D2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y2=`float getShadowMask() {
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
}`,Z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$2=`#ifdef USE_SKINNING
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
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J2=`#ifdef USE_SKINNING
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
#endif`,Q2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
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
}`,mm=`#if DEPTH_PACKING == 3200
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
}`,gm=`#define DISTANCE
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
}`,_m=`#define DISTANCE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,Tm=`#define MATCAP
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Nm=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:c1,alphahash_pars_fragment:l1,alphamap_fragment:h1,alphamap_pars_fragment:u1,alphatest_fragment:f1,alphatest_pars_fragment:d1,aomap_fragment:p1,aomap_pars_fragment:m1,batching_pars_vertex:g1,batching_vertex:_1,begin_vertex:x1,beginnormal_vertex:v1,bsdfs:M1,iridescence_fragment:S1,bumpmap_pars_fragment:y1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:w1,clipping_planes_pars_vertex:E1,clipping_planes_vertex:T1,color_fragment:A1,color_pars_fragment:R1,color_pars_vertex:C1,color_vertex:P1,common:L1,cube_uv_reflection_fragment:D1,defaultnormal_vertex:I1,displacementmap_pars_vertex:U1,displacementmap_vertex:N1,emissivemap_fragment:F1,emissivemap_pars_fragment:O1,colorspace_fragment:B1,colorspace_pars_fragment:z1,envmap_fragment:k1,envmap_common_pars_fragment:G1,envmap_pars_fragment:H1,envmap_pars_vertex:V1,envmap_physical_pars_fragment:t2,envmap_vertex:W1,fog_vertex:X1,fog_pars_vertex:q1,fog_fragment:Y1,fog_pars_fragment:Z1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:K1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:Q1,lights_pars_begin:j1,lights_toon_fragment:e2,lights_toon_pars_fragment:n2,lights_phong_fragment:i2,lights_phong_pars_fragment:s2,lights_physical_fragment:o2,lights_physical_pars_fragment:r2,lights_fragment_begin:a2,lights_fragment_maps:c2,lights_fragment_end:l2,lightprobes_pars_fragment:h2,logdepthbuf_fragment:u2,logdepthbuf_pars_fragment:f2,logdepthbuf_pars_vertex:d2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:g2,map_particle_fragment:_2,map_particle_pars_fragment:x2,metalnessmap_fragment:v2,metalnessmap_pars_fragment:M2,morphinstance_vertex:S2,morphcolor_vertex:y2,morphnormal_vertex:b2,morphtarget_pars_vertex:w2,morphtarget_vertex:E2,normal_fragment_begin:T2,normal_fragment_maps:A2,normal_pars_fragment:R2,normal_pars_vertex:C2,normal_vertex:P2,normalmap_pars_fragment:L2,clearcoat_normal_fragment_begin:D2,clearcoat_normal_fragment_maps:I2,clearcoat_pars_fragment:U2,iridescence_pars_fragment:N2,opaque_fragment:F2,packing:O2,premultiplied_alpha_fragment:B2,project_vertex:z2,dithering_fragment:k2,dithering_pars_fragment:G2,roughnessmap_fragment:H2,roughnessmap_pars_fragment:V2,shadowmap_pars_fragment:W2,shadowmap_pars_vertex:X2,shadowmap_vertex:q2,shadowmask_pars_fragment:Y2,skinbase_vertex:Z2,skinning_pars_vertex:$2,skinning_vertex:K2,skinnormal_vertex:J2,specularmap_fragment:Q2,specularmap_pars_fragment:j2,tonemapping_fragment:tm,tonemapping_pars_fragment:em,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:om,uv_vertex:rm,worldpos_vertex:am,background_vert:cm,background_frag:lm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:fm,cube_frag:dm,depth_vert:pm,depth_frag:mm,distance_vert:gm,distance_frag:_m,equirect_vert:xm,equirect_frag:vm,linedashed_vert:Mm,linedashed_frag:Sm,meshbasic_vert:ym,meshbasic_frag:bm,meshlambert_vert:wm,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Pm,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Im,meshtoon_vert:Um,meshtoon_frag:Nm,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Gm},Nt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},oi={basic:{uniforms:wn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:wn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:wn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:wn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:wn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new $t(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:wn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:wn([Nt.points,Nt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:wn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:wn([Nt.common,Nt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:wn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:wn([Nt.sprite,Nt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:wn([Nt.common,Nt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:wn([Nt.lights,Nt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};oi.physical={uniforms:wn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const ca={r:0,b:0,g:0},Hm=new Pe,dd=new ie;dd.set(-1,0,0,0,1,0,0,0,1);function Vm(i,t,e,n,s,o){const r=new $t(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function p(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const v=x.backgroundBlurriness>0;M=t.get(M,v)}return M}function d(x){let M=!1;const v=p(x);v===null?m(r,a):v&&v.isColor&&(m(v,1),M=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,M){const v=p(M);v&&(v.isCubeTexture||v.mapping===Dr)?(c===void 0&&(c=new ae(new Be(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:So(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dd),c.material.toneMapped=de.getTransfer(v.colorSpace)!==ye,(u!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ae(new di(2,2),new kn({name:"BackgroundMaterial",uniforms:So(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=de.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(ca,td(i)),e.buffers.color.setClear(ca.r,ca.g,ca.b,M,o)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,M=1){r.set(x),a=M,m(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(r,a)},render:d,addToRenderList:_,dispose:g}}function Wm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let o=s,r=!1;function a(C,D,P,R,I){let N=!1;const F=f(C,R,P,D);o!==F&&(o=F,c(o.object)),N=p(C,R,P,I),N&&d(C,R,P,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,v(C,D,P,R),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function f(C,D,P,R){const I=R.wireframe===!0;let N=n[D.id];N===void 0&&(N={},n[D.id]=N);const F=C.isInstancedMesh===!0?C.id:0;let G=N[F];G===void 0&&(G={},N[F]=G);let H=G[P.id];H===void 0&&(H={},G[P.id]=H);let $=H[I];return $===void 0&&($=h(l()),H[I]=$),$}function h(C){const D=[],P=[],R=[];for(let I=0;I<e;I++)D[I]=0,P[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:R,object:C,attributes:{},index:null}}function p(C,D,P,R){const I=o.attributes,N=D.attributes;let F=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){const et=I[H];let St=N[H];if(St===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),et===void 0||et.attribute!==St||St&&et.data!==St.data)return!0;F++}return o.attributesNum!==F||o.index!==R}function d(C,D,P,R){const I={},N=D.attributes;let F=0;const G=P.getAttributes();for(const H in G)if(G[H].location>=0){let et=N[H];et===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(et=C.instanceColor));const St={};St.attribute=et,et&&et.data&&(St.data=et.data),I[H]=St,F++}o.attributes=I,o.attributesNum=F,o.index=R}function _(){const C=o.newAttributes;for(let D=0,P=C.length;D<P;D++)C[D]=0}function m(C){g(C,0)}function g(C,D){const P=o.newAttributes,R=o.enabledAttributes,I=o.attributeDivisors;P[C]=1,R[C]===0&&(i.enableVertexAttribArray(C),R[C]=1),I[C]!==D&&(i.vertexAttribDivisor(C,D),I[C]=D)}function x(){const C=o.newAttributes,D=o.enabledAttributes;for(let P=0,R=D.length;P<R;P++)D[P]!==C[P]&&(i.disableVertexAttribArray(P),D[P]=0)}function M(C,D,P,R,I,N,F){F===!0?i.vertexAttribIPointer(C,D,P,I,N):i.vertexAttribPointer(C,D,P,R,I,N)}function v(C,D,P,R){_();const I=R.attributes,N=P.getAttributes(),F=D.defaultAttributeValues;for(const G in N){const H=N[G];if(H.location>=0){let $=I[G];if($===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),$!==void 0){const et=$.normalized,St=$.itemSize,bt=t.get($);if(bt===void 0)continue;const rt=bt.buffer,st=bt.type,ct=bt.bytesPerElement,B=st===i.INT||st===i.UNSIGNED_INT||$.gpuType===Ac;if($.isInterleavedBufferAttribute){const Z=$.data,ht=Z.stride,yt=$.offset;if(Z.isInstancedInterleavedBuffer){for(let V=0;V<H.locationSize;V++)g(H.location+V,Z.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let V=0;V<H.locationSize;V++)m(H.location+V);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let V=0;V<H.locationSize;V++)M(H.location+V,St/H.locationSize,st,et,ht*ct,(yt+St/H.locationSize*V)*ct,B)}else{if($.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)g(H.location+Z,$.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Z=0;Z<H.locationSize;Z++)M(H.location+Z,St/H.locationSize,st,et,St*ct,St/H.locationSize*Z*ct,B)}}else if(F!==void 0){const et=F[G];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(H.location,et);break;case 3:i.vertexAttrib3fv(H.location,et);break;case 4:i.vertexAttrib4fv(H.location,et);break;default:i.vertexAttrib1fv(H.location,et)}}}}x()}function S(){E();for(const C in n){const D=n[C];for(const P in D){const R=D[P];for(const I in R){const N=R[I];for(const F in N)u(N[F].object),delete N[F];delete R[I]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const P in D){const R=D[P];for(const I in R){const N=R[I];for(const F in N)u(N[F].object),delete N[F];delete R[I]}}delete n[C.id]}function w(C){for(const D in n){const P=n[D];for(const R in P){const I=P[R];if(I[C.id]===void 0)continue;const N=I[C.id];for(const F in N)u(N[F].object),delete N[F];delete I[C.id]}}}function y(C){for(const D in n){const P=n[D],R=C.isInstancedMesh===!0?C.id:0,I=P[R];if(I!==void 0){for(const N in I){const F=I[N];for(const G in F)u(F[G].object),delete F[G];delete I[N]}delete P[R],Object.keys(P).length===0&&delete n[D]}}}function E(){T(),r=!0,o!==s&&(o=s,c(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Xm(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function qm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==jn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const y=w===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Fn&&w!==Qn&&!y&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(jt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:b}}function Ym(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Mi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const d=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||d===null||d.length===0||o&&!m)o?u(null):c();else{const x=o?0:n,M=x*4;let v=g.clippingState||null;l.value=v,v=u(d,h,M,p);for(let S=0;S!==M;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,d){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,d!==!0||m===null){const g=p+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=p;M!==_;++M,v+=4)r.copy(f[M]).applyMatrix4(x,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const so=4,Zm=6,$m=20,Km=256,Bo=new $c,Hh=new $t;let Tl=null,Al=0,Rl=0,Cl=!1;const Jm=new O,_s=new O;class e0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=Jm}=o;Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,Al,Rl),this._renderer.xr.enabled=Cl,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:fi,format:jn,colorSpace:vr,depthBuffer:!1},s=Vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qm(o)),this._blurMaterial=tg(o,t,e),this._ggxMaterial=jm(o,t,e)}return s}_compileMaterial(t){const e=new ae(new Le,t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,n,s,o){const l=new ln(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Hh),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new Be,new Pn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,g=!0):(m.color.copy(Hh),g=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[M],o.y,o.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[M],o.z)):(l.up.set(0,c[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[M]));const S=this._cubeSize;Ks(s,v*S,M>2?S:0,S,S),f.setRenderTarget(s),g&&f.render(_,l),f.render(t,l)}f.toneMapping=p,f.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;const a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,p=f*h,{_lodMax:d}=this,_=this._sizeLods[n],m=3*_*(n>d-so?n-d+so:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=d-e,Ks(o,m,g,3*_,2*_),s.setRenderTarget(o),s.render(a,Bo),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=d-n,Ks(t,m,g,3*_,2*_),s.setRenderTarget(t),s.render(a,Bo)}_blur(t,e,n,s){const o=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,r),this._blurPass(o,t,n,n,r)}_blurPass(t,e,n,s,o){const r=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-so?s-this._lodMax+so:0),h=4*(this._cubeSize-u);Ks(e,f,h,3*u,2*u),r.setRenderTarget(e),r.render(l,Bo)}}function Qm(i){const t=[],e=[];let n=i;const s=i-so+1+Zm;for(let o=0;o<s;o++){const r=Math.pow(2,n);t.push(r);const a=1/(r-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,p=3,d=new Float32Array(p*h*f),_=new Float32Array(p*h*f);for(let g=0;g<f;g++){const x=g%3*2/3-1,M=g>2?0:-1,v=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];d.set(v,p*h*g);for(let S=0;S<h;S++){const b=u[S*2]*2-1,w=u[S*2+1]*2-1;g===0?_s.set(1,w,b):g===1?_s.set(-b,1,-w):g===2?_s.set(-b,w,1):g===3?_s.set(-1,w,-b):g===4?_s.set(-b,-1,w):_s.set(b,w,-1),_s.toArray(_,(g*h+S)*p)}}const m=new Le;m.setAttribute("position",new Yn(d,p)),m.setAttribute("outputDirection",new Yn(_,p)),e.push(new ae(m,null)),n>so&&n--}return{lodMeshes:e,sizeLods:t}}function Vh(i,t,e){const n=new ti(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jm(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function tg(i,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Wh(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Xh(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class j0 extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new G0(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Be(5,5,5),o=new kn({name:"CubemapFromEquirect",uniforms:So(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:wi});o.uniforms.tEquirect.value=e;const r=new ae(s,o),a=e.minFilter;return e.minFilter===os&&(e.minFilter=hn),new ld(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}function eg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?r(h):o(h)}function o(h){if(h&&h.isTexture){const p=h.mapping;if(p===er||p===ba)if(t.has(h)){const d=t.get(h).texture;return a(d,h.mapping)}else{const d=h.image;if(d&&d.height>0){const _=new j0(d.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){const p=h.mapping,d=p===er||p===ba,_=p===ls||p===Ts;if(d||_){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new e0(i)),m=d?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const x=h.image;return d&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new e0(i)),m=d?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===er?h.mapping=ls:p===ba&&(h.mapping=Ts),h}function l(h){let p=0;const d=6;for(let _=0;_<d;_++)h[_]!==void 0&&p++;return p===d}function c(h){const p=h.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function ng(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function ig(i,t,e,n){const s={},o=new WeakMap;function r(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const d in h.attributes)t.remove(h.attributes[d]);h.removeEventListener("dispose",r),delete s[h.id];const p=o.get(h);p&&(t.remove(p),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,d=f.attributes.position;let _=0;if(d===void 0)return;if(p!==null){const x=p.array;_=p.version;for(let M=0,v=x.length;M<v;M+=3){const S=x[M+0],b=x[M+1],w=x[M+2];h.push(S,b,b,w,w,S)}}else{const x=d.array;_=d.version;for(let M=0,v=x.length/3-1;M<v;M+=3){const S=M+0,b=M+1,w=M+2;h.push(S,b,b,w,w,S)}}const m=new(d.count>=65535?B0:O0)(h,1);m.version=_;const g=o.get(f);g&&t.remove(g),o.set(f,m)}function u(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function sg(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,h){i.drawElements(n,h,o,f*r),e.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,o,f*r,p),e.update(h,n,p))}function u(f,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,o,f,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function og(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:pe("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rg(i,t,e){const n=new WeakMap,s=new Ge;function o(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,d=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),d===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*S*4*f),w=new U0(b,v,S,f);w.type=Qn,w.needsUpdate=!0;const y=M*4;for(let T=0;T<f;T++){const C=m[T],D=g[T],P=x[T],R=v*S*4*T;for(let I=0;I<C.count;I++){const N=I*y;p===!0&&(s.fromBufferAttribute(C,I),b[R+N+0]=s.x,b[R+N+1]=s.y,b[R+N+2]=s.z,b[R+N+3]=0),d===!0&&(s.fromBufferAttribute(D,I),b[R+N+4]=s.x,b[R+N+5]=s.y,b[R+N+6]=s.z,b[R+N+7]=0),_===!0&&(s.fromBufferAttribute(P,I),b[R+N+8]=s.x,b[R+N+9]=s.y,b[R+N+10]=s.z,b[R+N+11]=P.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new xt(v,S)},n.set(a,h),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const d=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",d),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function ag(i,t,e,n,s){let o=new WeakMap;function r(c){const u=s.render.frame,f=c.geometry,h=t.get(c,f);if(o.get(h)!==u&&(t.update(h),o.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;o.get(p)!==u&&(p.update(),o.set(p,u))}return h}function a(){o=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const cg={[_0]:"LINEAR_TONE_MAPPING",[x0]:"REINHARD_TONE_MAPPING",[v0]:"CINEON_TONE_MAPPING",[M0]:"ACES_FILMIC_TONE_MAPPING",[y0]:"AGX_TONE_MAPPING",[b0]:"NEUTRAL_TONE_MAPPING",[S0]:"CUSTOM_TONE_MAPPING"};function lg(i,t,e,n,s,o){const r=new ti(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Le;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));const u=new nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ae(c,u),h=new $c(-1,1,1,-1,0,1);let p=null,d=null,_=!1,m,g=null,x=[],M=!1;this.setSize=function(v,S){r.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<x.length;b++){const w=x[b];w.setSize&&w.setSize(v,S)}},this.setEffects=function(v){x=v,M=x.length>0&&x[0].isRenderPass===!0;const S=r.width,b=r.height;x.length>0&&a===null&&(a=new ti(S,b,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(S,b,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<x.length;w++){const y=x[w];y.setSize&&y.setSize(S,b)}},this.begin=function(v,S){if(_||v.toneMapping===hi&&x.length===0)return!1;if(g=S,S!==null){const b=S.width,w=S.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return M===!1&&v.setRenderTarget(r),m=v.toneMapping,v.toneMapping=hi,!0},this.hasRenderPass=function(){return M},this.end=function(v,S){v.toneMapping=m,_=!0;let b=r,w=a;for(let y=0;y<x.length;y++){const E=x[y];E.enabled!==!1&&(E.render(v,w,b,S),E.needsSwap!==!1&&(b=w,w=w===a?l:a))}if(p!==v.outputColorSpace||d!==v.toneMapping){p=v.outputColorSpace,d=v.toneMapping,u.defines={},de.getTransfer(p)===ye&&(u.defines.SRGB_TRANSFER="");const y=cg[d];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(g),v.render(f,h),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const pd=new an,n0=new vo(1,1),md=new U0,gd=new kf,_d=new G0,qh=[],Yh=[],Zh=new Float32Array(16),$h=new Float32Array(9),Kh=new Float32Array(4);function To(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=qh[s];if(o===void 0&&(o=new Float32Array(s),qh[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jc(i,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Kh.set(n),i.uniformMatrix2fv(this.addr,!1,Kh),en(e,n)}}function mg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;$h.set(n),i.uniformMatrix3fv(this.addr,!1,$h),en(e,n)}}function gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Zh.set(n),i.uniformMatrix4fv(this.addr,!1,Zh),en(e,n)}}function _g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function Sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function Eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(n0.compareFunction=e.isReversedDepthBuffer()?Nc:Uc,o=n0):o=pd,e.setTexture2D(t||o,s)}function Tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function Ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_d,s)}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||md,s)}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return fg;case 35666:return dg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return yg;case 36295:return bg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(i,t){i.uniform1fv(this.addr,t)}function Lg(i,t){const e=To(t,this.size,2);i.uniform2fv(this.addr,e)}function Dg(i,t){const e=To(t,this.size,3);i.uniform3fv(this.addr,e)}function Ig(i,t){const e=To(t,this.size,4);i.uniform4fv(this.addr,e)}function Ug(i,t){const e=To(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ng(i,t){const e=To(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fg(i,t){const e=To(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Og(i,t){i.uniform1iv(this.addr,t)}function Bg(i,t){i.uniform2iv(this.addr,t)}function zg(i,t){i.uniform3iv(this.addr,t)}function kg(i,t){i.uniform4iv(this.addr,t)}function Gg(i,t){i.uniform1uiv(this.addr,t)}function Hg(i,t){i.uniform2uiv(this.addr,t)}function Vg(i,t){i.uniform3uiv(this.addr,t)}function Wg(i,t){i.uniform4uiv(this.addr,t)}function Xg(i,t,e){const n=this.cache,s=t.length,o=Jc(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=n0:r=pd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function qg(i,t,e){const n=this.cache,s=t.length,o=Jc(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||gd,o[r])}function Yg(i,t,e){const n=this.cache,s=t.length,o=Jc(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||_d,o[r])}function Zg(i,t,e){const n=this.cache,s=t.length,o=Jc(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||md,o[r])}function $g(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ig;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return kg;case 5125:return Gg;case 36294:return Hg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cg(e.type)}}class Jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}}class Qg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function Jh(i,t){i.seq.push(t),i.map[t.id]=t}function jg(i,t,e){const n=i.name,s=n.length;for(Pl.lastIndex=0;;){const o=Pl.exec(n),r=Pl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Jh(e,c===void 0?new Kg(a,i,t):new Jg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Qg(a),Jh(e,f)),e=f}}}class Ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),l=t.getUniformLocation(e,a.name);jg(a,l,this)}const s=[],o=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Qh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const t3=37297;let e3=0;function n3(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const jh=new ie;function i3(i){de._getMatrix(jh,de.workingColorSpace,i);const t=`mat3( ${jh.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+n3(i.getShaderSource(t),a)}else return o}function s3(i,t){const e=i3(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const o3={[_0]:"Linear",[x0]:"Reinhard",[v0]:"Cineon",[M0]:"ACESFilmic",[y0]:"AgX",[b0]:"Neutral",[S0]:"Custom"};function r3(i,t){const e=o3[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const la=new O;function a3(){de.getLuminanceCoefficients(la);const i=la.x.toFixed(4),t=la.y.toFixed(4),e=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function l3(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h3(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Wo(i){return i!==""}function eu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const u3=/^[ \t]*#include +<([\w\d./]+)>/gm;function i0(i){return i.replace(u3,d3)}const f3=new Map;function d3(i,t){let e=re[t];if(e===void 0){const n=f3.get(t);if(n!==void 0)e=re[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return i0(e)}const p3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(i){return i.replace(p3,m3)}function m3(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function su(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const g3={[tr]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function _3(i){return g3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const x3={[ls]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function v3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":x3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const M3={[Ts]:"ENVMAP_MODE_REFRACTION"};function S3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":M3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y3={[Lr]:"ENVMAP_BLENDING_MULTIPLY",[wf]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};function b3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":y3[i.combine]||"ENVMAP_BLENDING_NONE"}function w3(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function E3(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=_3(e),c=v3(e),u=S3(e),f=b3(e),h=w3(e),p=c3(e),d=l3(o),_=s.createProgram();let m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Wo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Wo).join(`
`),g.length>0&&(g+=`
`)):(m=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),g=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?re.tonemapping_pars_fragment:"",e.toneMapping!==hi?r3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,s3("linearToOutputTexel",e.outputColorSpace),a3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wo).join(`
`)),r=i0(r),r=eu(r,e),r=nu(r,e),a=i0(a),a=eu(a,e),a=nu(a,e),r=iu(r),a=iu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=x+m+r,v=x+g+a,S=Qh(s,s.VERTEX_SHADER,M),b=Qh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,S),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",P=s.getShaderInfoLog(S)||"",R=s.getShaderInfoLog(b)||"",I=D.trim(),N=P.trim(),F=R.trim();let G=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,b);else{const $=tu(s,S,"vertex"),et=tu(s,b,"fragment");pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+$+`
`+et)}else I!==""?jt("WebGLProgram: Program Info Log:",I):(N===""||F==="")&&(H=!1);H&&(C.diagnostics={runnable:G,programLog:I,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:g}})}s.deleteShader(S),s.deleteShader(b),y=new Ra(s,_),E=h3(s,_)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,t3)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e3++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}let T3=0;class A3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new R3(t),e.set(t,n)),n}}class R3{constructor(t){this.id=T3++,this.code=t,this.usedTimes=0}}function C3(i){return i===hs||i===gr||i===_r}function P3(i,t,e,n,s,o){const r=new N0,a=new A3,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,E,T,C,D,P){const R=C.fog,I=D.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=t.get(y.envMap||N,F),H=G&&G.mapping===Dr?G.image.height:null,$=p[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&jt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,St=et!==void 0?et.length:0;let bt=0;I.morphAttributes.position!==void 0&&(bt=1),I.morphAttributes.normal!==void 0&&(bt=2),I.morphAttributes.color!==void 0&&(bt=3);let rt,st,ct,B;if($){const Ae=oi[$];rt=Ae.vertexShader,st=Ae.fragmentShader}else{rt=y.vertexShader,st=y.fragmentShader;const Ae=a.getVertexShaderStage(y),xe=a.getFragmentShaderStage(y);a.update(y,Ae,xe),ct=Ae.id,B=xe.id}const Z=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),yt=D.isInstancedMesh===!0,V=D.isBatchedMesh===!0,at=!!y.map,vt=!!y.matcap,q=!!G,it=!!y.aoMap,k=!!y.lightMap,Y=!!y.bumpMap&&y.wireframe===!1,K=!!y.normalMap,_t=!!y.displacementMap,dt=!!y.emissiveMap,Et=!!y.metalnessMap,Dt=!!y.roughnessMap,z=y.anisotropy>0,Qt=y.clearcoat>0,Kt=y.dispersion>0,U=y.retroreflectivity>0,A=y.iridescence>0,J=y.sheen>0,nt=y.transmission>0,lt=z&&!!y.anisotropyMap,Mt=Qt&&!!y.clearcoatMap,Rt=Qt&&!!y.clearcoatNormalMap,ut=Qt&&!!y.clearcoatRoughnessMap,pt=A&&!!y.iridescenceMap,Lt=A&&!!y.iridescenceThicknessMap,Xt=J&&!!y.sheenColorMap,It=J&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,qt=!!y.specularColorMap,Jt=!!y.specularIntensityMap,ee=nt&&!!y.transmissionMap,X=nt&&!!y.thicknessMap,Ct=!!y.gradientMap,ft=!!y.alphaMap,Pt=y.alphaTest>0,Ft=!!y.alphaHash,gt=!!y.extensions;let Yt=hi;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const Ht={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:st,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:V,batchingColor:V&&D._colorsTexture!==null,instancing:yt,instancingColor:yt&&D.instanceColor!==null,instancingMorph:yt&&D.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:at,matcap:vt,envMap:q,envMapMode:q&&G.mapping,envMapCubeUVHeight:H,aoMap:it,lightMap:k,bumpMap:Y,normalMap:K,displacementMap:_t,emissiveMap:dt,normalMapObjectSpace:K&&y.normalMapType===Af,normalMapTangentSpace:K&&y.normalMapType===xr,packedNormalMap:K&&y.normalMapType===xr&&C3(y.normalMap.format),metalnessMap:Et,roughnessMap:Dt,anisotropy:z,anisotropyMap:lt,clearcoat:Qt,clearcoatMap:Mt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ut,dispersion:Kt,retroreflection:U,iridescence:A,iridescenceMap:pt,iridescenceThicknessMap:Lt,sheen:J,sheenColorMap:Xt,sheenRoughnessMap:It,specularMap:Tt,specularColorMap:qt,specularIntensityMap:Jt,transmission:nt,transmissionMap:ee,thicknessMap:X,gradientMap:Ct,opaque:y.transparent===!1&&y.blending===oo&&y.alphaToCoverage===!1,alphaMap:ft,alphaTest:Pt,alphaHash:Ft,combine:y.combine,mapUv:at&&d(y.map.channel),aoMapUv:it&&d(y.aoMap.channel),lightMapUv:k&&d(y.lightMap.channel),bumpMapUv:Y&&d(y.bumpMap.channel),normalMapUv:K&&d(y.normalMap.channel),displacementMapUv:_t&&d(y.displacementMap.channel),emissiveMapUv:dt&&d(y.emissiveMap.channel),metalnessMapUv:Et&&d(y.metalnessMap.channel),roughnessMapUv:Dt&&d(y.roughnessMap.channel),anisotropyMapUv:lt&&d(y.anisotropyMap.channel),clearcoatMapUv:Mt&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&d(y.sheenRoughnessMap.channel),specularMapUv:Tt&&d(y.specularMap.channel),specularColorMapUv:qt&&d(y.specularColorMap.channel),specularIntensityMapUv:Jt&&d(y.specularIntensityMap.channel),transmissionMapUv:ee&&d(y.transmissionMap.channel),thicknessMapUv:X&&d(y.thicknessMap.channel),alphaMapUv:ft&&d(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(K||z),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(at||ft),fog:!!R,useFog:y.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&K===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:bt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:at&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:dt&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Je,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||V)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)E.push(T),E.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(g(E,y),x(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function M(y){const E=p[y.type];let T;if(E){const C=oi[E];T=ed.clone(C.uniforms)}else T=y.uniforms;return T}function v(y,E){let T=u.get(E);return T!==void 0?++T.usedTimes:(T=new E3(i,E,y,s),c.push(T),u.set(E,T)),T}function S(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:w}}function L3(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function D3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ru(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,d,_,m,g){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:p,material:d,materialVariant:r(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},i[t]=x):(x.id=h.id,x.object=h,x.geometry=p,x.material=d,x.materialVariant=r(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=m,x.group=g),t++,x}function l(h,p,d,_,m,g,x){x.reversedDepth===!0&&(m=-m);const M=a(h,p,d,_,m,g);d.transmission>0?n.push(M):d.transparent===!0?s.push(M):e.push(M)}function c(h,p,d,_,m,g){const x=a(h,p,d,_,m,g);d.transmission>0?n.unshift(x):d.transparent===!0?s.unshift(x):e.unshift(x)}function u(h,p){e.length>1&&e.sort(h||D3),n.length>1&&n.sort(p||ou),s.length>1&&s.sort(p||ou)}function f(){for(let h=t,p=i.length;h<p;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:f,sort:u}}function I3(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new ru,i.set(n,[r])):s>=o.length?(r=new ru,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function U3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new $t};break;case"SpotLight":e={position:new O,direction:new O,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function N3(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let F3=0;function O3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B3(i){const t=new U3,e=N3(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,o=new Pe,r=new Pe;function a(c){let u=0,f=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,d=0,_=0,m=0,g=0,x=0,M=0,v=0,S=0,b=0,w=0,y=0,E=0,T=0;c.sort(O3);for(let D=0,P=c.length;D<P;D++){const R=c[D],I=R.color,N=R.intensity,F=R.distance;let G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===hs?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=I.r*N,f+=I.g*N,h+=I.b*N;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],N);T++}else if(R.isSunLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,et=e.get(R);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[d]=et,n.sunShadowMap[d]=G;const St=$.getViewportCount();for(let bt=0;bt<St;bt++)n.sunShadowMatrix[_+bt]=$.getMatrix(bt),n.sunShadowCascade[_+bt]=$._cascadeData[bt];_+=St,d++}n.sun[p]=H,p++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,et=e.get(R);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=R.shadow.matrix,S++}n.directional[m]=H,m++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(I).multiplyScalar(N),H.distance=F,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;const $=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,$.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=$.matrix,R.castShadow){const et=e.get(R);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=G,w++}x++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(I).multiplyScalar(N),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[M]=H,M++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const $=R.shadow,et=e.get(R);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(N),H.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[v]=H,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.sunLength!==p||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==M||C.hemiLength!==v||C.numSunShadows!==d||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==w||C.numSpotMaps!==y||C.numLightProbes!==T)&&(n.sun.length=p,n.directional.length=m,n.spot.length=x,n.rectArea.length=M,n.point.length=g,n.hemi.length=v,n.sunShadow.length=d,n.sunShadowMap.length=d,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.sunLength=p,C.directionalLength=m,C.pointLength=g,C.spotLength=x,C.rectAreaLength=M,C.hemiLength=v,C.numSunShadows=d,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=w,C.numSpotMaps=y,C.numLightProbes=T,n.version=F3++)}function l(c,u){let f=0,h=0,p=0,d=0,_=0,m=0;const g=u.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){const v=c[x];if(v.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),f++}else if(v.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(v.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),r.identity(),o.copy(v.matrixWorld),o.premultiply(g),r.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),p++}else if(v.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function au(i){const t=new B3(i),e=[],n=[],s=[];function o(h){f.camera=h,e.length=0,n.length=0,s.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function z3(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new au(i),t.set(s,[a])):o>=r.length?(a=new au(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const k3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G3=`uniform sampler2D shadow_pass;
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
}`,H3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],V3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],cu=new Pe,zo=new O,Ll=new O;function W3(i,t,e){let n=new zc;const s=new xt,o=new xt,r=new Ge,a=new id,l=new sd,c={},u=e.maxTextureSize,f={[li]:xn,[xn]:li,[Je]:Je},h=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:k3,fragmentShader:G3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const d=new Le;d.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(d,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let g=this.type;this.render=function(b,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===of&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tr);const E=i.getRenderTarget(),T=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const P=g!==this.type;P&&w.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(I=>I.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,I=b.length;R<I;R++){const N=b[R],F=N.shadow;if(F===void 0){jt("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const G=F.getFrameExtents();s.multiply(G),o.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/G.x),s.x=o.x*G.x,F.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/G.y),s.y=o.y*G.y,F.mapSize.y=o.y));const H=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||P===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===io){if(N.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ti(s.x,s.y,{format:hs,type:fi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new vo(s.x,s.y,Qn),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Ri,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Qe,F.map.depthTexture.magFilter=Qe}else N.isPointLight?(F.map=new j0(s.x),F.map.depthTexture=new Xf(s.x,ui)):(F.map=new ti(s.x,s.y),F.map.depthTexture=new vo(s.x,s.y,ui)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Ri,this.type===tr?(F.map.depthTexture.compareFunction=H?Nc:Uc,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Qe,F.map.depthTexture.magFilter=Qe);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const $=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();N.isPointLight!==!0&&F.updateMatrices(N,y);for(let et=0;et<$;et++){const St=F.getCamera(et);if(N.isPointLight){const bt=F.camera,rt=F.matrix,st=N.distance||bt.far;st!==bt.far&&(bt.far=st,bt.updateProjectionMatrix()),zo.setFromMatrixPosition(N.matrixWorld),bt.position.copy(zo),Ll.copy(bt.position),Ll.add(H3[et]),bt.up.copy(V3[et]),bt.lookAt(Ll),bt.updateMatrixWorld(),rt.makeTranslation(-zo.x,-zo.y,-zo.z),cu.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(cu,bt.coordinateSystem,bt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,et),i.clear();else{et===0&&(i.setRenderTarget(F.map),i.clear());const bt=F.getViewport(et);r.set(o.x*bt.x,o.y*bt.y,o.x*bt.z,o.y*bt.w),D.viewport(r)}n=F.getFrustum(et),v(w,y,St,N,this.type)}F.isPointLightShadow!==!0&&this.type===io&&x(F,y),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,T,C)};function x(b,w){const y=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new ti(s.x,s.y,{format:hs,type:fi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,y,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,y,p,_,null)}function M(b,w,y,E){let T=null;const C=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)T=C;else if(T=y.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=T.uuid,P=w.uuid;let R=c[D];R===void 0&&(R={},c[D]=R);let I=R[P];I===void 0&&(I=T.clone(),R[P]=I,w.addEventListener("dispose",S)),T=I}if(T.visible=w.visible,T.wireframe=w.wireframe,E===io?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=i.properties.get(T);D.light=y}return T}function v(b,w,y,E,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===io)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const P=t.update(b),R=b.material;if(Array.isArray(R)){const I=P.groups;for(let N=0,F=I.length;N<F;N++){const G=I[N],H=R[G.materialIndex];if(H&&H.visible){const $=M(b,H,E,T);b.onBeforeShadow(i,b,w,y,P,$,G),i.renderBufferDirect(y,null,P,$,b,G),b.onAfterShadow(i,b,w,y,P,$,G)}}}else if(R.visible){const I=M(b,R,E,T);b.onBeforeShadow(i,b,w,y,P,I,null),i.renderBufferDirect(y,null,P,I,b,null),b.onAfterShadow(i,b,w,y,P,I,null)}}const D=b.children;for(let P=0,R=D.length;P<R;P++)v(D[P],w,y,E,T)}function S(b){b.target.removeEventListener("dispose",S);for(const y in c){const E=c[y],T=b.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function X3(i,t){function e(){let X=!1;const Ct=new Ge;let ft=null;const Pt=new Ge(0,0,0,0);return{setMask:function(Ft){ft!==Ft&&!X&&(i.colorMask(Ft,Ft,Ft,Ft),ft=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,gt,Yt,Ht,Ae){Ae===!0&&(Ft*=Ht,gt*=Ht,Yt*=Ht),Ct.set(Ft,gt,Yt,Ht),Pt.equals(Ct)===!1&&(i.clearColor(Ft,gt,Yt,Ht),Pt.copy(Ct))},reset:function(){X=!1,ft=null,Pt.set(-1,0,0,0)}}}function n(){let X=!1,Ct=!1,ft=null,Pt=null,Ft=null;return{setReversed:function(gt){if(Ct!==gt){const Yt=t.get("EXT_clip_control");gt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Ct=gt;const Ht=Ft;Ft=null,this.setClear(Ht)}},getReversed:function(){return Ct},setTest:function(gt){gt?Z(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(gt){ft!==gt&&!X&&(i.depthMask(gt),ft=gt)},setFunc:function(gt){if(Ct&&(gt=qd[gt]),Pt!==gt){switch(gt){case Ua:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case mo:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=gt}},setLocked:function(gt){X=gt},setClear:function(gt){Ft!==gt&&(Ft=gt,Ct&&(gt=1-gt),i.clearDepth(gt))},reset:function(){X=!1,ft=null,Pt=null,Ft=null,Ct=!1}}}function s(){let X=!1,Ct=null,ft=null,Pt=null,Ft=null,gt=null,Yt=null,Ht=null,Ae=null;return{setTest:function(xe){X||(xe?Z(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(xe){Ct!==xe&&!X&&(i.stencilMask(xe),Ct=xe)},setFunc:function(xe,Gn,Mn){(ft!==xe||Pt!==Gn||Ft!==Mn)&&(i.stencilFunc(xe,Gn,Mn),ft=xe,Pt=Gn,Ft=Mn)},setOp:function(xe,Gn,Mn){(gt!==xe||Yt!==Gn||Ht!==Mn)&&(i.stencilOp(xe,Gn,Mn),gt=xe,Yt=Gn,Ht=Mn)},setLocked:function(xe){X=xe},setClear:function(xe){Ae!==xe&&(i.clearStencil(xe),Ae=xe)},reset:function(){X=!1,Ct=null,ft=null,Pt=null,Ft=null,gt=null,Yt=null,Ht=null,Ae=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},p=new WeakMap,d=[],_=null,m=!1,g=null,x=null,M=null,v=null,S=null,b=null,w=null,y=new $t(0,0,0),E=0,T=!1,C=null,D=null,P=null,R=null,I=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=G>=2);let $=null,et={};const St=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),rt=new Ge().fromArray(St),st=new Ge().fromArray(bt);function ct(X,Ct,ft,Pt){const Ft=new Uint8Array(4),gt=i.createTexture();i.bindTexture(X,gt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<ft;Yt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(Ct+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return gt}const B={};B[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),r.setFunc(mo),Y(!1),K(Xl),Z(i.CULL_FACE),it(wi);function Z(X){u[X]!==!0&&(i.enable(X),u[X]=!0)}function ht(X){u[X]!==!1&&(i.disable(X),u[X]=!1)}function yt(X,Ct){return h[X]!==Ct?(i.bindFramebuffer(X,Ct),h[X]=Ct,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ct),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function V(X,Ct){let ft=d,Pt=!1;if(X){ft=p.get(Ct),ft===void 0&&(ft=[],p.set(Ct,ft));const Ft=X.textures;if(ft.length!==Ft.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Yt=Ft.length;gt<Yt;gt++)ft[gt]=i.COLOR_ATTACHMENT0+gt;ft.length=Ft.length,Pt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(ft)}function at(X){return _!==X?(i.useProgram(X),_=X,!0):!1}const vt={[Ss]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[cf]:i.FUNC_REVERSE_SUBTRACT};vt[lf]=i.MIN,vt[hf]=i.MAX;const q={[uf]:i.ZERO,[ff]:i.ONE,[df]:i.SRC_COLOR,[m0]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[_f]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[g0]:i.ONE_MINUS_SRC_ALPHA,[xf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[yf]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function it(X,Ct,ft,Pt,Ft,gt,Yt,Ht,Ae,xe){if(X===wi){m===!0&&(ht(i.BLEND),m=!1);return}if(m===!1&&(Z(i.BLEND),m=!0),X!==rf){if(X!==g||xe!==T){if((x!==Ss||S!==Ss)&&(i.blendEquation(i.FUNC_ADD),x=Ss,S=Ss),xe)switch(X){case oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pe("WebGLState: Invalid blending: ",X);break}else switch(X){case oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ql:pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pe("WebGLState: Invalid blending: ",X);break}M=null,v=null,b=null,w=null,y.set(0,0,0),E=0,g=X,T=xe}return}Ft=Ft||Ct,gt=gt||ft,Yt=Yt||Pt,(Ct!==x||Ft!==S)&&(i.blendEquationSeparate(vt[Ct],vt[Ft]),x=Ct,S=Ft),(ft!==M||Pt!==v||gt!==b||Yt!==w)&&(i.blendFuncSeparate(q[ft],q[Pt],q[gt],q[Yt]),M=ft,v=Pt,b=gt,w=Yt),(Ht.equals(y)===!1||Ae!==E)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Ae),y.copy(Ht),E=Ae),g=X,T=!1}function k(X,Ct){X.side===Je?ht(i.CULL_FACE):Z(i.CULL_FACE);let ft=X.side===xn;Ct&&(ft=!ft),Y(ft),X.blending===oo&&X.transparent===!1?it(wi):it(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),o.setMask(X.colorWrite);const Pt=X.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),dt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(X){C!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),C=X)}function K(X){X!==nf?(Z(i.CULL_FACE),X!==D&&(X===Xl?i.cullFace(i.BACK):X===sf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),D=X}function _t(X){X!==P&&(F&&i.lineWidth(X),P=X)}function dt(X,Ct,ft){X?(Z(i.POLYGON_OFFSET_FILL),(R!==Ct||I!==ft)&&(R=Ct,I=ft,r.getReversed()&&(Ct=-Ct),i.polygonOffset(Ct,ft))):ht(i.POLYGON_OFFSET_FILL)}function Et(X){X?Z(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function Dt(X){X===void 0&&(X=i.TEXTURE0+N-1),$!==X&&(i.activeTexture(X),$=X)}function z(X,Ct,ft){ft===void 0&&($===null?ft=i.TEXTURE0+N-1:ft=$);let Pt=et[ft];Pt===void 0&&(Pt={type:void 0,texture:void 0},et[ft]=Pt),(Pt.type!==X||Pt.texture!==Ct)&&($!==ft&&(i.activeTexture(ft),$=ft),i.bindTexture(X,Ct||B[X]),Pt.type=X,Pt.texture=Ct)}function Qt(){const X=et[$];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(X){pe("WebGLState:",X)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(X){pe("WebGLState:",X)}}function A(){try{i.texSubImage2D(...arguments)}catch(X){pe("WebGLState:",X)}}function J(){try{i.texSubImage3D(...arguments)}catch(X){pe("WebGLState:",X)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){pe("WebGLState:",X)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){pe("WebGLState:",X)}}function Mt(){try{i.texStorage2D(...arguments)}catch(X){pe("WebGLState:",X)}}function Rt(){try{i.texStorage3D(...arguments)}catch(X){pe("WebGLState:",X)}}function ut(){try{i.texImage2D(...arguments)}catch(X){pe("WebGLState:",X)}}function pt(){try{i.texImage3D(...arguments)}catch(X){pe("WebGLState:",X)}}function Lt(X){return f[X]!==void 0?f[X]:i.getParameter(X)}function Xt(X,Ct){f[X]!==Ct&&(i.pixelStorei(X,Ct),f[X]=Ct)}function It(X){rt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),rt.copy(X))}function Tt(X){st.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),st.copy(X))}function qt(X,Ct){let ft=c.get(Ct);ft===void 0&&(ft=new WeakMap,c.set(Ct,ft));let Pt=ft.get(X);Pt===void 0&&(Pt=i.getUniformBlockIndex(Ct,X.name),ft.set(X,Pt))}function Jt(X,Ct){const Pt=c.get(Ct).get(X);l.get(Ct)!==Pt&&(i.uniformBlockBinding(Ct,Pt,X.__bindingPointIndex),l.set(Ct,Pt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},$=null,et={},h={},p=new WeakMap,d=[],_=null,m=!1,g=null,x=null,M=null,v=null,S=null,b=null,w=null,y=new $t(0,0,0),E=0,T=!1,C=null,D=null,P=null,R=null,I=null,rt.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:Z,disable:ht,bindFramebuffer:yt,drawBuffers:V,useProgram:at,setBlending:it,setMaterial:k,setFlipSided:Y,setCullFace:K,setLineWidth:_t,setPolygonOffset:dt,setScissorTest:Et,activeTexture:Dt,bindTexture:z,unbindTexture:Qt,compressedTexImage2D:Kt,compressedTexImage3D:U,texImage2D:ut,texImage3D:pt,pixelStorei:Xt,getParameter:Lt,updateUBOMapping:qt,uniformBlockBinding:Jt,texStorage2D:Mt,texStorage3D:Rt,texSubImage2D:A,texSubImage3D:J,compressedTexSubImage2D:nt,compressedTexSubImage3D:lt,scissor:It,viewport:Tt,reset:ee}}function q3(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap,f=new Set;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,A){return d?new OffscreenCanvas(U,A):Sr("canvas")}function m(U,A,J){let nt=1;const lt=Kt(U);if((lt.width>J||lt.height>J)&&(nt=J/Math.max(lt.width,lt.height)),nt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Mt=Math.floor(nt*lt.width),Rt=Math.floor(nt*lt.height);h===void 0&&(h=_(Mt,Rt));const ut=A?_(Mt,Rt):h;return ut.width=Mt,ut.height=Rt,ut.getContext("2d").drawImage(U,0,0,Mt,Rt),jt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+Mt+"x"+Rt+")."),ut}else return"data"in U&&jt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),U;return U}function g(U){return U.generateMipmaps}function x(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,A,J,nt,lt,Mt=!1){if(U!==null){if(i[U]!==void 0)return i[U];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Rt;nt&&(Rt=t.get("EXT_texture_norm16"),Rt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=A;if(A===i.RED&&(J===i.FLOAT&&(ut=i.R32F),J===i.HALF_FLOAT&&(ut=i.R16F),J===i.UNSIGNED_BYTE&&(ut=i.R8),J===i.UNSIGNED_SHORT&&Rt&&(ut=Rt.R16_EXT),J===i.SHORT&&Rt&&(ut=Rt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.R8UI),J===i.UNSIGNED_SHORT&&(ut=i.R16UI),J===i.UNSIGNED_INT&&(ut=i.R32UI),J===i.BYTE&&(ut=i.R8I),J===i.SHORT&&(ut=i.R16I),J===i.INT&&(ut=i.R32I)),A===i.RG&&(J===i.FLOAT&&(ut=i.RG32F),J===i.HALF_FLOAT&&(ut=i.RG16F),J===i.UNSIGNED_BYTE&&(ut=i.RG8),J===i.UNSIGNED_SHORT&&Rt&&(ut=Rt.RG16_EXT),J===i.SHORT&&Rt&&(ut=Rt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RG8UI),J===i.UNSIGNED_SHORT&&(ut=i.RG16UI),J===i.UNSIGNED_INT&&(ut=i.RG32UI),J===i.BYTE&&(ut=i.RG8I),J===i.SHORT&&(ut=i.RG16I),J===i.INT&&(ut=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),J===i.UNSIGNED_INT&&(ut=i.RGB32UI),J===i.BYTE&&(ut=i.RGB8I),J===i.SHORT&&(ut=i.RGB16I),J===i.INT&&(ut=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),J===i.UNSIGNED_INT&&(ut=i.RGBA32UI),J===i.BYTE&&(ut=i.RGBA8I),J===i.SHORT&&(ut=i.RGBA16I),J===i.INT&&(ut=i.RGBA32I)),A===i.RGB&&(J===i.UNSIGNED_SHORT&&Rt&&(ut=Rt.RGB16_EXT),J===i.SHORT&&Rt&&(ut=Rt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),A===i.RGBA){const pt=Mt?Mr:de.getTransfer(lt);J===i.FLOAT&&(ut=i.RGBA32F),J===i.HALF_FLOAT&&(ut=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ut=pt===ye?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Rt&&(ut=Rt.RGBA16_EXT),J===i.SHORT&&Rt&&(ut=Rt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function S(U,A){let J;return U?A===null||A===ui||A===_o?J=i.DEPTH24_STENCIL8:A===Qn?J=i.DEPTH32F_STENCIL8:A===go&&(J=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ui||A===_o?J=i.DEPTH_COMPONENT24:A===Qn?J=i.DEPTH_COMPONENT32F:A===go&&(J=i.DEPTH_COMPONENT16),J}function b(U,A){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Qe&&U.minFilter!==hn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function w(U){const A=U.target;A.removeEventListener("dispose",w),E(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function y(U){const A=U.target;A.removeEventListener("dispose",y),C(A)}function E(U){const A=n.get(U);if(A.__webglInit===void 0)return;const J=U.source,nt=p.get(J);if(nt){const lt=nt[A.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&T(U),Object.keys(nt).length===0&&p.delete(J)}n.remove(U)}function T(U){const A=n.get(U);i.deleteTexture(A.__webglTexture);const J=U.source,nt=p.get(J);delete nt[A.__cacheKey],r.memory.textures--}function C(U){const A=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(A.__webglFramebuffer[nt]))for(let lt=0;lt<A.__webglFramebuffer[nt].length;lt++)i.deleteFramebuffer(A.__webglFramebuffer[nt][lt]);else i.deleteFramebuffer(A.__webglFramebuffer[nt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[nt])}else{if(Array.isArray(A.__webglFramebuffer))for(let nt=0;nt<A.__webglFramebuffer.length;nt++)i.deleteFramebuffer(A.__webglFramebuffer[nt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let nt=0;nt<A.__webglColorRenderbuffer.length;nt++)A.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[nt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=U.textures;for(let nt=0,lt=J.length;nt<lt;nt++){const Mt=n.get(J[nt]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),r.memory.textures--),n.remove(J[nt])}n.remove(U)}let D=0;function P(){D=0}function R(){return D}function I(U){D=U}function N(){const U=D;return U>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,U}function F(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function G(U,A){const J=n.get(U);if(U.isVideoTexture&&z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const nt=U.image;if(nt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(J,U,A);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function H(U,A){const J=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){ht(J,U,A);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function $(U,A){const J=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){ht(J,U,A);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function et(U,A){const J=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){yt(J,U,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const St={[mr]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[As]:i.MIRRORED_REPEAT},bt={[Qe]:i.NEAREST,[E0]:i.NEAREST_MIPMAP_NEAREST,[Ho]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},rt={[Cf]:i.NEVER,[Uf]:i.ALWAYS,[Pf]:i.LESS,[Uc]:i.LEQUAL,[Lf]:i.EQUAL,[Nc]:i.GEQUAL,[Df]:i.GREATER,[If]:i.NOTEQUAL};function st(U,A){if(A.type===Qn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===hn||A.magFilter===wa||A.magFilter===Ho||A.magFilter===os||A.minFilter===hn||A.minFilter===wa||A.minFilter===Ho||A.minFilter===os)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,St[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,St[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,St[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,bt[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,bt[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,rt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Qe||A.minFilter!==Ho&&A.minFilter!==os||A.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ct(U,A){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",w));const nt=A.source;let lt=p.get(nt);lt===void 0&&(lt={},p.set(nt,lt));const Mt=F(A);if(Mt!==U.__cacheKey){lt[Mt]===void 0&&(lt[Mt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,J=!0),lt[Mt].usedTimes++;const Rt=lt[U.__cacheKey];Rt!==void 0&&(lt[U.__cacheKey].usedTimes--,Rt.usedTimes===0&&T(A)),U.__cacheKey=Mt,U.__webglTexture=lt[Mt].texture}return J}function B(U,A,J){return Math.floor(Math.floor(U/J)/A)}function Z(U,A,J,nt){const Mt=U.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,J,nt,A.data);else{Mt.sort((Xt,It)=>Xt.start-It.start);let Rt=0;for(let Xt=1;Xt<Mt.length;Xt++){const It=Mt[Rt],Tt=Mt[Xt],qt=It.start+It.count,Jt=B(Tt.start,A.width,4),ee=B(It.start,A.width,4);Tt.start<=qt+1&&Jt===ee&&B(Tt.start+Tt.count-1,A.width,4)===Jt?It.count=Math.max(It.count,Tt.start+Tt.count-It.start):(++Rt,Mt[Rt]=Tt)}Mt.length=Rt+1;const ut=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),Lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Xt=0,It=Mt.length;Xt<It;Xt++){const Tt=Mt[Xt],qt=Math.floor(Tt.start/4),Jt=Math.ceil(Tt.count/4),ee=qt%A.width,X=Math.floor(qt/A.width),Ct=Jt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,ee,X,Ct,ft,J,nt,A.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function ht(U,A,J){let nt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(nt=i.TEXTURE_3D);const lt=ct(U,A),Mt=A.source;e.bindTexture(nt,U.__webglTexture,i.TEXTURE0+J);const Rt=n.get(Mt);if(Mt.version!==Rt.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ft=de.getPrimaries(de.workingColorSpace),Pt=A.colorSpace===Fi?null:de.getPrimaries(A.colorSpace),Ft=A.colorSpace===Fi||ft===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let pt=m(A.image,!1,s.maxTextureSize);pt=Qt(A,pt);const Lt=o.convert(A.format,A.colorSpace),Xt=o.convert(A.type);let It=v(A.internalFormat,Lt,Xt,A.normalized,A.colorSpace,A.isVideoTexture);st(nt,A);let Tt;const qt=A.mipmaps,Jt=A.isVideoTexture!==!0,ee=Rt.__version===void 0||lt===!0,X=Mt.dataReady,Ct=b(A,pt);if(A.isDepthTexture)It=S(A.format===rs,A.type),ee&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,It,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,It,pt.width,pt.height,0,Lt,Xt,null));else if(A.isDataTexture)if(qt.length>0){Jt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ct,It,qt[0].width,qt[0].height);for(let ft=0,Pt=qt.length;ft<Pt;ft++)Tt=qt[ft],Jt?X&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Lt,Xt,Tt.data):e.texImage2D(i.TEXTURE_2D,ft,It,Tt.width,Tt.height,0,Lt,Xt,Tt.data);A.generateMipmaps=!1}else Jt?(ee&&e.texStorage2D(i.TEXTURE_2D,Ct,It,pt.width,pt.height),X&&Z(A,pt,Lt,Xt)):e.texImage2D(i.TEXTURE_2D,0,It,pt.width,pt.height,0,Lt,Xt,pt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Jt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,qt[0].width,qt[0].height,pt.depth);for(let ft=0,Pt=qt.length;ft<Pt;ft++)if(Tt=qt[ft],A.format!==jn)if(Lt!==null)if(Jt){if(X)if(A.layerUpdates.size>0){const Ft=Gh(Tt.width,Tt.height,A.format,A.type);for(const gt of A.layerUpdates){const Yt=Tt.data.subarray(gt*Ft/Tt.data.BYTES_PER_ELEMENT,(gt+1)*Ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,gt,Tt.width,Tt.height,1,Lt,Yt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,pt.depth,Lt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,It,Tt.width,Tt.height,pt.depth,0,Tt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,pt.depth,Lt,Xt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,It,Tt.width,Tt.height,pt.depth,0,Lt,Xt,Tt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Jt&&ee&&e.texStorage2D(i.TEXTURE_2D,Ct,It,qt[0].width,qt[0].height);for(let ft=0,Pt=qt.length;ft<Pt;ft++)Tt=qt[ft],A.format!==jn?Lt!==null?Jt?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Lt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,It,Tt.width,Tt.height,0,Tt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?X&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Lt,Xt,Tt.data):e.texImage2D(i.TEXTURE_2D,ft,It,Tt.width,Tt.height,0,Lt,Xt,Tt.data)}else if(A.isDataArrayTexture)if(Jt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,It,pt.width,pt.height,pt.depth),X)if(A.layerUpdates.size>0){const ft=Gh(pt.width,pt.height,A.format,A.type);for(const Pt of A.layerUpdates){const Ft=pt.data.subarray(Pt*ft/pt.data.BYTES_PER_ELEMENT,(Pt+1)*ft/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pt,pt.width,pt.height,1,Lt,Xt,Ft)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Lt,Xt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,pt.width,pt.height,pt.depth,0,Lt,Xt,pt.data);else if(A.isData3DTexture)Jt?(ee&&e.texStorage3D(i.TEXTURE_3D,Ct,It,pt.width,pt.height,pt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Lt,Xt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,It,pt.width,pt.height,pt.depth,0,Lt,Xt,pt.data);else if(A.isFramebufferTexture){if(ee)if(Jt)e.texStorage2D(i.TEXTURE_2D,Ct,It,pt.width,pt.height);else{let ft=pt.width,Pt=pt.height;for(let Ft=0;Ft<Ct;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,It,ft,Pt,0,Lt,Xt,null),ft>>=1,Pt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),pt.parentNode!==ft){ft.appendChild(pt),f.add(A),ft.onpaint=Pt=>{const Ft=Pt.changedElements;for(const gt of f)Ft.includes(gt.image)&&(gt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{const Ft=i.RGBA,gt=i.RGBA,Yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,gt,Yt,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Jt&&ee){const ft=Kt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,It,ft.width,ft.height)}for(let ft=0,Pt=qt.length;ft<Pt;ft++)Tt=qt[ft],Jt?X&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Lt,Xt,Tt):e.texImage2D(i.TEXTURE_2D,ft,It,Lt,Xt,Tt);A.generateMipmaps=!1}else if(Jt){if(ee){const ft=Kt(pt);e.texStorage2D(i.TEXTURE_2D,Ct,It,ft.width,ft.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Xt,pt)}else e.texImage2D(i.TEXTURE_2D,0,It,Lt,Xt,pt);g(A)&&x(nt),Rt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function yt(U,A,J){if(A.image.length!==6)return;const nt=ct(U,A),lt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+J);const Mt=n.get(lt);if(lt.version!==Mt.__version||nt===!0){e.activeTexture(i.TEXTURE0+J);const Rt=de.getPrimaries(de.workingColorSpace),ut=A.colorSpace===Fi?null:de.getPrimaries(A.colorSpace),pt=A.colorSpace===Fi||Rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Lt=A.isCompressedTexture||A.image[0].isCompressedTexture,Xt=A.image[0]&&A.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!Lt&&!Xt?It[gt]=m(A.image[gt],!0,s.maxCubemapSize):It[gt]=Xt?A.image[gt].image:A.image[gt],It[gt]=Qt(A,It[gt]);const Tt=It[0],qt=o.convert(A.format,A.colorSpace),Jt=o.convert(A.type),ee=v(A.internalFormat,qt,Jt,A.normalized,A.colorSpace),X=A.isVideoTexture!==!0,Ct=Mt.__version===void 0||nt===!0,ft=lt.dataReady;let Pt=b(A,Tt);st(i.TEXTURE_CUBE_MAP,A);let Ft;if(Lt){X&&Ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ee,Tt.width,Tt.height);for(let gt=0;gt<6;gt++){Ft=It[gt].mipmaps;for(let Yt=0;Yt<Ft.length;Yt++){const Ht=Ft[Yt];A.format!==jn?qt!==null?X?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,Ht.width,Ht.height,qt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,ee,Ht.width,Ht.height,0,Ht.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,Ht.width,Ht.height,qt,Jt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,ee,Ht.width,Ht.height,0,qt,Jt,Ht.data)}}}else{if(Ft=A.mipmaps,X&&Ct){Ft.length>0&&Pt++;const gt=Kt(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ee,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Xt){X?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,qt,Jt,It[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ee,It[gt].width,It[gt].height,0,qt,Jt,It[gt].data);for(let Yt=0;Yt<Ft.length;Yt++){const Ae=Ft[Yt].image[gt].image;X?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,Ae.width,Ae.height,qt,Jt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,ee,Ae.width,Ae.height,0,qt,Jt,Ae.data)}}else{X?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,qt,Jt,It[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ee,qt,Jt,It[gt]);for(let Yt=0;Yt<Ft.length;Yt++){const Ht=Ft[Yt];X?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,qt,Jt,Ht.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,ee,qt,Jt,Ht.image[gt])}}}g(A)&&x(i.TEXTURE_CUBE_MAP),Mt.__version=lt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function V(U,A,J,nt,lt,Mt){const Rt=o.convert(J.format,J.colorSpace),ut=o.convert(J.type),pt=v(J.internalFormat,Rt,ut,J.normalized,J.colorSpace),Lt=n.get(A),Xt=n.get(J);if(Xt.__renderTarget=A,!Lt.__hasExternalTextures){const It=Math.max(1,A.width>>Mt),Tt=Math.max(1,A.height>>Mt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,Mt,pt,It,Tt,A.depth,0,Rt,ut,null):e.texImage2D(lt,Mt,pt,It,Tt,0,Rt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Dt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,lt,Xt.__webglTexture,0,Et(A)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,lt,Xt.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(U,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const nt=A.depthTexture,lt=nt&&nt.isDepthTexture?nt.type:null,Mt=S(A.stencilBuffer,lt),Rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Dt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et(A),Mt,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et(A),Mt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,U)}else{const nt=A.textures;for(let lt=0;lt<nt.length;lt++){const Mt=nt[lt],Rt=o.convert(Mt.format,Mt.colorSpace),ut=o.convert(Mt.type),pt=v(Mt.internalFormat,Rt,ut,Mt.normalized,Mt.colorSpace);Dt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et(A),pt,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et(A),pt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,pt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(U,A,J){const nt=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=n.get(A.depthTexture);if(lt.__renderTarget=A,(!lt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),nt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),st(i.TEXTURE_CUBE_MAP,A.depthTexture);const Lt=o.convert(A.depthTexture.format),Xt=o.convert(A.depthTexture.type);let It;A.depthTexture.format===Ri?It=i.DEPTH_COMPONENT24:A.depthTexture.format===rs&&(It=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,It,A.width,A.height,0,Lt,Xt,null)}}else G(A.depthTexture,0);const Mt=lt.__webglTexture,Rt=Et(A),ut=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,pt=A.depthTexture.format===rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ri)Dt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ut,Mt,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ut,Mt,0);else if(A.depthTexture.format===rs)Dt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ut,Mt,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ut,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(U){const A=n.get(U),J=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const nt=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),nt){const lt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,nt.removeEventListener("dispose",lt)};nt.addEventListener("dispose",lt),A.__depthDisposeCallback=lt}A.__boundDepthTexture=nt}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(J)for(let nt=0;nt<6;nt++)vt(A.__webglFramebuffer[nt],U,nt);else{const nt=U.texture.mipmaps;nt&&nt.length>0?vt(A.__webglFramebuffer[0],U,0):vt(A.__webglFramebuffer,U,0)}else if(J){A.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[nt]),A.__webglDepthbuffer[nt]===void 0)A.__webglDepthbuffer[nt]=i.createRenderbuffer(),at(A.__webglDepthbuffer[nt],U,!1);else{const lt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,Mt)}}else{const nt=U.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),at(A.__webglDepthbuffer,U,!1);else{const lt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,Mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(U,A,J){const nt=n.get(U);A!==void 0&&V(nt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&q(U)}function k(U){const A=U.texture,J=n.get(U),nt=n.get(A);U.addEventListener("dispose",y);const lt=U.textures,Mt=U.isWebGLCubeRenderTarget===!0,Rt=lt.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=A.version,r.memory.textures++),Mt){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let pt=0;pt<A.mipmaps.length;pt++)J.__webglFramebuffer[ut][pt]=i.createFramebuffer()}else J.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<A.mipmaps.length;ut++)J.__webglFramebuffer[ut]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ut=0,pt=lt.length;ut<pt;ut++){const Lt=n.get(lt[ut]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),r.memory.textures++)}if(U.samples>0&&Dt(U)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<lt.length;ut++){const pt=lt[ut];J.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);const Lt=o.convert(pt.format,pt.colorSpace),Xt=o.convert(pt.type),It=v(pt.internalFormat,Lt,Xt,pt.normalized,pt.colorSpace,U.isXRRenderTarget===!0),Tt=Et(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,It,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),at(J.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),st(i.TEXTURE_CUBE_MAP,A);for(let ut=0;ut<6;ut++)if(A.mipmaps&&A.mipmaps.length>0)for(let pt=0;pt<A.mipmaps.length;pt++)V(J.__webglFramebuffer[ut][pt],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else V(J.__webglFramebuffer[ut],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);g(A)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,pt=lt.length;ut<pt;ut++){const Lt=lt[ut],Xt=n.get(Lt);let It=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(It=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(It,Xt.__webglTexture),st(It,Lt),V(J.__webglFramebuffer,U,Lt,i.COLOR_ATTACHMENT0+ut,It,0),g(Lt)&&x(It)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ut=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,nt.__webglTexture),st(ut,A),A.mipmaps&&A.mipmaps.length>0)for(let pt=0;pt<A.mipmaps.length;pt++)V(J.__webglFramebuffer[pt],U,A,i.COLOR_ATTACHMENT0,ut,pt);else V(J.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,ut,0);g(A)&&x(ut),e.unbindTexture()}U.depthBuffer&&q(U)}function Y(U){const A=U.textures;for(let J=0,nt=A.length;J<nt;J++){const lt=A[J];if(g(lt)){const Mt=M(U),Rt=n.get(lt).__webglTexture;e.bindTexture(Mt,Rt),x(Mt),e.unbindTexture()}}}const K=[],_t=[];function dt(U){if(U.samples>0){if(Dt(U)===!1){const A=U.textures,J=U.width,nt=U.height;let lt=i.COLOR_BUFFER_BIT;const Mt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(U),ut=A.length>1;if(ut)for(let Lt=0;Lt<A.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const pt=U.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Lt=0;Lt<A.length;Lt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Lt]);const Xt=n.get(A[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,J,nt,0,0,J,nt,lt,i.NEAREST),l===!0&&(K.length=0,_t.length=0,K.push(i.COLOR_ATTACHMENT0+Lt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(K.push(Mt),_t.push(Mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Lt=0;Lt<A.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Lt]);const Xt=n.get(A[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Et(U){return Math.min(s.maxSamples,U.samples)}function Dt(U){const A=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function z(U){const A=r.render.frame;u.get(U)!==A&&(u.set(U,A),U.update())}function Qt(U,A){const J=U.colorSpace,nt=U.format,lt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==vr&&J!==Fi&&(de.getTransfer(J)===ye?(nt!==jn||lt!==Fn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pe("WebGLTextures: Unsupported texture color space:",J)),A}function Kt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.getTextureUnits=R,this.setTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=et,this.rebindTextures=it,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function xd(i,t){function e(n,s=Fi){let o;const r=de.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===R0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===C0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===T0)return i.BYTE;if(n===A0)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===P0)return i.ALPHA;if(n===L0)return i.RGB;if(n===jn)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===hs)return i.RG;if(n===Dc)return i.RG_INTEGER;if(n===Ic)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===or)if(r===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===nr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===nr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Ha||n===Va||n===Wa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ga)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===$a||n===gr||n===Ka)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Xa||n===qa)return r===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ya)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Za)return o.COMPRESSED_R11_EAC;if(n===$a)return o.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return o.COMPRESSED_RG11_EAC;if(n===Ka)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ja||n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===oc||n===rc||n===ac||n===cc||n===lc||n===hc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ja)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ac)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uc||n===fc||n===dc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===uc)return r===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===mc||n===_r||n===gc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===pc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_o?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Y3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z3=`
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

}`;class $3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new H0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:Y3,fragmentShader:Z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K3 extends Xi{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,d=null;const _=typeof XRWebGLBinding<"u",m=new $3,g={},x=e.getContextAttributes();let M=null,v=null;const S=[],b=[],w=new xt;let y=null,E=null;const T=new ln;T.viewport=new Ge;const C=new ln;C.viewport=new Ge;const D=[T,C],P=new hd;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=S[B];return Z===void 0&&(Z=new Ta,S[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=S[B];return Z===void 0&&(Z=new Ta,S[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=S[B];return Z===void 0&&(Z=new Ta,S[B]=Z),Z.getHandSpace()};function N(B){const Z=b.indexOf(B.inputSource);if(Z===-1)return;const ht=S[Z];ht!==void 0&&(ht.update(B.inputSource,B.frame,c||r),ht.dispatchEvent({type:B.type,data:B.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",G);for(let B=0;B<S.length;B++){const Z=b[B];Z!==null&&(b[B]=null,S[B].disconnect(Z))}R=null,I=null,m.reset();for(const B in g)delete g[B];if(t.setRenderTarget(M),p=null,h=null,f=null,s=null,v=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),E!==null){const B=E.camera;B.fov=E.fov,B.zoom=E.zoom,B.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,yt=null,V=null;x.depth&&(V=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=x.stencil?rs:Ri,yt=x.stencil?_o:ui);const at={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:o};f=this.getBinding(),h=f.createProjectionLayer(at),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new ti(h.textureWidth,h.textureHeight,{format:jn,type:Fn,depthTexture:new vo(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ht={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ti(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(B){for(let Z=0;Z<B.removed.length;Z++){const ht=B.removed[Z],yt=b.indexOf(ht);yt>=0&&(b[yt]=null,S[yt].disconnect(ht))}for(let Z=0;Z<B.added.length;Z++){const ht=B.added[Z];let yt=b.indexOf(ht);if(yt===-1){for(let at=0;at<S.length;at++)if(at>=b.length){b.push(ht),yt=at;break}else if(b[at]===null){b[at]=ht,yt=at;break}if(yt===-1)break}const V=S[yt];V&&V.connect(ht)}}const H=new O,$=new O;function et(B,Z,ht){H.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ht.matrixWorld);const yt=H.distanceTo($),V=Z.projectionMatrix.elements,at=ht.projectionMatrix.elements,vt=V[14]/(V[10]-1),q=V[14]/(V[10]+1),it=(V[9]+1)/V[5],k=(V[9]-1)/V[5],Y=(V[8]-1)/V[0],K=(at[8]+1)/at[0],_t=vt*Y,dt=vt*K,Et=yt/(-Y+K),Dt=Et*-Y;if(Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Dt),B.translateZ(Et),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),V[10]===-1)B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const z=vt+Et,Qt=q+Et,Kt=_t-Dt,U=dt+(yt-Dt),A=it*q/Qt*z,J=k*q/Qt*z;B.projectionMatrix.makePerspective(Kt,U,A,J,z,Qt),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function St(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let Z=B.near,ht=B.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),P.near=C.near=T.near=Z,P.far=C.far=T.far=ht,(R!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,I=P.far),P.layers.mask=B.layers.mask|6,T.layers.mask=P.layers.mask&-5,C.layers.mask=P.layers.mask&-3;const yt=B.parent,V=P.cameras;St(P,yt);for(let at=0;at<V.length;at++)St(V[at],yt);V.length===2?et(P,T,C):P.projectionMatrix.copy(T.projectionMatrix),E===null&&B.isPerspectiveCamera&&(E={camera:B,fov:B.fov,zoom:B.zoom}),bt(B,P,yt)};function bt(B,Z,ht){ht===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(ht.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=br*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(B){return g[B]};let rt=null;function st(B,Z){if(u=Z.getViewerPose(c||r),d=Z,u!==null){const ht=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let yt=!1;ht.length!==P.cameras.length&&(P.cameras.length=0,yt=!0);for(let q=0;q<ht.length;q++){const it=ht[q];let k=null;if(p!==null)k=p.getViewport(it);else{const K=f.getViewSubImage(h,it);k=K.viewport,q===0&&(t.setRenderTargetTextures(v,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(v))}let Y=D[q];Y===void 0&&(Y=new ln,Y.layers.enable(q),Y.viewport=new Ge,D[q]=Y),Y.matrix.fromArray(it.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(it.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(k.x,k.y,k.width,k.height),q===0&&(P.matrix.copy(Y.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),yt===!0&&P.cameras.push(Y)}const V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const q=f.getDepthInformation(ht[0]);q&&q.isValid&&q.texture&&m.init(q,s.renderState)}if(V&&V.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let q=0;q<ht.length;q++){const it=ht[q].camera;if(it){let k=g[it];k||(k=new H0,g[it]=k);const Y=f.getCameraImage(it);k.sourceTexture=Y}}}}for(let ht=0;ht<S.length;ht++){const yt=b[ht],V=S[ht];yt!==null&&V!==void 0&&V.update(yt,Z,c||r)}rt&&rt(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),d=null}const ct=new fd;ct.setAnimationLoop(st),this.setAnimationLoop=function(B){rt=B},this.dispose=function(){}}}const J3=new Pe,vd=new ie;vd.set(-1,0,0,0,1,0,0,0,1);function Q3(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,td(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?o(m,g):g.isMeshLambertMaterial?(o(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(o(m,g),f(m,g)):g.isMeshPhongMaterial?(o(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(o(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,v)):g.isMeshMatcapMaterial?(o(m,g),d(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),_(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(J3.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function d(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j3(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=s[v.id];b===void 0&&(m(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",x));const w=S.program;n.updateUBOMapping(v,w);const y=t.render.frame;o[v.id]!==y&&(h(v),o[v.id]=y)}function u(v){const S=f();v.__bindingPointIndex=S;const b=i.createBuffer(),w=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=s[v.id],b=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,E=b.length;y<E;y++){const T=b[y];if(Array.isArray(T))for(let C=0,D=T.length;C<D;C++)p(T[C],y,C,w);else p(T,y,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,b,w){if(_(v,S,b,w)===!0){const y=v.__offset,E=v.value;if(Array.isArray(E)){let T=0;for(let C=0;C<E.length;C++){const D=E[C],P=g(D);d(D,v.__data,T),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(T+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else d(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function d(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function _(v,S,b,w){const y=v.value,E=S+"_"+b;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{const T=w[E];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function m(v){const S=v.uniforms;let b=0;const w=16;for(let E=0,T=S.length;E<T;E++){const C=Array.isArray(S[E])?S[E]:[S[E]];for(let D=0,P=C.length;D<P;D++){const R=C[D],I=Array.isArray(R.value)?R.value:[R.value];for(let N=0,F=I.length;N<F;N++){const G=I[N],H=g(G),$=b%w,et=$%H.boundary,St=$+et;b+=et,St!==0&&w-St<H.storage&&(b+=w-St),R.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=H.storage}}}const y=b%w;return y>0&&(b+=w-y),v.__size=b,v.__cache={},this}function g(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),S}function x(v){const S=v.target;S.removeEventListener("dispose",x);const b=r.indexOf(S.__bindingPointIndex);r.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function M(){for(const v in s)i.deleteBuffer(s[v]);r=[],s={},o={}}return{bind:l,update:c,dispose:M}}const t_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function e_(){return _i===null&&(_i=new Bc(t_,16,16,hs,fi),_i.name="DFG_LUT",_i.minFilter=hn,_i.magFilter=hn,_i.wrapS=ai,_i.wrapT=ai,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class Md{constructor(t={}){const{canvas:e=Ff(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Fn}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const _=p,m=new Set([Ic,Dc,Lc]),g=new Set([Fn,ui,go,_o,Rc,Cc]),x=new Uint32Array(4),M=new Int32Array(4),v=new O;let S=null,b=null;const w=[],y=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,D=null,P=null,R=null,I=null;this._outputColorSpace=rn;let N=0,F=0,G=null,H=-1,$=null;const et=new Ge,St=new Ge;let bt=null;const rt=new $t(0);let st=0,ct=e.width,B=e.height,Z=1,ht=null,yt=null;const V=new Ge(0,0,ct,B),at=new Ge(0,0,ct,B);let vt=!1;const q=new zc;let it=!1,k=!1;const Y=new Pe,K=new O,_t=new Ge,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Dt(){return G===null?Z:1}let z=n;function Qt(L,W){return e.getContext(L,W)}let Kt,U,A,J,nt,lt,Mt,Rt,ut,pt,Lt,Xt,It,Tt,qt,Jt,ee,X,Ct,ft,Pt,Ft,gt;try{const L={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Gn,!1),z===null){const W="webgl2";if(z=Qt(W,L),z===null)throw Qt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(L){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),pe("WebGLRenderer: "+L.message),L}function Yt(){Kt=new ng(z),Kt.init(),Pt=new xd(z,Kt),U=new qm(z,Kt,t,Pt),A=new X3(z,Kt),U.reversedDepthBuffer&&h&&A.buffers.depth.setReversed(!0),P=z.createFramebuffer(),R=z.createFramebuffer(),I=z.createFramebuffer(),J=new og(z),nt=new L3,lt=new q3(z,Kt,A,nt,U,Pt,J),Mt=new eg(T),Rt=new a1(z),Ft=new Wm(z,Rt),ut=new ig(z,Rt,J,Ft),pt=new ag(z,ut,Rt,Ft,J),X=new rg(z,U,lt),qt=new Ym(nt),Lt=new P3(T,Mt,Kt,U,Ft,qt),Xt=new Q3(T,nt),It=new I3,Tt=new z3(Kt),ee=new Vm(T,Mt,A,pt,d,l),Jt=new W3(T,pt,U),gt=new j3(z,J,U,A),Ct=new Xm(z,Kt,J),ft=new sg(z,Kt,J),J.programs=Lt.programs,T.capabilities=U,T.extensions=Kt,T.properties=nt,T.renderLists=It,T.shadowMap=Jt,T.state=A,T.info=J}_!==Fn&&(E=new lg(_,e.width,e.height,a,s,o));const Ht=new K3(T,z);this.xr=Ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const L=Kt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Kt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(L){L!==void 0&&(Z=L,this.setSize(ct,B,!1))},this.getSize=function(L){return L.set(ct,B)},this.setSize=function(L,W,ot=!0){if(Ht.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=L,B=W,e.width=Math.floor(L*Z),e.height=Math.floor(W*Z),ot===!0&&(e.style.width=L+"px",e.style.height=W+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(ct*Z,B*Z).floor()},this.setDrawingBufferSize=function(L,W,ot){ct=L,B=W,Z=ot,e.width=Math.floor(L*ot),e.height=Math.floor(W*ot),this.setViewport(0,0,L,W)},this.setEffects=function(L){if(_===Fn){pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let W=0;W<L.length;W++)if(L[W].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(et)},this.getViewport=function(L){return L.copy(V)},this.setViewport=function(L,W,ot,j){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,W,ot,j),A.viewport(et.copy(V).multiplyScalar(Z).round())},this.getScissor=function(L){return L.copy(at)},this.setScissor=function(L,W,ot,j){L.isVector4?at.set(L.x,L.y,L.z,L.w):at.set(L,W,ot,j),A.scissor(St.copy(at).multiplyScalar(Z).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(L){A.setScissorTest(vt=L)},this.setOpaqueSort=function(L){ht=L},this.setTransparentSort=function(L){yt=L},this.getClearColor=function(L){return L.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(L=!0,W=!0,ot=!0){let j=0;if(L){let tt=!1;if(G!==null){const Ut=G.texture.format;tt=m.has(Ut)}if(tt){const Ut=G.texture.type,kt=g.has(Ut),Ot=ee.getClearColor(),Vt=ee.getClearAlpha(),Zt=Ot.r,ce=Ot.g,he=Ot.b;kt?(x[0]=Zt,x[1]=ce,x[2]=he,x[3]=Vt,z.clearBufferuiv(z.COLOR,0,x)):(M[0]=Zt,M[1]=ce,M[2]=he,M[3]=Vt,z.clearBufferiv(z.COLOR,0,M))}else j|=z.COLOR_BUFFER_BIT}W&&(j|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),D=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),ee.dispose(),It.dispose(),Tt.dispose(),nt.dispose(),Mt.dispose(),pt.dispose(),Ft.dispose(),gt.dispose(),Lt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",At),Ht.removeEventListener("sessionend",Bt),zt.stop()};function Ae(L){L.preventDefault(),yr("WebGLRenderer: Context Lost."),C=!0}function xe(){yr("WebGLRenderer: Context Restored."),C=!1;const L=J.autoReset,W=Jt.enabled,ot=Jt.autoUpdate,j=Jt.needsUpdate,tt=Jt.type;Yt(),J.autoReset=L,Jt.enabled=W,Jt.autoUpdate=ot,Jt.needsUpdate=j,Jt.type=tt}function Gn(L){pe("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Mn(L){const W=L.target;W.removeEventListener("dispose",Mn),tl(W)}function tl(L){Nr(L),nt.remove(L)}function Nr(L){const W=nt.get(L).programs;W!==void 0&&(W.forEach(function(ot){Lt.releaseProgram(ot)}),L.isShaderMaterial&&Lt.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,ot,j,tt,Ut){W===null&&(W=dt);const kt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Ot=Cs(L,W,ot,j,tt);A.setMaterial(j,kt);let Vt=ot.index,Zt=1;if(j.wireframe===!0){if(Vt=ut.getWireframeAttribute(ot),Vt===void 0)return;Zt=2}const ce=ot.drawRange,he=ot.attributes.position;let Wt=ce.start*Zt,Se=(ce.start+ce.count)*Zt;Ut!==null&&(Wt=Math.max(Wt,Ut.start*Zt),Se=Math.min(Se,(Ut.start+Ut.count)*Zt)),Vt!==null?(Wt=Math.max(Wt,0),Se=Math.min(Se,Vt.count)):he!=null&&(Wt=Math.max(Wt,0),Se=Math.min(Se,he.count));const qe=Se-Wt;if(qe<0||qe===1/0)return;Ft.setup(tt,j,Ot,ot,Vt);let Oe,De=Ct;if(Vt!==null&&(Oe=Rt.get(Vt),De=ft,De.setIndex(Oe)),tt.isMesh)j.wireframe===!0?(A.setLineWidth(j.wireframeLinewidth*Dt()),De.setMode(z.LINES)):De.setMode(z.TRIANGLES);else if(tt.isLine){let un=j.linewidth;un===void 0&&(un=1),A.setLineWidth(un*Dt()),tt.isLineSegments?De.setMode(z.LINES):tt.isLineLoop?De.setMode(z.LINE_LOOP):De.setMode(z.LINE_STRIP)}else tt.isPoints?De.setMode(z.POINTS):tt.isSprite&&De.setMode(z.TRIANGLES);if(tt.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))De.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const un=tt._multiDrawStarts,Gt=tt._multiDrawCounts,yn=tt._multiDrawCount,_e=Vt?Rt.get(Vt).bytesPerElement:1,Zn=nt.get(j).currentProgram.getUniforms();for(let mi=0;mi<yn;mi++)Zn.setValue(z,"_gl_DrawID",mi),De.render(un[mi]/_e,Gt[mi])}else if(tt.isInstancedMesh)De.renderInstances(Wt,qe,tt.count);else if(ot.isInstancedBufferGeometry){const un=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Gt=Math.min(ot.instanceCount,un);De.renderInstances(Wt,qe,Gt)}else De.render(Wt,qe)};function Ao(L,W,ot,j){D!==null&&L.isNodeMaterial&&D.setObject(j,L),it===!0&&qt.setState(L,ot,!1),L.transparent===!0&&L.side===Je&&L.forceSinglePass===!1?(L.side=xn,L.needsUpdate=!0,Re(L,W,j),L.side=li,L.needsUpdate=!0,Re(L,W,j),L.side=Je):Re(L,W,j)}this.compile=function(L,W,ot=null){ot===null&&(ot=L),D!==null&&D.renderStart(L,W,ot),b=Tt.get(ot),b.init(W),y.push(b),ot.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(b.pushLight(tt),tt.castShadow&&b.pushShadow(tt))}),L!==ot&&L.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(b.pushLight(tt),tt.castShadow&&b.pushShadow(tt))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),k=this.localClippingEnabled,it=qt.init(this.clippingPlanes,k),it===!0&&qt.setGlobalState(this.clippingPlanes,W),D!==null&&Jt.render(b.state.shadowsArray,ot,W);const j=new Set;return L.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ut=tt.material;if(Ut)if(Array.isArray(Ut))for(let kt=0;kt<Ut.length;kt++){const Ot=Ut[kt];Ao(Ot,ot,W,tt),j.add(Ot)}else Ao(Ut,ot,W,tt),j.add(Ut)}),b=y.pop(),D!==null&&D.renderEnd(),j},this.compileAsync=function(L,W,ot=null){const j=this.compile(L,W,ot);return new Promise(tt=>{function Ut(){if(j.forEach(function(kt){const Vt=nt.get(kt).currentProgram;(Vt===void 0||Vt.isReady())&&j.delete(kt)}),j.size===0){tt(L);return}setTimeout(Ut,10)}Kt.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Q=null;function wt(L){Q&&Q(L)}function At(){zt.stop()}function Bt(){zt.start()}const zt=new fd;zt.setAnimationLoop(wt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(L){Q=L,Ht.setAnimationLoop(L),L===null?zt.stop():zt.start()},Ht.addEventListener("sessionstart",At),Ht.addEventListener("sessionend",Bt),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(L,W);const ot=Ht.enabled===!0&&Ht.isPresenting===!0,j=E!==null&&(G===null||ot)&&E.begin(T,G);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(W),W=Ht.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,W,G),b=Tt.get(L,y.length),b.init(W),b.state.textureUnits=lt.getTextureUnits(),y.push(b),Y.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Y,ci,W.reversedDepth),k=this.localClippingEnabled,it=qt.init(this.clippingPlanes,k),S=It.get(L,w.length),S.init(),w.push(S),Ht.enabled===!0&&Ht.isPresenting===!0){const kt=T.xr.getDepthSensingMesh();kt!==null&&ne(kt,W,-1/0,T.sortObjects)}ne(L,W,0,T.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),T.sortObjects===!0&&S.sort(ht,yt),Et=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Et&&ee.addToRenderList(S,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&qt.beginShadows();const tt=b.state.shadowsArray;if(Jt.render(tt,L,W),it===!0&&qt.endShadows(),(j&&E.hasRenderPass())===!1){const kt=S.opaque,Ot=S.transmissive;if(b.setupLights(),W.isArrayCamera){const Vt=W.cameras;if(Ot.length>0)for(let Zt=0,ce=Vt.length;Zt<ce;Zt++){const he=Vt[Zt];fe(kt,Ot,L,he)}Et&&ee.render(L);for(let Zt=0,ce=Vt.length;Zt<ce;Zt++){const he=Vt[Zt];oe(S,L,he,he.viewport)}}else Ot.length>0&&fe(kt,Ot,L,W),Et&&ee.render(L),oe(S,L,W)}G!==null&&F===0&&(lt.updateMultisampleRenderTarget(G),lt.updateRenderTargetMipmap(G)),j&&E.end(T),L.isScene===!0&&L.onAfterRender(T,L,W),Ft.resetDefaultState(),H=-1,$=null,y.pop(),y.length>0?(b=y[y.length-1],lt.setTextureUnits(b.state.textureUnits),it===!0&&qt.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null,D!==null&&D.renderEnd()};function ne(L,W,ot,j){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)ot=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLightProbeGrid)b.pushLightProbeGrid(L);else if(L.isLight)b.pushLight(L),L.castShadow&&b.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(q)){j&&_t.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Y);const kt=pt.update(L),Ot=L.material;Ot.visible&&S.push(L,kt,Ot,ot,_t.z,null,W)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(q))){const kt=pt.update(L),Ot=L.material;if(j&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),_t.copy(L.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),_t.copy(kt.boundingSphere.center)),_t.applyMatrix4(L.matrixWorld).applyMatrix4(Y)),Array.isArray(Ot)){const Vt=kt.groups;for(let Zt=0,ce=Vt.length;Zt<ce;Zt++){const he=Vt[Zt],Wt=Ot[he.materialIndex];Wt&&Wt.visible&&S.push(L,kt,Wt,ot,_t.z,he,W)}}else Ot.visible&&S.push(L,kt,Ot,ot,_t.z,null,W)}}const Ut=L.children;for(let kt=0,Ot=Ut.length;kt<Ot;kt++)ne(Ut[kt],W,ot,j)}function oe(L,W,ot,j){const{opaque:tt,transmissive:Ut,transparent:kt}=L;b.setupLightsView(ot),it===!0&&qt.setGlobalState(T.clippingPlanes,ot),j&&A.viewport(et.copy(j)),tt.length>0&&ge(tt,W,ot),Ut.length>0&&ge(Ut,W,ot),kt.length>0&&ge(kt,W,ot),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function fe(L,W,ot,j){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){const Wt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new ti(1,1,{generateMipmaps:!0,type:Wt?fi:Fn,minFilter:os,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}const Ut=b.state.transmissionRenderTarget[j.id],kt=j.viewport||et;Ut.setSize(kt.z*T.transmissionResolutionScale,kt.w*T.transmissionResolutionScale);const Ot=T.getRenderTarget(),Vt=T.getActiveCubeFace(),Zt=T.getActiveMipmapLevel();T.setRenderTarget(Ut),T.getClearColor(rt),st=T.getClearAlpha(),st<1&&T.setClearColor(16777215,.5),T.clear(),Et&&ee.render(ot);const ce=T.toneMapping;T.toneMapping=hi;const he=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),it===!0&&qt.setGlobalState(T.clippingPlanes,j),ge(L,ot,j),lt.updateMultisampleRenderTarget(Ut),lt.updateRenderTargetMipmap(Ut),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Se=0,qe=W.length;Se<qe;Se++){const Oe=W[Se],{object:De,geometry:un,material:Gt,group:yn}=Oe;if(Gt.side===Je&&De.layers.test(j.layers)){const _e=Gt.side;Gt.side=xn,Gt.needsUpdate=!0,ve(De,ot,j,un,Gt,yn),Gt.side=_e,Gt.needsUpdate=!0,Wt=!0}}Wt===!0&&(lt.updateMultisampleRenderTarget(Ut),lt.updateRenderTargetMipmap(Ut))}T.setRenderTarget(Ot,Vt,Zt),T.setClearColor(rt,st),he!==void 0&&(j.viewport=he),T.toneMapping=ce}function ge(L,W,ot){const j=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,Ut=L.length;tt<Ut;tt++){const kt=L[tt],{object:Ot,geometry:Vt,group:Zt}=kt;let ce=kt.material;ce.allowOverride===!0&&j!==null&&(ce=j),Ot.layers.test(ot.layers)&&ve(Ot,W,ot,Vt,ce,Zt)}}function ve(L,W,ot,j,tt,Ut){D!==null&&tt.isNodeMaterial&&D.setObject(L,tt),L.onBeforeRender(T,W,ot,j,tt,Ut),L.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),tt.onBeforeRender(T,W,ot,j,L,Ut),tt.transparent===!0&&tt.side===Je&&tt.forceSinglePass===!1?(tt.side=xn,tt.needsUpdate=!0,T.renderBufferDirect(ot,W,j,tt,L,Ut),tt.side=li,tt.needsUpdate=!0,T.renderBufferDirect(ot,W,j,tt,L,Ut),tt.side=Je):T.renderBufferDirect(ot,W,j,tt,L,Ut),L.onAfterRender(T,W,ot,j,tt,Ut)}function Re(L,W,ot){W.isScene!==!0&&(W=dt);const j=nt.get(L),tt=b.state.lights,Ut=b.state.shadowsArray,kt=tt.state.version,Ot=Lt.getParameters(L,tt.state,Ut,W,ot,b.state.lightProbeGridArray),Vt=Lt.getProgramCacheKey(Ot);let Zt=j.programs;j.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;const ce=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;j.envMap=Mt.get(L.envMap||j.environment,ce),j.envMapRotation=j.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,Zt===void 0&&(L.addEventListener("dispose",Mn),Zt=new Map,j.programs=Zt);let he=Zt.get(Vt);if(he!==void 0){if(j.currentProgram===he&&j.lightsStateVersion===kt)return Sn(L,Ot),he}else Ot.uniforms=Lt.getUniforms(L),D!==null&&L.isNodeMaterial&&D.build(L,ot,Ot),L.onBeforeCompile(Ot,T),he=Lt.acquireProgram(Ot,Vt),Zt.set(Vt,he),j.uniforms=Ot.uniforms;const Wt=j.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Wt.clippingPlanes=qt.uniform),Sn(L,Ot),j.needsLights=el(L),j.lightsStateVersion=kt,j.needsLights&&(Wt.ambientLightColor.value=tt.state.ambient,Wt.lightProbe.value=tt.state.probe,Wt.sunLights.value=tt.state.sun,Wt.sunLightShadows.value=tt.state.sunShadow,Wt.directionalLights.value=tt.state.directional,Wt.directionalLightShadows.value=tt.state.directionalShadow,Wt.spotLights.value=tt.state.spot,Wt.spotLightShadows.value=tt.state.spotShadow,Wt.rectAreaLights.value=tt.state.rectArea,Wt.ltc_1.value=tt.state.rectAreaLTC1,Wt.ltc_2.value=tt.state.rectAreaLTC2,Wt.pointLights.value=tt.state.point,Wt.pointLightShadows.value=tt.state.pointShadow,Wt.hemisphereLights.value=tt.state.hemi,Wt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Wt.sunShadowCascade.value=tt.state.sunShadowCascade,Wt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Wt.spotLightMatrix.value=tt.state.spotLightMatrix,Wt.spotLightMap.value=tt.state.spotLightMap,Wt.pointShadowMatrix.value=tt.state.pointShadowMatrix),j.lightProbeGrid=b.state.lightProbeGridArray.length>0,j.currentProgram=he,j.uniformsList=null,he}function Ln(L){if(L.uniformsList===null){const W=L.currentProgram.getUniforms();L.uniformsList=Ra.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function Sn(L,W){const ot=nt.get(L);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function qi(L,W){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;v.setFromMatrixPosition(W.matrixWorld);for(let ot=0,j=L.length;ot<j;ot++){const tt=L[ot];if(tt.texture!==null&&tt.boundingBox.containsPoint(v))return tt}return null}function Cs(L,W,ot,j,tt){W.isScene!==!0&&(W=dt),lt.resetTextureUnits();const Ut=W.fog,kt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Ot=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:de.workingColorSpace,Vt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Zt=Mt.get(j.envMap||kt,Vt),ce=j.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,he=!!ot.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Wt=!!ot.morphAttributes.position,Se=!!ot.morphAttributes.normal,qe=!!ot.morphAttributes.color;let Oe=hi;j.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Oe=T.toneMapping);const De=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,un=De!==void 0?De.length:0,Gt=nt.get(j),yn=b.state.lights;if(it===!0&&(k===!0||L!==$)){const Ue=L===$&&j.id===H;qt.setState(j,L,Ue)}let _e=!1;j.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==yn.state.version||Gt.outputColorSpace!==Ot||tt.isBatchedMesh&&Gt.batching===!1||!tt.isBatchedMesh&&Gt.batching===!0||tt.isBatchedMesh&&Gt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Gt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Gt.instancing===!1||!tt.isInstancedMesh&&Gt.instancing===!0||tt.isSkinnedMesh&&Gt.skinning===!1||!tt.isSkinnedMesh&&Gt.skinning===!0||tt.isInstancedMesh&&Gt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Gt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Gt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Gt.instancingMorph===!1&&tt.morphTexture!==null||Gt.envMap!==Zt||j.fog===!0&&Gt.fog!==Ut||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==qt.numPlanes||Gt.numIntersection!==qt.numIntersection)||Gt.vertexAlphas!==ce||Gt.vertexTangents!==he||Gt.morphTargets!==Wt||Gt.morphNormals!==Se||Gt.morphColors!==qe||Gt.toneMapping!==Oe||Gt.morphTargetsCount!==un||!!Gt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Gt.__version=j.version);let Zn=Gt.currentProgram;_e===!0&&(Zn=Re(j,W,tt),D&&j.isNodeMaterial&&D.onUpdateProgram(j,Zn,Gt));let mi=!1,Yi=!1,Ps=!1;const Ce=Zn.getUniforms(),We=Gt.uniforms;if(A.useProgram(Zn.program)&&(mi=!0,Yi=!0,Ps=!0),j.id!==H&&(H=j.id,Yi=!0),Gt.needsLights){const Ue=qi(b.state.lightProbeGridArray,tt);Gt.lightProbeGrid!==Ue&&(Gt.lightProbeGrid=Ue,Yi=!0)}if(mi||$!==L){A.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ce.setValue(z,"projectionMatrix",L.projectionMatrix),Ce.setValue(z,"viewMatrix",L.matrixWorldInverse);const $i=Ce.map.cameraPosition;$i!==void 0&&$i.setValue(z,K.setFromMatrixPosition(L.matrixWorld)),U.logarithmicDepthBuffer&&Ce.setValue(z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ce.setValue(z,"isOrthographic",L.isOrthographicCamera===!0),$!==L&&($=L,Yi=!0,Ps=!0)}if(Gt.needsLights&&(yn.state.sunShadowMap.length>0&&Ce.setValue(z,"sunShadowMap",yn.state.sunShadowMap,lt),yn.state.directionalShadowMap.length>0&&Ce.setValue(z,"directionalShadowMap",yn.state.directionalShadowMap,lt),yn.state.spotShadowMap.length>0&&Ce.setValue(z,"spotShadowMap",yn.state.spotShadowMap,lt),yn.state.pointShadowMap.length>0&&Ce.setValue(z,"pointShadowMap",yn.state.pointShadowMap,lt)),tt.isSkinnedMesh){Ce.setOptional(z,tt,"bindMatrix"),Ce.setOptional(z,tt,"bindMatrixInverse");const Ue=tt.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Ce.setValue(z,"boneTexture",Ue.boneTexture,lt))}tt.isBatchedMesh&&(Ce.setOptional(z,tt,"batchingTexture"),Ce.setValue(z,"batchingTexture",tt._matricesTexture,lt),Ce.setOptional(z,tt,"batchingIdTexture"),Ce.setValue(z,"batchingIdTexture",tt._indirectTexture,lt),Ce.setOptional(z,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ce.setValue(z,"batchingColorTexture",tt._colorsTexture,lt));const Zi=ot.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&X.update(tt,ot,Zn),(Yi||Gt.receiveShadow!==tt.receiveShadow)&&(Gt.receiveShadow=tt.receiveShadow,Ce.setValue(z,"receiveShadow",tt.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(We.envMapIntensity.value=W.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=e_()),Yi){if(Ce.setValue(z,"toneMappingExposure",T.toneMappingExposure),Gt.needsLights&&Ro(We,Ps),Ut&&j.fog===!0&&Xt.refreshFogUniforms(We,Ut),Xt.refreshMaterialUniforms(We,j,Z,B,b.state.transmissionRenderTarget[L.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ue=Gt.lightProbeGrid;We.probesSH.value=Ue.texture,We.probesMin.value.copy(Ue.boundingBox.min),We.probesMax.value.copy(Ue.boundingBox.max),We.probesResolution.value.copy(Ue.resolution)}Ra.upload(z,Ln(Gt),We,lt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ra.upload(z,Ln(Gt),We,lt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ce.setValue(z,"center",tt.center),Ce.setValue(z,"modelViewMatrix",tt.modelViewMatrix),Ce.setValue(z,"normalMatrix",tt.normalMatrix),Ce.setValue(z,"modelMatrix",tt.matrixWorld),j.uniformsGroups!==void 0){const Ue=j.uniformsGroups;for(let $i=0,Ls=Ue.length;$i<Ls;$i++){const ch=Ue[$i];gt.update(ch,Zn),gt.bind(ch,Zn)}}return Zn}function Ro(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.sunLights.needsUpdate=W,L.sunLightShadows.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function el(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(L,W,ot){const j=nt.get(L);j.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),nt.get(L.texture).__webglTexture=W,nt.get(L.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:ot,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,W){const ot=nt.get(L);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,ot=0){G=L,N=W,F=ot;let j=null,tt=!1,Ut=!1;if(L){const Ot=nt.get(L);if(Ot.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(z.FRAMEBUFFER,Ot.__webglFramebuffer),et.copy(L.viewport),St.copy(L.scissor),bt=L.scissorTest,A.viewport(et),A.scissor(St),A.setScissorTest(bt),H=-1;return}else if(Ot.__webglFramebuffer===void 0)lt.setupRenderTarget(L);else if(Ot.__hasExternalTextures)lt.rebindTextures(L,nt.get(L.texture).__webglTexture,nt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ce=L.depthTexture;if(Ot.__boundDepthTexture!==ce){if(ce!==null&&nt.has(ce)&&(L.width!==ce.image.width||L.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(L)}}const Vt=L.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ut=!0);const Zt=nt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Zt[W])?j=Zt[W][ot]:j=Zt[W],tt=!0):L.samples>0&&lt.useMultisampledRTT(L)===!1?j=nt.get(L).__webglMultisampledFramebuffer:Array.isArray(Zt)?j=Zt[ot]:j=Zt,et.copy(L.viewport),St.copy(L.scissor),bt=L.scissorTest}else et.copy(V).multiplyScalar(Z).floor(),St.copy(at).multiplyScalar(Z).floor(),bt=vt;if(ot!==0&&(j=P),A.bindFramebuffer(z.FRAMEBUFFER,j)&&A.drawBuffers(L,j),A.viewport(et),A.scissor(St),A.setScissorTest(bt),tt){const Ot=nt.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,ot)}else if(Ut){const Ot=W;for(let Vt=0;Vt<L.textures.length;Vt++){const Zt=nt.get(L.textures[Vt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Vt,Zt.__webglTexture,ot,Ot)}}else if(L!==null&&ot!==0){const Ot=nt.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,ot)}H=-1};function Fr(L){const W=nt.get(L);return(W.__readFormat!==L.format||W.__readType!==L.type)&&(W.__readFormat=L.format,W.__readType=L.type,W.__formatReadable=U.textureFormatReadable(L.format),W.__typeReadable=U.textureTypeReadable(L.type)),W}this.readRenderTargetPixels=function(L,W,ot,j,tt,Ut,kt,Ot=0){if(!(L&&L.isWebGLRenderTarget)){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt){A.bindFramebuffer(z.FRAMEBUFFER,Vt);try{const Zt=L.textures[Ot],ce=Zt.format,he=Zt.type;L.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot);const Wt=Fr(Zt);if(Wt.__formatReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-j&&ot>=0&&ot<=L.height-tt&&z.readPixels(W,ot,j,tt,Pt.convert(ce),Pt.convert(he),Ut)}finally{const Zt=G!==null?nt.get(G).__webglFramebuffer:null;A.bindFramebuffer(z.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(L,W,ot,j,tt,Ut,kt,Ot=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt)if(W>=0&&W<=L.width-j&&ot>=0&&ot<=L.height-tt){A.bindFramebuffer(z.FRAMEBUFFER,Vt);const Zt=L.textures[Ot],ce=Zt.format,he=Zt.type;L.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot);const Wt=Fr(Zt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.bufferData(z.PIXEL_PACK_BUFFER,Ut.byteLength,z.STREAM_READ),z.readPixels(W,ot,j,tt,Pt.convert(ce),Pt.convert(he),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const qe=G!==null?nt.get(G).__webglFramebuffer:null;A.bindFramebuffer(z.FRAMEBUFFER,qe);const Oe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Xd(z,Oe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ut),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Se),z.deleteSync(Oe),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,W=null,ot=0){const j=Math.pow(2,-ot),tt=Math.floor(L.image.width*j),Ut=Math.floor(L.image.height*j),kt=W!==null?W.x:0,Ot=W!==null?W.y:0;lt.setTexture2D(L,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,kt,Ot,tt,Ut),A.unbindTexture()},this.copyTextureToTexture=function(L,W,ot=null,j=null,tt=0,Ut=0){let kt,Ot,Vt,Zt,ce,he,Wt,Se,qe;const Oe=L.isCompressedTexture?L.mipmaps[Ut]:L.image;if(ot!==null)kt=ot.max.x-ot.min.x,Ot=ot.max.y-ot.min.y,Vt=ot.isBox3?ot.max.z-ot.min.z:1,Zt=ot.min.x,ce=ot.min.y,he=ot.isBox3?ot.min.z:0;else{const We=Math.pow(2,-tt);kt=Math.floor(Oe.width*We),Ot=Math.floor(Oe.height*We),L.isDataArrayTexture?Vt=Oe.depth:L.isData3DTexture?Vt=Math.floor(Oe.depth*We):Vt=1,Zt=0,ce=0,he=0}j!==null?(Wt=j.x,Se=j.y,qe=j.z):(Wt=0,Se=0,qe=0);const De=Pt.convert(W.format),un=Pt.convert(W.type);let Gt;W.isData3DTexture?(lt.setTexture3D(W,0),Gt=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(lt.setTexture2DArray(W,0),Gt=z.TEXTURE_2D_ARRAY):(lt.setTexture2D(W,0),Gt=z.TEXTURE_2D),A.activeTexture(z.TEXTURE0),A.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),A.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),A.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const yn=A.getParameter(z.UNPACK_ROW_LENGTH),_e=A.getParameter(z.UNPACK_IMAGE_HEIGHT),Zn=A.getParameter(z.UNPACK_SKIP_PIXELS),mi=A.getParameter(z.UNPACK_SKIP_ROWS),Yi=A.getParameter(z.UNPACK_SKIP_IMAGES);A.pixelStorei(z.UNPACK_ROW_LENGTH,Oe.width),A.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Oe.height),A.pixelStorei(z.UNPACK_SKIP_PIXELS,Zt),A.pixelStorei(z.UNPACK_SKIP_ROWS,ce),A.pixelStorei(z.UNPACK_SKIP_IMAGES,he);const Ps=L.isDataArrayTexture||L.isData3DTexture,Ce=W.isDataArrayTexture||W.isData3DTexture;if(L.isDepthTexture){const We=nt.get(L),Zi=nt.get(W),Ue=nt.get(We.__renderTarget),$i=nt.get(Zi.__renderTarget);A.bindFramebuffer(z.READ_FRAMEBUFFER,Ue.__webglFramebuffer),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Ls=0;Ls<Vt;Ls++)Ps&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nt.get(L).__webglTexture,tt,he+Ls),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nt.get(W).__webglTexture,Ut,qe+Ls)),z.blitFramebuffer(Zt,ce,kt,Ot,Wt,Se,kt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);A.bindFramebuffer(z.READ_FRAMEBUFFER,null),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(tt!==0||L.isRenderTargetTexture||nt.has(L)){const We=nt.get(L),Zi=nt.get(W);A.bindFramebuffer(z.READ_FRAMEBUFFER,R),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,I);for(let Ue=0;Ue<Vt;Ue++)Ps?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.__webglTexture,tt,he+Ue):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,We.__webglTexture,tt),Ce?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Zi.__webglTexture,Ut,qe+Ue):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Zi.__webglTexture,Ut),tt!==0?z.blitFramebuffer(Zt,ce,kt,Ot,Wt,Se,kt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):Ce?z.copyTexSubImage3D(Gt,Ut,Wt,Se,qe+Ue,Zt,ce,kt,Ot):z.copyTexSubImage2D(Gt,Ut,Wt,Se,Zt,ce,kt,Ot);A.bindFramebuffer(z.READ_FRAMEBUFFER,null),A.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ce?L.isDataTexture||L.isData3DTexture?z.texSubImage3D(Gt,Ut,Wt,Se,qe,kt,Ot,Vt,De,un,Oe.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Gt,Ut,Wt,Se,qe,kt,Ot,Vt,De,Oe.data):z.texSubImage3D(Gt,Ut,Wt,Se,qe,kt,Ot,Vt,De,un,Oe):L.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ut,Wt,Se,kt,Ot,De,un,Oe.data):L.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ut,Wt,Se,Oe.width,Oe.height,De,Oe.data):z.texSubImage2D(z.TEXTURE_2D,Ut,Wt,Se,kt,Ot,De,un,Oe);A.pixelStorei(z.UNPACK_ROW_LENGTH,yn),A.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_e),A.pixelStorei(z.UNPACK_SKIP_PIXELS,Zn),A.pixelStorei(z.UNPACK_SKIP_ROWS,mi),A.pixelStorei(z.UNPACK_SKIP_IMAGES,Yi),Ut===0&&W.generateMipmaps&&z.generateMipmap(Gt),A.unbindTexture()},this.initRenderTarget=function(L){nt.get(L).__webglFramebuffer===void 0&&lt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?lt.setTextureCube(L,0):L.isData3DTexture?lt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?lt.setTexture2DArray(L,0):lt.setTexture2D(L,0),A.unbindTexture()},this.resetState=function(){N=0,F=0,G=null,A.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const th=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:M0,AddEquation:Ss,AddOperation:Ef,AdditiveBlending:po,AgXToneMapping:y0,AlphaFormat:P0,AlwaysCompare:Uf,AlwaysDepth:Na,AlwaysStencilFunc:Rf,ArcCurve:qf,ArrayCamera:hd,BackSide:xn,BasicDepthPacking:Tf,Box3:us,BoxGeometry:Be,BufferAttribute:Yn,BufferGeometry:Le,ByteType:T0,Cache:Aa,Camera:J0,CanvasTexture:kc,CatmullRomCurve3:Vc,CineonToneMapping:v0,CircleGeometry:wo,ClampToEdgeWrapping:ai,Color:$t,ColorManagement:de,ConstantAlphaFactor:yf,ConstantColorFactor:Mf,Controls:ud,CubeCamera:ld,CubeDepthTexture:Xf,CubeReflectionMapping:ls,CubeRefractionMapping:Ts,CubeTexture:G0,CubeUVReflectionMapping:Dr,CubicBezierCurve:W0,CubicBezierCurve3:Yf,CullFaceBack:Xl,CullFaceFront:sf,CullFaceNone:nf,Curve:pi,CurvePath:$f,CustomBlending:rf,CustomToneMapping:S0,CylinderGeometry:vn,Data3DTexture:kf,DataArrayTexture:U0,DataTexture:Bc,DefaultLoadingManager:rd,DepthFormat:Ri,DepthStencilFormat:rs,DepthTexture:vo,DirectionalLight:Q0,DoubleSide:Je,DstAlphaFactor:mf,DstColorFactor:_f,DynamicDrawUsage:Nf,EllipseCurve:Hc,EqualCompare:Lf,EqualDepth:Oa,EquirectangularReflectionMapping:er,EquirectangularRefractionMapping:ba,Euler:Ci,EventDispatcher:Xi,ExternalTexture:H0,ExtrudeGeometry:Ir,Float32BufferAttribute:se,FloatType:Qn,Fog:Oc,FrontSide:li,Frustum:zc,GLSL3:Zl,GreaterCompare:Df,GreaterDepth:za,GreaterEqualCompare:Nc,GreaterEqualDepth:Ba,Group:Me,HalfFloatType:fi,HemisphereLight:$0,IcosahedronGeometry:Pi,ImageLoader:ad,ImageUtils:Bf,InstancedBufferAttribute:$l,InstancedMesh:zn,IntType:Ac,InterleavedBuffer:Hf,InterleavedBufferAttribute:wr,KeepStencilOp:Ea,Layers:N0,LessCompare:Pf,LessDepth:Fa,LessEqualCompare:Uc,LessEqualDepth:mo,Light:Zc,LightShadow:K0,LineCurve:X0,LineCurve3:Zf,LinearFilter:hn,LinearMipmapLinearFilter:os,LinearMipmapNearestFilter:wa,LinearSRGBColorSpace:vr,LinearToneMapping:_0,LinearTransfer:Mr,Loader:Yc,LoadingManager:od,MOUSE:Hi,Material:fs,MathUtils:ue,Matrix2:t0,Matrix3:ie,Matrix4:Pe,MaxEquation:hf,Mesh:ae,MeshBasicMaterial:Pn,MeshDepthMaterial:id,MeshDistanceMaterial:sd,MeshLambertMaterial:te,MeshPhongMaterial:hr,MinEquation:lf,MirroredRepeatWrapping:As,MixOperation:wf,MultiplyBlending:Yl,MultiplyOperation:Lr,NearestFilter:Qe,NearestMipmapLinearFilter:Ho,NearestMipmapNearestFilter:E0,NeutralToneMapping:b0,NeverCompare:Cf,NeverDepth:Ua,NoBlending:wi,NoColorSpace:Fi,NoToneMapping:hi,NormalBlending:oo,NotEqualCompare:If,NotEqualDepth:ka,Object3D:be,ObjectSpaceNormalMap:Af,OneFactor:ff,OneMinusConstantAlphaFactor:bf,OneMinusConstantColorFactor:Sf,OneMinusDstAlphaFactor:gf,OneMinusDstColorFactor:xf,OneMinusSrcAlphaFactor:g0,OneMinusSrcColorFactor:pf,OrthographicCamera:$c,PCFShadowMap:tr,PCFSoftShadowMap:of,PMREMGenerator:e0,Path:Kl,PerspectiveCamera:ln,Plane:Mi,PlaneGeometry:di,PointLight:cd,PolyhedronGeometry:Gc,QuadraticBezierCurve:q0,QuadraticBezierCurve3:Wc,Quaternion:Wi,R11_EAC_Format:Za,RED_GREEN_RGTC2_Format:_r,RED_RGTC1_Format:pc,REVISION:Tc,RG11_EAC_Format:gr,RGBAFormat:jn,RGBAIntegerFormat:Ic,RGBA_ASTC_10x10_Format:cc,RGBA_ASTC_10x5_Format:oc,RGBA_ASTC_10x6_Format:rc,RGBA_ASTC_10x8_Format:ac,RGBA_ASTC_12x10_Format:lc,RGBA_ASTC_12x12_Format:hc,RGBA_ASTC_4x4_Format:Ja,RGBA_ASTC_5x4_Format:Qa,RGBA_ASTC_5x5_Format:ja,RGBA_ASTC_6x5_Format:tc,RGBA_ASTC_6x6_Format:ec,RGBA_ASTC_8x5_Format:nc,RGBA_ASTC_8x6_Format:ic,RGBA_ASTC_8x8_Format:sc,RGBA_BPTC_Format:uc,RGBA_ETC2_EAC_Format:Ya,RGBA_PVRTC_2BPPV1_Format:Wa,RGBA_PVRTC_4BPPV1_Format:Va,RGBA_S3TC_DXT1_Format:ir,RGBA_S3TC_DXT3_Format:sr,RGBA_S3TC_DXT5_Format:or,RGBFormat:L0,RGB_BPTC_SIGNED_Format:fc,RGB_BPTC_UNSIGNED_Format:dc,RGB_ETC1_Format:Xa,RGB_ETC2_Format:qa,RGB_PVRTC_2BPPV1_Format:Ha,RGB_PVRTC_4BPPV1_Format:Ga,RGB_S3TC_DXT1_Format:nr,RGFormat:hs,RGIntegerFormat:Dc,RawShaderMaterial:nd,Ray:k0,RedFormat:Pc,RedIntegerFormat:Lc,ReinhardToneMapping:x0,RenderTarget:zf,RepeatWrapping:mr,ReverseSubtractEquation:cf,RingGeometry:qc,SIGNED_R11_EAC_Format:$a,SIGNED_RED_GREEN_RGTC2_Format:gc,SIGNED_RED_RGTC1_Format:mc,SIGNED_RG11_EAC_Format:Ka,SRGBColorSpace:rn,SRGBTransfer:ye,Scene:F0,ShaderChunk:re,ShaderLib:oi,ShaderMaterial:kn,Shape:Xc,ShapeUtils:bi,ShortType:A0,Sphere:bo,SphereGeometry:An,Spherical:jl,SplineCurve:Y0,Sprite:Wf,SpriteMaterial:z0,SrcAlphaFactor:m0,SrcAlphaSaturateFactor:vf,SrcColorFactor:df,StaticDrawUsage:D0,SubtractEquation:af,SubtractiveBlending:ql,TOUCH:yi,TangentSpaceNormalMap:xr,Texture:an,TextureLoader:Z0,TextureSource:Fc,TorusGeometry:Ti,Triangle:qn,TubeGeometry:Eo,UVMapping:w0,Uint16BufferAttribute:O0,Uint32BufferAttribute:B0,UniformsLib:Nt,UniformsUtils:ed,UnsignedByteType:Fn,UnsignedInt101111Type:C0,UnsignedInt248Type:_o,UnsignedInt5999Type:R0,UnsignedIntType:ui,UnsignedShort4444Type:Rc,UnsignedShort5551Type:Cc,UnsignedShortType:go,VSMShadowMap:io,Vector2:xt,Vector3:O,Vector4:Ge,WebGLCoordinateSystem:ci,WebGLCubeRenderTarget:j0,WebGLRenderTarget:ti,WebGLRenderer:Md,WebGLUtils:xd,WebGPUCoordinateSystem:xo,WebXRController:Ta,ZeroFactor:uf,createCanvasElement:Ff,error:pe,log:yr,warn:jt,warnOnce:bs},Symbol.toStringTag,{value:"Module"})),lu={type:"change"},eh={type:"start"},Sd={type:"end"},ha=new k0,hu=new Mi,n_=Math.cos(70*ue.DEG2RAD),$e=new O,Dn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dl=1e-6;class i_ extends ud{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Wi,this._lastTargetPosition=new O,this._quat=new Wi().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jl,this._sphericalDelta=new jl,this._scale=1,this._panOffset=new O,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new O,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o_.bind(this),this._onPointerDown=s_.bind(this),this._onPointerUp=r_.bind(this),this._onContextMenu=d_.bind(this),this._onMouseWheel=l_.bind(this),this._onKeyDown=h_.bind(this),this._onTouchStart=u_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=a_.bind(this),this._onMouseMove=c_.bind(this),this._interceptControlDown=p_.bind(this),this._interceptControlUp=m_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Te.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lu),this.update(),this.state=Te.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Dn:n>Math.PI&&(n-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=$e.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<n_?this.object.lookAt(this.target):(hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane(hu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dl||this._lastTargetPosition.distanceToSquared(this.target)>Dl?(this.dispatchEvent(lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;$e.copy(s).sub(this.target);let o=$e.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function s_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function o_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function r_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sd),this.state=Te.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function a_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case Hi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case Hi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(eh)}function c_(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function l_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(eh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sd))}function h_(i){this.enabled!==!1&&this._handleKeyDown(i)}function u_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case yi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case yi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case yi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(eh)}function f_(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function d_(i){this.enabled!==!1&&i.preventDefault()}function p_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const{clamp:xc,lerp:Un,smoothstep:xi}=ue;function sn(i,t,e){let n=null,s=0;for(let o=1;o<e.length;o++){const[r,a]=e[o-1],[l,c]=e[o],u=l-r,f=c-a,h=Math.hypot(u,f);if(h<.01)continue;const p=xc(((i-r)*u+(t-a)*f)/h,0,h),d=r+u*p/h,_=a+f*p/h,m=Math.hypot(i-d,t-_);if(!n||m<n.distance){const g=-f/h,x=u/h;n={x:d,z:_,nx:g,nz:x,offset:(i-d)*g+(t-_)*x,run:s+p,distance:m}}s+=h}return n&&{...n,length:s}}function ur(i,t=0){return[Math.min(...i.map(([e])=>e))-t,Math.min(...i.map(([,e])=>e))-t,Math.max(...i.map(([e])=>e))+t,Math.max(...i.map(([,e])=>e))+t]}function Il([i,t,e,n],[s,o,r,a]){return i<r&&e>s&&t<a&&n>o}function ua(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function Js(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([Un(s[0],o[0],l),Un(s[1],o[1],l)])}}return e}function g_(i){const t=i.edge,[e,n]=t[0],[s,o]=t.at(-1),r=Math.hypot(s-e,o-n),a=(s-e)/r,l=(o-n)/r,c=(p,d)=>(p-e)*a+(d-n)*l,u=t.slice(1).map((p,d)=>{const _=t[d],[m,g]=_,[x,M]=p,v=Math.hypot(x-m,M-g),S=c(m,g),b=c(x,M);return{a:_,b:p,span:v,start:S,end:b,offset:(y,E)=>((y-m)*(g-M)+(E-g)*(x-m))/v,bounds:ur([_,p],.005)}}),f=ur(t,i.reach??95),h=ur(t,.01);return{...i,length:r,station:c,segments:u,range:f,crestBounds:h}}function Ul(i,t,e){const n=i.station(t,e);if(n<-.001||n>i.length+.001)return null;if(i.soft){let f=null;for(const h of i.segments){const{a:p,b:d,span:_}=h,m=d[0]-p[0],g=d[1]-p[1],x=xc(((t-p[0])*m+(e-p[1])*g)/(_*_),0,1),M=t-p[0]-x*m,v=e-p[1]-x*g,S=Math.hypot(M,v);if(!f||S<f.distance){const b=M*-g+v*m;f={distance:S,offset:Math.sign(b)*S,upper:Un(p[2],d[2],x),lower:Un(p[3],d[3],x)}}}return f}const s=i.segments.find(({end:f})=>n<=f+.001)??i.segments.at(-1),{a:o,b:r,offset:a,start:l,end:c}=s,u=xc((n-l)/(c-l),0,1);return{offset:a(t,e),upper:Un(o[2],r[2],u),lower:Un(o[3],r[3],u)}}function __(i){const t=[];for(const e of i){if(!e.edge||e.edge.length<2)continue;const n={...e,upperDecks:e.upperDeck?[e.upperDeck]:[],lowerDecks:e.lowerDeck?[e.lowerDeck]:[]},s=t.at(-1);if(!s||s.soft||n.soft||s.edge.at(-1).some((o,r)=>Math.abs(o-n.edge[0][r])>.01)){t.push(n);continue}s.edge=[...s.edge,...n.edge.slice(1)],s.shore=[...s.shore,...n.shore.slice(1)],s.breaks=[...s.breaks??[],...n.breaks??[]],s.upperDecks.push(...n.upperDecks),s.lowerDecks.push(...n.lowerDecks),s.flatInland=Math.max(s.flatInland??10,n.flatInland??10),s.blendInland=Math.max(s.blendInland??50,n.blendInland??50),s.endFade=n.endFade}return t}function x_(i){const t=__(i).map(g_),e=i.filter(({beach:m})=>m?.length>1).map(m=>({...m,range:ur(m.beach,m.reach??100)})),n=i.flatMap(m=>m.paths??[]),s=Object.assign({},...i.map(m=>m.upperIds)),o=Object.assign({},...i.map(m=>m.lowerIds)),r=Object.assign({},...i.map(m=>m.stairs)),a=Object.assign({},...i.map(m=>m.ramps)),l=Object.assign({},...i.map(m=>m.stairWidths)),c=Object.assign({},...i.map(m=>m.stairRun)),u=new Set(i.flatMap(m=>m.underDeckIds??[])),f=[...t,...e].map(m=>m.range);function h(m,g,x,M){const v=M?[M.section]:t;for(const S of v){if(!ua(m,g,S.range))continue;const b=Ul(S,m,g);if(!b||b.offset<-(S.reach??95)||b.offset>52)continue;const w=sn(m,g,S.shore??[]),y=S.shoreRise??(S.soft?6.5:3.6),E=S.station(m,g),T=S.startFade??(S.soft?S.fade??12:11),C=S.endFade??(S.soft?S.fade??12:15),D=T?xi(E,0,T):1,P=C?1-xi(E,S.length-C,S.length):1,R=D*P,I=w?Un(.18,b.lower,xi(w.distance,0,y)):b.lower;if(S.soft){const F=xi(b.offset,-(S.slopeWidth??18),0),G=1-xi(b.offset,10,50);return Un(x,Un(I,b.upper,F),R*G)}if(M?.section===S?M.upper:b.offset>=0){const F=1-xi(Math.max(0,b.offset),S.flatInland??10,S.blendInland??50);return Un(x,b.upper,F*R)}if(!(w&&w.distance>(S.maxShoreDistance??105)))return Un(x,I,R)}for(const S of e){if(!ua(m,g,S.range))continue;const b=sn(m,g,S.beach),w=sn(m,g,S.shore);if(!b||!w||b.distance>(S.reach??100))continue;const y=Math.max(6,sn(b.x,b.z,S.shore)?.distance??20);let E=0,T=S.beach[0][2];for(let P=1;P<S.beach.length;P++){const R=S.beach[P-1],I=S.beach[P],N=Math.hypot(I[0]-R[0],I[1]-R[1]);if(b.run<=E+N+.01){T=Un(R[2],I[2],xc((b.run-E)/N,0,1));break}E+=N}const C=xi(b.run,0,12)*(1-xi(b.run,b.length-30,b.length)),D=1-xi(b.offset,12,55);return Un(x,Un(.18,T,xi(w.distance,0,y)),C*D)}return x}function p(m){const g=ur(m);for(const x of t){let w=function(y,E){y.length>=3&&b.push({ring:y,side:E})};if(x.soft||!Il(g,x.crestBounds))continue;const{station:M,length:v}=x;if(!x.segments.filter(y=>Il(g,y.bounds)).some(y=>{const E=m.map(([T,C])=>y.offset(T,C));return Math.min(...E)<=1e-7&&Math.max(...E)>=-1e-7}))continue;const b=[];w(Js(m,([y,E])=>-M(y,E)));for(const y of x.segments){const{start:E,end:T,offset:C}=y;let D=Js(m,([P,R])=>M(P,R)-E);D=Js(D,([P,R])=>T-M(P,R)),!(D.length<3)&&(w(Js(D,([P,R])=>C(P,R)),{section:x,upper:!0}),w(Js(D,([P,R])=>-C(P,R)),{section:x,upper:!1}))}return w(Js(m,([y,E])=>M(y,E)-v)),b}return null}function d(m,g){return t.some(x=>!x.soft&&ua(m,g,x.range)&&Math.abs(Ul(x,m,g)?.offset??1/0)<7)}function _(m,g,x){for(const M of t){if(!ua(m,g,M.range))continue;const v=Ul(M,m,g);if(v&&Math.abs(v.offset)<36)return v.lower}return x}return{sections:t,extras:n,upperWidths:s,lowerWidths:o,stairLevels:r,rampLevels:a,stairWidths:l,stairRuns:c,deckRoofs:u,apply:h,split:p,nearEdge:d,lowerGrade:_,refines:(m,g,x)=>f.some(M=>Il([m,g,m+x,g+x],M))}}const Xo=Object.freeze({west:-647,east:-125,north:-138,south:129,innerWest:-624,innerEast:-144,innerNorth:-107,innerSouth:104}),es=i=>i.toFixed(1),{west:v_,east:M_,north:S_,south:y_,innerWest:b_,innerEast:w_,innerNorth:E_,innerSouth:T_}=Xo,Qc=`
  float cartoonDistrict(vec2 worldXZ) {
    // The harbour curves north at the Ocean end of the promenade.
    float harbourBend = 61.0 * (1.0 - smoothstep(-595.0, -500.0, worldXZ.x));
    vec2 fromWestNorth = smoothstep(
      vec2(${es(v_)}, ${es(S_)} - harbourBend),
      vec2(${es(b_)}, ${es(E_)} - harbourBend), worldXZ);
    vec2 fromEastSouth = 1.0 - smoothstep(
      vec2(${es(w_)}, ${es(T_)}),
      vec2(${es(M_)}, ${es(y_)}), worldXZ);
    return fromWestNorth.x * fromWestNorth.y * fromEastSouth.x * fromEastSouth.y;
  }
`,Ur={cartoonEnabled:{value:1}};function A_(i){Ur.cartoonEnabled.value=i?1:0}const uu={plaster:{tile:"plaster",size:[2.9,2.9],grain:.63,tint:"#ebc190",palette:.3},stone:{tile:"stone",size:[3.3,2.05],grain:.67,tint:"#caa36b",palette:.18},paving:{tile:"stone",size:[3.3,3.3],grain:.39,tint:"#dfc59c",palette:.17},laidPaving:{tile:"plaster",size:[2.6,2.6],grain:.55,tint:"#bebeb7",palette:.12},roof:{tile:"terracotta",size:[2.45,1.45],grain:.5,tint:"#bd6243",palette:.22},flatRoof:{tile:"plaster",size:[5.1,5.1],grain:.44,tint:"#c9bc9f",palette:.12},foliage:{tile:"leaves",size:[3,3],grain:.6,tint:"#7ea72f",palette:.52},glass:{tile:"plaster",size:[4,3],grain:.16,tint:"#4e7881",palette:.38},wood:{tile:"plaster",size:[1.2,3.5],grain:.53,tint:"#94663c",palette:.14},metal:{tile:"plaster",size:[3.5,3.5],grain:.17,tint:"#ad9d86",palette:.09},ground:{tile:"plaster",size:[8.2,8.2],grain:.53,tint:"#d8b97e",palette:.2},road:{tile:"plaster",size:[4.3,4.3],grain:.33,tint:"#918780",palette:.23}},R_={plaster:.694,stone:.568,terracotta:.271,leaves:.232},Nl=new Map,Fl=new Map,fu=new WeakSet;function yd(i){if(Nl.has(i))return Nl.get(i);const t={value:0},e=`./art/waterfront-${i}.webp`,n=new Z0().load(e,()=>{t.value=1});n.colorSpace=rn,n.wrapS=As,n.wrapT=i==="terracotta"?mr:As,n.anisotropy=4;const s={texture:n,ready:t};return Nl.set(i,s),s}function C_(i,t,e){const n=`${i}|${t}|${e}`;if(Fl.has(n))return Fl.get(n);const s={value:0},o=`./${i.replace(/^\/+/,"")}`,r=new Z0().load(o,()=>{s.value=1});r.colorSpace=rn,r.wrapS=r.wrapT=t?As:ai,e?(r.magFilter=Qe,r.minFilter=E0):r.anisotropy=4;const a={texture:r,ready:s};return Fl.set(n,a),a}function P_(){if(typeof document>"u")return{waterPigment:{value:null},waterPigmentReady:{value:0}};const i=yd("water");return{waterPigment:{value:i.texture},waterPigmentReady:i.ready}}function Bn(i,{surface:t="plaster",strength:e=1,texture:n=null}={}){if(fu.has(i)||typeof document>"u")return i;if(fu.add(i),n?.path)return L_(i,n,e);const{tile:s,size:o,grain:r,tint:a,palette:l}=uu[t]??uu.plaster,c=yd(s),u=i.onBeforeCompile,f=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${f}|anapa-paint|${t}|${e}`,i.onBeforeCompile=function(h,p){u.call(this,h,p),Object.assign(h.uniforms,Ur,{pigment:{value:c.texture},pigmentReady:c.ready,pigmentMean:{value:R_[s]},pigmentPeriod:{value:new xt(...o)},pigmentTint:{value:new $t(a)},pigmentPalette:{value:l},pigmentGrain:{value:r},pigmentStrength:{value:e}}),h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
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
        ${Qc}
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
      `)},i.needsUpdate=!0,i}function L_(i,{path:t,size:e=[3,3],axes:n,repeat:s=!0,amount:o=1,pixelated:r=!1},a){const l=C_(t,s,r),c=i.onBeforeCompile,u=i.customProgramCacheKey();return i.customProgramCacheKey=()=>`${u}|anapa-individual-paint`,i.onBeforeCompile=function(f,h){c.call(this,f,h),Object.assign(f.uniforms,Ur,{individualPigment:{value:l.texture},individualReady:l.ready,individualPeriod:{value:new xt(...e)},individualAmount:{value:a*o},individualUseAxes:{value:n?1:0},individualOrigin:{value:new O(...n?.origin??[0,0,0])},individualU:{value:new O(...n?.u??[1,0,0])},individualV:{value:new O(...n?.v??[0,1,0])}}),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
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
        ${Qc}
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
      `)},i.needsUpdate=!0,i}const bd="#526e7c",D_="#f0eee6";function me(i,t,{surface:e="plaster",surfaces:n={},textures:s={}}={}){const o=new Map,r=new Map([[bd,"glass"]]);for(const[d,_]of Object.entries(n))for(const m of _)r.set(m,d);const a=new Me;a.name=t,i.add(a);function l(d,_,m){const g=r.get(d)??_;o.has(g)||o.set(g,new Map);const x=o.get(g);x.has(d)||x.set(d,[]);const M=x.get(d);for(let v=2;v<m.length;v++)M.push(...m[0],...m[v-1],...m[v])}function c(d,..._){l(d,e,_)}function u(d,_,m){const g=d.map(([x,M])=>new xt(x,M));for(const[x,M,v]of bi.triangulateShape(g,[])){const[S,b,w]=[g[x],g[M],g[v]],E=(b.x-S.x)*(w.y-S.y)-(b.y-S.y)*(w.x-S.x)>0?[S,w,b]:[S,b,w];l(m,"paving",E.map(({x:T,y:C})=>[T,_,C]))}}function f(d,_,m,g,x){c(x,[d[0],m,d[1]],[_[0],m,_[1]],[_[0],g,_[1]],[d[0],g,d[1]])}function h(d,_,m,g,x=g){const M=d.reduce((v,[S,b],w)=>{const[y,E]=d[(w+1)%d.length];return v+S*E-y*b},0);d.forEach((v,S)=>{const b=d[(S+1)%d.length];M>0?f(b,v,_,m,g):f(v,b,_,m,g)}),x&&u(d,m,x)}function p(d,_,m,g){const x=new O(...d),M=new O(..._),v=M.clone().sub(x).normalize(),b=(Math.abs(v.z)<.9?new O(0,0,1):new O(1,0,0)).cross(v).normalize().multiplyScalar(m/2),w=v.clone().cross(b),y=[x,M].map(E=>[[1,1],[-1,1],[-1,-1],[1,-1]].map(([T,C])=>E.clone().addScaledVector(b,T).addScaledVector(w,C).toArray()));for(let E=0;E<4;E++){const T=(E+1)%4;l(g,"metal",[y[0][E],y[1][E],y[1][T],y[0][T]])}l(g,"metal",y[0]),l(g,"metal",y[1].reverse())}return{face:c,flat:u,wall:f,shell:h,beam:p,finish(){for(const[d,_]of o)for(const[m,g]of _){const x=new Le;x.setAttribute("position",new se(g,3)),x.computeVertexNormals();const M=s[m]??s[d],v=Bn(new te({color:m,side:Je}),{surface:d,texture:M}),S=new ae(x,v);S.castShadow=!0,S.receiveShadow=!0,a.add(S)}}}}function mt(i,t,e){return i.map((n,s)=>ue.lerp(n,t[s],e))}function Fe(i){return i.reduce(([t,e],[n,s])=>[t+n/i.length,e+s/i.length],[0,0])}function On(i,t,e,n,s,o,r,a=D_){const l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=Math.max(1,Math.round(l/r));for(let u=0;u<c;u++){const f=mt(n,mt(t,e,(u+.035)/c),1.003),h=mt(n,mt(t,e,(u+.965)/c),1.003);i.wall(f,h,s,o,bd),i.wall(h,mt(n,mt(t,e,(u+1)/c),1.003),s,o,a)}}function I_(i,t,e,n){const s=new be;s.position.set(t,e+3.98,n),s.userData.nightLight={color:"#ffcc88",intensity:27,range:9,ground:e},i.add(s)}function U_(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.48)"),e.addColorStop(.28,"rgba(255,255,255,0.22)"),e.addColorStop(.63,"rgba(255,255,255,0.05)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new z0({map:new kc(i),color:"#ffc47a",opacity:.78,blending:po,depthWrite:!1,toneMapped:!1})}function N_(){const i=new ae(new An(1,32,16),new kn({side:xn,depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{zenith:{value:new $t("#45567f")},horizon:{value:new $t("#9da8c7")},twilight:{value:new $t("#d3a699")}},vertexShader:`
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
    `}));return i.scale.setScalar(1500),i.frustumCulled=!1,i.renderOrder=-100,i}function F_(i,t){const e=[],n=[];for(const{position:{x:c,z:u},ground:f}of i){let h=function(d,_){const m=_*Math.PI*2/20,g=d/5,x=c+g*7.4*Math.cos(m),M=u+g*7.4*Math.sin(m),v=t(x,M),S=1-Math.min(1,Math.max(0,(Math.abs(v-f)-.28)/.72)),b=Math.min(f+.9,Math.max(f-.9,v))+.215;return[x,b,M,(1-g*g)**3*S]},p=function(...d){if(d.some(_=>_[3]>0))for(const[_,m,g,x]of d)e.push(_,m,g),n.push(x)};for(let d=0;d<5;d++)for(let _=0;_<20;_++){const m=h(d,_),g=h(d,_+1),x=h(d+1,_),M=h(d+1,_+1);d&&p(m,g,x),p(g,M,x)}}const a=new Le;a.setAttribute("position",new se(e,3)),a.setAttribute("lampStrength",new se(n,1));const l=new kn({side:Je,transparent:!0,depthWrite:!1,blending:po,vertexShader:`
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
    `});return new ae(a,l)}function O_(i,t){const e=[],n=[];i.updateMatrixWorld(!0),i.traverse(f=>{const{setEvening:h,nightLight:p}=f.userData;h&&e.push(h),p&&n.push({...p,position:f.getWorldPosition(new O)})});const s=n.filter(f=>f.ground!==void 0),o=new Me;o.name="Вечерний свет";const r=N_();if(o.add(r),s.length&&(o.add(F_(s,t)),typeof document<"u")){const f=U_();for(const{position:h}of s){const p=new Wf(f);p.position.copy(h),p.scale.set(2.5,2.5,1),o.add(p)}}const a=Array.from({length:5},()=>{const f=new cd("#fff",0,9,2);return o.add(f),f});i.add(o);const l=new O(1/0,1/0,1/0);let c=!1;function u(f){if(!c||(r.position.copy(f.position),l.distanceToSquared(f.position)<1.5))return;l.copy(f.position);const{x:h,y:p,z:d}=l,m=p-t(h,d)<26?n.map(g=>({source:g,distance:g.position.distanceToSquared(l)})).filter(({distance:g})=>g<33**2).sort((g,x)=>g.distance-x.distance):[];a.forEach((g,x)=>{const M=m[x]?.source;g.intensity=M?.intensity??0,M&&(g.position.copy(M.position),g.color.set(M.color),g.distance=M.range)})}return{setEnabled(f){c=f,o.visible=c,l.set(1/0,1/0,1/0),e.forEach(h=>h(c))},update:u}}function Ol(i,t,e,n=10){return Array.from({length:n},(s,o)=>{const r=o*Math.PI*2/n;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function wd(i,t,{name:e,lights:n,planters:s}){const o="#878887",r="#646765",a=me(i,e,{surfaces:{metal:[o,r],stone:["#d8d4c7"],ground:["#8c7e60"]}}),l=new zn(new An(.23,10,7),new te({color:"#eddaa4"}),n.length*4),c=new zn(new Pi(1,1),Bn(new te({color:"#607a45"}),{surface:"foliage"}),s.length*7);l.name="Плафоны верхней набережной",l.userData.setEvening=f=>{l.material.emissive.set(f?"#ffc37a":"#000"),l.material.emissiveIntensity=f?1.34:0},c.name="Кустарники в клумбах набережной";const u=new be;n.forEach(([f,h],p)=>{const d=t(f,h)+.03;I_(i,f,d,h),a.shell(Ol(f,h,.3),d-.13,d+.35,o),a.shell(Ol(f,h,.19),d+.32,d+3.72,o);for(const _ of[.44,.68,3.55,3.7])a.shell(Ol(f,h,.25),d+_,d+_+.1,r);for(let _=0;_<4;_++){const m=Math.PI/4+_*Math.PI/2,g=Math.cos(m),x=Math.sin(m),M=[f+g*.46,d+3.77,h+x*.46];a.beam([f+g*.1,d+3.49,h+x*.1],M,.075,r),u.position.set(M[0],M[1]+.19,M[2]),u.updateMatrix(),l.setMatrixAt(p*4+_,u.matrix)}}),s.forEach(({x:f,z:h,width:p,depth:d,angle:_},m)=>{const g=(v,S)=>[f+v*Math.cos(_)-S*Math.sin(_),h+v*Math.sin(_)+S*Math.cos(_)],x=(v,S)=>[[-v,-S],[v,-S],[v,S],[-v,S]].map(b=>g(...b)),M=t(f,h);a.shell(x(p/2,d/2),M-.1,M+.16,"#d8d4c7"),a.flat(x(p/2-.17,d/2-.17),M+.175,"#8c7e60");for(let v=0;v<7;v++){const[S,b]=g((v-3)*p/7.8,v%2?-.45:.52);u.position.set(S,M+.53,b);const w=.52+v%3*.17;u.scale.set(w,.5+v%2*.26,w*.84),u.rotation.y=v*1.8,u.updateMatrix(),c.setMatrixAt(m*7+v,u.matrix)}}),l.castShadow=!0,c.castShadow=!0,c.receiveShadow=!0,i.add(l,c),a.finish()}const vs={front:[[-549.25,-30.85],[-517.3,-24.44]],depth:9.15,grade:9.03},B_=[{soft:!0,edge:[[-1194.65,-.88,7.9,2.35],[-1188.5,-6.93,8.7,2.35],[-1176.23,-13.69,9.8,2.35],[-1157.84,-21.72,11.8,2.35],[-1124.63,-25.52,12.3,2.35],[-1073.23,-30.79,12.65,2.35],[-1033.68,-39.87,13.25,2.35],[-982.49,-49.59,13.9,2.35],[-926.44,-60.99,13.15,2.4],[-878.85,-73.87,12.1,2.4],[-852,-77.5,11,2.4],[-830.48,-78.2,8.65,2.4]],shore:[[-1195,-24],[-1186.4,-36.11],[-1161.69,-54.98],[-1142.57,-67.42],[-1119.74,-82.36],[-1095.11,-100.63],[-1060.66,-124.59],[-1054.64,-114.35],[-1036.42,-110.13],[-995.48,-107.91],[-965.35,-114.27],[-903.18,-133.53],[-868.87,-118.74],[-830.48,-132]],upperIds:{1293020296:7},lowerIds:{},stairs:{}},{soft:!0,slopeWidth:10.8,shoreRise:1.5,fade:0,edge:[[-830.48,-78.2,8.65,2.4],[-820.6,-84.1,6.7,2.4],[-806.05,-90.4,5.7,2.45],[-783.75,-94.4,4.6,2.45],[-753.37,-97.1,3.65,2.45],[-742.87,-98.3,3.45,2.45],[-728.5,-94.3,4.15,2.45],[-696.91,-88.7,5.45,2.45],[-673.68,-83.1,6.45,2.5],[-658.2,-79.35,6.8,2.5],[-641.17,-75.3,7.1,2.5],[-638.31,-66,7.65,2.5],[-605.95,-55.15,8.5,2.55],[-595.02,-59.9,8.8,2.6]],shore:[[-830.48,-132],[-827,-183.4],[-783.08,-190.76],[-774.16,-192.09],[-729.85,-199.2],[-709.27,-201.43],[-646.49,-232.7],[-636.97,-260.15],[-623.68,-157.59],[-595.02,-144]],lowerDeck:[[-826,-133],[-837,-178],[-783,-187],[-739,-193],[-728,-190],[-715,-191],[-697,-176],[-682,-150],[-659,-139],[-662,-109],[-704,-103],[-740,-100],[-779,-101],[-813,-103],[-825,-114]],upperIds:{596938944:4.2,178479537:3.2},lowerIds:{},stairs:{596938943:[8.65,6.7]},stairWidths:{596938943:2.5}},{fade:0,edge:[[-595.02,-59.9,8.8,2.6],[-587.5,-63.5,8.8,2.6],[-576,-56.7,9.05,2.6],[-559,-50.3,9.15,2.6],[-550,-46,9.1,2.6],[-531.8,-47.6,9.04,2.6],[-525.5,-50.1,9,2.6],[-519.4,-61.2,8.96,2.6],[-501.2,-54.2,8.82,2.6],[-485.4,-49,8.71,2.6],[-480.1,-48.6,8.66,2.6],[-447.5,-40.1,8.5,2.6],[-416,-34.55,8.3,2.6],[-410.5,-34.1,8.28,2.6],[-380,-29.6,8.12,2.6],[-372,-29,8.07,2.6],[-350,-29.15,7.98,2.6],[-320,-29,7.9,2.6],[-300,-32,7.8,2.6]],shore:[[-595.02,-144],[-573.37,-123.91],[-563.51,-116.13],[-552.8,-94],[-534.2,-89],[-490,-73.3],[-467.6,-82.1],[-442.59,-61.36],[-405.47,-52.91],[-397.91,-61.01],[-379.03,-54.91],[-372.9,-48.36],[-320.33,-44.46],[-300,-47.3]],upperIds:{178484904:11,701760799:3.45},lowerIds:{701760797:5.2},underDeckIds:["223948923","223948927","223948934","223948896","223948899","223948902","223948903","223948904","223948906","223948908"],upperDeck:[[-595.02,-59.9],[-587.5,-63.5],[-576,-56.7],[-559,-50.3],[-550,-46],[-531.8,-47.6],[-525.5,-50.1],[-519.4,-61.2],[-501.2,-54.2],[-485.4,-49],[-480.1,-48.6],[-447.5,-40.1],[-416,-34.55],[-410.5,-34.1],[-380,-29.6],[-372,-29],[-350,-29.15],[-320,-29],[-300,-32],[-300,2.5],[-314,1.7],[-365,-.3],[-394,-.6],[-419,-4.4],[-455,-13.2],[-477,-19.4],[-515,-27.5],[-549,-34.8],[-595,-47.1]],stairs:{701760798:[2.6,5]},stairWidths:{701760798:2.25},ramps:{701760799:[5,8.8]},breaks:[[-589,-62.9,4.2]]}],z_=[[-515.4,-54.6],[-507,-52.4],[-498.1,-49.9],[-488.9,-46.8],[-479.9,-44.6],[-473.2,-42.7],[-463.8,-40.8],[-456.4,-39.3],[-447.3,-37.4],[-441.7,-36.2],[-436.7,-36],[-430.1,-34.8],[-423.4,-34],[-372.9,-24.5],[-364.9,-24.3],[-356.7,-24.9],[-348.5,-24.3],[-339.6,-24.7]],k_=[{x:-512.2,z:-44.4,width:7.2,depth:2.15,angle:.27},{x:-461.1,z:-30.3,width:11.1,depth:2,angle:.17},{x:-442.5,z:-26.9,width:6.1,depth:2.1,angle:.2},{x:-426.2,z:-23.1,width:7.9,depth:2.2,angle:.18}];function G_(i,t){wd(i,t,{name:"Верхняя набережная · фонари и клумбы",lights:z_,planters:k_})}const H_=[{edge:[[-300,-32,7.8,2.6],[-284,-34,7.75,2.6],[-267,-37.5,7.65,2.6],[-246,-43,7.55,2.6],[-240,-42,7.5,2.6],[-236,-29,7.42,2.6],[-228,-19,7.35,2.6],[-218,-7,7.25,2.6]],shore:[[-300,-47.3],[-289.6,-48.8],[-177.1,-87.5],[-161.9,-92.7]],upperDeck:[[-300,-32],[-284,-34],[-267,-37.5],[-246,-43],[-240,-42],[-236,-29],[-228,-19],[-218,-7],[-221,3],[-248,4],[-279,3],[-300,3]],upperIds:{178484904:11},lowerIds:{701760797:5.2,121213094:7.2},underDeckIds:["223948913","223948916"],stairs:{597090335:[7.25,5.97],597090341:[3.25,1.1]},stairWidths:{597090335:13.2,597090341:5.4},stairRun:{597090335:[.09,.36]},ramps:{121213094:[5.97,3.25],"701760797-approach":[3.88,2.6]},paths:[{id:"701760797-approach",points:[[-171.1,-33],[-199.26,-67.75]],width:5.2,level:"lower",replaceStartOf:"701760797"}],breaks:[[-218,-7,4]],flatInland:30,blendInland:52,fade:0},{beach:[[-224.06,-6.35,7.25],[-211.83,-6.43,5.97],[-171.1,-33,3.88],[-159.07,-41.45,3.25],[-144.56,-51.21,1.1],[-81.57,-93.77,1.4],[-39.04,-127.25,1.62],[-.76,-159.34,1.82],[25.53,-190.84,1.95],[71.71,-243.52,2.1],[152.59,-369.21,2.15],[173.74,-356.54,2.2],[184.72,-355.26,2.22],[200.31,-357.98,2.23],[218.09,-367.72,2.25],[238.68,-386.95,2.28],[248.36,-396.07,2.35],[217.53,-444.44,2.24],[252.43,-514.76,2.14],[274.46,-559.15,2.05],[283.14,-576.63,2.03],[323,-654.46,1.98]],shore:[[-177.1,-87.5],[-161.9,-92.7],[-53.6,-178.4],[-34.6,-198.7],[31.6,-303.9],[50.4,-343.6],[84.5,-417.2],[123.2,-492],[197.2,-622.5],[224.45,-686]],lowerIds:{597090338:6.5,121159650:7.5,178302326:5.7},stairs:{851920304:[3,2.28]}}],V_=[[-295.8,-26.2],[-288.7,-27.1],[-281.6,-28.1],[-272.7,-29.1],[-265.8,-30.2],[-257.3,-31.1],[-250.1,-32.8],[-244.6,-33.7]];function W_(i,t){wd(i,t,{name:"Фонари у Алых парусов",lights:V_,planters:[]})}const{clamp:du,lerp:pn,smoothstep:we}=ue;function fa(i){return[Math.min(...i.map(([t])=>t)),Math.min(...i.map(([,t])=>t)),Math.max(...i.map(([t])=>t)),Math.max(...i.map(([,t])=>t))]}const Qs=([i,t,e,n],s)=>[i-s,t-s,e+s,n+s];function Ed(i){const[t,e]=i.origin,[n,s]=i.scale,o=(V,at)=>[(V-t)*n,(e-at)*s],r=(V,at,vt,q)=>[...o(V,q),...o(vt,at)],a=r(37.2953,44.8868,37.3014,44.8932),l=r(37.2982,44.8933,37.3078,44.8984),c=r(37.3063,44.89613,37.31234,44.89775),u=i.surveyLines??{},f=u[125813146],h=u[400800619],p=u[657038813],d=u[1142991105],_=i.buildings.find(V=>V.id==="977564342")?.rings[0],m=_?.length===8?[_[7],_[6]]:null,g=x_([...B_,...H_]),x=i.landmarks.find(V=>V.id==="lighthouse")?.position,M=i.landmarks.find(V=>V.id==="port")?.position,v=r(37.303,44.8967,37.3069,44.9012),S=Qs(fa(vs.front),vs.depth+9),b=i.buildings.find(V=>V.id==="r11979734-0")?.rings[0],w=b&&Qs(fa(b),18),y=i.roads.find(V=>V.id==="977564885")?.points,E=y?.[0],T=new Map([["46844613",8],["1293020297",7],["1293020296",7],...Object.entries(g.upperWidths),...Object.entries(g.lowerWidths),...Object.entries(g.stairWidths)]),C=new Map([["977562764",[null,3.8]],["977562762",[3.8,1.65]],["977562763",[3.8,1.65]],["597090335",[7.25,2.6]],["597090341",[2.6,.9]],...Object.entries(g.stairLevels)]),D=new Map(g.extras.filter(V=>V.replaceStartOf).map(V=>[V.replaceStartOf,V.points.length-1])),P=[...i.roads.map(V=>D.has(V.id)?{...V,points:V.points.slice(D.get(V.id))}:V),...g.extras.map(V=>({...V,kind:V.kind??"footway"}))],R=P.filter(V=>C.has(V.id)).map(V=>({...V,width:T.get(V.id)??V.width,bounds:fa(V.points)})),I=P.filter(V=>V.id in g.rampLevels).map(V=>({...V,width:T.get(V.id)??V.width,bounds:fa(V.points)})),N=R.filter(V=>V.id in g.stairLevels),F=[...R,...I],G=[...N,...I],H=(V,at,[vt,q,it,k])=>V>=vt&&V<=it&&at>=q&&at<=k;function $(V,at,vt){let q=!1,it=1/0;for(let k=0,Y=vt.length-1;k<vt.length;Y=k++){const[K,_t]=vt[Y],[dt,Et]=vt[k];_t>at!=Et>at&&V<(dt-K)*(at-_t)/(Et-_t)+K&&(q=!q);const Dt=dt-K,z=Et-_t,Qt=du(((V-K)*Dt+(at-_t)*z)/(Dt*Dt+z*z||1),0,1);it=Math.min(it,Math.hypot(V-K-Qt*Dt,at-_t-Qt*z))}return q?0:it}function et(V,at,vt){const q=sn(V,at,f);if(q.distance>100)return vt(V,at);const it=1-we(q.distance,49,91),k=we(q.run,0,36),Y=1-we(at,a[3]-55,a[3]-12),K=x?1-we(Math.hypot(V-x[0],at-x[1]),85,260):0,_t=pn(vt(q.x-q.nx*28,q.z-q.nz*28),22.4,K);let dt=_t;if(q.offset>0){const Et=Math.max(7,sn(q.x,q.z,h).distance),Dt=1.65*we(sn(V,at,h).distance,0,8)+.18;dt=pn(_t,Dt,we(q.offset,Math.min(1.2,Et*.08),Et*.66))}else dt=pn(_t,vt(V,at),we(-q.offset,15,42));if(m&&q.distance<48){const Et=sn(V,at,m),Dt=1-we(Et.distance,14,23),z=pn(4.35,1.8,we(Et.offset,0,10));dt=pn(dt,Math.min(dt,z),Dt)}return pn(vt(V,at),dt,it*k*Y)}function St(V,at,vt){const q=sn(V,at,p);if(q.distance>82||q.offset<-15)return vt(V,at);const it=vt(q.x-q.nx*14,q.z-q.nz*14),k=pn(it,2.35,we(q.offset,.5,15)),Y=we(q.run,0,40)*(1-we(q.run,q.length-45,q.length));return pn(vt(V,at),k,Y*(1-we(q.distance,58,82)))}function bt(V,at,vt,q){if(f&&h&&H(V,at,a))return et(V,at,vt);let it=p&&H(V,at,l)?St(V,at,vt):vt(V,at);if(M&&H(V,at,v)){const[k,Y,K,_t]=v,dt=we(Math.min(V-k,K-V,at-Y,_t-at),2,26)*(1-we(at,M[1]+13,M[1]+52)),Et=pn(1.8,2.55,we(at,M[1]-73,M[1]+8));it=pn(it,Et,dt)}return g.apply(V,at,it,q)}function rt(V,at){const vt=C.get(V.id);if(!vt)return null;const q=vt[0]??bt(...E??V.points[0],at),it=vt[1];return{from:q,to:it,run:g.stairRuns[V.id]??[0,1]}}function st(V,at,vt){const q=g.rampLevels[V.id];if(!q)return;const it=sn(at,vt,V.points);return pn(q[0],q[1],it.run/it.length)}function ct(V,at,vt,q){let it=bt(V,at,vt,q);if(H(V,at,S)){const k=sn(V,at,vs.front),Y=Math.sqrt(Math.max(0,k.distance**2-k.offset**2)),K=Math.max(Y,-k.offset,k.offset-vs.depth);it=pn(it,vs.grade,1-we(K,1.8,7))}if(w&&H(V,at,w)){const k=$(V,at,b);it=pn(it,vs.grade,1-we(k,10,17))}if(E&&Math.abs(V-E[0])<14&&Math.abs(at-E[1])<14){const k=sn(V,at,y);k.distance<5&&(it=pn(it,bt(...E,vt),1-we(k.distance,1.6,5)))}for(const k of F){if(!H(V,at,Qs(k.bounds,Math.max(4.5,k.width/2+2))))continue;const Y=sn(V,at,k.points),K=k.width/2,_t=!G.includes(k),dt=_t?4.3:K+1.6;if(Y.distance>dt)continue;const Et=g.rampLevels[k.id],{from:Dt,to:z,run:Qt}=Et?{from:Et[0],to:Et[1],run:[0,1]}:rt(k,vt),Kt=du((Y.run/Y.length-Qt[0])/(Qt[1]-Qt[0]),0,1),U=pn(Dt,z,Kt)-(Qt[0]===0&&Qt[1]===1?.08:.23);it=pn(it,U,1-we(Y.distance,_t?1.65:K,dt))}return it}function B(V,at,vt){return vt.breaks?.some(([q,it,k])=>Math.hypot(V-q,at-it)<k)||G.some(q=>H(V,at,Qs(q.bounds,q.width/2+.5))&&sn(V,at,q.points).distance<q.width/2+.3)}function Z(V,at){return G.some(vt=>H(V,at,Qs(vt.bounds,vt.width/2+2)))}function ht(V,at,vt){return N.some(q=>{const[it,k,Y,K]=Qs(q.bounds,q.width/2+2);return V<Y&&at<K&&V+vt>it&&at+vt>k})}function yt(V,at,vt){if(f&&h&&H(V,at,a)){const q=sn(V,at,f),it=sn(V,at,h),k=(1-we(it.distance,5,11))*(1-we(vt,2.2,3.8));if(k>0)return["shingle",k];const Y=we(q.offset,.5,4)*(1-we(q.distance,28,43))*we(vt,2,5.5);if(Y>0)return["rockLight",Y*(.74+.21*Math.sin(vt*1.7+V*.027))]}if(d&&H(V,at,c)){const q=(1-we(sn(V,at,d).distance,3.2,6.4))*(1-we(vt,2.3,3.1));if(q>0)return["riprap",q]}if(H(V,at,v)&&vt<7){const[q,it,k,Y]=v;return["quay",we(Math.min(V-q,k-V,at-it,Y-at),0,24)*(1-we(vt,4.5,7))]}return null}return{height:ct,tone:yt,stairHeight:rt,rampHeight:st,promenadeWidths:T,gorgWater:d,allRoads:P,surveyedStairs:N,ramps:I,waterfront:g,wallOpening:B,nearTransition:Z,refinesStairs:ht,refines(V,at,vt){return g.refines(V,at,vt)||[a,l,c,v].some(([q,it,k,Y])=>V+vt>q-18&&V<k+18&&at+vt>it-18&&at<Y+18)}}}const X_=[37.294125,44.884625,37.325875,44.907375],q_=128,Y_=92,Z_=JSON.parse("[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.9,2.4,2.9,3.4,3.7,3.9,4,4,3.9,3.9,3.9,3.9,4,3.9,3.9,4,3.9,3.6,3.1,2.7,2.5,2.5,2.7,3,3.1,2.9,2.5,1.9,1.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,2,2.5,3.1,3.6,4.1,4.4,4.6,4.4,4.2,3.9,3.8,3.8,3.8,3.8,4,4.1,4.1,3.8,3.2,2.7,2.4,2.4,2.7,3,3.1,2.9,2.4,1.7,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.6,2,2.6,3.1,3.7,4.3,4.8,5,4.9,4.6,4.3,4.1,4,3.9,3.9,4,4.2,4.3,4.1,3.6,3.1,2.9,2.9,3.1,3.2,3.2,2.7,2.1,1.4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.2,1.6,2,2.5,3,3.6,4.2,4.7,5,5,4.9,4.7,4.6,4.4,4.2,4.1,4,4.1,4.2,4.1,3.9,3.6,3.4,3.3,3.2,3.1,2.8,2.2,1.6,1.1,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2,2.4,2.9,3.4,4,4.5,4.7,4.7,4.7,4.7,4.7,4.7,4.4,4.1,3.8,3.8,3.8,3.8,3.6,3.3,3,2.7,2.4,2.2,1.8,1.3,0.9,0.7,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.2,1.6,2,2.3,2.8,3.3,3.8,4.2,4.4,4.4,4.3,4.4,4.5,4.5,4.2,3.7,3.3,3.1,3,2.9,2.5,2.1,1.7,1.4,1.2,1,0.8,0.6,0.4,0.5,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.2,1.5,1.9,2.2,2.5,2.9,3.3,3.6,3.8,3.8,3.8,3.8,3.9,3.9,3.6,3.1,2.7,2.3,2.1,1.8,1.4,1,0.7,0.5,0.4,0.4,0.4,0.5,0.5,0.6,0.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.7,2.8,2.9,3,3,3.1,3.1,3.1,2.9,2.5,2.1,1.7,1.5,1.3,1,0.7,0.5,0.4,0.5,0.7,0.9,1.1,1.3,1.4,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,2,2.3,2.5,2.5,2.5,2.4,2.3,2.3,2.3,2.4,2.4,2.3,2,1.8,1.6,1.4,1.3,1.2,1,0.9,1,1.3,1.7,2.1,2.5,2.7,2.9,2.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.2,1.4,1.6,2,2.5,3,3.3,3.3,2.9,2.4,2,1.9,1.9,2,2.1,2.1,2.1,2,1.9,1.8,1.7,1.7,1.6,1.6,1.8,2.2,2.9,3.5,4,4.3,4.4,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.7,1,1.2,1.4,1.6,2,2.5,3.2,3.9,4.3,4.2,3.5,2.6,2,1.8,1.9,2.2,2.4,2.5,2.5,2.5,2.4,2.4,2.4,2.3,2.2,2.2,2.5,3,3.8,4.5,5,5.3,5.5,5.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.4,1.7,2,2.3,2.8,3.5,4.1,4.5,4.2,3.4,2.5,2,1.9,2.1,2.5,2.8,2.9,2.9,2.8,2.8,2.9,2.9,2.8,2.7,2.7,2.9,3.4,4.1,4.8,5.3,5.6,5.8,5.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.6,1.9,2.2,2.5,2.8,3.2,3.5,3.6,3.3,2.6,2.1,1.8,1.9,2.2,2.6,2.9,3,2.9,2.9,2.9,3,3,3.1,3,3,3.1,3.4,4,4.5,5.1,5.4,5.6,5.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.7,2.1,2.4,2.6,2.7,2.9,2.9,2.7,2.3,2,1.8,1.8,2,2.2,2.5,2.7,2.8,2.8,2.8,2.9,3,3.1,3.2,3.2,3.1,3.1,3.2,3.5,3.9,4.4,4.8,5.1,5.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.4,1.9,2.3,2.7,3,3,2.9,2.6,2.3,1.9,1.8,1.8,1.9,2.1,2.3,2.6,2.8,3,3.1,3.1,3.2,3.3,3.3,3.3,3.3,3.2,3.1,2.9,2.9,3.1,3.5,3.9,4.3,4.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,2,2.6,3.2,3.5,3.5,3.2,2.7,2.2,1.8,1.8,1.9,2.1,2.4,2.7,3.1,3.5,3.9,4.1,4.2,4.1,4,3.7,3.4,3.2,3,2.8,2.6,2.5,2.4,2.6,2.9,3.2,3.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.6,2.2,2.8,3.4,3.6,3.5,3.1,2.5,2.1,1.8,1.9,2,2.3,2.6,3.1,3.8,4.5,5,5.3,5.2,5,4.6,4.1,3.5,3.1,2.8,2.6,2.3,2.2,2,2,2.1,2.3,2.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.4,2.9,3.2,3.2,3,2.6,2.3,2.1,2,2,2.1,2.3,2.7,3.2,3.9,4.7,5.2,5.4,5.3,5,4.6,4,3.5,3,2.6,2.3,2.1,1.9,1.7,1.6,1.7,1.8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.2,1.6,2.1,2.6,2.9,2.9,2.7,2.4,2.3,2.3,2.4,2.5,2.4,2.3,2.4,2.6,3,3.4,3.9,4.3,4.4,4.4,4.3,4.1,3.7,3.3,2.9,2.5,2.2,1.9,1.7,1.6,1.6,1.7,2,2.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.8,2.3,2.7,2.7,2.5,2.3,2.2,2.5,2.9,3.2,3.3,3.1,2.8,2.6,2.5,2.6,2.8,3,3.2,3.3,3.4,3.5,3.5,3.4,3.1,2.8,2.5,2.2,2,1.8,1.8,2,2.2,2.6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.2,1.5,1.9,2.3,2.6,2.5,2.3,2.3,2.6,3.1,3.7,4,4,3.6,3.1,2.7,2.5,2.5,2.5,2.5,2.5,2.6,2.8,3,3.1,3.1,2.9,2.7,2.5,2.4,2.4,2.4,2.5,2.7,3,3.4,3.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.3,1.7,2,2.3,2.4,2.4,2.4,2.7,3.3,4,4.4,4.3,4,3.5,3.1,2.7,2.5,2.5,2.4,2.4,2.3,2.3,2.5,2.7,2.8,2.8,2.7,2.7,2.7,2.9,3.2,3.6,3.8,3.9,4.1,4.3,4.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,0.8,1.2,1.5,1.9,2.2,2.4,2.3,2.4,2.7,3.3,4.1,4.6,4.7,4.3,3.9,3.5,3.1,2.9,2.7,2.7,2.6,2.6,2.5,2.4,2.5,2.6,2.7,2.7,2.7,2.9,3.2,3.7,4.4,5,5.3,5.4,5.4,5.6,5.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.8,1.1,1.4,1.8,2.1,2.4,2.4,2.3,2.5,3.1,4,4.8,5.2,5,4.5,4.1,3.9,3.7,3.5,3.3,3.1,3,2.9,2.8,2.7,2.7,2.7,2.8,2.8,3,3.2,3.7,4.4,5.2,6,6.4,6.6,6.7,7,7.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.1,1.5,1.8,2.1,2.4,2.4,2.4,2.4,2.6,3.3,4.3,5.1,5.4,5.3,5,4.9,4.8,4.6,4.2,3.9,3.6,3.4,3.3,3.1,3,3.1,3.2,3.2,3.3,3.5,3.8,4.3,5,5.8,6.5,7,7.4,7.6,7.8,8.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.1,1.5,1.9,2.3,2.5,2.6,2.5,2.5,2.5,2.8,3.4,4.1,4.8,5.1,5.3,5.3,5.5,5.4,5.1,4.6,4.2,3.9,3.7,3.6,3.6,3.6,3.7,3.9,4.1,4.2,4.4,4.8,5.2,5.8,6.4,7,7.4,7.6,7.7,7.9,8.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,2.8,2.8,2.7,2.8,3.1,3.5,3.9,4.3,4.6,4.9,5.1,5.4,5.4,5.1,4.7,4.3,4,3.9,3.8,3.9,4.1,4.4,4.7,5,5.3,5.7,6.1,6.4,6.8,7.1,7.3,7.4,7.4,7.4,7.5,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,2,2.3,2.7,2.9,3,3,3,3.1,3.3,3.5,3.8,4,4.2,4.4,4.6,4.8,5.1,5.3,5.2,5,4.7,4.4,4.1,4,4.1,4.3,4.6,5,5.5,6,6.5,6.9,7.1,7.3,7.3,7.3,7.3,7.2,7.2,7.3,7.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.9,3,3.1,3.1,3.2,3.4,3.8,4.1,4.3,4.4,4.4,4.5,4.5,4.7,5,5.4,5.7,5.8,5.6,5.1,4.7,4.3,4.2,4.3,4.6,5,5.6,6.1,6.6,6.9,7.1,7.2,7.3,7.2,7.1,7,7.1,7.4,7.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,0.9,1.3,1.7,2.1,2.5,2.8,3,3.1,3.1,3.1,3.3,3.7,4.2,4.7,4.9,4.9,4.8,4.7,4.6,4.7,4.9,5.4,6,6.3,6.3,5.9,5.4,4.9,4.5,4.4,4.5,4.9,5.3,5.9,6.3,6.7,6.9,7.1,7.3,7.3,7.3,7.3,7.4,7.9,8.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1.1,1.5,1.9,2.3,2.6,2.8,3,3,3,3.1,3.4,4,4.6,5.2,5.5,5.6,5.4,5.3,5,4.8,4.8,5.2,5.8,6.3,6.5,6.4,6,5.6,5.1,4.8,4.7,4.9,5.4,5.9,6.3,6.6,6.9,7.2,7.5,7.7,7.7,7.8,8.1,8.8,9.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.7,0.7,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.7,1,1.4,1.9,2.2,2.5,2.7,2.9,3,3,3.1,3.2,3.6,4.2,5,5.7,6.2,6.4,6.4,6.3,6,5.5,5.2,5.3,5.8,6.2,6.5,6.6,6.5,6.3,5.9,5.4,5.2,5.3,5.7,6.2,6.6,6.9,7.2,7.6,7.9,8.1,8.1,8.2,8.6,9.4,10.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,0.8,1.1,1.2,1,0.6,0.3,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.6,1,1.4,1.8,2.2,2.5,2.8,3,3.2,3.3,3.3,3.3,3.4,3.8,4.4,5.1,5.9,6.5,7,7.4,7.5,7.1,6.5,5.9,5.7,5.9,6.3,6.6,6.7,6.9,6.8,6.6,6.2,5.9,5.8,6.1,6.4,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.2,8.5,9.2,10.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.3,1.5,1.3,0.9,0.4,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.5,0.9,1.4,1.9,2.3,2.6,2.9,3.2,3.4,3.6,3.7,3.6,3.6,3.7,4,4.5,5.1,5.7,6.3,6.9,7.5,7.9,7.8,7.2,6.4,5.9,5.9,6.2,6.4,6.7,6.8,7,6.9,6.6,6.3,6.2,6.3,6.5,6.8,7.1,7.5,7.9,8.2,8.3,8.2,8.1,8.3,8.8,9.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.4,0.7,1.1,1.5,1.7,1.5,1,0.6,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.7,3,3.2,3.5,3.7,3.8,3.9,3.8,3.8,4,4.3,4.6,5,5.3,5.7,6.2,6.8,7.3,7.4,7,6.3,5.8,5.8,6.1,6.4,6.7,6.9,7,7,6.8,6.7,6.7,6.7,6.7,6.8,7.1,7.5,7.9,8.4,8.6,8.6,8.5,8.4,8.5,8.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.4,0.4,0.4,0.4,0.5,0.6,0.8,0.9,1.1,1.4,1.6,1.7,1.4,0.9,0.5,0.2,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.9,1.4,1.9,2.4,2.8,3,3.2,3.3,3.4,3.6,3.8,3.9,3.9,3.9,4,4.2,4.4,4.6,4.8,4.9,5.2,5.7,6.1,6.3,6.1,5.8,5.6,5.9,6.4,6.9,7.2,7.4,7.4,7.4,7.3,7.3,7.3,7.2,7,7,7.1,7.4,8,8.6,9.1,9.1,8.9,8.8,8.8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.4,0.5,0.6,0.8,0.9,1,1,1.2,1.4,1.5,1.6,1.7,1.8,1.8,1.6,1.2,0.7,0.4,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.6,1,1.5,2,2.5,2.8,3,3.1,3.2,3.2,3.4,3.5,3.6,3.7,3.7,3.7,3.6,3.7,3.9,4.1,4.4,4.5,4.6,4.8,5,5.2,5.3,5.4,5.6,6.2,6.9,7.5,7.9,8,8,8,8.1,8.1,8,7.7,7.4,7.2,7.2,7.3,7.8,8.5,9.1,9.4,9.5,9.6,9.7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.1,0.1,0.2,0.3,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.3,2.3,2.3,2.2,2,1.7,1.2,0.7,0.4,0.2,0.1,0.1,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.4,0.8,1.2,1.7,2.1,2.5,2.8,3.1,3.2,3.2,3.1,3.1,3.2,3.3,3.5,3.6,3.6,3.4,3.3,3.3,3.5,3.9,4.3,4.4,4.4,4.4,4.6,4.9,5.3,5.7,6.2,6.8,7.5,8,8.2,8.3,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.8,7.6,7.5,7.8,8.4,9.1,9.8,10.4,10.7,11,11.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.2,0.3,0.3,0.4,0.5,0.6,0.6,0.7,0.9,1.1,1.3,1.5,1.7,2,2.4,2.8,3.2,3.5,3.5,3.5,3.4,3.2,3,2.7,2.2,1.6,1.2,0.8,0.6,0.4,0.3,0.3,0.2,0.2,0.1,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.5,1,1.5,2,2.4,2.6,2.8,3,3.1,3.2,3.1,3,3,3.1,3.2,3.4,3.4,3.4,3.3,3.2,3.2,3.5,4,4.5,4.8,4.8,4.8,5,5.5,6.1,6.7,7.2,7.7,8,8.2,8.3,8.3,8.5,8.8,9.2,9.5,9.4,9.2,8.9,8.6,8.3,8.1,8.3,8.8,9.6,10.6,11.4,11.8,11.9,11.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.1,0.3,0.4,0.6,0.8,1,1.2,1.5,1.6,1.7,1.8,1.9,2.2,2.4,2.8,3.2,3.7,4.3,5,5.6,6,6,5.8,5.4,5,4.6,4.1,3.5,2.9,2.3,1.8,1.4,1,0.8,0.6,0.5,0.4,0.3,0.2,0.1,0.1,0.1,0.1,0.1,0.2,0.2,0.3,0.3,0.3,0.3,0.5,0.7,1.1,1.6,2.2,2.8,3.1,3.2,3.2,3.2,3.2,3.2,3.1,3.1,3,3.1,3.2,3.3,3.4,3.4,3.3,3.2,3.3,3.7,4.4,5.1,5.5,5.6,5.6,5.8,6.4,7.1,7.7,8.1,8.2,8.3,8.3,8.3,8.4,8.7,9.1,9.6,9.8,9.9,9.7,9.5,9.3,9,8.9,9,9.5,10.4,11.4,12.2,12.5,12.3,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.3,0.4,0.6,0.9,1.2,1.6,2,2.3,2.7,3,3.4,3.6,3.9,4.2,4.5,4.9,5.4,6,6.8,7.6,8.5,9.2,9.5,9.3,8.9,8.3,7.6,6.9,6.2,5.5,4.9,4.3,3.7,3,2.4,1.9,1.5,1.3,1,0.8,0.7,0.6,0.5,0.5,0.5,0.6,0.8,0.9,1.1,1.2,1.2,1.2,1.3,1.5,1.8,2.3,2.8,3.2,3.5,3.5,3.5,3.5,3.5,3.4,3.3,3.2,3.2,3.2,3.3,3.4,3.5,3.4,3.4,3.4,3.5,4,4.7,5.5,6,6.3,6.4,6.7,7.2,7.8,8.2,8.3,8.2,8.2,8.3,8.5,8.7,9.1,9.5,9.8,9.9,9.9,9.8,9.8,9.8,9.9,10,10.2,10.6,11.2,12,12.5,12.6,12.2,11.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1.3,1.7,2.2,2.7,3.3,3.9,4.4,4.8,5.3,5.8,6.3,6.8,7.3,7.8,8.3,8.7,9.1,9.7,10.4,11.2,11.9,12.3,12.4,12.2,11.6,10.9,10,9.2,8.4,7.8,7.4,7,6.4,5.7,4.9,4.2,3.6,3.1,2.7,2.3,2,1.8,1.8,1.8,1.9,2.1,2.4,2.7,3,3.1,3.1,2.9,2.7,2.7,2.7,2.9,3.2,3.5,3.6,3.6,3.7,3.9,3.9,3.8,3.6,3.5,3.4,3.4,3.4,3.5,3.6,3.6,3.7,3.8,4,4.4,5.1,5.8,6.4,6.7,7,7.3,7.7,8.1,8.2,8.1,8,8.1,8.4,8.7,9.2,9.6,9.9,10,9.9,9.7,9.6,9.8,10.3,10.9,11.4,11.7,11.9,12.2,12.4,12.4,12.1,11.7,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.5,1.2,2.3,3.5,4.6,5.5,6.4,7.2,7.8,8.3,8.7,9.2,9.8,10.3,10.9,11.5,12,12.3,12.4,12.5,12.7,13.1,13.5,13.9,14,14.1,13.9,13.5,12.7,11.8,10.9,10.2,9.9,9.7,9.7,9.5,9.1,8.4,7.7,6.9,6.1,5.4,4.8,4.5,4.4,4.5,4.6,4.7,5,5.3,5.6,5.8,5.9,5.7,5.3,4.8,4.3,3.8,3.6,3.5,3.5,3.6,3.7,3.9,4.1,4.2,4.1,3.9,3.7,3.5,3.5,3.5,3.6,3.8,3.9,4.2,4.5,4.8,5.4,6.1,6.8,7.4,7.8,8,8.1,8.2,8.3,8.3,8.1,8.1,8.2,8.5,9,9.6,10,10.2,10.2,10,9.7,9.5,9.6,10.3,11.3,12.2,12.7,12.7,12.6,12.3,11.9,11.4,11.1,10.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.3,4.3,6.6,8.6,10.2,11.3,12,12.5,12.9,13.2,13.6,14,14.4,14.7,14.9,15,14.9,14.6,14.4,14.2,14.2,14.3,14.5,14.8,14.9,14.9,14.5,13.9,13,12.2,11.7,11.4,11.4,11.6,11.8,11.8,11.6,11,10.1,9.1,8.3,7.8,7.6,7.7,7.9,8,8.1,8.3,8.5,8.7,8.8,8.7,8.5,8.1,7.5,6.6,5.6,4.7,4.2,3.9,3.7,3.8,3.9,4.1,4.2,4.1,3.9,3.8,3.7,3.8,3.9,4.1,4.3,4.6,5,5.5,6.2,7.1,8,8.9,9.4,9.6,9.4,9.1,8.9,8.9,8.9,8.8,8.8,8.9,9.1,9.6,10.1,10.4,10.4,10.3,10,9.6,9.4,9.4,10,11,11.9,12.3,12.3,12,11.7,11.3,10.9,10.7,10.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.1,9.2,12,13.9,15.1,15.7,16.1,16.3,16.6,16.8,17.1,17.2,17.1,16.8,16.4,15.9,15.5,15.1,14.8,14.6,14.6,14.8,15.1,15.3,15.3,15,14.4,13.7,13.1,12.7,12.4,12.4,12.6,13,13.2,13.3,12.8,12,11.1,10.3,10,10,10.2,10.3,10.3,10.2,10.3,10.5,10.7,10.8,10.9,11,10.9,10.4,9.4,8.1,6.9,5.9,5.2,4.8,4.6,4.6,4.7,4.7,4.5,4.3,4.2,4.2,4.5,4.8,5.1,5.4,5.7,6.2,6.9,7.7,8.7,9.7,10.5,11,11,10.6,10,9.8,9.8,9.9,9.9,9.9,9.9,10.1,10.4,10.7,10.7,10.5,10.1,9.7,9.5,9.3,9.4,9.8,10.4,11,11.3,11.2,11.1,11,10.9,10.8,10.7,10.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.8,3.7,6.6,10,13.1,15.3,16.5,17.2,17.6,17.9,18.3,18.5,18.7,18.7,18.4,17.9,17.2,16.5,16,15.6,15.4,15.2,15.2,15.3,15.6,15.7,15.4,15,14.5,14.1,13.7,13.5,13.3,13.3,13.4,13.7,14,14,13.7,13,12.2,11.5,11.3,11.4,11.5,11.3,11,10.8,10.7,11,11.3,11.7,12.2,12.7,12.9,12.8,12.2,11.1,9.8,8.7,7.8,7.2,6.9,6.8,6.8,6.6,6.1,5.6,5.4,5.5,5.8,6.2,6.5,6.7,6.9,7.4,8.1,8.9,9.8,10.5,11.2,11.5,11.4,10.9,10.4,10.3,10.5,10.8,10.9,10.9,10.9,11,11.2,11.1,10.9,10.4,9.9,9.6,9.4,9.4,9.5,9.9,10.3,10.6,10.6,10.6,10.6,10.6,10.8,11,11.1,11.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.1,5.8,9.1,12.4,14.9,16.4,17.3,17.9,18.4,19,19.3,19.4,19.4,19.1,18.6,17.9,17.3,16.9,16.6,16.4,16.2,16.1,16.3,16.4,16.4,15.9,15.3,14.9,14.6,14.5,14.5,14.5,14.4,14.4,14.4,14.6,14.6,14.4,13.8,13.1,12.5,12.3,12.3,12.3,12,11.6,11.3,11.3,11.5,11.8,12.3,12.9,13.6,14.1,14.3,14,13.3,12.4,11.5,10.8,10.3,10,10,9.9,9.6,9,8.2,7.7,7.5,7.7,7.9,7.9,7.9,7.9,8.3,9,9.8,10.4,10.9,11.3,11.4,11.2,10.9,10.6,10.6,10.8,11.1,11.3,11.4,11.5,11.6,11.6,11.3,10.9,10.3,9.8,9.6,9.5,9.6,9.8,10.2,10.4,10.5,10.4,10.3,10.3,10.5,10.9,11.3,11.7,11.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,1,2.4,4.8,8,11.4,14.3,16.1,17.1,17.8,18.4,19,19.2,19.3,19.3,19,18.7,18.3,18,17.7,17.5,17.2,17.1,17,17.2,17.3,17.2,16.6,15.9,15.4,15.3,15.5,15.7,15.7,15.5,15.1,14.9,14.7,14.6,14.4,14,13.5,13.1,13.1,13.1,13.1,12.9,12.7,12.7,12.9,13,13.2,13.5,14,14.6,15,15,14.6,14.2,13.6,13.1,12.7,12.5,12.3,12.3,12.3,12.1,11.7,11.1,10.4,9.8,9.3,9.1,8.9,8.8,8.9,9.3,9.9,10.5,10.9,11.1,11.2,11.2,11.1,11,10.9,10.9,11.1,11.3,11.4,11.6,11.7,11.8,11.7,11.5,11,10.5,10.1,9.9,9.9,10,10.2,10.5,10.6,10.5,10.3,10.2,10.2,10.6,11.1,11.6,12.1,12.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.8,2,4.1,7,10.5,13.7,15.9,17.1,17.7,18.2,18.6,18.9,18.9,18.8,18.6,18.3,18,17.8,17.7,17.6,17.4,17.3,17.4,17.6,17.7,17.5,17,16.3,15.9,15.8,16,16.2,16.1,15.7,15.2,14.8,14.4,14.2,13.9,13.6,13.3,13.3,13.5,13.7,13.7,13.7,13.8,14.2,14.7,15.1,15.3,15.5,15.8,16,15.8,15.3,14.7,14.2,13.9,13.8,13.6,13.6,13.6,13.5,13.5,13.4,13.3,12.9,12.2,11.3,10.3,9.5,9.2,9.4,9.9,10.6,11.2,11.6,11.6,11.4,11.3,11.3,11.3,11.3,11.3,11.3,11.4,11.4,11.5,11.6,11.7,11.7,11.8,11.7,11.4,11.1,10.7,10.6,10.5,10.6,10.7,10.8,10.8,10.7,10.6,10.4,10.5,10.8,11.4,11.9,12.3,12.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.4,6.2,9.7,13.2,15.8,17.2,17.8,18.2,18.4,18.6,18.6,18.5,18.2,17.8,17.5,17.3,17.2,17.1,17.1,17.2,17.4,17.5,17.6,17.4,17,16.6,16.2,16,16,16,15.8,15.5,15,14.6,14.2,13.9,13.6,13.4,13.3,13.6,13.9,14.2,14.3,14.3,14.5,15.2,15.9,16.4,16.8,16.9,17.1,17,16.6,15.7,14.8,14.4,14.3,14.5,14.6,14.6,14.6,14.5,14.4,14.2,14.1,13.8,13.1,12,10.8,9.8,9.5,9.9,10.8,11.8,12.5,12.8,12.5,12.1,11.7,11.6,11.7,11.8,11.9,11.9,11.8,11.7,11.6,11.5,11.5,11.6,11.8,12,12,11.8,11.6,11.4,11.3,11.2,11.2,11.3,11.3,11.3,11.2,11.1,11.2,11.4,11.9,12.3,12.7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3,5.7,9.3,13,16,17.6,18.2,18.4,18.4,18.4,18.3,18.1,17.8,17.4,17.2,17,16.9,16.9,16.9,17,17.1,17.2,17.3,17.4,17.3,17.1,16.8,16.4,16.1,15.9,15.5,15.1,14.7,14.4,14.2,14,13.7,13.6,13.7,14,14.4,14.7,14.8,14.8,15,15.5,16.1,16.7,17,17.3,17.4,17.4,17,16.2,15.4,15,15,15.4,15.7,15.8,15.7,15.6,15.3,15.1,14.9,14.6,13.9,12.8,11.5,10.5,10.3,10.7,11.6,12.4,13.1,13.4,13.3,13,12.5,12.2,12,12,12.2,12.2,12.1,11.9,11.7,11.5,11.4,11.5,11.8,12.2,12.4,12.4,12.2,12,11.9,11.8,11.8,11.8,12,12.1,12,12,12,12.2,12.5,12.9,13.1,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.3,13.2,16.2,18,18.5,18.5,18.3,18.1,17.8,17.6,17.4,17.3,17.3,17.2,17.1,17,16.8,16.8,16.8,17,17.3,17.6,17.8,17.6,17.3,16.8,16.4,16,15.5,14.9,14.4,14.2,14.1,14.1,14,14,14.2,14.6,15,15.3,15.4,15.3,15.3,15.5,15.9,16.2,16.6,17,17.2,17.3,17.1,16.5,15.9,15.5,15.5,15.8,16.2,16.5,16.4,16.2,16,15.8,15.7,15.4,14.8,13.8,12.7,11.8,11.4,11.7,12.2,12.8,13.3,13.8,14.1,14.1,13.6,13,12.3,12.1,12.1,12.1,12.1,11.9,11.6,11.4,11.3,11.5,11.8,12.2,12.4,12.5,12.5,12.4,12.3,12.2,12.2,12.2,12.4,12.6,12.7,12.7,12.7,12.9,13.1,13.3,13.3,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.6,3.4,6.2,9.8,13.5,16.4,18,18.5,18.4,18.1,17.7,17.4,17.3,17.4,17.6,17.6,17.5,17.3,17,16.7,16.5,16.5,16.7,17.1,17.6,17.7,17.6,17.2,16.8,16.4,15.9,15.4,14.8,14.4,14.2,14.2,14.3,14.5,14.7,15,15.5,15.9,16.1,16,15.8,15.7,15.6,15.7,16,16.4,16.7,17,17,16.9,16.6,16.1,15.5,15.3,15.6,16.1,16.5,16.6,16.5,16.4,16.2,16.1,16,15.6,14.9,14,13.2,12.7,12.7,12.8,13.1,13.6,14.3,15,15.1,14.7,13.8,12.9,12.3,12.1,12,12,11.8,11.6,11.5,11.5,11.7,11.9,12,12.2,12.3,12.4,12.5,12.5,12.5,12.4,12.4,12.6,12.9,13.1,13.2,13.3,13.5,13.6,13.5,13.4,13.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.7,1.3,2.4,4.2,7.1,10.7,14.2,16.7,18.1,18.5,18.3,18,17.6,17.4,17.5,17.9,18.2,18.3,17.9,17.4,16.9,16.4,16.1,16,16.2,16.5,16.8,16.9,16.8,16.6,16.3,15.9,15.6,15.2,14.9,14.7,14.6,14.6,14.8,15.1,15.6,16.2,16.7,16.9,16.9,16.7,16.4,16.1,16,16,16.3,16.6,17,17.2,17.2,17,16.6,16.1,15.6,15.3,15.5,16.2,16.9,17.1,17,16.8,16.5,16.4,16.4,16.2,15.8,15.1,14.4,13.9,13.6,13.4,13.5,13.9,14.7,15.4,15.7,15.3,14.4,13.5,12.9,12.7,12.5,12.3,12,11.9,11.9,11.9,11.9,11.9,12,12.1,12.2,12.4,12.5,12.7,12.7,12.7,12.7,12.9,13.2,13.5,13.7,13.8,13.9,13.9,13.7,13.4,13.3,0,0,0,0,0,0,0,0,0,0.1,0.2,0.2,0.2,0.3,0.7,1.3,2.2,3.5,5.6,8.7,12.2,15.5,17.7,18.8,19.1,18.8,18.2,17.8,17.7,18.1,18.6,19.1,19,18.4,17.7,17.1,16.6,16.2,16.1,16,16,16.1,16.1,16.1,16.1,16,15.8,15.6,15.6,15.6,15.6,15.5,15.4,15.5,15.9,16.5,17.1,17.6,17.6,17.3,16.9,16.6,16.5,16.6,16.7,17.1,17.5,17.8,18,18,17.8,17.4,17,16.6,16.4,16.6,17.4,18.1,18.3,18,17.5,17,16.7,16.6,16.5,16.1,15.6,15.1,14.7,14.4,14.1,13.9,14.1,14.7,15.4,15.7,15.4,14.7,14.1,13.8,13.6,13.4,13,12.6,12.3,12.3,12.3,12.2,12.2,12.2,12.4,12.5,12.6,12.7,12.9,13.1,13.1,13.1,13.2,13.4,13.7,13.9,13.9,13.9,13.8,13.6,13.4,13.3,0,0,0,0,0,0,0,0,0.1,0.3,0.4,0.5,0.6,0.8,1.3,2.1,3.3,5,7.5,10.8,14.3,17.3,19.3,20.3,20.5,19.9,19.1,18.4,18.2,18.6,19.1,19.5,19.4,18.8,18.1,17.6,17.3,17.2,16.9,16.5,16.1,16,16,16.3,16.4,16.5,16.4,16.3,16.5,16.6,16.6,16.4,16.1,16.1,16.4,17,17.7,18.1,17.9,17.5,17,16.8,16.8,17,17.4,17.9,18.5,19,19.3,19.5,19.4,19.2,18.8,18.3,18,18.2,18.9,19.5,19.7,19.2,18.5,17.8,17.3,17,16.6,16.2,15.7,15.4,15.1,14.9,14.6,14.3,14.2,14.5,15,15.2,15,14.6,14.3,14.2,14.1,13.9,13.4,12.9,12.7,12.7,12.7,12.6,12.5,12.7,13,13.1,13.1,13.1,13.3,13.5,13.6,13.6,13.6,13.7,13.8,13.8,13.8,13.8,13.8,13.7,13.5,13.4,0,0,0,0,0,0,0,0.1,0.2,0.5,0.8,1,1.3,1.6,2.3,3.4,5,7.2,10.1,13.4,16.7,19.4,21.1,22,22,21.3,20.3,19.3,18.8,18.8,19.2,19.5,19.4,18.9,18.4,18.1,18.1,18.1,17.7,17.1,16.8,16.8,17,17.3,17.5,17.5,17.3,17.2,17.1,17.1,17,16.8,16.5,16.4,16.7,17.4,18.2,18.7,18.7,18.1,17.5,17.1,17.1,17.3,17.9,18.5,19.2,19.8,20.3,20.7,20.8,20.7,20.1,19.5,19.1,19.2,19.8,20.3,20.5,20.1,19.5,18.8,18.1,17.6,17.1,16.6,16,15.6,15.4,15.2,14.9,14.6,14.4,14.4,14.5,14.6,14.5,14.3,14.2,14.2,14.1,13.9,13.5,13.2,13.1,13.1,13.1,12.9,12.8,13,13.3,13.5,13.6,13.7,13.9,14.1,14.2,14.2,14.1,14,14,13.9,13.8,13.9,13.9,13.8,13.7,13.6,0,0,0,0,0,0,0.1,0.2,0.4,0.9,1.5,2.2,2.7,3.4,4.4,5.9,7.9,10.4,13.4,16.4,19.2,21.2,22.5,23,22.9,22.1,20.9,19.9,19.1,18.9,19,19.2,19.2,19,18.7,18.6,18.6,18.5,18.2,17.9,17.8,18,18.4,18.5,18.6,18.5,18.2,17.9,17.6,17.2,17,16.8,16.7,16.9,17.3,18.1,19,19.7,19.7,19.1,18.2,17.6,17.4,17.6,18.3,19.1,19.7,20.3,20.7,21,21.1,21,20.5,19.9,19.6,19.8,20.3,20.7,20.8,20.6,20.1,19.4,18.9,18.4,17.9,17.2,16.6,16.1,15.8,15.6,15.4,15.2,14.9,14.7,14.6,14.6,14.5,14.4,14.3,14.2,14,13.8,13.6,13.5,13.6,13.6,13.5,13.3,13.1,13.2,13.5,13.8,14,14.3,14.7,14.9,14.8,14.6,14.5,14.4,14.2,14.1,14.1,14.1,14.1,14,13.9,13.9,0,0,0,0,0,0.1,0.2,0.5,1.1,2.1,3.4,4.6,5.8,7.1,8.5,10.2,12.2,14.4,16.9,19.3,21.1,22.4,23,23.1,22.8,22,21.1,20.2,19.5,19.1,19.1,19.2,19.2,19.1,18.9,18.8,18.7,18.7,18.6,18.6,18.8,19.1,19.3,19.3,19.2,19.2,19.1,18.7,18.2,17.6,17.3,17.3,17.5,17.8,18.4,19.1,19.9,20.4,20.4,19.7,18.7,18,17.8,18.2,19,19.8,20.3,20.6,20.7,20.8,20.8,20.6,20.3,20.1,20.1,20.4,20.6,20.8,20.7,20.4,19.9,19.4,19,18.7,18.3,17.7,17,16.5,16.3,16.1,16,15.9,15.7,15.5,15.4,15.2,15,14.8,14.5,14.3,14,13.8,13.8,13.9,14,14.1,14,13.7,13.5,13.5,13.8,14.1,14.5,14.9,15.2,15.3,15.1,14.9,14.7,14.6,14.6,14.6,14.6,14.6,14.5,14.4,14.2,14.3,0,0,0,0,0,0.1,0.4,1.1,2.4,4.4,6.7,9,10.8,12.5,13.9,15.3,16.8,18.3,19.8,21.2,22.1,22.7,22.8,22.7,22.4,21.8,21.2,20.6,20.1,19.7,19.6,19.5,19.4,19.2,18.9,18.8,18.7,18.8,19,19.3,19.6,19.8,19.7,19.5,19.3,19.5,19.7,19.6,19.2,18.7,18.4,18.4,18.6,18.9,19.3,19.9,20.4,20.7,20.6,20.1,19.3,18.8,18.7,19.2,19.9,20.6,21,21.1,21,20.9,20.7,20.5,20.5,20.5,20.7,20.9,20.8,20.6,20.3,19.8,19.3,18.9,18.7,18.5,18.2,17.8,17.2,16.9,16.7,16.6,16.6,16.5,16.4,16.3,16.1,15.8,15.4,15,14.6,14.3,14.1,13.9,14,14.2,14.4,14.4,14.3,14.1,13.8,13.8,14,14.2,14.6,14.9,15.2,15.2,15,14.8,14.7,14.8,15,15.2,15.3,15.3,15.1,15,14.8,14.9,0,0,0,0,0,0.2,0.6,1.8,4.1,7.3,10.8,13.9,16.2,17.7,18.8,19.6,20.3,21,21.7,22.2,22.5,22.7,22.7,22.6,22.3,21.9,21.5,21.1,20.8,20.6,20.5,20.3,19.9,19.5,19,18.7,18.7,19,19.4,19.9,20.1,20.1,19.8,19.4,19.3,19.5,20,20.3,20.3,20.1,19.9,19.6,19.5,19.5,19.8,20.2,20.6,20.9,20.9,20.7,20.3,20,20.1,20.4,20.9,21.4,21.6,21.7,21.6,21.4,21.2,21.1,21.1,21.2,21.2,21.2,20.9,20.5,20,19.5,19.1,18.7,18.5,18.3,18,17.7,17.4,17.2,17.1,17,16.9,16.7,16.5,16.4,16.2,15.9,15.5,15,14.7,14.5,14.3,14.2,14.2,14.3,14.5,14.6,14.5,14.3,14.1,14,14,14.1,14.4,14.6,14.9,15,14.9,14.8,14.7,14.9,15.2,15.6,15.9,15.9,15.8,15.7,15.5,15.4,0,0,0,0,0,0.2,0.8,2.3,5.1,9.1,13.5,17.2,19.8,21.1,21.7,22,22.3,22.5,22.6,22.7,22.8,22.9,22.9,22.8,22.6,22.2,21.7,21.4,21.2,21.2,21.2,21,20.6,20,19.4,19,18.9,19.2,19.6,20.1,20.3,20.2,19.8,19.4,19.3,19.7,20.4,21.2,21.6,21.7,21.3,20.7,20.3,20.1,20.2,20.5,20.8,21,21.1,21.1,21,20.9,21.1,21.3,21.6,21.9,21.9,22,21.9,21.9,21.9,21.9,22,22,21.8,21.5,21.2,20.8,20.3,19.8,19.4,19,18.6,18.3,18.1,17.9,17.8,17.7,17.6,17.4,17,16.6,16.3,16.1,16,15.8,15.5,15.1,14.9,14.8,14.6,14.5,14.4,14.4,14.6,14.7,14.8,14.7,14.5,14.3,14.1,14,14.1,14.3,14.6,14.9,14.9,14.8,14.8,14.9,15.3,15.8,16.2,16.4,16.4,16.3,16.2,16,0,0,0,0,0,0.2,0.7,2.1,4.8,9,13.8,18,20.8,22.3,22.9,23.1,23.2,23.3,23.3,23.2,23.2,23.3,23.2,23,22.6,22.1,21.6,21.3,21.2,21.3,21.4,21.3,20.9,20.4,19.9,19.5,19.3,19.5,19.8,20.1,20.4,20.3,20,19.7,19.7,20.2,21.1,22.1,22.8,23,22.7,22.2,21.8,21.6,21.5,21.3,21.1,20.9,20.9,21,21,21.1,21.3,21.6,21.9,22.1,22.1,22,22,22.1,22.2,22.4,22.5,22.5,22.4,22.2,21.9,21.5,20.9,20.4,19.9,19.5,19.1,18.7,18.5,18.4,18.4,18.2,18,17.6,17.1,16.7,16.3,16.1,15.9,15.8,15.6,15.4,15.2,15.1,15,14.8,14.6,14.6,14.7,14.9,15.1,15.2,15.1,14.8,14.5,14.2,14.2,14.3,14.6,14.9,15,15,14.9,15,15.3,15.7,16.2,16.6,16.8,16.9,16.8,16.7,0,0,0,0,0,0.1,0.5,1.5,3.7,7.5,12.3,16.9,20.2,22.2,23.1,23.6,23.8,23.7,23.6,23.5,23.5,23.5,23.3,22.9,22.3,21.6,21.1,20.9,20.9,21.1,21.1,21.1,20.9,20.6,20.3,20.1,19.9,19.9,20,20.2,20.4,20.4,20.3,20.2,20.4,21,21.8,22.7,23.4,23.8,24,24,24,23.9,23.4,22.6,21.7,21,20.7,20.6,20.7,20.9,21.2,21.7,22.1,22.3,22.3,22.2,22.1,22.1,22.2,22.3,22.5,22.6,22.6,22.6,22.3,21.9,21.4,20.9,20.5,20.1,19.7,19.5,19.2,18.9,18.7,18.5,18.1,17.8,17.4,17.1,16.8,16.5,16.3,16.1,15.9,15.7,15.6,15.5,15.4,15.1,14.9,14.7,14.8,15.1,15.3,15.4,15.3,15,14.8,14.5,14.4,14.5,14.7,14.9,15.1,15.1,15.1,15.2,15.4,15.7,16.2,16.6,16.9,17.1,17.2,17.2,0,0,0,0,0,0,0.3,0.9,2.6,5.9,10.5,15.4,19.4,22,23.4,24,24.2,24,23.8,23.5,23.4,23.2,22.9,22.4,21.8,21.1,20.8,20.7,20.8,20.9,20.9,20.9,20.8,20.8,20.7,20.6,20.5,20.4,20.4,20.3,20.4,20.5,20.7,21,21.4,21.9,22.3,22.7,23.2,23.8,24.5,25.1,25.4,25.4,24.8,23.7,22.5,21.4,20.8,20.6,20.8,21.1,21.5,22,22.4,22.7,22.7,22.5,22.3,22.2,22.2,22.2,22.2,22.3,22.4,22.4,22.2,22,21.7,21.3,20.9,20.6,20.4,20.1,19.7,19.2,18.9,18.6,18.3,18,17.9,17.8,17.5,17.2,16.8,16.5,16.3,16.2,16.1,16,15.7,15.3,15.1,15,15,15.2,15.3,15.3,15.2,15.2,15,14.9,14.8,14.8,14.9,15.1,15.2,15.3,15.3,15.4,15.6,15.9,16.2,16.4,16.7,17,17.2,17.3,0,0,0,0,0,0,0.1,0.6,1.9,4.6,9,14.3,19.1,22.3,23.9,24.6,24.6,24.3,23.8,23.3,23,22.8,22.6,22.1,21.6,21.2,21,20.9,21,21,21,20.9,20.9,21,21.1,21.2,21.1,21,20.8,20.7,20.7,21,21.5,22,22.4,22.6,22.5,22.5,22.7,23.3,24.1,24.9,25.3,25.2,24.7,23.7,22.6,21.7,21.2,21.1,21.4,21.7,21.9,22.2,22.5,22.7,22.7,22.7,22.6,22.5,22.4,22.3,22.2,22.1,22.1,22.1,22.1,22,21.8,21.5,21.2,20.8,20.6,20.3,19.8,19.4,19,18.8,18.7,18.5,18.4,18.3,18.1,17.7,17.3,17,16.8,16.6,16.5,16.2,15.8,15.5,15.3,15.2,15.3,15.3,15.2,15.2,15.3,15.4,15.4,15.4,15.3,15.2,15.3,15.4,15.5,15.5,15.6,15.7,15.9,16.2,16.3,16.3,16.4,16.6,16.9,17.2,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.8,13.3,18.7,22.5,24.4,25,24.9,24.5,24,23.4,23,22.7,22.6,22.3,22,21.7,21.6,21.6,21.4,21.2,21.1,21,21.2,21.5,21.8,22,21.9,21.6,21.3,21.2,21.4,21.8,22.4,22.9,23.1,22.9,22.6,22.2,22.2,22.6,23.3,23.8,24.1,24,23.4,22.7,21.9,21.4,21.3,21.4,21.7,22,22.1,22.2,22.2,22.3,22.5,22.6,22.7,22.7,22.6,22.4,22.2,22.1,22.2,22.3,22.5,22.5,22.3,21.8,21.3,20.8,20.6,20.4,20.1,19.8,19.6,19.5,19.4,19.2,19,18.7,18.4,18,17.7,17.5,17.3,17.1,16.8,16.3,15.9,15.6,15.4,15.5,15.5,15.5,15.4,15.3,15.4,15.5,15.7,15.7,15.7,15.6,15.6,15.7,15.8,15.8,15.9,16,16.3,16.5,16.5,16.4,16.4,16.6,16.8,17.2,0,0,0,0,0,0,0,0.2,0.9,2.7,6.3,11.6,17.2,21.5,23.9,24.8,24.9,24.6,24.2,23.8,23.4,23.1,22.9,22.7,22.5,22.3,22.2,22,21.8,21.5,21.4,21.4,21.7,22.1,22.6,22.8,22.7,22.2,21.8,21.7,22,22.5,22.9,23.2,23.2,22.9,22.4,22.1,22,22.1,22.4,22.6,22.6,22.3,21.9,21.5,21.1,21.1,21.3,21.5,21.7,21.9,22.1,22.2,22.2,22.2,22.3,22.4,22.6,22.6,22.5,22.3,22.2,22.2,22.4,22.7,23.1,23.2,22.9,22.2,21.5,21.1,20.9,20.8,20.6,20.4,20.3,20.3,20.2,20,19.6,19.2,18.7,18.3,18,17.8,17.6,17.4,17,16.5,16,15.7,15.6,15.7,15.8,15.7,15.5,15.4,15.5,15.6,15.7,15.9,15.9,15.9,15.9,15.9,16,16.1,16.1,16.2,16.4,16.5,16.6,16.6,16.6,16.7,16.9,17.2,0,0,0,0,0,0,0,0.1,0.6,1.9,4.8,9.4,14.8,19.5,22.5,24,24.5,24.5,24.3,24,23.7,23.4,23,22.8,22.6,22.6,22.5,22.3,22.1,21.9,21.9,22,22.3,22.8,23.2,23.5,23.3,22.8,22.4,22.2,22.4,22.8,23,23.1,23,22.7,22.3,22.1,22,22,22,21.8,21.6,21.3,21.1,21,21.1,21.4,21.7,21.9,22,22.1,22.2,22.4,22.5,22.4,22.3,22.3,22.5,22.5,22.5,22.3,22.2,22.2,22.5,22.9,23.3,23.5,23.3,22.8,22.1,21.7,21.5,21.4,21.3,21.1,21,20.8,20.7,20.5,20.1,19.6,19.1,18.6,18.2,18,17.8,17.6,17.2,16.8,16.4,16.1,16,16,16.1,16,15.8,15.7,15.7,15.7,15.8,16,16.1,16.2,16.3,16.4,16.4,16.4,16.3,16.3,16.4,16.5,16.7,16.7,16.7,16.7,16.9,17.1,0,0,0,0,0,0,0,0.1,0.4,1.3,3.6,7.5,12.5,17.5,21.2,23.3,24.2,24.4,24.2,23.8,23.5,23.2,22.9,22.7,22.7,22.7,22.7,22.6,22.5,22.4,22.5,22.7,23,23.5,23.9,24.1,24,23.6,23.2,22.8,22.8,23,23.1,23.1,22.9,22.7,22.6,22.5,22.5,22.5,22.3,22,21.6,21.3,21.2,21.3,21.7,22.2,22.6,22.7,22.6,22.5,22.5,22.7,22.7,22.6,22.5,22.6,22.7,22.8,22.9,22.7,22.5,22.3,22.3,22.5,22.9,23.2,23.3,23,22.6,22.2,22,21.9,21.8,21.6,21.4,21.2,21,20.8,20.5,20,19.4,18.8,18.5,18.2,18,17.8,17.6,17.3,17,16.8,16.6,16.5,16.5,16.4,16.3,16.1,16,15.9,16,16.2,16.5,16.7,16.9,17,16.9,16.9,16.7,16.7,16.7,16.7,16.8,16.8,16.8,16.9,17,17.3,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.9,10.6,15.8,20.1,22.9,24.1,24.3,24,23.6,23.2,23.1,23,23,23,23.1,23.2,23.1,23.1,23.1,23.3,23.6,24,24.4,24.7,24.8,24.7,24.4,23.9,23.5,23.3,23.3,23.4,23.4,23.3,23.3,23.3,23.4,23.6,23.5,23.3,22.8,22.3,21.9,21.7,21.8,22.3,22.9,23.3,23.3,23.1,22.8,22.7,22.6,22.7,22.7,22.8,23,23.3,23.5,23.5,23.3,22.9,22.5,22.2,22.2,22.4,22.7,23,23,22.9,22.6,22.3,22.1,22,21.9,21.7,21.5,21.3,21.1,20.7,20.1,19.5,19,18.6,18.3,18.3,18.2,18,17.8,17.6,17.4,17.3,17.2,17.1,16.9,16.7,16.5,16.3,16.2,16.2,16.4,16.7,17.1,17.3,17.4,17.5,17.4,17.4,17.2,17.1,17,16.9,17,17.1,17.3,17.7,18.1,0,0,0,0,0,0,0,0,0.1,0.6,1.9,4.6,8.8,14.1,18.9,22.2,24,24.5,24.3,23.9,23.6,23.5,23.5,23.6,23.6,23.7,23.7,23.8,24,24.2,24.4,24.6,24.9,25.2,25.3,25.2,25,24.8,24.4,24.1,23.9,23.9,24.1,24.2,24.2,24.3,24.4,24.7,24.8,24.8,24.4,23.8,23.1,22.6,22.2,22.3,22.6,23.1,23.3,23.3,23.1,22.9,22.6,22.5,22.6,22.9,23.2,23.5,23.8,24,23.9,23.7,23.2,22.8,22.5,22.3,22.3,22.5,22.8,23,23,22.8,22.5,22.2,22,21.9,21.9,21.8,21.6,21.3,20.8,20.1,19.5,18.9,18.6,18.5,18.6,18.6,18.5,18.2,17.9,17.7,17.8,17.8,17.8,17.6,17.3,17,16.7,16.6,16.6,16.6,16.8,17.1,17.4,17.6,17.8,17.9,17.8,17.7,17.5,17.2,17.1,17.2,17.5,17.9,18.5,19.2,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.4,7.1,12,17.1,21.1,23.6,24.7,25,24.8,24.5,24.2,24,24,24,24,24.2,24.6,25,25.3,25.4,25.5,25.5,25.5,25.5,25.4,25.2,25,24.7,24.5,24.4,24.5,24.8,25.1,25.3,25.5,25.6,25.7,25.6,25.3,24.8,24.1,23.5,23.1,22.8,22.8,23,23.1,23.2,23.1,22.9,22.8,22.7,22.7,22.9,23.2,23.6,23.9,24,24.1,24,23.8,23.5,23.2,23,22.8,22.7,22.7,22.9,23.1,23.1,23,22.7,22.4,22.2,22.1,22.2,22.1,21.9,21.5,20.8,20.1,19.5,19,18.8,18.7,18.8,18.9,18.7,18.4,18,17.8,17.9,18.1,18.2,18.1,17.9,17.6,17.4,17.2,17.1,17.1,17.1,17.2,17.3,17.5,17.8,18,18.1,17.9,17.7,17.5,17.3,17.4,17.7,18.2,18.9,19.8,0,0,0,0,0,0,0,0,0,0.2,0.8,2.2,5.1,9.4,14.4,19.1,22.5,24.5,25.4,25.5,25.2,24.7,24.3,24.1,24,24.2,24.5,25.1,25.6,25.8,25.8,25.7,25.5,25.6,25.6,25.6,25.5,25.2,24.9,24.7,24.6,24.8,25.1,25.5,25.9,26.1,26.2,26.2,25.8,25.2,24.5,24,23.8,23.7,23.7,23.8,23.9,23.8,23.6,23.4,23.1,23,22.9,23,23.2,23.5,23.8,23.9,24,24.1,24,23.9,23.8,23.7,23.6,23.5,23.4,23.4,23.4,23.5,23.4,23.2,22.8,22.6,22.4,22.4,22.5,22.4,22.2,21.7,21.1,20.5,19.9,19.5,19.2,19,19,18.9,18.6,18.3,17.9,17.8,17.8,18,18.2,18.4,18.4,18.3,18.1,17.9,17.7,17.6,17.5,17.4,17.3,17.4,17.7,18,18.1,18.1,17.9,17.7,17.6,17.5,17.7,18.1,18.6,19.4,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,3.1,6.3,10.7,15.6,19.9,23,24.9,25.6,25.6,25.1,24.6,24.3,24.2,24.4,24.8,25.2,25.6,25.7,25.6,25.4,25.4,25.6,25.9,26.1,26,25.7,25.3,25,24.9,25,25.3,25.7,26.1,26.3,26.4,26.3,25.9,25.3,24.6,24.2,24.1,24.2,24.4,24.6,24.9,24.9,24.6,24.1,23.8,23.6,23.4,23.4,23.5,23.7,23.9,24.1,24.3,24.4,24.5,24.4,24.3,24.2,24.1,24.1,24.1,24.1,24,23.8,23.6,23.2,22.9,22.6,22.5,22.4,22.4,22.4,22.2,21.9,21.5,21.1,20.7,20.3,19.8,19.5,19.3,19,18.7,18.4,18.1,17.9,18,18.1,18.4,18.6,18.8,18.8,18.6,18.4,18.1,17.9,17.7,17.5,17.4,17.4,17.6,17.9,18.2,18.3,18.2,18,17.8,17.8,17.8,18,18.3,18.7,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.4,3.3,6.5,10.8,15.5,19.7,22.8,24.7,25.4,25.4,25.1,24.8,24.7,24.8,25,25.3,25.4,25.5,25.5,25.5,25.8,26.1,26.4,26.6,26.5,26.3,26,25.7,25.5,25.5,25.6,25.9,26.1,26.4,26.6,26.6,26.3,25.7,25,24.5,24.4,24.4,24.4,24.6,24.9,25.1,25,24.7,24.4,24.2,24,23.8,23.8,24,24.2,24.5,24.8,25.1,25.2,25.1,24.8,24.7,24.6,24.6,24.5,24.4,24.2,23.8,23.4,23.1,22.9,22.7,22.4,22.2,22.1,22,21.9,21.9,21.8,21.6,21.3,20.9,20.4,20,19.7,19.5,19.3,19,18.7,18.5,18.5,18.6,18.9,19.1,19.2,19.2,18.9,18.5,18.1,17.8,17.7,17.6,17.5,17.5,17.7,18.1,18.4,18.6,18.5,18.3,18.2,18.2,18.1,18.1,18.2,18.4,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.4,3.2,6.2,10.3,14.9,19.2,22.6,24.6,25.4,25.5,25.4,25.2,25.1,25.2,25.3,25.4,25.5,25.8,26,26.3,26.7,26.9,27,27.1,27,26.8,26.5,26.2,26,26,26.1,26.4,26.7,26.9,27,26.8,26.2,25.5,24.8,24.4,24.2,24,24.2,24.5,24.7,24.8,24.8,24.7,24.5,24.3,24.1,24.1,24.3,24.5,24.8,25.2,25.5,25.6,25.6,25.4,25.1,25,24.8,24.7,24.5,24.1,23.6,23.2,23,22.8,22.7,22.4,22.1,21.9,21.7,21.7,21.7,21.7,21.7,21.5,21.2,20.8,20.4,20.1,19.9,19.8,19.7,19.5,19.3,19.2,19.3,19.4,19.6,19.6,19.5,19.1,18.6,18.2,17.9,17.8,17.8,17.9,18,18.2,18.4,18.7,18.9,18.9,18.8,18.8,18.8,18.7,18.6,18.6,18.7,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.9,10,14.7,19.1,22.5,24.4,25.2,25.3,25.3,25.2,25.3,25.4,25.5,25.8,26.1,26.4,26.7,27,27.2,27.4,27.5,27.5,27.3,27,26.6,26.4,26.4,26.5,26.8,27.1,27.3,27.4,27.2,26.7,26,25.2,24.6,24.2,23.9,23.9,24.1,24.4,24.6,24.7,24.7,24.6,24.4,24.3,24.3,24.5,24.7,24.9,25.2,25.5,25.7,25.8,25.7,25.5,25.3,25,24.7,24.4,24,23.6,23.3,23.2,23.1,23,22.7,22.4,22.1,21.9,21.7,21.6,21.6,21.6,21.5,21.3,21,20.7,20.4,20.2,20.1,20.1,20,19.9,19.7,19.6,19.7,19.8,19.9,19.8,19.4,19,18.6,18.4,18.4,18.5,18.6,18.8,19,19.1,19.3,19.4,19.4,19.3,19.4,19.4,19.3,19.2,19.2,19.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.2,2.9,5.9,10.1,14.8,19.1,22.2,23.9,24.7,25,25.2,25.4,25.6,25.8,26,26.2,26.5,26.8,27.1,27.3,27.5,27.7,27.7,27.5,27.1,26.8,26.7,26.8,27,27.2,27.5,27.6,27.6,27.4,27,26.4,25.7,25,24.4,24,23.9,24,24.3,24.6,24.7,24.8,24.7,24.6,24.6,24.8,24.9,25,25.1,25.3,25.5,25.7,25.8,25.9,25.8,25.5,25.1,24.7,24.4,24.1,23.9,23.8,23.7,23.6,23.4,23.1,22.8,22.6,22.3,22,21.7,21.5,21.5,21.5,21.4,21.3,21,20.7,20.5,20.4,20.3,20.2,20,19.8,19.7,19.8,20,20.2,20.2,19.9,19.5,19.3,19.1,19.1,19.3,19.6,19.8,20,20.1,20.1,20.1,20.1,20,19.9,19.9,19.8,19.9,20.3,21.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.5,1.3,3.1,6,10.1,14.5,18.5,21.5,23.4,24.4,25,25.4,25.7,25.8,25.9,25.9,26.1,26.4,26.8,27.2,27.5,27.8,27.8,27.6,27.3,27.1,27.1,27.3,27.5,27.6,27.7,27.7,27.7,27.5,27.1,26.7,26.1,25.4,24.8,24.3,24.2,24.3,24.6,24.9,25.1,25.2,25.2,25.2,25.3,25.4,25.5,25.6,25.6,25.6,25.7,25.8,26,26,25.9,25.6,25.1,24.8,24.5,24.4,24.3,24.2,24.1,23.9,23.6,23.2,23,22.8,22.5,22.1,21.8,21.6,21.5,21.5,21.5,21.4,21.2,21,20.8,20.6,20.4,20.2,20,19.8,19.8,20,20.3,20.6,20.7,20.4,20,19.7,19.6,19.7,19.9,20.4,20.9,21.3,21.4,21.2,20.9,20.6,20.4,20.2,20.2,20.3,20.8,21.6,22.7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.5,1.3,3,5.7,9.5,13.8,17.9,21,23,24.3,25,25.4,25.5,25.5,25.5,25.7,26,26.4,27,27.6,28,28.2,28,27.8,27.6,27.6,27.7,27.8,27.9,27.8,27.7,27.6,27.4,27.2,26.8,26.3,25.7,25.1,24.7,24.6,24.8,25.2,25.6,25.8,25.9,25.9,25.9,26,26.1,26.1,26.1,26.1,26.1,26,26,26.1,26.2,26,25.7,25.3,24.9,24.7,24.6,24.5,24.4,24.2,23.9,23.5,23.2,22.9,22.7,22.5,22.2,21.9,21.8,21.7,21.7,21.7,21.6,21.4,21.2,21.1,20.9,20.6,20.4,20.1,20,19.9,20.1,20.4,20.6,20.7,20.4,20.1,19.9,19.8,19.8,20.1,20.9,21.9,22.7,22.7,22.2,21.4,20.8,20.3,20.1,20.2,20.7,21.4,22.4,23.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.4,1.2,2.7,5.2,8.9,13.2,17.3,20.6,22.8,24.2,24.9,25.2,25.3,25.4,25.6,25.9,26.4,27,27.7,28.4,28.7,28.5,28.2,28,28,28,28.1,28.1,27.9,27.8,27.6,27.5,27.3,26.9,26.4,25.9,25.3,25,25.1,25.6,26.1,26.5,26.6,26.5,26.4,26.3,26.4,26.5,26.5,26.5,26.5,26.4,26.3,26.2,26.2,26.2,26.1,25.8,25.4,25.1,25,24.8,24.7,24.5,24.2,23.8,23.4,23.2,23,22.7,22.5,22.3,22.1,22.1,22.2,22.2,22.1,21.9,21.7,21.6,21.5,21.3,21,20.8,20.5,20.3,20.1,20.1,20.2,20.3,20.3,20.1,20,19.8,19.8,19.9,20.3,21.2,22.5,23.4,23.4,22.6,21.5,20.6,20.1,19.9,20.2,20.7,21.4,22.2,22.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1,2.4,4.8,8.4,12.5,16.6,20.1,22.6,24.1,25,25.4,25.7,25.9,26.3,26.7,27.2,27.8,28.3,28.6,28.6,28.3,28.2,28.2,28.3,28.5,28.4,28.2,27.9,27.7,27.6,27.3,26.9,26.4,25.8,25.5,25.3,25.6,26.2,26.8,27.1,27.1,26.8,26.6,26.5,26.6,26.7,26.8,26.9,26.8,26.7,26.5,26.4,26.4,26.3,26.2,25.9,25.6,25.4,25.2,25.1,24.9,24.6,24.1,23.8,23.5,23.3,23.2,22.9,22.6,22.3,22.2,22.3,22.5,22.7,22.7,22.4,22.2,22,22,21.9,21.6,21.3,20.9,20.6,20.2,20,19.9,19.9,19.9,19.9,19.9,19.9,20,20.1,20.4,21.2,22.2,23,22.9,22.2,21.2,20.4,20,20,20.3,20.7,21,21.4,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.1,4.4,7.6,11.7,15.9,19.7,22.5,24.3,25.3,25.8,26.1,26.5,26.8,27.1,27.4,27.7,27.9,28,28,28,28.2,28.5,28.8,28.7,28.5,28.1,27.8,27.5,27.1,26.7,26.2,25.9,25.7,25.8,26.1,26.5,27,27.2,27.2,27,26.8,26.7,26.8,26.9,27.1,27.2,27.2,27.1,26.9,26.7,26.6,26.5,26.4,26.2,25.9,25.7,25.6,25.4,25.2,24.8,24.4,24,23.8,23.7,23.5,23.2,22.8,22.5,22.4,22.5,22.8,23.1,23.1,22.9,22.6,22.4,22.5,22.4,22.2,21.8,21.3,20.7,20.3,20,19.8,19.8,19.8,19.9,20,20.1,20.2,20.2,20.4,20.9,21.7,22.2,22.2,21.9,21.2,20.7,20.4,20.5,20.7,20.9,20.9,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.7,1.8,3.8,6.9,11,15.5,19.6,22.7,24.6,25.6,26.1,26.4,26.5,26.6,26.7,26.9,27.1,27.4,27.7,28.1,28.5,29,29.2,29.1,28.6,28.1,27.6,27.2,26.7,26.2,26,26,26.2,26.4,26.6,26.8,27,27.2,27.3,27.3,27.3,27.2,27.2,27.2,27.4,27.7,27.7,27.6,27.3,27,26.8,26.7,26.6,26.5,26.3,26.2,26,25.9,25.7,25.3,24.8,24.6,24.5,24.5,24.4,24.1,23.7,23.2,23,23.1,23.4,23.6,23.5,23.2,22.8,22.6,22.7,22.7,22.5,22.1,21.5,20.9,20.5,20.2,20,19.9,19.9,20.1,20.2,20.4,20.4,20.3,20.4,20.9,21.5,22,22.3,22.3,21.9,21.5,21.3,21.2,21.3,21.3,21.1,20.9,20.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.5,3.4,6.7,11,15.9,20.3,23.5,25.2,26,26.3,26.3,26.3,26.3,26.4,26.7,27.2,27.9,28.5,29.1,29.5,29.5,29.1,28.4,27.8,27.2,26.6,26.2,25.9,26,26.3,26.8,27.1,27.2,27.3,27.3,27.4,27.6,27.8,27.9,27.9,27.8,27.7,28,28.2,28.4,28.2,27.9,27.5,27.2,27.1,27,27,26.9,26.9,26.8,26.6,26.2,25.8,25.5,25.4,25.6,25.9,26.2,26.1,25.6,24.8,24.2,24,23.9,23.8,23.6,23.1,22.7,22.6,22.7,22.7,22.6,22.2,21.7,21.2,20.8,20.5,20.3,20.2,20.1,20.2,20.3,20.4,20.4,20.4,20.6,21.1,21.8,22.5,23,23.1,22.9,22.4,22,21.8,21.8,21.7,21.4,21.2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.6,1.6,3.7,7.3,12.1,17.4,21.7,24.5,25.8,26.2,26.3,26.3,26.5,26.7,27.2,27.9,28.5,29.1,29.4,29.4,29,28.4,27.8,27.2,26.7,26.3,26.1,26.2,26.6,27.1,27.6,27.8,27.8,27.7,27.7,27.8,28.1,28.4,28.5,28.5,28.3,28.3,28.4,28.7,28.8,28.8,28.5,28.1,27.9,27.7,27.6,27.5,27.5,27.5,27.4,27.2,26.9,26.6,26.5,26.7,27.2,27.9,28.4,28.4,27.8,26.8,25.7,24.8,24.2,23.8,23.3,22.9,22.6,22.6,22.7,22.7,22.6,22.3,22,21.6,21.3,21.1,20.9,20.6,20.5,20.4,20.3,20.3,20.4,20.5,20.9,21.4,22.1,22.9,23.5,23.7,23.4,22.8,22.4,22.2,22.1,22.1,21.8,21.5,21.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0.7,1.9,4.5,8.7,14,19.2,23.1,25.2,26.1,26.4,26.5,26.8,27.3,27.9,28.7,29.2,29.4,29.2,28.7,28.2,27.6,27.2,26.8,26.6,26.6,26.7,27.1,27.6,28,28.3,28.3,28.2,28.1,28,28.1,28.4,28.6,28.8,28.8,28.7,28.7,28.8,29,29.2,29.2,29.1,28.8,28.6,28.3,28.1,28,28,28,28,27.9,27.8,27.8,27.9,28.2,28.7,29.4,29.9,30,29.6,28.6,27.3,25.9,24.7,23.8,23.3,22.9,22.7,22.7,22.8,22.8,22.7,22.5,22.3,22.1,22,21.8,21.6,21.4,21.2,21,20.8,20.6,20.5,20.7,21,21.5,22.1,22.8,23.4,23.5,23.3,22.7,22.3,22.3,22.3,22.4,22.2,21.9,21.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.3,0.9,2.6,5.7,10.4,15.7,20.5,23.8,25.5,26.3,26.6,27,27.5,28.2,28.8,29.1,29,28.6,28,27.6,27.3,27.1,27.1,27.2,27.4,27.7,28,28.4,28.6,28.7,28.5,28.4,28.3,28.3,28.4,28.6,28.7,28.8,28.8,28.9,28.9,29.1,29.3,29.5,29.6,29.6,29.5,29.3,29,28.8,28.5,28.4,28.4,28.5,28.8,29.1,29.3,29.4,29.6,29.8,30.2,30.6,30.8,30.5,29.9,28.8,27.4,25.9,24.7,23.9,23.3,23,22.9,22.9,22.9,22.8,22.8,22.8,22.7,22.5,22.4,22.2,22.1,22,21.8,21.4,21,20.8,20.8,20.9,21.3,21.8,22.4,22.9,23.1,22.9,22.5,22.3,22.3,22.4,22.5,22.4,22.2,21.9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.4,1.3,3.3,6.8,11.5,16.6,20.9,23.9,25.5,26.4,27,27.5,28,28.4,28.6,28.4,28,27.7,27.5,27.4,27.6,27.8,28.1,28.4,28.6,28.8,28.8,28.8,28.8,28.7,28.6,28.6,28.7,28.9,29,29.1,29.1,29.1,29.1,29.3,29.4,29.6,29.7,29.8,29.9,29.9,29.9,29.7,29.5,29.2,29,28.9,29.2,29.7,30.4,30.9,31,31,30.9,31,31.1,31.2,31.1,30.7,30.1,29.1,27.7,26.3,25.1,24.1,23.5,23.1,23,23,23.2,23.4,23.5,23.4,23.1,22.8,22.6,22.5,22.4,22.2,21.9,21.5,21.1,20.9,21,21.2,21.6,22,22.4,22.6,22.6,22.5,22.3,22.3,22.4,22.5,22.5,22.3,22.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.6,1.6,3.7,7.1,11.6,16.2,20.2,23.2,25.2,26.4,27.2,27.8,28.2,28.3,28.1,27.9,27.6,27.6,27.7,28,28.4,28.9,29.2,29.4,29.4,29.3,29.1,29,29,29,29.1,29.3,29.5,29.6,29.6,29.5,29.5,29.5,29.6,29.7,29.8,29.8,29.8,29.9,30.1,30.3,30.4,30.3,30.2,30,30,30.3,30.9,31.6,32.2,32.5,32.4,32.2,32,31.8,31.6,31.3,31.1,30.9,30.4,29.5,28.2,26.8,25.4,24.2,23.6,23.3,23.4,23.7,24,24.2,24,23.5,23.1,22.9,22.8,22.7,22.6,22.4,22.1,21.8,21.6,21.4,21.4,21.6,21.8,22.1,22.3,22.5,22.5,22.5,22.5,22.5,22.5,22.6,22.6,22.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0.2,0.6,1.6,3.5,6.5,10.4,14.7,18.6,21.9,24.3,26.1,27.2,28,28.3,28.2,28.1,27.9,27.8,27.9,28.2,28.7,29.3,29.7,29.9,29.9,29.7,29.5,29.3,29.3,29.4,29.6,29.8,30,30.1,30.1,30,29.9,29.8,29.8,29.8,29.9,30,30.1,30.3,30.6,31.1,31.6,31.9,31.9,31.9,31.9,32,32.4,32.9,33.3,33.5,33.4,33,32.5,32.2,31.8,31.5,31.3,31.3,31.1,30.8,29.9,28.5,26.8,25.3,24.2,23.8,23.9,24.2,24.5,24.5,24.3,23.8,23.4,23.2,23.1,23.2,23.4,23.4,23.4,23.2,22.8,22.5,22.2,22,21.9,22,22.2,22.4,22.6,22.7,22.7,22.7,22.7,22.8,23,23]"),$_={bounds:X_,columns:q_,rows:Y_,heights:Z_},{bounds:[Bl,pu,mu,zl],columns:ko,rows:gu,heights:da}=$_,_u=[37.309805,44.895974],xu=1e3,vu=1160;function K_(i){const[t,e]=i.origin,[n,s]=i.scale,o=(_u[0]-t)*n,r=(e-_u[1])*s;return(a,l,c)=>{const u=Math.hypot(a-o,l-r);if(u>=vu)return c;const f=t+a/n,h=e-l/s;if(f<Bl||f>mu||h<pu||h>zl)return c;const p=(f-Bl)/(mu-Bl)*(ko-1),d=(zl-h)/(zl-pu)*(gu-1),_=Math.min(Math.floor(p),ko-2),m=Math.min(Math.floor(d),gu-2),g=m*ko+_,x=ue.lerp(da[g],da[g+1],p-_),M=ue.lerp(da[g+ko],da[g+ko+1],p-_),v=Math.max(.16,ue.lerp(x,M,d-m));return u<=xu?v:ue.lerp(v,c,ue.smoothstep(u,xu,vu))}}const Mu=["#b2a99a","#bbb1a1","#b8ae9e","#b7ab99","#aea394"],J_="#c4baaa",Q_="#a39888",Su="#4b5351";function j_(i,t,e){const n=me(i,"Верхняя и нижняя набережные · подпорные стены",{surface:"stone"});for(const s of t.waterfront.sections){if(s.soft)continue;const o={section:s,upper:!0},r={section:s,upper:!1};for(const{a,b:l,span:c}of s.segments){const[u,f]=a,[h,p]=l,d=(f-p)/c,_=(h-u)/c,m=Math.ceil(c/1.25),g=(x,M,v=0,S=0)=>{const b=ue.lerp(u,h,x),w=ue.lerp(f,p,x);return[b+v*d,e.faceHeight(b,w,M)+S,w+v*_]};for(let x=0;x<m;x++){const M=x/m,v=(x+1)/m,[S,,b]=g((M+v)/2,o);if(t.wallOpening(S,b,s))continue;const w=g(M,r,0,-.12),y=g(v,r,0,-.12),E=g(M,o,0,.24),T=g(v,o,0,.24);if(E[1]-w[1]<.55||T[1]-y[1]<.55)continue;n.face(Q_,w,y,T,E);const C=Math.max(1,Math.round((E[1]+T[1]-w[1]-y[1])/2/.54));for(let I=0;I<C;I++){const N=(I+.026)/C,F=(I+.976)/C,G=mt(w,E,N),H=mt(w,E,F),$=mt(y,T,N),et=mt(y,T,F),St=([bt,rt,st],[ct,B,Z],ht)=>[ue.lerp(bt,ct,ht)-d*.016,ue.lerp(rt,B,ht),ue.lerp(st,Z,ht)-_*.016];n.face(Mu[(x*11+I*7)%Mu.length],St(G,$,.009),St(G,$,.991),St(H,et,.991),St(H,et,.009))}const D=s.coping??.38;if(n.face(J_,E,T,g(v,o,D,.24),g(M,o,D,.24)),s.rail===!1)continue;const P=(I,N)=>g(I,o,D*.55,N);for(const I of[.43,1.18])n.beam(P(M,I),P(v,I),.038,Su);const R=Math.max(1,Math.round(c/m/.28));for(let I=0;I<R;I++){const N=ue.lerp(M,v,I/R);n.beam(P(N,.42),P(N,1.16),I===0?.045:.025,Su)}}}}n.finish()}const ao=[-287.6,-16.5],pa=-.11,co="#6c4934",mn="#ba986f",qo="#a58b6c",s0=["#674430","#734d37","#7a5239","#6a4734","#815a41"],yu=["#bd282d","#c63134","#c93636","#b9252d"];function Ca([i,t]){return(e,n)=>[i+e*Math.cos(pa)-n*Math.sin(pa),t+e*Math.sin(pa)+n*Math.cos(pa)]}const tx=[[-3.32,-1.15],[1.8,-1.12],[3.48,0],[1.8,1.12],[-3.32,1.18]].map(i=>Ca(ao)(...i));function ex(i,t){const e=new Pi(1,2),n=Bn(new te({color:"white",flatShading:!0}),{surface:"foliage"}),s=new zn(e,n,t.length),o=new be;t.forEach(({center:r,scale:a,color:l},c)=>{o.position.set(...r),o.scale.set(...a),o.rotation.y=c*.87,o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c,new $t(l))}),s.castShadow=!0,s.receiveShadow=!0,i.add(s)}function nx(i,t){const e=[[-3.32,.98,1.41],[-2.54,1.13,1.25],[-1.12,1.22,1.09],[.62,1.15,1.06],[2.05,.87,1.17],[3.14,.4,1.42],[3.5,0,1.58]];function n(l,c,u){const[f,h,p]=e[l];return t(f-(l===e.length-1?(1-u)*.6:0),c*h*(.73+.27*u),.22+(p-.22)*u)}for(const l of[-1,1])for(let c=1;c<e.length;c++){for(let u=0;u<7;u++){const f=u/7,h=(u+.96)/7;i.face(s0[(u+c*2)%s0.length],n(c-1,l,f),n(c,l,f),n(c,l,h),n(c-1,l,h))}if(i.beam(n(c-1,l,1),n(c,l,1),.069,mn),c<6){const[u,f,h]=e[c],p=c===1?3:4;for(let g=0;g<p;g++){const[x,M,v]=e[c-1],S=g/p,b=x+(u-x)*S,w=l*(M+(f-M)*S),y=v+(h-v)*S;i.beam(t(b,w,y),t(b,w,y+.34),.045,mn)}const[d,_,m]=e[c-1];i.beam(t(d,l*_,m+.34),t(u,l*f,h+.34),.057,mn)}}const[s,o,r]=e[0];i.face(co,t(s,-o*.73,.22),t(s,o*.73,.22),t(s,o,r),t(s,-o,r));for(const l of[-.52,.52]){const c=s-.025,u=.3;for(const f of[l-u,l+u])i.beam(t(c,f,.4),t(c,f,1.18),.044,mn);for(const f of[.4,1.18])i.beam(t(c,l-u,f),t(c,l+u,f),.044,mn);for(let f=0;f<5;f++){const h=f/4;i.beam(t(c,l-u+2*u*h,.43),t(c,l-u,.43+.7*h),.021,mn),i.beam(t(c,l+u-2*u*h,.43),t(c,l+u,.43+.7*h),.021,mn),i.beam(t(c,l-u+2*u*h,1.14),t(c,l+u,1.14-.7*h),.021,mn),i.beam(t(c,l+u-2*u*h,1.14),t(c,l-u,1.14-.7*h),.021,mn)}}i.beam(t(s,-o,r+.34),t(s,o,r+.34),.06,mn);for(let l=0;l<=10;l++){const c=-o+2*o*l/10;i.beam(t(s,c,r),t(s,c,r+.34),.045,mn)}for(let l=1;l<e.length;l++){const[c,u]=e[l-1],[f,h]=e[l];i.face(l%2?"#8e694c":"#856149",t(c,-u,1),t(f,-h,1),t(f,h,1),t(c,u,1))}for(const l of[-1,1])for(const c of[-2.68,-1.87,-.88]){const u=l*(c<-2?1.04:1.12),f=Array.from({length:12},(h,p)=>{const d=p*Math.PI/6;return t(c+Math.cos(d)*.11,u,.66+Math.sin(d)*.1)});i.face("#d0b796",...f)}for(let l=0;l<5;l++){const c=.2+l*.16,u=1.73-l*.13;i.face(mn,t(-2.79,u,c),t(-2.13,u,c),t(-2.13,u-.13,c),t(-2.79,u-.13,c))}for(const l of[-2.81,-2.11])i.beam(t(l,1.77,.16),t(l,1.13,1.06),.075,co);i.beam(t(2.55,0,1.38),t(4.88,0,2.98),.105,mn),i.beam(t(4.62,0,2.78),t(1.19,0,4.62),.026,qo);const a=[];for(let l=0;l<14;l++){const c=l*Math.PI/7;a.push(t(-2.37,Math.cos(c)*.31,1.54+Math.sin(c)*.31))}i.beam(t(-2.37,0,1),t(-2.37,0,1.53),.082,co),a.forEach((l,c)=>{i.beam(l,a[(c+1)%a.length],.036,mn),c%2===0&&i.beam(l,t(-2.37,0,1.54),.025,mn)})}function bu(i,t,e,n){i.beam(t(e,0,.99),t(e,0,n),.087,co);const s=[[1.56,n*.6,1.03],[n*.61,n*.76,.79],[n*.78,n*.9,.55]];for(const[o,r,a]of s){const l=(c,u)=>{const f=Math.sin(u*Math.PI)*(1-c*c);return t(e+.11+.25*f,c*a*(1-u*.2),o+u*(r-o))};for(let c=0;c<4;c++)for(let u=0;u<6;u++){const f=-1+u/3,h=f+1/3,p=c/4,d=(c+1)/4;i.face(yu[u===0||u===5?0:(c+u)%yu.length],l(f,p),l(h,p),l(h,d),l(f,d))}for(const c of[0,1])i.beam(l(-1.06,c),l(1.06,c),.037,co);for(const c of[-1,1])i.beam(l(c,0),l(c,1),.023,qo)}for(const o of[-1,1]){i.beam(t(e-.77,o*1.05,1.2),t(e,o*.26,n*.86),.022,qo),i.beam(t(e+.53,o*1.05,1.2),t(e,o*.26,n*.86),.022,qo);for(let r=1;r<10;r++){const a=r/11,l=o*(1.05-.79*a),c=1.2+(n*.86-1.2)*a;i.beam(t(e-.77*(1-a),l,c),t(e+.53*(1-a),l,c),.019,qo)}}}function ix(i,t,e,n,s){for(let o=0;o<14;o++){const r=o*2.399,a=Math.cos(r),l=Math.sin(r),c=s*(.52+.38*(o*7%11/10)),u=t(e+a*.06,n+l*.06,.04),f=t(e+a*.36*s,n+l*.36*s,c*.68),h=t(e+a*.57*s,n+l*.57*s,c),p=["#8c8551","#a09461","#b2a173"][o%3];i.beam(u,f,.027,p),i.beam(f,h,.018,p)}}function wu(i,t,e,n,s){const o=s?["#a34c43","#be8341","#567b56","#496d80","#c6944e"]:["#675644","#665540"];for(const r of[-.79,.79]){const a=s?"#3e684d":"#444a46";i.beam(t(e-.22,n+r,.025),t(e-.18,n+r,.78),.047,a),i.beam(t(e+.23,n+r,.025),t(e+.22,n+r,.43),.047,a),i.beam(t(e-.18,n+r,.43),t(e+.22,n+r,.43),.052,a)}for(let r=0;r<5;r++){const a=e-.19+r*.1;i.beam(t(a,n-.9,.44),t(a,n+.9,.44),.071,o[r%o.length]),i.beam(t(e-.19-r*.012,n-.9,.57+r*.072),t(e-.19-r*.012,n+.9,.57+r*.072),.067,o[(r+1)%o.length])}}function sx(i,t){const e=new Me;e.name="Сквер у Алых парусов",i.add(e);const n=me(e,"Алые паруса · деревянный кораблик и клумбы",{surfaces:{wood:[co,mn,...s0,"#8e694c","#856149"],ground:["#777653","#797358"]}}),s=Ca(ao),o=t(...ao)+.15,r=(h,p,d)=>{const[_,m]=s(h,p);return[_,o+d,m]},a=(h,p)=>[[-h,-p],[h,-p],[h,p],[-h,p]].map(([d,_])=>s(d,_));n.shell(a(9,2.18),o-.08,o+.11,"#d7d5bd"),n.flat(a(8.87,2.05),o+.125,"#777653");for(let h=0;h<28;h++){const p=-4.2+h*.318,d=p+.307;n.face(["#628d86","#699892","#7ca39a","#5a8179"][h%4],r(p,-1.45,.145),r(d,-1.45,.145),r(d,1.45,.145),r(p,1.45,.145))}nx(n,r),bu(n,r,-1.03,5.02),bu(n,r,.98,4.6),wu(n,r,9.27,.08,!0);for(const[h,p,d]of[[-7.25,-.95,1.06],[-6.45,.52,.72],[-5.35,1.11,.93],[4.35,1.4,.89],[5.48,-1.23,1.1],[6.8,.44,.99],[7.85,1.12,.83]])ix(n,r,h,p,d);const l=[],c=["#415c35","#536c3b","#66804c","#4d6540"],u=[[-344.6,-12.8,9.8,3.45],[-326.5,-13.4,10.5,3.4],[-310.6,-14.2,12.5,3.7],[-265.5,-20.3,15,4.7],[-247.5,-23.4,10.8,4.5]];for(const[h,[p,d,_,m]]of u.entries()){const g=Ca([p,d]),x=t(p,d)+.14,M=(v,S)=>[[-v,-S],[v,-S],[v,S],[-v,S]].map(b=>g(...b));n.shell(M(_/2,m/2),x-.1,x+.12,"#d4d3c5"),n.flat(M(_/2-.12,m/2-.12),x+.13,"#797358");for(const v of[-.29,.02,.32]){const[S,b]=g(v*_,(h%2-.5)*.8),w=1.15+.51*((h+Math.round(v*10))%3+3)/3;for(let y=0;y<4;y++){const E=w*(.5-y*.095);l.push({center:[S,x+w*(.28+y*.19),b],scale:[E,w*.26,E*.9],color:c[(y+h)%c.length]})}}for(let v=0;v<7;v++){const[S,b]=g((v/6-.5)*_*.75,-.9);l.push({center:[S,x+.2,b],scale:[.42,.16,.42],color:v%3?"#804944":"#77673c"})}}for(const[h,p]of[[-301.1,-31],[-290.8,-31.7],[-273.1,-34.3],[-260.6,-35],[-247.5,-37.5]]){const d=Ca([h,p]),_=t(h,p)+.15;wu(n,(g,x,M)=>{const[v,S]=d(x,-g);return[v,_+M,S]},0,0,!1)}const f=[[-318,0,6.2],[-310.5,-.4,7.7],[-301,1.5,6.4],[-292.2,-.9,8.3],[-282.1,-1.8,7.6],[-272.4,.8,8.7],[-261,-1.2,6.8],[-249.6,.5,7.3]];for(const[h,[p,d,_]]of f.entries()){const m=t(p,d)+.05;n.beam([p,m,d],[p+.13,m+_*.69,d],.24,"#665949");for(let g=0;g<6;g++){const x=g*2.399,M=_*(g<4?.21:.14);l.push({center:[p+Math.cos(x)*M,m+_*(.6+g*.047),d+Math.sin(x)*M],scale:[_*.26,_*.27,_*.23],color:c[(h+g)%c.length]})}}ex(e,l),n.finish()}function Eu(i){const t=new kc(i);return t.colorSpace=rn,t.anisotropy=4,t}function Ie(i,{text:t,position:e,size:n,outward:s,color:o="#fff",background:r,weight:a=700,fontFamily:l="system-ui, sans-serif",letterSpacing:c="0px",lighting:u="spot",glowColor:f="#ffe4af",spill:h=!0}){if(typeof document>"u")return;const p=document.createElement("canvas");p.width=Math.max(160,Math.min(768,Math.round(n[0]*138))),p.height=Math.max(32,Math.round(p.width*n[1]/n[0]));const d=p.getContext("2d");if(!d)return;r&&(d.fillStyle=r,d.fillRect(0,0,p.width,p.height));const _=t.split(`
`);let m=p.height*.76/_.length;d.letterSpacing=c,d.font=`${a} ${m}px ${l}`,m*=Math.min(1,p.width*.93/Math.max(..._.map(S=>d.measureText(S).width)));function g(S,b,w=0){S.font=`${a} ${m}px ${l}`,S.letterSpacing=c,S.fillStyle=b,S.textBaseline="middle",S.textAlign="center",_.forEach((y,E)=>{S.fillText(y,w+p.width/2,w+p.height/2+(E-(_.length-1)/2)*m*1.13)})}g(d,o);const x=new Pn({map:Eu(p),alphaTest:.35,toneMapped:!1}),M=new ae(new di(...n),x);M.name=t,M.position.set(...e),M.rotation.y=Math.atan2(...s);let v;if(u==="neon"||u==="backlit"){const S=u==="neon",b=Math.min(44,Math.round(p.width*.12)),w=document.createElement("canvas");w.width=p.width+2*b,w.height=p.height+2*b;const y=w.getContext("2d");y.shadowColor=f,y.shadowBlur=Math.min(b,Math.max(8,m*(S?.64:.27))),g(y,f,b),S&&(y.shadowBlur=0,y.globalAlpha=.18,g(y,"#fff1dd",b));const E=n[0]*w.width/p.width,T=n[1]*w.height/p.height;v=new ae(new di(E,T),new Pn({map:Eu(w),transparent:!0,opacity:S?.94:.79,blending:po,depthWrite:!1,toneMapped:!1})),v.position.z=.014,v.visible=!1,M.add(v)}if(u!=="unlit"&&h){const S=new be;S.position.set(0,u==="spot"?n[1]*.64:0,u==="spot"?.75:.54),S.userData.nightLight={color:f,intensity:u==="neon"?3.8:2.2,range:u==="spot"?3.6:3.1},M.add(S)}return M.userData.setEvening=S=>{const b={spot:.82,backlit:.43,neon:.16,unlit:.5};x.color.setScalar(S?b[u]??.82:1),v&&(v.visible=S)},i.add(M),M}const Xe="#f4f2e9",Td="#e9e7df",_n="#373e3e",Pa="#303637",lo="#b28c5e",vc=["#d1b27a","#bc9c63","#c8a86f"],ox="#ecefe8",as=[[-416.6,-27.8,-17.5],[-408.5,-25.4,-15.7],[-399.5,-23.2,-14.7],[-389.5,-22.8,-14.6],[-378.4,-23.1,-14.8]],Ad=[[-415.65,-26.9],[-407.4,-24.5],[-408.6,-16.85],[-416.1,-18.05]];function Rd(i,t,e,n){return[[i,e],[t,e],[t,n],[i,n]]}function Ai(i,t,e,n,s=24){return Array.from({length:s},(o,r)=>{const a=r*2*Math.PI/s;return[i+e*Math.cos(a),t+n*Math.sin(a)]})}function Ne([i,t],e){return[i,e,t]}function ma(i,t){const e=as.findIndex(([o])=>o>=i);if(e<0)return as.at(-1)[t];const n=as[Math.max(0,e-1)],s=as[Math.max(0,e)];return n===s?n[t]:n[t]+(s[t]-n[t])*(i-n[0])/(s[0]-n[0])}function Rn(i,t,e,n,s,o,r,a){i.shell(Rd(t-s/2,t+s/2,n-r/2,n+r/2),e,e+o,a)}function rx(i,t){const e=new Me;e.name="Кофейня Qúeue",i.add(e);const n=me(e,"Павильон и кофейная стойка",{surfaces:{wood:["#b48558","#796c51"],foliage:["#737a51","#68774a","#83916b"]}}),s=Bn(new Pn({color:"#759497",transparent:!0,opacity:.26,depthWrite:!1,side:Je}),{surface:"glass",strength:.6}),o=Ad,r=t(-412.5,-21.7),a=r+.09,l=r+2.82;n.shell(o,r-.18,a,"#c9c5b5"),n.shell(o,l,r+3.12,Xe),n.wall(o[3],o[0],a,l,Xe);for(const[f,h]of[[0,[0,.13,.32,.54,.76,.95,1]],[1,[0,.14,.39,.64,.89,1]],[2,[0,.28,.43,.58,.7,.88,1]]]){const p=o[f],d=o[f+1],_=d[0]-p[0],m=d[1]-p[1],g=Math.hypot(_,m);for(let x=0;x<h.length-1;x++){const M=mt(p,d,h[x]),v=mt(p,d,h[x+1]);if(x===0||x===h.length-2){n.wall(M,v,a,l,Xe);continue}const b=f===2&&x===4,w=f===2&&x===3,y=b||w?r+2.48:l;y<l&&n.wall(M,v,y,l,Xe);const E=mt(M,v,.5),T=w?r+1.1:a;w&&(n.wall(M,v,a,T,"#a8a494"),n.beam([M[0],T,M[1]],[v[0],T,v[1]],.12,Pa));const C=new ae(new di((h[x+1]-h[x])*g,y-T),s);C.position.set(E[0],(T+y)/2,E[1]),C.rotation.y=-Math.atan2(m,_),e.add(C);for(const D of[M,v])n.beam(Ne(D,a),Ne(D,y),.058,Pa);if(n.beam(Ne(M,y),Ne(v,y),.055,Pa),b){const D=mt(M,v,.82);n.beam(Ne(D,r+.92),Ne(D,r+1.3),.052,"#bab4a5")}}}const c=[[-415.28,-22.2],[-414.15,-22.2],[-413.68,-21.78],[-413.68,-19.92],[-412.9,-19.25],[-411.05,-19.25],[-410.8,-18.65],[-411.22,-18.34],[-414.68,-18.67],[-415.25,-19.13]];n.shell(c,a,r+1.07,"#e4decd"),n.shell(c,r+1.07,r+1.14,"#f1e9d7");const u=c.map(f=>mt([-413.5,-19.8],f,1.03));n.shell(u,r+2.08,r+2.15,"#eac58a"),n.shell(u,r+2.15,l,"#e3dbc9"),Rn(n,-413.54,r+1.14,-19.02,.86,.46,.45,"#343435"),Rn(n,-413.54,r+1.5,-18.79,.76,.08,.04,"#a7a199");for(const f of[-413.8,-413.62,-413.44,-413.26])n.shell(Ai(f,-18.99,.06,.06,10),r+1.6,r+1.76,"#b48558");Rn(n,-411.83,r+1.14,-18.85,.85,.34,.46,"#948273"),Rn(n,-411.83,r+1.48,-18.85,.85,.046,.46,"#bbb2a0");for(const[f,h]of[[-412.4,-21.8],[-410.8,-21.2]])n.shell(Ai(f,h,.21,.21,14),a,r+.47,"#e0d9c9"),n.shell(Ai(f,h,.32,.32,14),r+.47,r+.52,"#ece4d2");for(const f of[.19,.39,.59,.79]){const[h,p]=mt(o[0],o[1],f),d=t(h,p-.66);for(const _ of[-.24,.24])n.beam([h+_,d,p-.82],[h+_,d+.43,p-.82],.022,_n),n.beam([h+_,d,p-.36],[h+_,d+.86,p-.28],.026,_n),n.beam([h+_,d+.41,p-.82],[h+_,d+.41,p-.35],.032,_n);for(let _=0;_<7;_++){const m=d+.45+_*.063,g=p-.34+_*.008;n.beam([h-.24,m,g],[h+.24,m,g],.015,_n)}Rn(n,h,d+.41,p-.58,.48,.05,.42,_n)}for(const f of[.04,.94]){const[h,p]=mt(o[0],o[1],f);ax(n,h,t(h,p-.64),p-.64)}n.finish()}function ax(i,t,e,n){i.shell(Ai(t,n,.26,.26,12),e,e+.5,"#e6e7dd"),i.flat(Ai(t,n,.22,.22,12),e+.505,"#6b6154"),i.beam([t,e+.5,n],[t+.04,e+1.39,n+.02],.035,"#796c51");for(let s=0;s<9;s++){const o=s*2.4,r=e+.79+s*.075,a=[t+.21*Math.cos(o),r+.11,n+.21*Math.sin(o)];i.beam([t,r,n],a,.024,"#737a51"),i.face(s%2?"#68774a":"#83916b",a,[t+.025,r,n+.06],[a[0]*.5+t*.5,r+.17,a[2]*.5+n*.5])}}function cx(i){const t=new Me;t.name="Ресторан «Море. Истории о еде»",i.add(t);const e=me(t,"Белая терраса у «Старинной Анапы»",{surfaces:{wood:[lo,...vc],ground:["#6b6154"]}}),{front:[n,s],grade:o}=vs,r=(h,p)=>{const[d,_]=mt(n,s,h/32.59);return[d-p*.197,_+p*.98]},a=(h,p,d,_)=>[r(h,d),r(p,d),r(p,_),r(h,_)],l=o+.15,c=l+2.94;e.shell(a(0,32.59,0,1.9),l-.34,l,"#b6aa94"),e.shell(a(0,32.59,7.1,9.15),l-.34,l,"#b6aa94");for(const[h,p]of[[0,7.3],[12.1,20.4],[24.9,32.59]])e.shell(a(h,p,1.9,7.1),l-.34,l,"#b6aa94");for(const[h,p,d,_]of[[0,32.59,0,1.9],[0,32.59,7.1,9.15],[0,7.3,1.9,7.1],[12.1,20.4,1.9,7.1],[24.9,32.59,1.9,7.1]])for(let m=h+.13;m<p;m+=.34)e.beam(Ne(r(m,d),c),Ne(r(m,_),c),.077,Xe);for(let h=0;h<6;h++){const p=c-.02+h*.09;e.beam(Ne(r(0,0),p),Ne(r(32.59,0),p),.066,Xe);for(const d of[0,32.59])e.beam(Ne(r(d,0),p),Ne(r(d,9.15),p),.066,Xe)}for(const h of[.14,4.55,8.98,13.41,17.84,22.27,26.7,32.43])e.beam(Ne(r(h,.22),l),Ne(r(h,.22),c+.44),.165,Xe);for(const h of[2.35,6.82,11.25,15.66,20.07,24.48,28.89,31.3]){e.shell(a(h-.76,h+.76,.16,.72),l,l+.65,Xe);for(let _=1;_<=5;_++){const m=l+.1+_*.085;e.beam(Ne(r(h-.75,.153),m),Ne(r(h+.75,.153),m),.02,Td)}e.flat(a(h-.7,h+.7,.2,.68),l+.655,"#788166");const[p,d]=r(h,1.34);Rn(e,p,l+.69,d,.82,.07,.7,"#ab8d63"),Rn(e,p,l,d,.08,.69,.08,"#545549")}const[u,f]=r(25.4,-.05);Ie(t,{text:"МОРЕ",position:[u,c+.2,f],size:[2.28,.41],outward:[.197,-.98],color:"#6e553a",lighting:"spot",glowColor:"#ffd089"});for(const h of[24.65,25.4,26.15])e.beam(Ne(r(h,-.018),c+.5),Ne(r(h,-.17),c+.44),.041,"#70664f");e.finish()}function lx(i,t,e,n,s){const o=new Me,r=new Pn({color:"#c9ba98",toneMapped:!1}),a=new An(.043,8,6),l=4,c=16;let u;for(let f=0;f<=c;f++){const h=f/c,[p,d]=mt(e,n,h),_=s-.18*Math.sin(Math.PI*(h*l%1)),m=[p+.13,_,d];if(u&&t.beam(u,m,.015,"#353535"),u=m,f===c)continue;const g=new ae(a,r);g.position.set(p+.13,_-.052,d),f%4===2&&(g.userData.nightLight={color:"#ffe4ad",intensity:3.5,range:3.4}),o.add(g)}o.userData.setEvening=f=>r.color.set(f?"#fff0be":"#c9ba98"),i.add(o)}function hx(i,t){const e=new Me;e.name="Гриль-бар «Бикью»",i.add(e);const n=me(e,"Остеклённый фасад на Греческом переулке",{surfaces:{flatRoof:["#353635"],stone:["#77726a"],wood:["#403731"]}}),s=[[-456.42,4.1],[-456.94,24.1]],o=[[-458.12,4.1],[-458.64,24.1]],r=[o[0],s[0],s[1],o[1]],a=t(-457,14.1)+.11,l=Math.min(...s.map(p=>t(...p)))-.2,c=a+2.82;n.shell(r,l,a+.12,"#77726a"),n.shell(r,c,c+.21,"#353635"),n.wall(...o,a+.1,c,"#403731");const u=Bn(new Pn({color:"#394c50",transparent:!0,opacity:.53,depthWrite:!1,side:Je}),{surface:"glass",strength:.7});for(const[p,d,_]of[[...s,14],[o[0],s[0],1],[s[1],o[1],1]])for(let m=0;m<_;m++){const g=mt(p,d,m/_),x=mt(p,d,(m+1)/_),M=mt(g,x,.5),v=x[0]-g[0],S=x[1]-g[1],b=new ae(new di(Math.hypot(v,S),c-a-.12),u);if(b.position.set(M[0],(c+a+.12)/2,M[1]),b.rotation.y=-Math.atan2(S,v),e.add(b),n.beam(Ne(g,a+.08),Ne(g,c),.074,"#292c2b"),n.beam(Ne(g,a+.85),Ne(x,a+.85),.041,"#393b39"),_===14&&m!==6&&m!==7){for(const w of[.12,.45]){const y=Math.max(0,t(M[0]+.15,M[1])-a),E=(T,C)=>{const[D,P]=mt(g,x,T+w);return[D+.025,a+C+y,P]};n.face("#c89045",E(0,.36),E(.14,.36),E(.31,.6),E(.17,.6)),n.face("#c89045",E(.17,.6),E(.31,.6),E(.14,.84),E(0,.84))}Rn(n,M[0]-.75,a+.71,M[1],.55,.09,.62,"#856747"),Rn(n,M[0]-.75,a+.1,M[1],.07,.61,.07,"#343330")}}lx(e,n,...s,c-.06);const f=new Pn({color:"#757078",toneMapped:!1}),h=new ae(new Be(.047,.047,3),f);h.position.set(-457.8,c-.27,7.7),h.userData.setEvening=p=>f.color.set(p?"#ac91ff":"#757078"),h.userData.nightLight={color:"#9b78ff",intensity:2.5,range:3.3},e.add(h),Ie(e,{text:`BAR
BQ`,position:[-456.54,a+1.36,13.98],size:[1.34,1.17],outward:[1,.026],color:"#cac2a7",weight:550,lighting:"unlit"}),n.finish()}function ux(i,t,e){const n=new Pn({color:"#d2d0c2",toneMapped:!1}),s=new Me;for(const o of[1,2]){const r=Array.from({length:41},(c,u)=>{const f=ue.lerp(e[0],e.at(-1),u/40),[h,p,d]=t(f,o,-.18);return new O(h,p,d+(o===1?-.05:.05))}),a=new Vc(r),l=new ae(new Eo(a,85,.026,5,!1),n);s.add(l)}s.userData.setEvening=o=>n.color.set(o?"#fff2d7":"#d2d0c2"),i.add(s)}function fx(i,t){const e=new Me;e.name="Лаундж-зона Qúeue",i.add(e);const n=me(e,"Волнообразный навес и кофейня"),s=(d,_)=>t(d,_)+.19,o=d=>{const _=(d+395.7)/5.6;return s(d,ma(d,2))+3.65+1.08*Math.exp(-(_**2))},r=(d,_,m=0)=>[d,o(d)+m,ma(d,_)],a=[-416.6,-409.3,-403.8,-388.6,-383.6,-378.4];for(const d of[1,2])for(let _=1;_<a.length;_++){const m=a[_-1],g=a[_],x=Math.ceil((g-m)/.37);let M,v;for(let S=0;S<=x;S++){const b=S/x,w=m+(g-m)*b,y=ma(w,d),E=s(w,y),T=Math.sqrt(Math.max(0,1-(2*b-1)**2)),C=[w,E+.09+(o(w)-E-.36)*T,y],D=r(w,d);M&&(n.beam(M,C,.18,Xe),n.beam(v,D,.2,Td),n.beam([v[0],v[1]-.23,v[2]],r(w,d,-.23),.075,Xe)),(S>0||_===1)&&n.beam(C,D,S===0||S===x?.18:.065,Xe),M=C,v=D}}for(let d=0;d<=94;d++){const _=a[0]+(a.at(-1)-a[0])*d/94;n.beam(r(_,1,-.11),r(_,2,-.11),.1,Xe)}ux(e,r,a),rx(e,s);const l=-412.2,c=o(l)-.1,u=(as[1][2]-as[0][2])/(as[1][0]-as[0][0]),f=[-u,1],h=ma(l,2)+.15,p=[[-1.65,-.04],[1.65,-.04],[1.65,.04],[-1.65,.04]].map(([d,_])=>[l+d,h+d*u+_]);n.shell(p,c-.21,c+.21,Xe),Ie(e,{text:"Qúeue",position:[l,c,h+.05],size:[3.2,.39],outward:f,color:Pa,lighting:"spot"}),n.finish()}function Tu(i,t,e,n){const s=t(e,n)+.16,o=Ai(e,n,3.45,2.35);i.shell(o,s-.24,s+.08,lo);for(let a=-10;a<=10;a++){const l=a*.22,c=3.4*Math.sqrt(1-(l/2.35)**2);i.beam([e-c,s+.084,n+l],[e+c,s+.084,n+l],.018,vc[(a+12)%vc.length])}for(const a of[-1,1]){const l=[e+a*2.5,n];i.shell(Ai(...l,.095,.095,10),t(...l)-.12,s+3.05,Xe)}const r=Ai(e,n,3.55,2.45,32);for(let a=0;a<r.length;a++)i.beam(Ne(r[a],s+2.88),Ne(r[(a+1)%r.length],s+2.88),.13,Xe);for(let a=-8;a<=8;a++){const l=a*.4,c=2.41*Math.sqrt(1-(l/3.55)**2);i.beam([e+l,s+2.89,n-c],[e+l,s+2.89,n+c],.09,Xe)}for(const a of[-.23,-.09,.09,.23]){const l=Array.from({length:32},(c,u)=>{const f=u*Math.PI/16;return[e+.97*Math.cos(f),s+1.38+.99*Math.sin(f),n+a]});for(let c=0;c<l.length;c++)i.beam(l[c],l[(c+1)%l.length],.035,Xe)}Rn(i,e,s+.55,n,1.08,.055,.48,lo);for(const a of[-.57,.57])i.beam([e+a,s+2.21,n],[e+a,s+2.89,n],.018,_n)}function dx(i,t){const s=t(-397.8,-29.25)+.18;for(const r of[-2.28,2.28])i.shell(Ai(-397.8+r,-29.25,.085,.085,12),s-.14,s+3.38,Xe);const o=[[-397.8-3.18,s+2.77,-29.25+.45],[-397.8-3.27,s+3,-29.25-1.37],[-397.8,s+2.67,-29.25-.72],[-397.8+3.29,s+3.02,-29.25-1.3],[-397.8+3.14,s+2.8,-29.25+.49]];for(let r=0;r<o.length;r++)i.beam(o[r],o[(r+1)%o.length],.085,Xe);for(let r=0;r<20;r++){const a=(r+1)/21,l=a<.5?mt(o[1],o[2],a*2):mt(o[2],o[3],(a-.5)*2);i.beam(l,mt(o[0],o[4],a),.064,Xe)}}function px(i,t){const e=new Me;e.name="Качели, теневые крылья и белые галечные сиденья",i.add(e);const n=me(e,"Настилы и мебель",{surfaces:{wood:[lo,...vc]}});Tu(n,t,-410.7,-30.1),Tu(n,t,-382.8,-25.55),dx(n,t);const s=new An(1,24,12),o=new te({color:ox});for(const[f,h,p,d,_,m]of[[-401.9,-30.05,1.12,.69,.41,.18],[-402.7,-27.65,.88,.65,.4,-.29],[-399.6,-26.05,1.26,.72,.43,-.14],[-396.7,-28.5,.73,.62,.41,.26],[-395.1,-26.05,.98,.68,.43,-.31]]){const g=new ae(s,o);g.scale.set(p,_,d),g.rotation.y=m,g.position.set(f,t(f,h)+_+.15,h),g.castShadow=!0,g.receiveShadow=!0,e.add(g)}for(const[f,h]of[[-406.2,-20.1],[-403,-18.2],[-390.1,-17.3]]){const p=t(f,h)+.15;n.shell(Ai(f,h,.38,.38,16),p+.72,p+.77,_n),n.beam([f,p,h],[f,p+.72,h],.045,_n);for(const d of[-.74,.74]){Rn(n,f+d,p+.43,h,.42,.055,.42,_n);for(const _ of[-.16,.16])for(const m of[-.15,.15])n.beam([f+d+_,p,h+m],[f+d+_,p+.43,h+m],.029,_n);n.wall([f+d*1.25,h-.19],[f+d*1.25,h+.19],p+.46,p+.81,_n)}}const r=-387.7,a=-20.4,l=t(r,a)+.16,c=Rd(r-.92,r+.92,a-.72,a+.72);n.shell(c,l-.12,l+.42,lo);for(const f of c)n.beam(Ne(f,l),Ne(f,l+1.75),.09,lo);const u=[[r-1,l+2.35,a],[r+1,l+2.35,a]];for(const f of[-1,1])n.face("#99704d",...u,[r+1.03,l+1.72,a+f*.82],[r-1.03,l+1.72,a+f*.82]);n.finish()}function mx(i,t){const e=me(i,"Памятный знак Матери Марии"),n=-652.7,s=-66.6,o=t(n,s)+.1,r=[[-1.02,-.42],[-.73,-.78],[.59,-.78],[1.05,-.39],[1.15,.24],[.91,.59],[-.78,.61],[-1.1,.18]],l=[[-.63,.68,-.21],[-.42,1.14,-.51],[.04,1.53,-.56],[.53,1.25,-.39],[.84,.85,-.01],[.88,.47,.37],[-.76,.48,.43],[-.94,.59,.16]].map(([u,f,h])=>[n+u,o+f,s+h]),c=r.map(([u,f])=>[n+u,o-.13,s+f]);for(let u=0;u<r.length;u++){const f=(u+1)%r.length;e.face(u%2?"#706f67":"#666860",c[u],c[f],l[f],l[u]),e.face(u%3?"#8e928b":"#a4a79f",l[u],l[f],[n+.03,o+.95,s-.01])}e.beam([n+.02,o+.05,s+1],[n+.08,o+1.58,s-.57],.14,"#807f71"),e.beam([n-.82,o+1,s+.055],[n+.9,o+1,s+.055],.14,"#807f71");for(let u=0;u<3;u++)for(const[f,h]of[-1.2,-.6,.035,.635].entries()){const p=n+h+.286,d=s+1.33+u*.58,_=t(p,d)+.035;Rn(e,p,_-.08,d,.57,.09,.56,f===0||f===3?"#a78277":"#929897")}e.finish()}function gx(i,t){const e=me(i,"Памятник морскому десанту"),n=-631.7,s=-37.2,o=t(n,s)+.09,r=(l,c,u)=>[n+l,o+c,s+u];Rn(e,n,o-.12,s+.45,2.85,.23,2.35,"#bbb6aa"),Rn(e,n,o+.11,s+.3,2.19,.26,1.57,"#424545"),Rn(e,n,o+.37,s-.25,1.06,2.08,.22,"#333837");const a=Array.from({length:10},(l,c)=>{const u=Math.PI/2+c*Math.PI/5,f=c%2?.064:.151;return r(-.28+f*Math.cos(u),2.12+f*Math.sin(u),-.135)});for(let l=0;l<a.length;l++)e.face("#b6a06b",r(-.28,2.12,-.135),a[l],a[(l+1)%a.length]);e.beam(r(-.34,.52,.73),r(.73,1.39,.54),.13,_n),e.beam(r(-.44,.58,.48),r(-.2,.53,.95),.18,_n);for(const[l,c]of[[[-.66,.79,.72],[-.62,1.33,.65]],[[-.21,.84,.7],[.01,1.35,.58]]])e.beam(r(-.37,.57,.74),r(...l),.11,_n),e.beam(r(...l),r(...c),.1,_n),e.face(_n,r(...c),r(c[0]-.1,c[1]-.26,c[2]+.07),r(c[0]+.08,c[1]-.23,c[2]-.05));for(const l of[-1,0,1]){const c=l*.82,u=l*1.21,f=[r(c-.32,.28,1.72),r(c+.32,.28,1.72),r(u+.37,.19,3.17),r(u-.37,.19,3.17)],h=f.map(([p,,d])=>[p,t(p,d)-.08,d]);e.face("#b7b5ac",...f);for(let p=0;p<f.length;p++){const d=(p+1)%f.length;e.face("#a7a8a1",f[p],f[d],h[d],h[p])}e.face("#444746",r(c-.25,.294,1.8),r(c+.25,.294,1.8),r(u+.28,.216,3.05),r(u-.28,.216,3.05))}e.finish()}function _x(i,t){fx(i,t),px(i,t),cx(i),hx(i,t),mx(i,t),gx(i,t)}const ws=Math.PI*2;function fr(i,t,e,n=36){return Array.from({length:n},(s,o)=>{const r=o/n*ws;return[i+e*Math.cos(r),t+e*Math.sin(r)]})}function xx(){const e=new Uint8Array(18432);for(let s=0;s<48;s++){const o=(s+.5)/48;for(let r=0;r<96;r++){const a=r/96*ws,l=Math.max(0,Math.sin(a*3)*.06+Math.sin(a*7+.4)*.035),c=o>.51+l?[173+o*46,196+o*36,211+o*38]:o>.42?[71,78,66]:[122+o*71,113+o*77,99+o*86],u=(s*96+r)*4;e.set([...c,255],u)}}const n=new Bc(e,96,48);return n.colorSpace=rn,n.mapping=er,n.needsUpdate=!0,new hr({color:"#ced3d4",envMap:n,reflectivity:.88,specular:"#f2f5f5",shininess:78})}function vx(i,t){const s=me(i,"Фонтан «Жемчужина Анапы»"),o=(p,d,_=0)=>[p,t(p,d)+.17+_,d],r=fr(-238,2,3.5),a=fr(-238,2,3.71);r.forEach(([p,d],_)=>{const m=(_+1)%r.length;s.face("#555857",o(-238,2),o(p,d),o(...r[m])),s.face("#997359",o(p,d),o(...a[_]),o(...a[m]),o(...r[m]))});for(let p=0;p<28;p++){const d=p*ws/28,_=fr(-238+2.85*Math.cos(d),2+2.85*Math.sin(d),.036,8);s.face("#a7a8a1",..._.map(m=>o(...m,.008)))}const l=.13;for(let p=0;p<6;p++){const d=l+p*ws/6;for(let _=0;_<5;_++){const m=d-.34+_*.135,g=m+.133,x=(w,y,E)=>o(-238+Math.cos(w)*y,2+Math.sin(w)*y,E),M=x(m,4.43,.44),v=x(g,4.43,.44),S=x(m,4.93,.36),b=x(g,4.93,.36);s.face("#9e9a90",M,v,x(g,4.41,-.045),x(m,4.41,-.045)),s.face("#8e8b84",x(m,5.06,.02),x(g,5.06,.02),x(g,5.06,.1),x(m,5.06,.1)),s.face("#bf8770",M,v,b,S),s.face("#b67e64",S,b,x(g,5.06,.1),x(m,5.06,.1)),_===0&&s.face("#a39d92",M,S,x(m,5.06,.02),x(m,4.41,-.045)),_===4&&s.face("#a39d92",v,b,x(g,5.06,.02),x(g,4.41,-.045))}}const c=new Me;c.name="Шесть зеркальных сфер",i.add(c);const u=new An(1,28,20),f=xx(),h=[[0,0,.57,3.35],[-1.65,1.12,.56,.86],[1.77,-.98,.48,1.12],[-2.31,-1.72,.51,0],[2.44,1.69,.47,0],[.47,-2.67,.43,0]];for(const[p,d,_,m]of h){const[g,x,M]=o(-238+p,2+d),v=new ae(u,f);if(v.scale.setScalar(_),v.position.set(g,x+_+m,M),v.castShadow=!0,c.add(v),!!m)for(let S=0;S<11;S++){const b=S/11*ws,w=b+.88;s.beam([g+Math.cos(b)*.13,x,M+Math.sin(b)*.13],[g+Math.cos(w)*_*.63,x+m+.13,M+Math.sin(w)*_*.63],.026,"#a5a7a4")}}s.finish()}function Mx(i,t){const o=Math.cos(-.51),r=Math.sin(-.51),a=me(i,"Арка Центрального пляжа"),l="#eeeae0",c="#dbd9ce",u=3.11,f=[1.21,1.28,1.34,1.28,1.21],h=[-6.36,-3.69,-1.25,1.25,3.69,6.36],p=(g,x)=>[197.02+g*o-x*r,-463.27+g*r+x*o],d=Math.max(...h.map(g=>t(...p(g,0))))+.16,_=(g,x,M)=>{const[v,S]=p(g,x);return[v,d+M,S]},m=(g,x,M,v)=>[p(g-M,x-v),p(g+M,x-v),p(g+M,x+v),p(g-M,x+v)];for(const[g,x]of h.entries())if(g===0||g===1||g===4||g===5){a.shell(m(x,0,.47,1.18),d-.4,d+u,l),a.shell(m(x,0,.57,1.27),d+u-.045,d+u+.1,l);for(const v of[-1.03,1.03])a.shell(m(x,v,.37,.17),d+u,d+u+.95,l);a.shell(m(x,0,.42,1.23),d+u+.95,d+u+1.09,l)}else for(const v of[-.92,.92])a.shell(m(x,v,.2,.21),d-.4,d+u,l),a.shell(m(x,v,.27,.28),d+u-.06,d+u+.085,l);for(const g of[-.92,.92])for(let x=0;x<f.length;x++){const M=(h[x]+h[x+1])/2,v=(h[x+1]-h[x])/2,S=(b,w,y)=>_(M+(v+w)*Math.cos(b),g+y*.17,u+(f[x]+w)*Math.sin(b));for(let b=0;b<14;b++){const w=Math.PI*b/14,y=Math.PI*(b+1)/14;for(const E of[-1,1])a.face(l,S(w,-.19,E),S(y,-.19,E),S(y,.11,E),S(w,.11,E));a.face(c,S(w,-.19,-1),S(y,-.19,-1),S(y,-.19,1),S(w,-.19,1)),a.face(l,S(w,.11,-1),S(y,.11,-1),S(y,.11,1),S(w,.11,1))}}a.finish()}function Sx(i,t){const s=t(64.17,13.11)+.16,o=me(i,"Скульптура «Белая шляпа»"),r=["#8b8777","#a39e8d","#a9a38f","#8d897b","#969383"],a=[[1.28,.77,-.12,.1],[1.39,.74,.35,.19],[1.12,.65,.75,.17],[.79,.57,1.12,.08],[.48,.38,1.56,-.17]].map(([d,_,m,g],x)=>Array.from({length:13},(M,v)=>{const S=v/13*ws,b=1+.13*Math.sin(v*3.3+x*.81);return[64.17+g+Math.cos(S)*d*b,s+m+.12*Math.cos(v*2.4+x),13.11+Math.sin(S)*_*b]}));for(let d=0;d<a.length-1;d++){const _=a[d],m=a[d+1];_.forEach((g,x)=>{const M=(x+1)%_.length;o.face(r[(x+d*3)%r.length],g,_[M],m[M]),o.face(r[(x+d*3+1)%r.length],g,m[M],m[x])})}o.face("#a29e8f",...a.at(-1));const l=(d,_,m)=>Array.from({length:32},(g,x)=>{const M=x/32*ws,v=Math.cos(M)*d,S=Math.sin(M)*d*.83,b=m?.038*Math.cos(2*M):.044*Math.cos(2*M);return[64.17-.13+v,s+1.56+_+S*.37+b,13.11+S]}),u=[[.75,0,!1],[.75,.035,!1],[.4,.12,!1],[.405,.155,!0],[.39,.22,!0],[.34,.43,!0],[.24,.49,!0],[.08,.46,!0]].map(d=>l(...d));for(let d=0;d<u.length-1;d++){const _=u[d+1],m=u[d];m.forEach((g,x)=>{const M=(x+1)%m.length;o.face(d===3?"#d8d7ce":"#f5f3e9",g,m[M],_[M],_[x])})}o.face("#f5f3e9",...u.at(-1));const f={Б:[[[.88,1],[0,1],[0,0],[.76,0],[.9,.22],[.72,.53],[0,.53]]],Е:[[[.88,1],[0,1],[0,0],[.9,0]],[[0,.5],[.75,.5]]],Л:[[[0,0],[.31,1],[.84,1],[.84,0]]],А:[[[0,0],[.45,1],[.9,0]],[[.2,.42],[.7,.42]]],Я:[[[.9,0],[.9,1],[.25,1],[0,.76],[.23,.54],[.9,.54]],[[.52,.54],[0,0]]],Ш:[[[0,1],[0,0],[.95,0],[.95,1]],[[.475,0],[.475,1]]],П:[[[0,0],[0,1],[.86,1],[.86,0]]]};[..."БЕЛАЯ ШЛЯПА"].forEach((d,_)=>{for(const m of f[d]??[]){const g=m.map(([x,M])=>{const v=(_+x-5.5)*.155;return[64.17+Math.sin(v)*1.17,s+.41+M*.175,13.11+Math.cos(v)*.88]});g.slice(1).forEach((x,M)=>o.beam(g[M],x,.032,"#f5f3e9"))}});const h=fr(64.17,13.11,2.45),p=(d,_)=>[d,t(d,_)+.17,_];h.forEach((d,_)=>o.face("#b4ac9c",p(64.17,13.11),p(...d),p(...h[(_+1)%h.length])));for(let d=0;d<46;d++){const _=d*2.39996,m=1.12+d%13/13*1.19,g=64.17+Math.cos(_)*m,x=13.11+Math.sin(_)*m,M=t(g,x)+.17;o.shell(fr(g,x,.09+d%4*.035,6),M-.01,M+.03+d%3*.025,r[d%r.length])}o.finish()}function yx(i,t){vx(i,t),Sx(i,t),Mx(i,t)}function bx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Le;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.morphAttributes[p])}if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(e){let u=0;const f=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let d=0;d<p.count;++d)f.push(p.getX(d)+u);u+=i[h].attributes.position.count}l.setIndex(f)}for(const u in o){const f=Au(o[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in r){const f=r[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let _=0;_<r[u].length;++_)p.push(r[u][_][h]);const d=Au(p);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(d)}}}return l}function Au(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}const r=new t(o),a=new Yn(r,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/e;for(let h=0,p=u.count;h<p;h++)for(let d=0;d<e;d++){const _=u.getComponent(h,d);a.setComponent(h+f,d,_)}}else r.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Mc=Math.PI/4,wx="#e1d9bf",Ex="#26313a",Tx=[[37.2996896,44.8872772],[37.2995282,44.8874039],[37.2994588,44.8874602],[37.2994093,44.887514],[37.2990185,44.8878942],[37.2988335,44.8880063],[37.2982407,44.8885479]],Ax=[[37.2992911,44.8877628],[37.2988951,44.8881412]];function js(i,t){const e=(i-.5)*Mc;return[Math.sin(e)*t,Math.cos(e)*t]}function Ru(i){const t=i*Mc;return-.85*Math.sin(t)+.5*Math.cos(t)>0}function Rx(i,{rings:t},e){const n=t[0],s=n.reduce((v,S)=>v+S[0],0)/n.length,o=n.reduce((v,S)=>v+S[1],0)/n.length,r=e(s,o),a=Math.min(...n.map(v=>e(...v)))-r-.3,c=n.reduce((v,[S,b])=>v+Math.hypot(S-s,b-o),0)/n.length*.74,u=new te({color:wx,flatShading:!0}),f=new te({color:Ex,flatShading:!0}),h=new te({color:"#b6b8ae"}),p=new te({color:"#a9c2c8",transparent:!0,opacity:.56,depthWrite:!1}),d=new Me,_=new Map([[u,[]],[f,[]]]);d.name="Анапский маяк",d.position.set(s,r,o),i.add(d);function m(v,S,b,w,y,E=8){const T=new ae(new vn(w,b,S-v,E),y);return T.position.y=(S+v)/2,T.rotation.y=-Math.PI/E,T.castShadow=y!==p,d.add(T),T}function g(v,S,b,w,y,E,T,C){const D=v*Mc,P=Math.sin(D),R=Math.cos(D),I=c*Math.cos(Mc/2)+T,N=new Be(y,b,E);N.rotateY(D),N.translate(P*I+R*w,S,R*I-P*w),_.get(C).push(N)}m(a,3.15,c*1.13,c*1.13,u),m(3.15,3.55,c*1.16,c*1.16,u);const x=[[3.55,6.5,!0],[6.5,9.2,!1],[9.2,12,!0],[12,14.6,!1],[14.6,17.05,!0]];for(const[v,S,b]of x){const w=new Le,y=[[],[]];for(let T=0;T<8;T++){const[C,D]=js(T,c),[P,R]=js(T+1,c);if(y[Number(b&&Ru(T))].push(C,v,D,P,v,R,P,S,R,C,v,D,P,S,R,C,S,D),v<14.6){const I=b&&Ru(T)?f:u;for(const N of[-c*.2,c*.2])g(T,(v+S)/2,S-v,N,c*.095,.16,.03,I)}}w.setAttribute("position",new se(y.flat(),3)),w.addGroup(0,y[0].length/3,0),y[1].length&&w.addGroup(y[0].length/3,y[1].length/3,1),w.computeVertexNormals();const E=new ae(w,[u,f]);E.castShadow=!0,d.add(E)}m(12.2,12.39,c*1.05,c*1.05,u),m(13.4,13.54,c*1.04,c*1.04,u),m(17.05,17.65,c*1.07,c*1.07,u),m(17.65,17.9,c*1.12,c*1.12,u);for(let v=0;v<8;v++)for(const S of[-c*.22,0,c*.22])g(v,17.34,.24,S,.26,.07,c*.067,f);for(const[v,S]of _){d.add(new ae(bx(S),v));for(const b of S)b.dispose()}m(17.9,18.11,c*.71,c*.71,u,12),m(18.11,20.05,c*.58,c*.58,p,12),m(20.05,20.83,c*.68,.24,u,12),m(20.83,21,.24,.12,u,12),m(18.48,19.43,.31,.31,new te({color:"#a0433d"}),12);const M=[];for(let v=0;v<12;v++){const S=(v-.5)*Math.PI/6,b=Math.sin(S)*c*.58,w=Math.cos(S)*c*.58;M.push([[b,18.11,w],[b,20.05,w],.052])}for(let v=0;v<8;v++){const[S,b]=js(v,c*1.01),[w,y]=js(v+1,c*1.01);M.push([[S,17.9,b],[S,18.8,b],.042]);for(const P of[18.35,18.8])M.push([[S,P,b],[w,P,y],.037]);const[E,T]=js(v,c*.88),[C,D]=js(v+1,c*.88);M.push([[E,19.55,T],[C,19.55,D],.033]),M.push([[E,20.46,T],[C,20.46,D],.033]),M.push([[E,19.55,T],[E,20.46,T],.033])}Cd(d,M,h,"Ограждения фонаря")}function Cd(i,t,e,n){const s=new Be(1,1,1),o=new zn(s,e,t.length);o.name=n;const r=new be,a=new O,l=new O,c=new O,u=new O(1,0,0);for(const[f,[h,p,d]]of t.entries())a.set(...h),l.set(...p),c.subVectors(l,a),r.position.copy(a).lerp(l,.5),r.scale.set(c.length(),d,d),r.quaternion.setFromUnitVectors(u,c.normalize()),r.updateMatrix(),o.setMatrixAt(f,r.matrix);i.add(o)}function Cu(i,t,e,{height:n,color:s,spacing:o,width:r,name:a}){const l=[];for(let c=1;c<t.length;c++){const[u,f]=t[c-1],[h,p]=t[c],d=Math.ceil(Math.hypot(h-u,p-f)/2.4),_=(m,g)=>{const x=u+(h-u)*m,M=f+(p-f)*m;return[x,e(x,M)+g,M]};for(let m=0;m<d;m++){const g=m/d,x=(m+1)/d;l.push([_(g,.05),_(g,n+.05),r*2.8]);for(const v of[.14,n])l.push([_(g,v),_(x,v),r*1.7]);const M=Math.ceil(Math.hypot(h-u,p-f)/(d*o));for(let v=1;v<M;v++){const S=(m+v/M)/d;l.push([_(S,.14),_(S,n),r])}}c===t.length-1&&l.push([_(1,.05),_(1,n+.05),r*2.8])}Cd(i,l,new te({color:s}),a)}function Cx(i,{origin:[t,e],scale:n},s){const o=r=>r.map(([a,l])=>[(a-t)*n[0],(e-l)*n[1]]);Cu(i,o(Tx),s,{height:1.06,color:"#9a9c95",spacing:.16,width:.038,name:"Ограда Верхней Набережной"}),Cu(i,o(Ax),s,{height:1.76,color:"#363f40",spacing:.16,width:.027,name:"Ограда маяка"})}const Px="125862202",Lx="977564342",kl=12,ga=3;function _a(i,t,e,n){const s=[];for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=e*(n(r)-t),c=e*(n(a)-t);if(l>=0&&s.push(r),l<0!=c<0){const u=l/(l-c);s.push([ue.lerp(r[0],a[0],u),ue.lerp(r[1],a[1],u)])}}return s}function Cn(i,t,e,n,s){const o=new Xc(t.map(([a,l])=>new xt(a,-l))),r=new ae(new Ir(o,{depth:n,bevelEnabled:!1}),s);r.rotation.x=-Math.PI/2,r.position.y=e,r.castShadow=!0,r.receiveShadow=!0,i.add(r)}function Dx(i,t,e){const n=[],s=Math.sign(i.reduce((o,[r,a],l)=>{const[c,u]=i[(l+1)%i.length];return o+r*u-c*a},0));for(let o=0;o<i.length;o++){const r=i[o],a=i[(o+1)%i.length],l=a[0]-r[0],c=a[1]-r[1],u=Math.hypot(l,c);if(u<4||Math.abs(e(r)-e(a))<u*.8)continue;const f=Math.floor(u/3.3);for(let h=0;h<f;h++){const p=(h+.5)/f;n.push([r[0]+l*p+s*c/u*.045,t,r[1]+c*p-s*l/u*.045,-Math.atan2(c,l)])}}return n}function Es(i,t,e,n,s){const o=new zn(new Be(n,s,.12),e,t.length),r=new be;t.forEach(([a,l,c,u],f)=>{r.position.set(a,l,c),r.rotation.y=u,r.updateMatrix(),o.setMatrixAt(f,r.matrix)}),o.receiveShadow=!0,i.add(o)}function Ix(i,t){const e=new Me;e.name="Малая бухта, комплекс на берегу";const n=new te({color:"#c5b08c"}),s=new te({color:"#eeeae0"}),o=new te({color:"#b7b5a9"}),r=new te({color:"#617964"}),a=new te({color:"#5f8596"}),l=new te({color:"#5799b9"}),c=4.4;Cn(e,t,1.8,c-1.8,n),Cn(e,t,c,3.05,n),Cn(e,t,c+3.05,3.15,s),Cn(e,t,c+6.2,3.4,s),Cn(e,t,c+9.6,.35,o);const u=t.map((S,b)=>{const w=t[(b+1)%t.length];return{start:S,end:w,length:Math.hypot(w[0]-S[0],w[1]-S[1])}}).reduce((S,b)=>b.length>S.length?b:S),{start:f,end:h,length:p}=u,d=h[0]-f[0],_=h[1]-f[1],m=-Math.atan2(_,d),g=Math.sign(_),x=-Math.abs(_)/p*.04,M=d*g/p*.04;function v(S,b){return Array.from({length:S},(w,y)=>{const E=(y+.5)/S;return[f[0]+d*E+x,b,f[1]+_*E+M,m]})}Es(e,v(18,c+1.5),r,4.35,2.35),Es(e,v(38,c+4.75),a,1.75,1.35),Es(e,v(30,c+7.9),l,2.55,2.45),i.add(e)}function Ux(i,t,e){if(t.id===Lx)return Ix(i,t.rings[0]),!0;if(t.id!==Px)return!1;const n=t.rings[0],s=ue.degToRad(112.9),o=Math.sin(s),r=-Math.cos(s),a=([w,y])=>w*o+y*r,l=n.map(a),c=Math.min(...l),u=w=>a(w)-c,f=Math.max(...l)-c,h=f*.54,p=n.map(w=>e(...w)),d=Math.max(...p),_=Math.min(...p)-.3,m=new Me;m.name="Малая бухта, корпус «Парусник»";const g=new te({color:"#f5f3e8"}),x=new te({color:"#deded5"}),M=new te({color:"#526f7d"}),v=new te({color:"#9c9e99"});Cn(m,n,_,d-_,x);const S=[];for(let w=0;w<kl;w++){const y=w*2.45,E=w<9?f-w*3.3:h,T=_a(_a(n,y,1,u),E,-1,u),C=d+w*ga,D=T.reduce(([R,I],N)=>[R+N[0]/T.length,I+N[1]/T.length],[0,0]),P=T.map(([R,I])=>[ue.lerp(R,D[0],.04),ue.lerp(I,D[1],.04)]);Cn(m,T,C,.35,g),Cn(m,P,C+.35,ga-.35,x),S.push(...Dx(P,C+1.8,u)),(w===8||w===kl-1)&&Cn(m,P,C+ga,.18,v)}const b=_a(_a(n,h-3.8,1,u),h+.15,-1,u);return Cn(m,b,d,kl*ga+1.9,g),Es(m,S,M,1.65,1.15),i.add(m),!0}function Nx(i,t,e){if(t.id!=="142489068")return!1;const n=t.rings[0],s=n.map((ct,B)=>{const Z=n[(B+1)%n.length];return{start:ct,end:Z,length:Math.hypot(Z[0]-ct[0],Z[1]-ct[1])}}),[o]=s.sort((ct,B)=>B.length-ct.length).slice(0,2).sort((ct,B)=>ct.start[1]+ct.end[1]-(B.start[1]+B.end[1])),[r,a]=[o.start,o.end].sort((ct,B)=>ct[0]-B[0]),l=n.filter(ct=>ct!==r&&ct!==a).sort((ct,B)=>ct[0]-B[0])[0],[c,u]=r,f=Math.hypot(a[0]-c,a[1]-u),h=Math.hypot(l[0]-c,l[1]-u),p=(a[0]-c)/f,d=(a[1]-u)/f,_=(l[0]-c)/h,m=(l[1]-u)/h,g=(ct,B)=>[c+p*ct+_*B,u+d*ct+m*B],x=(ct,B,Z,ht)=>[g(ct,Z),g(B,Z),g(B,ht),g(ct,ht)],M=new Me;M.name="Анапский морской вокзал";const v=new te({color:"#e5e4dc"}),S=new te({color:"#b7a18c"}),b=new te({color:"#a4aaa4"}),w=new te({color:"#496877"}),y=new te({color:"#8f4b3a"}),E=n.map(ct=>e(...ct)),T=Math.max(...E),C=Math.min(...E)-.25;Cn(M,n,C,T+2.9-C,S),Cn(M,n,T+2.9,3.6,v),Cn(M,n,T+6.5,.35,b);const D=7.8,P=f-.85,R=P-D,I=h*.34,N=I+D,F=x(R,P,I,N),G=T+15.2;Cn(M,F,T+6.8,G-T-6.8,v),Cn(M,F,G,.22,b);const H=-Math.atan2(d,p),$=-Math.atan2(m,_),et=(ct,B,Z,ht)=>Array.from({length:ct},(yt,V)=>{const[at,vt]=ht((V+.5)/ct);return[at,B,vt,Z]});Es(M,et(11,T+4.75,H,ct=>g(1.3+ct*(f-2.6),-.04)),w,2.22,2.55),Es(M,et(8,T+1.48,H,ct=>g(1.5+ct*(f-3),-.04)),w,1.65,1.34);const St=[];for(const ct of[8.35,10.95,13.55]){const B=T+ct;St.push(...et(3,B,H,Z=>g(R+Z*D,I-.04))),St.push(...et(3,B,$,Z=>g(P+.04,I+Z*D)))}Es(M,St,w,1.37,1.43);const[bt,rt]=g(P-2.8,I+2.4),st=new ae(new vn(.055,.105,3.2,6),y);return st.position.set(bt,G+1.82,rt),M.add(st),i.add(M),!0}const Fx=[[65,151],[133,120],[143,98],[312,94],[327,41],[410,46],[451,73],[504,67],[540,44],[733,53],[724,326],[1170,410],[1591,455],[1591,738],[40,687]],Ox=[{points:[[94,145],[93,228],[89,353]],width:.65,height:.38},{points:[[142,122],[197,119],[277,117],[320,120],[331,188]],width:.65,height:.32},{points:[[197,119],[201,187],[137,192]],width:.73,height:.31},{points:[[273,119],[279,182],[206,187]],width:.7,height:.33},{points:[[287,122],[291,181],[328,178]],width:.66,height:.3},{points:[[334,91],[338,130],[345,187],[405,175],[403,130],[338,136]],width:.68,height:.35},{points:[[447,84],[486,87],[492,170],[445,173]],width:.69,height:.31},{points:[[500,85],[530,86],[534,161],[500,166]],width:.63,height:.27},{points:[[540,62],[535,107],[537,170]],width:.68,height:.38},{points:[[137,228],[204,222],[275,225],[351,227],[360,279],[300,282],[228,289],[140,279],[137,228]],width:.68,height:.27},{points:[[218,229],[214,277],[230,291],[224,354],[137,344]],width:.69,height:.31},{points:[[181,231],[178,277],[187,291],[181,315],[139,313]],width:.56,height:.25},{points:[[191,314],[187,348]],width:.57,height:.24},{points:[[307,229],[310,257],[278,261]],width:.57,height:.23},{points:[[319,231],[319,276],[352,273]],width:.64,height:.29},{points:[[360,285],[367,348],[366,387]],width:.65,height:.4},{points:[[363,278],[426,272],[427,218]],width:.73,height:.32},{points:[[413,209],[500,205],[570,200],[646,197]],width:.68,height:.31},{points:[[429,270],[504,270],[502,206]],width:.72,height:.29},{points:[[506,271],[510,270]],width:.72,height:.35},{points:[[528,268],[567,262],[627,258]],width:.72,height:.35},{points:[[645,256],[647,203]],width:.72,height:.35},{points:[[560,207],[567,261]],width:.61,height:.28},{points:[[678,178],[681,346],[634,347]],width:.62,height:.41},{points:[[468,349],[467,319],[474,305],[489,302],[602,300],[618,307],[623,330]],width:.66,height:.3},{points:[[382,355],[417,353],[414,398],[388,397]],width:.66,height:.37},{points:[[416,401],[526,426],[531,407],[539,369],[569,375]],width:.75,height:.37},{points:[[569,376],[568,425],[539,422]],width:.68,height:.36},{points:[[578,380],[578,423],[616,430],[620,380]],width:.68,height:.37},{points:[[630,379],[629,433],[682,441],[679,378]],width:.72,height:.36},{points:[[98,445],[190,455],[177,553],[91,539]],width:.81,height:.38},{points:[[209,457],[316,474],[305,552],[202,537],[209,457]],width:.85,height:.42},{points:[[245,474],[237,509],[226,539]],width:.75,height:.4},{points:[[386,490],[429,501],[515,513],[566,520],[622,532]],width:.73,height:.29},{points:[[430,503],[430,551],[389,544]],width:.74,height:.36},{points:[[516,515],[515,559],[431,549]],width:.78,height:.33},{points:[[564,524],[557,587],[515,579],[517,557]],width:.76,height:.38},{points:[[622,531],[615,590],[566,583]],width:.76,height:.39},{points:[[653,536],[708,549],[699,609]],width:.74,height:.34},{points:[[769,385],[806,387],[823,390],[866,388],[875,384]],width:.52,height:.48},{points:[[768,384],[768,425],[766,447]],width:.5,height:.52},{points:[[747,444],[769,449],[813,457],[870,467],[913,473],[953,478],[1006,483]],width:.62,height:.6},{points:[[818,395],[817,426],[814,456]],width:.52,height:.51},{points:[[874,379],[874,415]],width:.47,height:.42},{points:[[870,451],[870,466]],width:.46,height:.46},{points:[[918,390],[917,419]],width:.5,height:.49},{points:[[914,437],[912,473]],width:.55,height:.54},{points:[[959,393],[961,413],[957,428]],width:.49,height:.46},{points:[[955,442],[952,478]],width:.55,height:.54},{points:[[961,416],[994,421],[1016,426]],width:.39,height:.36},{points:[[1016,427],[1012,444],[1007,482]],width:.54,height:.56},{points:[[1070,501],[1079,447],[1085,435],[1104,438]],width:.61,height:.61},{points:[[1138,441],[1169,449]],width:.44,height:.41},{points:[[1170,435],[1169,471],[1168,505],[1111,502],[1071,500]],width:.65,height:.62},{points:[[1122,459],[1114,487],[1111,502]],width:.51,height:.48},{points:[[765,620],[770,577],[844,591],[840,619]],width:.53,height:.53},{points:[[900,645],[903,598],[948,608],[996,618],[1024,616]],width:.55,height:.49},{points:[[950,608],[945,653],[901,647]],width:.52,height:.54},{points:[[999,619],[990,664],[983,688]],width:.52,height:.55},{points:[[944,654],[939,690]],width:.49,height:.44},{points:[[1049,621],[1094,620],[1133,627]],width:.44,height:.38},{points:[[1132,628],[1127,665]],width:.44,height:.42},{points:[[1230,470],[1293,471],[1292,517],[1290,550],[1234,551],[1230,470]],width:.7,height:.87},{points:[[1233,519],[1292,518]],width:.66,height:.72},{points:[[1352,482],[1369,478],[1404,479],[1418,480],[1417,492],[1385,493],[1383,509]],width:.57,height:.48},{points:[[1338,691],[1339,668],[1397,669]],width:.59,height:.55},{points:[[1336,722],[1398,721],[1454,722],[1512,724],[1575,726],[1575,652],[1512,653],[1455,654],[1400,652],[1398,721]],width:.72,height:.69},{points:[[1455,654],[1454,722]],width:.67,height:.62},{points:[[1512,653],[1512,724]],width:.65,height:.6}],Bx=[{polygon:[[144,129],[193,124],[198,177],[142,181]],depth:.78},{polygon:[[205,126],[269,124],[274,169],[210,177]],depth:.74},{polygon:[[287,128],[317,127],[322,171],[290,176]],depth:.7},{polygon:[[346,136],[398,131],[402,169],[347,177]],depth:.83},{polygon:[[452,90],[483,89],[487,158],[450,166]],depth:.78},{polygon:[[502,97],[526,99],[527,153],[500,159]],depth:.64},{polygon:[[146,235],[214,231],[211,274],[143,269]],depth:.88},{polygon:[[279,234],[304,234],[308,253],[278,257]],depth:.57},{polygon:[[319,237],[345,234],[348,269],[320,269]],depth:.75},{polygon:[[145,287],[183,288],[180,311],[141,310]],depth:.62},{polygon:[[142,319],[181,319],[181,342],[137,340]],depth:.58},{polygon:[[190,292],[227,298],[222,350],[189,345]],depth:.77},{polygon:[[505,209],[558,205],[566,260],[526,265],[528,298],[514,298],[512,267]],depth:1.05},{polygon:[[566,205],[641,199],[644,252],[642,252],[642,283],[630,283],[629,254],[571,260]],depth:1.15},{polygon:[[389,358],[414,354],[411,396],[388,393]],depth:.64},{polygon:[[541,370],[567,377],[565,423],[535,420]],depth:.8},{polygon:[[580,378],[617,379],[613,425],[579,422]],depth:.82},{polygon:[[633,378],[676,379],[680,435],[630,426]],depth:1},{polygon:[[98,450],[183,462],[173,541],[92,533]],depth:.92},{polygon:[[213,463],[244,468],[227,535],[207,535]],depth:.9},{polygon:[[248,473],[311,478],[304,549],[236,539]],depth:.91},{polygon:[[388,494],[427,502],[427,541],[389,537]],depth:.74},{polygon:[[434,506],[514,516],[510,552],[433,545]],depth:.87},{polygon:[[521,518],[562,526],[556,576],[516,572]],depth:.94},{polygon:[[566,527],[619,535],[612,581],[561,575]],depth:.99},{polygon:[[656,541],[704,553],[693,603],[646,592]],depth:.83},{polygon:[[773,582],[839,595],[836,620],[771,612]],depth:.84},{polygon:[[906,602],[946,611],[943,645],[903,637]],depth:.64},{polygon:[[952,612],[994,621],[986,665],[951,654]],depth:.58},{polygon:[[1235,475],[1288,476],[1288,515],[1237,516]],depth:.72},{polygon:[[1238,524],[1287,523],[1286,546],[1239,547]],depth:.64},{polygon:[[1404,657],[1450,658],[1449,718],[1403,717]],depth:.54},{polygon:[[1459,658],[1507,657],[1507,719],[1459,717]],depth:.59},{polygon:[[1517,658],[1570,657],[1570,721],[1517,719]],depth:.55}],zx=[{point:[256,273],radius:.7,depth:.51},{point:[412,299],radius:.53,depth:.46},{point:[496,316],radius:.58,depth:.48},{point:[456,365],radius:.73,depth:.58},{point:[516,422],radius:.67,depth:.46},{point:[644,329],radius:.7,depth:.55},{point:[592,393],radius:.56,depth:.37},{point:[553,441],radius:.63,depth:.44},{point:[377,498],radius:.56,depth:.44},{point:[755,405],radius:.74,depth:.75},{point:[962,706],radius:.7,depth:.75},{point:[1260,494],radius:.5,depth:.65}],kx=[{name:"Широкая улица",polygon:[[96,365],[162,362],[217,365],[309,385],[362,398],[414,412],[418,485],[386,486],[308,470],[209,456],[94,443]]},{name:"Широкая улица",polygon:[[1194,609],[1258,608],[1344,612],[1438,614],[1516,615],[1574,612],[1573,647],[1510,651],[1437,652],[1350,651],[1258,648],[1200,647]]},{name:"Северная улица",polygon:[[119,193],[207,191],[287,188],[344,184],[433,176],[527,171],[671,174],[671,194],[524,201],[428,211],[347,219],[273,224],[197,227],[118,228]]},{name:"Поперечная улица",polygon:[[99,159],[125,164],[123,215],[124,280],[121,335],[128,366],[111,388],[93,367],[97,311],[96,250]]}],Gx=[{from:[521,298],to:[519,264],width:1.15,steps:7},{from:[636,283],to:[635,252],width:1,steps:7}],Oi={outline:Fx,walls:Ox,cellars:Bx,wells:zx,streets:kx,stairs:Gx},Pu="652417590";function Jn([i,t]){return[.0863102257*i-214318e-9*t-361.5408919,214318e-9*i+.0863102257*t+21.5871871]}const ys=Oi.outline.map(Jn);function no([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function Pd(i,t,e){const n=i(-310,65)-1.41-.006*(t+355)+.008*(e-60);return Math.min(n,i(t,e)-.43)}const is=["#b7a58b","#c1b199","#ad9e88","#a9977e","#c8baa0","#a4947b"],Lu=["#c9b998","#b9aa8e","#c2b497","#b2a389","#d0bfa4"],Hx=new $t("#a09472"),Vx=new $t("#97976b"),Wx=new $t("#94846b"),Xx=new $t("#62584a"),qx=new $t("#a99a7e");function si(i){const t=Math.sin(i*127.1+3.83)*43758.5453;return t-Math.floor(t)}function o0(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=(i[1]-t[1])*e/(2*n),o=(t[0]-i[0])*e/(2*n);return[[i[0]+s,i[1]+o],[t[0]+s,t[1]+o],[t[0]-s,t[1]-o],[i[0]-s,i[1]-o]]}const Nn=([i,t],e)=>[i,e(i,t),t];function Ld(i,t,e,n,s,o){i.face(o,Nn(t,n),Nn(e,n),Nn(e,s),Nn(t,s))}function Yo(i,t,e,n,s,o=.65){for(let r=0;r<t.length;r++){const a=t[r],l=t[(r+1)%t.length],c=Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1])/o);for(let u=0;u<c;u++){const f=mt(a,l,u/c),h=mt(a,l,(u+1)/c);Ld(i,f,h,e,n,s(u+r*97))}}}function Yx(i,t,e,n,s,o,r,a){const l=Math.hypot(e[0]-t[0],e[1]-t[1]);if(l<.12)return;const c=(p,d)=>o(p,d)-r-.03,u=(p,d)=>o(p,d)+s,f=o0(t,e,n*.93);Yo(i,f,c,u,()=>"#897862",1.2),i.face("#8c7b66",...f.map(p=>Nn(p,(d,_)=>u(d,_)-.028)));const h=Math.max(1,Math.round((s+r)/.31));for(let p=0;p<h;p++){const d=.66+si(a+p)*.24;for(let _=-(p%2)*d*.52,m=0;_<l;_+=d,m++){const g=(Math.max(0,_)+.018)/l,x=(Math.min(_+d,l)-.018)/l;if(x<=g)continue;const M=a*101+p*31+m*7,v=o0(mt(t,e,g),mt(t,e,x),n*(.965+si(M)*.09)),S=v.map(T=>mt(T,mt(v[0],v[2],.5),.06)),b=(s+r)/h,w=(T,C)=>o(T,C)-r+b*p+.012,y=(T,C)=>o(T,C)-r+b*(p+1)-.014+si(M+1)*.09,E=is[Math.floor(si(M+2)*is.length)];for(let T=0;T<4;T++){const C=(T+1)%4;i.face(E,Nn(v[T],w),Nn(v[C],w),Nn(S[C],y),Nn(S[T],y))}i.face(E,...S.map(T=>Nn(T,y)))}}}function Zx(i,t,e,n,s){const o=t.map(([g])=>g),r=t.map(([,g])=>g),a=.61,l=.065,c=(g,x)=>[g*Math.cos(l)-x*Math.sin(l),g*Math.sin(l)+x*Math.cos(l)],[u,f]=t[0],h=(g,x)=>c(g,x).map((M,v)=>M+(v===0?u:f)),p=Math.floor((Math.min(...o)-u-3)/a),d=Math.ceil((Math.max(...o)-u+3)/a),_=Math.floor((Math.min(...r)-f-10)/a),m=Math.ceil((Math.max(...r)-f+10)/a);for(let g=_;g<m;g++)for(let x=p;x<d;x++){const M=n*4241+g*397+x;if(si(M+9)>s)continue;const v=(x+g%2*.5)*a,S=g*a,b=[h(v+.03+si(M)*.07,S+.033),h(v+.57,S+.027+si(M+2)*.07),h(v+.572-si(M+3)*.08,S+.574),h(v+.03,S+.572-si(M+4)*.07)];if(!b.every(y=>no(y,t)))continue;const w=(y,E)=>e(y,E)+.042+si(M+6)*.028;i.face(Lu[Math.floor(si(M+7)*Lu.length)],...b.map(y=>Nn(y,w)))}}function $x(i,t,e){const n=me(i,"Раскоп Горгиппии · кладка и древние улицы",{surface:"stone"}),s=(c,u)=>Pd(t,c,u),o=Oi.cellars.map(({polygon:c,depth:u})=>({ring:c.map(Jn),depth:u,holes:[]})),r=Oi.wells.map(({point:c,radius:u,depth:f})=>{const[h,p]=Jn(c),d=Array.from({length:12},(x,M)=>{const v=M*Math.PI/6;return[h+Math.cos(v)*u,p+Math.sin(v)*u]}),_=o.find(x=>d.every(M=>no(M,x.ring))),m=(x,M)=>s(x,M)-(_?.depth??0),g=_||d.every(x=>no(x,ys))&&!o.some(x=>d.some(M=>no(M,x.ring))||x.ring.some(M=>no(M,d)));return _&&_.holes.push(d),{ring:d,rim:m,depth:f,cut:g,cellar:_,center:[h,p]}}),a=[...o.map(c=>c.ring),...r.filter(c=>c.cut&&!c.cellar).map(c=>c.ring)],l=new $t;e([ys,...a],s,(c,u,f)=>l.copy(Hx).lerp(Vx,ue.clamp(.51+.32*Math.sin(c*.15+f*.19)+.19*Math.sin(c*.43-f*.24),0,1))),Yo(n,ys,s,(c,u)=>t(c,u)+.012,()=>"#a18f75");for(const{ring:c,depth:u,holes:f}of o){const h=(p,d)=>s(p,d)-u;e([c,...f],h,Wx),Yo(n,c,h,s,()=>"#89785f")}for(const{ring:c,rim:u,depth:f,cut:h,center:p}of r){const d=(m,g)=>u(m,g)-(h?f:-.028);h?e([c],d,Xx):n.face("#5f5342",...c.map(m=>Nn(m,d))),Yo(n,c,d,(m,g)=>u(m,g)+.18,()=>"#80715e",2);const _=c.map(m=>mt(p,m,1.35));for(let m=0;m<c.length;m++){const g=(m+1)%c.length,x=(M,v)=>u(M,v)+.16+m%3*.021;Ld(n,_[m],_[g],u,x,is[m%is.length]),n.face(is[m%is.length],...[c[m],_[m],_[g],c[g]].map(M=>Nn(M,x)))}}for(const[c,{polygon:u,density:f}]of Oi.streets.entries()){const h=u.map(Jn);e([h],(p,d)=>s(p,d)+.025,qx),Zx(n,h,s,c,f??.88)}for(const[c,{points:u,width:f,height:h}]of Oi.walls.entries()){const p=u.map(Jn);for(let d=1;d<p.length;d++){const _=p[d-1],m=p[d],g=mt(_,m,.5),x=o.reduce((M,{ring:v,depth:S})=>Math.max(M,v.some((b,w)=>{const y=v[(w+1)%v.length],E=y[0]-b[0],T=y[1]-b[1],C=ue.clamp(((g[0]-b[0])*E+(g[1]-b[1])*T)/(E*E+T*T),0,1);return Math.hypot(g[0]-b[0]-C*E,g[1]-b[1]-C*T)<f*.63})?S:0),0);Yx(n,_,m,f,h,s,x,c*41+d)}}for(const{from:c,to:u,width:f,steps:h}of Oi.stairs){const p=Jn(c),d=Jn(u),_=o.find(m=>no(d,m.ring))?.depth??.85;for(let m=0;m<h;m++){const g=o0(mt(p,d,m/h),mt(p,d,(m+1)/h),f),x=(v,S)=>s(v,S)-_,M=(v,S)=>x(v,S)+_*(1-m/h);n.face(is[m%is.length],...g.map(v=>Nn(v,M))),Yo(n,g,x,M,()=>"#9a8a71",2)}}n.finish()}const ss=i=>i.map(Jn),Kx=[[126,399],[220,407],[350,432],[460,455],[536,471],[610,478],[712,485],[779,478],[865,499],[955,516],[1060,538],[1168,556]],Du=[[748,295],[742,323],[729,352],[716,405],[712,462],[710,481]],Iu=[0,0,.16,.67,1,1],Jx={position:Jn([707,480]),look:Jn([405,447]),pitch:-.19},ki=[[-384.79,10.65],[-282.12,15.99],[-217.83,18.81],[-218.47,61.07],[-219.18,90.59],[-393.18,81.88],[-384.79,10.65]],Gi=Math.atan2(2.82,64.29);function Dd(i){const[t,e]=ki[1];return i(t+1.44*Math.sin(Gi),e-1.44*Math.cos(Gi))}function Sc([i,t]){return i===-282.12&&t===15.99?2.62:i===-218.47&&t===61.07?1.45:0}const Qx=[{name:"Дорожка у лапидария",points:[[-332,24],[-322,25],[-312,26],[-303,27.3],[-295,28.1]],widths:[2.45,2.7,2.7,2.6,2.6],surface:"paving",railSide:1},{name:"Подход от входной арки",points:[[-282.12,14],[-282.12,18],[-283.15,21.1],[-288.4,25.8],[-295,28.1]],widths:[2.5,2.5,2.7,2.6,2.6],surface:"paving"},{name:"Дорожка от площадки музея",points:[[-295,28.1],[-294.5,33.9],[-295.2,40.9],Jn(Du[0])],widths:[2.6,2.8,2.9,2.6],surface:"paving"},{name:"Дорожка вдоль южного борта",points:[...ss([[65,710],[475,724],[1030,743],[1560,759]]),[-221.6,87.8],[-221.1,63.1]],widths:[1.5,1.65,1.75,1.7,1.65,1.6],surface:"paving",railSide:-1},{name:"Подход к восточной калитке",points:[[-221.1,63.1],[-220.9,61.07],[-216.4,61.07]],widths:[1.6,1.6,1.55],surface:"paving"},{name:"Спуск к раскопу",points:ss(Du),widths:[2.6,2.5,1.35,1.25,1.25,1.7],surface:"ramp",rails:[2,3]},{name:"Проход между подвалами",points:ss(Kx),widths:[3.8,4,4.1,3.9,3.8,3.4,3.5,4.1,4.3,4.2,4.2,3.5],surface:"earth"},{name:"Выход с западных лестниц",points:ss([[129,368],[128,386],[126,399]]),widths:[1.5,1.8,2],surface:"earth"},...[368,401].flatMap(i=>[{name:"Западная площадка",points:ss([[43,i],[90,i]]),widths:[1.5,1.43],surface:"landing"},{name:"Западная лестница",points:ss([[90,i],[129,i]]),widths:[1.43,1.43],surface:"steps"}])],{clamp:jx,lerp:xa}=ue,tv=new $t("#c7bda5"),Uu=new $t("#c1b9a6"),ev=new $t("#a59b76"),va="#aa987f",Gl="#52534c",Go=9;function Rr(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=Math.hypot(e,n);return{a:i,b:t,dx:e,dz:n,length:s,nx:-n/s,nz:e/s}}function Nu(i,t){return i.points.map(([e,n],s)=>{const o=i.edges[Math.max(0,s-1)],r=i.edges[Math.min(i.edges.length-1,s)],a=Math.hypot(o.nx+r.nx,o.nz+r.nz),l=(o.nx+r.nx)/a,c=(o.nz+r.nz)/a,u=t*i.widths[s]/(2*Math.max(.66,l*r.nx+c*r.nz));return[e+l*u,n+c*u]})}function Fu(i,t,e){return i.rails?.includes(t)||i.railSide===e}function Zo(i,t,{a:e,dx:n,dz:s,length:o}){const r=((i-e[0])*n+(t-e[1])*s)/(o*o),a=jx(r,0,1);return{raw:r,t:a,distance:Math.hypot(i-e[0]-n*a,t-e[1]-s*a)}}function nv(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}const iv=ki.slice(1).map((i,t)=>{const e=ki[t],{length:n}=Rr(e,i);return Rr(mt(e,i,Sc(e)/n),mt(e,i,1-Sc(i)/n))}),sv=Oi.cellars.map(({polygon:i})=>ss(i)),ov=Oi.walls.flatMap(({points:i,width:t})=>{const e=ss(i);return e.slice(1).map((n,s)=>({...Rr(e[s],n),width:t}))}),rv=Oi.wells.map(({point:i,radius:t})=>({point:Jn(i),radius:t}));function av(i,t){return rv.some(({point:[e,n],radius:s})=>Math.hypot(i-e,t-n)<s*1.35+.18)||ov.some(e=>Zo(i,t,e).distance<e.width/2+.18)||sv.some(e=>nv(i,t,e))}function cv(i,t,e){const[n,s]=ki[1],o=(t-n)*Math.cos(Gi)+(e-s)*Math.sin(Gi),r=(e-s)*Math.cos(Gi)-(t-n)*Math.sin(Gi);if(Math.abs(o)>2.22||r<-1.44||r>.46)return;const a=r<-1.02?.135:r<-.6?.27:.405;return Dd(i)+a}function lv(i){const t=(f,h)=>Pd(i,f,h),e=Qx.map(f=>({...f,edges:f.points.slice(1).map((h,p)=>Rr(f.points[p],h))})).map(f=>({...f,left:Nu(f,-1),right:Nu(f,1)})),n=e.filter(f=>f.surface==="earth"),s=e.filter(f=>f.surface==="paving"),o=e.filter(f=>["steps","landing","ramp"].includes(f.surface)),r=e.flatMap(f=>[[-1,f.left],[1,f.right]].flatMap(([h,p])=>p.slice(1).flatMap((d,_)=>Fu(f,_,h)?[Rr(p[_],d)]:[])));function a(f,h,p,d,_){if(f==="earth")return t(d,_)+.055;if(f==="paving"||f==="landing")return i(d,_)+.054;const m=t(d,_)+.061,g=i(d,_)+.054;return f==="steps"?xa(g,m,Math.min(1,Math.floor(p*Go)/(Go-1))):xa(g,m,xa(Iu[h],Iu[h+1],p))}function l(f,h,p,d=0){let _;return f.edges.forEach((m,g)=>{const{raw:x,t:M,distance:v}=Zo(h,p,m);(f.surface==="steps"||f.surface==="landing")&&(x<-1e-5||x>1.00001)||v>xa(f.widths[g],f.widths[g+1],M)/2-d||v>=(_?.distance??1/0)||(_={distance:v,height:a(f.surface,g,M,h,p)})}),_?.height}function c(f,h,p){if(f<-397||f>-211||h<9||h>92)return;if(iv.some(m=>Zo(f,h,m).distance<.24)||r.some(m=>Zo(f,h,m).distance<.15))return null;for(const m of o){const g=l(m,f,h,.12);if(g!==void 0)return g}if(p)return n.some(g=>l(g,f,h,.16)!==void 0)&&!av(f,h)?t(f,h)+.055:null;const d=cv(i,f,h);return d!==void 0?d:s.some(m=>l(m,f,h)!==void 0)?i(f,h)+.054:void 0}function u(f,h){const p=me(f,"Горгиппия · дорожки и ограждения для посетителей");for(const d of e){const{left:_,right:m}=d;for(const[g,x]of d.edges.entries()){if(d.surface==="earth"&&g<3)continue;const M=[_[g],_[g+1],m[g+1],m[g]],v=(S,b)=>a(d.surface,g,Zo(S,b,x).t,S,b);if(d.surface==="steps"){const S=(b,w)=>mt(b[g],b[g+1],w);for(let b=0;b<Go;b++){const w=b/Go,y=(b+1)/Go,E=S(_,w),T=S(m,w),C=S(_,y),D=S(m,y),P=(F,G)=>a("steps",g,(w+y)/2,F,G),R=(F,G)=>a("steps",g,Math.max(0,w-.001),F,G);h([[E,C,D,T]],P,Uu);const I=([F,G],H)=>[F,H(F,G),G];b&&p.face(va,I(E,R),I(T,R),I(T,P),I(E,P));const N=(F,G)=>t(F,G)-.02;p.face(va,I(E,P),I(C,P),I(C,N),I(E,N)),p.face(va,I(T,P),I(D,P),I(D,N),I(T,N))}}else d.surface==="earth"?h([M],(S,b)=>t(S,b)+.012,ev):h([M],v,d.surface==="ramp"?Uu:tv);for(const[S,b]of[[-1,_],[1,m]]){const w=b[g],y=b[g+1],E=Math.hypot(y[0]-w[0],y[1]-w[1]),T=d.surface==="ramp"||d.surface==="landing",C=Fu(d,g,S);if(!C&&!T)continue;const D=Math.max(1,Math.ceil(E/(T?.62:1.75))),P=(R,I)=>{const[N,F]=mt(w,y,R);return[N,v(N,F)+I,F]};for(let R=0;R<D;R++){const I=R/D,N=(R+1)/D;if(T){const F=([G,H,$])=>[G,Math.min(H-.07,t(G,$)-.025),$];p.face(va,P(I,0),P(N,0),F(P(N,0)),F(P(I,0)))}if(C){for(const F of[.38,.83])p.beam(P(I,F),P(N,F),.027,Gl);(!T||R%3===0)&&p.beam(P(I,0),P(I,.85),.047,Gl),R===D-1&&p.beam(P(N,0),P(N,.85),.047,Gl)}}}}}p.finish()}return{walkHeight:c,render:u}}const yc="#dfd7c1",gn="#f0eee6",hv="#526e7c",Ms="#343d3d";function La([i,t],e){const n=e/2;return[[i-n,t-n],[i+n,t-n],[i+n,t+n],[i-n,t+n]]}function uv([i,t],[e,n]){const s=Math.hypot(e-i,n-t),o=(e-i)/s,r=(n-t)/s;return(a,l)=>[i+o*a+r*l,t+r*a-o*l]}function fv(i,t,e){const n=uv(t[0],t[1]),o=(e.lowerWaterfront??e)(...n(9,27))+.65,r=Math.min(...t.map(st=>e(...st)))-.2,a=Fe(t),l="#7295bf",c="#415f88",u="#636b71",f="#b8bdba",h=me(i,"Пароходъ",{surfaces:{metal:[l,f,c],paving:[u],stone:[yc],glass:["#40484a","#4b5256"]}});h.shell(t,Math.min(r,o-.2),o+.25,yc);const p=t.map(st=>mt(a,st,.83));h.shell(p,o+.25,o+2.85,"#40484a",null),h.shell(t,o+2.85,o+3.08,gn,u);for(let st=2;st<=13;st++){const ct=t[st],B=t[st+1];On(h,p[st],p[st+1],a,o+.52,o+2.76,2.15,"#d9dbd6");const Z=Math.max(1,Math.round(Math.hypot(ct[0]-B[0],ct[1]-B[1])/2.5));for(let ht=0;ht<Z;ht++){const yt=mt(a,mt(ct,B,ht/Z),.97);h.shell(La(yt,.28),o+.25,o+2.85,gn,null)}}const d=[n(28.3,24),n(31,16.2)],_=e(...d[0])+.025,m=o+3.08,g=[n(27.2,15.4),n(31.95,15.4),n(31.95,17),n(27.2,17)];h.shell(g,m-.14,m,f,u);const x=[.89,.31],M=(st,ct)=>{const B=mt([28.3,24],[31,16.2],st);return n(B[0]+x[0]*ct,B[1]+x[1]*ct)},v=19;for(let st=0;st<v;st++){const ct=st/v,B=(st+1)/v,Z=ue.lerp(_,m,B);h.shell([M(ct,-1),M(B,-1),M(B,1),M(ct,1)],Z-.09,Z,f,u)}for(const st of[-1,1]){const ct=(B,Z)=>{const[ht,yt]=M(B,st);return[ht,ue.lerp(_,m,B)+Z,yt]};h.beam(ct(0,.98),ct(1,.98),.07,gn),h.beam(ct(0,.51),ct(1,.51),.045,f);for(const B of[.03,.22,.42,.62,.82,1])h.beam(ct(B,.1),ct(B,.98),.055,gn)}const S=[[-16,7.5,15],[-10,4,17],[-2,2.1,17.7],[24,1.7,18.1],[30,1.7,13.2],[34,5.8,9]],b=S.map(([st,,ct])=>n(st,ct)),y=S.map(([st,ct])=>n(st,ct)).concat(b.slice().reverse());h.shell(y,o+3.08,o+6.5,gn,null);const E=Fe(y);for(let st=1;st<b.length;st++)On(h,b[st-1],b[st],E,o+3.4,o+6.24,1.85);const T=o+6.52,C=o+7.72;function D([st,ct,B]){return[[...n(st,ct),T],[...n(st,ct+(B-ct)*.46),C],[...n(st,B),T]].map(([Z,ht,yt])=>[Z,yt,ht])}let P=0;for(let st=1;st<S.length;st++){const ct=D(S[st-1]),B=D(S[st]),Z=Math.max(1,Math.round((S[st][0]-S[st-1][0])/2));for(let ht=0;ht<Z;ht++){const yt=ct.map((vt,q)=>mt(vt,B[q],ht/Z)),V=ct.map((vt,q)=>mt(vt,B[q],(ht+1)/Z)),at=P++%2===0?l:gn;h.face(at,yt[0],V[0],V[1],yt[1]),h.face(at,yt[1],V[1],V[2],yt[2])}}h.face(gn,...D(S[0])),h.face(gn,...D(S.at(-1)));const R=n(13,14.8),I=t.slice(4,10).map(st=>mt(R,st,.95)),N=[R,...I];h.shell(N,o+3.08,o+3.42,gn),h.shell(N,o+3.42,o+4.92,"#4b5256",null),P=0,I.slice(1).forEach((st,ct)=>{const B=I[ct];On(h,B,st,R,o+3.57,o+4.83,1.65,f);const Z=mt(R,B,1.011),ht=mt(R,st,1.011);h.wall(Z,ht,o+3.65,o+4.12,"#79444e");for(const V of[3.48,3.71,4.24])h.beam([Z[0],o+V,Z[1]],[ht[0],o+V,ht[1]],.052,gn);const yt=Math.max(2,Math.round(Math.hypot(st[0]-B[0],st[1]-B[1])/1.25));for(let V=0;V<yt;V++){const at=mt(B,st,V/yt),vt=mt(B,st,(V+1)/yt);h.face(P++%2===0?l:gn,[at[0],o+4.96,at[1]],[vt[0],o+4.96,vt[1]],[R[0],o+5.85,R[1]])}});const F=t.slice(9,17).map(st=>mt(n(-9.5,24),st,.94)),G=Fe(F);h.shell(F,o+3.08,o+6.75,gn,u);const H=F.map(st=>mt(G,st,1.024));h.shell(H,o+4.38,o+5.1,c,null),h.shell(F.map(st=>mt(G,st,1.026)),o+6.75,o+6.94,c,u),F.slice(1).forEach((st,ct)=>{On(h,F[ct],st,G,o+3.45,o+4.38,1.4),On(h,F[ct],st,G,o+5.16,o+6.1,1.55)});const[$,et]=H.slice(1,3),St=Math.hypot(et[0]-$[0],et[1]-$[1]),bt=[($[1]-et[1])/St,(et[0]-$[0])/St],rt=mt($,et,.48);Ie(i,{text:"ПАРОХОДЪ",position:[rt[0]+bt[0]*.055,o+4.75,rt[1]+bt[1]*.055],size:[6.6,.69],outward:bt,color:gn,background:c,lighting:"backlit",glowColor:"#d4e9ff"}),h.finish()}function dv(i,t,e,n){const s="PARK-HOTEL",o=[1.45,1.67,1.52,1.52,1.08,1.56,1.68,1.51,1.39,1.36],r=.42,a=e.slice(0,8).reverse(),l=a.slice(1).map((f,h)=>{const p=a[h],d=Math.hypot(f[0]-p[0],f[1]-p[1]);return{a:p,b:f,length:d,outward:[(p[1]-f[1])/d,(f[0]-p[0])/d]}}),c=o.reduce((f,h)=>f+h,0)+r*(s.length-1);let u=(l.reduce((f,h)=>f+h.length,0)-c)/2;for(const[f,h]of[...s].entries()){const p=o[f];let d=u+p/2;for(const{a:_,b:m,length:g,outward:x}of l){if(d>g){d-=g;continue}const[M,v]=mt(_,m,d/g),[S,b]=x;t.beam([M-S*.06,n+.43,v-b*.06],[M-S*.06,n+.89,v-b*.06],.075,Ms),Ie(i,{text:h,position:[M+S*.07,n+1.13,v+b*.07],size:[p,1.8],outward:x,color:"#e7cc87",weight:850,lighting:"neon",glowColor:"#ff5540",spill:f===5});break}u+=p+r}}function pv(i,t,e){const n=Math.min(...t.map(d=>e(...d)))+.06,s=n-.36,o=Fe(t),r="#99655f",a="#d6c9b8",l="#6f6460",c=me(i,"Парк-отель Анапа",{surfaces:{flatRoof:[l],stone:[a]}}),u=n+2.85,f=2.91;c.shell(t,s,u,a,null);for(let d=0;d<t.length;d++){const _=t[d],m=t[(d+1)%t.length],[g,x]=mt(_,m,.5);x<o[1]-2&&e(g,x)<n+.8&&On(c,_,m,o,n+.46,u-.35,2.1,a)}for(let d=0;d<4;d++){const _=u+d*f;c.shell(t,_,_+f,yc,null);for(let m=0;m<t.length;m++){const g=t[m],x=t[(m+1)%t.length],[M,v]=mt(g,x,.5);if(Math.hypot(x[0]-g[0],x[1]-g[1])<1.2)continue;const S=M<o[0]-6||d===3?r:a;c.wall(mt(o,g,1.003),mt(o,x,1.003),_+.05,_+.86,S),(v<o[1]+14||m%2===0)&&On(c,g,x,o,_+.9,_+2.64,1.43,S===r?"#d8bfb0":"#eee8db")}}const h=u+4*f;c.shell(t,h,h+.48,r,l);const p=t.filter(([d,_])=>d<o[0]-11&&_>o[1]-1);if(p.length>=4){const d=p.map(_=>mt(Fe(p),_,.68));c.shell(d,h+.48,h+1.68,r,l)}dv(i,c,t,h),c.finish()}function mv(i,t,e){const n=t.rings[0],s=t.id==="223949001",o=Fe(n),r=s?e(...o):e(-263.52,25.47),a=Math.min(...n.map(M=>e(...M)))-.25,l="#e5dfcd",c=s?"#94877d":"#ad5d51",u=me(i,"Музей Горгиппия",{surfaces:{roof:[c],glass:["#556161"],stone:["#a69a82"]}}),f=r+4.25,h=t.id==="142489024"||s?[n[0],n[1],n[3],n[4]]:n.slice(0,4);Math.hypot(h[1][0]-h[0][0],h[1][1]-h[0][1])>Math.hypot(h[2][0]-h[1][0],h[2][1]-h[1][1])&&h.push(h.shift()),u.shell(n,Math.min(a,r),r+.5,"#a69a82",null),u.shell(n,r+.5,f,l,null);const p=mt(h[0],h[1],.5),d=mt(h[2],h[3],.5),_=[mt(p,d,.23),mt(p,d,.77)].map(([M,v])=>[M,f+(s?1.65:2.25),v]),m=h.map(([M,v])=>[M,f,v]);u.face(c,m[0],m[1],_[0]),u.face(c,m[1],m[2],_[1],_[0]),u.face(c,m[2],m[3],_[1]),u.face(c,m[3],m[0],_[0],_[1]);const g=s?[n[0],n[1]]:[n[4],n[0]],x=s?6:4;for(let M=0;M<x;M++){const v=mt(o,mt(g[0],g[1],(M+.32)/x),1.005),S=mt(o,mt(g[0],g[1],(M+.66)/x),1.005);u.wall(v,S,r+1.25,r+3.03,"#556161")}if(t.id==="142489024")for(const M of[.19,.81]){const v=n[0],S=n[1],b=Array.from({length:16},(w,y)=>{const E=y*Math.PI/8,[T,C]=mt(o,mt(v,S,M+.035*Math.cos(E)),1.006);return[T,r+2.5+.46*Math.sin(E),C]});u.face(hv,...b)}u.finish()}function gv(i,t,e){if(t.id==="170958806")fv(i,t.rings[0],e);else if(t.id==="1546378584")pv(i,t.rings[0],e);else if(["142489024","218983841","223949001"].includes(t.id))mv(i,t,e);else return!1;return!0}function _v(i,t){const e=me(i,"Вход в Горгиппию"),[n,s]=ki[1],o=t(n,s),r=Gi,a=(u,f,h=0)=>[n+Math.cos(r)*u-Math.sin(r)*h,o+f,s+Math.sin(r)*u+Math.cos(r)*h];for(let u=1;u<ki.length;u++){const f=ki[u-1],h=ki[u],p=Math.hypot(h[0]-f[0],h[1]-f[1]),d=mt(f,h,Sc(f)/p),_=mt(f,h,1-Sc(h)/p),m=Math.hypot(_[0]-d[0],_[1]-d[1]),g=Math.ceil(m/2.6),x=(M,v)=>{const[S,b]=mt(d,_,M);return[S,t(S,b)+v,b]};for(let M=0;M<g;M++){const v=M/g,S=(M+1)/g;for(const[b,w,y]of[[.14,.23,"#b1a992"],[.37,.037,Ms],[1.21,.043,Ms]])e.beam(x(v,b),x(S,b),w,y);e.beam(x(v,.22),x(v,1.31),.068,Ms);for(let b=1;b<=5;b++){const w=v+(S-v)*b/6;e.beam(x(w,.36),x(w,1.25),.024,Ms)}}}for(const u of[-2.55,2.55]){const[f,,h]=a(u,0);e.shell(La([f,h],.63),o-.45,o+2.56,gn),e.shell(La([f,h],.83),o+2.56,o+2.72,yc),e.shell(La([f,h],.88),o+2.72,o+3.48,gn);const p=Array.from({length:20},(d,_)=>{const m=_*Math.PI/10;return a(u+Math.cos(m)*.31,3.1+Math.sin(m)*.31,-.445)});e.face("#98694b",...p)}for(const u of[0,.27,.55]){const f=Array.from({length:11},(h,p)=>{const d=p/5-1;return a(d*2.17,2.8+u+(1-d*d)*.68)});f.slice(1).forEach((h,p)=>e.beam(f[p],h,.045,gn))}const l={Г:[[[0,0],[0,1],[1,1]]],О:[[[.22,0],[.78,0],[1,.18],[1,.82],[.78,1],[.22,1],[0,.82],[0,.18],[.22,0]]],Р:[[[0,0],[0,1],[.78,1],[1,.82],[1,.65],[.78,.49],[0,.49]]],И:[[[0,1],[0,0],[1,1],[1,0]]],П:[[[0,0],[0,1],[1,1],[1,0]]],Я:[[[1,0],[1,1],[.22,1],[0,.82],[0,.65],[.22,.49],[1,.49]],[[0,0],[.44,.49]]]};Array.from("ГОРГИППИЯ").forEach((u,f)=>{const h=(f-4)*.425,p=3.02+(1-(h/2.17)**2)*.68;for(const d of l[u]){const _=d.map(([m,g])=>a(-h-(m-.5)*.32,p+g*.43,-.045));_.slice(1).forEach((m,g)=>e.beam(_[g],m,.043,"#9e5345"))}});const c=Dd(t);for(let u=0;u<3;u++){const f=-1.44+u*.42,h=[[-2.22,f],[2.22,f],[2.22,.46],[-2.22,.46]].map(([d,_])=>{const[m,,g]=a(d,0,_);return[m,g]}),p=u===0?c-.2:c+u*.135;e.shell(h,p,c+(u+1)*.135,"#c8b697")}for(const u of[-1,1]){for(let f=0;f<=6;f++){const h=u*(1.15+f*.16);e.beam(a(h,.26),a(h,1.78),.032,Ms)}for(const f of[.32,1.7])e.beam(a(u*1.15,f),a(u*2.2,f),.046,Ms)}e.finish()}function xv(i,t){_v(i,t)}const $o="#eeeee7",cs="#f3f1e7",Da="#294d6a",Id="#496b83",Ud={glass:[Id,"#7694a3"],metal:[Da,"#4d7494"],flatRoof:["#c2c7c2","#c7c8bf","#c6c8c4"],stone:["#c7bcab"]};function dr(i){return i.map(([t,e],n)=>{const[s,o]=i[(n+1)%i.length],r=Math.hypot(s-t,o-e);return{x:t,z:e,length:r,ux:(s-t)/r,uz:(o-e)/r}})}function je(i,t,e=0){return[i.x+i.ux*t-i.uz*e,i.z+i.uz*t+i.ux*e]}function Ou(i,t){return i.map((e,n)=>{const s=(n+i.length-1)%i.length,o=i[s],r=je(o,0,t[s]),a=je(e,0,t[n]),l=o.ux*e.uz-o.uz*e.ux,c=((a[0]-r[0])*e.uz-(a[1]-r[1])*e.ux)/l;return[r[0]+o.ux*c,r[1]+o.uz*c]})}function r0(i,t,e,n,s){return[je(i,t,n),je(i,e,n),je(i,e,s),je(i,t,s)]}function yo(i,t,e,n,s,o,r=Id,a=.025){i.wall(je(t,e,-a),je(t,n,-a),s,o,r)}function vv(i,t,e,n){const s=n?Math.max(1,Math.round(t.length/4.15)):1,o=Math.min(n?2.38:.93,t.length/s*.69);for(let r=0;r<s;r++){const a=t.length*(r+.5)/s,l=e+(n?.37:1.02),c=e+2.37;yo(i,t,a-o/2,a+o/2,l,c),n&&yo(i,t,a-.038,a+.038,l,c,"#7694a3",.04)}}function Mv(i,t,e){const[n,s]=je(t,0,.055),[o,r]=je(t,t.length,.055);i.beam([n,e+.26,s],[o,e+.26,r],.065,Da),i.beam([n,e+1.08,s],[o,e+1.08,r],.075,Da);const a=Math.ceil(t.length/.215);for(let l=0;l<a;l++){const c=t.length*(l+.5)/a;i.wall(je(t,c-.016,.055),je(t,c+.016,.055),e+.26,e+1.08,Da)}}function Sv(i,t,e,n,s){const o=n+.9,r=e.length*.2,a=e.length*.8,l=s(...je(e,e.length/2,-2.9));for(let h=0;h<6;h++){const p=-2.9+h*.42,d=l+(o-l)*(h+1)/6;t.shell(r0(e,r,a,p,.04),Math.min(d-.05,l-.08),d,"#c7bcab")}t.shell(r0(e,r-.9,a+.9,-2.3,.04),n+3.24,n+3.56,cs);const c=(r+a)/2;yo(t,e,c-4.4,c+4.4,n+2.74,n+3.23,cs,.055);const[u,f]=je(e,c,-.082);Ie(i,{text:"анапа-океан",position:[u,n+2.99,f],size:[8.1,.62],outward:[e.uz,-e.ux],color:"#155d8a",weight:850,lighting:"backlit",glowColor:"#6ac8ff"})}function yv(i,t,e){const n=me(i,"Анапа-Океан — 13 этажей",{surfaces:Ud}),s=dr(t),o=new Set([0,1,3,4,5,6]),r=Ou(s,s.map((m,g)=>o.has(g)?1.5:.05)),a=dr(r),l=e(...je(s[0],s[0].length/2)),c=Math.min(...t.map(m=>e(...m)))-.3,u=l+3.65,f=12,h=2.97,p=u+f*h;n.shell(t,c,u,$o,cs);for(const m of s.slice(0,3)){const g=Math.max(2,Math.round(m.length/2.3));for(let x=0;x<g;x++){const M=m.length*(x+.055)/g,v=m.length*(x+.945)/g;yo(n,m,M,v,l+.95,l+3.22)}}Sv(i,n,s[0],l,e),n.shell(r,u,p,$o,"#c2c7c2");for(let m=0;m<f;m++){const g=u+h*m,x=m<f-1;x&&(n.shell(t,g,g+.22,cs),n.flat(t,g,cs));for(let M=0;M<s.length;M++){const v=o.has(M);vv(n,a[M],g,v),v&&x&&Mv(n,s[M],g)}}const d=Ou(s,s.map(()=>.4)),_=dr(d);n.shell(d,p-.17,p+.45,$o,"#c7c8bf");for(const[m,g]of[[2,1.37],[7,1.05]]){const x=_[m];n.shell(r0(x,.7,x.length-.7,.02,2.1),p+.45,p+g,$o)}n.finish()}function bv(i,t,e){const n=me(i,"Анапа-Океан — низкое крыло",{surfaces:Ud}),s=[...t.slice(0,9),t[15]],o=t.slice(8),r=e(...Fe(s)),a=e(...Fe(o)),l=r+3.9,c=a+6.25,u="#4d7494";for(const[m,g,x]of[[s,r,l],[o,a,c]]){const M=Math.min(...m.map(S=>e(...S)))-.3;n.shell(m,M,x,$o,"#c6c8c4");const v=dr(m);for(const S of v){if(S.length<2.7)continue;const b=Math.max(1,Math.round(S.length/4.3));for(let w=0;w<b;w++){const y=S.length*(w+.17)/b,E=S.length*(w+.84)/b;yo(n,S,y,E,g+.72,g+2.94),m===o&&yo(n,S,y,E,g+3.55,x-.64)}}}const f=dr(s);for(const m of f.slice(0,6)){const g=je(m,0,.15),x=je(m,m.length,.15);n.wall(g,x,l+.14,l+.91,u),n.beam([g[0],l+.96,g[1]],[x[0],l+.96,x[1]],.055,cs)}const h=f[3],[p,d]=je(h,h.length/2,-1.55),_=e(p,d)+2.65;for(const m of[-1,1]){const[g,x]=je(h,h.length/2+m*1.85,-1.47);n.beam([g,e(g,x),x],[g,_,x],.16,cs),n.beam([g,_-.12,x],[p,_-.12,d],.095,cs)}Ie(i,{text:"La Veranda",position:[p,_+.16,d],size:[3.6,.69],outward:[h.uz,-h.ux],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#faf3db",weight:600,lighting:"spot"}),n.finish()}function wv(i,t){const e=me(i,"La Veranda — летняя веранда",{surfaces:{wood:["#ddd7c5","#b5a484"],ground:["#d3c7b3"],metal:["#706b5c"]}}),n=[-601,-29],s=[.855,-.519],o=[.519,.855],r=(d,_)=>[n[0]+s[0]*d+o[0]*_,n[1]+s[1]*d+o[1]*_],a=(d,_,m,g)=>[r(d,m),r(_,m),r(_,g),r(d,g)],l=[0,4.5,9].flatMap(d=>[0,3,6].map(_=>t(...r(d,_)))),c=Math.max(...l)+.06,u=c+3.1,f=(d,_,m,g,x,M)=>e.beam([d[0],m,d[1]],[_[0],g,_[1]],x,M);e.shell(a(0,9,0,6),Math.min(...l)-.12,c,"#bcb4a6","#ddd7c5"),e.shell(a(-.12,9.12,-.12,6.12),u,u+.16,"#e5e1d6","#f6f3e9");for(const d of[.15,3,6,8.85])for(const _ of[.15,5.85]){const m=r(d,_);f(m,m,c,u,.13,"#f5f2e8")}for(const d of[.15,5.85]){f(r(.15,d),r(8.85,d),c+.92,c+.92,.09,"#f5f2e8");for(let _=.15;_<8.5;_+=2.9)f(r(_,d),r(_+2.85,d),c+.18,c+.89,.055,"#f5f2e8"),f(r(_,d),r(_+2.85,d),c+.89,c+.18,.055,"#f5f2e8")}for(const d of[.3,2.8,3.2,5.8,6.2,8.7])e.wall(r(d,.2),r(d+.24,.2),c+.92,u-.05,"#eee9d9");for(const d of[1.5,4.5,7.5])for(const _ of[1.6,4.2]){e.shell(a(d-.47,d+.47,_-.36,_+.36),c+.73,c+.79,"#baa98d","#f5efe1");const m=r(d,_);f(m,m,c+.05,c+.73,.08,"#817462");for(const g of[-.78,.78])e.shell(a(d+g-.23,d+g+.23,_-.23,_+.23),c+.42,c+.5,"#a99779","#c2b198")}for(const d of[1.1,3.6,6.1,8.1])e.shell(a(d-.65,d+.65,-.32,.05),c+.02,c+.4,"#aa8d61","#5f844b"),e.shell(a(d-.57,d+.57,-.29,.02),c+.4,c+.55,"#718f54","#829c62");const[h,p]=r(4.5,-.13);Ie(i,{text:"La Veranda",position:[h,u+.55,p],size:[5.5,.9],outward:[-.519,-.855],fontFamily:'"Snell Roundhand", "Segoe Script", cursive',color:"#f8f4e8",weight:600,lighting:"spot"}),e.finish()}function Ev(i,t,e){if(t.id==="223949006")yv(i,t.rings[0],e);else if(t.id==="142489050")bv(i,t.rings[0],e),wv(i,e);else return!1;return!0}function Tv(i,t,e){const n="#d6d4cf",s="#b1b0ac",o="#556574",r="#eeeae2",a="#4b5156",l="#50333a",c=me(i,"Анапский городской суд — Ленина, 6",{surfaces:{stone:[l],glass:[o],metal:[a],flatRoof:[s],paving:["#c5bdae"]},textures:{[n]:{path:"art/lenin-court-cladding.webp",size:[2.4,2.4],amount:.95}}}),u=t.map((b,w)=>{const y=t[(w+1)%t.length],E=Math.hypot(y[0]-b[0],y[1]-b[1]),T=(y[0]-b[0])/E,C=(y[1]-b[1])/E;return{a:b,length:E,ux:T,uz:C,point:(D,P=0)=>[b[0]+T*D+C*P,b[1]+C*D-T*P]}}),f=(b,w,y,E,T,C,D=.025)=>c.wall(b.point(w,D),b.point(y,D),E,T,C),h=(b,w,y,E,T)=>[b.point(w,E),b.point(y,E),b.point(y,T),b.point(w,T)],p=u[1],d=p.length/2,_=e(...p.point(d,1.8))+.03,m=_+.72,g=m+7.6,x=Math.min(...t.map(([b,w])=>e(b,w)),_)-.35;c.shell(t,x,m,"#8c8983",null),c.shell(t,m,g,n,null),c.shell(t,g,g+.22,r,s);for(const[b,w]of u.entries()){if(w.length<5)continue;const y=Math.max(1,Math.round(w.length/3.3));for(let E=0;E<y;E++){const T=w.length*(E+.5)/y;for(let C=0;C<2;C++){if(b===1&&C===0&&Math.abs(T-d)<2.3)continue;const D=m+.7+C*3.48;if(f(w,T-.66,T+.66,D,D+1.94,r,.03),f(w,T-.57,T+.57,D+.09,D+1.85,o,.045),f(w,T-.025,T+.025,D+.09,D+1.85,r,.057),C===0){for(let P=-2;P<=2;P++)f(w,T+P*.2-.012,T+P*.2+.012,D+.13,D+1.82,a,.073);for(const P of[D+.48,D+1.4])f(w,T-.54,T+.54,P,P+.025,a,.073)}}}}f(p,d-1.2,d+1.2,m,m+2.65,"#242d31",.055),f(p,d-.025,d+.025,m+.05,m+2.6,"#c1bfba",.07);for(let b=0;b<4;b++){const w=2-b*.43;c.shell(h(p,d-2.7,d+2.7,.08,w),_+b*.18-.05,_+(b+1)*.18,l)}c.shell(h(p,d-2.75,d+2.75,-.02,1.85),m+3.16,m+3.39,r);for(const b of[d-2.25,d+2.25]){const[w,y]=p.point(b,1.47),E=Array.from({length:16},(T,C)=>{const D=C*2*Math.PI/16;return[w+Math.cos(D)*.2,y+Math.sin(D)*.2]});c.shell(E,m,m+3.16,r)}const[M,v]=p.point(d,.085);Ie(i,{text:"АНАПСКИЙ ГОРОДСКОЙ СУД",position:[M,m+2.91,v],size:[2.5,.36],outward:[p.uz,-p.ux],color:"#f8e7c7",background:"#8b2926",weight:700,lighting:"unlit"});const S=(b,w)=>{const y=p.point(b,w);return[y[0],e(...y)+.12,y[1]]};for(let b=2;b<18;b+=1){const w=Math.min(b+1,18);c.face("#c5bdae",S(d-1.45,b),S(d+1.45,b),S(d+1.45,w),S(d-1.45,w))}c.finish()}function Av(i,t,e){return t.id!=="142489077"?!1:(Tv(i,t.rings[0],e),!0)}function Rv(i,t,e){const n="#eee5d0",s="#e2dac6",o="#526e7c",r="#394b51",a="#c9c3b5",l="#987a73",c="#d2c8b5",u=me(i,"Бизнес-центр «Престиж»",{surfaces:{glass:[o,r],stone:[l],flatRoof:[a],metal:["#6e706d"],paving:[c]},textures:{[n]:{path:"art/lenin-prestige-cladding.webp",size:[3.2,2.4],amount:.95}}}),f=t.map((R,I)=>{const N=t[(I+1)%t.length],F=Math.hypot(N[0]-R[0],N[1]-R[1]),G=(N[0]-R[0])/F,H=(N[1]-R[1])/F;return{a:R,length:F,ux:G,uz:H,point:($,et=0)=>[R[0]+G*$+H*et,R[1]+H*$-G*et]}}),h=f[5],p=f[4],d=h.length/2,_=d-2,m=e(...h.point(d,1.6))+.04,g=Math.min(m,...t.map(([R,I])=>e(R,I)))-.45,x=m+7.5;u.shell(t,g,m+.2,"#b2a99a",null),u.shell(t,m+.2,x,n,null),u.shell(t,x,x+.24,s,a);function M(R,I,N,F,G,H,$=.035){u.wall(R.point(I,$),R.point(N,$),F,G,H)}function v(R,I,N,F,G){return[R.point(I,F),R.point(N,F),R.point(N,G),R.point(I,G)]}for(const R of[h,p]){const I=Math.max(2,Math.round(R.length/2.6));for(let N=0;N<I;N++){const F=R.length*N/I+.07,G=R.length*(N+1)/I-.07;M(R,F,G,m+3.68,x-.44,o,.045),M(R,F,F+.055,m+3.68,x-.44,s,.06),(R!==h||Math.abs((F+G)/2-_)>2.8)&&M(R,F,G,m+.38,m+3.02,r,.045)}M(R,.15,R.length-.15,m+3.22,m+3.44,s,.07)}const S=Math.min(6,(h.length-1)/2);M(h,d-S,d+S,m+2.75,m+3.68,s,.075),M(h,_-2.55,_+2.55,m+.57,m+3.05,r,.07);for(const R of[-1.7,0,1.7])M(h,_+R-.028,_+R+.028,m+.57,m+3.02,s,.085);for(let R=0;R<3;R++){const I=2.2-R*.52;u.shell(v(h,_-3.1,_+3.1,.08,I),m-.04+R*.19,m+.15+R*.19,l)}const b=Math.ceil(h.length);for(let R=0;R<b;R++){const I=h.length*R/b,N=h.length*(R+1)/b;for(const[F,G]of[[.1,2.5],[2.5,5.3]]){const H=v(h,I,N,F,G);u.face(c,...H.map(([$,et])=>[$,e($,et)+.08,et]))}}u.finish();const[w,y]=h.point(d,.09),E=[h.uz,-h.ux];Ie(i,{text:"БИЗНЕС ЦЕНТР ПРЕСТИЖ",position:[w,x+.43,y],size:[Math.min(17,h.length-1),.72],outward:E,color:"#a72b28",weight:700,lighting:"spot",glowColor:"#ffd8bb"});const[T,C]=h.point(d+.035,.083);Ie(i,{text:`АЛЛЕРГОЛОГИЯ
ИММУНОЛОГИЯ`,position:[T,m+3.19,C],size:[S*2,.95],outward:E,color:"#501d2c",weight:700,fontFamily:"Georgia, serif",lighting:"unlit"}),Ie(i,{text:`АЛЛЕРГОЛОГИЯ
ИММУНОЛОГИЯ`,position:[w,m+3.22,y],size:[S*2,.95],outward:E,color:"#922e44",weight:700,fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffdfce"});const[D,P]=h.point(d+7.5,.09);Ie(i,{text:"АПТЕКА",position:[D,m+2.88,P],size:[3.4,.58],outward:E,color:"#43427c",background:"#eee9dd",weight:700,lighting:"spot",glowColor:"#ddd9ff"})}function Cv(i,t,e){return t.id!=="223535757"?!1:(Rv(i,t.rings[0],e),!0)}function Pv(i,t,e){const n=t.buildings.find(b=>b.id==="142489050");if(!n)return;const s=n.rings[0],o=s[13],r=s[14];if(!o||!r)return;const a=Math.hypot(r[0]-o[0],r[1]-o[1]),l=(r[0]-o[0])/a,c=(r[1]-o[1])/a,u=[c,-l],f=12.1,h=(b,w=.13)=>{const y=f*2-b;return[o[0]+l*y+u[0]*w,o[1]+c*y+u[1]*w]},p=e(...Fe(s.slice(8))),d=h(f-6.85,.2),_=me(i,"Мацони — ул. Ленина, 3",{surfaces:{glass:["#202f30","#3d5150"],stone:["#262a29","#a59782"],wood:["#3d302c"],paving:["#b8b0a2","#b7ada0"]},textures:{"#bfc9b4":{path:"art/lenin-matsoni-mural.webp",repeat:!1,axes:{origin:[d[0],p+.31,d[1]],u:[-l/5.7,0,-c/5.7],v:[0,1/2.46,0]}}}}),m=(b,w,y,E,T,C=.13)=>_.wall(h(f+b,C),h(f+w,C),p+y,p+E,T);m(-7,7,.28,3.65,"#202f30"),m(-7,7,2.84,3.69,"#262a29",.16);for(const b of[-6.95,-1.1,.32,2.15,4.5,6.95])m(b-.055,b+.055,.28,2.84,"#262a29",.18);m(-1.02,.24,.32,2.72,"#202f30",.2),m(-.38,-.34,.86,1.66,"#a59782",.23),m(2.23,6.9,.3,1.03,"#e9e5d9",.19),m(2.23,6.9,1.05,2.76,"#3d5150",.19),m(4.49,4.54,1.05,2.76,"#262a29",.22),m(-6.85,-1.15,.31,2.77,"#bfc9b4",.2);const g=(b,w)=>{const[y,E]=h(f+b,w);return[y,e(y,E)+.15,E]};for(let b=-7;b<7;b+=1){const w=Math.min(b+1,7);for(let y=.3;y<9.3;y+=1){const E=Math.min(y+1,9.3);_.face("#b7ada0",g(b,y),g(w,y),g(w,E),g(b,E))}}const x=[h(f-1.12,.24),h(f+.34,.24),h(f+.34,1.25),h(f-1.12,1.25)],M=Math.max(...x.map(b=>e(...b)),p);_.shell(x,M-.12,M+.08,"#a59782"),_.finish();const[v,S]=h(f+1.5,.19);Ie(i,{text:"МАЦОНИ",position:[v,p+3.27,S],size:[5.2,.72],outward:u,color:"#fffdf6",weight:700,fontFamily:'"Comic Sans MS", cursive',lighting:"backlit",glowColor:"#fff0dc"})}const Lv=Object.freeze([{x:-504,z:-127,length:8,width:2.8,angle:-.357,type:"sail",accent:"#315774"},{x:-497,z:-124.4,length:9,width:3,angle:-.357,type:"sail",accent:"#a9604d"},{x:-490,z:-121.8,length:8,width:2.8,angle:-.357,type:"motor",accent:"#42738a"},{x:-483,z:-119.1,length:9,width:3,angle:-.357,type:"sail",accent:"#315774"},{x:-476,z:-116.5,length:8,width:2.8,angle:-.357,type:"motor",accent:"#a9604d"},{x:-469,z:-113.8,length:9,width:3,angle:-.357,type:"sail",accent:"#42738a"},{x:-462,z:-111.2,length:8,width:2.8,angle:-.357,type:"sail",accent:"#315774"},{x:-482,z:-83,length:7,width:2.5,angle:-.357,type:"motor",accent:"#315774"},{x:-474,z:-80.5,length:8,width:2.8,angle:-.357,type:"sail",accent:"#a9604d"},{x:-466,z:-77.5,length:7,width:2.5,angle:-.357,type:"motor",accent:"#42738a"},{x:-589.5,z:-340,length:15,width:4.2,angle:0,type:"port",accent:"#315774"},{x:-589,z:-306,length:10,width:3.5,angle:0,type:"motor",accent:"#a9604d"},{x:-587.7,z:-266,length:14,width:4,angle:0,type:"port",accent:"#42738a"},{x:-597.1,z:-203.6,length:14,width:4,angle:-.465,type:"port",accent:"#a9604d"},{x:-737,z:-275,length:12,width:3.5,angle:.45,type:"motor",accent:"#315774"},{x:-710.8,z:-222,length:8,width:2.8,angle:.45,type:"sail",accent:"#315774"}]);function Dv(i){const t="#ecefe8",e="#f5f3e9",n="#435d68",s="#78868a",o="#d9c9a9",r=me(i,"Суда в гавани и морском порту",{surfaces:{glass:[n],metal:[s],wood:[o],flatRoof:[e,t]}}),a=-.18;for(const l of Lv){const{x:c,z:u,length:f,width:h,angle:p,type:d,accent:_}=l,m=Math.sin(p),g=Math.cos(p),x=(N,F,G)=>[c+g*N+m*F,a+G,u-m*N+g*F],M=(N,F=1)=>[x(-h*.46*F,-f*.47,N),x(h*.46*F,-f*.47,N),x(h*.5*F,f*.04,N),x(h*.36*F,f*.3,N),x(0,f*.5,N),x(-h*.36*F,f*.3,N),x(-h*.5*F,f*.04,N)],v=M(-.16,.77),S=M(d==="port"?1.04:.72),b=M(.24,.91),w=M(.32,.92);for(let N=0;N<S.length;N++){const F=(N+1)%S.length;r.face(t,v[N],v[F],S[F],S[N]),r.face(_,b[N],b[F],w[F],w[N])}r.face(o,...S);const y=d==="port"?1.04:.72,E=(N,F,G,H,$)=>[x(F,H,N),x(G,H,N),x(G,$,N),x(F,$,N)],T=h*(d==="sail"?.31:.4),C=-f*(d==="sail"?.19:.29),D=f*(d==="sail"?.04:.14),P=d==="sail"?.43:d==="port"?1.65:1.05,R=E(y,-T,T,C,D),I=E(y+P,-T*.91,T*.91,C,D-f*.025);for(let N=0;N<4;N++)r.face(e,R[N],R[(N+1)%4],I[(N+1)%4],I[N]);if(r.face(e,...I),d!=="sail")for(const N of[-1,1]){const F=N*(T+.02);r.face(n,x(F,C+f*.04,y+P*.35),x(F,D-f*.04,y+P*.35),x(F*.93,D-f*.06,y+P*.82),x(F*.93,C+f*.04,y+P*.82))}if(d==="sail"){const N=f*1.12;r.beam(x(0,0,y),x(0,0,N),.08,s),r.beam(x(0,0,y+1.25),x(0,-f*.31,y+1.25),.09,s),r.beam(x(0,-f*.03,y+1.33),x(0,-f*.28,y+1.33),.19,e),r.beam(x(0,0,N-.25),x(0,f*.44,y+.1),.025,s),r.beam(x(0,0,N-.25),x(0,-f*.43,y+.1),.025,s)}else r.beam(x(0,C+f*.04,y+P),x(0,C+f*.04,y+P+1.5),.055,s),r.beam(x(-h*.42,f*.14,y+.4),x(-h*.34,f*.38,y+.4),.04,s),r.beam(x(h*.42,f*.14,y+.4),x(h*.34,f*.38,y+.4),.04,s)}r.finish()}const Iv=[{bounds:[-526,-150,-395,-110]},{bounds:[-463,-110,-395,-62]},{bounds:[-529,-96,-463,-64],outline:[[-526.29,-92.91],[-463,-69.3],[-464.22,-66.02],[-527.51,-89.63]]}];function nh(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+l*(o[0]-s[0]),s[1]+l*(o[1]-s[1])])}}return e}function Bu(i,[t,e,n,s]){for(const o of[r=>r[0]-t,r=>n-r[0],r=>r[1]-e,r=>s-r[1]])if(i=nh(i,o),i.length<3)return[];return i}function Uv(i,t){const e=t.reduce((s,o,r)=>{const a=t[(r+1)%t.length];return s+o[0]*a[1]-a[0]*o[1]},0),n=Math.sign(e);for(let s=0;s<t.length;s++){const o=t[s],r=t[(s+1)%t.length];if(i=nh(i,a=>n*((r[0]-o[0])*(a[1]-o[1])-(r[1]-o[1])*(a[0]-o[0]))),i.length<3)return[]}return i}function Nv(i){const t=[];for(const e of i.land){const n=e.map(([s,o])=>new xt(s,o));for(const s of bi.triangulateShape(n,[])){const o=s.map(r=>[n[r].x,n[r].y]);for(const{bounds:r,outline:a}of Iv){let l=Bu(o,r);if(a&&l.length>=3&&(l=Uv(l,a)),l.length<3)continue;const c=l.map(f=>f[0]),u=l.map(f=>f[1]);for(let f=Math.floor(Math.min(...c)/4)*4;f<Math.max(...c);f+=4)for(let h=Math.floor(Math.min(...u)/4)*4;h<Math.max(...u);h+=4){const p=Bu(l,[f,h,f+4,h+4]);for(const d of[1,-1]){const _=nh(p,m=>d*(f+h+4-m[0]-m[1]));for(let m=2;m<_.length;m++){const g=_[0],x=_[m-1],M=_[m],v=(x[0]-g[0])*(M[1]-g[1])-(x[1]-g[1])*(M[0]-g[0]);Math.abs(v)>1e-4&&t.push(v>0?[g,M,x]:[g,x,M])}}}}}}return t}function Fv(i,t,e){const n=[];for(const a of Nv(t))for(const[l,c]of a)n.push(l,e.faceHeight(l,c)+.12,c);const s=new Le;s.setAttribute("position",new se(n,3)),s.computeVertexNormals();const o=Bn(new te({color:"#a5a6a0",side:Je}),{surface:"road",strength:.25}),r=new ae(s,o);r.name="Серое покрытие причалов марины",r.receiveShadow=!0,i.add(r)}const Ov=Object.freeze([[-436.7,-8.4,6.7,2.5],[-425.3,-6.1,7.6,2.9],[-435.4,4.9,7.2,2.7],[-424.6,6.5,6.8,2.6],[-428.4,19.7,7.9,3],[-378.6,10.6,7.1,2.5],[-368,17.4,7.6,2.7],[-374.3,22.5,6.6,2.4],[-358.4,11.2,7.5,2.6],[-336,89.5,7,2.7],[-322,90,8.1,3.1],[-308,86.5,7.3,2.7],[-294,87,8,3],[-280,87,7.2,2.8],[-266,88,8.4,3.1],[-252,88.5,7.5,2.9],[-238,89,7.1,2.6],[-344,-.6,6.6,2.5],[-336,1.1,7.1,2.7],[-325,.6,6.7,2.5],[-229,35,6.8,2.5],[-227,48,7.4,2.7],[-205.8,40.5,7.2,2.6],[-201.7,54.8,7.8,2.9],[-201.7,68.4,6.8,2.6],[-190,74.3,7.7,2.8],[-181.3,32.7,7.2,2.6],[-166.5,40,7.9,2.9],[-151.7,41.8,7.1,2.6],[-141.2,51.8,6.9,2.5],[-172.8,54.8,8.1,3],[-162.3,65.4,7.5,2.8]]);function Bv([i,t],[e,n],[s,o]){const r=s-e,a=o-n,l=r*r+a*a,c=l?ue.clamp(((i-e)*r+(t-n)*a)/l,0,1):0;return Math.hypot(i-e-c*r,t-n-c*a)}function a0(i,t){let e=1/0;for(const n of t)for(let s=1;s<n.points.length;s++)e=Math.min(e,Bv(i,n.points[s-1],n.points[s])-(n.width??2)/2);return e}const zv=[[-435.4,4.9,1.25],[-424.6,6.5,1.25],[-428.4,19.7,1.4],[-378.6,10.6,1.35],[-368,17.4,1.4],[-374.3,22.5,1.35]];function kv(i,t,e){const n=Ov.filter(([f,h])=>a0([f,h],t.roads)>.95&&!t.trees.some(([p,d])=>Math.hypot(p-f,d-h)<3));if(!n.length)return;const s=new zn(new vn(.12,.19,1,6),Bn(new te({color:"#75634b"}),{surface:"wood",strength:.6}),n.length),o=new zn(new Pi(1,2),Bn(new te({color:"#ffffff",flatShading:!0}),{surface:"foliage"}),n.length),r=new be,a=["#557347","#647e4b","#48683d","#6d8753"];n.forEach(([f,h,p,d],_)=>{const m=e(f,h),g=p*.61;r.position.set(f,m+g/2,h),r.scale.set(1,g,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(_,r.matrix),r.position.set(f,m+p*.72,h),r.scale.set(d,p*.36,d*.92),r.rotation.set(0,_*1.37,0),r.updateMatrix(),o.setMatrixAt(_,r.matrix),o.setColorAt(_,new $t(a[_%a.length]))}),s.name="Стволы деревьев по спутниковому снимку",o.name="Кроны у Горгиппии по спутниковому снимку",o.castShadow=!0,o.receiveShadow=!0,i.add(s,o);const l=[];for(const[f,h,p]of zv){if(a0([f,h],t.roads)<p+.35)continue;const d=(m,g)=>{const x=f+Math.cos(m)*g,M=h+Math.sin(m)*g;return[x,e(x,M)+.16,M]},_=d(0,0);for(let m=0;m<12;m++)l.push(..._,...d((m+1)*Math.PI/6,p),...d(m*Math.PI/6,p))}const c=new Le;c.setAttribute("position",new se(l,3)),c.computeVertexNormals();const u=new ae(c,Bn(new te({color:"#718557",side:Je}),{surface:"ground",strength:.4}));u.name="Зелёные островки между дорожками",i.add(u)}const Gv=Object.freeze([[-1242.3,795.7,7.5,3.2],[-1234.3,791.9,8.4,3.5],[-1225.4,796.1,7.6,3],[-1227.9,809.4,8.2,3.5],[-1233.9,825.4,7.2,3],[-1252.9,828.6,6.8,2.8],[-1259.2,739.5,8,3.4],[-1248.7,744.8,7.5,3.1],[-1237,739.5,7,2.9],[-1228.6,750.1,8.3,3.4],[-1235.5,760.6,7.2,3],[-1248.7,764.8,8,3.4],[-1260.3,770.1,6.9,2.8],[-1246.5,778.6,7.6,3.2],[-1142.5,930.2,6.6,2.5],[-1124.9,927,7.2,2.8],[-1128.1,952.2,6.8,2.7],[-1113.7,969.5,6.5,2.5]]);function Hv([i,t],e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function Vv(i){return Gv.filter(([t,e])=>a0([t,e],i.roads)>1&&!i.buildings.some(n=>Hv([t,e],n.rings[0]))&&!i.trees.some(([n,s])=>Math.hypot(n-t,s-e)<3))}function Wv(i,t,e){const n=Vv(t);if(!n.length)return;const s=new zn(new vn(.12,.18,1,6),Bn(new te({color:"#6d604a"}),{surface:"wood",strength:.6}),n.length),o=new zn(new Pi(1,2),Bn(new te({color:"#ffffff",flatShading:!0}),{surface:"foliage"}),n.length),r=new be,a=["#466c43","#547449","#617d4b","#405d3b"];n.forEach(([l,c,u,f],h)=>{const p=e(l,c),d=u*.62;r.position.set(l,p+d/2,c),r.scale.set(1,d,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(h,r.matrix),r.position.set(l,p+u*.72,c),r.scale.set(f,u*.36,f*.94),r.rotation.set(0,h*1.4,0),r.updateMatrix(),o.setMatrixAt(h,r.matrix),o.setColorAt(h,new $t(a[h%a.length]))}),s.name="Деревья верхней набережной у маяка · стволы",o.name="Деревья верхней набережной у маяка · кроны",o.castShadow=o.receiveShadow=!0,i.add(s,o)}const Si="#eeece2",xs="#354552";function Nd(i,t){const e=Math.hypot(t[0]-i[0],t[1]-i[1]),n=(t[0]-i[0])/e,s=(t[1]-i[1])/e,o=(l,c)=>[i[0]+n*l-s*c,i[1]+s*l+n*c];return{point:o,project:([l,c])=>[(l-i[0])*n+(c-i[1])*s,(l-i[0])*-s+(c-i[1])*n],rectangle:(l,c,u,f)=>[o(l,u),o(c,u),o(c,f),o(l,f)]}}function zu(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);r>=0&&e.push(s),r<0!=a<0&&e.push(mt(s,o,r/(r-a)))}return e}function Xv(i,t,e){const{point:n,project:s,rectangle:o}=Nd(t[0],t[1]),r=t.map(y=>e(...y)),a=Math.max(...r),l=a+3.35,c="#c8bda8",u="#adada4",f=me(i,"Кубань",{surfaces:{flatRoof:[u],stone:[c]}});f.shell(t,Math.min(...r)-.22,l,c,u);const h=zu(t,y=>14-s(y)[0]),p=zu(t,y=>s(y)[1]-35.45);f.shell(h,l,a+6.7,Si,u),f.shell(p,l,a+6,"#d7d0c1",u);const d=14,_=89.4,m=9.02,g=25.57,x=o(d,_,m+1.05,g-1.05),M=Fe(x),v=2.95,S=l+8*v;f.shell(x,l,S,Si,u);const b=22,w=[m,g].map((y,E)=>{const T=E===0?1:-1,C=[];for(let D=0;D<b;D++){const P=d+(_-d)*D/b,R=d+(_-d)*(D+1)/b;C.push(n(P,y+T*.48),n(P+(R-P)*.4,y),n(R,y))}return C});for(let y=0;y<8;y++){const E=l+y*v;On(f,x[0],x[1],M,E+.96,E+2.62,3.45),On(f,x[2],x[3],M,E+.96,E+2.62,3.45);for(const C of w)for(let D=1;D<C.length;D++)f.wall(C[D-1],C[D],E+.24,E+.94,Si);const T=[[...w[0],n(_,m+1.07),n(d,m+1.07)],[...w[1],n(_,g-1.07),n(d,g-1.07)]];for(const C of T)f.shell(C,E,E+.24,Si)}f.shell(x,S,S+.45,Si,u),f.finish()}function ku(i,t,e,n,s,o,r){const a=[[t[0],n,t[1]],[e[0],n,e[1]]];for(let l=0;l<=8;l++){const c=Math.PI*l/8,[u,f]=mt(t,e,(1+Math.cos(c))/2);a.push([u,s+(o-s)*Math.sin(c),f])}i.face(r,...a)}function Ma(i,t,e,n,s,o,r){for(let a=0;a<r;a++){const l=f=>mt(t,e,(a+f)/r),c=[l(.15),l(.85)].map(f=>mt(n,f,1.006));ku(i,...c,s,s+o*.72,s+o,Si);const u=[l(.24),l(.76)].map(f=>mt(n,f,1.011));ku(i,...u,s+.12,s+o*.72,s+o-.2,"#314454")}}function qv(i,[t,e],n,s,o,r=!1){const a=n.map(([l,c])=>Array.from({length:s},(u,f)=>{const h=2*Math.PI*(f+.5)/s;return[t+c*Math.cos(h),l,e+c*Math.sin(h)]}));for(let l=1;l<a.length;l++)for(let c=0;c<s;c++){const u=(c+1)%s;i.face(o,a[l-1][c],a[l-1][u],a[l][u],a[l][c]),r&&c%2===0&&i.beam(a[l-1][c],a[l][c],.04,"#a98c4b")}}function Gu(i,[t,e],n,s){const o="#bc9e4f";i.beam([t,n,e],[t,n+s,e],.075,o),i.beam([t-.33,n+s*.67,e],[t+.33,n+s*.67,e],.065,o),i.beam([t-.22,n+s*.35,e],[t+.22,n+s*.43,e],.06,o)}function Yv(i,t,e){const[n,s,o,r]=t,a=(D,P)=>mt(mt(s,o,D),mt(n,r,D),P),l=(D,P,R,I)=>[a(D,R),a(P,R),a(P,I),a(D,I)],c=Fe(t),u=e(...c),f=Math.min(...t.map(D=>e(...D)))-.25,h="#3c9e9e",p="#a99973",d=me(i,"Свято-Онуфриевский храм",{surfaces:{flatRoof:[xs],glass:["#314454"],stone:[p]}}),_=l(.24,1,0,1),m=l(0,.35,.25,.75),g=Fe(_),x=Fe(m),M=u+5.9;d.shell(_,f,u+.6,p,null),d.shell(_,u+.6,M,h,null),d.shell(m,f,u+.6,p,null),d.shell(m,u+.6,u+6.45,h,null),d.shell(_.map(D=>mt(g,D,1.012)),M-.27,M,Si,null);for(const[D,P]of[[_[0],_[1]],[_[2],_[3]],[_[1],_[2]]])Ma(d,D,P,g,u+1.18,2.78,3);Ma(d,m[3],m[0],x,u+.55,3.1,1);const v=[a(.42,.5),a(.83,.5)].map(([D,P])=>[D,u+7.95,P]),S=_.map(([D,P])=>[D,M,P]);d.face(xs,S[0],S[1],v[1],v[0]),d.face(xs,S[1],S[2],v[1]),d.face(xs,S[2],S[3],v[0],v[1]),d.face(xs,S[3],S[0],v[0]);const b=u+6.65,w=u+10.35;d.shell(m,u+6.22,b,Si,null),d.shell(m,b,w,h,null),m.forEach((D,P)=>{Ma(d,D,m[(P+1)%m.length],x,b+.18,2.55,3)});for(const[D,P,R]of[[_,g,M],[m,x,w]])for(const I of D){const[N,F]=mt(P,I,1.006);d.beam([N,u+.6,F],[N,R,F],.35,Si)}const y=m.map(D=>mt(x,D,1.045)),E=[x[0],u+17.8,x[1]];y.forEach(([D,P],R)=>{const[I,N]=y[(R+1)%y.length];d.face(xs,[D,w,P],[I,w,N],E),d.beam([D,w,P],E,.055,"#88754c")}),Gu(d,x,E[1],1.42);const T=a(.68,.5),C=Array.from({length:8},(D,P)=>{const R=Math.PI*(P+.5)/4;return[T[0]+1.98*Math.cos(R),T[1]+1.98*Math.sin(R)]});d.shell(C,u+7.35,u+10.1,h,null),d.shell(C.map(D=>mt(T,D,1.08)),u+9.87,u+10.12,Si,null),C.forEach((D,P)=>Ma(d,D,C[(P+1)%C.length],T,u+8.22,1.42,1)),qv(d,T,[[10.12,1.98],[10.55,2.27],[11.25,2.32],[12.02,1.85],[12.63,1.02],[13.12,.47],[13.52,.16]].map(([D,P])=>[u+D,P]),12,xs,!0),Gu(d,T,u+13.5,1.35),d.finish()}function Zv(i,t,e){const{point:n,rectangle:s}=Nd(t[3],t[4]),o=Fe(t),r=t.map(T=>e(...T)),a=Math.max(...r),l="#d4b581",c="#cca873",u="#eadcbe",f="#a17a61",h="#aaa598",p="#625748",d="#986d59",_=me(i,"Мотылёк",{surfaces:{flatRoof:[h],metal:[p,d],stone:[f]}}),m=a+9.35;_.shell(t,Math.min(...r)-.25,a+.64,f,null),_.shell(t,a+.64,m,c,h);for(let T=0;T<3;T++){const C=a+.65+T*2.84;if(On(_,t[3],t[4],o,C+.65,C+2.43,3.9,c),On(_,t[11],t[12],o,C+.65,C+2.43,4,c),!T)continue;const D=s(.2,51.35,-.58,.04);_.shell(D,C-.24,C,u,l),_.wall(D[0],D[1],C+.68,C+.77,p);const P=s(9.18,42.7,16.97,17.52);_.shell(P,C-.24,C,u,l),_.wall(P[2],P[3],C+.68,C+.77,p)}const g=42.99,x=57,M=16.85,v=44.8,S=s(g,x,M,v),b=Fe(S),w=a+12.15;_.shell(S,m,w,c,null);for(const[T,C]of S.entries())On(_,C,S[(T+1)%S.length],b,m+.35,w-.35,4.3,c);const[y,E]=[M,v].map(T=>Array.from({length:11},(C,D)=>{const P=D/10,[R,I]=n(g-.27+(x-g+.54)*P,T);return[R,w+1.55*(1-(2*P-1)**2),I]}));for(let T=1;T<y.length;T++)_.face(d,y[T-1],E[T-1],E[T],y[T]);_.face(c,...y),_.face(c,...E),_.finish()}function $v(i,t,e){const n=t.parts?.filter(x=>x.levels>2)??[],s=t.parts?.filter(x=>x.levels===2)??[];if(n.length!==2||s.length!==2)return!1;const o=["#6f8a98","#8197a0","#627e8f","#718d9d"],r=me(i,"Колоннада",{surfaces:{flatRoof:["#b8bfbe"],glass:o,stone:["#d4d8d5"]}}),a=t.rings[0],l=a.map(x=>e(...x)),c=Math.max(...l),u=Math.min(...l)-.22,f=c+6.65,h="#d4d8d5",p="#b8bfbe",d="#a5adaf";for(const x of t.parts)r.shell(x.rings[0],u,f,d,p);const _=Fe(a);a.forEach((x,M)=>{const v=a[(M+1)%a.length];for(const S of[0,1]){const b=c+S*3.325;On(r,x,v,_,b+.42,b+2.87,2.4,"#c4c9c8")}});const m=["#9e7867","#9b8e65","#56768e"],g=2.95;for(const[x,M]of n.entries()){const v=M.rings[0],S=Fe(v),b=f+(M.levels-2)*g;r.shell(v,f,b,h,p),v.forEach((w,y)=>{const E=v[(y+1)%v.length],T=Math.hypot(E[0]-w[0],E[1]-w[1]),C=Math.max(1,Math.round(T/2.45)),D=T>9?.13:.16,P=G=>mt(S,mt(w,E,G),1.0035);for(let G=0;G<C;G++){const H=P(D+(1-2*D)*(G+.025)/C),$=P(D+(1-2*D)*(G+.975)/C);for(let et=2;et<M.levels;et++){const St=f+(et-2)*g,bt=et*7+y*11+G*5+x*9,rt=bt%29===0?m[G%m.length]:o[bt%o.length];r.wall(H,$,St+.15,St+g-.14,rt)}}if(T<13)return;const[R,I]=P(.15),[N,F]=P(.85);for(const[G,H]of[[R,I],[N,F]])r.beam([G,b,H],[G,b+1.45,H],.15,"#9ba5a8");r.beam([R,b+1.45,I],[N,b+1.45,F],.16,"#9ba5a8")})}return r.finish(),!0}function Kv(i,t,e){const n=t.rings[0];if(t.id==="223459472")Xv(i,n,e);else if(t.id==="142489074")Yv(i,n,e);else if(t.id==="223628174")Zv(i,n,e);else return t.id==="223628417"?$v(i,t,e):!1;return!0}function cn([i,t],e){return[i,e,t]}function Ko([i,t],e,n=e){return Array.from({length:8},(s,o)=>{const r=o*Math.PI/4;return[i+Math.cos(r)*e,t+Math.sin(r)*n]})}function Fd(i,t,e,n){i.shell(Ko(t,.13),e,e+.69,n,null),i.shell(Ko(t,.54),e+.69,e+.75,n);for(const s of[-1,1]){const o=[t[0]+s*.84,t[1]];i.shell(Ko(o,.18),e,e+.44,n,null),i.shell(Ko(o,.28),e+.44,e+.5,n),i.beam([o[0]+s*.23,e+.46,o[1]],[o[0]+s*.23,e+.87,o[1]],.08,n)}}function Jv(i,t,e,n,s){const o=(n.lowerWaterfront??n)(...Fe(e)),r=o+s,a="#ded4ba",l="#e5e0cf",c="#bfbaa8",u="#484740",f=[[e[1][0],-30.5],[e[2][0],-32.8],[e[3][0],-35.7]],h=f.map(([m,g])=>[m,g-2]),p=[e[0],...h,e.at(-1)];t.shell(p,o-.17,o+.23,a,"#aa9c80"),t.shell(p,r-.25,r,"#a8a393","#b6b2a5");for(let m=1;m<h.length;m++){const g=h[m-1],x=h[m];t.wall(g,x,o+.23,o+.75,a),t.wall(g,x,r-.43,r-.25,l),t.wall(f[m-1],f[m],o+.23,r-.25,"#4b5351");for(const v of[.79,1,1.19])t.beam(cn(g,o+v),cn(x,o+v),.053,u);const M=5;for(let v=0;v<M;v++){const S=(v+.5)/M,b=mt(g,x,S),w=cn(b,o+1.54),y=r-.42;t.beam(cn(b,o+.23),cn(b,r-.25),.16,a);for(const C of[-1,1]){const D=mt(g,x,S+C*.018),P=mt(g,x,S+C*.056);t.face(l,cn(b,y),cn(P,y),w),t.face(c,cn(P,y),cn(D,y-.8),w),t.face(l,w,cn(b,o+.77),cn(D,o+.77))}t.beam(cn([b[0],b[1]-.045],o+1.9),cn([b[0],b[1]-.045],o+2.12),.11,"#f2dcab");const[E,T]=mt(g,x,S+.09);Fd(t,[E,T+1.14],o+.23,"#88684d")}}const[d,_]=mt(h[0],h[1],.78);Ie(i,{text:"ПРИЧАЛ",position:[d,r-.54,_-.055],size:[3.08,.42],outward:[-.108,-.994],background:"#484740",color:"#f2e8d0",lighting:"unlit"})}function Qv(i,t,e,n){const s=n(-170,-63)+.26,o=Fe(e),r="#323a3e",a="#795b45",l=e.map(m=>mt(o,m,.82));t.shell(e,s-1.12,s+.39,"#666458");for(const[m,g,x,M]of[[e,.39,2.75,3.18],[e,3.18,5.93,6.52],[l,6.52,8.75,9.06]])t.shell(m,s+g,s+x,"#35494d",null),t.shell(m,s+x,s+M,r,"#777e7b"),m.forEach((v,S)=>{const b=m[(S+1)%m.length];On(t,v,b,o,s+g+.05,s+x,1.18,r)});const c=[[-185.1,-55.2],[-173,-69.3],[-163.5,-64],[-162.1,-47.2]],u=s+3.06,f=[c[0],[-188.8,-60.2],[-180.3,-72.6],c[1]];t.shell(f,s-.5,s+.11,"#888479","#aaa293"),t.shell(c,s-.52,s+.37,"#6a675d","#968477"),t.shell(c,u-.18,u,"#4c4035","#929895");const h=c.map(m=>mt(Fe(c),m,.94));t.shell(h,s+.37,u-.19,"#475958",null);for(let m=0;m<c.length;m++){const g=c[m],x=c[(m+1)%c.length],M=Math.ceil(Math.hypot(x[0]-g[0],x[1]-g[1])/2.55);for(let v=0;v<M;v++){const S=mt(g,x,v/M);t.beam(cn(S,s+.35),cn(S,u-.13),.2,a),t.beam(cn(mt(S,x,.03),u-.33),cn(mt(g,x,(v+.8)/M),u-.33),.035,"#dac797")}}for(const m of[[-185.6,-60.4],[-183.4,-64],[-180.8,-67.6]])Fd(t,m,s+.11,"#916e49");const p=[-177.7,-51.7],d=n(...p),_=Ko(p,.36,.52);t.shell(_,d-.08,d+2.31,a),Ie(i,{text:"ВИНО И МОРЕ",position:[p[0]-.365,d+1.28,p[1]],size:[1.02,.53],outward:[-1,0],background:"#5b4435",color:"#e7dac1",lighting:"unlit"})}const c0="#607680",jv={223948934:{address:"9",height:4.9,wall:"#c6b69f",roof:"#b6b1a5"},223948896:{address:"11",height:4.7,wall:"#b7a188",roof:"#777774"},223948899:{address:"13",height:4.6,wall:"#c4baaa",roof:"#cbc7bc"},223948902:{address:"15/1",height:4.45,wall:"#c0b4a2",roof:"#c4c0b5"},223948903:{address:"15/2",height:4.45,wall:"#bab0a1",roof:"#c4c0b5"},223948904:{address:"15/3",height:4.4,wall:"#baafa0",roof:"#c4c0b5"},223948906:{address:"17",height:4.35,wall:"#9c8471",roof:"#b3aba1"},223948908:{address:"19",height:3.65},223948913:{address:"21",height:3.75,wall:"#b4a18a",roof:"#a59c8b",name:"Хинкальная"},223948916:{address:"23",height:3.85,wall:"#85685b",roof:"#77716a",veranda:!0}};function t5(i){const t=i.reduce((e,n,s)=>{const o=i[(s+1)%i.length];return e+n[0]*o[1]-o[0]*n[1]},0);return i.map((e,n)=>[e,i[(n+1)%i.length]]).filter(([e,n])=>{const s=Math.hypot(n[0]-e[0],n[1]-e[1]);return s>=2&&(n[0]-e[0])*Math.sign(t)/s>.42})}function e5(i,t,e,{height:n,wall:s,roof:o,veranda:r}){const a=t5(t),l=e.lowerWaterfront??e,c=Math.min(...t.map(p=>l(...p))),u=c+n,f=Fe(t),h=r?t.map(p=>mt(f,p,.8)):t;i.shell(t,c-.24,c+.32,"#b2a798"),i.shell(h,c+.3,u-.28,s,null),i.shell(t,u-.28,u,o);for(const[p,d]of a){const _=Math.hypot(d[0]-p[0],d[1]-p[1]),m=Math.max(1,Math.round(_/(r?3.4:2.5))),g=mt(f,p,1.005),x=mt(f,d,1.005);for(let M=0;M<m;M++){const v=mt(g,x,(M+.12)/m),S=mt(g,x,(M+.88)/m);if(r){const b=mt(p,d,M/m);i.beam([b[0],c+.32,b[1]],[b[0],u-.26,b[1]],.16,s),i.beam([v[0],c+.97,v[1]],[S[0],c+.97,S[1]],.075,"#66645f");const w=mt(f,v,.8),y=mt(f,S,.8);i.wall(w,y,c+.65,u-.44,c0)}else i.wall(v,S,c+.55,u-.6,c0),i.beam([v[0],c+1.31,v[1]],[S[0],c+1.31,S[1]],.07,s)}r&&i.beam([d[0],c+.32,d[1]],[d[0],u-.26,d[1]],.16,s)}}function n5(i,t,e,n){const s=n?-361.1:-351.8,o=n?-354.7:-331,r=n?-29.5:-29.6,a=(e.lowerWaterfront??e)((s+o)/2,r),l=n?"#e1dbcc":"#ac8b65",c=n?"#244945":"#302723",u=(m,g,x=0)=>[n?s+o-m:m,a+g,r-x],f=(m,g,x,M)=>[[m,x],[g,x],[g,M],[m,M]],h=(m,g,x,M,v,S)=>{t.face(S,u(m,x,v),u(g,x,v),u(g,M,v),u(m,M,v))},p=(m,g,x,M,v,S)=>t.beam(u(m,x,M),u(g,x,M),v,S),d=(m,g,x,M,v,S)=>t.beam(u(m,g,M),u(m,x,M),v,S);t.shell(f(s,o,r,r+2.55),a+.12,a+5.36,l),h(s+.16,o-.16,3.72,5.16,.022,"#687c86");const _=n?4:12;for(let m=0;m<=_;m++)d(s+.16+(o-s-.32)*m/_,3.7,5.18,.041,.065,"#d6d1c7");if(p(s+.16,o-.16,4.47,.038,.068,"#d6d1c7"),n){const m=s+.42;h(m,m+1.16,.31,2.52,.034,"#755336"),h(m+.11,m+1.05,.95,2.41,.044,"#45534a"),h(m+.11,m+1.05,.35,.94,.044,c),h(s+2.02,o-.38,.47,2.46,.026,"#4e6355");for(let M=0;M<=3;M++)d(s+2.02+M*1.33,.45,2.48,.06,.12,"#79573b");const g=s+1.84,x=o-.22;t.face("#236a66",u(g,2.77),u(x,2.77),u(x,2.5,1.38),u(g,2.5,1.38)),h(g,x,2.34,2.5,1.38,"#286c67"),Ie(i,{text:"Adrian",position:u((g+x)/2,2.42,1.39),size:[1.48,.15],outward:[0,-1],color:"#f5e9ce",lighting:"unlit"}),Ie(i,{text:"Adrian  BISTRO",position:u((g+x)/2,3.15,.035),size:[3.98,.53],outward:[0,-1],background:"#536e55",color:"#f1d8a1",fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#ffca70"}),t.shell(f(s+.12,o-.08,r-1.65,r),a+.13,a+.31,"#b5a58c"),p(s+1.75,o-.15,1.14,1.53,.061,c);for(let M=0;M<=11;M++)d(s+1.75+M*.409,.31,1.14,1.53,.035,c);for(const M of[s+.3,s+1.72,o-.45]){const[v]=u(M,0),S=(w,y)=>Array.from({length:8},(E,T)=>[v+Math.cos(T*Math.PI/4)*w,r-y+Math.sin(T*Math.PI/4)*w]);t.shell(S(.24,.83),a+.31,a+.7,"#ab694f");const b=S(.3,.83);for(let w=0;w<b.length;w++){const y=b[w],E=b[(w+1)%b.length];t.face(w%2?"#345c46":"#40694d",[y[0],a+.66,y[1]],[E[0],a+.66,E[1]],[v,a+1.85,r-.83])}}for(const M of[s+2.7,s+4.56]){d(M,.31,1,.93,.075,"#765d41");const[v]=u(M,0);t.shell(f(v-.31,v+.31,r-1.15,r-.71),a+.98,a+1.03,"#8b6c4b")}}else{t.shell(f(s,o,r-1.2,r),a+.12,a+.31,"#786858"),t.face("#392e27",u(s,3.16),u(o,3.16),u(o,2.79,1.21),u(s,2.79,1.21)),h(s,o,2.62,2.79,1.21,"#3d2f28");const m=8,g=(o-s)/m;for(let x=0;x<m;x++){const M=s+g*x;h(M+.08,M+g-.08,.34,2.61,.032,x%3===0?"#587273":"#354d50"),d(M+.02,.31,2.68,1.13,.088,c),p(M+.12,M+g-.18,1.12,1.11,.07,"#7e5e42");for(let v=0;v<=5;v++)d(M+.12+(g-.3)*v/5,.31,1.12,1.11,.039,"#7e5e42")}d(o-.02,.31,2.68,1.13,.088,c),Ie(i,{text:"BAVARIA",position:u(-342.2,3.07,1.24),size:[5.9,.55],outward:[0,-1],color:"#f5e5ca",fontFamily:"Georgia, serif",lighting:"backlit"}),i5(i,t,e)}}function i5(i,t,e){const o=e(-332.9,-27.7)+.13;for(const a of[-1,1]){const l=-332.9+a*1.05;t.beam([l,o,-27.7],[l,o+2.58,-27.7],.08,"#606564")}const r=[[-332.9-1.12,-27.7-.05],[-332.9+1.12,-27.7-.05],[-332.9+1.12,-27.7+.05],[-332.9-1.12,-27.7+.05]];t.shell(r,o+1.61,o+2.64,"#593b2a");for(const a of[1.87,2.12,2.38])t.beam([-332.9-1.1,o+a,-27.7+.05],[-332.9+1.1,o+a,-27.7+.05],.008,"#492b21");t.beam([-332.9+.2,o+2.64,-27.7],[-332.9+.28,o+2.95,-27.7+.13],.029,"#31302f"),t.beam([-332.9+.23,o+2.95,-27.7+.13],[-332.9+.35,o+2.95,-27.7+.15],.052,"#31302f"),Ie(i,{text:"BAVARIA",position:[-332.9,o+2.26,-27.7+.061],size:[1.98,.42],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",glowColor:"#ffc882"}),Ie(i,{text:"GRILL&BAR",position:[-332.9,o+1.98,-27.7+.061],size:[1.2,.21],outward:[0,1],color:"#e2bc7d",fontFamily:"Georgia, serif",lighting:"spot",spill:!1})}function s5(i,t,e){const n=[-278.9,-35.55],s=[-260.3,-39.94],o=Math.hypot(s[0]-n[0],s[1]-n[1]),r=[(s[1]-n[1])/o,(n[0]-s[0])/o],a=mt(n,s,.61),l=(e.lowerWaterfront??e)(...a),c=(d,_=0)=>{const[m,g]=mt(n,s,d);return[m+_*r[0],g+_*r[1]]},u=(d,_,m=0)=>{const[g,x]=c(d,m);return[g,l+_,x]},f="#59606a",h="#313a43";t.wall(n,s,l+.13,l+3.39,f),t.wall(c(0,.022),c(1,.022),l+2.61,l+3.39,h);const p=[0,.1,.2,.3,.4,.49,.56,.66,.73,.82,.91,1];for(let d=1;d<p.length;d++){const _=p[d-1],m=p[d],g=d===7;t.wall(c(_,.038),c(m,.038),l+(g?.34:.63),l+2.6,g?"#334955":"#6b8596"),t.beam(u(_,g?.33:.62,.08),u(_,2.62,.08),.085,h),g||t.beam(u(_,2.11,.064),u(m,2.11,.064),.058,h)}t.beam(u(1,.62,.08),u(1,2.62,.08),.085,h),Ie(i,{text:"Хинкальная",position:u(.61,2.92,.051),size:[5.54,.56],outward:r,fontFamily:"Georgia, serif",lighting:"backlit",glowColor:"#e6f1ff"}),Ie(i,{text:"грузинская  Кафе  европейская",position:u(.61,3.26,.051),size:[4.06,.17],outward:r,fontFamily:"Georgia, serif",color:"#fff4e1",lighting:"spot",spill:!1})}function o5(i,t,e){const{id:n,rings:[s]}=t,o=jv[n];if(!o&&n!=="223949008")return!1;const r=n==="223949008"?"Вино и море":n==="223948908"?"Причал":o.name??`Набережная, ${o.address}`,a=me(i,r,{surfaces:{glass:[c0,"#687c86","#45534a","#4e6355","#587273","#354d50","#4b5351","#35494d","#475958","#334955","#6b8596"],wood:["#755336","#79573b","#765d41","#8b6c4b","#7e5e42","#88684d","#795b45","#916e49","#968477","#593b2a"],foliage:["#345c46","#40694d"],stone:["#b2a798","#b5a58c","#aa9c80","#aaa293"],flatRoof:[o?.roof,"#b6b2a5","#777e7b","#929895"],metal:["#244945","#302723","#484740","#323a3e"]}});return n==="223949008"?Qv(i,a,s,e):n==="223948908"?Jv(i,a,s,e,o.height):(e5(a,s,e,o),(n==="223948904"||n==="223948906")&&n5(i,a,e,n==="223948904"),n==="223948913"&&s5(i,a,e)),a.finish(),!0}function r5(i,t,e,n,s){const o=new Me;o.name="Вода фонтана «Старинная Анапа»",o.position.set(t,e,n),i.add(o);const r=new Wc(new O(.32,.08,0),new O(1.12,2.25,0),new O(1.95,.07,0)),a=new Eo(r,24,.025,5,!1),l=new Pn({color:"#b5e9ea",transparent:!0,opacity:.55,depthWrite:!1});for(let m=0;m<8;m++){const g=new ae(a,l);g.rotation.y=-m*Math.PI/4,o.add(g)}const c=7,u=new zn(new An(.065,6,4),new Pn({color:"#e6ffff",transparent:!0,opacity:.86,depthWrite:!1}),8*c);u.instanceMatrix.setUsage(Nf),u.frustumCulled=!1,o.add(u);const f=new qc(.96,1,40),h=Array.from({length:3},()=>{const m=new Pn({color:"#d9fbfa",transparent:!0,opacity:.3,side:Je,depthWrite:!1}),g=new ae(f,m);return g.rotation.x=-Math.PI/2,g.position.y=.012,o.add(g),g}),p=new be,d=new O;function _(m){for(let g=0;g<8;g++){const x=g*Math.PI/4;for(let M=0;M<c;M++){const v=(m*.53+M/c+g*.029)%1;r.getPoint(v,d),p.position.set(d.x*Math.cos(x),d.y,d.x*Math.sin(x));const S=.65+.35*Math.sin(Math.PI*v);p.scale.setScalar(S),p.updateMatrix(),u.setMatrixAt(g*c+M,p.matrix)}}u.instanceMatrix.needsUpdate=!0,h.forEach((g,x)=>{const M=(m*.34+x/h.length)%1;g.scale.setScalar(.55+M*2.05),g.material.opacity=.33*(1-M)})}_(0),s.push(_)}const Ze="#e9e5d8",Hl="#e6ddc8",Vl="#5e4b3b",Ia="#7a7c75",Sa="#594741",jc="#517789",to="#d8ded9";function Cr(i){const t=i.reduce((e,[n,s],o)=>{const[r,a]=i[(o+1)%i.length];return e+n*a-s*r},0);return i.map((e,n)=>{const s=i[(n+1)%i.length],o=s[0]-e[0],r=s[1]-e[1],a=Math.hypot(o,r),l=Math.sign(t),c=r*l/a,u=-o*l/a;return{a:e,b:s,length:a,nx:c,nz:u,point(f,h=0){return[e[0]+o*f/a+c*h,e[1]+r*f/a+u*h]}}})}function on(i,t,e,n,s){return[i.point(t,n),i.point(e,n),i.point(e,s),i.point(t,s)]}function ke(i,t,e,n,s,o,r,a=.045){i.wall(t.point(e,a),t.point(n,a),s,o,r)}function Hu(i,t,e,n,{spacing:s,fraction:o,sill:r,top:a,glass:l}){const c=Math.max(1,Math.round(t.length/s)),u=t.length/c;for(let f=0;f<n;f++){const h=e+f*2.7;for(let p=0;p<c;p++){const d=(p+.5)*u,_=u*o/2;ke(i,t,d-_-.08,d+_+.08,h+r-.08,h+a+.08,Ze),ke(i,t,d-_,d+_,h+r,h+a,l,.065),ke(i,t,d-.026,d+.026,h+r,h+a,Ze,.083)}}}function Vu(i,t,e,n,s,o,r,a){const l=(f,h)=>{const[p,d]=t.point(f,a);return[p,h,d]},c=l(e,s),u=12;for(let f=0;f<u;f++){const h=Math.PI*f/u,p=Math.PI*(f+1)/u;i.face(r,c,l(e+n*Math.cos(h),s+o*Math.sin(h)),l(e+n*Math.cos(p),s+o*Math.sin(p)))}}function a5(i,t,e,n,s,o){const r=s+.34,a=s+1.92;ke(i,t,e-n-.07,e+n+.07,r-.07,a,Ze),Vu(i,t,e,n+.07,a,.46,Ze,.045),ke(i,t,e-n,e+n,r,a,o,.065),Vu(i,t,e,n,a,.39,o,.065),ke(i,t,e-.025,e+.025,r,a+.37,Ze,.083),ke(i,t,e-n,e+n,a-.025,a+.025,Ze,.083)}function c5(i,t,e,n,s){const o=n+.15,r=(l,c)=>{const[u,f]=t.point(l,.09);return[u,c,f]},a=12;for(let l=0;l<a;l++){const c=Math.PI*l/a,u=Math.PI*(l+1)/a;i.face(Ze,r(e+o*Math.cos(c),s+.38*Math.sin(c)),r(e+o*Math.cos(u),s+.38*Math.sin(u)),r(e+n*Math.cos(u),s+.25*Math.sin(u)),r(e+n*Math.cos(c),s+.25*Math.sin(c)))}}function l0(i,[t,e],n,s,o){const r=a=>Array.from({length:10},(l,c)=>{const u=c*Math.PI/5;return[t+o*a*Math.cos(u),e+o*a*Math.sin(u)]});i.shell(r(1.27),n,n+.13,Ze),i.shell(r(1),n+.13,s-.2,Ze,null),i.shell(r(1.21),s-.2,s,Ze)}function l5(i,t,e,n){const s=Cr(t).filter(rt=>rt.length>.1),o=Fe(t)[1],r=s.filter(({a:rt,b:st,length:ct,nz:B})=>ct>27&&B<-.8&&(rt[1]+st[1])/2<o-5).sort((rt,st)=>Math.min(rt.a[0],rt.b[0])-Math.min(st.a[0],st.b[0]));if(r.length<2)return!1;const a=r[0].a,l=r.at(-1).b,c=l[0]-a[0],u=l[1]-a[1],f=Math.hypot(c,u),h={length:f,nx:u/f,nz:-c/f,point(rt,st=0){return[a[0]+c*rt/f+this.nx*st,a[1]+u*rt/f+this.nz*st]}},p=s.find(rt=>rt.length>8.7&&rt.length<10&&rt.nz<-.8);if(!p)return!1;const d=8.6,_=me(i,"Старинная Анапа",{surfaces:{glass:[jc,"#648591","#63767a","#4b5553"],flatRoof:[Sa],stone:["#a89b85"],metal:["#484b47","#535a58",Vl]},textures:{[Hl]:{path:"art/starinnaya-cladding.webp",size:[4,4],amount:.92,pixelated:!0},[Vl]:{path:"art/starinnaya-bronze-glass.webp",size:[4,3],amount:.8,pixelated:!0}}}),m=e(...h.point(h.length/2,.7))+.08,g=Math.min(m-.15,...t.map(rt=>e(...rt)-.25)),x=m+3.3,M=m+11.55,v=m+11.9;_.flat(on(h,0,h.length,.8,8.2),m-.045,"#bbb7aa");for(let rt=0;rt<h.length;rt+=.8)_.flat(on(h,rt,Math.min(rt+.024,h.length),.8,8.2),m-.037,"#aaa99f");for(let rt=1.6;rt<8.2;rt+=.8)_.flat(on(h,0,h.length,rt,rt+.024),m-.037,"#aaa99f");_.shell(t,g,m+.26,"#a89b85",null),_.shell(t,m+.26,M,Hl,null),_.shell(t,M,v,Ze,Sa);for(const rt of s){if(rt.length<4.8)continue;const st=rt.nz>.55,ct=rt===p;if(Hu(_,rt,x,ct?2:3,{spacing:st?3.4:3.12,fraction:st?.73:.57,sill:st?.49:.74,top:2.28,glass:st?"#648591":"#63767a"}),ct){const B=rt.length/3;for(let Z=0;Z<3;Z++)a5(_,rt,(Z+.5)*B,B*.57/2,x+2*2.7,"#63767a")}if(rt.length>7&&rt.length<8&&rt.nz<-.8){const B=rt.length/2,Z=(rt.a[0]+rt.b[0])/2<Fe(t)[0]?1:0;c5(_,rt,(Z+.5)*B,B*.57/2,x+2.7+2.28)}r.includes(rt)||Hu(_,rt,m+.26,1,{spacing:3.3,fraction:.58,sill:.55,top:2.62,glass:"#4b5553"})}for(const rt of[h]){const st=rt.length-.3,ct=on(rt,.3,st,-.1,.95);_.shell(ct,m+.35,x,"#524940",null);const B=rt===h?x-.83:x,Z=rt===h?x+.36:x+.24;_.shell(on(rt,0,rt.length,-.15,rt===h?1.49:1.22),B,Z,Ze);const ht=Math.round(rt.length/2.12);for(let yt=0;yt<ht;yt++){const V=.3+yt*(st-.3)/ht,at=.3+(yt+1)*(st-.3)/ht;ke(_,rt,V+.07,at-.07,m+.44,x-.1,Vl,.971),ke(_,rt,V+.018,V+.088,m+.44,x-.1,"#a0906d",.989)}}const S=h.length/2,b=S-6.2,w=S+6.2;ke(_,h,S-1.18,S+1.18,m+.3,x-.16,"#393f3d",1.015);for(const rt of[-1.18,0,1.18])ke(_,h,S+rt-.035,S+rt+.035,m+.3,x-.16,"#a0906d",1.03);for(const[rt,st]of[[-.83,-.76],[.29,.36]])_.shell(on(h,0,h.length,1.49,1.55),x+rt,x+st,Ze);const[y,E]=h.point(S,1.505);Ie(i,{text:"СТАРИННАЯ АНАПА",position:[y,x-.58,E],size:[16,.78],outward:[h.nx,h.nz],color:"#a0803f",weight:600,fontFamily:"Georgia, serif",letterSpacing:"16px",lighting:"spot",glowColor:"#ffddad"});for(const rt of[-4.95,-1.65,1.65,4.95])l0(_,h.point(S+rt,1.17),m+.16,x,.21),l0(_,h.point(S+rt,.85-d),x+.24,M-.08,.33);for(let rt=0;rt<3;rt++){const st=x+.24+rt*2.7;for(let ct=0;ct<3;ct++){const B=p.length*(ct+.5)/3,Z=on(p,B-1.23,B+1.23,-.03,.54);_.shell(Z,st,st+.14,Ze);for(const ht of[.28,1.03])ke(_,p,B-1.21,B+1.21,st+ht,st+ht+.045,"#484b47",.55);for(let ht=-5;ht<=5;ht++){const yt=B+ht*.22;ke(_,p,yt,yt+.036,st+.27,st+1.04,"#484b47",.55)}}}_.shell(on(h,b,w,-.08-d,1.2-d),M-.09,v+.39,Ze);const T=(rt,st)=>[rt[0],st,rt[1]],C=v+.39,D=v+2.24,P=T(h.point(S,1.2-d),D),R=T(h.point(S,-3.5-d),D),I=T(h.point(b,1.2-d),C),N=T(h.point(w,1.2-d),C);_.face(Ze,I,N,P),_.face(Sa,I,P,R,T(h.point(b,-3.5-d),C)),_.face(Sa,P,N,T(h.point(w,-3.5-d),C),R),_.face(Hl,T(h.point(b,-3.5-d),C),R,T(h.point(w,-3.5-d),C));for(const rt of[-1.83,-.61,.61,1.83]){const st=S+rt,ct=v+.02,B=Array.from({length:10},(Z,ht)=>{const yt=Math.PI/2+ht*Math.PI/5,V=ht%2?.105:.245;return T(h.point(st+Math.cos(yt)*V,1.225-d),ct+Math.sin(yt)*V)});for(let Z=0;Z<B.length;Z++)_.face("#a99973",T(h.point(st,1.225-d),ct),B[Z],B[(Z+1)%B.length])}for(const rt of r)for(const[st,ct]of rt===h?[[.25,b],[w,rt.length-.25]]:[[.25,rt.length-.25]]){ke(_,rt,st,ct,v+.39,v+.45,"#535a58",-.2);for(let B=st;B<ct;B+=1.7)ke(_,rt,B,B+.04,v,v+.45,"#535a58",-.2)}const F=on(h,S-19,S+19,7.9,17.5);_.flat(F,m-.09,"#bbb7aa");const[G,H]=h.point(S,13.3),$=m-.09,et=rt=>Array.from({length:32},(st,ct)=>{const B=ct*Math.PI/16;return[G+Math.cos(B)*rt,H+Math.sin(B)*rt]});_.shell(et(3.1),$-.12,$+.34,"#c5bfb2"),_.flat(et(2.75),$+.35,"#68a6ad"),_.shell(et(.27),$+.35,$+.43,"#c5bfb2"),r5(i,G,$+.36,H,n);for(const rt of[S-13,S+13]){const st=on(h,rt-1.05,rt+1.05,6,6.5);_.shell(st,m+.38,m+.48,"#4b4540");for(const ct of[-.8,.8]){const[B,Z]=h.point(rt+ct,6.25);_.beam([B,m-.04,Z],[B,m+.4,Z],.08,"#484b47")}}_.finish();const St=Bn(new te({color:"#776952"}),{surface:"wood"}),bt=Bn(new te({color:"#728e5e",flatShading:!0}),{surface:"foliage"});for(const[rt,st]of[[S-20,10],[S+20,10]]){const[ct,B]=h.point(rt,st),Z=e(ct,B),ht=new ae(new vn(.25,.39,4.8,7),St);ht.position.set(ct,Z+2.4,B);const yt=new ae(new Pi(3.1,1),bt);yt.scale.set(1.05,1.18,.92),yt.position.set(ct,Z+6.7,B),ht.castShadow=yt.castShadow=!0,i.add(ht,yt)}return!0}function h0(i,t,e,n,s,o=!1){for(const r of Cr(t))if(!(r.length<.35||o&&r.nz>.25))for(let a=0;a<n;a++){const l=e+a*2.62+.42,c=e+(a+1)*2.62-.31,u=Math.max(1,Math.round(r.length/1.48));for(let f=0;f<u;f++){const h=(f+.065)*r.length/u,p=(f+.935)*r.length/u;ke(i,r,h,p,l,c,jc),ke(i,r,h,p,l+(c-l)*.63,l+(c-l)*.63+.056,s,.067)}}}function Pr(i,t,e,n,s,o,r,a,l=1.35){const c=Math.max(1,Math.round((n-e)/l)),u=(n-e)/c;ke(i,t,e,n,s,o,a);for(let f=0;f<c;f++){const h=e+f*u+.045,p=h+u-.09;ke(i,t,h,p,s+.05,o-.05,r,.065),ke(i,t,h,p,o-.53,o-.48,a,.081)}}function Od(i,t,e,n,s,o,r){for(const l of[.45,.98])ke(i,t,e,n,s+l,s+l+.055,r,o);const a=Math.max(1,Math.ceil((n-e)/1.6));for(let l=0;l<=a;l++){const c=e+(n-e)*l/a,[u,f]=t.point(c,o);i.beam([u,s,f],[u,s+1.025,f],.06,r)}}function Bd(i,t,e,n,s,o,r,a){const l=(u,f,h)=>{const[p,d]=t.point(u,f);return[p,h,d]},c=Math.ceil((n-e)/.69);for(let u=0;u<c;u++){const f=e+u*(n-e)/c,h=e+(u+1)*(n-e)/c,p=u%2?r:a;i.face(p,l(f,0,s),l(h,0,s),l(h,o,s-.47),l(f,o,s-.47)),ke(i,t,f,h,s-.62,s-.47,p,o)}}function h5(i,t,e,n){const s=e.length*.46,o=s-5.25,r=s+5.25,a=n+.59,l=a+2.65;i.shell(on(e,o,r,-.08,4.55),n-.22,n,"#d7c7a9");for(let h=0;h<4;h++)i.shell(on(e,o+h*.27,r-h*.27,0,2.42-h*.48),n+h*.1475,n+(h+1)*.1475,"#dacbad");Pr(i,e,s-2.65,s+2.65,a,l-.13,"#354f52","#dbc693",.88);for(const h of[-4.34,4.34])l0(i,e.point(s+h,2.81),n,l,.17);const c=[[o,0],[r,0],[r,2.26],[r-.62,2.86],[r-2.17,3.26],[o+2.17,3.26],[o+.62,2.86],[o,2.26]];i.shell(c.map(([h,p])=>e.point(h,p)),l,l+.31,Ze,Ia);const[u,f]=e.point(s,3.28);Ie(t,{text:"Капитан",position:[u,l+.6,f],size:[3.1,.56],outward:[e.nx,e.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"})}function u5(i,t,e){if(t.length!==17)return!1;const n=me(i,"Капитан",{surfaces:{glass:[jc,"#54777f","#3f5e66"],flatRoof:[Ia,"#987561"],stone:["#a39881"]}}),s=t.slice(2,12),o=[t[2],...t.slice(11,16)],r=[...t.slice(0,3),...t.slice(15)],a=e.lowerWaterfront??e,l=Math.min(...t.map(v=>a(...v)))-.25,c=Math.min(...s.map(v=>a(...v)))+.12,[u,f]=Cr(o).slice(1,3),h=Cr(r).at(-1),p=e(...h.point(h.length*.46,4.55)),d=e(...f.point(f.length/2,2)),_=d+2.89;n.shell(t,l,c+.27,"#a39881",null),n.shell(o,c+.27,_,to,null),n.shell(o.map(v=>mt(Fe(o),v,1.032)),_,_+.28,to,"#987561"),h0(n,o,c+.1,2,to),Pr(n,u,.38,u.length-.38,c+5.48,_-.12,"#54777f","#cedad5",1.67),ke(n,u,.38,u.length-.38,d-.06,d+.05,to,.083);const m=on(u,.3,u.length-.3,-.07,1.03);n.shell(m,c+2.68,c+2.84,"#c3bfb4"),Od(n,u,.38,u.length-.38,c+2.84,.97,"#afb5b0"),Bd(n,u,.35,u.length-.35,c+5.36,1.24,"#b6a481","#d5c8a5"),Pr(n,f,1.03,f.length-.6,d+.14,_-.12,"#3f5e66",to),n.shell(on(f,.48,f.length-.12,0,1.26),_-.1,_+.32,Ze);const[g,x]=f.point(f.length*.57,1.28);Ie(i,{text:"Кафе Капитан",position:[g,_+.18,x],size:[5.2,.57],outward:[f.nx,f.nz],color:"#d49925",lighting:"spot",glowColor:"#ffd594"}),n.shell(s,c+.27,c+7.52,to,null);const M=s.map(v=>mt(Fe(s),v,1.046));return n.shell(M,c+7.52,c+7.85,Ze,Ia),h0(n,s,c-.03,3,Ze,!0),n.shell(r,c+.27,p+3.62,"#d9be8b",Ia),h5(n,i,h,p),n.finish(),!0}const f5={170958817:{number:1,roof:"#8a8f8d",wall:"#d5cbb6",frame:"#c8d4d2"},223948923:{number:5,roof:"#aca99d",wall:"#658195",frame:"#deddd3"},223948927:{number:7,roof:"#aaa492",wall:"#bcb29a",frame:"#dfd8bf"}};function d5(i,t,e,{number:n,roof:s,wall:o,frame:r}){const a=me(i,`Набережная, ${n}`,{surfaces:{glass:[jc,"#526870","#6c858b"],flatRoof:[s,"#c4c7c2"],stone:["#a99e88"]}}),l=e.lowerWaterfront??e,c=Cr(t).filter(_=>_.nz<-.52),u=c.map(_=>l(..._.point(_.length/2))),f=t.map(_=>l(..._)),h=Math.min(...f)-.25,p=Math.min(...u.length?u:f)+.11,d=p+5.51;if(a.shell(t,h,p+.27,"#a99e88",null),a.shell(t,p+.27,d,o,null),a.shell(t.map(_=>mt(Fe(t),_,1.02)),d,d+.24,r,s),n===1)h0(a,t,p+.15,2,r,!0);else for(const _ of c){const m=_.length-.36;if(Pr(a,_,.36,m,p+.42,p+2.71,"#526870",r),Pr(a,_,.36,m,p+3.03,d-.23,"#6c858b",r,1.47),n===5){const g=on(_,.15,_.length-.15,0,1.57);a.shell(g,p-.12,p+.41,"#aea69c");const x=on(_,.05,_.length-.05,0,1.68);a.shell(x,p+2.75,p+3.07,"#276583","#c4c7c2"),ke(a,_,.19,_.length*.47,p+2.77,p+3.06,r,1.7);const M=_.length*.22;Od(a,_,M+2.3,m,p+.41,1.48,"#c2c7c3"),a.shell(on(_,.15,M+2.28,1.54,2.01),p-.12,p+.23,"#a49e96");for(const v of[.33,_.length*.51,m])a.shell(on(_,v-.12,v+.12,1.32,1.56),p+.41,p+2.75,o)}else ke(a,_,.36,m,p+3.12,p+3.21,"#bc9d58",.085),Bd(a,_,.26,_.length-.26,d-.05,1.42,"#c8a851","#f0e6ca")}return a.finish(),!0}function p5(i,t,e,n=[]){if(t.id==="r11979734-0")return l5(i,t.rings[0],e,n);if(t.id==="156055903")return u5(i,t.rings[0],e);const s=f5[t.id];return s?d5(i,t.rings[0],e,s):!1}function m5(i,t){const[e,n]=ki[1],s=t(e,n),o=Math.cos(Gi),r=Math.sin(Gi),a=[r,-o],l=(v,S,b)=>[e+v*o+b*r,s+S,n+v*r-b*o];if(Ie(i,{text:"ГОРГИППИЯ",position:l(2.55,1.68,.345),size:[.39,.58],outward:a,color:"#3c3021",background:"#b99b62",weight:600,lighting:"unlit"}),typeof document>"u")return;const c=3.56,u=.65,f=document.createElement("canvas");f.width=768,f.height=Math.round(f.width*u/c);const h=f.getContext("2d");if(!h)return;const p="АРХЕОЛОГИЧЕСКИЙ МУЗЕЙ";h.font="600 39px system-ui, sans-serif";const d=Array.from(p,v=>h.measureText(v).width),_=f.width*.92,m=(_-d.reduce((v,S)=>v+S,0))/(p.length-1);let g=(f.width-_)/2;h.fillStyle="#292726",h.textAlign="center",h.textBaseline="middle";for(let v=0;v<p.length;v++){const S=g+d[v]/2,b=(S-f.width/2)/f.width;h.fillText(p[v],S,42+278*b**2),g+=d[v]+m}const x=new kc(f);x.colorSpace=rn,x.anisotropy=4;const M=new ae(new di(c,u),new te({map:x,alphaTest:.35}));M.name=p,M.position.set(...l(0,3.31,.066)),M.rotation.y=Math.atan2(...a),i.add(M)}function g5(i,t){const e=[],n=t/2;for(let s=1;s+1<i.length;s++){const[o,r]=i[s-1],[a,l]=i[s],[c,u]=i[s+1],f=[a-o,l-r],h=[c-a,u-l],p=Math.hypot(...f),d=Math.hypot(...h);if(p<.05||d<.05)continue;const _=(f[0]*h[1]-f[1]*h[0])/(p*d);if(Math.abs(_)<.001)continue;const m=_>0?-1:1;e.push([[a,l],[a-m*f[1]*n/p,l+m*f[0]*n/p],[a-m*h[1]*n/d,l+m*h[0]*n/d]])}return e}const{Color:Tn,Vector2:_5,Vector3:ih}=th,ze=24,zd=4,x5=2;function kd(i,t,e){return i.refinesStairs(t,e,ze)?x5:i.refines(t,e,ze)?zd:ze}const Bi={land:"#c6b899",beach:"#e0c893",park:"#8da371",water:"#6eabb5",pier:"#c5bdae",plaza:"#d0c1aa",ruins:"#aea27e",road:"#989891",path:"#d9ccb6",tree:"#7b9367",shingle:"#aaa495",rockLight:"#a59172",riprap:"#898a78",quay:"#aca99e"},Wu=["#c6b9a5","#b0aca1","#b8a08b","#ddd3ba","#9a9c93"],v5=["#e9deca","#ded6c7","#d6c5ad","#e4d8bf","#d8d6c7"],sh=new Set(["footway","pedestrian","steps","cycleway","path","track"]),Xu=new Set(["223948926"]),M5=[Ux,Nx,gv,Ev,Kv,o5,p5,Av,Cv];function vi(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[l,c]=e[o];a>t!=c>t&&i<(l-r)*(t-a)/(c-a)+r&&(n=!n)}return n}function pr(i){const t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e)]}function Jo(i,t,[e,n,s,o]){return i>=e&&i<=s&&t>=n&&t<=o}function S5(i,t,e=Ed(i)){const{bounds:[n,s,o,r],columns:a,rows:l,heights:c}=t,[u,f]=i.origin,[h,p]=i.scale;function d(b,w){const y=ue.clamp((u+b/h-n)/(o-n)*(a-1),0,a-1),E=ue.clamp((r-f+w/p)/(r-s)*(l-1),0,l-1),T=Math.min(Math.floor(y),a-2),C=Math.min(Math.floor(E),l-2),D=C*a+T,P=ue.lerp(c[D],c[D+1],y-T),R=ue.lerp(c[D+a],c[D+a+1],y-T);return Math.max(.16,ue.lerp(P,R,E-C))}function _(b,w){const y=new Map,E=(T,C)=>{const D=`${T}:${C}`;return y.has(D)||y.set(D,b(T,C)),y.get(D)};return(T,C)=>{const D=w(T,C),P=Math.floor(T/D)*D,R=Math.floor(C/D)*D,I=(T-P)/D,N=(C-R)/D,F=E(P+D,R),G=E(P,R+D);return I+N<=1?E(P,R)*(1-I-N)+F*I+G*N:E(P+D,R+D)*(I+N-1)+F*(1-N)+G*(1-I)}}const m=K_(i),g=_((b,w)=>m(b,w,d(b,w)),()=>ze),x=_((b,w)=>e.height(b,w,g),(b,w)=>kd(e,Math.floor(b/ze)*ze,Math.floor(w/ze)*ze)),M=(b,w)=>e.waterfront.nearEdge(b,w)||e.nearTransition(b,w)?e.height(b,w,g):x(b,w);return Object.assign(M,{plain:g,faceHeight:(b,w,y)=>y?e.height(b,w,g,y):M(b,w),lowerWaterfront:(b,w)=>e.waterfront.lowerGrade(b,w,M(b,w))})}function Wn(i=!1){const t=[],e=[],n=i?[]:null;return{triangle(s,o,r,a,l){t.push(...s,...o,...r),n&&n.push(...l);for(const c of[s,o,r]){const u=typeof a=="function"?a(...c):a;e.push(u.r,u.g,u.b)}},mesh(s,o=Je){const r=new Le;r.setAttribute("position",new se(t,3)),r.setAttribute("color",new se(e,3)),n&&r.setAttribute("facadeGrid",new se(n,3)),r.computeVertexNormals();const a=new ae(r,new te({vertexColors:!0,side:o}));return a.name=s,a.receiveShadow=!0,a}}}function En(i,t,e=1){return Bn(i.material,{surface:t,strength:e}),i}function y5(i){const t=i.material;return t.customProgramCacheKey=()=>"district-facade-grid",t.onBeforeCompile=e=>{e.uniforms.facadeEnabled=Ur.cartoonEnabled,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        ${Qc.replace("cartoonDistrict","windowGridDistrict")}
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
      `)},En(i,"plaster")}function Gd(i){const t=i.map(s=>s.map(([o,r])=>new _5(o,r))),e=bi.triangulateShape(t[0],t.slice(1)),n=t.flat().map(({x:s,y:o})=>[s,o]);return e.map(s=>s.map(o=>n[o]))}function u0(i,t,e,n){const[s,o,r]=t,a=(o[0]-s[0])*(r[1]-s[1])-(o[1]-s[1])*(r[0]-s[0]);if(Math.abs(a)<1e-4)return;const l=([c,u])=>[c,e(c,u),u];i.triangle(l(s),l(a>0?r:o),l(a>0?o:r),n)}function zi(i,t){const e=[];for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=t(s),a=t(o);if(r>=0&&e.push(s),r<0!=a<0){const l=r/(r-a);e.push([s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l])}}return e}function b5(i,t,e,n){let s=zi(i,o=>o[0]-t);return s=zi(s,o=>t+n-o[0]),s=zi(s,o=>o[1]-e),zi(s,o=>e+n-o[1])}function f0(i,t,e,n,s,o=!1){const[r,a,l,c]=pr(t);for(let u=Math.floor(r/ze)*ze;u<l;u+=ze){let f=zi(t,h=>h[0]-u);if(f=zi(f,h=>u+ze-h[0]),!(f.length<3))for(let h=Math.floor(a/ze)*ze;h<c;h+=ze){let p=zi(f,_=>_[1]-h);if(p=zi(p,_=>h+ze-_[1]),p.length<3)continue;const d=kd(s,u,h);for(let _=u;_<u+ze;_+=d)for(let m=h;m<h+ze;m+=d){const g=d===ze?p:b5(p,_,m,d);if(!(g.length<3))for(const x of[1,-1]){const M=zi(g,([S,b])=>x*(_+m+d-S-b));if(M.length<3)continue;const v=o?s.waterfront.split(M):null;if(!v){for(let S=2;S<M.length;S++)u0(i,[M[0],M[S-1],M[S]],e,n);continue}for(const{ring:S,side:b}of v){const w=(y,E)=>e(y,E,b);for(let y=2;y<S.length;y++)u0(i,[S[0],S[y-1],S[y]],w,n)}}}}}}function eo(i,t,e,n,s,o=!1){for(const r of Gd(t))f0(i,r,e,n,s,o)}function qu(i,t=[.36,.28]){const[e,n]=t;return i.material.customProgramCacheKey=()=>`promenade-${e}-${n}`,i.material.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
      `)},i}function Hd(i,t){return i.kind==="pier"||i.bridge?.85:t.waterfront.upperWidths[i.id]||t.waterfront.lowerWidths[i.id]||i.level?.15:sh.has(i.kind)?.35:.31}function w5(i,t,e,n){const{points:s,kind:o,id:r}=t,a=n.promenadeWidths.get(r)??t.width,l=n.stairHeight(t,e.plain);if(l){E5(i,s,a,l);return}const c=sh.has(o),u=n.waterfront.upperWidths[r]||t.level==="upper",f=n.waterfront.lowerWidths[r]||t.level==="lower",h=new Tn(u?"#b7b7b1":f?"#a9aaa5":n.promenadeWidths.has(r)?"#c5c3b8":o==="pier"?Bi.pier:c?Bi.path:Bi.road),p=Hd(t,n),d=(_,m,g)=>(n.rampHeight(t,_,m)??e.faceHeight(_,m,g))+p;for(let _=1;_<s.length;_++){const[m,g]=s[_-1],[x,M]=s[_],v=x-m,S=M-g,b=Math.hypot(v,S);if(b<.05)continue;const w=-S*a/(2*b),y=v*a/(2*b);f0(i,[[m+w,g+y],[x+w,M+y],[x-w,M-y],[m-w,g-y]],d,h,n,!0)}for(const _ of g5(s,a))f0(i,_,d,h,n,!0)}function Vd(i,t,{from:e,to:n,run:s}){const o=i.slice(1).map(([l,c],u)=>Math.hypot(l-i[u][0],c-i[u][1])),r=o.reduce((l,c)=>l+c,0);let a=0;return o.flatMap((l,c)=>{if(l<.04)return[];const[u,f]=i[c],h=i[c+1][0]-u,p=i[c+1][1]-f,d=a/r;a+=l;const _=a/r,m=[d,...s.filter(x=>x>d&&x<_),_],g=x=>ue.lerp(e,n,ue.clamp((x-s[0])/(s[1]-s[0]),0,1));return m.slice(1).map((x,M)=>{const v=m[M],S=(v-d)/(_-d),b=(x-v)/(_-d),w=g(v),y=g(x),E=Math.max(1,Math.round(Math.abs(y-w)/.17)),T=C=>ue.lerp(w,y,C/E)+.15;return{x:u+h*S,z:f+p*S,dx:h*b,dz:p*b,length:l*b,width:t,count:E,height:T}})})}function E5(i,t,e,n){const s=new Tn("#c5bdb0"),o=new Tn("#a69d90");for(const{x:r,z:a,dx:l,dz:c,length:u,count:f,height:h}of Vd(t,e,n)){const p=-c*e/(2*u),d=l*e/(2*u),_=(m,g,x)=>[r+l*m+p*x,g,a+c*m+d*x];for(let m=0;m<f;m++){const g=m/f,x=(m+1)/f,M=h(m),v=h(m+1),S=_(g,M,1),b=_(g,M,-1),w=_(x,M,-1),y=_(x,M,1),E=_(x,v,-1),T=_(x,v,1);i.triangle(S,b,w,s),i.triangle(S,w,y,s),i.triangle(y,w,E,o),i.triangle(y,E,T,o)}}}function T5(i,t){const e=i.surveyedStairs.flatMap(n=>Vd(n.points,n.width,i.stairHeight(n,t.plain)));return(n,s)=>{if(i.nearTransition(n,s)){for(const o of e){const{x:r,z:a,dx:l,dz:c,length:u,width:f,count:h,height:p}=o,d=((n-r)*l+(s-a)*c)/(u*u),_=((s-a)*l-(n-r)*c)/u;if(d>=0&&d<=1&&Math.abs(_)<f/2)return p(Math.min(h-1,Math.floor(d*h)))}for(const o of i.ramps)if(Jo(n,s,[o.bounds[0]-o.width,o.bounds[1]-o.width,o.bounds[2]+o.width,o.bounds[3]+o.width])&&sn(n,s,o.points).distance<o.width/2)return i.rampHeight(o,n,s)+Hd(o,i)}}}function A5(i,t,e,n){const s=t.buildings.find(c=>c.id==="170958806");if(!e||!s)return;const[o]=pr(s.rings[0]),r=[];for(let c=1;c<e.length;c++){const[u,f]=e[c-1],[h,p]=e[c],d=h-u,_=p-f,m=Math.hypot(d,_);for(let g=.8;g<m;g+=1.42){const x=u+d*g/m,M=f+_*g/m;if(!(x<o-122||x>-161.9))for(const v of[.9,2.15,3.4]){const S=Math.sin(g*6.13+c*13.7+v)*.35,b=x+_*(v+S)/m,w=M-d*(v+S)/m,y=n(b,w);y<2.55&&t.land.some(E=>vi(b,w,E))&&r.push([b,y,w,S])}}}const a=new zn(new Pi(1,0),new te({color:"#ada79a",flatShading:!0}),r.length);a.name="Каменная отсыпка у нижней набережной";const l=new be;r.forEach(([c,u,f,h],p)=>{l.position.set(c,u-.05,f),l.scale.set(.72+h*.5,.32+h*.31,.53-h*.3),l.rotation.set(h,p*1.71,h*1.3),l.updateMatrix(),a.setMatrixAt(p,l.matrix),a.setColorAt(p,new Tn().setScalar(.8+p%7*.055))}),a.receiveShadow=!0,i.add(En(a,"stone"))}function R5(i,t,e){const n=i.mesh("Terrain"),{position:s,normal:o}=n.geometry.attributes,r=new ih,a=3.2;for(let l=0;l<s.count;l++){if(o.getY(l)<.05)continue;const c=s.getX(l),u=s.getZ(l);if(e.waterfront.nearEdge(c,u))continue;const f=Math.floor(c/ze)*ze,h=Math.floor(u/ze)*ze;e.refines(f,h,ze)&&(r.set(t(c-a,u)-t(c+a,u),2*a,t(c,u-a)-t(c,u+a)).normalize(),o.setXYZ(l,r.x,r.y,r.z))}return o.needsUpdate=!0,n}function Yu(i,t,e,n=null){const{rings:s,height:o,id:r}=t,a=Number(String(r).match(/\d+$/)?.[0]??0)%Wu.length,l=new Tn(Wu[a]),c=new Tn(v5[a]),u=Math.max(...s[0].map(([d,_])=>e(d,_))),f=u+o,h=Math.max(1,Math.round(o/3.15)),p=o/h;for(const d of Gd(s))u0(i,d,()=>f,l);for(const[d,_]of s.entries()){const g=_.reduce((x,[M,v],S)=>{const[b,w]=_[(S+1)%_.length];return x+M*w-b*v},0)>0==d>0?_:_.slice().reverse();for(let x=0;x<g.length;x++){const[M,v]=g[x],[S,b]=g[(x+1)%g.length],w=[M,e(M,v)-.2,v],y=[S,e(S,b)-.2,b],E=[S,f,b],T=[M,f,v];if(n){const C=Math.hypot(S-M,b-v),D=Math.max(1,Math.round(C/3.2)),P=C>2.2&&o>2.65?1:0,R=[0,(w[1]-u)/p,P],I=[D,(y[1]-u)/p,P],N=[D,h,P],F=[0,h,P];n.triangle(w,y,E,c,[...R,...I,...N]),n.triangle(w,E,T,c,[...R,...N,...F])}else i.triangle(w,y,E,c),i.triangle(w,E,T,c)}}}function C5(i,t,e){if(!t.length)return;const n=new zn(new vn(.15,.24,2.4,5),new te({color:"#776952"}),t.length),s=new zn(new Pi(1,1),new te({color:Bi.tree,flatShading:!0}),t.length),o=new be;t.forEach(([r,a],l)=>{const c=1.5+l*17%13*.11,u=e(r,a);o.position.set(r,u+1.2,a),o.scale.set(1,1,1),o.updateMatrix(),n.setMatrixAt(l,o.matrix),o.position.y=u+2.6+c*.35,o.scale.set(c,c*1.23,c),o.rotation.y=l*1.4,o.updateMatrix(),s.setMatrixAt(l,o.matrix),s.setColorAt(l,new Tn().setScalar(.77+l*11%7*.047))}),s.castShadow=!0,s.receiveShadow=!0,i.add(En(n,"wood",.75),En(s,"foliage",1))}function P5(i,t){const[e,n,s,o]=t,r={time:{value:0},evening:{value:0},sun:{value:new ih(-.6,.55,-.5).normalize()},haze:{value:new Tn("#b3d5d5")},cartoonEnabled:Ur.cartoonEnabled,...P_()},a=new kn({uniforms:r,vertexShader:`
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
      ${Qc}
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
    `}),l=Math.max(s-e,o-n)*4,c=new ae(new di(l,l),a);return c.rotation.x=-Math.PI/2,c.position.set((e+s)/2,-.18,(n+o)/2),i.add(c),r}function L5(i,t,e){const n=new Md({canvas:i,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.autoUpdate=!1;const s=new F0,o=[];s.fog=new Oc("#b3d5d5",900,3200),s.background=new Tn("#b3d5d5");const r=Ed(t),a=S5(t,e,r),l=P5(s,t.bounds);Dv(s);const c=Wn(),u=new Tn(Bi.land),f=Object.fromEntries(["shingle","rockLight","riprap","quay"].map(k=>[k,new Tn(Bi[k])])),h=new Tn;function p(k,Y,K){const _t=r.tone(k,K,Y);if(!_t)return u;const[dt,Et]=_t;return h.copy(u).lerp(f[dt],Et)}const d=t.areas.some(({id:k})=>k===Pu),_=d?lv(a):null,m=pr(ys),g=(k,Y)=>d&&Jo(k,Y,m)&&vi(k,Y,ys);for(const k of t.land){const Y=d&&ys.every(([K,_t])=>vi(K,_t,k))?[ys]:[];eo(c,[k,...Y],a.faceHeight,p,r,!0);for(let K=0;K<k.length;K++){const[_t,dt]=k[K],[Et,Dt]=k[(K+1)%k.length],z=r.refines(_t,dt,ze)?zd:12,Qt=Math.max(1,Math.ceil(Math.hypot(Et-_t,Dt-dt)/z));for(let Kt=0;Kt<Qt;Kt++){const U=[_t+(Et-_t)*Kt/Qt,dt+(Dt-dt)*Kt/Qt],A=[_t+(Et-_t)*(Kt+1)/Qt,dt+(Dt-dt)*(Kt+1)/Qt],J=[U[0],a(...U),U[1]],nt=[A[0],a(...A),A[1]],lt=[U[0],-.4,U[1]],Mt=[A[0],-.4,A[1]];c.triangle(J,lt,nt,p),c.triangle(nt,lt,Mt,p)}}}const x=Wn(),M=Wn(),v=Wn(),S={beach:.13,park:.14,plaza:.2,ruins:.22,water:.24,pier:.7};for(const k of t.areas){if(k.id===Pu)continue;const Y=k.kind==="beach"&&(k.id==="368318892"||["pebblestone","gravel"].includes(k.surface)),K=new Tn(Y?Bi.shingle:Bi[k.kind]??Bi.park),_t=(Et,Dt,z)=>a.faceHeight(Et,Dt,z)+(S[k.kind]??.14),dt=k.kind==="pier"||k.kind==="plaza"?M:k.kind==="park"?v:x;eo(dt,k.rings,_t,K,r,!0)}const b=Wn(),w=Wn(),y=Wn(),E=Wn(),T=new Tn("#b7b7b1"),C=new Tn("#a9aaa5"),D=[];for(const k of r.waterfront.sections){for(const Y of k.upperDecks)D.push(Y),eo(E,[Y],(_t,dt)=>a.faceHeight(_t,dt,{section:k,upper:!0})+.12,T,r);for(const Y of k.lowerDecks)eo(y,[Y],(_t,dt)=>a.faceHeight(_t,dt,{section:k,upper:!1})+.12,C,r)}for(const k of r.allRoads){const Y=r.waterfront.upperWidths[k.id]&&!(k.id in r.waterfront.rampLevels),K=r.waterfront.lowerWidths[k.id],_t=Y?E:K?y:sh.has(k.kind)||k.kind==="pier"?w:b;w5(_t,k,a,r)}const P=Wn(),R=Wn(),I=Wn(!0),N=[Xo.west,Xo.north,Xo.east,Xo.south];for(const k of t.buildings)if(!Xu.has(k.id)){if(k.id==="125813145")Rx(s,k,a);else if(!M5.some(Y=>Y(s,k,a,o))){const[Y,K,_t,dt]=pr(k.rings[0]);Jo((Y+_t)/2,(K+dt)/2,N)?Yu(R,k,a,I):Yu(P,k,a)}}const F=P.mesh("OSM building footprints",li);F.castShadow=!0;const G=y5(I.mesh("Фасады квартала",li)),H=En(R.mesh("Крыши квартала",li),"flatRoof");if(G.castShadow=H.castShadow=!0,s.add(En(R5(c,a,r),"ground"),En(x.mesh("OSM surfaces"),"ground"),En(M.mesh("Площади и причалы"),"paving"),En(v.mesh("Скверы"),"foliage",.65),En(qu(y.mesh("Плитка нижней набережной"),[.24,.22]),"laidPaving"),En(qu(E.mesh("Плитка верхней набережной")),"laidPaving"),En(w.mesh("Пешеходные дорожки"),"paving",.8),En(b.mesh("OSM streets"),"road",.8),F,H,G),Fv(s,t,a),d){const k=Wn();$x(s,a,(K,_t,dt)=>eo(k,K,_t,dt,r)),s.add(En(k.mesh("Раскоп Горгиппии · уровни грунта"),"ground",.88));const Y=Wn();_.render(s,(K,_t,dt)=>eo(Y,K,_t,dt,r)),s.add(En(Y.mesh("Горгиппия · покрытия дорожек"),"paving",.7))}C5(s,t.trees,a),kv(s,t,a),Wv(s,t,a),Cx(s,t,a),xv(s,a),m5(s,a),sx(s,a),_x(s,a),yx(s,a),A5(s,t,r.gorgWater,a),j_(s,r,a),G_(s,a),W_(s,a),Pv(s,t,a);const $=O_(s,a),et=new $0("#eefbff","#b0a48b",1.65),St=new Q0("#fff5dd",2.25),[bt,rt,st,ct]=t.bounds,B=Math.max(st-bt,ct-rt)*.62;St.target.position.set((bt+st)/2,0,(rt+ct)/2),St.castShadow=!0,St.shadow.mapSize.set(2048,2048),Object.assign(St.shadow.camera,{left:-B,right:B,top:B,bottom:-B,near:1,far:5300}),St.shadow.camera.updateProjectionMatrix(),St.shadow.normalBias=1,St.shadow.bias=-15e-5,s.add(et,St,St.target);function Z(k){const Y=k==="sunset";$.setEnabled(Y),l.evening.value=Y?1:0;const K=Y?"#8993b4":"#b3d5d5";s.background.set(K),s.fog.color.set(K),l.haze.value.set(K),et.color.set(Y?"#becdf9":"#eefbff"),et.groundColor.set(Y?"#736b86":"#b0a48b"),et.intensity=Y?.73:1.65,St.color.set(Y?"#ffc18c":"#fff5dd"),St.intensity=Y?.81:2.25;const _t=Y?[-.95,.23,-.44]:[-.6,1,-.5];St.position.copy(St.target.position).add(new ih(..._t).multiplyScalar(1800)),l.sun.value.set(..._t).normalize(),n.shadowMap.needsUpdate=!0}Z("day");const ht=new Map,yt=60,V=(k,Y)=>`${k}:${Y}`;for(const{id:k,rings:Y}of t.buildings){if(Xu.has(k))continue;const[K,_t,dt,Et]=pr(Y[0]);for(let Dt=Math.floor(K/yt);Dt<=Math.floor(dt/yt);Dt++)for(let z=Math.floor(_t/yt);z<=Math.floor(Et/yt);z++){const Qt=V(Dt,z);ht.has(Qt)||ht.set(Qt,[]),ht.get(Qt).push({id:k,rings:Y,bounds:[K,_t,dt,Et]})}}const at=(k,Y)=>t.land.some(K=>vi(k,Y,K)),vt=t.areas.filter(k=>k.kind==="pier"),q=T5(r,a);function it(k,Y){if(!Jo(k,Y,t.bounds)||!at(k,Y)&&!vt.some(({rings:dt})=>vi(k,Y,dt[0]))||vi(k,Y,tx)||vi(k,Y,Ad))return null;const K=_?.walkHeight(k,Y,g(k,Y));return K===null||(ht.get(V(Math.floor(k/yt),Math.floor(Y/yt)))??[]).some(({id:dt,rings:Et,bounds:Dt})=>!Jo(k,Y,Dt)||!vi(k,Y,Et[0])||r.waterfront.deckRoofs.has(dt)&&D.some(z=>vi(k,Y,z))?!1:!Et.slice(1).some(z=>vi(k,Y,z)))?null:K??q(k,Y)??a(k,Y)}return{renderer:n,scene:s,terrain:a,light:Z,walkHeight:it,setCartoon:A_,walkable:(k,Y)=>it(k,Y)!==null,render(k,Y){l.time.value=Y;for(const K of o)K(Y);$.update(k),n.render(s,k)}}}const D5=new Set(["motorway","trunk","primary","secondary","tertiary","unclassified","residential","living_street","service"]);function I5({kind:i,access:t}){return i!=="steps"&&t?.car!==!1&&(D5.has(i)||t?.car===!0)}function d0(i,t,e){return(t-i.x)*i.ux+(e-i.z)*i.uz}function Zu(i,t,e){const n=Math.min(i.length,Math.max(0,d0(i,t,e)));return(t-i.x-n*i.ux)**2+(e-i.z-n*i.uz)**2}function U5(i,t,e){return i.road.barriers?.some(n=>{if(n.car!==!1)return!1;const[s,o]=n.position;return Math.hypot(t-s,e-o)<i.radius+.7&&Math.abs((t-s)*i.ux+(e-o)*i.uz)<.65})}function N5(i){const t=new Map,e=[],n=32,s=u=>Math.floor(u/n),o=(u,f)=>`${u}:${f}`;for(const u of i){const f=I5(u),h=u.access?.bicycle===!1,p=u.kind==="steps"||h||u.barriers?.length;if(!f&&!p)continue;const d=u.width/2;for(let _=1;_<u.points.length;_++){const[m,g]=u.points[_-1],[x,M]=u.points[_],v=x-m,S=M-g,b=Math.hypot(v,S);if(b<.01)continue;const w={x:m,z:g,ux:v/b,uz:S/b,length:b,radius:d,road:u,car:f,bikeCheck:p};f&&e.push(w);for(let y=s(Math.min(m,x)-d);y<=s(Math.max(m,x)+d);y++)for(let E=s(Math.min(g,M)-d);E<=s(Math.max(g,M)+d);E++){const T=o(y,E);t.has(T)||t.set(T,[]),t.get(T).push(w)}}}const r=(u,f)=>t.get(o(s(u),s(f)))??[];function a(u,f){let h=null,p=1/0;for(const d of r(u,f)){if(!d.car)continue;const _=d0(d,u,f);if(_<-.005||_>d.length+.005)continue;const m=Zu(d,u,f),g=Math.max(.4,d.radius-.45);m>g**2||m>=p||U5(d,u,f)||(p=m,h=d.road)}return h}function l(u,f){let h=!1;for(const p of r(u,f)){if(!p.bikeCheck||Zu(p,u,f)>p.radius**2)continue;const{road:d}=p;if(d.access?.bicycle===!1){if(d.access?.foot===!1)return"blocked";h=!0}d.kind==="steps"&&(h=!0);for(const _ of d.barriers??[])if(!(_.bicycle!==!1||Math.hypot(u-_.position[0],f-_.position[1])>.65)){if(_.foot===!1)return"blocked";h=!0}}return h?"push":"ride"}function c([u,f],h){let p=null,d=1/0;for(const _ of e){const m=d0(_,u,f);for(const g of[0,-4,4,-12,12]){const x=Math.min(_.length,Math.max(0,m+g)),M=_.x+_.ux*x,v=_.z+_.uz*x,S=(M-u)**2+(v-f)**2;if(S>=d)continue;const b=h(M,v);b!==null&&(d=S,p={x:M,z:v,height:b,heading:Math.atan2(_.ux,-_.uz)})}}return p}return{carAt:a,bicycleAt:l,nearestCarStart:c}}const{MathUtils:F5,Vector3:bc}=th,O5=new bc(0,1,0);function In(i){return new te({color:i,flatShading:!0})}function Ve(i,t,e,n=[0,0,0]){const s=new ae(t,e);return s.position.set(...n),i.add(s),s}function Xn(i,t,e,n,s){const o=new bc(...t),r=new bc(...e),a=r.clone().sub(o),l=Ve(i,new vn(n,n,a.length(),10),s);return l.position.copy(o).lerp(r,.5),l.quaternion.setFromUnitVectors(O5,a.normalize()),l}function ho(i,t,e,n){const s=new Vc(t.map(o=>new bc(...o)));return Ve(i,new Eo(s,14,e,8),n)}function $u(i,t,e){const n=t.flat(2),s=t[0].length,o=[];for(let a=0;a<t.length-1;a++)for(let l=0;l<s-1;l++){const c=a*s+l;o.push(c,c+1,c+s,c+1,c+s+1,c+s)}const r=new Le;return r.setAttribute("position",new se(n,3)),r.setIndex(o),r.computeVertexNormals(),Ve(i,r,e)}function B5(i){const t=In("#4ca9ab"),e=In("#283a3e"),n=In("#18292b"),s=In("#acbfc0"),o=In("#e5af59"),r=new Me,a=new Me;i.add(r),r.add(a),Xn(r,[0,-.3,-.27],[0,-.78,.4],.073,t),Xn(a,[0,0,.09],[0,-.3,-.25],.049,s),Xn(a,[0,-.31,-.25],[0,-.43,-.36],.066,t);for(const u of[-1,1]){const f=h=>h*u;Xn(a,[f(.066),-.34,-.27],[f(.061),-.82,-.57],.038,t),ho(a,[[0,0,.09],[f(.24),.012,.11],[f(.43),.075,.18],[f(.75),.09,.25]],.033,s),Xn(a,[f(.52),.079,.2],[f(.78),.092,.26],.052,e);for(const h of[.55,.61,.67,.73,.77]){const p=.205+(h-.53)*.21;Xn(a,[f(h),.081,p],[f(h+.015),.082,p+.004],.055,n)}ho(a,[[f(.48),.055,.16],[f(.54),.038,.04],[f(.69),.038,.1]],.018,s),ho(a,[[f(.48),.045,.15],[f(.35),-.18,-.08],[f(.07),-.4,-.28]],.009,n)}const l=Ve(a,new Ti(.35,.042,8,32),n,[0,-.82,-.57]);l.rotation.y=Math.PI/2;const c=Ve(a,new Ti(.3,.014,6,32),s,[0,-.82,-.57]);return c.rotation.y=Math.PI/2,Xn(a,[-.075,-.82,-.57],[.075,-.82,-.57],.036,s),Ve(a,new vn(.062,.067,.045,16),o,[-.37,.122,.14]),Xn(a,[-.38,.115,.16],[-.45,.105,.2],.012,o),r.position.set(0,-.48,-1.5),{group:r,front:a}}function z5(i){const t=In("#eee1ba"),e=In("#9b916c"),n=In("#303536"),s=In("#b7b8ab"),o=In("#202526"),r=In("#e7dbc2"),a=In("#f58b63"),l=new Me,c=new Me,u=new Me;i.add(l),l.add(c,u),$u(l,[[[-1.52,-.8,-1.12],[-.84,-.73,-1.12],[-.1,-.67,-1.12],[.66,-.68,-1.12],[1.38,-.74,-1.12],[1.98,-.82,-1.12]],[[-1.36,-.8,-2.25],[-.72,-.75,-2.25],[-.06,-.69,-2.25],[.65,-.7,-2.25],[1.32,-.76,-2.25],[1.85,-.83,-2.25]],[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[-.04,-.83,-3.28],[.65,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]]],t),ho(l,[[-1.17,-.92,-3.21],[-.65,-.86,-3.28],[.3,-.83,-3.28],[1.22,-.87,-3.28],[1.78,-.93,-3.21]],.014,e);for(const f of[-.77,1.3])ho(l,[[f,-.75,-1.42],[f,-.737,-2.14],[f*.93,-.844,-3.05]],.009,e);for(const f of[-.64,.38])Xn(l,[f,-.65,-1.69],[f+.48,-.65,-1.76],.014,n),Xn(l,[f+.23,-.65,-1.72],[f+.47,-.7,-1.5],.01,s);$u(l,[[[-1.9,-.89,-.67],[-.77,-.83,-.67],[.08,-.8,-.67],[.91,-.84,-.67],[2.05,-.89,-.67]],[[-1.92,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],[[-1.93,-.77,-1.56],[-.74,-.7,-1.56],[.07,-.67,-1.56],[.94,-.72,-1.56],[2.08,-.8,-1.56]]],n),ho(l,[[-1.9,-.74,-.96],[-.74,-.64,-.96],[.07,-.63,-.96],[.94,-.7,-.96],[2.06,-.77,-.96]],.018,s),Ve(l,new Be(2.12,.14,.065),s,[.52,-.65,-1.37]),Ve(l,new Be(.86,.24,.16),n,[-.25,-.55,-1.43]),Ve(l,new Be(.8,.177,.019),s,[-.25,-.55,-1.337]),Ve(l,new Be(.75,.143,.015),o,[-.25,-.55,-1.32]),Ve(l,new Be(.44,.046,.004),r,[-.25,-.519,-1.31]);for(let f=0;f<=16;f++){const h=-.455+f*.0255,p=f%2===0?.017:.008;Ve(l,new Be(.0035,p,.004),o,[h,-.497-p/2,-1.305])}for(const f of[-.542,.038])Ve(l,new Be(.088,.036,.004),r,[f,-.524,-1.31]),Xn(l,[f-.026,-.536,-1.304],[f+.01,-.51,-1.304],.0027,a);for(let f=0;f<6;f++){const h=In(["#b44e37","#95764c","#a44536","#548159","#a58746","#5b8798"][f]);Ve(l,new Be(.037,.018,.004),h,[-.42+f*.066,-.579,-1.308])}for(const f of[.43,.67]){Ve(l,new Be(.17,.105,.025),o,[f,-.645,-1.316]);for(let h=0;h<4;h++)Ve(l,new Be(.15,.007,.01),s,[f,-.676+h*.019,-1.3])}u.position.set(-.453,-.518,-1.299),Ve(u,new Be(.008,.035,.006),a),c.position.set(-.25,-.63,-1.1),Ve(c,new Ti(.295,.023,10,44),n),Ve(c,new Ti(.219,.008,6,36,Math.PI),s,[0,0,.022]).rotation.z=Math.PI;for(const f of[-1,1])Xn(c,[f*.061,-.018,.01],[f*.287,.01,0],.025,n),Xn(c,[f*.073,-.015,.035],[f*.212,.003,.023],.008,s);return Ve(c,new wo(.079,24),n,[0,0,.038]),Ve(c,new Ti(.033,.004,6,20),s,[0,0,.042]),Ve(c,new Be(.034,.024,.006),In("#a75444"),[0,0,.044]),{group:l,wheel:c,gaugeNeedle:u}}function k5(){const i=new F0,t=new ln(58,1,.04,10),e=new $0("#f7f7e9","#9ea8af",1.4),n=new Q0("#fff2d8",2);n.position.set(-2,4,2),i.add(e,n);const s=B5(i),o=z5(i);let r=0,a="";function l(c,{mode:u,aspect:f,turn:h,speed:p,time:d,delta:_,reducedMotion:m}){if(a!==u&&(r=0,a=u),s.group.visible=u==="bike",o.group.visible=u==="car",!s.group.visible&&!o.group.visible)return;t.aspect!==f&&(t.aspect=f,t.updateProjectionMatrix()),r=m?h:F5.damp(r,h,12,_);const g=Math.min(1,f/1.22),x=.1*(1-g);s.group.visible?(s.group.scale.x=g,s.group.position.y=-.48+x,m||(s.group.position.y+=Math.sin(d*11)*Math.min(.008,Math.abs(p)*.0015)),s.front.rotation.y=-r*.28,s.front.rotation.z=-r*.045):(o.group.scale.x=g,o.group.position.y=x,o.wheel.rotation.z=-r*.74,o.gaugeNeedle.position.x=-.453+Math.min(1,Math.abs(p)*3.6/160)*.407);const M=c.autoClear;c.autoClear=!1;try{c.clearDepth(),c.render(i,t)}finally{c.autoClear=M}}return{render:l}}function G5(i){const t=new Me;t.name="ВАЗ-2101 «Копейка»",t.visible=!1,i.add(t);const e=new hr({color:"#eee1ba",shininess:54,specular:"#a9a49b"}),n=new hr({color:"#c9cacc",shininess:90,specular:"#f2f5f4"}),s=new te({color:"#35342f"}),o=new te({color:"#232528"}),r=new hr({color:"#527176",shininess:68,specular:"#3b535a",side:Je}),a=new te({color:"#fff5d5",emissive:"#422d0d"}),l=new te({color:"#ecaa38"}),c=new te({color:"#b92d23"}),u=new te({color:"#a53830"});function f(P,R,[I,N,F],G=t){const H=new ae(P,R);return H.position.set(I,N,F),G.add(H),H}const h=(P,R,I,N,F,G,H,$)=>f(new Be(P,R,I),H,[N,F,G],$);function p(P,R,I,N){const F=new O(...P),G=new O(...R);f(new Be(I,I,F.distanceTo(G)),N,F.clone().add(G).multiplyScalar(.5).toArray()).lookAt(G)}function d(P){const R=new Le;R.setAttribute("position",new se(P.flat(),3)),R.setIndex([0,1,2,0,2,3]),R.computeVertexNormals(),f(R,r,[0,0,0]),P.forEach((I,N)=>p(I,P[(N+1)%P.length],.026,n))}const _=new Xc;_.moveTo(1.99,.42),_.lineTo(1.99,.8),_.lineTo(1.75,.89),_.lineTo(.71,.92),_.lineTo(-1.14,.89),_.lineTo(-1.98,.78),_.lineTo(-1.99,.39),_.lineTo(-1.62,.33);for(const P of[-1.212,1.212]){_.lineTo(P-.353,.29);for(let R=1;R<=12;R++){const I=Math.PI-R*Math.PI/12;_.lineTo(P+Math.cos(I)*.353,.29+Math.sin(I)*.337)}}_.lineTo(1.99,.42);const m=f(new Ir(_,{depth:1.49,bevelSize:.035,bevelThickness:.045,bevelSegments:2,steps:1}),e,[-.745,0,0]);m.rotation.y=Math.PI/2;const g=[-.724,.924,-.75],x=[.724,.924,-.75],M=[-.723,.891,1.13],v=[.723,.891,1.13],S=[-.609,1.414,-.43],b=[.609,1.414,-.43],w=[-.609,1.414,.72],y=[.609,1.414,.72];d([g,x,b,S]),d([v,M,w,y]),d([M,g,S,w]),d([x,v,y,b]),h(1.25,.047,1.2,0,1.423,.145,e);for(const P of[-1,1]){p([P*.72,.915,.16],[P*.618,1.41,.16],.044,e),p([P*.782,.688,-1.83],[P*.782,.688,1.83],.017,n);for(const R of[-.53,.39,1.12])p([P*.783,.426,R],[P*.783,.88,R],.009,s);for(const R of[.035,.91])h(.032,.033,.139,P*.791,.793,R,n);p([P*.74,.925,-1.23],[P*.84,1.021,-1.23],.024,n),P<0&&h(.148,.069,.061,-.846,1.037,-1.23,n),p([P*.6,.935,-.8],[P*.62,.855,-1.92],.013,n)}h(1.44,.228,.035,0,.704,-2.002,n),h(1.38,.192,.023,0,.704,-2.023,s);for(let P=0;P<6;P++)h(1.35,.008,.019,0,.627+P*.03,-2.039,n);h(.085,.09,.022,0,.704,-2.053,u);for(const P of[-1,1]){const R=P*.556;f(new vn(.136,.136,.038,24),n,[R,.712,-2.036]).rotation.x=Math.PI/2,f(new vn(.113,.113,.035,24),a,[R,.712,-2.057]).rotation.x=Math.PI/2,h(.173,.061,.028,R,.528,-2.023,l),h(.234,.128,.035,R,.669,2.014,n),h(.208,.101,.029,R,.669,2.037,c),h(.068,.097,.035,R+P*.066,.669,2.051,l);for(const I of[-2.058,2.047])h(.072,.133,.092,P*.457,.392,I,s)}h(1.62,.079,.112,0,.394,-2.054,n),h(1.62,.079,.112,0,.394,2.043,n),h(.3,.103,.028,0,.535,2.035,s),h(.26,.065,.012,0,.535,2.052,n),p([-.48,.93,-.759],[-.16,.955,-.745],.016,s),p([.12,.93,-.759],[.45,.955,-.745],.016,s);const E=[];for(const P of[-1.212,1.212])for(const R of[-1,1]){const I=new Me;I.position.set(R*.69,.288,P),t.add(I);const N=new Me;I.add(N);const F=(G,H,$,et)=>f(new vn(G,G,H,20),et,[$,0,0],N).rotation.z=Math.PI/2;F(.289,.198,0,o),F(.207,.024,R*.101,e),F(.135,.027,R*.123,n),F(.054,.029,R*.142,s),E.push({pivot:I,wheel:N,steer:P<0})}const T=f(new wo(1,28),new Pn({color:"#263137",transparent:!0,opacity:.24,depthWrite:!1}),[0,.031,0]);T.rotation.x=-Math.PI/2,T.scale.set(.96,2.08,1);const C=new ln(49,1,.22,4800),D=new O;return{cameraFor(P,{active:R,yaw:I,speed:N,turn:F,delta:G,terrain:H,angle:$,height:et,distance:St}){if(t.visible=R,!R)return P;const bt=P.position.y-1.45;t.position.set(P.position.x,bt,P.position.z),t.rotation.y=-I;for(const{pivot:st,wheel:ct,steer:B}of E)B&&(st.rotation.y=-F*.3),ct.rotation.x-=N*G/.289;t.updateMatrixWorld(!0);const rt=St*Math.max(1,.72/P.aspect);return t.localToWorld(C.position.set(Math.sin($)*rt,et,Math.cos($)*rt)),C.position.y=Math.max(C.position.y,H(C.position.x,C.position.z)+1.8),C.lookAt(t.localToWorld(D.set(0,.83,-Math.max(0,Math.cos($))*1.1))),C.aspect!==P.aspect&&(C.aspect=P.aspect,C.updateProjectionMatrix()),C}}}const H5=new O(0,1,0),Wl=new O,ya=new O;function Kn(i,t,e,n=[0,0,0]){const s=new ae(t,e);return s.position.set(...n),i.add(s),s}function Qo(i,t,e){Wl.set(...t),ya.set(...e).sub(Wl),i.position.copy(Wl).addScaledVector(ya,.5),i.scale.y=ya.length(),i.quaternion.setFromUnitVectors(H5,ya.normalize())}function Ke(i,t,e,n,s){const o=Kn(i,new vn(n,n,1,8),s);return Qo(o,t,e),o}function V5(i){const t=new Me;t.name="Велосипед с велосипедистом",t.visible=!1,i.add(t);const e=G=>new te({color:G,flatShading:!0}),n=e("#4ca9ab"),s=e("#1d2b2c"),o=e("#b4c1b8"),r=e("#3b4240"),a=e("#eee1ba"),l=e("#415760"),c=e("#cd9478"),u=e("#e5af59"),f=[0,.345,.54],h=[0,.92,-.38],p=[0,.39,.055],d=[0,.94,.21],_=new Me;_.position.set(...h),t.add(_);const m=.321;function g(G,H){const $=new Me;$.position.set(...H),G.add($),Kn($,new Ti(m,.024,8,36),s).rotation.y=Math.PI/2,Kn($,new Ti(.297,.008,6,36),o).rotation.y=Math.PI/2,Ke($,[-.047,0,0],[.047,0,0],.017,o);for(let et=0;et<14;et++){const St=et*Math.PI/7;Ke($,[et%2?.025:-.025,0,0],[0,Math.sin(St)*.295,Math.cos(St)*.295],.0026,o)}return $}const x=g(t,f),M=g(_,[0,-.575,-.17]);Ke(t,p,d,.027,n),Ke(t,p,[0,.78,-.36],.029,n),Ke(t,[0,.85,.195],[0,.86,-.37],.023,n),Ke(t,[0,.77,-.36],h,.036,n);for(const G of[-1,1]){const H=[G*.046,f[1],f[2]];Ke(t,[G*.033,.8,.19],H,.012,n),Ke(t,[G*.036,p[1],p[2]],H,.015,n),Ke(_,[G*.036,-.15,.026],[G*.043,-.575,-.17],.016,n),Ke(_,[0,.095,.042],[G*.34,.125,.13],.014,o),Ke(_,[G*.26,.119,.112],[G*.36,.13,.134],.022,s)}Ke(_,[0,0,0],[0,.095,.042],.022,o),Kn(_,new vn(.028,.031,.025,12),u,[-.23,.146,.103]),Kn(t,new An(1,12,8),r,[0,.95,.208]).scale.set(.082,.022,.123),Ke(t,[-.12,p[1],p[2]],[.12,p[1],p[2]],.015,o);const S=[0,1.34,-.074],b=[0,.96,.22],w=Kn(t,new An(1,12,8),a,[0,1.16,.065]);w.scale.set(.16,.232,.118),w.rotation.x=-.63,Kn(t,new An(1,12,8),l,b).scale.set(.138,.085,.104),Ke(t,[0,1.31,-.087],[0,1.45,-.169],.059,c),Kn(t,new An(.093,12,8),c,[0,1.49,-.167]).scale.y=1.11,Kn(t,new An(1,14,9),u,[0,1.554,-.178]).scale.set(.113,.075,.121),Kn(t,new An(1,12,8),r,[0,1.541,-.271]).scale.set(.093,.017,.041);const C=[-1,1].map(G=>{const H=[G*.118,S[1],S[2]],$=[G*.225,1.17,-.16],et=[G*.31,1.05,-.25],St=[G*.095,b[1],b[2]],bt=[G*.14,.71,-.21],rt=[G*.12,p[1],p[2]];return{side:G,elbow:$,forearm:Ke(t,$,et,.031,c),sleeve:Ke(t,H,$,.045,a),thigh:Ke(t,St,bt,.057,l),shin:Ke(t,bt,rt,.041,l),crankArm:Ke(t,[G*.085,p[1],p[2]],rt,.012,o),shoe:Kn(t,new Be(.084,.058,.163),r,rt)}}),D=Kn(t,new wo(1,22),new Pn({color:"#203138",transparent:!0,opacity:.16,depthWrite:!1}),[0,.027,0]);D.rotation.x=-Math.PI/2,D.scale.set(.245,.87,1);const P=new ln(52,1,.18,4800),R=new O,I=new O;let N=0,F=0;return{cameraFor(G,{active:H,yaw:$,speed:et,turn:St,delta:bt,terrain:rt,angle:st,height:ct,distance:B}){if(t.visible=H,!H)return G;t.position.set(G.position.x,G.position.y-1.65+.12,G.position.z),t.rotation.y=-$,_.rotation.y=-St*.34,_.updateMatrix();const Z=et*bt/(m+.024);N=(N-Z)%(Math.PI*2),F=(F-Z*.4)%(Math.PI*2),x.rotation.x=M.rotation.x=N;for(const{side:yt,elbow:V,forearm:at,thigh:vt,shin:q,crankArm:it,shoe:k}of C){I.set(yt*.316,.125,.126).applyMatrix4(_.matrix),Qo(at,V,I.toArray());const Y=F+(yt>0?Math.PI:0),K=[yt*.123,p[1]+.143*Math.cos(Y),p[2]+.143*Math.sin(Y)],_t=[yt*.143,.68+.078*Math.cos(Y),-.216+.035*Math.sin(Y)];Qo(vt,[yt*.095,b[1],b[2]],_t),Qo(q,_t,K),Qo(it,[yt*.085,p[1],p[2]],K),k.position.set(K[0],K[1]+.018,K[2]-.038)}t.updateMatrixWorld(!0);const ht=B*.59*Math.max(1,.62/G.aspect);return t.localToWorld(P.position.set(Math.sin(st)*ht,ct*.68,Math.cos(st)*ht)),P.position.y=Math.max(P.position.y,rt(P.position.x,P.position.z)+1.4),P.lookAt(t.localToWorld(R.set(0,.8,-Math.max(0,Math.cos(st))*.52))),P.aspect!==G.aspect&&(P.aspect=G.aspect,P.updateProjectionMatrix()),P}}}const Ku=1.4;function p0(i,t){const e=Math.min(Ku,Math.max(-Ku,t));return[Math.sin(i)*Math.cos(e),Math.sin(e),-Math.cos(i)*Math.cos(e)]}function wc(i,t,e,n){return Math.min(Math.max(n,t),Math.max(Math.min(e,t),i))}function Ju({position:i,yaw:t,pitch:e,longitudinal:n,lateral:s,distance:o,ground:r,clearance:a,ceiling:l=1/0,bounds:c}){let[u,f,h]=i;const p=Math.hypot(n,s);if(!p||!(o>0))return[u,f,h];const[d,_,m]=p0(t,e),g=[(d*n+Math.cos(t)*s)/p,_*n/p,(m*n+Math.sin(t)*s)/p],x=Math.max(l,f),M=Math.max(1,Math.ceil(o/4));for(let v=0;v<M;v++){const S=u,b=h;if(u+=g[0]*o/M,h+=g[2]*o/M,c){const[w,y,E,T]=c;u=wc(u,S,w,E),h=wc(h,b,y,T)}f=Math.min(x,Math.max(r(u,h)+a,f+g[1]*o/M))}return[u,f,h]}function W5(i,t,[e,n,s,o]){let r=0,a=1/0;for(const[l,c,u,f]of[[i[0],t[0],e,s],[i[2],t[2],n,o]]){if(Math.abs(c)<1e-9){if(l<u||l>f)return null;continue}const h=(u-l)/c,p=(f-l)/c;r=Math.max(r,Math.min(h,p)),a=Math.min(a,Math.max(h,p))}return r<=a?[r,a]:null}function X5(i,t,{ground:e,bounds:n,near:s,far:o}){const r=Math.max(1,i[1]-e(i[0],i[2])),a=q5(i,t,e,o)??r/Math.max(.05,-t[1]);let l=Math.min(o,Math.max(s,a));const c=n&&W5(i,t,n);return c&&c[1]>=s&&(l=Math.min(Math.max(l,c[0],s),c[1],o)),l}function q5(i,t,e,n){const s=a=>i[1]+t[1]*a-e(i[0]+t[0]*a,i[2]+t[2]*a);let o=0,r=0;for(let a=0;a<96&&r<n;a++){if(r=Math.min(n,o+Math.max(1.5,s(o)*.7)),s(r)<=0){for(let l=0;l<12;l++){const c=(o+r)/2;s(c)>0?o=c:r=c}return r}o=r}return null}const ns=document.querySelector("#world"),Qu=document.querySelector("#status"),jo=i=>[...document.querySelectorAll(`[data-${i}]`)].filter(t=>t instanceof HTMLButtonElement),ju=(i,t)=>{for(const e of jo(i))e.setAttribute("aria-pressed",String(e.dataset[i]===t))};async function tf(i){const t=await fetch(`./data/${i}.json`);if(!t.ok)throw new Error(`Не удалось загрузить ${i} (${t.status}).`);return t.json()}function Y5(i,t){const{Vector3:e,MathUtils:n}=th,s=L5(ns,i,t),o=N5(i.roads),r=k5(),a=G5(s.scene),l=V5(s.scene),c=new ln(46,1,.35,4800),u=new i_(c,ns),f=matchMedia("(prefers-reduced-motion: reduce)").matches;u.enableDamping=!f,u.dampingFactor=.13,u.minDistance=28,u.maxDistance=3300,u.maxPolarAngle=Math.PI*.48,u.zoomSpeed=.8,u.screenSpacePanning=!1;const[h,p,d,_]=i.bounds,m=[h,p,d,_],[g,x]=i.origin,[M,v]=i.scale,S=document.querySelector("#compass"),b=document.querySelector("#coordinates"),w=document.querySelector("#vehicle-speed"),y=document.querySelector("#cartoon-style"),E=document.querySelector("#vehicle-view"),T=document.querySelector("#superman-flight"),C=document.querySelector("#mode-help"),D=document.querySelector("#places"),P=document.querySelector("#venues"),R=document.querySelector("#pins"),I={orbit:"Стрелки или WASD — лететь. Shift — ускорение. Тяните, чтобы повернуть карту. Колесо — масштаб.",walk:"WASD или стрелки — идти. Shift — бег. Тяните по сцене, чтобы оглянуться.",bike:"Стрелки или WASD — движение и руль. V — сменить камеру. На лестнице — пешком.",car:"↑/↓ или W/S — газ и задний ход. ←/→ или A/D — руль. V — сменить камеру.",map:"Север вверху. Тяните карту, чтобы сдвинуть её.",superman:"WASD или стрелки — лететь туда, куда смотрите: вверх — набор высоты, вниз — снижение. Тяните, чтобы оглянуться."},N=3,F=1.8,G=3400,H={walk:{eye:1.75,fov:68},bike:{eye:1.65,fov:70,speed:6.8,reverse:2.2,steer:1.9},car:{eye:1.45,fov:73,speed:10.5,reverse:3.1,steer:1.6}},$={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"},et=[{id:"paintedWaterfront",name:"Парк-отель — Анапа-Океан",position:[-376,-15],walk:{position:[-348,-36],look:[-278,-43]}},{id:"upperWaterfront",name:"Верхняя набережная",position:[-348,-13],walk:{position:[-349,-19.4],look:[-265,-22]}},{id:"lowerWaterfront",name:"Нижняя набережная",position:[-348,-36],look:[-278,-43]},{id:"queuePavilion",name:"Лаундж-зона Qúeue",position:[-412.5,-21.7],walk:{position:[-414,-12],look:[-412,-21.7]}},{id:"pearlFountain",name:"Жемчужина Анапы",position:[-238,2],walk:{position:[-255,-5],look:[-238,2]}},{id:"gorgMuseum",name:"Музей «Горгиппия»",position:[-282,17],walk:{position:[-282,9],look:[-282,17],pitch:.17}},{id:"oldAnapa",name:"Старинная Анапа",position:[-503.2,-11.6],walk:{position:[-506,-38],look:[-503.2,-11.6],pitch:.13}},{id:"cityCourt",name:"Анапский городской суд",position:[-626,51],walk:{position:[-614,43],look:[-626,51],pitch:.1}},{id:"prestige",name:"Бизнес-центр «Престиж»",position:[-605,95.5],walk:{position:[-594,110],look:[-605,95.5],pitch:.1}},{id:"leninStreet",name:"Улица Ленина",position:[-636.1,0],walk:{position:[-636.1,0],look:[-646.63,-15.23],pitch:0}},{id:"marina",name:"Яхтенная марина",position:[-482,-107],walk:{position:[-452,-76],look:[-482,-107],pitch:-.1}}],bt=["paintedWaterfront","lighthouse","malaya","port","marina","ocean","oldAnapa","upperWaterfront","lowerWaterfront","queuePavilion","gorgippia","gorgMuseum","parkHotel","sails","pearlFountain","gates","beach","cityCourt","prestige","leninStreet"].map(Q=>{const wt=i.landmarks.find(oe=>oe.id===Q)??et.find(oe=>oe.id===Q);if(Q==="parkHotel")return{...wt,walk:{position:[-167,-27],look:[-169,-7.5],pitch:.58}};if(Q==="ocean")return{...wt,walk:{position:[-591.8,-23],look:[-587.5,-17.2],pitch:.45}};if(wt?.id!=="sails")return wt;const[At,Bt]=ao,zt=x-Bt/v,ne=g+At/M;return{...wt,position:ao,pinHeight:5.85,walk:{position:[-306,-22],look:ao},osm:`https://www.openstreetmap.org/#map=19/${zt.toFixed(6)}/${ne.toFixed(6)}`}}).filter(Boolean),rt={lighthouse:{aim:[-9,0],offset:[-146,115,102]},malaya:{aim:[-34,35],offset:[-219,151,-43]},ocean:{aim:[7,-6],offset:[-93,103,-176],raise:14},marina:{aim:[0,0],offset:[-35,62,-90],mapAltitude:135},oldAnapa:{aim:[0,0],offset:[-17,15,-33],raise:3,mapAltitude:65},paintedWaterfront:{aim:[0,0],offset:[-55,240,-290],mapAltitude:465},upperWaterfront:{aim:[12,-10],offset:[-58,100,-155],mapAltitude:275},lowerWaterfront:{aim:[12,4],offset:[6,58,-118],mapAltitude:220},queuePavilion:{aim:[0,0],offset:[14,24,-46],mapAltitude:65},pearlFountain:{aim:[0,0],offset:[-11,16,-30],mapAltitude:52},gorgippia:{aim:[40,3],offset:[-13,94,-79],mapAltitude:127},gorgMuseum:{aim:[0,0],offset:[5,16,-28],mapAltitude:46},parkHotel:{aim:[-5,-6],offset:[-97,91,-155],raise:6},sails:{aim:[15,-1],offset:[13,31,-49],mapAltitude:69}},st={"Верхний ярус":[{id:"laVeranda",name:"La Veranda",position:[-595.6,-28.8],walk:{position:[-606,-53],look:[-606,-23],pitch:.13}},{id:"matsoni",name:"Мацони",position:[-586,46],walk:{position:[-605,48],look:[-586,46],pitch:.1}},{...et.find(Q=>Q.id==="queuePavilion"),id:"queueCafe",name:"Qúeue"},{id:"more",name:"Море. Истории о еде",position:[-533,-25],walk:{position:[-533,-35],look:[-533,-25],pitch:.08}},{id:"barBQ",name:"BAR BQ",position:[-456.65,14],walk:{position:[-450,14],look:[-456.65,14],pitch:.08}}],"Нижний ярус":[{id:"captainCafe",name:"Капитан",position:[-530,-67],walk:{position:[-534.4,-79.5],look:[-530,-67],pitch:.15}},{id:"adrian",name:"Adrian Bistro",position:[-358,-30.5],walk:{position:[-359.7,-37.4],look:[-358,-30.5],pitch:.1}},{id:"bavaria",name:"Bavaria",position:[-342.2,-30.9],walk:{position:[-340,-38.1],look:[-342.2,-30.9],pitch:.13}},{id:"prichal",name:"Причал",position:[-303,-34.35],walk:{position:[-302,-40.2],look:[-303,-34.35],pitch:.2}},{id:"khinkal",name:"Хинкальная",position:[-267.5,-38.45],walk:{position:[-267.5,-44.35],look:[-267.5,-38.45],pitch:.18}},{id:"parokhod",name:"Пароходъ",position:[-229.8,-52.4],walk:{position:[-232.74,-59.75],look:[-229.8,-52.4],pitch:.34}},{id:"wineSea",name:"Вино и море",position:[-175,-54],walk:{position:[-184,-48],look:[-175,-54],pitch:.2}}]};rt.queueCafe=rt.queuePavilion,rt.more={aim:[0,0],offset:[-13,17,-34],raise:1.3,mapAltitude:67},rt.laVeranda={aim:[0,0],offset:[-12,16,-28],raise:2,mapAltitude:52},rt.matsoni={aim:[0,0],offset:[-24,15,3],raise:2,mapAltitude:52},rt.barBQ={aim:[0,0],offset:[25,11,-14],raise:1.3,mapAltitude:58};for(const Q of st["Нижний ярус"])rt[Q.id]={aim:[0,0],offset:[-9,12,-32],raise:1.8,mapAltitude:60};rt.wineSea.offset=[-27,13,-12];const ct=i.landmarks.find(Q=>Q.id==="gorgippia")?.position??[(h+d)/2,(p+_)/2],B=i.landmarks.find(Q=>Q.id==="lighthouse")?.position??ct,Z=new e,ht=new e,yt=new e,V=new e,at=new e,vt=new Set,q=new Map,it=new Set,k=new Map,Y=[];let K="orbit",_t=null,dt=0,Et=0,Dt=0,z=0,Qt=!1;const Kt=()=>K==="orbit"&&Qt,U=new Set,A=()=>U.has(K);let J=-.43,nt=2.8,lt=5.9,Mt=null,Rt="";function ut(Q,wt){const At=(x-wt/v).toFixed(5),Bt=(g+Q/M).toFixed(5),zt=`${At}/${Bt}`;zt!==Rt&&(Rt=zt,b.textContent=`${At}° N  ${Bt}° E`,b.href=`https://www.openstreetmap.org/#map=18/${zt}`,b.title="Показать эту точку в OpenStreetMap")}function pt(Q,wt=!1){const At=wt?rt[_t?.id]:void 0,Bt=K==="orbit"||At?.mapAltitude?At:void 0,zt=Q[0]+(Bt?.aim[0]??0),ne=Q[1]+(Bt?.aim[1]??0),oe=s.terrain(zt,ne)+(Bt?.raise??0);if(u.target.set(zt,oe,ne),at.copy(u.target),K==="map"){const fe=(Bt?.mapAltitude??(wt?440:1220))/Math.min(1,c.aspect*(Bt?.mapAltitude?.7:1.2));c.position.set(zt,oe+Math.min(3200,fe),ne+.1)}else{const fe=1/Math.min(1,c.aspect*(Bt?.mapAltitude?.67:1.4)),[ge,ve,Re]=Bt?.offset??(wt?[-148,150,-209]:[-345,350,-485]);c.position.set(zt+ge*fe,oe+ve*fe,ne+Re*fe)}u.update(),Kt()&&Lt()}function Lt(){dt=-u.getAzimuthalAngle(),Et=n.clamp(u.getPolarAngle()-Math.PI/2,-1.33,1.33)}function Xt(Q){const wt=X5(c.position.toArray(),Q,{ground:s.terrain,bounds:m,near:u.minDistance,far:u.maxDistance});u.target.fromArray(Q).multiplyScalar(wt).add(c.position),at.copy(u.target),u.update()}function It(Q){K==="orbit"&&Q&&Lt(),Qt=Q,T.setAttribute("aria-pressed",String(Q)),K==="orbit"&&(u.enabled=!Q,Mt=null,Q||(Xt(p0(dt,Math.min(Et,-.15))),c.fov=46,c.updateProjectionMatrix()),ft())}function Tt(Q,wt){if(K==="bike"&&o.bicycleAt(Q,wt)==="blocked")return null;const At=K==="car"?o.carAt(Q,wt):null;if(K==="car"&&!At)return null;const Bt=s.walkHeight(Q,wt);return Bt===null||!At?Bt:Bt+(At.bridge?.85:.31)}function qt([Q,wt],At){let Bt=null,zt=1/0;const ne=s.terrain(Q,wt);for(const{points:oe,kind:fe}of i.roads)if(["footway","pedestrian","path","living_street","steps"].includes(fe))for(let ge=1;ge<oe.length;ge++){const[ve,Re]=oe[ge-1],[Ln,Sn]=oe[ge],qi=Ln-ve,Cs=Sn-Re,Ro=qi*qi+Cs*Cs;if(Ro<.01||At&&fe!=="pedestrian")continue;const el=((Q-ve)*qi+(wt-Re)*Cs)/Ro,Fr=Math.sqrt(Ro);for(const L of At?[-42,-30,30,42]:[0,-8,8]){const W=n.clamp(el+L/Fr,0,1),ot=ve+qi*W,j=Re+Cs*W,tt=Math.hypot(ot-Q,j-wt);if(tt<(At?24:5)||tt>90)continue;const Ut=tt+(At?4*Math.abs(s.terrain(ot,j)-ne):0);Ut>=zt||Tt(ot,j)!==null&&(At&&![4,10,18].every(kt=>Tt(ot+(Q-ot)*kt/tt,j+(wt-j)*kt/tt)!==null)||(zt=Ut,Bt=[ot,j]))}}return Bt}function Jt(Q,wt){const[At,Bt]=wt?.look??Q;let zt=wt&&Tt(...wt.position)!==null?wt.position:null;zt??=qt(Q,Q===B)??qt(Q,!1);for(let oe=4;!zt&&oe<=96;oe+=4)for(let fe=0;!zt&&fe<Math.PI*2;fe+=Math.PI/8){const ge=At+Math.cos(fe)*oe,ve=Bt+Math.sin(fe)*oe;Tt(ge,ve)!==null&&(zt=[ge,ve])}if(!zt)return!1;c.position.set(zt[0],Tt(...zt)+H[K].eye,zt[1]),dt=Math.atan2(At-zt[0],zt[1]-Bt);const ne=s.terrain(At,Bt)+(Q===B?9:1.6);return Et=wt?.pitch??n.clamp(Math.atan2(ne-c.position.y,Math.hypot(At-zt[0],Bt-zt[1])),-.22,.32),!0}function ee(Q){const wt=o.nearestCarStart(Q,Tt);if(!wt)return!1;const{x:At,z:Bt,height:zt,heading:ne}=wt;dt=ne+(Math.cos(dt-ne)<0?Math.PI:0);const oe=Sn=>Tt(At+Math.sin(dt)*Sn,Bt-Math.cos(dt)*Sn),fe=Sn=>[1.5,3,5].find(qi=>oe(qi*Sn)===null)??6;fe(-1)>fe(1)&&(dt+=Math.PI);const ge=2.04,ve=Math.sin(dt)*ge,Re=-Math.cos(dt)*ge,Ln=Tt(At+ve,Bt+Re);return Et=0,Tt(At-ve,Bt-Re)===null&&Ln!==null?c.position.set(At+ve,Ln+H.car.eye,Bt+Re):c.position.set(At,zt+H.car.eye,Bt),!0}function X(Q){_t=Q,Dt=0;for(const[wt,At]of k)At.setAttribute("aria-pressed",String(wt===Q?.id));for(const{marker:wt,place:At}of Y)wt.classList.toggle("selected",At===Q);if(K==="car")ee(Q?.position??ct);else if(H[K]){const wt=Q?.id==="gorgippia"?Jx:Q?.walk??(Q?.look?Q:null);Jt(Q?.position??B,wt)||Jt(B)}else pt(Q?.position??ct,!!Q)}function Ct(Q){const wt=H[K]?[c.position.x,c.position.z]:null;if(K=Q,Mt=null,Dt=0,vt.clear(),q.clear(),it.clear(),u.enabled=!H[Q]&&!Kt(),u.enableRotate=Q==="orbit",u.mouseButtons.LEFT=Q==="map"?Hi.PAN:Hi.ROTATE,u.touches.ONE=Q==="map"?yi.PAN:yi.ROTATE,u.touches.TWO=yi.DOLLY_PAN,u.minPolarAngle=0,u.maxPolarAngle=Q==="map"?1e-4:Math.PI*.48,c.fov=H[Q]?.fov??46,c.updateProjectionMatrix(),document.body.dataset.mode=Q,w.hidden=Q!=="bike"&&Q!=="car",T.hidden=Q!=="orbit",ft(),ju("mode",Q),wt&&H[Q]){if(Q==="car"&&ee(wt))return;const At=Tt(...wt);if(At!==null){c.position.y=At+H[Q].eye;return}}X(_t)}bt.forEach((Q,wt)=>{const At=document.createElement("button");At.type="button",At.className="place",At.setAttribute("aria-pressed","false");const Bt=document.createElement("span");Bt.className="place-index",Bt.textContent=String(wt+1).padStart(2,"0"),Bt.setAttribute("aria-hidden","true");const zt=document.createElement("span");if(zt.className="place-name",zt.textContent=Q.name,At.append(Bt,zt),At.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,X(Q)}),D.append(At),k.set(Q.id,At),!Q.osm)return;const ne=document.createElement("a");ne.className="map-pin",ne.href=Q.osm,ne.target="_blank",ne.rel="noopener noreferrer",ne.setAttribute("aria-label",`${Q.name} в OpenStreetMap`),ne.title=`${Q.name} в OpenStreetMap`;const oe=document.createElement("span");oe.textContent=Bt.textContent;const fe=document.createElement("strong");fe.textContent=Q.name,ne.append(oe,fe),R.append(ne),Y.push({marker:ne,place:Q})});for(const[Q,wt]of Object.entries(st)){const At=document.createElement("h3");At.textContent=Q,P.append(At);for(const Bt of wt){const zt=document.createElement("button");zt.type="button",zt.className="place",zt.setAttribute("aria-pressed","false"),zt.textContent=Bt.name,zt.addEventListener("click",()=>{document.querySelector("#places-open").checked=!1,X(Bt)}),P.append(zt),k.set(Bt.id,zt)}}for(const Q of jo("mode"))Q.addEventListener("click",()=>Ct(Q.dataset.mode));y.addEventListener("click",()=>{const Q=y.getAttribute("aria-pressed")!=="true";y.setAttribute("aria-pressed",String(Q)),s.setCartoon(Q)});function ft(){E.hidden=K!=="bike"&&K!=="car",E.setAttribute("aria-pressed",String(A())),E.textContent=A()?K==="car"?"Камера из салона":"Камера от первого лица":"Камера снаружи",C.textContent=A()?"Стрелки или WASD — езда. Тяните по сцене, чтобы повернуть камеру. V — вид от первого лица.":I[Kt()?"superman":K]}function Pt(){A()?U.delete(K):U.add(K),ft()}E.addEventListener("click",Pt),T.addEventListener("click",()=>It(!Qt));function Ft(Q){ju("light",Q),s.light(Q)}for(const Q of jo("light"))Q.addEventListener("click",()=>Ft(Q.dataset.light));for(const Q of jo("action"))Q.addEventListener("click",()=>{const wt=Q.dataset.action;if(wt==="reset"){X(bt.find(zt=>zt.id==="paintedWaterfront"));return}const At=wt==="zoom-in";if(A()){lt=n.clamp(lt+(At?-1:1),3.8,9);return}if(H[K]||Kt()){c.fov=n.clamp(c.fov+(At?-8:8),42,82),c.updateProjectionMatrix();return}Z.copy(c.position).sub(u.target);const Bt=n.clamp(Z.length()*(At?.75:1.33),u.minDistance,u.maxDistance);c.position.copy(u.target).add(Z.setLength(Bt)),u.update()});for(const Q of jo("move")){const wt=Q.dataset.move;Q.addEventListener("pointerdown",At=>{At.pointerType==="touch"&&At.preventDefault(),Q.setPointerCapture(At.pointerId),q.set(At.pointerId,wt),it.add(wt)});for(const At of["pointerup","pointercancel","lostpointercapture"])Q.addEventListener(At,Bt=>q.delete(Bt.pointerId));Q.addEventListener("click",At=>{At.detail===0&&it.add(wt)}),Q.addEventListener("contextmenu",At=>At.preventDefault())}ns.addEventListener("pointerdown",Q=>{!(H[K]||Kt())||Mt!==null||(Mt={id:Q.pointerId,x:Q.clientX,y:Q.clientY},ns.setPointerCapture(Mt.id))}),ns.addEventListener("pointermove",Q=>{if(Q.pointerId!==Mt?.id)return;const wt=Q.clientX-Mt.x,At=Q.clientY-Mt.y;A()?(J-=wt*.009,nt=n.clamp(nt+At*.018,1.55,6)):(dt+=wt*.003,Et=n.clamp(Et-At*.003,-1.33,1.33)),Mt.x=Q.clientX,Mt.y=Q.clientY});for(const Q of["pointerup","pointercancel","lostpointercapture"])ns.addEventListener(Q,wt=>{Mt?.id===wt.pointerId&&(Mt=null)});window.addEventListener("keydown",Q=>{const wt=$[Q.code],At=(K==="walk"||K==="orbit")&&(Q.code==="ShiftLeft"||Q.code==="ShiftRight"),Bt=(K==="car"||K==="bike")&&Q.code==="KeyV";if(!(K==="map"||!wt&&!At&&!Bt||Q.defaultPrevented||Q.isComposing||Q.altKey||Q.ctrlKey||Q.metaKey)&&!(Q.target instanceof HTMLElement&&(Q.target.isContentEditable||Q.target.matches("input, select, textarea")))){if(Bt){Q.preventDefault(),Q.repeat||Pt();return}vt.add(Q.code),wt&&(Q.preventDefault(),Q.repeat||it.add(wt))}}),window.addEventListener("keyup",Q=>vt.delete(Q.code)),window.addEventListener("blur",()=>{vt.clear(),q.clear(),it.clear(),Dt=0,Mt=null});function gt(){const Q=Math.max(1,ns.clientWidth),wt=Math.max(1,ns.clientHeight);s.renderer.setSize(Q,wt,!1),c.aspect=Q/wt,c.updateProjectionMatrix()}function Yt(){const Q=new Set(it);for(const wt of vt)$[wt]&&Q.add($[wt]);for(const wt of q.values())Q.add(wt);return[Number(Q.has("forward"))-Number(Q.has("back")),Number(Q.has("right"))-Number(Q.has("left"))]}function Ht(Q,wt,At,Bt){const zt=c.position,ne=K==="car"?.65:.4,oe=Math.max(1,Math.ceil(Math.hypot(Q,wt)/.15));function fe(ge,ve){const Re=Tt(ge,ve);return Re===null||Math.abs(Re-At)>ne?!1:(zt.x=ge,zt.z=ve,At=Re,!0)}for(let ge=0;ge<oe;ge++)if(Bt)fe(zt.x+Q/oe,zt.z),fe(zt.x,zt.z+wt/oe);else if(!fe(zt.x+Q/oe,zt.z+wt/oe)){Dt=0;break}return At}function Ae(Q){const[wt,At]=Yt();z=At;const Bt=c.position,zt=H[K];let ne=Tt(Bt.x,Bt.z);if(K==="walk"&&(wt||At)){const oe=vt.has("ShiftLeft")||vt.has("ShiftRight"),ge=(it.size?.46:(oe?7.8:4.8)*Q)/Math.hypot(At,wt),ve=(Math.sin(dt)*wt+Math.cos(dt)*At)*ge,Re=(-Math.cos(dt)*wt+Math.sin(dt)*At)*ge;ne=Ht(ve,Re,ne,!0)}else if(K!=="walk"){const oe=K==="bike"&&o.bicycleAt(Bt.x,Bt.z)==="push",fe=oe?2:zt.speed,ge=wt*(wt<0?Math.min(fe,zt.reverse):fe),ve=it.size?Math.max(Q,.06):Q;Dt=n.clamp(n.damp(Dt,ge,ge===0?12:5,ve),-fe,fe);const Re=Dt<-.1;dt+=At*zt.steer*ve*(Re?-1:1);const Ln=Dt*ve;Math.abs(Ln)>1e-4&&(ne=Ht(Math.sin(dt)*Ln,-Math.cos(dt)*Ln,ne,oe));const Sn=`${Math.round(Math.abs(Dt)*3.6)} км/ч${oe?" · пешком":""}`;w.textContent!==Sn&&(w.textContent=Sn)}ne!==null&&(Bt.y=n.damp(Bt.y,ne+zt.eye,18,Q)),ht.set(Math.sin(dt)*Math.cos(Et),Math.sin(Et),-Math.cos(dt)*Math.cos(Et)),c.lookAt(ht.add(c.position))}function xe(Q){const[wt,At]=Yt(),Bt=c.position;if(wt||At){const zt=Bt.y-s.terrain(Bt.x,Bt.z),ne=n.clamp(zt*.38,3,180)*5;Bt.fromArray(Ju({position:Bt.toArray(),yaw:dt,pitch:Et,longitudinal:wt,lateral:At,distance:ne*(it.size?Math.max(Q,.08):Q),ground:s.terrain,clearance:F,ceiling:G,bounds:m}))}ht.fromArray(p0(dt,Et)),c.lookAt(ht.add(Bt))}function Gn(Q){if(Kt()){xe(Q);return}if(u.update(),K==="orbit"&&(vt.size||it.size||q.size)){const[zt,ne]=Yt();if(zt||ne){const oe=vt.has("ShiftLeft")||vt.has("ShiftRight"),fe=n.clamp(c.position.distanceTo(u.target)*.38,12,180)*(oe?5:1),ge=Z.subVectors(u.target,c.position).normalize().toArray(),ve=u.target.x-c.position.x,Re=u.target.z-c.position.z;c.position.fromArray(Ju({position:c.position.toArray(),yaw:-u.getAzimuthalAngle(),pitch:u.getPolarAngle()-Math.PI/2,longitudinal:zt,lateral:ne,distance:fe*(it.size?Math.max(Q,.08):Q),ground:s.terrain,clearance:N,ceiling:G,bounds:[h-ve,p-Re,d-ve,_-Re]})),Xt(ge)}}const wt=wc(u.target.x,at.x,h,d),At=wc(u.target.z,at.z,p,_);c.position.x+=wt-u.target.x,c.position.z+=At-u.target.z,u.target.x=wt,u.target.z=At,at.copy(u.target);const Bt=s.terrain(c.position.x,c.position.z)+N-c.position.y;Bt>0&&(c.position.y+=Bt,u.target.y+=Bt)}gt(),window.addEventListener("resize",gt),Ct("orbit");const Mn=new URLSearchParams(window.location.search),tl=[...bt,...Object.values(st).flat()];X(tl.find(Q=>Q.id===Mn.get("place"))??bt[0]);const Nr=Mn.get("mode");["map","walk","bike","car"].includes(Nr)&&Ct(Nr),Mn.get("light")==="sunset"&&Ft("sunset"),Mn.get("camera")==="outside"&&(K==="bike"||K==="car")&&Pt();let Ao=performance.now();s.renderer.setAnimationLoop(Q=>{const wt=Math.min((Q-Ao)/1e3,.05);Ao=Q,H[K]?Ae(wt):Gn(wt),it.clear(),c.getWorldDirection(yt);const At=K==="map"?0:-Math.atan2(yt.x,-yt.z);S.style.setProperty("--north",`${At}rad`);const Bt=H[K]||Kt()?c.position:u.target;ut(Bt.x,Bt.z);for(const{marker:ve,place:Re}of Y){const[Ln,Sn]=Re.position;V.set(Ln,s.terrain(Ln,Sn)+(Re.pinHeight??1.2),Sn).project(c),ve.hidden=!!H[K]||V.z<-1||V.z>1||Math.abs(V.x)>.97||Math.abs(V.y)>.92,ve.hidden||(ve.style.left=`${(V.x+1)*50}%`,ve.style.top=`${(1-V.y)*50}%`)}const zt=f?0:Q/1e3,ne=A(),oe={yaw:dt,speed:Dt,turn:z,delta:wt,terrain:s.terrain,angle:J,height:nt,distance:lt},fe=a.cameraFor(c,{...oe,active:K==="car"&&ne}),ge=l.cameraFor(fe,{...oe,active:K==="bike"&&ne});s.render(ge,zt),r.render(s.renderer,{mode:ne?"":K,aspect:c.aspect,turn:z,speed:Dt,time:zt,delta:wt,reducedMotion:f})})}let ef="Не удалось загрузить данные Анапы. Перезагрузите страницу.";try{const[i,t]=await Promise.all([tf("anapa"),tf("elevation")]);i.scale??=[111320*Math.cos(ue.degToRad(i.origin[1])),111132],ef="Не удалось открыть 3D-карту. Проверьте, доступен ли WebGL 2, и перезагрузите страницу.",Y5(i,t),Qu.hidden=!0}catch(i){console.error(i),Qu.textContent=ef}
