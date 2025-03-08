"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6861],{69814:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,i={},u=0,a=function(e){return e&&(e.host||a(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=a(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});i[n]||(i[n]=new WeakMap);var s=i[n],d=[],f=new Set,v=new Set(l),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else{var t=e.getAttribute(c),i=null!==t&&"false"!==t,u=(r.get(e)||0)+1,a=(s.get(e)||0)+1;r.set(e,u),s.set(e,a),d.push(e),1===u&&i&&o.set(e,!0),1===a&&e.setAttribute(n,"true"),i||e.setAttribute(c,"true")}})};return m(t),f.clear(),u++,function(){d.forEach(function(e){var t=r.get(e)-1,i=s.get(e)-1;r.set(e,t),s.set(e,i),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),i||e.removeAttribute(n)}),--u||(r=new WeakMap,r=new WeakMap,o=new WeakMap,i={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},12219:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(11979),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i=n(99336);let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:u=24,strokeWidth:a=2,absoluteStrokeWidth:c,className:l="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...o,width:u,height:u,stroke:n,strokeWidth:c?24*Number(a)/Number(u):a,className:(0,i.z)("lucide",l),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])})},15712:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(11979),o=n(99336),i=n(12219);let u=(e,t)=>{let n=(0,r.forwardRef)((n,u)=>{let{className:a,...c}=n;return(0,r.createElement)(i.Z,{ref:u,iconNode:t,className:(0,o.z)("lucide-".concat((0,o.m)(e)),a),...c})});return n.displayName="".concat(e),n}},99336:function(e,t,n){n.d(t,{m:function(){return r},z:function(){return o}});let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")}},91588:function(e,t,n){n.d(t,{Av:function(){return u},pF:function(){return r},xv:function(){return i},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",i="with-scroll-bars-hidden",u="--removed-body-scroll-bar-size"},96441:function(e,t,n){n.d(t,{jp:function(){return m}});var r=n(11979),o=n(14542),i=n(91588),u={left:0,top:0,right:0,gap:0},a=function(e){return parseInt(e||"",10)||0},c=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[a(n),a(r),a(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return u;var t=c(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},s=(0,o.Ws)(),d="data-scroll-locked",f=function(e,t,n,r){var o=e.left,u=e.top,a=e.right,c=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(i.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body[").concat(d,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(i.pF," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(i.zi," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(i.pF," .").concat(i.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i.zi," .").concat(i.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(d,"] {\n    ").concat(i.Av,": ").concat(c,"px;\n  }\n")},v=function(){var e=parseInt(document.body.getAttribute(d)||"0",10);return isFinite(e)?e:0},p=function(){r.useEffect(function(){return document.body.setAttribute(d,(v()+1).toString()),function(){var e=v()-1;e<=0?document.body.removeAttribute(d):document.body.setAttribute(d,e.toString())}},[])},m=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,i=void 0===o?"margin":o;p();var u=r.useMemo(function(){return l(i)},[i]);return r.createElement(s,{styles:f(u,!t,i,n?"":"!important")})}},77404:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(43741),o=n(11979),i=n(91588),u=n(42378),a=(0,n(3200)._)(),c=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),i=o.useState({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:c}),l=i[0],s=i[1],d=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,C=e.gapMode,S=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),L=(0,u.q)([n,t]),x=(0,r.pi)((0,r.pi)({},S),l);return o.createElement(o.Fragment,null,m&&o.createElement(g,{sideCar:a,removeScrollBar:p,shards:h,noIsolation:y,inert:E,setCallbacks:s,allowPinchZoom:!!b,lockRef:n,gapMode:C}),d?o.cloneElement(o.Children.only(f),(0,r.pi)((0,r.pi)({},x),{ref:L})):o.createElement(void 0===w?"div":w,(0,r.pi)({},x,{className:v,ref:L}),f))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:i.zi,zeroRight:i.pF};var s=n(14925),d=n(96441),f=n(14542),v=!1;if("undefined"!=typeof window)try{var p=Object.defineProperty({},"passive",{get:function(){return v=!0,!0}});window.addEventListener("test",p,p),window.removeEventListener("test",p,p)}catch(e){v=!1}var m=!!v&&{passive:!1},h=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},g=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),y(e,r)){var o=E(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},y=function(e,t){return"v"===e?h(t,"overflowY"):h(t,"overflowX")},E=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},b=function(e,t,n,r,o){var i,u=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),a=u*r,c=n.target,l=t.contains(c),s=!1,d=a>0,f=0,v=0;do{var p=E(e,c),m=p[0],h=p[1]-p[2]-u*m;(m||h)&&y(e,c)&&(f+=h,v+=m),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&a>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-a>v)&&(s=!0),s},w=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},C=function(e){return[e.deltaX,e.deltaY]},S=function(e){return e&&"current"in e?e.current:e},L=0,x=[],N=(0,s.L)(a,function(e){var t=o.useRef([]),n=o.useRef([0,0]),i=o.useRef(),u=o.useState(L++)[0],a=o.useState(f.Ws)[0],c=o.useRef(e);o.useEffect(function(){c.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(u));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(S),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(u))}),function(){document.body.classList.remove("block-interactivity-".concat(u)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(u))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var r,o=w(e),u=n.current,a="deltaX"in e?e.deltaX:u[0]-o[0],l="deltaY"in e?e.deltaY:u[1]-o[1],s=e.target,d=Math.abs(a)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=g(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=g(d,s)),!f)return!1;if(!i.current&&"changedTouches"in e&&(a||l)&&(i.current=r),!r)return!0;var v=i.current||r;return b(v,t,e,"h"===v?a:l,!0)},[]),s=o.useCallback(function(e){if(x.length&&x[x.length-1]===a){var n="deltaY"in e?C(e):w(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(S).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),v=o.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),p=o.useCallback(function(e){n.current=w(e),i.current=void 0},[]),h=o.useCallback(function(t){v(t.type,C(t),t.target,l(t,e.lockRef.current))},[]),y=o.useCallback(function(t){v(t.type,w(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return x.push(a),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:y}),document.addEventListener("wheel",s,m),document.addEventListener("touchmove",s,m),document.addEventListener("touchstart",p,m),function(){x=x.filter(function(e){return e!==a}),document.removeEventListener("wheel",s,m),document.removeEventListener("touchmove",s,m),document.removeEventListener("touchstart",p,m)}},[]);var E=e.removeScrollBar,N=e.inert;return o.createElement(o.Fragment,null,N?o.createElement(a,{styles:"\n  .block-interactivity-".concat(u," {pointer-events: none;}\n  .allow-interactivity-").concat(u," {pointer-events: all;}\n")}):null,E?o.createElement(d.jp,{gapMode:e.gapMode}):null)}),k=o.forwardRef(function(e,t){return o.createElement(l,(0,r.pi)({},e,{ref:t,sideCar:N}))});k.classNames=l.classNames;var R=k},14542:function(e,t,n){n.d(t,{Ws:function(){return a}});var r,o=n(11979),i=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var i,u;(i=t).styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),u=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(u)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},u=function(){var e=i();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},a=function(){var e=u();return function(t){return e(t.styles,t.dynamic),null}}},14925:function(e,t,n){n.d(t,{L:function(){return u}});var r=n(43741),o=n(11979),i=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var i=t.read();if(!i)throw Error("Sidecar medium not found");return o.createElement(i,(0,r.pi)({},n))};function u(e,t){return e.useMedium(t),i}i.isSideCarExport=!0},81244:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},98196:function(e,t,n){n.d(t,{F:function(){return o},e:function(){return i}});var r=n(11979);function o(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return r.useCallback(o(...e),e)}},87867:function(e,t,n){n.d(t,{b:function(){return u},k:function(){return i}});var r=n(11979),o=n(49147);function i(e,t){let n=r.createContext(t);function i(e){let{children:t,...i}=e,u=r.useMemo(()=>i,Object.values(i));return(0,o.jsx)(n.Provider,{value:u,children:t})}return i.displayName=e+"Provider",[i,function(o){let i=r.useContext(n);if(i)return i;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],i=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return i.scopeName=e,[function(t,i){let u=r.createContext(i),a=n.length;function c(t){let{scope:n,children:i,...c}=t,l=n?.[e][a]||u,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:i})}return n=[...n,i],c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e][a]||u,l=r.useContext(c);if(l)return l;if(void 0!==i)return i;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(i,...t)]}},74912:function(e,t,n){n.d(t,{XB:function(){return v}});var r,o=n(11979),i=n(81244),u=n(46999),a=n(98196),c=n(92851),l=n(41759),s=n(49147),d="dismissableLayer.update",f=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),v=o.forwardRef((e,t)=>{var n,v;let{disableOutsidePointerEvents:h=!1,onEscapeKeyDown:g,onPointerDownOutside:y,onFocusOutside:E,onInteractOutside:b,onDismiss:w,...C}=e,S=o.useContext(f),[L,x]=o.useState(null),N=null!==(v=null==L?void 0:L.ownerDocument)&&void 0!==v?v:null===(n=globalThis)||void 0===n?void 0:n.document,[,k]=o.useState({}),R=(0,a.e)(t,e=>x(e)),W=Array.from(S.layers),[A]=[...S.layersWithOutsidePointerEventsDisabled].slice(-1),T=W.indexOf(A),P=L?W.indexOf(L):-1,M=S.layersWithOutsidePointerEventsDisabled.size>0,D=P>=T,F=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),i=o.useRef(!1),u=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",u.current),u.current=t,n.addEventListener("click",u.current,{once:!0})):t()}else n.removeEventListener("click",u.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",u.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...S.branches].some(e=>e.contains(t));!D||n||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==w||w())},N),j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...S.branches].some(e=>e.contains(t))||(null==E||E(e),null==b||b(e),e.defaultPrevented||null==w||w())},N);return(0,l.e)(e=>{P!==S.layers.size-1||(null==g||g(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},N),o.useEffect(()=>{if(L)return h&&(0===S.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),S.layersWithOutsidePointerEventsDisabled.add(L)),S.layers.add(L),p(),()=>{h&&1===S.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[L,N,h,S]),o.useEffect(()=>()=>{L&&(S.layers.delete(L),S.layersWithOutsidePointerEventsDisabled.delete(L),p())},[L,S]),o.useEffect(()=>{let e=()=>k({});return document.addEventListener(d,e),()=>document.removeEventListener(d,e)},[]),(0,s.jsx)(u.WV.div,{...C,ref:R,style:{pointerEvents:M?D?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,j.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,F.onPointerDownCapture)})});function p(){let e=new CustomEvent(d);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,u.jH)(i,a):i.dispatchEvent(a)}v.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(f),r=o.useRef(null),i=(0,a.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,s.jsx)(u.WV.div,{...e,ref:i})}).displayName="DismissableLayerBranch"},57599:function(e,t,n){n.d(t,{EW:function(){return i}});var r=n(11979),o=0;function i(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:u()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:u()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function u(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},23140:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(11979),i=n(98196),u=n(46999),a=n(92851),c=n(49147),l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...y}=e,[E,b]=o.useState(null),w=(0,a.W)(f),C=(0,a.W)(g),S=o.useRef(null),L=(0,i.e)(t,e=>b(e)),x=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(x.paused||!E)return;let t=e.target;E.contains(t)?S.current=t:m(S.current,{select:!0})},t=function(e){if(x.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(S.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,x.paused]),o.useEffect(()=>{if(E){h.add(x);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,d);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);E.addEventListener(s,C),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(s,C),h.remove(x)},0)}}},[E,w,C,x]);let N=o.useCallback(e=>{if(!n&&!r||x.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=v(e);return[p(t,e),p(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(i,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,x.paused]);return(0,c.jsx)(u.WV.div,{tabIndex:-1,...y,ref:L,onKeyDown:N})});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}f.displayName="FocusScope";var h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},46383:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(11979),i=n(70181),u=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function c(e){let[t,n]=o.useState(u());return(0,i.b)(()=>{e||n(e=>e??String(a++))},[e]),e||(t?`radix-${t}`:"")}},28169:function(e,t,n){n.d(t,{h:function(){return c}});var r=n(11979),o=n(16356),i=n(46999),u=n(70181),a=n(49147),c=r.forwardRef((e,t)=>{var n,c;let{container:l,...s}=e,[d,f]=r.useState(!1);(0,u.b)(()=>f(!0),[]);let v=l||d&&(null===(c=globalThis)||void 0===c?void 0:null===(n=c.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,a.jsx)(i.WV.div,{...s,ref:t}),v):null});c.displayName="Portal"},46999:function(e,t,n){n.d(t,{WV:function(){return a},jH:function(){return c}});var r=n(11979),o=n(16356),i=n(59912),u=n(49147),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,a=r?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function c(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},59912:function(e,t,n){n.d(t,{A4:function(){return c},g7:function(){return u}});var r=n(11979),o=n(98196),i=n(49147),u=r.forwardRef((e,t)=>{let{children:n,...o}=e,u=r.Children.toArray(n),c=u.find(l);if(c){let e=c.props.children,n=u.map(t=>t!==c?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,i.jsx)(a,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,i.jsx)(a,{...o,ref:t,children:n})});u.displayName="Slot";var a=r.forwardRef((e,t)=>{let{children:n,...i}=e;if(r.isValidElement(n)){let e,u;let a=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:t?(0,o.F)(t,a):a})}return r.Children.count(n)>1?r.Children.only(null):null});a.displayName="SlotClone";var c=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function l(e){return r.isValidElement(e)&&e.type===c}},92851:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(11979);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},79548:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(11979),o=n(92851);function i({prop:e,defaultProp:t,onChange:n=()=>{}}){let[i,u]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[i]=n,u=r.useRef(i),a=(0,o.W)(t);return r.useEffect(()=>{u.current!==i&&(a(i),u.current=i)},[i,u,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,c=a?e:i,l=(0,o.W)(n);return[c,r.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else u(t)},[a,e,u,l])]}},41759:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(11979),o=n(92851);function i(e,t=globalThis?.document){let n=(0,o.W)(e);r.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}},70181:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(11979),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);