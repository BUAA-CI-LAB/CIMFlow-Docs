"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[108],{344:(e,r,t)=>{t.d(r,{Image:()=>n._V,a8:()=>n.a8,q6:()=>n.q6,rd:()=>n.rd});var n=t(9600);t(9189)},1339:(e,r,t)=>{t.d(r,{NavProvider:()=>d,StylesProvider:()=>s,h:()=>u,v:()=>i});var n=t(5155),o=t(2115),a=t(344);let l=(0,a.q6)("StylesContext",{tocNav:"xl:hidden",toc:"max-xl:hidden"});function i(){return l.use()}function s(e){let{children:r,...t}=e;return(0,n.jsx)(l.Provider,{value:t,children:r})}let c=(0,a.q6)("NavContext",{isTransparent:!1});function d(e){let{transparentMode:r="none",children:t}=e,[a,l]=(0,o.useState)("none"!==r);return(0,o.useEffect)(()=>{if("top"!==r)return;let e=()=>{l(window.scrollY<10)};return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[r]),(0,n.jsx)(c.Provider,{value:(0,o.useMemo)(()=>({isTransparent:a}),[a]),children:t})}function u(){return c.use()}},3243:(e,r,t)=>{t.d(r,{F:()=>a});let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,o=function(){for(var e,r,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(r=function e(r){var t,n,o="";if("string"==typeof r||"number"==typeof r)o+=r;else if("object"==typeof r){if(Array.isArray(r)){var a=r.length;for(t=0;t<a;t++)r[t]&&(n=e(r[t]))&&(o&&(o+=" "),o+=n)}else for(n in r)r[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(n&&(n+=" "),n+=r);return n},a=(e,r)=>t=>{var a;if((null==r?void 0:r.variants)==null)return o(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:l,defaultVariants:i}=r,s=Object.keys(l).map(e=>{let r=null==t?void 0:t[e],o=null==i?void 0:i[e];if(null===r)return null;let a=n(r)||n(o);return l[e][a]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return o(e,s,null==r?void 0:null===(a=r.compoundVariants)||void 0===a?void 0:a.reduce((e,r)=>{let{class:t,className:n,...o}=r;return Object.entries(o).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...c}[r]):({...i,...c})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},3795:(e,r,t)=>{t.d(r,{A:()=>X});var n,o=function(){return(o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};function a(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t}Object.create;Object.create;var l=("function"==typeof SuppressedError&&SuppressedError,t(2115)),i="right-scroll-bar-position",s="width-before-scroll-bar";function c(e,r){return"function"==typeof e?e(r):e&&(e.current=r),e}var d="undefined"!=typeof window?l.useLayoutEffect:l.useEffect,u=new WeakMap;function f(e){return e}var p=function(e){void 0===e&&(e={});var r,t,n,a,l=(r=null,void 0===t&&(t=f),n=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,a);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(a=!0;n.length;){var r=n;n=[],r.forEach(e)}n={push:function(r){return e(r)},filter:function(){return n}}},assignMedium:function(e){a=!0;var r=[];if(n.length){var t=n;n=[],t.forEach(e),r=n}var o=function(){var t=r;r=[],t.forEach(e)},l=function(){return Promise.resolve().then(o)};l(),n={push:function(e){r.push(e),l()},filter:function(e){return r=r.filter(e),n}}}});return l.options=o({async:!0,ssr:!1},e),l}(),m=function(){},h=l.forwardRef(function(e,r){var t,n,i,s,f=l.useRef(null),h=l.useState({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:m}),b=h[0],g=h[1],v=e.forwardProps,w=e.children,y=e.className,x=e.removeScrollBar,k=e.enabled,E=e.shards,z=e.sideCar,C=e.noIsolation,P=e.inert,S=e.allowPinchZoom,j=e.as,N=e.gapMode,M=a(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),L=(t=[f,r],n=function(e){return t.forEach(function(r){return c(r,e)})},(i=(0,l.useState)(function(){return{value:null,callback:n,facade:{get current(){return i.value},set current(value){var e=i.value;e!==value&&(i.value=value,i.callback(value,e))}}}})[0]).callback=n,s=i.facade,d(function(){var e=u.get(s);if(e){var r=new Set(e),n=new Set(t),o=s.current;r.forEach(function(e){n.has(e)||c(e,null)}),n.forEach(function(e){r.has(e)||c(e,o)})}u.set(s,t)},[t]),s),R=o(o({},M),b);return l.createElement(l.Fragment,null,k&&l.createElement(z,{sideCar:p,removeScrollBar:x,shards:E,noIsolation:C,inert:P,setCallbacks:g,allowPinchZoom:!!S,lockRef:f,gapMode:N}),v?l.cloneElement(l.Children.only(w),o(o({},R),{ref:L})):l.createElement(void 0===j?"div":j,o({},R,{className:y,ref:L}),w))});h.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},h.classNames={fullWidth:s,zeroRight:i};var b=function(e){var r=e.sideCar,t=a(e,["sideCar"]);if(!r)throw Error("Sidecar: please provide `sideCar` property to import the right car");var n=r.read();if(!n)throw Error("Sidecar medium not found");return l.createElement(n,o({},t))};b.isSideCarExport=!0;var g=function(){var e=0,r=null;return{add:function(o){if(0==e&&(r=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var r=n||t.nc;return r&&e.setAttribute("nonce",r),e}())){var a,l;(a=r).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),l=r,(document.head||document.getElementsByTagName("head")[0]).appendChild(l)}e++},remove:function(){--e||!r||(r.parentNode&&r.parentNode.removeChild(r),r=null)}}},v=function(){var e=g();return function(r,t){l.useEffect(function(){return e.add(r),function(){e.remove()}},[r&&t])}},w=function(){var e=v();return function(r){return e(r.styles,r.dynamic),null}},y={left:0,top:0,right:0,gap:0},x=function(e){return parseInt(e||"",10)||0},k=function(e){var r=window.getComputedStyle(document.body),t=r["padding"===e?"paddingLeft":"marginLeft"],n=r["padding"===e?"paddingTop":"marginTop"],o=r["padding"===e?"paddingRight":"marginRight"];return[x(t),x(n),x(o)]},E=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return y;var r=k(e),t=document.documentElement.clientWidth,n=window.innerWidth;return{left:r[0],top:r[1],right:r[2],gap:Math.max(0,n-t+r[2]-r[0])}},z=w(),C="data-scroll-locked",P=function(e,r,t,n){var o=e.left,a=e.top,l=e.right,c=e.gap;return void 0===t&&(t="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(n,";\n   padding-right: ").concat(c,"px ").concat(n,";\n  }\n  body[").concat(C,"] {\n    overflow: hidden ").concat(n,";\n    overscroll-behavior: contain;\n    ").concat([r&&"position: relative ".concat(n,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(l,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(n,";\n    "),"padding"===t&&"padding-right: ".concat(c,"px ").concat(n,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(i," {\n    right: ").concat(c,"px ").concat(n,";\n  }\n  \n  .").concat(s," {\n    margin-right: ").concat(c,"px ").concat(n,";\n  }\n  \n  .").concat(i," .").concat(i," {\n    right: 0 ").concat(n,";\n  }\n  \n  .").concat(s," .").concat(s," {\n    margin-right: 0 ").concat(n,";\n  }\n  \n  body[").concat(C,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(c,"px;\n  }\n")},S=function(){var e=parseInt(document.body.getAttribute(C)||"0",10);return isFinite(e)?e:0},j=function(){l.useEffect(function(){return document.body.setAttribute(C,(S()+1).toString()),function(){var e=S()-1;e<=0?document.body.removeAttribute(C):document.body.setAttribute(C,e.toString())}},[])},N=function(e){var r=e.noRelative,t=e.noImportant,n=e.gapMode,o=void 0===n?"margin":n;j();var a=l.useMemo(function(){return E(o)},[o]);return l.createElement(z,{styles:P(a,!r,o,t?"":"!important")})},M=!1;if("undefined"!=typeof window)try{var L=Object.defineProperty({},"passive",{get:function(){return M=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch(e){M=!1}var R=!!M&&{passive:!1},O=function(e,r){if(!(e instanceof Element))return!1;var t=window.getComputedStyle(e);return"hidden"!==t[r]&&(t.overflowY!==t.overflowX||"TEXTAREA"===e.tagName||"visible"!==t[r])},I=function(e,r){var t=r.ownerDocument,n=r;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),T(e,n)){var o=A(e,n);if(o[1]>o[2])return!0}n=n.parentNode}while(n&&n!==t.body);return!1},T=function(e,r){return"v"===e?O(r,"overflowY"):O(r,"overflowX")},A=function(e,r){return"v"===e?[r.scrollTop,r.scrollHeight,r.clientHeight]:[r.scrollLeft,r.scrollWidth,r.clientWidth]},W=function(e,r,t,n,o){var a,l=(a=window.getComputedStyle(r).direction,"h"===e&&"rtl"===a?-1:1),i=l*n,s=t.target,c=r.contains(s),d=!1,u=i>0,f=0,p=0;do{var m=A(e,s),h=m[0],b=m[1]-m[2]-l*h;(h||b)&&T(e,s)&&(f+=b,p+=h),s=s instanceof ShadowRoot?s.host:s.parentNode}while(!c&&s!==document.body||c&&(r.contains(s)||r===s));return u&&(o&&1>Math.abs(f)||!o&&i>f)?d=!0:!u&&(o&&1>Math.abs(p)||!o&&-i>p)&&(d=!0),d},G=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},$=function(e){return[e.deltaX,e.deltaY]},_=function(e){return e&&"current"in e?e.current:e},B=0,Y=[];let q=(p.useMedium(function(e){var r=l.useRef([]),t=l.useRef([0,0]),n=l.useRef(),o=l.useState(B++)[0],a=l.useState(w)[0],i=l.useRef(e);l.useEffect(function(){i.current=e},[e]),l.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var r=(function(e,r,t){if(t||2==arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))})([e.lockRef.current],(e.shards||[]).map(_),!0).filter(Boolean);return r.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),r.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=l.useCallback(function(e,r){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var o,a=G(e),l=t.current,s="deltaX"in e?e.deltaX:l[0]-a[0],c="deltaY"in e?e.deltaY:l[1]-a[1],d=e.target,u=Math.abs(s)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===u&&"range"===d.type)return!1;var f=I(u,d);if(!f)return!0;if(f?o=u:(o="v"===u?"h":"v",f=I(u,d)),!f)return!1;if(!n.current&&"changedTouches"in e&&(s||c)&&(n.current=o),!o)return!0;var p=n.current||o;return W(p,r,e,"h"===p?s:c,!0)},[]),c=l.useCallback(function(e){if(Y.length&&Y[Y.length-1]===a){var t="deltaY"in e?$(e):G(e),n=r.current.filter(function(r){var n;return r.name===e.type&&(r.target===e.target||e.target===r.shadowParent)&&(n=r.delta)[0]===t[0]&&n[1]===t[1]})[0];if(n&&n.should){e.cancelable&&e.preventDefault();return}if(!n){var o=(i.current.shards||[]).map(_).filter(Boolean).filter(function(r){return r.contains(e.target)});(o.length>0?s(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),d=l.useCallback(function(e,t,n,o){var a={name:e,delta:t,target:n,should:o,shadowParent:function(e){for(var r=null;null!==e;)e instanceof ShadowRoot&&(r=e.host,e=e.host),e=e.parentNode;return r}(n)};r.current.push(a),setTimeout(function(){r.current=r.current.filter(function(e){return e!==a})},1)},[]),u=l.useCallback(function(e){t.current=G(e),n.current=void 0},[]),f=l.useCallback(function(r){d(r.type,$(r),r.target,s(r,e.lockRef.current))},[]),p=l.useCallback(function(r){d(r.type,G(r),r.target,s(r,e.lockRef.current))},[]);l.useEffect(function(){return Y.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,R),document.addEventListener("touchmove",c,R),document.addEventListener("touchstart",u,R),function(){Y=Y.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,R),document.removeEventListener("touchmove",c,R),document.removeEventListener("touchstart",u,R)}},[]);var m=e.removeScrollBar,h=e.inert;return l.createElement(l.Fragment,null,h?l.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?l.createElement(N,{gapMode:e.gapMode}):null)}),b);var F=l.forwardRef(function(e,r){return l.createElement(h,o({},e,{ref:r,sideCar:q}))});F.classNames=h.classNames;let X=F},4315:(e,r,t)=>{t.d(r,{FX:()=>l,jH:()=>i});var n=t(2115),o=t(5155),a=n.createContext(void 0),l=e=>{let{dir:r,children:t}=e;return(0,o.jsx)(a.Provider,{value:r,children:t})};function i(e){let r=n.useContext(a);return e||r||"ltr"}},7936:(e,r,t)=>{t.d(r,{r:()=>n});let n=(0,t(3243).F)("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50",{variants:{color:{primary:"bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",outline:"border hover:bg-fd-accent hover:text-fd-accent-foreground",ghost:"hover:bg-fd-accent hover:text-fd-accent-foreground",secondary:"border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"},size:{sm:"gap-1 p-0.5 text-xs",icon:"p-1.5 [&_svg]:size-5","icon-sm":"p-1.5 [&_svg]:size-4.5"}}})},9189:(e,r,t)=>{},9600:(e,r,t)=>{t.d(r,{N_:()=>u,Uy:()=>i,_V:()=>d,a8:()=>s,q6:()=>f,rd:()=>c});var n=t(2115),o=t(5155),a=()=>{throw Error("You need to wrap your application inside `FrameworkProvider`.")},l=f("FrameworkContext",{useParams:a,useRouter:a,usePathname:a});function i({children:e,...r}){let t=n.useMemo(()=>({usePathname:r.usePathname,useRouter:r.useRouter,Link:r.Link,Image:r.Image,useParams:r.useParams}),[r.Link,r.usePathname,r.useRouter,r.useParams,r.Image]);return(0,o.jsx)(l.Provider,{value:t,children:e})}function s(){return l.use().usePathname()}function c(){return l.use().useRouter()}function d(e){let{Image:r}=l.use();if(!r){let{src:r,alt:t,priority:n,...a}=e;return(0,o.jsx)("img",{alt:t,src:r,fetchPriority:n?"high":"auto",...a})}return(0,o.jsx)(r,{...e})}function u(e){let{Link:r}=l.use();if(!r){let{href:r,prefetch:t,...n}=e;return(0,o.jsx)("a",{href:r,...n})}return(0,o.jsx)(r,{...e})}function f(e,r){let t=n.createContext(r);return{Provider:e=>(0,o.jsx)(t.Provider,{value:e.value,children:e.children}),use:r=>{let o=n.useContext(t);if(!o)throw Error(r??`Provider of ${e} is required but missing.`);return o}}}},9688:(e,r,t)=>{t.d(r,{QP:()=>eu});let n=e=>{let r=i(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),o(t,r)||l(e)},getConflictingClassGroupIds:(e,r)=>{let o=t[e]||[];return r&&n[e]?[...o,...n[e]]:o}}},o=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],n=r.nextPart.get(t),a=n?o(e.slice(1),n):void 0;if(a)return a;if(0===r.validators.length)return;let l=e.join("-");return r.validators.find(({validator:e})=>e(l))?.classGroupId},a=/^\[(.+)\]$/,l=e=>{if(a.test(e)){let r=a.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},i=e=>{let{theme:r,classGroups:t}=e,n={nextPart:new Map,validators:[]};for(let e in t)s(t[e],n,e,r);return n},s=(e,r,t,n)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:c(r,e)).classGroupId=t;return}if("function"==typeof e){if(d(e)){s(e(n),r,t,n);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,o])=>{s(o,c(r,e),t,n)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},d=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,n=new Map,o=(o,a)=>{t.set(o,a),++r>e&&(r=0,n=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=n.get(e))?(o(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):o(e,r)}}},f=e=>{let{prefix:r,experimentalParseClassName:t}=e,n=e=>{let r;let t=[],n=0,o=0,a=0;for(let l=0;l<e.length;l++){let i=e[l];if(0===n&&0===o){if(":"===i){t.push(e.slice(a,l)),a=l+1;continue}if("/"===i){r=l;continue}}"["===i?n++:"]"===i?n--:"("===i?o++:")"===i&&o--}let l=0===t.length?e:e.substring(a),i=p(l);return{modifiers:t,hasImportantModifier:i!==l,baseClassName:i,maybePostfixModifierPosition:r&&r>a?r-a:void 0}};if(r){let e=r+":",t=n;n=r=>r.startsWith(e)?t(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(t){let e=n;n=r=>t({className:r,parseClassName:e})}return n},p=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,m=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let t=[],n=[];return e.forEach(e=>{"["===e[0]||r[e]?(t.push(...n.sort(),e),n=[]):n.push(e)}),t.push(...n.sort()),t}},h=e=>({cache:u(e.cacheSize),parseClassName:f(e),sortModifiers:m(e),...n(e)}),b=/\s+/,g=(e,r)=>{let{parseClassName:t,getClassGroupId:n,getConflictingClassGroupIds:o,sortModifiers:a}=r,l=[],i=e.trim().split(b),s="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:f,maybePostfixModifierPosition:p}=t(r);if(c){s=r+(s.length>0?" "+s:s);continue}let m=!!p,h=n(m?f.substring(0,p):f);if(!h){if(!m||!(h=n(f))){s=r+(s.length>0?" "+s:s);continue}m=!1}let b=a(d).join(":"),g=u?b+"!":b,v=g+h;if(l.includes(v))continue;l.push(v);let w=o(h,m);for(let e=0;e<w.length;++e){let r=w[e];l.push(g+r)}s=r+(s.length>0?" "+s:s)}return s};function v(){let e,r,t=0,n="";for(;t<arguments.length;)(e=arguments[t++])&&(r=w(e))&&(n&&(n+=" "),n+=r);return n}let w=e=>{let r;if("string"==typeof e)return e;let t="";for(let n=0;n<e.length;n++)e[n]&&(r=w(e[n]))&&(t&&(t+=" "),t+=r);return t},y=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,E=/^\d+\/\d+$/,z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,P=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,S=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,j=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,N=e=>E.test(e),M=e=>!!e&&!Number.isNaN(Number(e)),L=e=>!!e&&Number.isInteger(Number(e)),R=e=>e.endsWith("%")&&M(e.slice(0,-1)),O=e=>z.test(e),I=()=>!0,T=e=>C.test(e)&&!P.test(e),A=()=>!1,W=e=>S.test(e),G=e=>j.test(e),$=e=>!B(e)&&!Z(e),_=e=>ee(e,el,A),B=e=>x.test(e),Y=e=>ee(e,ei,T),q=e=>ee(e,es,M),F=e=>ee(e,et,A),X=e=>ee(e,eo,G),H=e=>ee(e,A,W),Z=e=>k.test(e),U=e=>er(e,ei),D=e=>er(e,ec),V=e=>er(e,et),J=e=>er(e,el),K=e=>er(e,eo),Q=e=>er(e,ed,!0),ee=(e,r,t)=>{let n=x.exec(e);return!!n&&(n[1]?r(n[1]):t(n[2]))},er=(e,r,t=!1)=>{let n=k.exec(e);return!!n&&(n[1]?r(n[1]):t)},et=e=>"position"===e,en=new Set(["image","url"]),eo=e=>en.has(e),ea=new Set(["length","size","percentage"]),el=e=>ea.has(e),ei=e=>"length"===e,es=e=>"number"===e,ec=e=>"family-name"===e,ed=e=>"shadow"===e;Symbol.toStringTag;let eu=function(e,...r){let t,n,o;let a=function(i){return n=(t=h(r.reduce((e,r)=>r(e),e()))).cache.get,o=t.cache.set,a=l,l(i)};function l(e){let r=n(e);if(r)return r;let a=g(e,t);return o(e,a),a}return function(){return a(v.apply(null,arguments))}}(()=>{let e=y("color"),r=y("font"),t=y("text"),n=y("font-weight"),o=y("tracking"),a=y("leading"),l=y("breakpoint"),i=y("container"),s=y("spacing"),c=y("radius"),d=y("shadow"),u=y("inset-shadow"),f=y("drop-shadow"),p=y("blur"),m=y("perspective"),h=y("aspect"),b=y("ease"),g=y("animate"),v=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],x=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],E=()=>[Z,B,s],z=()=>[N,"full","auto",...E()],C=()=>[L,"none","subgrid",Z,B],P=()=>["auto",{span:["full",L,Z,B]},L,Z,B],S=()=>[L,"auto",Z,B],j=()=>["auto","min","max","fr",Z,B],T=()=>["start","end","center","between","around","evenly","stretch","baseline"],A=()=>["start","end","center","stretch"],W=()=>["auto",...E()],G=()=>[N,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],ee=()=>[e,Z,B],er=()=>[R,U,Y],et=()=>["","none","full",c,Z,B],en=()=>["",M,U,Y],eo=()=>["solid","dashed","dotted","double"],ea=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],el=()=>["","none",p,Z,B],ei=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z,B],es=()=>["none",M,Z,B],ec=()=>["none",M,Z,B],ed=()=>[M,Z,B],eu=()=>[N,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[O],breakpoint:[O],color:[I],container:[O],"drop-shadow":[O],ease:["in","out","in-out"],font:[$],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[O],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[O],shadow:[O],spacing:["px",M],text:[O],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",N,B,Z,h]}],container:["container"],columns:[{columns:[M,B,Z,i]}],"break-after":[{"break-after":v()}],"break-before":[{"break-before":v()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...w(),B,Z]}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:z()}],"inset-x":[{"inset-x":z()}],"inset-y":[{"inset-y":z()}],start:[{start:z()}],end:[{end:z()}],top:[{top:z()}],right:[{right:z()}],bottom:[{bottom:z()}],left:[{left:z()}],visibility:["visible","invisible","collapse"],z:[{z:[L,"auto",Z,B]}],basis:[{basis:[N,"full","auto",i,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[M,N,"auto","initial","none",B]}],grow:[{grow:["",M,Z,B]}],shrink:[{shrink:["",M,Z,B]}],order:[{order:[L,"first","last","none",Z,B]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:P()}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:P()}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":j()}],"auto-rows":[{"auto-rows":j()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...T(),"normal"]}],"justify-items":[{"justify-items":[...A(),"normal"]}],"justify-self":[{"justify-self":["auto",...A()]}],"align-content":[{content:["normal",...T()]}],"align-items":[{items:[...A(),"baseline"]}],"align-self":[{self:["auto",...A(),"baseline"]}],"place-content":[{"place-content":T()}],"place-items":[{"place-items":[...A(),"baseline"]}],"place-self":[{"place-self":["auto",...A()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:W()}],mx:[{mx:W()}],my:[{my:W()}],ms:[{ms:W()}],me:[{me:W()}],mt:[{mt:W()}],mr:[{mr:W()}],mb:[{mb:W()}],ml:[{ml:W()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:G()}],w:[{w:[i,"screen",...G()]}],"min-w":[{"min-w":[i,"screen","none",...G()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[l]},...G()]}],h:[{h:["screen",...G()]}],"min-h":[{"min-h":["screen","none",...G()]}],"max-h":[{"max-h":["screen",...G()]}],"font-size":[{text:["base",t,U,Y]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,Z,q]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",R,B]}],"font-family":[{font:[D,B,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Z,B]}],"line-clamp":[{"line-clamp":[M,"none",Z,q]}],leading:[{leading:[a,...E()]}],"list-image":[{"list-image":["none",Z,B]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Z,B]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ee()}],"text-color":[{text:ee()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...eo(),"wavy"]}],"text-decoration-thickness":[{decoration:[M,"from-font","auto",Z,Y]}],"text-decoration-color":[{decoration:ee()}],"underline-offset":[{"underline-offset":[M,"auto",Z,B]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z,B]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z,B]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...w(),V,F]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",J,_]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},L,Z,B],radial:["",Z,B],conic:[L,Z,B]},K,X]}],"bg-color":[{bg:ee()}],"gradient-from-pos":[{from:er()}],"gradient-via-pos":[{via:er()}],"gradient-to-pos":[{to:er()}],"gradient-from":[{from:ee()}],"gradient-via":[{via:ee()}],"gradient-to":[{to:ee()}],rounded:[{rounded:et()}],"rounded-s":[{"rounded-s":et()}],"rounded-e":[{"rounded-e":et()}],"rounded-t":[{"rounded-t":et()}],"rounded-r":[{"rounded-r":et()}],"rounded-b":[{"rounded-b":et()}],"rounded-l":[{"rounded-l":et()}],"rounded-ss":[{"rounded-ss":et()}],"rounded-se":[{"rounded-se":et()}],"rounded-ee":[{"rounded-ee":et()}],"rounded-es":[{"rounded-es":et()}],"rounded-tl":[{"rounded-tl":et()}],"rounded-tr":[{"rounded-tr":et()}],"rounded-br":[{"rounded-br":et()}],"rounded-bl":[{"rounded-bl":et()}],"border-w":[{border:en()}],"border-w-x":[{"border-x":en()}],"border-w-y":[{"border-y":en()}],"border-w-s":[{"border-s":en()}],"border-w-e":[{"border-e":en()}],"border-w-t":[{"border-t":en()}],"border-w-r":[{"border-r":en()}],"border-w-b":[{"border-b":en()}],"border-w-l":[{"border-l":en()}],"divide-x":[{"divide-x":en()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":en()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...eo(),"hidden","none"]}],"divide-style":[{divide:[...eo(),"hidden","none"]}],"border-color":[{border:ee()}],"border-color-x":[{"border-x":ee()}],"border-color-y":[{"border-y":ee()}],"border-color-s":[{"border-s":ee()}],"border-color-e":[{"border-e":ee()}],"border-color-t":[{"border-t":ee()}],"border-color-r":[{"border-r":ee()}],"border-color-b":[{"border-b":ee()}],"border-color-l":[{"border-l":ee()}],"divide-color":[{divide:ee()}],"outline-style":[{outline:[...eo(),"none","hidden"]}],"outline-offset":[{"outline-offset":[M,Z,B]}],"outline-w":[{outline:["",M,U,Y]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",d,Q,H]}],"shadow-color":[{shadow:ee()}],"inset-shadow":[{"inset-shadow":["none",Z,B,u]}],"inset-shadow-color":[{"inset-shadow":ee()}],"ring-w":[{ring:en()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ee()}],"ring-offset-w":[{"ring-offset":[M,Y]}],"ring-offset-color":[{"ring-offset":ee()}],"inset-ring-w":[{"inset-ring":en()}],"inset-ring-color":[{"inset-ring":ee()}],opacity:[{opacity:[M,Z,B]}],"mix-blend":[{"mix-blend":[...ea(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ea()}],filter:[{filter:["","none",Z,B]}],blur:[{blur:el()}],brightness:[{brightness:[M,Z,B]}],contrast:[{contrast:[M,Z,B]}],"drop-shadow":[{"drop-shadow":["","none",f,Z,B]}],grayscale:[{grayscale:["",M,Z,B]}],"hue-rotate":[{"hue-rotate":[M,Z,B]}],invert:[{invert:["",M,Z,B]}],saturate:[{saturate:[M,Z,B]}],sepia:[{sepia:["",M,Z,B]}],"backdrop-filter":[{"backdrop-filter":["","none",Z,B]}],"backdrop-blur":[{"backdrop-blur":el()}],"backdrop-brightness":[{"backdrop-brightness":[M,Z,B]}],"backdrop-contrast":[{"backdrop-contrast":[M,Z,B]}],"backdrop-grayscale":[{"backdrop-grayscale":["",M,Z,B]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[M,Z,B]}],"backdrop-invert":[{"backdrop-invert":["",M,Z,B]}],"backdrop-opacity":[{"backdrop-opacity":[M,Z,B]}],"backdrop-saturate":[{"backdrop-saturate":[M,Z,B]}],"backdrop-sepia":[{"backdrop-sepia":["",M,Z,B]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Z,B]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[M,"initial",Z,B]}],ease:[{ease:["linear","initial",b,Z,B]}],delay:[{delay:[M,Z,B]}],animate:[{animate:["none",g,Z,B]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,Z,B]}],"perspective-origin":[{"perspective-origin":ei()}],rotate:[{rotate:es()}],"rotate-x":[{"rotate-x":es()}],"rotate-y":[{"rotate-y":es()}],"rotate-z":[{"rotate-z":es()}],scale:[{scale:ec()}],"scale-x":[{"scale-x":ec()}],"scale-y":[{"scale-y":ec()}],"scale-z":[{"scale-z":ec()}],"scale-3d":["scale-3d"],skew:[{skew:ed()}],"skew-x":[{"skew-x":ed()}],"skew-y":[{"skew-y":ed()}],transform:[{transform:[Z,B,"","none","gpu","cpu"]}],"transform-origin":[{origin:ei()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eu()}],"translate-x":[{"translate-x":eu()}],"translate-y":[{"translate-y":eu()}],"translate-z":[{"translate-z":eu()}],"translate-none":["translate-none"],accent:[{accent:ee()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ee()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z,B]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z,B]}],fill:[{fill:["none",...ee()]}],"stroke-w":[{stroke:[M,U,Y,q]}],stroke:[{stroke:["none",...ee()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})},9697:(e,r,t)=>{t.d(r,{Cr:()=>o,I18nLabel:()=>l,gJ:()=>a,s9:()=>i});var n=t(2115);let o={search:"Search",searchNoResult:"No results found",toc:"On this page",tocNoHeadings:"No Headings",lastUpdate:"Last updated on",chooseLanguage:"Choose a language",nextPage:"Next Page",previousPage:"Previous Page",chooseTheme:"Theme",editOnGithub:"Edit on GitHub"},a=(0,n.createContext)({text:o});function l(e){let{text:r}=i();return r[e.label]}function i(){return(0,n.useContext)(a)}},9946:(e,r,t)=>{t.d(r,{A:()=>d});var n=t(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase()),l=e=>{let r=a(e);return r.charAt(0).toUpperCase()+r.slice(1)},i=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,n.forwardRef)((e,r)=>{let{color:t="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:c="",children:d,iconNode:u,...f}=e;return(0,n.createElement)("svg",{ref:r,...s,width:o,height:o,stroke:t,strokeWidth:l?24*Number(a)/Number(o):a,className:i("lucide",c),...f},[...u.map(e=>{let[r,t]=e;return(0,n.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),d=(e,r)=>{let t=(0,n.forwardRef)((t,a)=>{let{className:s,...d}=t;return(0,n.createElement)(c,{ref:a,iconNode:r,className:i("lucide-".concat(o(l(e))),"lucide-".concat(e),s),...d})});return t.displayName=l(e),t}}}]);