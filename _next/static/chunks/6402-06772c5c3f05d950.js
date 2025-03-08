"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6402],{12685:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(11979),i=n(49147);function o(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let i=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return o.scopeName=e,[function(t,o){let s=r.createContext(o),a=n.length;n=[...n,o];let u=t=>{let{scope:n,children:o,...u}=t,l=n?.[e]?.[a]||s,c=r.useMemo(()=>u,Object.values(u));return(0,i.jsx)(l.Provider,{value:c,children:o})};return u.displayName=t+"Provider",[u,function(n,i){let u=i?.[e]?.[a]||s,l=r.useContext(u);if(l)return l;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(o,...t)]}},55856:function(e,t,n){n.d(t,{XB:function(){return h}});var r,i=n(11979),o=n(81244),s=n(46999),a=n(98196),u=n(92851),l=n(41759),c=n(49147),d="dismissableLayer.update",p=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),h=i.forwardRef((e,t)=>{var n,h;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:y,onPointerDownOutside:b,onFocusOutside:g,onInteractOutside:x,onDismiss:w,...E}=e,C=i.useContext(p),[T,M]=i.useState(null),N=null!==(h=null==T?void 0:T.ownerDocument)&&void 0!==h?h:null===(n=globalThis)||void 0===n?void 0:n.document,[,O]=i.useState({}),P=(0,a.e)(t,e=>M(e)),R=Array.from(C.layers),[L]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),D=R.indexOf(L),k=T?R.indexOf(T):-1,j=C.layersWithOutsidePointerEventsDisabled.size>0,_=k>=D,S=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,u.W)(e),o=i.useRef(!1),s=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){v("dismissableLayer.pointerDownOutside",r,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",s.current),s.current=t,n.addEventListener("click",s.current,{once:!0})):t()}else n.removeEventListener("click",s.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",s.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!_||n||(null==b||b(e),null==x||x(e),e.defaultPrevented||null==w||w())},N),I=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,u.W)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&v("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==g||g(e),null==x||x(e),e.defaultPrevented||null==w||w())},N);return(0,l.e)(e=>{k!==C.layers.size-1||(null==y||y(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},N),i.useEffect(()=>{if(T)return m&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(T)),C.layers.add(T),f(),()=>{m&&1===C.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[T,N,m,C]),i.useEffect(()=>()=>{T&&(C.layers.delete(T),C.layersWithOutsidePointerEventsDisabled.delete(T),f())},[T,C]),i.useEffect(()=>{let e=()=>O({});return document.addEventListener(d,e),()=>document.removeEventListener(d,e)},[]),(0,c.jsx)(s.WV.div,{...E,ref:P,style:{pointerEvents:j?_?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.M)(e.onFocusCapture,I.onFocusCapture),onBlurCapture:(0,o.M)(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:(0,o.M)(e.onPointerDownCapture,S.onPointerDownCapture)})});function f(){let e=new CustomEvent(d);document.dispatchEvent(e)}function v(e,t,n,r){let{discrete:i}=r,o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),i?(0,s.jH)(o,a):o.dispatchEvent(a)}h.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(p),r=i.useRef(null),o=(0,a.e)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,c.jsx)(s.WV.div,{...e,ref:o})}).displayName="DismissableLayerBranch"},15752:function(e,t,n){n.d(t,{h:function(){return u}});var r=n(11979),i=n(16356),o=n(46999),s=n(70181),a=n(49147),u=r.forwardRef((e,t)=>{var n,u;let{container:l,...c}=e,[d,p]=r.useState(!1);(0,s.b)(()=>p(!0),[]);let h=l||d&&(null===(u=globalThis)||void 0===u?void 0:null===(n=u.document)||void 0===n?void 0:n.body);return h?i.createPortal((0,a.jsx)(o.WV.div,{...c,ref:t}),h):null});u.displayName="Portal"},83907:function(e,t,n){n.d(t,{z:function(){return s}});var r=n(11979),i=n(98196),o=n(70181),s=e=>{var t,n;let s,u;let{present:l,children:c}=e,d=function(e){var t,n;let[i,s]=r.useState(),u=r.useRef({}),l=r.useRef(e),c=r.useRef("none"),[d,p]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(u.current);c.current="mounted"===d?e:"none"},[d]),(0,o.b)(()=>{let t=u.current,n=l.current;if(n!==e){let r=c.current,i=a(t);e?p("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?p("UNMOUNT"):n&&r!==i?p("ANIMATION_OUT"):p("UNMOUNT"),l.current=e}},[e,p]),(0,o.b)(()=>{if(i){var e;let t;let n=null!==(e=i.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(u.current).includes(e.animationName);if(e.target===i&&r&&(p("ANIMATION_END"),!l.current)){let e=i.style.animationFillMode;i.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===i.style.animationFillMode&&(i.style.animationFillMode=e)})}},o=e=>{e.target===i&&(c.current=a(u.current))};return i.addEventListener("animationstart",o),i.addEventListener("animationcancel",r),i.addEventListener("animationend",r),()=>{n.clearTimeout(t),i.removeEventListener("animationstart",o),i.removeEventListener("animationcancel",r),i.removeEventListener("animationend",r)}}p("ANIMATION_END")},[i,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(u.current=getComputedStyle(e)),s(e)},[])}}(l),p="function"==typeof c?c({present:d.isPresent}):r.Children.only(c),h=(0,i.e)(d.ref,(s=null===(t=Object.getOwnPropertyDescriptor(p.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in s&&s.isReactWarning?p.ref:(s=null===(n=Object.getOwnPropertyDescriptor(p,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in s&&s.isReactWarning?p.props.ref:p.props.ref||p.ref);return"function"==typeof c||d.isPresent?r.cloneElement(p,{ref:h}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},59523:function(e,t,n){n.d(t,{Eh:function(){return Y},VY:function(){return X},fC:function(){return G},h_:function(){return H},xz:function(){return $},zt:function(){return V}});var r=n(11979),i=n(81244),o=n(98196),s=n(12685),a=n(55856),u=n(46383),l=n(60492),c=n(15752),d=n(83907),p=n(46999),h=n(59912),f=n(79548),v=n(50246),m=n(49147),[y,b]=(0,s.b)("Tooltip",[l.D7]),g=(0,l.D7)(),x="TooltipProvider",w="tooltip.open",[E,C]=y(x),T=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:i=300,disableHoverableContent:o=!1,children:s}=e,[a,u]=r.useState(!0),l=r.useRef(!1),c=r.useRef(0);return r.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,m.jsx)(E,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:r.useCallback(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),i)},[i]),isPointerInTransitRef:l,onPointerInTransitChange:r.useCallback(e=>{l.current=e},[]),disableHoverableContent:o,children:s})};T.displayName=x;var M="Tooltip",[N,O]=y(M),P=e=>{let{__scopeTooltip:t,children:n,open:i,defaultOpen:o=!1,onOpenChange:s,disableHoverableContent:a,delayDuration:c}=e,d=C(M,e.__scopeTooltip),p=g(t),[h,v]=r.useState(null),y=(0,u.M)(),b=r.useRef(0),x=null!=a?a:d.disableHoverableContent,E=null!=c?c:d.delayDuration,T=r.useRef(!1),[O=!1,P]=(0,f.T)({prop:i,defaultProp:o,onChange:e=>{e?(d.onOpen(),document.dispatchEvent(new CustomEvent(w))):d.onClose(),null==s||s(e)}}),R=r.useMemo(()=>O?T.current?"delayed-open":"instant-open":"closed",[O]),L=r.useCallback(()=>{window.clearTimeout(b.current),T.current=!1,P(!0)},[P]),D=r.useCallback(()=>{window.clearTimeout(b.current),P(!1)},[P]),k=r.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>{T.current=!0,P(!0)},E)},[E,P]);return r.useEffect(()=>()=>window.clearTimeout(b.current),[]),(0,m.jsx)(l.fC,{...p,children:(0,m.jsx)(N,{scope:t,contentId:y,open:O,stateAttribute:R,trigger:h,onTriggerChange:v,onTriggerEnter:r.useCallback(()=>{d.isOpenDelayed?k():L()},[d.isOpenDelayed,k,L]),onTriggerLeave:r.useCallback(()=>{x?D():window.clearTimeout(b.current)},[D,x]),onOpen:L,onClose:D,disableHoverableContent:x,children:n})})};P.displayName=M;var R="TooltipTrigger",L=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...s}=e,a=O(R,n),u=C(R,n),c=g(n),d=r.useRef(null),h=(0,o.e)(t,d,a.onTriggerChange),f=r.useRef(!1),v=r.useRef(!1),y=r.useCallback(()=>f.current=!1,[]);return r.useEffect(()=>()=>document.removeEventListener("pointerup",y),[y]),(0,m.jsx)(l.ee,{asChild:!0,...c,children:(0,m.jsx)(p.WV.button,{"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute,...s,ref:h,onPointerMove:(0,i.M)(e.onPointerMove,e=>{"touch"===e.pointerType||v.current||u.isPointerInTransitRef.current||(a.onTriggerEnter(),v.current=!0)}),onPointerLeave:(0,i.M)(e.onPointerLeave,()=>{a.onTriggerLeave(),v.current=!1}),onPointerDown:(0,i.M)(e.onPointerDown,()=>{f.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:(0,i.M)(e.onFocus,()=>{f.current||a.onOpen()}),onBlur:(0,i.M)(e.onBlur,a.onClose),onClick:(0,i.M)(e.onClick,a.onClose)})})});L.displayName=R;var D="TooltipPortal",[k,j]=y(D,{forceMount:void 0}),_=e=>{let{__scopeTooltip:t,forceMount:n,children:r,container:i}=e,o=O(D,t);return(0,m.jsx)(k,{scope:t,forceMount:n,children:(0,m.jsx)(d.z,{present:n||o.open,children:(0,m.jsx)(c.h,{asChild:!0,container:i,children:r})})})};_.displayName=D;var S="TooltipContent",I=r.forwardRef((e,t)=>{let n=j(S,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=e,s=O(S,e.__scopeTooltip);return(0,m.jsx)(d.z,{present:r||s.open,children:s.disableHoverableContent?(0,m.jsx)(U,{side:i,...o,ref:t}):(0,m.jsx)(A,{side:i,...o,ref:t})})}),A=r.forwardRef((e,t)=>{let n=O(S,e.__scopeTooltip),i=C(S,e.__scopeTooltip),s=r.useRef(null),a=(0,o.e)(t,s),[u,l]=r.useState(null),{trigger:c,onClose:d}=n,p=s.current,{onPointerInTransitChange:h}=i,f=r.useCallback(()=>{l(null),h(!1)},[h]),v=r.useCallback((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},i=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());l(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,i),...function(e){let{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}(t.getBoundingClientRect())])),h(!0)},[h]);return r.useEffect(()=>()=>f(),[f]),r.useEffect(()=>{if(c&&p){let e=e=>v(e,p),t=e=>v(e,c);return c.addEventListener("pointerleave",e),p.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),p.removeEventListener("pointerleave",t)}}},[c,p,v,f]),r.useEffect(()=>{if(u){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==p?void 0:p.contains(t)),i=!function(e,t){let{x:n,y:r}=e,i=!1;for(let e=0,o=t.length-1;e<t.length;o=e++){let s=t[e].x,a=t[e].y,u=t[o].x,l=t[o].y;a>r!=l>r&&n<(u-s)*(r-a)/(l-a)+s&&(i=!i)}return i}(n,u);r?f():i&&(f(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,p,u,d,f]),(0,m.jsx)(U,{...e,ref:a})}),[W,F]=y(M,{isInside:!1}),U=r.forwardRef((e,t)=>{let{__scopeTooltip:n,children:i,"aria-label":o,onEscapeKeyDown:s,onPointerDownOutside:u,...c}=e,d=O(S,n),p=g(n),{onClose:f}=d;return r.useEffect(()=>(document.addEventListener(w,f),()=>document.removeEventListener(w,f)),[f]),r.useEffect(()=>{if(d.trigger){let e=e=>{let t=e.target;(null==t?void 0:t.contains(d.trigger))&&f()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,f]),(0,m.jsx)(a.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:f,children:(0,m.jsxs)(l.VY,{"data-state":d.stateAttribute,...p,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,m.jsx)(h.A4,{children:i}),(0,m.jsx)(W,{scope:n,isInside:!0,children:(0,m.jsx)(v.f,{id:d.contentId,role:"tooltip",children:o||i})})]})})});I.displayName=S;var B="TooltipArrow",z=r.forwardRef((e,t)=>{let{__scopeTooltip:n,...r}=e,i=g(n);return F(B,n).isInside?null:(0,m.jsx)(l.Eh,{...i,...r,ref:t})});z.displayName=B;var V=T,G=P,$=L,H=_,X=I,Y=z},741:function(e,t,n){n.d(t,{R:function(){return a},m:function(){return s}});var r=n(58097),i=n(6901),o=n(91262),s=class extends i.F{#e;#t;#n;#r;constructor(e){super(),this.mutationId=e.mutationId,this.#t=e.defaultOptions,this.#n=e.mutationCache,this.#e=[],this.state=e.state||a(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.#t,...e},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#e.includes(e)||(this.#e.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#e=this.#e.filter(t=>t!==e),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(e){let t="pending"===this.state.status;try{if(!t){this.#i({type:"pending",variables:e}),await this.#n.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#i({type:"pending",context:t,variables:e})}let n=await (this.#r=(0,o.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#i({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#i({type:"pause"})},onContinue:()=>{this.#i({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#r.promise);return await this.#n.config.onSuccess?.(n,e,this.state.context,this),await this.options.onSuccess?.(n,e,this.state.context),await this.#n.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,e,this.state.context),this.#i({type:"success",data:n}),n}catch(t){try{throw await this.#n.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#n.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#i({type:"error",error:t})}}}#i(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,o.Kw)(this.options.networkMode),status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),r.V.batch(()=>{this.#e.forEach(t=>{t.onMutationUpdate(e)}),this.#n.notify({mutation:this,type:"updated",action:e})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}}}]);