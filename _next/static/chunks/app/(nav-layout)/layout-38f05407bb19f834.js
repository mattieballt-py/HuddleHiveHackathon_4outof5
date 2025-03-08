(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6231],{83657:function(e,t,n){Promise.resolve().then(n.bind(n,78832))},78832:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var a=n(49147),s=n(11979),r=n(48846),l=n(60085),i=n(58249),o=n(20055),c=n(33220),d=n(8107),u=n(28670),h=n(94011),m=n(84996),f=n(60101),x=n(91760),p=n(37361),g=n(14762),j=n(39432),v=n(23852),b=n(85978),k=n(72259);let y=["build","make","create","design","develop","code","hack"],N=[c.Z,d.Z,u.Z,h.Z],C=()=>{let[e,t]=(0,s.useState)(0),n=N[e%N.length],c=(0,r.usePathname)(),{user:d}=(0,x.aF)(),u=(0,k.G)(),{mutateAsync:h,isPending:C}=(0,b.c)(),w=async()=>{var e;let t=null!==(e=null==d?void 0:d.emailAddresses[0].emailAddress)&&void 0!==e?e:"",n=await u({title:"Share your feedback!",body:"We want to provide the best experience for you. Please share your feedback with us.",inputs:[{name:"message",label:"Message",defaultValue:"",inputProps:{type:"textarea",required:!0}},{name:"email",label:"Email",defaultValue:t,inputProps:{type:"email",required:!0}}]});n&&await h({message:n.message,email:n.email})};return d&&c.includes("/profile/".concat(d.id,"/edit"))?null:(0,a.jsxs)("footer",{className:"flex shrink-0 flex-col border-t border-foreground/30 bg-background","aria-labelledby":"footer-heading",children:[(0,a.jsx)("h2",{id:"footer-heading",className:"sr-only",children:"Footer"}),(0,a.jsxs)("div",{className:"mx-auto max-w-6xl px-6 pb-8 pt-8 sm:pt-24 md:pt-16 lg:px-8 ",children:[(0,a.jsxs)("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsx)(l.default,{href:"/",className:"block w-8",children:(0,a.jsx)(v.T,{className:"w-8 hover:text-foreground",hoverable:!1})}),(0,a.jsx)("p",{className:"text-sm leading-6 ",children:"Providing attendees with the workspace, tools and resources to make hackathon projects stand out from the crowd."}),(0,a.jsx)("div",{className:"mx-auto mt-12 flex max-w-xl flex-row items-center space-x-8",children:f.f.map(e=>(0,a.jsx)(l.default,{href:e.url,className:"opacity-80 hover:opacity-100",children:(0,a.jsx)(i.default,{className:"w-6 object-contain invert dark:invert-0",src:e.imgSrc,alt:e.name,width:100,height:100})},e.name))})]}),(0,a.jsxs)("div",{className:"mt-8 grid grid-cols-2 gap-8 lg:mt-16 xl:col-span-2 xl:mt-0",children:[(0,a.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-sm font-semibold leading-6 ",children:"Hackathons"}),(0,a.jsx)("ul",{role:"list",className:"mt-6 space-y-4",children:j.publicNavigationLinks.hackathon.links.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(l.default,{href:e.href,className:"text-sm leading-6 ",children:e.name})},e.name))})]}),(0,a.jsxs)("div",{className:"mt-10 md:mt-0",children:[(0,a.jsx)("h3",{className:"text-sm font-semibold leading-6",children:"Host"}),(0,a.jsx)("ul",{role:"list",className:"mt-6 space-y-4",children:j.publicNavigationLinks.host.links.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(l.default,{href:e.href,className:"text-sm leading-6 ",children:e.name})},e.name))})]})]}),(0,a.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-sm font-semibold leading-6",children:"About"}),(0,a.jsx)("ul",{role:"list",className:"mt-6 space-y-4",children:[...j.publicNavigationLinks.about.links,{description:"Tell us what you think",onClick:w,icon:p.Z,name:"Share your feedback"},...j.publicNavigationLinks.about.additionalLinks].map(e=>(0,a.jsx)("li",{children:"href"in e?(0,a.jsx)(l.default,{href:e.href,className:(0,g.cn)(e.hidden?"hidden":"text-sm leading-6 "),children:e.name}):(0,a.jsx)("button",{onClick:e.onClick,className:"text-sm leading-6 ",children:e.name})},e.name))})]}),(0,a.jsxs)("div",{className:"mt-10 md:mt-0",children:[(0,a.jsx)("h3",{className:"text-sm font-semibold leading-6",children:"Legal"}),(0,a.jsx)("ul",{role:"list",className:"mt-6 space-y-4",children:j.publicNavigationLinks.legal.links.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(l.default,{href:e.href,className:"text-sm leading-6 ",children:e.name})},e.name))})]})]})]})]}),(0,a.jsx)("div",{className:"mt-16 border-t border-primary/10 pt-8 sm:mt-20 lg:mt-24",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("p",{className:"text-sm leading-5 ",children:["\xa9",m.ou.local().year," ",(0,a.jsx)("span",{className:"font-medium",children:"HackathonParty"})]}),(0,a.jsxs)(o.m.button,{whileTap:{scale:.9},animate:0===e?{}:{scale:[1,1.1,1],transition:{duration:.2,ease:"easeInOut"}},"data-theme":"learn",className:"hidden items-center space-x-1 bg-transparent text-sm text-foreground hover:text-primary sm:flex",onClick:()=>{t(e+1)},children:[(0,a.jsx)(n,{className:"h-3 w-3"}),(0,a.jsxs)("p",{className:"",children:["What will you ",y[e%y.length],"?"]})]})]})})]})]})};var w=n(71939),M=n(51075);function T(e){return(0,a.jsxs)("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",...e,children:[(0,a.jsx)("path",{d:"M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M13 15V19",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function L(e){let{player:t,amount:n=10}=e;return(0,a.jsxs)("button",{type:"button",className:"group relative rounded-full focus:outline-none",onClick:()=>t.seekBy(n),"aria-label":"Fast-forward ".concat(n," seconds"),children:[(0,a.jsx)("div",{className:"absolute -inset-4 -left-2 md:hidden"}),(0,a.jsx)(T,{className:"h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"})]})}function S(e){let{muted:t,...n}=e;return(0,a.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"}),(0,a.jsx)("path",{d:"M16 10L19 13",fill:"none"}),(0,a.jsx)("path",{d:"M19 10L16 13",fill:"none"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"}),(0,a.jsx)("path",{d:"M17 7C17 7 19 9 19 12C19 15 17 17 17 17",fill:"none"}),(0,a.jsx)("path",{d:"M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5",fill:"none"})]})})}function V(e){let{player:t}=e;return(0,a.jsxs)("button",{type:"button",className:"group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none",onClick:()=>t.toggleMute(),"aria-label":t.muted?"Unmute":"Mute",children:[(0,a.jsx)("div",{className:"absolute -inset-4 md:hidden"}),(0,a.jsx)(S,{muted:t.muted,className:"h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"})]})}let P=[{value:1,icon:function(e){return(0,a.jsxs)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",fill:"none",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,a.jsx)("path",{d:"M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2"}),(0,a.jsx)("path",{d:"M3.75 7.25L5.25 5.77539V11.25"}),(0,a.jsx)("path",{d:"M8.75 7.75L11.25 10.25"}),(0,a.jsx)("path",{d:"M11.25 7.75L8.75 10.25"})]})}},{value:1.5,icon:function(e){return(0,a.jsxs)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",fill:"none",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,a.jsx)("path",{d:"M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2"}),(0,a.jsx)("path",{d:"M2.75 7.25L4.25 5.77539V11.25"}),(0,a.jsx)("path",{d:"M7.5 11C7.5 11.2761 7.27614 11.5 7 11.5C6.72386 11.5 6.5 11.2761 6.5 11C6.5 10.7239 6.72386 10.5 7 10.5C7.27614 10.5 7.5 10.7239 7.5 11Z",strokeWidth:"1"}),(0,a.jsx)("path",{d:"M12.25 5.75H9.75V8.25H10.75C11.5784 8.25 12.25 8.92157 12.25 9.75V9.75C12.25 10.5784 11.5784 11.25 10.75 11.25H9.75"})]})}},{value:2,icon:function(e){return(0,a.jsxs)("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",fill:"none",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,a.jsx)("path",{d:"M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2"}),(0,a.jsx)("path",{d:"M9.75 8.75L12.25 11.25"}),(0,a.jsx)("path",{d:"M12.25 8.75L9.75 11.25"}),(0,a.jsx)("path",{d:"M3.75 7.25C3.75 7.25 3.90144 5.75 5.63462 5.75C6.1633 5.75 6.5448 5.95936 6.81973 6.25035C7.67157 7.15197 6.97033 8.47328 6.0238 9.28942L3.75 11.25H7.25"})]})}}];function H(e){let{player:t}=e,[n,r]=(0,s.useState)(P[0]);return(0,a.jsxs)("button",{type:"button",className:"relative flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",onClick:()=>{r(e=>{let n=(P.indexOf(e)+1)%P.length,a=P[n];return t.playbackRate(a.value),a})},"aria-label":"Playback rate",children:[(0,a.jsx)("div",{className:"absolute -inset-4 md:hidden"}),(0,a.jsx)(n.icon,{className:"h-4 w-4"})]})}function E(e){return(0,a.jsx)("svg",{viewBox:"0 0 36 36","aria-hidden":"true",...e,children:(0,a.jsx)("path",{d:"M8.5 4C7.67157 4 7 4.67157 7 5.5V30.5C7 31.3284 7.67157 32 8.5 32H11.5C12.3284 32 13 31.3284 13 30.5V5.5C13 4.67157 12.3284 4 11.5 4H8.5ZM24.5 4C23.6716 4 23 4.67157 23 5.5V30.5C23 31.3284 23.6716 32 24.5 32H27.5C28.3284 32 29 31.3284 29 30.5V5.5C29 4.67157 28.3284 4 27.5 4H24.5Z"})})}function R(e){return(0,a.jsx)("svg",{viewBox:"0 0 36 36","aria-hidden":"true",...e,children:(0,a.jsx)("path",{d:"M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"})})}var Z=n(14439);function A(e){let{player:t}=e,n=t.playing?E:R;return(0,a.jsxs)("button",{type:"button","data-theme":"host",className:(0,g.cn)((0,Z.d)(),"h-14 w-14 rounded-full bg-primary/50 hover:bg-primary/60"),onClick:()=>t.toggle(),"aria-label":t.playing?"Pause":"Play",children:[(0,a.jsx)("div",{className:"absolute -inset-3 md:hidden"}),(0,a.jsx)(n,{className:"h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7"})]})}function B(e){return(0,a.jsxs)("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,a.jsx)("path",{d:"M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"}),(0,a.jsx)("path",{d:"M5 15V19"}),(0,a.jsx)("path",{d:"M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"})]})}function D(e){let{player:t,amount:n=10}=e;return(0,a.jsxs)("button",{type:"button",className:"group relative rounded-full focus:outline-none",onClick:()=>t.seekBy(-n),"aria-label":"Rewind ".concat(n," seconds"),children:[(0,a.jsx)("div",{className:"absolute -inset-4 -right-2 md:hidden"}),(0,a.jsx)(B,{className:"h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"})]})}var _=n(81861),W=n(8904),F=n(81090),O=n(1361),U=n(61765),I=n(29559),G=n(31618);function q(e){let t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60);return e=e-3600*t-60*n,[t,n,e]}function Y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=t.slice(t.findIndex(e=>0!==e));return e.slice(e.length-n.length).map(e=>e.toString().padStart(2,"0")).join(":")}function z(e){let{state:t,trackRef:n,focusProps:r,isFocusVisible:l,index:i}=e,o=(0,s.useRef)(null),{thumbProps:c,inputProps:d}=(0,_.p)({index:i,trackRef:n,inputRef:o},t);return(0,a.jsx)("div",{className:"absolute top-1/2 -translate-x-1/2",style:{left:"".concat(100*t.getThumbPercent(i),"%")},children:(0,a.jsx)("div",{...c,onMouseDown:function(){for(var t,n,a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];null===(t=c.onMouseDown)||void 0===t||t.call(c,...s),null===(n=e.onChangeStart)||void 0===n||n.call(e)},onPointerDown:function(){for(var t,n,a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];null===(t=c.onPointerDown)||void 0===t||t.call(c,...s),null===(n=e.onChangeStart)||void 0===n||n.call(e)},className:(0,G.Z)("h-4 rounded-full",l||t.isThumbDragging(i)?"w-1.5 bg-slate-900":"w-1 bg-slate-700"),children:(0,a.jsx)(W.T,{children:(0,a.jsx)("input",{ref:o,...(0,F.d)(d,r)})})})})}function J(e){let t=(0,s.useRef)(null),n=(0,I.x)(e),{groupProps:r,trackProps:l,labelProps:i,outputProps:o}=(0,O.o)(e,n,t),{focusProps:c,isFocusVisible:d}=(0,U.F)(),u=q(n.getThumbValue(0)),h=q(n.getThumbMaxValue(0));return(0,a.jsxs)("div",{...r,className:"absolute inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:relative",children:[e.label&&(0,a.jsx)("label",{className:"sr-only",...i,children:e.label}),(0,a.jsxs)("div",{...l,onMouseDown:function(){for(var t,n,a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];null===(t=l.onMouseDown)||void 0===t||t.call(l,...s),null===(n=e.onChangeStart)||void 0===n||n.call(e)},onPointerDown:function(){for(var t,n,a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];null===(t=l.onPointerDown)||void 0===t||t.call(l,...s),null===(n=e.onChangeStart)||void 0===n||n.call(e)},ref:t,className:"relative w-full bg-black/10 dark:bg-white/30 md:rounded-full",children:[(0,a.jsx)("div",{"data-theme":"host",className:(0,G.Z)("h-2 md:rounded-l-xl md:rounded-r-md",d||n.isThumbDragging(0)?"bg-black/20 dark:bg-white/50":"bg-primary/50"),style:{width:0===n.getThumbValue(0)?0:"calc(".concat(100*n.getThumbPercent(0),"% - ").concat(d||n.isThumbDragging(0)?"0.3125rem":"0.25rem",")")}}),(0,a.jsx)(z,{index:0,state:n,trackRef:t,onChangeStart:e.onChangeStart,focusProps:c,isFocusVisible:d})]}),(0,a.jsxs)("div",{className:"hidden items-center gap-2 md:flex",children:[(0,a.jsx)("output",{...o,"aria-live":"off",className:(0,G.Z)("hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:block",0===n.getThumbMaxValue(0)&&"opacity-0",d||n.isThumbDragging(0)?"bg-slate-100 text-slate-900":"text-slate-500"),children:Y(u,h)}),(0,a.jsx)("span",{className:"text-sm leading-6 text-slate-300","aria-hidden":"true",children:"/"}),(0,a.jsx)("span",{className:(0,G.Z)("hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-slate-500 md:block",0===n.getThumbMaxValue(0)&&"opacity-0"),children:Y(h)})]})]})}function K(e){var t;let n,a;let[s,r,l]=(n=Math.floor((t=e)/3600),a=Math.floor((t-3600*n)/60),t=t-3600*n-60*a,[n,a,t]);return"".concat(s," hour").concat(1===s?"":"s",", ").concat(r," minute").concat(1===r?"":"s",", ").concat(l," second").concat(1===l?"":"s")}function Q(){let e=(0,M.x)(),t=(0,s.useRef)(!1),[n,r]=(0,s.useState)(e.currentTime);return((0,s.useEffect)(()=>{r(null)},[e.currentTime]),e.episode)?(0,a.jsxs)("div",{className:"flex items-center gap-6 border-t bg-popover px-4 py-4 backdrop-blur-sm md:px-6",children:[(0,a.jsx)("div",{className:"hidden md:block",children:(0,a.jsx)(A,{player:e})}),(0,a.jsxs)("div",{className:"mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1",children:[(0,a.jsx)("p",{className:"truncate text-center text-sm font-bold leading-6 md:text-left",title:e.episode.title,children:e.episode.title}),(0,a.jsxs)("div",{className:"flex justify-between gap-6",children:[(0,a.jsx)("div",{className:"flex items-center md:hidden",children:(0,a.jsx)(V,{player:e})}),(0,a.jsxs)("div",{className:"flex flex-none items-center gap-4",children:[(0,a.jsx)(D,{player:e}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsx)(A,{player:e})}),(0,a.jsx)(L,{player:e})]}),(0,a.jsx)(J,{label:"Current time",maxValue:e.duration,step:1,value:[null!=n?n:e.currentTime],onChange:e=>{let[t]=e;return r(t)},onChangeEnd:n=>{let[a]=n;e.seek(a),t.current&&e.play()},numberFormatter:{format:K},onChangeStart:()=>{t.current=e.playing,e.pause()}}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(H,{player:e})}),(0,a.jsx)("div",{className:"hidden items-center md:flex",children:(0,a.jsx)(V,{player:e})})]})]})]})]}):null}function X(e){let{children:t}=e,n=(0,s.useRef)(null),l=(0,r.usePathname)();return(0,s.useEffect)(()=>{var e;null===(e=n.current)||void 0===e||e.scrollTo(0,0)},[l]),(0,a.jsxs)(M.n,{children:[(0,a.jsxs)("div",{id:"main",className:"flex h-screen flex-col transition-colors duration-100",ref:n,children:[(0,a.jsx)(w.Nav,{}),(0,a.jsxs)("div",{className:"flex h-full w-screen flex-col overflow-y-auto overflow-x-hidden",children:[(0,a.jsx)("main",{className:"flex flex-grow flex-col",children:t}),(0,a.jsx)(C,{})]})]}),(0,a.jsx)("div",{className:"lg:left-112 xl:left-120 fixed inset-x-0 bottom-0 z-10",children:(0,a.jsx)(Q,{})})]})}},51075:function(e,t,n){"use strict";n.d(t,{n:function(){return i},x:function(){return o}});var a=n(49147),s=n(11979);let r=(0,s.createContext)(null);function l(e,t){switch(t.type){case"SET_META":return{...e,episode:t.payload};case"PLAY":return{...e,playing:!0};case"PAUSE":return{...e,playing:!1};case"TOGGLE_MUTE":return{...e,muted:!e.muted};case"SET_CURRENT_TIME":return{...e,currentTime:t.payload};case"SET_DURATION":return{...e,duration:t.payload}}}function i(e){let{children:t}=e,[n,i]=(0,s.useReducer)(l,{playing:!1,muted:!1,duration:0,currentTime:0,episode:null}),o=(0,s.useRef)(null),c=(0,s.useMemo)(()=>({play(e){var t;if(e&&(i({type:"SET_META",payload:e}),o.current&&o.current.currentSrc!==e.audio.src)){let t=o.current.playbackRate;o.current.src=e.audio.src,o.current.load(),o.current.pause(),o.current.playbackRate=t,o.current.currentTime=0}null===(t=o.current)||void 0===t||t.play()},pause(){var e;null===(e=o.current)||void 0===e||e.pause()},toggle(e){this.isPlaying(e)?c.pause():c.play(e)},seekBy(e){o.current&&(o.current.currentTime+=e)},seek(e){o.current&&(o.current.currentTime=e)},playbackRate(e){o.current&&(o.current.playbackRate=e)},toggleMute(){i({type:"TOGGLE_MUTE"})},isPlaying(e){var t;return e?n.playing&&(null===(t=o.current)||void 0===t?void 0:t.currentSrc)===e.audio.src:n.playing}}),[n.playing]),d=(0,s.useMemo)(()=>({...n,...c}),[n,c]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Provider,{value:d,children:t}),(0,a.jsx)("audio",{ref:o,onPlay:()=>i({type:"PLAY"}),onPause:()=>i({type:"PAUSE"}),onTimeUpdate:e=>{i({type:"SET_CURRENT_TIME",payload:Math.floor(e.currentTarget.currentTime)})},onDurationChange:e=>{i({type:"SET_DURATION",payload:Math.floor(e.currentTarget.duration)})},muted:n.muted})]})}function o(e){let t=(0,s.useContext)(r);return(0,s.useMemo)(()=>({...t,play(){t.play(e)},toggle(){t.toggle(e)},get playing(){return t.isPlaying(e)}}),[t,e])}},85978:function(e,t,n){"use strict";n.d(t,{c:function(){return r}});var a=n(48854),s=n(95623);function r(){return(0,a.useMutation)({mutationFn:l})}async function l(e){let{message:t,email:n}=e,a=await fetch("/api/app-feedback",{method:"POST",body:JSON.stringify({message:t,email:n})});if(a.ok)return s.Am.success("Feedback submitted successfully"),a.json();throw s.Am.error("The server returned a ".concat(a.status," status code")),Error("The server returned a ".concat(a.status," status code"))}},64925:function(e,t,n){"use strict";n.d(t,{cn:function(){return r}});var a=n(31618),s=n(5306);let r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,a.W)(t))}},60101:function(e,t,n){"use strict";n.d(t,{V:function(){return a},f:function(){return s}});let a="https://discord.gg/9R5m39V3n4",s=[{name:"Discord",url:a,imgSrc:"https://utfs.io/f/88753098-b838-4806-a6e7-7668706c5ce1-rn3h9o.png",imgSrcBlack:"https://utfs.io/f/1c580fc6-2589-4803-8d15-e3eb169a855c-f3t8ny.png"},{name:"LinkedIn",url:"https://www.linkedin.com/company/hackathonparty",imgSrc:"https://utfs.io/f/65f48dc0-c050-4c19-b411-eeda09731422-jraewu.png",imgSrcBlack:"https://utfs.io/f/07f1c058-1308-4447-8482-0b7614c54853-ruuoi8.png"},{name:"Instagram",url:"https://www.instagram.com/hackathonparty/",imgSrc:"https://utfs.io/f/65767f06-c8f5-437a-8030-059ef95a4724-h7hyq.png",imgSrcBlack:"https://utfs.io/f/b036c283-90e7-446d-8dd4-9ddccd462049-xl7ehw.png"},{name:"Twitter",url:"https://twitter.com/HackathonParty",imgSrc:"https://utfs.io/f/2ff13252-e0d6-4dce-a91e-57dd55980170-3c.png",imgSrcBlack:"https://utfs.io/f/d204cc47-ebf4-4734-8491-7c26cfb8acd6-8eok8a.png"},{name:"TikTok",url:"https://www.tiktok.com/@hackathonparty",imgSrc:"https://utfs.io/f/c253b46d-6d77-4a43-8c91-47dd0f24d89b-eg6pl2.png",imgSrcBlack:"https://utfs.io/f/3f2ec371-4859-4885-b48e-a099ce4a21f3-mjkkto.png"}]}},function(e){e.O(0,[2507,8415,3943,5306,55,2894,6861,3508,4996,1760,4830,2383,5623,9825,492,1787,164,1422,5402,7856,2259,1939,5506,6228,1744],function(){return e(e.s=83657)}),_N_E=e.O()}]);