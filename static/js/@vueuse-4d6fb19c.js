import{g as we,o as ye,a as be,b as Pe,n as le,r as S,c as ue,w as A,u as Se,d as Ee,e as C,f as z,h as $e,s as Ie}from"./@vue-2d0ddfb4.js";var J;const L=typeof window<"u",ce=e=>typeof e=="function",je=e=>typeof e=="string",j=()=>{};L&&((J=window==null?void 0:window.navigator)!=null&&J.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function P(e){return typeof e=="function"?e():Se(e)}function H(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const fe=e=>e();function Te(e,t={}){let r,n,a=j;const o=s=>{clearTimeout(s),a(),a=j};return s=>{const l=P(e),c=P(t.maxWait);return r&&o(r),l<=0||c!==void 0&&c<=0?(n&&(o(n),n=null),Promise.resolve(s())):new Promise((u,p)=>{a=t.rejectOnCancel?p:u,c&&!n&&(n=setTimeout(()=>{r&&o(r),n=null,u(s())},c)),r=setTimeout(()=>{n&&o(n),n=null,u(s())},l)})}}function pe(e,t=!0,r=!0,n=!1){let a=0,o,i=!0,s=j,l;const c=()=>{o&&(clearTimeout(o),o=void 0,s(),s=j)};return p=>{const m=P(e),v=Date.now()-a,_=()=>l=p();return c(),m<=0?(a=Date.now(),_()):(v>m&&(r||!i)?(a=Date.now(),_()):t&&(l=new Promise((O,h)=>{s=n?h:O,o=setTimeout(()=>{a=Date.now(),i=!0,O(_()),c()},Math.max(0,m-v))})),!r&&!o&&(o=setTimeout(()=>i=!0,m)),i=!1,l)}}function De(e=fe){const t=S(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:Ee(t),pause:r,resume:n,eventFilter:a}}function Ae(e){return e}function N(e){return we()?(ye(e),!0):!1}function Ce(e,t=200,r={}){return H(Te(t,r),e)}function Ne(e,t=200,r=!1,n=!0,a=!1){return H(pe(t,r,n,a),e)}function Fe(e){return typeof e=="function"?C(e):S(e)}function Q(e,t=!0){be()?Pe(e):t?e():le(e)}function $t(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:a=!1}=r;let o=null;const i=S(!1);function s(){o&&(clearInterval(o),o=null)}function l(){i.value=!1,s()}function c(){const u=P(t);u<=0||(i.value=!0,a&&e(),s(),o=setInterval(e,u))}if(n&&L&&c(),ue(t)||ce(t)){const u=A(t,()=>{i.value&&L&&c()});N(u)}return N(l),{isActive:i,pause:l,resume:c}}function It(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ue(e),o=S(e);function i(s){if(arguments.length)return o.value=s,o.value;{const l=P(r);return o.value=o.value===l?P(n):l,o.value}}return a?i:[o,i]}var B=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,We=(e,t)=>{var r={};for(var n in e)Le.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&B)for(var n of B(e))t.indexOf(n)<0&&Re.call(e,n)&&(r[n]=e[n]);return r};function de(e,t,r={}){const n=r,{eventFilter:a=fe}=n,o=We(n,["eventFilter"]);return A(e,H(a,t),o)}var Me=Object.defineProperty,xe=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,ve=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,He=(e,t)=>{for(var r in t||(t={}))ve.call(t,r)&&U(e,r,t[r]);if(R)for(var r of R(t))me.call(t,r)&&U(e,r,t[r]);return e},Qe=(e,t)=>xe(e,Ve(t)),ke=(e,t)=>{var r={};for(var n in e)ve.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&R)for(var n of R(e))t.indexOf(n)<0&&me.call(e,n)&&(r[n]=e[n]);return r};function ze(e,t,r={}){const n=r,{eventFilter:a}=n,o=ke(n,["eventFilter"]),{eventFilter:i,pause:s,resume:l,isActive:c}=De(a);return{stop:de(e,t,Qe(He({},o),{eventFilter:i})),pause:s,resume:l,isActive:c}}var Je=Object.defineProperty,Be=Object.defineProperties,Ue=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ge=(e,t)=>{for(var r in t||(t={}))_e.call(t,r)&&G(e,r,t[r]);if(W)for(var r of W(t))ge.call(t,r)&&G(e,r,t[r]);return e},Ke=(e,t)=>Be(e,Ue(t)),Xe=(e,t)=>{var r={};for(var n in e)_e.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&W)for(var n of W(e))t.indexOf(n)<0&&ge.call(e,n)&&(r[n]=e[n]);return r};function jt(e,t,r={}){const n=r,{throttle:a=0,trailing:o=!0,leading:i=!0}=n,s=Xe(n,["throttle","trailing","leading"]);return de(e,t,Ke(Ge({},s),{eventFilter:pe(a,o,i)}))}function M(e){var t;const r=P(e);return(t=r==null?void 0:r.$el)!=null?t:r}const T=L?window:void 0;function F(...e){let t,r,n,a;if(je(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=T):[t,r,n,a]=e,!t)return j;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],i=()=>{o.forEach(u=>u()),o.length=0},s=(u,p,m,v)=>(u.addEventListener(p,m,v),()=>u.removeEventListener(p,m,v)),l=A(()=>[M(t),P(a)],([u,p])=>{i(),u&&o.push(...r.flatMap(m=>n.map(v=>s(u,m,v,p))))},{immediate:!0,flush:"post"}),c=()=>{l(),i()};return N(c),c}function k(e,t=!1){const r=S(),n=()=>r.value=!!e();return n(),Q(n,t),r}function qe(e,t={}){const{window:r=T}=t,n=k(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=S(!1),i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{n.value&&(i(),a=r.matchMedia(Fe(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return $e(s),N(()=>i()),o}const x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V="__vueuse_ssr_handlers__";x[V]=x[V]||{};const Ye=x[V];function Oe(e,t){return Ye[e]||t}function Ze(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var et=Object.defineProperty,K=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))tt.call(t,r)&&X(e,r,t[r]);if(K)for(var r of K(t))rt.call(t,r)&&X(e,r,t[r]);return e};const nt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Y="vueuse-storage";function at(e,t,r,n={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:s=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:p=T,eventFilter:m,onError:v=f=>{console.error(f)}}=n,_=(u?Ie:S)(t);if(!r)try{r=Oe("getDefaultStorage",()=>{var f;return(f=T)==null?void 0:f.localStorage})()}catch(f){v(f)}if(!r)return _;const O=P(t),h=Ze(O),$=(a=n.serializer)!=null?a:nt[h],{pause:b,resume:I}=ze(_,()=>d(_.value),{flush:o,deep:i,eventFilter:m});return p&&s&&(F(p,"storage",g),F(p,Y,E)),g(),_;function d(f){try{if(f==null)r.removeItem(e);else{const w=$.write(f),D=r.getItem(e);D!==w&&(r.setItem(e,w),p&&p.dispatchEvent(new CustomEvent(Y,{detail:{key:e,oldValue:D,newValue:w,storageArea:r}})))}}catch(w){v(w)}}function y(f){const w=f?f.newValue:r.getItem(e);if(w==null)return l&&O!==null&&r.setItem(e,$.write(O)),O;if(!f&&c){const D=$.read(w);return ce(c)?c(D,O):h==="object"&&!Array.isArray(D)?q(q({},O),D):D}else return typeof w!="string"?w:$.read(w)}function E(f){g(f.detail)}function g(f){if(!(f&&f.storageArea!==r)){if(f&&f.key==null){_.value=O;return}if(!(f&&f.key!==e)){b();try{_.value=y(f)}catch(w){v(w)}finally{f?le(I):I()}}}}}function he(e){return qe("(prefers-color-scheme: dark)",e)}var ot=Object.defineProperty,Z=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,ee=(e,t,r)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lt=(e,t)=>{for(var r in t||(t={}))st.call(t,r)&&ee(e,r,t[r]);if(Z)for(var r of Z(t))it.call(t,r)&&ee(e,r,t[r]);return e};function ut(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=T,storage:o,storageKey:i="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:l,emitAuto:c}=e,u=lt({auto:"",light:"light",dark:"dark"},e.modes||{}),p=he({window:a}),m=C(()=>p.value?"dark":"light"),v=l||(i==null?S(n):at(i,n,o,{window:a,listenToStorageChanges:s})),_=C({get(){return v.value==="auto"&&!c?m.value:v.value},set(b){v.value=b}}),O=Oe("updateHTMLAttrs",(b,I,d)=>{const y=a==null?void 0:a.document.querySelector(b);if(y)if(I==="class"){const E=d.split(/\s/g);Object.values(u).flatMap(g=>(g||"").split(/\s/g)).filter(Boolean).forEach(g=>{E.includes(g)?y.classList.add(g):y.classList.remove(g)})}else y.setAttribute(I,d)});function h(b){var I;const d=b==="auto"?m.value:b;O(t,r,(I=u[d])!=null?I:d)}function $(b){e.onChanged?e.onChanged(b,h):h(b)}return A(_,$,{flush:"post",immediate:!0}),c&&A(m,()=>$(_.value),{flush:"post"}),Q(()=>$(_.value)),_}var ct=Object.defineProperty,ft=Object.defineProperties,pt=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,re=(e,t,r)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,mt=(e,t)=>{for(var r in t||(t={}))dt.call(t,r)&&re(e,r,t[r]);if(te)for(var r of te(t))vt.call(t,r)&&re(e,r,t[r]);return e},_t=(e,t)=>ft(e,pt(t));function Tt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=T}=e,a=ut(_t(mt({},e),{onChanged:(s,l)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,s==="dark"):l(s)},modes:{dark:t,light:r}})),o=he({window:n});return C({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}var ne=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable,ht=(e,t)=>{var r={};for(var n in e)gt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ne)for(var n of ne(e))t.indexOf(n)<0&&Ot.call(e,n)&&(r[n]=e[n]);return r};function Dt(e,t,r={}){const n=r,{window:a=T}=n,o=ht(n,["window"]);let i;const s=k(()=>a&&"ResizeObserver"in a),l=()=>{i&&(i.disconnect(),i=void 0)},c=A(()=>M(e),p=>{l(),s.value&&a&&p&&(i=new ResizeObserver(t),i.observe(p,o))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return N(u),{isSupported:s,stop:u}}const ae=1;function At(e,t={}){const{throttle:r=0,idle:n=200,onStop:a=j,onScroll:o=j,offset:i={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:l="auto"}=t,c=S(0),u=S(0),p=C({get(){return c.value},set(d){v(d,void 0)}}),m=C({get(){return u.value},set(d){v(void 0,d)}});function v(d,y){var E,g,f;const w=P(e);w&&((f=w instanceof Document?document.body:w)==null||f.scrollTo({top:(E=P(y))!=null?E:m.value,left:(g=P(d))!=null?g:p.value,behavior:P(l)}))}const _=S(!1),O=z({left:!0,right:!1,top:!0,bottom:!1}),h=z({left:!1,right:!1,top:!1,bottom:!1}),$=d=>{_.value&&(_.value=!1,h.left=!1,h.right=!1,h.top=!1,h.bottom=!1,a(d))},b=Ce($,r+n),I=d=>{const y=d.target===document?d.target.documentElement:d.target,E=y.scrollLeft;h.left=E<c.value,h.right=E>u.value,O.left=E<=0+(i.left||0),O.right=E+y.clientWidth>=y.scrollWidth-(i.right||0)-ae,c.value=E;let g=y.scrollTop;d.target===document&&!g&&(g=document.body.scrollTop),h.top=g<u.value,h.bottom=g>u.value,O.top=g<=0+(i.top||0),O.bottom=g+y.clientHeight>=y.scrollHeight-(i.bottom||0)-ae,u.value=g,_.value=!0,b(d),o(d)};return F(e,"scroll",r?Ne(I,r,!0,!1):I,s),F(e,"scrollend",$,s),{x:p,y:m,isScrolling:_,arrivedState:O,directions:h}}function Ct(e,t,r={}){const{root:n,rootMargin:a="0px",threshold:o=.1,window:i=T}=r,s=k(()=>i&&"IntersectionObserver"in i);let l=j;const c=s.value?A(()=>({el:M(e),root:M(n)}),({el:p,root:m})=>{if(l(),!p)return;const v=new IntersectionObserver(t,{root:m,rootMargin:a,threshold:o});v.observe(p),l=()=>{v.disconnect(),l=j}},{immediate:!0,flush:"post"}):j,u=()=>{l(),c()};return N(u),{isSupported:s,stop:u}}var oe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(oe||(oe={}));var wt=Object.defineProperty,se=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,ie=(e,t,r)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pt=(e,t)=>{for(var r in t||(t={}))yt.call(t,r)&&ie(e,r,t[r]);if(se)for(var r of se(t))bt.call(t,r)&&ie(e,r,t[r]);return e};const St={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Pt({linear:Ae},St);function Nt(e={}){const{window:t=T,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=e,i=S(r),s=S(n),l=()=>{t&&(o?(i.value=t.innerWidth,s.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return l(),Q(l),F("resize",l,{passive:!0}),a&&F("orientationchange",l,{passive:!0}),{width:i,height:s}}export{At as a,F as b,It as c,Nt as d,$t as e,Ct as f,Dt as g,Tt as u,jt as w};