"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6197],{58249:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(24925),o=r.n(n)},60085:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(33943),o=r.n(n)},24925:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return u}});let n=r(49281),o=r(43755),a=r(38055),i=n._(r(94494));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=a.Image},42573:function(e,t,r){r.d(t,{B:function(){return l}});var n=r(11979),o=r(87867),a=r(98196),i=r(59912),u=r(49147);function l(e){let t=e+"CollectionProvider",[r,l]=(0,o.b)(t),[c,f]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,u.jsx)(c,{scope:t,itemMap:a,collectionRef:o,children:r})};s.displayName=t;let d=e+"CollectionSlot",v=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=f(d,r),l=(0,a.e)(t,o.collectionRef);return(0,u.jsx)(i.g7,{ref:l,children:n})});v.displayName=d;let p=e+"CollectionItemSlot",m="data-radix-collection-item",b=n.forwardRef((e,t)=>{let{scope:r,children:o,...l}=e,c=n.useRef(null),s=(0,a.e)(t,c),d=f(p,r);return n.useEffect(()=>(d.itemMap.set(c,{ref:c,...l}),()=>void d.itemMap.delete(c))),(0,u.jsx)(i.g7,{[m]:"",ref:s,children:o})});return b.displayName=p,[{Provider:s,Slot:v,ItemSlot:b},function(t){let r=f(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},l]}},48077:function(e,t,r){r.d(t,{gm:function(){return a}});var n=r(11979);r(49147);var o=n.createContext(void 0);function a(e){let t=n.useContext(o);return e||t||"ltr"}},57798:function(e,t,r){r.d(t,{Pc:function(){return x},ck:function(){return S},fC:function(){return T}});var n=r(11979),o=r(81244),a=r(42573),i=r(98196),u=r(87867),l=r(46383),c=r(46999),f=r(92851),s=r(79548),d=r(48077),v=r(49147),p="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[g,w,y]=(0,a.B)(b),[h,x]=(0,u.b)(b,[y]),[R,C]=h(b),M=n.forwardRef((e,t)=>(0,v.jsx)(g.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,v.jsx)(g.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,v.jsx)(I,{...e,ref:t})})}));M.displayName=b;var I=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:u=!1,dir:l,currentTabStopId:b,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:y,onEntryFocus:h,preventScrollOnEntryFocus:x=!1,...C}=e,M=n.useRef(null),I=(0,i.e)(t,M),j=(0,d.gm)(l),[A=null,F]=(0,s.T)({prop:b,defaultProp:g,onChange:y}),[T,S]=n.useState(!1),E=(0,f.W)(h),P=w(r),k=n.useRef(!1),[V,_]=n.useState(0);return n.useEffect(()=>{let e=M.current;if(e)return e.addEventListener(p,E),()=>e.removeEventListener(p,E)},[E]),(0,v.jsx)(R,{scope:r,orientation:a,dir:j,loop:u,currentTabStopId:A,onItemFocus:n.useCallback(e=>F(e),[F]),onItemShiftTab:n.useCallback(()=>S(!0),[]),onFocusableItemAdd:n.useCallback(()=>_(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>_(e=>e-1),[]),children:(0,v.jsx)(c.WV.div,{tabIndex:T||0===V?-1:0,"data-orientation":a,...C,ref:I,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{k.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!k.current;if(e.target===e.currentTarget&&t&&!T){let t=new CustomEvent(p,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=P().filter(e=>e.focusable);D([e.find(e=>e.active),e.find(e=>e.id===A),...e].filter(Boolean).map(e=>e.ref.current),x)}}k.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>S(!1))})})}),j="RovingFocusGroupItem",A=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:i=!1,tabStopId:u,...f}=e,s=(0,l.M)(),d=u||s,p=C(j,r),m=p.currentTabStopId===d,b=w(r),{onFocusableItemAdd:y,onFocusableItemRemove:h}=p;return n.useEffect(()=>{if(a)return y(),()=>h()},[a,y,h]),(0,v.jsx)(g.ItemSlot,{scope:r,id:d,focusable:a,active:i,children:(0,v.jsx)(c.WV.span,{tabIndex:m?0:-1,"data-orientation":p.orientation,...f,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a?p.onItemFocus(d):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>p.onItemFocus(d)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return F[o]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=b().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=p.loop?(r=o,n=a+1,r.map((e,t)=>r[(n+t)%r.length])):o.slice(a+1)}setTimeout(()=>D(o))}})})})});A.displayName=j;var F={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function D(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var T=M,S=A},77971:function(e,t,r){r.d(t,{VY:function(){return S},aV:function(){return D},fC:function(){return F},xz:function(){return T}});var n=r(11979),o=r(81244),a=r(87867),i=r(57798),u=r(35626),l=r(46999),c=r(48077),f=r(79548),s=r(46383),d=r(49147),v="Tabs",[p,m]=(0,a.b)(v,[i.Pc]),b=(0,i.Pc)(),[g,w]=p(v),y=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,onValueChange:o,defaultValue:a,orientation:i="horizontal",dir:u,activationMode:v="automatic",...p}=e,m=(0,c.gm)(u),[b,w]=(0,f.T)({prop:n,onChange:o,defaultProp:a});return(0,d.jsx)(g,{scope:r,baseId:(0,s.M)(),value:b,onValueChange:w,orientation:i,dir:m,activationMode:v,children:(0,d.jsx)(l.WV.div,{dir:m,"data-orientation":i,...p,ref:t})})});y.displayName=v;var h="TabsList",x=n.forwardRef((e,t)=>{let{__scopeTabs:r,loop:n=!0,...o}=e,a=w(h,r),u=b(r);return(0,d.jsx)(i.fC,{asChild:!0,...u,orientation:a.orientation,dir:a.dir,loop:n,children:(0,d.jsx)(l.WV.div,{role:"tablist","aria-orientation":a.orientation,...o,ref:t})})});x.displayName=h;var R="TabsTrigger",C=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,disabled:a=!1,...u}=e,c=w(R,r),f=b(r),s=j(c.baseId,n),v=A(c.baseId,n),p=n===c.value;return(0,d.jsx)(i.ck,{asChild:!0,...f,focusable:!a,active:p,children:(0,d.jsx)(l.WV.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":v,"data-state":p?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:s,...u,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():c.onValueChange(n)}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&c.onValueChange(n)}),onFocus:(0,o.M)(e.onFocus,()=>{let e="manual"!==c.activationMode;p||a||!e||c.onValueChange(n)})})})});C.displayName=R;var M="TabsContent",I=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,forceMount:a,children:i,...c}=e,f=w(M,r),s=j(f.baseId,o),v=A(f.baseId,o),p=o===f.value,m=n.useRef(p);return n.useEffect(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,d.jsx)(u.z,{present:a||p,children:r=>{let{present:n}=r;return(0,d.jsx)(l.WV.div,{"data-state":p?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":s,hidden:!n,id:v,tabIndex:0,...c,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:n&&i})}})});function j(e,t){return"".concat(e,"-trigger-").concat(t)}function A(e,t){return"".concat(e,"-content-").concat(t)}I.displayName=M;var F=y,D=x,T=C,S=I},31618:function(e,t,r){function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{W:function(){return n}}),t.Z=n}}]);